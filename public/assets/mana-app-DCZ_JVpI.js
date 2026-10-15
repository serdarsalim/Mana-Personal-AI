const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-D2emgc0r.js","assets/db-DHWx8Fue.js","assets/notes-media-BYDjX8ZZ.js","assets/index-C050s57V.js","assets/index-CP7pf5HJ.css","assets/publisher-week-CsirE1VB.js"])))=>i.map(i=>d[i]);
import{n as g,i as Ae,t as k,b as r,o as K,_ as Ke,e as so,a as io,d as no,E as oo,c as je,A as d,f as Ms,L as Os,w as qo,D as $s,j as Ho}from"./index-C050s57V.js";import{w as Hi,n as Ko,k as Go}from"./publisher-week-CsirE1VB.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e,t){return(s,i,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return Wo(s,i,{get(){return o(this)}})}}class C extends Ae{createRenderRoot(){return this}}class ro{constructor(t,s){this.onKeydown=i=>{const n=i.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=i.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const a=this.opts.keyAttr??"data-row-key",c=this.opts.scope?.()??document,u=Array.from(c.querySelectorAll(`[${a}]`));if(!u.length)return;const h=this.opts.getKey();if(n===" "||n==="Enter"){if(!h)return;const x=n===" "?this.opts.onToggle:this.opts.onEnter;if(!x)return;i.preventDefault(),x(h);return}const p=u.map(x=>x.getAttribute(a)).filter(x=>!!x),m=h?p.indexOf(h):-1,b=n==="ArrowDown"?m<0?0:Math.min(m+1,p.length-1):m<=0?0:m-1;if(p[b]&&p[b]!==h){i.preventDefault(),this.opts.setKey(p[b]);const x=p[b];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${a}="${CSS.escape(x)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=t,this.opts=s,t.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const Ki=e=>{let t;const s=new Set,i=(h,p)=>{const m=typeof h=="function"?h(t):h;if(!Object.is(m,t)){const b=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),s.forEach(x=>x(t,b))}},n=()=>t,c={setState:i,getState:n,getInitialState:()=>u,subscribe:h=>(s.add(h),()=>s.delete(h))},u=t=e(i,n,c);return c},Vo=(e=>e?Ki(e):Ki);class Qo extends Error{constructor(t,s,i){super(s),this.name="ApiError",this.status=t,this.body=i}}async function ui(e){let t=null,s=`${e.status} ${e.statusText}`;try{if(t=await e.json(),t&&typeof t=="object"&&"error"in t){const i=t.error;typeof i=="string"&&(s=i)}}catch{}return new Qo(e.status,s,t)}const Yo=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;async function os(e,t){const s=await fetch(e,{...t,headers:{"content-type":"application/json","x-mana-client":Yo,...t?.headers||{}}});if(!s.ok)throw await ui(s);const i=await s.text();return i?JSON.parse(i):void 0}function q(e){return os(e,{method:"GET"})}function F(e,t){return os(e,{method:"POST",body:t===void 0?void 0:JSON.stringify(t)})}function St(e,t){return os(e,{method:"PATCH",body:t===void 0?void 0:JSON.stringify(t)})}function Xt(e){return os(e,{method:"DELETE"})}const $={threads:{list:()=>q("/api/threads").then(e=>e.threads),create:(e="chat",t)=>F("/api/threads",{kind:e,persona:t})},messages:{list:e=>q(`/api/threads/${e}/messages`).then(t=>t.messages)},northStars:{list:()=>q("/api/north-stars").then(e=>e.northStars),create:e=>F("/api/north-stars",{title:e}),update:(e,t)=>St(`/api/north-stars/${e}`,t),archive:e=>Xt(`/api/north-stars/${e}`),summary:e=>q(`/api/north-stars/${e}/summary`)},goals:{list:(e=!1)=>q(`/api/goals${e?"?include=archived":""}`),create:e=>F("/api/goals",e),update:(e,t)=>St(`/api/goals/${e}`,t),remove:(e,t=!1)=>Xt(`/api/goals/${e}${t?"?permanent=true":""}`),summary:e=>q(`/api/goals/${e}/summary`),events:e=>q(`/api/goals/${e}/events`).then(t=>t.events)},keyResults:{create:(e,t)=>F(`/api/goals/${e}/key-results`,{title:t}),update:(e,t)=>St(`/api/key-results/${e}`,t),move:(e,t)=>F(`/api/key-results/${e}/move`,{direction:t}),reorder:(e,t)=>F(`/api/key-results/${e}/reorder`,{targetIndex:t}),remove:e=>Xt(`/api/key-results/${e}`)},commitments:{listForWeek:e=>q(`/api/week${e?`?week=${encodeURIComponent(e)}`:""}`),create:e=>F("/api/commitments",e),update:(e,t)=>St(`/api/commitments/${e}`,t),remove:e=>Xt(`/api/commitments/${e}`),reorder:(e,t)=>F(`/api/commitments/${e}/reorder`,{targetIndex:t}),carryOver:(e,t)=>F("/api/commitments/carry-over",{from:e,to:t})},settings:{list:()=>q("/api/settings"),update:e=>St("/api/settings",e)},tools:{list:()=>q("/api/tools").then(e=>e.tools),setPlacement:(e,t,s)=>St(`/api/tools/${encodeURIComponent(e)}`,{placement:t,order:s})},agentDocs:{list:()=>q("/api/agents").then(e=>e.files),read:e=>q(`/api/agents/${encodeURIComponent(e)}`),save:(e,t)=>os(`/api/agents/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify({content:t})}),history:e=>q(`/api/agents/${encodeURIComponent(e)}/history`).then(t=>t.history),at:(e,t)=>q(`/api/agents/${encodeURIComponent(e)}/at/${t}`),restore:(e,t)=>F(`/api/agents/${encodeURIComponent(e)}/restore`,{sha:t}),reset:e=>F(`/api/agents/${encodeURIComponent(e)}/reset`,{})},canvas:{list:()=>q("/api/canvas/files").then(e=>e.files),read:e=>q(`/api/canvas/files/${encodeURIComponent(e)}`)},voice:{session:e=>F("/api/voice/session",e?{persona:e}:void 0),op:(e,t)=>F("/api/voice/op",{name:e,arguments:t}),transcript:e=>F("/api/voice/transcript",e),stt:async e=>{const t=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:e});if(!t.ok)throw await ui(t);return t.json()},consult:e=>F("/api/voice/consult",e),tts:async e=>{const t=await fetch("/api/voice/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:e})});if(!t.ok)throw await ui(t);return t.blob()}},uploads:{upload:(e,t=!1,s)=>F("/api/upload",{dataUrl:e,ephemeral:t,name:s})},state:()=>q("/api/state"),notifications:{list:()=>q("/api/notifications"),read:e=>F(`/api/notifications/${e}/read`),dismiss:e=>F(`/api/notifications/${e}/dismiss`),readAll:()=>F("/api/notifications/read-all"),dismissAll:()=>F("/api/notifications/dismiss-all"),mute:(e,t)=>F("/api/notifications/mute",{kind:e,enabled:t}),kinds:()=>q("/api/notifications/kinds")}},Jo={goals:"house",canvas:"house",grocery:"house",office:"house",finance:"house",circle:"house",learn:"house",guests:"house",publisher:"house",inbox:"house",tools:"house",notify:"house"},Gi={goals:"Goals",canvas:"Mana",grocery:"Shopping",office:"Office",finance:"Finance",circle:"Circles",learn:"Learn",guests:"Guests",publisher:"Publisher",inbox:"Inbox",tools:"Tools",notify:"Notifications"},Di={house:"Mana",mana:"Mana","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Office keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper","learn-coach":"Learn coach",publisher:"Publisher"};function ao(e){if(e.currentThreadId!=null){const t=e.threads.find(s=>s.id===e.currentThreadId);if(t?.persona)return t.persona}return Jo[e.rightPaneMode]}function zs(){try{const e=localStorage.getItem("cockpit.right_pane_mode");if(e==="goals"||e==="canvas"||e==="grocery"||e==="office"||e==="finance"||e==="circle"||e==="learn"||e==="guests"||e==="publisher")return e}catch{}return"goals"}let Wi=0,Tt=0;const f=Vo((e,t)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const s=await $.threads.list();e({threads:s})},async selectThread(s){e({currentThreadId:s,messages:[]}),s!=null&&await t().loadMessages(s)},async createThread(s){const i=s?.kind??"chat",n=s?.persona,o=await $.threads.create(i,n);return await t().loadThreads(),e({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(s){const i=await $.messages.list(s);e({messages:i})},northStars:[],async loadNorthStars(){e({northStars:await $.northStars.list()})},async createNorthStar(s){await $.northStars.create(s),await t().loadNorthStars()},async renameNorthStar(s,i){await $.northStars.update(s,{title:i}),await t().loadNorthStars()},async archiveNorthStar(s){await $.northStars.archive(s),await t().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:s,archivedCount:i}=await $.goals.list(t().includeArchivedGoals);e({goals:s,goalsArchivedCount:i})},async toggleArchivedGoals(s){e({includeArchivedGoals:s}),await t().loadGoals()},async createGoal(s){const{id:i}=await $.goals.create({title:s.title,northStar:s.northStar??null,targetDate:s.targetDate??null});return(s.color!=null||s.symbol!=null)&&await $.goals.update(i,{color:s.color??null,symbol:s.symbol??null}),await t().loadGoals(),i},async updateGoal(s,i){await $.goals.update(s,i),await t().loadGoals()},async deleteGoal(s,i=!1){await $.goals.remove(s,i),await t().loadGoals()},async addKeyResult(s,i,n){const{id:o}=await $.keyResults.create(s,i);n&&await $.keyResults.update(o,{targetDate:n}),await t().loadGoals()},async updateKeyResult(s,i){await $.keyResults.update(s,i),await t().loadGoals()},async deleteKeyResult(s){await $.keyResults.remove(s),await t().loadGoals()},async moveKeyResult(s,i){await $.keyResults.move(s,i),await t().loadGoals()},async reorderKeyResult(s,i){await $.keyResults.reorder(s,i),await t().loadGoals()},currentWeek:null,commitments:[],async setWeek(s){e({currentWeek:s}),await t().loadCommitments(s)},async loadCommitments(s){const i=await $.commitments.listForWeek(s??t().currentWeek??void 0);e({commitments:i.commitments,currentWeek:i.week})},async createCommitment(s){await $.commitments.create({...s,week:s.week??t().currentWeek??void 0}),await t().loadCommitments()},async updateCommitment(s,i){await $.commitments.update(s,i),await t().loadCommitments()},async deleteCommitment(s){await $.commitments.remove(s),await t().loadCommitments()},async reorderCommitment(s,i){await $.commitments.reorder(s,i),await t().loadCommitments()},settings:{},async loadSettings(){e({settings:await $.settings.list()})},async setSetting(s,i){const n=await $.settings.update({[s]:i});e({settings:n})},tools:[],async loadTools(){e({tools:await $.tools.list()})},async setToolPlacement(s,i){await $.tools.setPlacement(s,i),e({tools:t().tools.map(n=>n.name===s?{...n,placement:i}:n)})},notifications:[],notificationsUnread:0,async loadNotifications(){const s=++Wi,i=Tt,{notifications:n,unread:o}=await $.notifications.list();s!==Wi||i!==Tt||e({notifications:n,notificationsUnread:o})},async markNotificationRead(s){Tt++;const i=t().notifications.map(o=>o.id===s&&o.read_at==null?{...o,read_at:Math.floor(Date.now()/1e3)}:o),n=t().notifications.some(o=>o.id===s&&o.read_at==null);e({notifications:i,notificationsUnread:Math.max(0,t().notificationsUnread-(n?1:0))}),await $.notifications.read(s),await t().loadNotifications()},async dismissNotification(s){Tt++;const i=t().notifications.some(o=>o.id===s&&o.read_at==null),n=t().notifications.filter(o=>o.id!==s);e({notifications:n,notificationsUnread:Math.max(0,t().notificationsUnread-(i?1:0))}),await $.notifications.dismiss(s),await t().loadNotifications()},async markAllNotificationsRead(){Tt++;const s=Math.floor(Date.now()/1e3);e({notifications:t().notifications.map(i=>i.read_at==null?{...i,read_at:s}:i),notificationsUnread:0}),await $.notifications.readAll(),await t().loadNotifications()},async clearAllNotifications(){Tt++,e({notifications:[],notificationsUnread:0}),await $.notifications.dismissAll(),await t().loadNotifications()},rightPaneMode:zs(),setRightPaneMode(s){try{localStorage.setItem("cockpit.right_pane_mode",s)}catch{}e({rightPaneMode:s,viewContext:{tool:s,summary:Gi[s]}})},focusedRowKey:null,setFocusedRowKey(s){e({focusedRowKey:s})},viewContext:{tool:zs(),summary:Gi[zs()]},setViewContext(s){e({viewContext:s})}}));function _(e,t,s){let i=s?s(t.getState()):void 0;return t.subscribe(n=>{if(!s){e.requestUpdate();return}const o=s(n);Object.is(o,i)||(i=o,e.requestUpdate())})}class Ei{constructor(t,s,i){this.host=t,this.store=s,this.selector=i,t.addController(this)}hostConnected(){this.unsubscribe=_(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}const Zt="cockpit.theme",Xo="cockpit.theme.dark";function Zo(e){return e==="light"||e==="dark"||e==="auto"}function er(){try{const e=localStorage.getItem(Zt);return Zo(e)?e:"auto"}catch{return"auto"}}const lt=Math.PI/180,_i=864e5,lo=2440588,co=2451545,tr=lt*23.4397,qs=9e-4,sr=-.833*lt,ir=e=>e.valueOf()/_i-.5+lo,Vi=e=>new Date((e+.5-lo)*_i),nr=e=>ir(e)-co,or=e=>lt*(357.5291+.98560028*e);function rr(e){const t=lt*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e));return e+t+lt*102.9372+Math.PI}const ar=e=>Math.asin(Math.sin(e)*Math.sin(tr)),Qi=(e,t,s)=>co+e+.0053*Math.sin(t)-.0069*Math.sin(2*s),lr=(e,t,s)=>Math.acos((Math.sin(e)-Math.sin(t)*Math.sin(s))/(Math.cos(t)*Math.cos(s)));function pi(e,t,s){const i=lt*-s,n=lt*t,o=nr(e),a=Math.round(o-qs-i/(2*Math.PI)),c=qs+(0+i)/(2*Math.PI)+a,u=or(c),h=rr(u),p=ar(h),m=Qi(c,u,h),b=lr(sr,n,p);if(Number.isNaN(b))return null;const x=Qi(qs+(b+i)/(2*Math.PI)+a,u,h),v=m-(x-m);return{sunrise:Vi(v),sunset:Vi(x)}}function ho(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function uo(e){const t=ur[e];if(t)return{lat:t[0],lng:t[1]};let s=0;try{s=-new Date().getTimezoneOffset()/4}catch{s=0}return{lat:40,lng:s}}function cr(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}}function dr(e,t=new Date){if(e==="dark")return!0;if(e==="light")return!1;const{lat:s,lng:i}=uo(ho()),n=pi(t,s,i);return n?t<n.sunrise||t>=n.sunset:cr()}function hr(e=new Date){const{lat:t,lng:s}=uo(ho()),i=pi(e,t,s);if(!i)return null;if(e<i.sunrise)return i.sunrise;if(e<i.sunset)return i.sunset;const n=pi(new Date(e.getTime()+_i),t,s);return n?n.sunrise:null}const ur={"Asia/Kuala_Lumpur":[3.14,101.69],"Europe/Dublin":[53.33,-6.25],"Europe/Istanbul":[41.01,28.96],"Europe/Vienna":[48.21,16.37],"Europe/London":[51.51,-.13],"Europe/Lisbon":[38.72,-9.14],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Berlin":[52.52,13.41],"Europe/Rome":[41.9,12.5],"Europe/Athens":[37.98,23.73],"Europe/Moscow":[55.76,37.62],"America/New_York":[40.71,-74.01],"America/Chicago":[41.88,-87.63],"America/Denver":[39.74,-104.99],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Africa/Cairo":[30.04,31.24],"Asia/Jerusalem":[31.78,35.22],"Asia/Dubai":[25.2,55.27],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Bangkok":[13.76,100.5],"Asia/Jakarta":[-6.21,106.85],"Asia/Singapore":[1.35,103.82],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Tokyo":[35.68,139.69],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76]};var pr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,Ls=(e,t,s,i)=>{for(var n=i>1?void 0:i?mr(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&pr(t,s,n),n};const fr={house:"Mana",mana:"Mana","goals-advisor":"Goals","grocery-keeper":"Grocery","office-keeper":"Office","finance-keeper":"Finance","circle-keeper":"Circles","learn-coach":"Learn",publisher:"Publisher"};function Yi(e){return e==="mana"||e==="house"?null:r`<span
    class="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium leading-none bg-hover text-muted"
    title=${Di[e]}
  >
    ${fr[e]??e}
  </span>`}function gr(e){return new Date(e*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")}let ss=class extends C{constructor(){super(...arguments),this.open=!1,this.query="",this.onDocClick=e=>{if(!this.open)return;const t=e.target;t&&this.contains(t)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=_(this,f,e=>e.threads),this.unsubCurrent=_(this,f,e=>e.currentThreadId),document.addEventListener("click",this.onDocClick),f.getState().loadThreads().then(()=>{const e=f.getState();if(e.currentThreadId==null){const t=e.threads.find(s=>s.persona==="house"&&s.closed_at==null);t&&e.selectThread(t.id)}}).catch(e=>{console.warn("[thread-list] loadThreads failed",e)})}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("click",this.onDocClick)}filtered(e){const t=this.query.trim().toLowerCase();return t?e.filter(s=>(s.title||"").toLowerCase().includes(t)):e}label(e){return e.title||gr(e.started_at)}toggle(e){e.stopPropagation(),this.open=!this.open,this.open&&(this.query="",this.updateComplete.then(()=>this.searchInput?.focus()))}async onPick(e){this.open=!1,await f.getState().selectThread(e)}async onNew(){this.open=!1,await f.getState().selectThread(null)}onSearchKey(e){if(e.key==="Escape"){e.preventDefault(),this.open=!1;return}if(e.key==="Enter"){const s=this.filtered(f.getState().threads)[0];s&&this.onPick(s.id)}}render(){const{threads:e,currentThreadId:t}=f.getState(),s=t?e.find(o=>o.id===t)??null:null,i=s?this.label(s):"—",n=this.filtered(e);return r`
      <div class="thread-picker-wrap relative flex items-center gap-2 -mx-4 px-4 py-2">
        <button
          type="button"
          class="flex-1 min-w-0 flex items-center justify-between gap-2 px-3 py-1.5 rounded-md bg-bg text-ink text-sm hover:brightness-95 transition-all"
          aria-haspopup="listbox"
          aria-expanded="${this.open?"true":"false"}"
          @click=${this.toggle}
        >
          <span class="flex items-center gap-2 truncate text-left">
            ${s?Yi(s.persona):null}
            <span class="truncate">${i}</span>
          </span>
          <span class="text-muted text-xs">▾</span>
        </button>
        <button
          type="button"
          class="shrink-0 px-3 py-1 rounded-md text-sm text-muted border border-line hover:text-ink hover:border-ink transition-colors"
          @click=${this.onNew}
          title="New chat"
        >
          + chat
        </button>

        ${this.open?r`
              <div
                class="absolute left-3 right-3 top-full mt-1 z-50 rounded-md bg-bg shadow-lg overflow-hidden"
                @click=${o=>o.stopPropagation()}
              >
                <input
                  type="text"
                  data-thread-search
                  placeholder="filter threads…"
                  class="w-full px-3 py-2 bg-transparent text-ink text-sm focus:outline-none"
                  .value=${this.query}
                  @input=${o=>this.query=o.target.value}
                  @keydown=${this.onSearchKey}
                />
                <ul class="max-h-72 overflow-y-auto" role="listbox">
                  ${n.length===0?r`<li class="px-3 py-2 text-muted text-sm">no threads</li>`:n.map(o=>r`
                          <li
                            role="option"
                            aria-selected="${t===o.id?"true":"false"}"
                            class="px-3 py-2 flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-[var(--hover-blue)] ${t===o.id?"bg-[var(--hover-blue)] text-accent":"text-ink"}"
                            @click=${()=>void this.onPick(o.id)}
                          >
                            <span class="flex items-center gap-2 truncate">
                              ${Yi(o.persona)}
                              <span class="truncate">${this.label(o)}</span>
                            </span>
                          </li>
                        `)}
                </ul>
              </div>
            `:null}
      </div>
    `}};Ls([l()],ss.prototype,"open",2);Ls([l()],ss.prototype,"query",2);Ls([ge("input[data-thread-search]")],ss.prototype,"searchInput",2);ss=Ls([k("thread-list")],ss);function Pi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var wt=Pi();function po(e){wt=e}var rt={exec:()=>null};function It(e){let t=[];return s=>{let i=Math.max(0,Math.min(3,s-1)),n=t[i];return n||(n=e(i),t[i]=n),n}}function D(e,t=""){let s=typeof e=="string"?e:e.source,i={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(se.caret,"$1"),s=s.replace(n,a),i},getRegex:()=>new RegExp(s,t)};return i}var br=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),se={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:It(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:It(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:It(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:It(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:It(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:It(e=>new RegExp(`^ {0,${e}}>`))},xr=/^(?:[ \t]*(?:\n|$))+/,vr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,yr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,rs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ai=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,mo=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,fo=D(mo).replace(/bull/g,Ai).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kr=D(mo).replace(/bull/g,Ai).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Mi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$r=/^[^\n]+/,Oi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Cr=D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Oi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Sr=D(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ai).getRegex(),Rs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Li=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Tr=D("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Li).replace("tag",Rs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),go=D(Mi).replace("hr",rs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),Ir=D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",go).getRegex(),Ri={blockquote:Ir,code:vr,def:Cr,fences:yr,heading:wr,hr:rs,html:Tr,lheading:fo,list:Sr,newline:xr,paragraph:go,table:rt,text:$r},Ji=D("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",rs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),Dr={...Ri,lheading:kr,table:Ji,paragraph:D(Mi).replace("hr",rs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ji).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex()},Er={...Ri,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Li).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(Mi).replace("hr",rs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fo).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},_r=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Pr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bo=/^( {2,}|\\)\n(?!\s*$)/,Ar=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rt=/[\p{P}\p{S}]/u,Ns=/[\s\p{P}\p{S}]/u,Ni=/[^\s\p{P}\p{S}]/u,Mr=D(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ns).getRegex(),xo=/(?!~)[\p{P}\p{S}]/u,Or=/(?!~)[\s\p{P}\p{S}]/u,Lr=/(?:[^\s\p{P}\p{S}]|~)/u,Rr=D(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",br?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),vo=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Nr=D(vo,"u").replace(/punct/g,Rt).getRegex(),jr=D(vo,"u").replace(/punct/g,xo).getRegex(),yo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Fr=D(yo,"gu").replace(/notPunctSpace/g,Ni).replace(/punctSpace/g,Ns).replace(/punct/g,Rt).getRegex(),Ur=D(yo,"gu").replace(/notPunctSpace/g,Lr).replace(/punctSpace/g,Or).replace(/punct/g,xo).getRegex(),Br=D("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ni).replace(/punctSpace/g,Ns).replace(/punct/g,Rt).getRegex(),zr=D(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Rt).getRegex(),qr="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Hr=D(qr,"gu").replace(/notPunctSpace/g,Ni).replace(/punctSpace/g,Ns).replace(/punct/g,Rt).getRegex(),Kr=D(/\\(punct)/,"gu").replace(/punct/g,Rt).getRegex(),Gr=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wr=D(Li).replace("(?:-->|$)","-->").getRegex(),Vr=D("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Wr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Qr=D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),wo=D(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",Oi).getRegex(),ko=D(/^!?\[(ref)\](?:\[\])?/).replace("ref",Oi).getRegex(),Yr=D("reflink|nolink(?!\\()","g").replace("reflink",wo).replace("nolink",ko).getRegex(),Xi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ji={_backpedal:rt,anyPunctuation:Kr,autolink:Gr,blockSkip:Rr,br:bo,code:Pr,del:rt,delLDelim:rt,delRDelim:rt,emStrongLDelim:Nr,emStrongRDelimAst:Fr,emStrongRDelimUnd:Br,escape:_r,link:Qr,nolink:ko,punctuation:Mr,reflink:wo,reflinkSearch:Yr,tag:Vr,text:Ar,url:rt},Jr={...ji,link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},mi={...ji,emStrongRDelimAst:Ur,emStrongLDelim:jr,delLDelim:zr,delRDelim:Hr,url:D(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Xi).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:D(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Xi).getRegex()},Xr={...mi,br:D(bo).replace("{2,}","*").getRegex(),text:D(mi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fs={normal:Ri,gfm:Dr,pedantic:Er},Ht={normal:ji,gfm:mi,breaks:Xr,pedantic:Jr},Zr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zi=e=>Zr[e];function Le(e,t){if(t){if(se.escapeTest.test(e))return e.replace(se.escapeReplace,Zi)}else if(se.escapeTestNoEncode.test(e))return e.replace(se.escapeReplaceNoEncode,Zi);return e}function en(e){try{e=encodeURI(e).replace(se.percentDecode,"%")}catch{return null}return e}function tn(e,t){let s=e.replace(se.findPipe,(o,a,c)=>{let u=!1,h=a;for(;--h>=0&&c[h]==="\\";)u=!u;return u?"|":" |"}),i=s.split(se.splitPipe),n=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(se.slashPipe,"|");return i}function Xe(e,t,s){let i=e.length;if(i===0)return"";let n=0;for(;n<i&&e.charAt(i-n-1)===t;)n++;return e.slice(0,i-n)}function sn(e){let t=e.split(`
`),s=t.length-1;for(;s>=0&&se.blankLine.test(t[s]);)s--;return t.length-s<=2?e:t.slice(0,s+1).join(`
`)}function ea(e,t){if(e.indexOf(t[1])===-1)return-1;let s=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])s++;else if(e[i]===t[1]&&(s--,s<0))return i;return s>0?-2:-1}function ta(e,t=0){let s=t,i="";for(let n of e)if(n==="	"){let o=4-s%4;i+=" ".repeat(o),s+=o}else i+=n,s++;return i}function nn(e,t,s,i,n){let o=t.href,a=t.title||null,c=e[1].replace(n.other.outputLinkReplace,"$1");i.state.inLink=!0;let u={type:e[0].charAt(0)==="!"?"image":"link",raw:s,href:o,title:a,text:c,tokens:i.inlineTokens(c)};return i.state.inLink=!1,u}function sa(e,t,s){let i=e.match(s.other.indentCodeCompensation);if(i===null)return t;let n=i[1];return t.split(`
`).map(o=>{let a=o.match(s.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=n.length?o.slice(n.length):o}).join(`
`)}var Ss=class{options;rules;lexer;constructor(e){this.options=e||wt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let s=this.options.pedantic?t[0]:sn(t[0]),i=s.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s,codeBlockStyle:"indented",text:i}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let s=t[0],i=sa(s,t[3]||"",this.rules);return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(this.rules.other.endingHash.test(s)){let i=Xe(s,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(s=i.trim())}return{type:"heading",raw:Xe(t[0],`
`),depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Xe(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let s=Xe(t[0],`
`).split(`
`),i="",n="",o=[];for(;s.length>0;){let a=!1,c=[],u;for(u=0;u<s.length;u++)if(this.rules.other.blockquoteStart.test(s[u]))c.push(s[u]),a=!0;else if(!a)c.push(s[u]);else break;s=s.slice(u);let h=c.join(`
`),p=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${h}`:h,n=n?`${n}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=m,s.length===0)break;let b=o.at(-1);if(b?.type==="code")break;if(b?.type==="blockquote"){let x=b,v=x.raw+`
`+s.join(`
`),M=this.blockquote(v);o[o.length-1]=M,i=i.substring(0,i.length-x.raw.length)+M.raw,n=n.substring(0,n.length-x.text.length)+M.text;break}else if(b?.type==="list"){let x=b,v=x.raw+`
`+s.join(`
`),M=this.list(v);o[o.length-1]=M,i=i.substring(0,i.length-b.raw.length)+M.raw,n=n.substring(0,n.length-x.raw.length)+M.raw,s=v.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),i=s.length>1,n={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let o=this.rules.other.listItemRegex(s),a=!1;for(;e;){let u=!1,h="",p="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let m=ta(t[2].split(`
`,1)[0],t[1].length),b=e.split(`
`,1)[0],x=!m.trim(),v=0;if(this.options.pedantic?(v=2,p=m.trimStart()):x?v=t[1].length+1:(v=m.search(this.rules.other.nonSpaceChar),v=v>4?1:v,p=m.slice(v),v+=t[1].length),x&&this.rules.other.blankLine.test(b)&&(h+=b+`
`,e=e.substring(b.length+1),u=!0),!u){let M=this.rules.other.nextBulletRegex(v),Je=this.rules.other.hrRegex(v),S=this.rules.other.fencesBeginRegex(v),W=this.rules.other.headingBeginRegex(v),V=this.rules.other.htmlBeginRegex(v),Se=this.rules.other.blockquoteBeginRegex(v);for(;e;){let me=e.split(`
`,1)[0],it;if(b=me,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),it=b):it=b.replace(this.rules.other.tabCharGlobal,"    "),S.test(b)||W.test(b)||V.test(b)||Se.test(b)||M.test(b)||Je.test(b))break;if(it.search(this.rules.other.nonSpaceChar)>=v||!b.trim())p+=`
`+it.slice(v);else{if(x||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(m)||W.test(m)||Je.test(m))break;p+=`
`+b}x=!b.trim(),h+=me+`
`,e=e.substring(me.length+1),m=it.slice(v)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(a=!0)),n.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=h}let c=n.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let u of n.items){this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]);let h=u.tokens[0];if(u.task&&(h?.type==="text"||h?.type==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),h.raw=h.raw.replace(this.rules.other.listReplaceTask,""),h.text=h.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(u.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};u.checked=m.checked,n.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=m.raw+u.tokens[0].raw,u.tokens[0].text=m.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(m)):u.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):u.tokens.unshift(m)}}else u.task&&(u.task=!1);if(!n.loose){let p=u.tokens.filter(b=>b.type==="space"),m=p.length>0&&p.some(b=>this.rules.other.anyLine.test(b.raw));n.loose=m}}if(n.loose)for(let u of n.items){u.loose=!0;for(let h of u.tokens)h.type==="text"&&(h.type="paragraph")}return n}}html(e){let t=this.rules.block.html.exec(e);if(t){let s=sn(t[0]);return{type:"html",block:!0,raw:s,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:s}}}def(e){let t=this.rules.block.def.exec(e);if(t){let s=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:Xe(t[0],`
`),href:i,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let s=tn(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:Xe(t[0],`
`),header:[],align:[],rows:[]};if(s.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<s.length;a++)o.header.push({text:s[a],tokens:this.lexer.inline(s[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(tn(a,o.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[u]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let s=t[1].trim();return{type:"heading",raw:Xe(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=Xe(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=ea(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],n=o[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),nn(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[i.toLowerCase()];if(!n){let o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return nn(s,n,s[0],this.lexer,this.rules)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,c=n,u=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+n);(i=h.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=[...o].length,i[3]||i[4]){c+=a;continue}else if((i[5]||i[6])&&n%3&&!((n+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);let p=[...i[0]][0].length,m=e.slice(0,n+i.index+p+a);if(Math.min(n,a)%2){let x=m.slice(1,-1);return{type:"em",raw:m,text:x,tokens:this.lexer.inlineTokens(x)}}let b=m.slice(2,-2);return{type:"strong",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return i&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:t[0],text:s}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,s=""){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,c=n,u=this.rules.inline.delRDelim;for(u.lastIndex=0,t=t.slice(-1*e.length+n);(i=u.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(a=[...o].length,a!==n))continue;if(i[3]||i[4]){c+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c);let h=[...i[0]][0].length,p=e.slice(0,n+i.index+h+a),m=p.slice(n,-n);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let s,i;return t[2]==="@"?(s=t[1],i="mailto:"+s):(s=t[1],i=s),{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=t[0],i="mailto:"+s;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);s=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let s=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:s}}}},Te=class fi{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||wt,this.options.tokenizer=this.options.tokenizer||new Ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:se,block:fs.normal,inline:Ht.normal};this.options.pedantic?(s.block=fs.pedantic,s.inline=Ht.pedantic):this.options.gfm&&(s.block=fs.gfm,this.options.breaks?s.inline=Ht.breaks:s.inline=Ht.gfm),this.tokenizer.rules=s}static get rules(){return{block:fs,inline:Ht}}static lex(t,s){return new fi(s).lex(t)}static lexInline(t,s){return new fi(s).inlineTokens(t)}lex(t){t=t.replace(se.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let i=this.inlineQueue[s];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,s=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(se.tabCharGlobal,"    ").replace(se.spaceLine,""));let n=1/0;for(;t;){if(t.length<n)n=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(c=>(o=c.call({lexer:this},t,s))?(t=t.substring(o.raw.length),s.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let c=s.at(-1);o.raw.length===1&&c!==void 0?c.raw+=`
`:s.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let c=s.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.at(-1).src=c.text):s.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let c=s.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},s.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),s.push(o);continue}let a=t;if(this.options.extensions?.startBlock){let c=1/0,u=t.slice(1),h;this.options.extensions.startBlock.forEach(p=>{h=p.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(a=t.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let c=s.at(-1);i&&c?.type==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):s.push(o),i=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let c=s.at(-1);c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):s.push(o);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,s}inline(t,s=[]){return this.inlineQueue.push({src:t,tokens:s}),s}inlineTokens(t,s=[]){this.tokenizer.lexer=this;let i=t,n=null;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)h.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,n.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)o=n[2]?n[2].length:0,i=i.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,c="",u=1/0;for(;t;){if(t.length<u)u=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}a||(c=""),a=!1;let h;if(this.options.extensions?.inline?.some(m=>(h=m.call({lexer:this},t,s))?(t=t.substring(h.raw.length),s.push(h),!0):!1))continue;if(h=this.tokenizer.escape(t)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.tag(t)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.link(t)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(h.raw.length);let m=s.at(-1);h.type==="text"&&m?.type==="text"?(m.raw+=h.raw,m.text+=h.text):s.push(h);continue}if(h=this.tokenizer.emStrong(t,i,c)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.codespan(t)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.br(t)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.del(t,i,c)){t=t.substring(h.raw.length),s.push(h);continue}if(h=this.tokenizer.autolink(t)){t=t.substring(h.raw.length),s.push(h);continue}if(!this.state.inLink&&(h=this.tokenizer.url(t))){t=t.substring(h.raw.length),s.push(h);continue}let p=t;if(this.options.extensions?.startInline){let m=1/0,b=t.slice(1),x;this.options.extensions.startInline.forEach(v=>{x=v.call({lexer:this},b),typeof x=="number"&&x>=0&&(m=Math.min(m,x))}),m<1/0&&m>=0&&(p=t.substring(0,m+1))}if(h=this.tokenizer.inlineText(p)){t=t.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(c=h.raw.slice(-1)),a=!0;let m=s.at(-1);m?.type==="text"?(m.raw+=h.raw,m.text+=h.text):s.push(h);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return s}infiniteLoopError(t){let s="Infinite loop on byte: "+t;if(this.options.silent)console.error(s);else throw new Error(s)}},Ts=class{options;parser;constructor(e){this.options=e||wt}space(e){return""}code({text:e,lang:t,escaped:s}){let i=(t||"").match(se.notSpaceStart)?.[0],n=e.replace(se.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Le(i)+'">'+(s?n:Le(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Le(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,s=e.start,i="";for(let a=0;a<e.items.length;a++){let c=e.items[a];i+=this.listitem(c)}let n=t?"ol":"ul",o=t&&s!==1?' start="'+s+'"':"";return"<"+n+o+`>
`+i+"</"+n+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",s="";for(let n=0;n<e.header.length;n++)s+=this.tablecell(e.header[n]);t+=this.tablerow({text:s});let i="";for(let n=0;n<e.rows.length;n++){let o=e.rows[n];s="";for(let a=0;a<o.length;a++)s+=this.tablecell(o[a]);i+=this.tablerow({text:s})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),s=e.header?"th":"td";return(e.align?`<${s} align="${e.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Le(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:s}){let i=this.parser.parseInline(s),n=en(e);if(n===null)return i;e=n;let o='<a href="'+e+'"';return t&&(o+=' title="'+Le(t)+'"'),o+=">"+i+"</a>",o}image({href:e,title:t,text:s,tokens:i}){i&&(s=this.parser.parseInline(i,this.parser.textRenderer));let n=en(e);if(n===null)return Le(s);e=n;let o=`<img src="${e}" alt="${Le(s)}"`;return t&&(o+=` title="${Le(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Le(e.text)}},Fi=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ie=class gi{options;renderer;textRenderer;constructor(t){this.options=t||wt,this.options.renderer=this.options.renderer||new Ts,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Fi}static parse(t,s){return new gi(s).parse(t)}static parseInline(t,s){return new gi(s).parseInline(t)}parse(t){this.renderer.parser=this;let s="";for(let i=0;i<t.length;i++){let n=t[i];if(this.options.extensions?.renderers?.[n.type]){let a=n,c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){s+=c||"";continue}}let o=n;switch(o.type){case"space":{s+=this.renderer.space(o);break}case"hr":{s+=this.renderer.hr(o);break}case"heading":{s+=this.renderer.heading(o);break}case"code":{s+=this.renderer.code(o);break}case"table":{s+=this.renderer.table(o);break}case"blockquote":{s+=this.renderer.blockquote(o);break}case"list":{s+=this.renderer.list(o);break}case"checkbox":{s+=this.renderer.checkbox(o);break}case"html":{s+=this.renderer.html(o);break}case"def":{s+=this.renderer.def(o);break}case"paragraph":{s+=this.renderer.paragraph(o);break}case"text":{s+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(t,s=this.renderer){this.renderer.parser=this;let i="";for(let n=0;n<t.length;n++){let o=t[n];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=c||"";continue}}let a=o;switch(a.type){case"escape":{i+=s.text(a);break}case"html":{i+=s.html(a);break}case"link":{i+=s.link(a);break}case"image":{i+=s.image(a);break}case"checkbox":{i+=s.checkbox(a);break}case"strong":{i+=s.strong(a);break}case"em":{i+=s.em(a);break}case"codespan":{i+=s.codespan(a);break}case"br":{i+=s.br(a);break}case"del":{i+=s.del(a);break}case"text":{i+=s.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return i}},es=class{options;block;constructor(e){this.options=e||wt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Te.lex:Te.lexInline}provideParser(e=this.block){return e?Ie.parse:Ie.parseInline}},$o=class{defaults=Pi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ie;Renderer=Ts;TextRenderer=Fi;Lexer=Te;Tokenizer=Ss;Hooks=es;constructor(...e){this.use(...e)}walkTokens(e,t){let s=[];for(let i of e)switch(s=s.concat(t.call(this,i)),i.type){case"table":{let n=i;for(let o of n.header)s=s.concat(this.walkTokens(o.tokens,t));for(let o of n.rows)for(let a of o)s=s.concat(this.walkTokens(a.tokens,t));break}case"list":{let n=i;s=s.concat(this.walkTokens(n.items,t));break}default:{let n=i;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);s=s.concat(this.walkTokens(a,t))}):n.tokens&&(s=s.concat(this.walkTokens(n.tokens,t)))}}return s}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{let i={...s};if(i.async=this.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=t.renderers[n.name];o?t.renderers[n.name]=function(...a){let c=n.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[n.level];o?o.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),i.extensions=t),s.renderer){let n=this.defaults.renderer||new Ts(this.defaults);for(let o in s.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=s.renderer[a],u=n[a];n[a]=(...h)=>{let p=c.apply(n,h);return p===!1&&(p=u.apply(n,h)),p||""}}i.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new Ss(this.defaults);for(let o in s.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=s.tokenizer[a],u=n[a];n[a]=(...h)=>{let p=c.apply(n,h);return p===!1&&(p=u.apply(n,h)),p}}i.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new es;for(let o in s.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=s.hooks[a],u=n[a];es.passThroughHooks.has(o)?n[a]=h=>{if(this.defaults.async&&es.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await c.call(n,h);return u.call(n,m)})();let p=c.call(n,h);return u.call(n,p)}:n[a]=(...h)=>{if(this.defaults.async)return(async()=>{let m=await c.apply(n,h);return m===!1&&(m=await u.apply(n,h)),m})();let p=c.apply(n,h);return p===!1&&(p=u.apply(n,h)),p}}i.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,o=s.walkTokens;i.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),n&&(c=c.concat(n.call(this,a))),c}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Te.lex(e,t??this.defaults)}parser(e,t){return Ie.parse(e,t??this.defaults)}parseMarkdown(e){return(t,s)=>{let i={...s},n={...this.defaults,...i},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(t):t,c=await(n.hooks?await n.hooks.provideLexer(e):e?Te.lex:Te.lexInline)(a,n),u=n.hooks?await n.hooks.processAllTokens(c):c;n.walkTokens&&await Promise.all(this.walkTokens(u,n.walkTokens));let h=await(n.hooks?await n.hooks.provideParser(e):e?Ie.parse:Ie.parseInline)(u,n);return n.hooks?await n.hooks.postprocess(h):h})().catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));let a=(n.hooks?n.hooks.provideLexer(e):e?Te.lex:Te.lexInline)(t,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let c=(n.hooks?n.hooks.provideParser(e):e?Ie.parse:Ie.parseInline)(a,n);return n.hooks&&(c=n.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+Le(s.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(s);throw s}}},ct=new $o;function E(e,t){return ct.parse(e,t)}E.options=E.setOptions=function(e){return ct.setOptions(e),E.defaults=ct.defaults,po(E.defaults),E};E.getDefaults=Pi;E.defaults=wt;E.use=function(...e){return ct.use(...e),E.defaults=ct.defaults,po(E.defaults),E};E.walkTokens=function(e,t){return ct.walkTokens(e,t)};E.parseInline=ct.parseInline;E.Parser=Ie;E.parser=Ie.parse;E.Renderer=Ts;E.TextRenderer=Fi;E.Lexer=Te;E.lexer=Te.lex;E.Tokenizer=Ss;E.Hooks=es;E.parse=E;E.options;E.setOptions;E.use;E.walkTokens;E.parseInline;Ie.parse;Te.lex;const ia=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),na=new $o({gfm:!0,renderer:{html(e){return ia(e.text)}}}),oa=new Set(["p","br","hr","strong","b","em","i","del","s","code","pre","kbd","sup","sub","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","table","thead","tbody","tr","th","td","input","span"]),ra=new Set(["script","style","iframe","object","embed","template","noscript","svg","math","form","textarea","select","button"]),aa=/^(https?:|mailto:|\/|#|\.{0,2}\/)/i,la=/^(https?:|\/|data:image\/(png|jpe?g|gif|webp);)/i;function ca(e){const t=e.tagName.toLowerCase();for(const s of Array.from(e.attributes)){const i=s.name.toLowerCase(),n=s.value.trim();let o=!1;t==="a"&&i==="href"?o=aa.test(n):t==="a"&&i==="title"?o=!0:t==="img"&&i==="src"?o=la.test(n):t==="img"&&(i==="alt"||i==="title")?o=!0:t==="ol"&&i==="start"?o=/^\d+$/.test(n):(t==="th"||t==="td")&&i==="align"?o=/^(left|right|center)$/.test(n):t==="code"&&i==="class"?o=/^language-[\w+-]+$/.test(n):t==="input"&&(i==="type"||i==="checked"||i==="disabled")&&(o=i!=="type"||n==="checkbox"),o||e.removeAttribute(s.name)}t==="a"&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")),t==="input"&&e.setAttribute("disabled","")}function da(e){const t=document.createElement("template");t.innerHTML=e;const s=i=>{for(const n of Array.from(i.children)){const o=n.tagName.toLowerCase();if(ra.has(o)){n.remove();continue}if(s(n),!oa.has(o)||o==="input"&&n.getAttribute("type")!=="checkbox"){n.replaceWith(...Array.from(n.childNodes));continue}ca(n)}};return s(t.content),t.innerHTML}function ha(e){return da(na.parse(e,{async:!1}))}var ua=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,as=(e,t,s,i)=>{for(var n=i>1?void 0:i?pa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ua(t,s,n),n};function ma(e){if(!e)return;const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);cursor:zoom-out;padding:2rem;opacity:0;transition:opacity .12s ease;";const s=document.createElement("img");s.src=e,s.style.cssText="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.5);",t.appendChild(s);const i=()=>{t.remove(),document.removeEventListener("keydown",n)},n=o=>{o.key==="Escape"&&i()};t.addEventListener("click",i),document.addEventListener("keydown",n),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"})}let At=class extends C{constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[],this.pending=!1}renderBody(){return this.content?this.chatRole==="mentor"?r`<div class="chat-md">${K(ha(this.content))}</div>`:r`<span class="whitespace-pre-wrap break-words">${this.content}</span>`:this.chatRole==="mentor"&&this.pending?r`<span
          class="thinking inline-flex items-center gap-1 text-muted"
          aria-label="Mana is thinking"
          role="status"
        >
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
        </span>`:""}renderAttachments(){return this.attachments?.length?r`
      <div class="mt-2 flex flex-wrap gap-2">
        ${this.attachments.map(e=>r`
            <img
              src="${e.url}"
              loading="lazy"
              class="max-h-48 rounded-lg border border-line cursor-zoom-in"
              alt=""
              @click=${()=>ma(e.url)}
            />
          `)}
      </div>
    `:null}render(){return this.chatRole==="mentor"?r`
        <div class="text-ink text-base leading-[1.65] max-w-full min-w-0 break-words">
          ${this.renderBody()}
          ${this.renderAttachments()}
        </div>
      `:this.chatRole==="error"?r`
        <div class="text-red-500 text-base leading-[1.6] italic">
          ${this.renderBody()}
        </div>
      `:r`
      <div class="flex flex-col items-end">
        <div class="chat-user-bubble px-4 py-2.5 rounded-2xl max-w-[85%] text-base leading-[1.6]">
          ${this.renderBody()}
          ${this.renderAttachments()}
        </div>
      </div>
    `}};as([g()],At.prototype,"chatRole",2);as([g()],At.prototype,"content",2);as([g({type:Array})],At.prototype,"attachments",2);as([g({type:Boolean})],At.prototype,"pending",2);At=as([k("chat-message")],At);var fa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,js=(e,t,s,i)=>{for(var n=i>1?void 0:i?ga(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&fa(t,s,n),n};function ba(e){return new Date(e*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let is=class extends C{constructor(){super(...arguments),this.live=[],this.pending=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=e=>{const t=e.detail;if(!t)return;const s=`live_user_${Date.now()}`,i=`live_mentor_${Date.now()}`;this.liveMentorId=i,this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.text,attachments:t.attachments.map(n=>({url:n.url}))},{id:i,role:"mentor",content:"",attachments:[]}],t.liveDetail.append=n=>this.appendToMentor(i,n),t.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onQueueAdd=e=>{const t=e.detail;t&&(this.pending=[...this.pending,{id:t.id,text:t.text,attachments:t.attachments??[]}],this.updateComplete.then(()=>this.scrollToBottom()))},this.onQueueRemove=e=>{const t=e.detail?.id;t&&(this.pending=this.pending.filter(s=>s.id!==t))},this.onQueueClear=()=>{this.pending=[]},this.onSlashMessage=e=>{const t=e.detail;if(!t)return;const s=`slash_user_${Date.now()}`,i=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.user,attachments:[]},{id:i,role:"mentor",content:t.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(e,t){this.live=this.live.map(i=>i.id===e?{...i,content:i.content+t}:i);const s=this.renderRoot.querySelector(`chat-message[data-live-id="${e}"]`);s&&(s.content=(s.content||"")+t),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const e=this.scroller;e&&(e.scrollTop=e.scrollHeight)}createRenderRoot(){const e=super.createRenderRoot();return this.style.display="block",e}connectedCallback(){super.connectedCallback(),this.unsubMessages=_(this,f,e=>e.messages),this.unsubCurrent=_(this,f,e=>e.currentThreadId),this.unsubThreads=_(this,f,e=>e.threads),this.unsubMode=_(this,f,e=>e.rightPaneMode),this.prevThreadId=f.getState().currentThreadId,f.subscribe((e,t)=>{e.messages!==t.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.live=[],this.pending=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage),document.addEventListener("queue-add",this.onQueueAdd),document.addEventListener("queue-remove",this.onQueueRemove),document.addEventListener("queue-clear",this.onQueueClear)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage),document.removeEventListener("queue-add",this.onQueueAdd),document.removeEventListener("queue-remove",this.onQueueRemove),document.removeEventListener("queue-clear",this.onQueueClear)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(e){const t=e.tool_calls;return t&&Array.isArray(t.attachments)?t.attachments:[]}mapRole(e){return e.role==="user"?"user":(e.role==="mentor","mentor")}render(){const e=f.getState(),{threads:t,currentThreadId:s}=e,i=this.frozenMessages??e.messages;Di[ao(e)];const n=s?t.find(o=>o.id===s)??null:null;return r`
      <div class="h-full flex flex-col min-h-0">
        <div
          data-scroll
          class="flex-1 overflow-y-auto px-1 sm:px-4 py-3 min-h-0"
          style="scrollbar-gutter: stable;"
        >
          <!-- Inner column is at least the height of the scroller and uses
               justify-end. Short threads (1-2 messages) get anchored to the
               bottom against the composer (no big white gap on mobile).
               When messages overflow, this column just grows past min-h-full
               and scrolls normally — same pattern ChatGPT/Claude.ai use. -->
          <!-- Reading column: centered, capped at ~736px so a wide window
               doesn't stretch lines edge to edge. Same cap as the composer. -->
          <div class="chat-column min-h-full flex flex-col justify-end gap-7">
            ${n&&i.length?r`<div class="text-center text-xs text-muted -mb-3">${ba(n.started_at)}</div>`:null}
            ${i.map(o=>r`
              <chat-message
                .chatRole=${this.mapRole(o)}
                .content=${o.content}
                .attachments=${this.extractAttachments(o)}
              ></chat-message>
            `)}
            ${this.live.map(o=>r`
                <chat-message
                  data-live-id=${o.id}
                  .chatRole=${o.role}
                  .content=${o.content}
                  .attachments=${o.attachments}
                  .pending=${o.role==="mentor"}
                ></chat-message>
              `)}
            ${this.pending.map(o=>r`
                <div class="opacity-50">
                  <chat-message
                    .chatRole=${"user"}
                    .content=${o.text}
                    .attachments=${o.attachments}
                  ></chat-message>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}};js([l()],is.prototype,"live",2);js([l()],is.prototype,"pending",2);js([ge("[data-scroll]")],is.prototype,"scroller",2);is=js([k("chat-pane")],is);async function*Co(e){{yield*ya(e);return}}const xa="https://serdarsalim.com",on=`[Get your own Mana →](${xa})`;function va(e,t){const s={"goals-advisor":"Add a goal, give it a key result, or tick off a weekly task.","grocery-keeper":"Add something to Shopping and move it to the pantry when it is bought.","finance-keeper":"Log an expense, adjust a category budget, or record an account balance.","circle-keeper":"Open a person, add a note, or put them in more than one circle.","office-keeper":"Open a sample project and read the handoffs in its inbox.","learn-coach":"Open a sample skill, finish a lesson, or try a review question.",publisher:"Write a post, link its proof, add a voice sample, or try the publishing planner. Posting to LinkedIn is off here.",mana:"Open Notes and write, format, pin, search, or restore a note."};return t===1?`This chat is scripted. No AI model is connected, and it cannot change your tools.

${s[e]??"The tools work by hand, with fictional sample data."} Your edits stay in this browser.

${on}`:t%2===0?`In your own Mana, a connected model can work with your tools by chat or voice. This demo only shows a scripted reply.

${s[e]??"Try Goals, Finance, Circles, Learn, Notes or Publisher from the sidebar."}`:`Keep exploring the tools. You can edit the sample data and reset it from Settings whenever you want.

${on}`}async function*ya(e){const{t}=await Ke(async()=>{const{t:m}=await import("./tables-D2emgc0r.js");return{t:m}},__vite__mapDeps([0,1])),{now:s}=await Ke(async()=>{const{now:m}=await import("./db-DHWx8Fue.js");return{now:m}},[]);let i=e.threadId??null;if(i==null){const m=s();i=t.threads.insert({title:e.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:e.persona??"goals-advisor",focus_goal_id:null,started_at:m,last_msg_at:m,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${m}`}}).id,yield{type:"thread",threadId:i}}t.messages.insert({thread_id:i,role:"user",content:e.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const n=t.threads.get(i)?.persona??e.persona??"goals-advisor",o=t.messages.where(m=>m.thread_id===i&&m.role==="user").length,a=va(n,o),c=m=>new Promise(b=>setTimeout(b,m));await c(250);const u=a.match(/\S+\s*/g)??[a],h=3;for(let m=0;m<u.length&&!e.signal?.aborted;m+=h)yield{type:"text",text:u.slice(m,m+h).join("")},await c(45);t.messages.insert({thread_id:i,role:"mentor",content:a,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const p=t.threads.get(i);p&&t.threads.update(i,{last_msg_at:s(),title:p.title||e.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}const Ui=[{id:"claude-opus-5-5",label:"Opus 5.5",short:"Opus",provider:"anthropic",contextWindow:1e6,note:"default"},{id:"claude-fable-5-1",label:"Fable 5.1",short:"Fable",provider:"anthropic",contextWindow:1e6,note:"deepest"},{id:"claude-sonnet-5-5",label:"Sonnet 5.5",short:"Sonnet",provider:"anthropic",contextWindow:1e6},{id:"claude-haiku-4-5-20251001",label:"Haiku 4.5",short:"Haiku",provider:"anthropic",contextWindow:2e5,note:"fastest"},{id:"gpt-6.1-sol",label:"GPT-6.1 Sol",short:"GPT Sol",provider:"openai",contextWindow:272e3},{id:"gpt-6-astra",label:"GPT-6 Astra",short:"GPT Astra",provider:"openai",contextWindow:272e3,note:"deepest GPT"},{id:"gpt-6-luna",label:"GPT-6 Luna",short:"GPT Luna",provider:"openai",contextWindow:272e3,note:"fast"}],wa="claude-opus-5-5",ka={"claude-opus-4-8":"claude-opus-5-5","claude-opus-5":"claude-opus-5-5","claude-sonnet-5":"claude-sonnet-5-5","claude-fable-5":"claude-fable-5-1","claude-haiku-4-5":"claude-haiku-4-5-20251001","gpt-5.6-sol":"gpt-6.1-sol","gpt-5.6-terra":"gpt-6-luna"};function Pt(e){return e?ka[e]||e:wa}function bi(e){const t=Pt(e);return Ui.find(s=>s.id===t)}function $a(e){const t=bi(e);return t?t.contextWindow:Pt(e).startsWith("gpt")?272e3:2e5}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=so(class extends io{constructor(e){if(super(e),e.type!==no.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return oo}});var Ca=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,pe=(e,t,s,i)=>{for(var n=i>1?void 0:i?Sa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ca(t,s,n),n};let ie=class extends Ae{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const e=!!this.href,t=Is({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),s=r`
      <span class="button__prefix"><slot name="prefix"></slot></span>
      <slot></slot>
      <span class="button__suffix"><slot name="suffix"></slot></span>
    `;return e?r`<a
        class=${t}
        href=${this.disabled?"javascript:void(0)":this.href}
        target=${this.target??"_self"}
        rel=${this.target?this.rel:""}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        >${s}</a
      >`:r`<button
      class=${t}
      type=${this.type}
      name=${this.name}
      value=${this.value}
      ?disabled=${this.disabled}
    >
      ${s}
    </button>`}};ie.styles=je`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      border: 1px solid var(--sc-button-border, #d1d5db);
      border-radius: var(--sc-button-radius, 6px);
      background: var(--sc-button-bg, #ffffff);
      color: var(--sc-button-color, #111827);
      font: inherit;
      font-weight: 500;
      line-height: 1;
      cursor: pointer;
      user-select: none;
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        color 120ms ease,
        box-shadow 120ms ease;
      padding: 0.5em 0.9em;
    }
    .button:hover:not(.button--disabled) {
      background: var(--sc-button-bg-hover, #f3f4f6);
    }
    .button:focus-visible {
      outline: 2px solid var(--sc-button-focus, #2563eb);
      outline-offset: 2px;
    }
    .button--small {
      font-size: 12px;
      padding: 0.35em 0.7em;
    }
    .button--medium {
      font-size: 14px;
    }
    .button--large {
      font-size: 16px;
      padding: 0.6em 1.1em;
    }
    .button--primary {
      background: var(--sc-primary, #2563eb);
      border-color: var(--sc-primary, #2563eb);
      color: #ffffff;
    }
    .button--primary:hover:not(.button--disabled) {
      background: var(--sc-primary-hover, #1d4ed8);
    }
    .button--success {
      background: #16a34a;
      border-color: #16a34a;
      color: #ffffff;
    }
    .button--warning {
      background: #d97706;
      border-color: #d97706;
      color: #ffffff;
    }
    .button--danger {
      background: #dc2626;
      border-color: #dc2626;
      color: #ffffff;
    }
    .button--neutral {
      background: #374151;
      border-color: #374151;
      color: #ffffff;
    }
    .button--text {
      background: transparent;
      border-color: transparent;
      color: var(--sc-primary, #2563eb);
    }
    .button--text:hover:not(.button--disabled) {
      background: rgba(37, 99, 235, 0.08);
    }
    .button--pill {
      border-radius: 9999px;
    }
    .button--circle {
      border-radius: 9999px;
      padding: 0.5em;
      aspect-ratio: 1 / 1;
    }
    .button--caret::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid currentColor;
      margin-left: 0.25em;
    }
    .button--loading {
      cursor: wait;
    }
    .button--disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .button__prefix,
    .button__suffix {
      display: inline-flex;
      align-items: center;
    }
  `;pe([g({reflect:!0})],ie.prototype,"variant",2);pe([g({reflect:!0})],ie.prototype,"size",2);pe([g({type:Boolean,reflect:!0})],ie.prototype,"caret",2);pe([g({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);pe([g({type:Boolean,reflect:!0})],ie.prototype,"loading",2);pe([g({type:Boolean,reflect:!0})],ie.prototype,"pill",2);pe([g({type:Boolean,reflect:!0})],ie.prototype,"circle",2);pe([g()],ie.prototype,"type",2);pe([g()],ie.prototype,"name",2);pe([g()],ie.prototype,"value",2);pe([g()],ie.prototype,"href",2);pe([g()],ie.prototype,"target",2);pe([g()],ie.prototype,"rel",2);ie=pe([k("sc-button")],ie);var Ta=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,ls=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ia(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ta(t,s,n),n};let dt=class extends Ae{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=e=>{e.target===this.dialogEl&&this.hide()}}updated(e){e.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <dialog
        @close=${this.onClose}
        @click=${this.onBackdropClick}
        aria-label=${this.label}
      >
        <div class="panel">
          ${this.noHeader?null:r`
                <header class="header">
                  <slot name="label">
                    <span class="title">${this.label}</span>
                  </slot>
                  <button
                    class="close"
                    type="button"
                    aria-label="Close"
                    @click=${()=>this.hide()}
                  >
                    &times;
                  </button>
                </header>
              `}
          <div class="body"><slot></slot></div>
          <footer class="footer"><slot name="footer"></slot></footer>
        </div>
      </dialog>
    `}};dt.styles=je`
    :host {
      display: contents;
    }
    dialog {
      border: none;
      padding: 0;
      border-radius: var(--sc-dialog-radius, 12px);
      /* Honor app theme tokens (set on <html data-theme>). */
      background: var(--surface, #ffffff);
      color: var(--ink, #111827);
      border: 1px solid var(--line, #e5e7eb);
      max-width: min(calc(100vw - 32px), var(--sc-dialog-width, 480px));
      width: 100%;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.4);
    }
    .panel {
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 64px);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 14px 16px;
      border-bottom: 1px solid var(--line, #e5e7eb);
    }
    .title {
      font-weight: 600;
      font-size: 15px;
      color: var(--ink, #111827);
    }
    .close {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: var(--muted, inherit);
      padding: 4px 8px;
      border-radius: 4px;
    }
    .close:hover {
      background: var(--hover, rgba(0, 0, 0, 0.06));
      color: var(--ink, inherit);
    }
    .body {
      padding: 16px;
      overflow: auto;
      color: var(--ink, inherit);
    }
    .footer {
      padding: 12px 16px;
      border-top: 1px solid var(--line, #e5e7eb);
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
    .footer:empty {
      display: none;
    }
  `;ls([g({type:Boolean,reflect:!0})],dt.prototype,"open",2);ls([g()],dt.prototype,"label",2);ls([g({attribute:"no-header",type:Boolean})],dt.prototype,"noHeader",2);ls([ge("dialog")],dt.prototype,"dialogEl",2);dt=ls([k("sc-dialog")],dt);var Da=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Fs=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ea(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Da(t,s,n),n};let Mt=class extends Ae{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return r`
      <div class="popup-wrapper">
        <slot name="anchor"></slot>
        <div
          class="popup"
          data-placement=${this.placement}
          style=${`margin: ${this.distance}px;`}
        >
          <slot></slot>
        </div>
      </div>
    `}};Mt.styles=je`
    :host {
      display: contents;
    }
    .popup-wrapper {
      position: relative;
      display: inline-block;
    }
    .popup {
      position: absolute;
      z-index: 1000;
      visibility: hidden;
    }
    :host([active]) .popup {
      visibility: visible;
    }
    .popup[data-placement="bottom-start"] {
      top: 100%;
      left: 0;
    }
    .popup[data-placement="bottom-end"] {
      top: 100%;
      right: 0;
    }
    .popup[data-placement="bottom"] {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    .popup[data-placement="top-start"] {
      bottom: 100%;
      left: 0;
    }
    .popup[data-placement="top-end"] {
      bottom: 100%;
      right: 0;
    }
    .popup[data-placement="top"] {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    .popup[data-placement="left"] {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .popup[data-placement="right"] {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .popup[data-placement="left-start"] {
      right: 100%;
      top: 0;
    }
    .popup[data-placement="left-end"] {
      right: 100%;
      bottom: 0;
    }
    .popup[data-placement="right-start"] {
      left: 100%;
      top: 0;
    }
    .popup[data-placement="right-end"] {
      left: 100%;
      bottom: 0;
    }
  `;Fs([g({type:Boolean,reflect:!0})],Mt.prototype,"active",2);Fs([g()],Mt.prototype,"placement",2);Fs([g({type:Number})],Mt.prototype,"distance",2);Mt=Fs([k("sc-popup")],Mt);var _a=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,kt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Pa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&_a(t,s,n),n};let Ge=class extends Ae{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=e=>{e.stopPropagation(),this.toggle()},this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.hide())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return r`
      <sc-popup
        ?active=${this.open}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span
          slot="anchor"
          @click=${this.onTriggerClick}
          style="display:inline-flex"
        >
          <slot name="trigger"></slot>
        </span>
        <div class="panel" @sc-select=${this.onSelect}>
          <slot></slot>
        </div>
      </sc-popup>
    `}};Ge.styles=je`
    :host {
      display: inline-block;
    }
  `;kt([g({type:Boolean,reflect:!0})],Ge.prototype,"open",2);kt([g()],Ge.prototype,"placement",2);kt([g({type:Number})],Ge.prototype,"distance",2);kt([g({type:Boolean,attribute:"stay-open-on-select"})],Ge.prototype,"stayOpenOnSelect",2);kt([g({type:Boolean})],Ge.prototype,"disabled",2);kt([ge("sc-popup")],Ge.prototype,"popup",2);Ge=kt([k("sc-dropdown")],Ge);var Aa=Object.getOwnPropertyDescriptor,Ma=(e,t,s,i)=>{for(var n=i>1?void 0:i?Aa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let xi=class extends Ae{constructor(){super(...arguments),this.onClick=e=>{const t=e.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-menu-item");!t||t.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:t}}))},this.onKeydown=e=>{const t=this.items().filter(n=>!n.disabled);if(!t.length)return;const s=document.activeElement,i=s?t.indexOf(s):-1;e.key==="ArrowDown"?(e.preventDefault(),t[(i+1)%t.length]?.focus()):e.key==="ArrowUp"?(e.preventDefault(),t[(i-1+t.length)%t.length]?.focus()):(e.key==="Enter"||e.key===" ")&&s&&s.tagName.toLowerCase()==="sc-menu-item"&&(e.preventDefault(),s.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return r`<slot></slot>`}};xi.styles=je`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;xi=Ma([k("sc-menu")],xi);var Oa=Object.defineProperty,La=Object.getOwnPropertyDescriptor,cs=(e,t,s,i)=>{for(var n=i>1?void 0:i?La(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Oa(t,s,n),n};let ht=class extends Ae{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return r`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};ht.styles=je`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.3;
      color: var(--sc-menu-color, #111827);
      outline: none;
    }
    :host(:hover:not([disabled])),
    :host(:focus-visible:not([disabled])) {
      background: var(--sc-menu-hover, #f3f4f6);
    }
    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .label {
      flex: 1;
    }
    .check {
      width: 12px;
      display: inline-block;
      text-align: center;
    }
    :host([type="checkbox"]) .check::before {
      content: "";
    }
    :host([type="checkbox"][checked]) .check::before {
      content: "✓";
    }
  `;cs([g({reflect:!0})],ht.prototype,"type",2);cs([g({reflect:!0})],ht.prototype,"value",2);cs([g({type:Boolean,reflect:!0})],ht.prototype,"checked",2);cs([g({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);ht=cs([k("sc-menu-item")],ht);var Ra=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,G=(e,t,s,i)=>{for(var n=i>1?void 0:i?Na(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ra(t,s,n),n};let B=class extends Ae{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=e=>{this.value=e.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const e=this.type==="password"&&this.passwordVisible?"text":this.type;return r`
      <div class="form-control">
        ${this.label?r`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${Is({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
        >
          <slot name="prefix"></slot>
          <input
            .value=${this.value}
            type=${e}
            placeholder=${this.placeholder}
            name=${this.name}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            autocomplete=${this.autocomplete}
            minlength=${this.minlength??""}
            maxlength=${this.maxlength??""}
            pattern=${this.pattern}
            @input=${this.onInput}
            @change=${this.onChange}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
          />
          ${this.clearable&&this.value&&!this.disabled?r`<button
                type="button"
                class="icon-btn"
                aria-label="Clear"
                @click=${this.onClear}
              >
                &times;
              </button>`:null}
          ${this.type==="password"&&this.passwordToggle?r`<button
                type="button"
                class="icon-btn"
                aria-label="Toggle visibility"
                @click=${()=>this.passwordVisible=!this.passwordVisible}
              >
                ${this.passwordVisible?"🙈":"👁"}
              </button>`:null}
          <slot name="suffix"></slot>
        </div>
        ${this.helpText?r`<small class="help-text">${this.helpText}</small>`:null}
      </div>
    `}};B.styles=je`
    :host {
      display: block;
    }
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .label {
      font-size: 13px;
      color: var(--sc-input-label, #374151);
    }
    .help-text {
      font-size: 12px;
      color: var(--sc-input-help, #6b7280);
    }
    .input {
      display: flex;
      align-items: center;
      gap: 6px;
      border: 1px solid var(--sc-input-border, #d1d5db);
      border-radius: 6px;
      background: var(--sc-input-bg, #ffffff);
      padding: 0 8px;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }
    .input--small {
      min-height: 28px;
      font-size: 12px;
    }
    .input--medium {
      min-height: 34px;
      font-size: 14px;
    }
    .input--large {
      min-height: 40px;
      font-size: 16px;
    }
    .input:focus-within {
      border-color: var(--sc-primary, #2563eb);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .input--disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: inherit;
      font: inherit;
      padding: 4px 0;
      min-width: 0;
    }
    .icon-btn {
      border: none;
      background: none;
      cursor: pointer;
      padding: 2px 4px;
      color: inherit;
      opacity: 0.6;
    }
    .icon-btn:hover {
      opacity: 1;
    }
  `;G([g()],B.prototype,"value",2);G([g()],B.prototype,"type",2);G([g()],B.prototype,"size",2);G([g()],B.prototype,"placeholder",2);G([g()],B.prototype,"label",2);G([g({attribute:"help-text"})],B.prototype,"helpText",2);G([g()],B.prototype,"name",2);G([g({type:Boolean,reflect:!0})],B.prototype,"disabled",2);G([g({type:Boolean,reflect:!0})],B.prototype,"readonly",2);G([g({type:Boolean,reflect:!0})],B.prototype,"required",2);G([g({type:Boolean})],B.prototype,"clearable",2);G([g({type:Boolean,attribute:"password-toggle"})],B.prototype,"passwordToggle",2);G([g()],B.prototype,"autocomplete",2);G([g({type:Number})],B.prototype,"minlength",2);G([g({type:Number})],B.prototype,"maxlength",2);G([g()],B.prototype,"pattern",2);G([l()],B.prototype,"passwordVisible",2);G([ge("input")],B.prototype,"input",2);B=G([k("sc-input")],B);var ja=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,$e=(e,t,s,i)=>{for(var n=i>1?void 0:i?Fa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ja(t,s,n),n};let ce=class extends Ae{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.close())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=e=>{const s=e.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-option");!s||s.disabled||(this.value=s.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=e=>{e.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=e=>{(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(e){e.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let e="";for(const t of this.options()){const s=t.value===this.value;t.selected=s,s&&(e=t.getTextLabel())}this.displayLabel=e}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const e=!!this.value;return r`
      <div class="form-control">
        ${this.label?r`<label class="label">${this.label}</label>`:null}
        <div
          class=${Is({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${Is({display:!0,placeholder:!e})}
          >
            ${e?this.displayLabel:this.placeholder}
          </span>
          ${this.clearable&&e?r`<button
                type="button"
                class="icon-btn"
                aria-label="Clear"
                @click=${this.onClear}
              >
                &times;
              </button>`:null}
          <span class="caret"></span>
        </div>
        ${this.open?r`<div
              class="listbox"
              role="listbox"
              @click=${this.onListboxClick}
            >
              <slot></slot>
            </div>`:r`<div hidden><slot></slot></div>`}
        ${this.helpText?r`<small class="help-text">${this.helpText}</small>`:null}
      </div>
    `}};ce.styles=je`
    :host {
      display: block;
      position: relative;
    }
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .label {
      font-size: 13px;
      color: var(--sc-input-label, #374151);
    }
    .help-text {
      font-size: 12px;
      color: var(--sc-input-help, #6b7280);
    }
    .combobox {
      display: flex;
      align-items: center;
      gap: 6px;
      border: 1px solid var(--sc-input-border, #d1d5db);
      border-radius: 6px;
      background: var(--sc-input-bg, #ffffff);
      padding: 0 8px;
      cursor: pointer;
      user-select: none;
      min-height: 34px;
      font-size: 14px;
    }
    .combobox--small {
      min-height: 28px;
      font-size: 12px;
    }
    .combobox--large {
      min-height: 40px;
      font-size: 16px;
    }
    .combobox:focus-visible {
      outline: none;
      border-color: var(--sc-primary, #2563eb);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .display {
      flex: 1;
      padding: 4px 0;
      color: inherit;
    }
    .placeholder {
      color: #9ca3af;
    }
    .caret {
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid currentColor;
      opacity: 0.6;
    }
    .listbox {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 4px;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: 6px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      z-index: 1000;
      max-height: 240px;
      overflow: auto;
    }
    .icon-btn {
      border: none;
      background: none;
      cursor: pointer;
      padding: 2px 4px;
      color: inherit;
      opacity: 0.6;
    }
    .icon-btn:hover {
      opacity: 1;
    }
  `;$e([g()],ce.prototype,"value",2);$e([g()],ce.prototype,"placeholder",2);$e([g()],ce.prototype,"size",2);$e([g()],ce.prototype,"label",2);$e([g({attribute:"help-text"})],ce.prototype,"helpText",2);$e([g()],ce.prototype,"name",2);$e([g({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);$e([g({type:Boolean})],ce.prototype,"clearable",2);$e([g({type:Boolean,reflect:!0})],ce.prototype,"open",2);$e([l()],ce.prototype,"displayLabel",2);$e([ge(".combobox")],ce.prototype,"combobox",2);ce=$e([k("sc-select")],ce);var Ua=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,ds=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ba(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ua(t,s,n),n};let ut=class extends Ae{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};ut.styles=je`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;
      color: var(--sc-option-color, #111827);
    }
    :host(:hover:not([disabled])),
    :host([current]) {
      background: var(--sc-option-hover, #f3f4f6);
    }
    :host([selected]) {
      background: var(--sc-option-selected, #e0e7ff);
      font-weight: 500;
    }
    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;ds([g()],ut.prototype,"value",2);ds([g({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);ds([g({type:Boolean,reflect:!0})],ut.prototype,"selected",2);ds([g({type:Boolean,reflect:!0})],ut.prototype,"current",2);ut=ds([k("sc-option")],ut);var za=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,$t=(e,t,s,i)=>{for(var n=i>1?void 0:i?qa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&za(t,s,n),n};let We=class extends Ae{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.show():e.type.startsWith("focus")&&t.has("focus")&&this.show()},this.onLeave=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.hide():e.type.startsWith("focus")&&t.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};We.styles=je`
    :host {
      display: contents;
    }
    .tooltip {
      background: var(--sc-tooltip-bg, #111827);
      color: var(--sc-tooltip-color, #ffffff);
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      max-width: 240px;
      pointer-events: none;
      white-space: nowrap;
    }
  `;$t([g()],We.prototype,"content",2);$t([g()],We.prototype,"placement",2);$t([g({type:Boolean,reflect:!0})],We.prototype,"disabled",2);$t([g()],We.prototype,"trigger",2);$t([g({type:Number})],We.prototype,"distance",2);$t([g({type:Boolean,reflect:!0})],We.prototype,"open",2);We=$t([k("sc-tooltip")],We);var Ha=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,So=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ka(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ha(t,s,n),n};let vi=class extends C{constructor(){super(...arguments),this.items=[]}onRemove(e){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:e},bubbles:!0,composed:!0}))}isPdf(e){return e.file?.type==="application/pdf"||(e.dataUrl?.startsWith("data:application/pdf")??!1)||(e.url?.endsWith(".pdf")??!1)}isSheet(e){return/\.(xlsx|xls|csv)$/i.test(e.file?.name??"")||/\.(xlsx|xls|csv)$/i.test(e.url??"")}render(){return this.items.length?r`
      <div class="flex flex-wrap gap-2 px-3 py-2 border-t border-line bg-bg">
        ${this.items.map(e=>r`
            <div
              class="relative w-16 h-16 rounded border border-line overflow-hidden bg-surface ${e.uploaded?"":"opacity-60"}"
              title="${e.file?.name??(e.ephemeral?"ephemeral (pasted)":"persistent")}"
            >
              ${this.isPdf(e)?r`<div class="w-full h-full flex flex-col items-center justify-center gap-0.5 text-red-500/80">
                    <span class="text-lg leading-none">📄</span><span class="text-[9px] font-semibold">PDF</span>
                  </div>`:this.isSheet(e)?r`<div class="w-full h-full flex flex-col items-center justify-center gap-0.5 text-green-600/80">
                    <span class="text-lg leading-none">📊</span><span class="text-[9px] font-semibold">SHEET</span>
                  </div>`:r`<img src="${e.dataUrl||e.url||""}" alt="" class="w-full h-full object-cover" />`}
              ${e.uploaded?null:r`<div
                    class="absolute inset-0 flex items-center justify-center text-[10px] text-muted bg-bg/40"
                  >
                    …
                  </div>`}
              <button
                type="button"
                class="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs text-ink bg-bg/80 hover:bg-red-500/80 hover:text-white rounded-bl"
                aria-label="Remove"
                @click=${()=>this.onRemove(e.localId)}
              >
                ×
              </button>
            </div>
          `)}
      </div>
    `:r``}};So([g({type:Array})],vi.prototype,"items",2);vi=So([k("attachment-tray")],vi);var Ga=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Me=(e,t,s,i)=>{for(var n=i>1?void 0:i?Wa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ga(t,s,n),n};const Va=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Mana thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Mana AND sends in one shot — useful when you're inside an app and want Mana to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function rn(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}const Qa=/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i;function an(e){const t=e.type||"";return t.startsWith("image/")||t==="application/pdf"||t==="text/csv"||t==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||t==="application/vnd.ms-excel"?!0:Qa.test(e.name)}function Ya(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result)),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}function Ja(e){const t=Ui.map(s=>({id:s.id,label:s.label,short:s.short}));return t.some(s=>s.id===e)||t.push({id:e,label:e,short:e}),t}let ke=class extends C{constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.showUsage=!1,this.usage=[],this.turnsCompleted=0,this.model=Pt(f.getState().settings["cockpit.mentor_model"]),this.inputFocused=!1,this.prevThreadId=null,this.onGlobalKeyDown=e=>{(e.metaKey||e.ctrlKey)&&(e.key==="n"||e.key==="N"||e.key==="k"||e.key==="K")&&(e.preventDefault(),f.getState().selectThread(null),this.updateComplete.then(()=>this.textarea?.focus()))},this.onChatAttach=e=>{const s=e.detail?.files??[];(async()=>{for(const i of s)await this.uploadFile(i,!1)})()},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=_(this,f,e=>e.currentThreadId),this.prevThreadId=f.getState().currentThreadId,f.subscribe(e=>{e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.attachments=[],this.usage=[],this.turnsCompleted=0,this.showUsage=!1);const t=Pt(e.settings["cockpit.mentor_model"]);t!==this.model&&(this.model=t)}),document.addEventListener("chat-attach",this.onChatAttach),document.addEventListener("keydown",this.onGlobalKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach),document.removeEventListener("keydown",this.onGlobalKeyDown)}async uploadFile(e,t){const s=await Ya(e),i={localId:rn(),file:e,dataUrl:s,uploaded:!1,ephemeral:t};this.attachments=[...this.attachments,i];try{const n=await $.uploads.upload(s,t,e.name);this.attachments=this.attachments.map(o=>o.localId===i.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==i.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(e){const t=e.target,s=Array.from(t.files??[]);for(const i of s)await this.uploadFile(i,!1);t.value=""}async onPaste(e){const t=e.clipboardData?.items??[],s=[];for(const i of Array.from(t))if(i.kind==="file"){const n=i.getAsFile();n&&an(n)&&s.push(n)}if(s.length){e.preventDefault();for(const i of s)await this.uploadFile(i,!1)}}onDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}async onDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(an);if(t.length){e.preventDefault();for(const s of t)await this.uploadFile(s,!1)}}onTrayRemove(e){const t=e.detail.localId;this.attachments=this.attachments.filter(s=>s.localId!==t)}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(e){const t=e.target;this.text=t.value,t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,240)}px`,t.style.overflowY=t.scrollHeight>240?"auto":"hidden"}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.send())}async handleSlash(e){const[t,...s]=e.slice(1).trim().split(/\s+/),i=s.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:e,mentor:o},bubbles:!0,composed:!0}))};switch(t){case"help":case"?":return n(Va),!0;case"clear":case"new":return await f.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=t==="mana"?"mana":t==="grocery"?"grocery-keeper":"goals-advisor";try{await f.getState().createThread({kind:"chat",persona:o})}catch(a){const c=a instanceof Error?a.message:String(a);return n(`Couldn't switch to ${t}: ${c}`),!0}return i?(this.text=i,!1):(n(`Switched to a new ${Di[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(i||"").toLowerCase(),c={opus:"claude-opus-5-5",fable:"claude-fable-5-1",sonnet:"claude-sonnet-5-5",haiku:"claude-haiku-4-5-20251001",gpt:"gpt-6.1-sol",sol:"gpt-6.1-sol",astra:"gpt-6-astra",luna:"gpt-6-luna",terra:"gpt-6-luna","gpt-mini":"gpt-6-luna"}[o],u={};c&&(u[o]={id:c,label:bi(c)?.label??c});const h=u[o];return h?(await f.getState().setSetting("cockpit.mentor_model",h.id),n(`Mana model → **${h.label}** (\`${h.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model opus|fable|sonnet|haiku|sol|astra|luna\` (current: ${Pt(f.getState().settings["cockpit.mentor_model"])}).`),!0)}default:return!1}}async stop(){this.queue=[],this.dispatchEvent(new CustomEvent("queue-clear",{bubbles:!0,composed:!0})),this.abortController?.abort();const e=f.getState().currentThreadId;if(e!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:e})})}catch{}}async send(){let e=this.text.trim();const t=this.attachments.filter(n=>n.uploaded&&n.path&&n.url);if(!e&&t.length===0)return;if(e.startsWith("/")&&t.length===0){if(await this.handleSlash(e)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(e=this.text.trim(),!e&&t.length===0)return}const s=t.map(n=>({path:n.path,url:n.url,ephemeral:!!n.ephemeral})),i=t.filter(n=>!n.ephemeral).map(n=>({url:n.url}));if(this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[],this.sending){const n=rn();this.queue.push({id:n,text:e,attachments:s,bubbleAttachments:i}),this.dispatchEvent(new CustomEvent("queue-add",{detail:{id:n,text:e,attachments:i},bubbles:!0,composed:!0}));return}this.sending=!0;try{for(await this.runTurn(e,s,i);this.queue.length>0;){const n=this.queue.shift();if(!n)break;this.dispatchEvent(new CustomEvent("queue-remove",{detail:{id:n.id},bubbles:!0,composed:!0})),await this.runTurn(n.text,n.attachments,n.bubbleAttachments)}}finally{this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus())}}async runTurn(e,t,s){const i=f.getState(),n=i.currentThreadId,o={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:e,attachments:s,liveDetail:o},bubbles:!0,composed:!0}));let a=!1;try{let c=n;const u=n==null?ao(i):void 0;this.abortController=new AbortController;for await(const m of Co({threadId:n,message:e,attachments:t,persona:u,view:i.viewContext??void 0,signal:this.abortController.signal}))switch(m.type){case"thread":c=m.threadId,n==null&&this.prevThreadId==null&&(this.prevThreadId=m.threadId);break;case"text":a=!0,o.append?.(m.text);break;case"ops":this.dispatchOps(m.action);break;case"error":a=!0,o.append?.(`

_error: ${m.error}_`);break;case"done":{const b=f.getState().currentThreadId;if(b!==n&&b!==c)break;this.turnsCompleted+=1,this.usage=[...this.usage,{turn:this.turnsCompleted,model:this.model,context:m.contextTokens??null,start:m.startTokens??null,window:m.contextWindow??null,out:m.tokensOut??null}];break}}a||o.append?.("_(done)_"),o.finalize?.(),await f.getState().loadThreads();const h=f.getState().currentThreadId,p=h===n||h===c;c!=null&&p&&await f.getState().selectThread(c)}catch(c){c?.name==="AbortError"?o.append?.(`

_stopped_`):(console.warn("[composer] send failed",c),o.append?.(`

_error: ${c.message}_`)),o.finalize?.()}finally{this.abortController=void 0}}dispatchOps(e){document.dispatchEvent(new CustomEvent("ops-event",{detail:e,bubbles:!0,composed:!0}))}renderUsagePill(){const e=bi(this.model)?.short??this.model,t=this.contextNow(),i=t?(p=>p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p))(t):"—",n=this.contextLimit(),o=t?Math.min(100,t/n*100):0,c=2*Math.PI*6,u=o/100*c,h=o>80?"#f87171":o>50?"#fbbf24":"var(--accent, #3b82f6)";return r`
      <button
        type="button"
        class="shrink-0 flex items-center gap-1.5 h-7 px-1 rounded-full text-xs text-muted hover:text-ink transition-colors"
        title="Model & context usage"
        @click=${()=>{this.showUsage=!this.showUsage}}
      >
        <span class="font-medium text-ink">${e}</span>
        <span class="text-line">·</span>
        <svg width="16" height="16" viewBox="0 0 16 16" class="shrink-0 -rotate-90" aria-hidden="true">
          <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2.5" class="text-line" />
          <circle
            cx="8" cy="8" r="6" fill="none" stroke=${h} stroke-width="2.5" stroke-linecap="round"
            stroke-dasharray="${u} ${c}"
            style="transition: stroke-dasharray .3s"
          />
        </svg>
        <span>${i}</span>
      </button>
    `}contextNow(){return this.usage[this.usage.length-1]?.context??0}contextLimit(){for(let e=this.usage.length-1;e>=0;e--){const t=this.usage[e];if(t&&t.model===this.model&&t.window)return t.window}return $a(this.model)}async onModelChange(e){this.model=e,await f.getState().setSetting("cockpit.mentor_model",e)}renderUsageModal(){if(!this.showUsage)return null;const e=this.usage.some(a=>a.context!=null),t=this.contextNow(),s=this.usage[0]?.start??0,i=this.contextLimit(),n=t?Math.min(100,Math.round(t/i*100)):0,o=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);return r`
      <!-- click-away backdrop -->
      <div
        class="fixed inset-0 z-40"
        @click=${()=>{this.showUsage=!1}}
      ></div>
      <!-- panel anchored above the pill, like a dropdown -->
      <div class="absolute bottom-full right-0 mb-2 z-50 w-72 rounded-xl border border-line bg-surface shadow-xl p-4 text-sm">
          <div class="flex items-center justify-between mb-3">
            <span class="font-semibold text-ink">Context usage</span>
            <button
              class="text-muted hover:text-ink"
              @click=${()=>{this.showUsage=!1}}
            >✕</button>
          </div>

          <!-- model picker — lives here, not in a separate place -->
          <div class="mb-3">
            <label class="block text-xs text-muted mb-1">Model</label>
            <select
              class="w-full rounded-lg border border-line bg-subtle px-2.5 py-1.5 text-sm text-ink"
              .value=${this.model}
              @change=${a=>void this.onModelChange(a.target.value)}
            >
              ${Ja(this.model).map(a=>r`<option value=${a.id} ?selected=${a.id===this.model}>${a.label}</option>`)}
            </select>
          </div>

          ${e?r`
            <!-- context bar -->
            <div class="mb-3">
              <div class="flex justify-between text-xs text-muted mb-1">
                <span>Context window</span>
                <span>${o(t)} / ${o(i)} (${n}%)</span>
              </div>
              <div class="h-2 rounded-full bg-line overflow-hidden">
                <div
                  class="h-full rounded-full transition-all ${n>80?"bg-red-400":n>50?"bg-amber-400":"bg-accent"}"
                  style="width: ${n}%"
                ></div>
              </div>
            </div>

            <!-- baseline stat -->
            <div class="rounded-lg bg-subtle p-2.5 mb-3">
              <div class="text-xs text-muted mb-0.5">Loaded this chat</div>
              <div class="font-semibold text-ink">${s?o(s):"—"}</div>
              <div class="text-[10px] text-muted mt-0.5">system + history at start</div>
            </div>

            <!-- per-turn list -->
            ${this.usage.length>1?r`
              <div class="text-xs text-muted mb-1.5">Context growth per turn</div>
              <div class="flex flex-col gap-1 max-h-36 overflow-y-auto">
                ${this.usage.map(a=>{const c=a.context??0,u=this.usage.reduce((h,p)=>Math.max(h,p.context??0),1);return r`
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-muted w-10">T${a.turn}</span>
                    <div class="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                      <div class="h-full rounded-full bg-accent/60" style="width: ${Math.min(100,Math.round(c/u*100))}%"></div>
                    </div>
                    <span class="text-ink w-10 text-right">${c?o(c):"—"}</span>
                  </div>
                `})}
              </div>
            `:null}
          `:r`
            <p class="text-xs text-muted text-center py-3">
              Token data not available for this session.<br>
              <span class="text-[11px]">${this.turnsCompleted} turn${this.turnsCompleted!==1?"s":""} completed.</span>
            </p>
          `}
      </div>
    `}render(){return r`
      <!-- Same centered column as the messages (chat-column), so the input
           lines up with the text above it on a wide window. -->
      <div class="chat-column">
      <attachment-tray
        .items=${this.attachments}
        @remove=${e=>this.onTrayRemove(e)}
      ></attachment-tray>

      <form
        class="flex flex-col gap-1.5"
        @submit=${e=>{e.preventDefault(),this.send()}}
        @dragover=${this.onDragOver}
        @drop=${e=>void this.onDrop(e)}
      >
        <!-- input box: textarea + send/voice button, both inside the border
             (the button is part of prompting, so it stays in the field) -->
        <div class="chat-composer-box flex items-end gap-2 rounded-2xl border border-line bg-surface pl-4 pr-2.5 py-2.5 transition-colors focus-within:border-muted/60">
          <textarea
            data-composer-input
            rows="1"
            placeholder="Type / for commands"
            class="flex-1 resize-none bg-transparent text-ink text-base leading-[1.5] px-1 py-1 border-0 focus:outline-none max-h-60 overflow-hidden"
            .value=${this.text}
            @input=${this.onInput}
            @keydown=${this.onKeyDown}
            @paste=${e=>void this.onPaste(e)}
            @focus=${()=>{this.inputFocused=!0}}
            @blur=${()=>{this.inputFocused=!1}}
          ></textarea>

          ${this.text.trim()||this.sending?r`
                <button
                  type="submit"
                  class="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-ink/60 hover:text-ink hover:bg-hover"
                  title=${this.sending?"Queue (in-flight reply still streaming)":"Send"}
                >
                  ${this.sending?r`<span class="block w-3 h-3 rounded-sm bg-muted"></span>`:r`
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="9 10 4 15 9 20"/>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"/>
                      </svg>
                    `}
                </button>
              `:r`
                <button
                  type="button"
                  class="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-ink/60 hover:text-ink hover:bg-hover"
                  title="Voice"
                  @click=${this.onVoiceToggle}
                >
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
                    <line x1="6" y1="9" x2="6" y2="15" />
                    <line x1="10" y1="6" x2="10" y2="18" />
                    <line x1="14" y1="3" x2="14" y2="21" />
                    <line x1="18" y1="7" x2="18" y2="17" />
                  </svg>
                </button>
              `}
        </div>

        <!-- model+context pill, outside the input border, bottom-right.
             relative so the usage panel anchors directly above it. Hidden on
             mobile while typing — the keyboard already eats the screen and
             this line just adds noise. Always visible on desktop (lg+). -->
        <div
          class="relative ${this.inputFocused?"hidden lg:flex":"flex"} items-center justify-end px-1"
        >
          ${this.renderUsageModal()}
          ${this.renderUsagePill()}
        </div>
      </form>
      </div>
    `}};Me([l()],ke.prototype,"text",2);Me([l()],ke.prototype,"attachments",2);Me([l()],ke.prototype,"sending",2);Me([l()],ke.prototype,"showUsage",2);Me([l()],ke.prototype,"usage",2);Me([l()],ke.prototype,"turnsCompleted",2);Me([l()],ke.prototype,"model",2);Me([l()],ke.prototype,"inputFocused",2);Me([ge("input[data-attach-input]")],ke.prototype,"fileInput",2);Me([ge("textarea[data-composer-input]")],ke.prototype,"textarea",2);ke=Me([k("chat-composer")],ke);const To='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',Xa='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',hs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',us='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function Za(e){return e?`var(--nsc-${e}, currentColor)`:"currentColor"}const el=5e3;class Ds{constructor(t,s){this.host=t,this.kind=s,this.timers=new Map,this.ids=new Set,t.addController(this)}take(t){if(!t||t.action!=="refresh"||!t.changed?.length)return;const s=t.changed.filter(i=>i.kind===this.kind).map(i=>i.id);if(s.length){for(const i of s){const n=this.timers.get(i);n&&clearTimeout(n),this.timers.set(i,setTimeout(()=>{this.timers.delete(i),this.ids=new Set(this.timers.keys()),this.host.requestUpdate()},el))}this.ids=new Set(this.timers.keys()),this.host.requestUpdate()}}has(t){return this.timers.has(t)}cls(t){return this.timers.has(t)?"agent-flash":""}hostDisconnected(){for(const t of this.timers.values())clearTimeout(t);this.timers.clear(),this.ids=new Set}}var tl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,Ct=(e,t,s,i)=>{for(var n=i>1?void 0:i?sl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&tl(t,s,n),n};const il=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function nl(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return e;const s=Number(t[3]),i=il[Number(t[2])-1],n=t[1].slice(2);return`${s} ${i} ${n}`}function ol(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return null;const s=new Date(`${e}T00:00:00`).getTime();return Math.round((s-Date.now())/864e5)}let tt=class extends C{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-kr-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-kr-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.kr.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await f.getState().reorderKeyResult(s,n)},this.onEditKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=_(this,f,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.()}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("kr-touched",{detail:{id:this.kr.id},bubbles:!0,composed:!0}))}async toggleDone(){this.clearHighlight(),await f.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await f.getState().deleteKeyResult(this.kr.id)}startEdit(){this.editing||(this.clearHighlight(),this.editing=!0)}async commitEdit(e){const t=e.trim();this.editing=!1,!(!t||t===this.kr.title)&&await f.getState().updateKeyResult(this.kr.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.kr-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await f.getState().updateKeyResult(this.kr.id,{targetDate:t||null})}renderDateChip(){if(this.kr.done===1)return r`<span
        class="kr-chip shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
        style="color:var(--nsc-green);background:color-mix(in srgb, var(--nsc-green) 13%, transparent);"
        >Done</span
      >`;if(this.kr.target_date){const e=ol(this.kr.target_date);if(e!=null&&e<0)return r`<button
          type="button"
          class="kr-date-btn shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
          style="color:var(--nsc-red);background:color-mix(in srgb, var(--nsc-red) 13%, transparent);"
          title="Change target date"
          @click=${this.pickDate}
        >
          Overdue
        </button>`;const t=e!=null&&e<=7;return r`<button
        type="button"
        class="kr-date-btn shrink-0 text-xs hover:opacity-80"
        style="color:${t?"var(--nsc-amber)":"var(--color-muted)"};"
        title="Change target date"
        @click=${this.pickDate}
      >
        ${nl(this.kr.target_date)}
      </button>`}return r`<button
      type="button"
      class="kr-date-btn empty shrink-0 text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const e=this.kr.done===1,t=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",s=`kr:${this.kr.id}`,n=f.getState().focusedRowKey===s?"bg-hover":"";return r`
      <li
        class="kr group/kr relative flex items-center gap-2 py-0.5 ${t} ${e?"done opacity-60":""} ${n}"
        data-row-key=${s}
        draggable=${this.dragEnabled?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
      >
        <span
          class="kr-handle hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100 select-none leading-none"
          title="Drag to reorder"
          style="font-size:14px;letter-spacing:-1px;"
          @mousedown=${this.onHandleDown}
          @mouseup=${()=>this.dragEnabled=!1}
        >⠿</span>
        <button
          type="button"
          class="kr-check shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${e?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${e?r`<svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="transition: transform .14s cubic-bezier(.34,1.56,.64,1);"
              >
                <path d="M3 8.5 L6.5 12 L13 4.5" />
              </svg>`:d}
        </button>
        ${this.editing?r`<input
              class="kr-title inline-edit flex-1 bg-transparent border-b border-line text-sm outline-none"
              .value=${this.kr.title}
              autofocus
              @keydown=${this.onEditKeydown}
              @blur=${o=>this.commitEdit(o.target.value)}
            />`:r`<span
              class="kr-title flex-1 text-sm cursor-text ${e?"line-through":this.highlight?"font-medium":""}"
              style=${this.highlight&&!e?"color:var(--nsc-green);":""}
              @click=${this.startEdit}
              >${this.kr.title}</span
            >`}
        ${this.renderDateChip()}
        <input
          type="date"
          class="kr-date-picker"
          tabindex="-1"
          aria-hidden="true"
          style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;"
          .value=${this.kr.target_date??""}
          @change=${this.onDateChange}
        />
        <button
          type="button"
          class="kr-del shrink-0 opacity-0 group-hover/kr:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
          aria-label="Delete key result"
          @click=${this.delete}
        >
          ×
        </button>
      </li>
    `}};Ct([g({attribute:!1})],tt.prototype,"kr",2);Ct([g({attribute:!1})],tt.prototype,"index",2);Ct([g({type:Boolean})],tt.prototype,"highlight",2);Ct([l()],tt.prototype,"editing",2);Ct([l()],tt.prototype,"dragEnabled",2);Ct([l()],tt.prototype,"dragOverPos",2);tt=Ct([k("key-result-row")],tt);var rl=Object.defineProperty,al=Object.getOwnPropertyDescriptor,be=(e,t,s,i)=>{for(var n=i>1?void 0:i?al(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&rl(t,s,n),n};const Bi="slmai.cockpit.collapsedGoals",ll=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cl='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';function dl(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return"";const s=new Date(`${e}T00:00:00`),i=new Date,n=Math.round((s.getTime()-i.getTime())/864e5);if(n<0)return"overdue";if(n===0)return"due today";if(n<31)return`${n} day${n===1?"":"s"} left`;const o=Math.round(n/30.44);if(o<12)return`${o} month${o===1?"":"s"} left`;const a=n/365.25,c=a<2?a.toFixed(1):String(Math.round(a));return`${c} year${c==="1"||c==="1.0"?"":"s"} left`}function hl(e){const t=/^(\d{4})-(\d{2})-\d{2}$/.exec(e);return t?`${ll[Number(t[2])-1]} ${t[1]}`:e}function ln(){try{const e=localStorage.getItem(Bi);if(!e)return new Set;const t=JSON.parse(e);return Array.isArray(t)?new Set(t.filter(s=>typeof s=="number")):new Set}catch{return new Set}}function ul(e){try{localStorage.setItem(Bi,JSON.stringify(Array.from(e)))}catch{}}let de=class extends C{constructor(){super(...arguments),this.northStars=[],this.highlight=!1,this.highlightKrIds=new Set,this.flashKrIds=new Set,this.focused=!1,this.editingTitle=!1,this.markerOpen=!1,this.statusOpen=!1,this.krAdding=!1,this.krNewDate="",this.collapsed=ln(),this.onStorage=e=>{(e.key===Bi||e.key==null)&&(this.collapsed=ln())},this.onDocClick=e=>{this.markerOpen&&!this.contains(e.target)&&(this.markerOpen=!1),this.statusOpen&&!this.contains(e.target)&&(this.statusOpen=!1)},this.onTitleKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitTitle(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)},this.onAddKRKeydown=e=>{if(e.key==="Enter"){e.preventDefault();const t=e.target,s=t.value;t.value="",this.addKR(s,!1)}else e.key==="Escape"&&(e.preventDefault(),this.krAdding=!1,this.krNewDate="")},this.onKRAddBlur=e=>{const t=e.currentTarget;setTimeout(()=>{if(!t?.isConnected||t.contains(document.activeElement))return;const s=t.querySelector(".new-title");this.addKR(s?.value??"")},100)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=_(this,f,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.()}get expanded(){return!this.collapsed.has(this.goal.id)}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("goal-touched",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}toggleExpand(e){if(e.target.closest("[data-no-toggle]"))return;this.clearHighlight();const s=new Set(this.collapsed);this.expanded?s.add(this.goal.id):s.delete(this.goal.id),this.collapsed=s,ul(s)}starFor(e){return e?this.northStars.find(t=>t.slug===e)??null:null}openModal(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}startEditTitle(e){e.stopPropagation(),this.clearHighlight(),this.editingTitle=!0}async commitTitle(e){const t=e.trim();this.editingTitle=!1,!(!t||t===this.goal.title)&&await f.getState().updateGoal(this.goal.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.goal-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await f.getState().updateGoal(this.goal.id,{targetDate:t||null})}async recategorize(e){this.markerOpen=!1,(this.goal.north_star??null)!==e&&await f.getState().updateGoal(this.goal.id,{northStar:e})}async addKR(e,t=!0){const s=e.trim();if(!s){this.krAdding=!1,this.krNewDate="";return}t&&(this.krAdding=!1);const i=this.krNewDate||null;this.krNewDate="",await f.getState().addKeyResult(this.goal.id,s,i)}get krProgress(){const e=this.goal.keyResults??[],t=e.length,s=e.filter(n=>n.done===1).length,i=t?Math.round(s/t*100):0;return{done:s,total:t,pct:i}}renderMarker(){const e=this.goal.symbol??null,t=this.goal.color??null,s=e?Os[e]:void 0,i=Za(t),{done:n,total:o,pct:a}=this.krProgress,c=s?r`<span
          style="display:inline-block;width:15px;height:15px;color:${i};position:relative;"
          >${K(Ms(s))}</span
        >`:d;if(o===0)return s?r`
        <span
          class="goal-marker-slot inline-flex items-center justify-center shrink-0"
          title=${this.goal.title}
          style="width:18px;height:18px;"
        >
          ${c}
        </span>
      `:d;const u=97.39,h=u*(1-a/100);return r`
      <span
        class="goal-marker-slot relative inline-flex items-center justify-center shrink-0"
        title=${`${n}/${o} key results · ${a}%`}
        style="width:34px;height:34px;"
      >
        <svg
          viewBox="0 0 36 36"
          width="34"
          height="34"
          style="position:absolute;inset:0;transform:rotate(-90deg);"
        >
          <circle
            cx="18" cy="18" r="15.5" fill="none"
            stroke="var(--color-line)" stroke-width="3.5"
          />
          <circle
            cx="18" cy="18" r="15.5" fill="none"
            stroke=${i} stroke-width="3.5" stroke-linecap="round"
            stroke-dasharray=${u} stroke-dashoffset=${h}
            style="transition:stroke-dashoffset .35s ease;"
          />
        </svg>
        ${c}
      </span>
    `}renderTargetLine(){if(this.goal.target_date){const e=dl(this.goal.target_date),t=e==="overdue";return r`<div
        class="goal-target-line flex items-center gap-1.5 text-sm text-muted"
        data-no-toggle
      >
        <span style="width:13px;height:13px;display:inline-flex;opacity:.7;"
          >${K(cl)}</span
        >
        <button
          type="button"
          class="goal-date-btn hover:text-ink"
          title="Change target date"
          data-no-toggle
          @click=${this.pickDate}
        >
          Target ${hl(this.goal.target_date)}
        </button>
        ${e?r`<span class="opacity-50">·</span>
              <span style=${t?"color:var(--nsc-red)":""}>${e}</span>`:d}
      </div>`}return r`<button
      type="button"
      class="goal-date-btn empty text-sm text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100"
      title="Set target date"
      data-no-toggle
      @click=${this.pickDate}
    >
      + set target date
    </button>`}renderStatusBadge(){if(!this.goal.archived)return d;const e=this.goal.status==="killed"?"archived":this.goal.status;return r`<span
      class="goal-status-badge ml-2 text-[10px] px-1.5 py-0.5 rounded border border-line text-muted"
      >${e}</span
    >`}async setStatus(e){this.statusOpen=!1,this.goal.status!==e&&await f.getState().updateGoal(this.goal.id,{status:e})}statusChipMeta(e){switch(e){case"shipped":return{label:"Shipped",color:"var(--nsc-green)",always:!0};case"paused":return{label:"Paused",color:"var(--nsc-amber)",always:!0};case"killed":return{label:"Archived",color:"var(--color-muted)",always:!0};default:return{label:"Active",color:"var(--color-muted)",always:!1}}}renderStatusChip(){const e=this.goal.status??"active",t=this.statusChipMeta(e),s=t.always?"opacity-90 hover:opacity-100":"opacity-0 group-hover:opacity-70 hover:!opacity-100";return r`<span class="goal-status-wrap relative" data-no-toggle>
      <button
        type="button"
        class="goal-status-chip ${s} text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full transition-opacity"
        style="color:${t.color};background:color-mix(in srgb, ${t.color} 13%, transparent);"
        title="Change status"
        data-no-toggle
        @click=${i=>{i.stopPropagation(),this.statusOpen=!this.statusOpen}}
      >
        ${t.label}
      </button>
      ${this.statusOpen?r`<div
            class="absolute right-0 top-full mt-1 z-50 rounded-md bg-bg shadow-lg overflow-hidden text-xs min-w-[7rem]"
            data-no-toggle
            @click=${i=>i.stopPropagation()}
          >
            ${["active","paused","shipped","killed"].map(i=>r`<button
                type="button"
                class="block w-full text-left px-3 py-1.5 hover:bg-[var(--hover-blue)] ${e===i?"text-accent":"text-ink"}"
                @click=${()=>void this.setStatus(i)}
              >
                ${i==="killed"?"archived":i}
              </button>`)}
          </div>`:d}
    </span>`}render(){const e=this.goal.keyResults??[],t=this.expanded,s=this.goal.archived?"opacity-60":"",i=`goal:${this.goal.id}`,o=f.getState().focusedRowKey===i?"bg-hover":"",a=this.goal.color?`var(--nsc-${this.goal.color})`:null,c=a?`color-mix(in srgb, ${a} 6%, var(--color-surface))`:"var(--color-surface)",u=a?`color-mix(in srgb, ${a} 22%, var(--color-line))`:"var(--color-line)";return r`
      <li
        class="goal group relative flex flex-col px-4 py-3 ${s} ${o}"
        style="background:${c};border:0.5px solid ${u};border-radius:12px;box-shadow:var(--card-shadow);"
        data-id=${this.goal.id}
        data-row-key=${i}
        @focusin=${()=>this.focused=!0}
        @focusout=${()=>this.focused=!1}
      >
        <div
          class="goal-head flex items-start gap-2.5 cursor-pointer select-none"
          @click=${this.toggleExpand}
        >
          <button
            type="button"
            aria-label=${`${t?"Collapse":"Expand"} ${this.goal.title}`}
            aria-expanded=${t}
            aria-controls=${`goal-krs-${this.goal.id}`}
            @click=${h=>{h.stopPropagation(),this.toggleExpand(h)}}
            class="text-muted opacity-40 hover:opacity-100 shrink-0 mt-1"
            style="width:11px;height:11px;display:inline-flex;"
            >${K(t?hs:us)}</button
          >
          <span class="mt-px">${this.renderMarker()}</span>
          <div class="flex-1 min-w-0 flex flex-col gap-0.5">
            <div class="flex items-center gap-2 flex-wrap">
              ${this.editingTitle?r`<input
                    class="goal-title inline-edit flex-1 bg-transparent border-b border-line outline-none text-base font-semibold"
                    .value=${this.goal.title}
                    autofocus
                    data-no-toggle
                    @keydown=${this.onTitleKeydown}
                    @blur=${h=>this.commitTitle(h.target.value)}
                  />`:r`<span
                    class="goal-title text-base font-semibold cursor-text"
                    data-no-toggle
                    title="Double-click to edit"
                    style=${this.highlight?"color:var(--nsc-green);":""}
                    @dblclick=${this.startEditTitle}
                    >${this.goal.title}</span
                  >`}
              ${this.renderStatusChip()}
            </div>
            ${this.renderTargetLine()}
          </div>
          <input
            type="date"
            class="goal-date-picker"
            tabindex="-1"
            aria-hidden="true"
            style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;"
            .value=${this.goal.target_date??""}
            data-no-toggle
            @change=${this.onDateChange}
          />
          <button
            type="button"
            class="goal-kebab text-muted hover:text-ink px-1 text-lg leading-none shrink-0"
            aria-label="More"
            data-no-toggle
            @click=${this.openModal}
          >
            ⋮
          </button>
        </div>
        ${t||this.focused||this.krAdding?r`<ul id=${`goal-krs-${this.goal.id}`} class="kr-list pl-0 mt-2.5 pt-2.5 flex flex-col" style="border-top:0.5px solid var(--color-line);">
              ${t?e.map((h,p)=>r`<key-result-row class=${this.flashKrIds.has(h.id)?"agent-flash":""} .kr=${h} .index=${p} .highlight=${this.highlightKrIds.has(h.id)}></key-result-row>`):d}
              ${this.krAdding?r`<li class="kr kr-new flex items-center gap-2 py-0.5" @focusout=${this.onKRAddBlur}>
                    <span class="hidden lg:inline-flex shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                    <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                    <input
                      class="new-title flex-1 bg-transparent border-0 outline-none text-sm"
                      placeholder="New key result..."
                      autofocus
                      @keydown=${this.onAddKRKeydown}
                    />
                    <input
                      class="new-kr-date shrink-0 text-xs text-muted border border-line rounded px-1 py-0.5 bg-transparent"
                      type="date"
                      title="optional target date"
                      .value=${this.krNewDate}
                      @change=${h=>this.krNewDate=h.target.value}
                    />
                  </li>`:r`<li
                    class="kr flex items-center gap-2 py-0.5 cursor-text rounded hover:bg-hover"
                    data-no-toggle
                    @click=${h=>{h.stopPropagation(),this.krAdding=!0,this.krNewDate=""}}
                  >
                    <span class="hidden lg:inline-flex shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                    <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                    <span class="text-sm text-muted opacity-50">New key result...</span>
                  </li>`}
            </ul>`:d}
      </li>
    `}};be([g({attribute:!1})],de.prototype,"goal",2);be([g({attribute:!1})],de.prototype,"northStars",2);be([g({type:Boolean})],de.prototype,"highlight",2);be([g({attribute:!1})],de.prototype,"highlightKrIds",2);be([g({attribute:!1})],de.prototype,"flashKrIds",2);be([l()],de.prototype,"focused",2);be([l()],de.prototype,"editingTitle",2);be([l()],de.prototype,"markerOpen",2);be([l()],de.prototype,"statusOpen",2);be([l()],de.prototype,"krAdding",2);be([l()],de.prototype,"krNewDate",2);be([l()],de.prototype,"collapsed",2);de=be([k("goal-row")],de);var pl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,Io=(e,t,s,i)=>{for(var n=i>1?void 0:i?ml(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&pl(t,s,n),n};let yi=class extends C{constructor(){super(...arguments),this.events=[]}fmt(e){return new Date(e*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?r`
      <ul class="gm-history flex flex-col gap-1 text-xs">
        ${this.events.map(e=>r`
            <li class="grid grid-cols-[auto_auto_1fr] gap-2 items-baseline">
              <time class="text-muted">${this.fmt(e.changed_at)}</time>
              <span class="ev font-medium">${e.event}</span>
              <span class="text-muted">
                ${e.from_value||e.to_value?r`${e.from_value||""} → ${e.to_value||""}`:d}
              </span>
            </li>
          `)}
      </ul>
    `:r`<div class="text-xs text-muted italic">
        (no events yet)
      </div>`}};Io([g({attribute:!1})],yi.prototype,"events",2);yi=Io([k("goal-history-popover")],yi);var fl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,ee=(e,t,s,i)=>{for(var n=i>1?void 0:i?gl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&fl(t,s,n),n};const bl=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let Q=class extends C{constructor(){super(...arguments),this.goalId=null,this.creating=!1,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.completedOpen=!1,this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(e){e.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId)),e.has("creating")&&this.creating&&(this.reset(),this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null)}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(e){this.loading=!0;try{const t=await $.goals.summary(e);this.goal=t.goal,this.keyResults=t.keyResults,this.commitments=t.commitments,this.events=t.events,this.stats=t.stats,this.editNorthStar=t.goal.north_star??"",this.editTargetDate=t.goal.target_date??"",this.editStatus=t.goal.status,this.editColor=t.goal.color??null,this.editSymbol=t.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await f.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await f.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await f.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await f.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?r`
      <div class="gm-stats flex gap-4 text-sm mb-3">
        <div class="flex flex-col">
          <strong>${this.stats.doneKRs}</strong>
          <span class="text-xs text-muted"
            >done / ${this.stats.totalKRs} KRs</span
          >
        </div>
        <div class="flex flex-col">
          <strong>${this.stats.doneCommits}</strong>
          <span class="text-xs text-muted"
            >done / ${this.stats.totalCommits} commits</span
          >
        </div>
        <div class="flex flex-col">
          <strong>${this.goal?.status}</strong>
          <span class="text-xs text-muted">status</span>
        </div>
      </div>
    `:d}renderCompleted(){const e=this.keyResults.filter(i=>i.done),t=this.commitments.filter(i=>i.done),s=e.length+t.length;return s===0?d:r`
      <div class="gm-field mb-3">
        <button
          type="button"
          class="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          @click=${()=>this.completedOpen=!this.completedOpen}
        >
          <span style="width:11px;height:11px;display:inline-flex;"
            >${K(this.completedOpen?hs:us)}</span
          >
          Completed (${s})
        </button>
        ${this.completedOpen?r`<div class="mt-2">
              ${e.length?r`<div class="mb-3">
                    <label class="block text-xs text-muted mb-1">achieved KRs</label>
                    <ul class="text-sm">
                      ${e.map(i=>r`<li>✓ ${i.title}</li>`)}
                    </ul>
                  </div>`:d}
              ${t.length?r`<div>
                    <label class="block text-xs text-muted mb-1"
                      >shipped commitments</label
                    >
                    <ul class="text-sm">
                      ${t.map(i=>r`
                          <li class="flex justify-between gap-2">
                            <span>✓ ${i.title}</span>
                            <span class="text-xs text-muted">${i.week}</span>
                          </li>
                        `)}
                    </ul>
                  </div>`:d}
            </div>`:d}
      </div>
    `}async createNew(){const e=this.editTitle.trim();e&&(await f.getState().createGoal({title:e,targetDate:this.editTargetDate||null,color:this.editColor,symbol:this.editSymbol}),this.close())}renderColorField(){return r`
      <div class="gm-field mb-3">
        <label class="block text-xs text-muted mb-1">color</label>
        <div class="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            class="w-6 h-6 rounded-full border-2 grid place-items-center transition-all ${this.editColor==null?"border-ink":"border-line"}"
            title="none"
            @click=${()=>this.editColor=null}
          >
            <span class="text-muted text-xs">—</span>
          </button>
          ${["slate","red","orange","amber","green","teal","blue","indigo","violet","pink"].map(e=>r`
              <button
                type="button"
                class="w-6 h-6 rounded-full border-2 transition-all ${this.editColor===e?"border-ink scale-110":"border-transparent"}"
                style="background:var(--nsc-${e})"
                title=${e}
                @click=${()=>this.editColor=this.editColor===e?null:e}
              ></button>
            `)}
        </div>
      </div>
    `}renderSymbolField(){return r`
      <div class="gm-field mb-3">
        <label class="block text-xs text-muted mb-1">icon</label>
        <div class="flex flex-wrap gap-1">
          <button
            type="button"
            class="w-7 h-7 grid place-items-center rounded border transition-colors ${this.editSymbol==null?"border-ink bg-hover":"border-line hover:bg-hover"}"
            title="none"
            @click=${()=>this.editSymbol=null}
          >
            <span class="text-muted">—</span>
          </button>
          ${["target","rocket","compass","flag","flame","lightbulb","heart","dumbbell","brain","book","briefcase","code","pen","megaphone","camera","mountain","globe","zap","star","sparkles"].map(e=>r`
              <button
                type="button"
                class="w-7 h-7 grid place-items-center rounded border transition-colors ${this.editSymbol===e?"border-ink bg-hover":"border-line hover:bg-hover"}"
                title=${e}
                @click=${()=>this.editSymbol=this.editSymbol===e?null:e}
              >
                <sc-icon name="lucide-${e}"></sc-icon>
              </button>
            `)}
        </div>
      </div>
    `}renderTargetDateField(){return r`
      <div class="gm-field mb-3">
        <label class="block text-xs text-muted mb-1">target date</label>
        <input
          type="date"
          class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
          .value=${this.editTargetDate}
          @change=${e=>this.editTargetDate=e.target.value}
        />
      </div>
    `}renderCreateForm(){return r`
      <div class="gm-field mb-3">
        <label class="block text-xs text-muted mb-1">title</label>
        <input
          type="text"
          class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
          placeholder="What do you want to achieve?"
          .value=${this.editTitle}
          autofocus
          @input=${e=>this.editTitle=e.target.value}
          @keydown=${e=>{e.key==="Enter"&&(e.preventDefault(),this.createNew())}}
        />
      </div>
      ${this.renderColorField()} ${this.renderSymbolField()}
      ${this.renderTargetDateField()}
      <div class="gm-actions flex gap-2 justify-end pt-3 border-t border-line">
        <button
          type="button"
          class="text-sm px-3 py-1 border border-line rounded"
          @click=${()=>this.close()}
        >
          cancel
        </button>
        <button type="button" class="btn-primary" @click=${this.createNew}>
          create goal
        </button>
      </div>
    `}render(){const e=this.goalId!=null||this.creating,t=this.goal?.status==="killed";return r`
      <sc-dialog
        ?open=${e}
        style="--sc-dialog-width: 624px;"
        .label=${this.creating?"New goal":this.goal?.title??""}
        @sc-hide=${()=>this.close()}
      >
        ${this.creating?this.renderCreateForm():this.loading||!this.goal?r`<div class="text-sm text-muted">loading…</div>`:r`
              ${this.renderStats()}

              ${this.renderColorField()} ${this.renderSymbolField()}
              ${this.renderTargetDateField()}

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">status</label>
                <select
                  class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
                  .value=${this.editStatus}
                  @change=${s=>this.editStatus=s.target.value}
                >
                  ${bl.map(s=>r`
                      <option
                        value=${s.value}
                        ?selected=${this.editStatus===s.value}
                      >
                        ${s.label}
                      </option>
                    `)}
                </select>
              </div>

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">history</label>
                <goal-history-popover
                  .events=${this.events}
                ></goal-history-popover>
              </div>

              ${this.renderCompleted()}

              <div
                class="gm-actions flex gap-2 justify-end pt-3 border-t border-line"
              >
                ${t?r`<button
                        type="button"
                        class="text-sm text-red-500 hover:underline px-2"
                        @click=${this.destroy}
                      >
                        delete permanently
                      </button>
                      <button
                        type="button"
                        class="text-sm px-3 py-1 border border-line rounded"
                        @click=${this.unarchive}
                      >
                        unarchive
                      </button>`:r`<button
                      type="button"
                      class="text-sm text-red-500 hover:underline px-2"
                      @click=${this.archive}
                    >
                      archive goal
                    </button>`}
                <button
                  type="button"
                  class="btn-primary"
                  @click=${this.save}
                >
                  save
                </button>
              </div>
            `}
      </sc-dialog>
    `}};ee([g({type:Number})],Q.prototype,"goalId",2);ee([g({type:Boolean})],Q.prototype,"creating",2);ee([g({attribute:!1})],Q.prototype,"northStars",2);ee([l()],Q.prototype,"goal",2);ee([l()],Q.prototype,"keyResults",2);ee([l()],Q.prototype,"commitments",2);ee([l()],Q.prototype,"events",2);ee([l()],Q.prototype,"stats",2);ee([l()],Q.prototype,"loading",2);ee([l()],Q.prototype,"completedOpen",2);ee([l()],Q.prototype,"editTitle",2);ee([l()],Q.prototype,"editNorthStar",2);ee([l()],Q.prototype,"editTargetDate",2);ee([l()],Q.prototype,"editStatus",2);ee([l()],Q.prototype,"editColor",2);ee([l()],Q.prototype,"editSymbol",2);Q=ee([k("goal-modal")],Q);var xl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,Qe=(e,t,s,i)=>{for(var n=i>1?void 0:i?vl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&xl(t,s,n),n};const cn="slmai.cockpit.goalsSectionCollapsed",Hs="slmai.cockpit.goalsSection.title",Ks="Goals";let Re=class extends C{constructor(){super(...arguments),this.tabbed=!1,this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=Ks,this.creatingGoal=!1,this.activeModalId=null,this.highlightGoalIds=new Set,this.highlightKrIds=new Set,this.flashGoals=new Ds(this,"goal"),this.flashKrs=new Ds(this,"kr"),this.onOpsEvent=e=>{const t=e.detail;t&&(t.action==="refresh"||t.action==="load-week")&&(this.flashGoals.take(t),this.flashKrs.take(t),t.action==="refresh"&&t.added?.kind==="goal"?this.highlightGoalIds=new Set(this.highlightGoalIds).add(t.added.id):t.action==="refresh"&&t.added?.kind==="kr"&&(this.highlightKrIds=new Set(this.highlightKrIds).add(t.added.id)),f.getState().loadGoals().catch(()=>{}))},this.onGoalTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightGoalIds.has(t))return;const s=new Set(this.highlightGoalIds);s.delete(t),this.highlightGoalIds=s},this.onKrTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightKrIds.has(t))return;const s=new Set(this.highlightKrIds);s.delete(t),this.highlightKrIds=s},this.toggleSection=()=>{const e=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(cn,this.sectionCollapsed?"1":"0"),e&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}},this.startCreate=e=>{e.stopPropagation(),this.creatingGoal=!0}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(cn)==="1",this.titleValue=localStorage.getItem(Hs)??Ks,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.goals.title"];t&&(this.titleValue=t,localStorage.setItem(Hs,t))}).catch(()=>{}),this.unsubGoals=_(this,f,e=>e.goals),this.unsubArchived=_(this,f,e=>`${e.goalsArchivedCount}:${e.includeArchivedGoals}`),this.unsubStars=_(this,f,e=>e.northStars),f.getState().loadGoals().catch(()=>{}),f.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent)}async toggleArchived(){const e=f.getState();await e.toggleArchivedGoals(!e.includeArchivedGoals)}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||Ks;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(Hs,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}render(){const e=f.getState(),t=e.goals,s=e.northStars,i=e.goalsArchivedCount,n=e.includeArchivedGoals,o=this.tabbed||!this.sectionCollapsed;return r`
      <section class="goals-section flex flex-col gap-1 pb-16">
        ${this.tabbed?d:r`<header
              class="goals-header flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleSection}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${K(this.sectionCollapsed?us:hs)}</span
              >
              ${this.editingTitle?r`<input
                    class="text-lg font-semibold text-ink leading-none bg-transparent border-b border-line outline-none"
                    style="letter-spacing:-0.01em;min-width:4ch;"
                    .value=${this.titleValue}
                    autofocus
                    @click=${a=>a.stopPropagation()}
                    @keydown=${this.onTitleKey}
                    @blur=${a=>this.commitTitleEdit(a.target.value)}
                  />`:r`<h2
                    class="text-lg font-semibold text-ink leading-none cursor-pointer"
                    style="letter-spacing:-0.01em;"
                    title="Double-click to rename"
                    @dblclick=${this.startEditTitle}
                  >${this.titleValue}</h2>`}
            </header>`}

        ${o?r`
              <div class="goals-actions-row flex items-center gap-4 pl-5 pb-1.5">
                <span class="flex-1"></span>
                <button
                  type="button"
                  class="goals-add inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
                  @click=${this.startCreate}
                >
                  <span style="width:14px;height:14px;display:inline-flex;"
                    >${K(Xa)}</span
                  >
                  New goal
                </button>
                ${i>0?r`<button
                      type="button"
                      class="goals-archive-toggle inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink pr-4"
                      style="opacity:${n?"0.9":"0.6"};"
                      title=${n?`Hide ${i} archived`:`Show ${i} archived`}
                      @click=${a=>{a.stopPropagation(),this.toggleArchived()}}
                    >
                      <span style="width:13px;height:13px;display:inline-flex;"
                        >${K(To)}</span
                      >
                      ${n?"Hide archived":`Archived (${i})`}
                    </button>`:d}
              </div>
              <ul
                class="goal-list flex flex-col gap-2.5"
                @goal-touched=${this.onGoalTouched}
                @kr-touched=${this.onKrTouched}
              >
                ${t.map(a=>r`
                    <goal-row
                      .goal=${a}
                      .northStars=${s}
                      .highlight=${this.highlightGoalIds.has(a.id)}
                      .highlightKrIds=${this.highlightKrIds}
                      .flashKrIds=${this.flashKrs.ids}
                      class=${this.flashGoals.cls(a.id)}
                      @open-modal=${c=>this.activeModalId=c.detail.id}
                    ></goal-row>
                  `)}
              </ul>
            `:d}

        <goal-modal
          .goalId=${this.activeModalId}
          .creating=${this.creatingGoal}
          .northStars=${s}
          @close=${()=>{this.activeModalId=null,this.creatingGoal=!1}}
        ></goal-modal>
      </section>
    `}};Qe([g({type:Boolean})],Re.prototype,"tabbed",2);Qe([l()],Re.prototype,"sectionCollapsed",2);Qe([l()],Re.prototype,"editingTitle",2);Qe([l()],Re.prototype,"titleValue",2);Qe([l()],Re.prototype,"creatingGoal",2);Qe([l()],Re.prototype,"activeModalId",2);Qe([l()],Re.prototype,"highlightGoalIds",2);Qe([l()],Re.prototype,"highlightKrIds",2);Re=Qe([k("goals-section")],Re);var yl=Object.getOwnPropertyDescriptor,wl=(e,t,s,i)=>{for(var n=i>1?void 0:i?yl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};const dn=[{text:"Indeed, with hardship comes ease.",source:"Quran 94:6"},{text:"So verily, with every hardship there is ease.",source:"Quran 94:5"},{text:"Did We not expand for you your breast?",source:"Quran 94:1"},{text:"So when you have finished, then stand up for worship.",source:"Quran 94:7"},{text:"And to your Lord direct your longing.",source:"Quran 94:8"},{text:"And that there is nothing for man except what he strives for.",source:"Quran 53:39"},{text:"And that his effort is going to be seen.",source:"Quran 53:40"},{text:"Indeed, Allah will not change the condition of a people until they change what is in themselves.",source:"Quran 13:11"},{text:"Verily, in the remembrance of Allah do hearts find rest.",source:"Quran 13:28"},{text:"So remember Me; I will remember you, and be grateful to Me.",source:"Quran 2:152"},{text:"Seek help through patience and prayer. Indeed, Allah is with the patient.",source:"Quran 2:153"},{text:"And seek help through patience and prayer.",source:"Quran 2:45"},{text:"And when My servants ask you concerning Me — indeed I am near.",source:"Quran 2:186"},{text:"Our Lord, give us good in this world and good in the Hereafter.",source:"Quran 2:201"},{text:"Perhaps you hate a thing and it is good for you.",source:"Quran 2:216"},{text:"Our Lord, pour upon us patience and plant firmly our feet.",source:"Quran 2:250"},{text:"Allah does not burden a soul beyond what it can bear.",source:"Quran 2:286"},{text:"So race to all that is good.",source:"Quran 2:148"},{text:"And speak to people good words.",source:"Quran 2:83"},{text:"And give good tidings to the patient.",source:"Quran 2:155"},{text:"Whatever good you put forward for yourselves, you will find it with Allah.",source:"Quran 2:110"},{text:"A kind word and forgiveness are better than charity followed by injury.",source:"Quran 2:263"},{text:"Indeed, Allah loves those who are constantly repentant and those who purify themselves.",source:"Quran 2:222"},{text:"And do good; indeed, Allah loves the doers of good.",source:"Quran 2:195"},{text:"And whoever relies upon Allah — then He is sufficient for him.",source:"Quran 65:3"},{text:"And whoever fears Allah — He will make for him a way out.",source:"Quran 65:2"},{text:"My Lord, increase me in knowledge.",source:"Quran 20:114"},{text:"My Lord, expand for me my breast and ease for me my task.",source:"Quran 20:25"},{text:"Establish prayer for My remembrance.",source:"Quran 20:14"},{text:"Call upon Me; I will respond to you.",source:"Quran 40:60"},{text:"Do not despair of the mercy of Allah; indeed, Allah forgives all sins.",source:"Quran 39:53"},{text:"Are those who know equal to those who do not know?",source:"Quran 39:9"},{text:"The patient will be given their reward without measure.",source:"Quran 39:10"},{text:"Whoever does righteousness, We will surely cause them to live a good life.",source:"Quran 16:97"},{text:"Indeed, Allah orders justice and good conduct.",source:"Quran 16:90"},{text:"Indeed, Allah is with those who fear Him and those who do good.",source:"Quran 16:128"},{text:"And He found you lost and guided you.",source:"Quran 93:7"},{text:"And your Lord is going to give you, and you will be satisfied.",source:"Quran 93:5"},{text:"Indeed, my Lord is near and responsive.",source:"Quran 11:61"},{text:"And be patient, for Allah does not let the reward of those who do good be lost.",source:"Quran 11:115"},{text:"My success is not but through Allah; upon Him I rely.",source:"Quran 11:88"},{text:"Indeed, my Lord is Guardian over all things.",source:"Quran 11:57"},{text:"Perhaps you dislike a thing and Allah places much good in it.",source:"Quran 4:19"},{text:"When you are greeted with a greeting, greet in return with one better.",source:"Quran 4:86"},{text:"Worship Allah and be good to parents.",source:"Quran 4:36"},{text:"And put your trust in Allah; sufficient is Allah as a Disposer of affairs.",source:"Quran 33:3"},{text:"O you who believe, remember Allah with much remembrance.",source:"Quran 33:41"},{text:"The men and women who remember Allah often — Allah has prepared for them forgiveness and a great reward.",source:"Quran 33:35"},{text:"Fear Allah and speak words of appropriate justice.",source:"Quran 33:70"},{text:"So which of the favors of your Lord would you deny?",source:"Quran 55:13"},{text:"Is the reward for good anything but good?",source:"Quran 55:60"},{text:"If you are grateful, I will surely increase you.",source:"Quran 14:7"},{text:"And upon Allah let the believers rely.",source:"Quran 14:11"},{text:"My mercy encompasses all things.",source:"Quran 7:156"},{text:"Indeed, the mercy of Allah is near to the doers of good.",source:"Quran 7:56"},{text:"Allah will raise those who believe and those given knowledge by degrees.",source:"Quran 58:11"},{text:"Read in the name of your Lord who created.",source:"Quran 96:1"},{text:"Who taught by the pen — taught man that which he knew not.",source:"Quran 96:4"},{text:"By time, indeed mankind is in loss.",source:"Quran 103:1"},{text:"Except those who believe, do righteous deeds, and advise each other to truth and patience.",source:"Quran 103:3"},{text:"So whoever does an atom's weight of good will see it.",source:"Quran 99:7"},{text:"Repel evil by that which is better, and your enemy will become a devoted friend.",source:"Quran 41:34"},{text:"And none is granted it except one of great fortune.",source:"Quran 41:35"},{text:"Indeed, good deeds do away with misdeeds.",source:"Quran 11:114"},{text:"And do good, as Allah has done good to you.",source:"Quran 28:77"},{text:"Sufficient for us is Allah, and He is the best Disposer of affairs.",source:"Quran 3:173"},{text:"And when you have decided, then rely upon Allah.",source:"Quran 3:159"},{text:"Do not weaken and do not grieve, for you will be superior if you are believers.",source:"Quran 3:139"},{text:"And hold firmly to the rope of Allah all together, and do not become divided.",source:"Quran 3:103"},{text:"Those who restrain anger and pardon people — Allah loves the doers of good.",source:"Quran 3:134"},{text:"Be patient, endure, remain stationed, and fear Allah.",source:"Quran 3:200"},{text:"Every soul will taste death.",source:"Quran 3:185"},{text:"Indeed, Allah does not allow the reward of the believers to be lost.",source:"Quran 3:171"},{text:"And those who strive for Us — We will surely guide them to Our ways.",source:"Quran 29:69"},{text:"And whoever strives only strives for himself.",source:"Quran 29:6"},{text:"Indeed, prayer restrains from immorality and wrongdoing.",source:"Quran 29:45"},{text:"Whoever is grateful is grateful for the benefit of himself.",source:"Quran 31:12"},{text:"And be patient over what befalls you.",source:"Quran 31:17"},{text:"And be moderate in your pace and lower your voice.",source:"Quran 31:19"},{text:"Be grateful to Me and to your parents.",source:"Quran 31:14"},{text:"Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds.",source:"Quran 6:162"},{text:"Whoever brings a good deed will have ten times the like of it.",source:"Quran 6:160"},{text:"They were commanded only to worship Allah, sincere to Him in faith.",source:"Quran 98:5"},{text:"Indeed, the most noble of you before Allah is the most righteous.",source:"Quran 49:13"},{text:"Avoid much suspicion; indeed, some suspicion is sin.",source:"Quran 49:12"},{text:"Do not ridicule others; perhaps they are better than you.",source:"Quran 49:11"},{text:"And cooperate in righteousness and piety.",source:"Quran 5:2"},{text:"And be patient; indeed, Allah is with the patient.",source:"Quran 8:46"},{text:"So be patient with beautiful patience.",source:"Quran 70:5"},{text:"And remember the name of your Lord and devote yourself to Him wholly.",source:"Quran 73:8"},{text:"And He is with you wherever you are.",source:"Quran 57:4"},{text:"So flee to Allah.",source:"Quran 51:50"},{text:"And in the heaven is your provision, and whatever you are promised.",source:"Quran 51:22"},{text:"Whoever purifies himself does so for the benefit of his own soul.",source:"Quran 35:18"},{text:"Indeed, this Qur'an guides to that which is most upright.",source:"Quran 17:9"},{text:"And do not walk upon the earth arrogantly.",source:"Quran 17:37"},{text:"Your Lord has decreed that you worship none but Him, and be good to parents.",source:"Quran 17:23"},{text:"And lower to them the wing of humility out of mercy.",source:"Quran 17:24"},{text:"The servants of the Most Merciful are those who walk upon the earth humbly.",source:"Quran 25:63"},{text:"And when they pass by idle talk, they pass by with dignity.",source:"Quran 25:72"},{text:"My Lord, forgive and have mercy, for You are the best of the merciful.",source:"Quran 23:118"},{text:"And worship your Lord until there comes to you certainty.",source:"Quran 15:99"},{text:"And lower your wing to the believers.",source:"Quran 15:88"},{text:"And say: Work, for Allah will see your work.",source:"Quran 9:105"},{text:"So fear Allah as much as you are able.",source:"Quran 64:16"},{text:"Whoever is patient and forgives — that is of the matters requiring determination.",source:"Quran 42:43"},{text:"And do not despair of relief from Allah.",source:"Quran 12:87"},{text:"Let them pardon and overlook. Would you not love that Allah should forgive you?",source:"Quran 24:22"},{text:"If you support Allah, He will support you and plant your feet firmly.",source:"Quran 47:7"},{text:"Why do you say that which you do not do?",source:"Quran 61:2"},{text:"Great is hatred in the sight of Allah that you say what you do not do.",source:"Quran 61:3"},{text:"Actions are but by intentions, and each person will have only what he intended.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The most beloved deeds to Allah are the most consistent, even if small.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Take benefit of five before five: your health before sickness, your free time before busyness, your youth before old age, your wealth before poverty, and your life before death.",source:"Muhammad صلى الله عليه وسلم (Al-Hakim)"},{text:"Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The strong believer is better and more beloved to Allah than the weak believer, though in both there is good.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Strive for what benefits you, seek help from Allah, and do not feel helpless.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"None of you truly believes until he loves for his brother what he loves for himself.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of people are those most beneficial to people.",source:"Muhammad صلى الله عليه وسلم (Al-Tabarani)"},{text:"Allah loves that when one of you does a task, he does it with excellence.",source:"Muhammad صلى الله عليه وسلم (Al-Bayhaqi)"},{text:"Whoever believes in Allah and the Last Day, let him speak good or remain silent.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his neighbor.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his guest.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The Muslim is the one from whose tongue and hand people are safe.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Richness is not in many possessions; richness is the richness of the soul.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Be in this world as though you were a stranger or a traveler.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Whoever does not thank people has not thanked Allah.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud & Tirmidhi)"},{text:"The believer is not stung from the same hole twice.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Make things easy and do not make them difficult; give glad tidings and do not repel.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of you are those with the best character.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"A good word is charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Do not belittle any good deed, even meeting your brother with a cheerful face.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Allah does not look at your appearance or wealth, but at your hearts and your deeds.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The best of you is the one who is best to his family.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever guides another to good will have a reward like the one who does it.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The upper hand is better than the lower hand.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"No one eats better food than that which he eats from the work of his own hands.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Seeking knowledge is an obligation upon every Muslim.",source:"Muhammad صلى الله عليه وسلم (Ibn Majah)"},{text:"Whoever does not show mercy to people, Allah will not show mercy to him.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"How wonderful is the affair of the believer — all of his affairs are good for him.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Tie your camel, then put your trust in Allah.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The most complete of believers in faith are those best in character.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Give the worker his wages before his sweat dries.",source:"Muhammad صلى الله عليه وسلم (Ibn Majah)"},{text:"Whoever wakes secure in his home, healthy in body, with food for the day, has been given the whole world.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The best charity is that given when you are healthy and hopeful of wealth.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Cleanliness is half of faith.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Purity is half of faith, and praise of Allah fills the scale.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Modesty brings nothing but good.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Modesty is part of faith.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Verily Allah is beautiful and loves beauty.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Patience is at the first strike.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"There are two blessings which many people lose: health and free time.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"The strong man is not the good wrestler; the strong man is the one who controls himself when angry.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Kindness is not found in anything except that it beautifies it.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"He is not one of us who does not show mercy to our young and respect to our elders.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever is deprived of gentleness is deprived of all good.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Part of the excellence of a person's Islam is his leaving what does not concern him.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"A believer to another believer is like a building whose parts support one another.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of you are those who learn the Qur'an and teach it.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"There is no envy except in two: a man given wealth who spends it rightly, and a man given wisdom who acts by it and teaches it.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Beware of suspicion, for suspicion is the falsest of speech.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"A person is upon the religion of his close friend, so let each of you consider whom he befriends.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud & Tirmidhi)"},{text:"The example of a good companion and a bad one is like the seller of musk and the blacksmith's bellows.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Charity does not decrease wealth.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Whoever conceals the faults of another, Allah will conceal his faults in this world and the next.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The supplication of a Muslim for his brother in his absence is answered.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The two feet of a servant will not move on the Day of Judgment until he is asked about his life and how he spent it, and his knowledge and what he did with it.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever seeks the pleasure of Allah though it displeases the people, Allah will suffice him.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"This world is enjoyment, and the best enjoyment of this world is a righteous spouse.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Deeds are judged by their endings.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Whoever calls others to guidance will have a reward like the rewards of those who follow him.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"A man's spending on his family is a charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever suppresses his anger while able to enact it, Allah will fill his heart with security and faith.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud)"},{text:"The believer who mixes with people and bears their harm has greater reward than one who does not.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi & Ibn Majah)"},{text:"The best of people are those who live long and do good deeds.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The best of you are the best in paying off debts.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever loves to meet Allah, Allah loves to meet him.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Every act of kindness is charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Do not be people without minds of your own; if others do good, do good — and if they do wrong, do not be unjust.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The believer is a mirror to his brother.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud)"},{text:"Righteousness is good character.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The believer is not one who eats his fill while his neighbor goes hungry.",source:"Muhammad صلى الله عليه وسلم (Al-Bayhaqi)"},{text:"Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"May Allah have mercy on the one who shows me my faults.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Acquire knowledge before you become leaders.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I have never regretted my silence; as for my speech, I have often regretted it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Whoever does not know evil is more likely to fall into it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Sit with those who repent often, for they have the tenderest hearts.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I hate to see a man idle — working neither for this world nor the next.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"The worth of a person is measured by what he does well.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Knowledge guards you, while you guard wealth.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"People are of two kinds: your brothers in faith, or your equals in humanity.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Do not be a slave to another when Allah has created you free.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"The tongue of the wise is behind his heart, and the heart of the fool is behind his tongue.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Today is action without reckoning, and tomorrow is reckoning without action.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Anxiety over guaranteed provision, and neglect of required duty, are signs of a weak heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Concern for this world is darkness in the heart; concern for the Hereafter is light in the heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Knowledge without action is a tree without fruit.",source:"Abu Bakr as-Siddiq رضي الله عنه"}];let hn=class extends C{connectedCallback(){super.connectedCallback(),this.unsubGoals=_(this,f,e=>e.goals),this.unsubCommits=_(this,f,e=>e.commitments),f.getState().loadGoals().catch(()=>{}),f.getState().loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubCommits?.()}todaysReminder(){const e=Math.floor(Date.now()/864e5);return dn[e%dn.length]}render(){const e=f.getState(),t=e.goals.filter(c=>!c.archived),s=e.commitments;if(t.length===0&&s.length===0)return d;const i=s.filter(c=>c.done).length,n=s.length,o=n?Math.round(i/n*100):0,a=this.todaysReminder();return r`<div class="goals-metrics ${"hidden sm:grid"} sm:grid-cols-3 gap-2 mb-3">
      <div
        class="rounded-lg px-3 py-2.5"
        style="background:color-mix(in srgb, var(--accent) 9%, var(--surface));"
      >
        <div class="text-[11px] text-muted mb-1">This week</div>
        <div class="text-xl font-medium leading-none">
          ${i}<span class="text-sm text-muted font-normal"> / ${n}</span>
        </div>
        ${n>0?r`<div
              class="mt-2 rounded-full overflow-hidden"
              style="height:4px;background:var(--color-line);"
            >
              <div
                style="height:100%;width:${o}%;background:var(--accent);border-radius:9999px;transition:width .35s ease;"
              ></div>
            </div>`:d}
      </div>

      <div
        class="sm:col-span-2 rounded-lg px-3 py-2.5 flex flex-col justify-center"
        style="background:color-mix(in srgb, var(--nsc-amber) 6%, var(--surface));"
      >
        <div
          class="text-sm leading-snug text-ink"
          style="font-family:var(--font-display);"
        >
          ${a.text}
        </div>
        <div class="text-xs text-muted mt-1">— ${a.source}</div>
      </div>
    </div>`}};hn=wl([k("goals-metrics")],hn);const un=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s]+|\*\*([^*]+)\*\*|~~([^~]+)~~|\*([^*\n]+)\*|_([^_\n]+)_|`([^`]+)`/g;function Do(e){const t=[];let s=0,i;for(un.lastIndex=0;(i=un.exec(e))!==null;){i.index>s&&t.push(e.slice(s,i.index));const[,n,o,a,c,u,h,p]=i;if(n||i[0].startsWith("http")){const m=n?o:i[0];t.push(r`<a
          href=${m}
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-70 hover:opacity-100"
          @click=${b=>b.stopPropagation()}
          >${n??m}</a
        >`)}else a?t.push(r`<strong class="font-semibold">${a}</strong>`):c?t.push(r`<s class="opacity-70">${c}</s>`):u||h?t.push(r`<em class="italic">${u??h}</em>`):p&&t.push(r`<code
          class="font-mono text-[0.85em] px-1 py-0.5 rounded"
          style="background:color-mix(in srgb, var(--color-muted) 15%, transparent);"
          >${p}</code
        >`);s=i.index+i[0].length}return s<e.length&&t.push(e.slice(s)),t}function Es(e){const t=e.target,s=t.selectionStart??0,i=t.selectionEnd??0;if(s===i)return;const n=(e.clipboardData?.getData("text/plain")??"").trim();if(!/^https?:\/\/\S+$/.test(n))return;const o=t.value.slice(s,i).replace(/[[\]]/g,"");if(!o.trim())return;e.preventDefault();const a=n.replace(/\(/g,"%28").replace(/\)/g,"%29");t.setRangeText(`[${o}](${a})`,s,i,"end"),t.dispatchEvent(new Event("input",{bubbles:!0}))}var kl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,ps=(e,t,s,i)=>{for(var n=i>1?void 0:i?$l(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&kl(t,s,n),n};const Cl=["January","February","March","April","May","June","July","August","September","October","November","December"],Sl=["M","T","W","T","F","S","S"];function Tl(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Il(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;return t.setUTCDate(t.getUTCDate()-(s-1)),t}function Dl(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5);return new Date(a.getTime()+(i-1)*7*864e5)}function El(e,t){const s=new Date(Date.UTC(e,t,1)),i=Il(s),n=[];for(let o=0;o<6;o++){const a=[];for(let u=0;u<7;u++)a.push(new Date(i.getTime()+(o*7+u)*864e5));const c=a[0];n.push({week:Tl(c),days:a})}return n}let Ot=class extends C{constructor(){super(...arguments),this.selected=at(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=e=>{this.open&&(this.contains(e.target)||this.close())},this.keyHandler=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(e){if(e.has("open")&&this.open||e.has("selected")&&this.open){const t=Dl(this.selected);if(t){const s=new Date(t.getTime()+2592e5);this.viewYear=s.getUTCFullYear(),this.viewMonth=s.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(e){this.selected=e,this.dispatchEvent(new CustomEvent("select",{detail:{week:e},bubbles:!0,composed:!0})),this.close()}shiftMonth(e){const t=new Date(Date.UTC(this.viewYear,this.viewMonth+e,1));this.viewYear=t.getUTCFullYear(),this.viewMonth=t.getUTCMonth()}goToday(){this.select(at())}render(){if(!this.open)return d;const e=El(this.viewYear,this.viewMonth),t=new Date,s=`${t.getUTCFullYear()}-${t.getUTCMonth()}-${t.getUTCDate()}`;return r`
      <div
        class="absolute z-50 mt-1 left-1/2 -translate-x-1/2 top-full w-[280px] max-w-[calc(100vw-1rem)] rounded-md border border-line bg-surface shadow-lg p-2 font-ui text-[12px] text-ink"
        @mousedown=${i=>i.stopPropagation()}
      >
        <div class="flex items-center justify-between px-1 pb-2">
          <div class="flex items-center gap-1">
            <button
              class="w-6 h-6 grid place-items-center rounded hover:bg-[var(--hover)] text-muted hover:text-ink"
              aria-label="Previous month"
              @click=${()=>this.shiftMonth(-1)}
            >‹</button>
            <div class="px-1 font-medium">${Cl[this.viewMonth]} ${this.viewYear}</div>
            <button
              class="w-6 h-6 grid place-items-center rounded hover:bg-[var(--hover)] text-muted hover:text-ink"
              aria-label="Next month"
              @click=${()=>this.shiftMonth(1)}
            >›</button>
          </div>
          <button
            class="text-[10px] px-1.5 py-0.5 rounded text-muted hover:text-ink hover:bg-[var(--hover)]"
            @click=${this.goToday}
          >This week</button>
        </div>

        <div class="grid grid-cols-[28px_repeat(7,1fr)] gap-y-0.5 text-[10px] text-muted px-0.5">
          <div class="text-center">Wk</div>
          ${Sl.map(i=>r`<div class="text-center">${i}</div>`)}
        </div>

        <div class="mt-1">
          ${e.map(i=>{const n=i.week===this.selected;return r`
              <button
                class="grid grid-cols-[28px_repeat(7,1fr)] w-full items-center rounded text-[12px] py-0.5 ${n?"bg-[var(--accent-soft)] text-ink":"hover:bg-[var(--hover)] text-muted"}"
                @click=${()=>this.select(i.week)}
                aria-label=${`Select week ${i.week}`}
              >
                <div class="text-center text-[10px] ${n?"text-[var(--accent)] font-medium":"text-muted"}">
                  ${Number(i.week.slice(-2))}
                </div>
                ${i.days.map(o=>{const a=o.getUTCMonth()===this.viewMonth,u=`${o.getUTCFullYear()}-${o.getUTCMonth()}-${o.getUTCDate()}`===s;return r`
                    <div
                      class="h-7 grid place-items-center rounded-sm ${u?"font-semibold text-[var(--accent)]":""} ${a?n?"text-ink":"":"opacity-40"}"
                    >${o.getUTCDate()}</div>
                  `})}
              </button>
            `})}
        </div>
      </div>
    `}};ps([g()],Ot.prototype,"selected",2);ps([g({type:Boolean})],Ot.prototype,"open",2);ps([l()],Ot.prototype,"viewYear",2);ps([l()],Ot.prototype,"viewMonth",2);Ot=ps([k("week-picker")],Ot);var _l=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,Eo=(e,t,s,i)=>{for(var n=i>1?void 0:i?Pl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&_l(t,s,n),n};function at(){const e=new Date,t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function pn(e,t){const s=/^(\d{4})-W(\d{2})$/.exec(e);if(!s||!s[1]||!s[2])return e;const i=Number(s[1]),n=Number(s[2]),o=new Date(Date.UTC(i,0,4)),a=o.getUTCDay()||7,c=new Date(o.getTime()-(a-4)*864e5),u=new Date(c.getTime()+(n-1+t)*7*864e5);return Al(u)}function Al(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Ml(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5),c=new Date(a.getTime()+(i-1)*7*864e5),u=new Date(c.getTime()+6*864e5);return{start:c,end:u}}const mn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ol(e){const t=Ml(e);if(!t)return e;const s=mn[t.start.getUTCMonth()],i=mn[t.end.getUTCMonth()],n=t.start.getUTCDate(),o=t.end.getUTCDate();return s===i?`${s} ${n}–${o}`:`${s} ${n} – ${i} ${o}`}let wi=class extends C{constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=_(this,f,e=>e.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(e){await f.getState().setWeek(e)}togglePicker(e){e.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(e){this.pickerOpen=!1,e.detail?.week&&this.goto(e.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const e=f.getState().currentWeek??at(),t=at();return r`
      <div class="relative flex items-center font-mono text-sm tracking-wide">
        <button
          class=${e!==t?"px-1 whitespace-nowrap text-muted hover:text-ink font-semibold":"px-1 whitespace-nowrap text-ink hover:opacity-70 font-semibold"}
          aria-label="Pick a week"
          aria-haspopup="dialog"
          aria-expanded=${this.pickerOpen}
          @click=${this.togglePicker}
        >${Ol(e)}</button>
        <week-picker
          .selected=${e}
          .open=${this.pickerOpen}
          @select=${this.onPickerSelect}
          @close=${this.onPickerClose}
        ></week-picker>
      </div>
    `}};Eo([l()],wi.prototype,"pickerOpen",2);wi=Eo([k("week-nav")],wi);var Ll=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,st=(e,t,s,i)=>{for(var n=i>1?void 0:i?Rl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ll(t,s,n),n};let Ve=class extends C{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),e.dataTransfer.setData("text/plain",this.commit.title),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-commit-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.commit.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await f.getState().reorderCommitment(s,n)}}connectedCallback(){super.connectedCallback(),this.unsub=_(this,f,e=>e.goals),this.unsub2=_(this,f,e=>e.northStars),this.unsubFocused=_(this,f,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.()}updated(e){e.has("editing")&&this.editing&&this.editInput&&(this.editInput.focus(),this.editInput.select(),this.autoGrow(this.editInput))}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}get linkedGoal(){const e=this.commit;if(e.goal_id!=null)return f.getState().goals.find(t=>t.id===e.goal_id)??null;if(e.key_result_id!=null){for(const t of f.getState().goals)if((t.keyResults??[]).some(s=>s.id===e.key_result_id))return t}return null}async toggleDone(e){e.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async onDelete(e){e.stopPropagation(),await f.getState().deleteCommitment(this.commit.id)}onMarkerClick(e){e.stopPropagation();const t=e.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:t},bubbles:!0,composed:!0}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("commit-touched",{detail:{id:this.commit.id},bubbles:!0,composed:!0}))}startEdit(e){e.stopPropagation(),this.clearHighlight(),this.editing=!0}async commitEdit(e){if(!this.editing)return;const s=(this.editInput?.value??"").trim(),i=this.commit.title;this.editing=!1,e&&s&&s!==i&&await f.getState().updateCommitment(this.commit.id,{title:s})}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit(!0)):e.key==="Escape"&&(e.preventDefault(),this.commitEdit(!1))}renderMarker(){const e=this.linkedGoal;if(e){const t=e.symbol??null,s=e.color??null,i=t?Os[t]:void 0;if(t&&i){const o=s?`color:var(--nsc-${s})`:"";return r`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${K(Ms(i))}</span
        >`}const n=s?`background:var(--nsc-${s})`:"background:var(--muted)";return r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${n}
      ></span>`}return r`
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
        <path class="plus-h" d="M8 12h8"></path>
        <path class="plus-v" d="M12 8v8"></path>
      </svg>
    `}render(){const e=this.commit,t=this.linkedGoal,s=t?t.title:"Assign to a goal or KR",i=e.done===1,n=i?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${e.id}`,c=f.getState().focusedRowKey===o?"bg-hover":"";return r`
      <li
        class="group/row flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover ${c} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
        data-id=${e.id}
        data-row-key=${o}
        draggable=${this.dragEnabled?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
      >
        <span
          class="commit-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/row:opacity-60 hover:!opacity-100 select-none leading-none"
          title="Drag to reorder"
          style="font-size:14px;letter-spacing:-1px;"
          @mousedown=${this.onHandleDown}
          @mouseup=${()=>this.dragEnabled=!1}
        >⠿</span>
        <button
          type="button"
          class=${n}
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${i?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${i?r`<svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="transition: transform .14s cubic-bezier(.34,1.56,.64,1);"
              ><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:d}
        </button>
        ${this.editing?r`
              <textarea
                class="inline-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none p-0 pb-1 resize-none overflow-hidden leading-snug"
                style="border-bottom:0.5px solid var(--color-line);"
                rows="1"
                .value=${e.title}
                @input=${u=>this.autoGrow(u.target)}
                @keydown=${this.onEditKey}
                @paste=${Es}
                @blur=${()=>this.commitEdit(!0)}
              ></textarea>
            `:r`
              <span
                class="flex-1 text-sm cursor-text pb-1 ${i?"line-through text-muted":this.highlight?"font-medium":"text-ink"}"
                style="border-bottom:0.5px solid var(--color-line);${this.highlight&&!i?"color:var(--nsc-green);":""}"
                @click=${this.startEdit}
              >${Do(e.title)}</span>
            `}
        ${e.owner==="agent"?r`<span
              class="shrink-0 self-center text-[11px] text-muted px-1.5 py-0.5 rounded-full leading-none"
              style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
              title="An agent owns this task and may pick it up"
              >agent</span
            >`:d}
        <button
          class="commit-marker-btn ${t?"":"opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${t?"Change category":"Assign category"}
          title=${s}
          @click=${this.onMarkerClick}
        >${this.renderMarker()}</button>
        <button
          class="commit-del w-5 h-5 grid place-items-center text-muted hover:text-ink opacity-0 group-hover/row:opacity-100 transition-opacity"
          aria-label="Delete"
          @click=${this.onDelete}
        >×</button>
      </li>
    `}};st([g({attribute:!1})],Ve.prototype,"commit",2);st([g({attribute:!1})],Ve.prototype,"index",2);st([g({type:Boolean})],Ve.prototype,"highlight",2);st([l()],Ve.prototype,"editing",2);st([l()],Ve.prototype,"dragEnabled",2);st([l()],Ve.prototype,"dragOverPos",2);st([ge("textarea.inline-edit")],Ve.prototype,"editInput",2);Ve=st([k("commit-row")],Ve);var Nl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,Nt=(e,t,s,i)=>{for(var n=i>1?void 0:i?jl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Nl(t,s,n),n};let pt=class extends C{constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.outsideClickHandler=e=>{const t=e.target;t&&(this.contains(t)||this.anchor&&this.anchor.contains(t)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=_(this,f,e=>e.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const e=this.anchor.getBoundingClientRect();this.style.position="fixed",this.style.right=`${window.innerWidth-e.right}px`,this.style.zIndex="1000";const t=this.getBoundingClientRect().height||320,s=window.innerHeight-e.bottom,i=e.top,n=8;s>=t+n||s>=i?(this.style.top=`${e.bottom+4}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,s-n)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-e.top+4}px`,this.style.maxHeight=`${Math.max(160,i-n)}px`),this.style.overflowY="auto"}buildItems(){const e=this.query.trim().toLowerCase(),t=f.getState().goals.filter(i=>i.status==="active"),s=[];s.push({kind:"none",label:"— none",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const i of t){const n=i.keyResults??[],o=i.title.toLowerCase();if(!e||o.includes(e)||n.some(c=>c.title.toLowerCase().includes(e))){s.push({kind:"goal",id:i.id,label:i.title,northStar:i.north_star,current:this.currentGoalId===i.id&&this.currentKeyResultId==null});for(const c of n)e&&!o.includes(e)&&!c.title.toLowerCase().includes(e)||s.push({kind:"kr",id:c.id,parent:i.id,label:c.title,northStar:i.north_star,current:this.currentKeyResultId===c.id})}}return s}pick(e){let t;e.kind==="none"?t={goalId:null,keyResultId:null}:e.kind==="goal"?t={goalId:e.id,keyResultId:null}:t={goalId:null,keyResultId:e.id},this.dispatchEvent(new CustomEvent("pick",{detail:t,bubbles:!0,composed:!0}))}onSearchKey(e){e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}renderNsMarker(e,t){if(!e)return d;const s=f.getState().northStars.find(h=>h.slug===e),i=s?.symbol??null,n=s?.color??null,o=t==="goal"?14:12,a=t==="goal"?1:.75,c=i?Os[i]:void 0,u=n?`color:var(--nsc-${n});opacity:${a}`:`opacity:${a}`;return i&&c?r`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${u}"
        >${K(Ms(c))}</span
      >`:r`<span
      class="inline-block rounded-full shrink-0"
      style="width:8px;height:8px;background:${n?`var(--nsc-${n})`:"var(--muted)"};opacity:${a}"
    ></span>`}render(){const e=this.buildItems();return r`
      <div
        class="w-80 max-h-96 flex flex-col bg-surface border border-line rounded-lg shadow-xl overflow-hidden"
        role="dialog"
        @click=${t=>t.stopPropagation()}
      >
        <div class="p-2 border-b border-line">
          <input
            class="cp-search w-full px-3 py-2 text-sm bg-bg border border-line rounded text-ink placeholder:text-muted focus:outline-none focus:border-accent"
            type="text"
            placeholder="Search goals or KRs…"
            autocomplete="off"
            .value=${this.query}
            @input=${t=>{this.query=t.target.value}}
            @keydown=${this.onSearchKey}
          />
        </div>
        <ul class="flex-1 overflow-y-auto py-1" role="listbox">
          ${e.map(t=>{const s=t.kind==="goal",i=t.kind==="kr",n=t.kind==="none",o=["flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm transition-colors",i?"pl-8":"",s?"font-semibold text-ink mt-0.5":"",n?"text-muted":"",t.current?"bg-hover":"hover:bg-hover"].filter(Boolean).join(" ");return r`
              <li
                class=${o}
                role="option"
                aria-selected=${t.current?"true":"false"}
                @click=${()=>this.pick(t)}
              >
                <span class="w-3 text-accent text-xs shrink-0"
                  >${t.current?"✓":""}</span
                >
                ${n?r`<span class="text-muted">—</span>`:"northStar"in t?this.renderNsMarker(t.northStar,s?"goal":"kr"):d}
                <span class="truncate flex-1 ${i?"text-muted":""}"
                  >${t.label}</span
                >
              </li>
            `})}
        </ul>
      </div>
    `}};Nt([g({attribute:!1})],pt.prototype,"anchor",2);Nt([g({type:Number})],pt.prototype,"currentGoalId",2);Nt([g({type:Number})],pt.prototype,"currentKeyResultId",2);Nt([l()],pt.prototype,"query",2);Nt([ge(".cp-search")],pt.prototype,"searchEl",2);pt=Nt([k("category-picker")],pt);function ts(e,t){const s={text:e,kind:t};document.dispatchEvent(new CustomEvent("mana-planner-note",{detail:s}))}async function _o(e,t){try{if(!(await F("/api/ideas",{text:t}))?.id)throw new Error("no parked item id")}catch{return ts(`Couldn't park: ${t}`,"error"),!1}try{await $.commitments.remove(e),ts(`Parked: ${t}`,"user")}catch{ts(`Parked, but the task wasn't removed: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}async function Po(e,t){try{const s=f.getState().currentWeek??void 0;if(!(await $.commitments.create({title:t,week:s}))?.id)throw new Error("no task id")}catch{return ts(`Couldn't add to the week: ${t}`,"error"),!1}try{await Xt(`/api/ideas/${e}`)}catch{ts(`Added, but it's still parked: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}var Fl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,jt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ul(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Fl(t,s,n),n};let mt=class extends C{constructor(){super(...arguments),this.mode="open",this.pickerCommitId=null,this.pickerAnchor=null,this.dragOverIdea=!1,this.highlightIds=new Set,this.flash=new Ds(this,"commitment"),this.onOpsEvent=e=>{const t=e.detail;this.flash.take(t),this.mode==="open"&&t?.action==="refresh"&&t.added?.kind==="commitment"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id))},this.onCommitTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightIds.has(t))return;const s=new Set(this.highlightIds);s.delete(t),this.highlightIds=s},this.onIdeaDragOver=e=>{this.mode==="open"&&e.dataTransfer?.types.includes("text/x-idea-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverIdea=!0)},this.onIdeaDragLeave=()=>{this.dragOverIdea=!1},this.onIdeaDrop=async e=>{if(this.mode!=="open")return;const t=e.dataTransfer?.getData("text/x-idea-id");if(!t)return;e.preventDefault(),this.dragOverIdea=!1;const s=(e.dataTransfer?.getData("text/plain")||"").trim();s&&await Po(Number(t),s)}}connectedCallback(){super.connectedCallback(),this.unsubCommits=_(this,f,e=>e.commitments),this.unsubGoals=_(this,f,e=>e.goals),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.(),document.removeEventListener("ops-event",this.onOpsEvent)}onOpenPicker(e){if(this.pickerCommitId===e.detail.commitId){this.closePicker();return}this.pickerCommitId=e.detail.commitId,this.pickerAnchor=e.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(e){const t=this.pickerCommitId;t!=null&&(this.closePicker(),await f.getState().updateCommitment(t,{goalId:e.detail.goalId,keyResultId:e.detail.keyResultId}))}render(){const e=f.getState().commitments,t=e.filter(i=>this.mode==="done"?i.done:!i.done),s=e.find(i=>i.id===this.pickerCommitId)??null;return r`
      <ul
        class="commits"
        style=${this.mode==="open"?this.dragOverIdea?"min-height:32px;box-shadow:inset 0 0 0 1.5px var(--accent);border-radius:12px;":"min-height:8px;":""}
        @open-picker=${this.onOpenPicker}
        @commit-touched=${this.onCommitTouched}
        @dragover=${this.onIdeaDragOver}
        @dragleave=${this.onIdeaDragLeave}
        @drop=${this.onIdeaDrop}
      >
        ${t.map((i,n)=>r`<commit-row class=${this.flash.cls(i.id)} .commit=${i} .index=${n} .highlight=${this.highlightIds.has(i.id)}></commit-row>`)}
      </ul>
      ${this.pickerCommitId!=null&&this.pickerAnchor?r`
            <category-picker
              .anchor=${this.pickerAnchor}
              .currentGoalId=${s?.goal_id??null}
              .currentKeyResultId=${s?.key_result_id??null}
              @pick=${this.onPick}
              @close=${this.closePicker}
            ></category-picker>
          `:d}
    `}};jt([g()],mt.prototype,"mode",2);jt([l()],mt.prototype,"pickerCommitId",2);jt([l()],mt.prototype,"pickerAnchor",2);jt([l()],mt.prototype,"dragOverIdea",2);jt([l()],mt.prototype,"highlightIds",2);mt=jt([k("weekly-commits")],mt);var Bl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,xe=(e,t,s,i)=>{for(var n=i>1?void 0:i?zl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Bl(t,s,n),n};const ql='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6"/><polyline points="8 5 4 9 8 13"/></svg>',fn="slmai.cockpit.weekSectionCollapsed",Gs="slmai.cockpit.weekSection.title",gn="slmai.cockpit.weekSection.hideDone",Ws="Shipping this week";let he=class extends C{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.hideDone=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=Ws,this.leftoverCount=0,this.newGoalId=null,this.newKeyResultId=null,this.addPickerOpen=!1,this.addPickerAnchor=null,this.leftoverForWeek=null,this.opsHandler=e=>{const s=e.detail;s&&(s.action==="load-week"?f.getState().setWeek(s.week):s.action==="refresh"&&f.getState().loadCommitments(s.week))},this.closeAddPicker=()=>{this.addPickerOpen=!1,this.addPickerAnchor=null}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(fn)==="1",this.hideDone=localStorage.getItem(gn)==="1",this.titleValue=localStorage.getItem(Gs)??Ws,fetch("/api/settings").then(t=>t.json()).then(t=>{const s=t["ui.section.week.title"];s&&(this.titleValue=s,localStorage.setItem(Gs,s))}).catch(()=>{}),this.unsub=_(this,f,t=>t.currentWeek),this.unsubCommits=_(this,f,t=>`${t.commitments.filter(s=>s.done).length}`),document.addEventListener("ops-event",this.opsHandler);const e=f.getState();e.goals.length||e.loadGoals().catch(()=>{}),e.currentWeek==null&&e.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsubCommits?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(e){e.has("adding")&&this.adding&&this.newTitleEl?.focus();const t=at();f.getState().currentWeek===t&&this.leftoverForWeek!==t&&(this.leftoverForWeek=t,this.refreshLeftover(t))}async refreshLeftover(e){try{const{commitments:t}=await $.commitments.listForWeek(pn(e,-1));this.leftoverCount=t.filter(s=>!s.done).length}catch{this.leftoverCount=0}}async doCarry(e){e.stopPropagation();const t=at();try{await $.commitments.carryOver(pn(t,-1),t)}catch{}this.leftoverCount=0,await f.getState().loadCommitments(t)}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||Ws;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(Gs,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(fn,this.collapsed?"1":"0")}catch{}}toggleHideDone(e){e.stopPropagation(),this.hideDone=!this.hideDone;try{localStorage.setItem(gn,this.hideDone?"1":"0")}catch{}}async commitAdd(e){const t=this.newTitleEl,s=(t?.value??"").trim();s&&await f.getState().createCommitment({title:s,goalId:this.newGoalId,keyResultId:this.newKeyResultId}),this.newGoalId=null,this.newKeyResultId=null,e||!s?this.adding=!1:t&&(t.value="")}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!1)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newGoalId=null,this.newKeyResultId=null)}startAdd(){this.newGoalId=null,this.newKeyResultId=null,this.adding=!0}get newLinkedGoal(){const e=f.getState().goals;if(this.newGoalId!=null)return e.find(t=>t.id===this.newGoalId)??null;if(this.newKeyResultId!=null){for(const t of e)if((t.keyResults??[]).some(s=>s.id===this.newKeyResultId))return t}return null}openAddPicker(e){e.stopPropagation(),this.addPickerAnchor=e.currentTarget,this.addPickerOpen=!0}onAddPick(e){this.newGoalId=e.detail.goalId,this.newKeyResultId=e.detail.keyResultId,this.closeAddPicker(),this.updateComplete.then(()=>this.newTitleEl?.focus())}renderAddMarker(){const e=this.newLinkedGoal;if(e){const t=e.symbol??null,s=e.color??null,i=t?Os[t]:void 0;return t&&i?r`<span
          class="inline-flex items-center justify-center w-3.5 h-3.5"
          style=${s?`color:var(--nsc-${s})`:""}
          >${K(Ms(i))}</span
        >`:r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${s?`background:var(--nsc-${s})`:"background:var(--muted)"}
      ></span>`}return r`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>`}render(){const e=f.getState().currentWeek===at(),t=f.getState().commitments.filter(i=>i.done).length,s=this.tabbed||!this.collapsed;return r`
      <section class="group/section-header flex flex-col gap-1">
        ${this.tabbed?d:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${K(this.collapsed?us:hs)}</span
              >
              ${this.editingTitle?r`<input
                    class="text-lg font-semibold text-ink leading-none bg-transparent border-b border-line outline-none"
                    style="letter-spacing:-0.01em;min-width:4ch;"
                    .value=${this.titleValue}
                    autofocus
                    @click=${i=>i.stopPropagation()}
                    @keydown=${this.onTitleKey}
                    @blur=${i=>this.commitTitleEdit(i.target.value)}
                  />`:r`<h2
                    class="text-lg font-semibold text-ink leading-none cursor-pointer"
                    style="letter-spacing:-0.01em;"
                    title="Double-click to rename"
                    @dblclick=${this.startEditTitle}
                  >${this.titleValue}</h2>`}
              <span class="flex-1"></span>
            </header>`}

        ${s?r`
              <div
                class="week-nav-row grid grid-cols-[1fr_auto_1fr] items-center pl-2 pb-2 -mt-1"
                @click=${i=>i.stopPropagation()}
              >
                <div class="justify-self-start"></div>
                <div class="justify-self-center">
                  <week-nav></week-nav>
                </div>
                <div class="flex items-center gap-2 justify-self-end pr-2">
                  ${e&&this.leftoverCount>0?r`<button
                        type="button"
                        class="text-muted hover:text-ink"
                        style="width:16px;height:16px;display:inline-flex;opacity:0.9;"
                        title=${`Pull ${this.leftoverCount} open task${this.leftoverCount===1?"":"s"} from last week`}
                        @click=${this.doCarry}
                      >
                        ${K(ql)}
                      </button>`:d}
                </div>
              </div>
              <weekly-commits .mode=${"open"}></weekly-commits>
              ${this.adding?r`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                      <input
                        class="new-commit-title flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New task..."
                        @keydown=${this.onAddKey}
                        @paste=${Es}
                        @blur=${()=>{this.addPickerOpen||this.commitAdd(!0)}}
                      />
                      <button
                        class="add-marker w-6 h-6 grid place-items-center rounded hover:bg-hover ${this.newLinkedGoal?"":"text-muted opacity-60"}"
                        aria-label="Assign to a goal"
                        title=${this.newLinkedGoal?this.newLinkedGoal.title:"Assign to a goal or KR"}
                        @mousedown=${i=>i.preventDefault()}
                        @click=${this.openAddPicker}
                      >${this.renderAddMarker()}</button>
                    </div>
                    ${this.addPickerOpen&&this.addPickerAnchor?r`<category-picker
                          .anchor=${this.addPickerAnchor}
                          .currentGoalId=${this.newGoalId}
                          .currentKeyResultId=${this.newKeyResultId}
                          @pick=${this.onAddPick}
                          @close=${this.closeAddPicker}
                        ></category-picker>`:d}
                  `:r`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>this.startAdd()}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New task...</span>
                    </div>
                  `}
              ${t>0?r`
                    <div class="mt-1">
                      <button
                        type="button"
                        class="w-full text-center text-xs text-muted hover:text-ink py-1"
                        @click=${this.toggleHideDone}
                      >${this.hideDone?`Show done tasks (${t})`:"Hide done tasks"}</button>
                    </div>
                    ${this.hideDone?d:r`<weekly-commits .mode=${"done"}></weekly-commits>`}
                  `:d}
            `:d}
      </section>
    `}};xe([g({type:Boolean})],he.prototype,"tabbed",2);xe([l()],he.prototype,"collapsed",2);xe([l()],he.prototype,"hideDone",2);xe([l()],he.prototype,"adding",2);xe([l()],he.prototype,"editingTitle",2);xe([l()],he.prototype,"titleValue",2);xe([l()],he.prototype,"leftoverCount",2);xe([l()],he.prototype,"newGoalId",2);xe([l()],he.prototype,"newKeyResultId",2);xe([l()],he.prototype,"addPickerOpen",2);xe([l()],he.prototype,"addPickerAnchor",2);xe([ge("input.new-commit-title")],he.prototype,"newTitleEl",2);he=xe([k("week-section")],he);var Hl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,N=(e,t,s,i)=>{for(var n=i>1?void 0:i?Kl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Hl(t,s,n),n};let ft=null;const Gl=(...e)=>ft.getMarkdown(...e),Vs=(...e)=>ft.setMarkdown(...e),Wl=(...e)=>ft.alignSelectedImage(...e),Vl=(...e)=>ft.startTitledNote(...e),Qs=(...e)=>ft.isBlankNote(...e);let Ys=null;const Ql=640,bn="mana.notes.sidebarHidden",Js=864e5,Yl=[{name:"Default",v:null},{name:"Gray",v:"#6b7280"},{name:"Red",v:"#e5484d"},{name:"Orange",v:"#e8590c"},{name:"Amber",v:"#bd8400"},{name:"Green",v:"#2f9e44"},{name:"Blue",v:"#1971c2"},{name:"Violet",v:"#7048e8"},{name:"Pink",v:"#c2255c"}],Jl=[{name:"Yellow",v:"#fff3a3"},{name:"Green",v:"#c3f0ca"},{name:"Blue",v:"#c5e2ff"},{name:"Pink",v:"#ffd6e7"},{name:"Orange",v:"#ffe0b8"},{name:"Purple",v:"#ecd5ff"}],H=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,nt=(e,t,s,i="text-muted hover:text-ink")=>r`
  <button type="button" title=${t} aria-label=${t}
    class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg hover:bg-hover ${i}"
    @click=${n=>{n.stopPropagation(),s()}}>${H(e)}</button>`,ye=e=>e instanceof Error?e.message:String(e),Xl=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let L=class extends C{constructor(){super(...arguments),this.files=[],this.trashCount=0,this.activeName=null,this.isDraft=!1,this.error=null,this.initialized=!1,this.wide=!0,this.view="list",this.sidebarHidden=!1,this.searchQ="",this.hits=null,this.trashOpen=!1,this.trashItems=[],this.toast=null,this.tbMenu=null,this.tbAnchor=null,this.editorTick=0,this.liveTitle="",this.dragName=null,this.dropAt=null,this.mediaOpen=!1,this.uploading=0,this.uploadPct=0,this.suppressClick=!1,this.hostReady=!1,this.cur=null,this.dirty=!1,this.pending=0,this.queue=Promise.resolve(),this.mutGen=0,this.selfNames=new Set,this.renamed=new Map,this.contentCache=new Map,this.selectionText="",this.onDocDown=e=>{if(!this.tbMenu)return;e.composedPath().some(s=>s instanceof HTMLElement&&s.hasAttribute("data-tb-root"))||(this.tbMenu=null)},this.onKey=e=>{e.altKey&&!e.metaKey&&!e.ctrlKey&&e.code==="KeyN"&&(e.preventDefault(),this.newNote())},this.onVisibility=()=>{if(document.visibilityState!=="hidden")return;this.flush();const e=this.cur;e?.touched&&(e.touched=!1,this.queueRetitle(e))}}connectedCallback(){super.connectedCallback();try{this.sidebarHidden=localStorage.getItem(bn)==="1"}catch{}this.resizeObs=new ResizeObserver(()=>{const e=this.clientWidth>=Ql;e!==this.wide&&(this.wide=e)}),this.resizeObs.observe(this),this.loadFiles(),this.pollTimer=setInterval(()=>{document.hidden||this.loadFiles()},4e3),window.addEventListener("pointerdown",this.onDocDown,!0),window.addEventListener("keydown",this.onKey),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerdown",this.onDocDown,!0),window.removeEventListener("keydown",this.onKey),document.removeEventListener("visibilitychange",this.onVisibility),this.resizeObs?.disconnect(),this.pollTimer&&clearInterval(this.pollTimer),this.searchTimer&&clearTimeout(this.searchTimer),this.toastTimer&&clearTimeout(this.toastTimer),this.leave(),this.editor?.destroy(),this.editor=void 0}get holdReload(){return this.dirty||this.pending>0||(this.editor?.isFocused??!1)}async api(e,t,s){const i=await fetch(t,{method:e,credentials:"include",headers:s===void 0?void 0:{"content-type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!i.ok)throw new Error(`${i.status}`);return await i.json()}enqueue(e){const t=this.queue.then(e);return this.queue=t.catch(()=>{}),t}async loadFiles(){if(this.dragName)return;const e=this.mutGen;try{const t=await this.api("GET","/api/notes/files");if(e!==this.mutGen)return;const s=new Set(this.files.map(a=>a.name));if(this.files=t.files,this.trashCount=t.trashCount??0,!this.initialized){this.initialized=!0,this.wide&&!this.cur&&t.files[0]&&this.open(t.files[0].name);return}const i=t.files.filter(a=>!s.has(a.name)&&!this.selfNames.has(a.name));if(i.length&&!this.holdReload){const a=i.reduce((c,u)=>u.modifiedAt>c.modifiedAt?u:c);this.open(a.name);return}const n=this.cur;if(!n?.name||this.holdReload)return;const o=t.files.find(a=>a.name===n.name);o?o.modifiedAt>n.mtime&&this.loadContent(n):this.closeCurrent()}catch(t){this.error=ye(t)}}async loadContent(e){if(e.name)try{const t=await this.api("GET",`/api/notes/files/${encodeURIComponent(e.name)}`);if(this.contentCache.set(e.name,t.content),e!==this.cur||!this.editor||this.dirty)return;e.mtime=t.modifiedAt??0,Vs(this.editor,t.content),e.loaded=!0,this.editor.setEditable(!0,!1),this.error=null}catch(t){this.error=ye(t)}}open(e){if(this.trashOpen=!1,this.cur?.name===e){this.view="note";return}this.leave();const t={name:e,mtime:0,touched:!1,loaded:!1};this.cur=t,this.syncActive(),this.view="note",this.dirty=!1,this.showCached(t),this.loadContent(t)}showCached(e){const t=this.editor;if(!t||!e.name)return;const s=this.contentCache.get(e.name);Vs(t,s??""),e.loaded=s!=null,t.setEditable(e.loaded,!1)}newNote(){const e=this.editor;e&&(this.trashOpen=!1,this.clearSearch(),this.cur&&!this.cur.name&&Qs(e)||(this.leave(),this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive(),Vl(e),e.setEditable(!0,!1),this.dirty=!1),this.view="note",this.updateComplete.then(()=>this.editor?.commands.focus("start")))}closeCurrent(){this.saveTimer&&clearTimeout(this.saveTimer),this.dirty=!1,this.cur=null,this.syncActive(),this.editor&&Vs(this.editor,""),this.wide&&this.files[0]?this.open(this.files[0].name):this.view="list"}back(){this.leave(),this.view="list"}syncActive(){this.activeName=this.cur?.name??null,this.isDraft=!!this.cur&&!this.cur.name,this.updateViewContext()}onEdit(){this.cur||(this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive()),this.cur.touched=!0,this.dirty=!0,this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.flush(),900)}flush(){this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0);const e=this.cur,t=this.editor;if(!e||!t||!this.dirty)return;this.dirty=!1;const s=Gl(t).replace(/\n*$/,`
`),i=Qs(t);e.name&&this.contentCache.set(e.name,s),this.pending++,this.enqueue(async()=>{try{if(e.name){const n=await this.api("PUT",`/api/notes/files/${encodeURIComponent(e.name)}`,{content:s});e.mtime=n.modifiedAt}else{if(i)return;const n=await this.api("POST","/api/notes/files",{content:s});e.name=n.name,e.mtime=n.modifiedAt,this.selfNames.add(n.name),this.contentCache.set(n.name,s),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}this.error=null}catch(n){e===this.cur&&(this.dirty=!0),this.error=ye(n)}finally{this.pending--}})}leave(){const e=this.cur,t=this.editor;if(e&&t){this.flush();const s=e.loaded&&Qs(t),i=e.touched;e.touched=!1,s?this.enqueue(async()=>{if(e.name){try{await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e.name)}?ifEmpty=1`),this.contentCache.delete(e.name)}catch(n){this.error=ye(n)}this.mutGen++,this.loadFiles()}}):i&&this.queueRetitle(e)}this.cur=null,this.syncActive()}queueRetitle(e){this.enqueue(async()=>{if(!e.name)return;const t=e.name;try{const s=await this.api("POST","/api/notes/retitle",{name:t});if(s.name===t)return;e.name=s.name,this.selfNames.add(s.name),this.renamed.set(t,s.name);const i=this.contentCache.get(t);this.contentCache.delete(t),i!=null&&this.contentCache.set(s.name,i),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}catch(s){this.error=ye(s)}})}get pinnedNames(){return this.files.filter(e=>e.pinned).map(e=>e.name)}togglePin(e){const t=this.files.find(i=>i.name===e);if(!t)return;const s=this.pinnedNames.filter(i=>i!==e);this.setPins(t.pinned?s:[e,...s])}setPins(e){const t=new Map(this.files.map(n=>[n.name,n])),s=e.map(n=>t.get(n)).filter(n=>!!n).map(n=>({...n,pinned:!0})),i=this.files.filter(n=>!e.includes(n.name)).map(n=>({...n,pinned:!1})).sort((n,o)=>o.modifiedAt-n.modifiedAt);this.files=[...s,...i],this.mutGen++,this.enqueue(async()=>{try{await this.api("PUT","/api/notes/pins",{order:e.map(n=>this.renamed.get(n)??n)})}catch(n){this.error=ye(n)}this.mutGen++,this.loadFiles()})}onRowPointerDown(e,t){if(e.button!==0)return;const s=e.clientX,i=e.clientY,n=e.pointerType==="touch";let o=!1;const a=()=>{o=!0,this.dragName=t,this.suppressClick=!0,n&&navigator.vibrate?.(10)},c=n?setTimeout(a,350):void 0,u=x=>{o&&x.preventDefault()},h=x=>{if(!o){if(Math.hypot(x.clientX-s,x.clientY-i)<6)return;if(n){b();return}a()}this.trackDrop(x.clientY)},p=()=>{const x=o;b(),x&&this.drop()},m=()=>{b(),this.dragName=null,this.dropAt=null,this.suppressClick=!1},b=()=>{c&&clearTimeout(c),window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),window.removeEventListener("touchmove",u)};window.addEventListener("pointermove",h),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",m),window.addEventListener("touchmove",u,{passive:!1})}trackDrop(e){let t=null;for(const s of this.querySelectorAll("[data-drop-row]")){const i=s.getBoundingClientRect();if(!(e<i.top||e>i.bottom)){t={name:s.dataset.dropRow||null,pos:e<i.top+i.height/2?"before":"after"};break}}(t?.name!==this.dropAt?.name||t?.pos!==this.dropAt?.pos)&&(this.dropAt=t)}drop(){const e=this.dragName,t=this.dropAt;if(this.dragName=null,this.dropAt=null,setTimeout(()=>{this.suppressClick=!1},0),!e)return;const s=this.pinnedNames;if(t&&(t.name===null||s.includes(t.name))){if(t.name===e)return;const i=s.filter(o=>o!==e);let n=t.name===null?i.length:i.indexOf(t.name)+(t.pos==="after"?1:0);n<0&&(n=i.length),i.splice(n,0,e),this.setPins(i)}else s.includes(e)&&this.setPins(s.filter(i=>i!==e))}trashNote(e){if(this.cur?.name===e){this.trashCurrent();return}this.files=this.files.filter(t=>t.name!==e),this.mutGen++,this.enqueue(()=>this.doTrash(this.renamed.get(e)??e))}trashCurrent(){const e=this.cur;e&&(this.flush(),e.name&&(this.files=this.files.filter(t=>t.name!==e.name)),this.mutGen++,this.closeCurrent(),this.enqueue(async()=>{e.name&&await this.doTrash(e.name)}))}async doTrash(e){try{const t=await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e)}`);this.contentCache.delete(e);const s=t.trashed;s&&this.showToast("Moved to Recently deleted",()=>void this.restore(s))}catch(t){this.error=ye(t)}this.mutGen++,this.loadFiles()}async restore(e){this.toast=null;try{const t=await this.enqueue(()=>this.api("POST","/api/notes/restore",{name:e}));this.selfNames.add(t.name),this.mutGen++,await this.loadFiles(),this.open(t.name)}catch(t){this.error=ye(t)}}async openTrash(){this.clearSearch(),this.trashOpen=!0;try{this.trashItems=(await this.api("GET","/api/notes/trash")).items}catch(e){this.error=ye(e)}}showToast(e,t){this.toast={text:e,undo:t},this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=null},6e3)}onSearchInput(e){if(this.searchQ=e,this.trashOpen=!1,this.searchTimer&&clearTimeout(this.searchTimer),!e.trim()){this.hits=null;return}this.searchTimer=setTimeout(()=>{this.runSearch(e)},180)}async runSearch(e){try{const t=await this.api("GET",`/api/notes/search?q=${encodeURIComponent(e)}`);e===this.searchQ&&(this.hits=t.results)}catch(t){this.error=ye(t)}}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.searchQ="",this.hits=null}updateViewContext(){const e=this.cur?.name,t=e?`Note "${e}" is open in the notes pane (vault path: Notes/${e}). It's a Markdown file. Edit it with Read/Edit/Write and the cockpit re-renders live.`:this.cur?"A new note is open in the notes pane. It gets a file under Notes/ once the user has typed something.":"The notes list is open in the notes pane; no note is selected.",s=this.selectionText?` The user has selected this text: "${this.selectionText.slice(0,600)}". When they say "this" or ask to rewrite/expand/fix something, they mean the selected passage. Edit that part of the file.`:"";f.getState().setViewContext({tool:"notes",summary:t+s})}updated(){if(this.hostReady||this.editor)return;const e=this.querySelector("#note-host");e&&(this.hostReady=!0,this.mountEditor(e))}async mountEditor(e){if(ft??=await Ke(()=>import("./notes-editor-r1DME_6v.js"),[]),!this.isConnected||this.editor)return;this.editor=ft.createNotesEditor({host:e,uploadImage:s=>this.uploadImage(s),onUpdate:()=>this.onEdit(),onTransaction:()=>{this.editorTick++;let s="";this.editor?.state.doc.forEach(i=>{s||(s=i.textContent.trim())}),this.liveTitle=s},onSelection:s=>{s!==this.selectionText&&(this.selectionText=s,this.updateViewContext())}});const t=this.cur;t?.name&&(this.showCached(t),this.loadContent(t))}async uploadImage(e){Ys??=await Ke(()=>import("./notes-media-BYDjX8ZZ.js"),__vite__mapDeps([2,3,4,5])),this.uploading++,this.uploadPct=0;try{const t=await Ys.uploadMedia(e,s=>{this.uploadPct=s});return{url:t.url,alt:t.name}}catch(t){throw this.error=ye(t),t}finally{this.uploading--}}async openMedia(){this.tbMenu=null;try{Ys??=await Ke(()=>import("./notes-media-BYDjX8ZZ.js"),__vite__mapDeps([2,3,4,5]))}catch(e){this.error=ye(e);return}this.mediaOpen=!0}onMediaInsert(e){this.mediaOpen=!1,!(!this.editor||!this.cur?.loaded)&&this.editor.chain().focus().setImage({src:e.url,alt:e.name}).run()}toggleSidebar(){this.sidebarHidden=!this.sidebarHidden;try{localStorage.setItem(bn,this.sidebarHidden?"1":"0")}catch{}}bucket(e){const t=e*1e3,s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(t>=i)return"Today";if(t>=i-Js)return"Yesterday";if(t>=i-7*Js)return"Previous 7 days";if(t>=i-30*Js)return"Previous 30 days";const n=new Date(t);return n.getFullYear()===s.getFullYear()?n.toLocaleDateString("en-GB",{month:"long"}):String(n.getFullYear())}dateLabel(e){const t=new Date(e*1e3),s=this.bucket(e);if(s==="Today")return t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});if(s==="Yesterday")return s;if(s==="Previous 7 days")return t.toLocaleDateString("en-GB",{weekday:"long"});const i=t.getFullYear()!==new Date().getFullYear();return t.toLocaleDateString("en-GB",{day:"numeric",month:"short",...i?{year:"numeric"}:{}})}mark(e){const t=this.searchQ.trim().split(/\s+/).filter(Boolean).map(Xl);return t.length?e.split(new RegExp(`(${t.join("|")})`,"gi")).map((s,i)=>i%2?r`<mark class="bg-accent-soft text-ink rounded-sm">${s}</mark>`:s):e}renderSidebar(){const e=this.searchQ.trim();return r`
      <div class="flex items-center gap-1.5 px-3 pt-3 pb-2 shrink-0">
        <label class="flex items-center gap-1.5 flex-1 min-w-0 h-8 px-2.5 rounded-lg bg-hover text-muted">
          ${H("search","w-3.5 h-3.5 shrink-0")}
          <input type="text" placeholder="Search" .value=${this.searchQ}
            class="flex-1 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            @input=${t=>this.onSearchInput(t.target.value)}
            @keydown=${t=>{t.key==="Escape"&&this.clearSearch(),t.key==="Enter"&&this.hits?.[0]&&this.open(this.hits[0].name)}} />
          ${e?r`<button type="button" title="Clear search" aria-label="Clear search" class="shrink-0 text-muted hover:text-ink"
            @click=${()=>this.clearSearch()}>${H("x","w-3.5 h-3.5")}</button>`:d}
        </label>
        ${nt("square-pen","New note (⌥N)",()=>this.newNote(),"text-accent")}
      </div>
      <div class="flex-1 min-h-0 overflow-y-auto px-2 pb-2">
        ${this.trashOpen?this.renderTrash():e?this.renderHits():this.renderList()}
      </div>
      ${!this.trashOpen&&this.trashCount?r`
        <button type="button" class="flex items-center gap-2 mx-2 mb-2 px-3 py-2 rounded-lg text-xs text-muted hover:text-ink hover:bg-hover shrink-0"
          @click=${()=>void this.openTrash()}>
          ${H("trash-2","w-3.5 h-3.5")} Recently deleted <span class="ml-auto">${this.trashCount}</span>
        </button>`:d}`}groupLabel(e){return r`<div class="px-3 pt-3 pb-1 text-[0.7rem] font-semibold text-muted">${e}</div>`}renderList(){if(!this.files.length&&!this.isDraft)return this.initialized?r`<div class="px-3 py-8 text-center text-sm text-muted">No notes yet</div>`:d;const e=[];for(const s of this.files){const i=s.pinned?"Pinned":this.bucket(s.modifiedAt),n=e[e.length-1];n?.label===i?n.items.push(s):e.push({label:i,items:[s]})}const t=this.files.find(s=>s.name===this.dragName);return r`
      ${t&&!t.pinned&&!e.some(s=>s.label==="Pinned")?r`
        <div data-drop-row=""
          class="mx-1 mt-2 px-3 py-3 rounded-lg border-2 border-dashed text-xs text-center ${this.dropAt?.name===null?"border-accent text-accent":"border-line text-muted"}">
          Drop here to pin</div>`:d}
      ${this.isDraft?r`
        <div class="px-3 py-2 mt-1 rounded-lg bg-accent-soft">
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.liveTitle||"New note"}</div>
          <div class="mt-0.5 text-xs text-muted">Now</div>
        </div>`:d}
      ${e.map(s=>r`${this.groupLabel(s.label)}${s.items.map(i=>this.renderRow(i))}`)}`}renderRow(e){const t=e.name===this.activeName,s=(t?this.liveTitle:"")||e.title||"Untitled",i=this.dragName&&e.pinned&&this.dropAt?.name===e.name&&this.dragName!==e.name?`box-shadow: inset 0 ${this.dropAt.pos==="before"?"2px":"-2px"} 0 var(--accent);`:"";return r`
      <div class="group relative select-none rounded-lg ${this.dragName===e.name?"opacity-40":""}"
        style="-webkit-touch-callout:none;${i}"
        data-drop-row=${e.name}
        @pointerdown=${n=>this.onRowPointerDown(n,e.name)}>
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${t?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>{this.suppressClick||this.open(e.name)}}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${s}</div>
          <div class="flex gap-2 mt-0.5 min-w-0 text-xs text-muted">
            <span class="shrink-0">${this.dateLabel(e.modifiedAt)}</span>
            <span class="truncate">${e.preview||"No additional text"}</span>
          </div>
        </button>
        <div class="absolute right-1.5 top-1.5 hidden ${this.dragName?"":"group-hover:flex"} items-center rounded-lg border border-line bg-surface shadow-sm"
          @pointerdown=${n=>n.stopPropagation()}>
          ${nt(e.pinned?"pin-off":"pin",e.pinned?"Unpin":"Pin",()=>this.togglePin(e.name))}
          ${nt("trash-2","Delete",()=>this.trashNote(e.name))}
        </div>
      </div>`}renderHits(){return this.hits===null?r`<div class="px-3 py-6 text-center text-xs text-muted">Searching…</div>`:this.hits.length?r`
      ${this.groupLabel(`${this.hits.length} ${this.hits.length===1?"note":"notes"}`)}
      ${this.hits.map(e=>r`
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${e.name===this.activeName?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>this.open(e.name)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.mark(e.title||"Untitled")}</div>
          ${e.snippet?r`<div class="mt-0.5 text-xs text-muted line-clamp-2 break-words">${this.mark(e.snippet)}</div>`:d}
        </button>`)}`:r`<div class="px-3 py-6 text-center text-sm text-muted">No matches</div>`}renderTrash(){return r`
      <button type="button" class="flex items-center gap-0.5 mt-1 px-2 py-1 rounded-md text-xs text-muted hover:text-ink hover:bg-hover"
        @click=${()=>{this.trashOpen=!1}}>${H("chevron-left","w-3.5 h-3.5")} Notes</button>
      ${this.groupLabel("Recently deleted")}
      <div class="px-3 pb-2 text-xs text-muted">Deleted notes stay here for 30 days.</div>
      ${this.trashItems.length?d:r`<div class="px-3 py-6 text-center text-sm text-muted">Nothing here</div>`}
      ${this.trashItems.map(e=>r`
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-hover">
          <div class="flex-1 min-w-0">
            <div class="text-sm text-ink truncate">${e.title||"Untitled"}</div>
            <div class="text-xs text-muted">${this.dateLabel(e.deletedAt)}</div>
          </div>
          <button type="button" class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
            @click=${()=>void this.restore(e.name)}>Restore</button>
        </div>`)}`}renderNoteHeader(){const e=this.activeName!==null||this.isDraft,t=this.files.some(s=>s.name===this.activeName&&s.pinned);return r`
      <div class="flex items-center gap-0.5 px-3 pt-3 pb-1 shrink-0">
        ${this.wide?nt("layout-sidebar",this.sidebarHidden?"Show notes list":"Hide notes list",()=>this.toggleSidebar()):r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
              @click=${()=>this.back()}>${H("chevron-left")} Notes</button>`}
        <div class="flex-1"></div>
        ${this.activeName?nt(t?"pin-off":"pin",t?"Unpin":"Pin",()=>this.togglePin(this.activeName)):d}
        ${e?nt("trash-2","Delete note",()=>this.trashCurrent()):d}
        ${!this.wide||this.sidebarHidden?nt("square-pen","New note (⌥N)",()=>this.newNote(),"text-accent"):d}
      </div>`}renderToolbar(){this.editorTick;const e=this.editor;if(!e||!this.activeName&&!this.isDraft)return d;const t=(S,W,V,Se,me=!1)=>r`
      <button type="button" title=${W} ?disabled=${me}
        class="flex items-center justify-center w-7 h-7 rounded-md text-[0.8rem] ${V?"bg-hover text-ink font-semibold":me?"text-muted opacity-30":"text-muted hover:text-ink hover:bg-hover"}"
        @pointerdown=${it=>it.preventDefault()}
        @click=${Se}>${S}</button>`,s=r`<span class="w-px h-5 bg-line mx-1 shrink-0"></span>`,i=(S,W,V)=>r`
      <button type="button" title=${V}
        class="flex items-center gap-1 h-7 px-1.5 rounded-md ${this.tbMenu===S?"bg-hover text-ink":"text-muted hover:text-ink hover:bg-hover"}"
        @pointerdown=${Se=>Se.preventDefault()}
        @click=${Se=>{if(this.tbMenu===S){this.tbMenu=null;return}const me=Se.currentTarget.getBoundingClientRect();this.tbAnchor={left:me.left,bottom:me.bottom},this.tbMenu=S}}>
        ${W}${H("chevron-down","w-3 h-3 opacity-60")}</button>`,n=(S,W)=>{if(this.tbMenu!==S||!this.tbAnchor)return d;const V=Math.max(8,Math.min(this.tbAnchor.left,window.innerWidth-216));return r`<div class="fixed z-50 p-1.5 rounded-xl border border-line bg-surface shadow-lg"
        style="left:${V}px;top:${this.tbAnchor.bottom+6}px">${W}</div>`},o=e.isActive("heading",{level:1})?1:e.isActive("heading",{level:2})?2:e.isActive("heading",{level:3})?3:0,a=(S,W,V,Se)=>r`
      <button type="button"
        class="flex items-center gap-2.5 w-48 px-2.5 py-1.5 rounded-md text-left ${(V?o===V:o===0)?"bg-accent-soft text-accent":"text-ink hover:bg-hover"}"
        @pointerdown=${me=>me.preventDefault()}
        @click=${()=>{(V?e.chain().focus().setHeading({level:V}):e.chain().focus().setParagraph()).run(),this.tbMenu=null}}>
        <span class="w-7 shrink-0 text-xs font-semibold ${(V?o===V:o===0)?"text-accent":"text-muted"}">${S}</span>
        <span class=${Se}>${W}</span></button>`,c=e.isActive("orderedList")?"ordered":e.isActive("taskList")?"task":e.isActive("bulletList")?"bullet":null,u=(S,W,V,Se)=>r`
      <button type="button" title=${V}
        class="flex items-center justify-center w-8 h-8 rounded-md ${c===S?"bg-accent-soft text-accent":"text-muted hover:text-ink hover:bg-hover"}"
        @pointerdown=${me=>me.preventDefault()}
        @click=${()=>{Se(),this.tbMenu=null}}>${H(W)}</button>`,h=e.isActive("image"),p=e.isActive({textAlign:"center"})?"center":e.isActive({textAlign:"right"})?"right":e.isActive({textAlign:"justify"})?"justify":h&&e.getAttributes("image").align?String(e.getAttributes("image").align):"left",m=S=>{if(S!=="justify"&&Wl(e,S)){this.tbMenu=null;return}e.chain().focus().setTextAlign(S).run(),this.tbMenu=null},b=(S,W)=>r`
      <button type="button" title=${`Align ${S}`} ?disabled=${h&&S==="justify"}
        class="flex items-center justify-center w-8 h-8 rounded-md ${p===S?"bg-accent-soft text-accent":"text-muted hover:text-ink hover:bg-hover"} ${h&&S==="justify"?"opacity-30":""}"
        @pointerdown=${V=>V.preventDefault()}
        @click=${()=>m(S)}>${H(W)}</button>`,x=e.getAttributes("textStyle").color||null,v=S=>r`
      <button type="button" title=${S.name}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md hover:bg-hover ${x===S.v||!x&&S.v===null?"ring-2 ring-accent":""}"
        @pointerdown=${W=>W.preventDefault()}
        @click=${()=>{(S.v?e.chain().focus().setColor(S.v):e.chain().focus().unsetColor()).run(),this.tbMenu=null}}>
        <span class="flex items-center justify-center w-5 h-5 rounded-full text-[0.7rem] font-semibold ${S.v===null?"border border-line text-muted":"text-white"}"
          style=${S.v?`background:${S.v}`:""}>A</span></button>`,M=e.getAttributes("highlight").color||null,Je=S=>r`
      <button type="button" title=${S?S.name:"None"}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md hover:bg-hover ${(S?M===S.v:!M)?"ring-2 ring-accent":""}"
        @pointerdown=${W=>W.preventDefault()}
        @click=${()=>{(S?e.chain().focus().setHighlight({color:S.v}):e.chain().focus().unsetHighlight()).run(),this.tbMenu=null}}>
        <span class="w-5 h-5 rounded-md ${S?"":"border border-line"}" style=${S?`background:${S.v}`:""}></span></button>`;return r`
      <div data-tb-root class="w-fit max-w-full overflow-x-auto mx-auto my-2 px-2 py-1 rounded-2xl border border-line bg-accent-soft shrink-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
       <div class="flex flex-nowrap items-center gap-0.5 w-max">
        ${t(H("undo-2"),"Undo (⌘Z)",!1,()=>e.chain().focus().undo().run(),!e.can().undo())}
        ${t(H("redo-2"),"Redo (⌘⇧Z)",!1,()=>e.chain().focus().redo().run(),!e.can().redo())}
        ${s}
        <div class="relative shrink-0">
          ${i("heading",r`<span class="text-[0.8rem] font-semibold w-5 text-center">${o?`H${o}`:"P"}</span>`,"Text style")}
          ${n("heading",r`<div class="flex flex-col gap-0.5">
            ${a("P","Normal text",0,"text-sm")}
            ${a("H1","Heading 1",1,"text-xl font-bold")}
            ${a("H2","Heading 2",2,"text-lg font-bold")}
            ${a("H3","Heading 3",3,"text-base font-semibold")}
          </div>`)}
        </div>
        ${s}
        ${t(r`<b>B</b>`,"Bold (⌘B)",e.isActive("bold"),()=>e.chain().focus().toggleBold().run())}
        ${t(r`<i>I</i>`,"Italic (⌘I)",e.isActive("italic"),()=>e.chain().focus().toggleItalic().run())}
        ${t(r`<u>U</u>`,"Underline (⌘U)",e.isActive("underline"),()=>e.chain().focus().toggleUnderline().run())}
        ${t(r`<s>S</s>`,"Strikethrough",e.isActive("strike"),()=>e.chain().focus().toggleStrike().run())}
        ${s}
        <div class="relative shrink-0">
          ${i("color",r`<span class="flex items-center justify-center w-4 h-4 text-[0.8rem] font-bold leading-none" style=${x?`color:${x}`:""}>A</span>`,"Text color")}
          ${n("color",r`<div class="flex flex-wrap gap-1 w-[7rem]">${Yl.map(v)}</div>`)}
        </div>
        <div class="relative shrink-0">
          ${i("highlight",H("highlighter"),"Highlight")}
          ${n("highlight",r`<div class="flex flex-wrap gap-1 w-[7rem]">${[null,...Jl].map(Je)}</div>`)}
        </div>
        ${s}
        <div class="relative shrink-0">
          ${i("align",H(`align-${p}`),"Alignment")}
          ${n("align",r`<div class="flex gap-0.5">
            ${b("left","align-left")}
            ${b("center","align-center")}
            ${b("right","align-right")}
            ${b("justify","align-justify")}
          </div>`)}
        </div>
        ${s}
        <div class="relative shrink-0">
          ${i("list",H(c==="ordered"?"list-ordered":c==="task"?"list-todo":"list"),"Lists")}
          ${n("list",r`<div class="flex gap-0.5">
            ${u("bullet","list","Bullet list",()=>e.chain().focus().toggleBulletList().run())}
            ${u("ordered","list-ordered","Numbered list",()=>e.chain().focus().toggleOrderedList().run())}
            ${u("task","list-todo","Task list",()=>e.chain().focus().toggleTaskList().run())}
          </div>`)}
        </div>
        ${s}
        ${t(H("quote"),"Blockquote",e.isActive("blockquote"),()=>e.chain().focus().toggleBlockquote().run())}
        ${t(H("code"),"Code block",e.isActive("codeBlock"),()=>e.chain().focus().toggleCodeBlock().run())}
        ${t(H("table"),"Insert table",e.isActive("table"),()=>e.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run())}
        ${t(H("image"),"Images (or paste / drop one into the note)",this.mediaOpen,()=>void this.openMedia())}
       </div>
      </div>`}renderEmpty(){return r`
      <div class="h-full flex flex-col items-center justify-center gap-3">
        <div class="text-sm text-muted">${this.files.length?"Pick a note, or start a new one.":"No notes yet."}</div>
        <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          @click=${()=>this.newNote()}>${H("square-pen")} New note</button>
      </div>`}render(){const e=this.activeName!==null||this.isDraft,t=this.wide?!this.sidebarHidden:this.view==="list",s=this.wide||this.view==="note";return r`
      <div class="relative flex flex-1 min-h-0 h-full ${this.dragName?"cursor-grabbing":""}">
        <aside class="${t?"flex":"hidden"} flex-col min-h-0 ${this.wide?"w-64 shrink-0 border-r border-line":"flex-1 min-w-0"}">
          ${this.renderSidebar()}
        </aside>
        <section class="${s?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderNoteHeader()}
          ${this.renderToolbar()}
          ${this.error?r`<div class="px-4 pt-1 text-xs font-mono" style="color:#c87a3a;">notes error: ${this.error}</div>`:d}
          <div class="flex-1 min-h-0 overflow-y-auto">
            <div id="note-host" class="h-full ${e?"":"hidden"}"></div>
            ${!e&&this.initialized?this.renderEmpty():d}
          </div>
        </section>
        ${this.mediaOpen?r`
          <notes-media-library
            @close=${()=>{this.mediaOpen=!1}}
            @insert=${i=>this.onMediaInsert(i.detail)}></notes-media-library>`:d}
        ${this.uploading?r`
          <div class="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface shadow-md text-xs text-ink">
            <span class="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin"></span>
            Uploading ${this.uploading>1?`${this.uploading} images`:"image"}… ${this.uploadPct}%
          </div>`:d}
        ${this.toast?r`
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-xl bg-ink text-surface text-sm shadow-lg whitespace-nowrap">
            <span>${this.toast.text}</span>
            ${this.toast.undo?r`<button type="button" class="font-semibold hover:underline" @click=${this.toast.undo}>Undo</button>`:d}
          </div>`:d}
      </div>
    `}};N([l()],L.prototype,"files",2);N([l()],L.prototype,"trashCount",2);N([l()],L.prototype,"activeName",2);N([l()],L.prototype,"isDraft",2);N([l()],L.prototype,"error",2);N([l()],L.prototype,"initialized",2);N([l()],L.prototype,"wide",2);N([l()],L.prototype,"view",2);N([l()],L.prototype,"sidebarHidden",2);N([l()],L.prototype,"searchQ",2);N([l()],L.prototype,"hits",2);N([l()],L.prototype,"trashOpen",2);N([l()],L.prototype,"trashItems",2);N([l()],L.prototype,"toast",2);N([l()],L.prototype,"tbMenu",2);N([l()],L.prototype,"tbAnchor",2);N([l()],L.prototype,"editorTick",2);N([l()],L.prototype,"liveTitle",2);N([l()],L.prototype,"dragName",2);N([l()],L.prototype,"dropAt",2);N([l()],L.prototype,"mediaOpen",2);N([l()],L.prototype,"uploading",2);N([l()],L.prototype,"uploadPct",2);L=N([k("companion-notes")],L);var Zl=Object.getOwnPropertyDescriptor,ec=(e,t,s,i)=>{for(var n=i>1?void 0:i?Zl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let xn=class extends C{render(){return r`<companion-notes class="flex flex-col flex-1 min-h-0"></companion-notes>`}};xn=ec([k("companion-workspace")],xn);var tc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,zi=(e,t,s,i)=>{for(var n=i>1?void 0:i?sc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&tc(t,s,n),n};let _s=class extends C{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return r`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked?"true":"false"}
        ?disabled=${this.disabled}
        @click=${this.toggle}
        class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${this.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"} ${this.checked?"bg-accent":"bg-line"}"
      >
        <span
          class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${this.checked?"translate-x-[22px]":"translate-x-[2px]"}"
        ></span>
      </button>
    `}};zi([g({type:Boolean})],_s.prototype,"checked",2);zi([g({type:Boolean})],_s.prototype,"disabled",2);_s=zi([k("sc-toggle")],_s);var ic=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,Ft=(e,t,s,i)=>{for(var n=i>1?void 0:i?nc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ic(t,s,n),n};const oc=["alloy","ash","ballad","coral","echo","sage","shimmer","verse"];function rc(e){const t=Ui.map(s=>({id:s.id,label:s.note?`${s.label} (${s.note})`:s.label}));return t.some(s=>s.id===e)||t.push({id:e,label:e}),t}async function ac(e){const i=URL.createObjectURL(e);try{const n=await new Promise((m,b)=>{const x=new Image;x.onload=()=>m(x),x.onerror=()=>b(new Error("could not decode image")),x.src=i}),o=Math.min(1,256/Math.max(n.width,n.height)),a=Math.max(1,Math.round(n.width*o)),c=Math.max(1,Math.round(n.height*o)),u=document.createElement("canvas");u.width=a,u.height=c;const h=u.getContext("2d");if(!h)return await lc(e);h.drawImage(n,0,0,a,c);const p=u.toDataURL("image/webp",.85);return p.startsWith("data:image/webp")?p:u.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(i)}}function lc(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result||"")),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}let gt=class extends C{constructor(){super(...arguments),this.settingsCtl=new Ei(this,f,e=>e.settings),this.vaultRoot="—",this.myLogin="",this.myRole="",this.myName="",this.notifKinds=[]}connectedCallback(){super.connectedCallback(),Object.keys(f.getState().settings).length===0&&f.getState().loadSettings(),$.state().then(e=>{this.vaultRoot=e.vaultRoot||"—"}),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e?.login&&(this.myLogin=e.login,this.myRole=e.role,this.myName=e.displayName||"")}).catch(()=>{}),$.notifications.kinds().then(e=>{this.notifKinds=e.kinds}).catch(()=>{})}async toggleNotif(e,t){this.notifKinds=this.notifKinds.map(s=>s.kind===e?{...s,enabled:t}:s),await $.notifications.mute(e,t).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}displayNameKey(){return this.myLogin?`user:${this.myLogin}:display_name`:"cockpit.display_name"}get currentDisplayName(){return this.settings[this.displayNameKey()]||""}async setDisplayName(e){await f.getState().setSetting(this.displayNameKey(),e.trim())}get settings(){return this.settingsCtl.state.settings}get currentVoice(){return this.settings["cockpit.voice_name"]||"sage"}get currentMentorModel(){return Pt(this.settings["cockpit.mentor_model"])}async setVoice(e){await f.getState().setSetting("cockpit.voice_name",e)}async setMentorModel(e){await f.getState().setSetting("cockpit.mentor_model",e)}get chatHidden(){return this.settings["cockpit.chat_hidden"]==="1"}async setChatHidden(e){await f.getState().setSetting("cockpit.chat_hidden",e?"1":"0")}resetDemo(){if(window.confirm("Reset the demo? This clears your changes and restores the sample cockpit.")){for(let e=localStorage.length-1;e>=0;e--){const t=localStorage.key(e);t&&t.startsWith("mana.demo.")&&localStorage.removeItem(t)}location.reload()}}get currentProfilePic(){const e=this.settings[this.profilePicKey()],t=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return e||t||""}async onProfilePicFile(e){const t=e.target,s=t.files?.[0];if(!s||!s.type.startsWith("image/"))return;const i=await ac(s),{url:n}=await $.uploads.upload(i,!1);await f.getState().setSetting(this.profilePicKey(),n),t.value=""}async clearProfilePic(){await f.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await f.getState().setSetting("cockpit.profile_pic_url","")}renderRow(e,t,s){return r`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${e}</div>
          <div class="text-sm text-muted mt-0.5">${t}</div>
        </div>
        <div class="shrink-0 flex items-center">${s}</div>
      </div>
    `}render(){const e=this.currentVoice;return r`
      <div class="max-w-3xl">
        ${this.renderRow("Vault root","Markdown vault Mana reads from.",r`<code
            class="font-mono text-sm bg-hover text-muted px-3 py-1.5 rounded"
            >${this.vaultRoot}</code
          >`)}
        ${this.renderRow("Name","What Mana calls you. Shows in the sidebar and is used in chat.",r`
            <input
              type="text"
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentDisplayName}
              placeholder=${this.myName||"Your name"}
              @change=${t=>void this.setDisplayName(t.target.value)}
            />
          `)}
        ${this.renderRow("Profile picture","Shown in the cockpit header. Upload an image to override the default avatar.",r`
            <div class="flex items-center gap-3">
              ${this.currentProfilePic?r`<img
                    src=${this.currentProfilePic}
                    alt="Profile"
                    class="w-10 h-10 rounded-full object-cover border border-line"
                  />`:r`<span class="w-10 h-10 rounded-full bg-hover grid place-items-center text-muted text-xs">none</span>`}
              <label
                class="inline-flex items-center px-3 py-1.5 rounded border border-line text-sm text-ink cursor-pointer hover:bg-hover"
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change=${t=>void this.onProfilePicFile(t)}
                />
              </label>
              ${this.currentProfilePic?r`<button
                    type="button"
                    class="text-sm text-muted hover:text-ink"
                    @click=${()=>void this.clearProfilePic()}
                  >Clear</button>`:d}
            </div>
          `)}
        ${this.renderRow("Mana model","Model that powers text chat. Applies to the next message — no restart needed.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentMentorModel}
              @change=${t=>this.setMentorModel(t.target.value)}
            >
              ${rc(this.currentMentorModel).map(t=>r`<option value=${t.id} ?selected=${t.id===this.currentMentorModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Voice","OpenAI Realtime voice for spoken replies. Restart cockpit after change.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[140px]"
              .value=${e}
              @change=${t=>this.setVoice(t.target.value)}
            >
              ${oc.map(t=>r`<option value=${t} ?selected=${t===e}>${t}</option>`)}
            </select>
          `)}
        ${this.notifKinds.map(t=>this.renderRow(t.label,t.description,r`
              <sc-toggle
                .checked=${t.enabled}
                @sc-change=${s=>void this.toggleNotif(t.kind,s.detail.checked)}
              ></sc-toggle>
            `))}
        ${r`
              ${this.renderRow("Chat panel","Turn this off to explore the tools on their own. This is a live demo with no model connected, so the chat is only a preview.",r`
                  <sc-toggle
                    .checked=${!this.chatHidden}
                    @sc-change=${t=>void this.setChatHidden(!t.detail.checked)}
                  ></sc-toggle>
                `)}
              ${this.renderRow("Reset demo","Wipe your changes and restore the sample cockpit — the goals, letters, finances, and lists it ships with.",r`
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-1.5 rounded border border-line text-sm text-ink cursor-pointer hover:bg-hover"
                    @click=${()=>this.resetDemo()}
                  >Reset</button>
                `)}
            `}
      </div>
    `}};Ft([l()],gt.prototype,"vaultRoot",2);Ft([l()],gt.prototype,"myLogin",2);Ft([l()],gt.prototype,"myRole",2);Ft([l()],gt.prototype,"myName",2);Ft([l()],gt.prototype,"notifKinds",2);gt=Ft([k("settings-general")],gt);var cc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,Ut=(e,t,s,i)=>{for(var n=i>1?void 0:i?dc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&cc(t,s,n),n};function hc(e){return new Date(e*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")}let bt=class extends C{constructor(){super(...arguments),this.file="",this.open=!1,this.loading=!1,this.history=[],this.anchor=null,this.handleDocClick=e=>{if(!this.open)return;const t=e.target;t?.closest("[data-history-wrap]")||t?.closest("[data-history-pop]")||(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleDocClick,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleDocClick,!0)}async toggle(e){if(e.stopPropagation(),this.open){this.open=!1;return}if(!this.file)return;const s=e.currentTarget.getBoundingClientRect();this.anchor={top:s.bottom+6,right:window.innerWidth-s.right},this.loading=!0,this.open=!0;try{this.history=await $.agentDocs.history(this.file)}catch{this.history=[]}finally{this.loading=!1}}pick(e){this.open=!1,this.dispatchEvent(new CustomEvent("preview",{detail:{sha:e},bubbles:!0,composed:!0}))}renderPop(){if(!this.open||!this.anchor)return d;const e=`position:fixed;top:${this.anchor.top}px;right:${this.anchor.right}px;z-index:50;`;let t;return this.loading?t=r`<li class="px-3 py-2 text-xs text-muted">loading…</li>`:this.history.length===0?t=r`<li class="px-3 py-2 text-xs text-muted italic">
        no versions yet
      </li>`:t=this.history.map(s=>r`
          <li
            class="px-3 py-2 cursor-pointer hover:bg-hover border-b border-line last:border-b-0"
            @click=${()=>this.pick(s.sha)}
          >
            <div class="text-sm text-ink truncate">${s.message}</div>
            <div class="text-[10px] font-mono text-muted mt-0.5">
              ${s.shortSha} · ${hc(s.timestamp)}
            </div>
          </li>
        `),r`
      <div
        data-history-pop
        style=${e}
        class="bg-surface border border-line rounded-md shadow-lg w-72 max-h-80 overflow-y-auto"
      >
        <ul>${t}</ul>
      </div>
    `}render(){return r`
      <span data-history-wrap class="inline-flex">
        <button
          type="button"
          class="w-7 h-7 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover"
          title="Version history"
          aria-label="Version history"
          @click=${e=>void this.toggle(e)}
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
          </svg>
        </button>
        ${this.renderPop()}
      </span>
    `}};Ut([g()],bt.prototype,"file",2);Ut([l()],bt.prototype,"open",2);Ut([l()],bt.prototype,"loading",2);Ut([l()],bt.prototype,"history",2);Ut([l()],bt.prototype,"anchor",2);bt=Ut([k("version-history-popover")],bt);var uc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,Fe=(e,t,s,i)=>{for(var n=i>1?void 0:i?pc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&uc(t,s,n),n};let De=class extends C{constructor(){super(...arguments),this.files=[],this.current=null,this.content="",this.loadedContent="",this.mode="read",this.savedAt=null,this.savedFlash=!1,this.previewSha=null,this.previewMeta=""}connectedCallback(){super.connectedCallback(),this.loadFiles()}get dirty(){return this.current!=null&&this.previewSha==null&&this.content!==this.loadedContent}notifyDirty(){this.dispatchEvent(new CustomEvent("dirty-change",{detail:{dirty:this.dirty},bubbles:!0,composed:!0}))}updated(){this.notifyDirty()}async loadFiles(){try{this.files=await $.agentDocs.list()}catch{this.files=[]}}async openFile(e){if(!(this.dirty&&!confirm("Discard unsaved changes?")))try{const{content:t}=await $.agentDocs.read(e);this.current=e,this.content=t,this.loadedContent=t,this.mode="read",this.savedAt=null,this.savedFlash=!1,this.previewSha=null,this.previewMeta=""}catch{}}async save(){if(!(!this.current||!this.dirty))try{await $.agentDocs.save(this.current,this.content),this.loadedContent=this.content,this.savedAt=new Date().toLocaleTimeString("en-CA",{hour12:!1}),this.savedFlash=!0,setTimeout(()=>{this.savedFlash=!1},1200)}catch{this.savedAt="save failed"}}setMode(e){this.mode=e}onTextareaInput(e){this.content=e.target.value}async onPreviewVersion(e){if(!this.current)return;const t=e.detail.sha;try{const{content:s}=await $.agentDocs.at(this.current,t);this.previewSha=t,this.content=s,this.mode="read",this.previewMeta=t.slice(0,7)}catch{}}cancelPreview(){this.current&&(this.previewSha=null,this.previewMeta="",this.openFile(this.current))}async restorePreview(){if(!this.previewSha||!this.current)return;const e=this.previewSha.slice(0,7);if(confirm(`Restore "${this.current}" to version ${e}? Creates a new commit; previous content stays in history.`))try{await $.agentDocs.restore(this.current,this.previewSha),this.previewSha=null,this.previewMeta="",await this.openFile(this.current)}catch{this.savedAt="restore failed"}}currentResettable(){return this.current?!!this.files.find(e=>e.name===this.current)?.resettable:!1}async resetToDefault(){if(this.current&&confirm(`Reset "${this.current}" to the owner's default? Your current text is overwritten. (You can still recover it from version history.)`))try{await $.agentDocs.reset(this.current);const{content:e}=await $.agentDocs.read(this.current);this.content=e,this.loadedContent=e,this.mode="read",this.previewSha=null,this.previewMeta="",this.savedAt=new Date().toLocaleTimeString("en-CA",{hour12:!1}),this.savedFlash=!0,setTimeout(()=>{this.savedFlash=!1},1200),await this.loadFiles()}catch{this.savedAt="reset failed"}}renderEditorBody(){if(this.mode==="read"){const e=this.content?E.parse(this.content):"";return r`<div
        class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none"
      >
        ${K(e)}
      </div>`}return r`
      <textarea
        spellcheck="false"
        class="flex-1 w-full bg-surface text-ink font-mono text-sm p-5 border-0 focus:outline-none resize-none"
        .value=${this.content}
        ?disabled=${this.previewSha!=null}
        @input=${e=>this.onTextareaInput(e)}
      ></textarea>
    `}renderEditor(){return this.current?r`
      <div class="flex-1 flex flex-col min-h-0">
        <div
          class="flex items-center gap-3 px-5 py-3 border-b border-line bg-bg"
        >
          <span class="font-mono text-sm text-ink"
            >${this.current}${this.dirty?" •":""}</span
          >
          ${this.savedAt?r`<span
                class="text-xs text-muted transition-opacity ${this.savedFlash?"opacity-100":"opacity-60"}"
                >${this.savedAt}</span
              >`:d}
          <span class="flex-1"></span>
          <div class="inline-flex bg-hover rounded-full p-0.5 text-xs">
            <button
              type="button"
              class="px-3 py-1 rounded-full transition-colors ${this.mode==="read"?"bg-surface text-ink font-semibold":"text-muted hover:text-ink"}"
              @click=${()=>this.setMode("read")}
            >
              Read
            </button>
            <button
              type="button"
              class="px-3 py-1 rounded-full transition-colors ${this.mode==="edit"?"bg-surface text-ink font-semibold":"text-muted hover:text-ink"}"
              ?disabled=${this.previewSha!=null}
              @click=${()=>this.setMode("edit")}
            >
              Edit
            </button>
          </div>
          <version-history-popover
            .file=${this.current}
            @preview=${e=>void this.onPreviewVersion(e)}
          ></version-history-popover>
          ${this.currentResettable()?r`<button
                type="button"
                class="px-3 py-1 rounded text-xs border border-line text-muted hover:text-warn hover:border-warn transition-colors"
                title="Overwrite your copy with the owner's current version. Saved in version history so you can restore."
                @click=${()=>void this.resetToDefault()}
              >
                Reset to default
              </button>`:d}
        </div>
        ${this.previewSha?r`
              <div
                class="flex items-center justify-between gap-3 px-5 py-2 bg-warn/10 border-b border-line text-sm"
              >
                <span class="text-ink"
                  >Previewing version
                  <code class="font-mono text-xs">${this.previewMeta}</code></span
                >
                <span class="flex items-center gap-2">
                  <button
                    type="button"
                    class="px-3 py-1 rounded text-xs border border-line text-muted hover:text-ink hover:border-ink"
                    @click=${()=>this.cancelPreview()}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="px-3 py-1 rounded text-xs bg-ink text-bg hover:opacity-90"
                    @click=${()=>void this.restorePreview()}
                  >
                    Restore this version
                  </button>
                </span>
              </div>
            `:d}
        ${this.renderEditorBody()}
        ${this.mode==="edit"&&this.previewSha==null?r`
              <div
                class="flex justify-end gap-2 px-5 py-3 border-t border-line bg-bg"
              >
                <button
                  type="button"
                  class="px-4 py-1.5 rounded bg-ink text-bg text-sm hover:opacity-90 disabled:opacity-40"
                  ?disabled=${!this.dirty}
                  @click=${()=>void this.save()}
                >
                  Save
                </button>
              </div>
            `:d}
      </div>
    `:r`
        <div class="flex-1 grid place-items-center text-muted text-sm">
          select a file
        </div>
      `}render(){return r`
      <div
        class="grid grid-cols-[220px_1fr] gap-0 border border-line rounded-lg overflow-hidden h-[calc(100vh-150px)] min-h-[400px]"
      >
        <ul
          class="border-r border-line bg-bg overflow-y-auto py-2"
        >
          ${this.files.length===0?r`<li class="px-4 py-2 text-xs text-muted italic">
                no docs
              </li>`:d}
          ${this.files.map(e=>r`
              <li
                class="px-4 py-2 cursor-pointer text-sm transition-colors ${this.current===e.name?"bg-hover text-ink font-semibold":"text-ink hover:bg-hover"}"
                @click=${()=>void this.openFile(e.name)}
              >
                <div class="truncate">${e.name}</div>
                <div class="text-[10px] text-muted mt-0.5">
                  ${Math.round(e.sizeBytes/1024)} KB
                </div>
              </li>
            `)}
        </ul>
        ${this.renderEditor()}
      </div>
    `}};Fe([l()],De.prototype,"files",2);Fe([l()],De.prototype,"current",2);Fe([l()],De.prototype,"content",2);Fe([l()],De.prototype,"loadedContent",2);Fe([l()],De.prototype,"mode",2);Fe([l()],De.prototype,"savedAt",2);Fe([l()],De.prototype,"savedFlash",2);Fe([l()],De.prototype,"previewSha",2);Fe([l()],De.prototype,"previewMeta",2);De=Fe([k("agent-docs-editor")],De);var mc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,Ue=(e,t,s,i)=>{for(var n=i>1?void 0:i?fc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&mc(t,s,n),n};const gc="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",bc="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",xc=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let Ee=class extends C{constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/memory/status").then(s=>s.ok?s.json():null),fetch("/api/memory/files").then(s=>s.ok?s.json():null)]);e&&(this.status=e),t&&(this.files=t.files)}catch{}}async toggle(e){const t=e.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:t})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let e=0;e<12;e++)await new Promise(t=>setTimeout(t,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(e){try{const t=await fetch(`/api/memory/files/${encodeURIComponent(e.relPath)}`);if(t.ok){const s=await t.json();this.editing=!1,this.viewing={title:this.prettyName(e),relPath:e.relPath,content:s.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(e){if(!e)return"never";const t=Number(e);return Number.isFinite(t)?new Date(t*1e3).toLocaleString():"never"}statusLine(e){if(!e)return null;if(e.startsWith("error"))return`Last run hit a problem: ${e.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(e))return"Last run found nothing new to add.";const t=/(\d+)B/.exec(e);return t&&t[1]?`Last run added ${(Number(t[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const e=this.status;if(!e)return r`<p class="text-muted text-xs">Loading…</p>`;const t=this.viewing!=null;return r`
      <div class="space-y-5 text-sm pb-24">
        <section class="max-w-2xl space-y-4">
          <div class="flex items-center gap-2">
            <h2 class="text-base font-semibold">Memory</h2>
            <button
              type="button"
              class="text-muted hover:text-ink text-sm leading-none"
              @click=${()=>this.aboutOpen=!0}
              aria-label="About memory"
              title="About memory"
            >ⓘ</button>
          </div>

          <div class="rounded border border-line p-4 space-y-3">
            <label class="flex items-center gap-3">
              <input
                type="checkbox"
                .checked=${e.enabled}
                @change=${this.toggle}
                class="w-4 h-4"
              />
              <span class="font-medium">Keep my memory up to date each night</span>
            </label>
            <div class="text-xs text-muted space-y-0.5 pl-7">
              <div>Last reflection: ${this.formatTs(e.lastRun)}</div>
              ${this.statusLine(e.lastStatus)?r`<div>${this.statusLine(e.lastStatus)}</div>`:d}
            </div>
            <div class="pl-7">
              <button
                type="button"
                class="px-3 py-1 rounded border border-line text-xs hover:bg-hover ${this.running?"opacity-50 pointer-events-none":""}"
                @click=${this.runNow}
              >
                ${this.running?"Reflecting…":"Reflect now"}
              </button>
              <span class="text-xs text-muted ml-2">Run it now instead of waiting for tonight.</span>
            </div>
          </div>
        </section>

        <section class="space-y-2">
          <div class="flex items-center gap-2">
            <h3 class="text-sm font-semibold">What Mana remembers</h3>
            <button
              type="button"
              class="text-muted hover:text-ink text-sm leading-none"
              @click=${()=>this.aboutNotesOpen=!0}
              aria-label="About these notes"
              title="About these notes"
            >ⓘ</button>
          </div>
          ${this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
                <div class="lg:grid lg:grid-cols-[minmax(240px,340px)_1fr] lg:gap-4 lg:items-start">
                  <!-- File list (left). On mobile, hidden while a preview is open. -->
                  <div class="${t?"hidden lg:block":"block"} lg:pr-1">
                    ${this.renderGroups()}
                  </div>
                  <!-- Preview (right on desktop, full-height card on mobile). -->
                  <div class="${t?"block":"hidden lg:flex"} lg:flex flex-col border border-line rounded mt-4 lg:mt-0 lg:overflow-hidden h-[calc(100dvh-220px)] lg:sticky lg:top-4 lg:h-[calc(100dvh-160px)]">
                    ${this.renderPreview()}
                  </div>
                </div>
              `}
        </section>

        <sc-dialog
          label="About memory"
          ?open=${this.aboutOpen}
          @sc-hide=${()=>this.aboutOpen=!1}
        >
          <p class="text-muted leading-relaxed">${gc}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${bc}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
      <div class="space-y-4">
        ${xc.map(e=>{const t=this.files.filter(s=>s.group===e.key).sort((s,i)=>i.modifiedAt-s.modifiedAt);return t.length===0?d:r`
            <div>
              <div class="text-ink font-medium">${e.label}</div>
              <div class="text-xs text-muted mb-1.5">${e.blurb}</div>
              <ul class="divide-y divide-line border border-line rounded">
                ${t.map(s=>r`
                    <li>
                      <button
                        type="button"
                        class="w-full text-left flex items-center justify-between px-3 py-2 hover:bg-hover ${this.viewing?.relPath===s.relPath?"bg-hover":""}"
                        @click=${()=>this.openFile(s)}
                      >
                        <span class="text-ink">${this.prettyName(s)}</span>
                        <span class="text-xs text-muted shrink-0 ml-3">${this.formatTs(String(s.modifiedAt))}</span>
                      </button>
                    </li>
                  `)}
              </ul>
            </div>
          `})}
      </div>
    `}prettyName(e){const t=/^observations-(\d{4})-(\d{2})\.md$/.exec(e.name);if(t&&t[1]&&t[2])return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(t[2])-1]??t[2]} ${t[1]}`;const s=e.name.replace(/\.md$/,"").replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)}renderPreview(){if(!this.viewing)return r`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Select a note to read it.
        </div>
      `;const e=this.editing;return r`
      <header class="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-line shrink-0">
        <span class="text-sm font-semibold text-ink truncate">${this.viewing.title}</span>
        <div class="flex items-center gap-2 shrink-0">
          ${e?d:r`<button
                type="button"
                class="text-xs text-muted hover:text-ink"
                @click=${this.startEdit}
              >Edit</button>`}
          ${e?d:r`<button
                type="button"
                class="lg:hidden text-muted hover:text-ink text-lg leading-none px-1"
                @click=${this.closeViewer}
                aria-label="Close preview"
              >×</button>`}
        </div>
      </header>
      ${e?r`
            <textarea
              class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink text-xs font-mono leading-relaxed resize-none outline-none"
              .value=${this.draft}
              @input=${t=>this.draft=t.target.value}
            ></textarea>
            <div class="flex items-center justify-end gap-2 px-4 py-3 border-t border-line shrink-0">
              <button
                type="button"
                class="px-3 py-1 rounded border border-line text-xs hover:bg-hover"
                @click=${()=>this.editing=!1}
              >Cancel</button>
              <button
                type="button"
                class="btn-primary ${this.saving?"opacity-50 pointer-events-none":""}"
                @click=${this.saveEdit}
              >${this.saving?"Saving…":"Save"}</button>
            </div>
          `:r`
            <div class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none">
              ${K(E.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};Ue([l()],Ee.prototype,"status",2);Ue([l()],Ee.prototype,"files",2);Ue([l()],Ee.prototype,"running",2);Ue([l()],Ee.prototype,"viewing",2);Ue([l()],Ee.prototype,"editing",2);Ue([l()],Ee.prototype,"draft",2);Ue([l()],Ee.prototype,"saving",2);Ue([l()],Ee.prototype,"aboutOpen",2);Ue([l()],Ee.prototype,"aboutNotesOpen",2);Ee=Ue([k("settings-memory")],Ee);var vc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,Bt=(e,t,s,i)=>{for(var n=i>1?void 0:i?yc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&vc(t,s,n),n};let xt=class extends C{constructor(){super(...arguments),this.data=null,this.loading=!0,this.viewing=null,this.selectedPath=null,this.filter="all",this.nav=new ro(this,{selector:"[data-path]",keyAttr:"data-path",scope:()=>this.renderRoot,getKey:()=>this.selectedPath,setKey:e=>{e&&this.viewFile(e)}})}connectedCallback(){super.connectedCallback(),this.refresh()}filteredFiles(){return this.data?this.data.files.filter(e=>this.filter==="loaded"?e.loaded!=="no":this.filter==="unloaded"?e.loaded==="no":!0):[]}async refresh(){this.loading=!0;try{const e=await fetch("/api/context-files");e.ok&&(this.data=await e.json())}catch{}this.loading=!1}async viewFile(e){this.selectedPath=e;try{const t=await fetch(`/api/context-files/${encodeURIComponent(e)}`);if(t.ok){const s=await t.json();this.viewing={relPath:s.relPath,content:s.content}}}catch{}}fmtBytes(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(2)} MB`}fmtTokens(e){return e<1e3?`${e}`:`${(e/1e3).toFixed(1)}k`}fmtDate(e){const t=new Date(e*1e3),i=(Date.now()-t.getTime())/36e5;return i<24?`${Math.round(i)}h`:i<168?`${Math.round(i/24)}d`:t.toISOString().slice(5,10)}renderPreview(){if(!this.viewing)return r`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Click a file to preview its rendered content.
        </div>
      `;const e=E.parse(this.viewing.content,{async:!1});return r`
      <header class="px-4 py-2.5 border-b border-line flex items-center justify-between shrink-0">
        <span class="font-mono text-xs text-ink truncate">${this.viewing.relPath}</span>
        <button
          type="button"
          class="lg:hidden text-muted hover:text-ink ml-2 shrink-0"
          @click=${()=>{this.viewing=null,this.selectedPath=null}}
          aria-label="Close preview"
        >×</button>
      </header>
      <div class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none">
        ${K(e)}
      </div>
    `}render(){if(this.loading&&!this.data)return r`<div class="text-muted text-sm">Loading context map…</div>`;if(!this.data)return r`<div class="text-muted text-sm">Couldn't load context files.</div>`;const e=this.filteredFiles(),t=new Map;for(const o of e){const a=t.get(o.dir)??[];a.push(o),t.set(o.dir,a)}const s=[...t.keys()].sort((o,a)=>{const c=(t.get(o)??[]).some(h=>h.loaded==="always"),u=(t.get(a)??[]).some(h=>h.loaded==="always");return c!==u?c?-1:1:o.localeCompare(a)}),i=this.data.totals,n=this.viewing!=null;return r`
      <div class="space-y-4">
        <header>
          <h2 class="text-lg font-semibold text-ink mb-1">Context files</h2>
          <p class="text-sm text-muted leading-relaxed">
            Every <code class="text-ink">.md</code> file in your vault scope
            (<code class="text-ink">${this.data.scope}</code>). The
            <span class="text-ink font-medium">Loaded</span> badge means the
            mentor sees this file at session start, every conversation.
          </p>
        </header>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Files</div>
            <div class="text-ink font-semibold">${i.fileCount}</div>
          </div>
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Total</div>
            <div class="text-ink font-semibold">${this.fmtBytes(i.totalBytes)}</div>
            <div class="text-xs text-muted">~${this.fmtTokens(i.totalTokensApprox)} tok</div>
          </div>
          <div class="rounded border border-line px-3 py-2 bg-hover/30">
            <div class="text-xs text-muted">Always loaded</div>
            <div class="text-ink font-semibold">${this.fmtBytes(i.alwaysLoadedBytes)}</div>
            <div class="text-xs text-muted">~${this.fmtTokens(i.alwaysLoadedTokensApprox)} tok / turn</div>
          </div>
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Reaching mentor</div>
            <div class="text-ink font-semibold">
              ${i.totalBytes?Math.round(i.alwaysLoadedBytes/i.totalBytes*100):0}%
            </div>
            <div class="text-xs text-muted">of vault bytes</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${["all","loaded","unloaded"].map(o=>r`
              <button
                type="button"
                class="px-2 py-0.5 rounded border text-xs transition-colors ${this.filter===o?"border-ink text-ink bg-hover":"border-line text-muted hover:text-ink hover:border-ink"}"
                @click=${()=>{this.filter=o}}
              >
                ${o==="all"?"All":o==="loaded"?"Loaded":"Unloaded"}
              </button>
            `)}
          <span class="ml-auto text-[10px] text-muted hidden md:inline">↑↓ to cycle</span>
          <button
            type="button"
            class="text-xs text-muted hover:text-ink"
            @click=${()=>void this.refresh()}
          >
            Refresh
          </button>
        </div>

        <div class="lg:grid lg:grid-cols-[minmax(260px,360px)_1fr] lg:gap-4 lg:h-[calc(100dvh-340px)] lg:min-h-[420px]">
          <!-- File list -->
          <div class="${n?"hidden lg:block":"block"} lg:overflow-y-auto lg:border lg:border-line lg:rounded">
            ${s.map(o=>r`
                <section class="lg:px-0">
                  <h3 class="text-[10px] font-mono text-muted px-2 pt-3 pb-1 sticky top-0 bg-bg lg:bg-bg z-10">
                    ${o}
                  </h3>
                  <div class="lg:divide-y lg:divide-line border-t border-line lg:border-t-0">
                    ${(t.get(o)??[]).map(a=>{const c=this.selectedPath===a.relPath;return r`
                        <button
                          type="button"
                          data-path=${a.relPath}
                          class="w-full text-left px-2 py-1.5 hover:bg-hover transition-colors flex items-center gap-2 focus:outline-none ${c?"bg-hover":""}"
                          @click=${()=>void this.viewFile(a.relPath)}
                        >
                          <span class="font-mono text-xs text-ink truncate flex-1 min-w-0">${a.name}</span>
                          ${a.loaded==="always"?r`<span class="text-[10px] px-1 py-0 rounded bg-ink/10 text-ink font-medium shrink-0">L</span>`:a.loaded==="persona"?r`<span class="text-[10px] px-1 py-0 rounded border border-line text-muted shrink-0">P</span>`:d}
                          <span class="text-[10px] text-muted tabular-nums shrink-0 w-14 text-right">${this.fmtBytes(a.bytes)}</span>
                          <span class="text-[10px] text-muted tabular-nums shrink-0 w-8 text-right">${this.fmtDate(a.modifiedAt)}</span>
                        </button>
                      `})}
                  </div>
                </section>
              `)}
          </div>

          <!-- Preview card -->
          <div class="${n?"block":"hidden lg:flex"} lg:flex flex-col border border-line rounded mt-4 lg:mt-0 lg:overflow-hidden h-[calc(100dvh-200px)] lg:h-auto">
            ${this.renderPreview()}
          </div>
        </div>
      </div>
    `}};Bt([l()],xt.prototype,"data",2);Bt([l()],xt.prototype,"loading",2);Bt([l()],xt.prototype,"viewing",2);Bt([l()],xt.prototype,"selectedPath",2);Bt([l()],xt.prototype,"filter",2);xt=Bt([k("settings-context")],xt);var wc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,ms=(e,t,s,i)=>{for(var n=i>1?void 0:i?kc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&wc(t,s,n),n};const Kt=[{id:"general",label:"General"},{id:"context",label:"Context"},{id:"memory",label:"Memory"},{id:"agent-docs",label:"Agents"}];let Lt=class extends C{constructor(){super(...arguments),this.section="general",this.active="general",this.editorDirty=!1,this.mobileView="list",this.handleKeydown=e=>{if(e.key==="Escape"){this.requestClose();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)||this.active==="context")return;const s=Kt.findIndex(o=>o.id===this.active);if(s<0)return;const i=e.key==="ArrowDown"?Math.min(s+1,Kt.length-1):Math.max(s-1,0),n=Kt[i];i!==s&&n&&(e.preventDefault(),this.active=n.id,this.mobileView="section")},this.onDirtyChange=e=>{const t=e.detail;this.editorDirty=!!t?.dirty}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.editorDirty&&!confirm("Discard unsaved changes?")||this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?r`<settings-general></settings-general>`:this.active==="agent-docs"?r`<agent-docs-editor
        @dirty-change=${this.onDirtyChange}
      ></agent-docs-editor>`:this.active==="memory"?r`<settings-memory></settings-memory>`:this.active==="context"?r`<settings-context></settings-context>`:d}render(){const e=Kt.find(s=>s.id===this.active)?.label??"",t=this.mobileView==="list";return r`
      <div class="h-[100dvh] flex flex-col bg-bg text-ink">
        <header
          class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line shrink-0"
        >
          <div class="flex items-center gap-2 text-base min-w-0">
            <!-- Mobile back button when viewing a section -->
            ${t?"":r`
              <button
                type="button"
                class="lg:hidden flex items-center gap-1 text-muted hover:text-ink mr-1 shrink-0"
                @click=${()=>{this.mobileView="list"}}
                aria-label="Back"
              >
                ‹
              </button>
            `}
            <span class="font-semibold text-ink shrink-0">Settings</span>
            ${r`
              <span class="text-muted mx-1">·</span>
              <span class="text-muted truncate">${e}</span>
            `}
          </div>
          <button
            type="button"
            class="w-7 h-7 grid place-items-center rounded border border-line text-muted hover:text-ink hover:border-ink hover:bg-hover shrink-0"
            aria-label="Close settings"
            @click=${()=>this.requestClose()}
          >
            ×
          </button>
        </header>

        <div class="flex-1 min-h-0 lg:grid lg:grid-cols-[200px_1fr]">
          <!-- Nav: full-width on mobile when on list view; sidebar on desktop -->
          <nav class="
            border-line py-4 px-3 space-y-1
            ${t?"block":"hidden"}
            lg:block lg:border-r lg:overflow-y-auto
          ">
            ${Kt.map(s=>r`
                <button
                  type="button"
                  class="w-full text-left px-3 py-2.5 lg:py-2 rounded text-sm transition-colors ${this.active===s.id?"bg-hover text-ink font-semibold":"text-muted hover:bg-hover hover:text-ink"}"
                  @click=${()=>{this.active=s.id,this.mobileView="section"}}
                >
                  ${s.label}
                </button>
              `)}
          </nav>
          <!-- Content: hidden on mobile when on list view -->
          <section class="
            overflow-y-auto px-5 sm:px-8 py-6
            ${t?"hidden":"block"}
            lg:block
          ">
            ${this.renderActive()}
          </section>
        </div>
      </div>
    `}};ms([g()],Lt.prototype,"section",2);ms([l()],Lt.prototype,"active",2);ms([l()],Lt.prototype,"editorDirty",2);ms([l()],Lt.prototype,"mobileView",2);Lt=ms([k("settings-page")],Lt);var $c=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Us=(e,t,s,i)=>{for(var n=i>1?void 0:i?Cc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&$c(t,s,n),n};const Sc=.018,Tc=.01,Ic=600,Dc=250,Ec=300,vn=16e3;let ns=class extends C{constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.audioCtx=null,this.mic=null,this.source=null,this.processor=null,this.threadId=null,this.starting=!1,this.ttsSource=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.srcRate=48e3,this.muted=!1,this.processing=!1,this.onToggle=()=>{this.audioCtx?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.audioCtx&&this.stopTalk()},this.speakQueue=[],this.pumpPromise=null}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.audioCtx&&this.stopTalk()}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const e=this.audioCtx!==null;try{window.speechSynthesis.cancel()}catch{}this.speakQueue=[];try{this.ttsSource?.stop(),this.ttsSource=null}catch{}try{this.processor?.disconnect()}catch{}try{this.source?.disconnect()}catch{}try{await this.audioCtx?.close()}catch{}if(this.mic)for(const t of this.mic.getTracks())t.stop();this.processor=null,this.source=null,this.audioCtx=null,this.mic=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.muted=!1,this.processing=!1,this.speaking=null,this.status!=="error"&&(this.status="idle"),e&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}onAudio(e){if(this.muted||this.processing)return;const t=e.inputBuffer.getChannelData(0),s=new Float32Array(t),i=s.length/this.srcRate*1e3;let n=0;for(let a=0;a<s.length;a++)n+=s[a]*s[a];const o=Math.sqrt(n/s.length);if(!this.inSpeech){for(this.preroll.push(s),this.prerollMs+=i;this.prerollMs>Ec&&this.preroll.length>1;){const a=this.preroll.shift();this.prerollMs-=a.length/this.srcRate*1e3}o>=Sc&&(this.inSpeech=!0,this.speechMs=0,this.silenceMs=0,this.utterance=[...this.preroll],this.preroll=[],this.prerollMs=0,this.speaking="user");return}if(this.utterance.push(s),this.speechMs+=i,o<Tc?this.silenceMs+=i:this.silenceMs=0,this.silenceMs>=Ic){const a=this.utterance,c=this.speechMs-this.silenceMs;this.inSpeech=!1,this.utterance=[],this.speechMs=0,this.silenceMs=0,c>=Dc&&this.finishUtterance(a)}}async finishUtterance(e){this.processing=!0,this.muted=!0,this.speaking="thinking",this.ackBlip();try{const t=Mc(Ac(Pc(e),this.srcRate,vn),vn),{text:s}=await $.voice.stt(t),i=(s||"").trim();if(!i||/^[\s.,!?-]*$/.test(i))return;this.dispatchTranscript({role:"user",text:i});let n="",o="";for await(const c of Co({threadId:this.threadId,message:i,kind:"voice",voice:!0}))if(c.type==="thread")c.threadId!==this.threadId&&(this.threadId=c.threadId);else if(c.type==="text")n+=c.text,o=this.enqueueCompleteSentences(o+c.text);else if(c.type==="ops")this.refreshOps([c.action]);else if(c.type==="error")throw new Error(c.error);for(const c of _c(o))this.enqueueSpeech(c);const a=n.trim();a&&this.dispatchTranscript({role:"mentor",text:a}),await this.drainSpeech()}catch(t){const s=t instanceof Error?t.message:String(t);this.errorMessage=`voice: ${s}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage})}finally{this.processing=!1,this.muted=!1,this.status==="active"&&(this.speaking="user")}}enqueueCompleteSentences(e){const t=e.match(/[^.!?…]+[.!?…]+["')\]]*\s*/g);if(!t)return e;const s=t.join("");let i="";for(const n of t)i+=n,i.trim().length>=20&&(this.enqueueSpeech(i.trim()),i="");return i+e.slice(s.length)}enqueueSpeech(e){e&&(this.speakQueue.push(e),this.pumpPromise||(this.pumpPromise=this.pumpSpeech().finally(()=>{this.pumpPromise=null;const t=this.speakQueue.shift();t&&this.audioCtx&&this.enqueueSpeech(t)})))}async pumpSpeech(){let e=null;for(;this.audioCtx;){if(!e){const n=this.speakQueue.shift();if(n===void 0)break;e={text:n,blob:this.fetchTts(n)}}const t=e,s=await t.blob,i=this.speakQueue.shift();if(e=i!==void 0?{text:i,blob:this.fetchTts(i)}:null,!this.audioCtx)return;s?await this.playWav(s):await this.speakFallback(t.text)}}async drainSpeech(){for(;this.pumpPromise;)await this.pumpPromise}ackBlip(){const e=this.audioCtx;if(e)try{const t=e.currentTime,s=e.createOscillator(),i=e.createGain();s.type="sine",s.frequency.setValueAtTime(660,t),s.frequency.setValueAtTime(880,t+.09),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.08,t+.02),i.gain.exponentialRampToValueAtTime(1e-4,t+.18),s.connect(i),i.connect(e.destination),s.start(t),s.stop(t+.2)}catch{}}async fetchTts(e){try{return await $.voice.tts(e)}catch{return null}}async playWav(e){const t=this.audioCtx;if(!t)return;const s=await t.decodeAudioData(await e.arrayBuffer());await new Promise(i=>{const n=t.createBufferSource();n.buffer=s,n.connect(t.destination),this.ttsSource=n;let o=!1,a;const c=()=>{o||(o=!0,a&&clearTimeout(a),this.ttsSource===n&&(this.ttsSource=null),i())};n.onended=c,a=setTimeout(c,s.duration*1e3+1500),this.speaking="mentor",n.start()})}speakFallback(e){return new Promise(t=>{let s=!1;const i=()=>{s||(s=!0,t())};try{const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.onstart=()=>{this.speaking="mentor"},n.onend=i,n.onerror=i,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n),setTimeout(i,Math.min(6e4,1500+e.length*80))}catch{i()}})}refreshOps(e){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:e}));const t=e.find(s=>s.week)?.week;document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:t},bubbles:!0,composed:!0}))}dispatchTranscript(e){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:e,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return d;const e=this.status==="connecting"?"starting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="thinking"?"thinking…":this.speaking==="mentor"?"speaking…":"listening…",t=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent animate-pulse";return r`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${t}"></span>
        <span>${e}</span>
      </div>
    `}};Us([l()],ns.prototype,"status",2);Us([l()],ns.prototype,"errorMessage",2);Us([l()],ns.prototype,"speaking",2);ns=Us([k("voice-controller")],ns);function _c(e){const t=e.replace(/\s+/g," ").trim();if(!t)return[];const s=t.match(/[^.!?…]+[.!?…]+["')\]]*\s*|[^.!?…]+$/g)??[t],i=[];let n="";for(const o of s)n+=o,n.trim().length>=20&&(i.push(n.trim()),n="");return n.trim()&&i.push(n.trim()),i}function Pc(e){let t=0;for(const n of e)t+=n.length;const s=new Float32Array(t);let i=0;for(const n of e)s.set(n,i),i+=n.length;return s}function Ac(e,t,s){if(s>=t)return e;const i=t/s,n=Math.floor(e.length/i),o=new Float32Array(n);for(let a=0;a<n;a++){const c=a*i,u=Math.floor(c),h=Math.min(u+1,e.length-1),p=c-u;o[a]=e[u]*(1-p)+e[h]*p}return o}function Mc(e,t){const s=new ArrayBuffer(44+e.length*2),i=new DataView(s),n=(a,c)=>{for(let u=0;u<c.length;u++)i.setUint8(a+u,c.charCodeAt(u))};n(0,"RIFF"),i.setUint32(4,36+e.length*2,!0),n(8,"WAVE"),n(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,t,!0),i.setUint32(28,t*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),n(36,"data"),i.setUint32(40,e.length*2,!0);let o=44;for(let a=0;a<e.length;a++,o+=2){const c=Math.max(-1,Math.min(1,e[a]));i.setInt16(o,c<0?c*32768:c*32767,!0)}return new Blob([s],{type:"audio/wav"})}class Ao{constructor(t,s){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=i=>{this.armedId=i},this.disarm=()=>{this.armedId=null},this.isDragging=i=>this.armedId===i||this.draggingId===i,this.onDragStart=(i,n)=>{if(this.armedId!==n){i.preventDefault();return}this.draggingId=n,i.dataTransfer&&(i.dataTransfer.setData(this.type,String(n)),i.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(i,n,o)=>{if(!i.dataTransfer?.types.includes(this.type))return;i.preventDefault(),i.dataTransfer.dropEffect="move";const a=i.currentTarget.getBoundingClientRect(),c=i.clientY<a.top+a.height/2?"before":"after";(this.overId!==n||this.overPos!==c)&&(this.overId=n,this.overPos=c,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(i,n,o)=>{const a=i.dataTransfer?.getData(this.type),c=a?Number(a):NaN,u=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(c))return;i.preventDefault();const h=u==="after"?o+1:o;this.onReorder(c,h)},this.dropClass=i=>this.overId!==i?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=t,this.type=s.type,this.onReorder=s.onReorder,t.addController(this)}hostDisconnected(){this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var Oc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,ne=(e,t,s,i)=>{for(var n=i>1?void 0:i?Lc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Oc(t,s,n),n};const Rc=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let z=class extends C{constructor(){super(...arguments),this.items=[],this.loading=!0,this.input="",this.quantity="",this.adding=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.cols=(()=>{const e=Number(localStorage.getItem("cockpit.grocery_cols"));return e===2||e===3?e:1})(),this.sortMode=localStorage.getItem("cockpit.grocery_sort")==="type"?"type":"az",this.settingsOpen=!1,this.expiryEnabled=localStorage.getItem("cockpit.grocery_expiry")!=="0",this.list=localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery",this.poll=null,this.drag=new Ao(this,{type:"text/x-grocery-id",onReorder:(e,t)=>this.reorder(e,t)}),this._closeMenus=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null),this.settingsOpen&&(this.settingsOpen=!1)}}setList(e){if(this.list!==e){this.list=e,this.draftActive=!1,this.items=[],this.loading=!0;try{localStorage.setItem("cockpit.shopping_tab",e)}catch{}this.refresh()}}toggleSort(){this.sortMode=this.sortMode==="az"?"type":"az";try{localStorage.setItem("cockpit.grocery_sort",this.sortMode)}catch{}}toggleExpiry(){this.expiryEnabled=!this.expiryEnabled;try{localStorage.setItem("cockpit.grocery_expiry",this.expiryEnabled?"1":"0")}catch{}}inferCategory(e){const t=e.toLowerCase(),s=(...i)=>i.some(n=>t.includes(n));return s("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":s("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":s("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":s("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":s("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":s("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}setCols(e){this.cols=e;try{localStorage.setItem("cockpit.grocery_cols",String(e))}catch{}}cycleCols(){const e=window.matchMedia("(min-width: 1024px)").matches?3:2;this.setCols(this.cols%e+1)}colsIcon(){const e=[];for(let t=1;t<this.cols;t++){const s=3+18*t/this.cols;e.push(qo`<line x1="${s}" y1="4" x2="${s}" y2="20" />`)}return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      ${e}
    </svg>`}gearIcon(){return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>`}renderSettings(){return r`<div
      class="absolute right-0 top-full mt-1 z-30 w-56 p-2 rounded-lg border border-line bg-surface shadow-lg"
      @click=${e=>e.stopPropagation()}
    >
      <div class="flex items-center justify-between gap-3 px-1.5 py-1 text-xs text-ink">
        <span>Expiry dates</span>
        <button
          type="button"
          role="switch"
          aria-checked=${this.expiryEnabled}
          class="relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${this.expiryEnabled?"bg-accent":"bg-line"}"
          @click=${this.toggleExpiry}
        >
          <span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${this.expiryEnabled?"translate-x-3.5":"translate-x-0.5"}"></span>
        </button>
      </div>
      <p class="px-1.5 pt-0.5 text-[10px] text-muted/70 leading-snug">Show freshness pills on pantry items.</p>
    </div>`}connectedCallback(){super.connectedCallback(),this.refresh(),document.addEventListener("click",this._closeMenus),this.poll=setInterval(()=>{this.editingId===null&&this.editingExpiryId===null&&this.emojiPickerFor===null&&!this.draftActive&&!this.drag.active&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._closeMenus),this.poll&&clearInterval(this.poll)}async refresh(){try{const e=await fetch(`/api/grocery?list=${this.list}`);e.ok&&(this.items=(await e.json()).items)}catch{}this.loading=!1}async addItem(){const e=this.input.trim();if(!(!e||this.adding)){this.adding=!0;try{const t={name:e,list:this.list};this.quantity.trim()&&(t.quantity=this.quantity.trim()),await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.input="",this.quantity="",await this.refresh()}finally{this.adding=!1}}}async setStatus(e,t){await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:t})}),await this.refresh()}async rename(e,t){this.editingId=null;const s=t.trim();!s||s===e.name||(await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:s})}),await this.refresh())}async commitName(e,t,s){await this.rename(e,t),s&&(this.draftActive=!0,this.draftValue="",this.updateComplete.then(()=>this.focusDraft()))}focusDraft(){this.renderRoot?.querySelector(".grocery-draft")?.focus()}async commitDraft(e){const t=this.draftValue.trim();if(!t){this.draftActive=!1;return}this.draftValue="",await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,list:this.list})}),await this.refresh(),e?(this.draftActive=!0,this.updateComplete.then(()=>this.focusDraft())):this.draftActive=!1}async reorder(e,t){await fetch(`/api/grocery/${e}/reorder`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({targetIndex:t})}),await this.refresh()}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(e){const t=e.emoji,s=t?this.iconUrl(t):null,i=s?r`<img src=${s} alt="" class="w-[18px] h-[18px] select-none" draggable="false" />`:t?r`<span class="text-[15px] leading-none">${t}</span>`:r`<span class="text-muted/40 text-[13px] leading-none">🛒</span>`;return r`<button
      type="button"
      class="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px]"
      title="Change icon"
      @dblclick=${n=>{n.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}
    >${i}</button>`}async pickEmoji(e,t){this.emojiPickerFor=null,await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({emoji:t||null})}),await this.refresh()}renderEmojiPalette(e){return r`<div
      class="absolute left-0 top-full mt-1 z-30 w-56 p-1.5 rounded-lg border border-line bg-surface shadow-lg flex flex-wrap gap-0.5"
      @click=${t=>t.stopPropagation()}
    >
      ${Rc.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
          @click=${()=>void this.pickEmoji(e,t)}>${t}</button>`)}
      <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>void this.pickEmoji(e,"")}>none</button>
    </div>`}async removeItem(e){await fetch(`/api/grocery/${e.id}`,{method:"DELETE"}),await this.refresh()}onAddKey(e){e.key==="Enter"&&(e.preventDefault(),this.addItem())}async setExpiryDays(e,t){this.editingExpiryId=null;const s=Math.round(Number(t));if(!Number.isFinite(s))return;const i=e.bought_at?Math.floor(Date.now()/1e3-e.bought_at)/86400:0,n=Math.max(0,Math.round(i)+s);await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({shelf_life_days:n})}),await this.refresh()}fmtDuration(e){const t=Math.abs(e);return t<30?`${e}d`:t<365?`${Math.round(e/30)}m`:`${Math.round(e/365)}y`}hourglass(){return r`<svg class="hidden" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 2h12a1 1 0 0 1 0 2h-1v2.5a5 5 0 0 1-1.9 3.92L13 12l2.1 1.58A5 5 0 0 1 17 17.5V20h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1v-2.5a5 5 0 0 1 1.9-3.92L11 12 8.9 10.42A5 5 0 0 1 7 6.5V4H6a1 1 0 0 1 0-2z" />
    </svg>`}expiryInput(e,t){return r`<span class="shrink-0 inline-flex items-center gap-1 text-[10px] text-ink">
      ${this.hourglass()}
      <input
        type="number"
        class="w-10 bg-transparent border-b border-line text-[11px] outline-none text-right"
        .value=${t!=null?String(t):""}
        autofocus
        @keydown=${s=>{s.key==="Enter"?(s.preventDefault(),this.setExpiryDays(e,s.target.value)):s.key==="Escape"&&(this.editingExpiryId=null)}}
        @blur=${s=>void this.setExpiryDays(e,s.target.value)}
      />d
    </span>`}renderExpiry(e){if(this.list==="buy"||!this.expiryEnabled||e.status!=="pantry"||!e.bought_at)return d;if(this.editingExpiryId===e.id){const i=e.shelf_life_days?Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(e,i)}if(!e.shelf_life_days)return d;const t=Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400);if(t>3)return d;const s=t<0?"text-red-600 bg-red-500/10":"text-amber-600 bg-amber-500/10";return r`<button
      type="button"
      class="ml-auto shrink-0 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full leading-none ${s}"
      title="Expiry — click to edit"
      @click=${()=>{this.editingExpiryId=e.id}}
    >${this.hourglass()}${this.fmtDuration(t)}</button>`}renderCheck(e){const t=e.status==="pantry",s=t?"shopping":"pantry";return r`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
        style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
        aria-label=${t?"Move back to shopping":"Mark bought"}
        title=${t?"Bought — click to move back":"Mark bought"}
        @click=${()=>void this.setStatus(e,s)}
      >
        ${t?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8.5 L6.5 12 L13 4.5" />
            </svg>`:d}
      </button>
    `}renderItem(e,t,s=!1){const i=this.editingId===e.id;return r`
      <li
        data-row-key=${`grocery:${e.id}`}
        draggable=${this.drag.isDragging(e.id)?"true":"false"}
        @dragstart=${n=>this.drag.onDragStart(n,e.id)}
        @dragend=${this.drag.onDragEnd}
        @dragover=${n=>this.drag.onDragOver(n,e.id,t)}
        @dragleave=${this.drag.onDragLeave}
        @drop=${n=>this.drag.onDrop(n,e.id,t)}
        class="group relative flex items-center gap-2 pl-4 pr-1 hover:bg-hover break-inside-avoid ${this.drag.dropClass(e.id)}"
      >
        <span
          class="hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100 select-none leading-none"
          style="font-size:14px;letter-spacing:-1px;"
          title="Drag to reorder"
          @mousedown=${()=>this.drag.arm(e.id)}
          @mouseup=${this.drag.disarm}
        >⠿</span>
        ${this.renderCheck(e)}
        <span class="relative shrink-0">
          ${this.renderIcon(e)}
          ${this.emojiPickerFor===e.id?this.renderEmojiPalette(e):d}
        </span>
        <!-- Content carries the divider, so the line is inset (starts after the
             checkbox) — iOS-list style. Subtle on both mobile and desktop. -->
        <div class="flex-1 min-w-0 flex items-center gap-2 py-2 pr-6 border-b border-line/50">
          ${i?r`<input
                class="flex-1 bg-transparent text-sm outline-none"
                .value=${e.name}
                autofocus
                @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.commitName(e,n.target.value,s)):n.key==="Escape"&&(this.editingId=null)}}
                @blur=${n=>void this.rename(e,n.target.value)}
              />`:r`<span class="flex-1 min-w-0 text-sm text-ink truncate cursor-text" @click=${()=>{this.editingId=e.id}}>${e.name}</span>`}
          ${e.quantity?r`<span class="text-xs text-muted shrink-0 ml-auto">${e.quantity}</span>`:d}
          ${this.renderExpiry(e)}
        </div>
        <button
          type="button"
          class="absolute right-0 top-1/2 -translate-y-1/2 shrink-0 opacity-40 lg:opacity-0 lg:group-hover:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
          aria-label="Remove (consumed)"
          title="Consumed — remove"
          @click=${()=>void this.removeItem(e)}
        >×</button>
      </li>
    `}renderDraftRow(){return r`
      <li class="flex items-center gap-2 pl-4 pr-1 break-inside-avoid">
        <span class="hidden lg:inline-flex shrink-0 w-[14px]"></span>
        <span class="shrink-0 rounded-full border border-line" style="width:16px;height:16px;border-width:1.5px;"></span>
        <div class="flex-1 min-w-0 py-2 border-b border-line/50">
          <input
            class="grocery-draft w-full bg-transparent text-sm outline-none placeholder:text-muted/60"
            placeholder="new item…"
            .value=${this.draftValue}
            @input=${e=>{this.draftValue=e.target.value}}
            @keydown=${e=>{e.key==="Enter"?(e.preventDefault(),this.commitDraft(!0)):e.key==="Escape"&&(this.draftActive=!1,this.draftValue="")}}
            @blur=${()=>void this.commitDraft(!1)}
          />
        </div>
      </li>
    `}colsClass(){return this.cols===3?"columns-2 lg:columns-3 gap-x-5":this.cols===2?"columns-2 gap-x-5":""}renderSection(e,t,s,i=!1){const n=i&&this.draftActive;return r`
      <section class="rounded-xl border border-line bg-surface">
        <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">${e} <span class="text-muted/60">${t.length||""}</span></h3>
        ${t.length===0&&!n?r`<p class="px-4 pb-3 text-xs text-muted/70">${s}</p>`:r`<ul class="pb-2 ${this.colsClass()}">
              ${t.map((o,a)=>this.renderItem(o,a,i&&a===t.length-1))}
              ${n?this.renderDraftRow():d}
            </ul>`}
      </section>
    `}renderSectionGrouped(e,t,s,i=!1){const n=new Map;for(const c of t){const u=this.inferCategory(c.name);n.has(u)||n.set(u,[]),n.get(u).push(c)}for(const c of n.values())c.sort((u,h)=>u.name.localeCompare(h.name));const o=z.CATEGORY_ORDER.filter(c=>n.has(c)).concat([...n.keys()].filter(c=>!z.CATEGORY_ORDER.includes(c))),a=i&&this.draftActive;return r`
      <section class="rounded-xl border border-line bg-surface">
        <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">${e} <span class="text-muted/60">${t.length||""}</span></h3>
        ${t.length===0&&!a?r`<p class="px-4 pb-3 text-xs text-muted/70">${s}</p>`:r`<div class="pb-2 ${this.colsClass()}">
              ${o.map(c=>r`<div class="break-inside-avoid">
                <div class="px-4 pt-2.5 pb-0.5 text-[10px] font-semibold text-muted/50 select-none">${c}</div>
                <ul>${n.get(c).map((u,h)=>this.renderItem(u,h,!1))}</ul>
              </div>`)}
              ${a?r`<ul>${this.renderDraftRow()}</ul>`:d}
            </div>`}
      </section>
    `}render(){const e=o=>this.sortMode==="az"?[...o].sort((a,c)=>a.name.localeCompare(c.name)):o,t=e(this.items.filter(o=>o.status==="shopping")),s=e(this.items.filter(o=>o.status==="pantry")),i=this.sortMode==="type"&&this.list==="grocery",n=this.list==="buy"?{todo:"To Buy",done:"Bought",todoEmpty:"Nothing to buy yet. Add something you want to get.",doneEmpty:"Nothing bought yet. Check items off as you get them."}:{todo:"Shopping",done:"Pantry",todoEmpty:"Nothing to buy. Add an item, or ask the grocery keeper.",doneEmpty:"Nothing at home yet. Check items off as you buy them."};return r`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <div class="flex items-center gap-1" role="tablist">
            ${["grocery","buy"].map(o=>r`<button
              type="button"
              role="tab"
              aria-selected=${this.list===o}
              class="px-2.5 py-1 rounded-full text-sm font-medium transition-colors ${this.list===o?"text-ink bg-hover":"text-muted hover:text-ink hover:bg-hover"}"
              @click=${()=>this.setList(o)}
            >${o==="grocery"?"Grocery":"To Buy"}</button>`)}
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="grid place-items-center min-w-7 h-7 px-2 rounded-full text-ink bg-hover transition-colors text-[10px] font-semibold leading-none"
              title="Sort — tap to switch A–Z / Type"
              aria-label="Toggle sort between A to Z and by type"
              @click=${this.toggleSort}
            >${this.sortMode==="type"?"Type":"A–Z"}</button>
            <button
              type="button"
              class="grid place-items-center w-7 h-7 rounded-full text-muted hover:text-ink hover:bg-hover transition-colors"
              title="Columns — tap to change"
              aria-label="Change column count"
              @click=${this.cycleCols}
            >${this.colsIcon()}</button>
            ${this.list==="grocery"?r`<div class="relative">
                  <button
                    type="button"
                    class="grid place-items-center w-7 h-7 rounded-full ${this.settingsOpen?"text-ink bg-hover":"text-muted hover:text-ink hover:bg-hover"} transition-colors"
                    title="Settings"
                    aria-label="Grocery settings"
                    @click=${o=>{o.stopPropagation(),this.settingsOpen=!this.settingsOpen}}
                  >${this.gearIcon()}</button>
                  ${this.settingsOpen?this.renderSettings():d}
                </div>`:d}
          </div>
        </header>

        <div class="px-4 py-2.5 shrink-0 flex gap-2">
          <input
            type="text"
            placeholder="add an item…"
            class="w-1/2 min-w-0 px-3 py-1.5 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink"
            .value=${this.input}
            @input=${o=>{this.input=o.target.value}}
            @keydown=${this.onAddKey}
            ?disabled=${this.adding}
          />
          <input
            type="text"
            placeholder="qty"
            class="w-16 px-2 py-1.5 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink"
            .value=${this.quantity}
            @input=${o=>{this.quantity=o.target.value}}
            @keydown=${this.onAddKey}
            ?disabled=${this.adding}
          />
          <button
            type="button"
            class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${this.adding?"opacity-50 pointer-events-none":""}"
            @click=${()=>void this.addItem()}
          >${this.adding?"…":"Add"}</button>
        </div>

        <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
          ${i?this.renderSectionGrouped(n.todo,this.items.filter(o=>o.status==="shopping"),n.todoEmpty,!0):this.renderSection(n.todo,t,n.todoEmpty,!0)}
          ${i?this.renderSectionGrouped(n.done,this.items.filter(o=>o.status==="pantry"),n.doneEmpty):this.renderSection(n.done,s,n.doneEmpty)}
        </div>
      </div>
    `}};z.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];ne([l()],z.prototype,"items",2);ne([l()],z.prototype,"loading",2);ne([l()],z.prototype,"input",2);ne([l()],z.prototype,"quantity",2);ne([l()],z.prototype,"adding",2);ne([l()],z.prototype,"editingId",2);ne([l()],z.prototype,"editingExpiryId",2);ne([l()],z.prototype,"emojiPickerFor",2);ne([l()],z.prototype,"draftActive",2);ne([l()],z.prototype,"draftValue",2);ne([l()],z.prototype,"cols",2);ne([l()],z.prototype,"sortMode",2);ne([l()],z.prototype,"settingsOpen",2);ne([l()],z.prototype,"expiryEnabled",2);ne([l()],z.prototype,"list",2);z=ne([k("grocery-section")],z);const ki=new Map,Xs=new Map;function Ps(e){return ki.get(e)}function Mo(e){const t=ki.get(e);if(t!=null)return Promise.resolve(t);let s=Xs.get(e);return s||(s=fetch(`/api/inbox/${e}`).then(i=>i.ok?i.json():null).then(i=>{const n=i?.message.body??null;return n!=null&&ki.set(e,n),n}).catch(()=>null).finally(()=>Xs.delete(e)),Xs.set(e,s)),s}var Nc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Oe=(e,t,s,i)=>{for(var n=i>1?void 0:i?jc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Nc(t,s,n),n};const Fc=new Set(["Hamsal","infra","mana","nudge","office-keeper","retellai"]),Zs="/office-avatars/",Oo="office.scene.cache.v1";let Dt=(()=>{try{const e=localStorage.getItem(Oo);return e?JSON.parse(e):null}catch{return null}})();const Lo="office.scene.layout.v1",yn={x:.5,y:.12},Bs=(()=>{const e={pos:{},youPos:{...yn},room:"team",view:"floor"};try{const t=localStorage.getItem(Lo);if(!t)return e;const s=JSON.parse(t);return{pos:s.pos??{},youPos:s.youPos??{...yn},room:s.room==="backlog"?"backlog":"team",view:s.view==="list"?"list":"floor"}}catch{return e}})(),Ro=new Map(Object.entries(Bs.pos).map(([e,t])=>[Number(e),t]));let $i=Bs.youPos,Ci=Bs.room,Si=Bs.view;function gs(){try{localStorage.setItem(Lo,JSON.stringify({pos:Object.fromEntries(Ro),youPos:$i,room:Ci,view:Si}))}catch{}}const wn=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`,Uc=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,Bc=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="8" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>`;let J=class extends C{constructor(){super(...arguments),this.apps=[],this.messages=[],this.activity=null,this.loading=!0,this.me=null,this.room=Ci,this.view=Si,this.search="",this.searchOpen=!1,this.pos=Ro,this.youPos=$i,this.dragId=null}connectedCallback(){super.connectedCallback(),Dt&&(this.apps=Dt.apps,this.messages=Dt.messages,this.activity=Dt.activity,this.loading=!1),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3),this.unsubSettings=_(this,f,e=>e.settings),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e&&(this.me=e)}).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer),this.unsubSettings?.()}youAvatar(){const e=f.getState().settings,t=this.me,s=t?e[`user:${t.login}:profile_pic_url`]:"",i=t?.role==="owner"?e["cockpit.profile_pic_url"]:"",n=s||i||t?.profilePic||"";if(n){try{localStorage.setItem("office.you.avatar",n)}catch{}return n}try{return localStorage.getItem("office.you.avatar")||`${Zs}you.svg`}catch{return`${Zs}you.svg`}}async refresh(){try{const[t,s,i]=await Promise.all([fetch("/api/office?lean=1"),fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);t.ok&&(this.apps=(await t.json()).apps),s.ok&&(this.messages=(await s.json()).messages),i.ok&&(this.activity=await i.json())}catch{}Dt={apps:this.apps.map(t=>{const s={...t};return delete s.docs,s}),messages:this.messages,activity:this.activity};try{localStorage.setItem(Oo,JSON.stringify(Dt))}catch{}this.loading=!1}get rows(){const e=this.activity,t=new Set(e?.live??[]),s=new Set;for(const a of e?.quarantined??[]){const c=this.messages.find(u=>String(u.id)===a.id);c&&s.add(c.to_agent)}const i=new Map;for(const a of this.messages){if(a.read_at!=null)continue;const c=/^branch ready:\s*(\S+)/i.exec(a.subject||"");c?.[1]&&i.set(a.from_agent,c[1])}const n=this.apps.map(a=>{const c=this.messages.filter(x=>x.from_agent===a.name||x.to_agent===a.name).sort((x,v)=>v.created_at-x.created_at),u=i.has(a.name),h=t.has(a.name)?"working":s.has(a.name)||u?"attention":"idle";let p=null,m=null;if(e)for(const[x,v]of Object.entries(e.handled))v.to===a.name&&(p==null||v.at>p)&&(p=v.at,m=v.summary??`Answered #${x}`);const b=c[0];if(b){const x=b.created_at*1e3;(p==null||x>p)&&(p=x,m=`${b.from_agent===a.name?"→ "+b.to_agent:"← "+b.from_agent}: ${b.subject||"(no subject)"}`)}return h==="working"?m="Working now":u&&(m=`Branch ready — review ${i.get(a.name)}`),{app:a,state:h,lastAt:p,blurb:m,messages:c}}),o={attention:0,working:1,idle:2};return n.sort((a,c)=>o[a.state]!==o[c.state]?o[a.state]-o[c.state]:(c.lastAt??0)-(a.lastAt??0))}ago(e){if(e==null)return"—";const t=Math.max(0,Math.floor((Date.now()-e)/1e3));return t<60?`${t}s`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}avatarSrc(e){return Fc.has(e.name)?`${Zs}${e.name}.svg`:e.icon||null}get teamRows(){return this.rows.filter(e=>!J.BACKLOG_STATUS.has(e.app.status))}get backlogRows(){return this.rows.filter(e=>J.BACKLOG_STATUS.has(e.app.status))}setRoom(e){this.room=e,Ci=e,gs()}setView(e){this.view=e,Si=e,gs()}matchesSearch(e){const t=this.search.trim().toLowerCase();return t?(f.getState().settings[`office.label.${e.app.id}`]||e.app.name).toLowerCase().includes(t)||(e.app.purpose??"").toLowerCase().includes(t):!0}openSearch(){this.searchOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector("#office-search")?.focus())}closeSearch(){this.search="",this.searchOpen=!1}defaultPos(e,t){const s=J.FLANK_X,i=e%s.length,n=Math.floor(e/s.length);return{x:s[i]??.5,y:.3+n*.132}}startDrag(e,t,s){if(e.target.closest("[data-no-drag]"))return;e.preventDefault(),this.dragId=t;const i={x:e.clientX,y:e.clientY},n=t==="you"?{...this.youPos}:{...this.pos.get(t)??this.fallbackPos(t)};let o=!1;const a=u=>{const h=s.getBoundingClientRect();(Math.abs(u.clientX-i.x)>3||Math.abs(u.clientY-i.y)>3)&&(o=!0);const p=Math.min(.94,Math.max(.06,n.x+(u.clientX-i.x)/h.width)),m=Math.min(.94,Math.max(.06,n.y+(u.clientY-i.y)/h.height));t==="you"?(this.youPos={x:p,y:m},$i=this.youPos):this.pos.set(t,{x:p,y:m}),this.requestUpdate()},c=()=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",c);const u=this.dragId;this.dragId=null,!o&&typeof u=="number"&&this.dispatchEvent(new CustomEvent("open-app",{detail:u,bubbles:!0,composed:!0})),o&&gs(),this.requestUpdate()};window.addEventListener("pointermove",a),window.addEventListener("pointerup",c)}fallbackPos(e){const t=this.rows,s=t.findIndex(i=>i.app.id===e);return this.defaultPos(Math.max(0,s),t.length)}async markMsgRead(e){try{await fetch(`/api/inbox/${e}/read`,{method:"POST"})}catch{}this.refresh()}sendToSeat(e){this.pos.delete(e.app.id),gs();const t=this.messages.find(s=>s.from_agent===e.app.name&&s.read_at==null&&/^branch ready:/i.test(s.subject||""));t?this.markMsgRead(t.id):this.requestUpdate()}renderAgent(e,t,s){const{app:i,state:n}=e,o=n==="working"?"outline-emerald-500":n==="attention"?"outline-amber-500":"outline-transparent",a=n==="working"?r`<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>`:n==="attention"?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>`:null,c=this.avatarSrc(i),u=c?r`<img src=${c} width="50" height="50" alt=""
          style="image-rendering:pixelated;" class="rounded-[9px] outline outline-2 outline-offset-2 ${o} bg-surface" />`:r`<span class="w-[50px] h-[50px] rounded-[9px] grid place-items-center bg-ink/10 text-ink text-base font-semibold outline outline-2 outline-offset-2 ${o}">${i.name.charAt(0).toUpperCase()}</span>`,h=this.pos.has(i.id);return r`
      <div
        style="position:absolute;left:${t.x*100}%;top:${t.y*100}%;width:118px;margin:-46px 0 0 -59px;cursor:grab;touch-action:none;z-index:${s?4:2};${this.dragId===i.id?"":"transition:left .6s cubic-bezier(.4,0,.2,1),top .6s cubic-bezier(.4,0,.2,1);"}"
        @pointerdown=${p=>this.startDrag(p,i.id,p.currentTarget.parentElement)}
      >
        <div class="flex flex-col items-center">
          <div class="mb-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-surface border border-line shadow-sm">
            ${a??d}<span class="text-ink">${f.getState().settings[`office.label.${i.id}`]||i.name}</span>
          </div>
          ${u}
          ${s||h?r`<button data-no-drag type="button"
                class="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] bg-surface border border-line text-muted hover:text-ink shadow-sm"
                @click=${p=>{p.stopPropagation(),this.sendToSeat(e)}}>↩ seat</button>`:d}
        </div>
      </div>`}renderStrip(){const e=this.activity,t=this.teamRows,s=t.filter(c=>c.state==="working").length,i=t.filter(c=>c.state==="attention").length,n=t.length-s-i,o=s>0?{cls:"bg-emerald-500 animate-pulse",label:`${s} working now`}:e?.paused?{cls:"bg-ink/30",label:"Dispatcher paused"}:e?.stale?{cls:"bg-amber-500",label:"Dispatcher asleep"}:{cls:"bg-ink/30",label:"Quiet"},a=[];return i>0&&a.push(`${i} waiting on you`),s>0&&a.push(`${s} working`),a.push(`${n} idle`),r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${o.cls}"></span>
        <span class="text-xs text-ink font-medium">${o.label}</span>
        ${e?.paused?r`<button data-no-drag type="button" title="Delete the PAUSED sentinel and let the loop spawn agents again"
              class="px-1.5 py-0.5 rounded text-[10px] font-medium border border-line text-muted hover:text-ink hover:bg-ink/5"
              @click=${()=>this.setPaused(!1)}>Resume</button>`:d}
        <span class="ml-auto text-[11px] text-muted hidden sm:inline">${a.join(" · ")} · last tick ${this.ago(e?.lastTickAt??null)} ago</span>
        ${this.renderControls()}
      </div>`}async setPaused(e){try{await fetch("/api/bus/pause",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({paused:e})})}catch{}this.refresh()}renderControls(){const e=this.searchOpen?r`<div class="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-1.5 py-0.5 text-muted">
          ${wn}
          <input id="office-search" type="text" placeholder="Search agents…" .value=${this.search}
            class="w-28 bg-transparent text-[11px] text-ink outline-none placeholder:text-muted"
            @input=${s=>{this.search=s.target.value}}
            @keydown=${s=>{s.key==="Escape"&&this.closeSearch()}} />
          <button type="button" title="Clear" class="hover:text-ink" @click=${()=>this.closeSearch()}>✕</button>
        </div>`:r`<button type="button" title="Search" class="p-1.5 rounded-md text-muted hover:text-ink hover:bg-ink/5"
          @click=${()=>this.openSearch()}>${wn}</button>`,t=(s,i,n)=>r`
      <button type="button" title=${n}
        class="p-1 rounded ${this.view===s?"bg-ink/10 text-ink":"text-muted hover:text-ink"}"
        @click=${()=>this.setView(s)}>${i}</button>`;return r`
      <div class="flex items-center gap-1.5">
        ${e}
        <div class="inline-flex items-center rounded-md border border-line bg-surface p-0.5">
          ${t("floor",Uc,"Floor view")}${t("list",Bc,"List view")}
        </div>
      </div>`}renderRoomSwitcher(e,t){const s=(i,n,o)=>r`
      <button type="button"
        class="px-2.5 py-0.5 rounded-full transition-colors ${this.room===i?"bg-emerald-600 text-white":"text-muted hover:text-ink"}"
        @click=${()=>this.setRoom(i)}>${n} ${o}</button>`;return r`
      <div class="absolute left-1/2 -translate-x-1/2 bottom-3 z-[3] inline-flex items-center gap-0.5 rounded-full bg-surface border border-line shadow-card p-0.5 text-[11px] font-medium">
        ${s("team","Team",e)}${s("backlog","Backlog",t)}
      </div>`}renderList(e){const t=e.filter(s=>this.matchesSearch(s));return t.length?r`
      <div class="absolute inset-0 overflow-y-auto">
        <ul class="divide-y divide-line pb-16">${t.map(s=>this.renderListItem(s))}</ul>
      </div>`:r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">${this.search?"No agents match your search.":"Nothing here."}</p>`}renderListItem(e){const{app:t,state:s}=e,i=this.avatarSrc(t),n=f.getState().settings[`office.label.${t.id}`]||t.name,o=s==="working"?"bg-emerald-500 animate-pulse":s==="attention"?"bg-amber-500":"bg-ink/20";return r`
      <li>
        <button type="button" class="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-ink/[0.04]"
          @click=${()=>this.dispatchEvent(new CustomEvent("open-app",{detail:t.id,bubbles:!0,composed:!0}))}>
          ${i?r`<img src=${i} width="34" height="34" alt="" style="image-rendering:pixelated;" class="rounded-lg bg-surface shrink-0" />`:r`<span class="w-[34px] h-[34px] rounded-lg grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${t.name.charAt(0).toUpperCase()}</span>`}
          <span class="min-w-0 flex-1">
            <span class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full shrink-0 ${o}"></span>
              <span class="text-sm text-ink font-medium truncate">${n}</span>
            </span>
            <span class="block text-[11px] text-muted truncate">${e.blurb||t.purpose||"—"}</span>
          </span>
          ${e.lastAt?r`<span class="text-[11px] text-muted shrink-0">${this.ago(e.lastAt)}</span>`:d}
        </button>
      </li>`}render(){const e=this.room==="team",t=this.teamRows,s=this.backlogRows,i=e?t:s,n=e?t.filter(p=>p.state==="attention"):[],o=n.length,a=s.filter(p=>p.app.status==="idea"),c=s.filter(p=>p.app.status==="archived"),u=.24+Math.ceil(a.length/4)*.15+.05,h=new Map;return a.forEach((p,m)=>h.set(p.app.id,{x:(m%4+1)/5,y:.24+Math.floor(m/4)*.15})),c.forEach((p,m)=>h.set(p.app.id,{x:(m%4+1)/5,y:u+Math.floor(m/4)*.15})),r`
      <div class="flex flex-col h-full">
        ${this.renderStrip()}
        ${this.view==="list"?r`<div class="relative flex-1 min-h-0 bg-bg">
              ${this.renderRoomSwitcher(t.length,s.length)}
              ${this.loading?r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">Loading…</p>`:this.renderList(i)}
            </div>`:r`
        <div class="relative flex-1 min-h-0 overflow-hidden bg-bg">
          ${e?r`<!-- hall backdrop: a soft glow crowning the throne + a centre-aisle runner -->
              <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div class="absolute left-1/2 -translate-x-1/2 rounded-full"
                  style="top:1%;width:min(64%,460px);height:320px;background:radial-gradient(closest-side, rgba(16,185,129,0.12), transparent 72%);"></div>
                <div class="absolute left-1/2 -translate-x-1/2"
                  style="top:20%;bottom:0;width:21%;border-radius:22px 22px 0 0;background:rgba(16,185,129,0.045);border:1px solid rgba(16,185,129,0.14);border-bottom:none;"></div>
                <div class="absolute left-1/2 -translate-x-1/2"
                  style="top:20%;bottom:0;width:1px;background:repeating-linear-gradient(to bottom, rgba(16,185,129,0.18) 0 8px, transparent 8px 18px);"></div>
                <svg viewBox="0 0 180 150" width="184" height="154" aria-hidden="true"
                  style="position:absolute;left:50%;top:13%;transform:translate(-50%,-50%);">
                  <ellipse cx="90" cy="133" rx="74" ry="11" fill="rgba(16,185,129,0.10)"/>
                  <rect x="28" y="122" width="124" height="14" rx="6" fill="rgba(16,185,129,0.18)"/>
                  <rect x="50" y="112" width="9" height="14" rx="3" fill="#0c5a47"/>
                  <rect x="121" y="112" width="9" height="14" rx="3" fill="#0c5a47"/>
                  <rect x="38" y="92" width="104" height="28" rx="13" fill="#0f6e56"/>
                  <rect x="44" y="80" width="92" height="26" rx="13" fill="#15a37e"/>
                  <path d="M52 84 Q90 76 128 84" fill="none" stroke="#0f6e56" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
                  <circle cx="66" cy="92" r="2" fill="#0c5a47"/>
                  <circle cx="90" cy="90" r="2" fill="#0c5a47"/>
                  <circle cx="114" cy="92" r="2" fill="#0c5a47"/>
                </svg>
              </div>`:d}

          <!-- room switcher, anchored at the bottom -->
          ${this.renderRoomSwitcher(t.length,s.length)}
          <div class="absolute left-3 top-2 text-[11px] z-[1] text-muted">drag to move · tap to open</div>
          ${e?d:r`
                ${a.length?r`<div class="absolute left-[8%] z-[1] text-[10px] text-muted" style="top:16%">Ideas · ${a.length}</div>`:d}
                ${c.length?r`<div class="absolute left-[8%] z-[1] text-[10px] text-muted" style="top:${(u-.06)*100}%">Archived · ${c.length}</div>`:d}`}
          ${this.loading?r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">Loading…</p>`:i.length?d:r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">${e?"No active apps.":"No ideas or archived apps. Set an app's status to Idea or Archived in its profile."}</p>`}

          ${i.map(p=>{if(!this.matchesSearch(p))return d;if(!e){const x=this.pos.get(p.app.id)??h.get(p.app.id)??{x:.5,y:.5};return this.renderAgent(p,x,!1)}const m=n.indexOf(p),b=m>=0?{x:this.youPos.x+(m-(o-1)/2)*.16,y:this.youPos.y+.16}:this.pos.get(p.app.id)??this.defaultPos(t.indexOf(p),t.length);return this.renderAgent(p,b,m>=0)})}

          ${e?r`<!-- your throne, anchored top-centre, draggable; name above you -->
              <div
                style="position:absolute;left:${this.youPos.x*100}%;top:${this.youPos.y*100}%;width:160px;margin:-46px 0 0 -80px;text-align:center;z-index:3;cursor:grab;touch-action:none;"
                @pointerdown=${p=>this.startDrag(p,"you",p.currentTarget.parentElement)}
              >
                <div class="mb-1 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-600 text-white shadow-sm">you</div>
                <div class="block">${(()=>{const p=this.youAvatar(),m=p.endsWith(".svg");return r`<img src=${p} width="58" height="58" alt="you" referrerpolicy="no-referrer"
                    style=${m?"image-rendering:pixelated;":""}
                    class="w-[58px] h-[58px] rounded-xl object-cover outline outline-2 outline-offset-2 outline-emerald-600 bg-surface" />`})()}</div>
                ${o>0?r`<div class="mt-1 text-[10px] font-medium text-amber-600">${o===1?"1 came to you":`${o} came to you`}</div>`:d}
              </div>`:d}
        </div>`}
      </div>`}};J.BACKLOG_STATUS=new Set(["idea","archived"]);J.FLANK_X=[.12,.29,.71,.88];Oe([l()],J.prototype,"apps",2);Oe([l()],J.prototype,"messages",2);Oe([l()],J.prototype,"activity",2);Oe([l()],J.prototype,"loading",2);Oe([l()],J.prototype,"me",2);Oe([l()],J.prototype,"room",2);Oe([l()],J.prototype,"view",2);Oe([l()],J.prototype,"search",2);Oe([l()],J.prototype,"searchOpen",2);Oe([l()],J.prototype,"youPos",2);J=Oe([k("office-scene")],J);var zc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Ce=(e,t,s,i)=>{for(var n=i>1?void 0:i?qc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&zc(t,s,n),n};const kn=e=>`office.label.${e}`,Hc=["active","idea","paused","shipped","archived"],Kc={active:"Active",idea:"Ideas",paused:"Paused",shipped:"Shipped",archived:"Archived"},Gc={active:"bg-emerald-500",idea:"bg-sky-400",paused:"bg-amber-500",shipped:"bg-violet-400",archived:"bg-zinc-500"},$n=512*1024;let fe=class extends C{constructor(){super(...arguments),this.apps=[],this.loading=!0,this.view="floor",this.inboxUnread=0,this.selectedId=null,this.archivedOpen=!1,this.openDoc=null,this.handoffs=[],this.openHandoff=null,this.editingField=null}updated(){if(!this.editingField)return;const e=this.renderRoot,t=e.querySelector("[data-editing]");t&&e.activeElement!==t&&(t.focus(),t.select())}connectedCallback(){super.connectedCallback(),this.refresh()}get selected(){return this.apps.find(e=>e.id===this.selectedId)??null}select(e){this.selectedId=e,this.openDoc=null,this.openHandoff=null,this.handoffs=[],e!=null&&(this.loadHandoffs(e),this.loadDocs(e))}async loadDocs(e){try{const t=await fetch(`/api/office/${e}`);if(!t.ok||this.selectedId!==e)return;const{app:s}=await t.json();this.apps=this.apps.map(i=>i.id===e?{...i,docs:s.docs}:i)}catch{}}async loadHandoffs(e){const t=this.apps.find(s=>s.id===e);if(t)try{const s=await fetch(`/api/inbox?agent=${encodeURIComponent(t.name)}&lean=1`);s.ok&&this.selectedId===e&&(this.handoffs=(await s.json()).messages)}catch{}}async refresh(){try{const e=await fetch("/api/office?lean=1");e.ok&&(this.apps=(await e.json()).apps)}catch{}this.selectedId!=null&&this.loadDocs(this.selectedId),this.refreshInboxBadge(),this.loading=!1}async refreshInboxBadge(){try{const e=await fetch("/api/inbox?unread=1&lean=1");if(e.ok){const t=(await e.json()).messages;this.inboxUnread=t.length}}catch{}}async patch(e,t){await fetch(`/api/office/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async removeApp(e){confirm(`Remove ${e.name} from the office?`)&&(await fetch(`/api/office/${e.id}`,{method:"DELETE"}),this.selectedId===e.id&&this.select(null),await this.refresh())}async onLogoFile(e,t){const s=t.target,i=s.files?.[0];if(s.value="",!i)return;if(!i.type.startsWith("image/")){alert("Please choose an image file.");return}if(i.size>$n){alert(`Image is too large (max ${Math.round($n/1024)}KB).`);return}const n=await new Promise((o,a)=>{const c=new FileReader;c.onload=()=>o(c.result),c.onerror=()=>a(c.error),c.readAsDataURL(i)});await this.patch(e.id,{icon:n})}renderLogo(e,t="w-8 h-8"){return e.icon?r`<img
        src=${e.icon}
        alt=""
        class="${t} rounded-md object-contain bg-surface border border-line shrink-0"
        loading="lazy"
      />`:r`<span
      class="${t} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0"
    >${e.name.charAt(0).toUpperCase()}</span>`}commitEdit(e,t,s,i){this.editingField=null;const n=i.trim();n!==(s??"")&&(t==="name"&&!n||this.patch(e.id,{[t]:n||null}))}editableText(e,t,s={display:""}){const i=this.selected;return i?this.editingField===e?r`<input
        data-editing
        type="text"
        class="w-full px-1.5 py-0.5 text-sm bg-surface border border-ink/50 rounded focus:outline-none"
        .value=${t??""}
        @keydown=${n=>{n.key==="Enter"?n.target.blur():n.key==="Escape"&&(this.editingField=null)}}
        @blur=${n=>this.commitEdit(i,e,t,n.target.value)}
      />`:r`
      <button
        type="button"
        class="group/e w-full flex items-start gap-1.5 text-left rounded -mx-1.5 px-1.5 py-0.5 hover:bg-hover ${s.display}"
        @click=${()=>this.editingField=e}
      >
        <span class="flex-1 min-w-0 ${s.truncate===!1?"break-words":"truncate"} ${t?"":"text-muted/60 font-normal italic"}">${t||s.placeholder||"Add"}</span>
        ${s.link?r`<a
              href=${s.link}
              target="_blank"
              rel="noopener"
              class="shrink-0 text-muted hover:text-ink"
              title="Open"
              @click=${n=>n.stopPropagation()}
            >↗</a>`:d}
        <span class="shrink-0 text-[11px] text-muted opacity-0 group-hover/e:opacity-60">✎</span>
      </button>
    `:d}metaRow(e,t){return r`
      <dt class="text-[10px] text-muted pt-2">${e}</dt>
      <dd class="min-w-0 py-1">${t}</dd>
    `}statusControl(e){return r`
      <div class="relative inline-block">
        <span class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${Gc[e.status]}"></span>
        <select
          class="appearance-none bg-surface border border-line rounded-full pl-6 pr-7 py-1 text-xs text-ink hover:bg-hover focus:outline-none focus:border-ink cursor-pointer"
          @change=${t=>void this.patch(e.id,{status:t.target.value})}
        >
          ${Hc.map(t=>r`<option value=${t} ?selected=${e.status===t}>${Kc[t]}</option>`)}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted">▾</span>
      </div>
    `}floorLabelControl(e){const t=f.getState().settings[kn(e.id)]||"";return r`
      <input
        type="text"
        .value=${t}
        placeholder=${e.name}
        class="w-full max-w-[280px] px-2 py-1 text-sm bg-surface border border-line rounded text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink"
        @change=${s=>void f.getState().setSetting(kn(e.id),s.target.value.trim())}
      />
    `}renderDocs(e){const t=e.docs??[],s=t.find(i=>i.file===this.openDoc&&i.content!=null)??null;return r`
      <section class="space-y-2">
        <h3 class="text-[11px] text-muted">Docs · what the agents read</h3>
        ${t.length===0?r`<p class="text-xs text-muted">No markdown captured yet${e.path?r` for <span class="font-mono">${e.path}</span>`:d}. They sync in from the repo on the Air.</p>`:r`
              <div class="grid grid-cols-3 gap-2">
                ${t.map(i=>{const n=i.content!=null,o=this.openDoc===i.file;return r`<button type="button" ?disabled=${!n}
                    class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-left text-xs min-w-0 ${o?"border-ink bg-hover":"border-line hover:bg-hover"} ${n?"":"opacity-60 cursor-default"}"
                    @click=${n?()=>this.openDoc=o?null:i.file:void 0}>
                    <span class="shrink-0 text-muted ${n?`transition-transform ${o?"rotate-90":""}`:""}">${n?"›":"·"}</span>
                    <span class="font-mono text-ink truncate">${i.file}</span>
                  </button>`})}
              </div>
              ${s?r`<pre class="rounded-lg border border-line bg-bg px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words max-h-80 overflow-y-auto">${s.content}</pre>`:d}
            `}
      </section>
    `}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}toggleHandoff(e){if(this.openHandoff===e){this.openHandoff=null;return}this.openHandoff=e,Ps(e)==null&&Mo(e).then(()=>this.requestUpdate())}renderHandoffs(e){const t=this.handoffs;return r`
      <section class="space-y-2">
        <h3 class="text-[11px] text-muted">Handoffs · agent message bus</h3>
        ${t.length===0?r`<p class="text-xs text-muted">No handoffs yet. When ${e.name}'s agent hands off to another agent, or receives one, it shows here.</p>`:r`<div class="rounded-lg border border-line overflow-hidden divide-y divide-line/60">
              ${t.map(s=>{const i=s.from_agent===e.name,n=i?s.to_agent:s.from_agent,o=this.openHandoff===s.id,a=!i&&s.read_at==null;return r`<div>
                  <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-hover"
                    @click=${()=>this.toggleHandoff(s.id)}>
                    <span class="font-mono shrink-0 ${i?"text-muted":"text-ink"}">${i?"→":"←"} ${n}</span>
                    <span class="flex-1 min-w-0 truncate ${a?"text-ink font-medium":"text-muted"}">${s.subject||"(no subject)"}</span>
                    ${a?r`<span class="w-1.5 h-1.5 rounded-full bg-ink shrink-0"></span>`:d}
                    <span class="text-[10px] text-muted shrink-0">${this.fmtTime(s.created_at)}</span>
                  </button>
                  ${o?r`<pre class="px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-bg border-t border-line max-h-72 overflow-y-auto">${Ps(s.id)??"Loading…"}</pre>`:d}
                </div>`})}
            </div>`}
      </section>
    `}renderDetail(e){return r`
      <div class="flex flex-col h-full">
        <header class="px-5 py-4 border-b border-line shrink-0 flex items-center gap-3">
          <button
            type="button"
            class="shrink-0 w-7 h-7 grid place-items-center rounded text-lg text-muted hover:text-ink hover:bg-hover"
            title="Back to office"
            @click=${()=>this.select(null)}
          >‹</button>
          <div class="relative group/logo shrink-0 w-9 h-9">
            <button
              type="button"
              class="block w-full h-full"
              title="Replace logo"
              @click=${()=>this.logoInput?.click()}
            >
              ${this.renderLogo(e,"w-9 h-9")}
              <span class="absolute inset-0 grid place-items-center rounded-md bg-black/55 text-white text-sm opacity-0 group-hover/logo:opacity-100 transition-opacity">↻</span>
            </button>
            ${e.icon?r`<button
                  type="button"
                  class="absolute -top-1.5 -right-1.5 w-4 h-4 grid place-items-center rounded-full bg-bg border border-line text-[10px] leading-none text-muted hover:text-red-500 opacity-0 group-hover/logo:opacity-100"
                  title="Remove logo"
                  @click=${()=>void this.patch(e.id,{icon:null})}
                >×</button>`:d}
          </div>
          <div class="min-w-0 flex-1">
            ${this.editableText("name",e.name,{display:"text-base font-semibold text-ink"})}
            ${this.editableText("path",e.path,{display:"text-xs text-muted font-mono",placeholder:"Add path"})}
          </div>
          <input
            id="logo-file"
            type="file"
            accept="image/*"
            class="hidden"
            @change=${t=>void this.onLogoFile(e,t)}
          />
        </header>

        <div class="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-7">
          <dl class="grid grid-cols-[92px_minmax(0,1fr)] gap-x-4 gap-y-1 items-baseline">
            ${this.metaRow("Status",this.statusControl(e))}
            ${this.metaRow("Floor label",this.floorLabelControl(e))}
            ${this.metaRow("Purpose",this.editableText("purpose",e.purpose,{display:"text-sm text-ink",placeholder:"What it's for",truncate:!1}))}
            ${this.metaRow("Goal",this.editableText("goal",e.goal,{display:"text-sm text-ink",placeholder:"Goal it serves",truncate:!1}))}
            ${this.metaRow("Stack",this.editableText("stack",e.stack,{display:"text-sm text-ink",placeholder:"Tech stack",truncate:!1}))}
            ${this.metaRow("Repo",this.editableText("repo",e.repo,{display:"text-xs font-mono text-ink break-all",placeholder:"Repo URL",link:e.repo,truncate:!1}))}
          </dl>

          ${this.renderDocs(e)}
          ${this.renderHandoffs(e)}

          <div class="pt-1">
            <button type="button" class="text-xs text-muted hover:text-red-500"
              @click=${()=>void this.removeApp(e)}>Remove from office</button>
          </div>
        </div>
      </div>
    `}renderApp(e){return r`
      <li data-row-key=${`office:${e.id}`} class="last:[&_.row-divider]:border-b-0">
        <button
          type="button"
          class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover"
          @click=${()=>this.select(e.id)}
        >
          ${this.renderLogo(e,"w-10 h-10")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 mr-4 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${e.name}</span>
              ${e.purpose?r`<span class="block text-xs text-muted truncate">${e.purpose}</span>`:d}
            </span>
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>
    `}renderHome(){return r`
      <office-scene class="flex flex-col h-full"
        @open-app=${e=>this.select(e.detail)}></office-scene>
    `}render(){const e=this.selected;return e?this.renderDetail(e):this.renderHome()}};Ce([l()],fe.prototype,"apps",2);Ce([l()],fe.prototype,"loading",2);Ce([l()],fe.prototype,"view",2);Ce([l()],fe.prototype,"inboxUnread",2);Ce([l()],fe.prototype,"selectedId",2);Ce([l()],fe.prototype,"archivedOpen",2);Ce([l()],fe.prototype,"openDoc",2);Ce([l()],fe.prototype,"handoffs",2);Ce([l()],fe.prototype,"openHandoff",2);Ce([l()],fe.prototype,"editingField",2);Ce([ge("#logo-file")],fe.prototype,"logoInput",2);fe=Ce([k("office-section")],fe);var Wc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,zt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Vc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Wc(t,s,n),n};let vt=class extends C{constructor(){super(...arguments),this.embedded=!1,this.messages=[],this.activity=null,this.loading=!0,this.openId=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);e.ok&&(this.messages=(await e.json()).messages),t.ok&&(this.activity=await t.json())}catch{}this.loading=!1}async markRead(e){await fetch(`/api/inbox/${e}/read`,{method:"POST"}),await this.refresh()}toggle(e){if(this.openId===e){this.openId=null;return}this.openId=e,Ps(e)==null&&Mo(e).then(()=>this.requestUpdate())}stateOf(e){const t=this.activity;return t?.quarantined.some(s=>s.id===String(e.id))?"quarantined":e.read_at!=null?"done":t?.live.includes(e.to_agent)?"working":"pending"}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}ago(e){if(e==null)return"—";const t=Math.max(0,Math.floor((Date.now()-e)/1e3));return t<60?`${t}s`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}renderStrip(){const e=this.activity;if(!e)return d;const t=e.live.length,s=t>0?{cls:"bg-emerald-500 animate-pulse",label:`${t} agent${t>1?"s":""} working now`}:e.stale?{cls:"bg-amber-500",label:"Dispatcher idle (no tick in 12m+)"}:{cls:"bg-ink/30",label:"Idle — waiting for the next tick"},i=this.messages.filter(n=>n.read_at==null).length;return r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${s.cls}"></span>
        <span class="text-xs text-ink font-medium">${s.label}</span>
        ${t>0?r`<span class="text-[11px] text-muted font-mono">${e.live.join(", ")}</span>`:d}
        <span class="ml-auto text-[11px] text-muted">
          ${i} pending · last tick ${this.ago(e.lastTickAt)} ago
          ${e.quarantined.length>0?r`· <span class="text-amber-600">${e.quarantined.length} quarantined</span>`:d}
        </span>
      </div>
    `}renderBadge(e){const s={pending:{label:"pending",cls:"bg-bg text-muted border border-line"},working:{label:"working",cls:"bg-amber-100 text-amber-700",pulse:!0},done:{label:"done",cls:"bg-emerald-50 text-emerald-700"},quarantined:{label:"quarantined",cls:"bg-red-100 text-red-700"}}[e];return r`<span class="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${s.cls}">
      ${s.pulse?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>`:d}${s.label}
    </span>`}renderRun(e){const t=this.activity?.handled[String(e.id)];if(!t)return d;const s=t.durationMs!=null?`${Math.round(t.durationMs/1e3)}s`:null,i=t.batchedWith.length?` · with ${t.batchedWith.map(n=>`#${n}`).join(", ")}`:"";return r`
      <div class="mt-2 flex items-start gap-2 px-2.5 py-1.5 bg-surface border-l-2 border-emerald-400 text-[11px] text-muted">
        <span class="mt-px text-emerald-600">⊙</span>
        <span class="flex-1 min-w-0">
          Answered by a read-only agent · ${this.ago(t.at)} ago${s?` · ${s}`:""}${t.exit!=null&&t.exit!==0?` · exit ${t.exit}`:""}${i}
          ${t.summary?r`<span class="block mt-1 text-ink/70 line-clamp-3 break-words">${t.summary}</span>`:d}
        </span>
      </div>
    `}renderMessage(e){const t=this.openId===e.id,s=this.stateOf(e),i=e.read_at==null;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button
          type="button"
          class="group w-full flex items-start gap-3 pl-3 text-left hover:bg-hover"
          @click=${()=>this.toggle(e.id)}
        >
          <span class="mt-2.5 shrink-0">${this.renderBadge(s)}</span>
          <span class="row-divider flex-1 min-w-0 flex items-start gap-3 py-2.5 mr-4 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="flex items-center gap-1.5 text-xs text-muted">
                <span class="font-mono text-ink">${e.from_agent}</span>
                <span>→</span>
                <span class="font-mono text-ink">${e.to_agent}</span>
                <span class="ml-auto shrink-0">${this.fmtTime(e.created_at)}</span>
              </span>
              <span class="block text-sm mt-0.5 truncate ${i?"text-ink font-medium":"text-muted"}">${e.subject||"(no subject)"}</span>
            </span>
            <span class="shrink-0 mt-0.5 text-muted transition-transform ${t?"rotate-90":"opacity-0 group-hover:opacity-100"}">›</span>
          </span>
        </button>
        ${t?r`
              <div class="px-4 pb-3">
                <pre class="text-[12px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-surface border border-line rounded p-3 max-h-96 overflow-y-auto">${Ps(e.id)??"Loading…"}</pre>
                ${this.renderRun(e)}
                ${i?r`<button
                      type="button"
                      class="mt-2 text-xs px-3 py-1 border border-line rounded hover:bg-hover"
                      @click=${()=>void this.markRead(e.id)}
                    >Mark read</button>`:r`<span class="mt-2 inline-block text-[10px] text-muted">Read ${e.read_at?this.fmtTime(e.read_at):""}</span>`}
              </div>
            `:d}
      </li>
    `}renderGroup(e,t){return t.length===0?d:r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">
          ${e} (${t.length})
        </h3>
        <ul>${t.map(s=>this.renderMessage(s))}</ul>
      </section>
    `}render(){const e=this.messages.filter(s=>s.read_at==null),t=this.messages.filter(s=>s.read_at!=null);return r`
      <div class="flex flex-col h-full">
        ${this.embedded?r`<p class="px-4 py-2 text-[11px] text-muted border-b border-line shrink-0">Handoffs between your agents, and the runs that answer them. They send, read, and reply on their own.</p>`:r`<header class="px-4 py-3 border-b border-line shrink-0">
              <div class="flex items-baseline justify-between">
                <h2 class="text-lg font-semibold text-ink">Inbox</h2>
                <span class="text-xs text-muted">${e.length} unread · ${this.messages.length} total</span>
              </div>
              <p class="text-[11px] text-muted mt-0.5">Handoffs between your agents, and the runs that answer them.</p>
            </header>`}

        ${this.renderStrip()}

        <div class="flex-1 min-h-0 overflow-y-auto">
          ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.messages.length===0?r`<p class="px-4 py-3 text-xs text-muted">No messages yet. When one agent finishes something another needs, it leaves a note here.</p>`:r`${this.renderGroup("Unread",e)}${this.renderGroup("Read",t)}`}
        </div>
      </div>
    `}};zt([g({type:Boolean})],vt.prototype,"embedded",2);zt([l()],vt.prototype,"messages",2);zt([l()],vt.prototype,"activity",2);zt([l()],vt.prototype,"loading",2);zt([l()],vt.prototype,"openId",2);vt=zt([k("inbox-section")],vt);var Qc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,No=(e,t,s,i)=>{for(var n=i>1?void 0:i?Yc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Qc(t,s,n),n};const Jc=6e4;let Ti=class extends C{constructor(){super(...arguments),this.store=new Ei(this,f,e=>({items:e.notifications,unread:e.notificationsUnread})),this.open=!1,this.onDocClick=e=>{this.open&&(e.composedPath().includes(this)||(this.open=!1))},this.onVisibility=()=>{document.visibilityState==="visible"&&f.getState().loadNotifications()}}connectedCallback(){super.connectedCallback(),f.getState().loadNotifications(),this.pollTimer=setInterval(()=>void f.getState().loadNotifications(),Jc),document.addEventListener("click",this.onDocClick),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),this.pollTimer&&clearInterval(this.pollTimer),document.removeEventListener("click",this.onDocClick),document.removeEventListener("visibilitychange",this.onVisibility)}toggle(){this.open=!this.open,this.open&&f.getState().loadNotifications()}parseAction(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}async onItemClick(e){const t=this.parseAction(e.action);if(e.read_at==null&&f.getState().markNotificationRead(e.id),this.open=!1,e.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}t.type==="url"?window.open(t.href,"_blank","noopener"):t.type==="persona"?this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{persona:t.persona},bubbles:!0,composed:!0})):t.type==="mode"&&this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:t.mode},bubbles:!0,composed:!0}))}onDismiss(e,t){e.stopPropagation(),f.getState().dismissNotification(t)}relTime(e){const t=Math.floor(Date.now()/1e3)-e;return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}render(){const e=this.store.state.notifications,t=this.store.state.notificationsUnread,s=r`<svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>`;return r`
      <div class="relative">
        <button
          type="button"
          class="relative p-2 rounded hover:bg-hover text-muted"
          aria-label="Notifications"
          title="Notifications"
          @click=${this.toggle}
        >
          ${s}
          ${t>0?r`<span
                class="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold grid place-items-center leading-none"
                >${t>9?"9+":t}</span
              >`:d}
        </button>
        ${this.open?this.renderPanel(e,t):d}
      </div>
    `}renderPanel(e,t){return r`
      <div
        class="absolute right-0 mt-1 w-[min(20rem,calc(100vw-1.5rem))] max-h-[70vh] overflow-y-auto bg-surface border border-line rounded-xl shadow-lg z-50"
        role="menu"
      >
        <div class="flex items-center justify-between px-3 py-2 border-b border-line">
          <span class="text-xs font-semibold text-ink">Notifications</span>
          ${t>0?r`<button
                type="button"
                class="text-[11px] text-muted hover:text-ink"
                @click=${()=>void f.getState().markAllNotificationsRead()}
              >
                Mark all read
              </button>`:d}
        </div>
        ${e.length===0?r`<div class="px-3 py-6 text-center text-xs text-muted">You're all caught up.</div>`:e.map(s=>this.renderItem(s))}
      </div>
    `}renderItem(e){const t=e.read_at==null;return r`
      <div
        class="group flex items-start gap-2 px-3 py-2.5 border-b border-line last:border-0 hover:bg-hover cursor-pointer"
        role="menuitem"
        @click=${()=>void this.onItemClick(e)}
      >
        <span
          class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${t?"bg-blue-500":"bg-transparent"}"
        ></span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-semibold text-ink truncate">${e.title}</span>
            <span class="text-[10px] text-muted shrink-0">${this.relTime(e.created_at)}</span>
          </div>
          ${e.body?r`<p class="text-[11px] text-muted mt-0.5 leading-snug whitespace-pre-line">${e.body}</p>`:d}
        </div>
        <button
          type="button"
          class="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 text-muted hover:text-ink shrink-0 -mr-1"
          aria-label="Dismiss"
          title="Dismiss"
          @click=${s=>this.onDismiss(s,e.id)}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    `}};No([l()],Ti.prototype,"open",2);Ti=No([k("notification-bell")],Ti);var Xc=Object.getOwnPropertyDescriptor,Zc=(e,t,s,i)=>{for(var n=i>1?void 0:i?Xc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Cn=class extends C{constructor(){super(...arguments),this.store=new Ei(this,f,e=>({items:e.notifications,unread:e.notificationsUnread}))}connectedCallback(){super.connectedCallback(),f.getState().loadNotifications()}parseAction(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}async onItemClick(e){const t=this.parseAction(e.action);if(e.read_at==null&&f.getState().markNotificationRead(e.id),e.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}t.type==="url"?window.open(t.href,"_blank","noopener"):t.type==="persona"?this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{persona:t.persona},bubbles:!0,composed:!0})):t.type==="mode"&&this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:t.mode},bubbles:!0,composed:!0}))}onDismiss(e,t){e.stopPropagation(),f.getState().dismissNotification(t)}relTime(e){const t=Math.floor(Date.now()/1e3)-e;return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}render(){const e=this.store.state.notifications,t=this.store.state.notificationsUnread;return r`
      <div class="flex flex-col flex-1 min-h-0 overflow-y-auto">
        <div class="flex items-center justify-between px-4 py-3">
          <h2 class="text-base font-semibold text-ink">Notifications</h2>
          <div class="flex items-center gap-3">
            ${t>0?r`<button
                  type="button"
                  class="text-xs text-muted hover:text-ink cursor-pointer"
                  @click=${()=>void f.getState().markAllNotificationsRead()}
                >
                  Mark all read
                </button>`:d}
            ${e.length>0?r`<button
                  type="button"
                  class="text-xs text-muted hover:text-ink cursor-pointer"
                  @click=${()=>void f.getState().clearAllNotifications()}
                >
                  Clear all
                </button>`:d}
          </div>
        </div>
        ${e.length===0?r`<div class="px-4 py-12 text-center text-sm text-muted">You're all caught up.</div>`:r`<div class="px-2 pb-3">${e.map(s=>this.renderItem(s))}</div>`}
      </div>
    `}renderItem(e){const t=e.read_at==null;return r`
      <div
        class="group flex items-start gap-2.5 px-3 py-3 rounded-lg hover:bg-hover cursor-pointer"
        @click=${()=>void this.onItemClick(e)}
      >
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${t?"bg-blue-500":"bg-transparent"}"></span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <span class="text-sm font-medium text-ink truncate">${e.title}</span>
            <span class="text-[11px] text-muted shrink-0">${this.relTime(e.created_at)}</span>
          </div>
          ${e.body?r`<p class="text-xs text-muted mt-0.5 leading-snug whitespace-pre-line">${e.body}</p>`:d}
        </div>
        <button
          type="button"
          class="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 text-muted hover:text-ink shrink-0 -mr-1"
          aria-label="Dismiss"
          title="Dismiss"
          @click=${s=>this.onDismiss(s,e.id)}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    `}};Cn=Zc([k("notifications-section")],Cn);var ed=Object.getOwnPropertyDescriptor,td=(e,t,s,i)=>{for(var n=i>1?void 0:i?ed(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Sn=class extends C{connectedCallback(){super.connectedCallback(),f.getState().loadTools(),this.unsub=_(this,f,e=>e.tools)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}placeable(e){return e.type!=="view"||!!e.panel}toggle(e){const t=e.placement==="cockpit"?"standalone":"cockpit";f.getState().setToolPlacement(e.name,t)}render(){const e=f.getState().tools.filter(t=>this.placeable(t));return r`
      <div class="flex flex-col flex-1 min-h-0 overflow-auto p-4">
        <div class="flex items-baseline justify-between mb-1">
          <h2 class="text-base font-semibold text-ink">Tools</h2>
        </div>
        <p class="text-sm text-muted mb-4">
          Your Mana apps. Cockpit tools sit in the nav; standalone ones open on their own link.
        </p>
        <div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));">
          ${e.map(t=>this.tile(t))}
        </div>
      </div>
    `}tile(e){const t=e.placement==="cockpit";return r`
      <div class="bg-surface border border-line rounded-xl p-3 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="w-9 h-9 rounded-lg bg-bg grid place-items-center">
            <sc-icon name="lucide-${e.icon||"layout-grid"}" class="w-5 h-5 text-ink"></sc-icon>
          </span>
          <button
            type="button"
            class="cursor-pointer text-[11px] px-2 py-0.5 rounded-md transition-colors ${t?"bg-hover text-ink hover:bg-line":"border border-line text-muted hover:text-ink hover:border-ink"}"
            title="Move ${e.label||e.name} to ${t?"standalone":"the cockpit"}"
            @click=${()=>this.toggle(e)}
          >
            ${t?"in cockpit":"standalone"}
          </button>
        </div>
        ${t?r`<div class="text-sm font-medium text-ink">${e.label||e.name}</div>`:r`<a
              href=${e.target}
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 w-fit text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline cursor-pointer"
              title="Open in a new tab"
              >${e.label||e.name}<sc-icon name="lucide-external-link" class="w-3.5 h-3.5"></sc-icon
            ></a>`}
      </div>
    `}};Sn=td([k("tools-launcher")],Sn);var sd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,qi=(e,t,s,i)=>{for(var n=i>1?void 0:i?id(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&sd(t,s,n),n};let As=class extends C{constructor(){super(...arguments),this.config=null,this.height="200px",this.chart=null,this.gen=0}render(){return r`<div style="position:relative;height:${this.height};width:100%"><canvas></canvas></div>`}async updated(){const e=++this.gen,t=this.querySelector("canvas");if(!t||(this.chart&&(this.chart.destroy(),this.chart=null),!this.config))return;const{Chart:s}=await Ke(async()=>{const{Chart:i}=await import("./auto-DhYMk4xX.js");return{Chart:i}},[]);e!==this.gen||!this.isConnected||(this.chart=new s(t,this.config))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};qi([g({attribute:!1})],As.prototype,"config",2);qi([g({type:String})],As.prototype,"height",2);As=qi([k("finance-chart")],As);var nd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,Be=(e,t,s,i)=>{for(var n=i>1?void 0:i?od(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&nd(t,s,n),n};const rd=240,ad=160;let _e=class extends C{constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this.flipUp=!1,this._onDoc=e=>{this.open&&!this.contains(e.target)&&this.close()},this._onReflow=e=>{this.open&&(e&&e.target instanceof Node&&this.contains(e.target)||this.close())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0)}close(){this.open=!1,this.q=""}toggle(e){if(e.stopPropagation(),this.open){this.close();return}const t=e.currentTarget.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight-t.bottom,o=t.top;this.flipUp=n<rd+8&&o>n,this.py=this.flipUp?Math.max(8,t.top-4):t.bottom+4,this.px=Math.max(8,Math.min(t.left,s-ad-8)),this.open=!0}pick(e){this.value=e,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:e,bubbles:!0,composed:!0}))}updated(){this.open&&!window.matchMedia("(pointer: coarse)").matches&&this.querySelector("input.cs-search")?.focus()}render(){const e=this.q.trim().toUpperCase(),t=this.options.length?this.options:this.saved,s=e?t.filter(i=>i.includes(e)):[...this.saved.filter(i=>t.includes(i)),...t.filter(i=>!this.saved.includes(i))];return r`
      <input type="hidden" name=${this.name} .value=${this.value} />
      <button type="button" class="inline-flex h-8 items-center gap-1 px-2 text-xs uppercase bg-surface border border-line rounded hover:border-ink"
        @click=${i=>this.toggle(i)}>${this.value||"—"} <span class="text-[8px] text-muted">▾</span></button>
      ${this.open?r`<div class="rounded-lg border border-line bg-surface shadow-lg w-40"
            style="position:fixed;left:${this.px}px;${this.flipUp?`bottom:${window.innerHeight-this.py}px`:`top:${this.py}px`};z-index:50"
            @click=${i=>i.stopPropagation()}>
            <input type="text" class="cs-search w-full px-2 py-1.5 text-xs border-b border-line bg-bg focus:outline-none" placeholder="Search currency…"
              .value=${this.q} @input=${i=>{this.q=i.target.value}}
              @keydown=${i=>{i.key==="Enter"?(i.preventDefault(),s[0]&&this.pick(s[0])):i.key==="Escape"&&this.close()}} />
            <div class="max-h-52 overflow-y-auto py-1">
              ${s.length?s.map(i=>r`<button type="button"
                    class="flex w-full items-center justify-between px-3 py-1.5 text-sm hover:bg-hover ${i===this.value?"font-semibold text-ink":"text-ink"}"
                    @click=${()=>this.pick(i)}><span>${i}</span>${this.saved.includes(i)?r`<span class="text-[9px] text-muted">saved</span>`:d}</button>`):r`<div class="px-3 py-2 text-xs text-muted">No match</div>`}
            </div>
          </div>`:d}
    `}};Be([g({type:String})],_e.prototype,"value",2);Be([g({type:String})],_e.prototype,"name",2);Be([g({attribute:!1})],_e.prototype,"options",2);Be([g({attribute:!1})],_e.prototype,"saved",2);Be([l()],_e.prototype,"open",2);Be([l()],_e.prototype,"q",2);Be([l()],_e.prototype,"px",2);Be([l()],_e.prototype,"py",2);Be([l()],_e.prototype,"flipUp",2);_e=Be([k("currency-select")],_e);var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,I=(e,t,s,i)=>{for(var n=i>1?void 0:i?cd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ld(t,s,n),n};const dd=["expenses","fixed","savings","donut"],hd={expenses:1,fixed:1,savings:1,donut:2},Tn=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],In=e=>Tn[e%Tn.length],ud=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],bs=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],pd=["type","amount","frequency","next","category"];function Gt(){return new Date().toISOString().slice(0,7)}function Dn(e,t){const[s,i]=e.split("-").map(Number),n=new Date(Date.UTC(s,i-1+t,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function Wt(e){const[t,s]=e.split("-").map(Number);return!t||!s?e:new Date(Date.UTC(t,s-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric"})}function md(e){const[t,s]=e.split("-").map(Number);return!t||!s?e:new Date(Date.UTC(t,s-1,1)).toLocaleDateString(void 0,{month:"short"})}let T=class extends C{constructor(){super(...arguments),this.tab="budget",this.month=Gt(),this.loading=!0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.logDay=new Date().getDate(),this.networth=null,this.recurring=[],this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...pd],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.recurringAsPaid=!1,this.showColMenu=!1,this.showEnded=!1,this.budgetLayout=null,this.dragCardId=null,this.dropTarget=null,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=e=>{e.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=e=>{const t=e.detail;t&&(this.lastCurrency=t,!this.currencies.includes(t)&&this.supportedCurrencies.includes(t)&&this.saveCurrencies([...this.currencies,t]))},this.onCardDragEnd=()=>{this.dragCardId=null,this.dropTarget=null}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const e=await fetch("/api/finance/settings");if(!e.ok)return;const t=await e.json();Array.isArray(t.currencies)&&t.currencies.length&&(this.currencies=t.currencies),Array.isArray(t.supportedCurrencies)&&(this.supportedCurrencies=t.supportedCurrencies),t.lastCurrency&&(this.lastCurrency=t.lastCurrency),t.baseCurrency&&(this.base=t.baseCurrency),t.recurringColumns&&t.recurringColumns.length&&(this.recurringColumns=t.recurringColumns),t.cards&&(this.cards={...this.cards,...t.cards}),typeof t.recurringAsPaid=="boolean"&&(this.recurringAsPaid=t.recurringAsPaid),Array.isArray(t.budgetLayout)&&t.budgetLayout.length&&(this.budgetLayout=t.budgetLayout)}catch{}}renderCurrencySelect(e){const t=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return r`<currency-select name="currency" .value=${e} .saved=${this.currencies}
      .options=${t.includes(e)?t:[e,...t]}></currency-select>`}async changeBaseCurrency(e){await this.post("/base-currency",{currency:e}),await this.loadSettings(),await this.refresh()}async saveCurrencies(e){await this.post("/currencies",{currencies:e}),await this.loadSettings()}addCurrency(e){!e||this.currencies.includes(e)||this.saveCurrencies([...this.currencies,e])}removeCurrency(e){e!==this.base&&this.saveCurrencies(this.currencies.filter(t=>t!==e))}toggleCard(e){this.cards={...this.cards,[e]:!this.cards[e]},this.post("/cards",{cards:{[e]:this.cards[e]}})}toggleRecurringAsPaid(){this.recurringAsPaid=!this.recurringAsPaid,(async()=>(await this.post("/recurring-as-paid",{value:this.recurringAsPaid}),await this.refresh()))()}renderSettings(){const e=this.supportedCurrencies.filter(t=>!this.currencies.includes(t));return r`
      <div class="mx-3 mt-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-ink">Finance settings</span>
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showSettings=!1}}>close</button>
        </div>
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <span class="text-[11px] text-muted">Base currency</span>
          <select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @change=${t=>void this.changeBaseCurrency(t.target.value)}>
            ${this.supportedCurrencies.map(t=>r`<option value=${t} ?selected=${t===this.base}>${t}</option>`)}
          </select>
          <span class="text-[11px] text-muted">all amounts display in this</span>
        </div>
        <div class="text-[11px] text-muted mb-1">My currencies</div>
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${this.currencies.map(t=>r`
            <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border border-line">
              ${t}
              ${t===this.base?r`<span class="text-[9px] text-muted">base</span>`:r`<button type="button" class="text-muted hover:text-red-500 leading-none" title="Remove" @click=${()=>this.removeCurrency(t)}>×</button>`}
            </span>`)}
        </div>
        ${e.length?r`<select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              @change=${t=>{const s=t.target;s.value&&this.addCurrency(s.value),s.value=""}}>
              <option value="">+ add currency…</option>
              ${e.map(t=>r`<option value=${t}>${t}</option>`)}
            </select>`:d}
        <div class="text-[11px] text-muted mt-4 mb-1">Budget cards</div>
        <div class="flex flex-col gap-1.5">
          ${[["savingsGoal","Savings goal"],["fixedPayments","Fixed payments"],["expenseDonut","Expense breakdown"]].map(([t,s])=>r`<label class="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" ?checked=${this.cards[t]} @change=${()=>this.toggleCard(t)} />
              <span>${s}</span>
            </label>`)}
        </div>
        <div class="text-[11px] text-muted mt-4 mb-1">Recurring payments</div>
        <label class="flex items-start gap-2 text-sm cursor-pointer">
          <input type="checkbox" class="mt-0.5" ?checked=${this.recurringAsPaid} @change=${()=>this.toggleRecurringAsPaid()} />
          <span>
            Treat as already paid
            <span class="block text-[11px] text-muted leading-snug">Count the month's recurring expenses in spent from day one, instead of when they hit the bank. Off shows them as a pending amount on their due date.</span>
          </span>
        </label>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(e){["tab","month","yearN","expandedCat","showIncome","budget"].some(s=>e.has(s))&&this.publishView()}publishView(){const e={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let t;if(this.tab==="budget"){if(t=`${Wt(this.month)}`,this.showIncome&&(t+=", income panel open"),this.expandedCat!=null){const s=this.budget?.categories.find(i=>i.id===this.expandedCat);t+=`, expanded category "${s?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?t=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?t=`${Wt(this.month)} · accounts grouped by bucket + net-worth trend`:t="recurring income/expenses table";f.getState().setViewContext({tool:"finance",summary:`Finance · ${e[this.tab]} tab · ${t}`})}async refresh(){this.loading=!0;try{if(this.tab==="budget"){const e=await fetch(`/api/finance/budget?month=${this.month}`);e.ok&&(this.budget=await e.json(),this.base=this.budget.baseCurrency),this.expandedCat!=null&&await this.loadCatTxns(this.expandedCat),this.showIncome&&await this.loadIncomeTxns()}else if(this.tab==="networth"){const e=await fetch(`/api/finance/networth?month=${this.month}`);e.ok&&(this.networth=await e.json(),this.base=this.networth.baseCurrency)}else if(this.tab==="recurring"){const[e,t,s]=await Promise.all([fetch("/api/finance/recurring"),fetch("/api/finance/settings"),fetch(`/api/finance/budget?month=${Gt()}`)]);if(e.ok&&(this.recurring=(await e.json()).items),t.ok){const i=await t.json();i.recurringColumns&&i.recurringColumns.length&&(this.recurringColumns=i.recurringColumns)}s.ok&&(this.budget=await s.json())}else if(this.tab==="year"){const e=await fetch(`/api/finance/year?year=${this.yearN}`);e.ok&&(this.year=await e.json(),this.base=this.year.baseCurrency)}}catch{}this.loading=!1}async loadCatTxns(e){try{const t=await fetch(`/api/finance/transactions?month=${this.month}&categoryId=${e}`);t.ok&&(this.catTxns=(await t.json()).items)}catch{}}async loadIncomeTxns(){try{const e=await fetch(`/api/finance/transactions?month=${this.month}&type=income`);e.ok&&(this.incomeTxns=(await e.json()).items)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&await this.loadIncomeTxns()}async post(e,t){await fetch(`/api/finance${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async del(e){await fetch(`/api/finance${e}`,{method:"DELETE"})}async patch(e,t){await fetch(`/api/finance${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}fmt(e,t=this.base){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(e)}catch{return`${Math.round(e)} ${t}`}}fmtShort(e){const t=Math.abs(e),s=t>=1e3?`${(e/1e3).toFixed(t>=1e4?0:1)}k`:String(Math.round(e));return`${this.base==="EUR"?"€":""}${s}`}stat(e,t){return r`
      <div class="text-center">
        <div class="text-[11px] text-white/70">${e}</div>
        <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight">${this.fmt(t)}</div>
      </div>
    `}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../\u200D/.test(e)?e:e.replace(/\uFE0F/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(e){if(!e)return r`<span class="text-muted text-sm">•</span>`;const t=this.iconUrl(e);return t?r`<img src=${t} alt="" class="w-5 h-5 select-none" draggable="false" />`:r`<span class="text-sm">${e}</span>`}setTab(e){this.tab!==e&&(this.tab=e,this.refresh())}gotoMonth(e){this.month=Dn(this.month,e),this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const e=Gt();this.month!==e&&(this.month=e,this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh())}daysInMonth(e){const[t,s]=e.split("-").map(Number);return new Date(Date.UTC(t,s,0)).getUTCDate()}defaultLogDay(){return this.month===Gt()?new Date().getDate():this.daysInMonth(this.month)}stepDay(e){const t=this.daysInMonth(this.month);this.logDay=Math.min(t,Math.max(1,this.logDay+e))}fmtLogDay(){const[e,t]=this.month.split("-").map(Number),s=Math.min(this.logDay,this.daysInMonth(this.month));return new Date(Date.UTC(e,t-1,s)).toLocaleDateString(void 0,{weekday:"short",day:"numeric"})}renderDayPicker(){return r`
      <div class="flex h-8 items-center gap-0.5 shrink-0 bg-surface border border-line rounded">
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Earlier day"
          @click=${()=>this.stepDay(-1)}>‹</button>
        <span class="min-w-[3.25rem] text-center text-sm tabular-nums text-ink select-none">${this.fmtLogDay()}</span>
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Later day"
          @click=${()=>this.stepDay(1)}>›</button>
      </div>
    `}async toggleCat(e){if(this.expandedCat===e){this.expandedCat=null,this.catTxns=[];return}this.expandedCat=e,await this.loadCatTxns(e)}async addCategory(){const e=this.newCat.trim();e&&(await this.post("/category",{name:e,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(e,t){if(e==="new"){this.newCatIcon=t,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${e}`,{icon:t||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(e,t){const s=t.trim();s&&this.patch(`/category/${e}`,{name:s})}renderEmojiPalette(e){return r`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${t=>t.stopPropagation()}>
        ${ud.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(e,t)}>${t}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(e,"")}>none</button>
      </div>
    `}async logTxn(e,t,s,i,n,o){!Number.isFinite(s)||s<=0||(await this.post("/transaction",{type:t,amount:s,currency:i||this.base,categoryId:e,name:n,date:o}),await this.refresh())}async setBudget(e,t){Number.isFinite(t)&&(await this.post("/budget",{categoryId:e,amount:t,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(e,t){!Number.isFinite(t)||t<0||this.post("/budget",{categoryId:e,amount:t,month:this.month})}async deleteTxn(e){await this.del(`/transaction/${e}`),await this.refresh()}startEditTxn(e){e.recurring_id==null&&(this.editingTxnId=e.id)}onSaveTxn(e,t){e.preventDefault();const s=e.target,i=s.elements.namedItem("date")?.value||t.date,n=s.elements.namedItem("name")?.value.trim()??"",o=Number(s.elements.namedItem("amount")?.value),a=(s.elements.namedItem("currency")?.value||t.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(t.id,{date:i,name:n,amount:o,currency:a})}async saveTxnEdit(e,t){await this.patch(`/transaction/${e}`,t),this.editingTxnId=null,await this.refresh()}async archiveCategory(e){await this.patch(`/category/${e.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(e){await this.patch(`/category/${e}`,{active:1}),await this.refresh()}async deleteCategoryHard(e){confirm(`Permanently delete "${e.name}"? This can't be undone.`)&&(await this.del(`/category/${e.id}`),await this.refresh())}onQuickAdd(e,t,s){e.preventDefault();const i=e.target,n=Number(i.elements.namedItem("amount")?.value),o=(i.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),a=i.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o;const c=Math.min(this.logDay,this.daysInMonth(this.month)),u=`${this.month}-${String(c).padStart(2,"0")}`;this.logTxn(t,s,n,o,a,u),i.reset()}renderBar(e){const t=e===0?"bg-black/10":e>100?"bg-red-400":e>=75?"bg-amber-300":"bg-emerald-400";return r`
      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
        <div class="h-full rounded-full ${t}" style="width:${Math.min(100,e)}%"></div>
      </div>
    `}renderQuickAdd(e,t){return r`
      <form class="flex flex-col gap-1.5 px-3 py-2 sm:flex-row sm:items-center" @submit=${s=>this.onQuickAdd(s,e,t)}>
        <div class="flex items-center gap-1.5">
          <input name="amount" type="number" step="1" inputmode="decimal" placeholder="amount"
            class="h-8 flex-1 min-w-0 px-2 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink sm:flex-none sm:w-20" />
          ${this.renderCurrencySelect(this.lastCurrency)}
          ${this.renderDayPicker()}
        </div>
        <div class="flex items-center gap-1.5 sm:flex-1">
          <input name="name" type="text" placeholder="what for…"
            class="h-8 flex-1 min-w-0 px-2 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
          <button type="submit" class="h-8 shrink-0 px-3 text-sm rounded border border-ink text-ink hover:bg-hover">Add</button>
        </div>
      </form>
    `}renderTxnRow(e){const t=e.recurring_id!=null;return this.editingTxnId===e.id?r`
        <li class="py-1">
          <form class="flex flex-wrap items-center gap-1.5 text-sm" @submit=${s=>this.onSaveTxn(s,e)}>
            <input name="date" type="date" .value=${e.date}
              class="px-1.5 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input name="name" type="text" .value=${e.name??""} placeholder="what for…"
              class="flex-1 min-w-[5rem] px-2 py-1 bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input name="amount" type="number" step="0.01" inputmode="decimal" .value=${String(e.original_amount)}
              class="w-20 px-2 py-1 text-right bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            ${this.renderCurrencySelect(e.original_currency)}
            <button type="submit" class="px-2 py-1 text-xs rounded border border-ink text-ink hover:bg-hover">Save</button>
            <button type="button" class="sm:hidden px-2 py-1 text-xs text-muted hover:text-red-500" @click=${()=>{this.editingTxnId=null,this.deleteTxn(e.id)}}>Delete</button>
            <button type="button" class="px-2 py-1 text-xs text-muted hover:text-ink" @click=${()=>{this.editingTxnId=null}}>Cancel</button>
          </form>
        </li>
      `:r`
      <li class="group flex items-center gap-2 py-1 text-sm ${t?"italic":""}">
        <span class="text-muted text-xs w-16 shrink-0 ${t?"":"cursor-pointer"}" @click=${()=>this.startEditTxn(e)}>${e.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate ${t?"text-muted":"text-ink cursor-pointer hover:underline decoration-dotted underline-offset-2"}"
          @click=${()=>this.startEditTxn(e)} title=${t?"":"Edit"}>
          ${t?r`<span class="not-italic" title="Recurring — manage in the Recurring tab">↻ </span>`:d}${e.name||(e.type==="income"?"income":"—")}
        </span>
        <span class="shrink-0 tabular-nums ${t?"":"cursor-pointer"} ${e.type==="income"?"text-green-600":t?"text-muted":"text-ink"}"
          @click=${()=>this.startEditTxn(e)}>
          ${e.base!=null?this.fmt(e.base):`${e.original_amount} ${e.original_currency}`}
        </span>
        ${e.original_currency!==e.baseCurrency?r`<span class="text-[10px] text-muted shrink-0">${e.original_amount} ${e.original_currency}</span>`:d}
        ${t?r`<span class="w-3 shrink-0"></span>`:r`<button type="button" class="text-[10px] text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 shrink-0"
              @click=${()=>void this.deleteTxn(e.id)} title="Delete">×</button>`}
      </li>
    `}renderCatTxns(){return this.catTxns.length?r`
      <ul class="px-3 pb-1">
        ${this.catTxns.map(e=>this.renderTxnRow(e))}
      </ul>
    `:r`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(e,t=!1){const s=this.editingGoals,i=this.expandedCat===e.id&&!s&&!t,n=e.budget>0,o=e.committed??0,a=o>0,c=e.spent+o,u=n?Math.round(c/e.budget*100):0,h=n?Math.round(e.spent/e.budget*100):0,p=n&&c>e.budget,m=Math.min(100,h),b=Math.max(0,Math.min(100,u)-m),x=!s&&!t;return r`
      <li class="border-b border-line/60 last:border-0">
        <div class="grid grid-cols-[26px_1fr_56px_56px_52px] sm:grid-cols-[26px_1fr_56px_56px_104px] items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 ${x?"hover:bg-hover cursor-pointer":""}"
          @click=${x?()=>void this.toggleCat(e.id):null}>
          ${s?r`<button type="button" class="flex items-center justify-center hover:bg-hover rounded" title="Change icon"
                @click=${v=>{v.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}>${this.renderIcon(e.icon)}</button>`:this.renderIcon(e.icon)}
          ${s?r`<input type="text" .value=${e.name}
                class="w-full text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${v=>v.stopPropagation()}
                @change=${v=>this.saveCatName(e.id,v.target.value)} />`:r`<span class="text-sm font-semibold truncate ${t?"text-muted":"text-ink"}">${e.name}</span>`}
          ${s?r`<input type="number" step="1" inputmode="decimal" .value=${n?String(e.budget):""} placeholder="0"
                class="w-full text-right text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${v=>v.stopPropagation()}
                @change=${v=>this.saveGoalInline(e.id,Number(v.target.value))} />`:r`<span class="text-sm text-right tabular-nums ${n?"text-muted":"text-muted/40"}">${n?this.fmt(e.budget):"—"}</span>`}
          <span class="text-right leading-tight">
            <span class="block text-sm font-semibold tabular-nums ${p?"text-red-500":t?"text-muted":"text-ink"}">${this.fmt(e.spent)}</span>
            ${a?r`<span class="block text-[11px] tabular-nums text-amber-500" title="Recurring due this month, not yet paid">+${this.fmt(o)}</span>`:d}
          </span>
          ${t?r`<div class="flex items-center justify-end gap-2 text-[11px]">
                <button type="button" class="text-ink/60 hover:text-ink" @click=${v=>{v.stopPropagation(),this.restoreCategory(e.id)}}>Unhide</button>
                <button type="button" class="text-muted hover:text-red-500" @click=${v=>{v.stopPropagation(),this.deleteCategoryHard(e)}}>Delete</button>
              </div>`:s?r`<button type="button" class="text-[11px] text-right text-muted hover:text-red-500"
                  @click=${v=>{v.stopPropagation(),this.archiveCategory(e)}}>hide</button>`:n?r`<div class="flex items-center gap-2">
                    <div class="flex-1 min-w-0">
                      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden flex">
                        <div class="h-full ${p?"bg-red-400":"bg-emerald-400"}" style="width:${m}%"></div>
                        <div class="h-full bg-amber-300" style="width:${b}%"></div>
                      </div>
                    </div>
                    <span class="hidden sm:inline-block w-8 shrink-0 text-right text-[11px] tabular-nums ${p?"text-red-500":"text-muted"}">${Math.min(100,u)}%</span>
                  </div>`:r`<span class="text-[11px] text-right text-ink/40">set goal</span>`}
        </div>
        ${s&&this.emojiPickerFor===e.id?this.renderEmojiPalette(e.id):d}
        ${i?r`
              <div class="bg-bg/40 border-t border-line">
                ${this.renderQuickAdd(e.id,"expense")}
                ${this.renderCatTxns()}
              </div>
            `:d}
      </li>
    `}renderIncomePanel(){const e=this.budget?.income.committedItems??[],t=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),s=e.reduce((n,o)=>n+o.base,0),i=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] text-muted">Income · ${Wt(this.month)}</span>
          <span class="text-sm font-semibold tabular-nums text-emerald-600">${this.fmt(t+s)}</span>
        </div>
        ${this.incomeTxns.length||e.length?r`<ul class="px-3 py-1">
              ${this.incomeTxns.map(n=>this.renderTxnRow(n))}
              ${e.map(n=>r`
                <li class="flex items-center gap-2 py-1 text-sm italic text-muted" title="Expected recurring income">
                  <span class="text-xs w-16 shrink-0">${i(n.date)}</span>
                  <span class="flex-1 min-w-0 truncate"><span class="not-italic">↻ </span>${n.name}</span>
                  <span class="shrink-0 tabular-nums text-emerald-600/70">${this.fmt(n.base)}</span>
                  <span class="text-[10px] shrink-0">expected</span>
                </li>`)}
            </ul>`:r`<p class="px-4 py-2 text-xs text-muted">No income logged this month.</p>`}
        <div class="border-t border-line">${this.renderQuickAdd(null,"income")}</div>
      </div>
    `}presentCards(e){const t=this.cards.expenseDonut&&e.categories.some(s=>s.spent>0);return dd.filter(s=>s==="expenses"?!0:s==="savings"?this.cards.savingsGoal:s==="fixed"?this.cards.fixedPayments:t)}effectiveLayout(e){const t=this.presentCards(e),s=new Set(t),i=(this.budgetLayout??[]).filter(o=>s.has(o.id)).map(o=>({...o})),n=new Set(i.map(o=>o.id));for(const o of t)n.has(o)||i.push({id:o,span:hd[o]});return i}layoutRows(e){const t=[];for(let s=0;s<e.length;){const i=e[s],n=e[s+1];i.span===1&&n&&n.span===1?(t.push([i,n]),s+=2):(t.push([i]),s+=1)}return t}async saveBudgetLayout(e){this.budgetLayout=e,await this.post("/budget-layout",{layout:e})}onCardDragStart(e,t){if(this.dragCardId=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t);const s=e.currentTarget.closest("[data-card]");s&&e.dataTransfer.setDragImage(s,24,16)}}dropModeFor(e,t){const s=t.getBoundingClientRect(),i=(e.clientX-s.left)/s.width,n=(e.clientY-s.top)/s.height;return i<.28?"beside-left":i>.72?"beside-right":n<.5?"stack-before":"stack-after"}onCardDragOver(e,t){if(!this.dragCardId||t===this.dragCardId)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move");const s=this.dropModeFor(e,e.currentTarget);(this.dropTarget?.id!==t||this.dropTarget?.mode!==s)&&(this.dropTarget={id:t,mode:s})}onCardDrop(e,t){e.preventDefault();const s=this.dragCardId,i=this.dropTarget?.mode;this.dragCardId=null,this.dropTarget=null,!(!s||!i||s===t||!this.budget)&&this.applyDrop(this.effectiveLayout(this.budget),s,t,i)}applyDrop(e,t,s,i){const n=e.find(u=>u.id===t);if(!n)return;const o=e.filter(u=>u.id!==t),a=o.findIndex(u=>u.id===s);if(a<0)return;const c={...n};i==="beside-left"||i==="beside-right"?(c.span=1,o[a].span=1,o.splice(i==="beside-left"?a:a+1,0,c)):(c.span=2,o.splice(i==="stack-before"?a:a+1,0,c)),this.saveBudgetLayout(o)}cardContent(e,t,s){return e==="expenses"?this.renderExpensesCard(t):e==="savings"?this.renderSavingsCard(t,s):e==="fixed"?this.renderFixedCard(t,s):this.renderExpenseDonut(t)}renderDropIndicator(e){const t="pointer-events-none absolute z-20 rounded-full bg-blue-500",s=e==="beside-left"?`${t} left-0 top-2 bottom-2 w-1`:e==="beside-right"?`${t} right-0 top-2 bottom-2 w-1`:e==="stack-before"?`${t} top-0 left-2 right-2 h-1`:`${t} bottom-0 left-2 right-2 h-1`;return r`<div class=${s}></div>`}tileWidthClass(e,t){return t.length===1||!t.some(i=>i.id==="expenses")||e==="expenses"?"flex-1 min-w-0 w-full":"w-full @2xl:w-64 @2xl:shrink-0"}renderCardTile(e,t,s){const i=this.dropTarget?.id===e?this.dropTarget.mode:null;return r`
      <div data-card=${e} class="group relative ${s}"
        @dragover=${n=>this.onCardDragOver(n,e)}
        @drop=${n=>this.onCardDrop(n,e)}>
        ${t}
        <button type="button" draggable="true" title="Drag to rearrange"
          class="hidden @2xl:flex absolute top-1.5 right-1.5 z-10 h-6 w-6 items-center justify-center rounded-md
                 text-sm text-muted/60 hover:text-ink hover:bg-hover cursor-grab active:cursor-grabbing
                 opacity-0 group-hover:opacity-100 transition-opacity"
          @dragstart=${n=>this.onCardDragStart(n,e)}
          @dragend=${this.onCardDragEnd} @click=${n=>n.stopPropagation()}>
          <sc-icon name="lucide-grip-vertical"></sc-icon>
        </button>
        ${i?this.renderDropIndicator(i):d}
      </div>
    `}renderCardGrid(e,t){const s=this.layoutRows(this.effectiveLayout(e));return r`
      <div class="mx-3 mb-3 flex flex-col gap-3">
        ${s.map(i=>r`<div class="flex flex-col @2xl:flex-row gap-3 items-stretch @2xl:items-start">
            ${i.map(n=>this.renderCardTile(n.id,this.cardContent(n.id,e,t),this.tileWidthClass(n.id,i)))}
          </div>`)}
      </div>
    `}renderExpensesCard(e){const t=e.categories.filter(i=>i.active===1),s=e.categories.filter(i=>i.active===0);return r`
      <div class="rounded-xl border border-line bg-surface overflow-hidden">
        <div class="grid grid-cols-[26px_1fr_56px_56px_52px] sm:grid-cols-[26px_1fr_56px_56px_104px] items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-[10px] text-muted">
          <span></span>
          <button type="button" class="group/edit flex items-center gap-1 text-left hover:text-ink"
            title="Edit category names, icons & goals" @click=${()=>this.toggleEditGoals()}>
            ${this.editingGoals?"Done":r`Expenses <span class="opacity-0 group-hover/edit:opacity-100">✎</span>`}
          </button>
          <span class="text-right">Goal</span>
          <span class="text-right">Actual</span>
          <span></span>
        </div>
        <ul>
          ${t.length?t.map(i=>this.renderCategory(i)):r`<li class="px-4 py-4 text-xs text-muted">No categories yet. Click “Expenses” to add one, or tell the keeper "budget 400 for groceries."</li>`}
        </ul>
        ${this.editingGoals?r`
              ${this.emojiPickerFor==="new"?this.renderEmojiPalette("new"):d}
              <div class="flex gap-2 px-3 py-2 border-t border-line">
                <button type="button" class="w-9 h-9 shrink-0 rounded-lg border border-line flex items-center justify-center hover:bg-hover"
                  title="Pick an icon" @click=${()=>{this.emojiPickerFor=this.emojiPickerFor==="new"?null:"new"}}>
                  ${this.newCatIcon?this.renderIcon(this.newCatIcon):r`<span class="text-muted text-sm">🙂</span>`}
                </button>
                <input type="text" placeholder="new category…" .value=${this.newCat}
                  class="flex-1 min-w-0 px-3 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink"
                  @input=${i=>{this.newCat=i.target.value}}
                  @keydown=${i=>{i.key==="Enter"&&(i.preventDefault(),this.addCategory())}} />
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>void this.addCategory()}>+ Category</button>
              </div>`:d}
        ${s.length?r`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden · ${s.length}</button>
                ${this.showHidden?r`<ul>${s.map(i=>this.renderCategory(i,!0))}</ul>`:d}
              </div>`:d}
      </div>
    `}renderBudget(){const e=this.budget;if(!e)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.income.actual+(e.income.committed??0);return r`
      <!-- gradient summary -->
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          <button type="button" class="text-center group" title="View & log income" @click=${()=>void this.toggleIncome()}>
            <div class="text-[11px] text-white/70 flex items-center justify-center gap-1">
              Income <span class="transition-transform ${this.showIncome?"rotate-180":""}">▾</span>
            </div>
            <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight group-hover:underline decoration-white/40">${this.fmt(t)}</div>
          </button>
          ${this.stat("Spent",e.totalSpent)}
          ${this.stat("Left to spend",e.leftToSpend)}
        </div>
      </div>

      ${this.showIncome?this.renderIncomePanel():d}

      <!-- Draggable card grid (desktop): Expenses / Fixed / Savings / breakdown.
           Grip on each card → drop beside for 2 columns, in the middle to stack. -->
      ${this.renderCardGrid(e,t)}
    `}onSaveSavings(e){e.preventDefault();const t=e.target,s=Number(t.elements.namedItem("amount").value);!Number.isFinite(s)||s<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:s}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(e,t){const s=e.savingsGoal,i=t-e.totalSpent-e.totalCommitted,n=s&&s>0?Math.round(i/s*100):0;return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Savings goal</span>
          ${s!=null&&!this.editingSavings?r`<span class="text-[11px] tabular-nums ${i>=s?"text-emerald-600":"text-muted"}">${n}%</span>`:d}
        </div>
        ${this.editingSavings?r`
              <form class="mt-1 flex items-center gap-1.5" @submit=${o=>this.onSaveSavings(o)}>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${s!=null?String(s):""} placeholder="0" autofocus
                  class="w-24 px-2 py-1 text-sm bg-bg border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${this.base}</span>
                <button type="submit" class="ml-auto text-[11px] text-ink hover:underline">Save</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingSavings=!1}}>cancel</button>
              </form>`:r`
              <button type="button" class="mt-1 block text-left group" title="Edit savings goal" @click=${()=>{this.editingSavings=!0}}>
                ${s!=null?r`<span class="text-lg font-bold tabular-nums text-ink">${this.fmt(Math.max(0,i))}</span><span class="text-xs font-normal text-muted"> / ${this.fmt(s)}</span> <span class="text-[10px] text-muted group-hover:text-ink">✎</span>`:r`<span class="text-sm text-muted group-hover:text-ink">Set a savings goal ✎</span>`}
              </button>
              ${s!=null?r`<div class="mt-1.5">${this.renderBar(Math.max(0,n))}</div>`:d}`}
      </div>
    `}renderFixedCard(e,t){const s=e.fixedPayments,i=t>0?Math.round(s.total/t*100):0,n=o=>new Date(`${o}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Fixed payments · ${s.count}</span>
          <span class="text-[11px] tabular-nums text-muted">${i}% of income</span>
        </div>
        <div class="mt-1 text-lg font-bold tabular-nums text-ink">${this.fmt(s.total)}</div>
        ${s.items.length?r`<ul class="mt-1.5 space-y-0.5 max-h-56 overflow-y-auto">
              ${s.items.map(o=>r`<li class="flex items-center gap-2 text-xs">
                <span class="text-muted w-12 shrink-0 tabular-nums">${n(o.date)}</span>
                <span class="flex-1 min-w-0 truncate text-ink">${o.name}</span>
                <span class="shrink-0 tabular-nums text-muted">${this.fmt(o.base)}</span>
              </li>`)}
            </ul>`:r`<p class="mt-1 text-[11px] text-muted">No recurring payments this month.</p>`}
      </div>
    `}renderExpenseDonut(e){const t=e.categories.filter(i=>i.spent>0).sort((i,n)=>n.spent-i.spent);if(!t.length)return d;const s={type:"doughnut",data:{labels:t.map(i=>i.name),datasets:[{data:t.map(i=>Math.round(i.spent)),backgroundColor:t.map((i,n)=>In(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"right",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:i=>`${i.label}: ${this.fmt(Number(i.parsed))}`}}}}};return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between mb-1">
          <span class="text-[10px] text-muted">Expense breakdown</span>
          <span class="text-[11px] tabular-nums text-muted">${this.fmt(e.totalSpent)}</span>
        </div>
        <finance-chart .config=${s} height="200px"></finance-chart>
      </div>
    `}onAddAccount(e){e.preventDefault();const t=e.target,s=t.elements.namedItem("name").value.trim(),i=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),n=t.elements.namedItem("bucket").value,o=t.elements.namedItem("subtype").value.trim();if(!s||!i)return;const a=n==="Debts"?"debt":"asset";(async()=>(await this.post("/account",{name:s,currency:i,type:a,bucket:n,subtype:o||null}),this.showAccountAdd=!1,await this.refresh()))()}onSetBalance(e,t){t.preventDefault();const s=t.target,i=Number(s.elements.namedItem("amount").value);Number.isFinite(i)&&(async()=>(await this.post("/networth",{accountId:e,amount:i}),this.editingBalanceId=null,await this.refresh()))()}renderNwAccount(e){const t=this.editingBalanceId===e.id;return r`
      <li class="border-b border-line/60 last:border-0">
        <div class="flex items-center gap-2 px-4 py-2 hover:bg-hover cursor-pointer"
          @click=${()=>{this.editingBalanceId=t?null:e.id}}>
          <span class="flex-1 min-w-0 truncate">
            <span class="text-sm text-ink">${e.name}</span>
            ${e.subtype?r`<span class="ml-1.5 text-[10px] text-muted">${e.subtype}</span>`:d}
          </span>
          <span class="text-sm font-semibold shrink-0 tabular-nums ${e.type==="debt"?"text-red-500":"text-ink"}">
            ${e.base!=null?this.fmt(e.base):`${e.original} ${e.currency}`}
          </span>
        </div>
        ${t?r`
              <form class="flex gap-2 items-center flex-wrap px-4 py-2 bg-bg/40 border-t border-line"
                @submit=${s=>this.onSetBalance(e.id,s)}>
                <span class="text-[10px] text-muted">Balance</span>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${e.original?String(e.original):""}
                  class="w-28 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${e.currency}</span>
                <span class="text-[10px] text-muted">last: ${e.asOf}</span>
                <button type="submit" class="ml-auto px-2.5 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save (today)</button>
              </form>`:d}
      </li>
    `}renderNetworth(){const e=this.networth;return e?r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="text-[11px] text-white/70">Net worth · ${Wt(e.month)}</div>
        <div class="text-2xl font-bold tabular-nums leading-tight">${this.fmt(e.total)}</div>
      </div>

      ${e.groups.length?e.groups.map(t=>r`
            <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
                <span class="text-[11px] text-muted">${t.bucket}</span>
                <span class="text-sm font-semibold tabular-nums ${t.total<0?"text-red-500":"text-ink"}">${this.fmt(t.total)}</span>
              </div>
              <ul>${t.accounts.map(s=>this.renderNwAccount(s))}</ul>
            </div>`):r`<div class="mx-3 mb-3 px-4 py-4 text-xs text-muted rounded-xl border border-line bg-surface">No accounts with a balance as of ${e.month}.</div>`}

      <div class="mx-3 mb-3">
        ${this.showAccountAdd?r`
              <form class="flex flex-wrap gap-2 items-center px-3 py-2 rounded-xl border border-line bg-bg/40" @submit=${t=>this.onAddAccount(t)}>
                <input name="name" placeholder="account name…" autofocus
                  class="flex-1 min-w-[8rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="bucket" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="Liquid Assets">Liquid Assets</option>
                  <option value="Investments">Investments</option>
                  <option value="Physical Assets">Physical Assets</option>
                  <option value="Debts">Debts</option>
                </select>
                <input name="subtype" list="nw-subtypes" placeholder="type (e.g. Bank Account)"
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <datalist id="nw-subtypes">
                  <option value="Bank Account"></option><option value="Cash"></option><option value="Crypto"></option>
                  <option value="Stocks"></option><option value="Gold Investment"></option><option value="Vehicles"></option>
                  <option value="Primary Residence"></option><option value="Silver"></option>
                </datalist>
                <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Add</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showAccountAdd=!1}}>Cancel</button>
              </form>`:r`
              <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                @click=${()=>{this.showAccountAdd=!0}}>+ Account</button>`}
      </div>

      ${this.renderNetworthChart(e)}
    `:r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(e){if(e.series.length<2)return d;const t=e.series.slice(-24),s=["Liquid Assets","Investments","Physical Assets","Debts"],i={"Liquid Assets":"#6366f1",Investments:"#10b981","Physical Assets":"#f59e0b",Debts:"#ef4444"},n={type:"bar",data:{labels:t.map(o=>o.month),datasets:s.map(o=>({label:o,data:t.map(a=>Math.round(a.buckets[o]??0)),backgroundColor:i[o]}))},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:10,font:{size:10}}},tooltip:{callbacks:{label:o=>`${o.dataset.label}: ${this.fmt(Number(o.parsed.y))}`}}},scales:{x:{stacked:!0,ticks:{maxTicksLimit:8,font:{size:10}},grid:{display:!1}},y:{stacked:!0,ticks:{callback:o=>this.fmtShort(Number(o)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Net worth over time</div>
        <finance-chart .config=${n} height="220px"></finance-chart>
      </div>
    `}onAddRecurring(e){e.preventDefault();const t=e.target,s=t.elements.namedItem("name").value.trim(),i=Number(t.elements.namedItem("amount").value),n=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=t.elements.namedItem("type").value,a=t.elements.namedItem("frequency").value,c=t.elements.namedItem("category").value.trim();if(!s||!Number.isFinite(i)||i<=0)return;const u={name:s,amount:i,currency:n,type:o,frequency:a};o==="expense"&&c&&(u.category=c),(async()=>(await this.post("/recurring",u),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(e){const t=new Date().toISOString().slice(0,10),s=p=>!e.end_date||p<=e.end_date,[i,n,o]=e.start_date.split("-").map(Number);if(!i||!n||!o)return null;const a=p=>String(p).padStart(2,"0");if(e.frequency==="weekly"){let p=new Date(`${e.start_date}T00:00:00Z`);const m=new Date(`${t}T00:00:00Z`);if(p<m){const x=Math.ceil((m.getTime()-p.getTime())/6048e5);p=new Date(p.getTime()+x*7*864e5)}const b=p.toISOString().slice(0,10);return s(b)?b:null}const c=e.frequency==="yearly"?12:e.frequency==="quarterly"?3:1;let u=i,h=n;for(let p=0;p<2400;p++){const m=new Date(Date.UTC(u,h,0)).getUTCDate(),b=`${u}-${a(h)}-${a(Math.min(o,m))}`;if(b>=t)return s(b)?b:null;for(h+=c;h>12;)h-=12,u+=1}return null}toggleColumn(e){const t=this.recurringColumns.includes(e)?this.recurringColumns.filter(s=>s!==e):[...this.recurringColumns,e];this.recurringColumns=t,this.post("/recurring-columns",{columns:t})}toggleEditRecur(e){this.editingRecurId=this.editingRecurId===e?null:e,this.cancelingRecurId=null}startCancel(e){this.cancelingRecurId=this.cancelingRecurId===e?null:e,this.editingRecurId=null}onSaveRecur(e,t){e.preventDefault();const s=e.target,i=c=>s.elements.namedItem(c)?.value??"",n=i("type")==="income"?"income":"expense",o=Number(i("amount"));if(!i("name").trim()||!Number.isFinite(o)||o<=0)return;const a={name:i("name").trim(),amount:o,currency:(i("currency")||this.base).toUpperCase().trim(),type:n,frequency:i("frequency"),start:i("start"),category:n==="expense"&&i("category").trim()||null,end:i("end")||null};(async()=>(await this.patch(`/recurring/${t}`,a),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(e,t){e.preventDefault();const s=e.target.elements.namedItem("end")?.value;s&&(async()=>(await this.patch(`/recurring/${t}`,{end:s}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(e){await this.patch(`/recurring/${e}`,{end:null}),await this.refresh()}async deleteRecur(e){confirm("Delete this recurring item? Its logged transactions stay in your history; only the template is removed.")&&(await this.del(`/recurring/${e}`),this.editingRecurId=null,await this.refresh())}cancelIcon(){return r`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(e){const t=e.type==="income",s=new Date().toISOString().slice(0,10),i=this.nextDue(e),n=p=>new Date(`${p}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!e.end_date&&e.end_date>=s,a="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",c=p=>{switch(p){case"type":return r`<td class="px-3 py-2"><span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${t?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-600"}">${t?"IN":"OUT"}</span></td>`;case"category":return r`<td class="px-3 py-2 whitespace-nowrap" title=${t?"income":e.category_name||""}>${t?this.renderIcon("💰"):e.category_icon?this.renderIcon(e.category_icon):r`<span class="text-muted">${e.category_name||"—"}</span>`}</td>`;case"amount":return r`<td class="px-3 py-2 text-right tabular-nums font-semibold whitespace-nowrap ${t?"text-emerald-600":"text-ink"}">${t?"+":""}${this.fmt(e.original_amount,e.original_currency)}</td>`;case"frequency":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.frequency}</td>`;case"next":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${i?n(i):"ended"}</td>`;case"account":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.account_name||"—"}</td>`;case"end":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.end_date||"—"}</td>`;default:return d}},u=2+bs.filter(p=>this.recurringColumns.includes(p.key)).length,h=(p,m)=>p===m?"selected":"";return r`
      <tr class="group border-b border-line/60 last:border-0 cursor-pointer hover:bg-hover" @click=${()=>this.toggleEditRecur(e.id)}>
        <td class="px-3 py-2 font-medium text-ink whitespace-nowrap">
          ${e.name}
          ${o?r`<span class="ml-1.5 text-[10px] font-semibold text-amber-600">ending ${n(e.end_date)}</span>`:d}
        </td>
        ${bs.filter(p=>this.recurringColumns.includes(p.key)).map(p=>c(p.key))}
        <td class="px-2 py-2 text-right">
          <button type="button" class="${o?"text-amber-500":"text-muted opacity-0 group-hover:opacity-100"} hover:text-red-500"
            @click=${p=>{p.stopPropagation(),this.startCancel(e.id)}} title="Cancel subscription">${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===e.id?r`<tr><td colspan=${u} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onConfirmCancel(p,e.id)}>
              <span class="text-[11px] text-muted">Cancel from</span>
              <input name="end" type="date" .value=${e.end_date||i||s} class=${a} />
              <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Confirm</button>
              ${e.end_date?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink" @click=${()=>void this.resumeRecur(e.id)}>resume</button>`:d}
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.cancelingRecurId=null}}>close</button>
              <span class="text-[11px] text-muted">A payment due on/after this date still runs, then it ends.</span>
            </form>
          </td></tr>`:d}
      ${this.editingRecurId===e.id?r`<tr><td colspan=${u} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onSaveRecur(p,e.id)}>
              <input name="name" .value=${e.name} class="flex-1 min-w-[7rem] ${a}" />
              <input name="amount" type="number" step="1" inputmode="decimal" .value=${String(e.original_amount)} class="w-20 ${a}" />
              ${this.renderCurrencySelect(e.original_currency)}
              <select name="type" class=${a}><option value="expense" ?selected=${!t}>expense</option><option value="income" ?selected=${t}>income</option></select>
              <select name="frequency" class=${a}>
                <option value="monthly" ?selected=${h(e.frequency,"monthly")==="selected"}>monthly</option>
                <option value="weekly" ?selected=${h(e.frequency,"weekly")==="selected"}>weekly</option>
                <option value="quarterly" ?selected=${h(e.frequency,"quarterly")==="selected"}>quarterly</option>
                <option value="yearly" ?selected=${h(e.frequency,"yearly")==="selected"}>yearly</option>
              </select>
              <input name="category" placeholder="category" .value=${e.category_name||""} class="flex-1 min-w-[6rem] ${a}" />
              <label class="flex items-center gap-1 text-[10px] text-muted">start<input name="start" type="date" .value=${e.start_date} class=${a} /></label>
              <label class="flex items-center gap-1 text-[10px] text-muted">cancel from<input name="end" type="date" .value=${e.end_date||""} class=${a} /></label>
              <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save</button>
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingRecurId=null}}>close</button>
              ${e.end_date?r`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-500" @click=${()=>void this.deleteRecur(e.id)}>Delete</button>`:r`<span class="ml-auto text-[10px] text-muted">set a cancel date to enable delete</span>`}
              <span class="basis-full text-[10px] text-muted">A payment due on/after the cancel date still runs, then it ends. Deleting keeps logged transactions.</span>
            </form>
          </td></tr>`:d}
    `}monthlyEquiv(e){const t=e.base??e.original_amount;switch(e.frequency){case"weekly":return t*(52/12);case"quarterly":return t/3;case"yearly":return t/12;default:return t}}renderRecurringChart(){const e=this.recurring.filter(a=>a.type==="expense");if(!e.length)return d;const t=Gt(),s=[];for(let a=-11;a<=5;a++)s.push(Dn(t,a));const i=s.indexOf(t),n=s.map(a=>{const c=`${a}-31`,u=`${a}-01`;let h=0;for(const p of e)p.start_date>c||p.end_date&&p.end_date<u||(h+=this.monthlyEquiv(p));return Math.round(h)});return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Monthly recurring outflow <span class="normal-case">(dashed = projected)</span></div>
        <finance-chart .config=${{type:"line",data:{labels:s,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:a=>a.p1DataIndex>i?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:a=>`${this.fmt(Number(a.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:a=>this.fmtShort(Number(a)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const e=`${this.month}-31`,t=`${this.month}-01`,s=this.recurring.filter(c=>c.start_date<=e&&(!c.end_date||c.end_date>=t));let i=0,n=0;for(const c of s)c.type==="income"?n+=this.monthlyEquiv(c):i+=this.monthlyEquiv(c);const o=this.budget?this.budget.income.actual+(this.budget.income.committed??0):n,a=o>0?Math.round(i/o*100):0;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Out / mo",i)}
          ${this.stat("In / mo",n)}
          ${this.stat("Net / mo",n-i)}
        </div>
        ${o>0?r`<div class="mt-2 text-[11px] text-white/70 text-center">${s.length} active · fixed costs are ${a}% of income</div>`:d}
      </div>
    `}renderRecurring(){const e=new Date().toISOString().slice(0,10),t=n=>!!n.end_date&&n.end_date<e,s=this.recurring.filter(t),i=this.showEnded?this.recurring:this.recurring.filter(n=>!t(n));return r`
      ${this.recurring.length?this.renderRecurringHeader():d}
      <div class="mx-3 my-3 rounded-xl border border-line bg-surface overflow-hidden">
        <!-- column toggle -->
        <div class="relative flex items-center justify-end px-3 py-1.5 border-b border-line">
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns ▾</button>
          ${this.showColMenu?r`
                <div class="absolute right-3 top-8 z-20 rounded-xl border border-line bg-surface shadow-lg py-1" @click=${n=>n.stopPropagation()}>
                  ${bs.map(n=>r`
                    <label class="flex items-center gap-2 px-3 py-1 text-sm hover:bg-hover cursor-pointer whitespace-nowrap">
                      <input type="checkbox" ?checked=${this.recurringColumns.includes(n.key)} @change=${()=>this.toggleColumn(n.key)} />
                      <span>${n.label}</span>
                    </label>`)}
                </div>`:d}
        </div>
        ${this.recurring.length?r`
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="text-[10px] text-muted border-b border-line">
                      <th class="text-left font-normal px-3 py-1.5">Name</th>
                      ${bs.filter(n=>this.recurringColumns.includes(n.key)).map(n=>r`<th class="font-normal px-3 py-1.5 whitespace-nowrap ${n.key==="amount"?"text-right":"text-left"}">${n.label}</th>`)}
                      <th class="px-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    ${i.map(n=>this.renderRecurRow(n))}
                  </tbody>
                </table>
              </div>`:r`<div class="px-4 py-4 text-xs text-muted">No recurring items yet. They auto-log on their due date.</div>`}
        ${this.showRecurringAdd?r`
              <form class="flex flex-wrap gap-2 items-center px-3 py-2 border-t border-line bg-bg/40" @submit=${n=>this.onAddRecurring(n)}>
                <input name="name" placeholder="name (e.g. Rent)…" autofocus
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <input name="amount" type="number" step="1" inputmode="decimal" placeholder="amount"
                  class="w-20 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="type" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="expense">expense</option>
                  <option value="income">income</option>
                </select>
                <select name="frequency" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="monthly">monthly</option>
                  <option value="weekly">weekly</option>
                  <option value="quarterly">quarterly</option>
                  <option value="yearly">yearly</option>
                </select>
                <input name="category" placeholder="category (expense)"
                  class="flex-1 min-w-[6rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Add</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showRecurringAdd=!1}}>Cancel</button>
              </form>`:r`
              <div class="px-3 py-2 border-t border-line flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-[11px] text-muted">Auto-logs on the due date.</span>
                  ${s.length?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink underline decoration-dotted"
                        @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended":`Show ${s.length} ended`}</button>`:d}
                </div>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>{this.showRecurringAdd=!0}}>+ Recurring</button>
              </div>`}
      </div>
      ${this.recurring.length?this.renderRecurringChart():d}
    `}gotoYear(e){this.yearN+=e,this.expandedYearMonth=null,this.refresh()}async toggleYearMonth(e){if(this.expandedYearMonth===e){this.expandedYearMonth=null;return}this.expandedYearMonth=e;try{const t=await fetch(`/api/finance/transactions?month=${e}`);t.ok&&(this.yearMonthTxns=(await t.json()).items)}catch{}}renderYearMonthDetail(){const e=this.yearMonthTxns;if(!e.length)return r`<p class="text-xs text-muted">No transactions.</p>`;const t=n=>{const o=n.recurring_id!=null;return r`<li class="flex items-center gap-2 py-0.5 text-xs ${o?"italic text-muted":""}">
        <span class="text-muted w-11 shrink-0 tabular-nums">${n.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate">${o?"↻ ":""}${n.name||"—"}</span>
        <span class="shrink-0 tabular-nums ${n.type==="income"?"text-emerald-600":"text-ink"}">${n.base!=null?this.fmt(n.base):`${n.original_amount} ${n.original_currency}`}</span>
      </li>`},s=e.filter(n=>n.type==="income"),i=e.filter(n=>n.type==="expense");return r`
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        <div>
          <div class="text-[10px] text-muted mb-0.5">Income</div>
          <ul>${s.length?s.map(t):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
        <div>
          <div class="text-[10px] text-muted mb-0.5">Expenses</div>
          <ul>${i.length?i.map(t):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
      </div>
    `}renderYear(){const e=this.year;if(!e)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.months.map(p=>new Date(`${p.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),s=8,i=e.categories.slice(0,s),n=e.categories.slice(s),o=n.length?Array.from({length:12},(p,m)=>n.reduce((b,x)=>b+(x.monthly[m]??0),0)):null,a=i.map((p,m)=>({type:"bar",label:p.name,data:p.monthly.map(b=>Math.round(b)),backgroundColor:In(m),stack:"spend",borderWidth:0}));o&&a.push({type:"bar",label:"Other",data:o.map(p=>Math.round(p)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const c={type:"line",label:"Income",data:e.months.map(p=>Math.round(p.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},u={type:"bar",data:{labels:t,datasets:[...a,c]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:p=>`${p.dataset.label}: ${this.fmt(Number(p.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:p=>this.fmtShort(Number(p)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},h=e.totals;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Income",h.income)}
          ${this.stat("Spent",h.spent)}
          ${this.stat("Saved",h.saved)}
        </div>
        <div class="mt-2 text-[11px] text-white/70">Savings rate ${Math.round(h.savingsRate*100)}%</div>
      </div>

      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Spending by category · income line</div>
        <finance-chart .config=${u} height="240px"></finance-chart>
      </div>

      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-[10px] text-muted border-b border-line">
                <th class="text-left font-normal px-3 py-1.5">Month</th>
                <th class="text-right font-normal px-3 py-1.5">Income</th>
                <th class="text-right font-normal px-3 py-1.5">Spent</th>
                <th class="text-right font-normal px-3 py-1.5">Saved</th>
                <th class="text-right font-normal px-3 py-1.5">Rate</th>
              </tr>
            </thead>
            <tbody>
              ${e.months.map((p,m)=>{const b=p.income>0?Math.round(p.saved/p.income*100):0,x=p.income===0&&p.spent===0,v=this.expandedYearMonth===p.month;return r`<tr class="border-b border-line/60 ${x?"opacity-40":"cursor-pointer hover:bg-hover"} ${v?"bg-hover":""}"
                    @click=${x?null:()=>void this.toggleYearMonth(p.month)}>
                    <td class="px-3 py-1.5 text-ink">${v?"▾":"▸"} ${t[m]}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${p.income?this.fmt(p.income):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-ink">${p.spent?this.fmt(p.spent):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums ${p.saved<0?"text-red-500":"text-ink"}">${x?"—":this.fmt(p.saved)}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-muted">${x?"—":`${b}%`}</td>
                  </tr>
                  ${v?r`<tr><td colspan="5" class="px-3 py-2 bg-bg/40 border-b border-line">${this.renderYearMonthDetail()}</td></tr>`:d}`})}
            </tbody>
            <tfoot>
              <tr class="border-t border-line font-semibold">
                <td class="px-3 py-1.5 text-ink">Total</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${this.fmt(h.income)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-ink">${this.fmt(h.spent)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums ${h.saved<0?"text-red-500":"text-ink"}">${this.fmt(h.saved)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-muted">${Math.round(h.savingsRate*100)}%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `}render(){const e=(s,i)=>r`
      <button type="button"
        class="px-2 sm:px-3 py-1.5 text-sm border-b-2 ${this.tab===s?"border-ink text-ink":"border-transparent text-muted hover:text-ink"}"
        @click=${()=>this.setTab(s)}>${i}</button>
    `,t=(s,i)=>r`<span class="@xl:hidden">${s}</span><span class="hidden @xl:inline">${i}</span>`;return r`
      ${this.demoMode?r`<style>.finance-demo .tabular-nums { filter: blur(6px); user-select: none; transition: filter 0.2s; }</style>`:d}
      <div class="flex flex-col h-full ${this.demoMode?"finance-demo":""}">
        <header class="px-4 pt-2 border-b border-line shrink-0">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full flex items-center justify-between gap-2 @container">
            <div class="flex gap-1 -mb-px">
              ${e("budget","Budget")} ${e("recurring",t("Fixed","Recurring"))} ${e("networth",t("NW","Net worth"))} ${e("year","Year")}
            </div>
            <div class="flex items-center gap-3 shrink-0">
              ${this.tab==="budget"||this.tab==="networth"?r`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(-1)}>◀</button>
                      <button type="button" class="text-ink hover:underline decoration-dotted" title="Jump to current month" @click=${()=>this.toCurrentMonth()}><span class="sm:hidden">${md(this.month)}</span><span class="hidden sm:inline">${Wt(this.month)}</span></button>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(1)}>▶</button>
                    </div>`:this.tab==="year"?r`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(-1)}>◀</button>
                      <span class="text-ink">${this.yearN}</span>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(1)}>▶</button>
                    </div>`:d}
              <button type="button" class="text-base ${this.demoMode?"text-amber-500":"text-muted hover:text-ink"}" title="${this.demoMode?"Demo mode on — click to show real numbers":"Demo mode"}"
                @click=${()=>{this.demoMode=!this.demoMode}}><sc-icon name="lucide-${this.demoMode?"eye-off":"eye"}"></sc-icon></button>
              <button type="button" class="text-base ${this.showSettings?"text-ink":"text-muted hover:text-ink"}" title="Finance settings"
                @click=${()=>{this.showSettings=!this.showSettings}}><sc-icon name="lucide-settings"></sc-icon></button>
            </div>
          </div>
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full @container">
            ${this.showSettings?this.renderSettings():d}
            ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.tab==="budget"?this.renderBudget():this.tab==="networth"?this.renderNetworth():this.tab==="year"?this.renderYear():this.renderRecurring()}
          </div>
        </div>
      </div>
    `}};I([l()],T.prototype,"tab",2);I([l()],T.prototype,"month",2);I([l()],T.prototype,"loading",2);I([l()],T.prototype,"base",2);I([l()],T.prototype,"budget",2);I([l()],T.prototype,"expandedCat",2);I([l()],T.prototype,"catTxns",2);I([l()],T.prototype,"newCat",2);I([l()],T.prototype,"newCatIcon",2);I([l()],T.prototype,"emojiPickerFor",2);I([l()],T.prototype,"showHidden",2);I([l()],T.prototype,"logDay",2);I([l()],T.prototype,"networth",2);I([l()],T.prototype,"recurring",2);I([l()],T.prototype,"year",2);I([l()],T.prototype,"yearN",2);I([l()],T.prototype,"expandedYearMonth",2);I([l()],T.prototype,"yearMonthTxns",2);I([l()],T.prototype,"editingSavings",2);I([l()],T.prototype,"editingGoals",2);I([l()],T.prototype,"editingTxnId",2);I([l()],T.prototype,"showIncome",2);I([l()],T.prototype,"incomeTxns",2);I([l()],T.prototype,"showAccountAdd",2);I([l()],T.prototype,"editingBalanceId",2);I([l()],T.prototype,"showRecurringAdd",2);I([l()],T.prototype,"editingRecurId",2);I([l()],T.prototype,"cancelingRecurId",2);I([l()],T.prototype,"recurringColumns",2);I([l()],T.prototype,"currencies",2);I([l()],T.prototype,"supportedCurrencies",2);I([l()],T.prototype,"lastCurrency",2);I([l()],T.prototype,"showSettings",2);I([l()],T.prototype,"demoMode",2);I([l()],T.prototype,"cards",2);I([l()],T.prototype,"recurringAsPaid",2);I([l()],T.prototype,"showColMenu",2);I([l()],T.prototype,"showEnded",2);I([l()],T.prototype,"budgetLayout",2);I([l()],T.prototype,"dragCardId",2);I([l()],T.prototype,"dropTarget",2);T=I([k("finance-section")],T);async function fd(e,t=400,s=.85){const i=await jo(e,t);if(!i)return await gd(e);const n=i.toDataURL("image/webp",s);return n.startsWith("data:image/webp")?n:i.toDataURL("image/jpeg",s)}async function mh(e,t=1600,s=.85){let i;try{i=await jo(e,t)}catch{return e}if(!i)return e;const n=a=>new Promise(c=>i.toBlob(c,a,s));let o=await n("image/webp");return(!o||o.type!=="image/webp")&&(o=await n("image/jpeg")),o&&o.size<e.size?o:e}async function jo(e,t){const s=URL.createObjectURL(e);try{const i=await new Promise((h,p)=>{const m=new Image;m.onload=()=>h(m),m.onerror=()=>p(new Error("could not decode image")),m.src=s}),n=Math.min(1,t/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*n)),a=Math.max(1,Math.round(i.height*n)),c=document.createElement("canvas");c.width=o,c.height=a;const u=c.getContext("2d");return u?(u.drawImage(i,0,0,o,a),c):null}finally{URL.revokeObjectURL(s)}}function gd(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}var bd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,U=(e,t,s,i)=>{for(var n=i>1?void 0:i?xd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&bd(t,s,n),n};let j=class extends C{constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.detailsOpen=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=e=>{const t=e.composedPath();if(this.editingNote==="new"){const s=this.renderRoot.querySelector(".newnote-card");s&&!t.includes(s)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newfact-form");s&&!t.includes(s)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newaction-form");s&&!t.includes(s)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const s=this.renderRoot.querySelector(".inline-edit");s&&!t.includes(s)&&(s.blur(),s.dispatchEvent(new Event("blur")))}},this.onOpsEvent=e=>{const t=e.detail,s=t?.action;if(s==="open-person"&&typeof t?.person=="number"){this.open(t.person);return}s==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onOpenReviewIntent=()=>{try{localStorage.removeItem("circle.intent")}catch{}this.openReview()},this.onPaste=async e=>{const t=e;if(this.selectedId==null||!t.clipboardData)return;const s=document.activeElement;if(s&&/^(INPUT|TEXTAREA)$/.test(s.tagName))return;for(const n of Array.from(t.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){t.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const i=t.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(i)){t.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("circle-open-review",this.onOpenReviewIntent),document.addEventListener("paste",this.onPaste);const e=(()=>{try{return localStorage.getItem("circle.open")}catch{return null}})(),t=e?this.fetchDetail(Number(e)):null;this.refresh().then(()=>{this.restoreOpen(t),this.consumeReviewIntent()})}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("circle-open-review",this.onOpenReviewIntent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}consumeReviewIntent(){try{localStorage.getItem("circle.intent")==="review"&&(localStorage.removeItem("circle.intent"),this.openReview())}catch{}}async refresh(){try{const e=await fetch("/api/circle");if(e.ok){const t=await e.json();this.circles=t.circles,this.people=t.people,this.pendingCount=t.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async fetchDetail(e){try{const t=await fetch(`/api/circle/person/${e}`);if(t.ok)return(await t.json()).person}catch{}return null}async loadDetail(e,t){const s=await(t??this.fetchDetail(e));s&&this.selectedId===e&&(this.detail=s)}open(e,t){this.selectedId=e,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.detailsOpen=!1;try{localStorage.setItem("circle.open",String(e))}catch{}this.reportFocus(e),this.loadDetail(e,t)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(e){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).catch(()=>{})}restoreOpen(e=null){try{const t=localStorage.getItem("circle.open");t&&this.people.some(s=>s.id===Number(t))&&this.open(Number(t),e??void 0)}catch{}}circleName(e){return e==null?"New":this.circles.find(t=>t.id===e)?.name??"New"}circleNames(e){const s=(e.circle_ids?.length?e.circle_ids:e.circle_id!=null?[e.circle_id]:[]).map(i=>this.circles.find(n=>n.id===i)?.name).filter(i=>!!i);return s.length?s:["New"]}primaryCircleName(e){return this.circleNames(e)[0]??"New"}async patchPerson(e,t){await fetch(`/api/circle/person/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async post(e,t){const s=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});await this.refresh();try{return await s.json()}catch{return null}}async patch(e,t){await fetch(e,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async del(e){await fetch(e,{method:"DELETE"}),await this.refresh()}async createAndAssign(e,t){const s=t.trim();if(this.creatingCircle=!1,!s)return;const i=await this.post("/api/circle/circle",{name:s});i?.id&&await this.post(`/api/circle/person/${e}/circle`,{circle_id:i.id})}async addPerson(){const e=this.draftName.trim();if(!e)return;const t=await this.post("/api/circle/person",{name:e,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,t?.id&&this.open(t.id)}async removePerson(e){confirm(`Remove ${e.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${e.id}`),this.back())}async onPhotoFile(e,t){const s=t.target,i=s.files?.[0];s.value="",i&&await this.uploadPhotoFile(e.id,i)}async uploadPhotoFile(e,t){if(!t.type.startsWith("image/")){alert("That's not an image.");return}if(t.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const s=await fd(t,400,.85);await this.patchPerson(e,{photo:s})}catch{alert("Couldn't process that image.")}}initials(e){const t=e.trim().split(/\s+/);return t.length===1?(t[0]?.slice(0,2)??"").toUpperCase():((t[0]?.[0]??"")+(t[t.length-1]?.[0]??"")).toUpperCase()}avatarStyle(e){let t=0;for(const s of e)t=(t*31+s.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${t} 68% 55%), hsl(${(t+48)%360} 70% 45%));`}renderAvatar(e,t="w-9 h-9",s="text-xs"){return e.photo?r`<img src=${e.photo} alt="" class="${t} rounded-full object-cover shrink-0" loading="lazy" />`:r`<span class="${t} ${s} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}relTime(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/86400);return t<=0?"today":t===1?"yesterday":t<30?`${t}d ago`:t<365?`${Math.floor(t/30)}mo ago`:`${Math.floor(t/365)}y ago`}fmtDate(e,t){const s=e?new Date(e+"T12:00:00"):new Date(t*1e3),i={month:"long",day:"numeric"};return s.getFullYear()!==new Date().getFullYear()&&(i.year="numeric"),s.toLocaleDateString(void 0,i)}fmtMeetDate(e){const t=new Date(e+"T12:00:00"),s={weekday:"long",month:"short",day:"numeric"};return t.getFullYear()!==new Date().getFullYear()&&(s.year="numeric"),t.toLocaleDateString(void 0,s)}filteredPeople(){return this.filter==="needs"?this.people.filter(e=>(e.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(e=>this.circleNames(e).includes(this.filter))}renderRow(e){const t=e.title&&e.company?`${e.title}, ${e.company}`:e.company??e.title??this.circleNames(e).join(", "),s=e.open_actions??0;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover" @click=${()=>this.open(e.id)}>
          ${this.renderAvatar(e,"w-10 h-10","text-sm")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 pr-3 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${e.name}</span>
              <span class="block text-xs text-muted truncate">${t}</span>
            </span>
            ${s>0?r`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${s} to do</span>`:d}
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>`}renderListBody(){const e=this.filteredPeople();if(e.length===0)return r`<p class="px-4 py-3 text-xs text-muted">${this.filter==="needs"?"Nothing open. You're caught up.":"No one here yet. Add someone, or tell the Circle keeper about a person you met."}</p>`;if(this.filter!=="all")return r`<ul>${e.map(n=>this.renderRow(n))}</ul>`;const t=[...this.circles.map(n=>n.name),"New"],s=new Set,i=t.filter(n=>!s.has(n)&&(s.add(n),!0)).map(n=>({name:n,people:e.filter(o=>this.primaryCircleName(o)===n)})).filter(n=>n.people.length>0);return r`${i.map(n=>r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">${n.name} (${n.people.length})</h3>
        <ul>${n.people.map(o=>this.renderRow(o))}</ul>
      </section>`)}`}renderList(){const e=this.people.some(o=>(o.open_actions??0)>0),t=[{key:"all",label:"All"}];e&&t.push({key:"needs",label:"Needs you"});const s=this.circles.filter(o=>o.id<=9),i=this.circles.filter(o=>o.id>9),n=o=>r`<button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-full border transition-colors ${this.filter===o.key?"border-accent bg-accent text-white":"border-line text-muted hover:bg-hover"}" @click=${()=>this.filter=o.key}>${o.label}</button>`;return r`
      <header class="px-4 py-3 border-b border-line shrink-0">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-ink">Circles</h2>
          <div class="flex items-center gap-2">
            ${this.pendingCount>0?r`<button type="button" class="text-xs px-2 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 hover:bg-violet-500/25" @click=${()=>void this.openReview()}>${this.pendingCount} to confirm</button>`:d}
            <button type="button" class="text-xs px-2.5 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{this.adding=!this.adding}}>+ Add</button>
          </div>
        </div>
        ${this.adding?r`
          <div class="flex flex-wrap gap-1.5 mt-2.5">
            <input type="text" placeholder="Name" class="flex-1 min-w-[8rem] px-2 py-1.5 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              .value=${this.draftName} @input=${o=>this.draftName=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this.addPerson(),o.key==="Escape"&&(this.adding=!1)}} autofocus />
            <input type="text" list="circle-options" placeholder="Circle" class="w-32 px-2 py-1.5 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              .value=${this.draftCircle} @input=${o=>this.draftCircle=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this.addPerson()}} />
            <datalist id="circle-options">${this.circles.map(o=>r`<option value=${o.name}></option>`)}</datalist>
            <button type="button" class="text-sm px-3 py-1.5 rounded bg-ink text-bg hover:opacity-90 disabled:opacity-40" ?disabled=${!this.draftName.trim()} @click=${()=>void this.addPerson()}>Add</button>
          </div>`:d}
        <div class="flex items-center gap-1.5 mt-2.5 overflow-x-auto -mx-1 px-1 pb-0.5 no-scrollbar">
          ${t.map(n)}
          ${s.map(o=>n({key:o.name,label:o.name}))}
          ${i.length>0?r`<span class="shrink-0 w-px h-4 bg-line mx-0.5 self-center"></span>`:d}
          ${i.map(o=>n({key:o.name,label:o.name}))}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(e,t,s){return r`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${e}</h3>
          ${s??d}
        </div>
        ${t}
      </section>`}collapsibleSection(e,t,s,i){return r`
      <section class="px-4 pt-4 pb-1">
        <button type="button" class="flex items-center gap-1 mb-2 group/sec" @click=${s}>
          <span class="text-[11px] font-medium tracking-wide text-muted group-hover/sec:text-ink">${e}</span>
          <span class="text-[10px] text-muted group-hover/sec:text-ink transition-transform ${t?"rotate-90":""}">›</span>
        </button>
        ${t?i:d}
      </section>`}headerInput(e,t,s,i){return r`<input type="text" placeholder=${t} class="${s} bg-transparent w-full focus:outline-none focus:bg-surface rounded px-1 -mx-1"
      .value=${e??""} @change=${n=>i(n.target.value.trim())} />`}toggleNoteExpand(e){this.expandedNotes=this.expandedNotes.includes(e)?this.expandedNotes.filter(t=>t!==e):[...this.expandedNotes,e]}noteRows(e){const t=e.split(`
`).reduce((s,i)=>s+Math.max(1,Math.ceil(i.length/65)),0);return Math.min(40,Math.max(3,t+1))}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}truncateBody(e){const t=e.split(`
`);if(t.length>=6)return t.slice(0,5).join(`
`).trimEnd();if(e.length<=280)return e;const s=e.slice(0,260),i=s.lastIndexOf(" ");return(i>200?s.slice(0,i):s).trimEnd()}renderNoteCard(e,t){const s=t.body.length>280||(t.body.match(/\n/g)?.length??0)>=6,i=this.expandedNotes.includes(t.id);return r`
      <article class="group/note rounded-lg border border-line p-3 mb-2">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            ${this.editingField===`ntitle:${t.id}`?r`<input class="inline-edit w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" .value=${t.title??""} autofocus
                  @blur=${n=>{this.patch(`/api/circle/note/${t.id}`,{title:n.target.value.trim()||null}),this.editingField=null}}
                  @keydown=${n=>{n.key==="Enter"?n.target.blur():n.key==="Escape"&&(this.editingField=null)}} />`:r`<h4 class="text-sm font-semibold text-ink cursor-text hover:bg-hover rounded px-1 -mx-1 truncate" @click=${()=>{this.editingField=`ntitle:${t.id}`}}>${t.title||r`<span class="text-muted/50 font-normal italic">Add a title</span>`}</h4>`}
          </div>
          <button type="button" class="opacity-0 group-hover/note:opacity-100 text-muted hover:text-red-500 text-xs shrink-0" @click=${()=>void this.del(`/api/circle/note/${t.id}`)}>✕</button>
        </div>
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(t.occurred_on,t.created_at)}</div>
        ${this.editingField===`nbody:${t.id}`?r`<textarea class="inline-edit w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none overflow-hidden mt-2" rows=${this.noteRows(t.body)} autofocus
              @input=${n=>this.autoGrow(n.target)}
              @blur=${n=>{this.patch(`/api/circle/note/${t.id}`,{body:n.target.value.trim()}),this.editingField=null}}>${t.body}</textarea>`:r`
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${t.id}`}}>${i||!s?t.body:this.truncateBody(t.body)}${s?r`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(t.id)}}>${i?" Show less":"… Read more"}</button>`:d}</p>`}
      </article>`}renderNewNoteCard(){return r`
      <article class="newnote-card rounded-lg border border-ink/40 p-3 mb-2">
        <input id="nn-title" type="text" placeholder="Title" class="w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" />
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(new Date().toISOString().slice(0,10),0)}</div>
        <textarea id="nn-body" rows="4" placeholder="What happened, what you talked about, your read on them…"
          class="w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none mt-2" autofocus></textarea>
      </article>`}async saveNewNote(){if(this.editingNote!=="new"||this.selectedId==null)return;const e=this.renderRoot.querySelector("#nn-title")?.value.trim()||null,t=this.renderRoot.querySelector("#nn-body")?.value.trim();this.editingNote=null,t&&await this.post(`/api/circle/person/${this.selectedId}/note`,{title:e,body:t,kind:"talk",date:new Date().toISOString().slice(0,10)})}renderFacts(e){return r`
      ${e.facts.length===0?r`<p class="text-xs text-muted italic mb-1">Nothing yet. Add a detail, or it fills in as you talk about them.</p>`:d}
      <div class="space-y-1">
        ${e.facts.map(t=>r`
          <div class="flex items-center gap-2 group/f">
            <input type="text" placeholder="label" class="w-28 shrink-0 text-[11px] text-muted bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface focus:text-ink"
              .value=${t.label??""} @change=${s=>void this.patch(`/api/circle/fact/${t.id}`,{label:s.target.value.trim()||null})} />
            <input type="text" class="flex-1 min-w-0 text-sm text-ink bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface"
              .value=${t.value} @change=${s=>{const i=s.target.value.trim();i?this.patch(`/api/circle/fact/${t.id}`,{value:i}):this.del(`/api/circle/fact/${t.id}`)}} />
            <button type="button" class="opacity-0 group-hover/f:opacity-100 text-muted hover:text-red-500 text-xs" @click=${()=>void this.del(`/api/circle/fact/${t.id}`)}>✕</button>
          </div>`)}
      </div>
      <div class="flex gap-1.5 mt-2">
        <input id="fact-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
        <input id="fact-value" type="text" placeholder="add a detail…" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
          @keydown=${t=>{t.key==="Enter"&&this.submitFact(e.id)}} />
        <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitFact(e.id)}>Add</button>
      </div>`}parseTags(e){if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.map(String):[]}catch{return[]}}async setTags(e,t){await this.patch(`/api/circle/person/${e}`,{tags:t})}renderTags(e){const t=this.parseTags(e.tags);return r`
      <div class="flex flex-wrap items-center gap-1.5">
        ${t.map(s=>r`<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}
          <button type="button" class="text-muted hover:text-red-500" @click=${()=>void this.setTags(e.id,t.filter(i=>i!==s))}>✕</button></span>`)}
        <input type="text" placeholder="+ tag" class="w-20 text-xs bg-transparent px-1 py-0.5 focus:outline-none focus:bg-surface rounded text-ink"
          @keydown=${s=>{if(s.key==="Enter"){const i=s.target,n=i.value.trim();n&&!t.includes(n)&&(this.setTags(e.id,[...t,n]),i.value="")}}} />
      </div>`}submitFact(e){const t=this.renderRoot.querySelector("#fact-label"),s=this.renderRoot.querySelector("#fact-value"),i=s?.value.trim();i&&(this.post(`/api/circle/person/${e}/fact`,{value:i,label:t?.value.trim()||null}),t&&(t.value=""),s&&(s.value=""))}renderCheck(e,t){return r`<button type="button"
      class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
      style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
      aria-label=${e?"Mark not done":"Mark done"}
      @click=${t}>
      ${e?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:d}
    </button>`}renderActions(e){const t=e.actions.filter(n=>n.done!==1),s=e.actions.filter(n=>n.done===1),i=this.showCompletedActions?[...t,...s]:t;return r`
      <ul class="space-y-0.5">${i.map(n=>r`
        <li class="flex items-center gap-2 group/a text-sm">
          ${this.renderCheck(n.done===1,()=>void this.patch(`/api/circle/action/${n.id}`,{done:n.done!==1}))}
          ${this.editingField===`action:${n.id}`?r`<input type="text" class="flex-1 px-1 py-0 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
                .value=${n.body}
                @blur=${o=>{const a=o.target.value.trim();a&&a!==n.body&&this.patch(`/api/circle/action/${n.id}`,{body:a}),this.editingField=null}}
                @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}}
                @click=${o=>o.stopPropagation()} />`:r`<span class="flex-1 cursor-text ${n.done?"line-through text-muted":"text-ink"}" @click=${()=>{this.editingField=`action:${n.id}`}}>${n.body}</span>`}
          <button type="button" class="opacity-0 group-hover/a:opacity-100 text-muted hover:text-red-500 text-xs" @click=${()=>void this.del(`/api/circle/action/${n.id}`)}>✕</button>
        </li>`)}</ul>
      ${this.editingField==="newaction"?r`<div class="newaction-form flex gap-1.5 mt-1.5">
            <input id="action-body" type="text" placeholder="something you owe them…" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${n=>{n.key==="Enter"?this.submitAction(e.id):n.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitAction(e.id)}>Add</button>
          </div>`:r`<div class="flex items-center gap-4 ${t.length?"mt-1.5":""}">
            <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.editingField="newaction"}}>+ add</button>
            ${s.length?r`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>done (${s.length})</button>`:d}
          </div>`}`}submitAction(e){const s=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,s&&this.post(`/api/circle/person/${e}/action`,{body:s})}inlineField(e,t,s){return r`
      <label class="block">
        <span class="text-[10px] text-muted">${e}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${t??""} @change=${i=>s(i.target.value.trim())} />
      </label>`}readKeepingInTouch(e){return e.next_meet_date?r`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(e.next_meet_date,0)}</div>`:d}readFacts(e){if(!e.facts.length)return d;const t=e.facts.filter(i=>i.label),s=e.facts.filter(i=>!i.label);return this.section("Details",r`
      ${t.map(i=>r`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${i.label}</span>
        <span class="text-ink flex-1">${i.value}</span></div>`)}
      ${s.length?r`<ul class="mt-1 space-y-0.5">${s.map(i=>r`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${i.value}</li>`)}</ul>`:d}`)}readTags(e){const t=this.parseTags(e.tags);return t.length?this.section("Tags",r`<div class="flex flex-wrap gap-1.5">${t.map(s=>r`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}</span>`)}</div>`):d}readActions(e){return e.actions.length?this.section("Action items",r`<ul class="space-y-0.5">${e.actions.map(t=>r`
      <li class="flex items-center gap-2 text-sm">
        ${this.renderCheck(t.done===1,()=>void this.patch(`/api/circle/action/${t.id}`,{done:t.done!==1}))}
        <span class="${t.done?"line-through text-muted":"text-ink"}">${t.body}</span>
      </li>`)}</ul>`):d}readContact(e){const t=[];return e.email&&t.push(["Email",e.email]),e.phone&&t.push(["Phone",e.phone]),t.length?this.section("Details",r`${t.map(([s,i])=>r`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${s}</span><span class="text-ink flex-1">${i}</span></div>`)}`):d}renderDetailAvatar(e){return r`
      <div class="relative shrink-0">
        <button type="button" class="relative group/av w-16 h-16 rounded-full overflow-hidden block" title="Set photo" @click=${()=>{this.photoMenuOpen=!this.photoMenuOpen}}>
          ${e.photo?r`<img src=${e.photo} alt="" class="w-16 h-16 rounded-full object-cover" />`:r`<span class="w-16 h-16 text-xl rounded-full grid place-items-center text-white font-semibold shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}
          <span class="absolute inset-0 rounded-full bg-black/45 text-white text-[10px] grid place-items-center opacity-0 group-hover/av:opacity-100 transition-opacity">${e.photo?"Change":"Photo"}</span>
        </button>
        <input id="photo-file" type="file" accept="image/*" class="hidden" @change=${t=>void this.onPhotoFile(e,t)} />
        ${this.photoMenuOpen?this.renderPhotoMenu(e):d}
      </div>`}renderPhotoMenu(e){return r`
      <div class="fixed inset-0 z-20" @click=${()=>{this.photoMenuOpen=!1}}></div>
      <div class="absolute top-full left-0 mt-1.5 z-30 w-64 rounded-lg border border-line bg-bg shadow-lg p-3 text-sm" @click=${t=>t.stopPropagation()}>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-ink" @click=${()=>this.photoInput?.click()}>Upload from computer</button>
        <div class="my-2 text-[11px] text-muted text-center">or paste an image URL</div>
        <div class="flex gap-1.5">
          <input id="photo-url-input" type="text" placeholder="https://…" class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @keydown=${t=>{t.key==="Enter"&&this.setPhotoFromUrl(e.id)}} />
          <button type="button" class="text-xs px-2 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>void this.setPhotoFromUrl(e.id)}>Set</button>
        </div>
        <p class="text-[11px] text-muted mt-2">Tip: copy any image (⌘C) and press ⌘V right here.</p>
        ${e.photo?r`<button type="button" class="text-xs text-muted hover:text-red-500 mt-2" @click=${()=>{this.patchPerson(e.id,{photo:null}),this.photoMenuOpen=!1}}>Remove photo</button>`:d}
      </div>`}async setPhotoFromUrl(e){const s=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(s)try{const i=await fetch(`/api/circle/person/${e}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!i.ok){const n=await i.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??i.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(e,t,s,i,n=""){return this.editingField===e?r`<input type="text" class="inline-edit ${s} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${t??""} autofocus
        @blur=${o=>{i(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:t?r`<span class="${s} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=e}}>${t}</span>`:n?r`<span class="${s} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=e}}>${n}</span>`:d}onCircleSelect(e,t){const s=t.target.value;if(this.editingField=null,!!s){if(s==="__new__"){this.creatingCircle=!0;return}this.post(`/api/circle/person/${e.id}/circle`,{circle_id:Number(s)})}}detailCircles(e){return e.circles?.length?e.circles:e.circle_id!=null&&e.circle_name?[{id:e.circle_id,name:e.circle_name}]:[]}renderCirclePills(e){const t=this.detailCircles(e),s=this.circles.filter(i=>!t.some(n=>n.id===i.id));return r`
      ${t.map(i=>r`<span class="group/pill inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-surface border border-line text-ink">${i.name}
        <button type="button" class="w-0 overflow-hidden group-hover/pill:w-3.5 group-hover/pill:ml-0.5 transition-all text-muted hover:text-red-500" title="Remove from ${i.name}" @click=${()=>void this.del(`/api/circle/person/${e.id}/circle/${i.id}`)}>✕</button></span>`)}
      ${this.editingField==="circle"?r`<select class="inline-edit px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus @change=${i=>this.onCircleSelect(e,i)} @blur=${()=>{this.editingField=null}}>
            <option value="" selected disabled>add to…</option>
            ${s.map(i=>r`<option value=${i.id}>${i.name}</option>`)}
            <option value="__new__">+ New circle…</option>
          </select>`:this.creatingCircle?r`<input type="text" placeholder="new circle" class="w-24 px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus
              @keydown=${i=>{i.key==="Enter"&&this.createAndAssign(e.id,i.target.value),i.key==="Escape"&&(this.creatingCircle=!1)}}
              @blur=${()=>{this.creatingCircle=!1}} />`:r`<button type="button" class="text-xs px-2 py-0.5 rounded-full border border-line text-muted hover:text-ink hover:bg-hover" title="Add to a circle" @click=${()=>{this.editingField="circle"}}>${t.length?"+":"+ circle"}</button>`}`}renderBio(e){return this.editingField==="bio"?r`<textarea rows="5" class="inline-edit w-full text-sm text-ink bg-surface rounded p-2 ring-1 ring-ink focus:outline-none leading-relaxed resize-y"
        .value=${e.bio??""} autofocus
        @blur=${t=>{this.patchPerson(e.id,{bio:t.target.value.trim()||null}),this.editingField=null}}>${e.bio??""}</textarea>`:e.bio?r`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${e.bio}</p>`:r`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}isFollowingOnly(e){const t=this.detailCircles(e);return t.length>0&&t.every(s=>s.id>9)}renderKit(e){if(this.isFollowingOnly(e))return d;const t=e.next_meet_date,s="nextmeet",i=this.editingField===s?r`<input type="date" class="inline-edit px-1.5 py-0.5 text-xs bg-surface border border-ink rounded focus:outline-none" .value=${t??""} autofocus
          @change=${n=>{this.patchPerson(e.id,{next_meet_date:n.target.value||null}),this.editingField=null}}
          @blur=${()=>{this.editingField=null}} />`:r`<button type="button" class="rounded px-1 -mx-1 hover:bg-hover ${t?"text-ink":"text-muted/50"}" @click=${()=>{this.editingField=s}}>${t?this.fmtMeetDate(t):"—"}</button>`;return r`<div>
      <span class="block text-[11px] text-muted">Next meet</span>
      <span class="block mt-0.5 text-sm leading-tight">${i}</span>
    </div>`}tidyLabel(e){return e===e.toUpperCase()&&e!==e.toLowerCase()?e.toLowerCase():e}renderDetailsList(e){return r`
      ${e.facts.map(t=>r`
        <div class="flex gap-3 py-0.5 text-sm group/d items-start">
          ${t.label?r`<span class="text-[11px] capitalize tracking-wide text-muted w-28 shrink-0 pt-1 cursor-text hover:text-ink" @click=${()=>{this.editingField=`factlabel:${t.id}`}}>${this.editingField===`factlabel:${t.id}`?r`<input type="text" class="inline-edit w-full bg-surface ring-1 ring-ink rounded px-1 focus:outline-none text-ink normal-case" .value=${t.label} autofocus @blur=${s=>{this.patch(`/api/circle/fact/${t.id}`,{label:s.target.value.trim()||null}),this.editingField=null}} @keydown=${s=>{s.key==="Enter"&&s.target.blur()}} />`:this.tidyLabel(t.label)}</span>`:r`<span class="text-muted pt-0.5">•</span>`}
          <span class="flex-1 min-w-0">${this.editable(`fact:${t.id}`,t.value,"text-ink",s=>s?void this.patch(`/api/circle/fact/${t.id}`,{value:s}):void this.del(`/api/circle/fact/${t.id}`))}</span>
          <button type="button" class="opacity-0 group-hover/d:opacity-100 text-muted hover:text-red-500 text-xs pt-1" @click=${()=>void this.del(`/api/circle/fact/${t.id}`)}>✕</button>
        </div>`)}
      ${this.editingField==="newfact"?r`<div class="newfact-form flex gap-1.5 mt-1.5">
            <input id="nf-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input id="nf-value" type="text" placeholder="detail" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${t=>{t.key==="Enter"?this.submitNewFact(e.id):t.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitNewFact(e.id)}>Add</button>
          </div>`:r`<button type="button" class="text-xs text-muted hover:text-ink mt-1.5" @click=${()=>{this.editingField="newfact"}}>+ add detail</button>`}`}submitNewFact(e){const t=this.renderRoot.querySelector("#nf-label"),i=this.renderRoot.querySelector("#nf-value")?.value.trim();if(!i){this.editingField=null;return}this.post(`/api/circle/person/${e}/fact`,{value:i,label:t?.value.trim()||null}),this.editingField=null}renderDetailBody(e){return r`
      <div class="px-4 py-4 flex items-start gap-3">
        ${this.renderDetailAvatar(e)}
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div class="text-lg font-semibold text-ink min-w-0">${this.editable("name",e.name,"text-lg font-semibold text-ink",t=>t&&void this.patchPerson(e.id,{name:t}))}</div>
            <div class="flex flex-wrap items-center justify-end gap-1 shrink-0 pt-1">${this.renderCirclePills(e)}</div>
          </div>
          <div class="text-sm text-muted">${this.editable("location",e.location,"text-sm text-muted",t=>void this.patchPerson(e.id,{location:t||null}),"+ add address")}</div>
          <div class="text-sm text-muted">${this.editable("title",e.title,"text-sm text-muted",t=>void this.patchPerson(e.id,{title:t||null}),"+ what they do")}</div>
          ${e.company||this.editingField==="company"?r`<div class="text-sm text-muted">${this.editable("company",e.company,"text-sm text-muted",t=>void this.patchPerson(e.id,{company:t||null}))}</div>`:d}
        </div>
      </div>

      ${this.isFollowingOnly(e)?d:r`<div class="px-4 pb-1">${this.renderKit(e)}</div>`}

      ${this.section("Action items",this.renderActions(e))}

      ${this.section("Notes",r`
        ${this.editingNote==="new"?this.renderNewNoteCard():d}
        ${e.notes.length===0&&this.editingNote!=="new"?r`<p class="text-xs text-muted italic">No notes yet.</p>`:d}
        ${e.notes.map(t=>this.renderNoteCard(e,t))}
      `,r`<button type="button" class="text-xs text-ink hover:underline" @click=${()=>{this.editingNote="new"}}>+ New note</button>`)}

      ${this.collapsibleSection("Details",this.detailsOpen,()=>{this.detailsOpen=!this.detailsOpen},r`
        <div class="mb-3">
          <span class="block text-[11px] text-muted mb-1">About</span>
          ${this.renderBio(e)}
        </div>
        ${this.renderDetailsList(e)}
        <div class="mt-4">
          <button type="button" class="text-xs text-muted/60 hover:text-red-500" @click=${()=>void this.removePerson(e)}>Remove contact</button>
        </div>
      `)}`}renderSettingsPanel(){return this.settingsOpen?r`
      <div class="fixed inset-0 z-30" @click=${()=>{this.settingsOpen=!1}}></div>
      <div class="absolute right-3 top-12 z-40 w-56 rounded-lg border border-line bg-bg shadow-lg p-2 text-sm" @click=${e=>e.stopPropagation()}>
        <div class="px-2 py-1 text-[11px] font-medium tracking-wide text-muted">Circles settings</div>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Import contacts · soon</button>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Manage circles · soon</button>
      </div>`:d}renderDetail(){const e=this.detail;return e?r`
      <header class="relative px-3 py-2.5 shrink-0 flex items-center justify-between gap-2">
        <button type="button" class="text-base text-ink hover:bg-hover flex items-center gap-1 px-2 py-1 -ml-1 rounded" @click=${()=>this.back()}>‹ All</button>
        <button type="button" class="text-muted hover:text-ink p-1.5 rounded hover:bg-hover" title="Settings" @click=${()=>{this.settingsOpen=!this.settingsOpen}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        ${this.renderSettingsPanel()}
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.renderDetailBody(e)}
      </div>`:r`<div class="flex-1 grid place-items-center text-muted text-sm">Loading…</div>`}async openReview(){try{const e=await fetch("/api/circle/pending");e.ok&&(this.pending=(await e.json()).pending)}catch{}this.view="review"}async confirmPending(e,t){await fetch(`/api/circle/pending/${e}/confirm`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person_id:t})}),this.pending=this.pending.filter(s=>s.id!==e),await this.refresh(),this.pending.length===0&&(this.view="list")}async rejectPending(e){await this.del(`/api/circle/pending/${e}`),this.pending=this.pending.filter(t=>t.id!==e),this.pending.length===0&&(this.view="list")}renderReview(){return r`
      <header class="px-3 py-2.5 border-b border-line shrink-0 flex items-center gap-2">
        <button type="button" class="text-sm text-muted hover:text-ink flex items-center gap-1 px-1.5 py-1 rounded hover:bg-hover" @click=${()=>{this.view="list"}}>‹ All</button>
        <span class="text-sm text-ink font-medium">Confirm what I picked up</span>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto px-4 py-3">
        ${this.pending.length===0?r`<p class="text-sm text-muted">Nothing to confirm.</p>`:d}
        <ul class="space-y-3">${this.pending.map(e=>{const t=e.target_kind==="person",s=e.person_id==null&&!t;return r`
          <li class="border border-line rounded-lg p-3">
            ${t?r`<p class="text-sm font-medium text-ink mb-0.5">Add ${e.person_hint??"this person"} to your circle?</p>`:d}
            <p class="text-sm ${t?"text-muted":"text-ink"} mb-2">${e.suggestion}</p>
            ${s?r`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${e.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(i=>r`<option value=${i.id}>${i.name}</option>`)}
                </select>
              </div>`:d}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(e.id)}>${t?"Not now":"No"}</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const i=this.renderRoot.querySelector(`#pend-${e.id}`),n=e.person_id??(i?.value?Number(i.value):null);if(s&&n==null){alert("Pick a person first.");return}this.confirmPending(e.id,n)}}>${t?"Add":"Yes"}</button>
            </div>
          </li>`})}</ul>
      </div>`}render(){return r`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};U([l()],j.prototype,"view",2);U([l()],j.prototype,"circles",2);U([l()],j.prototype,"people",2);U([l()],j.prototype,"pendingCount",2);U([l()],j.prototype,"loading",2);U([l()],j.prototype,"filter",2);U([l()],j.prototype,"selectedId",2);U([l()],j.prototype,"detail",2);U([l()],j.prototype,"adding",2);U([l()],j.prototype,"pending",2);U([l()],j.prototype,"draftName",2);U([l()],j.prototype,"draftCircle",2);U([l()],j.prototype,"editingNote",2);U([l()],j.prototype,"creatingCircle",2);U([l()],j.prototype,"editingField",2);U([l()],j.prototype,"settingsOpen",2);U([l()],j.prototype,"showCompletedActions",2);U([l()],j.prototype,"detailsOpen",2);U([l()],j.prototype,"expandedNotes",2);U([l()],j.prototype,"photoMenuOpen",2);U([ge("#photo-file")],j.prototype,"photoInput",2);j=U([k("circle-section")],j);var vd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,te=(e,t,s,i)=>{for(var n=i>1?void 0:i?yd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&vd(t,s,n),n};const Vt=[{key:"topic",question:"What do you want to learn?",hint:"e.g. reading a pond and catching a big fish",required:!0},{key:"mission",question:"What's the mission?",hint:"The real thing you want to pull off with it — why now?",required:!1},{key:"known",question:"What do you already know?",hint:'Anything the path should skip. "Nothing" is a fine answer.',required:!1},{key:"success",question:"What does success look like?",hint:"How you'll know you're done — something real, not a vibe.",required:!1}],En={building:{label:"Building",pct:0,done:!1},learning:{label:"Learning",pct:.18,done:!1},practiced:{label:"Practiced",pct:.45,done:!1},proven:{label:"Proven",pct:.75,done:!1},mastered:{label:"Mastered",pct:1,done:!0}},ei=[{key:"first-rep",label:"First Rep",emoji:"🌱",desc:"Finished your first lesson"},{key:"proven",label:"Proven",emoji:"🎯",desc:"Recalled every check in a skill"},{key:"mastered",label:"Mastered",emoji:"🏆",desc:"Held a skill past 21 days"},{key:"streak-7",label:"On Fire",emoji:"🔥",desc:"7-day review streak"},{key:"streak-30",label:"Relentless",emoji:"⚡",desc:"30-day review streak"},{key:"reviews-100",label:"Centurion",emoji:"💯",desc:"Answered 100 reviews"},{key:"sharp-10",label:"Sharp",emoji:"🧠",desc:"10 checks in long-term memory"}],wd=[{g:0,label:"Again",cls:"border-rose-300 text-rose-500 hover:bg-rose-50"},{g:1,label:"Hard",cls:"border-amber-300 text-amber-600 hover:bg-amber-50"},{g:2,label:"Good",cls:"border-accent text-accent hover:bg-accent/10"},{g:3,label:"Easy",cls:"border-emerald-300 text-emerald-600 hover:bg-emerald-50"}];let Y=class extends C{constructor(){super(...arguments),this.skills=[],this.stats=null,this.loading=!0,this.view="list",this.wizardStep=0,this.wizard={topic:"",mission:"",known:"",success:""},this.submitting=!1,this.notingLessonId=null,this.noteDraft="",this.queue=[],this.qIdx=0,this.revealed=!1,this.picked=null,this.grading=!1,this.sessionDone=0,this.toast=[],this.poll=null,this.toastTimer=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>{this.view!=="wizard"&&this.view!=="review"&&this.notingLessonId===null&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll),this.toastTimer&&clearTimeout(this.toastTimer)}async refresh(){try{const e=await fetch("/api/learn");if(e.ok){const t=await e.json();this.skills=t.skills,this.stats=t.stats}}catch{}this.loading=!1}showToast(e){e.length&&(this.toast=e,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=[]},4200))}openWizard(){this.wizard={topic:"",mission:"",known:"",success:""},this.wizardStep=0,this.view="wizard",this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}wizardNext(){const e=Vt[this.wizardStep];e.required&&!this.wizard[e.key].trim()||(this.wizardStep<Vt.length-1?(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())):this.createSkill())}async createSkill(){if(!this.submitting){this.submitting=!0;try{const e=await fetch("/api/learn/skills",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.wizard)});if(e.ok){const{id:t}=await e.json();await this.refresh(),this.view=t}}finally{this.submitting=!1}}}renderWizard(){const e=Vt[this.wizardStep],t=this.wizardStep===Vt.length-1,s=!e.required||!!this.wizard[e.key].trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex gap-1.5 mb-6">
            ${Vt.map((i,n)=>r`<div class="h-1 flex-1 rounded-full ${n<=this.wizardStep?"bg-accent":"bg-line"}"></div>`)}
          </div>
          <h3 class="text-base font-semibold text-ink mb-1">${e.question}</h3>
          <p class="text-xs text-muted mb-3">${e.hint}</p>
          <textarea
            class="wizard-input w-full h-24 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
            .value=${this.wizard[e.key]}
            placeholder=${e.required?"":"optional — Enter to skip"}
            @input=${i=>{this.wizard={...this.wizard,[e.key]:i.target.value}}}
            @keydown=${i=>{i.key==="Enter"&&!i.shiftKey?(i.preventDefault(),this.wizardNext()):i.key==="Escape"&&(this.view="list")}}
          ></textarea>
          <div class="flex items-center justify-between mt-4">
            <button type="button" class="text-sm text-muted hover:text-ink"
              @click=${()=>{this.wizardStep===0?this.view="list":this.wizardStep-=1}}
            >← Back</button>
            <button type="button"
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!s||this.submitting?"opacity-40 pointer-events-none":""}"
              @click=${this.wizardNext}
            >${this.submitting?"…":t?"Build my path":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async patchLesson(e,t){const s=await fetch(`/api/learn/lessons/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)});if(s.ok){const i=await s.json().catch(()=>({}));i.newBadges?.length&&this.showToast(i.newBadges)}await this.refresh()}async completeLesson(e){await this.patchLesson(e.id,{status:"done"}),this.notingLessonId=e.id,this.noteDraft=e.note??"",this.updateComplete.then(()=>this.renderRoot?.querySelector(".lesson-note")?.focus())}async commitNote(e){const t=this.noteDraft.trim();this.notingLessonId=null,this.noteDraft="",t&&t!==(e.note??"")&&await this.patchLesson(e.id,{note:t})}async patchSkill(e,t){await fetch(`/api/learn/skills/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async removeSkill(e){confirm(`Delete "${e.topic}" and its path?`)&&(await fetch(`/api/learn/skills/${e.id}`,{method:"DELETE"}),this.view="list",await this.refresh())}async regenPath(e){await fetch(`/api/learn/skills/${e.id}/regen`,{method:"POST"}),await this.refresh()}async genChecks(e){await fetch(`/api/learn/skills/${e.id}/checks`,{method:"POST"}),await this.refresh()}async startReview(e){try{const t=await fetch("/api/learn/review");if(!t.ok)return;const s=await t.json();if(this.stats=s.stats,this.queue=e?s.due.filter(i=>i.skill_id===e):s.due,!this.queue.length)return;this.qIdx=0,this.revealed=!1,this.picked=null,this.sessionDone=0,this.view="review"}catch{}}async gradeCurrent(e){if(this.grading)return;const t=this.queue[this.qIdx];if(t){this.grading=!0;try{const s=await fetch(`/api/learn/checks/${t.id}/grade`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({grade:e})});if(s.ok){const i=await s.json();this.stats=i.stats,this.sessionDone+=1,i.newBadges?.length&&this.showToast(i.newBadges)}}finally{this.grading=!1}this.picked=null,this.revealed=!1,this.qIdx<this.queue.length-1?this.qIdx+=1:(this.qIdx=this.queue.length,this.refresh())}}pickChoice(e){if(this.picked!==null||this.grading)return;this.picked=e;const t=this.queue[this.qIdx];if(!t)return;const s=e===t.correct;setTimeout(()=>void this.gradeCurrent(s?2:0),850)}renderReview(){const e=this.queue[this.qIdx];if(!e)return r`
        <div class="flex-1 min-h-0 overflow-y-auto p-4">
          <div class="max-w-md mx-auto pt-10 text-center">
            <div class="text-4xl mb-2">✅</div>
            <p class="text-base font-semibold text-ink">Review done</p>
            <p class="text-sm text-muted mt-1">${this.sessionDone} check${this.sessionDone===1?"":"s"} cleared${this.stats?.streak?` · 🔥 ${this.stats.streak}-day streak`:""}.</p>
            <p class="text-xs text-muted/70 mt-2">The ones you found hard come back sooner. Come back tomorrow to keep them.</p>
            <button type="button" class="mt-5 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>{this.view="list"}}>Back to skills</button>
          </div>
        </div>
      `;const t=this.queue.length;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-2">
          <div class="flex items-center gap-2 mb-4">
            <button type="button" class="text-sm text-muted hover:text-ink" @click=${()=>{this.view="list"}}>← Exit</button>
            <div class="flex-1 h-1 rounded-full bg-line overflow-hidden"><div class="h-full bg-accent transition-all" style="width:${Math.round(this.qIdx/t*100)}%"></div></div>
            <span class="text-xs text-muted shrink-0">${this.qIdx+1}/${t}</span>
          </div>

          <div class="flex items-center gap-1.5 mb-2 text-[11px] text-muted">
            ${this.renderEmojiIcon(e.emoji||"🎓","w-3.5 h-3.5")}
            <span class="truncate">${e.topic}${e.lesson_title?r` · <span class="text-muted/70">${e.lesson_title}</span>`:d}</span>
          </div>

          <div class="rounded-xl border border-line bg-surface px-4 py-5">
            <p class="text-[15px] leading-snug text-ink font-medium">${e.prompt}</p>

            ${e.kind==="choice"&&e.choices?r`<div class="mt-4 space-y-2">
                  ${e.choices.map((s,i)=>{const n=this.picked===i,o=e.correct===i,a=this.picked!==null;return r`<button type="button" class="w-full text-left px-3 py-2 text-sm rounded-lg border transition-colors ${a?o?"border-emerald-400 bg-emerald-50 text-emerald-700":n?"border-rose-400 bg-rose-50 text-rose-600":"border-line text-muted":"border-line text-ink hover:border-ink hover:bg-hover"} ${a?"pointer-events-none":""}" @click=${()=>this.pickChoice(i)}>${s}</button>`})}
                </div>`:this.revealed?r`
                    <div class="mt-4 rounded-lg bg-accent/5 border border-accent/20 px-3 py-2.5">
                      <p class="text-[10px] font-semibold text-accent mb-1">Answer</p>
                      <p class="text-sm text-ink leading-snug">${e.answer||"No model answer — grade yourself on whether you could do it."}</p>
                    </div>
                    <p class="text-xs text-muted mt-3 mb-1.5">How did that go?</p>
                    <div class="grid grid-cols-4 gap-2">
                      ${wd.map(s=>r`<button type="button" class="px-2 py-1.5 text-xs font-medium rounded-lg border ${s.cls} ${this.grading?"opacity-40 pointer-events-none":""}" @click=${()=>void this.gradeCurrent(s.g)}>${s.label}</button>`)}
                    </div>
                  `:r`<button type="button" class="mt-4 w-full px-4 py-2 text-sm rounded-lg border border-ink text-ink hover:bg-hover font-medium" @click=${()=>{this.revealed=!0}}>Show answer</button>`}
          </div>
          ${e.kind==="recall"&&!this.revealed?r`<p class="text-center text-[11px] text-muted/60 mt-3">Answer it in your head first — then reveal.</p>`:d}
        </div>
      </div>
    `}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderEmojiIcon(e,t="w-[18px] h-[18px]",s="text-[15px]"){const i=this.iconUrl(e);return i?r`<img src=${i} alt="" class="${t} select-none shrink-0" draggable="false" />`:r`<span class="${s} leading-none shrink-0">${e}</span>`}renderEmoji(e,t="w-[18px] h-[18px]",s="text-[15px]"){return this.renderEmojiIcon(e.emoji||"🎓",t,s)}renderRing(e,t=30,s=2.5,i){const n=(t-s)/2,o=2*Math.PI*n,a=o*(1-e);return r`
      <span class="relative inline-flex items-center justify-center shrink-0" style="width:${t}px;height:${t}px;">
        <svg width=${t} height=${t} viewBox="0 0 ${t} ${t}" class="-rotate-90">
          <circle cx=${t/2} cy=${t/2} r=${n} fill="none" class="text-line" stroke="currentColor" stroke-width=${s}></circle>
          <circle cx=${t/2} cy=${t/2} r=${n} fill="none" class="text-accent" stroke="currentColor" stroke-width=${s} stroke-linecap="round" stroke-dasharray=${o} stroke-dashoffset=${a}></circle>
        </svg>
        ${i?r`<span class="absolute inset-0 flex items-center justify-center">${i}</span>`:d}
      </span>
    `}progress(e){const t=e.lessons.length;return{done:e.lessons.filter(i=>i.status!=="todo").length,total:t}}nextLesson(e){return e.lessons.find(t=>t.status==="todo")??null}renderCheck(e){const t=e.status==="done",s=e.status==="skipped";return r`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":s?"bg-line border-line":"bg-transparent border-line hover:border-ink"}"
        style="width:18px;height:18px;border-width:1.5px;border-style:solid;"
        aria-label=${t||s?"Reopen":"Mark done"}
        title=${t?"Done — click to reopen":s?"Skipped — click to reopen":"Did it — mark done"}
        @click=${()=>t||s?void this.patchLesson(e.id,{status:"todo"}):void this.completeLesson(e)}
      >
        ${t?r`<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:s?r`<span class="text-muted text-[10px] leading-none">~</span>`:d}
      </button>
    `}renderPathPending(e){return e.path_status==="failed"?r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          Path generation failed.
          <button type="button" class="px-2 py-0.5 rounded-md border border-line text-ink hover:bg-hover" @click=${()=>void this.regenPath(e)}>Retry</button>
        </div>`:r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
          Building your path — lands in under a minute…
        </div>`}renderLessonRow(e,t,s){const i=t.status!=="todo",n=e.checks.find(a=>a.lesson_id===t.id),o=Date.now()/1e3;return r`
      <li class="group relative flex gap-2.5 px-4 py-2.5 ${s?"bg-accent/5":""}">
        ${this.renderCheck(t)}
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm ${i?"text-muted line-through decoration-line":"text-ink"} font-medium">${t.title}</span>
            ${s?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold ">Up next</span>`:d}
            ${n&&n.due_at<=o&&i?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-600 font-semibold " title="A check is due for review">due</span>`:d}
            ${n&&n.interval_days>=21?r`<span class="text-[10px]" title="Retained — held past 21 days">🧠</span>`:d}
          </div>
          ${t.exercise&&!i?r`<p class="text-xs text-muted mt-0.5 leading-snug">${t.exercise}</p>`:d}
          ${this.notingLessonId===t.id?r`<input
                class="lesson-note mt-1.5 w-full px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                placeholder="what did you do? (optional — Enter to save)"
                .value=${this.noteDraft}
                @input=${a=>{this.noteDraft=a.target.value}}
                @keydown=${a=>{a.key==="Enter"?(a.preventDefault(),this.commitNote(t)):a.key==="Escape"&&(this.notingLessonId=null,this.noteDraft="")}}
                @blur=${()=>void this.commitNote(t)}
              />`:t.note?r`<p class="text-xs text-muted/80 mt-0.5 italic">${t.note}</p>`:d}
        </div>
        ${t.status==="todo"?r`<button
              type="button"
              class="absolute right-3 top-2.5 shrink-0 opacity-0 group-hover:opacity-60 hover:!opacity-100 text-[11px] text-muted"
              title="Already know this — skip"
              @click=${()=>void this.patchLesson(t.id,{status:"skipped"})}
            >skip</button>`:d}
      </li>
    `}renderDetail(e){const{done:t,total:s}=this.progress(e),i=this.nextLesson(e),n=En[e.level],o=[e.mission?{label:"Mission",value:e.mission}:null,e.known?{label:"You know",value:e.known}:null,e.success?{label:"Success",value:e.success}:null].filter(u=>u!==null),a=e.path_status==="ready",c=e.checks.filter(u=>u.reps>=1&&(u.last_grade??0)>=2).length;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        <div class="flex items-center gap-2 px-1">
          <button type="button" class="text-sm text-muted hover:text-ink" @click=${()=>{this.view="list"}}>←</button>
          ${this.renderEmoji(e,"w-[22px] h-[22px]","text-[19px]")}
          <h3 class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${e.topic}</h3>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${n.done?"bg-accent/15 text-accent":"bg-line/60 text-muted"}">${n.label}</span>
          <button type="button" class="shrink-0 text-muted opacity-60 hover:opacity-100 text-base leading-none px-1" title="Delete skill" @click=${()=>void this.removeSkill(e)}>×</button>
        </div>

        ${a?r`<div class="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
              ${this.renderRing(n.pct,40,3,r`<span class="text-[11px] font-bold text-ink">${Math.round(n.pct*100)}</span>`)}
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ink"><span class="font-semibold">${t}/${s}</span> reps done${e.checksTotal?r` · <span class="font-semibold">${c}/${e.checksTotal}</span> checks proven`:d}</p>
                <p class="text-[11px] text-muted mt-0.5">${this.detailHint(e)}</p>
              </div>
              ${e.checksDue>0?r`<button type="button" class="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-white hover:opacity-90" @click=${()=>void this.startReview(e.id)}>Review ${e.checksDue}</button>`:e.checksTotal===0?r`<button type="button" class="shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg border border-line text-ink hover:bg-hover" title="Generate checks for this path" @click=${()=>void this.genChecks(e)}>+ Quizzes</button>`:d}
            </div>`:d}

        ${o.length?r`<section class="rounded-xl border border-line bg-surface px-4 py-3 space-y-1.5">
              ${o.map(u=>r`<p class="text-xs leading-snug"><span class="font-semibold text-[10px] text-muted mr-1.5">${u.label}</span><span class="text-ink">${u.value}</span></p>`)}
            </section>`:d}

        <section class="rounded-xl border border-line bg-surface">
          <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">The path</h4>
          ${a?e.lessons.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No lessons — ask the coach in chat, or regenerate.</p>`:r`<ul class="pb-2 divide-y divide-line/40">
                  ${e.lessons.map(u=>this.renderLessonRow(e,u,i?.id===u.id))}
                </ul>`:this.renderPathPending(e)}
        </section>

        ${a?r`<div class="flex items-center gap-3 px-1">
              <button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.regenPath(e)}>↻ regenerate path</button>
              ${e.checksTotal>0?r`<button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.genChecks(e)}>↻ regenerate quizzes</button>`:d}
            </div>`:d}
      </div>
    `}detailHint(e){if(e.checksDue>0)return`${e.checksDue} check${e.checksDue===1?"":"s"} due — review to keep them.`;switch(e.level){case"learning":return"Clear the reps below, one a day.";case"practiced":return e.checksTotal===0?"Add quizzes to start proving it.":"All caught up — checks return on schedule.";case"proven":return"Proven. Keep the checks alive to reach mastered.";case"mastered":return"Mastered — held past 21 days. 🏆";default:return"Clear the reps below, one a day."}}renderSkillCard(e){const{done:t,total:s}=this.progress(e),i=this.nextLesson(e),n=En[e.level];return r`
      <button
        type="button"
        class="w-full text-left rounded-xl border border-line bg-surface px-4 py-3 hover:bg-hover transition-colors"
        @click=${()=>{this.view=e.id}}
      >
        <div class="flex items-center gap-2.5">
          ${e.path_status==="ready"?this.renderRing(n.pct,26,2.5,this.renderEmoji(e,"w-[13px] h-[13px]","text-[12px]")):this.renderEmoji(e,"w-[20px] h-[20px]","text-[17px]")}
          <span class="flex-1 min-w-0 text-sm font-medium text-ink truncate">${e.topic}</span>
          ${e.checksDue>0?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-600 font-semibold shrink-0" title="${e.checksDue} checks due">${e.checksDue} due</span>`:d}
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${n.done?"bg-accent/15 text-accent":"text-muted"}">${n.label}</span>
        </div>
        ${e.path_status!=="ready"?r`<p class="mt-1.5 text-xs text-muted flex items-center gap-1.5">
              ${e.path_status==="failed"?"path generation failed — open to retry":r`<span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> building your path…`}
            </p>`:i&&e.status!=="done"?r`<p class="mt-1.5 text-xs text-muted truncate"><span class="text-accent font-medium">Next:</span> ${i.title}</p>`:d}
      </button>
    `}renderStatsStrip(){const e=this.stats;if(!e)return d;const t=Math.round(e.xpInto/e.xpSpan*100);return r`
      <div class="flex items-center gap-3 px-4 py-2.5 border-b border-line shrink-0">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent text-[11px] font-bold">${e.level}</span>
          <div class="flex-1 min-w-0">
            <div class="h-1.5 rounded-full bg-line overflow-hidden"><div class="h-full bg-accent transition-all" style="width:${t}%"></div></div>
            <p class="text-[10px] text-muted mt-0.5">${e.xpInto}/${e.xpSpan} XP to Lv ${e.level+1}</p>
          </div>
        </div>
        ${e.streak>0?r`<span class="shrink-0 text-xs font-semibold text-ink" title="${e.streak}-day review streak">🔥 ${e.streak}</span>`:d}
        <button type="button"
          class="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg ${e.dueTotal>0?"bg-accent text-white hover:opacity-90":"border border-line text-muted pointer-events-none opacity-60"}"
          @click=${()=>void this.startReview()}
        >${e.dueTotal>0?`Review ${e.dueTotal}`:"All caught up"}</button>
      </div>
    `}renderBadges(){const e=this.stats;if(!e)return d;const t=new Set(e.badges.map(s=>s.badge_key));return t.size===0?d:r`
      <section class="pt-2">
        <h4 class="px-1 pb-1.5 text-[11px] font-semibold text-muted">Badges · ${t.size}/${ei.length}</h4>
        <div class="grid grid-cols-4 gap-2">
          ${ei.map(s=>{const i=t.has(s.key);return r`<div class="flex flex-col items-center gap-1 rounded-lg border ${i?"border-line bg-surface":"border-line/40 bg-transparent"} px-1 py-2 text-center" title="${s.label} — ${s.desc}">
              <span class="text-lg ${i?"":"grayscale opacity-30"}">${this.renderEmojiIcon(s.emoji,"w-5 h-5")}</span>
              <span class="text-[9px] leading-tight ${i?"text-ink font-medium":"text-muted/50"}">${s.label}</span>
            </div>`})}
        </div>
      </section>
    `}renderList(){const e=this.skills.filter(s=>s.status==="active"),t=this.skills.filter(s=>s.status==="done");return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-2">
        ${this.loading?d:e.length===0&&t.length===0?r`<div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
                <p class="text-sm text-ink font-medium">Learn something by doing it.</p>
                <p class="text-xs text-muted mt-1">Four quick questions, then a path of small daily reps — plus quizzes that come back on a spaced schedule so it actually sticks.</p>
                <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${this.openWizard}>Start a skill</button>
              </div>`:r`
              ${e.map(s=>this.renderSkillCard(s))}
              ${t.length?r`<h4 class="px-1 pt-2 text-[11px] font-semibold text-muted">Mastered</h4>
                    ${t.map(s=>this.renderSkillCard(s))}`:d}
              ${this.renderBadges()}
            `}
      </div>
    `}renderToast(){return this.toast.length?r`
      <div class="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 flex flex-col gap-1.5 items-center pointer-events-none">
        ${this.toast.map(e=>{const t=ei.find(s=>s.key===e);return r`<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink text-white text-xs font-medium shadow-lg">
            ${this.renderEmojiIcon(t?.emoji||"🏅","w-4 h-4")}<span>Badge earned — ${t?.label??e}</span>
          </div>`})}
      </div>
    `:d}render(){const e=typeof this.view=="number"?this.skills.find(s=>s.id===this.view):void 0,t=this.view==="list"&&this.stats&&this.skills.length>0;return r`
      <div class="relative flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-sm font-semibold text-ink">Learn</h2>
          ${this.view==="wizard"||this.view==="review"?d:r`<button type="button" class="px-2.5 py-1 rounded-full text-sm font-medium text-muted hover:text-ink hover:bg-hover transition-colors" @click=${this.openWizard}>+ New skill</button>`}
        </header>
        ${t?this.renderStatsStrip():d}
        ${this.view==="wizard"?this.renderWizard():this.view==="review"?this.renderReview():e?this.renderDetail(e):this.renderList()}
        ${this.renderToast()}
      </div>
    `}};te([l()],Y.prototype,"skills",2);te([l()],Y.prototype,"stats",2);te([l()],Y.prototype,"loading",2);te([l()],Y.prototype,"view",2);te([l()],Y.prototype,"wizardStep",2);te([l()],Y.prototype,"wizard",2);te([l()],Y.prototype,"submitting",2);te([l()],Y.prototype,"notingLessonId",2);te([l()],Y.prototype,"noteDraft",2);te([l()],Y.prototype,"queue",2);te([l()],Y.prototype,"qIdx",2);te([l()],Y.prototype,"revealed",2);te([l()],Y.prototype,"picked",2);te([l()],Y.prototype,"grading",2);te([l()],Y.prototype,"sessionDone",2);te([l()],Y.prototype,"toast",2);Y=te([k("learn-section")],Y);var kd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,Ye=(e,t,s,i)=>{for(var n=i>1?void 0:i?$d(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&kd(t,s,n),n};let Ne=class extends C{constructor(){super(...arguments),this.invites=[],this.sessions=[],this.loading=!0,this.label="",this.days="7",this.uses="3",this.creating=!1,this.copiedId=null,this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>void this.refresh(),5e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const e=await fetch("/api/guests");if(e.ok){const t=await e.json();this.invites=t.invites,this.sessions=t.sessions}}catch{}this.loading=!1}inviteUrl(e){return`${location.origin}/invite/${e.token}`}inviteState(e){return e.revoked?"revoked":e.used_count>=e.max_uses?"used":e.expires_at&&e.expires_at*1e3<Date.now()?"expired":"active"}async createInvite(){const e=this.label.trim();if(!(!e||this.creating)){this.creating=!0;try{const t=await fetch("/api/guests/invites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({label:e,expiresDays:Number(this.days)||7,maxUses:Number(this.uses)||1})});if(t.ok){const{invite:s}=await t.json();this.label="",await this.refresh(),await this.copyLink({...s})}}finally{this.creating=!1}}}async copyLink(e){try{await navigator.clipboard.writeText(this.inviteUrl(e)),this.copiedId=e.id,setTimeout(()=>{this.copiedId===e.id&&(this.copiedId=null)},2e3)}catch{prompt("Copy the invite link:",this.inviteUrl(e))}}async revokeInvite(e){confirm(`Revoke the invite for ${e.label}? The link stops working; existing devices stay in.`)&&(await fetch(`/api/guests/invites/${e.id}`,{method:"DELETE"}),await this.refresh())}async revokeSession(e){confirm(`Kick ${e.display_name}'s device? They're out on their next request.`)&&(await fetch(`/api/guests/sessions/${e.id}`,{method:"DELETE"}),await this.refresh())}fmtDate(e){return e?new Date(e*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—"}fmtLastSeen(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/60);return t<2?"now":t<60?`${t}m ago`:t<2880?`${Math.floor(t/60)}h ago`:this.fmtDate(e)}statePill(e){return r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${{active:"bg-accent/15 text-accent",used:"bg-line text-muted",expired:"bg-amber-500/10 text-amber-600",revoked:"bg-red-500/10 text-red-600"}[e]}">${e}</span>`}renderInvite(e){const t=this.inviteState(e);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${e.label}</span>
            ${this.statePill(t)}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${e.used_count}/${e.max_uses} used
            · created ${this.fmtDate(e.created_at)}
            ${e.expires_at?r` · ${t==="expired"?"expired":"expires"} ${this.fmtDate(e.expires_at)}`:d}
          </p>
        </div>
        ${t==="active"?r`<button type="button"
              class="shrink-0 px-2 py-1 text-[11px] rounded-md border border-line ${this.copiedId===e.id?"text-accent border-accent":"text-muted hover:text-ink hover:bg-hover"}"
              @click=${()=>void this.copyLink(e)}
            >${this.copiedId===e.id?"Copied ✓":"Copy link"}</button>`:d}
        ${t==="active"||t==="expired"?r`<button type="button"
              class="shrink-0 opacity-40 lg:opacity-0 lg:group-hover:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
              title="Revoke invite" aria-label="Revoke invite"
              @click=${()=>void this.revokeInvite(e)}
            >×</button>`:d}
      </li>
    `}renderSession(e){const t=this.invites.find(s=>s.id===e.invite_id);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <span class="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-hover text-[11px] font-semibold text-ink uppercase">${(e.display_name||"?").slice(0,1)}</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${e.display_name}</span>
            ${e.revoked?this.statePill("revoked"):d}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${e.login}${t?r` · via "${t.label}"`:d}
            · joined ${this.fmtDate(e.created_at)} · seen ${this.fmtLastSeen(e.last_seen)}
          </p>
        </div>
        ${e.revoked?d:r`<button type="button"
              class="shrink-0 px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-red-600 hover:border-red-500/40"
              title="Kick this device"
              @click=${()=>void this.revokeSession(e)}
            >Revoke</button>`}
      </li>
    `}render(){const e=this.sessions.filter(s=>!s.revoked),t=this.sessions.filter(s=>s.revoked);return r`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0">
          <h2 class="text-sm font-semibold text-ink">Guests</h2>
          <p class="text-[11px] text-muted mt-0.5">Invite links give friends member access over the web — own vault, tool-only, no coding agent.</p>
        </header>

        <div class="px-4 py-2.5 shrink-0 flex gap-2 items-center">
          <input
            type="text"
            placeholder="who's it for? e.g. Tarik"
            class="flex-1 min-w-0 px-3 py-1.5 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink"
            .value=${this.label}
            @input=${s=>{this.label=s.target.value}}
            @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),this.createInvite())}}
            ?disabled=${this.creating}
          />
          <label class="text-[11px] text-muted shrink-0 flex items-center gap-1">valid
            <input type="number" min="1" class="w-11 px-1.5 py-1.5 text-sm bg-surface border border-line rounded-lg text-right focus:outline-none focus:border-ink"
              .value=${this.days} @input=${s=>{this.days=s.target.value}} />d</label>
          <label class="text-[11px] text-muted shrink-0 flex items-center gap-1">uses
            <input type="number" min="1" class="w-11 px-1.5 py-1.5 text-sm bg-surface border border-line rounded-lg text-right focus:outline-none focus:border-ink"
              .value=${this.uses} @input=${s=>{this.uses=s.target.value}} /></label>
          <button
            type="button"
            class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover shrink-0 ${this.creating||!this.label.trim()?"opacity-50 pointer-events-none":""}"
            @click=${()=>void this.createInvite()}
          >${this.creating?"…":"Invite"}</button>
        </div>

        <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
          <section class="rounded-xl border border-line bg-surface">
            <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">People in <span class="text-muted/60">${e.length||""}</span></h3>
            ${!this.loading&&e.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">Nobody yet. Mint an invite above and send them the link — it copies to your clipboard.</p>`:r`<ul class="pb-1">${e.map(s=>this.renderSession(s))}</ul>`}
          </section>

          <section class="rounded-xl border border-line bg-surface">
            <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">Invites <span class="text-muted/60">${this.invites.length||""}</span></h3>
            ${!this.loading&&this.invites.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No invites yet.</p>`:r`<ul class="pb-1">${this.invites.map(s=>this.renderInvite(s))}</ul>`}
          </section>

          ${t.length?r`<section class="rounded-xl border border-line bg-surface">
                <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">Kicked <span class="text-muted/60">${t.length}</span></h3>
                <ul class="pb-1">${t.map(s=>this.renderSession(s))}</ul>
              </section>`:d}
        </div>
      </div>
    `}};Ye([l()],Ne.prototype,"invites",2);Ye([l()],Ne.prototype,"sessions",2);Ye([l()],Ne.prototype,"loading",2);Ye([l()],Ne.prototype,"label",2);Ye([l()],Ne.prototype,"days",2);Ye([l()],Ne.prototype,"uses",2);Ye([l()],Ne.prototype,"creating",2);Ye([l()],Ne.prototype,"copiedId",2);Ne=Ye([k("guests-section")],Ne);function O(e,t,s={}){e.dispatchEvent(new CustomEvent("publisher-toast",{detail:{text:t,...s},bubbles:!0,composed:!0}))}function He(e,t){return new Promise(s=>{const i={...t,resolve:s};e.dispatchEvent(new CustomEvent("publisher-confirm",{detail:i,bubbles:!0,composed:!0})),i.handled||s(!1)})}const Cd=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"});var Sd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ze=(e,t,s,i)=>{for(var n=i>1?void 0:i?Td(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Sd(t,s,n),n};const Ii=[{key:"result",label:"Result",cls:"bg-emerald-500/10 text-emerald-600",hint:"A measurable outcome"},{key:"story",label:"Story",cls:"bg-pink-500/10 text-pink-600",hint:"Something that happened"},{key:"lesson",label:"Lesson",cls:"bg-sky-500/10 text-sky-600",hint:"What you learned"},{key:"fact",label:"Fact",cls:"bg-line text-muted",hint:"About your experience"},{key:"opinion",label:"Opinion",cls:"bg-amber-500/10 text-amber-600",hint:"What you believe"}],Id=e=>Ii.find(t=>t.key===e)??Ii[3],_n={kind:"result",title:"",detail:"",occurred_on:"",source:"",vertical_id:"",shareable:!0},Qt="w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";let Pe=class extends C{constructor(){super(...arguments),this.topics=[],this.topicId=null,this.proofs=[],this.loaded=!1,this.finding=!1,this.lastFind=null,this.editing=null,this.form={..._n},this.saving=!1,this.poll=null,this.findClickedAt=0}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.stopPoll()}stopPoll(){this.poll&&(clearInterval(this.poll),this.poll=null)}changed(){this.dispatchEvent(new CustomEvent("changed",{bubbles:!0,composed:!0}))}async load(){try{const e=await fetch("/api/publisher/proofs");if(!e.ok)return;const t=await e.json(),s=this.finding;this.proofs=t.proofs,this.finding=t.finding||Date.now()-this.findClickedAt<3e3,this.lastFind=t.lastFind,this.loaded=!0,this.finding&&!this.poll&&(this.poll=setInterval(()=>void this.load(),4e3)),this.finding||(this.stopPoll(),s&&this.changed())}catch{}}async find(){if(this.finding)return;this.findClickedAt=Date.now(),this.finding=!0;const e=await fetch("/api/publisher/proofs/find",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:this.topicId})});if(!e.ok&&e.status!==409){this.finding=!1,O(this,"Couldn't start the search. Try again.",{tone:"error"});return}this.poll||(this.poll=setInterval(()=>void this.load(),4e3))}async patch(e,t){await fetch(`/api/publisher/proofs/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.load(),this.changed()}async removeProof(e){await He(this,{title:"Delete this proof?",body:e.title,confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/proofs/${e.id}`,{method:"DELETE"}),this.editing===e.id&&(this.editing=null),await this.load(),this.changed())}startEdit(e){this.editing=e?e.id:"new",this.form=e?{kind:e.kind,title:e.title,detail:e.detail??"",occurred_on:e.occurred_on??"",source:e.source??"",vertical_id:e.vertical_id==null?"":String(e.vertical_id),shareable:!!e.shareable}:{..._n,vertical_id:this.topicId==null?"":String(this.topicId)},this.updateComplete.then(()=>this.renderRoot?.querySelector(".proof-title")?.focus())}async save(){if(this.saving||!this.form.title.trim())return;this.saving=!0;const e={kind:this.form.kind,title:this.form.title.trim(),detail:this.form.detail,occurred_on:this.form.occurred_on,source:this.form.source,vertical_id:this.form.vertical_id||null,shareable:this.form.shareable};try{this.editing==="new"?await fetch("/api/publisher/proofs",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}):typeof this.editing=="number"&&await fetch(`/api/publisher/proofs/${this.editing}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({...e,status:"active"})}),this.editing=null,await this.load(),this.changed()}finally{this.saving=!1}}topicName(e){return e==null?"Any topic":this.topics.find(t=>t.id===e)?.name??"Any topic"}renderForm(e=!1){const t=s=>{this.form={...this.form,...s}};return r`
      <div class="rounded-xl border border-accent/40 bg-surface p-3 space-y-2">
        <div class="flex flex-wrap gap-1.5">
          ${Ii.map(s=>r`<button type="button" title=${s.hint}
            class="px-2 py-0.5 text-[11px] rounded-full border ${this.form.kind===s.key?"border-ink text-ink font-medium":"border-line text-muted hover:text-ink"}"
            @click=${()=>t({kind:s.key})}>${s.label}</button>`)}
        </div>
        <input type="text" class="proof-title ${Qt}" placeholder="The claim, in one line (e.g. Clinic went from 23 missed calls a week to 0)"
          .value=${this.form.title} @input=${s=>t({title:s.target.value})}
          @keydown=${s=>{s.key==="Escape"&&(this.editing=null)}} />
        <textarea class="${Qt} h-20 resize-y" placeholder="What happened, with the numbers and context. Only what's true."
          .value=${this.form.detail} @input=${s=>t({detail:s.target.value})}></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input type="text" class=${Qt} placeholder="When (2026-07)" .value=${this.form.occurred_on}
            @input=${s=>t({occurred_on:s.target.value})} />
          <select class=${Qt} @change=${s=>t({vertical_id:s.target.value})}>
            <option value="" ?selected=${this.form.vertical_id===""}>Any topic</option>
            ${this.topics.map(s=>r`<option value=${s.id} ?selected=${this.form.vertical_id===String(s.id)}>${s.name}</option>`)}
          </select>
        </div>
        <input type="text" class=${Qt} placeholder="Source (where it's from, optional)" .value=${this.form.source}
          @input=${s=>t({source:s.target.value})} />
        <div class="flex items-center gap-3 pt-1">
          <label class="flex items-center gap-1.5 text-xs text-muted cursor-pointer">
            <input type="checkbox" .checked=${this.form.shareable} @change=${s=>t({shareable:s.target.checked})} />
            OK to name the client in public
          </label>
          <button type="button" class="ml-auto text-xs text-muted hover:text-ink" @click=${()=>{this.editing=null}}>Cancel</button>
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${this.saving||!this.form.title.trim()?"opacity-40 pointer-events-none":""}"
            @click=${()=>void this.save()}>${e?"Save and keep":"Save"}</button>
        </div>
      </div>`}chip(e){const t=Id(e);return r`<span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${t.cls}">${t.label}</span>`}renderSuggestion(e){return this.editing===e.id?this.renderForm(!0):r`
      <div class="rounded-xl border border-line bg-surface px-3 py-2.5 space-y-1.5">
        <div class="flex items-start gap-2">
          ${this.chip(e.kind)}
          <p class="flex-1 min-w-0 text-sm text-ink leading-snug">${e.title}</p>
        </div>
        ${e.detail?r`<p class="text-xs text-muted leading-snug">${e.detail}</p>`:d}
        ${e.quote?r`<blockquote class="text-[11px] text-muted italic border-l-2 border-line pl-2 leading-snug">"${e.quote}"</blockquote>`:d}
        <div class="flex items-center gap-2 text-[11px] text-muted">
          <span class="truncate">${e.source||""}${e.occurred_on?` · ${e.occurred_on}`:""}${e.shareable?"":" · don't name"}</span>
          <span class="ml-auto inline-flex items-center gap-1 shrink-0">
            <button type="button" class="px-2 py-1 rounded-md hover:text-red-600" @click=${()=>void this.patch(e,{status:"dismissed"})}>Dismiss</button>
            <button type="button" class="px-2 py-1 rounded-md hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(e)}>Edit</button>
            <button type="button" class="px-2.5 py-1 rounded-md border border-accent text-accent hover:bg-accent/10 font-medium" @click=${()=>void this.patch(e,{status:"active"})}>Keep</button>
          </span>
        </div>
      </div>`}renderActive(e){return this.editing===e.id?r`<li class="p-1.5">${this.renderForm()}</li>`:r`
      <li class="group border-b border-line/50 last:border-b-0">
        <div class="flex items-center gap-2 px-3 py-2 hover:bg-hover cursor-pointer" @click=${()=>this.startEdit(e)}>
          ${this.chip(e.kind)}
          <span class="flex-1 min-w-0 text-sm text-ink truncate" title=${e.detail??e.title}>${e.title}</span>
          ${this.topicId==null&&e.vertical_id!=null?r`<span class="text-[10px] text-muted shrink-0 max-w-[7rem] truncate">${this.topicName(e.vertical_id)}</span>`:d}
          ${e.occurred_on?r`<span class="text-[10px] text-muted/70 shrink-0">${e.occurred_on}</span>`:d}
          <button type="button" class="text-[10px] text-muted hover:text-red-600 shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100"
            @click=${t=>{t.stopPropagation(),this.removeProof(e)}}>delete</button>
        </div>
      </li>`}render(){const e=this.proofs.filter(o=>this.topicId==null||o.vertical_id==null||o.vertical_id===this.topicId),t=e.filter(o=>o.status==="suggested"),s=e.filter(o=>o.status==="active"),i=this.topicId==null?null:this.topicName(this.topicId),n=this.lastFind&&Date.now()-this.lastFind.at<600*1e3?this.lastFind:null;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        <div class="flex items-start gap-2">
          <p class="flex-1 text-xs text-muted leading-snug">Real results, stories and lessons from your work. Drafts may only claim what's in here.</p>
          <button type="button" class="shrink-0 px-2.5 py-1 rounded-lg text-[13px] font-medium text-muted hover:text-ink hover:bg-hover ${this.finding?"opacity-40 pointer-events-none":""}"
            title=${i?`Search your Mana notes for proof about ${i}`:"Search your Mana notes for proof"}
            @click=${()=>void this.find()}>Find proof in Mana</button>
          <button type="button" class="shrink-0 px-2.5 py-1 rounded-lg text-[13px] font-medium text-accent bg-accent-soft hover:brightness-105"
            @click=${()=>this.startEdit(null)}>+ Add</button>
        </div>
        ${this.finding?r`<div class="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-line bg-surface text-xs text-ink">
              <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
              Searching your notes${i?` for ${i}`:""}. Takes a minute or two.
            </div>`:n?r`<p class="px-1 text-[11px] ${n.error?"text-red-600":"text-muted"}">${n.error?n.error:`${n.added?`${n.added} new suggestion${n.added===1?"":"s"} to review.`:"Nothing new found."}${n.dropped?` Dropped ${n.dropped} that didn't match your notes word for word.`:""}`}</p>`:d}
        ${this.editing==="new"?this.renderForm():d}
        ${t.length?r`<section class="space-y-2">
              <h4 class="px-1 text-[11px] font-semibold text-muted">To review <span class="text-muted/60">${t.length}</span></h4>
              ${t.map(o=>this.renderSuggestion(o))}
            </section>`:d}
        ${s.length?r`<section>
              <h4 class="px-1 pb-1.5 text-[11px] font-semibold text-muted">Proof <span class="text-muted/60">${s.length}</span></h4>
              <ul class="rounded-xl border border-line bg-surface overflow-hidden">${s.map(o=>this.renderActive(o))}</ul>
            </section>`:d}
        ${this.loaded&&!e.length&&this.editing!=="new"&&!this.finding?r`<p class="px-1 py-6 text-center text-xs text-muted">No proof yet. Add a result you're proud of, or let Mana search your notes.</p>`:d}
      </div>`}};ze([g({attribute:!1})],Pe.prototype,"topics",2);ze([g({attribute:!1})],Pe.prototype,"topicId",2);ze([l()],Pe.prototype,"proofs",2);ze([l()],Pe.prototype,"loaded",2);ze([l()],Pe.prototype,"finding",2);ze([l()],Pe.prototype,"lastFind",2);ze([l()],Pe.prototype,"editing",2);ze([l()],Pe.prototype,"form",2);ze([l()],Pe.prototype,"saving",2);Pe=ze([k("publisher-proofs")],Pe);var Dd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,ve=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ed(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Dd(t,s,n),n};const _d="w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";let ue=class extends C{constructor(){super(...arguments),this.topics=[],this.topicId=null,this.samples=[],this.loaded=!1,this.pasting=!1,this.pasteBody="",this.pasteTopic="",this.importing=!1,this.note=null,this.openId=null,this.openBody="",this.showHelp=!1}connectedCallback(){super.connectedCallback(),this.load()}changed(){this.dispatchEvent(new CustomEvent("changed",{bubbles:!0,composed:!0}))}async load(){try{const e=await fetch("/api/publisher/samples");e.ok&&(this.samples=(await e.json()).samples)}catch{}this.loaded=!0}async importFile(e){const t=e.target,s=t.files?.[0];if(t.value="",!!s){if(/\.zip$/i.test(s.name)){this.note={text:"That's the zip. Open it and upload Shares.csv from inside.",error:!0};return}this.importing=!0,this.note=null;try{const i=await s.text(),n=await fetch("/api/publisher/samples/import",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({csv:i})}),o=await n.json();if(!n.ok){this.note={text:o.error||"Import failed.",error:!0};return}this.note={text:`Imported ${o.imported} post${o.imported===1?"":"s"}.${o.skipped?` Skipped ${o.skipped} (too short, reshares, or already here).`:""}`},await this.load(),this.changed()}catch{this.note={text:"Couldn't read that file.",error:!0}}finally{this.importing=!1}}}async savePaste(){const e=this.pasteBody.trim();if(e.length<40)return;const t=await fetch("/api/publisher/samples",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({body:e,vertical_id:this.pasteTopic||null})}),s=await t.json().catch(()=>({}));if(!t.ok){this.note={text:s.error||"Couldn't save it.",error:!0};return}this.note=s.duplicate?{text:"That post is already here."}:null,this.pasting=!1,this.pasteBody="",await this.load(),this.changed()}async toggle(e){if(this.openId===e.id){this.openId=null;return}if(this.openId=e.id,this.openBody=e.preview,e.chars>e.preview.length){const t=await fetch(`/api/publisher/samples/${e.id}`);t.ok&&this.openId===e.id&&(this.openBody=(await t.json()).sample.body)}}async setTopic(e,t){await fetch(`/api/publisher/samples/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({vertical_id:t||null})}),await this.load()}async removeSample(e){await He(this,{title:"Remove this voice sample?",body:"Drafts stop learning your voice from it. The post itself isn't touched.",confirm:"Remove",tone:"danger"})&&(await fetch(`/api/publisher/samples/${e.id}`,{method:"DELETE"}),this.openId=null,await this.load(),this.changed())}renderRow(e){const t=this.openId===e.id,s=(e.preview.split(`
`).find(i=>i.trim())||"").slice(0,110);return r`
      <li class="border-b border-line/50 last:border-b-0">
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover" @click=${()=>void this.toggle(e)}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wide shrink-0 bg-line text-muted">${e.language??"?"}</span>
          <span class="flex-1 min-w-0 text-sm text-ink truncate">${s}</span>
          <span class="text-[10px] text-muted/70 shrink-0">${e.posted_on??new Date(e.created_at*1e3).toISOString().slice(0,10)}</span>
        </button>
        ${t?r`
          <div class="px-3 pb-3 space-y-2">
            <pre class="text-sm text-ink whitespace-pre-wrap font-sans leading-relaxed">${this.openBody}</pre>
            <div class="flex items-center gap-2 text-[11px] text-muted">
              <label class="flex items-center gap-1.5">Topic
                <select class="px-1.5 py-0.5 text-[11px] bg-bg border border-line rounded-md" @change=${i=>void this.setTopic(e,i.target.value)}>
                  <option value="" ?selected=${e.vertical_id==null}>Any topic</option>
                  ${this.topics.map(i=>r`<option value=${i.id} ?selected=${e.vertical_id===i.id}>${i.name}</option>`)}
                </select></label>
              ${e.url?r`<a class="underline decoration-line underline-offset-2 hover:text-ink" href=${e.url} target="_blank" rel="noopener">on LinkedIn</a>`:d}
              <button type="button" class="ml-auto hover:text-red-600" @click=${()=>void this.removeSample(e)}>remove</button>
            </div>
          </div>`:d}
      </li>`}render(){const e=this.samples.filter(t=>this.topicId==null||t.vertical_id==null||t.vertical_id===this.topicId);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        <div class="flex items-start gap-2">
          <p class="flex-1 text-xs text-muted leading-snug">Your real posts. Drafts copy how you write from these, so the more the better.</p>
          <label class="shrink-0 px-2.5 py-1 rounded-lg text-[13px] font-medium text-muted hover:text-ink hover:bg-hover cursor-pointer ${this.importing?"opacity-40 pointer-events-none":""}"
            title="Upload Shares.csv from LinkedIn's data export">
            ${this.importing?"Importing…":"Import from LinkedIn"}
            <input type="file" accept=".csv,text/csv,.zip" class="hidden" @change=${t=>void this.importFile(t)} />
          </label>
          <button type="button" class="shrink-0 px-2.5 py-1 rounded-lg text-[13px] font-medium text-accent bg-accent-soft hover:brightness-105"
            @click=${()=>{this.pasting=!this.pasting,this.pasteTopic=this.topicId==null?"":String(this.topicId)}}>+ Paste a post</button>
        </div>
        <button type="button" class="px-1 text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.showHelp=!this.showHelp}}>How do I get my LinkedIn export?</button>
        ${this.showHelp?r`
          <ol class="px-1 text-[11px] text-muted leading-relaxed list-decimal list-inside">
            <li>On LinkedIn: Me → Settings & Privacy → Data privacy → Get a copy of your data.</li>
            <li>Pick "Want something in particular?", tick Posts, request the archive.</li>
            <li>LinkedIn emails a link (minutes to a day). Download the zip and open it.</li>
            <li>Upload Shares.csv here.</li>
          </ol>`:d}
        ${this.note?r`<p class="px-1 text-[11px] ${this.note.error?"text-red-600":"text-muted"}">${this.note.text}</p>`:d}
        ${this.pasting?r`
          <div class="rounded-xl border border-accent/40 bg-surface p-3 space-y-2">
            <textarea class="${_d} h-40 resize-y" placeholder="Paste one post you wrote, exactly as published."
              .value=${this.pasteBody} @input=${t=>{this.pasteBody=t.target.value}}></textarea>
            <div class="flex items-center gap-2">
              <select class="px-2 py-1 text-[11px] bg-bg border border-line rounded-md" @change=${t=>{this.pasteTopic=t.target.value}}>
                <option value="" ?selected=${this.pasteTopic===""}>Any topic</option>
                ${this.topics.map(t=>r`<option value=${t.id} ?selected=${this.pasteTopic===String(t.id)}>${t.name}</option>`)}
              </select>
              <button type="button" class="ml-auto text-xs text-muted hover:text-ink" @click=${()=>{this.pasting=!1}}>Cancel</button>
              <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${this.pasteBody.trim().length<40?"opacity-40 pointer-events-none":""}"
                @click=${()=>void this.savePaste()}>Save</button>
            </div>
          </div>`:d}
        ${e.length?r`<ul class="rounded-xl border border-line bg-surface overflow-hidden">${e.map(t=>this.renderRow(t))}</ul>`:this.loaded&&!this.pasting?r`<p class="px-1 py-6 text-center text-xs text-muted">No samples yet. Import your LinkedIn posts, or paste a few you're proud of.</p>`:d}
      </div>`}};ve([g({attribute:!1})],ue.prototype,"topics",2);ve([g({attribute:!1})],ue.prototype,"topicId",2);ve([l()],ue.prototype,"samples",2);ve([l()],ue.prototype,"loaded",2);ve([l()],ue.prototype,"pasting",2);ve([l()],ue.prototype,"pasteBody",2);ve([l()],ue.prototype,"pasteTopic",2);ve([l()],ue.prototype,"importing",2);ve([l()],ue.prototype,"note",2);ve([l()],ue.prototype,"openId",2);ve([l()],ue.prototype,"openBody",2);ve([l()],ue.prototype,"showHelp",2);ue=ve([k("publisher-samples")],ue);const Pn=3,Pd={mobile:47,desktop:75},ti=1300,si=1900,An=3e3,Mn=100,On=1250;function Ad(e,t="mobile"){const s=Pd[t],i=e.replace(/\s+$/,"");let n=0;const o=[];for(const a of i.split(`
`)){const c=Math.max(1,Math.ceil(a.length/s));if(n+c>Pn){const u=(Pn-n)*s;return u>0&&o.push(a.slice(0,u).replace(/\s+\S*$/,"")),{shown:o.join(`
`).trimEnd(),cut:!0}}o.push(a),n+=c}return{shown:o.join(`
`),cut:!1}}function Ln(e){if(!e)return null;try{const t=JSON.parse(e);return t&&typeof t.hash=="string"&&Array.isArray(t.unsupported)?t:null}catch{return null}}function Fo(e){let t=5381;for(let s=0;s<e.length;s++)t=(t<<5)+t+e.charCodeAt(s)|0;return(t>>>0).toString(36)}const Rn=e=>e.replace(/[.,\s]/g,"");function Md(e,t){const s=t.map(o=>`${o.title} ${o.detail??""} ${o.quote??""}`).join(" "),i=new Set((s.match(/\d[\d.,]*/g)??[]).map(Rn)),n=new Set;for(const o of e.split(`
`)){const a=o.replace(/^\s*\d{1,2}[.)]\s+/,"");for(const c of a.match(/(?<!\p{L})(?:\d[\d.,]*\d|\d)/gu)??[])i.has(Rn(c))||n.add(c)}return[...n]}function Nn(e){return e.match(/\[NEEDS PROOF[^\]]*\]/gi)??[]}const Od=[/\bdelv(e|es|ing)\b/i,/\btapestry\b/i,/\btestament to\b/i,/\b(ever-evolving|fast-paced)\b/i,/\bin today'?s\b/i,/\bgame[- ]?changer\b/i,/\bunlock(s|ing)?\b/i,/\bunleash/i,/\belevate(s|d)?\b/i,/\bseamless(ly)?\b/i,/\brobust\b/i,/\bleverag(e|es|ing)\b/i,/\bharness(es|ing)?\b/i,/\bpivotal\b/i,/\bembark/i,/\brevolutioni[sz]e/i,/\bcutting-edge\b/i,/\bsynerg/i,/\bsupercharge/i,/\bnavigat(e|ing) the\b/i,/\brealm\b/i,/\bhere'?s the thing\b/i,/\blet that sink in\b/i,/\b(it'?s|this is|that'?s) not (just|only|about) [^.\n]{1,50}[,;:]\s*(it'?s|but|this is)\b/i,/\bin der heutigen\b/i,/\bnahtlos/i,/\bbahnbrechend/i,/\brevolutionier/i,/\bgamechanger\b/i];function Ld(e){const t=[];for(const s of Od){const i=e.match(s);i&&t.push(i[0])}return t}const jn=/https?:\/\/|\bwww\.[a-z]/i;function Uo({body:e,proofs:t,claimCheck:s,firstComment:i}){const n=[],o=e.trim(),a=o.length,c=o.split(`
`).find(v=>v.trim())??"";n.push(c.length<=Mn?{key:"hook",level:"pass",label:'Hook is short enough to land before "see more"'}:{key:"hook",level:"warn",label:`Hook is ${c.length} characters`,detail:`Under ${Mn} so it lands before "see more" on a phone.`}),a>An?n.push({key:"length",level:"fail",label:`${a} characters, over LinkedIn's ${An}`}):a<ti?n.push({key:"length",level:"warn",label:`${a} characters, on the short side`,detail:`Posts that do well run ${ti}-${si}.`}):a>si?n.push({key:"length",level:"warn",label:`${a} characters, on the long side`,detail:`Posts that do well run ${ti}-${si}.`}):n.push({key:"length",level:"pass",label:`${a} characters`});const u=Nn(o);u.length&&n.push({key:"placeholders",level:"fail",label:`${u.length} [NEEDS PROOF] left to fill`,detail:u.join(" · ")}),t.length||n.push({key:"proof",level:"warn",label:"No proof linked",detail:"Link the proof this post stands on, so its claims can be checked."});const h=Md(o,t);if(h.length?n.push({key:"numbers",level:"fail",label:`${h.length===1?"A number isn't":`${h.length} numbers aren't`} in your proof`,detail:h.join(", ")}):t.length&&n.push({key:"numbers",level:"pass",label:"Every number traces to your proof"}),s){const v=s.hash!==Fo(o);s.unsupported.length?n.push({key:"claims",level:v?"warn":"fail",label:`${s.unsupported.length} claim${s.unsupported.length===1?"":"s"} not backed by proof${v?" (before your edits)":""}`,detail:s.unsupported.map(M=>`"${M.sentence}": ${M.why}`).join(`
`)}):n.push({key:"claims",level:v?"warn":"pass",label:v?"Claims checked before your edits":"Every claim is backed by proof"})}const p=(i??"").trim();jn.test(o)?n.push({key:"link",level:"warn",label:"Link in the post",detail:"Links in the body cost reach. Move it to the first comment field."}):jn.test(p)&&n.push({key:"link",level:"pass",label:"The link goes in the first comment"}),p.length>On&&n.push({key:"comment",level:"fail",label:`First comment is ${p.length} characters, over LinkedIn's ${On}`}),Nn(p).length&&n.push({key:"comment-holes",level:"fail",label:"The first comment still has a [NEEDS PROOF]"});const m=o.match(/(^|\s)#[\p{L}\d_]+/gu)??[];m.length>3&&n.push({key:"hashtags",level:"warn",label:`${m.length} hashtags`,detail:"Three at most; LinkedIn treats them as a nice-to-have."});const b=(o.match(/—| – /g)??[]).length;b&&n.push({key:"dashes",level:"warn",label:`${b} em dash${b===1?"":"es"}`,detail:"A strong AI tell. Use a full stop or a comma."});const x=Ld(o);return x.length&&n.push({key:"ai",level:"warn",label:"Sounds machine-written in places",detail:x.join(", ")}),n}function Rd(e,t,s,i){const n=Uo({body:e,proofs:t,claimCheck:s,firstComment:i}).filter(o=>o.level==="fail").map(o=>o.key==="numbers"&&o.detail?`${o.label}: ${o.detail}`:o.label);return s?s.hash!==Fo(e.trim())&&n.push("The text changed after the claims check. Run Check claims again."):n.push("Claims haven't been checked yet. Run Check claims."),n}var Nd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,qt=(e,t,s,i)=>{for(var n=i>1?void 0:i?jd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Nd(t,s,n),n};let Fn=null;function Fd(){return Fn??=fetch("/api/me").then(e=>e.ok?e.json():null).catch(()=>null),Fn}let yt=class extends C{constructor(){super(...arguments),this.text="",this.mode="mobile",this.imageUrl=null,this.expanded=!1,this.me=null}connectedCallback(){super.connectedCallback(),Fd().then(e=>{this.me=e})}render(){const e=f.getState().settings,t=this.me,s=(t?e[`user:${t.login}:profile_pic_url`]:"")||(t?.role==="owner"?e["cockpit.profile_pic_url"]:"")||t?.profilePic||"",i=t?.displayName||"You",n=Ad(this.text,this.mode),o=this.expanded||!n.cut,a=this.mode==="mobile"?360:552;return r`
      <div class="rounded-lg border border-black/10 bg-white shadow-sm overflow-hidden mx-auto"
        style="width:${a}px;max-width:100%;color:rgba(0,0,0,.9);font-family:-apple-system,system-ui,'Segoe UI',Roboto,sans-serif;">
        <div class="flex items-center gap-2 px-3 pt-3">
          <span class="w-12 h-12 rounded-full bg-black/10 overflow-hidden shrink-0 grid place-items-center text-sm font-semibold" style="color:rgba(0,0,0,.6)">
            ${s?r`<img src=${s} alt="" referrerpolicy="no-referrer" class="w-full h-full object-cover" />`:i.slice(0,1)}
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-semibold leading-tight truncate">${i}</span>
            <span class="block text-xs leading-tight" style="color:rgba(0,0,0,.6)">now · 🌐</span>
          </span>
        </div>
        <div class="px-3 pt-2 pb-2 text-sm whitespace-pre-wrap break-words" style="line-height:20px;">${o?this.text:r`${n.shown}<button type="button" class="hover:underline" style="color:rgba(0,0,0,.6)" @click=${()=>{this.expanded=!0}}>…see more</button>`}${this.expanded&&n.cut?r`<button type="button" class="block mt-1 text-xs hover:underline" style="color:rgba(0,0,0,.6)" @click=${()=>{this.expanded=!1}}>show less</button>`:d}</div>
        ${this.imageUrl?r`<img src=${this.imageUrl} alt="" class="w-full block" />`:d}
        <div class="flex justify-around px-2 py-1.5 border-t border-black/10 text-xs font-semibold" style="color:rgba(0,0,0,.6)">
          <span>Like</span><span>Comment</span><span>Repost</span><span>Send</span>
        </div>
      </div>`}};qt([g()],yt.prototype,"text",2);qt([g()],yt.prototype,"mode",2);qt([g()],yt.prototype,"imageUrl",2);qt([l()],yt.prototype,"expanded",2);qt([l()],yt.prototype,"me",2);yt=qt([k("linkedin-preview")],yt);var Ud=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,A=(e,t,s,i)=>{for(var n=i>1?void 0:i?Bd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ud(t,s,n),n};const Et={proof:"Case study",teach:"Teardown",take:"Take",story:"Story"},xs=(e,t)=>{if(!e)return t;try{return JSON.parse(e)}catch{return t}},zd=1500,ii=(e,t,s,i,n)=>JSON.stringify([e.trim(),t,[...s].sort((o,a)=>o-a),i,n.trim()]),qd={pass:r`<span class="text-accent">✓</span>`,warn:r`<span class="text-amber-500">!</span>`,fail:r`<span class="text-red-600">✕</span>`};let P=class extends C{constructor(){super(...arguments),this.draft=null,this.topics=[],this.defaultTopicId=null,this.linkedinConnected=!1,this.webhookConfigured=!1,this.twoCol=!0,this.defaultScheduleAt=null,this.body="",this.pillar="story",this.verticalId=null,this.proofIds=[],this.hooks=[],this.firstComment="",this.claimCheck=null,this.dirty=!1,this.saveState="idle",this.checking=!1,this.posting=!1,this.proofs=[],this.pickerOpen=!1,this.mode="mobile",this.postMenu=!1,this.scheduleAt="",this.leaveBlocked=!1,this.loadedFor=null,this.draftId=null,this.editSeq=0,this.inflight=null,this.autosaveTimer=null,this.synced="",this.superseded=new Set,this.onVisibility=()=>{document.visibilityState==="hidden"&&this.dirty&&this.flush()},this.menuHost=null,this.menuAnchor=null,this.closeMenu=()=>{this.postMenu=!1},this.onMenuPress=e=>{const t=e.target;t&&(this.menuHost?.contains(t)||this.menuAnchor?.contains(t))||(this.postMenu=!1)},this.onMenuKey=e=>{e.key==="Escape"&&(e.stopPropagation(),this.postMenu=!1,this.menuAnchor?.focus())},this.onMenuScroll=e=>{const t=e.target;t instanceof Node&&this.menuHost?.contains(t)||this.menuHost?.contains(document.activeElement)||(this.postMenu=!1)}}connectedCallback(){super.connectedCallback(),this.loadProofs(),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),this.removeMenu(),document.removeEventListener("visibilitychange",this.onVisibility),this.dirty&&this.flush()}willUpdate(e){if(!e.has("draft"))return;const t=this.draft,s=t?.id??this.draftId??"new";if(s!==this.loadedFor){this.loadedFor=s,this.draftId=t?.id??null,this.body=t?.body??"",this.pillar=t?.pillar??"story",this.verticalId=t?.vertical_id??this.defaultTopicId??this.topics[0]?.id??null,this.proofIds=xs(t?.proof_ids??null,[]),this.hooks=xs(t?.hooks??null,[]),this.firstComment=t?.first_comment??"",this.claimCheck=Ln(t?.claim_check),this.dirty=!1,this.saveState="idle",this.leaveBlocked=!1,this.pickerOpen=!1,this.superseded.clear(),this.synced=t?ii(t.body,t.pillar,this.proofIds,this.hooks,this.firstComment):"";return}if(!t)return;const i=Ln(t.claim_check);i&&(!this.claimCheck||i.at>this.claimCheck.at)&&(this.claimCheck=i);const n=xs(t.proof_ids,[]),o=xs(t.hooks,[]),a=ii(t.body,t.pillar,n,o,t.first_comment??"");a===this.synced||this.superseded.has(a)||this.dirty||this.inflight||(this.body=t.body,this.pillar=t.pillar,this.proofIds=n,this.hooks=o,this.firstComment=t.first_comment??"",this.synced=a)}async loadProofs(){try{const e=await fetch("/api/publisher/proofs");e.ok&&(this.proofs=(await e.json()).proofs.filter(t=>t.status==="active"))}catch{}}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get linkedProofs(){return this.proofs.filter(e=>this.proofIds.includes(e.id))}get checks(){return Uo({body:this.body,proofs:this.linkedProofs,claimCheck:this.claimCheck,firstComment:this.firstComment})}touched(){this.editSeq++,this.dirty=!0,this.leaveBlocked=!1,this.autosaveTimer&&clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.autosaveTimer=null,this.flush()},zd)}edit(e){this.body=e,this.touched()}swapHook(e){const t=this.body.split(`
`),s=t.findIndex(o=>o.trim()),i=s>=0?t[s]:"";s>=0?t[s]=e:t.unshift(e),this.body=t.join(`
`);const n=this.hooks.filter(o=>o!==e);this.hooks=i.trim()?[i,...n].slice(0,3):n,this.touched()}async flush(){for(this.autosaveTimer&&(clearTimeout(this.autosaveTimer),this.autosaveTimer=null);this.inflight;)await this.inflight;if(!this.dirty)return!0;this.inflight=this.saveOnce();try{return await this.inflight}finally{this.inflight=null}}async saveOnce(){const e=this.editSeq,t=this.body.trim();if(!t||this.verticalId==null)return!0;const s=ii(t,this.pillar,this.proofIds,this.hooks,this.firstComment),i={body:t,pillar:this.pillar,proof_ids:this.proofIds,hooks:this.hooks,first_comment:this.firstComment.trim()};this.saveState="saving";try{const n=this.draftId==null,o=n?await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify({verticalId:this.verticalId,...i})}):await fetch(`/api/publisher/drafts/${this.draftId}`,{method:"PATCH",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify(i)});if(!o.ok)throw new Error(String(o.status));if(n){const{id:a}=await o.json();this.draftId=a,this.loadedFor=a}return this.synced&&this.synced!==s&&this.superseded.add(this.synced),this.synced=s,this.editSeq===e&&(this.dirty=!1),this.saveState="idle",n&&(this.emit("opened",{id:this.draftId}),this.emit("changed")),!0}catch{return this.saveState="error",!1}}async beforeClose(){return await this.flush()||this.leaveBlocked?!0:(this.leaveBlocked=!0,!1)}get blockers(){return Rd(this.body,this.linkedProofs,this.claimCheck,this.firstComment)}patch(e,t){return fetch(`/api/publisher/drafts/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async act(e,t){const s=this.blockers;if(this.postMenu=!1,e==="publish"){if(s.length){const p=s.every(b=>b.startsWith("Claims haven't")||b.startsWith("The text changed"));await He(this,{title:"This post can't go out yet",body:"Mana won't post it until these are fixed:",items:s,...p?{confirm:"Check claims now",tone:"primary"}:{}})&&this.checkClaims();return}if(!await He(this,{title:this.linkedinConnected?"Post to LinkedIn now?":"Post through n8n now?",body:this.linkedinConnected?"It goes out as soon as you confirm, with its image and first comment.":"The n8n webhook posts the text only, without the image.",confirm:"Post now",tone:"primary"}))return}if((e==="schedule"||e==="ready")&&s.length&&!await He(this,{title:"Some checks still fail",body:`${e==="schedule"?"It's scheduled":"It waits in Ready to post"}, but it won't post until these pass:`,items:s,confirm:e==="schedule"?"Schedule anyway":"Mark ready anyway",tone:"warning"}))return;if(!await this.flush()||this.draftId==null){O(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const i=this.draftId,n={status:this.draft?.status??"draft",scheduledAt:this.draft?.scheduled_at??null};this.postMenu=!1,e==="publish"&&(this.posting=!0);let o;try{o=await this.patch(i,{action:e,...t?{at:t}:{}})}catch{this.posting=!1,O(this,"No answer from the cockpit. Check Ready to post before trying again.",{tone:"error"}),this.emit("changed");return}this.posting=!1;const a=await o.json().catch(()=>({}));if(!o.ok){a.reasons?.length?await He(this,{title:a.error??"Not posted",items:a.reasons}):O(this,a.error||"That didn't work. Try again.",{tone:"error"}),this.emit("changed");return}const c=this.closest("publisher-section"),u={label:"Undo",run:()=>void this.restore(c,i,n)};e==="schedule"&&t?(O(this,`Scheduled for ${Cd(t)}`,{action:u}),this.emit("moved",{stage:"scheduled"})):e==="ready"?(O(this,"Ready to post",{action:u}),this.emit("moved",{stage:"approved"})):e==="publish"?a.status==="posted"?(O(this,a.commentError?"Posted. The first comment didn't go up; the notification has it.":"Posted to LinkedIn"),this.emit("moved",{stage:"posted"})):(O(this,"It's in Ready to post. Copy it to LinkedIn by hand."),this.emit("moved",{stage:"approved"})):e==="discard"?(O(this,"Discarded",{action:u}),this.emit("moved",{stage:"draft"})):e==="mark-posted"?(O(this,"Marked as posted"),this.emit("moved",{stage:"posted"})):this.emit("changed")}async restore(e,t,s){const i=s.status==="draft"?{action:"reopen"}:s.scheduledAt?{action:"schedule",at:s.scheduledAt}:{action:"ready"},n=await this.patch(t,i),o=s.status==="draft"?"draft":s.scheduledAt?"scheduled":"approved",a=e??this;n.ok||O(a,(await n.json().catch(()=>({}))).error||"Couldn't undo that.",{tone:"error"}),a.dispatchEvent(new CustomEvent("publisher-refresh",{detail:{stage:n.ok?o:void 0},bubbles:!0,composed:!0}))}openPostMenu(e){if(this.menuAnchor=e.currentTarget,!this.scheduleAt){const t=this.defaultScheduleAt&&this.defaultScheduleAt*1e3>Date.now()+6e4?new Date(this.defaultScheduleAt*1e3):null,s=t??new Date(Date.now()+864e5);t||s.setHours(9,0,0,0);const i=n=>String(n).padStart(2,"0");this.scheduleAt=`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())}T${i(s.getHours())}:${i(s.getMinutes())}`}this.postMenu=!this.postMenu}updated(){this.postMenu?(this.menuHost||(this.menuHost=document.createElement("div"),document.body.appendChild(this.menuHost),document.addEventListener("pointerdown",this.onMenuPress,!0),document.addEventListener("keydown",this.onMenuKey,!0),window.addEventListener("scroll",this.onMenuScroll,!0),window.addEventListener("resize",this.closeMenu)),$s(this.renderPostMenu(),this.menuHost,{host:this}),this.placeMenu()):this.menuHost&&this.removeMenu()}removeMenu(){document.removeEventListener("pointerdown",this.onMenuPress,!0),document.removeEventListener("keydown",this.onMenuKey,!0),window.removeEventListener("scroll",this.onMenuScroll,!0),window.removeEventListener("resize",this.closeMenu),this.menuHost&&($s(d,this.menuHost),this.menuHost.remove()),this.menuHost=null}placeMenu(){const e=this.menuHost?.firstElementChild;if(!e||!this.menuAnchor)return;const t=this.menuAnchor.getBoundingClientRect(),s=this.getBoundingClientRect(),i=8,n=Math.max(s.left,0)+i,o=Math.min(s.right,window.innerWidth)-i,a=Math.max(220,Math.min(320,o-n));e.style.width=`${a}px`,e.style.left=`${Math.max(n,Math.min(t.right-a,o-a))}px`;const c=e.offsetHeight,u=window.innerHeight-t.bottom-i,h=c<=u||u>=t.top-i,p=h?t.bottom+4:Math.max(i,t.top-4-c);e.style.top=`${p}px`,e.style.maxHeight=`${Math.max(160,h?u:t.top-i-4)}px`}renderPostMenu(){const e=this.linkedinConnected||this.webhookConfigured,t=this.scheduleAt?Math.floor(new Date(this.scheduleAt).getTime()/1e3):0,s="w-full text-left px-3 py-2 rounded-lg hover:bg-hover";return r`
      <div class="fixed z-[1000] p-1.5 rounded-xl border border-line bg-surface shadow-lg space-y-1 overflow-y-auto" role="dialog" aria-label="Post options">
        ${e?r`<button type="button" class=${s} @click=${()=>void this.act("publish")}>
              <span class="block text-sm text-ink font-medium">Post now</span>
              <span class="block text-[11px] text-muted">${this.linkedinConnected?"Straight to LinkedIn, with the image.":"Through the n8n webhook, text only."}</span></button>`:r`<p class="px-3 py-2 text-[11px] text-muted">Connect LinkedIn (sidebar, bottom) and Mana can post and schedule for you.</p>`}
        <div class="px-3 py-2 space-y-1.5">
          <span class="block text-sm text-ink font-medium">Schedule</span>
          <div class="flex items-center gap-2">
            <input type="datetime-local" aria-label="Post at" class="flex-1 min-w-0 px-2 py-1 text-[12px] bg-bg border border-line rounded-md text-ink"
              .value=${this.scheduleAt} @input=${i=>{this.scheduleAt=i.target.value}} />
            <button type="button" class="px-2.5 py-1 text-[12px] rounded-md border border-accent text-accent hover:bg-accent/10 ${t>Date.now()/1e3?"":"opacity-40 pointer-events-none"}"
              @click=${()=>void this.act("schedule",t)}>Schedule</button>
          </div>
          ${this.linkedinConnected?d:this.webhookConfigured?r`<span class="block text-[11px] text-amber-600">LinkedIn isn't connected, so it goes out through n8n, text only.</span>`:r`<span class="block text-[11px] text-amber-600">Without a LinkedIn connection a scheduled post can't go out on its own.</span>`}
        </div>
        <button type="button" class=${s} @click=${()=>void this.act("ready")}>
          <span class="block text-sm text-ink">Mark ready</span>
          <span class="block text-[11px] text-muted">Approved, waiting in Ready to post. Nothing goes out.</span></button>
      </div>`}async checkClaims(){if(!await this.flush()||this.draftId==null)return;const e=this.draftId;this.checking=!0;try{const t=await this.patch(e,{action:"check-claims"});t.ok?this.claimCheck=(await t.json()).claim_check:O(this,(await t.json().catch(()=>({}))).error||"The claims check didn't come back. Try again.",{tone:"error"})}catch{O(this,"The claims check didn't come back. Try again.",{tone:"error"})}finally{this.checking=!1}}async copy(){try{await navigator.clipboard.writeText(this.body),O(this,this.firstComment.trim()?"Copied. The first comment is below the text.":"Copied")}catch{O(this,"Couldn't copy. Select the text and copy it by hand.",{tone:"error"})}}toggleProof(e){this.proofIds=this.proofIds.includes(e)?this.proofIds.filter(t=>t!==e):[...this.proofIds,e],this.touched()}renderSaveState(){return this.saveState==="saving"?r`<span class="text-[11px] text-muted">Saving…</span>`:this.saveState==="error"?r`<span class="inline-flex items-center gap-2 text-[11px] text-red-600">Couldn't save
        <button type="button" class="font-medium text-ink hover:underline" @click=${()=>void this.flush()}>Retry</button>
        ${this.leaveBlocked?r`<button type="button" class="text-muted hover:text-ink hover:underline" @click=${()=>this.emit("force-close")}>Leave without saving</button>`:d}</span>`:this.draftId!=null&&!this.dirty?r`<span class="text-[11px] text-muted">Saved</span>`:d}renderHeader(){const e=this.draft,t=e?.status??"draft",s="px-3 py-1.5 text-sm rounded-lg border",i=e?.status==="approved"&&e.scheduled_at?e.scheduled_at:null;return r`
      <div class="relative flex flex-wrap items-center gap-2 px-3 pt-1 pb-2 shrink-0 border-b border-line/60">
        <select class="px-2 py-1 text-[12px] bg-bg border border-line rounded-md" aria-label="Format"
          @change=${n=>{this.pillar=n.target.value,this.touched()}}>
          ${Object.keys(Et).map(n=>r`<option value=${n} ?selected=${n===this.pillar}>${Et[n]}</option>`)}
        </select>
        ${this.draftId==null?r`<select class="px-2 py-1 text-[12px] bg-bg border border-line rounded-md" aria-label="Topic"
              @change=${n=>{this.verticalId=Number(n.target.value)||null}}>
              ${this.topics.map(n=>r`<option value=${n.id} ?selected=${n.id===this.verticalId}>${n.name}</option>`)}
            </select>`:r`<span class="text-[12px] text-muted">${this.topics.find(n=>n.id===(e?.vertical_id??this.verticalId))?.name??""}</span>`}
        ${t!=="draft"?r`<span class="text-[11px] px-1.5 py-0.5 rounded-full font-medium ${i||t==="posting"?"bg-accent-soft text-accent":"bg-line text-muted"}">${i?`Scheduled ${new Date(i*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"})}`:t==="approved"?"Ready to post":t==="posting"?"Posting…":t==="posted"?"Published":"Discarded"}</span>`:d}
        <span class="flex-1"></span>
        ${this.renderSaveState()}
        ${this.posting?r`<span class="inline-flex items-center gap-1.5 text-[12px] text-ink">
              <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Posting…</span>`:t==="draft"?r`
            ${this.draftId!=null?r`<button type="button" class="text-[12px] text-muted hover:text-red-600 px-1" @click=${()=>void this.act("discard")}>Discard</button>`:d}
            ${this.draftId!=null?r`<button type="button" class="${s} border-accent text-accent hover:bg-accent/10 font-medium" aria-haspopup="dialog" aria-expanded=${this.postMenu}
              @click=${n=>this.openPostMenu(n)}>Post…</button>`:d}`:t==="approved"?r`
              <button type="button" class="text-[12px] text-muted hover:text-ink px-1" @click=${()=>void this.act("reopen")}>Back to drafts</button>
              ${i?r`<button type="button" class="text-[12px] text-muted hover:text-ink px-1" @click=${()=>void this.act("unschedule")}>Unschedule</button>`:d}
              <button type="button" class="${s} border-line text-ink hover:bg-hover" @click=${()=>void this.copy()}>Copy</button>
              ${this.linkedinConnected||this.webhookConfigured?d:r`<button type="button" class="${s} border-line text-ink hover:bg-hover" @click=${()=>void this.act("mark-posted")}>I posted it</button>`}
              <button type="button" class="${s} border-accent text-accent hover:bg-accent/10 font-medium" aria-haspopup="dialog" aria-expanded=${this.postMenu}
                @click=${n=>this.openPostMenu(n)}>Post…</button>`:d}
      </div>`}renderChecks(){const e=this.checks,t={fail:0,warn:1,pass:2};return r`
      <section class="rounded-xl border border-line bg-surface px-3 py-2.5 space-y-1">
        <div class="flex items-center gap-2 pb-0.5">
          <h4 class="text-[11px] font-semibold text-muted">Checks</h4>
          <button type="button" class="ml-auto text-[11px] text-accent/90 hover:text-accent ${this.checking?"opacity-50 pointer-events-none":""}"
            title="Ask a second pass to flag any claim your proof doesn't back"
            @click=${()=>void this.checkClaims()}>${this.checking?"Checking claims…":this.claimCheck?"Re-check claims":"Check claims"}</button>
        </div>
        ${[...e].sort((s,i)=>t[s.level]-t[i.level]).map(s=>r`
          <div class="text-[12px] leading-snug">
            <div class="flex gap-2"><span class="w-3 shrink-0 text-center font-bold">${qd[s.level]}</span><span class="${s.level==="pass"?"text-muted":"text-ink"}">${s.label}</span></div>
            ${s.detail&&s.level!=="pass"?r`<p class="pl-5 text-[11px] text-muted whitespace-pre-wrap">${s.detail}</p>`:d}
          </div>`)}
      </section>`}renderProof(){const e=this.linkedProofs,t=this.draft?.vertical_id??this.verticalId,s=this.proofs.filter(i=>i.vertical_id==null||i.vertical_id===t);return r`
      <section class="rounded-xl border border-line bg-surface px-3 py-2.5">
        <div class="flex items-center gap-2">
          <h4 class="text-[11px] font-semibold text-muted">Proof this post stands on</h4>
          <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>{this.pickerOpen=!this.pickerOpen}}>${this.pickerOpen?"Done":"+ Link proof"}</button>
        </div>
        ${e.length?r`<ul class="mt-1.5 space-y-1">${e.map(i=>r`
              <li class="flex items-start gap-2 text-[12px] leading-snug">
                <span class="flex-1 text-ink" title=${i.detail??""}>${i.title}</span>
                <button type="button" class="text-muted hover:text-red-600 shrink-0" aria-label="Unlink" @click=${()=>this.toggleProof(i.id)}>×</button>
              </li>`)}</ul>`:r`<p class="mt-1 text-[12px] text-muted">None linked yet.</p>`}
        ${this.pickerOpen?r`<div class="mt-2 max-h-56 overflow-y-auto rounded-lg border border-line/70">
              ${s.length?s.map(i=>r`<label class="flex items-start gap-2 px-2.5 py-1.5 text-[12px] hover:bg-hover cursor-pointer">
                    <input type="checkbox" class="mt-0.5" .checked=${this.proofIds.includes(i.id)} @change=${()=>this.toggleProof(i.id)} />
                    <span class="text-ink leading-snug">${i.title}</span></label>`):r`<p class="px-2.5 py-2 text-[12px] text-muted">No kept proof for this topic. Add some in the Proof bank.</p>`}
            </div>`:d}
      </section>`}render(){const e=this.draft,t=!e||e.status==="draft"?this.hooks:[],s=!e||e.status==="draft"||e.status==="approved",i=r`
      <div class="space-y-3 min-w-0">
        <textarea class="w-full min-h-[22rem] px-3 py-2.5 text-sm bg-surface border border-line rounded-xl resize-y focus:outline-none focus:border-ink leading-relaxed text-ink"
          placeholder="Hook first. One line that makes them need the second."
          ?readonly=${!s}
          .value=${this.body}
          @input=${o=>this.edit(o.target.value)}
          @keydown=${o=>{(o.metaKey||o.ctrlKey)&&o.key==="s"&&(o.preventDefault(),this.flush())}}></textarea>
        <label class="block text-[12px] text-muted">First comment (links go here)
          <textarea class="mt-1 w-full min-h-[3.25rem] px-3 py-2 text-sm bg-surface border border-line rounded-xl resize-y focus:outline-none focus:border-ink leading-relaxed text-ink"
            placeholder=${this.linkedinConnected?"Mana posts it as a comment right after the post":"Shown with the post, to add as the first comment"}
            ?readonly=${!s}
            .value=${this.firstComment}
            @input=${o=>{this.firstComment=o.target.value,this.touched()}}></textarea></label>
        ${t.length?r`<div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] text-muted/70 font-semibold">Other hooks</span>
              ${t.map(o=>r`<button type="button" title=${o}
                class="max-w-full truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
                @click=${()=>this.swapHook(o)}>${o}</button>`)}
            </div>`:d}
        ${this.renderChecks()}
        ${this.renderProof()}
        ${e&&this.renderImage?this.renderImage(e):d}
      </div>`,n=r`
      <div class="min-w-0">
        <div class="flex items-center justify-center gap-1 mb-2">
          ${["mobile","desktop"].map(o=>r`<button type="button"
            class="px-2.5 py-1 text-[11px] rounded-full ${this.mode===o?"bg-hover text-ink font-medium":"text-muted hover:text-ink"}"
            @click=${()=>{this.mode=o}}>${o==="mobile"?"Phone":"Desktop"}</button>`)}
        </div>
        <linkedin-preview .text=${this.body} .mode=${this.mode} .imageUrl=${e?.image_url??null}></linkedin-preview>
      </div>`;return r`
      <div class="flex flex-col flex-1 min-h-0">
        ${this.renderHeader()}
        <div class="flex-1 min-h-0 overflow-y-auto p-3">
          <div class="${this.twoCol?"grid grid-cols-2 gap-4 items-start":"space-y-4"}">${i}${n}</div>
        </div>
      </div>`}};A([g({attribute:!1})],P.prototype,"draft",2);A([g({attribute:!1})],P.prototype,"topics",2);A([g({attribute:!1})],P.prototype,"defaultTopicId",2);A([g({type:Boolean})],P.prototype,"linkedinConnected",2);A([g({type:Boolean})],P.prototype,"webhookConfigured",2);A([g({type:Boolean})],P.prototype,"twoCol",2);A([g({attribute:!1})],P.prototype,"defaultScheduleAt",2);A([g({attribute:!1})],P.prototype,"renderImage",2);A([l()],P.prototype,"body",2);A([l()],P.prototype,"pillar",2);A([l()],P.prototype,"verticalId",2);A([l()],P.prototype,"proofIds",2);A([l()],P.prototype,"hooks",2);A([l()],P.prototype,"firstComment",2);A([l()],P.prototype,"claimCheck",2);A([l()],P.prototype,"dirty",2);A([l()],P.prototype,"saveState",2);A([l()],P.prototype,"checking",2);A([l()],P.prototype,"posting",2);A([l()],P.prototype,"proofs",2);A([l()],P.prototype,"pickerOpen",2);A([l()],P.prototype,"mode",2);A([l()],P.prototype,"postMenu",2);A([l()],P.prototype,"scheduleAt",2);A([l()],P.prototype,"leaveBlocked",2);P=A([k("publisher-editor")],P);var Hd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,w=(e,t,s,i)=>{for(var n=i>1?void 0:i?Kd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Hd(t,s,n),n};const Gd=640,Un=176,Bn=400,vs=224,le=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,ni=[{key:"week",label:"This week",icon:"target"},{key:"draft",label:"Drafts",icon:"file-text"},{key:"approved",label:"Ready to post",icon:"circle-check"},{key:"scheduled",label:"Scheduled",icon:"clock"},{key:"posted",label:"Published",icon:"send"}];function zn(e){return e.status==="posting"?"approved":e.status==="approved"?e.scheduled_at?"scheduled":"approved":e.status==="draft"||e.status==="posted"?e.status:null}const ys=()=>Math.floor(Date.now()/1e3),Wd=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),oi=["impressions","reactions","comments","leads"],ws={proof:"Case study",teach:"Teardown",take:"Take",story:"Story"},qn={proof:"bg-emerald-500/10 text-emerald-600",teach:"bg-sky-500/10 text-sky-600",take:"bg-amber-500/10 text-amber-600",story:"bg-pink-500/10 text-pink-600"},we=e=>e.format==="yt_script",Hn="bg-violet-500/10 text-violet-600",Yt=[{key:"name",q:"Name this topic.",hint:'Shows in the sidebar, e.g. "Voice agents" or "EDU APAC"',required:!0},{key:"goal",q:"What should posting about this get you?",hint:'One concrete outcome, e.g. "2 demo calls a month from clinic owners in DACH"',required:!1},{key:"audience",q:"Who exactly is the buyer?",hint:'Industry, role, size, region — e.g. "Praxisinhaber & Handwerksbetriebe 5-50 MA, DACH"',required:!0},{key:"offer",q:"What's the offer — and its #1 measurable outcome?",hint:'e.g. "KI-Telefonagent: kein verpasster Anruf mehr, +X Termine/Monat"',required:!0},{key:"opinions",q:"Your 2-3 strongest industry opinions?",hint:"Fuel for the trend-take posts. What do you believe that most disagree with?",required:!1},{key:"cta",q:"Where should interested people land?",hint:'Booking link, lead magnet, or just "DM me"',required:!1},{key:"extra",q:"Anything else the ghostwriter should know?",hint:"Free-form — topics to avoid, phrases you hate, running jokes, current campaigns… goes to the writer verbatim.",required:!1}],Kn={name:"",goal:"",audience:"",offer:"",opinions:"",cta:"",extra:""},ri=[{key:"flat-illustration",label:"Flat illustration",dna:"Flat editorial vector illustration. Muted palette of two brand colors + one accent, soft paper-grain texture, rounded organic shapes, generous negative space. One recurring motif across posts. No photorealism, no gradients-heavy 3D, no stock-photo look."},{key:"line-art",label:"Line art",dna:"Single-weight line art on a warm off-white background, one accent color for emphasis only, lots of whitespace, confident minimal strokes. Same line weight and accent every time. No shading, no photorealism."},{key:"pixel-art",label:"Pixel art",dna:"16-bit pixel art, crisp hard pixels, a fixed limited palette (8-12 colors), subtle dithering. Same palette and character proportions every post. No anti-aliasing, no smooth gradients."},{key:"cartoon",label:"Cartoon",dna:"Bold flat cartoon with thick uniform outlines, cheerful limited palette, simple expressive shapes. Same outline weight and palette across posts. No realism, no fine detail."},{key:"isometric",label:"Isometric",dna:"Clean isometric illustration, consistent 2:1 iso angle, soft flat shading, one cohesive palette, small tasteful details. Same angle and palette every time. No perspective drift, no photoreal textures."},{key:"3d-clay",label:"3D / clay",dna:"Soft 3D clay-render look, rounded matte forms, gentle studio lighting, one cohesive pastel-leaning palette, shallow depth of field. Same lighting and palette across posts. No hard photorealism."},{key:"realistic",label:"Realistic photo",dna:"Photorealistic, natural directional light, shallow depth of field, consistent warm color grade and mood across posts. Editorial not stock. Same grade and lighting direction every time. No text overlays."},{key:"infographic",label:"Infographic / data",dna:"Clean minimal infographic / data-viz. Fixed type hierarchy, a two-color brand palette + one accent, generous margins, clear labels, one idea per graphic. Same grid, palette, and type treatment every post. Legible at mobile size."}];let y=class extends C{constructor(){super(...arguments),this.verticals=[],this.drafts=[],this.webhookConfigured=!1,this.linkedinConfigured=!1,this.loading=!0,this.activeVerticalId=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_vertical"));return Number.isFinite(e)&&e>0?e:null}catch{return null}})(),this.stage="week",this.view="queue",this.proofStats={active:0,suggested:0},this.sampleCount=0,this.wide=!0,this.navOpen=!1,this.menuForId=null,this.navWidth=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_nav_width"));return e>=Un&&e<=Bn?e:vs}catch{return vs}})(),this.navHidden=(()=>{try{return localStorage.getItem("cockpit.publisher_nav_hidden")==="1"}catch{return!1}})(),this.collapsedGroups=(()=>{try{return new Set(JSON.parse(localStorage.getItem("cockpit.publisher_nav_collapsed")||"[]"))}catch{return new Set}})(),this.wizardEditId=null,this.wizardStep=0,this.wizard={...Kn},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=4,this.editImageStyle="flat-illustration",this.editImageDna="",this.editImageRef=null,this.uploadingImageId=null,this.imaging=[],this.imageErrors={},this.imageDirection={},this.libraryFor=null,this.saving=!1,this.editingId=null,this.editBody="",this.composing=!1,this.editorId=null,this.createdId=null,this.twoCol=!0,this.aiTopicId=null,this.aiPillar="proof",this.aiProofIds=[],this.aiAngle="",this.aiProofs=[],this.aiStartedAt=null,this.aiError="",this.generating=!1,this.genStartedAt=null,this.genTicker=null,this.webhookUrl="",this.webhookSecret="",this.linkedinToken="",this.linkedin=null,this.liClientId="",this.liClientSecret="",this.liSaving=!1,this.showLegacy=!1,this.postUrlForId=null,this.postUrlDraft="",this.syncingId=null,this.copiedId=null,this.researchOpenId=null,this.expandedId=null,this.renamingVerticalId=null,this.renameValue="",this.toastMsg=null,this.toastTimer=null,this.ask=null,this.insights=null,this.metricsForId=null,this.metricsDraft={impressions:"",reactions:"",comments:"",leads:""},this.poll=null,this.topicDrag=new Ao(this,{type:"text/x-publisher-topic",onReorder:(e,t)=>this.reorderTopic(e,t)}),this.dirtyFields=new Set,this.onToast=e=>{e.stopPropagation(),this.toastMsg=e.detail,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMsg=null},this.toastMsg.action?8e3:5e3)},this.onConfirm=e=>{e.stopPropagation();const t=e.detail;t.handled=!0,this.ask?.resolve(!1),this.ask=t,this.updateComplete.then(()=>requestAnimationFrame(()=>this.querySelector("[data-dialog-default]")?.focus()))},this.onNotifNavigate=e=>{e.detail?.mode==="publisher"&&(this.view==="editor"||this.view==="ai"||this.view==="wizard"||this.setStage("week"))},this.onRefreshRequest=e=>{const t=e.detail?.stage;t&&this.view==="queue"&&this.setStage(t),this.refresh()},this.onDocDown=e=>{this.menuForId!==null&&(e.target?.closest?.("[data-topic-menu]")||(this.menuForId=null))},this.insightsFor=""}connectedCallback(){super.connectedCallback(),this.refresh(),this.resizeObs=new ResizeObserver(()=>{const e=this.clientWidth>=Gd;e!==this.wide&&(this.wide=e);const t=this.clientWidth>=1100;t!==this.twoCol&&(this.twoCol=t)}),this.resizeObs.observe(this),window.addEventListener("pointerdown",this.onDocDown,!0),this.addEventListener("publisher-toast",this.onToast),this.addEventListener("publisher-confirm",this.onConfirm),this.addEventListener("publisher-refresh",this.onRefreshRequest),document.addEventListener("notif-navigate",this.onNotifNavigate),this.poll=setInterval(()=>{const e=this.view==="queue"&&this.editingId===null&&this.metricsForId===null&&this.postUrlForId===null&&this.renamingVerticalId===null&&this.menuForId===null&&!this.composing&&!this.topicDrag.active,t=this.view==="wizard"&&this.wizardEditId!=null,s=(this.view==="proofs"||this.view==="samples")&&this.menuForId===null&&this.renamingVerticalId===null,i=this.aiStartedAt!==null,n=this.imaging.length>0;(e||t||s||i||n)&&this.refresh()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll),this.genTicker&&clearInterval(this.genTicker),this.resizeObs?.disconnect(),window.removeEventListener("pointerdown",this.onDocDown,!0),this.removeEventListener("publisher-toast",this.onToast),this.removeEventListener("publisher-confirm",this.onConfirm),this.removeEventListener("publisher-refresh",this.onRefreshRequest),document.removeEventListener("notif-navigate",this.onNotifNavigate),this.toastTimer&&clearTimeout(this.toastTimer),this.ask?.resolve(!1)}answer(e){const t=this.ask;this.ask=null,t?.resolve(e)}renderToast(){const e=this.toastMsg;return e?r`
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 px-4 py-2 rounded-xl ${e.tone==="error"?"bg-red-600":"bg-ink"} text-surface text-sm shadow-lg" role="status">
        <span class="min-w-0">${e.text}</span>
        ${e.action?r`<button type="button" class="shrink-0 font-semibold hover:underline"
          @click=${()=>{const t=e.action.run;this.toastMsg=null,t()}}>${e.action.label}</button>`:d}
      </div>`:d}renderDialog(){const e=this.ask;if(!e)return d;const t=e.tone==="danger"?"bg-red-600":e.tone==="warning"?"bg-amber-500":"bg-accent";return r`
      <sc-dialog open label=${e.title}
        @sc-hide=${()=>this.answer(!1)}
        @keydown=${s=>{s.key==="Escape"?(s.preventDefault(),this.answer(!1)):s.key==="Enter"&&e.confirm&&!(s.target instanceof HTMLTextAreaElement)&&(s.preventDefault(),this.answer(!0))}}>
        ${e.body?r`<p class="text-sm text-muted leading-snug">${e.body}</p>`:d}
        ${e.items?.length?r`<ul class="mt-2 space-y-1 text-sm text-ink list-disc pl-5">${e.items.map(s=>r`<li>${s}</li>`)}</ul>`:d}
        <div slot="footer" class="flex items-center justify-end gap-2">
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg text-muted hover:text-ink hover:bg-hover" ?data-dialog-default=${!e.confirm}
            @click=${()=>this.answer(!1)}>${e.cancel??(e.confirm?"Cancel":"Close")}</button>
          ${e.confirm?r`<button type="button" data-dialog-default class="px-3 py-1.5 text-sm rounded-lg font-semibold text-white hover:opacity-90 ${t}"
            @click=${()=>this.answer(!0)}>${e.confirm}</button>`:d}
        </div>
      </sc-dialog>`}get activeVertical(){return this.verticals.find(e=>e.id===this.activeVerticalId)??null}setVertical(e){this.activeVerticalId=e,this.composing=!1,this.editingId=null,this.expandedId=null,this.view="queue",this.navOpen=!1;try{localStorage.setItem("cockpit.publisher_vertical",String(e??0))}catch{}}setStage(e){this.stage=e,this.expandedId=null,this.view="queue",this.navOpen=!1,e==="week"&&this.loadInsights()}inTopic(e){return this.activeVerticalId===null||e.vertical_id===this.activeVerticalId}stageCount(e){return e==="week"?this.weekTopics().reduce((t,s)=>t+Hi(s,this.drafts,ys()).filter(i=>i.kind==="open").length,0):this.drafts.filter(t=>zn(t)===e&&this.inTopic(t)).length}weekTopics(){return(this.activeVertical?[this.activeVertical]:this.verticals).filter(e=>e.enabled)}takenTimes(e){return this.drafts.filter(t=>(t.status==="approved"||t.status==="posting")&&t.scheduled_at&&t.id!==e).map(t=>t.scheduled_at)}postedThisWeek(e){const t=Go(ys());return this.drafts.filter(s=>s.vertical_id===e.id&&s.status==="posted"&&(s.posted_at??0)>=t).length}async reorderTopic(e,t){const s=this.verticals.findIndex(o=>o.id===e);if(s<0)return;const i=[...this.verticals],[n]=i.splice(s,1);i.splice(s<t?t-1:t,0,n),!i.every((o,a)=>o.id===this.verticals[a]?.id)&&(this.verticals=i,await fetch("/api/publisher/verticals/order",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({ids:i.map(o=>o.id)})}))}async togglePause(e){this.menuForId=null,await fetch(`/api/publisher/verticals/${e.id}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:!e.enabled})}),await this.refresh()}async deleteTopic(e){this.menuForId=null;const t=this.drafts.filter(n=>n.vertical_id===e.id).length;if(!await He(this,{title:`Delete ${e.name}?`,body:`${t?`Its ${t} post${t===1?"":"s"} go with it. `:""}This can't be undone. Anything already on LinkedIn stays there, and its proof and voice samples stay as general items.`,confirm:"Delete topic",tone:"danger"}))return;if(!(await fetch(`/api/publisher/verticals/${e.id}?drafts=delete`,{method:"DELETE"})).ok){O(this,"Couldn't delete the topic. Try again.",{tone:"error"});return}this.activeVerticalId===e.id&&this.setVertical(null),await this.refresh(),O(this,`Deleted ${e.name}`)}openCompose(){this.navOpen=!1,this.menuForId=null,this.editorId=null,this.composing=!0,this.view="editor"}openEditor(e){this.navOpen=!1,this.composing=!1,this.editorId=e,this.view="editor"}async closeEditor(){const e=this.querySelector("publisher-editor");if(e&&!await e.beforeClose()){O(this,"Couldn't save your last edit.",{tone:"error",action:{label:"Leave anyway",run:()=>this.leaveEditor()}});return}this.leaveEditor()}follow(e){this.leaveEditor(),this.setStage(e)}leaveEditor(){this.composing=!1,this.editorId=null,this.createdId=null,this.view="queue",this.refresh()}async openAi(e={}){this.navOpen=!1,this.menuForId=null,this.aiTopicId=e.topicId??this.activeVerticalId??this.verticals.find(t=>t.enabled)?.id??this.verticals[0]?.id??null,this.aiPillar=e.format??this.insights?.find(t=>t.topicId===this.aiTopicId)?.nextFormat??"proof",this.aiProofIds=[],this.view="ai";try{const t=await fetch("/api/publisher/proofs");t.ok&&(this.aiProofs=(await t.json()).proofs.filter(s=>s.status==="active"))}catch{}}pickUpAiDraft(){if(this.aiStartedAt===null||this.generating)return;const e=Math.floor(this.aiStartedAt/1e3)-5,t=this.drafts.filter(s=>s.created_at>=e&&s.vertical_id===this.aiTopicId).sort((s,i)=>i.created_at-s.created_at)[0];t?(this.aiStartedAt=null,(this.view==="ai"||this.view==="queue")&&this.openEditor(t.id)):Date.now()-this.aiStartedAt>480*1e3&&(this.aiStartedAt=null)}async refresh(){try{const e=await fetch("/api/publisher");if(e.ok){const t=await e.json();this.linkedin=t.linkedin??null;const s=this.imaging;if(this.imaging=t.imaging??[],this.imageErrors=t.imageErrors??{},s.some(i=>!this.imaging.includes(i))&&Ke(()=>import("./notes-media-BYDjX8ZZ.js"),__vite__mapDeps([2,3,4,5])).then(i=>i.forgetMediaCache()),this.verticals=t.verticals,this.proofStats=t.proofStats??{active:0,suggested:0},this.sampleCount=t.sampleCount??0,this.drafts=t.drafts,this.webhookConfigured=t.webhookConfigured,this.linkedinConfigured=t.linkedinConfigured??!1,this.setGenerating(t.generating??!1),(this.view==="results"||this.view==="queue"&&this.stage==="week")&&this.loadInsights(),this.aiStartedAt!==null&&t.draftError&&t.draftError.at>=this.aiStartedAt&&!t.generating&&(this.aiStartedAt=null,this.aiError=t.draftError.message),this.pickUpAiDraft(),this.view==="wizard"&&this.wizardEditId!=null){const i=this.verticals.find(n=>n.id===this.wizardEditId);i&&this.mergeServerIntoForm(i)}this.loading=!1}}catch{}}setGenerating(e){const t=this.genStartedAt!==null&&Date.now()-this.genStartedAt<8e3,s=e||t;s&&!this.generating&&(this.genStartedAt===null&&(this.genStartedAt=Date.now()),this.genTicker||(this.genTicker=setInterval(()=>this.requestUpdate(),1e3))),!s&&this.generating&&(this.genStartedAt=null,this.genTicker&&(clearInterval(this.genTicker),this.genTicker=null)),this.generating=s}genStatusText(){const e=this.genStartedAt?Math.floor((Date.now()-this.genStartedAt)/1e3):0;return`${e<40?"searching what your buyers are talking about":e<100?"reading sources + writing the draft":"still writing — long research pass"}… ${e}s (typically 60–120s)`}mergeServerIntoForm(e){const t={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""};let s=this.wizard,i=!1;for(const n of Object.keys(t))!this.dirtyFields.has(n)&&t[n]!==s[n]&&(i||(s={...s}),s[n]=t[n],i=!0);i&&(this.wizard=s),!this.dirtyFields.has("language")&&e.language!==this.wizardLang&&(this.wizardLang=e.language),!this.dirtyFields.has("formality")&&e.formality!==this.wizardFormality&&(this.wizardFormality=e.formality),!this.dirtyFields.has("posts_per_week")&&e.posts_per_week!==this.editPostsPerWeek&&(this.editPostsPerWeek=e.posts_per_week)}openWizard(e){e?(this.wizardEditId=e.id,this.wizard={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""},this.wizardLang=e.language,this.wizardFormality=e.formality,this.editPostsPerWeek=e.posts_per_week,this.editImageStyle=e.image_style||"flat-illustration",this.editImageDna=e.image_dna||"",this.editImageRef=e.image_ref_url):(this.wizardEditId=null,this.wizard={...Kn},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=3,this.editImageStyle="flat-illustration",this.editImageDna="",this.editImageRef=null),this.dirtyFields=new Set,this.wizardStep=0,this.view="wizard",this.navOpen=!1,this.menuForId=null,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}async saveWizard(){if(!this.saving){this.saving=!0;try{const e={...this.wizard,language:this.wizardLang,formality:this.wizardFormality};if(e.image_style=this.editImageStyle,e.image_dna=this.editImageDna,e.image_ref_url=this.editImageRef,e.posts_per_week=this.editPostsPerWeek,this.wizardEditId!=null)await fetch(`/api/publisher/verticals/${this.wizardEditId}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)});else{const t=await fetch("/api/publisher/verticals",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(t.ok){const{id:s}=await t.json();this.setVertical(s)}}await this.refresh(),this.view="queue"}finally{this.saving=!1}}}renderEditForm(){const e=(t,s,i=!1)=>r`
      <label class="block text-xs text-muted">${s}
        <textarea class="mt-1 w-full ${i?"h-40":"h-20"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
          .value=${this.wizard[t]}
          @input=${n=>{this.dirtyFields.add(t),this.wizard={...this.wizard,[t]:n.target.value}}}
        ></textarea></label>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto space-y-3 pb-6">
          <label class="block text-xs text-muted">Name
            <input type="text" class="mt-1 w-full px-3 py-2 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              .value=${this.wizard.name}
              @input=${t=>{this.dirtyFields.add("name"),this.wizard={...this.wizard,name:t.target.value}}} /></label>
          ${e("goal","Goal: what posting about this should get you")}
          ${e("audience","Who exactly is the buyer?")}
          ${e("offer","The offer + its #1 measurable outcome")}
          ${e("opinions","Your strongest industry opinions")}
          ${e("cta","Where interested people land (CTA)")}
          ${e("extra","Anything else the writer should know (reaches it word for word)",!0)}
          <p class="text-[11px] text-muted leading-snug">Proof and voice samples live in the Library: <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>{this.view="proofs"}}>Proof bank</button> · <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>{this.view="samples"}}>Voice samples</button></p>
          <div class="flex gap-3">
            <label class="flex-1 text-xs text-muted">Language
              <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.wizardLang}
                @change=${t=>{this.dirtyFields.add("language"),this.wizardLang=t.target.value}}>
                <option value="de">Deutsch</option><option value="en">English</option><option value="de+en">Deutsch, EN fallback</option>
              </select></label>
            <label class="flex-1 text-xs text-muted">Anrede
              <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.wizardFormality}
                @change=${t=>{this.dirtyFields.add("formality"),this.wizardFormality=t.target.value}}>
                <option value="du">Du</option><option value="sie">Sie</option>
              </select></label>
          </div>
          <div class="pt-2 border-t border-line/60">
            <label class="flex items-center gap-3 text-xs text-muted">Posts per week (target)
              <input type="number" min="1" max="7" class="w-20 px-2 py-1.5 text-sm bg-surface border border-line rounded-lg text-right"
                .value=${String(this.editPostsPerWeek)}
                @input=${t=>{this.dirtyFields.add("posts_per_week"),this.editPostsPerWeek=Number(t.target.value)||3}} /></label>
            <p class="text-[10px] text-muted/70 mt-1.5">The sidebar shows this week's published posts against this target.</p>
          </div>
          ${this.renderImageConfig()}
          <div class="flex items-center justify-between pt-2">
            <button type="button" class="text-sm text-muted hover:text-ink" @click=${()=>{this.view="queue"}}>← Cancel</button>
            <button type="button" class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${this.saving||!this.wizard.name.trim()?"opacity-40 pointer-events-none":""}"
              @click=${()=>void this.saveWizard()}>${this.saving?"…":"Save changes"}</button>
          </div>
        </div>
      </div>
    `}renderWizard(){const e=this.wizardStep===Yt.length,t=e?null:Yt[this.wizardStep],s=!t?.required||!!this.wizard[t.key].trim(),i=!!this.wizard.name.trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex items-center gap-1.5 mb-6">
            ${[...Yt,null].map((n,o)=>r`<button type="button"
              class="h-2.5 flex-1 rounded-full transition-colors ${o<=this.wizardStep?"bg-accent":"bg-line hover:bg-muted/40"}"
              title=${o<Yt.length?Yt[o].q:"Language & tone"}
              aria-label="Go to step ${o+1}"
              @click=${()=>{this.wizardStep=o,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}}
            ></button>`)}
            <button type="button"
              class="shrink-0 ml-1 w-6 h-6 grid place-items-center rounded-full text-muted hover:text-ink hover:bg-hover text-base leading-none"
              title=${i?"Save what's here and close":"Close without saving"}
              @click=${()=>{i?this.saveWizard():this.view="queue"}}
            >×</button>
          </div>
          ${t?r`
              <h3 class="text-base font-semibold text-ink mb-1">${t.q}</h3>
              <p class="text-xs text-muted mb-3">${t.hint}</p>
              <textarea
                class="wizard-input w-full ${t.key==="extra"?"h-36":t.key==="name"?"h-12":"h-24"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
                .value=${this.wizard[t.key]}
                placeholder=${t.required?"":"optional"}
                @input=${n=>{this.wizard={...this.wizard,[t.key]:n.target.value}}}
                @keydown=${n=>{n.key==="Escape"?this.view="queue":n.key==="Enter"&&t.key==="name"&&(n.preventDefault(),s&&(this.wizardStep+=1))}}
              ></textarea>`:r`
              <h3 class="text-base font-semibold text-ink mb-1">Language & tone</h3>
              <p class="text-xs text-muted mb-3">The language this topic posts in.</p>
              <div class="flex gap-3">
                <label class="flex-1 text-xs text-muted">Language
                  <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.wizardLang}
                    @change=${n=>{this.dirtyFields.add("language"),this.wizardLang=n.target.value}}>
                    <option value="de">Deutsch</option><option value="en">English</option><option value="de+en">Deutsch, EN fallback</option>
                  </select></label>
                <label class="flex-1 text-xs text-muted">Anrede
                  <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.wizardFormality}
                    @change=${n=>{this.dirtyFields.add("formality"),this.wizardFormality=n.target.value}}>
                    <option value="du">Du</option><option value="sie">Sie</option>
                  </select></label>
              </div>`}
          <div class="flex items-center justify-between mt-4">
            <button type="button" class="text-sm text-muted hover:text-ink"
              @click=${()=>{this.wizardStep===0?this.view="queue":this.wizardStep-=1}}
            >← Back</button>
            <button type="button"
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!s||this.saving?"opacity-40 pointer-events-none":""}"
              @click=${()=>{e?this.saveWizard():(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus()))}}
            >${this.saving?"…":e?this.wizardEditId!=null?"Save changes":"Create topic":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async draftWithAi(){if(this.aiTopicId==null||this.generating)return;this.genStartedAt=Date.now(),this.setGenerating(!0);const e=await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:this.aiTopicId,pillar:this.aiPillar,proofIds:this.aiProofIds,angle:this.aiAngle.trim()||void 0})});if(!e.ok){this.genStartedAt=null,this.setGenerating(!1),O(this,e.status===409?"A draft is already being written. Give it a minute.":"Couldn't start the draft. Try again.",{tone:"error"});return}this.aiStartedAt=Date.now(),this.aiError="",this.aiAngle=""}async removeDraft(e){await He(this,{title:"Delete this post for good?",body:"It leaves the archive and its numbers leave Results. The post on LinkedIn stays.",confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/drafts/${e.id}`,{method:"DELETE"}),await this.refresh())}async act(e,t,s){await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:t,...s!==void 0?{body:s}:{}})}),await this.refresh()}startEdit(e){this.editingId=e.id,this.editBody=e.body}swapHook(e,t){const i=(this.editingId===e.id?this.editBody:e.body).split(`
`),n=i.findIndex(o=>o.trim());n>=0?i[n]=t:i.unshift(t),this.editingId=e.id,this.editBody=i.join(`
`)}parseHooks(e){if(!e.hooks)return[];try{const t=JSON.parse(e.hooks);return Array.isArray(t)?t.map(String).map(s=>s.trim()).filter(Boolean):[]}catch{return[]}}async commitEdit(e,t=!1){const s=this.editBody.trim();this.editingId=null,s&&s!==e.body&&await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({body:s})}),t?await this.act({...e,body:s},"approve"):await this.refresh()}async copyBody(e){try{await navigator.clipboard.writeText(e.body),this.copiedId=e.id,setTimeout(()=>{this.copiedId===e.id&&(this.copiedId=null)},2e3)}catch{O(this,"Couldn't copy. Open the post and copy the text by hand.",{tone:"error"})}}startRename(e){this.renamingVerticalId=e.id,this.renameValue=e.name,this.updateComplete.then(()=>this.renderRoot?.querySelector(".vertical-rename")?.focus())}async commitRename(e){const t=this.renameValue.trim();this.renamingVerticalId=null,!(!t||t===e.name)&&(await fetch(`/api/publisher/verticals/${e.id}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:t})}),await this.refresh())}openMetrics(e){this.metricsForId=e.id,this.metricsDraft={impressions:e.impressions!=null?String(e.impressions):"",reactions:e.reactions!=null?String(e.reactions):"",comments:e.comments!=null?String(e.comments):"",leads:e.leads!=null?String(e.leads):""}}async saveMetrics(e){const t={};for(const s of oi)t[s]=this.metricsDraft[s].trim()===""?null:Number(this.metricsDraft[s]);this.metricsForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async savePosting(){const e={webhookUrl:this.webhookUrl.trim(),webhookSecret:this.webhookSecret.trim()};this.linkedinToken.trim()&&(e.linkedinToken=this.linkedinToken.trim()),await fetch("/api/publisher/posting",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),this.linkedinToken="",await this.refresh()}async savePostUrl(e){const t=this.postUrlDraft.trim();this.postUrlForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({post_url:t})}),await this.refresh()}async syncMetrics(e){this.syncingId=e.id;try{const t=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"sync"})});if(!t.ok){const s=await t.json().catch(()=>({}));O(this,`Metrics sync failed: ${s.error||t.status}`,{tone:"error"})}}finally{this.syncingId=null,await this.refresh()}}fileToUploadUrl(e){return new Promise(t=>{const s=new FileReader;s.onload=async()=>{try{const i=await fetch("/api/upload",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dataUrl:s.result,name:e.name})});if(!i.ok){t(null);return}const{url:n}=await i.json();t(n)}catch{t(null)}},s.onerror=()=>t(null),s.readAsDataURL(e)})}pickImageStyle(e){const t=ri.find(i=>i.key===e),s=this.editImageDna.trim()===""||ri.some(i=>i.dna===this.editImageDna.trim());this.editImageStyle=e,t&&s&&(this.editImageDna=t.dna),this.dirtyFields.add("image_style")}async uploadRefImage(e){const t=e.target.files?.[0];if(!t)return;const s=await this.fileToUploadUrl(t);s&&(this.editImageRef=s)}async genImage(e){const t=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"gen-image",direction:this.imageDirection[e.id]??""})});if(!t.ok&&t.status!==409){O(this,"Couldn't start the image. Try again.",{tone:"error"});return}this.imaging=[...new Set([...this.imaging,e.id])];const s={...this.imageErrors};delete s[e.id],this.imageErrors=s}async setDraftImage(e,t){await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({image_url:t})}),await this.refresh()}async uploadDraftImage(e,t){if(!(!t||!t.type.startsWith("image/"))){this.uploadingImageId=e.id;try{const{uploadMedia:s}=await Ke(async()=>{const{uploadMedia:n}=await import("./notes-media-BYDjX8ZZ.js");return{uploadMedia:n}},__vite__mapDeps([2,3,4,5])),i=await s(t);await this.setDraftImage(e,i.url)}catch{O(this,"Upload failed. Try a PNG or JPG under 12MB.",{tone:"error"})}finally{this.uploadingImageId=null}}}async openLibrary(e){await Ke(()=>import("./notes-media-BYDjX8ZZ.js"),__vite__mapDeps([2,3,4,5])),this.libraryFor=e}renderImageConfig(){return r`
      <div class="pt-3 mt-1 border-t border-line/60 space-y-2">
        <p class="text-xs text-ink font-medium">Image style</p>
        <p class="text-[11px] text-muted leading-snug">Every generated image for this topic follows these, so the feed looks like one brand.</p>
        <label class="block text-xs text-muted">Style
          <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.editImageStyle}
            @change=${e=>this.pickImageStyle(e.target.value)}>
            ${ri.map(e=>r`<option value=${e.key}>${e.label}</option>`)}
          </select></label>
        <label class="block text-xs text-muted">Style DNA: palette, motif, do's and don'ts
          <textarea class="mt-1 w-full h-28 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
            .value=${this.editImageDna}
            @input=${e=>{this.dirtyFields.add("image_dna"),this.editImageDna=e.target.value}}></textarea></label>
        <div class="flex items-center gap-3">
          ${this.editImageRef?r`<img src=${this.editImageRef} alt="style reference" class="w-14 h-14 object-cover rounded-lg border border-line" />
                <button type="button" class="text-[11px] text-muted hover:text-red-600" @click=${()=>{this.editImageRef=null}}>remove reference</button>`:r`<label class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2 cursor-pointer">
                + add a reference image (generation matches its style)
                <input type="file" accept="image/*" class="hidden" @change=${e=>void this.uploadRefImage(e)} /></label>`}
        </div>
      </div>`}renderResearch(e){let t=null;try{t=e.research?JSON.parse(e.research):null}catch{}if(!t||!t.queries?.length&&!t.items?.length)return d;const s=this.researchOpenId===e.id;return r`
      <div class="px-4 pt-1">
        <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.researchOpenId=s?null:e.id}}
        >${s?"▾":"▸"} research trail (${t.items?.length??0} sources)</button>
        ${s?r`<div class="mt-1.5 mb-1 rounded-lg border border-line/60 bg-bg px-3 py-2 space-y-1.5">
              ${t.queries?.length?r`<p class="text-[11px] text-muted"><span class="font-semibold text-[10px]">searched</span> ${t.queries.join(" · ")}</p>`:d}
              ${(t.items??[]).map(i=>r`
                <p class="text-[11px] leading-snug">
                  ${i.url?r`<a class="text-ink underline decoration-line underline-offset-2 hover:decoration-ink" href=${i.url} target="_blank" rel="noopener">${i.title||i.url}</a>`:r`<span class="text-ink">${i.title||"(untitled)"}</span>`}
                  ${i.note?r`<span class="text-muted"> — ${i.note}</span>`:d}
                </p>`)}
            </div>`:d}
      </div>
    `}renderHookAlts(e){if(e.status!=="draft")return d;const t=this.parseHooks(e);return t.length?r`
      <div class="px-4 pt-1 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-muted/70 font-semibold">try hook</span>
        ${t.map(s=>r`
          <button type="button" title=${s}
            class="max-w-[16rem] truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
            @click=${()=>this.swapHook(e,s)}
          >${s}</button>`)}
      </div>`:d}renderDraftImage(e){if(we(e))return d;const t=this.imaging.includes(e.id),s=this.imageErrors[e.id],i=e.status!=="posted",n="px-2.5 py-1 text-[12px] rounded-lg border border-line text-muted hover:text-ink hover:border-ink disabled:opacity-40";return r`
      <section class="rounded-xl border border-line bg-surface px-3 py-2.5 space-y-2"
        @dragover=${o=>{i&&o.preventDefault()}}
        @drop=${o=>{i&&(o.preventDefault(),this.uploadDraftImage(e,o.dataTransfer?.files?.[0]))}}>
        <div class="flex items-center gap-2">
          <h4 class="text-[11px] font-semibold text-muted">Image</h4>
          ${t?r`<span class="inline-flex items-center gap-1.5 text-[11px] text-ink">
              <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Generating with ChatGPT, about 40s</span>`:this.uploadingImageId===e.id?r`<span class="text-[11px] text-muted">Uploading…</span>`:d}
        </div>
        ${e.image_url?r`<img src=${e.image_url} alt="post image" class="max-h-64 rounded-lg border border-line" />`:d}
        ${s?r`<p class="text-[11px] text-red-600 leading-snug">${s}</p>`:d}
        ${i?r`
          <input type="text" class="w-full px-2.5 py-1.5 text-[12px] bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
            placeholder="Direction for the image (optional), e.g. a phone ringing in an empty clinic"
            .value=${this.imageDirection[e.id]??""}
            @input=${o=>{this.imageDirection={...this.imageDirection,[e.id]:o.target.value}}} />
          <div class="flex flex-wrap items-center gap-1.5">
            <button type="button" class=${n} ?disabled=${t} @click=${()=>void this.genImage(e)}>${e.image_url?"Regenerate":"Generate"}</button>
            <button type="button" class=${n} @click=${()=>void this.openLibrary(e.id)}>From library</button>
            <label class="${n} cursor-pointer">Upload
              <input type="file" accept="image/*" class="hidden" @change=${o=>{const a=o.target;this.uploadDraftImage(e,a.files?.[0]),a.value=""}} /></label>
            ${e.image_url?r`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.setDraftImage(e,null)}>Remove</button>`:d}
          </div>`:d}
      </section>`}renderDraftCard(e){const t=this.editingId===e.id,s=t?this.editBody:e.body,i=s.length,n=s.split(/\s+/).filter(Boolean).length;return r`
      <div class="rounded-xl border border-line bg-surface">
        <div class="flex items-center gap-2 px-4 pt-3">
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${we(e)?Hn:qn[e.pillar]}">${we(e)?"🎬 Script":ws[e.pillar]}</span>
          ${e.status!=="draft"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${e.status==="posted"?"bg-accent/15 text-accent":"bg-line text-muted"}">${e.status}</span>`:d}
          <span class="ml-auto text-[10px] ${!we(e)&&i>1300?"text-amber-600":"text-muted/60"}">${we(e)?`${n} words`:`${i} chars`}</span>
        </div>
        ${e.source_note?r`<p class="px-4 pt-1 text-[11px] text-muted">why now: ${e.source_note}
              ${e.source_url?r` · <a class="underline hover:text-ink" href=${e.source_url} target="_blank" rel="noopener">source</a>`:d}</p>`:d}
        ${this.renderResearch(e)}
        ${t?r`<textarea
              class="mx-4 my-2 w-[calc(100%-2rem)] h-56 px-3 py-2 text-sm bg-bg border border-line rounded-lg resize-y focus:outline-none focus:border-ink leading-relaxed"
              .value=${this.editBody}
              @input=${o=>{this.editBody=o.target.value}}
              @keydown=${o=>{o.key==="Escape"&&(this.editingId=null)}}
            ></textarea>`:r`<pre class="px-4 py-2 text-sm text-ink whitespace-pre-wrap font-sans leading-relaxed cursor-text" @click=${()=>e.status==="draft"&&this.startEdit(e)}>${e.body}</pre>`}
        ${this.renderHookAlts(e)}
        ${this.renderDraftImage(e)}
        <div class="flex items-center gap-2 px-4 pb-3">
          ${e.status==="draft"?r`
              <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium"
                @click=${()=>t?void this.commitEdit(e,!0):void this.act(e,"approve")}
              >${!we(e)&&this.webhookConfigured?"Approve & post":"Approve"}</button>
              ${t?r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" @click=${()=>void this.commitEdit(e)}>Save edit</button>`:r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(e)}>Edit</button>`}
              <button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.act(e,"discard")}>discard</button>`:e.status==="approved"?r`
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover"
                  @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":we(e)?"Copy script":"Copy post"}</button>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10"
                  @click=${()=>void this.act(e,"mark-posted")}>${we(e)?"Video is up":"I posted it"}</button>
                <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>void this.act(e,"reopen")}>back to drafts</button>`:r`<span class="text-[11px] text-muted">${e.posted_at?new Date(e.posted_at*1e3).toLocaleDateString():""}</span>
                ${we(e)?d:this.renderMetrics(e)}
                <span class="ml-auto inline-flex items-center gap-2">
                  <button type="button" class="text-[11px] text-muted hover:text-ink" title="Mis-tap? Back to approved (doesn't touch LinkedIn)" @click=${()=>void this.act(e,"unpost")}>undo</button>
                  <button type="button" class="text-[11px] text-muted hover:text-red-600" title="Delete from the archive" @click=${()=>void this.removeDraft(e)}>delete</button>
                  <button type="button" class="px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-ink" @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":"Copy"}</button>
                </span>`}
        </div>
      </div>
    `}renderMetrics(e){if(this.metricsForId===e.id)return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
        ${oi.map(i=>r`<label class="inline-flex items-center gap-0.5 text-[10px] text-muted">${i.slice(0,4)}
          <input type="number" min="0" class="w-14 px-1 py-0.5 text-[11px] bg-bg border border-line rounded text-right focus:outline-none focus:border-ink"
            .value=${this.metricsDraft[i]}
            @input=${n=>{this.metricsDraft={...this.metricsDraft,[i]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"?this.saveMetrics(e):n.key==="Escape"&&(this.metricsForId=null)}}
          /></label>`)}
        <button type="button" class="px-1.5 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.saveMetrics(e)}>save</button>
      </span>`;const t=oi.some(i=>e[i]!=null),s=e.metrics_synced_at!=null;return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
      <button type="button" class="inline-flex items-center gap-1.5 text-[10px] text-muted hover:text-ink" title=${s?"Auto-synced from LinkedIn — click to override by hand":"Log this post's numbers from LinkedIn analytics"}
        @click=${()=>this.openMetrics(e)}>
        ${t?r`${e.impressions!=null?r`<span>👁 ${e.impressions}</span>`:d}
            ${e.reactions!=null?r`<span>👍 ${e.reactions}</span>`:d}
            ${e.comments!=null?r`<span>💬 ${e.comments}</span>`:d}
            ${e.leads!=null?r`<span class="text-accent font-medium">→ ${e.leads} lead${e.leads===1?"":"s"}</span>`:d}`:r`<span class="underline decoration-line underline-offset-2">+ log metrics</span>`}
      </button>
      ${s?r`<span class="text-[9px] text-accent/80" title="From LinkedIn's Member Post Analytics API">⟳ synced</span>`:d}
      ${this.renderMetricsSource(e)}
    </span>`}renderMetricsSource(e){return this.postUrlForId===e.id?r`<span class="inline-flex items-center gap-1">
        <input type="url" placeholder="https://linkedin.com/…/posts/…" .value=${this.postUrlDraft}
          class="w-52 px-1.5 py-0.5 text-[10px] bg-bg border border-line rounded focus:outline-none focus:border-ink"
          @input=${t=>{this.postUrlDraft=t.target.value}}
          @keydown=${t=>{t.key==="Enter"?this.savePostUrl(e):t.key==="Escape"&&(this.postUrlForId=null)}} />
        <button type="button" class="px-1 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.savePostUrl(e)}>save</button>
      </span>`:r`
      ${e.post_url?r`<a class="text-[10px] text-muted hover:text-ink underline decoration-line underline-offset-2" href=${e.post_url} target="_blank" rel="noopener">↗ post</a>`:r`<button type="button" class="text-[10px] text-muted/70 hover:text-ink" title="Paste the LinkedIn post URL to enable metric auto-sync"
            @click=${()=>{this.postUrlForId=e.id,this.postUrlDraft=e.post_url??""}}>+ link post</button>`}
      ${this.linkedinConfigured&&(e.post_url||e.post_urn)?r`<button type="button" class="text-[10px] text-accent/90 hover:text-accent ${this.syncingId===e.id?"opacity-50 pointer-events-none":""}"
            title="Pull real impressions/reactions/comments from LinkedIn now"
            @click=${()=>void this.syncMetrics(e)}>${this.syncingId===e.id?"syncing…":"⟳ sync"}</button>`:d}`}renderListRow(e){const t=this.expandedId===e.id,s=(e.body.split(`
`).find(n=>n.trim())||"").slice(0,100),i=this.activeVerticalId===null&&this.wide?this.verticals.find(n=>n.id===e.vertical_id)?.name:void 0;return r`
      <li class="border-b border-line/50 last:border-b-0">
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>{e.status==="posted"?this.expandedId=t?null:e.id:this.openEditor(e.id)}}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${we(e)?Hn:qn[e.pillar]}">${we(e)?"🎬 Script":ws[e.pillar]}</span>
          <span class="flex-1 min-w-0 text-sm ${e.status==="posted"?"text-muted":"text-ink"} truncate">${s}</span>
          ${i?r`<span class="text-[10px] text-muted shrink-0 max-w-[8rem] truncate">${i}</span>`:d}
          ${e.status==="posted"&&e.impressions!=null?r`<span class="text-[10px] text-muted shrink-0">👁 ${e.impressions}${e.leads?r` · <span class="text-accent">→${e.leads}</span>`:d}</span>`:d}
          <span class="text-[10px] ${e.status==="posting"||e.scheduled_at&&e.status==="approved"?"text-accent":"text-muted/60"} shrink-0">${e.status==="posting"?"Posting…":e.scheduled_at&&e.status==="approved"?Wd(e.scheduled_at):new Date((e.posted_at??e.created_at)*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
        </button>
        ${t?r`<div class="px-2 pb-2">${this.renderDraftCard(e)}</div>`:d}
      </li>
    `}async saveLinkedInApp(){if(!(!this.liClientId.trim()||this.liSaving)){this.liSaving=!0;try{if(!(await fetch("/api/publisher/linkedin/app",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({clientId:this.liClientId.trim(),clientSecret:this.liClientSecret.trim()||void 0})})).ok){O(this,"Couldn't save the app details. Try again.",{tone:"error"});return}this.liClientSecret="",await this.refresh()}finally{this.liSaving=!1}}}async disconnectLinkedIn(){await He(this,{title:"Disconnect LinkedIn?",body:"Scheduled posts won't go out until you connect again.",confirm:"Disconnect",tone:"warning"})&&(await fetch("/api/publisher/linkedin",{method:"DELETE"}),await this.refresh(),O(this,"LinkedIn disconnected"))}renderSettingsPage(){const e=n=>r`<span class="inline-block w-1.5 h-1.5 rounded-full ${n?"bg-accent":"bg-line"}"></span>`,t=this.linkedin,s=t?.expiresAt?Math.ceil((t.expiresAt-Date.now())/864e5):null,i="mt-1 w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto space-y-5 pb-6">
          <section class="rounded-xl border border-line p-3 space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-sm text-ink font-medium">LinkedIn</span>
              <span class="ml-auto inline-flex items-center gap-1.5 text-[12px] text-muted">${e(!!t?.connected)}
                ${t?.connected?`Connected as ${t.name??"you"}${s!==null?` · ${s} day${s===1?"":"s"} left`:""}`:t?.expiresAt?"Connection expired":"Not connected"}</span>
            </div>
            ${t?.connected?r`<div class="flex items-center gap-2">
                  <a class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" href="/api/publisher/linkedin/connect">Reconnect</a>
                  <button type="button" class="text-[12px] text-muted hover:text-red-600" @click=${()=>void this.disconnectLinkedIn()}>Disconnect</button>
                  <span class="ml-auto text-[11px] text-muted">LinkedIn logins last 60 days. Mana reminds you 5 days before.</span>
                </div>`:r`
                <ol class="text-[12px] text-muted leading-relaxed list-decimal pl-4 space-y-1">
                  <li>Open <a class="underline decoration-line underline-offset-2 hover:text-ink" href="https://www.linkedin.com/developers/apps/new" target="_blank" rel="noopener">LinkedIn Developers → Create app</a>. It asks for a LinkedIn Page; your company page works. The app stays private to you.</li>
                  <li>Under Products, add <b>Share on LinkedIn</b> and <b>Sign In with LinkedIn using OpenID Connect</b>. Both are instant.</li>
                  <li>Under Auth, add this redirect URL:
                    <code class="block mt-1 px-2 py-1 rounded bg-hover text-ink text-[11px] break-all select-all">${t?.redirectUrl??""}</code></li>
                  <li>Paste the app's Client ID and Client Secret below, save, then Connect.</li>
                </ol>
                <label class="block text-[11px] text-muted">Client ID
                  <input type="text" class=${i} placeholder=${t?.hasApp?"saved, paste to replace":""} .value=${this.liClientId}
                    @input=${n=>{this.liClientId=n.target.value}} /></label>
                <label class="block text-[11px] text-muted">Client Secret
                  <input type="password" class=${i} placeholder=${t?.hasApp?"saved, paste to replace":""} .value=${this.liClientSecret}
                    @input=${n=>{this.liClientSecret=n.target.value}} /></label>
                <div class="flex items-center justify-end gap-2">
                  <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover ${this.liClientId.trim()?"":"opacity-40 pointer-events-none"}"
                    @click=${()=>void this.saveLinkedInApp()}>${this.liSaving?"Saving…":"Save app"}</button>
                  <a class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium ${t?.hasApp?"":"opacity-40 pointer-events-none"}"
                    href="/api/publisher/linkedin/connect">Connect LinkedIn</a>
                </div>`}
          </section>

          <section class="space-y-2">
            <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2" @click=${()=>{this.showLegacy=!this.showLegacy}}>
              ${this.showLegacy?"Hide":"Show"} older settings (n8n webhook, analytics token)</button>
            ${this.showLegacy?r`
              <div class="rounded-xl border border-line p-3 space-y-2.5">
                <div class="flex items-center gap-2 text-[11px] text-muted">
                  <span class="inline-flex items-center gap-1">${e(this.webhookConfigured)} n8n webhook ${this.webhookConfigured?"set":"not set"}</span>
                  <span class="inline-flex items-center gap-1 ml-auto">${e(this.linkedinConfigured)} ${this.linkedinConfigured?"metrics token set":"no metrics token"}</span>
                </div>
                <p class="text-[11px] text-muted leading-snug">The webhook only posts when LinkedIn isn't connected above, and it can't send images.</p>
                <label class="block text-[11px] text-muted">Posting webhook (n8n → LinkedIn)
                  <input type="text" placeholder="https://…/webhook/publisher-linkedin" class=${i}
                    .value=${this.webhookUrl} @input=${n=>{this.webhookUrl=n.target.value}} /></label>
                <input type="text" placeholder="shared secret (optional)" class=${i}
                  .value=${this.webhookSecret} @input=${n=>{this.webhookSecret=n.target.value}} />
                <label class="block text-[11px] text-muted">Analytics token (scope <code class="text-[10px]">r_member_postAnalytics</code>, needs LinkedIn's Community Management approval)
                  <input type="password" placeholder=${this.linkedinConfigured?"token set, paste to replace":"LinkedIn access token"} class=${i}
                    .value=${this.linkedinToken} @input=${n=>{this.linkedinToken=n.target.value}} /></label>
                <div class="flex justify-end">
                  <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.savePosting()}>Save</button>
                </div>
              </div>`:d}
          </section>
        </div>
      </div>`}renderWeek(){const e=ys(),t=this.weekTopics(),s=(this.activeVertical?[this.activeVertical]:this.verticals).filter(i=>!i.enabled);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.renderNeedsNumbers(e)}
        ${t.map(i=>this.renderWeekTopic(i,e))}
        ${t.length?d:r`
          <div class="rounded-xl border border-line bg-surface px-4 py-5 text-center">
            <p class="text-sm text-ink">${s.length?s.length===1?`${s[0].name} is paused.`:"Every topic is paused.":"No topics yet."}</p>
            <p class="text-xs text-muted mt-1">${s.length?"This week plans posts for active topics only.":"Create a topic to plan its week."}</p>
            <div class="mt-3 flex flex-wrap justify-center gap-2">
              ${s.length?s.map(i=>r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg bg-hover text-ink hover:opacity-90" @click=${()=>void this.togglePause(i)}>Resume ${i.name}</button>`):r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg bg-hover text-ink hover:opacity-90" @click=${()=>this.openWizard()}>Create a topic</button>`}
            </div>
          </div>`}
      </div>`}renderNeedsNumbers(e){const t=this.drafts.filter(s=>s.status==="posted"&&s.impressions==null&&!we(s)&&this.inTopic(s)&&(s.posted_at??0)<=e-172800&&(s.posted_at??0)>=e-1814400).sort((s,i)=>(i.posted_at??0)-(s.posted_at??0));return t.length?r`
      <section class="rounded-xl border border-line bg-surface px-3 py-2.5">
        <h4 class="text-sm font-semibold text-ink">How did these do?</h4>
        <p class="text-[11px] text-muted">Their numbers pick the next format and the openings the writer learns from.</p>
        <ul class="mt-1">${t.map(s=>r`<li>
          <button type="button" class="w-full flex items-center gap-2 px-1.5 py-1.5 rounded-lg text-left text-[13px] hover:bg-hover"
            @click=${()=>{this.setStage("posted"),this.expandedId=s.id,this.openMetrics(s)}}>
            <span class="flex-1 min-w-0 truncate text-ink">${(s.hook_used||s.body.split(`
`).find(i=>i.trim())||"").trim()}</span>
            <span class="shrink-0 text-[12px] text-accent">Enter numbers</span>
          </button></li>`)}</ul>
      </section>`:d}renderWeekTopic(e,t){const s=Hi(e,this.drafts,t,this.takenTimes()),i=this.insights?.find(a=>a.topicId===e.id),n=s.filter(a=>a.kind==="posted").length,o=this.drafts.filter(a=>a.vertical_id===e.id&&a.status==="approved"&&!a.scheduled_at).length;return r`
      <section class="rounded-xl border border-line bg-surface px-3 py-2.5">
        <div class="flex items-baseline gap-2">
          <h4 class="flex-1 min-w-0 truncate text-sm font-semibold text-ink">${e.name}</h4>
          <span class="shrink-0 text-[12px] tabular-nums ${n>=e.posts_per_week?"text-accent font-medium":"text-muted"}">${n} of ${e.posts_per_week} posted</span>
        </div>
        <ul class="mt-1">${s.map(a=>this.renderSlot(e,a,i?.nextFormat??"proof"))}</ul>
        ${i?r`<p class="mt-1.5 text-[11px] text-muted leading-snug">${i.writeNext}</p>`:d}
        ${o?r`<button type="button" class="mt-1 text-[11px] text-accent hover:underline"
          @click=${()=>{this.setVertical(e.id),this.setStage("approved")}}>${o} ready to post, not scheduled</button>`:d}
      </section>`}renderSlot(e,t,s){const i=t.at!=null?new Date(t.at*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"}):"No day left",n="w-full flex items-center gap-2 px-1.5 py-1.5 rounded-lg text-left text-[13px]";if(t.kind==="open")return r`<li>
        <button type="button" class="${n} hover:bg-hover group" title="Draft a ${Et[s]} for ${e.name} with AI"
          @click=${()=>void this.openAi({topicId:e.id,format:s})}>
          ${le("circle","w-3.5 h-3.5 shrink-0 text-muted")}
          <span class="w-24 shrink-0 text-muted tabular-nums">${i}</span>
          <span class="flex-1 min-w-0 truncate text-muted">Open slot</span>
          <span class="shrink-0 inline-flex items-center gap-1 text-[12px] text-accent opacity-80 group-hover:opacity-100">${le("sparkles","w-3 h-3")} Draft ${Et[s]}</span>
        </button></li>`;const o=this.drafts.find(u=>u.id===t.draftId),a=o?(o.hook_used||o.body.split(`
`).find(u=>u.trim())||"").trim():"",c=t.kind==="posted";return r`<li>
      <button type="button" class="${n} hover:bg-hover"
        @click=${()=>{c?(this.setStage("posted"),this.expandedId=t.draftId):this.openEditor(t.draftId)}}>
        ${le(c?"circle-check":"clock",`w-3.5 h-3.5 shrink-0 ${c?"text-accent":"text-ink"}`)}
        <span class="w-24 shrink-0 tabular-nums ${c?"text-muted":"text-ink"}">${i}</span>
        <span class="flex-1 min-w-0 truncate ${c?"text-muted":"text-ink"}">${a}</span>
      </button></li>`}renderQueue(){if(this.loading)return r`<div class="flex-1"></div>`;if(!this.verticals.length)return r`<div class="flex-1 min-h-0 overflow-y-auto p-3">
        <div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
          <p class="text-sm text-ink font-medium">Start with a topic.</p>
          <p class="text-xs text-muted mt-1 max-w-md mx-auto">A topic is one thing you post about, with its own audience, voice, language and weekly target. Nothing posts without your approval.</p>
          <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>this.openWizard()}>Create a topic</button>
        </div>
      </div>`;const e=this.drafts.filter(i=>zn(i)===this.stage&&this.inTopic(i)).sort((i,n)=>this.stage==="scheduled"?(i.scheduled_at??0)-(n.scheduled_at??0):(n.posted_at??n.created_at)-(i.posted_at??i.created_at)).slice(0,this.stage==="posted"?100:void 0),t=this.activeVertical?` in ${this.activeVertical.name}`:"";if(this.stage==="week")return this.renderWeek();const s={draft:`No drafts${t}. Write one, or draft one with AI.`,approved:`Nothing ready to post${t}. Drafts you mark ready land here.`,scheduled:`Nothing scheduled${t}. Schedule a draft from its Post menu.`,posted:`Nothing published${t} yet.`};return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.generating&&this.stage==="draft"?r`<div class="px-4 py-3 rounded-xl border border-line bg-surface">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
              <div class="mt-2 h-1 rounded-full bg-line overflow-hidden">
                <div class="h-full bg-accent transition-all duration-1000" style="width:${Math.min(95,Math.round((Date.now()-(this.genStartedAt??Date.now()))/1e3/120*100))}%"></div>
              </div>
            </div>`:d}
        ${e.length?r`<ul class="rounded-xl border border-line bg-surface overflow-hidden">${e.map(i=>this.renderListRow(i))}</ul>`:this.generating&&this.stage==="draft"?d:r`<p class="px-1 py-6 text-center text-xs text-muted">${s[this.stage]}</p>`}
      </div>
    `}navRow(e,t){return r`
      <button type="button" class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left ${t.active?"bg-accent-soft text-ink font-medium":"text-muted hover:text-ink hover:bg-hover"}"
        @click=${t.onClick}>
        ${le(t.icon,"w-4 h-4 shrink-0")}
        <span class="flex-1 min-w-0 truncate">${e}</span>
        ${t.badge?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-soft text-accent font-medium">${t.badge}</span>`:d}
        ${t.count?r`<span class="text-xs text-muted">${t.count}</span>`:d}
      </button>`}toggleGroup(e){const t=new Set(this.collapsedGroups);t.has(e)?t.delete(e):t.add(e),this.collapsedGroups=t;try{localStorage.setItem("cockpit.publisher_nav_collapsed",JSON.stringify([...t]))}catch{}}toggleNav(){this.navHidden=!this.navHidden;try{localStorage.setItem("cockpit.publisher_nav_hidden",this.navHidden?"1":"0")}catch{}}startResize(e){const t=e.currentTarget,s=e.clientX,i=this.navWidth;t.setPointerCapture(e.pointerId);const n=a=>{this.navWidth=Math.min(Bn,Math.max(Un,i+a.clientX-s))},o=()=>{t.removeEventListener("pointermove",n),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o);try{localStorage.setItem("cockpit.publisher_nav_width",String(this.navWidth))}catch{}};t.addEventListener("pointermove",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),e.preventDefault()}groupHeader(e,t,s){const i=this.collapsedGroups.has(e);return r`
      <div class="flex items-center pl-1 pr-1 pt-3 pb-0.5">
        <button type="button" class="flex-1 flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.7rem] font-semibold text-muted hover:text-ink text-left"
          aria-expanded=${!i} @click=${()=>this.toggleGroup(e)}>
          ${le(i?"chevron-right":"chevron-down","w-3 h-3")} ${t}</button>
        ${s??d}
      </div>`}renderTopicRow(e,t){const s=this.view==="queue"&&this.activeVerticalId===e.id,i=this.postedThisWeek(e),n=this.menuForId===e.id;if(this.renamingVerticalId===e.id)return r`<input type="text"
        class="vertical-rename w-full px-3 py-1.5 rounded-lg text-sm bg-hover text-ink outline-none border border-line focus:border-ink"
        .value=${this.renameValue}
        @input=${c=>{this.renameValue=c.target.value}}
        @keydown=${c=>{c.key==="Enter"?(c.preventDefault(),this.commitRename(e)):c.key==="Escape"&&(this.renamingVerticalId=null)}}
        @blur=${()=>void this.commitRename(e)} />`;const o=(c,u,h,p=!1)=>r`
      <button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-left hover:bg-hover ${p?"text-red-500":"text-ink"}"
        @click=${m=>{m.stopPropagation(),h()}}>${le(c,"w-3.5 h-3.5")} ${u}</button>`,a=e.enabled&&i>=e.posts_per_week;return r`
      <div class="group relative ${this.topicDrag.dropClass(e.id)}" data-topic-menu=${n?"":d}
        draggable="true"
        @mousedown=${()=>this.topicDrag.arm(e.id)}
        @mouseup=${this.topicDrag.disarm}
        @dragstart=${c=>this.topicDrag.onDragStart(c,e.id)}
        @dragend=${this.topicDrag.onDragEnd}
        @dragover=${c=>this.topicDrag.onDragOver(c,e.id,t)}
        @dragleave=${this.topicDrag.onDragLeave}
        @drop=${c=>this.topicDrag.onDrop(c,e.id,t)}>
        <div class="flex items-center rounded-lg ${s?"bg-accent-soft":"hover:bg-hover"} ${this.topicDrag.isDragging(e.id)&&this.topicDrag.active?"opacity-40":""}">
          <button type="button" class="flex-1 min-w-0 flex items-center gap-2 pl-3 py-1.5 text-left cursor-default"
            title=${`${e.enabled?`${e.name}: ${i} of ${e.posts_per_week} posts this week.`:`${e.name} (paused).`} Click again to show all topics. Drag to reorder, double-click to rename.`}
            @click=${()=>this.setVertical(s?null:e.id)}
            @dblclick=${c=>{c.preventDefault(),this.startRename(e)}}>
            <span class="flex-1 min-w-0 truncate text-sm ${e.enabled?"text-ink":"text-muted"} ${s?"font-medium":""}">${e.name}</span>
            <span class="shrink-0 text-[11px] ${a?"text-accent":"text-muted"}">${e.enabled?`${i}/${e.posts_per_week}`:"paused"}</span>
          </button>
          <button type="button" aria-label="Topic options" title="Topic options"
            class="shrink-0 mx-1 w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover ${n?"opacity-100 bg-hover":"opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-coarse:opacity-100"}"
            @click=${c=>{c.stopPropagation(),this.menuForId=n?null:e.id}}>${le("ellipsis","w-3.5 h-3.5")}</button>
        </div>
        ${n?r`
          <div class="absolute right-1 top-full mt-1 z-30 w-44 py-1 rounded-xl border border-line bg-surface shadow-lg" role="menu">
            ${o("pencil","Edit topic",()=>this.openWizard(e))}
            ${o("type","Rename",()=>{this.menuForId=null,this.startRename(e)})}
            ${o(e.enabled?"pause":"play",e.enabled?"Pause":"Resume",()=>void this.togglePause(e))}
            <div class="my-1 border-t border-line/70"></div>
            ${o("trash-2","Delete topic",()=>void this.deleteTopic(e),!0)}
          </div>`:d}
      </div>`}renderNav(){const e=this.view==="queue",t=i=>!this.collapsedGroups.has(i),s=r`<button type="button" aria-label="New topic" title="New topic"
      class="w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openWizard()}>${le("plus","w-3.5 h-3.5")}</button>`;return r`
      <div class="flex items-center gap-2 px-3 pt-3 pb-1 shrink-0">
        <h2 class="flex-1 min-w-0 truncate text-sm font-semibold text-ink">Publisher</h2>
        <button type="button" class="shrink-0 flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105 ${this.verticals.length?"":"opacity-40 pointer-events-none"}"
          title="Write a new post" @click=${()=>this.openCompose()}>${le("square-pen","w-3.5 h-3.5")} New post</button>
      </div>
      <nav class="flex-1 min-h-0 overflow-y-auto px-2 pb-2">
        ${this.groupHeader("pipeline","Pipeline")}
        ${t("pipeline")?r`
          ${ni.map(i=>this.navRow(i.label,{icon:i.icon,active:e&&this.stage===i.key,count:this.stageCount(i.key),onClick:()=>this.setStage(i.key)}))}
          ${this.navRow("Results",{icon:"bar-chart",active:this.view==="results",onClick:()=>{this.view="results",this.navOpen=!1,this.loadInsights(!0)}})}`:d}
        ${this.groupHeader("topics","Topics",s)}
        ${t("topics")?r`
          ${this.verticals.map((i,n)=>this.renderTopicRow(i,n))}
          ${this.verticals.length?d:r`<button type="button" class="w-full px-3 py-1.5 rounded-lg text-sm text-left text-muted hover:text-ink hover:bg-hover"
            @click=${()=>this.openWizard()}>Create your first topic</button>`}`:d}
        ${this.groupHeader("library","Library")}
        ${t("library")?r`
          ${this.navRow("Proof bank",{icon:"star",active:this.view==="proofs",count:this.proofStats.active,badge:this.proofStats.suggested?`${this.proofStats.suggested} new`:void 0,onClick:()=>{this.view="proofs",this.navOpen=!1}})}
          ${this.navRow("Voice samples",{icon:"quote",active:this.view==="samples",count:this.sampleCount,onClick:()=>{this.view="samples",this.navOpen=!1}})}
          ${this.navRow("Images",{icon:"image",active:this.libraryFor==="browse",onClick:()=>{this.navOpen=!1,this.openLibrary("browse")}})}`:d}
      </nav>
      <div class="px-2 pb-2 shrink-0 border-t border-line/60 pt-2">
        ${this.navRow(this.linkedin?.connected?"LinkedIn connected":"Connect LinkedIn",{icon:"settings",active:this.view==="settings",badge:this.linkedin?.connected||!this.linkedin?void 0:"off",onClick:()=>{this.view="settings",this.navOpen=!1}})}
      </div>`}renderResults(){const e=this.activeVertical?[this.activeVertical]:this.verticals.filter(i=>i.enabled||this.drafts.some(n=>n.vertical_id===i.id&&n.status==="posted"));if(!e.length)return r`<p class="p-6 text-center text-xs text-muted">No topics yet.</p>`;if(!this.insights)return r`<div class="flex-1 min-h-0 p-3"><p class="p-6 text-center text-xs text-muted">Loading results…</p></div>`;const t=i=>i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)}k`:String(Math.round(i)),s=(i,n,o)=>r`
      <div class="rounded-lg border border-line/70 px-3 py-2 min-w-0">
        <div class="text-[11px] text-muted truncate">${i}</div>
        <div class="text-lg font-semibold text-ink leading-tight tabular-nums">${n}</div>
        ${o?r`<div class="text-[10px] text-muted truncate">${o}</div>`:d}
      </div>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${e.map(i=>{const n=this.insights.find(h=>h.topicId===i.id);if(!n)return d;const o=Math.round(i.posts_per_week*30/7),a=n.postedThisWeek,c=n.byFormat.filter(h=>h.avgImpressions!=null),u=Math.max(1,...c.map(h=>h.avgImpressions));return r`
            <section class="rounded-xl border border-line bg-surface p-3 space-y-3">
              <div>
                <h4 class="text-sm font-semibold text-ink">${i.name}</h4>
                <p class="text-[11px] text-muted">${i.goal?.trim()?`Goal: ${i.goal.trim()}`:"No goal set. Add one in Edit topic."}</p>
              </div>
              <div>
                <div class="flex items-baseline justify-between text-[11px] text-muted mb-1">
                  <span>This week</span><span class="text-ink tabular-nums">${a} of ${i.posts_per_week}</span>
                </div>
                <div class="h-1.5 rounded-full bg-line overflow-hidden" role="meter" aria-valuemin="0" aria-valuemax=${i.posts_per_week} aria-valuenow=${a} aria-label="Posts this week">
                  <div class="h-full rounded-full bg-accent" style="width:${Math.min(100,a/Math.max(1,i.posts_per_week)*100)}%"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 ${this.wide?"sm:grid-cols-4":""} gap-2">
                ${s("Posts, 30 days",String(n.posts),`target about ${o}`)}
                ${s("Avg impressions",n.avgImpressions==null?"–":t(n.avgImpressions),n.measured?`${n.measured} of ${n.posts} measured`:"none measured yet")}
                ${s("Comments",String(n.comments))}
                ${s("Leads",String(n.leads),"logged by hand")}
              </div>
              ${c.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1.5">Avg impressions by format</p>
                  <div class="space-y-1.5">${c.map(h=>r`
                    <div class="flex items-center gap-2 text-[12px]" title="${ws[h.format]}: ${Math.round(h.avgImpressions)} average impressions over ${h.measured} measured post${h.measured===1?"":"s"}">
                      <span class="w-20 shrink-0 text-ink">${ws[h.format]}</span>
                      <span class="flex-1 h-2"><span class="block h-full rounded bg-accent" style="width:${Math.max(2,h.avgImpressions/u*100)}%"></span></span>
                      <span class="w-20 shrink-0 text-right text-muted tabular-nums">${t(h.avgImpressions)} · ${h.measured}</span>
                    </div>`)}</div>
                </div>`:d}
              ${n.top.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1">Best posts</p>
                  <ul class="space-y-1">${n.top.map(h=>r`
                    <li class="flex items-center gap-2 text-[12px]">
                      <span class="flex-1 min-w-0 truncate text-ink">${h.hook}</span>
                      <span class="shrink-0 text-muted tabular-nums">${h.impressions!=null?`${t(h.impressions)} views`:""}${h.comments?` · ${h.comments} comments`:""}${h.leads?` · ${h.leads} lead${h.leads===1?"":"s"}`:""}</span>
                    </li>`)}</ul>
                </div>`:d}
              <p class="text-[11px] text-muted">${n.writeNext}</p>
              ${n.unmeasured?r`<p class="text-[11px] text-muted">${n.unmeasured} post${n.unmeasured===1?" has":"s have"} no numbers yet.
                <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>this.setStage("posted")}>Log them in Published</button></p>`:d}
              ${n.posts?d:r`<p class="text-[11px] text-muted">Nothing published in the last 30 days.</p>`}
            </section>`})}
      </div>`}async loadInsights(e=!1){const t=this.drafts.filter(s=>s.status==="posted").map(s=>`${s.id}:${s.pillar}:${s.posted_at}:${s.impressions}:${s.reactions}:${s.comments}:${s.leads}`).join(",");if(!(!e&&t===this.insightsFor&&this.insights)){this.insightsFor=t;try{const s=await fetch("/api/publisher/insights");s.ok&&(this.insights=(await s.json()).insights)}catch{}}}renderEditor(){const e=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null;if(!this.composing&&!e&&this.editorId!==this.createdId)return r`<p class="p-6 text-center text-xs text-muted">That post is gone.</p>`;const t=this.verticals.find(n=>n.id===(e?.vertical_id??this.activeVerticalId))??this.verticals[0],s=this.drafts.filter(n=>n.id!==e?.id),i=t?Ko(t,s,ys(),this.takenTimes(e?.id)):null;return r`<publisher-editor class="flex flex-col flex-1 min-h-0"
      .draft=${e} .topics=${this.verticals} .defaultTopicId=${this.activeVerticalId} .defaultScheduleAt=${i}
      .linkedinConnected=${!!this.linkedin?.connected} .webhookConfigured=${this.webhookConfigured} .twoCol=${this.twoCol}
      .renderImage=${n=>this.renderDraftImage(n)}
      @changed=${()=>void this.refresh()}
      @opened=${n=>{this.composing=!1,this.editorId=n.detail.id,this.createdId=n.detail.id}}
      @moved=${n=>this.follow(n.detail.stage)}
      @close=${()=>void this.closeEditor()}
      @force-close=${()=>this.leaveEditor()}></publisher-editor>`}renderAiPanel(){const e=this.aiTopicId,t=this.aiProofs.filter(n=>n.vertical_id==null||n.vertical_id===e),s=this.aiStartedAt!==null,i=n=>`px-2.5 py-1 text-[12px] rounded-full border ${n?"border-ink text-ink font-medium":"border-line text-muted hover:text-ink"}`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
        <div class="max-w-xl mx-auto space-y-4">
          ${s||this.generating?r`<div class="px-4 py-3 rounded-xl border border-line bg-surface">
                <div class="flex items-center gap-2 text-xs text-ink">
                  <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                  Writing from your proof, then checking every claim. It opens here when it's done (about a minute).
                </div>
              </div>`:this.aiError?r`<div class="px-4 py-3 rounded-xl border border-line bg-surface text-xs leading-snug">
                  <p class="text-ink font-medium">The draft didn't come back</p>
                  <p class="mt-1 text-muted break-words">${this.aiError}</p>
                </div>`:d}
          <label class="block text-xs text-muted">Topic
            <select class="mt-1 w-full px-2.5 py-1.5 text-sm bg-surface border border-line rounded-lg text-ink"
              @change=${n=>{this.aiTopicId=Number(n.target.value)||null,this.aiProofIds=[]}}>
              ${this.verticals.map(n=>r`<option value=${n.id} ?selected=${n.id===e}>${n.name}</option>`)}
            </select></label>
          <div>
            <p class="text-xs text-muted mb-1.5">Format</p>
            <div class="flex flex-wrap gap-1.5">
              ${Object.keys(Et).map(n=>r`<button type="button" class=${i(this.aiPillar===n)}
                @click=${()=>{this.aiPillar=n}}>${Et[n]}</button>`)}
            </div>
          </div>
          <div>
            <p class="text-xs text-muted mb-1.5">Proof to build on <span class="text-muted/70">(pick up to 3, or none and Claude picks)</span></p>
            ${t.length?r`<div class="max-h-64 overflow-y-auto rounded-xl border border-line bg-surface">
                  ${t.map(n=>{const o=this.aiProofIds.includes(n.id);return r`<label class="flex items-start gap-2 px-3 py-2 text-[13px] hover:bg-hover cursor-pointer border-b border-line/50 last:border-b-0">
                      <input type="checkbox" class="mt-0.5" .checked=${o} ?disabled=${!o&&this.aiProofIds.length>=3}
                        @change=${()=>{this.aiProofIds=o?this.aiProofIds.filter(a=>a!==n.id):[...this.aiProofIds,n.id]}} />
                      <span class="text-ink leading-snug">${n.title}</span></label>`})}
                </div>`:r`<div class="rounded-xl border border-line bg-surface px-3 py-3 text-[12px] text-muted">
                  No kept proof for this topic, so the draft will have [NEEDS PROOF] gaps where facts belong.
                  <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>{this.view="proofs"}}>Add proof first</button>
                </div>`}
          </div>
          <label class="block text-xs text-muted">What's it about? <span class="text-muted/70">(optional, one line)</span>
            <textarea class="mt-1 w-full h-20 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
              placeholder="e.g. why latency matters more than the voice"
              .value=${this.aiAngle} @input=${n=>{this.aiAngle=n.target.value}}></textarea></label>
          <div class="flex justify-end">
            <button type="button" class="px-4 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium ${e==null||this.generating||s?"opacity-40 pointer-events-none":""}"
              @click=${()=>void this.draftWithAi()}>Write it</button>
          </div>
        </div>
      </div>`}renderMainHeader(){const e=this.activeVertical,t=this.view==="settings"?"LinkedIn connection":this.view==="results"?"Results":this.view==="proofs"?"Proof bank":this.view==="samples"?"Voice samples":this.view==="wizard"?this.wizardEditId!=null?`Edit ${this.wizard.name||"topic"}`:"New topic":this.view==="editor"?this.composing?"New post":"Post":this.view==="ai"?"Draft with AI":ni.find(o=>o.key===this.stage).label,i=this.view==="queue"||this.view==="proofs"||this.view==="samples"||this.view==="results"?e?e.name:this.verticals.length>1?"All topics":"":"",n=this.view==="queue"&&e?.goal?.trim()?e.goal.trim():"";return r`
      <header class="flex items-center gap-2 px-3 pt-3 pb-2 shrink-0">
        ${this.view==="editor"||this.view==="ai"?r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
              @click=${()=>void this.closeEditor()}>${le("chevron-left")} ${ni.find(o=>o.key===this.stage).label}</button>`:this.wide?r`<button type="button" class="w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
                aria-label=${this.navHidden?"Show sidebar":"Hide sidebar"} title=${this.navHidden?"Show sidebar":"Hide sidebar"}
                @click=${()=>this.toggleNav()}>${le("layout-sidebar")}</button>`:r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
                @click=${()=>{this.navOpen=!0}}>${le("chevron-left")} Publisher</button>`}
        <div class="flex-1 min-w-0 ${this.wide?"pl-1":""}">
          <h3 class="text-sm font-semibold text-ink truncate">${t}${i?r`<span class="font-normal text-muted"> · ${i}</span>`:d}</h3>
          ${n?r`<p class="text-[11px] text-muted truncate" title=${n}>Goal: ${n}</p>`:d}
        </div>
        ${this.view==="queue"&&(this.stage==="draft"||this.stage==="week")&&this.verticals.length?r`
            <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[13px] font-medium text-muted hover:text-ink hover:bg-hover ${this.generating?"opacity-40 pointer-events-none":""}"
              title="Draft a post from your proof and voice samples"
              aria-label="Draft with AI"
              @click=${()=>void this.openAi()}>${le("sparkles","w-3.5 h-3.5")}${this.wide?" Draft with AI":d}</button>
            <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[13px] font-medium text-muted hover:text-ink hover:bg-hover"
              title="Write a post yourself"
              aria-label="Write a post"
              @click=${()=>this.openCompose()}>${le("pencil","w-3.5 h-3.5")}${this.wide?" Write":d}</button>`:d}
      </header>`}render(){const e=this.wide?!this.navHidden:this.navOpen,t=this.wide||!this.navOpen;return r`
      <div class="relative flex h-full min-h-0">
        <aside class="${e?"flex":"hidden"} relative flex-col min-h-0 ${this.wide?"shrink-0 border-r border-line":"flex-1 min-w-0"}"
          style=${this.wide?`width:${this.navWidth}px`:""}>
          ${this.renderNav()}
          ${this.wide?r`<div class="absolute top-0 bottom-0 -right-1 w-2 z-10 cursor-col-resize hover:bg-accent/30 transition-colors" role="separator" aria-orientation="vertical"
            title="Drag to resize, double-click to reset"
            @pointerdown=${s=>this.startResize(s)}
            @dblclick=${()=>{this.navWidth=vs;try{localStorage.setItem("cockpit.publisher_nav_width",String(vs))}catch{}}}></div>`:d}
        </aside>
        <section class="${t?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderMainHeader()}
          ${this.view==="wizard"?this.wizardEditId!=null?this.renderEditForm():this.renderWizard():this.view==="settings"?this.renderSettingsPage():this.view==="results"?this.renderResults():this.view==="editor"?this.renderEditor():this.view==="ai"?this.renderAiPanel():this.view==="proofs"?r`<publisher-proofs class="flex flex-col flex-1 min-h-0" .topics=${this.verticals} .topicId=${this.activeVerticalId}
                      @changed=${()=>void this.refresh()}></publisher-proofs>`:this.view==="samples"?r`<publisher-samples class="flex flex-col flex-1 min-h-0" .topics=${this.verticals} .topicId=${this.activeVerticalId}
                        @changed=${()=>void this.refresh()}></publisher-samples>`:this.renderQueue()}
        </section>
        ${this.libraryFor!==null?r`
          <notes-media-library .tab=${this.libraryFor==="browse"?"generated":"all"} .browse=${this.libraryFor==="browse"}
            @close=${()=>{this.libraryFor=null}}
            @insert=${s=>{const i=this.libraryFor;this.libraryFor=null;const n=typeof i=="number"?this.drafts.find(o=>o.id===i):void 0;n&&this.setDraftImage(n,s.detail.url)}}></notes-media-library>`:d}
        ${this.renderToast()}
        ${this.renderDialog()}
      </div>
    `}};w([l()],y.prototype,"verticals",2);w([l()],y.prototype,"drafts",2);w([l()],y.prototype,"webhookConfigured",2);w([l()],y.prototype,"linkedinConfigured",2);w([l()],y.prototype,"loading",2);w([l()],y.prototype,"activeVerticalId",2);w([l()],y.prototype,"stage",2);w([l()],y.prototype,"view",2);w([l()],y.prototype,"proofStats",2);w([l()],y.prototype,"sampleCount",2);w([l()],y.prototype,"wide",2);w([l()],y.prototype,"navOpen",2);w([l()],y.prototype,"menuForId",2);w([l()],y.prototype,"navWidth",2);w([l()],y.prototype,"navHidden",2);w([l()],y.prototype,"collapsedGroups",2);w([l()],y.prototype,"wizardEditId",2);w([l()],y.prototype,"wizardStep",2);w([l()],y.prototype,"wizard",2);w([l()],y.prototype,"wizardLang",2);w([l()],y.prototype,"wizardFormality",2);w([l()],y.prototype,"editPostsPerWeek",2);w([l()],y.prototype,"editImageStyle",2);w([l()],y.prototype,"editImageDna",2);w([l()],y.prototype,"editImageRef",2);w([l()],y.prototype,"uploadingImageId",2);w([l()],y.prototype,"imaging",2);w([l()],y.prototype,"imageErrors",2);w([l()],y.prototype,"imageDirection",2);w([l()],y.prototype,"libraryFor",2);w([l()],y.prototype,"saving",2);w([l()],y.prototype,"editingId",2);w([l()],y.prototype,"editBody",2);w([l()],y.prototype,"composing",2);w([l()],y.prototype,"editorId",2);w([l()],y.prototype,"twoCol",2);w([l()],y.prototype,"aiTopicId",2);w([l()],y.prototype,"aiPillar",2);w([l()],y.prototype,"aiProofIds",2);w([l()],y.prototype,"aiAngle",2);w([l()],y.prototype,"aiProofs",2);w([l()],y.prototype,"aiError",2);w([l()],y.prototype,"generating",2);w([l()],y.prototype,"genStartedAt",2);w([l()],y.prototype,"webhookUrl",2);w([l()],y.prototype,"webhookSecret",2);w([l()],y.prototype,"linkedinToken",2);w([l()],y.prototype,"linkedin",2);w([l()],y.prototype,"liClientId",2);w([l()],y.prototype,"liClientSecret",2);w([l()],y.prototype,"liSaving",2);w([l()],y.prototype,"showLegacy",2);w([l()],y.prototype,"postUrlForId",2);w([l()],y.prototype,"postUrlDraft",2);w([l()],y.prototype,"syncingId",2);w([l()],y.prototype,"copiedId",2);w([l()],y.prototype,"researchOpenId",2);w([l()],y.prototype,"expandedId",2);w([l()],y.prototype,"renamingVerticalId",2);w([l()],y.prototype,"renameValue",2);w([l()],y.prototype,"toastMsg",2);w([l()],y.prototype,"ask",2);w([l()],y.prototype,"insights",2);w([l()],y.prototype,"metricsForId",2);w([l()],y.prototype,"metricsDraft",2);y=w([k("publisher-section")],y);const Bo="slmai.cockpit.ideasCache";let _t=null;function Vd(){if(_t)return _t;try{const e=localStorage.getItem(Bo);e&&(_t=JSON.parse(e))}catch{}return _t}function zo(e){if(_t!==e){_t=e;try{localStorage.setItem(Bo,JSON.stringify(e))}catch{}}}var Qd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,oe=(e,t,s,i)=>{for(var n=i>1?void 0:i?Yd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Qd(t,s,n),n};const Gn="slmai.cockpit.ideasCollapsed",ai="slmai.cockpit.ideasSection.title",li="Ideas",Jd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let X=class extends C{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=li,this.ideas=[],this.highlightIds=new Set,this.flash=new Ds(this,"idea"),this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.dragOverCommit=!1,this.draggingId=null,this.onIdeasChanged=()=>{this.load()},this.onOpsEvent=e=>{const t=e.detail;!t||t.action!=="refresh"||(this.flash.take(t),t.added?.kind==="idea"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id)),this.load())},this.lastEmittedCount=-1,this.onCommitDragOver=e=>{e.dataTransfer?.types.includes("text/x-commit-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverCommit=!0)},this.onCommitDragLeave=()=>{this.dragOverCommit=!1},this.onCommitDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id");if(!t)return;e.preventDefault(),this.dragOverCommit=!1;const s=(e.dataTransfer?.getData("text/plain")||"").trim();s&&await _o(Number(t),s)}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Gn)==="1",this.titleValue=localStorage.getItem(ai)??li,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.ideas.title"];t&&(this.titleValue=t,localStorage.setItem(ai,t))}).catch(()=>{}),this.ideas=Vd()??[],this.load(),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("ops-event",this.onOpsEvent)}clearHighlight(e){if(!this.highlightIds.has(e))return;const t=new Set(this.highlightIds);t.delete(e),this.highlightIds=t}updated(){zo(this.ideas);const e=this.ideas.filter(s=>!s.hidden).length;if(e!==this.lastEmittedCount&&(this.lastEmittedCount=e,document.dispatchEvent(new CustomEvent("mana-ideas-count",{detail:{count:e}}))),this.editingId==null)return;const t=this.querySelector("textarea.idea-edit");t&&this.autoGrow(t)}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}async load(){try{const t=await(await fetch("/api/ideas")).json();this.ideas=t.ideas}catch{}}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||li;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(ai,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(Gn,this.collapsed?"1":"0")}async toggleHidden(e,t){this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:t}:s);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({hidden:t})})}catch{this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:!t}:s)}}async deleteIdea(e){const t=this.ideas;this.ideas=this.ideas.filter(s=>s.id!==e);try{await fetch(`/api/ideas/${e}`,{method:"DELETE"})}catch{this.ideas=t}}beginAdd(e){e.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(e=!1){if(!this.adding)return;const t=this.newText.trim();if(this.newText="",!t){this.adding=!1;return}e||(this.adding=!1);try{const i=await(await fetch("/api/ideas",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})).json();this.ideas=[...this.ideas,{id:i.id,text:t,hidden:!1}]}catch{}}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!0)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newText="")}startEdit(e){this.adding=!1,this.editingId=e.id,this.editText=e.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const e=this.editingId;if(e===null)return;const t=this.editText.trim();if(this.cancelEdit(),!t)return;const s=this.ideas;this.ideas=this.ideas.map(i=>i.id===e?{...i,text:t}:i);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})}catch{this.ideas=s}}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit()):e.key==="Escape"&&(e.preventDefault(),this.cancelEdit())}onDragStart(e,t){if(this.draggingId=t,e.dataTransfer){e.dataTransfer.setData("text/x-idea-id",String(t));const s=this.ideas.find(i=>i.id===t);s&&e.dataTransfer.setData("text/plain",s.text),e.dataTransfer.effectAllowed="move"}}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(e,t){if(!e.dataTransfer?.types.includes("text/x-idea-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const s=e.currentTarget.getBoundingClientRect();this.dragOverId=t,this.dragOverPos=e.clientY<s.top+s.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(e,t){const s=e.dataTransfer?.getData("text/x-idea-id"),i=s?Number(s):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(i)||i===t)return;e.preventDefault();const a=(this.showHidden?this.ideas:this.ideas.filter(x=>!x.hidden)).findIndex(x=>x.id===t);if(a<0)return;const c=n==="after"?a+1:a,u=this.ideas.slice(),h=u.findIndex(x=>x.id===i),p=u.findIndex(x=>x.id===t);if(h<0||p<0)return;const[m]=u.splice(h,1);if(!m)return;const b=n==="after"?p+(h<p?0:1):p-(h<p?1:0);u.splice(Math.max(0,b),0,m),this.ideas=u;try{await fetch(`/api/ideas/${i}/reorder`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:c})})}catch{this.load()}}renderHiddenToggle(e){return e.length===0?d:r`<button
      type="button"
      class="text-muted hover:text-ink"
      style="width:16px;height:16px;display:inline-flex;opacity:${this.showHidden?"0.9":"0.5"};"
      title=${this.showHidden?`Hide ${e.length} hidden idea${e.length===1?"":"s"}`:`Show ${e.length} hidden idea${e.length===1?"":"s"}`}
      @click=${t=>{t.stopPropagation(),this.showHidden=!this.showHidden}}
    >
      ${K(To)}
    </button>`}render(){const e=this.ideas.filter(n=>n.hidden),t=this.ideas.filter(n=>!n.hidden),s=this.showHidden?[...t,...e]:t,i=this.tabbed||!this.collapsed;return r`
      <section
        class="group/section-header flex flex-col gap-1"
        style=${this.dragOverCommit?"box-shadow: inset 0 0 0 1.5px var(--accent); border-radius:12px;":""}
        @dragover=${this.onCommitDragOver}
        @dragleave=${this.onCommitDragLeave}
        @drop=${this.onCommitDrop}
      >
        ${this.tabbed?i&&e.length>0?r`<div class="flex justify-end pt-2 -mb-1">
                  ${this.renderHiddenToggle(e)}
                </div>`:d:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${K(this.collapsed?us:hs)}</span
              >
              ${this.editingTitle?r`<input
                    class="text-lg font-semibold text-ink leading-none bg-transparent border-b border-line outline-none"
                    style="letter-spacing:-0.01em;min-width:4ch;"
                    .value=${this.titleValue}
                    autofocus
                    @click=${n=>n.stopPropagation()}
                    @keydown=${this.onTitleKey}
                    @blur=${n=>this.commitTitleEdit(n.target.value)}
                  />`:r`<h2
                    class="text-lg font-semibold text-ink leading-none cursor-pointer"
                    style="letter-spacing:-0.01em;"
                    title="Double-click to rename"
                    @dblclick=${this.startEditTitle}
                  >${this.titleValue}</h2>`}
              ${this.ideas.length>0?r`<span
                    class="text-[11px] text-muted px-2 py-0.5 rounded-full leading-none"
                    style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
                    >${this.ideas.length}</span
                  >`:d}
              <span class="flex-1"></span>
              ${this.collapsed?d:this.renderHiddenToggle(e)}
            </header>`}

        ${i?r`
              <ul class="flex flex-col">
                ${s.map(n=>this.editingId===n.id?r`
                        <li class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 border-t-2 border-b-2 border-transparent">
                          <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                          <span
                            class="shrink-0 inline-flex rounded-full ${n.hidden?"bg-accent border-accent":"border-line"}"
                            style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
                          ></span>
                          <textarea
                            class="idea-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none border-b border-line p-0 resize-none overflow-hidden leading-snug"
                            rows="1"
                            autofocus
                            .value=${this.editText}
                            @input=${o=>{this.editText=o.target.value,this.autoGrow(o.target)}}
                            @keydown=${this.onEditKey}
                            @paste=${Es}
                            @blur=${()=>void this.commitEdit()}
                          ></textarea>
                        </li>
                      `:r`
                        <li
                          class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover group/idea ${this.flash.cls(n.id)}
                            ${this.dragOverId===n.id&&this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverId===n.id&&this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
                          draggable=${this.draggingId===n.id?"true":"false"}
                          @dragstart=${o=>this.onDragStart(o,n.id)}
                          @dragend=${()=>this.onDragEnd()}
                          @dragover=${o=>this.onDragOver(o,n.id)}
                          @dragleave=${()=>this.onDragLeave()}
                          @drop=${o=>this.onDrop(o,n.id)}
                        >
                          <span
                            class="idea-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/idea:opacity-60 hover:!opacity-100 select-none leading-none"
                            title="Drag to reorder"
                            style="font-size:14px;letter-spacing:-1px;"
                            @mousedown=${()=>{this.draggingId=n.id}}
                            @mouseup=${()=>{this.draggingId===n.id&&(this.draggingId=null)}}
                          >⠿</span>
                          <button
                            type="button"
                            class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${n.hidden?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
                            style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
                            title=${n.hidden?"Show idea":"Hide idea"}
                            @click=${o=>{o.stopPropagation(),this.toggleHidden(n.id,!n.hidden)}}
                          ></button>
                          <span
                            class="flex-1 text-sm cursor-text pb-1 ${n.hidden?"text-muted line-through":this.highlightIds.has(n.id)?"font-medium":"text-ink"}"
                            style="border-bottom:0.5px solid var(--color-line);${!n.hidden&&this.highlightIds.has(n.id)?"color:var(--nsc-green);":""}"
                            @click=${()=>{this.clearHighlight(n.id),this.startEdit(n)}}
                          >${Do(n.text)}</span>
                          <button
                            type="button"
                            class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                            style="width:14px;height:14px;display:inline-flex;"
                            title="Delete idea"
                            @click=${o=>{o.stopPropagation(),this.deleteIdea(n.id)}}
                          >
                            ${K(Jd)}
                          </button>
                        </li>
                      `)}
              </ul>
              ${this.adding?r`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full border-line" style="width:16px;height:16px;border-width:1.5px;border-style:solid;"></span>
                      <input
                        class="flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New idea..."
                        autofocus
                        .value=${this.newText}
                        @input=${n=>this.newText=n.target.value}
                        @keydown=${this.onAddKey}
                        @paste=${Es}
                        @blur=${()=>void this.commitAdd()}
                      />
                    </div>
                  `:r`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>{this.cancelEdit(),this.adding=!0,this.newText=""}}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New idea...</span>
                    </div>
                  `}
            `:d}
      </section>
    `}};oe([g({type:Boolean})],X.prototype,"tabbed",2);oe([l()],X.prototype,"collapsed",2);oe([l()],X.prototype,"showHidden",2);oe([l()],X.prototype,"editingTitle",2);oe([l()],X.prototype,"titleValue",2);oe([l()],X.prototype,"ideas",2);oe([l()],X.prototype,"highlightIds",2);oe([l()],X.prototype,"adding",2);oe([l()],X.prototype,"newText",2);oe([l()],X.prototype,"editingId",2);oe([l()],X.prototype,"editText",2);oe([l()],X.prototype,"dragOverId",2);oe([l()],X.prototype,"dragOverPos",2);oe([l()],X.prototype,"dragOverCommit",2);oe([l()],X.prototype,"draggingId",2);X=oe([k("ideas-section")],X);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Xd}=Ho,Wn=e=>e,Vn=()=>document.createComment(""),Jt=(e,t,s)=>{const i=e._$AA.parentNode,n=t===void 0?e._$AB:t._$AA;if(s===void 0){const o=i.insertBefore(Vn(),n),a=i.insertBefore(Vn(),n);s=new Xd(o,a,e,e.options)}else{const o=s._$AB.nextSibling,a=s._$AM,c=a!==e;if(c){let u;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==a._$AU&&s._$AP(u)}if(o!==n||c){let u=s._$AA;for(;u!==o;){const h=Wn(u).nextSibling;Wn(i).insertBefore(u,n),u=h}}}return s},ot=(e,t,s=e)=>(e._$AI(t,s),e),Zd={},eh=(e,t=Zd)=>e._$AH=t,th=e=>e._$AH,ci=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=(e,t,s)=>{const i=new Map;for(let n=t;n<=s;n++)i.set(e[n],n);return i},sh=so(class extends io{constructor(e){if(super(e),e.type!==no.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const n=[],o=[];let a=0;for(const c of e)n[a]=i?i(c,a):a,o[a]=s(c,a),a++;return{values:o,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){const n=th(e),{values:o,keys:a}=this.dt(t,s,i);if(!Array.isArray(n))return this.ut=a,o;const c=this.ut??=[],u=[];let h,p,m=0,b=n.length-1,x=0,v=o.length-1;for(;m<=b&&x<=v;)if(n[m]===null)m++;else if(n[b]===null)b--;else if(c[m]===a[x])u[x]=ot(n[m],o[x]),m++,x++;else if(c[b]===a[v])u[v]=ot(n[b],o[v]),b--,v--;else if(c[m]===a[v])u[v]=ot(n[m],o[v]),Jt(e,u[v+1],n[m]),m++,v--;else if(c[b]===a[x])u[x]=ot(n[b],o[x]),Jt(e,n[m],n[b]),b--,x++;else if(h===void 0&&(h=Qn(a,x,v),p=Qn(c,m,b)),h.has(c[m]))if(h.has(c[b])){const M=p.get(a[x]),Je=M!==void 0?n[M]:null;if(Je===null){const S=Jt(e,n[m]);ot(S,o[x]),u[x]=S}else u[x]=ot(Je,o[x]),Jt(e,n[m],Je),n[M]=null;x++}else ci(n[b]),b--;else ci(n[m]),m++;for(;x<=v;){const M=Jt(e,u[v+1]);ot(M,o[x]),u[x++]=M}for(;m<=b;){const M=n[m++];M!==null&&ci(M)}return this.ut=a,eh(e,u),oo}}),ih=3e3;let Yn=null;function Jn(){const e=Yn;return Yn=null,e&&Date.now()-e.at<ih?e:null}let Xn=null,di=null,hi=null;function nh(){Xn?.close(),Xn=null,di&&clearTimeout(di),di=null,hi&&clearTimeout(hi),hi=null}var oh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,re=(e,t,s,i)=>{for(var n=i>1?void 0:i?rh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&oh(t,s,n),n};const et=["week","ideas","goals"];function Zn(e){try{const t=JSON.parse(e||"[]");if(!Array.isArray(t))return[...et];const s=[...new Set(t.filter(i=>et.includes(i)))];return[...s,...et.filter(i=>!s.includes(i))]}catch{return[...et]}}const ks="slmai.cockpit.plannerTab",ah=6e3,qe={week:{ls:"slmai.cockpit.weekSection.title",setting:"ui.section.week.title",def:"Shipping this week"},ideas:{ls:"slmai.cockpit.ideasSection.title",setting:"ui.section.ideas.title",def:"Ideas"},goals:{ls:"slmai.cockpit.goalsSection.title",setting:"ui.section.goals.title",def:"Goals"}};let Z=class extends C{constructor(){super(...arguments),this.order=[...et],this.reorderKey=null,this.reorderOver=null,this.reorderAfter=!1,this.orderError="",this.orderSetting="",this.savingOrder=!1,this.orderRevision=0,this.ignoreTabClick=!1,this.tabPress=null,this.active="week",this.titles={week:qe.week.def,ideas:qe.ideas.def,goals:qe.goals.def},this.ideasCount=0,this.goalsCount=0,this.weekCount=0,this.editing=null,this.dragKind=null,this.dragOverTab=null,this.note="",this.noteKind="user",this.noteTimer=null,this.onPlannerNote=e=>{const t=e.detail;t?.text&&this.showNote(t.text,t.kind)},this.onAgentFollow=()=>{const e=Jn();e&&this.follow(e)},this.refreshOrder=async()=>{if(!(!this.orderSetting||this.savingOrder||this.tabPress||this.editing||document.visibilityState==="hidden"))try{const e=this.orderRevision,t=await $.settings.list();if(this.savingOrder||this.tabPress||e!==this.orderRevision)return;this.order=Zn(t[this.orderSetting]),localStorage.setItem(this.orderSetting,JSON.stringify(this.order))}catch{}},this.onTabPointerMove=e=>{const t=this.tabPress;if(!(!t||t.pointerId!==e.pointerId)){if(!this.reorderKey){const s=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y);if(i>6&&i>s){this.cancelTabReorder();return}if(s<=6)return;this.reorderKey=t.key}e.preventDefault(),this.reorderOver=null;for(const s of this.querySelectorAll("[data-planner-tab]")){const i=s.getBoundingClientRect();if(!(e.clientX<i.left||e.clientX>i.right||e.clientY<i.top-16||e.clientY>i.bottom+16)){this.reorderOver=s.dataset.plannerTab,this.reorderAfter=e.clientX>i.left+i.width/2;break}}}},this.onTabPointerUp=e=>{if(this.tabPress?.pointerId!==e.pointerId)return;const t=this.reorderKey,s=this.reorderOver,i=this.reorderAfter;t&&(this.ignoreTabClick=!0,setTimeout(()=>{this.ignoreTabClick=!1},0)),this.cancelTabReorder(),t&&s&&this.moveTab(t,s,i)},this.cancelTabReorder=()=>{this.tabPress=null,this.reorderKey=this.reorderOver=null,window.removeEventListener("pointermove",this.onTabPointerMove),window.removeEventListener("pointerup",this.onTabPointerUp),window.removeEventListener("pointercancel",this.cancelTabReorder)},this.cancelReorderKey=e=>{e.key==="Escape"&&this.cancelTabReorder()},this.onIdeasChanged=()=>{this.loadIdeasCount(),this.loadCounts()},this.onCountsStale=()=>void this.loadCounts(),this.onOpsEvent=e=>{e.detail?.action==="refresh"&&(this.loadIdeasCount(),this.loadCounts())},this.onIdeasCount=e=>{const t=e.detail?.count;typeof t=="number"&&(this.ideasCount=t)},this.onDocDragStart=e=>{const t=e.dataTransfer?.types;t&&(t.includes("text/x-idea-id")?this.dragKind="idea":t.includes("text/x-commit-id")?this.dragKind="commit":this.dragKind=null)},this.onDocDragEnd=()=>{this.dragKind=null,this.dragOverTab=null}}connectedCallback(){super.connectedCallback();const e=localStorage.getItem(ks);e&&et.includes(e)&&(this.active=e);const t={...this.titles};for(const i of et){const n=localStorage.getItem(qe[i].ls);n&&(t[i]=n)}this.titles=t,fetch("/api/settings").then(i=>i.json()).then(i=>{const n={...this.titles};for(const o of et){const a=i[qe[o].setting];a&&(n[o]=a,localStorage.setItem(qe[o].ls,a))}this.titles=n}).catch(()=>{}),this.loadOrder(),window.addEventListener("focus",this.refreshOrder),document.addEventListener("visibilitychange",this.refreshOrder),document.addEventListener("keydown",this.cancelReorderKey),this.loadIdeasCount(),this.loadCounts(),this.unsubCounts=f.subscribe((i,n)=>{i.goals!==n.goals&&(this.goalsCount=i.goals.filter(o=>o.status==="active").length),i.commitments!==n.commitments&&(this.weekCount=i.commitments.filter(o=>!o.done).length)}),window.addEventListener("focus",this.onCountsStale),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("mana-ideas-count",this.onIdeasCount),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("dragstart",this.onDocDragStart),document.addEventListener("dragend",this.onDocDragEnd),document.addEventListener("mana-agent-follow",this.onAgentFollow);const s=Jn();s&&this.follow(s),document.addEventListener("mana-planner-note",this.onPlannerNote)}disconnectedCallback(){super.disconnectedCallback(),this.cancelTabReorder(),window.removeEventListener("focus",this.refreshOrder),document.removeEventListener("visibilitychange",this.refreshOrder),document.removeEventListener("keydown",this.cancelReorderKey),this.unsubCounts?.(),window.removeEventListener("focus",this.onCountsStale),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("mana-ideas-count",this.onIdeasCount),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("dragstart",this.onDocDragStart),document.removeEventListener("dragend",this.onDocDragEnd),document.removeEventListener("mana-agent-follow",this.onAgentFollow),document.removeEventListener("mana-planner-note",this.onPlannerNote),this.noteTimer&&clearTimeout(this.noteTimer)}showNote(e,t){this.note=e,this.noteKind=t,this.noteTimer&&clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>{this.note=""},ah)}async follow(e){const t=document.activeElement,s=!!t&&this.contains(t)&&/^(INPUT|TEXTAREA)$/.test(t.tagName);if(!e.stay&&!s&&!this.editing&&this.active!==e.view){this.active=e.view;try{localStorage.setItem(ks,e.view)}catch{}}this.showNote(e.note,"agent");const i=f.getState();!s&&e.view==="week"&&e.week&&e.week!==i.currentWeek&&await i.setWeek(e.week).catch(()=>{}),await this.updateComplete;const n={action:"refresh",week:f.getState().currentWeek??e.week,changed:e.changed,added:e.added};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}async loadOrder(){try{const e=await fetch("/api/me");if(!e.ok)return;const t=await e.json();this.orderSetting=`user:${t.login}:planner.tab_order`,this.order=Zn(localStorage.getItem(this.orderSetting)),await this.refreshOrder()}catch{}}async moveTab(e,t,s){if(!this.orderSetting||this.savingOrder||e===t)return;const i=[...this.order],n=this.order.filter(o=>o!==e);if(n.splice(n.indexOf(t)+(s?1:0),0,e),!n.every((o,a)=>o===i[a])){this.orderRevision+=1,this.order=n,this.orderError="",this.savingOrder=!0;try{await f.getState().setSetting(this.orderSetting,JSON.stringify(n));try{localStorage.setItem(this.orderSetting,JSON.stringify(n))}catch{}}catch{this.order=i,this.orderError="Tab order could not be saved. Try again."}finally{this.savingOrder=!1}}}onTabPointerDown(e,t){this.editing||this.savingOrder||!this.orderSetting||e.pointerType==="mouse"&&e.button!==0||(this.tabPress={key:t,x:e.clientX,y:e.clientY,pointerId:e.pointerId},window.addEventListener("pointermove",this.onTabPointerMove,{passive:!1}),window.addEventListener("pointerup",this.onTabPointerUp),window.addEventListener("pointercancel",this.cancelTabReorder))}onTabOrderKey(e,t){if(!e.altKey||!["ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const s=this.order.indexOf(t),i=this.order[s+(e.key==="ArrowLeft"?-1:1)];i&&this.moveTab(t,i,e.key==="ArrowRight")}async loadCounts(){try{const[e,t]=await Promise.all([fetch("/api/goals").then(s=>s.json()),fetch("/api/week").then(s=>s.json())]);this.goalsCount=e.goals?.filter(s=>s.status==="active").length??0,this.weekCount=t.commitments?.filter(s=>!s.done).length??0}catch{}}async loadIdeasCount(){try{const t=await(await fetch("/api/ideas")).json();this.ideasCount=t.ideas?.filter(s=>!s.hidden).length??0,t.ideas&&zo(t.ideas)}catch{}}select(e){if(!(this.editing||this.ignoreTabClick)){this.active=e;try{localStorage.setItem(ks,e)}catch{}this.loadCounts()}}isDropTarget(e){return this.dragKind==="idea"?e==="week":this.dragKind==="commit"?e==="ideas":!1}onTabDragOver(e,t){this.isDropTarget(t)&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this.dragOverTab=t)}onTabDragLeave(e){this.dragOverTab===e&&(this.dragOverTab=null)}async onTabDrop(e,t){if(!this.isDropTarget(t))return;e.preventDefault();const s=this.dragKind;this.dragKind=null,this.dragOverTab=null;const i=(e.dataTransfer?.getData("text/plain")||"").trim();if(i){if(s==="commit"){const n=Number(e.dataTransfer?.getData("text/x-commit-id"));n&&await _o(n,i)}else if(s==="idea"){const n=Number(e.dataTransfer?.getData("text/x-idea-id"));if(!n||!await Po(n,i))return;this.active="week";try{localStorage.setItem(ks,"week")}catch{}}}}startRename(e,t){e.stopPropagation(),!(this.ignoreTabClick||this.reorderKey)&&(this.active=t,this.editing=t)}commitRename(e,t){const s=t.trim()||qe[e].def;this.editing=null,this.titles={...this.titles,[e]:s},localStorage.setItem(qe[e].ls,s),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[qe[e].setting]:s})})}onRenameKey(e,t){e.key==="Enter"?(e.preventDefault(),this.commitRename(t,e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=null)}renderTab(e){if(this.editing===e)return r`<input
        class="text-[15px] font-semibold text-ink leading-none bg-transparent border-b border-line outline-none pb-2"
        style="min-width:4ch;width:${this.titles[e].length+1}ch;letter-spacing:-0.01em;"
        .value=${this.titles[e]}
        autofocus
        @click=${o=>o.stopPropagation()}
        @keydown=${o=>this.onRenameKey(o,e)}
        @blur=${o=>this.commitRename(e,o.target.value)}
      />`;const t=this.active===e,s=this.isDropTarget(e),n=this.dragOverTab===e?"background:color-mix(in srgb, var(--accent) 15%, transparent);box-shadow:0 0 0 1.5px var(--accent);":s?"box-shadow:0 0 0 1.5px color-mix(in srgb, var(--accent) 40%, transparent);":t?"background:color-mix(in srgb, var(--accent) 13%, transparent);":"";return r`<button
      type="button"
      class="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[15px] leading-none whitespace-nowrap transition-[color,box-shadow,background] ${t?"text-ink font-semibold":"text-muted font-medium hover:text-ink hover:bg-hover"}"
      style="letter-spacing:-0.01em;touch-action:pan-y;user-select:none;${n}${this.reorderKey===e?"opacity:.45;":""}"
      data-planner-tab=${e}
      title="Drag to reorder. Double-click to rename"
      @pointerdown=${o=>this.onTabPointerDown(o,e)}
      @keydown=${o=>this.onTabOrderKey(o,e)}
      @dragstart=${o=>o.preventDefault()}
      @click=${()=>this.select(e)}
      @dblclick=${o=>this.startRename(o,e)}
      @dragover=${o=>this.onTabDragOver(o,e)}
      @dragleave=${()=>this.onTabDragLeave(e)}
      @drop=${o=>this.onTabDrop(o,e)}
    >
      ${this.reorderOver===e&&this.reorderKey!==e?r`<span aria-hidden="true" style="position:absolute;top:2px;bottom:2px;width:2px;border-radius:2px;background:var(--accent);${this.reorderAfter?"right:0;":"left:0;"}"></span>`:d}
      <span>${this.titles[e]}</span>
      ${this.countFor(e)>0?r`<span
            class="text-[11px] font-normal text-muted px-1.5 py-0.5 rounded-full leading-none"
            style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
            >${this.countFor(e)}</span
          >`:d}
    </button>`}countFor(e){return e==="ideas"?this.ideasCount:e==="goals"?this.goalsCount:this.weekCount}render(){return r`
      <div class="planner-tabs flex items-center gap-1 pt-3 pb-2 overflow-x-auto">
        ${sh(this.order,e=>e,e=>this.renderTab(e))}
        ${this.note?r`<span
              class="ml-auto pl-3 min-w-0 inline-flex items-center gap-1.5 text-xs text-muted"
              role=${this.noteKind==="error"?"alert":"status"}
              title=${this.noteKind==="agent"?"Changed by an agent":d}
              ><span class="shrink-0 w-1.5 h-1.5 rounded-full" style="background:var(${this.noteKind==="error"?"--nsc-red":"--nsc-green"});"></span
              ><span class="truncate">${this.note}</span></span
            >`:d}
      </div>
      ${this.orderError?r`<div role="alert" class="text-sm text-red-500">${this.orderError}</div>`:d}
      <div class="planner-panel">
        ${this.active==="week"?r`<week-section tabbed></week-section>`:d}
        ${this.active==="ideas"?r`<ideas-section tabbed></ideas-section>`:d}
        ${this.active==="goals"?r`<goals-section tabbed></goals-section>`:d}
      </div>
    `}};re([l()],Z.prototype,"order",2);re([l()],Z.prototype,"reorderKey",2);re([l()],Z.prototype,"reorderOver",2);re([l()],Z.prototype,"reorderAfter",2);re([l()],Z.prototype,"orderError",2);re([l()],Z.prototype,"active",2);re([l()],Z.prototype,"titles",2);re([l()],Z.prototype,"ideasCount",2);re([l()],Z.prototype,"goalsCount",2);re([l()],Z.prototype,"weekCount",2);re([l()],Z.prototype,"editing",2);re([l()],Z.prototype,"dragKind",2);re([l()],Z.prototype,"dragOverTab",2);re([l()],Z.prototype,"note",2);re([l()],Z.prototype,"noteKind",2);Z=re([k("planner-tabs")],Z);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,ae=(e,t,s,i)=>{for(var n=i>1?void 0:i?ch(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&lh(t,s,n),n};const eo=[{key:"goals",label:"Goals",icon:"target"},{key:"grocery",label:"Shopping",icon:"shopping-cart"},{key:"finance",label:"Finance",icon:"wallet"},{key:"circle",label:"Circles",icon:"circle"},{key:"learn",label:"Learn",icon:"graduation-cap"},{key:"office",label:"Office",icon:"briefcase",ownerOnly:!0},{key:"publisher",label:"Publisher",icon:"megaphone",ownerOnly:!0},{key:"canvas",label:"Notes",icon:"file-text"},{key:"guests",label:"Guests",icon:"user-plus",ownerOnly:!0},{key:"notify",label:"Notifications",icon:"bell"},{key:"tools",label:"Tools",icon:"layout-grid"}],Ze={goals:"personal",grocery:"personal",finance:"personal",circle:"personal",learn:"personal",office:"studio",publisher:"studio",canvas:"studio",guests:"workspace",notify:"workspace",tools:"workspace",inbox:"personal"},dh={goals:"#3b82f6",grocery:"#3b82f6",finance:"#3b82f6",circle:"#3b82f6",learn:"#3b82f6",office:"#f43f5e",publisher:"#f43f5e",canvas:"#f43f5e",guests:"#10b981",notify:"#10b981",inbox:"#3b82f6",tools:"var(--ink)"},hh=new Set(["goals","grocery","finance","circle","learn","office","guests","publisher","inbox","notify"]);function to(){const e=location.hash.match(/^#\/t\/([\w-]+)$/);if(!e||!e[1])return null;const t=e[1];return hh.has(t)?t:null}let R=class extends C{constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.themeMode="auto",this.themeTimer=null,this.menuOpen=!1,this.mobileNavOpen=!1,this.accountPortal=null,this.accountAnchor=null,this.accountUp=!1,this.closeAccount=()=>{this.menuOpen=!1,this.accountPortal&&($s(d,this.accountPortal),this.accountPortal.remove(),this.accountPortal=null)},this.onShellKey=e=>{if(e.key==="Tab"&&this.mobileNavOpen){const t=[...this.querySelectorAll(".mana-sidebar button")].filter(n=>n.getClientRects().length>0),s=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),i?.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),s?.focus())}e.key==="Escape"&&(this.menuOpen&&(this.closeAccount(),this.accountAnchor?.focus()),this.mobileNavOpen&&(this.mobileNavOpen=!1,this.querySelector(".mana-mobile-nav-toggle")?.focus()))},this.onAccountOutside=e=>{this.menuOpen&&!e.composedPath().includes(this.accountAnchor)&&!e.composedPath().includes(this.accountPortal)&&this.closeAccount()},this.railCollapsed=localStorage.getItem("cockpit.rail_collapsed")==="1",this.mobileTab="ops",this.demoHintDismissed=localStorage.getItem("mana.hint.reset_seen")==="1",this.navOrder=R.loadNavOrder(),this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.navDragAxis="y",this.navPress=null,this.justNavDragged=!1,this.orderedNavKeys=[],this.me=null,this.standaloneTool=to(),this.splitPct=R.DEFAULT_SPLIT,this.dragStartX=0,this.dragStartPct=R.DEFAULT_SPLIT,this.dragMoved=!1,this.lastExpandedPct=R.DEFAULT_SPLIT,this.splitByMode={},this.onAgentFollow=e=>{e.detail?.stay||this.standaloneTool&&this.standaloneTool!=="goals"||f.getState().rightPaneMode!=="goals"&&this.setRightPaneMode("goals")},this.onHashChange=()=>{this.standaloneTool=to()},this.rowNav=new ro(this,{selector:"[data-row-key]",getKey:()=>f.getState().focusedRowKey,setKey:e=>f.getState().setFocusedRowKey(e),onToggle:e=>{const[t,s]=e.split(":"),i=Number(s);if(!Number.isFinite(i))return;const n=f.getState();if(t==="kr"){const o=n.goals.flatMap(a=>a.keyResults??[]).find(a=>a.id===i);o&&n.updateKeyResult(i,{done:!o.done})}else if(t==="commit"){const o=n.commitments.find(a=>a.id===i);o&&n.updateCommitment(i,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const e=f.getState();e.loadThreads(),e.currentThreadId!=null&&e.loadMessages(e.currentThreadId),e.loadGoals(),e.loadCommitments(),e.loadNotifications()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=e=>{e.preventDefault(),this.dragStartX=e.clientX,this.dragStartPct=this.splitPct,this.dragMoved=!1,window.addEventListener("mousemove",this.onDividerMove),window.addEventListener("mouseup",this.onDividerUp),document.body.style.cursor="col-resize",document.body.style.userSelect="none"},this.onDividerMove=e=>{const t=this.querySelector("main");if(!t)return;const s=t.getBoundingClientRect().width;if(s<=0)return;Math.abs(e.clientX-this.dragStartX)>3&&(this.dragMoved=!0);const i=(e.clientX-this.dragStartX)/s*100;let n=this.dragStartPct+i;n<18?n=0:n>82?n=100:n=Math.max(25,Math.min(75,n)),this.splitPct=n},this.onDividerUp=()=>{window.removeEventListener("mousemove",this.onDividerMove),window.removeEventListener("mouseup",this.onDividerUp),document.body.style.cursor="",document.body.style.userSelect="",!this.dragMoved&&(this.chatCollapsed||this.opsCollapsed)?this.splitPct=this.lastExpandedPct:this.splitPct>0&&this.splitPct<100&&(this.lastExpandedPct=this.splitPct),this.saveSplit()},this.resetSplit=()=>{this.splitPct=R.DEFAULT_SPLIT,this.saveSplit()},this.toggleRail=()=>{this.railCollapsed=!this.railCollapsed;try{localStorage.setItem("cockpit.rail_collapsed",this.railCollapsed?"1":"0")}catch{}},this.dismissDemoHint=()=>{try{localStorage.setItem("mana.hint.reset_seen","1")}catch{}this.demoHintDismissed=!0},this.onNavPointerDown=(e,t,s)=>{e.pointerType==="mouse"&&e.button!==0||this.mobileNavOpen&&e.pointerType!=="mouse"||(this.navPress={key:t,axis:s,x:e.clientX,y:e.clientY},window.addEventListener("pointermove",this.onNavPointerMove),window.addEventListener("pointerup",this.onNavPointerUp))},this.onNavPointerMove=e=>{if(this.navPress){if(!this.navDragKey){const t=this.navPress.axis==="y"?Math.abs(e.clientY-this.navPress.y):Math.abs(e.clientX-this.navPress.x),s=this.navPress.axis==="y"?Math.abs(e.clientX-this.navPress.x):Math.abs(e.clientY-this.navPress.y);if(t>6&&t>=s)this.navDragKey=this.navPress.key,this.navDragAxis=this.navPress.axis;else return}this.onNavDragMove(e)}},this.onNavPointerUp=()=>{window.removeEventListener("pointermove",this.onNavPointerMove),window.removeEventListener("pointerup",this.onNavPointerUp),this.navPress=null,this.navDragKey&&(this.justNavDragged=!0,this.endNavDrag(),setTimeout(()=>{this.justNavDragged=!1},50))}}static loadNavOrder(){try{const e=JSON.parse(localStorage.getItem("cockpit.nav_order")||"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}connectedCallback(){super.connectedCallback();const e=f.getState();e.loadSettings().then(()=>this.applyTheme()),e.loadThreads(),e.loadTools(),e.loadNotifications(),this.notifTimer=setInterval(()=>void f.getState().loadNotifications(),6e4),this.fetchNavOrder(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t&&(this.me=t)}).catch(()=>{}),this.unsubSettings=_(this,f,t=>t.settings),this.unsubRightPaneMode=_(this,f,t=>t.rightPaneMode),this.unsubTools=_(this,f,t=>t.tools),this.unsubNotif=_(this,f,t=>t.notificationsUnread),window.addEventListener("settings-close",this.onSettingsClose),document.addEventListener("keydown",this.onShellKey),document.addEventListener("pointerdown",this.onAccountOutside),document.addEventListener("scroll",this.closeAccount,!0),window.addEventListener("resize",this.closeAccount),this.loadSplits(),this.splitPct=this.splitFor(f.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible),window.addEventListener("hashchange",this.onHashChange),document.addEventListener("mana-agent-follow",this.onAgentFollow)}disconnectedCallback(){super.disconnectedCallback(),this.themeTimer&&clearTimeout(this.themeTimer),this.unsubSettings?.(),this.unsubRightPaneMode?.(),this.unsubTools?.(),this.unsubNotif?.(),this.notifTimer&&clearInterval(this.notifTimer),nh(),document.removeEventListener("mana-agent-follow",this.onAgentFollow),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("keydown",this.onShellKey),document.removeEventListener("pointerdown",this.onAccountOutside),document.removeEventListener("scroll",this.closeAccount,!0),window.removeEventListener("resize",this.closeAccount),this.closeAccount(),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),window.removeEventListener("hashchange",this.onHashChange),this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll(),this.menuOpen&&this.paintAccountMenu()}clampSplit(e){return Math.max(0,Math.min(100,e))}get chatCollapsed(){return this.splitPct<=0}get opsCollapsed(){return this.splitPct>=100}splitFor(e){return this.splitByMode[e]??this.legacySplit??R.DEFAULT_SPLIT}loadSplits(){try{const e=localStorage.getItem("cockpit.split_pct_by_mode");if(e){const s=JSON.parse(e);for(const[i,n]of Object.entries(s))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[i]=this.clampSplit(n));return}const t=Number(localStorage.getItem("cockpit.split_pct"));Number.isFinite(t)&&t>0&&(this.legacySplit=this.clampSplit(t))}catch{}}saveSplit(){const e=f.getState().rightPaneMode;this.splitByMode[e]=this.splitPct;try{localStorage.setItem("cockpit.split_pct_by_mode",JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const e=this.querySelector("#ops-scroll");return e===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=e,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const e=this.ensureOpsListener(),t=f.getState().rightPaneMode;if(t===this.renderedOpsMode&&!e)return;const s=t!==this.renderedOpsMode;if(this.renderedOpsMode=t,s){const o=this.splitFor(t);o!==this.splitPct&&(this.splitPct=o)}const i=this.opsEl;if(!i)return;const n=this.opsScroll[t]??0;i.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===i&&(i.scrollTop=n)})}applyTheme(){const e=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),t=f.getState().settings[Zt]??e??er(),s=t==="dark"?"dark":t==="light"?"light":"auto",i=dr(s),n=i?"dark":"light";s!==this.themeMode&&(this.themeMode=s),n!==this.theme&&(this.theme=n),document.documentElement.dataset.theme=n;try{localStorage.setItem(Zt,s),localStorage.setItem(Xo,i?"1":"0")}catch{}if(this.themeTimer&&(clearTimeout(this.themeTimer),this.themeTimer=null),s==="auto"){const o=hr(),a=o?Math.min(Math.max(o.getTime()-Date.now()+1e3,1e3),360*60*1e3):3600*1e3;this.themeTimer=setTimeout(()=>this.applyTheme(),a)}}openSettings(){this.settingsOpen=!0,this.closeAccount(),this.mobileNavOpen=!1}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}onChatDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(s=>s.type.startsWith("image/")||s.type==="application/pdf"||/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i.test(s.name));t.length&&(e.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:t},bubbles:!0,composed:!0})))}setThemeMode(e){try{localStorage.setItem(Zt,e)}catch{}f.getState().setSetting(Zt,e),this.themeMode=e,this.applyTheme()}renderRightPaneContent(e){switch(e){case"goals":return r`
          <goals-metrics></goals-metrics>
          <planner-tabs></planner-tabs>
        `;case"canvas":return r`<companion-workspace class="flex flex-col flex-1 min-h-0"></companion-workspace>`;case"grocery":return r`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"inbox":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return r`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return r`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`;case"learn":return r`<learn-section class="flex flex-col flex-1 min-h-0"></learn-section>`;case"guests":return r`<guests-section class="flex flex-col flex-1 min-h-0"></guests-section>`;case"publisher":return r`<publisher-section class="flex flex-col flex-1 min-h-0"></publisher-section>`;case"tools":return r`<tools-launcher class="flex flex-col flex-1 min-h-0"></tools-launcher>`;case"notify":return r`<notifications-section class="flex flex-col flex-1 min-h-0"></notifications-section>`}}openMobileNav(){this.mobileNavOpen=!0,this.updateComplete.then(()=>this.querySelector(".mana-sidebar-close")?.focus())}toggleAccount(e,t){if(this.menuOpen){this.closeAccount();return}this.accountAnchor=e.currentTarget,this.accountUp=t,this.menuOpen=!0,this.paintAccountMenu(),this.accountPortal?.querySelector("button")?.focus()}paintAccountMenu(){if(!this.accountAnchor)return;this.accountPortal||(this.accountPortal=document.createElement("div"),this.accountPortal.className="mana-account-menu",document.body.appendChild(this.accountPortal));const e=this.accountAnchor.getBoundingClientRect(),t=Math.min(224,window.innerWidth-16);$s(r`
      <button type="button" role="menuitem" class="mana-account-settings" @click=${()=>this.openSettings()}>
        <sc-icon name="lucide-settings"></sc-icon>Settings
      </button>
      <div class="mana-appearance-label">Appearance</div>
      <div class="mana-appearance" role="radiogroup" aria-label="Appearance">
        ${[["auto","sunrise","Auto"],["light","sun","Light"],["dark","moon","Dark"]].map(([i,n,o])=>r`
          <button type="button" role="radio" aria-checked=${this.themeMode===i} aria-label=${o}
            @click=${()=>this.setThemeMode(i)}>
            <sc-icon name="lucide-${n}"></sc-icon><span>${o}</span>
          </button>`)}
      </div>`,this.accountPortal),this.accountPortal.setAttribute("role","menu"),this.accountPortal.setAttribute("aria-label","Account");const s=this.accountPortal.getBoundingClientRect().height;this.accountPortal.style.width=`${t}px`,this.accountPortal.style.left=`${Math.max(8,Math.min(e.left,window.innerWidth-t-8))}px`,this.accountPortal.style.top=`${Math.max(8,Math.min(this.accountUp?e.top-s-8:e.bottom+8,window.innerHeight-s-8))}px`}renderAccount(e=!1,t=!1){const s=f.getState().settings,i=this.me,n=(i?s[`user:${i.login}:profile_pic_url`]:"")||(i?.role==="owner"?s["cockpit.profile_pic_url"]:"")||i?.profilePic,o=i?.displayName.trim().split(/\s+/).map(a=>a[0]).slice(0,2).join("").toUpperCase()||"?";return r`<button type="button" class="mana-account ${t?"mana-account-expanded":""}"
      aria-label="Account menu" aria-haspopup="menu" aria-expanded=${this.menuOpen}
      @click=${a=>this.toggleAccount(a,e)}>
      <span class="mana-avatar">${n?r`<img src=${n} alt="" referrerpolicy="no-referrer" @error=${a=>{a.target.hidden=!0}} />`:d}<span>${o}</span></span>
      ${t?r`<span class="mana-account-identity"><span>${i?.displayName||"Account"}</span>${i?.login?r`<span class="mana-account-login">${i.login}</span>`:d}</span>`:d}
    </button>`}renderRail(e,t){const s=this.railCollapsed&&!this.mobileNavOpen,i=f.getState().notificationsUnread;return r`
      ${this.mobileNavOpen?r`<button type="button" class="mana-nav-backdrop lg:hidden" aria-label="Close navigation" @click=${()=>{this.mobileNavOpen=!1}}></button>`:d}
      <aside class="mana-sidebar ${s?"is-collapsed":""} ${this.mobileNavOpen?"is-mobile-open":""}" role=${this.mobileNavOpen?"dialog":d} aria-modal=${this.mobileNavOpen?"true":d} aria-label="Mana sidebar">
        <div class="mana-sidebar-header">
          ${s?d:r`<div class="mana-sidebar-brand"><img src=${"/favicon.png"} alt="" /><span>Mana</span></div>`}
          <button type="button" class="mana-sidebar-toggle" aria-label=${s?"Expand sidebar":"Collapse sidebar"} aria-expanded=${!s} @click=${this.toggleRail}>
            <sc-icon name="lucide-layout-sidebar"></sc-icon>
          </button>
          <button type="button" class="mana-sidebar-close" aria-label="Close navigation" @click=${()=>{this.mobileNavOpen=!1}}><span aria-hidden="true">✕</span></button>
        </div>
        <nav class="mana-sidebar-nav" aria-label="Tools">
          ${e.map((n,o)=>{const a=t===n.key,c=Ze[n.key];return r`
              ${o>0&&c!==Ze[e[o-1].key]?r`<div class="mana-sidebar-rule" aria-hidden="true"></div>`:d}
              <button type="button" data-nav-item=${n.key} class="mana-sidebar-item ${a?"is-active":""} ${this.navDragKey===n.key?"opacity-40":""} ${this.navDropClass(n.key)}"
                style="--nav-hue:${dh[n.key]};touch-action:pan-y;" aria-label=${n.label} aria-current=${a?"page":d}
                title=${s?n.label:d}
                @pointerdown=${u=>this.onNavPointerDown(u,n.key,"y")}
                @click=${()=>{this.onNavClick(n.key,this.mobileNavOpen),this.justNavDragged||(this.mobileNavOpen=!1)}}>
                <sc-icon name="lucide-${n.icon}"></sc-icon>
                ${s?d:r`<span class="mana-sidebar-label">${n.label}</span>`}
                ${n.key==="notify"&&i>0?r`<span class="mana-sidebar-dot" role="status" aria-label=${`${i} unread notifications`}></span>`:d}
              </button>`})}
        </nav>
        <div class="mana-sidebar-account">${this.renderAccount(!0,!s)}</div>
      </aside>`}setRightPaneMode(e){f.getState().setRightPaneMode(e)}orderModes(e){const t=new Map(this.navOrder.map((i,n)=>[i,n])),s=["personal","studio","workspace"];return[...e].sort((i,n)=>{const o=s.indexOf(Ze[i.key])-s.indexOf(Ze[n.key]);if(o)return o;const a=t.get(i.key),c=t.get(n.key);return a!==void 0&&c!==void 0?a-c:a!==void 0?-1:c!==void 0?1:0})}onNavDragMove(e){const t=this.renderRoot.querySelectorAll("[data-nav-item]");for(const s of t){const i=s.getBoundingClientRect();if(i.width===0&&i.height===0||!(this.navDragAxis==="y"?e.clientY>=i.top&&e.clientY<=i.bottom:e.clientX>=i.left&&e.clientX<=i.right))continue;const o=s.dataset.navItem;if(Ze[o]!==Ze[this.navDragKey])continue;const a=this.navDragAxis==="y"?e.clientY<i.top+i.height/2?"before":"after":e.clientX<i.left+i.width/2?"before":"after";(this.navDragOverKey!==o||this.navDragPos!==a)&&(this.navDragOverKey=o,this.navDragPos=a,this.requestUpdate());return}}endNavDrag(){const e=this.navDragKey,t=this.navDragOverKey,s=this.navDragPos;if(this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.requestUpdate(),!e||!t||e===t||Ze[e]!==Ze[t])return;const i=[...this.orderedNavKeys],n=i.indexOf(e);if(n<0)return;i.splice(n,1);let o=i.indexOf(t);o<0||(s==="after"&&(o+=1),i.splice(o,0,e),this.navOrder=i,localStorage.setItem("cockpit.nav_order",JSON.stringify(i)),fetch("/api/nav-order",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i})}).catch(()=>{}))}async fetchNavOrder(){try{const e=await fetch("/api/nav-order",{credentials:"include"});if(!e.ok)return;const t=await e.json();Array.isArray(t.order)&&t.order.length&&(this.navOrder=t.order,localStorage.setItem("cockpit.nav_order",JSON.stringify(t.order)))}catch{}}onNavClick(e,t){this.justNavDragged||(this.setRightPaneMode(e),t&&(this.mobileTab="ops"))}navDropClass(e){return this.navDragOverKey!==e?"":this.navDragAxis==="y"?this.navDragPos==="before"?"border-t-2 border-t-accent":"border-b-2 border-b-accent":this.navDragPos==="before"?"border-l-2 border-l-accent":"border-r-2 border-r-accent"}onNotifNavigate(e){const t=e.detail,s={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher",mana:"canvas"},i=t?.mode,n=i??(t?.persona?s[t.persona]:void 0);n&&(!(n==="office"||n==="inbox"||n==="guests"||n==="publisher")||this.me?.role==="owner")&&this.setRightPaneMode(n),this.mobileTab=i?"ops":"chat"}render(){if(this.settingsOpen)return r`<settings-page></settings-page>`;const e=f.getState().settings["cockpit.chat_hidden"]==="1",t=!e&&this.mobileTab==="chat",s=this.me?.role==="owner",i=f.getState().tools,n=m=>i.find(b=>b.name===m)?.placement==="standalone",o=this.orderModes(eo.filter(m=>(!m.ownerOnly||s)&&!n(m.key)));this.orderedNavKeys=o.map(m=>m.key);const a=f.getState().rightPaneMode,c=this.standaloneTool,u=c||(o.some(m=>m.key===a)?a:"goals"),h=["grocery","office","circle","learn","guests","publisher","canvas","notify","tools"].includes(u),p=!this.demoHintDismissed&&!c;return r`
      <div class="mana-shell h-[100dvh] overflow-hidden flex flex-col bg-bg text-ink font-sans" @notif-navigate=${this.onNotifNavigate}>
        ${p?r`<div class="shrink-0 flex items-center gap-3 px-4 py-2.5 text-sm bg-surface border-b border-line">
              <sc-icon name="lucide-sparkles" class="w-4 h-4 shrink-0 text-accent"></sc-icon>
              <span class="flex-1 min-w-0 text-muted">Live demo. Edits stay in this browser. Start fresh from <span class="text-ink font-medium">Settings → Reset demo</span>.</span>
              <button type="button" class="shrink-0 w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover" aria-label="Dismiss the demo hint" @click=${this.dismissDemoHint}>✕</button>
            </div>`:d}
        <div class="flex-1 flex flex-row min-h-0">
        ${c?d:this.renderRail(o,u)}
        <div class="flex-1 flex flex-col min-w-0 min-h-0" ?inert=${this.mobileNavOpen}>
        <header
          class="${c?"flex":"flex lg:hidden"} items-center gap-2 px-3 sm:px-4 py-2"
        >
          ${c?d:r`<button type="button" class="mana-mobile-nav-toggle" aria-label="Open navigation" aria-expanded=${this.mobileNavOpen} @click=${this.openMobileNav}><sc-icon name="lucide-layout-sidebar"></sc-icon></button>`}
          <span class="lg:hidden text-sm font-medium truncate">${t?"Chat":eo.find(m=>m.key===u)?.label}</span>
          ${e?d:r`<button type="button" class="lg:hidden ml-auto px-3 py-1.5 rounded-lg text-sm hover:bg-hover" @click=${()=>{this.mobileTab=t?"ops":"chat"}}>${t?"Tools":"Chat"}</button>`}
          <!-- Spacer pushes the account to the right edge. -->
          <div class="flex-1"></div>
          <div class="flex items-center gap-2 shrink-0">
            ${this.renderAccount()}
          </div>
        </header>

        <main
          class="mana-main-plane relative flex-1 min-h-0 min-w-0 flex flex-col lg:flex-row gap-3 lg:gap-0 overflow-hidden"
        >
          ${e?d:r`
          <section
            class="${t?"flex":"hidden"} ${this.chatCollapsed?"lg:hidden":"lg:flex"} mana-main-card mana-chat-card max-lg:flex-1 flex-col min-h-0 px-3 sm:px-4 pt-2 pb-3 sm:pb-4 overflow-hidden lg:grow lg:shrink lg:[flex-basis:var(--split)]"
            style=${`--split: ${this.splitPct}%;`}
            @dragover=${this.onChatDragOver}
            @drop=${this.onChatDrop}
          >
            <thread-list class="shrink-0"></thread-list>
            <chat-pane class="flex-1 min-h-0 my-3"></chat-pane>
            <chat-composer class="shrink-0"></chat-composer>
          </section>

          <!-- Draggable divider, desktop only. Drag to resize or collapse a pane,
               single-click to restore a collapsed pane, double-click to reset. -->
          <div
            class="hidden lg:flex shrink-0 ${this.chatCollapsed||this.opsCollapsed?"w-5":"w-3"} group cursor-col-resize items-stretch select-none"
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize panes"
            @mousedown=${this.onDividerDown}
            @dblclick=${this.resetSplit}
          >
            ${this.chatCollapsed||this.opsCollapsed?r`<div
                  class="m-auto flex items-center justify-center w-5 h-12 rounded-full bg-hover text-muted group-hover:text-ink group-hover:bg-line transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    ${this.chatCollapsed?r`<polyline points="9 18 15 12 9 6" />`:r`<polyline points="15 18 9 12 15 6" />`}
                  </svg>
                </div>`:r`<div
                  class="m-auto w-[3px] h-12 rounded-full bg-line group-hover:bg-muted transition-colors"
                ></div>`}
          </div>`}

          <section
            id="ops-scroll"
            class="${t?"hidden":"flex"} ${this.opsCollapsed?"lg:hidden":"lg:flex"} flex-col min-h-0 ${h?"overflow-hidden":"overflow-y-auto px-3 py-4 sm:p-5"} mana-main-card max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
            style=${`--split-ops: ${100-this.splitPct}%; scrollbar-gutter: stable;`}
          >
            <div
              class="w-full max-w-5xl mx-auto ${h?"flex flex-col flex-1 min-h-0":"space-y-6"}"
            >
              ${this.renderRightPaneContent(u)}
            </div>
          </section>
        </main>

        <voice-controller></voice-controller>
        </div>
        </div>
      </div>
    `}};R.DEFAULT_SPLIT=50;ae([l()],R.prototype,"settingsOpen",2);ae([l()],R.prototype,"theme",2);ae([l()],R.prototype,"themeMode",2);ae([l()],R.prototype,"menuOpen",2);ae([l()],R.prototype,"mobileNavOpen",2);ae([l()],R.prototype,"railCollapsed",2);ae([l()],R.prototype,"mobileTab",2);ae([l()],R.prototype,"demoHintDismissed",2);ae([l()],R.prototype,"navOrder",2);ae([l()],R.prototype,"navDragKey",2);ae([l()],R.prototype,"navDragOverKey",2);ae([l()],R.prototype,"me",2);ae([l()],R.prototype,"standaloneTool",2);ae([l()],R.prototype,"splitPct",2);R=ae([k("mana-app")],R);const fh=Object.freeze(Object.defineProperty({__proto__:null,get ManaApp(){return R}},Symbol.toStringTag,{value:"Module"}));export{C as T,mh as c,fh as m,l as r};
