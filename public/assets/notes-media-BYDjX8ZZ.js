import{b as n,A as h,n as b,t as x}from"./index-C050s57V.js";import{T as y,c as $,r as p}from"./mana-app-DCZ_JVpI.js";import"./publisher-week-CsirE1VB.js";var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,d=(e,s,t,i)=>{for(var r=i>1?void 0:i?k(s,t):s,c=e.length-1,a;c>=0;c--)(a=e[c])&&(r=(i?a(s,t,r):a(r))||r);return i&&r&&w(s,t,r),r};const D=[{key:"all",label:"All"},{key:"notes",label:"Uploaded"},{key:"generated",label:"Generated"}];let o=null;function P(){o=null}const u=(e,s="w-4 h-4")=>n`<sc-icon name="lucide-${e}" class=${s}></sc-icon>`,f=e=>e instanceof Error?e.message:String(e),g=e=>e.type.startsWith("image/");function v(e,s=new Date){const t=e.name.replace(/\.[^.]+$/,"").trim();if(t&&!/^image$/i.test(t))return t;const i=r=>String(r).padStart(2,"0");return`Pasted ${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())} ${i(s.getHours())}.${i(s.getMinutes())}`}function E(e){if(!e)return[];const s=Array.from(e.files??[]).filter(g);return!s.length||(e.getData("text/plain")??"").trim()?[]:s}async function U(e,s){const t=e.type==="image/gif"?e:await $(e,1600,.85),i=await new Promise((r,c)=>{const a=new XMLHttpRequest;a.open("POST","/api/media"),a.withCredentials=!0,a.setRequestHeader("content-type",t.type||e.type),a.setRequestHeader("x-file-name",encodeURIComponent(v(e))),a.upload.onprogress=m=>{m.lengthComputable&&s?.(Math.round(m.loaded/m.total*100))},a.onload=()=>{if(a.status<200||a.status>=300){c(new Error(`upload ${a.status}`));return}try{r(JSON.parse(a.responseText).item)}catch(m){c(m)}},a.onerror=()=>c(new Error("upload failed, check the connection")),a.send(t)});return o&&(o=[i,...o.filter(r=>r.id!==i.id)]),i}let l=class extends y{constructor(){super(...arguments),this.tab="all",this.browse=!1,this.items=o??[],this.loaded=o!==null,this.uploads=[],this.dragDepth=0,this.renaming=null,this.confirm=null,this.error=null,this.seq=0,this.onPaste=e=>{const s=E(e.clipboardData);s.length&&(e.preventDefault(),this.addFiles(s))},this.onKey=e=>{e.key==="Escape"&&(this.confirm?this.confirm=null:this.renaming?this.renaming=null:this.close())}}connectedCallback(){super.connectedCallback(),window.addEventListener("paste",this.onPaste),window.addEventListener("keydown",this.onKey),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("paste",this.onPaste),window.removeEventListener("keydown",this.onKey);for(const e of this.uploads)URL.revokeObjectURL(e.preview)}updated(e){e.has("renaming")&&this.renaming&&this.querySelector("[data-rename]")?.focus()}async api(e,s,t){const i=await fetch(s,{method:e,credentials:"include",headers:t===void 0?void 0:{"content-type":"application/json"},body:t===void 0?void 0:JSON.stringify(t)});if(!i.ok&&i.status!==409)throw new Error(`${i.status}`);return{status:i.status,data:await i.json()}}async refresh(){try{const{data:e}=await this.api("GET","/api/media");o=e.items,this.items=e.items,this.loaded=!0}catch(e){this.error=f(e)}}close(){this.dispatchEvent(new CustomEvent("close"))}insert(e){this.dispatchEvent(new CustomEvent("insert",{detail:e})),o=[e,...(o??this.items).filter(s=>s.id!==e.id)],this.api("PATCH",`/api/media/${e.id}`,{used:!0}).catch(()=>{})}pickFiles(){this.querySelector("#media-file-input")?.click()}addFiles(e){for(const s of e.filter(g)){const t=++this.seq;this.uploads=[...this.uploads,{key:t,name:v(s),preview:URL.createObjectURL(s),pct:0}],U(s,i=>this.patchUpload(t,{pct:i})).then(i=>{this.items=[i,...this.items.filter(r=>r.id!==i.id)],this.dropUpload(t)}).catch(i=>this.patchUpload(t,{error:f(i)}))}}patchUpload(e,s){this.uploads=this.uploads.map(t=>t.key===e?{...t,...s}:t)}dropUpload(e){const s=this.uploads.find(t=>t.key===e);s&&URL.revokeObjectURL(s.preview),this.uploads=this.uploads.filter(t=>t.key!==e)}async rename(e,s){this.renaming=null;const t=s.trim();if(!(!t||t===e.name)){this.items=this.items.map(i=>i.id===e.id?{...i,name:t}:i),o=this.items;try{await this.api("PATCH",`/api/media/${e.id}`,{name:t})}catch(i){this.error=f(i),this.refresh()}}}async deleteItem(e,s=!1){try{const{status:t,data:i}=await this.api("DELETE",`/api/media/${e.id}${s?"?force=1":""}`);if(t===409){this.confirm={item:e,usedIn:i.usedIn??[]};return}this.confirm=null,this.items=this.items.filter(r=>r.id!==e.id),o=this.items}catch(t){this.error=f(t)}}isFileDrag(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}onDragEnter(e){this.isFileDrag(e)&&(e.preventDefault(),this.dragDepth++)}onDragLeave(e){this.isFileDrag(e)&&(this.dragDepth=Math.max(0,this.dragDepth-1))}onDrop(e){this.isFileDrag(e)&&(e.preventDefault(),this.dragDepth=0,this.addFiles(Array.from(e.dataTransfer?.files??[])))}renderTile(e){const s="flex items-center justify-center w-7 h-7 rounded-md bg-black/55 text-white";return n`
      <div class="group min-w-0">
        <div class="relative aspect-[4/3] overflow-hidden rounded-lg bg-hover hover:ring-2 hover:ring-accent/50">
          <button type="button" class="block w-full h-full outline-none" title=${this.browse?`Open ${e.name}`:`Insert ${e.name}`} aria-label=${this.browse?`Open ${e.name}`:`Insert ${e.name}`}
            @click=${()=>{this.browse?window.open(e.url,"_blank","noopener"):this.insert(e)}}>
            <img src=${e.thumb} alt="" loading="lazy" decoding="async"
              class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" />
          </button>
          <div class="absolute right-1.5 top-1.5 flex gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 pointer-coarse:opacity-100">
            <button type="button" title="Rename" aria-label="Rename" class="${s} hover:bg-black/75"
              @click=${()=>{this.renaming=e.id}}>${u("pen","w-3.5 h-3.5")}</button>
            <button type="button" title="Delete" aria-label="Delete" class="${s} hover:bg-red-600"
              @click=${()=>void this.deleteItem(e)}>${u("trash-2","w-3.5 h-3.5")}</button>
          </div>
        </div>
        ${this.renaming===e.id?n`
          <input type="text" .value=${e.name} data-rename
            class="mt-1 w-full px-1.5 py-0.5 rounded-md border border-accent bg-surface text-xs text-ink outline-none"
            @focus=${t=>t.target.select()}
            @keydown=${t=>{t.key==="Enter"&&this.rename(e,t.target.value),t.key==="Escape"&&(t.stopPropagation(),this.renaming=null)}}
            @blur=${t=>void this.rename(e,t.target.value)} />`:n`<div class="mt-1 px-0.5 text-xs text-muted truncate" title=${e.name}
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
      </div>`}render(){const e=this.items.filter(t=>this.tab==="all"||this.tab==="generated"==(t.source==="generated")),s=e.length;return n`
      <div class="absolute inset-0 z-30 flex items-center justify-center p-2 sm:p-4" style="background:rgba(0,0,0,0.35);"
        @click=${()=>this.close()}
        @dragover=${t=>{this.isFileDrag(t)&&t.preventDefault()}}
        @drop=${t=>{this.isFileDrag(t)&&t.preventDefault()}}>
        <div class="relative flex flex-col w-full max-w-3xl h-full max-h-[40rem] rounded-2xl border border-line bg-surface shadow-2xl overflow-hidden"
          @click=${t=>t.stopPropagation()}
          @dragenter=${t=>this.onDragEnter(t)}
          @dragleave=${t=>this.onDragLeave(t)}
          @drop=${t=>this.onDrop(t)}>
          <div class="flex items-center gap-2 px-4 py-3 border-b border-line shrink-0">
            <div class="text-sm font-semibold text-ink">Images</div>
            ${this.loaded?n`<span class="text-xs text-muted">${s}</span>`:h}
            <div class="flex items-center gap-0.5 ml-2" role="tablist">
              ${D.map(t=>n`<button type="button" role="tab" aria-selected=${this.tab===t.key}
                class="px-2.5 py-1 rounded-full text-xs ${this.tab===t.key?"bg-hover text-ink font-medium":"text-muted hover:text-ink"}"
                @click=${()=>{this.tab=t.key}}>${t.label}</button>`)}
            </div>
            <div class="flex-1"></div>
            <button type="button" class="flex items-center gap-1.5 h-8 px-3 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
              @click=${()=>this.pickFiles()}>${u("image-plus")} Upload</button>
            <button type="button" title="Close" aria-label="Close" class="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:text-ink hover:bg-hover"
              @click=${()=>this.close()}>${u("x")}</button>
          </div>
          ${this.error?n`<div class="px-4 pt-2 text-xs font-mono" style="color:#c87a3a;">images error: ${this.error}</div>`:h}
          <input id="media-file-input" type="file" accept="image/*" multiple class="hidden"
            @change=${t=>{const i=t.target;this.addFiles(Array.from(i.files??[])),i.value=""}} />
          <div class="flex-1 min-h-0 overflow-y-auto p-3">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-2">
              <button type="button"
                class="flex flex-col items-center justify-center gap-1 aspect-[4/3] rounded-lg border-2 border-dashed border-line px-3 text-center text-muted hover:border-accent hover:text-ink hover:bg-hover"
                @click=${()=>this.pickFiles()}>
                ${u("image-plus","w-5 h-5")}
                <span class="text-xs font-semibold">Upload</span>
                <span class="text-[0.7rem]">or drop / paste here</span>
              </button>
              ${this.uploads.map(t=>this.renderUpload(t))}
              ${this.loaded?h:[0,1,2].map(()=>n`<div class="aspect-[4/3] rounded-lg bg-hover animate-pulse"></div>`)}
              ${e.map(t=>this.renderTile(t))}
            </div>
            ${this.loaded&&!s&&!this.uploads.length?n`
              <div class="py-8 text-center text-sm text-muted">${this.tab==="generated"?"No generated images yet. Generate one on a Publisher post and it lands here.":"No images yet. Images you upload, paste or drop into a note land here."}</div>`:h}
          </div>
          ${this.confirm?n`
            <div class="flex items-center gap-3 px-4 py-3 border-t border-line bg-surface shrink-0">
              <div class="flex-1 min-w-0 text-xs text-ink">
                <span class="font-semibold">Delete “${this.confirm.item.name}”?</span>
                <span class="text-muted">Still in ${this.confirm.usedIn.join(", ")}. Those notes will show a broken image.</span>
              </div>
              <button type="button" class="shrink-0 px-3 py-1.5 rounded-lg text-sm text-muted hover:text-ink hover:bg-hover"
                @click=${()=>{this.confirm=null}}>Cancel</button>
              <button type="button" class="shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style="background:#c0392b;"
                @click=${()=>void this.deleteItem(this.confirm.item,!0)}>Delete</button>
            </div>`:h}
          ${this.dragDepth>0?n`
            <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] border-2 border-dashed border-accent"
              style="background:color-mix(in srgb, var(--accent) 7%, var(--surface));">
              <div class="flex flex-col items-center gap-2 text-accent">${u("image-plus","w-6 h-6")}<span class="text-sm font-semibold">Drop images to upload</span></div>
            </div>`:h}
        </div>
      </div>`}};d([b()],l.prototype,"tab",2);d([b({type:Boolean})],l.prototype,"browse",2);d([p()],l.prototype,"items",2);d([p()],l.prototype,"loaded",2);d([p()],l.prototype,"uploads",2);d([p()],l.prototype,"dragDepth",2);d([p()],l.prototype,"renaming",2);d([p()],l.prototype,"confirm",2);d([p()],l.prototype,"error",2);l=d([x("notes-media-library")],l);export{l as NotesMediaLibrary,P as forgetMediaCache,E as pastedImages,U as uploadMedia};
