const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-D2emgc0r.js","assets/db-DHWx8Fue.js","assets/notes-media-CocbJSli.js","assets/index-CUsglUmm.js","assets/index-CbpIwLlf.css","assets/publisher-week-3iPRzTdL.js"])))=>i.map(i=>d[i]);
import{n as b,i as ke,t as k,b as r,o as X,_ as Ue,e as _o,a as Mo,d as Oo,E as Lo,c as Ae,A as h,f as Ls,L as Ns,D as Dt,w as kr,j as $r}from"./index-CUsglUmm.js";import{n as Sr,k as Cr}from"./publisher-week-3iPRzTdL.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e,t){return(s,i,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return Tr(s,i,{get(){return o(this)}})}}class $ extends ke{createRenderRoot(){return this}}class Dr{constructor(t,s){this.onKeydown=i=>{const n=i.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=i.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const a=this.opts.keyAttr??"data-row-key",l=this.opts.scope?.()??document,d=Array.from(l.querySelectorAll(`[${a}]`));if(!d.length)return;const u=this.opts.getKey();if(n===" "||n==="Enter"){if(!u)return;const x=n===" "?this.opts.onToggle:this.opts.onEnter;if(!x)return;i.preventDefault(),x(u);return}const p=d.map(x=>x.getAttribute(a)).filter(x=>!!x),m=u?p.indexOf(u):-1,f=n==="ArrowDown"?m<0?0:Math.min(m+1,p.length-1):m<=0?0:m-1;if(p[f]&&p[f]!==u){i.preventDefault(),this.opts.setKey(p[f]);const x=p[f];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${a}="${CSS.escape(x)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=t,this.opts=s,t.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const on=e=>{let t;const s=new Set,i=(u,p)=>{const m=typeof u=="function"?u(t):u;if(!Object.is(m,t)){const f=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),s.forEach(x=>x(t,f))}},n=()=>t,l={setState:i,getState:n,getInitialState:()=>d,subscribe:u=>(s.add(u),()=>s.delete(u))},d=t=e(i,n,l);return l},Er=(e=>e?on(e):on);class Ir extends Error{constructor(t,s,i){super(s),this.name="ApiError",this.status=t,this.body=i}}async function $i(e){let t=null,s=`${e.status} ${e.statusText}`;try{if(t=await e.json(),t&&typeof t=="object"&&"error"in t){const i=t.error;typeof i=="string"&&(s=i)}}catch{}return new Ir(e.status,s,t)}const Ar=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;async function ns(e,t){const s=await fetch(e,{...t,headers:{"content-type":"application/json","x-mana-client":Ar,...t?.headers||{}}});if(!s.ok)throw await $i(s);const i=await s.text();return i?JSON.parse(i):void 0}function K(e){return ns(e,{method:"GET"})}function U(e,t){return ns(e,{method:"POST",body:t===void 0?void 0:JSON.stringify(t)})}function yt(e,t){return ns(e,{method:"PATCH",body:t===void 0?void 0:JSON.stringify(t)})}function Gt(e){return ns(e,{method:"DELETE"})}const S={threads:{list:()=>K("/api/threads").then(e=>e.threads),create:(e="chat",t)=>U("/api/threads",{kind:e,persona:t})},messages:{list:e=>K(`/api/threads/${e}/messages`).then(t=>t.messages)},northStars:{list:()=>K("/api/north-stars").then(e=>e.northStars),create:e=>U("/api/north-stars",{title:e}),update:(e,t)=>yt(`/api/north-stars/${e}`,t),archive:e=>Gt(`/api/north-stars/${e}`),summary:e=>K(`/api/north-stars/${e}/summary`)},goals:{list:(e=!1)=>K(`/api/goals${e?"?include=archived":""}`),create:e=>U("/api/goals",e),update:(e,t)=>yt(`/api/goals/${e}`,t),remove:(e,t=!1)=>Gt(`/api/goals/${e}${t?"?permanent=true":""}`),summary:e=>K(`/api/goals/${e}/summary`),events:e=>K(`/api/goals/${e}/events`).then(t=>t.events)},keyResults:{create:(e,t)=>U(`/api/goals/${e}/key-results`,{title:t}),update:(e,t)=>yt(`/api/key-results/${e}`,t),move:(e,t)=>U(`/api/key-results/${e}/move`,{direction:t}),reorder:(e,t)=>U(`/api/key-results/${e}/reorder`,{targetIndex:t}),remove:e=>Gt(`/api/key-results/${e}`)},commitments:{listForWeek:e=>K(`/api/week${e?`?week=${encodeURIComponent(e)}`:""}`),create:e=>U("/api/commitments",e),update:(e,t)=>yt(`/api/commitments/${e}`,t),remove:e=>Gt(`/api/commitments/${e}`),reorder:(e,t)=>U(`/api/commitments/${e}/reorder`,{targetIndex:t}),carryOver:(e,t)=>U("/api/commitments/carry-over",{from:e,to:t})},settings:{list:()=>K("/api/settings"),update:e=>yt("/api/settings",e)},tools:{list:()=>K("/api/tools").then(e=>e.tools),setPlacement:(e,t,s)=>yt(`/api/tools/${encodeURIComponent(e)}`,{placement:t,order:s})},agentDocs:{list:()=>K("/api/agents").then(e=>e.files),read:e=>K(`/api/agents/${encodeURIComponent(e)}`),save:(e,t)=>ns(`/api/agents/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify({content:t})}),history:e=>K(`/api/agents/${encodeURIComponent(e)}/history`).then(t=>t.history),at:(e,t)=>K(`/api/agents/${encodeURIComponent(e)}/at/${t}`),restore:(e,t)=>U(`/api/agents/${encodeURIComponent(e)}/restore`,{sha:t}),reset:e=>U(`/api/agents/${encodeURIComponent(e)}/reset`,{})},canvas:{list:()=>K("/api/canvas/files").then(e=>e.files),read:e=>K(`/api/canvas/files/${encodeURIComponent(e)}`)},voice:{session:e=>U("/api/voice/session",e?{persona:e}:void 0),op:(e,t)=>U("/api/voice/op",{name:e,arguments:t}),transcript:e=>U("/api/voice/transcript",e),stt:async e=>{const t=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:e});if(!t.ok)throw await $i(t);return t.json()},consult:e=>U("/api/voice/consult",e),tts:async e=>{const t=await fetch("/api/voice/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:e})});if(!t.ok)throw await $i(t);return t.blob()}},uploads:{upload:(e,t=!1,s)=>U("/api/upload",{dataUrl:e,ephemeral:t,name:s})},state:()=>K("/api/state"),notifications:{list:()=>K("/api/notifications"),read:e=>U(`/api/notifications/${e}/read`),dismiss:e=>U(`/api/notifications/${e}/dismiss`),readAll:()=>U("/api/notifications/read-all"),dismissAll:()=>U("/api/notifications/dismiss-all"),mute:(e,t)=>U("/api/notifications/mute",{kind:e,enabled:t}),kinds:()=>K("/api/notifications/kinds")}},Pr={goals:"house",canvas:"house",grocery:"house",office:"house",finance:"house",circle:"house",learn:"house",guests:"house",publisher:"house",inbox:"house",tools:"house",notify:"house"},rn={goals:"Goals",canvas:"Mana",grocery:"Shopping",office:"Office",finance:"Finance",circle:"Circles",learn:"Learn",guests:"Guests",publisher:"Publisher",inbox:"Inbox",tools:"Tools",notify:"Notifications"},Bi={house:"Workshop",mana:"Workshop","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Office keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper","learn-coach":"Learn coach",publisher:"Publisher",companion:"Mana"};function No(e){if(e.currentThreadId!=null){const t=e.threads.find(s=>s.id===e.currentThreadId);if(t?.persona)return t.persona}return Pr[e.rightPaneMode]}function Gs(){try{const e=localStorage.getItem("cockpit.right_pane_mode");if(e==="goals"||e==="canvas"||e==="grocery"||e==="office"||e==="finance"||e==="circle"||e==="learn"||e==="guests"||e==="publisher")return e}catch{}return"goals"}let an=0,wt=0;const g=Er((e,t)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const s=await S.threads.list();e({threads:s})},async selectThread(s){e({currentThreadId:s,messages:[]}),s!=null&&await t().loadMessages(s)},async createThread(s){const i=s?.kind??"chat",n=s?.persona,o=await S.threads.create(i,n);return await t().loadThreads(),e({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(s){const i=await S.messages.list(s);e({messages:i})},northStars:[],async loadNorthStars(){e({northStars:await S.northStars.list()})},async createNorthStar(s){await S.northStars.create(s),await t().loadNorthStars()},async renameNorthStar(s,i){await S.northStars.update(s,{title:i}),await t().loadNorthStars()},async archiveNorthStar(s){await S.northStars.archive(s),await t().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:s,archivedCount:i}=await S.goals.list(t().includeArchivedGoals);e({goals:s,goalsArchivedCount:i})},async toggleArchivedGoals(s){e({includeArchivedGoals:s}),await t().loadGoals()},async createGoal(s){const{id:i}=await S.goals.create({title:s.title,northStar:s.northStar??null,targetDate:s.targetDate??null});return(s.color!=null||s.symbol!=null)&&await S.goals.update(i,{color:s.color??null,symbol:s.symbol??null}),await t().loadGoals(),i},async updateGoal(s,i){await S.goals.update(s,i),await t().loadGoals()},async deleteGoal(s,i=!1){await S.goals.remove(s,i),await t().loadGoals()},async addKeyResult(s,i,n){const{id:o}=await S.keyResults.create(s,i);n&&await S.keyResults.update(o,{targetDate:n}),await t().loadGoals()},async updateKeyResult(s,i){await S.keyResults.update(s,i),await t().loadGoals()},async deleteKeyResult(s){await S.keyResults.remove(s),await t().loadGoals()},async moveKeyResult(s,i){await S.keyResults.move(s,i),await t().loadGoals()},async reorderKeyResult(s,i){await S.keyResults.reorder(s,i),await t().loadGoals()},currentWeek:null,commitments:[],async setWeek(s){e({currentWeek:s}),await t().loadCommitments(s)},async loadCommitments(s){const i=await S.commitments.listForWeek(s??t().currentWeek??void 0);e({commitments:i.commitments,currentWeek:i.week})},async createCommitment(s){await S.commitments.create({...s,week:s.week??t().currentWeek??void 0}),await t().loadCommitments()},async updateCommitment(s,i){await S.commitments.update(s,i),await t().loadCommitments()},async deleteCommitment(s){await S.commitments.remove(s),await t().loadCommitments()},async reorderCommitment(s,i){await S.commitments.reorder(s,i),await t().loadCommitments()},settings:{},async loadSettings(){e({settings:await S.settings.list()})},async setSetting(s,i){const n=await S.settings.update({[s]:i});e({settings:n})},tools:[],async loadTools(){e({tools:await S.tools.list()})},async setToolPlacement(s,i){await S.tools.setPlacement(s,i),e({tools:t().tools.map(n=>n.name===s?{...n,placement:i}:n)})},notifications:[],notificationsUnread:0,async loadNotifications(){const s=++an,i=wt,{notifications:n,unread:o}=await S.notifications.list();s!==an||i!==wt||e({notifications:n,notificationsUnread:o})},async markNotificationRead(s){wt++;const i=t().notifications.map(o=>o.id===s&&o.read_at==null?{...o,read_at:Math.floor(Date.now()/1e3)}:o),n=t().notifications.some(o=>o.id===s&&o.read_at==null);e({notifications:i,notificationsUnread:Math.max(0,t().notificationsUnread-(n?1:0))}),await S.notifications.read(s),await t().loadNotifications()},async dismissNotification(s){wt++;const i=t().notifications.some(o=>o.id===s&&o.read_at==null),n=t().notifications.filter(o=>o.id!==s);e({notifications:n,notificationsUnread:Math.max(0,t().notificationsUnread-(i?1:0))}),await S.notifications.dismiss(s),await t().loadNotifications()},async markAllNotificationsRead(){wt++;const s=Math.floor(Date.now()/1e3);e({notifications:t().notifications.map(i=>i.read_at==null?{...i,read_at:s}:i),notificationsUnread:0}),await S.notifications.readAll(),await t().loadNotifications()},async clearAllNotifications(){wt++,e({notifications:[],notificationsUnread:0}),await S.notifications.dismissAll(),await t().loadNotifications()},rightPaneMode:Gs(),setRightPaneMode(s){try{localStorage.setItem("cockpit.right_pane_mode",s)}catch{}e({rightPaneMode:s,viewContext:{tool:s,summary:rn[s]}})},focusedRowKey:null,setFocusedRowKey(s){e({focusedRowKey:s})},viewContext:{tool:Gs(),summary:rn[Gs()]},setViewContext(s){e({viewContext:s})}}));function _(e,t,s){let i=s?s(t.getState()):void 0;return t.subscribe(n=>{if(!s){e.requestUpdate();return}const o=s(n);Object.is(o,i)||(i=o,e.requestUpdate())})}class Ui{constructor(t,s,i){this.host=t,this.store=s,this.selector=i,t.addController(this)}hostConnected(){this.unsubscribe=_(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}const Vt="cockpit.theme",_r="cockpit.theme.dark";function Mr(e){return e==="light"||e==="dark"||e==="auto"}function Or(){try{const e=localStorage.getItem(Vt);return Mr(e)?e:"auto"}catch{return"auto"}}const ot=Math.PI/180,zi=864e5,Ro=2440588,jo=2451545,Lr=ot*23.4397,Vs=9e-4,Nr=-.833*ot,Rr=e=>e.valueOf()/zi-.5+Ro,ln=e=>new Date((e+.5-Ro)*zi),jr=e=>Rr(e)-jo,Fr=e=>ot*(357.5291+.98560028*e);function Br(e){const t=ot*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e));return e+t+ot*102.9372+Math.PI}const Ur=e=>Math.asin(Math.sin(e)*Math.sin(Lr)),cn=(e,t,s)=>jo+e+.0053*Math.sin(t)-.0069*Math.sin(2*s),zr=(e,t,s)=>Math.acos((Math.sin(e)-Math.sin(t)*Math.sin(s))/(Math.cos(t)*Math.cos(s)));function Si(e,t,s){const i=ot*-s,n=ot*t,o=jr(e),a=Math.round(o-Vs-i/(2*Math.PI)),l=Vs+(0+i)/(2*Math.PI)+a,d=Fr(l),u=Br(d),p=Ur(u),m=cn(l,d,u),f=zr(Nr,n,p);if(Number.isNaN(f))return null;const x=cn(Vs+(f+i)/(2*Math.PI)+a,d,u),v=m-(x-m);return{sunrise:ln(v),sunset:ln(x)}}function Fo(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function Bo(e){const t=Wr[e];if(t)return{lat:t[0],lng:t[1]};let s=0;try{s=-new Date().getTimezoneOffset()/4}catch{s=0}return{lat:40,lng:s}}function Hr(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}}function qr(e,t=new Date){if(e==="dark")return!0;if(e==="light")return!1;const{lat:s,lng:i}=Bo(Fo()),n=Si(t,s,i);return n?t<n.sunrise||t>=n.sunset:Hr()}function Kr(e=new Date){const{lat:t,lng:s}=Bo(Fo()),i=Si(e,t,s);if(!i)return null;if(e<i.sunrise)return i.sunrise;if(e<i.sunset)return i.sunset;const n=Si(new Date(e.getTime()+zi),t,s);return n?n.sunrise:null}const Wr={"Asia/Kuala_Lumpur":[3.14,101.69],"Europe/Dublin":[53.33,-6.25],"Europe/Istanbul":[41.01,28.96],"Europe/Vienna":[48.21,16.37],"Europe/London":[51.51,-.13],"Europe/Lisbon":[38.72,-9.14],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Berlin":[52.52,13.41],"Europe/Rome":[41.9,12.5],"Europe/Athens":[37.98,23.73],"Europe/Moscow":[55.76,37.62],"America/New_York":[40.71,-74.01],"America/Chicago":[41.88,-87.63],"America/Denver":[39.74,-104.99],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Africa/Cairo":[30.04,31.24],"Asia/Jerusalem":[31.78,35.22],"Asia/Dubai":[25.2,55.27],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Bangkok":[13.76,100.5],"Asia/Jakarta":[-6.21,106.85],"Asia/Singapore":[1.35,103.82],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Tokyo":[35.68,139.69],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76]};var Gr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Rs=(e,t,s,i)=>{for(var n=i>1?void 0:i?Vr(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Gr(t,s,n),n};const Qr={house:"Workshop",mana:"Workshop","goals-advisor":"Goals","grocery-keeper":"Grocery","office-keeper":"Office","finance-keeper":"Finance","circle-keeper":"Circles","learn-coach":"Learn",publisher:"Publisher",companion:"Mana"};function dn(e){return e==="mana"||e==="house"?null:r`<span
    class="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium leading-none bg-hover text-muted"
    title=${Bi[e]}
  >
    ${Qr[e]??e}
  </span>`}function Yr(e){return new Date(e*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")}let Zt=class extends ${constructor(){super(...arguments),this.open=!1,this.query="",this.onDocClick=e=>{if(!this.open)return;const t=e.target;t&&this.contains(t)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=_(this,g,e=>e.threads),this.unsubCurrent=_(this,g,e=>e.currentThreadId),document.addEventListener("click",this.onDocClick),g.getState().loadThreads().then(()=>{const e=g.getState();if(e.currentThreadId==null){const t=e.threads.find(s=>s.persona==="house"&&s.closed_at==null);t&&e.selectThread(t.id)}}).catch(e=>{console.warn("[thread-list] loadThreads failed",e)})}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("click",this.onDocClick)}filtered(e){const t=this.query.trim().toLowerCase();return t?e.filter(s=>(s.title||"").toLowerCase().includes(t)):e}label(e){return e.title||Yr(e.started_at)}toggle(e){e.stopPropagation(),this.open=!this.open,this.open&&(this.query="",this.updateComplete.then(()=>this.searchInput?.focus()))}async onPick(e){this.open=!1,await g.getState().selectThread(e)}async onNew(){this.open=!1,await g.getState().selectThread(null)}onSearchKey(e){if(e.key==="Escape"){e.preventDefault(),this.open=!1;return}if(e.key==="Enter"){const s=this.filtered(g.getState().threads)[0];s&&this.onPick(s.id)}}render(){const{threads:e,currentThreadId:t}=g.getState(),s=t?e.find(o=>o.id===t)??null:null,i=s?this.label(s):"—",n=this.filtered(e);return r`
      <div class="thread-picker-wrap relative flex items-center gap-2 -mx-4 px-4 py-2">
        <button
          type="button"
          class="flex-1 min-w-0 flex items-center justify-between gap-2 px-3 py-1.5 rounded-md bg-bg text-ink text-sm hover:brightness-95 transition-all"
          aria-haspopup="listbox"
          aria-expanded="${this.open?"true":"false"}"
          @click=${this.toggle}
        >
          <span class="flex items-center gap-2 truncate text-left">
            ${s?dn(s.persona):null}
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
                              ${dn(o.persona)}
                              <span class="truncate">${this.label(o)}</span>
                            </span>
                          </li>
                        `)}
                </ul>
              </div>
            `:null}
      </div>
    `}};Rs([c()],Zt.prototype,"open",2);Rs([c()],Zt.prototype,"query",2);Rs([J("input[data-thread-search]")],Zt.prototype,"searchInput",2);Zt=Rs([k("thread-list")],Zt);function Hi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ft=Hi();function Uo(e){ft=e}var it={exec:()=>null};function kt(e){let t=[];return s=>{let i=Math.max(0,Math.min(3,s-1)),n=t[i];return n||(n=e(i),t[i]=n),n}}function I(e,t=""){let s=typeof e=="string"?e:e.source,i={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(ne.caret,"$1"),s=s.replace(n,a),i},getRegex:()=>new RegExp(s,t)};return i}var Jr=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:kt(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:kt(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:kt(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:kt(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:kt(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:kt(e=>new RegExp(`^ {0,${e}}>`))},Xr=/^(?:[ \t]*(?:\n|$))+/,Zr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ea=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,os=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ta=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,qi=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,zo=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ho=I(zo).replace(/bull/g,qi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),sa=I(zo).replace(/bull/g,qi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ki=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ia=/^[^\n]+/,Wi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,na=I(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Wi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),oa=I(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,qi).getRegex(),js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Gi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ra=I("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gi).replace("tag",js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qo=I(Ki).replace("hr",os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex(),aa=I(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",qo).getRegex(),Vi={blockquote:aa,code:Zr,def:na,fences:ea,heading:ta,hr:os,html:ra,lheading:Ho,list:oa,newline:Xr,paragraph:qo,table:it,text:ia},hn=I("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex(),la={...Vi,lheading:sa,table:hn,paragraph:I(Ki).replace("hr",os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",hn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex()},ca={...Vi,html:I(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Gi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:it,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:I(Ki).replace("hr",os).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ho).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},da=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ha=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ko=/^( {2,}|\\)\n(?!\s*$)/,ua=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pt=/[\p{P}\p{S}]/u,Fs=/[\s\p{P}\p{S}]/u,Qi=/[^\s\p{P}\p{S}]/u,pa=I(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Fs).getRegex(),Wo=/(?!~)[\p{P}\p{S}]/u,ma=/(?!~)[\s\p{P}\p{S}]/u,ga=/(?:[^\s\p{P}\p{S}]|~)/u,fa=I(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Jr?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Go=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ba=I(Go,"u").replace(/punct/g,Pt).getRegex(),xa=I(Go,"u").replace(/punct/g,Wo).getRegex(),Vo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",va=I(Vo,"gu").replace(/notPunctSpace/g,Qi).replace(/punctSpace/g,Fs).replace(/punct/g,Pt).getRegex(),ya=I(Vo,"gu").replace(/notPunctSpace/g,ga).replace(/punctSpace/g,ma).replace(/punct/g,Wo).getRegex(),wa=I("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Qi).replace(/punctSpace/g,Fs).replace(/punct/g,Pt).getRegex(),ka=I(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Pt).getRegex(),$a="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Sa=I($a,"gu").replace(/notPunctSpace/g,Qi).replace(/punctSpace/g,Fs).replace(/punct/g,Pt).getRegex(),Ca=I(/\\(punct)/,"gu").replace(/punct/g,Pt).getRegex(),Ta=I(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Da=I(Gi).replace("(?:-->|$)","-->").getRegex(),Ea=I("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Da).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),$s=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ia=I(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",$s).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qo=I(/^!?\[(label)\]\[(ref)\]/).replace("label",$s).replace("ref",Wi).getRegex(),Yo=I(/^!?\[(ref)\](?:\[\])?/).replace("ref",Wi).getRegex(),Aa=I("reflink|nolink(?!\\()","g").replace("reflink",Qo).replace("nolink",Yo).getRegex(),un=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Yi={_backpedal:it,anyPunctuation:Ca,autolink:Ta,blockSkip:fa,br:Ko,code:ha,del:it,delLDelim:it,delRDelim:it,emStrongLDelim:ba,emStrongRDelimAst:va,emStrongRDelimUnd:wa,escape:da,link:Ia,nolink:Yo,punctuation:pa,reflink:Qo,reflinkSearch:Aa,tag:Ea,text:ua,url:it},Pa={...Yi,link:I(/^!?\[(label)\]\((.*?)\)/).replace("label",$s).getRegex(),reflink:I(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$s).getRegex()},Ci={...Yi,emStrongRDelimAst:ya,emStrongLDelim:xa,delLDelim:ka,delRDelim:Sa,url:I(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",un).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:I(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",un).getRegex()},_a={...Ci,br:I(Ko).replace("{2,}","*").getRegex(),text:I(Ci.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ps={normal:Vi,gfm:la,pedantic:ca},Bt={normal:Yi,gfm:Ci,breaks:_a,pedantic:Pa},Ma={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pn=e=>Ma[e];function Me(e,t){if(t){if(ne.escapeTest.test(e))return e.replace(ne.escapeReplace,pn)}else if(ne.escapeTestNoEncode.test(e))return e.replace(ne.escapeReplaceNoEncode,pn);return e}function mn(e){try{e=encodeURI(e).replace(ne.percentDecode,"%")}catch{return null}return e}function gn(e,t){let s=e.replace(ne.findPipe,(o,a,l)=>{let d=!1,u=a;for(;--u>=0&&l[u]==="\\";)d=!d;return d?"|":" |"}),i=s.split(ne.splitPipe),n=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(ne.slashPipe,"|");return i}function Ge(e,t,s){let i=e.length;if(i===0)return"";let n=0;for(;n<i&&e.charAt(i-n-1)===t;)n++;return e.slice(0,i-n)}function fn(e){let t=e.split(`
`),s=t.length-1;for(;s>=0&&ne.blankLine.test(t[s]);)s--;return t.length-s<=2?e:t.slice(0,s+1).join(`
`)}function Oa(e,t){if(e.indexOf(t[1])===-1)return-1;let s=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])s++;else if(e[i]===t[1]&&(s--,s<0))return i;return s>0?-2:-1}function La(e,t=0){let s=t,i="";for(let n of e)if(n==="	"){let o=4-s%4;i+=" ".repeat(o),s+=o}else i+=n,s++;return i}function bn(e,t,s,i,n){let o=t.href,a=t.title||null,l=e[1].replace(n.other.outputLinkReplace,"$1");i.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:s,href:o,title:a,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,d}function Na(e,t,s){let i=e.match(s.other.indentCodeCompensation);if(i===null)return t;let n=i[1];return t.split(`
`).map(o=>{let a=o.match(s.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=n.length?o.slice(n.length):o}).join(`
`)}var Ss=class{options;rules;lexer;constructor(e){this.options=e||ft}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let s=this.options.pedantic?t[0]:fn(t[0]),i=s.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s,codeBlockStyle:"indented",text:i}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let s=t[0],i=Na(s,t[3]||"",this.rules);return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(this.rules.other.endingHash.test(s)){let i=Ge(s,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(s=i.trim())}return{type:"heading",raw:Ge(t[0],`
`),depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ge(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let s=Ge(t[0],`
`).split(`
`),i="",n="",o=[];for(;s.length>0;){let a=!1,l=[],d;for(d=0;d<s.length;d++)if(this.rules.other.blockquoteStart.test(s[d]))l.push(s[d]),a=!0;else if(!a)l.push(s[d]);else break;s=s.slice(d);let u=l.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,n=n?`${n}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=m,s.length===0)break;let f=o.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let x=f,v=x.raw+`
`+s.join(`
`),M=this.blockquote(v);o[o.length-1]=M,i=i.substring(0,i.length-x.raw.length)+M.raw,n=n.substring(0,n.length-x.text.length)+M.text;break}else if(f?.type==="list"){let x=f,v=x.raw+`
`+s.join(`
`),M=this.list(v);o[o.length-1]=M,i=i.substring(0,i.length-f.raw.length)+M.raw,n=n.substring(0,n.length-x.raw.length)+M.raw,s=v.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),i=s.length>1,n={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let o=this.rules.other.listItemRegex(s),a=!1;for(;e;){let d=!1,u="",p="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let m=La(t[2].split(`
`,1)[0],t[1].length),f=e.split(`
`,1)[0],x=!m.trim(),v=0;if(this.options.pedantic?(v=2,p=m.trimStart()):x?v=t[1].length+1:(v=m.search(this.rules.other.nonSpaceChar),v=v>4?1:v,p=m.slice(v),v+=t[1].length),x&&this.rules.other.blankLine.test(f)&&(u+=f+`
`,e=e.substring(f.length+1),d=!0),!d){let M=this.rules.other.nextBulletRegex(v),je=this.rules.other.hrRegex(v),jt=this.rules.other.fencesBeginRegex(v),nn=this.rules.other.headingBeginRegex(v),yr=this.rules.other.htmlBeginRegex(v),wr=this.rules.other.blockquoteBeginRegex(v);for(;e;){let Ws=e.split(`
`,1)[0],Ft;if(f=Ws,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),Ft=f):Ft=f.replace(this.rules.other.tabCharGlobal,"    "),jt.test(f)||nn.test(f)||yr.test(f)||wr.test(f)||M.test(f)||je.test(f))break;if(Ft.search(this.rules.other.nonSpaceChar)>=v||!f.trim())p+=`
`+Ft.slice(v);else{if(x||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||jt.test(m)||nn.test(m)||je.test(m))break;p+=`
`+f}x=!f.trim(),u+=Ws+`
`,e=e.substring(Ws.length+1),m=Ft.slice(v)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=u}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let d of n.items){this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]);let u=d.tokens[0];if(d.task&&(u?.type==="text"||u?.type==="paragraph")){d.text=d.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(d.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};d.checked=m.checked,n.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=m.raw+d.tokens[0].raw,d.tokens[0].text=m.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(m)):d.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):d.tokens.unshift(m)}}else d.task&&(d.task=!1);if(!n.loose){let p=d.tokens.filter(f=>f.type==="space"),m=p.length>0&&p.some(f=>this.rules.other.anyLine.test(f.raw));n.loose=m}}if(n.loose)for(let d of n.items){d.loose=!0;for(let u of d.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(e){let t=this.rules.block.html.exec(e);if(t){let s=fn(t[0]);return{type:"html",block:!0,raw:s,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:s}}}def(e){let t=this.rules.block.def.exec(e);if(t){let s=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:Ge(t[0],`
`),href:i,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let s=gn(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:Ge(t[0],`
`),header:[],align:[],rows:[]};if(s.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<s.length;a++)o.header.push({text:s[a],tokens:this.lexer.inline(s[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(gn(a,o.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[d]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let s=t[1].trim();return{type:"heading",raw:Ge(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=Ge(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=Oa(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],n=o[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),bn(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[i.toLowerCase()];if(!n){let o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return bn(s,n,s[0],this.lexer,this.rules)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,l=n,d=0,u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+n);(i=u.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=[...o].length,i[3]||i[4]){l+=a;continue}else if((i[5]||i[6])&&n%3&&!((n+a)%3)){d+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+d);let p=[...i[0]][0].length,m=e.slice(0,n+i.index+p+a);if(Math.min(n,a)%2){let x=m.slice(1,-1);return{type:"em",raw:m,text:x,tokens:this.lexer.inlineTokens(x)}}let f=m.slice(2,-2);return{type:"strong",raw:m,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return i&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:t[0],text:s}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,s=""){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,l=n,d=this.rules.inline.delRDelim;for(d.lastIndex=0,t=t.slice(-1*e.length+n);(i=d.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(a=[...o].length,a!==n))continue;if(i[3]||i[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let u=[...i[0]][0].length,p=e.slice(0,n+i.index+u+a),m=p.slice(n,-n);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let s,i;return t[2]==="@"?(s=t[1],i="mailto:"+s):(s=t[1],i=s),{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=t[0],i="mailto:"+s;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);s=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let s=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:s}}}},Ce=class Ti{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||ft,this.options.tokenizer=this.options.tokenizer||new Ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:ne,block:ps.normal,inline:Bt.normal};this.options.pedantic?(s.block=ps.pedantic,s.inline=Bt.pedantic):this.options.gfm&&(s.block=ps.gfm,this.options.breaks?s.inline=Bt.breaks:s.inline=Bt.gfm),this.tokenizer.rules=s}static get rules(){return{block:ps,inline:Bt}}static lex(t,s){return new Ti(s).lex(t)}static lexInline(t,s){return new Ti(s).inlineTokens(t)}lex(t){t=t.replace(ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let i=this.inlineQueue[s];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,s=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(ne.tabCharGlobal,"    ").replace(ne.spaceLine,""));let n=1/0;for(;t;){if(t.length<n)n=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(l=>(o=l.call({lexer:this},t,s))?(t=t.substring(o.raw.length),s.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let l=s.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:s.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let l=s.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):s.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let l=s.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},s.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),s.push(o);continue}let a=t;if(this.options.extensions?.startBlock){let l=1/0,d=t.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},d),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(a=t.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let l=s.at(-1);i&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):s.push(o),i=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let l=s.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):s.push(o);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,s}inline(t,s=[]){return this.inlineQueue.push({src:t,tokens:s}),s}inlineTokens(t,s=[]){this.tokenizer.lexer=this;let i=t,n=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)u.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,n.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)o=n[2]?n[2].length:0,i=i.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,l="",d=1/0;for(;t;){if(t.length<d)d=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}a||(l=""),a=!1;let u;if(this.options.extensions?.inline?.some(m=>(u=m.call({lexer:this},t,s))?(t=t.substring(u.raw.length),s.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let m=s.at(-1);u.type==="text"&&m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):s.push(u);continue}if(u=this.tokenizer.emStrong(t,i,l)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.del(t,i,l)){t=t.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),s.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),s.push(u);continue}let p=t;if(this.options.extensions?.startInline){let m=1/0,f=t.slice(1),x;this.options.extensions.startInline.forEach(v=>{x=v.call({lexer:this},f),typeof x=="number"&&x>=0&&(m=Math.min(m,x))}),m<1/0&&m>=0&&(p=t.substring(0,m+1))}if(u=this.tokenizer.inlineText(p)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),a=!0;let m=s.at(-1);m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):s.push(u);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return s}infiniteLoopError(t){let s="Infinite loop on byte: "+t;if(this.options.silent)console.error(s);else throw new Error(s)}},Cs=class{options;parser;constructor(e){this.options=e||ft}space(e){return""}code({text:e,lang:t,escaped:s}){let i=(t||"").match(ne.notSpaceStart)?.[0],n=e.replace(ne.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Me(i)+'">'+(s?n:Me(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Me(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,s=e.start,i="";for(let a=0;a<e.items.length;a++){let l=e.items[a];i+=this.listitem(l)}let n=t?"ol":"ul",o=t&&s!==1?' start="'+s+'"':"";return"<"+n+o+`>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Me(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:s}){let i=this.parser.parseInline(s),n=mn(e);if(n===null)return i;e=n;let o='<a href="'+e+'"';return t&&(o+=' title="'+Me(t)+'"'),o+=">"+i+"</a>",o}image({href:e,title:t,text:s,tokens:i}){i&&(s=this.parser.parseInline(i,this.parser.textRenderer));let n=mn(e);if(n===null)return Me(s);e=n;let o=`<img src="${e}" alt="${Me(s)}"`;return t&&(o+=` title="${Me(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Me(e.text)}},Ji=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Te=class Di{options;renderer;textRenderer;constructor(t){this.options=t||ft,this.options.renderer=this.options.renderer||new Cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ji}static parse(t,s){return new Di(s).parse(t)}static parseInline(t,s){return new Di(s).parseInline(t)}parse(t){this.renderer.parser=this;let s="";for(let i=0;i<t.length;i++){let n=t[i];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){s+=l||"";continue}}let o=n;switch(o.type){case"space":{s+=this.renderer.space(o);break}case"hr":{s+=this.renderer.hr(o);break}case"heading":{s+=this.renderer.heading(o);break}case"code":{s+=this.renderer.code(o);break}case"table":{s+=this.renderer.table(o);break}case"blockquote":{s+=this.renderer.blockquote(o);break}case"list":{s+=this.renderer.list(o);break}case"checkbox":{s+=this.renderer.checkbox(o);break}case"html":{s+=this.renderer.html(o);break}case"def":{s+=this.renderer.def(o);break}case"paragraph":{s+=this.renderer.paragraph(o);break}case"text":{s+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(t,s=this.renderer){this.renderer.parser=this;let i="";for(let n=0;n<t.length;n++){let o=t[n];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=l||"";continue}}let a=o;switch(a.type){case"escape":{i+=s.text(a);break}case"html":{i+=s.html(a);break}case"link":{i+=s.link(a);break}case"image":{i+=s.image(a);break}case"checkbox":{i+=s.checkbox(a);break}case"strong":{i+=s.strong(a);break}case"em":{i+=s.em(a);break}case"codespan":{i+=s.codespan(a);break}case"br":{i+=s.br(a);break}case"del":{i+=s.del(a);break}case"text":{i+=s.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},Qt=class{options;block;constructor(e){this.options=e||ft}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ce.lex:Ce.lexInline}provideParser(e=this.block){return e?Te.parse:Te.parseInline}},Jo=class{defaults=Hi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Te;Renderer=Cs;TextRenderer=Ji;Lexer=Ce;Tokenizer=Ss;Hooks=Qt;constructor(...e){this.use(...e)}walkTokens(e,t){let s=[];for(let i of e)switch(s=s.concat(t.call(this,i)),i.type){case"table":{let n=i;for(let o of n.header)s=s.concat(this.walkTokens(o.tokens,t));for(let o of n.rows)for(let a of o)s=s.concat(this.walkTokens(a.tokens,t));break}case"list":{let n=i;s=s.concat(this.walkTokens(n.items,t));break}default:{let n=i;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);s=s.concat(this.walkTokens(a,t))}):n.tokens&&(s=s.concat(this.walkTokens(n.tokens,t)))}}return s}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{let i={...s};if(i.async=this.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=t.renderers[n.name];o?t.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[n.level];o?o.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),i.extensions=t),s.renderer){let n=this.defaults.renderer||new Cs(this.defaults);for(let o in s.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=s.renderer[a],d=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=d.apply(n,u)),p||""}}i.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new Ss(this.defaults);for(let o in s.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=s.tokenizer[a],d=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=d.apply(n,u)),p}}i.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new Qt;for(let o in s.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=s.hooks[a],d=n[a];Qt.passThroughHooks.has(o)?n[a]=u=>{if(this.defaults.async&&Qt.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await l.call(n,u);return d.call(n,m)})();let p=l.call(n,u);return d.call(n,p)}:n[a]=(...u)=>{if(this.defaults.async)return(async()=>{let m=await l.apply(n,u);return m===!1&&(m=await d.apply(n,u)),m})();let p=l.apply(n,u);return p===!1&&(p=d.apply(n,u)),p}}i.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,o=s.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),n&&(l=l.concat(n.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ce.lex(e,t??this.defaults)}parser(e,t){return Te.parse(e,t??this.defaults)}parseMarkdown(e){return(t,s)=>{let i={...s},n={...this.defaults,...i},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(t):t,l=await(n.hooks?await n.hooks.provideLexer(e):e?Ce.lex:Ce.lexInline)(a,n),d=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(d,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser(e):e?Te.parse:Te.parseInline)(d,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));let a=(n.hooks?n.hooks.provideLexer(e):e?Ce.lex:Ce.lexInline)(t,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(e):e?Te.parse:Te.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+Me(s.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(s);throw s}}},rt=new Jo;function O(e,t){return rt.parse(e,t)}O.options=O.setOptions=function(e){return rt.setOptions(e),O.defaults=rt.defaults,Uo(O.defaults),O};O.getDefaults=Hi;O.defaults=ft;O.use=function(...e){return rt.use(...e),O.defaults=rt.defaults,Uo(O.defaults),O};O.walkTokens=function(e,t){return rt.walkTokens(e,t)};O.parseInline=rt.parseInline;O.Parser=Te;O.parser=Te.parse;O.Renderer=Cs;O.TextRenderer=Ji;O.Lexer=Ce;O.lexer=Ce.lex;O.Tokenizer=Ss;O.Hooks=Qt;O.parse=O;O.options;O.setOptions;O.use;O.walkTokens;O.parseInline;Te.parse;Ce.lex;const Ra=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ja=new Jo({gfm:!0,renderer:{html(e){return Ra(e.text)}}}),Fa=new Set(["p","br","hr","strong","b","em","i","del","s","code","pre","kbd","sup","sub","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","table","thead","tbody","tr","th","td","input","span"]),Ba=new Set(["script","style","iframe","object","embed","template","noscript","svg","math","form","textarea","select","button"]),Ua=/^(https?:|mailto:|\/|#|\.{0,2}\/)/i,za=/^(https?:|\/|data:image\/(png|jpe?g|gif|webp);)/i;function Ha(e){const t=e.tagName.toLowerCase();for(const s of Array.from(e.attributes)){const i=s.name.toLowerCase(),n=s.value.trim();let o=!1;t==="a"&&i==="href"?o=Ua.test(n):t==="a"&&i==="title"?o=!0:t==="img"&&i==="src"?o=za.test(n):t==="img"&&(i==="alt"||i==="title")?o=!0:t==="ol"&&i==="start"?o=/^\d+$/.test(n):(t==="th"||t==="td")&&i==="align"?o=/^(left|right|center)$/.test(n):t==="code"&&i==="class"?o=/^language-[\w+-]+$/.test(n):t==="input"&&(i==="type"||i==="checked"||i==="disabled")&&(o=i!=="type"||n==="checkbox"),o||e.removeAttribute(s.name)}t==="a"&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")),t==="input"&&e.setAttribute("disabled","")}function qa(e){const t=document.createElement("template");t.innerHTML=e;const s=i=>{for(const n of Array.from(i.children)){const o=n.tagName.toLowerCase();if(Ba.has(o)){n.remove();continue}if(s(n),!Fa.has(o)||o==="input"&&n.getAttribute("type")!=="checkbox"){n.replaceWith(...Array.from(n.childNodes));continue}Ha(n)}};return s(t.content),t.innerHTML}function Ka(e){return qa(ja.parse(e,{async:!1}))}var Wa=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,rs=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ga(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Wa(t,s,n),n};function Va(e){if(!e)return;const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);cursor:zoom-out;padding:2rem;opacity:0;transition:opacity .12s ease;";const s=document.createElement("img");s.src=e,s.style.cssText="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.5);",t.appendChild(s);const i=()=>{t.remove(),document.removeEventListener("keydown",n)},n=o=>{o.key==="Escape"&&i()};t.addEventListener("click",i),document.addEventListener("keydown",n),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"})}let Et=class extends ${constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[],this.pending=!1}renderBody(){return this.content?this.chatRole==="mentor"?r`<div class="chat-md">${X(Ka(this.content))}</div>`:r`<span class="whitespace-pre-wrap break-words">${this.content}</span>`:this.chatRole==="mentor"&&this.pending?r`<span
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
              @click=${()=>Va(e.url)}
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
    `}};rs([b()],Et.prototype,"chatRole",2);rs([b()],Et.prototype,"content",2);rs([b({type:Array})],Et.prototype,"attachments",2);rs([b({type:Boolean})],Et.prototype,"pending",2);Et=rs([k("chat-message")],Et);var Qa=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Bs=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ya(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Qa(t,s,n),n};function Ja(e){return new Date(e*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let es=class extends ${constructor(){super(...arguments),this.live=[],this.pending=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=e=>{const t=e.detail;if(!t)return;const s=`live_user_${Date.now()}`,i=`live_mentor_${Date.now()}`;this.liveMentorId=i,this.frozenMessages||(this.frozenMessages=g.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.text,attachments:t.attachments.map(n=>({url:n.url}))},{id:i,role:"mentor",content:"",attachments:[]}],t.liveDetail.append=n=>this.appendToMentor(i,n),t.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onQueueAdd=e=>{const t=e.detail;t&&(this.pending=[...this.pending,{id:t.id,text:t.text,attachments:t.attachments??[]}],this.updateComplete.then(()=>this.scrollToBottom()))},this.onQueueRemove=e=>{const t=e.detail?.id;t&&(this.pending=this.pending.filter(s=>s.id!==t))},this.onQueueClear=()=>{this.pending=[]},this.onSlashMessage=e=>{const t=e.detail;if(!t)return;const s=`slash_user_${Date.now()}`,i=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=g.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.user,attachments:[]},{id:i,role:"mentor",content:t.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(e,t){this.live=this.live.map(i=>i.id===e?{...i,content:i.content+t}:i);const s=this.renderRoot.querySelector(`chat-message[data-live-id="${e}"]`);s&&(s.content=(s.content||"")+t),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const e=this.scroller;e&&(e.scrollTop=e.scrollHeight)}createRenderRoot(){const e=super.createRenderRoot();return this.style.display="block",e}connectedCallback(){super.connectedCallback(),this.unsubMessages=_(this,g,e=>e.messages),this.unsubCurrent=_(this,g,e=>e.currentThreadId),this.unsubThreads=_(this,g,e=>e.threads),this.unsubMode=_(this,g,e=>e.rightPaneMode),this.prevThreadId=g.getState().currentThreadId,g.subscribe((e,t)=>{e.messages!==t.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.live=[],this.pending=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage),document.addEventListener("queue-add",this.onQueueAdd),document.addEventListener("queue-remove",this.onQueueRemove),document.addEventListener("queue-clear",this.onQueueClear)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage),document.removeEventListener("queue-add",this.onQueueAdd),document.removeEventListener("queue-remove",this.onQueueRemove),document.removeEventListener("queue-clear",this.onQueueClear)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(e){const t=e.tool_calls;return t&&Array.isArray(t.attachments)?t.attachments:[]}mapRole(e){return e.role==="user"?"user":(e.role==="mentor","mentor")}render(){const e=g.getState(),{threads:t,currentThreadId:s}=e,i=this.frozenMessages??e.messages;Bi[No(e)];const n=s?t.find(o=>o.id===s)??null:null;return r`
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
            ${n&&i.length?r`<div class="text-center text-xs text-muted -mb-3">${Ja(n.started_at)}</div>`:null}
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
    `}};Bs([c()],es.prototype,"live",2);Bs([c()],es.prototype,"pending",2);Bs([J("[data-scroll]")],es.prototype,"scroller",2);es=Bs([k("chat-pane")],es);async function*Xo(e){{yield*el(e);return}}const Xa="https://serdarsalim.com",xn=`[Get your own Mana →](${Xa})`;function Za(e,t){const s={"goals-advisor":"Add a goal, give it a key result, or tick off a weekly task.","grocery-keeper":"Add something to Shopping and move it to the pantry when it is bought.","finance-keeper":"Log an expense, adjust a category budget, or record an account balance.","circle-keeper":"Open a person, add a note, or put them in more than one circle.","office-keeper":"Open a sample project and read the handoffs in its inbox.","learn-coach":"Open a sample skill, finish a lesson, or try a review question.",publisher:"Write a post, link its proof, add a voice sample, or try the publishing planner. Posting to LinkedIn is off here.",mana:"Open Notes and write, format, pin, search, or restore a note."};return t===1?`This chat is scripted. No AI model is connected, and it cannot change your tools.

${s[e]??"The tools work by hand, with fictional sample data."} Your edits stay in this browser.

${xn}`:t%2===0?`In your own Mana, a connected model can work with your tools by chat or voice. This demo only shows a scripted reply.

${s[e]??"Try Goals, Finance, Circles, Learn, Notes or Publisher from the sidebar."}`:`Keep exploring the tools. You can edit the sample data and reset it from Settings whenever you want.

${xn}`}async function*el(e){const{t}=await Ue(async()=>{const{t:m}=await import("./tables-D2emgc0r.js");return{t:m}},__vite__mapDeps([0,1])),{now:s}=await Ue(async()=>{const{now:m}=await import("./db-DHWx8Fue.js");return{now:m}},[]);let i=e.threadId??null;if(i==null){const m=s();i=t.threads.insert({title:e.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:e.persona??"goals-advisor",focus_goal_id:null,started_at:m,last_msg_at:m,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${m}`}}).id,yield{type:"thread",threadId:i}}t.messages.insert({thread_id:i,role:"user",content:e.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const n=t.threads.get(i)?.persona??e.persona??"goals-advisor",o=t.messages.where(m=>m.thread_id===i&&m.role==="user").length,a=Za(n,o),l=m=>new Promise(f=>setTimeout(f,m));await l(250);const d=a.match(/\S+\s*/g)??[a],u=3;for(let m=0;m<d.length&&!e.signal?.aborted;m+=u)yield{type:"text",text:d.slice(m,m+u).join("")},await l(45);t.messages.insert({thread_id:i,role:"mentor",content:a,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const p=t.threads.get(i);p&&t.threads.update(i,{last_msg_at:s(),title:p.title||e.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}const Us=[{id:"claude-opus-5-5",label:"Opus 5.5",short:"Opus",provider:"anthropic",contextWindow:1e6,note:"default"},{id:"claude-fable-5-1",label:"Fable 5.1",short:"Fable",provider:"anthropic",contextWindow:1e6,note:"deepest"},{id:"claude-sonnet-5-5",label:"Sonnet 5.5",short:"Sonnet",provider:"anthropic",contextWindow:1e6},{id:"claude-haiku-4-5-20251001",label:"Haiku 4.5",short:"Haiku",provider:"anthropic",contextWindow:2e5,note:"fastest"},{id:"gpt-6.1-sol",label:"GPT-6.1 Sol",short:"GPT Sol",provider:"openai",contextWindow:272e3},{id:"gpt-6-astra",label:"GPT-6 Astra",short:"GPT Astra",provider:"openai",contextWindow:272e3,note:"deepest GPT"},{id:"gpt-6-luna",label:"GPT-6 Luna",short:"GPT Luna",provider:"openai",contextWindow:272e3,note:"fast"}],tl="claude-opus-5-5",sl={"claude-opus-4-8":"claude-opus-5-5","claude-opus-5":"claude-opus-5-5","claude-sonnet-5":"claude-sonnet-5-5","claude-fable-5":"claude-fable-5-1","claude-haiku-4-5":"claude-haiku-4-5-20251001","gpt-5.6-sol":"gpt-6.1-sol","gpt-5.6-terra":"gpt-6-luna"};function Tt(e){return e?sl[e]||e:tl}function ts(e){const t=Tt(e);return Us.find(s=>s.id===t)}function il(e){const t=ts(e);return t?t.contextWindow:Tt(e).startsWith("gpt")?272e3:2e5}const Ts="claude-sonnet-5-5";function nl(e){const t=e?ts(e):void 0;return t?.provider==="anthropic"?t.id:Ts}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=_o(class extends Mo{constructor(e){if(super(e),e.type!==Oo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Lo}});var ol=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,me=(e,t,s,i)=>{for(var n=i>1?void 0:i?rl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ol(t,s,n),n};let oe=class extends ke{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const e=!!this.href,t=Ds({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),s=r`
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
    </button>`}};oe.styles=Ae`
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
  `;me([b({reflect:!0})],oe.prototype,"variant",2);me([b({reflect:!0})],oe.prototype,"size",2);me([b({type:Boolean,reflect:!0})],oe.prototype,"caret",2);me([b({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);me([b({type:Boolean,reflect:!0})],oe.prototype,"loading",2);me([b({type:Boolean,reflect:!0})],oe.prototype,"pill",2);me([b({type:Boolean,reflect:!0})],oe.prototype,"circle",2);me([b()],oe.prototype,"type",2);me([b()],oe.prototype,"name",2);me([b()],oe.prototype,"value",2);me([b()],oe.prototype,"href",2);me([b()],oe.prototype,"target",2);me([b()],oe.prototype,"rel",2);oe=me([k("sc-button")],oe);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,as=(e,t,s,i)=>{for(var n=i>1?void 0:i?ll(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&al(t,s,n),n};let at=class extends ke{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=e=>{e.target===this.dialogEl&&this.hide()}}updated(e){e.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
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
    `}};at.styles=Ae`
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
  `;as([b({type:Boolean,reflect:!0})],at.prototype,"open",2);as([b()],at.prototype,"label",2);as([b({attribute:"no-header",type:Boolean})],at.prototype,"noHeader",2);as([J("dialog")],at.prototype,"dialogEl",2);at=as([k("sc-dialog")],at);var cl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,zs=(e,t,s,i)=>{for(var n=i>1?void 0:i?dl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&cl(t,s,n),n};let It=class extends ke{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return r`
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
    `}};It.styles=Ae`
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
  `;zs([b({type:Boolean,reflect:!0})],It.prototype,"active",2);zs([b()],It.prototype,"placement",2);zs([b({type:Number})],It.prototype,"distance",2);It=zs([k("sc-popup")],It);var hl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,bt=(e,t,s,i)=>{for(var n=i>1?void 0:i?ul(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&hl(t,s,n),n};let ze=class extends ke{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=e=>{e.stopPropagation(),this.toggle()},this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.hide())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return r`
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
    `}};ze.styles=Ae`
    :host {
      display: inline-block;
    }
  `;bt([b({type:Boolean,reflect:!0})],ze.prototype,"open",2);bt([b()],ze.prototype,"placement",2);bt([b({type:Number})],ze.prototype,"distance",2);bt([b({type:Boolean,attribute:"stay-open-on-select"})],ze.prototype,"stayOpenOnSelect",2);bt([b({type:Boolean})],ze.prototype,"disabled",2);bt([J("sc-popup")],ze.prototype,"popup",2);ze=bt([k("sc-dropdown")],ze);var pl=Object.getOwnPropertyDescriptor,ml=(e,t,s,i)=>{for(var n=i>1?void 0:i?pl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Ei=class extends ke{constructor(){super(...arguments),this.onClick=e=>{const t=e.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-menu-item");!t||t.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:t}}))},this.onKeydown=e=>{const t=this.items().filter(n=>!n.disabled);if(!t.length)return;const s=document.activeElement,i=s?t.indexOf(s):-1;e.key==="ArrowDown"?(e.preventDefault(),t[(i+1)%t.length]?.focus()):e.key==="ArrowUp"?(e.preventDefault(),t[(i-1+t.length)%t.length]?.focus()):(e.key==="Enter"||e.key===" ")&&s&&s.tagName.toLowerCase()==="sc-menu-item"&&(e.preventDefault(),s.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return r`<slot></slot>`}};Ei.styles=Ae`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;Ei=ml([k("sc-menu")],Ei);var gl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,ls=(e,t,s,i)=>{for(var n=i>1?void 0:i?fl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&gl(t,s,n),n};let lt=class extends ke{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return r`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};lt.styles=Ae`
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
  `;ls([b({reflect:!0})],lt.prototype,"type",2);ls([b({reflect:!0})],lt.prototype,"value",2);ls([b({type:Boolean,reflect:!0})],lt.prototype,"checked",2);ls([b({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);lt=ls([k("sc-menu-item")],lt);var bl=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,V=(e,t,s,i)=>{for(var n=i>1?void 0:i?xl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&bl(t,s,n),n};let H=class extends ke{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=e=>{this.value=e.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const e=this.type==="password"&&this.passwordVisible?"text":this.type;return r`
      <div class="form-control">
        ${this.label?r`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${Ds({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
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
    `}};H.styles=Ae`
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
  `;V([b()],H.prototype,"value",2);V([b()],H.prototype,"type",2);V([b()],H.prototype,"size",2);V([b()],H.prototype,"placeholder",2);V([b()],H.prototype,"label",2);V([b({attribute:"help-text"})],H.prototype,"helpText",2);V([b()],H.prototype,"name",2);V([b({type:Boolean,reflect:!0})],H.prototype,"disabled",2);V([b({type:Boolean,reflect:!0})],H.prototype,"readonly",2);V([b({type:Boolean,reflect:!0})],H.prototype,"required",2);V([b({type:Boolean})],H.prototype,"clearable",2);V([b({type:Boolean,attribute:"password-toggle"})],H.prototype,"passwordToggle",2);V([b()],H.prototype,"autocomplete",2);V([b({type:Number})],H.prototype,"minlength",2);V([b({type:Number})],H.prototype,"maxlength",2);V([b()],H.prototype,"pattern",2);V([c()],H.prototype,"passwordVisible",2);V([J("input")],H.prototype,"input",2);H=V([k("sc-input")],H);var vl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,$e=(e,t,s,i)=>{for(var n=i>1?void 0:i?yl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&vl(t,s,n),n};let he=class extends ke{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.close())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=e=>{const s=e.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-option");!s||s.disabled||(this.value=s.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=e=>{e.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=e=>{(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(e){e.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let e="";for(const t of this.options()){const s=t.value===this.value;t.selected=s,s&&(e=t.getTextLabel())}this.displayLabel=e}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const e=!!this.value;return r`
      <div class="form-control">
        ${this.label?r`<label class="label">${this.label}</label>`:null}
        <div
          class=${Ds({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${Ds({display:!0,placeholder:!e})}
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
    `}};he.styles=Ae`
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
  `;$e([b()],he.prototype,"value",2);$e([b()],he.prototype,"placeholder",2);$e([b()],he.prototype,"size",2);$e([b()],he.prototype,"label",2);$e([b({attribute:"help-text"})],he.prototype,"helpText",2);$e([b()],he.prototype,"name",2);$e([b({type:Boolean,reflect:!0})],he.prototype,"disabled",2);$e([b({type:Boolean})],he.prototype,"clearable",2);$e([b({type:Boolean,reflect:!0})],he.prototype,"open",2);$e([c()],he.prototype,"displayLabel",2);$e([J(".combobox")],he.prototype,"combobox",2);he=$e([k("sc-select")],he);var wl=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,cs=(e,t,s,i)=>{for(var n=i>1?void 0:i?kl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&wl(t,s,n),n};let ct=class extends ke{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};ct.styles=Ae`
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
  `;cs([b()],ct.prototype,"value",2);cs([b({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);cs([b({type:Boolean,reflect:!0})],ct.prototype,"selected",2);cs([b({type:Boolean,reflect:!0})],ct.prototype,"current",2);ct=cs([k("sc-option")],ct);var $l=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,xt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Sl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&$l(t,s,n),n};let He=class extends ke{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.show():e.type.startsWith("focus")&&t.has("focus")&&this.show()},this.onLeave=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.hide():e.type.startsWith("focus")&&t.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};He.styles=Ae`
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
  `;xt([b()],He.prototype,"content",2);xt([b()],He.prototype,"placement",2);xt([b({type:Boolean,reflect:!0})],He.prototype,"disabled",2);xt([b()],He.prototype,"trigger",2);xt([b({type:Number})],He.prototype,"distance",2);xt([b({type:Boolean,reflect:!0})],He.prototype,"open",2);He=xt([k("sc-tooltip")],He);var Cl=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Zo=(e,t,s,i)=>{for(var n=i>1?void 0:i?Tl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Cl(t,s,n),n};let Ii=class extends ${constructor(){super(...arguments),this.items=[]}onRemove(e){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:e},bubbles:!0,composed:!0}))}isPdf(e){return e.file?.type==="application/pdf"||(e.dataUrl?.startsWith("data:application/pdf")??!1)||(e.url?.endsWith(".pdf")??!1)}isSheet(e){return/\.(xlsx|xls|csv)$/i.test(e.file?.name??"")||/\.(xlsx|xls|csv)$/i.test(e.url??"")}render(){return this.items.length?r`
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
    `:r``}};Zo([b({type:Array})],Ii.prototype,"items",2);Ii=Zo([k("attachment-tray")],Ii);var Dl=Object.defineProperty,El=Object.getOwnPropertyDescriptor,Pe=(e,t,s,i)=>{for(var n=i>1?void 0:i?El(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Dl(t,s,n),n};const Il=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Workshop thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Workshop AND sends in one shot — useful when you're inside an app and want Workshop to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function vn(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}const Al=/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i;function yn(e){const t=e.type||"";return t.startsWith("image/")||t==="application/pdf"||t==="text/csv"||t==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||t==="application/vnd.ms-excel"?!0:Al.test(e.name)}function Pl(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result)),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}function _l(e){const t=Us.map(s=>({id:s.id,label:s.label,short:s.short}));return t.some(s=>s.id===e)||t.push({id:e,label:e,short:e}),t}let we=class extends ${constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.showUsage=!1,this.usage=[],this.turnsCompleted=0,this.model=Tt(g.getState().settings["cockpit.mentor_model"]),this.inputFocused=!1,this.prevThreadId=null,this.onGlobalKeyDown=e=>{(e.metaKey||e.ctrlKey)&&(e.key==="n"||e.key==="N"||e.key==="k"||e.key==="K")&&(e.preventDefault(),g.getState().selectThread(null),this.updateComplete.then(()=>this.textarea?.focus()))},this.onChatAttach=e=>{const s=e.detail?.files??[];(async()=>{for(const i of s)await this.uploadFile(i,!1)})()},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=_(this,g,e=>e.currentThreadId),this.prevThreadId=g.getState().currentThreadId,g.subscribe(e=>{e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.attachments=[],this.usage=[],this.turnsCompleted=0,this.showUsage=!1);const t=Tt(e.settings["cockpit.mentor_model"]);t!==this.model&&(this.model=t)}),document.addEventListener("chat-attach",this.onChatAttach),document.addEventListener("keydown",this.onGlobalKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach),document.removeEventListener("keydown",this.onGlobalKeyDown)}async uploadFile(e,t){const s=await Pl(e),i={localId:vn(),file:e,dataUrl:s,uploaded:!1,ephemeral:t};this.attachments=[...this.attachments,i];try{const n=await S.uploads.upload(s,t,e.name);this.attachments=this.attachments.map(o=>o.localId===i.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==i.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(e){const t=e.target,s=Array.from(t.files??[]);for(const i of s)await this.uploadFile(i,!1);t.value=""}async onPaste(e){const t=e.clipboardData?.items??[],s=[];for(const i of Array.from(t))if(i.kind==="file"){const n=i.getAsFile();n&&yn(n)&&s.push(n)}if(s.length){e.preventDefault();for(const i of s)await this.uploadFile(i,!1)}}onDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}async onDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(yn);if(t.length){e.preventDefault();for(const s of t)await this.uploadFile(s,!1)}}onTrayRemove(e){const t=e.detail.localId;this.attachments=this.attachments.filter(s=>s.localId!==t)}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(e){const t=e.target;this.text=t.value,t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,240)}px`,t.style.overflowY=t.scrollHeight>240?"auto":"hidden"}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.send())}async handleSlash(e){const[t,...s]=e.slice(1).trim().split(/\s+/),i=s.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:e,mentor:o},bubbles:!0,composed:!0}))};switch(t){case"help":case"?":return n(Il),!0;case"clear":case"new":return await g.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=t==="mana"?"mana":t==="grocery"?"grocery-keeper":"goals-advisor";try{await g.getState().createThread({kind:"chat",persona:o})}catch(a){const l=a instanceof Error?a.message:String(a);return n(`Couldn't switch to ${t}: ${l}`),!0}return i?(this.text=i,!1):(n(`Switched to a new ${Bi[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(i||"").toLowerCase(),l={opus:"claude-opus-5-5",fable:"claude-fable-5-1",sonnet:"claude-sonnet-5-5",haiku:"claude-haiku-4-5-20251001",gpt:"gpt-6.1-sol",sol:"gpt-6.1-sol",astra:"gpt-6-astra",luna:"gpt-6-luna",terra:"gpt-6-luna","gpt-mini":"gpt-6-luna"}[o],d={};l&&(d[o]={id:l,label:ts(l)?.label??l});const u=d[o];return u?(await g.getState().setSetting("cockpit.mentor_model",u.id),n(`Workshop model → **${u.label}** (\`${u.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model opus|fable|sonnet|haiku|sol|astra|luna\` (current: ${Tt(g.getState().settings["cockpit.mentor_model"])}).`),!0)}default:return!1}}async stop(){this.queue=[],this.dispatchEvent(new CustomEvent("queue-clear",{bubbles:!0,composed:!0})),this.abortController?.abort();const e=g.getState().currentThreadId;if(e!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:e})})}catch{}}async send(){let e=this.text.trim();const t=this.attachments.filter(n=>n.uploaded&&n.path&&n.url);if(!e&&t.length===0)return;if(e.startsWith("/")&&t.length===0){if(await this.handleSlash(e)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(e=this.text.trim(),!e&&t.length===0)return}const s=t.map(n=>({path:n.path,url:n.url,ephemeral:!!n.ephemeral})),i=t.filter(n=>!n.ephemeral).map(n=>({url:n.url}));if(this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[],this.sending){const n=vn();this.queue.push({id:n,text:e,attachments:s,bubbleAttachments:i}),this.dispatchEvent(new CustomEvent("queue-add",{detail:{id:n,text:e,attachments:i},bubbles:!0,composed:!0}));return}this.sending=!0;try{for(await this.runTurn(e,s,i);this.queue.length>0;){const n=this.queue.shift();if(!n)break;this.dispatchEvent(new CustomEvent("queue-remove",{detail:{id:n.id},bubbles:!0,composed:!0})),await this.runTurn(n.text,n.attachments,n.bubbleAttachments)}}finally{this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus())}}async runTurn(e,t,s){const i=g.getState(),n=i.currentThreadId,o={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:e,attachments:s,liveDetail:o},bubbles:!0,composed:!0}));let a=!1;try{let l=n;const d=n==null?No(i):void 0;this.abortController=new AbortController;for await(const m of Xo({threadId:n,message:e,attachments:t,persona:d,view:i.viewContext??void 0,signal:this.abortController.signal}))switch(m.type){case"thread":l=m.threadId,n==null&&this.prevThreadId==null&&(this.prevThreadId=m.threadId);break;case"text":a=!0,o.append?.(m.text);break;case"ops":this.dispatchOps(m.action);break;case"error":a=!0,o.append?.(`

_error: ${m.error}_`);break;case"done":{const f=g.getState().currentThreadId;if(f!==n&&f!==l)break;this.turnsCompleted+=1,this.usage=[...this.usage,{turn:this.turnsCompleted,model:this.model,context:m.contextTokens??null,start:m.startTokens??null,window:m.contextWindow??null,out:m.tokensOut??null}];break}}a||o.append?.("_(done)_"),o.finalize?.(),await g.getState().loadThreads();const u=g.getState().currentThreadId,p=u===n||u===l;l!=null&&p&&await g.getState().selectThread(l)}catch(l){l?.name==="AbortError"?o.append?.(`

_stopped_`):(console.warn("[composer] send failed",l),o.append?.(`

_error: ${l.message}_`)),o.finalize?.()}finally{this.abortController=void 0}}dispatchOps(e){document.dispatchEvent(new CustomEvent("ops-event",{detail:e,bubbles:!0,composed:!0}))}renderUsagePill(){const e=ts(this.model)?.short??this.model,t=this.contextNow(),i=t?(p=>p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p))(t):"—",n=this.contextLimit(),o=t?Math.min(100,t/n*100):0,l=2*Math.PI*6,d=o/100*l,u=o>80?"#f87171":o>50?"#fbbf24":"var(--accent, #3b82f6)";return r`
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
            cx="8" cy="8" r="6" fill="none" stroke=${u} stroke-width="2.5" stroke-linecap="round"
            stroke-dasharray="${d} ${l}"
            style="transition: stroke-dasharray .3s"
          />
        </svg>
        <span>${i}</span>
      </button>
    `}contextNow(){return this.usage[this.usage.length-1]?.context??0}contextLimit(){for(let e=this.usage.length-1;e>=0;e--){const t=this.usage[e];if(t&&t.model===this.model&&t.window)return t.window}return il(this.model)}async onModelChange(e){this.model=e,await g.getState().setSetting("cockpit.mentor_model",e)}renderUsageModal(){if(!this.showUsage)return null;const e=this.usage.some(a=>a.context!=null),t=this.contextNow(),s=this.usage[0]?.start??0,i=this.contextLimit(),n=t?Math.min(100,Math.round(t/i*100)):0,o=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);return r`
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
              ${_l(this.model).map(a=>r`<option value=${a.id} ?selected=${a.id===this.model}>${a.label}</option>`)}
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
                ${this.usage.map(a=>{const l=a.context??0,d=this.usage.reduce((u,p)=>Math.max(u,p.context??0),1);return r`
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-muted w-10">T${a.turn}</span>
                    <div class="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                      <div class="h-full rounded-full bg-accent/60" style="width: ${Math.min(100,Math.round(l/d*100))}%"></div>
                    </div>
                    <span class="text-ink w-10 text-right">${l?o(l):"—"}</span>
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
    `}};Pe([c()],we.prototype,"text",2);Pe([c()],we.prototype,"attachments",2);Pe([c()],we.prototype,"sending",2);Pe([c()],we.prototype,"showUsage",2);Pe([c()],we.prototype,"usage",2);Pe([c()],we.prototype,"turnsCompleted",2);Pe([c()],we.prototype,"model",2);Pe([c()],we.prototype,"inputFocused",2);Pe([J("input[data-attach-input]")],we.prototype,"fileInput",2);Pe([J("textarea[data-composer-input]")],we.prototype,"textarea",2);we=Pe([k("chat-composer")],we);const er='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',Ml='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',ds='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',hs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function Ol(e){return e?`var(--nsc-${e}, currentColor)`:"currentColor"}const Ll=5e3;class Es{constructor(t,s){this.host=t,this.kind=s,this.timers=new Map,this.ids=new Set,t.addController(this)}take(t){if(!t||t.action!=="refresh"||!t.changed?.length)return;const s=t.changed.filter(i=>i.kind===this.kind).map(i=>i.id);if(s.length){for(const i of s){const n=this.timers.get(i);n&&clearTimeout(n),this.timers.set(i,setTimeout(()=>{this.timers.delete(i),this.ids=new Set(this.timers.keys()),this.host.requestUpdate()},Ll))}this.ids=new Set(this.timers.keys()),this.host.requestUpdate()}}has(t){return this.timers.has(t)}cls(t){return this.timers.has(t)?"agent-flash":""}hostDisconnected(){for(const t of this.timers.values())clearTimeout(t);this.timers.clear(),this.ids=new Set}}var Nl=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,vt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Rl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Nl(t,s,n),n};const jl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Fl(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return e;const s=Number(t[3]),i=jl[Number(t[2])-1],n=t[1].slice(2);return`${s} ${i} ${n}`}function Bl(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return null;const s=new Date(`${e}T00:00:00`).getTime();return Math.round((s-Date.now())/864e5)}let Xe=class extends ${constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-kr-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-kr-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.kr.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await g.getState().reorderKeyResult(s,n)},this.onEditKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=_(this,g,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.()}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("kr-touched",{detail:{id:this.kr.id},bubbles:!0,composed:!0}))}async toggleDone(){this.clearHighlight(),await g.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await g.getState().deleteKeyResult(this.kr.id)}startEdit(){this.editing||(this.clearHighlight(),this.editing=!0)}async commitEdit(e){const t=e.trim();this.editing=!1,!(!t||t===this.kr.title)&&await g.getState().updateKeyResult(this.kr.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.kr-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await g.getState().updateKeyResult(this.kr.id,{targetDate:t||null})}renderDateChip(){if(this.kr.done===1)return r`<span
        class="kr-chip shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
        style="color:var(--nsc-green);background:color-mix(in srgb, var(--nsc-green) 13%, transparent);"
        >Done</span
      >`;if(this.kr.target_date){const e=Bl(this.kr.target_date);if(e!=null&&e<0)return r`<button
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
        ${Fl(this.kr.target_date)}
      </button>`}return r`<button
      type="button"
      class="kr-date-btn empty shrink-0 text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const e=this.kr.done===1,t=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",s=`kr:${this.kr.id}`,n=g.getState().focusedRowKey===s?"bg-hover":"";return r`
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
              </svg>`:h}
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
    `}};vt([b({attribute:!1})],Xe.prototype,"kr",2);vt([b({attribute:!1})],Xe.prototype,"index",2);vt([b({type:Boolean})],Xe.prototype,"highlight",2);vt([c()],Xe.prototype,"editing",2);vt([c()],Xe.prototype,"dragEnabled",2);vt([c()],Xe.prototype,"dragOverPos",2);Xe=vt([k("key-result-row")],Xe);var Ul=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,xe=(e,t,s,i)=>{for(var n=i>1?void 0:i?zl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Ul(t,s,n),n};const Xi="slmai.cockpit.collapsedGoals",Hl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ql='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';function Kl(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return"";const s=new Date(`${e}T00:00:00`),i=new Date,n=Math.round((s.getTime()-i.getTime())/864e5);if(n<0)return"overdue";if(n===0)return"due today";if(n<31)return`${n} day${n===1?"":"s"} left`;const o=Math.round(n/30.44);if(o<12)return`${o} month${o===1?"":"s"} left`;const a=n/365.25,l=a<2?a.toFixed(1):String(Math.round(a));return`${l} year${l==="1"||l==="1.0"?"":"s"} left`}function Wl(e){const t=/^(\d{4})-(\d{2})-\d{2}$/.exec(e);return t?`${Hl[Number(t[2])-1]} ${t[1]}`:e}function wn(){try{const e=localStorage.getItem(Xi);if(!e)return new Set;const t=JSON.parse(e);return Array.isArray(t)?new Set(t.filter(s=>typeof s=="number")):new Set}catch{return new Set}}function Gl(e){try{localStorage.setItem(Xi,JSON.stringify(Array.from(e)))}catch{}}let ue=class extends ${constructor(){super(...arguments),this.northStars=[],this.highlight=!1,this.highlightKrIds=new Set,this.flashKrIds=new Set,this.focused=!1,this.editingTitle=!1,this.markerOpen=!1,this.statusOpen=!1,this.krAdding=!1,this.krNewDate="",this.collapsed=wn(),this.onStorage=e=>{(e.key===Xi||e.key==null)&&(this.collapsed=wn())},this.onDocClick=e=>{this.markerOpen&&!this.contains(e.target)&&(this.markerOpen=!1),this.statusOpen&&!this.contains(e.target)&&(this.statusOpen=!1)},this.onTitleKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitTitle(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)},this.onAddKRKeydown=e=>{if(e.key==="Enter"){e.preventDefault();const t=e.target,s=t.value;t.value="",this.addKR(s,!1)}else e.key==="Escape"&&(e.preventDefault(),this.krAdding=!1,this.krNewDate="")},this.onKRAddBlur=e=>{const t=e.currentTarget;setTimeout(()=>{if(!t?.isConnected||t.contains(document.activeElement))return;const s=t.querySelector(".new-title");this.addKR(s?.value??"")},100)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=_(this,g,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.()}get expanded(){return!this.collapsed.has(this.goal.id)}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("goal-touched",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}toggleExpand(e){if(e.target.closest("[data-no-toggle]"))return;this.clearHighlight();const s=new Set(this.collapsed);this.expanded?s.add(this.goal.id):s.delete(this.goal.id),this.collapsed=s,Gl(s)}starFor(e){return e?this.northStars.find(t=>t.slug===e)??null:null}openModal(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}startEditTitle(e){e.stopPropagation(),this.clearHighlight(),this.editingTitle=!0}async commitTitle(e){const t=e.trim();this.editingTitle=!1,!(!t||t===this.goal.title)&&await g.getState().updateGoal(this.goal.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.goal-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await g.getState().updateGoal(this.goal.id,{targetDate:t||null})}async recategorize(e){this.markerOpen=!1,(this.goal.north_star??null)!==e&&await g.getState().updateGoal(this.goal.id,{northStar:e})}async addKR(e,t=!0){const s=e.trim();if(!s){this.krAdding=!1,this.krNewDate="";return}t&&(this.krAdding=!1);const i=this.krNewDate||null;this.krNewDate="",await g.getState().addKeyResult(this.goal.id,s,i)}get krProgress(){const e=this.goal.keyResults??[],t=e.length,s=e.filter(n=>n.done===1).length,i=t?Math.round(s/t*100):0;return{done:s,total:t,pct:i}}renderMarker(){const e=this.goal.symbol??null,t=this.goal.color??null,s=e?Ns[e]:void 0,i=Ol(t),{done:n,total:o,pct:a}=this.krProgress,l=s?r`<span
          style="display:inline-block;width:15px;height:15px;color:${i};position:relative;"
          >${X(Ls(s))}</span
        >`:h;if(o===0)return s?r`
        <span
          class="goal-marker-slot inline-flex items-center justify-center shrink-0"
          title=${this.goal.title}
          style="width:18px;height:18px;"
        >
          ${l}
        </span>
      `:h;const d=97.39,u=d*(1-a/100);return r`
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
            stroke-dasharray=${d} stroke-dashoffset=${u}
            style="transition:stroke-dashoffset .35s ease;"
          />
        </svg>
        ${l}
      </span>
    `}renderTargetLine(){if(this.goal.target_date){const e=Kl(this.goal.target_date),t=e==="overdue";return r`<div
        class="goal-target-line flex items-center gap-1.5 text-sm text-muted"
        data-no-toggle
      >
        <span style="width:13px;height:13px;display:inline-flex;opacity:.7;"
          >${X(ql)}</span
        >
        <button
          type="button"
          class="goal-date-btn hover:text-ink"
          title="Change target date"
          data-no-toggle
          @click=${this.pickDate}
        >
          Target ${Wl(this.goal.target_date)}
        </button>
        ${e?r`<span class="opacity-50">·</span>
              <span style=${t?"color:var(--nsc-red)":""}>${e}</span>`:h}
      </div>`}return r`<button
      type="button"
      class="goal-date-btn empty text-sm text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100"
      title="Set target date"
      data-no-toggle
      @click=${this.pickDate}
    >
      + set target date
    </button>`}renderStatusBadge(){if(!this.goal.archived)return h;const e=this.goal.status==="killed"?"archived":this.goal.status;return r`<span
      class="goal-status-badge ml-2 text-[10px] px-1.5 py-0.5 rounded border border-line text-muted"
      >${e}</span
    >`}async setStatus(e){this.statusOpen=!1,this.goal.status!==e&&await g.getState().updateGoal(this.goal.id,{status:e})}statusChipMeta(e){switch(e){case"shipped":return{label:"Shipped",color:"var(--nsc-green)",always:!0};case"paused":return{label:"Paused",color:"var(--nsc-amber)",always:!0};case"killed":return{label:"Archived",color:"var(--color-muted)",always:!0};default:return{label:"Active",color:"var(--color-muted)",always:!1}}}renderStatusChip(){const e=this.goal.status??"active",t=this.statusChipMeta(e),s=t.always?"opacity-90 hover:opacity-100":"opacity-0 group-hover:opacity-70 hover:!opacity-100";return r`<span class="goal-status-wrap relative" data-no-toggle>
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
          </div>`:h}
    </span>`}render(){const e=this.goal.keyResults??[],t=this.expanded,s=this.goal.archived?"opacity-60":"",i=`goal:${this.goal.id}`,o=g.getState().focusedRowKey===i?"bg-hover":"",a=this.goal.color?`var(--nsc-${this.goal.color})`:null,l=a?`color-mix(in srgb, ${a} 6%, var(--color-surface))`:"var(--color-surface)",d=a?`color-mix(in srgb, ${a} 22%, var(--color-line))`:"var(--color-line)";return r`
      <li
        class="goal group relative flex flex-col px-4 py-3 ${s} ${o}"
        style="background:${l};border:0.5px solid ${d};border-radius:12px;box-shadow:var(--card-shadow);"
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
            @click=${u=>{u.stopPropagation(),this.toggleExpand(u)}}
            class="text-muted opacity-40 hover:opacity-100 shrink-0 mt-1"
            style="width:11px;height:11px;display:inline-flex;"
            >${X(t?ds:hs)}</button
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
                    @blur=${u=>this.commitTitle(u.target.value)}
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
              ${t?e.map((u,p)=>r`<key-result-row class=${this.flashKrIds.has(u.id)?"agent-flash":""} .kr=${u} .index=${p} .highlight=${this.highlightKrIds.has(u.id)}></key-result-row>`):h}
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
                      @change=${u=>this.krNewDate=u.target.value}
                    />
                  </li>`:r`<li
                    class="kr flex items-center gap-2 py-0.5 cursor-text rounded hover:bg-hover"
                    data-no-toggle
                    @click=${u=>{u.stopPropagation(),this.krAdding=!0,this.krNewDate=""}}
                  >
                    <span class="hidden lg:inline-flex shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                    <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                    <span class="text-sm text-muted opacity-50">New key result...</span>
                  </li>`}
            </ul>`:h}
      </li>
    `}};xe([b({attribute:!1})],ue.prototype,"goal",2);xe([b({attribute:!1})],ue.prototype,"northStars",2);xe([b({type:Boolean})],ue.prototype,"highlight",2);xe([b({attribute:!1})],ue.prototype,"highlightKrIds",2);xe([b({attribute:!1})],ue.prototype,"flashKrIds",2);xe([c()],ue.prototype,"focused",2);xe([c()],ue.prototype,"editingTitle",2);xe([c()],ue.prototype,"markerOpen",2);xe([c()],ue.prototype,"statusOpen",2);xe([c()],ue.prototype,"krAdding",2);xe([c()],ue.prototype,"krNewDate",2);xe([c()],ue.prototype,"collapsed",2);ue=xe([k("goal-row")],ue);var Vl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,tr=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ql(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Vl(t,s,n),n};let Ai=class extends ${constructor(){super(...arguments),this.events=[]}fmt(e){return new Date(e*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?r`
      <ul class="gm-history flex flex-col gap-1 text-xs">
        ${this.events.map(e=>r`
            <li class="grid grid-cols-[auto_auto_1fr] gap-2 items-baseline">
              <time class="text-muted">${this.fmt(e.changed_at)}</time>
              <span class="ev font-medium">${e.event}</span>
              <span class="text-muted">
                ${e.from_value||e.to_value?r`${e.from_value||""} → ${e.to_value||""}`:h}
              </span>
            </li>
          `)}
      </ul>
    `:r`<div class="text-xs text-muted italic">
        (no events yet)
      </div>`}};tr([b({attribute:!1})],Ai.prototype,"events",2);Ai=tr([k("goal-history-popover")],Ai);var Yl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,se=(e,t,s,i)=>{for(var n=i>1?void 0:i?Jl(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Yl(t,s,n),n};const Xl=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let Q=class extends ${constructor(){super(...arguments),this.goalId=null,this.creating=!1,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.completedOpen=!1,this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(e){e.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId)),e.has("creating")&&this.creating&&(this.reset(),this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null)}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(e){this.loading=!0;try{const t=await S.goals.summary(e);this.goal=t.goal,this.keyResults=t.keyResults,this.commitments=t.commitments,this.events=t.events,this.stats=t.stats,this.editNorthStar=t.goal.north_star??"",this.editTargetDate=t.goal.target_date??"",this.editStatus=t.goal.status,this.editColor=t.goal.color??null,this.editSymbol=t.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await g.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await g.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await g.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await g.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?r`
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
    `:h}renderCompleted(){const e=this.keyResults.filter(i=>i.done),t=this.commitments.filter(i=>i.done),s=e.length+t.length;return s===0?h:r`
      <div class="gm-field mb-3">
        <button
          type="button"
          class="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          @click=${()=>this.completedOpen=!this.completedOpen}
        >
          <span style="width:11px;height:11px;display:inline-flex;"
            >${X(this.completedOpen?ds:hs)}</span
          >
          Completed (${s})
        </button>
        ${this.completedOpen?r`<div class="mt-2">
              ${e.length?r`<div class="mb-3">
                    <label class="block text-xs text-muted mb-1">achieved KRs</label>
                    <ul class="text-sm">
                      ${e.map(i=>r`<li>✓ ${i.title}</li>`)}
                    </ul>
                  </div>`:h}
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
                  </div>`:h}
            </div>`:h}
      </div>
    `}async createNew(){const e=this.editTitle.trim();e&&(await g.getState().createGoal({title:e,targetDate:this.editTargetDate||null,color:this.editColor,symbol:this.editSymbol}),this.close())}renderColorField(){return r`
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
                  ${Xl.map(s=>r`
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
    `}};se([b({type:Number})],Q.prototype,"goalId",2);se([b({type:Boolean})],Q.prototype,"creating",2);se([b({attribute:!1})],Q.prototype,"northStars",2);se([c()],Q.prototype,"goal",2);se([c()],Q.prototype,"keyResults",2);se([c()],Q.prototype,"commitments",2);se([c()],Q.prototype,"events",2);se([c()],Q.prototype,"stats",2);se([c()],Q.prototype,"loading",2);se([c()],Q.prototype,"completedOpen",2);se([c()],Q.prototype,"editTitle",2);se([c()],Q.prototype,"editNorthStar",2);se([c()],Q.prototype,"editTargetDate",2);se([c()],Q.prototype,"editStatus",2);se([c()],Q.prototype,"editColor",2);se([c()],Q.prototype,"editSymbol",2);Q=se([k("goal-modal")],Q);var Zl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Ke=(e,t,s,i)=>{for(var n=i>1?void 0:i?ec(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Zl(t,s,n),n};const kn="slmai.cockpit.goalsSectionCollapsed",Qs="slmai.cockpit.goalsSection.title",Ys="Goals";let Oe=class extends ${constructor(){super(...arguments),this.tabbed=!1,this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=Ys,this.creatingGoal=!1,this.activeModalId=null,this.highlightGoalIds=new Set,this.highlightKrIds=new Set,this.flashGoals=new Es(this,"goal"),this.flashKrs=new Es(this,"kr"),this.onOpsEvent=e=>{const t=e.detail;t&&(t.action==="refresh"||t.action==="load-week")&&(this.flashGoals.take(t),this.flashKrs.take(t),t.action==="refresh"&&t.added?.kind==="goal"?this.highlightGoalIds=new Set(this.highlightGoalIds).add(t.added.id):t.action==="refresh"&&t.added?.kind==="kr"&&(this.highlightKrIds=new Set(this.highlightKrIds).add(t.added.id)),g.getState().loadGoals().catch(()=>{}))},this.onGoalTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightGoalIds.has(t))return;const s=new Set(this.highlightGoalIds);s.delete(t),this.highlightGoalIds=s},this.onKrTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightKrIds.has(t))return;const s=new Set(this.highlightKrIds);s.delete(t),this.highlightKrIds=s},this.toggleSection=()=>{const e=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(kn,this.sectionCollapsed?"1":"0"),e&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}},this.startCreate=e=>{e.stopPropagation(),this.creatingGoal=!0}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(kn)==="1",this.titleValue=localStorage.getItem(Qs)??Ys,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.goals.title"];t&&(this.titleValue=t,localStorage.setItem(Qs,t))}).catch(()=>{}),this.unsubGoals=_(this,g,e=>e.goals),this.unsubArchived=_(this,g,e=>`${e.goalsArchivedCount}:${e.includeArchivedGoals}`),this.unsubStars=_(this,g,e=>e.northStars),g.getState().loadGoals().catch(()=>{}),g.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent)}async toggleArchived(){const e=g.getState();await e.toggleArchivedGoals(!e.includeArchivedGoals)}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||Ys;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(Qs,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}render(){const e=g.getState(),t=e.goals,s=e.northStars,i=e.goalsArchivedCount,n=e.includeArchivedGoals,o=this.tabbed||!this.sectionCollapsed;return r`
      <section class="goals-section flex flex-col gap-1 pb-16">
        ${this.tabbed?h:r`<header
              class="goals-header flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleSection}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${X(this.sectionCollapsed?hs:ds)}</span
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
                    >${X(Ml)}</span
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
                        >${X(er)}</span
                      >
                      ${n?"Hide archived":`Archived (${i})`}
                    </button>`:h}
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
                      @open-modal=${l=>this.activeModalId=l.detail.id}
                    ></goal-row>
                  `)}
              </ul>
            `:h}

        <goal-modal
          .goalId=${this.activeModalId}
          .creating=${this.creatingGoal}
          .northStars=${s}
          @close=${()=>{this.activeModalId=null,this.creatingGoal=!1}}
        ></goal-modal>
      </section>
    `}};Ke([b({type:Boolean})],Oe.prototype,"tabbed",2);Ke([c()],Oe.prototype,"sectionCollapsed",2);Ke([c()],Oe.prototype,"editingTitle",2);Ke([c()],Oe.prototype,"titleValue",2);Ke([c()],Oe.prototype,"creatingGoal",2);Ke([c()],Oe.prototype,"activeModalId",2);Ke([c()],Oe.prototype,"highlightGoalIds",2);Ke([c()],Oe.prototype,"highlightKrIds",2);Oe=Ke([k("goals-section")],Oe);var tc=Object.getOwnPropertyDescriptor,sc=(e,t,s,i)=>{for(var n=i>1?void 0:i?tc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};const $n=[{text:"Indeed, with hardship comes ease.",source:"Quran 94:6"},{text:"So verily, with every hardship there is ease.",source:"Quran 94:5"},{text:"Did We not expand for you your breast?",source:"Quran 94:1"},{text:"So when you have finished, then stand up for worship.",source:"Quran 94:7"},{text:"And to your Lord direct your longing.",source:"Quran 94:8"},{text:"And that there is nothing for man except what he strives for.",source:"Quran 53:39"},{text:"And that his effort is going to be seen.",source:"Quran 53:40"},{text:"Indeed, Allah will not change the condition of a people until they change what is in themselves.",source:"Quran 13:11"},{text:"Verily, in the remembrance of Allah do hearts find rest.",source:"Quran 13:28"},{text:"So remember Me; I will remember you, and be grateful to Me.",source:"Quran 2:152"},{text:"Seek help through patience and prayer. Indeed, Allah is with the patient.",source:"Quran 2:153"},{text:"And seek help through patience and prayer.",source:"Quran 2:45"},{text:"And when My servants ask you concerning Me — indeed I am near.",source:"Quran 2:186"},{text:"Our Lord, give us good in this world and good in the Hereafter.",source:"Quran 2:201"},{text:"Perhaps you hate a thing and it is good for you.",source:"Quran 2:216"},{text:"Our Lord, pour upon us patience and plant firmly our feet.",source:"Quran 2:250"},{text:"Allah does not burden a soul beyond what it can bear.",source:"Quran 2:286"},{text:"So race to all that is good.",source:"Quran 2:148"},{text:"And speak to people good words.",source:"Quran 2:83"},{text:"And give good tidings to the patient.",source:"Quran 2:155"},{text:"Whatever good you put forward for yourselves, you will find it with Allah.",source:"Quran 2:110"},{text:"A kind word and forgiveness are better than charity followed by injury.",source:"Quran 2:263"},{text:"Indeed, Allah loves those who are constantly repentant and those who purify themselves.",source:"Quran 2:222"},{text:"And do good; indeed, Allah loves the doers of good.",source:"Quran 2:195"},{text:"And whoever relies upon Allah — then He is sufficient for him.",source:"Quran 65:3"},{text:"And whoever fears Allah — He will make for him a way out.",source:"Quran 65:2"},{text:"My Lord, increase me in knowledge.",source:"Quran 20:114"},{text:"My Lord, expand for me my breast and ease for me my task.",source:"Quran 20:25"},{text:"Establish prayer for My remembrance.",source:"Quran 20:14"},{text:"Call upon Me; I will respond to you.",source:"Quran 40:60"},{text:"Do not despair of the mercy of Allah; indeed, Allah forgives all sins.",source:"Quran 39:53"},{text:"Are those who know equal to those who do not know?",source:"Quran 39:9"},{text:"The patient will be given their reward without measure.",source:"Quran 39:10"},{text:"Whoever does righteousness, We will surely cause them to live a good life.",source:"Quran 16:97"},{text:"Indeed, Allah orders justice and good conduct.",source:"Quran 16:90"},{text:"Indeed, Allah is with those who fear Him and those who do good.",source:"Quran 16:128"},{text:"And He found you lost and guided you.",source:"Quran 93:7"},{text:"And your Lord is going to give you, and you will be satisfied.",source:"Quran 93:5"},{text:"Indeed, my Lord is near and responsive.",source:"Quran 11:61"},{text:"And be patient, for Allah does not let the reward of those who do good be lost.",source:"Quran 11:115"},{text:"My success is not but through Allah; upon Him I rely.",source:"Quran 11:88"},{text:"Indeed, my Lord is Guardian over all things.",source:"Quran 11:57"},{text:"Perhaps you dislike a thing and Allah places much good in it.",source:"Quran 4:19"},{text:"When you are greeted with a greeting, greet in return with one better.",source:"Quran 4:86"},{text:"Worship Allah and be good to parents.",source:"Quran 4:36"},{text:"And put your trust in Allah; sufficient is Allah as a Disposer of affairs.",source:"Quran 33:3"},{text:"O you who believe, remember Allah with much remembrance.",source:"Quran 33:41"},{text:"The men and women who remember Allah often — Allah has prepared for them forgiveness and a great reward.",source:"Quran 33:35"},{text:"Fear Allah and speak words of appropriate justice.",source:"Quran 33:70"},{text:"So which of the favors of your Lord would you deny?",source:"Quran 55:13"},{text:"Is the reward for good anything but good?",source:"Quran 55:60"},{text:"If you are grateful, I will surely increase you.",source:"Quran 14:7"},{text:"And upon Allah let the believers rely.",source:"Quran 14:11"},{text:"My mercy encompasses all things.",source:"Quran 7:156"},{text:"Indeed, the mercy of Allah is near to the doers of good.",source:"Quran 7:56"},{text:"Allah will raise those who believe and those given knowledge by degrees.",source:"Quran 58:11"},{text:"Read in the name of your Lord who created.",source:"Quran 96:1"},{text:"Who taught by the pen — taught man that which he knew not.",source:"Quran 96:4"},{text:"By time, indeed mankind is in loss.",source:"Quran 103:1"},{text:"Except those who believe, do righteous deeds, and advise each other to truth and patience.",source:"Quran 103:3"},{text:"So whoever does an atom's weight of good will see it.",source:"Quran 99:7"},{text:"Repel evil by that which is better, and your enemy will become a devoted friend.",source:"Quran 41:34"},{text:"And none is granted it except one of great fortune.",source:"Quran 41:35"},{text:"Indeed, good deeds do away with misdeeds.",source:"Quran 11:114"},{text:"And do good, as Allah has done good to you.",source:"Quran 28:77"},{text:"Sufficient for us is Allah, and He is the best Disposer of affairs.",source:"Quran 3:173"},{text:"And when you have decided, then rely upon Allah.",source:"Quran 3:159"},{text:"Do not weaken and do not grieve, for you will be superior if you are believers.",source:"Quran 3:139"},{text:"And hold firmly to the rope of Allah all together, and do not become divided.",source:"Quran 3:103"},{text:"Those who restrain anger and pardon people — Allah loves the doers of good.",source:"Quran 3:134"},{text:"Be patient, endure, remain stationed, and fear Allah.",source:"Quran 3:200"},{text:"Every soul will taste death.",source:"Quran 3:185"},{text:"Indeed, Allah does not allow the reward of the believers to be lost.",source:"Quran 3:171"},{text:"And those who strive for Us — We will surely guide them to Our ways.",source:"Quran 29:69"},{text:"And whoever strives only strives for himself.",source:"Quran 29:6"},{text:"Indeed, prayer restrains from immorality and wrongdoing.",source:"Quran 29:45"},{text:"Whoever is grateful is grateful for the benefit of himself.",source:"Quran 31:12"},{text:"And be patient over what befalls you.",source:"Quran 31:17"},{text:"And be moderate in your pace and lower your voice.",source:"Quran 31:19"},{text:"Be grateful to Me and to your parents.",source:"Quran 31:14"},{text:"Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds.",source:"Quran 6:162"},{text:"Whoever brings a good deed will have ten times the like of it.",source:"Quran 6:160"},{text:"They were commanded only to worship Allah, sincere to Him in faith.",source:"Quran 98:5"},{text:"Indeed, the most noble of you before Allah is the most righteous.",source:"Quran 49:13"},{text:"Avoid much suspicion; indeed, some suspicion is sin.",source:"Quran 49:12"},{text:"Do not ridicule others; perhaps they are better than you.",source:"Quran 49:11"},{text:"And cooperate in righteousness and piety.",source:"Quran 5:2"},{text:"And be patient; indeed, Allah is with the patient.",source:"Quran 8:46"},{text:"So be patient with beautiful patience.",source:"Quran 70:5"},{text:"And remember the name of your Lord and devote yourself to Him wholly.",source:"Quran 73:8"},{text:"And He is with you wherever you are.",source:"Quran 57:4"},{text:"So flee to Allah.",source:"Quran 51:50"},{text:"And in the heaven is your provision, and whatever you are promised.",source:"Quran 51:22"},{text:"Whoever purifies himself does so for the benefit of his own soul.",source:"Quran 35:18"},{text:"Indeed, this Qur'an guides to that which is most upright.",source:"Quran 17:9"},{text:"And do not walk upon the earth arrogantly.",source:"Quran 17:37"},{text:"Your Lord has decreed that you worship none but Him, and be good to parents.",source:"Quran 17:23"},{text:"And lower to them the wing of humility out of mercy.",source:"Quran 17:24"},{text:"The servants of the Most Merciful are those who walk upon the earth humbly.",source:"Quran 25:63"},{text:"And when they pass by idle talk, they pass by with dignity.",source:"Quran 25:72"},{text:"My Lord, forgive and have mercy, for You are the best of the merciful.",source:"Quran 23:118"},{text:"And worship your Lord until there comes to you certainty.",source:"Quran 15:99"},{text:"And lower your wing to the believers.",source:"Quran 15:88"},{text:"And say: Work, for Allah will see your work.",source:"Quran 9:105"},{text:"So fear Allah as much as you are able.",source:"Quran 64:16"},{text:"Whoever is patient and forgives — that is of the matters requiring determination.",source:"Quran 42:43"},{text:"And do not despair of relief from Allah.",source:"Quran 12:87"},{text:"Let them pardon and overlook. Would you not love that Allah should forgive you?",source:"Quran 24:22"},{text:"If you support Allah, He will support you and plant your feet firmly.",source:"Quran 47:7"},{text:"Why do you say that which you do not do?",source:"Quran 61:2"},{text:"Great is hatred in the sight of Allah that you say what you do not do.",source:"Quran 61:3"},{text:"Actions are but by intentions, and each person will have only what he intended.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The most beloved deeds to Allah are the most consistent, even if small.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Take benefit of five before five: your health before sickness, your free time before busyness, your youth before old age, your wealth before poverty, and your life before death.",source:"Muhammad صلى الله عليه وسلم (Al-Hakim)"},{text:"Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The strong believer is better and more beloved to Allah than the weak believer, though in both there is good.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Strive for what benefits you, seek help from Allah, and do not feel helpless.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"None of you truly believes until he loves for his brother what he loves for himself.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of people are those most beneficial to people.",source:"Muhammad صلى الله عليه وسلم (Al-Tabarani)"},{text:"Allah loves that when one of you does a task, he does it with excellence.",source:"Muhammad صلى الله عليه وسلم (Al-Bayhaqi)"},{text:"Whoever believes in Allah and the Last Day, let him speak good or remain silent.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his neighbor.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his guest.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The Muslim is the one from whose tongue and hand people are safe.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Richness is not in many possessions; richness is the richness of the soul.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Be in this world as though you were a stranger or a traveler.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Whoever does not thank people has not thanked Allah.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud & Tirmidhi)"},{text:"The believer is not stung from the same hole twice.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Make things easy and do not make them difficult; give glad tidings and do not repel.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of you are those with the best character.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"A good word is charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Do not belittle any good deed, even meeting your brother with a cheerful face.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Allah does not look at your appearance or wealth, but at your hearts and your deeds.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The best of you is the one who is best to his family.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever guides another to good will have a reward like the one who does it.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The upper hand is better than the lower hand.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"No one eats better food than that which he eats from the work of his own hands.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Seeking knowledge is an obligation upon every Muslim.",source:"Muhammad صلى الله عليه وسلم (Ibn Majah)"},{text:"Whoever does not show mercy to people, Allah will not show mercy to him.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"How wonderful is the affair of the believer — all of his affairs are good for him.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Tie your camel, then put your trust in Allah.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The most complete of believers in faith are those best in character.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Give the worker his wages before his sweat dries.",source:"Muhammad صلى الله عليه وسلم (Ibn Majah)"},{text:"Whoever wakes secure in his home, healthy in body, with food for the day, has been given the whole world.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The best charity is that given when you are healthy and hopeful of wealth.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Cleanliness is half of faith.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Purity is half of faith, and praise of Allah fills the scale.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Modesty brings nothing but good.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Modesty is part of faith.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Verily Allah is beautiful and loves beauty.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Patience is at the first strike.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"There are two blessings which many people lose: health and free time.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"The strong man is not the good wrestler; the strong man is the one who controls himself when angry.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Kindness is not found in anything except that it beautifies it.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"He is not one of us who does not show mercy to our young and respect to our elders.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever is deprived of gentleness is deprived of all good.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Part of the excellence of a person's Islam is his leaving what does not concern him.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"A believer to another believer is like a building whose parts support one another.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"The best of you are those who learn the Qur'an and teach it.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"There is no envy except in two: a man given wealth who spends it rightly, and a man given wisdom who acts by it and teaches it.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Beware of suspicion, for suspicion is the falsest of speech.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"A person is upon the religion of his close friend, so let each of you consider whom he befriends.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud & Tirmidhi)"},{text:"The example of a good companion and a bad one is like the seller of musk and the blacksmith's bellows.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Charity does not decrease wealth.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Whoever conceals the faults of another, Allah will conceal his faults in this world and the next.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The supplication of a Muslim for his brother in his absence is answered.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The two feet of a servant will not move on the Day of Judgment until he is asked about his life and how he spent it, and his knowledge and what he did with it.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"Whoever seeks the pleasure of Allah though it displeases the people, Allah will suffice him.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"This world is enjoyment, and the best enjoyment of this world is a righteous spouse.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Deeds are judged by their endings.",source:"Muhammad صلى الله عليه وسلم (Bukhari)"},{text:"Whoever calls others to guidance will have a reward like the rewards of those who follow him.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"A man's spending on his family is a charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever suppresses his anger while able to enact it, Allah will fill his heart with security and faith.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud)"},{text:"The believer who mixes with people and bears their harm has greater reward than one who does not.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi & Ibn Majah)"},{text:"The best of people are those who live long and do good deeds.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The best of you are the best in paying off debts.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Whoever loves to meet Allah, Allah loves to meet him.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Every act of kindness is charity.",source:"Muhammad صلى الله عليه وسلم (Bukhari & Muslim)"},{text:"Do not be people without minds of your own; if others do good, do good — and if they do wrong, do not be unjust.",source:"Muhammad صلى الله عليه وسلم (Tirmidhi)"},{text:"The believer is a mirror to his brother.",source:"Muhammad صلى الله عليه وسلم (Abu Dawud)"},{text:"Righteousness is good character.",source:"Muhammad صلى الله عليه وسلم (Muslim)"},{text:"The believer is not one who eats his fill while his neighbor goes hungry.",source:"Muhammad صلى الله عليه وسلم (Al-Bayhaqi)"},{text:"Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"May Allah have mercy on the one who shows me my faults.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Acquire knowledge before you become leaders.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I have never regretted my silence; as for my speech, I have often regretted it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Whoever does not know evil is more likely to fall into it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Sit with those who repent often, for they have the tenderest hearts.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I hate to see a man idle — working neither for this world nor the next.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"The worth of a person is measured by what he does well.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Knowledge guards you, while you guard wealth.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"People are of two kinds: your brothers in faith, or your equals in humanity.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Do not be a slave to another when Allah has created you free.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"The tongue of the wise is behind his heart, and the heart of the fool is behind his tongue.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Today is action without reckoning, and tomorrow is reckoning without action.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Anxiety over guaranteed provision, and neglect of required duty, are signs of a weak heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Concern for this world is darkness in the heart; concern for the Hereafter is light in the heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Knowledge without action is a tree without fruit.",source:"Abu Bakr as-Siddiq رضي الله عنه"}];let Sn=class extends ${connectedCallback(){super.connectedCallback(),this.unsubGoals=_(this,g,e=>e.goals),this.unsubCommits=_(this,g,e=>e.commitments),g.getState().loadGoals().catch(()=>{}),g.getState().loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubCommits?.()}todaysReminder(){const e=Math.floor(Date.now()/864e5);return $n[e%$n.length]}render(){const e=g.getState(),t=e.goals.filter(l=>!l.archived),s=e.commitments;if(t.length===0&&s.length===0)return h;const i=s.filter(l=>l.done).length,n=s.length,o=n?Math.round(i/n*100):0,a=this.todaysReminder();return r`<div class="goals-metrics ${"hidden sm:grid"} sm:grid-cols-3 gap-2 mb-3">
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
            </div>`:h}
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
    </div>`}};Sn=sc([k("goals-metrics")],Sn);const Cn=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s]+|\*\*([^*]+)\*\*|~~([^~]+)~~|\*([^*\n]+)\*|_([^_\n]+)_|`([^`]+)`/g;function sr(e){const t=[];let s=0,i;for(Cn.lastIndex=0;(i=Cn.exec(e))!==null;){i.index>s&&t.push(e.slice(s,i.index));const[,n,o,a,l,d,u,p]=i;if(n||i[0].startsWith("http")){const m=n?o:i[0];t.push(r`<a
          href=${m}
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-70 hover:opacity-100"
          @click=${f=>f.stopPropagation()}
          >${n??m}</a
        >`)}else a?t.push(r`<strong class="font-semibold">${a}</strong>`):l?t.push(r`<s class="opacity-70">${l}</s>`):d||u?t.push(r`<em class="italic">${d??u}</em>`):p&&t.push(r`<code
          class="font-mono text-[0.85em] px-1 py-0.5 rounded"
          style="background:color-mix(in srgb, var(--color-muted) 15%, transparent);"
          >${p}</code
        >`);s=i.index+i[0].length}return s<e.length&&t.push(e.slice(s)),t}function Is(e){const t=e.target,s=t.selectionStart??0,i=t.selectionEnd??0;if(s===i)return;const n=(e.clipboardData?.getData("text/plain")??"").trim();if(!/^https?:\/\/\S+$/.test(n))return;const o=t.value.slice(s,i).replace(/[[\]]/g,"");if(!o.trim())return;e.preventDefault();const a=n.replace(/\(/g,"%28").replace(/\)/g,"%29");t.setRangeText(`[${o}](${a})`,s,i,"end"),t.dispatchEvent(new Event("input",{bubbles:!0}))}var ic=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,us=(e,t,s,i)=>{for(var n=i>1?void 0:i?nc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ic(t,s,n),n};const oc=["January","February","March","April","May","June","July","August","September","October","November","December"],rc=["M","T","W","T","F","S","S"];function ac(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function lc(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;return t.setUTCDate(t.getUTCDate()-(s-1)),t}function cc(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5);return new Date(a.getTime()+(i-1)*7*864e5)}function dc(e,t){const s=new Date(Date.UTC(e,t,1)),i=lc(s),n=[];for(let o=0;o<6;o++){const a=[];for(let d=0;d<7;d++)a.push(new Date(i.getTime()+(o*7+d)*864e5));const l=a[0];n.push({week:ac(l),days:a})}return n}let At=class extends ${constructor(){super(...arguments),this.selected=nt(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=e=>{this.open&&(this.contains(e.target)||this.close())},this.keyHandler=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(e){if(e.has("open")&&this.open||e.has("selected")&&this.open){const t=cc(this.selected);if(t){const s=new Date(t.getTime()+2592e5);this.viewYear=s.getUTCFullYear(),this.viewMonth=s.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(e){this.selected=e,this.dispatchEvent(new CustomEvent("select",{detail:{week:e},bubbles:!0,composed:!0})),this.close()}shiftMonth(e){const t=new Date(Date.UTC(this.viewYear,this.viewMonth+e,1));this.viewYear=t.getUTCFullYear(),this.viewMonth=t.getUTCMonth()}goToday(){this.select(nt())}render(){if(!this.open)return h;const e=dc(this.viewYear,this.viewMonth),t=new Date,s=`${t.getUTCFullYear()}-${t.getUTCMonth()}-${t.getUTCDate()}`;return r`
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
            <div class="px-1 font-medium">${oc[this.viewMonth]} ${this.viewYear}</div>
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
          ${rc.map(i=>r`<div class="text-center">${i}</div>`)}
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
                ${i.days.map(o=>{const a=o.getUTCMonth()===this.viewMonth,d=`${o.getUTCFullYear()}-${o.getUTCMonth()}-${o.getUTCDate()}`===s;return r`
                    <div
                      class="h-7 grid place-items-center rounded-sm ${d?"font-semibold text-[var(--accent)]":""} ${a?n?"text-ink":"":"opacity-40"}"
                    >${o.getUTCDate()}</div>
                  `})}
              </button>
            `})}
        </div>
      </div>
    `}};us([b()],At.prototype,"selected",2);us([b({type:Boolean})],At.prototype,"open",2);us([c()],At.prototype,"viewYear",2);us([c()],At.prototype,"viewMonth",2);At=us([k("week-picker")],At);var hc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,ir=(e,t,s,i)=>{for(var n=i>1?void 0:i?uc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&hc(t,s,n),n};function nt(){const e=new Date,t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Tn(e,t){const s=/^(\d{4})-W(\d{2})$/.exec(e);if(!s||!s[1]||!s[2])return e;const i=Number(s[1]),n=Number(s[2]),o=new Date(Date.UTC(i,0,4)),a=o.getUTCDay()||7,l=new Date(o.getTime()-(a-4)*864e5),d=new Date(l.getTime()+(n-1+t)*7*864e5);return pc(d)}function pc(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function mc(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5),l=new Date(a.getTime()+(i-1)*7*864e5),d=new Date(l.getTime()+6*864e5);return{start:l,end:d}}const Dn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function gc(e){const t=mc(e);if(!t)return e;const s=Dn[t.start.getUTCMonth()],i=Dn[t.end.getUTCMonth()],n=t.start.getUTCDate(),o=t.end.getUTCDate();return s===i?`${s} ${n}–${o}`:`${s} ${n} – ${i} ${o}`}let Pi=class extends ${constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=_(this,g,e=>e.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(e){await g.getState().setWeek(e)}togglePicker(e){e.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(e){this.pickerOpen=!1,e.detail?.week&&this.goto(e.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const e=g.getState().currentWeek??nt(),t=nt();return r`
      <div class="relative flex items-center font-mono text-sm tracking-wide">
        <button
          class=${e!==t?"px-1 whitespace-nowrap text-muted hover:text-ink font-semibold":"px-1 whitespace-nowrap text-ink hover:opacity-70 font-semibold"}
          aria-label="Pick a week"
          aria-haspopup="dialog"
          aria-expanded=${this.pickerOpen}
          @click=${this.togglePicker}
        >${gc(e)}</button>
        <week-picker
          .selected=${e}
          .open=${this.pickerOpen}
          @select=${this.onPickerSelect}
          @close=${this.onPickerClose}
        ></week-picker>
      </div>
    `}};ir([c()],Pi.prototype,"pickerOpen",2);Pi=ir([k("week-nav")],Pi);var fc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,tt=(e,t,s,i)=>{for(var n=i>1?void 0:i?bc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&fc(t,s,n),n};let qe=class extends ${constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),e.dataTransfer.setData("text/plain",this.commit.title),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-commit-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.commit.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await g.getState().reorderCommitment(s,n)}}connectedCallback(){super.connectedCallback(),this.unsub=_(this,g,e=>e.goals),this.unsub2=_(this,g,e=>e.northStars),this.unsubFocused=_(this,g,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.()}updated(e){e.has("editing")&&this.editing&&this.editInput&&(this.editInput.focus(),this.editInput.select(),this.autoGrow(this.editInput))}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}get linkedGoal(){const e=this.commit;if(e.goal_id!=null)return g.getState().goals.find(t=>t.id===e.goal_id)??null;if(e.key_result_id!=null){for(const t of g.getState().goals)if((t.keyResults??[]).some(s=>s.id===e.key_result_id))return t}return null}async toggleDone(e){e.stopPropagation(),this.clearHighlight(),await g.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async onDelete(e){e.stopPropagation(),await g.getState().deleteCommitment(this.commit.id)}onMarkerClick(e){e.stopPropagation();const t=e.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:t},bubbles:!0,composed:!0}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("commit-touched",{detail:{id:this.commit.id},bubbles:!0,composed:!0}))}startEdit(e){e.stopPropagation(),this.clearHighlight(),this.editing=!0}async commitEdit(e){if(!this.editing)return;const s=(this.editInput?.value??"").trim(),i=this.commit.title;this.editing=!1,e&&s&&s!==i&&await g.getState().updateCommitment(this.commit.id,{title:s})}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit(!0)):e.key==="Escape"&&(e.preventDefault(),this.commitEdit(!1))}renderMarker(){const e=this.linkedGoal;if(e){const t=e.symbol??null,s=e.color??null,i=t?Ns[t]:void 0;if(t&&i){const o=s?`color:var(--nsc-${s})`:"";return r`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${X(Ls(i))}</span
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
    `}render(){const e=this.commit,t=this.linkedGoal,s=t?t.title:"Assign to a goal or KR",i=e.done===1,n=i?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${e.id}`,l=g.getState().focusedRowKey===o?"bg-hover":"";return r`
      <li
        class="group/row flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover ${l} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
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
              ><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:h}
        </button>
        ${this.editing?r`
              <textarea
                class="inline-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none p-0 pb-1 resize-none overflow-hidden leading-snug"
                style="border-bottom:0.5px solid var(--color-line);"
                rows="1"
                .value=${e.title}
                @input=${d=>this.autoGrow(d.target)}
                @keydown=${this.onEditKey}
                @paste=${Is}
                @blur=${()=>this.commitEdit(!0)}
              ></textarea>
            `:r`
              <span
                class="flex-1 text-sm cursor-text pb-1 ${i?"line-through text-muted":this.highlight?"font-medium":"text-ink"}"
                style="border-bottom:0.5px solid var(--color-line);${this.highlight&&!i?"color:var(--nsc-green);":""}"
                @click=${this.startEdit}
              >${sr(e.title)}</span>
            `}
        ${e.owner==="agent"?r`<span
              class="shrink-0 self-center text-[11px] text-muted px-1.5 py-0.5 rounded-full leading-none"
              style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
              title="An agent owns this task and may pick it up"
              >agent</span
            >`:h}
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
    `}};tt([b({attribute:!1})],qe.prototype,"commit",2);tt([b({attribute:!1})],qe.prototype,"index",2);tt([b({type:Boolean})],qe.prototype,"highlight",2);tt([c()],qe.prototype,"editing",2);tt([c()],qe.prototype,"dragEnabled",2);tt([c()],qe.prototype,"dragOverPos",2);tt([J("textarea.inline-edit")],qe.prototype,"editInput",2);qe=tt([k("commit-row")],qe);var xc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,_t=(e,t,s,i)=>{for(var n=i>1?void 0:i?vc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&xc(t,s,n),n};let dt=class extends ${constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.outsideClickHandler=e=>{const t=e.target;t&&(this.contains(t)||this.anchor&&this.anchor.contains(t)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=_(this,g,e=>e.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const e=this.anchor.getBoundingClientRect();this.style.position="fixed",this.style.right=`${window.innerWidth-e.right}px`,this.style.zIndex="1000";const t=this.getBoundingClientRect().height||320,s=window.innerHeight-e.bottom,i=e.top,n=8;s>=t+n||s>=i?(this.style.top=`${e.bottom+4}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,s-n)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-e.top+4}px`,this.style.maxHeight=`${Math.max(160,i-n)}px`),this.style.overflowY="auto"}buildItems(){const e=this.query.trim().toLowerCase(),t=g.getState().goals.filter(i=>i.status==="active"),s=[];s.push({kind:"none",label:"— none",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const i of t){const n=i.keyResults??[],o=i.title.toLowerCase();if(!e||o.includes(e)||n.some(l=>l.title.toLowerCase().includes(e))){s.push({kind:"goal",id:i.id,label:i.title,northStar:i.north_star,current:this.currentGoalId===i.id&&this.currentKeyResultId==null});for(const l of n)e&&!o.includes(e)&&!l.title.toLowerCase().includes(e)||s.push({kind:"kr",id:l.id,parent:i.id,label:l.title,northStar:i.north_star,current:this.currentKeyResultId===l.id})}}return s}pick(e){let t;e.kind==="none"?t={goalId:null,keyResultId:null}:e.kind==="goal"?t={goalId:e.id,keyResultId:null}:t={goalId:null,keyResultId:e.id},this.dispatchEvent(new CustomEvent("pick",{detail:t,bubbles:!0,composed:!0}))}onSearchKey(e){e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}renderNsMarker(e,t){if(!e)return h;const s=g.getState().northStars.find(u=>u.slug===e),i=s?.symbol??null,n=s?.color??null,o=t==="goal"?14:12,a=t==="goal"?1:.75,l=i?Ns[i]:void 0,d=n?`color:var(--nsc-${n});opacity:${a}`:`opacity:${a}`;return i&&l?r`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${d}"
        >${X(Ls(l))}</span
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
                ${n?r`<span class="text-muted">—</span>`:"northStar"in t?this.renderNsMarker(t.northStar,s?"goal":"kr"):h}
                <span class="truncate flex-1 ${i?"text-muted":""}"
                  >${t.label}</span
                >
              </li>
            `})}
        </ul>
      </div>
    `}};_t([b({attribute:!1})],dt.prototype,"anchor",2);_t([b({type:Number})],dt.prototype,"currentGoalId",2);_t([b({type:Number})],dt.prototype,"currentKeyResultId",2);_t([c()],dt.prototype,"query",2);_t([J(".cp-search")],dt.prototype,"searchEl",2);dt=_t([k("category-picker")],dt);function Yt(e,t){const s={text:e,kind:t};document.dispatchEvent(new CustomEvent("mana-planner-note",{detail:s}))}async function nr(e,t){try{if(!(await U("/api/ideas",{text:t}))?.id)throw new Error("no parked item id")}catch{return Yt(`Couldn't park: ${t}`,"error"),!1}try{await S.commitments.remove(e),Yt(`Parked: ${t}`,"user")}catch{Yt(`Parked, but the task wasn't removed: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),g.getState().loadCommitments().catch(()=>{}),!0}async function or(e,t){try{const s=g.getState().currentWeek??void 0;if(!(await S.commitments.create({title:t,week:s}))?.id)throw new Error("no task id")}catch{return Yt(`Couldn't add to the week: ${t}`,"error"),!1}try{await Gt(`/api/ideas/${e}`)}catch{Yt(`Added, but it's still parked: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),g.getState().loadCommitments().catch(()=>{}),!0}var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,Mt=(e,t,s,i)=>{for(var n=i>1?void 0:i?wc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&yc(t,s,n),n};let ht=class extends ${constructor(){super(...arguments),this.mode="open",this.pickerCommitId=null,this.pickerAnchor=null,this.dragOverIdea=!1,this.highlightIds=new Set,this.flash=new Es(this,"commitment"),this.onOpsEvent=e=>{const t=e.detail;this.flash.take(t),this.mode==="open"&&t?.action==="refresh"&&t.added?.kind==="commitment"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id))},this.onCommitTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightIds.has(t))return;const s=new Set(this.highlightIds);s.delete(t),this.highlightIds=s},this.onIdeaDragOver=e=>{this.mode==="open"&&e.dataTransfer?.types.includes("text/x-idea-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverIdea=!0)},this.onIdeaDragLeave=()=>{this.dragOverIdea=!1},this.onIdeaDrop=async e=>{if(this.mode!=="open")return;const t=e.dataTransfer?.getData("text/x-idea-id");if(!t)return;e.preventDefault(),this.dragOverIdea=!1;const s=(e.dataTransfer?.getData("text/plain")||"").trim();s&&await or(Number(t),s)}}connectedCallback(){super.connectedCallback(),this.unsubCommits=_(this,g,e=>e.commitments),this.unsubGoals=_(this,g,e=>e.goals),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.(),document.removeEventListener("ops-event",this.onOpsEvent)}onOpenPicker(e){if(this.pickerCommitId===e.detail.commitId){this.closePicker();return}this.pickerCommitId=e.detail.commitId,this.pickerAnchor=e.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(e){const t=this.pickerCommitId;t!=null&&(this.closePicker(),await g.getState().updateCommitment(t,{goalId:e.detail.goalId,keyResultId:e.detail.keyResultId}))}render(){const e=g.getState().commitments,t=e.filter(i=>this.mode==="done"?i.done:!i.done),s=e.find(i=>i.id===this.pickerCommitId)??null;return r`
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
          `:h}
    `}};Mt([b()],ht.prototype,"mode",2);Mt([c()],ht.prototype,"pickerCommitId",2);Mt([c()],ht.prototype,"pickerAnchor",2);Mt([c()],ht.prototype,"dragOverIdea",2);Mt([c()],ht.prototype,"highlightIds",2);ht=Mt([k("weekly-commits")],ht);var kc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,ve=(e,t,s,i)=>{for(var n=i>1?void 0:i?$c(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&kc(t,s,n),n};const Sc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6"/><polyline points="8 5 4 9 8 13"/></svg>',En="slmai.cockpit.weekSectionCollapsed",Js="slmai.cockpit.weekSection.title",In="slmai.cockpit.weekSection.hideDone",Xs="Shipping this week";let pe=class extends ${constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.hideDone=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=Xs,this.leftoverCount=0,this.newGoalId=null,this.newKeyResultId=null,this.addPickerOpen=!1,this.addPickerAnchor=null,this.leftoverForWeek=null,this.opsHandler=e=>{const s=e.detail;s&&(s.action==="load-week"?g.getState().setWeek(s.week):s.action==="refresh"&&g.getState().loadCommitments(s.week))},this.closeAddPicker=()=>{this.addPickerOpen=!1,this.addPickerAnchor=null}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(En)==="1",this.hideDone=localStorage.getItem(In)==="1",this.titleValue=localStorage.getItem(Js)??Xs,fetch("/api/settings").then(t=>t.json()).then(t=>{const s=t["ui.section.week.title"];s&&(this.titleValue=s,localStorage.setItem(Js,s))}).catch(()=>{}),this.unsub=_(this,g,t=>t.currentWeek),this.unsubCommits=_(this,g,t=>`${t.commitments.filter(s=>s.done).length}`),document.addEventListener("ops-event",this.opsHandler);const e=g.getState();e.goals.length||e.loadGoals().catch(()=>{}),e.currentWeek==null&&e.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsubCommits?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(e){e.has("adding")&&this.adding&&this.newTitleEl?.focus();const t=nt();g.getState().currentWeek===t&&this.leftoverForWeek!==t&&(this.leftoverForWeek=t,this.refreshLeftover(t))}async refreshLeftover(e){try{const{commitments:t}=await S.commitments.listForWeek(Tn(e,-1));this.leftoverCount=t.filter(s=>!s.done).length}catch{this.leftoverCount=0}}async doCarry(e){e.stopPropagation();const t=nt();try{await S.commitments.carryOver(Tn(t,-1),t)}catch{}this.leftoverCount=0,await g.getState().loadCommitments(t)}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||Xs;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(Js,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(En,this.collapsed?"1":"0")}catch{}}toggleHideDone(e){e.stopPropagation(),this.hideDone=!this.hideDone;try{localStorage.setItem(In,this.hideDone?"1":"0")}catch{}}async commitAdd(e){const t=this.newTitleEl,s=(t?.value??"").trim();s&&await g.getState().createCommitment({title:s,goalId:this.newGoalId,keyResultId:this.newKeyResultId}),this.newGoalId=null,this.newKeyResultId=null,e||!s?this.adding=!1:t&&(t.value="")}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!1)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newGoalId=null,this.newKeyResultId=null)}startAdd(){this.newGoalId=null,this.newKeyResultId=null,this.adding=!0}get newLinkedGoal(){const e=g.getState().goals;if(this.newGoalId!=null)return e.find(t=>t.id===this.newGoalId)??null;if(this.newKeyResultId!=null){for(const t of e)if((t.keyResults??[]).some(s=>s.id===this.newKeyResultId))return t}return null}openAddPicker(e){e.stopPropagation(),this.addPickerAnchor=e.currentTarget,this.addPickerOpen=!0}onAddPick(e){this.newGoalId=e.detail.goalId,this.newKeyResultId=e.detail.keyResultId,this.closeAddPicker(),this.updateComplete.then(()=>this.newTitleEl?.focus())}renderAddMarker(){const e=this.newLinkedGoal;if(e){const t=e.symbol??null,s=e.color??null,i=t?Ns[t]:void 0;return t&&i?r`<span
          class="inline-flex items-center justify-center w-3.5 h-3.5"
          style=${s?`color:var(--nsc-${s})`:""}
          >${X(Ls(i))}</span
        >`:r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${s?`background:var(--nsc-${s})`:"background:var(--muted)"}
      ></span>`}return r`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>`}render(){const e=g.getState().currentWeek===nt(),t=g.getState().commitments.filter(i=>i.done).length,s=this.tabbed||!this.collapsed;return r`
      <section class="group/section-header flex flex-col gap-1">
        ${this.tabbed?h:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${X(this.collapsed?hs:ds)}</span
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
                        ${X(Sc)}
                      </button>`:h}
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
                        @paste=${Is}
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
                        ></category-picker>`:h}
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
                    ${this.hideDone?h:r`<weekly-commits .mode=${"done"}></weekly-commits>`}
                  `:h}
            `:h}
      </section>
    `}};ve([b({type:Boolean})],pe.prototype,"tabbed",2);ve([c()],pe.prototype,"collapsed",2);ve([c()],pe.prototype,"hideDone",2);ve([c()],pe.prototype,"adding",2);ve([c()],pe.prototype,"editingTitle",2);ve([c()],pe.prototype,"titleValue",2);ve([c()],pe.prototype,"leftoverCount",2);ve([c()],pe.prototype,"newGoalId",2);ve([c()],pe.prototype,"newKeyResultId",2);ve([c()],pe.prototype,"addPickerOpen",2);ve([c()],pe.prototype,"addPickerAnchor",2);ve([J("input.new-commit-title")],pe.prototype,"newTitleEl",2);pe=ve([k("week-section")],pe);var Cc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,E=(e,t,s,i)=>{for(var n=i>1?void 0:i?Tc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Cc(t,s,n),n};let ut=null;const An=(...e)=>ut.getMarkdown(...e),Zs=(...e)=>ut.setMarkdown(...e),Dc=(...e)=>ut.alignSelectedImage(...e),Ec=(...e)=>ut.startTitledNote(...e),ei=(...e)=>ut.isBlankNote(...e);let ti=null;const Ic=640,Pn="mana.notes.sidebarHidden",_n="mana.notes.sidebarWidth",si=864e5,ge=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl+",Mn=`New note (${ge}N)`,Ac=[{name:"Default",v:null},{name:"Gray",v:"#6b7280"},{name:"Red",v:"#e5484d"},{name:"Orange",v:"#e8590c"},{name:"Amber",v:"#bd8400"},{name:"Green",v:"#2f9e44"},{name:"Blue",v:"#1971c2"},{name:"Violet",v:"#7048e8"},{name:"Pink",v:"#c2255c"}],Pc=[{name:"Yellow",v:"#fff3a3"},{name:"Green",v:"#c3f0ca"},{name:"Blue",v:"#c5e2ff"},{name:"Pink",v:"#ffd6e7"},{name:"Orange",v:"#ffe0b8"},{name:"Purple",v:"#ecd5ff"}],G=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,ii=(e,t,s,i="text-muted hover:text-ink")=>r`
  <button type="button" title=${t} aria-label=${t}
    class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg hover:bg-hover ${i}"
    @click=${n=>{n.stopPropagation(),s()}}>${G(e)}</button>`,W=e=>e instanceof Error?e.message:String(e),_c=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let D=class extends ${constructor(){super(...arguments),this.files=[],this.trashCount=0,this.activeName=null,this.isDraft=!1,this.error=null,this.initialized=!1,this.wide=!0,this.view="list",this.sidebarHidden=!1,this.sidebarWidth=256,this.sidebarDrag=null,this.onSidebarDown=e=>{if(e.button!==0)return;e.preventDefault();const t=e.currentTarget;t.focus(),t.setPointerCapture(e.pointerId),this.sidebarDrag={pointerId:e.pointerId,x:e.clientX,width:Math.min(this.sidebarWidth,this.sidebarMaxWidth),hidden:this.sidebarHidden,moved:!1}},this.onSidebarMove=e=>{const t=this.sidebarDrag;if(!t||t.pointerId!==e.pointerId||!t.moved&&Math.abs(e.clientX-t.x)<4)return;t.moved=!0;const s=(t.hidden?0:t.width)+e.clientX-t.x;this.sidebarHidden=s<120,this.sidebarHidden||(this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,s)))},this.onSidebarUp=e=>{const t=this.sidebarDrag;!t||t.pointerId!==e.pointerId||(this.sidebarDrag=null,!t.moved&&this.sidebarHidden&&(this.sidebarHidden=!1),this.saveSidebar())},this.onSidebarCancel=()=>{this.sidebarDrag&&(this.sidebarWidth=this.sidebarDrag.width,this.sidebarHidden=this.sidebarDrag.hidden,this.sidebarDrag=null)},this.resetSidebar=()=>{this.sidebarHidden=!1,this.sidebarWidth=256,this.saveSidebar()},this.onSidebarKey=e=>{if(e.key==="Escape"&&this.sidebarDrag){this.onSidebarCancel();return}if(["ArrowLeft","ArrowRight","Home","End","Enter"," "].includes(e.key)){if(e.preventDefault(),e.key==="Enter"||e.key===" "){this.toggleSidebar();return}e.key==="Home"?this.sidebarHidden=!0:e.key==="End"||e.key==="ArrowRight"&&this.sidebarHidden?this.sidebarHidden=!1:e.key==="ArrowLeft"&&this.sidebarWidth<=192?this.sidebarHidden=!0:this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,this.sidebarWidth+(e.key==="ArrowLeft"?-16:16))),this.saveSidebar()}},this.searchQ="",this.hits=null,this.trashOpen=!1,this.trashItems=[],this.toast=null,this.tbMenu=null,this.tbTrigger=null,this.toolbarPortal=null,this.blogEnabled=!1,this.blogConnected=!1,this.blogBusy=!1,this.tagSaving=!1,this.syncingBlog=!1,this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all",this.allBlogTags=[],this.blogDeleteName=null,this.publishConfirm=null,this.rowMenuName=null,this.rowMenuPoint=null,this.duplicating=!1,this.pinnedCollapsed=!1,this.closeToolbar=()=>{this.tbMenu=null},this.onToolbarScroll=e=>{e.target instanceof Node&&this.toolbarPortal?.contains(e.target)||this.closeToolbar()},this.onToolbarMenuKey=e=>{if(e.key==="Escape"){e.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}if(e.target instanceof HTMLInputElement||!["ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const t=[...this.toolbarPortal.querySelectorAll("button:not(:disabled)")];if(!t.length)return;const s=t.indexOf(document.activeElement),i=e.key==="Home"?0:e.key==="End"?t.length-1:(s+(e.key==="ArrowUp"?-1:1)+t.length)%t.length;e.preventDefault(),t[i]?.focus()},this.editorTick=0,this.liveTitle="",this.dragName=null,this.dropAt=null,this.mediaOpen=!1,this.mediaPurpose="body",this.mediaNote=null,this.mediaReplacement=null,this.uploading=0,this.uploadPct=0,this.suppressClick=!1,this.hostReady=!1,this.cur=null,this.dirty=!1,this.pending=0,this.queue=Promise.resolve(),this.mutGen=0,this.selfNames=new Set,this.renamed=new Map,this.contentCache=new Map,this.pollFailed=!1,this.selectionText="",this.onDocDown=e=>{if(!this.tbMenu)return;!e.composedPath().some(s=>s instanceof HTMLElement&&s.hasAttribute("data-tb-root"))&&!e.composedPath().includes(this.toolbarPortal)&&this.closeToolbar()},this.onKey=e=>{if(e.defaultPrevented||e.isComposing||!this.getClientRects().length||this.mediaOpen)return;const t=e.target instanceof HTMLElement?e.target:null;if(t&&!this.contains(t)&&!this.toolbarPortal?.contains(t)&&(t.isContentEditable||t.closest("input, textarea, select, [role=dialog], [role=menu]")))return;if(e.key==="Escape"&&this.tbMenu){e.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}const s=(e.metaKey||e.ctrlKey)&&!e.altKey,i=s&&!e.shiftKey&&e.code==="KeyN"||e.altKey&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&e.code==="KeyN",n=s&&e.shiftKey&&e.code==="KeyF",o=s&&!e.shiftKey&&e.code==="Backslash",a=s&&!e.shiftKey&&e.code==="KeyS";!i&&!n&&!o&&!a||(e.preventDefault(),e.stopPropagation(),!e.repeat&&(i?(this.closeToolbar(),this.newNote()):n?this.focusNotesSearch():o?(this.closeToolbar(),this.wide?this.toggleSidebar():this.view=this.view==="note"?"list":this.cur?"note":"list",(this.wide?!this.sidebarHidden:this.view==="list")?this.focusNotesSearch():this.updateComplete.then(()=>this.editor?.commands.focus())):a&&this.flush()))},this.onVisibility=()=>{if(document.visibilityState!=="hidden")return;this.flush();const e=this.cur;e?.touched&&(e.touched=!1,this.queueRetitle(e))},this.onSettle=e=>{this.flush(),e.detail?.wait?.(this.enqueue(async()=>{}))},this.onNoteChanged=e=>{const t=e.detail?.file;this.cur?.name&&this.cur.name===t&&!this.dirty&&this.loadContent(this.cur),this.loadFiles()},this.onOpenNote=e=>{const t=e.detail;!t?.file||!/^(?!\.)[^/\\\0]+\.md$/.test(t.file)||(t.ack?.(),this.clearSearch(),this.matchesNoteFilter(t.file)||(this.noteFilter="all"),this.open(t.file))}}get sidebarMaxWidth(){return Math.max(192,Math.min(480,this.clientWidth-328))}saveSidebar(){try{localStorage.setItem(Pn,this.sidebarHidden?"1":"0"),localStorage.setItem(_n,String(this.sidebarWidth))}catch{}}async loadBlogStatus(){try{const e=await this.api("GET","/api/notes/blog/status");this.blogEnabled=e.enabled,this.blogConnected=e.connected,e.connected&&Date.now()-e.lastSync>6e4&&this.syncBlogLibrary(!0)}catch{}}async syncBlogLibrary(e=!1){if(!this.syncingBlog){this.syncingBlog=!0;try{this.flush(),await this.queue;const t=await this.api("POST","/api/notes/blog/sync",{activeName:this.cur?.name});await this.loadFiles(),(!e||t.conflicts)&&this.showToast(t.conflicts?`${t.conflicts} article(s) have changes on both sides`:`Blog synced: ${t.imported} imported, ${t.updated} updated`)}catch(t){this.showToast(W(t))}finally{this.syncingBlog=!1}}}async savedNote(){const e=this.cur;if(this.flush(),await this.queue,!e?.name||e===this.cur&&this.dirty)throw new Error("Save a note with a title and content first.");return e}async blogAction(e){if(!(this.blogBusy||this.tagSaving||this.uploading)){this.blogBusy=!0;try{const t=await this.savedNote(),s=await this.api("POST",`/api/notes/blog/${e==="save-draft"?"publish":e}`,{name:t.name,published:e!=="save-draft"});t===this.cur&&(this.activeBlog=s.blog,this.blogLocalDirty=this.dirty||s.blog.dirty),e==="pull"&&t===this.cur&&(this.contentCache.delete(t.name),await this.loadContent(t)),await this.loadFiles(),this.showToast(e==="publish"?"Published to blog":e==="save-draft"?"Draft saved to blog":e==="unpublish"?"Unpublished from blog":"Latest blog version pulled. Any local edits were kept as a separate note.")}catch(t){this.showToast(W(t))}finally{this.blogBusy=!1}}}async saveTags(e){if(!this.tagSaving){this.tagSaving=!0;try{await this.enqueue(async()=>{});const t=await this.savedNote(),s=await this.enqueue(()=>this.api("PATCH","/api/notes/blog/tags",{name:t.name,categories:e}));t===this.cur&&(this.activeBlog=s.blog),this.loadFiles()}catch(t){this.showToast(W(t))}finally{this.tagSaving=!1}}}async openTags(e=!1){try{this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags}catch{this.allBlogTags=[]}this.isConnected&&(this.tbMenu=e?"manage-tags":"tags")}async renameTag(e,t){if(t=t.trim(),!(!t||t===e)&&!this.blogBusy){this.blogBusy=!0;try{const s=await this.api("POST","/api/notes/blog/rename-tag",{from:e,to:t});await this.loadFiles(),this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags,this.showToast(s.failed?`${s.updated} articles updated; ${s.failed} could not be updated`:"Tag renamed across the blog")}catch(s){this.showToast(W(s))}finally{this.blogBusy=!1}}}async confirmBlogDelete(){const e=this.blogDeleteName;if(!(!e||this.blogBusy)){this.blogBusy=!0;try{await this.api("POST","/api/notes/blog/delete",{name:e,confirm:!0}),this.blogDeleteName=null,this.trashNote(e),this.cur?.name===e&&(this.activeBlog=null),this.showToast("Article deleted from the blog")}catch(t){this.showToast(W(t))}finally{this.blogBusy=!1}}}matchesNoteFilter(e){const t=!!this.files.find(s=>s.name===e)?.blog?.url;return this.noteFilter==="all"||(this.noteFilter==="blog"?t:!t)}openRowMenu(e,t){e.preventDefault(),e.stopPropagation(),this.closeToolbar();const i=e.currentTarget.closest("[data-drop-row]")?.querySelector("button");if(!i)return;const n=i.getBoundingClientRect();this.rowMenuName=t,this.rowMenuPoint="clientX"in e&&(e.clientX||e.clientY)?{x:e.clientX,y:e.clientY}:{x:n.left+16,y:n.top+24},this.tbTrigger=i,this.tbMenu="row",this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}async noteMarkdown(e){return await this.queue,e=this.renamed.get(e)??e,this.cur?.name===e&&this.cur.loaded&&this.editor?An(this.editor):(await this.api("GET",`/api/notes/files/${encodeURIComponent(e)}`)).content}async duplicateNote(e){if(!this.duplicating){this.duplicating=!0;try{const s=(await this.noteMarkdown(e)).replace(/^([ \t]*#{1,6}\s+)?([^\r\n]*)/,(n,o,a)=>`${o||""}${a||"Untitled"} (copy)`),i=await this.enqueue(()=>this.api("POST","/api/notes/files",{content:s}));this.selfNames.add(i.name),this.contentCache.set(i.name,s),this.mutGen++,await this.loadFiles(),this.open(i.name),this.showToast("Note duplicated")}catch(t){this.error=W(t)}finally{this.duplicating=!1}}}async copyNote(e){try{await navigator.clipboard.writeText(await this.noteMarkdown(e)),this.showToast("Note copied")}catch{this.showToast("Could not copy note")}}paintToolbarPortal(){if(!this.tbMenu||!this.tbTrigger?.isConnected||!this.editor){this.toolbarPortal&&(Dt(h,this.toolbarPortal),this.toolbarPortal.remove(),this.toolbarPortal=null);return}this.toolbarPortal||(this.toolbarPortal=document.createElement("div"),this.toolbarPortal.className="fixed z-[100] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",this.toolbarPortal.id="notes-toolbar-menu",this.toolbarPortal.setAttribute("role","dialog"),document.body.appendChild(this.toolbarPortal)),this.toolbarPortal.setAttribute("role",this.tbMenu==="row"?"menu":"dialog"),this.toolbarPortal.setAttribute("aria-label",{format:"Text formatting",list:"Lists",more:"Note actions",shortcuts:"Keyboard shortcuts",row:"Note actions",library:"Notes library",tags:"Article tags","manage-tags":"Manage blog tags","featured-image":"Featured image"}[this.tbMenu]),this.toolbarPortal.style.fontFamily=getComputedStyle(this).fontFamily,this.toolbarPortal.style.width=`${Math.min(272,window.innerWidth-16)}px`,this.toolbarPortal.style.maxHeight=`${window.innerHeight-16}px`,Dt(this.renderToolbarMenu(),this.toolbarPortal);const e=this.tbTrigger.getBoundingClientRect(),t=this.toolbarPortal.getBoundingClientRect(),s=this.tbMenu==="row"?this.rowMenuPoint.x:e.left;this.toolbarPortal.style.left=`${Math.max(8,Math.min(s,window.innerWidth-t.width-8))}px`;const i=this.tbMenu==="row"?this.rowMenuPoint.y:e.bottom+6+t.height>window.innerHeight-8?e.top-t.height-6:e.bottom+6;this.toolbarPortal.style.top=`${Math.max(8,Math.min(i,window.innerHeight-t.height-8))}px`}focusNotesSearch(){this.closeToolbar(),this.wide?(this.sidebarHidden=!1,this.saveSidebar()):this.view="list",this.updateComplete.then(()=>{const e=this.querySelector("[data-notes-search]");e?.focus(),e?.select()})}connectedCallback(){super.connectedCallback();try{this.sidebarHidden=localStorage.getItem(Pn)==="1";const e=Number(localStorage.getItem(_n));Number.isFinite(e)&&e>=192&&(this.sidebarWidth=Math.min(480,e))}catch{}this.resizeObs=new ResizeObserver(()=>{this.onSidebarCancel();const e=this.clientWidth>=Ic;e!==this.wide?this.wide=e:this.requestUpdate()}),this.resizeObs.observe(this),this.loadFiles(),this.loadBlogStatus(),this.pollTimer=setInterval(()=>{document.hidden||this.loadFiles()},4e3),window.addEventListener("pointerdown",this.onDocDown,!0),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("scroll",this.onToolbarScroll,!0),window.addEventListener("resize",this.closeToolbar),window.addEventListener("mana:notes-settle",this.onSettle),window.addEventListener("mana:note-changed",this.onNoteChanged),window.addEventListener("mana:open-note",this.onOpenNote)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mana:notes-settle",this.onSettle),window.removeEventListener("mana:note-changed",this.onNoteChanged),window.removeEventListener("mana:open-note",this.onOpenNote),window.removeEventListener("pointerdown",this.onDocDown,!0),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("scroll",this.onToolbarScroll,!0),window.removeEventListener("resize",this.closeToolbar),this.tbMenu=null,this.paintToolbarPortal(),this.resizeObs?.disconnect(),this.onSidebarCancel(),this.pollTimer&&clearInterval(this.pollTimer),this.searchTimer&&clearTimeout(this.searchTimer),this.toastTimer&&clearTimeout(this.toastTimer),this.closeMedia(),this.leave(),this.editor?.destroy(),this.editor=void 0}get holdReload(){return this.dirty||this.pending>0||(this.editor?.isFocused??!1)}async api(e,t,s){const i=await fetch(t,{method:e,credentials:"include",headers:s===void 0?void 0:{"content-type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!i.ok){const n=await i.json().catch(()=>({}));throw new Error(n.error||`Request failed (${i.status})`)}return await i.json()}enqueue(e){const t=this.queue.then(e);return this.queue=t.catch(()=>{}),t}async loadFiles(){if(this.dragName)return;const e=this.mutGen;try{const t=await this.api("GET","/api/notes/files");if(e!==this.mutGen)return;this.pollFailed&&(this.pollFailed=!1,this.error=null);const s=new Set(this.files.map(a=>a.name));if(this.files=t.files,this.trashCount=t.trashCount??0,this.cur?.name&&(this.activeBlog=this.files.find(a=>a.name===this.cur.name)?.blog??null,!this.dirty&&!this.pending&&(this.blogLocalDirty=!!this.activeBlog?.dirty)),!this.initialized){this.initialized=!0,this.wide&&!this.cur&&t.files[0]&&this.open(t.files[0].name);return}const i=t.files.filter(a=>!s.has(a.name)&&!this.selfNames.has(a.name));if(i.length&&!this.holdReload&&!this.syncingBlog){const a=i.reduce((l,d)=>d.modifiedAt>l.modifiedAt?d:l);this.open(a.name);return}const n=this.cur;if(!n?.name||this.holdReload)return;const o=t.files.find(a=>a.name===n.name);o?o.modifiedAt>n.mtime&&this.loadContent(n):this.closeCurrent()}catch(t){this.error=W(t),this.pollFailed=!0}}async loadContent(e){if(e.name)try{const t=await this.api("GET",`/api/notes/files/${encodeURIComponent(e.name)}`);if(this.contentCache.set(e.name,t.content),e!==this.cur||!this.editor||this.dirty)return;e.mtime=t.modifiedAt??0,Zs(this.editor,t.content),e.loaded=!0,this.editor.setEditable(!0,!1),this.error=null}catch(t){this.error=W(t)}}open(e){if(this.trashOpen=!1,this.activeBlog=this.files.find(s=>s.name===e)?.blog??null,this.blogLocalDirty=!!this.activeBlog?.dirty,this.cur?.name===e){this.view="note";return}this.leave();const t={name:e,mtime:0,touched:!1,loaded:!1};this.cur=t,this.syncActive(),this.view="note",this.dirty=!1,this.showCached(t),this.loadContent(t)}showCached(e){const t=this.editor;if(!t||!e.name)return;const s=this.contentCache.get(e.name);Zs(t,s??""),e.loaded=s!=null,t.setEditable(e.loaded,!1)}newNote(){this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all";const e=this.editor;e&&(this.trashOpen=!1,this.clearSearch(),this.cur&&!this.cur.name&&ei(e)||(this.leave(),this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive(),Ec(e),e.setEditable(!0,!1),this.dirty=!1),this.view="note",this.updateComplete.then(()=>this.editor?.commands.focus("start")))}closeCurrent(){this.saveTimer&&clearTimeout(this.saveTimer),this.dirty=!1,this.cur=null,this.syncActive(),this.editor&&Zs(this.editor,""),this.wide&&this.files[0]?this.open(this.files[0].name):this.view="list"}back(){this.leave(),this.view="list"}syncActive(){this.activeName=this.cur?.name??null,this.isDraft=!!this.cur&&!this.cur.name,this.updateViewContext()}onEdit(){this.activeBlog?.url&&(this.blogLocalDirty=!0),this.cur||(this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive()),this.cur.touched=!0,this.dirty=!0,this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.flush(),900)}flush(){this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0);const e=this.cur,t=this.editor;if(!e||!t||!this.dirty)return;this.dirty=!1;const s=An(t).replace(/\n*$/,`
`),i=ei(t);e.name&&this.contentCache.set(e.name,s),this.pending++,this.enqueue(async()=>{try{if(e.name){const n=await this.api("PUT",`/api/notes/files/${encodeURIComponent(e.name)}`,{content:s});e.mtime=n.modifiedAt}else{if(i)return;const n=await this.api("POST","/api/notes/files",{content:s});e.name=n.name,e.mtime=n.modifiedAt,this.selfNames.add(n.name),this.contentCache.set(n.name,s),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}this.error=null}catch(n){e===this.cur&&(this.dirty=!0),this.error=W(n)}finally{this.pending--}})}leave(){const e=this.cur,t=this.editor;if(e&&t){this.flush();const s=e.loaded&&ei(t),i=e.touched;e.touched=!1,s?this.enqueue(async()=>{if(e.name){try{await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e.name)}?ifEmpty=1`),this.contentCache.delete(e.name)}catch(n){this.error=W(n)}this.mutGen++,this.loadFiles()}}):i&&this.queueRetitle(e)}this.cur=null,this.syncActive()}queueRetitle(e){this.enqueue(async()=>{if(!e.name)return;const t=e.name;try{const s=await this.api("POST","/api/notes/retitle",{name:t});if(s.name===t)return;e.name=s.name,this.selfNames.add(s.name),this.renamed.set(t,s.name);const i=this.contentCache.get(t);this.contentCache.delete(t),i!=null&&this.contentCache.set(s.name,i),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}catch(s){this.error=W(s)}})}get pinnedNames(){return this.files.filter(e=>e.pinned).map(e=>e.name)}togglePin(e){const t=this.files.find(i=>i.name===e);if(!t)return;t.pinned||(this.pinnedCollapsed=!1);const s=this.pinnedNames.filter(i=>i!==e);this.setPins(t.pinned?s:[e,...s])}setPins(e){const t=new Map(this.files.map(n=>[n.name,n])),s=e.map(n=>t.get(n)).filter(n=>!!n).map(n=>({...n,pinned:!0})),i=this.files.filter(n=>!e.includes(n.name)).map(n=>({...n,pinned:!1})).sort((n,o)=>o.modifiedAt-n.modifiedAt);this.files=[...s,...i],this.mutGen++,this.enqueue(async()=>{try{await this.api("PUT","/api/notes/pins",{order:e.map(n=>this.renamed.get(n)??n)})}catch(n){this.error=W(n)}this.mutGen++,this.loadFiles()})}onRowPointerDown(e,t){if(e.button!==0)return;const s=e.clientX,i=e.clientY,n=e.pointerType==="touch";let o=!1;const a=()=>{o=!0,this.dragName=t,this.pinnedCollapsed=!1,this.suppressClick=!0,n&&navigator.vibrate?.(10)},l=n?setTimeout(a,350):void 0,d=x=>{o&&x.preventDefault()},u=x=>{if(!o){if(Math.hypot(x.clientX-s,x.clientY-i)<6)return;if(n){f();return}a()}this.trackDrop(x.clientY)},p=()=>{const x=o;f(),x&&this.drop()},m=()=>{f(),this.dragName=null,this.dropAt=null,this.suppressClick=!1},f=()=>{l&&clearTimeout(l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),window.removeEventListener("touchmove",d)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",m),window.addEventListener("touchmove",d,{passive:!1})}trackDrop(e){let t=null;for(const s of this.querySelectorAll("[data-drop-row]")){const i=s.getBoundingClientRect();if(!(e<i.top||e>i.bottom)){t={name:s.dataset.dropRow||null,pos:e<i.top+i.height/2?"before":"after"};break}}(t?.name!==this.dropAt?.name||t?.pos!==this.dropAt?.pos)&&(this.dropAt=t)}drop(){const e=this.dragName,t=this.dropAt;if(this.dragName=null,this.dropAt=null,setTimeout(()=>{this.suppressClick=!1},0),!e)return;const s=this.pinnedNames;if(t&&(t.name===null||s.includes(t.name))){if(t.name===e)return;const i=s.filter(o=>o!==e);let n=t.name===null?i.length:i.indexOf(t.name)+(t.pos==="after"?1:0);n<0&&(n=i.length),i.splice(n,0,e),this.setPins(i)}else s.includes(e)&&this.setPins(s.filter(i=>i!==e))}trashNote(e){if(this.cur?.name===e){this.trashCurrent();return}this.files=this.files.filter(t=>t.name!==e),this.mutGen++,this.enqueue(()=>this.doTrash(this.renamed.get(e)??e))}trashCurrent(){const e=this.cur;e&&(this.flush(),e.name&&(this.files=this.files.filter(t=>t.name!==e.name)),this.mutGen++,this.closeCurrent(),this.enqueue(async()=>{e.name&&await this.doTrash(e.name)}))}async doTrash(e){try{const t=await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e)}`);this.contentCache.delete(e);const s=t.trashed;s&&this.showToast("Moved to Recently deleted",()=>void this.restore(s))}catch(t){this.error=W(t)}this.mutGen++,this.loadFiles()}async restore(e){this.toast=null;try{const t=await this.enqueue(()=>this.api("POST","/api/notes/restore",{name:e}));this.selfNames.add(t.name),this.mutGen++,await this.loadFiles(),this.open(t.name)}catch(t){this.error=W(t)}}async openTrash(){this.clearSearch(),this.trashOpen=!0;try{this.trashItems=(await this.api("GET","/api/notes/trash")).items}catch(e){this.error=W(e)}}showToast(e,t){this.toast={text:e,undo:t},this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=null},6e3)}onSearchInput(e){if(this.searchQ=e,this.trashOpen=!1,this.searchTimer&&clearTimeout(this.searchTimer),!e.trim()){this.hits=null;return}this.searchTimer=setTimeout(()=>{this.runSearch(e)},180)}async runSearch(e){try{const t=await this.api("GET",`/api/notes/search?q=${encodeURIComponent(e)}`);e===this.searchQ&&(this.hits=t.results)}catch(t){this.error=W(t)}}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.searchQ="",this.hits=null}updateViewContext(){const e=this.cur?.name,t=e?`Note "${e}" is open in the notes pane (vault path: Notes/${e}). It's a Markdown file. Edit it with Read/Edit/Write and the cockpit re-renders live.`:this.cur?"A new note is open in the notes pane. It gets a file under Notes/ once the user has typed something.":"The notes list is open in the notes pane; no note is selected.",s=this.selectionText?` The user has selected this text: "${this.selectionText.slice(0,600)}". When they say "this" or ask to rewrite/expand/fix something, they mean the selected passage. Edit that part of the file.`:"";g.getState().setViewContext({tool:"notes",summary:t+s,note:e??null})}updated(){if(this.paintToolbarPortal(),this.hostReady||this.editor)return;const e=this.querySelector("#note-host");e&&(this.hostReady=!0,this.mountEditor(e))}async mountEditor(e){if(ut??=await Ue(()=>import("./notes-editor-D3O857wd.js"),[]),!this.isConnected||this.editor)return;this.editor=ut.createNotesEditor({host:e,uploadImage:s=>this.uploadImage(s),onReplaceImage:s=>{this.openMedia("body",s)},onUpdate:()=>this.onEdit(),onTransaction:()=>{this.editorTick++;let s="";this.editor?.state.doc.forEach(i=>{s||(s=i.textContent.trim())}),this.liveTitle=s},onSelection:s=>{s!==this.selectionText&&(this.selectionText=s,this.updateViewContext())}});const t=this.cur;t?.name&&(this.showCached(t),this.loadContent(t))}async uploadImage(e){ti??=await Ue(()=>import("./notes-media-CocbJSli.js"),__vite__mapDeps([2,3,4,5])),this.uploading++,this.uploadPct=0;try{const t=await ti.uploadMedia(e,s=>{this.uploadPct=s});return{url:t.url,alt:t.name}}catch(t){throw this.error=W(t),t}finally{this.uploading--}}async openMedia(e="body",t=null){this.mediaReplacement?.release(),this.mediaReplacement=t,this.editor?.commands.blur(),this.mediaPurpose=e,this.mediaNote=this.cur,this.tbMenu=null;try{ti??=await Ue(()=>import("./notes-media-CocbJSli.js"),__vite__mapDeps([2,3,4,5]))}catch(s){this.closeMedia(),this.error=W(s);return}this.mediaOpen=!0}closeMedia(){this.mediaOpen=!1,this.mediaReplacement?.release(),this.mediaReplacement=null}onMediaInsert(e){const t=this.mediaReplacement;if(this.mediaReplacement=null,this.mediaOpen=!1,this.mediaNote!==this.cur||!this.cur?.loaded){t?.release();return}if(this.mediaPurpose==="featured"){this.saveFeaturedImage(e.url);return}if(!this.editor){t?.release();return}const s=e.credit?{type:"paragraph",content:[{type:"text",text:"Photo: ",marks:[{type:"italic"}]},{type:"text",text:e.credit.name,marks:[{type:"italic"},{type:"link",attrs:{href:e.credit.url}}]},{type:"text",text:" on ",marks:[{type:"italic"}]},{type:"text",text:"Pexels",marks:[{type:"italic"},{type:"link",attrs:{href:e.credit.page}}]}]}:void 0;if(t){t.replace({src:e.url,alt:e.name},s)||(this.error="The original image is no longer available. Select an image and try again.");return}const i=this.editor.chain().focus().setImage({src:e.url,alt:e.name});s&&i.insertContent(s),i.run()}async saveFeaturedImage(e){if(!(this.blogBusy||this.tagSaving)){this.tagSaving=!0;try{const t=await this.savedNote(),s=await this.api("PATCH","/api/notes/blog/featured-image",{name:t.name,source:e});t===this.cur&&(this.activeBlog=s.blog),await this.loadFiles(),this.showToast(e?"Featured image selected. Publish or update the blog post to apply it.":"Featured image removed. The first image in the note will be used.")}catch(t){this.showToast(W(t))}finally{this.tagSaving=!1}}}toggleSidebar(){this.sidebarHidden=!this.sidebarHidden,this.saveSidebar()}bucket(e){const t=e*1e3,s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(t>=i)return"Today";if(t>=i-si)return"Yesterday";if(t>=i-7*si)return"Previous 7 days";if(t>=i-30*si)return"Previous 30 days";const n=new Date(t);return n.getFullYear()===s.getFullYear()?n.toLocaleDateString("en-GB",{month:"long"}):String(n.getFullYear())}dateLabel(e){const t=new Date(e*1e3),s=this.bucket(e);if(s==="Today")return t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});if(s==="Yesterday")return s;if(s==="Previous 7 days")return t.toLocaleDateString("en-GB",{weekday:"long"});const i=t.getFullYear()!==new Date().getFullYear();return t.toLocaleDateString("en-GB",{day:"numeric",month:"short",...i?{year:"numeric"}:{}})}mark(e){const t=this.searchQ.trim().split(/\s+/).filter(Boolean).map(_c);return t.length?e.split(new RegExp(`(${t.join("|")})`,"gi")).map((s,i)=>i%2?r`<mark class="bg-accent-soft text-ink rounded-sm">${s}</mark>`:s):e}renderSidebar(){const e=this.searchQ.trim();return r`
      <div class="flex items-center gap-1.5 px-3 pt-3 pb-2 shrink-0">
        <label class="flex items-center gap-1.5 flex-1 min-w-0 h-8 px-2.5 rounded-lg bg-hover text-muted">
          ${G("search","w-3.5 h-3.5 shrink-0")}
          <input data-notes-search type="text" placeholder=${this.noteFilter==="blog"?"Search blog":this.noteFilter==="local"?"Search local notes":"Search"} aria-label="Search notes" title=${`Search notes (${ge}Shift+F)`} .value=${this.searchQ}
            class="flex-1 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            @input=${t=>this.onSearchInput(t.target.value)}
            @keydown=${t=>{t.key==="Escape"&&this.clearSearch(),t.key==="Enter"&&this.hits?.[0]&&this.open(this.hits[0].name)}} />
          ${e?r`<button type="button" title="Clear search" aria-label="Clear search" class="shrink-0 text-muted hover:text-ink"
            @click=${()=>this.clearSearch()}>${G("x","w-3.5 h-3.5")}</button>`:h}
        </label>
        ${this.blogEnabled?r`<span data-tb-root class=${this.noteFilter==="all"?"":"rounded-lg bg-accent-soft"}>${this.renderToolbarTrigger("library",this.syncingBlog?"Syncing blog":"Notes and blog library",G("globe"))}</span>`:h}
        ${ii("square-pen",Mn,()=>this.newNote(),"text-accent")}
      </div>
      <div class="notes-list-scroll flex-1 min-h-0 overflow-y-auto px-2 pb-2" style="scrollbar-gutter:stable;">
        ${this.trashOpen?this.renderTrash():e?this.renderHits():this.renderList()}
      </div>
      ${!this.trashOpen&&this.trashCount?r`
        <button type="button" class="flex items-center gap-2 mx-2 mb-2 px-3 py-2 rounded-lg text-xs text-muted hover:text-ink hover:bg-hover shrink-0"
          @click=${()=>void this.openTrash()}>
          ${G("trash-2","w-3.5 h-3.5")} Recently deleted <span class="ml-auto">${this.trashCount}</span>
        </button>`:h}`}groupLabel(e,t=!1){return t?r`<button type="button" class="notes-group-heading flex items-center justify-between w-full text-left" aria-expanded=${!this.pinnedCollapsed}
          @click=${()=>{this.pinnedCollapsed=!this.pinnedCollapsed}}><span>${e}</span>${G(this.pinnedCollapsed?"chevron-right":"chevron-down","w-3.5 h-3.5 text-muted")}</button>`:r`<h3 class="notes-group-heading">${e}</h3>`}renderList(){if(!this.files.length&&!this.isDraft)return this.initialized?r`<div class="px-3 py-8 text-center text-sm text-muted">No notes yet</div>`:h;const e=[];for(const s of this.files.filter(i=>this.matchesNoteFilter(i.name))){const i=s.pinned?"Pinned":this.bucket(s.modifiedAt),n=e[e.length-1];n?.label===i?n.items.push(s):e.push({label:i,items:[s]})}const t=this.files.find(s=>s.name===this.dragName);return r`
      ${t&&!t.pinned&&!e.some(s=>s.label==="Pinned")?r`
        <div data-drop-row=""
          class="mx-1 mt-2 px-3 py-3 rounded-lg border-2 border-dashed text-xs text-center ${this.dropAt?.name===null?"border-accent text-accent":"border-line text-muted"}">
          Drop here to pin</div>`:h}
      ${this.isDraft?r`
        <div class="px-3 py-2 mt-1 rounded-lg bg-accent-soft">
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.liveTitle||"New note"}</div>
          <div class="mt-0.5 text-xs text-muted">Now</div>
        </div>`:h}
      ${e.map(s=>r`<section class="notes-list-group">${this.groupLabel(s.label,s.label==="Pinned")}${s.label==="Pinned"&&this.pinnedCollapsed?h:s.items.map(i=>this.renderRow(i))}</section>`)}`}onRowArrow(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"||e.altKey||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=[...this.querySelectorAll("#notes-list .notes-list-row")],s=t[t.indexOf(e.currentTarget)+(e.key==="ArrowDown"?1:-1)];e.preventDefault(),s&&(s.focus(),s.scrollIntoView({block:"nearest"}),s.click())}renderRow(e){const t=e.name===this.activeName,s=(t?this.liveTitle:"")||e.title||"Untitled",i=this.dragName&&e.pinned&&this.dropAt?.name===e.name&&this.dragName!==e.name?`box-shadow: inset 0 ${this.dropAt.pos==="before"?"2px":"-2px"} 0 var(--accent);`:"";return r`
      <div class="group relative select-none rounded-lg ${this.dragName===e.name?"opacity-40":""}"
        style="-webkit-touch-callout:none;${i}"
        data-drop-row=${e.name}
        @contextmenu=${n=>this.openRowMenu(n,e.name)}
        @pointerdown=${n=>this.onRowPointerDown(n,e.name)}>
        <button type="button" class="notes-list-row w-full text-left rounded-lg ${t?"bg-accent-soft":"hover:bg-hover"}"
          aria-current=${t?"true":h}
          @keydown=${n=>{n.key==="ContextMenu"||n.shiftKey&&n.key==="F10"?this.openRowMenu(n,e.name):this.onRowArrow(n)}}
          @click=${n=>{this.suppressClick||(n.currentTarget.focus({preventScroll:!0}),this.open(e.name))}}>
          <div class="notes-list-title flex items-center gap-1.5 min-w-0"><span class="truncate">${s}</span>${e.blog?.url?r`<span class="shrink-0 ${e.blog.published?"text-nsc-green":"text-muted"}" title=${e.blog.published?"Published on blog":"Blog draft"}>${G("globe","w-3 h-3")}</span>`:h}</div>
          <div class="notes-list-preview flex gap-2 min-w-0">
            <span class="shrink-0">${this.dateLabel(e.modifiedAt)}</span>
            <span class="truncate">${e.preview||"No additional text"}</span>
          </div>
        </button>
        <button type="button" aria-label=${`Actions for ${s}`} title="Note actions"
          class="notes-row-menu absolute right-1 top-2 flex items-center justify-center w-7 h-7 rounded-md bg-surface text-muted hover:text-ink hover:bg-hover opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          @pointerdown=${n=>n.stopPropagation()}
          @click=${n=>this.openRowMenu(n,e.name)}>${G("ellipsis","w-4 h-4")}</button>
      </div>`}renderHits(){return this.hits===null?r`<div class="px-3 py-6 text-center text-xs text-muted">Searching…</div>`:this.hits.length?r`
      ${this.groupLabel(`${this.hits.length} ${this.hits.length===1?"note":"notes"}`)}
      ${this.hits.filter(e=>this.matchesNoteFilter(e.name)).map(e=>r`
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${e.name===this.activeName?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>this.open(e.name)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.mark(e.title||"Untitled")}</div>
          ${e.snippet?r`<div class="mt-0.5 text-xs text-muted line-clamp-2 break-words">${this.mark(e.snippet)}</div>`:h}
        </button>`)}`:r`<div class="px-3 py-6 text-center text-sm text-muted">No matches</div>`}renderTrash(){return r`
      <button type="button" class="flex items-center gap-0.5 mt-1 px-2 py-1 rounded-md text-xs text-muted hover:text-ink hover:bg-hover"
        @click=${()=>{this.trashOpen=!1}}>${G("chevron-left","w-3.5 h-3.5")} Notes</button>
      ${this.groupLabel("Recently deleted")}
      <div class="px-3 pb-2 text-xs text-muted">Deleted notes stay here for 30 days.</div>
      ${this.trashItems.length?h:r`<div class="px-3 py-6 text-center text-sm text-muted">Nothing here</div>`}
      ${this.trashItems.map(e=>r`
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-hover">
          <div class="flex-1 min-w-0">
            <div class="text-sm text-ink truncate">${e.title||"Untitled"}</div>
            <div class="text-xs text-muted">${this.dateLabel(e.deletedAt)}</div>
          </div>
          <button type="button" class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
            @click=${()=>void this.restore(e.name)}>Restore</button>
        </div>`)}`}renderNoteHeader(){return r`
      <div data-notes-header class="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-2 sm:px-3 py-2 shrink-0 min-w-0">
        <div class="flex items-center justify-start min-w-0">${this.wide?ii("layout-sidebar",this.sidebarHidden?"Show notes list":"Hide notes list",()=>this.toggleSidebar()):r`<button type="button" aria-label="Back to notes" class="flex items-center justify-center w-8 h-8 rounded-lg text-accent hover:bg-hover shrink-0"
              @click=${()=>this.back()}>${G("chevron-left")}</button>`}
          ${this.activeBlog?.url?r`<a class="notes-blog-status ${this.activeBlog.published?"text-nsc-green":"text-muted"}" href=${this.activeBlog.published?this.activeBlog.url:h} target="_blank" rel="noopener noreferrer"
            aria-label=${this.activeBlog.published?"Published. Open blog article":"Blog draft"}
            title=${this.activeBlog.conflict?"Changed on both sides. Open blog article":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes. Open blog article":this.activeBlog.published?"Published. Open blog article":"Unpublished. Open blog article"}>
            ${G("globe","w-4 h-4")}<span class="notes-blog-status-label">${this.activeBlog.missing?"Removed":this.activeBlog.conflict?"Blog changed":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes":this.activeBlog.published?"Published":"Blog draft"}</span></a>`:h}
        </div>
        ${this.renderToolbar()}
        <div data-tb-root class="flex items-center justify-end gap-1 min-w-0">
          ${this.editor&&(this.activeName||this.isDraft)?this.renderToolbarTrigger("more","Note actions",G("ellipsis")):h}
          ${!this.wide||this.sidebarHidden?ii("square-pen",Mn,()=>this.newNote(),"text-accent"):h}
        </div>
      </div>`}renderToolbarTrigger(e,t,s){return r`
      <button type="button" title=${t} aria-label=${t} aria-haspopup="dialog"
        aria-expanded=${this.tbMenu===e} aria-controls=${this.tbMenu===e?"notes-toolbar-menu":h}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${this.tbMenu===e?"bg-hover":""}"
        @pointerdown=${i=>i.preventDefault()}
        @click=${i=>{if(this.tbMenu===e){this.closeToolbar();return}this.tbTrigger=i.currentTarget,this.tbMenu=e,i.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${s}</button>`}renderToolbar(){if(this.editorTick,!this.editor||!this.activeName&&!this.isDraft)return r`<div></div>`;const e=this.editor,t=(s,i,n,o=!1)=>r`
      <button type="button" title=${s} aria-label=${s} aria-pressed=${o}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${o?"bg-accent-soft text-accent":""}"
        @pointerdown=${a=>a.preventDefault()}
        @click=${()=>{this.closeToolbar(),n()}}>${G(i)}</button>`;return r`<div data-tb-root role="toolbar" aria-label="Note tools" class="flex items-center justify-center gap-1">
      <div class="flex items-center gap-0.5 rounded-full bg-hover px-1">
        ${this.renderToolbarTrigger("format","Text formatting",r`<span class="text-lg leading-none">Aa</span>`)}
        <div class="flex items-center">
          ${t("Checklist","list-todo",()=>{e.chain().focus().toggleTaskList().run()},e.isActive("taskList"))}
          <button type="button" title="List styles" aria-label="List styles" aria-haspopup="dialog"
            aria-expanded=${this.tbMenu==="list"} aria-controls=${this.tbMenu==="list"?"notes-toolbar-menu":h}
            class="flex items-center justify-center w-4 h-8 shrink-0 rounded-md text-ink hover:bg-hover"
            @pointerdown=${s=>s.preventDefault()}
            @click=${s=>{if(this.tbMenu==="list"){this.closeToolbar();return}this.tbTrigger=s.currentTarget,this.tbMenu="list",s.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${G("chevron-down","w-3 h-3")}</button>
        </div>
        ${t("Insert table","table",()=>{e.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run()})}
        ${t("Images","image",()=>void this.openMedia())}
      </div>
    </div>`}renderToolbarMenu(){const e=this.editor,t=l=>{this.closeToolbar(),l()},s=(l,d,u,p,m=!1)=>r`
      <button type="button" title=${l} aria-label=${l} aria-pressed=${u} ?disabled=${m}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md text-sm ${u?"bg-accent-soft text-accent":"text-ink hover:bg-hover"} ${m?"opacity-30":""}"
        @pointerdown=${f=>f.preventDefault()} @click=${()=>t(p)}>${d}</button>`,i=(l,d,u,p=!1)=>r`
      <button type="button" role=${this.tbMenu==="row"?"menuitem":h} ?disabled=${p} class="flex items-center gap-3 w-full px-2 py-2 text-sm rounded-lg text-left hover:bg-hover ${p?"opacity-30":""}"
        @pointerdown=${m=>m.preventDefault()} @click=${()=>t(u)}>${G(d)}<span>${l}</span></button>`,n=(l,d)=>r`<div class="mb-2 last:mb-0"><div class="px-1 mb-1 text-xs font-medium text-muted">${l}</div><div class="flex flex-wrap gap-1">${d}</div></div>`,o=l=>{l!=="justify"&&Dc(e,l)||e.chain().focus().setTextAlign(l).run()};let a=h;if(this.tbMenu==="format"){const l=e.isActive("heading",{level:1})?1:e.isActive("heading",{level:2})?2:e.isActive("heading",{level:3})?3:0,d=e.isActive("image"),u=d?String(e.getAttributes("image").align||"left"):e.isActive({textAlign:"center"})?"center":e.isActive({textAlign:"right"})?"right":e.isActive({textAlign:"justify"})?"justify":"left",p=e.getAttributes("textStyle").color||null,m=e.getAttributes("highlight").color||null;a=r`
        ${n("Style",[0,1,2,3].map(f=>{const x=["Body","Title","Heading","Subheading"][f];return r`<button type="button" aria-label=${x} aria-pressed=${l===f}
            class="w-full text-left px-2 py-1 rounded-lg hover:bg-hover ${l===f?"bg-accent-soft text-accent":"text-ink"}"
            style=${`font-size:${[13,22,17,15][f]}px;font-weight:${f?600:400};`}
            @pointerdown=${v=>v.preventDefault()}
            @click=${()=>t(()=>{(f?e.chain().focus().setHeading({level:f}):e.chain().focus().setParagraph()).run()})}>${x}</button>`}))}
        ${n("Text",r`
          ${s("Bold (⌘B)",r`<b>B</b>`,e.isActive("bold"),()=>{e.chain().focus().toggleBold().run()})}
          ${s("Italic (⌘I)",r`<i>I</i>`,e.isActive("italic"),()=>{e.chain().focus().toggleItalic().run()})}
          ${s("Underline (⌘U)",r`<u>U</u>`,e.isActive("underline"),()=>{e.chain().focus().toggleUnderline().run()})}
          ${s("Strikethrough",r`<s>S</s>`,e.isActive("strike"),()=>{e.chain().focus().toggleStrike().run()})}`)}
        ${n("Blocks",r`
          ${s("Quote",G("quote"),e.isActive("blockquote"),()=>{e.chain().focus().toggleBlockquote().run()})}
          ${s("Code block",G("code"),e.isActive("codeBlock"),()=>{e.chain().focus().toggleCodeBlock().run()})}`)}
        ${n("Alignment",["left","center","right","justify"].map(f=>s(`Align ${f}`,G(`align-${f}`),u===f,()=>o(f),d&&f==="justify")))}
        ${n("Text color",Ac.map(f=>s(f.name,r`<span class="flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold ${f.v?"text-white":"text-ink"}" style=${f.v?`background:${f.v}`:""}>A</span>`,p===f.v,()=>{(f.v?e.chain().focus().setColor(f.v):e.chain().focus().unsetColor()).run()})))}
        ${n("Highlight",[null,...Pc].map(f=>s(f?`${f.name} highlight`:"No highlight",r`<span class="w-5 h-5 rounded-md ${f?"":"border border-line"}" style=${f?`background:${f.v}`:""}></span>`,m===(f?.v??null),()=>{(f?e.chain().focus().setHighlight({color:f.v}):e.chain().focus().unsetHighlight()).run()})))}`}else if(this.tbMenu==="list")a=r`
        ${i("Bullet list","list",()=>{e.chain().focus().toggleBulletList().run()})}
        ${i("Numbered list","list-ordered",()=>{e.chain().focus().toggleOrderedList().run()})}
        ${i("Checklist","list-todo",()=>{e.chain().focus().toggleTaskList().run()})}`;else if(this.tbMenu==="more"){const l=this.files.some(d=>d.name===this.activeName&&d.pinned);a=r`
        ${i("Undo","undo-2",()=>{e.chain().focus().undo().run()},!e.can().undo())}
        ${i("Redo","redo-2",()=>{e.chain().focus().redo().run()},!e.can().redo())}
        ${this.activeName?i(l?"Unpin":"Pin",l?"pin-off":"pin",()=>this.togglePin(this.activeName)):h}
        ${this.blogEnabled?r`
          ${i(this.blogBusy?"Publishing…":this.activeBlog?.published?"Update blog post":"Publish to blog","globe",()=>{this.activeBlog?.published?this.blogAction("publish"):this.publishConfirm=this.liveTitle||this.files.find(d=>d.name===this.activeName)?.title||"this note"},this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${this.activeBlog?.published?h:i("Save draft to blog","file-text",()=>void this.blogAction("save-draft"),this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${i("Featured image","image",()=>{this.tbMenu="featured-image"},this.blogBusy||this.tagSaving)}
          ${i("Edit tags","type",()=>void this.openTags())}
          ${this.activeBlog?.url?r`
            ${this.activeBlog.published?i("Unpublish from blog","eye-off",()=>void this.blogAction("unpublish"),this.blogBusy):h}
            ${i("Pull latest from blog","redo-2",()=>void this.blogAction("pull"),this.blogBusy)}
            ${i("Delete article from blog","trash-2",()=>{this.blogDeleteName=this.activeName})}`:h}`:h}
        ${this.activeBlog?.url?h:i("Delete note","trash-2",()=>this.trashCurrent())}
        ${i("Keyboard shortcuts","type",()=>{this.tbMenu="shortcuts"})}`}if(this.tbMenu==="row"&&this.rowMenuName){const l=this.renamed.get(this.rowMenuName)??this.rowMenuName,d=this.files.find(u=>u.name===l);a=r`
        ${i("Open note","file-text",()=>this.open(l))}
        ${i(d?.pinned?"Unpin note":"Pin note",d?.pinned?"pin-off":"pin",()=>this.togglePin(l))}
        ${i("Duplicate note","file-text",()=>void this.duplicateNote(l),this.duplicating)}
        ${i("Copy note","file-text",()=>void this.copyNote(l))}
        ${i("New note","square-pen",()=>this.newNote())}
        ${this.files.find(u=>u.name===l)?.blog?.url?i("Delete article from blog","trash-2",()=>{this.blogDeleteName=l}):i("Delete note","trash-2",()=>this.trashNote(l))}`}if(this.tbMenu==="library"){const l=(d,u)=>i(u,d==="blog"?"globe":"file-text",()=>{this.noteFilter=d,this.clearSearch()});a=r`${l("all","All notes")}${l("blog","Blog articles")}${l("local","Local notes")}
        ${i(this.syncingBlog?"Syncing blog…":"Sync from blog","redo-2",()=>void this.syncBlogLibrary(),this.syncingBlog||!this.blogConnected)}
        ${i("Manage blog tags","type",()=>void this.openTags(!0))}`}if(this.tbMenu==="featured-image"){const l=this.activeBlog?.featuredImage;a=r`<div class="px-1 text-sm font-semibold mb-2">Featured image</div>
        ${l?r`<img src=${l} alt="Featured image" class="w-full rounded-lg mb-2" style="max-height:160px;object-fit:cover" />`:h}
        ${i(l?"Change image":"Choose image","image",()=>void this.openMedia("featured"),this.tagSaving||this.blogBusy)}
        ${l?i("Remove image","trash-2",()=>void this.saveFeaturedImage(""),this.tagSaving||this.blogBusy):h}
        <p class="px-1 mt-2 text-xs text-muted">Used for the blog preview and sharing. Without one, the first image in the note is used.</p>`}if(this.tbMenu==="tags"){const l=this.activeBlog?.categories??[],d=u=>{const p=u.trim();p&&!l.some(m=>m.toLocaleLowerCase()===p.toLocaleLowerCase())&&this.saveTags([...l,p])};a=r`<div class="text-sm font-semibold mb-2">Tags</div>
        <div class="flex flex-wrap gap-1 mb-2">${l.map(u=>r`<button type="button" class="px-2 py-1 rounded-full bg-accent-soft text-sm" aria-label=${`Remove tag ${u}`} ?disabled=${this.tagSaving} @click=${()=>void this.saveTags(l.filter(p=>p!==u))}>${u} ×</button>`)}</div>
        <input type="text" aria-label="Add tag" ?disabled=${this.tagSaving} placeholder="Add tag" class="w-full rounded-lg border border-line px-2 py-1.5 text-base"
          @blur=${u=>{const p=u.target;p.value.trim()&&(d(p.value),p.value="")}} @keydown=${u=>{u.key==="Enter"&&(u.preventDefault(),u.stopPropagation(),d(u.target.value),u.target.value="")}} />
        <div class="mt-2 flex flex-wrap gap-1">${this.allBlogTags.filter(u=>!l.includes(u.name)).map(u=>r`<button type="button" class="px-2 py-1 rounded-full text-sm hover:bg-hover" ?disabled=${this.tagSaving} @click=${()=>d(u.name)}>${u.name}</button>`)}</div>`}if(this.tbMenu==="manage-tags"&&(a=r`<div class="text-sm font-semibold mb-2">Blog tags</div>
        ${this.allBlogTags.length?this.allBlogTags.map(l=>r`<div class="flex items-center gap-2 mb-2"><input type="text" aria-label=${`Rename tag ${l.name}`} title="Rename this tag across all blog articles" class="w-full min-w-0 rounded-lg border border-line px-2 py-1 text-base" .value=${l.name} ?disabled=${this.blogBusy}
          @blur=${d=>void this.renameTag(l.name,d.target.value)} @keydown=${d=>{d.key==="Enter"&&d.target.blur(),d.key==="Escape"&&(d.target.value=l.name)}} /><span class="text-xs text-muted">${l.count}</span></div>`):r`<p class="text-sm text-muted">Add tags from an article’s actions menu.</p>`}`),this.tbMenu==="shortcuts"){const l=[["New note",`${ge}N`],["Search notes",`${ge}Shift+F`],["Show / hide list",`${ge}\\`],["Save now",`${ge}S`],["Bold / italic / underline",`${ge}B / I / U`],["Undo",`${ge}Z`],["Redo",`${ge}Shift+Z`],["Checklist",`${ge}Shift+9`],["Bullet list",`${ge}Shift+8`],["Numbered list",`${ge}Shift+7`],["Heading 1, 2, 3",`${ge}Alt+1 / 2 / 3`]];a=r`<div class="px-1"><div class="text-sm font-semibold mb-2">Keyboard shortcuts</div>
        <dl class="space-y-2">${l.map(([d,u])=>r`<div class="flex items-center justify-between gap-3 text-xs"><dt>${d}</dt><dd class="shrink-0 font-mono text-muted">${u}</dd></div>`)}</dl>
      </div>`}return r`<div @keydown=${this.onToolbarMenuKey}>${a}</div>`}renderEmpty(){return r`
      <div class="h-full flex flex-col items-center justify-center gap-3">
        <div class="text-sm text-muted">${this.files.length?"Pick a note, or start a new one.":"No notes yet."}</div>
        <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          @click=${()=>this.newNote()}>${G("square-pen")} New note</button>
      </div>`}render(){const e=this.activeName!==null||this.isDraft,t=this.wide?!this.sidebarHidden:this.view==="list",s=this.wide||this.view==="note";return r`
      <div class="relative flex flex-1 min-h-0 h-full ${this.dragName?"cursor-grabbing":""}">
        <aside id="notes-list" aria-label="Notes list"
          class="${t?"flex":"hidden"} flex-col min-h-0 ${this.wide?"shrink-0":"flex-1 min-w-0"}"
          style=${this.wide?`width: ${Math.min(this.sidebarWidth,this.sidebarMaxWidth)}px;`:""}>
          ${this.renderSidebar()}
        </aside>
        ${this.wide?r`<div class="notes-sidebar-divider group relative flex shrink-0 items-center justify-center w-2 cursor-col-resize select-none touch-none focus-visible:outline-2 focus-visible:outline-accent"
          role="separator" tabindex="0" aria-label="Resize notes list" aria-orientation="vertical"
          aria-controls="notes-list" aria-valuemin="0" aria-valuemax=${this.sidebarMaxWidth}
          aria-valuenow=${this.sidebarHidden?0:Math.min(this.sidebarWidth,this.sidebarMaxWidth)}
          aria-valuetext=${this.sidebarHidden?"Notes list hidden":`${Math.round(Math.min(this.sidebarWidth,this.sidebarMaxWidth))} pixels`}
          @pointerdown=${this.onSidebarDown} @pointermove=${this.onSidebarMove}
          @pointerup=${this.onSidebarUp} @pointercancel=${this.onSidebarCancel}
          @lostpointercapture=${this.onSidebarCancel} @dblclick=${this.resetSidebar} @keydown=${this.onSidebarKey}>
          <div class="absolute inset-y-0 left-1/2 w-px bg-line"></div>
          <div class="relative w-[3px] h-12 rounded-full bg-line group-hover:bg-muted group-focus-visible:bg-muted"></div>
        </div>`:h}
        <section class="notes-editor-pane ${s?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderNoteHeader()}
          ${this.error?r`<div class="px-4 pt-1 text-xs font-mono" style="color:#c87a3a;">notes error: ${this.error}</div>`:h}
          <div class="notes-content-scroll flex-1 min-h-0 overflow-y-auto">
            <div id="note-host" class="h-full ${e?"":"hidden"}"></div>
            ${!e&&this.initialized?this.renderEmpty():h}
          </div>
        </section>
        <sc-dialog label="Publish to the blog?" .open=${this.publishConfirm!==null} @sc-hide=${()=>{this.publishConfirm=null}}>
          <p class="text-sm">“${this.publishConfirm}” will go live on the blog, its home page and RSS feed, and serdarsalim.com within a minute.</p>
          <div slot="footer" class="flex items-center gap-2">
            <button type="button" autofocus class="px-3 py-2 rounded-lg hover:bg-hover text-sm" @click=${()=>{this.publishConfirm=null}}>Cancel</button>
            <button type="button" class="px-3 py-2 rounded-lg bg-accent text-white text-sm" ?disabled=${this.blogBusy} @click=${()=>{this.publishConfirm=null,this.blogAction("publish")}}>Publish</button>
          </div>
        </sc-dialog>
        <sc-dialog label="Delete blog article" .open=${!!this.blogDeleteName} @sc-hide=${()=>{this.blogDeleteName=null}}>
          <p class="text-sm">Permanently delete this article from the blog? Its local note will move to Recently deleted.</p>
          <div slot="footer" class="flex items-center gap-2">
            <button type="button" class="px-3 py-2 rounded-lg hover:bg-hover text-sm" @click=${()=>{this.blogDeleteName=null}}>Cancel</button>
            <button type="button" class="px-3 py-2 rounded-lg bg-nsc-red text-white text-sm" ?disabled=${this.blogBusy} @click=${()=>void this.confirmBlogDelete()}>Delete article</button>
          </div>
        </sc-dialog>
        ${this.mediaOpen?r`
          <notes-media-library .heading=${this.mediaPurpose==="featured"?"Featured image":this.mediaReplacement?"Replace image":"Images"} .pickLabel=${this.mediaPurpose==="featured"?"Select":this.mediaReplacement?"Replace":"Insert"}
            @close=${()=>this.closeMedia()}
            @insert=${i=>this.onMediaInsert(i.detail)}></notes-media-library>`:h}
        ${this.uploading?r`
          <div class="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface shadow-md text-xs text-ink">
            <span class="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin"></span>
            Uploading ${this.uploading>1?`${this.uploading} images`:"image"}… ${this.uploadPct}%
          </div>`:h}
        ${this.toast?r`
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-xl bg-ink text-surface text-sm shadow-lg text-center" style="max-width:calc(100% - 2rem)">
            <span>${this.toast.text}</span>
            ${this.toast.undo?r`<button type="button" class="font-semibold hover:underline" @click=${this.toast.undo}>Undo</button>`:h}
          </div>`:h}
      </div>
    `}};E([c()],D.prototype,"files",2);E([c()],D.prototype,"trashCount",2);E([c()],D.prototype,"activeName",2);E([c()],D.prototype,"isDraft",2);E([c()],D.prototype,"error",2);E([c()],D.prototype,"initialized",2);E([c()],D.prototype,"wide",2);E([c()],D.prototype,"view",2);E([c()],D.prototype,"sidebarHidden",2);E([c()],D.prototype,"sidebarWidth",2);E([c()],D.prototype,"searchQ",2);E([c()],D.prototype,"hits",2);E([c()],D.prototype,"trashOpen",2);E([c()],D.prototype,"trashItems",2);E([c()],D.prototype,"toast",2);E([c()],D.prototype,"tbMenu",2);E([c()],D.prototype,"blogEnabled",2);E([c()],D.prototype,"blogConnected",2);E([c()],D.prototype,"blogBusy",2);E([c()],D.prototype,"tagSaving",2);E([c()],D.prototype,"syncingBlog",2);E([c()],D.prototype,"activeBlog",2);E([c()],D.prototype,"blogLocalDirty",2);E([c()],D.prototype,"noteFilter",2);E([c()],D.prototype,"allBlogTags",2);E([c()],D.prototype,"blogDeleteName",2);E([c()],D.prototype,"publishConfirm",2);E([c()],D.prototype,"pinnedCollapsed",2);E([c()],D.prototype,"editorTick",2);E([c()],D.prototype,"liveTitle",2);E([c()],D.prototype,"dragName",2);E([c()],D.prototype,"dropAt",2);E([c()],D.prototype,"mediaOpen",2);E([c()],D.prototype,"uploading",2);E([c()],D.prototype,"uploadPct",2);D=E([k("companion-notes")],D);var Mc=Object.getOwnPropertyDescriptor,Oc=(e,t,s,i)=>{for(var n=i>1?void 0:i?Mc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let On=class extends ${render(){return r`<companion-notes class="flex flex-col flex-1 min-h-0"></companion-notes>`}};On=Oc([k("companion-workspace")],On);const Ln=16e3,Lc=3e4,Jt="Meta+D",Xt="companion.dictate_shortcut";function Nc(e,t,s){if(t<=s)return e;const i=t/s,n=new Float32Array(Math.floor(e.length/i));for(let o=0;o<n.length;o++){const a=Math.floor(o*i),l=Math.min(e.length,Math.floor((o+1)*i));let d=0;for(let u=a;u<l;u++)d+=e[u];n[o]=l>a?d/(l-a):0}return n}function Rc(e,t){const s=new ArrayBuffer(44+e.length*2),i=new DataView(s),n=(o,a)=>{for(let l=0;l<a.length;l++)i.setUint8(o+l,a.charCodeAt(l))};n(0,"RIFF"),i.setUint32(4,36+e.length*2,!0),n(8,"WAVE"),n(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,t,!0),i.setUint32(28,t*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),n(36,"data"),i.setUint32(40,e.length*2,!0);for(let o=0;o<e.length;o++){const a=Math.max(-1,Math.min(1,e[o]));i.setInt16(44+o*2,a<0?a*32768:a*32767,!0)}return new Uint8Array(s)}function jc(e){return e.replace(/\[[^\]]*\]/g," ").replace(/\s+/g," ").trim()}function As(e){const t=(e??"").split("+").map(o=>o.trim()).filter(Boolean),s=t.pop();if(!s)return null;const i=new Set(t.map(o=>o.toLowerCase())),n={meta:i.has("meta")||i.has("cmd"),ctrl:i.has("ctrl")||i.has("control"),alt:i.has("alt")||i.has("option"),shift:i.has("shift"),key:s.length===1?s.toLowerCase():s};return n.meta||n.ctrl||n.alt?n:null}function Fc(e,t){if(t.metaKey!==e.meta||t.ctrlKey!==e.ctrl||t.altKey!==e.alt||t.shiftKey!==e.shift)return!1;const s=t.key.length===1?t.key.toLowerCase():t.key,i=t.code?.startsWith("Key")?t.code.slice(3).toLowerCase():t.code?.startsWith("Digit")?t.code.slice(5):null;return s===e.key||i===e.key}function ks(e){const t=As(e);return t?`${t.ctrl?"⌃":""}${t.alt?"⌥":""}${t.shift?"⇧":""}${t.meta?"⌘":""}${t.key.length===1?t.key.toUpperCase():t.key}`:""}async function Bc(e,t){const s=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:e,signal:t});if(!s.ok)throw new Error(`stt ${s.status}`);const i=await s.json();return jc(i.text??"")}var Uc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Zi=(e,t,s,i)=>{for(var n=i>1?void 0:i?zc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Uc(t,s,n),n};let Ps=class extends ${constructor(){super(...arguments),this.checked=!1,this.disabled=!1}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return r`
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
    `}};Zi([b({type:Boolean})],Ps.prototype,"checked",2);Zi([b({type:Boolean})],Ps.prototype,"disabled",2);Ps=Zi([k("sc-toggle")],Ps);var Hc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Ot=(e,t,s,i)=>{for(var n=i>1?void 0:i?qc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Hc(t,s,n),n};function Kc(e){const t=Us.map(s=>({id:s.id,label:s.note?`${s.label} (${s.note})`:s.label}));return t.some(s=>s.id===e)||t.push({id:e,label:e}),t}function Wc(){return Us.filter(e=>e.provider==="anthropic").map(e=>({id:e.id,label:e.id===Ts?`${e.label} (tested)`:e.label}))}function Gc(e){return e.code.startsWith("Key")?e.code.slice(3):e.code.startsWith("Digit")?e.code.slice(5):/^F\d{1,2}$/.test(e.key)||e.key.length===1&&e.key!=="+"&&e.key.trim()?e.key:null}async function Vc(e){const i=URL.createObjectURL(e);try{const n=await new Promise((m,f)=>{const x=new Image;x.onload=()=>m(x),x.onerror=()=>f(new Error("could not decode image")),x.src=i}),o=Math.min(1,256/Math.max(n.width,n.height)),a=Math.max(1,Math.round(n.width*o)),l=Math.max(1,Math.round(n.height*o)),d=document.createElement("canvas");d.width=a,d.height=l;const u=d.getContext("2d");if(!u)return await Qc(e);u.drawImage(n,0,0,a,l);const p=d.toDataURL("image/webp",.85);return p.startsWith("data:image/webp")?p:d.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(i)}}function Qc(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result||"")),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}let pt=class extends ${constructor(){super(...arguments),this.settingsCtl=new Ui(this,g,e=>e.settings),this.myLogin="",this.myRole="",this.myName="",this.recordingShortcut=!1,this.shortcutPrompt="Press keys"}connectedCallback(){super.connectedCallback(),Object.keys(g.getState().settings).length===0&&g.getState().loadSettings(),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e?.login&&(this.myLogin=e.login,this.myRole=e.role,this.myName=e.displayName||"")}).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}displayNameKey(){return this.myLogin?`user:${this.myLogin}:display_name`:"cockpit.display_name"}get currentDisplayName(){return this.settings[this.displayNameKey()]||""}async setDisplayName(e){await g.getState().setSetting(this.displayNameKey(),e.trim())}get settings(){return this.settingsCtl.state.settings}get currentMentorModel(){return Tt(this.settings["cockpit.mentor_model"])}async setMentorModel(e){await g.getState().setSetting("cockpit.mentor_model",e)}get currentCompanionModel(){return nl(this.settings["cockpit.companion_model"])}async setCompanionModel(e){await g.getState().setSetting("cockpit.companion_model",e)}get currentShortcut(){const e=this.settings[Xt];return e&&As(e)?e:Jt}get isDefaultShortcut(){return ks(this.currentShortcut)===ks(Jt)}onShortcutKey(e){if(e.key==="Tab")return;e.preventDefault(),e.stopPropagation();const t=e.currentTarget;if(e.key==="Escape")return t.blur();const s=Gc(e);if(!s)return;if(!e.metaKey&&!e.ctrlKey&&!e.altKey){this.shortcutPrompt="Add ⌘, ⌃ or ⌥";return}const i=[e.ctrlKey&&"Ctrl",e.altKey&&"Alt",e.shiftKey&&"Shift",e.metaKey&&"Meta"].filter(Boolean);g.getState().setSetting(Xt,[...i,s].join("+")),t.blur()}get chatHidden(){return this.settings["cockpit.chat_hidden"]==="1"}async setChatHidden(e){await g.getState().setSetting("cockpit.chat_hidden",e?"1":"0")}resetDemo(){if(window.confirm("Reset the demo? This clears your changes and restores the sample cockpit.")){for(let e=localStorage.length-1;e>=0;e--){const t=localStorage.key(e);t&&t.startsWith("mana.demo.")&&localStorage.removeItem(t)}location.reload()}}get currentProfilePic(){const e=this.settings[this.profilePicKey()],t=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return e||t||""}async onProfilePicFile(e){const t=e.target,s=t.files?.[0];if(!s||!s.type.startsWith("image/"))return;const i=await Vc(s),{url:n}=await S.uploads.upload(i,!1);await g.getState().setSetting(this.profilePicKey(),n),t.value=""}async clearProfilePic(){await g.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await g.getState().setSetting("cockpit.profile_pic_url","")}renderRow(e,t,s){return r`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${e}</div>
          <div class="text-sm text-muted mt-0.5">${t}</div>
        </div>
        <div class="shrink-0 flex items-center">${s}</div>
      </div>
    `}render(){return r`
      <div class="max-w-3xl">
        ${this.renderRow("Name","What Mana and the Workshop call you. Shows in the sidebar.",r`
            <input
              type="text"
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentDisplayName}
              placeholder=${this.myName||"Your name"}
              @change=${e=>void this.setDisplayName(e.target.value)}
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
                  @change=${e=>void this.onProfilePicFile(e)}
                />
              </label>
              ${this.currentProfilePic?r`<button
                    type="button"
                    class="text-sm text-muted hover:text-ink"
                    @click=${()=>void this.clearProfilePic()}
                  >Clear</button>`:h}
            </div>
          `)}
        ${this.renderRow("Chat model","The AI model your Workshop chats run on.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentMentorModel}
              @change=${e=>this.setMentorModel(e.target.value)}
            >
              ${Kc(this.currentMentorModel).map(e=>r`<option value=${e.id} ?selected=${e.id===this.currentMentorModel}>${e.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana model",`The model Mana itself runs on. Claude only. ${ts(Ts)?.label??Ts} is the only one that has passed its behaviour test.`,r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionModel}
              @change=${e=>this.setCompanionModel(e.target.value)}
            >
              ${Wc().map(e=>r`<option value=${e.id} ?selected=${e.id===this.currentCompanionModel}>${e.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Dictation shortcut","Talk to Mana instead of typing: press it once to start, again to stop.",r`
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="text-sm text-muted hover:text-ink ${this.isDefaultShortcut?"invisible":""}"
                ?disabled=${this.isDefaultShortcut}
                @click=${()=>void g.getState().setSetting(Xt,Jt)}
              >Reset</button>
              <input
                type="text"
                readonly
                aria-label="Dictation shortcut"
                class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink caret-transparent cursor-pointer focus:outline-none focus:border-accent min-w-[200px]"
                .value=${this.recordingShortcut?"":ks(this.currentShortcut)}
                placeholder=${this.shortcutPrompt}
                @focus=${()=>{this.recordingShortcut=!0,this.shortcutPrompt="Press keys"}}
                @blur=${()=>{this.recordingShortcut=!1}}
                @keydown=${e=>this.onShortcutKey(e)}
              />
            </div>
          `)}
        ${r`
              ${this.renderRow("Chat panel","Turn this off to explore the tools on their own. This is a live demo with no model connected, so the chat is only a preview.",r`
                  <sc-toggle
                    .checked=${!this.chatHidden}
                    @sc-change=${e=>void this.setChatHidden(!e.detail.checked)}
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
    `}};Ot([c()],pt.prototype,"myLogin",2);Ot([c()],pt.prototype,"myRole",2);Ot([c()],pt.prototype,"myName",2);Ot([c()],pt.prototype,"recordingShortcut",2);Ot([c()],pt.prototype,"shortcutPrompt",2);pt=Ot([k("settings-general")],pt);var Yc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,rr=(e,t,s,i)=>{for(var n=i>1?void 0:i?Jc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Yc(t,s,n),n};let _i=class extends ${constructor(){super(...arguments),this.groups=[]}connectedCallback(){super.connectedCallback(),S.notifications.kinds().then(e=>{this.groups=e.kinds}).catch(()=>{})}async toggle(e,t){this.groups=this.groups.map(s=>s.kind===e?{...s,enabled:t}:s),await S.notifications.mute(e,t).catch(()=>{})}render(){return r`
      <div class="max-w-3xl">
        ${this.groups.map(e=>r`
            <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
              <div class="flex-1">
                <div class="font-semibold text-ink">${e.label}</div>
                <div class="text-sm text-muted mt-0.5">${e.description}</div>
              </div>
              <div class="shrink-0 flex items-center">
                <sc-toggle
                  .checked=${e.enabled}
                  @sc-change=${t=>void this.toggle(e.kind,t.detail.checked)}
                ></sc-toggle>
              </div>
            </div>
          `)}
        <p class="text-sm text-muted pt-5">Alerts that something in Mana broke always show.</p>
      </div>
    `}};rr([c()],_i.prototype,"groups",2);_i=rr([k("settings-notifications")],_i);var Xc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,Ne=(e,t,s,i)=>{for(var n=i>1?void 0:i?Zc(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Xc(t,s,n),n};const ed="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",td="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",sd=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let De=class extends ${constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/memory/status").then(s=>s.ok?s.json():null),fetch("/api/memory/files").then(s=>s.ok?s.json():null)]);e&&(this.status=e),t&&(this.files=t.files)}catch{}}async toggle(e){const t=e.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:t})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let e=0;e<12;e++)await new Promise(t=>setTimeout(t,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(e){try{const t=await fetch(`/api/memory/files/${encodeURIComponent(e.relPath)}`);if(t.ok){const s=await t.json();this.editing=!1,this.viewing={title:this.prettyName(e),relPath:e.relPath,content:s.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(e){if(!e)return"never";const t=Number(e);return Number.isFinite(t)?new Date(t*1e3).toLocaleString():"never"}statusLine(e){if(!e)return null;if(e.startsWith("error"))return`Last run hit a problem: ${e.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(e))return"Last run found nothing new to add.";const t=/(\d+)B/.exec(e);return t&&t[1]?`Last run added ${(Number(t[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const e=this.status;if(!e)return r`<p class="text-muted text-xs">Loading…</p>`;const t=this.viewing!=null;return r`
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
              ${this.statusLine(e.lastStatus)?r`<div>${this.statusLine(e.lastStatus)}</div>`:h}
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
          <p class="text-muted leading-relaxed">${ed}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${td}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
      <div class="space-y-4">
        ${sd.map(e=>{const t=this.files.filter(s=>s.group===e.key).sort((s,i)=>i.modifiedAt-s.modifiedAt);return t.length===0?h:r`
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
          ${e?h:r`<button
                type="button"
                class="text-xs text-muted hover:text-ink"
                @click=${this.startEdit}
              >Edit</button>`}
          ${e?h:r`<button
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
              ${X(O.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};Ne([c()],De.prototype,"status",2);Ne([c()],De.prototype,"files",2);Ne([c()],De.prototype,"running",2);Ne([c()],De.prototype,"viewing",2);Ne([c()],De.prototype,"editing",2);Ne([c()],De.prototype,"draft",2);Ne([c()],De.prototype,"saving",2);Ne([c()],De.prototype,"aboutOpen",2);Ne([c()],De.prototype,"aboutNotesOpen",2);De=Ne([k("settings-memory")],De);var id=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,Hs=(e,t,s,i)=>{for(var n=i>1?void 0:i?nd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&id(t,s,n),n};const Ut=[{id:"general",label:"General"},{id:"notifications",label:"Notifications"},{id:"memory",label:"Memory"}];let ss=class extends ${constructor(){super(...arguments),this.section="general",this.active="general",this.mobileView="list",this.handleKeydown=e=>{if(e.key==="Escape"){this.requestClose();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable))return;const s=Ut.findIndex(o=>o.id===this.active);if(s<0)return;const i=e.key==="ArrowDown"?Math.min(s+1,Ut.length-1):Math.max(s-1,0),n=Ut[i];i!==s&&n&&(e.preventDefault(),this.active=n.id,this.mobileView="section")}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?r`<settings-general></settings-general>`:this.active==="notifications"?r`<settings-notifications></settings-notifications>`:this.active==="memory"?r`<settings-memory></settings-memory>`:h}render(){const e=Ut.find(s=>s.id===this.active)?.label??"",t=this.mobileView==="list";return r`
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
            ${Ut.map(s=>r`
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
    `}};Hs([b()],ss.prototype,"section",2);Hs([c()],ss.prototype,"active",2);Hs([c()],ss.prototype,"mobileView",2);ss=Hs([k("settings-page")],ss);var od=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,qs=(e,t,s,i)=>{for(var n=i>1?void 0:i?rd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&od(t,s,n),n};const ad=.018,ld=.01,cd=600,dd=250,hd=300,Nn=16e3;let is=class extends ${constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.audioCtx=null,this.mic=null,this.source=null,this.processor=null,this.threadId=null,this.starting=!1,this.ttsSource=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.srcRate=48e3,this.muted=!1,this.processing=!1,this.onToggle=()=>{this.audioCtx?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.audioCtx&&this.stopTalk()},this.speakQueue=[],this.pumpPromise=null}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.audioCtx&&this.stopTalk()}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const e=this.audioCtx!==null;try{window.speechSynthesis.cancel()}catch{}this.speakQueue=[];try{this.ttsSource?.stop(),this.ttsSource=null}catch{}try{this.processor?.disconnect()}catch{}try{this.source?.disconnect()}catch{}try{await this.audioCtx?.close()}catch{}if(this.mic)for(const t of this.mic.getTracks())t.stop();this.processor=null,this.source=null,this.audioCtx=null,this.mic=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.muted=!1,this.processing=!1,this.speaking=null,this.status!=="error"&&(this.status="idle"),e&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}onAudio(e){if(this.muted||this.processing)return;const t=e.inputBuffer.getChannelData(0),s=new Float32Array(t),i=s.length/this.srcRate*1e3;let n=0;for(let a=0;a<s.length;a++)n+=s[a]*s[a];const o=Math.sqrt(n/s.length);if(!this.inSpeech){for(this.preroll.push(s),this.prerollMs+=i;this.prerollMs>hd&&this.preroll.length>1;){const a=this.preroll.shift();this.prerollMs-=a.length/this.srcRate*1e3}o>=ad&&(this.inSpeech=!0,this.speechMs=0,this.silenceMs=0,this.utterance=[...this.preroll],this.preroll=[],this.prerollMs=0,this.speaking="user");return}if(this.utterance.push(s),this.speechMs+=i,o<ld?this.silenceMs+=i:this.silenceMs=0,this.silenceMs>=cd){const a=this.utterance,l=this.speechMs-this.silenceMs;this.inSpeech=!1,this.utterance=[],this.speechMs=0,this.silenceMs=0,l>=dd&&this.finishUtterance(a)}}async finishUtterance(e){this.processing=!0,this.muted=!0,this.speaking="thinking",this.ackBlip();try{const t=gd(md(pd(e),this.srcRate,Nn),Nn),{text:s}=await S.voice.stt(t),i=(s||"").trim();if(!i||/^[\s.,!?-]*$/.test(i))return;this.dispatchTranscript({role:"user",text:i});let n="",o="";for await(const l of Xo({threadId:this.threadId,message:i,kind:"voice",voice:!0}))if(l.type==="thread")l.threadId!==this.threadId&&(this.threadId=l.threadId);else if(l.type==="text")n+=l.text,o=this.enqueueCompleteSentences(o+l.text);else if(l.type==="ops")this.refreshOps([l.action]);else if(l.type==="error")throw new Error(l.error);for(const l of ud(o))this.enqueueSpeech(l);const a=n.trim();a&&this.dispatchTranscript({role:"mentor",text:a}),await this.drainSpeech()}catch(t){const s=t instanceof Error?t.message:String(t);this.errorMessage=`voice: ${s}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage})}finally{this.processing=!1,this.muted=!1,this.status==="active"&&(this.speaking="user")}}enqueueCompleteSentences(e){const t=e.match(/[^.!?…]+[.!?…]+["')\]]*\s*/g);if(!t)return e;const s=t.join("");let i="";for(const n of t)i+=n,i.trim().length>=20&&(this.enqueueSpeech(i.trim()),i="");return i+e.slice(s.length)}enqueueSpeech(e){e&&(this.speakQueue.push(e),this.pumpPromise||(this.pumpPromise=this.pumpSpeech().finally(()=>{this.pumpPromise=null;const t=this.speakQueue.shift();t&&this.audioCtx&&this.enqueueSpeech(t)})))}async pumpSpeech(){let e=null;for(;this.audioCtx;){if(!e){const n=this.speakQueue.shift();if(n===void 0)break;e={text:n,blob:this.fetchTts(n)}}const t=e,s=await t.blob,i=this.speakQueue.shift();if(e=i!==void 0?{text:i,blob:this.fetchTts(i)}:null,!this.audioCtx)return;s?await this.playWav(s):await this.speakFallback(t.text)}}async drainSpeech(){for(;this.pumpPromise;)await this.pumpPromise}ackBlip(){const e=this.audioCtx;if(e)try{const t=e.currentTime,s=e.createOscillator(),i=e.createGain();s.type="sine",s.frequency.setValueAtTime(660,t),s.frequency.setValueAtTime(880,t+.09),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.08,t+.02),i.gain.exponentialRampToValueAtTime(1e-4,t+.18),s.connect(i),i.connect(e.destination),s.start(t),s.stop(t+.2)}catch{}}async fetchTts(e){try{return await S.voice.tts(e)}catch{return null}}async playWav(e){const t=this.audioCtx;if(!t)return;const s=await t.decodeAudioData(await e.arrayBuffer());await new Promise(i=>{const n=t.createBufferSource();n.buffer=s,n.connect(t.destination),this.ttsSource=n;let o=!1,a;const l=()=>{o||(o=!0,a&&clearTimeout(a),this.ttsSource===n&&(this.ttsSource=null),i())};n.onended=l,a=setTimeout(l,s.duration*1e3+1500),this.speaking="mentor",n.start()})}speakFallback(e){return new Promise(t=>{let s=!1;const i=()=>{s||(s=!0,t())};try{const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.onstart=()=>{this.speaking="mentor"},n.onend=i,n.onerror=i,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n),setTimeout(i,Math.min(6e4,1500+e.length*80))}catch{i()}})}refreshOps(e){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:e}));const t=e.find(s=>s.week)?.week;document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:t},bubbles:!0,composed:!0}))}dispatchTranscript(e){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:e,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return h;const e=this.status==="connecting"?"starting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="thinking"?"thinking…":this.speaking==="mentor"?"speaking…":"listening…",t=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent animate-pulse";return r`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${t}"></span>
        <span>${e}</span>
      </div>
    `}};qs([c()],is.prototype,"status",2);qs([c()],is.prototype,"errorMessage",2);qs([c()],is.prototype,"speaking",2);is=qs([k("voice-controller")],is);function ud(e){const t=e.replace(/\s+/g," ").trim();if(!t)return[];const s=t.match(/[^.!?…]+[.!?…]+["')\]]*\s*|[^.!?…]+$/g)??[t],i=[];let n="";for(const o of s)n+=o,n.trim().length>=20&&(i.push(n.trim()),n="");return n.trim()&&i.push(n.trim()),i}function pd(e){let t=0;for(const n of e)t+=n.length;const s=new Float32Array(t);let i=0;for(const n of e)s.set(n,i),i+=n.length;return s}function md(e,t,s){if(s>=t)return e;const i=t/s,n=Math.floor(e.length/i),o=new Float32Array(n);for(let a=0;a<n;a++){const l=a*i,d=Math.floor(l),u=Math.min(d+1,e.length-1),p=l-d;o[a]=e[d]*(1-p)+e[u]*p}return o}function gd(e,t){const s=new ArrayBuffer(44+e.length*2),i=new DataView(s),n=(a,l)=>{for(let d=0;d<l.length;d++)i.setUint8(a+d,l.charCodeAt(d))};n(0,"RIFF"),i.setUint32(4,36+e.length*2,!0),n(8,"WAVE"),n(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,t,!0),i.setUint32(28,t*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),n(36,"data"),i.setUint32(40,e.length*2,!0);let o=44;for(let a=0;a<e.length;a++,o+=2){const l=Math.max(-1,Math.min(1,e[a]));i.setInt16(o,l<0?l*32768:l*32767,!0)}return new Blob([s],{type:"audio/wav"})}class ar{constructor(t,s){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=i=>{this.armedId=i},this.disarm=()=>{this.armedId=null},this.isDragging=i=>this.armedId===i||this.draggingId===i,this.onDragStart=(i,n)=>{if(this.armedId!==n){i.preventDefault();return}this.draggingId=n,i.dataTransfer&&(i.dataTransfer.setData(this.type,String(n)),i.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(i,n,o)=>{if(!i.dataTransfer?.types.includes(this.type))return;i.preventDefault(),i.dataTransfer.dropEffect="move";const a=i.currentTarget.getBoundingClientRect(),l=i.clientY<a.top+a.height/2?"before":"after";(this.overId!==n||this.overPos!==l)&&(this.overId=n,this.overPos=l,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(i,n,o)=>{const a=i.dataTransfer?.getData(this.type),l=a?Number(a):NaN,d=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(l))return;i.preventDefault();const u=d==="after"?o+1:o;this.onReorder(l,u)},this.dropClass=i=>this.overId!==i?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=t,this.type=s.type,this.onReorder=s.onReorder,t.addController(this)}hostDisconnected(){this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var fd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,re=(e,t,s,i)=>{for(var n=i>1?void 0:i?bd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&fd(t,s,n),n};const xd=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let q=class extends ${constructor(){super(...arguments),this.items=[],this.loading=!0,this.input="",this.quantity="",this.adding=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.cols=(()=>{const e=Number(localStorage.getItem("cockpit.grocery_cols"));return e===2||e===3?e:1})(),this.sortMode=localStorage.getItem("cockpit.grocery_sort")==="type"?"type":"az",this.settingsOpen=!1,this.expiryEnabled=localStorage.getItem("cockpit.grocery_expiry")!=="0",this.list=localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery",this.poll=null,this.drag=new ar(this,{type:"text/x-grocery-id",onReorder:(e,t)=>this.reorder(e,t)}),this._closeMenus=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null),this.settingsOpen&&(this.settingsOpen=!1)}}setList(e){if(this.list!==e){this.list=e,this.draftActive=!1,this.items=[],this.loading=!0;try{localStorage.setItem("cockpit.shopping_tab",e)}catch{}this.refresh()}}toggleSort(){this.sortMode=this.sortMode==="az"?"type":"az";try{localStorage.setItem("cockpit.grocery_sort",this.sortMode)}catch{}}toggleExpiry(){this.expiryEnabled=!this.expiryEnabled;try{localStorage.setItem("cockpit.grocery_expiry",this.expiryEnabled?"1":"0")}catch{}}inferCategory(e){const t=e.toLowerCase(),s=(...i)=>i.some(n=>t.includes(n));return s("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":s("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":s("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":s("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":s("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":s("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}setCols(e){this.cols=e;try{localStorage.setItem("cockpit.grocery_cols",String(e))}catch{}}cycleCols(){const e=window.matchMedia("(min-width: 1024px)").matches?3:2;this.setCols(this.cols%e+1)}colsIcon(){const e=[];for(let t=1;t<this.cols;t++){const s=3+18*t/this.cols;e.push(kr`<line x1="${s}" y1="4" x2="${s}" y2="20" />`)}return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
      ${xd.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
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
    </span>`}renderExpiry(e){if(this.list==="buy"||!this.expiryEnabled||e.status!=="pantry"||!e.bought_at)return h;if(this.editingExpiryId===e.id){const i=e.shelf_life_days?Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(e,i)}if(!e.shelf_life_days)return h;const t=Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400);if(t>3)return h;const s=t<0?"text-red-600 bg-red-500/10":"text-amber-600 bg-amber-500/10";return r`<button
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
            </svg>`:h}
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
          ${this.emojiPickerFor===e.id?this.renderEmojiPalette(e):h}
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
          ${e.quantity?r`<span class="text-xs text-muted shrink-0 ml-auto">${e.quantity}</span>`:h}
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
              ${n?this.renderDraftRow():h}
            </ul>`}
      </section>
    `}renderSectionGrouped(e,t,s,i=!1){const n=new Map;for(const l of t){const d=this.inferCategory(l.name);n.has(d)||n.set(d,[]),n.get(d).push(l)}for(const l of n.values())l.sort((d,u)=>d.name.localeCompare(u.name));const o=q.CATEGORY_ORDER.filter(l=>n.has(l)).concat([...n.keys()].filter(l=>!q.CATEGORY_ORDER.includes(l))),a=i&&this.draftActive;return r`
      <section class="rounded-xl border border-line bg-surface">
        <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">${e} <span class="text-muted/60">${t.length||""}</span></h3>
        ${t.length===0&&!a?r`<p class="px-4 pb-3 text-xs text-muted/70">${s}</p>`:r`<div class="pb-2 ${this.colsClass()}">
              ${o.map(l=>r`<div class="break-inside-avoid">
                <div class="px-4 pt-2.5 pb-0.5 text-[10px] font-semibold text-muted/50 select-none">${l}</div>
                <ul>${n.get(l).map((d,u)=>this.renderItem(d,u,!1))}</ul>
              </div>`)}
              ${a?r`<ul>${this.renderDraftRow()}</ul>`:h}
            </div>`}
      </section>
    `}render(){const e=o=>this.sortMode==="az"?[...o].sort((a,l)=>a.name.localeCompare(l.name)):o,t=e(this.items.filter(o=>o.status==="shopping")),s=e(this.items.filter(o=>o.status==="pantry")),i=this.sortMode==="type"&&this.list==="grocery",n=this.list==="buy"?{todo:"To Buy",done:"Bought",todoEmpty:"Nothing to buy yet. Add something you want to get.",doneEmpty:"Nothing bought yet. Check items off as you get them."}:{todo:"Shopping",done:"Pantry",todoEmpty:"Nothing to buy. Add an item, or ask the grocery keeper.",doneEmpty:"Nothing at home yet. Check items off as you buy them."};return r`
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
                  ${this.settingsOpen?this.renderSettings():h}
                </div>`:h}
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
    `}};q.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];re([c()],q.prototype,"items",2);re([c()],q.prototype,"loading",2);re([c()],q.prototype,"input",2);re([c()],q.prototype,"quantity",2);re([c()],q.prototype,"adding",2);re([c()],q.prototype,"editingId",2);re([c()],q.prototype,"editingExpiryId",2);re([c()],q.prototype,"emojiPickerFor",2);re([c()],q.prototype,"draftActive",2);re([c()],q.prototype,"draftValue",2);re([c()],q.prototype,"cols",2);re([c()],q.prototype,"sortMode",2);re([c()],q.prototype,"settingsOpen",2);re([c()],q.prototype,"expiryEnabled",2);re([c()],q.prototype,"list",2);q=re([k("grocery-section")],q);const Mi=new Map,ni=new Map;function _s(e){return Mi.get(e)}function lr(e){const t=Mi.get(e);if(t!=null)return Promise.resolve(t);let s=ni.get(e);return s||(s=fetch(`/api/inbox/${e}`).then(i=>i.ok?i.json():null).then(i=>{const n=i?.message.body??null;return n!=null&&Mi.set(e,n),n}).catch(()=>null).finally(()=>ni.delete(e)),ni.set(e,s)),s}var vd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,_e=(e,t,s,i)=>{for(var n=i>1?void 0:i?yd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&vd(t,s,n),n};const wd=new Set(["Hamsal","infra","mana","nudge","office-keeper","retellai"]),oi="/office-avatars/",cr="office.scene.cache.v1";let $t=(()=>{try{const e=localStorage.getItem(cr);return e?JSON.parse(e):null}catch{return null}})();const dr="office.scene.layout.v1",Rn={x:.5,y:.12},Ks=(()=>{const e={pos:{},youPos:{...Rn},room:"team",view:"floor"};try{const t=localStorage.getItem(dr);if(!t)return e;const s=JSON.parse(t);return{pos:s.pos??{},youPos:s.youPos??{...Rn},room:s.room==="backlog"?"backlog":"team",view:s.view==="list"?"list":"floor"}}catch{return e}})(),hr=new Map(Object.entries(Ks.pos).map(([e,t])=>[Number(e),t]));let Oi=Ks.youPos,Li=Ks.room,Ni=Ks.view;function ms(){try{localStorage.setItem(dr,JSON.stringify({pos:Object.fromEntries(hr),youPos:Oi,room:Li,view:Ni}))}catch{}}const jn=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`,kd=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,$d=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="8" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>`;let Z=class extends ${constructor(){super(...arguments),this.apps=[],this.messages=[],this.activity=null,this.loading=!0,this.me=null,this.room=Li,this.view=Ni,this.search="",this.searchOpen=!1,this.pos=hr,this.youPos=Oi,this.dragId=null}connectedCallback(){super.connectedCallback(),$t&&(this.apps=$t.apps,this.messages=$t.messages,this.activity=$t.activity,this.loading=!1),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3),this.unsubSettings=_(this,g,e=>e.settings),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e&&(this.me=e)}).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer),this.unsubSettings?.()}youAvatar(){const e=g.getState().settings,t=this.me,s=t?e[`user:${t.login}:profile_pic_url`]:"",i=t?.role==="owner"?e["cockpit.profile_pic_url"]:"",n=s||i||t?.profilePic||"";if(n){try{localStorage.setItem("office.you.avatar",n)}catch{}return n}try{return localStorage.getItem("office.you.avatar")||`${oi}you.svg`}catch{return`${oi}you.svg`}}async refresh(){try{const[t,s,i]=await Promise.all([fetch("/api/office?lean=1"),fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);t.ok&&(this.apps=(await t.json()).apps),s.ok&&(this.messages=(await s.json()).messages),i.ok&&(this.activity=await i.json())}catch{}$t={apps:this.apps.map(t=>{const s={...t};return delete s.docs,s}),messages:this.messages,activity:this.activity};try{localStorage.setItem(cr,JSON.stringify($t))}catch{}this.loading=!1}get rows(){const e=this.activity,t=new Set(e?.live??[]),s=new Set;for(const a of e?.quarantined??[]){const l=this.messages.find(d=>String(d.id)===a.id);l&&s.add(l.to_agent)}const i=new Map;for(const a of this.messages){if(a.read_at!=null)continue;const l=/^branch ready:\s*(\S+)/i.exec(a.subject||"");l?.[1]&&i.set(a.from_agent,l[1])}const n=this.apps.map(a=>{const l=this.messages.filter(x=>x.from_agent===a.name||x.to_agent===a.name).sort((x,v)=>v.created_at-x.created_at),d=i.has(a.name),u=t.has(a.name)?"working":s.has(a.name)||d?"attention":"idle";let p=null,m=null;if(e)for(const[x,v]of Object.entries(e.handled))v.to===a.name&&(p==null||v.at>p)&&(p=v.at,m=v.summary??`Answered #${x}`);const f=l[0];if(f){const x=f.created_at*1e3;(p==null||x>p)&&(p=x,m=`${f.from_agent===a.name?"→ "+f.to_agent:"← "+f.from_agent}: ${f.subject||"(no subject)"}`)}return u==="working"?m="Working now":d&&(m=`Branch ready — review ${i.get(a.name)}`),{app:a,state:u,lastAt:p,blurb:m,messages:l}}),o={attention:0,working:1,idle:2};return n.sort((a,l)=>o[a.state]!==o[l.state]?o[a.state]-o[l.state]:(l.lastAt??0)-(a.lastAt??0))}ago(e){if(e==null)return"—";const t=Math.max(0,Math.floor((Date.now()-e)/1e3));return t<60?`${t}s`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}avatarSrc(e){return wd.has(e.name)?`${oi}${e.name}.svg`:e.icon||null}get teamRows(){return this.rows.filter(e=>!Z.BACKLOG_STATUS.has(e.app.status))}get backlogRows(){return this.rows.filter(e=>Z.BACKLOG_STATUS.has(e.app.status))}setRoom(e){this.room=e,Li=e,ms()}setView(e){this.view=e,Ni=e,ms()}matchesSearch(e){const t=this.search.trim().toLowerCase();return t?(g.getState().settings[`office.label.${e.app.id}`]||e.app.name).toLowerCase().includes(t)||(e.app.purpose??"").toLowerCase().includes(t):!0}openSearch(){this.searchOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector("#office-search")?.focus())}closeSearch(){this.search="",this.searchOpen=!1}defaultPos(e,t){const s=Z.FLANK_X,i=e%s.length,n=Math.floor(e/s.length);return{x:s[i]??.5,y:.3+n*.132}}startDrag(e,t,s){if(e.target.closest("[data-no-drag]"))return;e.preventDefault(),this.dragId=t;const i={x:e.clientX,y:e.clientY},n=t==="you"?{...this.youPos}:{...this.pos.get(t)??this.fallbackPos(t)};let o=!1;const a=d=>{const u=s.getBoundingClientRect();(Math.abs(d.clientX-i.x)>3||Math.abs(d.clientY-i.y)>3)&&(o=!0);const p=Math.min(.94,Math.max(.06,n.x+(d.clientX-i.x)/u.width)),m=Math.min(.94,Math.max(.06,n.y+(d.clientY-i.y)/u.height));t==="you"?(this.youPos={x:p,y:m},Oi=this.youPos):this.pos.set(t,{x:p,y:m}),this.requestUpdate()},l=()=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l);const d=this.dragId;this.dragId=null,!o&&typeof d=="number"&&this.dispatchEvent(new CustomEvent("open-app",{detail:d,bubbles:!0,composed:!0})),o&&ms(),this.requestUpdate()};window.addEventListener("pointermove",a),window.addEventListener("pointerup",l)}fallbackPos(e){const t=this.rows,s=t.findIndex(i=>i.app.id===e);return this.defaultPos(Math.max(0,s),t.length)}async markMsgRead(e){try{await fetch(`/api/inbox/${e}/read`,{method:"POST"})}catch{}this.refresh()}sendToSeat(e){this.pos.delete(e.app.id),ms();const t=this.messages.find(s=>s.from_agent===e.app.name&&s.read_at==null&&/^branch ready:/i.test(s.subject||""));t?this.markMsgRead(t.id):this.requestUpdate()}renderAgent(e,t,s){const{app:i,state:n}=e,o=n==="working"?"outline-emerald-500":n==="attention"?"outline-amber-500":"outline-transparent",a=n==="working"?r`<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>`:n==="attention"?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>`:null,l=this.avatarSrc(i),d=l?r`<img src=${l} width="50" height="50" alt=""
          style="image-rendering:pixelated;" class="rounded-[9px] outline outline-2 outline-offset-2 ${o} bg-surface" />`:r`<span class="w-[50px] h-[50px] rounded-[9px] grid place-items-center bg-ink/10 text-ink text-base font-semibold outline outline-2 outline-offset-2 ${o}">${i.name.charAt(0).toUpperCase()}</span>`,u=this.pos.has(i.id);return r`
      <div
        style="position:absolute;left:${t.x*100}%;top:${t.y*100}%;width:118px;margin:-46px 0 0 -59px;cursor:grab;touch-action:none;z-index:${s?4:2};${this.dragId===i.id?"":"transition:left .6s cubic-bezier(.4,0,.2,1),top .6s cubic-bezier(.4,0,.2,1);"}"
        @pointerdown=${p=>this.startDrag(p,i.id,p.currentTarget.parentElement)}
      >
        <div class="flex flex-col items-center">
          <div class="mb-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-surface border border-line shadow-sm">
            ${a??h}<span class="text-ink">${g.getState().settings[`office.label.${i.id}`]||i.name}</span>
          </div>
          ${d}
          ${s||u?r`<button data-no-drag type="button"
                class="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] bg-surface border border-line text-muted hover:text-ink shadow-sm"
                @click=${p=>{p.stopPropagation(),this.sendToSeat(e)}}>↩ seat</button>`:h}
        </div>
      </div>`}renderStrip(){const e=this.activity,t=this.teamRows,s=t.filter(l=>l.state==="working").length,i=t.filter(l=>l.state==="attention").length,n=t.length-s-i,o=s>0?{cls:"bg-emerald-500 animate-pulse",label:`${s} working now`}:e?.paused?{cls:"bg-ink/30",label:"Dispatcher paused"}:e?.stale?{cls:"bg-amber-500",label:"Dispatcher asleep"}:{cls:"bg-ink/30",label:"Quiet"},a=[];return i>0&&a.push(`${i} waiting on you`),s>0&&a.push(`${s} working`),a.push(`${n} idle`),r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${o.cls}"></span>
        <span class="text-xs text-ink font-medium">${o.label}</span>
        ${e?.paused?r`<button data-no-drag type="button" title="Delete the PAUSED sentinel and let the loop spawn agents again"
              class="px-1.5 py-0.5 rounded text-[10px] font-medium border border-line text-muted hover:text-ink hover:bg-ink/5"
              @click=${()=>this.setPaused(!1)}>Resume</button>`:h}
        <span class="ml-auto text-[11px] text-muted hidden sm:inline">${a.join(" · ")} · last tick ${this.ago(e?.lastTickAt??null)} ago</span>
        ${this.renderControls()}
      </div>`}async setPaused(e){try{await fetch("/api/bus/pause",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({paused:e})})}catch{}this.refresh()}renderControls(){const e=this.searchOpen?r`<div class="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-1.5 py-0.5 text-muted">
          ${jn}
          <input id="office-search" type="text" placeholder="Search agents…" .value=${this.search}
            class="w-28 bg-transparent text-[11px] text-ink outline-none placeholder:text-muted"
            @input=${s=>{this.search=s.target.value}}
            @keydown=${s=>{s.key==="Escape"&&this.closeSearch()}} />
          <button type="button" title="Clear" class="hover:text-ink" @click=${()=>this.closeSearch()}>✕</button>
        </div>`:r`<button type="button" title="Search" class="p-1.5 rounded-md text-muted hover:text-ink hover:bg-ink/5"
          @click=${()=>this.openSearch()}>${jn}</button>`,t=(s,i,n)=>r`
      <button type="button" title=${n}
        class="p-1 rounded ${this.view===s?"bg-ink/10 text-ink":"text-muted hover:text-ink"}"
        @click=${()=>this.setView(s)}>${i}</button>`;return r`
      <div class="flex items-center gap-1.5">
        ${e}
        <div class="inline-flex items-center rounded-md border border-line bg-surface p-0.5">
          ${t("floor",kd,"Floor view")}${t("list",$d,"List view")}
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
      </div>`:r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">${this.search?"No agents match your search.":"Nothing here."}</p>`}renderListItem(e){const{app:t,state:s}=e,i=this.avatarSrc(t),n=g.getState().settings[`office.label.${t.id}`]||t.name,o=s==="working"?"bg-emerald-500 animate-pulse":s==="attention"?"bg-amber-500":"bg-ink/20";return r`
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
          ${e.lastAt?r`<span class="text-[11px] text-muted shrink-0">${this.ago(e.lastAt)}</span>`:h}
        </button>
      </li>`}render(){const e=this.room==="team",t=this.teamRows,s=this.backlogRows,i=e?t:s,n=e?t.filter(p=>p.state==="attention"):[],o=n.length,a=s.filter(p=>p.app.status==="idea"),l=s.filter(p=>p.app.status==="archived"),d=.24+Math.ceil(a.length/4)*.15+.05,u=new Map;return a.forEach((p,m)=>u.set(p.app.id,{x:(m%4+1)/5,y:.24+Math.floor(m/4)*.15})),l.forEach((p,m)=>u.set(p.app.id,{x:(m%4+1)/5,y:d+Math.floor(m/4)*.15})),r`
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
              </div>`:h}

          <!-- room switcher, anchored at the bottom -->
          ${this.renderRoomSwitcher(t.length,s.length)}
          <div class="absolute left-3 top-2 text-[11px] z-[1] text-muted">drag to move · tap to open</div>
          ${e?h:r`
                ${a.length?r`<div class="absolute left-[8%] z-[1] text-[10px] text-muted" style="top:16%">Ideas · ${a.length}</div>`:h}
                ${l.length?r`<div class="absolute left-[8%] z-[1] text-[10px] text-muted" style="top:${(d-.06)*100}%">Archived · ${l.length}</div>`:h}`}
          ${this.loading?r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">Loading…</p>`:i.length?h:r`<p class="absolute inset-0 grid place-items-center text-xs text-muted">${e?"No active apps.":"No ideas or archived apps. Set an app's status to Idea or Archived in its profile."}</p>`}

          ${i.map(p=>{if(!this.matchesSearch(p))return h;if(!e){const x=this.pos.get(p.app.id)??u.get(p.app.id)??{x:.5,y:.5};return this.renderAgent(p,x,!1)}const m=n.indexOf(p),f=m>=0?{x:this.youPos.x+(m-(o-1)/2)*.16,y:this.youPos.y+.16}:this.pos.get(p.app.id)??this.defaultPos(t.indexOf(p),t.length);return this.renderAgent(p,f,m>=0)})}

          ${e?r`<!-- your throne, anchored top-centre, draggable; name above you -->
              <div
                style="position:absolute;left:${this.youPos.x*100}%;top:${this.youPos.y*100}%;width:160px;margin:-46px 0 0 -80px;text-align:center;z-index:3;cursor:grab;touch-action:none;"
                @pointerdown=${p=>this.startDrag(p,"you",p.currentTarget.parentElement)}
              >
                <div class="mb-1 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-600 text-white shadow-sm">you</div>
                <div class="block">${(()=>{const p=this.youAvatar(),m=p.endsWith(".svg");return r`<img src=${p} width="58" height="58" alt="you" referrerpolicy="no-referrer"
                    style=${m?"image-rendering:pixelated;":""}
                    class="w-[58px] h-[58px] rounded-xl object-cover outline outline-2 outline-offset-2 outline-emerald-600 bg-surface" />`})()}</div>
                ${o>0?r`<div class="mt-1 text-[10px] font-medium text-amber-600">${o===1?"1 came to you":`${o} came to you`}</div>`:h}
              </div>`:h}
        </div>`}
      </div>`}};Z.BACKLOG_STATUS=new Set(["idea","archived"]);Z.FLANK_X=[.12,.29,.71,.88];_e([c()],Z.prototype,"apps",2);_e([c()],Z.prototype,"messages",2);_e([c()],Z.prototype,"activity",2);_e([c()],Z.prototype,"loading",2);_e([c()],Z.prototype,"me",2);_e([c()],Z.prototype,"room",2);_e([c()],Z.prototype,"view",2);_e([c()],Z.prototype,"search",2);_e([c()],Z.prototype,"searchOpen",2);_e([c()],Z.prototype,"youPos",2);Z=_e([k("office-scene")],Z);var Sd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,Se=(e,t,s,i)=>{for(var n=i>1?void 0:i?Cd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Sd(t,s,n),n};const Fn=e=>`office.label.${e}`,Td=["active","idea","paused","shipped","archived"],Dd={active:"Active",idea:"Ideas",paused:"Paused",shipped:"Shipped",archived:"Archived"},Ed={active:"bg-emerald-500",idea:"bg-sky-400",paused:"bg-amber-500",shipped:"bg-violet-400",archived:"bg-zinc-500"},Bn=512*1024;let be=class extends ${constructor(){super(...arguments),this.apps=[],this.loading=!0,this.view="floor",this.inboxUnread=0,this.selectedId=null,this.archivedOpen=!1,this.openDoc=null,this.handoffs=[],this.openHandoff=null,this.editingField=null}updated(){if(!this.editingField)return;const e=this.renderRoot,t=e.querySelector("[data-editing]");t&&e.activeElement!==t&&(t.focus(),t.select())}connectedCallback(){super.connectedCallback(),this.refresh()}get selected(){return this.apps.find(e=>e.id===this.selectedId)??null}select(e){this.selectedId=e,this.openDoc=null,this.openHandoff=null,this.handoffs=[],e!=null&&(this.loadHandoffs(e),this.loadDocs(e))}async loadDocs(e){try{const t=await fetch(`/api/office/${e}`);if(!t.ok||this.selectedId!==e)return;const{app:s}=await t.json();this.apps=this.apps.map(i=>i.id===e?{...i,docs:s.docs}:i)}catch{}}async loadHandoffs(e){const t=this.apps.find(s=>s.id===e);if(t)try{const s=await fetch(`/api/inbox?agent=${encodeURIComponent(t.name)}&lean=1`);s.ok&&this.selectedId===e&&(this.handoffs=(await s.json()).messages)}catch{}}async refresh(){try{const e=await fetch("/api/office?lean=1");e.ok&&(this.apps=(await e.json()).apps)}catch{}this.selectedId!=null&&this.loadDocs(this.selectedId),this.refreshInboxBadge(),this.loading=!1}async refreshInboxBadge(){try{const e=await fetch("/api/inbox?unread=1&lean=1");if(e.ok){const t=(await e.json()).messages;this.inboxUnread=t.length}}catch{}}async patch(e,t){await fetch(`/api/office/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async removeApp(e){confirm(`Remove ${e.name} from the office?`)&&(await fetch(`/api/office/${e.id}`,{method:"DELETE"}),this.selectedId===e.id&&this.select(null),await this.refresh())}async onLogoFile(e,t){const s=t.target,i=s.files?.[0];if(s.value="",!i)return;if(!i.type.startsWith("image/")){alert("Please choose an image file.");return}if(i.size>Bn){alert(`Image is too large (max ${Math.round(Bn/1024)}KB).`);return}const n=await new Promise((o,a)=>{const l=new FileReader;l.onload=()=>o(l.result),l.onerror=()=>a(l.error),l.readAsDataURL(i)});await this.patch(e.id,{icon:n})}renderLogo(e,t="w-8 h-8"){return e.icon?r`<img
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
            >↗</a>`:h}
        <span class="shrink-0 text-[11px] text-muted opacity-0 group-hover/e:opacity-60">✎</span>
      </button>
    `:h}metaRow(e,t){return r`
      <dt class="text-[10px] text-muted pt-2">${e}</dt>
      <dd class="min-w-0 py-1">${t}</dd>
    `}statusControl(e){return r`
      <div class="relative inline-block">
        <span class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${Ed[e.status]}"></span>
        <select
          class="appearance-none bg-surface border border-line rounded-full pl-6 pr-7 py-1 text-xs text-ink hover:bg-hover focus:outline-none focus:border-ink cursor-pointer"
          @change=${t=>void this.patch(e.id,{status:t.target.value})}
        >
          ${Td.map(t=>r`<option value=${t} ?selected=${e.status===t}>${Dd[t]}</option>`)}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted">▾</span>
      </div>
    `}floorLabelControl(e){const t=g.getState().settings[Fn(e.id)]||"";return r`
      <input
        type="text"
        .value=${t}
        placeholder=${e.name}
        class="w-full max-w-[280px] px-2 py-1 text-sm bg-surface border border-line rounded text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink"
        @change=${s=>void g.getState().setSetting(Fn(e.id),s.target.value.trim())}
      />
    `}renderDocs(e){const t=e.docs??[],s=t.find(i=>i.file===this.openDoc&&i.content!=null)??null;return r`
      <section class="space-y-2">
        <h3 class="text-[11px] text-muted">Docs · what the agents read</h3>
        ${t.length===0?r`<p class="text-xs text-muted">No markdown captured yet${e.path?r` for <span class="font-mono">${e.path}</span>`:h}. They sync in from the repo on the Air.</p>`:r`
              <div class="grid grid-cols-3 gap-2">
                ${t.map(i=>{const n=i.content!=null,o=this.openDoc===i.file;return r`<button type="button" ?disabled=${!n}
                    class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-left text-xs min-w-0 ${o?"border-ink bg-hover":"border-line hover:bg-hover"} ${n?"":"opacity-60 cursor-default"}"
                    @click=${n?()=>this.openDoc=o?null:i.file:void 0}>
                    <span class="shrink-0 text-muted ${n?`transition-transform ${o?"rotate-90":""}`:""}">${n?"›":"·"}</span>
                    <span class="font-mono text-ink truncate">${i.file}</span>
                  </button>`})}
              </div>
              ${s?r`<pre class="rounded-lg border border-line bg-bg px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words max-h-80 overflow-y-auto">${s.content}</pre>`:h}
            `}
      </section>
    `}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}toggleHandoff(e){if(this.openHandoff===e){this.openHandoff=null;return}this.openHandoff=e,_s(e)==null&&lr(e).then(()=>this.requestUpdate())}renderHandoffs(e){const t=this.handoffs;return r`
      <section class="space-y-2">
        <h3 class="text-[11px] text-muted">Handoffs · agent message bus</h3>
        ${t.length===0?r`<p class="text-xs text-muted">No handoffs yet. When ${e.name}'s agent hands off to another agent, or receives one, it shows here.</p>`:r`<div class="rounded-lg border border-line overflow-hidden divide-y divide-line/60">
              ${t.map(s=>{const i=s.from_agent===e.name,n=i?s.to_agent:s.from_agent,o=this.openHandoff===s.id,a=!i&&s.read_at==null;return r`<div>
                  <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-hover"
                    @click=${()=>this.toggleHandoff(s.id)}>
                    <span class="font-mono shrink-0 ${i?"text-muted":"text-ink"}">${i?"→":"←"} ${n}</span>
                    <span class="flex-1 min-w-0 truncate ${a?"text-ink font-medium":"text-muted"}">${s.subject||"(no subject)"}</span>
                    ${a?r`<span class="w-1.5 h-1.5 rounded-full bg-ink shrink-0"></span>`:h}
                    <span class="text-[10px] text-muted shrink-0">${this.fmtTime(s.created_at)}</span>
                  </button>
                  ${o?r`<pre class="px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-bg border-t border-line max-h-72 overflow-y-auto">${_s(s.id)??"Loading…"}</pre>`:h}
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
                >×</button>`:h}
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
              ${e.purpose?r`<span class="block text-xs text-muted truncate">${e.purpose}</span>`:h}
            </span>
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>
    `}renderHome(){return r`
      <office-scene class="flex flex-col h-full"
        @open-app=${e=>this.select(e.detail)}></office-scene>
    `}render(){const e=this.selected;return e?this.renderDetail(e):this.renderHome()}};Se([c()],be.prototype,"apps",2);Se([c()],be.prototype,"loading",2);Se([c()],be.prototype,"view",2);Se([c()],be.prototype,"inboxUnread",2);Se([c()],be.prototype,"selectedId",2);Se([c()],be.prototype,"archivedOpen",2);Se([c()],be.prototype,"openDoc",2);Se([c()],be.prototype,"handoffs",2);Se([c()],be.prototype,"openHandoff",2);Se([c()],be.prototype,"editingField",2);Se([J("#logo-file")],be.prototype,"logoInput",2);be=Se([k("office-section")],be);var Id=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,Lt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ad(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Id(t,s,n),n};let mt=class extends ${constructor(){super(...arguments),this.embedded=!1,this.messages=[],this.activity=null,this.loading=!0,this.openId=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);e.ok&&(this.messages=(await e.json()).messages),t.ok&&(this.activity=await t.json())}catch{}this.loading=!1}async markRead(e){await fetch(`/api/inbox/${e}/read`,{method:"POST"}),await this.refresh()}toggle(e){if(this.openId===e){this.openId=null;return}this.openId=e,_s(e)==null&&lr(e).then(()=>this.requestUpdate())}stateOf(e){const t=this.activity;return t?.quarantined.some(s=>s.id===String(e.id))?"quarantined":e.read_at!=null?"done":t?.live.includes(e.to_agent)?"working":"pending"}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}ago(e){if(e==null)return"—";const t=Math.max(0,Math.floor((Date.now()-e)/1e3));return t<60?`${t}s`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}renderStrip(){const e=this.activity;if(!e)return h;const t=e.live.length,s=t>0?{cls:"bg-emerald-500 animate-pulse",label:`${t} agent${t>1?"s":""} working now`}:e.stale?{cls:"bg-amber-500",label:"Dispatcher idle (no tick in 12m+)"}:{cls:"bg-ink/30",label:"Idle — waiting for the next tick"},i=this.messages.filter(n=>n.read_at==null).length;return r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${s.cls}"></span>
        <span class="text-xs text-ink font-medium">${s.label}</span>
        ${t>0?r`<span class="text-[11px] text-muted font-mono">${e.live.join(", ")}</span>`:h}
        <span class="ml-auto text-[11px] text-muted">
          ${i} pending · last tick ${this.ago(e.lastTickAt)} ago
          ${e.quarantined.length>0?r`· <span class="text-amber-600">${e.quarantined.length} quarantined</span>`:h}
        </span>
      </div>
    `}renderBadge(e){const s={pending:{label:"pending",cls:"bg-bg text-muted border border-line"},working:{label:"working",cls:"bg-amber-100 text-amber-700",pulse:!0},done:{label:"done",cls:"bg-emerald-50 text-emerald-700"},quarantined:{label:"quarantined",cls:"bg-red-100 text-red-700"}}[e];return r`<span class="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${s.cls}">
      ${s.pulse?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>`:h}${s.label}
    </span>`}renderRun(e){const t=this.activity?.handled[String(e.id)];if(!t)return h;const s=t.durationMs!=null?`${Math.round(t.durationMs/1e3)}s`:null,i=t.batchedWith.length?` · with ${t.batchedWith.map(n=>`#${n}`).join(", ")}`:"";return r`
      <div class="mt-2 flex items-start gap-2 px-2.5 py-1.5 bg-surface border-l-2 border-emerald-400 text-[11px] text-muted">
        <span class="mt-px text-emerald-600">⊙</span>
        <span class="flex-1 min-w-0">
          Answered by a read-only agent · ${this.ago(t.at)} ago${s?` · ${s}`:""}${t.exit!=null&&t.exit!==0?` · exit ${t.exit}`:""}${i}
          ${t.summary?r`<span class="block mt-1 text-ink/70 line-clamp-3 break-words">${t.summary}</span>`:h}
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
                <pre class="text-[12px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-surface border border-line rounded p-3 max-h-96 overflow-y-auto">${_s(e.id)??"Loading…"}</pre>
                ${this.renderRun(e)}
                ${i?r`<button
                      type="button"
                      class="mt-2 text-xs px-3 py-1 border border-line rounded hover:bg-hover"
                      @click=${()=>void this.markRead(e.id)}
                    >Mark read</button>`:r`<span class="mt-2 inline-block text-[10px] text-muted">Read ${e.read_at?this.fmtTime(e.read_at):""}</span>`}
              </div>
            `:h}
      </li>
    `}renderGroup(e,t){return t.length===0?h:r`
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
    `}};Lt([b({type:Boolean})],mt.prototype,"embedded",2);Lt([c()],mt.prototype,"messages",2);Lt([c()],mt.prototype,"activity",2);Lt([c()],mt.prototype,"loading",2);Lt([c()],mt.prototype,"openId",2);mt=Lt([k("inbox-section")],mt);var Pd=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,ur=(e,t,s,i)=>{for(var n=i>1?void 0:i?_d(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Pd(t,s,n),n};const Md=6e4;let Ri=class extends ${constructor(){super(...arguments),this.store=new Ui(this,g,e=>({items:e.notifications,unread:e.notificationsUnread})),this.open=!1,this.onDocClick=e=>{this.open&&(e.composedPath().includes(this)||(this.open=!1))},this.onVisibility=()=>{document.visibilityState==="visible"&&g.getState().loadNotifications()}}connectedCallback(){super.connectedCallback(),g.getState().loadNotifications(),this.pollTimer=setInterval(()=>void g.getState().loadNotifications(),Md),document.addEventListener("click",this.onDocClick),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),this.pollTimer&&clearInterval(this.pollTimer),document.removeEventListener("click",this.onDocClick),document.removeEventListener("visibilitychange",this.onVisibility)}toggle(){this.open=!this.open,this.open&&g.getState().loadNotifications()}parseAction(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}async onItemClick(e){const t=this.parseAction(e.action);if(e.read_at==null&&g.getState().markNotificationRead(e.id),this.open=!1,e.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}t.type==="url"?window.open(t.href,"_blank","noopener"):t.type==="persona"?this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{persona:t.persona},bubbles:!0,composed:!0})):t.type==="mode"&&this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:t.mode},bubbles:!0,composed:!0}))}onDismiss(e,t){e.stopPropagation(),g.getState().dismissNotification(t)}relTime(e){const t=Math.floor(Date.now()/1e3)-e;return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}render(){const e=this.store.state.notifications,t=this.store.state.notificationsUnread,s=r`<svg
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
              >`:h}
        </button>
        ${this.open?this.renderPanel(e,t):h}
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
                @click=${()=>void g.getState().markAllNotificationsRead()}
              >
                Mark all read
              </button>`:h}
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
          ${e.body?r`<p class="text-[11px] text-muted mt-0.5 leading-snug whitespace-pre-line">${e.body}</p>`:h}
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
    `}};ur([c()],Ri.prototype,"open",2);Ri=ur([k("notification-bell")],Ri);var Od=Object.getOwnPropertyDescriptor,Ld=(e,t,s,i)=>{for(var n=i>1?void 0:i?Od(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Un=class extends ${constructor(){super(...arguments),this.store=new Ui(this,g,e=>({items:e.notifications,unread:e.notificationsUnread}))}connectedCallback(){super.connectedCallback(),g.getState().loadNotifications()}parseAction(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}async onItemClick(e){const t=this.parseAction(e.action);if(e.read_at==null&&g.getState().markNotificationRead(e.id),e.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}t.type==="url"?window.open(t.href,"_blank","noopener"):t.type==="persona"?this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{persona:t.persona},bubbles:!0,composed:!0})):t.type==="mode"&&this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:t.mode},bubbles:!0,composed:!0}))}onDismiss(e,t){e.stopPropagation(),g.getState().dismissNotification(t)}relTime(e){const t=Math.floor(Date.now()/1e3)-e;return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}render(){const e=this.store.state.notifications,t=this.store.state.notificationsUnread;return r`
      <div class="flex flex-col flex-1 min-h-0 overflow-y-auto">
        <div class="flex items-center justify-between px-4 py-3">
          <h2 class="text-base font-semibold text-ink">Notifications</h2>
          <div class="flex items-center gap-3">
            ${t>0?r`<button
                  type="button"
                  class="text-xs text-muted hover:text-ink cursor-pointer"
                  @click=${()=>void g.getState().markAllNotificationsRead()}
                >
                  Mark all read
                </button>`:h}
            ${e.length>0?r`<button
                  type="button"
                  class="text-xs text-muted hover:text-ink cursor-pointer"
                  @click=${()=>void g.getState().clearAllNotifications()}
                >
                  Clear all
                </button>`:h}
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
          ${e.body?r`<p class="text-xs text-muted mt-0.5 leading-snug whitespace-pre-line">${e.body}</p>`:h}
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
    `}};Un=Ld([k("notifications-section")],Un);var Nd=Object.getOwnPropertyDescriptor,Rd=(e,t,s,i)=>{for(var n=i>1?void 0:i?Nd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let zn=class extends ${connectedCallback(){super.connectedCallback(),g.getState().loadTools(),this.unsub=_(this,g,e=>e.tools)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}placeable(e){return e.type!=="view"||!!e.panel}toggle(e){const t=e.placement==="cockpit"?"standalone":"cockpit";g.getState().setToolPlacement(e.name,t)}render(){const e=g.getState().tools.filter(t=>this.placeable(t));return r`
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
    `}};zn=Rd([k("tools-launcher")],zn);var jd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,en=(e,t,s,i)=>{for(var n=i>1?void 0:i?Fd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&jd(t,s,n),n};let Ms=class extends ${constructor(){super(...arguments),this.config=null,this.height="200px",this.chart=null,this.gen=0}render(){return r`<div style="position:relative;height:${this.height};width:100%"><canvas></canvas></div>`}async updated(){const e=++this.gen,t=this.querySelector("canvas");if(!t||(this.chart&&(this.chart.destroy(),this.chart=null),!this.config))return;const{Chart:s}=await Ue(async()=>{const{Chart:i}=await import("./auto-DhYMk4xX.js");return{Chart:i}},[]);e!==this.gen||!this.isConnected||(this.chart=new s(t,this.config))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};en([b({attribute:!1})],Ms.prototype,"config",2);en([b({type:String})],Ms.prototype,"height",2);Ms=en([k("finance-chart")],Ms);var Bd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,Re=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ud(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Bd(t,s,n),n};const zd=240,Hd=160;let Ee=class extends ${constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this.flipUp=!1,this._onDoc=e=>{this.open&&!this.contains(e.target)&&this.close()},this._onReflow=e=>{this.open&&(e&&e.target instanceof Node&&this.contains(e.target)||this.close())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0)}close(){this.open=!1,this.q=""}toggle(e){if(e.stopPropagation(),this.open){this.close();return}const t=e.currentTarget.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight-t.bottom,o=t.top;this.flipUp=n<zd+8&&o>n,this.py=this.flipUp?Math.max(8,t.top-4):t.bottom+4,this.px=Math.max(8,Math.min(t.left,s-Hd-8)),this.open=!0}pick(e){this.value=e,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:e,bubbles:!0,composed:!0}))}updated(){this.open&&!window.matchMedia("(pointer: coarse)").matches&&this.querySelector("input.cs-search")?.focus()}render(){const e=this.q.trim().toUpperCase(),t=this.options.length?this.options:this.saved,s=e?t.filter(i=>i.includes(e)):[...this.saved.filter(i=>t.includes(i)),...t.filter(i=>!this.saved.includes(i))];return r`
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
                    @click=${()=>this.pick(i)}><span>${i}</span>${this.saved.includes(i)?r`<span class="text-[9px] text-muted">saved</span>`:h}</button>`):r`<div class="px-3 py-2 text-xs text-muted">No match</div>`}
            </div>
          </div>`:h}
    `}};Re([b({type:String})],Ee.prototype,"value",2);Re([b({type:String})],Ee.prototype,"name",2);Re([b({attribute:!1})],Ee.prototype,"options",2);Re([b({attribute:!1})],Ee.prototype,"saved",2);Re([c()],Ee.prototype,"open",2);Re([c()],Ee.prototype,"q",2);Re([c()],Ee.prototype,"px",2);Re([c()],Ee.prototype,"py",2);Re([c()],Ee.prototype,"flipUp",2);Ee=Re([k("currency-select")],Ee);var qd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,T=(e,t,s,i)=>{for(var n=i>1?void 0:i?Kd(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&qd(t,s,n),n};const Wd=["expenses","fixed","savings","donut"],Gd={expenses:1,fixed:1,savings:1,donut:2},Hn=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],qn=e=>Hn[e%Hn.length],Vd=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],gs=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],Qd=["type","amount","frequency","next","category"];function zt(){return new Date().toISOString().slice(0,7)}function Kn(e,t){const[s,i]=e.split("-").map(Number),n=new Date(Date.UTC(s,i-1+t,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function Ht(e){const[t,s]=e.split("-").map(Number);return!t||!s?e:new Date(Date.UTC(t,s-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric"})}function Yd(e){const[t,s]=e.split("-").map(Number);return!t||!s?e:new Date(Date.UTC(t,s-1,1)).toLocaleDateString(void 0,{month:"short"})}let C=class extends ${constructor(){super(...arguments),this.tab="budget",this.month=zt(),this.loading=!0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.logDay=new Date().getDate(),this.networth=null,this.recurring=[],this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...Qd],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.recurringAsPaid=!1,this.showColMenu=!1,this.showEnded=!1,this.budgetLayout=null,this.dragCardId=null,this.dropTarget=null,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=e=>{e.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=e=>{const t=e.detail;t&&(this.lastCurrency=t,!this.currencies.includes(t)&&this.supportedCurrencies.includes(t)&&this.saveCurrencies([...this.currencies,t]))},this.onCardDragEnd=()=>{this.dragCardId=null,this.dropTarget=null}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const e=await fetch("/api/finance/settings");if(!e.ok)return;const t=await e.json();Array.isArray(t.currencies)&&t.currencies.length&&(this.currencies=t.currencies),Array.isArray(t.supportedCurrencies)&&(this.supportedCurrencies=t.supportedCurrencies),t.lastCurrency&&(this.lastCurrency=t.lastCurrency),t.baseCurrency&&(this.base=t.baseCurrency),t.recurringColumns&&t.recurringColumns.length&&(this.recurringColumns=t.recurringColumns),t.cards&&(this.cards={...this.cards,...t.cards}),typeof t.recurringAsPaid=="boolean"&&(this.recurringAsPaid=t.recurringAsPaid),Array.isArray(t.budgetLayout)&&t.budgetLayout.length&&(this.budgetLayout=t.budgetLayout)}catch{}}renderCurrencySelect(e){const t=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return r`<currency-select name="currency" .value=${e} .saved=${this.currencies}
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
            </select>`:h}
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
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(e){["tab","month","yearN","expandedCat","showIncome","budget"].some(s=>e.has(s))&&this.publishView()}publishView(){const e={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let t;if(this.tab==="budget"){if(t=`${Ht(this.month)}`,this.showIncome&&(t+=", income panel open"),this.expandedCat!=null){const s=this.budget?.categories.find(i=>i.id===this.expandedCat);t+=`, expanded category "${s?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?t=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?t=`${Ht(this.month)} · accounts grouped by bucket + net-worth trend`:t="recurring income/expenses table";g.getState().setViewContext({tool:"finance",summary:`Finance · ${e[this.tab]} tab · ${t}`})}async refresh(){this.loading=!0;try{if(this.tab==="budget"){const e=await fetch(`/api/finance/budget?month=${this.month}`);e.ok&&(this.budget=await e.json(),this.base=this.budget.baseCurrency),this.expandedCat!=null&&await this.loadCatTxns(this.expandedCat),this.showIncome&&await this.loadIncomeTxns()}else if(this.tab==="networth"){const e=await fetch(`/api/finance/networth?month=${this.month}`);e.ok&&(this.networth=await e.json(),this.base=this.networth.baseCurrency)}else if(this.tab==="recurring"){const[e,t,s]=await Promise.all([fetch("/api/finance/recurring"),fetch("/api/finance/settings"),fetch(`/api/finance/budget?month=${zt()}`)]);if(e.ok&&(this.recurring=(await e.json()).items),t.ok){const i=await t.json();i.recurringColumns&&i.recurringColumns.length&&(this.recurringColumns=i.recurringColumns)}s.ok&&(this.budget=await s.json())}else if(this.tab==="year"){const e=await fetch(`/api/finance/year?year=${this.yearN}`);e.ok&&(this.year=await e.json(),this.base=this.year.baseCurrency)}}catch{}this.loading=!1}async loadCatTxns(e){try{const t=await fetch(`/api/finance/transactions?month=${this.month}&categoryId=${e}`);t.ok&&(this.catTxns=(await t.json()).items)}catch{}}async loadIncomeTxns(){try{const e=await fetch(`/api/finance/transactions?month=${this.month}&type=income`);e.ok&&(this.incomeTxns=(await e.json()).items)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&await this.loadIncomeTxns()}async post(e,t){await fetch(`/api/finance${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async del(e){await fetch(`/api/finance${e}`,{method:"DELETE"})}async patch(e,t){await fetch(`/api/finance${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}fmt(e,t=this.base){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(e)}catch{return`${Math.round(e)} ${t}`}}fmtShort(e){const t=Math.abs(e),s=t>=1e3?`${(e/1e3).toFixed(t>=1e4?0:1)}k`:String(Math.round(e));return`${this.base==="EUR"?"€":""}${s}`}stat(e,t){return r`
      <div class="text-center">
        <div class="text-[11px] text-white/70">${e}</div>
        <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight">${this.fmt(t)}</div>
      </div>
    `}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../\u200D/.test(e)?e:e.replace(/\uFE0F/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(e){if(!e)return r`<span class="text-muted text-sm">•</span>`;const t=this.iconUrl(e);return t?r`<img src=${t} alt="" class="w-5 h-5 select-none" draggable="false" />`:r`<span class="text-sm">${e}</span>`}setTab(e){this.tab!==e&&(this.tab=e,this.refresh())}gotoMonth(e){this.month=Kn(this.month,e),this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const e=zt();this.month!==e&&(this.month=e,this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh())}daysInMonth(e){const[t,s]=e.split("-").map(Number);return new Date(Date.UTC(t,s,0)).getUTCDate()}defaultLogDay(){return this.month===zt()?new Date().getDate():this.daysInMonth(this.month)}stepDay(e){const t=this.daysInMonth(this.month);this.logDay=Math.min(t,Math.max(1,this.logDay+e))}fmtLogDay(){const[e,t]=this.month.split("-").map(Number),s=Math.min(this.logDay,this.daysInMonth(this.month));return new Date(Date.UTC(e,t-1,s)).toLocaleDateString(void 0,{weekday:"short",day:"numeric"})}renderDayPicker(){return r`
      <div class="flex h-8 items-center gap-0.5 shrink-0 bg-surface border border-line rounded">
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Earlier day"
          @click=${()=>this.stepDay(-1)}>‹</button>
        <span class="min-w-[3.25rem] text-center text-sm tabular-nums text-ink select-none">${this.fmtLogDay()}</span>
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Later day"
          @click=${()=>this.stepDay(1)}>›</button>
      </div>
    `}async toggleCat(e){if(this.expandedCat===e){this.expandedCat=null,this.catTxns=[];return}this.expandedCat=e,await this.loadCatTxns(e)}async addCategory(){const e=this.newCat.trim();e&&(await this.post("/category",{name:e,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(e,t){if(e==="new"){this.newCatIcon=t,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${e}`,{icon:t||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(e,t){const s=t.trim();s&&this.patch(`/category/${e}`,{name:s})}renderEmojiPalette(e){return r`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${t=>t.stopPropagation()}>
        ${Vd.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(e,t)}>${t}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(e,"")}>none</button>
      </div>
    `}async logTxn(e,t,s,i,n,o){!Number.isFinite(s)||s<=0||(await this.post("/transaction",{type:t,amount:s,currency:i||this.base,categoryId:e,name:n,date:o}),await this.refresh())}async setBudget(e,t){Number.isFinite(t)&&(await this.post("/budget",{categoryId:e,amount:t,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(e,t){!Number.isFinite(t)||t<0||this.post("/budget",{categoryId:e,amount:t,month:this.month})}async deleteTxn(e){await this.del(`/transaction/${e}`),await this.refresh()}startEditTxn(e){e.recurring_id==null&&(this.editingTxnId=e.id)}onSaveTxn(e,t){e.preventDefault();const s=e.target,i=s.elements.namedItem("date")?.value||t.date,n=s.elements.namedItem("name")?.value.trim()??"",o=Number(s.elements.namedItem("amount")?.value),a=(s.elements.namedItem("currency")?.value||t.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(t.id,{date:i,name:n,amount:o,currency:a})}async saveTxnEdit(e,t){await this.patch(`/transaction/${e}`,t),this.editingTxnId=null,await this.refresh()}async archiveCategory(e){await this.patch(`/category/${e.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(e){await this.patch(`/category/${e}`,{active:1}),await this.refresh()}async deleteCategoryHard(e){confirm(`Permanently delete "${e.name}"? This can't be undone.`)&&(await this.del(`/category/${e.id}`),await this.refresh())}onQuickAdd(e,t,s){e.preventDefault();const i=e.target,n=Number(i.elements.namedItem("amount")?.value),o=(i.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),a=i.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o;const l=Math.min(this.logDay,this.daysInMonth(this.month)),d=`${this.month}-${String(l).padStart(2,"0")}`;this.logTxn(t,s,n,o,a,d),i.reset()}renderBar(e){const t=e===0?"bg-black/10":e>100?"bg-red-400":e>=75?"bg-amber-300":"bg-emerald-400";return r`
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
          ${t?r`<span class="not-italic" title="Recurring — manage in the Recurring tab">↻ </span>`:h}${e.name||(e.type==="income"?"income":"—")}
        </span>
        <span class="shrink-0 tabular-nums ${t?"":"cursor-pointer"} ${e.type==="income"?"text-green-600":t?"text-muted":"text-ink"}"
          @click=${()=>this.startEditTxn(e)}>
          ${e.base!=null?this.fmt(e.base):`${e.original_amount} ${e.original_currency}`}
        </span>
        ${e.original_currency!==e.baseCurrency?r`<span class="text-[10px] text-muted shrink-0">${e.original_amount} ${e.original_currency}</span>`:h}
        ${t?r`<span class="w-3 shrink-0"></span>`:r`<button type="button" class="text-[10px] text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 shrink-0"
              @click=${()=>void this.deleteTxn(e.id)} title="Delete">×</button>`}
      </li>
    `}renderCatTxns(){return this.catTxns.length?r`
      <ul class="px-3 pb-1">
        ${this.catTxns.map(e=>this.renderTxnRow(e))}
      </ul>
    `:r`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(e,t=!1){const s=this.editingGoals,i=this.expandedCat===e.id&&!s&&!t,n=e.budget>0,o=e.committed??0,a=o>0,l=e.spent+o,d=n?Math.round(l/e.budget*100):0,u=n?Math.round(e.spent/e.budget*100):0,p=n&&l>e.budget,m=Math.min(100,u),f=Math.max(0,Math.min(100,d)-m),x=!s&&!t;return r`
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
            ${a?r`<span class="block text-[11px] tabular-nums text-amber-500" title="Recurring due this month, not yet paid">+${this.fmt(o)}</span>`:h}
          </span>
          ${t?r`<div class="flex items-center justify-end gap-2 text-[11px]">
                <button type="button" class="text-ink/60 hover:text-ink" @click=${v=>{v.stopPropagation(),this.restoreCategory(e.id)}}>Unhide</button>
                <button type="button" class="text-muted hover:text-red-500" @click=${v=>{v.stopPropagation(),this.deleteCategoryHard(e)}}>Delete</button>
              </div>`:s?r`<button type="button" class="text-[11px] text-right text-muted hover:text-red-500"
                  @click=${v=>{v.stopPropagation(),this.archiveCategory(e)}}>hide</button>`:n?r`<div class="flex items-center gap-2">
                    <div class="flex-1 min-w-0">
                      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden flex">
                        <div class="h-full ${p?"bg-red-400":"bg-emerald-400"}" style="width:${m}%"></div>
                        <div class="h-full bg-amber-300" style="width:${f}%"></div>
                      </div>
                    </div>
                    <span class="hidden sm:inline-block w-8 shrink-0 text-right text-[11px] tabular-nums ${p?"text-red-500":"text-muted"}">${Math.min(100,d)}%</span>
                  </div>`:r`<span class="text-[11px] text-right text-ink/40">set goal</span>`}
        </div>
        ${s&&this.emojiPickerFor===e.id?this.renderEmojiPalette(e.id):h}
        ${i?r`
              <div class="bg-bg/40 border-t border-line">
                ${this.renderQuickAdd(e.id,"expense")}
                ${this.renderCatTxns()}
              </div>
            `:h}
      </li>
    `}renderIncomePanel(){const e=this.budget?.income.committedItems??[],t=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),s=e.reduce((n,o)=>n+o.base,0),i=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] text-muted">Income · ${Ht(this.month)}</span>
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
    `}presentCards(e){const t=this.cards.expenseDonut&&e.categories.some(s=>s.spent>0);return Wd.filter(s=>s==="expenses"?!0:s==="savings"?this.cards.savingsGoal:s==="fixed"?this.cards.fixedPayments:t)}effectiveLayout(e){const t=this.presentCards(e),s=new Set(t),i=(this.budgetLayout??[]).filter(o=>s.has(o.id)).map(o=>({...o})),n=new Set(i.map(o=>o.id));for(const o of t)n.has(o)||i.push({id:o,span:Gd[o]});return i}layoutRows(e){const t=[];for(let s=0;s<e.length;){const i=e[s],n=e[s+1];i.span===1&&n&&n.span===1?(t.push([i,n]),s+=2):(t.push([i]),s+=1)}return t}async saveBudgetLayout(e){this.budgetLayout=e,await this.post("/budget-layout",{layout:e})}onCardDragStart(e,t){if(this.dragCardId=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t);const s=e.currentTarget.closest("[data-card]");s&&e.dataTransfer.setDragImage(s,24,16)}}dropModeFor(e,t){const s=t.getBoundingClientRect(),i=(e.clientX-s.left)/s.width,n=(e.clientY-s.top)/s.height;return i<.28?"beside-left":i>.72?"beside-right":n<.5?"stack-before":"stack-after"}onCardDragOver(e,t){if(!this.dragCardId||t===this.dragCardId)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move");const s=this.dropModeFor(e,e.currentTarget);(this.dropTarget?.id!==t||this.dropTarget?.mode!==s)&&(this.dropTarget={id:t,mode:s})}onCardDrop(e,t){e.preventDefault();const s=this.dragCardId,i=this.dropTarget?.mode;this.dragCardId=null,this.dropTarget=null,!(!s||!i||s===t||!this.budget)&&this.applyDrop(this.effectiveLayout(this.budget),s,t,i)}applyDrop(e,t,s,i){const n=e.find(d=>d.id===t);if(!n)return;const o=e.filter(d=>d.id!==t),a=o.findIndex(d=>d.id===s);if(a<0)return;const l={...n};i==="beside-left"||i==="beside-right"?(l.span=1,o[a].span=1,o.splice(i==="beside-left"?a:a+1,0,l)):(l.span=2,o.splice(i==="stack-before"?a:a+1,0,l)),this.saveBudgetLayout(o)}cardContent(e,t,s){return e==="expenses"?this.renderExpensesCard(t):e==="savings"?this.renderSavingsCard(t,s):e==="fixed"?this.renderFixedCard(t,s):this.renderExpenseDonut(t)}renderDropIndicator(e){const t="pointer-events-none absolute z-20 rounded-full bg-blue-500",s=e==="beside-left"?`${t} left-0 top-2 bottom-2 w-1`:e==="beside-right"?`${t} right-0 top-2 bottom-2 w-1`:e==="stack-before"?`${t} top-0 left-2 right-2 h-1`:`${t} bottom-0 left-2 right-2 h-1`;return r`<div class=${s}></div>`}tileWidthClass(e,t){return t.length===1||!t.some(i=>i.id==="expenses")||e==="expenses"?"flex-1 min-w-0 w-full":"w-full @2xl:w-64 @2xl:shrink-0"}renderCardTile(e,t,s){const i=this.dropTarget?.id===e?this.dropTarget.mode:null;return r`
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
        ${i?this.renderDropIndicator(i):h}
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
              ${this.emojiPickerFor==="new"?this.renderEmojiPalette("new"):h}
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
              </div>`:h}
        ${s.length?r`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden · ${s.length}</button>
                ${this.showHidden?r`<ul>${s.map(i=>this.renderCategory(i,!0))}</ul>`:h}
              </div>`:h}
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

      ${this.showIncome?this.renderIncomePanel():h}

      <!-- Draggable card grid (desktop): Expenses / Fixed / Savings / breakdown.
           Grip on each card → drop beside for 2 columns, in the middle to stack. -->
      ${this.renderCardGrid(e,t)}
    `}onSaveSavings(e){e.preventDefault();const t=e.target,s=Number(t.elements.namedItem("amount").value);!Number.isFinite(s)||s<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:s}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(e,t){const s=e.savingsGoal,i=t-e.totalSpent-e.totalCommitted,n=s&&s>0?Math.round(i/s*100):0;return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Savings goal</span>
          ${s!=null&&!this.editingSavings?r`<span class="text-[11px] tabular-nums ${i>=s?"text-emerald-600":"text-muted"}">${n}%</span>`:h}
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
              ${s!=null?r`<div class="mt-1.5">${this.renderBar(Math.max(0,n))}</div>`:h}`}
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
    `}renderExpenseDonut(e){const t=e.categories.filter(i=>i.spent>0).sort((i,n)=>n.spent-i.spent);if(!t.length)return h;const s={type:"doughnut",data:{labels:t.map(i=>i.name),datasets:[{data:t.map(i=>Math.round(i.spent)),backgroundColor:t.map((i,n)=>qn(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"right",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:i=>`${i.label}: ${this.fmt(Number(i.parsed))}`}}}}};return r`
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
            ${e.subtype?r`<span class="ml-1.5 text-[10px] text-muted">${e.subtype}</span>`:h}
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
              </form>`:h}
      </li>
    `}renderNetworth(){const e=this.networth;return e?r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="text-[11px] text-white/70">Net worth · ${Ht(e.month)}</div>
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
    `:r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(e){if(e.series.length<2)return h;const t=e.series.slice(-24),s=["Liquid Assets","Investments","Physical Assets","Debts"],i={"Liquid Assets":"#6366f1",Investments:"#10b981","Physical Assets":"#f59e0b",Debts:"#ef4444"},n={type:"bar",data:{labels:t.map(o=>o.month),datasets:s.map(o=>({label:o,data:t.map(a=>Math.round(a.buckets[o]??0)),backgroundColor:i[o]}))},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:10,font:{size:10}}},tooltip:{callbacks:{label:o=>`${o.dataset.label}: ${this.fmt(Number(o.parsed.y))}`}}},scales:{x:{stacked:!0,ticks:{maxTicksLimit:8,font:{size:10}},grid:{display:!1}},y:{stacked:!0,ticks:{callback:o=>this.fmtShort(Number(o)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Net worth over time</div>
        <finance-chart .config=${n} height="220px"></finance-chart>
      </div>
    `}onAddRecurring(e){e.preventDefault();const t=e.target,s=t.elements.namedItem("name").value.trim(),i=Number(t.elements.namedItem("amount").value),n=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=t.elements.namedItem("type").value,a=t.elements.namedItem("frequency").value,l=t.elements.namedItem("category").value.trim();if(!s||!Number.isFinite(i)||i<=0)return;const d={name:s,amount:i,currency:n,type:o,frequency:a};o==="expense"&&l&&(d.category=l),(async()=>(await this.post("/recurring",d),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(e){const t=new Date().toISOString().slice(0,10),s=p=>!e.end_date||p<=e.end_date,[i,n,o]=e.start_date.split("-").map(Number);if(!i||!n||!o)return null;const a=p=>String(p).padStart(2,"0");if(e.frequency==="weekly"){let p=new Date(`${e.start_date}T00:00:00Z`);const m=new Date(`${t}T00:00:00Z`);if(p<m){const x=Math.ceil((m.getTime()-p.getTime())/6048e5);p=new Date(p.getTime()+x*7*864e5)}const f=p.toISOString().slice(0,10);return s(f)?f:null}const l=e.frequency==="yearly"?12:e.frequency==="quarterly"?3:1;let d=i,u=n;for(let p=0;p<2400;p++){const m=new Date(Date.UTC(d,u,0)).getUTCDate(),f=`${d}-${a(u)}-${a(Math.min(o,m))}`;if(f>=t)return s(f)?f:null;for(u+=l;u>12;)u-=12,d+=1}return null}toggleColumn(e){const t=this.recurringColumns.includes(e)?this.recurringColumns.filter(s=>s!==e):[...this.recurringColumns,e];this.recurringColumns=t,this.post("/recurring-columns",{columns:t})}toggleEditRecur(e){this.editingRecurId=this.editingRecurId===e?null:e,this.cancelingRecurId=null}startCancel(e){this.cancelingRecurId=this.cancelingRecurId===e?null:e,this.editingRecurId=null}onSaveRecur(e,t){e.preventDefault();const s=e.target,i=l=>s.elements.namedItem(l)?.value??"",n=i("type")==="income"?"income":"expense",o=Number(i("amount"));if(!i("name").trim()||!Number.isFinite(o)||o<=0)return;const a={name:i("name").trim(),amount:o,currency:(i("currency")||this.base).toUpperCase().trim(),type:n,frequency:i("frequency"),start:i("start"),category:n==="expense"&&i("category").trim()||null,end:i("end")||null};(async()=>(await this.patch(`/recurring/${t}`,a),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(e,t){e.preventDefault();const s=e.target.elements.namedItem("end")?.value;s&&(async()=>(await this.patch(`/recurring/${t}`,{end:s}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(e){await this.patch(`/recurring/${e}`,{end:null}),await this.refresh()}async deleteRecur(e){confirm("Delete this recurring item? Its logged transactions stay in your history; only the template is removed.")&&(await this.del(`/recurring/${e}`),this.editingRecurId=null,await this.refresh())}cancelIcon(){return r`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(e){const t=e.type==="income",s=new Date().toISOString().slice(0,10),i=this.nextDue(e),n=p=>new Date(`${p}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!e.end_date&&e.end_date>=s,a="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",l=p=>{switch(p){case"type":return r`<td class="px-3 py-2"><span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${t?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-600"}">${t?"IN":"OUT"}</span></td>`;case"category":return r`<td class="px-3 py-2 whitespace-nowrap" title=${t?"income":e.category_name||""}>${t?this.renderIcon("💰"):e.category_icon?this.renderIcon(e.category_icon):r`<span class="text-muted">${e.category_name||"—"}</span>`}</td>`;case"amount":return r`<td class="px-3 py-2 text-right tabular-nums font-semibold whitespace-nowrap ${t?"text-emerald-600":"text-ink"}">${t?"+":""}${this.fmt(e.original_amount,e.original_currency)}</td>`;case"frequency":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.frequency}</td>`;case"next":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${i?n(i):"ended"}</td>`;case"account":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.account_name||"—"}</td>`;case"end":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.end_date||"—"}</td>`;default:return h}},d=2+gs.filter(p=>this.recurringColumns.includes(p.key)).length,u=(p,m)=>p===m?"selected":"";return r`
      <tr class="group border-b border-line/60 last:border-0 cursor-pointer hover:bg-hover" @click=${()=>this.toggleEditRecur(e.id)}>
        <td class="px-3 py-2 font-medium text-ink whitespace-nowrap">
          ${e.name}
          ${o?r`<span class="ml-1.5 text-[10px] font-semibold text-amber-600">ending ${n(e.end_date)}</span>`:h}
        </td>
        ${gs.filter(p=>this.recurringColumns.includes(p.key)).map(p=>l(p.key))}
        <td class="px-2 py-2 text-right">
          <button type="button" class="${o?"text-amber-500":"text-muted opacity-0 group-hover:opacity-100"} hover:text-red-500"
            @click=${p=>{p.stopPropagation(),this.startCancel(e.id)}} title="Cancel subscription">${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===e.id?r`<tr><td colspan=${d} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onConfirmCancel(p,e.id)}>
              <span class="text-[11px] text-muted">Cancel from</span>
              <input name="end" type="date" .value=${e.end_date||i||s} class=${a} />
              <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Confirm</button>
              ${e.end_date?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink" @click=${()=>void this.resumeRecur(e.id)}>resume</button>`:h}
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.cancelingRecurId=null}}>close</button>
              <span class="text-[11px] text-muted">A payment due on/after this date still runs, then it ends.</span>
            </form>
          </td></tr>`:h}
      ${this.editingRecurId===e.id?r`<tr><td colspan=${d} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onSaveRecur(p,e.id)}>
              <input name="name" .value=${e.name} class="flex-1 min-w-[7rem] ${a}" />
              <input name="amount" type="number" step="1" inputmode="decimal" .value=${String(e.original_amount)} class="w-20 ${a}" />
              ${this.renderCurrencySelect(e.original_currency)}
              <select name="type" class=${a}><option value="expense" ?selected=${!t}>expense</option><option value="income" ?selected=${t}>income</option></select>
              <select name="frequency" class=${a}>
                <option value="monthly" ?selected=${u(e.frequency,"monthly")==="selected"}>monthly</option>
                <option value="weekly" ?selected=${u(e.frequency,"weekly")==="selected"}>weekly</option>
                <option value="quarterly" ?selected=${u(e.frequency,"quarterly")==="selected"}>quarterly</option>
                <option value="yearly" ?selected=${u(e.frequency,"yearly")==="selected"}>yearly</option>
              </select>
              <input name="category" placeholder="category" .value=${e.category_name||""} class="flex-1 min-w-[6rem] ${a}" />
              <label class="flex items-center gap-1 text-[10px] text-muted">start<input name="start" type="date" .value=${e.start_date} class=${a} /></label>
              <label class="flex items-center gap-1 text-[10px] text-muted">cancel from<input name="end" type="date" .value=${e.end_date||""} class=${a} /></label>
              <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save</button>
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingRecurId=null}}>close</button>
              ${e.end_date?r`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-500" @click=${()=>void this.deleteRecur(e.id)}>Delete</button>`:r`<span class="ml-auto text-[10px] text-muted">set a cancel date to enable delete</span>`}
              <span class="basis-full text-[10px] text-muted">A payment due on/after the cancel date still runs, then it ends. Deleting keeps logged transactions.</span>
            </form>
          </td></tr>`:h}
    `}monthlyEquiv(e){const t=e.base??e.original_amount;switch(e.frequency){case"weekly":return t*(52/12);case"quarterly":return t/3;case"yearly":return t/12;default:return t}}renderRecurringChart(){const e=this.recurring.filter(a=>a.type==="expense");if(!e.length)return h;const t=zt(),s=[];for(let a=-11;a<=5;a++)s.push(Kn(t,a));const i=s.indexOf(t),n=s.map(a=>{const l=`${a}-31`,d=`${a}-01`;let u=0;for(const p of e)p.start_date>l||p.end_date&&p.end_date<d||(u+=this.monthlyEquiv(p));return Math.round(u)});return r`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Monthly recurring outflow <span class="normal-case">(dashed = projected)</span></div>
        <finance-chart .config=${{type:"line",data:{labels:s,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:a=>a.p1DataIndex>i?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:a=>`${this.fmt(Number(a.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:a=>this.fmtShort(Number(a)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const e=`${this.month}-31`,t=`${this.month}-01`,s=this.recurring.filter(l=>l.start_date<=e&&(!l.end_date||l.end_date>=t));let i=0,n=0;for(const l of s)l.type==="income"?n+=this.monthlyEquiv(l):i+=this.monthlyEquiv(l);const o=this.budget?this.budget.income.actual+(this.budget.income.committed??0):n,a=o>0?Math.round(i/o*100):0;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Out / mo",i)}
          ${this.stat("In / mo",n)}
          ${this.stat("Net / mo",n-i)}
        </div>
        ${o>0?r`<div class="mt-2 text-[11px] text-white/70 text-center">${s.length} active · fixed costs are ${a}% of income</div>`:h}
      </div>
    `}renderRecurring(){const e=new Date().toISOString().slice(0,10),t=n=>!!n.end_date&&n.end_date<e,s=this.recurring.filter(t),i=this.showEnded?this.recurring:this.recurring.filter(n=>!t(n));return r`
      ${this.recurring.length?this.renderRecurringHeader():h}
      <div class="mx-3 my-3 rounded-xl border border-line bg-surface overflow-hidden">
        <!-- column toggle -->
        <div class="relative flex items-center justify-end px-3 py-1.5 border-b border-line">
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns ▾</button>
          ${this.showColMenu?r`
                <div class="absolute right-3 top-8 z-20 rounded-xl border border-line bg-surface shadow-lg py-1" @click=${n=>n.stopPropagation()}>
                  ${gs.map(n=>r`
                    <label class="flex items-center gap-2 px-3 py-1 text-sm hover:bg-hover cursor-pointer whitespace-nowrap">
                      <input type="checkbox" ?checked=${this.recurringColumns.includes(n.key)} @change=${()=>this.toggleColumn(n.key)} />
                      <span>${n.label}</span>
                    </label>`)}
                </div>`:h}
        </div>
        ${this.recurring.length?r`
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="text-[10px] text-muted border-b border-line">
                      <th class="text-left font-normal px-3 py-1.5">Name</th>
                      ${gs.filter(n=>this.recurringColumns.includes(n.key)).map(n=>r`<th class="font-normal px-3 py-1.5 whitespace-nowrap ${n.key==="amount"?"text-right":"text-left"}">${n.label}</th>`)}
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
                        @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended":`Show ${s.length} ended`}</button>`:h}
                </div>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>{this.showRecurringAdd=!0}}>+ Recurring</button>
              </div>`}
      </div>
      ${this.recurring.length?this.renderRecurringChart():h}
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
    `}renderYear(){const e=this.year;if(!e)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.months.map(p=>new Date(`${p.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),s=8,i=e.categories.slice(0,s),n=e.categories.slice(s),o=n.length?Array.from({length:12},(p,m)=>n.reduce((f,x)=>f+(x.monthly[m]??0),0)):null,a=i.map((p,m)=>({type:"bar",label:p.name,data:p.monthly.map(f=>Math.round(f)),backgroundColor:qn(m),stack:"spend",borderWidth:0}));o&&a.push({type:"bar",label:"Other",data:o.map(p=>Math.round(p)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const l={type:"line",label:"Income",data:e.months.map(p=>Math.round(p.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},d={type:"bar",data:{labels:t,datasets:[...a,l]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:p=>`${p.dataset.label}: ${this.fmt(Number(p.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:p=>this.fmtShort(Number(p)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},u=e.totals;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Income",u.income)}
          ${this.stat("Spent",u.spent)}
          ${this.stat("Saved",u.saved)}
        </div>
        <div class="mt-2 text-[11px] text-white/70">Savings rate ${Math.round(u.savingsRate*100)}%</div>
      </div>

      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Spending by category · income line</div>
        <finance-chart .config=${d} height="240px"></finance-chart>
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
              ${e.months.map((p,m)=>{const f=p.income>0?Math.round(p.saved/p.income*100):0,x=p.income===0&&p.spent===0,v=this.expandedYearMonth===p.month;return r`<tr class="border-b border-line/60 ${x?"opacity-40":"cursor-pointer hover:bg-hover"} ${v?"bg-hover":""}"
                    @click=${x?null:()=>void this.toggleYearMonth(p.month)}>
                    <td class="px-3 py-1.5 text-ink">${v?"▾":"▸"} ${t[m]}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${p.income?this.fmt(p.income):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-ink">${p.spent?this.fmt(p.spent):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums ${p.saved<0?"text-red-500":"text-ink"}">${x?"—":this.fmt(p.saved)}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-muted">${x?"—":`${f}%`}</td>
                  </tr>
                  ${v?r`<tr><td colspan="5" class="px-3 py-2 bg-bg/40 border-b border-line">${this.renderYearMonthDetail()}</td></tr>`:h}`})}
            </tbody>
            <tfoot>
              <tr class="border-t border-line font-semibold">
                <td class="px-3 py-1.5 text-ink">Total</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${this.fmt(u.income)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-ink">${this.fmt(u.spent)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums ${u.saved<0?"text-red-500":"text-ink"}">${this.fmt(u.saved)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-muted">${Math.round(u.savingsRate*100)}%</td>
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
      ${this.demoMode?r`<style>.finance-demo .tabular-nums { filter: blur(6px); user-select: none; transition: filter 0.2s; }</style>`:h}
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
                      <button type="button" class="text-ink hover:underline decoration-dotted" title="Jump to current month" @click=${()=>this.toCurrentMonth()}><span class="sm:hidden">${Yd(this.month)}</span><span class="hidden sm:inline">${Ht(this.month)}</span></button>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(1)}>▶</button>
                    </div>`:this.tab==="year"?r`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(-1)}>◀</button>
                      <span class="text-ink">${this.yearN}</span>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(1)}>▶</button>
                    </div>`:h}
              <button type="button" class="text-base ${this.demoMode?"text-amber-500":"text-muted hover:text-ink"}" title="${this.demoMode?"Demo mode on — click to show real numbers":"Demo mode"}"
                @click=${()=>{this.demoMode=!this.demoMode}}><sc-icon name="lucide-${this.demoMode?"eye-off":"eye"}"></sc-icon></button>
              <button type="button" class="text-base ${this.showSettings?"text-ink":"text-muted hover:text-ink"}" title="Finance settings"
                @click=${()=>{this.showSettings=!this.showSettings}}><sc-icon name="lucide-settings"></sc-icon></button>
            </div>
          </div>
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full @container">
            ${this.showSettings?this.renderSettings():h}
            ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.tab==="budget"?this.renderBudget():this.tab==="networth"?this.renderNetworth():this.tab==="year"?this.renderYear():this.renderRecurring()}
          </div>
        </div>
      </div>
    `}};T([c()],C.prototype,"tab",2);T([c()],C.prototype,"month",2);T([c()],C.prototype,"loading",2);T([c()],C.prototype,"base",2);T([c()],C.prototype,"budget",2);T([c()],C.prototype,"expandedCat",2);T([c()],C.prototype,"catTxns",2);T([c()],C.prototype,"newCat",2);T([c()],C.prototype,"newCatIcon",2);T([c()],C.prototype,"emojiPickerFor",2);T([c()],C.prototype,"showHidden",2);T([c()],C.prototype,"logDay",2);T([c()],C.prototype,"networth",2);T([c()],C.prototype,"recurring",2);T([c()],C.prototype,"year",2);T([c()],C.prototype,"yearN",2);T([c()],C.prototype,"expandedYearMonth",2);T([c()],C.prototype,"yearMonthTxns",2);T([c()],C.prototype,"editingSavings",2);T([c()],C.prototype,"editingGoals",2);T([c()],C.prototype,"editingTxnId",2);T([c()],C.prototype,"showIncome",2);T([c()],C.prototype,"incomeTxns",2);T([c()],C.prototype,"showAccountAdd",2);T([c()],C.prototype,"editingBalanceId",2);T([c()],C.prototype,"showRecurringAdd",2);T([c()],C.prototype,"editingRecurId",2);T([c()],C.prototype,"cancelingRecurId",2);T([c()],C.prototype,"recurringColumns",2);T([c()],C.prototype,"currencies",2);T([c()],C.prototype,"supportedCurrencies",2);T([c()],C.prototype,"lastCurrency",2);T([c()],C.prototype,"showSettings",2);T([c()],C.prototype,"demoMode",2);T([c()],C.prototype,"cards",2);T([c()],C.prototype,"recurringAsPaid",2);T([c()],C.prototype,"showColMenu",2);T([c()],C.prototype,"showEnded",2);T([c()],C.prototype,"budgetLayout",2);T([c()],C.prototype,"dragCardId",2);T([c()],C.prototype,"dropTarget",2);C=T([k("finance-section")],C);async function Jd(e,t=400,s=.85){const i=await pr(e,t);if(!i)return await Xd(e);const n=i.toDataURL("image/webp",s);return n.startsWith("data:image/webp")?n:i.toDataURL("image/jpeg",s)}async function Nu(e,t=1600,s=.85){let i;try{i=await pr(e,t)}catch{return e}if(!i)return e;const n=a=>new Promise(l=>i.toBlob(l,a,s));let o=await n("image/webp");return(!o||o.type!=="image/webp")&&(o=await n("image/jpeg")),o&&o.size<e.size?o:e}async function pr(e,t){const s=URL.createObjectURL(e);try{const i=await new Promise((u,p)=>{const m=new Image;m.onload=()=>u(m),m.onerror=()=>p(new Error("could not decode image")),m.src=s}),n=Math.min(1,t/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*n)),a=Math.max(1,Math.round(i.height*n)),l=document.createElement("canvas");l.width=o,l.height=a;const d=l.getContext("2d");return d?(d.drawImage(i,0,0,o,a),l):null}finally{URL.revokeObjectURL(s)}}function Xd(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}var Zd=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,z=(e,t,s,i)=>{for(var n=i>1?void 0:i?eh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Zd(t,s,n),n};let B=class extends ${constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.detailsOpen=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=e=>{const t=e.composedPath();if(this.editingNote==="new"){const s=this.renderRoot.querySelector(".newnote-card");s&&!t.includes(s)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newfact-form");s&&!t.includes(s)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newaction-form");s&&!t.includes(s)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const s=this.renderRoot.querySelector(".inline-edit");s&&!t.includes(s)&&(s.blur(),s.dispatchEvent(new Event("blur")))}},this.onOpsEvent=e=>{const t=e.detail,s=t?.action;if(s==="open-person"&&typeof t?.person=="number"){this.open(t.person);return}s==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onOpenReviewIntent=()=>{try{localStorage.removeItem("circle.intent")}catch{}this.openReview()},this.onPaste=async e=>{const t=e;if(this.selectedId==null||!t.clipboardData)return;const s=document.activeElement;if(s&&/^(INPUT|TEXTAREA)$/.test(s.tagName))return;for(const n of Array.from(t.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){t.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const i=t.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(i)){t.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("circle-open-review",this.onOpenReviewIntent),document.addEventListener("paste",this.onPaste);const e=(()=>{try{return localStorage.getItem("circle.open")}catch{return null}})(),t=e?this.fetchDetail(Number(e)):null;this.refresh().then(()=>{this.restoreOpen(t),this.consumeReviewIntent()})}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("circle-open-review",this.onOpenReviewIntent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}consumeReviewIntent(){try{localStorage.getItem("circle.intent")==="review"&&(localStorage.removeItem("circle.intent"),this.openReview())}catch{}}async refresh(){try{const e=await fetch("/api/circle");if(e.ok){const t=await e.json();this.circles=t.circles,this.people=t.people,this.pendingCount=t.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async fetchDetail(e){try{const t=await fetch(`/api/circle/person/${e}`);if(t.ok)return(await t.json()).person}catch{}return null}async loadDetail(e,t){const s=await(t??this.fetchDetail(e));s&&this.selectedId===e&&(this.detail=s)}open(e,t){this.selectedId=e,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.detailsOpen=!1;try{localStorage.setItem("circle.open",String(e))}catch{}this.reportFocus(e),this.loadDetail(e,t)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(e){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).catch(()=>{})}restoreOpen(e=null){try{const t=localStorage.getItem("circle.open");t&&this.people.some(s=>s.id===Number(t))&&this.open(Number(t),e??void 0)}catch{}}circleName(e){return e==null?"New":this.circles.find(t=>t.id===e)?.name??"New"}circleNames(e){const s=(e.circle_ids?.length?e.circle_ids:e.circle_id!=null?[e.circle_id]:[]).map(i=>this.circles.find(n=>n.id===i)?.name).filter(i=>!!i);return s.length?s:["New"]}primaryCircleName(e){return this.circleNames(e)[0]??"New"}async patchPerson(e,t){await fetch(`/api/circle/person/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async post(e,t){const s=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});await this.refresh();try{return await s.json()}catch{return null}}async patch(e,t){await fetch(e,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async del(e){await fetch(e,{method:"DELETE"}),await this.refresh()}async createAndAssign(e,t){const s=t.trim();if(this.creatingCircle=!1,!s)return;const i=await this.post("/api/circle/circle",{name:s});i?.id&&await this.post(`/api/circle/person/${e}/circle`,{circle_id:i.id})}async addPerson(){const e=this.draftName.trim();if(!e)return;const t=await this.post("/api/circle/person",{name:e,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,t?.id&&this.open(t.id)}async removePerson(e){confirm(`Remove ${e.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${e.id}`),this.back())}async onPhotoFile(e,t){const s=t.target,i=s.files?.[0];s.value="",i&&await this.uploadPhotoFile(e.id,i)}async uploadPhotoFile(e,t){if(!t.type.startsWith("image/")){alert("That's not an image.");return}if(t.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const s=await Jd(t,400,.85);await this.patchPerson(e,{photo:s})}catch{alert("Couldn't process that image.")}}initials(e){const t=e.trim().split(/\s+/);return t.length===1?(t[0]?.slice(0,2)??"").toUpperCase():((t[0]?.[0]??"")+(t[t.length-1]?.[0]??"")).toUpperCase()}avatarStyle(e){let t=0;for(const s of e)t=(t*31+s.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${t} 68% 55%), hsl(${(t+48)%360} 70% 45%));`}renderAvatar(e,t="w-9 h-9",s="text-xs"){return e.photo?r`<img src=${e.photo} alt="" class="${t} rounded-full object-cover shrink-0" loading="lazy" />`:r`<span class="${t} ${s} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}relTime(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/86400);return t<=0?"today":t===1?"yesterday":t<30?`${t}d ago`:t<365?`${Math.floor(t/30)}mo ago`:`${Math.floor(t/365)}y ago`}fmtDate(e,t){const s=e?new Date(e+"T12:00:00"):new Date(t*1e3),i={month:"long",day:"numeric"};return s.getFullYear()!==new Date().getFullYear()&&(i.year="numeric"),s.toLocaleDateString(void 0,i)}fmtMeetDate(e){const t=new Date(e+"T12:00:00"),s={weekday:"long",month:"short",day:"numeric"};return t.getFullYear()!==new Date().getFullYear()&&(s.year="numeric"),t.toLocaleDateString(void 0,s)}filteredPeople(){return this.filter==="needs"?this.people.filter(e=>(e.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(e=>this.circleNames(e).includes(this.filter))}renderRow(e){const t=e.title&&e.company?`${e.title}, ${e.company}`:e.company??e.title??this.circleNames(e).join(", "),s=e.open_actions??0;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover" @click=${()=>this.open(e.id)}>
          ${this.renderAvatar(e,"w-10 h-10","text-sm")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 pr-3 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${e.name}</span>
              <span class="block text-xs text-muted truncate">${t}</span>
            </span>
            ${s>0?r`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${s} to do</span>`:h}
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
            ${this.pendingCount>0?r`<button type="button" class="text-xs px-2 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 hover:bg-violet-500/25" @click=${()=>void this.openReview()}>${this.pendingCount} to confirm</button>`:h}
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
          </div>`:h}
        <div class="flex items-center gap-1.5 mt-2.5 overflow-x-auto -mx-1 px-1 pb-0.5 no-scrollbar">
          ${t.map(n)}
          ${s.map(o=>n({key:o.name,label:o.name}))}
          ${i.length>0?r`<span class="shrink-0 w-px h-4 bg-line mx-0.5 self-center"></span>`:h}
          ${i.map(o=>n({key:o.name,label:o.name}))}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(e,t,s){return r`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${e}</h3>
          ${s??h}
        </div>
        ${t}
      </section>`}collapsibleSection(e,t,s,i){return r`
      <section class="px-4 pt-4 pb-1">
        <button type="button" class="flex items-center gap-1 mb-2 group/sec" @click=${s}>
          <span class="text-[11px] font-medium tracking-wide text-muted group-hover/sec:text-ink">${e}</span>
          <span class="text-[10px] text-muted group-hover/sec:text-ink transition-transform ${t?"rotate-90":""}">›</span>
        </button>
        ${t?i:h}
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
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${t.id}`}}>${i||!s?t.body:this.truncateBody(t.body)}${s?r`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(t.id)}}>${i?" Show less":"… Read more"}</button>`:h}</p>`}
      </article>`}renderNewNoteCard(){return r`
      <article class="newnote-card rounded-lg border border-ink/40 p-3 mb-2">
        <input id="nn-title" type="text" placeholder="Title" class="w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" />
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(new Date().toISOString().slice(0,10),0)}</div>
        <textarea id="nn-body" rows="4" placeholder="What happened, what you talked about, your read on them…"
          class="w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none mt-2" autofocus></textarea>
      </article>`}async saveNewNote(){if(this.editingNote!=="new"||this.selectedId==null)return;const e=this.renderRoot.querySelector("#nn-title")?.value.trim()||null,t=this.renderRoot.querySelector("#nn-body")?.value.trim();this.editingNote=null,t&&await this.post(`/api/circle/person/${this.selectedId}/note`,{title:e,body:t,kind:"talk",date:new Date().toISOString().slice(0,10)})}renderFacts(e){return r`
      ${e.facts.length===0?r`<p class="text-xs text-muted italic mb-1">Nothing yet. Add a detail, or it fills in as you talk about them.</p>`:h}
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
      ${e?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:h}
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
            ${s.length?r`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>done (${s.length})</button>`:h}
          </div>`}`}submitAction(e){const s=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,s&&this.post(`/api/circle/person/${e}/action`,{body:s})}inlineField(e,t,s){return r`
      <label class="block">
        <span class="text-[10px] text-muted">${e}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${t??""} @change=${i=>s(i.target.value.trim())} />
      </label>`}readKeepingInTouch(e){return e.next_meet_date?r`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(e.next_meet_date,0)}</div>`:h}readFacts(e){if(!e.facts.length)return h;const t=e.facts.filter(i=>i.label),s=e.facts.filter(i=>!i.label);return this.section("Details",r`
      ${t.map(i=>r`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${i.label}</span>
        <span class="text-ink flex-1">${i.value}</span></div>`)}
      ${s.length?r`<ul class="mt-1 space-y-0.5">${s.map(i=>r`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${i.value}</li>`)}</ul>`:h}`)}readTags(e){const t=this.parseTags(e.tags);return t.length?this.section("Tags",r`<div class="flex flex-wrap gap-1.5">${t.map(s=>r`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}</span>`)}</div>`):h}readActions(e){return e.actions.length?this.section("Action items",r`<ul class="space-y-0.5">${e.actions.map(t=>r`
      <li class="flex items-center gap-2 text-sm">
        ${this.renderCheck(t.done===1,()=>void this.patch(`/api/circle/action/${t.id}`,{done:t.done!==1}))}
        <span class="${t.done?"line-through text-muted":"text-ink"}">${t.body}</span>
      </li>`)}</ul>`):h}readContact(e){const t=[];return e.email&&t.push(["Email",e.email]),e.phone&&t.push(["Phone",e.phone]),t.length?this.section("Details",r`${t.map(([s,i])=>r`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${s}</span><span class="text-ink flex-1">${i}</span></div>`)}`):h}renderDetailAvatar(e){return r`
      <div class="relative shrink-0">
        <button type="button" class="relative group/av w-16 h-16 rounded-full overflow-hidden block" title="Set photo" @click=${()=>{this.photoMenuOpen=!this.photoMenuOpen}}>
          ${e.photo?r`<img src=${e.photo} alt="" class="w-16 h-16 rounded-full object-cover" />`:r`<span class="w-16 h-16 text-xl rounded-full grid place-items-center text-white font-semibold shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}
          <span class="absolute inset-0 rounded-full bg-black/45 text-white text-[10px] grid place-items-center opacity-0 group-hover/av:opacity-100 transition-opacity">${e.photo?"Change":"Photo"}</span>
        </button>
        <input id="photo-file" type="file" accept="image/*" class="hidden" @change=${t=>void this.onPhotoFile(e,t)} />
        ${this.photoMenuOpen?this.renderPhotoMenu(e):h}
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
        ${e.photo?r`<button type="button" class="text-xs text-muted hover:text-red-500 mt-2" @click=${()=>{this.patchPerson(e.id,{photo:null}),this.photoMenuOpen=!1}}>Remove photo</button>`:h}
      </div>`}async setPhotoFromUrl(e){const s=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(s)try{const i=await fetch(`/api/circle/person/${e}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!i.ok){const n=await i.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??i.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(e,t,s,i,n=""){return this.editingField===e?r`<input type="text" class="inline-edit ${s} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${t??""} autofocus
        @blur=${o=>{i(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:t?r`<span class="${s} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=e}}>${t}</span>`:n?r`<span class="${s} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=e}}>${n}</span>`:h}onCircleSelect(e,t){const s=t.target.value;if(this.editingField=null,!!s){if(s==="__new__"){this.creatingCircle=!0;return}this.post(`/api/circle/person/${e.id}/circle`,{circle_id:Number(s)})}}detailCircles(e){return e.circles?.length?e.circles:e.circle_id!=null&&e.circle_name?[{id:e.circle_id,name:e.circle_name}]:[]}renderCirclePills(e){const t=this.detailCircles(e),s=this.circles.filter(i=>!t.some(n=>n.id===i.id));return r`
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
        @blur=${t=>{this.patchPerson(e.id,{bio:t.target.value.trim()||null}),this.editingField=null}}>${e.bio??""}</textarea>`:e.bio?r`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${e.bio}</p>`:r`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}isFollowingOnly(e){const t=this.detailCircles(e);return t.length>0&&t.every(s=>s.id>9)}renderKit(e){if(this.isFollowingOnly(e))return h;const t=e.next_meet_date,s="nextmeet",i=this.editingField===s?r`<input type="date" class="inline-edit px-1.5 py-0.5 text-xs bg-surface border border-ink rounded focus:outline-none" .value=${t??""} autofocus
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
          ${e.company||this.editingField==="company"?r`<div class="text-sm text-muted">${this.editable("company",e.company,"text-sm text-muted",t=>void this.patchPerson(e.id,{company:t||null}))}</div>`:h}
        </div>
      </div>

      ${this.isFollowingOnly(e)?h:r`<div class="px-4 pb-1">${this.renderKit(e)}</div>`}

      ${this.section("Action items",this.renderActions(e))}

      ${this.section("Notes",r`
        ${this.editingNote==="new"?this.renderNewNoteCard():h}
        ${e.notes.length===0&&this.editingNote!=="new"?r`<p class="text-xs text-muted italic">No notes yet.</p>`:h}
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
      </div>`:h}renderDetail(){const e=this.detail;return e?r`
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
        ${this.pending.length===0?r`<p class="text-sm text-muted">Nothing to confirm.</p>`:h}
        <ul class="space-y-3">${this.pending.map(e=>{const t=e.target_kind==="person",s=e.person_id==null&&!t;return r`
          <li class="border border-line rounded-lg p-3">
            ${t?r`<p class="text-sm font-medium text-ink mb-0.5">Add ${e.person_hint??"this person"} to your circle?</p>`:h}
            <p class="text-sm ${t?"text-muted":"text-ink"} mb-2">${e.suggestion}</p>
            ${s?r`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${e.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(i=>r`<option value=${i.id}>${i.name}</option>`)}
                </select>
              </div>`:h}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(e.id)}>${t?"Not now":"No"}</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const i=this.renderRoot.querySelector(`#pend-${e.id}`),n=e.person_id??(i?.value?Number(i.value):null);if(s&&n==null){alert("Pick a person first.");return}this.confirmPending(e.id,n)}}>${t?"Add":"Yes"}</button>
            </div>
          </li>`})}</ul>
      </div>`}render(){return r`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};z([c()],B.prototype,"view",2);z([c()],B.prototype,"circles",2);z([c()],B.prototype,"people",2);z([c()],B.prototype,"pendingCount",2);z([c()],B.prototype,"loading",2);z([c()],B.prototype,"filter",2);z([c()],B.prototype,"selectedId",2);z([c()],B.prototype,"detail",2);z([c()],B.prototype,"adding",2);z([c()],B.prototype,"pending",2);z([c()],B.prototype,"draftName",2);z([c()],B.prototype,"draftCircle",2);z([c()],B.prototype,"editingNote",2);z([c()],B.prototype,"creatingCircle",2);z([c()],B.prototype,"editingField",2);z([c()],B.prototype,"settingsOpen",2);z([c()],B.prototype,"showCompletedActions",2);z([c()],B.prototype,"detailsOpen",2);z([c()],B.prototype,"expandedNotes",2);z([c()],B.prototype,"photoMenuOpen",2);z([J("#photo-file")],B.prototype,"photoInput",2);B=z([k("circle-section")],B);var th=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,ie=(e,t,s,i)=>{for(var n=i>1?void 0:i?sh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&th(t,s,n),n};const qt=[{key:"topic",question:"What do you want to learn?",hint:"e.g. reading a pond and catching a big fish",required:!0},{key:"mission",question:"What's the mission?",hint:"The real thing you want to pull off with it — why now?",required:!1},{key:"known",question:"What do you already know?",hint:'Anything the path should skip. "Nothing" is a fine answer.',required:!1},{key:"success",question:"What does success look like?",hint:"How you'll know you're done — something real, not a vibe.",required:!1}],Wn={building:{label:"Building",pct:0,done:!1},learning:{label:"Learning",pct:.18,done:!1},practiced:{label:"Practiced",pct:.45,done:!1},proven:{label:"Proven",pct:.75,done:!1},mastered:{label:"Mastered",pct:1,done:!0}},ri=[{key:"first-rep",label:"First Rep",emoji:"🌱",desc:"Finished your first lesson"},{key:"proven",label:"Proven",emoji:"🎯",desc:"Recalled every check in a skill"},{key:"mastered",label:"Mastered",emoji:"🏆",desc:"Held a skill past 21 days"},{key:"streak-7",label:"On Fire",emoji:"🔥",desc:"7-day review streak"},{key:"streak-30",label:"Relentless",emoji:"⚡",desc:"30-day review streak"},{key:"reviews-100",label:"Centurion",emoji:"💯",desc:"Answered 100 reviews"},{key:"sharp-10",label:"Sharp",emoji:"🧠",desc:"10 checks in long-term memory"}],ih=[{g:0,label:"Again",cls:"border-rose-300 text-rose-500 hover:bg-rose-50"},{g:1,label:"Hard",cls:"border-amber-300 text-amber-600 hover:bg-amber-50"},{g:2,label:"Good",cls:"border-accent text-accent hover:bg-accent/10"},{g:3,label:"Easy",cls:"border-emerald-300 text-emerald-600 hover:bg-emerald-50"}];let Y=class extends ${constructor(){super(...arguments),this.skills=[],this.stats=null,this.loading=!0,this.view="list",this.wizardStep=0,this.wizard={topic:"",mission:"",known:"",success:""},this.submitting=!1,this.notingLessonId=null,this.noteDraft="",this.queue=[],this.qIdx=0,this.revealed=!1,this.picked=null,this.grading=!1,this.sessionDone=0,this.toast=[],this.poll=null,this.toastTimer=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>{this.view!=="wizard"&&this.view!=="review"&&this.notingLessonId===null&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll),this.toastTimer&&clearTimeout(this.toastTimer)}async refresh(){try{const e=await fetch("/api/learn");if(e.ok){const t=await e.json();this.skills=t.skills,this.stats=t.stats}}catch{}this.loading=!1}showToast(e){e.length&&(this.toast=e,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=[]},4200))}openWizard(){this.wizard={topic:"",mission:"",known:"",success:""},this.wizardStep=0,this.view="wizard",this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}wizardNext(){const e=qt[this.wizardStep];e.required&&!this.wizard[e.key].trim()||(this.wizardStep<qt.length-1?(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())):this.createSkill())}async createSkill(){if(!this.submitting){this.submitting=!0;try{const e=await fetch("/api/learn/skills",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.wizard)});if(e.ok){const{id:t}=await e.json();await this.refresh(),this.view=t}}finally{this.submitting=!1}}}renderWizard(){const e=qt[this.wizardStep],t=this.wizardStep===qt.length-1,s=!e.required||!!this.wizard[e.key].trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex gap-1.5 mb-6">
            ${qt.map((i,n)=>r`<div class="h-1 flex-1 rounded-full ${n<=this.wizardStep?"bg-accent":"bg-line"}"></div>`)}
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
            <span class="truncate">${e.topic}${e.lesson_title?r` · <span class="text-muted/70">${e.lesson_title}</span>`:h}</span>
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
                      ${ih.map(s=>r`<button type="button" class="px-2 py-1.5 text-xs font-medium rounded-lg border ${s.cls} ${this.grading?"opacity-40 pointer-events-none":""}" @click=${()=>void this.gradeCurrent(s.g)}>${s.label}</button>`)}
                    </div>
                  `:r`<button type="button" class="mt-4 w-full px-4 py-2 text-sm rounded-lg border border-ink text-ink hover:bg-hover font-medium" @click=${()=>{this.revealed=!0}}>Show answer</button>`}
          </div>
          ${e.kind==="recall"&&!this.revealed?r`<p class="text-center text-[11px] text-muted/60 mt-3">Answer it in your head first — then reveal.</p>`:h}
        </div>
      </div>
    `}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderEmojiIcon(e,t="w-[18px] h-[18px]",s="text-[15px]"){const i=this.iconUrl(e);return i?r`<img src=${i} alt="" class="${t} select-none shrink-0" draggable="false" />`:r`<span class="${s} leading-none shrink-0">${e}</span>`}renderEmoji(e,t="w-[18px] h-[18px]",s="text-[15px]"){return this.renderEmojiIcon(e.emoji||"🎓",t,s)}renderRing(e,t=30,s=2.5,i){const n=(t-s)/2,o=2*Math.PI*n,a=o*(1-e);return r`
      <span class="relative inline-flex items-center justify-center shrink-0" style="width:${t}px;height:${t}px;">
        <svg width=${t} height=${t} viewBox="0 0 ${t} ${t}" class="-rotate-90">
          <circle cx=${t/2} cy=${t/2} r=${n} fill="none" class="text-line" stroke="currentColor" stroke-width=${s}></circle>
          <circle cx=${t/2} cy=${t/2} r=${n} fill="none" class="text-accent" stroke="currentColor" stroke-width=${s} stroke-linecap="round" stroke-dasharray=${o} stroke-dashoffset=${a}></circle>
        </svg>
        ${i?r`<span class="absolute inset-0 flex items-center justify-center">${i}</span>`:h}
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
        ${t?r`<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:s?r`<span class="text-muted text-[10px] leading-none">~</span>`:h}
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
            ${s?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold ">Up next</span>`:h}
            ${n&&n.due_at<=o&&i?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-600 font-semibold " title="A check is due for review">due</span>`:h}
            ${n&&n.interval_days>=21?r`<span class="text-[10px]" title="Retained — held past 21 days">🧠</span>`:h}
          </div>
          ${t.exercise&&!i?r`<p class="text-xs text-muted mt-0.5 leading-snug">${t.exercise}</p>`:h}
          ${this.notingLessonId===t.id?r`<input
                class="lesson-note mt-1.5 w-full px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                placeholder="what did you do? (optional — Enter to save)"
                .value=${this.noteDraft}
                @input=${a=>{this.noteDraft=a.target.value}}
                @keydown=${a=>{a.key==="Enter"?(a.preventDefault(),this.commitNote(t)):a.key==="Escape"&&(this.notingLessonId=null,this.noteDraft="")}}
                @blur=${()=>void this.commitNote(t)}
              />`:t.note?r`<p class="text-xs text-muted/80 mt-0.5 italic">${t.note}</p>`:h}
        </div>
        ${t.status==="todo"?r`<button
              type="button"
              class="absolute right-3 top-2.5 shrink-0 opacity-0 group-hover:opacity-60 hover:!opacity-100 text-[11px] text-muted"
              title="Already know this — skip"
              @click=${()=>void this.patchLesson(t.id,{status:"skipped"})}
            >skip</button>`:h}
      </li>
    `}renderDetail(e){const{done:t,total:s}=this.progress(e),i=this.nextLesson(e),n=Wn[e.level],o=[e.mission?{label:"Mission",value:e.mission}:null,e.known?{label:"You know",value:e.known}:null,e.success?{label:"Success",value:e.success}:null].filter(d=>d!==null),a=e.path_status==="ready",l=e.checks.filter(d=>d.reps>=1&&(d.last_grade??0)>=2).length;return r`
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
                <p class="text-xs text-ink"><span class="font-semibold">${t}/${s}</span> reps done${e.checksTotal?r` · <span class="font-semibold">${l}/${e.checksTotal}</span> checks proven`:h}</p>
                <p class="text-[11px] text-muted mt-0.5">${this.detailHint(e)}</p>
              </div>
              ${e.checksDue>0?r`<button type="button" class="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-white hover:opacity-90" @click=${()=>void this.startReview(e.id)}>Review ${e.checksDue}</button>`:e.checksTotal===0?r`<button type="button" class="shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg border border-line text-ink hover:bg-hover" title="Generate checks for this path" @click=${()=>void this.genChecks(e)}>+ Quizzes</button>`:h}
            </div>`:h}

        ${o.length?r`<section class="rounded-xl border border-line bg-surface px-4 py-3 space-y-1.5">
              ${o.map(d=>r`<p class="text-xs leading-snug"><span class="font-semibold text-[10px] text-muted mr-1.5">${d.label}</span><span class="text-ink">${d.value}</span></p>`)}
            </section>`:h}

        <section class="rounded-xl border border-line bg-surface">
          <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">The path</h4>
          ${a?e.lessons.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No lessons — ask the coach in chat, or regenerate.</p>`:r`<ul class="pb-2 divide-y divide-line/40">
                  ${e.lessons.map(d=>this.renderLessonRow(e,d,i?.id===d.id))}
                </ul>`:this.renderPathPending(e)}
        </section>

        ${a?r`<div class="flex items-center gap-3 px-1">
              <button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.regenPath(e)}>↻ regenerate path</button>
              ${e.checksTotal>0?r`<button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.genChecks(e)}>↻ regenerate quizzes</button>`:h}
            </div>`:h}
      </div>
    `}detailHint(e){if(e.checksDue>0)return`${e.checksDue} check${e.checksDue===1?"":"s"} due — review to keep them.`;switch(e.level){case"learning":return"Clear the reps below, one a day.";case"practiced":return e.checksTotal===0?"Add quizzes to start proving it.":"All caught up — checks return on schedule.";case"proven":return"Proven. Keep the checks alive to reach mastered.";case"mastered":return"Mastered — held past 21 days. 🏆";default:return"Clear the reps below, one a day."}}renderSkillCard(e){const{done:t,total:s}=this.progress(e),i=this.nextLesson(e),n=Wn[e.level];return r`
      <button
        type="button"
        class="w-full text-left rounded-xl border border-line bg-surface px-4 py-3 hover:bg-hover transition-colors"
        @click=${()=>{this.view=e.id}}
      >
        <div class="flex items-center gap-2.5">
          ${e.path_status==="ready"?this.renderRing(n.pct,26,2.5,this.renderEmoji(e,"w-[13px] h-[13px]","text-[12px]")):this.renderEmoji(e,"w-[20px] h-[20px]","text-[17px]")}
          <span class="flex-1 min-w-0 text-sm font-medium text-ink truncate">${e.topic}</span>
          ${e.checksDue>0?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-600 font-semibold shrink-0" title="${e.checksDue} checks due">${e.checksDue} due</span>`:h}
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${n.done?"bg-accent/15 text-accent":"text-muted"}">${n.label}</span>
        </div>
        ${e.path_status!=="ready"?r`<p class="mt-1.5 text-xs text-muted flex items-center gap-1.5">
              ${e.path_status==="failed"?"path generation failed — open to retry":r`<span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> building your path…`}
            </p>`:i&&e.status!=="done"?r`<p class="mt-1.5 text-xs text-muted truncate"><span class="text-accent font-medium">Next:</span> ${i.title}</p>`:h}
      </button>
    `}renderStatsStrip(){const e=this.stats;if(!e)return h;const t=Math.round(e.xpInto/e.xpSpan*100);return r`
      <div class="flex items-center gap-3 px-4 py-2.5 border-b border-line shrink-0">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent text-[11px] font-bold">${e.level}</span>
          <div class="flex-1 min-w-0">
            <div class="h-1.5 rounded-full bg-line overflow-hidden"><div class="h-full bg-accent transition-all" style="width:${t}%"></div></div>
            <p class="text-[10px] text-muted mt-0.5">${e.xpInto}/${e.xpSpan} XP to Lv ${e.level+1}</p>
          </div>
        </div>
        ${e.streak>0?r`<span class="shrink-0 text-xs font-semibold text-ink" title="${e.streak}-day review streak">🔥 ${e.streak}</span>`:h}
        <button type="button"
          class="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg ${e.dueTotal>0?"bg-accent text-white hover:opacity-90":"border border-line text-muted pointer-events-none opacity-60"}"
          @click=${()=>void this.startReview()}
        >${e.dueTotal>0?`Review ${e.dueTotal}`:"All caught up"}</button>
      </div>
    `}renderBadges(){const e=this.stats;if(!e)return h;const t=new Set(e.badges.map(s=>s.badge_key));return t.size===0?h:r`
      <section class="pt-2">
        <h4 class="px-1 pb-1.5 text-[11px] font-semibold text-muted">Badges · ${t.size}/${ri.length}</h4>
        <div class="grid grid-cols-4 gap-2">
          ${ri.map(s=>{const i=t.has(s.key);return r`<div class="flex flex-col items-center gap-1 rounded-lg border ${i?"border-line bg-surface":"border-line/40 bg-transparent"} px-1 py-2 text-center" title="${s.label} — ${s.desc}">
              <span class="text-lg ${i?"":"grayscale opacity-30"}">${this.renderEmojiIcon(s.emoji,"w-5 h-5")}</span>
              <span class="text-[9px] leading-tight ${i?"text-ink font-medium":"text-muted/50"}">${s.label}</span>
            </div>`})}
        </div>
      </section>
    `}renderList(){const e=this.skills.filter(s=>s.status==="active"),t=this.skills.filter(s=>s.status==="done");return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-2">
        ${this.loading?h:e.length===0&&t.length===0?r`<div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
                <p class="text-sm text-ink font-medium">Learn something by doing it.</p>
                <p class="text-xs text-muted mt-1">Four quick questions, then a path of small daily reps — plus quizzes that come back on a spaced schedule so it actually sticks.</p>
                <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${this.openWizard}>Start a skill</button>
              </div>`:r`
              ${e.map(s=>this.renderSkillCard(s))}
              ${t.length?r`<h4 class="px-1 pt-2 text-[11px] font-semibold text-muted">Mastered</h4>
                    ${t.map(s=>this.renderSkillCard(s))}`:h}
              ${this.renderBadges()}
            `}
      </div>
    `}renderToast(){return this.toast.length?r`
      <div class="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 flex flex-col gap-1.5 items-center pointer-events-none">
        ${this.toast.map(e=>{const t=ri.find(s=>s.key===e);return r`<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink text-white text-xs font-medium shadow-lg">
            ${this.renderEmojiIcon(t?.emoji||"🏅","w-4 h-4")}<span>Badge earned — ${t?.label??e}</span>
          </div>`})}
      </div>
    `:h}render(){const e=typeof this.view=="number"?this.skills.find(s=>s.id===this.view):void 0,t=this.view==="list"&&this.stats&&this.skills.length>0;return r`
      <div class="relative flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-sm font-semibold text-ink">Learn</h2>
          ${this.view==="wizard"||this.view==="review"?h:r`<button type="button" class="px-2.5 py-1 rounded-full text-sm font-medium text-muted hover:text-ink hover:bg-hover transition-colors" @click=${this.openWizard}>+ New skill</button>`}
        </header>
        ${t?this.renderStatsStrip():h}
        ${this.view==="wizard"?this.renderWizard():this.view==="review"?this.renderReview():e?this.renderDetail(e):this.renderList()}
        ${this.renderToast()}
      </div>
    `}};ie([c()],Y.prototype,"skills",2);ie([c()],Y.prototype,"stats",2);ie([c()],Y.prototype,"loading",2);ie([c()],Y.prototype,"view",2);ie([c()],Y.prototype,"wizardStep",2);ie([c()],Y.prototype,"wizard",2);ie([c()],Y.prototype,"submitting",2);ie([c()],Y.prototype,"notingLessonId",2);ie([c()],Y.prototype,"noteDraft",2);ie([c()],Y.prototype,"queue",2);ie([c()],Y.prototype,"qIdx",2);ie([c()],Y.prototype,"revealed",2);ie([c()],Y.prototype,"picked",2);ie([c()],Y.prototype,"grading",2);ie([c()],Y.prototype,"sessionDone",2);ie([c()],Y.prototype,"toast",2);Y=ie([k("learn-section")],Y);var nh=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,We=(e,t,s,i)=>{for(var n=i>1?void 0:i?oh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&nh(t,s,n),n};let Le=class extends ${constructor(){super(...arguments),this.invites=[],this.sessions=[],this.loading=!0,this.label="",this.days="7",this.uses="3",this.creating=!1,this.copiedId=null,this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>void this.refresh(),5e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const e=await fetch("/api/guests");if(e.ok){const t=await e.json();this.invites=t.invites,this.sessions=t.sessions}}catch{}this.loading=!1}inviteUrl(e){return`${location.origin}/invite/${e.token}`}inviteState(e){return e.revoked?"revoked":e.used_count>=e.max_uses?"used":e.expires_at&&e.expires_at*1e3<Date.now()?"expired":"active"}async createInvite(){const e=this.label.trim();if(!(!e||this.creating)){this.creating=!0;try{const t=await fetch("/api/guests/invites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({label:e,expiresDays:Number(this.days)||7,maxUses:Number(this.uses)||1})});if(t.ok){const{invite:s}=await t.json();this.label="",await this.refresh(),await this.copyLink({...s})}}finally{this.creating=!1}}}async copyLink(e){try{await navigator.clipboard.writeText(this.inviteUrl(e)),this.copiedId=e.id,setTimeout(()=>{this.copiedId===e.id&&(this.copiedId=null)},2e3)}catch{prompt("Copy the invite link:",this.inviteUrl(e))}}async revokeInvite(e){confirm(`Revoke the invite for ${e.label}? The link stops working; existing devices stay in.`)&&(await fetch(`/api/guests/invites/${e.id}`,{method:"DELETE"}),await this.refresh())}async revokeSession(e){confirm(`Kick ${e.display_name}'s device? They're out on their next request.`)&&(await fetch(`/api/guests/sessions/${e.id}`,{method:"DELETE"}),await this.refresh())}fmtDate(e){return e?new Date(e*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—"}fmtLastSeen(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/60);return t<2?"now":t<60?`${t}m ago`:t<2880?`${Math.floor(t/60)}h ago`:this.fmtDate(e)}statePill(e){return r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${{active:"bg-accent/15 text-accent",used:"bg-line text-muted",expired:"bg-amber-500/10 text-amber-600",revoked:"bg-red-500/10 text-red-600"}[e]}">${e}</span>`}renderInvite(e){const t=this.inviteState(e);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${e.label}</span>
            ${this.statePill(t)}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${e.used_count}/${e.max_uses} used
            · created ${this.fmtDate(e.created_at)}
            ${e.expires_at?r` · ${t==="expired"?"expired":"expires"} ${this.fmtDate(e.expires_at)}`:h}
          </p>
        </div>
        ${t==="active"?r`<button type="button"
              class="shrink-0 px-2 py-1 text-[11px] rounded-md border border-line ${this.copiedId===e.id?"text-accent border-accent":"text-muted hover:text-ink hover:bg-hover"}"
              @click=${()=>void this.copyLink(e)}
            >${this.copiedId===e.id?"Copied ✓":"Copy link"}</button>`:h}
        ${t==="active"||t==="expired"?r`<button type="button"
              class="shrink-0 opacity-40 lg:opacity-0 lg:group-hover:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
              title="Revoke invite" aria-label="Revoke invite"
              @click=${()=>void this.revokeInvite(e)}
            >×</button>`:h}
      </li>
    `}renderSession(e){const t=this.invites.find(s=>s.id===e.invite_id);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <span class="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-hover text-[11px] font-semibold text-ink uppercase">${(e.display_name||"?").slice(0,1)}</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${e.display_name}</span>
            ${e.revoked?this.statePill("revoked"):h}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${e.login}${t?r` · via "${t.label}"`:h}
            · joined ${this.fmtDate(e.created_at)} · seen ${this.fmtLastSeen(e.last_seen)}
          </p>
        </div>
        ${e.revoked?h:r`<button type="button"
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
              </section>`:h}
        </div>
      </div>
    `}};We([c()],Le.prototype,"invites",2);We([c()],Le.prototype,"sessions",2);We([c()],Le.prototype,"loading",2);We([c()],Le.prototype,"label",2);We([c()],Le.prototype,"days",2);We([c()],Le.prototype,"uses",2);We([c()],Le.prototype,"creating",2);We([c()],Le.prototype,"copiedId",2);Le=We([k("guests-section")],Le);const Gn=3,rh={mobile:47,desktop:75},ai=600,li=1200,Vn=3e3,Qn=100,Yn=1250;function ah(e,t="mobile"){const s=rh[t],i=e.replace(/\s+$/,"");let n=0;const o=[];for(const a of i.split(`
`)){const l=Math.max(1,Math.ceil(a.length/s));if(n+l>Gn){const d=(Gn-n)*s;return d>0&&o.push(a.slice(0,d).replace(/\s+\S*$/,"")),{shown:o.join(`
`).trimEnd(),cut:!0}}o.push(a),n+=l}return{shown:o.join(`
`),cut:!1}}function Jn(e){if(!e)return null;try{const t=JSON.parse(e);return t&&typeof t.hash=="string"&&Array.isArray(t.unsupported)?t:null}catch{return null}}function mr(e){let t=5381;for(let s=0;s<e.length;s++)t=(t<<5)+t+e.charCodeAt(s)|0;return(t>>>0).toString(36)}const Xn=e=>e.replace(/[.,\s]/g,"");function lh(e,t){const s=t.map(o=>`${o.title} ${o.detail??""} ${o.quote??""}`).join(" "),i=new Set((s.match(/\d[\d.,]*/g)??[]).map(Xn)),n=new Set;for(const o of e.split(`
`)){const a=o.replace(/^\s*\d{1,2}[.)]\s+/,"");for(const l of a.match(/(?<!\p{L})(?:\d[\d.,]*\d|\d)/gu)??[])i.has(Xn(l))||n.add(l)}return[...n]}function Zn(e){return e.match(/\[NEEDS PROOF[^\]]*\]/gi)??[]}const ch=[/\bdelv(e|es|ing)\b/i,/\btapestry\b/i,/\btestament to\b/i,/\b(ever-evolving|fast-paced)\b/i,/\bin today'?s\b/i,/\bgame[- ]?changer\b/i,/\bunlock(s|ing)?\b/i,/\bunleash/i,/\belevate(s|d)?\b/i,/\bseamless(ly)?\b/i,/\brobust\b/i,/\bleverag(e|es|ing)\b/i,/\bharness(es|ing)?\b/i,/\bpivotal\b/i,/\bembark/i,/\brevolutioni[sz]e/i,/\bcutting-edge\b/i,/\bsynerg/i,/\bsupercharge/i,/\bnavigat(e|ing) the\b/i,/\brealm\b/i,/\bhere'?s the thing\b/i,/\blet that sink in\b/i,/\b(it'?s|this is|that'?s) not (just|only|about) [^.\n]{1,50}[,;:]\s*(it'?s|but|this is)\b/i,/\bin der heutigen\b/i,/\bnahtlos/i,/\bbahnbrechend/i,/\brevolutionier/i,/\bgamechanger\b/i];function dh(e){const t=[];for(const s of ch){const i=e.match(s);i&&t.push(i[0])}return t}const eo=/https?:\/\/|\bwww\.[a-z]/i;function gr({body:e,proofs:t,claimCheck:s,firstComment:i,hasImage:n}){const o=[],a=e.trim(),l=a.length,d=a.split(`
`).find(M=>M.trim())??"";o.push(d.length<=Qn?{key:"hook",kind:"reach",level:"pass",label:'Opening line lands before "see more"'}:{key:"hook",kind:"reach",level:"warn",label:`Opening line is ${d.length} characters`,detail:`Under ${Qn} so it lands before "see more" on a phone.`}),l>Vn?o.push({key:"length",level:"fail",label:`${l} characters, over LinkedIn's ${Vn}`}):l<ai?o.push({key:"length",kind:"style",level:"warn",label:`${l} characters, on the short side`,detail:`Posts that do well run ${ai}-${li}.`}):l>li?o.push({key:"length",kind:"style",level:"warn",label:`${l} characters, on the long side`,detail:`Posts that do well run ${ai}-${li}.`}):o.push({key:"length",kind:"style",level:"pass",label:`${l} characters`});const u=Zn(a);u.length&&o.push({key:"placeholders",level:"fail",label:`${u.length===1?"1 gap":`${u.length} gaps`} to fill in`,detail:u.map(M=>M.replace(/^\[NEEDS PROOF:?\s*/i,"").replace(/\]$/,"")).join(`
`)});const p=t.length?lh(a,t):[];if(p.length?o.push({key:"numbers",level:"fail",label:`${p.length===1?"A number isn't":`${p.length} numbers aren't`} in your proof`,detail:p.join(", ")}):t.length&&o.push({key:"numbers",level:"pass",label:"Every number traces to your proof"}),s){const M=s.hash!==mr(a);s.unsupported.length&&s.confirmed&&!M?o.push({key:"claims",level:"pass",label:"You vouched for the claims Mana couldn't back"}):s.unsupported.length?o.push({key:"claims",level:M?"warn":"fail",label:`${s.unsupported.length} claim${s.unsupported.length===1?"":"s"} not backed by proof${M?" (before your edits)":""}`,detail:s.unsupported.map(je=>`"${je.sentence}": ${je.why}`).join(`
`)}):o.push({key:"claims",level:M?"warn":"pass",label:M?"Claims checked before your edits":"Every claim is backed by proof"})}const m=(i??"").trim();eo.test(a)?o.push({key:"link",kind:"reach",level:"warn",label:"Link in the post",detail:"A link in the body costs 11-36% of reach. Move it to the first comment."}):o.push({key:"link",kind:"reach",level:"pass",label:eo.test(m)?"The link goes in the first comment":"No link in the post"}),n!==void 0&&o.push(n?{key:"image",kind:"reach",level:"pass",label:"Has an image"}:{key:"image",kind:"reach",level:"warn",label:"No image",detail:"Posts with an image stop the scroll more often than text alone."}),m.length>Yn&&o.push({key:"comment",level:"fail",label:`First comment is ${m.length} characters, over LinkedIn's ${Yn}`}),Zn(m).length&&o.push({key:"comment-holes",level:"fail",label:"The first comment still has a [NEEDS PROOF]"});const f=a.match(/(^|\s)#[\p{L}\d_]+/gu)??[];f.length>3&&o.push({key:"hashtags",kind:"style",level:"warn",label:`${f.length} hashtags`,detail:"Three at most; LinkedIn treats them as a nice-to-have."});const x=(a.match(/—| – /g)??[]).length;x&&o.push({key:"dashes",kind:"style",level:"warn",label:`${x} em dash${x===1?"":"es"}`,detail:"A strong AI tell. Use a full stop or a comma."});const v=dh(a);return v.length&&o.push({key:"ai",kind:"style",level:"warn",label:"Sounds machine-written in places",detail:v.join(", ")}),o}function hh(e,t,s,i){const n=gr({body:e,proofs:t,claimCheck:s,firstComment:i}).filter(o=>o.level==="fail").map(o=>o.key==="numbers"&&o.detail?`${o.label}: ${o.detail}`:o.label);return t.length&&(s?s.hash!==mr(e.trim())&&n.push("The text changed after the claims check. Run Check claims again."):n.push("Claims haven't been checked yet. Run Check claims.")),n}var uh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Nt=(e,t,s,i)=>{for(var n=i>1?void 0:i?ph(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&uh(t,s,n),n};let to=null;function mh(){return to??=fetch("/api/me").then(e=>e.ok?e.json():null).catch(()=>null),to}let gt=class extends ${constructor(){super(...arguments),this.text="",this.mode="mobile",this.imageUrl=null,this.expanded=!1,this.me=null}connectedCallback(){super.connectedCallback(),mh().then(e=>{this.me=e})}render(){const e=g.getState().settings,t=this.me,s=(t?e[`user:${t.login}:profile_pic_url`]:"")||(t?.role==="owner"?e["cockpit.profile_pic_url"]:"")||t?.profilePic||"",i=t?.displayName||"You",n=ah(this.text,this.mode),o=this.expanded||!n.cut,a=this.mode==="mobile"?360:552;return r`
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
        <div class="px-3 pt-2 pb-2 text-sm whitespace-pre-wrap break-words" style="line-height:20px;">${o?this.text:r`${n.shown}<button type="button" class="hover:underline" style="color:rgba(0,0,0,.6)" @click=${()=>{this.expanded=!0}}>…see more</button>`}${this.expanded&&n.cut?r`<button type="button" class="block mt-1 text-xs hover:underline" style="color:rgba(0,0,0,.6)" @click=${()=>{this.expanded=!1}}>show less</button>`:h}</div>
        ${this.imageUrl?r`<img src=${this.imageUrl} alt="" class="w-full block" />`:h}
        <div class="flex justify-around px-2 py-1.5 border-t border-black/10 text-xs font-semibold" style="color:rgba(0,0,0,.6)">
          <span>Like</span><span>Comment</span><span>Repost</span><span>Send</span>
        </div>
      </div>`}};Nt([b()],gt.prototype,"text",2);Nt([b()],gt.prototype,"mode",2);Nt([b()],gt.prototype,"imageUrl",2);Nt([c()],gt.prototype,"expanded",2);Nt([c()],gt.prototype,"me",2);gt=Nt([k("linkedin-preview")],gt);function j(e,t,s={}){e.dispatchEvent(new CustomEvent("publisher-toast",{detail:{text:t,...s},bubbles:!0,composed:!0}))}function Ye(e,t){return new Promise(s=>{const i={...t,resolve:s};e.dispatchEvent(new CustomEvent("publisher-confirm",{detail:i,bubbles:!0,composed:!0})),i.handled||s(!1)})}const gh=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"});var fh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,P=(e,t,s,i)=>{for(var n=i>1?void 0:i?bh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&fh(t,s,n),n};const so={proof:"Case study",teach:"Teardown",take:"Take",story:"Story"},fs=(e,t)=>{if(!e)return t;try{return JSON.parse(e)}catch{return t}},xh=1500,vh=e=>e.startsWith("Claims haven't")||e.startsWith("The text changed"),ci=(e,t,s,i,n)=>JSON.stringify([e.trim(),t,[...s].sort((o,a)=>o-a),i,n.trim()]),yh={pass:r`<span class="text-accent">✓</span>`,warn:r`<span class="text-amber-500">!</span>`,fail:r`<span class="text-red-600">✕</span>`};let A=class extends ${constructor(){super(...arguments),this.draft=null,this.topics=[],this.defaultTopicId=null,this.linkedinConnected=!1,this.webhookConfigured=!1,this.twoCol=!0,this.defaultScheduleAt=null,this.aiWriting=!1,this.aiError="",this.backLabel="Drafts",this.body="",this.pillar="story",this.pillarPicked=!1,this.aiAngle="",this.commentOpen=!1,this.verticalId=null,this.proofIds=[],this.hooks=[],this.firstComment="",this.claimCheck=null,this.dirty=!1,this.saveState="idle",this.checking=!1,this.posting=!1,this.proofs=[],this.mode="mobile",this.postMenu=!1,this.scheduleAt="",this.leaveBlocked=!1,this.loadedFor=null,this.draftId=null,this.editSeq=0,this.inflight=null,this.autosaveTimer=null,this.synced="",this.superseded=new Set,this.onVisibility=()=>{document.visibilityState==="hidden"&&this.dirty&&this.flush()},this.menuHost=null,this.menuAnchor=null,this.closeMenu=()=>{this.postMenu=!1},this.onMenuPress=e=>{const t=e.target;t&&(this.menuHost?.contains(t)||this.menuAnchor?.contains(t))||(this.postMenu=!1)},this.onMenuKey=e=>{e.key==="Escape"&&(e.stopPropagation(),this.postMenu=!1,this.menuAnchor?.focus())},this.onMenuScroll=e=>{const t=e.target;t instanceof Node&&this.menuHost?.contains(t)||this.menuHost?.contains(document.activeElement)||(this.postMenu=!1)}}connectedCallback(){super.connectedCallback(),this.loadProofs(),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),this.removeMenu(),document.removeEventListener("visibilitychange",this.onVisibility),this.dirty&&this.flush()}willUpdate(e){if(!e.has("draft"))return;const t=this.draft,s=t?.id??this.draftId??"new";if(s!==this.loadedFor){this.loadedFor=s,this.draftId=t?.id??null,this.body=t?.body??"",this.pillar=t?.pillar??"story",this.pillarPicked=!1,this.aiAngle="",this.commentOpen=!1,this.verticalId=t?.vertical_id??this.defaultTopicId??this.topics[0]?.id??null,this.proofIds=fs(t?.proof_ids??null,[]),this.hooks=fs(t?.hooks??null,[]),this.firstComment=t?.first_comment??"",this.claimCheck=Jn(t?.claim_check),this.dirty=!1,this.saveState="idle",this.leaveBlocked=!1,this.superseded.clear(),this.synced=t?ci(t.body,t.pillar,this.proofIds,this.hooks,this.firstComment):"";return}if(!t)return;const i=Jn(t.claim_check);i&&(!this.claimCheck||i.at>this.claimCheck.at)&&(this.claimCheck=i);const n=fs(t.proof_ids,[]),o=fs(t.hooks,[]),a=ci(t.body,t.pillar,n,o,t.first_comment??"");a===this.synced||this.superseded.has(a)||this.dirty||this.inflight||(this.body=t.body,this.pillar=t.pillar,this.proofIds=n,this.hooks=o,this.firstComment=t.first_comment??"",this.synced=a)}async loadProofs(){try{const e=await fetch("/api/publisher/proofs");e.ok&&(this.proofs=(await e.json()).proofs.filter(t=>t.status==="active"))}catch{}}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get linkedProofs(){return this.proofs.filter(e=>this.proofIds.includes(e.id))}get checks(){return gr({body:this.body,proofs:this.linkedProofs,claimCheck:this.claimCheck,firstComment:this.firstComment,hasImage:this.draftId!=null?!!this.draft?.image_url:void 0})}touched(){this.editSeq++,this.dirty=!0,this.leaveBlocked=!1,this.autosaveTimer&&clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.autosaveTimer=null,this.autosave()},xh)}async autosave(){const e=this.draftId!=null&&this.dirty;await this.flush()&&e&&!this.dirty&&j(this,"Saved")}edit(e){this.body=e,this.touched()}swapHook(e){const t=this.body.split(`
`),s=t.findIndex(o=>o.trim()),i=s>=0?t[s]:"";s>=0?t[s]=e:t.unshift(e),this.body=t.join(`
`);const n=this.hooks.filter(o=>o!==e);this.hooks=i.trim()?[i,...n].slice(0,3):n,this.touched()}async flush(){for(this.autosaveTimer&&(clearTimeout(this.autosaveTimer),this.autosaveTimer=null);this.inflight;)await this.inflight;if(!this.dirty)return!0;this.inflight=this.saveOnce();try{return await this.inflight}finally{this.inflight=null}}async saveOnce(){const e=this.editSeq,t=this.body.trim();if(!t||this.verticalId==null)return!0;const s=ci(t,this.pillar,this.proofIds,this.hooks,this.firstComment),i={body:t,pillar:this.pillar,proof_ids:this.proofIds,hooks:this.hooks,first_comment:this.firstComment.trim()};this.saveState="saving";try{const n=this.draftId==null,o=n?await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify({verticalId:this.verticalId,...i})}):await fetch(`/api/publisher/drafts/${this.draftId}`,{method:"PATCH",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify(i)});if(!o.ok)throw new Error(String(o.status));if(n){const{id:a}=await o.json();this.draftId=a,this.loadedFor=a}return this.synced&&this.synced!==s&&this.superseded.add(this.synced),this.synced=s,this.editSeq===e&&(this.dirty=!1),this.saveState="idle",n&&(this.emit("opened",{id:this.draftId}),this.emit("changed")),!0}catch{return this.saveState="error",!1}}async beforeClose(){return await this.flush()||this.leaveBlocked?!0:(this.leaveBlocked=!0,!1)}get blockers(){return hh(this.body,this.linkedProofs,this.claimCheck,this.firstComment)}patch(e,t){return fetch(`/api/publisher/drafts/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async act(e,t){if(this.postMenu=!1,(e==="publish"||e==="schedule")&&!await this.clearClaims())return;const s=this.blockers;if(e==="publish"){if(s.length){await Ye(this,{title:"This post can't go out yet",body:"Fix these first:",items:s});return}if(!await Ye(this,{title:this.linkedinConnected?"Post to LinkedIn now?":"Post through n8n now?",body:this.linkedinConnected?"It goes out as soon as you confirm, with its image and first comment.":"The n8n webhook posts the text only, without the image.",confirm:"Post now",tone:"primary"}))return}if(e==="schedule"&&s.length&&!await Ye(this,{title:"Some checks still fail",body:"It's scheduled, but it won't post until these are fixed:",items:s,confirm:"Schedule anyway",tone:"warning"}))return;if(!await this.flush()||this.draftId==null){j(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const i=this.draftId,n={status:this.draft?.status??"draft",scheduledAt:this.draft?.scheduled_at??null};this.postMenu=!1,e==="publish"&&(this.posting=!0);let o;try{o=await this.patch(i,{action:e,...t?{at:t}:{}})}catch{this.posting=!1,j(this,"No answer from the cockpit. Check Published before trying again.",{tone:"error"}),this.emit("changed");return}this.posting=!1;const a=await o.json().catch(()=>({}));if(!o.ok){a.reasons?.length?await Ye(this,{title:a.error??"Not posted",items:a.reasons}):j(this,a.error||"That didn't work. Try again.",{tone:"error"}),this.emit("changed");return}const l=this.closest("publisher-section"),d={label:"Undo",run:()=>void this.restore(l,i,n)};e==="schedule"&&t?(j(this,`Scheduled for ${gh(t)}`,{action:d}),this.emit("moved",{stage:"scheduled"})):e==="publish"?a.status==="posted"?(j(this,a.commentError?"Posted. The first comment didn't go up; the notification has it.":"Posted to LinkedIn"),this.emit("moved",{stage:"posted"})):(j(this,"Mana can't post it. Copy it to LinkedIn by hand, then tap I posted it."),this.emit("changed")):e==="discard"?(j(this,"Discarded",{action:d}),this.emit("moved",{stage:"draft"})):e==="mark-posted"?(j(this,"Marked as posted"),this.emit("moved",{stage:"posted"})):this.emit("changed")}async restore(e,t,s){const i=s.scheduledAt?{action:"schedule",at:s.scheduledAt}:{action:"reopen"},n=await this.patch(t,i),o=s.scheduledAt?"scheduled":"draft",a=e??this;n.ok||j(a,(await n.json().catch(()=>({}))).error||"Couldn't undo that.",{tone:"error"}),a.dispatchEvent(new CustomEvent("publisher-refresh",{detail:{stage:n.ok?o:void 0},bubbles:!0,composed:!0}))}openPostMenu(e){if(this.menuAnchor=e.currentTarget,!this.scheduleAt){const t=this.defaultScheduleAt&&this.defaultScheduleAt*1e3>Date.now()+6e4?new Date(this.defaultScheduleAt*1e3):null,s=t??new Date(Date.now()+864e5);t||s.setHours(9,0,0,0);const i=n=>String(n).padStart(2,"0");this.scheduleAt=`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())}T${i(s.getHours())}:${i(s.getMinutes())}`}this.postMenu=!this.postMenu}updated(){this.postMenu?(this.menuHost||(this.menuHost=document.createElement("div"),document.body.appendChild(this.menuHost),document.addEventListener("pointerdown",this.onMenuPress,!0),document.addEventListener("keydown",this.onMenuKey,!0),window.addEventListener("scroll",this.onMenuScroll,!0),window.addEventListener("resize",this.closeMenu)),Dt(this.renderPostMenu(),this.menuHost,{host:this}),this.placeMenu()):this.menuHost&&this.removeMenu()}removeMenu(){document.removeEventListener("pointerdown",this.onMenuPress,!0),document.removeEventListener("keydown",this.onMenuKey,!0),window.removeEventListener("scroll",this.onMenuScroll,!0),window.removeEventListener("resize",this.closeMenu),this.menuHost&&(Dt(h,this.menuHost),this.menuHost.remove()),this.menuHost=null}placeMenu(){const e=this.menuHost?.firstElementChild;if(!e||!this.menuAnchor)return;const t=this.menuAnchor.getBoundingClientRect(),s=this.getBoundingClientRect(),i=8,n=Math.max(s.left,0)+i,o=Math.min(s.right,window.innerWidth)-i,a=Math.max(220,Math.min(320,o-n));e.style.width=`${a}px`,e.style.left=`${Math.max(n,Math.min(t.right-a,o-a))}px`;const l=e.offsetHeight,d=window.innerHeight-t.bottom-i,u=l<=d||d>=t.top-i,p=u?t.bottom+4:Math.max(i,t.top-4-l);e.style.top=`${p}px`,e.style.maxHeight=`${Math.max(160,u?d:t.top-i-4)}px`}renderPostMenu(){const e=this.linkedinConnected||this.webhookConfigured,t=this.scheduleAt?Math.floor(new Date(this.scheduleAt).getTime()/1e3):0,s="w-full text-left px-3 py-2 rounded-lg hover:bg-hover";return r`
      <div class="fixed z-[1000] p-1.5 rounded-xl border border-line bg-surface shadow-lg space-y-1 overflow-y-auto" role="dialog" aria-label="Post options">
        ${e?r`<button type="button" class=${s} @click=${()=>void this.act("publish")}>
              <span class="block text-sm text-ink font-medium">Post now</span>
              <span class="block text-[11px] text-muted">${this.linkedinConnected?"Straight to LinkedIn, with the image.":"Through the n8n webhook, text only."}</span></button>`:r`
            <button type="button" class=${s} @click=${()=>{this.postMenu=!1,this.copy()}}>
              <span class="block text-sm text-ink font-medium">Copy text</span>
              <span class="block text-[11px] text-muted">Post it on LinkedIn yourself.</span></button>
            <button type="button" class=${s} @click=${()=>void this.act("mark-posted")}>
              <span class="block text-sm text-ink">I posted it</span>
              <span class="block text-[11px] text-muted">Moves it to Published.</span></button>
            <p class="px-3 pb-1 text-[11px] text-muted">Connect LinkedIn (sidebar, bottom) and Mana posts for you.</p>`}
        <div class="px-3 py-2 space-y-1.5">
          <span class="block text-sm text-ink font-medium">Schedule</span>
          <div class="flex items-center gap-2">
            <input type="datetime-local" aria-label="Post at" class="flex-1 min-w-0 px-2 py-1 text-[12px] bg-bg border border-line rounded-md text-ink"
              .value=${this.scheduleAt} @input=${i=>{this.scheduleAt=i.target.value}} />
            <button type="button" class="px-2.5 py-1 text-[12px] rounded-md border border-accent text-accent hover:bg-accent/10 ${t>Date.now()/1e3?"":"opacity-40 pointer-events-none"}"
              @click=${()=>void this.act("schedule",t)}>Schedule</button>
          </div>
          ${this.linkedinConnected?h:this.webhookConfigured?r`<span class="block text-[11px] text-amber-600">LinkedIn isn't connected, so it goes out through n8n, text only.</span>`:r`<span class="block text-[11px] text-amber-600">Without a LinkedIn connection a scheduled post can't go out on its own.</span>`}
        </div>
      </div>`}async clearClaims(){this.blockers.some(vh)&&await this.checkClaims();const e=this.claimCheck;if(!e||e.confirmed||!e.unsupported.length||!this.linkedProofs.length)return!0;if(!await Ye(this,{title:"Mana's facts don't back these",body:"Post them only if they're true.",items:e.unsupported.map(i=>`"${i.sentence}"`),confirm:"They're true",tone:"warning"})||this.draftId==null)return!1;const s=await this.patch(this.draftId,{action:"confirm-claims"}).catch(()=>null);return s?.ok?(this.claimCheck=(await s.json()).claim_check,!0):(j(this,(await s?.json().catch(()=>({})))?.error||"Couldn't save that. Try again.",{tone:"error"}),!1)}async checkClaims(){if(!await this.flush()||this.draftId==null)return;const e=this.draftId;this.checking=!0;try{const t=await this.patch(e,{action:"check-claims"});t.ok?this.claimCheck=(await t.json()).claim_check:j(this,(await t.json().catch(()=>({}))).error||"The claims check didn't come back. Try again.",{tone:"error"})}catch{j(this,"The claims check didn't come back. Try again.",{tone:"error"})}finally{this.checking=!1}}async copy(){try{await navigator.clipboard.writeText(this.body),j(this,this.firstComment.trim()?"Copied. The first comment is below the text.":"Copied")}catch{j(this,"Couldn't copy. Select the text and copy it by hand.",{tone:"error"})}}renderSaveState(){return this.saveState==="error"?r`<span class="inline-flex items-center gap-2 text-[11px] text-red-600">Couldn't save
        <button type="button" class="font-medium text-ink hover:underline" @click=${()=>void this.flush()}>Retry</button>
        ${this.leaveBlocked?r`<button type="button" class="text-muted hover:text-ink hover:underline" @click=${()=>this.emit("force-close")}>Leave without saving</button>`:h}</span>`:h}renderHeader(){const e=this.draft,t=e?.status==="approved"&&e.scheduled_at?e.scheduled_at:null,s=e?.status==="approved"&&!t?"draft":e?.status??"draft";return r`
      <div class="relative flex flex-wrap items-center gap-2 px-3 pt-3 pb-2 shrink-0 border-b border-line/60">
        <button type="button" class="flex items-center h-7 pl-0.5 pr-1.5 -ml-1 rounded-lg text-sm text-accent hover:bg-hover"
          @click=${()=>this.emit("close")}><sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>${this.backLabel}</button>
        <select class="px-2 py-1 text-[12px] bg-bg border border-line rounded-md" aria-label="Format"
          @change=${i=>{const n=i.target.value;if(!n){this.pillarPicked=!1;return}this.pillar=n,this.pillarPicked=!0,this.touched()}}>
          ${this.draftId==null?r`<option value="" ?selected=${!this.pillarPicked}>Any format</option>`:h}
          ${Object.keys(so).map(i=>r`<option value=${i} ?selected=${i===this.pillar&&(this.draftId!=null||this.pillarPicked)}>${so[i]}</option>`)}
        </select>
        ${this.draftId==null?r`<select class="px-2 py-1 text-[12px] bg-bg border border-line rounded-md" aria-label="Topic"
              @change=${i=>{this.verticalId=Number(i.target.value)||null}}>
              ${this.topics.map(i=>r`<option value=${i.id} ?selected=${i.id===this.verticalId}>${i.name}</option>`)}
            </select>`:r`<span class="text-[12px] text-muted">${this.topics.find(i=>i.id===(e?.vertical_id??this.verticalId))?.name??""}</span>`}
        ${s!=="draft"?r`<span class="text-[11px] px-1.5 py-0.5 rounded-full font-medium ${t||s==="posting"?"bg-accent-soft text-accent":"bg-line text-muted"}">${t?`Scheduled ${new Date(t*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"})}`:s==="posting"?"Posting…":s==="posted"?"Published":"Discarded"}</span>`:h}
        <span class="flex-1"></span>
        ${this.renderSaveState()}
        ${this.posting||this.checking?r`<span class="inline-flex items-center gap-1.5 text-[12px] text-ink">
              <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>${this.posting?"Posting…":"Checking claims…"}</span>`:s==="draft"?r`
            ${this.draftId!=null?r`<button type="button" class="text-[12px] text-muted hover:text-red-600 px-1" @click=${()=>void this.act("discard")}>Discard</button>`:h}
            ${this.draftId!=null?r`<button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 text-[13px] rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium" aria-haspopup="dialog" aria-expanded=${this.postMenu}
              @click=${i=>this.openPostMenu(i)}>Post <sc-icon name="lucide-chevron-down" class="w-3 h-3"></sc-icon></button>`:h}`:t?r`
              <button type="button" class="text-[12px] text-muted hover:text-ink px-1" @click=${()=>void this.act("unschedule")}>Unschedule</button>
              <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 text-[13px] rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium" aria-haspopup="dialog" aria-expanded=${this.postMenu}
                @click=${i=>this.openPostMenu(i)}>Post <sc-icon name="lucide-chevron-down" class="w-3 h-3"></sc-icon></button>`:h}
      </div>`}renderChecks(){const e=this.checks,t=e.filter(n=>n.level==="fail"),s=e.filter(n=>n.kind==="reach"),i=s.filter(n=>n.level==="pass").length;return r`
      ${t.length?r`
        <section class="rounded-xl border border-red-500/40 bg-surface px-3 py-2.5 space-y-1.5">
          <h4 class="text-[12px] font-semibold text-red-600">Before it can go out</h4>
          ${t.map(n=>r`<div class="text-[12px] leading-snug">
            <p class="text-ink">${n.label}</p>
            ${n.detail?r`<p class="text-[11px] text-muted whitespace-pre-wrap">${n.detail}</p>`:h}
          </div>`)}
        </section>`:h}
      <details class="group rounded-xl border border-line bg-surface px-3 py-2">
        <summary class="flex items-center gap-1.5 cursor-pointer list-none text-[12px] text-muted select-none">
          <sc-icon name="lucide-chevron-right" class="w-3 h-3 transition-transform group-open:rotate-90"></sc-icon>
          <span class="font-semibold">Reach</span>
          <span class="tabular-nums ${i===s.length?"text-accent":"text-ink"}">${i} of ${s.length}</span>
        </summary>
        <div class="mt-1.5 space-y-1">
          ${s.map(n=>r`<div class="text-[12px] leading-snug">
            <div class="flex gap-2"><span class="w-3 shrink-0 text-center font-bold">${yh[n.level]}</span><span class="${n.level==="pass"?"text-muted":"text-ink"}">${n.label}</span></div>
            ${n.detail&&n.level!=="pass"?r`<p class="pl-5 text-[11px] text-muted">${n.detail}</p>`:h}
          </div>`)}
        </div>
      </details>`}renderAiStart(){if(this.draftId!=null||this.body.trim())return h;const e=this.aiWriting,t=()=>{e||this.verticalId==null||this.emit("ai-draft",{topicId:this.verticalId,pillar:this.pillarPicked?this.pillar:void 0,angle:this.aiAngle})};return r`
      <section class="rounded-xl border border-line bg-surface p-3 space-y-2">
        <label class="block text-xs text-muted">What's it about? <span class="text-muted/70">(optional)</span>
          <input type="text" class="mt-1 w-full px-3 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
            placeholder="e.g. why latency matters more than the voice" ?disabled=${e}
            .value=${this.aiAngle} @input=${s=>{this.aiAngle=s.target.value}}
            @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),t())}} /></label>
        ${e?r`<p class="flex items-center gap-2 text-xs text-ink">
              <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
              Writing from your proof, then checking every claim. It opens here in about a minute; the image follows.</p>`:r`<div class="flex items-center gap-2">
              <p class="flex-1 min-w-0 text-[11px] text-muted leading-snug">${this.aiError?r`<span class="text-red-600">The draft didn't come back: ${this.aiError}</span>`:"Mana writes it from your proof, checks every claim and makes the image. Or type it yourself below."}</p>
              <button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium ${this.verticalId==null?"opacity-40 pointer-events-none":""}"
                @click=${t}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Write it for me</button>
            </div>`}
      </section>`}render(){const e=this.draft,t=!e||e.status==="draft"?this.hooks:[],s=!e||e.status==="draft"||e.status==="approved",i=r`
      <div class="space-y-3 min-w-0">
        ${this.renderAiStart()}
        <textarea class="w-full min-h-[22rem] px-3 py-2.5 text-sm bg-surface border border-line rounded-xl resize-y focus:outline-none focus:border-ink leading-relaxed text-ink"
          placeholder="Hook first. One line that makes them need the second."
          ?readonly=${!s||this.aiWriting}
          .value=${this.body}
          @input=${o=>this.edit(o.target.value)}
          @keydown=${o=>{(o.metaKey||o.ctrlKey)&&o.key==="s"&&(o.preventDefault(),this.flush())}}></textarea>
        ${this.commentOpen||this.firstComment.trim()?r`<label class="block text-[12px] text-muted">First comment (links go here)
          <textarea class="mt-1 w-full min-h-[3.25rem] px-3 py-2 text-sm bg-surface border border-line rounded-xl resize-y focus:outline-none focus:border-ink leading-relaxed text-ink"
            placeholder=${this.linkedinConnected?"Mana posts it as a comment right after the post":"Shown with the post, to add as the first comment"}
            ?readonly=${!s}
            .value=${this.firstComment}
            @input=${o=>{this.firstComment=o.target.value,this.touched()}}></textarea></label>`:s?r`<button type="button" class="text-[12px] text-muted hover:text-ink"
              @click=${()=>{this.commentOpen=!0,this.updateComplete.then(()=>this.querySelector("label textarea")?.focus())}}>+ First comment</button>`:h}
        ${t.length?r`<div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] text-muted/70 font-semibold">Other hooks</span>
              ${t.map(o=>r`<button type="button" title=${o}
                class="max-w-full truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
                @click=${()=>this.swapHook(o)}>${o}</button>`)}
            </div>`:h}
        ${this.renderChecks()}
        ${e&&this.renderImage?this.renderImage(e):h}
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
      </div>`}};P([b({attribute:!1})],A.prototype,"draft",2);P([b({attribute:!1})],A.prototype,"topics",2);P([b({attribute:!1})],A.prototype,"defaultTopicId",2);P([b({type:Boolean})],A.prototype,"linkedinConnected",2);P([b({type:Boolean})],A.prototype,"webhookConfigured",2);P([b({type:Boolean})],A.prototype,"twoCol",2);P([b({attribute:!1})],A.prototype,"defaultScheduleAt",2);P([b({attribute:!1})],A.prototype,"renderImage",2);P([b({type:Boolean})],A.prototype,"aiWriting",2);P([b()],A.prototype,"aiError",2);P([b()],A.prototype,"backLabel",2);P([c()],A.prototype,"body",2);P([c()],A.prototype,"pillar",2);P([c()],A.prototype,"pillarPicked",2);P([c()],A.prototype,"aiAngle",2);P([c()],A.prototype,"commentOpen",2);P([c()],A.prototype,"verticalId",2);P([c()],A.prototype,"proofIds",2);P([c()],A.prototype,"hooks",2);P([c()],A.prototype,"firstComment",2);P([c()],A.prototype,"claimCheck",2);P([c()],A.prototype,"dirty",2);P([c()],A.prototype,"saveState",2);P([c()],A.prototype,"checking",2);P([c()],A.prototype,"posting",2);P([c()],A.prototype,"proofs",2);P([c()],A.prototype,"mode",2);P([c()],A.prototype,"postMenu",2);P([c()],A.prototype,"scheduleAt",2);P([c()],A.prototype,"leaveBlocked",2);A=P([k("publisher-editor")],A);var wh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,w=(e,t,s,i)=>{for(var n=i>1?void 0:i?kh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&wh(t,s,n),n};const $h=640,io=176,no=400,bs=224,Ve=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,di=[{key:"draft",label:"Drafts",icon:"file-text"},{key:"scheduled",label:"Scheduled",icon:"clock"},{key:"posted",label:"Published",icon:"send"}];function oo(e){return e.status==="posting"?"scheduled":e.status==="approved"?e.scheduled_at?"scheduled":"draft":e.status==="draft"||e.status==="posted"?e.status:null}const hi=()=>Math.floor(Date.now()/1e3),Sh=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),ui=["impressions","reactions","comments","leads"],xs={proof:"Case study",teach:"Teardown",take:"Take",story:"Story"},ro={proof:"bg-emerald-500/10 text-emerald-600",teach:"bg-sky-500/10 text-sky-600",take:"bg-amber-500/10 text-amber-600",story:"bg-pink-500/10 text-pink-600"},ye=e=>e.format==="yt_script",ao="bg-violet-500/10 text-violet-600",Kt=[{key:"name",q:"Name this topic.",hint:'Shows in the sidebar, e.g. "Voice agents" or "EDU APAC"',required:!0},{key:"goal",q:"What should posting about this get you?",hint:'One concrete outcome, e.g. "2 demo calls a month from clinic owners in DACH"',required:!1},{key:"audience",q:"Who exactly is the buyer?",hint:'Industry, role, size, region — e.g. "Praxisinhaber & Handwerksbetriebe 5-50 MA, DACH"',required:!0},{key:"offer",q:"What's the offer — and its #1 measurable outcome?",hint:'e.g. "KI-Telefonagent: kein verpasster Anruf mehr, +X Termine/Monat"',required:!0},{key:"opinions",q:"Your 2-3 strongest industry opinions?",hint:"Fuel for the trend-take posts. What do you believe that most disagree with?",required:!1},{key:"cta",q:"Where should interested people land?",hint:'Booking link, lead magnet, or just "DM me"',required:!1},{key:"extra",q:"Anything else the ghostwriter should know?",hint:"Free-form — topics to avoid, phrases you hate, running jokes, current campaigns… goes to the writer verbatim.",required:!1}],lo={name:"",goal:"",audience:"",offer:"",opinions:"",cta:"",extra:""},pi=[{key:"auto",label:"Mana picks per post",dna:""},{key:"flat-illustration",label:"Flat illustration",dna:"Flat editorial vector illustration. Muted palette of two brand colors + one accent, soft paper-grain texture, rounded organic shapes, generous negative space. One recurring motif across posts. No photorealism, no gradients-heavy 3D, no stock-photo look."},{key:"pixel-art",label:"Pixel art",dna:"16-bit pixel art, crisp hard pixels, a fixed limited palette (8-12 colors), subtle dithering. Same palette and character proportions every post. No anti-aliasing, no smooth gradients."},{key:"cartoon",label:"Cartoon",dna:"Bold flat cartoon with thick uniform outlines, cheerful limited palette, simple expressive shapes. Same outline weight and palette across posts. No realism, no fine detail."},{key:"isometric",label:"Isometric",dna:"Clean isometric illustration, consistent 2:1 iso angle, soft flat shading, one cohesive palette, small tasteful details. Same angle and palette every time. No perspective drift, no photoreal textures."},{key:"3d-clay",label:"3D / clay",dna:"Soft 3D clay-render look, rounded matte forms, gentle studio lighting, one cohesive pastel-leaning palette, shallow depth of field. Same lighting and palette across posts. No hard photorealism."},{key:"realistic",label:"Realistic photo",dna:"Photorealistic, natural directional light, shallow depth of field, consistent warm color grade and mood across posts. Editorial not stock. Same grade and lighting direction every time. No text overlays."},{key:"infographic",label:"Infographic / data",dna:"Clean minimal infographic / data-viz. Fixed type hierarchy, a two-color brand palette + one accent, generous margins, clear labels, one idea per graphic. Same grid, palette, and type treatment every post. Legible at mobile size."}];let y=class extends ${constructor(){super(...arguments),this.verticals=[],this.drafts=[],this.webhookConfigured=!1,this.linkedinConfigured=!1,this.loading=!0,this.activeVerticalId=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_vertical"));return Number.isFinite(e)&&e>0?e:null}catch{return null}})(),this.stage="draft",this.view="queue",this.wide=!0,this.navOpen=!1,this.menuForId=null,this.navWidth=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_nav_width"));return e>=io&&e<=no?e:bs}catch{return bs}})(),this.navHidden=(()=>{try{return localStorage.getItem("cockpit.publisher_nav_hidden")==="1"}catch{return!1}})(),this.collapsedGroups=(()=>{try{return new Set(JSON.parse(localStorage.getItem("cockpit.publisher_nav_collapsed")||"[]"))}catch{return new Set}})(),this.wizardEditId=null,this.wizardStep=0,this.wizard={...lo},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=4,this.editImageStyle="auto",this.editImageDna="",this.editImageRef=null,this.imaging=[],this.imageErrors={},this.imageDirection={},this.libraryFor=null,this.saving=!1,this.editingId=null,this.editBody="",this.composing=!1,this.editorId=null,this.createdId=null,this.twoCol=!0,this.aiTopicId=null,this.aiStartedAt=null,this.aiError="",this.generating=!1,this.genStartedAt=null,this.genTicker=null,this.webhookUrl="",this.webhookSecret="",this.linkedinToken="",this.linkedin=null,this.liClientId="",this.liClientSecret="",this.liSaving=!1,this.showLegacy=!1,this.postUrlForId=null,this.postUrlDraft="",this.syncingId=null,this.copiedId=null,this.researchOpenId=null,this.expandedId=null,this.renamingVerticalId=null,this.renameValue="",this.toastMsg=null,this.toastTimer=null,this.ask=null,this.insights=null,this.metricsForId=null,this.metricsDraft={impressions:"",reactions:"",comments:"",leads:""},this.poll=null,this.topicDrag=new ar(this,{type:"text/x-publisher-topic",onReorder:(e,t)=>this.reorderTopic(e,t)}),this.dirtyFields=new Set,this.onToast=e=>{e.stopPropagation(),this.toastMsg=e.detail,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMsg=null},this.toastMsg.action?8e3:5e3)},this.onConfirm=e=>{e.stopPropagation();const t=e.detail;t.handled=!0,this.ask?.resolve(!1),this.ask=t,this.updateComplete.then(()=>requestAnimationFrame(()=>this.querySelector("[data-dialog-default]")?.focus()))},this.onNotifNavigate=e=>{e.detail?.mode==="publisher"&&(this.view==="editor"||this.view==="wizard"||this.setStage("posted"))},this.onRefreshRequest=e=>{const t=e.detail?.stage;t&&this.view==="queue"&&this.setStage(t),this.refresh()},this.onDocDown=e=>{this.menuForId!==null&&(e.target?.closest?.("[data-topic-menu]")||(this.menuForId=null))},this.insightsFor=""}connectedCallback(){super.connectedCallback(),this.refresh(),this.resizeObs=new ResizeObserver(()=>{const e=this.clientWidth>=$h;e!==this.wide&&(this.wide=e);const t=this.clientWidth>=1100;t!==this.twoCol&&(this.twoCol=t)}),this.resizeObs.observe(this),window.addEventListener("pointerdown",this.onDocDown,!0),this.addEventListener("publisher-toast",this.onToast),this.addEventListener("publisher-confirm",this.onConfirm),this.addEventListener("publisher-refresh",this.onRefreshRequest),document.addEventListener("notif-navigate",this.onNotifNavigate),this.poll=setInterval(()=>{const e=this.view==="queue"&&this.editingId===null&&this.metricsForId===null&&this.postUrlForId===null&&this.renamingVerticalId===null&&this.menuForId===null&&!this.composing&&!this.topicDrag.active,t=this.view==="wizard"&&this.wizardEditId!=null,s=this.aiStartedAt!==null,i=this.imaging.length>0;(e||t||s||i)&&this.refresh()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll),this.genTicker&&clearInterval(this.genTicker),this.resizeObs?.disconnect(),window.removeEventListener("pointerdown",this.onDocDown,!0),this.removeEventListener("publisher-toast",this.onToast),this.removeEventListener("publisher-confirm",this.onConfirm),this.removeEventListener("publisher-refresh",this.onRefreshRequest),document.removeEventListener("notif-navigate",this.onNotifNavigate),this.toastTimer&&clearTimeout(this.toastTimer),this.ask?.resolve(!1)}answer(e){const t=this.ask;this.ask=null,t?.resolve(e)}renderToast(){const e=this.toastMsg;return e?r`
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 px-4 py-2 rounded-xl ${e.tone==="error"?"bg-red-600":"bg-ink"} text-surface text-sm shadow-lg" role="status">
        <span class="min-w-0">${e.text}</span>
        ${e.action?r`<button type="button" class="shrink-0 font-semibold hover:underline"
          @click=${()=>{const t=e.action.run;this.toastMsg=null,t()}}>${e.action.label}</button>`:h}
      </div>`:h}renderDialog(){const e=this.ask;if(!e)return h;const t=e.tone==="danger"?"bg-red-600":e.tone==="warning"?"bg-amber-500":"bg-accent";return r`
      <sc-dialog open label=${e.title}
        @sc-hide=${()=>this.answer(!1)}
        @keydown=${s=>{s.key==="Escape"?(s.preventDefault(),this.answer(!1)):s.key==="Enter"&&e.confirm&&!(s.target instanceof HTMLTextAreaElement)&&(s.preventDefault(),this.answer(!0))}}>
        ${e.body?r`<p class="text-sm text-muted leading-snug">${e.body}</p>`:h}
        ${e.items?.length?r`<ul class="mt-2 space-y-1 text-sm text-ink list-disc pl-5">${e.items.map(s=>r`<li>${s}</li>`)}</ul>`:h}
        <div slot="footer" class="flex items-center justify-end gap-2">
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg text-muted hover:text-ink hover:bg-hover" ?data-dialog-default=${!e.confirm}
            @click=${()=>this.answer(!1)}>${e.cancel??(e.confirm?"Cancel":"Close")}</button>
          ${e.confirm?r`<button type="button" data-dialog-default class="px-3 py-1.5 text-sm rounded-lg font-semibold text-white hover:opacity-90 ${t}"
            @click=${()=>this.answer(!0)}>${e.confirm}</button>`:h}
        </div>
      </sc-dialog>`}get activeVertical(){return this.verticals.find(e=>e.id===this.activeVerticalId)??null}setVertical(e){this.activeVerticalId=e,this.composing=!1,this.editingId=null,this.expandedId=null,this.view="queue",this.navOpen=!1;try{localStorage.setItem("cockpit.publisher_vertical",String(e??0))}catch{}}setStage(e){this.stage=e,this.expandedId=null,this.view="queue",this.navOpen=!1}inTopic(e){return this.activeVerticalId===null||e.vertical_id===this.activeVerticalId}stageCount(e){return this.drafts.filter(t=>oo(t)===e&&this.inTopic(t)).length}takenTimes(e){return this.drafts.filter(t=>(t.status==="approved"||t.status==="posting")&&t.scheduled_at&&t.id!==e).map(t=>t.scheduled_at)}postedThisWeek(e){const t=Cr(hi());return this.drafts.filter(s=>s.vertical_id===e.id&&s.status==="posted"&&(s.posted_at??0)>=t).length}async reorderTopic(e,t){const s=this.verticals.findIndex(o=>o.id===e);if(s<0)return;const i=[...this.verticals],[n]=i.splice(s,1);i.splice(s<t?t-1:t,0,n),!i.every((o,a)=>o.id===this.verticals[a]?.id)&&(this.verticals=i,await fetch("/api/publisher/verticals/order",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({ids:i.map(o=>o.id)})}))}async togglePause(e){this.menuForId=null,await fetch(`/api/publisher/verticals/${e.id}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:!e.enabled})}),await this.refresh()}async deleteTopic(e){this.menuForId=null;const t=this.drafts.filter(n=>n.vertical_id===e.id).length;if(!await Ye(this,{title:`Delete ${e.name}?`,body:`${t?`Its ${t} post${t===1?"":"s"} go with it. `:""}This can't be undone. Anything already on LinkedIn stays there, and its proof and voice samples stay as general items.`,confirm:"Delete topic",tone:"danger"}))return;if(!(await fetch(`/api/publisher/verticals/${e.id}?drafts=delete`,{method:"DELETE"})).ok){j(this,"Couldn't delete the topic. Try again.",{tone:"error"});return}this.activeVerticalId===e.id&&this.setVertical(null),await this.refresh(),j(this,`Deleted ${e.name}`)}openCompose(){this.navOpen=!1,this.menuForId=null,this.editorId=null,this.composing=!0,this.aiStartedAt===null&&(this.aiError=""),this.view="editor"}openEditor(e){this.navOpen=!1,this.composing=!1,this.editorId=e,this.view="editor"}async closeEditor(){const e=this.querySelector("publisher-editor");if(e&&!await e.beforeClose()){j(this,"Couldn't save your last edit.",{tone:"error",action:{label:"Leave anyway",run:()=>this.leaveEditor()}});return}this.leaveEditor()}follow(e){this.leaveEditor(),this.setStage(e)}leaveEditor(){this.composing=!1,this.editorId=null,this.createdId=null,this.view="queue",this.refresh()}pickUpAiDraft(){if(this.aiStartedAt===null||this.generating)return;const e=Math.floor(this.aiStartedAt/1e3)-5,t=this.drafts.filter(s=>s.created_at>=e&&s.vertical_id===this.aiTopicId).sort((s,i)=>i.created_at-s.created_at)[0];t?(this.aiStartedAt=null,(this.view==="editor"&&this.composing||this.view==="queue")&&this.openEditor(t.id)):Date.now()-this.aiStartedAt>480*1e3&&(this.aiStartedAt=null)}async refresh(){try{const e=await fetch("/api/publisher");if(e.ok){const t=await e.json();this.linkedin=t.linkedin??null;const s=this.imaging;if(this.imaging=t.imaging??[],this.imageErrors=t.imageErrors??{},s.some(i=>!this.imaging.includes(i))&&Ue(()=>import("./notes-media-CocbJSli.js"),__vite__mapDeps([2,3,4,5])).then(i=>i.forgetMediaCache()),this.verticals=t.verticals,this.drafts=t.drafts,this.webhookConfigured=t.webhookConfigured,this.linkedinConfigured=t.linkedinConfigured??!1,this.setGenerating(t.generating??!1),this.view==="results"&&this.loadInsights(),this.aiStartedAt!==null&&t.draftError&&t.draftError.at>=this.aiStartedAt&&!t.generating&&(this.aiStartedAt=null,this.aiError=t.draftError.message),this.pickUpAiDraft(),this.view==="wizard"&&this.wizardEditId!=null){const i=this.verticals.find(n=>n.id===this.wizardEditId);i&&this.mergeServerIntoForm(i)}this.loading=!1}}catch{}}setGenerating(e){const t=this.genStartedAt!==null&&Date.now()-this.genStartedAt<8e3,s=e||t;s&&!this.generating&&(this.genStartedAt===null&&(this.genStartedAt=Date.now()),this.genTicker||(this.genTicker=setInterval(()=>this.requestUpdate(),1e3))),!s&&this.generating&&(this.genStartedAt=null,this.genTicker&&(clearInterval(this.genTicker),this.genTicker=null)),this.generating=s}genStatusText(){const e=this.genStartedAt?Math.floor((Date.now()-this.genStartedAt)/1e3):0;return`${e<40?"searching what your buyers are talking about":e<100?"reading sources + writing the draft":"still writing — long research pass"}… ${e}s (typically 60–120s)`}mergeServerIntoForm(e){const t={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""};let s=this.wizard,i=!1;for(const n of Object.keys(t))!this.dirtyFields.has(n)&&t[n]!==s[n]&&(i||(s={...s}),s[n]=t[n],i=!0);i&&(this.wizard=s),!this.dirtyFields.has("language")&&e.language!==this.wizardLang&&(this.wizardLang=e.language),!this.dirtyFields.has("formality")&&e.formality!==this.wizardFormality&&(this.wizardFormality=e.formality),!this.dirtyFields.has("posts_per_week")&&e.posts_per_week!==this.editPostsPerWeek&&(this.editPostsPerWeek=e.posts_per_week)}openWizard(e){e?(this.wizardEditId=e.id,this.wizard={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""},this.wizardLang=e.language,this.wizardFormality=e.formality,this.editPostsPerWeek=e.posts_per_week,this.editImageStyle=e.image_style&&e.image_style!=="line-art"?e.image_style:"auto",this.editImageDna=e.image_dna||"",this.editImageRef=e.image_ref_url):(this.wizardEditId=null,this.wizard={...lo},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=3,this.editImageStyle="auto",this.editImageDna="",this.editImageRef=null),this.dirtyFields=new Set,this.wizardStep=0,this.view="wizard",this.navOpen=!1,this.menuForId=null,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}async saveWizard(){if(!this.saving){this.saving=!0;try{const e={...this.wizard,language:this.wizardLang,formality:this.wizardFormality};if(e.image_style=this.editImageStyle,e.image_dna=this.editImageDna,e.image_ref_url=this.editImageRef,e.posts_per_week=this.editPostsPerWeek,this.wizardEditId!=null)await fetch(`/api/publisher/verticals/${this.wizardEditId}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)});else{const t=await fetch("/api/publisher/verticals",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(t.ok){const{id:s}=await t.json();this.setVertical(s)}}await this.refresh(),this.view="queue"}finally{this.saving=!1}}}renderEditForm(){const e=(t,s,i=!1)=>r`
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
          <p class="text-[11px] text-muted leading-snug">Proof comes from your notes in Mana: each draft lists the facts it stands on.</p>
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
    `}renderWizard(){const e=this.wizardStep===Kt.length,t=e?null:Kt[this.wizardStep],s=!t?.required||!!this.wizard[t.key].trim(),i=!!this.wizard.name.trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex items-center gap-1.5 mb-6">
            ${[...Kt,null].map((n,o)=>r`<button type="button"
              class="h-2.5 flex-1 rounded-full transition-colors ${o<=this.wizardStep?"bg-accent":"bg-line hover:bg-muted/40"}"
              title=${o<Kt.length?Kt[o].q:"Language & tone"}
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
    `}async draftWithAi(e){if(this.generating||this.aiStartedAt!==null)return;this.aiTopicId=e.topicId,this.aiError="",this.genStartedAt=Date.now(),this.setGenerating(!0);const t=await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:e.topicId,pillar:e.pillar,angle:e.angle?.trim()||void 0})}).catch(()=>null);if(!t?.ok){this.genStartedAt=null,this.setGenerating(!1),j(this,t?.status===409?"A draft is already being written. Give it a minute.":"Couldn't start the draft. Try again.",{tone:"error"});return}this.aiStartedAt=Date.now()}async removeDraft(e){await Ye(this,{title:"Delete this post for good?",body:"It leaves the archive and its numbers leave Results. The post on LinkedIn stays.",confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/drafts/${e.id}`,{method:"DELETE"}),await this.refresh())}async act(e,t,s){await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:t,...s!==void 0?{body:s}:{}})}),await this.refresh()}startEdit(e){this.editingId=e.id,this.editBody=e.body}swapHook(e,t){const i=(this.editingId===e.id?this.editBody:e.body).split(`
`),n=i.findIndex(o=>o.trim());n>=0?i[n]=t:i.unshift(t),this.editingId=e.id,this.editBody=i.join(`
`)}parseHooks(e){if(!e.hooks)return[];try{const t=JSON.parse(e.hooks);return Array.isArray(t)?t.map(String).map(s=>s.trim()).filter(Boolean):[]}catch{return[]}}async commitEdit(e,t=!1){const s=this.editBody.trim();this.editingId=null,s&&s!==e.body&&await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({body:s})}),t?await this.act({...e,body:s},"approve"):await this.refresh()}async copyBody(e){try{await navigator.clipboard.writeText(e.body),this.copiedId=e.id,setTimeout(()=>{this.copiedId===e.id&&(this.copiedId=null)},2e3)}catch{j(this,"Couldn't copy. Open the post and copy the text by hand.",{tone:"error"})}}startRename(e){this.renamingVerticalId=e.id,this.renameValue=e.name,this.updateComplete.then(()=>this.renderRoot?.querySelector(".vertical-rename")?.focus())}async commitRename(e){const t=this.renameValue.trim();this.renamingVerticalId=null,!(!t||t===e.name)&&(await fetch(`/api/publisher/verticals/${e.id}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:t})}),await this.refresh())}openMetrics(e){this.metricsForId=e.id,this.metricsDraft={impressions:e.impressions!=null?String(e.impressions):"",reactions:e.reactions!=null?String(e.reactions):"",comments:e.comments!=null?String(e.comments):"",leads:e.leads!=null?String(e.leads):""}}async saveMetrics(e){const t={};for(const s of ui)t[s]=this.metricsDraft[s].trim()===""?null:Number(this.metricsDraft[s]);this.metricsForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async savePosting(){const e={webhookUrl:this.webhookUrl.trim(),webhookSecret:this.webhookSecret.trim()};this.linkedinToken.trim()&&(e.linkedinToken=this.linkedinToken.trim()),await fetch("/api/publisher/posting",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),this.linkedinToken="",await this.refresh()}async savePostUrl(e){const t=this.postUrlDraft.trim();this.postUrlForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({post_url:t})}),await this.refresh()}async syncMetrics(e){this.syncingId=e.id;try{const t=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"sync"})});if(!t.ok){const s=await t.json().catch(()=>({}));j(this,`Metrics sync failed: ${s.error||t.status}`,{tone:"error"})}}finally{this.syncingId=null,await this.refresh()}}fileToUploadUrl(e){return new Promise(t=>{const s=new FileReader;s.onload=async()=>{try{const i=await fetch("/api/upload",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dataUrl:s.result,name:e.name})});if(!i.ok){t(null);return}const{url:n}=await i.json();t(n)}catch{t(null)}},s.onerror=()=>t(null),s.readAsDataURL(e)})}pickImageStyle(e){const t=pi.find(i=>i.key===e),s=this.editImageDna.trim()===""||pi.some(i=>i.dna===this.editImageDna.trim());this.editImageStyle=e,t&&s&&(this.editImageDna=t.dna),this.dirtyFields.add("image_style")}async uploadRefImage(e){const t=e.target.files?.[0];if(!t)return;const s=await this.fileToUploadUrl(t);s&&(this.editImageRef=s)}async genImage(e){const t=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"gen-image",direction:this.imageDirection[e.id]??""})});if(!t.ok&&t.status!==409){j(this,"Couldn't start the image. Try again.",{tone:"error"});return}this.imaging=[...new Set([...this.imaging,e.id])];const s={...this.imageErrors};delete s[e.id],this.imageErrors=s}async setDraftImage(e,t){await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({image_url:t})}),await this.refresh()}async openLibrary(e){await Ue(()=>import("./notes-media-CocbJSli.js"),__vite__mapDeps([2,3,4,5])),this.libraryFor=e}renderImageConfig(){return r`
      <div class="pt-3 mt-1 border-t border-line/60 space-y-2">
        <p class="text-xs text-ink font-medium">Image style</p>
        <p class="text-[11px] text-muted leading-snug">Every generated image for this topic follows these, so the feed looks like one brand.</p>
        <label class="block text-xs text-muted">Style
          <select class="mt-1 w-full px-2 py-1.5 text-sm bg-surface border border-line rounded-lg" .value=${this.editImageStyle}
            @change=${e=>this.pickImageStyle(e.target.value)}>
            ${pi.map(e=>r`<option value=${e.key}>${e.label}</option>`)}
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
      </div>`}renderResearch(e){let t=null;try{t=e.research?JSON.parse(e.research):null}catch{}if(!t||!t.queries?.length&&!t.items?.length)return h;const s=this.researchOpenId===e.id;return r`
      <div class="px-4 pt-1">
        <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.researchOpenId=s?null:e.id}}
        >${s?"▾":"▸"} research trail (${t.items?.length??0} sources)</button>
        ${s?r`<div class="mt-1.5 mb-1 rounded-lg border border-line/60 bg-bg px-3 py-2 space-y-1.5">
              ${t.queries?.length?r`<p class="text-[11px] text-muted"><span class="font-semibold text-[10px]">searched</span> ${t.queries.join(" · ")}</p>`:h}
              ${(t.items??[]).map(i=>r`
                <p class="text-[11px] leading-snug">
                  ${i.url?r`<a class="text-ink underline decoration-line underline-offset-2 hover:decoration-ink" href=${i.url} target="_blank" rel="noopener">${i.title||i.url}</a>`:r`<span class="text-ink">${i.title||"(untitled)"}</span>`}
                  ${i.note?r`<span class="text-muted"> — ${i.note}</span>`:h}
                </p>`)}
            </div>`:h}
      </div>
    `}renderHookAlts(e){if(e.status!=="draft")return h;const t=this.parseHooks(e);return t.length?r`
      <div class="px-4 pt-1 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-muted/70 font-semibold">try hook</span>
        ${t.map(s=>r`
          <button type="button" title=${s}
            class="max-w-[16rem] truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
            @click=${()=>this.swapHook(e,s)}
          >${s}</button>`)}
      </div>`:h}renderDraftImage(e){if(ye(e)||e.status==="posted")return h;const t=this.imaging.includes(e.id),s=this.imageErrors[e.id],i="shrink-0 px-2.5 py-1.5 text-[12px] rounded-lg border border-line text-ink hover:border-ink disabled:opacity-40";return r`
      <section class="rounded-xl border border-line bg-surface p-2 space-y-1.5">
        <div class="flex items-center gap-1.5">
          <input type="text" class="flex-1 min-w-0 px-2.5 py-1.5 text-[12px] bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
            placeholder="Image: what should it show? Empty lets Mana pick" aria-label="What the image should show" ?disabled=${t}
            .value=${this.imageDirection[e.id]??""}
            @input=${n=>{this.imageDirection={...this.imageDirection,[e.id]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"&&!t&&(n.preventDefault(),this.genImage(e))}} />
          <button type="button" class=${i} ?disabled=${t} @click=${()=>void this.genImage(e)}>Generate</button>
          <button type="button" class=${i} @click=${()=>void this.openLibrary(e.id)}>Library</button>
          ${e.image_url?r`<button type="button" class="shrink-0 px-1 text-[12px] text-muted hover:text-red-600" @click=${()=>void this.setDraftImage(e,null)}>Remove</button>`:h}
        </div>
        ${t?r`<p class="flex items-center gap-1.5 px-1 text-[11px] text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Making the image, about 40 seconds</p>`:s?r`<p class="px-1 text-[11px] text-red-600 leading-snug">${s}</p>`:h}
      </section>`}renderDraftCard(e){const t=this.editingId===e.id,s=t?this.editBody:e.body,i=s.length,n=s.split(/\s+/).filter(Boolean).length;return r`
      <div class="rounded-xl border border-line bg-surface">
        <div class="flex items-center gap-2 px-4 pt-3">
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${ye(e)?ao:ro[e.pillar]}">${ye(e)?"🎬 Script":xs[e.pillar]}</span>
          ${e.status!=="draft"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${e.status==="posted"?"bg-accent/15 text-accent":"bg-line text-muted"}">${e.status}</span>`:h}
          <span class="ml-auto text-[10px] ${!ye(e)&&i>1300?"text-amber-600":"text-muted/60"}">${ye(e)?`${n} words`:`${i} chars`}</span>
        </div>
        ${e.source_note?r`<p class="px-4 pt-1 text-[11px] text-muted">why now: ${e.source_note}
              ${e.source_url?r` · <a class="underline hover:text-ink" href=${e.source_url} target="_blank" rel="noopener">source</a>`:h}</p>`:h}
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
              >${!ye(e)&&this.webhookConfigured?"Approve & post":"Approve"}</button>
              ${t?r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" @click=${()=>void this.commitEdit(e)}>Save edit</button>`:r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(e)}>Edit</button>`}
              <button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.act(e,"discard")}>discard</button>`:e.status==="approved"?r`
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover"
                  @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":ye(e)?"Copy script":"Copy post"}</button>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10"
                  @click=${()=>void this.act(e,"mark-posted")}>${ye(e)?"Video is up":"I posted it"}</button>
                <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>void this.act(e,"reopen")}>back to drafts</button>`:r`<span class="text-[11px] text-muted">${e.posted_at?new Date(e.posted_at*1e3).toLocaleDateString():""}</span>
                ${ye(e)?h:this.renderMetrics(e)}
                <span class="ml-auto inline-flex items-center gap-2">
                  <button type="button" class="text-[11px] text-muted hover:text-ink" title="Mis-tap? Back to approved (doesn't touch LinkedIn)" @click=${()=>void this.act(e,"unpost")}>undo</button>
                  <button type="button" class="text-[11px] text-muted hover:text-red-600" title="Delete from the archive" @click=${()=>void this.removeDraft(e)}>delete</button>
                  <button type="button" class="px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-ink" @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":"Copy"}</button>
                </span>`}
        </div>
      </div>
    `}renderMetrics(e){if(this.metricsForId===e.id)return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
        ${ui.map(i=>r`<label class="inline-flex items-center gap-0.5 text-[10px] text-muted">${i.slice(0,4)}
          <input type="number" min="0" class="w-14 px-1 py-0.5 text-[11px] bg-bg border border-line rounded text-right focus:outline-none focus:border-ink"
            .value=${this.metricsDraft[i]}
            @input=${n=>{this.metricsDraft={...this.metricsDraft,[i]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"?this.saveMetrics(e):n.key==="Escape"&&(this.metricsForId=null)}}
          /></label>`)}
        <button type="button" class="px-1.5 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.saveMetrics(e)}>save</button>
      </span>`;const t=ui.some(i=>e[i]!=null),s=e.metrics_synced_at!=null;return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
      <button type="button" class="inline-flex items-center gap-1.5 text-[10px] text-muted hover:text-ink" title=${s?"Auto-synced from LinkedIn — click to override by hand":"Log this post's numbers from LinkedIn analytics"}
        @click=${()=>this.openMetrics(e)}>
        ${t?r`${e.impressions!=null?r`<span>👁 ${e.impressions}</span>`:h}
            ${e.reactions!=null?r`<span>👍 ${e.reactions}</span>`:h}
            ${e.comments!=null?r`<span>💬 ${e.comments}</span>`:h}
            ${e.leads!=null?r`<span class="text-accent font-medium">→ ${e.leads} lead${e.leads===1?"":"s"}</span>`:h}`:r`<span class="underline decoration-line underline-offset-2">+ log metrics</span>`}
      </button>
      ${s?r`<span class="text-[9px] text-accent/80" title="From LinkedIn's Member Post Analytics API">⟳ synced</span>`:h}
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
            @click=${()=>void this.syncMetrics(e)}>${this.syncingId===e.id?"syncing…":"⟳ sync"}</button>`:h}`}renderListRow(e){const t=this.expandedId===e.id,s=(e.body.split(`
`).find(n=>n.trim())||"").slice(0,100),i=this.activeVerticalId===null&&this.wide?this.verticals.find(n=>n.id===e.vertical_id)?.name:void 0;return r`
      <li class="border-b border-line/50 last:border-b-0">
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>{e.status==="posted"?this.expandedId=t?null:e.id:this.openEditor(e.id)}}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${ye(e)?ao:ro[e.pillar]}">${ye(e)?"🎬 Script":xs[e.pillar]}</span>
          <span class="flex-1 min-w-0 text-sm ${e.status==="posted"?"text-muted":"text-ink"} truncate">${s}</span>
          ${i?r`<span class="text-[10px] text-muted shrink-0 max-w-[8rem] truncate">${i}</span>`:h}
          ${e.status==="posted"&&e.impressions!=null?r`<span class="text-[10px] text-muted shrink-0">👁 ${e.impressions}${e.leads?r` · <span class="text-accent">→${e.leads}</span>`:h}</span>`:h}
          <span class="text-[10px] ${e.status==="posting"||e.scheduled_at&&e.status==="approved"?"text-accent":"text-muted/60"} shrink-0">${e.status==="posting"?"Posting…":e.scheduled_at&&e.status==="approved"?Sh(e.scheduled_at):new Date((e.posted_at??e.created_at)*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
        </button>
        ${t?r`<div class="px-2 pb-2">${this.renderDraftCard(e)}</div>`:h}
      </li>
    `}async saveLinkedInApp(){if(!(!this.liClientId.trim()||this.liSaving)){this.liSaving=!0;try{if(!(await fetch("/api/publisher/linkedin/app",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({clientId:this.liClientId.trim(),clientSecret:this.liClientSecret.trim()||void 0})})).ok){j(this,"Couldn't save the app details. Try again.",{tone:"error"});return}this.liClientSecret="",await this.refresh()}finally{this.liSaving=!1}}}async disconnectLinkedIn(){await Ye(this,{title:"Disconnect LinkedIn?",body:"Scheduled posts won't go out until you connect again.",confirm:"Disconnect",tone:"warning"})&&(await fetch("/api/publisher/linkedin",{method:"DELETE"}),await this.refresh(),j(this,"LinkedIn disconnected"))}renderSettingsPage(){const e=n=>r`<span class="inline-block w-1.5 h-1.5 rounded-full ${n?"bg-accent":"bg-line"}"></span>`,t=this.linkedin,s=t?.expiresAt?Math.ceil((t.expiresAt-Date.now())/864e5):null,i="mt-1 w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";return r`
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
              </div>`:h}
          </section>
        </div>
      </div>`}renderNeedsNumbers(e){const t=this.drafts.filter(s=>s.status==="posted"&&s.impressions==null&&!ye(s)&&this.inTopic(s)&&(s.posted_at??0)<=e-172800&&(s.posted_at??0)>=e-1814400).sort((s,i)=>(i.posted_at??0)-(s.posted_at??0));return t.length?r`
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
      </section>`:h}renderQueue(){if(this.loading)return r`<div class="flex-1"></div>`;if(!this.verticals.length)return r`<div class="flex-1 min-h-0 overflow-y-auto p-3">
        <div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
          <p class="text-sm text-ink font-medium">Start with a topic.</p>
          <p class="text-xs text-muted mt-1 max-w-md mx-auto">A topic is one thing you post about, with its own audience, voice, language and weekly target. Nothing posts without your approval.</p>
          <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>this.openWizard()}>Create a topic</button>
        </div>
      </div>`;const e=this.drafts.filter(i=>oo(i)===this.stage&&this.inTopic(i)).sort((i,n)=>this.stage==="scheduled"?(i.scheduled_at??0)-(n.scheduled_at??0):(n.posted_at??n.created_at)-(i.posted_at??i.created_at)).slice(0,this.stage==="posted"?100:void 0),t=this.activeVertical?` in ${this.activeVertical.name}`:"",s={draft:`No drafts${t}.`,scheduled:`Nothing scheduled${t}.`,posted:`Nothing published${t} yet.`};return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.stage==="posted"?this.renderNeedsNumbers(hi()):h}
        ${this.generating&&this.stage==="draft"?r`<div class="px-4 py-3 rounded-xl border border-line bg-surface">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
              <div class="mt-2 h-1 rounded-full bg-line overflow-hidden">
                <div class="h-full bg-accent transition-all duration-1000" style="width:${Math.min(95,Math.round((Date.now()-(this.genStartedAt??Date.now()))/1e3/120*100))}%"></div>
              </div>
            </div>`:h}
        ${e.length?r`<ul class="rounded-xl border border-line bg-surface overflow-hidden">${e.map(i=>this.renderListRow(i))}</ul>`:this.generating&&this.stage==="draft"?h:r`<p class="px-1 py-6 text-center text-xs text-muted">${s[this.stage]}</p>`}
      </div>
    `}navRow(e,t){return r`
      <button type="button" class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left ${t.active?"bg-accent-soft text-ink font-medium":"text-muted hover:text-ink hover:bg-hover"}"
        @click=${t.onClick}>
        ${Ve(t.icon,"w-4 h-4 shrink-0")}
        <span class="flex-1 min-w-0 truncate">${e}</span>
        ${t.badge?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-soft text-accent font-medium">${t.badge}</span>`:h}
        ${t.count?r`<span class="text-xs text-muted">${t.count}</span>`:h}
      </button>`}toggleGroup(e){const t=new Set(this.collapsedGroups);t.has(e)?t.delete(e):t.add(e),this.collapsedGroups=t;try{localStorage.setItem("cockpit.publisher_nav_collapsed",JSON.stringify([...t]))}catch{}}toggleNav(){this.navHidden=!this.navHidden;try{localStorage.setItem("cockpit.publisher_nav_hidden",this.navHidden?"1":"0")}catch{}}startResize(e){const t=e.currentTarget,s=e.clientX,i=this.navWidth;t.setPointerCapture(e.pointerId);const n=a=>{this.navWidth=Math.min(no,Math.max(io,i+a.clientX-s))},o=()=>{t.removeEventListener("pointermove",n),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o);try{localStorage.setItem("cockpit.publisher_nav_width",String(this.navWidth))}catch{}};t.addEventListener("pointermove",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),e.preventDefault()}groupHeader(e,t,s){const i=this.collapsedGroups.has(e);return r`
      <div class="flex items-center pl-1 pr-1 pt-3 pb-0.5">
        <button type="button" class="flex-1 flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.7rem] font-semibold text-muted hover:text-ink text-left"
          aria-expanded=${!i} @click=${()=>this.toggleGroup(e)}>
          ${Ve(i?"chevron-right":"chevron-down","w-3 h-3")} ${t}</button>
        ${s??h}
      </div>`}renderTopicRow(e,t){const s=this.view==="queue"&&this.activeVerticalId===e.id,i=this.postedThisWeek(e),n=this.menuForId===e.id;if(this.renamingVerticalId===e.id)return r`<input type="text"
        class="vertical-rename w-full px-3 py-1.5 rounded-lg text-sm bg-hover text-ink outline-none border border-line focus:border-ink"
        .value=${this.renameValue}
        @input=${l=>{this.renameValue=l.target.value}}
        @keydown=${l=>{l.key==="Enter"?(l.preventDefault(),this.commitRename(e)):l.key==="Escape"&&(this.renamingVerticalId=null)}}
        @blur=${()=>void this.commitRename(e)} />`;const o=(l,d,u,p=!1)=>r`
      <button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-left hover:bg-hover ${p?"text-red-500":"text-ink"}"
        @click=${m=>{m.stopPropagation(),u()}}>${Ve(l,"w-3.5 h-3.5")} ${d}</button>`,a=e.enabled&&i>=e.posts_per_week;return r`
      <div class="group relative ${this.topicDrag.dropClass(e.id)}" data-topic-menu=${n?"":h}
        draggable="true"
        @mousedown=${()=>this.topicDrag.arm(e.id)}
        @mouseup=${this.topicDrag.disarm}
        @dragstart=${l=>this.topicDrag.onDragStart(l,e.id)}
        @dragend=${this.topicDrag.onDragEnd}
        @dragover=${l=>this.topicDrag.onDragOver(l,e.id,t)}
        @dragleave=${this.topicDrag.onDragLeave}
        @drop=${l=>this.topicDrag.onDrop(l,e.id,t)}>
        <div class="flex items-center rounded-lg ${s?"bg-accent-soft":"hover:bg-hover"} ${this.topicDrag.isDragging(e.id)&&this.topicDrag.active?"opacity-40":""}">
          <button type="button" class="flex-1 min-w-0 flex items-center gap-2 pl-3 py-1.5 text-left cursor-default"
            title=${`${e.enabled?`${e.name}: ${i} of ${e.posts_per_week} posts this week.`:`${e.name} (paused).`} Click again to show all topics. Drag to reorder, double-click to rename.`}
            @click=${()=>this.setVertical(s?null:e.id)}
            @dblclick=${l=>{l.preventDefault(),this.startRename(e)}}>
            <span class="flex-1 min-w-0 truncate text-sm ${e.enabled?"text-ink":"text-muted"} ${s?"font-medium":""}">${e.name}</span>
            <span class="shrink-0 text-[11px] ${a?"text-accent":"text-muted"}">${e.enabled?`${i}/${e.posts_per_week}`:"paused"}</span>
          </button>
          <button type="button" aria-label="Topic options" title="Topic options"
            class="shrink-0 mx-1 w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover ${n?"opacity-100 bg-hover":"opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-coarse:opacity-100"}"
            @click=${l=>{l.stopPropagation(),this.menuForId=n?null:e.id}}>${Ve("ellipsis","w-3.5 h-3.5")}</button>
        </div>
        ${n?r`
          <div class="absolute right-1 top-full mt-1 z-30 w-44 py-1 rounded-xl border border-line bg-surface shadow-lg" role="menu">
            ${o("pencil","Edit topic",()=>this.openWizard(e))}
            ${o("type","Rename",()=>{this.menuForId=null,this.startRename(e)})}
            ${o(e.enabled?"pause":"play",e.enabled?"Pause":"Resume",()=>void this.togglePause(e))}
            <div class="my-1 border-t border-line/70"></div>
            ${o("trash-2","Delete topic",()=>void this.deleteTopic(e),!0)}
          </div>`:h}
      </div>`}renderNav(){const e=this.view==="queue",t=i=>!this.collapsedGroups.has(i),s=r`<button type="button" aria-label="New topic" title="New topic"
      class="w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openWizard()}>${Ve("plus","w-3.5 h-3.5")}</button>`;return r`
      <div class="flex items-center gap-2 px-3 pt-3 pb-1 shrink-0">
        <h2 class="flex-1 min-w-0 truncate text-sm font-semibold text-ink">Publisher</h2>
        <button type="button" class="shrink-0 flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105 ${this.verticals.length?"":"opacity-40 pointer-events-none"}"
          title="Write a new post" @click=${()=>this.openCompose()}>${Ve("square-pen","w-3.5 h-3.5")} New post</button>
      </div>
      <nav class="flex-1 min-h-0 overflow-y-auto px-2 pb-2">
        <div class="px-3 pt-3 pb-0.5 text-[0.7rem] font-semibold text-muted">Pipeline</div>
        ${di.map(i=>this.navRow(i.label,{icon:i.icon,active:e&&this.stage===i.key,count:this.stageCount(i.key),onClick:()=>this.setStage(i.key)}))}
        ${this.navRow("Results",{icon:"bar-chart",active:this.view==="results",onClick:()=>{this.view="results",this.navOpen=!1,this.loadInsights(!0)}})}
        ${this.groupHeader("topics","Topics",s)}
        ${t("topics")?r`
          ${this.verticals.map((i,n)=>this.renderTopicRow(i,n))}
          ${this.verticals.length?h:r`<button type="button" class="w-full px-3 py-1.5 rounded-lg text-sm text-left text-muted hover:text-ink hover:bg-hover"
            @click=${()=>this.openWizard()}>Create your first topic</button>`}`:h}
      </nav>
      <div class="px-2 pb-2 shrink-0 border-t border-line/60 pt-2">
        ${this.navRow(this.linkedin?.connected?"LinkedIn connected":"Connect LinkedIn",{icon:"settings",active:this.view==="settings",badge:this.linkedin?.connected||!this.linkedin?void 0:"off",onClick:()=>{this.view="settings",this.navOpen=!1}})}
      </div>`}renderResults(){const e=this.activeVertical?[this.activeVertical]:this.verticals.filter(i=>i.enabled||this.drafts.some(n=>n.vertical_id===i.id&&n.status==="posted"));if(!e.length)return r`<p class="p-6 text-center text-xs text-muted">No topics yet.</p>`;if(!this.insights)return r`<div class="flex-1 min-h-0 p-3"><p class="p-6 text-center text-xs text-muted">Loading results…</p></div>`;const t=i=>i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)}k`:String(Math.round(i)),s=(i,n,o)=>r`
      <div class="rounded-lg border border-line/70 px-3 py-2 min-w-0">
        <div class="text-[11px] text-muted truncate">${i}</div>
        <div class="text-lg font-semibold text-ink leading-tight tabular-nums">${n}</div>
        ${o?r`<div class="text-[10px] text-muted truncate">${o}</div>`:h}
      </div>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${e.map(i=>{const n=this.insights.find(u=>u.topicId===i.id);if(!n)return h;const o=Math.round(i.posts_per_week*30/7),a=n.postedThisWeek,l=n.byFormat.filter(u=>u.avgImpressions!=null),d=Math.max(1,...l.map(u=>u.avgImpressions));return r`
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
              ${l.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1.5">Avg impressions by format</p>
                  <div class="space-y-1.5">${l.map(u=>r`
                    <div class="flex items-center gap-2 text-[12px]" title="${xs[u.format]}: ${Math.round(u.avgImpressions)} average impressions over ${u.measured} measured post${u.measured===1?"":"s"}">
                      <span class="w-20 shrink-0 text-ink">${xs[u.format]}</span>
                      <span class="flex-1 h-2"><span class="block h-full rounded bg-accent" style="width:${Math.max(2,u.avgImpressions/d*100)}%"></span></span>
                      <span class="w-20 shrink-0 text-right text-muted tabular-nums">${t(u.avgImpressions)} · ${u.measured}</span>
                    </div>`)}</div>
                </div>`:h}
              ${n.top.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1">Best posts</p>
                  <ul class="space-y-1">${n.top.map(u=>r`
                    <li class="flex items-center gap-2 text-[12px]">
                      <span class="flex-1 min-w-0 truncate text-ink">${u.hook}</span>
                      <span class="shrink-0 text-muted tabular-nums">${u.impressions!=null?`${t(u.impressions)} views`:""}${u.comments?` · ${u.comments} comments`:""}${u.leads?` · ${u.leads} lead${u.leads===1?"":"s"}`:""}</span>
                    </li>`)}</ul>
                </div>`:h}
              <p class="text-[11px] text-muted">${n.writeNext}</p>
              ${n.unmeasured?r`<p class="text-[11px] text-muted">${n.unmeasured} post${n.unmeasured===1?" has":"s have"} no numbers yet.
                <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>this.setStage("posted")}>Log them in Published</button></p>`:h}
              ${n.posts?h:r`<p class="text-[11px] text-muted">Nothing published in the last 30 days.</p>`}
            </section>`})}
      </div>`}async loadInsights(e=!1){const t=this.drafts.filter(s=>s.status==="posted").map(s=>`${s.id}:${s.pillar}:${s.posted_at}:${s.impressions}:${s.reactions}:${s.comments}:${s.leads}`).join(",");if(!(!e&&t===this.insightsFor&&this.insights)){this.insightsFor=t;try{const s=await fetch("/api/publisher/insights");s.ok&&(this.insights=(await s.json()).insights)}catch{}}}renderEditor(){const e=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null;if(!this.composing&&!e&&this.editorId!==this.createdId)return r`<p class="p-6 text-center text-xs text-muted">That post is gone.</p>`;const t=this.verticals.find(n=>n.id===(e?.vertical_id??this.activeVerticalId))??this.verticals[0],s=this.drafts.filter(n=>n.id!==e?.id),i=t?Sr(t,s,hi(),this.takenTimes(e?.id)):null;return r`<publisher-editor class="flex flex-col flex-1 min-h-0"
      .draft=${e} .topics=${this.verticals} .defaultTopicId=${this.activeVerticalId} .defaultScheduleAt=${i}
      .backLabel=${di.find(n=>n.key===this.stage).label}
      .linkedinConnected=${!!this.linkedin?.connected} .webhookConfigured=${this.webhookConfigured} .twoCol=${this.twoCol}
      .renderImage=${n=>this.renderDraftImage(n)}
      .aiWriting=${this.composing&&(this.aiStartedAt!==null||this.generating)} .aiError=${this.composing?this.aiError:""}
      @ai-draft=${n=>void this.draftWithAi(n.detail)}
      @changed=${()=>void this.refresh()}
      @opened=${n=>{this.composing=!1,this.editorId=n.detail.id,this.createdId=n.detail.id}}
      @moved=${n=>this.follow(n.detail.stage)}
      @close=${()=>void this.closeEditor()}
      @force-close=${()=>this.leaveEditor()}></publisher-editor>`}renderMainHeader(){if(this.view==="editor")return h;const e=this.activeVertical,t=this.view==="settings"?"LinkedIn connection":this.view==="results"?"Results":this.view==="wizard"?this.wizardEditId!=null?`Edit ${this.wizard.name||"topic"}`:"New topic":di.find(o=>o.key===this.stage).label,i=this.view==="queue"||this.view==="results"?e?e.name:this.verticals.length>1?"All topics":"":"",n=this.view==="queue"&&e?.goal?.trim()?e.goal.trim():"";return r`
      <header class="flex items-center gap-2 px-3 pt-3 pb-2 shrink-0">
        ${this.wide?r`<button type="button" class="w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
                aria-label=${this.navHidden?"Show sidebar":"Hide sidebar"} title=${this.navHidden?"Show sidebar":"Hide sidebar"}
                @click=${()=>this.toggleNav()}>${Ve("layout-sidebar")}</button>`:r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
                @click=${()=>{this.navOpen=!0}}>${Ve("chevron-left")} Publisher</button>`}
        <div class="flex-1 min-w-0 ${this.wide?"pl-1":""}">
          <h3 class="text-sm font-semibold text-ink truncate">${t}${i?r`<span class="font-normal text-muted"> · ${i}</span>`:h}</h3>
          ${n?r`<p class="text-[11px] text-muted truncate" title=${n}>Goal: ${n}</p>`:h}
        </div>
      </header>`}render(){const e=this.wide?!this.navHidden:this.navOpen,t=this.wide||!this.navOpen;return r`
      <div class="relative flex h-full min-h-0">
        <aside class="${e?"flex":"hidden"} relative flex-col min-h-0 ${this.wide?"shrink-0 border-r border-line":"flex-1 min-w-0"}"
          style=${this.wide?`width:${this.navWidth}px`:""}>
          ${this.renderNav()}
          ${this.wide?r`<div class="absolute top-0 bottom-0 -right-1 w-2 z-10 cursor-col-resize hover:bg-accent/30 transition-colors" role="separator" aria-orientation="vertical"
            title="Drag to resize, double-click to reset"
            @pointerdown=${s=>this.startResize(s)}
            @dblclick=${()=>{this.navWidth=bs;try{localStorage.setItem("cockpit.publisher_nav_width",String(bs))}catch{}}}></div>`:h}
        </aside>
        <section class="${t?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderMainHeader()}
          ${this.view==="wizard"?this.wizardEditId!=null?this.renderEditForm():this.renderWizard():this.view==="settings"?this.renderSettingsPage():this.view==="results"?this.renderResults():this.view==="editor"?this.renderEditor():this.renderQueue()}
        </section>
        ${this.libraryFor!==null?r`
          <notes-media-library .tab=${"all"}
            @close=${()=>{this.libraryFor=null}}
            @insert=${s=>{const i=this.libraryFor;this.libraryFor=null;const n=this.drafts.find(o=>o.id===i);n&&this.setDraftImage(n,s.detail.url)}}></notes-media-library>`:h}
        ${this.renderToast()}
        ${this.renderDialog()}
      </div>
    `}};w([c()],y.prototype,"verticals",2);w([c()],y.prototype,"drafts",2);w([c()],y.prototype,"webhookConfigured",2);w([c()],y.prototype,"linkedinConfigured",2);w([c()],y.prototype,"loading",2);w([c()],y.prototype,"activeVerticalId",2);w([c()],y.prototype,"stage",2);w([c()],y.prototype,"view",2);w([c()],y.prototype,"wide",2);w([c()],y.prototype,"navOpen",2);w([c()],y.prototype,"menuForId",2);w([c()],y.prototype,"navWidth",2);w([c()],y.prototype,"navHidden",2);w([c()],y.prototype,"collapsedGroups",2);w([c()],y.prototype,"wizardEditId",2);w([c()],y.prototype,"wizardStep",2);w([c()],y.prototype,"wizard",2);w([c()],y.prototype,"wizardLang",2);w([c()],y.prototype,"wizardFormality",2);w([c()],y.prototype,"editPostsPerWeek",2);w([c()],y.prototype,"editImageStyle",2);w([c()],y.prototype,"editImageDna",2);w([c()],y.prototype,"editImageRef",2);w([c()],y.prototype,"imaging",2);w([c()],y.prototype,"imageErrors",2);w([c()],y.prototype,"imageDirection",2);w([c()],y.prototype,"libraryFor",2);w([c()],y.prototype,"saving",2);w([c()],y.prototype,"editingId",2);w([c()],y.prototype,"editBody",2);w([c()],y.prototype,"composing",2);w([c()],y.prototype,"editorId",2);w([c()],y.prototype,"twoCol",2);w([c()],y.prototype,"aiTopicId",2);w([c()],y.prototype,"aiStartedAt",2);w([c()],y.prototype,"aiError",2);w([c()],y.prototype,"generating",2);w([c()],y.prototype,"genStartedAt",2);w([c()],y.prototype,"webhookUrl",2);w([c()],y.prototype,"webhookSecret",2);w([c()],y.prototype,"linkedinToken",2);w([c()],y.prototype,"linkedin",2);w([c()],y.prototype,"liClientId",2);w([c()],y.prototype,"liClientSecret",2);w([c()],y.prototype,"liSaving",2);w([c()],y.prototype,"showLegacy",2);w([c()],y.prototype,"postUrlForId",2);w([c()],y.prototype,"postUrlDraft",2);w([c()],y.prototype,"syncingId",2);w([c()],y.prototype,"copiedId",2);w([c()],y.prototype,"researchOpenId",2);w([c()],y.prototype,"expandedId",2);w([c()],y.prototype,"renamingVerticalId",2);w([c()],y.prototype,"renameValue",2);w([c()],y.prototype,"toastMsg",2);w([c()],y.prototype,"ask",2);w([c()],y.prototype,"insights",2);w([c()],y.prototype,"metricsForId",2);w([c()],y.prototype,"metricsDraft",2);y=w([k("publisher-section")],y);const fr="slmai.cockpit.ideasCache";let Ct=null;function Ch(){if(Ct)return Ct;try{const e=localStorage.getItem(fr);e&&(Ct=JSON.parse(e))}catch{}return Ct}function br(e){if(Ct!==e){Ct=e;try{localStorage.setItem(fr,JSON.stringify(e))}catch{}}}var Th=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,ae=(e,t,s,i)=>{for(var n=i>1?void 0:i?Dh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Th(t,s,n),n};const co="slmai.cockpit.ideasCollapsed",mi="slmai.cockpit.ideasSection.title",gi="Ideas",Eh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let ee=class extends ${constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=gi,this.ideas=[],this.highlightIds=new Set,this.flash=new Es(this,"idea"),this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.dragOverCommit=!1,this.draggingId=null,this.onIdeasChanged=()=>{this.load()},this.onOpsEvent=e=>{const t=e.detail;!t||t.action!=="refresh"||(this.flash.take(t),t.added?.kind==="idea"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id)),this.load())},this.lastEmittedCount=-1,this.onCommitDragOver=e=>{e.dataTransfer?.types.includes("text/x-commit-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverCommit=!0)},this.onCommitDragLeave=()=>{this.dragOverCommit=!1},this.onCommitDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id");if(!t)return;e.preventDefault(),this.dragOverCommit=!1;const s=(e.dataTransfer?.getData("text/plain")||"").trim();s&&await nr(Number(t),s)}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(co)==="1",this.titleValue=localStorage.getItem(mi)??gi,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.ideas.title"];t&&(this.titleValue=t,localStorage.setItem(mi,t))}).catch(()=>{}),this.ideas=Ch()??[],this.load(),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("ops-event",this.onOpsEvent)}clearHighlight(e){if(!this.highlightIds.has(e))return;const t=new Set(this.highlightIds);t.delete(e),this.highlightIds=t}updated(){br(this.ideas);const e=this.ideas.filter(s=>!s.hidden).length;if(e!==this.lastEmittedCount&&(this.lastEmittedCount=e,document.dispatchEvent(new CustomEvent("mana-ideas-count",{detail:{count:e}}))),this.editingId==null)return;const t=this.querySelector("textarea.idea-edit");t&&this.autoGrow(t)}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}async load(){try{const t=await(await fetch("/api/ideas")).json();this.ideas=t.ideas}catch{}}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||gi;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(mi,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(co,this.collapsed?"1":"0")}async toggleHidden(e,t){this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:t}:s);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({hidden:t})})}catch{this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:!t}:s)}}async deleteIdea(e){const t=this.ideas;this.ideas=this.ideas.filter(s=>s.id!==e);try{await fetch(`/api/ideas/${e}`,{method:"DELETE"})}catch{this.ideas=t}}beginAdd(e){e.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(e=!1){if(!this.adding)return;const t=this.newText.trim();if(this.newText="",!t){this.adding=!1;return}e||(this.adding=!1);try{const i=await(await fetch("/api/ideas",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})).json();this.ideas=[...this.ideas,{id:i.id,text:t,hidden:!1}]}catch{}}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!0)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newText="")}startEdit(e){this.adding=!1,this.editingId=e.id,this.editText=e.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const e=this.editingId;if(e===null)return;const t=this.editText.trim();if(this.cancelEdit(),!t)return;const s=this.ideas;this.ideas=this.ideas.map(i=>i.id===e?{...i,text:t}:i);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})}catch{this.ideas=s}}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit()):e.key==="Escape"&&(e.preventDefault(),this.cancelEdit())}onDragStart(e,t){if(this.draggingId=t,e.dataTransfer){e.dataTransfer.setData("text/x-idea-id",String(t));const s=this.ideas.find(i=>i.id===t);s&&e.dataTransfer.setData("text/plain",s.text),e.dataTransfer.effectAllowed="move"}}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(e,t){if(!e.dataTransfer?.types.includes("text/x-idea-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const s=e.currentTarget.getBoundingClientRect();this.dragOverId=t,this.dragOverPos=e.clientY<s.top+s.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(e,t){const s=e.dataTransfer?.getData("text/x-idea-id"),i=s?Number(s):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(i)||i===t)return;e.preventDefault();const a=(this.showHidden?this.ideas:this.ideas.filter(x=>!x.hidden)).findIndex(x=>x.id===t);if(a<0)return;const l=n==="after"?a+1:a,d=this.ideas.slice(),u=d.findIndex(x=>x.id===i),p=d.findIndex(x=>x.id===t);if(u<0||p<0)return;const[m]=d.splice(u,1);if(!m)return;const f=n==="after"?p+(u<p?0:1):p-(u<p?1:0);d.splice(Math.max(0,f),0,m),this.ideas=d;try{await fetch(`/api/ideas/${i}/reorder`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:l})})}catch{this.load()}}renderHiddenToggle(e){return e.length===0?h:r`<button
      type="button"
      class="text-muted hover:text-ink"
      style="width:16px;height:16px;display:inline-flex;opacity:${this.showHidden?"0.9":"0.5"};"
      title=${this.showHidden?`Hide ${e.length} hidden idea${e.length===1?"":"s"}`:`Show ${e.length} hidden idea${e.length===1?"":"s"}`}
      @click=${t=>{t.stopPropagation(),this.showHidden=!this.showHidden}}
    >
      ${X(er)}
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
                </div>`:h:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${X(this.collapsed?hs:ds)}</span
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
                  >`:h}
              <span class="flex-1"></span>
              ${this.collapsed?h:this.renderHiddenToggle(e)}
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
                            @paste=${Is}
                            @blur=${()=>void this.commitEdit()}
                          ></textarea>
                        </li>
                      `:r`
                        <li
                          data-row-key=${`idea:${n.id}`}
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
                          >${sr(n.text)}</span>
                          <button
                            type="button"
                            class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                            style="width:14px;height:14px;display:inline-flex;"
                            title="Delete idea"
                            @click=${o=>{o.stopPropagation(),this.deleteIdea(n.id)}}
                          >
                            ${X(Eh)}
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
                        @paste=${Is}
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
            `:h}
      </section>
    `}};ae([b({type:Boolean})],ee.prototype,"tabbed",2);ae([c()],ee.prototype,"collapsed",2);ae([c()],ee.prototype,"showHidden",2);ae([c()],ee.prototype,"editingTitle",2);ae([c()],ee.prototype,"titleValue",2);ae([c()],ee.prototype,"ideas",2);ae([c()],ee.prototype,"highlightIds",2);ae([c()],ee.prototype,"adding",2);ae([c()],ee.prototype,"newText",2);ae([c()],ee.prototype,"editingId",2);ae([c()],ee.prototype,"editText",2);ae([c()],ee.prototype,"dragOverId",2);ae([c()],ee.prototype,"dragOverPos",2);ae([c()],ee.prototype,"dragOverCommit",2);ae([c()],ee.prototype,"draggingId",2);ee=ae([k("ideas-section")],ee);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ih}=$r,ho=e=>e,uo=()=>document.createComment(""),Wt=(e,t,s)=>{const i=e._$AA.parentNode,n=t===void 0?e._$AB:t._$AA;if(s===void 0){const o=i.insertBefore(uo(),n),a=i.insertBefore(uo(),n);s=new Ih(o,a,e,e.options)}else{const o=s._$AB.nextSibling,a=s._$AM,l=a!==e;if(l){let d;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(d=e._$AU)!==a._$AU&&s._$AP(d)}if(o!==n||l){let d=s._$AA;for(;d!==o;){const u=ho(d).nextSibling;ho(i).insertBefore(d,n),d=u}}}return s},st=(e,t,s=e)=>(e._$AI(t,s),e),Ah={},Ph=(e,t=Ah)=>e._$AH=t,_h=e=>e._$AH,fi=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(e,t,s)=>{const i=new Map;for(let n=t;n<=s;n++)i.set(e[n],n);return i},Mh=_o(class extends Mo{constructor(e){if(super(e),e.type!==Oo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const n=[],o=[];let a=0;for(const l of e)n[a]=i?i(l,a):a,o[a]=s(l,a),a++;return{values:o,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){const n=_h(e),{values:o,keys:a}=this.dt(t,s,i);if(!Array.isArray(n))return this.ut=a,o;const l=this.ut??=[],d=[];let u,p,m=0,f=n.length-1,x=0,v=o.length-1;for(;m<=f&&x<=v;)if(n[m]===null)m++;else if(n[f]===null)f--;else if(l[m]===a[x])d[x]=st(n[m],o[x]),m++,x++;else if(l[f]===a[v])d[v]=st(n[f],o[v]),f--,v--;else if(l[m]===a[v])d[v]=st(n[m],o[v]),Wt(e,d[v+1],n[m]),m++,v--;else if(l[f]===a[x])d[x]=st(n[f],o[x]),Wt(e,n[m],n[f]),f--,x++;else if(u===void 0&&(u=po(a,x,v),p=po(l,m,f)),u.has(l[m]))if(u.has(l[f])){const M=p.get(a[x]),je=M!==void 0?n[M]:null;if(je===null){const jt=Wt(e,n[m]);st(jt,o[x]),d[x]=jt}else d[x]=st(je,o[x]),Wt(e,n[m],je),n[M]=null;x++}else fi(n[f]),f--;else fi(n[m]),m++;for(;x<=v;){const M=Wt(e,d[v+1]);st(M,o[x]),d[x++]=M}for(;m<=f;){const M=n[m++];M!==null&&fi(M)}return this.ut=a,Ph(e,d),Lo}}),Oh=3e3;let mo=null;function go(){const e=mo;return mo=null,e&&Date.now()-e.at<Oh?e:null}let fo=null,bi=null,xi=null;function Lh(){fo?.close(),fo=null,bi&&clearTimeout(bi),bi=null,xi&&clearTimeout(xi),xi=null}var Nh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,le=(e,t,s,i)=>{for(var n=i>1?void 0:i?Rh(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Nh(t,s,n),n};const Je=["week","ideas","goals"];function bo(e){try{const t=JSON.parse(e||"[]");if(!Array.isArray(t))return[...Je];const s=[...new Set(t.filter(i=>Je.includes(i)))];return[...s,...Je.filter(i=>!s.includes(i))]}catch{return[...Je]}}const vs="slmai.cockpit.plannerTab",jh=6e3,Fe={week:{ls:"slmai.cockpit.weekSection.title",setting:"ui.section.week.title",def:"Shipping this week"},ideas:{ls:"slmai.cockpit.ideasSection.title",setting:"ui.section.ideas.title",def:"Ideas"},goals:{ls:"slmai.cockpit.goalsSection.title",setting:"ui.section.goals.title",def:"Goals"}};let te=class extends ${constructor(){super(...arguments),this.order=[...Je],this.reorderKey=null,this.reorderOver=null,this.reorderAfter=!1,this.orderError="",this.orderSetting="",this.savingOrder=!1,this.orderRevision=0,this.ignoreTabClick=!1,this.tabPress=null,this.active="week",this.titles={week:Fe.week.def,ideas:Fe.ideas.def,goals:Fe.goals.def},this.ideasCount=0,this.goalsCount=0,this.weekCount=0,this.editing=null,this.dragKind=null,this.dragOverTab=null,this.note="",this.noteKind="user",this.noteTimer=null,this.onPlannerNote=e=>{const t=e.detail;t?.text&&this.showNote(t.text,t.kind)},this.onAgentFollow=()=>{const e=go();e&&this.follow(e)},this.refreshOrder=async()=>{if(!(!this.orderSetting||this.savingOrder||this.tabPress||this.editing||document.visibilityState==="hidden"))try{const e=this.orderRevision,t=await S.settings.list();if(this.savingOrder||this.tabPress||e!==this.orderRevision)return;this.order=bo(t[this.orderSetting]),localStorage.setItem(this.orderSetting,JSON.stringify(this.order))}catch{}},this.onTabPointerMove=e=>{const t=this.tabPress;if(!(!t||t.pointerId!==e.pointerId)){if(!this.reorderKey){const s=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y);if(i>6&&i>s){this.cancelTabReorder();return}if(s<=6)return;this.reorderKey=t.key}e.preventDefault(),this.reorderOver=null;for(const s of this.querySelectorAll("[data-planner-tab]")){const i=s.getBoundingClientRect();if(!(e.clientX<i.left||e.clientX>i.right||e.clientY<i.top-16||e.clientY>i.bottom+16)){this.reorderOver=s.dataset.plannerTab,this.reorderAfter=e.clientX>i.left+i.width/2;break}}}},this.onTabPointerUp=e=>{if(this.tabPress?.pointerId!==e.pointerId)return;const t=this.reorderKey,s=this.reorderOver,i=this.reorderAfter;t&&(this.ignoreTabClick=!0,setTimeout(()=>{this.ignoreTabClick=!1},0)),this.cancelTabReorder(),t&&s&&this.moveTab(t,s,i)},this.cancelTabReorder=()=>{this.tabPress=null,this.reorderKey=this.reorderOver=null,window.removeEventListener("pointermove",this.onTabPointerMove),window.removeEventListener("pointerup",this.onTabPointerUp),window.removeEventListener("pointercancel",this.cancelTabReorder)},this.cancelReorderKey=e=>{e.key==="Escape"&&this.cancelTabReorder()},this.onIdeasChanged=()=>{this.loadIdeasCount(),this.loadCounts()},this.onCountsStale=()=>void this.loadCounts(),this.onOpsEvent=e=>{e.detail?.action==="refresh"&&(this.loadIdeasCount(),this.loadCounts())},this.onIdeasCount=e=>{const t=e.detail?.count;typeof t=="number"&&(this.ideasCount=t)},this.onDocDragStart=e=>{const t=e.dataTransfer?.types;t&&(t.includes("text/x-idea-id")?this.dragKind="idea":t.includes("text/x-commit-id")?this.dragKind="commit":this.dragKind=null)},this.onDocDragEnd=()=>{this.dragKind=null,this.dragOverTab=null}}connectedCallback(){super.connectedCallback();const e=localStorage.getItem(vs);e&&Je.includes(e)&&(this.active=e);const t={...this.titles};for(const i of Je){const n=localStorage.getItem(Fe[i].ls);n&&(t[i]=n)}this.titles=t,fetch("/api/settings").then(i=>i.json()).then(i=>{const n={...this.titles};for(const o of Je){const a=i[Fe[o].setting];a&&(n[o]=a,localStorage.setItem(Fe[o].ls,a))}this.titles=n}).catch(()=>{}),this.loadOrder(),window.addEventListener("focus",this.refreshOrder),document.addEventListener("visibilitychange",this.refreshOrder),document.addEventListener("keydown",this.cancelReorderKey),this.loadIdeasCount(),this.loadCounts(),this.unsubCounts=g.subscribe((i,n)=>{i.goals!==n.goals&&(this.goalsCount=i.goals.filter(o=>o.status==="active").length),i.commitments!==n.commitments&&(this.weekCount=i.commitments.filter(o=>!o.done).length)}),window.addEventListener("focus",this.onCountsStale),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("mana-ideas-count",this.onIdeasCount),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("dragstart",this.onDocDragStart),document.addEventListener("dragend",this.onDocDragEnd),document.addEventListener("mana-agent-follow",this.onAgentFollow);const s=go();s&&this.follow(s),document.addEventListener("mana-planner-note",this.onPlannerNote)}disconnectedCallback(){super.disconnectedCallback(),this.cancelTabReorder(),window.removeEventListener("focus",this.refreshOrder),document.removeEventListener("visibilitychange",this.refreshOrder),document.removeEventListener("keydown",this.cancelReorderKey),this.unsubCounts?.(),window.removeEventListener("focus",this.onCountsStale),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("mana-ideas-count",this.onIdeasCount),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("dragstart",this.onDocDragStart),document.removeEventListener("dragend",this.onDocDragEnd),document.removeEventListener("mana-agent-follow",this.onAgentFollow),document.removeEventListener("mana-planner-note",this.onPlannerNote),this.noteTimer&&clearTimeout(this.noteTimer)}showNote(e,t){this.note=e,this.noteKind=t,this.noteTimer&&clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>{this.note=""},jh)}async follow(e){const t=document.activeElement,s=!!t&&this.contains(t)&&/^(INPUT|TEXTAREA)$/.test(t.tagName);if(!e.stay&&!s&&!this.editing&&this.active!==e.view){this.active=e.view;try{localStorage.setItem(vs,e.view)}catch{}}this.showNote(e.note,"agent");const i=g.getState();!s&&e.view==="week"&&e.week&&e.week!==i.currentWeek&&await i.setWeek(e.week).catch(()=>{}),await this.updateComplete;const n={action:"refresh",week:g.getState().currentWeek??e.week,changed:e.changed,added:e.added};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}async loadOrder(){try{const e=await fetch("/api/me");if(!e.ok)return;const t=await e.json();this.orderSetting=`user:${t.login}:planner.tab_order`,this.order=bo(localStorage.getItem(this.orderSetting)),await this.refreshOrder()}catch{}}async moveTab(e,t,s){if(!this.orderSetting||this.savingOrder||e===t)return;const i=[...this.order],n=this.order.filter(o=>o!==e);if(n.splice(n.indexOf(t)+(s?1:0),0,e),!n.every((o,a)=>o===i[a])){this.orderRevision+=1,this.order=n,this.orderError="",this.savingOrder=!0;try{await g.getState().setSetting(this.orderSetting,JSON.stringify(n));try{localStorage.setItem(this.orderSetting,JSON.stringify(n))}catch{}}catch{this.order=i,this.orderError="Tab order could not be saved. Try again."}finally{this.savingOrder=!1}}}onTabPointerDown(e,t){this.editing||this.savingOrder||!this.orderSetting||e.pointerType==="mouse"&&e.button!==0||(this.tabPress={key:t,x:e.clientX,y:e.clientY,pointerId:e.pointerId},window.addEventListener("pointermove",this.onTabPointerMove,{passive:!1}),window.addEventListener("pointerup",this.onTabPointerUp),window.addEventListener("pointercancel",this.cancelTabReorder))}onTabOrderKey(e,t){if(!e.altKey||!["ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const s=this.order.indexOf(t),i=this.order[s+(e.key==="ArrowLeft"?-1:1)];i&&this.moveTab(t,i,e.key==="ArrowRight")}async loadCounts(){try{const[e,t]=await Promise.all([fetch("/api/goals").then(s=>s.json()),fetch("/api/week").then(s=>s.json())]);this.goalsCount=e.goals?.filter(s=>s.status==="active").length??0,this.weekCount=t.commitments?.filter(s=>!s.done).length??0}catch{}}async loadIdeasCount(){try{const t=await(await fetch("/api/ideas")).json();this.ideasCount=t.ideas?.filter(s=>!s.hidden).length??0,t.ideas&&br(t.ideas)}catch{}}select(e){if(!(this.editing||this.ignoreTabClick)){this.active=e;try{localStorage.setItem(vs,e)}catch{}this.loadCounts()}}isDropTarget(e){return this.dragKind==="idea"?e==="week":this.dragKind==="commit"?e==="ideas":!1}onTabDragOver(e,t){this.isDropTarget(t)&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this.dragOverTab=t)}onTabDragLeave(e){this.dragOverTab===e&&(this.dragOverTab=null)}async onTabDrop(e,t){if(!this.isDropTarget(t))return;e.preventDefault();const s=this.dragKind;this.dragKind=null,this.dragOverTab=null;const i=(e.dataTransfer?.getData("text/plain")||"").trim();if(i){if(s==="commit"){const n=Number(e.dataTransfer?.getData("text/x-commit-id"));n&&await nr(n,i)}else if(s==="idea"){const n=Number(e.dataTransfer?.getData("text/x-idea-id"));if(!n||!await or(n,i))return;this.active="week";try{localStorage.setItem(vs,"week")}catch{}}}}startRename(e,t){e.stopPropagation(),!(this.ignoreTabClick||this.reorderKey)&&(this.active=t,this.editing=t)}commitRename(e,t){const s=t.trim()||Fe[e].def;this.editing=null,this.titles={...this.titles,[e]:s},localStorage.setItem(Fe[e].ls,s),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[Fe[e].setting]:s})})}onRenameKey(e,t){e.key==="Enter"?(e.preventDefault(),this.commitRename(t,e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=null)}renderTab(e){if(this.editing===e)return r`<input
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
      ${this.reorderOver===e&&this.reorderKey!==e?r`<span aria-hidden="true" style="position:absolute;top:2px;bottom:2px;width:2px;border-radius:2px;background:var(--accent);${this.reorderAfter?"right:0;":"left:0;"}"></span>`:h}
      <span>${this.titles[e]}</span>
      ${this.countFor(e)>0?r`<span
            class="text-[11px] font-normal text-muted px-1.5 py-0.5 rounded-full leading-none"
            style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
            >${this.countFor(e)}</span
          >`:h}
    </button>`}countFor(e){return e==="ideas"?this.ideasCount:e==="goals"?this.goalsCount:this.weekCount}render(){return r`
      <div class="planner-tabs flex items-center gap-1 pt-3 pb-2 overflow-x-auto">
        ${Mh(this.order,e=>e,e=>this.renderTab(e))}
        ${this.note?r`<span
              class="ml-auto pl-3 min-w-0 inline-flex items-center gap-1.5 text-xs text-muted"
              role=${this.noteKind==="error"?"alert":"status"}
              title=${this.noteKind==="agent"?"Changed by an agent":h}
              ><span class="shrink-0 w-1.5 h-1.5 rounded-full" style="background:var(${this.noteKind==="error"?"--nsc-red":"--nsc-green"});"></span
              ><span class="truncate">${this.note}</span></span
            >`:h}
      </div>
      ${this.orderError?r`<div role="alert" class="text-sm text-red-500">${this.orderError}</div>`:h}
      <div class="planner-panel">
        ${this.active==="week"?r`<week-section tabbed></week-section>`:h}
        ${this.active==="ideas"?r`<ideas-section tabbed></ideas-section>`:h}
        ${this.active==="goals"?r`<goals-section tabbed></goals-section>`:h}
      </div>
    `}};le([c()],te.prototype,"order",2);le([c()],te.prototype,"reorderKey",2);le([c()],te.prototype,"reorderOver",2);le([c()],te.prototype,"reorderAfter",2);le([c()],te.prototype,"orderError",2);le([c()],te.prototype,"active",2);le([c()],te.prototype,"titles",2);le([c()],te.prototype,"ideasCount",2);le([c()],te.prototype,"goalsCount",2);le([c()],te.prototype,"weekCount",2);le([c()],te.prototype,"editing",2);le([c()],te.prototype,"dragKind",2);le([c()],te.prototype,"dragOverTab",2);le([c()],te.prototype,"note",2);le([c()],te.prototype,"noteKind",2);te=le([k("planner-tabs")],te);const de=112,L=12,fe=8,tn=(e,t,s)=>({left:e.x,top:e.y,right:e.x+t,bottom:e.y+s});function sn(e,t,s=0){return e.left<t.right+s&&e.right>t.left-s&&e.top<t.bottom+s&&e.bottom>t.top-s}const Fh=2*de,Bh=e=>e.bottom-e.top<=Fh,Ie=(e,t,s)=>Math.max(t,Math.min(s,e)),Ze=e=>e.height-(e.insetBottom??0);function xo(e,t,s=de){const i=e.width-L-s;let n=Ze(e)-L-s;for(let o=0;o<8;o++){const a=t.find(l=>sn(tn({x:i,y:n},s,s),l,fe));if(!a)break;n=a.top-fe-s}return{x:i,y:Ie(n,L,Ze(e)-L-s)}}function ji(e,t,s=de){return xr(e,t,{width:s,height:s})}function xr(e,t,s){return{x:Ie(e.x,L,t.width-L-s.width),y:Ie(e.y,L,Ze(t)-L-s.height)}}const vr=(e,t)=>({w:Math.max(0,e.width-2*L-t),h:Math.max(0,Ze(e)-2*L-t)});function Uh(e,t,s=de){const{w:i,h:n}=vr(t,s);return{xr:i?Ie((e.x-L)/i,0,1):1,yr:n?Ie((e.y-L)/n,0,1):1}}function zh(e,t,s=de){const{w:i,h:n}=vr(t,s);return{x:Math.round(L+Ie(e.xr,0,1)*i),y:Math.round(L+Ie(e.yr,0,1)*n)}}const Hh=32;function qh(e,t){return Math.hypot(e.x-t.x,e.y-t.y)<=Hh}function Kh(e,t,s,i=de){let{x:n,y:o}=ji(e,t,i);for(let a=0;a<8;a++){const l=s.find(u=>sn(tn({x:n,y:o},i,i),u,fe));if(!l)break;const d=l.top-fe-i;o=d>=L?d:l.bottom+fe}return ji({x:n,y:o},t,i)}function vo(e,t,s=de){const i=(e.top+e.bottom)/2-s/2;if(t.width-e.right>=s+2*fe)return{x:e.right+fe,y:Ie(i,L,Ze(t)-L-s),side:"right"};const n=Ie(e.right-s-fe,L,t.width-L-s);return e.bottom+fe+s<=Ze(t)-L?{x:n,y:e.bottom+fe,side:"below"}:{x:n,y:Math.max(L,e.top-fe-s),side:"above"}}function vi(e){return Math.min(340,e.width-2*L)}function Wh(e,t,s,i,n=de){const o=e.x+n/2<t.width/2,a=Ie(o?e.x:e.x+n-s.width,L,t.width-L-s.width),l=e.y-fe-s.height,d=e.y+n+fe,u=l>=L,p=d+s.height<=Ze(t)-L,m=[u?l:null,p?d:null].filter(v=>v!==null),x=m.find(v=>!i||!sn(tn({x:a,y:v},s.width,s.height),i,4))??m[0]??Ie(l,L,Ze(t)-L-s.height);return{x:a,y:x}}function yo(e){return`${e.kind==="commitment"?"commit":e.kind}:${e.id}`}const Gh=`
.mc-avatar {
  position: fixed; z-index: 60; width: ${de}px; height: ${de}px; padding: 0; border: 0; border-radius: 12px;
  background: transparent; box-shadow: none; cursor: pointer; color: var(--ink);
  transition: left 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
  touch-action: none; user-select: none; -webkit-user-select: none; overflow: visible;
}
.mc-avatar[data-dragging] { transition: none; cursor: grabbing; }
.mc-avatar mana-owl { width: 100%; height: 100%; display: block; }
.mc-avatar:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.mc-bubble {
  position: fixed; z-index: 60; box-sizing: border-box; padding: 10px 12px 12px;
  background: var(--surface); color: var(--ink); border-radius: 14px;
  box-shadow: var(--card-shadow), 0 10px 30px rgb(0 0 0 / 0.16); font-size: 14px; line-height: 1.45;
  cursor: grab; touch-action: none;
}
.mc-bubble[data-dragging] { cursor: grabbing; user-select: none; -webkit-user-select: none; }
.mc-mine { color: var(--muted); margin: 0 0 4px; overflow-wrap: anywhere; }
.mc-about { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; color: var(--muted); font-size: 13px; margin: 0 0 4px; overflow-wrap: anywhere; }
.mc-forget { flex: none; border: 0; background: none; color: var(--muted); font: inherit; padding: 0 6px; border-radius: 6px; cursor: pointer; }
.mc-forget:hover, .mc-forget:focus-visible { background: var(--hover); outline: none; }
.mana-companion-focus { outline: 1.5px solid color-mix(in srgb, var(--accent) 35%, transparent); outline-offset: 2px; border-radius: 8px; }
.mc-reply { margin: 0 0 6px; white-space: pre-wrap; overflow-wrap: anywhere; max-height: 45vh; overflow-y: auto; overscroll-behavior: contain; touch-action: pan-y; cursor: auto; }
.mc-line { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin: 0 0 4px; font-size: 13px; color: var(--muted); }
.mc-line[data-kind="action"] { color: var(--ink); }
.mc-line[data-kind="error"] { color: var(--warn); }
.mc-undo { flex: none; border: 0; background: none; color: var(--accent); font: inherit; padding: 2px 8px; border-radius: 6px; cursor: pointer; }
.mc-undo:hover, .mc-undo:focus-visible { background: var(--hover); outline: none; }
.mc-status { color: var(--muted); font-size: 13px; margin: 0 0 6px; }
.mc-draft { margin: 0 0 8px; }
.mc-draft-label { margin: 0 0 4px; font-size: 13px; color: var(--muted); }
.mc-diff { max-height: 40vh; overflow-y: auto; overscroll-behavior: contain; touch-action: pan-y; scrollbar-gutter: stable; cursor: auto; margin: 0 0 6px; font-size: 13px; line-height: 1.45; }
.mc-diff-line { margin: 0; padding: 2px 6px 2px 20px; position: relative; white-space: pre-wrap; overflow-wrap: anywhere; border-radius: 6px; }
.mc-diff-line::before { position: absolute; left: 6px; top: 2px; color: var(--muted); }
.mc-diff-line[data-kind="del"] { color: var(--muted); text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--muted) 60%, transparent); }
.mc-diff-line[data-kind="del"]::before { content: "−"; }
.mc-diff-line[data-kind="add"] { background: var(--accent-soft); }
.mc-diff-line[data-kind="add"]::before { content: "+"; color: var(--accent); }
.mc-diff-line[data-kind="same"] { color: var(--muted); }
.mc-diff-gap { margin: 0; padding: 0 6px 0 20px; color: var(--muted); }
.mc-picks { display: flex; flex-direction: column; align-items: stretch; gap: 1px; margin: 0 0 6px; }
.mc-pick { border: 0; background: none; color: var(--accent); font: inherit; font-size: 13px; text-align: left; padding: 3px 6px; border-radius: 6px; cursor: pointer; overflow-wrap: anywhere; }
.mc-pick:hover, .mc-pick:focus-visible { background: var(--hover); outline: none; }
.mc-pick:disabled { opacity: 0.5; cursor: default; }
.mc-confirm-text { margin: 0 0 6px; font-size: 13px; line-height: 1.45; color: var(--ink); }
.mc-link { color: var(--accent); white-space: nowrap; }
.mc-draft-actions { display: flex; align-items: center; gap: 4px; margin: 0; }
.mc-apply { flex: none; border: 0; background: var(--accent); color: #fff; font: inherit; font-size: 13px; font-weight: 600; padding: 3px 12px; border-radius: 8px; cursor: pointer; transition: opacity 0.12s; }
.mc-apply:hover, .mc-apply:focus-visible { opacity: 0.9; outline: none; }
.mc-apply:focus-visible { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 40%, transparent); }
.mc-apply:disabled, .mc-undo:disabled { opacity: 0.5; cursor: default; }
.mc-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.mc-dots::after { content: "..."; display: inline-block; width: 1.2em; animation: mc-dots 1.2s steps(4, end) infinite; overflow: hidden; vertical-align: bottom; }
.mc-form { margin: 0; display: flex; align-items: flex-end; gap: 6px; }
.mc-input {
  box-sizing: border-box; flex: 1; min-width: 0; display: block; padding: 8px 10px; border: 0.5px solid var(--line); border-radius: 10px;
  background: var(--bg); color: var(--ink); font: inherit; font-size: 16px; line-height: 1.4; outline: none; cursor: text;
  resize: none; overflow-y: hidden; max-height: 148px;
}
.mc-input:focus { border-color: color-mix(in srgb, var(--accent) 55%, var(--line)); }
.mc-mic { flex: none; width: 36px; height: 36px; padding: 0; border: 0; border-radius: 999px; background: none; color: var(--muted); display: grid; place-items: center; cursor: pointer; }
.mc-mic:hover, .mc-mic:focus-visible { background: var(--hover); color: var(--ink); outline: none; }
.mc-mic[data-state="listening"] { color: var(--warn); background: color-mix(in srgb, var(--warn) 12%, transparent); }
.mc-mic[data-state="listening"] svg { animation: mc-pulse 1.2s ease-in-out infinite; }
.mc-mic:disabled { opacity: 0.5; cursor: progress; }
.mana-companion-pointed.mana-companion-pointed, .mana-companion-pointed.mana-companion-pointed * { font-weight: 650; }
.mana-companion-pointed { outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px; border-radius: 8px; }
@keyframes mc-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes mc-flash { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--nsc-green) 55%, transparent); } 100% { box-shadow: 0 0 0 12px transparent; } }
@keyframes mc-dots { from { width: 0; } to { width: 1.2em; } }
@keyframes mc-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@media (prefers-reduced-motion: reduce) {
  .mc-avatar { transition: none; }
  .mc-avatar[data-state="thinking"] img, .mc-avatar[data-state="done"], .mc-dots::after, .mc-mic[data-state="listening"] svg { animation: none; }
}
`;function Vh(e=document){if(e.getElementById("mana-companion-styles"))return;const t=e.createElement("style");t.id="mana-companion-styles",t.textContent=Gh,e.head.appendChild(t)}const Qh=["hop","nod","tilt","squint","ruffle","happy","surprised","sleepy","fly"],Be="Can't reach Mana right now.";function Yh(e){let t="message";const s=[];for(const n of e.split(`
`))!n||n.startsWith(":")||(n.startsWith("event:")?t=n.slice(6).trim():n.startsWith("data:")&&s.push(n.slice(5).trimStart()));if(!s.length)return null;let i;try{i=JSON.parse(s.join(`
`))}catch{return null}switch(t){case"text":return{type:"text",text:String(i.text??"")};case"action":return{type:"action",action:i};case"draft":return typeof i.id=="string"&&Array.isArray(i.lines)?{type:"draft",draft:i}:null;case"notes":return typeof i.query=="string"&&Array.isArray(i.hits)&&i.hits.length?{type:"notes",found:i}:null;case"confirm":return typeof i.id=="string"&&typeof i.noteFile=="string"&&(i.kind==="publish"||i.kind==="unpublish")?{type:"confirm",confirm:i}:null;case"point":return i.ref?{type:"point",ref:i.ref,title:String(i.title??"")}:null;case"mood":return i.mood==="happy"||i.mood==="calm"||i.mood==="surprised"||i.mood==="sleepy"?{type:"mood",mood:i.mood}:null;case"move":return Qh.includes(i.move)?{type:"move",move:i.move}:null;case"notice":return{type:"notice",text:String(i.text??"")};case"error":return{type:"error",error:String(i.error??Be)};case"done":return{type:"done",firstTokenMs:typeof i.firstTokenMs=="number"?i.firstTokenMs:null,ms:Number(i.ms)||0};default:return null}}async function*Jh(e,t){let s;try{s=await fetch("/api/companion/turn",{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify(e),signal:t})}catch{t?.aborted||(yield{type:"error",error:Be});return}if(!s.ok||!s.body){yield{type:"error",error:Be};return}const i=s.body.getReader(),n=new TextDecoder;let o="";try{for(;;){const{done:a,value:l}=await i.read();if(a)break;o+=n.decode(l,{stream:!0});for(let d;(d=o.indexOf(`

`))!==-1;){const u=Yh(o.slice(0,d));o=o.slice(d+2),u&&(yield u)}}}catch{t?.aborted||(yield{type:"error",error:Be})}finally{try{i.releaseLock()}catch{}}}async function St(e,t){try{const s=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});return s.ok?await s.json():null}catch{return null}}class Xh{constructor(){this.ctx=null,this.stream=null,this.node=null,this.chunks=[],this.rate=48e3}get active(){return!!this.ctx}async start(){if(this.ctx)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0}});const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.rate=this.ctx.sampleRate,this.chunks=[];const s=this.ctx.createMediaStreamSource(this.stream);this.node=this.ctx.createScriptProcessor(4096,1,1),this.node.onaudioprocess=i=>{this.chunks.push(new Float32Array(i.inputBuffer.getChannelData(0)))},s.connect(this.node),this.node.connect(this.ctx.destination)}async stop(){const t=this.chunks,s=this.rate;await this.release();const i=t.reduce((a,l)=>a+l.length,0);if(i<s*.3)return null;const n=new Float32Array(i);let o=0;for(const a of t)n.set(a,o),o+=a.length;return Rc(Nc(n,s,Ln),Ln)}async cancel(){await this.release()}async release(){this.node?.disconnect(),this.stream?.getTracks().forEach(s=>s.stop());const t=this.ctx;this.ctx=null,this.node=null,this.stream=null,this.chunks=[],await t?.close().catch(()=>{})}}const Zh=["idle","listening","curious","thinking","happy","surprised","sleepy","sleeping","waking","flying"],wo={happy:6800,surprised:4800,waking:6200,flying:8600},eu=12e4,tu=3e5;function Os(e){return typeof e=="string"&&Zh.includes(e)}function su(e){return e>=tu?"sleeping":e>=eu?"sleepy":"idle"}function iu(e){return Os(e.override)?e.override:e.dictation==="listening"?"listening":e.reaction==="surprised"?"surprised":e.sending||e.dictation==="writing"?"thinking":e.reaction?e.reaction:e.curious?"curious":e.open?"listening":e.rest}var nu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Rt=(e,t,s,i)=>{for(var n=i>1?void 0:i?ou(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&nu(t,s,n),n};let et=class extends ke{constructor(){super(...arguments),this.state="idle",this.trigger=0,this.ready=!1,this.generation=0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.start()}firstUpdated(){this.start()}updated(e){(e.has("state")||e.has("trigger"))&&this.renderer?.setState(Os(this.state)?this.state:"idle",{restart:e.has("trigger")})}disconnectedCallback(){super.disconnectedCallback(),this.generation++,clearTimeout(this.preloadTimer),this.abort?.abort(),this.renderer?.destroy(),this.renderer=void 0,this.ready=!1}async start(){const e=++this.generation;this.abort?.abort(),this.abort=new AbortController;try{const{createOwlRenderer:t}=await Ue(async()=>{const{createOwlRenderer:i}=await import("./owl-renderer-Dpy1ew0Q.js");return{createOwlRenderer:i}},[]);if(e!==this.generation||!this.isConnected)return;const s=await t(this.art,this.effects,{signal:this.abort.signal,onUnavailable:()=>{this.ready=!1}});if(e!==this.generation||!this.isConnected){s.destroy();return}this.renderer=s,await s.setState(Os(this.state)?this.state:"idle"),this.ready=!0,this.preloadTimer=setTimeout(()=>this.preload(),6e3)}catch(t){t.name!=="AbortError"&&(this.ready=!1)}}hold(e){this.renderer?.hold(e)}carry(e,t){this.renderer?.carry(e,t)}preload(){this.renderer?.preload()}lookAt(e){this.renderer?.lookAt(e)}gesture(e){return this.renderer?.gesture(e)??!1}render(){return r`<div class="sprite" data-renderer=${this.ready?"animated":"static"} aria-hidden="true">
      <img src=${new URL("/assets/original-DQyfsRdb.webp",import.meta.url).href} alt="" draggable="false" ?hidden=${this.ready}>
      <canvas class="art" width="256" height="256" ?hidden=${!this.ready}></canvas>
      <canvas class="effects" width="256" height="256" ?hidden=${!this.ready}></canvas>
    </div>`}};et.styles=Ae`
    :host{display:block;width:100%;height:100%;pointer-events:none;color:inherit}
    .sprite{position:relative;width:100%;height:100%}
    img,canvas{display:block;position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;user-select:none;-webkit-user-drag:none}
    canvas{inset:auto;left:-75%;top:-100%;width:250%;height:225%}
    img{object-fit:contain} [hidden]{display:none!important}
  `;Rt([b()],et.prototype,"state",2);Rt([b({type:Number})],et.prototype,"trigger",2);Rt([c()],et.prototype,"ready",2);Rt([J("canvas.art")],et.prototype,"art",2);Rt([J("canvas.effects")],et.prototype,"effects",2);et=Rt([k("mana-owl")],et);var ru=Object.defineProperty,au=Object.getOwnPropertyDescriptor,R=(e,t,s,i)=>{for(var n=i>1?void 0:i?au(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ru(t,s,n),n};const lu=1e4,ko=3e4,cu=9e4,du=6,hu=1e3,uu=2e3,pu=2400,$o=5*6e4,mu=2*6e4,gu=150,fu=4e3,yi=[5e3,9e3],bu=1200,xu=25e3,vu=8e3,yu=["hop","nod","tilt","squint","ruffle"],wu=4*6e4,So=["squint","hop","nod"],ku="p, li, h1, h2, h3, h4, h5, h6, td, th, dt, dd, blockquote, pre, label, figcaption, [contenteditable='true']",$u=15e3,Co=148,Su=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,Cu="slmai.cockpit.plannerTab",Fi="slmai.companion.spot";let N=class extends ${constructor(){super(...arguments),this.owner=!1,this.avatar="/office-avatars/mana.svg",this.animationState="auto",this.reaction=null,this.reactionTrigger=0,this.rest="idle",this.lastActivity=Date.now(),this.restTimer=null,this.reactionTimer=null,this.doneTimer=null,this.open=!1,this.sending=!1,this.mine="",this.reply="",this.lines=[],this.slow=!1,this.pointing=null,this.pos={x:-100,y:-100},this.bubble={x:-1e3,y:-1e3},this.justActed=!1,this.spot=Eu(),this.dragging=!1,this.visiting=null,this.sitting=null,this.highlight=null,this.touched=null,this.abort=null,this.slowTimer=null,this.idleTimer=null,this.chipTimer=null,this.dictation="off",this.recorder=new Xh,this.takeTimer=null,this.typeArmedUntil=0,this.frame=0,this.drag=null,this.dragged=!1,this.visitTimer=null,this.watching=null,this.boredUntil=0,this.stareTimer=null,this.lingerTimer=null,this.lastTilt=0,this.lastGreeting=0,this.lastGreetingKind=null,this.lastReaction=null,this.onWatch=e=>{if(e.pointerType==="touch"||!this.owner||!this.owl)return;const t=Date.now();if(!(!this.dragging&&!this.pointing&&Math.hypot(e.clientX-(this.pos.x+de/2),e.clientY-(this.pos.y+de/2))<=gu)){this.stopWatching();return}t<this.boredUntil||(this.watching===null&&(this.watching=t,this.stareTimer=setTimeout(this.loseInterest,fu)),this.owl.lookAt({x:e.clientX,y:e.clientY}),this.lingerTimer&&clearTimeout(this.lingerTimer),this.lingerTimer=setTimeout(this.onLinger,bu))},this.loseInterest=()=>{this.stopWatching(),this.boredUntil=Date.now()+yi[0]+Math.random()*(yi[1]-yi[0])},this.onLinger=()=>{this.lingerTimer=null,!(this.watching===null||Date.now()-this.lastTilt<xu||Math.random()>.6)&&this.owl?.gesture("tilt")&&(this.lastTilt=Date.now())},this.onPointerOut=e=>{e.relatedTarget||this.stopWatching()},this.onHover=e=>{if(this.owl?.preload(),e.pointerType==="touch"||this.dragging||this.reaction||this.sending||this.rest!=="idle")return;const t=Date.now();if(t-this.lastGreeting<vu)return;const s=yu.filter(n=>n!==this.lastGreetingKind),i=s[Math.floor(Math.random()*s.length)];this.owl?.gesture(i)&&(this.lastGreeting=t,this.lastGreetingKind=i)},this.onActivity=()=>{if(this.lastActivity=Date.now(),this.rest!=="idle"){const e=this.rest==="sleeping";this.rest="idle",e&&this.playAnimation("waking")}},this.updateRest=()=>{if(this.owner){if(this.open||this.sending||this.dictation!=="off"||this.dragging){this.lastActivity=Date.now(),this.rest="idle";return}this.rest=su(Date.now()-this.lastActivity)}},this.schedulePlace=()=>{this.frame||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.place()}))},this.toggle=()=>{if(this.dragged){this.dragged=!1;return}this.open?this.collapse():this.show()},this.onOutside=e=>{if(e.composedPath().includes(this))return;const t=e.target?.closest?.("[data-row-key]");t?.dataset.rowKey&&(this.touched={key:t.dataset.rowKey,text:wi(t,200),at:Date.now()}),this.open&&this.collapse()},this.onSelection=()=>{const e=document.getSelection();if(!e||e.isCollapsed||!e.rangeCount)return;const t=e.anchorNode,s=t instanceof Element?t:t?.parentElement??null;if(!s||this.contains(s))return;const i=e.toString().replace(/\s+/g," ").trim().slice(0,1e3);i.length<2||i===this.highlight?.text||(this.highlight={key:s.closest("[data-row-key]")?.dataset.rowKey??null,text:i,at:Date.now()})},this.onKey=e=>{const t=As(g.getState().settings?.[Xt])??As(Jt);if(!e.repeat&&Fc(t,e)){e.preventDefault(),this.toggleDictation();return}if(e.key==="Escape"&&this.dictation==="listening"){e.preventDefault(),this.cancelDictation();return}if(e.key==="Escape"&&(this.open||this.pointing)){e.preventDefault(),this.collapse();return}!this.open&&Date.now()<this.typeArmedUntil&&e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!Tu(document.activeElement)&&(e.preventDefault(),this.typeArmedUntil=0,this.show(),this.updateComplete.then(()=>{this.input&&(this.input.value+=e.key,this.grow())}))},this.onInputKey=e=>{e.key==="Enter"&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),this.send(this.input?.value??""))},this.onInput=()=>{this.touch(),this.grow()},this.grow=()=>{const e=this.input;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,Co)}px`,e.style.overflowY=e.scrollHeight>Co?"auto":"hidden",this.schedulePlace())},this.touch=()=>{this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>{if(this.sending||this.dictation!=="off"||document.activeElement===this.input&&this.input?.value)return this.touch();this.collapse(),this.mine="",this.reply="",this.lines=[]},cu)},this.onSubmit=e=>{e.preventDefault(),this.send(this.input?.value??"")},this.onPointerDown=e=>{e.button!==0||this.pointing||this.startDrag(e,!0)},this.onBubbleDown=e=>{this.touch(),!(e.button!==0||this.pointing)&&(e.target?.closest("input, textarea, button, a, select, [contenteditable], .mc-diff, .mc-reply")||this.startDrag(e,!1))},this.onPointerMove=e=>{const t=this.drag;if(!t||e.pointerId!==t.id||!t.moved&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)<du)return;t.moved||window.getSelection()?.removeAllRanges(),!t.moved&&t.branch&&(t.fly=setTimeout(()=>{this.drag===t&&(t.flying=!0,this.owl?.hold(!0))},hu)),t.moved=!0,this.dragging=!0,this.endVisit();const s=this.viewport(),i=this.pos;this.pos=ji({x:e.clientX-t.dx,y:e.clientY-t.dy},s),t.branch&&this.owl?.carry(this.pos.x-i.x,this.pos.y-i.y),t.bo&&(this.bubble=xr({x:this.pos.x+t.bo.x,y:this.pos.y+t.bo.y},s,{width:vi(s),height:this.bubbleEl?.offsetHeight??120}))},this.onPointerUp=e=>{const t=this.drag;if(!t||e.pointerId!==t.id||(this.drag=null,t.fly&&clearTimeout(t.fly),!t.moved))return;t.flying&&this.owl?.hold(!1),this.dragging=!1,this.dragged=!0,setTimeout(()=>{this.dragged=!1},0);const s=this.viewport();this.spot=qh(this.pos,xo(s,this.obstacles()))?null:Uh(this.pos,s),Iu(this.spot);const i=this.spot?this.underAvatar():null;i&&this.highlight&&!i.text.includes(this.highlight.text)&&(this.highlight=null),this.setFocus(i),i?.key&&!this.open?this.show():this.open||(this.typeArmedUntil=Date.now()+$u),this.schedulePlace()}}connectedCallback(){super.connectedCallback(),Vh(),window.addEventListener("resize",this.schedulePlace),window.addEventListener("scroll",this.schedulePlace,!0),window.visualViewport?.addEventListener("resize",this.schedulePlace),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("pointermove",this.onActivity,{passive:!0}),document.addEventListener("pointermove",this.onWatch,{passive:!0}),document.addEventListener("pointerout",this.onPointerOut,{passive:!0}),document.addEventListener("pointerdown",this.onActivity,!0),document.addEventListener("keydown",this.onActivity,!0),this.restTimer=setInterval(this.updateRest,15e3),this.schedulePlace()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.schedulePlace),window.removeEventListener("scroll",this.schedulePlace,!0),window.visualViewport?.removeEventListener("resize",this.schedulePlace),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("pointermove",this.onActivity),document.removeEventListener("pointermove",this.onWatch),document.removeEventListener("pointerout",this.onPointerOut),document.removeEventListener("pointerdown",this.onActivity,!0),document.removeEventListener("keydown",this.onActivity,!0),this.restTimer&&clearInterval(this.restTimer);for(const e of[this.reactionTimer,this.doneTimer])e&&clearTimeout(e);this.frame&&cancelAnimationFrame(this.frame),this.sitting?.el.classList.remove("mana-companion-focus"),this.takeTimer&&clearTimeout(this.takeTimer),this.recorder.cancel(),this.abort?.abort();for(const e of[this.slowTimer,this.idleTimer,this.chipTimer,this.visitTimer,this.stareTimer,this.lingerTimer])e&&clearTimeout(e);this.clearPointed()}playAnimation(e){if(!Os(e))return;this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=e,this.reactionTrigger++;const t=e in wo?wo[e]:8e3;this.reactionTimer=setTimeout(()=>{this.reaction=null,this.reactionTimer=null},t)}react(e,t=wu){const s=Date.now();if(this.lastReaction?.state===e&&s-this.lastReaction.at<t){e==="happy"&&this.owl?.gesture(So[Math.floor(Math.random()*So.length)]);return}this.lastReaction={state:e,at:s},this.playAnimation(e)}doMove(e){if(e==="hop"||e==="nod"||e==="tilt"||e==="squint"||e==="ruffle"){this.owl?.gesture(e);return}const t=e==="fly"?"flying":e;this.lastReaction={state:t,at:Date.now()},this.playAnimation(t)}stopWatching(){for(const e of[this.stareTimer,this.lingerTimer])e&&clearTimeout(e);this.stareTimer=this.lingerTimer=null,this.watching!==null&&this.owl?.lookAt(null),this.watching=null}viewport(){const e=window.visualViewport;return{width:document.documentElement.clientWidth||window.innerWidth,height:e?e.height+e.offsetTop:window.innerHeight}}obstacles(){const e=[];for(const t of document.querySelectorAll("input:not([type=checkbox]):not([type=radio]):not([type=hidden]), textarea, [contenteditable='true']")){if(this.contains(t))continue;const s=t.getBoundingClientRect();s.width>0&&s.height>0&&Bh(s)&&s.bottom>0&&s.top<window.innerHeight&&e.push(s)}return e}place(){if(this.dragging)return;const e=this.viewport(),t=ki(this.pointing?.el,e),s=t?null:ki(this.visiting,e),i=this.restingPlace(e),n=t?vo(t,e):s?vo(s,e):i;if((n.x!==this.pos.x||n.y!==this.pos.y)&&(this.pos={x:n.x,y:n.y}),this.open){const o=s?i:this.pos,a=this.bubbleEl?.offsetHeight??120,l=Wh(o,e,{width:vi(e),height:a},t??void 0);(l.x!==this.bubble.x||l.y!==this.bubble.y)&&(this.bubble=l)}}restingPlace(e){const t=this.obstacles();return this.spot?Kh(zh(this.spot,e),e,t):xo(e,t)}updated(){this.open&&this.place()}show(){this.open=!0,this.touch(),this.updateComplete.then(()=>{this.place(),this.input?.focus()})}collapse(){this.pointing&&this.dismissPoint(),this.dictation==="listening"&&this.cancelDictation(),this.open=!1,this.input?.blur()}view(){const e=g.getState(),t=e.rightPaneMode;let s=null;if(t==="goals")try{const n=localStorage.getItem(Cu);s=n==="ideas"||n==="goals"?n:"week"}catch{s="week"}const i=Date.now();return{pane:t,tab:s,week:e.currentWeek??null,summary:e.viewContext?.summary??null,note:e.viewContext?.note??null,focus:this.sitting?{key:this.sitting.key,text:this.sitting.text}:null,highlight:this.highlight&&i-this.highlight.at<$o?{key:this.highlight.key,text:this.highlight.text}:null,touched:this.touched&&i-this.touched.at<mu?{key:this.touched.key,text:this.touched.text}:null}}async send(e){const t=e.replace(/\s+/g," ").trim();if(!t||this.sending)return;this.input&&(this.input.value="",this.grow()),this.lines.some(d=>d.kind==="draft"&&d.draft.noteFile)&&await ys();const s=this.pointing;this.abort?.abort();const i=this.abort=new AbortController;this.mine=t,this.reply="",this.lines=[],this.slow=!1,this.sending=!0,this.touch(),this.slowTimer=setTimeout(()=>{this.reply||(this.slow=!0)},lu);let n=!1,o=null,a=null;const l=this.view();this.highlight=null;try{for await(const d of Jh({message:t,view:l},i.signal)){if(i.signal.aborted)return;d.type==="text"?(this.reply+=d.text,this.slow=!1):d.type==="action"?(this.lines=[...this.lines,{kind:"action",action:d.action,until:Date.now()+ko}],d.action.ok?(this.flashDone(),this.visit(d.action.refs),d.action.noteFile&&ws(d.action.noteFile),d.action.openNote&&Eo(d.action.openNote)):this.playAnimation("surprised"),this.armChips()):d.type==="draft"?this.lines=[...this.lines,{kind:"draft",draft:d.draft}]:d.type==="notes"?this.lines=[...this.lines,{kind:"notes",found:d.found}]:d.type==="confirm"?this.lines=[...this.lines.filter(u=>!(u.kind==="confirm"&&u.confirm.id===d.confirm.id)),{kind:"confirm",confirm:d.confirm}]:d.type==="notice"?this.lines=[...this.lines,{kind:"notice",text:d.text}]:d.type==="error"?(this.lines=[...this.lines,{kind:"error",text:d.error||Be}],this.slow=!1,this.playAnimation("surprised")):d.type==="point"?(n=!0,this.startPointing(d.ref,d.title)):d.type==="mood"?o=d.mood:d.type==="move"&&(a=d.move)}}finally{this.abort===i&&(this.sending=!1,this.abort=null,this.slowTimer&&clearTimeout(this.slowTimer),this.slowTimer=null,this.slow&&!this.reply&&!this.lines.length&&(this.lines=[{kind:"error",text:Be}]),this.slow=!1,this.lines.some(u=>u.kind==="error"||u.kind==="action"&&!u.action.ok)?this.react("surprised",2e4):a?this.doMove(a):o&&o!=="calm"&&!n&&this.react(o),s&&!n&&this.pointing===s&&this.endPointing(),this.touch())}}flashDone(){this.justActed=!0,this.react("happy"),this.doneTimer&&clearTimeout(this.doneTimer),this.doneTimer=setTimeout(()=>{this.justActed=!1,this.doneTimer=null},1200)}armChips(){this.chipTimer&&clearTimeout(this.chipTimer);const e=Math.min(...this.lines.filter(t=>t.kind==="action"&&t.until>Date.now()).map(t=>t.until));Number.isFinite(e)&&(this.chipTimer=setTimeout(()=>{this.lines=[...this.lines],this.armChips()},Math.max(50,e-Date.now()+20)))}async undo(e){this.touch();const t=e.action.noteFile;t&&await ys();const s=await St("/api/companion/undo",{id:e.action.id});this.lines=this.lines.map(i=>i===e?{...e,undone:s?.note??"Couldn't undo: can't reach Mana right now."}:i),s?.ok&&t&&ws(t)}async applyDraft(e){if(this.touch(),this.lines.some(n=>n.kind==="draft"&&n.draft.id===e&&n.busy))return;const t=this.lines.find(n=>n.kind==="draft"&&n.draft.id===e)?.draft.noteFile;this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===e?{...n,busy:!0}:n),t&&await ys();const s=await St("/api/companion/draft/apply",{id:e}),i=s?.action??{id:"",ok:!1,note:s?.note??"Couldn't apply: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===e?{kind:"action",action:i,until:Date.now()+ko}:n),i.ok&&this.flashDone(),i.ok&&i.noteFile&&ws(i.noteFile),this.armChips()}async discardDraft(e){this.touch(),this.lines=this.lines.map(s=>s.kind==="draft"&&s.draft.id===e?{...s,busy:!0}:s);const t=await St("/api/companion/draft/discard",{id:e});this.lines=this.lines.map(s=>s.kind==="draft"&&s.draft.id===e?{kind:"notice",text:t?.note??Be}:s)}async pickNote(e,t){if(this.touch(),this.lines.some(n=>n.kind==="notes"&&n.found===e&&n.busy))return;this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===e?{...n,busy:!0}:n);const s=await Eo(t.file),i={id:"",ok:s,note:s?`Opened: ${t.title}`:`Couldn't open ${t.title}: the notes pane didn't answer.`,undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===e?{kind:"action",action:i,until:0}:n)}async confirmNote(e){this.touch();const t=this.lines.find(n=>n.kind==="confirm"&&n.confirm.id===e);if(!t||t.busy)return;this.lines=this.lines.map(n=>n===t?{...t,busy:!0}:n),await ys();const s=await St("/api/companion/confirm/apply",{id:e}),i=s?.action??{id:"",ok:!1,note:s?.note??"Couldn't do that: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="confirm"&&n.confirm.id===e?{kind:"action",action:i,until:0}:n),i.ok?(this.flashDone(),ws(t.confirm.noteFile)):this.react("surprised",2e4)}async discardConfirm(e){this.touch(),this.lines=this.lines.map(s=>s.kind==="confirm"&&s.confirm.id===e?{...s,busy:!0}:s);const t=await St("/api/companion/confirm/discard",{id:e});this.lines=this.lines.map(s=>s.kind==="confirm"&&s.confirm.id===e?{kind:"notice",text:t?.note??Be}:s)}async startPointing(e,t){this.endVisit(),this.clearPointed();const s=g.getState();s.rightPaneMode!=="goals"&&s.setRightPaneMode("goals");const i=await Do(yo(e),2500);if(this.pointing={ref:e,title:t,el:i},!i)return;i.classList.add("mana-companion-pointed");const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;i.scrollIntoView({block:"center",behavior:n?"auto":"smooth"}),setTimeout(this.schedulePlace,n?0:350),this.schedulePlace()}clearPointed(){this.pointing?.el?.classList.remove("mana-companion-pointed")}endPointing(){this.clearPointed(),this.pointing=null,this.schedulePlace()}async dismissPoint(){const e=this.pointing;e&&(this.endPointing(),await St("/api/companion/point/dismiss",e.ref))}startDrag(e,t){const s=this.open?{x:this.bubble.x-this.pos.x,y:this.bubble.y-this.pos.y}:null;this.drag={id:e.pointerId,x0:e.clientX,y0:e.clientY,dx:e.clientX-this.pos.x,dy:e.clientY-this.pos.y,bo:s,moved:!1,branch:t,fly:null,flying:!1},t&&this.owl?.preload(),e.currentTarget.setPointerCapture?.(e.pointerId)}underAvatar(){const e=this.pos.x+de/2,t=this.pos.y+de/2;for(const s of document.elementsFromPoint(e,t)){if(!(s instanceof HTMLElement)||this.contains(s))continue;const i=s.closest("[data-row-key]");if(i)return{key:i.dataset.rowKey??null,text:wi(i,400),el:i};const n=s.closest(ku),o=n?wi(n,uu):"";return n&&o.length>=2?{key:null,text:o,el:n}:null}return null}setFocus(e){this.sitting?.el.classList.remove("mana-companion-focus"),this.sitting=e,e?.el.classList.add("mana-companion-focus")}async visit(e){const t=e?.[0];if(!t||this.pointing||this.dragging||Du())return;const s=await Do(yo(t),1500);!s||this.pointing||this.dragging||!ki(s,this.viewport())||(this.visiting=s,this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=setTimeout(()=>this.endVisit(),pu),this.schedulePlace())}endVisit(){this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=null,this.visiting&&(this.visiting=null,this.schedulePlace())}async toggleDictation(){if(this.dictation!=="writing"){if(this.dictation==="listening")return this.finishDictation();this.open||this.show();try{await this.recorder.start()}catch{this.lines=[...this.lines,{kind:"error",text:"I can't hear you: the mic is blocked for this page."}],this.playAnimation("surprised");return}this.dictation="listening",this.touch(),this.takeTimer=setTimeout(()=>void this.finishDictation(),Lc)}}async finishDictation(){if(this.dictation==="listening"){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing";try{const e=await this.recorder.stop(),t=e?await Bc(e):"";if(t&&this.input){const s=this.input.value.replace(/\s+$/,"");this.input.value=s?`${s} ${t}`:t,this.grow()}}catch{this.lines=[...this.lines,{kind:"error",text:"Couldn't write that down. Try again."}],this.playAnimation("surprised")}finally{this.dictation="off",this.touch(),this.open&&this.input?.focus()}}}async cancelDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,await this.recorder.cancel(),this.dictation="off"}renderDraft(e){const t={del:"Removed: ",add:"Added: ",same:"",gap:""};return r`<div class="mc-draft">
      <p class="mc-draft-label">${e.draft.label}</p>
      <div class="mc-diff">${e.draft.lines.map(s=>s.kind==="gap"?r`<p class="mc-diff-gap" aria-hidden="true">…</p>`:r`<p class="mc-diff-line" data-kind=${s.kind}><span class="mc-sr">${t[s.kind]}</span>${s.text||" "}</p>`)}</div>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!e.busy} @click=${()=>void this.applyDraft(e.draft.id)}>Apply</button>
        <button type="button" class="mc-undo" ?disabled=${!!e.busy} @click=${()=>void this.discardDraft(e.draft.id)}>Not now</button>
      </p>
    </div>`}renderNotes(e){const t=e.found.query;return r`<div class="mc-draft" data-kind="notes">
      <p class="mc-draft-label">${e.found.partial?`Nothing has all of “${t}”. These come close:`:`Notes for “${t}”:`}</p>
      <div class="mc-picks">${e.found.hits.map(s=>r`<button type="button" class="mc-pick" ?disabled=${!!e.busy} @click=${()=>void this.pickNote(e.found,s)}>${s.title}</button>`)}</div>
    </div>`}renderConfirm(e){const t=e.confirm;return r`<div class="mc-draft" data-kind="confirm">
      <p class="mc-draft-label">${t.label}</p>
      <p class="mc-confirm-text">${t.text}</p>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!e.busy} @click=${()=>void this.confirmNote(t.id)}>${e.busy?t.kind==="publish"?"Publishing…":"Unpublishing…":t.button}</button>
        <button type="button" class="mc-undo" ?disabled=${!!e.busy} @click=${()=>void this.discardConfirm(t.id)}>Not now</button>
      </p>
    </div>`}renderLine(e){if(e.kind==="draft")return this.renderDraft(e);if(e.kind==="notes")return this.renderNotes(e);if(e.kind==="confirm")return this.renderConfirm(e);if(e.kind!=="action")return r`<p class="mc-line" data-kind=${e.kind}><span>${To(e.text)}</span></p>`;const t=e.action.ok&&e.action.undoable&&!e.undone&&e.until>Date.now(),s=e.action.ok&&!e.undone&&e.action.url&&/^https:\/\//.test(e.action.url)?e.action.url:null;return r`<p class="mc-line" data-kind=${e.action.ok?"action":"error"}>
      <span>${e.undone??e.action.note}${s?r` <a class="mc-link" href=${s} target="_blank" rel="noopener noreferrer">View post</a>`:h}</span>
      ${t?r`<button type="button" class="mc-undo" @click=${()=>void this.undo(e)}>Undo</button>`:h}
    </p>`}render(){if(!this.owner)return h;const e=this.sending?"thinking":this.justActed?"done":this.pointing?"pointing":"idle",t=ks(g.getState().settings?.[Xt]??Jt),s=this.highlight&&Date.now()-this.highlight.at<$o?this.highlight:null,i=iu({override:this.animationState,dictation:this.dictation,sending:this.sending,reaction:this.reaction,curious:this.rest==="idle"&&!!(this.pointing||this.visiting||this.sitting||s||this.dragging),open:this.open,rest:this.rest}),n=this.pointing&&!this.pointing.el?r`<p class="mc-about">About: ${this.pointing.title}</p>`:s?r`<p class="mc-about"><span>About: “${Io(s.text,80)}”</span><button type="button" class="mc-forget" aria-label="Forget the highlight" @click=${()=>{this.highlight=null}}>×</button></p>`:this.sitting?r`<p class="mc-about"><span>About: ${Io(this.sitting.text,80)}</span><button type="button" class="mc-forget" aria-label="Forget this spot" @click=${()=>this.setFocus(null)}>×</button></p>`:h;return r`
      ${this.open||this.pointing?r`
        <div class="mc-bubble" role="dialog" aria-label="Mana" ?data-dragging=${this.dragging} style="left:${this.bubble.x}px;top:${this.bubble.y}px;width:${vi(this.viewport())}px;${this.open?"":"display:none"}"
          @pointerdown=${this.onBubbleDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp} @keydown=${this.touch}>
          ${this.mine?r`<p class="mc-mine">${this.mine}</p>`:h}
          ${n}
          ${this.reply?r`<p class="mc-reply" aria-live="polite">${To(this.reply.trim())}</p>`:h}
          ${this.sending&&!this.reply&&!this.slow?r`<p class="mc-status"><span class="mc-dots"></span></p>`:h}
          ${this.slow?r`<p class="mc-line" data-kind="error"><span>${Be}</span></p>`:h}
          ${this.lines.map(o=>this.renderLine(o))}
          <form class="mc-form" @submit=${this.onSubmit}>
            <textarea class="mc-input" rows="1" enterkeyhint="send" autocomplete="off" maxlength="2000" aria-label="Say something to Mana"
              placeholder=${this.dictation==="listening"?`Listening. ${t||"The mic"} again to stop.`:this.dictation==="writing"?"Writing it down…":"Say something to Mana"}
              @input=${this.onInput} @keydown=${this.onInputKey}></textarea>
            <button type="button" class="mc-mic" data-state=${this.dictation} aria-label=${this.dictation==="listening"?"Stop and write it down":"Dictate"}
              ?disabled=${this.dictation==="writing"} @click=${()=>void this.toggleDictation()}>${Su}</button>
          </form>
        </div>`:h}
      <button type="button" class="mc-avatar" data-state=${e} data-animation=${i} ?data-dragging=${this.dragging} aria-label=${this.open?"Close Mana":"Talk to Mana"} aria-expanded=${this.open?"true":"false"}
        style="left:${this.pos.x}px;top:${this.pos.y}px;" @click=${this.toggle}
        @pointerdown=${this.onPointerDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp}
        @pointerenter=${this.onHover}>
        <mana-owl .state=${i} .trigger=${this.reactionTrigger}></mana-owl>
      </button>
    `}};R([b({type:Boolean})],N.prototype,"owner",2);R([b()],N.prototype,"avatar",2);R([b({attribute:"animation-state"})],N.prototype,"animationState",2);R([c()],N.prototype,"reaction",2);R([c()],N.prototype,"reactionTrigger",2);R([c()],N.prototype,"rest",2);R([c()],N.prototype,"open",2);R([c()],N.prototype,"sending",2);R([c()],N.prototype,"mine",2);R([c()],N.prototype,"reply",2);R([c()],N.prototype,"lines",2);R([c()],N.prototype,"slow",2);R([c()],N.prototype,"pointing",2);R([c()],N.prototype,"pos",2);R([c()],N.prototype,"bubble",2);R([c()],N.prototype,"justActed",2);R([c()],N.prototype,"spot",2);R([c()],N.prototype,"dragging",2);R([c()],N.prototype,"visiting",2);R([c()],N.prototype,"sitting",2);R([c()],N.prototype,"highlight",2);R([J(".mc-input")],N.prototype,"input",2);R([J(".mc-bubble")],N.prototype,"bubbleEl",2);R([J("mana-owl")],N.prototype,"owl",2);R([c()],N.prototype,"dictation",2);N=R([k("mana-companion")],N);function To(e){return e.split(/\*([^*\n]+)\*/g).map((s,i)=>i%2?r`<em>${s}</em>`:s)}function Do(e,t){const s=()=>{const i=document.querySelector(`[data-row-key="${CSS.escape(e)}"]`);return i&&i.getClientRects().length?i:null};return new Promise(i=>{const n=performance.now(),o=()=>{const a=s();a||performance.now()-n>t?i(a):requestAnimationFrame(o)};o()})}async function ys(){const e=[];window.dispatchEvent(new CustomEvent("mana:notes-settle",{detail:{wait:t=>{e.push(t)}}})),e.length&&await Promise.race([Promise.allSettled(e),new Promise(t=>setTimeout(t,3e3))])}async function Eo(e){const t=()=>{let n=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:e,ack:()=>{n=!0}}})),n};if(t())return!0;const s=g.getState();s.rightPaneMode!=="canvas"&&s.setRightPaneMode("canvas");const i=performance.now();return new Promise(n=>{const o=()=>{t()?n(!0):performance.now()-i>4e3?n(!1):setTimeout(o,100)};setTimeout(o,50)})}function ws(e){window.dispatchEvent(new CustomEvent("mana:note-changed",{detail:{file:e}}))}function wi(e,t){return(e.innerText||e.textContent||"").replace(/\s+/g," ").trim().slice(0,t)}function Io(e,t){return e.length>t?`${e.slice(0,t-1)}…`:e}function Tu(e){return e?e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLElement&&e.isContentEditable:!1}function ki(e,t){if(!e?.isConnected||!e.getClientRects().length)return null;const s=e.getBoundingClientRect();return s.bottom>0&&s.top<t.height?s:null}function Du(){return!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches}function Eu(){try{const e=JSON.parse(localStorage.getItem(Fi)||"null");return e&&Number.isFinite(e.xr)&&Number.isFinite(e.yr)?{xr:e.xr,yr:e.yr}:null}catch{return null}}function Iu(e){try{e?localStorage.setItem(Fi,JSON.stringify(e)):localStorage.removeItem(Fi)}catch{}}var Au=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,ce=(e,t,s,i)=>{for(var n=i>1?void 0:i?Pu(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Au(t,s,n),n};const Ao=[{key:"goals",label:"Goals",icon:"target"},{key:"grocery",label:"Shopping",icon:"shopping-cart"},{key:"finance",label:"Finance",icon:"wallet"},{key:"circle",label:"Circles",icon:"circle"},{key:"learn",label:"Learn",icon:"graduation-cap"},{key:"office",label:"Office",icon:"briefcase",ownerOnly:!0},{key:"publisher",label:"Publisher",icon:"megaphone",ownerOnly:!0},{key:"canvas",label:"Notes",icon:"file-text"},{key:"guests",label:"Guests",icon:"user-plus",ownerOnly:!0},{key:"notify",label:"Notifications",icon:"bell"},{key:"tools",label:"Tools",icon:"layout-grid"}],Qe={goals:"personal",grocery:"personal",finance:"personal",circle:"personal",learn:"personal",office:"studio",publisher:"studio",canvas:"studio",guests:"workspace",notify:"workspace",tools:"workspace",inbox:"personal"},_u={goals:"#3b82f6",grocery:"#3b82f6",finance:"#3b82f6",circle:"#3b82f6",learn:"#3b82f6",office:"#f43f5e",publisher:"#f43f5e",canvas:"#f43f5e",guests:"#10b981",notify:"#10b981",inbox:"#3b82f6",tools:"var(--ink)"},Mu=new Set(["goals","grocery","finance","circle","learn","office","guests","publisher","inbox","notify"]);function Po(){const e=location.hash.match(/^#\/t\/([\w-]+)$/);if(!e||!e[1])return null;const t=e[1];return Mu.has(t)?t:null}let F=class extends ${constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.themeMode="auto",this.themeTimer=null,this.menuOpen=!1,this.mobileNavOpen=!1,this.accountPortal=null,this.accountAnchor=null,this.accountUp=!1,this.navTooltip=null,this.navTooltipAnchor=null,this.showNavTooltip=e=>{if(e instanceof PointerEvent&&e.pointerType!=="mouse")return;const t=e.target.closest("button");if(!t?.closest(".mana-sidebar.is-collapsed")||this.menuOpen)return;const s=t.getAttribute("aria-label");if(!s||this.navTooltipAnchor===t)return;this.hideNavTooltip();const i=document.createElement("div");i.id="mana-nav-tooltip",i.className="mana-nav-tooltip",i.setAttribute("role","tooltip"),i.textContent=s,document.body.appendChild(i),this.navTooltip=i,this.navTooltipAnchor=t,t.setAttribute("aria-describedby",`${t.getAttribute("aria-describedby")||""} ${i.id}`.trim());const n=t.getBoundingClientRect(),o=i.getBoundingClientRect();i.style.left=`${Math.max(8,Math.min(n.right+8,window.innerWidth-o.width-8))}px`,i.style.top=`${Math.max(8,Math.min(n.top+(n.height-o.height)/2,window.innerHeight-o.height-8))}px`},this.leaveNavTooltip=e=>{e.relatedTarget instanceof Node&&this.navTooltipAnchor?.contains(e.relatedTarget)||this.hideNavTooltip()},this.hideNavTooltip=()=>{if(this.navTooltipAnchor){const e=(this.navTooltipAnchor.getAttribute("aria-describedby")||"").split(/\s+/).filter(t=>t&&t!=="mana-nav-tooltip");e.length?this.navTooltipAnchor.setAttribute("aria-describedby",e.join(" ")):this.navTooltipAnchor.removeAttribute("aria-describedby")}this.navTooltip?.remove(),this.navTooltip=null,this.navTooltipAnchor=null},this.closeAccount=()=>{this.menuOpen=!1,this.accountPortal&&(Dt(h,this.accountPortal),this.accountPortal.remove(),this.accountPortal=null)},this.onShellKey=e=>{if(e.key==="Tab"&&this.mobileNavOpen){const t=[...this.querySelectorAll(".mana-sidebar button")].filter(n=>n.getClientRects().length>0),s=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),i?.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),s?.focus())}e.key==="Escape"&&(this.hideNavTooltip(),this.menuOpen&&(this.closeAccount(),this.accountAnchor?.focus()),this.mobileNavOpen&&(this.mobileNavOpen=!1,this.querySelector(".mana-mobile-nav-toggle")?.focus()))},this.onAccountOutside=e=>{this.menuOpen&&!e.composedPath().includes(this.accountAnchor)&&!e.composedPath().includes(this.accountPortal)&&this.closeAccount()},this.railCollapsed=localStorage.getItem("cockpit.rail_collapsed")==="1",this.mobileTab="ops",this.demoHintDismissed=localStorage.getItem("mana.hint.reset_seen")==="1",this.navOrder=F.loadNavOrder(),this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.navDragAxis="y",this.navPress=null,this.justNavDragged=!1,this.orderedNavKeys=[],this.me=null,this.standaloneTool=Po(),this.splitPct=F.DEFAULT_SPLIT,this.dragStartX=0,this.dragStartPct=F.DEFAULT_SPLIT,this.dragMoved=!1,this.lastExpandedPct=F.DEFAULT_SPLIT,this.splitByMode={},this.onAgentFollow=e=>{e.detail?.stay||this.standaloneTool&&this.standaloneTool!=="goals"||g.getState().rightPaneMode!=="goals"&&this.setRightPaneMode("goals")},this.onHashChange=()=>{this.standaloneTool=Po()},this.rowNav=new Dr(this,{selector:"[data-row-key]",getKey:()=>g.getState().focusedRowKey,setKey:e=>g.getState().setFocusedRowKey(e),onToggle:e=>{const[t,s]=e.split(":"),i=Number(s);if(!Number.isFinite(i))return;const n=g.getState();if(t==="kr"){const o=n.goals.flatMap(a=>a.keyResults??[]).find(a=>a.id===i);o&&n.updateKeyResult(i,{done:!o.done})}else if(t==="commit"){const o=n.commitments.find(a=>a.id===i);o&&n.updateCommitment(i,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const e=g.getState();e.loadThreads(),e.currentThreadId!=null&&e.loadMessages(e.currentThreadId),e.loadGoals(),e.loadCommitments(),e.loadNotifications()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=e=>{e.preventDefault(),this.dragStartX=e.clientX,this.dragStartPct=this.splitPct,this.dragMoved=!1,window.addEventListener("mousemove",this.onDividerMove),window.addEventListener("mouseup",this.onDividerUp),document.body.style.cursor="col-resize",document.body.style.userSelect="none"},this.onDividerMove=e=>{const t=this.querySelector("main");if(!t)return;const s=t.getBoundingClientRect().width;if(s<=0)return;Math.abs(e.clientX-this.dragStartX)>3&&(this.dragMoved=!0);const i=(e.clientX-this.dragStartX)/s*100;let n=this.dragStartPct+i;n<18?n=0:n>82?n=100:n=Math.max(25,Math.min(75,n)),this.splitPct=n},this.onDividerUp=()=>{window.removeEventListener("mousemove",this.onDividerMove),window.removeEventListener("mouseup",this.onDividerUp),document.body.style.cursor="",document.body.style.userSelect="",!this.dragMoved&&(this.chatCollapsed||this.opsCollapsed)?this.splitPct=this.lastExpandedPct:this.splitPct>0&&this.splitPct<100&&(this.lastExpandedPct=this.splitPct),this.saveSplit()},this.resetSplit=()=>{this.splitPct=F.DEFAULT_SPLIT,this.saveSplit()},this.toggleRail=()=>{this.railCollapsed=!this.railCollapsed;try{localStorage.setItem("cockpit.rail_collapsed",this.railCollapsed?"1":"0")}catch{}},this.dismissDemoHint=()=>{try{localStorage.setItem("mana.hint.reset_seen","1")}catch{}this.demoHintDismissed=!0},this.onNavPointerDown=(e,t,s)=>{e.pointerType==="mouse"&&e.button!==0||this.mobileNavOpen&&e.pointerType!=="mouse"||(this.navPress={key:t,axis:s,x:e.clientX,y:e.clientY},window.addEventListener("pointermove",this.onNavPointerMove),window.addEventListener("pointerup",this.onNavPointerUp))},this.onNavPointerMove=e=>{if(this.navPress){if(!this.navDragKey){const t=this.navPress.axis==="y"?Math.abs(e.clientY-this.navPress.y):Math.abs(e.clientX-this.navPress.x),s=this.navPress.axis==="y"?Math.abs(e.clientX-this.navPress.x):Math.abs(e.clientY-this.navPress.y);if(t>6&&t>=s)this.navDragKey=this.navPress.key,this.navDragAxis=this.navPress.axis;else return}this.onNavDragMove(e)}},this.onNavPointerUp=()=>{window.removeEventListener("pointermove",this.onNavPointerMove),window.removeEventListener("pointerup",this.onNavPointerUp),this.navPress=null,this.navDragKey&&(this.justNavDragged=!0,this.endNavDrag(),setTimeout(()=>{this.justNavDragged=!1},50))}}static loadNavOrder(){try{const e=JSON.parse(localStorage.getItem("cockpit.nav_order")||"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}connectedCallback(){super.connectedCallback();const e=g.getState();e.loadSettings().then(()=>this.applyTheme()),e.loadThreads(),e.loadTools(),e.loadNotifications(),this.notifTimer=setInterval(()=>void g.getState().loadNotifications(),6e4),this.fetchNavOrder(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t&&(this.me=t)}).catch(()=>{}),this.unsubSettings=_(this,g,t=>t.settings),this.unsubRightPaneMode=_(this,g,t=>t.rightPaneMode),this.unsubTools=_(this,g,t=>t.tools),this.unsubNotif=_(this,g,t=>t.notificationsUnread),window.addEventListener("settings-close",this.onSettingsClose),document.addEventListener("keydown",this.onShellKey),document.addEventListener("pointerdown",this.onAccountOutside),document.addEventListener("scroll",this.closeAccount,!0),window.addEventListener("resize",this.closeAccount),document.addEventListener("scroll",this.hideNavTooltip,!0),window.addEventListener("resize",this.hideNavTooltip),this.loadSplits(),this.splitPct=this.splitFor(g.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible),window.addEventListener("hashchange",this.onHashChange),document.addEventListener("mana-agent-follow",this.onAgentFollow)}disconnectedCallback(){super.disconnectedCallback(),this.themeTimer&&clearTimeout(this.themeTimer),this.unsubSettings?.(),this.unsubRightPaneMode?.(),this.unsubTools?.(),this.unsubNotif?.(),this.notifTimer&&clearInterval(this.notifTimer),Lh(),document.removeEventListener("mana-agent-follow",this.onAgentFollow),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("keydown",this.onShellKey),document.removeEventListener("pointerdown",this.onAccountOutside),document.removeEventListener("scroll",this.closeAccount,!0),window.removeEventListener("resize",this.closeAccount),document.removeEventListener("scroll",this.hideNavTooltip,!0),window.removeEventListener("resize",this.hideNavTooltip),this.hideNavTooltip(),this.closeAccount(),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),window.removeEventListener("hashchange",this.onHashChange),this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll(),this.menuOpen&&this.paintAccountMenu(),(!this.railCollapsed||this.mobileNavOpen||!this.navTooltipAnchor?.isConnected)&&this.hideNavTooltip()}clampSplit(e){return Math.max(0,Math.min(100,e))}get chatCollapsed(){return this.splitPct<=0}get opsCollapsed(){return this.splitPct>=100}splitFor(e){return this.splitByMode[e]??this.legacySplit??F.DEFAULT_SPLIT}loadSplits(){try{const e=localStorage.getItem("cockpit.split_pct_by_mode");if(e){const s=JSON.parse(e);for(const[i,n]of Object.entries(s))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[i]=this.clampSplit(n));return}const t=Number(localStorage.getItem("cockpit.split_pct"));Number.isFinite(t)&&t>0&&(this.legacySplit=this.clampSplit(t))}catch{}}saveSplit(){const e=g.getState().rightPaneMode;this.splitByMode[e]=this.splitPct;try{localStorage.setItem("cockpit.split_pct_by_mode",JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const e=this.querySelector("#ops-scroll");return e===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=e,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const e=this.ensureOpsListener(),t=g.getState().rightPaneMode;if(t===this.renderedOpsMode&&!e)return;const s=t!==this.renderedOpsMode;if(this.renderedOpsMode=t,s){const o=this.splitFor(t);o!==this.splitPct&&(this.splitPct=o)}const i=this.opsEl;if(!i)return;const n=this.opsScroll[t]??0;i.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===i&&(i.scrollTop=n)})}applyTheme(){const e=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),t=g.getState().settings[Vt]??e??Or(),s=t==="dark"?"dark":t==="light"?"light":"auto",i=qr(s),n=i?"dark":"light";s!==this.themeMode&&(this.themeMode=s),n!==this.theme&&(this.theme=n),document.documentElement.dataset.theme=n;try{localStorage.setItem(Vt,s),localStorage.setItem(_r,i?"1":"0")}catch{}if(this.themeTimer&&(clearTimeout(this.themeTimer),this.themeTimer=null),s==="auto"){const o=Kr(),a=o?Math.min(Math.max(o.getTime()-Date.now()+1e3,1e3),360*60*1e3):3600*1e3;this.themeTimer=setTimeout(()=>this.applyTheme(),a)}}openSettings(){this.settingsOpen=!0,this.closeAccount(),this.mobileNavOpen=!1}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}onChatDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(s=>s.type.startsWith("image/")||s.type==="application/pdf"||/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i.test(s.name));t.length&&(e.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:t},bubbles:!0,composed:!0})))}setThemeMode(e){try{localStorage.setItem(Vt,e)}catch{}g.getState().setSetting(Vt,e),this.themeMode=e,this.applyTheme()}renderRightPaneContent(e){switch(e){case"goals":return r`
          <goals-metrics></goals-metrics>
          <planner-tabs></planner-tabs>
        `;case"canvas":return r`<companion-workspace class="flex flex-col flex-1 min-h-0"></companion-workspace>`;case"grocery":return r`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"inbox":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return r`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return r`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`;case"learn":return r`<learn-section class="flex flex-col flex-1 min-h-0"></learn-section>`;case"guests":return r`<guests-section class="flex flex-col flex-1 min-h-0"></guests-section>`;case"publisher":return r`<publisher-section class="flex flex-col flex-1 min-h-0"></publisher-section>`;case"tools":return r`<tools-launcher class="flex flex-col flex-1 min-h-0"></tools-launcher>`;case"notify":return r`<notifications-section class="flex flex-col flex-1 min-h-0"></notifications-section>`}}openMobileNav(){this.mobileNavOpen=!0,this.updateComplete.then(()=>this.querySelector(".mana-sidebar-close")?.focus())}toggleAccount(e,t){if(this.menuOpen){this.closeAccount();return}this.accountAnchor=e.currentTarget,this.accountUp=t,this.menuOpen=!0,this.paintAccountMenu(),this.accountPortal?.querySelector("button")?.focus()}paintAccountMenu(){if(!this.accountAnchor)return;this.accountPortal||(this.accountPortal=document.createElement("div"),this.accountPortal.className="mana-account-menu",document.body.appendChild(this.accountPortal));const e=this.accountAnchor.getBoundingClientRect(),t=Math.min(224,window.innerWidth-16);Dt(r`
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
      </div>`,this.accountPortal),this.accountPortal.setAttribute("role","menu"),this.accountPortal.setAttribute("aria-label","Account");const s=this.accountPortal.getBoundingClientRect().height;this.accountPortal.style.width=`${t}px`,this.accountPortal.style.left=`${Math.max(8,Math.min(e.left,window.innerWidth-t-8))}px`,this.accountPortal.style.top=`${Math.max(8,Math.min(this.accountUp?e.top-s-8:e.bottom+8,window.innerHeight-s-8))}px`}renderAccount(e=!1,t=!1){const s=g.getState().settings,i=this.me,n=(i?s[`user:${i.login}:profile_pic_url`]:"")||(i?.role==="owner"?s["cockpit.profile_pic_url"]:"")||i?.profilePic,o=i?.displayName.trim().split(/\s+/).map(a=>a[0]).slice(0,2).join("").toUpperCase()||"?";return r`<button type="button" class="mana-account ${t?"mana-account-expanded":""}"
      aria-label="Account menu" aria-haspopup="menu" aria-expanded=${this.menuOpen}
      @click=${a=>this.toggleAccount(a,e)}>
      <span class="mana-avatar">${n?r`<img src=${n} alt="" referrerpolicy="no-referrer" @error=${a=>{a.target.hidden=!0}} />`:h}<span>${o}</span></span>
      ${t?r`<span class="mana-account-identity"><span>${i?.displayName||"Account"}</span>${i?.login,h}</span>`:h}
    </button>`}renderRail(e,t){const s=this.railCollapsed&&!this.mobileNavOpen,i=g.getState().notificationsUnread;return r`
      ${this.mobileNavOpen?r`<button type="button" class="mana-nav-backdrop lg:hidden" aria-label="Close navigation" @click=${()=>{this.mobileNavOpen=!1}}></button>`:h}
      <aside class="mana-sidebar ${s?"is-collapsed":""} ${this.mobileNavOpen?"is-mobile-open":""}" role=${this.mobileNavOpen?"dialog":h} aria-modal=${this.mobileNavOpen?"true":h} aria-label="Mana sidebar"
        @pointerover=${this.showNavTooltip} @pointerout=${this.leaveNavTooltip}
        @focusin=${this.showNavTooltip} @focusout=${this.leaveNavTooltip}
        @pointerdown=${this.hideNavTooltip} @click=${this.hideNavTooltip}>
        <div class="mana-sidebar-header">
          <button type="button" class="mana-sidebar-toggle" aria-label=${s?"Expand sidebar":"Collapse sidebar"} aria-expanded=${!s} @click=${this.toggleRail}>
            <sc-icon name="lucide-layout-sidebar"></sc-icon>
          </button>
          <button type="button" class="mana-sidebar-close" aria-label="Close navigation" @click=${()=>{this.mobileNavOpen=!1}}><span aria-hidden="true">✕</span></button>
        </div>
        <nav class="mana-sidebar-nav" aria-label="Tools">
          ${e.map((n,o)=>{const a=t===n.key,l=Qe[n.key];return r`
              ${o>0&&l!==Qe[e[o-1].key]?r`<div class="mana-sidebar-rule" aria-hidden="true"></div>`:h}
              <button type="button" data-nav-item=${n.key} class="mana-sidebar-item ${a?"is-active":""} ${this.navDragKey===n.key?"opacity-40":""} ${this.navDropClass(n.key)}"
                style="--nav-hue:${_u[n.key]};touch-action:pan-y;" aria-label=${n.label} aria-current=${a?"page":h}
                @pointerdown=${d=>this.onNavPointerDown(d,n.key,"y")}
                @click=${()=>{this.onNavClick(n.key,this.mobileNavOpen),this.justNavDragged||(this.mobileNavOpen=!1)}}>
                <sc-icon name="lucide-${n.icon}"></sc-icon>
                ${s?h:r`<span class="mana-sidebar-label">${n.label}</span>`}
                ${n.key==="notify"&&i>0?r`<span class="mana-sidebar-dot" role="status" aria-label=${`${i} unread notifications`}></span>`:h}
              </button>`})}
        </nav>
        <div class="mana-sidebar-account">${this.renderAccount(!0,!s)}</div>
      </aside>`}setRightPaneMode(e){g.getState().setRightPaneMode(e)}orderModes(e){const t=new Map(this.navOrder.map((i,n)=>[i,n])),s=["personal","studio","workspace"];return[...e].sort((i,n)=>{const o=s.indexOf(Qe[i.key])-s.indexOf(Qe[n.key]);if(o)return o;const a=t.get(i.key),l=t.get(n.key);return a!==void 0&&l!==void 0?a-l:a!==void 0?-1:l!==void 0?1:0})}onNavDragMove(e){const t=this.renderRoot.querySelectorAll("[data-nav-item]");for(const s of t){const i=s.getBoundingClientRect();if(i.width===0&&i.height===0||!(this.navDragAxis==="y"?e.clientY>=i.top&&e.clientY<=i.bottom:e.clientX>=i.left&&e.clientX<=i.right))continue;const o=s.dataset.navItem;if(Qe[o]!==Qe[this.navDragKey])continue;const a=this.navDragAxis==="y"?e.clientY<i.top+i.height/2?"before":"after":e.clientX<i.left+i.width/2?"before":"after";(this.navDragOverKey!==o||this.navDragPos!==a)&&(this.navDragOverKey=o,this.navDragPos=a,this.requestUpdate());return}}endNavDrag(){const e=this.navDragKey,t=this.navDragOverKey,s=this.navDragPos;if(this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.requestUpdate(),!e||!t||e===t||Qe[e]!==Qe[t])return;const i=[...this.orderedNavKeys],n=i.indexOf(e);if(n<0)return;i.splice(n,1);let o=i.indexOf(t);o<0||(s==="after"&&(o+=1),i.splice(o,0,e),this.navOrder=i,localStorage.setItem("cockpit.nav_order",JSON.stringify(i)),fetch("/api/nav-order",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i})}).catch(()=>{}))}async fetchNavOrder(){try{const e=await fetch("/api/nav-order",{credentials:"include"});if(!e.ok)return;const t=await e.json();Array.isArray(t.order)&&t.order.length&&(this.navOrder=t.order,localStorage.setItem("cockpit.nav_order",JSON.stringify(t.order)))}catch{}}onNavClick(e,t){this.justNavDragged||(this.setRightPaneMode(e),t&&(this.mobileTab="ops"))}navDropClass(e){return this.navDragOverKey!==e?"":this.navDragAxis==="y"?this.navDragPos==="before"?"border-t-2 border-t-accent":"border-b-2 border-b-accent":this.navDragPos==="before"?"border-l-2 border-l-accent":"border-r-2 border-r-accent"}onNotifNavigate(e){const t=e.detail,s={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher",mana:"canvas"},i=t?.mode,n=i??(t?.persona?s[t.persona]:void 0);n&&(!(n==="office"||n==="inbox"||n==="guests"||n==="publisher")||this.me?.role==="owner")&&this.setRightPaneMode(n),this.mobileTab=i?"ops":"chat"}render(){if(this.settingsOpen)return r`<settings-page></settings-page>`;const e=g.getState().settings["cockpit.chat_hidden"]==="1",t=!e&&this.mobileTab==="chat",s=this.me?.role==="owner",i=g.getState().tools,n=f=>i.find(x=>x.name===f)?.placement==="standalone",o=this.orderModes(Ao.filter(f=>(!f.ownerOnly||s)&&!n(f.key)));this.orderedNavKeys=o.map(f=>f.key);const a=g.getState().rightPaneMode,l=this.standaloneTool,d=l||(o.some(f=>f.key===a)?a:"goals"),u=["grocery","office","circle","learn","guests","publisher","canvas","notify","tools"].includes(d),p=d==="canvas"||d==="publisher",m=!this.demoHintDismissed&&!l;return r`
      <div class="mana-shell h-[100dvh] overflow-hidden flex flex-col bg-bg text-ink font-sans" @notif-navigate=${this.onNotifNavigate}>
        ${m?r`<div class="shrink-0 flex items-center gap-3 px-4 py-2.5 text-sm bg-surface border-b border-line">
              <sc-icon name="lucide-sparkles" class="w-4 h-4 shrink-0 text-accent"></sc-icon>
              <span class="flex-1 min-w-0 text-muted">Live demo. Edits stay in this browser. Start fresh from <span class="text-ink font-medium">Settings → Reset demo</span>.</span>
              <button type="button" class="shrink-0 w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover" aria-label="Dismiss the demo hint" @click=${this.dismissDemoHint}>✕</button>
            </div>`:h}
        <div class="flex-1 flex flex-row min-h-0">
        ${l?h:this.renderRail(o,d)}
        <div class="flex-1 flex flex-col min-w-0 min-h-0" ?inert=${this.mobileNavOpen}>
        <header
          class="${l?"flex":"flex lg:hidden"} items-center gap-2 px-3 sm:px-4 py-2"
        >
          ${l?h:r`<button type="button" class="mana-mobile-nav-toggle" aria-label="Open navigation" aria-expanded=${this.mobileNavOpen} @click=${this.openMobileNav}><sc-icon name="lucide-layout-sidebar"></sc-icon></button>`}
          <span class="lg:hidden text-sm font-medium truncate">${t?"Chat":Ao.find(f=>f.key===d)?.label}</span>
          ${e?h:r`<button type="button" class="lg:hidden ml-auto px-3 py-1.5 rounded-lg text-sm hover:bg-hover" @click=${()=>{this.mobileTab=t?"ops":"chat"}}>${t?"Tools":"Chat"}</button>`}
          <!-- Spacer pushes the account to the right edge. -->
          <div class="flex-1"></div>
          <div class="flex items-center gap-2 shrink-0">
            ${this.renderAccount()}
          </div>
        </header>

        <main
          class="mana-main-plane relative flex-1 min-h-0 min-w-0 flex flex-col lg:flex-row gap-3 lg:gap-0 overflow-hidden"
        >
          ${e?h:r`
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
            class="${t?"hidden":"flex"} ${this.opsCollapsed?"lg:hidden":"lg:flex"} flex-col min-h-0 ${u?"overflow-hidden":"overflow-y-auto px-3 py-4 sm:p-5"} mana-main-card max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
            style=${`--split-ops: ${100-this.splitPct}%; scrollbar-gutter: stable;`}
          >
            <div
              class="w-full ${p?"":"max-w-5xl mx-auto"} ${u?"flex flex-col flex-1 min-h-0":"space-y-6"}"
            >
              ${this.renderRightPaneContent(d)}
            </div>
          </section>
        </main>

        <voice-controller></voice-controller>
        ${s?r`<mana-companion .owner=${!0} avatar=${"/office-avatars/mana.svg"}></mana-companion>`:h}
        </div>
        </div>
      </div>
    `}};F.DEFAULT_SPLIT=50;ce([c()],F.prototype,"settingsOpen",2);ce([c()],F.prototype,"theme",2);ce([c()],F.prototype,"themeMode",2);ce([c()],F.prototype,"menuOpen",2);ce([c()],F.prototype,"mobileNavOpen",2);ce([c()],F.prototype,"railCollapsed",2);ce([c()],F.prototype,"mobileTab",2);ce([c()],F.prototype,"demoHintDismissed",2);ce([c()],F.prototype,"navOrder",2);ce([c()],F.prototype,"navDragKey",2);ce([c()],F.prototype,"navDragOverKey",2);ce([c()],F.prototype,"me",2);ce([c()],F.prototype,"standaloneTool",2);ce([c()],F.prototype,"splitPct",2);F=ce([k("mana-app")],F);const Ru=Object.freeze(Object.defineProperty({__proto__:null,get ManaApp(){return F}},Symbol.toStringTag,{value:"Module"}));export{$ as T,Nu as c,Ru as m,c as r};
