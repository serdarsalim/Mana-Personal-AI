import{b as n,A as h,n as b,t as x}from"./index--Y0X4V8y.js";import{T as y,c as $,r as c}from"./mana-app-BjAicgC3.js";import"./models-CLMVJSUQ.js";var k=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(e,t,s,i)=>{for(var r=i>1?void 0:i?w(t,s):t,a=e.length-1,d;a>=0;a--)(d=e[a])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&k(t,s,r),r};const D=[{key:"all",label:"All"},{key:"notes",label:"Uploaded"},{key:"generated",label:"Generated"},{key:"pexels",label:"Pexels"}];let p=null;function C(){p=null}const m=(e,t="w-4 h-4")=>n`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,g=e=>e instanceof Error?e.message:String(e),f=e=>e.type.startsWith("image/");function v(e,t=new Date){const s=e.name.replace(/\.[^.]+$/,"").trim();if(s&&!/^image$/i.test(s))return s;const i=r=>String(r).padStart(2,"0");return`Pasted ${t.getFullYear()}-${i(t.getMonth()+1)}-${i(t.getDate())} ${i(t.getHours())}.${i(t.getMinutes())}`}function P(e){if(!e)return[];const t=Array.from(e.files??[]).filter(f);return!t.length||(e.getData("text/plain")??"").trim()?[]:t}async function G(e,t){const s=e.type==="image/gif"?e:await $(e,1600,.85),i=await new Promise((r,a)=>{const d=new XMLHttpRequest;d.open("POST","/api/media"),d.withCredentials=!0,d.setRequestHeader("content-type",s.type||e.type),d.setRequestHeader("x-file-name",encodeURIComponent(v(e))),d.upload.onprogress=u=>{u.lengthComputable&&t?.(Math.round(u.loaded/u.total*100))},d.onload=()=>{if(d.status<200||d.status>=300){let u=`Could not upload “${e.name}” (${Math.ceil(e.size/1024)} KB). Server returned ${d.status}.`;try{u=JSON.parse(d.responseText).error||u}catch{}a(new Error(u));return}try{r(JSON.parse(d.responseText).item)}catch(u){a(u)}},d.onerror=()=>a(new Error("upload failed, check the connection")),d.send(s)});return p&&(p=[i,...p.filter(r=>r.id!==i.id)]),i}let o=class extends y{constructor(){super(...arguments),this.tab="all",this.heading="Images",this.pickLabel="Insert",this.browse=!1,this.items=p??[],this.loaded=p!==null,this.uploads=[],this.dragDepth=0,this.renaming=null,this.confirm=null,this.error=null,this.stockQuery="",this.stock=[],this.stockMore=!1,this.stockLoading=!1,this.importing=null,this.canGenerate=!1,this.imagePrompt="",this.imageAspect="1:1",this.generation=null,this.startingGeneration=!1,this.stockPage=1,this.seq=0,this.onPaste=e=>{const t=P(e.clipboardData);t.length&&(e.preventDefault(),this.addFiles(t))},this.onKey=e=>{e.key==="Escape"&&(this.confirm?this.confirm=null:this.renaming?this.renaming=null:this.close())}}connectedCallback(){super.connectedCallback(),window.addEventListener("paste",this.onPaste),window.addEventListener("keydown",this.onKey),this.refresh(),this.readGeneration()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("paste",this.onPaste),window.removeEventListener("keydown",this.onKey),clearTimeout(this.generationPoll);for(const e of this.uploads)URL.revokeObjectURL(e.preview)}updated(e){e.has("renaming")&&this.renaming&&this.querySelector("[data-rename]")?.focus()}async api(e,t,s){const i=await fetch(t,{method:e,credentials:"include",headers:s===void 0?void 0:{"content-type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)}),r=await i.json();if(!i.ok&&i.status!==409)throw new Error(r.error||`${i.status}`);return{status:i.status,data:r}}applyGeneration(e){const t=this.generation;this.generation=e,clearTimeout(this.generationPoll),e?.status==="running"?(this.imagePrompt=e.prompt,this.imageAspect=e.aspect,this.isConnected&&(this.generationPoll=setTimeout(()=>void this.readGeneration(),2500))):e?.status==="done"&&e.item&&(t?.status==="running"||this.startingGeneration)?(this.items=[e.item,...this.items.filter(s=>s.id!==e.item.id)],p=this.items,this.error=null):e?.status==="failed"?(this.imagePrompt||=e.prompt,this.error=e.error||"Image generation failed. Try again."):t?.status==="running"&&(this.error="Generation was interrupted by a server restart. Try again.")}async readGeneration(){try{const{data:e}=await this.api("GET","/api/media/generate");if(!this.isConnected)return;this.canGenerate=e.available,this.applyGeneration(e.job)}catch(e){if(!this.isConnected)return;this.error=g(e),this.generation?.status==="running"&&(this.generationPoll=setTimeout(()=>void this.readGeneration(),5e3))}}async generate(){if(!(!this.imagePrompt.trim()||this.startingGeneration||this.generation?.status==="running")){this.startingGeneration=!0,this.error=null;try{const{data:e}=await this.api("POST","/api/media/generate",{prompt:this.imagePrompt.trim(),aspect:this.imageAspect});this.applyGeneration(e.job)}catch(e){this.error=g(e),await this.readGeneration()}finally{this.startingGeneration=!1}}}renderGenerator(){const e=this.startingGeneration||this.generation?.status==="running";return n`
      <form class="mb-3 flex flex-col gap-2" @submit=${t=>{t.preventDefault(),this.generate()}}>
        <label for="media-image-prompt" class="text-sm font-medium text-ink">Describe your image</label>
        <textarea id="media-image-prompt" rows="3" maxlength="4000" .value=${this.imagePrompt} ?disabled=${e}
          class="w-full resize-none px-3 py-2 rounded-lg border border-line bg-surface text-base text-ink outline-none focus:border-accent"
          placeholder="What would you like to create?"
          @input=${t=>{this.imagePrompt=t.target.value}}></textarea>
        <div class="flex flex-wrap items-center gap-2">
          <div class="flex items-center gap-0.5 rounded-lg bg-hover p-0.5" role="group" aria-label="Image shape">
            ${[["1:1","Square"],["4:5","Portrait"],["1.91:1","Landscape"]].map(([t,s])=>n`
              <button type="button" aria-pressed=${this.imageAspect===t} ?disabled=${e}
                class="px-2.5 py-1 rounded-md text-sm ${this.imageAspect===t?"bg-surface text-ink":"text-muted hover:text-ink"}"
                @click=${()=>{this.imageAspect=t}}>${s}</button>`)}
          </div>
          <div class="flex-1"></div>
          <button type="submit" ?disabled=${e||!this.imagePrompt.trim()}
            class="ml-auto flex items-center justify-center gap-1.5 h-9 w-32 rounded-lg text-sm font-semibold text-white bg-accent disabled:opacity-50">
            ${m("sparkles")} ${e?"Generating…":"Generate"}
          </button>
        </div>
      </form>`}async refresh(){try{const{data:e}=await this.api("GET","/api/media");p=e.items,this.items=e.items,this.loaded=!0}catch(e){this.error=g(e)}}close(){this.dispatchEvent(new CustomEvent("close"))}insert(e){this.dispatchEvent(new CustomEvent("insert",{detail:e})),p=[e,...(p??this.items).filter(t=>t.id!==e.id)],this.api("PATCH",`/api/media/${e.id}`,{used:!0}).catch(()=>{})}async searchStock(e=!1){const t=this.stockQuery.trim();if(!(!t||this.stockLoading)){this.stockLoading=!0,this.error=null;try{const s=e?this.stockPage+1:1,i=await fetch(`/api/media/pexels?q=${encodeURIComponent(t)}&page=${s}`,{credentials:"include"}),r=await i.json();if(!i.ok)throw new Error(r.error||`${i.status}`);this.stock=e?[...this.stock,...r.photos??[]]:r.photos??[],this.stockMore=!!r.hasMore,this.stockPage=s}catch(s){this.error=g(s)}finally{this.stockLoading=!1}}}async importStock(e){if(this.importing===null){this.importing=e.id,this.error=null;try{const{data:t}=await this.api("POST","/api/media/pexels",{id:e.id});this.items=[t.item,...this.items.filter(s=>s.id!==t.item.id)],this.insert(t.item)}catch(t){this.error=g(t)}finally{this.importing=null}}}renderStock(){return n`
      <form class="flex items-center gap-2 mb-3" @submit=${e=>{e.preventDefault(),this.searchStock()}}>
        <input type="search" placeholder="Search free photos on Pexels" aria-label="Search Pexels" .value=${this.stockQuery}
          class="flex-1 min-w-0 h-8 px-3 rounded-lg border border-line bg-surface text-base sm:text-sm text-ink outline-none focus:border-accent"
          @input=${e=>{this.stockQuery=e.target.value}} />
        <button type="submit" class="h-8 px-3 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105" ?disabled=${this.stockLoading}>Search</button>
      </form>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-2">
        ${this.stock.map(e=>n`
          <div class="group min-w-0">
            <button type="button" class="relative block w-full aspect-[4/3] overflow-hidden rounded-lg bg-hover hover:ring-2 hover:ring-accent/50 outline-none"
              title=${`${this.pickLabel} ${e.alt||"photo"} by ${e.credit.name}`} aria-label=${`${this.pickLabel} ${e.alt||"photo"} by ${e.credit.name}`}
              ?disabled=${this.importing!==null} @click=${()=>void this.importStock(e)}>
              <img src=${e.thumb} alt="" loading="lazy" decoding="async" class="w-full h-full object-cover ${this.importing===e.id?"opacity-50":""}" />
              ${this.importing===e.id?n`<span class="absolute inset-0 flex items-center justify-center"><span class="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span></span>`:h}
            </button>
            <div class="mt-1 px-0.5 text-xs text-muted truncate">${e.credit.name}</div>
          </div>`)}
        ${this.stockLoading?[0,1,2,3].map(()=>n`<div class="aspect-[4/3] rounded-lg bg-hover animate-pulse"></div>`):h}
      </div>
      ${this.stockMore&&!this.stockLoading?n`<div class="mt-3 text-center"><button type="button" class="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-ink hover:bg-hover" @click=${()=>void this.searchStock(!0)}>Load more</button></div>`:h}
      ${!this.stock.length&&!this.stockLoading?n`<div class="py-8 text-center text-sm text-muted">Search for a photo. Picking one adds it to your library.</div>`:h}
      <div class="mt-3 text-center text-xs text-muted"><a class="hover:text-ink underline" href="https://www.pexels.com" target="_blank" rel="noopener">Photos provided by Pexels</a></div>`}pickFiles(){this.querySelector("#media-file-input")?.click()}addFiles(e){for(const t of e.filter(f)){const s=++this.seq;this.uploads=[...this.uploads,{key:s,name:v(t),preview:URL.createObjectURL(t),pct:0}],G(t,i=>this.patchUpload(s,{pct:i})).then(i=>{this.items=[i,...this.items.filter(r=>r.id!==i.id)],this.dropUpload(s)}).catch(i=>this.patchUpload(s,{error:g(i)}))}}patchUpload(e,t){this.uploads=this.uploads.map(s=>s.key===e?{...s,...t}:s)}dropUpload(e){const t=this.uploads.find(s=>s.key===e);t&&URL.revokeObjectURL(t.preview),this.uploads=this.uploads.filter(s=>s.key!==e)}async rename(e,t){this.renaming=null;const s=t.trim();if(!(!s||s===e.name)){this.items=this.items.map(i=>i.id===e.id?{...i,name:s}:i),p=this.items;try{await this.api("PATCH",`/api/media/${e.id}`,{name:s})}catch(i){this.error=g(i),this.refresh()}}}async deleteItem(e,t=!1){try{const{status:s,data:i}=await this.api("DELETE",`/api/media/${e.id}${t?"?force=1":""}`);if(s===409){this.confirm={item:e,usedIn:i.usedIn??[]};return}this.confirm=null,this.items=this.items.filter(r=>r.id!==e.id),p=this.items}catch(s){this.error=g(s)}}isFileDrag(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}onDragEnter(e){this.isFileDrag(e)&&(e.preventDefault(),this.dragDepth++)}onDragLeave(e){this.isFileDrag(e)&&(this.dragDepth=Math.max(0,this.dragDepth-1))}onDrop(e){this.isFileDrag(e)&&(e.preventDefault(),this.dragDepth=0,this.addFiles(Array.from(e.dataTransfer?.files??[])))}renderTile(e){const t="flex items-center justify-center w-7 h-7 rounded-md bg-black/55 text-white";return n`
      <div class="group min-w-0">
        <div class="relative aspect-[4/3] overflow-hidden rounded-lg bg-hover hover:ring-2 hover:ring-accent/50">
          <button type="button" class="block w-full h-full outline-none" title=${this.browse?`Open ${e.name}`:`${this.pickLabel} ${e.name}`} aria-label=${this.browse?`Open ${e.name}`:`${this.pickLabel} ${e.name}`}
            @click=${()=>{this.browse?window.open(e.url,"_blank","noopener"):this.insert(e)}}>
            <img src=${e.thumb} alt="" loading="lazy" decoding="async"
              class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" />
          </button>
          <div class="absolute right-1.5 top-1.5 flex gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 pointer-coarse:opacity-100">
            <button type="button" title="Rename" aria-label="Rename" class="${t} hover:bg-black/75"
              @click=${()=>{this.renaming=e.id}}>${m("pen","w-3.5 h-3.5")}</button>
            <button type="button" title="Delete" aria-label="Delete" class="${t} hover:bg-red-600"
              @click=${()=>void this.deleteItem(e)}>${m("trash-2","w-3.5 h-3.5")}</button>
          </div>
        </div>
        ${this.renaming===e.id?n`
          <input type="text" .value=${e.name} data-rename
            class="mt-1 w-full px-1.5 py-0.5 rounded-md border border-accent bg-surface text-xs text-ink outline-none"
            @focus=${s=>s.target.select()}
            @keydown=${s=>{s.key==="Enter"&&this.rename(e,s.target.value),s.key==="Escape"&&(s.stopPropagation(),this.renaming=null)}}
            @blur=${s=>void this.rename(e,s.target.value)} />`:n`<div class="mt-1 px-0.5 text-xs text-muted truncate" title=${e.name}
            @dblclick=${()=>{this.renaming=e.id}}>${e.name}</div>`}
      </div>`}renderUpload(e){return n`
      <div class="min-w-0">
        <div class="relative aspect-[4/3] overflow-hidden rounded-lg bg-hover">
          <img src=${e.preview} alt="" class="w-full h-full object-cover ${e.error?"opacity-30":"opacity-60"}" />
          ${e.error?n`
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 text-center">
              <span class="text-xs font-semibold text-[#c0392b]">${e.error}</span>
              <button type="button" class="text-xs text-muted hover:text-ink underline" @click=${()=>this.dropUpload(e.key)}>Dismiss</button>
            </div>`:n`
            <div class="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-black/20 overflow-hidden">
              <span class="block h-full rounded-full bg-accent transition-[width]" style="width:${Math.max(6,e.pct)}%"></span>
            </div>`}
        </div>
        <div class="mt-1 px-0.5 text-xs text-muted truncate">${e.name}</div>
      </div>`}render(){const e=this.items.filter(a=>this.tab==="all"||this.tab==="generated"==(a.source==="generated")),t=this.tab==="pexels",s=e.length,i=this.loaded&&!t,r=this.canGenerate&&this.tab!=="generated";return n`
      <div class="absolute inset-0 z-30 flex items-center justify-center p-2 sm:p-4" style="background:rgba(0,0,0,0.35);"
        @click=${()=>this.close()}
        @dragover=${a=>{this.isFileDrag(a)&&a.preventDefault()}}
        @drop=${a=>{this.isFileDrag(a)&&a.preventDefault()}}>
        <div class="relative flex flex-col w-full max-w-3xl h-full max-h-[40rem] rounded-2xl border border-line bg-surface shadow-2xl overflow-hidden"
          @click=${a=>a.stopPropagation()}
          @dragenter=${a=>this.onDragEnter(a)}
          @dragleave=${a=>this.onDragLeave(a)}
          @drop=${a=>this.onDrop(a)}>
          <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 px-4 py-3 border-b border-line shrink-0">
            <div class="text-sm font-semibold text-ink">${this.heading}</div>
            <span class="text-xs text-muted tabular-nums text-center shrink-0 ${i?"":"invisible"}" style="width:4ch"
              aria-hidden=${!i} aria-label=${i?`${s} images`:h}>${s>999?"999+":s}</span>
            <div class="flex items-center gap-0.5 sm:ml-2 order-last sm:order-none w-full sm:w-auto" role="tablist">
              ${D.map(a=>n`<button type="button" role="tab" aria-selected=${this.tab===a.key}
                class="px-2.5 py-1 rounded-full text-xs font-medium ${this.tab===a.key?"bg-hover text-ink":"text-muted hover:text-ink"}"
                @click=${()=>{this.tab=a.key}}>${a.label}</button>`)}
            </div>
            <div class="flex-1"></div>
            <button type="button" aria-label="Generate" aria-hidden=${!r} tabindex=${r?0:-1} ?disabled=${!r}
              class="flex items-center justify-center gap-1.5 h-8 w-8 sm:w-auto sm:px-3 shrink-0 rounded-lg text-sm text-accent hover:bg-accent-soft ${r?"":"invisible pointer-events-none"}"
              @click=${()=>{this.tab="generated",this.updateComplete.then(()=>this.querySelector("#media-image-prompt")?.focus())}}>${m("sparkles")}<span class="hidden sm:inline">Generate</span></button>
            <button type="button" class="flex items-center gap-1.5 h-8 px-3 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
              @click=${()=>this.pickFiles()}>${m("image-plus")} Upload</button>
            <button type="button" title="Close" aria-label="Close" class="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:text-ink hover:bg-hover"
              @click=${()=>this.close()}>${m("x")}</button>
          </div>
          ${this.error?n`<div role="alert" class="px-4 pt-2 text-sm" style="color:#c87a3a;">${this.error}</div>`:h}
          <input id="media-file-input" type="file" accept="image/*" multiple class="hidden"
            @change=${a=>{const d=a.target;this.addFiles(Array.from(d.files??[])),d.value=""}} />
          <div class="flex-1 min-h-0 overflow-y-auto p-3" style="scrollbar-gutter:stable;">
            ${this.tab==="generated"&&this.canGenerate?this.renderGenerator():h}
            ${t?this.renderStock():n`
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-2">
              ${this.generation?.status==="running"&&(this.tab==="all"||this.tab==="generated")?n`
                <div class="min-w-0" role="status" aria-live="polite">
                  <div class="aspect-[4/3] rounded-lg bg-hover flex flex-col items-center justify-center gap-2 px-3 text-center text-muted">
                    ${m("sparkles","w-5 h-5")}<span class="text-sm">Creating your image…</span>
                    <span class="text-xs">You can close this window.</span>
                  </div>
                  <div class="mt-1 px-0.5 text-xs text-muted truncate">${this.generation.prompt}</div>
                </div>`:h}
              ${this.tab!=="generated"?n`<button type="button"
                class="flex flex-col items-center justify-center gap-1 aspect-[4/3] rounded-lg border-2 border-dashed border-line px-3 text-center text-muted hover:border-accent hover:text-ink hover:bg-hover"
                @click=${()=>this.pickFiles()}>
                ${m("image-plus","w-5 h-5")}
                <span class="text-xs font-semibold">Upload</span>
                <span class="text-[0.7rem]">or drop / paste here</span>
              </button>`:h}
              ${this.uploads.map(a=>this.renderUpload(a))}
              ${this.loaded?h:[0,1,2].map(()=>n`<div class="aspect-[4/3] rounded-lg bg-hover animate-pulse"></div>`)}
              ${e.map(a=>this.renderTile(a))}
            </div>
            ${this.loaded&&!s&&!this.uploads.length&&this.generation?.status!=="running"?n`
              <div class="py-8 text-center text-sm text-muted">${this.tab==="generated"?this.canGenerate?"Describe an image above to create one.":"No generated images yet.":"No images yet. Upload, drop or paste an image here."}</div>`:h}`}
          </div>
          ${this.confirm?n`
            <div class="flex items-center gap-3 px-4 py-3 border-t border-line bg-surface shrink-0">
              <div class="flex-1 min-w-0 text-xs text-ink">
                <span class="font-semibold">Delete “${this.confirm.item.name}”?</span>
                <span class="text-muted">Used in ${this.confirm.usedIn.join(", ")}. These places will show a broken image.</span>
              </div>
              <button type="button" class="shrink-0 px-3 py-1.5 rounded-lg text-sm text-muted hover:text-ink hover:bg-hover"
                @click=${()=>{this.confirm=null}}>Cancel</button>
              <button type="button" class="shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style="background:#c0392b;"
                @click=${()=>void this.deleteItem(this.confirm.item,!0)}>Delete</button>
            </div>`:h}
          ${this.dragDepth>0?n`
            <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] border-2 border-dashed border-accent"
              style="background:color-mix(in srgb, var(--accent) 7%, var(--surface));">
              <div class="flex flex-col items-center gap-2 text-accent">${m("image-plus","w-6 h-6")}<span class="text-sm font-semibold">Drop images to upload</span></div>
            </div>`:h}
        </div>
      </div>`}};l([b()],o.prototype,"tab",2);l([b()],o.prototype,"heading",2);l([b()],o.prototype,"pickLabel",2);l([b({type:Boolean})],o.prototype,"browse",2);l([c()],o.prototype,"items",2);l([c()],o.prototype,"loaded",2);l([c()],o.prototype,"uploads",2);l([c()],o.prototype,"dragDepth",2);l([c()],o.prototype,"renaming",2);l([c()],o.prototype,"confirm",2);l([c()],o.prototype,"error",2);l([c()],o.prototype,"stockQuery",2);l([c()],o.prototype,"stock",2);l([c()],o.prototype,"stockMore",2);l([c()],o.prototype,"stockLoading",2);l([c()],o.prototype,"importing",2);l([c()],o.prototype,"canGenerate",2);l([c()],o.prototype,"imagePrompt",2);l([c()],o.prototype,"imageAspect",2);l([c()],o.prototype,"generation",2);l([c()],o.prototype,"startingGeneration",2);o=l([x("notes-media-library")],o);export{o as NotesMediaLibrary,C as forgetMediaCache,P as pastedImages,G as uploadMedia};
