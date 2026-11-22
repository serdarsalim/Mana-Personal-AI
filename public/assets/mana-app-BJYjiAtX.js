const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-D2emgc0r.js","assets/db-DHWx8Fue.js","assets/notes-media-DWQZLlRj.js","assets/index-BBrx6plX.js","assets/index-CIKY4FE3.css","assets/models-CLMVJSUQ.js","assets/been-to-section-CkMRzdkQ.js","assets/been-to-countries-XpOUTETI.js","assets/been-to-section-Dtzwgi1a.css","assets/newsroom-section-R8h5iT9O.js","assets/layout-EA_iF8da.js"])))=>i.map(i=>d[i]);
import{n as b,j as kl,e as Is,i as Pi,A as c,c as Pt,t as w,b as r,o as V,_ as _t,f as Kn,E as qn,d as Ot,D as vt,g as Ue,L as Be,a as $l,w as Ce,r as Sl}from"./index-BBrx6plX.js";import{e as ni,f as xn,d as Tl,C as Wn,b as Cl,c as El,D as yn,a as Dl,n as Pl,k as Al}from"./models-CLMVJSUQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ml=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t,e){return(s,i,n)=>{const o=a=>a.renderRoot?.querySelector(t)??null;return Ml(s,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Il}=kl,vo=t=>t,mg=t=>t.strings===void 0,xo=()=>document.createComment(""),ps=(t,e,s)=>{const i=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(s===void 0){const o=i.insertBefore(xo(),n),a=i.insertBefore(xo(),n);s=new Il(o,a,t,t.options)}else{const o=s._$AB.nextSibling,a=s._$AM,l=a!==t;if(l){let h;s._$AQ?.(t),s._$AM=t,s._$AP!==void 0&&(h=t._$AU)!==a._$AU&&s._$AP(h)}if(o!==n||l){let h=s._$AA;for(;h!==o;){const u=vo(h).nextSibling;vo(i).insertBefore(h,n),h=u}}}return s},$e=(t,e,s=t)=>(t._$AI(e,s),t),_l={},aa=(t,e=_l)=>t._$AH=e,Ol=t=>t._$AH,Fi=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const la=Is(class extends Pi{constructor(){super(...arguments),this.key=c}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(aa(t),this.key=e),s}});class T extends Pt{createRenderRoot(){return this}}class Ll{constructor(e,s){this.onKeydown=i=>{const n=i.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=i.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const a=this.opts.keyAttr??"data-row-key",l=this.opts.scope?.()??document,h=Array.from(l.querySelectorAll(`[${a}]`));if(!h.length)return;const u=this.opts.getKey();if(n===" "||n==="Enter"){if(!u)return;const v=n===" "?this.opts.onToggle:this.opts.onEnter;if(!v)return;i.preventDefault(),v(u);return}const p=h.map(v=>v.getAttribute(a)).filter(v=>!!v),m=u?p.indexOf(u):-1,g=n==="ArrowDown"?m<0?0:Math.min(m+1,p.length-1):m<=0?0:m-1;if(p[g]&&p[g]!==u){i.preventDefault(),this.opts.setKey(p[g]);const v=p[g];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${a}="${CSS.escape(v)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=e,this.opts=s,e.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const yo=t=>{let e;const s=new Set,i=(u,p)=>{const m=typeof u=="function"?u(e):u;if(!Object.is(m,e)){const g=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),s.forEach(v=>v(e,g))}},n=()=>e,l={setState:i,getState:n,getInitialState:()=>h,subscribe:u=>(s.add(u),()=>s.delete(u))},h=e=t(i,n,l);return l},Rl=(t=>t?yo(t):yo);class Nl extends Error{constructor(e,s,i){super(s),this.name="ApiError",this.status=e,this.body=i}}async function wn(t){let e=null,s=`${t.status} ${t.statusText}`;try{if(e=await t.json(),e&&typeof e=="object"&&"error"in e){const i=e.error;typeof i=="string"&&(s=i)}}catch{}return new Nl(t.status,s,e)}const jl=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;async function _s(t,e){const s=await fetch(t,{...e,headers:{"content-type":"application/json","x-mana-client":jl,...e?.headers||{}}});if(!s.ok)throw await wn(s);const i=await s.text();return i?JSON.parse(i):void 0}function G(t){return _s(t,{method:"GET"})}function B(t,e,s){return _s(t,{method:"POST",body:e===void 0?void 0:JSON.stringify(e),headers:s?{"x-mana-history-group":s}:void 0})}function ie(t,e,s){return _s(t,{method:"PATCH",body:e===void 0?void 0:JSON.stringify(e),headers:s?{"x-mana-history-group":s}:void 0})}function fe(t,e){return _s(t,{method:"DELETE",headers:e?{"x-mana-history-group":e}:void 0})}const C={threads:{list:()=>G("/api/threads").then(t=>t.threads),create:(t="chat",e)=>B("/api/threads",{kind:t,persona:e}),search:t=>G(`/api/threads/search?q=${encodeURIComponent(t)}`).then(e=>e.threads),pin:(t,e)=>B(`/api/threads/${t}/pin`,{pinned:e}),rename:(t,e)=>ie(`/api/threads/${t}`,{title:e}),remove:t=>fe(`/api/threads/${t}`)},messages:{list:t=>G(`/api/threads/${t}/messages`).then(e=>e.messages)},northStars:{list:()=>G("/api/north-stars").then(t=>t.northStars),create:t=>B("/api/north-stars",{title:t}),update:(t,e)=>ie(`/api/north-stars/${t}`,e),archive:t=>fe(`/api/north-stars/${t}`),summary:t=>G(`/api/north-stars/${t}/summary`)},goals:{list:(t=!1)=>G(`/api/goals${t?"?include=archived":""}`),create:(t,e)=>B("/api/goals",t,e),update:(t,e,s)=>ie(`/api/goals/${t}`,e,s),remove:(t,e=!1)=>fe(`/api/goals/${t}${e?"?permanent=true":""}`),summary:t=>G(`/api/goals/${t}/summary`),events:t=>G(`/api/goals/${t}/events`).then(e=>e.events)},keyResults:{create:(t,e,s)=>B(`/api/goals/${t}/key-results`,{title:e},s),update:(t,e,s)=>ie(`/api/key-results/${t}`,e,s),move:(t,e)=>B(`/api/key-results/${t}/move`,{direction:e}),reorder:(t,e)=>B(`/api/key-results/${t}/reorder`,{targetIndex:e}),remove:t=>fe(`/api/key-results/${t}`)},commitments:{listForWeek:t=>G(`/api/week${t?`?week=${encodeURIComponent(t)}`:""}`),create:t=>B("/api/commitments",t),update:(t,e)=>ie(`/api/commitments/${t}`,e),remove:t=>fe(`/api/commitments/${t}`),reorder:(t,e)=>B(`/api/commitments/${t}/reorder`,{targetIndex:e}),carryOver:(t,e)=>B("/api/commitments/carry-over",{from:t,to:e})},settings:{list:()=>G("/api/settings"),update:t=>ie("/api/settings",t)},tools:{list:()=>G("/api/tools").then(t=>t.tools),reorder:t=>B("/api/tools/order",{names:t}),setPlacement:(t,e,s)=>ie(`/api/tools/${encodeURIComponent(t)}`,{placement:e,order:s})},agentDocs:{list:()=>G("/api/agents").then(t=>t.files),read:t=>G(`/api/agents/${encodeURIComponent(t)}`),save:(t,e)=>_s(`/api/agents/${encodeURIComponent(t)}`,{method:"PUT",body:JSON.stringify({content:e})}),history:t=>G(`/api/agents/${encodeURIComponent(t)}/history`).then(e=>e.history),at:(t,e)=>G(`/api/agents/${encodeURIComponent(t)}/at/${e}`),restore:(t,e)=>B(`/api/agents/${encodeURIComponent(t)}/restore`,{sha:e}),reset:t=>B(`/api/agents/${encodeURIComponent(t)}/reset`,{})},canvas:{list:()=>G("/api/canvas/files").then(t=>t.files),read:t=>G(`/api/canvas/files/${encodeURIComponent(t)}`)},voice:{session:t=>B("/api/voice/session",t?{persona:t}:void 0),op:(t,e)=>B("/api/voice/op",{name:t,arguments:e}),transcript:t=>B("/api/voice/transcript",t),stt:async t=>{const e=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:t});if(!e.ok)throw await wn(e);return e.json()},consult:t=>B("/api/voice/consult",t),tts:async t=>{const e=await fetch("/api/voice/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:t})});if(!e.ok)throw await wn(e);return e.blob()}},uploads:{upload:(t,e=!1,s)=>B("/api/upload",{dataUrl:t,ephemeral:e,name:s})},state:()=>G("/api/state"),notifications:{list:()=>G("/api/notifications"),read:t=>B(`/api/notifications/${t}/read`),dismiss:t=>B(`/api/notifications/${t}/dismiss`),act:t=>B(`/api/notifications/${t}/act`),readAll:()=>B("/api/notifications/read-all"),dismissAll:()=>B("/api/notifications/dismiss-all"),mute:(t,e)=>B("/api/notifications/mute",{kind:t,enabled:e}),kinds:()=>G("/api/notifications/kinds")}},Fl={"been-to":"house",goals:"house",canvas:"house",grocery:"house",office:"house",finance:"house",circle:"house",learn:"house",guests:"house",publisher:"house",newsroom:"house",inbox:"house",tools:"house",notify:"house"},wo={"been-to":"Been to",goals:"Goals",canvas:"Mana",grocery:"Shopping",office:"Projects",finance:"Finance",circle:"Circles",learn:"Learn",guests:"Guests",publisher:"Publisher",newsroom:"The office",inbox:"Inbox",tools:"Tools",notify:"Notifications"},ca={house:"Workshop",mana:"Workshop","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Projects keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper","learn-coach":"Learn coach",publisher:"Publisher",companion:"Mana"};function da(t){if(t.currentThreadId!=null){const e=t.threads.find(s=>s.id===t.currentThreadId);if(e?.persona)return e.persona}return Fl[t.rightPaneMode]}function Ui(){try{const t=localStorage.getItem("cockpit.right_pane_mode");if(t==="been-to"||t==="goals"||t==="canvas"||t==="grocery"||t==="office"||t==="finance"||t==="circle"||t==="learn"||t==="guests"||t==="publisher"||t==="newsroom")return t}catch{}return"goals"}let ko=0,Se=0,Bi=null;const f=Rl((t,e)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const s=await C.threads.list();t({threads:s})},initThreads(){return Bi??=e().loadThreads().then(()=>{const s=e();if(s.currentThreadId==null){const i=s.threads.find(n=>n.persona==="house"&&n.closed_at==null);i&&s.selectThread(i.id)}}).catch(s=>{Bi=null,console.warn("[threads] initial load failed",s)}),Bi},async pinThread(s,i){const n=i?Math.floor(Date.now()/1e3):null,o=e().threads;t({threads:o.map(a=>a.id===s?{...a,pinned_at:n}:a)});try{await C.threads.pin(s,i)}catch(a){throw t({threads:o}),a}},async renameThread(s,i){const n=e().threads;t({threads:n.map(o=>o.id===s?{...o,title:i}:o)});try{await C.threads.rename(s,i)}catch(o){throw t({threads:n}),o}},async deleteThread(s){await C.threads.remove(s),t({threads:e().threads.filter(i=>i.id!==s)}),e().currentThreadId===s&&await e().selectThread(null)},async selectThread(s){t({currentThreadId:s,messages:[]}),s!=null&&await e().loadMessages(s)},async createThread(s){const i=s?.kind??"chat",n=s?.persona,o=await C.threads.create(i,n);return await e().loadThreads(),t({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(s){const i=await C.messages.list(s);t({messages:i})},northStars:[],async loadNorthStars(){t({northStars:await C.northStars.list()})},async createNorthStar(s){await C.northStars.create(s),await e().loadNorthStars()},async renameNorthStar(s,i){await C.northStars.update(s,{title:i}),await e().loadNorthStars()},async archiveNorthStar(s){await C.northStars.archive(s),await e().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:s,archivedCount:i}=await C.goals.list(e().includeArchivedGoals);t({goals:s,goalsArchivedCount:i})},async toggleArchivedGoals(s){t({includeArchivedGoals:s}),await e().loadGoals()},async createGoal(s){const i=crypto.randomUUID(),{id:n}=await C.goals.create({title:s.title,northStar:s.northStar??null,targetDate:s.targetDate??null},i);return(s.color!=null||s.symbol!=null)&&await C.goals.update(n,{color:s.color??null,symbol:s.symbol??null},i),await e().loadGoals(),n},async updateGoal(s,i){await C.goals.update(s,i),await e().loadGoals()},async deleteGoal(s,i=!1){await C.goals.remove(s,i),await e().loadGoals()},async addKeyResult(s,i,n){const o=crypto.randomUUID(),{id:a}=await C.keyResults.create(s,i,o);return n&&await C.keyResults.update(a,{targetDate:n},o),await e().loadGoals(),a},async updateKeyResult(s,i){await C.keyResults.update(s,i),await e().loadGoals()},async deleteKeyResult(s){await C.keyResults.remove(s),await e().loadGoals()},async moveKeyResult(s,i){await C.keyResults.move(s,i),await e().loadGoals()},async reorderKeyResult(s,i){await C.keyResults.reorder(s,i),await e().loadGoals()},currentWeek:null,commitments:[],async setWeek(s){t({currentWeek:s}),await e().loadCommitments(s)},async loadCommitments(s){const i=await C.commitments.listForWeek(s??e().currentWeek??void 0);t({commitments:i.commitments,currentWeek:i.week})},async createCommitment(s){await C.commitments.create({...s,week:s.week??e().currentWeek??void 0}),await e().loadCommitments()},async updateCommitment(s,i){await C.commitments.update(s,i),await e().loadCommitments()},async deleteCommitment(s){await C.commitments.remove(s),await e().loadCommitments()},async reorderCommitment(s,i){await C.commitments.reorder(s,i),await e().loadCommitments()},settings:{},async loadSettings(){t({settings:await C.settings.list()})},async setSetting(s,i){const n=await C.settings.update({[s]:i});t({settings:n})},tools:[],async loadTools(){t({tools:await C.tools.list()})},async setToolPlacement(s,i){await C.tools.setPlacement(s,i),t({tools:e().tools.map(n=>n.name===s?{...n,placement:i}:n)})},async reorderTool(s,i){const n=e().tools,o=n.find(u=>u.name===s);if(!o||i===s)return;const a=n.filter(u=>u.name!==s),l=i===null?a.length:a.findIndex(u=>u.name===i);if(l<0||(a.splice(l,0,o),a.every((u,p)=>u.name===n[p]?.name)))return;const h=a.map((u,p)=>({...u,order:p}));try{await C.tools.reorder(h.map(u=>u.name)),t({tools:h})}catch(u){throw await e().loadTools().catch(()=>{}),u}},notifications:[],notificationsUnread:0,async loadNotifications(){const s=++ko,i=Se,{notifications:n,unread:o}=await C.notifications.list();s!==ko||i!==Se||t({notifications:n,notificationsUnread:o})},async markNotificationRead(s){Se++;const i=e().notifications.map(o=>o.id===s&&o.read_at==null?{...o,read_at:Math.floor(Date.now()/1e3)}:o),n=e().notifications.some(o=>o.id===s&&o.read_at==null);t({notifications:i,notificationsUnread:Math.max(0,e().notificationsUnread-(n?1:0))}),await C.notifications.read(s),await e().loadNotifications()},async dismissNotification(s){Se++;const i=e().notifications.some(o=>o.id===s&&o.read_at==null),n=e().notifications.filter(o=>o.id!==s);t({notifications:n,notificationsUnread:Math.max(0,e().notificationsUnread-(i?1:0))}),await C.notifications.dismiss(s),await e().loadNotifications()},async actOnNotification(s){Se++;const i=e().notifications.some(a=>a.id===s&&a.read_at==null),n=e().notifications.filter(a=>a.id!==s);t({notifications:n,notificationsUnread:Math.max(0,e().notificationsUnread-(i?1:0))});const o=await C.notifications.act(s);return await e().loadNotifications(),o},async markAllNotificationsRead(){Se++;const s=Math.floor(Date.now()/1e3);t({notifications:e().notifications.map(i=>i.read_at==null?{...i,read_at:s}:i),notificationsUnread:0}),await C.notifications.readAll(),await e().loadNotifications()},async clearAllNotifications(){Se++,t({notifications:[],notificationsUnread:0}),await C.notifications.dismissAll(),await e().loadNotifications()},rightPaneMode:Ui(),setRightPaneMode(s){try{localStorage.setItem("cockpit.right_pane_mode",s)}catch{}t({rightPaneMode:s,viewContext:{tool:s,summary:wo[s]}})},focusedRowKey:null,setFocusedRowKey(s){t({focusedRowKey:s})},viewContext:{tool:Ui(),summary:wo[Ui()]},setViewContext(s){t({viewContext:s})}}));function j(t,e,s){let i=s?s(e.getState()):void 0;return e.subscribe(n=>{if(!s){t.requestUpdate();return}const o=s(n);Object.is(o,i)||(i=o,t.requestUpdate())})}class ha{constructor(e,s,i){this.host=e,this.store=s,this.selector=i,e.addController(this)}hostConnected(){this.unsubscribe=j(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}const Gn=new Set(["been-to","goals","canvas","grocery","finance","circle","learn","office","guests","publisher","newsroom","inbox","notify"]),Ul=new Set(["office","guests","publisher","newsroom","inbox"]);function Bl(t,e){return(t==="tools"||Gn.has(t))&&(!Ul.has(t)||e)}function ms(t){if(t==="#/tools")return{mode:"tools",fromTools:!1,standalone:!1};const e=t.match(/^#\/(tools|app|t)\/([\w-]+)$/);if(!e)return null;const s=e[2];return Gn.has(s)?{mode:s,fromTools:e[1]!=="app",standalone:e[1]==="t"}:null}function ua(t){return t.type==="view"&&t.panel&&Gn.has(t.name)?`#/tools/${t.name}`:null}function Hi(t){return t==="tools"?"#/tools":`#/app/${t}`}const Ss="cockpit.theme",Hl="cockpit.theme.dark";function zl(t){return t==="light"||t==="dark"||t==="auto"}function Kl(){try{const t=localStorage.getItem(Ss);return zl(t)?t:"auto"}catch{return"auto"}}const De=Math.PI/180,Vn=864e5,pa=2440588,ma=2451545,ql=De*23.4397,zi=9e-4,Wl=-.833*De,Gl=t=>t.valueOf()/Vn-.5+pa,$o=t=>new Date((t+.5-pa)*Vn),Vl=t=>Gl(t)-ma,Yl=t=>De*(357.5291+.98560028*t);function Ql(t){const e=De*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t));return t+e+De*102.9372+Math.PI}const Jl=t=>Math.asin(Math.sin(t)*Math.sin(ql)),So=(t,e,s)=>ma+t+.0053*Math.sin(e)-.0069*Math.sin(2*s),Xl=(t,e,s)=>Math.acos((Math.sin(t)-Math.sin(e)*Math.sin(s))/(Math.cos(e)*Math.cos(s)));function kn(t,e,s){const i=De*-s,n=De*e,o=Vl(t),a=Math.round(o-zi-i/(2*Math.PI)),l=zi+(0+i)/(2*Math.PI)+a,h=Yl(l),u=Ql(h),p=Jl(u),m=So(l,h,u),g=Xl(Wl,n,p);if(Number.isNaN(g))return null;const v=So(zi+(g+i)/(2*Math.PI)+a,h,u),x=m-(v-m);return{sunrise:$o(x),sunset:$o(v)}}function fa(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function ga(t){const e=sc[t];if(e)return{lat:e[0],lng:e[1]};let s=0;try{s=-new Date().getTimezoneOffset()/4}catch{s=0}return{lat:40,lng:s}}function Zl(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}}function tc(t,e=new Date){if(t==="dark")return!0;if(t==="light")return!1;const{lat:s,lng:i}=ga(fa()),n=kn(e,s,i);return n?e<n.sunrise||e>=n.sunset:Zl()}function ec(t=new Date){const{lat:e,lng:s}=ga(fa()),i=kn(t,e,s);if(!i)return null;if(t<i.sunrise)return i.sunrise;if(t<i.sunset)return i.sunset;const n=kn(new Date(t.getTime()+Vn),e,s);return n?n.sunrise:null}const sc={"Asia/Kuala_Lumpur":[3.14,101.69],"Europe/Dublin":[53.33,-6.25],"Europe/Istanbul":[41.01,28.96],"Europe/Vienna":[48.21,16.37],"Europe/London":[51.51,-.13],"Europe/Lisbon":[38.72,-9.14],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Berlin":[52.52,13.41],"Europe/Rome":[41.9,12.5],"Europe/Athens":[37.98,23.73],"Europe/Moscow":[55.76,37.62],"America/New_York":[40.71,-74.01],"America/Chicago":[41.88,-87.63],"America/Denver":[39.74,-104.99],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Africa/Cairo":[30.04,31.24],"Asia/Jerusalem":[31.78,35.22],"Asia/Dubai":[25.2,55.27],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Bangkok":[13.76,100.5],"Asia/Jakarta":[-6.21,106.85],"Asia/Singapore":[1.35,103.82],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Tokyo":[35.68,139.69],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76]};var ic=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,Yn=(t,e,s,i)=>{for(var n=i>1?void 0:i?nc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&ic(e,s,n),n};function Cs(t){return t.title?t.title:new Date(t.started_at*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function ba(t,e){const s=t.pinned_at!=null;return r`
    <button type="button" role="menuitem" @click=${()=>e("pin")}>
      <sc-icon name=${s?"lucide-pin-off":"lucide-pin"}></sc-icon>${s?"Unpin":"Pin"}
    </button>
    <button type="button" role="menuitem" @click=${()=>e("rename")}>
      <sc-icon name="lucide-pencil"></sc-icon>Rename
    </button>
    <hr />
    <button type="button" role="menuitem" class="is-danger" @click=${()=>e("delete")}>
      <sc-icon name="lucide-trash-2"></sc-icon>Delete
    </button>`}function $n(t){return f.getState().pinThread(t.id,t.pinned_at==null).catch(e=>{console.warn("[chat] pin failed",e)})}async function va(t,e){const s=e.replace(/\s+/g," ").trim();!s||s===t.title||await f.getState().renameThread(t.id,s).catch(i=>{console.warn("[chat] rename failed",i)})}function xa(t){const e=document.createElement("chat-delete-dialog");e.thread=t,document.body.append(e)}let ci=class extends T{constructor(){super(...arguments),this.thread=null,this.deleting=!1}close(){this.deleting||this.remove()}async doDelete(){if(!(!this.thread||this.deleting)){this.deleting=!0;try{await f.getState().deleteThread(this.thread.id),this.remove()}catch(t){console.warn("[chat] delete failed",t),this.deleting=!1}}}render(){const t=this.thread;return r`<sc-dialog label="Delete this chat?" open @sc-hide=${this.close}>
      <p class="text-muted leading-relaxed">“${t?Cs(t):""}” and all its messages will be deleted. This can't be undone.</p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm border border-line hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.doDelete()}>
          ${this.deleting?"Deleting…":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};Yn([b({attribute:!1})],ci.prototype,"thread",2);Yn([d()],ci.prototype,"deleting",2);ci=Yn([w("chat-delete-dialog")],ci);var oc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,os=(t,e,s,i)=>{for(var n=i>1?void 0:i?rc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&oc(e,s,n),n};const ac={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher"},lc={notes:"canvas"};function es(t){const e=t.tool??ac[t.persona]??null;return e?lc[e]??e:null}const Qn={key:"",label:"Mana",icon:"sparkles"},To="cockpit.sidebar_chat_groups",Co=15;let xe=class extends T{constructor(){super(...arguments),this.tools=[],this.open=xe.loadOpen(),this.recentsShown=Co,this.menu=null,this.renamingId=null,this.closeMenu=()=>{this.menu=null},this.onOutside=t=>{this.menu&&!t.composedPath().some(e=>e instanceof HTMLElement&&e.classList.contains("mana-chat-menu"))&&(this.menu=null)},this.onMenuKey=t=>{t.key==="Escape"&&this.menu&&(t.preventDefault(),this.menu=null)}}static loadOpen(){try{const t=localStorage.getItem(To);if(t)return new Set(JSON.parse(t))}catch{}return new Set(["pinned","recents"])}connectedCallback(){super.connectedCallback(),this.unsubThreads=j(this,f,t=>t.threads),this.unsubCurrent=j(this,f,t=>t.currentThreadId),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onMenuKey),window.addEventListener("blur",this.closeMenu)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onMenuKey),window.removeEventListener("blur",this.closeMenu)}onContextMenu(t,e){t.preventDefault(),this.menu={thread:e,x:Math.min(t.clientX,window.innerWidth-180),y:Math.min(t.clientY,window.innerHeight-140)}}menuAction(t){const e=this.menu?.thread;this.menu=null,e&&(t==="pin"?$n(e):t==="rename"?(this.renamingId=e.id,this.updateComplete.then(()=>{const s=this.querySelector("input.mana-chat-rename");s?.focus(),s?.select()})):xa(e))}async saveRename(t,e){this.renamingId===t.id&&(this.renamingId=null,await va(t,e))}toggle(t){const e=new Set(this.open);e.has(t)?e.delete(t):e.add(t),this.open=e;try{localStorage.setItem(To,JSON.stringify([...e]))}catch{}}toolInfo(t){return t?this.tools.find(e=>e.key===t)??{key:t,label:t[0].toUpperCase()+t.slice(1),icon:"message-circle"}:Qn}openThread(t){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:t.id,tool:es(t)},bubbles:!0,composed:!0}))}onPin(t,e){t.stopPropagation(),$n(e)}section(t,e,s,i){const n=this.open.has(t);return r`<div class="mana-chats-section">
      <button type="button" class="mana-chats-heading" aria-expanded=${n} @click=${()=>this.toggle(t)}>
        <span>${e}</span>
        ${i!=null?r`<span class="mana-chats-count">${i}</span>`:c}
        <sc-icon name=${n?"lucide-chevron-down":"lucide-chevron-right"}></sc-icon>
      </button>
      ${n?s():c}
    </div>`}row(t,e,s){const i=s?this.toolInfo(es(t)):null,n=t.pinned_at!=null;return this.renamingId===t.id?r`<div class="mana-chat-row is-active">
        <input class="mana-chat-rename" aria-label="Chat name" .value=${t.title??""}
          @keydown=${o=>{o.key==="Enter"?(o.preventDefault(),this.saveRename(t,o.target.value)):o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),this.renamingId=null)}}
          @blur=${o=>void this.saveRename(t,o.target.value)} />
      </div>`:r`<div class="mana-chat-row ${e===t.id?"is-active":""} ${this.menu?.thread.id===t.id?"is-menu":""}"
      @contextmenu=${o=>this.onContextMenu(o,t)}>
      <button type="button" class="mana-chat-open" title=${Cs(t)} aria-current=${e===t.id?"true":c}
        @click=${()=>this.openThread(t)}>
        ${i?r`<sc-icon name="lucide-${i.icon}" title=${i.label}></sc-icon>`:c}
        <span class="mana-sidebar-label">${Cs(t)}</span>
      </button>
      <button type="button" class="mana-chat-pin ${n?"is-pinned":""}" aria-label=${n?"Unpin chat":"Pin chat"}
        title=${n?"Unpin":"Pin"} @click=${o=>this.onPin(o,t)}>
        <sc-icon name=${n?"lucide-pin-off":"lucide-pin"}></sc-icon>
      </button>
    </div>`}renderMenu(){const t=this.menu;return t?r`<div class="mana-chat-menu" role="menu" style="left:${t.x}px;top:${t.y}px">
      ${ba(t.thread,e=>this.menuAction(e))}
    </div>`:c}render(){const{threads:t,currentThreadId:e}=f.getState(),s=t.filter(l=>l.pinned_at!=null).sort((l,h)=>(h.pinned_at??0)-(l.pinned_at??0)),i=new Map;for(const l of t){const h=es(l)??"",u=i.get(h);u?u.push(l):i.set(h,[l])}const n=l=>{const h=this.tools.findIndex(u=>u.key===l);return l===""?Number.MAX_SAFE_INTEGER:h<0?this.tools.length:h},o=[...i.keys()].sort((l,h)=>n(l)-n(h)),a=t.slice(0,this.recentsShown);return r`
      ${s.length?this.section("pinned","Pinned",()=>s.map(l=>this.row(l,e,!0))):c}
      ${this.section("recents","Recents",()=>r`
        ${a.length?a.map(l=>this.row(l,e,!0)):r`<p class="mana-chats-empty">No chats yet</p>`}
        ${t.length>this.recentsShown?r`<button type="button" class="mana-chats-more" @click=${()=>{this.recentsShown+=Co}}>Show more</button>`:c}
      `)}
      ${this.section("bytool","By tool",()=>o.map(l=>{const h=this.toolInfo(l||null),u=i.get(l)??[],p=this.open.has(`tool:${l}`);return r`<button type="button" class="mana-chat-group" aria-expanded=${p} @click=${()=>this.toggle(`tool:${l}`)}>
              <sc-icon name="lucide-${h.icon}"></sc-icon>
              <span class="mana-sidebar-label">${h.label}</span>
              <span class="mana-chats-count">${u.length}</span>
            </button>
            ${p?r`<div class="mana-chat-group-list">${u.map(m=>this.row(m,e,!1))}</div>`:c}`}))}
      ${this.renderMenu()}
    `}};os([b({attribute:!1})],xe.prototype,"tools",2);os([d()],xe.prototype,"open",2);os([d()],xe.prototype,"recentsShown",2);os([d()],xe.prototype,"menu",2);os([d()],xe.prototype,"renamingId",2);xe=os([w("sidebar-threads")],xe);var cc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,rs=(t,e,s,i)=>{for(var n=i>1?void 0:i?dc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&cc(e,s,n),n};let Pe=class extends T{constructor(){super(...arguments),this.tools=[],this.q="",this.hits=null,this.active=0,this.timer=null,this.seq=0}firstUpdated(){this.input?.focus()}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearTimeout(this.timer)}close(){this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))}onInput(t){this.q=t.target.value,this.active=0,this.timer&&clearTimeout(this.timer);const e=this.q.trim();if(!e){this.hits=null;return}this.timer=setTimeout(()=>{const s=++this.seq;C.threads.search(e).then(i=>{s===this.seq&&(this.hits=i)}).catch(()=>{s===this.seq&&(this.hits=[])})},180)}results(){return this.hits??f.getState().threads.slice(0,8)}pick(t){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:t.id,tool:es(t)},bubbles:!0,composed:!0})),this.close()}onKey(t){const e=this.results();if(t.key==="Escape")t.preventDefault(),this.close();else if(t.key==="ArrowDown")t.preventDefault(),this.active=Math.min(this.active+1,e.length-1);else if(t.key==="ArrowUp")t.preventDefault(),this.active=Math.max(this.active-1,0);else if(t.key==="Enter"){const s=e[this.active];s&&(t.preventDefault(),this.pick(s))}}toolLabel(t){const e=es(t);return e?this.tools.find(s=>s.key===e)?.label??e:Qn.label}render(){const t=this.results();return r`<div class="mana-search-backdrop" @click=${this.close}>
      <div class="mana-search" role="dialog" aria-label="Search chats" @click=${e=>e.stopPropagation()}>
        <div class="mana-search-input">
          <sc-icon name="lucide-search"></sc-icon>
          <input type="text" placeholder="Search chats" aria-label="Search chats" .value=${this.q}
            @input=${this.onInput} @keydown=${this.onKey} />
        </div>
        <p class="mana-search-heading">${this.hits?"Results":"Recent chats"}</p>
        <ul role="listbox" class="mana-search-list">
          ${t.length===0?r`<li class="mana-search-empty">No chats match "${this.q.trim()}"</li>`:t.map((e,s)=>r`<li role="option" aria-selected=${s===this.active}
                class="mana-search-row ${s===this.active?"is-active":""}"
                @mouseenter=${()=>{this.active=s}} @click=${()=>this.pick(e)}>
                <sc-icon name="lucide-message-circle"></sc-icon>
                <span class="mana-search-text">
                  <span class="mana-search-title">${Cs(e)}</span>
                  ${e.snippet?r`<span class="mana-search-snippet">${e.snippet}</span>`:c}
                </span>
                <span class="mana-search-tool">${this.toolLabel(e)}</span>
              </li>`)}
        </ul>
      </div>
    </div>`}};rs([b({attribute:!1})],Pe.prototype,"tools",2);rs([d()],Pe.prototype,"q",2);rs([d()],Pe.prototype,"hits",2);rs([d()],Pe.prototype,"active",2);rs([Y("input")],Pe.prototype,"input",2);Pe=rs([w("thread-search")],Pe);var hc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Ai=(t,e,s,i)=>{for(var n=i>1?void 0:i?uc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&hc(e,s,n),n};let Es=class extends T{constructor(){super(...arguments),this.tools=null,this.menuOpen=!1,this.renaming=!1,this.onOutside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.onKey=t=>{t.key==="Escape"&&this.menuOpen&&(t.preventDefault(),this.menuOpen=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=j(this,f,t=>t.threads),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.unsubMode=j(this,f,t=>t.rightPaneMode),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),this.unsubMode?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey)}current(){const{threads:t,currentThreadId:e}=f.getState();return e==null?null:t.find(s=>s.id===e)??null}run(t){const e=this.current();this.menuOpen=!1,e&&(t==="pin"?$n(e):t==="delete"?xa(e):(this.renaming=!0,this.updateComplete.then(()=>{const s=this.querySelector("input");s?.focus(),s?.select()})))}async save(t){const e=this.current();this.renaming&&(this.renaming=!1,e&&await va(e,t))}toolIcon(t){if(!this.tools)return c;const e=t?es(t):f.getState().rightPaneMode,s=e&&this.tools.find(i=>i.key===e)||Qn;return r`<sc-icon class="mana-chat-title-tool" name="lucide-${s.icon}" title=${s.label} aria-label=${`In ${s.label}`}></sc-icon>`}newChatButton(){return r`<button type="button" class="mana-chat-title-btn mana-chat-new-btn" aria-label="New chat" title="New chat (⌘N)"
      @click=${()=>document.dispatchEvent(new CustomEvent("mana-new-chat"))}>
      <sc-icon name="lucide-square-pen"></sc-icon>
    </button>`}render(){const t=this.current();return t?this.renaming?r`<input class="mana-chat-title-input" aria-label="Chat name" .value=${t.title??""}
        @keydown=${e=>{e.key==="Enter"?(e.preventDefault(),this.save(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.renaming=!1)}}
        @blur=${e=>void this.save(e.target.value)} />`:r`<div class="mana-chat-titlebar">
      ${this.toolIcon(t)}
      <span class="mana-chat-title" title="Double-click to rename" @dblclick=${()=>this.run("rename")}>${Cs(t)}</span>
      <button type="button" class="mana-chat-title-btn" aria-label="Chat options" aria-haspopup="menu" aria-expanded=${this.menuOpen}
        @click=${()=>{this.menuOpen=!this.menuOpen}}>
        <sc-icon name="lucide-chevron-down"></sc-icon>
      </button>
      ${this.menuOpen?r`<div class="mana-chat-menu is-anchored" role="menu">${ba(t,e=>this.run(e))}</div>`:c}
      ${this.newChatButton()}
    </div>`:r`<div class="mana-chat-titlebar">${this.toolIcon(t)}<span class="mana-chat-title is-new">New chat</span>${this.newChatButton()}</div>`}};Ai([b({attribute:!1})],Es.prototype,"tools",2);Ai([d()],Es.prototype,"menuOpen",2);Ai([d()],Es.prototype,"renaming",2);Es=Ai([w("chat-title-bar")],Es);function Jn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var He=Jn();function ya(t){He=t}var Ee={exec:()=>null};function Ye(t){let e=[];return s=>{let i=Math.max(0,Math.min(3,s-1)),n=e[i];return n||(n=t(i),e[i]=n),n}}function F(t,e=""){let s=typeof t=="string"?t:t.source,i={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(ct.caret,"$1"),s=s.replace(n,a),i},getRegex:()=>new RegExp(s,e)};return i}var pc=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),ct={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ye(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ye(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ye(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ye(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Ye(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Ye(t=>new RegExp(`^ {0,${t}}>`))},mc=/^(?:[ \t]*(?:\n|$))+/,fc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Os=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,wa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ka=F(wa).replace(/bull/g,Xn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vc=F(wa).replace(/bull/g,Xn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Zn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xc=/^[^\n]+/,to=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,yc=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",to).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wc=F(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Xn).getRegex(),Mi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",eo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,kc=F("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",eo).replace("tag",Mi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),$a=F(Zn).replace("hr",Os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex(),$c=F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$a).getRegex(),so={blockquote:$c,code:fc,def:yc,fences:gc,heading:bc,hr:Os,html:kc,lheading:ka,list:wc,newline:mc,paragraph:$a,table:Ee,text:xc},Eo=F("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex(),Sc={...so,lheading:vc,table:Eo,paragraph:F(Zn).replace("hr",Os).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Eo).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex()},Tc={...so,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",eo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(Zn).replace("hr",Os).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ka).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Cc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ec=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Sa=/^( {2,}|\\)\n(?!\s*$)/,Dc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,as=/[\p{P}\p{S}]/u,Ii=/[\s\p{P}\p{S}]/u,io=/[^\s\p{P}\p{S}]/u,Pc=F(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ii).getRegex(),Ta=/(?!~)[\p{P}\p{S}]/u,Ac=/(?!~)[\s\p{P}\p{S}]/u,Mc=/(?:[^\s\p{P}\p{S}]|~)/u,Ic=F(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",pc?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Ca=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,_c=F(Ca,"u").replace(/punct/g,as).getRegex(),Oc=F(Ca,"u").replace(/punct/g,Ta).getRegex(),Ea="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Lc=F(Ea,"gu").replace(/notPunctSpace/g,io).replace(/punctSpace/g,Ii).replace(/punct/g,as).getRegex(),Rc=F(Ea,"gu").replace(/notPunctSpace/g,Mc).replace(/punctSpace/g,Ac).replace(/punct/g,Ta).getRegex(),Nc=F("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,io).replace(/punctSpace/g,Ii).replace(/punct/g,as).getRegex(),jc=F(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,as).getRegex(),Fc="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Uc=F(Fc,"gu").replace(/notPunctSpace/g,io).replace(/punctSpace/g,Ii).replace(/punct/g,as).getRegex(),Bc=F(/\\(punct)/,"gu").replace(/punct/g,as).getRegex(),Hc=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zc=F(eo).replace("(?:-->|$)","-->").getRegex(),Kc=F("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),di=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,qc=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",di).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Da=F(/^!?\[(label)\]\[(ref)\]/).replace("label",di).replace("ref",to).getRegex(),Pa=F(/^!?\[(ref)\](?:\[\])?/).replace("ref",to).getRegex(),Wc=F("reflink|nolink(?!\\()","g").replace("reflink",Da).replace("nolink",Pa).getRegex(),Do=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,no={_backpedal:Ee,anyPunctuation:Bc,autolink:Hc,blockSkip:Ic,br:Sa,code:Ec,del:Ee,delLDelim:Ee,delRDelim:Ee,emStrongLDelim:_c,emStrongRDelimAst:Lc,emStrongRDelimUnd:Nc,escape:Cc,link:qc,nolink:Pa,punctuation:Pc,reflink:Da,reflinkSearch:Wc,tag:Kc,text:Dc,url:Ee},Gc={...no,link:F(/^!?\[(label)\]\((.*?)\)/).replace("label",di).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",di).getRegex()},Sn={...no,emStrongRDelimAst:Rc,emStrongLDelim:Oc,delLDelim:jc,delRDelim:Uc,url:F(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Do).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:F(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Do).getRegex()},Vc={...Sn,br:F(Sa).replace("{2,}","*").getRegex(),text:F(Sn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Hs={normal:so,gfm:Sc,pedantic:Tc},fs={normal:no,gfm:Sn,breaks:Vc,pedantic:Gc},Yc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Po=t=>Yc[t];function Gt(t,e){if(e){if(ct.escapeTest.test(t))return t.replace(ct.escapeReplace,Po)}else if(ct.escapeTestNoEncode.test(t))return t.replace(ct.escapeReplaceNoEncode,Po);return t}function Ao(t){try{t=encodeURI(t).replace(ct.percentDecode,"%")}catch{return null}return t}function Mo(t,e){let s=t.replace(ct.findPipe,(o,a,l)=>{let h=!1,u=a;for(;--u>=0&&l[u]==="\\";)h=!h;return h?"|":" |"}),i=s.split(ct.splitPipe),n=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(ct.slashPipe,"|");return i}function ue(t,e,s){let i=t.length;if(i===0)return"";let n=0;for(;n<i&&t.charAt(i-n-1)===e;)n++;return t.slice(0,i-n)}function Io(t){let e=t.split(`
`),s=e.length-1;for(;s>=0&&ct.blankLine.test(e[s]);)s--;return e.length-s<=2?t:e.slice(0,s+1).join(`
`)}function Qc(t,e){if(t.indexOf(e[1])===-1)return-1;let s=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])s++;else if(t[i]===e[1]&&(s--,s<0))return i;return s>0?-2:-1}function Jc(t,e=0){let s=e,i="";for(let n of t)if(n==="	"){let o=4-s%4;i+=" ".repeat(o),s+=o}else i+=n,s++;return i}function _o(t,e,s,i,n){let o=e.href,a=e.title||null,l=t[1].replace(n.other.outputLinkReplace,"$1");i.state.inLink=!0;let h={type:t[0].charAt(0)==="!"?"image":"link",raw:s,href:o,title:a,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,h}function Xc(t,e,s){let i=t.match(s.other.indentCodeCompensation);if(i===null)return e;let n=i[1];return e.split(`
`).map(o=>{let a=o.match(s.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=n.length?o.slice(n.length):o}).join(`
`)}var hi=class{options;rules;lexer;constructor(t){this.options=t||He}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let s=this.options.pedantic?e[0]:Io(e[0]),i=s.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s,codeBlockStyle:"indented",text:i}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let s=e[0],i=Xc(s,e[3]||"",this.rules);return{type:"code",raw:s,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let s=e[2].trim();if(this.rules.other.endingHash.test(s)){let i=ue(s,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(s=i.trim())}return{type:"heading",raw:ue(e[0],`
`),depth:e[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:ue(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let s=ue(e[0],`
`).split(`
`),i="",n="",o=[];for(;s.length>0;){let a=!1,l=[],h;for(h=0;h<s.length;h++)if(this.rules.other.blockquoteStart.test(s[h]))l.push(s[h]),a=!0;else if(!a)l.push(s[h]);else break;s=s.slice(h);let u=l.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,n=n?`${n}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=m,s.length===0)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let v=g,x=v.raw+`
`+s.join(`
`),A=this.blockquote(x);o[o.length-1]=A,i=i.substring(0,i.length-v.raw.length)+A.raw,n=n.substring(0,n.length-v.text.length)+A.text;break}else if(g?.type==="list"){let v=g,x=v.raw+`
`+s.join(`
`),A=this.list(x);o[o.length-1]=A,i=i.substring(0,i.length-g.raw.length)+A.raw,n=n.substring(0,n.length-v.raw.length)+A.raw,s=x.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let s=e[1].trim(),i=s.length>1,n={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let o=this.rules.other.listItemRegex(s),a=!1;for(;t;){let h=!1,u="",p="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let m=Jc(e[2].split(`
`,1)[0],e[1].length),g=t.split(`
`,1)[0],v=!m.trim(),x=0;if(this.options.pedantic?(x=2,p=m.trimStart()):v?x=e[1].length+1:(x=m.search(this.rules.other.nonSpaceChar),x=x>4?1:x,p=m.slice(x),x+=e[1].length),v&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),h=!0),!h){let A=this.rules.other.nextBulletRegex(x),y=this.rules.other.hrRegex(x),N=this.rules.other.fencesBeginRegex(x),Q=this.rules.other.headingBeginRegex(x),Nt=this.rules.other.htmlBeginRegex(x),St=this.rules.other.blockquoteBeginRegex(x);for(;t;){let he=t.split(`
`,1)[0],S;if(g=he,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),S=g):S=g.replace(this.rules.other.tabCharGlobal,"    "),N.test(g)||Q.test(g)||Nt.test(g)||St.test(g)||A.test(g)||y.test(g))break;if(S.search(this.rules.other.nonSpaceChar)>=x||!g.trim())p+=`
`+S.slice(x);else{if(v||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(m)||Q.test(m)||y.test(m))break;p+=`
`+g}v=!g.trim(),u+=he+`
`,t=t.substring(he.length+1),m=S.slice(x)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=u}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let h of n.items){this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]);let u=h.tokens[0];if(h.task&&(u?.type==="text"||u?.type==="paragraph")){h.text=h.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(h.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};h.checked=m.checked,n.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=m.raw+h.tokens[0].raw,h.tokens[0].text=m.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(m)):h.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):h.tokens.unshift(m)}}else h.task&&(h.task=!1);if(!n.loose){let p=h.tokens.filter(g=>g.type==="space"),m=p.length>0&&p.some(g=>this.rules.other.anyLine.test(g.raw));n.loose=m}}if(n.loose)for(let h of n.items){h.loose=!0;for(let u of h.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(t){let e=this.rules.block.html.exec(t);if(e){let s=Io(e[0]);return{type:"html",block:!0,raw:s,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:s}}}def(t){let e=this.rules.block.def.exec(t);if(e){let s=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:s,raw:ue(e[0],`
`),href:i,title:n}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let s=Mo(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:ue(e[0],`
`),header:[],align:[],rows:[]};if(s.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<s.length;a++)o.header.push({text:s[a],tokens:this.lexer.inline(s[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(Mo(a,o.header.length).map((l,h)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[h]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let s=e[1].trim();return{type:"heading",raw:ue(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let s=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:s,tokens:this.lexer.inline(s)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let s=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=ue(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=Qc(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],n=o[3])}else n=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),_o(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){let i=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[i.toLowerCase()];if(!n){let o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return _o(s,n,s[0],this.lexer,this.rules)}}emStrong(t,e,s=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,l=n,h=0,u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+n);(i=u.exec(e))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=[...o].length,i[3]||i[4]){l+=a;continue}else if((i[5]||i[6])&&n%3&&!((n+a)%3)){h+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+h);let p=[...i[0]][0].length,m=t.slice(0,n+i.index+p+a);if(Math.min(n,a)%2){let v=m.slice(1,-1);return{type:"em",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}let g=m.slice(2,-2);return{type:"strong",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let s=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return i&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:e[0],text:s}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,s=""){let i=this.rules.inline.delLDelim.exec(t);if(i&&(!i[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,l=n,h=this.rules.inline.delRDelim;for(h.lastIndex=0,e=e.slice(-1*t.length+n);(i=h.exec(e))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(a=[...o].length,a!==n))continue;if(i[3]||i[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let u=[...i[0]][0].length,p=t.slice(0,n+i.index+u+a),m=p.slice(n,-n);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let s,i;return e[2]==="@"?(s=e[1],i="mailto:"+s):(s=e[1],i=s),{type:"link",raw:e[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let s,i;if(e[2]==="@")s=e[0],i="mailto:"+s;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);s=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let s=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:s}}}},jt=class Tn{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||He,this.options.tokenizer=this.options.tokenizer||new hi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:ct,block:Hs.normal,inline:fs.normal};this.options.pedantic?(s.block=Hs.pedantic,s.inline=fs.pedantic):this.options.gfm&&(s.block=Hs.gfm,this.options.breaks?s.inline=fs.breaks:s.inline=fs.gfm),this.tokenizer.rules=s}static get rules(){return{block:Hs,inline:fs}}static lex(e,s){return new Tn(s).lex(e)}static lexInline(e,s){return new Tn(s).inlineTokens(e)}lex(e){e=e.replace(ct.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let i=this.inlineQueue[s];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,s=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ct.tabCharGlobal,"    ").replace(ct.spaceLine,""));let n=1/0;for(;e;){if(e.length<n)n=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(l=>(o=l.call({lexer:this},e,s))?(e=e.substring(o.raw.length),s.push(o),!0):!1))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let l=s.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:s.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let l=s.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):s.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let l=s.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},s.push(o));continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),s.push(o);continue}let a=e;if(this.options.extensions?.startBlock){let l=1/0,h=e.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},h),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let l=s.at(-1);i&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):s.push(o),i=a.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let l=s.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):s.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,s}inline(e,s=[]){return this.inlineQueue.push({src:e,tokens:s}),s}inlineTokens(e,s=[]){this.tokenizer.lexer=this;let i=e,n=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)u.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,n.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)o=n[2]?n[2].length:0,i=i.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,l="",h=1/0;for(;e;){if(e.length<h)h=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(l=""),a=!1;let u;if(this.options.extensions?.inline?.some(m=>(u=m.call({lexer:this},e,s))?(e=e.substring(u.raw.length),s.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);let m=s.at(-1);u.type==="text"&&m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):s.push(u);continue}if(u=this.tokenizer.emStrong(e,i,l)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.del(e,i,l)){e=e.substring(u.raw.length),s.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),s.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),s.push(u);continue}let p=e;if(this.options.extensions?.startInline){let m=1/0,g=e.slice(1),v;this.options.extensions.startInline.forEach(x=>{v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(p=e.substring(0,m+1))}if(u=this.tokenizer.inlineText(p)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),a=!0;let m=s.at(-1);m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):s.push(u);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return s}infiniteLoopError(e){let s="Infinite loop on byte: "+e;if(this.options.silent)console.error(s);else throw new Error(s)}},ui=class{options;parser;constructor(t){this.options=t||He}space(t){return""}code({text:t,lang:e,escaped:s}){let i=(e||"").match(ct.notSpaceStart)?.[0],n=t.replace(ct.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Gt(i)+'">'+(s?n:Gt(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Gt(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,s=t.start,i="";for(let a=0;a<t.items.length;a++){let l=t.items[a];i+=this.listitem(l)}let n=e?"ol":"ul",o=e&&s!==1?' start="'+s+'"':"";return"<"+n+o+`>
`+i+"</"+n+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",s="";for(let n=0;n<t.header.length;n++)s+=this.tablecell(t.header[n]);e+=this.tablerow({text:s});let i="";for(let n=0;n<t.rows.length;n++){let o=t.rows[n];s="";for(let a=0;a<o.length;a++)s+=this.tablecell(o[a]);i+=this.tablerow({text:s})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Gt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:s}){let i=this.parser.parseInline(s),n=Ao(t);if(n===null)return i;t=n;let o='<a href="'+t+'"';return e&&(o+=' title="'+Gt(e)+'"'),o+=">"+i+"</a>",o}image({href:t,title:e,text:s,tokens:i}){i&&(s=this.parser.parseInline(i,this.parser.textRenderer));let n=Ao(t);if(n===null)return Gt(s);t=n;let o=`<img src="${t}" alt="${Gt(s)}"`;return e&&(o+=` title="${Gt(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Gt(t.text)}},oo=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},Ft=class Cn{options;renderer;textRenderer;constructor(e){this.options=e||He,this.options.renderer=this.options.renderer||new ui,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new oo}static parse(e,s){return new Cn(s).parse(e)}static parseInline(e,s){return new Cn(s).parseInline(e)}parse(e){this.renderer.parser=this;let s="";for(let i=0;i<e.length;i++){let n=e[i];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){s+=l||"";continue}}let o=n;switch(o.type){case"space":{s+=this.renderer.space(o);break}case"hr":{s+=this.renderer.hr(o);break}case"heading":{s+=this.renderer.heading(o);break}case"code":{s+=this.renderer.code(o);break}case"table":{s+=this.renderer.table(o);break}case"blockquote":{s+=this.renderer.blockquote(o);break}case"list":{s+=this.renderer.list(o);break}case"checkbox":{s+=this.renderer.checkbox(o);break}case"html":{s+=this.renderer.html(o);break}case"def":{s+=this.renderer.def(o);break}case"paragraph":{s+=this.renderer.paragraph(o);break}case"text":{s+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(e,s=this.renderer){this.renderer.parser=this;let i="";for(let n=0;n<e.length;n++){let o=e[n];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=l||"";continue}}let a=o;switch(a.type){case"escape":{i+=s.text(a);break}case"html":{i+=s.html(a);break}case"link":{i+=s.link(a);break}case"image":{i+=s.image(a);break}case"checkbox":{i+=s.checkbox(a);break}case"strong":{i+=s.strong(a);break}case"em":{i+=s.em(a);break}case"codespan":{i+=s.codespan(a);break}case"br":{i+=s.br(a);break}case"del":{i+=s.del(a);break}case"text":{i+=s.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},Ts=class{options;block;constructor(t){this.options=t||He}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?jt.lex:jt.lexInline}provideParser(t=this.block){return t?Ft.parse:Ft.parseInline}},Aa=class{defaults=Jn();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ft;Renderer=ui;TextRenderer=oo;Lexer=jt;Tokenizer=hi;Hooks=Ts;constructor(...t){this.use(...t)}walkTokens(t,e){let s=[];for(let i of t)switch(s=s.concat(e.call(this,i)),i.type){case"table":{let n=i;for(let o of n.header)s=s.concat(this.walkTokens(o.tokens,e));for(let o of n.rows)for(let a of o)s=s.concat(this.walkTokens(a.tokens,e));break}case"list":{let n=i;s=s.concat(this.walkTokens(n.items,e));break}default:{let n=i;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);s=s.concat(this.walkTokens(a,e))}):n.tokens&&(s=s.concat(this.walkTokens(n.tokens,e)))}}return s}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(s=>{let i={...s};if(i.async=this.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=e.renderers[n.name];o?e.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[n.level];o?o.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),i.extensions=e),s.renderer){let n=this.defaults.renderer||new ui(this.defaults);for(let o in s.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=s.renderer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p||""}}i.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new hi(this.defaults);for(let o in s.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=s.tokenizer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}i.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new Ts;for(let o in s.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=s.hooks[a],h=n[a];Ts.passThroughHooks.has(o)?n[a]=u=>{if(this.defaults.async&&Ts.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await l.call(n,u);return h.call(n,m)})();let p=l.call(n,u);return h.call(n,p)}:n[a]=(...u)=>{if(this.defaults.async)return(async()=>{let m=await l.apply(n,u);return m===!1&&(m=await h.apply(n,u)),m})();let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}i.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,o=s.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),n&&(l=l.concat(n.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return jt.lex(t,e??this.defaults)}parser(t,e){return Ft.parse(t,e??this.defaults)}parseMarkdown(t){return(e,s)=>{let i={...s},n={...this.defaults,...i},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(e):e,l=await(n.hooks?await n.hooks.provideLexer(t):t?jt.lex:jt.lexInline)(a,n),h=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(h,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser(t):t?Ft.parse:Ft.parseInline)(h,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(o);try{n.hooks&&(e=n.hooks.preprocess(e));let a=(n.hooks?n.hooks.provideLexer(t):t?jt.lex:jt.lexInline)(e,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(t):t?Ft.parse:Ft.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+Gt(s.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(s);throw s}}},Ae=new Aa;function H(t,e){return Ae.parse(t,e)}H.options=H.setOptions=function(t){return Ae.setOptions(t),H.defaults=Ae.defaults,ya(H.defaults),H};H.getDefaults=Jn;H.defaults=He;H.use=function(...t){return Ae.use(...t),H.defaults=Ae.defaults,ya(H.defaults),H};H.walkTokens=function(t,e){return Ae.walkTokens(t,e)};H.parseInline=Ae.parseInline;H.Parser=Ft;H.parser=Ft.parse;H.Renderer=ui;H.TextRenderer=oo;H.Lexer=jt;H.lexer=jt.lex;H.Tokenizer=hi;H.Hooks=Ts;H.parse=H;H.options;H.setOptions;H.use;H.walkTokens;H.parseInline;Ft.parse;jt.lex;const Zc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),td=new Aa({gfm:!0,renderer:{html(t){return Zc(t.text)}}}),ed=new Set(["p","br","hr","strong","b","em","i","del","s","code","pre","kbd","sup","sub","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","table","thead","tbody","tr","th","td","input","span"]),sd=new Set(["script","style","iframe","object","embed","template","noscript","svg","math","form","textarea","select","button"]),id=/^(https?:|mailto:|\/|#|\.{0,2}\/)/i,nd=/^(https?:|\/|data:image\/(png|jpe?g|gif|webp);)/i;function od(t){const e=t.tagName.toLowerCase();for(const s of Array.from(t.attributes)){const i=s.name.toLowerCase(),n=s.value.trim();let o=!1;e==="a"&&i==="href"?o=id.test(n):e==="a"&&i==="title"?o=!0:e==="img"&&i==="src"?o=nd.test(n):e==="img"&&(i==="alt"||i==="title")?o=!0:e==="ol"&&i==="start"?o=/^\d+$/.test(n):(e==="th"||e==="td")&&i==="align"?o=/^(left|right|center)$/.test(n):e==="code"&&i==="class"?o=/^language-[\w+-]+$/.test(n):e==="input"&&(i==="type"||i==="checked"||i==="disabled")&&(o=i!=="type"||n==="checkbox"),o||t.removeAttribute(s.name)}e==="a"&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")),e==="input"&&t.setAttribute("disabled","")}function rd(t){const e=document.createElement("template");e.innerHTML=t;const s=i=>{for(const n of Array.from(i.children)){const o=n.tagName.toLowerCase();if(sd.has(o)){n.remove();continue}if(s(n),!ed.has(o)||o==="input"&&n.getAttribute("type")!=="checkbox"){n.replaceWith(...Array.from(n.childNodes));continue}od(n)}};return s(e.content),e.innerHTML}function Ma(t){return rd(td.parse(t,{async:!1}))}const Oo=t=>Array.from(t.matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu),e=>({value:e[0].toLowerCase(),start:e.index,end:e.index+e[0].length})),ad=(t,e)=>{const s=t.toLowerCase().indexOf(e.toLowerCase());return s<0?null:{start:s,end:s+e.length}};function Ia(t,e){if(!t.trim())return null;const s=e.trim().replace(/^\s*["“]|["”]\s*$/g,"");if(s.length<4)return null;const i=s.split(/(?:\.{3}|…)/).map(n=>n.trim()).filter(n=>n.length>=4).sort((n,o)=>o.length-n.length);for(const n of i.length?i:[s]){const o=ad(t,n);if(o)return o;const a=Oo(n);if(a.length<2)continue;const l=Oo(t);for(let h=0;h<=l.length-a.length;h++){let u=!0;for(let g=0;g<a.length;g++)if(l[h+g]?.value!==a[g]?.value){u=!1;break}const p=l[h],m=l[h+a.length-1];if(u&&p&&m)return{start:p.start,end:m.end}}}return null}var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ls=(t,e,s,i)=>{for(var n=i>1?void 0:i?cd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&ld(e,s,n),n};function dd(t){if(!t)return;const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);cursor:zoom-out;padding:2rem;opacity:0;transition:opacity .12s ease;";const s=document.createElement("img");s.src=t,s.style.cssText="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.5);",e.appendChild(s);const i=()=>{e.remove(),document.removeEventListener("keydown",n)},n=o=>{o.key==="Escape"&&i()};e.addEventListener("click",i),document.addEventListener("keydown",n),document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"})}let Me=class extends T{constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[],this.pending=!1,this.publisherReferences=!1,this.referenceFrame=null}disconnectedCallback(){super.disconnectedCallback(),this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame)}updated(){this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame),this.referenceFrame=requestAnimationFrame(()=>{this.referenceFrame=null,this.markPublisherReferences()})}markPublisherReferences(){const t=this.querySelector(".chat-md");if(!t)return;for(const n of Array.from(t.querySelectorAll(".chat-draft-ref")))n.replaceWith(document.createTextNode(n.textContent??""));if(t.normalize(),!this.publisherReferences||this.chatRole!=="mentor")return;const e=document.querySelector("publisher-editor textarea[data-draft-body]")?.value??"";if(!e)return;const s=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest("a, code, pre, .chat-draft-ref")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),i=[];for(;s.nextNode();)i.push(s.currentNode);for(const n of i){const o=n.data,a=Array.from(o.matchAll(/["“]([^"“”\n]{4,320})["”]/g)).filter(u=>u[1]&&Ia(e,u[1]));if(!a.length)continue;const l=document.createDocumentFragment();let h=0;for(const u of a){const p=u.index??0;l.append(o.slice(h,p));const m=document.createElement("span");m.className="chat-draft-ref";const g=u[1];g&&(m.dataset.publisherReference=g,m.tabIndex=0,m.setAttribute("role","link"),m.setAttribute("aria-label",`Show “${g}” in the Publisher draft`),m.title="Show this in the draft",m.textContent=u[0],l.append(m),h=p+u[0].length)}l.append(o.slice(h)),n.replaceWith(l)}}openPublisherReference(t){const s=(t instanceof Element?t.closest(".chat-draft-ref"):null)?.dataset.publisherReference;return s?(document.dispatchEvent(new CustomEvent("publisher-reference",{detail:{text:s}})),!0):!1}renderBody(){return this.content?this.chatRole==="mentor"?r`<div class="chat-md">${V(Ma(this.content))}</div>`:r`<span class="whitespace-pre-wrap break-words">${this.content}</span>`:this.chatRole==="mentor"&&this.pending?r`<span
          class="thinking inline-flex items-center gap-1 text-muted"
          aria-label="Mana is thinking"
          role="status"
        >
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
        </span>`:""}renderAttachments(){return this.attachments?.length?r`
      <div class="mt-2 flex flex-wrap gap-2">
        ${this.attachments.map(t=>r`
            <img
              src="${t.url}"
              loading="lazy"
              class="max-h-48 rounded-lg border border-line cursor-zoom-in"
              alt=""
              @click=${()=>dd(t.url)}
            />
          `)}
      </div>
    `:null}render(){return this.chatRole==="mentor"?r`
        <div class="text-ink text-base leading-[1.65] max-w-full min-w-0 break-words"
          @click=${t=>{this.openPublisherReference(t.target)&&t.preventDefault()}}
          @keydown=${t=>{(t.key==="Enter"||t.key===" ")&&this.openPublisherReference(t.target)&&t.preventDefault()}}>
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
    `}};ls([b()],Me.prototype,"chatRole",2);ls([b()],Me.prototype,"content",2);ls([b({type:Array})],Me.prototype,"attachments",2);ls([b({type:Boolean})],Me.prototype,"pending",2);ls([b({type:Boolean})],Me.prototype,"publisherReferences",2);Me=ls([w("chat-message")],Me);var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,_i=(t,e,s,i)=>{for(var n=i>1?void 0:i?ud(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&hd(e,s,n),n};function pd(t){return new Date(t*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let Ds=class extends T{constructor(){super(...arguments),this.live=[],this.pending=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=t=>{const e=t.detail;if(!e)return;const s=`live_user_${Date.now()}`,i=`live_mentor_${Date.now()}`;this.liveMentorId=i,this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:s,role:"user",content:e.text,attachments:e.attachments.map(n=>({url:n.url}))},{id:i,role:"mentor",content:"",attachments:[]}],e.liveDetail.append=n=>this.appendToMentor(i,n),e.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onQueueAdd=t=>{const e=t.detail;e&&(this.pending=[...this.pending,{id:e.id,text:e.text,attachments:e.attachments??[]}],this.updateComplete.then(()=>this.scrollToBottom()))},this.onQueueRemove=t=>{const e=t.detail?.id;e&&(this.pending=this.pending.filter(s=>s.id!==e))},this.onQueueClear=()=>{this.pending=[]},this.onSlashMessage=t=>{const e=t.detail;if(!e)return;const s=`slash_user_${Date.now()}`,i=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:s,role:"user",content:e.user,attachments:[]},{id:i,role:"mentor",content:e.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(t,e){this.live=this.live.map(i=>i.id===t?{...i,content:i.content+e}:i);const s=this.renderRoot.querySelector(`chat-message[data-live-id="${t}"]`);s&&(s.content=(s.content||"")+e),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const t=this.scroller;t&&(t.scrollTop=t.scrollHeight)}createRenderRoot(){const t=super.createRenderRoot();return this.style.display="block",t}connectedCallback(){super.connectedCallback(),this.unsubMessages=j(this,f,t=>t.messages),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.unsubThreads=j(this,f,t=>t.threads),this.unsubMode=j(this,f,t=>t.rightPaneMode),this.prevThreadId=f.getState().currentThreadId,f.subscribe((t,e)=>{t.messages!==e.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),t.currentThreadId!==this.prevThreadId&&(this.prevThreadId=t.currentThreadId,this.live=[],this.pending=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage),document.addEventListener("queue-add",this.onQueueAdd),document.addEventListener("queue-remove",this.onQueueRemove),document.addEventListener("queue-clear",this.onQueueClear)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage),document.removeEventListener("queue-add",this.onQueueAdd),document.removeEventListener("queue-remove",this.onQueueRemove),document.removeEventListener("queue-clear",this.onQueueClear)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(t){const e=t.tool_calls;return e&&Array.isArray(e.attachments)?e.attachments:[]}mapRole(t){return t.role==="user"?"user":(t.role==="mentor","mentor")}render(){const t=f.getState(),{threads:e,currentThreadId:s}=t,i=this.frozenMessages??t.messages;ca[da(t)];const n=s?e.find(o=>o.id===s)??null:null;return r`
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
            ${n&&i.length?r`<div class="text-center text-xs text-muted -mb-3">${pd(n.started_at)}</div>`:null}
            ${i.map(o=>r`
              <chat-message
                class="block"
                data-row-key=${`chat:${o.id}`}
                data-mana-thread=${s}
                .chatRole=${this.mapRole(o)}
                .content=${o.content}
                .attachments=${this.extractAttachments(o)}
                .publisherReferences=${t.rightPaneMode==="publisher"}
              ></chat-message>
            `)}
            ${this.live.map(o=>r`
                <chat-message
                  data-live-id=${o.id}
                  .chatRole=${o.role}
                  .content=${o.content}
                  .attachments=${o.attachments}
                  .pending=${o.role==="mentor"}
                  .publisherReferences=${t.rightPaneMode==="publisher"}
                ></chat-message>
              `)}
            ${this.pending.map(o=>r`
                <div class="opacity-50">
                  <chat-message
                    .chatRole=${"user"}
                    .content=${o.text}
                    .attachments=${o.attachments}
                    .publisherReferences=${t.rightPaneMode==="publisher"}
                  ></chat-message>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}};_i([d()],Ds.prototype,"live",2);_i([d()],Ds.prototype,"pending",2);_i([Y("[data-scroll]")],Ds.prototype,"scroller",2);Ds=_i([w("chat-pane")],Ds);async function*_a(t){{yield*gd(t);return}}const md="https://serdarsalim.com",Lo=`[Get your own Mana →](${md})`;function fd(t,e){const s={"goals-advisor":"Add a goal, give it a key result, or tick off a weekly task.","grocery-keeper":"Add something to Shopping and move it to the pantry when it is bought.","finance-keeper":"Log an expense, adjust a category budget, or record an account balance.","circle-keeper":"Open a person, add a note, or put them in more than one circle.","office-keeper":"Open a sample project and read the handoffs in its inbox.","learn-coach":"Open a sample skill, finish a lesson, or try a review question.",publisher:"Write a post, link its proof, add a voice sample, or try the publishing planner. Posting to LinkedIn is off here.",mana:"Open Notes and write, format, pin, search, or restore a note."};return e===1?`This chat is scripted. No AI model is connected, and it cannot change your tools.

${s[t]??"The tools work by hand, with fictional sample data."} Your edits stay in this browser.

${Lo}`:e%2===0?`In your own Mana, a connected model can work with your tools by chat or voice. This demo only shows a scripted reply.

${s[t]??"Try Goals, Finance, Circles, Learn, Notes or Publisher from the sidebar."}`:`Keep exploring the tools. You can edit the sample data and reset it from Settings whenever you want.

${Lo}`}async function*gd(t){const{t:e}=await _t(async()=>{const{t:m}=await import("./tables-D2emgc0r.js");return{t:m}},__vite__mapDeps([0,1])),{now:s}=await _t(async()=>{const{now:m}=await import("./db-DHWx8Fue.js");return{now:m}},[]);let i=t.threadId??null;if(i==null){const m=s();i=e.threads.insert({title:t.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:t.persona??"goals-advisor",tool:t.view?.tool??null,pinned_at:null,focus_goal_id:null,started_at:m,last_msg_at:m,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${m}`}}).id,yield{type:"thread",threadId:i}}e.messages.insert({thread_id:i,role:"user",content:t.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const n=e.threads.get(i)?.persona??t.persona??"goals-advisor",o=e.messages.where(m=>m.thread_id===i&&m.role==="user").length,a=fd(n,o),l=m=>new Promise(g=>setTimeout(g,m));await l(250);const h=a.match(/\S+\s*/g)??[a],u=3;for(let m=0;m<h.length&&!t.signal?.aborted;m+=u)yield{type:"text",text:h.slice(m,m+u).join("")},await l(45);e.messages.insert({thread_id:i,role:"mentor",content:a,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const p=e.threads.get(i);p&&e.threads.update(i,{last_msg_at:s(),title:p.title||t.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=Is(class extends Pi{constructor(t){if(super(t),t.type!==Kn.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const n=!!e[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return qn}});var bd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,kt=(t,e,s,i)=>{for(var n=i>1?void 0:i?vd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&bd(e,s,n),n};let dt=class extends Pt{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const t=!!this.href,e=pi({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),s=r`
      <span class="button__prefix"><slot name="prefix"></slot></span>
      <slot></slot>
      <span class="button__suffix"><slot name="suffix"></slot></span>
    `;return t?r`<a
        class=${e}
        href=${this.disabled?"javascript:void(0)":this.href}
        target=${this.target??"_self"}
        rel=${this.target?this.rel:""}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        >${s}</a
      >`:r`<button
      class=${e}
      type=${this.type}
      name=${this.name}
      value=${this.value}
      ?disabled=${this.disabled}
    >
      ${s}
    </button>`}};dt.styles=Ot`
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
  `;kt([b({reflect:!0})],dt.prototype,"variant",2);kt([b({reflect:!0})],dt.prototype,"size",2);kt([b({type:Boolean,reflect:!0})],dt.prototype,"caret",2);kt([b({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);kt([b({type:Boolean,reflect:!0})],dt.prototype,"loading",2);kt([b({type:Boolean,reflect:!0})],dt.prototype,"pill",2);kt([b({type:Boolean,reflect:!0})],dt.prototype,"circle",2);kt([b()],dt.prototype,"type",2);kt([b()],dt.prototype,"name",2);kt([b()],dt.prototype,"value",2);kt([b()],dt.prototype,"href",2);kt([b()],dt.prototype,"target",2);kt([b()],dt.prototype,"rel",2);dt=kt([w("sc-button")],dt);var xd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Ls=(t,e,s,i)=>{for(var n=i>1?void 0:i?yd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&xd(e,s,n),n};let Ie=class extends Pt{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=t=>{t.target===this.dialogEl&&this.hide()}}updated(t){t.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
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
    `}};Ie.styles=Ot`
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
  `;Ls([b({type:Boolean,reflect:!0})],Ie.prototype,"open",2);Ls([b()],Ie.prototype,"label",2);Ls([b({attribute:"no-header",type:Boolean})],Ie.prototype,"noHeader",2);Ls([Y("dialog")],Ie.prototype,"dialogEl",2);Ie=Ls([w("sc-dialog")],Ie);var wd=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Oi=(t,e,s,i)=>{for(var n=i>1?void 0:i?kd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&wd(e,s,n),n};let ss=class extends Pt{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return r`
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
    `}};ss.styles=Ot`
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
  `;Oi([b({type:Boolean,reflect:!0})],ss.prototype,"active",2);Oi([b()],ss.prototype,"placement",2);Oi([b({type:Number})],ss.prototype,"distance",2);ss=Oi([w("sc-popup")],ss);var $d=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,ze=(t,e,s,i)=>{for(var n=i>1?void 0:i?Sd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&$d(e,s,n),n};let oe=class extends Pt{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=t=>{t.stopPropagation(),this.toggle()},this.onDocMouseDown=t=>{this.open&&(this.contains(t.target)||this.hide())},this.onDocKeydown=t=>{this.open&&t.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return r`
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
    `}};oe.styles=Ot`
    :host {
      display: inline-block;
    }
  `;ze([b({type:Boolean,reflect:!0})],oe.prototype,"open",2);ze([b()],oe.prototype,"placement",2);ze([b({type:Number})],oe.prototype,"distance",2);ze([b({type:Boolean,attribute:"stay-open-on-select"})],oe.prototype,"stayOpenOnSelect",2);ze([b({type:Boolean})],oe.prototype,"disabled",2);ze([Y("sc-popup")],oe.prototype,"popup",2);oe=ze([w("sc-dropdown")],oe);var Td=Object.getOwnPropertyDescriptor,Cd=(t,e,s,i)=>{for(var n=i>1?void 0:i?Td(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let En=class extends Pt{constructor(){super(...arguments),this.onClick=t=>{const e=t.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-menu-item");!e||e.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:e}}))},this.onKeydown=t=>{const e=this.items().filter(n=>!n.disabled);if(!e.length)return;const s=document.activeElement,i=s?e.indexOf(s):-1;t.key==="ArrowDown"?(t.preventDefault(),e[(i+1)%e.length]?.focus()):t.key==="ArrowUp"?(t.preventDefault(),e[(i-1+e.length)%e.length]?.focus()):(t.key==="Enter"||t.key===" ")&&s&&s.tagName.toLowerCase()==="sc-menu-item"&&(t.preventDefault(),s.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return r`<slot></slot>`}};En.styles=Ot`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;En=Cd([w("sc-menu")],En);var Ed=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,Rs=(t,e,s,i)=>{for(var n=i>1?void 0:i?Dd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ed(e,s,n),n};let _e=class extends Pt{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return r`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};_e.styles=Ot`
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
  `;Rs([b({reflect:!0})],_e.prototype,"type",2);Rs([b({reflect:!0})],_e.prototype,"value",2);Rs([b({type:Boolean,reflect:!0})],_e.prototype,"checked",2);Rs([b({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);_e=Rs([w("sc-menu-item")],_e);var Pd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,et=(t,e,s,i)=>{for(var n=i>1?void 0:i?Ad(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Pd(e,s,n),n};let W=class extends Pt{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=t=>{this.value=t.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(t){this.input?.focus(t)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const t=this.type==="password"&&this.passwordVisible?"text":this.type;return r`
      <div class="form-control">
        ${this.label?r`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${pi({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
        >
          <slot name="prefix"></slot>
          <input
            .value=${this.value}
            type=${t}
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
    `}};W.styles=Ot`
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
  `;et([b()],W.prototype,"value",2);et([b()],W.prototype,"type",2);et([b()],W.prototype,"size",2);et([b()],W.prototype,"placeholder",2);et([b()],W.prototype,"label",2);et([b({attribute:"help-text"})],W.prototype,"helpText",2);et([b()],W.prototype,"name",2);et([b({type:Boolean,reflect:!0})],W.prototype,"disabled",2);et([b({type:Boolean,reflect:!0})],W.prototype,"readonly",2);et([b({type:Boolean,reflect:!0})],W.prototype,"required",2);et([b({type:Boolean})],W.prototype,"clearable",2);et([b({type:Boolean,attribute:"password-toggle"})],W.prototype,"passwordToggle",2);et([b()],W.prototype,"autocomplete",2);et([b({type:Number})],W.prototype,"minlength",2);et([b({type:Number})],W.prototype,"maxlength",2);et([b()],W.prototype,"pattern",2);et([d()],W.prototype,"passwordVisible",2);et([Y("input")],W.prototype,"input",2);W=et([w("sc-input")],W);var Md=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,Lt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Id(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Md(e,s,n),n};let xt=class extends Pt{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=t=>{this.open&&(this.contains(t.target)||this.close())},this.onDocKeydown=t=>{this.open&&t.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=t=>{const s=t.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-option");!s||s.disabled||(this.value=s.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=t=>{t.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=t=>{(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(t){t.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let t="";for(const e of this.options()){const s=e.value===this.value;e.selected=s,s&&(t=e.getTextLabel())}this.displayLabel=t}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const t=!!this.value;return r`
      <div class="form-control">
        ${this.label?r`<label class="label">${this.label}</label>`:null}
        <div
          class=${pi({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${pi({display:!0,placeholder:!t})}
          >
            ${t?this.displayLabel:this.placeholder}
          </span>
          ${this.clearable&&t?r`<button
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
    `}};xt.styles=Ot`
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
  `;Lt([b()],xt.prototype,"value",2);Lt([b()],xt.prototype,"placeholder",2);Lt([b()],xt.prototype,"size",2);Lt([b()],xt.prototype,"label",2);Lt([b({attribute:"help-text"})],xt.prototype,"helpText",2);Lt([b()],xt.prototype,"name",2);Lt([b({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);Lt([b({type:Boolean})],xt.prototype,"clearable",2);Lt([b({type:Boolean,reflect:!0})],xt.prototype,"open",2);Lt([d()],xt.prototype,"displayLabel",2);Lt([Y(".combobox")],xt.prototype,"combobox",2);xt=Lt([w("sc-select")],xt);var _d=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,Ns=(t,e,s,i)=>{for(var n=i>1?void 0:i?Od(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&_d(e,s,n),n};let Oe=class extends Pt{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};Oe.styles=Ot`
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
  `;Ns([b()],Oe.prototype,"value",2);Ns([b({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);Ns([b({type:Boolean,reflect:!0})],Oe.prototype,"selected",2);Ns([b({type:Boolean,reflect:!0})],Oe.prototype,"current",2);Oe=Ns([w("sc-option")],Oe);var Ld=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,Ke=(t,e,s,i)=>{for(var n=i>1?void 0:i?Rd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ld(e,s,n),n};let re=class extends Pt{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=t=>{const e=this.triggers();t.type.startsWith("mouse")&&e.has("hover")?this.show():t.type.startsWith("focus")&&e.has("focus")&&this.show()},this.onLeave=t=>{const e=this.triggers();t.type.startsWith("mouse")&&e.has("hover")?this.hide():t.type.startsWith("focus")&&e.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};re.styles=Ot`
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
  `;Ke([b()],re.prototype,"content",2);Ke([b()],re.prototype,"placement",2);Ke([b({type:Boolean,reflect:!0})],re.prototype,"disabled",2);Ke([b()],re.prototype,"trigger",2);Ke([b({type:Number})],re.prototype,"distance",2);Ke([b({type:Boolean,reflect:!0})],re.prototype,"open",2);re=Ke([w("sc-tooltip")],re);const Ro=16e3,Nd=.001,Oa=3e4,jd=1600;class Fd{constructor(){this.voicedMs=0,this.quietMs=0,this.done=!1}feed(e,s){return this.done?!1:(e>=(this.voicedMs?.01:.018)?(this.voicedMs+=s,this.quietMs=0):(this.quietMs+=s,this.voicedMs<300&&this.quietMs>=300&&(this.voicedMs=0)),this.voicedMs>=300&&this.quietMs>=jd?this.done=!0:!1)}}const mi="Meta+D",fi="companion.dictate_shortcut",La="Meta+J",Ra="companion.open_shortcut";function Ud(t,e,s){if(e===s)return t;const i=e/s,n=new Float32Array(Math.floor(t.length/i));for(let o=0;o<n.length;o++)if(e>s){const a=Math.floor(o*i),l=Math.min(t.length,Math.floor((o+1)*i));let h=0;for(let u=a;u<l;u++)h+=t[u];n[o]=l>a?h/(l-a):0}else{const a=o*i,l=Math.floor(a),h=Math.min(l+1,t.length-1);n[o]=t[l]+(t[h]-t[l])*(a-l)}return n}function Bd(t){let e=0;for(let s=0;s<t.length;s++)e+=t[s];e/=t.length||1;for(let s=0;s<t.length;s++)if(Math.abs(t[s]-e)>=Nd)return!1;return!0}function Na(t){return/\(virtual\)|zoomaudiodevice|teams audio/i.test(t)}function Hd(t){const e=t.filter(s=>s.kind==="audioinput"&&s.deviceId!=="default"&&s.deviceId!=="communications"&&s.label&&!Na(s.label));return(e.find(s=>/built-in/i.test(s.label))??e[0])?.deviceId??null}function ja(t){return`I heard only silence from ${t?`“${t}”`:"the mic"}. Is it muted, or the wrong mic?`}function zd(t,e){const s=new ArrayBuffer(44+t.length*2),i=new DataView(s),n=(o,a)=>{for(let l=0;l<a.length;l++)i.setUint8(o+l,a.charCodeAt(l))};n(0,"RIFF"),i.setUint32(4,36+t.length*2,!0),n(8,"WAVE"),n(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,e,!0),i.setUint32(28,e*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),n(36,"data"),i.setUint32(40,t.length*2,!0);for(let o=0;o<t.length;o++){const a=Math.max(-1,Math.min(1,t[o]));i.setInt16(44+o*2,a<0?a*32768:a*32767,!0)}return new Uint8Array(s)}function Kd(t){return t.replace(/\[[^\]]*\]/g," ").replace(/\s+/g," ").trim()}function ge(t){const e=(t??"").split("+").map(o=>o.trim()).filter(Boolean),s=e.pop();if(!s)return null;const i=new Set(e.map(o=>o.toLowerCase())),n={meta:i.has("meta")||i.has("cmd"),ctrl:i.has("ctrl")||i.has("control"),alt:i.has("alt")||i.has("option"),shift:i.has("shift"),key:s.length===1?s.toLowerCase():s};return n.meta||n.ctrl||n.alt?n:null}function Dn(t,e){if(e.metaKey!==t.meta||e.ctrlKey!==t.ctrl||e.altKey!==t.alt||e.shiftKey!==t.shift)return!1;const s=e.key.length===1?e.key.toLowerCase():e.key,i=e.code?.startsWith("Key")?e.code.slice(3).toLowerCase():e.code?.startsWith("Digit")?e.code.slice(5):null;return s===t.key||i===t.key}function oi(t){const e=ge(t);return e?`${e.ctrl?"⌃":""}${e.alt?"⌥":""}${e.shift?"⇧":""}${e.meta?"⌘":""}${e.key.length===1?e.key.toUpperCase():e.key}`:""}async function Fa(t,e){const s=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:t,signal:e});if(!s.ok)throw new Error(`stt ${s.status}`);const i=await s.json();return Kd(i.text??"")}const No={echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0};async function qd(){const t=await navigator.mediaDevices.getUserMedia({audio:No});if(!Na(t.getAudioTracks()[0]?.label??""))return t;const e=Hd(await navigator.mediaDevices.enumerateDevices().catch(()=>[]));if(!e)return t;const s=await navigator.mediaDevices.getUserMedia({audio:{...No,deviceId:{exact:e}}}).catch(()=>null);return s?(t.getTracks().forEach(i=>i.stop()),s):t}class Ua{constructor(){this.ctx=null,this.stream=null,this.source=null,this.node=null,this.chunks=[],this.rate=48e3,this.opening=null,this.released=0}get active(){return!!this.ctx}start(e={}){return this.ctx?Promise.resolve():this.opening??=this.open(e).finally(()=>{this.opening=null})}async open(e){const s=this.released,i=await qd();let n;try{const o=window.AudioContext||window.webkitAudioContext;n=new o}catch(o){throw i.getTracks().forEach(a=>a.stop()),o}if(await Promise.race([n.resume().catch(()=>{}),new Promise(o=>setTimeout(o,1e3))]),s!==this.released){i.getTracks().forEach(o=>o.stop()),await n.close().catch(()=>{});return}this.chunks=[],this.rate=n.sampleRate,this.ctx=n,this.stream=i;try{const o=this.source=n.createMediaStreamSource(i),a=this.node=n.createScriptProcessor(4096,1,1),l=new Fd;a.onaudioprocess=h=>{const u=new Float32Array(h.inputBuffer.getChannelData(0));this.chunks.push(u);let p=0;for(const g of u)p+=g*g;const m=Math.sqrt(p/u.length);e.level?.(Math.min(1,m*12)),l.feed(m,u.length/n.sampleRate*1e3)&&e.pause?.()},o.connect(a),a.connect(n.destination)}catch(o){throw await this.release(),o}}async stop(){const e=this.chunks,s=this.rate,i=this.stream?.getAudioTracks()[0]?.label??"";await this.release();const n=e.reduce((l,h)=>l+h.length,0);if(n<s*.3)return null;const o=new Float32Array(n);let a=0;for(const l of e)o.set(l,a),a+=l.length;return Bd(o)?{silent:!0,mic:i}:{wav:zd(Ud(o,s,Ro),Ro)}}async cancel(){await this.release()}async release(){this.released++,this.node&&(this.node.onaudioprocess=null),this.node?.disconnect(),this.source?.disconnect(),this.stream?.getTracks().forEach(s=>s.stop());const e=this.ctx;this.ctx=null,this.node=null,this.source=null,this.stream=null,this.chunks=[],await e?.close().catch(()=>{})}}var Wd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,Ba=(t,e,s,i)=>{for(var n=i>1?void 0:i?Gd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Wd(e,s,n),n};let Pn=class extends T{constructor(){super(...arguments),this.items=[]}onRemove(t){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:t},bubbles:!0,composed:!0}))}isPdf(t){return t.file?.type==="application/pdf"||(t.dataUrl?.startsWith("data:application/pdf")??!1)||(t.url?.endsWith(".pdf")??!1)}isSheet(t){return/\.(xlsx|xls|csv)$/i.test(t.file?.name??"")||/\.(xlsx|xls|csv)$/i.test(t.url??"")}render(){return this.items.length?r`
      <div class="flex flex-wrap gap-2 px-3 py-2 border-t border-line bg-bg">
        ${this.items.map(t=>r`
            <div
              class="relative w-16 h-16 rounded border border-line overflow-hidden bg-surface ${t.uploaded?"":"opacity-60"}"
              title="${t.file?.name??(t.ephemeral?"ephemeral (pasted)":"persistent")}"
            >
              ${this.isPdf(t)?r`<div class="w-full h-full flex flex-col items-center justify-center gap-0.5 text-red-500/80">
                    <span class="text-lg leading-none">📄</span><span class="text-[9px] font-semibold">PDF</span>
                  </div>`:this.isSheet(t)?r`<div class="w-full h-full flex flex-col items-center justify-center gap-0.5 text-green-600/80">
                    <span class="text-lg leading-none">📊</span><span class="text-[9px] font-semibold">SHEET</span>
                  </div>`:r`<img src="${t.dataUrl||t.url||""}" alt="" class="w-full h-full object-cover" />`}
              ${t.uploaded?null:r`<div
                    class="absolute inset-0 flex items-center justify-center text-[10px] text-muted bg-bg/40"
                  >
                    …
                  </div>`}
              <button
                type="button"
                class="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs text-ink bg-bg/80 hover:bg-red-500/80 hover:text-white rounded-bl"
                aria-label="Remove"
                @click=${()=>this.onRemove(t.localId)}
              >
                ×
              </button>
            </div>
          `)}
      </div>
    `:r``}};Ba([b({type:Array})],Pn.prototype,"items",2);Pn=Ba([w("attachment-tray")],Pn);var Vd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var n=i>1?void 0:i?Yd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Vd(e,s,n),n};const Qd=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Workshop thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Workshop AND sends in one shot — useful when you're inside an app and want Workshop to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function jo(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}const Jd=/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i;function Fo(t){const e=t.type||"";return e.startsWith("image/")||e==="application/pdf"||e==="text/csv"||e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||e==="application/vnd.ms-excel"?!0:Jd.test(t.name)}function Xd(t){return new Promise((e,s)=>{const i=new FileReader;i.onload=()=>e(String(i.result)),i.onerror=()=>s(i.error),i.readAsDataURL(t)})}function Zd(t){const e=Wn.map(s=>({id:s.id,label:s.label,short:s.short}));return e.some(s=>s.id===t)||e.push({id:t,label:t,short:t}),e}let ft=class extends T{constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.showUsage=!1,this.usage=[],this.turnsCompleted=0,this.model=ni(f.getState().settings["cockpit.mentor_model"]),this.inputFocused=!1,this.dictation="off",this.dictationNote="",this.recorder=new Ua,this.takeTimer=null,this.quote=null,this.prevThreadId=null,this.onSelection=()=>{const t=document.activeElement;if(t instanceof HTMLTextAreaElement&&t.closest("publisher-editor")){const h=t.selectionStart??0,u=t.selectionEnd??h,p=t.value.slice(h,u).trim().slice(0,4e3);if(!p){this.quote=null;return}const m=t.matches("[data-draft-body]")?"the Publisher draft":"the Publisher first comment";if(p===this.quote?.text&&m===this.quote.from)return;this.quote={text:p,from:m,range:null};return}const e=document.getSelection(),s=e?.anchorNode,i=s instanceof Element?s:s?.parentElement,n=i?.closest(".notes-prose"),o=n?null:i?.closest("chat-message");if(!e||!n&&!o)return;const a=e.toString().trim().slice(0,4e3);if(e.isCollapsed||!a||!e.rangeCount){this.quote=null;return}let l;if(n){const h=n.firstElementChild?.textContent?.trim().slice(0,120)??"";l=h?`the note "${h}"`:"the note"}else l=o.chatRole==="user"?"my earlier message":"your reply";this.quote={text:a,from:l,range:e.getRangeAt(0).cloneRange()}},this.onGlobalKeyDown=t=>{(t.metaKey||t.ctrlKey)&&!t.altKey&&!t.shiftKey&&(t.key==="n"||t.key==="N")&&(t.preventDefault(),this.startNewChat())},this.startNewChat=()=>{f.getState().selectThread(null),this.updateComplete.then(()=>this.textarea?.focus())},this.onChatAttach=t=>{const s=t.detail?.files??[];(async()=>{for(const i of s)await this.uploadFile(i,!1)})()},this.onDictateKey=t=>{if(t.key==="Escape"&&(this.dictation==="listening"||this.dictation==="opening")){t.preventDefault(),t.stopImmediatePropagation(),this.cancelDictation();return}const e=ge(f.getState().settings?.[fi])??ge(mi);t.repeat||!Dn(e,t)||(t.preventDefault(),t.stopImmediatePropagation(),this.dictation==="off"&&document.dispatchEvent(new CustomEvent("mana-reveal-chat")),this.toggleDictation())},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.prevThreadId=f.getState().currentThreadId,f.subscribe(t=>{t.currentThreadId!==this.prevThreadId&&(this.prevThreadId=t.currentThreadId,this.attachments=[],this.usage=[],this.turnsCompleted=0,this.showUsage=!1);const e=ni(t.settings["cockpit.mentor_model"]);e!==this.model&&(this.model=e)}),document.addEventListener("chat-attach",this.onChatAttach),document.addEventListener("keydown",this.onGlobalKeyDown),document.addEventListener("mana-new-chat",this.startNewChat),document.addEventListener("keydown",this.onDictateKey,!0),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("select",this.onSelection,!0)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach),document.removeEventListener("keydown",this.onGlobalKeyDown),document.removeEventListener("mana-new-chat",this.startNewChat),document.removeEventListener("keydown",this.onDictateKey,!0),this.takeTimer&&clearTimeout(this.takeTimer),this.recorder.cancel(),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("select",this.onSelection,!0)}updated(t){super.updated?.(t),!(!t.has("quote")||typeof CSS>"u"||!("highlights"in CSS))&&(this.quote?.range?CSS.highlights.set("chat-quote",new Highlight(this.quote.range)):CSS.highlights.delete("chat-quote"))}async uploadFile(t,e){const s=await Xd(t),i={localId:jo(),file:t,dataUrl:s,uploaded:!1,ephemeral:e};this.attachments=[...this.attachments,i];try{const n=await C.uploads.upload(s,e,t.name);this.attachments=this.attachments.map(o=>o.localId===i.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==i.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(t){const e=t.target,s=Array.from(e.files??[]);for(const i of s)await this.uploadFile(i,!1);e.value=""}async onPaste(t){const e=t.clipboardData?.items??[],s=[];for(const i of Array.from(e))if(i.kind==="file"){const n=i.getAsFile();n&&Fo(n)&&s.push(n)}if(s.length){t.preventDefault();for(const i of s)await this.uploadFile(i,!1)}}onDragOver(t){!t.dataTransfer||!Array.from(t.dataTransfer.items).some(s=>s.kind==="file")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}async onDrop(t){const e=Array.from(t.dataTransfer?.files??[]).filter(Fo);if(e.length){t.preventDefault();for(const s of e)await this.uploadFile(s,!1)}}onTrayRemove(t){const e=t.detail.localId;this.attachments=this.attachments.filter(s=>s.localId!==e)}async toggleDictation(){if(this.dictation==="listening")return this.finishDictation();if(this.dictation==="off"){this.dictationNote="",this.dictation="opening";try{await this.recorder.start()}catch{this.dictation="off",this.dictationNote="The mic is blocked or unavailable.";return}this.dictation!=="opening"||!this.recorder.active||(this.dictation="listening",this.takeTimer=setTimeout(()=>void this.finishDictation(),Oa))}}async finishDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing";try{const t=await this.recorder.stop();if(this.dictation!=="writing")return;if(t&&"silent"in t){this.dictationNote=ja(t.mic);return}const e=t?await Fa(t.wav):"";if(this.dictation!=="writing")return;if(!e){this.dictationNote="Didn't catch that. Try again.";return}this.insertText(e)}catch{this.dictationNote="Couldn't write that down. Try again."}finally{this.dictation==="writing"&&(this.dictation="off")}}async cancelDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="off",await this.recorder.cancel()}insertText(t){const e=this.textarea,s=this.text,i=e&&document.activeElement===e?e.selectionStart:s.length,n=e&&document.activeElement===e?e.selectionEnd:s.length,o=s.slice(0,i),a=s.slice(n),l=o&&!/\s$/.test(o)?" ":"",h=a&&!/^\s/.test(a)?" ":"";this.text=o+l+t+h+a;const u=(o+l+t).length;this.updateComplete.then(()=>{this.textarea&&(this.textarea.focus(),this.textarea.setSelectionRange(u,u),this.textarea.style.height="auto",this.textarea.style.height=`${Math.min(this.textarea.scrollHeight,240)}px`,this.textarea.style.overflowY=this.textarea.scrollHeight>240?"auto":"hidden")})}dictationPlaceholder(){const t=oi(f.getState().settings?.[fi]??mi);return this.dictation==="opening"?"Opening the mic…":this.dictation==="listening"?`Listening… ${t} to finish, Esc to cancel`:this.dictation==="writing"?"Writing it down…":this.dictationNote||"Type / for commands"}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(t){const e=t.target;this.text=e.value,this.dictationNote="",e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,240)}px`,e.style.overflowY=e.scrollHeight>240?"auto":"hidden"}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.send())}async handleSlash(t){const[e,...s]=t.slice(1).trim().split(/\s+/),i=s.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:t,mentor:o},bubbles:!0,composed:!0}))};switch(e){case"help":case"?":return n(Qd),!0;case"clear":case"new":return await f.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=e==="mana"?"mana":e==="grocery"?"grocery-keeper":"goals-advisor";try{await f.getState().createThread({kind:"chat",persona:o})}catch(a){const l=a instanceof Error?a.message:String(a);return n(`Couldn't switch to ${e}: ${l}`),!0}return i?(this.text=i,!1):(n(`Switched to a new ${ca[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(i||"").toLowerCase(),l={opus:"claude-opus-5-5",fable:"claude-fable-5-1",sonnet:"claude-sonnet-5-5",haiku:"claude-haiku-4-5-20251001",gpt:"gpt-6.1-sol",sol:"gpt-6.1-sol",astra:"gpt-6-astra",luna:"gpt-6-luna",terra:"gpt-6-luna","gpt-mini":"gpt-6-luna"}[o],h={};l&&(h[o]={id:l,label:xn(l)?.label??l});const u=h[o];return u?(await f.getState().setSetting("cockpit.mentor_model",u.id),n(`Workshop model → **${u.label}** (\`${u.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model opus|fable|sonnet|haiku|sol|astra|luna\` (current: ${ni(f.getState().settings["cockpit.mentor_model"])}).`),!0)}default:return!1}}async stop(){this.queue=[],this.dispatchEvent(new CustomEvent("queue-clear",{bubbles:!0,composed:!0})),this.abortController?.abort();const t=f.getState().currentThreadId;if(t!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:t})})}catch{}}async send(){let t=this.text.trim();const e=this.attachments.filter(n=>n.uploaded&&n.path&&n.url);if(!t&&e.length===0)return;if(t.startsWith("/")&&e.length===0){if(await this.handleSlash(t)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(t=this.text.trim(),!t&&e.length===0)return}if(this.quote&&t){const n=this.quote;t=`Selected in ${n.from}:
${n.text.split(`
`).map(o=>`> ${o}`).join(`
`)}

${t}`}const s=e.map(n=>({path:n.path,url:n.url,ephemeral:!!n.ephemeral})),i=e.filter(n=>!n.ephemeral).map(n=>({url:n.url}));if(this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[],this.quote=null,this.sending){const n=jo();this.queue.push({id:n,text:t,attachments:s,bubbleAttachments:i}),this.dispatchEvent(new CustomEvent("queue-add",{detail:{id:n,text:t,attachments:i},bubbles:!0,composed:!0}));return}this.sending=!0;try{for(await this.runTurn(t,s,i);this.queue.length>0;){const n=this.queue.shift();if(!n)break;this.dispatchEvent(new CustomEvent("queue-remove",{detail:{id:n.id},bubbles:!0,composed:!0})),await this.runTurn(n.text,n.attachments,n.bubbleAttachments)}}finally{this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus())}}async runTurn(t,e,s){const i=f.getState(),n=i.currentThreadId,o={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:t,attachments:s,liveDetail:o},bubbles:!0,composed:!0}));let a=!1;try{let l=n;const h=n==null?da(i):void 0;this.abortController=new AbortController;for await(const m of _a({threadId:n,message:t,attachments:e,persona:h,view:i.viewContext??void 0,signal:this.abortController.signal}))switch(m.type){case"thread":l=m.threadId,n==null&&this.prevThreadId==null&&(this.prevThreadId=m.threadId);break;case"text":a=!0,o.append?.(m.text);break;case"ops":this.dispatchOps(m.action);break;case"error":a=!0,o.append?.(`

_error: ${m.error}_`);break;case"done":{const g=f.getState().currentThreadId;if(g!==n&&g!==l)break;this.turnsCompleted+=1,this.usage=[...this.usage,{turn:this.turnsCompleted,model:this.model,context:m.contextTokens??null,start:m.startTokens??null,window:m.contextWindow??null,out:m.tokensOut??null}];break}}a||o.append?.("_(done)_"),o.finalize?.(),await f.getState().loadThreads();const u=f.getState().currentThreadId,p=u===n||u===l;l!=null&&p&&await f.getState().selectThread(l)}catch(l){l?.name==="AbortError"?o.append?.(`

_stopped_`):(console.warn("[composer] send failed",l),o.append?.(`

_error: ${l.message}_`)),o.finalize?.()}finally{this.abortController=void 0}}dispatchOps(t){document.dispatchEvent(new CustomEvent("ops-event",{detail:t,bubbles:!0,composed:!0}))}renderUsagePill(){const t=xn(this.model)?.short??this.model,e=this.contextNow(),i=e?(p=>p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p))(e):"—",n=this.contextLimit(),o=e?Math.min(100,e/n*100):0,l=2*Math.PI*6,h=o/100*l,u=o>80?"#f87171":o>50?"#fbbf24":"var(--accent, #3b82f6)";return r`
      <button
        type="button"
        class="shrink-0 flex items-center gap-1.5 h-7 px-1 rounded-full text-xs text-muted hover:text-ink transition-colors"
        title="Model & context usage"
        @click=${()=>{this.showUsage=!this.showUsage}}
      >
        <span class="font-medium text-ink">${t}</span>
        <span class="text-line">·</span>
        <svg width="16" height="16" viewBox="0 0 16 16" class="shrink-0 -rotate-90" aria-hidden="true">
          <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2.5" class="text-line" />
          <circle
            cx="8" cy="8" r="6" fill="none" stroke=${u} stroke-width="2.5" stroke-linecap="round"
            stroke-dasharray="${h} ${l}"
            style="transition: stroke-dasharray .3s"
          />
        </svg>
        <span>${i}</span>
      </button>
    `}contextNow(){return this.usage[this.usage.length-1]?.context??0}contextLimit(){for(let t=this.usage.length-1;t>=0;t--){const e=this.usage[t];if(e&&e.model===this.model&&e.window)return e.window}return Tl(this.model)}async onModelChange(t){this.model=t,await f.getState().setSetting("cockpit.mentor_model",t)}renderUsageModal(){if(!this.showUsage)return null;const t=this.usage.some(a=>a.context!=null),e=this.contextNow(),s=this.usage[0]?.start??0,i=this.contextLimit(),n=e?Math.min(100,Math.round(e/i*100)):0,o=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);return r`
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
              ${Zd(this.model).map(a=>r`<option value=${a.id} ?selected=${a.id===this.model}>${a.label}</option>`)}
            </select>
          </div>

          ${t?r`
            <!-- context bar -->
            <div class="mb-3">
              <div class="flex justify-between text-xs text-muted mb-1">
                <span>Context window</span>
                <span>${o(e)} / ${o(i)} (${n}%)</span>
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
                ${this.usage.map(a=>{const l=a.context??0,h=this.usage.reduce((u,p)=>Math.max(u,p.context??0),1);return r`
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-muted w-10">T${a.turn}</span>
                    <div class="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                      <div class="h-full rounded-full bg-accent/60" style="width: ${Math.min(100,Math.round(l/h*100))}%"></div>
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
        @remove=${t=>this.onTrayRemove(t)}
      ></attachment-tray>

      <form
        class="relative flex flex-col gap-1.5"
        @submit=${t=>{t.preventDefault(),this.send()}}
        @dragover=${this.onDragOver}
        @drop=${t=>void this.onDrop(t)}
      >
        <!-- The quote floats over the bottom of the chat instead of pushing
             the box up, so selecting text never shifts the page. -->
        ${this.quote?r`
          <div class="absolute bottom-full left-0 right-0 mb-2 z-10 flex items-start gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-sm text-muted shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
            <div class="flex-1 min-w-0">
              <div class="mb-0.5 text-[10px] font-semibold not-italic uppercase tracking-wide text-accent">${this.quote.from}</div>
              <p class="line-clamp-2 italic" title=${this.quote.text}>“${this.quote.text}”</p>
            </div>
            <button type="button" class="shrink-0 w-6 h-6 -mr-1 flex items-center justify-center rounded-md hover:bg-hover hover:text-ink"
              aria-label="Don't include the highlighted text" @click=${()=>{this.quote=null}}>×</button>
          </div>`:c}
        <!-- input box: textarea + send/voice button, both inside the border
             (the button is part of prompting, so it stays in the field) -->
        <div class="chat-composer-box flex items-end gap-2 rounded-2xl border ${this.dictation==="listening"?"border-accent":"border-line"} bg-surface pl-4 pr-2.5 py-2.5 transition-colors focus-within:border-muted/60">
          <textarea
            data-composer-input
            rows="1"
            placeholder=${this.dictationPlaceholder()}
            class="flex-1 resize-none bg-transparent text-ink text-base leading-[1.5] px-1 py-1 border-0 focus:outline-none max-h-60 overflow-hidden"
            .value=${this.text}
            @input=${this.onInput}
            @keydown=${this.onKeyDown}
            @paste=${t=>void this.onPaste(t)}
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
    `}};$t([d()],ft.prototype,"text",2);$t([d()],ft.prototype,"attachments",2);$t([d()],ft.prototype,"sending",2);$t([d()],ft.prototype,"showUsage",2);$t([d()],ft.prototype,"usage",2);$t([d()],ft.prototype,"turnsCompleted",2);$t([d()],ft.prototype,"model",2);$t([d()],ft.prototype,"inputFocused",2);$t([d()],ft.prototype,"dictation",2);$t([d()],ft.prototype,"dictationNote",2);$t([d()],ft.prototype,"quote",2);$t([Y("input[data-attach-input]")],ft.prototype,"fileInput",2);$t([Y("textarea[data-composer-input]")],ft.prototype,"textarea",2);ft=$t([w("chat-composer")],ft);const Ha='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',js='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Fs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function th(t){return t?`var(--nsc-${t}, currentColor)`:"currentColor"}class gi{constructor(e,s){this.host=e,this.kind=s,this.ids=new Set,this.ghosts=[],this.onPress=i=>{if(!this.ids.size&&!this.ghosts.length)return;const n=`${this.kind}:`;for(const o of i.composedPath()){const a=o instanceof HTMLElement?o.dataset.flash:void 0;if(a?.startsWith(n)){this.seen(Number(a.slice(n.length)));return}if(o===this.host)return}},e.addController(this)}take(e){if(!e||e.action!=="refresh")return;const s=(e.changed??[]).filter(n=>n.kind===this.kind).map(n=>n.id),i=(e.removed??[]).filter(n=>n.kind===this.kind);if(!(!s.length&&!i.length)){if(s.length&&(this.ids=new Set([...this.ids,...s])),i.length){const n=new Set(i.map(o=>o.id));this.ghosts=[...this.ghosts.filter(o=>!n.has(o.id)),...i.map(({id:o,title:a})=>({id:o,title:a}))],this.ids=new Set([...this.ids].filter(o=>!n.has(o)))}this.host.requestUpdate()}}has(e){return this.ids.has(e)}cls(e){return this.ids.has(e)?"agent-flash":""}key(e){return`${this.kind}:${e}`}seen(e){if(this.ids.has(e)){const s=new Set(this.ids);s.delete(e),this.ids=s,this.host.requestUpdate()}this.ghosts.some(s=>s.id===e)&&(this.ghosts=this.ghosts.filter(s=>s.id!==e),this.host.requestUpdate())}hostConnected(){this.host.addEventListener("pointerdown",this.onPress)}hostDisconnected(){this.host.removeEventListener("pointerdown",this.onPress),this.ids=new Set,this.ghosts=[]}}var eh=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var n=i>1?void 0:i?sh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&eh(e,s,n),n};const Uo=864e5,ih=6,Bo=272,nh=228,bi="en-GB";function zs(t){return Date.parse(`${t}T00:00:00Z`)}function oh(t){return new Date(t).toISOString().slice(0,10)}function Ho(){const t=new Date,e=s=>String(s).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}function rh(t){const e=new Date(t);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),1)}function zo(t,e){const s=new Date(t);return Date.UTC(s.getUTCFullYear(),s.getUTCMonth()+e,1)}const ah=new Intl.DateTimeFormat(bi,{weekday:"short",timeZone:"UTC"}),lh=Array.from({length:7},(t,e)=>ah.format(Date.UTC(2024,0,1+e))),ch=new Intl.DateTimeFormat(bi,{month:"short",timeZone:"UTC"}),dh=Array.from({length:12},(t,e)=>ch.format(Date.UTC(2024,e,1))),hh={left:"m15 18-6-6 6-6",right:"m9 18 6-6-6-6",down:"m6 9 6 6 6-6"};let Dt=class extends T{constructor(){super(...arguments),this.value="",this.name="",this.placeholder="Pick a date",this.label="Date",this.clearable=!1,this.headless=!1,this.fieldClass="px-2 py-1 text-sm bg-surface border border-line rounded",this.open=!1,this.view="days",this.month=0,this.yearsFrom=0,this.anchor=null,this.anchorPressedAt=0,this.onToggle=t=>{t.newState==="closed"&&(this.open=!1,this.detach())},this.onPress=t=>{t.target instanceof Node&&this.anchor?.contains(t.target)&&(this.anchorPressedAt=Date.now())},this.onScroll=t=>{t.target instanceof Node&&this.panel?.contains(t.target)||this.place()},this.place=()=>{const t=this.panel;if(!t||!this.anchor)return;const e=this.anchor.getBoundingClientRect(),s=t.offsetHeight,i=6;let n=e.bottom+i;n+s>window.innerHeight-8&&e.top-i-s>8&&(n=e.top-i-s);const o=Math.min(Math.max(8,e.left),window.innerWidth-Bo-8);t.style.top=`${Math.max(8,n)}px`,t.style.left=`${Math.max(8,o)}px`}}async show(t){const e=Date.now()-this.anchorPressedAt<500;if(this.anchorPressedAt=0,this.open||e)return;this.anchor=t??this.querySelector(".dp-field")??this;const s=zs(this.value);this.month=rh(Number.isNaN(s)?zs(Ho()):s),this.view="days",this.open=!0,await this.updateComplete;const i=this.panel;i&&(i.showPopover(),this.place(),window.addEventListener("resize",this.place),window.addEventListener("scroll",this.onScroll,!0),window.addEventListener("pointerdown",this.onPress,!0))}hide(){this.panel?.matches(":popover-open")&&this.panel.hidePopover()}disconnectedCallback(){super.disconnectedCallback(),this.detach()}get panel(){return this.querySelector(".dp-panel")}detach(){window.removeEventListener("resize",this.place),window.removeEventListener("scroll",this.onScroll,!0),window.removeEventListener("pointerdown",this.onPress,!0)}pick(t){this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0})),this.hide()}step(t){this.view==="days"?this.month=zo(this.month,t):this.view==="months"?this.month=zo(this.month,t*12):this.yearsFrom+=t*12}words(t){const e=zs(t);if(Number.isNaN(e))return this.placeholder;const s=new Date(e).getUTCFullYear()!==new Date().getFullYear();return new Intl.DateTimeFormat(bi,{...s?{year:"numeric"}:{weekday:"short"},day:"numeric",month:"short",timeZone:"UTC"}).format(e)}render(){return r`
      ${this.name?r`<input type="hidden" name=${this.name} .value=${this.value} />`:c}
      ${this.headless?c:this.renderField()}
      ${this.open?this.renderPanel():c}
    `}renderField(){const t=Number.isNaN(zs(this.value));return r`<button
      type="button"
      class="dp-field inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-left ${this.fieldClass} ${this.open?"!border-accent":""}"
      aria-haspopup="dialog"
      aria-expanded=${this.open}
      aria-label=${`${this.label}: ${this.words(this.value)}`}
      @click=${e=>{e.stopPropagation(),this.show()}}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="shrink-0 text-muted">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      <span class="truncate ${t?"text-muted":"text-ink"}">${this.words(this.value)}</span>
    </button>`}renderPanel(){const t=new Date(this.month).getUTCFullYear(),e=this.view==="days"?new Intl.DateTimeFormat(bi,{month:"long",year:"numeric",timeZone:"UTC"}).format(this.month):this.view==="months"?String(t):`${this.yearsFrom}–${this.yearsFrom+11}`,s=Ho();return r`<div
      class="dp-panel m-0 rounded-xl border border-line bg-surface p-3 text-ink shadow-lg"
      style="position:fixed;inset:auto;width:${Bo}px;max-width:calc(100vw - 16px);"
      popover="auto"
      role="dialog"
      aria-label=${this.label}
      @toggle=${this.onToggle}
      @click=${i=>i.stopPropagation()}
      @pointerdown=${i=>i.stopPropagation()}
    >
      <div class="mb-2 flex items-center justify-between">
        <button
          type="button"
          class="flex items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium transition-colors hover:bg-hover disabled:hover:bg-transparent"
          ?disabled=${this.view==="years"}
          @click=${()=>{this.view==="months"&&(this.yearsFrom=t-1),this.view=this.view==="days"?"months":"years"}}
        >
          ${e} ${this.view!=="years"?this.chevron("down"):c}
        </button>
        <span class="flex items-center gap-0.5">
          ${this.navButton("Previous","left",-1)} ${this.navButton("Next","right",1)}
        </span>
      </div>
      <div style="height:${nh}px">
        ${this.view==="days"?this.renderDays(s):this.view==="months"?this.renderGrid(dh.map((i,n)=>({key:n,label:i,selected:this.value.startsWith(`${t}-${String(n+1).padStart(2,"0")}`),current:s.startsWith(`${t}-${String(n+1).padStart(2,"0")}`)})),i=>{this.month=Date.UTC(t,i,1),this.view="days"}):this.renderGrid(Array.from({length:12},(i,n)=>this.yearsFrom+n).map(i=>({key:i,label:String(i),selected:i===t,current:s.startsWith(String(i))})),i=>{this.month=Date.UTC(i,new Date(this.month).getUTCMonth(),1),this.view="months"})}
      </div>
      <div class="mt-2 flex items-center justify-between px-1 text-xs">
        <button type="button" class="text-accent hover:underline" @click=${()=>this.pick(s)}>Today</button>
        ${this.clearable&&this.value?r`<button type="button" class="text-muted hover:text-ink" @click=${()=>this.pick("")}>Clear</button>`:c}
      </div>
    </div>`}renderDays(t){const e=new Date(this.month),s=this.month-(e.getUTCDay()+6)%7*Uo,i=e.getUTCMonth();return r`<div class="grid grid-cols-7 text-center">
      ${lh.map(n=>r`<span class="pb-1 text-[11px] font-medium text-muted">${n}</span>`)}
      ${Array.from({length:ih*7},(n,o)=>s+o*Uo).map(n=>{const o=oh(n),a=o===this.value,l=a?"bg-accent font-medium text-white":o===t?"font-semibold text-accent hover:bg-hover":new Date(n).getUTCMonth()===i?"text-ink hover:bg-hover":"text-muted/60 hover:bg-hover";return r`<div class="py-px">
          <button
            type="button"
            aria-pressed=${a}
            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm tabular-nums transition-colors ${l}"
            @click=${()=>this.pick(o)}
          >
            ${new Date(n).getUTCDate()}
          </button>
        </div>`})}
    </div>`}renderGrid(t,e){return r`<div class="grid h-full grid-cols-3 grid-rows-4 gap-1">
      ${t.map(s=>r`<button
          type="button"
          class="rounded-lg text-sm transition-colors ${s.selected?"bg-accent font-medium text-white":s.current?"font-semibold text-accent hover:bg-hover":"text-ink hover:bg-hover"}"
          @click=${()=>e(s.key)}
        >
          ${s.label}
        </button>`)}
    </div>`}navButton(t,e,s){return r`<button
      type="button"
      aria-label=${t}
      class="grid h-7 w-7 place-items-center rounded-md transition-colors hover:bg-hover"
      @click=${()=>this.step(s)}
    >
      ${this.chevron(e)}
    </button>`}chevron(t){const e=t==="down"?14:16;return r`<svg width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="text-muted">
      <path d=${hh[t]} />
    </svg>`}};Rt([b()],Dt.prototype,"value",2);Rt([b()],Dt.prototype,"name",2);Rt([b()],Dt.prototype,"placeholder",2);Rt([b()],Dt.prototype,"label",2);Rt([b({type:Boolean})],Dt.prototype,"clearable",2);Rt([b({type:Boolean})],Dt.prototype,"headless",2);Rt([b({attribute:"field-class"})],Dt.prototype,"fieldClass",2);Rt([d()],Dt.prototype,"open",2);Rt([d()],Dt.prototype,"view",2);Rt([d()],Dt.prototype,"month",2);Rt([d()],Dt.prototype,"yearsFrom",2);Dt=Rt([w("mana-date-picker")],Dt);var uh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,qe=(t,e,s,i)=>{for(var n=i>1?void 0:i?ph(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&uh(e,s,n),n};const mh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function fh(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return t;const s=Number(e[3]),i=mh[Number(e[2])-1],n=e[1].slice(2);return`${s} ${i} ${n}`}function gh(t){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(t))return null;const s=new Date(`${t}T00:00:00`).getTime();return Math.round((s-Date.now())/864e5)}let ye=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=t=>{if(!this.dragEnabled){t.preventDefault();return}t.dataTransfer&&(t.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),t.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=t=>{if(!t.dataTransfer?.types.includes("text/x-kr-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const e=t.currentTarget.getBoundingClientRect();this.dragOverPos=t.clientY<e.top+e.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async t=>{const e=t.dataTransfer?.getData("text/x-kr-id"),s=e?Number(e):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.kr.id)return;t.preventDefault();const n=i==="after"?this.index+1:this.index;await f.getState().reorderKeyResult(s,n)},this.onEditKeydown=t=>{t.key==="Enter"?(t.preventDefault(),this.commitEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=j(this,f,t=>t.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.()}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("kr-touched",{detail:{id:this.kr.id},bubbles:!0,composed:!0}))}async toggleDone(){this.clearHighlight(),await f.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await f.getState().deleteKeyResult(this.kr.id)}startEdit(){this.editing||(this.clearHighlight(),this.editing=!0)}async focusTitle(){this.startEdit(),await this.updateComplete;const t=this.querySelector("input.kr-title");t?.focus(),t?.select()}async commitEdit(t){const e=t.trim();this.editing=!1,!(!e||e===this.kr.title)&&await f.getState().updateKeyResult(this.kr.id,{title:e})}async pickDate(t){t.stopPropagation(),await this.querySelector("mana-date-picker.kr-date-picker")?.show(t.currentTarget)}async onDateChange(t){const e=t.target.value;await f.getState().updateKeyResult(this.kr.id,{targetDate:e||null})}renderDateChip(){if(this.kr.done===1)return r`<span
        class="kr-chip shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
        style="color:var(--nsc-green);background:color-mix(in srgb, var(--nsc-green) 13%, transparent);"
        >Done</span
      >`;if(this.kr.target_date){const t=gh(this.kr.target_date);if(t!=null&&t<0)return r`<button
          type="button"
          class="kr-date-btn shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
          style="color:var(--nsc-red);background:color-mix(in srgb, var(--nsc-red) 13%, transparent);"
          title="Change target date"
          @click=${this.pickDate}
        >
          Overdue
        </button>`;const e=t!=null&&t<=7;return r`<button
        type="button"
        class="kr-date-btn shrink-0 text-xs hover:opacity-80"
        style="color:${e?"var(--nsc-amber)":"var(--color-muted)"};"
        title="Change target date"
        @click=${this.pickDate}
      >
        ${fh(this.kr.target_date)}
      </button>`}return r`<button
      type="button"
      class="kr-date-btn empty shrink-0 text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const t=this.kr.done===1,e=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",s=`kr:${this.kr.id}`,n=f.getState().focusedRowKey===s?"bg-hover":"";return r`
      <li
        class="kr group/kr relative flex items-center gap-2 py-0.5 px-2 -mx-2 rounded hover:bg-hover ${e} ${t?"done opacity-60":""} ${n}"
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
          class="kr-check shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${t?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${t?r`<svg
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
              </svg>`:c}
        </button>
        ${this.editing?r`<input
              class="kr-title inline-edit flex-1 bg-transparent border-b border-line text-sm outline-none"
              .value=${this.kr.title}
              placeholder="Unnamed key result"
              aria-label="Key result title"
              autofocus
              @keydown=${this.onEditKeydown}
              @blur=${o=>this.commitEdit(o.target.value)}
            />`:r`<span
              class="kr-title flex-1 text-sm cursor-text ${t?"line-through":this.highlight?"font-medium":""} ${this.kr.title?"":"text-muted"}"
              style=${this.highlight&&!t?"color:var(--nsc-green);":""}
              @click=${this.startEdit}
              >${this.kr.title||"Unnamed key result"}</span
            >`}
        ${this.renderDateChip()}
        <mana-date-picker
          headless
          clearable
          class="kr-date-picker"
          label="Target date"
          .value=${this.kr.target_date??""}
          @change=${this.onDateChange}
        ></mana-date-picker>
        <button
          type="button"
          class="kr-del shrink-0 opacity-0 group-hover/kr:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
          aria-label="Delete key result"
          @click=${this.delete}
        >
          ×
        </button>
      </li>
    `}};qe([b({attribute:!1})],ye.prototype,"kr",2);qe([b({attribute:!1})],ye.prototype,"index",2);qe([b({type:Boolean})],ye.prototype,"highlight",2);qe([d()],ye.prototype,"editing",2);qe([d()],ye.prototype,"dragEnabled",2);qe([d()],ye.prototype,"dragOverPos",2);ye=qe([w("key-result-row")],ye);const za=["slate","red","orange","amber","green","teal","blue","indigo","violet","pink"],Ka=["target","rocket","compass","flag","flame","lightbulb","heart","dumbbell","brain","book","briefcase","code","pen","megaphone","camera","mountain","globe","zap","star","sparkles"];let Ks;function bh(t){Ks?.();const{goal:e,anchor:s}=t,i=document.createElement("div");i.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(s).fontFamily,i.style.width=`${Math.min(256,window.innerWidth-16)}px`,i.style.maxHeight=`${window.innerHeight-16}px`,i.dataset.goalMenu=String(e.id),document.body.appendChild(i);let n=t.page??"main",o=!1,a="",l=!1;const h=(S=!1)=>{l||(l=!0,document.removeEventListener("pointerdown",p,!0),document.removeEventListener("keydown",A,!0),window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",g),vt(c,i),i.remove(),Ks===u&&(Ks=void 0),S&&s.isConnected&&s.focus({preventScroll:!0}))},u=()=>h();Ks=u;const p=S=>{S.composedPath().includes(i)||h()},m=S=>{(!(S.target instanceof Node)||!i.contains(S.target))&&h()},g=()=>h(),v=()=>[...i.querySelectorAll("button:not(:disabled)")],x=()=>v()[0]?.focus({preventScroll:!0}),A=S=>{if(S.key==="Escape"){S.preventDefault(),S.stopPropagation(),n!=="main"?N("main"):h(!0);return}if(S.key==="Tab"){h();return}if(!i.contains(document.activeElement)||!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].includes(S.key))return;S.preventDefault(),S.stopPropagation();const pt=v(),Ve=pt.indexOf(document.activeElement),ji=S.key==="Home"?0:S.key==="End"?pt.length-1:(Ve+(["ArrowUp","ArrowLeft"].includes(S.key)?-1:1)+pt.length)%pt.length;pt[ji]?.focus()},y=()=>{const S=s.getBoundingClientRect(),pt=i.getBoundingClientRect(),Ve=t.point?.x??S.left,ji=t.point?.y??(S.bottom+6+pt.height>window.innerHeight-8?S.top-pt.height-6:S.bottom+6);i.style.left=`${Math.max(8,Math.min(Ve,window.innerWidth-pt.width-8))}px`,i.style.top=`${Math.max(8,Math.min(ji,window.innerHeight-pt.height-8))}px`},N=S=>{n=S,a="",he(),x()},Q=S=>{h(),t.onAction(S)},Nt=async S=>{if(!o){o=!0,a="",he();try{await S(),h(!0)}catch(pt){o=!1,a=pt instanceof Error?pt.message:"Could not update goal. Try again.",l||(he(),x())}}},St=(S,pt,Ve=!1)=>r`<button
    type="button" role=${n==="status"?"menuitemradio":"menuitem"}
    aria-checked=${n==="status"?String(Ve):c}
    class="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    ?disabled=${o} @click=${pt}><span class="flex-1">${S}</span>${Ve?r`<span aria-hidden="true">✓</span>`:c}</button>`,he=()=>{i.setAttribute("role",n==="main"||n==="status"?"menu":"dialog"),i.setAttribute("aria-label",n==="main"?`Actions for ${e.title}`:`Goal ${n}`),i.setAttribute("aria-busy",String(o)),vt(r`
      ${n!=="main"?r`<button type="button" role=${n==="status"?"menuitem":c} class="w-full rounded px-3 py-2 text-left text-sm font-medium hover:bg-hover" ?disabled=${o} @click=${()=>N("main")}>‹ Back</button>`:c}
      ${n==="main"?r`
        ${St("Rename",()=>Q("rename"))}
        ${St("Add key result",()=>Q("add-kr"))}
        ${St("Change target date",()=>Q("target-date"))}
        ${St("Change color",()=>N("color"))}
        ${St("Change icon",()=>N("icon"))}
        ${St("Change status",()=>N("status"))}
        ${St(t.expanded?"Collapse key results":"Expand key results",()=>Q("toggle"))}
        ${St("Edit details and history",()=>Q("details"))}
        ${e.archived?St("Restore goal",()=>void Nt(()=>f.getState().updateGoal(e.id,{status:"active"}))):St("Archive goal",()=>void Nt(()=>f.getState().deleteGoal(e.id,!1)))}
      `:c}
      ${n==="color"?r`<div class="grid grid-cols-5 gap-2 p-2" role="group" aria-label="Color">
        ${[null,...za].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style="background:${S?`var(--nsc-${S})`:"var(--color-hover)"};${(e.color??null)===S?"box-shadow:0 0 0 2px var(--color-ink);":""}"
          aria-label=${S??"No color"} aria-pressed=${(e.color??null)===S} title=${S??"No color"}
          ?disabled=${o} @click=${()=>void Nt(()=>f.getState().updateGoal(e.id,{color:S}))}
        >${S?c:"∅"}</button>`)}
      </div>`:c}
      ${n==="icon"?r`<div class="grid grid-cols-5 gap-1 p-2" role="group" aria-label="Icon">
        ${[null,...Ka].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded hover:bg-hover focus-visible:bg-hover outline-none"
          style=${(e.symbol??null)===S?"background:var(--color-hover);box-shadow:inset 0 0 0 1.5px var(--color-ink);":""}
          aria-label=${S??"No icon"} aria-pressed=${(e.symbol??null)===S} title=${S??"No icon"}
          ?disabled=${o} @click=${()=>void Nt(()=>f.getState().updateGoal(e.id,{symbol:S}))}
        ><span class="inline-flex h-4 w-4 items-center justify-center">${S?V(Ue(Be[S])):"∅"}</span></button>`)}
      </div>`:c}
      ${n==="status"?["active","paused","shipped"].map(S=>St({active:"Active",paused:"Paused",shipped:"Shipped"}[S],()=>void Nt(()=>f.getState().updateGoal(e.id,{status:S})),e.status===S)):c}
      ${a?r`<p role="alert" class="px-3 py-2 text-xs text-red-500">${a}</p>`:c}
    `,i),y()};return document.addEventListener("pointerdown",p,!0),document.addEventListener("keydown",A,!0),window.addEventListener("scroll",m,!0),window.addEventListener("resize",g),he(),x(),u}function Vt(t,e){const s={text:t,kind:e};document.dispatchEvent(new CustomEvent("mana-planner-note",{detail:s}))}async function qa(t,e){const s=crypto.randomUUID();try{if(!(await B("/api/ideas",{text:e},s))?.id)throw new Error("no parked item id")}catch{return Vt(`Couldn't park: ${e}`,"error"),!1}try{await fe(`/api/commitments/${t}`,s),Vt(`Parked: ${e}`,"user")}catch{Vt(`Parked, but the task wasn't removed: ${e}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}async function ro(t,e){const s=crypto.randomUUID();try{const i=f.getState().currentWeek??void 0;if(!(await B("/api/commitments",{title:e,week:i},s))?.id)throw new Error("no task id")}catch{return Vt(`Couldn't add to the week: ${e}`,"error"),!1}try{await fe(`/api/ideas/${t}`,s),Vt(`Added to Weekly: ${e}`,"user")}catch{Vt(`Added, but it's still parked: ${e}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}var vh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,Jt=(t,e,s,i)=>{for(var n=i>1?void 0:i?xh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&vh(e,s,n),n};const ao="slmai.cockpit.collapsedGoals",yh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';function kh(t){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(t))return"";const s=new Date(`${t}T00:00:00`),i=new Date,n=Math.round((s.getTime()-i.getTime())/864e5);if(n<0)return"overdue";if(n===0)return"due today";if(n<31)return`${n} day${n===1?"":"s"} left`;const o=Math.round(n/30.44);if(o<12)return`${o} month${o===1?"":"s"} left`;const a=n/365.25,l=a<2?a.toFixed(1):String(Math.round(a));return`${l} year${l==="1"||l==="1.0"?"":"s"} left`}function $h(t){const e=/^(\d{4})-(\d{2})-\d{2}$/.exec(t);return e?`${yh[Number(e[2])-1]} ${e[1]}`:t}function Ko(){try{const t=localStorage.getItem(ao);if(!t)return new Set;const e=JSON.parse(t);return Array.isArray(e)?new Set(e.filter(s=>typeof s=="number")):new Set}catch{return new Set}}function qo(t){try{localStorage.setItem(ao,JSON.stringify(Array.from(t)))}catch{}}let Ut=class extends T{constructor(){super(...arguments),this.northStars=[],this.highlight=!1,this.highlightKrIds=new Set,this.flashKrIds=new Set,this.editingTitle=!1,this.markerOpen=!1,this.creatingKR=!1,this.collapsed=Ko(),this.onStorage=t=>{(t.key===ao||t.key==null)&&(this.collapsed=Ko())},this.onDocClick=t=>{this.markerOpen&&!this.contains(t.target)&&(this.markerOpen=!1)},this.onTitleKeydown=t=>{t.key==="Enter"?(t.preventDefault(),this.commitTitle(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=j(this,f,t=>t.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.(),this.closeMenu?.()}get expanded(){return!this.collapsed.has(this.goal.id)}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("goal-touched",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}toggleExpand(t){if(t.target?.closest("[data-no-toggle]"))return;this.clearHighlight();const s=new Set(this.collapsed);this.expanded?s.add(this.goal.id):s.delete(this.goal.id),this.collapsed=s,qo(s)}onCardClick(t){const e=t.target;(!this.expanded||e.closest(".goal-head"))&&this.toggleExpand(t)}starFor(t){return t?this.northStars.find(e=>e.slug===t)??null:null}openModal(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}async commitTitle(t){const e=t.trim();this.editingTitle=!1,!(!e||e===this.goal.title)&&await f.getState().updateGoal(this.goal.id,{title:e})}async pickDate(t){t.stopPropagation(),await this.querySelector("mana-date-picker.goal-date-picker")?.show(t.currentTarget)}async onDateChange(t){const e=t.target.value;await f.getState().updateGoal(this.goal.id,{targetDate:e||null})}async recategorize(t){this.markerOpen=!1,(this.goal.north_star??null)!==t&&await f.getState().updateGoal(this.goal.id,{northStar:t})}async beginAddKR(t){if(t?.stopPropagation(),this.creatingKR)return;this.clearHighlight();const e=new Set(this.collapsed);e.delete(this.goal.id),this.collapsed=e,qo(e),this.creatingKR=!0;try{const s=await f.getState().addKeyResult(this.goal.id,"");await this.updateComplete,await[...this.querySelectorAll("key-result-row")].find(n=>n.kr.id===s)?.focusTitle()}catch(s){Vt(s instanceof Error?s.message:"Couldn't add key result","error")}finally{this.creatingKR=!1}}get krProgress(){const t=this.goal.keyResults??[],e=t.length,s=t.filter(n=>n.done===1).length,i=e?Math.round(s/e*100):0;return{done:s,total:e,pct:i}}renderMarker(){const t=this.goal.symbol??null,e=this.goal.color??null,s=t?Be[t]:void 0,i=th(e),{done:n,total:o,pct:a}=this.krProgress,l=s?r`<span
          style="display:inline-block;width:15px;height:15px;color:${i};position:relative;"
          >${V(Ue(s))}</span
        >`:c;if(o===0)return s?r`
        <span
          class="goal-marker-slot inline-flex items-center justify-center shrink-0"
          title=${this.goal.title}
          style="width:18px;height:18px;"
        >
          ${l}
        </span>
      `:c;const h=97.39,u=h*(1-a/100);return r`
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
            stroke-dasharray=${h} stroke-dashoffset=${u}
            style="transition:stroke-dashoffset .35s ease;"
          />
        </svg>
        ${l}
      </span>
    `}renderTargetLine(){if(this.goal.target_date){const t=kh(this.goal.target_date),e=t==="overdue";return r`<div
        class="goal-target-line flex items-center gap-1.5 text-sm text-muted"
      >
        <span style="width:13px;height:13px;display:inline-flex;opacity:.7;"
          >${V(wh)}</span
        >
        <button
          type="button"
          class="goal-date-btn hover:text-ink"
          title="Change target date"
          data-no-toggle
          @click=${this.pickDate}
        >
          ${$h(this.goal.target_date)}
        </button>
        ${t?r`<span class="opacity-50">·</span>
              <span style=${e?"color:var(--nsc-red)":""}>${t}</span>`:c}
      </div>`}return r`<button
      type="button"
      class="goal-date-btn empty text-sm text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100"
      title="Set target date"
      data-no-toggle
      @click=${this.pickDate}
    >
      + set target date
    </button>`}renderStatusBadge(){if(!this.goal.archived)return c;const t=this.goal.status==="killed"?"archived":this.goal.status;return r`<span
      class="goal-status-badge ml-2 text-[10px] px-1.5 py-0.5 rounded border border-line text-muted"
      >${t}</span
    >`}openMenu(t,e="main"){if(t.target.closest("input, textarea, [contenteditable]"))return;t.preventDefault(),t.stopPropagation(),this.clearHighlight();const i=this.querySelector(".goal-kebab");if(!i)return;const n=t.type==="contextmenu"&&"clientX"in t&&(t.clientX||t.clientY)?{x:t.clientX,y:t.clientY}:void 0;this.closeMenu=bh({goal:this.goal,anchor:i,point:n,page:e,expanded:this.expanded,onAction:o=>{o==="details"?this.openModal(new Event("click")):o==="target-date"?this.pickDate(new Event("click")):o==="toggle"?this.toggleExpand(new Event("click")):o==="rename"?(this.editingTitle=!0,this.updateComplete.then(()=>{const a=this.querySelector("input.goal-title");a?.focus(),a?.select()})):o==="add-kr"&&this.beginAddKR()}})}onMenuKey(t){(t.key==="ContextMenu"||t.shiftKey&&t.key==="F10")&&this.openMenu(t)}statusChipMeta(t){switch(t){case"shipped":return{label:"Shipped",color:"var(--nsc-green)",always:!0};case"paused":return{label:"Paused",color:"var(--nsc-amber)",always:!0};case"killed":return{label:"Archived",color:"var(--color-muted)",always:!0};default:return{label:"Active",color:"var(--color-muted)",always:!1}}}renderStatusChip(){const t=this.goal.status??"active";if(t==="active")return c;const e=this.statusChipMeta(t);return r`<span class="goal-status-wrap relative" data-no-toggle>
      <button
        type="button"
        class="goal-status-chip ${"opacity-90 hover:opacity-100"} text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full transition-opacity"
        style="color:${e.color};background:color-mix(in srgb, ${e.color} 13%, transparent);"
        title="Change status"
        data-no-toggle
        @click=${i=>this.openMenu(i,"status")}
      >
        ${e.label}
      </button>
    </span>`}render(){const t=this.goal.keyResults??[],e=this.expanded,s=this.goal.archived?"opacity-60":"",i=`goal:${this.goal.id}`,o=f.getState().focusedRowKey===i?"bg-hover":"";return r`
      <li
        class="goal group relative flex flex-col px-2 -mx-2 py-3 rounded-lg ${e?"":"cursor-pointer hover:bg-hover"} ${s} ${o}"
        data-id=${this.goal.id}
        data-row-key=${i}
        tabindex="0"
        @click=${this.onCardClick}
        @contextmenu=${a=>this.openMenu(a)}
        @keydown=${this.onMenuKey}
      >
        <div
          class="goal-head flex items-start gap-2.5 cursor-pointer select-none"
        >
          <button
            type="button"
            aria-label=${`${e?"Collapse":"Expand"} ${this.goal.title}`}
            aria-expanded=${e}
            aria-controls=${`goal-krs-${this.goal.id}`}
            class="text-muted opacity-40 hover:opacity-100 shrink-0 mt-1"
            style="width:11px;height:11px;display:inline-flex;"
            >${V(e?js:Fs)}</button
          >
          <span class="goal-marker-col mt-px">${this.renderMarker()}</span>
          <div class="flex-1 min-w-0 flex flex-col gap-0.5">
            <div class="flex items-center gap-2 flex-wrap">
              ${this.editingTitle?r`<input
                    class="goal-title inline-edit flex-1 bg-transparent border-b border-line outline-none text-base font-semibold"
                    .value=${this.goal.title}
                    autofocus
                    data-no-toggle
                    @keydown=${this.onTitleKeydown}
                    @blur=${a=>this.commitTitle(a.target.value)}
                  />`:r`<span
                    class="goal-title text-base font-semibold"
                    style=${this.highlight?"color:var(--nsc-green);":""}
                    >${this.goal.title}</span
                  >`}
              ${this.renderStatusChip()}
            </div>
            ${this.renderTargetLine()}
          </div>
          <mana-date-picker
            headless
            clearable
            class="goal-date-picker"
            label="Target date"
            .value=${this.goal.target_date??""}
            data-no-toggle
            @change=${this.onDateChange}
          ></mana-date-picker>
          <button
            type="button"
            class="goal-add-kr inline-flex items-center gap-1 shrink-0 rounded px-1 py-1 text-xs text-muted hover:text-ink hover:bg-hover transition-opacity [@media(hover:hover)]:opacity-0 group-hover:opacity-100 focus-visible:opacity-100 ${this.creatingKR?"!opacity-100":""}"
            aria-label=${`Add key result to ${this.goal.title}`}
            title="Add key result"
            ?disabled=${this.creatingKR}
            aria-busy=${this.creatingKR}
            data-no-toggle
            @click=${this.beginAddKR}
          >
            <span class="inline-flex h-3.5 w-3.5" aria-hidden="true">${V(Ha)}</span>
            New KR
          </button>
          <button
            type="button"
            class="goal-kebab text-muted hover:text-ink px-1 text-lg leading-none shrink-0"
            aria-label=${`Actions for ${this.goal.title}`}
            aria-haspopup="menu"
            data-no-toggle
            @click=${a=>this.openMenu(a)}
          >
            ⋮
          </button>
        </div>
        ${e&&t.length>0?r`<ul id=${`goal-krs-${this.goal.id}`} class="kr-list relative pl-[65px] lg:pl-[49px] mt-2 flex flex-col">
              ${e?t.map((a,l)=>r`<key-result-row class=${this.flashKrIds.has(a.id)?"agent-flash":""} data-flash=${`kr:${a.id}`} .kr=${a} .index=${l} .highlight=${this.highlightKrIds.has(a.id)}></key-result-row>`):c}
            </ul>`:c}
      </li>
    `}};Jt([b({attribute:!1})],Ut.prototype,"goal",2);Jt([b({attribute:!1})],Ut.prototype,"northStars",2);Jt([b({type:Boolean})],Ut.prototype,"highlight",2);Jt([b({attribute:!1})],Ut.prototype,"highlightKrIds",2);Jt([b({attribute:!1})],Ut.prototype,"flashKrIds",2);Jt([d()],Ut.prototype,"editingTitle",2);Jt([d()],Ut.prototype,"markerOpen",2);Jt([d()],Ut.prototype,"creatingKR",2);Jt([d()],Ut.prototype,"collapsed",2);Ut=Jt([w("goal-row")],Ut);var Sh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Wa=(t,e,s,i)=>{for(var n=i>1?void 0:i?Th(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Sh(e,s,n),n};let An=class extends T{constructor(){super(...arguments),this.events=[]}fmt(t){return new Date(t*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?r`
      <ul class="gm-history flex flex-col gap-1 text-xs">
        ${this.events.map(t=>r`
            <li class="grid grid-cols-[auto_auto_1fr] gap-2 items-baseline">
              <time class="text-muted">${this.fmt(t.changed_at)}</time>
              <span class="ev font-medium">${t.event}</span>
              <span class="text-muted">
                ${t.from_value||t.to_value?r`${t.from_value||""} → ${t.to_value||""}`:c}
              </span>
            </li>
          `)}
      </ul>
    `:r`<div class="text-xs text-muted italic">
        (no events yet)
      </div>`}};Wa([b({attribute:!1})],An.prototype,"events",2);An=Wa([w("goal-history-popover")],An);var Ch=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,at=(t,e,s,i)=>{for(var n=i>1?void 0:i?Eh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ch(e,s,n),n};const Dh=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let it=class extends T{constructor(){super(...arguments),this.goalId=null,this.creating=!1,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.completedOpen=!1,this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(t){t.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId)),t.has("creating")&&this.creating&&(this.reset(),this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null)}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(t){this.loading=!0;try{const e=await C.goals.summary(t);this.goal=e.goal,this.keyResults=e.keyResults,this.commitments=e.commitments,this.events=e.events,this.stats=e.stats,this.editNorthStar=e.goal.north_star??"",this.editTargetDate=e.goal.target_date??"",this.editStatus=e.goal.status,this.editColor=e.goal.color??null,this.editSymbol=e.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await f.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await f.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await f.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await f.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?r`
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
    `:c}renderCompleted(){const t=this.keyResults.filter(i=>i.done),e=this.commitments.filter(i=>i.done),s=t.length+e.length;return s===0?c:r`
      <div class="gm-field mb-3">
        <button
          type="button"
          class="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          @click=${()=>this.completedOpen=!this.completedOpen}
        >
          <span style="width:11px;height:11px;display:inline-flex;"
            >${V(this.completedOpen?js:Fs)}</span
          >
          Completed (${s})
        </button>
        ${this.completedOpen?r`<div class="mt-2">
              ${t.length?r`<div class="mb-3">
                    <label class="block text-xs text-muted mb-1">achieved KRs</label>
                    <ul class="text-sm">
                      ${t.map(i=>r`<li>✓ ${i.title}</li>`)}
                    </ul>
                  </div>`:c}
              ${e.length?r`<div>
                    <label class="block text-xs text-muted mb-1"
                      >shipped commitments</label
                    >
                    <ul class="text-sm">
                      ${e.map(i=>r`
                          <li class="flex justify-between gap-2">
                            <span>✓ ${i.title}</span>
                            <span class="text-xs text-muted">${i.week}</span>
                          </li>
                        `)}
                    </ul>
                  </div>`:c}
            </div>`:c}
      </div>
    `}async createNew(){const t=this.editTitle.trim();t&&(await f.getState().createGoal({title:t,targetDate:this.editTargetDate||null,color:this.editColor,symbol:this.editSymbol}),this.close())}renderColorField(){return r`
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
          ${za.map(t=>r`
              <button
                type="button"
                class="w-6 h-6 rounded-full border-2 transition-all ${this.editColor===t?"border-ink scale-110":"border-transparent"}"
                style="background:var(--nsc-${t})"
                title=${t}
                @click=${()=>this.editColor=this.editColor===t?null:t}
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
          ${Ka.map(t=>r`
              <button
                type="button"
                class="w-7 h-7 grid place-items-center rounded border transition-colors ${this.editSymbol===t?"border-ink bg-hover":"border-line hover:bg-hover"}"
                title=${t}
                @click=${()=>this.editSymbol=this.editSymbol===t?null:t}
              >
                <sc-icon name="lucide-${t}"></sc-icon>
              </button>
            `)}
        </div>
      </div>
    `}renderTargetDateField(){return r`
      <div class="gm-field mb-3">
        <label class="block text-xs text-muted mb-1">target date</label>
        <mana-date-picker
          clearable
          class="block"
          label="Target date"
          placeholder="No target date"
          field-class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
          .value=${this.editTargetDate}
          @change=${t=>this.editTargetDate=t.target.value}
        ></mana-date-picker>
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
          @input=${t=>this.editTitle=t.target.value}
          @keydown=${t=>{t.key==="Enter"&&(t.preventDefault(),this.createNew())}}
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
    `}render(){const t=this.goalId!=null||this.creating,e=this.goal?.status==="killed";return r`
      <sc-dialog
        ?open=${t}
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
                  ${Dh.map(s=>r`
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
                ${e?r`<button
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
    `}};at([b({type:Number})],it.prototype,"goalId",2);at([b({type:Boolean})],it.prototype,"creating",2);at([b({attribute:!1})],it.prototype,"northStars",2);at([d()],it.prototype,"goal",2);at([d()],it.prototype,"keyResults",2);at([d()],it.prototype,"commitments",2);at([d()],it.prototype,"events",2);at([d()],it.prototype,"stats",2);at([d()],it.prototype,"loading",2);at([d()],it.prototype,"completedOpen",2);at([d()],it.prototype,"editTitle",2);at([d()],it.prototype,"editNorthStar",2);at([d()],it.prototype,"editTargetDate",2);at([d()],it.prototype,"editStatus",2);at([d()],it.prototype,"editColor",2);at([d()],it.prototype,"editSymbol",2);it=at([w("goal-modal")],it);function lo({open:t,label:e,onToggle:s,controls:i,align:n="row"}){return r`<button
    type="button"
    class="fold-toggle mt-3 flex items-center gap-2 py-1 ${n==="row"?"pl-4":"pl-2"} pr-2 -mx-2 rounded text-xs text-muted hover:text-ink"
    aria-expanded=${t}
    aria-controls=${i??""}
    @click=${s}
  >${n==="row"?r`<span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>`:""}<sc-icon name=${t?"lucide-chevron-down":"lucide-chevron-right"} class="w-4 h-4"></sc-icon
    ><span>${e}</span></button>`}var Ph=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,ce=(t,e,s,i)=>{for(var n=i>1?void 0:i?Ah(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ph(e,s,n),n};const Wo="slmai.cockpit.goalsSectionCollapsed",Ki="slmai.cockpit.goalsSection.title",qi="Goals";let Yt=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=qi,this.creatingGoal=!1,this.activeModalId=null,this.highlightGoalIds=new Set,this.highlightKrIds=new Set,this.flashGoals=new gi(this,"goal"),this.flashKrs=new gi(this,"kr"),this.onOpsEvent=t=>{const e=t.detail;e&&(e.action==="refresh"||e.action==="load-week")&&(this.flashGoals.take(e),this.flashKrs.take(e),e.action==="refresh"&&e.added?.kind==="goal"?this.highlightGoalIds=new Set(this.highlightGoalIds).add(e.added.id):e.action==="refresh"&&e.added?.kind==="kr"&&(this.highlightKrIds=new Set(this.highlightKrIds).add(e.added.id)),f.getState().loadGoals().catch(()=>{}))},this.onGoalTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightGoalIds.has(e))return;const s=new Set(this.highlightGoalIds);s.delete(e),this.highlightGoalIds=s},this.onKrTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightKrIds.has(e))return;const s=new Set(this.highlightKrIds);s.delete(e),this.highlightKrIds=s},this.toggleSection=()=>{const t=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(Wo,this.sectionCollapsed?"1":"0"),t&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(Wo)==="1",this.titleValue=localStorage.getItem(Ki)??qi,fetch("/api/settings").then(t=>t.json()).then(t=>{const e=t["ui.section.goals.title"];e&&(this.titleValue=e,localStorage.setItem(Ki,e))}).catch(()=>{}),this.unsubGoals=j(this,f,t=>t.goals),this.unsubArchived=j(this,f,t=>`${t.goalsArchivedCount}:${t.includeArchivedGoals}`),this.unsubStars=j(this,f,t=>t.northStars),f.getState().loadGoals().catch(()=>{}),f.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent)}async toggleArchived(){const t=f.getState();await t.toggleArchivedGoals(!t.includeArchivedGoals)}openCreate(){this.creatingGoal=!0}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||qi;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(Ki,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}renderGoalList(t,e){const s=f.getState().northStars;return r`
      <ul
        id=${e} class="goal-list flex flex-col"
        @goal-touched=${this.onGoalTouched}
        @kr-touched=${this.onKrTouched}
      >
        ${t.map(i=>r`
            <goal-row
              .goal=${i}
              .northStars=${s}
              .highlight=${this.highlightGoalIds.has(i.id)}
              .highlightKrIds=${this.highlightKrIds}
              .flashKrIds=${this.flashKrs.ids}
              class=${this.flashGoals.cls(i.id)}
              data-flash=${this.flashGoals.key(i.id)}
              @open-modal=${n=>this.activeModalId=n.detail.id}
            ></goal-row>
          `)}
      </ul>
    `}render(){const t=f.getState(),e=t.goals,s=t.northStars,i=t.goalsArchivedCount,n=t.includeArchivedGoals,o=this.tabbed||!this.sectionCollapsed;return r`
      <section class="goals-section flex flex-col gap-1 ${this.tabbed?"":"pb-16"}">
        ${this.tabbed?c:r`<header
              class="goals-header flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleSection}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${V(this.sectionCollapsed?Fs:js)}</span
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
              ${this.renderGoalList(e.filter(a=>!a.archived),"active-goals")}
              ${i>0?lo({open:n,label:`${i} archived`,controls:"archived-goals",align:"goal",onToggle:()=>void this.toggleArchived()}):c}
              ${n?this.renderGoalList(e.filter(a=>a.archived),"archived-goals"):c}
            `:c}

        <goal-modal
          .goalId=${this.activeModalId}
          .creating=${this.creatingGoal}
          .northStars=${s}
          @close=${()=>{this.activeModalId=null,this.creatingGoal=!1}}
        ></goal-modal>
      </section>
    `}};ce([b({type:Boolean})],Yt.prototype,"tabbed",2);ce([d()],Yt.prototype,"sectionCollapsed",2);ce([d()],Yt.prototype,"editingTitle",2);ce([d()],Yt.prototype,"titleValue",2);ce([d()],Yt.prototype,"creatingGoal",2);ce([d()],Yt.prototype,"activeModalId",2);ce([d()],Yt.prototype,"highlightGoalIds",2);ce([d()],Yt.prototype,"highlightKrIds",2);Yt=ce([w("goals-section")],Yt);var Mh=Object.getOwnPropertyDescriptor,Ih=(t,e,s,i)=>{for(var n=i>1?void 0:i?Mh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};const Go=[{text:"Indeed, with hardship comes ease.",source:"Quran 94:6"},{text:"So verily, with every hardship there is ease.",source:"Quran 94:5"},{text:"Did We not expand for you your breast?",source:"Quran 94:1"},{text:"So when you have finished, then stand up for worship.",source:"Quran 94:7"},{text:"And to your Lord direct your longing.",source:"Quran 94:8"},{text:"And that there is nothing for man except what he strives for.",source:"Quran 53:39"},{text:"And that his effort is going to be seen.",source:"Quran 53:40"},{text:"Indeed, Allah will not change the condition of a people until they change what is in themselves.",source:"Quran 13:11"},{text:"Verily, in the remembrance of Allah do hearts find rest.",source:"Quran 13:28"},{text:"So remember Me; I will remember you, and be grateful to Me.",source:"Quran 2:152"},{text:"Seek help through patience and prayer. Indeed, Allah is with the patient.",source:"Quran 2:153"},{text:"And seek help through patience and prayer.",source:"Quran 2:45"},{text:"And when My servants ask you concerning Me — indeed I am near.",source:"Quran 2:186"},{text:"Our Lord, give us good in this world and good in the Hereafter.",source:"Quran 2:201"},{text:"Perhaps you hate a thing and it is good for you.",source:"Quran 2:216"},{text:"Our Lord, pour upon us patience and plant firmly our feet.",source:"Quran 2:250"},{text:"Allah does not burden a soul beyond what it can bear.",source:"Quran 2:286"},{text:"So race to all that is good.",source:"Quran 2:148"},{text:"And speak to people good words.",source:"Quran 2:83"},{text:"And give good tidings to the patient.",source:"Quran 2:155"},{text:"Whatever good you put forward for yourselves, you will find it with Allah.",source:"Quran 2:110"},{text:"A kind word and forgiveness are better than charity followed by injury.",source:"Quran 2:263"},{text:"Indeed, Allah loves those who are constantly repentant and those who purify themselves.",source:"Quran 2:222"},{text:"And do good; indeed, Allah loves the doers of good.",source:"Quran 2:195"},{text:"And whoever relies upon Allah — then He is sufficient for him.",source:"Quran 65:3"},{text:"And whoever fears Allah — He will make for him a way out.",source:"Quran 65:2"},{text:"My Lord, increase me in knowledge.",source:"Quran 20:114"},{text:"My Lord, expand for me my breast and ease for me my task.",source:"Quran 20:25"},{text:"Establish prayer for My remembrance.",source:"Quran 20:14"},{text:"Call upon Me; I will respond to you.",source:"Quran 40:60"},{text:"Do not despair of the mercy of Allah; indeed, Allah forgives all sins.",source:"Quran 39:53"},{text:"Are those who know equal to those who do not know?",source:"Quran 39:9"},{text:"The patient will be given their reward without measure.",source:"Quran 39:10"},{text:"Whoever does righteousness, We will surely cause them to live a good life.",source:"Quran 16:97"},{text:"Indeed, Allah orders justice and good conduct.",source:"Quran 16:90"},{text:"Indeed, Allah is with those who fear Him and those who do good.",source:"Quran 16:128"},{text:"And He found you lost and guided you.",source:"Quran 93:7"},{text:"And your Lord is going to give you, and you will be satisfied.",source:"Quran 93:5"},{text:"Indeed, my Lord is near and responsive.",source:"Quran 11:61"},{text:"And be patient, for Allah does not let the reward of those who do good be lost.",source:"Quran 11:115"},{text:"My success is not but through Allah; upon Him I rely.",source:"Quran 11:88"},{text:"Indeed, my Lord is Guardian over all things.",source:"Quran 11:57"},{text:"Perhaps you dislike a thing and Allah places much good in it.",source:"Quran 4:19"},{text:"When you are greeted with a greeting, greet in return with one better.",source:"Quran 4:86"},{text:"Worship Allah and be good to parents.",source:"Quran 4:36"},{text:"And put your trust in Allah; sufficient is Allah as a Disposer of affairs.",source:"Quran 33:3"},{text:"O you who believe, remember Allah with much remembrance.",source:"Quran 33:41"},{text:"The men and women who remember Allah often — Allah has prepared for them forgiveness and a great reward.",source:"Quran 33:35"},{text:"Fear Allah and speak words of appropriate justice.",source:"Quran 33:70"},{text:"So which of the favors of your Lord would you deny?",source:"Quran 55:13"},{text:"Is the reward for good anything but good?",source:"Quran 55:60"},{text:"If you are grateful, I will surely increase you.",source:"Quran 14:7"},{text:"And upon Allah let the believers rely.",source:"Quran 14:11"},{text:"My mercy encompasses all things.",source:"Quran 7:156"},{text:"Indeed, the mercy of Allah is near to the doers of good.",source:"Quran 7:56"},{text:"Allah will raise those who believe and those given knowledge by degrees.",source:"Quran 58:11"},{text:"Read in the name of your Lord who created.",source:"Quran 96:1"},{text:"Who taught by the pen — taught man that which he knew not.",source:"Quran 96:4"},{text:"By time, indeed mankind is in loss.",source:"Quran 103:1"},{text:"Except those who believe, do righteous deeds, and advise each other to truth and patience.",source:"Quran 103:3"},{text:"So whoever does an atom's weight of good will see it.",source:"Quran 99:7"},{text:"Repel evil by that which is better, and your enemy will become a devoted friend.",source:"Quran 41:34"},{text:"And none is granted it except one of great fortune.",source:"Quran 41:35"},{text:"Indeed, good deeds do away with misdeeds.",source:"Quran 11:114"},{text:"And do good, as Allah has done good to you.",source:"Quran 28:77"},{text:"Sufficient for us is Allah, and He is the best Disposer of affairs.",source:"Quran 3:173"},{text:"And when you have decided, then rely upon Allah.",source:"Quran 3:159"},{text:"Do not weaken and do not grieve, for you will be superior if you are believers.",source:"Quran 3:139"},{text:"And hold firmly to the rope of Allah all together, and do not become divided.",source:"Quran 3:103"},{text:"Those who restrain anger and pardon people — Allah loves the doers of good.",source:"Quran 3:134"},{text:"Be patient, endure, remain stationed, and fear Allah.",source:"Quran 3:200"},{text:"Every soul will taste death.",source:"Quran 3:185"},{text:"Indeed, Allah does not allow the reward of the believers to be lost.",source:"Quran 3:171"},{text:"And those who strive for Us — We will surely guide them to Our ways.",source:"Quran 29:69"},{text:"And whoever strives only strives for himself.",source:"Quran 29:6"},{text:"Indeed, prayer restrains from immorality and wrongdoing.",source:"Quran 29:45"},{text:"Whoever is grateful is grateful for the benefit of himself.",source:"Quran 31:12"},{text:"And be patient over what befalls you.",source:"Quran 31:17"},{text:"And be moderate in your pace and lower your voice.",source:"Quran 31:19"},{text:"Be grateful to Me and to your parents.",source:"Quran 31:14"},{text:"Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds.",source:"Quran 6:162"},{text:"Whoever brings a good deed will have ten times the like of it.",source:"Quran 6:160"},{text:"They were commanded only to worship Allah, sincere to Him in faith.",source:"Quran 98:5"},{text:"Indeed, the most noble of you before Allah is the most righteous.",source:"Quran 49:13"},{text:"Avoid much suspicion; indeed, some suspicion is sin.",source:"Quran 49:12"},{text:"Do not ridicule others; perhaps they are better than you.",source:"Quran 49:11"},{text:"And cooperate in righteousness and piety.",source:"Quran 5:2"},{text:"And be patient; indeed, Allah is with the patient.",source:"Quran 8:46"},{text:"So be patient with beautiful patience.",source:"Quran 70:5"},{text:"And remember the name of your Lord and devote yourself to Him wholly.",source:"Quran 73:8"},{text:"And He is with you wherever you are.",source:"Quran 57:4"},{text:"So flee to Allah.",source:"Quran 51:50"},{text:"And in the heaven is your provision, and whatever you are promised.",source:"Quran 51:22"},{text:"Whoever purifies himself does so for the benefit of his own soul.",source:"Quran 35:18"},{text:"Indeed, this Qur'an guides to that which is most upright.",source:"Quran 17:9"},{text:"And do not walk upon the earth arrogantly.",source:"Quran 17:37"},{text:"Your Lord has decreed that you worship none but Him, and be good to parents.",source:"Quran 17:23"},{text:"And lower to them the wing of humility out of mercy.",source:"Quran 17:24"},{text:"The servants of the Most Merciful are those who walk upon the earth humbly.",source:"Quran 25:63"},{text:"And when they pass by idle talk, they pass by with dignity.",source:"Quran 25:72"},{text:"My Lord, forgive and have mercy, for You are the best of the merciful.",source:"Quran 23:118"},{text:"And worship your Lord until there comes to you certainty.",source:"Quran 15:99"},{text:"And lower your wing to the believers.",source:"Quran 15:88"},{text:"And say: Work, for Allah will see your work.",source:"Quran 9:105"},{text:"So fear Allah as much as you are able.",source:"Quran 64:16"},{text:"Whoever is patient and forgives — that is of the matters requiring determination.",source:"Quran 42:43"},{text:"And do not despair of relief from Allah.",source:"Quran 12:87"},{text:"Let them pardon and overlook. Would you not love that Allah should forgive you?",source:"Quran 24:22"},{text:"If you support Allah, He will support you and plant your feet firmly.",source:"Quran 47:7"},{text:"Why do you say that which you do not do?",source:"Quran 61:2"},{text:"Great is hatred in the sight of Allah that you say what you do not do.",source:"Quran 61:3"},{text:"Actions are but by intentions, and each person will have only what he intended.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The most beloved deeds to Allah are the most consistent, even if small.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Take benefit of five before five: your health before sickness, your free time before busyness, your youth before old age, your wealth before poverty, and your life before death.",source:"Muhammad ﷺ (Al-Hakim)"},{text:"Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise.",source:"Muhammad ﷺ (Muslim)"},{text:"The strong believer is better and more beloved to Allah than the weak believer, though in both there is good.",source:"Muhammad ﷺ (Muslim)"},{text:"Strive for what benefits you, seek help from Allah, and do not feel helpless.",source:"Muhammad ﷺ (Muslim)"},{text:"None of you truly believes until he loves for his brother what he loves for himself.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of people are those most beneficial to people.",source:"Muhammad ﷺ (Al-Tabarani)"},{text:"Allah loves that when one of you does a task, he does it with excellence.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Whoever believes in Allah and the Last Day, let him speak good or remain silent.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his neighbor.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his guest.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The Muslim is the one from whose tongue and hand people are safe.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Richness is not in many possessions; richness is the richness of the soul.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Be in this world as though you were a stranger or a traveler.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever does not thank people has not thanked Allah.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The believer is not stung from the same hole twice.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Make things easy and do not make them difficult; give glad tidings and do not repel.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those with the best character.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A good word is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not belittle any good deed, even meeting your brother with a cheerful face.",source:"Muhammad ﷺ (Muslim)"},{text:"Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",source:"Muhammad ﷺ (Muslim)"},{text:"Allah does not look at your appearance or wealth, but at your hearts and your deeds.",source:"Muhammad ﷺ (Muslim)"},{text:"The best of you is the one who is best to his family.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever guides another to good will have a reward like the one who does it.",source:"Muhammad ﷺ (Muslim)"},{text:"The upper hand is better than the lower hand.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"No one eats better food than that which he eats from the work of his own hands.",source:"Muhammad ﷺ (Bukhari)"},{text:"Seeking knowledge is an obligation upon every Muslim.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever does not show mercy to people, Allah will not show mercy to him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"How wonderful is the affair of the believer — all of his affairs are good for him.",source:"Muhammad ﷺ (Muslim)"},{text:"Tie your camel, then put your trust in Allah.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The most complete of believers in faith are those best in character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Give the worker his wages before his sweat dries.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever wakes secure in his home, healthy in body, with food for the day, has been given the whole world.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best charity is that given when you are healthy and hopeful of wealth.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Cleanliness is half of faith.",source:"Muhammad ﷺ (Muslim)"},{text:"Purity is half of faith, and praise of Allah fills the scale.",source:"Muhammad ﷺ (Muslim)"},{text:"Modesty brings nothing but good.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Modesty is part of faith.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Verily Allah is beautiful and loves beauty.",source:"Muhammad ﷺ (Muslim)"},{text:"Patience is at the first strike.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"There are two blessings which many people lose: health and free time.",source:"Muhammad ﷺ (Bukhari)"},{text:"The strong man is not the good wrestler; the strong man is the one who controls himself when angry.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Kindness is not found in anything except that it beautifies it.",source:"Muhammad ﷺ (Muslim)"},{text:"He is not one of us who does not show mercy to our young and respect to our elders.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever is deprived of gentleness is deprived of all good.",source:"Muhammad ﷺ (Muslim)"},{text:"Part of the excellence of a person's Islam is his leaving what does not concern him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"A believer to another believer is like a building whose parts support one another.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those who learn the Qur'an and teach it.",source:"Muhammad ﷺ (Bukhari)"},{text:"There is no envy except in two: a man given wealth who spends it rightly, and a man given wisdom who acts by it and teaches it.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Beware of suspicion, for suspicion is the falsest of speech.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A person is upon the religion of his close friend, so let each of you consider whom he befriends.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The example of a good companion and a bad one is like the seller of musk and the blacksmith's bellows.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Charity does not decrease wealth.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever conceals the faults of another, Allah will conceal his faults in this world and the next.",source:"Muhammad ﷺ (Muslim)"},{text:"The supplication of a Muslim for his brother in his absence is answered.",source:"Muhammad ﷺ (Muslim)"},{text:"The two feet of a servant will not move on the Day of Judgment until he is asked about his life and how he spent it, and his knowledge and what he did with it.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever seeks the pleasure of Allah though it displeases the people, Allah will suffice him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"This world is enjoyment, and the best enjoyment of this world is a righteous spouse.",source:"Muhammad ﷺ (Muslim)"},{text:"Deeds are judged by their endings.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever calls others to guidance will have a reward like the rewards of those who follow him.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.",source:"Muhammad ﷺ (Muslim)"},{text:"A man's spending on his family is a charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever suppresses his anger while able to enact it, Allah will fill his heart with security and faith.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"The believer who mixes with people and bears their harm has greater reward than one who does not.",source:"Muhammad ﷺ (Tirmidhi & Ibn Majah)"},{text:"The best of people are those who live long and do good deeds.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best of you are the best in paying off debts.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever loves to meet Allah, Allah loves to meet him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Every act of kindness is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not be people without minds of your own; if others do good, do good — and if they do wrong, do not be unjust.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The believer is a mirror to his brother.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"Righteousness is good character.",source:"Muhammad ﷺ (Muslim)"},{text:"The believer is not one who eats his fill while his neighbor goes hungry.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"May Allah have mercy on the one who shows me my faults.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Acquire knowledge before you become leaders.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I have never regretted my silence; as for my speech, I have often regretted it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Whoever does not know evil is more likely to fall into it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Sit with those who repent often, for they have the tenderest hearts.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I hate to see a man idle — working neither for this world nor the next.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"The worth of a person is measured by what he does well.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Knowledge guards you, while you guard wealth.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"People are of two kinds: your brothers in faith, or your equals in humanity.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Do not be a slave to another when Allah has created you free.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"The tongue of the wise is behind his heart, and the heart of the fool is behind his tongue.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Today is action without reckoning, and tomorrow is reckoning without action.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Anxiety over guaranteed provision, and neglect of required duty, are signs of a weak heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Concern for this world is darkness in the heart; concern for the Hereafter is light in the heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Knowledge without action is a tree without fruit.",source:"Abu Bakr as-Siddiq رضي الله عنه"}];let Vo=class extends T{connectedCallback(){super.connectedCallback(),this.unsubGoals=j(this,f,t=>t.goals),this.unsubCommits=j(this,f,t=>t.commitments),f.getState().loadGoals().catch(()=>{}),f.getState().loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubCommits?.()}todaysReminder(){const t=Math.floor(Date.now()/864e5);return Go[t%Go.length]}renderSource(t){const e=t.split("ﷺ");return e.length===1?t:e.flatMap((s,i)=>i===0?[s]:[r`<span class="inline-block text-[1.35em] leading-none align-[-0.15em]">\ufdfa</span>`,s])}render(){const t=f.getState(),e=t.goals.filter(n=>!n.archived),s=t.commitments;if(e.length===0&&s.length===0)return c;const i=this.todaysReminder();return r`<section class="goals-metrics @container px-4 pt-4 pb-4">
      <div class="flex flex-col gap-2 @3xl:flex-row @3xl:items-center @3xl:justify-between @3xl:gap-8">
        <h1 class="shrink-0 text-xl font-semibold leading-none text-ink">Goals</h1>
        <p class="min-w-0 leading-snug @3xl:max-w-[70%] @3xl:text-right">
          <span class="text-[15px] text-ink" style="font-family:var(--font-display);">${i.text}</span>
          <span class="ml-1.5 whitespace-nowrap text-[13px] text-muted">${this.renderSource(i.source)}</span>
        </p>
      </div>
    </section>`}};Vo=Ih([w("goals-metrics")],Vo);const Yo=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s]+|\*\*([^*]+)\*\*|~~([^~]+)~~|\*([^*\n]+)\*|_([^_\n]+)_|`([^`]+)`/g;function Ga(t){const e=[];let s=0,i;for(Yo.lastIndex=0;(i=Yo.exec(t))!==null;){i.index>s&&e.push(t.slice(s,i.index));const[,n,o,a,l,h,u,p]=i;if(n||i[0].startsWith("http")){const m=n?o:i[0];e.push(r`<a
          href=${m}
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-70 hover:opacity-100"
          @click=${g=>g.stopPropagation()}
          >${n??m}</a
        >`)}else a?e.push(r`<strong class="font-semibold">${a}</strong>`):l?e.push(r`<s class="opacity-70">${l}</s>`):h||u?e.push(r`<em class="italic">${h??u}</em>`):p&&e.push(r`<code
          class="font-mono text-[0.85em] px-1 py-0.5 rounded"
          style="background:color-mix(in srgb, var(--color-muted) 15%, transparent);"
          >${p}</code
        >`);s=i.index+i[0].length}return s<t.length&&e.push(t.slice(s)),e}function vi(t){const e=t.target,s=e.selectionStart??0,i=e.selectionEnd??0;if(s===i)return;const n=(t.clipboardData?.getData("text/plain")??"").trim();if(!/^https?:\/\/\S+$/.test(n))return;const o=e.value.slice(s,i).replace(/[[\]]/g,"");if(!o.trim())return;t.preventDefault();const a=n.replace(/\(/g,"%28").replace(/\)/g,"%29");e.setRangeText(`[${o}](${a})`,s,i,"end"),e.dispatchEvent(new Event("input",{bubbles:!0}))}var _h=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,Us=(t,e,s,i)=>{for(var n=i>1?void 0:i?Oh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&_h(e,s,n),n};const Lh=["January","February","March","April","May","June","July","August","September","October","November","December"],Rh=["M","T","W","T","F","S","S"];function Nh(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),s=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-s);const i=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-i.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function jh(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),s=e.getUTCDay()||7;return e.setUTCDate(e.getUTCDate()-(s-1)),e}function Fh(t){const e=/^(\d{4})-W(\d{2})$/.exec(t);if(!e||!e[1]||!e[2])return null;const s=Number(e[1]),i=Number(e[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5);return new Date(a.getTime()+(i-1)*7*864e5)}function Uh(t,e){const s=new Date(Date.UTC(t,e,1)),i=jh(s),n=[];for(let o=0;o<6;o++){const a=[];for(let h=0;h<7;h++)a.push(new Date(i.getTime()+(o*7+h)*864e5));const l=a[0];n.push({week:Nh(l),days:a})}return n}let is=class extends T{constructor(){super(...arguments),this.selected=bt(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=t=>{this.open&&(this.contains(t.target)||this.close())},this.keyHandler=t=>{t.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(t){if(t.has("open")&&this.open||t.has("selected")&&this.open){const e=Fh(this.selected);if(e){const s=new Date(e.getTime()+2592e5);this.viewYear=s.getUTCFullYear(),this.viewMonth=s.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(t){this.selected=t,this.dispatchEvent(new CustomEvent("select",{detail:{week:t},bubbles:!0,composed:!0})),this.close()}shiftMonth(t){const e=new Date(Date.UTC(this.viewYear,this.viewMonth+t,1));this.viewYear=e.getUTCFullYear(),this.viewMonth=e.getUTCMonth()}goToday(){this.select(bt())}render(){if(!this.open)return c;const t=Uh(this.viewYear,this.viewMonth),e=new Date,s=`${e.getUTCFullYear()}-${e.getUTCMonth()}-${e.getUTCDate()}`;return r`
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
            <div class="px-1 font-medium">${Lh[this.viewMonth]} ${this.viewYear}</div>
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
          ${Rh.map(i=>r`<div class="text-center">${i}</div>`)}
        </div>

        <div class="mt-1">
          ${t.map(i=>{const n=i.week===this.selected;return r`
              <button
                class="grid grid-cols-[28px_repeat(7,1fr)] w-full items-center rounded text-[12px] py-0.5 ${n?"bg-[var(--accent-soft)] text-ink":"hover:bg-[var(--hover)] text-muted"}"
                @click=${()=>this.select(i.week)}
                aria-label=${`Select week ${i.week}`}
              >
                <div class="text-center text-[10px] ${n?"text-[var(--accent)] font-medium":"text-muted"}">
                  ${Number(i.week.slice(-2))}
                </div>
                ${i.days.map(o=>{const a=o.getUTCMonth()===this.viewMonth,h=`${o.getUTCFullYear()}-${o.getUTCMonth()}-${o.getUTCDate()}`===s;return r`
                    <div
                      class="h-7 grid place-items-center rounded-sm ${h?"font-semibold text-[var(--accent)]":""} ${a?n?"text-ink":"":"opacity-40"}"
                    >${o.getUTCDate()}</div>
                  `})}
              </button>
            `})}
        </div>
      </div>
    `}};Us([b()],is.prototype,"selected",2);Us([b({type:Boolean})],is.prototype,"open",2);Us([d()],is.prototype,"viewYear",2);Us([d()],is.prototype,"viewMonth",2);is=Us([w("week-picker")],is);var Bh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Va=(t,e,s,i)=>{for(var n=i>1?void 0:i?Hh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Bh(e,s,n),n};function bt(){const t=new Date,e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),s=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-s);const i=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-i.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function xi(t,e){const s=/^(\d{4})-W(\d{2})$/.exec(t);if(!s||!s[1]||!s[2])return t;const i=Number(s[1]),n=Number(s[2]),o=new Date(Date.UTC(i,0,4)),a=o.getUTCDay()||7,l=new Date(o.getTime()-(a-4)*864e5),h=new Date(l.getTime()+(n-1+e)*7*864e5);return zh(h)}function zh(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),s=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-s);const i=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-i.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Kh(t){const e=/^(\d{4})-W(\d{2})$/.exec(t);if(!e||!e[1]||!e[2])return null;const s=Number(e[1]),i=Number(e[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5),l=new Date(a.getTime()+(i-1)*7*864e5),h=new Date(l.getTime()+6*864e5);return{start:l,end:h}}const Qo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ya(t){const e=Kh(t);if(!e)return t;const s=Qo[e.start.getUTCMonth()],i=Qo[e.end.getUTCMonth()],n=e.start.getUTCDate(),o=e.end.getUTCDate();return s===i?`${s} ${n}–${o}`:`${s} ${n} – ${i} ${o}`}let Mn=class extends T{constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(t){await f.getState().setWeek(t)}togglePicker(t){t.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(t){this.pickerOpen=!1,t.detail?.week&&this.goto(t.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const t=f.getState().currentWeek??bt(),e=bt(),s=t!==e,i=s?"px-1 whitespace-nowrap tabular-nums text-muted hover:text-ink font-medium":"px-1 whitespace-nowrap tabular-nums text-ink hover:opacity-70 font-medium",n="w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover";return r`
      <div class="relative flex items-center gap-0.5 text-sm">
        ${s?r`<button type="button" class="mr-1.5 text-xs text-accent hover:underline whitespace-nowrap" @click=${()=>void this.goto(e)}>This week</button>`:c}
        <button type="button" class=${n} aria-label="Previous week" title="Previous week" @click=${()=>void this.goto(xi(t,-1))}>
          <sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>
        </button>
        <button
          class=${i}
          aria-label="Pick a week"
          aria-haspopup="dialog"
          aria-expanded=${this.pickerOpen}
          @click=${this.togglePicker}
        >${Ya(t)}</button>
        <button type="button" class=${n} aria-label="Next week" title="Next week" @click=${()=>void this.goto(xi(t,1))}>
          <sc-icon name="lucide-chevron-right" class="w-4 h-4"></sc-icon>
        </button>
        <week-picker
          .selected=${t}
          .open=${this.pickerOpen}
          @select=${this.onPickerSelect}
          @close=${this.onPickerClose}
        ></week-picker>
      </div>
    `}};Va([d()],Mn.prototype,"pickerOpen",2);Mn=Va([w("week-nav")],Mn);var qh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Wt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Wh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&qh(e,s,n),n};let ae=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=t=>{if(!this.dragEnabled){t.preventDefault();return}t.dataTransfer&&(t.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),t.dataTransfer.setData("text/plain",this.commit.title),t.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=t=>{if(!t.dataTransfer?.types.includes("text/x-commit-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const e=t.currentTarget.getBoundingClientRect();this.dragOverPos=t.clientY<e.top+e.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async t=>{const e=t.dataTransfer?.getData("text/x-commit-id"),s=e?Number(e):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.commit.id)return;t.preventDefault();const n=i==="after"?this.index+1:this.index;await f.getState().reorderCommitment(s,n)}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.goals),this.unsub2=j(this,f,t=>t.northStars),this.unsubFocused=j(this,f,t=>t.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.()}updated(t){t.has("editing")&&this.editing&&this.editInput&&(this.editInput.focus(),this.editInput.select(),this.autoGrow(this.editInput))}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}get linkedGoal(){const t=this.commit;if(t.goal_id!=null)return f.getState().goals.find(e=>e.id===t.goal_id)??null;if(t.key_result_id!=null){for(const e of f.getState().goals)if((e.keyResults??[]).some(s=>s.id===t.key_result_id))return e}return null}async toggleDone(t){t.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async toggleRecurring(t){t.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{recurring:!this.commit.recurring})}async onDelete(t){t.stopPropagation();const e=document.createElement("commit-delete-dialog");e.commit=this.commit,document.body.append(e)}onMarkerClick(t){t.stopPropagation();const e=t.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:e},bubbles:!0,composed:!0}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("commit-touched",{detail:{id:this.commit.id},bubbles:!0,composed:!0}))}startEdit(t){t.stopPropagation(),this.clearHighlight(),this.editing=!0}async commitEdit(t){if(!this.editing)return;const s=(this.editInput?.value??"").trim(),i=this.commit.title;this.editing=!1,t&&s&&s!==i&&await f.getState().updateCommitment(this.commit.id,{title:s})}onEditKey(t){t.key==="Enter"?(t.preventDefault(),this.commitEdit(!0)):t.key==="Escape"&&(t.preventDefault(),this.commitEdit(!1))}renderMarker(){const t=this.linkedGoal;if(t){const e=t.symbol??null,s=t.color??null,i=e?Be[e]:void 0;if(e&&i){const o=s?`color:var(--nsc-${s})`:"";return r`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${V(Ue(i))}</span
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
    `}render(){const t=this.commit,e=this.linkedGoal,s=e?e.title:"Assign to a goal or KR",i=t.done===1,n=i?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${t.id}`,l=f.getState().focusedRowKey===o?"bg-hover":"";return r`
      <li
        class="group/row flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover ${l} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
        data-id=${t.id}
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
              ><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:c}
        </button>
        <div class="flex-1 min-w-0 flex items-center gap-2">
        ${this.editing?r`
              <textarea
                class="inline-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none p-0 resize-none overflow-hidden leading-snug"
                rows="1"
                .value=${t.title}
                @input=${h=>this.autoGrow(h.target)}
                @keydown=${this.onEditKey}
                @paste=${vi}
                @blur=${()=>this.commitEdit(!0)}
              ></textarea>
            `:r`
              <span
                class="flex-1 min-w-0 text-sm cursor-text ${i?"line-through text-muted":this.highlight?"font-medium":"text-ink"}"
                style=${this.highlight&&!i?"color:var(--nsc-green);":""}
                @click=${this.startEdit}
              >${Ga(t.title)}</span>
            `}
        ${t.owner==="agent"?r`<span
              class="shrink-0 self-center text-[11px] text-muted px-1.5 py-0.5 rounded-full leading-none"
              style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
              title="An agent owns this task and may pick it up"
              >agent</span
            >`:c}
        <button
          class="commit-repeat-btn ${t.recurring?"text-accent":"text-muted opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${t.recurring?"Stop repeating weekly":"Repeat weekly"}
          aria-pressed=${t.recurring?"true":"false"}
          title=${t.recurring?"Repeats every week. Click to stop.":"Repeat every week"}
          @click=${this.toggleRecurring}
        ><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
          <path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
        </svg></button>
        <button
          class="commit-marker-btn ${e?"":"opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${e?"Change category":"Assign category"}
          title=${s}
          @click=${this.onMarkerClick}
        >${this.renderMarker()}</button>
        <button
          class="commit-del w-5 h-5 grid place-items-center text-muted hover:text-ink opacity-0 group-hover/row:opacity-100 transition-opacity"
          aria-label="Delete"
          @click=${this.onDelete}
        >×</button>
        </div>
      </li>
    `}};Wt([b({attribute:!1})],ae.prototype,"commit",2);Wt([b({attribute:!1})],ae.prototype,"index",2);Wt([b({type:Boolean})],ae.prototype,"highlight",2);Wt([d()],ae.prototype,"editing",2);Wt([d()],ae.prototype,"dragEnabled",2);Wt([d()],ae.prototype,"dragOverPos",2);Wt([Y("textarea.inline-edit")],ae.prototype,"editInput",2);ae=Wt([w("commit-row")],ae);let yi=class extends T{constructor(){super(...arguments),this.commit=null,this.deleting=!1}close(){this.deleting||this.remove()}async confirmDelete(){if(!(!this.commit||this.deleting)){this.deleting=!0;try{await f.getState().deleteCommitment(this.commit.id),this.remove()}catch(t){console.warn("[goals] commitment delete failed",t),this.deleting=!1}}}render(){const t=this.commit,e=t?.series_id!=null,s=t?Ya(t.week):"the selected week";return r`<sc-dialog label=${e?"Delete repeating task?":"Delete this task?"} open @sc-hide=${this.close}>
      <p class="text-sm text-ink leading-relaxed">
        ${e?r`Delete “${t?.title??""}” from <strong>${s}</strong> and every week after it? Earlier weeks and their completion status will stay unchanged.`:r`Delete “${t?.title??""}” from <strong>${s}</strong>?`}
      </p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm ring-1 ring-inset ring-line bg-surface hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.confirmDelete()}>
          ${this.deleting?"Deleting…":e?"Delete this and future":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};Wt([b({attribute:!1})],yi.prototype,"commit",2);Wt([d()],yi.prototype,"deleting",2);yi=Wt([w("commit-delete-dialog")],yi);var Gh=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,We=(t,e,s,i)=>{for(var n=i>1?void 0:i?Vh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Gh(e,s,n),n};const Yh=448,Qe=8;function qs(t,e,s=""){const i=Be[t];return i?r`<span
    class="inline-flex items-center justify-center shrink-0 ${s}"
    style="width:${e}px;height:${e}px"
    >${V(Ue(i))}</span
  >`:c}let we=class extends T{constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.expanded=null,this.outsideClickHandler=t=>{const e=t.target;e&&(this.contains(e)||this.anchor&&this.anchor.contains(e)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const t=this.anchor.getBoundingClientRect(),e=window.innerWidth,s=this.firstElementChild?.getBoundingClientRect().width||Yh;this.style.position="fixed",this.style.zIndex="1000";const i=e-t.right,n=Math.max(Qe,e-s-Qe);this.style.right=`${Math.min(Math.max(i,Qe),n)}px`;const o=this.getBoundingClientRect().height||320,a=window.innerHeight-t.bottom,l=t.top;a>=o+Qe||a>=l?(this.style.top=`${t.bottom+6}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,a-Qe)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-t.top+6}px`,this.style.maxHeight=`${Math.max(160,l-Qe)}px`),this.style.display="flex",this.style.flexDirection="column"}activeGoals(){return f.getState().goals.filter(t=>t.status==="active")}expandedSet(t){if(this.expanded)return this.expanded;const e=new Set,s=this.currentKeyResultId!=null?t.find(i=>(i.keyResults??[]).some(n=>n.id===this.currentKeyResultId)):t.find(i=>i.id===this.currentGoalId);return s&&e.add(s.id),this.expanded=e,e}toggleGoal(t,e){e.stopPropagation();const s=new Set(this.expandedSet(this.activeGoals()));s.has(t)?s.delete(t):s.add(t),this.expanded=s}buildItems(){const t=this.query.trim().toLowerCase(),e=this.activeGoals(),s=this.expandedSet(e),i=[];t||i.push({kind:"none",label:"None",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const n of e){const o=n.keyResults??[],a=n.title.toLowerCase();if(!(!t||a.includes(t)||o.some(u=>u.title.toLowerCase().includes(t))))continue;const h=t?!0:s.has(n.id);if(i.push({kind:"goal",id:n.id,label:n.title,northStar:n.north_star,current:this.currentGoalId===n.id&&this.currentKeyResultId==null,krCount:o.length,expanded:h}),!!h)for(const u of o)t&&!a.includes(t)&&!u.title.toLowerCase().includes(t)||i.push({kind:"kr",id:u.id,parent:n.id,label:u.title,northStar:n.north_star,current:this.currentKeyResultId===u.id})}return i}pick(t){let e;t.kind==="none"?e={goalId:null,keyResultId:null}:t.kind==="goal"?e={goalId:t.id,keyResultId:null}:e={goalId:null,keyResultId:t.id},this.dispatchEvent(new CustomEvent("pick",{detail:e,bubbles:!0,composed:!0}))}onSearchKey(t){if(t.key==="Escape"){if(t.preventDefault(),this.query){this.query="";return}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));return}if(t.key==="Enter"&&this.query.trim()){const e=this.buildItems(),s=e.find(i=>i.kind==="kr")??e.find(i=>i.kind==="goal");s&&(t.preventDefault(),this.pick(s))}}renderNsMarker(t,e){if(!t)return c;const s=f.getState().northStars.find(u=>u.slug===t),i=s?.symbol??null,n=s?.color??null,o=e==="goal"?15:13,a=e==="goal"?1:.8,l=i?Be[i]:void 0,h=n?`color:var(--nsc-${n});opacity:${a}`:`opacity:${a}`;return i&&l?r`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${h}"
        >${V(Ue(l))}</span
      >`:r`<span
      class="inline-block rounded-full shrink-0"
      style="width:8px;height:8px;background:${n?`var(--nsc-${n})`:"var(--muted)"};opacity:${a}"
    ></span>`}renderCheck(t){return t?qs("check",14,"text-accent ml-auto"):c}renderRow(t){const e="flex items-center gap-2 min-h-8 px-2 py-1.5 rounded-md cursor-pointer text-sm select-none transition-colors",s=t.current?"bg-accent-soft":"hover:bg-hover";if(t.kind==="none")return r`
        <li
          class="${e} ${s} text-muted"
          role="option"
          aria-selected=${t.current?"true":"false"}
          @click=${()=>this.pick(t)}
        >
          <span class="w-5 shrink-0"></span>
          <span
            class="inline-block w-3 h-3 rounded-full border border-dashed border-muted/70 shrink-0"
          ></span>
          <span class="truncate flex-1">${t.label}</span>
          ${this.renderCheck(t.current)}
        </li>
      `;if(t.kind==="goal"){const i=t.krCount>0;return r`
        <li
          class="${e} ${s} mt-1 font-semibold text-ink"
          role="option"
          aria-selected=${t.current?"true":"false"}
          @click=${()=>this.pick(t)}
        >
          ${i?r`<button
                type="button"
                class="w-5 h-5 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover shrink-0 transition-transform ${t.expanded?"rotate-90":""}"
                aria-label=${t.expanded?"Collapse key results":"Expand key results"}
                aria-expanded=${t.expanded?"true":"false"}
                @click=${n=>this.toggleGoal(t.id,n)}
              >
                ${qs("chevron-right",14)}
              </button>`:r`<span class="w-5 shrink-0"></span>`}
          ${this.renderNsMarker(t.northStar,"goal")}
          <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${t.label}</span>
          ${i&&!t.expanded?r`<span class="text-[11px] font-normal text-muted tabular-nums shrink-0"
                >${t.krCount} KR${t.krCount===1?"":"s"}</span
              >`:c}
          ${this.renderCheck(t.current)}
        </li>
      `}return r`
      <li
        class="${e} ${s} pl-9 text-ink/85"
        role="option"
        aria-selected=${t.current?"true":"false"}
        @click=${()=>this.pick(t)}
      >
        ${this.renderNsMarker(t.northStar,"kr")}
        <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${t.label}</span>
        ${this.renderCheck(t.current)}
      </li>
    `}render(){const t=this.buildItems(),e=t.some(s=>s.kind!=="none");return r`
      <div
        class="w-[28rem] max-w-[calc(100vw-1rem)] min-h-0 flex flex-col bg-popover rounded-xl overflow-hidden"
        style="box-shadow: var(--popover-shadow)"
        role="dialog"
        aria-label="Assign to goal or key result"
        @click=${s=>s.stopPropagation()}
      >
        <div class="flex items-center gap-2 h-9 px-3 border-b border-line text-muted shrink-0">
          ${qs("search",14)}
          <input
            class="cp-search flex-1 min-w-0 h-full bg-transparent text-sm text-ink placeholder:text-muted border-0 outline-none focus:outline-none focus:ring-0"
            type="text"
            placeholder="Search goals or KRs…"
            autocomplete="off"
            spellcheck="false"
            .value=${this.query}
            @input=${s=>{this.query=s.target.value}}
            @keydown=${this.onSearchKey}
          />
          ${this.query?r`<button
                type="button"
                class="w-5 h-5 grid place-items-center rounded hover:bg-hover hover:text-ink shrink-0"
                aria-label="Clear search"
                @click=${()=>{this.query="",this.searchEl?.focus()}}
              >
                ${qs("x",12)}
              </button>`:c}
        </div>
        <ul class="flex-1 min-h-0 overflow-y-auto p-1" role="listbox">
          ${t.map(s=>this.renderRow(s))}
          ${e?c:r`<li class="px-3 py-6 text-sm text-muted text-center">
                No goals or KRs match “${this.query.trim()}”
              </li>`}
        </ul>
      </div>
    `}};We([b({attribute:!1})],we.prototype,"anchor",2);We([b({type:Number})],we.prototype,"currentGoalId",2);We([b({type:Number})],we.prototype,"currentKeyResultId",2);We([d()],we.prototype,"query",2);We([d()],we.prototype,"expanded",2);We([Y(".cp-search")],we.prototype,"searchEl",2);we=We([w("category-picker")],we);var Qh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,cs=(t,e,s,i)=>{for(var n=i>1?void 0:i?Jh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Qh(e,s,n),n};let Le=class extends T{constructor(){super(...arguments),this.mode="open",this.pickerCommitId=null,this.pickerAnchor=null,this.dragOverIdea=!1,this.highlightIds=new Set,this.flash=new gi(this,"commitment"),this.onOpsEvent=t=>{const e=t.detail;this.flash.take(e),this.mode==="open"&&e?.action==="refresh"&&e.added?.kind==="commitment"&&(this.highlightIds=new Set(this.highlightIds).add(e.added.id))},this.onCommitTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightIds.has(e))return;const s=new Set(this.highlightIds);s.delete(e),this.highlightIds=s},this.onIdeaDragOver=t=>{this.mode==="open"&&t.dataTransfer?.types.includes("text/x-idea-id")&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragOverIdea=!0)},this.onIdeaDragLeave=()=>{this.dragOverIdea=!1},this.onIdeaDrop=async t=>{if(this.mode!=="open")return;const e=t.dataTransfer?.getData("text/x-idea-id");if(!e)return;t.preventDefault(),this.dragOverIdea=!1;const s=(t.dataTransfer?.getData("text/plain")||"").trim();s&&await ro(Number(e),s)}}connectedCallback(){super.connectedCallback(),this.unsubCommits=j(this,f,t=>t.commitments),this.unsubGoals=j(this,f,t=>t.goals),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.(),document.removeEventListener("ops-event",this.onOpsEvent)}onOpenPicker(t){if(this.pickerCommitId===t.detail.commitId){this.closePicker();return}this.pickerCommitId=t.detail.commitId,this.pickerAnchor=t.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(t){const e=this.pickerCommitId;e!=null&&(this.closePicker(),await f.getState().updateCommitment(e,{goalId:t.detail.goalId,keyResultId:t.detail.keyResultId}))}render(){const t=f.getState().commitments,e=t.filter(i=>this.mode==="done"?i.done:!i.done),s=t.find(i=>i.id===this.pickerCommitId)??null;return r`
      <ul
        class="commits"
        style=${this.mode==="open"?this.dragOverIdea?"min-height:32px;box-shadow:inset 0 0 0 1.5px var(--accent);border-radius:12px;":"min-height:8px;":""}
        @open-picker=${this.onOpenPicker}
        @commit-touched=${this.onCommitTouched}
        @dragover=${this.onIdeaDragOver}
        @dragleave=${this.onIdeaDragLeave}
        @drop=${this.onIdeaDrop}
      >
        ${e.map((i,n)=>r`<commit-row class=${this.flash.cls(i.id)} data-flash=${this.flash.key(i.id)} .commit=${i} .index=${n} .highlight=${this.highlightIds.has(i.id)}></commit-row>`)}
        ${this.mode==="open"?this.flash.ghosts.map(i=>r`<li class="agent-flash agent-flash-removed flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 border-t-2 border-b-2 border-transparent"
              data-flash=${this.flash.key(i.id)} title="Removed by the agent. Click to dismiss.">${i.title}</li>`):c}
      </ul>
      ${this.pickerCommitId!=null&&this.pickerAnchor?r`
            <category-picker
              .anchor=${this.pickerAnchor}
              .currentGoalId=${s?.goal_id??null}
              .currentKeyResultId=${s?.key_result_id??null}
              @pick=${this.onPick}
              @close=${this.closePicker}
            ></category-picker>
          `:c}
    `}};cs([b()],Le.prototype,"mode",2);cs([d()],Le.prototype,"pickerCommitId",2);cs([d()],Le.prototype,"pickerAnchor",2);cs([d()],Le.prototype,"dragOverIdea",2);cs([d()],Le.prototype,"highlightIds",2);Le=cs([w("weekly-commits")],Le);var Xh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Qa=(t,e,s,i)=>{for(var n=i>1?void 0:i?Zh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Xh(e,s,n),n};const Ws=t=>new Date(t).toLocaleDateString("en-CA"),tu=t=>new Date(t).toLocaleDateString("en-GB",{weekday:"short",day:"numeric"}),Wi=t=>new Date(t).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});function eu(t){const e=t.attendees.filter(s=>!s.self).map(s=>(s.name||s.email.split("@")[0]||"").split(/[ .]/)[0]).filter(Boolean);return e.length?e.length<=2?e.join(", "):`${e.slice(0,2).join(", ")} +${e.length-2}`:""}function Ja(t,e="",s=""){return r`<div class="flex items-center gap-2 pl-4 -mx-2 pb-1">
    <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>
    <h3 class="text-[13px] font-medium text-muted">${t}</h3>
    ${e?r`<span class="text-[11px] text-muted opacity-70" title=${s}>${e}</span>`:c}
  </div>`}let In=class extends T{constructor(){super(...arguments),this.data=null,this.loadedFor=null,this.onOps=t=>{t.detail?.action==="refresh"&&this.load(!0)}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.currentWeek),document.addEventListener("ops-event",this.onOps),this.timer=window.setInterval(()=>{document.visibilityState==="visible"&&this.load(!0)},10*6e4)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("ops-event",this.onOps),window.clearInterval(this.timer)}updated(){(f.getState().currentWeek??bt())!==this.loadedFor&&this.load(!1)}async load(t){const e=f.getState().currentWeek??bt();t||(this.loadedFor=e,this.data=null);try{const s=await fetch(`/api/calendar?week=${encodeURIComponent(e)}`);if(!s.ok)throw new Error(String(s.status));const i=await s.json();i.week===(f.getState().currentWeek??bt())&&(this.data=i)}catch{t||(this.data={week:e,source:"live",events:[],error:"Couldn't reach the calendar",fetchedAt:Date.now()})}}renderRow(t,e){const s=Date.parse(t.end)<=e,i=!s&&Date.parse(t.start)<=e,n=Ws(t.start)===Ws(new Date().toISOString()),o=n?"Today":tu(t.start),a=t.allDay?`${o} · all day`:`${o} ${Wi(t.start)}`,l=eu(t);return r`<li title=${l?`With ${l}`:""} class="meeting-row group/row flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover ${s?"opacity-50":""}">
      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>
      <span class="shrink-0 w-4 h-4 grid place-items-center" aria-hidden="true">
        <span class="block w-[3px] h-3.5 rounded-full ${i?"bg-accent":"bg-accent/45"}"></span>
      </span>
      <span class="min-w-0 flex-1 flex">
        ${t.htmlLink?r`<a class="truncate text-sm text-ink hover:underline" href=${t.htmlLink} target="_blank" rel="noopener">${t.title}</a>`:r`<span class="truncate text-sm text-ink">${t.title}</span>`}
      </span>
      ${!s&&t.myResponse==="needsAction"?r`<span class="shrink-0 text-[11px] text-muted rounded-full border border-line px-2" title="You haven't answered this invite">Not answered</span>`:c}
      <span class="shrink-0 text-xs tabular-nums ${n?"text-ink":"text-muted"}" title=${t.allDay?"All day":`${Wi(t.start)}–${Wi(t.end)}`}>${i?"Now":a}</span>
      ${t.meetUrl&&!s?r`<a class="shrink-0 w-8 text-right text-xs text-accent hover:underline" href=${t.meetUrl} target="_blank" rel="noopener">Join</a>`:r`<span class="shrink-0 w-8" aria-hidden="true"></span>`}
    </li>`}render(){const t=this.data;if(!t||t.source==="off")return c;const e=Date.now(),s=Ws(new Date().toISOString()),i=t.events.filter(o=>o.myResponse!=="declined").filter(o=>t.week!==bt()||Ws(o.start)>=s),n=t.source==="sample"?"sample":t.error?"couldn't refresh":"";return r`<section class="week-meetings mb-6" aria-label="Meetings">
      ${Ja("Meetings",n,t.source==="sample"?"Dev couldn't reach the calendar on the Pro, so this is a made-up week":t.error??"")}
      ${i.length?r`<ul class="flex flex-col">${i.map(o=>this.renderRow(o,e))}</ul>`:r`<p class="py-1.5 pl-[42px] text-sm text-muted">No meetings ${t.week===bt()?"left this week":"this week"}.</p>`}
    </section>`}};Qa([d()],In.prototype,"data",2);In=Qa([w("week-meetings")],In);var su=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var n=i>1?void 0:i?iu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&su(e,s,n),n};const nu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6"/><polyline points="8 5 4 9 8 13"/></svg>',Jo="slmai.cockpit.weekSectionCollapsed",Gi="slmai.cockpit.weekSection.title",Xo="slmai.cockpit.weekSection.hideDone",Vi="Shipping this week";let yt=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.hideDone=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=Vi,this.leftoverCount=0,this.newGoalId=null,this.newKeyResultId=null,this.addPickerOpen=!1,this.addPickerAnchor=null,this.leftoverForWeek=null,this.opsHandler=t=>{const s=t.detail;s&&(s.action==="load-week"?f.getState().setWeek(s.week):s.action==="refresh"&&f.getState().loadCommitments(s.week))},this.closeAddPicker=()=>{this.addPickerOpen=!1,this.addPickerAnchor=null}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Jo)==="1",this.hideDone=localStorage.getItem(Xo)==="1",this.titleValue=localStorage.getItem(Gi)??Vi,fetch("/api/settings").then(e=>e.json()).then(e=>{const s=e["ui.section.week.title"];s&&(this.titleValue=s,localStorage.setItem(Gi,s))}).catch(()=>{}),this.unsub=j(this,f,e=>e.currentWeek),this.unsubCommits=j(this,f,e=>`${e.commitments.filter(s=>s.done).length}`),document.addEventListener("ops-event",this.opsHandler);const t=f.getState();t.goals.length||t.loadGoals().catch(()=>{}),t.currentWeek==null&&t.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsubCommits?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(t){t.has("adding")&&this.adding&&this.newTitleEl?.focus();const e=bt();f.getState().currentWeek===e&&this.leftoverForWeek!==e&&(this.leftoverForWeek=e,this.refreshLeftover(e))}async refreshLeftover(t){try{const{commitments:e}=await C.commitments.listForWeek(xi(t,-1));this.leftoverCount=e.filter(s=>!s.done).length}catch{this.leftoverCount=0}}async doCarry(t){t.stopPropagation();const e=bt();try{await C.commitments.carryOver(xi(e,-1),e)}catch{}this.leftoverCount=0,await f.getState().loadCommitments(e)}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||Vi;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(Gi,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(Jo,this.collapsed?"1":"0")}catch{}}toggleHideDone(t){t.stopPropagation(),this.hideDone=!this.hideDone;try{localStorage.setItem(Xo,this.hideDone?"1":"0")}catch{}}async commitAdd(t){const e=this.newTitleEl,s=(e?.value??"").trim();s&&await f.getState().createCommitment({title:s,goalId:this.newGoalId,keyResultId:this.newKeyResultId}),this.newGoalId=null,this.newKeyResultId=null,t||!s?this.adding=!1:e&&(e.value="")}onAddKey(t){t.key==="Enter"?(t.preventDefault(),this.commitAdd(!1)):t.key==="Escape"&&(t.preventDefault(),this.adding=!1,this.newGoalId=null,this.newKeyResultId=null)}startAdd(){this.newGoalId=null,this.newKeyResultId=null,this.adding=!0}get newLinkedGoal(){const t=f.getState().goals;if(this.newGoalId!=null)return t.find(e=>e.id===this.newGoalId)??null;if(this.newKeyResultId!=null){for(const e of t)if((e.keyResults??[]).some(s=>s.id===this.newKeyResultId))return e}return null}openAddPicker(t){t.stopPropagation(),this.addPickerAnchor=t.currentTarget,this.addPickerOpen=!0}onAddPick(t){this.newGoalId=t.detail.goalId,this.newKeyResultId=t.detail.keyResultId,this.closeAddPicker(),this.updateComplete.then(()=>this.newTitleEl?.focus())}renderAddMarker(){const t=this.newLinkedGoal;if(t){const e=t.symbol??null,s=t.color??null,i=e?Be[e]:void 0;return e&&i?r`<span
          class="inline-flex items-center justify-center w-3.5 h-3.5"
          style=${s?`color:var(--nsc-${s})`:""}
          >${V(Ue(i))}</span
        >`:r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${s?`background:var(--nsc-${s})`:"background:var(--muted)"}
      ></span>`}return r`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>`}render(){const t=f.getState().currentWeek===bt(),e=f.getState().commitments.filter(i=>i.done).length,s=this.tabbed||!this.collapsed;return r`
      <section class="group/section-header flex flex-col gap-1">
        ${this.tabbed?c:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${V(this.collapsed?Fs:js)}</span
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
              <week-meetings></week-meetings>
              ${Ja("Tasks")}
              ${t&&this.leftoverCount>0?r`<div class="flex justify-end pb-1">
                    <button
                      type="button"
                      class="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink"
                      @click=${this.doCarry}
                    ><span style="width:14px;height:14px;display:inline-flex;">${V(nu)}</span
                    >Pull ${this.leftoverCount} open task${this.leftoverCount===1?"":"s"} from last week</button>
                  </div>`:c}
              <weekly-commits .mode=${"open"}></weekly-commits>
              ${this.adding?r`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-2 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                      <input
                        class="new-commit-title flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New task..."
                        @keydown=${this.onAddKey}
                        @paste=${vi}
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
                        ></category-picker>`:c}
                  `:r`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>this.startAdd()}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New task...</span>
                    </div>
                  `}
              ${e>0?r`
                    ${lo({open:!this.hideDone,label:`${e} done`,onToggle:i=>this.toggleHideDone(i)})}
                    ${this.hideDone?c:r`<weekly-commits .mode=${"done"}></weekly-commits>`}
                  `:c}
            `:c}
      </section>
    `}};At([b({type:Boolean})],yt.prototype,"tabbed",2);At([d()],yt.prototype,"collapsed",2);At([d()],yt.prototype,"hideDone",2);At([d()],yt.prototype,"adding",2);At([d()],yt.prototype,"editingTitle",2);At([d()],yt.prototype,"titleValue",2);At([d()],yt.prototype,"leftoverCount",2);At([d()],yt.prototype,"newGoalId",2);At([d()],yt.prototype,"newKeyResultId",2);At([d()],yt.prototype,"addPickerOpen",2);At([d()],yt.prototype,"addPickerAnchor",2);At([Y("input.new-commit-title")],yt.prototype,"newTitleEl",2);yt=At([w("week-section")],yt);let Xa=!1,Zo=!1;function tr(t){Xa=t.composedPath().some(e=>e instanceof Element&&e.classList.contains("mana-chat-card"))}function ou(){return!Zo&&typeof document<"u"&&(Zo=!0,document.addEventListener("pointerdown",tr,!0),document.addEventListener("focusin",tr,!0)),Xa}var ru=Object.defineProperty,au=Object.getOwnPropertyDescriptor,O=(t,e,s,i)=>{for(var n=i>1?void 0:i?au(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&ru(e,s,n),n};const ri=[.85,.92,1,1.08,1.16,1.25,1.35,1.5],_n=3,Za="mana.notes.textStep";function lu(){try{const t=localStorage.getItem(Za),e=Number(t);return t!==null&&Number.isInteger(e)&&e>=0&&e<ri.length?e:_n}catch{return _n}}let Re=null;const er=(...t)=>Re.getMarkdown(...t),Yi=(...t)=>Re.setMarkdown(...t),cu=(...t)=>Re.alignSelectedImage(...t),du=(...t)=>Re.startTitledNote(...t),Qi=(...t)=>Re.isBlankNote(...t);let Ji=null;const hu=640,sr="mana.notes.sidebarHidden",ir="mana.notes.sidebarWidth",Xi=864e5,Ct=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl+",nr=`New note (${Ct}N)`,uu=[{name:"Default",v:null},{name:"Gray",v:"#6b7280"},{name:"Red",v:"#e5484d"},{name:"Orange",v:"#e8590c"},{name:"Amber",v:"#bd8400"},{name:"Green",v:"#2f9e44"},{name:"Blue",v:"#1971c2"},{name:"Violet",v:"#7048e8"},{name:"Pink",v:"#c2255c"}],pu=[{name:"Yellow",v:"#fff3a3"},{name:"Green",v:"#c3f0ca"},{name:"Blue",v:"#c5e2ff"},{name:"Pink",v:"#ffd6e7"},{name:"Orange",v:"#ffe0b8"},{name:"Purple",v:"#ecd5ff"}],X=(t,e="w-4 h-4")=>r`<sc-icon name="lucide-${t}" class=${e}></sc-icon>`,Zi=(t,e,s,i="text-muted hover:text-ink")=>r`
  <button type="button" title=${e} aria-label=${e}
    class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg hover:bg-hover ${i}"
    @click=${n=>{n.stopPropagation(),s()}}>${X(t)}</button>`,J=t=>t instanceof Error?t.message:String(t),mu=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let M=class extends T{constructor(){super(...arguments),this.files=[],this.trashCount=0,this.activeName=null,this.isDraft=!1,this.error=null,this.initialized=!1,this.wide=!0,this.view="list",this.sidebarHidden=!1,this.sidebarWidth=256,this.sidebarDrag=null,this.onSidebarDown=t=>{if(t.button!==0)return;t.preventDefault();const e=t.currentTarget;e.focus(),e.setPointerCapture(t.pointerId),this.sidebarDrag={pointerId:t.pointerId,x:t.clientX,width:Math.min(this.sidebarWidth,this.sidebarMaxWidth),hidden:this.sidebarHidden,moved:!1}},this.onSidebarMove=t=>{const e=this.sidebarDrag;if(!e||e.pointerId!==t.pointerId||!e.moved&&Math.abs(t.clientX-e.x)<4)return;e.moved=!0;const s=(e.hidden?0:e.width)+t.clientX-e.x;this.sidebarHidden=s<120,this.sidebarHidden||(this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,s)))},this.onSidebarUp=t=>{const e=this.sidebarDrag;!e||e.pointerId!==t.pointerId||(this.sidebarDrag=null,!e.moved&&this.sidebarHidden&&(this.sidebarHidden=!1),this.saveSidebar())},this.onSidebarCancel=()=>{this.sidebarDrag&&(this.sidebarWidth=this.sidebarDrag.width,this.sidebarHidden=this.sidebarDrag.hidden,this.sidebarDrag=null)},this.resetSidebar=()=>{this.sidebarHidden=!1,this.sidebarWidth=256,this.saveSidebar()},this.onSidebarKey=t=>{if(t.key==="Escape"&&this.sidebarDrag){this.onSidebarCancel();return}if(["ArrowLeft","ArrowRight","Home","End","Enter"," "].includes(t.key)){if(t.preventDefault(),t.key==="Enter"||t.key===" "){this.toggleSidebar();return}t.key==="Home"?this.sidebarHidden=!0:t.key==="End"||t.key==="ArrowRight"&&this.sidebarHidden?this.sidebarHidden=!1:t.key==="ArrowLeft"&&this.sidebarWidth<=192?this.sidebarHidden=!0:this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,this.sidebarWidth+(t.key==="ArrowLeft"?-16:16))),this.saveSidebar()}},this.searchQ="",this.hits=null,this.trashOpen=!1,this.trashItems=[],this.toast=null,this.tbMenu=null,this.tbTrigger=null,this.toolbarPortal=null,this.blogEnabled=!1,this.blogConnected=!1,this.blogBusy=!1,this.tagSaving=!1,this.syncingBlog=!1,this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all",this.allBlogTags=[],this.blogDeleteName=null,this.publishConfirm=null,this.rowMenuName=null,this.rowMenuPoint=null,this.duplicating=!1,this.pinnedCollapsed=!1,this.closeToolbar=()=>{this.tbMenu=null},this.onToolbarScroll=t=>{t.target instanceof Node&&this.toolbarPortal?.contains(t.target)||this.closeToolbar()},this.onToolbarMenuKey=t=>{if(t.key==="Escape"){t.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}if(t.target instanceof HTMLInputElement||!["ArrowDown","ArrowUp","Home","End"].includes(t.key))return;const e=[...this.toolbarPortal.querySelectorAll("button:not(:disabled)")];if(!e.length)return;const s=e.indexOf(document.activeElement),i=t.key==="Home"?0:t.key==="End"?e.length-1:(s+(t.key==="ArrowUp"?-1:1)+e.length)%e.length;t.preventDefault(),e[i]?.focus()},this.editorTick=0,this.liveTitle="",this.dragName=null,this.dropAt=null,this.mediaOpen=!1,this.mediaPurpose="body",this.mediaNote=null,this.mediaReplacement=null,this.uploading=0,this.uploadPct=0,this.suppressClick=!1,this.hostReady=!1,this.cur=null,this.dirty=!1,this.pending=0,this.queue=Promise.resolve(),this.mutGen=0,this.selfNames=new Set,this.renamed=new Map,this.contentCache=new Map,this.pollFailed=!1,this.selectionText="",this.onDocDown=t=>{if(!this.tbMenu)return;!t.composedPath().some(s=>s instanceof HTMLElement&&s.hasAttribute("data-tb-root"))&&!t.composedPath().includes(this.toolbarPortal)&&this.closeToolbar()},this.onKey=t=>{if(t.defaultPrevented||t.isComposing||!this.getClientRects().length||this.mediaOpen)return;const e=t.target instanceof HTMLElement?t.target:null;if(e&&!this.contains(e)&&!this.toolbarPortal?.contains(e)&&(e.isContentEditable||e.closest("input, textarea, select, [role=dialog], [role=menu]")))return;if(t.key==="Escape"&&this.tbMenu){t.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}const s=(t.metaKey||t.ctrlKey)&&!t.altKey,i=s&&!t.shiftKey&&t.code==="KeyN"&&!ou()||t.altKey&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&t.code==="KeyN",n=s&&t.shiftKey&&t.code==="KeyF",o=s&&!t.shiftKey&&t.code==="Backslash",a=s&&!t.shiftKey&&t.code==="KeyS",l=s?t.code==="Equal"||t.code==="NumpadAdd"?1:t.code==="Minus"||t.code==="NumpadSubtract"?-1:t.code==="Digit0"||t.code==="Numpad0"?2:0:0;if(l){t.preventDefault(),t.stopPropagation(),this.setTextStep(l===2?_n:this.textStep+l);return}!i&&!n&&!o&&!a||(t.preventDefault(),t.stopPropagation(),!t.repeat&&(i?(this.closeToolbar(),this.newNote()):n?this.focusNotesSearch():o?(this.closeToolbar(),this.wide?this.toggleSidebar():this.view=this.view==="note"?"list":this.cur?"note":"list",(this.wide?!this.sidebarHidden:this.view==="list")?this.focusNotesSearch():this.updateComplete.then(()=>this.editor?.commands.focus())):a&&this.flush()))},this.textStep=lu(),this.onVisibility=()=>{if(document.visibilityState!=="hidden")return;this.flush();const t=this.cur;t?.touched&&(t.touched=!1,this.queueRetitle(t))},this.onSettle=t=>{this.flush(),t.detail?.wait?.(this.enqueue(async()=>{}))},this.onNoteChanged=t=>{const e=t.detail,s=e?.change;s?.from&&this.cur?.name===s.from&&!this.dirty?(this.contentCache.delete(s.from),this.files=this.files.filter(i=>i.name!==s.from),this.mutGen++,s.to?(this.cur.name=s.to,this.cur.mtime=0,this.cur.touched=!1,this.selfNames.add(s.to),this.syncActive(),this.loadContent(this.cur)):this.closeCurrent()):this.cur?.name&&this.cur.name===e?.file&&!this.dirty&&this.loadContent(this.cur),this.loadFiles()},this.onOpenNote=t=>{const e=t.detail;!e?.file||!/^(?!\.)[^/\\\0]+\.md$/.test(e.file)||(e.ack?.(),this.clearSearch(),this.matchesNoteFilter(e.file)||(this.noteFilter="all"),this.open(e.file))}}get sidebarMaxWidth(){return Math.max(192,Math.min(480,this.clientWidth-328))}saveSidebar(){try{localStorage.setItem(sr,this.sidebarHidden?"1":"0"),localStorage.setItem(ir,String(this.sidebarWidth))}catch{}}async loadBlogStatus(){try{const t=await this.api("GET","/api/notes/blog/status");this.blogEnabled=t.enabled,this.blogConnected=t.connected,t.connected&&Date.now()-t.lastSync>6e4&&this.syncBlogLibrary(!0)}catch{}}async syncBlogLibrary(t=!1){if(!this.syncingBlog){this.syncingBlog=!0;try{this.flush(),await this.queue;const e=await this.api("POST","/api/notes/blog/sync",{activeName:this.cur?.name});await this.loadFiles(),(!t||e.conflicts)&&this.showToast(e.conflicts?`${e.conflicts} article(s) have changes on both sides`:`Blog synced: ${e.imported} imported, ${e.updated} updated`)}catch(e){this.showToast(J(e))}finally{this.syncingBlog=!1}}}async savedNote(){const t=this.cur;if(this.flush(),await this.queue,!t?.name||t===this.cur&&this.dirty)throw new Error("Save a note with a title and content first.");return t}async blogAction(t){if(!(this.blogBusy||this.tagSaving||this.uploading)){this.blogBusy=!0;try{const e=await this.savedNote(),s=await this.api("POST",`/api/notes/blog/${t==="save-draft"?"publish":t}`,{name:e.name,published:t!=="save-draft"});e===this.cur&&(this.activeBlog=s.blog,this.blogLocalDirty=this.dirty||s.blog.dirty),t==="pull"&&e===this.cur&&(this.contentCache.delete(e.name),await this.loadContent(e)),await this.loadFiles(),this.showToast(t==="publish"?"Published to blog":t==="save-draft"?"Draft saved to blog":t==="unpublish"?"Unpublished from blog":"Latest blog version pulled. Any local edits were kept as a separate note.")}catch(e){this.showToast(J(e))}finally{this.blogBusy=!1}}}async saveTags(t){if(!this.tagSaving){this.tagSaving=!0;try{await this.enqueue(async()=>{});const e=await this.savedNote(),s=await this.enqueue(()=>this.api("PATCH","/api/notes/blog/tags",{name:e.name,categories:t}));e===this.cur&&(this.activeBlog=s.blog),this.loadFiles()}catch(e){this.showToast(J(e))}finally{this.tagSaving=!1}}}async openTags(t=!1){try{this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags}catch{this.allBlogTags=[]}this.isConnected&&(this.tbMenu=t?"manage-tags":"tags")}async renameTag(t,e){if(e=e.trim(),!(!e||e===t)&&!this.blogBusy){this.blogBusy=!0;try{const s=await this.api("POST","/api/notes/blog/rename-tag",{from:t,to:e});await this.loadFiles(),this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags,this.showToast(s.failed?`${s.updated} articles updated; ${s.failed} could not be updated`:"Tag renamed across the blog")}catch(s){this.showToast(J(s))}finally{this.blogBusy=!1}}}async confirmBlogDelete(){const t=this.blogDeleteName;if(!(!t||this.blogBusy)){this.blogBusy=!0;try{await this.api("POST","/api/notes/blog/delete",{name:t,confirm:!0}),this.blogDeleteName=null,this.trashNote(t),this.cur?.name===t&&(this.activeBlog=null),this.showToast("Article deleted from the blog")}catch(e){this.showToast(J(e))}finally{this.blogBusy=!1}}}matchesNoteFilter(t){const e=!!this.files.find(s=>s.name===t)?.blog?.url;return this.noteFilter==="all"||(this.noteFilter==="blog"?e:!e)}openRowMenu(t,e){t.preventDefault(),t.stopPropagation(),this.closeToolbar();const i=t.currentTarget.closest("[data-drop-row]")?.querySelector("button");if(!i)return;const n=i.getBoundingClientRect();this.rowMenuName=e,this.rowMenuPoint="clientX"in t&&(t.clientX||t.clientY)?{x:t.clientX,y:t.clientY}:{x:n.left+16,y:n.top+24},this.tbTrigger=i,this.tbMenu="row",this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}openDraftMenu(t){const e=this.querySelector('[data-notes-header] [aria-label="Note actions"]');e&&(t.preventDefault(),this.rowMenuPoint={x:t.clientX,y:t.clientY},this.tbTrigger=e,this.tbMenu="more")}async noteMarkdown(t){return await this.queue,t=this.renamed.get(t)??t,this.cur?.name===t&&this.cur.loaded&&this.editor?er(this.editor):(await this.api("GET",`/api/notes/files/${encodeURIComponent(t)}`)).content}async duplicateNote(t){if(!this.duplicating){this.duplicating=!0;try{const s=(await this.noteMarkdown(t)).replace(/^([ \t]*#{1,6}\s+)?([^\r\n]*)/,(n,o,a)=>`${o||""}${a||"Untitled"} (copy)`),i=await this.enqueue(()=>this.api("POST","/api/notes/files",{content:s}));this.selfNames.add(i.name),this.contentCache.set(i.name,s),this.mutGen++,await this.loadFiles(),this.open(i.name),this.showToast("Note duplicated")}catch(e){this.error=J(e)}finally{this.duplicating=!1}}}async copyNote(t){try{await navigator.clipboard.writeText(await this.noteMarkdown(t)),this.showToast("Note copied")}catch{this.showToast("Could not copy note")}}paintToolbarPortal(){if(!this.tbMenu||!this.tbTrigger?.isConnected||!this.editor){this.toolbarPortal&&(vt(c,this.toolbarPortal),this.toolbarPortal.remove(),this.toolbarPortal=null);return}this.toolbarPortal||(this.toolbarPortal=document.createElement("div"),this.toolbarPortal.className="fixed z-[100] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",this.toolbarPortal.id="notes-toolbar-menu",this.toolbarPortal.setAttribute("role","dialog"),document.body.appendChild(this.toolbarPortal)),this.toolbarPortal.setAttribute("role",this.tbMenu==="row"?"menu":"dialog"),this.toolbarPortal.setAttribute("aria-label",{format:"Text formatting",list:"Lists",more:"Note actions",shortcuts:"Keyboard shortcuts",row:"Note actions",library:"Notes library",tags:"Article tags","manage-tags":"Manage blog tags","featured-image":"Featured image"}[this.tbMenu]),this.toolbarPortal.style.fontFamily=getComputedStyle(this).fontFamily,this.toolbarPortal.style.width=`${Math.min(272,window.innerWidth-16)}px`,this.toolbarPortal.style.maxHeight=`${window.innerHeight-16}px`,vt(this.renderToolbarMenu(),this.toolbarPortal);const t=this.tbTrigger.getBoundingClientRect(),e=this.toolbarPortal.getBoundingClientRect(),s=this.rowMenuPoint&&(this.tbMenu==="row"||this.tbMenu==="more"),i=s?this.rowMenuPoint.x:t.left;this.toolbarPortal.style.left=`${Math.max(8,Math.min(i,window.innerWidth-e.width-8))}px`;const n=s?this.rowMenuPoint.y:t.bottom+6+e.height>window.innerHeight-8?t.top-e.height-6:t.bottom+6;this.toolbarPortal.style.top=`${Math.max(8,Math.min(n,window.innerHeight-e.height-8))}px`}focusNotesSearch(){this.closeToolbar(),this.wide?(this.sidebarHidden=!1,this.saveSidebar()):this.view="list",this.updateComplete.then(()=>{const t=this.querySelector("[data-notes-search]");t?.focus(),t?.select()})}setTextStep(t){this.textStep=Math.max(0,Math.min(ri.length-1,t)),this.style.setProperty("--notes-scale",String(ri[this.textStep]));try{localStorage.setItem(Za,String(this.textStep))}catch{}}connectedCallback(){super.connectedCallback(),this.style.setProperty("--notes-scale",String(ri[this.textStep]));try{this.sidebarHidden=localStorage.getItem(sr)==="1";const t=Number(localStorage.getItem(ir));Number.isFinite(t)&&t>=192&&(this.sidebarWidth=Math.min(480,t))}catch{}this.resizeObs=new ResizeObserver(()=>{this.onSidebarCancel();const t=this.clientWidth>=hu;t!==this.wide?this.wide=t:this.requestUpdate()}),this.resizeObs.observe(this),this.loadFiles(),this.loadBlogStatus(),this.pollTimer=setInterval(()=>{document.hidden||this.loadFiles()},4e3),window.addEventListener("pointerdown",this.onDocDown,!0),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("scroll",this.onToolbarScroll,!0),window.addEventListener("resize",this.closeToolbar),window.addEventListener("mana:notes-settle",this.onSettle),window.addEventListener("mana:note-changed",this.onNoteChanged),window.addEventListener("mana:open-note",this.onOpenNote)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mana:notes-settle",this.onSettle),window.removeEventListener("mana:note-changed",this.onNoteChanged),window.removeEventListener("mana:open-note",this.onOpenNote),window.removeEventListener("pointerdown",this.onDocDown,!0),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("scroll",this.onToolbarScroll,!0),window.removeEventListener("resize",this.closeToolbar),this.tbMenu=null,this.paintToolbarPortal(),this.resizeObs?.disconnect(),this.onSidebarCancel(),this.pollTimer&&clearInterval(this.pollTimer),this.searchTimer&&clearTimeout(this.searchTimer),this.toastTimer&&clearTimeout(this.toastTimer),this.closeMedia(),this.leave(),this.editor?.destroy(),this.editor=void 0}get holdReload(){return this.dirty||this.pending>0||(this.editor?.isFocused??!1)}async api(t,e,s){const i=await fetch(e,{method:t,credentials:"include",headers:s===void 0?void 0:{"content-type":"application/json"},body:s===void 0?void 0:JSON.stringify(s)});if(!i.ok){const n=await i.json().catch(()=>({}));throw new Error(n.error||`Request failed (${i.status})`)}return await i.json()}enqueue(t){const e=this.queue.then(t);return this.queue=e.catch(()=>{}),e}async loadFiles(){if(this.dragName)return;const t=this.mutGen;try{const e=await this.api("GET","/api/notes/files");if(t!==this.mutGen)return;this.pollFailed&&(this.pollFailed=!1,this.error=null);const s=new Set(this.files.map(a=>a.name));if(this.files=e.files,this.trashCount=e.trashCount??0,this.cur?.name&&(this.activeBlog=this.files.find(a=>a.name===this.cur.name)?.blog??null,!this.dirty&&!this.pending&&(this.blogLocalDirty=!!this.activeBlog?.dirty)),!this.initialized){this.initialized=!0,this.wide&&!this.cur&&e.files[0]&&this.open(e.files[0].name);return}const i=e.files.filter(a=>!s.has(a.name)&&!this.selfNames.has(a.name));if(i.length&&!this.holdReload&&!this.syncingBlog){const a=i.reduce((l,h)=>h.modifiedAt>l.modifiedAt?h:l);this.open(a.name);return}const n=this.cur;if(!n?.name||this.holdReload)return;const o=e.files.find(a=>a.name===n.name);o?o.modifiedAt>n.mtime&&this.loadContent(n):this.closeCurrent()}catch(e){this.error=J(e),this.pollFailed=!0}}async loadContent(t){if(t.name)try{const e=await this.api("GET",`/api/notes/files/${encodeURIComponent(t.name)}`);if(this.contentCache.set(t.name,e.content),t!==this.cur||!this.editor||this.dirty)return;t.mtime=e.modifiedAt??0,Yi(this.editor,e.content),t.loaded=!0,this.editor.setEditable(!0,!1),this.error=null}catch(e){this.error=J(e)}}open(t){if(this.trashOpen=!1,this.activeBlog=this.files.find(s=>s.name===t)?.blog??null,this.blogLocalDirty=!!this.activeBlog?.dirty,this.cur?.name===t){this.view="note";return}this.leave();const e={name:t,mtime:0,touched:!1,loaded:!1};this.cur=e,this.syncActive(),this.view="note",this.dirty=!1,this.showCached(e),this.loadContent(e)}showCached(t){const e=this.editor;if(!e||!t.name)return;const s=this.contentCache.get(t.name);Yi(e,s??""),t.loaded=s!=null,e.setEditable(t.loaded,!1)}newNote(){this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all";const t=this.editor;t&&(this.trashOpen=!1,this.clearSearch(),this.cur&&!this.cur.name&&Qi(t)||(this.leave(),this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive(),du(t),t.setEditable(!0,!1),this.dirty=!1),this.view="note",this.updateComplete.then(()=>this.editor?.commands.focus("start")))}closeCurrent(){this.saveTimer&&clearTimeout(this.saveTimer),this.dirty=!1,this.cur=null,this.syncActive(),this.editor&&Yi(this.editor,""),this.wide&&this.files[0]?this.open(this.files[0].name):this.view="list"}back(){this.leave(),this.view="list"}syncActive(){this.activeName=this.cur?.name??null,this.isDraft=!!this.cur&&!this.cur.name,this.updateViewContext()}onEdit(){this.activeBlog?.url&&(this.blogLocalDirty=!0),this.cur||(this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive()),this.cur.touched=!0,this.dirty=!0,this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.flush(),900)}flush(){this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0);const t=this.cur,e=this.editor;if(!t||!e||!this.dirty)return;this.dirty=!1;const s=er(e).replace(/\n*$/,`
`),i=Qi(e);t.name&&this.contentCache.set(t.name,s),this.pending++,this.enqueue(async()=>{try{if(t.name){const n=await this.api("PUT",`/api/notes/files/${encodeURIComponent(t.name)}`,{content:s});t.mtime=n.modifiedAt}else{if(i)return;const n=await this.api("POST","/api/notes/files",{content:s});t.name=n.name,t.mtime=n.modifiedAt,this.selfNames.add(n.name),this.contentCache.set(n.name,s),t===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}this.error=null}catch(n){t===this.cur&&(this.dirty=!0),this.error=J(n)}finally{this.pending--}})}leave(){const t=this.cur,e=this.editor;if(t&&e){this.flush();const s=t.loaded&&Qi(e),i=t.touched;t.touched=!1,s?this.enqueue(async()=>{if(t.name){try{await this.api("DELETE",`/api/notes/files/${encodeURIComponent(t.name)}?ifEmpty=1`),this.contentCache.delete(t.name)}catch(n){this.error=J(n)}this.mutGen++,this.loadFiles()}}):i&&this.queueRetitle(t)}this.cur=null,this.syncActive()}queueRetitle(t){this.enqueue(async()=>{if(!t.name)return;const e=t.name;try{const s=await this.api("POST","/api/notes/retitle",{name:e});if(s.name===e)return;t.name=s.name,this.selfNames.add(s.name),this.renamed.set(e,s.name);const i=this.contentCache.get(e);this.contentCache.delete(e),i!=null&&this.contentCache.set(s.name,i),t===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}catch(s){this.error=J(s)}})}get pinnedNames(){return this.files.filter(t=>t.pinned).map(t=>t.name)}togglePin(t){const e=this.files.find(i=>i.name===t);if(!e)return;e.pinned||(this.pinnedCollapsed=!1);const s=this.pinnedNames.filter(i=>i!==t);this.setPins(e.pinned?s:[t,...s])}setPins(t){const e=new Map(this.files.map(n=>[n.name,n])),s=t.map(n=>e.get(n)).filter(n=>!!n).map(n=>({...n,pinned:!0})),i=this.files.filter(n=>!t.includes(n.name)).map(n=>({...n,pinned:!1})).sort((n,o)=>o.modifiedAt-n.modifiedAt);this.files=[...s,...i],this.mutGen++,this.enqueue(async()=>{try{await this.api("PUT","/api/notes/pins",{order:t.map(n=>this.renamed.get(n)??n)})}catch(n){this.error=J(n)}this.mutGen++,this.loadFiles()})}onRowPointerDown(t,e){if(t.button!==0)return;const s=t.clientX,i=t.clientY,n=t.pointerType==="touch";let o=!1;const a=()=>{o=!0,this.dragName=e,this.pinnedCollapsed=!1,this.suppressClick=!0,n&&navigator.vibrate?.(10)},l=n?setTimeout(a,350):void 0,h=v=>{o&&v.preventDefault()},u=v=>{if(!o){if(Math.hypot(v.clientX-s,v.clientY-i)<6)return;if(n){g();return}a()}this.trackDrop(v.clientY)},p=()=>{const v=o;g(),v&&this.drop()},m=()=>{g(),this.dragName=null,this.dropAt=null,this.suppressClick=!1},g=()=>{l&&clearTimeout(l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),window.removeEventListener("touchmove",h)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",m),window.addEventListener("touchmove",h,{passive:!1})}trackDrop(t){let e=null;for(const s of this.querySelectorAll("[data-drop-row]")){const i=s.getBoundingClientRect();if(!(t<i.top||t>i.bottom)){e={name:s.dataset.dropRow||null,pos:t<i.top+i.height/2?"before":"after"};break}}(e?.name!==this.dropAt?.name||e?.pos!==this.dropAt?.pos)&&(this.dropAt=e)}drop(){const t=this.dragName,e=this.dropAt;if(this.dragName=null,this.dropAt=null,setTimeout(()=>{this.suppressClick=!1},0),!t)return;const s=this.pinnedNames;if(e&&(e.name===null||s.includes(e.name))){if(e.name===t)return;const i=s.filter(o=>o!==t);let n=e.name===null?i.length:i.indexOf(e.name)+(e.pos==="after"?1:0);n<0&&(n=i.length),i.splice(n,0,t),this.setPins(i)}else s.includes(t)&&this.setPins(s.filter(i=>i!==t))}trashNote(t){if(this.cur?.name===t){this.trashCurrent();return}this.files=this.files.filter(e=>e.name!==t),this.mutGen++,this.enqueue(()=>this.doTrash(this.renamed.get(t)??t))}trashCurrent(){const t=this.cur;t&&(this.flush(),t.name&&(this.files=this.files.filter(e=>e.name!==t.name)),this.mutGen++,this.closeCurrent(),this.enqueue(async()=>{t.name&&await this.doTrash(t.name)}))}async doTrash(t){try{const e=await this.api("DELETE",`/api/notes/files/${encodeURIComponent(t)}`);this.contentCache.delete(t);const s=e.trashed;s&&this.showToast("Moved to Recently deleted",()=>void this.restore(s))}catch(e){this.error=J(e)}this.mutGen++,this.loadFiles()}async restore(t){this.toast=null;try{const e=await this.enqueue(()=>this.api("POST","/api/notes/restore",{name:t}));this.selfNames.add(e.name),this.mutGen++,await this.loadFiles(),this.open(e.name)}catch(e){this.error=J(e)}}async openTrash(){this.clearSearch(),this.trashOpen=!0;try{this.trashItems=(await this.api("GET","/api/notes/trash")).items}catch(t){this.error=J(t)}}showToast(t,e){this.toast={text:t,undo:e},this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=null},6e3)}onSearchInput(t){if(this.searchQ=t,this.trashOpen=!1,t.trim()&&this.wide&&this.sidebarHidden&&(this.sidebarHidden=!1,this.saveSidebar()),this.searchTimer&&clearTimeout(this.searchTimer),!t.trim()){this.hits=null;return}this.searchTimer=setTimeout(()=>{this.runSearch(t)},180)}async runSearch(t){try{const e=await this.api("GET",`/api/notes/search?q=${encodeURIComponent(t)}`);t===this.searchQ&&(this.hits=e.results)}catch(e){this.error=J(e)}}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.searchQ="",this.hits=null}updateViewContext(){const t=this.cur?.name,e=t?`Note "${t}" is open in the notes pane (vault path: Notes/${t}). It's a Markdown file. Edit it with Read/Edit/Write and the cockpit re-renders live.`:this.cur?"A new note is open in the notes pane. It gets a file under Notes/ once the user has typed something.":"The notes list is open in the notes pane; no note is selected.",s=this.selectionText?` The user has selected this text: "${this.selectionText.slice(0,600)}". When they say "this" or ask to rewrite/expand/fix something, they mean the selected passage. Edit that part of the file.`:"";f.getState().setViewContext({tool:"notes",summary:e+s,note:t??null})}updated(){if(this.paintToolbarPortal(),this.hostReady||this.editor)return;const t=this.querySelector("#note-host");t&&(this.hostReady=!0,this.mountEditor(t))}async mountEditor(t){if(Re??=await _t(()=>import("./notes-editor-D3O857wd.js"),[]),!this.isConnected||this.editor)return;this.editor=Re.createNotesEditor({host:t,uploadImage:s=>this.uploadImage(s),onReplaceImage:s=>{this.openMedia("body",s)},onUpdate:()=>this.onEdit(),onTransaction:()=>{this.editorTick++;let s="";this.editor?.state.doc.forEach(i=>{s||(s=i.textContent.trim())}),this.liveTitle=s},onSelection:s=>{s!==this.selectionText&&(this.selectionText=s,this.updateViewContext())}});const e=this.cur;e?.name&&(this.showCached(e),this.loadContent(e))}async uploadImage(t){Ji??=await _t(()=>import("./notes-media-DWQZLlRj.js"),__vite__mapDeps([2,3,4,5])),this.uploading++,this.uploadPct=0;try{const e=await Ji.uploadMedia(t,s=>{this.uploadPct=s});return{url:e.url,alt:e.name}}catch(e){throw this.error=J(e),e}finally{this.uploading--}}async openMedia(t="body",e=null){this.mediaReplacement?.release(),this.mediaReplacement=e,this.editor?.commands.blur(),this.mediaPurpose=t,this.mediaNote=this.cur,this.tbMenu=null;try{Ji??=await _t(()=>import("./notes-media-DWQZLlRj.js"),__vite__mapDeps([2,3,4,5]))}catch(s){this.closeMedia(),this.error=J(s);return}this.mediaOpen=!0}closeMedia(){this.mediaOpen=!1,this.mediaReplacement?.release(),this.mediaReplacement=null}onMediaInsert(t){const e=this.mediaReplacement;if(this.mediaReplacement=null,this.mediaOpen=!1,this.mediaNote!==this.cur||!this.cur?.loaded){e?.release();return}if(this.mediaPurpose==="featured"){this.saveFeaturedImage(t.url);return}if(!this.editor){e?.release();return}const s=t.credit?{type:"paragraph",content:[{type:"text",text:"Photo: ",marks:[{type:"italic"}]},{type:"text",text:t.credit.name,marks:[{type:"italic"},{type:"link",attrs:{href:t.credit.url}}]},{type:"text",text:" on ",marks:[{type:"italic"}]},{type:"text",text:"Pexels",marks:[{type:"italic"},{type:"link",attrs:{href:t.credit.page}}]}]}:void 0;if(e){e.replace({src:t.url,alt:t.name},s)||(this.error="The original image is no longer available. Select an image and try again.");return}const i=this.editor.chain().focus().setImage({src:t.url,alt:t.name});s&&i.insertContent(s),i.run()}async saveFeaturedImage(t){if(!(this.blogBusy||this.tagSaving)){this.tagSaving=!0;try{const e=await this.savedNote(),s=await this.api("PATCH","/api/notes/blog/featured-image",{name:e.name,source:t});e===this.cur&&(this.activeBlog=s.blog),await this.loadFiles(),this.showToast(t?"Featured image selected. Publish or update the blog post to apply it.":"Featured image removed. The first image in the note will be used.")}catch(e){this.showToast(J(e))}finally{this.tagSaving=!1}}}toggleSidebar(){this.sidebarHidden=!this.sidebarHidden,this.saveSidebar()}bucket(t){const e=t*1e3,s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(e>=i)return"Today";if(e>=i-Xi)return"Yesterday";if(e>=i-7*Xi)return"Previous 7 days";if(e>=i-30*Xi)return"Previous 30 days";const n=new Date(e);return n.getFullYear()===s.getFullYear()?n.toLocaleDateString("en-GB",{month:"long"}):String(n.getFullYear())}dateLabel(t){const e=new Date(t*1e3),s=this.bucket(t);if(s==="Today")return e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});if(s==="Yesterday")return s;if(s==="Previous 7 days")return e.toLocaleDateString("en-GB",{weekday:"long"});const i=e.getFullYear()!==new Date().getFullYear();return e.toLocaleDateString("en-GB",{day:"numeric",month:"short",...i?{year:"numeric"}:{}})}mark(t){const e=this.searchQ.trim().split(/\s+/).filter(Boolean).map(mu);return e.length?t.split(new RegExp(`(${e.join("|")})`,"gi")).map((s,i)=>i%2?r`<mark class="bg-accent-soft text-ink rounded-sm">${s}</mark>`:s):t}renderSearch(){const t=this.searchQ.trim();return r`
      <label class="flex items-center gap-1.5 ${this.wide?"w-44 min-w-[7.5rem] shrink":"flex-1 min-w-0"} h-8 px-3 rounded-full border border-line bg-hover text-muted transition-colors focus-within:bg-surface focus-within:border-accent">
        ${X("search","w-3.5 h-3.5 shrink-0")}
        <input data-notes-search type="text" placeholder=${this.noteFilter==="blog"?"Search blog":this.noteFilter==="local"?"Search local notes":"Search"} aria-label="Search notes" title=${`Search notes (${Ct}Shift+F)`} .value=${this.searchQ}
          class="flex-1 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          @input=${e=>this.onSearchInput(e.target.value)}
          @keydown=${e=>{e.key==="Escape"&&this.clearSearch(),e.key==="Enter"&&this.hits?.[0]&&this.open(this.hits[0].name)}} />
        ${t?r`<button type="button" title="Clear search" aria-label="Clear search" class="shrink-0 text-muted hover:text-ink"
          @click=${()=>this.clearSearch()}>${X("x","w-3.5 h-3.5")}</button>`:c}
      </label>`}renderSidebar(){const t=this.searchQ.trim(),e=this.files.filter(i=>this.matchesNoteFilter(i.name)).length,s=this.hits?.filter(i=>this.matchesNoteFilter(i.name)).length;return r`
      ${this.wide?c:r`<div class="flex items-center px-3 pt-3 shrink-0">${this.renderSearch()}</div>`}
      <div class="flex items-center gap-1.5 pl-4 pr-3 pt-3 pb-2 shrink-0">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-ink truncate">${t?"Search":this.noteFilter==="blog"?"Blog articles":this.noteFilter==="local"?"Local notes":"Notes"}</div>
          <div class="text-xs text-muted truncate">${t?s===void 0?"Searching…":`Found ${s} ${s===1?"note":"notes"}`:`${e} ${e===1?"note":"notes"}`}</div>
        </div>
        ${this.blogEnabled?r`<span data-tb-root class=${this.noteFilter==="all"?"":"rounded-lg bg-accent-soft"}>${this.renderToolbarTrigger("library",this.syncingBlog?"Syncing blog":"Notes and blog library",X("globe"))}</span>`:c}
        ${Zi("square-pen",nr,()=>this.newNote(),"text-accent")}
      </div>
      <div class="notes-list-scroll flex-1 min-h-0 overflow-y-auto px-2 pb-2" style="scrollbar-gutter:stable;">
        ${this.trashOpen?this.renderTrash():t?this.renderHits():this.renderList()}
      </div>
      ${!this.trashOpen&&this.trashCount?r`
        <button type="button" class="flex items-center gap-2 mx-2 mb-2 px-3 py-2 rounded-lg text-xs text-muted hover:text-ink hover:bg-hover shrink-0"
          @click=${()=>void this.openTrash()}>
          ${X("trash-2","w-3.5 h-3.5")} Recently deleted <span class="ml-auto">${this.trashCount}</span>
        </button>`:c}`}groupLabel(t,e=!1){return e?r`<button type="button" class="notes-group-heading flex items-center justify-between w-full text-left" aria-expanded=${!this.pinnedCollapsed}
          @click=${()=>{this.pinnedCollapsed=!this.pinnedCollapsed}}><span>${t}</span>${X(this.pinnedCollapsed?"chevron-right":"chevron-down","w-3.5 h-3.5 text-muted")}</button>`:r`<h3 class="notes-group-heading">${t}</h3>`}renderList(){if(!this.files.length&&!this.isDraft)return this.initialized?r`<div class="px-3 py-8 text-center text-sm text-muted">No notes yet</div>`:c;const t=[];for(const s of this.files.filter(i=>this.matchesNoteFilter(i.name))){const i=s.pinned?"Pinned":this.bucket(s.modifiedAt),n=t[t.length-1];n?.label===i?n.items.push(s):t.push({label:i,items:[s]})}const e=this.files.find(s=>s.name===this.dragName);return r`
      ${e&&!e.pinned&&!t.some(s=>s.label==="Pinned")?r`
        <div data-drop-row=""
          class="mx-1 mt-2 px-3 py-3 rounded-lg border-2 border-dashed text-xs text-center ${this.dropAt?.name===null?"border-accent text-accent":"border-line text-muted"}">
          Drop here to pin</div>`:c}
      ${this.isDraft?r`
        <div class="px-3 py-2 mt-1 rounded-lg bg-accent-soft" @contextmenu=${s=>this.openDraftMenu(s)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.liveTitle||"New note"}</div>
          <div class="mt-0.5 text-xs text-muted">Now</div>
        </div>`:c}
      ${t.map(s=>r`<section class="notes-list-group">${this.groupLabel(s.label,s.label==="Pinned")}${s.label==="Pinned"&&this.pinnedCollapsed?c:s.items.map(i=>this.renderRow(i))}</section>`)}`}onRowArrow(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"||t.altKey||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=[...this.querySelectorAll("#notes-list .notes-list-row")],s=e[e.indexOf(t.currentTarget)+(t.key==="ArrowDown"?1:-1)];t.preventDefault(),s&&(s.focus(),s.scrollIntoView({block:"nearest"}),s.click())}renderRow(t){const e=t.name===this.activeName,s=(e?this.liveTitle:"")||t.title||"Untitled",i=this.dragName&&t.pinned&&this.dropAt?.name===t.name&&this.dragName!==t.name?`box-shadow: inset 0 ${this.dropAt.pos==="before"?"2px":"-2px"} 0 var(--accent);`:"";return r`
      <div class="group relative select-none rounded-lg ${this.dragName===t.name?"opacity-40":""}"
        style="-webkit-touch-callout:none;${i}"
        data-drop-row=${t.name}
        @contextmenu=${n=>this.openRowMenu(n,t.name)}
        @pointerdown=${n=>this.onRowPointerDown(n,t.name)}>
        <button type="button" class="notes-list-row w-full text-left rounded-lg ${e?"bg-accent-soft":"hover:bg-hover"}"
          aria-current=${e?"true":c}
          @keydown=${n=>{n.key==="ContextMenu"||n.shiftKey&&n.key==="F10"?this.openRowMenu(n,t.name):this.onRowArrow(n)}}
          @click=${n=>{this.suppressClick||(n.currentTarget.focus({preventScroll:!0}),this.open(t.name))}}>
          <div class="notes-list-title flex items-center gap-1.5 min-w-0"><span class="truncate">${s}</span>${t.blog?.url?r`<span class="shrink-0 ${t.blog.published?"text-nsc-green":"text-muted"}" title=${t.blog.published?"Published on blog":"Blog draft"}>${X("globe","w-3 h-3")}</span>`:c}</div>
          <div class="notes-list-preview flex gap-2 min-w-0">
            <span class="shrink-0">${this.dateLabel(t.modifiedAt)}</span>
            <span class="truncate">${t.preview||"No additional text"}</span>
          </div>
        </button>
        <button type="button" aria-label=${`Actions for ${s}`} title="Note actions"
          class="notes-row-menu absolute right-1 top-2 flex items-center justify-center w-7 h-7 rounded-md bg-surface text-muted hover:text-ink hover:bg-hover opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          @pointerdown=${n=>n.stopPropagation()}
          @click=${n=>this.openRowMenu(n,t.name)}>${X("ellipsis","w-4 h-4")}</button>
      </div>`}renderHits(){return this.hits===null?r`<div class="px-3 py-6 text-center text-xs text-muted">Searching…</div>`:this.hits.length?r`
      ${this.hits.filter(t=>this.matchesNoteFilter(t.name)).map(t=>r`
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${t.name===this.activeName?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>this.open(t.name)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.mark(t.title||"Untitled")}</div>
          ${t.snippet?r`<div class="mt-0.5 text-xs text-muted line-clamp-2 break-words">${this.mark(t.snippet)}</div>`:c}
        </button>`)}`:r`<div class="px-3 py-6 text-center text-sm text-muted">No matches</div>`}renderTrash(){return r`
      <button type="button" class="flex items-center gap-0.5 mt-1 px-2 py-1 rounded-md text-xs text-muted hover:text-ink hover:bg-hover"
        @click=${()=>{this.trashOpen=!1}}>${X("chevron-left","w-3.5 h-3.5")} Notes</button>
      ${this.groupLabel("Recently deleted")}
      <div class="px-3 pb-2 text-xs text-muted">Deleted notes stay here for 30 days.</div>
      ${this.trashItems.length?c:r`<div class="px-3 py-6 text-center text-sm text-muted">Nothing here</div>`}
      ${this.trashItems.map(t=>r`
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-hover">
          <div class="flex-1 min-w-0">
            <div class="text-sm text-ink truncate">${t.title||"Untitled"}</div>
            <div class="text-xs text-muted">${this.dateLabel(t.deletedAt)}</div>
          </div>
          <button type="button" class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
            @click=${()=>void this.restore(t.name)}>Restore</button>
        </div>`)}`}renderNoteHeader(){return r`
      <div data-notes-header class="grid grid-cols-[minmax(0,1fr)_auto_minmax(max-content,1fr)] items-center px-2 sm:px-3 py-2 shrink-0 min-w-0">
        <div class="flex items-center justify-start min-w-0">${this.wide?Zi("layout-sidebar",this.sidebarHidden?"Show notes list":"Hide notes list",()=>this.toggleSidebar()):r`<button type="button" aria-label="Back to notes" class="flex items-center justify-center w-8 h-8 rounded-lg text-accent hover:bg-hover shrink-0"
              @click=${()=>this.back()}>${X("chevron-left")}</button>`}
          ${this.activeBlog?.url?r`<a class="notes-blog-status ${this.activeBlog.published?"text-nsc-green":"text-muted"}" href=${this.activeBlog.published?this.activeBlog.url:c} target="_blank" rel="noopener noreferrer"
            aria-label=${this.activeBlog.published?"Published. Open blog article":"Blog draft"}
            title=${this.activeBlog.conflict?"Changed on both sides. Open blog article":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes. Open blog article":this.activeBlog.published?"Published. Open blog article":"Unpublished. Open blog article"}>
            ${X("globe","w-4 h-4")}<span class="notes-blog-status-label">${this.activeBlog.missing?"Removed":this.activeBlog.conflict?"Blog changed":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes":this.activeBlog.published?"Published":"Blog draft"}</span></a>`:c}
        </div>
        ${this.renderToolbar()}
        <div data-tb-root class="flex items-center justify-end gap-1 min-w-0">
          ${!this.wide||this.sidebarHidden?Zi("square-pen",nr,()=>this.newNote(),"text-accent"):c}
          ${this.editor&&(this.activeName||this.isDraft)?this.renderToolbarTrigger("more","Note actions",X("ellipsis")):c}
          ${this.wide?this.renderSearch():c}
        </div>
      </div>`}renderToolbarTrigger(t,e,s){return r`
      <button type="button" title=${e} aria-label=${e} aria-haspopup="dialog"
        aria-expanded=${this.tbMenu===t} aria-controls=${this.tbMenu===t?"notes-toolbar-menu":c}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${this.tbMenu===t?"bg-hover":""}"
        @pointerdown=${i=>i.preventDefault()}
        @click=${i=>{if(this.tbMenu===t){this.closeToolbar();return}this.tbTrigger=i.currentTarget,this.rowMenuPoint=null,this.tbMenu=t,i.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${s}</button>`}renderToolbar(){if(this.editorTick,!this.editor||!this.activeName&&!this.isDraft)return r`<div></div>`;const t=this.editor,e=(s,i,n,o=!1)=>r`
      <button type="button" title=${s} aria-label=${s} aria-pressed=${o}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${o?"bg-accent-soft text-accent":""}"
        @pointerdown=${a=>a.preventDefault()}
        @click=${()=>{this.closeToolbar(),n()}}>${X(i)}</button>`;return r`<div data-tb-root role="toolbar" aria-label="Note tools" class="flex items-center justify-center gap-1">
      <div class="flex items-center gap-0.5 rounded-full bg-hover px-1">
        ${this.renderToolbarTrigger("format","Text formatting",r`<span class="text-lg leading-none">Aa</span>`)}
        <div class="flex items-center">
          ${e("Checklist","list-todo",()=>{t.chain().focus().toggleTaskList().run()},t.isActive("taskList"))}
          <button type="button" title="List styles" aria-label="List styles" aria-haspopup="dialog"
            aria-expanded=${this.tbMenu==="list"} aria-controls=${this.tbMenu==="list"?"notes-toolbar-menu":c}
            class="flex items-center justify-center w-4 h-8 shrink-0 rounded-md text-ink hover:bg-hover"
            @pointerdown=${s=>s.preventDefault()}
            @click=${s=>{if(this.tbMenu==="list"){this.closeToolbar();return}this.tbTrigger=s.currentTarget,this.tbMenu="list",s.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${X("chevron-down","w-3 h-3")}</button>
        </div>
        ${e("Insert table","table",()=>{t.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run()})}
        ${e("Images","image",()=>void this.openMedia())}
      </div>
    </div>`}renderToolbarMenu(){const t=this.editor,e=l=>{this.closeToolbar(),l()},s=(l,h,u,p,m=!1)=>r`
      <button type="button" title=${l} aria-label=${l} aria-pressed=${u} ?disabled=${m}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md text-sm ${u?"bg-accent-soft text-accent":"text-ink hover:bg-hover"} ${m?"opacity-30":""}"
        @pointerdown=${g=>g.preventDefault()} @click=${()=>e(p)}>${h}</button>`,i=(l,h,u,p=!1)=>r`
      <button type="button" role=${this.tbMenu==="row"?"menuitem":c} ?disabled=${p} class="flex items-center gap-3 w-full px-2 py-2 text-sm rounded-lg text-left hover:bg-hover ${p?"opacity-30":""}"
        @pointerdown=${m=>m.preventDefault()} @click=${()=>e(u)}>${X(h)}<span>${l}</span></button>`,n=(l,h)=>r`<div class="mb-2 last:mb-0"><div class="px-1 mb-1 text-xs font-medium text-muted">${l}</div><div class="flex flex-wrap gap-1">${h}</div></div>`,o=l=>{l!=="justify"&&cu(t,l)||t.chain().focus().setTextAlign(l).run()};let a=c;if(this.tbMenu==="format"){const l=t.isActive("heading",{level:1})?1:t.isActive("heading",{level:2})?2:t.isActive("heading",{level:3})?3:0,h=t.isActive("image"),u=h?String(t.getAttributes("image").align||"left"):t.isActive({textAlign:"center"})?"center":t.isActive({textAlign:"right"})?"right":t.isActive({textAlign:"justify"})?"justify":"left",p=t.getAttributes("textStyle").color||null,m=t.getAttributes("highlight").color||null;a=r`
        ${n("Style",[0,1,2,3].map(g=>{const v=["Body","Title","Heading","Subheading"][g];return r`<button type="button" aria-label=${v} aria-pressed=${l===g}
            class="w-full text-left px-2 py-1 rounded-lg hover:bg-hover ${l===g?"bg-accent-soft text-accent":"text-ink"}"
            style=${`font-size:${[13,22,17,15][g]}px;font-weight:${g?600:400};`}
            @pointerdown=${x=>x.preventDefault()}
            @click=${()=>e(()=>{(g?t.chain().focus().setHeading({level:g}):t.chain().focus().setParagraph()).run()})}>${v}</button>`}))}
        ${n("Text",r`
          ${s("Bold (⌘B)",r`<b>B</b>`,t.isActive("bold"),()=>{t.chain().focus().toggleBold().run()})}
          ${s("Italic (⌘I)",r`<i>I</i>`,t.isActive("italic"),()=>{t.chain().focus().toggleItalic().run()})}
          ${s("Underline (⌘U)",r`<u>U</u>`,t.isActive("underline"),()=>{t.chain().focus().toggleUnderline().run()})}
          ${s("Strikethrough",r`<s>S</s>`,t.isActive("strike"),()=>{t.chain().focus().toggleStrike().run()})}`)}
        ${n("Blocks",r`
          ${s("Quote",X("quote"),t.isActive("blockquote"),()=>{t.chain().focus().toggleBlockquote().run()})}
          ${s("Code block",X("code"),t.isActive("codeBlock"),()=>{t.chain().focus().toggleCodeBlock().run()})}`)}
        ${n("Alignment",["left","center","right","justify"].map(g=>s(`Align ${g}`,X(`align-${g}`),u===g,()=>o(g),h&&g==="justify")))}
        ${n("Text color",uu.map(g=>s(g.name,r`<span class="flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold ${g.v?"text-white":"text-ink"}" style=${g.v?`background:${g.v}`:""}>A</span>`,p===g.v,()=>{(g.v?t.chain().focus().setColor(g.v):t.chain().focus().unsetColor()).run()})))}
        ${n("Highlight",[null,...pu].map(g=>s(g?`${g.name} highlight`:"No highlight",r`<span class="w-5 h-5 rounded-md ${g?"":"border border-line"}" style=${g?`background:${g.v}`:""}></span>`,m===(g?.v??null),()=>{(g?t.chain().focus().setHighlight({color:g.v}):t.chain().focus().unsetHighlight()).run()})))}`}else if(this.tbMenu==="list")a=r`
        ${i("Bullet list","list",()=>{t.chain().focus().toggleBulletList().run()})}
        ${i("Numbered list","list-ordered",()=>{t.chain().focus().toggleOrderedList().run()})}
        ${i("Checklist","list-todo",()=>{t.chain().focus().toggleTaskList().run()})}`;else if(this.tbMenu==="more"){const l=this.files.some(h=>h.name===this.activeName&&h.pinned);a=r`
        ${i("Undo","undo-2",()=>{t.chain().focus().undo().run()},!t.can().undo())}
        ${i("Redo","redo-2",()=>{t.chain().focus().redo().run()},!t.can().redo())}
        ${this.activeName?i(l?"Unpin":"Pin",l?"pin-off":"pin",()=>this.togglePin(this.activeName)):c}
        ${this.blogEnabled?r`
          ${i(this.blogBusy?"Publishing…":this.activeBlog?.published?"Update blog post":"Publish to blog","globe",()=>{this.activeBlog?.published?this.blogAction("publish"):this.publishConfirm=this.liveTitle||this.files.find(h=>h.name===this.activeName)?.title||"this note"},this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${this.activeBlog?.published?c:i("Save draft to blog","file-text",()=>void this.blogAction("save-draft"),this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${i("Featured image","image",()=>{this.tbMenu="featured-image"},this.blogBusy||this.tagSaving)}
          ${i("Edit tags","type",()=>void this.openTags())}
          ${this.activeBlog?.url?r`
            ${this.activeBlog.published?i("Unpublish from blog","eye-off",()=>void this.blogAction("unpublish"),this.blogBusy):c}
            ${i("Pull latest from blog","redo-2",()=>void this.blogAction("pull"),this.blogBusy)}
            ${i("Delete article from blog","trash-2",()=>{this.blogDeleteName=this.activeName})}`:c}`:c}
        ${this.activeBlog?.url?c:i("Delete note","trash-2",()=>this.trashCurrent())}
        ${i("Keyboard shortcuts","type",()=>{this.tbMenu="shortcuts"})}`}if(this.tbMenu==="row"&&this.rowMenuName){const l=this.renamed.get(this.rowMenuName)??this.rowMenuName,h=this.files.find(u=>u.name===l);a=r`
        ${i("Open note","file-text",()=>this.open(l))}
        ${i(h?.pinned?"Unpin note":"Pin note",h?.pinned?"pin-off":"pin",()=>this.togglePin(l))}
        ${i("Duplicate note","file-text",()=>void this.duplicateNote(l),this.duplicating)}
        ${i("Copy note","file-text",()=>void this.copyNote(l))}
        ${i("New note","square-pen",()=>this.newNote())}
        ${this.files.find(u=>u.name===l)?.blog?.url?i("Delete article from blog","trash-2",()=>{this.blogDeleteName=l}):i("Delete note","trash-2",()=>this.trashNote(l))}`}if(this.tbMenu==="library"){const l=(h,u)=>i(u,h==="blog"?"globe":"file-text",()=>{this.noteFilter=h,this.clearSearch()});a=r`${l("all","All notes")}${l("blog","Blog articles")}${l("local","Local notes")}
        ${i(this.syncingBlog?"Syncing blog…":"Sync from blog","redo-2",()=>void this.syncBlogLibrary(),this.syncingBlog||!this.blogConnected)}
        ${i("Manage blog tags","type",()=>void this.openTags(!0))}`}if(this.tbMenu==="featured-image"){const l=this.activeBlog?.featuredImage;a=r`<div class="px-1 text-sm font-semibold mb-2">Featured image</div>
        ${l?r`<img src=${l} alt="Featured image" class="w-full rounded-lg mb-2" style="max-height:160px;object-fit:cover" />`:c}
        ${i(l?"Change image":"Choose image","image",()=>void this.openMedia("featured"),this.tagSaving||this.blogBusy)}
        ${l?i("Remove image","trash-2",()=>void this.saveFeaturedImage(""),this.tagSaving||this.blogBusy):c}
        <p class="px-1 mt-2 text-xs text-muted">Used for the blog preview and sharing. Without one, the first image in the note is used.</p>`}if(this.tbMenu==="tags"){const l=this.activeBlog?.categories??[],h=u=>{const p=u.trim();p&&!l.some(m=>m.toLocaleLowerCase()===p.toLocaleLowerCase())&&this.saveTags([...l,p])};a=r`<div class="text-sm font-semibold mb-2">Tags</div>
        <div class="flex flex-wrap gap-1 mb-2">${l.map(u=>r`<button type="button" class="px-2 py-1 rounded-full bg-accent-soft text-sm" aria-label=${`Remove tag ${u}`} ?disabled=${this.tagSaving} @click=${()=>void this.saveTags(l.filter(p=>p!==u))}>${u} ×</button>`)}</div>
        <input type="text" aria-label="Add tag" ?disabled=${this.tagSaving} placeholder="Add tag" class="w-full rounded-lg border border-line px-2 py-1.5 text-base"
          @blur=${u=>{const p=u.target;p.value.trim()&&(h(p.value),p.value="")}} @keydown=${u=>{u.key==="Enter"&&(u.preventDefault(),u.stopPropagation(),h(u.target.value),u.target.value="")}} />
        <div class="mt-2 flex flex-wrap gap-1">${this.allBlogTags.filter(u=>!l.includes(u.name)).map(u=>r`<button type="button" class="px-2 py-1 rounded-full text-sm hover:bg-hover" ?disabled=${this.tagSaving} @click=${()=>h(u.name)}>${u.name}</button>`)}</div>`}if(this.tbMenu==="manage-tags"&&(a=r`<div class="text-sm font-semibold mb-2">Blog tags</div>
        ${this.allBlogTags.length?this.allBlogTags.map(l=>r`<div class="flex items-center gap-2 mb-2"><input type="text" aria-label=${`Rename tag ${l.name}`} title="Rename this tag across all blog articles" class="w-full min-w-0 rounded-lg border border-line px-2 py-1 text-base" .value=${l.name} ?disabled=${this.blogBusy}
          @blur=${h=>void this.renameTag(l.name,h.target.value)} @keydown=${h=>{h.key==="Enter"&&h.target.blur(),h.key==="Escape"&&(h.target.value=l.name)}} /><span class="text-xs text-muted">${l.count}</span></div>`):r`<p class="text-sm text-muted">Add tags from an article’s actions menu.</p>`}`),this.tbMenu==="shortcuts"){const l=[["New note",`${Ct}N`],["Search notes",`${Ct}Shift+F`],["Show / hide list",`${Ct}\\`],["Save now",`${Ct}S`],["Bold / italic / underline",`${Ct}B / I / U`],["Undo",`${Ct}Z`],["Redo",`${Ct}Shift+Z`],["Checklist",`${Ct}Shift+9`],["Bullet list",`${Ct}Shift+8`],["Numbered list",`${Ct}Shift+7`],["Heading 1, 2, 3",`${Ct}Alt+1 / 2 / 3`]];a=r`<div class="px-1"><div class="text-sm font-semibold mb-2">Keyboard shortcuts</div>
        <dl class="space-y-2">${l.map(([h,u])=>r`<div class="flex items-center justify-between gap-3 text-xs"><dt>${h}</dt><dd class="shrink-0 font-mono text-muted">${u}</dd></div>`)}</dl>
      </div>`}return r`<div @keydown=${this.onToolbarMenuKey}>${a}</div>`}renderEmpty(){return r`
      <div class="h-full flex flex-col items-center justify-center gap-3">
        <div class="text-sm text-muted">${this.files.length?"Pick a note, or start a new one.":"No notes yet."}</div>
        <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          @click=${()=>this.newNote()}>${X("square-pen")} New note</button>
      </div>`}render(){const t=this.activeName!==null||this.isDraft,e=this.wide?!this.sidebarHidden:this.view==="list",s=this.wide||this.view==="note";return r`
      <div class="relative flex flex-1 min-h-0 h-full ${this.dragName?"cursor-grabbing":""}">
        <aside id="notes-list" aria-label="Notes list"
          class="${e?"flex":"hidden"} flex-col min-h-0 ${this.wide?"shrink-0":"flex-1 min-w-0"}"
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
        </div>`:c}
        <section class="notes-editor-pane ${s?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderNoteHeader()}
          ${this.error?r`<div class="px-4 pt-1 text-xs font-mono" style="color:#c87a3a;">notes error: ${this.error}</div>`:c}
          <div class="notes-content-scroll flex-1 min-h-0 overflow-y-auto">
            <div id="note-host" class="h-full ${t?"":"hidden"}"></div>
            ${!t&&this.initialized?this.renderEmpty():c}
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
            @insert=${i=>this.onMediaInsert(i.detail)}></notes-media-library>`:c}
        ${this.uploading?r`
          <div class="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface shadow-md text-xs text-ink">
            <span class="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin"></span>
            Uploading ${this.uploading>1?`${this.uploading} images`:"image"}… ${this.uploadPct}%
          </div>`:c}
        ${this.toast?r`
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-xl bg-ink text-surface text-sm shadow-lg text-center" style="max-width:calc(100% - 2rem)">
            <span>${this.toast.text}</span>
            ${this.toast.undo?r`<button type="button" class="font-semibold hover:underline" @click=${this.toast.undo}>Undo</button>`:c}
          </div>`:c}
      </div>
    `}};O([d()],M.prototype,"files",2);O([d()],M.prototype,"trashCount",2);O([d()],M.prototype,"activeName",2);O([d()],M.prototype,"isDraft",2);O([d()],M.prototype,"error",2);O([d()],M.prototype,"initialized",2);O([d()],M.prototype,"wide",2);O([d()],M.prototype,"view",2);O([d()],M.prototype,"sidebarHidden",2);O([d()],M.prototype,"sidebarWidth",2);O([d()],M.prototype,"searchQ",2);O([d()],M.prototype,"hits",2);O([d()],M.prototype,"trashOpen",2);O([d()],M.prototype,"trashItems",2);O([d()],M.prototype,"toast",2);O([d()],M.prototype,"tbMenu",2);O([d()],M.prototype,"blogEnabled",2);O([d()],M.prototype,"blogConnected",2);O([d()],M.prototype,"blogBusy",2);O([d()],M.prototype,"tagSaving",2);O([d()],M.prototype,"syncingBlog",2);O([d()],M.prototype,"activeBlog",2);O([d()],M.prototype,"blogLocalDirty",2);O([d()],M.prototype,"noteFilter",2);O([d()],M.prototype,"allBlogTags",2);O([d()],M.prototype,"blogDeleteName",2);O([d()],M.prototype,"publishConfirm",2);O([d()],M.prototype,"pinnedCollapsed",2);O([d()],M.prototype,"editorTick",2);O([d()],M.prototype,"liveTitle",2);O([d()],M.prototype,"dragName",2);O([d()],M.prototype,"dropAt",2);O([d()],M.prototype,"mediaOpen",2);O([d()],M.prototype,"uploading",2);O([d()],M.prototype,"uploadPct",2);M=O([w("companion-notes")],M);var fu=Object.getOwnPropertyDescriptor,gu=(t,e,s,i)=>{for(var n=i>1?void 0:i?fu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let or=class extends T{render(){return r`<companion-notes class="flex flex-col flex-1 min-h-0"></companion-notes>`}};or=gu([w("companion-workspace")],or);const tl="mana.owl.hidden",On="mana-owl-visibility";function el(){try{const e=localStorage.getItem(tl);return e===null?!0:e==="1"}catch{return!0}}function ai(t){try{localStorage.setItem(tl,t?"1":"0")}catch{}window.dispatchEvent(new CustomEvent(On,{detail:{hidden:t}}))}var bu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,co=(t,e,s,i)=>{for(var n=i>1?void 0:i?vu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&bu(e,s,n),n};let wi=class extends T{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return r`
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
    `}};co([b({type:Boolean})],wi.prototype,"checked",2);co([b({type:Boolean})],wi.prototype,"disabled",2);wi=co([w("sc-toggle")],wi);var xu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,ds=(t,e,s,i)=>{for(var n=i>1?void 0:i?yu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&xu(e,s,n),n};function wu(t){const e=Wn.map(s=>({id:s.id,label:s.note?`${s.label} (${s.note})`:s.label}));return e.some(s=>s.id===t)||e.push({id:t,label:t}),e}function ku(){return Wn.filter(t=>t.provider==="anthropic").map(t=>({id:t.id,label:t.id===yn?`${t.label} (tested)`:t.label}))}const $u={normal:"Normal (tested)",low:"Low",medium:"Medium",high:"High"};function Su(t){return t.code.startsWith("Key")?t.code.slice(3):t.code.startsWith("Digit")?t.code.slice(5):/^F\d{1,2}$/.test(t.key)||t.key.length===1&&t.key!=="+"&&t.key.trim()?t.key:null}async function Tu(t){const i=URL.createObjectURL(t);try{const n=await new Promise((m,g)=>{const v=new Image;v.onload=()=>m(v),v.onerror=()=>g(new Error("could not decode image")),v.src=i}),o=Math.min(1,256/Math.max(n.width,n.height)),a=Math.max(1,Math.round(n.width*o)),l=Math.max(1,Math.round(n.height*o)),h=document.createElement("canvas");h.width=a,h.height=l;const u=h.getContext("2d");if(!u)return await Cu(t);u.drawImage(n,0,0,a,l);const p=h.toDataURL("image/webp",.85);return p.startsWith("data:image/webp")?p:h.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(i)}}function Cu(t){return new Promise((e,s)=>{const i=new FileReader;i.onload=()=>e(String(i.result||"")),i.onerror=()=>s(i.error),i.readAsDataURL(t)})}let Ne=class extends T{constructor(){super(...arguments),this.settingsCtl=new ha(this,f,t=>t.settings),this.myLogin="",this.myRole="",this.myName="",this.recordingShortcut=null,this.shortcutPrompt="Press keys"}connectedCallback(){super.connectedCallback(),Object.keys(f.getState().settings).length===0&&f.getState().loadSettings(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t?.login&&(this.myLogin=t.login,this.myRole=t.role,this.myName=t.displayName||"")}).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}displayNameKey(){return this.myLogin?`user:${this.myLogin}:display_name`:"cockpit.display_name"}get currentDisplayName(){return this.settings[this.displayNameKey()]||""}async setDisplayName(t){await f.getState().setSetting(this.displayNameKey(),t.trim())}get settings(){return this.settingsCtl.state.settings}get currentMentorModel(){return ni(this.settings["cockpit.mentor_model"])}async setMentorModel(t){await f.getState().setSetting("cockpit.mentor_model",t)}get currentCompanionModel(){return Cl(this.settings["cockpit.companion_model"])}async setCompanionModel(t){await f.getState().setSetting("cockpit.companion_model",t)}get currentCompanionEffort(){return El(this.settings["cockpit.companion_effort"])}async setCompanionEffort(t){await f.getState().setSetting("cockpit.companion_effort",t)}shortcutValue(t,e){const s=this.settings[t];return s&&ge(s)?s:e}onShortcutKey(t,e){if(t.key==="Tab")return;t.preventDefault(),t.stopPropagation();const s=t.currentTarget;if(t.key==="Escape")return s.blur();const i=Su(t);if(!i)return;if(!t.metaKey&&!t.ctrlKey&&!t.altKey){this.shortcutPrompt="Add ⌘, ⌃ or ⌥";return}const n=[t.ctrlKey&&"Ctrl",t.altKey&&"Alt",t.shiftKey&&"Shift",t.metaKey&&"Meta"].filter(Boolean);f.getState().setSetting(e,[...n,i].join("+")),s.blur()}renderShortcut(t,e,s){const i=this.shortcutValue(e,s),n=oi(i)===oi(s);return r`
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-sm text-muted hover:text-ink ${n?"invisible":""}"
          ?disabled=${n}
          @click=${()=>void f.getState().setSetting(e,s)}
        >Reset</button>
        <input
          type="text"
          readonly
          aria-label=${t}
          class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink caret-transparent cursor-pointer focus:outline-none focus:border-accent min-w-[200px]"
          .value=${this.recordingShortcut===e?"":oi(i)}
          placeholder=${this.shortcutPrompt}
          @focus=${()=>{this.recordingShortcut=e,this.shortcutPrompt="Press keys"}}
          @blur=${()=>{this.recordingShortcut=null}}
          @keydown=${o=>this.onShortcutKey(o,e)}
        />
      </div>
    `}get chatHidden(){return this.settings["cockpit.chat_hidden"]==="1"}async setChatHidden(t){await f.getState().setSetting("cockpit.chat_hidden",t?"1":"0")}resetDemo(){if(window.confirm("Reset the demo? This clears your changes and restores the sample cockpit.")){for(let t=localStorage.length-1;t>=0;t--){const e=localStorage.key(t);e&&e.startsWith("mana.demo.")&&localStorage.removeItem(e)}location.reload()}}get currentProfilePic(){const t=this.settings[this.profilePicKey()],e=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return t||e||""}async onProfilePicFile(t){const e=t.target,s=e.files?.[0];if(!s||!s.type.startsWith("image/"))return;const i=await Tu(s),{url:n}=await C.uploads.upload(i,!1);await f.getState().setSetting(this.profilePicKey(),n),e.value=""}async clearProfilePic(){await f.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await f.getState().setSetting("cockpit.profile_pic_url","")}renderRow(t,e,s){return r`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${t}</div>
          <div class="text-sm text-muted mt-0.5">${e}</div>
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
                  >Clear</button>`:c}
            </div>
          `)}
        ${this.renderRow("Chat model","The AI model your Workshop chats run on.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentMentorModel}
              @change=${t=>this.setMentorModel(t.target.value)}
            >
              ${wu(this.currentMentorModel).map(t=>r`<option value=${t.id} ?selected=${t.id===this.currentMentorModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana model",`The model Mana itself runs on. Claude only. ${xn(yn)?.label??yn} is the only one that has passed its behaviour test.`,r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionModel}
              @change=${t=>this.setCompanionModel(t.target.value)}
            >
              ${ku().map(t=>r`<option value=${t.id} ?selected=${t.id===this.currentCompanionModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana effort","How long Mana thinks before it answers. Normal is the only level that has passed its behaviour test. Low answers about a second sooner.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionEffort}
              @change=${t=>this.setCompanionEffort(t.target.value)}
            >
              ${Dl.map(t=>r`<option value=${t} ?selected=${t===this.currentCompanionEffort}>${$u[t]}</option>`)}
            </select>
          `)}
        ${this.renderRow("Dictation shortcut","Talk to Mana instead of typing: press it once to start, again to stop.",this.renderShortcut("Dictation shortcut",fi,mi))}
        ${this.renderRow("Open Mana","Opens Mana from anywhere, ready to type. Press it again to close.",this.renderShortcut("Open Mana shortcut",Ra,La))}
        ${this.renderRow("Show the owl","On this device only. Hidden, the Open Mana or dictation shortcut brings it back.",r`
            <sc-toggle
              .checked=${!el()}
              @sc-change=${t=>{ai(!t.detail.checked),this.requestUpdate()}}
            ></sc-toggle>
          `)}
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
    `}};ds([d()],Ne.prototype,"myLogin",2);ds([d()],Ne.prototype,"myRole",2);ds([d()],Ne.prototype,"myName",2);ds([d()],Ne.prototype,"recordingShortcut",2);ds([d()],Ne.prototype,"shortcutPrompt",2);Ne=ds([w("settings-general")],Ne);var Eu=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,sl=(t,e,s,i)=>{for(var n=i>1?void 0:i?Du(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Eu(e,s,n),n};let Ln=class extends T{constructor(){super(...arguments),this.groups=[]}connectedCallback(){super.connectedCallback(),C.notifications.kinds().then(t=>{this.groups=t.kinds}).catch(()=>{})}async toggle(t,e){this.groups=this.groups.map(s=>s.kind===t?{...s,enabled:e}:s),await C.notifications.mute(t,e).catch(()=>{})}render(){return r`
      <div class="max-w-3xl">
        ${this.groups.map(t=>r`
            <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
              <div class="flex-1">
                <div class="font-semibold text-ink">${t.label}</div>
                <div class="text-sm text-muted mt-0.5">${t.description}</div>
              </div>
              <div class="shrink-0 flex items-center">
                <sc-toggle
                  .checked=${t.enabled}
                  @sc-change=${e=>void this.toggle(t.kind,e.detail.checked)}
                ></sc-toggle>
              </div>
            </div>
          `)}
        <p class="text-sm text-muted pt-5">Alerts that something in Mana broke always show.</p>
      </div>
    `}};sl([d()],Ln.prototype,"groups",2);Ln=sl([w("settings-notifications")],Ln);var Pu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Xt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Au(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Pu(e,s,n),n};const Mu="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",Iu="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",_u=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let Bt=class extends T{constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[t,e]=await Promise.all([fetch("/api/memory/status").then(s=>s.ok?s.json():null),fetch("/api/memory/files").then(s=>s.ok?s.json():null)]);t&&(this.status=t),e&&(this.files=e.files)}catch{}}async toggle(t){const e=t.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:e})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let t=0;t<12;t++)await new Promise(e=>setTimeout(e,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(t){try{const e=await fetch(`/api/memory/files/${encodeURIComponent(t.relPath)}`);if(e.ok){const s=await e.json();this.editing=!1,this.viewing={title:this.prettyName(t),relPath:t.relPath,content:s.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(t){if(!t)return"never";const e=Number(t);return Number.isFinite(e)?new Date(e*1e3).toLocaleString():"never"}statusLine(t){if(!t)return null;if(t.startsWith("error"))return`Last run hit a problem: ${t.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(t))return"Last run found nothing new to add.";const e=/(\d+)B/.exec(t);return e&&e[1]?`Last run added ${(Number(e[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const t=this.status;if(!t)return r`<p class="text-muted text-xs">Loading…</p>`;const e=this.viewing!=null;return r`
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
                .checked=${t.enabled}
                @change=${this.toggle}
                class="w-4 h-4"
              />
              <span class="font-medium">Keep my memory up to date each night</span>
            </label>
            <div class="text-xs text-muted space-y-0.5 pl-7">
              <div>Last reflection: ${this.formatTs(t.lastRun)}</div>
              ${this.statusLine(t.lastStatus)?r`<div>${this.statusLine(t.lastStatus)}</div>`:c}
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
                  <div class="${e?"hidden lg:block":"block"} lg:pr-1">
                    ${this.renderGroups()}
                  </div>
                  <!-- Preview (right on desktop, full-height card on mobile). -->
                  <div class="${e?"block":"hidden lg:flex"} lg:flex flex-col border border-line rounded mt-4 lg:mt-0 lg:overflow-hidden h-[calc(100dvh-220px)] lg:sticky lg:top-4 lg:h-[calc(100dvh-160px)]">
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
          <p class="text-muted leading-relaxed">${Mu}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${Iu}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
      <div class="space-y-4">
        ${_u.map(t=>{const e=this.files.filter(s=>s.group===t.key).sort((s,i)=>i.modifiedAt-s.modifiedAt);return e.length===0?c:r`
            <div>
              <div class="text-ink font-medium">${t.label}</div>
              <div class="text-xs text-muted mb-1.5">${t.blurb}</div>
              <ul class="divide-y divide-line border border-line rounded">
                ${e.map(s=>r`
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
    `}prettyName(t){const e=/^observations-(\d{4})-(\d{2})\.md$/.exec(t.name);if(e&&e[1]&&e[2])return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e[2])-1]??e[2]} ${e[1]}`;const s=t.name.replace(/\.md$/,"").replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)}renderPreview(){if(!this.viewing)return r`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Select a note to read it.
        </div>
      `;const t=this.editing;return r`
      <header class="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-line shrink-0">
        <span class="text-sm font-semibold text-ink truncate">${this.viewing.title}</span>
        <div class="flex items-center gap-2 shrink-0">
          ${t?c:r`<button
                type="button"
                class="text-xs text-muted hover:text-ink"
                @click=${this.startEdit}
              >Edit</button>`}
          ${t?c:r`<button
                type="button"
                class="lg:hidden text-muted hover:text-ink text-lg leading-none px-1"
                @click=${this.closeViewer}
                aria-label="Close preview"
              >×</button>`}
        </div>
      </header>
      ${t?r`
            <textarea
              class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink text-xs font-mono leading-relaxed resize-none outline-none"
              .value=${this.draft}
              @input=${e=>this.draft=e.target.value}
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
              ${V(H.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};Xt([d()],Bt.prototype,"status",2);Xt([d()],Bt.prototype,"files",2);Xt([d()],Bt.prototype,"running",2);Xt([d()],Bt.prototype,"viewing",2);Xt([d()],Bt.prototype,"editing",2);Xt([d()],Bt.prototype,"draft",2);Xt([d()],Bt.prototype,"saving",2);Xt([d()],Bt.prototype,"aboutOpen",2);Xt([d()],Bt.prototype,"aboutNotesOpen",2);Bt=Xt([w("settings-memory")],Bt);var Ou=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Li=(t,e,s,i)=>{for(var n=i>1?void 0:i?Lu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ou(e,s,n),n};const gs=[{id:"general",label:"General"},{id:"notifications",label:"Notifications"},{id:"memory",label:"Memory"}];let Ps=class extends T{constructor(){super(...arguments),this.section="general",this.active="general",this.mobileView="list",this.handleKeydown=t=>{if(t.key==="Escape"){this.requestClose();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable))return;const s=gs.findIndex(o=>o.id===this.active);if(s<0)return;const i=t.key==="ArrowDown"?Math.min(s+1,gs.length-1):Math.max(s-1,0),n=gs[i];i!==s&&n&&(t.preventDefault(),this.active=n.id,this.mobileView="section")}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?r`<settings-general></settings-general>`:this.active==="notifications"?r`<settings-notifications></settings-notifications>`:this.active==="memory"?r`<settings-memory></settings-memory>`:c}render(){const t=gs.find(s=>s.id===this.active)?.label??"",e=this.mobileView==="list";return r`
      <div class="h-[100dvh] flex flex-col bg-bg text-ink">
        <header
          class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line shrink-0"
        >
          <div class="flex items-center gap-2 text-base min-w-0">
            <!-- Mobile back button when viewing a section -->
            ${e?"":r`
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
              <span class="text-muted truncate">${t}</span>
            `}
          </div>
          <!-- A labelled button reads as the way out; a bare × in the corner was easy to miss. -->
          <button
            type="button"
            class="h-8 px-3 flex items-center gap-2 rounded-full bg-ink text-surface text-sm font-medium hover:opacity-85 shrink-0"
            title="Close settings (Esc)"
            @click=${()=>this.requestClose()}
          >
            Done
            <kbd class="hidden lg:inline text-[11px] font-normal opacity-70">Esc</kbd>
          </button>
        </header>

        <div class="flex-1 min-h-0 lg:grid lg:grid-cols-[200px_1fr]">
          <!-- Nav: full-width on mobile when on list view; sidebar on desktop -->
          <nav class="
            border-line py-4 px-3 space-y-1
            ${e?"block":"hidden"}
            lg:block lg:border-r lg:overflow-y-auto
          ">
            ${gs.map(s=>r`
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
            ${e?"hidden":"block"}
            lg:block
          ">
            ${this.renderActive()}
          </section>
        </div>
      </div>
    `}};Li([b()],Ps.prototype,"section",2);Li([d()],Ps.prototype,"active",2);Li([d()],Ps.prototype,"mobileView",2);Ps=Li([w("settings-page")],Ps);var Ru=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Ri=(t,e,s,i)=>{for(var n=i>1?void 0:i?Nu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ru(e,s,n),n};const ju=.018,Fu=.01,Uu=600,Bu=250,Hu=300,rr=16e3;let As=class extends T{constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.audioCtx=null,this.mic=null,this.source=null,this.processor=null,this.threadId=null,this.starting=!1,this.ttsSource=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.srcRate=48e3,this.muted=!1,this.processing=!1,this.onToggle=()=>{this.audioCtx?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.audioCtx&&this.stopTalk()},this.speakQueue=[],this.pumpPromise=null}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.audioCtx&&this.stopTalk()}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const t=this.audioCtx!==null;try{window.speechSynthesis.cancel()}catch{}this.speakQueue=[];try{this.ttsSource?.stop(),this.ttsSource=null}catch{}try{this.processor?.disconnect()}catch{}try{this.source?.disconnect()}catch{}try{await this.audioCtx?.close()}catch{}if(this.mic)for(const e of this.mic.getTracks())e.stop();this.processor=null,this.source=null,this.audioCtx=null,this.mic=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.muted=!1,this.processing=!1,this.speaking=null,this.status!=="error"&&(this.status="idle"),t&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}onAudio(t){if(this.muted||this.processing)return;const e=t.inputBuffer.getChannelData(0),s=new Float32Array(e),i=s.length/this.srcRate*1e3;let n=0;for(let a=0;a<s.length;a++)n+=s[a]*s[a];const o=Math.sqrt(n/s.length);if(!this.inSpeech){for(this.preroll.push(s),this.prerollMs+=i;this.prerollMs>Hu&&this.preroll.length>1;){const a=this.preroll.shift();this.prerollMs-=a.length/this.srcRate*1e3}o>=ju&&(this.inSpeech=!0,this.speechMs=0,this.silenceMs=0,this.utterance=[...this.preroll],this.preroll=[],this.prerollMs=0,this.speaking="user");return}if(this.utterance.push(s),this.speechMs+=i,o<Fu?this.silenceMs+=i:this.silenceMs=0,this.silenceMs>=Uu){const a=this.utterance,l=this.speechMs-this.silenceMs;this.inSpeech=!1,this.utterance=[],this.speechMs=0,this.silenceMs=0,l>=Bu&&this.finishUtterance(a)}}async finishUtterance(t){this.processing=!0,this.muted=!0,this.speaking="thinking",this.ackBlip();try{const e=Wu(qu(Ku(t),this.srcRate,rr),rr),{text:s}=await C.voice.stt(e),i=(s||"").trim();if(!i||/^[\s.,!?-]*$/.test(i))return;this.dispatchTranscript({role:"user",text:i});let n="",o="";for await(const l of _a({threadId:this.threadId,message:i,kind:"voice",voice:!0}))if(l.type==="thread")l.threadId!==this.threadId&&(this.threadId=l.threadId);else if(l.type==="text")n+=l.text,o=this.enqueueCompleteSentences(o+l.text);else if(l.type==="ops")this.refreshOps([l.action]);else if(l.type==="error")throw new Error(l.error);for(const l of zu(o))this.enqueueSpeech(l);const a=n.trim();a&&this.dispatchTranscript({role:"mentor",text:a}),await this.drainSpeech()}catch(e){const s=e instanceof Error?e.message:String(e);this.errorMessage=`voice: ${s}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage})}finally{this.processing=!1,this.muted=!1,this.status==="active"&&(this.speaking="user")}}enqueueCompleteSentences(t){const e=t.match(/[^.!?…]+[.!?…]+["')\]]*\s*/g);if(!e)return t;const s=e.join("");let i="";for(const n of e)i+=n,i.trim().length>=20&&(this.enqueueSpeech(i.trim()),i="");return i+t.slice(s.length)}enqueueSpeech(t){t&&(this.speakQueue.push(t),this.pumpPromise||(this.pumpPromise=this.pumpSpeech().finally(()=>{this.pumpPromise=null;const e=this.speakQueue.shift();e&&this.audioCtx&&this.enqueueSpeech(e)})))}async pumpSpeech(){let t=null;for(;this.audioCtx;){if(!t){const n=this.speakQueue.shift();if(n===void 0)break;t={text:n,blob:this.fetchTts(n)}}const e=t,s=await e.blob,i=this.speakQueue.shift();if(t=i!==void 0?{text:i,blob:this.fetchTts(i)}:null,!this.audioCtx)return;s?await this.playWav(s):await this.speakFallback(e.text)}}async drainSpeech(){for(;this.pumpPromise;)await this.pumpPromise}ackBlip(){const t=this.audioCtx;if(t)try{const e=t.currentTime,s=t.createOscillator(),i=t.createGain();s.type="sine",s.frequency.setValueAtTime(660,e),s.frequency.setValueAtTime(880,e+.09),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.08,e+.02),i.gain.exponentialRampToValueAtTime(1e-4,e+.18),s.connect(i),i.connect(t.destination),s.start(e),s.stop(e+.2)}catch{}}async fetchTts(t){try{return await C.voice.tts(t)}catch{return null}}async playWav(t){const e=this.audioCtx;if(!e)return;const s=await e.decodeAudioData(await t.arrayBuffer());await new Promise(i=>{const n=e.createBufferSource();n.buffer=s,n.connect(e.destination),this.ttsSource=n;let o=!1,a;const l=()=>{o||(o=!0,a&&clearTimeout(a),this.ttsSource===n&&(this.ttsSource=null),i())};n.onended=l,a=setTimeout(l,s.duration*1e3+1500),this.speaking="mentor",n.start()})}speakFallback(t){return new Promise(e=>{let s=!1;const i=()=>{s||(s=!0,e())};try{const n=new SpeechSynthesisUtterance(t);n.lang="en-US",n.onstart=()=>{this.speaking="mentor"},n.onend=i,n.onerror=i,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n),setTimeout(i,Math.min(6e4,1500+t.length*80))}catch{i()}})}refreshOps(t){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:t}));const e=t.find(s=>s.week)?.week;document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:e},bubbles:!0,composed:!0}))}dispatchTranscript(t){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:t,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return c;const t=this.status==="connecting"?"starting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="thinking"?"thinking…":this.speaking==="mentor"?"speaking…":"listening…",e=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent animate-pulse";return r`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${e}"></span>
        <span>${t}</span>
      </div>
    `}};Ri([d()],As.prototype,"status",2);Ri([d()],As.prototype,"errorMessage",2);Ri([d()],As.prototype,"speaking",2);As=Ri([w("voice-controller")],As);function zu(t){const e=t.replace(/\s+/g," ").trim();if(!e)return[];const s=e.match(/[^.!?…]+[.!?…]+["')\]]*\s*|[^.!?…]+$/g)??[e],i=[];let n="";for(const o of s)n+=o,n.trim().length>=20&&(i.push(n.trim()),n="");return n.trim()&&i.push(n.trim()),i}function Ku(t){let e=0;for(const n of t)e+=n.length;const s=new Float32Array(e);let i=0;for(const n of t)s.set(n,i),i+=n.length;return s}function qu(t,e,s){if(s>=e)return t;const i=e/s,n=Math.floor(t.length/i),o=new Float32Array(n);for(let a=0;a<n;a++){const l=a*i,h=Math.floor(l),u=Math.min(h+1,t.length-1),p=l-h;o[a]=t[h]*(1-p)+t[u]*p}return o}function Wu(t,e){const s=new ArrayBuffer(44+t.length*2),i=new DataView(s),n=(a,l)=>{for(let h=0;h<l.length;h++)i.setUint8(a+h,l.charCodeAt(h))};n(0,"RIFF"),i.setUint32(4,36+t.length*2,!0),n(8,"WAVE"),n(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,e,!0),i.setUint32(28,e*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),n(36,"data"),i.setUint32(40,t.length*2,!0);let o=44;for(let a=0;a<t.length;a++,o+=2){const l=Math.max(-1,Math.min(1,t[a]));i.setInt16(o,l<0?l*32768:l*32767,!0)}return new Blob([s],{type:"audio/wav"})}class ho{constructor(e,s){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=i=>{this.armedId=i,this.host.requestUpdate()},this.disarm=()=>{this.armedId=null,this.host.requestUpdate()},this.isDragging=i=>this.armedId===i||this.draggingId===i,this.onPointerDown=(i,n,o=i.currentTarget)=>{if(!this.hitTest||i.button!==0)return;i.preventDefault(),this.stopPointer?.(),o.focus(),o.setPointerCapture(i.pointerId);const a=i.clientX,l=i.clientY;let h=null;const u=v=>{if(v.pointerId!==i.pointerId||this.draggingId===null&&Math.hypot(v.clientX-a,v.clientY-l)<6)return;this.draggingId=n;const x=this.hitTest(v.clientX,v.clientY),A=x&&(this.axis==="x"?v.clientX<x.rect.left+x.rect.width/2:v.clientY<x.rect.top+x.rect.height/2)?"before":"after";h=x?{index:x.index,pos:A}:null,(this.overId!==(x?.id??null)||this.overPos!==A)&&(this.overId=x?.id??null,this.overPos=A,this.host.requestUpdate())},p=()=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),o.hasPointerCapture(i.pointerId)&&o.releasePointerCapture(i.pointerId),this.stopPointer=void 0,this.onDragEnd()},m=v=>{if(v.pointerId!==i.pointerId)return;const x=h,A=this.draggingId!==null;p(),A&&x&&this.onReorder(n,x.index+(x.pos==="after"?1:0))},g=()=>p();this.stopPointer=p,window.addEventListener("pointermove",u),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",g)},this.onDragStart=(i,n)=>{if(this.armedId!==n){i.preventDefault();return}this.draggingId=n,i.dataTransfer&&(i.dataTransfer.setData(this.type,String(n)),i.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(i,n,o)=>{if(!i.dataTransfer?.types.includes(this.type))return;i.preventDefault(),i.dataTransfer.dropEffect="move";const a=i.currentTarget.getBoundingClientRect(),l=(this.axis==="x"?i.clientX<a.left+a.width/2:i.clientY<a.top+a.height/2)?"before":"after";(this.overId!==n||this.overPos!==l)&&(this.overId=n,this.overPos=l,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(i,n,o)=>{const a=i.dataTransfer?.getData(this.type),l=a?Number(a):NaN,h=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(l))return;i.preventDefault();const u=h==="after"?o+1:o;this.onReorder(l,u)},this.dropClass=i=>this.axis==="x"?this.overId!==i?"border-l-2 border-r-2 border-transparent":this.overPos==="before"?"border-l-2 border-l-accent border-r-2 border-r-transparent":"border-r-2 border-r-accent border-l-2 border-l-transparent":this.overId!==i?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=e,this.type=s.type,this.axis=s.axis??"y",this.onReorder=s.onReorder,this.hitTest=s.hitTest,e.addController(this)}hostDisconnected(){this.stopPointer?.(),this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var Gu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Vu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Gu(e,s,n),n};const Yu=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let Z=class extends T{constructor(){super(...arguments),this.items=[],this.loading=!0,this.adding=!1,this.error="",this.boughtExpanded=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.sortMode=localStorage.getItem("cockpit.grocery_sort")==="type"?"type":localStorage.getItem("cockpit.grocery_sort")==="manual"?"manual":"az",this.settingsOpen=!1,this.expiryEnabled=localStorage.getItem("cockpit.grocery_expiry")!=="0",this.list=localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery",this.poll=null,this.drag=new ho(this,{type:"text/x-grocery-id",onReorder:(t,e)=>this.reorder(t,e)}),this._closeMenus=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null),this.settingsOpen&&(this.settingsOpen=!1)},this.onShoppingChanged=t=>{const e=t.detail;if(!e||e.list!=="grocery"&&e.list!=="buy"||this.adding&&this.list!==e.list)return;e.ack?.();const s=this.list!==e.list;if(s&&this.setList(e.list),e.sort==="az"||e.sort==="type"||e.sort==="manual"){this.sortMode=e.sort;try{localStorage.setItem("cockpit.grocery_sort",e.sort)}catch{}}if(typeof e.expiry=="boolean"){this.expiryEnabled=e.expiry;try{localStorage.setItem("cockpit.grocery_expiry",e.expiry?"1":"0")}catch{}}typeof e.bought=="boolean"&&(this.boughtExpanded=e.bought),!s&&this.editingId===null&&this.editingExpiryId===null&&!this.adding&&this.refresh()}}setList(t){if(!(this.list===t||this.adding)){this.list=t,this.draftActive=!1,this.draftValue="",this.error="",this.boughtExpanded=!1,this.items=[],this.loading=!0;try{localStorage.setItem("cockpit.shopping_tab",t)}catch{}this.refresh()}}toggleSort(){this.sortMode=this.sortMode==="az"?"type":"az";try{localStorage.setItem("cockpit.grocery_sort",this.sortMode)}catch{}}toggleExpiry(){this.expiryEnabled=!this.expiryEnabled;try{localStorage.setItem("cockpit.grocery_expiry",this.expiryEnabled?"1":"0")}catch{}}inferCategory(t){const e=t.toLowerCase(),s=(...i)=>i.some(n=>e.includes(n));return s("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":s("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":s("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":s("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":s("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":s("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}gearIcon(){return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>`}renderSettings(){return r`<div
      class="absolute right-0 top-full mt-1 z-30 w-56 p-2 rounded-lg border border-line bg-surface shadow-lg"
      @click=${t=>t.stopPropagation()}
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
    </div>`}connectedCallback(){super.connectedCallback(),this.refresh(),document.addEventListener("click",this._closeMenus),window.addEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll=setInterval(()=>{this.editingId===null&&this.editingExpiryId===null&&this.emojiPickerFor===null&&!this.draftActive&&!this.drag.active&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._closeMenus),window.removeEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll&&clearInterval(this.poll)}async refresh(){const t=this.list;try{const e=await fetch(`/api/grocery?list=${t}`);if(!e.ok)throw new Error;const s=await e.json();if(this.list!==t)return;this.items=s.items}catch{this.list===t&&this.loading&&(this.error="Couldn't load your items. Please reopen this tab to try again.")}this.list===t&&(this.loading=!1)}itemText(t){return[t.quantity?.trim(),t.name].filter(Boolean).join(" ")}openDraft(){this.draftActive=!0,this.error="",this.updateComplete.then(()=>this.focusDraft())}cancelDraft(){this.adding||(this.draftActive=!1,this.draftValue="",this.error="")}async setStatus(t,e){await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:e})}),await this.refresh()}async rename(t,e){if(this.editingId!==t.id)return!1;this.editingId=null;const s=e.trim();if(!s||s===this.itemText(t))return!0;try{if(!(await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:s,quantity:null})})).ok)throw new Error;return this.error="",await this.refresh(),!0}catch{return this.error="Couldn't update this item. Please try again.",!1}}async commitName(t,e,s){await this.rename(t,e)&&s&&this.openDraft()}focusDraft(){this.renderRoot?.querySelector(".grocery-draft")?.focus()}async commitDraft(t){if(!this.draftActive||this.adding)return;const e=this.draftValue.trim();if(!e){this.cancelDraft();return}this.adding=!0,this.error="";try{if(!(await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,list:this.list})})).ok)throw new Error;this.draftValue="",await this.refresh(),this.draftActive=t,t&&this.updateComplete.then(()=>this.focusDraft())}catch{this.error="Couldn't add this item. Your text is still here. Try again."}finally{this.adding=!1}}async reorder(t,e){if(!(await fetch(`/api/grocery/${t}/reorder`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({targetIndex:e})})).ok){this.error="Could not save the item order. Please try again.";return}this.sortMode="manual";try{localStorage.setItem("cockpit.grocery_sort","manual")}catch{}await this.refresh()}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const s=[.../‍/.test(t)?t:t.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(t){const e=t.emoji,s=e?this.iconUrl(e):null,i=s?r`<img src=${s} alt="" class="w-[18px] h-[18px] select-none" draggable="false" />`:e?r`<span class="text-[15px] leading-none">${e}</span>`:r`<span class="text-muted/40 text-[13px] leading-none">🛒</span>`;return r`<button
      type="button"
      class="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px]"
      title="Change icon"
      @dblclick=${n=>{n.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===t.id?null:t.id}}
    >${i}</button>`}async pickEmoji(t,e){this.emojiPickerFor=null,await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({emoji:e||null})}),await this.refresh()}renderEmojiPalette(t){return r`<div
      class="absolute left-0 top-full mt-1 z-30 w-56 p-1.5 rounded-lg border border-line bg-surface shadow-lg flex flex-wrap gap-0.5"
      @click=${e=>e.stopPropagation()}
    >
      ${Yu.map(e=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
          @click=${()=>void this.pickEmoji(t,e)}>${e}</button>`)}
      <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>void this.pickEmoji(t,"")}>none</button>
    </div>`}async removeItem(t){await fetch(`/api/grocery/${t.id}`,{method:"DELETE"}),await this.refresh()}async setExpiryDays(t,e){this.editingExpiryId=null;const s=Math.round(Number(e));if(!Number.isFinite(s))return;const i=t.bought_at?Math.floor(Date.now()/1e3-t.bought_at)/86400:0,n=Math.max(0,Math.round(i)+s);await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({shelf_life_days:n})}),await this.refresh()}fmtDuration(t){const e=Math.abs(t);return e<30?`${t}d`:e<365?`${Math.round(t/30)}m`:`${Math.round(t/365)}y`}hourglass(){return r`<svg class="hidden" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 2h12a1 1 0 0 1 0 2h-1v2.5a5 5 0 0 1-1.9 3.92L13 12l2.1 1.58A5 5 0 0 1 17 17.5V20h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1v-2.5a5 5 0 0 1 1.9-3.92L11 12 8.9 10.42A5 5 0 0 1 7 6.5V4H6a1 1 0 0 1 0-2z" />
    </svg>`}expiryInput(t,e){return r`<span class="shrink-0 inline-flex items-center gap-1 text-[10px] text-ink">
      ${this.hourglass()}
      <input
        type="number"
        class="w-10 bg-transparent border-b border-line text-[11px] outline-none text-right"
        .value=${e!=null?String(e):""}
        autofocus
        @keydown=${s=>{s.key==="Enter"?(s.preventDefault(),this.setExpiryDays(t,s.target.value)):s.key==="Escape"&&(this.editingExpiryId=null)}}
        @blur=${s=>void this.setExpiryDays(t,s.target.value)}
      />d
    </span>`}renderExpiry(t){if(this.list==="buy"||!this.expiryEnabled||t.status!=="pantry"||!t.bought_at)return c;if(this.editingExpiryId===t.id){const i=t.shelf_life_days!=null?Math.floor((t.bought_at+t.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(t,i)}if(t.shelf_life_days==null)return c;const e=Math.floor((t.bought_at+t.shelf_life_days*86400-Date.now()/1e3)/86400);if(e>3)return c;const s=e<0?"text-red-600 bg-red-500/10":"text-amber-600 bg-amber-500/10";return r`<button
      type="button"
      class="ml-auto shrink-0 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full leading-none ${s}"
      title="Expiry — click to edit"
      @click=${()=>{this.editingExpiryId=t.id}}
    >${this.hourglass()}${this.fmtDuration(e)}</button>`}renderCheck(t){const e=t.status==="pantry",s=e?"shopping":"pantry";return r`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
        style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
        aria-label=${e?"Move back to shopping":"Mark bought"}
        title=${e?"Bought — click to move back":"Mark bought"}
        @click=${()=>void this.setStatus(t,s)}
      >
        ${e?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8.5 L6.5 12 L13 4.5" />
            </svg>`:c}
      </button>
    `}renderItem(t,e,s=!1){const i=this.editingId===t.id;return r`
      <li
        data-row-key=${`grocery:${t.id}`}
        draggable=${this.drag.isDragging(t.id)?"true":"false"}
        @dragstart=${n=>this.drag.onDragStart(n,t.id)}
        @dragend=${this.drag.onDragEnd}
        @dragover=${n=>this.drag.onDragOver(n,t.id,e)}
        @dragleave=${this.drag.onDragLeave}
        @drop=${n=>this.drag.onDrop(n,t.id,e)}
        class="group relative flex min-h-11 items-center gap-2 px-3 rounded-md hover:bg-hover focus-within:bg-hover ${this.drag.dropClass(t.id)}"
      >
        <span
          class="hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 hover:!opacity-100 select-none leading-none"
          style="font-size:14px;letter-spacing:-1px;"
          title="Drag to reorder"
          @mousedown=${()=>this.drag.arm(t.id)}
          @mouseup=${this.drag.disarm}
        >⠿</span>
        ${this.renderCheck(t)}
        <span class="relative shrink-0">
          ${this.renderIcon(t)}
          ${this.emojiPickerFor===t.id?this.renderEmojiPalette(t):c}
        </span>
        <!-- Content carries the divider, so the line is inset (starts after the
             checkbox) — iOS-list style. Subtle on both mobile and desktop. -->
        <div class="flex-1 min-w-0 flex items-center gap-2 py-2.5 border-b border-line/30">
          ${i?r`<input
                class="flex-1 min-w-0 bg-transparent text-base text-ink outline-none border-b border-accent"
                aria-label="Item"
                .value=${this.itemText(t)}
                autofocus
                @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.commitName(t,n.target.value,s)):n.key==="Escape"&&(this.editingId=null)}}
                @blur=${n=>void this.rename(t,n.target.value)}
              />`:r`<span class="flex-1 min-w-0 text-[17px] text-ink cursor-text break-words" role="button" tabindex="0" aria-label=${`Edit ${this.itemText(t)}`}
                @click=${()=>this.editItem(t)}
                @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.editItem(t))}}>${this.itemText(t)}</span>`}
          ${this.renderExpiry(t)}
        </div>
        <button
          type="button"
          class="shrink-0 grid place-items-center w-7 h-8 rounded text-muted opacity-50 lg:opacity-0 lg:group-hover:opacity-70 group-focus-within:opacity-70 focus-visible:opacity-100 hover:bg-hover hover:!opacity-100 text-base"
          aria-label=${`Remove ${this.itemText(t)}`}
          title="Consumed — remove"
          @click=${()=>void this.removeItem(t)}
        >×</button>
      </li>
    `}editItem(t){this.editingId=t.id,this.updateComplete.then(()=>this.querySelector(`[data-row-key="grocery:${t.id}"] input`)?.focus())}renderDraftRow(){return r`
      <li class="flex min-h-11 items-center gap-2 px-3 rounded-md bg-accent/5">
        <span class="hidden lg:inline-flex shrink-0 w-[14px]"></span>
        <span class="shrink-0 rounded-full border border-accent/40 w-4 h-4" aria-hidden="true"></span>
        <span class="shrink-0 w-[18px] h-[18px]" aria-hidden="true"></span>
          <input
            class="grocery-draft flex-1 min-w-0 py-2.5 bg-transparent text-base text-ink outline-none placeholder:text-muted"
            aria-label="New item"
            placeholder=${this.list==="grocery"?"e.g. 4 apples":"New item"}
            .value=${this.draftValue}
            ?readonly=${this.adding}
            @input=${t=>{this.draftValue=t.target.value}}
            @keydown=${t=>{t.isComposing||(t.key==="Enter"?(t.preventDefault(),this.commitDraft(!0)):t.key==="Escape"&&(t.preventDefault(),this.cancelDraft()))}}
            @blur=${()=>void this.commitDraft(!1)}
          />
        <button type="button" aria-label="Add item to list" class="grid place-items-center w-8 h-8 shrink-0 rounded-md text-accent hover:bg-accent/10 disabled:opacity-40"
          ?disabled=${this.adding||!this.draftValue.trim()}
          @mousedown=${t=>t.preventDefault()}
          @click=${()=>void this.commitDraft(!1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
        </button>
        <button type="button" aria-label="Cancel new item" class="w-8 h-8 shrink-0 rounded-md text-muted hover:text-ink hover:bg-hover"
          ?disabled=${this.adding}
          @mousedown=${t=>t.preventDefault()}
          @click=${this.cancelDraft}>×</button>
      </li>
    `}renderSection(t,e,s,i=!1){const n=i&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(t,e.length,i)}
        ${e.length===0&&!n?r`<p class="px-3 py-4 text-sm text-muted">${s}</p>`:r`<ul class="pb-2">
              ${n?this.renderDraftRow():c}
              ${e.map((o,a)=>this.renderItem(o,a,i&&a===e.length-1))}
            </ul>`}
      </section>
    `}renderSectionGrouped(t,e,s,i=!1){const n=new Map;for(const l of e){const h=l.category||this.inferCategory(l.name);n.has(h)||n.set(h,[]),n.get(h).push(l)}for(const l of n.values())l.sort((h,u)=>h.name.localeCompare(u.name));const o=Z.CATEGORY_ORDER.filter(l=>n.has(l)).concat([...n.keys()].filter(l=>!Z.CATEGORY_ORDER.includes(l))),a=i&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(t,e.length,i)}
        ${e.length===0&&!a?r`<p class="px-3 py-4 text-sm text-muted">${s}</p>`:r`<div class="pb-2">
              ${o.length===0&&a?r`<ul>${this.renderDraftRow()}</ul>`:c}
              ${o.map((l,h)=>r`<div>
                <div class="px-3 pt-4 pb-1 text-sm font-medium text-muted select-none">${l}</div>
                <ul>
                  ${h===0&&a?this.renderDraftRow():c}
                  ${n.get(l).map((u,p)=>this.renderItem(u,p,!1))}
                </ul>
              </div>`)}
            </div>`}
      </section>
    `}renderSectionHeader(t,e,s){return r`<div class="flex items-center justify-between gap-3 px-3 pt-1 pb-2">
      <h3 class="text-base font-medium text-ink">${t} ${e?r`<span class="ml-1.5 text-xs font-normal text-muted tabular-nums">${e}</span>`:c}</h3>
      ${s?r`<button type="button" class="inline-flex items-center gap-1.5 h-8 px-2 rounded-md text-xs font-medium text-accent hover:bg-accent/10 disabled:opacity-50"
        ?disabled=${this.adding} @mousedown=${i=>{this.draftActive&&i.preventDefault()}} @click=${this.openDraft}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        Add item
      </button>`:c}
    </div>`}renderBought(t){return t.length?r`<section class="rounded-lg bg-surface p-2 sm:p-3">
      <button type="button" class="flex w-full items-center gap-2 px-3 py-2 text-sm text-ink rounded-md hover:bg-hover"
        aria-expanded=${this.boughtExpanded} aria-controls="shopping-bought-items"
        @click=${()=>{this.boughtExpanded=!this.boughtExpanded}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d=${this.boughtExpanded?"m6 9 6 6 6-6":"m9 6 6 6-6 6"} /></svg>
        <span>Bought</span><span class="text-xs text-muted tabular-nums">${t.length}</span>
      </button>
      <ul id="shopping-bought-items" ?hidden=${!this.boughtExpanded} class="pt-1 pb-2">${this.boughtExpanded?t.map((e,s)=>this.renderItem(e,s)):c}</ul>
    </section>`:c}render(){const t=a=>this.sortMode==="az"?[...a].sort((l,h)=>l.name.localeCompare(h.name)):a,e=t(this.items.filter(a=>a.status==="shopping")),s=t(this.items.filter(a=>a.status==="pantry")),i=this.sortMode==="type"&&this.list==="grocery",n=this.list==="buy"?"To buy":"Shopping",o=this.list==="buy"?"Add something you want to get.":"Your shopping list is clear.";return r`
      <div class="flex flex-col h-full min-h-0">
        <header class="w-full max-w-[35rem] mx-auto px-4 pt-2 shrink-0 flex flex-wrap items-center justify-between gap-x-3">
          <div class="flex items-center gap-5" role="tablist" aria-label="Shopping lists">
            ${["grocery","buy"].map(a=>r`<button
              type="button"
              role="tab"
              aria-selected=${this.list===a}
              class="px-0.5 py-3 border-b-2 text-sm transition-colors ${this.list===a?"text-ink font-semibold border-ink":"text-muted border-transparent hover:text-ink"}"
              @click=${()=>this.setList(a)}
            ><span class="tab-label" data-label=${a==="grocery"?"Grocery":"To buy"}>${a==="grocery"?"Grocery":"To buy"}</span></button>`)}
          </div>
          <div class="flex items-center gap-1">
            <button type="button"
              class="grid place-items-center min-w-8 h-8 px-2 rounded-md text-ink bg-hover transition-colors text-xs font-medium leading-none"
              aria-label="Toggle sort between A to Z and by type" @click=${this.toggleSort}
            >${this.sortMode==="type"?"Type":this.sortMode==="manual"?"Custom":"A–Z"}</button>
            ${this.list==="grocery"?r`<div class="relative">
                  <button type="button"
                    class="grid place-items-center w-8 h-8 rounded-md ${this.settingsOpen?"text-ink bg-hover":"text-muted hover:text-ink hover:bg-hover"} transition-colors"
                    aria-label="Grocery settings"
                    @click=${a=>{a.stopPropagation(),this.settingsOpen=!this.settingsOpen}}
                  >${this.gearIcon()}</button>
                  ${this.settingsOpen?this.renderSettings():c}
                </div>`:c}
          </div>
        </header>

        <div class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 pb-24" style="scrollbar-gutter:stable" aria-busy=${this.loading}>
          <div class="w-full max-w-[35rem] mx-auto space-y-4">
          ${this.error?r`<p role="alert" class="px-3 py-2 text-sm text-red-600">${this.error}</p>`:c}
          ${this.loading?r`<div class="h-24 rounded-lg bg-surface animate-pulse motion-reduce:animate-none" aria-label="Loading items"></div>`:r`
            ${i?this.renderSectionGrouped(n,e,o,!0):this.renderSection(n,e,o,!0)}
            ${this.list==="buy"?this.renderBought(s):s.length?i?this.renderSectionGrouped("Pantry",s,""):this.renderSection("Pantry",s,""):c}
          `}
          </div>
        </div>
      </div>
    `}};Z.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];gt([d()],Z.prototype,"items",2);gt([d()],Z.prototype,"loading",2);gt([d()],Z.prototype,"adding",2);gt([d()],Z.prototype,"error",2);gt([d()],Z.prototype,"boughtExpanded",2);gt([d()],Z.prototype,"editingId",2);gt([d()],Z.prototype,"editingExpiryId",2);gt([d()],Z.prototype,"emojiPickerFor",2);gt([d()],Z.prototype,"draftActive",2);gt([d()],Z.prototype,"draftValue",2);gt([d()],Z.prototype,"sortMode",2);gt([d()],Z.prototype,"settingsOpen",2);gt([d()],Z.prototype,"expiryEnabled",2);gt([d()],Z.prototype,"list",2);Z=gt([w("grocery-section")],Z);const ar=t=>String(t).padStart(2,"0"),Qu=()=>{const t=new Date;return`${t.getFullYear()}-${ar(t.getMonth()+1)}-${ar(t.getDate())}`};function il(t){if(!t)return null;const e=Math.round((Date.parse(Qu())-Date.parse(t))/864e5);return Number.isFinite(e)?Math.max(0,e):null}function Rn(t,e){const s=il(t);return s===null||s>e}function Nn(t){const e=il(t);return e===null?"on an unknown date":e===0?"today":e===1?"yesterday":`${e} days ago`}var Ju=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,hs=(t,e,s,i)=>{for(var n=i>1?void 0:i?Xu(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ju(e,s,n),n};const lr=["idea","paused","shipped","archived"],Zu={idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},cr=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`;let je=class extends T{constructor(){super(...arguments),this.data=null,this.failed=!1,this.otherOpen=!1,this.search="",this.searchOpen=!1}connectedCallback(){super.connectedCallback(),this.reload()}get staleDays(){return this.data?.staleDays??14}async reload(){try{const t=await fetch("/api/projects");if(!t.ok)throw new Error(String(t.status));this.data=await t.json(),this.failed=!1}catch{this.failed=!this.data}}open(t){this.dispatchEvent(new CustomEvent("open-project",{detail:t,bubbles:!0,composed:!0}))}fits(t){const e=this.search.trim().toLowerCase();return e?[t.name,t.purpose,t.state?.goal].some(s=>(s??"").toLowerCase().includes(e)):!0}groups(){const t=this.data?.staleDays??14,e=(this.data?.projects??[]).filter(a=>this.fits(a)),s=a=>a.state.blockers.length?0:Rn(a.state.updated,t)?1:2,i=e.filter(a=>a.state&&a.status!=="archived").sort((a,l)=>s(a)-s(l)||(l.state.updated??"").localeCompare(a.state.updated??"")||l.unread-a.unread||a.name.localeCompare(l.name)),n=e.filter(a=>!a.state&&a.status==="active").sort((a,l)=>l.unread-a.unread||a.name.localeCompare(l.name,void 0,{sensitivity:"base"})),o=e.filter(a=>!i.includes(a)&&!n.includes(a)).sort((a,l)=>lr.indexOf(a.status??"")-lr.indexOf(l.status??"")||a.name.localeCompare(l.name,void 0,{sensitivity:"base"}));return{withBlock:i,noBlock:n,other:o,staleDays:t,blocked:i.filter(a=>s(a)===0).length,stale:i.filter(a=>s(a)===1).length}}logo(t,e){return t.icon?r`<img src=${t.icon} alt="" loading="lazy" class="${e} rounded-md object-contain bg-surface border border-line shrink-0" />`:r`<span class="${e} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${t.name.charAt(0).toUpperCase()}</span>`}unreadPill(t){return t.unread?r`<span class="shrink-0 px-1.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-medium tabular-nums"
      title="${t.unread} unread handoff${t.unread===1?"":"s"}: its next agent session picks ${t.unread===1?"it":"them"} up">${t.unread} unread</span>`:c}statusTag(t){const e=t.status?Zu[t.status]:null;return e?r`<span class="shrink-0 px-1.5 rounded border border-line text-[10px] text-muted">${e}</span>`:c}renderCard(t,e){const s=t.state,i=Rn(s.updated,e),[n,...o]=s.next;return r`
      <li data-row-key=${t.id!=null?`office:${t.id}`:t.key}>
        <button type="button" class="w-full text-left rounded-xl border bg-surface px-3.5 py-3 hover:bg-hover transition-colors ${s.blockers.length?"border-red-500/40":"border-line"}"
          @click=${()=>this.open(t)}>
          <span class="flex items-center gap-2.5">
            ${this.logo(t,"w-8 h-8")}
            <span class="flex-1 min-w-0 flex items-center gap-1.5">
              <span class="text-sm font-semibold text-ink truncate">${t.name}</span>
              ${this.statusTag(t)}
            </span>
            ${this.unreadPill(t)}
          </span>
          ${s.goal?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90 line-clamp-2">${s.goal}</span>`:c}
          ${s.blockers.map(a=>r`<span class="block mt-2 text-[13px] leading-snug text-red-500"><span class="font-semibold">Blocked:</span> ${a.text}</span>`)}
          ${n?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90"><span class="font-semibold text-ink">Next:</span> ${n.text}${o.length?r` <span class="text-muted whitespace-nowrap">+${o.length} more</span>`:c}</span>`:c}
          <span class="block mt-2 text-[11px] ${i?"text-warn":"text-muted"}">
            ${i?`Updated ${Nn(s.updated)}: out of date, check before relying on it`:`Updated ${Nn(s.updated)}${s.by?` by ${s.by}`:""}`}
          </span>
        </button>
      </li>`}renderRow(t,e=!1){return r`
      <li data-row-key=${t.id!=null?`office:${t.id}`:t.key}>
        <button type="button" class="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left hover:bg-hover" @click=${()=>this.open(t)}>
          ${this.logo(t,"w-7 h-7")}
          <span class="flex-1 min-w-0">
            <span class="flex items-center gap-1.5">
              <span class="text-sm text-ink truncate">${t.name}</span>
              ${e?this.statusTag(t):c}
            </span>
            ${t.purpose?r`<span class="block text-[11px] text-muted truncate">${t.purpose}</span>`:c}
          </span>
          ${this.unreadPill(t)}
        </button>
      </li>`}renderDispatcher(){const t=this.data?.dispatcher;if(!t)return c;const e=t.since?new Date(t.since).toLocaleDateString(void 0,{day:"numeric",month:"short"}):null,s=t.since!=null&&Date.now()-t.since<12*6e4,i=t.paused?`Handoff dispatcher paused${e?` since ${e}`:""}.`:s?"Handoff dispatcher is on: it starts agents for unread handoffs every 5 minutes.":`Handoff dispatcher hasn't run${e?` since ${e}`:""}.`;return r`
      <p class="px-4 pt-2 pb-5 text-[11px] text-muted">
        ${i}
        ${t.paused?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!1)}>Resume</button>`:s?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!0)}>Pause</button>`:c}
      </p>`}async setPaused(t){if(!(!t&&!confirm("Resume the handoff dispatcher? Every 5 minutes it starts agents on the Air to answer unread handoffs."))){try{await fetch("/api/bus/pause",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({paused:t})})}catch{}await this.reload()}}openSearch(){this.searchOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector("#projects-search")?.focus())}renderHeader(t){const e=[];return t.blocked&&e.push(`${t.blocked} blocked`),t.stale&&e.push(`${t.stale} out of date`),t.noBlock.length&&e.push(`${t.noBlock.length} without a State block`),r`
      <header class="px-4 pt-3 pb-2 border-b border-line shrink-0">
        <div class="flex items-center gap-2 min-h-7">
          <h2 class="text-base font-semibold text-ink">Projects</h2>
          <span class="flex-1"></span>
          ${this.searchOpen?r`<span class="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-1.5 py-0.5 text-muted">
                ${cr}
                <input id="projects-search" type="text" placeholder="Search projects" .value=${this.search}
                  class="w-36 bg-transparent text-xs text-ink outline-none placeholder:text-muted"
                  @input=${s=>{this.search=s.target.value}}
                  @keydown=${s=>{s.key==="Escape"&&(this.search="",this.searchOpen=!1)}} />
                <button type="button" title="Clear" class="hover:text-ink" @click=${()=>{this.search="",this.searchOpen=!1}}>✕</button>
              </span>`:r`<button type="button" title="Search" class="p-1.5 rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openSearch()}>${cr}</button>`}
        </div>
        ${this.data&&!this.search?r`<p class="text-xs text-muted">${e.length?e.join(" · "):"Every project is up to date."}</p>`:c}
      </header>`}render(){if(!this.data)return r`<div class="flex-1 grid place-items-center text-xs text-muted">
        ${this.failed?r`<span>Couldn't load projects. <button type="button" class="underline hover:text-ink" @click=${()=>void this.reload()}>Try again</button></span>`:"Loading…"}
      </div>`;const t=this.groups(),e=this.otherOpen||!!this.search.trim(),s=this.search.trim()&&!t.withBlock.length&&!t.noBlock.length&&!t.other.length;return r`
      ${this.renderHeader(t)}
      <div class="flex-1 min-h-0 overflow-y-auto @container">
        ${s?r`<p class="px-4 py-8 text-center text-xs text-muted">No project matches "${this.search.trim()}".</p>`:c}
        ${t.withBlock.length?r`<ul class="px-3 pt-3 grid grid-cols-1 gap-2.5 @2xl:grid-cols-2 @5xl:grid-cols-3 items-start">${t.withBlock.map(i=>this.renderCard(i,t.staleDays))}</ul>`:c}
        ${t.noBlock.length?r`<section class="px-2 pt-5">
              <h3 class="px-2 text-xs font-medium text-ink">No State block yet · ${t.noBlock.length}</h3>
              <p class="px-2 pb-1 text-[11px] text-muted">One appears when an agent finishes a session in the project.</p>
              <ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${t.noBlock.map(i=>this.renderRow(i))}</ul>
            </section>`:c}
        ${t.other.length?r`<section class="px-2 pt-4">
              <button type="button" class="w-full flex items-center gap-1.5 px-2 py-1 text-xs text-muted hover:text-ink"
                @click=${()=>this.otherOpen=!this.otherOpen}>
                <span class="transition-transform ${e?"rotate-90":""}">›</span>
                Ideas, paused, shipped and archived · ${t.other.length}
              </button>
              ${e?r`<ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${t.other.map(i=>this.renderRow(i,!0))}</ul>`:c}
            </section>`:c}
        ${this.renderDispatcher()}
      </div>`}};hs([d()],je.prototype,"data",2);hs([d()],je.prototype,"failed",2);hs([d()],je.prototype,"otherOpen",2);hs([d()],je.prototype,"search",2);hs([d()],je.prototype,"searchOpen",2);je=hs([w("projects-list")],je);const jn=new Map,tn=new Map;function ki(t){return jn.get(t)}function nl(t){const e=jn.get(t);if(e!=null)return Promise.resolve(e);let s=tn.get(t);return s||(s=fetch(`/api/inbox/${t}`).then(i=>i.ok?i.json():null).then(i=>{const n=i?.message.body??null;return n!=null&&jn.set(t,n),n}).catch(()=>null).finally(()=>tn.delete(t)),tn.set(t,s)),s}var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Mt=(t,e,s,i)=>{for(var n=i>1?void 0:i?ep(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&tp(e,s,n),n};const sp=["active","idea","paused","shipped","archived"],ip={active:"Active",idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},np={active:"bg-emerald-500",idea:"bg-sky-400",paused:"bg-amber-500",shipped:"bg-violet-400",archived:"bg-zinc-500"},dr=512*1024,op=8;let wt=class extends T{constructor(){super(...arguments),this.staleDays=14,this.detail=null,this.failed=!1,this.app=null,this.docsOpen=!1,this.docsLoaded=!1,this.openDoc=null,this.openHandoff=null,this.allHandoffs=!1,this.editingField=null,this.changed=!1}connectedCallback(){super.connectedCallback(),this.load()}updated(){if(!this.editingField)return;const t=this.renderRoot,e=t.querySelector("[data-editing]");e&&t.activeElement!==e&&(e.focus(),e.select())}async load(){const t=this.project.key,e=fetch(`/api/projects/detail?key=${encodeURIComponent(t)}`).then(s=>s.ok?s.json():Promise.reject(new Error(String(s.status)))).then(s=>{this.project.key===t&&(this.detail=s,this.failed=!1)}).catch(()=>{this.project.key===t&&!this.detail&&(this.failed=!0)});await Promise.all([e,this.loadApp()])}async loadApp(){const t=this.project.id;if(t!=null)try{const e=await fetch("/api/office?lean=1");if(!e.ok)return;const s=(await e.json()).apps.find(i=>i.id===t)??null;if(this.project.id!==t)return;this.app=s&&this.docsLoaded&&this.app?{...s,docs:this.app.docs}:s}catch{}}async loadDocs(){const t=this.project.id;if(!(t==null||this.docsLoaded))try{const e=await fetch(`/api/office/${t}`);if(!e.ok)return;const{app:s}=await e.json();this.project.id===t&&this.app&&(this.app={...this.app,docs:s.docs},this.docsLoaded=!0)}catch{}}close(){this.dispatchEvent(new CustomEvent("close-project",{detail:{changed:this.changed},bubbles:!0,composed:!0}))}async patch(t){this.app&&(await fetch(`/api/office/${this.app.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.changed=!0,await this.loadApp())}async removeApp(){const t=this.app;!t||!confirm(`Remove ${t.name} from Projects? Its note and State block stay in the vault.`)||(await fetch(`/api/office/${t.id}`,{method:"DELETE"}),this.changed=!0,this.close())}async onLogoFile(t){const e=t.target,s=e.files?.[0];if(e.value="",!s)return;if(!s.type.startsWith("image/")){alert("Please choose an image file.");return}if(s.size>dr){alert(`Image is too large (max ${Math.round(dr/1024)}KB).`);return}const i=await new Promise((n,o)=>{const a=new FileReader;a.onload=()=>n(a.result),a.onerror=()=>o(a.error),a.readAsDataURL(s)});await this.patch({icon:i})}renderItem(t,e){const s=t.proof&&/^https?:\/\/\S+$/.test(t.proof)?t.proof:null;return r`
      <li class="flex gap-2.5">
        <span class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${e==="blocker"?"bg-red-500":"bg-ink/30"}"></span>
        <div class="min-w-0 flex-1">
          <p class="text-sm leading-snug ${e==="blocker"?"text-red-500":"text-ink"}">${t.text}</p>
          ${t.why?r`<p class="mt-0.5 text-xs text-muted">Why: ${t.why}</p>`:c}
          ${t.status==="verified"?r`<p class="mt-0.5 text-[11px] text-emerald-600">✓ Verified${t.proof?r`: ${s?r`<a class="underline underline-offset-2" href=${s} target="_blank" rel="noopener">${t.proof}</a>`:t.proof}`:c}</p>`:e!=="next"&&t.status==="intended"?r`<p class="mt-0.5 text-[11px] text-muted">Not verified yet</p>`:c}
        </div>
      </li>`}renderSection(t,e,s){return e.length?r`
      <section class="space-y-2">
        <h4 class="text-[11px] font-medium uppercase tracking-wide ${s==="blocker"?"text-red-500":"text-muted"}">${t}</h4>
        <ul class="space-y-2.5">${e.map(i=>this.renderItem(i,s))}</ul>
      </section>`:c}renderState(){if(!this.detail)return r`<p class="text-xs text-muted">${this.failed?r`Couldn't load this project. <button type="button" class="underline hover:text-ink" @click=${()=>void this.load()}>Try again</button>`:"Loading…"}</p>`;const t=this.detail.state;if(!t)return r`
        <div class="rounded-xl border border-dashed border-line px-4 py-4">
          <p class="text-sm text-ink">No State block yet.</p>
          <p class="mt-1 text-xs text-muted">When an agent finishes a session in ${this.project.name}, it writes one here: the goal, what was decided and ruled out, blockers and next steps.</p>
        </div>`;const e=Rn(t.updated,this.staleDays),s=[...t.decided,...t.ruled_out,...t.blockers],i=s.filter(n=>n.status==="verified").length;return r`
      <div class="space-y-5">
        <div>
          <p class="text-xs ${e?"text-warn":"text-muted"}">
            Updated ${Nn(t.updated)}${t.by?` by ${t.by}`:""}${t.where&&t.where!==this.project.name?` in ${t.where}`:""}${e?". Out of date: check it before relying on it.":""}
          </p>
          ${s.length?r`<p class="text-[11px] text-muted">${i} of ${s.length} decisions and blockers verified with proof.</p>`:c}
        </div>
        ${t.goal?r`<section class="space-y-1">
              <h4 class="text-[11px] font-medium uppercase tracking-wide text-muted">Goal</h4>
              <p class="text-[15px] leading-snug text-ink">${t.goal}</p>
            </section>`:c}
        ${this.renderSection("Blockers",t.blockers,"blocker")}
        ${this.renderSection("Next",t.next,"next")}
        ${this.renderSection("Decided",t.decided,"decision")}
        ${this.renderSection("Ruled out",t.ruled_out,"decision")}
        ${t.notes.length?r`<section class="space-y-1">
              <h4 class="text-[11px] font-medium uppercase tracking-wide text-muted">Notes</h4>
              ${t.notes.map(n=>r`<p class="text-xs text-ink whitespace-pre-wrap break-words">${n}</p>`)}
            </section>`:c}
        ${this.detail.note?r`<p class="text-[11px] text-muted">From the vault note <span class="font-mono">${this.detail.note}</span>.</p>`:c}
      </div>`}fmtTime(t){return new Date(t*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}toggleHandoff(t){if(this.openHandoff===t){this.openHandoff=null;return}this.openHandoff=t,ki(t)==null&&nl(t).then(()=>this.requestUpdate())}renderHandoff(t){const e=this.openHandoff===t.id,s=t.inbound&&t.read_at==null,i=t.inbound?t.from_agent:t.to_agent;return r`
      <div data-row-key=${`message:${t.id}`}>
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-hover" @click=${()=>this.toggleHandoff(t.id)}>
          <span class="font-mono shrink-0 ${t.inbound?"text-ink":"text-muted"}" title=${t.inbound?`From ${i}`:`To ${i}`}>${t.inbound?"←":"→"} ${i}</span>
          <span class="flex-1 min-w-0 truncate ${s?"text-ink font-medium":"text-muted"}">${t.subject||"(no subject)"}</span>
          ${s?r`<span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0" title="Unread"></span>`:c}
          <span class="text-[10px] text-muted shrink-0">${this.fmtTime(t.created_at)}</span>
        </button>
        ${e?r`<pre class="px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-bg border-t border-line max-h-72 overflow-y-auto">${ki(t.id)??"Loading…"}</pre>`:c}
      </div>`}renderHandoffs(){const t=this.detail;if(!t)return c;const e=this.project.unread,s=this.allHandoffs?t.messages:t.messages.slice(0,op);return r`
      <section class="space-y-2">
        <h3 class="text-xs font-medium text-ink">Handoffs${e?r` <span class="text-muted font-normal">· ${e} unread</span>`:c}</h3>
        ${t.messages.length===0?r`<p class="text-xs text-muted">None yet. Messages agents send to ${this.project.name}, or that it sends, show here.</p>`:r`
              ${e?r`<p class="text-[11px] text-muted">Unread ones wait for the next agent session in ${this.project.name}.</p>`:c}
              <div class="rounded-lg border border-line overflow-hidden divide-y divide-line/60">${s.map(i=>this.renderHandoff(i))}</div>
              ${t.messages.length>s.length?r`<button type="button" class="text-xs text-muted hover:text-ink underline underline-offset-2" @click=${()=>this.allHandoffs=!0}>Show ${t.messages.length-s.length} more</button>`:t.more?r`<p class="text-[11px] text-muted">${t.more} older not shown.</p>`:c}
            `}
      </section>`}renderLogo(t){const e=this.app?.icon??this.project.icon;return e?r`<img src=${e} alt="" class="${t} rounded-md object-contain bg-surface border border-line shrink-0" loading="lazy" />`:r`<span class="${t} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${this.project.name.charAt(0).toUpperCase()}</span>`}commitEdit(t,e,s){this.editingField=null;const i=s.trim();i!==(e??"")&&(t==="name"&&!i||this.patch({[t]:i||null}))}editableText(t,e,s){return this.editingField===t?r`<input data-editing type="text"
        class="w-full px-1.5 py-0.5 text-sm bg-surface border border-ink/50 rounded focus:outline-none"
        .value=${e??""}
        @keydown=${i=>{i.key==="Enter"?i.target.blur():i.key==="Escape"&&(this.editingField=null)}}
        @blur=${i=>this.commitEdit(t,e,i.target.value)} />`:r`
      <button type="button" class="group/e w-full flex items-start gap-1.5 text-left rounded -mx-1.5 px-1.5 py-0.5 hover:bg-hover ${s.display}"
        @click=${()=>this.editingField=t}>
        <span class="flex-1 min-w-0 ${s.truncate===!1?"break-words":"truncate"} ${e?"":"text-muted/60 font-normal italic"}">${e||s.placeholder||"Add"}</span>
        ${s.link?r`<a href=${s.link} target="_blank" rel="noopener" class="shrink-0 text-muted hover:text-ink" title="Open" @click=${i=>i.stopPropagation()}>↗</a>`:c}
        <span class="shrink-0 text-[11px] text-muted opacity-0 group-hover/e:opacity-60">✎</span>
      </button>`}metaRow(t,e){return r`<dt class="text-[11px] text-muted pt-1.5">${t}</dt><dd class="min-w-0 py-0.5">${e}</dd>`}statusControl(t){return r`
      <div class="relative inline-block">
        <span class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${np[t.status]}"></span>
        <select class="appearance-none bg-surface border border-line rounded-full pl-6 pr-7 py-1 text-xs text-ink hover:bg-hover focus:outline-none focus:border-ink cursor-pointer"
          title="Status"
          @change=${e=>void this.patch({status:e.target.value})}>
          ${sp.map(e=>r`<option value=${e} ?selected=${t.status===e}>${ip[e]}</option>`)}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted">▾</span>
      </div>`}renderDocs(t){const e=t.docs??[];if(!e.length)return c;const s=e.find(i=>i.file===this.openDoc&&i.content!=null)??null;return r`
      <section class="space-y-2">
        <button type="button" class="flex items-center gap-1.5 text-xs font-medium text-ink hover:text-ink/80"
          @click=${()=>{this.docsOpen=!this.docsOpen,this.docsOpen&&this.loadDocs()}}>
          <span class="text-muted transition-transform ${this.docsOpen?"rotate-90":""}">›</span>
          Docs the agents read <span class="text-muted font-normal">· ${e.length}</span>
        </button>
        ${this.docsOpen?this.docsLoaded?r`
                <div class="grid grid-cols-2 @xl:grid-cols-3 gap-2">
                  ${e.map(i=>{const n=i.content!=null,o=this.openDoc===i.file;return r`<button type="button" ?disabled=${!n}
                      class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-left text-xs min-w-0 ${o?"border-ink bg-hover":"border-line hover:bg-hover"} ${n?"":"opacity-60 cursor-default"}"
                      @click=${n?()=>this.openDoc=o?null:i.file:void 0}>
                      <span class="shrink-0 text-muted ${n?`transition-transform ${o?"rotate-90":""}`:""}">${n?"›":"·"}</span>
                      <span class="font-mono text-ink truncate">${i.file}</span>
                    </button>`})}
                </div>
                ${s?r`<pre class="rounded-lg border border-line bg-bg px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words max-h-80 overflow-y-auto">${s.content}</pre>`:c}
              `:r`<p class="text-xs text-muted">Loading…</p>`:c}
      </section>`}renderCatalog(t){return r`
      <section class="space-y-2">
        <h3 class="text-xs font-medium text-ink">Catalog entry</h3>
        <dl class="grid grid-cols-[84px_minmax(0,1fr)] gap-x-3 gap-y-0.5 items-baseline">
          ${this.metaRow("Purpose",this.editableText("purpose",t.purpose,{display:"text-sm text-ink",placeholder:"What it's for",truncate:!1}))}
          ${this.metaRow("Serves goal",this.editableText("goal",t.goal,{display:"text-sm text-ink",placeholder:"The goal it serves",truncate:!1}))}
          ${this.metaRow("Stack",this.editableText("stack",t.stack,{display:"text-sm text-ink",placeholder:"Tech stack",truncate:!1}))}
          ${this.metaRow("Repo",this.editableText("repo",t.repo,{display:"text-xs font-mono text-ink break-all",placeholder:"Repo URL",link:t.repo,truncate:!1}))}
        </dl>
      </section>
      ${this.renderDocs(t)}
      <div>
        <button type="button" class="text-xs text-muted hover:text-red-500" @click=${()=>void this.removeApp()}>Remove from Projects</button>
      </div>`}render(){const t=this.app;return r`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center gap-3">
          <button type="button" class="shrink-0 w-7 h-7 grid place-items-center rounded text-lg text-muted hover:text-ink hover:bg-hover"
            title="Back to Projects" @click=${()=>this.close()}>‹</button>
          ${t?r`<div class="relative group/logo shrink-0 w-9 h-9">
                <button type="button" class="block w-full h-full" title="Replace logo" @click=${()=>this.logoInput?.click()}>
                  ${this.renderLogo("w-9 h-9")}
                  <span class="absolute inset-0 grid place-items-center rounded-md bg-black/55 text-white text-sm opacity-0 group-hover/logo:opacity-100 transition-opacity">↻</span>
                </button>
                ${t.icon?r`<button type="button" title="Remove logo" @click=${()=>void this.patch({icon:null})}
                      class="absolute -top-1.5 -right-1.5 w-4 h-4 grid place-items-center rounded-full bg-bg border border-line text-[10px] leading-none text-muted hover:text-red-500 opacity-0 group-hover/logo:opacity-100">×</button>`:c}
                <input id="logo-file" type="file" accept="image/*" class="hidden" @change=${e=>void this.onLogoFile(e)} />
              </div>`:this.renderLogo("w-9 h-9")}
          <div class="min-w-0 flex-1">
            ${t?r`${this.editableText("name",t.name,{display:"text-base font-semibold text-ink"})}
                  ${this.editableText("path",t.path,{display:"text-xs text-muted font-mono",placeholder:"Add path"})}`:r`<p class="text-base font-semibold text-ink truncate">${this.project.name}</p>`}
          </div>
          ${t?this.statusControl(t):c}
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto @container">
          <div class="max-w-3xl px-5 py-5 space-y-8">
            ${this.renderState()}
            ${this.renderHandoffs()}
            ${t?this.renderCatalog(t):c}
          </div>
        </div>
      </div>`}};Mt([b({attribute:!1})],wt.prototype,"project",2);Mt([b({type:Number})],wt.prototype,"staleDays",2);Mt([d()],wt.prototype,"detail",2);Mt([d()],wt.prototype,"failed",2);Mt([d()],wt.prototype,"app",2);Mt([d()],wt.prototype,"docsOpen",2);Mt([d()],wt.prototype,"docsLoaded",2);Mt([d()],wt.prototype,"openDoc",2);Mt([d()],wt.prototype,"openHandoff",2);Mt([d()],wt.prototype,"allHandoffs",2);Mt([d()],wt.prototype,"editingField",2);Mt([Y("#logo-file")],wt.prototype,"logoInput",2);wt=Mt([w("project-detail")],wt);var rp=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,uo=(t,e,s,i)=>{for(var n=i>1?void 0:i?ap(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&rp(e,s,n),n};let $i=class extends T{constructor(){super(...arguments),this.open=null}onClose(t){this.open=null,t.detail?.changed&&this.list?.reload()}render(){return r`
      <projects-list class="${this.open?"hidden":"flex"} flex-col h-full"
        @open-project=${t=>this.open=t.detail}></projects-list>
      ${this.open?r`<project-detail class="flex flex-col h-full" .project=${this.open} .staleDays=${this.list?.staleDays??14}
            @close-project=${t=>this.onClose(t)}></project-detail>`:c}
    `}};uo([d()],$i.prototype,"open",2);uo([Y("projects-list")],$i.prototype,"list",2);$i=uo([w("office-section")],$i);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,us=(t,e,s,i)=>{for(var n=i>1?void 0:i?cp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&lp(e,s,n),n};let Fe=class extends T{constructor(){super(...arguments),this.embedded=!1,this.messages=[],this.activity=null,this.loading=!0,this.openId=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}async refresh(){try{const[t,e]=await Promise.all([fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);t.ok&&(this.messages=(await t.json()).messages),e.ok&&(this.activity=await e.json())}catch{}this.loading=!1}async markRead(t){await fetch(`/api/inbox/${t}/read`,{method:"POST"}),await this.refresh()}toggle(t){if(this.openId===t){this.openId=null;return}this.openId=t,ki(t)==null&&nl(t).then(()=>this.requestUpdate())}stateOf(t){const e=this.activity;return e?.quarantined.some(s=>s.id===String(t.id))?"quarantined":t.read_at!=null?"done":e?.live.includes(t.to_agent)?"working":"pending"}fmtTime(t){return new Date(t*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}ago(t){if(t==null)return"—";const e=Math.max(0,Math.floor((Date.now()-t)/1e3));return e<60?`${e}s`:e<3600?`${Math.floor(e/60)}m`:e<86400?`${Math.floor(e/3600)}h`:`${Math.floor(e/86400)}d`}renderStrip(){const t=this.activity;if(!t)return c;const e=t.live.length,s=e>0?{cls:"bg-emerald-500 animate-pulse",label:`${e} agent${e>1?"s":""} working now`}:t.stale?{cls:"bg-amber-500",label:"Dispatcher idle (no tick in 12m+)"}:{cls:"bg-ink/30",label:"Idle — waiting for the next tick"},i=this.messages.filter(n=>n.read_at==null).length;return r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${s.cls}"></span>
        <span class="text-xs text-ink font-medium">${s.label}</span>
        ${e>0?r`<span class="text-[11px] text-muted font-mono">${t.live.join(", ")}</span>`:c}
        <span class="ml-auto text-[11px] text-muted">
          ${i} pending · last tick ${this.ago(t.lastTickAt)} ago
          ${t.quarantined.length>0?r`· <span class="text-amber-600">${t.quarantined.length} quarantined</span>`:c}
        </span>
      </div>
    `}renderBadge(t){const s={pending:{label:"pending",cls:"bg-bg text-muted border border-line"},working:{label:"working",cls:"bg-amber-100 text-amber-700",pulse:!0},done:{label:"done",cls:"bg-emerald-50 text-emerald-700"},quarantined:{label:"quarantined",cls:"bg-red-100 text-red-700"}}[t];return r`<span class="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${s.cls}">
      ${s.pulse?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>`:c}${s.label}
    </span>`}renderRun(t){const e=this.activity?.handled[String(t.id)];if(!e)return c;const s=e.durationMs!=null?`${Math.round(e.durationMs/1e3)}s`:null,i=e.batchedWith.length?` · with ${e.batchedWith.map(n=>`#${n}`).join(", ")}`:"";return r`
      <div class="mt-2 flex items-start gap-2 px-2.5 py-1.5 bg-surface border-l-2 border-emerald-400 text-[11px] text-muted">
        <span class="mt-px text-emerald-600">⊙</span>
        <span class="flex-1 min-w-0">
          Answered by a read-only agent · ${this.ago(e.at)} ago${s?` · ${s}`:""}${e.exit!=null&&e.exit!==0?` · exit ${e.exit}`:""}${i}
          ${e.summary?r`<span class="block mt-1 text-ink/70 line-clamp-3 break-words">${e.summary}</span>`:c}
        </span>
      </div>
    `}renderMessage(t){const e=this.openId===t.id,s=this.stateOf(t),i=t.read_at==null;return r`
      <li data-row-key=${`message:${t.id}`} class="last:[&_.row-divider]:border-b-0">
        <button
          type="button"
          class="group w-full flex items-start gap-3 pl-3 text-left hover:bg-hover"
          @click=${()=>this.toggle(t.id)}
        >
          <span class="mt-2.5 shrink-0">${this.renderBadge(s)}</span>
          <span class="row-divider flex-1 min-w-0 flex items-start gap-3 py-2.5 mr-4 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="flex items-center gap-1.5 text-xs text-muted">
                <span class="font-mono text-ink">${t.from_agent}</span>
                <span>→</span>
                <span class="font-mono text-ink">${t.to_agent}</span>
                <span class="ml-auto shrink-0">${this.fmtTime(t.created_at)}</span>
              </span>
              <span class="block text-sm mt-0.5 truncate ${i?"text-ink font-medium":"text-muted"}">${t.subject||"(no subject)"}</span>
            </span>
            <span class="shrink-0 mt-0.5 text-muted transition-transform ${e?"rotate-90":"opacity-0 group-hover:opacity-100"}">›</span>
          </span>
        </button>
        ${e?r`
              <div class="px-4 pb-3">
                <pre class="text-[12px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-surface border border-line rounded p-3 max-h-96 overflow-y-auto">${ki(t.id)??"Loading…"}</pre>
                ${this.renderRun(t)}
                ${i?r`<button
                      type="button"
                      class="mt-2 text-xs px-3 py-1 border border-line rounded hover:bg-hover"
                      @click=${()=>void this.markRead(t.id)}
                    >Mark read</button>`:r`<span class="mt-2 inline-block text-[10px] text-muted">Read ${t.read_at?this.fmtTime(t.read_at):""}</span>`}
              </div>
            `:c}
      </li>
    `}renderGroup(t,e){return e.length===0?c:r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">
          ${t} (${e.length})
        </h3>
        <ul>${e.map(s=>this.renderMessage(s))}</ul>
      </section>
    `}render(){const t=this.messages.filter(s=>s.read_at==null),e=this.messages.filter(s=>s.read_at!=null);return r`
      <div class="flex flex-col h-full">
        ${this.embedded?r`<p class="px-4 py-2 text-[11px] text-muted border-b border-line shrink-0">Handoffs between your agents, and the runs that answer them. They send, read, and reply on their own.</p>`:r`<header class="px-4 py-3 border-b border-line shrink-0">
              <div class="flex items-baseline justify-between">
                <h2 class="text-lg font-semibold text-ink">Inbox</h2>
                <span class="text-xs text-muted">${t.length} unread · ${this.messages.length} total</span>
              </div>
              <p class="text-[11px] text-muted mt-0.5">Handoffs between your agents, and the runs that answer them.</p>
            </header>`}

        ${this.renderStrip()}

        <div class="flex-1 min-h-0 overflow-y-auto">
          ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.messages.length===0?r`<p class="px-4 py-3 text-xs text-muted">No messages yet. When one agent finishes something another needs, it leaves a note here.</p>`:r`${this.renderGroup("Unread",t)}${this.renderGroup("Read",e)}`}
        </div>
      </div>
    `}};us([b({type:Boolean})],Fe.prototype,"embedded",2);us([d()],Fe.prototype,"messages",2);us([d()],Fe.prototype,"activity",2);us([d()],Fe.prototype,"loading",2);us([d()],Fe.prototype,"openId",2);Fe=us([w("inbox-section")],Fe);var dp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,Ni=(t,e,s,i)=>{for(var n=i>1?void 0:i?hp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&dp(e,s,n),n};const up=86400,pp=5e3;function hr(t){if(!t)return{type:"none"};try{return JSON.parse(t)}catch{return{type:"none"}}}function mp(t){return t.label?t.label:t.type==="agent"?"Hand to an agent":t.type==="note"?"Open the note":t.type==="none"?"Got it":"Open"}function fp(t){if(t.from)return t.from;const e=t.source.replace(/[-_]+/g," ").trim();return e?e.charAt(0).toUpperCase()+e.slice(1):"Mana"}function gp(t){const s=Math.floor(Date.now()/1e3)-t;if(s<60)return"Just now";if(s<3600)return`${Math.floor(s/60)}m ago`;const i=new Date;i.setHours(0,0,0,0);const n=Math.floor(i.getTime()/1e3);return t>=n?`${Math.floor(s/3600)}h ago`:t>=n-up?"Yesterday":new Date(t*1e3).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}function bp(t,e){t.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"canvas"},bubbles:!0,composed:!0}));const s=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:e,ack:()=>{o=!0}}})),o};if(s())return;const i=performance.now(),n=()=>{!s()&&performance.now()-i<4e3&&setTimeout(n,100)};setTimeout(n,50)}let Ms=class extends T{constructor(){super(...arguments),this.store=new ha(this,f,t=>({items:t.notifications,unread:t.notificationsUnread})),this.loaded=!1,this.aboutOpen=!1,this.handed=[],this.fresh=new Set,this.onVisible=()=>this.markSeenSoon()}connectedCallback(){super.connectedCallback(),this.loaded=f.getState().notifications.length>0,f.getState().loadNotifications().finally(()=>{this.loaded=!0}),document.addEventListener("visibilitychange",this.onVisible)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.seenTimer&&clearTimeout(this.seenTimer)}willUpdate(){for(const t of f.getState().notifications)t.read_at==null&&this.fresh.add(t.id)}updated(){this.markSeenSoon()}markSeenSoon(){this.seenTimer||document.visibilityState!=="visible"||f.getState().notificationsUnread!==0&&(this.seenTimer=setTimeout(()=>{this.seenTimer=void 0,this.isConnected&&document.visibilityState==="visible"&&f.getState().markAllNotificationsRead()},800))}act(t){const e=hr(t.action);if(e.type==="agent")this.handed=[...this.handed,{row:t,to:e.to}],setTimeout(()=>{this.handed=this.handed.filter(s=>s.row.id!==t.id)},pp);else if(e.type==="url")window.open(e.href,"_blank","noopener");else if(e.type==="note")bp(this,e.file);else if(e.type==="persona"||e.type==="mode"){if(t.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}const s=e.type==="persona"?{persona:e.persona}:{mode:e.mode};this.dispatchEvent(new CustomEvent("notif-navigate",{detail:s,bubbles:!0,composed:!0}))}f.getState().actOnNotification(t.id)}dismiss(t){f.getState().dismissNotification(t)}render(){const t=this.store.state.notifications,e=new Set(this.handed.map(i=>i.row.id)),s=[...t.filter(i=>!e.has(i.id)),...this.handed.map(i=>i.row)].sort((i,n)=>n.created_at-i.created_at||n.id-i.id);return r`
      <div class="flex flex-col flex-1 min-h-0 overflow-y-auto [scrollbar-gutter:stable]">
        <div class="flex items-center justify-between gap-3 px-4 pt-3 pb-2">
          <div class="flex items-center gap-2">
            <h2 class="text-base font-semibold text-ink">Notifications</h2>
            <button
              type="button"
              class="text-muted hover:text-ink text-sm leading-none"
              @click=${()=>this.aboutOpen=!0}
              aria-label="About notifications"
            >ⓘ</button>
          </div>
          ${t.length>0?r`<button
                type="button"
                class="text-xs text-muted hover:text-ink px-2 py-1 rounded-md hover:bg-hover"
                @click=${()=>void f.getState().clearAllNotifications()}
              >Clear all</button>`:c}
        </div>
        ${s.length===0?this.loaded?r`<div class="px-4 py-12 text-center text-sm text-muted">You're all caught up.</div>`:c:r`<ul class="px-2 pb-4 space-y-0.5">${s.map(i=>this.renderCard(i))}</ul>`}
        <sc-dialog label="About notifications" ?open=${this.aboutOpen} @sc-hide=${()=>this.aboutOpen=!1}>
          <p class="text-muted leading-relaxed">
            Each card says what happened and has one button: it does the thing, or takes you where it gets done.
            Hand to an agent sends the details to that app's inbox, and the next agent session there picks them up.
            Cards clear themselves after 30 days, or sooner once they no longer apply.
          </p>
        </sc-dialog>
      </div>
    `}renderCard(t){const e=this.handed.find(n=>n.row.id===t.id);if(e){const n=e.to==="mana"?"Mana's":`${e.to.charAt(0).toUpperCase()}${e.to.slice(1)}'s`;return r`
        <li class="flex items-start gap-2.5 px-3 py-3 rounded-lg" role="status">
          <span class="mt-0.5 shrink-0 text-accent" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <p class="flex-1 min-w-0 text-sm text-muted leading-snug">
            Handed to an agent. ${n} inbox has it, and the next agent session there picks it up.
          </p>
        </li>
      `}const s=hr(t.action),i=this.fresh.has(t.id);return r`
      <li class="group relative flex items-start gap-2.5 px-3 py-3 rounded-lg hover:bg-hover">
        <span
          class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${i?"bg-blue-500":"bg-transparent"}"
          aria-label=${i?"New":c}
        ></span>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-ink leading-snug pr-6">${t.title}</p>
          ${t.body?r`<p class="text-xs text-muted mt-1 leading-snug whitespace-pre-line line-clamp-4">${t.body}</p>`:c}
          <div class="flex items-center justify-between gap-3 mt-1.5">
            <span class="text-[11px] text-muted truncate">${fp(t)} · ${gp(t.created_at)}</span>
            <button
              type="button"
              class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
              @click=${()=>this.act(t)}
            >${mp(s)}</button>
          </div>
        </div>
        <button
          type="button"
          class="absolute top-2.5 right-2.5 p-1 rounded-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 text-muted hover:text-ink"
          aria-label="Dismiss"
          @click=${()=>this.dismiss(t.id)}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </li>
    `}};Ni([d()],Ms.prototype,"loaded",2);Ni([d()],Ms.prototype,"aboutOpen",2);Ni([d()],Ms.prototype,"handed",2);Ms=Ni([w("notifications-section")],Ms);let Gs;function vp(t){Gs?.();const{anchor:e}=t,s=document.createElement("div");s.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(e).fontFamily,s.style.width=`${Math.min(232,window.innerWidth-16)}px`,s.style.maxHeight=`${window.innerHeight-16}px`,s.setAttribute("role","menu"),s.setAttribute("aria-label",`Options for ${t.label}`),document.body.appendChild(s);let i=!1,n=!1,o="";const a=(y=!1)=>{n||(n=!0,document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",g,!0),window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",p),vt(c,s),s.remove(),Gs===l&&(Gs=void 0),t.onClose(),y&&e.isConnected&&e.focus({preventScroll:!0}))},l=()=>a();Gs=l;const h=y=>{!y.composedPath().includes(s)&&!y.composedPath().includes(e)&&a()},u=y=>{(!(y.target instanceof Node)||!s.contains(y.target))&&a()},p=()=>a(),m=()=>s.querySelector("button")?.focus({preventScroll:!0}),g=y=>{if(y.key==="Escape")y.preventDefault(),y.stopPropagation(),a(!0);else if(y.key==="Tab")a(!0);else if(s.contains(document.activeElement)&&["ArrowDown","ArrowUp","Home","End"].includes(y.key)){y.preventDefault();const N=[...s.querySelectorAll("button:not(:disabled)")],Q=N.indexOf(document.activeElement),Nt=y.key==="Home"?0:y.key==="End"?N.length-1:(Q+(y.key==="ArrowUp"?-1:1)+N.length)%N.length;N[Nt]?.focus()}},v=async()=>{if(!i){i=!0,o="",A();try{await t.onToggle(),a(!0)}catch{n||(i=!1,o="Could not update the sidebar. Please try again.",A(),m())}}},x=()=>{const y=e.getBoundingClientRect(),N=s.getBoundingClientRect();if(t.position){s.style.left=`${Math.max(8,Math.min(t.position.x,window.innerWidth-N.width-8))}px`,s.style.top=`${Math.max(8,Math.min(t.position.y,window.innerHeight-N.height-8))}px`;return}const Q=y.bottom+6+N.height>window.innerHeight-8?y.top-N.height-6:y.bottom+6;s.style.left=`${Math.max(8,Math.min(y.right-N.width,window.innerWidth-N.width-8))}px`,s.style.top=`${Math.max(8,Math.min(Q,window.innerHeight-N.height-8))}px`},A=()=>{vt(r`
      ${t.onArrange?r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        @click=${()=>{t.onArrange?.(),a(!0)}}>Arrange apps</button>`:c}
      <button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        ?disabled=${i} @click=${()=>void v()}>${t.pinned?"Remove from sidebar":"Pin to sidebar"}</button>
      ${o?r`<p role="alert" class="px-3 pt-2 text-sm text-red-600">${o}</p>`:c}
    `,s),x()};return A(),document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",g,!0),window.addEventListener("scroll",u,!0),window.addEventListener("resize",p),m(),l}var xp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,Bs=(t,e,s,i)=>{for(var n=i>1?void 0:i?yp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&xp(e,s,n),n};let ns=class extends T{constructor(){super(...arguments),this.heldUntil=0,this.saving=!1,this.editing=!1,this.error="",this.announcement="",this.drag=new ho(this,{type:"text/x-mana-tool-index",axis:"x",hitTest:(t,e)=>{for(const s of this.renderRoot.querySelectorAll("[data-tool-index]")){const i=s.getBoundingClientRect();if(t>=i.left&&t<=i.right&&e>=i.top&&e<=i.bottom){const n=Number(s.dataset.toolIndex);return{id:n,index:n,rect:i}}}return null},onReorder:(t,e)=>this.reorder(t,e)})}visibleTools(){return f.getState().tools.filter(t=>this.placeable(t))}async reorder(t,e){if(this.saving)return;const s=this.visibleTools(),i=s[t];if(!i)return;const n=s.filter(a=>a.name!==i.name),o=Math.max(0,Math.min(n.length,e-(t<e?1:0)));this.saving=!0,this.error="";try{await f.getState().reorderTool(i.name,n[o]?.name??null),this.announcement=`${i.label||i.name} moved to position ${o+1}`,this.saving=!1,await this.updateComplete,Array.from(this.renderRoot.querySelectorAll("a[data-tool-name]")).find(a=>a.dataset.toolName===i.name)?.focus()}catch{this.error="Could not save the tool order. Please try again."}finally{this.saving=!1}}moveWithKey(t,e){const s=getComputedStyle(this.renderRoot.querySelector("[data-tools-grid]")).gridTemplateColumns.split(" ").length,i=t.key==="ArrowLeft"?-1:t.key==="ArrowRight"?1:t.key==="ArrowUp"?-s:t.key==="ArrowDown"?s:0;if(!i)return;t.preventDefault();const n=Math.max(0,Math.min(this.visibleTools().length-1,e+i));n!==e&&this.reorder(e,n>e?n+1:n)}connectedCallback(){super.connectedCallback(),f.getState().loadTools(),this.unsub=j(this,f,t=>t.tools)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.cancelPress?.(),this.dismissMenu?.()}placeable(t){return t.type!=="view"||!!t.panel}async toggle(t){if(this.saving)return;this.saving=!0,this.error="";const e=t.placement==="cockpit"?"standalone":"cockpit";try{await f.getState().setToolPlacement(t.name,e)}finally{this.saving=!1,await this.updateComplete}}showMenu(t,e){this.dismissMenu?.(),this.dismissMenu=vp({label:t.label||t.name,pinned:t.placement==="cockpit",anchor:e.currentTarget,position:e instanceof MouseEvent&&e.type==="contextmenu"&&(e.clientX||e.clientY)?{x:e.clientX,y:e.clientY}:void 0,onToggle:()=>this.toggle(t),onArrange:()=>{this.editing=!0},onClose:()=>{this.dismissMenu=void 0}})}onIconPress(t,e){if(this.saving||t.button!==0)return;this.cancelPress?.();const s=t.currentTarget.closest("a");if(this.editing){this.drag.onPointerDown(t,e,s);return}const i=()=>{clearTimeout(o),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),this.cancelPress=void 0},n=a=>{a.pointerId===t.pointerId&&Math.hypot(a.clientX-t.clientX,a.clientY-t.clientY)>8&&i()},o=setTimeout(()=>{i(),this.dismissMenu?.(),this.editing=!0,this.heldUntil=Date.now()+1e3,this.announcement="Arrange apps. Drag an icon or use the arrow keys. Choose Done when finished.",this.drag.onPointerDown(t,e,s)},450);this.cancelPress=i,window.addEventListener("pointermove",n),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}render(){const t=this.visibleTools();return r`
      <div class="mana-launcher-scroll">
        <div class="mana-launcher-content">
          <div class="mana-launcher-heading">
            <h2>Tools</h2>
            ${this.editing?r`
            <button type="button" class="mana-launcher-edit" aria-pressed=${this.editing}
              ?disabled=${this.saving} @click=${()=>{this.cancelPress?.(),this.dismissMenu?.(),this.editing=!this.editing}}>
              Done
            </button>
            `:c}
          </div>
          ${this.error?r`<p role="alert" class="text-sm text-red-600 mb-3">${this.error}</p>`:c}
          <span role="status" aria-live="polite" class="sr-only">${this.announcement}</span>
          <div data-tools-grid class="mana-launcher-grid" aria-busy=${this.saving}>
            ${t.map((e,s)=>this.tile(e,s))}
          </div>
        </div>
      </div>
    `}tile(t,e){const s=ua(t),i=t.label||t.name,n={notify:"red",goals:"orange",circle:"indigo",finance:"green","been-to":"teal",grocery:"blue",guests:"pink",learn:"violet",office:"slate",publisher:"teal"};return r`
      <div class="mana-launcher-tile ${this.drag.dropClass(e)}" data-tool-index=${e}>
        <a href=${s||t.target}
          class="mana-launcher-app" aria-label=${this.editing?`Reorder ${i}`:i} draggable="false" data-tool-name=${t.name}
          aria-description=${this.editing?"Drag the icon or use arrow keys to move.":"Press and hold to arrange apps. Right-click for sidebar options."}
          @keydown=${o=>{this.editing&&this.moveWithKey(o,e)}}
          @contextmenu=${o=>{o.preventDefault(),this.cancelPress?.(),Date.now()>this.heldUntil&&this.showMenu(t,o)}}
          @click=${o=>{this.editing&&o.preventDefault()}}>
          <span class="mana-launcher-icon" data-colour=${n[t.name]||"blue"} @pointerdown=${o=>this.onIconPress(o,e)}>
            <sc-icon name="lucide-${t.icon||"layout-grid"}"></sc-icon>
          </span>
          <span class="mana-launcher-label">${i}
            ${s?c:r`<sc-icon name="lucide-external-link" class="w-3 h-3 align-middle"></sc-icon>`}
          </span>
        </a>

      </div>
    `}};Bs([d()],ns.prototype,"saving",2);Bs([d()],ns.prototype,"editing",2);Bs([d()],ns.prototype,"error",2);Bs([d()],ns.prototype,"announcement",2);ns=Bs([w("tools-launcher")],ns);var wp=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,po=(t,e,s,i)=>{for(var n=i>1?void 0:i?kp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&wp(e,s,n),n};let Si=class extends T{constructor(){super(...arguments),this.config=null,this.height="200px",this.chart=null,this.gen=0}render(){return r`<div style="position:relative;height:${this.height};width:100%"><canvas></canvas></div>`}async updated(){const t=++this.gen,e=this.querySelector("canvas");if(!e||(this.chart&&(this.chart.destroy(),this.chart=null),!this.config))return;const{Chart:s}=await _t(async()=>{const{Chart:i}=await import("./auto-DhYMk4xX.js");return{Chart:i}},[]);t!==this.gen||!this.isConnected||(this.chart=new s(e,this.config))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};po([b({attribute:!1})],Si.prototype,"config",2);po([b({type:String})],Si.prototype,"height",2);Si=po([w("finance-chart")],Si);var $p=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,Zt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Sp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&$p(e,s,n),n};const Tp=240,Cp=160;let Ht=class extends T{constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this.flipUp=!1,this._onDoc=t=>{this.open&&!this.contains(t.target)&&this.close()},this._onReflow=t=>{this.open&&(t&&t.target instanceof Node&&this.contains(t.target)||this.close())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0)}close(){this.open=!1,this.q=""}toggle(t){if(t.stopPropagation(),this.open){this.close();return}const e=t.currentTarget.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight-e.bottom,o=e.top;this.flipUp=n<Tp+8&&o>n,this.py=this.flipUp?Math.max(8,e.top-4):e.bottom+4,this.px=Math.max(8,Math.min(e.left,s-Cp-8)),this.open=!0}pick(t){this.value=t,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:t,bubbles:!0,composed:!0}))}updated(){this.open&&!window.matchMedia("(pointer: coarse)").matches&&this.querySelector("input.cs-search")?.focus()}render(){const t=this.q.trim().toUpperCase(),e=this.options.length?this.options:this.saved,s=t?e.filter(i=>i.includes(t)):[...this.saved.filter(i=>e.includes(i)),...e.filter(i=>!this.saved.includes(i))];return r`
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
                    @click=${()=>this.pick(i)}><span>${i}</span>${this.saved.includes(i)?r`<span class="text-[9px] text-muted">saved</span>`:c}</button>`):r`<div class="px-3 py-2 text-xs text-muted">No match</div>`}
            </div>
          </div>`:c}
    `}};Zt([b({type:String})],Ht.prototype,"value",2);Zt([b({type:String})],Ht.prototype,"name",2);Zt([b({attribute:!1})],Ht.prototype,"options",2);Zt([b({attribute:!1})],Ht.prototype,"saved",2);Zt([d()],Ht.prototype,"open",2);Zt([d()],Ht.prototype,"q",2);Zt([d()],Ht.prototype,"px",2);Zt([d()],Ht.prototype,"py",2);Zt([d()],Ht.prototype,"flipUp",2);Ht=Zt([w("currency-select")],Ht);var Ep=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,D=(t,e,s,i)=>{for(var n=i>1?void 0:i?Dp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Ep(e,s,n),n};const Pp=["expenses","fixed","savings","donut"],Ap={expenses:1,fixed:1,savings:1,donut:2},ur=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],pr=t=>ur[t%ur.length],Mp=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],Vs=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],Ip=["type","amount","frequency","next","category"];function bs(){return new Date().toISOString().slice(0,7)}function mr(t,e){const[s,i]=t.split("-").map(Number),n=new Date(Date.UTC(s,i-1+e,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function vs(t){const[e,s]=t.split("-").map(Number);return!e||!s?t:new Date(Date.UTC(e,s-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric"})}function _p(t){const[e,s]=t.split("-").map(Number);return!e||!s?t:new Date(Date.UTC(e,s-1,1)).toLocaleDateString(void 0,{month:"short"})}let E=class extends T{constructor(){super(...arguments),this.tab="budget",this.month=bs(),this.loading=!0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.logDay=new Date().getDate(),this.networth=null,this.recurring=[],this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...Ip],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.recurringAsPaid=!1,this.showColMenu=!1,this.showEnded=!1,this.budgetLayout=null,this.dragCardId=null,this.dropTarget=null,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=t=>{t.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=t=>{const e=t.detail;e&&(this.lastCurrency=e,!this.currencies.includes(e)&&this.supportedCurrencies.includes(e)&&this.saveCurrencies([...this.currencies,e]))},this.onCardDragEnd=()=>{this.dragCardId=null,this.dropTarget=null}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const t=await fetch("/api/finance/settings");if(!t.ok)return;const e=await t.json();Array.isArray(e.currencies)&&e.currencies.length&&(this.currencies=e.currencies),Array.isArray(e.supportedCurrencies)&&(this.supportedCurrencies=e.supportedCurrencies),e.lastCurrency&&(this.lastCurrency=e.lastCurrency),e.baseCurrency&&(this.base=e.baseCurrency),e.recurringColumns&&e.recurringColumns.length&&(this.recurringColumns=e.recurringColumns),e.cards&&(this.cards={...this.cards,...e.cards}),typeof e.recurringAsPaid=="boolean"&&(this.recurringAsPaid=e.recurringAsPaid),Array.isArray(e.budgetLayout)&&e.budgetLayout.length&&(this.budgetLayout=e.budgetLayout)}catch{}}renderCurrencySelect(t){const e=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return r`<currency-select name="currency" .value=${t} .saved=${this.currencies}
      .options=${e.includes(t)?e:[t,...e]}></currency-select>`}async changeBaseCurrency(t){await this.post("/base-currency",{currency:t}),await this.loadSettings(),await this.refresh()}async saveCurrencies(t){await this.post("/currencies",{currencies:t}),await this.loadSettings()}addCurrency(t){!t||this.currencies.includes(t)||this.saveCurrencies([...this.currencies,t])}removeCurrency(t){t!==this.base&&this.saveCurrencies(this.currencies.filter(e=>e!==t))}toggleCard(t){this.cards={...this.cards,[t]:!this.cards[t]},this.post("/cards",{cards:{[t]:this.cards[t]}})}toggleRecurringAsPaid(){this.recurringAsPaid=!this.recurringAsPaid,(async()=>(await this.post("/recurring-as-paid",{value:this.recurringAsPaid}),await this.refresh()))()}renderSettings(){const t=this.supportedCurrencies.filter(e=>!this.currencies.includes(e));return r`
      <div class="mx-3 mt-3 mana-card px-4 py-3">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-ink">Finance settings</span>
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showSettings=!1}}>close</button>
        </div>
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <span class="text-[11px] text-muted">Base currency</span>
          <select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @change=${e=>void this.changeBaseCurrency(e.target.value)}>
            ${this.supportedCurrencies.map(e=>r`<option value=${e} ?selected=${e===this.base}>${e}</option>`)}
          </select>
          <span class="text-[11px] text-muted">all amounts display in this</span>
        </div>
        <div class="text-[11px] text-muted mb-1">My currencies</div>
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${this.currencies.map(e=>r`
            <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border border-line">
              ${e}
              ${e===this.base?r`<span class="text-[9px] text-muted">base</span>`:r`<button type="button" class="text-muted hover:text-red-500 leading-none" title="Remove" @click=${()=>this.removeCurrency(e)}>×</button>`}
            </span>`)}
        </div>
        ${t.length?r`<select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              @change=${e=>{const s=e.target;s.value&&this.addCurrency(s.value),s.value=""}}>
              <option value="">+ add currency…</option>
              ${t.map(e=>r`<option value=${e}>${e}</option>`)}
            </select>`:c}
        <div class="text-[11px] text-muted mt-4 mb-1">Budget cards</div>
        <div class="flex flex-col gap-1.5">
          ${[["savingsGoal","Savings goal"],["fixedPayments","Fixed payments"],["expenseDonut","Expense breakdown"]].map(([e,s])=>r`<label class="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" ?checked=${this.cards[e]} @change=${()=>this.toggleCard(e)} />
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
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(t){["tab","month","yearN","expandedCat","showIncome","budget"].some(s=>t.has(s))&&this.publishView()}publishView(){const t={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let e;if(this.tab==="budget"){if(e=`${vs(this.month)}`,this.showIncome&&(e+=", income panel open"),this.expandedCat!=null){const s=this.budget?.categories.find(i=>i.id===this.expandedCat);e+=`, expanded category "${s?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?e=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?e=`${vs(this.month)} · accounts grouped by bucket + net-worth trend`:e="recurring income/expenses table";f.getState().setViewContext({tool:"finance",summary:`Finance · ${t[this.tab]} tab · ${e}`})}async refresh(){this.loading=!0;try{if(this.tab==="budget"){const t=await fetch(`/api/finance/budget?month=${this.month}`);t.ok&&(this.budget=await t.json(),this.base=this.budget.baseCurrency),this.expandedCat!=null&&await this.loadCatTxns(this.expandedCat),this.showIncome&&await this.loadIncomeTxns()}else if(this.tab==="networth"){const t=await fetch(`/api/finance/networth?month=${this.month}`);t.ok&&(this.networth=await t.json(),this.base=this.networth.baseCurrency)}else if(this.tab==="recurring"){const[t,e,s]=await Promise.all([fetch("/api/finance/recurring"),fetch("/api/finance/settings"),fetch(`/api/finance/budget?month=${bs()}`)]);if(t.ok&&(this.recurring=(await t.json()).items),e.ok){const i=await e.json();i.recurringColumns&&i.recurringColumns.length&&(this.recurringColumns=i.recurringColumns)}s.ok&&(this.budget=await s.json())}else if(this.tab==="year"){const t=await fetch(`/api/finance/year?year=${this.yearN}`);t.ok&&(this.year=await t.json(),this.base=this.year.baseCurrency)}}catch{}this.loading=!1}async loadCatTxns(t){try{const e=await fetch(`/api/finance/transactions?month=${this.month}&categoryId=${t}`);e.ok&&(this.catTxns=(await e.json()).items)}catch{}}async loadIncomeTxns(){try{const t=await fetch(`/api/finance/transactions?month=${this.month}&type=income`);t.ok&&(this.incomeTxns=(await t.json()).items)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&await this.loadIncomeTxns()}async post(t,e){await fetch(`/api/finance${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}async del(t){await fetch(`/api/finance${t}`,{method:"DELETE"})}async patch(t,e){await fetch(`/api/finance${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}fmt(t,e=this.base){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(t)}catch{return`${Math.round(t)} ${e}`}}fmtShort(t){const e=Math.abs(t),s=e>=1e3?`${(t/1e3).toFixed(e>=1e4?0:1)}k`:String(Math.round(t));return`${this.base==="EUR"?"€":""}${s}`}stat(t,e){return r`
      <div class="text-center">
        <div class="text-[11px] text-white/70">${t}</div>
        <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight">${this.fmt(e)}</div>
      </div>
    `}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const s=[.../\u200D/.test(t)?t:t.replace(/\uFE0F/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(t){if(!t)return r`<span class="text-muted text-sm">•</span>`;const e=this.iconUrl(t);return e?r`<img src=${e} alt="" class="w-5 h-5 select-none" draggable="false" />`:r`<span class="text-sm">${t}</span>`}setTab(t){this.tab!==t&&(this.tab=t,this.refresh())}gotoMonth(t){this.month=mr(this.month,t),this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const t=bs();this.month!==t&&(this.month=t,this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh())}daysInMonth(t){const[e,s]=t.split("-").map(Number);return new Date(Date.UTC(e,s,0)).getUTCDate()}defaultLogDay(){return this.month===bs()?new Date().getDate():this.daysInMonth(this.month)}stepDay(t){const e=this.daysInMonth(this.month);this.logDay=Math.min(e,Math.max(1,this.logDay+t))}fmtLogDay(){const[t,e]=this.month.split("-").map(Number),s=Math.min(this.logDay,this.daysInMonth(this.month));return new Date(Date.UTC(t,e-1,s)).toLocaleDateString(void 0,{weekday:"short",day:"numeric"})}renderDayPicker(){return r`
      <div class="flex h-8 items-center gap-0.5 shrink-0 bg-surface border border-line rounded">
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Earlier day"
          @click=${()=>this.stepDay(-1)}>‹</button>
        <span class="min-w-[3.25rem] text-center text-sm tabular-nums text-ink select-none">${this.fmtLogDay()}</span>
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Later day"
          @click=${()=>this.stepDay(1)}>›</button>
      </div>
    `}async toggleCat(t){if(this.expandedCat===t){this.expandedCat=null,this.catTxns=[];return}this.expandedCat=t,await this.loadCatTxns(t)}async addCategory(){const t=this.newCat.trim();t&&(await this.post("/category",{name:t,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(t,e){if(t==="new"){this.newCatIcon=e,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${t}`,{icon:e||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(t,e){const s=e.trim();s&&this.patch(`/category/${t}`,{name:s})}renderEmojiPalette(t){return r`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${e=>e.stopPropagation()}>
        ${Mp.map(e=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(t,e)}>${e}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(t,"")}>none</button>
      </div>
    `}async logTxn(t,e,s,i,n,o){!Number.isFinite(s)||s<=0||(await this.post("/transaction",{type:e,amount:s,currency:i||this.base,categoryId:t,name:n,date:o}),await this.refresh())}async setBudget(t,e){Number.isFinite(e)&&(await this.post("/budget",{categoryId:t,amount:e,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(t,e){!Number.isFinite(e)||e<0||this.post("/budget",{categoryId:t,amount:e,month:this.month})}async deleteTxn(t){await this.del(`/transaction/${t}`),await this.refresh()}startEditTxn(t){t.recurring_id==null&&(this.editingTxnId=t.id)}onSaveTxn(t,e){t.preventDefault();const s=t.target,i=s.elements.namedItem("date")?.value||e.date,n=s.elements.namedItem("name")?.value.trim()??"",o=Number(s.elements.namedItem("amount")?.value),a=(s.elements.namedItem("currency")?.value||e.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(e.id,{date:i,name:n,amount:o,currency:a})}async saveTxnEdit(t,e){await this.patch(`/transaction/${t}`,e),this.editingTxnId=null,await this.refresh()}async archiveCategory(t){await this.patch(`/category/${t.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(t){await this.patch(`/category/${t}`,{active:1}),await this.refresh()}async deleteCategoryHard(t){confirm(`Permanently delete "${t.name}"? This can't be undone.`)&&(await this.del(`/category/${t.id}`),await this.refresh())}onQuickAdd(t,e,s){t.preventDefault();const i=t.target,n=Number(i.elements.namedItem("amount")?.value),o=(i.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),a=i.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o;const l=Math.min(this.logDay,this.daysInMonth(this.month)),h=`${this.month}-${String(l).padStart(2,"0")}`;this.logTxn(e,s,n,o,a,h),i.reset()}renderBar(t){const e=t===0?"bg-black/10":t>100?"bg-red-400":t>=75?"bg-amber-300":"bg-emerald-400";return r`
      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
        <div class="h-full rounded-full ${e}" style="width:${Math.min(100,t)}%"></div>
      </div>
    `}renderQuickAdd(t,e){return r`
      <form class="flex flex-col gap-1.5 px-3 py-2 sm:flex-row sm:items-center" @submit=${s=>this.onQuickAdd(s,t,e)}>
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
    `}renderTxnRow(t){const e=t.recurring_id!=null;return this.editingTxnId===t.id?r`
        <li class="py-1">
          <form class="flex flex-wrap items-center gap-1.5 text-sm" @submit=${s=>this.onSaveTxn(s,t)}>
            <mana-date-picker name="date" label="Date" .value=${t.date}
              field-class="px-1.5 py-1 text-xs bg-surface border border-line rounded"></mana-date-picker>
            <input name="name" type="text" .value=${t.name??""} placeholder="what for…"
              class="flex-1 min-w-[5rem] px-2 py-1 bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input name="amount" type="number" step="0.01" inputmode="decimal" .value=${String(t.original_amount)}
              class="w-20 px-2 py-1 text-right bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            ${this.renderCurrencySelect(t.original_currency)}
            <button type="submit" class="px-2 py-1 text-xs rounded border border-ink text-ink hover:bg-hover">Save</button>
            <button type="button" class="sm:hidden px-2 py-1 text-xs text-muted hover:text-red-500" @click=${()=>{this.editingTxnId=null,this.deleteTxn(t.id)}}>Delete</button>
            <button type="button" class="px-2 py-1 text-xs text-muted hover:text-ink" @click=${()=>{this.editingTxnId=null}}>Cancel</button>
          </form>
        </li>
      `:r`
      <li class="group flex items-center gap-2 py-1 text-sm ${e?"italic":""}">
        <span class="text-muted text-xs w-16 shrink-0 ${e?"":"cursor-pointer"}" @click=${()=>this.startEditTxn(t)}>${t.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate ${e?"text-muted":"text-ink cursor-pointer hover:underline decoration-dotted underline-offset-2"}"
          @click=${()=>this.startEditTxn(t)} title=${e?"":"Edit"}>
          ${e?r`<span class="not-italic" title="Recurring — manage in the Recurring tab">↻ </span>`:c}${t.name||(t.type==="income"?"income":"—")}
        </span>
        <span class="shrink-0 tabular-nums ${e?"":"cursor-pointer"} ${t.type==="income"?"text-green-600":e?"text-muted":"text-ink"}"
          @click=${()=>this.startEditTxn(t)}>
          ${t.base!=null?this.fmt(t.base):`${t.original_amount} ${t.original_currency}`}
        </span>
        ${t.original_currency!==t.baseCurrency?r`<span class="text-[10px] text-muted shrink-0">${t.original_amount} ${t.original_currency}</span>`:c}
        ${e?r`<span class="w-3 shrink-0"></span>`:r`<button type="button" class="text-[10px] text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 shrink-0"
              @click=${()=>void this.deleteTxn(t.id)} title="Delete">×</button>`}
      </li>
    `}renderCatTxns(){return this.catTxns.length?r`
      <ul class="px-3 pb-1">
        ${this.catTxns.map(t=>this.renderTxnRow(t))}
      </ul>
    `:r`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(t,e=!1){const s=this.editingGoals,i=this.expandedCat===t.id&&!s&&!e,n=t.budget>0,o=t.committed??0,a=o>0,l=t.spent+o,h=n?Math.round(l/t.budget*100):0,u=n?Math.round(t.spent/t.budget*100):0,p=n&&l>t.budget,m=Math.min(100,u),g=Math.max(0,Math.min(100,h)-m),v=!s&&!e;return r`
      <li class="border-b border-line/60 last:border-0">
        <div class="grid grid-cols-[26px_1fr_56px_56px_52px] sm:grid-cols-[26px_1fr_56px_56px_104px] items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 ${v?"hover:bg-hover cursor-pointer":""}"
          @click=${v?()=>void this.toggleCat(t.id):null}>
          ${s?r`<button type="button" class="flex items-center justify-center hover:bg-hover rounded" title="Change icon"
                @click=${x=>{x.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===t.id?null:t.id}}>${this.renderIcon(t.icon)}</button>`:this.renderIcon(t.icon)}
          ${s?r`<input type="text" .value=${t.name}
                class="w-full text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${x=>x.stopPropagation()}
                @change=${x=>this.saveCatName(t.id,x.target.value)} />`:r`<span class="text-sm font-semibold truncate ${e?"text-muted":"text-ink"}">${t.name}</span>`}
          ${s?r`<input type="number" step="1" inputmode="decimal" .value=${n?String(t.budget):""} placeholder="0"
                class="w-full text-right text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${x=>x.stopPropagation()}
                @change=${x=>this.saveGoalInline(t.id,Number(x.target.value))} />`:r`<span class="text-sm text-right tabular-nums ${n?"text-muted":"text-muted/40"}">${n?this.fmt(t.budget):"—"}</span>`}
          <span class="text-right leading-tight">
            <span class="block text-sm font-semibold tabular-nums ${p?"text-red-500":e?"text-muted":"text-ink"}">${this.fmt(t.spent)}</span>
            ${a?r`<span class="block text-[11px] tabular-nums text-amber-500" title="Recurring due this month, not yet paid">+${this.fmt(o)}</span>`:c}
          </span>
          ${e?r`<div class="flex items-center justify-end gap-2 text-[11px]">
                <button type="button" class="text-ink/60 hover:text-ink" @click=${x=>{x.stopPropagation(),this.restoreCategory(t.id)}}>Unhide</button>
                <button type="button" class="text-muted hover:text-red-500" @click=${x=>{x.stopPropagation(),this.deleteCategoryHard(t)}}>Delete</button>
              </div>`:s?r`<button type="button" class="text-[11px] text-right text-muted hover:text-red-500"
                  @click=${x=>{x.stopPropagation(),this.archiveCategory(t)}}>hide</button>`:n?r`<div class="flex items-center gap-2">
                    <div class="flex-1 min-w-0">
                      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden flex">
                        <div class="h-full ${p?"bg-red-400":"bg-emerald-400"}" style="width:${m}%"></div>
                        <div class="h-full bg-amber-300" style="width:${g}%"></div>
                      </div>
                    </div>
                    <span class="hidden sm:inline-block w-8 shrink-0 text-right text-[11px] tabular-nums ${p?"text-red-500":"text-muted"}">${Math.min(100,h)}%</span>
                  </div>`:r`<span class="text-[11px] text-right text-ink/40">set goal</span>`}
        </div>
        ${s&&this.emojiPickerFor===t.id?this.renderEmojiPalette(t.id):c}
        ${i?r`
              <div class="bg-bg/40 border-t border-line">
                ${this.renderQuickAdd(t.id,"expense")}
                ${this.renderCatTxns()}
              </div>
            `:c}
      </li>
    `}renderIncomePanel(){const t=this.budget?.income.committedItems??[],e=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),s=t.reduce((n,o)=>n+o.base,0),i=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mx-3 mb-3 mana-card overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] text-muted">Income · ${vs(this.month)}</span>
          <span class="text-sm font-semibold tabular-nums text-emerald-600">${this.fmt(e+s)}</span>
        </div>
        ${this.incomeTxns.length||t.length?r`<ul class="px-3 py-1">
              ${this.incomeTxns.map(n=>this.renderTxnRow(n))}
              ${t.map(n=>r`
                <li class="flex items-center gap-2 py-1 text-sm italic text-muted" title="Expected recurring income">
                  <span class="text-xs w-16 shrink-0">${i(n.date)}</span>
                  <span class="flex-1 min-w-0 truncate"><span class="not-italic">↻ </span>${n.name}</span>
                  <span class="shrink-0 tabular-nums text-emerald-600/70">${this.fmt(n.base)}</span>
                  <span class="text-[10px] shrink-0">expected</span>
                </li>`)}
            </ul>`:r`<p class="px-4 py-2 text-xs text-muted">No income logged this month.</p>`}
        <div class="border-t border-line">${this.renderQuickAdd(null,"income")}</div>
      </div>
    `}presentCards(t){const e=this.cards.expenseDonut&&t.categories.some(s=>s.spent>0);return Pp.filter(s=>s==="expenses"?!0:s==="savings"?this.cards.savingsGoal:s==="fixed"?this.cards.fixedPayments:e)}effectiveLayout(t){const e=this.presentCards(t),s=new Set(e),i=(this.budgetLayout??[]).filter(o=>s.has(o.id)).map(o=>({...o})),n=new Set(i.map(o=>o.id));for(const o of e)n.has(o)||i.push({id:o,span:Ap[o]});return i}layoutRows(t){const e=[];for(let s=0;s<t.length;){const i=t[s],n=t[s+1];i.span===1&&n&&n.span===1?(e.push([i,n]),s+=2):(e.push([i]),s+=1)}return e}async saveBudgetLayout(t){this.budgetLayout=t,await this.post("/budget-layout",{layout:t})}onCardDragStart(t,e){if(this.dragCardId=e,t.dataTransfer){t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e);const s=t.currentTarget.closest("[data-card]");s&&t.dataTransfer.setDragImage(s,24,16)}}dropModeFor(t,e){const s=e.getBoundingClientRect(),i=(t.clientX-s.left)/s.width,n=(t.clientY-s.top)/s.height;return i<.28?"beside-left":i>.72?"beside-right":n<.5?"stack-before":"stack-after"}onCardDragOver(t,e){if(!this.dragCardId||e===this.dragCardId)return;t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move");const s=this.dropModeFor(t,t.currentTarget);(this.dropTarget?.id!==e||this.dropTarget?.mode!==s)&&(this.dropTarget={id:e,mode:s})}onCardDrop(t,e){t.preventDefault();const s=this.dragCardId,i=this.dropTarget?.mode;this.dragCardId=null,this.dropTarget=null,!(!s||!i||s===e||!this.budget)&&this.applyDrop(this.effectiveLayout(this.budget),s,e,i)}applyDrop(t,e,s,i){const n=t.find(h=>h.id===e);if(!n)return;const o=t.filter(h=>h.id!==e),a=o.findIndex(h=>h.id===s);if(a<0)return;const l={...n};i==="beside-left"||i==="beside-right"?(l.span=1,o[a].span=1,o.splice(i==="beside-left"?a:a+1,0,l)):(l.span=2,o.splice(i==="stack-before"?a:a+1,0,l)),this.saveBudgetLayout(o)}cardContent(t,e,s){return t==="expenses"?this.renderExpensesCard(e):t==="savings"?this.renderSavingsCard(e,s):t==="fixed"?this.renderFixedCard(e,s):this.renderExpenseDonut(e)}renderDropIndicator(t){const e="pointer-events-none absolute z-20 rounded-full bg-blue-500",s=t==="beside-left"?`${e} left-0 top-2 bottom-2 w-1`:t==="beside-right"?`${e} right-0 top-2 bottom-2 w-1`:t==="stack-before"?`${e} top-0 left-2 right-2 h-1`:`${e} bottom-0 left-2 right-2 h-1`;return r`<div class=${s}></div>`}tileWidthClass(t,e){return e.length===1||!e.some(i=>i.id==="expenses")||t==="expenses"?"flex-1 min-w-0 w-full":"w-full @2xl:w-64 @2xl:shrink-0"}renderCardTile(t,e,s){const i=this.dropTarget?.id===t?this.dropTarget.mode:null;return r`
      <div data-card=${t} class="group relative ${s}"
        @dragover=${n=>this.onCardDragOver(n,t)}
        @drop=${n=>this.onCardDrop(n,t)}>
        ${e}
        <button type="button" draggable="true" title="Drag to rearrange"
          class="hidden @2xl:flex absolute top-1.5 right-1.5 z-10 h-6 w-6 items-center justify-center rounded-md
                 text-sm text-muted/60 hover:text-ink hover:bg-hover cursor-grab active:cursor-grabbing
                 opacity-0 group-hover:opacity-100 transition-opacity"
          @dragstart=${n=>this.onCardDragStart(n,t)}
          @dragend=${this.onCardDragEnd} @click=${n=>n.stopPropagation()}>
          <sc-icon name="lucide-grip-vertical"></sc-icon>
        </button>
        ${i?this.renderDropIndicator(i):c}
      </div>
    `}renderCardGrid(t,e){const s=this.layoutRows(this.effectiveLayout(t));return r`
      <div class="mx-3 mb-3 flex flex-col gap-3">
        ${s.map(i=>r`<div class="flex flex-col @2xl:flex-row gap-3 items-stretch @2xl:items-start">
            ${i.map(n=>this.renderCardTile(n.id,this.cardContent(n.id,t,e),this.tileWidthClass(n.id,i)))}
          </div>`)}
      </div>
    `}renderExpensesCard(t){const e=t.categories.filter(i=>i.active===1),s=t.categories.filter(i=>i.active===0);return r`
      <div class="mana-card overflow-hidden">
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
          ${e.length?e.map(i=>this.renderCategory(i)):r`<li class="px-4 py-4 text-xs text-muted">No categories yet. Click “Expenses” to add one, or tell the keeper "budget 400 for groceries."</li>`}
        </ul>
        ${this.editingGoals?r`
              ${this.emojiPickerFor==="new"?this.renderEmojiPalette("new"):c}
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
              </div>`:c}
        ${s.length?r`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden · ${s.length}</button>
                ${this.showHidden?r`<ul>${s.map(i=>this.renderCategory(i,!0))}</ul>`:c}
              </div>`:c}
      </div>
    `}renderBudget(){const t=this.budget;if(!t)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const e=t.income.actual+(t.income.committed??0);return r`
      <!-- gradient summary -->
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          <button type="button" class="text-center group" title="View & log income" @click=${()=>void this.toggleIncome()}>
            <div class="text-[11px] text-white/70 flex items-center justify-center gap-1">
              Income <span class="transition-transform ${this.showIncome?"rotate-180":""}">▾</span>
            </div>
            <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight group-hover:underline decoration-white/40">${this.fmt(e)}</div>
          </button>
          ${this.stat("Spent",t.totalSpent)}
          ${this.stat("Left to spend",t.leftToSpend)}
        </div>
      </div>

      ${this.showIncome?this.renderIncomePanel():c}

      <!-- Draggable card grid (desktop): Expenses / Fixed / Savings / breakdown.
           Grip on each card → drop beside for 2 columns, in the middle to stack. -->
      ${this.renderCardGrid(t,e)}
    `}onSaveSavings(t){t.preventDefault();const e=t.target,s=Number(e.elements.namedItem("amount").value);!Number.isFinite(s)||s<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:s}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(t,e){const s=t.savingsGoal,i=e-t.totalSpent-t.totalCommitted,n=s&&s>0?Math.round(i/s*100):0;return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Savings goal</span>
          ${s!=null&&!this.editingSavings?r`<span class="text-[11px] tabular-nums ${i>=s?"text-emerald-600":"text-muted"}">${n}%</span>`:c}
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
              ${s!=null?r`<div class="mt-1.5">${this.renderBar(Math.max(0,n))}</div>`:c}`}
      </div>
    `}renderFixedCard(t,e){const s=t.fixedPayments,i=e>0?Math.round(s.total/e*100):0,n=o=>new Date(`${o}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mana-card px-4 py-3">
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
    `}renderExpenseDonut(t){const e=t.categories.filter(i=>i.spent>0).sort((i,n)=>n.spent-i.spent);if(!e.length)return c;const s={type:"doughnut",data:{labels:e.map(i=>i.name),datasets:[{data:e.map(i=>Math.round(i.spent)),backgroundColor:e.map((i,n)=>pr(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"right",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:i=>`${i.label}: ${this.fmt(Number(i.parsed))}`}}}}};return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between mb-1">
          <span class="text-[10px] text-muted">Expense breakdown</span>
          <span class="text-[11px] tabular-nums text-muted">${this.fmt(t.totalSpent)}</span>
        </div>
        <finance-chart .config=${s} height="200px"></finance-chart>
      </div>
    `}onAddAccount(t){t.preventDefault();const e=t.target,s=e.elements.namedItem("name").value.trim(),i=(e.elements.namedItem("currency").value||this.base).toUpperCase().trim(),n=e.elements.namedItem("bucket").value,o=e.elements.namedItem("subtype").value.trim();if(!s||!i)return;const a=n==="Debts"?"debt":"asset";(async()=>(await this.post("/account",{name:s,currency:i,type:a,bucket:n,subtype:o||null}),this.showAccountAdd=!1,await this.refresh()))()}onSetBalance(t,e){e.preventDefault();const s=e.target,i=Number(s.elements.namedItem("amount").value);Number.isFinite(i)&&(async()=>(await this.post("/networth",{accountId:t,amount:i}),this.editingBalanceId=null,await this.refresh()))()}renderNwAccount(t){const e=this.editingBalanceId===t.id;return r`
      <li class="border-b border-line/60 last:border-0">
        <div class="flex items-center gap-2 px-4 py-2 hover:bg-hover cursor-pointer"
          @click=${()=>{this.editingBalanceId=e?null:t.id}}>
          <span class="flex-1 min-w-0 truncate">
            <span class="text-sm text-ink">${t.name}</span>
            ${t.subtype?r`<span class="ml-1.5 text-[10px] text-muted">${t.subtype}</span>`:c}
          </span>
          <span class="text-sm font-semibold shrink-0 tabular-nums ${t.type==="debt"?"text-red-500":"text-ink"}">
            ${t.base!=null?this.fmt(t.base):`${t.original} ${t.currency}`}
          </span>
        </div>
        ${e?r`
              <form class="flex gap-2 items-center flex-wrap px-4 py-2 bg-bg/40 border-t border-line"
                @submit=${s=>this.onSetBalance(t.id,s)}>
                <span class="text-[10px] text-muted">Balance</span>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${t.original?String(t.original):""}
                  class="w-28 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${t.currency}</span>
                <span class="text-[10px] text-muted">last: ${t.asOf}</span>
                <button type="submit" class="ml-auto px-2.5 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save (today)</button>
              </form>`:c}
      </li>
    `}renderNetworth(){const t=this.networth;return t?r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="text-[11px] text-white/70">Net worth · ${vs(t.month)}</div>
        <div class="text-2xl font-bold tabular-nums leading-tight">${this.fmt(t.total)}</div>
      </div>

      ${t.groups.length?t.groups.map(e=>r`
            <div class="mx-3 mb-3 mana-card overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
                <span class="text-[11px] text-muted">${e.bucket}</span>
                <span class="text-sm font-semibold tabular-nums ${e.total<0?"text-red-500":"text-ink"}">${this.fmt(e.total)}</span>
              </div>
              <ul>${e.accounts.map(s=>this.renderNwAccount(s))}</ul>
            </div>`):r`<div class="mx-3 mb-3 px-4 py-4 text-xs text-muted mana-card">No accounts with a balance as of ${t.month}.</div>`}

      <div class="mx-3 mb-3">
        ${this.showAccountAdd?r`
              <form class="flex flex-wrap gap-2 items-center px-3 py-2 rounded-xl border border-line bg-bg/40" @submit=${e=>this.onAddAccount(e)}>
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

      ${this.renderNetworthChart(t)}
    `:r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(t){if(t.series.length<2)return c;const e=t.series.slice(-24),s=["Liquid Assets","Investments","Physical Assets","Debts"],i={"Liquid Assets":"#6366f1",Investments:"#10b981","Physical Assets":"#f59e0b",Debts:"#ef4444"},n={type:"bar",data:{labels:e.map(o=>o.month),datasets:s.map(o=>({label:o,data:e.map(a=>Math.round(a.buckets[o]??0)),backgroundColor:i[o]}))},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:10,font:{size:10}}},tooltip:{callbacks:{label:o=>`${o.dataset.label}: ${this.fmt(Number(o.parsed.y))}`}}},scales:{x:{stacked:!0,ticks:{maxTicksLimit:8,font:{size:10}},grid:{display:!1}},y:{stacked:!0,ticks:{callback:o=>this.fmtShort(Number(o)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return r`
      <div class="mx-3 mb-3 mana-card px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Net worth over time</div>
        <finance-chart .config=${n} height="220px"></finance-chart>
      </div>
    `}onAddRecurring(t){t.preventDefault();const e=t.target,s=e.elements.namedItem("name").value.trim(),i=Number(e.elements.namedItem("amount").value),n=(e.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=e.elements.namedItem("type").value,a=e.elements.namedItem("frequency").value,l=e.elements.namedItem("category").value.trim();if(!s||!Number.isFinite(i)||i<=0)return;const h={name:s,amount:i,currency:n,type:o,frequency:a};o==="expense"&&l&&(h.category=l),(async()=>(await this.post("/recurring",h),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(t){const e=new Date().toISOString().slice(0,10),s=p=>!t.end_date||p<=t.end_date,[i,n,o]=t.start_date.split("-").map(Number);if(!i||!n||!o)return null;const a=p=>String(p).padStart(2,"0");if(t.frequency==="weekly"){let p=new Date(`${t.start_date}T00:00:00Z`);const m=new Date(`${e}T00:00:00Z`);if(p<m){const v=Math.ceil((m.getTime()-p.getTime())/6048e5);p=new Date(p.getTime()+v*7*864e5)}const g=p.toISOString().slice(0,10);return s(g)?g:null}const l=t.frequency==="yearly"?12:t.frequency==="quarterly"?3:1;let h=i,u=n;for(let p=0;p<2400;p++){const m=new Date(Date.UTC(h,u,0)).getUTCDate(),g=`${h}-${a(u)}-${a(Math.min(o,m))}`;if(g>=e)return s(g)?g:null;for(u+=l;u>12;)u-=12,h+=1}return null}toggleColumn(t){const e=this.recurringColumns.includes(t)?this.recurringColumns.filter(s=>s!==t):[...this.recurringColumns,t];this.recurringColumns=e,this.post("/recurring-columns",{columns:e})}toggleEditRecur(t){this.editingRecurId=this.editingRecurId===t?null:t,this.cancelingRecurId=null}startCancel(t){this.cancelingRecurId=this.cancelingRecurId===t?null:t,this.editingRecurId=null}onSaveRecur(t,e){t.preventDefault();const s=t.target,i=l=>s.elements.namedItem(l)?.value??"",n=i("type")==="income"?"income":"expense",o=Number(i("amount"));if(!i("name").trim()||!Number.isFinite(o)||o<=0)return;const a={name:i("name").trim(),amount:o,currency:(i("currency")||this.base).toUpperCase().trim(),type:n,frequency:i("frequency"),start:i("start"),category:n==="expense"&&i("category").trim()||null,end:i("end")||null};(async()=>(await this.patch(`/recurring/${e}`,a),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(t,e){t.preventDefault();const s=t.target.elements.namedItem("end")?.value;s&&(async()=>(await this.patch(`/recurring/${e}`,{end:s}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(t){await this.patch(`/recurring/${t}`,{end:null}),await this.refresh()}async deleteRecur(t){confirm("Delete this recurring item? Its logged transactions stay in your history; only the template is removed.")&&(await this.del(`/recurring/${t}`),this.editingRecurId=null,await this.refresh())}cancelIcon(){return r`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(t){const e=t.type==="income",s=new Date().toISOString().slice(0,10),i=this.nextDue(t),n=p=>new Date(`${p}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!t.end_date&&t.end_date>=s,a="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",l=p=>{switch(p){case"type":return r`<td class="px-3 py-2"><span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${e?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-600"}">${e?"IN":"OUT"}</span></td>`;case"category":return r`<td class="px-3 py-2 whitespace-nowrap" title=${e?"income":t.category_name||""}>${e?this.renderIcon("💰"):t.category_icon?this.renderIcon(t.category_icon):r`<span class="text-muted">${t.category_name||"—"}</span>`}</td>`;case"amount":return r`<td class="px-3 py-2 text-right tabular-nums font-semibold whitespace-nowrap ${e?"text-emerald-600":"text-ink"}">${e?"+":""}${this.fmt(t.original_amount,t.original_currency)}</td>`;case"frequency":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.frequency}</td>`;case"next":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${i?n(i):"ended"}</td>`;case"account":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.account_name||"—"}</td>`;case"end":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.end_date||"—"}</td>`;default:return c}},h=2+Vs.filter(p=>this.recurringColumns.includes(p.key)).length,u=(p,m)=>p===m?"selected":"";return r`
      <tr class="group border-b border-line/60 last:border-0 cursor-pointer hover:bg-hover" @click=${()=>this.toggleEditRecur(t.id)}>
        <td class="px-3 py-2 font-medium text-ink whitespace-nowrap">
          ${t.name}
          ${o?r`<span class="ml-1.5 text-[10px] font-semibold text-amber-600">ending ${n(t.end_date)}</span>`:c}
        </td>
        ${Vs.filter(p=>this.recurringColumns.includes(p.key)).map(p=>l(p.key))}
        <td class="px-2 py-2 text-right">
          <button type="button" class="${o?"text-amber-500":"text-muted opacity-0 group-hover:opacity-100"} hover:text-red-500"
            @click=${p=>{p.stopPropagation(),this.startCancel(t.id)}} title="Cancel subscription">${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===t.id?r`<tr><td colspan=${h} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onConfirmCancel(p,t.id)}>
              <span class="text-[11px] text-muted">Cancel from</span>
              <mana-date-picker name="end" label="Cancel from" .value=${t.end_date||i||s} field-class=${a}></mana-date-picker>
              <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Confirm</button>
              ${t.end_date?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink" @click=${()=>void this.resumeRecur(t.id)}>resume</button>`:c}
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.cancelingRecurId=null}}>close</button>
              <span class="text-[11px] text-muted">A payment due on/after this date still runs, then it ends.</span>
            </form>
          </td></tr>`:c}
      ${this.editingRecurId===t.id?r`<tr><td colspan=${h} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onSaveRecur(p,t.id)}>
              <input name="name" .value=${t.name} class="flex-1 min-w-[7rem] ${a}" />
              <input name="amount" type="number" step="1" inputmode="decimal" .value=${String(t.original_amount)} class="w-20 ${a}" />
              ${this.renderCurrencySelect(t.original_currency)}
              <select name="type" class=${a}><option value="expense" ?selected=${!e}>expense</option><option value="income" ?selected=${e}>income</option></select>
              <select name="frequency" class=${a}>
                <option value="monthly" ?selected=${u(t.frequency,"monthly")==="selected"}>monthly</option>
                <option value="weekly" ?selected=${u(t.frequency,"weekly")==="selected"}>weekly</option>
                <option value="quarterly" ?selected=${u(t.frequency,"quarterly")==="selected"}>quarterly</option>
                <option value="yearly" ?selected=${u(t.frequency,"yearly")==="selected"}>yearly</option>
              </select>
              <input name="category" placeholder="category" .value=${t.category_name||""} class="flex-1 min-w-[6rem] ${a}" />
              <label class="flex items-center gap-1 text-[10px] text-muted">start<mana-date-picker name="start" label="Start" .value=${t.start_date} field-class=${a}></mana-date-picker></label>
              <label class="flex items-center gap-1 text-[10px] text-muted">cancel from<mana-date-picker name="end" clearable label="Cancel from" placeholder="never" .value=${t.end_date||""} field-class=${a}></mana-date-picker></label>
              <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save</button>
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingRecurId=null}}>close</button>
              ${t.end_date?r`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-500" @click=${()=>void this.deleteRecur(t.id)}>Delete</button>`:r`<span class="ml-auto text-[10px] text-muted">set a cancel date to enable delete</span>`}
              <span class="basis-full text-[10px] text-muted">A payment due on/after the cancel date still runs, then it ends. Deleting keeps logged transactions.</span>
            </form>
          </td></tr>`:c}
    `}monthlyEquiv(t){const e=t.base??t.original_amount;switch(t.frequency){case"weekly":return e*(52/12);case"quarterly":return e/3;case"yearly":return e/12;default:return e}}renderRecurringChart(){const t=this.recurring.filter(a=>a.type==="expense");if(!t.length)return c;const e=bs(),s=[];for(let a=-11;a<=5;a++)s.push(mr(e,a));const i=s.indexOf(e),n=s.map(a=>{const l=`${a}-31`,h=`${a}-01`;let u=0;for(const p of t)p.start_date>l||p.end_date&&p.end_date<h||(u+=this.monthlyEquiv(p));return Math.round(u)});return r`
      <div class="mx-3 mb-3 mana-card px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Monthly recurring outflow <span class="normal-case">(dashed = projected)</span></div>
        <finance-chart .config=${{type:"line",data:{labels:s,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:a=>a.p1DataIndex>i?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:a=>`${this.fmt(Number(a.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:a=>this.fmtShort(Number(a)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const t=`${this.month}-31`,e=`${this.month}-01`,s=this.recurring.filter(l=>l.start_date<=t&&(!l.end_date||l.end_date>=e));let i=0,n=0;for(const l of s)l.type==="income"?n+=this.monthlyEquiv(l):i+=this.monthlyEquiv(l);const o=this.budget?this.budget.income.actual+(this.budget.income.committed??0):n,a=o>0?Math.round(i/o*100):0;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Out / mo",i)}
          ${this.stat("In / mo",n)}
          ${this.stat("Net / mo",n-i)}
        </div>
        ${o>0?r`<div class="mt-2 text-[11px] text-white/70 text-center">${s.length} active · fixed costs are ${a}% of income</div>`:c}
      </div>
    `}renderRecurring(){const t=new Date().toISOString().slice(0,10),e=n=>!!n.end_date&&n.end_date<t,s=this.recurring.filter(e),i=this.showEnded?this.recurring:this.recurring.filter(n=>!e(n));return r`
      ${this.recurring.length?this.renderRecurringHeader():c}
      <div class="mx-3 my-3 mana-card overflow-hidden">
        <!-- column toggle -->
        <div class="relative flex items-center justify-end px-3 py-1.5 border-b border-line">
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns ▾</button>
          ${this.showColMenu?r`
                <div class="absolute right-3 top-8 z-20 rounded-xl border border-line bg-surface shadow-lg py-1" @click=${n=>n.stopPropagation()}>
                  ${Vs.map(n=>r`
                    <label class="flex items-center gap-2 px-3 py-1 text-sm hover:bg-hover cursor-pointer whitespace-nowrap">
                      <input type="checkbox" ?checked=${this.recurringColumns.includes(n.key)} @change=${()=>this.toggleColumn(n.key)} />
                      <span>${n.label}</span>
                    </label>`)}
                </div>`:c}
        </div>
        ${this.recurring.length?r`
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="text-[10px] text-muted border-b border-line">
                      <th class="text-left font-normal px-3 py-1.5">Name</th>
                      ${Vs.filter(n=>this.recurringColumns.includes(n.key)).map(n=>r`<th class="font-normal px-3 py-1.5 whitespace-nowrap ${n.key==="amount"?"text-right":"text-left"}">${n.label}</th>`)}
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
                        @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended":`Show ${s.length} ended`}</button>`:c}
                </div>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>{this.showRecurringAdd=!0}}>+ Recurring</button>
              </div>`}
      </div>
      ${this.recurring.length?this.renderRecurringChart():c}
    `}gotoYear(t){this.yearN+=t,this.expandedYearMonth=null,this.refresh()}async toggleYearMonth(t){if(this.expandedYearMonth===t){this.expandedYearMonth=null;return}this.expandedYearMonth=t;try{const e=await fetch(`/api/finance/transactions?month=${t}`);e.ok&&(this.yearMonthTxns=(await e.json()).items)}catch{}}renderYearMonthDetail(){const t=this.yearMonthTxns;if(!t.length)return r`<p class="text-xs text-muted">No transactions.</p>`;const e=n=>{const o=n.recurring_id!=null;return r`<li class="flex items-center gap-2 py-0.5 text-xs ${o?"italic text-muted":""}">
        <span class="text-muted w-11 shrink-0 tabular-nums">${n.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate">${o?"↻ ":""}${n.name||"—"}</span>
        <span class="shrink-0 tabular-nums ${n.type==="income"?"text-emerald-600":"text-ink"}">${n.base!=null?this.fmt(n.base):`${n.original_amount} ${n.original_currency}`}</span>
      </li>`},s=t.filter(n=>n.type==="income"),i=t.filter(n=>n.type==="expense");return r`
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        <div>
          <div class="text-[10px] text-muted mb-0.5">Income</div>
          <ul>${s.length?s.map(e):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
        <div>
          <div class="text-[10px] text-muted mb-0.5">Expenses</div>
          <ul>${i.length?i.map(e):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
      </div>
    `}renderYear(){const t=this.year;if(!t)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const e=t.months.map(p=>new Date(`${p.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),s=8,i=t.categories.slice(0,s),n=t.categories.slice(s),o=n.length?Array.from({length:12},(p,m)=>n.reduce((g,v)=>g+(v.monthly[m]??0),0)):null,a=i.map((p,m)=>({type:"bar",label:p.name,data:p.monthly.map(g=>Math.round(g)),backgroundColor:pr(m),stack:"spend",borderWidth:0}));o&&a.push({type:"bar",label:"Other",data:o.map(p=>Math.round(p)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const l={type:"line",label:"Income",data:t.months.map(p=>Math.round(p.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},h={type:"bar",data:{labels:e,datasets:[...a,l]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:p=>`${p.dataset.label}: ${this.fmt(Number(p.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:p=>this.fmtShort(Number(p)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},u=t.totals;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Income",u.income)}
          ${this.stat("Spent",u.spent)}
          ${this.stat("Saved",u.saved)}
        </div>
        <div class="mt-2 text-[11px] text-white/70">Savings rate ${Math.round(u.savingsRate*100)}%</div>
      </div>

      <div class="mx-3 mb-3 mana-card px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Spending by category · income line</div>
        <finance-chart .config=${h} height="240px"></finance-chart>
      </div>

      <div class="mx-3 mb-3 mana-card overflow-hidden">
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
              ${t.months.map((p,m)=>{const g=p.income>0?Math.round(p.saved/p.income*100):0,v=p.income===0&&p.spent===0,x=this.expandedYearMonth===p.month;return r`<tr class="border-b border-line/60 ${v?"opacity-40":"cursor-pointer hover:bg-hover"} ${x?"bg-hover":""}"
                    @click=${v?null:()=>void this.toggleYearMonth(p.month)}>
                    <td class="px-3 py-1.5 text-ink">${x?"▾":"▸"} ${e[m]}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${p.income?this.fmt(p.income):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-ink">${p.spent?this.fmt(p.spent):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums ${p.saved<0?"text-red-500":"text-ink"}">${v?"—":this.fmt(p.saved)}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-muted">${v?"—":`${g}%`}</td>
                  </tr>
                  ${x?r`<tr><td colspan="5" class="px-3 py-2 bg-bg/40 border-b border-line">${this.renderYearMonthDetail()}</td></tr>`:c}`})}
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
    `}render(){const t=(s,i)=>r`
      <button type="button"
        class="px-2 sm:px-3 py-1.5 text-sm border-b-2 ${this.tab===s?"border-ink text-ink":"border-transparent text-muted hover:text-ink"}"
        @click=${()=>this.setTab(s)}>${i}</button>
    `,e=(s,i)=>r`<span class="@xl:hidden">${s}</span><span class="hidden @xl:inline">${i}</span>`;return r`
      ${this.demoMode?r`<style>.finance-demo .tabular-nums { filter: blur(6px); user-select: none; transition: filter 0.2s; }</style>`:c}
      <div class="flex flex-col h-full ${this.demoMode?"finance-demo":""}">
        <header class="px-4 pt-2 border-b border-line shrink-0">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full flex items-center justify-between gap-2 @container">
            <div class="flex gap-1 -mb-px">
              ${t("budget","Budget")} ${t("recurring",e("Fixed","Recurring"))} ${t("networth",e("NW","Net worth"))} ${t("year","Year")}
            </div>
            <div class="flex items-center gap-3 shrink-0">
              ${this.tab==="budget"||this.tab==="networth"?r`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(-1)}>◀</button>
                      <button type="button" class="text-ink hover:underline decoration-dotted" title="Jump to current month" @click=${()=>this.toCurrentMonth()}><span class="sm:hidden">${_p(this.month)}</span><span class="hidden sm:inline">${vs(this.month)}</span></button>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(1)}>▶</button>
                    </div>`:this.tab==="year"?r`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(-1)}>◀</button>
                      <span class="text-ink">${this.yearN}</span>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(1)}>▶</button>
                    </div>`:c}
              <button type="button" class="text-base ${this.demoMode?"text-amber-500":"text-muted hover:text-ink"}" title="${this.demoMode?"Demo mode on — click to show real numbers":"Demo mode"}"
                @click=${()=>{this.demoMode=!this.demoMode}}><sc-icon name="lucide-${this.demoMode?"eye-off":"eye"}"></sc-icon></button>
              <button type="button" class="text-base ${this.showSettings?"text-ink":"text-muted hover:text-ink"}" title="Finance settings"
                @click=${()=>{this.showSettings=!this.showSettings}}><sc-icon name="lucide-settings"></sc-icon></button>
            </div>
          </div>
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full @container">
            ${this.showSettings?this.renderSettings():c}
            ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.tab==="budget"?this.renderBudget():this.tab==="networth"?this.renderNetworth():this.tab==="year"?this.renderYear():this.renderRecurring()}
          </div>
        </div>
      </div>
    `}};D([d()],E.prototype,"tab",2);D([d()],E.prototype,"month",2);D([d()],E.prototype,"loading",2);D([d()],E.prototype,"base",2);D([d()],E.prototype,"budget",2);D([d()],E.prototype,"expandedCat",2);D([d()],E.prototype,"catTxns",2);D([d()],E.prototype,"newCat",2);D([d()],E.prototype,"newCatIcon",2);D([d()],E.prototype,"emojiPickerFor",2);D([d()],E.prototype,"showHidden",2);D([d()],E.prototype,"logDay",2);D([d()],E.prototype,"networth",2);D([d()],E.prototype,"recurring",2);D([d()],E.prototype,"year",2);D([d()],E.prototype,"yearN",2);D([d()],E.prototype,"expandedYearMonth",2);D([d()],E.prototype,"yearMonthTxns",2);D([d()],E.prototype,"editingSavings",2);D([d()],E.prototype,"editingGoals",2);D([d()],E.prototype,"editingTxnId",2);D([d()],E.prototype,"showIncome",2);D([d()],E.prototype,"incomeTxns",2);D([d()],E.prototype,"showAccountAdd",2);D([d()],E.prototype,"editingBalanceId",2);D([d()],E.prototype,"showRecurringAdd",2);D([d()],E.prototype,"editingRecurId",2);D([d()],E.prototype,"cancelingRecurId",2);D([d()],E.prototype,"recurringColumns",2);D([d()],E.prototype,"currencies",2);D([d()],E.prototype,"supportedCurrencies",2);D([d()],E.prototype,"lastCurrency",2);D([d()],E.prototype,"showSettings",2);D([d()],E.prototype,"demoMode",2);D([d()],E.prototype,"cards",2);D([d()],E.prototype,"recurringAsPaid",2);D([d()],E.prototype,"showColMenu",2);D([d()],E.prototype,"showEnded",2);D([d()],E.prototype,"budgetLayout",2);D([d()],E.prototype,"dragCardId",2);D([d()],E.prototype,"dropTarget",2);E=D([w("finance-section")],E);async function Op(t,e=400,s=.85){const i=await ol(t,e);if(!i)return await Lp(t);const n=i.toDataURL("image/webp",s);return n.startsWith("data:image/webp")?n:i.toDataURL("image/jpeg",s)}async function fg(t,e=1600,s=.85){let i;try{i=await ol(t,e)}catch{return t}if(!i)return t;const n=a=>new Promise(l=>i.toBlob(l,a,s));let o=await n("image/webp");return(!o||o.type!=="image/webp")&&(o=await n("image/jpeg")),o&&o.size<t.size?o:t}async function ol(t,e){const s=URL.createObjectURL(t);try{const i=await new Promise((u,p)=>{const m=new Image;m.onload=()=>u(m),m.onerror=()=>p(new Error("could not decode image")),m.src=s}),n=Math.min(1,e/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*n)),a=Math.max(1,Math.round(i.height*n)),l=document.createElement("canvas");l.width=o,l.height=a;const h=l.getContext("2d");return h?(h.drawImage(i,0,0,o,a),l):null}finally{URL.revokeObjectURL(s)}}function Lp(t){return new Promise((e,s)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>s(i.error),i.readAsDataURL(t)})}var Rp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,q=(t,e,s,i)=>{for(var n=i>1?void 0:i?Np(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Rp(e,s,n),n};let K=class extends T{constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.detailsOpen=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=t=>{const e=t.composedPath();if(this.editingNote==="new"){const s=this.renderRoot.querySelector(".newnote-card");s&&!e.includes(s)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newfact-form");s&&!e.includes(s)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newaction-form");s&&!e.includes(s)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const s=this.renderRoot.querySelector(".inline-edit");s&&!e.includes(s)&&(s.blur(),s.dispatchEvent(new Event("blur")))}},this.onOpsEvent=t=>{const e=t.detail,s=e?.action;if(s==="open-person"&&typeof e?.person=="number"){this.open(e.person);return}s==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onOpenReviewIntent=()=>{try{localStorage.removeItem("circle.intent")}catch{}this.openReview()},this.onPaste=async t=>{const e=t;if(this.selectedId==null||!e.clipboardData)return;const s=document.activeElement;if(s&&/^(INPUT|TEXTAREA)$/.test(s.tagName))return;for(const n of Array.from(e.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){e.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const i=e.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(i)){e.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("circle-open-review",this.onOpenReviewIntent),document.addEventListener("paste",this.onPaste);const t=(()=>{try{return localStorage.getItem("circle.open")}catch{return null}})(),e=t?this.fetchDetail(Number(t)):null;this.refresh().then(()=>{this.restoreOpen(e),this.consumeReviewIntent()})}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("circle-open-review",this.onOpenReviewIntent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}consumeReviewIntent(){try{localStorage.getItem("circle.intent")==="review"&&(localStorage.removeItem("circle.intent"),this.openReview())}catch{}}async refresh(){try{const t=await fetch("/api/circle");if(t.ok){const e=await t.json();this.circles=e.circles,this.people=e.people,this.pendingCount=e.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async fetchDetail(t){try{const e=await fetch(`/api/circle/person/${t}`);if(e.ok)return(await e.json()).person}catch{}return null}async loadDetail(t,e){const s=await(e??this.fetchDetail(t));s&&this.selectedId===t&&(this.detail=s)}open(t,e){this.selectedId=t,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.detailsOpen=!1;try{localStorage.setItem("circle.open",String(t))}catch{}this.reportFocus(t),this.loadDetail(t,e)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(t){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t})}).catch(()=>{})}restoreOpen(t=null){try{const e=localStorage.getItem("circle.open");e&&this.people.some(s=>s.id===Number(e))&&this.open(Number(e),t??void 0)}catch{}}circleName(t){return t==null?"New":this.circles.find(e=>e.id===t)?.name??"New"}circleNames(t){const s=(t.circle_ids?.length?t.circle_ids:t.circle_id!=null?[t.circle_id]:[]).map(i=>this.circles.find(n=>n.id===i)?.name).filter(i=>!!i);return s.length?s:["New"]}primaryCircleName(t){return this.circleNames(t)[0]??"New"}async patchPerson(t,e){await fetch(`/api/circle/person/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async post(t,e){const s=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});await this.refresh();try{return await s.json()}catch{return null}}async patch(t,e){await fetch(t,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async del(t){await fetch(t,{method:"DELETE"}),await this.refresh()}async createAndAssign(t,e){const s=e.trim();if(this.creatingCircle=!1,!s)return;const i=await this.post("/api/circle/circle",{name:s});i?.id&&await this.post(`/api/circle/person/${t}/circle`,{circle_id:i.id})}async addPerson(){const t=this.draftName.trim();if(!t)return;const e=await this.post("/api/circle/person",{name:t,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,e?.id&&this.open(e.id)}async removePerson(t){confirm(`Remove ${t.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${t.id}`),this.back())}async onPhotoFile(t,e){const s=e.target,i=s.files?.[0];s.value="",i&&await this.uploadPhotoFile(t.id,i)}async uploadPhotoFile(t,e){if(!e.type.startsWith("image/")){alert("That's not an image.");return}if(e.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const s=await Op(e,400,.85);await this.patchPerson(t,{photo:s})}catch{alert("Couldn't process that image.")}}initials(t){const e=t.trim().split(/\s+/);return e.length===1?(e[0]?.slice(0,2)??"").toUpperCase():((e[0]?.[0]??"")+(e[e.length-1]?.[0]??"")).toUpperCase()}avatarStyle(t){let e=0;for(const s of t)e=(e*31+s.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${e} 68% 55%), hsl(${(e+48)%360} 70% 45%));`}renderAvatar(t,e="w-9 h-9",s="text-xs"){return t.photo?r`<img src=${t.photo} alt="" class="${e} rounded-full object-cover shrink-0" loading="lazy" />`:r`<span class="${e} ${s} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(t.name)}>${this.initials(t.name)}</span>`}relTime(t){if(!t)return"never";const e=Math.floor((Date.now()/1e3-t)/86400);return e<=0?"today":e===1?"yesterday":e<30?`${e}d ago`:e<365?`${Math.floor(e/30)}mo ago`:`${Math.floor(e/365)}y ago`}fmtDate(t,e){const s=t?new Date(t+"T12:00:00"):new Date(e*1e3),i={month:"long",day:"numeric"};return s.getFullYear()!==new Date().getFullYear()&&(i.year="numeric"),s.toLocaleDateString(void 0,i)}fmtMeetDate(t){const e=new Date(t+"T12:00:00"),s={weekday:"long",month:"short",day:"numeric"};return e.getFullYear()!==new Date().getFullYear()&&(s.year="numeric"),e.toLocaleDateString(void 0,s)}filteredPeople(){return this.filter==="needs"?this.people.filter(t=>(t.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(t=>this.circleNames(t).includes(this.filter))}renderRow(t){const e=t.title&&t.company?`${t.title}, ${t.company}`:t.company??t.title??this.circleNames(t).join(", "),s=t.open_actions??0;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover" @click=${()=>this.open(t.id)}>
          ${this.renderAvatar(t,"w-10 h-10","text-sm")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 pr-3 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${t.name}</span>
              <span class="block text-xs text-muted truncate">${e}</span>
            </span>
            ${s>0?r`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${s} to do</span>`:c}
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>`}renderListBody(){const t=this.filteredPeople();if(t.length===0)return r`<p class="px-4 py-3 text-xs text-muted">${this.filter==="needs"?"Nothing open. You're caught up.":"No one here yet. Add someone, or tell the Circle keeper about a person you met."}</p>`;if(this.filter!=="all")return r`<ul>${t.map(n=>this.renderRow(n))}</ul>`;const e=[...this.circles.map(n=>n.name),"New"],s=new Set,i=e.filter(n=>!s.has(n)&&(s.add(n),!0)).map(n=>({name:n,people:t.filter(o=>this.primaryCircleName(o)===n)})).filter(n=>n.people.length>0);return r`${i.map(n=>r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">${n.name} (${n.people.length})</h3>
        <ul>${n.people.map(o=>this.renderRow(o))}</ul>
      </section>`)}`}renderList(){const t=this.people.some(o=>(o.open_actions??0)>0),e=[{key:"all",label:"All"}];t&&e.push({key:"needs",label:"Needs you"});const s=this.circles.filter(o=>o.id<=9),i=this.circles.filter(o=>o.id>9),n=o=>r`<button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-full border transition-colors ${this.filter===o.key?"border-accent bg-accent text-white":"border-line text-muted hover:bg-hover"}" @click=${()=>this.filter=o.key}>${o.label}</button>`;return r`
      <header class="px-4 py-3 border-b border-line shrink-0">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-ink">Circles</h2>
          <div class="flex items-center gap-2">
            ${this.pendingCount>0?r`<button type="button" class="text-xs px-2 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 hover:bg-violet-500/25" @click=${()=>void this.openReview()}>${this.pendingCount} to confirm</button>`:c}
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
          </div>`:c}
        <div class="flex items-center gap-1.5 mt-2.5 overflow-x-auto -mx-1 px-1 pb-0.5 no-scrollbar">
          ${e.map(n)}
          ${s.map(o=>n({key:o.name,label:o.name}))}
          ${i.length>0?r`<span class="shrink-0 w-px h-4 bg-line mx-0.5 self-center"></span>`:c}
          ${i.map(o=>n({key:o.name,label:o.name}))}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(t,e,s){return r`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${t}</h3>
          ${s??c}
        </div>
        ${e}
      </section>`}collapsibleSection(t,e,s,i){return r`
      <section class="px-4 pt-4 pb-1">
        <button type="button" class="flex items-center gap-1 mb-2 group/sec" @click=${s}>
          <span class="text-[11px] font-medium tracking-wide text-muted group-hover/sec:text-ink">${t}</span>
          <span class="text-[10px] text-muted group-hover/sec:text-ink transition-transform ${e?"rotate-90":""}">›</span>
        </button>
        ${e?i:c}
      </section>`}headerInput(t,e,s,i){return r`<input type="text" placeholder=${e} class="${s} bg-transparent w-full focus:outline-none focus:bg-surface rounded px-1 -mx-1"
      .value=${t??""} @change=${n=>i(n.target.value.trim())} />`}toggleNoteExpand(t){this.expandedNotes=this.expandedNotes.includes(t)?this.expandedNotes.filter(e=>e!==t):[...this.expandedNotes,t]}noteRows(t){const e=t.split(`
`).reduce((s,i)=>s+Math.max(1,Math.ceil(i.length/65)),0);return Math.min(40,Math.max(3,e+1))}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}truncateBody(t){const e=t.split(`
`);if(e.length>=6)return e.slice(0,5).join(`
`).trimEnd();if(t.length<=280)return t;const s=t.slice(0,260),i=s.lastIndexOf(" ");return(i>200?s.slice(0,i):s).trimEnd()}renderNoteCard(t,e){const s=e.body.length>280||(e.body.match(/\n/g)?.length??0)>=6,i=this.expandedNotes.includes(e.id);return r`
      <article class="group/note rounded-lg border border-line p-3 mb-2">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            ${this.editingField===`ntitle:${e.id}`?r`<input class="inline-edit w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" .value=${e.title??""} autofocus
                  @blur=${n=>{this.patch(`/api/circle/note/${e.id}`,{title:n.target.value.trim()||null}),this.editingField=null}}
                  @keydown=${n=>{n.key==="Enter"?n.target.blur():n.key==="Escape"&&(this.editingField=null)}} />`:r`<h4 class="text-sm font-semibold text-ink cursor-text hover:bg-hover rounded px-1 -mx-1 truncate" @click=${()=>{this.editingField=`ntitle:${e.id}`}}>${e.title||r`<span class="text-muted/50 font-normal italic">Add a title</span>`}</h4>`}
          </div>
          <button type="button" class="opacity-0 group-hover/note:opacity-100 text-muted hover:text-red-500 text-xs shrink-0" @click=${()=>void this.del(`/api/circle/note/${e.id}`)}>✕</button>
        </div>
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(e.occurred_on,e.created_at)}</div>
        ${this.editingField===`nbody:${e.id}`?r`<textarea class="inline-edit w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none overflow-hidden mt-2" rows=${this.noteRows(e.body)} autofocus
              @input=${n=>this.autoGrow(n.target)}
              @blur=${n=>{this.patch(`/api/circle/note/${e.id}`,{body:n.target.value.trim()}),this.editingField=null}}>${e.body}</textarea>`:r`
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${e.id}`}}>${i||!s?e.body:this.truncateBody(e.body)}${s?r`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(e.id)}}>${i?" Show less":"… Read more"}</button>`:c}</p>`}
      </article>`}renderNewNoteCard(){return r`
      <article class="newnote-card rounded-lg border border-ink/40 p-3 mb-2">
        <input id="nn-title" type="text" placeholder="Title" class="w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" />
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(new Date().toISOString().slice(0,10),0)}</div>
        <textarea id="nn-body" rows="4" placeholder="What happened, what you talked about, your read on them…"
          class="w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none mt-2" autofocus></textarea>
      </article>`}async saveNewNote(){if(this.editingNote!=="new"||this.selectedId==null)return;const t=this.renderRoot.querySelector("#nn-title")?.value.trim()||null,e=this.renderRoot.querySelector("#nn-body")?.value.trim();this.editingNote=null,e&&await this.post(`/api/circle/person/${this.selectedId}/note`,{title:t,body:e,kind:"talk",date:new Date().toISOString().slice(0,10)})}renderFacts(t){return r`
      ${t.facts.length===0?r`<p class="text-xs text-muted italic mb-1">Nothing yet. Add a detail, or it fills in as you talk about them.</p>`:c}
      <div class="space-y-1">
        ${t.facts.map(e=>r`
          <div class="flex items-center gap-2 group/f">
            <input type="text" placeholder="label" class="w-28 shrink-0 text-[11px] text-muted bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface focus:text-ink"
              .value=${e.label??""} @change=${s=>void this.patch(`/api/circle/fact/${e.id}`,{label:s.target.value.trim()||null})} />
            <input type="text" class="flex-1 min-w-0 text-sm text-ink bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface"
              .value=${e.value} @change=${s=>{const i=s.target.value.trim();i?this.patch(`/api/circle/fact/${e.id}`,{value:i}):this.del(`/api/circle/fact/${e.id}`)}} />
            <button type="button" class="opacity-0 group-hover/f:opacity-100 text-muted hover:text-red-500 text-xs" @click=${()=>void this.del(`/api/circle/fact/${e.id}`)}>✕</button>
          </div>`)}
      </div>
      <div class="flex gap-1.5 mt-2">
        <input id="fact-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
        <input id="fact-value" type="text" placeholder="add a detail…" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
          @keydown=${e=>{e.key==="Enter"&&this.submitFact(t.id)}} />
        <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitFact(t.id)}>Add</button>
      </div>`}parseTags(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(String):[]}catch{return[]}}async setTags(t,e){await this.patch(`/api/circle/person/${t}`,{tags:e})}renderTags(t){const e=this.parseTags(t.tags);return r`
      <div class="flex flex-wrap items-center gap-1.5">
        ${e.map(s=>r`<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}
          <button type="button" class="text-muted hover:text-red-500" @click=${()=>void this.setTags(t.id,e.filter(i=>i!==s))}>✕</button></span>`)}
        <input type="text" placeholder="+ tag" class="w-20 text-xs bg-transparent px-1 py-0.5 focus:outline-none focus:bg-surface rounded text-ink"
          @keydown=${s=>{if(s.key==="Enter"){const i=s.target,n=i.value.trim();n&&!e.includes(n)&&(this.setTags(t.id,[...e,n]),i.value="")}}} />
      </div>`}submitFact(t){const e=this.renderRoot.querySelector("#fact-label"),s=this.renderRoot.querySelector("#fact-value"),i=s?.value.trim();i&&(this.post(`/api/circle/person/${t}/fact`,{value:i,label:e?.value.trim()||null}),e&&(e.value=""),s&&(s.value=""))}renderCheck(t,e){return r`<button type="button"
      class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
      style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
      aria-label=${t?"Mark not done":"Mark done"}
      @click=${e}>
      ${t?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:c}
    </button>`}renderActions(t){const e=t.actions.filter(n=>n.done!==1),s=t.actions.filter(n=>n.done===1),i=this.showCompletedActions?[...e,...s]:e;return r`
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
              @keydown=${n=>{n.key==="Enter"?this.submitAction(t.id):n.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitAction(t.id)}>Add</button>
          </div>`:r`<div class="flex items-center gap-4 ${e.length?"mt-1.5":""}">
            <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.editingField="newaction"}}>+ add</button>
            ${s.length?r`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>done (${s.length})</button>`:c}
          </div>`}`}submitAction(t){const s=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,s&&this.post(`/api/circle/person/${t}/action`,{body:s})}inlineField(t,e,s){return r`
      <label class="block">
        <span class="text-[10px] text-muted">${t}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${e??""} @change=${i=>s(i.target.value.trim())} />
      </label>`}readKeepingInTouch(t){return t.next_meet_date?r`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(t.next_meet_date,0)}</div>`:c}readFacts(t){if(!t.facts.length)return c;const e=t.facts.filter(i=>i.label),s=t.facts.filter(i=>!i.label);return this.section("Details",r`
      ${e.map(i=>r`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${i.label}</span>
        <span class="text-ink flex-1">${i.value}</span></div>`)}
      ${s.length?r`<ul class="mt-1 space-y-0.5">${s.map(i=>r`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${i.value}</li>`)}</ul>`:c}`)}readTags(t){const e=this.parseTags(t.tags);return e.length?this.section("Tags",r`<div class="flex flex-wrap gap-1.5">${e.map(s=>r`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}</span>`)}</div>`):c}readActions(t){return t.actions.length?this.section("Action items",r`<ul class="space-y-0.5">${t.actions.map(e=>r`
      <li class="flex items-center gap-2 text-sm">
        ${this.renderCheck(e.done===1,()=>void this.patch(`/api/circle/action/${e.id}`,{done:e.done!==1}))}
        <span class="${e.done?"line-through text-muted":"text-ink"}">${e.body}</span>
      </li>`)}</ul>`):c}readContact(t){const e=[];return t.email&&e.push(["Email",t.email]),t.phone&&e.push(["Phone",t.phone]),e.length?this.section("Details",r`${e.map(([s,i])=>r`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${s}</span><span class="text-ink flex-1">${i}</span></div>`)}`):c}renderDetailAvatar(t){return r`
      <div class="relative shrink-0">
        <button type="button" class="relative group/av w-16 h-16 rounded-full overflow-hidden block" title="Set photo" @click=${()=>{this.photoMenuOpen=!this.photoMenuOpen}}>
          ${t.photo?r`<img src=${t.photo} alt="" class="w-16 h-16 rounded-full object-cover" />`:r`<span class="w-16 h-16 text-xl rounded-full grid place-items-center text-white font-semibold shadow-sm" style=${this.avatarStyle(t.name)}>${this.initials(t.name)}</span>`}
          <span class="absolute inset-0 rounded-full bg-black/45 text-white text-[10px] grid place-items-center opacity-0 group-hover/av:opacity-100 transition-opacity">${t.photo?"Change":"Photo"}</span>
        </button>
        <input id="photo-file" type="file" accept="image/*" class="hidden" @change=${e=>void this.onPhotoFile(t,e)} />
        ${this.photoMenuOpen?this.renderPhotoMenu(t):c}
      </div>`}renderPhotoMenu(t){return r`
      <div class="fixed inset-0 z-20" @click=${()=>{this.photoMenuOpen=!1}}></div>
      <div class="absolute top-full left-0 mt-1.5 z-30 w-64 rounded-lg border border-line bg-bg shadow-lg p-3 text-sm" @click=${e=>e.stopPropagation()}>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-ink" @click=${()=>this.photoInput?.click()}>Upload from computer</button>
        <div class="my-2 text-[11px] text-muted text-center">or paste an image URL</div>
        <div class="flex gap-1.5">
          <input id="photo-url-input" type="text" placeholder="https://…" class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @keydown=${e=>{e.key==="Enter"&&this.setPhotoFromUrl(t.id)}} />
          <button type="button" class="text-xs px-2 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>void this.setPhotoFromUrl(t.id)}>Set</button>
        </div>
        <p class="text-[11px] text-muted mt-2">Tip: copy any image (⌘C) and press ⌘V right here.</p>
        ${t.photo?r`<button type="button" class="text-xs text-muted hover:text-red-500 mt-2" @click=${()=>{this.patchPerson(t.id,{photo:null}),this.photoMenuOpen=!1}}>Remove photo</button>`:c}
      </div>`}async setPhotoFromUrl(t){const s=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(s)try{const i=await fetch(`/api/circle/person/${t}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!i.ok){const n=await i.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??i.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(t,e,s,i,n=""){return this.editingField===t?r`<input type="text" class="inline-edit ${s} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${e??""} autofocus
        @blur=${o=>{i(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:e?r`<span class="${s} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=t}}>${e}</span>`:n?r`<span class="${s} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=t}}>${n}</span>`:c}onCircleSelect(t,e){const s=e.target.value;if(this.editingField=null,!!s){if(s==="__new__"){this.creatingCircle=!0;return}this.post(`/api/circle/person/${t.id}/circle`,{circle_id:Number(s)})}}detailCircles(t){return t.circles?.length?t.circles:t.circle_id!=null&&t.circle_name?[{id:t.circle_id,name:t.circle_name}]:[]}renderCirclePills(t){const e=this.detailCircles(t),s=this.circles.filter(i=>!e.some(n=>n.id===i.id));return r`
      ${e.map(i=>r`<span class="group/pill inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-surface border border-line text-ink">${i.name}
        <button type="button" class="w-0 overflow-hidden group-hover/pill:w-3.5 group-hover/pill:ml-0.5 transition-all text-muted hover:text-red-500" title="Remove from ${i.name}" @click=${()=>void this.del(`/api/circle/person/${t.id}/circle/${i.id}`)}>✕</button></span>`)}
      ${this.editingField==="circle"?r`<select class="inline-edit px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus @change=${i=>this.onCircleSelect(t,i)} @blur=${()=>{this.editingField=null}}>
            <option value="" selected disabled>add to…</option>
            ${s.map(i=>r`<option value=${i.id}>${i.name}</option>`)}
            <option value="__new__">+ New circle…</option>
          </select>`:this.creatingCircle?r`<input type="text" placeholder="new circle" class="w-24 px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus
              @keydown=${i=>{i.key==="Enter"&&this.createAndAssign(t.id,i.target.value),i.key==="Escape"&&(this.creatingCircle=!1)}}
              @blur=${()=>{this.creatingCircle=!1}} />`:r`<button type="button" class="text-xs px-2 py-0.5 rounded-full border border-line text-muted hover:text-ink hover:bg-hover" title="Add to a circle" @click=${()=>{this.editingField="circle"}}>${e.length?"+":"+ circle"}</button>`}`}renderBio(t){return this.editingField==="bio"?r`<textarea rows="5" class="inline-edit w-full text-sm text-ink bg-surface rounded p-2 ring-1 ring-ink focus:outline-none leading-relaxed resize-y"
        .value=${t.bio??""} autofocus
        @blur=${e=>{this.patchPerson(t.id,{bio:e.target.value.trim()||null}),this.editingField=null}}>${t.bio??""}</textarea>`:t.bio?r`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${t.bio}</p>`:r`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}isFollowingOnly(t){const e=this.detailCircles(t);return e.length>0&&e.every(s=>s.id>9)}renderKit(t){if(this.isFollowingOnly(t))return c;const e=t.next_meet_date,s="nextmeet",i=r`<button type="button" class="rounded px-1 -mx-1 hover:bg-hover ${e?"text-ink":"text-muted/50"}"
        @click=${n=>void this.querySelector(`mana-date-picker[data-field="${s}"]`)?.show(n.currentTarget)}>${e?this.fmtMeetDate(e):"—"}</button>
      <mana-date-picker headless clearable data-field=${s} label="Next meet" .value=${e??""}
        @change=${n=>void this.patchPerson(t.id,{next_meet_date:n.target.value||null})}></mana-date-picker>`;return r`<div>
      <span class="block text-[11px] text-muted">Next meet</span>
      <span class="block mt-0.5 text-sm leading-tight">${i}</span>
    </div>`}tidyLabel(t){return t===t.toUpperCase()&&t!==t.toLowerCase()?t.toLowerCase():t}renderDetailsList(t){return r`
      ${t.facts.map(e=>r`
        <div class="flex gap-3 py-0.5 text-sm group/d items-start">
          ${e.label?r`<span class="text-[11px] capitalize tracking-wide text-muted w-28 shrink-0 pt-1 cursor-text hover:text-ink" @click=${()=>{this.editingField=`factlabel:${e.id}`}}>${this.editingField===`factlabel:${e.id}`?r`<input type="text" class="inline-edit w-full bg-surface ring-1 ring-ink rounded px-1 focus:outline-none text-ink normal-case" .value=${e.label} autofocus @blur=${s=>{this.patch(`/api/circle/fact/${e.id}`,{label:s.target.value.trim()||null}),this.editingField=null}} @keydown=${s=>{s.key==="Enter"&&s.target.blur()}} />`:this.tidyLabel(e.label)}</span>`:r`<span class="text-muted pt-0.5">•</span>`}
          <span class="flex-1 min-w-0">${this.editable(`fact:${e.id}`,e.value,"text-ink",s=>s?void this.patch(`/api/circle/fact/${e.id}`,{value:s}):void this.del(`/api/circle/fact/${e.id}`))}</span>
          <button type="button" class="opacity-0 group-hover/d:opacity-100 text-muted hover:text-red-500 text-xs pt-1" @click=${()=>void this.del(`/api/circle/fact/${e.id}`)}>✕</button>
        </div>`)}
      ${this.editingField==="newfact"?r`<div class="newfact-form flex gap-1.5 mt-1.5">
            <input id="nf-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input id="nf-value" type="text" placeholder="detail" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${e=>{e.key==="Enter"?this.submitNewFact(t.id):e.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitNewFact(t.id)}>Add</button>
          </div>`:r`<button type="button" class="text-xs text-muted hover:text-ink mt-1.5" @click=${()=>{this.editingField="newfact"}}>+ add detail</button>`}`}submitNewFact(t){const e=this.renderRoot.querySelector("#nf-label"),i=this.renderRoot.querySelector("#nf-value")?.value.trim();if(!i){this.editingField=null;return}this.post(`/api/circle/person/${t}/fact`,{value:i,label:e?.value.trim()||null}),this.editingField=null}renderDetailBody(t){return r`
      <div class="px-4 py-4 flex items-start gap-3">
        ${this.renderDetailAvatar(t)}
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div class="text-lg font-semibold text-ink min-w-0">${this.editable("name",t.name,"text-lg font-semibold text-ink",e=>e&&void this.patchPerson(t.id,{name:e}))}</div>
            <div class="flex flex-wrap items-center justify-end gap-1 shrink-0 pt-1">${this.renderCirclePills(t)}</div>
          </div>
          <div class="text-sm text-muted">${this.editable("location",t.location,"text-sm text-muted",e=>void this.patchPerson(t.id,{location:e||null}),"+ add address")}</div>
          <div class="text-sm text-muted">${this.editable("title",t.title,"text-sm text-muted",e=>void this.patchPerson(t.id,{title:e||null}),"+ what they do")}</div>
          ${t.company||this.editingField==="company"?r`<div class="text-sm text-muted">${this.editable("company",t.company,"text-sm text-muted",e=>void this.patchPerson(t.id,{company:e||null}))}</div>`:c}
        </div>
      </div>

      ${this.isFollowingOnly(t)?c:r`<div class="px-4 pb-1">${this.renderKit(t)}</div>`}

      ${this.section("Action items",this.renderActions(t))}

      ${this.section("Notes",r`
        ${this.editingNote==="new"?this.renderNewNoteCard():c}
        ${t.notes.length===0&&this.editingNote!=="new"?r`<p class="text-xs text-muted italic">No notes yet.</p>`:c}
        ${t.notes.map(e=>this.renderNoteCard(t,e))}
      `,r`<button type="button" class="text-xs text-ink hover:underline" @click=${()=>{this.editingNote="new"}}>+ New note</button>`)}

      ${this.collapsibleSection("Details",this.detailsOpen,()=>{this.detailsOpen=!this.detailsOpen},r`
        <div class="mb-3">
          <span class="block text-[11px] text-muted mb-1">About</span>
          ${this.renderBio(t)}
        </div>
        ${this.renderDetailsList(t)}
        <div class="mt-4">
          <button type="button" class="text-xs text-muted/60 hover:text-red-500" @click=${()=>void this.removePerson(t)}>Remove contact</button>
        </div>
      `)}`}renderSettingsPanel(){return this.settingsOpen?r`
      <div class="fixed inset-0 z-30" @click=${()=>{this.settingsOpen=!1}}></div>
      <div class="absolute right-3 top-12 z-40 w-56 rounded-lg border border-line bg-bg shadow-lg p-2 text-sm" @click=${t=>t.stopPropagation()}>
        <div class="px-2 py-1 text-[11px] font-medium tracking-wide text-muted">Circles settings</div>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Import contacts · soon</button>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Manage circles · soon</button>
      </div>`:c}renderDetail(){const t=this.detail;return t?r`
      <header class="relative px-3 py-2.5 shrink-0 flex items-center justify-between gap-2">
        <button type="button" class="text-base text-ink hover:bg-hover flex items-center gap-1 px-2 py-1 -ml-1 rounded" @click=${()=>this.back()}>‹ All</button>
        <button type="button" class="text-muted hover:text-ink p-1.5 rounded hover:bg-hover" title="Settings" @click=${()=>{this.settingsOpen=!this.settingsOpen}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        ${this.renderSettingsPanel()}
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.renderDetailBody(t)}
      </div>`:r`<div class="flex-1 grid place-items-center text-muted text-sm">Loading…</div>`}async openReview(){try{const t=await fetch("/api/circle/pending");t.ok&&(this.pending=(await t.json()).pending)}catch{}this.view="review"}async confirmPending(t,e){await fetch(`/api/circle/pending/${t}/confirm`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person_id:e})}),this.pending=this.pending.filter(s=>s.id!==t),await this.refresh(),this.pending.length===0&&(this.view="list")}async rejectPending(t){await this.del(`/api/circle/pending/${t}`),this.pending=this.pending.filter(e=>e.id!==t),this.pending.length===0&&(this.view="list")}renderReview(){return r`
      <header class="px-3 py-2.5 border-b border-line shrink-0 flex items-center gap-2">
        <button type="button" class="text-sm text-muted hover:text-ink flex items-center gap-1 px-1.5 py-1 rounded hover:bg-hover" @click=${()=>{this.view="list"}}>‹ All</button>
        <span class="text-sm text-ink font-medium">Confirm what I picked up</span>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto px-4 py-3">
        ${this.pending.length===0?r`<p class="text-sm text-muted">Nothing to confirm.</p>`:c}
        <ul class="space-y-3">${this.pending.map(t=>{const e=t.target_kind==="person",s=t.person_id==null&&!e;return r`
          <li class="border border-line rounded-lg p-3">
            ${e?r`<p class="text-sm font-medium text-ink mb-0.5">Add ${t.person_hint??"this person"} to your circle?</p>`:c}
            <p class="text-sm ${e?"text-muted":"text-ink"} mb-2">${t.suggestion}</p>
            ${s?r`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${t.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(i=>r`<option value=${i.id}>${i.name}</option>`)}
                </select>
              </div>`:c}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(t.id)}>${e?"Not now":"No"}</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const i=this.renderRoot.querySelector(`#pend-${t.id}`),n=t.person_id??(i?.value?Number(i.value):null);if(s&&n==null){alert("Pick a person first.");return}this.confirmPending(t.id,n)}}>${e?"Add":"Yes"}</button>
            </div>
          </li>`})}</ul>
      </div>`}render(){return r`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};q([d()],K.prototype,"view",2);q([d()],K.prototype,"circles",2);q([d()],K.prototype,"people",2);q([d()],K.prototype,"pendingCount",2);q([d()],K.prototype,"loading",2);q([d()],K.prototype,"filter",2);q([d()],K.prototype,"selectedId",2);q([d()],K.prototype,"detail",2);q([d()],K.prototype,"adding",2);q([d()],K.prototype,"pending",2);q([d()],K.prototype,"draftName",2);q([d()],K.prototype,"draftCircle",2);q([d()],K.prototype,"editingNote",2);q([d()],K.prototype,"creatingCircle",2);q([d()],K.prototype,"editingField",2);q([d()],K.prototype,"settingsOpen",2);q([d()],K.prototype,"showCompletedActions",2);q([d()],K.prototype,"detailsOpen",2);q([d()],K.prototype,"expandedNotes",2);q([d()],K.prototype,"photoMenuOpen",2);q([Y("#photo-file")],K.prototype,"photoInput",2);K=q([w("circle-section")],K);var jp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,nt=(t,e,s,i)=>{for(var n=i>1?void 0:i?Fp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&jp(e,s,n),n};const xs=[{key:"topic",question:"What do you want to pull off?",hint:'The quest in a few words. "Retell webhook into Nudge", "a story people listen to".',required:!0},{key:"mission",question:"What will exist when it's done?",hint:"Something real that isn't there now: a workflow running on live calls, a story told to a room, a tool strangers use.",required:!0},{key:"success",question:"Who sees it, or what proves it's real?",hint:"A person or a live run: a user, a listener, a client, production. This becomes the last step, the gate.",required:!0},{key:"known",question:"What do you already have or know?",hint:'The steps skip it. "Nothing" is a fine answer.',required:!1}],Up=[2,3,4,6],Bp={link:"a link",file:"a file",screenshot:"a screenshot",recording:"a recording",photo:"a photo",quote:"what they said",other:"proof"},Hp=86400,zp=()=>Math.floor(Date.now()/1e3),en=t=>new Date(t*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"});let tt=class extends T{constructor(){super(...arguments),this.quests=[],this.journal=[],this.loading=!0,this.view="list",this.wizardStep=0,this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.submitting=!1,this.error="",this.proofText="",this.proofUrl="",this.sending=!1,this.stuckOpen=!1,this.stuckText="",this.shelving=!1,this.shelveWhy="",this.openScrolls=[],this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>{this.view!=="wizard"&&!this.proofText&&!this.proofUrl&&!this.stuckOpen&&!this.shelving&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const t=await fetch("/api/learn");if(t.ok){const e=await t.json();this.quests=e.quests,this.journal=e.journal}}catch{}this.loading=!1}get active(){return this.quests.find(t=>t.status==="active")??null}currentStep(t){return t.steps.find(e=>e.status==="todo")??null}daysLeft(t){return t.due_at==null?null:Math.ceil((t.due_at-zp())/Hp)}async post(t,e){return fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:e?JSON.stringify(e):void 0})}openWizard(){if(this.active){this.view=this.active.id;return}this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.wizardStep=0,this.error="",this.view="wizard",this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}wizardNext(){if(this.wizardStep<xs.length){const t=xs[this.wizardStep];if(t.required&&!this.wizard[t.key].trim())return;this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}else this.createQuest()}async createQuest(){if(!this.submitting){this.submitting=!0,this.error="";try{const t=await this.post("/api/learn/quests",{...this.wizard,weeks:this.weeks}),e=await t.json().catch(()=>({}));t.ok&&e.id?(await this.refresh(),this.view=e.id):this.error=e.error||"Couldn't start the quest."}finally{this.submitting=!1}}}renderWizard(){const t=this.wizardStep===xs.length,e=t?null:xs[this.wizardStep],s=t||!e.required||!!this.wizard[e.key].trim(),i=xs.length+1;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex gap-1.5 mb-6">
            ${Array.from({length:i},(n,o)=>r`<div class="h-1 flex-1 rounded-full ${o<=this.wizardStep?"bg-accent":"bg-line"}"></div>`)}
          </div>
          ${t?r`
                <h3 class="text-base font-semibold text-ink mb-1">How many weeks?</h3>
                <p class="text-xs text-muted mb-3">When time's up, the quest ships or gets shelved with a one-line why. 2 for a small thing, 4 as the default, 6 for a real build.</p>
                <div class="grid grid-cols-4 gap-2">
                  ${Up.map(n=>r`<button type="button"
                    class="px-3 py-2 text-sm rounded-lg border ${this.weeks===n?"border-ink bg-ink text-white":"border-line text-ink hover:bg-hover"}"
                    @click=${()=>{this.weeks=n}}>${n}</button>`)}
                </div>
              `:r`
                <h3 class="text-base font-semibold text-ink mb-1">${e.question}</h3>
                <p class="text-xs text-muted mb-3">${e.hint}</p>
                <textarea
                  class="wizard-input w-full h-24 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
                  .value=${this.wizard[e.key]}
                  placeholder=${e.required?"":"optional — Enter to skip"}
                  @input=${n=>{this.wizard={...this.wizard,[e.key]:n.target.value}}}
                  @keydown=${n=>{n.key==="Enter"&&!n.shiftKey?(n.preventDefault(),this.wizardNext()):n.key==="Escape"&&(this.view="list")}}
                ></textarea>
              `}
          ${this.error?r`<p class="text-xs text-rose-600 mt-3">${this.error}</p>`:c}
          <div class="flex items-center justify-between mt-4">
            <button type="button" class="text-sm text-muted hover:text-ink"
              @click=${()=>{this.wizardStep===0?this.view="list":this.wizardStep-=1}}
            >← Back</button>
            <button type="button"
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!s||this.submitting?"opacity-40 pointer-events-none":""}"
              @click=${this.wizardNext}
            >${this.submitting?"…":t?"Start the quest":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async patchStep(t,e){await fetch(`/api/learn/steps/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async submitProof(t){const e=this.proofText.trim(),s=this.proofUrl.trim();if(!(!e&&!s||this.sending)){this.sending=!0;try{(await this.post(`/api/learn/steps/${t.id}/proof`,{text:e,url:s})).ok&&(this.proofText="",this.proofUrl="")}finally{this.sending=!1}await this.refresh()}}async askScroll(t){const e=this.stuckText.trim();this.stuckOpen=!1,this.stuckText="",await this.post(`/api/learn/steps/${t.id}/unblock`,{stuck:e}),this.openScrolls=[...this.openScrolls,t.id],await this.refresh()}async markPassed(t){await this.post(`/api/learn/steps/${t.id}/pass`,{}),await this.refresh()}async ship(t){confirm(`Ship "${t.topic}"? Only do this if the gate really happened.`)&&(await this.post(`/api/learn/quests/${t.id}/ship`,{}),await this.refresh())}async shelve(t){const e=this.shelveWhy.trim();e&&(this.shelving=!1,this.shelveWhy="",await this.post(`/api/learn/quests/${t.id}/shelve`,{why:e}),await this.refresh())}async removeQuest(t){confirm(`Delete "${t.topic}", its steps and its journal entries?`)&&(await fetch(`/api/learn/quests/${t.id}`,{method:"DELETE"}),this.view="list",await this.refresh())}async regenSteps(t){t.steps.some(e=>e.status==="done")&&!confirm("Regenerating throws away the current steps, including the passed ones. Continue?")||(await this.post(`/api/learn/quests/${t.id}/regen`,{}),await this.refresh())}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const s=[.../‍/.test(t)?t:t.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderEmoji(t,e="w-[18px] h-[18px]",s="text-[15px]"){const i=t.emoji||"🧭",n=this.iconUrl(i);return n?r`<img src=${n} alt="" class="${e} select-none shrink-0" draggable="false" />`:r`<span class="${s} leading-none shrink-0">${i}</span>`}statusPill(t){if(t.status==="done")return t.result==="shipped"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold shrink-0">Shipped</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-line/60 text-muted font-semibold shrink-0">Shelved</span>`;const e=this.daysLeft(t);return e==null?c:e<=0?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold shrink-0">Time's up</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full ${e<=3?"bg-amber-100 text-amber-700":"bg-accent/15 text-accent"} font-semibold shrink-0">${e}d left</span>`}renderClock(t){const e=this.daysLeft(t),s=t.weeks*7,i=e==null?0:Math.min(s,Math.max(0,s-e)),n=Math.round(i/s*100),o=e!=null&&e<=0;return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="h-1.5 rounded-full bg-line overflow-hidden"><div class="h-full ${o?"bg-amber-500":"bg-accent"} transition-all" style="width:${n}%"></div></div>
        <div class="flex items-center justify-between gap-3 mt-2">
          <p class="text-xs text-muted">
            ${o?r`<span class="text-ink font-medium">Time's up.</span> Ship it if the gate happened, otherwise shelve it with a one-line why.`:r`<span class="text-ink font-medium">${e} day${e===1?"":"s"} left</span> of ${t.weeks} weeks · due ${t.due_at?en(t.due_at):""}`}
          </p>
          ${o&&!this.shelving?r`<div class="flex items-center gap-2 shrink-0">
                <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.ship(t)}>Ship it</button>
                <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>{this.shelving=!0}}>Shelve</button>
              </div>`:c}
        </div>
        ${this.shelving?r`<div class="flex items-center gap-2 mt-2">
              <input class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                placeholder="one line: why it didn't ship"
                .value=${this.shelveWhy}
                @input=${a=>{this.shelveWhy=a.target.value}}
                @keydown=${a=>{a.key==="Enter"?this.shelve(t):a.key==="Escape"&&(this.shelving=!1,this.shelveWhy="")}} />
              <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover ${this.shelveWhy.trim()?"":"opacity-40 pointer-events-none"}" @click=${()=>void this.shelve(t)}>Shelve</button>
              <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.shelving=!1,this.shelveWhy=""}}>cancel</button>
            </div>`:c}
      </div>
    `}renderStepsPending(t){return t.path_status==="failed"?r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          The steps didn't come.
          <button type="button" class="px-2 py-0.5 rounded-md border border-line text-ink hover:bg-hover" @click=${()=>void this.regenSteps(t)}>Retry</button>
        </div>`:r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
          Laying out the steps — lands in under a minute…
        </div>`}renderProofForm(t){if(t.verdict==="judging")return r`<div class="flex items-center gap-2 mt-2 text-xs text-muted">
        <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
        Checking your proof against the bar…
      </div>`;const e=t.verdict==null&&!!t.verdict_note&&!!t.proof;return r`
      ${t.verdict==="miss"&&t.verdict_note?r`<div class="mt-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
            <p class="text-[10px] font-semibold text-amber-700 mb-0.5">Not yet</p>
            <p class="text-xs text-amber-800 leading-snug">${t.verdict_note}</p>
            <p class="text-[11px] text-amber-700/80 mt-1">The step above is now the smaller version. Clear that, then bring proof again.</p>
          </div>`:c}
      ${e?r`<div class="mt-2 rounded-lg bg-line/40 border border-line px-3 py-2">
            <p class="text-xs text-ink leading-snug">${t.verdict_note}</p>
            <button type="button" class="mt-1.5 px-2 py-0.5 text-[11px] rounded-md border border-line text-ink hover:bg-hover" @click=${()=>void this.markPassed(t)}>Mark passed</button>
          </div>`:c}
      <div class="mt-2 space-y-1.5">
        <textarea
          class="w-full h-16 px-2.5 py-1.5 text-xs bg-surface border border-line rounded-md resize-none outline-none focus:border-ink placeholder:text-muted/50"
          placeholder=${"What does the proof show? Paste the text, the numbers, what they said — the judge can't open links."}
          .value=${this.proofText}
          @input=${s=>{this.proofText=s.target.value}}
        ></textarea>
        <div class="flex items-center gap-2">
          <input class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
            placeholder="link (optional)"
            .value=${this.proofUrl}
            @input=${s=>{this.proofUrl=s.target.value}} />
          <button type="button"
            class="shrink-0 px-3 py-1 text-xs font-semibold rounded-lg bg-ink text-white hover:opacity-90 ${!this.proofText.trim()&&!this.proofUrl.trim()||this.sending?"opacity-40 pointer-events-none":""}"
            @click=${()=>void this.submitProof(t)}
          >${this.sending?"…":t.is_gate?"Submit gate proof":"Submit proof"}</button>
        </div>
      </div>
      ${this.renderScroll(t)}
    `}renderScroll(t){const e=this.openScrolls.includes(t.id);return r`
      <div class="mt-2">
        ${t.scroll_status==="pending"?r`<p class="flex items-center gap-2 text-[11px] text-muted"><span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> Writing your scroll…</p>`:t.scroll_status==="ready"&&t.scroll?r`
                <button type="button" class="text-[11px] text-accent hover:underline" @click=${()=>{this.openScrolls=e?this.openScrolls.filter(s=>s!==t.id):[...this.openScrolls,t.id]}}>
                  ${e?"▾":"▸"} Scroll${t.stuck?r` <span class="text-muted">· ${t.stuck}</span>`:c}
                </button>
                ${e?r`<div class="chat-md mt-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-xs leading-relaxed">${V(Ma(t.scroll))}</div>`:c}
                ${e?r`<button type="button" class="mt-1 text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>stuck on something else?</button>`:c}
              `:this.stuckOpen?r`<div class="flex items-center gap-2">
                  <input class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                    placeholder="what's stuck? (optional — Enter to ask)"
                    .value=${this.stuckText}
                    @input=${s=>{this.stuckText=s.target.value}}
                    @keydown=${s=>{s.key==="Enter"?this.askScroll(t):s.key==="Escape"&&(this.stuckOpen=!1,this.stuckText="")}} />
                  <button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.askScroll(t)}>Ask for a scroll</button>
                </div>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>
                  ${t.scroll_status==="failed"?"The scroll didn't come. Ask again":"Stuck? Ask for a scroll"}
                </button>`}
      </div>
    `}renderStepRow(t,e,s){const i=e.status==="done",n=e.status==="skipped",o=i||n,a=t.status==="active";return r`
      <li class="group relative flex gap-3 px-4 py-3 ${s?"bg-accent/5":""}">
        <span class="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-semibold ${i?"bg-accent text-white":n?"bg-line text-muted":s?"border-[1.5px] border-accent text-accent":"border-[1.5px] border-line text-muted"}">
          ${i?r`<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:n?"~":e.seq}
        </span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-medium ${o?"text-muted line-through decoration-line":"text-ink"}">${e.title}</span>
            ${e.is_gate?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-ink text-white font-semibold">Gate</span>`:c}
            ${s?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold">Here</span>`:c}
            ${e.days&&!o?r`<span class="text-[10px] text-muted">~${e.days}d</span>`:c}
          </div>
          ${e.exercise&&!o?r`<p class="text-xs text-ink/80 mt-0.5 leading-snug">${e.exercise}</p>`:c}
          ${e.bar&&!o?r`<p class="text-[11px] text-muted mt-1 leading-snug"><span class="font-semibold">Bar:</span> ${e.bar}${e.proof_kind?r` <span class="text-muted/70">· bring ${Bp[e.proof_kind]??e.proof_kind}</span>`:c}</p>`:c}
          ${i&&(e.proof||e.verdict_note)?r`<p class="text-xs text-muted/80 mt-0.5 italic leading-snug">${e.proof??e.verdict_note}${e.proof_url?r` <a class="text-link not-italic hover:underline" href=${e.proof_url} target="_blank" rel="noopener">link</a>`:c}</p>`:c}
          ${s&&a?this.renderProofForm(e):c}
        </div>
        ${a?r`<div class="absolute right-3 top-3 flex items-center gap-2 opacity-0 group-hover:opacity-70 hover:!opacity-100">
              ${e.status==="todo"?r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Already covered — skip" @click=${()=>void this.patchStep(e.id,{status:"skipped"})}>skip</button>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Reopen" @click=${()=>void this.patchStep(e.id,{status:"todo"})}>reopen</button>`}
            </div>`:c}
      </li>
    `}renderDetail(t){const e=this.currentStep(t),s=t.path_status==="ready",i=t.steps.filter(a=>a.status!=="todo").length,n=[t.mission?{label:"Outcome",value:t.mission}:null,t.success?{label:"Gate",value:t.success}:null,t.known?{label:"Has already",value:t.known}:null,t.why?{label:"Why shelved",value:t.why}:null].filter(a=>a!==null),o=this.journal.filter(a=>a.skill_id===t.id);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        <div class="flex items-center gap-2 px-1">
          <button type="button" class="text-sm text-muted hover:text-ink" @click=${()=>{this.view="list"}}>←</button>
          ${this.renderEmoji(t,"w-[22px] h-[22px]","text-[19px]")}
          <h3 class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${t.topic}</h3>
          ${this.statusPill(t)}
          <button type="button" class="shrink-0 text-muted opacity-60 hover:opacity-100 text-base leading-none px-1" title="Delete quest" @click=${()=>void this.removeQuest(t)}>×</button>
        </div>

        ${t.status==="active"?this.renderClock(t):c}

        ${n.length?r`<section class="rounded-xl border border-line bg-surface px-4 py-3 space-y-1.5">
              ${n.map(a=>r`<p class="text-xs leading-snug"><span class="font-semibold text-[10px] text-muted mr-1.5">${a.label}</span><span class="text-ink">${a.value}</span></p>`)}
            </section>`:c}

        <section class="rounded-xl border border-line bg-surface">
          <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Steps${s&&t.steps.length?r` · ${i}/${t.steps.length}`:c}</h4>
          ${s?t.steps.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No steps — ask the coach in chat, or regenerate.</p>`:r`<ul class="pb-2 divide-y divide-line/40">
                  ${t.steps.map(a=>this.renderStepRow(t,a,e?.id===a.id))}
                </ul>`:this.renderStepsPending(t)}
        </section>

        ${o.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${o.map(a=>this.renderJournalRow(a))}</ul>
            </section>`:c}

        ${s&&t.status==="active"?r`<div class="flex items-center gap-3 px-1">
              <button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.regenSteps(t)}>↻ regenerate steps</button>
              ${!this.daysLeft(t)||(this.daysLeft(t)??1)>0?r`<button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>{this.shelving=!0}}>shelve early</button>`:c}
            </div>`:c}
      </div>
    `}renderJournalRow(t){const e=t.kind==="shipped"?"🏁":t.kind==="gate"?"🚪":t.kind==="shelved"?"📦":t.kind==="unblock"?"📜":t.kind==="started"?"🧭":"✓";return r`
      <li class="flex gap-2.5 px-4 py-1.5">
        <span class="shrink-0 w-10 text-[11px] text-muted tabular-nums pt-px">${en(t.created_at)}</span>
        <span class="shrink-0 text-[11px] pt-px">${e}</span>
        <span class="flex-1 min-w-0 text-xs text-ink leading-snug">${t.text}${t.url?r` <a class="text-link hover:underline" href=${t.url} target="_blank" rel="noopener">link</a>`:c}</span>
      </li>
    `}renderActiveCard(t){const e=this.currentStep(t),s=t.steps.filter(i=>i.status!=="todo").length;return r`
      <button type="button" class="w-full text-left rounded-xl border border-ink/20 bg-surface px-4 py-3 hover:bg-hover transition-colors" @click=${()=>{this.view=t.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(t,"w-[20px] h-[20px]","text-[17px]")}
          <span class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${t.topic}</span>
          ${this.statusPill(t)}
        </div>
        ${t.path_status!=="ready"?r`<p class="mt-1.5 text-xs text-muted flex items-center gap-1.5">
              ${t.path_status==="failed"?"the steps didn't come — open to retry":r`<span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> laying out the steps…`}
            </p>`:e?r`<p class="mt-1.5 text-xs text-muted truncate"><span class="text-accent font-medium">Step ${s+1} of ${t.steps.length}:</span> ${e.title}${e.verdict==="judging"?" · checking proof":""}</p>`:r`<p class="mt-1.5 text-xs text-muted">Every step is in. Ship it.</p>`}
      </button>
    `}renderShelfCard(t){return r`
      <button type="button" class="w-full text-left rounded-xl border border-line bg-surface px-4 py-2.5 hover:bg-hover transition-colors" @click=${()=>{this.view=t.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(t,"w-[16px] h-[16px]","text-[14px]")}
          <span class="flex-1 min-w-0 text-sm text-ink truncate">${t.topic}</span>
          ${this.statusPill(t)}
          ${t.completed_at?r`<span class="text-[11px] text-muted shrink-0">${en(t.completed_at)}</span>`:c}
        </div>
        ${t.result==="shelved"&&t.why?r`<p class="mt-1 text-xs text-muted truncate">${t.why}</p>`:c}
      </button>
    `}renderList(){const t=this.active,e=this.quests.filter(i=>i.status==="done"),s=this.journal.slice(0,12);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.loading?c:t?this.renderActiveCard(t):r`<div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
                <p class="text-sm text-ink font-medium">${e.length?"Nothing in flight.":"A quest is a real outcome someone else can see."}</p>
                <p class="text-xs text-muted mt-1">Name it, name who sees it, pick the weeks. You get steps that each end in proof; the last one is the gate.</p>
                <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${this.openWizard}>Start a quest</button>
              </div>`}

        ${s.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${s.map(i=>this.renderJournalRow(i))}</ul>
            </section>`:c}

        ${e.length?r`<section class="space-y-2">
              <h4 class="px-1 pt-1 text-[11px] font-semibold text-muted">Shelf</h4>
              ${e.map(i=>this.renderShelfCard(i))}
            </section>`:c}
      </div>
    `}render(){const t=typeof this.view=="number"?this.quests.find(s=>s.id===this.view):void 0,e=this.active;return r`
      <div class="relative flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-sm font-semibold text-ink">Learn</h2>
          ${this.view==="wizard"?c:e?r`<span class="text-[11px] text-muted" title="Ship or shelve the running quest to start another">one quest at a time</span>`:r`<button type="button" class="px-2.5 py-1 rounded-full text-sm font-medium text-muted hover:text-ink hover:bg-hover transition-colors" @click=${this.openWizard}>+ New quest</button>`}
        </header>
        ${this.view==="wizard"?this.renderWizard():t?this.renderDetail(t):this.renderList()}
      </div>
    `}};nt([d()],tt.prototype,"quests",2);nt([d()],tt.prototype,"journal",2);nt([d()],tt.prototype,"loading",2);nt([d()],tt.prototype,"view",2);nt([d()],tt.prototype,"wizardStep",2);nt([d()],tt.prototype,"wizard",2);nt([d()],tt.prototype,"weeks",2);nt([d()],tt.prototype,"submitting",2);nt([d()],tt.prototype,"error",2);nt([d()],tt.prototype,"proofText",2);nt([d()],tt.prototype,"proofUrl",2);nt([d()],tt.prototype,"sending",2);nt([d()],tt.prototype,"stuckOpen",2);nt([d()],tt.prototype,"stuckText",2);nt([d()],tt.prototype,"shelving",2);nt([d()],tt.prototype,"shelveWhy",2);nt([d()],tt.prototype,"openScrolls",2);tt=nt([w("learn-section")],tt);var Kp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,mo=(t,e,s,i)=>{for(var n=i>1?void 0:i?qp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Kp(e,s,n),n};let Ti=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await _t(()=>import("./been-to-section-CkMRzdkQ.js"),__vite__mapDeps([6,3,4,7,5,8])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<been-to-section class="flex flex-col flex-1 min-h-0"></been-to-section>`:r`<div class="flex-1 grid place-items-center text-sm" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>Could not load Been to. Retry</button>`:r`<span>Loading your map…</span>`}</div>${c}`}};mo([d()],Ti.prototype,"ready",2);mo([d()],Ti.prototype,"failed",2);Ti=mo([w("been-to-loader")],Ti);var Wp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,de=(t,e,s,i)=>{for(var n=i>1?void 0:i?Gp(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Wp(e,s,n),n};let Qt=class extends T{constructor(){super(...arguments),this.invites=[],this.sessions=[],this.loading=!0,this.label="",this.days="7",this.uses="3",this.creating=!1,this.copiedId=null,this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>void this.refresh(),5e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const t=await fetch("/api/guests");if(t.ok){const e=await t.json();this.invites=e.invites,this.sessions=e.sessions}}catch{}this.loading=!1}inviteUrl(t){return`${location.origin}/invite/${t.token}`}inviteState(t){return t.revoked?"revoked":t.used_count>=t.max_uses?"used":t.expires_at&&t.expires_at*1e3<Date.now()?"expired":"active"}async createInvite(){const t=this.label.trim();if(!(!t||this.creating)){this.creating=!0;try{const e=await fetch("/api/guests/invites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({label:t,expiresDays:Number(this.days)||7,maxUses:Number(this.uses)||1})});if(e.ok){const{invite:s}=await e.json();this.label="",await this.refresh(),await this.copyLink({...s})}}finally{this.creating=!1}}}async copyLink(t){try{await navigator.clipboard.writeText(this.inviteUrl(t)),this.copiedId=t.id,setTimeout(()=>{this.copiedId===t.id&&(this.copiedId=null)},2e3)}catch{prompt("Copy the invite link:",this.inviteUrl(t))}}async revokeInvite(t){confirm(`Revoke the invite for ${t.label}? The link stops working; existing devices stay in.`)&&(await fetch(`/api/guests/invites/${t.id}`,{method:"DELETE"}),await this.refresh())}async revokeSession(t){confirm(`Kick ${t.display_name}'s device? They're out on their next request.`)&&(await fetch(`/api/guests/sessions/${t.id}`,{method:"DELETE"}),await this.refresh())}fmtDate(t){return t?new Date(t*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—"}fmtLastSeen(t){if(!t)return"never";const e=Math.floor((Date.now()/1e3-t)/60);return e<2?"now":e<60?`${e}m ago`:e<2880?`${Math.floor(e/60)}h ago`:this.fmtDate(t)}statePill(t){return r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${{active:"bg-accent/15 text-accent",used:"bg-line text-muted",expired:"bg-amber-500/10 text-amber-600",revoked:"bg-red-500/10 text-red-600"}[t]}">${t}</span>`}renderInvite(t){const e=this.inviteState(t);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${t.label}</span>
            ${this.statePill(e)}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${t.used_count}/${t.max_uses} used
            · created ${this.fmtDate(t.created_at)}
            ${t.expires_at?r` · ${e==="expired"?"expired":"expires"} ${this.fmtDate(t.expires_at)}`:c}
          </p>
        </div>
        ${e==="active"?r`<button type="button"
              class="shrink-0 px-2 py-1 text-[11px] rounded-md border border-line ${this.copiedId===t.id?"text-accent border-accent":"text-muted hover:text-ink hover:bg-hover"}"
              @click=${()=>void this.copyLink(t)}
            >${this.copiedId===t.id?"Copied ✓":"Copy link"}</button>`:c}
        ${e==="active"||e==="expired"?r`<button type="button"
              class="shrink-0 opacity-40 lg:opacity-0 lg:group-hover:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
              title="Revoke invite" aria-label="Revoke invite"
              @click=${()=>void this.revokeInvite(t)}
            >×</button>`:c}
      </li>
    `}renderSession(t){const e=this.invites.find(s=>s.id===t.invite_id);return r`
      <li class="group flex items-center gap-2.5 px-4 py-2.5 border-b border-line/50 last:border-b-0">
        <span class="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-hover text-[11px] font-semibold text-ink uppercase">${(t.display_name||"?").slice(0,1)}</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-ink font-medium truncate">${t.display_name}</span>
            ${t.revoked?this.statePill("revoked"):c}
          </div>
          <p class="text-[11px] text-muted mt-0.5">
            ${t.login}${e?r` · via "${e.label}"`:c}
            · joined ${this.fmtDate(t.created_at)} · seen ${this.fmtLastSeen(t.last_seen)}
          </p>
        </div>
        ${t.revoked?c:r`<button type="button"
              class="shrink-0 px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-red-600 hover:border-red-500/40"
              title="Kick this device"
              @click=${()=>void this.revokeSession(t)}
            >Revoke</button>`}
      </li>
    `}render(){const t=this.sessions.filter(s=>!s.revoked),e=this.sessions.filter(s=>s.revoked);return r`
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
            <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">People in <span class="text-muted/60">${t.length||""}</span></h3>
            ${!this.loading&&t.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">Nobody yet. Mint an invite above and send them the link — it copies to your clipboard.</p>`:r`<ul class="pb-1">${t.map(s=>this.renderSession(s))}</ul>`}
          </section>

          <section class="rounded-xl border border-line bg-surface">
            <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">Invites <span class="text-muted/60">${this.invites.length||""}</span></h3>
            ${!this.loading&&this.invites.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No invites yet.</p>`:r`<ul class="pb-1">${this.invites.map(s=>this.renderInvite(s))}</ul>`}
          </section>

          ${e.length?r`<section class="rounded-xl border border-line bg-surface">
                <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">Kicked <span class="text-muted/60">${e.length}</span></h3>
                <ul class="pb-1">${e.map(s=>this.renderSession(s))}</ul>
              </section>`:c}
        </div>
      </div>
    `}};de([d()],Qt.prototype,"invites",2);de([d()],Qt.prototype,"sessions",2);de([d()],Qt.prototype,"loading",2);de([d()],Qt.prototype,"label",2);de([d()],Qt.prototype,"days",2);de([d()],Qt.prototype,"uses",2);de([d()],Qt.prototype,"creating",2);de([d()],Qt.prototype,"copiedId",2);Qt=de([w("guests-section")],Qt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fn extends $l{}Fn.directiveName="unsafeSVG",Fn.resultType=2;const Vp=Is(Fn),Yp=3,sn=600,nn=1200,Un=3e3,fr=80,Bn=1250,Qp=[/\bdelv(e|es|ing)\b/i,/\btapestry\b/i,/\btestament to\b/i,/\b(ever-evolving|fast-paced)\b/i,/\bin today'?s\b/i,/\bgame[- ]?changer\b/i,/\bunlock(s|ing)?\b/i,/\bunleash/i,/\belevate(s|d)?\b/i,/\bseamless(ly)?\b/i,/\brobust\b/i,/\bleverag(e|es|ing)\b/i,/\bharness(es|ing)?\b/i,/\bpivotal\b/i,/\bembark/i,/\brevolutioni[sz]e/i,/\bcutting-edge\b/i,/\bsynerg/i,/\bsupercharge/i,/\bnavigat(e|ing) the\b/i,/\brealm\b/i,/\bhere'?s the thing\b/i,/\blet that sink in\b/i,/\b(it'?s|this is|that'?s) not (just|only|about) [^.\n]{1,50}[,;:]\s*(it'?s|but|this is)\b/i,/\bunpopular opinion\b/i,/\bhot take\b/i,/\bplot twist\b/i,/^the result\?/im,/\bnobody (talks|tells you) about\b/i,/\bwhat nobody tells you\b/i,/\btoday years old\b/i,/\b(thrilled|humbled) to (announce|share)\b/i,/\bread that again\b/i,/\bbuckle up\b/i,/\blet me explain\b/i,/\bthat'?s it\. that'?s the post\b/i,/(^|\n)\s*(agree|thoughts)\?\s*$/i,/\brepost\s*♻/i,/\bfollow me for more\b/i,/\bin der heutigen\b/i,/\bnahtlos/i,/\bbahnbrechend/i,/\brevolutionier/i,/\bgamechanger\b/i];function Jp(t){const e=[];for(const s of Qp){const i=t.match(s);i&&e.push(i[0])}return e}const gr=/https?:\/\/|\bwww\.[a-z]/i;function rl({body:t,firstComment:e,hasImage:s}){const i=[],n=t.trim(),o=n.length,a=n.split(`
`).find(m=>m.trim())??"";i.push(a.length<=fr?{key:"hook",kind:"reach",level:"pass",label:'Opening line lands before "see more"'}:{key:"hook",kind:"reach",level:"warn",label:`Opening line is ${a.length} characters`,detail:`Under ${fr} so it lands before "see more" on a phone.`}),o>Un?i.push({key:"length",level:"fail",label:`${o} characters, over LinkedIn's ${Un}`}):o<sn?i.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the short side`,detail:`Posts that do well run ${sn}-${nn}.`}):o>nn?i.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the long side`,detail:`Posts that do well run ${sn}-${nn}.`}):i.push({key:"length",kind:"style",level:"pass",label:`${o} characters`});const l=(e??"").trim();gr.test(n)?i.push({key:"link",kind:"reach",level:"warn",label:"Link in the post",detail:"A link in the body costs 11-36% of reach. Move it to the first comment."}):i.push({key:"link",kind:"reach",level:"pass",label:gr.test(l)?"The link goes in the first comment":"No link in the post"}),s!==void 0&&i.push(s?{key:"image",kind:"reach",level:"pass",label:"Has an image"}:{key:"image",kind:"reach",level:"warn",label:"No image",detail:"Posts with an image stop the scroll more often than text alone."}),l.length>Bn&&i.push({key:"comment",level:"fail",label:`First comment is ${l.length} characters, over LinkedIn's ${Bn}`});const h=n.match(/(^|\s)#[\p{L}\d_]+/gu)??[];h.length>3&&i.push({key:"hashtags",kind:"style",level:"warn",label:`${h.length} hashtags`,detail:"Three at most; LinkedIn treats them as a nice-to-have."});const u=(n.match(/—| – /g)??[]).length;u&&i.push({key:"dashes",kind:"style",level:"warn",label:`${u} em dash${u===1?"":"es"}`,detail:"A strong AI tell. Use a full stop or a comma."});const p=Jp(n);return p.length&&i.push({key:"ai",kind:"style",level:"warn",label:"Sounds machine-written in places",detail:p.join(", ")}),i}function Xp(t,e){return rl({body:t,firstComment:e}).filter(i=>i.level==="fail").map(i=>i.key==="numbers"&&i.detail?`${i.label}: ${i.detail}`:i.label)}var Zp=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,te=(t,e,s,i)=>{for(var n=i>1?void 0:i?tm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Zp(e,s,n),n};let br=null;function em(){return br??=fetch("/api/me").then(t=>t.ok?t.json():null).catch(()=>null),br}const vr="publisher.li_headline",sm='-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", Helvetica, Arial, sans-serif',xr="rgba(0,0,0,.9)",pe="rgba(0,0,0,.6)",Ys={like:Ce`<path d="M7 10v11H3V10h4Zm2 10.5V10.2l4.6-7.2c.3-.4.8-.6 1.3-.4 1 .3 1.6 1.3 1.4 2.3L15.5 9H20a2 2 0 0 1 2 2.3l-1.3 7.6A2.5 2.5 0 0 1 18.2 21H10a1 1 0 0 1-1-.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,comment:Ce`<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 9.5h10M7 12.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,repost:Ce`<path d="M17 3l3 3-3 3M20 6H8a4 4 0 0 0-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 0 0 4-4v-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,send:Ce`<path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Zm-11 10 4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>`,more:Ce`<circle cx="5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="19" cy="12" r="1.8" fill="currentColor"/>`,globe:Ce`<circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M1.8 8h12.4M8 1.8c1.8 1.7 2.7 3.8 2.7 6.2S9.8 12.5 8 14.2C6.2 12.5 5.3 10.4 5.3 8S6.2 3.5 8 1.8Z" fill="none" stroke="currentColor" stroke-width="1.2"/>`};let zt=class extends T{constructor(){super(...arguments),this.text="",this.mode="mobile",this.imageUrl=null,this.authorName=null,this.expanded=!1,this.truncated=!1,this.me=null,this.editingHeadline=!1,this.headline=f.getState().settings[vr]??""}connectedCallback(){super.connectedCallback(),em().then(t=>{this.me=t})}willUpdate(t){t.has("mode")&&(this.expanded=!1)}updated(){const t=this.querySelector("[data-li-text]"),e=!!t&&!this.expanded&&t.scrollHeight>t.clientHeight+1;e!==this.truncated&&!this.expanded&&(this.truncated=e)}async saveHeadline(t){this.editingHeadline=!1;const e=t.trim();if(e!==this.headline){this.headline=e;try{await f.getState().setSetting(vr,e)}catch{}}}renderHeadline(t){return this.editingHeadline?r`<input type="text" class="block w-full px-1 -mx-1 rounded border outline-none" style="font-size:${t};line-height:16px;color:${xr};border-color:rgba(0,0,0,.3);background:#fff"
        aria-label="Your LinkedIn headline" placeholder="Your headline, as it shows on LinkedIn" .value=${this.headline}
        @keydown=${e=>{e.key==="Enter"&&this.saveHeadline(e.target.value),e.key==="Escape"&&(this.editingHeadline=!1)}}
        @blur=${e=>void this.saveHeadline(e.target.value)} />`:r`<button type="button" class="block w-full text-left truncate hover:underline" style="font-size:${t};line-height:16px;color:${pe}"
      title="Your headline on LinkedIn. Click to change it."
      @click=${()=>{this.editingHeadline=!0,this.updateComplete.then(()=>this.querySelector("input[aria-label='Your LinkedIn headline']")?.focus())}}
      >${this.headline||r`<span style="font-style:italic">Add your LinkedIn headline</span>`}</button>`}render(){const t=f.getState().settings,e=this.me,s=(e?t[`user:${e.login}:profile_pic_url`]:"")||(e?.role==="owner"?t["cockpit.profile_pic_url"]:"")||e?.profilePic||"",i=this.authorName||e?.displayName||"You",n=this.mode==="mobile",o=this.expanded?"":`display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:${Yp};overflow:hidden;`,a=n?"...more":"…more",l=[["like","Like"],["comment","Comment"],["repost","Repost"],["send","Send"]],h=r`
      <div style="background:#fff;color:${xr};font-family:${sm};${n?"":"border-radius:8px;box-shadow:0 0 0 1px rgba(140,140,140,.2);"}overflow:hidden;">
        <div class="flex gap-2" style="padding:12px 16px 0 16px;">
          <span class="shrink-0 rounded-full overflow-hidden grid place-items-center font-semibold" style="width:48px;height:48px;background:#e9e5df;color:${pe};font-size:18px">
            ${s?r`<img src=${s} alt="" referrerpolicy="no-referrer" class="w-full h-full object-cover" />`:i.slice(0,1)}
          </span>
          <span class="min-w-0 flex-1">
            <span class="block truncate" style="font-size:14px;line-height:20px;font-weight:600">${i}<span style="font-weight:400;color:${pe}"> • You</span></span>
            ${this.renderHeadline("12px")}
            <span class="flex items-center gap-1" style="font-size:12px;line-height:16px;color:${pe}">now •
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">${Ys.globe}</svg></span>
          </span>
          <svg viewBox="0 0 24 24" width="24" height="24" class="shrink-0" style="color:${pe}" aria-hidden="true">${Ys.more}</svg>
        </div>
        <div class="relative" style="margin:8px 16px 0 16px;">
          <div data-li-text class="whitespace-pre-wrap break-words" style="font-size:14px;line-height:20px;${o}">${this.text}</div>
          ${this.truncated&&!this.expanded?r`<button type="button" class="absolute right-0 bottom-0 hover:underline" style="font-size:14px;line-height:20px;color:${pe};background:#fff;padding-left:6px;box-shadow:-12px 0 8px #fff"
                @click=${()=>{this.expanded=!0}}>${a}</button>`:c}
        </div>
        ${this.expanded&&this.truncated?r`<button type="button" class="hover:underline" style="margin:2px 16px 0 16px;font-size:12px;color:${pe}" @click=${()=>{this.expanded=!1}}>show less</button>`:c}
        ${this.imageUrl?r`<img src=${this.imageUrl} alt="" class="w-full block" style="margin-top:8px" />`:r`<div style="height:8px"></div>`}
        <div style="margin:0 ${n?16:12}px;border-top:1px solid rgba(0,0,0,.08)"></div>
        <div class="flex ${n?"justify-between":"justify-around"}" style="padding:${n?"6px 20px 10px":"4px 8px"};color:${pe}">
          ${l.map(([u,p])=>n?r`<span class="flex flex-col items-center gap-0.5" style="font-size:12px;line-height:16px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${Ys[u]}</svg>${p}</span>`:r`<span class="flex items-center gap-1.5 rounded" style="padding:10px 8px;font-size:14px;line-height:20px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${Ys[u]}</svg>${p}</span>`)}
        </div>
      </div>`;return n?r`<div class="mx-auto" style="width:390px;max-width:100%;background:#f4f2ee;padding:8px 0;border-radius:12px;overflow:hidden">${h}</div>`:r`<div class="mx-auto" style="width:555px;max-width:100%">${h}</div>`}};te([b()],zt.prototype,"text",2);te([b()],zt.prototype,"mode",2);te([b()],zt.prototype,"imageUrl",2);te([b()],zt.prototype,"authorName",2);te([d()],zt.prototype,"expanded",2);te([d()],zt.prototype,"truncated",2);te([d()],zt.prototype,"me",2);te([d()],zt.prototype,"editingHeadline",2);te([d()],zt.prototype,"headline",2);zt=te([w("linkedin-preview")],zt);function z(t,e,s={}){t.dispatchEvent(new CustomEvent("publisher-toast",{detail:{text:e,...s},bubbles:!0,composed:!0}))}function be(t,e){return new Promise(s=>{const i={...e,resolve:s};t.dispatchEvent(new CustomEvent("publisher-confirm",{detail:i,bubbles:!0,composed:!0})),i.handled||s(!1)})}const im=t=>new Date(t*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"});var nm=Object.defineProperty,om=Object.getOwnPropertyDescriptor,R=(t,e,s,i)=>{for(var n=i>1?void 0:i?om(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&nm(e,s,n),n};const Je=(t,e)=>{if(!t)return e;try{return JSON.parse(t)}catch{return e}},rm=1500,on=(t,e,s,i,n,o,a)=>JSON.stringify([t.trim(),e,[...s].sort((l,h)=>l-h),i,n.trim(),o,a.trim()]),am={pass:r`<span class="text-accent">✓</span>`,warn:r`<span class="text-amber-500">!</span>`,fail:r`<span class="text-red-600">✕</span>`};let _=class extends T{constructor(){super(...arguments),this.draft=null,this.topics=[],this.defaultTopicId=null,this.linkedinConnected=!1,this.webhookConfigured=!1,this.twoCol=!0,this.defaultScheduleAt=null,this.aiWriting=!1,this.improving=!1,this.aiError="",this.backLabel="Drafts",this.authorName=null,this.body="",this.pillar="story",this.aiAngle="",this.commentOpen=!1,this.verticalId=null,this.proofIds=[],this.hooks=[],this.firstComment="",this.questions=[],this.answers={},this.fixing=!1,this.fixResult=null,this.dirty=!1,this.saveState="idle",this.posting=!1,this.proofs=[],this.mode="mobile",this.postMenu=!1,this.scheduleAt="",this.copiedFor=null,this.leaveBlocked=!1,this.loadedFor=null,this.draftId=null,this.editSeq=0,this.inflight=null,this.autosaveTimer=null,this.synced="",this.superseded=new Set,this.beforeFix=null,this.onVisibility=()=>{document.visibilityState==="hidden"&&this.dirty&&this.flush()},this.onPublisherReference=t=>{const e=t.detail?.text;if(!e)return;const s=Ia(this.body,e),i=this.renderRoot.querySelector("textarea[data-draft-body]");!s||!i||(i.focus({preventScroll:!0}),i.setSelectionRange(s.start,s.end,"forward"),this.scrollReferenceIntoView(i,s.start))},this.menuHost=null,this.menuAnchor=null,this.closeMenu=()=>{this.postMenu=!1},this.onMenuPress=t=>{const e=t.target;e&&(this.menuHost?.contains(e)||this.menuAnchor?.contains(e))||(this.postMenu=!1)},this.onMenuKey=t=>{t.key==="Escape"&&(t.stopPropagation(),this.postMenu=!1,this.menuAnchor?.focus())},this.onMenuScroll=t=>{const e=t.target;e instanceof Node&&this.menuHost?.contains(e)||this.menuHost?.contains(document.activeElement)||(this.postMenu=!1)}}connectedCallback(){super.connectedCallback(),this.loadProofs(),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("publisher-reference",this.onPublisherReference)}disconnectedCallback(){super.disconnectedCallback(),this.removeMenu(),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("publisher-reference",this.onPublisherReference),this.dirty&&this.flush()}scrollReferenceIntoView(t,e){const s=getComputedStyle(t),i=document.createElement("div");i.style.cssText=["position:fixed","left:-10000px","top:0","visibility:hidden","pointer-events:none",`box-sizing:${s.boxSizing}`,`width:${t.getBoundingClientRect().width}px`,`padding:${s.padding}`,`border:${s.border}`,`font:${s.font}`,`letter-spacing:${s.letterSpacing}`,`line-height:${s.lineHeight}`,"white-space:pre-wrap","overflow-wrap:break-word","word-break:break-word"].join(";"),i.append(document.createTextNode(t.value.slice(0,e)));const n=document.createElement("span");n.textContent="​",i.append(n),document.body.append(i);const o=n.offsetTop;i.remove();let a=t.parentElement;for(;a;){const h=getComputedStyle(a).overflowY;if((h==="auto"||h==="scroll")&&a.scrollHeight>a.clientHeight)break;a=a.parentElement}if(!a){t.scrollIntoView({behavior:"smooth",block:"center"});return}const l=t.getBoundingClientRect().top-a.getBoundingClientRect().top+a.scrollTop;a.scrollTo({top:Math.max(0,l+o-a.clientHeight*.32),behavior:"smooth"})}willUpdate(t){if(!t.has("draft"))return;const e=this.draft,s=e?.id??this.draftId??"new";if(s!==this.loadedFor){this.loadedFor=s,this.draftId=e?.id??null,this.body=e?.body??"",this.pillar=e?.pillar??"story",this.aiAngle=e?.source_note??"",this.commentOpen=!1,this.verticalId=e?.vertical_id??this.defaultTopicId??this.topics[0]?.id??null,this.proofIds=Je(e?.proof_ids??null,[]),this.hooks=Je(e?.hooks??null,[]),this.firstComment=e?.first_comment??"",this.questions=Je(e?.questions??null,[]),this.answers={},this.fixResult=null,this.beforeFix=null,this.dirty=!1,this.saveState="idle",this.leaveBlocked=!1,this.superseded.clear(),this.synced=e?on(e.body,e.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle):"";return}if(!e)return;const i=Je(e.proof_ids,[]),n=Je(e.hooks,[]),o=Je(e.questions??null,[]),a=on(e.body,e.pillar,i,n,e.first_comment??"",o,e.source_note??"");a===this.synced||this.superseded.has(a)||this.dirty||this.inflight||this.fixing||(e.body!==this.body&&(this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.fixResult={reply:"Changed from chat.",changes:[],warnings:[]}),this.aiAngle=e.source_note??"",this.body=e.body,this.pillar=e.pillar,this.proofIds=i,this.hooks=n,this.firstComment=e.first_comment??"",this.questions=o,this.synced=a)}async loadProofs(){try{const t=await fetch("/api/publisher/proofs");t.ok&&(this.proofs=(await t.json()).proofs.filter(e=>e.status==="active"))}catch{}}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}get linkedProofs(){return this.proofs.filter(t=>this.proofIds.includes(t.id))}get checks(){return rl({body:this.body,proofs:this.linkedProofs,firstComment:this.firstComment,hasImage:this.draftId!=null?!!this.draft?.image_url:void 0})}touched(){this.editSeq++,this.dirty=!0,this.leaveBlocked=!1,this.autosaveTimer&&clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.autosaveTimer=null,this.autosave()},rm)}async autosave(){const t=this.draftId!=null&&this.dirty;await this.flush()&&t&&!this.dirty&&z(this,"Saved")}edit(t){this.body=t,this.fixResult=null,this.beforeFix=null,this.touched()}async fix(t=[]){if(this.fixing||!this.body.trim())return;if(!await this.flush()||this.draftId==null){z(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const e=this.draftId,s=this.body;this.fixing=!0;try{const i=await this.patch(e,{action:"fix",...t.length?{answers:t}:{}}),n=await i.json().catch(()=>({}));if(!i.ok||typeof n.body!="string"){z(this,n.error||"Mana's rewrite didn't come back. Try again.",{tone:"error"});return}if(this.draftId!==e||this.body!==s)return;this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.body=n.body,this.hooks=n.hooks??[],n.format&&(!this.draft||this.draft.status==="draft"||this.draft.status==="approved")&&(this.pillar=n.format),this.questions=n.questions??[],this.answers={},this.fixResult={reply:n.reply??"",changes:n.changes??[],warnings:n.warnings??[]},this.touched(),await this.flush()&&this.emit("improved",{id:e,image:n.image??""})}catch{z(this,"No answer from the cockpit. Try again.",{tone:"error"})}finally{this.fixing=!1}}undoFix(){const t=this.beforeFix;t&&(this.body=t.body,this.hooks=t.hooks,this.pillar=t.pillar,this.questions=t.questions,this.beforeFix=null,this.fixResult=null,this.touched(),z(this,"Back to the version before Fix it"))}addAnswers(){const t=this.questions.map((e,s)=>({question:e,answer:(this.answers[s]??"").trim()})).filter(e=>e.answer);t.length&&this.fix(t)}dismissQuestions(){this.questions=[],this.answers={},this.touched()}swapHook(t){const e=this.body.split(`
`),s=e.findIndex(o=>o.trim()),i=s>=0?e[s]:"";s>=0?e[s]=t:e.unshift(t),this.body=e.join(`
`);const n=this.hooks.filter(o=>o!==t);this.hooks=i.trim()?[i,...n].slice(0,3):n,this.touched()}async flush(){for(this.autosaveTimer&&(clearTimeout(this.autosaveTimer),this.autosaveTimer=null);this.inflight;)await this.inflight;if(!this.dirty)return!0;this.inflight=this.saveOnce();try{return await this.inflight}finally{this.inflight=null}}async saveOnce(){const t=this.editSeq,e=this.body.trim();if(!e||this.verticalId==null)return!0;const s=on(e,this.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle),i={body:e,source_note:this.aiAngle.trim()||null,pillar:this.pillar,proof_ids:this.proofIds,hooks:this.hooks,first_comment:this.firstComment.trim(),questions:this.questions};this.saveState="saving";try{const n=this.draftId==null,o=n?await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify({verticalId:this.verticalId,...i})}):await fetch(`/api/publisher/drafts/${this.draftId}`,{method:"PATCH",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify(i)});if(!o.ok)throw new Error(String(o.status));if(n){const{id:a}=await o.json();this.draftId=a,this.loadedFor=a}return this.synced&&this.synced!==s&&this.superseded.add(this.synced),this.synced=s,this.editSeq===t&&(this.dirty=!1),this.saveState="idle",n&&(this.emit("opened",{id:this.draftId}),this.emit("changed")),!0}catch{return this.saveState="error",!1}}async beforeClose(){return await this.flush()||this.leaveBlocked?!0:(this.leaveBlocked=!0,!1)}get blockers(){return Xp(this.body,this.firstComment)}patch(t,e){return fetch(`/api/publisher/drafts/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}async act(t,e){this.postMenu=!1;const s=this.blockers;if(t==="publish"){if(s.length){await be(this,{title:"This post can't go out yet",body:"Fix these first:",items:s});return}if(!await be(this,{title:this.linkedinConnected?"Post to LinkedIn now?":"Post through n8n now?",body:this.linkedinConnected?"It goes out as soon as you confirm, with its image and first comment.":"The n8n webhook posts the text only, without the image.",confirm:"Post now",tone:"primary"}))return}if(t==="schedule"&&s.length&&!await be(this,{title:"Some checks still fail",body:"It's scheduled, but it won't post until these are fixed:",items:s,confirm:"Schedule anyway",tone:"warning"}))return;if(!await this.flush()||this.draftId==null){z(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const i=this.draftId,n={status:this.draft?.status??"draft",scheduledAt:this.draft?.scheduled_at??null};this.postMenu=!1,t==="publish"&&(this.posting=!0);let o;try{o=await this.patch(i,{action:t,...e?{at:e}:{}})}catch{this.posting=!1,z(this,"No answer from the cockpit. Check Published before trying again.",{tone:"error"}),this.emit("changed");return}this.posting=!1;const a=await o.json().catch(()=>({}));if(!o.ok){a.reasons?.length?await be(this,{title:a.error??"Not posted",items:a.reasons}):z(this,a.error||"That didn't work. Try again.",{tone:"error"}),this.emit("changed");return}const l=this.closest("publisher-section"),h={label:"Undo",run:()=>void this.restore(l,i,n)};t==="schedule"&&e?(z(this,`Scheduled for ${im(e)}`,{action:h}),this.emit("moved",{stage:"scheduled"})):t==="publish"?a.status==="posted"?(z(this,a.commentError?"Posted. The first comment didn't go up; the notification has it.":"Posted to LinkedIn"),this.emit("moved",{stage:"posted"})):(z(this,"Mana can't post it. Copy it to LinkedIn by hand, then tap I posted it."),this.emit("changed")):t==="discard"?(z(this,"Draft deleted",{action:h}),this.emit("moved",{stage:"draft"})):t==="mark-posted"?(z(this,"Marked as posted"),this.emit("moved",{stage:"posted"})):this.emit("changed")}async restore(t,e,s){const i=s.scheduledAt?{action:"schedule",at:s.scheduledAt}:{action:"reopen"},n=await this.patch(e,i),o=s.scheduledAt?"scheduled":"draft",a=t??this;n.ok||z(a,(await n.json().catch(()=>({}))).error||"Couldn't undo that.",{tone:"error"}),a.dispatchEvent(new CustomEvent("publisher-refresh",{detail:{stage:n.ok?o:void 0},bubbles:!0,composed:!0}))}openPostMenu(t){if(this.menuAnchor=t.currentTarget,!this.scheduleAt){const e=this.defaultScheduleAt&&this.defaultScheduleAt*1e3>Date.now()+6e4?new Date(this.defaultScheduleAt*1e3):null,s=e??new Date(Date.now()+864e5);e||s.setHours(9,0,0,0);const i=n=>String(n).padStart(2,"0");this.scheduleAt=`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())}T${i(s.getHours())}:${i(s.getMinutes())}`}this.postMenu=!this.postMenu}updated(){this.renderRoot.querySelectorAll("textarea[data-grow]").forEach(t=>this.growTextarea(t)),this.postMenu?(this.menuHost||(this.menuHost=document.createElement("div"),document.body.appendChild(this.menuHost),document.addEventListener("pointerdown",this.onMenuPress,!0),document.addEventListener("keydown",this.onMenuKey,!0),window.addEventListener("scroll",this.onMenuScroll,!0),window.addEventListener("resize",this.closeMenu)),vt(this.renderPostMenu(),this.menuHost,{host:this}),this.placeMenu()):this.menuHost&&this.removeMenu()}growTextarea(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}removeMenu(){document.removeEventListener("pointerdown",this.onMenuPress,!0),document.removeEventListener("keydown",this.onMenuKey,!0),window.removeEventListener("scroll",this.onMenuScroll,!0),window.removeEventListener("resize",this.closeMenu),this.menuHost&&(vt(c,this.menuHost),this.menuHost.remove()),this.menuHost=null}placeMenu(){const t=this.menuHost?.firstElementChild;if(!t||!this.menuAnchor)return;const e=this.menuAnchor.getBoundingClientRect(),s=this.getBoundingClientRect(),i=8,n=Math.max(s.left,0)+i,o=Math.min(s.right,window.innerWidth)-i,a=Math.max(220,Math.min(320,o-n));t.style.width=`${a}px`,t.style.left=`${Math.max(n,Math.min(e.right-a,o-a))}px`;const l=t.offsetHeight,h=window.innerHeight-e.bottom-i,u=l<=h||h>=e.top-i,p=u?e.bottom+4:Math.max(i,e.top-4-l);t.style.top=`${p}px`,t.style.maxHeight=`${Math.max(160,u?h:e.top-i-4)}px`}renderPostMenu(){const t=Date.now()/1e3,e=this.scheduleAt?Math.floor(new Date(this.scheduleAt).getTime()/1e3):0,s=l=>{const h=new Date;return h.setDate(h.getDate()+l),h.setHours(9,0,0,0),Math.floor(h.getTime()/1e3)},i=(8-new Date().getDay())%7||7,n=[];this.defaultScheduleAt&&this.defaultScheduleAt>t+60&&n.push({label:"Next free slot",at:this.defaultScheduleAt}),n.push({label:"Tomorrow morning",at:s(1)}),i>1&&n.push({label:"Monday morning",at:s(i)});const o=new Set,a=l=>new Date(l*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});return r`
      <div class="fixed z-[1000] p-1.5 rounded-xl border border-line bg-surface shadow-lg overflow-y-auto" role="dialog" aria-label="Schedule post">
        ${n.filter(l=>!o.has(l.at)&&o.add(l.at)).map(l=>r`
          <button type="button" class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-hover" @click=${()=>void this.act("schedule",l.at)}>
            <span class="flex-1 text-sm text-ink">${l.label}</span>
            <span class="text-[12px] text-muted tabular-nums">${a(l.at)}</span>
          </button>`)}
        <div class="mx-3 my-1.5 border-t border-line/60"></div>
        <div class="px-3 pt-1 pb-2 space-y-2">
          <span class="block text-[12px] text-muted">Pick a date and time</span>
          <div class="flex items-center gap-2">
            <mana-date-picker label="Post on" class="flex-1 min-w-0" field-class="w-full px-2 py-1.5 text-[13px] bg-bg border border-line rounded-lg"
              .value=${this.scheduleAt.slice(0,10)} @change=${l=>{this.scheduleAt=`${l.target.value}T${this.scheduleAt.slice(11,16)||"09:00"}`}}></mana-date-picker>
            <input type="time" aria-label="Post at" class="w-[6.5rem] px-2 py-1.5 text-[13px] bg-bg border border-line rounded-lg text-ink"
              .value=${this.scheduleAt.slice(11,16)} @input=${l=>{const h=l.target.value;h&&(this.scheduleAt=`${this.scheduleAt.slice(0,10)}T${h}`)}} />
          </div>
          <button type="button" class="w-full py-1.5 text-[13px] rounded-lg bg-accent text-white font-medium hover:brightness-105 ${e>t?"":"opacity-40 pointer-events-none"}"
            @click=${()=>void this.act("schedule",e)}>Schedule</button>
          ${this.linkedinConnected?c:r`<p class="text-[11px] text-muted">${this.webhookConfigured?"Goes out through n8n, text only.":"Connect LinkedIn so it goes out on its own."}</p>`}
        </div>
      </div>`}async copyAndOpen(){window.open("https://www.linkedin.com/feed/?shareActive=true","_blank","noopener"),await this.copy(),this.copiedFor=this.draftId}async copy(){try{await navigator.clipboard.writeText(this.body),z(this,this.firstComment.trim()?"Copied. The first comment is below the text.":"Copied")}catch{z(this,"Couldn't copy. Select the text and copy it by hand.",{tone:"error"})}}renderSaveState(){return this.saveState==="error"?r`<span class="inline-flex items-center gap-2 text-[11px] text-red-600">Couldn't save
        <button type="button" class="font-medium text-ink hover:underline" @click=${()=>void this.flush()}>Retry</button>
        ${this.leaveBlocked?r`<button type="button" class="text-muted hover:text-ink hover:underline" @click=${()=>this.emit("force-close")}>Leave without saving</button>`:c}</span>`:c}get statusNow(){const t=this.draft,e=t?.status==="approved"&&t.scheduled_at?t.scheduled_at:null;return{status:t?.status==="approved"&&!e?"draft":t?.status??"draft",scheduled:e}}renderHeader(){this.draft;const{status:t,scheduled:e}=this.statusNow,s=e?`Scheduled ${new Date(e*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"})}`:t==="posting"?"Posting…":t==="posted"?"Published":t==="draft"?"Draft":"Discarded";return r`
      <div class="shrink-0 px-3 pt-3">
        <div class="relative flex flex-wrap items-center gap-2 px-4 py-3 mx-auto w-full ${this.twoCol?"max-w-[65rem]":"max-w-2xl"} mana-card">
          <button type="button" class="flex items-center h-7 pl-0.5 pr-1.5 -ml-1 rounded-lg text-sm text-accent hover:bg-hover"
            @click=${()=>this.emit("close")}><sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>${this.backLabel}</button>
          <span class="flex-1"></span>
          ${this.renderSaveState()}
          <span class="text-[11px] px-2 py-0.5 rounded-full font-medium ${e||t==="posting"?"bg-accent-soft text-accent":"bg-line text-muted"}">${s}</span>
        </div>
      </div>`}renderActions(){const{status:t,scheduled:e}=this.statusNow;if(this.posting)return r`<p class="flex items-center justify-end gap-1.5 text-[12px] text-ink">
      <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Posting…</p>`;if(this.draftId==null||t!=="draft"&&!e)return c;const s=this.linkedinConnected||this.webhookConfigured,i="inline-flex items-center gap-1 px-3 py-1.5 text-[13px] rounded-lg border border-line text-ink hover:bg-hover",n="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] rounded-lg bg-accent text-white font-medium hover:brightness-105";return r`
      <div class="flex flex-wrap items-center justify-end gap-2">
        ${e?r`<button type="button" class="text-[12px] text-muted hover:text-ink px-1 mr-auto" @click=${()=>void this.act("unschedule")}>Unschedule</button>`:r`<button type="button" class="mr-auto px-3 py-1.5 text-[13px] rounded-lg border border-line text-muted hover:text-red-600 hover:border-red-600/60" @click=${()=>void this.act("discard")}>Delete draft</button>`}
        <button type="button" class=${i} aria-haspopup="dialog" aria-expanded=${this.postMenu}
          @click=${o=>this.openPostMenu(o)}><sc-icon name="lucide-clock" class="w-3.5 h-3.5"></sc-icon>${e?"Reschedule":"Schedule"}</button>
        ${s?r`<button type="button" class=${n} @click=${()=>void this.act("publish")}><sc-icon name="lucide-send" class="w-3.5 h-3.5"></sc-icon>Post now</button>`:this.copiedFor===this.draftId?r`<button type="button" class=${n} @click=${()=>void this.act("mark-posted")}><sc-icon name="lucide-check" class="w-3.5 h-3.5"></sc-icon>I posted it</button>`:r`<button type="button" class=${n} title="Copies the text and opens LinkedIn"
                @click=${()=>void this.copyAndOpen()}><sc-icon name="lucide-copy" class="w-3.5 h-3.5"></sc-icon>Copy and open LinkedIn</button>`}
      </div>`}renderChecks(){const t=this.checks,e=t.filter(n=>n.level==="fail"),s=t.filter(n=>n.kind==="reach"),i=s.filter(n=>n.level==="pass").length;return r`
      ${e.length?r`
        <section class="rounded-xl border border-red-500/40 bg-surface px-3 py-2.5 space-y-1.5">
          <h4 class="text-[12px] font-semibold text-red-600">Before it can go out</h4>
          ${e.map(n=>r`<div class="text-[12px] leading-snug">
            <p class="text-ink">${n.label}</p>
            ${n.detail?r`<p class="text-[11px] text-muted whitespace-pre-wrap">${n.detail}</p>`:c}
          </div>`)}
        </section>`:c}
      <details class="group px-1">
        <summary class="flex items-center gap-1.5 cursor-pointer list-none text-[12px] text-muted select-none">
          <span class="w-14 shrink-0 font-semibold">Reach</span>
          <span class="tabular-nums ${i===s.length?"text-accent":"text-ink"}">${i} of ${s.length} checks pass</span>
          <sc-icon name="lucide-chevron-right" class="w-3.5 h-3.5 transition-transform group-open:rotate-90"></sc-icon>
        </summary>
        <div class="mt-1.5 pl-[3.875rem] space-y-1">
          ${s.map(n=>r`<div class="text-[12px] leading-snug">
            <div class="flex gap-2"><span class="w-3 shrink-0 text-center font-bold">${am[n.level]}</span><span class="${n.level==="pass"?"text-muted":"text-ink"}">${n.label}</span></div>
            ${n.detail&&n.level!=="pass"?r`<p class="pl-5 text-[11px] text-muted">${n.detail}</p>`:c}
          </div>`)}
        </div>
      </details>`}renderFix(){const t=this.fixResult;return r`
      ${this.fixing||this.improving?r`<p class="flex items-center gap-2 px-1 text-[11px] text-ink">
          <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
          Mana is looking at strong posts on this and rewriting yours. About two minutes.</p>`:c}
      ${t?r`
        <section class="rounded-xl border border-accent/40 bg-surface px-3 py-2.5 space-y-2">
          <div class="flex items-center gap-2">
            <h4 class="flex-1 flex items-center gap-1.5 text-[12px] font-semibold text-ink"><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5 text-accent"></sc-icon>Mana</h4>
            <button type="button" class="text-[12px] font-medium text-accent hover:underline" @click=${()=>this.undoFix()}>Undo</button>
          </div>
          ${t.reply?r`<p class="text-[13px] text-ink leading-relaxed whitespace-pre-wrap">${t.reply}</p>`:c}
          ${t.changes.length?r`<div class="space-y-0.5">
            <p class="text-[11px] font-semibold text-muted">What I changed</p>
            ${t.changes.map(e=>r`<p class="text-[12px] text-muted leading-snug">· ${e}</p>`)}
          </div>`:c}
          ${t.warnings.map(e=>r`<p class="text-[12px] text-amber-600 leading-snug">! ${e}</p>`)}
        </section>`:c}
      ${this.questions.length?this.renderQuestions():c}`}renderQuestions(){const t=this.questions.some((e,s)=>(this.answers[s]??"").trim());return r`
      <section class="rounded-xl border border-accent/40 bg-surface px-3 py-2.5 space-y-2">
        <div class="flex items-center gap-2">
          <h4 class="flex-1 text-[12px] font-semibold text-ink">Mana needs from you</h4>
          <button type="button" class="text-[11px] text-muted hover:text-ink" ?disabled=${this.fixing} @click=${()=>this.dismissQuestions()}>Dismiss</button>
        </div>
        <p class="text-[11px] text-muted leading-snug">Answer any of these and Mana works them in. It won't guess them.</p>
        ${this.questions.map((e,s)=>r`
          <label class="block text-[12px] text-ink leading-snug">${e}
            <input type="text" class="mt-1 w-full px-2.5 py-1.5 text-[12px] bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              ?disabled=${this.fixing} .value=${this.answers[s]??""}
              @input=${i=>{this.answers={...this.answers,[s]:i.target.value}}}
              @keydown=${i=>{i.key==="Enter"&&(i.preventDefault(),this.addAnswers())}} /></label>`)}
        <button type="button" class="px-3 py-1.5 text-[12px] rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
          ?disabled=${!t||this.fixing} @click=${()=>this.addAnswers()}>Add to post</button>
      </section>`}renderAiStart(){const t=this.aiWriting,e=this.draftId==null&&!this.body.trim(),s=!this.draft||this.draft.status==="draft"||this.draft.status==="approved",i=s&&!e&&!!this.body.trim()&&!t&&!this.fixing&&!this.improving,n=()=>{t||this.verticalId==null||!e||this.emit("ai-draft",{topicId:this.verticalId,angle:this.aiAngle})};return r`
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <input type="text" class="flex-1 min-w-0 px-3 py-2 text-[15px] font-semibold bg-surface border border-line rounded-xl focus:outline-none focus:border-ink text-ink placeholder:font-normal"
            placeholder="What's it about?" aria-label="Title" ?disabled=${t} ?readonly=${!s}
            .value=${this.aiAngle}
            @input=${o=>{this.aiAngle=o.target.value,this.draftId!=null&&this.touched()}}
            @keydown=${o=>{o.key==="Enter"&&(o.preventDefault(),n())}} />
          ${e&&!t?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium ${this.verticalId==null?"opacity-40 pointer-events-none":""}"
                title="Mana writes the post from the title" @click=${n}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Write it</button>`:s&&!t?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
                  ?disabled=${!i} title="Mana rewrites it into a post worth reading, in your voice. You can undo it."
                  @click=${()=>void this.fix()}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Improve it</button>`:c}
        </div>
        ${t?r`<p class="flex items-center gap-2 px-1 text-xs text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Mana is writing it. About two minutes.</p>`:c}
        ${this.aiError&&e?r`<p class="px-1 text-[11px] text-red-600">The draft didn't come back: ${this.aiError}</p>`:c}
      </div>`}render(){const t=this.draft,e=!t||t.status==="draft"?this.hooks:[],s=!t||t.status==="draft"||t.status==="approved",i=this.twoCol,n=this.posting||this.draftId!=null&&(this.statusNow.status==="draft"||!!this.statusNow.scheduled),o=r`
      <section class="min-w-0 mana-card p-4 ${i?"flex flex-col gap-3":"space-y-3"}">
        ${this.renderAiStart()}
        <textarea data-grow data-draft-body class="w-full ${i?"min-h-[20rem]":"min-h-[22rem]"} overflow-hidden resize-none px-3 py-2.5 text-sm bg-surface border border-line rounded-xl focus:outline-none focus:border-ink leading-relaxed text-ink"
          placeholder="Hook first. One line that makes them need the second."
          maxlength=${Un}
          ?readonly=${!s||this.aiWriting||this.fixing||this.improving}
          .value=${this.body}
          @input=${h=>{const u=h.target;this.growTextarea(u),this.edit(u.value)}}
          @keydown=${h=>{(h.metaKey||h.ctrlKey)&&h.key==="s"&&(h.preventDefault(),this.flush())}}></textarea>
      </section>`,a=r`
      <section class="space-y-3 min-w-0 mana-card p-4">
        ${s&&this.body.trim()?this.renderFix():c}
        ${this.commentOpen||this.firstComment.trim()?r`<label class="block text-[12px] text-muted">First comment (links go here)
          <textarea data-grow class="mt-1 w-full min-h-[3.25rem] overflow-hidden px-3 py-2 text-sm bg-surface border border-line rounded-xl resize-none focus:outline-none focus:border-ink leading-relaxed text-ink"
            placeholder=${this.linkedinConnected?"Mana posts it as a comment right after the post":"Shown with the post, to add as the first comment"}
            ?readonly=${!s}
            maxlength=${Bn}
            .value=${this.firstComment}
            @input=${h=>{const u=h.target;this.growTextarea(u),this.firstComment=u.value,this.touched()}}></textarea></label>`:s?r`<button type="button" class="text-[12px] text-muted hover:text-ink"
              @click=${()=>{this.commentOpen=!0,this.updateComplete.then(()=>this.querySelector("label textarea")?.focus())}}>+ First comment</button>`:c}
        ${e.length?r`<div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] text-muted/70 font-semibold">Other hooks</span>
              ${e.map(h=>r`<button type="button" title=${h}
                class="max-w-full truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
                @click=${()=>this.swapHook(h)}>${h}</button>`)}
            </div>`:c}
        ${this.renderChecks()}
        ${t&&this.renderImage?this.renderImage(t):c}
      </section>`,l=r`
      <aside class="min-w-0 mana-card p-3 ${i?"self-start sticky top-0":""}">
        <div class="flex items-center justify-center gap-1 mb-2">
          ${["mobile","desktop"].map(h=>r`<button type="button"
            class="px-2.5 py-1 text-[11px] rounded-full ${this.mode===h?"bg-hover text-ink font-medium":"text-muted hover:text-ink"}"
            @click=${()=>{this.mode=h}}>${h==="mobile"?"Phone":"Desktop"}</button>`)}
        </div>
        <linkedin-preview .text=${this.body} .mode=${this.mode} .imageUrl=${t?.image_url??null} .authorName=${this.authorName}></linkedin-preview>
      </aside>`;return r`
      <div class="flex flex-col flex-1 min-h-0">
        ${this.renderHeader()}
        <div class="flex-1 min-h-0 overflow-y-auto p-3 pb-24">
          ${i?r`<div class="grid grid-cols-[minmax(0,34rem)_minmax(0,30rem)] justify-center gap-x-4 gap-y-3">
                ${o}${l}
                <div class="col-span-2 min-w-0">${a}</div>
                ${n?r`<div class="col-span-2 mana-card px-4 py-3">${this.renderActions()}</div>`:c}
              </div>`:r`<div class="max-w-2xl mx-auto space-y-4">${o}${a}${n?r`<div class="mana-card px-4 py-3">${this.renderActions()}</div>`:c}${l}</div>`}
        </div>
      </div>`}};R([b({attribute:!1})],_.prototype,"draft",2);R([b({attribute:!1})],_.prototype,"topics",2);R([b({attribute:!1})],_.prototype,"defaultTopicId",2);R([b({type:Boolean})],_.prototype,"linkedinConnected",2);R([b({type:Boolean})],_.prototype,"webhookConfigured",2);R([b({type:Boolean})],_.prototype,"twoCol",2);R([b({attribute:!1})],_.prototype,"defaultScheduleAt",2);R([b({attribute:!1})],_.prototype,"renderImage",2);R([b({type:Boolean})],_.prototype,"aiWriting",2);R([b({type:Boolean})],_.prototype,"improving",2);R([b()],_.prototype,"aiError",2);R([b()],_.prototype,"backLabel",2);R([b()],_.prototype,"authorName",2);R([d()],_.prototype,"body",2);R([d()],_.prototype,"pillar",2);R([d()],_.prototype,"aiAngle",2);R([d()],_.prototype,"commentOpen",2);R([d()],_.prototype,"verticalId",2);R([d()],_.prototype,"proofIds",2);R([d()],_.prototype,"hooks",2);R([d()],_.prototype,"firstComment",2);R([d()],_.prototype,"questions",2);R([d()],_.prototype,"answers",2);R([d()],_.prototype,"fixing",2);R([d()],_.prototype,"fixResult",2);R([d()],_.prototype,"dirty",2);R([d()],_.prototype,"saveState",2);R([d()],_.prototype,"posting",2);R([d()],_.prototype,"proofs",2);R([d()],_.prototype,"mode",2);R([d()],_.prototype,"postMenu",2);R([d()],_.prototype,"scheduleAt",2);R([d()],_.prototype,"copiedFor",2);R([d()],_.prototype,"leaveBlocked",2);_=R([w("publisher-editor")],_);var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,$=(t,e,s,i)=>{for(var n=i>1?void 0:i?cm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&lm(e,s,n),n};const dm=640,yr=176,wr=400,Qs=224,Tt=(t,e="w-4 h-4")=>r`<sc-icon name="lucide-${t}" class=${e}></sc-icon>`,ys=[{key:"draft",label:"Drafts",icon:"file-text"},{key:"scheduled",label:"Scheduled",icon:"clock"},{key:"posted",label:"Published",icon:"send"}];function Js(t){return t.status==="posting"?"scheduled":t.status==="approved"?t.scheduled_at?"scheduled":"draft":t.status==="draft"||t.status==="posted"?t.status:null}const Xs=()=>Math.floor(Date.now()/1e3),hm=t=>new Date(t*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),rn=["impressions","reactions","comments","leads"],Zs={proof:"Case study",teach:"How-to",take:"Opinion",story:"Story"},kr={proof:"bg-emerald-500/10 text-emerald-600",teach:"bg-sky-500/10 text-sky-600",take:"bg-amber-500/10 text-amber-600",story:"bg-pink-500/10 text-pink-600"},It=t=>t.format==="yt_script",$r="bg-violet-500/10 text-violet-600",ws=[{key:"name",q:"Name this topic.",hint:'Shows in the sidebar, e.g. "Voice agents" or "EDU APAC"',required:!0},{key:"audience",q:"Who are you writing for?",hint:"People, interests or roles, e.g. clinic owners in DACH who still book by phone",required:!0},{key:"goal",q:"What should posting about this get you?",hint:'One concrete outcome, e.g. "2 demo calls a month"',required:!1}],Sr={name:"",goal:"",audience:"",offer:"",opinions:"",cta:"",extra:""},Tr={auto:'<rect width="48" height="32" rx="4" fill="#2a3446"/><path d="M24 7l2.2 6.3L32 16l-5.8 2.7L24 25l-2.2-6.3L16 16l5.8-2.7z" fill="#8ab4ff"/>',photo:'<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5b26b"/><stop offset="1" stop-color="#7d8fb3"/></linearGradient></defs><rect width="48" height="32" rx="4" fill="url(#sk)"/><circle cx="34" cy="11" r="4" fill="#ffe6a8"/><path d="M0 26l12-10 9 7 8-6 19 12v3H0z" fill="#33415c"/>',illustration:'<rect width="48" height="32" rx="4" fill="#ffe9d6"/><circle cx="17" cy="15" r="7" fill="#ff8a65"/><rect x="26" y="9" width="13" height="13" rx="3" fill="#4db6ac"/><path d="M6 27h36" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>',diagram:'<rect width="48" height="32" rx="4" fill="#f4f6fa"/><rect x="5" y="11" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="5" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="18" width="11" height="9" rx="2" fill="#5b8def"/><path d="M16 15.5h8m0 0V9.5h8m-8 6v6.5h8" stroke="#8a94a6" stroke-width="1.5" fill="none"/>',"text-card":'<rect width="48" height="32" rx="4" fill="#111827"/><rect x="7" y="9" width="30" height="4" rx="1" fill="#fff"/><rect x="7" y="16" width="22" height="4" rx="1" fill="#fff"/><rect x="7" y="24" width="12" height="2" rx="1" fill="#f59e0b"/>'},Cr=(t,e="w-12 h-8")=>r`<svg viewBox="0 0 48 32" class="${e} shrink-0 rounded" aria-hidden="true">${Vp(Tr[t]??Tr.auto)}</svg>`,ks=[{key:"auto",label:"Mana picks per post",dna:""},{key:"photo",label:"Photo",dna:""},{key:"illustration",label:"Illustration",dna:""},{key:"diagram",label:"Diagram",dna:""},{key:"text-card",label:"Text card",dna:""}];let k=class extends T{constructor(){super(...arguments),this.chatOpen=!1,this.verticals=[],this.drafts=[],this.webhookConfigured=!1,this.linkedinConfigured=!1,this.loading=!0,this.activeVerticalId=(()=>{try{const t=Number(localStorage.getItem("cockpit.publisher_vertical"));return Number.isFinite(t)&&t>0?t:null}catch{return null}})(),this.stage=this.activeVerticalId===null?"scheduled":"draft",this.view="queue",this.wide=!0,this.navOpen=!1,this.navWidth=(()=>{try{const t=Number(localStorage.getItem("cockpit.publisher_nav_width"));return t>=yr&&t<=wr?t:Qs}catch{return Qs}})(),this.navHidden=(()=>{try{return localStorage.getItem("cockpit.publisher_nav_hidden")==="1"}catch{return!1}})(),this.collapsedGroups=(()=>{try{return new Set(JSON.parse(localStorage.getItem("cockpit.publisher_nav_collapsed")||"[]"))}catch{return new Set}})(),this.wizardEditId=null,this.wizardStep=0,this.wizard={...Sr},this.wizardLang="de",this.wizardFormality="du",this.langOther=!1,this.editPostsPerWeek=4,this.editImageStyle="auto",this.editImageDna="",this.editImageRef=null,this.imaging=[],this.improving=[],this.imageErrors={},this.toldImageErrors=new Set,this.started=!1,this.stylePickerFor=null,this.imageStyleFor={},this.libraryFor=null,this.saving=!1,this.editingId=null,this.editBody="",this.composing=!1,this.editorId=null,this.createdId=null,this.twoCol=!0,this.aiTopicId=null,this.aiStartedAt=null,this.aiError="",this.generating=!1,this.genStartedAt=null,this.genTicker=null,this.webhookUrl="",this.webhookSecret="",this.linkedinToken="",this.linkedin=null,this.liClientId="",this.liClientSecret="",this.liSaving=!1,this.showLegacy=!1,this.postUrlForId=null,this.postUrlDraft="",this.syncingId=null,this.copiedId=null,this.researchOpenId=null,this.expandedId=null,this.toastMsg=null,this.toastTimer=null,this.ask=null,this.insights=null,this.metricsForId=null,this.metricsDraft={impressions:"",reactions:"",comments:"",leads:""},this.poll=null,this.topicDrag=new ho(this,{type:"text/x-publisher-topic",onReorder:(t,e)=>this.reorderTopic(t,e)}),this.dirtyFields=new Set,this.onToast=t=>{t.stopPropagation(),this.toastMsg=t.detail,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMsg=null},this.toastMsg.action?8e3:5e3)},this.onConfirm=t=>{t.stopPropagation();const e=t.detail;e.handled=!0,this.ask?.resolve(!1),this.ask=e,this.updateComplete.then(()=>requestAnimationFrame(()=>this.querySelector("[data-dialog-default]")?.focus()))},this.onNotifNavigate=t=>{t.detail?.mode==="publisher"&&(this.view==="editor"||this.view==="wizard"||this.setStage("posted"))},this.onOutsideChange=()=>{this.refresh()},this.onRefreshRequest=t=>{const e=t.detail?.stage;e&&this.view==="queue"&&this.setStage(e),this.refresh()},this.topicSaveTimer=null,this.viewKey="",this.insightsFor=""}connectedCallback(){super.connectedCallback(),this.refresh(),this.resizeObs=new ResizeObserver(()=>{const t=this.clientWidth>=dm;t!==this.wide&&(this.wide=t);const e=this.clientWidth>=1100;e!==this.twoCol&&(this.twoCol=e)}),this.resizeObs.observe(this),this.addEventListener("publisher-toast",this.onToast),this.addEventListener("publisher-confirm",this.onConfirm),this.viewKey="",this.addEventListener("publisher-refresh",this.onRefreshRequest),document.addEventListener("notif-navigate",this.onNotifNavigate),document.addEventListener("ops-event",this.onOutsideChange),document.addEventListener("publisher-live",this.onOutsideChange),this.poll=setInterval(()=>{const t=this.view==="queue"&&this.editingId===null&&this.metricsForId===null&&this.postUrlForId===null&&!this.composing&&!this.topicDrag.active,e=this.view==="wizard"&&this.wizardEditId!=null,s=this.aiStartedAt!==null,i=this.imaging.length>0||this.improving.length>0;(t||e||s||i)&&this.refresh()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this.flushTopicSave(),this.poll&&clearInterval(this.poll),this.genTicker&&clearInterval(this.genTicker),this.resizeObs?.disconnect(),this.removeEventListener("publisher-toast",this.onToast),this.removeEventListener("publisher-confirm",this.onConfirm),this.removeEventListener("publisher-refresh",this.onRefreshRequest),document.removeEventListener("notif-navigate",this.onNotifNavigate),document.removeEventListener("ops-event",this.onOutsideChange),document.removeEventListener("publisher-live",this.onOutsideChange),this.toastTimer&&clearTimeout(this.toastTimer),this.ask?.resolve(!1)}answer(t){const e=this.ask;this.ask=null,e?.resolve(t)}renderToast(){const t=this.toastMsg;return t?r`
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 px-4 py-2 rounded-xl ${t.tone==="error"?"bg-red-600":"bg-ink"} text-surface text-sm shadow-lg" role="status">
        <span class="min-w-0">${t.text}</span>
        ${t.action?r`<button type="button" class="shrink-0 font-semibold hover:underline"
          @click=${()=>{const e=t.action.run;this.toastMsg=null,e()}}>${t.action.label}</button>`:c}
      </div>`:c}renderDialog(){const t=this.ask;if(!t)return c;const e=t.tone==="danger"?"bg-red-600":t.tone==="warning"?"bg-amber-500":"bg-accent";return r`
      <sc-dialog open label=${t.title}
        @sc-hide=${()=>this.answer(!1)}
        @keydown=${s=>{s.key==="Escape"?(s.preventDefault(),this.answer(!1)):s.key==="Enter"&&t.confirm&&!(s.target instanceof HTMLTextAreaElement)&&(s.preventDefault(),this.answer(!0))}}>
        ${t.body?r`<p class="text-sm text-muted leading-snug">${t.body}</p>`:c}
        ${t.items?.length?r`<ul class="mt-2 space-y-1 text-sm text-ink list-disc pl-5">${t.items.map(s=>r`<li>${s}</li>`)}</ul>`:c}
        <div slot="footer" class="flex items-center justify-end gap-2">
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg text-muted hover:text-ink hover:bg-hover" ?data-dialog-default=${!t.confirm}
            @click=${()=>this.answer(!1)}>${t.cancel??(t.confirm?"Cancel":"Close")}</button>
          ${t.confirm?r`<button type="button" data-dialog-default class="px-3 py-1.5 text-sm rounded-lg font-semibold text-white hover:opacity-90 ${e}"
            @click=${()=>this.answer(!0)}>${t.confirm}</button>`:c}
        </div>
      </sc-dialog>`}get activeVertical(){return this.verticals.find(t=>t.id===this.activeVerticalId)??null}setVertical(t){this.activeVerticalId=t,this.stage=t===null?"scheduled":"draft",this.composing=!1,this.editingId=null,this.expandedId=null,this.view="queue",this.navOpen=!1;try{localStorage.setItem("cockpit.publisher_vertical",String(t??0))}catch{}}setStage(t){this.stage=t,this.expandedId=null,this.view="queue",this.navOpen=!1}inTopic(t){return this.activeVerticalId===null||t.vertical_id===this.activeVerticalId}stageCount(t,e=!1){return this.drafts.filter(s=>Js(s)===t&&(e||this.inTopic(s))).length}takenTimes(t){return this.drafts.filter(e=>(e.status==="approved"||e.status==="posting")&&e.scheduled_at&&e.id!==t).map(e=>e.scheduled_at)}postedThisWeek(t){const e=Al(Xs());return this.drafts.filter(s=>s.vertical_id===t.id&&s.status==="posted"&&(s.posted_at??0)>=e).length}async reorderTopic(t,e){const s=this.verticals.findIndex(o=>o.id===t);if(s<0)return;const i=[...this.verticals],[n]=i.splice(s,1);i.splice(s<e?e-1:e,0,n),!i.every((o,a)=>o.id===this.verticals[a]?.id)&&(this.verticals=i,await fetch("/api/publisher/verticals/order",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({ids:i.map(o=>o.id)})}))}async deleteTopic(t){const e=this.drafts.filter(n=>n.vertical_id===t.id).length;if(!await be(this,{title:`Delete ${t.name}?`,body:`${e?`Its ${e} post${e===1?"":"s"} go with it. `:""}This can't be undone. Anything already on LinkedIn stays there, and its proof and voice samples stay as general items.`,confirm:"Delete topic",tone:"danger"}))return;if(!(await fetch(`/api/publisher/verticals/${t.id}?drafts=delete`,{method:"DELETE"})).ok){z(this,"Couldn't delete the topic. Try again.",{tone:"error"});return}this.activeVerticalId===t.id&&this.setVertical(null),await this.refresh(),z(this,`Deleted ${t.name}`)}openCompose(){this.navOpen=!1,this.editorId=null,this.composing=!0,this.aiStartedAt===null&&(this.aiError=""),this.view="editor"}openEditor(t){this.navOpen=!1,this.composing=!1,this.editorId=t,this.view="editor"}async closeEditor(){const t=this.querySelector("publisher-editor");if(t&&!await t.beforeClose()){z(this,"Couldn't save your last edit.",{tone:"error",action:{label:"Leave anyway",run:()=>this.leaveEditor()}});return}this.leaveEditor()}follow(t){this.leaveEditor(),this.setStage(t)}leaveEditor(){this.composing=!1,this.editorId=null,this.createdId=null,this.view="queue",this.refresh()}pickUpAiDraft(){if(this.aiStartedAt===null||this.generating)return;const t=Math.floor(this.aiStartedAt/1e3)-5,e=this.drafts.filter(s=>s.created_at>=t&&s.vertical_id===this.aiTopicId).sort((s,i)=>i.created_at-s.created_at)[0];e?(this.aiStartedAt=null,(this.view==="editor"&&this.composing||this.view==="queue")&&this.openEditor(e.id)):Date.now()-this.aiStartedAt>480*1e3&&(this.aiStartedAt=null)}async refresh(){try{const t=await fetch("/api/publisher");if(t.ok){const e=await t.json();this.linkedin=e.linkedin??null;const s=this.imaging;this.imaging=e.imaging??[],this.improving=e.improving??[],this.imageErrors=e.imageErrors??{};for(const[i,n]of Object.entries(this.imageErrors)){const o=`${i}:${n}`;this.toldImageErrors.has(o)||(this.toldImageErrors.add(o),this.started&&z(this,`The image didn't come: ${n}`,{tone:"error"}))}if(this.started=!0,s.some(i=>!this.imaging.includes(i))&&_t(()=>import("./notes-media-DWQZLlRj.js"),__vite__mapDeps([2,3,4,5])).then(i=>i.forgetMediaCache()),this.verticals=e.verticals,this.drafts=e.drafts,this.webhookConfigured=e.webhookConfigured,this.linkedinConfigured=e.linkedinConfigured??!1,this.setGenerating(e.generating??!1),this.view==="results"&&this.loadInsights(),this.aiStartedAt!==null&&e.draftError&&e.draftError.at>=this.aiStartedAt&&!e.generating&&(this.aiStartedAt=null,this.aiError=e.draftError.message),this.pickUpAiDraft(),this.view==="wizard"&&this.wizardEditId!=null){const i=this.verticals.find(n=>n.id===this.wizardEditId);i&&this.mergeServerIntoForm(i)}this.loading=!1}}catch{}}setGenerating(t){const e=this.genStartedAt!==null&&Date.now()-this.genStartedAt<8e3,s=t||e;s&&!this.generating&&(this.genStartedAt===null&&(this.genStartedAt=Date.now()),this.genTicker||(this.genTicker=setInterval(()=>this.requestUpdate(),1e3))),!s&&this.generating&&(this.genStartedAt=null,this.genTicker&&(clearInterval(this.genTicker),this.genTicker=null)),this.generating=s}genStatusText(){const t=this.genStartedAt?Math.floor((Date.now()-this.genStartedAt)/1e3):0;return`${t<40?"searching what your buyers are talking about":t<100?"reading sources + writing the draft":"still writing — long research pass"}… ${t}s (typically 60–120s)`}mergeServerIntoForm(t){const e={name:t.name,goal:t.goal??"",audience:t.audience??"",offer:t.offer??"",opinions:t.opinions??"",cta:t.cta??"",extra:t.extra??""};let s=this.wizard,i=!1;for(const n of Object.keys(e))!this.dirtyFields.has(n)&&e[n]!==s[n]&&(i||(s={...s}),s[n]=e[n],i=!0);i&&(this.wizard=s),!this.dirtyFields.has("language")&&t.language!==this.wizardLang&&(this.wizardLang=t.language),!this.dirtyFields.has("formality")&&t.formality!==this.wizardFormality&&(this.wizardFormality=t.formality),!this.dirtyFields.has("posts_per_week")&&t.posts_per_week!==this.editPostsPerWeek&&(this.editPostsPerWeek=t.posts_per_week)}openWizard(t){this.flushTopicSave(),t?(this.wizardEditId=t.id,this.wizard={name:t.name,goal:t.goal??"",audience:t.audience??"",offer:t.offer??"",opinions:t.opinions??"",cta:t.cta??"",extra:t.extra??""},this.wizardLang=t.language,this.wizardFormality=t.formality,this.editPostsPerWeek=t.posts_per_week,this.editImageStyle=t.image_style&&t.image_style!=="line-art"?t.image_style:"photo",this.editImageDna=t.image_dna||"",this.editImageRef=t.image_ref_url):(this.wizardEditId=null,this.wizard={...Sr},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=3,this.editImageStyle="photo",this.editImageDna="",this.editImageRef=null),this.dirtyFields=new Set,this.wizardStep=0,this.view="wizard",this.navOpen=!1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}updated(t){super.updated?.(t),this.reportView();const e=["wizard","wizardLang","wizardFormality","editPostsPerWeek","editImageStyle","editImageDna","editImageRef"];this.view!=="wizard"||this.wizardEditId==null||!this.dirtyFields.size||e.some(s=>t.has(s))&&(this.topicSaveTimer&&clearTimeout(this.topicSaveTimer),this.topicSaveTimer=setTimeout(()=>void this.flushTopicSave(),1e3))}reportView(){const t=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null,e=n=>this.verticals.find(o=>o.id===n)?.name??"no topic",s=t?`Publisher · editing draft#${t.id} (${e(t.vertical_id)})${t.source_note?`: "${t.source_note.slice(0,120)}"`:""}`:this.composing?"Publisher · writing a new post (not saved yet, no draft id)":`Publisher · ${this.view==="queue"?`${ys.find(n=>n.key===this.stage)?.label??this.stage} list${this.activeVertical?` in ${this.activeVertical.name}`:""}`:this.view}`,i=`${s}|${t?.id??""}`;i!==this.viewKey&&(this.viewKey=i,f.getState().setViewContext({tool:"publisher",summary:s,item:t?.id??null}))}async flushTopicSave(){this.topicSaveTimer&&(clearTimeout(this.topicSaveTimer),this.topicSaveTimer=null);const t=this.wizardEditId;if(t==null||!this.dirtyFields.size||!this.wizard.name.trim())return;const e=new Set(this.dirtyFields);this.dirtyFields=new Set;const s={...this.wizard,language:this.wizardLang.trim()||"en",formality:this.wizardFormality,image_style:this.editImageStyle,image_dna:this.editImageDna,image_ref_url:this.editImageRef,posts_per_week:this.editPostsPerWeek};if(!(await fetch(`/api/publisher/verticals/${t}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).catch(()=>null))?.ok){for(const n of e)this.dirtyFields.add(n);z(this,"Couldn't save the topic. Try again.",{tone:"error"});return}z(this,"Saved"),this.refresh()}async closeEditForm(){await this.flushTopicSave(),this.view="queue"}async saveWizard(){if(!this.saving){this.saving=!0;try{const t={...this.wizard,language:this.wizardLang,formality:this.wizardFormality};if(t.image_style=this.editImageStyle,t.image_dna=this.editImageDna,t.image_ref_url=this.editImageRef,t.posts_per_week=this.editPostsPerWeek,this.wizardEditId!=null)await fetch(`/api/publisher/verticals/${this.wizardEditId}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)});else{const e=await fetch("/api/publisher/verticals",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});if(e.ok){const{id:s}=await e.json();this.setVertical(s)}}await this.refresh(),this.view="queue"}finally{this.saving=!1}}}renderLangPills(){const t=[["en","English"],["tr","Türkçe"],["de","Deutsch"]],e=this.wizardLang==="de+en"?"de":this.wizardLang,s=this.langOther||!t.some(([l])=>l===e),i=(l,h,u)=>r`
      <button type="button"
        class="px-3 py-1 rounded-full text-xs border ${l?"border-ink bg-ink text-surface":"border-line text-muted hover:text-ink hover:border-ink/40"}"
        @click=${u}>${h}</button>`,n=l=>{this.dirtyFields.add("language"),this.wizardLang=l},o=e==="de"?["Du","Sie"]:e==="tr"?["Sen","Siz"]:null,a=l=>{this.dirtyFields.add("formality"),this.wizardFormality=l};return r`
      <div class="mt-1 flex flex-wrap items-center gap-1.5">
        ${t.map(([l,h])=>i(!s&&e===l,h,()=>{this.langOther=!1,n(l)}))}
        ${i(s,"Other",()=>{this.langOther=!0,s||n("")})}
        ${s?r`<input class="w-32 px-2 py-1 text-xs bg-surface border border-line rounded-full focus:outline-none focus:border-ink"
          placeholder="e.g. Spanish" maxlength="30" .value=${this.wizardLang}
          @input=${l=>n(l.target.value)} />`:c}
      </div>
      ${o?r`<div class="mt-3">Anrede<div class="mt-1 flex gap-1.5">
        ${i(this.wizardFormality!=="sie",o[0],()=>a("du"))}
        ${i(this.wizardFormality==="sie",o[1],()=>a("sie"))}
      </div></div>`:c}`}renderEditForm(){const t=this.verticals.find(s=>s.id===this.wizardEditId),e=(s,i,n=!1)=>r`
      <label class="block text-xs text-muted">${i}
        <textarea class="mt-1 w-full ${n?"h-40":"h-20"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
          .value=${this.wizard[s]}
          @input=${o=>{this.dirtyFields.add(s),this.wizard={...this.wizard,[s]:o.target.value}}}
        ></textarea></label>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto mana-card p-4 space-y-3 mb-24">
          <label class="block text-xs text-muted">Name
            <input type="text" class="mt-1 w-full px-3 py-2 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              .value=${this.wizard.name}
              @input=${s=>{this.dirtyFields.add("name"),this.wizard={...this.wizard,name:s.target.value}}} /></label>
          ${e("audience","Who are you writing for?")}
          ${e("goal","What should posting about this get you?")}
          <div class="flex-1 text-xs text-muted">Language${this.renderLangPills()}</div>
          ${e("extra","Notes for Mana (optional): anything it should know or avoid",!0)}
          <details class="group pt-1">
            <summary class="flex items-center gap-1.5 cursor-pointer list-none text-xs font-semibold text-muted hover:text-ink select-none">
              <sc-icon name="lucide-chevron-right" class="w-3 h-3 transition-transform group-open:rotate-90"></sc-icon>More</summary>
            <div class="mt-3 space-y-3">
          <div>
            <label class="flex items-center gap-3 text-xs text-muted">Posts per week (target)
              <input type="number" min="1" max="7" class="w-20 px-2 py-1.5 text-sm bg-surface border border-line rounded-lg text-right"
                .value=${String(this.editPostsPerWeek)}
                @input=${s=>{this.dirtyFields.add("posts_per_week"),this.editPostsPerWeek=Number(s.target.value)||3}} /></label>
            <p class="text-[10px] text-muted/70 mt-1.5">The topic view shows this week's published posts against this target.</p>
          </div>
          ${this.renderImageConfig()}
            </div>
          </details>
          <div class="flex items-center justify-end pt-4">
            ${t?r`<button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-red-500 hover:bg-red-500/10"
              @click=${()=>void this.deleteTopic(t)}>${Tt("trash-2")} Delete topic</button>`:c}
          </div>
        </div>
      </div>
    `}renderWizard(){const t=this.wizardStep===ws.length,e=t?null:ws[this.wizardStep],s=!e?.required||!!this.wizard[e.key].trim(),i=!!this.wizard.name.trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto mana-card p-4 mt-4 mb-24">
          <div class="flex items-center gap-1.5 mb-6">
            ${[...ws,null].map((n,o)=>r`<button type="button"
              class="h-2.5 flex-1 rounded-full transition-colors ${o<=this.wizardStep?"bg-accent":"bg-line hover:bg-muted/40"}"
              title=${o<ws.length?ws[o].q:"Language & tone"}
              aria-label="Go to step ${o+1}"
              @click=${()=>{this.wizardStep=o,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}}
            ></button>`)}
            <button type="button"
              class="shrink-0 ml-1 w-6 h-6 grid place-items-center rounded-full text-muted hover:text-ink hover:bg-hover text-base leading-none"
              title=${i?"Save what's here and close":"Close without saving"}
              @click=${()=>{i?this.saveWizard():this.view="queue"}}
            >×</button>
          </div>
          ${e?r`
              <h3 class="text-base font-semibold text-ink mb-1">${e.q}</h3>
              <p class="text-xs text-muted mb-3">${e.hint}</p>
              <textarea
                class="wizard-input w-full ${e.key==="name"?"h-12":"h-24"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
                .value=${this.wizard[e.key]}
                placeholder=${e.required?"":"optional"}
                @input=${n=>{this.wizard={...this.wizard,[e.key]:n.target.value}}}
                @keydown=${n=>{n.key==="Escape"?this.view="queue":n.key==="Enter"&&e.key==="name"&&(n.preventDefault(),s&&(this.wizardStep+=1))}}
              ></textarea>`:r`
              <h3 class="text-base font-semibold text-ink mb-1">Language & tone</h3>
              <p class="text-xs text-muted mb-3">The language this topic posts in.</p>
              <div class="flex gap-3">
                <div class="flex-1 text-xs text-muted">Language${this.renderLangPills()}</div>
              </div>`}
          <div class="flex items-center justify-between mt-4">
            <button type="button" class="text-sm text-muted hover:text-ink"
              @click=${()=>{this.wizardStep===0?this.view="queue":this.wizardStep-=1}}
            >← Back</button>
            <button type="button"
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!s||this.saving?"opacity-40 pointer-events-none":""}"
              @click=${()=>{t?this.saveWizard():(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus()))}}
            >${this.saving?"…":t?this.wizardEditId!=null?"Save changes":"Create topic":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async draftWithAi(t){if(this.generating||this.aiStartedAt!==null)return;this.aiTopicId=t.topicId,this.aiError="",this.genStartedAt=Date.now(),this.setGenerating(!0);const e=await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:t.topicId,pillar:t.pillar,angle:t.angle?.trim()||void 0})}).catch(()=>null);if(!e?.ok){this.genStartedAt=null,this.setGenerating(!1),z(this,e?.status===409?"A draft is already being written. Give it a minute.":"Couldn't start the draft. Try again.",{tone:"error"});return}this.aiStartedAt=Date.now()}async removeDraft(t){await be(this,{title:"Delete this post for good?",body:"It leaves the archive and its numbers leave Results. The post on LinkedIn stays.",confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/drafts/${t.id}`,{method:"DELETE"}),await this.refresh())}async act(t,e,s){e==="discard"&&!await be(this,{title:"Discard this draft?",body:"It will leave Drafts.",confirm:"Discard draft",tone:"danger"})||(await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:e,...s!==void 0?{body:s}:{}})}),await this.refresh())}startEdit(t){this.editingId=t.id,this.editBody=t.body}swapHook(t,e){const i=(this.editingId===t.id?this.editBody:t.body).split(`
`),n=i.findIndex(o=>o.trim());n>=0?i[n]=e:i.unshift(e),this.editingId=t.id,this.editBody=i.join(`
`)}parseHooks(t){if(!t.hooks)return[];try{const e=JSON.parse(t.hooks);return Array.isArray(e)?e.map(String).map(s=>s.trim()).filter(Boolean):[]}catch{return[]}}async commitEdit(t,e=!1){const s=this.editBody.trim();this.editingId=null,s&&s!==t.body&&await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({body:s})}),e?await this.act({...t,body:s},"approve"):await this.refresh()}async copyBody(t){try{await navigator.clipboard.writeText(t.body),this.copiedId=t.id,setTimeout(()=>{this.copiedId===t.id&&(this.copiedId=null)},2e3)}catch{z(this,"Couldn't copy. Open the post and copy the text by hand.",{tone:"error"})}}openMetrics(t){this.metricsForId=t.id,this.metricsDraft={impressions:t.impressions!=null?String(t.impressions):"",reactions:t.reactions!=null?String(t.reactions):"",comments:t.comments!=null?String(t.comments):"",leads:t.leads!=null?String(t.leads):""}}async saveMetrics(t){const e={};for(const s of rn)e[s]=this.metricsDraft[s].trim()===""?null:Number(this.metricsDraft[s]);this.metricsForId=null,await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async savePosting(){const t={webhookUrl:this.webhookUrl.trim(),webhookSecret:this.webhookSecret.trim()};this.linkedinToken.trim()&&(t.linkedinToken=this.linkedinToken.trim()),await fetch("/api/publisher/posting",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.linkedinToken="",await this.refresh()}async savePostUrl(t){const e=this.postUrlDraft.trim();this.postUrlForId=null,await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({post_url:e})}),await this.refresh()}async syncMetrics(t){this.syncingId=t.id;try{const e=await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"sync"})});if(!e.ok){const s=await e.json().catch(()=>({}));z(this,`Metrics sync failed: ${s.error||e.status}`,{tone:"error"})}}finally{this.syncingId=null,await this.refresh()}}fileToUploadUrl(t){return new Promise(e=>{const s=new FileReader;s.onload=async()=>{try{const i=await fetch("/api/upload",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dataUrl:s.result,name:t.name})});if(!i.ok){e(null);return}const{url:n}=await i.json();e(n)}catch{e(null)}},s.onerror=()=>e(null),s.readAsDataURL(t)})}pickImageStyle(t){const e=ks.find(i=>i.key===t),s=this.editImageDna.trim()===""||ks.some(i=>i.dna===this.editImageDna.trim());this.editImageStyle=t,e&&s&&(this.editImageDna=e.dna),this.dirtyFields.add("image_style")}async uploadRefImage(t){const e=t.target.files?.[0];if(!e)return;const s=await this.fileToUploadUrl(e);s&&(this.editImageRef=s,this.dirtyFields.add("image_ref_url"),this.requestUpdate())}async genImage(t,e=""){this.imaging=[...new Set([...this.imaging,t.id])];const s={...this.imageErrors};delete s[t.id],this.imageErrors=s;for(const n of[...this.toldImageErrors])n.startsWith(`${t.id}:`)&&this.toldImageErrors.delete(n);let i=null;try{i=await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"gen-image",direction:e,style:this.imageStyleOf(t)})})}catch{}if(!i||!i.ok&&i.status!==409){this.imaging=this.imaging.filter(o=>o!==t.id);const n=i?(await i.json().catch(()=>null))?.error:null;this.imageErrors={...this.imageErrors,[t.id]:n||"Couldn't reach Mana to start the image."},z(this,"Couldn't start the image. Try again.",{tone:"error"});return}setTimeout(()=>void this.refresh(),2500)}async setDraftImage(t,e){await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({image_url:e})}),await this.refresh()}async openLibrary(t){await _t(()=>import("./notes-media-DWQZLlRj.js"),__vite__mapDeps([2,3,4,5])),this.libraryFor=t}renderStylePicker(t,e,s,i={}){const n=this.stylePickerFor===t,o=a=>a==="auto"?"Mana picks":ks.find(l=>l.key===a)?.label??a.replace(/-/g," ");return r`
      <div class="relative shrink-0">
        <button type="button" class="flex items-center gap-1.5 h-[30px] pl-1.5 pr-2 rounded-lg border border-line hover:border-ink text-left disabled:opacity-40" ?disabled=${!!i.disabled}
          aria-haspopup="listbox" aria-expanded=${n} title="Image style"
          @click=${()=>{this.stylePickerFor=n?null:t}}>
          ${Cr(e,"w-[27px] h-[18px]")}
          <span class="truncate text-[12px] text-ink">${o(e)}</span>
          <sc-icon name="lucide-chevron-down" class="w-3.5 h-3.5 text-muted shrink-0"></sc-icon>
        </button>
        ${n?r`
          <div class="fixed inset-0 z-40" @click=${()=>{this.stylePickerFor=null}}></div>
          <ul role="listbox" class="absolute z-50 ${i.up?"bottom-full mb-1 left-0":"top-full mt-1 right-0"} w-60 p-1 rounded-xl border border-line bg-popover shadow-lg">
            ${ks.map(a=>r`<li><button type="button" role="option" aria-selected=${a.key===e}
              class="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left ${a.key===e?"bg-accent-soft":"hover:bg-hover"}"
              @click=${()=>{s(a.key),this.stylePickerFor=null}}>
              ${Cr(a.key)}<span class="text-[13px] text-ink">${o(a.key)}</span></button></li>`)}
          </ul>`:c}
      </div>`}renderImageConfig(){return r`
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-3">
          <span class="flex items-center gap-1 text-xs text-muted">Image style
            <span class="inline-flex text-muted/70 hover:text-ink cursor-help" tabindex="0"
              title="The default for this topic's images. Each post can pick another style next to Make image.">${Tt("info","w-3.5 h-3.5")}</span></span>
          ${this.renderStylePicker(-1,this.editImageStyle,t=>this.pickImageStyle(t))}
        </div>
        <label class="block text-xs text-muted">Image brand notes: palette, motifs, do's and don'ts
          <textarea class="mt-1 w-full h-20 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
            .value=${this.editImageDna}
            @input=${t=>{this.dirtyFields.add("image_dna"),this.editImageDna=t.target.value}}></textarea></label>
        <div class="flex items-center gap-3">
          ${this.editImageRef?r`<img src=${this.editImageRef} alt="style reference" class="w-14 h-14 object-cover rounded-lg border border-line" />
                <button type="button" class="text-[11px] text-muted hover:text-red-600" @click=${()=>{this.editImageRef=null,this.dirtyFields.add("image_ref_url")}}>remove reference</button>`:r`<label class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2 cursor-pointer">
                + add a reference image (generation matches its style)
                <input type="file" accept="image/*" class="hidden" @change=${t=>void this.uploadRefImage(t)} /></label>`}
        </div>
      </div>`}renderResearch(t){let e=null;try{e=t.research?JSON.parse(t.research):null}catch{}if(!e||!e.queries?.length&&!e.items?.length)return c;const s=this.researchOpenId===t.id;return r`
      <div class="px-4 pt-1">
        <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.researchOpenId=s?null:t.id}}
        >${s?"▾":"▸"} research trail (${e.items?.length??0} sources)</button>
        ${s?r`<div class="mt-1.5 mb-1 rounded-lg border border-line/60 bg-bg px-3 py-2 space-y-1.5">
              ${e.queries?.length?r`<p class="text-[11px] text-muted"><span class="font-semibold text-[10px]">searched</span> ${e.queries.join(" · ")}</p>`:c}
              ${(e.items??[]).map(i=>r`
                <p class="text-[11px] leading-snug">
                  ${i.url?r`<a class="text-ink underline decoration-line underline-offset-2 hover:decoration-ink" href=${i.url} target="_blank" rel="noopener">${i.title||i.url}</a>`:r`<span class="text-ink">${i.title||"(untitled)"}</span>`}
                  ${i.note?r`<span class="text-muted"> — ${i.note}</span>`:c}
                </p>`)}
            </div>`:c}
      </div>
    `}renderHookAlts(t){if(t.status!=="draft")return c;const e=this.parseHooks(t);return e.length?r`
      <div class="px-4 pt-1 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-muted/70 font-semibold">try hook</span>
        ${e.map(s=>r`
          <button type="button" title=${s}
            class="max-w-[16rem] truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
            @click=${()=>this.swapHook(t,s)}
          >${s}</button>`)}
      </div>`:c}imageStyleOf(t){const e=this.imageStyleFor[t.id];if(e)return e;const s=this.verticals.find(i=>i.id===t.vertical_id)?.image_style??"";return ks.some(i=>i.key===s)?s:"photo"}renderDraftImage(t){if(It(t)||t.status==="posted")return c;const e=this.imaging.includes(t.id),s="shrink-0 px-2.5 py-1.5 text-[12px] rounded-lg border border-line text-ink hover:border-ink disabled:opacity-40",i=this.imageStyleOf(t);return r`
      <section class="px-1 space-y-1.5">
        <div class="flex items-center gap-1.5">
          <span class="w-14 shrink-0 text-[12px] font-semibold text-muted">Image</span>
          ${this.renderStylePicker(t.id,i,n=>{this.imageStyleFor={...this.imageStyleFor,[t.id]:n}},{up:!0,disabled:e})}
          <button type="button" class=${s} ?disabled=${e} @click=${()=>void this.genImage(t)}>${t.image_url?"New image":"Make image"}</button>
          <button type="button" class=${s} @click=${()=>void this.openLibrary(t.id)}>Library</button>
          ${t.image_url?r`<button type="button" class="shrink-0 px-1 text-[12px] text-muted hover:text-red-600" @click=${()=>void this.setDraftImage(t,null)}>Remove</button>`:c}
        </div>
        ${e?r`<p class="flex items-center gap-1.5 px-1 text-[11px] text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Making the image, about 40 seconds</p>`:this.imageErrors[t.id]?r`<p role="alert" class="px-1 text-[11px] text-red-600">The image didn't come: ${this.imageErrors[t.id]}</p>`:c}
      </section>`}renderDraftCard(t){const e=this.editingId===t.id,s=e?this.editBody:t.body,i=s.length,n=s.split(/\s+/).filter(Boolean).length;return r`
      <div class="rounded-lg bg-bg">
        <div class="flex items-center gap-2 px-4 pt-3">
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${It(t)?$r:kr[t.pillar]}">${It(t)?"🎬 Script":Zs[t.pillar]}</span>
          ${t.status!=="draft"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${t.status==="posted"?"bg-accent/15 text-accent":"bg-line text-muted"}">${t.status}</span>`:c}
          <span class="ml-auto text-[10px] ${!It(t)&&i>1300?"text-amber-600":"text-muted/60"}">${It(t)?`${n} words`:`${i} chars`}</span>
        </div>
        ${t.source_note?r`<p class="px-4 pt-1 text-[11px] text-muted">why now: ${t.source_note}
              ${t.source_url?r` · <a class="underline hover:text-ink" href=${t.source_url} target="_blank" rel="noopener">source</a>`:c}</p>`:c}
        ${this.renderResearch(t)}
        ${e?r`<textarea
              class="mx-4 my-2 w-[calc(100%-2rem)] h-56 px-3 py-2 text-sm bg-bg border border-line rounded-lg resize-y focus:outline-none focus:border-ink leading-relaxed"
              .value=${this.editBody}
              @input=${o=>{this.editBody=o.target.value}}
              @keydown=${o=>{o.key==="Escape"&&(this.editingId=null)}}
            ></textarea>`:r`<pre class="px-4 py-2 text-sm text-ink whitespace-pre-wrap font-sans leading-relaxed cursor-text" @click=${()=>t.status==="draft"&&this.startEdit(t)}>${t.body}</pre>`}
        ${this.renderHookAlts(t)}
        ${this.renderDraftImage(t)}
        <div class="flex items-center gap-2 px-4 pb-3">
          ${t.status==="draft"?r`
              <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium"
                @click=${()=>e?void this.commitEdit(t,!0):void this.act(t,"approve")}
              >${!It(t)&&this.webhookConfigured?"Approve & post":"Approve"}</button>
              ${e?r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" @click=${()=>void this.commitEdit(t)}>Save edit</button>`:r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(t)}>Edit</button>`}
              <button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.act(t,"discard")}>discard</button>`:t.status==="approved"?r`
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover"
                  @click=${()=>void this.copyBody(t)}>${this.copiedId===t.id?"Copied ✓":It(t)?"Copy script":"Copy post"}</button>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10"
                  @click=${()=>void this.act(t,"mark-posted")}>${It(t)?"Video is up":"I posted it"}</button>
                <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>void this.act(t,"reopen")}>back to drafts</button>`:r`<span class="text-[11px] text-muted">${t.posted_at?new Date(t.posted_at*1e3).toLocaleDateString():""}</span>
                ${It(t)?c:this.renderMetrics(t)}
                <span class="ml-auto inline-flex items-center gap-2">
                  <button type="button" class="text-[11px] text-muted hover:text-ink" title="Mis-tap? Back to approved (doesn't touch LinkedIn)" @click=${()=>void this.act(t,"unpost")}>undo</button>
                  <button type="button" class="text-[11px] text-muted hover:text-red-600" title="Delete from the archive" @click=${()=>void this.removeDraft(t)}>delete</button>
                  <button type="button" class="px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-ink" @click=${()=>void this.copyBody(t)}>${this.copiedId===t.id?"Copied ✓":"Copy"}</button>
                </span>`}
        </div>
      </div>
    `}renderMetrics(t){if(this.metricsForId===t.id)return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
        ${rn.map(i=>r`<label class="inline-flex items-center gap-0.5 text-[10px] text-muted">${i.slice(0,4)}
          <input type="number" min="0" class="w-14 px-1 py-0.5 text-[11px] bg-bg border border-line rounded text-right focus:outline-none focus:border-ink"
            .value=${this.metricsDraft[i]}
            @input=${n=>{this.metricsDraft={...this.metricsDraft,[i]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"?this.saveMetrics(t):n.key==="Escape"&&(this.metricsForId=null)}}
          /></label>`)}
        <button type="button" class="px-1.5 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.saveMetrics(t)}>save</button>
      </span>`;const e=rn.some(i=>t[i]!=null),s=t.metrics_synced_at!=null;return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
      <button type="button" class="inline-flex items-center gap-1.5 text-[10px] text-muted hover:text-ink" title=${s?"Auto-synced from LinkedIn — click to override by hand":"Log this post's numbers from LinkedIn analytics"}
        @click=${()=>this.openMetrics(t)}>
        ${e?r`${t.impressions!=null?r`<span>👁 ${t.impressions}</span>`:c}
            ${t.reactions!=null?r`<span>👍 ${t.reactions}</span>`:c}
            ${t.comments!=null?r`<span>💬 ${t.comments}</span>`:c}
            ${t.leads!=null?r`<span class="text-accent font-medium">→ ${t.leads} lead${t.leads===1?"":"s"}</span>`:c}`:r`<span class="underline decoration-line underline-offset-2">+ log metrics</span>`}
      </button>
      ${s?r`<span class="text-[9px] text-accent/80" title="From LinkedIn's Member Post Analytics API">⟳ synced</span>`:c}
      ${this.renderMetricsSource(t)}
    </span>`}renderMetricsSource(t){return this.postUrlForId===t.id?r`<span class="inline-flex items-center gap-1">
        <input type="url" placeholder="https://linkedin.com/…/posts/…" .value=${this.postUrlDraft}
          class="w-52 px-1.5 py-0.5 text-[10px] bg-bg border border-line rounded focus:outline-none focus:border-ink"
          @input=${e=>{this.postUrlDraft=e.target.value}}
          @keydown=${e=>{e.key==="Enter"?this.savePostUrl(t):e.key==="Escape"&&(this.postUrlForId=null)}} />
        <button type="button" class="px-1 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.savePostUrl(t)}>save</button>
      </span>`:r`
      ${t.post_url?r`<a class="text-[10px] text-muted hover:text-ink underline decoration-line underline-offset-2" href=${t.post_url} target="_blank" rel="noopener">↗ post</a>`:r`<button type="button" class="text-[10px] text-muted/70 hover:text-ink" title="Paste the LinkedIn post URL to enable metric auto-sync"
            @click=${()=>{this.postUrlForId=t.id,this.postUrlDraft=t.post_url??""}}>+ link post</button>`}
      ${this.linkedinConfigured&&(t.post_url||t.post_urn)?r`<button type="button" class="text-[10px] text-accent/90 hover:text-accent ${this.syncingId===t.id?"opacity-50 pointer-events-none":""}"
            title="Pull real impressions/reactions/comments from LinkedIn now"
            @click=${()=>void this.syncMetrics(t)}>${this.syncingId===t.id?"syncing…":"⟳ sync"}</button>`:c}`}renderListRow(t){const e=this.expandedId===t.id,s=(t.body.split(`
`).find(n=>n.trim())||"").slice(0,100),i=this.activeVerticalId===null&&this.wide?this.verticals.find(n=>n.id===t.vertical_id)?.name:void 0;return r`
      <li class="pub-row">
        <button type="button" class="group w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>{t.status==="posted"?this.expandedId=e?null:t.id:this.openEditor(t.id)}}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${It(t)?$r:kr[t.pillar]}">${It(t)?"🎬 Script":Zs[t.pillar]}</span>
          <span class="flex-1 min-w-0 text-sm text-ink font-semibold group-hover:underline underline-offset-2 truncate">${s}</span>
          ${i?r`<span class="text-[10px] text-muted shrink-0 max-w-[8rem] truncate">${i}</span>`:c}
          ${t.status==="posted"&&t.impressions!=null?r`<span class="text-[10px] text-muted shrink-0">👁 ${t.impressions}${t.leads?r` · <span class="text-accent">→${t.leads}</span>`:c}</span>`:c}
          <span class="text-[10px] ${t.status==="posting"||t.scheduled_at&&t.status==="approved"?"text-accent":"text-muted/60"} shrink-0">${t.status==="posting"?"Posting…":t.scheduled_at&&t.status==="approved"?hm(t.scheduled_at):new Date((t.posted_at??t.created_at)*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
        </button>
        ${e?r`<div class="px-2 pb-2">${this.renderDraftCard(t)}</div>`:c}
      </li>
    `}async saveLinkedInApp(){if(!(!this.liClientId.trim()||this.liSaving)){this.liSaving=!0;try{if(!(await fetch("/api/publisher/linkedin/app",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({clientId:this.liClientId.trim(),clientSecret:this.liClientSecret.trim()||void 0})})).ok){z(this,"Couldn't save the app details. Try again.",{tone:"error"});return}this.liClientSecret="",await this.refresh()}finally{this.liSaving=!1}}}async disconnectLinkedIn(){await be(this,{title:"Disconnect LinkedIn?",body:"Scheduled posts won't go out until you connect again.",confirm:"Disconnect",tone:"warning"})&&(await fetch("/api/publisher/linkedin",{method:"DELETE"}),await this.refresh(),z(this,"LinkedIn disconnected"))}renderSettingsPage(){const t=n=>r`<span class="inline-block w-1.5 h-1.5 rounded-full ${n?"bg-accent":"bg-line"}"></span>`,e=this.linkedin,s=e?.expiresAt?Math.ceil((e.expiresAt-Date.now())/864e5):null,i="mt-1 w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto space-y-5 pb-6">
          <section class="mana-card p-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-sm text-ink font-medium">LinkedIn</span>
              <span class="ml-auto inline-flex items-center gap-1.5 text-[12px] text-muted">${t(!!e?.connected)}
                ${e?.connected?`Connected as ${e.name??"you"}${s!==null?` · ${s} day${s===1?"":"s"} left`:""}`:e?.expiresAt?"Connection expired":"Not connected"}</span>
            </div>
            ${e?.connected?r`<div class="flex items-center gap-2">
                  <a class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" href="/api/publisher/linkedin/connect">Reconnect</a>
                  <button type="button" class="text-[12px] text-muted hover:text-red-600" @click=${()=>void this.disconnectLinkedIn()}>Disconnect</button>
                  <span class="ml-auto text-[11px] text-muted">LinkedIn logins last 60 days. Mana reminds you 5 days before.</span>
                </div>`:r`
                <ol class="text-[12px] text-muted leading-relaxed list-decimal pl-4 space-y-1">
                  <li>Open <a class="underline decoration-line underline-offset-2 hover:text-ink" href="https://www.linkedin.com/developers/apps/new" target="_blank" rel="noopener">LinkedIn Developers → Create app</a>. It asks for a LinkedIn Page; your company page works. The app stays private to you.</li>
                  <li>Under Products, add <b>Share on LinkedIn</b> and <b>Sign In with LinkedIn using OpenID Connect</b>. Both are instant.</li>
                  <li>Under Auth, add this redirect URL:
                    <code class="block mt-1 px-2 py-1 rounded bg-hover text-ink text-[11px] break-all select-all">${e?.redirectUrl??""}</code></li>
                  <li>Paste the app's Client ID and Client Secret below, save, then Connect.</li>
                </ol>
                <label class="block text-[11px] text-muted">Client ID
                  <input type="text" class=${i} placeholder=${e?.hasApp?"saved, paste to replace":""} .value=${this.liClientId}
                    @input=${n=>{this.liClientId=n.target.value}} /></label>
                <label class="block text-[11px] text-muted">Client Secret
                  <input type="password" class=${i} placeholder=${e?.hasApp?"saved, paste to replace":""} .value=${this.liClientSecret}
                    @input=${n=>{this.liClientSecret=n.target.value}} /></label>
                <div class="flex items-center justify-end gap-2">
                  <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover ${this.liClientId.trim()?"":"opacity-40 pointer-events-none"}"
                    @click=${()=>void this.saveLinkedInApp()}>${this.liSaving?"Saving…":"Save app"}</button>
                  <a class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium ${e?.hasApp?"":"opacity-40 pointer-events-none"}"
                    href="/api/publisher/linkedin/connect">Connect LinkedIn</a>
                </div>`}
          </section>

          <section class="space-y-2">
            <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2" @click=${()=>{this.showLegacy=!this.showLegacy}}>
              ${this.showLegacy?"Hide":"Show"} older settings (n8n webhook, analytics token)</button>
            ${this.showLegacy?r`
              <div class="mana-card p-4 space-y-2.5">
                <div class="flex items-center gap-2 text-[11px] text-muted">
                  <span class="inline-flex items-center gap-1">${t(this.webhookConfigured)} n8n webhook ${this.webhookConfigured?"set":"not set"}</span>
                  <span class="inline-flex items-center gap-1 ml-auto">${t(this.linkedinConfigured)} ${this.linkedinConfigured?"metrics token set":"no metrics token"}</span>
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
              </div>`:c}
          </section>
        </div>
      </div>`}renderNeedsNumbers(t){const e=this.drafts.filter(s=>s.status==="posted"&&s.impressions==null&&!It(s)&&this.inTopic(s)&&(s.posted_at??0)<=t-172800&&(s.posted_at??0)>=t-1814400).sort((s,i)=>(i.posted_at??0)-(s.posted_at??0));return e.length?r`
      <section class="mana-card px-3 py-2.5">
        <h4 class="text-sm font-semibold text-ink">How did these do?</h4>
        <p class="text-[11px] text-muted">Their numbers pick the next format and the openings the writer learns from.</p>
        <ul class="mt-1">${e.map(s=>r`<li>
          <button type="button" class="w-full flex items-center gap-2 px-1.5 py-1.5 rounded-lg text-left text-[13px] hover:bg-hover"
            @click=${()=>{this.setStage("posted"),this.expandedId=s.id,this.openMetrics(s)}}>
            <span class="flex-1 min-w-0 truncate text-ink">${(s.hook_used||s.body.split(`
`).find(i=>i.trim())||"").trim()}</span>
            <span class="shrink-0 text-[12px] text-accent">Enter numbers</span>
          </button></li>`)}</ul>
      </section>`:c}renderQueue(){if(this.loading)return r`<div class="flex-1"></div>`;if(!this.verticals.length)return r`<div class="flex-1 min-h-0 overflow-y-auto p-3">
        <div class="max-w-3xl mx-auto mana-card px-4 py-6 text-center">
          <p class="text-sm text-ink font-medium">Start with a topic.</p>
          <p class="text-xs text-muted mt-1 max-w-md mx-auto">A topic is one thing you post about, with its own audience, voice, language and weekly target. Nothing posts without your approval.</p>
          <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>this.openWizard()}>Create a topic</button>
        </div>
      </div>`;const t=i=>this.drafts.filter(n=>Js(n)===i&&this.inTopic(n)).sort((n,o)=>i==="scheduled"?(n.scheduled_at??0)-(o.scheduled_at??0):(o.posted_at??o.created_at)-(n.posted_at??n.created_at)).slice(0,i==="posted"?100:void 0);if(this.activeVertical)return this.renderTopicList(t);const e=t(this.stage),s={draft:"No drafts.",scheduled:"Nothing scheduled.",posted:"Nothing published yet."};return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${this.stage==="posted"?this.renderNeedsNumbers(Xs()):c}
        ${this.generating&&this.stage==="draft"?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
              <div class="mt-2 h-1 rounded-full bg-line overflow-hidden">
                <div class="h-full bg-accent transition-all duration-1000" style="width:${Math.min(95,Math.round((Date.now()-(this.genStartedAt??Date.now()))/1e3/120*100))}%"></div>
              </div>
            </div>`:c}
        ${e.length?r`<ul class="mana-card overflow-hidden">${e.map(i=>this.renderListRow(i))}</ul>`:this.generating&&this.stage==="draft"?c:r`<div class="mana-card px-4 py-7 text-center">
                <div class="mx-auto w-9 h-9 grid place-items-center rounded-full bg-hover text-muted">${Tt(this.stage==="posted"?"send":"calendar-clock","w-4 h-4")}</div>
                <p class="mt-2 text-sm font-medium text-ink">${s[this.stage]}</p>
                <p class="mt-1 text-xs text-muted">Choose a topic to review its drafts or write the next post.</p>
                ${this.verticals[0]?r`<button type="button" class="mt-3 px-3 py-1.5 rounded-lg border border-line text-xs font-medium text-ink hover:bg-hover"
                  @click=${()=>this.setVertical(this.verticals[0].id)}>Open ${this.verticals[0].name}</button>`:c}
              </div>`}
       </div>
      </div>
    `}renderTopicList(t){const e=ys.map(s=>({...s,items:t(s.key)})).filter(s=>s.items.length);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-4">
        ${this.generating?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
            </div>`:c}
        ${e.length||this.generating?c:r`<p class="px-1 py-6 text-center text-xs text-muted">No posts in ${this.activeVertical.name} yet. Press New post.</p>`}
        ${e.map(s=>r`
          <section class="space-y-1.5">
            <h4 class="px-1 text-[11px] font-semibold text-muted">${s.label} <span class="tabular-nums font-normal">${s.items.length}</span></h4>
            ${s.key==="posted"?this.renderNeedsNumbers(Xs()):c}
            <ul class="mana-card overflow-hidden">${s.items.map(i=>this.renderListRow(i))}</ul>
          </section>`)}
       </div>
      </div>`}navRow(t,e){return r`
      <button type="button" class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left ${e.active?"bg-accent-soft text-ink font-medium":"text-muted hover:text-ink hover:bg-hover"}"
        @click=${e.onClick}>
        ${Tt(e.icon,"w-4 h-4 shrink-0")}
        <span class="flex-1 min-w-0 truncate">${t}</span>
        ${e.badge?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-soft text-accent font-medium">${e.badge}</span>`:c}
        ${e.count?r`<span class="text-xs text-muted">${e.count}</span>`:c}
      </button>`}toggleGroup(t){const e=new Set(this.collapsedGroups);e.has(t)?e.delete(t):e.add(t),this.collapsedGroups=e;try{localStorage.setItem("cockpit.publisher_nav_collapsed",JSON.stringify([...e]))}catch{}}toggleNav(){this.navHidden=!this.navHidden;try{localStorage.setItem("cockpit.publisher_nav_hidden",this.navHidden?"1":"0")}catch{}}startResize(t){const e=t.currentTarget,s=t.clientX,i=this.navWidth;e.setPointerCapture(t.pointerId);const n=a=>{this.navWidth=Math.min(wr,Math.max(yr,i+a.clientX-s))},o=()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",o),e.removeEventListener("pointercancel",o);try{localStorage.setItem("cockpit.publisher_nav_width",String(this.navWidth))}catch{}};e.addEventListener("pointermove",n),e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),t.preventDefault()}groupHeader(t,e,s){const i=this.collapsedGroups.has(t);return r`
      <div class="flex items-center pl-1 pr-1 pt-3 pb-0.5">
        <button type="button" class="flex-1 flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.7rem] font-semibold text-muted hover:text-ink text-left"
          aria-expanded=${!i} @click=${()=>this.toggleGroup(t)}>
          ${Tt(i?"chevron-right":"chevron-down","w-3 h-3")} ${e}</button>
        ${s??c}
      </div>`}renderTopicRow(t,e){const s=this.drafts.filter(n=>n.vertical_id===t.id&&Js(n)==="draft").length,i=this.activeVerticalId===t.id&&(this.view==="queue"||this.view==="editor"||this.view==="wizard"&&this.wizardEditId===t.id);return r`
      <div class="relative ${this.topicDrag.dropClass(t.id)}"
        draggable="true"
        @mousedown=${()=>this.topicDrag.arm(t.id)}
        @mouseup=${this.topicDrag.disarm}
        @dragstart=${n=>this.topicDrag.onDragStart(n,t.id)}
        @dragend=${this.topicDrag.onDragEnd}
        @dragover=${n=>this.topicDrag.onDragOver(n,t.id,e)}
        @dragleave=${this.topicDrag.onDragLeave}
        @drop=${n=>this.topicDrag.onDrop(n,t.id,e)}>
        <button type="button" aria-current=${i?"page":c}
          class="w-full min-w-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-left ${i?"bg-accent-soft":"hover:bg-hover"} ${this.topicDrag.isDragging(t.id)&&this.topicDrag.active?"opacity-40":""}"
          title=${t.name}
          @click=${()=>this.setVertical(t.id)}>
          <span class="flex-1 min-w-0 truncate text-sm text-ink">${t.name}</span>
          ${s?r`<span class="shrink-0 text-xs text-muted tabular-nums" title="${s} draft${s===1?"":"s"}">${s}</span>`:c}
        </button>
      </div>`}pipelineItems(){const t=this.view==="queue"&&this.activeVerticalId===null;return[...ys.filter(e=>e.key!=="draft").map(e=>({label:e.label,icon:e.icon,active:t&&this.stage===e.key,count:this.stageCount(e.key,!0),onClick:()=>{this.setVertical(null),this.setStage(e.key)}})),{label:"Results",icon:"bar-chart",active:this.view==="results"&&this.activeVerticalId===null,count:0,onClick:()=>{this.setVertical(null),this.view="results",this.navOpen=!1,this.loadInsights(!0)}}]}renderNavRail(){const t="relative w-9 h-9 grid place-items-center rounded-lg";return r`
      <aside class="shrink-0 w-12 h-full flex flex-col items-center gap-1 pt-3 pb-2 bg-surface border-r border-line/60 overflow-y-auto">
        <button type="button" class="${t} text-muted hover:text-ink hover:bg-hover" aria-label="Show sidebar" title="Show sidebar"
          @click=${()=>this.toggleNav()}>${Tt("layout-sidebar")}</button>
        ${this.pipelineItems().map(e=>r`<button type="button" class="${t} ${e.active?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
          aria-label=${e.label} title=${e.count?`${e.label} (${e.count})`:e.label} @click=${e.onClick}>${Tt(e.icon)}</button>`)}
        <div class="w-6 border-t border-line/60 my-1"></div>
        ${this.verticals.map(e=>{const s=this.activeVerticalId===e.id&&this.view!=="settings",i=this.drafts.filter(n=>n.vertical_id===e.id&&Js(n)==="draft").length;return r`<button type="button" class="${t} text-[13px] font-semibold ${s?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
            aria-label=${e.name} title=${i?`${e.name} (${i} draft${i===1?"":"s"})`:e.name} @click=${()=>this.setVertical(e.id)}>
            ${e.name.trim().charAt(0).toUpperCase()}
            ${i?r`<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent"></span>`:c}</button>`})}
      </aside>`}renderNav(){const t=s=>!this.collapsedGroups.has(s),e=r`<button type="button" aria-label="New topic" title="New topic"
      class="w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openWizard()}>${Tt("plus","w-3.5 h-3.5")}</button>`;return r`
      ${this.wide?r`<div class="flex items-center justify-between gap-2 pl-4 pr-2 pt-3 pb-1 shrink-0">
        <h2 class="text-sm font-semibold text-ink">Publisher</h2>
        <button type="button" class="w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label="Hide sidebar" title="Hide sidebar" @click=${()=>this.toggleNav()}>${Tt("layout-sidebar")}</button>
      </div>`:c}
      <nav class="flex-1 min-h-0 overflow-y-auto px-2 ${this.wide?"":"pt-3"} pb-2" aria-label="Publisher">
        ${this.pipelineItems().map(s=>this.navRow(s.label,s))}
        ${this.groupHeader("topics","Topics",e)}
        ${t("topics")?r`
          ${this.verticals.map((s,i)=>this.renderTopicRow(s,i))}
          ${this.verticals.length?c:r`<button type="button" class="w-full px-3 py-1.5 rounded-lg text-sm text-left text-muted hover:text-ink hover:bg-hover"
            @click=${()=>this.openWizard()}>Create your first topic</button>`}`:c}
      </nav>
      <div class="px-2 pb-2 shrink-0 border-t border-line/60 pt-2">
        ${this.navRow(this.linkedin?.connected?"LinkedIn connected":"Connect LinkedIn",{icon:"settings",active:this.view==="settings",badge:this.linkedin?.connected||!this.linkedin?void 0:"off",onClick:()=>{this.view="settings",this.navOpen=!1}})}
      </div>`}renderResults(){const t=this.verticals;if(!t.length)return r`<p class="p-6 text-center text-xs text-muted">No topics yet.</p>`;if(!this.insights)return r`<div class="flex-1 min-h-0 p-3"><p class="p-6 text-center text-xs text-muted">Loading results…</p></div>`;const e=i=>i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)}k`:String(Math.round(i)),s=(i,n,o)=>r`
      <div class="rounded-lg border border-line/70 px-3 py-2 min-w-0">
        <div class="text-[11px] text-muted truncate">${i}</div>
        <div class="text-lg font-semibold text-ink leading-tight tabular-nums">${n}</div>
        ${o?r`<div class="text-[10px] text-muted truncate">${o}</div>`:c}
      </div>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${t.map(i=>{const n=this.insights.find(u=>u.topicId===i.id);if(!n)return c;const o=Math.round(i.posts_per_week*30/7),a=n.postedThisWeek,l=n.byFormat.filter(u=>u.avgImpressions!=null),h=Math.max(1,...l.map(u=>u.avgImpressions));return r`
            <section class="mana-card p-3 space-y-3">
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
                ${s("Avg impressions",n.avgImpressions==null?"–":e(n.avgImpressions),n.measured?`${n.measured} of ${n.posts} measured`:"none measured yet")}
                ${s("Comments",String(n.comments))}
                ${s("Leads",String(n.leads),"logged by hand")}
              </div>
              ${l.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1.5">Avg impressions by format</p>
                  <div class="space-y-1.5">${l.map(u=>r`
                    <div class="flex items-center gap-2 text-[12px]" title="${Zs[u.format]}: ${Math.round(u.avgImpressions)} average impressions over ${u.measured} measured post${u.measured===1?"":"s"}">
                      <span class="w-20 shrink-0 text-ink">${Zs[u.format]}</span>
                      <span class="flex-1 h-2"><span class="block h-full rounded bg-accent" style="width:${Math.max(2,u.avgImpressions/h*100)}%"></span></span>
                      <span class="w-20 shrink-0 text-right text-muted tabular-nums">${e(u.avgImpressions)} · ${u.measured}</span>
                    </div>`)}</div>
                </div>`:c}
              ${n.top.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1">Best posts</p>
                  <ul class="space-y-1">${n.top.map(u=>r`
                    <li class="flex items-center gap-2 text-[12px]">
                      <span class="flex-1 min-w-0 truncate text-ink">${u.hook}</span>
                      <span class="shrink-0 text-muted tabular-nums">${u.impressions!=null?`${e(u.impressions)} views`:""}${u.comments?` · ${u.comments} comments`:""}${u.leads?` · ${u.leads} lead${u.leads===1?"":"s"}`:""}</span>
                    </li>`)}</ul>
                </div>`:c}
              <p class="text-[11px] text-muted">${n.writeNext}</p>
              ${n.unmeasured?r`<p class="text-[11px] text-muted">${n.unmeasured} post${n.unmeasured===1?" has":"s have"} no numbers yet.
                <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>this.setStage("posted")}>Log them in Published</button></p>`:c}
              ${n.posts?c:r`<p class="text-[11px] text-muted">Nothing published in the last 30 days.</p>`}
            </section>`})}
       </div>
      </div>`}async loadInsights(t=!1){const e=this.drafts.filter(s=>s.status==="posted").map(s=>`${s.id}:${s.pillar}:${s.posted_at}:${s.impressions}:${s.reactions}:${s.comments}:${s.leads}`).join(",");if(!(!t&&e===this.insightsFor&&this.insights)){this.insightsFor=e;try{const s=await fetch("/api/publisher/insights");s.ok&&(this.insights=(await s.json()).insights)}catch{}}}renderEditor(){const t=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null;if(!this.composing&&!t&&this.editorId!==this.createdId)return r`<p class="p-6 text-center text-xs text-muted">That post is gone.</p>`;const e=this.verticals.find(n=>n.id===(t?.vertical_id??this.activeVerticalId))??this.verticals[0],s=this.drafts.filter(n=>n.id!==t?.id),i=e?Pl(e,s,Xs(),this.takenTimes(t?.id)):null;return r`<publisher-editor class="flex flex-col flex-1 min-h-0"
      .draft=${t} .topics=${this.verticals} .defaultTopicId=${this.activeVerticalId} .defaultScheduleAt=${i}
      .backLabel=${this.activeVertical?.name??ys.find(n=>n.key===this.stage).label}
      .linkedinConnected=${!!this.linkedin?.connected} .webhookConfigured=${this.webhookConfigured} .twoCol=${this.twoCol} .authorName=${this.linkedin?.name??null}
      .renderImage=${n=>this.renderDraftImage(n)}
      .improving=${t!=null&&this.improving.includes(t.id)}
      .aiWriting=${this.composing&&(this.aiStartedAt!==null||this.generating)} .aiError=${this.composing?this.aiError:""}
      @ai-draft=${n=>void this.draftWithAi(n.detail)}
      @changed=${()=>void this.refresh()}
      @improved=${n=>{const o=this.drafts.find(a=>a.id===n.detail.id);o&&(!o.image_url||n.detail.image)&&!this.imaging.includes(o.id)&&this.genImage(o,n.detail.image)}}
      @opened=${n=>{this.composing=!1,this.editorId=n.detail.id,this.createdId=n.detail.id}}
      @moved=${n=>this.follow(n.detail.stage)}
      @close=${()=>void this.closeEditor()}
      @force-close=${()=>this.leaveEditor()}></publisher-editor>`}renderMainHeader(){if(this.view==="editor")return c;const t=this.activeVertical,e=t&&this.view==="queue",s=this.view==="settings"?"LinkedIn connection":this.view==="wizard"?this.wizardEditId!=null?"":"New topic":e?t.name:this.view==="results"?"Results":ys.find(o=>o.key===this.stage).label,i=this.view==="wizard"?"max-w-lg":"max-w-3xl",n=this.view==="wizard"&&this.wizardEditId!=null;return r`
      <header class="px-3 pt-3 shrink-0"><div class="${i} mx-auto w-full flex items-center gap-2 mana-card px-4 py-3">
        ${n?r`<button type="button" class="flex items-center h-8 pl-1 pr-2 -ml-1 rounded-lg text-sm font-medium text-accent hover:bg-hover"
                @click=${()=>void this.closeEditForm()}>${Tt("chevron-left")} ${this.verticals.find(o=>o.id===this.wizardEditId)?.name??"Back"}</button>`:this.wide?c:r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
                @click=${()=>{this.navOpen=!0}}>${Tt("chevron-left")} Publisher</button>`}
        <div class="flex-1 min-w-0 ${this.wide?"min-h-8 flex flex-col justify-center":""}">
          <h3 class="text-sm font-semibold text-ink truncate" title=${s}>${s}</h3>
          ${e?r`<span class="text-[11px] text-muted tabular-nums">${this.postedThisWeek(t)} of ${t.posts_per_week} published this week</span>`:c}
        </div>
        ${e?r`<button type="button" class="shrink-0 flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          title="Write a new post for ${t.name}" @click=${()=>this.openCompose()}>${Tt("square-pen","w-3.5 h-3.5")} New post</button>`:c}
        ${e?r`<button type="button" class="shrink-0 w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label=${`Settings for ${t.name}`} title="Topic settings"
          @click=${()=>this.openWizard(t)}>${Tt("settings")}</button>`:c}
      </div></header>`}render(){const t=this.wide?!this.navHidden:this.navOpen,e=this.wide||!this.navOpen;return r`
      <div class="relative h-full min-h-0 bg-bg p-3 overflow-hidden">
      <div class="publisher-tool-surface flex h-full min-h-0 w-full max-w-[80rem] ${this.chatOpen?"mr-auto":"mx-auto"} overflow-hidden rounded-lg border border-card-border shadow-[var(--card-shadow)]">
        ${this.wide&&this.navHidden?this.renderNavRail():c}
        <aside class="${t?"flex":"hidden"} relative flex-col h-full min-h-0 overflow-hidden bg-surface ${this.wide?"shrink-0 border-r border-line/60":"flex-1 min-w-0"}"
          style=${this.wide?`width:${this.navWidth}px`:""}>
          ${this.renderNav()}
          ${this.wide?r`<div class="absolute top-0 bottom-0 -right-1 w-2 z-10 cursor-col-resize hover:bg-accent/30 transition-colors" role="separator" aria-orientation="vertical"
            title="Drag to resize, double-click to reset"
            @pointerdown=${s=>this.startResize(s)}
            @dblclick=${()=>{this.navWidth=Qs;try{localStorage.setItem("cockpit.publisher_nav_width",String(Qs))}catch{}}}></div>`:c}
        </aside>
        <section class="${e?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderMainHeader()}
          ${this.view==="wizard"?this.wizardEditId!=null?this.renderEditForm():this.renderWizard():this.view==="settings"?this.renderSettingsPage():this.view==="results"?this.renderResults():this.view==="editor"?this.renderEditor():this.renderQueue()}
        </section>
        ${this.libraryFor!==null?r`
          <notes-media-library .tab=${"all"}
            @close=${()=>{this.libraryFor=null}}
            @insert=${s=>{const i=this.libraryFor;this.libraryFor=null;const n=this.drafts.find(o=>o.id===i);n&&this.setDraftImage(n,s.detail.url)}}></notes-media-library>`:c}
        ${this.renderToast()}
        ${this.renderDialog()}
      </div>
      </div>
    `}};$([b({type:Boolean})],k.prototype,"chatOpen",2);$([d()],k.prototype,"verticals",2);$([d()],k.prototype,"drafts",2);$([d()],k.prototype,"webhookConfigured",2);$([d()],k.prototype,"linkedinConfigured",2);$([d()],k.prototype,"loading",2);$([d()],k.prototype,"activeVerticalId",2);$([d()],k.prototype,"stage",2);$([d()],k.prototype,"view",2);$([d()],k.prototype,"wide",2);$([d()],k.prototype,"navOpen",2);$([d()],k.prototype,"navWidth",2);$([d()],k.prototype,"navHidden",2);$([d()],k.prototype,"collapsedGroups",2);$([d()],k.prototype,"wizardEditId",2);$([d()],k.prototype,"wizardStep",2);$([d()],k.prototype,"wizard",2);$([d()],k.prototype,"wizardLang",2);$([d()],k.prototype,"wizardFormality",2);$([d()],k.prototype,"langOther",2);$([d()],k.prototype,"editPostsPerWeek",2);$([d()],k.prototype,"editImageStyle",2);$([d()],k.prototype,"editImageDna",2);$([d()],k.prototype,"editImageRef",2);$([d()],k.prototype,"imaging",2);$([d()],k.prototype,"improving",2);$([d()],k.prototype,"imageErrors",2);$([d()],k.prototype,"stylePickerFor",2);$([d()],k.prototype,"imageStyleFor",2);$([d()],k.prototype,"libraryFor",2);$([d()],k.prototype,"saving",2);$([d()],k.prototype,"editingId",2);$([d()],k.prototype,"editBody",2);$([d()],k.prototype,"composing",2);$([d()],k.prototype,"editorId",2);$([d()],k.prototype,"twoCol",2);$([d()],k.prototype,"aiTopicId",2);$([d()],k.prototype,"aiStartedAt",2);$([d()],k.prototype,"aiError",2);$([d()],k.prototype,"generating",2);$([d()],k.prototype,"genStartedAt",2);$([d()],k.prototype,"webhookUrl",2);$([d()],k.prototype,"webhookSecret",2);$([d()],k.prototype,"linkedinToken",2);$([d()],k.prototype,"linkedin",2);$([d()],k.prototype,"liClientId",2);$([d()],k.prototype,"liClientSecret",2);$([d()],k.prototype,"liSaving",2);$([d()],k.prototype,"showLegacy",2);$([d()],k.prototype,"postUrlForId",2);$([d()],k.prototype,"postUrlDraft",2);$([d()],k.prototype,"syncingId",2);$([d()],k.prototype,"copiedId",2);$([d()],k.prototype,"researchOpenId",2);$([d()],k.prototype,"expandedId",2);$([d()],k.prototype,"toastMsg",2);$([d()],k.prototype,"ask",2);$([d()],k.prototype,"insights",2);$([d()],k.prototype,"metricsForId",2);$([d()],k.prototype,"metricsDraft",2);k=$([w("publisher-section")],k);var um=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,al=(t,e,s,i)=>{for(var n=i>1?void 0:i?pm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&um(e,s,n),n};const ll=["M 100 600 q 0 -500, 500 -500 t 500 500 t -500 500 T 100 600 z","M 100 600 q -50 -400, 500 -500 t 450 550 t -500 500 T 100 600 z","M 100 600 q 0 -400, 500 -500 t 400 500 t -500 500 T 100 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 100 600 q 100 -600, 500 -500 t 400 500 t -500 500 T 100 600 z"],lt=t=>Sl(`path("${ll[t-1]}")`),Er=200;let Ci=class extends Pt{constructor(){super(...arguments),this.label="teleporting to the office…"}render(){const t=[0,2,1,3],e=[1,2,3,4,1,2,3,4].map((s,i)=>Ce`<g class="blob b${s}${i>3?" alt":""}"><path d=${ll[t[s-1]]}></path></g>`);return r`<div class="orb" aria-hidden="true"><svg viewBox="0 0 1200 1200">${e}</svg></div><span class="label">${this.label}</span>`}};Ci.styles=Ot`
    :host { display: grid; place-items: center; align-content: center; gap: .25rem; font-size: .875rem; letter-spacing: .04em;
      --glow: #101030; --blob-1: #984ddf; --blob-2: #4344ad; --blob-3: #74d9e1; --blob-4: #050515; }
    .orb { position: relative; width: ${Er}px; height: ${Er}px; display: grid; place-items: center; }
    .orb::before { content: ""; position: absolute; width: 70%; height: 70%; border-radius: 50%; background: var(--glow); filter: blur(28px); }
    svg { position: relative; width: 100%; height: 100%; overflow: visible; }
    .blob { animation: rotate 25s infinite alternate ease-in-out; transform-origin: 50% 50%; opacity: .7; }
    .blob path { animation: blob-1 5s infinite alternate cubic-bezier(.45, .2, .55, .8); transform-origin: 50% 50%; transform: scale(.8); }
    .blob.alt { animation-direction: alternate-reverse; opacity: .3; }
    .b1 path { fill: var(--blob-1); filter: blur(5px); }
    .b2 { animation-duration: 18s; animation-direction: alternate-reverse; }
    .b2 path { fill: var(--blob-2); animation-name: blob-2; animation-duration: 7s; filter: blur(4px); transform: scale(.78); }
    .b2.alt { animation-direction: alternate; }
    .b3 { animation-duration: 23s; }
    .b3 path { fill: var(--blob-3); animation-name: blob-3; animation-duration: 6s; filter: blur(2.5px); transform: scale(.76); }
    .b4 { animation-duration: 31s; animation-direction: alternate-reverse; opacity: .9; }
    .b4 path { fill: var(--blob-4); animation-name: blob-4; animation-duration: 10s; filter: blur(48px); transform: scale(.5); }
    .b4.alt { animation-direction: alternate; opacity: .8; }
    .label { margin-top: -.5rem; animation: fade 2.4s ease-in-out infinite; }
    @keyframes blob-1 { 0% { d: ${lt(1)}; } 30% { d: ${lt(2)}; } 70% { d: ${lt(3)}; } 100% { d: ${lt(4)}; } }
    @keyframes blob-2 { 0% { d: ${lt(3)}; } 40% { d: ${lt(5)}; } 80% { d: ${lt(2)}; } 100% { d: ${lt(6)}; } }
    @keyframes blob-3 { 0% { d: ${lt(2)}; } 35% { d: ${lt(4)}; } 75% { d: ${lt(6)}; } 100% { d: ${lt(3)}; } }
    @keyframes blob-4 { 0% { d: ${lt(4)}; } 30% { d: ${lt(6)}; } 70% { d: ${lt(2)}; } 100% { d: ${lt(5)}; } }
    @keyframes rotate { to { transform: rotate(360deg); } }
    @keyframes fade { 50% { opacity: .5; } }
    @media (prefers-reduced-motion: reduce) { .blob, .blob path, .label { animation: none; } }
  `;al([b()],Ci.prototype,"label",2);Ci=al([w("office-orb")],Ci);var mm=Object.defineProperty,fm=Object.getOwnPropertyDescriptor,fo=(t,e,s,i)=>{for(var n=i>1?void 0:i?fm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&mm(e,s,n),n};let Ei=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await _t(()=>import("./newsroom-section-R8h5iT9O.js").then(t=>t.n),__vite__mapDeps([9,3,4,10,5])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<newsroom-section class="flex flex-col flex-1 min-h-0"></newsroom-section>`:r`<div class="flex-1 grid place-items-center text-sm text-muted" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>couldn't open the office. retry</button>`:r`<office-orb></office-orb>`}</div>${c}`}};fo([d()],Ei.prototype,"ready",2);fo([d()],Ei.prototype,"failed",2);Ei=fo([w("newsroom-loader")],Ei);const cl="slmai.cockpit.ideasCache";let ts=null;function gm(){if(ts)return ts;try{const t=localStorage.getItem(cl);t&&(ts=JSON.parse(t))}catch{}return ts}function dl(t){if(ts!==t){ts=t;try{localStorage.setItem(cl,JSON.stringify(t))}catch{}}}var bm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,ht=(t,e,s,i)=>{for(var n=i>1?void 0:i?vm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&bm(e,s,n),n};const Dr="slmai.cockpit.ideasCollapsed",an="slmai.cockpit.ideasSection.title",ln="Ideas",xm='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let ot=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=ln,this.ideas=[],this.highlightIds=new Set,this.flash=new gi(this,"idea"),this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.dragOverCommit=!1,this.draggingId=null,this.movingIds=new Set,this.onIdeasChanged=()=>{this.load()},this.onOpsEvent=t=>{const e=t.detail;!e||e.action!=="refresh"||(this.flash.take(e),e.added?.kind==="idea"&&(this.highlightIds=new Set(this.highlightIds).add(e.added.id)),this.load())},this.lastEmittedCount=-1,this.onCommitDragOver=t=>{t.dataTransfer?.types.includes("text/x-commit-id")&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragOverCommit=!0)},this.onCommitDragLeave=()=>{this.dragOverCommit=!1},this.onCommitDrop=async t=>{const e=t.dataTransfer?.getData("text/x-commit-id");if(!e)return;t.preventDefault(),this.dragOverCommit=!1;const s=(t.dataTransfer?.getData("text/plain")||"").trim();s&&await qa(Number(e),s)}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Dr)==="1",this.titleValue=localStorage.getItem(an)??ln,fetch("/api/settings").then(t=>t.json()).then(t=>{const e=t["ui.section.ideas.title"];e&&(this.titleValue=e,localStorage.setItem(an,e))}).catch(()=>{}),this.ideas=gm()??[],this.load(),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("ops-event",this.onOpsEvent)}clearHighlight(t){if(!this.highlightIds.has(t))return;const e=new Set(this.highlightIds);e.delete(t),this.highlightIds=e}updated(){dl(this.ideas);const t=this.ideas.filter(s=>!s.hidden).length;if(t!==this.lastEmittedCount&&(this.lastEmittedCount=t,document.dispatchEvent(new CustomEvent("mana-ideas-count",{detail:{count:t}}))),this.editingId==null)return;const e=this.querySelector("textarea.idea-edit");e&&this.autoGrow(e)}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}async load(){try{const e=await(await fetch("/api/ideas")).json();this.ideas=e.ideas}catch{}}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||ln;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(an,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(Dr,this.collapsed?"1":"0")}async toggleHidden(t,e){this.ideas=this.ideas.map(s=>s.id===t?{...s,hidden:e}:s);try{await ie(`/api/ideas/${t}`,{hidden:e})}catch{this.ideas=this.ideas.map(s=>s.id===t?{...s,hidden:!e}:s)}}async moveToWeek(t){if(!this.movingIds.has(t.id)){this.movingIds.add(t.id);try{await ro(t.id,t.text)}finally{this.movingIds.delete(t.id)}}}async deleteIdea(t){const e=this.ideas;this.ideas=this.ideas.filter(s=>s.id!==t);try{await fe(`/api/ideas/${t}`)}catch{this.ideas=e}}beginAdd(t){t.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(t=!1){if(!this.adding)return;const e=this.newText.trim();if(this.newText="",!e){this.adding=!1;return}t||(this.adding=!1);try{const s=await B("/api/ideas",{text:e});this.ideas=[...this.ideas,{id:s.id,text:e,hidden:!1}]}catch{}}onAddKey(t){t.key==="Enter"?(t.preventDefault(),this.commitAdd(!0)):t.key==="Escape"&&(t.preventDefault(),this.adding=!1,this.newText="")}startEdit(t){this.adding=!1,this.editingId=t.id,this.editText=t.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const t=this.editingId;if(t===null)return;const e=this.editText.trim();if(this.cancelEdit(),!e)return;const s=this.ideas;this.ideas=this.ideas.map(i=>i.id===t?{...i,text:e}:i);try{await ie(`/api/ideas/${t}`,{text:e})}catch{this.ideas=s}}onEditKey(t){t.key==="Enter"?(t.preventDefault(),this.commitEdit()):t.key==="Escape"&&(t.preventDefault(),this.cancelEdit())}onDragStart(t,e){if(this.draggingId=e,t.dataTransfer){t.dataTransfer.setData("text/x-idea-id",String(e));const s=this.ideas.find(i=>i.id===e);s&&t.dataTransfer.setData("text/plain",s.text),t.dataTransfer.effectAllowed="move"}}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(t,e){if(!t.dataTransfer?.types.includes("text/x-idea-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const s=t.currentTarget.getBoundingClientRect();this.dragOverId=e,this.dragOverPos=t.clientY<s.top+s.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(t,e){const s=t.dataTransfer?.getData("text/x-idea-id"),i=s?Number(s):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(i)||i===e)return;t.preventDefault();const a=(this.showHidden?this.ideas:this.ideas.filter(v=>!v.hidden)).findIndex(v=>v.id===e);if(a<0)return;const l=n==="after"?a+1:a,h=this.ideas.slice(),u=h.findIndex(v=>v.id===i),p=h.findIndex(v=>v.id===e);if(u<0||p<0)return;const[m]=h.splice(u,1);if(!m)return;const g=n==="after"?p+(u<p?0:1):p-(u<p?1:0);h.splice(Math.max(0,g),0,m),this.ideas=h;try{await B(`/api/ideas/${i}/reorder`,{index:l})}catch{this.load()}}renderHiddenToggle(t){return t.length===0?c:lo({open:this.showHidden,label:`${t.length} hidden`,controls:"hidden-ideas",onToggle:()=>{this.showHidden=!this.showHidden}})}renderIdeas(t,e){return r`
      <ul id=${e} class="flex flex-col">
        ${t.map(s=>this.editingId===s.id?r`
                <li class="flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 border-t-2 border-b-2 border-transparent">
                  <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                  <span
                    class="shrink-0 inline-flex rounded-full border-line"
                    style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
                  ></span>
                  <textarea
                    class="idea-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none border-b border-line p-0 resize-none overflow-hidden leading-snug"
                    rows="1"
                    autofocus
                    .value=${this.editText}
                    @input=${i=>{this.editText=i.target.value,this.autoGrow(i.target)}}
                    @keydown=${this.onEditKey}
                    @paste=${vi}
                    @blur=${()=>void this.commitEdit()}
                  ></textarea>
                </li>
              `:r`
                <li
                  data-row-key=${`idea:${s.id}`}
                  data-flash=${this.flash.key(s.id)}
                  class="flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover group/idea ${this.flash.cls(s.id)}
                    ${this.dragOverId===s.id&&this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverId===s.id&&this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
                  draggable=${this.draggingId===s.id?"true":"false"}
                  @dragstart=${i=>this.onDragStart(i,s.id)}
                  @dragend=${()=>this.onDragEnd()}
                  @dragover=${i=>this.onDragOver(i,s.id)}
                  @dragleave=${()=>this.onDragLeave()}
                  @drop=${i=>this.onDrop(i,s.id)}
                >
                  <span
                    class="idea-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/idea:opacity-60 hover:!opacity-100 select-none leading-none"
                    title="Drag to reorder"
                    style="font-size:14px;letter-spacing:-1px;"
                    @mousedown=${()=>{this.draggingId=s.id}}
                    @mouseup=${()=>{this.draggingId===s.id&&(this.draggingId=null)}}
                  >⠿</span>
                  <button
                    type="button"
                    class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink"
                    style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
                    title="Move to Weekly"
                    aria-label=${`Move to Weekly: ${s.text}`}
                    @click=${i=>{i.stopPropagation(),this.moveToWeek(s)}}
                  ></button>
                  <div class="flex-1 min-w-0 flex items-center gap-2">
                  <span
                    class="flex-1 min-w-0 text-sm cursor-text ${this.highlightIds.has(s.id)?"font-medium":"text-ink"}"
                    style=${!s.hidden&&this.highlightIds.has(s.id)?"color:var(--nsc-green);":""}
                    @click=${()=>{this.clearHighlight(s.id),this.startEdit(s)}}
                  >${Ga(s.text)}</span>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 focus:opacity-100 hover:text-ink transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title=${s.hidden?"Show item":"Hide item"}
                    aria-label=${`${s.hidden?"Show":"Hide"} item: ${s.text}`}
                    @click=${i=>{i.stopPropagation(),this.toggleHidden(s.id,!s.hidden)}}
                  >${V(Ue(Be[s.hidden?"eye":"eye-off"]))}</button>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title="Delete idea"
                    @click=${i=>{i.stopPropagation(),this.deleteIdea(s.id)}}
                  >
                    ${V(xm)}
                  </button>
                  </div>
                </li>
              `)}
      </ul>
    `}render(){const t=this.ideas.filter(i=>i.hidden),e=this.ideas.filter(i=>!i.hidden),s=this.tabbed||!this.collapsed;return r`
      <section
        class="group/section-header flex flex-col gap-1"
        style=${this.dragOverCommit?"box-shadow: inset 0 0 0 1.5px var(--accent); border-radius:12px;":""}
        @dragover=${this.onCommitDragOver}
        @dragleave=${this.onCommitDragLeave}
        @drop=${this.onCommitDrop}
      >
        ${this.tabbed?c:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${V(this.collapsed?Fs:js)}</span
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
              ${this.ideas.length>0?r`<span
                    class="text-[11px] text-muted px-2 py-0.5 rounded-full leading-none"
                    style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
                    >${this.ideas.length}</span
                  >`:c}
              <span class="flex-1"></span>
            </header>`}

        ${s?r`
              ${this.renderIdeas(e,"active-ideas")}
              ${this.adding?r`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-2 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full border-line" style="width:16px;height:16px;border-width:1.5px;border-style:solid;"></span>
                      <input
                        class="flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New idea..."
                        autofocus
                        .value=${this.newText}
                        @input=${i=>this.newText=i.target.value}
                        @keydown=${this.onAddKey}
                        @paste=${vi}
                        @blur=${()=>void this.commitAdd()}
                      />
                    </div>
                  `:r`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>{this.cancelEdit(),this.adding=!0,this.newText=""}}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New idea...</span>
                    </div>
                  `}
              ${this.renderHiddenToggle(t)}
              ${this.showHidden?this.renderIdeas(t,"hidden-ideas"):c}
            `:c}
      </section>
    `}};ht([b({type:Boolean})],ot.prototype,"tabbed",2);ht([d()],ot.prototype,"collapsed",2);ht([d()],ot.prototype,"showHidden",2);ht([d()],ot.prototype,"editingTitle",2);ht([d()],ot.prototype,"titleValue",2);ht([d()],ot.prototype,"ideas",2);ht([d()],ot.prototype,"highlightIds",2);ht([d()],ot.prototype,"adding",2);ht([d()],ot.prototype,"newText",2);ht([d()],ot.prototype,"editingId",2);ht([d()],ot.prototype,"editText",2);ht([d()],ot.prototype,"dragOverId",2);ht([d()],ot.prototype,"dragOverPos",2);ht([d()],ot.prototype,"dragOverCommit",2);ht([d()],ot.prototype,"draggingId",2);ot=ht([w("ideas-section")],ot);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},ym=Is(class extends Pi{constructor(t){if(super(t),t.type!==Kn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const n=[],o=[];let a=0;for(const l of t)n[a]=i?i(l,a):a,o[a]=s(l,a),a++;return{values:o,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=Ol(t),{values:o,keys:a}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=a,o;const l=this.ut??=[],h=[];let u,p,m=0,g=n.length-1,v=0,x=o.length-1;for(;m<=g&&v<=x;)if(n[m]===null)m++;else if(n[g]===null)g--;else if(l[m]===a[v])h[v]=$e(n[m],o[v]),m++,v++;else if(l[g]===a[x])h[x]=$e(n[g],o[x]),g--,x--;else if(l[m]===a[x])h[x]=$e(n[m],o[x]),ps(t,h[x+1],n[m]),m++,x--;else if(l[g]===a[v])h[v]=$e(n[g],o[v]),ps(t,n[m],n[g]),g--,v++;else if(u===void 0&&(u=Pr(a,v,x),p=Pr(l,m,g)),u.has(l[m]))if(u.has(l[g])){const A=p.get(a[v]),y=A!==void 0?n[A]:null;if(y===null){const N=ps(t,n[m]);$e(N,o[v]),h[v]=N}else h[v]=$e(y,o[v]),ps(t,n[m],y),n[A]=null;v++}else Fi(n[g]),g--;else Fi(n[m]),m++;for(;v<=x;){const A=ps(t,h[x+1]);$e(A,o[v]),h[v++]=A}for(;m<=g;){const A=n[m++];A!==null&&Fi(A)}return this.ut=a,aa(t,h),qn}}),wm=3e3;let Ar=null;function Mr(){const t=Ar;return Ar=null,t&&Date.now()-t.at<wm?t:null}let Ir=null,cn=null,dn=null;function km(){Ir?.close(),Ir=null,cn&&clearTimeout(cn),cn=null,dn&&clearTimeout(dn),dn=null}let _r=Promise.resolve();function Or(t){if(t.defaultPrevented||t.altKey||!(t.metaKey||t.ctrlKey))return;const e=t.key.toLowerCase(),s=e==="y"||e==="z"&&t.shiftKey?"redo":e==="z"?"undo":null;s&&(t.composedPath().some(i=>i instanceof HTMLElement&&(i.matches("input, textarea")||i.isContentEditable))||document.querySelector('[role="dialog"], [role="menu"]')||(t.preventDefault(),_r=_r.then(async()=>{try{const{changed:i}=await B(`/api/planner/${s}`);if(!i){Vt(`Nothing to ${s}`,"user");return}const n=f.getState();await Promise.all([n.loadGoals(),n.loadCommitments()]),document.dispatchEvent(new CustomEvent("mana-ideas-changed")),document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:n.currentWeek??void 0}})),Vt(s==="undo"?"Undone":"Redone","user")}catch(i){Vt(i instanceof Error?i.message:`Couldn't ${s}`,"error")}})))}var $m=Object.getOwnPropertyDescriptor,Sm=(t,e,s,i)=>{for(var n=i>1?void 0:i?$m(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let Lr=class extends T{connectedCallback(){super.connectedCallback(),this.unsubCommits=j(this,f,t=>t.commitments),this.unsubWeek=j(this,f,t=>t.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubWeek?.()}daysLeft(){if((f.getState().currentWeek??bt())!==bt())return null;const e=7-(new Date().getDay()||7);return e===0?"last day":`${e} day${e===1?"":"s"} left`}render(){const t=f.getState().commitments,e=t.length;if(e===0)return c;const s=t.filter(o=>o.done).length,i=Math.round(s/e*100),n=this.daysLeft();return r`<div class="bg-surface px-4 py-3 flex items-center gap-3 text-sm">
      <span class="tabular-nums whitespace-nowrap"
        ><span class="font-medium text-ink">${s}</span><span class="text-muted"> of ${e} done</span
        >${n?r`<span class="text-muted"> · ${n}</span>`:c}</span
      >
      <div
        class="w-40 max-w-[40%] overflow-hidden rounded-full"
        style="height:4px;background:var(--color-line);"
        role="progressbar"
        aria-label="Weekly task progress"
        aria-valuemin="0"
        aria-valuemax=${e}
        aria-valuenow=${s}
      >
        <div style="height:100%;width:${i}%;background:var(--accent);border-radius:9999px;transition:width .35s ease;"></div>
      </div>
    </div>`}};Lr=Sm([w("week-progress")],Lr);var Tm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,ut=(t,e,s,i)=>{for(var n=i>1?void 0:i?Cm(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&Tm(e,s,n),n};const ve=["week","ideas","goals"];function Rr(t){try{const e=JSON.parse(t||"[]");if(!Array.isArray(e))return[...ve];const s=[...new Set(e.filter(i=>ve.includes(i)))];return[...s,...ve.filter(i=>!s.includes(i))]}catch{return[...ve]}}const ti="slmai.cockpit.plannerTab",Em=6e3,ee={week:{ls:"slmai.cockpit.weekSection.title",setting:"ui.section.week.title",def:"Shipping this week"},ideas:{ls:"slmai.cockpit.ideasSection.title",setting:"ui.section.ideas.title",def:"Ideas"},goals:{ls:"slmai.cockpit.goalsSection.title",setting:"ui.section.goals.title",def:"Goals"}};let rt=class extends T{constructor(){super(...arguments),this.order=[...ve],this.reorderKey=null,this.reorderOver=null,this.reorderAfter=!1,this.orderError="",this.orderSetting="",this.savingOrder=!1,this.orderRevision=0,this.ignoreTabClick=!1,this.tabPress=null,this.active="week",this.titles={week:ee.week.def,ideas:ee.ideas.def,goals:ee.goals.def},this.ideasCount=0,this.goalsCount=0,this.weekCount=0,this.editing=null,this.dragKind=null,this.dragOverTab=null,this.note="",this.noteKind="user",this.noteTimer=null,this.onPlannerNote=t=>{const e=t.detail;e?.text&&this.showNote(e.text,e.kind)},this.onAgentFollow=()=>{const t=Mr();t&&this.follow(t)},this.refreshOrder=async()=>{if(!(!this.orderSetting||this.savingOrder||this.tabPress||this.editing||document.visibilityState==="hidden"))try{const t=this.orderRevision,e=await C.settings.list();if(this.savingOrder||this.tabPress||t!==this.orderRevision)return;this.order=Rr(e[this.orderSetting]),localStorage.setItem(this.orderSetting,JSON.stringify(this.order))}catch{}},this.onTabPointerMove=t=>{const e=this.tabPress;if(!(!e||e.pointerId!==t.pointerId)){if(!this.reorderKey){const s=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y);if(i>6&&i>s){this.cancelTabReorder();return}if(s<=6)return;this.reorderKey=e.key}t.preventDefault(),this.reorderOver=null;for(const s of this.querySelectorAll("[data-planner-tab]")){const i=s.getBoundingClientRect();if(!(t.clientX<i.left||t.clientX>i.right||t.clientY<i.top-16||t.clientY>i.bottom+16)){this.reorderOver=s.dataset.plannerTab,this.reorderAfter=t.clientX>i.left+i.width/2;break}}}},this.onTabPointerUp=t=>{if(this.tabPress?.pointerId!==t.pointerId)return;const e=this.reorderKey,s=this.reorderOver,i=this.reorderAfter;e&&(this.ignoreTabClick=!0,setTimeout(()=>{this.ignoreTabClick=!1},0)),this.cancelTabReorder(),e&&s&&this.moveTab(e,s,i)},this.cancelTabReorder=()=>{this.tabPress=null,this.reorderKey=this.reorderOver=null,window.removeEventListener("pointermove",this.onTabPointerMove),window.removeEventListener("pointerup",this.onTabPointerUp),window.removeEventListener("pointercancel",this.cancelTabReorder)},this.cancelReorderKey=t=>{t.key==="Escape"&&this.cancelTabReorder()},this.onIdeasChanged=()=>{this.loadIdeasCount(),this.loadCounts()},this.onCountsStale=()=>void this.loadCounts(),this.onOpsEvent=t=>{t.detail?.action==="refresh"&&(this.loadIdeasCount(),this.loadCounts())},this.onIdeasCount=t=>{const e=t.detail?.count;typeof e=="number"&&(this.ideasCount=e)},this.onDocDragStart=t=>{const e=t.dataTransfer?.types;e&&(e.includes("text/x-idea-id")?this.dragKind="idea":e.includes("text/x-commit-id")?this.dragKind="commit":this.dragKind=null)},this.onDocDragEnd=()=>{this.dragKind=null,this.dragOverTab=null}}connectedCallback(){super.connectedCallback();const t=localStorage.getItem(ti);t&&ve.includes(t)&&(this.active=t);const e={...this.titles};for(const i of ve){const n=localStorage.getItem(ee[i].ls);n&&(e[i]=n)}this.titles=e,fetch("/api/settings").then(i=>i.json()).then(i=>{const n={...this.titles};for(const o of ve){const a=i[ee[o].setting];a&&(n[o]=a,localStorage.setItem(ee[o].ls,a))}this.titles=n}).catch(()=>{}),this.loadOrder(),window.addEventListener("focus",this.refreshOrder),document.addEventListener("visibilitychange",this.refreshOrder),document.addEventListener("keydown",this.cancelReorderKey),this.loadIdeasCount(),this.loadCounts(),this.unsubCounts=f.subscribe((i,n)=>{i.goals!==n.goals&&(this.goalsCount=i.goals.filter(o=>o.status==="active").length),i.commitments!==n.commitments&&(this.weekCount=i.commitments.filter(o=>!o.done).length)}),window.addEventListener("focus",this.onCountsStale),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("mana-ideas-count",this.onIdeasCount),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("dragstart",this.onDocDragStart),document.addEventListener("dragend",this.onDocDragEnd),document.addEventListener("mana-agent-follow",this.onAgentFollow);const s=Mr();s&&this.follow(s),document.addEventListener("mana-planner-note",this.onPlannerNote),document.addEventListener("keydown",Or)}disconnectedCallback(){super.disconnectedCallback(),this.cancelTabReorder(),window.removeEventListener("focus",this.refreshOrder),document.removeEventListener("visibilitychange",this.refreshOrder),document.removeEventListener("keydown",this.cancelReorderKey),this.unsubCounts?.(),window.removeEventListener("focus",this.onCountsStale),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("mana-ideas-count",this.onIdeasCount),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("dragstart",this.onDocDragStart),document.removeEventListener("dragend",this.onDocDragEnd),document.removeEventListener("mana-agent-follow",this.onAgentFollow),document.removeEventListener("mana-planner-note",this.onPlannerNote),document.removeEventListener("keydown",Or),this.noteTimer&&clearTimeout(this.noteTimer)}showNote(t,e){this.note=t,this.noteKind=e,this.noteTimer&&clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>{this.note=""},Em)}async follow(t){const e=document.activeElement,s=!!e&&this.contains(e)&&/^(INPUT|TEXTAREA)$/.test(e.tagName);if(!t.stay&&!s&&!this.editing&&this.active!==t.view){this.active=t.view;try{localStorage.setItem(ti,t.view)}catch{}}this.showNote(t.note,"agent");const i=f.getState();!s&&t.view==="week"&&t.week&&t.week!==i.currentWeek&&await i.setWeek(t.week).catch(()=>{}),await this.updateComplete;const n={action:"refresh",week:f.getState().currentWeek??t.week,changed:t.changed,added:t.added,removed:t.removed};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}async loadOrder(){try{const t=await fetch("/api/me");if(!t.ok)return;const e=await t.json();this.orderSetting=`user:${e.login}:planner.tab_order`,this.order=Rr(localStorage.getItem(this.orderSetting)),await this.refreshOrder()}catch{}}async moveTab(t,e,s){if(!this.orderSetting||this.savingOrder||t===e)return;const i=[...this.order],n=this.order.filter(o=>o!==t);if(n.splice(n.indexOf(e)+(s?1:0),0,t),!n.every((o,a)=>o===i[a])){this.orderRevision+=1,this.order=n,this.orderError="",this.savingOrder=!0;try{await f.getState().setSetting(this.orderSetting,JSON.stringify(n));try{localStorage.setItem(this.orderSetting,JSON.stringify(n))}catch{}}catch{this.order=i,this.orderError="Tab order could not be saved. Try again."}finally{this.savingOrder=!1}}}onTabPointerDown(t,e){this.editing||this.savingOrder||!this.orderSetting||t.pointerType==="mouse"&&t.button!==0||(this.tabPress={key:e,x:t.clientX,y:t.clientY,pointerId:t.pointerId},window.addEventListener("pointermove",this.onTabPointerMove,{passive:!1}),window.addEventListener("pointerup",this.onTabPointerUp),window.addEventListener("pointercancel",this.cancelTabReorder))}onTabOrderKey(t,e){if(!t.altKey||!["ArrowLeft","ArrowRight"].includes(t.key))return;t.preventDefault();const s=this.order.indexOf(e),i=this.order[s+(t.key==="ArrowLeft"?-1:1)];i&&this.moveTab(e,i,t.key==="ArrowRight")}async loadCounts(){try{const[t,e]=await Promise.all([fetch("/api/goals").then(s=>s.json()),fetch("/api/week").then(s=>s.json())]);this.goalsCount=t.goals?.filter(s=>s.status==="active").length??0,this.weekCount=e.commitments?.filter(s=>!s.done).length??0}catch{}}async loadIdeasCount(){try{const e=await(await fetch("/api/ideas")).json();this.ideasCount=e.ideas?.filter(s=>!s.hidden).length??0,e.ideas&&dl(e.ideas)}catch{}}select(t){if(!(this.editing||this.ignoreTabClick)){this.active=t;try{localStorage.setItem(ti,t)}catch{}this.loadCounts()}}isDropTarget(t){return this.dragKind==="idea"?t==="week":this.dragKind==="commit"?t==="ideas":!1}onTabDragOver(t,e){this.isDropTarget(e)&&(t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this.dragOverTab=e)}onTabDragLeave(t){this.dragOverTab===t&&(this.dragOverTab=null)}async onTabDrop(t,e){if(!this.isDropTarget(e))return;t.preventDefault();const s=this.dragKind;this.dragKind=null,this.dragOverTab=null;const i=(t.dataTransfer?.getData("text/plain")||"").trim();if(i){if(s==="commit"){const n=Number(t.dataTransfer?.getData("text/x-commit-id"));n&&await qa(n,i)}else if(s==="idea"){const n=Number(t.dataTransfer?.getData("text/x-idea-id"));if(!n||!await ro(n,i))return;this.active="week";try{localStorage.setItem(ti,"week")}catch{}}}}startRename(t,e){t.stopPropagation(),!(this.ignoreTabClick||this.reorderKey)&&(this.active=e,this.editing=e)}commitRename(t,e){const s=e.trim()||ee[t].def;this.editing=null,this.titles={...this.titles,[t]:s},localStorage.setItem(ee[t].ls,s),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[ee[t].setting]:s})})}onRenameKey(t,e){t.key==="Enter"?(t.preventDefault(),this.commitRename(e,t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editing=null)}renderTab(t){if(this.editing===t)return r`<input
        class="text-[15px] font-normal text-ink leading-none bg-transparent border-b-2 border-ink outline-none px-0.5 py-3"
        style="min-width:4ch;width:${this.titles[t].length+1}ch;letter-spacing:-0.01em;"
        .value=${this.titles[t]}
        autofocus
        @click=${o=>o.stopPropagation()}
        @keydown=${o=>this.onRenameKey(o,t)}
        @blur=${o=>this.commitRename(t,o.target.value)}
      />`;const e=this.active===t,s=this.isDropTarget(t),n=this.dragOverTab===t?"border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);":s?"border-color:color-mix(in srgb, var(--accent) 45%, transparent);":e?"border-color:var(--ink);":"border-color:transparent;";return r`<button
      type="button"
      class="relative inline-flex items-center gap-1.5 px-0.5 py-3 border-b-2 text-[15px] font-normal leading-none whitespace-nowrap transition-[color,background,border-color] ${e?"text-ink":"text-muted hover:text-ink"}"
      style="letter-spacing:-0.01em;touch-action:pan-y;user-select:none;${n}${this.reorderKey===t?"opacity:.45;":""}"
      data-planner-tab=${t}
      title="Drag to reorder. Double-click to rename"
      @pointerdown=${o=>this.onTabPointerDown(o,t)}
      @keydown=${o=>this.onTabOrderKey(o,t)}
      @dragstart=${o=>o.preventDefault()}
      @click=${()=>this.select(t)}
      @dblclick=${o=>this.startRename(o,t)}
      @dragover=${o=>this.onTabDragOver(o,t)}
      @dragleave=${()=>this.onTabDragLeave(t)}
      @drop=${o=>this.onTabDrop(o,t)}
    >
      ${this.reorderOver===t&&this.reorderKey!==t?r`<span aria-hidden="true" style="position:absolute;top:2px;bottom:2px;width:2px;border-radius:2px;background:var(--accent);${this.reorderAfter?"right:0;":"left:0;"}"></span>`:c}
      <span class="tab-label" data-label=${this.titles[t]}>${this.titles[t]}</span>
      ${this.countFor(t)>0?r`<span
            class="text-[11px] font-normal text-muted px-1.5 py-0.5 rounded-full leading-none"
            style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
            >${this.countFor(t)}</span
          >`:c}
    </button>`}countFor(t){return t==="ideas"?this.ideasCount:t==="goals"?this.goalsCount:this.weekCount}render(){return r`
      <div class="planner-panel flex-1 flex flex-col ${this.active==="goals"?"pb-16":""}">
        <div class="planner-header flex items-center gap-3 border-b border-line px-4">
          <div class="planner-tabs flex-1 flex items-center gap-5 min-w-0 -mb-px overflow-x-auto">
            ${ym(this.order,t=>t,t=>this.renderTab(t))}
            ${this.note?r`<span
                  class="ml-auto pl-3 min-w-0 inline-flex items-center gap-1.5 text-xs text-muted"
                  role=${this.noteKind==="error"?"alert":"status"}
                  title=${this.noteKind==="agent"?"Changed by an agent":c}
                  ><span class="shrink-0 w-1.5 h-1.5 rounded-full" style="background:var(${this.noteKind==="error"?"--nsc-red":"--nsc-green"});"></span
                  ><span class="truncate">${this.note}</span></span
                >`:c}
          </div>
          ${this.active==="week"?r`<week-nav class="shrink-0"></week-nav>`:c}
          ${this.active==="goals"?r`<button
                type="button"
                class="goals-add shrink-0 inline-flex items-center gap-1.5 rounded px-2 py-1 text-sm text-accent hover:bg-hover"
                @click=${()=>this.querySelector("goals-section")?.openCreate()}
              ><span class="inline-flex w-3.5 h-3.5" aria-hidden="true">${V(Ha)}</span>New goal</button>`:c}
        </div>
        ${this.orderError?r`<div role="alert" class="px-4 pt-3 text-sm text-red-500">${this.orderError}</div>`:c}
        <div class="planner-panel-body flex-1 px-4 py-3">
          ${this.active==="week"?r`<week-section tabbed></week-section>`:c}
          ${this.active==="ideas"?r`<ideas-section tabbed></ideas-section>`:c}
          ${this.active==="goals"?r`<goals-section tabbed></goals-section>`:c}
        </div>
        ${this.active==="week"?r`<week-progress></week-progress>`:c}
      </div>
    `}};ut([d()],rt.prototype,"order",2);ut([d()],rt.prototype,"reorderKey",2);ut([d()],rt.prototype,"reorderOver",2);ut([d()],rt.prototype,"reorderAfter",2);ut([d()],rt.prototype,"orderError",2);ut([d()],rt.prototype,"active",2);ut([d()],rt.prototype,"titles",2);ut([d()],rt.prototype,"ideasCount",2);ut([d()],rt.prototype,"goalsCount",2);ut([d()],rt.prototype,"weekCount",2);ut([d()],rt.prototype,"editing",2);ut([d()],rt.prototype,"dragKind",2);ut([d()],rt.prototype,"dragOverTab",2);ut([d()],rt.prototype,"note",2);ut([d()],rt.prototype,"noteKind",2);rt=ut([w("planner-tabs")],rt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl="important",Dm=" !"+hl,Pm=Is(class extends Pi{constructor(t){if(super(t),t.type!==Kn.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const o=typeof n=="string"&&n.endsWith(Dm);i.includes("-")||o?s.setProperty(i,o?n.slice(0,-11):n,o?hl:""):s[i]=n}}return qn}}),Kt=100,Am=76,Mm=600,U=12,Et=8,go=(t,e,s)=>({left:t.x,top:t.y,right:t.x+e,bottom:t.y+s});function bo(t,e,s=0){return t.left<e.right+s&&t.right>e.left-s&&t.top<e.bottom+s&&t.bottom>e.top-s}const Im=2*Kt,_m=t=>t.bottom-t.top<=Im,qt=(t,e,s)=>Math.max(e,Math.min(s,t));function Xe(t){return t.width<Mm?Am:Kt}const ke=t=>t.height-(t.insetBottom??0);function Nr(t,e,s=Kt){const i=t.width-U-s;let n=ke(t)-U-s;for(let o=0;o<8;o++){const a=e.find(l=>bo(go({x:i,y:n},s,s),l,Et));if(!a)break;n=a.top-Et-s}return{x:i,y:qt(n,U,ke(t)-U-s)}}function Hn(t,e,s=Kt){return ul(t,e,{width:s,height:s})}function ul(t,e,s){return{x:qt(t.x,U,e.width-U-s.width),y:qt(t.y,U,ke(e)-U-s.height)}}const pl=(t,e)=>({w:Math.max(0,t.width-2*U-e),h:Math.max(0,ke(t)-2*U-e)});function Om(t,e,s=Kt){const{w:i,h:n}=pl(e,s);return{xr:i?qt((t.x-U)/i,0,1):1,yr:n?qt((t.y-U)/n,0,1):1}}function Lm(t,e,s=Kt){const{w:i,h:n}=pl(e,s);return{x:Math.round(U+qt(t.xr,0,1)*i),y:Math.round(U+qt(t.yr,0,1)*n)}}const Rm=32;function Nm(t,e){return Math.hypot(t.x-e.x,t.y-e.y)<=Rm}function jr(t,e,s,i=Kt){let{x:n,y:o}=Hn(t,e,i);for(let a=0;a<8;a++){const l=s.find(u=>bo(go({x:n,y:o},i,i),u,Et));if(!l)break;const h=l.top-Et-i;o=h>=U?h:l.bottom+Et}return Hn({x:n,y:o},e,i)}function Fr(t,e,s=Kt){const i=(t.top+t.bottom)/2-s/2;if(e.width-t.right>=s+2*Et)return{x:t.right+Et,y:qt(i,U,ke(e)-U-s),side:"right"};const n=qt(t.right-s-Et,U,e.width-U-s);return t.bottom+Et+s<=ke(e)-U?{x:n,y:t.bottom+Et,side:"below"}:{x:n,y:Math.max(U,t.top-Et-s),side:"above"}}function hn(t){return Math.min(340,t.width-2*U)}function jm(t,e,s,i,n=Kt){const o=t.x+n/2<e.width/2,a=qt(o?t.x:t.x+n-s.width,U,e.width-U-s.width),l=t.y-Et-s.height,h=t.y+n+Et,u=l>=U,p=h+s.height<=ke(e)-U,m=[u?l:null,p?h:null].filter(x=>x!==null),v=m.find(x=>!i||!bo(go({x:a,y:x},s.width,s.height),i,4))??m[0]??qt(l,U,ke(e)-U-s.height);return{x:a,y:v}}function Ur(t){return`${t.kind==="commitment"?"commit":t.kind}:${t.id}`}const Fm=`
.mc-avatar {
  position: fixed; z-index: 60; width: var(--mc-size, ${Kt}px); height: var(--mc-size, ${Kt}px); padding: 0; border: 0; border-radius: 12px;
  background: transparent; box-shadow: none; cursor: pointer; color: var(--ink);
  transition: left 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
  touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; overflow: visible;
}
.mc-avatar[data-dragging] { transition: none; cursor: grabbing; }
.mc-avatar[data-flying] { transition: none; }
.mc-avatar mana-owl { width: 100%; height: 100%; display: block; }
.mc-avatar:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.mc-avatar[data-voice="listening"]::before, .mc-avatar[data-voice="opening"]::before {
  content: ""; position: absolute; inset: 4px; border-radius: 50%; pointer-events: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 calc(5px + var(--mc-level, 0) * 16px) color-mix(in srgb, var(--accent) 16%, transparent);
}
.mc-avatar[data-voice="opening"]::before { opacity: 0.4; }
.mc-bubble {
  position: fixed; z-index: 60; box-sizing: border-box; padding: 10px 12px 12px;
  background: var(--surface); color: var(--ink); border-radius: 14px;
  box-shadow: var(--card-shadow), 0 10px 30px rgb(0 0 0 / 0.16); font-size: 14px; line-height: 1.45;
  cursor: grab; touch-action: pan-y; overflow-y: auto; overscroll-behavior: contain; scrollbar-gutter: stable;
}
.mc-bubble[data-dragging] { cursor: grabbing; user-select: none; -webkit-user-select: none; }
.mc-mine { color: var(--muted); margin: 0 0 4px; overflow-wrap: anywhere; }
.mc-source { color: var(--ink); font-size: 13px; margin: 0 0 4px; overflow-wrap: anywhere; }
.mana-companion-focus { animation: mc-land 1.5s ease-out; border-radius: 8px; }
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
/* The mic sits inside the field, bottom right, so it stays by the last line as the field grows. */
.mc-form { margin: 4px 0; position: relative; }
.mc-form[hidden] { display: none; }
.mc-input {
  box-sizing: border-box; width: 100%; min-height: 44px; display: block; padding: 10px 88px 10px 10px; border: 0.5px solid var(--line); border-radius: 10px;
  background: var(--bg); color: var(--ink); font: inherit; font-size: 16px; line-height: 1.4; outline: none; cursor: text;
  resize: none; overflow-y: hidden; max-height: 148px;
}
.mc-input:focus { border-color: color-mix(in srgb, var(--accent) 55%, var(--line)); }
.mc-tools, .mc-voice { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.mc-voice { min-height: 44px; }
.mc-voice [role="status"] { flex: 1; color: var(--ink); }
.mc-tool, .mc-send { min-width: 44px; height: 44px; padding: 0 8px; border: 0; border-radius: 10px; background: none; color: var(--ink); display: grid; place-items: center; cursor: pointer; }
.mc-tool:hover, .mc-send:hover { background: var(--hover); }
.mc-tool:focus-visible, .mc-send:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
/* Send and the mic sit inside the input, bottom right. */
.mc-field-actions { position: absolute; right: 2px; bottom: 2px; display: flex; }
.mc-field-actions .mc-tool, .mc-field-actions .mc-send { min-width: 40px; height: 40px; padding: 0; color: var(--muted, var(--ink)); }
.mc-send:disabled { opacity: 0.5; cursor: progress; }
.mc-tools .mc-undo, .mc-voice .mc-undo { min-height: 44px; }
.mc-heard-text { margin: 4px 0; overflow-wrap: anywhere; white-space: pre-wrap; }
.mc-history { max-height: 35vh; overflow-y: auto; scrollbar-gutter: stable; touch-action: pan-y; cursor: auto; }
.mc-exchange { margin: 8px 0; }
.mc-exchange p { margin: 4px 0; white-space: pre-wrap; overflow-wrap: anywhere; }
.mc-mic:hover, .mc-mic:focus-visible { background: var(--hover); color: var(--ink); outline: none; }
.mc-mic[data-state="listening"] { color: var(--warn); background: color-mix(in srgb, var(--warn) 12%, transparent); }
.mc-mic[data-state="listening"] svg { animation: mc-pulse 1.2s ease-in-out infinite; }
.mc-mic:disabled { opacity: 0.5; cursor: progress; }
.mana-companion-pointed.mana-companion-pointed, .mana-companion-pointed.mana-companion-pointed * { font-weight: 650; }
.mana-companion-pointed { outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px; border-radius: 8px; }
@keyframes mc-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes mc-land { from { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; } to { outline: 2px solid transparent; outline-offset: 2px; } }
@keyframes mc-flash { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--nsc-green) 55%, transparent); } 100% { box-shadow: 0 0 0 12px transparent; } }
@keyframes mc-dots { from { width: 0; } to { width: 1.2em; } }
@keyframes mc-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@media (prefers-reduced-motion: reduce) {
  .mc-avatar[data-voice]::before { box-shadow: 0 0 0 2px var(--accent); }
  .mc-avatar[data-voice="off"]::before, .mc-avatar[data-voice="writing"]::before { display: none; }
  .mc-avatar { transition: none; }
  .mana-companion-focus { animation: none; }
  .mc-avatar[data-state="thinking"] img, .mc-avatar[data-state="done"], .mc-dots::after, .mc-mic[data-state="listening"] svg { animation: none; }
}
`;function Um(t=document){if(t.getElementById("mana-companion-styles"))return;const e=t.createElement("style");e.id="mana-companion-styles",e.textContent=Fm,t.head.appendChild(e)}const Bm=["hop","nod","tilt","squint","ruffle","happy","surprised","sleepy","proud","confused","sad","fly","come"],Hm=["happy","calm","surprised","sleepy","proud","confused","sad"],ne="Can't reach Mana right now.";function zm(t){let e="message";const s=[];for(const n of t.split(`
`))!n||n.startsWith(":")||(n.startsWith("event:")?e=n.slice(6).trim():n.startsWith("data:")&&s.push(n.slice(5).trimStart()));if(!s.length)return null;let i;try{i=JSON.parse(s.join(`
`))}catch{return null}switch(e){case"text":return{type:"text",text:String(i.text??"")};case"action":return{type:"action",action:i};case"draft":return typeof i.id=="string"&&Array.isArray(i.lines)?{type:"draft",draft:i}:null;case"notes":return typeof i.query=="string"&&Array.isArray(i.hits)&&i.hits.length?{type:"notes",found:i}:null;case"confirm":return typeof i.id=="string"&&typeof i.noteFile=="string"&&(i.kind==="publish"||i.kind==="unpublish")?{type:"confirm",confirm:i}:null;case"point":return i.ref?{type:"point",ref:i.ref,title:String(i.title??"")}:null;case"mood":return Hm.includes(i.mood)?{type:"mood",mood:i.mood}:null;case"move":return Bm.includes(i.move)?{type:"move",move:i.move}:null;case"notice":return{type:"notice",text:String(i.text??"")};case"error":return{type:"error",error:String(i.error??ne)};case"done":return{type:"done",firstTokenMs:typeof i.firstTokenMs=="number"?i.firstTokenMs:null,ms:Number(i.ms)||0};default:return null}}async function*Km(t,e){let s;try{s=await fetch("/api/companion/turn",{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify(t),signal:e})}catch{e?.aborted||(yield{type:"error",error:ne});return}if(!s.ok||!s.body){yield{type:"error",error:ne};return}const i=s.body.getReader(),n=new TextDecoder;let o="";try{for(;;){const{done:a,value:l}=await i.read();if(a)break;o+=n.decode(l,{stream:!0});for(let h;(h=o.indexOf(`

`))!==-1;){const u=zm(o.slice(0,h));o=o.slice(h+2),u&&(yield u)}}}catch{e?.aborted||(yield{type:"error",error:ne})}finally{try{i.releaseLock()}catch{}}}async function se(t,e){try{const s=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});return s.ok?await s.json():null}catch{return null}}function qm(t,e,s){const i=document.createElement("div");i.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(e).fontFamily,i.style.width=`${Math.min(200,window.innerWidth-16)}px`,i.setAttribute("role","menu"),i.setAttribute("aria-label","Owl options"),document.body.appendChild(i);const n=()=>{document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",a,!0),window.removeEventListener("resize",n),vt(c,i),i.remove()},o=h=>{h.composedPath().includes(i)||n()},a=h=>{(h.key==="Escape"||h.key==="Tab")&&(h.preventDefault(),h.stopPropagation(),n())};vt(r`${s.map(h=>r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    @click=${()=>{n(),h.run()}}>${h.label}</button>`)}`,i);const l=i.getBoundingClientRect();i.style.left=`${Math.max(8,Math.min(t.x,window.innerWidth-l.width-8))}px`,i.style.top=`${Math.max(8,Math.min(t.y,window.innerHeight-l.height-8))}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",a,!0),window.addEventListener("resize",n),i.querySelector("button")?.focus({preventScroll:!0})}const Wm=200,Gm=[{names:["goals"],pane:"goals",tab:"goals",label:"Goals"},{names:["weekly","this week","week"],pane:"goals",tab:"week",label:"Weekly"},{names:["parked","parked ideas","ideas"],pane:"goals",tab:"ideas",label:"Parked"},{names:["shopping","shopping list","grocery","grocery list","groceries"],pane:"grocery",label:"Shopping"},{names:["finance","finances","money","budget"],pane:"finance",label:"Finance"},{names:["circles","circle","people"],pane:"circle",label:"Circles"},{names:["learn","learning"],pane:"learn",label:"Learn"},{names:["been to","travel","travels"],pane:"been-to",label:"Been to"},{names:["projects","my projects","project list","apps","app catalogue"],pane:"office",label:"Projects",ownerOnly:!0},{names:["publisher"],pane:"publisher",label:"Publisher",ownerOnly:!0},{names:["the office","office","office floor","the writers","newsroom","the newsroom","writers room"],pane:"newsroom",label:"The office",ownerOnly:!0},{names:["notes","note"],pane:"canvas",label:"Notes"},{names:["guests"],pane:"guests",label:"Guests",ownerOnly:!0},{names:["notifications","notification","notifs","bell"],pane:"notify",label:"Notifications"},{names:["tools"],pane:"tools",label:"Tools"}],ml=new Map(Gm.flatMap(t=>t.names.map(e=>[e,t]))),Vm=[...ml.keys()].sort((t,e)=>e.length-t.length).map(t=>t.replace(/ /g,"\\s+")).join("|"),Ym=[{words:["come here","come over","come","move to my cursor"],move:"come",note:"Came over."},{words:["go to sleep","sleep"],move:"sleepy",note:"Got sleepy."},{words:["hop"],move:"hop",note:"Hopped."},{words:["nod"],move:"nod",note:"Nodded."},{words:["fly"],move:"fly",note:"Flew."}],fl=new Map(Ym.flatMap(t=>t.words.map(e=>[e,t]))),Qm=[...fl.keys()].sort((t,e)=>e.length-t.length).map(t=>t.replace(/ /g,"\\s+")).join("|"),gl=String.raw`(?:(?:can|could|would|will) you\s+)?(?:please\s+)?`,bl=String.raw`(?:\s+for me)?(?:\s+please)?$`,Jm=new RegExp(String.raw`^${gl}(?:open(?: up)?|show(?: me)?|go to|switch to|take me to|bring up|navigate to)\s+(?:(?:my|the)\s+)?(${Vm})(?:\s+(?:tool|app|pane|tab))?${bl}`,"i"),Xm=new RegExp(String.raw`^${gl}(${Qm})${bl}`,"i"),li=String.raw`(?:(?:can|could|would|will) you[,\s]+)?(?:please[,\s]+)?`,zn=String.raw`(?:\s*[:,]\s*|\s+)`,Zm=[{re:new RegExp(String.raw`^${li}(?:add(?:\s+weekly)?\s+task|new\s+task|add\s+commitment)${zn}(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${li}task\s*:\s*(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${li}(?:park|add\s+parked|add\s+idea|add\s+to\s+parked)${zn}(.+)$`,"i"),target:"idea"}],tf=new RegExp(String.raw`^${li}add${zn}(.+)$`,"i"),ef=/^(?:this|that|it|these|those|them)(?:\s+(?:one|ones|task|tasks|item|items|idea|ideas|thing|things|row))?(?:\s+(?:for now|for later|too|as well|please))?$/i,sf=/(?:\s(?:to|into|in|on|onto|for)\s+(?:(?:the|my|our|this|next|last|that)\s+)*(?:week|weekly|parked|ideas?|shopping(?:\s+list)?|grocer(?:y|ies)(?:\s+list)?|to[-\s]?buy(?:\s+list)?|list|goals?|tasks?|planner|pantry|backlog)|\s(?:next|last)\s+week)$|^to\s/i,nf=/^(?:the|this|that|these|those|my|our|it)\b|\b(?:one|ones|task|tasks|item|items)$/i,of=/^(?:(?:a|an|new|weekly|my|the)\s+)*(?:tasks?|commitments?|ideas?|parked|notes?|goals?|reminders?|key results?)\b/i,Br=t=>t.toLowerCase().replace(/[^\p{L}\p{N}\s]+/gu," ").replace(/\s+/g," ").trim();function Hr(t,e,s){const i=t.trim().replace(/[\s.!,;:]+$/,"");if(!i||i.length>Wm||ef.test(i)||sf.test(i)||e==="shopping"&&of.test(i)||e!=="task"&&nf.test(i))return null;if(e==="idea"){const n=` ${Br(i)} `;if((s.openTasks??[]).some(o=>{const a=Br(o);return!!a&&(` ${a} `.includes(n)||n.includes(` ${a} `))}))return null}return i}function rf(t){return t.replace(/,/g," ").replace(/\s+/g," ").trim().replace(/[.!?]+$/,"").trim()}function af(t,e){const s=rf(t),i=Jm.exec(s),n=i?ml.get(i[1].toLowerCase().replace(/\s+/g," ")):void 0;if(n&&(!n.ownerOnly||e.owner))return{kind:"nav",rule:`nav:${n.pane}${n.tab?`:${n.tab}`:""}`,note:`Opened ${n.label}.`,pane:n.pane,tab:n.tab??null,label:n.label};const o=Xm.exec(s),a=o?fl.get(o[1].toLowerCase().replace(/\s+/g," ")):void 0;if(a)return{kind:"move",rule:`move:${a.move}`,note:a.note,move:a.move};const l=t.replace(/\s+/g," ").trim();if(l.includes("?"))return null;for(const p of Zm){const m=p.re.exec(l);if(!m)continue;const g=Hr(m[1],p.target,e);return g?{kind:"add",rule:`add:${p.target}`,target:p.target,text:g}:null}const h=e.pane==="grocery"?tf.exec(l):null,u=h?Hr(h[1],"shopping",e):null;return u?{kind:"add",rule:"add:shopping",target:"shopping",text:u}:null}function lf(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()));e.setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));const s=Math.ceil(((e.getTime()-Date.UTC(e.getUTCFullYear(),0,1))/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(s).padStart(2,"0")}`}function cf(t,e,s={}){if(t==="task"){const n=s.week&&s.current&&s.week!==s.current?`week ${Number(s.week.split("-W")[1])}${s.week.slice(0,4)===s.current.slice(0,4)?"":` of ${s.week.slice(0,4)}`}`:null;return n?{shown:`Added to ${n}: ${e}`,did:`Added task to ${n}: ${e}`}:{shown:`Added: ${e}`,did:`Added task: ${e}`}}const i=t==="idea"?"Parked":s.list==="buy"?"To buy":"Shopping";return{shown:`Added to ${i}: ${e}`,did:`Added to ${i}: ${e}`}}const df=["idle","listening","curious","thinking","happy","surprised","sleepy","sleeping","waking","flying","proud","confused","sad"],zr={happy:6800,surprised:4800,waking:6200,flying:8600,proud:5800,confused:5e3,sad:7200},hf=2e4,uf=3e4,pf=1e4,mf=2e4;function Di(t){return typeof t=="string"&&df.includes(t)}function ff(t){return t>=23||t<5}function gf(t,e=!1){return t>=(e?mf:uf)?"sleeping":t>=(e?pf:hf)?"sleepy":"idle"}function bf(t){return Di(t.override)?t.override:t.dictation==="listening"?"listening":t.reaction==="surprised"?"surprised":t.sending||t.dictation==="writing"?"thinking":t.reaction?t.reaction:t.curious?"curious":t.open?"listening":t.rest}var vf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,Ge=(t,e,s,i)=>{for(var n=i>1?void 0:i?xf(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&vf(e,s,n),n};let le=class extends Pt{constructor(){super(...arguments),this.state="idle",this.trigger=0,this.ready=!1,this.generation=0,this.canvases=0,this.restarts=0,this.startedAt=0,this.onLost=()=>{if(this.ready=!1,Date.now()-this.startedAt>6e4&&(this.restarts=0),this.restarts>=3)return;const t=[1e3,5e3,3e4][this.restarts++];clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{this.canvases++,this.updateComplete.then(()=>this.start())},t)}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.start()}firstUpdated(){this.start()}updated(t){(t.has("state")||t.has("trigger"))&&this.renderer?.setState(Di(this.state)?this.state:"idle",{restart:t.has("trigger")})}disconnectedCallback(){super.disconnectedCallback(),this.generation++,clearTimeout(this.preloadTimer),clearTimeout(this.restartTimer),this.abort?.abort(),this.renderer?.destroy(),this.renderer=void 0,this.ready=!1}async start(){const t=++this.generation;this.abort?.abort(),this.abort=new AbortController,this.renderer?.destroy(),this.renderer=void 0;try{const{createOwlRenderer:e}=await _t(async()=>{const{createOwlRenderer:i}=await import("./owl-renderer-DPEf0jy5.js");return{createOwlRenderer:i}},[]);if(t!==this.generation||!this.isConnected)return;const s=await e(this.art,this.effects,{signal:this.abort.signal,onUnavailable:()=>{this.ready=!1},onLost:this.onLost});if(t!==this.generation||!this.isConnected){s.destroy();return}this.renderer=s,await s.setState(Di(this.state)?this.state:"idle"),this.ready=!0,this.startedAt=Date.now(),this.preloadTimer=setTimeout(()=>this.preload(),6e3)}catch(e){e.name!=="AbortError"&&(this.ready=!1)}}hold(t,e=!1){this.renderer?.hold(t,e)}canFly(){return this.renderer?.canFly()??!1}airborne(){return this.renderer?.airborne()??!1}carry(t,e){this.renderer?.carry(t,e)}preload(){this.renderer?.preload()}lookAt(t){this.renderer?.lookAt(t)}gesture(t,e=!1){return this.renderer?.gesture(t,e)??!1}talk(t){this.renderer?.talk(t)}render(){return r`<div class="sprite" data-renderer=${this.ready?"animated":"static"} aria-hidden="true">
      <img src=${new URL("/assets/original-DQyfsRdb.webp",import.meta.url).href} alt="" draggable="false" ?hidden=${this.ready}>
      ${la(this.canvases,r`<canvas class="art" width="256" height="256" ?hidden=${!this.ready}></canvas>
      <canvas class="effects" width="256" height="256" ?hidden=${!this.ready}></canvas>`)}
    </div>`}};le.styles=Ot`
    :host{display:block;width:100%;height:100%;pointer-events:none;color:inherit}
    .sprite{position:relative;width:100%;height:100%}
    img,canvas{display:block;position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;user-select:none;-webkit-user-drag:none}
    canvas{inset:auto;left:-75%;top:-100%;width:250%;height:225%}
    img{object-fit:contain} [hidden]{display:none!important}
  `;Ge([b()],le.prototype,"state",2);Ge([b({type:Number})],le.prototype,"trigger",2);Ge([d()],le.prototype,"ready",2);Ge([Y("canvas.art")],le.prototype,"art",2);Ge([Y("canvas.effects")],le.prototype,"effects",2);Ge([d()],le.prototype,"canvases",2);le=Ge([w("mana-owl")],le);var yf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,L=(t,e,s,i)=>{for(var n=i>1?void 0:i?wf(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&yf(e,s,n),n};const vl=1e4,un=3e4,kf=9e4,$f=6,Sf=1500,Kr=450,qr=320,Tf=900,Cf=.45,Ef=450,Df=4,Pf=1200,Af=600,Mf=1600,If=2e3,pn=2400,_f=90,Of=700,Lf=700,Wr=[450,1100],Rf=1300,Nf=8e3,jf=1e4,mn=24,Ff=1100,Uf=6e3,Gr=45,Vr=1200,Bf=260,Hf=110,Yr=5*6e4,zf=2*6e4,Kf=150,qf=4e3,fn=[5e3,9e3],Wf=1200,Gf=25e3,Vf=8e3,Yf=["hop","nod","tilt","squint","ruffle"],Qf=4*6e4,Qr=["squint","hop","nod"],gn=[6e4,12e4],Jf=2e4,Xf=4e4,Zf=["preen","look","shift","stretch"],tg=["yawn","preen","yawn","shift"],eg="p, li, h1, h2, h3, h4, h5, h6, td, th, dt, dd, blockquote, pre, label, figcaption, [contenteditable='true']",sg=15e3,ig=250,Jr=148,ng=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,og=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,xl="slmai.cockpit.plannerTab",yl="slmai.companion.spot";let I=class extends T{constructor(){super(...arguments),this.owner=!1,this.avatar="/office-avatars/mana.svg",this.animationState="auto",this.reaction=null,this.reactionTrigger=0,this.rest="idle",this.lastActivity=Date.now(),this.lastTouched=Date.now(),this.nextFidget=0,this.lastFidget=null,this.restTimer=null,this.reactionTimer=null,this.doneTimer=null,this.open=!1,this.sending=!1,this.mine="",this.spoken=!1,this.typing=!1,this.owlHidden=el(),this.reviewTake="",this.historyOpen=!1,this.exchanges=[],this.reply="",this.lines=[],this.slow=!1,this.status="Thinking",this.pointing=null,this.pos={x:-100,y:-100},this.bubble={x:-1e3,y:-1e3},this.justActed=!1,this.spots=rg(),this.pane=f.getState().rightPaneMode,this.spot=ra(this.spots,this.pane),this.unsubscribe=null,this.dragging=!1,this.visiting=null,this.sitting=null,this.focusView=null,this.returnSpot=null,this.typingTimer=null,this.lastConversationGesture=0,this.readingReply=!1,this.replyGestures=0,this.shown=0,this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.talking=!1,this.highlight=null,this.touched=null,this.abort=null,this.slowTimer=null,this.idleTimer=null,this.chipTimer=null,this.dictation="off",this.micOpening=!1,this.takeGeneration=0,this.sttAbort=null,this.recorder=new Ua,this.takeTimer=null,this.typeArmedUntil=0,this.frame=0,this.drag=null,this.lastTap=null,this.tapTimer=null,this.pointerType="mouse",this.stroke=null,this.lastPetBuzz=0,this.glanceTimer=null,this.dragged=!1,this.visitTimer=null,this.coming=null,this.comeTimer=null,this.cursor=null,this.trip=null,this.flyNext=!1,this.arrivedAt=0,this.watching=null,this.boredUntil=0,this.stareTimer=null,this.lingerTimer=null,this.lastTilt=0,this.lastGreeting=0,this.lastGreetingKind=null,this.lastReaction=null,this.onWatch=t=>{if(t.pointerType==="mouse"&&(this.cursor={x:t.clientX,y:t.clientY,at:Date.now()}),t.pointerType==="touch"||!this.owner||!this.owl||this.rest!=="idle"||this.typingTimer||this.sending)return;const e=Date.now();if(!(!this.dragging&&!this.pointing&&Math.hypot(t.clientX-(this.pos.x+this.size/2),t.clientY-(this.pos.y+this.size/2))<=Kf)){this.stopWatching();return}e<this.boredUntil||(this.watching===null&&(this.watching=e,this.stareTimer=setTimeout(this.loseInterest,qf)),this.owl.lookAt({x:t.clientX,y:t.clientY}),this.lingerTimer&&clearTimeout(this.lingerTimer),this.lingerTimer=setTimeout(this.onLinger,Wf))},this.loseInterest=()=>{this.stopWatching(),this.boredUntil=Date.now()+fn[0]+Math.random()*(fn[1]-fn[0])},this.onLinger=()=>{this.lingerTimer=null,!(this.watching===null||Date.now()-this.lastTilt<Gf||Math.random()>.6)&&this.owl?.gesture("tilt")&&(this.lastTilt=Date.now())},this.onPointerOut=t=>{t.relatedTarget||this.stopWatching()},this.onHover=t=>{this.onActivity(),this.owl?.preload();const e=document.activeElement===this.input&&!!this.input?.value.trim();if(t.pointerType==="touch"||this.dragging||this.reaction||this.sending||this.typingTimer||e||this.rest!=="idle")return;const s=Date.now();if(s-this.lastGreeting<Vf)return;const i=Yf.filter(o=>o!==this.lastGreetingKind),n=i[Math.floor(Math.random()*i.length)];this.owl?.gesture(n)&&(this.lastGreeting=s,this.lastGreetingKind=n)},this.onActivity=t=>{if(t&&!t.composedPath().includes(this)||(this.lastActivity=this.lastTouched=Date.now(),this.rest==="idle"))return;const e=this.rest==="sleeping";this.rest="idle",e&&this.playAnimation("waking")},this.updateRest=()=>{if(!this.owner)return;const t=Date.now(),e=ff(new Date(t).getHours());if(this.open||this.sending||this.dictation!=="off"||this.dragging){this.lastActivity=t,this.rest="idle",this.maybeFidget(t,e);return}this.nextFidget=0,this.rest=gf(t-this.lastActivity,e),this.rest!=="idle"&&this.stopWatching()},this.onResize=()=>{this.obstacleCache=null,this.schedulePlace()},this.obstacleCache=null,this.schedulePlace=()=>{this.frame||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.place()}))},this.onStore=t=>{if(t.rightPaneMode===this.pane)return;this.pane=t.rightPaneMode;const e=ra(this.spots,this.pane);if(this.sitting){this.returnSpot=e;return}this.spot=e,this.flyNext=!0,this.schedulePlace()},this.onPageHide=()=>{this.cancelDictation()},this.onVisibility=()=>{document.hidden&&this.onPageHide()},this.toggle=t=>{if(this.dragged){this.dragged=!1;return}const e=performance.now(),s=this.lastTap;if(this.lastTap=null,s&&t.detail&&e-s.at<qr&&Math.hypot(t.clientX-s.x,t.clientY-s.y)<24){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.onActivity(),!mt()&&this.owl?.gesture("hop",!0)&&this.pointerType!=="mouse"&&Ze(10);return}if(this.lastTap={at:e,x:t.clientX,y:t.clientY},this.tapTimer&&clearTimeout(this.tapTimer),!t.detail){this.tapOwl();return}this.tapTimer=setTimeout(()=>{this.tapTimer=null,this.lastTap=null,this.tapOwl()},qr)},this.onVisibilityChange=t=>{this.owlHidden=!!t.detail?.hidden,this.owlHidden&&this.collapse()},this.typeToMana=()=>{this.cancelDictation(),this.typing=!0,this.historyOpen=!1,this.show(),this.updateComplete.then(()=>{this.input?.focus(),this.grow()})},this.onOutside=t=>{if(t.composedPath().includes(this))return;const e=t.target?.closest?.("[data-row-key]");e?.dataset.rowKey&&(this.touched={key:e.dataset.rowKey,text:bn(e,200),at:Date.now(),...Number(e.dataset.manaThread)>0?{thread:Number(e.dataset.manaThread)}:{}}),(this.open||this.tapTimer)&&this.collapse(!1)},this.onSelection=()=>{const t=document.getSelection();if(!t||t.isCollapsed||!t.rangeCount)return;const e=t.anchorNode,s=e instanceof Element?e:e?.parentElement??null;if(!s||this.contains(s)||this.sitting&&!this.sitting.el?.contains(s))return;const i=t.toString().replace(/\s+/g," ").trim().slice(0,1e3);i.length<2||i===this.highlight?.text||(this.highlight={key:s.closest("[data-row-key]")?.dataset.rowKey??null,text:i,at:Date.now()})},this.onKey=t=>{const e=f.getState().settings,s=ge(e?.[fi])??ge(mi);if(!t.repeat&&Dn(s,t)){t.preventDefault(),this.owlHidden&&ai(!1),this.toggleDictation();return}const i=ge(e?.[Ra])??ge(La);if(!t.repeat&&Dn(i,t)){t.preventDefault(),this.owlHidden&&ai(!1),this.openFromKeyboard();return}if(t.key==="Escape"&&(this.dictation!=="off"||this.micOpening)){t.preventDefault(),this.cancelDictation();return}if(t.key==="Escape"&&(this.open||this.pointing||this.sitting||this.highlight)){t.preventDefault(),this.collapse();return}!this.open&&Date.now()<this.typeArmedUntil&&t.key.length===1&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&!oa(document.activeElement)&&(t.preventDefault(),this.typeArmedUntil=0,this.typeToMana(),this.updateComplete.then(()=>{this.input&&(this.input.value+=t.key,this.grow())}))},this.onInputKey=t=>{t.key==="Enter"&&!t.shiftKey&&!t.isComposing&&(t.preventDefault(),this.send(this.input?.value??""))},this.onInput=()=>{if(this.touch(),this.grow(),!this.input?.value.trim()||this.sending||this.dictation!=="off"){this.stopConversation();return}this.stopWatching(),this.lookAtInput(),this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.typingTimer=null,this.open&&this.input?.value.trim()&&document.activeElement===this.input&&!this.sending&&this.conversationGesture("tilt")},Ff)},this.revealStep=t=>{this.revealFrame=0;const e=this.reply,s=this.shown;if(s>=e.length){this.revealAt=0,this.setTalking(!1);return}const i=this.revealAt?Math.min(100,t-this.revealAt):16;this.revealAt=t;const n=e.length-s,o=n>Gr*Vr/1e3;if(t<this.pauseUntil&&!o){this.setTalking(!1),this.revealFrame=requestAnimationFrame(this.revealStep);return}this.revealCarry+=Math.max(Gr,n*1e3/Vr)*i/1e3;let a=s;for(;this.revealCarry>=1&&a<e.length;){this.revealCarry--;const l=e[a++],h=!/\S/.test(e[a]??" ");if(!(o||!h||!/[.!?,;:]/.test(l))){this.pauseUntil=t+(/[.!?]/.test(l)?Bf:Hf),this.revealCarry=0;break}}this.shown=a,this.setTalking(a<e.length&&t>=this.pauseUntil),this.sentenceBeat(e.slice(0,s),e.slice(0,a)),this.revealFrame=requestAnimationFrame(this.revealStep)},this.grow=()=>{const t=this.input;t&&(t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,Jr)}px`,t.style.overflowY=t.scrollHeight>Jr?"auto":"hidden",this.schedulePlace())},this.touch=()=>{this.onActivity(),this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>{if(this.sending||this.dictation!=="off"||document.activeElement===this.input&&this.input?.value)return this.touch();this.collapse()},kf)},this.onSubmit=t=>{t.preventDefault(),this.send(this.input?.value??"")},this.onPointerDown=t=>{if(this.pointerType=t.pointerType,t.button!==0)return;const e=!this.pointing&&!this.sending,s=t.pointerType!=="mouse"&&!mt()&&this.onHead(t);(e||s)&&this.startDrag(t,!0,e,s)},this.onBubbleDown=t=>{this.touch(),!(t.button!==0||this.pointing||this.sending)&&(t.target?.closest("input, textarea, button, a, select, [contenteditable], .mc-diff, .mc-reply, .mc-history, .mc-take-review")||this.startDrag(t,!1,!0,!1))},this.onPointerMove=t=>{const e=this.drag;if(!e||t.pointerId!==e.id){!e&&t.pointerType==="mouse"&&this.petMove(t,!1);return}if(e.talk||!e.slid&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<$f)return;if(e.slid=!0,e.long&&(clearTimeout(e.long),e.long=null),e.pet){if(this.petMove(t,!0))return;e.pet=!1,this.owl?.lookAt(null),e.dx=t.clientX-this.pos.x,e.dy=t.clientY-this.pos.y}if(!e.canMove)return;e.moved||window.getSelection()?.removeAllRanges(),!e.moved&&e.branch&&!e.flying&&(e.fly=setTimeout(()=>{this.drag===e&&(e.flying=!0,this.owl?.hold(!0))},Sf)),e.moved=!0,this.dragging=!0,this.endVisit(),this.endCome(!1);const s=this.viewport(),i=this.pos;this.pos=Hn({x:t.clientX-e.dx,y:t.clientY-e.dy},s,Xe(s)),e.branch&&(this.owl?.carry(this.pos.x-i.x,this.pos.y-i.y),this.shakeStep(e,t)),e.bo&&(this.bubble=ul({x:this.pos.x+e.bo.x,y:this.pos.y+e.bo.y},s,{width:hn(s),height:this.bubbleEl?.offsetHeight??120}))},this.onGlance=t=>{t.pointerType!=="touch"||!this.owner||this.rest!=="idle"||this.drag||this.sending||mt()||t.composedPath().includes(this)||(this.owl?.lookAt({x:t.clientX,y:t.clientY}),this.glanceTimer&&clearTimeout(this.glanceTimer),this.glanceTimer=setTimeout(()=>{this.glanceTimer=null,!this.typingTimer&&!this.drag&&this.owl?.lookAt(null)},Mf))},this.onContextMenu=t=>{if(t.preventDefault(),this.pointerType!=="mouse"||!this.avatarEl)return;const e=t;qm({x:e.clientX,y:e.clientY},this.avatarEl,[{label:"Type to Mana",run:()=>this.typeToMana()},{label:"Talk to Mana",run:()=>void this.toggleDictation()},...this.exchanges.length||this.mine?[{label:this.historyOpen&&this.open?"Hide chat history":"Chat history",run:()=>this.toggleHistory()}]:[],{label:"Hide owl",run:()=>ai(!0)}])},this.onPointerUp=t=>{const e=this.drag;if(!e||t.pointerId!==e.id)return;if(this.drag=null,this.stroke=null,e.fly&&clearTimeout(e.fly),e.long&&clearTimeout(e.long),e.talk){this.dragged=!0,setTimeout(()=>{this.dragged=!1},0),this.dictation==="listening"?this.finishDictation(!0):this.micOpening&&this.cancelDictation();return}if(e.touch&&e.slid&&this.owl?.lookAt(null),!e.moved){e.picked&&(this.owl?.hold(!1),this.dragging=!1),(e.picked||e.slid)&&(this.dragged=!0,setTimeout(()=>{this.dragged=!1},0));return}e.flying&&this.owl?.hold(!1),e.shaken&&this.owl?.gesture("dizzy",!0),this.dragging=!1,this.dragged=!0,setTimeout(()=>{this.dragged=!1},0);const s=this.viewport(),i=this.spot,n=Xe(s);this.spot=Nm(this.pos,Nr(s,this.obstacles(),n))?null:Om(this.pos,s,n);const o=this.spot?this.underAvatar():null;o&&this.highlight&&!o.text.includes(this.highlight.text)&&(this.highlight=null),o&&!this.sitting&&(this.returnSpot=i),this.setFocus(o),o?(this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=null,this.updateComplete.then(()=>{this.owl?.gesture("nod"),this.lookAtInput()})):(this.spots={...this.spots,[this.pane]:this.spot??"home"},ag(this.spots)),o&&!this.open?this.show():this.open||(this.typeArmedUntil=Date.now()+sg),this.schedulePlace()},this.endVisitLater=()=>{const t=this.trip?pn:this.arrivedAt+Rf+pn-performance.now();t>50?this.visitTimer=setTimeout(this.endVisitLater,t):this.endVisit()},this.endComeLater=()=>{if(this.trip){this.comeTimer=setTimeout(this.endComeLater,500);return}this.endCome()},this.tripStep=t=>{const e=this.trip;if(e){if(e.raf=0,t>=e.go){const s=Math.min(1,(t-e.go)/e.ms),i=.5-.5*Math.cos(Math.PI*s),n=e.off;if(e.off={x:e.from.x*(1-i),y:e.from.y*(1-i)-e.lift*Math.sin(Math.PI*i)},this.owl?.carry(e.off.x-n.x,e.off.y-n.y),this.applyTrip(),s>=1){this.endTrip();return}}e.raf=requestAnimationFrame(this.tripStep)}}}connectedCallback(){super.connectedCallback(),Um(),window.addEventListener("resize",this.onResize),window.addEventListener("scroll",this.schedulePlace,!0),window.addEventListener(On,this.onVisibilityChange),window.visualViewport?.addEventListener("resize",this.onResize),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("pagehide",this.onPageHide),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("pointermove",this.onActivity,{passive:!0}),document.addEventListener("pointermove",this.onWatch,{passive:!0}),document.addEventListener("pointerout",this.onPointerOut,{passive:!0}),document.addEventListener("pointerdown",this.onActivity,!0),document.addEventListener("pointerdown",this.onGlance,{capture:!0,passive:!0}),document.addEventListener("keydown",this.onActivity,!0),this.restTimer=setInterval(this.updateRest,1e3);const t=f.subscribe(this.onStore);this.unsubscribe=typeof t=="function"?()=>{t()}:null,this.schedulePlace()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.schedulePlace,!0),window.removeEventListener(On,this.onVisibilityChange),window.visualViewport?.removeEventListener("resize",this.onResize),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pagehide",this.onPageHide),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("pointermove",this.onActivity),document.removeEventListener("pointermove",this.onWatch),document.removeEventListener("pointerout",this.onPointerOut),document.removeEventListener("pointerdown",this.onActivity,!0),document.removeEventListener("pointerdown",this.onGlance,!0),document.removeEventListener("keydown",this.onActivity,!0),this.restTimer&&clearInterval(this.restTimer),this.unsubscribe?.(),this.unsubscribe=null,this.glanceTimer&&clearTimeout(this.glanceTimer),this.drag?.long&&clearTimeout(this.drag.long),this.drag?.fly&&clearTimeout(this.drag.fly),this.stopConversation();for(const t of[this.reactionTimer,this.doneTimer])t&&clearTimeout(t);this.frame&&cancelAnimationFrame(this.frame),this.trip?.raf&&cancelAnimationFrame(this.trip.raf),this.trip=null,this.stopReveal(),this.sitting?.el?.classList.remove("mana-companion-focus"),this.takeTimer&&clearTimeout(this.takeTimer),this.tapTimer&&clearTimeout(this.tapTimer),this.cancelDictation(),this.abort?.abort();for(const t of[this.slowTimer,this.idleTimer,this.chipTimer,this.visitTimer,this.comeTimer,this.stareTimer,this.lingerTimer])t&&clearTimeout(t);this.clearPointed()}playAnimation(t){if(!Di(t))return;this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=t,this.reactionTrigger++;const e=t in zr?zr[t]:8e3;this.reactionTimer=setTimeout(()=>{this.reaction=null,this.reactionTimer=null},e)}react(t,e=Qf){const s=Date.now();if(this.lastReaction?.state===t&&s-this.lastReaction.at<e){t==="happy"&&this.owl?.gesture(Qr[Math.floor(Math.random()*Qr.length)]);return}this.lastReaction={state:t,at:s},this.playAnimation(t)}doMove(t){if(t==="hop"||t==="nod"||t==="tilt"||t==="squint"||t==="ruffle"){this.owl?.gesture(t);return}if(t==="come"){this.comeOver();return}const e=t==="fly"?"flying":t;this.lastReaction={state:e,at:Date.now()},this.playAnimation(e)}stopWatching(){for(const t of[this.stareTimer,this.lingerTimer])t&&clearTimeout(t);this.stareTimer=this.lingerTimer=null,this.watching!==null&&this.owl?.lookAt(null),this.watching=null}maybeFidget(t,e){if(!this.open||this.sending||this.dictation!=="off"||this.dragging||this.reaction||this.trip||this.pointing||this.visiting||this.typingTimer||this.talking||t-this.lastTouched<Jf){this.nextFidget=0;return}if(!this.nextFidget){this.nextFidget=t+Math.random()*Xf;return}if(t<this.nextFidget||(this.nextFidget=t+gn[0]+Math.random()*(gn[1]-gn[0]),mt()))return;const s=(e?tg:Zf).filter(n=>n!==this.lastFidget),i=s[Math.floor(Math.random()*s.length)];this.owl?.gesture(i)&&(this.lastFidget=i)}viewport(){const t=window.visualViewport;return{width:document.documentElement.clientWidth||window.innerWidth,height:t?t.height+t.offsetTop:window.innerHeight}}obstacles(){const t=performance.now();if(this.obstacleCache&&t-this.obstacleCache.at<ig)return this.obstacleCache.rects;const e=[];for(const s of document.querySelectorAll("input:not([type=checkbox]):not([type=radio]):not([type=hidden]), textarea, [contenteditable='true']")){if(this.contains(s))continue;const i=s.getBoundingClientRect();i.width>0&&i.height>0&&_m(i)&&i.bottom>0&&i.top<window.innerHeight&&e.push(i)}return this.obstacleCache={at:t,rects:e},e}place(){if(this.dragging)return;const t=this.viewport();if(this.sitting?.key&&(!this.sitting.el?.isConnected||this.sitting.el.dataset.rowKey!==this.sitting.key)){this.sitting.el?.classList.remove("mana-companion-focus");const h=document.querySelector(`[data-row-key="${CSS.escape(this.sitting.key)}"]`);this.sitting.el=h,h?.classList.add("mana-companion-focus")}this.sitting&&this.focusView?.note&&f.getState().viewContext?.note!==this.focusView.note&&(this.sitting.el?.classList.remove("mana-companion-focus"),this.sitting.el=null);const e=this.coming?this.comeTarget(t):null,s=e?null:$s(this.pointing?.el,t)??$s(this.sitting?.el,t),i=s||e?null:$s(this.visiting,t),n=this.restingPlace(t),o=Xe(t),a=e??(s?Fr(s,t,o):i?Fr(i,t,o):n),l=this.flyNext||!!this.trip;if(this.flyNext=!1,(a.x!==this.pos.x||a.y!==this.pos.y)&&!(l&&this.flyTo(a))&&(this.cancelTrip(),this.pos={x:a.x,y:a.y}),this.open){const h=i?n:this.pos,u=this.bubbleEl?.offsetHeight??120,p=jm(h,t,{width:hn(t),height:u},s??void 0,o);(p.x!==this.bubble.x||p.y!==this.bubble.y)&&(this.bubble=p)}}comeTarget(t){const e=Xe(t),s=this.coming?.near,i=window.visualViewport,n=s&&s.x+mn+e<=t.width-U,o=s?{x:n?s.x+mn:s.x-mn-e,y:s.y-e/2}:{x:(t.width-e)/2,y:(i?.offsetTop??0)+((i?.height??t.height)-e)/2},a=jr({x:Math.round(o.x),y:Math.round(o.y)},t,this.obstacles(),e);return{x:Math.round(a.x),y:Math.round(a.y)}}restingPlace(t){const e=this.obstacles(),s=Xe(t),i=this.sitting&&!$s(this.sitting.el,t)?this.returnSpot:this.spot;return i?jr(Lm(i,t,s),t,e,s):Nr(t,e,s)}updated(){!this.owner&&(this.micOpening||this.dictation!=="off")&&this.cancelDictation(),this.open&&this.place()}toggleHistory(){this.historyOpen=!(this.historyOpen&&this.open),this.historyOpen&&!this.open&&this.show()}tapOwl(){this.micOpening||this.dictation!=="off"||this.reviewTake?this.toggleDictation():this.open&&this.typing?this.collapse():this.typeToMana()}show(){this.open=!0,this.touch(),this.updateComplete.then(()=>(this.place(),this.updateComplete)).then(()=>this.springBubble())}springBubble(){const t=this.bubbleEl;!this.open||!t?.animate||mt()||(t.style.transformOrigin=`${this.pos.x+this.size/2-this.bubble.x}px ${this.pos.y+this.size/2-this.bubble.y}px`,t.animate([{transform:"scale(0.4)",opacity:0},{transform:"scale(1.05)",opacity:1,offset:.6},{transform:"scale(0.98)",offset:.82},{transform:"none",opacity:1}],{duration:420,easing:"cubic-bezier(0.25, 0.8, 0.35, 1)"}))}openFromKeyboard(){!this.open||!this.typing||document.activeElement!==this.input?this.typeToMana():this.collapse()}collapse(t=!0){this.lastTap=null,this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.endCome(),this.pointing&&this.dismissPoint(),this.cancelDictation(),this.open=!1,this.typing=!1,this.historyOpen=!1,this.reviewTake="",this.input?.blur(),this.stopConversation(),this.revealAll(),t&&(this.highlight=null,this.touched=null,this.typeArmedUntil=0,document.getSelection()?.removeAllRanges()),t&&this.sitting&&(this.spot=this.returnSpot,this.setFocus(null),this.flyNext=!0,this.schedulePlace())}lookAtInput(){if(mt())return;const t=this.input?.getBoundingClientRect();t&&this.owl?.lookAt({x:t.left+t.width/2,y:t.top+t.height/2})}conversationGesture(t){return mt()||this.dragging||this.reaction||Date.now()-this.lastConversationGesture<Uf||!this.owl?.gesture(t)?!1:(this.lastConversationGesture=Date.now(),!0)}stopConversation(){this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=null,this.readingReply=!1,this.owl?.lookAt(null)}onReplyText(){if(this.readingReply||(this.readingReply=!0,this.requestUpdate()),!mt()){this.revealFrame||(this.revealFrame=requestAnimationFrame(this.revealStep));return}const t=this.reply.slice(0,this.shown);this.shown=this.reply.length,this.sentenceBeat(t,this.reply)}setTalking(t){t!==this.talking&&(this.talking=t,this.owl?.talk(t))}revealAll(){this.stopReveal(),this.shown=this.reply.length}stopReveal(){this.revealFrame&&cancelAnimationFrame(this.revealFrame),this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.setTalking(!1)}clearReply(){this.stopReveal(),this.reply="",this.shown=0}sentenceBeat(t,e){const s=(e.match(/[.!?](?:\s|$)/g)??[]).length,i=(t.match(/[.!?](?:\s|$)/g)??[]).length;s>i&&this.replyGestures<2&&this.conversationGesture(this.replyGestures===0?"nod":"ruffle")&&this.replyGestures++}view(){const t=f.getState(),e=t.rightPaneMode,s=e==="goals"?ta():null,i=Date.now(),n={pane:e,...e==="grocery"?{shoppingList:ea()}:{},tab:s,week:t.currentWeek??null,summary:t.viewContext?.summary??null,note:t.viewContext?.note??null,focus:this.sitting?{key:this.sitting.key,text:this.sitting.text,...this.sitting.thread?{thread:this.sitting.thread}:{}}:null,highlight:this.highlight&&i-this.highlight.at<Yr?{key:this.highlight.key,text:this.highlight.text}:null,touched:this.touched&&i-this.touched.at<zf?{key:this.touched.key,text:this.touched.text,...this.touched.thread?{thread:this.touched.thread}:{}}:null};return this.sitting&&this.focusView?{...n,...this.focusView,focus:n.focus,highlight:n.highlight,touched:null}:n}async send(t,e=!1){const s=performance.now(),i=t.replace(/\s+/g," ").trim();if(!i||this.sending)return;this.mine&&this.reply&&(this.exchanges=[...this.exchanges.slice(-19),{mine:this.mine,reply:this.reply}]),this.spoken=e,this.reviewTake="",this.historyOpen=!1,this.stopConversation(),this.replyGestures=0,this.input&&!e&&(this.input.value="",this.grow());const n=this.focusView?.note&&f.getState().viewContext?.note===this.focusView.note;(f.getState().rightPaneMode==="canvas"||n||this.lines.some(y=>y.kind==="draft"&&y.draft.noteFile))&&await ei();const o=this.pointing;this.abort?.abort();const a=this.abort=new AbortController;this.mine=i,this.clearReply(),this.lines=[],this.slow=!1,this.status="Thinking",this.sending=!0,this.touch();const l=f.getState(),h=af(i,{owner:this.owner,pane:l.rightPaneMode,openTasks:l.commitments.filter(y=>!y.done).map(y=>y.title)});if(h){await this.runFast(h,i,s);return}this.slowTimer=setTimeout(()=>{this.reply||(this.slow=!0)},vl);let u=!1,p=null,m=null,g=!1;const v=this.view();this.highlight=null;let x=!1;const A=()=>{if(x||this.abort!==a)return;x=!0,this.sending=!1,this.stopConversation(),this.abort=null,this.slowTimer&&clearTimeout(this.slowTimer),this.slowTimer=null,this.slow&&!this.reply&&!this.lines.length&&(this.lines=[{kind:"error",text:ne}]),this.slow=!1,this.lines.some(N=>N.kind==="error"||N.kind==="action"&&!N.action.ok)?this.react("surprised",2e4):!g&&m?this.doMove(m):!g&&p&&p!=="calm"&&!u&&this.react(p),o&&!u&&this.pointing===o&&this.endPointing(),this.touch()};try{for await(const y of Km({message:i,view:v},a.signal)){if(a.signal.aborted)return;y.type==="text"?(this.reply+=y.text,this.slow=!1,this.onReplyText()):y.type==="action"?(this.lines=[...this.lines,{kind:"action",action:y.action,until:Date.now()+un}],y.action.ok?(this.flashDone(),this.visit(y.action.refs),y.action.noteFile&&si(y.action.noteFile,y.action.noteChange),y.action.openNote&&na(y.action.openNote,this),y.action.shopping&&ii(y.action.shopping,this)):this.playAnimation("surprised"),this.armChips()):y.type==="draft"?this.lines=[...this.lines,{kind:"draft",draft:y.draft}]:y.type==="notes"?this.lines=[...this.lines,{kind:"notes",found:y.found}]:y.type==="confirm"?this.lines=[...this.lines.filter(N=>!(N.kind==="confirm"&&N.confirm.id===y.confirm.id)),{kind:"confirm",confirm:y.confirm}]:y.type==="notice"?this.lines=[...this.lines,{kind:"notice",text:y.text}]:y.type==="error"?(this.lines=[...this.lines,{kind:"error",text:y.error||ne}],this.slow=!1,this.playAnimation("surprised")):y.type==="point"?(u=!0,this.startPointing(y.ref,y.title)):y.type==="mood"?(p=y.mood,!m&&p!=="calm"&&!this.pointing&&(this.react(p),g=!0,this.slow=!1)):y.type==="move"?(m=y.move,this.doMove(m),g=!0,this.slow=!1):y.type==="done"&&A()}}finally{A()}}async runFast(t,e,s){this.highlight=null;let i;t.kind==="nav"?(wl(this,t.pane,t.tab),this.reply=t.note,this.onReplyText(),i=t.note):t.kind==="move"?(this.doMove(t.move),i=mt()&&t.move!=="sleepy"?"Stayed still: reduced motion is on.":t.note):i=await this.fastAdd(t),this.sending=!1,this.abort=null,this.touch(),i&&sa({kind:t.kind,note:i,matched:t.rule,ms:performance.now()-s,message:e})}async fastAdd(t){this.status="Adding";const e=f.getState(),s=ea(),i=t.target==="task"&&e.rightPaneMode==="goals"&&ta()==="week"?e.currentWeek:null,[n,o]=t.target==="task"?["/api/commitments",{title:t.text,goalId:null,keyResultId:null,...i?{week:i}:{}}]:t.target==="idea"?["/api/ideas",{text:t.text}]:["/api/grocery",{name:t.text,list:s}],a=await ia("POST",n,o),l=typeof a?.id=="number"&&a.id>0?a.id:null;if(!l)return this.lines=[{kind:"error",text:"Couldn't add that: can't reach Mana right now."}],this.react("surprised",2e4),null;const h=cf(t.target,t.text,{week:i,current:lf(new Date),list:s}),u=t.target==="task"?[{kind:"commitment",id:l}]:t.target==="idea"?[{kind:"idea",id:l}]:[],p=`${n}/${l}`,m=async()=>{const g=performance.now();return await ia("DELETE",p)?(t.target==="shopping"&&ii({list:s},this),sa({kind:"undo",note:`Undone: ${h.did}`,matched:t.rule,ms:performance.now()-g}),`Undone: ${h.shown}`):"Couldn't undo: can't reach Mana right now."};return this.lines=[{kind:"action",action:{id:`fast-${t.target}-${l}`,ok:!0,note:h.shown,undoable:!0,refs:u},until:Date.now()+un,undoFast:m}],this.flashDone(),this.visit(u),t.target==="shopping"&&ii({list:s},this),this.armChips(),h.did}flashDone(){this.justActed=!0,this.react("happy"),this.doneTimer&&clearTimeout(this.doneTimer),this.doneTimer=setTimeout(()=>{this.justActed=!1,this.doneTimer=null},1200)}armChips(){this.chipTimer&&clearTimeout(this.chipTimer);const t=Math.min(...this.lines.filter(e=>e.kind==="action"&&e.until>Date.now()).map(e=>e.until));Number.isFinite(t)&&(this.chipTimer=setTimeout(()=>{this.lines=[...this.lines],this.armChips()},Math.max(50,t-Date.now()+20)))}async undo(t){if(this.touch(),t.undoFast){const i=t.undoFast,n=t.action.id;this.lines=this.lines.map(a=>a===t?{...t,undone:"Undoing…"}:a);const o=await i();this.lines=this.lines.map(a=>a.kind==="action"&&a.action.id===n?{...a,undone:o}:a);return}const e=t.action.noteFile;e&&await ei();const s=await se("/api/companion/undo",{id:t.action.id});this.lines=this.lines.map(i=>i===t?{...t,undone:s?.note??"Couldn't undo: can't reach Mana right now."}:i),s?.ok&&e&&si(e,s.noteChange),s?.ok&&s.shopping&&ii(s.shopping,this)}async applyDraft(t){if(this.touch(),this.lines.some(n=>n.kind==="draft"&&n.draft.id===t&&n.busy))return;const e=this.lines.find(n=>n.kind==="draft"&&n.draft.id===t)?.draft.noteFile;this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===t?{...n,busy:!0}:n),e&&await ei();const s=await se("/api/companion/draft/apply",{id:t}),i=s?.action??{id:"",ok:!1,note:s?.note??"Couldn't apply: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===t?{kind:"action",action:i,until:Date.now()+un}:n),i.ok&&this.flashDone(),i.ok&&i.noteFile&&si(i.noteFile),this.armChips()}async discardDraft(t){this.touch(),this.lines=this.lines.map(s=>s.kind==="draft"&&s.draft.id===t?{...s,busy:!0}:s);const e=await se("/api/companion/draft/discard",{id:t});this.lines=this.lines.map(s=>s.kind==="draft"&&s.draft.id===t?{kind:"notice",text:e?.note??ne}:s)}async pickNote(t,e){if(this.touch(),this.lines.some(n=>n.kind==="notes"&&n.found===t&&n.busy))return;this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===t?{...n,busy:!0}:n);const s=await na(e.file,this),i={id:"",ok:s,note:s?`Opened: ${e.title}`:`Couldn't open ${e.title}: the notes pane didn't answer.`,undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===t?{kind:"action",action:i,until:0}:n)}async confirmNote(t){this.touch();const e=this.lines.find(n=>n.kind==="confirm"&&n.confirm.id===t);if(!e||e.busy)return;this.lines=this.lines.map(n=>n===e?{...e,busy:!0}:n),await ei();const s=await se("/api/companion/confirm/apply",{id:t}),i=s?.action??{id:"",ok:!1,note:s?.note??"Couldn't do that: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="confirm"&&n.confirm.id===t?{kind:"action",action:i,until:0}:n),i.ok?(this.flashDone(),si(e.confirm.noteFile)):this.react("surprised",2e4)}async discardConfirm(t){this.touch(),this.lines=this.lines.map(s=>s.kind==="confirm"&&s.confirm.id===t?{...s,busy:!0}:s);const e=await se("/api/companion/confirm/discard",{id:t});this.lines=this.lines.map(s=>s.kind==="confirm"&&s.confirm.id===t?{kind:"notice",text:e?.note??ne}:s)}async startPointing(t,e){this.endVisit(),this.endCome(!1),this.clearPointed();const s=f.getState();s.rightPaneMode!=="goals"&&s.setRightPaneMode("goals");const i=await Zr(Ur(t),2500);if(this.pointing={ref:t,title:e,el:i},!i)return;i.classList.add("mana-companion-pointed");const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;i.scrollIntoView({block:"center",behavior:n?"auto":"smooth"}),setTimeout(this.schedulePlace,n?0:350),this.flyNext=!0,this.schedulePlace()}clearPointed(){this.pointing?.el?.classList.remove("mana-companion-pointed")}endPointing(){this.clearPointed(),this.pointing=null,this.flyNext=!0,this.schedulePlace()}async dismissPoint(){const t=this.pointing;t&&(this.endPointing(),await se("/api/companion/point/dismiss",t.ref))}startDrag(t,e,s,i){s&&this.cancelTrip();const n=this.open?{x:this.bubble.x-this.pos.x,y:this.bubble.y-this.pos.y}:null,o=this.drag={id:t.pointerId,x0:t.clientX,y0:t.clientY,dx:t.clientX-this.pos.x,dy:t.clientY-this.pos.y,bo:n,moved:!1,branch:e,fly:null,flying:!1,canMove:s,touch:t.pointerType!=="mouse",pet:i,slid:!1,long:null,picked:!1,shaken:!1,talk:!1,shake:{x:t.clientX,y:t.clientY,at:performance.now(),sign:0,turns:[]}};e&&this.owl?.preload(),e&&o.touch?o.long=setTimeout(()=>this.holdToTalk(o),Kr):e&&s&&!mt()&&(o.long=setTimeout(()=>this.pickUp(o),Kr)),t.currentTarget.setPointerCapture?.(t.pointerId)}holdToTalk(t){t.long=null,!(this.drag!==t||t.moved||t.slid||this.sending||this.micOpening||this.dictation!=="off"||this.reviewTake)&&(t.talk=!0,t.pet=!1,Ze(12),this.toggleDictation())}pickUp(t){t.long=null,!(this.drag!==t||t.moved||t.slid)&&(t.picked=t.flying=!0,t.pet=!1,this.dragging=!0,this.endVisit(),this.stopWatching(),this.owl?.hold(!0),t.touch&&Ze(12))}shakeStep(t,e){const s=t.shake,i=performance.now(),n=e.clientX-s.x,o=e.clientY-s.y,a=Math.max(1,i-s.at);if(s.x=e.clientX,s.y=e.clientY,s.at=i,t.shaken||Math.hypot(n,o)/a*1e3<Af)return;const l=Math.abs(n)>=Math.abs(o)?Math.sign(n):2*Math.sign(o);s.sign&&l===-s.sign&&s.turns.push(i),s.sign=l,s.turns=s.turns.filter(h=>i-h<Pf),!(s.turns.length<Df||mt())&&(t.shaken=!0,t.touch&&Ze([18,40,18]))}petMove(t,e){if(!this.owl||mt())return!1;const s=(t.clientX-this.pos.x)/this.size,i=(t.clientY-this.pos.y)/this.size;if(!this.onHead(t))return this.stroke=null,e&&s>-.05&&s<1.05&&i>-.05&&i<1.05;const n=performance.now(),o=this.stroke;if(e&&this.owl.lookAt({x:t.clientX,y:t.clientY}),!o||n-o.at>400)return this.stroke={x:t.clientX,y:t.clientY,at:n,path:0,turns:0,sign:0},!0;const a=t.clientX-o.x,l=t.clientY-o.y,h=Math.hypot(a,l);if(h<1)return!0;if(h/Math.max(1,n-o.at)*1e3>Tf)return this.stroke=null,!1;const u=Math.abs(a)>=Math.abs(l)?Math.sign(a):2*Math.sign(l);return o.sign&&u===-o.sign&&o.turns++,Object.assign(o,{x:t.clientX,y:t.clientY,at:n,path:o.path+h,sign:u}),o.path<this.size*Cf||!(e||o.turns>0)||(o.path=0,this.owl.gesture("pet",!0)&&(this.onActivity(),e&&n-this.lastPetBuzz>Ef&&(this.lastPetBuzz=n,Ze(8)))),!0}onHead(t){const e=(t.clientX-this.pos.x)/this.size,s=(t.clientY-this.pos.y)/this.size;return e>.15&&e<.85&&s>.04&&s<.52}get size(){return Xe(this.viewport())}underAvatar(){const t=this.pos.x+this.size/2,e=this.pos.y+this.size/2;for(const s of document.elementsFromPoint(t,e)){if(!(s instanceof HTMLElement)||this.contains(s))continue;const i=s.closest("[data-row-key]");if(i)return{key:i.dataset.rowKey??null,text:bn(i,400),el:i,...Number(i.dataset.manaThread)>0?{thread:Number(i.dataset.manaThread)}:{}};const n=s.closest(eg),o=n?bn(n,If):"";return n&&o.length>=2?{key:null,text:o,el:n}:null}return null}setFocus(t){const e=s=>s?`${s.key??s.text}:${s.thread??""}`:"";if(t&&e(t)!==e(this.sitting)){for(const s of this.lines)s.kind==="draft"&&se("/api/companion/draft/discard",{id:s.draft.id}),s.kind==="confirm"&&se("/api/companion/confirm/discard",{id:s.confirm.id});this.mine="",this.clearReply(),this.lines=[],this.stopConversation()}if(this.sitting?.el?.classList.remove("mana-companion-focus"),this.focusView=null,t){const{pane:s,tab:i,week:n,summary:o,note:a}=this.view();this.focusView={pane:s,tab:i,week:n,summary:o,note:a},t.key?.startsWith("message:")&&(this.focusView={pane:"inbox",summary:"Inbox message",note:null}),t.key?.startsWith("chat:")&&(this.focusView={pane:"workshop",summary:"Workshop conversation",note:null})}this.sitting=t,t?.el.classList.add("mana-companion-focus")}async visit(t){const e=t?.[0];if(!e||this.pointing||this.dragging||mt())return;const s=await Zr(Ur(e),1500);!s||this.pointing||this.dragging||!$s(s,this.viewport())||(this.endCome(!1),this.visiting=s,this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=setTimeout(this.endVisitLater,pn),this.flyNext=!0,this.schedulePlace())}endVisit(){this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=null,this.visiting&&(this.visiting=null,this.flyNext=!0,this.schedulePlace())}comeOver(){if(mt()||this.dragging||this.pointing)return;const t=this.cursor;this.endVisit(),this.coming={near:t&&Date.now()-t.at<jf?{x:t.x,y:t.y}:null},this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=setTimeout(this.endComeLater,Nf),this.owl?.preload(),this.flyNext=!0,this.schedulePlace()}endCome(t=!0){this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=null,this.coming&&(this.coming=null,t&&(this.flyNext=!0,this.schedulePlace()))}flyTo(t){const e=this.owl,s=this.trip;if(mt()||!e?.canFly())return!1;if(s&&s.to.x===t.x&&s.to.y===t.y)return!0;const i={x:this.pos.x+(s?.off.x??0),y:this.pos.y+(s?.off.y??0)},n=Math.hypot(t.x-i.x,t.y-i.y),o=performance.now();if(!s&&n<_f)return!1;const a={x:i.x-t.x,y:i.y-t.y},l=s?Math.max(o,s.go):o+(e.airborne()?0:Of);return this.trip={to:t,from:a,off:a,lift:Math.min(140,n*.35),go:l,ms:Math.max(Wr[0],Math.min(Wr[1],n/Lf*1e3)),raf:s?.raf??0},s||(e.hold(!0,!0),this.avatarEl?.setAttribute("data-flying","")),this.pos={x:t.x,y:t.y},this.applyTrip(),this.trip.raf||(this.trip.raf=requestAnimationFrame(this.tripStep)),!0}applyTrip(){const t=this.trip;t&&this.avatarEl&&(this.avatarEl.style.transform=`translate(${t.off.x}px, ${t.off.y}px)`)}endTrip(){const t=this.trip;t&&(t.raf&&cancelAnimationFrame(t.raf),this.trip=null,this.arrivedAt=performance.now(),this.avatarEl?.style.removeProperty("transform"),this.avatarEl?.removeAttribute("data-flying"),this.owl?.hold(!1))}cancelTrip(){const t=this.trip;t&&(this.pos={x:this.pos.x+t.off.x,y:this.pos.y+t.off.y},this.endTrip())}async toggleDictation(){if(this.reviewTake){await this.send(this.reviewTake,!0);return}if(this.dictation==="writing")return;if(this.dictation==="listening")return this.finishDictation(!0);if(this.micOpening)return this.cancelDictation();if(this.sending)return;const t=++this.takeGeneration;this.typing=!1,this.historyOpen=!1,this.input?.blur(),oa(document.activeElement)&&document.activeElement.blur(),this.revealAll(),this.stopConversation(),this.lines=this.lines.filter(e=>e.kind!=="error"),this.micOpening=!0,this.open||this.show();try{await this.recorder.start({level:e=>this.avatarEl?.style.setProperty("--mc-level",String(e)),pause:()=>{t===this.takeGeneration&&this.finishDictation(!0)}})}catch{t===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"I can't hear you: the mic is blocked or unavailable. You can type instead."}],this.playAnimation("surprised"));return}finally{t===this.takeGeneration&&(this.micOpening=!1)}t!==this.takeGeneration||!this.recorder.active||(this.dictation="listening",this.pointerType!=="mouse"&&Ze(10),this.touch(),this.takeTimer=setTimeout(()=>void this.finishDictation(),Oa))}async finishDictation(t=!1){if(this.dictation!=="listening")return;const e=this.takeGeneration;this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing",this.avatarEl?.style.removeProperty("--mc-level");const s=this.sttAbort=new AbortController;let i="";try{const n=await this.recorder.stop();if(e!==this.takeGeneration)return;if(n&&"silent"in n){this.lines=[...this.lines,{kind:"error",text:ja(n.mic)}],this.playAnimation("surprised");return}if(i=n?await Fa(n.wav,s.signal):"",e!==this.takeGeneration)return;i?t||(this.reviewTake=i):this.lines=[...this.lines,{kind:"notice",text:"I didn't catch that. Tap to try again."}]}catch{e===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"Couldn't hear that clearly. Try again."}],this.playAnimation("surprised"))}finally{e===this.takeGeneration&&(this.sttAbort=null,this.dictation="off",this.touch())}e===this.takeGeneration&&t&&i&&this.send(i,!0)}async cancelDictation(){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.lastTap=null,this.takeGeneration++,this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.sttAbort?.abort(),this.sttAbort=null,this.micOpening=!1,this.dictation="off",this.avatarEl?.style.removeProperty("--mc-level"),await this.recorder.cancel()}renderDraft(t){const e={del:"Removed: ",add:"Added: ",same:"",gap:""};return r`<div class="mc-draft">
      <p class="mc-draft-label">${t.draft.label}</p>
      <div class="mc-diff">${t.draft.lines.map(s=>s.kind==="gap"?r`<p class="mc-diff-gap" aria-hidden="true">…</p>`:r`<p class="mc-diff-line" data-kind=${s.kind}><span class="mc-sr">${e[s.kind]}</span>${s.text||" "}</p>`)}</div>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!t.busy} @click=${()=>void this.applyDraft(t.draft.id)}>Apply</button>
        <button type="button" class="mc-undo" ?disabled=${!!t.busy} @click=${()=>void this.discardDraft(t.draft.id)}>Not now</button>
      </p>
    </div>`}renderNotes(t){const e=t.found.query;return r`<div class="mc-draft" data-kind="notes">
      <p class="mc-draft-label">${t.found.partial?`Nothing has all of “${e}”. These come close:`:`Notes for “${e}”:`}</p>
      <div class="mc-picks">${t.found.hits.map(s=>r`<button type="button" class="mc-pick" ?disabled=${!!t.busy} @click=${()=>void this.pickNote(t.found,s)}>${s.title}</button>`)}</div>
    </div>`}renderConfirm(t){const e=t.confirm;return r`<div class="mc-draft" data-kind="confirm">
      <p class="mc-draft-label">${e.label}</p>
      <p class="mc-confirm-text">${e.text}</p>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!t.busy} @click=${()=>void this.confirmNote(e.id)}>${t.busy?e.kind==="publish"?"Publishing…":"Unpublishing…":e.button}</button>
        <button type="button" class="mc-undo" ?disabled=${!!t.busy} @click=${()=>void this.discardConfirm(e.id)}>Not now</button>
      </p>
    </div>`}renderLine(t){if(t.kind==="draft")return this.renderDraft(t);if(t.kind==="notes")return this.renderNotes(t);if(t.kind==="confirm")return this.renderConfirm(t);if(t.kind!=="action")return r`<p class="mc-line" data-kind=${t.kind}><span>${Xr(t.text)}</span></p>`;const e=t.action.ok&&t.action.undoable&&!t.undone&&t.until>Date.now(),s=t.action.ok&&!t.undone&&t.action.url&&/^https:\/\//.test(t.action.url)?t.action.url:null;return r`<p class="mc-line" data-kind=${t.action.ok?"action":"error"}>
      <span>${t.undone??t.action.note}${s?r` <a class="mc-link" href=${s} target="_blank" rel="noopener noreferrer">View post</a>`:c}</span>
      ${e?r`<button type="button" class="mc-undo" @click=${()=>void this.undo(t)}>Undo</button>`:c}
    </p>`}render(){if(!this.owner||this.owlHidden)return c;const t=this.sending?"thinking":this.justActed?"done":this.pointing?"pointing":"idle",e=this.highlight&&Date.now()-this.highlight.at<Yr?this.highlight:null,s=bf({override:this.animationState,dictation:this.dictation,sending:this.sending&&!this.readingReply,reaction:this.reaction,curious:this.rest==="idle"&&!!(this.pointing||this.visiting||this.sitting||e||this.dragging),open:this.open,rest:this.rest}),i=this.pointing&&!this.pointing.el?r`<p class="mc-source">${this.pointing.title}</p>`:c;return r`
      ${this.open||this.pointing?r`
        <div class="mc-bubble" role="dialog" aria-label="Mana" ?data-dragging=${this.dragging} style="left:${this.bubble.x}px;top:${this.bubble.y}px;width:${hn(this.viewport())}px;max-height:${Math.max(80,this.viewport().height-2*U)}px;${this.open?"":"display:none"}"
          @pointerdown=${this.onBubbleDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp} @keydown=${this.touch}>
          ${this.mine&&!this.spoken&&!this.historyOpen?r`<p class="mc-mine">${this.mine}</p>`:c}
          ${i}
          ${this.shown&&!this.historyOpen?r`<p class="mc-reply" aria-live="polite">${Xr(this.reply.slice(0,this.shown).trim(),this.shown<this.reply.length)}</p>`:c}
          ${this.sending&&!this.reply&&!this.slow?r`<p class="mc-status" role="status">${this.status}<span class="mc-dots"></span></p>`:c}
          ${this.slow?r`<p class="mc-line" data-kind="error"><span>${ne}</span></p>`:c}
          ${this.lines.map(n=>this.renderLine(n))}
          ${this.micOpening||this.dictation!=="off"||this.reviewTake?r`<div class="mc-voice">
            <span role="status">${this.micOpening?"Opening mic…":this.dictation==="listening"?"Listening…":this.reviewTake?"Ready to send":"Thinking…"}</span>
          </div>`:c}
          ${this.historyOpen?r`<section class="mc-history" aria-label="Chat history">
            ${[...this.exchanges,...this.mine?[{mine:this.mine,reply:this.reply}]:[]].map(n=>r`<div class="mc-exchange"><p class="mc-mine">${n.mine}</p><p>${n.reply}</p></div>`)}
          </section>`:c}
          <form class="mc-form" @submit=${this.onSubmit}>
            <textarea class="mc-input" rows="1" enterkeyhint="send" autocomplete="off" maxlength="2000" aria-label="Say something to Mana"
              placeholder="Say something to Mana"
              @input=${this.onInput} @keydown=${this.onInputKey}></textarea>
            <div class="mc-field-actions">
              <button type="submit" class="mc-send" aria-label="Send message" ?disabled=${this.sending}>${ng}</button>
              <button type="button" class="mc-tool mc-mic" data-state=${this.dictation} aria-label=${this.dictation==="listening"?"Stop and send":this.reviewTake?"Send recording":"Talk to Mana"}
              ?disabled=${this.dictation==="writing"||this.micOpening||this.sending} @click=${()=>void this.toggleDictation()}>${og}</button>
            </div>
          </form>
        </div>`:c}
      <button type="button" class="mc-avatar" data-state=${t} data-animation=${s} data-voice=${this.micOpening?"opening":this.dictation} ?data-dragging=${this.dragging} aria-label=${this.dictation==="listening"?"Stop and send":this.micOpening?"Cancel recording":"Type to Mana"} aria-expanded=${this.open?"true":"false"}
        style=${Pm({left:`${this.pos.x}px`,top:`${this.pos.y}px`,"--mc-size":`${this.size}px`})} @click=${this.toggle} @contextmenu=${this.onContextMenu}
        @pointerdown=${this.onPointerDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp}
        @pointerenter=${this.onHover}>
        <mana-owl .state=${s} .trigger=${this.reactionTrigger}></mana-owl>
      </button>
    `}};L([b({type:Boolean})],I.prototype,"owner",2);L([b()],I.prototype,"avatar",2);L([b({attribute:"animation-state"})],I.prototype,"animationState",2);L([d()],I.prototype,"reaction",2);L([d()],I.prototype,"reactionTrigger",2);L([d()],I.prototype,"rest",2);L([d()],I.prototype,"open",2);L([d()],I.prototype,"sending",2);L([d()],I.prototype,"mine",2);L([d()],I.prototype,"spoken",2);L([d()],I.prototype,"typing",2);L([d()],I.prototype,"owlHidden",2);L([d()],I.prototype,"reviewTake",2);L([d()],I.prototype,"historyOpen",2);L([d()],I.prototype,"exchanges",2);L([d()],I.prototype,"reply",2);L([d()],I.prototype,"lines",2);L([d()],I.prototype,"slow",2);L([d()],I.prototype,"status",2);L([d()],I.prototype,"pointing",2);L([d()],I.prototype,"pos",2);L([d()],I.prototype,"bubble",2);L([d()],I.prototype,"justActed",2);L([d()],I.prototype,"spot",2);L([d()],I.prototype,"dragging",2);L([d()],I.prototype,"visiting",2);L([d()],I.prototype,"sitting",2);L([d()],I.prototype,"shown",2);L([d()],I.prototype,"highlight",2);L([Y(".mc-input")],I.prototype,"input",2);L([Y(".mc-bubble")],I.prototype,"bubbleEl",2);L([Y("mana-owl")],I.prototype,"owl",2);L([d()],I.prototype,"dictation",2);L([d()],I.prototype,"micOpening",2);L([Y(".mc-avatar")],I.prototype,"avatarEl",2);I=L([w("mana-companion")],I);function Xr(t,e=!1){return(e&&(t.match(/\*/g)?.length??0)%2?`${t}*`:t).split(/\*([^*\n]+)\*/g).map((i,n)=>n%2?r`<em>${i}</em>`:i)}function Zr(t,e){const s=()=>{const i=document.querySelector(`[data-row-key="${CSS.escape(t)}"]`);return i&&i.getClientRects().length?i:null};return new Promise(i=>{const n=performance.now(),o=()=>{const a=s();a||performance.now()-n>e?i(a):requestAnimationFrame(o)};o()})}function ta(){try{const t=localStorage.getItem(xl);return t==="ideas"||t==="goals"?t:"week"}catch{return"week"}}function ea(){try{return localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery"}catch{return"grocery"}}function sa(t){se("/api/companion/fast",{...t,ms:Math.round(t.ms)})}async function ia(t,e,s){try{const i=await fetch(e,{method:t,...s===void 0?{}:{headers:{"content-type":"application/json"},body:JSON.stringify(s)},signal:AbortSignal.timeout?.(vl)});return i.ok?await i.json().catch(()=>({})):null}catch{return null}}async function ei(){const t=[];window.dispatchEvent(new CustomEvent("mana:notes-settle",{detail:{wait:e=>{t.push(e)}}})),t.length&&await Promise.race([Promise.allSettled(t),new Promise(e=>setTimeout(e,3e3))])}function wl(t,e,s=null){if(s){try{localStorage.setItem(xl,s)}catch{}document.querySelector(`planner-tabs [data-planner-tab="${s}"]`)?.click()}t.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:e},bubbles:!0,composed:!0}));const i=f.getState();i.rightPaneMode!==e&&i.setRightPaneMode(e)}async function na(t,e){const s=()=>{let n=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:t,ack:()=>{n=!0}}})),n};if(wl(e,"canvas"),s())return!0;const i=performance.now();return new Promise(n=>{const o=()=>{s()?n(!0):performance.now()-i>4e3?n(!1):setTimeout(o,100)};setTimeout(o,50)})}function si(t,e){window.dispatchEvent(new CustomEvent("mana:note-changed",{detail:{file:t,change:e}}))}function bn(t,e){return(t.innerText||t.textContent||"").replace(/\s+/g," ").trim().slice(0,e)}function oa(t){return t?t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement?!0:t instanceof HTMLElement&&t.isContentEditable:!1}function $s(t,e){if(!t?.isConnected||!t.getClientRects().length)return null;const s=t.getBoundingClientRect();return s.bottom>0&&s.top<e.height?s:null}function mt(){return!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches}function Ze(t){try{navigator.vibrate?.(t)}catch{}}function rg(){try{const t=JSON.parse(localStorage.getItem(yl)||"null");if(!t||typeof t!="object")return{};const e=i=>!!i&&Number.isFinite(i.xr)&&Number.isFinite(i.yr);if(e(t))return{"*":{xr:t.xr,yr:t.yr}};const s={};for(const[i,n]of Object.entries(t))(n==="home"||e(n))&&(s[i]=n==="home"?n:{xr:n.xr,yr:n.yr});return s}catch{return{}}}function ra(t,e){const s=t[e]??t["*"];return s&&s!=="home"?s:null}function ag(t){try{localStorage.setItem(yl,JSON.stringify(t))}catch{}}async function ii(t,e){e.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"grocery"},bubbles:!0,composed:!0}));const s=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:shopping-changed",{detail:{...t,ack:()=>{o=!0}}})),o};if(s())return;const i=f.getState();i.rightPaneMode!=="grocery"&&i.setRightPaneMode("grocery");const n=performance.now();await new Promise(o=>{const a=()=>{s()||performance.now()-n>4e3?o():setTimeout(a,100)};setTimeout(a,50)})}new Map(Object.entries({goals:"goals",week:"goals",ideas:"goals","north-stars":"goals",grocery:"grocery",finance:"finance",circle:"circle",learn:"learn","been-to":"been-to",office:"office",projects:"office",inbox:"office",bus:"office",guests:"guests",newsroom:"newsroom",notes:"canvas",me:"*",settings:"*"}));new Map(Object.entries({"key-results":"goals",commitments:"goals",planner:"goals"}));Promise.resolve(!1);function vn(t){return 0}function lg(t){const{anchor:e}=t,s=document.createElement("div");s.className="fixed z-[1000] rounded-2xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(e).fontFamily,s.style.width=`${Math.min(320,window.innerWidth-16)}px`,s.setAttribute("role","menu"),s.setAttribute("aria-label","Switch app"),document.body.appendChild(s);let i=!1;const n=(v=!1)=>{i||(i=!0,document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",u,!0),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",l),vt(c,s),s.remove(),t.onClose(),v&&e.isConnected&&e.focus({preventScroll:!0}))},o=v=>{!v.composedPath().includes(s)&&!v.composedPath().includes(e)&&n()},a=v=>{(!(v.target instanceof Node)||!s.contains(v.target))&&n()},l=()=>n(),h=()=>[...s.querySelectorAll("a")],u=v=>{if(v.key==="Escape")v.preventDefault(),v.stopPropagation(),n(!0);else if(v.key==="Tab")n(!0);else if(["ArrowDown","ArrowUp","Home","End"].includes(v.key)&&s.contains(document.activeElement)){v.preventDefault();const x=h(),A=x.indexOf(document.activeElement);x[v.key==="Home"?0:v.key==="End"?x.length-1:(A+(v.key==="ArrowUp"?-1:1)+x.length)%x.length]?.focus()}};vt(r`${t.entries.map(v=>r`
    <a role="menuitem" href=${v.href}
      aria-current=${v.current?"page":c}
      class="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-hover focus-visible:bg-hover outline-none ${v.current?"text-ink font-semibold bg-active":""}"
      @click=${()=>{t.onSelect(v),n()}}>
      <sc-icon name="lucide-${v.icon}" class="w-5 h-5 shrink-0"></sc-icon>
      <span class="flex-1">${v.label}</span>
      ${v.current?r`<sc-icon name="lucide-check" class="w-4 h-4"></sc-icon>`:c}
    </a>`)} `,s);const p=e.getBoundingClientRect(),m=s.getBoundingClientRect();s.style.maxHeight=`${Math.max(48,window.innerHeight-p.bottom-16)}px`,s.style.left=`${Math.max(8,Math.min(p.left,window.innerWidth-m.width-8))}px`,s.style.top=`${Math.min(p.bottom+6,window.innerHeight-56)}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",u,!0),window.addEventListener("scroll",a,!0),window.addEventListener("resize",l);const g=s.querySelector('[aria-current="page"]')||h()[0];return g&&(s.scrollTop=Math.max(0,g.offsetTop-(s.clientHeight-g.offsetHeight)/2),g.focus({preventScroll:!0})),()=>n()}var cg=Object.defineProperty,dg=Object.getOwnPropertyDescriptor,st=(t,e,s,i)=>{for(var n=i>1?void 0:i?dg(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(i?a(e,s,n):a(n))||n);return i&&n&&cg(e,s,n),n};const Te=[{key:"goals",label:"Goals",icon:"target"},{key:"grocery",label:"Shopping",icon:"shopping-cart"},{key:"finance",label:"Finance",icon:"wallet"},{key:"circle",label:"Circles",icon:"circle"},{key:"learn",label:"Learn",icon:"graduation-cap"},{key:"been-to",label:"Been to",icon:"globe"},{key:"office",label:"Projects",icon:"briefcase",ownerOnly:!0},{key:"publisher",label:"Publisher",icon:"megaphone",ownerOnly:!0},{key:"newsroom",label:"The office",icon:"newspaper",ownerOnly:!0},{key:"canvas",label:"Notes",icon:"file-text"},{key:"guests",label:"Guests",icon:"user-plus",ownerOnly:!0},{key:"notify",label:"Notifications",icon:"bell"},{key:"tools",label:"Tools",icon:"layout-grid"}],me={"been-to":"personal",goals:"personal",grocery:"personal",finance:"personal",circle:"personal",learn:"personal",office:"studio",publisher:"studio",newsroom:"studio",canvas:"studio",guests:"workspace",notify:"workspace",tools:"workspace",inbox:"personal"},hg={"been-to":"var(--nsc-teal)",goals:"#3b82f6",grocery:"#3b82f6",finance:"#3b82f6",circle:"#3b82f6",learn:"#3b82f6",office:"#f43f5e",publisher:"#f43f5e",newsroom:"#f43f5e",canvas:"#f43f5e",guests:"#10b981",notify:"#10b981",inbox:"#3b82f6",tools:"var(--ink)"};let P=class extends T{constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.themeMode="auto",this.themeTimer=null,this.menuOpen=!1,this.toolSwitcherOpen=!1,this.accountPortal=null,this.accountAnchor=null,this.accountUp=!1,this.navTooltip=null,this.navTooltipAnchor=null,this.showNavTooltip=t=>{if(t instanceof PointerEvent&&t.pointerType!=="mouse")return;const e=t.target.closest("button");if(!e?.closest(".mana-sidebar.is-collapsed")||this.menuOpen)return;const s=e.getAttribute("aria-label");if(!s||this.navTooltipAnchor===e)return;this.hideNavTooltip();const i=document.createElement("div");i.id="mana-nav-tooltip",i.className="mana-nav-tooltip",i.setAttribute("role","tooltip"),i.textContent=s,document.body.appendChild(i),this.navTooltip=i,this.navTooltipAnchor=e,e.setAttribute("aria-describedby",`${e.getAttribute("aria-describedby")||""} ${i.id}`.trim());const n=e.getBoundingClientRect(),o=i.getBoundingClientRect();i.style.left=`${Math.max(8,Math.min(n.right+8,window.innerWidth-o.width-8))}px`,i.style.top=`${Math.max(8,Math.min(n.top+(n.height-o.height)/2,window.innerHeight-o.height-8))}px`},this.leaveNavTooltip=t=>{t.relatedTarget instanceof Node&&this.navTooltipAnchor?.contains(t.relatedTarget)||this.hideNavTooltip()},this.hideNavTooltip=()=>{if(this.navTooltipAnchor){const t=(this.navTooltipAnchor.getAttribute("aria-describedby")||"").split(/\s+/).filter(e=>e&&e!=="mana-nav-tooltip");t.length?this.navTooltipAnchor.setAttribute("aria-describedby",t.join(" ")):this.navTooltipAnchor.removeAttribute("aria-describedby")}this.navTooltip?.remove(),this.navTooltip=null,this.navTooltipAnchor=null},this.closeAccount=()=>{this.menuOpen=!1,this.accountPortal&&(vt(c,this.accountPortal),this.accountPortal.remove(),this.accountPortal=null)},this.onShellKey=t=>{if((t.metaKey||t.ctrlKey)&&(t.key==="k"||t.key==="K")){t.preventDefault(),this.searchOpen=!this.searchOpen;return}if(t.key==="Escape"){if(this.hideNavTooltip(),this.drawerOpen){this.drawerOpen=!1;return}this.menuOpen&&(this.closeAccount(),this.accountAnchor?.focus())}},this.onAccountOutside=t=>{this.menuOpen&&!t.composedPath().includes(this.accountAnchor)&&!t.composedPath().includes(this.accountPortal)&&this.closeAccount()},this.railCollapsed=localStorage.getItem("cockpit.rail_collapsed")==="1",this.searchOpen=!1,this.drawerOpen=!1,this.sidebarWidth=P.loadSidebarWidth(),this.mobileTab="ops",this.demoHintDismissed=localStorage.getItem("mana.hint.reset_seen")==="1",this.navOrder=P.loadNavOrder(),this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.navDragAxis="y",this.navPress=null,this.justNavDragged=!1,this.orderedNavKeys=[],this.me=null,this.toolRoute=ms(location.hash),this.splitPct=P.INITIAL_SPLIT,this.dragStartX=0,this.dragStartPct=P.DEFAULT_SPLIT,this.splitByMode={},this.openedPane=null,this.cacheOpenId=0,this.paneEpoch=0,this.onCacheStale=t=>{t.detail?.openId!==this.cacheOpenId||!this.openedPane||(this.cacheOpenId=vn(this.openedPane),this.paneEpoch++)},this.onAgentFollow=t=>{t.detail?.stay||this.standaloneTool&&this.standaloneTool!=="goals"||f.getState().rightPaneMode!=="goals"&&this.setRightPaneMode("goals")},this.onHashChange=()=>{if(this.dismissSwitcher?.(),this.toolRoute=ms(location.hash),this.toolRoute){const t=f.getState();t.rightPaneMode!==this.toolRoute.mode&&t.setRightPaneMode(this.toolRoute.mode),this.mobileTab="ops"}},this.rowNav=new Ll(this,{selector:"[data-row-key]",getKey:()=>f.getState().focusedRowKey,setKey:t=>f.getState().setFocusedRowKey(t),onToggle:t=>{const[e,s]=t.split(":"),i=Number(s);if(!Number.isFinite(i))return;const n=f.getState();if(e==="kr"){const o=n.goals.flatMap(a=>a.keyResults??[]).find(a=>a.id===i);o&&n.updateKeyResult(i,{done:!o.done})}else if(e==="commit"){const o=n.commitments.find(a=>a.id===i);o&&n.updateCommitment(i,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const t=f.getState();t.loadThreads(),t.currentThreadId!=null&&t.loadMessages(t.currentThreadId),t.loadGoals(),t.loadCommitments(),t.loadNotifications()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=t=>{if(t.button===0){t.preventDefault();try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}this.dragStartX=t.clientX,this.dragStartPct=this.splitPct,window.addEventListener("pointermove",this.onDividerMove),window.addEventListener("pointerup",this.onDividerUp),window.addEventListener("pointercancel",this.onDividerUp),document.body.classList.add("mana-dragging-panes"),document.body.style.userSelect="none"}},this.onDividerMove=t=>{const e=this.querySelector("main");if(!e)return;const s=e.getBoundingClientRect(),i=s.width;if(i<=0||Math.abs(t.clientX-this.dragStartX)<=3)return;const n=Math.min(40,P.MIN_PANE_PX/i*100),o=(t.clientX-s.left)/i*100;o<n/2?this.splitPct=0:o>100-n/2?this.splitPct=100:this.splitPct=Math.max(n,Math.min(100-n,o))},this.onDividerUp=()=>{window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.saveSplit()},this.onThreadOpen=async t=>{this.drawerOpen=!1;const{id:e,tool:s}=t.detail,i=s;i&&Te.some(n=>n.key===i)&&this.canOpenPane(i)&&i!==f.getState().rightPaneMode&&this.setRightPaneMode(i),await this.revealChat(),await f.getState().selectThread(e)},this.onRevealChat=()=>{this.revealChat()},this.onSidebarResizeDown=t=>{t.preventDefault();const e=t.clientX,s=this.sidebarWidth,i=o=>{this.sidebarWidth=Math.max(P.SIDEBAR_MIN,Math.min(P.SIDEBAR_MAX,s+o.clientX-e))},n=()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),document.body.style.userSelect="",document.body.style.cursor="";try{localStorage.setItem("cockpit.sidebar_width",String(this.sidebarWidth))}catch{}};document.body.style.userSelect="none",document.body.style.cursor="col-resize",window.addEventListener("pointermove",i),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n)},this.toggleRail=()=>{this.railCollapsed=!this.railCollapsed;try{localStorage.setItem("cockpit.rail_collapsed",this.railCollapsed?"1":"0")}catch{}},this.dismissDemoHint=()=>{try{localStorage.setItem("mana.hint.reset_seen","1")}catch{}this.demoHintDismissed=!0},this.showToolSwitcher=t=>{if(this.toolSwitcherOpen){this.dismissSwitcher?.();return}this.closeAccount();const e=f.getState().rightPaneMode;this.toolSwitcherOpen=!0,this.dismissSwitcher=lg({anchor:t.currentTarget,entries:f.getState().tools.filter(s=>s.type!=="view"||s.panel).map(s=>{const i=ua(s);return{label:s.label||s.name,icon:s.icon||"layout-grid",href:i||s.target,external:!i,current:this.mobileTab!=="chat"&&s.name===e}}),onSelect:s=>{s.external||(this.mobileTab="ops")},onClose:()=>{this.toolSwitcherOpen=!1,this.dismissSwitcher=void 0}})},this.onNavPointerDown=(t,e,s)=>{t.pointerType==="mouse"&&t.button!==0||(this.navPress={key:e,axis:s,x:t.clientX,y:t.clientY},window.addEventListener("pointermove",this.onNavPointerMove),window.addEventListener("pointerup",this.onNavPointerUp))},this.onNavPointerMove=t=>{if(this.navPress){if(!this.navDragKey){const e=this.navPress.axis==="y"?Math.abs(t.clientY-this.navPress.y):Math.abs(t.clientX-this.navPress.x),s=this.navPress.axis==="y"?Math.abs(t.clientX-this.navPress.x):Math.abs(t.clientY-this.navPress.y);if(e>6&&e>=s)this.navDragKey=this.navPress.key,this.navDragAxis=this.navPress.axis;else return}this.onNavDragMove(t)}},this.onNavPointerUp=()=>{window.removeEventListener("pointermove",this.onNavPointerMove),window.removeEventListener("pointerup",this.onNavPointerUp),this.navPress=null,this.navDragKey&&(this.justNavDragged=!0,this.endNavDrag(),setTimeout(()=>{this.justNavDragged=!1},50))}}static loadSidebarWidth(){const t=Number(localStorage.getItem("cockpit.sidebar_width"));return Number.isFinite(t)&&t>0?Math.max(P.SIDEBAR_MIN,Math.min(P.SIDEBAR_MAX,t)):240}static loadNavOrder(){try{const t=JSON.parse(localStorage.getItem("cockpit.nav_order")||"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}get standaloneTool(){return this.toolRoute?.standalone?this.toolRoute.mode:null}connectedCallback(){super.connectedCallback();const t=f.getState();if(!location.hash){const e=matchMedia("(max-width: 1023px)").matches?"tools":t.rightPaneMode;history.replaceState(null,"",Hi(e)),this.toolRoute=ms(location.hash)}this.toolRoute&&t.setRightPaneMode(this.toolRoute.mode),t.loadSettings().then(()=>this.applyTheme()),t.loadThreads(),t.loadTools(),t.loadNotifications(),this.notifTimer=setInterval(()=>void f.getState().loadNotifications(),6e4),this.fetchNavOrder(),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e&&(this.me=e),e?.env==="dev"&&_t(()=>import("./dev-marker-JvOCqt4R.js"),[]).then(s=>s.showDevMarker())}).catch(()=>{}),this.unsubSettings=j(this,f,e=>e.settings),this.unsubRightPaneMode=f.subscribe((e,s)=>{if(e.rightPaneMode!==s.rightPaneMode){if(this.toolRoute?.mode!==e.rightPaneMode){const i=Hi(e.rightPaneMode);location.hash!==i&&history.pushState(null,"",i),this.toolRoute=ms(i)}this.requestUpdate()}}),this.unsubTools=j(this,f,e=>e.tools),this.unsubNotif=j(this,f,e=>e.notificationsUnread),window.addEventListener("settings-close",this.onSettingsClose),document.addEventListener("keydown",this.onShellKey),document.addEventListener("mana-reveal-chat",this.onRevealChat),document.addEventListener("pointerdown",this.onAccountOutside),document.addEventListener("scroll",this.closeAccount,!0),window.addEventListener("resize",this.closeAccount),document.addEventListener("scroll",this.hideNavTooltip,!0),window.addEventListener("resize",this.hideNavTooltip),this.loadSplits(),this.splitPct=this.splitFor(f.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible),window.addEventListener("hashchange",this.onHashChange),document.addEventListener("mana-agent-follow",this.onAgentFollow),window.addEventListener("mana-cache-stale",this.onCacheStale)}canOpenPane(t){const e=this.me?.role==="owner";return Bl(t,e)&&(!f.getState().tools.find(s=>s.name===t)?.ownerOnly||e)}disconnectedCallback(){super.disconnectedCallback(),this.themeTimer&&clearTimeout(this.themeTimer),this.unsubSettings?.(),this.unsubRightPaneMode?.(),this.unsubTools?.(),this.unsubNotif?.(),this.notifTimer&&clearInterval(this.notifTimer),km(),document.removeEventListener("mana-agent-follow",this.onAgentFollow),window.removeEventListener("mana-cache-stale",this.onCacheStale),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("keydown",this.onShellKey),document.removeEventListener("mana-reveal-chat",this.onRevealChat),document.removeEventListener("pointerdown",this.onAccountOutside),document.removeEventListener("scroll",this.closeAccount,!0),window.removeEventListener("resize",this.closeAccount),document.removeEventListener("scroll",this.hideNavTooltip,!0),window.removeEventListener("resize",this.hideNavTooltip),this.hideNavTooltip(),this.closeAccount(),this.dismissSwitcher?.(),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),window.removeEventListener("hashchange",this.onHashChange),window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll(),this.menuOpen&&this.paintAccountMenu(),(!this.railCollapsed||!this.navTooltipAnchor?.isConnected)&&this.hideNavTooltip()}clampSplit(t){return Math.max(0,Math.min(100,t))}get chatCollapsed(){return this.splitPct<=0}get opsCollapsed(){return this.splitPct>=100}splitFor(t){return this.splitByMode[t]??this.legacySplit??P.INITIAL_SPLIT}loadSplits(){try{const t=localStorage.getItem(P.SPLITS_KEY);if(t){const s=JSON.parse(t);for(const[i,n]of Object.entries(s))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[i]=this.clampSplit(n));return}return}catch{}}saveSplit(){const t=f.getState().rightPaneMode;this.splitByMode[t]=this.splitPct;try{localStorage.setItem(P.SPLITS_KEY,JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const t=this.querySelector("#ops-scroll");return t===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=t,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const t=this.ensureOpsListener(),e=f.getState().rightPaneMode;if(e===this.renderedOpsMode&&!t)return;const s=e!==this.renderedOpsMode;if(this.renderedOpsMode=e,s){const o=this.splitFor(e);o!==this.splitPct&&(this.splitPct=o)}const i=this.opsEl;if(!i)return;const n=this.opsScroll[e]??0;i.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===i&&(i.scrollTop=n)})}applyTheme(){const t=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),e=f.getState().settings[Ss]??t??Kl(),s=e==="dark"?"dark":e==="light"?"light":"auto",i=tc(s),n=i?"dark":"light";s!==this.themeMode&&(this.themeMode=s),n!==this.theme&&(this.theme=n),document.documentElement.dataset.theme=n;try{localStorage.setItem(Ss,s),localStorage.setItem(Hl,i?"1":"0")}catch{}if(this.themeTimer&&(clearTimeout(this.themeTimer),this.themeTimer=null),s==="auto"){const o=ec(),a=o?Math.min(Math.max(o.getTime()-Date.now()+1e3,1e3),360*60*1e3):3600*1e3;this.themeTimer=setTimeout(()=>this.applyTheme(),a)}}openSettings(){this.settingsOpen=!0,this.closeAccount(),this.dismissSwitcher?.()}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(t){!t.dataTransfer||!Array.from(t.dataTransfer.items).some(s=>s.kind==="file")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}onChatDrop(t){const e=Array.from(t.dataTransfer?.files??[]).filter(s=>s.type.startsWith("image/")||s.type==="application/pdf"||/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i.test(s.name));e.length&&(t.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:e},bubbles:!0,composed:!0})))}setThemeMode(t){try{localStorage.setItem(Ss,t)}catch{}f.getState().setSetting(Ss,t),this.themeMode=t,this.applyTheme()}renderRightPaneContent(t){switch(t){case"goals":return r`
          <div class="w-full max-w-5xl mx-auto flex flex-col flex-1">
            <div class="goals-workspace mana-card overflow-clip flex-1 flex flex-col">
              <goals-metrics></goals-metrics>
              <planner-tabs></planner-tabs>
            </div>
          </div>
        `;case"canvas":return r`<companion-workspace class="flex flex-col flex-1 min-h-0"></companion-workspace>`;case"grocery":return r`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"inbox":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return r`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return r`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`;case"been-to":return r`<been-to-loader class="flex flex-col flex-1 min-h-0"></been-to-loader>`;case"learn":return r`<learn-section class="flex flex-col flex-1 min-h-0"></learn-section>`;case"guests":return r`<guests-section class="flex flex-col flex-1 min-h-0"></guests-section>`;case"publisher":return r`<publisher-section class="flex flex-col flex-1 min-h-0"
          .chatOpen=${f.getState().settings["cockpit.chat_hidden"]!=="1"&&!this.chatCollapsed}></publisher-section>`;case"newsroom":return r`<newsroom-loader class="flex flex-col flex-1 min-h-0"></newsroom-loader>`;case"tools":return r`<tools-launcher class="flex flex-col flex-1 min-h-0"></tools-launcher>`;case"notify":return r`<notifications-section class="flex flex-col flex-1 min-h-0"></notifications-section>`}}async revealChat(){this.mobileTab="chat",await this.updateComplete,this.chatCollapsed&&(this.splitPct=P.DEFAULT_SPLIT,this.saveSplit(),await this.updateComplete)}toggleAccount(t,e){if(this.menuOpen){this.closeAccount();return}this.accountAnchor=t.currentTarget,this.accountUp=e,this.menuOpen=!0,this.paintAccountMenu(),this.accountPortal?.querySelector("button")?.focus()}paintAccountMenu(){if(!this.accountAnchor)return;this.accountPortal||(this.accountPortal=document.createElement("div"),this.accountPortal.className="mana-account-menu",document.body.appendChild(this.accountPortal));const t=this.accountAnchor.getBoundingClientRect(),e=Math.min(224,window.innerWidth-16);vt(r`
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
      </div>`,this.accountPortal),this.accountPortal.setAttribute("role","menu"),this.accountPortal.setAttribute("aria-label","Account");const s=this.accountPortal.getBoundingClientRect().height;this.accountPortal.style.width=`${e}px`,this.accountPortal.style.left=`${Math.max(8,Math.min(t.left,window.innerWidth-e-8))}px`,this.accountPortal.style.top=`${Math.max(8,Math.min(this.accountUp?t.top-s-8:t.bottom+8,window.innerHeight-s-8))}px`}renderAccount(t=!1,e=!1){const s=f.getState().settings,i=this.me,n=(i?s[`user:${i.login}:profile_pic_url`]:"")||(i?.role==="owner"?s["cockpit.profile_pic_url"]:"")||i?.profilePic,o=[i?.displayName,i?.login].filter(Boolean).join(" · ")||"Account",a=i?.login.indexOf("@")??-1,l=i?.displayName.trim().split(/\s+/).map(h=>h[0]).slice(0,2).join("").toUpperCase()||"?";return r`<button type="button" class="mana-account ${e?"mana-account-expanded":""}"
      aria-label="Account menu" title=${o} aria-haspopup="menu" aria-expanded=${this.menuOpen}
      @click=${h=>this.toggleAccount(h,t)}>
      <span class="mana-avatar ${i?.env==="dev"&&!e?"mana-avatar-dev":""}">${n?r`<img src=${n} alt="" referrerpolicy="no-referrer" @error=${h=>{h.target.hidden=!0}} />`:c}<span>${l}</span></span>
      ${e?r`<span class="mana-account-identity"><span>${i?.displayName||"Account"}${i?.env==="dev"?r`<span class="mana-dev-pill" title="Local dev copy, not production">DEV</span>`:c}</span>${i?.login,c}</span><sc-icon class="mana-account-chevrons" name="lucide-chevrons-up-down"></sc-icon>`:c}
    </button>`}renderRail(t,e){const s=this.railCollapsed&&!this.drawerOpen,i=f.getState().notificationsUnread;return r`
      ${this.drawerOpen?r`<div class="mana-drawer-backdrop" aria-hidden="true" @click=${()=>{this.drawerOpen=!1}}></div>`:c}
      <aside class="mana-sidebar ${s?"is-collapsed":""} ${this.drawerOpen?"is-drawer-open":""}" aria-label="Mana sidebar"
        style=${s?c:`width:${this.sidebarWidth}px`}
        @pointerover=${this.showNavTooltip} @pointerout=${this.leaveNavTooltip}
        @focusin=${this.showNavTooltip} @focusout=${this.leaveNavTooltip}
        @pointerdown=${this.hideNavTooltip} @click=${this.hideNavTooltip}>
        <div class="mana-sidebar-header">
          ${s?c:r`<button type="button" class="mana-sidebar-toggle mana-sidebar-search" aria-label="Search chats" title="Search chats (⌘K)" @click=${()=>{this.drawerOpen=!1,this.searchOpen=!0}}>
              <sc-icon name="lucide-search"></sc-icon>
            </button>
            <span class="flex-1"></span>`}
          ${this.drawerOpen?r`<button type="button" class="mana-sidebar-toggle" aria-label="Close menu" @click=${()=>{this.drawerOpen=!1}}>
                <sc-icon name="lucide-x"></sc-icon>
              </button>`:r`<button type="button" class="mana-sidebar-toggle mana-sidebar-collapse" aria-label=${s?"Expand sidebar":"Collapse sidebar"} aria-expanded=${!s} @click=${this.toggleRail}>
                <sc-icon name=${s?"lucide-chevron-right":"lucide-chevron-left"}></sc-icon>
              </button>`}
        </div>
        <div class="mana-sidebar-scroll">
        <nav class="mana-sidebar-nav" aria-label="Tools">
          ${t.map((n,o)=>{const a=e===n.key,l=me[n.key];return r`
              ${o>0&&l!==me[t[o-1].key]?r`<div class="mana-sidebar-rule" aria-hidden="true"></div>`:c}
              <button type="button" data-nav-item=${n.key} class="mana-sidebar-item ${a?"is-active":""} ${this.navDragKey===n.key?"opacity-40":""} ${this.navDropClass(n.key)}"
                style="--nav-hue:${hg[n.key]};touch-action:pan-y;" aria-label=${n.label} aria-current=${a?"page":c}
                @pointerdown=${h=>this.onNavPointerDown(h,n.key,"y")}
                @click=${()=>this.onNavClick(n.key)}>
                <sc-icon name="lucide-${n.icon}"></sc-icon>
                ${s?c:r`<span class="mana-sidebar-label">${n.label}</span>`}
                ${n.key==="notify"&&i>0?r`<span class="mana-sidebar-dot" role="status" aria-label=${`${i} unread notifications`}></span>`:c}
              </button>`})}
        </nav>
        ${s?c:r`<sidebar-threads .tools=${Te}></sidebar-threads>`}
        </div>
        <div class="mana-sidebar-account">${this.renderAccount(!0,!s)}</div>
        ${s?c:r`<div class="mana-sidebar-resize" role="separator" aria-orientation="vertical"
          aria-label="Resize sidebar" title="Drag to resize" @pointerdown=${this.onSidebarResizeDown}></div>`}
      </aside>`}setRightPaneMode(t){const e=Hi(t);location.hash!==e&&history.pushState(null,"",e),this.toolRoute=ms(e),f.getState().setRightPaneMode(t)}renderBreadcrumb(t,e){const s=Te.find(i=>i.key===t)?.label||"Projects";return r`<nav aria-label="Breadcrumb" class="min-w-0">
      <ol class="flex items-center gap-2 min-w-0 text-sm sm:text-base">
        ${e?r`<li class="shrink-0"><a href="#/tools" class="text-muted hover:text-ink rounded focus-visible:outline-accent">Tools</a></li>
          <li aria-hidden="true" class="shrink-0 text-muted"><sc-icon name="lucide-chevron-right" class="w-3.5 h-3.5"></sc-icon></li>`:c}
        <li class="min-w-0 truncate font-medium text-ink" aria-current="page">${s}</li>
      </ol>
    </nav>`}renderMobileNavigation(t,e){const s=t==="tools"&&!e,i=e?"Chat":Te.find(n=>n.key===t)?.label||"Tools";return r`<nav aria-label="App navigation" class="flex items-center min-w-0 text-sm">
      ${s?r`<span class="font-medium px-2">Tools</span>`:r`
        <a href="#/tools" @click=${()=>{this.mobileTab="ops"}} aria-label="All tools" class="min-h-11 inline-flex items-center px-2 rounded-lg text-muted hover:bg-hover focus-visible:outline-accent">Tools</a>
        <sc-icon name="lucide-chevron-right" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        <button type="button" aria-label=${`Switch app, current: ${i}`} aria-haspopup="menu" aria-expanded=${this.toolSwitcherOpen}
          class="min-h-11 flex items-center gap-1 min-w-0 px-2 rounded-lg font-medium hover:bg-hover focus-visible:outline-accent" @click=${this.showToolSwitcher}>
          <span class="truncate">${i}</span><sc-icon name="lucide-chevron-down" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        </button>`}
    </nav>`}orderModes(t){const e=new Map(this.navOrder.map((i,n)=>[i,n])),s=["personal","studio","workspace"];return[...t].sort((i,n)=>{const o=s.indexOf(me[i.key])-s.indexOf(me[n.key]);if(o)return o;const a=e.get(i.key),l=e.get(n.key);return a!==void 0&&l!==void 0?a-l:a!==void 0?-1:l!==void 0?1:0})}onNavDragMove(t){const e=this.renderRoot.querySelectorAll("[data-nav-item]");for(const s of e){const i=s.getBoundingClientRect();if(i.width===0&&i.height===0||!(this.navDragAxis==="y"?t.clientY>=i.top&&t.clientY<=i.bottom:t.clientX>=i.left&&t.clientX<=i.right))continue;const o=s.dataset.navItem;if(me[o]!==me[this.navDragKey])continue;const a=this.navDragAxis==="y"?t.clientY<i.top+i.height/2?"before":"after":t.clientX<i.left+i.width/2?"before":"after";(this.navDragOverKey!==o||this.navDragPos!==a)&&(this.navDragOverKey=o,this.navDragPos=a,this.requestUpdate());return}}endNavDrag(){const t=this.navDragKey,e=this.navDragOverKey,s=this.navDragPos;if(this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.requestUpdate(),!t||!e||t===e||me[t]!==me[e])return;const i=[...this.orderedNavKeys],n=i.indexOf(t);if(n<0)return;i.splice(n,1);let o=i.indexOf(e);o<0||(s==="after"&&(o+=1),i.splice(o,0,t),this.navOrder=i,localStorage.setItem("cockpit.nav_order",JSON.stringify(i)),fetch("/api/nav-order",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:i})}).catch(()=>{}))}async fetchNavOrder(){try{const t=await fetch("/api/nav-order",{credentials:"include"});if(!t.ok)return;const e=await t.json();Array.isArray(e.order)&&e.order.length&&(this.navOrder=e.order,localStorage.setItem("cockpit.nav_order",JSON.stringify(e.order)))}catch{}}onNavClick(t){this.justNavDragged||(this.setRightPaneMode(t),this.drawerOpen=!1,this.mobileTab="ops")}navDropClass(t){return this.navDragOverKey!==t?"":this.navDragAxis==="y"?this.navDragPos==="before"?"border-t-2 border-t-accent":"border-b-2 border-b-accent":this.navDragPos==="before"?"border-l-2 border-l-accent":"border-r-2 border-r-accent"}onNotifNavigate(t){const e=t.detail,s={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher",mana:"canvas"},i=e?.mode,n=i??(e?.persona?s[e.persona]:void 0);n&&(!(n==="office"||n==="inbox"||n==="guests"||n==="publisher")||this.me?.role==="owner")&&n!==f.getState().rightPaneMode&&this.setRightPaneMode(n),this.mobileTab=i?"ops":"chat"}render(){if(this.settingsOpen)return this.openedPane&&(this.openedPane=null,this.cacheOpenId=vn()),r`<settings-page></settings-page>`;const t=f.getState().settings["cockpit.chat_hidden"]==="1",e=!t&&this.mobileTab==="chat",s=this.me?.role==="owner",i=f.getState().tools,n=Q=>i.find(Nt=>Nt.name===Q)?.placement==="standalone",o=this.orderModes(Te.filter(Q=>(!Q.ownerOnly||s)&&!n(Q.key)));this.orderedNavKeys=o.map(Q=>Q.key);const a=f.getState().rightPaneMode,l=this.toolRoute?.mode??a,h=this.canOpenPane(l),u=h?l:"tools";u!==this.openedPane&&(this.openedPane=u,this.cacheOpenId=vn());const p=h&&this.toolRoute?.standalone?u:null,m=u!=="tools"&&!!(this.toolRoute?.fromTools||n(u)),g=["been-to","grocery","office","circle","learn","guests","publisher","newsroom","canvas","notify","tools"].includes(u),x=["canvas","notify","newsroom","tools","grocery","circle","been-to","office"].includes(u),A=x||u==="publisher"||u==="goals",y=x||u==="publisher",N=!this.demoHintDismissed&&!p;return r`
      <div class="mana-shell h-[100dvh] overflow-hidden flex flex-col bg-bg text-ink font-sans" @notif-navigate=${this.onNotifNavigate}
        @thread-open=${this.onThreadOpen} @search-close=${()=>{this.searchOpen=!1}}>
        ${this.searchOpen?r`<thread-search .tools=${Te}></thread-search>`:c}
        ${N?r`<div class="shrink-0 flex items-center gap-3 px-4 py-2.5 text-sm bg-surface border-b border-line">
              <sc-icon name="lucide-sparkles" class="w-4 h-4 shrink-0 text-accent"></sc-icon>
              <span class="flex-1 min-w-0 text-muted">Live demo. Edits stay in this browser. Start fresh from <span class="text-ink font-medium">Settings → Reset demo</span>.</span>
              <button type="button" class="shrink-0 w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover" aria-label="Dismiss the demo hint" @click=${this.dismissDemoHint}>✕</button>
            </div>`:c}
        <div class="flex-1 flex flex-row min-h-0">
        ${p?c:this.renderRail(o,m?"tools":u)}
        <div class="flex-1 flex flex-col min-w-0 min-h-0">
        <header
          class="flex items-center gap-2 lg:gap-0 min-h-12 shrink-0 px-3 sm:px-4 lg:px-0 py-2 lg:py-0 ${A?"lg:hidden":""}"
        >
          <!-- Desktop: the header splits like the panes below it. The chat
               title lives inside its inset card; this side stays on the page
               plane while the tool keeps its global breadcrumb. -->
          <div class="hidden lg:flex flex-1 min-w-0 self-stretch">
            ${t||this.chatCollapsed?c:r`<div class="min-w-0 grow shrink [flex-basis:var(--split)]" style=${`--split: ${this.splitPct}%;`}></div>`}
            ${t?c:r`<div class="shrink-0" style=${`width: ${this.chatCollapsed||this.opsCollapsed?20:12}px`}></div>`}
            ${this.opsCollapsed?c:r`<div class="min-w-0 flex items-center ${u==="publisher"?"px-0":"px-4"} grow shrink [flex-basis:var(--split-ops)]" style=${`--split-ops: ${100-this.splitPct}%;${g&&u!=="publisher"?"background:var(--main-card);":""}`}>
              ${u==="publisher"?r`<div class="w-full max-w-[80rem] ${!t&&!this.chatCollapsed?"mr-auto":"mx-auto"} px-3">${this.renderBreadcrumb(u,m)}</div>`:this.renderBreadcrumb(u,m)}
            </div>`}
          </div>
          ${p?c:r`<button type="button" class="lg:hidden shrink-0 w-11 h-11 -ml-2 grid place-items-center rounded-lg text-muted hover:bg-hover hover:text-ink"
            aria-label="Open menu" aria-expanded=${this.drawerOpen} @click=${()=>{this.drawerOpen=!0}}>
            <sc-icon name="lucide-menu" class="w-5 h-5"></sc-icon>
          </button>`}
          <div class="lg:hidden min-w-0">${e?r`<chat-title-bar class="min-w-0 flex" .tools=${Te}></chat-title-bar>`:this.renderMobileNavigation(u,e)}</div>
          <!-- Spacer pushes Chat/Back and the account to the right edge (phones; on desktop the split title row fills). -->
          <div class="flex-1 lg:hidden"></div>
          ${t?c:r`<button type="button" class="lg:hidden min-h-11 px-3 py-1.5 rounded-lg text-sm hover:bg-hover" @click=${()=>{this.mobileTab=e?"ops":"chat"}}>${e?"Back":"Chat"}</button>`}
          <div class="${p?"flex":"flex lg:hidden"} items-center gap-2 shrink-0">
            ${this.renderAccount()}
          </div>
        </header>

        <main
          class="mana-main-plane relative flex-1 min-h-0 min-w-0 flex flex-col lg:flex-row gap-3 lg:gap-0 overflow-hidden"
        >
          ${t?c:r`
          <section
            class="${e?"flex":"hidden"} ${this.chatCollapsed?"lg:hidden":"lg:flex"} mana-chat-card max-lg:flex-1 flex-col min-h-0 overflow-hidden lg:grow lg:shrink lg:[flex-basis:var(--split)]"
            style=${`--split: ${this.splitPct}%;`}
            @dragover=${this.onChatDragOver}
            @drop=${this.onChatDrop}
          >
            <div class="mana-chat-surface mana-card flex flex-1 flex-col min-h-0 overflow-hidden px-3 sm:px-4 pb-3 sm:pb-4">
              <div class="hidden lg:flex shrink-0 min-h-12 items-center pt-2">
                <chat-title-bar class="min-w-0 flex flex-1"></chat-title-bar>
              </div>
              <chat-pane class="flex-1 min-h-0 my-3"></chat-pane>
              <chat-composer class="shrink-0"></chat-composer>
            </div>
          </section>

          <!-- Desktop divider: drag to resize, collapse, or reveal a pane. -->
          <div
            class="mana-pane-divider hidden lg:flex shrink-0 ${this.chatCollapsed?"is-chat-collapsed":this.opsCollapsed?"is-ops-collapsed":""} items-stretch select-none"
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize panes"
            title=${this.chatCollapsed||this.opsCollapsed?"Drag to open":"Drag to resize panes"}
            @pointerdown=${this.onDividerDown}
          >
            ${this.chatCollapsed||this.opsCollapsed?r`<div
                  class="mana-pane-grip is-folded"
                >
                  <sc-icon name=${this.chatCollapsed?"lucide-chevron-right":"lucide-chevron-left"}></sc-icon>
                </div>`:r`<div
                  class="mana-pane-grip"
                ></div>`}
          </div>`}

          <section
            id="ops-scroll"
            class="${e?"hidden":"flex"} ${this.opsCollapsed?"lg:hidden":"lg:flex"} flex-col min-h-0 ${g?"overflow-hidden":"overflow-y-auto px-3 py-4 sm:p-5 is-page"} ${x?"mana-contained-host":""} mana-main-card max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
            style=${`--split-ops: ${100-this.splitPct}%; scrollbar-gutter: ${u==="been-to"?"auto":"stable"};`}
          >
            <div
              class="w-full ${y?"":"max-w-5xl mx-auto"} ${x?"mana-contained-surface":""} ${g?"flex flex-col flex-1 min-h-0":u==="goals"?"flex flex-col flex-1":"space-y-6"}"
            >
              ${la(this.paneEpoch,this.renderRightPaneContent(u))}
            </div>
          </section>
        </main>

        <voice-controller></voice-controller>
        ${s?r`<mana-companion .owner=${!0} avatar=${"/office-avatars/mana.svg"}
          style=${u==="newsroom"?"display: none":""}></mana-companion>`:c}
        </div>
        </div>
      </div>
    `}};P.SIDEBAR_MIN=184;P.SIDEBAR_MAX=420;P.DEFAULT_SPLIT=50;P.MIN_PANE_PX=280;P.INITIAL_SPLIT=0;P.SPLITS_KEY="mana.demo.split_pct_by_mode";st([d()],P.prototype,"settingsOpen",2);st([d()],P.prototype,"theme",2);st([d()],P.prototype,"themeMode",2);st([d()],P.prototype,"menuOpen",2);st([d()],P.prototype,"toolSwitcherOpen",2);st([d()],P.prototype,"railCollapsed",2);st([d()],P.prototype,"searchOpen",2);st([d()],P.prototype,"drawerOpen",2);st([d()],P.prototype,"sidebarWidth",2);st([d()],P.prototype,"mobileTab",2);st([d()],P.prototype,"demoHintDismissed",2);st([d()],P.prototype,"navOrder",2);st([d()],P.prototype,"navDragKey",2);st([d()],P.prototype,"navDragOverKey",2);st([d()],P.prototype,"me",2);st([d()],P.prototype,"toolRoute",2);st([d()],P.prototype,"splitPct",2);st([d()],P.prototype,"paneEpoch",2);P=st([w("mana-app")],P);const gg=Object.freeze(Object.defineProperty({__proto__:null,get ManaApp(){return P}},Symbol.toStringTag,{value:"Module"}));export{T,f as a,mg as b,fg as c,Y as e,la as i,gg as m,aa as p,d as r};
