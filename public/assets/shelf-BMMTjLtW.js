import{A as d,b as l,n as h,t as y}from"./index-BRlrM8Dc.js";import{T as $,r as m}from"./mana-app-D9ZvL_yz.js";import{d as u,j as k,C as w,a4 as f,e as C,T as g,u as E}from"./layout-CkeMpdRn.js";import"./models-CLMVJSUQ.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,n=(e,i,c,p)=>{for(var s=p>1?void 0:p?T(i,c):i,a=e.length-1,t;a>=0;a--)(t=e[a])&&(s=(p?t(i,c,s):t(s))||s);return p&&s&&S(i,c,s),s};const v="cockpit.office.furniture-recents";let o=class extends ${constructor(){super(...arguments),this.missingStations="",this.activeKind="",this.repeat=!0,this.snapping=!0,this.gridVisible=!0,this.search="",this.category="All",this.recent=[],this.tileDrag=null,this.pointerPick=""}warm(e){clearTimeout(this.intentTimer),this.intentTimer=setTimeout(()=>this.dispatchEvent(new CustomEvent("office-furniture-intent",{detail:e,bubbles:!0,composed:!0})),100)}disconnectedCallback(){clearTimeout(this.intentTimer),super.disconnectedCallback()}connectedCallback(){super.connectedCallback();try{const e=JSON.parse(localStorage.getItem(v)||"[]");Array.isArray(e)&&(this.recent=e.filter(i=>typeof i=="string"&&u.has(i)&&!u.get(i)?.hidden).slice(0,8))}catch{}}recordRecent(e){if(!(!u.has(e)||u.get(e)?.hidden)){this.recent=[e,...this.recent.filter(i=>i!==e)].slice(0,8);try{localStorage.setItem(v,JSON.stringify(this.recent))}catch{}}}choose(e){this.dispatchEvent(new CustomEvent("office-furniture-pick",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("office-focus-room",{bubbles:!0,composed:!0}))}tileDown(e,i){this.pointerPick="",!(e.pointerType!=="mouse"||e.button!==0)&&(this.pointerPick=i,this.choose(i),this.tileDrag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:!1},e.currentTarget.setPointerCapture(e.pointerId))}tileMove(e){const i=this.tileDrag;!i||i.id!==e.pointerId||(i.moved||=Math.hypot(e.clientX-i.x,e.clientY-i.y)>6,i.moved&&this.dragPosition(e,!1))}tileUp(e){const i=this.tileDrag;!i||i.id!==e.pointerId||(this.tileDrag=null,i.moved&&this.dragPosition(e,!0))}dragPosition(e,i){this.dispatchEvent(new CustomEvent("office-furniture-drag",{detail:{x:e.clientX,y:e.clientY,free:e.altKey,drop:i},bubbles:!0,composed:!0}))}setting(e){this.dispatchEvent(new CustomEvent("office-builder-setting",{detail:e,bubbles:!0,composed:!0}))}render(){const e=k.items.filter(t=>this.missingStations.split(",").includes(t.kind)),i=this.search.trim().toLowerCase(),c=w.filter(t=>!t.hidden),p=this.category==="Recent"?this.recent.map(t=>u.get(t)).filter(t=>t&&!t.hidden):c,s=(this.category==="Stations"?[]:p).filter(t=>(i||["All","Recent"].includes(this.category)||t.category===this.category)&&(!i||i.split(/\s+/).every(r=>`${t.label} ${t.category} ${t.surface==="prop"?"desktop accessory prop":"furniture"} ${t.category==="Technology"?"computer equipment tech":""}`.toLowerCase().includes(r)))),a=u.get(this.activeKind);return l`<aside aria-label="Furniture bank" class="office-furniture-dock h-full min-h-0 flex flex-col bg-surface text-ink ring-1 ring-black/10"
      @keydown=${t=>{t.composedPath().some(r=>r instanceof HTMLInputElement)&&t.stopPropagation()}}>
      <div class="flex shrink-0 items-center gap-2 px-3 pt-2 md:pt-3">
        <h2 class="flex-1 text-sm font-semibold">Furniture & props</h2>
        <button class="w-8 h-8 rounded-full text-muted hover:bg-ink/5" aria-label="Build mode help" title="Double-click furniture to select it; click the selected piece to release it. Pick a new piece, then click to place it. Props sit on desks, tables and cupboards when you point at their tops. They move with their furniture. On touch, position it and press Place. R turns 90°, Q/E turn 15°, Esc stops placing. I picks a piece to copy. Cmd/Ctrl+C copies the selection; Cmd/Ctrl+V pastes. G toggles the grid. Hold Alt to move freely.">i</button>
        <button class="h-9 w-9 rounded-lg hover:bg-ink/5" aria-label="Close furniture bank"
          @click=${()=>this.dispatchEvent(new CustomEvent("office-bank-close",{bubbles:!0,composed:!0}))}>✕</button>
      </div>
      <div class="px-3 pt-1 pb-2 shrink-0">
        <input type="search" aria-label="Search furniture" placeholder="Search furniture & props" .value=${this.search}
          @input=${t=>{this.search=t.target.value}}
          class="w-full h-9 rounded-full bg-ink/5 px-3 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
      </div>
      <div class="office-furniture-categories flex shrink-0 gap-1 px-3 pb-2 overflow-x-auto" aria-label="Furniture categories">
        ${["All",...new Set(c.map(t=>t.category)),...this.recent.length?["Recent"]:[],...e.length||this.category==="Stations"?["Stations"]:[]].map(t=>l`
          <button class="h-8 shrink-0 px-3 rounded-full text-xs ${this.category===t?"bg-ink/10 font-medium":"hover:bg-ink/5"}"
            aria-pressed=${this.category===t} @click=${()=>{this.category=t}}>${t}</button>`)}
      </div>
      <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-2" style="scrollbar-gutter:stable">
        <div class="grid grid-cols-3 md:grid-cols-2 gap-1">
          ${this.category==="Stations"?e.filter(t=>!i||f(t).toLowerCase().includes(i)).map(t=>l`<button class="flex flex-col items-center gap-2 rounded-lg p-3 hover:bg-ink/5 text-xs" aria-label=${`Restore ${f(t)}`} data-station=${t.kind} @click=${()=>this.choose(t.kind)}>
            <svg viewBox="0 0 48 48" class="w-16 h-16 text-accent" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="8" y="10" width="32" height="24" rx="4"/><path d="M14 34v7m20-7v7M15 18h18m-18 8h18"/></svg>
            <span>${f(t)}</span><span class="text-muted">Restore station</span></button>`):d}
          ${s.map(t=>l`<button aria-label=${`Choose ${t.label}`} aria-pressed=${this.activeKind===t.key} data-kind=${t.key}
            title=${`${t.label}. ${t.foot[0].toFixed(2)} × ${t.foot[1].toFixed(2)} m, ${t.height.toFixed(2)} m high. ${t.surface==="prop"?"Place on furniture or the floor.":t.top?"Supports props on top.":"Place on the floor."}`}
            class="relative flex flex-col items-center rounded-lg px-1 py-1 md:py-2 ${this.activeKind===t.key?"bg-accent/10 ring-1 ring-inset ring-accent/40":"hover:bg-ink/5"} focus-visible:ring-2 focus-visible:ring-accent outline-none"
            @pointerenter=${()=>this.warm(t.key)} @pointerleave=${()=>clearTimeout(this.intentTimer)} @focus=${()=>this.warm(t.key)}
            @pointerdown=${r=>this.tileDown(r,t.key)} @pointermove=${this.tileMove} @pointerup=${this.tileUp} @pointercancel=${()=>{this.tileDrag=null}}
            @click=${r=>{if(r.detail>0&&this.pointerPick===t.key){this.pointerPick="";return}this.choose(t.key)}}>
            <span aria-hidden="true" class="block shrink-0 w-24 h-24"
              style="background-image:url('${C}');background-size:${g*96}px ${E*96}px;background-position:${-(t.thumb%g)*96}px ${-Math.floor(t.thumb/g)*96}px"></span>
            <span class="text-xs leading-4 text-center min-h-8">${t.label}</span>
          </button>`)}
        </div>
        ${s.length||this.category==="Stations"&&e.length?d:l`<p role="status" class="px-2 py-8 text-center text-sm text-muted">No matching furniture.</p>`}
      </div>
      <div class="shrink-0 px-3 py-2 bg-ink/[0.025]">
        ${a?l`<div class="hidden md:flex items-center justify-between gap-2 mb-2 text-xs"><span class="truncate">${a.label}</span><span class="text-muted tabular-nums shrink-0">${a.foot[0].toFixed(2)} × ${a.foot[1].toFixed(2)} m</span></div>`:d}
        <div class="flex items-center gap-1" aria-label="Placement options">
          ${[["repeat","Repeat",this.repeat,"Keep placing copies"],["snapping","Snap",this.snapping,"Snap to grid, furniture and walls. Hold Alt to bypass."],["gridVisible","Grid",this.gridVisible,"Show the floor grid (G)"]].map(([t,r,b,x])=>l`
            <button class="flex-1 h-9 rounded-lg text-xs ${b?"bg-accent/10 text-accent":"hover:bg-ink/5 text-muted"}" aria-label=${r} aria-pressed=${b} title=${x} @click=${()=>this.setting(t)}>${r}</button>`)}
          <a class="w-8 h-9 grid place-items-center text-xs text-muted hover:text-ink" href="/office/CREDITS.md" target="_blank" rel="noopener noreferrer" aria-label="Furniture sources and credits" title="Original Mana office models + Kenney Furniture Kit (CC0)">ⓘ</a>
        </div>
      </div>
    </aside>`}};n([h()],o.prototype,"missingStations",2);n([h()],o.prototype,"activeKind",2);n([h({type:Boolean})],o.prototype,"repeat",2);n([h({type:Boolean})],o.prototype,"snapping",2);n([h({type:Boolean})],o.prototype,"gridVisible",2);n([m()],o.prototype,"search",2);n([m()],o.prototype,"category",2);n([m()],o.prototype,"recent",2);o=n([y("office-shelf")],o);export{o as OfficeShelf};
