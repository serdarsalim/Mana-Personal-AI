const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-D2emgc0r.js","assets/db-DHWx8Fue.js","assets/notes-media-DDKHIfat.js","assets/index-50iiHOM8.js","assets/index-CH08WwyG.css","assets/models-CLMVJSUQ.js","assets/been-to-section-BivDzRdw.js","assets/been-to-countries-XpOUTETI.js","assets/been-to-section-Dtzwgi1a.css","assets/newsroom-section-D2g_EGxO.js","assets/layout-EA_iF8da.js"])))=>i.map(i=>d[i]);
import{n as b,j as rc,e as Ki,i as Gs,A as c,c as It,t as w,b as r,o as W,_ as Lt,f as bo,E as vo,d as Rt,D as xt,g as Ke,L as We,a as ac,w as Me,r as lc,p as on}from"./index-50iiHOM8.js";import{e as vs,f as Bn,d as cc,C as yo,b as dc,c as hc,D as Hn,a as uc,n as pc,k as mc}from"./models-CLMVJSUQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fc=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t,e){return(i,s,n)=>{const o=a=>a.renderRoot?.querySelector(t)??null;return fc(i,s,{get(){return o(this)}})}}const gc="mana",ai="kv";let Wo=null;function Ba(){return Wo??=new Promise((t,e)=>{const i=indexedDB.open(gc,1);i.onupgradeneeded=()=>{i.result.objectStoreNames.contains(ai)||i.result.createObjectStore(ai)},i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error),i.onblocked=()=>e(new Error("indexedDB blocked"))}),Wo}function bc(t){return new Promise((e,i)=>{t.oncomplete=()=>e(),t.onerror=()=>i(t.error),t.onabort=()=>i(t.error)})}async function vc(t){const i=(await Ba()).transaction(ai,"readonly"),s=IDBKeyRange.bound(t,`${t}￿`),n=new Map;return await new Promise((o,a)=>{const l=i.objectStore(ai).openCursor(s);l.onsuccess=()=>{const h=l.result;if(!h)return o();typeof h.value=="string"&&n.set(String(h.key),h.value),h.continue()},l.onerror=()=>a(l.error)}),n}const ys=new Map;let Ha=null;function zn(t,e){ys.set(t,e),Ha??=setTimeout(()=>void yc(),50)}async function yc(){if(Ha=null,!ys.size)return;const t=[...ys];ys.clear();try{const i=(await Ba()).transaction(ai,"readwrite"),s=i.objectStore(ai);for(const[n,o]of t)o==null?s.delete(n):s.put(o,n);await bc(i)}catch{}}class xc{constructor(e){this.map=e}get length(){return this.map.size}key(e){let i=0;for(const s of this.map.keys())if(i++===e)return s;return null}getItem(e){return this.map.get(e)??null}setItem(e,i){this.map.set(e,i),zn(e,i)}removeItem(e){this.map.delete(e)&&zn(e,null)}}async function wc(t,e=[]){try{if(typeof indexedDB>"u")return null;const i=await vc(t);try{const s=[];for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);o&&(o.startsWith(t)||e.includes(o))&&s.push(o)}for(const n of s){const o=localStorage.getItem(n);o!=null&&!i.has(n)&&(i.set(n,o),zn(n,o)),localStorage.removeItem(n)}}catch{}return new xc(i)}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:kc}=rc,Go=t=>t,fb=t=>t.strings===void 0,Vo=()=>document.createComment(""),wi=(t,e,i)=>{const s=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(i===void 0){const o=s.insertBefore(Vo(),n),a=s.insertBefore(Vo(),n);i=new kc(o,a,t,t.options)}else{const o=i._$AB.nextSibling,a=i._$AM,l=a!==t;if(l){let h;i._$AQ?.(t),i._$AM=t,i._$AP!==void 0&&(h=t._$AU)!==a._$AU&&i._$AP(h)}if(o!==n||l){let h=i._$AA;for(;h!==o;){const u=Go(h).nextSibling;Go(s).insertBefore(h,n),h=u}}}return i},Ee=(t,e,i=t)=>(t._$AI(e,i),t),$c={},za=(t,e=$c)=>t._$AH=e,Sc=t=>t._$AH,rn=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qa=Ki(class extends Gs{constructor(){super(...arguments),this.key=c}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&(za(t),this.key=e),i}});class T extends It{createRenderRoot(){return this}}class Tc{constructor(e,i){this.onKeydown=s=>{const n=s.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=s.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const a=this.opts.keyAttr??"data-row-key",l=this.opts.scope?.()??document,h=Array.from(l.querySelectorAll(`[${a}]`));if(!h.length)return;const u=this.opts.getKey();if(n===" "||n==="Enter"){if(!u)return;const v=n===" "?this.opts.onToggle:this.opts.onEnter;if(!v)return;s.preventDefault(),v(u);return}const p=h.map(v=>v.getAttribute(a)).filter(v=>!!v),m=u?p.indexOf(u):-1,g=n==="ArrowDown"?m<0?0:Math.min(m+1,p.length-1):m<=0?0:m-1;if(p[g]&&p[g]!==u){s.preventDefault(),this.opts.setKey(p[g]);const v=p[g];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${a}="${CSS.escape(v)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=e,this.opts=i,e.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const Yo=t=>{let e;const i=new Set,s=(u,p)=>{const m=typeof u=="function"?u(e):u;if(!Object.is(m,e)){const g=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),i.forEach(v=>v(e,g))}},n=()=>e,l={setState:s,getState:n,getInitialState:()=>h,subscribe:u=>(i.add(u),()=>i.delete(u))},h=e=t(s,n,l);return l},Cc=(t=>t?Yo(t):Yo);class Ec extends Error{constructor(e,i,s){super(i),this.name="ApiError",this.status=e,this.body=s}}async function qn(t){let e=null,i=`${t.status} ${t.statusText}`;try{if(e=await t.json(),e&&typeof e=="object"&&"error"in e){const s=e.error;typeof s=="string"&&(i=s)}}catch{}return new Ec(t.status,i,e)}const Dc=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;async function Wi(t,e){const i=await fetch(t,{...e,headers:{"content-type":"application/json","x-mana-client":Dc,...e?.headers||{}}});if(!i.ok)throw await qn(i);const s=await i.text();return s?JSON.parse(s):void 0}function Y(t){return Wi(t,{method:"GET"})}function B(t,e,i){return Wi(t,{method:"POST",body:e===void 0?void 0:JSON.stringify(e),headers:i?{"x-mana-history-group":i}:void 0})}function re(t,e,i){return Wi(t,{method:"PATCH",body:e===void 0?void 0:JSON.stringify(e),headers:i?{"x-mana-history-group":i}:void 0})}function ve(t,e){return Wi(t,{method:"DELETE",headers:e?{"x-mana-history-group":e}:void 0})}const C={threads:{list:()=>Y("/api/threads").then(t=>t.threads),create:(t="chat",e)=>B("/api/threads",{kind:t,persona:e}),search:t=>Y(`/api/threads/search?q=${encodeURIComponent(t)}`).then(e=>e.threads),pin:(t,e)=>B(`/api/threads/${t}/pin`,{pinned:e}),rename:(t,e)=>re(`/api/threads/${t}`,{title:e}),remove:t=>ve(`/api/threads/${t}`)},messages:{list:t=>Y(`/api/threads/${t}/messages`).then(e=>e.messages)},northStars:{list:()=>Y("/api/north-stars").then(t=>t.northStars),create:t=>B("/api/north-stars",{title:t}),update:(t,e)=>re(`/api/north-stars/${t}`,e),archive:t=>ve(`/api/north-stars/${t}`),summary:t=>Y(`/api/north-stars/${t}/summary`)},goals:{list:(t=!1)=>Y(`/api/goals${t?"?include=archived":""}`),create:(t,e)=>B("/api/goals",t,e),update:(t,e,i)=>re(`/api/goals/${t}`,e,i),remove:(t,e=!1)=>ve(`/api/goals/${t}${e?"?permanent=true":""}`),summary:t=>Y(`/api/goals/${t}/summary`),events:t=>Y(`/api/goals/${t}/events`).then(e=>e.events)},keyResults:{create:(t,e,i)=>B(`/api/goals/${t}/key-results`,{title:e},i),update:(t,e,i)=>re(`/api/key-results/${t}`,e,i),move:(t,e)=>B(`/api/key-results/${t}/move`,{direction:e}),reorder:(t,e)=>B(`/api/key-results/${t}/reorder`,{targetIndex:e}),remove:t=>ve(`/api/key-results/${t}`)},commitments:{listForWeek:t=>Y(`/api/week${t?`?week=${encodeURIComponent(t)}`:""}`),create:t=>B("/api/commitments",t),update:(t,e)=>re(`/api/commitments/${t}`,e),remove:t=>ve(`/api/commitments/${t}`),reorder:(t,e)=>B(`/api/commitments/${t}/reorder`,{targetIndex:e}),carryOver:(t,e)=>B("/api/commitments/carry-over",{from:t,to:e})},settings:{list:()=>Y("/api/settings"),update:t=>re("/api/settings",t)},tools:{list:()=>Y("/api/tools").then(t=>t.tools),reorder:t=>B("/api/tools/order",{names:t}),setPlacement:(t,e,i)=>re(`/api/tools/${encodeURIComponent(t)}`,{placement:e,order:i})},agentDocs:{list:()=>Y("/api/agents").then(t=>t.files),read:t=>Y(`/api/agents/${encodeURIComponent(t)}`),save:(t,e)=>Wi(`/api/agents/${encodeURIComponent(t)}`,{method:"PUT",body:JSON.stringify({content:e})}),history:t=>Y(`/api/agents/${encodeURIComponent(t)}/history`).then(e=>e.history),at:(t,e)=>Y(`/api/agents/${encodeURIComponent(t)}/at/${e}`),restore:(t,e)=>B(`/api/agents/${encodeURIComponent(t)}/restore`,{sha:e}),reset:t=>B(`/api/agents/${encodeURIComponent(t)}/reset`,{})},canvas:{list:()=>Y("/api/canvas/files").then(t=>t.files),read:t=>Y(`/api/canvas/files/${encodeURIComponent(t)}`)},voice:{session:t=>B("/api/voice/session",t?{persona:t}:void 0),op:(t,e)=>B("/api/voice/op",{name:t,arguments:e}),transcript:t=>B("/api/voice/transcript",t),stt:async t=>{const e=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:t});if(!e.ok)throw await qn(e);return e.json()},consult:t=>B("/api/voice/consult",t),tts:async t=>{const e=await fetch("/api/voice/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:t})});if(!e.ok)throw await qn(e);return e.blob()}},uploads:{upload:(t,e=!1,i)=>B("/api/upload",{dataUrl:t,ephemeral:e,name:i})},state:()=>Y("/api/state"),notifications:{list:()=>Y("/api/notifications"),read:t=>B(`/api/notifications/${t}/read`),dismiss:t=>B(`/api/notifications/${t}/dismiss`),act:t=>B(`/api/notifications/${t}/act`),readAll:()=>B("/api/notifications/read-all"),dismissAll:()=>B("/api/notifications/dismiss-all"),mute:(t,e)=>B("/api/notifications/mute",{kind:t,enabled:e}),kinds:()=>Y("/api/notifications/kinds")}},Pc={"been-to":"house",goals:"house",canvas:"house",grocery:"house",office:"house",finance:"house",circle:"house",learn:"house",members:"house",publisher:"house",newsroom:"house",inbox:"house",tools:"house",notify:"house"},Qo={"been-to":"Been to",goals:"Goals",canvas:"Mana",grocery:"Shopping",office:"Projects",finance:"Finance",circle:"Circles",learn:"Learn",members:"Members",publisher:"Publisher",newsroom:"The office",inbox:"Inbox",tools:"Tools",notify:"Notifications"},Ka={house:"Workshop",mana:"Workshop","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Projects keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper","learn-coach":"Learn coach",publisher:"Publisher",companion:"Mana"};function Wa(t){if(t.currentThreadId!=null){const e=t.threads.find(i=>i.id===t.currentThreadId);if(e?.persona)return e.persona}return Pc[t.rightPaneMode]}function an(){try{const t=localStorage.getItem("cockpit.right_pane_mode");if(t==="guests")return"members";if(t==="been-to"||t==="goals"||t==="canvas"||t==="grocery"||t==="office"||t==="finance"||t==="circle"||t==="learn"||t==="members"||t==="publisher"||t==="newsroom")return t}catch{}return"goals"}let Jo=0,De=0,ln=null;const f=Cc((t,e)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const i=await C.threads.list();t({threads:i})},initThreads(){return ln??=e().loadThreads().then(()=>{const i=e();if(i.currentThreadId==null){const s=i.threads.find(n=>n.persona==="house"&&n.closed_at==null);s&&i.selectThread(s.id)}}).catch(i=>{ln=null,console.warn("[threads] initial load failed",i)}),ln},async pinThread(i,s){const n=s?Math.floor(Date.now()/1e3):null,o=e().threads;t({threads:o.map(a=>a.id===i?{...a,pinned_at:n}:a)});try{await C.threads.pin(i,s)}catch(a){throw t({threads:o}),a}},async renameThread(i,s){const n=e().threads;t({threads:n.map(o=>o.id===i?{...o,title:s}:o)});try{await C.threads.rename(i,s)}catch(o){throw t({threads:n}),o}},async deleteThread(i){await C.threads.remove(i),t({threads:e().threads.filter(s=>s.id!==i)}),e().currentThreadId===i&&await e().selectThread(null)},async selectThread(i){t({currentThreadId:i,messages:[]}),i!=null&&await e().loadMessages(i)},async createThread(i){const s=i?.kind??"chat",n=i?.persona,o=await C.threads.create(s,n);return await e().loadThreads(),t({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(i){const s=await C.messages.list(i);t({messages:s})},northStars:[],async loadNorthStars(){t({northStars:await C.northStars.list()})},async createNorthStar(i){await C.northStars.create(i),await e().loadNorthStars()},async renameNorthStar(i,s){await C.northStars.update(i,{title:s}),await e().loadNorthStars()},async archiveNorthStar(i){await C.northStars.archive(i),await e().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:i,archivedCount:s}=await C.goals.list(e().includeArchivedGoals);t({goals:i,goalsArchivedCount:s})},async toggleArchivedGoals(i){t({includeArchivedGoals:i}),await e().loadGoals()},async createGoal(i){const s=crypto.randomUUID(),{id:n}=await C.goals.create({title:i.title,northStar:i.northStar??null,targetDate:i.targetDate??null},s);return(i.color!=null||i.symbol!=null)&&await C.goals.update(n,{color:i.color??null,symbol:i.symbol??null},s),await e().loadGoals(),n},async updateGoal(i,s){await C.goals.update(i,s),await e().loadGoals()},async deleteGoal(i,s=!1){await C.goals.remove(i,s),await e().loadGoals()},async addKeyResult(i,s,n){const o=crypto.randomUUID(),{id:a}=await C.keyResults.create(i,s,o);return n&&await C.keyResults.update(a,{targetDate:n},o),await e().loadGoals(),a},async updateKeyResult(i,s){const n=o=>({...o,...s.title!==void 0?{title:s.title}:{},...s.done!==void 0?{done:s.done?1:0}:{},...s.targetDate!==void 0?{target_date:s.targetDate}:{}});t({goals:e().goals.map(o=>o.keyResults.some(a=>a.id===i)?{...o,keyResults:o.keyResults.map(a=>a.id===i?n(a):a)}:o)});try{await C.keyResults.update(i,s)}finally{await e().loadGoals()}},async deleteKeyResult(i){await C.keyResults.remove(i),await e().loadGoals()},async moveKeyResult(i,s){await C.keyResults.move(i,s),await e().loadGoals()},async reorderKeyResult(i,s){await C.keyResults.reorder(i,s),await e().loadGoals()},currentWeek:null,commitments:[],async setWeek(i){t({currentWeek:i}),await e().loadCommitments(i)},async loadCommitments(i){const s=await C.commitments.listForWeek(i??e().currentWeek??void 0);t({commitments:s.commitments,currentWeek:s.week})},async createCommitment(i){await C.commitments.create({...i,week:i.week??e().currentWeek??void 0}),await e().loadCommitments()},async updateCommitment(i,s){const n=o=>({...o,...s.title!=null?{title:s.title}:{},...s.done!==void 0?{done:s.done?1:0}:{},...s.recurring!==void 0?{recurring:s.recurring?1:0}:{},...s.goalId!==void 0?{goal_id:s.goalId}:{},...s.keyResultId!==void 0?{key_result_id:s.keyResultId}:{}});t({commitments:e().commitments.map(o=>o.id===i?n(o):o)});try{await C.commitments.update(i,s)}finally{await e().loadCommitments()}},async deleteCommitment(i){await C.commitments.remove(i),await e().loadCommitments()},async reorderCommitment(i,s){await C.commitments.reorder(i,s),await e().loadCommitments()},settings:{},async loadSettings(){t({settings:await C.settings.list()})},async setSetting(i,s){const n=await C.settings.update({[i]:s});t({settings:n})},tools:[],async loadTools(){t({tools:await C.tools.list()})},async setToolPlacement(i,s){await C.tools.setPlacement(i,s),t({tools:e().tools.map(n=>n.name===i?{...n,placement:s}:n)})},async reorderTool(i,s){const n=e().tools,o=n.find(u=>u.name===i);if(!o||s===i)return;const a=n.filter(u=>u.name!==i),l=s===null?a.length:a.findIndex(u=>u.name===s);if(l<0||(a.splice(l,0,o),a.every((u,p)=>u.name===n[p]?.name)))return;const h=a.map((u,p)=>({...u,order:p}));try{await C.tools.reorder(h.map(u=>u.name)),t({tools:h})}catch(u){throw await e().loadTools().catch(()=>{}),u}},notifications:[],notificationsUnread:0,async loadNotifications(){const i=++Jo,s=De,{notifications:n,unread:o}=await C.notifications.list();i!==Jo||s!==De||t({notifications:n,notificationsUnread:o})},async markNotificationRead(i){De++;const s=e().notifications.map(o=>o.id===i&&o.read_at==null?{...o,read_at:Math.floor(Date.now()/1e3)}:o),n=e().notifications.some(o=>o.id===i&&o.read_at==null);t({notifications:s,notificationsUnread:Math.max(0,e().notificationsUnread-(n?1:0))}),await C.notifications.read(i),await e().loadNotifications()},async dismissNotification(i){De++;const s=e().notifications.some(o=>o.id===i&&o.read_at==null),n=e().notifications.filter(o=>o.id!==i);t({notifications:n,notificationsUnread:Math.max(0,e().notificationsUnread-(s?1:0))}),await C.notifications.dismiss(i),await e().loadNotifications()},async actOnNotification(i){De++;const s=e().notifications.some(a=>a.id===i&&a.read_at==null),n=e().notifications.filter(a=>a.id!==i);t({notifications:n,notificationsUnread:Math.max(0,e().notificationsUnread-(s?1:0))});const o=await C.notifications.act(i);return await e().loadNotifications(),o},async markAllNotificationsRead(){De++;const i=Math.floor(Date.now()/1e3);t({notifications:e().notifications.map(s=>s.read_at==null?{...s,read_at:i}:s),notificationsUnread:0}),await C.notifications.readAll(),await e().loadNotifications()},async clearAllNotifications(){De++,t({notifications:[],notificationsUnread:0}),await C.notifications.dismissAll(),await e().loadNotifications()},rightPaneMode:an(),setRightPaneMode(i){try{localStorage.setItem("cockpit.right_pane_mode",i)}catch{}t({rightPaneMode:i,viewContext:{tool:i,summary:Qo[i]}})},focusedRowKey:null,setFocusedRowKey(i){t({focusedRowKey:i})},viewContext:{tool:an(),summary:Qo[an()]},setViewContext(i){t({viewContext:i})}}));function j(t,e,i){let s=i?i(e.getState()):void 0;return e.subscribe(n=>{if(!i){t.requestUpdate();return}const o=i(n);Object.is(o,s)||(s=o,t.requestUpdate())})}class Ga{constructor(e,i,s){this.host=e,this.store=i,this.selector=s,e.addController(this)}hostConnected(){this.unsubscribe=j(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}const xo=new Set(["been-to","goals","canvas","grocery","finance","circle","learn","office","members","publisher","newsroom","inbox","notify"]),Ac=new Set(["office","members","publisher","newsroom","inbox"]);function Mc(t,e){return(t==="tools"||xo.has(t))&&(!Ac.has(t)||e)}function ki(t){if(t==="#/tools")return{mode:"tools",fromTools:!1,standalone:!1};const e=t.match(/^#\/(tools|app|t)\/([\w-]+)$/);if(!e)return null;const i=e[2];return xo.has(i)?{mode:i,fromTools:e[1]!=="app",standalone:e[1]==="t"}:null}function Va(t){return t.type==="view"&&t.panel&&xo.has(t.name)?`#/tools/${t.name}`:null}function cn(t){return t==="tools"?"#/tools":`#/app/${t}`}const _i="cockpit.theme",Ic="cockpit.theme.dark";function _c(t){return t==="light"||t==="dark"||t==="auto"}function Oc(){try{const t=localStorage.getItem(_i);return _c(t)?t:"auto"}catch{return"auto"}}const _e=Math.PI/180,wo=864e5,Ya=2440588,Qa=2451545,Lc=_e*23.4397,dn=9e-4,Rc=-.833*_e,Nc=t=>t.valueOf()/wo-.5+Ya,Xo=t=>new Date((t+.5-Ya)*wo),jc=t=>Nc(t)-Qa,Fc=t=>_e*(357.5291+.98560028*t);function Uc(t){const e=_e*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t));return t+e+_e*102.9372+Math.PI}const Bc=t=>Math.asin(Math.sin(t)*Math.sin(Lc)),Zo=(t,e,i)=>Qa+t+.0053*Math.sin(e)-.0069*Math.sin(2*i),Hc=(t,e,i)=>Math.acos((Math.sin(t)-Math.sin(e)*Math.sin(i))/(Math.cos(e)*Math.cos(i)));function Kn(t,e,i){const s=_e*-i,n=_e*e,o=jc(t),a=Math.round(o-dn-s/(2*Math.PI)),l=dn+(0+s)/(2*Math.PI)+a,h=Fc(l),u=Uc(h),p=Bc(u),m=Zo(l,h,u),g=Hc(Rc,n,p);if(Number.isNaN(g))return null;const v=Zo(dn+(g+s)/(2*Math.PI)+a,h,u),y=m-(v-m);return{sunrise:Xo(y),sunset:Xo(v)}}function Ja(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function Xa(t){const e=Wc[t];if(e)return{lat:e[0],lng:e[1]};let i=0;try{i=-new Date().getTimezoneOffset()/4}catch{i=0}return{lat:40,lng:i}}function zc(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}}function qc(t,e=new Date){if(t==="dark")return!0;if(t==="light")return!1;const{lat:i,lng:s}=Xa(Ja()),n=Kn(e,i,s);return n?e<n.sunrise||e>=n.sunset:zc()}function Kc(t=new Date){const{lat:e,lng:i}=Xa(Ja()),s=Kn(t,e,i);if(!s)return null;if(t<s.sunrise)return s.sunrise;if(t<s.sunset)return s.sunset;const n=Kn(new Date(t.getTime()+wo),e,i);return n?n.sunrise:null}const Wc={"Asia/Kuala_Lumpur":[3.14,101.69],"Europe/Dublin":[53.33,-6.25],"Europe/Istanbul":[41.01,28.96],"Europe/Vienna":[48.21,16.37],"Europe/London":[51.51,-.13],"Europe/Lisbon":[38.72,-9.14],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Berlin":[52.52,13.41],"Europe/Rome":[41.9,12.5],"Europe/Athens":[37.98,23.73],"Europe/Moscow":[55.76,37.62],"America/New_York":[40.71,-74.01],"America/Chicago":[41.88,-87.63],"America/Denver":[39.74,-104.99],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Africa/Cairo":[30.04,31.24],"Asia/Jerusalem":[31.78,35.22],"Asia/Dubai":[25.2,55.27],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Bangkok":[13.76,100.5],"Asia/Jakarta":[-6.21,106.85],"Asia/Singapore":[1.35,103.82],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Tokyo":[35.68,139.69],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76]};var Gc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,ko=(t,e,i,s)=>{for(var n=s>1?void 0:s?Vc(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Gc(e,i,n),n};function Li(t){return t.title?t.title:new Date(t.started_at*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Za(t,e){const i=t.pinned_at!=null;return r`
    <button type="button" role="menuitem" @click=${()=>e("pin")}>
      <sc-icon name=${i?"lucide-pin-off":"lucide-pin"}></sc-icon>${i?"Unpin":"Pin"}
    </button>
    <button type="button" role="menuitem" @click=${()=>e("rename")}>
      <sc-icon name="lucide-pencil"></sc-icon>Rename
    </button>
    <hr />
    <button type="button" role="menuitem" class="is-danger" @click=${()=>e("delete")}>
      <sc-icon name="lucide-trash-2"></sc-icon>Delete
    </button>`}function Wn(t){return f.getState().pinThread(t.id,t.pinned_at==null).catch(e=>{console.warn("[chat] pin failed",e)})}async function tl(t,e){const i=e.replace(/\s+/g," ").trim();!i||i===t.title||await f.getState().renameThread(t.id,i).catch(s=>{console.warn("[chat] rename failed",s)})}function el(t){const e=document.createElement("chat-delete-dialog");e.thread=t,document.body.append(e)}let Ts=class extends T{constructor(){super(...arguments),this.thread=null,this.deleting=!1}close(){this.deleting||this.remove()}async doDelete(){if(!(!this.thread||this.deleting)){this.deleting=!0;try{await f.getState().deleteThread(this.thread.id),this.remove()}catch(t){console.warn("[chat] delete failed",t),this.deleting=!1}}}render(){const t=this.thread;return r`<sc-dialog label="Delete this chat?" open @sc-hide=${this.close}>
      <p class="text-muted leading-relaxed">“${t?Li(t):""}” and all its messages will be deleted. This can't be undone.</p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm border border-line hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.doDelete()}>
          ${this.deleting?"Deleting…":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};ko([b({attribute:!1})],Ts.prototype,"thread",2);ko([d()],Ts.prototype,"deleting",2);Ts=ko([w("chat-delete-dialog")],Ts);var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,pi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Qc(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Yc(e,i,n),n};const Jc={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher"},Xc={notes:"canvas"};function Ri(t){const e=t.tool??Jc[t.persona]??null;return e?Xc[e]??e:null}const $o={key:"",label:"Mana",icon:"sparkles"},tr="cockpit.sidebar_chat_groups",er=15;let ke=class extends T{constructor(){super(...arguments),this.tools=[],this.open=ke.loadOpen(),this.recentsShown=er,this.menu=null,this.renamingId=null,this.closeMenu=()=>{this.menu=null},this.onOutside=t=>{this.menu&&!t.composedPath().some(e=>e instanceof HTMLElement&&e.classList.contains("mana-chat-menu"))&&(this.menu=null)},this.onMenuKey=t=>{t.key==="Escape"&&this.menu&&(t.preventDefault(),this.menu=null)}}static loadOpen(){try{const t=localStorage.getItem(tr);if(t)return new Set(JSON.parse(t))}catch{}return new Set(["pinned","recents"])}connectedCallback(){super.connectedCallback(),this.unsubThreads=j(this,f,t=>t.threads),this.unsubCurrent=j(this,f,t=>t.currentThreadId),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onMenuKey),window.addEventListener("blur",this.closeMenu)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onMenuKey),window.removeEventListener("blur",this.closeMenu)}onContextMenu(t,e){t.preventDefault(),this.menu={thread:e,x:Math.min(t.clientX,window.innerWidth-180),y:Math.min(t.clientY,window.innerHeight-140)}}menuAction(t){const e=this.menu?.thread;this.menu=null,e&&(t==="pin"?Wn(e):t==="rename"?(this.renamingId=e.id,this.updateComplete.then(()=>{const i=this.querySelector("input.mana-chat-rename");i?.focus(),i?.select()})):el(e))}async saveRename(t,e){this.renamingId===t.id&&(this.renamingId=null,await tl(t,e))}toggle(t){const e=new Set(this.open);e.has(t)?e.delete(t):e.add(t),this.open=e;try{localStorage.setItem(tr,JSON.stringify([...e]))}catch{}}toolInfo(t){return t?this.tools.find(e=>e.key===t)??{key:t,label:t[0].toUpperCase()+t.slice(1),icon:"message-circle"}:$o}openThread(t){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:t.id,tool:Ri(t)},bubbles:!0,composed:!0}))}onPin(t,e){t.stopPropagation(),Wn(e)}section(t,e,i){const s=this.open.has(t);return r`<div class="mana-chats-section">
      <button type="button" class="mana-chats-heading" aria-expanded=${s} @click=${()=>this.toggle(t)}>
        <span>${e}</span>
        <sc-icon name=${s?"lucide-chevron-down":"lucide-chevron-right"}></sc-icon>
      </button>
      ${s?i():c}
    </div>`}row(t,e){const i=this.toolInfo(Ri(t)),s=t.pinned_at!=null;return this.renamingId===t.id?r`<div class="mana-chat-row is-active">
        <input class="mana-chat-rename" aria-label="Chat name" .value=${t.title??""}
          @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.saveRename(t,n.target.value)):n.key==="Escape"&&(n.preventDefault(),n.stopPropagation(),this.renamingId=null)}}
          @blur=${n=>void this.saveRename(t,n.target.value)} />
      </div>`:r`<div class="mana-chat-row ${e===t.id?"is-active":""} ${this.menu?.thread.id===t.id?"is-menu":""}"
      @contextmenu=${n=>this.onContextMenu(n,t)}>
      <button type="button" class="mana-chat-open" title=${Li(t)} aria-current=${e===t.id?"true":c}
        @click=${()=>this.openThread(t)}>
        <sc-icon name="lucide-${i.icon}" title=${i.label}></sc-icon>
        <span class="mana-sidebar-label">${Li(t)}</span>
      </button>
      <button type="button" class="mana-chat-pin ${s?"is-pinned":""}" aria-label=${s?"Unpin chat":"Pin chat"}
        title=${s?"Unpin":"Pin"} @click=${n=>this.onPin(n,t)}>
        <sc-icon name=${s?"lucide-pin-off":"lucide-pin"}></sc-icon>
      </button>
    </div>`}renderMenu(){const t=this.menu;return t?r`<div class="mana-chat-menu" role="menu" style="left:${t.x}px;top:${t.y}px">
      ${Za(t.thread,e=>this.menuAction(e))}
    </div>`:c}render(){const{threads:t,currentThreadId:e}=f.getState(),i=t.filter(n=>n.pinned_at!=null).sort((n,o)=>(o.pinned_at??0)-(n.pinned_at??0)),s=t.slice(0,this.recentsShown);return r`
      ${i.length?this.section("pinned","Pinned",()=>i.map(n=>this.row(n,e))):c}
      ${this.section("recents","Recents",()=>r`
        ${s.length?s.map(n=>this.row(n,e)):r`<p class="mana-chats-empty">No chats yet</p>`}
        ${t.length>this.recentsShown?r`<button type="button" class="mana-chats-more" @click=${()=>{this.recentsShown+=er}}>Show more</button>`:c}
      `)}
      ${this.renderMenu()}
    `}};pi([b({attribute:!1})],ke.prototype,"tools",2);pi([d()],ke.prototype,"open",2);pi([d()],ke.prototype,"recentsShown",2);pi([d()],ke.prototype,"menu",2);pi([d()],ke.prototype,"renamingId",2);ke=pi([w("sidebar-threads")],ke);var Zc=Object.defineProperty,td=Object.getOwnPropertyDescriptor,mi=(t,e,i,s)=>{for(var n=s>1?void 0:s?td(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Zc(e,i,n),n};let Oe=class extends T{constructor(){super(...arguments),this.tools=[],this.q="",this.hits=null,this.active=0,this.timer=null,this.seq=0}firstUpdated(){this.input?.focus()}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearTimeout(this.timer)}close(){this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))}onInput(t){this.q=t.target.value,this.active=0,this.timer&&clearTimeout(this.timer);const e=this.q.trim();if(!e){this.hits=null;return}this.timer=setTimeout(()=>{const i=++this.seq;C.threads.search(e).then(s=>{i===this.seq&&(this.hits=s)}).catch(()=>{i===this.seq&&(this.hits=[])})},180)}results(){return this.hits??f.getState().threads.slice(0,8)}pick(t){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:t.id,tool:Ri(t)},bubbles:!0,composed:!0})),this.close()}onKey(t){const e=this.results();if(t.key==="Escape")t.preventDefault(),this.close();else if(t.key==="ArrowDown")t.preventDefault(),this.active=Math.min(this.active+1,e.length-1);else if(t.key==="ArrowUp")t.preventDefault(),this.active=Math.max(this.active-1,0);else if(t.key==="Enter"){const i=e[this.active];i&&(t.preventDefault(),this.pick(i))}}toolLabel(t){const e=Ri(t);return e?this.tools.find(i=>i.key===e)?.label??e:$o.label}render(){const t=this.results();return r`<div class="mana-search-backdrop" @click=${this.close}>
      <div class="mana-search" role="dialog" aria-label="Search chats" @click=${e=>e.stopPropagation()}>
        <div class="mana-search-input">
          <sc-icon name="lucide-search"></sc-icon>
          <input type="text" placeholder="Search chats" aria-label="Search chats" .value=${this.q}
            @input=${this.onInput} @keydown=${this.onKey} />
        </div>
        <p class="mana-search-heading">${this.hits?"Results":"Recent chats"}</p>
        <ul role="listbox" class="mana-search-list">
          ${t.length===0?r`<li class="mana-search-empty">No chats match "${this.q.trim()}"</li>`:t.map((e,i)=>r`<li role="option" aria-selected=${i===this.active}
                class="mana-search-row ${i===this.active?"is-active":""}"
                @mouseenter=${()=>{this.active=i}} @click=${()=>this.pick(e)}>
                <sc-icon name="lucide-message-circle"></sc-icon>
                <span class="mana-search-text">
                  <span class="mana-search-title">${Li(e)}</span>
                  ${e.snippet?r`<span class="mana-search-snippet">${e.snippet}</span>`:c}
                </span>
                <span class="mana-search-tool">${this.toolLabel(e)}</span>
              </li>`)}
        </ul>
      </div>
    </div>`}};mi([b({attribute:!1})],Oe.prototype,"tools",2);mi([d()],Oe.prototype,"q",2);mi([d()],Oe.prototype,"hits",2);mi([d()],Oe.prototype,"active",2);mi([V("input")],Oe.prototype,"input",2);Oe=mi([w("thread-search")],Oe);var ed=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Vs=(t,e,i,s)=>{for(var n=s>1?void 0:s?id(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ed(e,i,n),n};let Ni=class extends T{constructor(){super(...arguments),this.tools=null,this.menuOpen=!1,this.renaming=!1,this.onOutside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.onKey=t=>{t.key==="Escape"&&this.menuOpen&&(t.preventDefault(),this.menuOpen=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=j(this,f,t=>t.threads),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.unsubMode=j(this,f,t=>t.rightPaneMode),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),this.unsubMode?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey)}current(){const{threads:t,currentThreadId:e}=f.getState();return e==null?null:t.find(i=>i.id===e)??null}run(t){const e=this.current();this.menuOpen=!1,e&&(t==="pin"?Wn(e):t==="delete"?el(e):(this.renaming=!0,this.updateComplete.then(()=>{const i=this.querySelector("input");i?.focus(),i?.select()})))}async save(t){const e=this.current();this.renaming&&(this.renaming=!1,e&&await tl(e,t))}toolIcon(t){if(!this.tools)return c;const e=t?Ri(t):f.getState().rightPaneMode,i=e&&this.tools.find(s=>s.key===e)||$o;return r`<sc-icon class="mana-chat-title-tool" name="lucide-${i.icon}" title=${i.label} aria-label=${`In ${i.label}`}></sc-icon>`}newChatButton(){return r`<button type="button" class="mana-chat-title-btn mana-chat-new-btn" aria-label="New chat" title="New chat (⌘N)"
      @click=${()=>document.dispatchEvent(new CustomEvent("mana-new-chat"))}>
      <sc-icon name="lucide-square-pen"></sc-icon>
    </button>`}render(){const t=this.current();return t?this.renaming?r`<input class="mana-chat-title-input" aria-label="Chat name" .value=${t.title??""}
        @keydown=${e=>{e.key==="Enter"?(e.preventDefault(),this.save(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.renaming=!1)}}
        @blur=${e=>void this.save(e.target.value)} />`:r`<div class="mana-chat-titlebar">
      ${this.toolIcon(t)}
      <span class="mana-chat-title" title="Double-click to rename" @dblclick=${()=>this.run("rename")}>${Li(t)}</span>
      <button type="button" class="mana-chat-title-btn" aria-label="Chat options" aria-haspopup="menu" aria-expanded=${this.menuOpen}
        @click=${()=>{this.menuOpen=!this.menuOpen}}>
        <sc-icon name="lucide-chevron-down"></sc-icon>
      </button>
      ${this.menuOpen?r`<div class="mana-chat-menu is-anchored" role="menu">${Za(t,e=>this.run(e))}</div>`:c}
      ${this.newChatButton()}
    </div>`:r`<div class="mana-chat-titlebar">${this.toolIcon(t)}<span class="mana-chat-title is-new">New chat</span>${this.newChatButton()}</div>`}};Vs([b({attribute:!1})],Ni.prototype,"tools",2);Vs([d()],Ni.prototype,"menuOpen",2);Vs([d()],Ni.prototype,"renaming",2);Ni=Vs([w("chat-title-bar")],Ni);function So(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ge=So();function il(t){Ge=t}var Ie={exec:()=>null};function ti(t){let e=[];return i=>{let s=Math.max(0,Math.min(3,i-1)),n=e[s];return n||(n=t(s),e[s]=n),n}}function F(t,e=""){let i=typeof t=="string"?t:t.source,s={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(ut.caret,"$1"),i=i.replace(n,a),s},getRegex:()=>new RegExp(i,e)};return s}var sd=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),ut={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ti(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ti(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ti(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:ti(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:ti(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:ti(t=>new RegExp(`^ {0,${t}}>`))},nd=/^(?:[ \t]*(?:\n|$))+/,od=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Gi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ad=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,To=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,sl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nl=F(sl).replace(/bull/g,To).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ld=F(sl).replace(/bull/g,To).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Co=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,cd=/^[^\n]+/,Eo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,dd=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Eo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),hd=F(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,To).getRegex(),Ys="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Do=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ud=F("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Do).replace("tag",Ys).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ol=F(Co).replace("hr",Gi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex(),pd=F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ol).getRegex(),Po={blockquote:pd,code:od,def:dd,fences:rd,heading:ad,hr:Gi,html:ud,lheading:nl,list:hd,newline:nd,paragraph:ol,table:Ie,text:cd},ir=F("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Gi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex(),md={...Po,lheading:ld,table:ir,paragraph:F(Co).replace("hr",Gi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ir).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex()},fd={...Po,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Do).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ie,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(Co).replace("hr",Gi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,rl=/^( {2,}|\\)\n(?!\s*$)/,vd=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fi=/[\p{P}\p{S}]/u,Qs=/[\s\p{P}\p{S}]/u,Ao=/[^\s\p{P}\p{S}]/u,yd=F(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Qs).getRegex(),al=/(?!~)[\p{P}\p{S}]/u,xd=/(?!~)[\s\p{P}\p{S}]/u,wd=/(?:[^\s\p{P}\p{S}]|~)/u,kd=F(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",sd?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ll=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,$d=F(ll,"u").replace(/punct/g,fi).getRegex(),Sd=F(ll,"u").replace(/punct/g,al).getRegex(),cl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Td=F(cl,"gu").replace(/notPunctSpace/g,Ao).replace(/punctSpace/g,Qs).replace(/punct/g,fi).getRegex(),Cd=F(cl,"gu").replace(/notPunctSpace/g,wd).replace(/punctSpace/g,xd).replace(/punct/g,al).getRegex(),Ed=F("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ao).replace(/punctSpace/g,Qs).replace(/punct/g,fi).getRegex(),Dd=F(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,fi).getRegex(),Pd="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ad=F(Pd,"gu").replace(/notPunctSpace/g,Ao).replace(/punctSpace/g,Qs).replace(/punct/g,fi).getRegex(),Md=F(/\\(punct)/,"gu").replace(/punct/g,fi).getRegex(),Id=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_d=F(Do).replace("(?:-->|$)","-->").getRegex(),Od=F("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_d).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ld=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dl=F(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",Eo).getRegex(),hl=F(/^!?\[(ref)\](?:\[\])?/).replace("ref",Eo).getRegex(),Rd=F("reflink|nolink(?!\\()","g").replace("reflink",dl).replace("nolink",hl).getRegex(),sr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Mo={_backpedal:Ie,anyPunctuation:Md,autolink:Id,blockSkip:kd,br:rl,code:bd,del:Ie,delLDelim:Ie,delRDelim:Ie,emStrongLDelim:$d,emStrongRDelimAst:Td,emStrongRDelimUnd:Ed,escape:gd,link:Ld,nolink:hl,punctuation:yd,reflink:dl,reflinkSearch:Rd,tag:Od,text:vd,url:Ie},Nd={...Mo,link:F(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},Gn={...Mo,emStrongRDelimAst:Cd,emStrongLDelim:Sd,delLDelim:Dd,delRDelim:Ad,url:F(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:F(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sr).getRegex()},jd={...Gn,br:F(rl).replace("{2,}","*").getRegex(),text:F(Gn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},es={normal:Po,gfm:md,pedantic:fd},$i={normal:Mo,gfm:Gn,breaks:jd,pedantic:Nd},Fd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nr=t=>Fd[t];function Yt(t,e){if(e){if(ut.escapeTest.test(t))return t.replace(ut.escapeReplace,nr)}else if(ut.escapeTestNoEncode.test(t))return t.replace(ut.escapeReplaceNoEncode,nr);return t}function or(t){try{t=encodeURI(t).replace(ut.percentDecode,"%")}catch{return null}return t}function rr(t,e){let i=t.replace(ut.findPipe,(o,a,l)=>{let h=!1,u=a;for(;--u>=0&&l[u]==="\\";)h=!h;return h?"|":" |"}),s=i.split(ut.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(ut.slashPipe,"|");return s}function fe(t,e,i){let s=t.length;if(s===0)return"";let n=0;for(;n<s&&t.charAt(s-n-1)===e;)n++;return t.slice(0,s-n)}function ar(t){let e=t.split(`
`),i=e.length-1;for(;i>=0&&ut.blankLine.test(e[i]);)i--;return e.length-i<=2?t:e.slice(0,i+1).join(`
`)}function Ud(t,e){if(t.indexOf(e[1])===-1)return-1;let i=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return i>0?-2:-1}function Bd(t,e=0){let i=e,s="";for(let n of t)if(n==="	"){let o=4-i%4;s+=" ".repeat(o),i+=o}else s+=n,i++;return s}function lr(t,e,i,s,n){let o=e.href,a=e.title||null,l=t[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let h={type:t[0].charAt(0)==="!"?"image":"link",raw:i,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,h}function Hd(t,e,i){let s=t.match(i.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(o=>{let a=o.match(i.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=n.length?o.slice(n.length):o}).join(`
`)}var Es=class{options;rules;lexer;constructor(t){this.options=t||Ge}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let i=this.options.pedantic?e[0]:ar(e[0]),s=i.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i,codeBlockStyle:"indented",text:s}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let i=e[0],s=Hd(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let s=fe(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:fe(e[0],`
`),depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:fe(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let i=fe(e[0],`
`).split(`
`),s="",n="",o=[];for(;i.length>0;){let a=!1,l=[],h;for(h=0;h<i.length;h++)if(this.rules.other.blockquoteStart.test(i[h]))l.push(i[h]),a=!0;else if(!a)l.push(i[h]);else break;i=i.slice(h);let u=l.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,n=n?`${n}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=m,i.length===0)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let v=g,y=v.raw+`
`+i.join(`
`),D=this.blockquote(y);o[o.length-1]=D,s=s.substring(0,s.length-v.raw.length)+D.raw,n=n.substring(0,n.length-v.text.length)+D.text;break}else if(g?.type==="list"){let v=g,y=v.raw+`
`+i.join(`
`),D=this.list(y);o[o.length-1]=D,s=s.substring(0,s.length-g.raw.length)+D.raw,n=n.substring(0,n.length-v.raw.length)+D.raw,i=y.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),s=i.length>1,n={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let o=this.rules.other.listItemRegex(i),a=!1;for(;t;){let h=!1,u="",p="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let m=Bd(e[2].split(`
`,1)[0],e[1].length),g=t.split(`
`,1)[0],v=!m.trim(),y=0;if(this.options.pedantic?(y=2,p=m.trimStart()):v?y=e[1].length+1:(y=m.search(this.rules.other.nonSpaceChar),y=y>4?1:y,p=m.slice(y),y+=e[1].length),v&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),h=!0),!h){let D=this.rules.other.nextBulletRegex(y),x=this.rules.other.hrRegex(y),N=this.rules.other.fencesBeginRegex(y),Z=this.rules.other.headingBeginRegex(y),Ft=this.rules.other.htmlBeginRegex(y),Ct=this.rules.other.blockquoteBeginRegex(y);for(;t;){let me=t.split(`
`,1)[0],S;if(g=me,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),S=g):S=g.replace(this.rules.other.tabCharGlobal,"    "),N.test(g)||Z.test(g)||Ft.test(g)||Ct.test(g)||D.test(g)||x.test(g))break;if(S.search(this.rules.other.nonSpaceChar)>=y||!g.trim())p+=`
`+S.slice(y);else{if(v||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(m)||Z.test(m)||x.test(m))break;p+=`
`+g}v=!g.trim(),u+=me+`
`,t=t.substring(me.length+1),m=S.slice(y)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=u}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let h of n.items){this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]);let u=h.tokens[0];if(h.task&&(u?.type==="text"||u?.type==="paragraph")){h.text=h.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(h.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};h.checked=m.checked,n.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=m.raw+h.tokens[0].raw,h.tokens[0].text=m.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(m)):h.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):h.tokens.unshift(m)}}else h.task&&(h.task=!1);if(!n.loose){let p=h.tokens.filter(g=>g.type==="space"),m=p.length>0&&p.some(g=>this.rules.other.anyLine.test(g.raw));n.loose=m}}if(n.loose)for(let h of n.items){h.loose=!0;for(let u of h.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(t){let e=this.rules.block.html.exec(t);if(e){let i=ar(e[0]);return{type:"html",block:!0,raw:i,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:i}}}def(t){let e=this.rules.block.def.exec(t);if(e){let i=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:fe(e[0],`
`),href:s,title:n}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=rr(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:fe(e[0],`
`),header:[],align:[],rows:[]};if(i.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(rr(a,o.header.length).map((l,h)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[h]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let i=e[1].trim();return{type:"heading",raw:fe(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:i,tokens:this.lexer.inline(i)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=fe(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{let o=Ud(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],n=o[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),lr(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return lr(i,n,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,o,a,l=n,h=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+n);(s=u.exec(e))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&n%3&&!((n+a)%3)){h+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+h);let p=[...s[0]][0].length,m=t.slice(0,n+s.index+p+a);if(Math.min(n,a)%2){let v=m.slice(1,-1);return{type:"em",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}let g=m.slice(2,-2);return{type:"strong",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(i),n=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&n&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,i=""){let s=this.rules.inline.delLDelim.exec(t);if(s&&(!s[1]||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,o,a,l=n,h=this.rules.inline.delRDelim;for(h.lastIndex=0,e=e.slice(-1*t.length+n);(s=h.exec(e))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(a=[...o].length,a!==n))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let u=[...s[0]][0].length,p=t.slice(0,n+s.index+u+a),m=p.slice(n,-n);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let i,s;return e[2]==="@"?(i=e[1],s="mailto:"+i):(i=e[1],s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let i,s;if(e[2]==="@")i=e[0],s="mailto:"+i;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);i=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:i}}}},Ut=class Vn{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ge,this.options.tokenizer=this.options.tokenizer||new Es,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:ut,block:es.normal,inline:$i.normal};this.options.pedantic?(i.block=es.pedantic,i.inline=$i.pedantic):this.options.gfm&&(i.block=es.gfm,this.options.breaks?i.inline=$i.breaks:i.inline=$i.gfm),this.tokenizer.rules=i}static get rules(){return{block:es,inline:$i}}static lex(e,i){return new Vn(i).lex(e)}static lexInline(e,i){return new Vn(i).inlineTokens(e)}lex(e){e=e.replace(ut.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ut.tabCharGlobal,"    ").replace(ut.spaceLine,""));let n=1/0;for(;e;){if(e.length<n)n=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(l=>(o=l.call({lexer:this},e,i))?(e=e.substring(o.raw.length),i.push(o),!0):!1))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let l=i.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:i.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let l=i.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):i.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let l=i.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},i.push(o));continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),i.push(o);continue}let a=e;if(this.options.extensions?.startBlock){let l=1/0,h=e.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},h),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let l=i.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):i.push(o),s=a.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let l=i.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):i.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}inlineTokens(e,i=[]){this.tokenizer.lexer=this;let s=e,n=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)u.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)o=n[2]?n[2].length:0,s=s.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="",h=1/0;for(;e;){if(e.length<h)h=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(l=""),a=!1;let u;if(this.options.extensions?.inline?.some(m=>(u=m.call({lexer:this},e,i))?(e=e.substring(u.raw.length),i.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);let m=i.at(-1);u.type==="text"&&m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):i.push(u);continue}if(u=this.tokenizer.emStrong(e,s,l)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.del(e,s,l)){e=e.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),i.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),i.push(u);continue}let p=e;if(this.options.extensions?.startInline){let m=1/0,g=e.slice(1),v;this.options.extensions.startInline.forEach(y=>{v=y.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(p=e.substring(0,m+1))}if(u=this.tokenizer.inlineText(p)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),a=!0;let m=i.at(-1);m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):i.push(u);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return i}infiniteLoopError(e){let i="Infinite loop on byte: "+e;if(this.options.silent)console.error(i);else throw new Error(i)}},Ds=class{options;parser;constructor(t){this.options=t||Ge}space(t){return""}code({text:t,lang:e,escaped:i}){let s=(e||"").match(ut.notSpaceStart)?.[0],n=t.replace(ut.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Yt(s)+'">'+(i?n:Yt(n,!0))+`</code></pre>
`:"<pre><code>"+(i?n:Yt(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,i=t.start,s="";for(let a=0;a<t.items.length;a++){let l=t.items[a];s+=this.listitem(l)}let n=e?"ol":"ul",o=e&&i!==1?' start="'+i+'"':"";return"<"+n+o+`>
`+s+"</"+n+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",i="";for(let n=0;n<t.header.length;n++)i+=this.tablecell(t.header[n]);e+=this.tablerow({text:i});let s="";for(let n=0;n<t.rows.length;n++){let o=t.rows[n];i="";for(let a=0;a<o.length;a++)i+=this.tablecell(o[a]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Yt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let s=this.parser.parseInline(i),n=or(t);if(n===null)return s;t=n;let o='<a href="'+t+'"';return e&&(o+=' title="'+Yt(e)+'"'),o+=">"+s+"</a>",o}image({href:t,title:e,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let n=or(t);if(n===null)return Yt(i);t=n;let o=`<img src="${t}" alt="${Yt(i)}"`;return e&&(o+=` title="${Yt(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Yt(t.text)}},Io=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},Bt=class Yn{options;renderer;textRenderer;constructor(e){this.options=e||Ge,this.options.renderer=this.options.renderer||new Ds,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Io}static parse(e,i){return new Yn(i).parse(e)}static parseInline(e,i){return new Yn(i).parseInline(e)}parse(e){this.renderer.parser=this;let i="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){i+=l||"";continue}}let o=n;switch(o.type){case"space":{i+=this.renderer.space(o);break}case"hr":{i+=this.renderer.hr(o);break}case"heading":{i+=this.renderer.heading(o);break}case"code":{i+=this.renderer.code(o);break}case"table":{i+=this.renderer.table(o);break}case"blockquote":{i+=this.renderer.blockquote(o);break}case"list":{i+=this.renderer.list(o);break}case"checkbox":{i+=this.renderer.checkbox(o);break}case"html":{i+=this.renderer.html(o);break}case"def":{i+=this.renderer.def(o);break}case"paragraph":{i+=this.renderer.paragraph(o);break}case"text":{i+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(e,i=this.renderer){this.renderer.parser=this;let s="";for(let n=0;n<e.length;n++){let o=e[n];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=l||"";continue}}let a=o;switch(a.type){case"escape":{s+=i.text(a);break}case"html":{s+=i.html(a);break}case"link":{s+=i.link(a);break}case"image":{s+=i.image(a);break}case"checkbox":{s+=i.checkbox(a);break}case"strong":{s+=i.strong(a);break}case"em":{s+=i.em(a);break}case"codespan":{s+=i.codespan(a);break}case"br":{s+=i.br(a);break}case"del":{s+=i.del(a);break}case"text":{s+=i.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Oi=class{options;block;constructor(t){this.options=t||Ge}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?Ut.lex:Ut.lexInline}provideParser(t=this.block){return t?Bt.parse:Bt.parseInline}},ul=class{defaults=So();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Bt;Renderer=Ds;TextRenderer=Io;Lexer=Ut;Tokenizer=Es;Hooks=Oi;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let s of t)switch(i=i.concat(e.call(this,s)),s.type){case"table":{let n=s;for(let o of n.header)i=i.concat(this.walkTokens(o.tokens,e));for(let o of n.rows)for(let a of o)i=i.concat(this.walkTokens(a.tokens,e));break}case"list":{let n=s;i=i.concat(this.walkTokens(n.items,e));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);i=i.concat(this.walkTokens(a,e))}):n.tokens&&(i=i.concat(this.walkTokens(n.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(i=>{let s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=e.renderers[n.name];o?e.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[n.level];o?o.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),i.renderer){let n=this.defaults.renderer||new Ds(this.defaults);for(let o in i.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=i.renderer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p||""}}s.renderer=n}if(i.tokenizer){let n=this.defaults.tokenizer||new Es(this.defaults);for(let o in i.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=i.tokenizer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}s.tokenizer=n}if(i.hooks){let n=this.defaults.hooks||new Oi;for(let o in i.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=i.hooks[a],h=n[a];Oi.passThroughHooks.has(o)?n[a]=u=>{if(this.defaults.async&&Oi.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await l.call(n,u);return h.call(n,m)})();let p=l.call(n,u);return h.call(n,p)}:n[a]=(...u)=>{if(this.defaults.async)return(async()=>{let m=await l.apply(n,u);return m===!1&&(m=await h.apply(n,u)),m})();let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}s.hooks=n}if(i.walkTokens){let n=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),n&&(l=l.concat(n.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Ut.lex(t,e??this.defaults)}parser(t,e){return Bt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let s={...i},n={...this.defaults,...s},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(e):e,l=await(n.hooks?await n.hooks.provideLexer(t):t?Ut.lex:Ut.lexInline)(a,n),h=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(h,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser(t):t?Bt.parse:Bt.parseInline)(h,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(o);try{n.hooks&&(e=n.hooks.preprocess(e));let a=(n.hooks?n.hooks.provideLexer(t):t?Ut.lex:Ut.lexInline)(e,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(t):t?Bt.parse:Bt.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+Yt(i.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(i);throw i}}},Le=new ul;function z(t,e){return Le.parse(t,e)}z.options=z.setOptions=function(t){return Le.setOptions(t),z.defaults=Le.defaults,il(z.defaults),z};z.getDefaults=So;z.defaults=Ge;z.use=function(...t){return Le.use(...t),z.defaults=Le.defaults,il(z.defaults),z};z.walkTokens=function(t,e){return Le.walkTokens(t,e)};z.parseInline=Le.parseInline;z.Parser=Bt;z.parser=Bt.parse;z.Renderer=Ds;z.TextRenderer=Io;z.Lexer=Ut;z.lexer=Ut.lex;z.Tokenizer=Es;z.Hooks=Oi;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;Bt.parse;Ut.lex;const zd=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),qd=new ul({gfm:!0,renderer:{html(t){return zd(t.text)}}}),Kd=new Set(["p","br","hr","strong","b","em","i","del","s","code","pre","kbd","sup","sub","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","table","thead","tbody","tr","th","td","input","span"]),Wd=new Set(["script","style","iframe","object","embed","template","noscript","svg","math","form","textarea","select","button"]),Gd=/^(https?:|mailto:|\/|#|\.{0,2}\/)/i,Vd=/^(https?:|\/|data:image\/(png|jpe?g|gif|webp);)/i;function Yd(t){const e=t.tagName.toLowerCase();for(const i of Array.from(t.attributes)){const s=i.name.toLowerCase(),n=i.value.trim();let o=!1;e==="a"&&s==="href"?o=Gd.test(n):e==="a"&&s==="title"?o=!0:e==="img"&&s==="src"?o=Vd.test(n):e==="img"&&(s==="alt"||s==="title")?o=!0:e==="ol"&&s==="start"?o=/^\d+$/.test(n):(e==="th"||e==="td")&&s==="align"?o=/^(left|right|center)$/.test(n):e==="code"&&s==="class"?o=/^language-[\w+-]+$/.test(n):e==="input"&&(s==="type"||s==="checked"||s==="disabled")&&(o=s!=="type"||n==="checkbox"),o||t.removeAttribute(i.name)}e==="a"&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")),e==="input"&&t.setAttribute("disabled","")}function Qd(t){const e=document.createElement("template");e.innerHTML=t;const i=s=>{for(const n of Array.from(s.children)){const o=n.tagName.toLowerCase();if(Wd.has(o)){n.remove();continue}if(i(n),!Kd.has(o)||o==="input"&&n.getAttribute("type")!=="checkbox"){n.replaceWith(...Array.from(n.childNodes));continue}Yd(n)}};return i(e.content),e.innerHTML}function pl(t){return Qd(qd.parse(t,{async:!1}))}const cr=t=>Array.from(t.matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu),e=>({value:e[0].toLowerCase(),start:e.index,end:e.index+e[0].length})),Jd=(t,e)=>{const i=t.toLowerCase().indexOf(e.toLowerCase());return i<0?null:{start:i,end:i+e.length}};function ml(t,e){if(!t.trim())return null;const i=e.trim().replace(/^\s*["“]|["”]\s*$/g,"");if(i.length<4)return null;const s=i.split(/(?:\.{3}|…)/).map(n=>n.trim()).filter(n=>n.length>=4).sort((n,o)=>o.length-n.length);for(const n of s.length?s:[i]){const o=Jd(t,n);if(o)return o;const a=cr(n);if(a.length<2)continue;const l=cr(t);for(let h=0;h<=l.length-a.length;h++){let u=!0;for(let g=0;g<a.length;g++)if(l[h+g]?.value!==a[g]?.value){u=!1;break}const p=l[h],m=l[h+a.length-1];if(u&&p&&m)return{start:p.start,end:m.end}}}return null}var Xd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,gi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Zd(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Xd(e,i,n),n};function th(t){if(!t)return;const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);cursor:zoom-out;padding:2rem;opacity:0;transition:opacity .12s ease;";const i=document.createElement("img");i.src=t,i.style.cssText="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.5);",e.appendChild(i);const s=()=>{e.remove(),document.removeEventListener("keydown",n)},n=o=>{o.key==="Escape"&&s()};e.addEventListener("click",s),document.addEventListener("keydown",n),document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"})}let Re=class extends T{constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[],this.pending=!1,this.publisherReferences=!1,this.referenceFrame=null}disconnectedCallback(){super.disconnectedCallback(),this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame)}updated(){this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame),this.referenceFrame=requestAnimationFrame(()=>{this.referenceFrame=null,this.markPublisherReferences()})}markPublisherReferences(){const t=this.querySelector(".chat-md");if(!t)return;for(const n of Array.from(t.querySelectorAll(".chat-draft-ref")))n.replaceWith(document.createTextNode(n.textContent??""));if(t.normalize(),!this.publisherReferences||this.chatRole!=="mentor")return;const e=document.querySelector("publisher-editor textarea[data-draft-body]")?.value??"";if(!e)return;const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest("a, code, pre, .chat-draft-ref")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),s=[];for(;i.nextNode();)s.push(i.currentNode);for(const n of s){const o=n.data,a=Array.from(o.matchAll(/["“]([^"“”\n]{4,320})["”]/g)).filter(u=>u[1]&&ml(e,u[1]));if(!a.length)continue;const l=document.createDocumentFragment();let h=0;for(const u of a){const p=u.index??0;l.append(o.slice(h,p));const m=document.createElement("span");m.className="chat-draft-ref";const g=u[1];g&&(m.dataset.publisherReference=g,m.tabIndex=0,m.setAttribute("role","link"),m.setAttribute("aria-label",`Show “${g}” in the Publisher draft`),m.title="Show this in the draft",m.textContent=u[0],l.append(m),h=p+u[0].length)}l.append(o.slice(h)),n.replaceWith(l)}}openPublisherReference(t){const i=(t instanceof Element?t.closest(".chat-draft-ref"):null)?.dataset.publisherReference;return i?(document.dispatchEvent(new CustomEvent("publisher-reference",{detail:{text:i}})),!0):!1}renderBody(){return this.content?this.chatRole==="mentor"?r`<div class="chat-md">${W(pl(this.content))}</div>`:r`<span class="whitespace-pre-wrap break-words">${this.content}</span>`:this.chatRole==="mentor"&&this.pending?r`<span
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
              @click=${()=>th(t.url)}
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
    `}};gi([b()],Re.prototype,"chatRole",2);gi([b()],Re.prototype,"content",2);gi([b({type:Array})],Re.prototype,"attachments",2);gi([b({type:Boolean})],Re.prototype,"pending",2);gi([b({type:Boolean})],Re.prototype,"publisherReferences",2);Re=gi([w("chat-message")],Re);var eh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,Js=(t,e,i,s)=>{for(var n=s>1?void 0:s?ih(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&eh(e,i,n),n};function sh(t){return new Date(t*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let ji=class extends T{constructor(){super(...arguments),this.live=[],this.pending=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=t=>{const e=t.detail;if(!e)return;const i=`live_user_${Date.now()}`,s=`live_mentor_${Date.now()}`;this.liveMentorId=s,this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:i,role:"user",content:e.text,attachments:e.attachments.map(n=>({url:n.url}))},{id:s,role:"mentor",content:"",attachments:[]}],e.liveDetail.append=n=>this.appendToMentor(s,n),e.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onQueueAdd=t=>{const e=t.detail;e&&(this.pending=[...this.pending,{id:e.id,text:e.text,attachments:e.attachments??[]}],this.updateComplete.then(()=>this.scrollToBottom()))},this.onQueueRemove=t=>{const e=t.detail?.id;e&&(this.pending=this.pending.filter(i=>i.id!==e))},this.onQueueClear=()=>{this.pending=[]},this.onSlashMessage=t=>{const e=t.detail;if(!e)return;const i=`slash_user_${Date.now()}`,s=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:i,role:"user",content:e.user,attachments:[]},{id:s,role:"mentor",content:e.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(t,e){this.live=this.live.map(s=>s.id===t?{...s,content:s.content+e}:s);const i=this.renderRoot.querySelector(`chat-message[data-live-id="${t}"]`);i&&(i.content=(i.content||"")+e),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const t=this.scroller;t&&(t.scrollTop=t.scrollHeight)}createRenderRoot(){const t=super.createRenderRoot();return this.style.display="block",t}connectedCallback(){super.connectedCallback(),this.unsubMessages=j(this,f,t=>t.messages),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.unsubThreads=j(this,f,t=>t.threads),this.unsubMode=j(this,f,t=>t.rightPaneMode),this.prevThreadId=f.getState().currentThreadId,f.subscribe((t,e)=>{t.messages!==e.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),t.currentThreadId!==this.prevThreadId&&(this.prevThreadId=t.currentThreadId,this.live=[],this.pending=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage),document.addEventListener("queue-add",this.onQueueAdd),document.addEventListener("queue-remove",this.onQueueRemove),document.addEventListener("queue-clear",this.onQueueClear)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage),document.removeEventListener("queue-add",this.onQueueAdd),document.removeEventListener("queue-remove",this.onQueueRemove),document.removeEventListener("queue-clear",this.onQueueClear)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(t){const e=t.tool_calls;return e&&Array.isArray(e.attachments)?e.attachments:[]}mapRole(t){return t.role==="user"?"user":(t.role==="mentor","mentor")}render(){const t=f.getState(),{threads:e,currentThreadId:i}=t,s=this.frozenMessages??t.messages;Ka[Wa(t)];const n=i?e.find(o=>o.id===i)??null:null;return r`
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
            ${n&&s.length?r`<div class="text-center text-xs text-muted -mb-3">${sh(n.started_at)}</div>`:null}
            ${s.map(o=>r`
              <chat-message
                class="block"
                data-row-key=${`chat:${o.id}`}
                data-mana-thread=${i}
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
    `}};Js([d()],ji.prototype,"live",2);Js([d()],ji.prototype,"pending",2);Js([V("[data-scroll]")],ji.prototype,"scroller",2);ji=Js([w("chat-pane")],ji);async function*fl(t){{yield*rh(t);return}}const nh="https://serdarsalim.com",dr=`[Get your own Mana →](${nh})`;function oh(t,e){const i={"goals-advisor":"Add a goal, give it a key result, or tick off a weekly task.","grocery-keeper":"Add something to Shopping and move it to the pantry when it is bought.","finance-keeper":"Log an expense, adjust a category budget, or record an account balance.","circle-keeper":"Open a person, add a note, or put them in more than one circle.","office-keeper":"Open a sample project and read the handoffs in its inbox.","learn-coach":"Open a sample skill, finish a lesson, or try a review question.",publisher:"Write a post, link its proof, add a voice sample, or try the publishing planner. Posting to LinkedIn is off here.",mana:"Open Notes and write, format, pin, search, or restore a note."};return e===1?`This chat is scripted. No AI model is connected, and it cannot change your tools.

${i[t]??"The tools work by hand, with fictional sample data."} Your edits stay in this browser.

${dr}`:e%2===0?`In your own Mana, a connected model can work with your tools by chat or voice. This demo only shows a scripted reply.

${i[t]??"Try Goals, Finance, Circles, Learn, Notes or Publisher from the sidebar."}`:`Keep exploring the tools. You can edit the sample data and reset it from Settings whenever you want.

${dr}`}async function*rh(t){const{t:e}=await Lt(async()=>{const{t:m}=await import("./tables-D2emgc0r.js");return{t:m}},__vite__mapDeps([0,1])),{now:i}=await Lt(async()=>{const{now:m}=await import("./db-DHWx8Fue.js");return{now:m}},[]);let s=t.threadId??null;if(s==null){const m=i();s=e.threads.insert({title:t.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:t.persona??"goals-advisor",tool:t.view?.tool??null,pinned_at:null,focus_goal_id:null,started_at:m,last_msg_at:m,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${m}`}}).id,yield{type:"thread",threadId:s}}e.messages.insert({thread_id:s,role:"user",content:t.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:i(),private:0});const n=e.threads.get(s)?.persona??t.persona??"goals-advisor",o=e.messages.where(m=>m.thread_id===s&&m.role==="user").length,a=oh(n,o),l=m=>new Promise(g=>setTimeout(g,m));await l(250);const h=a.match(/\S+\s*/g)??[a],u=3;for(let m=0;m<h.length&&!t.signal?.aborted;m+=u)yield{type:"text",text:h.slice(m,m+u).join("")},await l(45);e.messages.insert({thread_id:s,role:"mentor",content:a,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:i(),private:0});const p=e.threads.get(s);p&&e.threads.update(s,{last_msg_at:i(),title:p.title||t.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=Ki(class extends Gs{constructor(t){if(super(t),t.type!==bo.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||this.nt?.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return vo}});var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,$t=(t,e,i,s)=>{for(var n=s>1?void 0:s?lh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ah(e,i,n),n};let pt=class extends It{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const t=!!this.href,e=Ps({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),i=r`
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
        >${i}</a
      >`:r`<button
      class=${e}
      type=${this.type}
      name=${this.name}
      value=${this.value}
      ?disabled=${this.disabled}
    >
      ${i}
    </button>`}};pt.styles=Rt`
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
  `;$t([b({reflect:!0})],pt.prototype,"variant",2);$t([b({reflect:!0})],pt.prototype,"size",2);$t([b({type:Boolean,reflect:!0})],pt.prototype,"caret",2);$t([b({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);$t([b({type:Boolean,reflect:!0})],pt.prototype,"loading",2);$t([b({type:Boolean,reflect:!0})],pt.prototype,"pill",2);$t([b({type:Boolean,reflect:!0})],pt.prototype,"circle",2);$t([b()],pt.prototype,"type",2);$t([b()],pt.prototype,"name",2);$t([b()],pt.prototype,"value",2);$t([b()],pt.prototype,"href",2);$t([b()],pt.prototype,"target",2);$t([b()],pt.prototype,"rel",2);pt=$t([w("sc-button")],pt);var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Vi=(t,e,i,s)=>{for(var n=s>1?void 0:s?dh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ch(e,i,n),n};let Ne=class extends It{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=t=>{t.target===this.dialogEl&&this.hide()}}updated(t){t.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
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
    `}};Ne.styles=Rt`
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
  `;Vi([b({type:Boolean,reflect:!0})],Ne.prototype,"open",2);Vi([b()],Ne.prototype,"label",2);Vi([b({attribute:"no-header",type:Boolean})],Ne.prototype,"noHeader",2);Vi([V("dialog")],Ne.prototype,"dialogEl",2);Ne=Vi([w("sc-dialog")],Ne);var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Xs=(t,e,i,s)=>{for(var n=s>1?void 0:s?uh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&hh(e,i,n),n};let li=class extends It{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return r`
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
    `}};li.styles=Rt`
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
  `;Xs([b({type:Boolean,reflect:!0})],li.prototype,"active",2);Xs([b()],li.prototype,"placement",2);Xs([b({type:Number})],li.prototype,"distance",2);li=Xs([w("sc-popup")],li);var ph=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,Ve=(t,e,i,s)=>{for(var n=s>1?void 0:s?mh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ph(e,i,n),n};let le=class extends It{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=t=>{t.stopPropagation(),this.toggle()},this.onDocMouseDown=t=>{this.open&&(this.contains(t.target)||this.hide())},this.onDocKeydown=t=>{this.open&&t.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return r`
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
    `}};le.styles=Rt`
    :host {
      display: inline-block;
    }
  `;Ve([b({type:Boolean,reflect:!0})],le.prototype,"open",2);Ve([b()],le.prototype,"placement",2);Ve([b({type:Number})],le.prototype,"distance",2);Ve([b({type:Boolean,attribute:"stay-open-on-select"})],le.prototype,"stayOpenOnSelect",2);Ve([b({type:Boolean})],le.prototype,"disabled",2);Ve([V("sc-popup")],le.prototype,"popup",2);le=Ve([w("sc-dropdown")],le);var fh=Object.getOwnPropertyDescriptor,gh=(t,e,i,s)=>{for(var n=s>1?void 0:s?fh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let Qn=class extends It{constructor(){super(...arguments),this.onClick=t=>{const e=t.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-menu-item");!e||e.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:e}}))},this.onKeydown=t=>{const e=this.items().filter(n=>!n.disabled);if(!e.length)return;const i=document.activeElement,s=i?e.indexOf(i):-1;t.key==="ArrowDown"?(t.preventDefault(),e[(s+1)%e.length]?.focus()):t.key==="ArrowUp"?(t.preventDefault(),e[(s-1+e.length)%e.length]?.focus()):(t.key==="Enter"||t.key===" ")&&i&&i.tagName.toLowerCase()==="sc-menu-item"&&(t.preventDefault(),i.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return r`<slot></slot>`}};Qn.styles=Rt`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;Qn=gh([w("sc-menu")],Qn);var bh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Yi=(t,e,i,s)=>{for(var n=s>1?void 0:s?vh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&bh(e,i,n),n};let je=class extends It{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return r`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};je.styles=Rt`
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
  `;Yi([b({reflect:!0})],je.prototype,"type",2);Yi([b({reflect:!0})],je.prototype,"value",2);Yi([b({type:Boolean,reflect:!0})],je.prototype,"checked",2);Yi([b({type:Boolean,reflect:!0})],je.prototype,"disabled",2);je=Yi([w("sc-menu-item")],je);var yh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,st=(t,e,i,s)=>{for(var n=s>1?void 0:s?xh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&yh(e,i,n),n};let G=class extends It{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=t=>{this.value=t.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(t){this.input?.focus(t)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const t=this.type==="password"&&this.passwordVisible?"text":this.type;return r`
      <div class="form-control">
        ${this.label?r`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${Ps({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
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
    `}};G.styles=Rt`
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
  `;st([b()],G.prototype,"value",2);st([b()],G.prototype,"type",2);st([b()],G.prototype,"size",2);st([b()],G.prototype,"placeholder",2);st([b()],G.prototype,"label",2);st([b({attribute:"help-text"})],G.prototype,"helpText",2);st([b()],G.prototype,"name",2);st([b({type:Boolean,reflect:!0})],G.prototype,"disabled",2);st([b({type:Boolean,reflect:!0})],G.prototype,"readonly",2);st([b({type:Boolean,reflect:!0})],G.prototype,"required",2);st([b({type:Boolean})],G.prototype,"clearable",2);st([b({type:Boolean,attribute:"password-toggle"})],G.prototype,"passwordToggle",2);st([b()],G.prototype,"autocomplete",2);st([b({type:Number})],G.prototype,"minlength",2);st([b({type:Number})],G.prototype,"maxlength",2);st([b()],G.prototype,"pattern",2);st([d()],G.prototype,"passwordVisible",2);st([V("input")],G.prototype,"input",2);G=st([w("sc-input")],G);var wh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Nt=(t,e,i,s)=>{for(var n=s>1?void 0:s?kh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&wh(e,i,n),n};let wt=class extends It{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=t=>{this.open&&(this.contains(t.target)||this.close())},this.onDocKeydown=t=>{this.open&&t.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=t=>{const i=t.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-option");!i||i.disabled||(this.value=i.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=t=>{t.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=t=>{(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(t){t.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let t="";for(const e of this.options()){const i=e.value===this.value;e.selected=i,i&&(t=e.getTextLabel())}this.displayLabel=t}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const t=!!this.value;return r`
      <div class="form-control">
        ${this.label?r`<label class="label">${this.label}</label>`:null}
        <div
          class=${Ps({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${Ps({display:!0,placeholder:!t})}
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
    `}};wt.styles=Rt`
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
  `;Nt([b()],wt.prototype,"value",2);Nt([b()],wt.prototype,"placeholder",2);Nt([b()],wt.prototype,"size",2);Nt([b()],wt.prototype,"label",2);Nt([b({attribute:"help-text"})],wt.prototype,"helpText",2);Nt([b()],wt.prototype,"name",2);Nt([b({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);Nt([b({type:Boolean})],wt.prototype,"clearable",2);Nt([b({type:Boolean,reflect:!0})],wt.prototype,"open",2);Nt([d()],wt.prototype,"displayLabel",2);Nt([V(".combobox")],wt.prototype,"combobox",2);wt=Nt([w("sc-select")],wt);var $h=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,Qi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Sh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&$h(e,i,n),n};let Fe=class extends It{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};Fe.styles=Rt`
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
  `;Qi([b()],Fe.prototype,"value",2);Qi([b({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);Qi([b({type:Boolean,reflect:!0})],Fe.prototype,"selected",2);Qi([b({type:Boolean,reflect:!0})],Fe.prototype,"current",2);Fe=Qi([w("sc-option")],Fe);var Th=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Ye=(t,e,i,s)=>{for(var n=s>1?void 0:s?Ch(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Th(e,i,n),n};let ce=class extends It{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=t=>{const e=this.triggers();t.type.startsWith("mouse")&&e.has("hover")?this.show():t.type.startsWith("focus")&&e.has("focus")&&this.show()},this.onLeave=t=>{const e=this.triggers();t.type.startsWith("mouse")&&e.has("hover")?this.hide():t.type.startsWith("focus")&&e.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};ce.styles=Rt`
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
  `;Ye([b()],ce.prototype,"content",2);Ye([b()],ce.prototype,"placement",2);Ye([b({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);Ye([b()],ce.prototype,"trigger",2);Ye([b({type:Number})],ce.prototype,"distance",2);Ye([b({type:Boolean,reflect:!0})],ce.prototype,"open",2);ce=Ye([w("sc-tooltip")],ce);const hr=16e3,Eh=.001,gl=3e4,Dh=1600;class Ph{constructor(){this.voicedMs=0,this.quietMs=0,this.done=!1}feed(e,i){return this.done?!1:(e>=(this.voicedMs?.01:.018)?(this.voicedMs+=i,this.quietMs=0):(this.quietMs+=i,this.voicedMs<300&&this.quietMs>=300&&(this.voicedMs=0)),this.voicedMs>=300&&this.quietMs>=Dh?this.done=!0:!1)}}const As="Meta+D",Ms="companion.dictate_shortcut",bl="Meta+J",vl="companion.open_shortcut";function Ah(t,e,i){if(e===i)return t;const s=e/i,n=new Float32Array(Math.floor(t.length/s));for(let o=0;o<n.length;o++)if(e>i){const a=Math.floor(o*s),l=Math.min(t.length,Math.floor((o+1)*s));let h=0;for(let u=a;u<l;u++)h+=t[u];n[o]=l>a?h/(l-a):0}else{const a=o*s,l=Math.floor(a),h=Math.min(l+1,t.length-1);n[o]=t[l]+(t[h]-t[l])*(a-l)}return n}function Mh(t){let e=0;for(let i=0;i<t.length;i++)e+=t[i];e/=t.length||1;for(let i=0;i<t.length;i++)if(Math.abs(t[i]-e)>=Eh)return!1;return!0}function yl(t){return/\(virtual\)|zoomaudiodevice|teams audio/i.test(t)}function Ih(t){const e=t.filter(i=>i.kind==="audioinput"&&i.deviceId!=="default"&&i.deviceId!=="communications"&&i.label&&!yl(i.label));return(e.find(i=>/built-in/i.test(i.label))??e[0])?.deviceId??null}function xl(t){return`I heard only silence from ${t?`“${t}”`:"the mic"}. Is it muted, or the wrong mic?`}function _h(t,e){const i=new ArrayBuffer(44+t.length*2),s=new DataView(i),n=(o,a)=>{for(let l=0;l<a.length;l++)s.setUint8(o+l,a.charCodeAt(l))};n(0,"RIFF"),s.setUint32(4,36+t.length*2,!0),n(8,"WAVE"),n(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,e,!0),s.setUint32(28,e*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),n(36,"data"),s.setUint32(40,t.length*2,!0);for(let o=0;o<t.length;o++){const a=Math.max(-1,Math.min(1,t[o]));s.setInt16(44+o*2,a<0?a*32768:a*32767,!0)}return new Uint8Array(i)}function Oh(t){return t.replace(/\[[^\]]*\]/g," ").replace(/\s+/g," ").trim()}function ye(t){const e=(t??"").split("+").map(o=>o.trim()).filter(Boolean),i=e.pop();if(!i)return null;const s=new Set(e.map(o=>o.toLowerCase())),n={meta:s.has("meta")||s.has("cmd"),ctrl:s.has("ctrl")||s.has("control"),alt:s.has("alt")||s.has("option"),shift:s.has("shift"),key:i.length===1?i.toLowerCase():i};return n.meta||n.ctrl||n.alt?n:null}function Jn(t,e){if(e.metaKey!==t.meta||e.ctrlKey!==t.ctrl||e.altKey!==t.alt||e.shiftKey!==t.shift)return!1;const i=e.key.length===1?e.key.toLowerCase():e.key,s=e.code?.startsWith("Key")?e.code.slice(3).toLowerCase():e.code?.startsWith("Digit")?e.code.slice(5):null;return i===t.key||s===t.key}function xs(t){const e=ye(t);return e?`${e.ctrl?"⌃":""}${e.alt?"⌥":""}${e.shift?"⇧":""}${e.meta?"⌘":""}${e.key.length===1?e.key.toUpperCase():e.key}`:""}async function wl(t,e){const i=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:t,signal:e});if(!i.ok)throw new Error(`stt ${i.status}`);const s=await i.json();return Oh(s.text??"")}const ur={echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0};async function Lh(){const t=await navigator.mediaDevices.getUserMedia({audio:ur});if(!yl(t.getAudioTracks()[0]?.label??""))return t;const e=Ih(await navigator.mediaDevices.enumerateDevices().catch(()=>[]));if(!e)return t;const i=await navigator.mediaDevices.getUserMedia({audio:{...ur,deviceId:{exact:e}}}).catch(()=>null);return i?(t.getTracks().forEach(s=>s.stop()),i):t}class kl{constructor(){this.ctx=null,this.stream=null,this.source=null,this.node=null,this.chunks=[],this.rate=48e3,this.opening=null,this.released=0}get active(){return!!this.ctx}start(e={}){return this.ctx?Promise.resolve():this.opening??=this.open(e).finally(()=>{this.opening=null})}async open(e){const i=this.released,s=await Lh();let n;try{const o=window.AudioContext||window.webkitAudioContext;n=new o}catch(o){throw s.getTracks().forEach(a=>a.stop()),o}if(await Promise.race([n.resume().catch(()=>{}),new Promise(o=>setTimeout(o,1e3))]),i!==this.released){s.getTracks().forEach(o=>o.stop()),await n.close().catch(()=>{});return}this.chunks=[],this.rate=n.sampleRate,this.ctx=n,this.stream=s;try{const o=this.source=n.createMediaStreamSource(s),a=this.node=n.createScriptProcessor(4096,1,1),l=new Ph;a.onaudioprocess=h=>{const u=new Float32Array(h.inputBuffer.getChannelData(0));this.chunks.push(u);let p=0;for(const g of u)p+=g*g;const m=Math.sqrt(p/u.length);e.level?.(Math.min(1,m*12)),l.feed(m,u.length/n.sampleRate*1e3)&&e.pause?.()},o.connect(a),a.connect(n.destination)}catch(o){throw await this.release(),o}}async stop(){const e=this.chunks,i=this.rate,s=this.stream?.getAudioTracks()[0]?.label??"";await this.release();const n=e.reduce((l,h)=>l+h.length,0);if(n<i*.3)return null;const o=new Float32Array(n);let a=0;for(const l of e)o.set(l,a),a+=l.length;return Mh(o)?{silent:!0,mic:s}:{wav:_h(Ah(o,i,hr),hr)}}async cancel(){await this.release()}async release(){this.released++,this.node&&(this.node.onaudioprocess=null),this.node?.disconnect(),this.source?.disconnect(),this.stream?.getTracks().forEach(i=>i.stop());const e=this.ctx;this.ctx=null,this.node=null,this.source=null,this.stream=null,this.chunks=[],await e?.close().catch(()=>{})}}var Rh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,$l=(t,e,i,s)=>{for(var n=s>1?void 0:s?Nh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Rh(e,i,n),n};let Xn=class extends T{constructor(){super(...arguments),this.items=[]}onRemove(t){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:t},bubbles:!0,composed:!0}))}isPdf(t){return t.file?.type==="application/pdf"||(t.dataUrl?.startsWith("data:application/pdf")??!1)||(t.url?.endsWith(".pdf")??!1)}isSheet(t){return/\.(xlsx|xls|csv)$/i.test(t.file?.name??"")||/\.(xlsx|xls|csv)$/i.test(t.url??"")}render(){return this.items.length?r`
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
    `:r``}};$l([b({type:Array})],Xn.prototype,"items",2);Xn=$l([w("attachment-tray")],Xn);var jh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,St=(t,e,i,s)=>{for(var n=s>1?void 0:s?Fh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&jh(e,i,n),n};const Uh=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Workshop thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Workshop AND sends in one shot — useful when you're inside an app and want Workshop to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function pr(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}const Bh=/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i;function mr(t){const e=t.type||"";return e.startsWith("image/")||e==="application/pdf"||e==="text/csv"||e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||e==="application/vnd.ms-excel"?!0:Bh.test(t.name)}function Hh(t){return new Promise((e,i)=>{const s=new FileReader;s.onload=()=>e(String(s.result)),s.onerror=()=>i(s.error),s.readAsDataURL(t)})}function zh(t){const e=yo.map(i=>({id:i.id,label:i.label,short:i.short}));return e.some(i=>i.id===t)||e.push({id:t,label:t,short:t}),e}let vt=class extends T{constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.showUsage=!1,this.usage=[],this.turnsCompleted=0,this.model=vs(f.getState().settings["cockpit.mentor_model"]),this.inputFocused=!1,this.dictation="off",this.dictationNote="",this.recorder=new kl,this.takeTimer=null,this.quote=null,this.prevThreadId=null,this.onSelection=()=>{const t=document.activeElement;if(t instanceof HTMLTextAreaElement&&t.closest("publisher-editor")){const h=t.selectionStart??0,u=t.selectionEnd??h,p=t.value.slice(h,u).trim().slice(0,4e3);if(!p){this.quote=null;return}const m=t.matches("[data-draft-body]")?"the Publisher draft":"the Publisher first comment";if(p===this.quote?.text&&m===this.quote.from)return;this.quote={text:p,from:m,range:null};return}const e=document.getSelection(),i=e?.anchorNode,s=i instanceof Element?i:i?.parentElement,n=s?.closest(".notes-prose"),o=n?null:s?.closest("chat-message");if(!e||!n&&!o)return;const a=e.toString().trim().slice(0,4e3);if(e.isCollapsed||!a||!e.rangeCount){this.quote=null;return}let l;if(n){const h=n.firstElementChild?.textContent?.trim().slice(0,120)??"";l=h?`the note "${h}"`:"the note"}else l=o.chatRole==="user"?"my earlier message":"your reply";this.quote={text:a,from:l,range:e.getRangeAt(0).cloneRange()}},this.onGlobalKeyDown=t=>{(t.metaKey||t.ctrlKey)&&!t.altKey&&!t.shiftKey&&(t.key==="n"||t.key==="N")&&(t.preventDefault(),this.startNewChat())},this.startNewChat=()=>{f.getState().selectThread(null),this.updateComplete.then(()=>this.textarea?.focus())},this.onChatAttach=t=>{const i=t.detail?.files??[];(async()=>{for(const s of i)await this.uploadFile(s,!1)})()},this.onDictateKey=t=>{if(t.key==="Escape"&&(this.dictation==="listening"||this.dictation==="opening")){t.preventDefault(),t.stopImmediatePropagation(),this.cancelDictation();return}const e=ye(f.getState().settings?.[Ms])??ye(As);t.repeat||!Jn(e,t)||(t.preventDefault(),t.stopImmediatePropagation(),this.dictation==="off"&&document.dispatchEvent(new CustomEvent("mana-reveal-chat")),this.toggleDictation())},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=j(this,f,t=>t.currentThreadId),this.prevThreadId=f.getState().currentThreadId,f.subscribe(t=>{t.currentThreadId!==this.prevThreadId&&(this.prevThreadId=t.currentThreadId,this.attachments=[],this.usage=[],this.turnsCompleted=0,this.showUsage=!1);const e=vs(t.settings["cockpit.mentor_model"]);e!==this.model&&(this.model=e)}),document.addEventListener("chat-attach",this.onChatAttach),document.addEventListener("keydown",this.onGlobalKeyDown),document.addEventListener("mana-new-chat",this.startNewChat),document.addEventListener("keydown",this.onDictateKey,!0),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("select",this.onSelection,!0)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach),document.removeEventListener("keydown",this.onGlobalKeyDown),document.removeEventListener("mana-new-chat",this.startNewChat),document.removeEventListener("keydown",this.onDictateKey,!0),this.takeTimer&&clearTimeout(this.takeTimer),this.recorder.cancel(),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("select",this.onSelection,!0)}updated(t){super.updated?.(t),!(!t.has("quote")||typeof CSS>"u"||!("highlights"in CSS))&&(this.quote?.range?CSS.highlights.set("chat-quote",new Highlight(this.quote.range)):CSS.highlights.delete("chat-quote"))}async uploadFile(t,e){const i=await Hh(t),s={localId:pr(),file:t,dataUrl:i,uploaded:!1,ephemeral:e};this.attachments=[...this.attachments,s];try{const n=await C.uploads.upload(i,e,t.name);this.attachments=this.attachments.map(o=>o.localId===s.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==s.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(t){const e=t.target,i=Array.from(e.files??[]);for(const s of i)await this.uploadFile(s,!1);e.value=""}async onPaste(t){const e=t.clipboardData?.items??[],i=[];for(const s of Array.from(e))if(s.kind==="file"){const n=s.getAsFile();n&&mr(n)&&i.push(n)}if(i.length){t.preventDefault();for(const s of i)await this.uploadFile(s,!1)}}onDragOver(t){!t.dataTransfer||!Array.from(t.dataTransfer.items).some(i=>i.kind==="file")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}async onDrop(t){const e=Array.from(t.dataTransfer?.files??[]).filter(mr);if(e.length){t.preventDefault();for(const i of e)await this.uploadFile(i,!1)}}onTrayRemove(t){const e=t.detail.localId;this.attachments=this.attachments.filter(i=>i.localId!==e)}async toggleDictation(){if(this.dictation==="listening")return this.finishDictation();if(this.dictation==="off"){this.dictationNote="",this.dictation="opening";try{await this.recorder.start()}catch{this.dictation="off",this.dictationNote="The mic is blocked or unavailable.";return}this.dictation!=="opening"||!this.recorder.active||(this.dictation="listening",this.takeTimer=setTimeout(()=>void this.finishDictation(),gl))}}async finishDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing";try{const t=await this.recorder.stop();if(this.dictation!=="writing")return;if(t&&"silent"in t){this.dictationNote=xl(t.mic);return}const e=t?await wl(t.wav):"";if(this.dictation!=="writing")return;if(!e){this.dictationNote="Didn't catch that. Try again.";return}this.insertText(e)}catch{this.dictationNote="Couldn't write that down. Try again."}finally{this.dictation==="writing"&&(this.dictation="off")}}async cancelDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="off",await this.recorder.cancel()}insertText(t){const e=this.textarea,i=this.text,s=e&&document.activeElement===e?e.selectionStart:i.length,n=e&&document.activeElement===e?e.selectionEnd:i.length,o=i.slice(0,s),a=i.slice(n),l=o&&!/\s$/.test(o)?" ":"",h=a&&!/^\s/.test(a)?" ":"";this.text=o+l+t+h+a;const u=(o+l+t).length;this.updateComplete.then(()=>{this.textarea&&(this.textarea.focus(),this.textarea.setSelectionRange(u,u),this.textarea.style.height="auto",this.textarea.style.height=`${Math.min(this.textarea.scrollHeight,240)}px`,this.textarea.style.overflowY=this.textarea.scrollHeight>240?"auto":"hidden")})}dictationPlaceholder(){const t=xs(f.getState().settings?.[Ms]??As);return this.dictation==="opening"?"Opening the mic…":this.dictation==="listening"?`Listening… ${t} to finish, Esc to cancel`:this.dictation==="writing"?"Writing it down…":this.dictationNote||"Type / for commands"}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(t){const e=t.target;this.text=e.value,this.dictationNote="",e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,240)}px`,e.style.overflowY=e.scrollHeight>240?"auto":"hidden"}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.send())}async handleSlash(t){const[e,...i]=t.slice(1).trim().split(/\s+/),s=i.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:t,mentor:o},bubbles:!0,composed:!0}))};switch(e){case"help":case"?":return n(Uh),!0;case"clear":case"new":return await f.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=e==="mana"?"mana":e==="grocery"?"grocery-keeper":"goals-advisor";try{await f.getState().createThread({kind:"chat",persona:o})}catch(a){const l=a instanceof Error?a.message:String(a);return n(`Couldn't switch to ${e}: ${l}`),!0}return s?(this.text=s,!1):(n(`Switched to a new ${Ka[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(s||"").toLowerCase(),l={opus:"claude-opus-5-5",fable:"claude-fable-5-1",sonnet:"claude-sonnet-5-5",haiku:"claude-haiku-4-5-20251001",gpt:"gpt-6.1-sol",sol:"gpt-6.1-sol",astra:"gpt-6-astra",luna:"gpt-6-luna",terra:"gpt-6-luna","gpt-mini":"gpt-6-luna"}[o],h={};l&&(h[o]={id:l,label:Bn(l)?.label??l});const u=h[o];return u?(await f.getState().setSetting("cockpit.mentor_model",u.id),n(`Workshop model → **${u.label}** (\`${u.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model opus|fable|sonnet|haiku|sol|astra|luna\` (current: ${vs(f.getState().settings["cockpit.mentor_model"])}).`),!0)}default:return!1}}async stop(){this.queue=[],this.dispatchEvent(new CustomEvent("queue-clear",{bubbles:!0,composed:!0})),this.abortController?.abort();const t=f.getState().currentThreadId;if(t!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:t})})}catch{}}async send(){let t=this.text.trim();const e=this.attachments.filter(n=>n.uploaded&&n.path&&n.url);if(!t&&e.length===0)return;if(t.startsWith("/")&&e.length===0){if(await this.handleSlash(t)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(t=this.text.trim(),!t&&e.length===0)return}if(this.quote&&t){const n=this.quote;t=`Selected in ${n.from}:
${n.text.split(`
`).map(o=>`> ${o}`).join(`
`)}

${t}`}const i=e.map(n=>({path:n.path,url:n.url,ephemeral:!!n.ephemeral})),s=e.filter(n=>!n.ephemeral).map(n=>({url:n.url}));if(this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[],this.quote=null,this.sending){const n=pr();this.queue.push({id:n,text:t,attachments:i,bubbleAttachments:s}),this.dispatchEvent(new CustomEvent("queue-add",{detail:{id:n,text:t,attachments:s},bubbles:!0,composed:!0}));return}this.sending=!0;try{for(await this.runTurn(t,i,s);this.queue.length>0;){const n=this.queue.shift();if(!n)break;this.dispatchEvent(new CustomEvent("queue-remove",{detail:{id:n.id},bubbles:!0,composed:!0})),await this.runTurn(n.text,n.attachments,n.bubbleAttachments)}}finally{this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus())}}async runTurn(t,e,i){const s=f.getState(),n=s.currentThreadId,o={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:t,attachments:i,liveDetail:o},bubbles:!0,composed:!0}));let a=!1;try{let l=n;const h=n==null?Wa(s):void 0;this.abortController=new AbortController;for await(const m of fl({threadId:n,message:t,attachments:e,persona:h,view:s.viewContext??void 0,signal:this.abortController.signal}))switch(m.type){case"thread":l=m.threadId,n==null&&this.prevThreadId==null&&(this.prevThreadId=m.threadId);break;case"text":a=!0,o.append?.(m.text);break;case"ops":this.dispatchOps(m.action);break;case"error":a=!0,o.append?.(`

_error: ${m.error}_`);break;case"done":{const g=f.getState().currentThreadId;if(g!==n&&g!==l)break;this.turnsCompleted+=1,this.usage=[...this.usage,{turn:this.turnsCompleted,model:this.model,context:m.contextTokens??null,start:m.startTokens??null,window:m.contextWindow??null,out:m.tokensOut??null}];break}}a||o.append?.("_(done)_"),o.finalize?.(),await f.getState().loadThreads();const u=f.getState().currentThreadId,p=u===n||u===l;l!=null&&p&&await f.getState().selectThread(l)}catch(l){l?.name==="AbortError"?o.append?.(`

_stopped_`):(console.warn("[composer] send failed",l),o.append?.(`

_error: ${l.message}_`)),o.finalize?.()}finally{this.abortController=void 0}}dispatchOps(t){document.dispatchEvent(new CustomEvent("ops-event",{detail:t,bubbles:!0,composed:!0}))}renderUsagePill(){const t=Bn(this.model)?.short??this.model,e=this.contextNow(),s=e?(p=>p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p))(e):"—",n=this.contextLimit(),o=e?Math.min(100,e/n*100):0,l=2*Math.PI*6,h=o/100*l,u=o>80?"#f87171":o>50?"#fbbf24":"var(--accent, #3b82f6)";return r`
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
        <span>${s}</span>
      </button>
    `}contextNow(){return this.usage[this.usage.length-1]?.context??0}contextLimit(){for(let t=this.usage.length-1;t>=0;t--){const e=this.usage[t];if(e&&e.model===this.model&&e.window)return e.window}return cc(this.model)}async onModelChange(t){this.model=t,await f.getState().setSetting("cockpit.mentor_model",t)}renderUsageModal(){if(!this.showUsage)return null;const t=this.usage.some(a=>a.context!=null),e=this.contextNow(),i=this.usage[0]?.start??0,s=this.contextLimit(),n=e?Math.min(100,Math.round(e/s*100)):0,o=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);return r`
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
              ${zh(this.model).map(a=>r`<option value=${a.id} ?selected=${a.id===this.model}>${a.label}</option>`)}
            </select>
          </div>

          ${t?r`
            <!-- context bar -->
            <div class="mb-3">
              <div class="flex justify-between text-xs text-muted mb-1">
                <span>Context window</span>
                <span>${o(e)} / ${o(s)} (${n}%)</span>
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
              <div class="font-semibold text-ink">${i?o(i):"—"}</div>
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
    `}};St([d()],vt.prototype,"text",2);St([d()],vt.prototype,"attachments",2);St([d()],vt.prototype,"sending",2);St([d()],vt.prototype,"showUsage",2);St([d()],vt.prototype,"usage",2);St([d()],vt.prototype,"turnsCompleted",2);St([d()],vt.prototype,"model",2);St([d()],vt.prototype,"inputFocused",2);St([d()],vt.prototype,"dictation",2);St([d()],vt.prototype,"dictationNote",2);St([d()],vt.prototype,"quote",2);St([V("input[data-attach-input]")],vt.prototype,"fileInput",2);St([V("textarea[data-composer-input]")],vt.prototype,"textarea",2);vt=St([w("chat-composer")],vt);const Zn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',Ji='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Xi='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function qh(t){return t?`var(--nsc-${t}, currentColor)`:"currentColor"}class Is{constructor(e,i){this.host=e,this.kind=i,this.ids=new Set,this.ghosts=[],this.onPress=s=>{if(!this.ids.size&&!this.ghosts.length)return;const n=`${this.kind}:`;for(const o of s.composedPath()){const a=o instanceof HTMLElement?o.dataset.flash:void 0;if(a?.startsWith(n)){this.seen(Number(a.slice(n.length)));return}if(o===this.host)return}},e.addController(this)}take(e){if(!e||e.action!=="refresh")return;const i=(e.changed??[]).filter(n=>n.kind===this.kind).map(n=>n.id),s=(e.removed??[]).filter(n=>n.kind===this.kind);if(!(!i.length&&!s.length)){if(i.length&&(this.ids=new Set([...this.ids,...i])),s.length){const n=new Set(s.map(o=>o.id));this.ghosts=[...this.ghosts.filter(o=>!n.has(o.id)),...s.map(({id:o,title:a})=>({id:o,title:a}))],this.ids=new Set([...this.ids].filter(o=>!n.has(o)))}this.host.requestUpdate()}}has(e){return this.ids.has(e)}cls(e){return this.ids.has(e)?"agent-flash":""}key(e){return`${this.kind}:${e}`}seen(e){if(this.ids.has(e)){const i=new Set(this.ids);i.delete(e),this.ids=i,this.host.requestUpdate()}this.ghosts.some(i=>i.id===e)&&(this.ghosts=this.ghosts.filter(i=>i.id!==e),this.host.requestUpdate())}hostConnected(){this.host.addEventListener("pointerdown",this.onPress)}hostDisconnected(){this.host.removeEventListener("pointerdown",this.onPress),this.ids=new Set,this.ghosts=[]}}var Kh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,jt=(t,e,i,s)=>{for(var n=s>1?void 0:s?Wh(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Kh(e,i,n),n};const fr=864e5,Gh=6,gr=272,Vh=228,_s="en-GB";function is(t){return Date.parse(`${t}T00:00:00Z`)}function Yh(t){return new Date(t).toISOString().slice(0,10)}function br(){const t=new Date,e=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}function Qh(t){const e=new Date(t);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),1)}function vr(t,e){const i=new Date(t);return Date.UTC(i.getUTCFullYear(),i.getUTCMonth()+e,1)}const Jh=new Intl.DateTimeFormat(_s,{weekday:"short",timeZone:"UTC"}),Xh=Array.from({length:7},(t,e)=>Jh.format(Date.UTC(2024,0,1+e))),Zh=new Intl.DateTimeFormat(_s,{month:"short",timeZone:"UTC"}),tu=Array.from({length:12},(t,e)=>Zh.format(Date.UTC(2024,e,1))),eu={left:"m15 18-6-6 6-6",right:"m9 18 6-6-6-6",down:"m6 9 6 6 6-6"};let Mt=class extends T{constructor(){super(...arguments),this.value="",this.name="",this.placeholder="Pick a date",this.label="Date",this.clearable=!1,this.headless=!1,this.fieldClass="px-2 py-1 text-sm bg-surface border border-line rounded",this.open=!1,this.view="days",this.month=0,this.yearsFrom=0,this.anchor=null,this.anchorPressedAt=0,this.onToggle=t=>{t.newState==="closed"&&(this.open=!1,this.detach())},this.onPress=t=>{t.target instanceof Node&&this.anchor?.contains(t.target)&&(this.anchorPressedAt=Date.now())},this.onScroll=t=>{t.target instanceof Node&&this.panel?.contains(t.target)||this.place()},this.place=()=>{const t=this.panel;if(!t||!this.anchor)return;const e=this.anchor.getBoundingClientRect(),i=t.offsetHeight,s=6;let n=e.bottom+s;n+i>window.innerHeight-8&&e.top-s-i>8&&(n=e.top-s-i);const o=Math.min(Math.max(8,e.left),window.innerWidth-gr-8);t.style.top=`${Math.max(8,n)}px`,t.style.left=`${Math.max(8,o)}px`}}async show(t){const e=Date.now()-this.anchorPressedAt<500;if(this.anchorPressedAt=0,this.open||e)return;this.anchor=t??this.querySelector(".dp-field")??this;const i=is(this.value);this.month=Qh(Number.isNaN(i)?is(br()):i),this.view="days",this.open=!0,await this.updateComplete;const s=this.panel;s&&(s.showPopover(),this.place(),window.addEventListener("resize",this.place),window.addEventListener("scroll",this.onScroll,!0),window.addEventListener("pointerdown",this.onPress,!0))}hide(){this.panel?.matches(":popover-open")&&this.panel.hidePopover()}disconnectedCallback(){super.disconnectedCallback(),this.detach()}get panel(){return this.querySelector(".dp-panel")}detach(){window.removeEventListener("resize",this.place),window.removeEventListener("scroll",this.onScroll,!0),window.removeEventListener("pointerdown",this.onPress,!0)}pick(t){this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0})),this.hide()}step(t){this.view==="days"?this.month=vr(this.month,t):this.view==="months"?this.month=vr(this.month,t*12):this.yearsFrom+=t*12}words(t){const e=is(t);if(Number.isNaN(e))return this.placeholder;const i=new Date(e).getUTCFullYear()!==new Date().getFullYear();return new Intl.DateTimeFormat(_s,{...i?{year:"numeric"}:{weekday:"short"},day:"numeric",month:"short",timeZone:"UTC"}).format(e)}render(){return r`
      ${this.name?r`<input type="hidden" name=${this.name} .value=${this.value} />`:c}
      ${this.headless?c:this.renderField()}
      ${this.open?this.renderPanel():c}
    `}renderField(){const t=Number.isNaN(is(this.value));return r`<button
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
    </button>`}renderPanel(){const t=new Date(this.month).getUTCFullYear(),e=this.view==="days"?new Intl.DateTimeFormat(_s,{month:"long",year:"numeric",timeZone:"UTC"}).format(this.month):this.view==="months"?String(t):`${this.yearsFrom}–${this.yearsFrom+11}`,i=br();return r`<div
      class="dp-panel m-0 rounded-xl border border-line bg-surface p-3 text-ink shadow-lg"
      style="position:fixed;inset:auto;width:${gr}px;max-width:calc(100vw - 16px);"
      popover="auto"
      role="dialog"
      aria-label=${this.label}
      @toggle=${this.onToggle}
      @click=${s=>s.stopPropagation()}
      @pointerdown=${s=>s.stopPropagation()}
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
      <div style="height:${Vh}px">
        ${this.view==="days"?this.renderDays(i):this.view==="months"?this.renderGrid(tu.map((s,n)=>({key:n,label:s,selected:this.value.startsWith(`${t}-${String(n+1).padStart(2,"0")}`),current:i.startsWith(`${t}-${String(n+1).padStart(2,"0")}`)})),s=>{this.month=Date.UTC(t,s,1),this.view="days"}):this.renderGrid(Array.from({length:12},(s,n)=>this.yearsFrom+n).map(s=>({key:s,label:String(s),selected:s===t,current:i.startsWith(String(s))})),s=>{this.month=Date.UTC(s,new Date(this.month).getUTCMonth(),1),this.view="months"})}
      </div>
      <div class="mt-2 flex items-center justify-between px-1 text-xs">
        <button type="button" class="text-accent hover:underline" @click=${()=>this.pick(i)}>Today</button>
        ${this.clearable&&this.value?r`<button type="button" class="text-muted hover:text-ink" @click=${()=>this.pick("")}>Clear</button>`:c}
      </div>
    </div>`}renderDays(t){const e=new Date(this.month),i=this.month-(e.getUTCDay()+6)%7*fr,s=e.getUTCMonth();return r`<div class="grid grid-cols-7 text-center">
      ${Xh.map(n=>r`<span class="pb-1 text-[11px] font-medium text-muted">${n}</span>`)}
      ${Array.from({length:Gh*7},(n,o)=>i+o*fr).map(n=>{const o=Yh(n),a=o===this.value,l=a?"bg-accent font-medium text-white":o===t?"font-semibold text-accent hover:bg-hover":new Date(n).getUTCMonth()===s?"text-ink hover:bg-hover":"text-muted/60 hover:bg-hover";return r`<div class="py-px">
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
      ${t.map(i=>r`<button
          type="button"
          class="rounded-lg text-sm transition-colors ${i.selected?"bg-accent font-medium text-white":i.current?"font-semibold text-accent hover:bg-hover":"text-ink hover:bg-hover"}"
          @click=${()=>e(i.key)}
        >
          ${i.label}
        </button>`)}
    </div>`}navButton(t,e,i){return r`<button
      type="button"
      aria-label=${t}
      class="grid h-7 w-7 place-items-center rounded-md transition-colors hover:bg-hover"
      @click=${()=>this.step(i)}
    >
      ${this.chevron(e)}
    </button>`}chevron(t){const e=t==="down"?14:16;return r`<svg width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="text-muted">
      <path d=${eu[t]} />
    </svg>`}};jt([b()],Mt.prototype,"value",2);jt([b()],Mt.prototype,"name",2);jt([b()],Mt.prototype,"placeholder",2);jt([b()],Mt.prototype,"label",2);jt([b({type:Boolean})],Mt.prototype,"clearable",2);jt([b({type:Boolean})],Mt.prototype,"headless",2);jt([b({attribute:"field-class"})],Mt.prototype,"fieldClass",2);jt([d()],Mt.prototype,"open",2);jt([d()],Mt.prototype,"view",2);jt([d()],Mt.prototype,"month",2);jt([d()],Mt.prototype,"yearsFrom",2);Mt=jt([w("mana-date-picker")],Mt);const iu="(max-width: 639px)";function ci(){return typeof matchMedia=="function"&&matchMedia(iu).matches}const ws=new Set,Fi="mana-pending-delete";function Sl(t){return ws.has(t)}function hn(){window.dispatchEvent(new Event(Fi))}function Os(t,e,i){ws.add(t),hn(),_o(e,{onUndo:()=>{ws.delete(t),hn()},onExpire:async()=>{try{await i()}catch(s){console.warn("[goals] delete failed",s)}finally{ws.delete(t),hn()}}})}const su=4e3;let Pe=null;function _o(t,e){Pe&&(clearTimeout(Pe.timer),Pe.expire());const i=document.createElement("div");i.className="mana-undo-toast",i.setAttribute("role","status");const s=document.createElement("span");s.textContent=t;const n=document.createElement("button");n.type="button",n.textContent="Undo",i.append(s,n),document.body.append(i);let o=!1;const a=()=>{i.classList.add("is-leaving"),setTimeout(()=>i.remove(),180),Pe?.el===i&&(Pe=null)},l=()=>{o||(o=!0,a(),e.onExpire?.())};n.addEventListener("click",()=>{o||(o=!0,clearTimeout(Pe?.timer),a(),e.onUndo())}),Pe={el:i,timer:window.setTimeout(l,su),expire:l}}const un=84;function Tl(t,e){let i=null,s=0,n=0,o=0,a=!1;const l=()=>{t.style.transition="transform .18s ease, background-color .18s ease",t.style.transform="",t.style.backgroundColor="",t.classList.remove("is-swiping","swipe-right","swipe-left","swipe-armed"),setTimeout(()=>t.style.transition="",200)},h=g=>{g.pointerType!=="touch"||!ci()||g.target.closest("input, textarea, [contenteditable]")||(i=g.pointerId,s=g.clientX,n=g.clientY,o=0,a=!1)},u=g=>{if(g.pointerId!==i)return;const v=g.clientX-s,y=g.clientY-n;if(!a){if(Math.abs(y)>10&&Math.abs(y)>Math.abs(v)){i=null;return}if(Math.abs(v)<12)return;if(v>0&&!e.onRight||v<0&&!e.onLeft){i=null;return}a=!0,t.setPointerCapture(g.pointerId),t.classList.add("is-swiping")}o=v>0?e.onRight?v:0:e.onLeft?v:0,t.style.transform=`translateX(${o}px)`,t.classList.toggle("swipe-right",o>0),t.classList.toggle("swipe-left",o<0),t.classList.toggle("swipe-armed",Math.abs(o)>=un)},p=g=>{if(g.pointerId!==i||(i=null,!a))return;const v=o>=un?e.onRight:o<=-un?e.onLeft:void 0,y=D=>{D.stopPropagation(),D.preventDefault()};t.addEventListener("click",y,{capture:!0,once:!0}),setTimeout(()=>t.removeEventListener("click",y,{capture:!0}),350),l(),v?.()},m=g=>{g.pointerId===i&&(i=null,a&&l())};return t.addEventListener("pointerdown",h),t.addEventListener("pointermove",u),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",m),()=>{t.removeEventListener("pointerdown",h),t.removeEventListener("pointermove",u),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",m)}}var nu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,ue=(t,e,i,s)=>{for(var n=s>1?void 0:s?ou(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&nu(e,i,n),n};function di(t){document.querySelector("goals-sheet")?.remove();const e=document.createElement("goals-sheet");e.target=t,document.body.append(e)}function ss(){return f.getState().goals.filter(t=>t.status==="active"&&!t.archived)}function ru(t,e){return e!=null?`k:${e}`:t!=null?`g:${t}`:""}function yr(t){return t.startsWith("k:")?{goalId:null,keyResultId:Number(t.slice(2))}:t.startsWith("g:")?{goalId:Number(t.slice(2)),keyResultId:null}:{goalId:null,keyResultId:null}}const au=r`<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`,lu=r`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`;let Jt=class extends T{constructor(){super(...arguments),this.target={kind:"new-commit"},this.draft="",this.newLink="",this.newGoalId=null,this.newDate="",this.busy=!1,this.added=0,this.closing=!1,this.onKey=t=>{t.key==="Escape"&&(t.preventDefault(),this.close())},this.onTitleKey=t=>{t.key!=="Enter"||t.shiftKey||t.isComposing||(t.preventDefault(),this.target.kind==="new-commit"||this.target.kind==="new-kr"?this.add():this.close())}}connectedCallback(){super.connectedCallback(),this.unsub=f.subscribe(()=>this.requestUpdate()),document.addEventListener("keydown",this.onKey);const t=this.target;t.kind==="commit"&&(this.draft=this.commit?.title??""),t.kind==="kr"&&(this.draft=this.kr?.kr.title??""),t.kind==="new-kr"&&(this.newGoalId=t.goalId??ss()[0]?.id??null),document.documentElement.classList.add("goals-sheet-open")}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("keydown",this.onKey),document.documentElement.classList.remove("goals-sheet-open")}firstUpdated(){const t=this.titleEl;t&&(this.grow(t),(this.target.kind==="new-commit"||this.target.kind==="new-kr")&&t.focus())}get commit(){const t=this.target;return t.kind==="commit"?f.getState().commitments.find(e=>e.id===t.id):void 0}get kr(){const t=this.target;if(t.kind==="kr")for(const e of f.getState().goals){const i=e.keyResults.find(s=>s.id===t.id);if(i)return{kr:i,goal:e}}}grow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}async close(){this.closing||(this.closing=!0,await this.saveTitle(),this.classList.add("is-leaving"),setTimeout(()=>this.remove(),180))}async saveTitle(){const t=this.draft.trim(),e=f.getState();this.target.kind==="commit"&&this.commit&&t&&t!==this.commit.title&&await e.updateCommitment(this.commit.id,{title:t}).catch(s=>console.warn("[goals] save failed",s));const i=this.kr;this.target.kind==="kr"&&i&&t&&t!==i.kr.title&&await e.updateKeyResult(i.kr.id,{title:t}).catch(s=>console.warn("[goals] save failed",s))}async add(){const t=this.draft.trim();if(!t||this.busy)return;const e=f.getState();this.busy=!0;try{this.target.kind==="new-commit"?await e.createCommitment({title:t,...yr(this.newLink)}):this.newGoalId!=null&&await e.addKeyResult(this.newGoalId,t,this.newDate||null),this.draft="",this.added+=1,this.titleEl&&(this.titleEl.value="",this.grow(this.titleEl),this.titleEl.focus())}catch(i){console.warn("[goals] add failed",i)}finally{this.busy=!1}}toggleDone(){const t=f.getState();this.commit&&t.updateCommitment(this.commit.id,{done:!this.commit.done});const e=this.kr;e&&t.updateKeyResult(e.kr.id,{done:!e.kr.done})}remove_(){const t=f.getState(),e=this.commit,i=this.kr;this.closing=!0,this.classList.add("is-leaving"),setTimeout(()=>this.remove(),180),e&&Os(`commit:${e.id}`,"Task deleted",()=>t.deleteCommitment(e.id)),i&&Os(`kr:${i.kr.id}`,"Key result deleted",()=>t.deleteKeyResult(i.kr.id))}renderLinkSelect(t,e){return r`<label class="gs-field">
      <span class="gs-label">Goal</span>
      <select class="gs-select" .value=${t} @change=${i=>e(i.target.value)}>
        <option value="" ?selected=${t===""}>No goal</option>
        ${ss().map(i=>r`
          <option value=${`g:${i.id}`} ?selected=${t===`g:${i.id}`}>${i.title}</option>
          ${i.keyResults.filter(s=>!s.done||t===`k:${s.id}`).map(s=>r`<option value=${`k:${s.id}`} ?selected=${t===`k:${s.id}`}> ${s.title}</option>`)}
        `)}
      </select>
    </label>`}renderTitle(t,e){return r`<div class="gs-title-row">
      ${e?r`<button type="button" class="gs-check ${e.done?"is-done":""}" aria-label=${e.done?"Mark incomplete":"Mark complete"} @click=${this.toggleDone}>${e.done?au:c}</button>`:c}
      <textarea
        class="gs-title ${e?.done?"is-done":""}"
        rows="1"
        enterkeyhint=${e?"done":"send"}
        placeholder=${t}
        .value=${this.draft}
        @input=${i=>{const s=i.target;this.draft=s.value,this.grow(s)}}
        @keydown=${this.onTitleKey}
      ></textarea>
      ${e?c:r`<button type="button" class="gs-send" aria-label="Add" ?disabled=${!this.draft.trim()||this.busy} @click=${()=>this.add()}>${lu}</button>`}
    </div>`}renderBody(){const t=this.target,e=f.getState();if(t.kind==="commit"){const i=this.commit;return i?r`
        ${this.renderTitle("Task name",{done:i.done===1})}
        <div class="gs-fields">
          ${this.renderLinkSelect(ru(i.goal_id,i.key_result_id),s=>void e.updateCommitment(i.id,yr(s)))}
          <label class="gs-field">
            <span class="gs-label">Repeat every week</span>
            <input type="checkbox" class="gs-switch" .checked=${i.recurring===1} @change=${s=>void e.updateCommitment(i.id,{recurring:s.target.checked})} />
          </label>
        </div>
        <button type="button" class="gs-delete" @click=${this.remove_}>Delete task</button>`:r`<p class="gs-empty">This task is gone.</p>`}if(t.kind==="kr"){const i=this.kr;if(!i)return r`<p class="gs-empty">This key result is gone.</p>`;const{kr:s,goal:n}=i;return r`
        <p class="gs-context">${n.title}</p>
        ${this.renderTitle("Key result",{done:s.done===1})}
        <div class="gs-fields">
          <label class="gs-field">
            <span class="gs-label">Due</span>
            <input type="date" class="gs-date" .value=${s.target_date??""} @change=${o=>void e.updateKeyResult(s.id,{targetDate:o.target.value||null})} />
          </label>
        </div>
        <button type="button" class="gs-delete" @click=${this.remove_}>Delete key result</button>`}if(t.kind==="new-kr"){const i=ss();return i.length===0?r`<p class="gs-empty">Add a goal first, then its key results.</p>`:r`
        ${this.renderTitle("New key result",null)}
        <div class="gs-chips">
          <select class="gs-chip" aria-label="Goal" @change=${s=>this.newGoalId=Number(s.target.value)}>
            ${i.map(s=>r`<option value=${s.id} ?selected=${s.id===this.newGoalId}>${s.title}</option>`)}
          </select>
          <input type="date" class="gs-chip" aria-label="Due date" .value=${this.newDate} @change=${s=>this.newDate=s.target.value} />
        </div>
        ${this.added?r`<p class="gs-added">${this.added} added</p>`:c}`}return r`
      ${this.renderTitle("New task this week",null)}
      <div class="gs-chips">
        <select class="gs-chip" aria-label="Goal" @change=${i=>this.newLink=i.target.value}>
          <option value="" ?selected=${this.newLink===""}>No goal</option>
          ${ss().map(i=>r`
            <option value=${`g:${i.id}`} ?selected=${this.newLink===`g:${i.id}`}>${i.title}</option>
            ${i.keyResults.filter(s=>!s.done).map(s=>r`<option value=${`k:${s.id}`} ?selected=${this.newLink===`k:${s.id}`}> ${s.title}</option>`)}
          `)}
        </select>
      </div>
      ${this.added?r`<p class="gs-added">${this.added} added</p>`:c}`}render(){return r`
      <div class="gs-backdrop" @click=${()=>this.close()}></div>
      <div class="gs-panel" role="dialog" aria-modal="true" aria-label="Edit">
        <div class="gs-grip" aria-hidden="true"></div>
        ${this.renderBody()}
      </div>
    `}};ue([b({attribute:!1})],Jt.prototype,"target",2);ue([d()],Jt.prototype,"draft",2);ue([d()],Jt.prototype,"newLink",2);ue([d()],Jt.prototype,"newGoalId",2);ue([d()],Jt.prototype,"newDate",2);ue([d()],Jt.prototype,"busy",2);ue([d()],Jt.prototype,"added",2);ue([V("textarea")],Jt.prototype,"titleEl",2);Jt=ue([w("goals-sheet")],Jt);var cu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,Qe=(t,e,i,s)=>{for(var n=s>1?void 0:s?du(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&cu(e,i,n),n};const hu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function uu(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return t;const i=Number(e[3]),s=hu[Number(e[2])-1],n=e[1].slice(2);return`${i} ${s} ${n}`}function pu(t){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(t))return null;const i=new Date(`${t}T00:00:00`).getTime();return Math.round((i-Date.now())/864e5)}let $e=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onPendingDelete=()=>this.requestUpdate(),this.onRowTap=t=>{!ci()||this.editing||t.target.closest("button, input, textarea, mana-date-picker")||(this.clearHighlight(),di({kind:"kr",id:this.kr.id}))},this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=t=>{if(!this.dragEnabled){t.preventDefault();return}t.dataTransfer&&(t.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),t.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=t=>{if(!t.dataTransfer?.types.includes("text/x-kr-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const e=t.currentTarget.getBoundingClientRect();this.dragOverPos=t.clientY<e.top+e.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async t=>{const e=t.dataTransfer?.getData("text/x-kr-id"),i=e?Number(e):NaN,s=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(i)||i===this.kr.id)return;t.preventDefault();const n=s==="after"?this.index+1:this.index;await f.getState().reorderKeyResult(i,n)},this.onEditKeydown=t=>{t.key==="Enter"?(t.preventDefault(),this.commitEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=j(this,f,t=>t.focusedRowKey),window.addEventListener(Fi,this.onPendingDelete)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.(),this.detachSwipe?.(),this.detachSwipe=void 0,window.removeEventListener(Fi,this.onPendingDelete)}updated(){if(this.style.display=Sl(`kr:${this.kr.id}`)?"none":"",this.detachSwipe)return;const t=this.querySelector("li.kr");t&&(this.detachSwipe=Tl(t,{onRight:()=>{const e=this.kr.done===1;this.toggleDone(),_o(e?"Marked not done":"Completed",{onUndo:()=>void f.getState().updateKeyResult(this.kr.id,{done:e})})},onLeft:()=>{const e=this.kr.id;Os(`kr:${e}`,"Key result deleted",()=>f.getState().deleteKeyResult(e))}}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("kr-touched",{detail:{id:this.kr.id},bubbles:!0,composed:!0}))}async toggleDone(){this.clearHighlight(),await f.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await f.getState().deleteKeyResult(this.kr.id)}startEdit(){if(!this.editing){if(this.clearHighlight(),ci()){di({kind:"kr",id:this.kr.id});return}this.editing=!0}}async focusTitle(){this.editing||(this.clearHighlight(),this.editing=!0),await this.updateComplete;const t=this.querySelector("input.kr-title");t?.focus(),t?.select()}async commitEdit(t){const e=t.trim();this.editing=!1,!(!e||e===this.kr.title)&&await f.getState().updateKeyResult(this.kr.id,{title:e})}async pickDate(t){t.stopPropagation(),await this.querySelector("mana-date-picker.kr-date-picker")?.show(t.currentTarget)}async onDateChange(t){const e=t.target.value;await f.getState().updateKeyResult(this.kr.id,{targetDate:e||null})}renderDateChip(){if(this.kr.done===1)return r`<span
        class="kr-chip shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
        style="color:var(--nsc-green);background:color-mix(in srgb, var(--nsc-green) 13%, transparent);"
        >Done</span
      >`;if(this.kr.target_date){const t=pu(this.kr.target_date);if(t!=null&&t<0)return r`<button
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
        ${uu(this.kr.target_date)}
      </button>`}return r`<button
      type="button"
      class="kr-date-btn empty shrink-0 text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const t=this.kr.done===1,e=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",i=`kr:${this.kr.id}`,n=f.getState().focusedRowKey===i?"bg-hover":"";return r`
      <li
        class="kr group/kr relative flex items-center gap-2 py-0.5 px-2 -mx-2 rounded hover:bg-hover ${e} ${t?"done opacity-60":""} ${n}"
        data-row-key=${i}
        draggable=${this.dragEnabled?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
        @click=${this.onRowTap}
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
    `}};Qe([b({attribute:!1})],$e.prototype,"kr",2);Qe([b({attribute:!1})],$e.prototype,"index",2);Qe([b({type:Boolean})],$e.prototype,"highlight",2);Qe([d()],$e.prototype,"editing",2);Qe([d()],$e.prototype,"dragEnabled",2);Qe([d()],$e.prototype,"dragOverPos",2);$e=Qe([w("key-result-row")],$e);const Cl=["slate","red","orange","amber","green","teal","blue","indigo","violet","pink"],El=["target","rocket","compass","flag","flame","lightbulb","heart","dumbbell","brain","book","briefcase","code","pen","megaphone","camera","mountain","globe","zap","star","sparkles"];let ns;function mu(t){ns?.();const{goal:e,anchor:i}=t,s=document.createElement("div");s.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(i).fontFamily,s.style.width=`${Math.min(256,window.innerWidth-16)}px`,s.style.maxHeight=`${window.innerHeight-16}px`,s.dataset.goalMenu=String(e.id),document.body.appendChild(s);let n=t.page??"main",o=!1,a="",l=!1;const h=(S=!1)=>{l||(l=!0,document.removeEventListener("pointerdown",p,!0),document.removeEventListener("keydown",D,!0),window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",g),xt(c,s),s.remove(),ns===u&&(ns=void 0),S&&i.isConnected&&i.focus({preventScroll:!0}))},u=()=>h();ns=u;const p=S=>{S.composedPath().includes(s)||h()},m=S=>{(!(S.target instanceof Node)||!s.contains(S.target))&&h()},g=()=>h(),v=()=>[...s.querySelectorAll("button:not(:disabled)")],y=()=>v()[0]?.focus({preventScroll:!0}),D=S=>{if(S.key==="Escape"){S.preventDefault(),S.stopPropagation(),n!=="main"?N("main"):h(!0);return}if(S.key==="Tab"){h();return}if(!s.contains(document.activeElement)||!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].includes(S.key))return;S.preventDefault(),S.stopPropagation();const gt=v(),Ze=gt.indexOf(document.activeElement),nn=S.key==="Home"?0:S.key==="End"?gt.length-1:(Ze+(["ArrowUp","ArrowLeft"].includes(S.key)?-1:1)+gt.length)%gt.length;gt[nn]?.focus()},x=()=>{const S=i.getBoundingClientRect(),gt=s.getBoundingClientRect(),Ze=t.point?.x??S.left,nn=t.point?.y??(S.bottom+6+gt.height>window.innerHeight-8?S.top-gt.height-6:S.bottom+6);s.style.left=`${Math.max(8,Math.min(Ze,window.innerWidth-gt.width-8))}px`,s.style.top=`${Math.max(8,Math.min(nn,window.innerHeight-gt.height-8))}px`},N=S=>{n=S,a="",me(),y()},Z=S=>{h(),t.onAction(S)},Ft=async S=>{if(!o){o=!0,a="",me();try{await S(),h(!0)}catch(gt){o=!1,a=gt instanceof Error?gt.message:"Could not update goal. Try again.",l||(me(),y())}}},Ct=(S,gt,Ze=!1)=>r`<button
    type="button" role=${n==="status"?"menuitemradio":"menuitem"}
    aria-checked=${n==="status"?String(Ze):c}
    class="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    ?disabled=${o} @click=${gt}><span class="flex-1">${S}</span>${Ze?r`<span aria-hidden="true">✓</span>`:c}</button>`,me=()=>{s.setAttribute("role",n==="main"||n==="status"?"menu":"dialog"),s.setAttribute("aria-label",n==="main"?`Actions for ${e.title}`:`Goal ${n}`),s.setAttribute("aria-busy",String(o)),xt(r`
      ${n!=="main"?r`<button type="button" role=${n==="status"?"menuitem":c} class="w-full rounded px-3 py-2 text-left text-sm font-medium hover:bg-hover" ?disabled=${o} @click=${()=>N("main")}>‹ Back</button>`:c}
      ${n==="main"?r`
        ${Ct("Rename",()=>Z("rename"))}
        ${Ct("Add key result",()=>Z("add-kr"))}
        ${Ct("Change target date",()=>Z("target-date"))}
        ${Ct("Change color",()=>N("color"))}
        ${Ct("Change icon",()=>N("icon"))}
        ${Ct("Change status",()=>N("status"))}
        ${Ct(t.expanded?"Collapse key results":"Expand key results",()=>Z("toggle"))}
        ${Ct("Edit details and history",()=>Z("details"))}
        ${e.archived?Ct("Restore goal",()=>void Ft(()=>f.getState().updateGoal(e.id,{status:"active"}))):Ct("Archive goal",()=>void Ft(()=>f.getState().deleteGoal(e.id,!1)))}
      `:c}
      ${n==="color"?r`<div class="grid grid-cols-5 gap-2 p-2" role="group" aria-label="Color">
        ${[null,...Cl].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style="background:${S?`var(--nsc-${S})`:"var(--color-hover)"};${(e.color??null)===S?"box-shadow:0 0 0 2px var(--color-ink);":""}"
          aria-label=${S??"No color"} aria-pressed=${(e.color??null)===S} title=${S??"No color"}
          ?disabled=${o} @click=${()=>void Ft(()=>f.getState().updateGoal(e.id,{color:S}))}
        >${S?c:"∅"}</button>`)}
      </div>`:c}
      ${n==="icon"?r`<div class="grid grid-cols-5 gap-1 p-2" role="group" aria-label="Icon">
        ${[null,...El].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded hover:bg-hover focus-visible:bg-hover outline-none"
          style=${(e.symbol??null)===S?"background:var(--color-hover);box-shadow:inset 0 0 0 1.5px var(--color-ink);":""}
          aria-label=${S??"No icon"} aria-pressed=${(e.symbol??null)===S} title=${S??"No icon"}
          ?disabled=${o} @click=${()=>void Ft(()=>f.getState().updateGoal(e.id,{symbol:S}))}
        ><span class="inline-flex h-4 w-4 items-center justify-center">${S?W(Ke(We[S])):"∅"}</span></button>`)}
      </div>`:c}
      ${n==="status"?["active","paused","shipped"].map(S=>Ct({active:"Active",paused:"Paused",shipped:"Shipped"}[S],()=>void Ft(()=>f.getState().updateGoal(e.id,{status:S})),e.status===S)):c}
      ${a?r`<p role="alert" class="px-3 py-2 text-xs text-red-500">${a}</p>`:c}
    `,s),x()};return document.addEventListener("pointerdown",p,!0),document.addEventListener("keydown",D,!0),window.addEventListener("scroll",m,!0),window.addEventListener("resize",g),me(),y(),u}function Qt(t,e){const i={text:t,kind:e};document.dispatchEvent(new CustomEvent("mana-planner-note",{detail:i}))}async function Dl(t,e){const i=crypto.randomUUID();try{if(!(await B("/api/ideas",{text:e},i))?.id)throw new Error("no parked item id")}catch{return Qt(`Couldn't park: ${e}`,"error"),!1}try{await ve(`/api/commitments/${t}`,i),Qt(`Parked: ${e}`,"user")}catch{Qt(`Parked, but the task wasn't removed: ${e}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}async function Oo(t,e){const i=crypto.randomUUID();try{const s=f.getState().currentWeek??void 0;if(!(await B("/api/commitments",{title:e,week:s},i))?.id)throw new Error("no task id")}catch{return Qt(`Couldn't add to the week: ${e}`,"error"),!1}try{await ve(`/api/ideas/${t}`,i),Qt(`Added to Weekly: ${e}`,"user")}catch{Qt(`Added, but it's still parked: ${e}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}var fu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,te=(t,e,i,s)=>{for(var n=s>1?void 0:s?gu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&fu(e,i,n),n};const Lo="slmai.cockpit.collapsedGoals",bu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';function yu(t){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(t))return"";const i=new Date(`${t}T00:00:00`),s=new Date,n=Math.round((i.getTime()-s.getTime())/864e5);if(n<0)return"overdue";if(n===0)return"due today";if(n<31)return`${n} day${n===1?"":"s"} left`;const o=Math.round(n/30.44);if(o<12)return`${o} month${o===1?"":"s"} left`;const a=n/365.25,l=a<2?a.toFixed(1):String(Math.round(a));return`${l} year${l==="1"||l==="1.0"?"":"s"} left`}function xu(t){const e=/^(\d{4})-(\d{2})-\d{2}$/.exec(t);return e?`${bu[Number(e[2])-1]} ${e[1]}`:t}function xr(){try{const t=localStorage.getItem(Lo);if(!t)return new Set;const e=JSON.parse(t);return Array.isArray(e)?new Set(e.filter(i=>typeof i=="number")):new Set}catch{return new Set}}function wr(t){try{localStorage.setItem(Lo,JSON.stringify(Array.from(t)))}catch{}}let Ht=class extends T{constructor(){super(...arguments),this.northStars=[],this.highlight=!1,this.highlightKrIds=new Set,this.flashKrIds=new Set,this.editingTitle=!1,this.markerOpen=!1,this.creatingKR=!1,this.collapsed=xr(),this.onStorage=t=>{(t.key===Lo||t.key==null)&&(this.collapsed=xr())},this.onDocClick=t=>{this.markerOpen&&!this.contains(t.target)&&(this.markerOpen=!1)},this.onTitleKeydown=t=>{t.key==="Enter"?(t.preventDefault(),this.commitTitle(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=j(this,f,t=>t.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.(),this.closeMenu?.()}get expanded(){return!this.collapsed.has(this.goal.id)}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("goal-touched",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}toggleExpand(t){if(t.target?.closest("[data-no-toggle]"))return;this.clearHighlight();const i=new Set(this.collapsed);this.expanded?i.add(this.goal.id):i.delete(this.goal.id),this.collapsed=i,wr(i)}onCardClick(t){const e=t.target;(!this.expanded||e.closest(".goal-head"))&&this.toggleExpand(t)}starFor(t){return t?this.northStars.find(e=>e.slug===t)??null:null}openModal(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}async commitTitle(t){const e=t.trim();this.editingTitle=!1,!(!e||e===this.goal.title)&&await f.getState().updateGoal(this.goal.id,{title:e})}async pickDate(t){t.stopPropagation(),await this.querySelector("mana-date-picker.goal-date-picker")?.show(t.currentTarget)}async onDateChange(t){const e=t.target.value;await f.getState().updateGoal(this.goal.id,{targetDate:e||null})}async recategorize(t){this.markerOpen=!1,(this.goal.north_star??null)!==t&&await f.getState().updateGoal(this.goal.id,{northStar:t})}async beginAddKR(t){if(t?.stopPropagation(),this.creatingKR)return;if(this.clearHighlight(),ci()){di({kind:"new-kr",goalId:this.goal.id});return}const e=new Set(this.collapsed);e.delete(this.goal.id),this.collapsed=e,wr(e),this.creatingKR=!0;try{const i=await f.getState().addKeyResult(this.goal.id,"");await this.updateComplete,await[...this.querySelectorAll("key-result-row")].find(n=>n.kr.id===i)?.focusTitle()}catch(i){Qt(i instanceof Error?i.message:"Couldn't add key result","error")}finally{this.creatingKR=!1}}get krProgress(){const t=this.goal.keyResults??[],e=t.length,i=t.filter(n=>n.done===1).length,s=e?Math.round(i/e*100):0;return{done:i,total:e,pct:s}}renderMarker(){const t=this.goal.symbol??null,e=this.goal.color??null,i=t?We[t]:void 0,s=qh(e),{done:n,total:o,pct:a}=this.krProgress,l=i?r`<span
          style="display:inline-block;width:15px;height:15px;color:${s};position:relative;"
          >${W(Ke(i))}</span
        >`:c;if(o===0)return i?r`
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
            stroke=${s} stroke-width="3.5" stroke-linecap="round"
            stroke-dasharray=${h} stroke-dashoffset=${u}
            style="transition:stroke-dashoffset .35s ease;"
          />
        </svg>
        ${l}
      </span>
    `}renderTargetLine(){if(this.goal.target_date){const t=yu(this.goal.target_date),e=t==="overdue";return r`<div
        class="goal-target-line flex items-center gap-1.5 text-sm text-muted"
      >
        <span style="width:13px;height:13px;display:inline-flex;opacity:.7;"
          >${W(vu)}</span
        >
        <button
          type="button"
          class="goal-date-btn hover:text-ink"
          title="Change target date"
          data-no-toggle
          @click=${this.pickDate}
        >
          ${xu(this.goal.target_date)}
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
    >`}openMenu(t,e="main"){if(t.target.closest("input, textarea, [contenteditable]"))return;t.preventDefault(),t.stopPropagation(),this.clearHighlight();const s=this.querySelector(".goal-kebab");if(!s)return;const n=t.type==="contextmenu"&&"clientX"in t&&(t.clientX||t.clientY)?{x:t.clientX,y:t.clientY}:void 0;this.closeMenu=mu({goal:this.goal,anchor:s,point:n,page:e,expanded:this.expanded,onAction:o=>{o==="details"?this.openModal(new Event("click")):o==="target-date"?this.pickDate(new Event("click")):o==="toggle"?this.toggleExpand(new Event("click")):o==="rename"?(this.editingTitle=!0,this.updateComplete.then(()=>{const a=this.querySelector("input.goal-title");a?.focus(),a?.select()})):o==="add-kr"&&this.beginAddKR()}})}onMenuKey(t){(t.key==="ContextMenu"||t.shiftKey&&t.key==="F10")&&this.openMenu(t)}statusChipMeta(t){switch(t){case"shipped":return{label:"Shipped",color:"var(--nsc-green)",always:!0};case"paused":return{label:"Paused",color:"var(--nsc-amber)",always:!0};case"killed":return{label:"Archived",color:"var(--color-muted)",always:!0};default:return{label:"Active",color:"var(--color-muted)",always:!1}}}renderStatusChip(){const t=this.goal.status??"active";if(t==="active")return c;const e=this.statusChipMeta(t);return r`<span class="goal-status-wrap relative" data-no-toggle>
      <button
        type="button"
        class="goal-status-chip ${"opacity-90 hover:opacity-100"} text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full transition-opacity"
        style="color:${e.color};background:color-mix(in srgb, ${e.color} 13%, transparent);"
        title="Change status"
        data-no-toggle
        @click=${s=>this.openMenu(s,"status")}
      >
        ${e.label}
      </button>
    </span>`}render(){const t=this.goal.keyResults??[],e=this.expanded,i=this.goal.archived?"opacity-60":"",s=`goal:${this.goal.id}`,o=f.getState().focusedRowKey===s?"bg-hover":"";return r`
      <li
        class="goal group relative flex flex-col px-2 -mx-2 py-3 rounded-lg ${e?"":"cursor-pointer hover:bg-hover"} ${i} ${o}"
        data-id=${this.goal.id}
        data-row-key=${s}
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
            >${W(e?Ji:Xi)}</button
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
            <span class="inline-flex h-3.5 w-3.5" aria-hidden="true">${W(Zn)}</span>
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
    `}};te([b({attribute:!1})],Ht.prototype,"goal",2);te([b({attribute:!1})],Ht.prototype,"northStars",2);te([b({type:Boolean})],Ht.prototype,"highlight",2);te([b({attribute:!1})],Ht.prototype,"highlightKrIds",2);te([b({attribute:!1})],Ht.prototype,"flashKrIds",2);te([d()],Ht.prototype,"editingTitle",2);te([d()],Ht.prototype,"markerOpen",2);te([d()],Ht.prototype,"creatingKR",2);te([d()],Ht.prototype,"collapsed",2);Ht=te([w("goal-row")],Ht);var wu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Pl=(t,e,i,s)=>{for(var n=s>1?void 0:s?ku(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&wu(e,i,n),n};let to=class extends T{constructor(){super(...arguments),this.events=[]}fmt(t){return new Date(t*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?r`
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
      </div>`}};Pl([b({attribute:!1})],to.prototype,"events",2);to=Pl([w("goal-history-popover")],to);var $u=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,ct=(t,e,i,s)=>{for(var n=s>1?void 0:s?Su(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&$u(e,i,n),n};const Tu=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let ot=class extends T{constructor(){super(...arguments),this.goalId=null,this.creating=!1,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.completedOpen=!1,this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(t){t.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId)),t.has("creating")&&this.creating&&(this.reset(),this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null)}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(t){this.loading=!0;try{const e=await C.goals.summary(t);this.goal=e.goal,this.keyResults=e.keyResults,this.commitments=e.commitments,this.events=e.events,this.stats=e.stats,this.editNorthStar=e.goal.north_star??"",this.editTargetDate=e.goal.target_date??"",this.editStatus=e.goal.status,this.editColor=e.goal.color??null,this.editSymbol=e.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await f.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await f.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await f.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await f.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?r`
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
    `:c}renderCompleted(){const t=this.keyResults.filter(s=>s.done),e=this.commitments.filter(s=>s.done),i=t.length+e.length;return i===0?c:r`
      <div class="gm-field mb-3">
        <button
          type="button"
          class="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          @click=${()=>this.completedOpen=!this.completedOpen}
        >
          <span style="width:11px;height:11px;display:inline-flex;"
            >${W(this.completedOpen?Ji:Xi)}</span
          >
          Completed (${i})
        </button>
        ${this.completedOpen?r`<div class="mt-2">
              ${t.length?r`<div class="mb-3">
                    <label class="block text-xs text-muted mb-1">achieved KRs</label>
                    <ul class="text-sm">
                      ${t.map(s=>r`<li>✓ ${s.title}</li>`)}
                    </ul>
                  </div>`:c}
              ${e.length?r`<div>
                    <label class="block text-xs text-muted mb-1"
                      >shipped commitments</label
                    >
                    <ul class="text-sm">
                      ${e.map(s=>r`
                          <li class="flex justify-between gap-2">
                            <span>✓ ${s.title}</span>
                            <span class="text-xs text-muted">${s.week}</span>
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
          ${Cl.map(t=>r`
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
          ${El.map(t=>r`
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
                  @change=${i=>this.editStatus=i.target.value}
                >
                  ${Tu.map(i=>r`
                      <option
                        value=${i.value}
                        ?selected=${this.editStatus===i.value}
                      >
                        ${i.label}
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
    `}};ct([b({type:Number})],ot.prototype,"goalId",2);ct([b({type:Boolean})],ot.prototype,"creating",2);ct([b({attribute:!1})],ot.prototype,"northStars",2);ct([d()],ot.prototype,"goal",2);ct([d()],ot.prototype,"keyResults",2);ct([d()],ot.prototype,"commitments",2);ct([d()],ot.prototype,"events",2);ct([d()],ot.prototype,"stats",2);ct([d()],ot.prototype,"loading",2);ct([d()],ot.prototype,"completedOpen",2);ct([d()],ot.prototype,"editTitle",2);ct([d()],ot.prototype,"editNorthStar",2);ct([d()],ot.prototype,"editTargetDate",2);ct([d()],ot.prototype,"editStatus",2);ct([d()],ot.prototype,"editColor",2);ct([d()],ot.prototype,"editSymbol",2);ot=ct([w("goal-modal")],ot);function Ro({open:t,label:e,onToggle:i,controls:s,align:n="row"}){return r`<button
    type="button"
    class="fold-toggle mt-3 flex items-center gap-2 py-1 ${n==="row"?"pl-4":"pl-2"} pr-2 -mx-2 rounded text-xs text-muted hover:text-ink"
    aria-expanded=${t}
    aria-controls=${s??""}
    @click=${i}
  >${n==="row"?r`<span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>`:""}<sc-icon name=${t?"lucide-chevron-down":"lucide-chevron-right"} class="w-4 h-4"></sc-icon
    ><span>${e}</span></button>`}var Cu=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,pe=(t,e,i,s)=>{for(var n=s>1?void 0:s?Eu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Cu(e,i,n),n};const kr="slmai.cockpit.goalsSectionCollapsed",pn="slmai.cockpit.goalsSection.title",mn="Goals";let Xt=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=mn,this.creatingGoal=!1,this.activeModalId=null,this.highlightGoalIds=new Set,this.highlightKrIds=new Set,this.flashGoals=new Is(this,"goal"),this.flashKrs=new Is(this,"kr"),this.onOpsEvent=t=>{const e=t.detail;e&&(e.action==="refresh"||e.action==="load-week")&&(this.flashGoals.take(e),this.flashKrs.take(e),e.action==="refresh"&&e.added?.kind==="goal"?this.highlightGoalIds=new Set(this.highlightGoalIds).add(e.added.id):e.action==="refresh"&&e.added?.kind==="kr"&&(this.highlightKrIds=new Set(this.highlightKrIds).add(e.added.id)),f.getState().loadGoals().catch(()=>{}))},this.onGoalTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightGoalIds.has(e))return;const i=new Set(this.highlightGoalIds);i.delete(e),this.highlightGoalIds=i},this.onKrTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightKrIds.has(e))return;const i=new Set(this.highlightKrIds);i.delete(e),this.highlightKrIds=i},this.toggleSection=()=>{const t=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(kr,this.sectionCollapsed?"1":"0"),t&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(kr)==="1",this.titleValue=localStorage.getItem(pn)??mn,fetch("/api/settings").then(t=>t.json()).then(t=>{const e=t["ui.section.goals.title"];e&&(this.titleValue=e,localStorage.setItem(pn,e))}).catch(()=>{}),this.unsubGoals=j(this,f,t=>t.goals),this.unsubArchived=j(this,f,t=>`${t.goalsArchivedCount}:${t.includeArchivedGoals}`),this.unsubStars=j(this,f,t=>t.northStars),f.getState().loadGoals().catch(()=>{}),f.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent)}async toggleArchived(){const t=f.getState();await t.toggleArchivedGoals(!t.includeArchivedGoals)}openCreate(){this.creatingGoal=!0}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||mn;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(pn,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}renderGoalList(t,e){const i=f.getState().northStars;return r`
      <ul
        id=${e} class="goal-list flex flex-col"
        @goal-touched=${this.onGoalTouched}
        @kr-touched=${this.onKrTouched}
      >
        ${t.map(s=>r`
            <goal-row
              .goal=${s}
              .northStars=${i}
              .highlight=${this.highlightGoalIds.has(s.id)}
              .highlightKrIds=${this.highlightKrIds}
              .flashKrIds=${this.flashKrs.ids}
              class=${this.flashGoals.cls(s.id)}
              data-flash=${this.flashGoals.key(s.id)}
              @open-modal=${n=>this.activeModalId=n.detail.id}
            ></goal-row>
          `)}
      </ul>
    `}render(){const t=f.getState(),e=t.goals,i=t.northStars,s=t.goalsArchivedCount,n=t.includeArchivedGoals,o=this.tabbed||!this.sectionCollapsed;return r`
      <section class="goals-section flex flex-col gap-1 ${this.tabbed?"":"pb-16"}">
        ${this.tabbed?c:r`<header
              class="goals-header flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleSection}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${W(this.sectionCollapsed?Xi:Ji)}</span
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
              ${s>0?Ro({open:n,label:`${s} archived`,controls:"archived-goals",align:"goal",onToggle:()=>void this.toggleArchived()}):c}
              ${n?this.renderGoalList(e.filter(a=>a.archived),"archived-goals"):c}
            `:c}

        <goal-modal
          .goalId=${this.activeModalId}
          .creating=${this.creatingGoal}
          .northStars=${i}
          @close=${()=>{this.activeModalId=null,this.creatingGoal=!1}}
        ></goal-modal>
      </section>
    `}};pe([b({type:Boolean})],Xt.prototype,"tabbed",2);pe([d()],Xt.prototype,"sectionCollapsed",2);pe([d()],Xt.prototype,"editingTitle",2);pe([d()],Xt.prototype,"titleValue",2);pe([d()],Xt.prototype,"creatingGoal",2);pe([d()],Xt.prototype,"activeModalId",2);pe([d()],Xt.prototype,"highlightGoalIds",2);pe([d()],Xt.prototype,"highlightKrIds",2);Xt=pe([w("goals-section")],Xt);var Du=Object.getOwnPropertyDescriptor,Pu=(t,e,i,s)=>{for(var n=s>1?void 0:s?Du(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};const $r=[{text:"Indeed, with hardship comes ease.",source:"Quran 94:6"},{text:"So verily, with every hardship there is ease.",source:"Quran 94:5"},{text:"Did We not expand for you your breast?",source:"Quran 94:1"},{text:"So when you have finished, then stand up for worship.",source:"Quran 94:7"},{text:"And to your Lord direct your longing.",source:"Quran 94:8"},{text:"And that there is nothing for man except what he strives for.",source:"Quran 53:39"},{text:"And that his effort is going to be seen.",source:"Quran 53:40"},{text:"Indeed, Allah will not change the condition of a people until they change what is in themselves.",source:"Quran 13:11"},{text:"Verily, in the remembrance of Allah do hearts find rest.",source:"Quran 13:28"},{text:"So remember Me; I will remember you, and be grateful to Me.",source:"Quran 2:152"},{text:"Seek help through patience and prayer. Indeed, Allah is with the patient.",source:"Quran 2:153"},{text:"And seek help through patience and prayer.",source:"Quran 2:45"},{text:"And when My servants ask you concerning Me — indeed I am near.",source:"Quran 2:186"},{text:"Our Lord, give us good in this world and good in the Hereafter.",source:"Quran 2:201"},{text:"Perhaps you hate a thing and it is good for you.",source:"Quran 2:216"},{text:"Our Lord, pour upon us patience and plant firmly our feet.",source:"Quran 2:250"},{text:"Allah does not burden a soul beyond what it can bear.",source:"Quran 2:286"},{text:"So race to all that is good.",source:"Quran 2:148"},{text:"And speak to people good words.",source:"Quran 2:83"},{text:"And give good tidings to the patient.",source:"Quran 2:155"},{text:"Whatever good you put forward for yourselves, you will find it with Allah.",source:"Quran 2:110"},{text:"A kind word and forgiveness are better than charity followed by injury.",source:"Quran 2:263"},{text:"Indeed, Allah loves those who are constantly repentant and those who purify themselves.",source:"Quran 2:222"},{text:"And do good; indeed, Allah loves the doers of good.",source:"Quran 2:195"},{text:"And whoever relies upon Allah — then He is sufficient for him.",source:"Quran 65:3"},{text:"And whoever fears Allah — He will make for him a way out.",source:"Quran 65:2"},{text:"My Lord, increase me in knowledge.",source:"Quran 20:114"},{text:"My Lord, expand for me my breast and ease for me my task.",source:"Quran 20:25"},{text:"Establish prayer for My remembrance.",source:"Quran 20:14"},{text:"Call upon Me; I will respond to you.",source:"Quran 40:60"},{text:"Do not despair of the mercy of Allah; indeed, Allah forgives all sins.",source:"Quran 39:53"},{text:"Are those who know equal to those who do not know?",source:"Quran 39:9"},{text:"The patient will be given their reward without measure.",source:"Quran 39:10"},{text:"Whoever does righteousness, We will surely cause them to live a good life.",source:"Quran 16:97"},{text:"Indeed, Allah orders justice and good conduct.",source:"Quran 16:90"},{text:"Indeed, Allah is with those who fear Him and those who do good.",source:"Quran 16:128"},{text:"And He found you lost and guided you.",source:"Quran 93:7"},{text:"And your Lord is going to give you, and you will be satisfied.",source:"Quran 93:5"},{text:"Indeed, my Lord is near and responsive.",source:"Quran 11:61"},{text:"And be patient, for Allah does not let the reward of those who do good be lost.",source:"Quran 11:115"},{text:"My success is not but through Allah; upon Him I rely.",source:"Quran 11:88"},{text:"Indeed, my Lord is Guardian over all things.",source:"Quran 11:57"},{text:"Perhaps you dislike a thing and Allah places much good in it.",source:"Quran 4:19"},{text:"When you are greeted with a greeting, greet in return with one better.",source:"Quran 4:86"},{text:"Worship Allah and be good to parents.",source:"Quran 4:36"},{text:"And put your trust in Allah; sufficient is Allah as a Disposer of affairs.",source:"Quran 33:3"},{text:"O you who believe, remember Allah with much remembrance.",source:"Quran 33:41"},{text:"The men and women who remember Allah often — Allah has prepared for them forgiveness and a great reward.",source:"Quran 33:35"},{text:"Fear Allah and speak words of appropriate justice.",source:"Quran 33:70"},{text:"So which of the favors of your Lord would you deny?",source:"Quran 55:13"},{text:"Is the reward for good anything but good?",source:"Quran 55:60"},{text:"If you are grateful, I will surely increase you.",source:"Quran 14:7"},{text:"And upon Allah let the believers rely.",source:"Quran 14:11"},{text:"My mercy encompasses all things.",source:"Quran 7:156"},{text:"Indeed, the mercy of Allah is near to the doers of good.",source:"Quran 7:56"},{text:"Allah will raise those who believe and those given knowledge by degrees.",source:"Quran 58:11"},{text:"Read in the name of your Lord who created.",source:"Quran 96:1"},{text:"Who taught by the pen — taught man that which he knew not.",source:"Quran 96:4"},{text:"By time, indeed mankind is in loss.",source:"Quran 103:1"},{text:"Except those who believe, do righteous deeds, and advise each other to truth and patience.",source:"Quran 103:3"},{text:"So whoever does an atom's weight of good will see it.",source:"Quran 99:7"},{text:"Repel evil by that which is better, and your enemy will become a devoted friend.",source:"Quran 41:34"},{text:"And none is granted it except one of great fortune.",source:"Quran 41:35"},{text:"Indeed, good deeds do away with misdeeds.",source:"Quran 11:114"},{text:"And do good, as Allah has done good to you.",source:"Quran 28:77"},{text:"Sufficient for us is Allah, and He is the best Disposer of affairs.",source:"Quran 3:173"},{text:"And when you have decided, then rely upon Allah.",source:"Quran 3:159"},{text:"Do not weaken and do not grieve, for you will be superior if you are believers.",source:"Quran 3:139"},{text:"And hold firmly to the rope of Allah all together, and do not become divided.",source:"Quran 3:103"},{text:"Those who restrain anger and pardon people — Allah loves the doers of good.",source:"Quran 3:134"},{text:"Be patient, endure, remain stationed, and fear Allah.",source:"Quran 3:200"},{text:"Every soul will taste death.",source:"Quran 3:185"},{text:"Indeed, Allah does not allow the reward of the believers to be lost.",source:"Quran 3:171"},{text:"And those who strive for Us — We will surely guide them to Our ways.",source:"Quran 29:69"},{text:"And whoever strives only strives for himself.",source:"Quran 29:6"},{text:"Indeed, prayer restrains from immorality and wrongdoing.",source:"Quran 29:45"},{text:"Whoever is grateful is grateful for the benefit of himself.",source:"Quran 31:12"},{text:"And be patient over what befalls you.",source:"Quran 31:17"},{text:"And be moderate in your pace and lower your voice.",source:"Quran 31:19"},{text:"Be grateful to Me and to your parents.",source:"Quran 31:14"},{text:"Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds.",source:"Quran 6:162"},{text:"Whoever brings a good deed will have ten times the like of it.",source:"Quran 6:160"},{text:"They were commanded only to worship Allah, sincere to Him in faith.",source:"Quran 98:5"},{text:"Indeed, the most noble of you before Allah is the most righteous.",source:"Quran 49:13"},{text:"Avoid much suspicion; indeed, some suspicion is sin.",source:"Quran 49:12"},{text:"Do not ridicule others; perhaps they are better than you.",source:"Quran 49:11"},{text:"And cooperate in righteousness and piety.",source:"Quran 5:2"},{text:"And be patient; indeed, Allah is with the patient.",source:"Quran 8:46"},{text:"So be patient with beautiful patience.",source:"Quran 70:5"},{text:"And remember the name of your Lord and devote yourself to Him wholly.",source:"Quran 73:8"},{text:"And He is with you wherever you are.",source:"Quran 57:4"},{text:"So flee to Allah.",source:"Quran 51:50"},{text:"And in the heaven is your provision, and whatever you are promised.",source:"Quran 51:22"},{text:"Whoever purifies himself does so for the benefit of his own soul.",source:"Quran 35:18"},{text:"Indeed, this Qur'an guides to that which is most upright.",source:"Quran 17:9"},{text:"And do not walk upon the earth arrogantly.",source:"Quran 17:37"},{text:"Your Lord has decreed that you worship none but Him, and be good to parents.",source:"Quran 17:23"},{text:"And lower to them the wing of humility out of mercy.",source:"Quran 17:24"},{text:"The servants of the Most Merciful are those who walk upon the earth humbly.",source:"Quran 25:63"},{text:"And when they pass by idle talk, they pass by with dignity.",source:"Quran 25:72"},{text:"My Lord, forgive and have mercy, for You are the best of the merciful.",source:"Quran 23:118"},{text:"And worship your Lord until there comes to you certainty.",source:"Quran 15:99"},{text:"And lower your wing to the believers.",source:"Quran 15:88"},{text:"And say: Work, for Allah will see your work.",source:"Quran 9:105"},{text:"So fear Allah as much as you are able.",source:"Quran 64:16"},{text:"Whoever is patient and forgives — that is of the matters requiring determination.",source:"Quran 42:43"},{text:"And do not despair of relief from Allah.",source:"Quran 12:87"},{text:"Let them pardon and overlook. Would you not love that Allah should forgive you?",source:"Quran 24:22"},{text:"If you support Allah, He will support you and plant your feet firmly.",source:"Quran 47:7"},{text:"Why do you say that which you do not do?",source:"Quran 61:2"},{text:"Great is hatred in the sight of Allah that you say what you do not do.",source:"Quran 61:3"},{text:"Actions are but by intentions, and each person will have only what he intended.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The most beloved deeds to Allah are the most consistent, even if small.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Take benefit of five before five: your health before sickness, your free time before busyness, your youth before old age, your wealth before poverty, and your life before death.",source:"Muhammad ﷺ (Al-Hakim)"},{text:"Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise.",source:"Muhammad ﷺ (Muslim)"},{text:"The strong believer is better and more beloved to Allah than the weak believer, though in both there is good.",source:"Muhammad ﷺ (Muslim)"},{text:"Strive for what benefits you, seek help from Allah, and do not feel helpless.",source:"Muhammad ﷺ (Muslim)"},{text:"None of you truly believes until he loves for his brother what he loves for himself.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of people are those most beneficial to people.",source:"Muhammad ﷺ (Al-Tabarani)"},{text:"Allah loves that when one of you does a task, he does it with excellence.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Whoever believes in Allah and the Last Day, let him speak good or remain silent.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his neighbor.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his guest.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The Muslim is the one from whose tongue and hand people are safe.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Richness is not in many possessions; richness is the richness of the soul.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Be in this world as though you were a stranger or a traveler.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever does not thank people has not thanked Allah.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The believer is not stung from the same hole twice.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Make things easy and do not make them difficult; give glad tidings and do not repel.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those with the best character.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A good word is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not belittle any good deed, even meeting your brother with a cheerful face.",source:"Muhammad ﷺ (Muslim)"},{text:"Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",source:"Muhammad ﷺ (Muslim)"},{text:"Allah does not look at your appearance or wealth, but at your hearts and your deeds.",source:"Muhammad ﷺ (Muslim)"},{text:"The best of you is the one who is best to his family.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever guides another to good will have a reward like the one who does it.",source:"Muhammad ﷺ (Muslim)"},{text:"The upper hand is better than the lower hand.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"No one eats better food than that which he eats from the work of his own hands.",source:"Muhammad ﷺ (Bukhari)"},{text:"Seeking knowledge is an obligation upon every Muslim.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever does not show mercy to people, Allah will not show mercy to him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"How wonderful is the affair of the believer — all of his affairs are good for him.",source:"Muhammad ﷺ (Muslim)"},{text:"Tie your camel, then put your trust in Allah.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The most complete of believers in faith are those best in character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Give the worker his wages before his sweat dries.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever wakes secure in his home, healthy in body, with food for the day, has been given the whole world.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best charity is that given when you are healthy and hopeful of wealth.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Cleanliness is half of faith.",source:"Muhammad ﷺ (Muslim)"},{text:"Purity is half of faith, and praise of Allah fills the scale.",source:"Muhammad ﷺ (Muslim)"},{text:"Modesty brings nothing but good.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Modesty is part of faith.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Verily Allah is beautiful and loves beauty.",source:"Muhammad ﷺ (Muslim)"},{text:"Patience is at the first strike.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"There are two blessings which many people lose: health and free time.",source:"Muhammad ﷺ (Bukhari)"},{text:"The strong man is not the good wrestler; the strong man is the one who controls himself when angry.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Kindness is not found in anything except that it beautifies it.",source:"Muhammad ﷺ (Muslim)"},{text:"He is not one of us who does not show mercy to our young and respect to our elders.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever is deprived of gentleness is deprived of all good.",source:"Muhammad ﷺ (Muslim)"},{text:"Part of the excellence of a person's Islam is his leaving what does not concern him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"A believer to another believer is like a building whose parts support one another.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those who learn the Qur'an and teach it.",source:"Muhammad ﷺ (Bukhari)"},{text:"There is no envy except in two: a man given wealth who spends it rightly, and a man given wisdom who acts by it and teaches it.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Beware of suspicion, for suspicion is the falsest of speech.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A person is upon the religion of his close friend, so let each of you consider whom he befriends.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The example of a good companion and a bad one is like the seller of musk and the blacksmith's bellows.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Charity does not decrease wealth.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever conceals the faults of another, Allah will conceal his faults in this world and the next.",source:"Muhammad ﷺ (Muslim)"},{text:"The supplication of a Muslim for his brother in his absence is answered.",source:"Muhammad ﷺ (Muslim)"},{text:"The two feet of a servant will not move on the Day of Judgment until he is asked about his life and how he spent it, and his knowledge and what he did with it.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever seeks the pleasure of Allah though it displeases the people, Allah will suffice him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"This world is enjoyment, and the best enjoyment of this world is a righteous spouse.",source:"Muhammad ﷺ (Muslim)"},{text:"Deeds are judged by their endings.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever calls others to guidance will have a reward like the rewards of those who follow him.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.",source:"Muhammad ﷺ (Muslim)"},{text:"A man's spending on his family is a charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever suppresses his anger while able to enact it, Allah will fill his heart with security and faith.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"The believer who mixes with people and bears their harm has greater reward than one who does not.",source:"Muhammad ﷺ (Tirmidhi & Ibn Majah)"},{text:"The best of people are those who live long and do good deeds.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best of you are the best in paying off debts.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever loves to meet Allah, Allah loves to meet him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Every act of kindness is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not be people without minds of your own; if others do good, do good — and if they do wrong, do not be unjust.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The believer is a mirror to his brother.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"Righteousness is good character.",source:"Muhammad ﷺ (Muslim)"},{text:"The believer is not one who eats his fill while his neighbor goes hungry.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"May Allah have mercy on the one who shows me my faults.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Acquire knowledge before you become leaders.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I have never regretted my silence; as for my speech, I have often regretted it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Whoever does not know evil is more likely to fall into it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Sit with those who repent often, for they have the tenderest hearts.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I hate to see a man idle — working neither for this world nor the next.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"The worth of a person is measured by what he does well.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Knowledge guards you, while you guard wealth.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"People are of two kinds: your brothers in faith, or your equals in humanity.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Do not be a slave to another when Allah has created you free.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"The tongue of the wise is behind his heart, and the heart of the fool is behind his tongue.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Today is action without reckoning, and tomorrow is reckoning without action.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Anxiety over guaranteed provision, and neglect of required duty, are signs of a weak heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Concern for this world is darkness in the heart; concern for the Hereafter is light in the heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Knowledge without action is a tree without fruit.",source:"Abu Bakr as-Siddiq رضي الله عنه"}];let Sr=class extends T{connectedCallback(){super.connectedCallback(),this.unsubGoals=j(this,f,t=>t.goals),this.unsubCommits=j(this,f,t=>t.commitments),f.getState().loadGoals().catch(()=>{}),f.getState().loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubCommits?.()}todaysReminder(){const t=Math.floor(Date.now()/864e5);return $r[t%$r.length]}renderSource(t){const e=t.split("ﷺ");return e.length===1?t:e.flatMap((i,s)=>s===0?[i]:[r`<span class="inline-block text-[1.35em] leading-none align-[-0.15em]">\ufdfa</span>`,i])}render(){const t=f.getState(),e=t.goals.filter(n=>!n.archived),i=t.commitments;if(e.length===0&&i.length===0)return c;const s=this.todaysReminder();return r`<section class="goals-metrics @container px-4 pt-4 pb-4">
      <div class="flex flex-col gap-2 @3xl:flex-row @3xl:items-center @3xl:justify-between @3xl:gap-8">
        <h1 class="shrink-0 text-xl font-semibold leading-none text-ink">Goals</h1>
        <p class="min-w-0 leading-snug @3xl:max-w-[70%] @3xl:text-right">
          <span class="text-[15px] text-ink" style="font-family:var(--font-display);">${s.text}</span>
          <span class="ml-1.5 whitespace-nowrap text-[13px] text-muted">${this.renderSource(s.source)}</span>
        </p>
      </div>
    </section>`}};Sr=Pu([w("goals-metrics")],Sr);const Tr=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s]+|\*\*([^*]+)\*\*|~~([^~]+)~~|\*([^*\n]+)\*|_([^_\n]+)_|`([^`]+)`/g;function Al(t){const e=[];let i=0,s;for(Tr.lastIndex=0;(s=Tr.exec(t))!==null;){s.index>i&&e.push(t.slice(i,s.index));const[,n,o,a,l,h,u,p]=s;if(n||s[0].startsWith("http")){const m=n?o:s[0];e.push(r`<a
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
        >`);i=s.index+s[0].length}return i<t.length&&e.push(t.slice(i)),e}function Ls(t){const e=t.target,i=e.selectionStart??0,s=e.selectionEnd??0;if(i===s)return;const n=(t.clipboardData?.getData("text/plain")??"").trim();if(!/^https?:\/\/\S+$/.test(n))return;const o=e.value.slice(i,s).replace(/[[\]]/g,"");if(!o.trim())return;t.preventDefault();const a=n.replace(/\(/g,"%28").replace(/\)/g,"%29");e.setRangeText(`[${o}](${a})`,i,s,"end"),e.dispatchEvent(new Event("input",{bubbles:!0}))}var Au=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,Zi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Mu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Au(e,i,n),n};const Iu=["January","February","March","April","May","June","July","August","September","October","November","December"],_u=["M","T","W","T","F","S","S"];function Ou(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const s=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-s.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Lu(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),i=e.getUTCDay()||7;return e.setUTCDate(e.getUTCDate()-(i-1)),e}function Ru(t){const e=/^(\d{4})-W(\d{2})$/.exec(t);if(!e||!e[1]||!e[2])return null;const i=Number(e[1]),s=Number(e[2]),n=new Date(Date.UTC(i,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5);return new Date(a.getTime()+(s-1)*7*864e5)}function Nu(t,e){const i=new Date(Date.UTC(t,e,1)),s=Lu(i),n=[];for(let o=0;o<6;o++){const a=[];for(let h=0;h<7;h++)a.push(new Date(s.getTime()+(o*7+h)*864e5));const l=a[0];n.push({week:Ou(l),days:a})}return n}let hi=class extends T{constructor(){super(...arguments),this.selected=At(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=t=>{this.open&&(this.contains(t.target)||this.close())},this.keyHandler=t=>{t.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(t){if(t.has("open")&&this.open||t.has("selected")&&this.open){const e=Ru(this.selected);if(e){const i=new Date(e.getTime()+2592e5);this.viewYear=i.getUTCFullYear(),this.viewMonth=i.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(t){this.selected=t,this.dispatchEvent(new CustomEvent("select",{detail:{week:t},bubbles:!0,composed:!0})),this.close()}shiftMonth(t){const e=new Date(Date.UTC(this.viewYear,this.viewMonth+t,1));this.viewYear=e.getUTCFullYear(),this.viewMonth=e.getUTCMonth()}goToday(){this.select(At())}render(){if(!this.open)return c;const t=Nu(this.viewYear,this.viewMonth),e=new Date,i=`${e.getUTCFullYear()}-${e.getUTCMonth()}-${e.getUTCDate()}`;return r`
      <div
        class="absolute z-50 mt-1 right-0 top-full w-[280px] max-w-[calc(100vw-2rem)] rounded-md border border-line bg-surface shadow-lg p-2 font-ui text-[12px] text-ink"
        @mousedown=${s=>s.stopPropagation()}
      >
        <div class="flex items-center justify-between px-1 pb-2">
          <div class="flex items-center gap-1">
            <button
              class="w-6 h-6 grid place-items-center rounded hover:bg-[var(--hover)] text-muted hover:text-ink"
              aria-label="Previous month"
              @click=${()=>this.shiftMonth(-1)}
            >‹</button>
            <div class="px-1 font-medium">${Iu[this.viewMonth]} ${this.viewYear}</div>
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
          ${_u.map(s=>r`<div class="text-center">${s}</div>`)}
        </div>

        <div class="mt-1">
          ${t.map(s=>{const n=s.week===this.selected;return r`
              <button
                class="grid grid-cols-[28px_repeat(7,1fr)] w-full items-center rounded text-[12px] py-0.5 ${n?"bg-[var(--accent-soft)] text-ink":"hover:bg-[var(--hover)] text-muted"}"
                @click=${()=>this.select(s.week)}
                aria-label=${`Select week ${s.week}`}
              >
                <div class="text-center text-[10px] ${n?"text-[var(--accent)] font-medium":"text-muted"}">
                  ${Number(s.week.slice(-2))}
                </div>
                ${s.days.map(o=>{const a=o.getUTCMonth()===this.viewMonth,h=`${o.getUTCFullYear()}-${o.getUTCMonth()}-${o.getUTCDate()}`===i;return r`
                    <div
                      class="h-7 grid place-items-center rounded-sm ${h?"font-semibold text-[var(--accent)]":""} ${a?n?"text-ink":"":"opacity-40"}"
                    >${o.getUTCDate()}</div>
                  `})}
              </button>
            `})}
        </div>
      </div>
    `}};Zi([b()],hi.prototype,"selected",2);Zi([b({type:Boolean})],hi.prototype,"open",2);Zi([d()],hi.prototype,"viewYear",2);Zi([d()],hi.prototype,"viewMonth",2);hi=Zi([w("week-picker")],hi);var ju=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Ml=(t,e,i,s)=>{for(var n=s>1?void 0:s?Fu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ju(e,i,n),n};function At(){const t=new Date,e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const s=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-s.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Rs(t,e){const i=/^(\d{4})-W(\d{2})$/.exec(t);if(!i||!i[1]||!i[2])return t;const s=Number(i[1]),n=Number(i[2]),o=new Date(Date.UTC(s,0,4)),a=o.getUTCDay()||7,l=new Date(o.getTime()-(a-4)*864e5),h=new Date(l.getTime()+(n-1+e)*7*864e5);return Uu(h)}function Uu(t){const e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const s=new Date(Date.UTC(e.getUTCFullYear(),0,1)),n=Math.ceil(((e.getTime()-s.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Bu(t){const e=/^(\d{4})-W(\d{2})$/.exec(t);if(!e||!e[1]||!e[2])return null;const i=Number(e[1]),s=Number(e[2]),n=new Date(Date.UTC(i,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5),l=new Date(a.getTime()+(s-1)*7*864e5),h=new Date(l.getTime()+6*864e5);return{start:l,end:h}}const Cr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function eo(t){const e=Bu(t);if(!e)return t;const i=Cr[e.start.getUTCMonth()],s=Cr[e.end.getUTCMonth()],n=e.start.getUTCDate(),o=e.end.getUTCDate();return i===s?`${i} ${n}–${o}`:`${i} ${n} – ${s} ${o}`}let io=class extends T{constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(t){await f.getState().setWeek(t)}togglePicker(t){t.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(t){this.pickerOpen=!1,t.detail?.week&&this.goto(t.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const t=f.getState().currentWeek??At(),e=At(),i=t!==e,s=`week-nav-date rounded px-2 whitespace-nowrap tabular-nums font-medium hover:bg-hover ${i?"text-muted hover:text-ink":"text-ink"}`,n="week-nav-arrow w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover";return r`
      <div class="week-nav-controls flex items-center gap-2 text-sm" role="group" aria-label="Week navigation">
        ${i?r`<button type="button" class="week-nav-reset rounded px-2 text-xs font-medium text-accent hover:bg-hover whitespace-nowrap" @click=${()=>void this.goto(e)}>This week</button>`:c}
        <div class="week-nav-range relative flex items-center gap-0.5">
          <button type="button" class=${n} aria-label="Previous week" title="Previous week" @click=${()=>void this.goto(Rs(t,-1))}>
            <sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>
          </button>
          <button
            type="button"
            class=${s}
            aria-label=${`Pick a week, ${eo(t)} selected`}
            aria-haspopup="dialog"
            aria-expanded=${this.pickerOpen}
            @click=${this.togglePicker}
          >${eo(t)}</button>
          <button type="button" class=${n} aria-label="Next week" title="Next week" @click=${()=>void this.goto(Rs(t,1))}>
            <sc-icon name="lucide-chevron-right" class="w-4 h-4"></sc-icon>
          </button>
          <week-picker
            .selected=${t}
            .open=${this.pickerOpen}
            @select=${this.onPickerSelect}
            @close=${this.onPickerClose}
          ></week-picker>
        </div>
      </div>
    `}};Ml([d()],io.prototype,"pickerOpen",2);io=Ml([w("week-nav")],io);var Hu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,Vt=(t,e,i,s)=>{for(var n=s>1?void 0:s?zu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Hu(e,i,n),n};let de=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onPendingDelete=()=>this.requestUpdate(),this.onRowTap=t=>{!ci()||this.editing||t.target.closest("button, textarea, a")||(this.clearHighlight(),di({kind:"commit",id:this.commit.id}))},this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=t=>{if(!this.dragEnabled){t.preventDefault();return}t.dataTransfer&&(t.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),t.dataTransfer.setData("text/plain",this.commit.title),t.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=t=>{if(!t.dataTransfer?.types.includes("text/x-commit-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const e=t.currentTarget.getBoundingClientRect();this.dragOverPos=t.clientY<e.top+e.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async t=>{const e=t.dataTransfer?.getData("text/x-commit-id"),i=e?Number(e):NaN,s=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(i)||i===this.commit.id)return;t.preventDefault();const n=s==="after"?this.index+1:this.index;await f.getState().reorderCommitment(i,n)}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.goals),this.unsub2=j(this,f,t=>t.northStars),this.unsubFocused=j(this,f,t=>t.focusedRowKey),window.addEventListener(Fi,this.onPendingDelete)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.(),this.detachSwipe?.(),this.detachSwipe=void 0,window.removeEventListener(Fi,this.onPendingDelete)}updated(t){if(t.has("editing")&&this.editing&&this.editInput&&(this.editInput.focus(),this.editInput.select(),this.autoGrow(this.editInput)),this.style.display=Sl(`commit:${this.commit.id}`)?"none":"",!this.detachSwipe){const e=this.querySelector("li.commit-li");e&&(this.detachSwipe=Tl(e,{onRight:()=>{const i=this.commit,s=i.done===1;this.clearHighlight(),f.getState().updateCommitment(i.id,{done:!s}),_o(s?"Marked not done":"Completed",{onUndo:()=>void f.getState().updateCommitment(i.id,{done:s})})},onLeft:()=>{const i=this.commit.id;Os(`commit:${i}`,"Task deleted",()=>f.getState().deleteCommitment(i))}}))}}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}get linkedGoal(){const t=this.commit;if(t.goal_id!=null)return f.getState().goals.find(e=>e.id===t.goal_id)??null;if(t.key_result_id!=null){for(const e of f.getState().goals)if((e.keyResults??[]).some(i=>i.id===t.key_result_id))return e}return null}async toggleDone(t){t.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async toggleRecurring(t){t.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{recurring:!this.commit.recurring})}async onDelete(t){t.stopPropagation();const e=document.createElement("commit-delete-dialog");e.commit=this.commit,document.body.append(e)}onMarkerClick(t){t.stopPropagation();const e=t.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:e},bubbles:!0,composed:!0}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("commit-touched",{detail:{id:this.commit.id},bubbles:!0,composed:!0}))}startEdit(t){if(t.stopPropagation(),this.clearHighlight(),ci()){if(t.target.closest("a"))return;di({kind:"commit",id:this.commit.id});return}this.editing=!0}async commitEdit(t){if(!this.editing)return;const i=(this.editInput?.value??"").trim(),s=this.commit.title;this.editing=!1,t&&i&&i!==s&&await f.getState().updateCommitment(this.commit.id,{title:i})}onEditKey(t){t.key==="Enter"?(t.preventDefault(),this.commitEdit(!0)):t.key==="Escape"&&(t.preventDefault(),this.commitEdit(!1))}renderMarker(){const t=this.linkedGoal;if(t){const e=t.symbol??null,i=t.color??null,s=e?We[e]:void 0;if(e&&s){const o=i?`color:var(--nsc-${i})`:"";return r`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${W(Ke(s))}</span
        >`}const n=i?`background:var(--nsc-${i})`:"background:var(--muted)";return r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${n}
      ></span>`}return r`
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
        <path class="plus-h" d="M8 12h8"></path>
        <path class="plus-v" d="M12 8v8"></path>
      </svg>
    `}render(){const t=this.commit,e=this.linkedGoal,i=e?e.title:"Assign to a goal or KR",s=t.done===1,n=s?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${t.id}`,l=f.getState().focusedRowKey===o?"bg-hover":"";return r`
      <li
        class="wk-row commit-li group/row flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover ${l} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
        data-id=${t.id}
        data-row-key=${o}
        draggable=${this.dragEnabled?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
        @click=${this.onRowTap}
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
          class="commit-check ${n}"
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${s?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${s?r`<svg
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
        <div class="commit-body flex-1 min-w-0 flex items-center gap-2">
        ${this.editing?r`
              <textarea
                class="inline-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none p-0 resize-none overflow-hidden leading-snug"
                rows="1"
                .value=${t.title}
                @input=${h=>this.autoGrow(h.target)}
                @keydown=${this.onEditKey}
                @paste=${Ls}
                @blur=${()=>this.commitEdit(!0)}
              ></textarea>
            `:r`
              <span
                class="commit-title flex-1 min-w-0 text-sm cursor-text ${s?"line-through text-muted":this.highlight?"font-medium":"text-ink"}"
                style=${this.highlight&&!s?"color:var(--nsc-green);":""}
                @click=${this.startEdit}
              >${Al(t.title)}</span>
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
          title=${i}
          @click=${this.onMarkerClick}
        >${this.renderMarker()}</button>
        <button
          class="commit-del w-5 h-5 grid place-items-center text-muted hover:text-ink opacity-0 group-hover/row:opacity-100 transition-opacity"
          aria-label="Delete"
          @click=${this.onDelete}
        >×</button>
        </div>
      </li>
    `}};Vt([b({attribute:!1})],de.prototype,"commit",2);Vt([b({attribute:!1})],de.prototype,"index",2);Vt([b({type:Boolean})],de.prototype,"highlight",2);Vt([d()],de.prototype,"editing",2);Vt([d()],de.prototype,"dragEnabled",2);Vt([d()],de.prototype,"dragOverPos",2);Vt([V("textarea.inline-edit")],de.prototype,"editInput",2);de=Vt([w("commit-row")],de);let Ns=class extends T{constructor(){super(...arguments),this.commit=null,this.deleting=!1}close(){this.deleting||this.remove()}async confirmDelete(){if(!(!this.commit||this.deleting)){this.deleting=!0;try{await f.getState().deleteCommitment(this.commit.id),this.remove()}catch(t){console.warn("[goals] commitment delete failed",t),this.deleting=!1}}}render(){const t=this.commit,e=t?.series_id!=null,i=t?eo(t.week):"the selected week";return r`<sc-dialog label=${e?"Delete repeating task?":"Delete this task?"} open @sc-hide=${this.close}>
      <p class="text-sm text-ink leading-relaxed">
        ${e?r`Delete “${t?.title??""}” from <strong>${i}</strong> and every week after it? Earlier weeks and their completion status will stay unchanged.`:r`Delete “${t?.title??""}” from <strong>${i}</strong>?`}
      </p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm ring-1 ring-inset ring-line bg-surface hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.confirmDelete()}>
          ${this.deleting?"Deleting…":e?"Delete this and future":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};Vt([b({attribute:!1})],Ns.prototype,"commit",2);Vt([d()],Ns.prototype,"deleting",2);Ns=Vt([w("commit-delete-dialog")],Ns);var qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Je=(t,e,i,s)=>{for(var n=s>1?void 0:s?Ku(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&qu(e,i,n),n};const Wu=448,ei=8;function os(t,e,i=""){const s=We[t];return s?r`<span
    class="inline-flex items-center justify-center shrink-0 ${i}"
    style="width:${e}px;height:${e}px"
    >${W(Ke(s))}</span
  >`:c}let Se=class extends T{constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.expanded=null,this.outsideClickHandler=t=>{const e=t.target;e&&(this.contains(e)||this.anchor&&this.anchor.contains(e)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const t=this.anchor.getBoundingClientRect(),e=window.innerWidth,i=this.firstElementChild?.getBoundingClientRect().width||Wu;this.style.position="fixed",this.style.zIndex="1000";const s=e-t.right,n=Math.max(ei,e-i-ei);this.style.right=`${Math.min(Math.max(s,ei),n)}px`;const o=this.getBoundingClientRect().height||320,a=window.innerHeight-t.bottom,l=t.top;a>=o+ei||a>=l?(this.style.top=`${t.bottom+6}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,a-ei)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-t.top+6}px`,this.style.maxHeight=`${Math.max(160,l-ei)}px`),this.style.display="flex",this.style.flexDirection="column"}activeGoals(){return f.getState().goals.filter(t=>t.status==="active")}expandedSet(t){if(this.expanded)return this.expanded;const e=new Set,i=this.currentKeyResultId!=null?t.find(s=>(s.keyResults??[]).some(n=>n.id===this.currentKeyResultId)):t.find(s=>s.id===this.currentGoalId);return i&&e.add(i.id),this.expanded=e,e}toggleGoal(t,e){e.stopPropagation();const i=new Set(this.expandedSet(this.activeGoals()));i.has(t)?i.delete(t):i.add(t),this.expanded=i}buildItems(){const t=this.query.trim().toLowerCase(),e=this.activeGoals(),i=this.expandedSet(e),s=[];t||s.push({kind:"none",label:"None",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const n of e){const o=n.keyResults??[],a=n.title.toLowerCase();if(!(!t||a.includes(t)||o.some(u=>u.title.toLowerCase().includes(t))))continue;const h=t?!0:i.has(n.id);if(s.push({kind:"goal",id:n.id,label:n.title,northStar:n.north_star,current:this.currentGoalId===n.id&&this.currentKeyResultId==null,krCount:o.length,expanded:h}),!!h)for(const u of o)t&&!a.includes(t)&&!u.title.toLowerCase().includes(t)||s.push({kind:"kr",id:u.id,parent:n.id,label:u.title,northStar:n.north_star,current:this.currentKeyResultId===u.id})}return s}pick(t){let e;t.kind==="none"?e={goalId:null,keyResultId:null}:t.kind==="goal"?e={goalId:t.id,keyResultId:null}:e={goalId:null,keyResultId:t.id},this.dispatchEvent(new CustomEvent("pick",{detail:e,bubbles:!0,composed:!0}))}onSearchKey(t){if(t.key==="Escape"){if(t.preventDefault(),this.query){this.query="";return}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));return}if(t.key==="Enter"&&this.query.trim()){const e=this.buildItems(),i=e.find(s=>s.kind==="kr")??e.find(s=>s.kind==="goal");i&&(t.preventDefault(),this.pick(i))}}renderNsMarker(t,e){if(!t)return c;const i=f.getState().northStars.find(u=>u.slug===t),s=i?.symbol??null,n=i?.color??null,o=e==="goal"?15:13,a=e==="goal"?1:.8,l=s?We[s]:void 0,h=n?`color:var(--nsc-${n});opacity:${a}`:`opacity:${a}`;return s&&l?r`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${h}"
        >${W(Ke(l))}</span
      >`:r`<span
      class="inline-block rounded-full shrink-0"
      style="width:8px;height:8px;background:${n?`var(--nsc-${n})`:"var(--muted)"};opacity:${a}"
    ></span>`}renderCheck(t){return t?os("check",14,"text-accent ml-auto"):c}renderRow(t){const e="flex items-center gap-2 min-h-8 px-2 py-1.5 rounded-md cursor-pointer text-sm select-none transition-colors",i=t.current?"bg-accent-soft":"hover:bg-hover";if(t.kind==="none")return r`
        <li
          class="${e} ${i} text-muted"
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
      `;if(t.kind==="goal"){const s=t.krCount>0;return r`
        <li
          class="${e} ${i} mt-1 font-semibold text-ink"
          role="option"
          aria-selected=${t.current?"true":"false"}
          @click=${()=>this.pick(t)}
        >
          ${s?r`<button
                type="button"
                class="w-5 h-5 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover shrink-0 transition-transform ${t.expanded?"rotate-90":""}"
                aria-label=${t.expanded?"Collapse key results":"Expand key results"}
                aria-expanded=${t.expanded?"true":"false"}
                @click=${n=>this.toggleGoal(t.id,n)}
              >
                ${os("chevron-right",14)}
              </button>`:r`<span class="w-5 shrink-0"></span>`}
          ${this.renderNsMarker(t.northStar,"goal")}
          <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${t.label}</span>
          ${s&&!t.expanded?r`<span class="text-[11px] font-normal text-muted tabular-nums shrink-0"
                >${t.krCount} KR${t.krCount===1?"":"s"}</span
              >`:c}
          ${this.renderCheck(t.current)}
        </li>
      `}return r`
      <li
        class="${e} ${i} pl-9 text-ink/85"
        role="option"
        aria-selected=${t.current?"true":"false"}
        @click=${()=>this.pick(t)}
      >
        ${this.renderNsMarker(t.northStar,"kr")}
        <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${t.label}</span>
        ${this.renderCheck(t.current)}
      </li>
    `}render(){const t=this.buildItems(),e=t.some(i=>i.kind!=="none");return r`
      <div
        class="w-[28rem] max-w-[calc(100vw-1rem)] min-h-0 flex flex-col bg-popover rounded-xl overflow-hidden"
        style="box-shadow: var(--popover-shadow)"
        role="dialog"
        aria-label="Assign to goal or key result"
        @click=${i=>i.stopPropagation()}
      >
        <div class="flex items-center gap-2 h-9 px-3 border-b border-line text-muted shrink-0">
          ${os("search",14)}
          <input
            class="cp-search flex-1 min-w-0 h-full bg-transparent text-sm text-ink placeholder:text-muted border-0 outline-none focus:outline-none focus:ring-0"
            type="text"
            placeholder="Search goals or KRs…"
            autocomplete="off"
            spellcheck="false"
            .value=${this.query}
            @input=${i=>{this.query=i.target.value}}
            @keydown=${this.onSearchKey}
          />
          ${this.query?r`<button
                type="button"
                class="w-5 h-5 grid place-items-center rounded hover:bg-hover hover:text-ink shrink-0"
                aria-label="Clear search"
                @click=${()=>{this.query="",this.searchEl?.focus()}}
              >
                ${os("x",12)}
              </button>`:c}
        </div>
        <ul class="flex-1 min-h-0 overflow-y-auto p-1" role="listbox">
          ${t.map(i=>this.renderRow(i))}
          ${e?c:r`<li class="px-3 py-6 text-sm text-muted text-center">
                No goals or KRs match “${this.query.trim()}”
              </li>`}
        </ul>
      </div>
    `}};Je([b({attribute:!1})],Se.prototype,"anchor",2);Je([b({type:Number})],Se.prototype,"currentGoalId",2);Je([b({type:Number})],Se.prototype,"currentKeyResultId",2);Je([d()],Se.prototype,"query",2);Je([d()],Se.prototype,"expanded",2);Je([V(".cp-search")],Se.prototype,"searchEl",2);Se=Je([w("category-picker")],Se);var Gu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,bi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Vu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Gu(e,i,n),n};let Ue=class extends T{constructor(){super(...arguments),this.mode="open",this.pickerCommitId=null,this.pickerAnchor=null,this.dragOverIdea=!1,this.highlightIds=new Set,this.flash=new Is(this,"commitment"),this.onOpsEvent=t=>{const e=t.detail;this.flash.take(e),this.mode==="open"&&e?.action==="refresh"&&e.added?.kind==="commitment"&&(this.highlightIds=new Set(this.highlightIds).add(e.added.id))},this.onCommitTouched=t=>{const e=t.detail?.id;if(e==null||!this.highlightIds.has(e))return;const i=new Set(this.highlightIds);i.delete(e),this.highlightIds=i},this.onIdeaDragOver=t=>{this.mode==="open"&&t.dataTransfer?.types.includes("text/x-idea-id")&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragOverIdea=!0)},this.onIdeaDragLeave=()=>{this.dragOverIdea=!1},this.onIdeaDrop=async t=>{if(this.mode!=="open")return;const e=t.dataTransfer?.getData("text/x-idea-id");if(!e)return;t.preventDefault(),this.dragOverIdea=!1;const i=(t.dataTransfer?.getData("text/plain")||"").trim();i&&await Oo(Number(e),i)}}connectedCallback(){super.connectedCallback(),this.unsubCommits=j(this,f,t=>t.commitments),this.unsubGoals=j(this,f,t=>t.goals),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.(),document.removeEventListener("ops-event",this.onOpsEvent)}onOpenPicker(t){if(this.pickerCommitId===t.detail.commitId){this.closePicker();return}this.pickerCommitId=t.detail.commitId,this.pickerAnchor=t.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(t){const e=this.pickerCommitId;e!=null&&(this.closePicker(),await f.getState().updateCommitment(e,{goalId:t.detail.goalId,keyResultId:t.detail.keyResultId}))}render(){const t=f.getState().commitments,e=t.filter(s=>this.mode==="done"?s.done:!s.done),i=t.find(s=>s.id===this.pickerCommitId)??null;return r`
      <ul
        class="commits"
        style=${this.mode==="open"?this.dragOverIdea?"min-height:32px;box-shadow:inset 0 0 0 1.5px var(--accent);border-radius:12px;":"min-height:8px;":""}
        @open-picker=${this.onOpenPicker}
        @commit-touched=${this.onCommitTouched}
        @dragover=${this.onIdeaDragOver}
        @dragleave=${this.onIdeaDragLeave}
        @drop=${this.onIdeaDrop}
      >
        ${e.map((s,n)=>r`<commit-row class=${this.flash.cls(s.id)} data-flash=${this.flash.key(s.id)} .commit=${s} .index=${n} .highlight=${this.highlightIds.has(s.id)}></commit-row>`)}
        ${this.mode==="open"?this.flash.ghosts.map(s=>r`<li class="wk-row agent-flash agent-flash-removed flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 border-t-2 border-b-2 border-transparent"
              data-flash=${this.flash.key(s.id)} title="Removed by the agent. Click to dismiss.">${s.title}</li>`):c}
      </ul>
      ${this.pickerCommitId!=null&&this.pickerAnchor?r`
            <category-picker
              .anchor=${this.pickerAnchor}
              .currentGoalId=${i?.goal_id??null}
              .currentKeyResultId=${i?.key_result_id??null}
              @pick=${this.onPick}
              @close=${this.closePicker}
            ></category-picker>
          `:c}
    `}};bi([b()],Ue.prototype,"mode",2);bi([d()],Ue.prototype,"pickerCommitId",2);bi([d()],Ue.prototype,"pickerAnchor",2);bi([d()],Ue.prototype,"dragOverIdea",2);bi([d()],Ue.prototype,"highlightIds",2);Ue=bi([w("weekly-commits")],Ue);var Yu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,Il=(t,e,i,s)=>{for(var n=s>1?void 0:s?Qu(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Yu(e,i,n),n};const Ju=new Intl.DateTimeFormat("en-GB",{weekday:"long"}),Er=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short"}),fn=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit"}),rs=t=>new Date(t).setHours(0,0,0,0);function Xu(t){const e=t.attendees.filter(i=>!i.self).map(i=>(i.name||i.email.split("@")[0]||"").split(/[ .]/)[0]).filter(Boolean);return e.length?e.length<=2?e.join(", "):`${e.slice(0,2).join(", ")} +${e.length-2}`:""}function _l(t,e=""){return r`<div class="wk-row flex items-center gap-2 pl-4 -mx-2 pb-1">
    <span class="wk-gutter shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>
    <h3 class="text-[13px] font-medium text-muted">${t}</h3>
    ${e?r`<span class="text-[11px] text-muted">${e}</span>`:c}
  </div>`}let so=class extends T{constructor(){super(...arguments),this.data=null,this.loadedFor=null,this.onOps=t=>{t.detail?.action==="refresh"&&this.load(!0)}}connectedCallback(){super.connectedCallback(),this.unsub=j(this,f,t=>t.currentWeek),document.addEventListener("ops-event",this.onOps),this.timer=window.setInterval(()=>{document.visibilityState==="visible"&&this.load(!0)},10*6e4)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("ops-event",this.onOps),window.clearInterval(this.timer),this.request?.abort(),this.loadedFor=null}updated(){(f.getState().currentWeek??At())!==this.loadedFor&&this.load(!1)}async load(t){const e=f.getState().currentWeek??At();e!==this.loadedFor&&(this.loadedFor=e,this.data=null),this.request?.abort();const i=new AbortController;this.request=i;const s=()=>!i.signal.aborted&&e===(f.getState().currentWeek??At());try{const n=await fetch(`/api/calendar?week=${encodeURIComponent(e)}`,{cache:"no-store",signal:i.signal});if(n.status===401||n.status===403){s()&&(this.data=null);return}if(!n.ok)throw new Error(String(n.status));const o=await n.json();s()&&o.week===e&&(this.data=o)}catch{s()&&(!t||!this.data)&&(this.data={week:e,source:"live",events:[],error:"Couldn't reach the calendar",fetchedAt:Date.now()})}}renderRow(t,e){const i=Date.parse(t.start),s=Date.parse(t.end),n=s<=e,o=!t.allDay&&!n&&i<=e,a=Xu(t),l=rs(i)===rs(s)?fn.format(s):`${Er.format(s)} ${fn.format(s)}`;return r`<li class="meeting-row ${o?"meeting-row-live":""}">
      <div class="meeting-time">
        ${t.allDay?"All day":r`
          <time datetime=${t.start}>${fn.format(i)}</time>
          <time class="meeting-end" datetime=${t.end} aria-label=${`Ends at ${l}`}>${l}</time>`}
      </div>
      <div class="meeting-details">
        ${t.htmlLink?r`<a class="meeting-title hover:underline" href=${t.htmlLink} target="_blank" rel="noopener">${t.title}</a>`:r`<span class="meeting-title">${t.title}</span>`}
        ${a||o||!n&&t.myResponse==="needsAction"?r`<div class="meeting-meta">
              ${o?r`<span class="meeting-now">Happening now</span>`:c}
              ${a?r`<span>${a}</span>`:c}
              ${!n&&t.myResponse==="needsAction"?r`<span>RSVP pending</span>`:c}
            </div>`:c}
      </div>
      ${t.meetUrl&&!n?r`<a class="meeting-join" aria-label=${`Join ${t.title}`} href=${t.meetUrl} target="_blank" rel="noopener">
            <sc-icon name="lucide-video" aria-hidden="true"></sc-icon>Join
          </a>`:c}
    </li>`}render(){const t=this.data;if(!t||t.source==="off")return c;const e=Date.now(),i=rs(e),s=new Date(i),n=s.setDate(s.getDate()+1),o=t.week===At(),a=new Map;for(const l of t.events){const h=rs(Date.parse(l.start));if(l.myResponse==="declined"||o&&h<i)continue;const u=a.get(h);u?u.push(l):a.set(h,[l])}return!a.size&&!t.error?c:r`<section class="week-meetings" aria-label="Meetings">
      ${_l("Meetings",t.source==="sample"?"Sample":"")}
      ${t.error?r`<p class="meeting-error" role="status">Couldn’t refresh the calendar.</p>`:c}
      ${[...a].map(([l,h])=>r`
        <div class="meeting-day">
          <h4 class="meeting-day-heading">
            <span>${l===i?"Today":l===n?"Tomorrow":Ju.format(l)}</span>
            <span>${Er.format(l)}</span>
          </h4>
          <ul>${h.map(u=>this.renderRow(u,e))}</ul>
        </div>`)}
    </section>`}};Il([d()],so.prototype,"data",2);so=Il([w("week-meetings")],so);var Zu=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,Tt=(t,e,i,s)=>{for(var n=s>1?void 0:s?tp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Zu(e,i,n),n};const ep='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6"/><polyline points="8 5 4 9 8 13"/></svg>',Dr="slmai.cockpit.weekSectionCollapsed",gn="slmai.cockpit.weekSection.title",Pr="slmai.cockpit.weekSection.hideDone",bn="Shipping this week";let yt=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.showMeetings=!1,this.collapsed=!1,this.hideDone=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=bn,this.leftoverCount=0,this.newGoalId=null,this.newKeyResultId=null,this.addPickerOpen=!1,this.addPickerAnchor=null,this.leftoverForWeek=null,this.opsHandler=t=>{const i=t.detail;i&&(i.action==="load-week"?f.getState().setWeek(i.week):i.action==="refresh"&&f.getState().loadCommitments(i.week))},this.closeAddPicker=()=>{this.addPickerOpen=!1,this.addPickerAnchor=null}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Dr)==="1",this.hideDone=localStorage.getItem(Pr)==="1",this.titleValue=localStorage.getItem(gn)??bn,fetch("/api/settings").then(e=>e.json()).then(e=>{const i=e["ui.section.week.title"];i&&(this.titleValue=i,localStorage.setItem(gn,i))}).catch(()=>{}),this.unsub=j(this,f,e=>e.currentWeek),this.unsubCommits=j(this,f,e=>`${e.commitments.filter(i=>i.done).length}`),document.addEventListener("ops-event",this.opsHandler);const t=f.getState();t.goals.length||t.loadGoals().catch(()=>{}),t.currentWeek==null&&t.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsubCommits?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(t){t.has("adding")&&this.adding&&this.newTitleEl?.focus();const e=At();f.getState().currentWeek===e&&this.leftoverForWeek!==e&&(this.leftoverForWeek=e,this.refreshLeftover(e))}async refreshLeftover(t){try{const{commitments:e}=await C.commitments.listForWeek(Rs(t,-1));this.leftoverCount=e.filter(i=>!i.done).length}catch{this.leftoverCount=0}}async doCarry(t){t.stopPropagation();const e=At();try{await C.commitments.carryOver(Rs(e,-1),e)}catch{}this.leftoverCount=0,await f.getState().loadCommitments(e)}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||bn;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(gn,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(Dr,this.collapsed?"1":"0")}catch{}}toggleHideDone(t){t.stopPropagation(),this.hideDone=!this.hideDone;try{localStorage.setItem(Pr,this.hideDone?"1":"0")}catch{}}async commitAdd(t){const e=this.newTitleEl,i=(e?.value??"").trim();i&&await f.getState().createCommitment({title:i,goalId:this.newGoalId,keyResultId:this.newKeyResultId}),this.newGoalId=null,this.newKeyResultId=null,t||!i?this.adding=!1:e&&(e.value="")}onAddKey(t){t.key==="Enter"?(t.preventDefault(),this.commitAdd(!1)):t.key==="Escape"&&(t.preventDefault(),this.adding=!1,this.newGoalId=null,this.newKeyResultId=null)}startAdd(){this.newGoalId=null,this.newKeyResultId=null,this.adding=!0}get newLinkedGoal(){const t=f.getState().goals;if(this.newGoalId!=null)return t.find(e=>e.id===this.newGoalId)??null;if(this.newKeyResultId!=null){for(const e of t)if((e.keyResults??[]).some(i=>i.id===this.newKeyResultId))return e}return null}openAddPicker(t){t.stopPropagation(),this.addPickerAnchor=t.currentTarget,this.addPickerOpen=!0}onAddPick(t){this.newGoalId=t.detail.goalId,this.newKeyResultId=t.detail.keyResultId,this.closeAddPicker(),this.updateComplete.then(()=>this.newTitleEl?.focus())}renderAddMarker(){const t=this.newLinkedGoal;if(t){const e=t.symbol??null,i=t.color??null,s=e?We[e]:void 0;return e&&s?r`<span
          class="inline-flex items-center justify-center w-3.5 h-3.5"
          style=${i?`color:var(--nsc-${i})`:""}
          >${W(Ke(s))}</span
        >`:r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${i?`background:var(--nsc-${i})`:"background:var(--muted)"}
      ></span>`}return r`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>`}render(){const t=f.getState().currentWeek===At(),e=f.getState().commitments.filter(s=>s.done).length,i=this.tabbed||!this.collapsed;return r`
      <section class="group/section-header flex flex-col gap-1">
        ${this.tabbed?c:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${W(this.collapsed?Xi:Ji)}</span
              >
              ${this.editingTitle?r`<input
                    class="text-lg font-semibold text-ink leading-none bg-transparent border-b border-line outline-none"
                    style="letter-spacing:-0.01em;min-width:4ch;"
                    .value=${this.titleValue}
                    autofocus
                    @click=${s=>s.stopPropagation()}
                    @keydown=${this.onTitleKey}
                    @blur=${s=>this.commitTitleEdit(s.target.value)}
                  />`:r`<h2
                    class="text-lg font-semibold text-ink leading-none cursor-pointer"
                    style="letter-spacing:-0.01em;"
                    title="Double-click to rename"
                    @dblclick=${this.startEditTitle}
                  >${this.titleValue}</h2>`}
              <span class="flex-1"></span>
            </header>`}

        ${i?r`
              ${this.showMeetings?r`<week-meetings></week-meetings>`:c}
              ${_l("Tasks")}
              ${t&&this.leftoverCount>0?r`<div class="flex justify-end pb-1">
                    <button
                      type="button"
                      class="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink"
                      @click=${this.doCarry}
                    ><span style="width:14px;height:14px;display:inline-flex;">${W(ep)}</span
                    >Pull ${this.leftoverCount} open task${this.leftoverCount===1?"":"s"} from last week</button>
                  </div>`:c}
              <weekly-commits .mode=${"open"}></weekly-commits>
              ${this.adding?r`
                    <div class="wk-row flex items-center gap-2 py-1 pl-4 pr-2 -mx-2">
                      <span class="wk-gutter shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                      <input
                        class="new-commit-title flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New task..."
                        @keydown=${this.onAddKey}
                        @paste=${Ls}
                        @blur=${()=>{this.addPickerOpen||this.commitAdd(!0)}}
                      />
                      <button
                        class="add-marker w-6 h-6 grid place-items-center rounded hover:bg-hover ${this.newLinkedGoal?"":"text-muted opacity-60"}"
                        aria-label="Assign to a goal"
                        title=${this.newLinkedGoal?this.newLinkedGoal.title:"Assign to a goal or KR"}
                        @mousedown=${s=>s.preventDefault()}
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
                      class="wk-row flex items-center gap-2 py-1 pl-4 pr-2 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>this.startAdd()}
                    >
                      <span class="wk-gutter shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New task...</span>
                    </div>
                  `}
              ${e>0?r`
                    ${Ro({open:!this.hideDone,label:`${e} done`,onToggle:s=>this.toggleHideDone(s)})}
                    ${this.hideDone?c:r`<weekly-commits .mode=${"done"}></weekly-commits>`}
                  `:c}
            `:c}
      </section>
    `}};Tt([b({type:Boolean})],yt.prototype,"tabbed",2);Tt([b({type:Boolean})],yt.prototype,"showMeetings",2);Tt([d()],yt.prototype,"collapsed",2);Tt([d()],yt.prototype,"hideDone",2);Tt([d()],yt.prototype,"adding",2);Tt([d()],yt.prototype,"editingTitle",2);Tt([d()],yt.prototype,"titleValue",2);Tt([d()],yt.prototype,"leftoverCount",2);Tt([d()],yt.prototype,"newGoalId",2);Tt([d()],yt.prototype,"newKeyResultId",2);Tt([d()],yt.prototype,"addPickerOpen",2);Tt([d()],yt.prototype,"addPickerAnchor",2);Tt([V("input.new-commit-title")],yt.prototype,"newTitleEl",2);yt=Tt([w("week-section")],yt);let Ol=!1,Ar=!1;function Mr(t){Ol=t.composedPath().some(e=>e instanceof Element&&e.classList.contains("mana-chat-card"))}function ip(){return!Ar&&typeof document<"u"&&(Ar=!0,document.addEventListener("pointerdown",Mr,!0),document.addEventListener("focusin",Mr,!0)),Ol}const ii="mana.note:";class sp{constructor(){this.mem=new Map,this.store=null,this.opened=!1,this.ready=(typeof indexedDB>"u"?Promise.resolve(null):wc(ii)).then(e=>{this.store=e}).catch(()=>{}).finally(()=>{this.opened=!0})}get isReady(){return this.opened}get(e){const i=this.mem.get(e);if(i)return i;const s=this.store?.getItem(ii+e);if(s)try{const n=JSON.parse(s);return typeof n.content!="string"?void 0:(this.mem.set(e,n),n)}catch{return}}set(e,i,s,n=!1){const o={content:i,...s?{version:s}:{},...n?{unsaved:n}:{}},a=this.get(e);this.mem.set(e,o),!(a&&a.content===i&&a.version===s&&!!a.unsaved===n)&&this.store?.setItem(ii+e,JSON.stringify(o))}delete(e){this.mem.delete(e),this.store?.removeItem(ii+e)}move(e,i){const s=this.get(e);this.delete(e),s&&this.set(i,s.content,s.version,s.unsaved)}keepOnly(e){const i=this.store,s=new Set(this.mem.keys());if(i)for(let n=0;n<i.length;n++){const o=i.key(n);o?.startsWith(ii)&&s.add(o.slice(ii.length))}for(const n of s)!e.has(n)&&!this.get(n)?.unsaved&&this.delete(n)}}const Q=new sp;var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,O=(t,e,i,s)=>{for(var n=s>1?void 0:s?op(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&np(e,i,n),n};const ks=[.85,.92,1,1.08,1.16,1.25,1.35,1.5],no=3,Ll="mana.notes.textStep";function rp(){try{const t=localStorage.getItem(Ll),e=Number(t);return t!==null&&Number.isInteger(e)&&e>=0&&e<ks.length?e:no}catch{return no}}let Be=null;const vn=(...t)=>Be.getMarkdown(...t),Si=(...t)=>Be.setMarkdown(...t),ap=(...t)=>Be.alignSelectedImage(...t),lp=(...t)=>Be.startTitledNote(...t),yn=(...t)=>Be.isBlankNote(...t);let xn=null;function Ir(t,e){return t.replace(/^([ \t]*#{1,6}\s+)?([^\r\n]*)/,(i,s,n)=>`${s||""}${n||"Untitled"} ${e}`)}const cp=640,_r="mana.notes.sidebarHidden",Or="mana.notes.sidebarWidth",wn=864e5,Dt=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl+",Lr=`New note (${Dt}N)`,dp=[{name:"Default",v:null},{name:"Gray",v:"#6b7280"},{name:"Red",v:"#e5484d"},{name:"Orange",v:"#e8590c"},{name:"Amber",v:"#bd8400"},{name:"Green",v:"#2f9e44"},{name:"Blue",v:"#1971c2"},{name:"Violet",v:"#7048e8"},{name:"Pink",v:"#c2255c"}],hp=[{name:"Yellow",v:"#fff3a3"},{name:"Green",v:"#c3f0ca"},{name:"Blue",v:"#c5e2ff"},{name:"Pink",v:"#ffd6e7"},{name:"Orange",v:"#ffe0b8"},{name:"Purple",v:"#ecd5ff"}],et=(t,e="w-4 h-4")=>r`<sc-icon name="lucide-${t}" class=${e}></sc-icon>`,kn=(t,e,i,s="text-muted hover:text-ink")=>r`
  <button type="button" title=${e} aria-label=${e}
    class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg hover:bg-hover ${s}"
    @click=${n=>{n.stopPropagation(),i()}}>${et(t)}</button>`,tt=t=>t instanceof Error?t.message:String(t),up=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let M=class extends T{constructor(){super(...arguments),this.files=[],this.trashCount=0,this.activeName=null,this.isDraft=!1,this.error=null,this.initialized=!1,this.wide=!0,this.view="list",this.sidebarHidden=!1,this.sidebarWidth=256,this.sidebarDrag=null,this.onSidebarDown=t=>{if(t.button!==0)return;t.preventDefault();const e=t.currentTarget;e.focus(),e.setPointerCapture(t.pointerId),this.sidebarDrag={pointerId:t.pointerId,x:t.clientX,width:Math.min(this.sidebarWidth,this.sidebarMaxWidth),hidden:this.sidebarHidden,moved:!1}},this.onSidebarMove=t=>{const e=this.sidebarDrag;if(!e||e.pointerId!==t.pointerId||!e.moved&&Math.abs(t.clientX-e.x)<4)return;e.moved=!0;const i=(e.hidden?0:e.width)+t.clientX-e.x;this.sidebarHidden=i<120,this.sidebarHidden||(this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,i)))},this.onSidebarUp=t=>{const e=this.sidebarDrag;!e||e.pointerId!==t.pointerId||(this.sidebarDrag=null,!e.moved&&this.sidebarHidden&&(this.sidebarHidden=!1),this.saveSidebar())},this.onSidebarCancel=()=>{this.sidebarDrag&&(this.sidebarWidth=this.sidebarDrag.width,this.sidebarHidden=this.sidebarDrag.hidden,this.sidebarDrag=null)},this.resetSidebar=()=>{this.sidebarHidden=!1,this.sidebarWidth=256,this.saveSidebar()},this.onSidebarKey=t=>{if(t.key==="Escape"&&this.sidebarDrag){this.onSidebarCancel();return}if(["ArrowLeft","ArrowRight","Home","End","Enter"," "].includes(t.key)){if(t.preventDefault(),t.key==="Enter"||t.key===" "){this.toggleSidebar();return}t.key==="Home"?this.sidebarHidden=!0:t.key==="End"||t.key==="ArrowRight"&&this.sidebarHidden?this.sidebarHidden=!1:t.key==="ArrowLeft"&&this.sidebarWidth<=192?this.sidebarHidden=!0:this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,this.sidebarWidth+(t.key==="ArrowLeft"?-16:16))),this.saveSidebar()}},this.searchQ="",this.hits=null,this.trashOpen=!1,this.trashItems=[],this.toast=null,this.tbMenu=null,this.tbTrigger=null,this.toolbarPortal=null,this.blogEnabled=!1,this.blogConnected=!1,this.blogBusy=!1,this.tagSaving=!1,this.syncingBlog=!1,this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all",this.allBlogTags=[],this.blogDeleteName=null,this.publishConfirm=null,this.rowMenuName=null,this.rowMenuPoint=null,this.duplicating=!1,this.pinnedCollapsed=!1,this.closeToolbar=()=>{this.tbMenu=null},this.onToolbarScroll=t=>{t.target instanceof Node&&this.toolbarPortal?.contains(t.target)||this.closeToolbar()},this.onToolbarMenuKey=t=>{if(t.key==="Escape"){t.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}if(t.target instanceof HTMLInputElement||!["ArrowDown","ArrowUp","Home","End"].includes(t.key))return;const e=[...this.toolbarPortal.querySelectorAll("button:not(:disabled)")];if(!e.length)return;const i=e.indexOf(document.activeElement),s=t.key==="Home"?0:t.key==="End"?e.length-1:(i+(t.key==="ArrowUp"?-1:1)+e.length)%e.length;t.preventDefault(),e[s]?.focus()},this.editorTick=0,this.liveTitle="",this.dragName=null,this.dropAt=null,this.mediaOpen=!1,this.mediaPurpose="body",this.mediaNote=null,this.mediaReplacement=null,this.uploading=0,this.uploadPct=0,this.suppressClick=!1,this.hostReady=!1,this.cur=null,this.dirty=!1,this.pending=0,this.queue=Promise.resolve(),this.mutGen=0,this.selfNames=new Set,this.renamed=new Map,this.pollFailed=!1,this.selectionText="",this.onDocDown=t=>{if(!this.tbMenu)return;!t.composedPath().some(i=>i instanceof HTMLElement&&i.hasAttribute("data-tb-root"))&&!t.composedPath().includes(this.toolbarPortal)&&this.closeToolbar()},this.onKey=t=>{if(t.defaultPrevented||t.isComposing||!this.getClientRects().length||this.mediaOpen)return;const e=t.target instanceof HTMLElement?t.target:null;if(e&&!this.contains(e)&&!this.toolbarPortal?.contains(e)&&(e.isContentEditable||e.closest("input, textarea, select, [role=dialog], [role=menu]")))return;if(t.key==="Escape"&&this.tbMenu){t.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}const i=(t.metaKey||t.ctrlKey)&&!t.altKey,s=i&&!t.shiftKey&&t.code==="KeyN"&&!ip()||t.altKey&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&t.code==="KeyN",n=i&&t.shiftKey&&t.code==="KeyF",o=i&&!t.shiftKey&&t.code==="Backslash",a=i&&!t.shiftKey&&t.code==="KeyS",l=i?t.code==="Equal"||t.code==="NumpadAdd"?1:t.code==="Minus"||t.code==="NumpadSubtract"?-1:t.code==="Digit0"||t.code==="Numpad0"?2:0:0;if(l){t.preventDefault(),t.stopPropagation(),this.setTextStep(l===2?no:this.textStep+l);return}!s&&!n&&!o&&!a||(t.preventDefault(),t.stopPropagation(),!t.repeat&&(s?(this.closeToolbar(),this.newNote()):n?this.focusNotesSearch():o?(this.closeToolbar(),this.wide?this.toggleSidebar():this.view=this.view==="note"?"list":this.cur?"note":"list",(this.wide?!this.sidebarHidden:this.view==="list")?this.focusNotesSearch():this.updateComplete.then(()=>this.editor?.commands.focus())):a&&this.flush()))},this.textStep=rp(),this.onVisibility=()=>{if(document.visibilityState!=="hidden")return;this.flush();const t=this.cur;t?.touched&&(t.touched=!1,this.queueRetitle(t))},this.onSettle=t=>{this.flush(),t.detail?.wait?.(this.enqueue(async()=>{}))},this.onNoteChanged=t=>{const e=t.detail,i=e?.change;i?.from&&this.cur?.name===i.from&&!this.dirty?(Q.delete(i.from),this.files=this.files.filter(s=>s.name!==i.from),this.mutGen++,i.to?(this.cur.name=i.to,this.cur.mtime=0,this.cur.touched=!1,this.selfNames.add(i.to),this.syncActive(),this.loadContent(this.cur)):this.closeCurrent()):this.cur?.name&&this.cur.name===e?.file&&!this.dirty&&this.loadContent(this.cur),this.loadFiles()},this.onOpenNote=t=>{const e=t.detail;!e?.file||!/^(?!\.)[^/\\\0]+\.md$/.test(e.file)||(e.ack?.(),this.clearSearch(),this.matchesNoteFilter(e.file)||(this.noteFilter="all"),this.open(e.file))}}get sidebarMaxWidth(){return Math.max(192,Math.min(480,this.clientWidth-328))}saveSidebar(){try{localStorage.setItem(_r,this.sidebarHidden?"1":"0"),localStorage.setItem(Or,String(this.sidebarWidth))}catch{}}async loadBlogStatus(){try{const t=await this.api("GET","/api/notes/blog/status");this.blogEnabled=t.enabled,this.blogConnected=t.connected,t.connected&&Date.now()-t.lastSync>6e4&&this.syncBlogLibrary(!0)}catch{}}async syncBlogLibrary(t=!1){if(!this.syncingBlog){this.syncingBlog=!0;try{this.flush(),await this.queue;const e=await this.api("POST","/api/notes/blog/sync",{activeName:this.cur?.name});await this.loadFiles(),(!t||e.conflicts)&&this.showToast(e.conflicts?`${e.conflicts} article(s) have changes on both sides`:`Blog synced: ${e.imported} imported, ${e.updated} updated`)}catch(e){this.showToast(tt(e))}finally{this.syncingBlog=!1}}}async savedNote(){const t=this.cur;if(this.flush(),await this.queue,!t?.name||t===this.cur&&this.dirty)throw new Error("Save a note with a title and content first.");return t}async blogAction(t){if(!(this.blogBusy||this.tagSaving||this.uploading)){this.blogBusy=!0;try{const e=await this.savedNote(),i=await this.api("POST",`/api/notes/blog/${t==="save-draft"?"publish":t}`,{name:e.name,published:t!=="save-draft"});e===this.cur&&(this.activeBlog=i.blog,this.blogLocalDirty=this.dirty||i.blog.dirty),t==="pull"&&e===this.cur&&(Q.delete(e.name),await this.loadContent(e)),await this.loadFiles(),this.showToast(t==="publish"?"Published to blog":t==="save-draft"?"Draft saved to blog":t==="unpublish"?"Unpublished from blog":"Latest blog version pulled. Any local edits were kept as a separate note.")}catch(e){this.showToast(tt(e))}finally{this.blogBusy=!1}}}async saveTags(t){if(!this.tagSaving){this.tagSaving=!0;try{await this.enqueue(async()=>{});const e=await this.savedNote(),i=await this.enqueue(()=>this.api("PATCH","/api/notes/blog/tags",{name:e.name,categories:t}));e===this.cur&&(this.activeBlog=i.blog),this.loadFiles()}catch(e){this.showToast(tt(e))}finally{this.tagSaving=!1}}}async openTags(t=!1){try{this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags}catch{this.allBlogTags=[]}this.isConnected&&(this.tbMenu=t?"manage-tags":"tags")}async renameTag(t,e){if(e=e.trim(),!(!e||e===t)&&!this.blogBusy){this.blogBusy=!0;try{const i=await this.api("POST","/api/notes/blog/rename-tag",{from:t,to:e});await this.loadFiles(),this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags,this.showToast(i.failed?`${i.updated} articles updated; ${i.failed} could not be updated`:"Tag renamed across the blog")}catch(i){this.showToast(tt(i))}finally{this.blogBusy=!1}}}async confirmBlogDelete(){const t=this.blogDeleteName;if(!(!t||this.blogBusy)){this.blogBusy=!0;try{await this.api("POST","/api/notes/blog/delete",{name:t,confirm:!0}),this.blogDeleteName=null,this.trashNote(t),this.cur?.name===t&&(this.activeBlog=null),this.showToast("Article deleted from the blog")}catch(e){this.showToast(tt(e))}finally{this.blogBusy=!1}}}matchesNoteFilter(t){const e=!!this.files.find(i=>i.name===t)?.blog?.url;return this.noteFilter==="all"||(this.noteFilter==="blog"?e:!e)}openRowMenu(t,e){t.preventDefault(),t.stopPropagation(),this.closeToolbar();const s=t.currentTarget.closest("[data-drop-row]")?.querySelector("button");if(!s)return;const n=s.getBoundingClientRect();this.rowMenuName=e,this.rowMenuPoint="clientX"in t&&(t.clientX||t.clientY)?{x:t.clientX,y:t.clientY}:{x:n.left+16,y:n.top+24},this.tbTrigger=s,this.tbMenu="row",this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}openDraftMenu(t){const e=this.querySelector('[data-notes-header] [aria-label="Note actions"]');e&&(t.preventDefault(),this.rowMenuPoint={x:t.clientX,y:t.clientY},this.tbTrigger=e,this.tbMenu="more")}async noteMarkdown(t){return await this.queue,t=this.renamed.get(t)??t,this.cur?.name===t&&this.cur.loaded&&this.editor?vn(this.editor):(await this.api("GET",`/api/notes/files/${encodeURIComponent(t)}`)).content}async duplicateNote(t){if(!this.duplicating){this.duplicating=!0;try{const e=await this.noteMarkdown(t),i=Ir(e,"(copy)"),s=await this.enqueue(()=>this.api("POST","/api/notes/files",{content:i}));this.selfNames.add(s.name),Q.set(s.name,i,s.version),this.mutGen++,await this.loadFiles(),this.open(s.name),this.showToast("Note duplicated")}catch(e){this.error=tt(e)}finally{this.duplicating=!1}}}async copyNote(t){try{await navigator.clipboard.writeText(await this.noteMarkdown(t)),this.showToast("Note copied")}catch{this.showToast("Could not copy note")}}paintToolbarPortal(){if(!this.tbMenu||!this.tbTrigger?.isConnected||!this.editor){this.toolbarPortal&&(xt(c,this.toolbarPortal),this.toolbarPortal.remove(),this.toolbarPortal=null);return}this.toolbarPortal||(this.toolbarPortal=document.createElement("div"),this.toolbarPortal.className="fixed z-[100] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",this.toolbarPortal.id="notes-toolbar-menu",this.toolbarPortal.setAttribute("role","dialog"),document.body.appendChild(this.toolbarPortal)),this.toolbarPortal.setAttribute("role",this.tbMenu==="row"?"menu":"dialog"),this.toolbarPortal.setAttribute("aria-label",{format:"Text formatting",list:"Lists",more:"Note actions",shortcuts:"Keyboard shortcuts",row:"Note actions",library:"Notes library",tags:"Article tags","manage-tags":"Manage blog tags","featured-image":"Featured image"}[this.tbMenu]),this.toolbarPortal.style.fontFamily=getComputedStyle(this).fontFamily,this.toolbarPortal.style.width=`${Math.min(272,window.innerWidth-16)}px`,this.toolbarPortal.style.maxHeight=`${window.innerHeight-16}px`,xt(this.renderToolbarMenu(),this.toolbarPortal);const t=this.tbTrigger.getBoundingClientRect(),e=this.toolbarPortal.getBoundingClientRect(),i=this.rowMenuPoint&&(this.tbMenu==="row"||this.tbMenu==="more"),s=i?this.rowMenuPoint.x:t.left;this.toolbarPortal.style.left=`${Math.max(8,Math.min(s,window.innerWidth-e.width-8))}px`;const n=i?this.rowMenuPoint.y:t.bottom+6+e.height>window.innerHeight-8?t.top-e.height-6:t.bottom+6;this.toolbarPortal.style.top=`${Math.max(8,Math.min(n,window.innerHeight-e.height-8))}px`}focusNotesSearch(){this.closeToolbar(),this.wide?(this.sidebarHidden=!1,this.saveSidebar()):this.view="list",this.updateComplete.then(()=>{const t=this.querySelector("[data-notes-search]");t?.focus(),t?.select()})}setTextStep(t){this.textStep=Math.max(0,Math.min(ks.length-1,t)),this.style.setProperty("--notes-scale",String(ks[this.textStep]));try{localStorage.setItem(Ll,String(this.textStep))}catch{}}connectedCallback(){super.connectedCallback(),this.style.setProperty("--notes-scale",String(ks[this.textStep]));try{this.sidebarHidden=localStorage.getItem(_r)==="1";const t=Number(localStorage.getItem(Or));Number.isFinite(t)&&t>=192&&(this.sidebarWidth=Math.min(480,t))}catch{}this.resizeObs=new ResizeObserver(()=>{this.onSidebarCancel();const t=this.clientWidth>=cp;t!==this.wide?this.wide=t:this.requestUpdate()}),this.resizeObs.observe(this),this.loadFiles(),this.loadBlogStatus(),this.pollTimer=setInterval(()=>{document.hidden||this.loadFiles()},4e3),window.addEventListener("pointerdown",this.onDocDown,!0),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("scroll",this.onToolbarScroll,!0),window.addEventListener("resize",this.closeToolbar),window.addEventListener("mana:notes-settle",this.onSettle),window.addEventListener("mana:note-changed",this.onNoteChanged),window.addEventListener("mana:open-note",this.onOpenNote)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mana:notes-settle",this.onSettle),window.removeEventListener("mana:note-changed",this.onNoteChanged),window.removeEventListener("mana:open-note",this.onOpenNote),window.removeEventListener("pointerdown",this.onDocDown,!0),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("scroll",this.onToolbarScroll,!0),window.removeEventListener("resize",this.closeToolbar),this.tbMenu=null,this.paintToolbarPortal(),this.resizeObs?.disconnect(),this.onSidebarCancel(),this.pollTimer&&clearInterval(this.pollTimer),this.searchTimer&&clearTimeout(this.searchTimer),this.toastTimer&&clearTimeout(this.toastTimer),this.closeMedia(),this.leave(),this.editor?.destroy(),this.editor=void 0}get holdReload(){return this.dirty||this.pending>0||(this.editor?.isFocused??!1)}async api(t,e,i){const s=await fetch(e,{method:t,credentials:"include",headers:i===void 0?void 0:{"content-type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)});if(!s.ok){const n=await s.json().catch(()=>({}));throw new Error(n.error||`Request failed (${s.status})`)}return await s.json()}enqueue(t){const e=this.queue.then(t);return this.queue=e.catch(()=>{}),e}async loadFiles(){if(this.dragName)return;const t=this.mutGen;try{const e=await this.api("GET","/api/notes/files");if(t!==this.mutGen)return;this.pollFailed&&(this.pollFailed=!1,this.error=null);const i=new Set(this.files.map(a=>a.name));if(this.files=e.files,Q.keepOnly(new Set(e.files.map(a=>a.name))),this.trashCount=e.trashCount??0,this.cur?.name&&(this.activeBlog=this.files.find(a=>a.name===this.cur.name)?.blog??null,!this.dirty&&!this.pending&&(this.blogLocalDirty=!!this.activeBlog?.dirty)),!this.initialized){this.initialized=!0,this.wide&&!this.cur&&e.files[0]&&this.open(e.files[0].name);return}const s=e.files.filter(a=>!i.has(a.name)&&!this.selfNames.has(a.name));if(s.length&&!this.holdReload&&!this.syncingBlog){const a=s.reduce((l,h)=>h.modifiedAt>l.modifiedAt?h:l);this.open(a.name);return}const n=this.cur;if(!n?.name||this.holdReload)return;const o=e.files.find(a=>a.name===n.name);o?o.modifiedAt>n.mtime&&this.loadContent(n):this.closeCurrent()}catch(e){this.error=tt(e),this.pollFailed=!0}}async loadContent(t){if(t.name)try{const e=await this.api("GET",`/api/notes/files/${encodeURIComponent(t.name)}`),i=Q.get(t.name);if(i?.unsaved&&e.version&&i.content!==e.content){if(t!==this.cur||!this.editor||this.dirty)return;this.error=null,t.mtime=e.modifiedAt??0,i.version===e.version?(t.version=e.version,t.loaded&&t.shown===i.content&&this.onEdit()):(await this.enqueue(()=>this.onSaveRefused(t,i.content,{content:e.content,version:e.version,modifiedAt:e.modifiedAt??0})),t===this.cur&&this.editor&&!this.dirty&&(t.shown!==e.content&&(Si(this.editor,e.content),t.shown=e.content),t.loaded=!0,this.editor.setEditable(!0,!1)));return}if(Q.set(t.name,e.content,e.version),t!==this.cur||!this.editor||this.dirty)return;t.mtime=e.modifiedAt??0,t.version=e.version,this.error=null,t.loaded&&t.shown===e.content||(Si(this.editor,e.content),t.shown=e.content),t.loaded=!0,this.editor.setEditable(!0,!1)}catch(e){this.error=tt(e)}}open(t){if(this.trashOpen=!1,this.activeBlog=this.files.find(i=>i.name===t)?.blog??null,this.blogLocalDirty=!!this.activeBlog?.dirty,this.cur?.name===t){this.view="note";return}this.leave();const e={name:t,mtime:0,touched:!1,loaded:!1};this.cur=e,this.syncActive(),this.view="note",this.dirty=!1,this.showCached(e),this.loadContent(e)}showCached(t){const e=this.editor;if(!e||!t.name)return;const i=Q.get(t.name);!i&&!Q.isReady&&Q.ready.then(()=>{t===this.cur&&!t.loaded&&Q.get(t.name)&&this.showCached(t)}),Si(e,i?.content??""),t.shown=i?.content,t.version=i?.version,t.loaded=i!=null&&!!i.version,e.setEditable(t.loaded,!1)}newNote(){this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all";const t=this.editor;t&&(this.trashOpen=!1,this.clearSearch(),this.cur&&!this.cur.name&&yn(t)||(this.leave(),this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive(),lp(t),t.setEditable(!0,!1),this.dirty=!1),this.view="note",this.updateComplete.then(()=>this.editor?.commands.focus("start")))}closeCurrent(){this.saveTimer&&clearTimeout(this.saveTimer),this.dirty=!1,this.cur=null,this.syncActive(),this.editor&&Si(this.editor,""),this.wide&&this.files[0]?this.open(this.files[0].name):this.view="list"}back(){this.leave(),this.view="list"}syncActive(){this.activeName=this.cur?.name??null,this.isDraft=!!this.cur&&!this.cur.name,this.updateViewContext()}onEdit(){this.activeBlog?.url&&(this.blogLocalDirty=!0),this.cur||(this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive()),this.cur.touched=!0,this.dirty=!0,this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.flush(),900)}flush(){this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0);const t=this.cur,e=this.editor;if(!t||!e||!this.dirty)return;this.dirty=!1;const i=vn(e).replace(/\n*$/,`
`),s=yn(e);t.name&&Q.set(t.name,i,t.version,!0);const n=t.epoch??0;this.pending++,this.enqueue(async()=>{try{if((t.epoch??0)!==n)return;if(t.name){const o=await this.putNote(t.name,i,t.version);if(!o.ok){await this.onSaveRefused(t,i,o);return}t.mtime=o.modifiedAt,t.version=o.version,t.shown=i;const a=Q.get(t.name);a?.unsaved&&a.content!==i?Q.set(t.name,a.content,o.version,!0):Q.set(t.name,i,o.version)}else{if(s)return;const o=await this.api("POST","/api/notes/files",{content:i});t.name=o.name,t.mtime=o.modifiedAt,t.version=o.version,this.selfNames.add(o.name),Q.set(o.name,i,o.version),t===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}this.error=null}catch(o){t===this.cur&&(this.dirty=!0),this.error=tt(o)}finally{this.pending--}})}async putNote(t,e,i){const s=await fetch(`/api/notes/files/${encodeURIComponent(t)}`,{method:"PUT",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(i?{content:e,baseVersion:i}:{content:e})}),n=await s.json().catch(()=>({}));if(s.status===409&&typeof n.content=="string"&&n.version)return{ok:!1,content:n.content,version:n.version,modifiedAt:n.modifiedAt??0};if(!s.ok)throw new Error(n.error||`Request failed (${s.status})`);return{ok:!0,version:n.version,modifiedAt:n.modifiedAt??0}}async onSaveRefused(t,e,i){const s=t.name,n=this.editor,o=!!n&&t===this.cur&&t.loaded;o&&n.setEditable(!1,!1);try{const a=o?vn(n).replace(/\n*$/,`
`):e;if(a!==i.content){const l=Ir(a,"(conflict copy)"),h=await this.api("POST","/api/notes/files",{content:l});this.selfNames.add(h.name),Q.set(h.name,l,h.version),this.mutGen++,this.loadFiles(),this.showToast("This note changed elsewhere. Your version is saved as a conflict copy.")}t.epoch=(t.epoch??0)+1,t.version=i.version,t.mtime=i.modifiedAt,Q.set(s,i.content,i.version),o&&t===this.cur&&(this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0),this.dirty=!1,Si(n,i.content),t.shown=i.content)}finally{o&&t===this.cur&&n.setEditable(!0,!1)}}leave(){const t=this.cur,e=this.editor;if(t&&e){this.flush();const i=t.loaded&&yn(e),s=t.touched;t.touched=!1,i?this.enqueue(async()=>{if(t.name){try{await this.api("DELETE",`/api/notes/files/${encodeURIComponent(t.name)}?ifEmpty=1`),Q.delete(t.name)}catch(n){this.error=tt(n)}this.mutGen++,this.loadFiles()}}):s&&this.queueRetitle(t)}this.cur=null,this.syncActive()}queueRetitle(t){this.enqueue(async()=>{if(!t.name)return;const e=t.name;try{const i=await this.api("POST","/api/notes/retitle",{name:e});if(i.name===e)return;t.name=i.name,this.selfNames.add(i.name),this.renamed.set(e,i.name),Q.move(e,i.name),t===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}catch(i){this.error=tt(i)}})}get pinnedNames(){return this.files.filter(t=>t.pinned).map(t=>t.name)}togglePin(t){const e=this.files.find(s=>s.name===t);if(!e)return;e.pinned||(this.pinnedCollapsed=!1);const i=this.pinnedNames.filter(s=>s!==t);this.setPins(e.pinned?i:[t,...i])}setPins(t){const e=new Map(this.files.map(n=>[n.name,n])),i=t.map(n=>e.get(n)).filter(n=>!!n).map(n=>({...n,pinned:!0})),s=this.files.filter(n=>!t.includes(n.name)).map(n=>({...n,pinned:!1})).sort((n,o)=>o.modifiedAt-n.modifiedAt);this.files=[...i,...s],this.mutGen++,this.enqueue(async()=>{try{await this.api("PUT","/api/notes/pins",{order:t.map(n=>this.renamed.get(n)??n)})}catch(n){this.error=tt(n)}this.mutGen++,this.loadFiles()})}onRowPointerDown(t,e){if(t.button!==0)return;const i=t.clientX,s=t.clientY,n=t.pointerType==="touch";let o=!1;const a=()=>{o=!0,this.dragName=e,this.pinnedCollapsed=!1,this.suppressClick=!0,n&&navigator.vibrate?.(10)},l=n?setTimeout(a,350):void 0,h=v=>{o&&v.preventDefault()},u=v=>{if(!o){if(Math.hypot(v.clientX-i,v.clientY-s)<6)return;if(n){g();return}a()}this.trackDrop(v.clientY)},p=()=>{const v=o;g(),v&&this.drop()},m=()=>{g(),this.dragName=null,this.dropAt=null,this.suppressClick=!1},g=()=>{l&&clearTimeout(l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),window.removeEventListener("touchmove",h)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",m),window.addEventListener("touchmove",h,{passive:!1})}trackDrop(t){let e=null;for(const i of this.querySelectorAll("[data-drop-row]")){const s=i.getBoundingClientRect();if(!(t<s.top||t>s.bottom)){e={name:i.dataset.dropRow||null,pos:t<s.top+s.height/2?"before":"after"};break}}(e?.name!==this.dropAt?.name||e?.pos!==this.dropAt?.pos)&&(this.dropAt=e)}drop(){const t=this.dragName,e=this.dropAt;if(this.dragName=null,this.dropAt=null,setTimeout(()=>{this.suppressClick=!1},0),!t)return;const i=this.pinnedNames;if(e&&(e.name===null||i.includes(e.name))){if(e.name===t)return;const s=i.filter(o=>o!==t);let n=e.name===null?s.length:s.indexOf(e.name)+(e.pos==="after"?1:0);n<0&&(n=s.length),s.splice(n,0,t),this.setPins(s)}else i.includes(t)&&this.setPins(i.filter(s=>s!==t))}trashNote(t){if(this.cur?.name===t){this.trashCurrent();return}this.files=this.files.filter(e=>e.name!==t),this.mutGen++,this.enqueue(()=>this.doTrash(this.renamed.get(t)??t))}trashCurrent(){const t=this.cur;t&&(this.flush(),t.name&&(this.files=this.files.filter(e=>e.name!==t.name)),this.mutGen++,this.closeCurrent(),this.enqueue(async()=>{t.name&&await this.doTrash(t.name)}))}async doTrash(t){try{const e=await this.api("DELETE",`/api/notes/files/${encodeURIComponent(t)}`);Q.delete(t);const i=e.trashed;i&&this.showToast("Moved to Recently deleted",()=>void this.restore(i))}catch(e){this.error=tt(e)}this.mutGen++,this.loadFiles()}async restore(t){this.toast=null;try{const e=await this.enqueue(()=>this.api("POST","/api/notes/restore",{name:t}));this.selfNames.add(e.name),this.mutGen++,await this.loadFiles(),this.open(e.name)}catch(e){this.error=tt(e)}}async openTrash(){this.clearSearch(),this.trashOpen=!0;try{this.trashItems=(await this.api("GET","/api/notes/trash")).items}catch(t){this.error=tt(t)}}showToast(t,e){this.toast={text:t,undo:e},this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=null},6e3)}onSearchInput(t){if(this.searchQ=t,this.trashOpen=!1,t.trim()&&this.wide&&this.sidebarHidden&&(this.sidebarHidden=!1,this.saveSidebar()),this.searchTimer&&clearTimeout(this.searchTimer),!t.trim()){this.hits=null;return}this.searchTimer=setTimeout(()=>{this.runSearch(t)},180)}async runSearch(t){try{const e=await this.api("GET",`/api/notes/search?q=${encodeURIComponent(t)}`);t===this.searchQ&&(this.hits=e.results)}catch(e){this.error=tt(e)}}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.searchQ="",this.hits=null}updateViewContext(){const t=this.cur?.name,e=t?`Note "${t}" is open in the notes pane (vault path: Notes/${t}). It's a Markdown file. Edit it with Read/Edit/Write and the cockpit re-renders live.`:this.cur?"A new note is open in the notes pane. It gets a file under Notes/ once the user has typed something.":"The notes list is open in the notes pane; no note is selected.",i=this.selectionText?` The user has selected this text: "${this.selectionText.slice(0,600)}". When they say "this" or ask to rewrite/expand/fix something, they mean the selected passage. Edit that part of the file.`:"";f.getState().setViewContext({tool:"notes",summary:e+i,note:t??null})}updated(){if(this.paintToolbarPortal(),this.hostReady||this.editor)return;const t=this.querySelector("#note-host");t&&(this.hostReady=!0,this.mountEditor(t))}async mountEditor(t){if(Be??=await Lt(()=>import("./notes-editor-D3O857wd.js"),[]),!this.isConnected||this.editor)return;this.editor=Be.createNotesEditor({host:t,uploadImage:i=>this.uploadImage(i),onReplaceImage:i=>{this.openMedia("body",i)},onUpdate:()=>this.onEdit(),onTransaction:()=>{this.editorTick++;let i="";this.editor?.state.doc.forEach(s=>{i||(i=s.textContent.trim())}),this.liveTitle=i},onSelection:i=>{i!==this.selectionText&&(this.selectionText=i,this.updateViewContext())}});const e=this.cur;e?.name&&(this.showCached(e),this.loadContent(e))}async uploadImage(t){xn??=await Lt(()=>import("./notes-media-DDKHIfat.js"),__vite__mapDeps([2,3,4,5])),this.uploading++,this.uploadPct=0;try{const e=await xn.uploadMedia(t,i=>{this.uploadPct=i});return{url:e.url,alt:e.name}}catch(e){throw this.error=tt(e),e}finally{this.uploading--}}async openMedia(t="body",e=null){this.mediaReplacement?.release(),this.mediaReplacement=e,this.editor?.commands.blur(),this.mediaPurpose=t,this.mediaNote=this.cur,this.tbMenu=null;try{xn??=await Lt(()=>import("./notes-media-DDKHIfat.js"),__vite__mapDeps([2,3,4,5]))}catch(i){this.closeMedia(),this.error=tt(i);return}this.mediaOpen=!0}closeMedia(){this.mediaOpen=!1,this.mediaReplacement?.release(),this.mediaReplacement=null}onMediaInsert(t){const e=this.mediaReplacement;if(this.mediaReplacement=null,this.mediaOpen=!1,this.mediaNote!==this.cur||!this.cur?.loaded){e?.release();return}if(this.mediaPurpose==="featured"){this.saveFeaturedImage(t.url);return}if(!this.editor){e?.release();return}const i=t.credit?{type:"paragraph",content:[{type:"text",text:"Photo: ",marks:[{type:"italic"}]},{type:"text",text:t.credit.name,marks:[{type:"italic"},{type:"link",attrs:{href:t.credit.url}}]},{type:"text",text:" on ",marks:[{type:"italic"}]},{type:"text",text:"Pexels",marks:[{type:"italic"},{type:"link",attrs:{href:t.credit.page}}]}]}:void 0;if(e){e.replace({src:t.url,alt:t.name},i)||(this.error="The original image is no longer available. Select an image and try again.");return}const s=this.editor.chain().focus().setImage({src:t.url,alt:t.name});i&&s.insertContent(i),s.run()}async saveFeaturedImage(t){if(!(this.blogBusy||this.tagSaving)){this.tagSaving=!0;try{const e=await this.savedNote(),i=await this.api("PATCH","/api/notes/blog/featured-image",{name:e.name,source:t});e===this.cur&&(this.activeBlog=i.blog),await this.loadFiles(),this.showToast(t?"Featured image selected. Publish or update the blog post to apply it.":"Featured image removed. The first image in the note will be used.")}catch(e){this.showToast(tt(e))}finally{this.tagSaving=!1}}}toggleSidebar(){this.sidebarHidden=!this.sidebarHidden,this.saveSidebar()}bucket(t){const e=t*1e3,i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime();if(e>=s)return"Today";if(e>=s-wn)return"Yesterday";if(e>=s-7*wn)return"Previous 7 days";if(e>=s-30*wn)return"Previous 30 days";const n=new Date(e);return n.getFullYear()===i.getFullYear()?n.toLocaleDateString("en-GB",{month:"long"}):String(n.getFullYear())}dateLabel(t){const e=new Date(t*1e3),i=this.bucket(t);if(i==="Today")return e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});if(i==="Yesterday")return i;if(i==="Previous 7 days")return e.toLocaleDateString("en-GB",{weekday:"long"});const s=e.getFullYear()!==new Date().getFullYear();return e.toLocaleDateString("en-GB",{day:"numeric",month:"short",...s?{year:"numeric"}:{}})}mark(t){const e=this.searchQ.trim().split(/\s+/).filter(Boolean).map(up);return e.length?t.split(new RegExp(`(${e.join("|")})`,"gi")).map((i,s)=>s%2?r`<mark class="bg-accent-soft text-ink rounded-sm">${i}</mark>`:i):t}renderSearch(){const t=this.searchQ.trim();return r`
      <label class="flex items-center gap-1.5 ${this.wide?"w-44 min-w-[7.5rem] shrink":"flex-1 min-w-0"} h-8 px-3 rounded-full border border-line bg-hover text-muted transition-colors focus-within:bg-surface focus-within:border-accent">
        ${et("search","w-3.5 h-3.5 shrink-0")}
        <input data-notes-search type="text" placeholder=${this.noteFilter==="blog"?"Search blog":this.noteFilter==="local"?"Search local notes":"Search"} aria-label="Search notes" title=${`Search notes (${Dt}Shift+F)`} .value=${this.searchQ}
          class="flex-1 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          @input=${e=>this.onSearchInput(e.target.value)}
          @keydown=${e=>{e.key==="Escape"&&this.clearSearch(),e.key==="Enter"&&this.hits?.[0]&&this.open(this.hits[0].name)}} />
        ${t?r`<button type="button" title="Clear search" aria-label="Clear search" class="shrink-0 text-muted hover:text-ink"
          @click=${()=>this.clearSearch()}>${et("x","w-3.5 h-3.5")}</button>`:c}
      </label>`}renderSidebar(){const t=this.searchQ.trim(),e=this.files.filter(s=>this.matchesNoteFilter(s.name)).length,i=this.hits?.filter(s=>this.matchesNoteFilter(s.name)).length;return r`
      ${this.wide?c:r`<div class="flex items-center px-3 pt-3 shrink-0">${this.renderSearch()}</div>`}
      <div class="flex items-center gap-1.5 pl-4 pr-3 pt-3 pb-2 shrink-0">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-ink truncate">${t?"Search":this.noteFilter==="blog"?"Blog articles":this.noteFilter==="local"?"Local notes":"Notes"}</div>
          <div class="text-xs text-muted truncate">${t?i===void 0?"Searching…":`Found ${i} ${i===1?"note":"notes"}`:`${e} ${e===1?"note":"notes"}`}</div>
        </div>
        ${this.blogEnabled?r`<span data-tb-root class=${this.noteFilter==="all"?"":"rounded-lg bg-accent-soft"}>${this.renderToolbarTrigger("library",this.syncingBlog?"Syncing blog":"Notes and blog library",et("globe"))}</span>`:c}
        ${kn("square-pen",Lr,()=>this.newNote(),"text-accent")}
      </div>
      <div class="notes-list-scroll flex-1 min-h-0 overflow-y-auto px-2 pb-2" style="scrollbar-gutter:stable;">
        ${this.trashOpen?this.renderTrash():t?this.renderHits():this.renderList()}
      </div>
      ${!this.trashOpen&&this.trashCount?r`
        <button type="button" class="flex items-center gap-2 mx-2 mb-2 px-3 py-2 rounded-lg text-xs text-muted hover:text-ink hover:bg-hover shrink-0"
          @click=${()=>void this.openTrash()}>
          ${et("trash-2","w-3.5 h-3.5")} Recently deleted <span class="ml-auto">${this.trashCount}</span>
        </button>`:c}`}groupLabel(t,e=!1){return e?r`<button type="button" class="notes-group-heading flex items-center justify-between w-full text-left" aria-expanded=${!this.pinnedCollapsed}
          @click=${()=>{this.pinnedCollapsed=!this.pinnedCollapsed}}><span>${t}</span>${et(this.pinnedCollapsed?"chevron-right":"chevron-down","w-3.5 h-3.5 text-muted")}</button>`:r`<h3 class="notes-group-heading">${t}</h3>`}renderList(){if(!this.files.length&&!this.isDraft)return this.initialized?r`<div class="px-3 py-8 text-center text-sm text-muted">No notes yet</div>`:c;const t=[];for(const i of this.files.filter(s=>this.matchesNoteFilter(s.name))){const s=i.pinned?"Pinned":this.bucket(i.modifiedAt),n=t[t.length-1];n?.label===s?n.items.push(i):t.push({label:s,items:[i]})}const e=this.files.find(i=>i.name===this.dragName);return r`
      ${e&&!e.pinned&&!t.some(i=>i.label==="Pinned")?r`
        <div data-drop-row=""
          class="mx-1 mt-2 px-3 py-3 rounded-lg border-2 border-dashed text-xs text-center ${this.dropAt?.name===null?"border-accent text-accent":"border-line text-muted"}">
          Drop here to pin</div>`:c}
      ${this.isDraft?r`
        <div class="px-3 py-2 mt-1 rounded-lg bg-accent-soft" @contextmenu=${i=>this.openDraftMenu(i)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.liveTitle||"New note"}</div>
          <div class="mt-0.5 text-xs text-muted">Now</div>
        </div>`:c}
      ${t.map(i=>r`<section class="notes-list-group">${this.groupLabel(i.label,i.label==="Pinned")}${i.label==="Pinned"&&this.pinnedCollapsed?c:i.items.map(s=>this.renderRow(s))}</section>`)}`}onRowArrow(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"||t.altKey||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=[...this.querySelectorAll("#notes-list .notes-list-row")],i=e[e.indexOf(t.currentTarget)+(t.key==="ArrowDown"?1:-1)];t.preventDefault(),i&&(i.focus(),i.scrollIntoView({block:"nearest"}),i.click())}renderRow(t){const e=t.name===this.activeName,i=(e?this.liveTitle:"")||t.title||"Untitled",s=this.dragName&&t.pinned&&this.dropAt?.name===t.name&&this.dragName!==t.name?`box-shadow: inset 0 ${this.dropAt.pos==="before"?"2px":"-2px"} 0 var(--accent);`:"";return r`
      <div class="group relative select-none rounded-lg ${this.dragName===t.name?"opacity-40":""}"
        style="-webkit-touch-callout:none;${s}"
        data-drop-row=${t.name}
        @contextmenu=${n=>this.openRowMenu(n,t.name)}
        @pointerdown=${n=>this.onRowPointerDown(n,t.name)}>
        <button type="button" class="notes-list-row w-full text-left rounded-lg ${e?"bg-accent-soft":"hover:bg-hover"}"
          aria-current=${e?"true":c}
          @keydown=${n=>{n.key==="ContextMenu"||n.shiftKey&&n.key==="F10"?this.openRowMenu(n,t.name):this.onRowArrow(n)}}
          @click=${n=>{this.suppressClick||(n.currentTarget.focus({preventScroll:!0}),this.open(t.name))}}>
          <div class="notes-list-title flex items-center gap-1.5 min-w-0"><span class="truncate">${i}</span>${t.blog?.url?r`<span class="shrink-0 ${t.blog.published?"text-nsc-green":"text-muted"}" title=${t.blog.published?"Published on blog":"Blog draft"}>${et("globe","w-3 h-3")}</span>`:c}</div>
          <div class="notes-list-preview flex gap-2 min-w-0">
            <span class="shrink-0">${this.dateLabel(t.modifiedAt)}</span>
            <span class="truncate">${t.preview||"No additional text"}</span>
          </div>
        </button>
        <button type="button" aria-label=${`Actions for ${i}`} title="Note actions"
          class="notes-row-menu absolute right-1 top-2 flex items-center justify-center w-7 h-7 rounded-md bg-surface text-muted hover:text-ink hover:bg-hover opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          @pointerdown=${n=>n.stopPropagation()}
          @click=${n=>this.openRowMenu(n,t.name)}>${et("ellipsis","w-4 h-4")}</button>
      </div>`}renderHits(){return this.hits===null?r`<div class="px-3 py-6 text-center text-xs text-muted">Searching…</div>`:this.hits.length?r`
      ${this.hits.filter(t=>this.matchesNoteFilter(t.name)).map(t=>r`
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${t.name===this.activeName?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>this.open(t.name)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.mark(t.title||"Untitled")}</div>
          ${t.snippet?r`<div class="mt-0.5 text-xs text-muted line-clamp-2 break-words">${this.mark(t.snippet)}</div>`:c}
        </button>`)}`:r`<div class="px-3 py-6 text-center text-sm text-muted">No matches</div>`}renderTrash(){return r`
      <button type="button" class="flex items-center gap-0.5 mt-1 px-2 py-1 rounded-md text-xs text-muted hover:text-ink hover:bg-hover"
        @click=${()=>{this.trashOpen=!1}}>${et("chevron-left","w-3.5 h-3.5")} Notes</button>
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
        <div class="flex items-center justify-start min-w-0">${this.wide?kn("layout-sidebar",this.sidebarHidden?"Show notes list":"Hide notes list",()=>this.toggleSidebar()):r`<button type="button" aria-label="Back to notes" class="flex items-center justify-center w-8 h-8 rounded-lg text-accent hover:bg-hover shrink-0"
              @click=${()=>this.back()}>${et("chevron-left")}</button>`}
          ${this.activeBlog?.url?r`<a class="notes-blog-status ${this.activeBlog.published?"text-nsc-green":"text-muted"}" href=${this.activeBlog.published?this.activeBlog.url:c} target="_blank" rel="noopener noreferrer"
            aria-label=${this.activeBlog.published?"Published. Open blog article":"Blog draft"}
            title=${this.activeBlog.conflict?"Changed on both sides. Open blog article":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes. Open blog article":this.activeBlog.published?"Published. Open blog article":"Unpublished. Open blog article"}>
            ${et("globe","w-4 h-4")}<span class="notes-blog-status-label">${this.activeBlog.missing?"Removed":this.activeBlog.conflict?"Blog changed":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes":this.activeBlog.published?"Published":"Blog draft"}</span></a>`:c}
        </div>
        ${this.renderToolbar()}
        <div data-tb-root class="flex items-center justify-end gap-1 min-w-0">
          ${!this.wide||this.sidebarHidden?kn("square-pen",Lr,()=>this.newNote(),"text-accent"):c}
          ${this.editor&&(this.activeName||this.isDraft)?this.renderToolbarTrigger("more","Note actions",et("ellipsis")):c}
          ${this.wide?this.renderSearch():c}
        </div>
      </div>`}renderToolbarTrigger(t,e,i){return r`
      <button type="button" title=${e} aria-label=${e} aria-haspopup="dialog"
        aria-expanded=${this.tbMenu===t} aria-controls=${this.tbMenu===t?"notes-toolbar-menu":c}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${this.tbMenu===t?"bg-hover":""}"
        @pointerdown=${s=>s.preventDefault()}
        @click=${s=>{if(this.tbMenu===t){this.closeToolbar();return}this.tbTrigger=s.currentTarget,this.rowMenuPoint=null,this.tbMenu=t,s.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${i}</button>`}renderToolbar(){if(this.editorTick,!this.editor||!this.activeName&&!this.isDraft)return r`<div></div>`;const t=this.editor,e=(i,s,n,o=!1)=>r`
      <button type="button" title=${i} aria-label=${i} aria-pressed=${o}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${o?"bg-accent-soft text-accent":""}"
        @pointerdown=${a=>a.preventDefault()}
        @click=${()=>{this.closeToolbar(),n()}}>${et(s)}</button>`;return r`<div data-tb-root role="toolbar" aria-label="Note tools" class="flex items-center justify-center gap-1">
      <div class="flex items-center gap-0.5 rounded-full bg-hover px-1">
        ${this.renderToolbarTrigger("format","Text formatting",r`<span class="text-lg leading-none">Aa</span>`)}
        <div class="flex items-center">
          ${e("Checklist","list-todo",()=>{t.chain().focus().toggleTaskList().run()},t.isActive("taskList"))}
          <button type="button" title="List styles" aria-label="List styles" aria-haspopup="dialog"
            aria-expanded=${this.tbMenu==="list"} aria-controls=${this.tbMenu==="list"?"notes-toolbar-menu":c}
            class="flex items-center justify-center w-4 h-8 shrink-0 rounded-md text-ink hover:bg-hover"
            @pointerdown=${i=>i.preventDefault()}
            @click=${i=>{if(this.tbMenu==="list"){this.closeToolbar();return}this.tbTrigger=i.currentTarget,this.tbMenu="list",i.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${et("chevron-down","w-3 h-3")}</button>
        </div>
        ${e("Insert table","table",()=>{t.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run()})}
        ${e("Images","image",()=>void this.openMedia())}
      </div>
    </div>`}renderToolbarMenu(){const t=this.editor,e=l=>{this.closeToolbar(),l()},i=(l,h,u,p,m=!1)=>r`
      <button type="button" title=${l} aria-label=${l} aria-pressed=${u} ?disabled=${m}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md text-sm ${u?"bg-accent-soft text-accent":"text-ink hover:bg-hover"} ${m?"opacity-30":""}"
        @pointerdown=${g=>g.preventDefault()} @click=${()=>e(p)}>${h}</button>`,s=(l,h,u,p=!1)=>r`
      <button type="button" role=${this.tbMenu==="row"?"menuitem":c} ?disabled=${p} class="flex items-center gap-3 w-full px-2 py-2 text-sm rounded-lg text-left hover:bg-hover ${p?"opacity-30":""}"
        @pointerdown=${m=>m.preventDefault()} @click=${()=>e(u)}>${et(h)}<span>${l}</span></button>`,n=(l,h)=>r`<div class="mb-2 last:mb-0"><div class="px-1 mb-1 text-xs font-medium text-muted">${l}</div><div class="flex flex-wrap gap-1">${h}</div></div>`,o=l=>{l!=="justify"&&ap(t,l)||t.chain().focus().setTextAlign(l).run()};let a=c;if(this.tbMenu==="format"){const l=t.isActive("heading",{level:1})?1:t.isActive("heading",{level:2})?2:t.isActive("heading",{level:3})?3:0,h=t.isActive("image"),u=h?String(t.getAttributes("image").align||"left"):t.isActive({textAlign:"center"})?"center":t.isActive({textAlign:"right"})?"right":t.isActive({textAlign:"justify"})?"justify":"left",p=t.getAttributes("textStyle").color||null,m=t.getAttributes("highlight").color||null;a=r`
        ${n("Style",[0,1,2,3].map(g=>{const v=["Body","Title","Heading","Subheading"][g];return r`<button type="button" aria-label=${v} aria-pressed=${l===g}
            class="w-full text-left px-2 py-1 rounded-lg hover:bg-hover ${l===g?"bg-accent-soft text-accent":"text-ink"}"
            style=${`font-size:${[13,22,17,15][g]}px;font-weight:${g?600:400};`}
            @pointerdown=${y=>y.preventDefault()}
            @click=${()=>e(()=>{(g?t.chain().focus().setHeading({level:g}):t.chain().focus().setParagraph()).run()})}>${v}</button>`}))}
        ${n("Text",r`
          ${i("Bold (⌘B)",r`<b>B</b>`,t.isActive("bold"),()=>{t.chain().focus().toggleBold().run()})}
          ${i("Italic (⌘I)",r`<i>I</i>`,t.isActive("italic"),()=>{t.chain().focus().toggleItalic().run()})}
          ${i("Underline (⌘U)",r`<u>U</u>`,t.isActive("underline"),()=>{t.chain().focus().toggleUnderline().run()})}
          ${i("Strikethrough",r`<s>S</s>`,t.isActive("strike"),()=>{t.chain().focus().toggleStrike().run()})}`)}
        ${n("Blocks",r`
          ${i("Quote",et("quote"),t.isActive("blockquote"),()=>{t.chain().focus().toggleBlockquote().run()})}
          ${i("Code block",et("code"),t.isActive("codeBlock"),()=>{t.chain().focus().toggleCodeBlock().run()})}`)}
        ${n("Alignment",["left","center","right","justify"].map(g=>i(`Align ${g}`,et(`align-${g}`),u===g,()=>o(g),h&&g==="justify")))}
        ${n("Text color",dp.map(g=>i(g.name,r`<span class="flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold ${g.v?"text-white":"text-ink"}" style=${g.v?`background:${g.v}`:""}>A</span>`,p===g.v,()=>{(g.v?t.chain().focus().setColor(g.v):t.chain().focus().unsetColor()).run()})))}
        ${n("Highlight",[null,...hp].map(g=>i(g?`${g.name} highlight`:"No highlight",r`<span class="w-5 h-5 rounded-md ${g?"":"border border-line"}" style=${g?`background:${g.v}`:""}></span>`,m===(g?.v??null),()=>{(g?t.chain().focus().setHighlight({color:g.v}):t.chain().focus().unsetHighlight()).run()})))}`}else if(this.tbMenu==="list")a=r`
        ${s("Bullet list","list",()=>{t.chain().focus().toggleBulletList().run()})}
        ${s("Numbered list","list-ordered",()=>{t.chain().focus().toggleOrderedList().run()})}
        ${s("Checklist","list-todo",()=>{t.chain().focus().toggleTaskList().run()})}`;else if(this.tbMenu==="more"){const l=this.files.some(h=>h.name===this.activeName&&h.pinned);a=r`
        ${s("Undo","undo-2",()=>{t.chain().focus().undo().run()},!t.can().undo())}
        ${s("Redo","redo-2",()=>{t.chain().focus().redo().run()},!t.can().redo())}
        ${this.activeName?s(l?"Unpin":"Pin",l?"pin-off":"pin",()=>this.togglePin(this.activeName)):c}
        ${this.blogEnabled?r`
          ${s(this.blogBusy?"Publishing…":this.activeBlog?.published?"Update blog post":"Publish to blog","globe",()=>{this.activeBlog?.published?this.blogAction("publish"):this.publishConfirm=this.liveTitle||this.files.find(h=>h.name===this.activeName)?.title||"this note"},this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${this.activeBlog?.published?c:s("Save draft to blog","file-text",()=>void this.blogAction("save-draft"),this.blogBusy||this.tagSaving||!!this.uploading||!this.blogConnected)}
          ${s("Featured image","image",()=>{this.tbMenu="featured-image"},this.blogBusy||this.tagSaving)}
          ${s("Edit tags","type",()=>void this.openTags())}
          ${this.activeBlog?.url?r`
            ${this.activeBlog.published?s("Unpublish from blog","eye-off",()=>void this.blogAction("unpublish"),this.blogBusy):c}
            ${s("Pull latest from blog","redo-2",()=>void this.blogAction("pull"),this.blogBusy)}
            ${s("Delete article from blog","trash-2",()=>{this.blogDeleteName=this.activeName})}`:c}`:c}
        ${this.activeBlog?.url?c:s("Delete note","trash-2",()=>this.trashCurrent())}
        ${s("Keyboard shortcuts","type",()=>{this.tbMenu="shortcuts"})}`}if(this.tbMenu==="row"&&this.rowMenuName){const l=this.renamed.get(this.rowMenuName)??this.rowMenuName,h=this.files.find(u=>u.name===l);a=r`
        ${s("Open note","file-text",()=>this.open(l))}
        ${s(h?.pinned?"Unpin note":"Pin note",h?.pinned?"pin-off":"pin",()=>this.togglePin(l))}
        ${s("Duplicate note","file-text",()=>void this.duplicateNote(l),this.duplicating)}
        ${s("Copy note","file-text",()=>void this.copyNote(l))}
        ${s("New note","square-pen",()=>this.newNote())}
        ${this.files.find(u=>u.name===l)?.blog?.url?s("Delete article from blog","trash-2",()=>{this.blogDeleteName=l}):s("Delete note","trash-2",()=>this.trashNote(l))}`}if(this.tbMenu==="library"){const l=(h,u)=>s(u,h==="blog"?"globe":"file-text",()=>{this.noteFilter=h,this.clearSearch()});a=r`${l("all","All notes")}${l("blog","Blog articles")}${l("local","Local notes")}
        ${s(this.syncingBlog?"Syncing blog…":"Sync from blog","redo-2",()=>void this.syncBlogLibrary(),this.syncingBlog||!this.blogConnected)}
        ${s("Manage blog tags","type",()=>void this.openTags(!0))}`}if(this.tbMenu==="featured-image"){const l=this.activeBlog?.featuredImage;a=r`<div class="px-1 text-sm font-semibold mb-2">Featured image</div>
        ${l?r`<img src=${l} alt="Featured image" class="w-full rounded-lg mb-2" style="max-height:160px;object-fit:cover" />`:c}
        ${s(l?"Change image":"Choose image","image",()=>void this.openMedia("featured"),this.tagSaving||this.blogBusy)}
        ${l?s("Remove image","trash-2",()=>void this.saveFeaturedImage(""),this.tagSaving||this.blogBusy):c}
        <p class="px-1 mt-2 text-xs text-muted">Used for the blog preview and sharing. Without one, the first image in the note is used.</p>`}if(this.tbMenu==="tags"){const l=this.activeBlog?.categories??[],h=u=>{const p=u.trim();p&&!l.some(m=>m.toLocaleLowerCase()===p.toLocaleLowerCase())&&this.saveTags([...l,p])};a=r`<div class="text-sm font-semibold mb-2">Tags</div>
        <div class="flex flex-wrap gap-1 mb-2">${l.map(u=>r`<button type="button" class="px-2 py-1 rounded-full bg-accent-soft text-sm" aria-label=${`Remove tag ${u}`} ?disabled=${this.tagSaving} @click=${()=>void this.saveTags(l.filter(p=>p!==u))}>${u} ×</button>`)}</div>
        <input type="text" aria-label="Add tag" ?disabled=${this.tagSaving} placeholder="Add tag" class="w-full rounded-lg border border-line px-2 py-1.5 text-base"
          @blur=${u=>{const p=u.target;p.value.trim()&&(h(p.value),p.value="")}} @keydown=${u=>{u.key==="Enter"&&(u.preventDefault(),u.stopPropagation(),h(u.target.value),u.target.value="")}} />
        <div class="mt-2 flex flex-wrap gap-1">${this.allBlogTags.filter(u=>!l.includes(u.name)).map(u=>r`<button type="button" class="px-2 py-1 rounded-full text-sm hover:bg-hover" ?disabled=${this.tagSaving} @click=${()=>h(u.name)}>${u.name}</button>`)}</div>`}if(this.tbMenu==="manage-tags"&&(a=r`<div class="text-sm font-semibold mb-2">Blog tags</div>
        ${this.allBlogTags.length?this.allBlogTags.map(l=>r`<div class="flex items-center gap-2 mb-2"><input type="text" aria-label=${`Rename tag ${l.name}`} title="Rename this tag across all blog articles" class="w-full min-w-0 rounded-lg border border-line px-2 py-1 text-base" .value=${l.name} ?disabled=${this.blogBusy}
          @blur=${h=>void this.renameTag(l.name,h.target.value)} @keydown=${h=>{h.key==="Enter"&&h.target.blur(),h.key==="Escape"&&(h.target.value=l.name)}} /><span class="text-xs text-muted">${l.count}</span></div>`):r`<p class="text-sm text-muted">Add tags from an article’s actions menu.</p>`}`),this.tbMenu==="shortcuts"){const l=[["New note",`${Dt}N`],["Search notes",`${Dt}Shift+F`],["Show / hide list",`${Dt}\\`],["Save now",`${Dt}S`],["Bold / italic / underline",`${Dt}B / I / U`],["Undo",`${Dt}Z`],["Redo",`${Dt}Shift+Z`],["Checklist",`${Dt}Shift+9`],["Bullet list",`${Dt}Shift+8`],["Numbered list",`${Dt}Shift+7`],["Heading 1, 2, 3",`${Dt}Alt+1 / 2 / 3`]];a=r`<div class="px-1"><div class="text-sm font-semibold mb-2">Keyboard shortcuts</div>
        <dl class="space-y-2">${l.map(([h,u])=>r`<div class="flex items-center justify-between gap-3 text-xs"><dt>${h}</dt><dd class="shrink-0 font-mono text-muted">${u}</dd></div>`)}</dl>
      </div>`}return r`<div @keydown=${this.onToolbarMenuKey}>${a}</div>`}renderEmpty(){return r`
      <div class="h-full flex flex-col items-center justify-center gap-3">
        <div class="text-sm text-muted">${this.files.length?"Pick a note, or start a new one.":"No notes yet."}</div>
        <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          @click=${()=>this.newNote()}>${et("square-pen")} New note</button>
      </div>`}render(){const t=this.activeName!==null||this.isDraft,e=this.wide?!this.sidebarHidden:this.view==="list",i=this.wide||this.view==="note";return r`
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
        <section class="notes-editor-pane ${i?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
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
            @insert=${s=>this.onMediaInsert(s.detail)}></notes-media-library>`:c}
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
    `}};O([d()],M.prototype,"files",2);O([d()],M.prototype,"trashCount",2);O([d()],M.prototype,"activeName",2);O([d()],M.prototype,"isDraft",2);O([d()],M.prototype,"error",2);O([d()],M.prototype,"initialized",2);O([d()],M.prototype,"wide",2);O([d()],M.prototype,"view",2);O([d()],M.prototype,"sidebarHidden",2);O([d()],M.prototype,"sidebarWidth",2);O([d()],M.prototype,"searchQ",2);O([d()],M.prototype,"hits",2);O([d()],M.prototype,"trashOpen",2);O([d()],M.prototype,"trashItems",2);O([d()],M.prototype,"toast",2);O([d()],M.prototype,"tbMenu",2);O([d()],M.prototype,"blogEnabled",2);O([d()],M.prototype,"blogConnected",2);O([d()],M.prototype,"blogBusy",2);O([d()],M.prototype,"tagSaving",2);O([d()],M.prototype,"syncingBlog",2);O([d()],M.prototype,"activeBlog",2);O([d()],M.prototype,"blogLocalDirty",2);O([d()],M.prototype,"noteFilter",2);O([d()],M.prototype,"allBlogTags",2);O([d()],M.prototype,"blogDeleteName",2);O([d()],M.prototype,"publishConfirm",2);O([d()],M.prototype,"pinnedCollapsed",2);O([d()],M.prototype,"editorTick",2);O([d()],M.prototype,"liveTitle",2);O([d()],M.prototype,"dragName",2);O([d()],M.prototype,"dropAt",2);O([d()],M.prototype,"mediaOpen",2);O([d()],M.prototype,"uploading",2);O([d()],M.prototype,"uploadPct",2);M=O([w("companion-notes")],M);var pp=Object.getOwnPropertyDescriptor,mp=(t,e,i,s)=>{for(var n=s>1?void 0:s?pp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let Rr=class extends T{render(){return r`<companion-notes class="flex flex-col flex-1 min-h-0"></companion-notes>`}};Rr=mp([w("companion-workspace")],Rr);const Rl="mana.owl.hidden",oo="mana-owl-visibility";function Nl(){try{const e=localStorage.getItem(Rl);return e===null?!0:e==="1"}catch{return!0}}function $s(t){try{localStorage.setItem(Rl,t?"1":"0")}catch{}window.dispatchEvent(new CustomEvent(oo,{detail:{hidden:t}}))}var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,No=(t,e,i,s)=>{for(var n=s>1?void 0:s?gp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&fp(e,i,n),n};let js=class extends T{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return r`
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
    `}};No([b({type:Boolean})],js.prototype,"checked",2);No([b({type:Boolean})],js.prototype,"disabled",2);js=No([w("sc-toggle")],js);var bp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,vi=(t,e,i,s)=>{for(var n=s>1?void 0:s?vp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&bp(e,i,n),n};function yp(t){const e=yo.map(i=>({id:i.id,label:i.note?`${i.label} (${i.note})`:i.label}));return e.some(i=>i.id===t)||e.push({id:t,label:t}),e}function xp(){return yo.filter(t=>t.provider==="anthropic").map(t=>({id:t.id,label:t.id===Hn?`${t.label} (tested)`:t.label}))}const wp={normal:"Normal (tested)",low:"Low",medium:"Medium",high:"High"};function kp(t){return t.code.startsWith("Key")?t.code.slice(3):t.code.startsWith("Digit")?t.code.slice(5):/^F\d{1,2}$/.test(t.key)||t.key.length===1&&t.key!=="+"&&t.key.trim()?t.key:null}async function $p(t){const s=URL.createObjectURL(t);try{const n=await new Promise((m,g)=>{const v=new Image;v.onload=()=>m(v),v.onerror=()=>g(new Error("could not decode image")),v.src=s}),o=Math.min(1,256/Math.max(n.width,n.height)),a=Math.max(1,Math.round(n.width*o)),l=Math.max(1,Math.round(n.height*o)),h=document.createElement("canvas");h.width=a,h.height=l;const u=h.getContext("2d");if(!u)return await Sp(t);u.drawImage(n,0,0,a,l);const p=h.toDataURL("image/webp",.85);return p.startsWith("data:image/webp")?p:h.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(s)}}function Sp(t){return new Promise((e,i)=>{const s=new FileReader;s.onload=()=>e(String(s.result||"")),s.onerror=()=>i(s.error),s.readAsDataURL(t)})}let He=class extends T{constructor(){super(...arguments),this.settingsCtl=new Ga(this,f,t=>t.settings),this.myLogin="",this.myRole="",this.myName="",this.recordingShortcut=null,this.shortcutPrompt="Press keys"}connectedCallback(){super.connectedCallback(),Object.keys(f.getState().settings).length===0&&f.getState().loadSettings(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t?.login&&(this.myLogin=t.login,this.myRole=t.role,this.myName=t.displayName||"")}).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}displayNameKey(){return this.myLogin?`user:${this.myLogin}:display_name`:"cockpit.display_name"}get currentDisplayName(){return this.settings[this.displayNameKey()]||""}async setDisplayName(t){await f.getState().setSetting(this.displayNameKey(),t.trim())}get settings(){return this.settingsCtl.state.settings}get currentMentorModel(){return vs(this.settings["cockpit.mentor_model"])}async setMentorModel(t){await f.getState().setSetting("cockpit.mentor_model",t)}get currentCompanionModel(){return dc(this.settings["cockpit.companion_model"])}async setCompanionModel(t){await f.getState().setSetting("cockpit.companion_model",t)}get currentCompanionEffort(){return hc(this.settings["cockpit.companion_effort"])}async setCompanionEffort(t){await f.getState().setSetting("cockpit.companion_effort",t)}shortcutValue(t,e){const i=this.settings[t];return i&&ye(i)?i:e}onShortcutKey(t,e){if(t.key==="Tab")return;t.preventDefault(),t.stopPropagation();const i=t.currentTarget;if(t.key==="Escape")return i.blur();const s=kp(t);if(!s)return;if(!t.metaKey&&!t.ctrlKey&&!t.altKey){this.shortcutPrompt="Add ⌘, ⌃ or ⌥";return}const n=[t.ctrlKey&&"Ctrl",t.altKey&&"Alt",t.shiftKey&&"Shift",t.metaKey&&"Meta"].filter(Boolean);f.getState().setSetting(e,[...n,s].join("+")),i.blur()}renderShortcut(t,e,i){const s=this.shortcutValue(e,i),n=xs(s)===xs(i);return r`
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-sm text-muted hover:text-ink ${n?"invisible":""}"
          ?disabled=${n}
          @click=${()=>void f.getState().setSetting(e,i)}
        >Reset</button>
        <input
          type="text"
          readonly
          aria-label=${t}
          class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink caret-transparent cursor-pointer focus:outline-none focus:border-accent min-w-[200px]"
          .value=${this.recordingShortcut===e?"":xs(s)}
          placeholder=${this.shortcutPrompt}
          @focus=${()=>{this.recordingShortcut=e,this.shortcutPrompt="Press keys"}}
          @blur=${()=>{this.recordingShortcut=null}}
          @keydown=${o=>this.onShortcutKey(o,e)}
        />
      </div>
    `}get chatHidden(){return this.settings["cockpit.chat_hidden"]==="1"}async setChatHidden(t){await f.getState().setSetting("cockpit.chat_hidden",t?"1":"0")}resetDemo(){if(window.confirm("Reset the demo? This clears your changes and restores the sample cockpit.")){for(let t=localStorage.length-1;t>=0;t--){const e=localStorage.key(t);e&&e.startsWith("mana.demo.")&&localStorage.removeItem(e)}location.reload()}}get currentProfilePic(){const t=this.settings[this.profilePicKey()],e=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return t||e||""}async onProfilePicFile(t){const e=t.target,i=e.files?.[0];if(!i||!i.type.startsWith("image/"))return;const s=await $p(i),{url:n}=await C.uploads.upload(s,!1);await f.getState().setSetting(this.profilePicKey(),n),e.value=""}async clearProfilePic(){await f.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await f.getState().setSetting("cockpit.profile_pic_url","")}renderRow(t,e,i){return r`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${t}</div>
          <div class="text-sm text-muted mt-0.5">${e}</div>
        </div>
        <div class="shrink-0 flex items-center">${i}</div>
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
              ${yp(this.currentMentorModel).map(t=>r`<option value=${t.id} ?selected=${t.id===this.currentMentorModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana model",`The model Mana itself runs on. Claude only. ${Bn(Hn)?.label??Hn} is the only one that has passed its behaviour test.`,r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionModel}
              @change=${t=>this.setCompanionModel(t.target.value)}
            >
              ${xp().map(t=>r`<option value=${t.id} ?selected=${t.id===this.currentCompanionModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana effort","How long Mana thinks before it answers. Normal is the only level that has passed its behaviour test. Low answers about a second sooner.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionEffort}
              @change=${t=>this.setCompanionEffort(t.target.value)}
            >
              ${uc.map(t=>r`<option value=${t} ?selected=${t===this.currentCompanionEffort}>${wp[t]}</option>`)}
            </select>
          `)}
        ${this.renderRow("Dictation shortcut","Talk to Mana instead of typing: press it once to start, again to stop.",this.renderShortcut("Dictation shortcut",Ms,As))}
        ${this.renderRow("Open Mana","Opens Mana from anywhere, ready to type. Press it again to close.",this.renderShortcut("Open Mana shortcut",vl,bl))}
        ${this.renderRow("Show the owl","On this device only. Hidden, the Open Mana or dictation shortcut brings it back.",r`
            <sc-toggle
              .checked=${!Nl()}
              @sc-change=${t=>{$s(!t.detail.checked),this.requestUpdate()}}
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
    `}};vi([d()],He.prototype,"myLogin",2);vi([d()],He.prototype,"myRole",2);vi([d()],He.prototype,"myName",2);vi([d()],He.prototype,"recordingShortcut",2);vi([d()],He.prototype,"shortcutPrompt",2);He=vi([w("settings-general")],He);var Tp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,jl=(t,e,i,s)=>{for(var n=s>1?void 0:s?Cp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Tp(e,i,n),n};let ro=class extends T{constructor(){super(...arguments),this.groups=[]}connectedCallback(){super.connectedCallback(),C.notifications.kinds().then(t=>{this.groups=t.kinds}).catch(()=>{})}async toggle(t,e){this.groups=this.groups.map(i=>i.kind===t?{...i,enabled:e}:i),await C.notifications.mute(t,e).catch(()=>{})}render(){return r`
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
    `}};jl([d()],ro.prototype,"groups",2);ro=jl([w("settings-notifications")],ro);var Ep=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,ee=(t,e,i,s)=>{for(var n=s>1?void 0:s?Dp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Ep(e,i,n),n};const Pp="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",Ap="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",Mp=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let zt=class extends T{constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[t,e]=await Promise.all([fetch("/api/memory/status").then(i=>i.ok?i.json():null),fetch("/api/memory/files").then(i=>i.ok?i.json():null)]);t&&(this.status=t),e&&(this.files=e.files)}catch{}}async toggle(t){const e=t.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:e})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let t=0;t<12;t++)await new Promise(e=>setTimeout(e,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(t){try{const e=await fetch(`/api/memory/files/${encodeURIComponent(t.relPath)}`);if(e.ok){const i=await e.json();this.editing=!1,this.viewing={title:this.prettyName(t),relPath:t.relPath,content:i.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(t){if(!t)return"never";const e=Number(t);return Number.isFinite(e)?new Date(e*1e3).toLocaleString():"never"}statusLine(t){if(!t)return null;if(t.startsWith("error"))return`Last run hit a problem: ${t.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(t))return"Last run found nothing new to add.";const e=/(\d+)B/.exec(t);return e&&e[1]?`Last run added ${(Number(e[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const t=this.status;if(!t)return r`<p class="text-muted text-xs">Loading…</p>`;const e=this.viewing!=null;return r`
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
          <p class="text-muted leading-relaxed">${Pp}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${Ap}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
      <div class="space-y-4">
        ${Mp.map(t=>{const e=this.files.filter(i=>i.group===t.key).sort((i,s)=>s.modifiedAt-i.modifiedAt);return e.length===0?c:r`
            <div>
              <div class="text-ink font-medium">${t.label}</div>
              <div class="text-xs text-muted mb-1.5">${t.blurb}</div>
              <ul class="divide-y divide-line border border-line rounded">
                ${e.map(i=>r`
                    <li>
                      <button
                        type="button"
                        class="w-full text-left flex items-center justify-between px-3 py-2 hover:bg-hover ${this.viewing?.relPath===i.relPath?"bg-hover":""}"
                        @click=${()=>this.openFile(i)}
                      >
                        <span class="text-ink">${this.prettyName(i)}</span>
                        <span class="text-xs text-muted shrink-0 ml-3">${this.formatTs(String(i.modifiedAt))}</span>
                      </button>
                    </li>
                  `)}
              </ul>
            </div>
          `})}
      </div>
    `}prettyName(t){const e=/^observations-(\d{4})-(\d{2})\.md$/.exec(t.name);if(e&&e[1]&&e[2])return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e[2])-1]??e[2]} ${e[1]}`;const i=t.name.replace(/\.md$/,"").replace(/[-_]/g," ");return i.charAt(0).toUpperCase()+i.slice(1)}renderPreview(){if(!this.viewing)return r`
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
              ${W(z.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};ee([d()],zt.prototype,"status",2);ee([d()],zt.prototype,"files",2);ee([d()],zt.prototype,"running",2);ee([d()],zt.prototype,"viewing",2);ee([d()],zt.prototype,"editing",2);ee([d()],zt.prototype,"draft",2);ee([d()],zt.prototype,"saving",2);ee([d()],zt.prototype,"aboutOpen",2);ee([d()],zt.prototype,"aboutNotesOpen",2);zt=ee([w("settings-memory")],zt);var Ip=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,Zs=(t,e,i,s)=>{for(var n=s>1?void 0:s?_p(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Ip(e,i,n),n};const Ti=[{id:"general",label:"General"},{id:"notifications",label:"Notifications"},{id:"memory",label:"Memory"}];let Ui=class extends T{constructor(){super(...arguments),this.section="general",this.active="general",this.mobileView="list",this.handleKeydown=t=>{if(t.key==="Escape"){this.requestClose();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable))return;const i=Ti.findIndex(o=>o.id===this.active);if(i<0)return;const s=t.key==="ArrowDown"?Math.min(i+1,Ti.length-1):Math.max(i-1,0),n=Ti[s];s!==i&&n&&(t.preventDefault(),this.active=n.id,this.mobileView="section")}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?r`<settings-general></settings-general>`:this.active==="notifications"?r`<settings-notifications></settings-notifications>`:this.active==="memory"?r`<settings-memory></settings-memory>`:c}render(){const t=Ti.find(i=>i.id===this.active)?.label??"",e=this.mobileView==="list";return r`
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
            ${Ti.map(i=>r`
                <button
                  type="button"
                  class="w-full text-left px-3 py-2.5 lg:py-2 rounded text-sm transition-colors ${this.active===i.id?"bg-hover text-ink font-semibold":"text-muted hover:bg-hover hover:text-ink"}"
                  @click=${()=>{this.active=i.id,this.mobileView="section"}}
                >
                  ${i.label}
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
    `}};Zs([b()],Ui.prototype,"section",2);Zs([d()],Ui.prototype,"active",2);Zs([d()],Ui.prototype,"mobileView",2);Ui=Zs([w("settings-page")],Ui);var Op=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,tn=(t,e,i,s)=>{for(var n=s>1?void 0:s?Lp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Op(e,i,n),n};const Rp=.018,Np=.01,jp=600,Fp=250,Up=300,Nr=16e3;let Bi=class extends T{constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.audioCtx=null,this.mic=null,this.source=null,this.processor=null,this.threadId=null,this.starting=!1,this.ttsSource=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.srcRate=48e3,this.muted=!1,this.processing=!1,this.onToggle=()=>{this.audioCtx?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.audioCtx&&this.stopTalk()},this.speakQueue=[],this.pumpPromise=null}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.audioCtx&&this.stopTalk()}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const t=this.audioCtx!==null;try{window.speechSynthesis.cancel()}catch{}this.speakQueue=[];try{this.ttsSource?.stop(),this.ttsSource=null}catch{}try{this.processor?.disconnect()}catch{}try{this.source?.disconnect()}catch{}try{await this.audioCtx?.close()}catch{}if(this.mic)for(const e of this.mic.getTracks())e.stop();this.processor=null,this.source=null,this.audioCtx=null,this.mic=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.muted=!1,this.processing=!1,this.speaking=null,this.status!=="error"&&(this.status="idle"),t&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}onAudio(t){if(this.muted||this.processing)return;const e=t.inputBuffer.getChannelData(0),i=new Float32Array(e),s=i.length/this.srcRate*1e3;let n=0;for(let a=0;a<i.length;a++)n+=i[a]*i[a];const o=Math.sqrt(n/i.length);if(!this.inSpeech){for(this.preroll.push(i),this.prerollMs+=s;this.prerollMs>Up&&this.preroll.length>1;){const a=this.preroll.shift();this.prerollMs-=a.length/this.srcRate*1e3}o>=Rp&&(this.inSpeech=!0,this.speechMs=0,this.silenceMs=0,this.utterance=[...this.preroll],this.preroll=[],this.prerollMs=0,this.speaking="user");return}if(this.utterance.push(i),this.speechMs+=s,o<Np?this.silenceMs+=s:this.silenceMs=0,this.silenceMs>=jp){const a=this.utterance,l=this.speechMs-this.silenceMs;this.inSpeech=!1,this.utterance=[],this.speechMs=0,this.silenceMs=0,l>=Fp&&this.finishUtterance(a)}}async finishUtterance(t){this.processing=!0,this.muted=!0,this.speaking="thinking",this.ackBlip();try{const e=qp(zp(Hp(t),this.srcRate,Nr),Nr),{text:i}=await C.voice.stt(e),s=(i||"").trim();if(!s||/^[\s.,!?-]*$/.test(s))return;this.dispatchTranscript({role:"user",text:s});let n="",o="";for await(const l of fl({threadId:this.threadId,message:s,kind:"voice",voice:!0}))if(l.type==="thread")l.threadId!==this.threadId&&(this.threadId=l.threadId);else if(l.type==="text")n+=l.text,o=this.enqueueCompleteSentences(o+l.text);else if(l.type==="ops")this.refreshOps([l.action]);else if(l.type==="error")throw new Error(l.error);for(const l of Bp(o))this.enqueueSpeech(l);const a=n.trim();a&&this.dispatchTranscript({role:"mentor",text:a}),await this.drainSpeech()}catch(e){const i=e instanceof Error?e.message:String(e);this.errorMessage=`voice: ${i}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage})}finally{this.processing=!1,this.muted=!1,this.status==="active"&&(this.speaking="user")}}enqueueCompleteSentences(t){const e=t.match(/[^.!?…]+[.!?…]+["')\]]*\s*/g);if(!e)return t;const i=e.join("");let s="";for(const n of e)s+=n,s.trim().length>=20&&(this.enqueueSpeech(s.trim()),s="");return s+t.slice(i.length)}enqueueSpeech(t){t&&(this.speakQueue.push(t),this.pumpPromise||(this.pumpPromise=this.pumpSpeech().finally(()=>{this.pumpPromise=null;const e=this.speakQueue.shift();e&&this.audioCtx&&this.enqueueSpeech(e)})))}async pumpSpeech(){let t=null;for(;this.audioCtx;){if(!t){const n=this.speakQueue.shift();if(n===void 0)break;t={text:n,blob:this.fetchTts(n)}}const e=t,i=await e.blob,s=this.speakQueue.shift();if(t=s!==void 0?{text:s,blob:this.fetchTts(s)}:null,!this.audioCtx)return;i?await this.playWav(i):await this.speakFallback(e.text)}}async drainSpeech(){for(;this.pumpPromise;)await this.pumpPromise}ackBlip(){const t=this.audioCtx;if(t)try{const e=t.currentTime,i=t.createOscillator(),s=t.createGain();i.type="sine",i.frequency.setValueAtTime(660,e),i.frequency.setValueAtTime(880,e+.09),s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.08,e+.02),s.gain.exponentialRampToValueAtTime(1e-4,e+.18),i.connect(s),s.connect(t.destination),i.start(e),i.stop(e+.2)}catch{}}async fetchTts(t){try{return await C.voice.tts(t)}catch{return null}}async playWav(t){const e=this.audioCtx;if(!e)return;const i=await e.decodeAudioData(await t.arrayBuffer());await new Promise(s=>{const n=e.createBufferSource();n.buffer=i,n.connect(e.destination),this.ttsSource=n;let o=!1,a;const l=()=>{o||(o=!0,a&&clearTimeout(a),this.ttsSource===n&&(this.ttsSource=null),s())};n.onended=l,a=setTimeout(l,i.duration*1e3+1500),this.speaking="mentor",n.start()})}speakFallback(t){return new Promise(e=>{let i=!1;const s=()=>{i||(i=!0,e())};try{const n=new SpeechSynthesisUtterance(t);n.lang="en-US",n.onstart=()=>{this.speaking="mentor"},n.onend=s,n.onerror=s,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n),setTimeout(s,Math.min(6e4,1500+t.length*80))}catch{s()}})}refreshOps(t){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:t}));const e=t.find(i=>i.week)?.week;document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:e},bubbles:!0,composed:!0}))}dispatchTranscript(t){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:t,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return c;const t=this.status==="connecting"?"starting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="thinking"?"thinking…":this.speaking==="mentor"?"speaking…":"listening…",e=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent animate-pulse";return r`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${e}"></span>
        <span>${t}</span>
      </div>
    `}};tn([d()],Bi.prototype,"status",2);tn([d()],Bi.prototype,"errorMessage",2);tn([d()],Bi.prototype,"speaking",2);Bi=tn([w("voice-controller")],Bi);function Bp(t){const e=t.replace(/\s+/g," ").trim();if(!e)return[];const i=e.match(/[^.!?…]+[.!?…]+["')\]]*\s*|[^.!?…]+$/g)??[e],s=[];let n="";for(const o of i)n+=o,n.trim().length>=20&&(s.push(n.trim()),n="");return n.trim()&&s.push(n.trim()),s}function Hp(t){let e=0;for(const n of t)e+=n.length;const i=new Float32Array(e);let s=0;for(const n of t)i.set(n,s),s+=n.length;return i}function zp(t,e,i){if(i>=e)return t;const s=e/i,n=Math.floor(t.length/s),o=new Float32Array(n);for(let a=0;a<n;a++){const l=a*s,h=Math.floor(l),u=Math.min(h+1,t.length-1),p=l-h;o[a]=t[h]*(1-p)+t[u]*p}return o}function qp(t,e){const i=new ArrayBuffer(44+t.length*2),s=new DataView(i),n=(a,l)=>{for(let h=0;h<l.length;h++)s.setUint8(a+h,l.charCodeAt(h))};n(0,"RIFF"),s.setUint32(4,36+t.length*2,!0),n(8,"WAVE"),n(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,e,!0),s.setUint32(28,e*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),n(36,"data"),s.setUint32(40,t.length*2,!0);let o=44;for(let a=0;a<t.length;a++,o+=2){const l=Math.max(-1,Math.min(1,t[a]));s.setInt16(o,l<0?l*32768:l*32767,!0)}return new Blob([i],{type:"audio/wav"})}class jo{constructor(e,i){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=s=>{this.armedId=s,this.host.requestUpdate()},this.disarm=()=>{this.armedId=null,this.host.requestUpdate()},this.isDragging=s=>this.armedId===s||this.draggingId===s,this.onPointerDown=(s,n,o=s.currentTarget)=>{if(!this.hitTest||s.button!==0)return;s.preventDefault(),this.stopPointer?.(),o.focus(),o.setPointerCapture(s.pointerId);const a=s.clientX,l=s.clientY;let h=null;const u=v=>{if(v.pointerId!==s.pointerId||this.draggingId===null&&Math.hypot(v.clientX-a,v.clientY-l)<6)return;this.draggingId=n;const y=this.hitTest(v.clientX,v.clientY),D=y&&(this.axis==="x"?v.clientX<y.rect.left+y.rect.width/2:v.clientY<y.rect.top+y.rect.height/2)?"before":"after";h=y?{index:y.index,pos:D}:null,(this.overId!==(y?.id??null)||this.overPos!==D)&&(this.overId=y?.id??null,this.overPos=D,this.host.requestUpdate())},p=()=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),o.hasPointerCapture(s.pointerId)&&o.releasePointerCapture(s.pointerId),this.stopPointer=void 0,this.onDragEnd()},m=v=>{if(v.pointerId!==s.pointerId)return;const y=h,D=this.draggingId!==null;p(),D&&y&&this.onReorder(n,y.index+(y.pos==="after"?1:0))},g=()=>p();this.stopPointer=p,window.addEventListener("pointermove",u),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",g)},this.onDragStart=(s,n)=>{if(this.armedId!==n){s.preventDefault();return}this.draggingId=n,s.dataTransfer&&(s.dataTransfer.setData(this.type,String(n)),s.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(s,n,o)=>{if(!s.dataTransfer?.types.includes(this.type))return;s.preventDefault(),s.dataTransfer.dropEffect="move";const a=s.currentTarget.getBoundingClientRect(),l=(this.axis==="x"?s.clientX<a.left+a.width/2:s.clientY<a.top+a.height/2)?"before":"after";(this.overId!==n||this.overPos!==l)&&(this.overId=n,this.overPos=l,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(s,n,o)=>{const a=s.dataTransfer?.getData(this.type),l=a?Number(a):NaN,h=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(l))return;s.preventDefault();const u=h==="after"?o+1:o;this.onReorder(l,u)},this.dropClass=s=>this.axis==="x"?this.overId!==s?"border-l-2 border-r-2 border-transparent":this.overPos==="before"?"border-l-2 border-l-accent border-r-2 border-r-transparent":"border-r-2 border-r-accent border-l-2 border-l-transparent":this.overId!==s?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=e,this.type=i.type,this.axis=i.axis??"y",this.onReorder=i.onReorder,this.hitTest=i.hitTest,e.addController(this)}hostDisconnected(){this.stopPointer?.(),this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var Kp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,mt=(t,e,i,s)=>{for(var n=s>1?void 0:s?Wp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Kp(e,i,n),n};const Gp=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let J=class extends T{constructor(){super(...arguments),this.items=[],this.loading=!0,this.adding=!1,this.error="",this.boughtExpanded=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.sortMode=localStorage.getItem("cockpit.grocery_sort")==="type"?"type":localStorage.getItem("cockpit.grocery_sort")==="manual"?"manual":"az",this.pantrySort=this.loadPantrySort(),this.settingsOpen=!1,this.expiryEnabled=localStorage.getItem("cockpit.grocery_expiry")==="1",this.list=localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery",this.poll=null,this.drag=new jo(this,{type:"text/x-grocery-id",onReorder:(t,e)=>this.reorder(t,e)}),this._closeMenus=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null),this.settingsOpen&&(this.settingsOpen=!1)},this.onShoppingChanged=t=>{const e=t.detail;if(!e||e.list!=="grocery"&&e.list!=="buy"||this.adding&&this.list!==e.list)return;e.ack?.();const i=this.list!==e.list;if(i&&this.setList(e.list),e.sort==="az"||e.sort==="type"||e.sort==="manual"){this.sortMode=e.sort;try{localStorage.setItem("cockpit.grocery_sort",e.sort)}catch{}}if(typeof e.expiry=="boolean"){this.expiryEnabled=e.expiry;try{localStorage.setItem("cockpit.grocery_expiry",e.expiry?"1":"0")}catch{}}typeof e.bought=="boolean"&&(this.boughtExpanded=e.bought),!i&&this.editingId===null&&this.editingExpiryId===null&&!this.adding&&this.refresh()}}setList(t){if(!(this.list===t||this.adding)){this.list=t,this.draftActive=!1,this.draftValue="",this.error="",this.boughtExpanded=!1,this.items=[],this.loading=!0;try{localStorage.setItem("cockpit.shopping_tab",t)}catch{}this.refresh()}}toggleSort(){this.sortMode=this.sortMode==="az"?"type":"az";try{localStorage.setItem("cockpit.grocery_sort",this.sortMode)}catch{}}loadPantrySort(){const t=localStorage.getItem("cockpit.pantry_sort");return t==="az"||t==="type"||t==="manual"?t:null}setPantrySort(t){this.pantrySort=t;try{localStorage.setItem("cockpit.pantry_sort",t)}catch{}}toggleExpiry(){this.expiryEnabled=!this.expiryEnabled;try{localStorage.setItem("cockpit.grocery_expiry",this.expiryEnabled?"1":"0")}catch{}}inferCategory(t){const e=t.toLowerCase(),i=(...s)=>s.some(n=>e.includes(n));return i("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":i("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":i("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":i("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":i("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":i("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}gearIcon(){return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
          aria-label="Expiry dates"
          aria-checked=${this.expiryEnabled}
          class="relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${this.expiryEnabled?"bg-accent":"bg-line"}"
          @click=${this.toggleExpiry}
        >
          <span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${this.expiryEnabled?"translate-x-3.5":"translate-x-0.5"}"></span>
        </button>
      </div>
      <p class="px-1.5 pt-0.5 text-[10px] text-muted/70 leading-snug">Show freshness pills on pantry items.</p>
    </div>`}connectedCallback(){super.connectedCallback(),this.refresh(),document.addEventListener("click",this._closeMenus),window.addEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll=setInterval(()=>{this.editingId===null&&this.editingExpiryId===null&&this.emojiPickerFor===null&&!this.draftActive&&!this.drag.active&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._closeMenus),window.removeEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll&&clearInterval(this.poll)}async refresh(){const t=this.list;try{const e=await fetch(`/api/grocery?list=${t}`);if(!e.ok)throw new Error;const i=await e.json();if(this.list!==t)return;this.items=i.items}catch{this.list===t&&this.loading&&(this.error="Couldn't load your items. Please reopen this tab to try again.")}this.list===t&&(this.loading=!1)}itemText(t){return[t.quantity?.trim(),t.name].filter(Boolean).join(" ")}openDraft(){this.draftActive=!0,this.error="",this.updateComplete.then(()=>this.focusDraft())}cancelDraft(){this.adding||(this.draftActive=!1,this.draftValue="",this.error="")}async setStatus(t,e){await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:e})}),await this.refresh()}async rename(t,e){if(this.editingId!==t.id)return!1;this.editingId=null;const i=e.trim();if(!i||i===this.itemText(t))return!0;try{if(!(await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:i,quantity:null})})).ok)throw new Error;return this.error="",await this.refresh(),!0}catch{return this.error="Couldn't update this item. Please try again.",!1}}async commitName(t,e,i){await this.rename(t,e)&&i&&this.openDraft()}focusDraft(){this.renderRoot?.querySelector(".grocery-draft")?.focus()}async commitDraft(t){if(!this.draftActive||this.adding)return;const e=this.draftValue.trim();if(!e){this.cancelDraft();return}this.adding=!0,this.error="";try{if(!(await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,list:this.list})})).ok)throw new Error;this.draftValue="",await this.refresh(),this.draftActive=t,t&&this.updateComplete.then(()=>this.focusDraft())}catch{this.error="Couldn't add this item. Your text is still here. Try again."}finally{this.adding=!1}}async reorder(t,e){const i=this.list==="grocery"&&this.items.find(n=>n.id===t)?.status==="pantry";if(!(await fetch(`/api/grocery/${t}/reorder`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({targetIndex:e})})).ok){this.error="Could not save the item order. Please try again.";return}if(i)this.setPantrySort("manual");else{this.sortMode="manual";try{localStorage.setItem("cockpit.grocery_sort","manual")}catch{}}await this.refresh()}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const i=[.../‍/.test(t)?t:t.replace(/️/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderIcon(t){const e=t.emoji,i=e?this.iconUrl(e):null,s=i?r`<img src=${i} alt="" class="w-[18px] h-[18px] select-none" draggable="false" />`:e?r`<span class="text-[15px] leading-none">${e}</span>`:r`<span class="text-muted/40 text-[13px] leading-none">🛒</span>`;return r`<button
      type="button"
      class="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px]"
      title="Change icon"
      @dblclick=${n=>{n.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===t.id?null:t.id}}
    >${s}</button>`}async pickEmoji(t,e){this.emojiPickerFor=null,await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({emoji:e||null})}),await this.refresh()}renderEmojiPalette(t){return r`<div
      class="absolute left-0 top-full mt-1 z-30 w-56 p-1.5 rounded-lg border border-line bg-surface shadow-lg flex flex-wrap gap-0.5"
      @click=${e=>e.stopPropagation()}
    >
      ${Gp.map(e=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
          @click=${()=>void this.pickEmoji(t,e)}>${e}</button>`)}
      <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>void this.pickEmoji(t,"")}>none</button>
    </div>`}async removeItem(t){await fetch(`/api/grocery/${t.id}`,{method:"DELETE"}),await this.refresh()}async setExpiryDays(t,e){this.editingExpiryId=null;const i=Math.round(Number(e));if(!Number.isFinite(i))return;const s=t.bought_at?Math.floor(Date.now()/1e3-t.bought_at)/86400:0,n=Math.max(0,Math.round(s)+i);await fetch(`/api/grocery/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({shelf_life_days:n})}),await this.refresh()}fmtDuration(t){const e=Math.abs(t);return e<30?`${t}d`:e<365?`${Math.round(t/30)}m`:`${Math.round(t/365)}y`}hourglass(){return r`<svg class="hidden" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 2h12a1 1 0 0 1 0 2h-1v2.5a5 5 0 0 1-1.9 3.92L13 12l2.1 1.58A5 5 0 0 1 17 17.5V20h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1v-2.5a5 5 0 0 1 1.9-3.92L11 12 8.9 10.42A5 5 0 0 1 7 6.5V4H6a1 1 0 0 1 0-2z" />
    </svg>`}expiryInput(t,e){return r`<span class="shrink-0 inline-flex items-center gap-1 text-[10px] text-ink">
      ${this.hourglass()}
      <input
        type="number"
        class="w-10 bg-transparent border-b border-line text-[11px] outline-none text-right"
        .value=${e!=null?String(e):""}
        autofocus
        @keydown=${i=>{i.key==="Enter"?(i.preventDefault(),this.setExpiryDays(t,i.target.value)):i.key==="Escape"&&(this.editingExpiryId=null)}}
        @blur=${i=>void this.setExpiryDays(t,i.target.value)}
      />d
    </span>`}renderExpiry(t){if(this.list==="buy"||!this.expiryEnabled||t.status!=="pantry"||!t.bought_at)return c;if(this.editingExpiryId===t.id){const s=t.shelf_life_days!=null?Math.floor((t.bought_at+t.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(t,s)}if(t.shelf_life_days==null)return c;const e=Math.floor((t.bought_at+t.shelf_life_days*86400-Date.now()/1e3)/86400);if(e>3)return c;const i=e<0?"text-red-600 bg-red-500/10":"text-amber-600 bg-amber-500/10";return r`<button
      type="button"
      class="ml-auto shrink-0 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full leading-none ${i}"
      title="Expiry — click to edit"
      @click=${()=>{this.editingExpiryId=t.id}}
    >${this.hourglass()}${this.fmtDuration(e)}</button>`}renderCheck(t){const e=t.status==="pantry",i=e?"shopping":"pantry";return r`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
        style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
        aria-label=${e?"Move back to shopping":"Mark bought"}
        title=${e?"Bought — click to move back":"Mark bought"}
        @click=${()=>void this.setStatus(t,i)}
      >
        ${e?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8.5 L6.5 12 L13 4.5" />
            </svg>`:c}
      </button>
    `}renderItem(t,e,i=!1,s=!0){const n=this.editingId===t.id;return r`
      <li
        data-row-key=${`grocery:${t.id}`}
        draggable=${this.drag.isDragging(t.id)?"true":"false"}
        @dragstart=${o=>this.drag.onDragStart(o,t.id)}
        @dragend=${this.drag.onDragEnd}
        @dragover=${s?o=>this.drag.onDragOver(o,t.id,e):c}
        @dragleave=${this.drag.onDragLeave}
        @drop=${s?o=>this.drag.onDrop(o,t.id,e):c}
        class="group relative flex min-h-11 items-center gap-2 px-3 rounded-md hover:bg-hover focus-within:bg-hover ${this.drag.dropClass(t.id)}"
      >
        ${s?r`<span
          class="hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 hover:!opacity-100 select-none leading-none"
          style="font-size:14px;letter-spacing:-1px;"
          title="Drag to reorder"
          @mousedown=${()=>this.drag.arm(t.id)}
          @mouseup=${this.drag.disarm}
        >⠿</span>`:c}
        ${this.renderCheck(t)}
        <span class="relative shrink-0">
          ${this.renderIcon(t)}
          ${this.emojiPickerFor===t.id?this.renderEmojiPalette(t):c}
        </span>
        <!-- Content carries the divider, so the line is inset (starts after the
             checkbox) — iOS-list style. Subtle on both mobile and desktop. -->
        <div class="flex-1 min-w-0 flex items-center gap-2 py-2.5 border-b border-line/30">
          ${n?r`<input
                class="flex-1 min-w-0 bg-transparent text-base text-ink outline-none border-b border-accent"
                aria-label="Item"
                .value=${this.itemText(t)}
                autofocus
                @keydown=${o=>{o.key==="Enter"?(o.preventDefault(),this.commitName(t,o.target.value,i)):o.key==="Escape"&&(this.editingId=null)}}
                @blur=${o=>void this.rename(t,o.target.value)}
              />`:r`<span class="flex-1 min-w-0 text-[17px] text-ink cursor-text break-words" role="button" tabindex="0" aria-label=${`Edit ${this.itemText(t)}`}
                @click=${()=>this.editItem(t)}
                @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.editItem(t))}}>${this.itemText(t)}</span>`}
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
    `}renderSection(t,e,i,s=!1,n=c){const o=s&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(t,e.length,s,n)}
        ${e.length===0&&!o?r`<p class="px-3 py-4 text-sm text-muted">${i}</p>`:r`<ul class="pb-2">
              ${o?this.renderDraftRow():c}
              ${e.map((a,l)=>this.renderItem(a,l,s&&l===e.length-1))}
            </ul>`}
      </section>
    `}renderSectionGrouped(t,e,i,s=!1,n=c){const o=new Map;for(const h of e){const u=h.category||this.inferCategory(h.name);o.has(u)||o.set(u,[]),o.get(u).push(h)}for(const h of o.values())h.sort((u,p)=>u.name.localeCompare(p.name));const a=J.CATEGORY_ORDER.filter(h=>o.has(h)).concat([...o.keys()].filter(h=>!J.CATEGORY_ORDER.includes(h))),l=s&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(t,e.length,s,n)}
        ${e.length===0&&!l?r`<p class="px-3 py-4 text-sm text-muted">${i}</p>`:r`<div class="pb-2">
              ${a.length===0&&l?r`<ul>${this.renderDraftRow()}</ul>`:c}
              ${a.map((h,u)=>r`<div>
                <div class="px-3 pt-4 pb-1 text-sm font-medium text-muted select-none">${h}</div>
                <ul>
                  ${u===0&&l?this.renderDraftRow():c}
                  ${o.get(h).map((p,m)=>this.renderItem(p,m,!1,s))}
                </ul>
              </div>`)}
            </div>`}
      </section>
    `}renderSectionHeader(t,e,i,s){return r`<div class="flex items-center justify-between gap-3 px-3 pt-1 pb-2">
      <h3 class="text-base font-medium text-ink">${t} ${e?r`<span class="ml-1.5 text-xs font-normal text-muted tabular-nums">${e}</span>`:c}</h3>
      ${i?r`<button type="button" class="inline-flex items-center gap-1.5 h-8 px-2 rounded-md text-xs font-medium text-accent hover:bg-accent/10 disabled:opacity-50"
        ?disabled=${this.adding} @mousedown=${n=>{this.draftActive&&n.preventDefault()}} @click=${this.openDraft}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        Add item
      </button>`:s}
    </div>`}renderBought(t){return t.length?r`<section class="rounded-lg bg-surface p-2 sm:p-3">
      <button type="button" class="flex w-full items-center gap-2 px-3 py-2 text-sm text-ink rounded-md hover:bg-hover"
        aria-expanded=${this.boughtExpanded} aria-controls="shopping-bought-items"
        @click=${()=>{this.boughtExpanded=!this.boughtExpanded}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d=${this.boughtExpanded?"m6 9 6 6 6-6":"m9 6 6 6-6 6"} /></svg>
        <span>Bought</span><span class="text-xs text-muted tabular-nums">${t.length}</span>
      </button>
      <ul id="shopping-bought-items" ?hidden=${!this.boughtExpanded} class="pt-1 pb-2">${this.boughtExpanded?t.map((e,i)=>this.renderItem(e,i)):c}</ul>
    </section>`:c}render(){const t=(h,u=this.sortMode)=>u==="az"?[...h].sort((p,m)=>p.name.localeCompare(m.name)):h,e=t(this.items.filter(h=>h.status==="shopping")),i=this.list==="grocery"?this.pantrySort??this.sortMode:this.sortMode,s=t(this.items.filter(h=>h.status==="pantry"),i),n=this.sortMode==="type"&&this.list==="grocery",o=this.list==="buy"?"To buy":"Shopping",a=this.list==="buy"?"Add something you want to get.":"Your shopping list is clear.",l=r`<button type="button"
      class="h-8 px-2 rounded-md text-xs font-medium text-muted hover:bg-hover hover:text-ink aria-pressed:bg-active aria-pressed:text-ink"
      aria-label="Sort Pantry by type" aria-pressed=${i==="type"}
      @click=${()=>this.setPantrySort(i==="type"?"az":"type")}
    >By type</button>`;return r`
      <div class="flex flex-col h-full min-h-0">
        <header class="w-full max-w-[35rem] mx-auto px-4 pt-2 shrink-0 flex flex-wrap items-center justify-between gap-x-3">
          <div class="flex items-center gap-5" role="tablist" aria-label="Shopping lists">
            ${["grocery","buy"].map(h=>r`<button
              type="button"
              role="tab"
              aria-selected=${this.list===h}
              class="px-0.5 py-3 border-b-2 text-sm transition-colors ${this.list===h?"text-ink font-semibold border-ink":"text-muted border-transparent hover:text-ink"}"
              @click=${()=>this.setList(h)}
            ><span class="tab-label" data-label=${h==="grocery"?"Grocery":"To buy"}>${h==="grocery"?"Grocery":"To buy"}</span></button>`)}
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
                    @click=${h=>{h.stopPropagation(),this.settingsOpen=!this.settingsOpen}}
                  >${this.gearIcon()}</button>
                  ${this.settingsOpen?this.renderSettings():c}
                </div>`:c}
          </div>
        </header>

        <div class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 pb-24" style="scrollbar-gutter:stable" aria-busy=${this.loading}>
          <div class="w-full max-w-[35rem] mx-auto space-y-4">
          ${this.error?r`<p role="alert" class="px-3 py-2 text-sm text-red-600">${this.error}</p>`:c}
          ${this.loading?r`<div class="h-24 rounded-lg bg-surface animate-pulse motion-reduce:animate-none" aria-label="Loading items"></div>`:r`
            ${n?this.renderSectionGrouped(o,e,a,!0):this.renderSection(o,e,a,!0)}
            ${this.list==="buy"?this.renderBought(s):s.length?i==="type"?this.renderSectionGrouped("Pantry",s,"",!1,l):this.renderSection("Pantry",s,"",!1,l):c}
          `}
          </div>
        </div>
      </div>
    `}};J.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];mt([d()],J.prototype,"items",2);mt([d()],J.prototype,"loading",2);mt([d()],J.prototype,"adding",2);mt([d()],J.prototype,"error",2);mt([d()],J.prototype,"boughtExpanded",2);mt([d()],J.prototype,"editingId",2);mt([d()],J.prototype,"editingExpiryId",2);mt([d()],J.prototype,"emojiPickerFor",2);mt([d()],J.prototype,"draftActive",2);mt([d()],J.prototype,"draftValue",2);mt([d()],J.prototype,"sortMode",2);mt([d()],J.prototype,"pantrySort",2);mt([d()],J.prototype,"settingsOpen",2);mt([d()],J.prototype,"expiryEnabled",2);mt([d()],J.prototype,"list",2);J=mt([w("grocery-section")],J);const jr=t=>String(t).padStart(2,"0"),Vp=()=>{const t=new Date;return`${t.getFullYear()}-${jr(t.getMonth()+1)}-${jr(t.getDate())}`};function Fl(t){if(!t)return null;const e=Math.round((Date.parse(Vp())-Date.parse(t))/864e5);return Number.isFinite(e)?Math.max(0,e):null}function ao(t,e){const i=Fl(t);return i===null||i>e}function lo(t){const e=Fl(t);return e===null?"on an unknown date":e===0?"today":e===1?"yesterday":`${e} days ago`}var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,yi=(t,e,i,s)=>{for(var n=s>1?void 0:s?Qp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Yp(e,i,n),n};const Fr=["idea","paused","shipped","archived"],Jp={idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},Ur=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`;let ze=class extends T{constructor(){super(...arguments),this.data=null,this.failed=!1,this.otherOpen=!1,this.search="",this.searchOpen=!1}connectedCallback(){super.connectedCallback(),this.reload()}get staleDays(){return this.data?.staleDays??14}async reload(){try{const t=await fetch("/api/projects");if(!t.ok)throw new Error(String(t.status));this.data=await t.json(),this.failed=!1}catch{this.failed=!this.data}}open(t){this.dispatchEvent(new CustomEvent("open-project",{detail:t,bubbles:!0,composed:!0}))}fits(t){const e=this.search.trim().toLowerCase();return e?[t.name,t.purpose,t.state?.goal].some(i=>(i??"").toLowerCase().includes(e)):!0}groups(){const t=this.data?.staleDays??14,e=(this.data?.projects??[]).filter(a=>this.fits(a)),i=a=>a.state.blockers.length?0:ao(a.state.updated,t)?1:2,s=e.filter(a=>a.state&&a.status!=="archived").sort((a,l)=>i(a)-i(l)||(l.state.updated??"").localeCompare(a.state.updated??"")||l.unread-a.unread||a.name.localeCompare(l.name)),n=e.filter(a=>!a.state&&a.status==="active").sort((a,l)=>l.unread-a.unread||a.name.localeCompare(l.name,void 0,{sensitivity:"base"})),o=e.filter(a=>!s.includes(a)&&!n.includes(a)).sort((a,l)=>Fr.indexOf(a.status??"")-Fr.indexOf(l.status??"")||a.name.localeCompare(l.name,void 0,{sensitivity:"base"}));return{withBlock:s,noBlock:n,other:o,staleDays:t,blocked:s.filter(a=>i(a)===0).length,stale:s.filter(a=>i(a)===1).length}}logo(t,e){return t.icon?r`<img src=${t.icon} alt="" loading="lazy" class="${e} rounded-md object-contain bg-surface border border-line shrink-0" />`:r`<span class="${e} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${t.name.charAt(0).toUpperCase()}</span>`}unreadPill(t){return t.unread?r`<span class="shrink-0 px-1.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-medium tabular-nums"
      title="${t.unread} unread handoff${t.unread===1?"":"s"}: its next agent session picks ${t.unread===1?"it":"them"} up">${t.unread} unread</span>`:c}statusTag(t){const e=t.status?Jp[t.status]:null;return e?r`<span class="shrink-0 px-1.5 rounded border border-line text-[10px] text-muted">${e}</span>`:c}renderCard(t,e){const i=t.state,s=ao(i.updated,e),[n,...o]=i.next;return r`
      <li data-row-key=${t.id!=null?`office:${t.id}`:t.key}>
        <button type="button" class="w-full text-left rounded-xl border bg-surface px-3.5 py-3 hover:bg-hover transition-colors ${i.blockers.length?"border-red-500/40":"border-line"}"
          @click=${()=>this.open(t)}>
          <span class="flex items-center gap-2.5">
            ${this.logo(t,"w-8 h-8")}
            <span class="flex-1 min-w-0 flex items-center gap-1.5">
              <span class="text-sm font-semibold text-ink truncate">${t.name}</span>
              ${this.statusTag(t)}
            </span>
            ${this.unreadPill(t)}
          </span>
          ${i.goal?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90 line-clamp-2">${i.goal}</span>`:c}
          ${i.blockers.map(a=>r`<span class="block mt-2 text-[13px] leading-snug text-red-500"><span class="font-semibold">Blocked:</span> ${a.text}</span>`)}
          ${n?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90"><span class="font-semibold text-ink">Next:</span> ${n.text}${o.length?r` <span class="text-muted whitespace-nowrap">+${o.length} more</span>`:c}</span>`:c}
          <span class="block mt-2 text-[11px] ${s?"text-warn":"text-muted"}">
            ${s?`Updated ${lo(i.updated)}: out of date, check before relying on it`:`Updated ${lo(i.updated)}${i.by?` by ${i.by}`:""}`}
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
      </li>`}renderDispatcher(){const t=this.data?.dispatcher;if(!t)return c;const e=t.since?new Date(t.since).toLocaleDateString(void 0,{day:"numeric",month:"short"}):null,i=t.since!=null&&Date.now()-t.since<12*6e4,s=t.paused?`Handoff dispatcher paused${e?` since ${e}`:""}.`:i?"Handoff dispatcher is on: it starts agents for unread handoffs every 5 minutes.":`Handoff dispatcher hasn't run${e?` since ${e}`:""}.`;return r`
      <p class="px-4 pt-2 pb-5 text-[11px] text-muted">
        ${s}
        ${t.paused?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!1)}>Resume</button>`:i?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!0)}>Pause</button>`:c}
      </p>`}async setPaused(t){if(!(!t&&!confirm("Resume the handoff dispatcher? Every 5 minutes it starts agents on the Air to answer unread handoffs."))){try{await fetch("/api/bus/pause",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({paused:t})})}catch{}await this.reload()}}openSearch(){this.searchOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector("#projects-search")?.focus())}renderHeader(t){const e=[];return t.blocked&&e.push(`${t.blocked} blocked`),t.stale&&e.push(`${t.stale} out of date`),t.noBlock.length&&e.push(`${t.noBlock.length} without a State block`),r`
      <header class="px-4 pt-3 pb-2 border-b border-line shrink-0">
        <div class="flex items-center gap-2 min-h-7">
          <h2 class="text-base font-semibold text-ink">Projects</h2>
          <span class="flex-1"></span>
          ${this.searchOpen?r`<span class="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-1.5 py-0.5 text-muted">
                ${Ur}
                <input id="projects-search" type="text" placeholder="Search projects" .value=${this.search}
                  class="w-36 bg-transparent text-xs text-ink outline-none placeholder:text-muted"
                  @input=${i=>{this.search=i.target.value}}
                  @keydown=${i=>{i.key==="Escape"&&(this.search="",this.searchOpen=!1)}} />
                <button type="button" title="Clear" class="hover:text-ink" @click=${()=>{this.search="",this.searchOpen=!1}}>✕</button>
              </span>`:r`<button type="button" title="Search" class="p-1.5 rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openSearch()}>${Ur}</button>`}
        </div>
        ${this.data&&!this.search?r`<p class="text-xs text-muted">${e.length?e.join(" · "):"Every project is up to date."}</p>`:c}
      </header>`}render(){if(!this.data)return r`<div class="flex-1 grid place-items-center text-xs text-muted">
        ${this.failed?r`<span>Couldn't load projects. <button type="button" class="underline hover:text-ink" @click=${()=>void this.reload()}>Try again</button></span>`:"Loading…"}
      </div>`;const t=this.groups(),e=this.otherOpen||!!this.search.trim(),i=this.search.trim()&&!t.withBlock.length&&!t.noBlock.length&&!t.other.length;return r`
      ${this.renderHeader(t)}
      <div class="flex-1 min-h-0 overflow-y-auto @container">
        ${i?r`<p class="px-4 py-8 text-center text-xs text-muted">No project matches "${this.search.trim()}".</p>`:c}
        ${t.withBlock.length?r`<ul class="px-3 pt-3 grid grid-cols-1 gap-2.5 @2xl:grid-cols-2 @5xl:grid-cols-3 items-start">${t.withBlock.map(s=>this.renderCard(s,t.staleDays))}</ul>`:c}
        ${t.noBlock.length?r`<section class="px-2 pt-5">
              <h3 class="px-2 text-xs font-medium text-ink">No State block yet · ${t.noBlock.length}</h3>
              <p class="px-2 pb-1 text-[11px] text-muted">One appears when an agent finishes a session in the project.</p>
              <ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${t.noBlock.map(s=>this.renderRow(s))}</ul>
            </section>`:c}
        ${t.other.length?r`<section class="px-2 pt-4">
              <button type="button" class="w-full flex items-center gap-1.5 px-2 py-1 text-xs text-muted hover:text-ink"
                @click=${()=>this.otherOpen=!this.otherOpen}>
                <span class="transition-transform ${e?"rotate-90":""}">›</span>
                Ideas, paused, shipped and archived · ${t.other.length}
              </button>
              ${e?r`<ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${t.other.map(s=>this.renderRow(s,!0))}</ul>`:c}
            </section>`:c}
        ${this.renderDispatcher()}
      </div>`}};yi([d()],ze.prototype,"data",2);yi([d()],ze.prototype,"failed",2);yi([d()],ze.prototype,"otherOpen",2);yi([d()],ze.prototype,"search",2);yi([d()],ze.prototype,"searchOpen",2);ze=yi([w("projects-list")],ze);const co=new Map,$n=new Map;function Fs(t){return co.get(t)}function Ul(t){const e=co.get(t);if(e!=null)return Promise.resolve(e);let i=$n.get(t);return i||(i=fetch(`/api/inbox/${t}`).then(s=>s.ok?s.json():null).then(s=>{const n=s?.message.body??null;return n!=null&&co.set(t,n),n}).catch(()=>null).finally(()=>$n.delete(t)),$n.set(t,i)),i}var Xp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,_t=(t,e,i,s)=>{for(var n=s>1?void 0:s?Zp(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Xp(e,i,n),n};const tm=["active","idea","paused","shipped","archived"],em={active:"Active",idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},im={active:"bg-emerald-500",idea:"bg-sky-400",paused:"bg-amber-500",shipped:"bg-violet-400",archived:"bg-zinc-500"},Br=512*1024,sm=8;let kt=class extends T{constructor(){super(...arguments),this.staleDays=14,this.detail=null,this.failed=!1,this.app=null,this.docsOpen=!1,this.docsLoaded=!1,this.openDoc=null,this.openHandoff=null,this.allHandoffs=!1,this.editingField=null,this.changed=!1}connectedCallback(){super.connectedCallback(),this.load()}updated(){if(!this.editingField)return;const t=this.renderRoot,e=t.querySelector("[data-editing]");e&&t.activeElement!==e&&(e.focus(),e.select())}async load(){const t=this.project.key,e=fetch(`/api/projects/detail?key=${encodeURIComponent(t)}`).then(i=>i.ok?i.json():Promise.reject(new Error(String(i.status)))).then(i=>{this.project.key===t&&(this.detail=i,this.failed=!1)}).catch(()=>{this.project.key===t&&!this.detail&&(this.failed=!0)});await Promise.all([e,this.loadApp()])}async loadApp(){const t=this.project.id;if(t!=null)try{const e=await fetch("/api/office?lean=1");if(!e.ok)return;const i=(await e.json()).apps.find(s=>s.id===t)??null;if(this.project.id!==t)return;this.app=i&&this.docsLoaded&&this.app?{...i,docs:this.app.docs}:i}catch{}}async loadDocs(){const t=this.project.id;if(!(t==null||this.docsLoaded))try{const e=await fetch(`/api/office/${t}`);if(!e.ok)return;const{app:i}=await e.json();this.project.id===t&&this.app&&(this.app={...this.app,docs:i.docs},this.docsLoaded=!0)}catch{}}close(){this.dispatchEvent(new CustomEvent("close-project",{detail:{changed:this.changed},bubbles:!0,composed:!0}))}async patch(t){this.app&&(await fetch(`/api/office/${this.app.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.changed=!0,await this.loadApp())}async removeApp(){const t=this.app;!t||!confirm(`Remove ${t.name} from Projects? Its note and State block stay in the vault.`)||(await fetch(`/api/office/${t.id}`,{method:"DELETE"}),this.changed=!0,this.close())}async onLogoFile(t){const e=t.target,i=e.files?.[0];if(e.value="",!i)return;if(!i.type.startsWith("image/")){alert("Please choose an image file.");return}if(i.size>Br){alert(`Image is too large (max ${Math.round(Br/1024)}KB).`);return}const s=await new Promise((n,o)=>{const a=new FileReader;a.onload=()=>n(a.result),a.onerror=()=>o(a.error),a.readAsDataURL(i)});await this.patch({icon:s})}renderItem(t,e){const i=t.proof&&/^https?:\/\/\S+$/.test(t.proof)?t.proof:null;return r`
      <li class="flex gap-2.5">
        <span class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${e==="blocker"?"bg-red-500":"bg-ink/30"}"></span>
        <div class="min-w-0 flex-1">
          <p class="text-sm leading-snug ${e==="blocker"?"text-red-500":"text-ink"}">${t.text}</p>
          ${t.why?r`<p class="mt-0.5 text-xs text-muted">Why: ${t.why}</p>`:c}
          ${t.status==="verified"?r`<p class="mt-0.5 text-[11px] text-emerald-600">✓ Verified${t.proof?r`: ${i?r`<a class="underline underline-offset-2" href=${i} target="_blank" rel="noopener">${t.proof}</a>`:t.proof}`:c}</p>`:e!=="next"&&t.status==="intended"?r`<p class="mt-0.5 text-[11px] text-muted">Not verified yet</p>`:c}
        </div>
      </li>`}renderSection(t,e,i){return e.length?r`
      <section class="space-y-2">
        <h4 class="text-[11px] font-medium uppercase tracking-wide ${i==="blocker"?"text-red-500":"text-muted"}">${t}</h4>
        <ul class="space-y-2.5">${e.map(s=>this.renderItem(s,i))}</ul>
      </section>`:c}renderState(){if(!this.detail)return r`<p class="text-xs text-muted">${this.failed?r`Couldn't load this project. <button type="button" class="underline hover:text-ink" @click=${()=>void this.load()}>Try again</button>`:"Loading…"}</p>`;const t=this.detail.state;if(!t)return r`
        <div class="rounded-xl border border-dashed border-line px-4 py-4">
          <p class="text-sm text-ink">No State block yet.</p>
          <p class="mt-1 text-xs text-muted">When an agent finishes a session in ${this.project.name}, it writes one here: the goal, what was decided and ruled out, blockers and next steps.</p>
        </div>`;const e=ao(t.updated,this.staleDays),i=[...t.decided,...t.ruled_out,...t.blockers],s=i.filter(n=>n.status==="verified").length;return r`
      <div class="space-y-5">
        <div>
          <p class="text-xs ${e?"text-warn":"text-muted"}">
            Updated ${lo(t.updated)}${t.by?` by ${t.by}`:""}${t.where&&t.where!==this.project.name?` in ${t.where}`:""}${e?". Out of date: check it before relying on it.":""}
          </p>
          ${i.length?r`<p class="text-[11px] text-muted">${s} of ${i.length} decisions and blockers verified with proof.</p>`:c}
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
      </div>`}fmtTime(t){return new Date(t*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}toggleHandoff(t){if(this.openHandoff===t){this.openHandoff=null;return}this.openHandoff=t,Fs(t)==null&&Ul(t).then(()=>this.requestUpdate())}renderHandoff(t){const e=this.openHandoff===t.id,i=t.inbound&&t.read_at==null,s=t.inbound?t.from_agent:t.to_agent;return r`
      <div data-row-key=${`message:${t.id}`}>
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-hover" @click=${()=>this.toggleHandoff(t.id)}>
          <span class="font-mono shrink-0 ${t.inbound?"text-ink":"text-muted"}" title=${t.inbound?`From ${s}`:`To ${s}`}>${t.inbound?"←":"→"} ${s}</span>
          <span class="flex-1 min-w-0 truncate ${i?"text-ink font-medium":"text-muted"}">${t.subject||"(no subject)"}</span>
          ${i?r`<span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0" title="Unread"></span>`:c}
          <span class="text-[10px] text-muted shrink-0">${this.fmtTime(t.created_at)}</span>
        </button>
        ${e?r`<pre class="px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-bg border-t border-line max-h-72 overflow-y-auto">${Fs(t.id)??"Loading…"}</pre>`:c}
      </div>`}renderHandoffs(){const t=this.detail;if(!t)return c;const e=this.project.unread,i=this.allHandoffs?t.messages:t.messages.slice(0,sm);return r`
      <section class="space-y-2">
        <h3 class="text-xs font-medium text-ink">Handoffs${e?r` <span class="text-muted font-normal">· ${e} unread</span>`:c}</h3>
        ${t.messages.length===0?r`<p class="text-xs text-muted">None yet. Messages agents send to ${this.project.name}, or that it sends, show here.</p>`:r`
              ${e?r`<p class="text-[11px] text-muted">Unread ones wait for the next agent session in ${this.project.name}.</p>`:c}
              <div class="rounded-lg border border-line overflow-hidden divide-y divide-line/60">${i.map(s=>this.renderHandoff(s))}</div>
              ${t.messages.length>i.length?r`<button type="button" class="text-xs text-muted hover:text-ink underline underline-offset-2" @click=${()=>this.allHandoffs=!0}>Show ${t.messages.length-i.length} more</button>`:t.more?r`<p class="text-[11px] text-muted">${t.more} older not shown.</p>`:c}
            `}
      </section>`}renderLogo(t){const e=this.app?.icon??this.project.icon;return e?r`<img src=${e} alt="" class="${t} rounded-md object-contain bg-surface border border-line shrink-0" loading="lazy" />`:r`<span class="${t} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${this.project.name.charAt(0).toUpperCase()}</span>`}commitEdit(t,e,i){this.editingField=null;const s=i.trim();s!==(e??"")&&(t==="name"&&!s||this.patch({[t]:s||null}))}editableText(t,e,i){return this.editingField===t?r`<input data-editing type="text"
        class="w-full px-1.5 py-0.5 text-sm bg-surface border border-ink/50 rounded focus:outline-none"
        .value=${e??""}
        @keydown=${s=>{s.key==="Enter"?s.target.blur():s.key==="Escape"&&(this.editingField=null)}}
        @blur=${s=>this.commitEdit(t,e,s.target.value)} />`:r`
      <button type="button" class="group/e w-full flex items-start gap-1.5 text-left rounded -mx-1.5 px-1.5 py-0.5 hover:bg-hover ${i.display}"
        @click=${()=>this.editingField=t}>
        <span class="flex-1 min-w-0 ${i.truncate===!1?"break-words":"truncate"} ${e?"":"text-muted/60 font-normal italic"}">${e||i.placeholder||"Add"}</span>
        ${i.link?r`<a href=${i.link} target="_blank" rel="noopener" class="shrink-0 text-muted hover:text-ink" title="Open" @click=${s=>s.stopPropagation()}>↗</a>`:c}
        <span class="shrink-0 text-[11px] text-muted opacity-0 group-hover/e:opacity-60">✎</span>
      </button>`}metaRow(t,e){return r`<dt class="text-[11px] text-muted pt-1.5">${t}</dt><dd class="min-w-0 py-0.5">${e}</dd>`}statusControl(t){return r`
      <div class="relative inline-block">
        <span class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${im[t.status]}"></span>
        <select class="appearance-none bg-surface border border-line rounded-full pl-6 pr-7 py-1 text-xs text-ink hover:bg-hover focus:outline-none focus:border-ink cursor-pointer"
          title="Status"
          @change=${e=>void this.patch({status:e.target.value})}>
          ${tm.map(e=>r`<option value=${e} ?selected=${t.status===e}>${em[e]}</option>`)}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted">▾</span>
      </div>`}renderDocs(t){const e=t.docs??[];if(!e.length)return c;const i=e.find(s=>s.file===this.openDoc&&s.content!=null)??null;return r`
      <section class="space-y-2">
        <button type="button" class="flex items-center gap-1.5 text-xs font-medium text-ink hover:text-ink/80"
          @click=${()=>{this.docsOpen=!this.docsOpen,this.docsOpen&&this.loadDocs()}}>
          <span class="text-muted transition-transform ${this.docsOpen?"rotate-90":""}">›</span>
          Docs the agents read <span class="text-muted font-normal">· ${e.length}</span>
        </button>
        ${this.docsOpen?this.docsLoaded?r`
                <div class="grid grid-cols-2 @xl:grid-cols-3 gap-2">
                  ${e.map(s=>{const n=s.content!=null,o=this.openDoc===s.file;return r`<button type="button" ?disabled=${!n}
                      class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-left text-xs min-w-0 ${o?"border-ink bg-hover":"border-line hover:bg-hover"} ${n?"":"opacity-60 cursor-default"}"
                      @click=${n?()=>this.openDoc=o?null:s.file:void 0}>
                      <span class="shrink-0 text-muted ${n?`transition-transform ${o?"rotate-90":""}`:""}">${n?"›":"·"}</span>
                      <span class="font-mono text-ink truncate">${s.file}</span>
                    </button>`})}
                </div>
                ${i?r`<pre class="rounded-lg border border-line bg-bg px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words max-h-80 overflow-y-auto">${i.content}</pre>`:c}
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
      </div>`}};_t([b({attribute:!1})],kt.prototype,"project",2);_t([b({type:Number})],kt.prototype,"staleDays",2);_t([d()],kt.prototype,"detail",2);_t([d()],kt.prototype,"failed",2);_t([d()],kt.prototype,"app",2);_t([d()],kt.prototype,"docsOpen",2);_t([d()],kt.prototype,"docsLoaded",2);_t([d()],kt.prototype,"openDoc",2);_t([d()],kt.prototype,"openHandoff",2);_t([d()],kt.prototype,"allHandoffs",2);_t([d()],kt.prototype,"editingField",2);_t([V("#logo-file")],kt.prototype,"logoInput",2);kt=_t([w("project-detail")],kt);var nm=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Fo=(t,e,i,s)=>{for(var n=s>1?void 0:s?om(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&nm(e,i,n),n};let Us=class extends T{constructor(){super(...arguments),this.open=null}onClose(t){this.open=null,t.detail?.changed&&this.list?.reload()}render(){return r`
      <projects-list class="${this.open?"hidden":"flex"} flex-col h-full"
        @open-project=${t=>this.open=t.detail}></projects-list>
      ${this.open?r`<project-detail class="flex flex-col h-full" .project=${this.open} .staleDays=${this.list?.staleDays??14}
            @close-project=${t=>this.onClose(t)}></project-detail>`:c}
    `}};Fo([d()],Us.prototype,"open",2);Fo([V("projects-list")],Us.prototype,"list",2);Us=Fo([w("office-section")],Us);var rm=Object.defineProperty,am=Object.getOwnPropertyDescriptor,xi=(t,e,i,s)=>{for(var n=s>1?void 0:s?am(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&rm(e,i,n),n};let qe=class extends T{constructor(){super(...arguments),this.embedded=!1,this.messages=[],this.activity=null,this.loading=!0,this.openId=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}async refresh(){try{const[t,e]=await Promise.all([fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);t.ok&&(this.messages=(await t.json()).messages),e.ok&&(this.activity=await e.json())}catch{}this.loading=!1}async markRead(t){await fetch(`/api/inbox/${t}/read`,{method:"POST"}),await this.refresh()}toggle(t){if(this.openId===t){this.openId=null;return}this.openId=t,Fs(t)==null&&Ul(t).then(()=>this.requestUpdate())}stateOf(t){const e=this.activity;return e?.quarantined.some(i=>i.id===String(t.id))?"quarantined":t.read_at!=null?"done":e?.live.includes(t.to_agent)?"working":"pending"}fmtTime(t){return new Date(t*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}ago(t){if(t==null)return"—";const e=Math.max(0,Math.floor((Date.now()-t)/1e3));return e<60?`${e}s`:e<3600?`${Math.floor(e/60)}m`:e<86400?`${Math.floor(e/3600)}h`:`${Math.floor(e/86400)}d`}renderStrip(){const t=this.activity;if(!t)return c;const e=t.live.length,i=e>0?{cls:"bg-emerald-500 animate-pulse",label:`${e} agent${e>1?"s":""} working now`}:t.stale?{cls:"bg-amber-500",label:"Dispatcher idle (no tick in 12m+)"}:{cls:"bg-ink/30",label:"Idle — waiting for the next tick"},s=this.messages.filter(n=>n.read_at==null).length;return r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${i.cls}"></span>
        <span class="text-xs text-ink font-medium">${i.label}</span>
        ${e>0?r`<span class="text-[11px] text-muted font-mono">${t.live.join(", ")}</span>`:c}
        <span class="ml-auto text-[11px] text-muted">
          ${s} pending · last tick ${this.ago(t.lastTickAt)} ago
          ${t.quarantined.length>0?r`· <span class="text-amber-600">${t.quarantined.length} quarantined</span>`:c}
        </span>
      </div>
    `}renderBadge(t){const i={pending:{label:"pending",cls:"bg-bg text-muted border border-line"},working:{label:"working",cls:"bg-amber-100 text-amber-700",pulse:!0},done:{label:"done",cls:"bg-emerald-50 text-emerald-700"},quarantined:{label:"quarantined",cls:"bg-red-100 text-red-700"}}[t];return r`<span class="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${i.cls}">
      ${i.pulse?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>`:c}${i.label}
    </span>`}renderRun(t){const e=this.activity?.handled[String(t.id)];if(!e)return c;const i=e.durationMs!=null?`${Math.round(e.durationMs/1e3)}s`:null,s=e.batchedWith.length?` · with ${e.batchedWith.map(n=>`#${n}`).join(", ")}`:"";return r`
      <div class="mt-2 flex items-start gap-2 px-2.5 py-1.5 bg-surface border-l-2 border-emerald-400 text-[11px] text-muted">
        <span class="mt-px text-emerald-600">⊙</span>
        <span class="flex-1 min-w-0">
          Answered by a read-only agent · ${this.ago(e.at)} ago${i?` · ${i}`:""}${e.exit!=null&&e.exit!==0?` · exit ${e.exit}`:""}${s}
          ${e.summary?r`<span class="block mt-1 text-ink/70 line-clamp-3 break-words">${e.summary}</span>`:c}
        </span>
      </div>
    `}renderMessage(t){const e=this.openId===t.id,i=this.stateOf(t),s=t.read_at==null;return r`
      <li data-row-key=${`message:${t.id}`} class="last:[&_.row-divider]:border-b-0">
        <button
          type="button"
          class="group w-full flex items-start gap-3 pl-3 text-left hover:bg-hover"
          @click=${()=>this.toggle(t.id)}
        >
          <span class="mt-2.5 shrink-0">${this.renderBadge(i)}</span>
          <span class="row-divider flex-1 min-w-0 flex items-start gap-3 py-2.5 mr-4 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="flex items-center gap-1.5 text-xs text-muted">
                <span class="font-mono text-ink">${t.from_agent}</span>
                <span>→</span>
                <span class="font-mono text-ink">${t.to_agent}</span>
                <span class="ml-auto shrink-0">${this.fmtTime(t.created_at)}</span>
              </span>
              <span class="block text-sm mt-0.5 truncate ${s?"text-ink font-medium":"text-muted"}">${t.subject||"(no subject)"}</span>
            </span>
            <span class="shrink-0 mt-0.5 text-muted transition-transform ${e?"rotate-90":"opacity-0 group-hover:opacity-100"}">›</span>
          </span>
        </button>
        ${e?r`
              <div class="px-4 pb-3">
                <pre class="text-[12px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-surface border border-line rounded p-3 max-h-96 overflow-y-auto">${Fs(t.id)??"Loading…"}</pre>
                ${this.renderRun(t)}
                ${s?r`<button
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
        <ul>${e.map(i=>this.renderMessage(i))}</ul>
      </section>
    `}render(){const t=this.messages.filter(i=>i.read_at==null),e=this.messages.filter(i=>i.read_at!=null);return r`
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
    `}};xi([b({type:Boolean})],qe.prototype,"embedded",2);xi([d()],qe.prototype,"messages",2);xi([d()],qe.prototype,"activity",2);xi([d()],qe.prototype,"loading",2);xi([d()],qe.prototype,"openId",2);qe=xi([w("inbox-section")],qe);var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,en=(t,e,i,s)=>{for(var n=s>1?void 0:s?cm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&lm(e,i,n),n};const dm=86400,hm=5e3;function Hr(t){if(!t)return{type:"none"};try{return JSON.parse(t)}catch{return{type:"none"}}}function um(t){return t.label?t.label:t.type==="agent"?"Hand to an agent":t.type==="note"?"Open the note":t.type==="none"?"Got it":"Open"}function pm(t){if(t.from)return t.from;const e=t.source.replace(/[-_]+/g," ").trim();return e?e.charAt(0).toUpperCase()+e.slice(1):"Mana"}function mm(t){const i=Math.floor(Date.now()/1e3)-t;if(i<60)return"Just now";if(i<3600)return`${Math.floor(i/60)}m ago`;const s=new Date;s.setHours(0,0,0,0);const n=Math.floor(s.getTime()/1e3);return t>=n?`${Math.floor(i/3600)}h ago`:t>=n-dm?"Yesterday":new Date(t*1e3).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}function fm(t,e){t.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"canvas"},bubbles:!0,composed:!0}));const i=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:e,ack:()=>{o=!0}}})),o};if(i())return;const s=performance.now(),n=()=>{!i()&&performance.now()-s<4e3&&setTimeout(n,100)};setTimeout(n,50)}let Hi=class extends T{constructor(){super(...arguments),this.store=new Ga(this,f,t=>({items:t.notifications,unread:t.notificationsUnread})),this.loaded=!1,this.aboutOpen=!1,this.handed=[],this.fresh=new Set,this.onVisible=()=>this.markSeenSoon()}connectedCallback(){super.connectedCallback(),this.loaded=f.getState().notifications.length>0,f.getState().loadNotifications().finally(()=>{this.loaded=!0}),document.addEventListener("visibilitychange",this.onVisible)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.seenTimer&&clearTimeout(this.seenTimer)}willUpdate(){for(const t of f.getState().notifications)t.read_at==null&&this.fresh.add(t.id)}updated(){this.markSeenSoon()}markSeenSoon(){this.seenTimer||document.visibilityState!=="visible"||f.getState().notificationsUnread!==0&&(this.seenTimer=setTimeout(()=>{this.seenTimer=void 0,this.isConnected&&document.visibilityState==="visible"&&f.getState().markAllNotificationsRead()},800))}act(t){const e=Hr(t.action);if(e.type==="agent")this.handed=[...this.handed,{row:t,to:e.to}],setTimeout(()=>{this.handed=this.handed.filter(i=>i.row.id!==t.id)},hm);else if(e.type==="url")window.open(e.href,"_blank","noopener");else if(e.type==="note")fm(this,e.file);else if(e.type==="persona"||e.type==="mode"){if(t.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}const i=e.type==="persona"?{persona:e.persona}:{mode:e.mode};this.dispatchEvent(new CustomEvent("notif-navigate",{detail:i,bubbles:!0,composed:!0}))}f.getState().actOnNotification(t.id)}dismiss(t){f.getState().dismissNotification(t)}render(){const t=this.store.state.notifications,e=new Set(this.handed.map(s=>s.row.id)),i=[...t.filter(s=>!e.has(s.id)),...this.handed.map(s=>s.row)].sort((s,n)=>n.created_at-s.created_at||n.id-s.id);return r`
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
        ${i.length===0?this.loaded?r`<div class="px-4 py-12 text-center text-sm text-muted">You're all caught up.</div>`:c:r`<ul class="px-2 pb-4 space-y-0.5">${i.map(s=>this.renderCard(s))}</ul>`}
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
      `}const i=Hr(t.action),s=this.fresh.has(t.id);return r`
      <li class="group relative flex items-start gap-2.5 px-3 py-3 rounded-lg hover:bg-hover">
        <span
          class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${s?"bg-blue-500":"bg-transparent"}"
          aria-label=${s?"New":c}
        ></span>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-ink leading-snug pr-6">${t.title}</p>
          ${t.body?r`<p class="text-xs text-muted mt-1 leading-snug whitespace-pre-line line-clamp-4">${t.body}</p>`:c}
          <div class="flex items-center justify-between gap-3 mt-1.5">
            <span class="text-[11px] text-muted truncate">${pm(t)} · ${mm(t.created_at)}</span>
            <button
              type="button"
              class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
              @click=${()=>this.act(t)}
            >${um(i)}</button>
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
    `}};en([d()],Hi.prototype,"loaded",2);en([d()],Hi.prototype,"aboutOpen",2);en([d()],Hi.prototype,"handed",2);Hi=en([w("notifications-section")],Hi);let as;function gm(t){as?.();const{anchor:e}=t,i=document.createElement("div");i.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(e).fontFamily,i.style.width=`${Math.min(232,window.innerWidth-16)}px`,i.style.maxHeight=`${window.innerHeight-16}px`,i.setAttribute("role","menu"),i.setAttribute("aria-label",`Options for ${t.label}`),document.body.appendChild(i);let s=!1,n=!1,o="";const a=(x=!1)=>{n||(n=!0,document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",g,!0),window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",p),xt(c,i),i.remove(),as===l&&(as=void 0),t.onClose(),x&&e.isConnected&&e.focus({preventScroll:!0}))},l=()=>a();as=l;const h=x=>{!x.composedPath().includes(i)&&!x.composedPath().includes(e)&&a()},u=x=>{(!(x.target instanceof Node)||!i.contains(x.target))&&a()},p=()=>a(),m=()=>i.querySelector("button")?.focus({preventScroll:!0}),g=x=>{if(x.key==="Escape")x.preventDefault(),x.stopPropagation(),a(!0);else if(x.key==="Tab")a(!0);else if(i.contains(document.activeElement)&&["ArrowDown","ArrowUp","Home","End"].includes(x.key)){x.preventDefault();const N=[...i.querySelectorAll("button:not(:disabled)")],Z=N.indexOf(document.activeElement),Ft=x.key==="Home"?0:x.key==="End"?N.length-1:(Z+(x.key==="ArrowUp"?-1:1)+N.length)%N.length;N[Ft]?.focus()}},v=async()=>{if(!s){s=!0,o="",D();try{await t.onToggle(),a(!0)}catch{n||(s=!1,o="Could not update the sidebar. Please try again.",D(),m())}}},y=()=>{const x=e.getBoundingClientRect(),N=i.getBoundingClientRect();if(t.position){i.style.left=`${Math.max(8,Math.min(t.position.x,window.innerWidth-N.width-8))}px`,i.style.top=`${Math.max(8,Math.min(t.position.y,window.innerHeight-N.height-8))}px`;return}const Z=x.bottom+6+N.height>window.innerHeight-8?x.top-N.height-6:x.bottom+6;i.style.left=`${Math.max(8,Math.min(x.right-N.width,window.innerWidth-N.width-8))}px`,i.style.top=`${Math.max(8,Math.min(Z,window.innerHeight-N.height-8))}px`},D=()=>{xt(r`
      ${t.onArrange?r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        @click=${()=>{t.onArrange?.(),a(!0)}}>Arrange apps</button>`:c}
      <button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        ?disabled=${s} @click=${()=>void v()}>${t.pinned?"Remove from sidebar":"Pin to sidebar"}</button>
      ${o?r`<p role="alert" class="px-3 pt-2 text-sm text-red-600">${o}</p>`:c}
    `,i),y()};return D(),document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",g,!0),window.addEventListener("scroll",u,!0),window.addEventListener("resize",p),m(),l}var bm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,ts=(t,e,i,s)=>{for(var n=s>1?void 0:s?vm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&bm(e,i,n),n};let ui=class extends T{constructor(){super(...arguments),this.heldUntil=0,this.saving=!1,this.editing=!1,this.error="",this.announcement="",this.drag=new jo(this,{type:"text/x-mana-tool-index",axis:"x",hitTest:(t,e)=>{for(const i of this.renderRoot.querySelectorAll("[data-tool-index]")){const s=i.getBoundingClientRect();if(t>=s.left&&t<=s.right&&e>=s.top&&e<=s.bottom){const n=Number(i.dataset.toolIndex);return{id:n,index:n,rect:s}}}return null},onReorder:(t,e)=>this.reorder(t,e)})}visibleTools(){return f.getState().tools.filter(t=>this.placeable(t))}async reorder(t,e){if(this.saving)return;const i=this.visibleTools(),s=i[t];if(!s)return;const n=i.filter(a=>a.name!==s.name),o=Math.max(0,Math.min(n.length,e-(t<e?1:0)));this.saving=!0,this.error="";try{await f.getState().reorderTool(s.name,n[o]?.name??null),this.announcement=`${s.label||s.name} moved to position ${o+1}`,this.saving=!1,await this.updateComplete,Array.from(this.renderRoot.querySelectorAll("a[data-tool-name]")).find(a=>a.dataset.toolName===s.name)?.focus()}catch{this.error="Could not save the tool order. Please try again."}finally{this.saving=!1}}moveWithKey(t,e){const i=getComputedStyle(this.renderRoot.querySelector("[data-tools-grid]")).gridTemplateColumns.split(" ").length,s=t.key==="ArrowLeft"?-1:t.key==="ArrowRight"?1:t.key==="ArrowUp"?-i:t.key==="ArrowDown"?i:0;if(!s)return;t.preventDefault();const n=Math.max(0,Math.min(this.visibleTools().length-1,e+s));n!==e&&this.reorder(e,n>e?n+1:n)}connectedCallback(){super.connectedCallback(),f.getState().loadTools(),this.unsub=j(this,f,t=>t.tools)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.cancelPress?.(),this.dismissMenu?.()}placeable(t){return t.type!=="view"||!!t.panel}async toggle(t){if(this.saving)return;this.saving=!0,this.error="";const e=t.placement==="cockpit"?"standalone":"cockpit";try{await f.getState().setToolPlacement(t.name,e)}finally{this.saving=!1,await this.updateComplete}}showMenu(t,e){this.dismissMenu?.(),this.dismissMenu=gm({label:t.label||t.name,pinned:t.placement==="cockpit",anchor:e.currentTarget,position:e instanceof MouseEvent&&e.type==="contextmenu"&&(e.clientX||e.clientY)?{x:e.clientX,y:e.clientY}:void 0,onToggle:()=>this.toggle(t),onArrange:()=>{this.editing=!0},onClose:()=>{this.dismissMenu=void 0}})}onIconPress(t,e){if(this.saving||t.button!==0)return;this.cancelPress?.();const i=t.currentTarget.closest("a");if(this.editing){this.drag.onPointerDown(t,e,i);return}const s=()=>{clearTimeout(o),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),this.cancelPress=void 0},n=a=>{a.pointerId===t.pointerId&&Math.hypot(a.clientX-t.clientX,a.clientY-t.clientY)>8&&s()},o=setTimeout(()=>{s(),this.dismissMenu?.(),this.editing=!0,this.heldUntil=Date.now()+1e3,this.announcement="Arrange apps. Drag an icon or use the arrow keys. Choose Done when finished.",this.drag.onPointerDown(t,e,i)},450);this.cancelPress=s,window.addEventListener("pointermove",n),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}render(){const t=this.visibleTools();return r`
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
            ${t.map((e,i)=>this.tile(e,i))}
          </div>
        </div>
      </div>
    `}tile(t,e){const i=Va(t),s=t.label||t.name,n={notify:"red",goals:"orange",circle:"indigo",finance:"green","been-to":"teal",grocery:"blue",members:"pink",learn:"violet",office:"slate",publisher:"teal"};return r`
      <div class="mana-launcher-tile ${this.drag.dropClass(e)}" data-tool-index=${e}>
        <a href=${i||t.target}
          class="mana-launcher-app" aria-label=${this.editing?`Reorder ${s}`:s} draggable="false" data-tool-name=${t.name}
          aria-description=${this.editing?"Drag the icon or use arrow keys to move.":"Press and hold to arrange apps. Right-click for sidebar options."}
          @keydown=${o=>{this.editing&&this.moveWithKey(o,e)}}
          @contextmenu=${o=>{o.preventDefault(),this.cancelPress?.(),Date.now()>this.heldUntil&&this.showMenu(t,o)}}
          @click=${o=>{this.editing&&o.preventDefault()}}>
          <span class="mana-launcher-icon" data-colour=${n[t.name]||"blue"} @pointerdown=${o=>this.onIconPress(o,e)}>
            <sc-icon name="lucide-${t.icon||"layout-grid"}"></sc-icon>
          </span>
          <span class="mana-launcher-label">${s}
            ${i?c:r`<sc-icon name="lucide-external-link" class="w-3 h-3 align-middle"></sc-icon>`}
          </span>
        </a>

      </div>
    `}};ts([d()],ui.prototype,"saving",2);ts([d()],ui.prototype,"editing",2);ts([d()],ui.prototype,"error",2);ts([d()],ui.prototype,"announcement",2);ui=ts([w("tools-launcher")],ui);var ym=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,Uo=(t,e,i,s)=>{for(var n=s>1?void 0:s?xm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&ym(e,i,n),n};let Bs=class extends T{constructor(){super(...arguments),this.config=null,this.height="200px",this.chart=null,this.gen=0}render(){return r`<div style="position:relative;height:${this.height};width:100%"><canvas></canvas></div>`}async updated(){const t=++this.gen,e=this.querySelector("canvas");if(!e||(this.chart&&(this.chart.destroy(),this.chart=null),!this.config))return;const{Chart:i}=await Lt(async()=>{const{Chart:s}=await import("./auto-DhYMk4xX.js");return{Chart:s}},[]);t!==this.gen||!this.isConnected||(this.chart=new i(e,this.config))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};Uo([b({attribute:!1})],Bs.prototype,"config",2);Uo([b({type:String})],Bs.prototype,"height",2);Bs=Uo([w("finance-chart")],Bs);var wm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,ie=(t,e,i,s)=>{for(var n=s>1?void 0:s?km(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&wm(e,i,n),n};const $m=240,Sm=160;let qt=class extends T{constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this.flipUp=!1,this._onDoc=t=>{this.open&&!this.contains(t.target)&&this.close()},this._onReflow=t=>{this.open&&(t&&t.target instanceof Node&&this.contains(t.target)||this.close())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0)}close(){this.open=!1,this.q=""}toggle(t){if(t.stopPropagation(),this.open){this.close();return}const e=t.currentTarget.getBoundingClientRect(),i=window.innerWidth,n=window.innerHeight-e.bottom,o=e.top;this.flipUp=n<$m+8&&o>n,this.py=this.flipUp?Math.max(8,e.top-4):e.bottom+4,this.px=Math.max(8,Math.min(e.left,i-Sm-8)),this.open=!0}pick(t){this.value=t,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:t,bubbles:!0,composed:!0}))}updated(){this.open&&!window.matchMedia("(pointer: coarse)").matches&&this.querySelector("input.cs-search")?.focus()}render(){const t=this.q.trim().toUpperCase(),e=this.options.length?this.options:this.saved,i=t?e.filter(s=>s.includes(t)):[...this.saved.filter(s=>e.includes(s)),...e.filter(s=>!this.saved.includes(s))];return r`
      <input type="hidden" name=${this.name} .value=${this.value} />
      <button type="button" class="inline-flex h-8 items-center gap-1 px-2 text-xs uppercase bg-surface border border-line rounded hover:border-ink"
        @click=${s=>this.toggle(s)}>${this.value||"—"} <span class="text-[8px] text-muted">▾</span></button>
      ${this.open?r`<div class="rounded-lg border border-line bg-surface shadow-lg w-40"
            style="position:fixed;left:${this.px}px;${this.flipUp?`bottom:${window.innerHeight-this.py}px`:`top:${this.py}px`};z-index:50"
            @click=${s=>s.stopPropagation()}>
            <input type="text" class="cs-search w-full px-2 py-1.5 text-xs border-b border-line bg-bg focus:outline-none" placeholder="Search currency…"
              .value=${this.q} @input=${s=>{this.q=s.target.value}}
              @keydown=${s=>{s.key==="Enter"?(s.preventDefault(),i[0]&&this.pick(i[0])):s.key==="Escape"&&this.close()}} />
            <div class="max-h-52 overflow-y-auto py-1">
              ${i.length?i.map(s=>r`<button type="button"
                    class="flex w-full items-center justify-between px-3 py-1.5 text-sm hover:bg-hover ${s===this.value?"font-semibold text-ink":"text-ink"}"
                    @click=${()=>this.pick(s)}><span>${s}</span>${this.saved.includes(s)?r`<span class="text-[9px] text-muted">saved</span>`:c}</button>`):r`<div class="px-3 py-2 text-xs text-muted">No match</div>`}
            </div>
          </div>`:c}
    `}};ie([b({type:String})],qt.prototype,"value",2);ie([b({type:String})],qt.prototype,"name",2);ie([b({attribute:!1})],qt.prototype,"options",2);ie([b({attribute:!1})],qt.prototype,"saved",2);ie([d()],qt.prototype,"open",2);ie([d()],qt.prototype,"q",2);ie([d()],qt.prototype,"px",2);ie([d()],qt.prototype,"py",2);ie([d()],qt.prototype,"flipUp",2);qt=ie([w("currency-select")],qt);var Tm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,P=(t,e,i,s)=>{for(var n=s>1?void 0:s?Cm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Tm(e,i,n),n};const Em=["expenses","fixed","savings","donut"],Dm={expenses:1,fixed:1,savings:1,donut:2},zr=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],qr=t=>zr[t%zr.length],Pm=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],ls=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],Am=["type","amount","frequency","next","category"];function Ci(){return new Date().toISOString().slice(0,7)}function Kr(t,e){const[i,s]=t.split("-").map(Number),n=new Date(Date.UTC(i,s-1+e,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function Ei(t){const[e,i]=t.split("-").map(Number);return!e||!i?t:new Date(Date.UTC(e,i-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric"})}function Mm(t){const[e,i]=t.split("-").map(Number);return!e||!i?t:new Date(Date.UTC(e,i-1,1)).toLocaleDateString(void 0,{month:"short"})}let E=class extends T{constructor(){super(...arguments),this.tab="budget",this.month=Ci(),this.loading=!0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.logDay=new Date().getDate(),this.networth=null,this.recurring=[],this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...Am],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.recurringAsPaid=!1,this.showColMenu=!1,this.showEnded=!1,this.budgetLayout=null,this.dragCardId=null,this.dropTarget=null,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=t=>{t.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=t=>{const e=t.detail;e&&(this.lastCurrency=e,!this.currencies.includes(e)&&this.supportedCurrencies.includes(e)&&this.saveCurrencies([...this.currencies,e]))},this.onCardDragEnd=()=>{this.dragCardId=null,this.dropTarget=null}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const t=await fetch("/api/finance/settings");if(!t.ok)return;const e=await t.json();Array.isArray(e.currencies)&&e.currencies.length&&(this.currencies=e.currencies),Array.isArray(e.supportedCurrencies)&&(this.supportedCurrencies=e.supportedCurrencies),e.lastCurrency&&(this.lastCurrency=e.lastCurrency),e.baseCurrency&&(this.base=e.baseCurrency),e.recurringColumns&&e.recurringColumns.length&&(this.recurringColumns=e.recurringColumns),e.cards&&(this.cards={...this.cards,...e.cards}),typeof e.recurringAsPaid=="boolean"&&(this.recurringAsPaid=e.recurringAsPaid),Array.isArray(e.budgetLayout)&&e.budgetLayout.length&&(this.budgetLayout=e.budgetLayout)}catch{}}renderCurrencySelect(t){const e=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return r`<currency-select name="currency" .value=${t} .saved=${this.currencies}
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
              @change=${e=>{const i=e.target;i.value&&this.addCurrency(i.value),i.value=""}}>
              <option value="">+ add currency…</option>
              ${t.map(e=>r`<option value=${e}>${e}</option>`)}
            </select>`:c}
        <div class="text-[11px] text-muted mt-4 mb-1">Budget cards</div>
        <div class="flex flex-col gap-1.5">
          ${[["savingsGoal","Savings goal"],["fixedPayments","Fixed payments"],["expenseDonut","Expense breakdown"]].map(([e,i])=>r`<label class="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" ?checked=${this.cards[e]} @change=${()=>this.toggleCard(e)} />
              <span>${i}</span>
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
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(t){["tab","month","yearN","expandedCat","showIncome","budget"].some(i=>t.has(i))&&this.publishView()}publishView(){const t={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let e;if(this.tab==="budget"){if(e=`${Ei(this.month)}`,this.showIncome&&(e+=", income panel open"),this.expandedCat!=null){const i=this.budget?.categories.find(s=>s.id===this.expandedCat);e+=`, expanded category "${i?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?e=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?e=`${Ei(this.month)} · accounts grouped by bucket + net-worth trend`:e="recurring income/expenses table";f.getState().setViewContext({tool:"finance",summary:`Finance · ${t[this.tab]} tab · ${e}`})}async refresh(){this.loading=!0;try{if(this.tab==="budget"){const t=await fetch(`/api/finance/budget?month=${this.month}`);t.ok&&(this.budget=await t.json(),this.base=this.budget.baseCurrency),this.expandedCat!=null&&await this.loadCatTxns(this.expandedCat),this.showIncome&&await this.loadIncomeTxns()}else if(this.tab==="networth"){const t=await fetch(`/api/finance/networth?month=${this.month}`);t.ok&&(this.networth=await t.json(),this.base=this.networth.baseCurrency)}else if(this.tab==="recurring"){const[t,e,i]=await Promise.all([fetch("/api/finance/recurring"),fetch("/api/finance/settings"),fetch(`/api/finance/budget?month=${Ci()}`)]);if(t.ok&&(this.recurring=(await t.json()).items),e.ok){const s=await e.json();s.recurringColumns&&s.recurringColumns.length&&(this.recurringColumns=s.recurringColumns)}i.ok&&(this.budget=await i.json())}else if(this.tab==="year"){const t=await fetch(`/api/finance/year?year=${this.yearN}`);t.ok&&(this.year=await t.json(),this.base=this.year.baseCurrency)}}catch{}this.loading=!1}async loadCatTxns(t){try{const e=await fetch(`/api/finance/transactions?month=${this.month}&categoryId=${t}`);e.ok&&(this.catTxns=(await e.json()).items)}catch{}}async loadIncomeTxns(){try{const t=await fetch(`/api/finance/transactions?month=${this.month}&type=income`);t.ok&&(this.incomeTxns=(await t.json()).items)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&await this.loadIncomeTxns()}async post(t,e){await fetch(`/api/finance${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}async del(t){await fetch(`/api/finance${t}`,{method:"DELETE"})}async patch(t,e){await fetch(`/api/finance${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}fmt(t,e=this.base){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(t)}catch{return`${Math.round(t)} ${e}`}}fmtShort(t){const e=Math.abs(t),i=e>=1e3?`${(t/1e3).toFixed(e>=1e4?0:1)}k`:String(Math.round(t));return`${this.base==="EUR"?"€":""}${i}`}stat(t,e){return r`
      <div class="text-center">
        <div class="text-[11px] text-white/70">${t}</div>
        <div class="text-lg sm:text-xl font-bold tabular-nums leading-tight">${this.fmt(e)}</div>
      </div>
    `}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const i=[.../\u200D/.test(t)?t:t.replace(/\uFE0F/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderIcon(t){if(!t)return r`<span class="text-muted text-sm">•</span>`;const e=this.iconUrl(t);return e?r`<img src=${e} alt="" class="w-5 h-5 select-none" draggable="false" />`:r`<span class="text-sm">${t}</span>`}setTab(t){this.tab!==t&&(this.tab=t,this.refresh())}gotoMonth(t){this.month=Kr(this.month,t),this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const t=Ci();this.month!==t&&(this.month=t,this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh())}daysInMonth(t){const[e,i]=t.split("-").map(Number);return new Date(Date.UTC(e,i,0)).getUTCDate()}defaultLogDay(){return this.month===Ci()?new Date().getDate():this.daysInMonth(this.month)}stepDay(t){const e=this.daysInMonth(this.month);this.logDay=Math.min(e,Math.max(1,this.logDay+t))}fmtLogDay(){const[t,e]=this.month.split("-").map(Number),i=Math.min(this.logDay,this.daysInMonth(this.month));return new Date(Date.UTC(t,e-1,i)).toLocaleDateString(void 0,{weekday:"short",day:"numeric"})}renderDayPicker(){return r`
      <div class="flex h-8 items-center gap-0.5 shrink-0 bg-surface border border-line rounded">
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Earlier day"
          @click=${()=>this.stepDay(-1)}>‹</button>
        <span class="min-w-[3.25rem] text-center text-sm tabular-nums text-ink select-none">${this.fmtLogDay()}</span>
        <button type="button" class="px-2 self-stretch text-muted hover:text-ink leading-none" title="Later day"
          @click=${()=>this.stepDay(1)}>›</button>
      </div>
    `}async toggleCat(t){if(this.expandedCat===t){this.expandedCat=null,this.catTxns=[];return}this.expandedCat=t,await this.loadCatTxns(t)}async addCategory(){const t=this.newCat.trim();t&&(await this.post("/category",{name:t,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(t,e){if(t==="new"){this.newCatIcon=e,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${t}`,{icon:e||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(t,e){const i=e.trim();i&&this.patch(`/category/${t}`,{name:i})}renderEmojiPalette(t){return r`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${e=>e.stopPropagation()}>
        ${Pm.map(e=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(t,e)}>${e}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(t,"")}>none</button>
      </div>
    `}async logTxn(t,e,i,s,n,o){!Number.isFinite(i)||i<=0||(await this.post("/transaction",{type:e,amount:i,currency:s||this.base,categoryId:t,name:n,date:o}),await this.refresh())}async setBudget(t,e){Number.isFinite(e)&&(await this.post("/budget",{categoryId:t,amount:e,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(t,e){!Number.isFinite(e)||e<0||this.post("/budget",{categoryId:t,amount:e,month:this.month})}async deleteTxn(t){await this.del(`/transaction/${t}`),await this.refresh()}startEditTxn(t){t.recurring_id==null&&(this.editingTxnId=t.id)}onSaveTxn(t,e){t.preventDefault();const i=t.target,s=i.elements.namedItem("date")?.value||e.date,n=i.elements.namedItem("name")?.value.trim()??"",o=Number(i.elements.namedItem("amount")?.value),a=(i.elements.namedItem("currency")?.value||e.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(e.id,{date:s,name:n,amount:o,currency:a})}async saveTxnEdit(t,e){await this.patch(`/transaction/${t}`,e),this.editingTxnId=null,await this.refresh()}async archiveCategory(t){await this.patch(`/category/${t.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(t){await this.patch(`/category/${t}`,{active:1}),await this.refresh()}async deleteCategoryHard(t){confirm(`Permanently delete "${t.name}"? This can't be undone.`)&&(await this.del(`/category/${t.id}`),await this.refresh())}onQuickAdd(t,e,i){t.preventDefault();const s=t.target,n=Number(s.elements.namedItem("amount")?.value),o=(s.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),a=s.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o;const l=Math.min(this.logDay,this.daysInMonth(this.month)),h=`${this.month}-${String(l).padStart(2,"0")}`;this.logTxn(e,i,n,o,a,h),s.reset()}renderBar(t){const e=t===0?"bg-black/10":t>100?"bg-red-400":t>=75?"bg-amber-300":"bg-emerald-400";return r`
      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
        <div class="h-full rounded-full ${e}" style="width:${Math.min(100,t)}%"></div>
      </div>
    `}renderQuickAdd(t,e){return r`
      <form class="flex flex-col gap-1.5 px-3 py-2 sm:flex-row sm:items-center" @submit=${i=>this.onQuickAdd(i,t,e)}>
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
          <form class="flex flex-wrap items-center gap-1.5 text-sm" @submit=${i=>this.onSaveTxn(i,t)}>
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
    `:r`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(t,e=!1){const i=this.editingGoals,s=this.expandedCat===t.id&&!i&&!e,n=t.budget>0,o=t.committed??0,a=o>0,l=t.spent+o,h=n?Math.round(l/t.budget*100):0,u=n?Math.round(t.spent/t.budget*100):0,p=n&&l>t.budget,m=Math.min(100,u),g=Math.max(0,Math.min(100,h)-m),v=!i&&!e;return r`
      <li class="border-b border-line/60 last:border-0">
        <div class="grid grid-cols-[26px_1fr_56px_56px_52px] sm:grid-cols-[26px_1fr_56px_56px_104px] items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 ${v?"hover:bg-hover cursor-pointer":""}"
          @click=${v?()=>void this.toggleCat(t.id):null}>
          ${i?r`<button type="button" class="flex items-center justify-center hover:bg-hover rounded" title="Change icon"
                @click=${y=>{y.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===t.id?null:t.id}}>${this.renderIcon(t.icon)}</button>`:this.renderIcon(t.icon)}
          ${i?r`<input type="text" .value=${t.name}
                class="w-full text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${y=>y.stopPropagation()}
                @change=${y=>this.saveCatName(t.id,y.target.value)} />`:r`<span class="text-sm font-semibold truncate ${e?"text-muted":"text-ink"}">${t.name}</span>`}
          ${i?r`<input type="number" step="1" inputmode="decimal" .value=${n?String(t.budget):""} placeholder="0"
                class="w-full text-right text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${y=>y.stopPropagation()}
                @change=${y=>this.saveGoalInline(t.id,Number(y.target.value))} />`:r`<span class="text-sm text-right tabular-nums ${n?"text-muted":"text-muted/40"}">${n?this.fmt(t.budget):"—"}</span>`}
          <span class="text-right leading-tight">
            <span class="block text-sm font-semibold tabular-nums ${p?"text-red-500":e?"text-muted":"text-ink"}">${this.fmt(t.spent)}</span>
            ${a?r`<span class="block text-[11px] tabular-nums text-amber-500" title="Recurring due this month, not yet paid">+${this.fmt(o)}</span>`:c}
          </span>
          ${e?r`<div class="flex items-center justify-end gap-2 text-[11px]">
                <button type="button" class="text-ink/60 hover:text-ink" @click=${y=>{y.stopPropagation(),this.restoreCategory(t.id)}}>Unhide</button>
                <button type="button" class="text-muted hover:text-red-500" @click=${y=>{y.stopPropagation(),this.deleteCategoryHard(t)}}>Delete</button>
              </div>`:i?r`<button type="button" class="text-[11px] text-right text-muted hover:text-red-500"
                  @click=${y=>{y.stopPropagation(),this.archiveCategory(t)}}>hide</button>`:n?r`<div class="flex items-center gap-2">
                    <div class="flex-1 min-w-0">
                      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden flex">
                        <div class="h-full ${p?"bg-red-400":"bg-emerald-400"}" style="width:${m}%"></div>
                        <div class="h-full bg-amber-300" style="width:${g}%"></div>
                      </div>
                    </div>
                    <span class="hidden sm:inline-block w-8 shrink-0 text-right text-[11px] tabular-nums ${p?"text-red-500":"text-muted"}">${Math.min(100,h)}%</span>
                  </div>`:r`<span class="text-[11px] text-right text-ink/40">set goal</span>`}
        </div>
        ${i&&this.emojiPickerFor===t.id?this.renderEmojiPalette(t.id):c}
        ${s?r`
              <div class="bg-bg/40 border-t border-line">
                ${this.renderQuickAdd(t.id,"expense")}
                ${this.renderCatTxns()}
              </div>
            `:c}
      </li>
    `}renderIncomePanel(){const t=this.budget?.income.committedItems??[],e=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),i=t.reduce((n,o)=>n+o.base,0),s=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mx-3 mb-3 mana-card overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] text-muted">Income · ${Ei(this.month)}</span>
          <span class="text-sm font-semibold tabular-nums text-emerald-600">${this.fmt(e+i)}</span>
        </div>
        ${this.incomeTxns.length||t.length?r`<ul class="px-3 py-1">
              ${this.incomeTxns.map(n=>this.renderTxnRow(n))}
              ${t.map(n=>r`
                <li class="flex items-center gap-2 py-1 text-sm italic text-muted" title="Expected recurring income">
                  <span class="text-xs w-16 shrink-0">${s(n.date)}</span>
                  <span class="flex-1 min-w-0 truncate"><span class="not-italic">↻ </span>${n.name}</span>
                  <span class="shrink-0 tabular-nums text-emerald-600/70">${this.fmt(n.base)}</span>
                  <span class="text-[10px] shrink-0">expected</span>
                </li>`)}
            </ul>`:r`<p class="px-4 py-2 text-xs text-muted">No income logged this month.</p>`}
        <div class="border-t border-line">${this.renderQuickAdd(null,"income")}</div>
      </div>
    `}presentCards(t){const e=this.cards.expenseDonut&&t.categories.some(i=>i.spent>0);return Em.filter(i=>i==="expenses"?!0:i==="savings"?this.cards.savingsGoal:i==="fixed"?this.cards.fixedPayments:e)}effectiveLayout(t){const e=this.presentCards(t),i=new Set(e),s=(this.budgetLayout??[]).filter(o=>i.has(o.id)).map(o=>({...o})),n=new Set(s.map(o=>o.id));for(const o of e)n.has(o)||s.push({id:o,span:Dm[o]});return s}layoutRows(t){const e=[];for(let i=0;i<t.length;){const s=t[i],n=t[i+1];s.span===1&&n&&n.span===1?(e.push([s,n]),i+=2):(e.push([s]),i+=1)}return e}async saveBudgetLayout(t){this.budgetLayout=t,await this.post("/budget-layout",{layout:t})}onCardDragStart(t,e){if(this.dragCardId=e,t.dataTransfer){t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e);const i=t.currentTarget.closest("[data-card]");i&&t.dataTransfer.setDragImage(i,24,16)}}dropModeFor(t,e){const i=e.getBoundingClientRect(),s=(t.clientX-i.left)/i.width,n=(t.clientY-i.top)/i.height;return s<.28?"beside-left":s>.72?"beside-right":n<.5?"stack-before":"stack-after"}onCardDragOver(t,e){if(!this.dragCardId||e===this.dragCardId)return;t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move");const i=this.dropModeFor(t,t.currentTarget);(this.dropTarget?.id!==e||this.dropTarget?.mode!==i)&&(this.dropTarget={id:e,mode:i})}onCardDrop(t,e){t.preventDefault();const i=this.dragCardId,s=this.dropTarget?.mode;this.dragCardId=null,this.dropTarget=null,!(!i||!s||i===e||!this.budget)&&this.applyDrop(this.effectiveLayout(this.budget),i,e,s)}applyDrop(t,e,i,s){const n=t.find(h=>h.id===e);if(!n)return;const o=t.filter(h=>h.id!==e),a=o.findIndex(h=>h.id===i);if(a<0)return;const l={...n};s==="beside-left"||s==="beside-right"?(l.span=1,o[a].span=1,o.splice(s==="beside-left"?a:a+1,0,l)):(l.span=2,o.splice(s==="stack-before"?a:a+1,0,l)),this.saveBudgetLayout(o)}cardContent(t,e,i){return t==="expenses"?this.renderExpensesCard(e):t==="savings"?this.renderSavingsCard(e,i):t==="fixed"?this.renderFixedCard(e,i):this.renderExpenseDonut(e)}renderDropIndicator(t){const e="pointer-events-none absolute z-20 rounded-full bg-blue-500",i=t==="beside-left"?`${e} left-0 top-2 bottom-2 w-1`:t==="beside-right"?`${e} right-0 top-2 bottom-2 w-1`:t==="stack-before"?`${e} top-0 left-2 right-2 h-1`:`${e} bottom-0 left-2 right-2 h-1`;return r`<div class=${i}></div>`}tileWidthClass(t,e){return e.length===1||!e.some(s=>s.id==="expenses")||t==="expenses"?"flex-1 min-w-0 w-full":"w-full @2xl:w-64 @2xl:shrink-0"}renderCardTile(t,e,i){const s=this.dropTarget?.id===t?this.dropTarget.mode:null;return r`
      <div data-card=${t} class="group relative ${i}"
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
        ${s?this.renderDropIndicator(s):c}
      </div>
    `}renderCardGrid(t,e){const i=this.layoutRows(this.effectiveLayout(t));return r`
      <div class="mx-3 mb-3 flex flex-col gap-3">
        ${i.map(s=>r`<div class="flex flex-col @2xl:flex-row gap-3 items-stretch @2xl:items-start">
            ${s.map(n=>this.renderCardTile(n.id,this.cardContent(n.id,t,e),this.tileWidthClass(n.id,s)))}
          </div>`)}
      </div>
    `}renderExpensesCard(t){const e=t.categories.filter(s=>s.active===1),i=t.categories.filter(s=>s.active===0);return r`
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
          ${e.length?e.map(s=>this.renderCategory(s)):r`<li class="px-4 py-4 text-xs text-muted">No categories yet. Click “Expenses” to add one, or tell the keeper "budget 400 for groceries."</li>`}
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
                  @input=${s=>{this.newCat=s.target.value}}
                  @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),this.addCategory())}} />
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>void this.addCategory()}>+ Category</button>
              </div>`:c}
        ${i.length?r`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden · ${i.length}</button>
                ${this.showHidden?r`<ul>${i.map(s=>this.renderCategory(s,!0))}</ul>`:c}
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
    `}onSaveSavings(t){t.preventDefault();const e=t.target,i=Number(e.elements.namedItem("amount").value);!Number.isFinite(i)||i<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:i}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(t,e){const i=t.savingsGoal,s=e-t.totalSpent-t.totalCommitted,n=i&&i>0?Math.round(s/i*100):0;return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Savings goal</span>
          ${i!=null&&!this.editingSavings?r`<span class="text-[11px] tabular-nums ${s>=i?"text-emerald-600":"text-muted"}">${n}%</span>`:c}
        </div>
        ${this.editingSavings?r`
              <form class="mt-1 flex items-center gap-1.5" @submit=${o=>this.onSaveSavings(o)}>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${i!=null?String(i):""} placeholder="0" autofocus
                  class="w-24 px-2 py-1 text-sm bg-bg border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${this.base}</span>
                <button type="submit" class="ml-auto text-[11px] text-ink hover:underline">Save</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingSavings=!1}}>cancel</button>
              </form>`:r`
              <button type="button" class="mt-1 block text-left group" title="Edit savings goal" @click=${()=>{this.editingSavings=!0}}>
                ${i!=null?r`<span class="text-lg font-bold tabular-nums text-ink">${this.fmt(Math.max(0,s))}</span><span class="text-xs font-normal text-muted"> / ${this.fmt(i)}</span> <span class="text-[10px] text-muted group-hover:text-ink">✎</span>`:r`<span class="text-sm text-muted group-hover:text-ink">Set a savings goal ✎</span>`}
              </button>
              ${i!=null?r`<div class="mt-1.5">${this.renderBar(Math.max(0,n))}</div>`:c}`}
      </div>
    `}renderFixedCard(t,e){const i=t.fixedPayments,s=e>0?Math.round(i.total/e*100):0,n=o=>new Date(`${o}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] text-muted">Fixed payments · ${i.count}</span>
          <span class="text-[11px] tabular-nums text-muted">${s}% of income</span>
        </div>
        <div class="mt-1 text-lg font-bold tabular-nums text-ink">${this.fmt(i.total)}</div>
        ${i.items.length?r`<ul class="mt-1.5 space-y-0.5 max-h-56 overflow-y-auto">
              ${i.items.map(o=>r`<li class="flex items-center gap-2 text-xs">
                <span class="text-muted w-12 shrink-0 tabular-nums">${n(o.date)}</span>
                <span class="flex-1 min-w-0 truncate text-ink">${o.name}</span>
                <span class="shrink-0 tabular-nums text-muted">${this.fmt(o.base)}</span>
              </li>`)}
            </ul>`:r`<p class="mt-1 text-[11px] text-muted">No recurring payments this month.</p>`}
      </div>
    `}renderExpenseDonut(t){const e=t.categories.filter(s=>s.spent>0).sort((s,n)=>n.spent-s.spent);if(!e.length)return c;const i={type:"doughnut",data:{labels:e.map(s=>s.name),datasets:[{data:e.map(s=>Math.round(s.spent)),backgroundColor:e.map((s,n)=>qr(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"right",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:s=>`${s.label}: ${this.fmt(Number(s.parsed))}`}}}}};return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between mb-1">
          <span class="text-[10px] text-muted">Expense breakdown</span>
          <span class="text-[11px] tabular-nums text-muted">${this.fmt(t.totalSpent)}</span>
        </div>
        <finance-chart .config=${i} height="200px"></finance-chart>
      </div>
    `}onAddAccount(t){t.preventDefault();const e=t.target,i=e.elements.namedItem("name").value.trim(),s=(e.elements.namedItem("currency").value||this.base).toUpperCase().trim(),n=e.elements.namedItem("bucket").value,o=e.elements.namedItem("subtype").value.trim();if(!i||!s)return;const a=n==="Debts"?"debt":"asset";(async()=>(await this.post("/account",{name:i,currency:s,type:a,bucket:n,subtype:o||null}),this.showAccountAdd=!1,await this.refresh()))()}onSetBalance(t,e){e.preventDefault();const i=e.target,s=Number(i.elements.namedItem("amount").value);Number.isFinite(s)&&(async()=>(await this.post("/networth",{accountId:t,amount:s}),this.editingBalanceId=null,await this.refresh()))()}renderNwAccount(t){const e=this.editingBalanceId===t.id;return r`
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
                @submit=${i=>this.onSetBalance(t.id,i)}>
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
        <div class="text-[11px] text-white/70">Net worth · ${Ei(t.month)}</div>
        <div class="text-2xl font-bold tabular-nums leading-tight">${this.fmt(t.total)}</div>
      </div>

      ${t.groups.length?t.groups.map(e=>r`
            <div class="mx-3 mb-3 mana-card overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
                <span class="text-[11px] text-muted">${e.bucket}</span>
                <span class="text-sm font-semibold tabular-nums ${e.total<0?"text-red-500":"text-ink"}">${this.fmt(e.total)}</span>
              </div>
              <ul>${e.accounts.map(i=>this.renderNwAccount(i))}</ul>
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
    `:r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(t){if(t.series.length<2)return c;const e=t.series.slice(-24),i=["Liquid Assets","Investments","Physical Assets","Debts"],s={"Liquid Assets":"#6366f1",Investments:"#10b981","Physical Assets":"#f59e0b",Debts:"#ef4444"},n={type:"bar",data:{labels:e.map(o=>o.month),datasets:i.map(o=>({label:o,data:e.map(a=>Math.round(a.buckets[o]??0)),backgroundColor:s[o]}))},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:10,font:{size:10}}},tooltip:{callbacks:{label:o=>`${o.dataset.label}: ${this.fmt(Number(o.parsed.y))}`}}},scales:{x:{stacked:!0,ticks:{maxTicksLimit:8,font:{size:10}},grid:{display:!1}},y:{stacked:!0,ticks:{callback:o=>this.fmtShort(Number(o)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return r`
      <div class="mx-3 mb-3 mana-card px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Net worth over time</div>
        <finance-chart .config=${n} height="220px"></finance-chart>
      </div>
    `}onAddRecurring(t){t.preventDefault();const e=t.target,i=e.elements.namedItem("name").value.trim(),s=Number(e.elements.namedItem("amount").value),n=(e.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=e.elements.namedItem("type").value,a=e.elements.namedItem("frequency").value,l=e.elements.namedItem("category").value.trim();if(!i||!Number.isFinite(s)||s<=0)return;const h={name:i,amount:s,currency:n,type:o,frequency:a};o==="expense"&&l&&(h.category=l),(async()=>(await this.post("/recurring",h),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(t){const e=new Date().toISOString().slice(0,10),i=p=>!t.end_date||p<=t.end_date,[s,n,o]=t.start_date.split("-").map(Number);if(!s||!n||!o)return null;const a=p=>String(p).padStart(2,"0");if(t.frequency==="weekly"){let p=new Date(`${t.start_date}T00:00:00Z`);const m=new Date(`${e}T00:00:00Z`);if(p<m){const v=Math.ceil((m.getTime()-p.getTime())/6048e5);p=new Date(p.getTime()+v*7*864e5)}const g=p.toISOString().slice(0,10);return i(g)?g:null}const l=t.frequency==="yearly"?12:t.frequency==="quarterly"?3:1;let h=s,u=n;for(let p=0;p<2400;p++){const m=new Date(Date.UTC(h,u,0)).getUTCDate(),g=`${h}-${a(u)}-${a(Math.min(o,m))}`;if(g>=e)return i(g)?g:null;for(u+=l;u>12;)u-=12,h+=1}return null}toggleColumn(t){const e=this.recurringColumns.includes(t)?this.recurringColumns.filter(i=>i!==t):[...this.recurringColumns,t];this.recurringColumns=e,this.post("/recurring-columns",{columns:e})}toggleEditRecur(t){this.editingRecurId=this.editingRecurId===t?null:t,this.cancelingRecurId=null}startCancel(t){this.cancelingRecurId=this.cancelingRecurId===t?null:t,this.editingRecurId=null}onSaveRecur(t,e){t.preventDefault();const i=t.target,s=l=>i.elements.namedItem(l)?.value??"",n=s("type")==="income"?"income":"expense",o=Number(s("amount"));if(!s("name").trim()||!Number.isFinite(o)||o<=0)return;const a={name:s("name").trim(),amount:o,currency:(s("currency")||this.base).toUpperCase().trim(),type:n,frequency:s("frequency"),start:s("start"),category:n==="expense"&&s("category").trim()||null,end:s("end")||null};(async()=>(await this.patch(`/recurring/${e}`,a),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(t,e){t.preventDefault();const i=t.target.elements.namedItem("end")?.value;i&&(async()=>(await this.patch(`/recurring/${e}`,{end:i}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(t){await this.patch(`/recurring/${t}`,{end:null}),await this.refresh()}async deleteRecur(t){confirm("Delete this recurring item? Its logged transactions stay in your history; only the template is removed.")&&(await this.del(`/recurring/${t}`),this.editingRecurId=null,await this.refresh())}cancelIcon(){return r`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(t){const e=t.type==="income",i=new Date().toISOString().slice(0,10),s=this.nextDue(t),n=p=>new Date(`${p}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!t.end_date&&t.end_date>=i,a="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",l=p=>{switch(p){case"type":return r`<td class="px-3 py-2"><span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${e?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-600"}">${e?"IN":"OUT"}</span></td>`;case"category":return r`<td class="px-3 py-2 whitespace-nowrap" title=${e?"income":t.category_name||""}>${e?this.renderIcon("💰"):t.category_icon?this.renderIcon(t.category_icon):r`<span class="text-muted">${t.category_name||"—"}</span>`}</td>`;case"amount":return r`<td class="px-3 py-2 text-right tabular-nums font-semibold whitespace-nowrap ${e?"text-emerald-600":"text-ink"}">${e?"+":""}${this.fmt(t.original_amount,t.original_currency)}</td>`;case"frequency":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.frequency}</td>`;case"next":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${s?n(s):"ended"}</td>`;case"account":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.account_name||"—"}</td>`;case"end":return r`<td class="px-3 py-2 text-muted whitespace-nowrap">${t.end_date||"—"}</td>`;default:return c}},h=2+ls.filter(p=>this.recurringColumns.includes(p.key)).length,u=(p,m)=>p===m?"selected":"";return r`
      <tr class="group border-b border-line/60 last:border-0 cursor-pointer hover:bg-hover" @click=${()=>this.toggleEditRecur(t.id)}>
        <td class="px-3 py-2 font-medium text-ink whitespace-nowrap">
          ${t.name}
          ${o?r`<span class="ml-1.5 text-[10px] font-semibold text-amber-600">ending ${n(t.end_date)}</span>`:c}
        </td>
        ${ls.filter(p=>this.recurringColumns.includes(p.key)).map(p=>l(p.key))}
        <td class="px-2 py-2 text-right">
          <button type="button" class="${o?"text-amber-500":"text-muted opacity-0 group-hover:opacity-100"} hover:text-red-500"
            @click=${p=>{p.stopPropagation(),this.startCancel(t.id)}} title="Cancel subscription">${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===t.id?r`<tr><td colspan=${h} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${p=>this.onConfirmCancel(p,t.id)}>
              <span class="text-[11px] text-muted">Cancel from</span>
              <mana-date-picker name="end" label="Cancel from" .value=${t.end_date||s||i} field-class=${a}></mana-date-picker>
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
    `}monthlyEquiv(t){const e=t.base??t.original_amount;switch(t.frequency){case"weekly":return e*(52/12);case"quarterly":return e/3;case"yearly":return e/12;default:return e}}renderRecurringChart(){const t=this.recurring.filter(a=>a.type==="expense");if(!t.length)return c;const e=Ci(),i=[];for(let a=-11;a<=5;a++)i.push(Kr(e,a));const s=i.indexOf(e),n=i.map(a=>{const l=`${a}-31`,h=`${a}-01`;let u=0;for(const p of t)p.start_date>l||p.end_date&&p.end_date<h||(u+=this.monthlyEquiv(p));return Math.round(u)});return r`
      <div class="mx-3 mb-3 mana-card px-4 py-3">
        <div class="text-[10px] text-muted mb-1">Monthly recurring outflow <span class="normal-case">(dashed = projected)</span></div>
        <finance-chart .config=${{type:"line",data:{labels:i,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:a=>a.p1DataIndex>s?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:a=>`${this.fmt(Number(a.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:a=>this.fmtShort(Number(a)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const t=`${this.month}-31`,e=`${this.month}-01`,i=this.recurring.filter(l=>l.start_date<=t&&(!l.end_date||l.end_date>=e));let s=0,n=0;for(const l of i)l.type==="income"?n+=this.monthlyEquiv(l):s+=this.monthlyEquiv(l);const o=this.budget?this.budget.income.actual+(this.budget.income.committed??0):n,a=o>0?Math.round(s/o*100):0;return r`
      <div class="m-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Out / mo",s)}
          ${this.stat("In / mo",n)}
          ${this.stat("Net / mo",n-s)}
        </div>
        ${o>0?r`<div class="mt-2 text-[11px] text-white/70 text-center">${i.length} active · fixed costs are ${a}% of income</div>`:c}
      </div>
    `}renderRecurring(){const t=new Date().toISOString().slice(0,10),e=n=>!!n.end_date&&n.end_date<t,i=this.recurring.filter(e),s=this.showEnded?this.recurring:this.recurring.filter(n=>!e(n));return r`
      ${this.recurring.length?this.renderRecurringHeader():c}
      <div class="mx-3 my-3 mana-card overflow-hidden">
        <!-- column toggle -->
        <div class="relative flex items-center justify-end px-3 py-1.5 border-b border-line">
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns ▾</button>
          ${this.showColMenu?r`
                <div class="absolute right-3 top-8 z-20 rounded-xl border border-line bg-surface shadow-lg py-1" @click=${n=>n.stopPropagation()}>
                  ${ls.map(n=>r`
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
                      ${ls.filter(n=>this.recurringColumns.includes(n.key)).map(n=>r`<th class="font-normal px-3 py-1.5 whitespace-nowrap ${n.key==="amount"?"text-right":"text-left"}">${n.label}</th>`)}
                      <th class="px-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    ${s.map(n=>this.renderRecurRow(n))}
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
                  ${i.length?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink underline decoration-dotted"
                        @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended":`Show ${i.length} ended`}</button>`:c}
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
      </li>`},i=t.filter(n=>n.type==="income"),s=t.filter(n=>n.type==="expense");return r`
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        <div>
          <div class="text-[10px] text-muted mb-0.5">Income</div>
          <ul>${i.length?i.map(e):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
        <div>
          <div class="text-[10px] text-muted mb-0.5">Expenses</div>
          <ul>${s.length?s.map(e):r`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
      </div>
    `}renderYear(){const t=this.year;if(!t)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const e=t.months.map(p=>new Date(`${p.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),i=8,s=t.categories.slice(0,i),n=t.categories.slice(i),o=n.length?Array.from({length:12},(p,m)=>n.reduce((g,v)=>g+(v.monthly[m]??0),0)):null,a=s.map((p,m)=>({type:"bar",label:p.name,data:p.monthly.map(g=>Math.round(g)),backgroundColor:qr(m),stack:"spend",borderWidth:0}));o&&a.push({type:"bar",label:"Other",data:o.map(p=>Math.round(p)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const l={type:"line",label:"Income",data:t.months.map(p=>Math.round(p.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},h={type:"bar",data:{labels:e,datasets:[...a,l]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:p=>`${p.dataset.label}: ${this.fmt(Number(p.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:p=>this.fmtShort(Number(p)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},u=t.totals;return r`
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
              ${t.months.map((p,m)=>{const g=p.income>0?Math.round(p.saved/p.income*100):0,v=p.income===0&&p.spent===0,y=this.expandedYearMonth===p.month;return r`<tr class="border-b border-line/60 ${v?"opacity-40":"cursor-pointer hover:bg-hover"} ${y?"bg-hover":""}"
                    @click=${v?null:()=>void this.toggleYearMonth(p.month)}>
                    <td class="px-3 py-1.5 text-ink">${y?"▾":"▸"} ${e[m]}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${p.income?this.fmt(p.income):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-ink">${p.spent?this.fmt(p.spent):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums ${p.saved<0?"text-red-500":"text-ink"}">${v?"—":this.fmt(p.saved)}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-muted">${v?"—":`${g}%`}</td>
                  </tr>
                  ${y?r`<tr><td colspan="5" class="px-3 py-2 bg-bg/40 border-b border-line">${this.renderYearMonthDetail()}</td></tr>`:c}`})}
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
    `}render(){const t=(i,s)=>r`
      <button type="button"
        class="px-2 sm:px-3 py-1.5 text-sm border-b-2 ${this.tab===i?"border-ink text-ink":"border-transparent text-muted hover:text-ink"}"
        @click=${()=>this.setTab(i)}>${s}</button>
    `,e=(i,s)=>r`<span class="@xl:hidden">${i}</span><span class="hidden @xl:inline">${s}</span>`;return r`
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
                      <button type="button" class="text-ink hover:underline decoration-dotted" title="Jump to current month" @click=${()=>this.toCurrentMonth()}><span class="sm:hidden">${Mm(this.month)}</span><span class="hidden sm:inline">${Ei(this.month)}</span></button>
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
    `}};P([d()],E.prototype,"tab",2);P([d()],E.prototype,"month",2);P([d()],E.prototype,"loading",2);P([d()],E.prototype,"base",2);P([d()],E.prototype,"budget",2);P([d()],E.prototype,"expandedCat",2);P([d()],E.prototype,"catTxns",2);P([d()],E.prototype,"newCat",2);P([d()],E.prototype,"newCatIcon",2);P([d()],E.prototype,"emojiPickerFor",2);P([d()],E.prototype,"showHidden",2);P([d()],E.prototype,"logDay",2);P([d()],E.prototype,"networth",2);P([d()],E.prototype,"recurring",2);P([d()],E.prototype,"year",2);P([d()],E.prototype,"yearN",2);P([d()],E.prototype,"expandedYearMonth",2);P([d()],E.prototype,"yearMonthTxns",2);P([d()],E.prototype,"editingSavings",2);P([d()],E.prototype,"editingGoals",2);P([d()],E.prototype,"editingTxnId",2);P([d()],E.prototype,"showIncome",2);P([d()],E.prototype,"incomeTxns",2);P([d()],E.prototype,"showAccountAdd",2);P([d()],E.prototype,"editingBalanceId",2);P([d()],E.prototype,"showRecurringAdd",2);P([d()],E.prototype,"editingRecurId",2);P([d()],E.prototype,"cancelingRecurId",2);P([d()],E.prototype,"recurringColumns",2);P([d()],E.prototype,"currencies",2);P([d()],E.prototype,"supportedCurrencies",2);P([d()],E.prototype,"lastCurrency",2);P([d()],E.prototype,"showSettings",2);P([d()],E.prototype,"demoMode",2);P([d()],E.prototype,"cards",2);P([d()],E.prototype,"recurringAsPaid",2);P([d()],E.prototype,"showColMenu",2);P([d()],E.prototype,"showEnded",2);P([d()],E.prototype,"budgetLayout",2);P([d()],E.prototype,"dragCardId",2);P([d()],E.prototype,"dropTarget",2);E=P([w("finance-section")],E);async function Im(t,e=400,i=.85){const s=await Bl(t,e);if(!s)return await _m(t);const n=s.toDataURL("image/webp",i);return n.startsWith("data:image/webp")?n:s.toDataURL("image/jpeg",i)}async function gb(t,e=1600,i=.85){let s;try{s=await Bl(t,e)}catch{return t}if(!s)return t;const n=a=>new Promise(l=>s.toBlob(l,a,i));let o=await n("image/webp");return(!o||o.type!=="image/webp")&&(o=await n("image/jpeg")),o&&o.size<t.size?o:t}async function Bl(t,e){const i=URL.createObjectURL(t);try{const s=await new Promise((u,p)=>{const m=new Image;m.onload=()=>u(m),m.onerror=()=>p(new Error("could not decode image")),m.src=i}),n=Math.min(1,e/Math.max(s.width,s.height)),o=Math.max(1,Math.round(s.width*n)),a=Math.max(1,Math.round(s.height*n)),l=document.createElement("canvas");l.width=o,l.height=a;const h=l.getContext("2d");return h?(h.drawImage(s,0,0,o,a),l):null}finally{URL.revokeObjectURL(i)}}function _m(t){return new Promise((e,i)=>{const s=new FileReader;s.onload=()=>e(s.result),s.onerror=()=>i(s.error),s.readAsDataURL(t)})}var Om=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,K=(t,e,i,s)=>{for(var n=s>1?void 0:s?Lm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Om(e,i,n),n};let q=class extends T{constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.detailsOpen=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=t=>{const e=t.composedPath();if(this.editingNote==="new"){const i=this.renderRoot.querySelector(".newnote-card");i&&!e.includes(i)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const i=this.renderRoot.querySelector(".newfact-form");i&&!e.includes(i)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const i=this.renderRoot.querySelector(".newaction-form");i&&!e.includes(i)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const i=this.renderRoot.querySelector(".inline-edit");i&&!e.includes(i)&&(i.blur(),i.dispatchEvent(new Event("blur")))}},this.onOpsEvent=t=>{const e=t.detail,i=e?.action;if(i==="open-person"&&typeof e?.person=="number"){this.open(e.person);return}i==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onOpenReviewIntent=()=>{try{localStorage.removeItem("circle.intent")}catch{}this.openReview()},this.onPaste=async t=>{const e=t;if(this.selectedId==null||!e.clipboardData)return;const i=document.activeElement;if(i&&/^(INPUT|TEXTAREA)$/.test(i.tagName))return;for(const n of Array.from(e.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){e.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const s=e.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(s)){e.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("circle-open-review",this.onOpenReviewIntent),document.addEventListener("paste",this.onPaste);const t=(()=>{try{return localStorage.getItem("circle.open")}catch{return null}})(),e=t?this.fetchDetail(Number(t)):null;this.refresh().then(()=>{this.restoreOpen(e),this.consumeReviewIntent()})}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("circle-open-review",this.onOpenReviewIntent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}consumeReviewIntent(){try{localStorage.getItem("circle.intent")==="review"&&(localStorage.removeItem("circle.intent"),this.openReview())}catch{}}async refresh(){try{const t=await fetch("/api/circle");if(t.ok){const e=await t.json();this.circles=e.circles,this.people=e.people,this.pendingCount=e.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async fetchDetail(t){try{const e=await fetch(`/api/circle/person/${t}`);if(e.ok)return(await e.json()).person}catch{}return null}async loadDetail(t,e){const i=await(e??this.fetchDetail(t));i&&this.selectedId===t&&(this.detail=i)}open(t,e){this.selectedId=t,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.detailsOpen=!1;try{localStorage.setItem("circle.open",String(t))}catch{}this.reportFocus(t),this.loadDetail(t,e)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(t){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:t})}).catch(()=>{})}restoreOpen(t=null){try{const e=localStorage.getItem("circle.open");e&&this.people.some(i=>i.id===Number(e))&&this.open(Number(e),t??void 0)}catch{}}circleName(t){return t==null?"New":this.circles.find(e=>e.id===t)?.name??"New"}circleNames(t){const i=(t.circle_ids?.length?t.circle_ids:t.circle_id!=null?[t.circle_id]:[]).map(s=>this.circles.find(n=>n.id===s)?.name).filter(s=>!!s);return i.length?i:["New"]}primaryCircleName(t){return this.circleNames(t)[0]??"New"}async patchPerson(t,e){await fetch(`/api/circle/person/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async post(t,e){const i=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});await this.refresh();try{return await i.json()}catch{return null}}async patch(t,e){await fetch(t,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async del(t){await fetch(t,{method:"DELETE"}),await this.refresh()}async createAndAssign(t,e){const i=e.trim();if(this.creatingCircle=!1,!i)return;const s=await this.post("/api/circle/circle",{name:i});s?.id&&await this.post(`/api/circle/person/${t}/circle`,{circle_id:s.id})}async addPerson(){const t=this.draftName.trim();if(!t)return;const e=await this.post("/api/circle/person",{name:t,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,e?.id&&this.open(e.id)}async removePerson(t){confirm(`Remove ${t.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${t.id}`),this.back())}async onPhotoFile(t,e){const i=e.target,s=i.files?.[0];i.value="",s&&await this.uploadPhotoFile(t.id,s)}async uploadPhotoFile(t,e){if(!e.type.startsWith("image/")){alert("That's not an image.");return}if(e.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const i=await Im(e,400,.85);await this.patchPerson(t,{photo:i})}catch{alert("Couldn't process that image.")}}initials(t){const e=t.trim().split(/\s+/);return e.length===1?(e[0]?.slice(0,2)??"").toUpperCase():((e[0]?.[0]??"")+(e[e.length-1]?.[0]??"")).toUpperCase()}avatarStyle(t){let e=0;for(const i of t)e=(e*31+i.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${e} 68% 55%), hsl(${(e+48)%360} 70% 45%));`}renderAvatar(t,e="w-9 h-9",i="text-xs"){return t.photo?r`<img src=${t.photo} alt="" class="${e} rounded-full object-cover shrink-0" loading="lazy" />`:r`<span class="${e} ${i} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(t.name)}>${this.initials(t.name)}</span>`}relTime(t){if(!t)return"never";const e=Math.floor((Date.now()/1e3-t)/86400);return e<=0?"today":e===1?"yesterday":e<30?`${e}d ago`:e<365?`${Math.floor(e/30)}mo ago`:`${Math.floor(e/365)}y ago`}fmtDate(t,e){const i=t?new Date(t+"T12:00:00"):new Date(e*1e3),s={month:"long",day:"numeric"};return i.getFullYear()!==new Date().getFullYear()&&(s.year="numeric"),i.toLocaleDateString(void 0,s)}fmtMeetDate(t){const e=new Date(t+"T12:00:00"),i={weekday:"long",month:"short",day:"numeric"};return e.getFullYear()!==new Date().getFullYear()&&(i.year="numeric"),e.toLocaleDateString(void 0,i)}filteredPeople(){return this.filter==="needs"?this.people.filter(t=>(t.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(t=>this.circleNames(t).includes(this.filter))}renderRow(t){const e=t.title&&t.company?`${t.title}, ${t.company}`:t.company??t.title??this.circleNames(t).join(", "),i=t.open_actions??0;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover" @click=${()=>this.open(t.id)}>
          ${this.renderAvatar(t,"w-10 h-10","text-sm")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 pr-3 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${t.name}</span>
              <span class="block text-xs text-muted truncate">${e}</span>
            </span>
            ${i>0?r`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${i} to do</span>`:c}
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>`}renderListBody(){const t=this.filteredPeople();if(t.length===0)return r`<p class="px-4 py-3 text-xs text-muted">${this.filter==="needs"?"Nothing open. You're caught up.":"No one here yet. Add someone, or tell the Circle keeper about a person you met."}</p>`;if(this.filter!=="all")return r`<ul>${t.map(n=>this.renderRow(n))}</ul>`;const e=[...this.circles.map(n=>n.name),"New"],i=new Set,s=e.filter(n=>!i.has(n)&&(i.add(n),!0)).map(n=>({name:n,people:t.filter(o=>this.primaryCircleName(o)===n)})).filter(n=>n.people.length>0);return r`${s.map(n=>r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">${n.name} (${n.people.length})</h3>
        <ul>${n.people.map(o=>this.renderRow(o))}</ul>
      </section>`)}`}renderList(){const t=this.people.some(o=>(o.open_actions??0)>0),e=[{key:"all",label:"All"}];t&&e.push({key:"needs",label:"Needs you"});const i=this.circles.filter(o=>o.id<=9),s=this.circles.filter(o=>o.id>9),n=o=>r`<button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-full border transition-colors ${this.filter===o.key?"border-accent bg-accent text-white":"border-line text-muted hover:bg-hover"}" @click=${()=>this.filter=o.key}>${o.label}</button>`;return r`
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
          ${i.map(o=>n({key:o.name,label:o.name}))}
          ${s.length>0?r`<span class="shrink-0 w-px h-4 bg-line mx-0.5 self-center"></span>`:c}
          ${s.map(o=>n({key:o.name,label:o.name}))}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(t,e,i){return r`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${t}</h3>
          ${i??c}
        </div>
        ${e}
      </section>`}collapsibleSection(t,e,i,s){return r`
      <section class="px-4 pt-4 pb-1">
        <button type="button" class="flex items-center gap-1 mb-2 group/sec" @click=${i}>
          <span class="text-[11px] font-medium tracking-wide text-muted group-hover/sec:text-ink">${t}</span>
          <span class="text-[10px] text-muted group-hover/sec:text-ink transition-transform ${e?"rotate-90":""}">›</span>
        </button>
        ${e?s:c}
      </section>`}headerInput(t,e,i,s){return r`<input type="text" placeholder=${e} class="${i} bg-transparent w-full focus:outline-none focus:bg-surface rounded px-1 -mx-1"
      .value=${t??""} @change=${n=>s(n.target.value.trim())} />`}toggleNoteExpand(t){this.expandedNotes=this.expandedNotes.includes(t)?this.expandedNotes.filter(e=>e!==t):[...this.expandedNotes,t]}noteRows(t){const e=t.split(`
`).reduce((i,s)=>i+Math.max(1,Math.ceil(s.length/65)),0);return Math.min(40,Math.max(3,e+1))}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}truncateBody(t){const e=t.split(`
`);if(e.length>=6)return e.slice(0,5).join(`
`).trimEnd();if(t.length<=280)return t;const i=t.slice(0,260),s=i.lastIndexOf(" ");return(s>200?i.slice(0,s):i).trimEnd()}renderNoteCard(t,e){const i=e.body.length>280||(e.body.match(/\n/g)?.length??0)>=6,s=this.expandedNotes.includes(e.id);return r`
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
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${e.id}`}}>${s||!i?e.body:this.truncateBody(e.body)}${i?r`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(e.id)}}>${s?" Show less":"… Read more"}</button>`:c}</p>`}
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
              .value=${e.label??""} @change=${i=>void this.patch(`/api/circle/fact/${e.id}`,{label:i.target.value.trim()||null})} />
            <input type="text" class="flex-1 min-w-0 text-sm text-ink bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface"
              .value=${e.value} @change=${i=>{const s=i.target.value.trim();s?this.patch(`/api/circle/fact/${e.id}`,{value:s}):this.del(`/api/circle/fact/${e.id}`)}} />
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
        ${e.map(i=>r`<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${i}
          <button type="button" class="text-muted hover:text-red-500" @click=${()=>void this.setTags(t.id,e.filter(s=>s!==i))}>✕</button></span>`)}
        <input type="text" placeholder="+ tag" class="w-20 text-xs bg-transparent px-1 py-0.5 focus:outline-none focus:bg-surface rounded text-ink"
          @keydown=${i=>{if(i.key==="Enter"){const s=i.target,n=s.value.trim();n&&!e.includes(n)&&(this.setTags(t.id,[...e,n]),s.value="")}}} />
      </div>`}submitFact(t){const e=this.renderRoot.querySelector("#fact-label"),i=this.renderRoot.querySelector("#fact-value"),s=i?.value.trim();s&&(this.post(`/api/circle/person/${t}/fact`,{value:s,label:e?.value.trim()||null}),e&&(e.value=""),i&&(i.value=""))}renderCheck(t,e){return r`<button type="button"
      class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
      style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
      aria-label=${t?"Mark not done":"Mark done"}
      @click=${e}>
      ${t?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:c}
    </button>`}renderActions(t){const e=t.actions.filter(n=>n.done!==1),i=t.actions.filter(n=>n.done===1),s=this.showCompletedActions?[...e,...i]:e;return r`
      <ul class="space-y-0.5">${s.map(n=>r`
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
            ${i.length?r`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>done (${i.length})</button>`:c}
          </div>`}`}submitAction(t){const i=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,i&&this.post(`/api/circle/person/${t}/action`,{body:i})}inlineField(t,e,i){return r`
      <label class="block">
        <span class="text-[10px] text-muted">${t}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${e??""} @change=${s=>i(s.target.value.trim())} />
      </label>`}readKeepingInTouch(t){return t.next_meet_date?r`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(t.next_meet_date,0)}</div>`:c}readFacts(t){if(!t.facts.length)return c;const e=t.facts.filter(s=>s.label),i=t.facts.filter(s=>!s.label);return this.section("Details",r`
      ${e.map(s=>r`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${s.label}</span>
        <span class="text-ink flex-1">${s.value}</span></div>`)}
      ${i.length?r`<ul class="mt-1 space-y-0.5">${i.map(s=>r`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${s.value}</li>`)}</ul>`:c}`)}readTags(t){const e=this.parseTags(t.tags);return e.length?this.section("Tags",r`<div class="flex flex-wrap gap-1.5">${e.map(i=>r`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${i}</span>`)}</div>`):c}readActions(t){return t.actions.length?this.section("Action items",r`<ul class="space-y-0.5">${t.actions.map(e=>r`
      <li class="flex items-center gap-2 text-sm">
        ${this.renderCheck(e.done===1,()=>void this.patch(`/api/circle/action/${e.id}`,{done:e.done!==1}))}
        <span class="${e.done?"line-through text-muted":"text-ink"}">${e.body}</span>
      </li>`)}</ul>`):c}readContact(t){const e=[];return t.email&&e.push(["Email",t.email]),t.phone&&e.push(["Phone",t.phone]),e.length?this.section("Details",r`${e.map(([i,s])=>r`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${i}</span><span class="text-ink flex-1">${s}</span></div>`)}`):c}renderDetailAvatar(t){return r`
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
      </div>`}async setPhotoFromUrl(t){const i=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(i)try{const s=await fetch(`/api/circle/person/${t}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!s.ok){const n=await s.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??s.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(t,e,i,s,n=""){return this.editingField===t?r`<input type="text" class="inline-edit ${i} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${e??""} autofocus
        @blur=${o=>{s(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:e?r`<span class="${i} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=t}}>${e}</span>`:n?r`<span class="${i} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=t}}>${n}</span>`:c}onCircleSelect(t,e){const i=e.target.value;if(this.editingField=null,!!i){if(i==="__new__"){this.creatingCircle=!0;return}this.post(`/api/circle/person/${t.id}/circle`,{circle_id:Number(i)})}}detailCircles(t){return t.circles?.length?t.circles:t.circle_id!=null&&t.circle_name?[{id:t.circle_id,name:t.circle_name}]:[]}renderCirclePills(t){const e=this.detailCircles(t),i=this.circles.filter(s=>!e.some(n=>n.id===s.id));return r`
      ${e.map(s=>r`<span class="group/pill inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-surface border border-line text-ink">${s.name}
        <button type="button" class="w-0 overflow-hidden group-hover/pill:w-3.5 group-hover/pill:ml-0.5 transition-all text-muted hover:text-red-500" title="Remove from ${s.name}" @click=${()=>void this.del(`/api/circle/person/${t.id}/circle/${s.id}`)}>✕</button></span>`)}
      ${this.editingField==="circle"?r`<select class="inline-edit px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus @change=${s=>this.onCircleSelect(t,s)} @blur=${()=>{this.editingField=null}}>
            <option value="" selected disabled>add to…</option>
            ${i.map(s=>r`<option value=${s.id}>${s.name}</option>`)}
            <option value="__new__">+ New circle…</option>
          </select>`:this.creatingCircle?r`<input type="text" placeholder="new circle" class="w-24 px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus
              @keydown=${s=>{s.key==="Enter"&&this.createAndAssign(t.id,s.target.value),s.key==="Escape"&&(this.creatingCircle=!1)}}
              @blur=${()=>{this.creatingCircle=!1}} />`:r`<button type="button" class="text-xs px-2 py-0.5 rounded-full border border-line text-muted hover:text-ink hover:bg-hover" title="Add to a circle" @click=${()=>{this.editingField="circle"}}>${e.length?"+":"+ circle"}</button>`}`}renderBio(t){return this.editingField==="bio"?r`<textarea rows="5" class="inline-edit w-full text-sm text-ink bg-surface rounded p-2 ring-1 ring-ink focus:outline-none leading-relaxed resize-y"
        .value=${t.bio??""} autofocus
        @blur=${e=>{this.patchPerson(t.id,{bio:e.target.value.trim()||null}),this.editingField=null}}>${t.bio??""}</textarea>`:t.bio?r`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${t.bio}</p>`:r`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}isFollowingOnly(t){const e=this.detailCircles(t);return e.length>0&&e.every(i=>i.id>9)}renderKit(t){if(this.isFollowingOnly(t))return c;const e=t.next_meet_date,i="nextmeet",s=r`<button type="button" class="rounded px-1 -mx-1 hover:bg-hover ${e?"text-ink":"text-muted/50"}"
        @click=${n=>void this.querySelector(`mana-date-picker[data-field="${i}"]`)?.show(n.currentTarget)}>${e?this.fmtMeetDate(e):"—"}</button>
      <mana-date-picker headless clearable data-field=${i} label="Next meet" .value=${e??""}
        @change=${n=>void this.patchPerson(t.id,{next_meet_date:n.target.value||null})}></mana-date-picker>`;return r`<div>
      <span class="block text-[11px] text-muted">Next meet</span>
      <span class="block mt-0.5 text-sm leading-tight">${s}</span>
    </div>`}tidyLabel(t){return t===t.toUpperCase()&&t!==t.toLowerCase()?t.toLowerCase():t}renderDetailsList(t){return r`
      ${t.facts.map(e=>r`
        <div class="flex gap-3 py-0.5 text-sm group/d items-start">
          ${e.label?r`<span class="text-[11px] capitalize tracking-wide text-muted w-28 shrink-0 pt-1 cursor-text hover:text-ink" @click=${()=>{this.editingField=`factlabel:${e.id}`}}>${this.editingField===`factlabel:${e.id}`?r`<input type="text" class="inline-edit w-full bg-surface ring-1 ring-ink rounded px-1 focus:outline-none text-ink normal-case" .value=${e.label} autofocus @blur=${i=>{this.patch(`/api/circle/fact/${e.id}`,{label:i.target.value.trim()||null}),this.editingField=null}} @keydown=${i=>{i.key==="Enter"&&i.target.blur()}} />`:this.tidyLabel(e.label)}</span>`:r`<span class="text-muted pt-0.5">•</span>`}
          <span class="flex-1 min-w-0">${this.editable(`fact:${e.id}`,e.value,"text-ink",i=>i?void this.patch(`/api/circle/fact/${e.id}`,{value:i}):void this.del(`/api/circle/fact/${e.id}`))}</span>
          <button type="button" class="opacity-0 group-hover/d:opacity-100 text-muted hover:text-red-500 text-xs pt-1" @click=${()=>void this.del(`/api/circle/fact/${e.id}`)}>✕</button>
        </div>`)}
      ${this.editingField==="newfact"?r`<div class="newfact-form flex gap-1.5 mt-1.5">
            <input id="nf-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input id="nf-value" type="text" placeholder="detail" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${e=>{e.key==="Enter"?this.submitNewFact(t.id):e.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitNewFact(t.id)}>Add</button>
          </div>`:r`<button type="button" class="text-xs text-muted hover:text-ink mt-1.5" @click=${()=>{this.editingField="newfact"}}>+ add detail</button>`}`}submitNewFact(t){const e=this.renderRoot.querySelector("#nf-label"),s=this.renderRoot.querySelector("#nf-value")?.value.trim();if(!s){this.editingField=null;return}this.post(`/api/circle/person/${t}/fact`,{value:s,label:e?.value.trim()||null}),this.editingField=null}renderDetailBody(t){return r`
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
      </div>`:r`<div class="flex-1 grid place-items-center text-muted text-sm">Loading…</div>`}async openReview(){try{const t=await fetch("/api/circle/pending");t.ok&&(this.pending=(await t.json()).pending)}catch{}this.view="review"}async confirmPending(t,e){await fetch(`/api/circle/pending/${t}/confirm`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person_id:e})}),this.pending=this.pending.filter(i=>i.id!==t),await this.refresh(),this.pending.length===0&&(this.view="list")}async rejectPending(t){await this.del(`/api/circle/pending/${t}`),this.pending=this.pending.filter(e=>e.id!==t),this.pending.length===0&&(this.view="list")}renderReview(){return r`
      <header class="px-3 py-2.5 border-b border-line shrink-0 flex items-center gap-2">
        <button type="button" class="text-sm text-muted hover:text-ink flex items-center gap-1 px-1.5 py-1 rounded hover:bg-hover" @click=${()=>{this.view="list"}}>‹ All</button>
        <span class="text-sm text-ink font-medium">Confirm what I picked up</span>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto px-4 py-3">
        ${this.pending.length===0?r`<p class="text-sm text-muted">Nothing to confirm.</p>`:c}
        <ul class="space-y-3">${this.pending.map(t=>{const e=t.target_kind==="person",i=t.person_id==null&&!e;return r`
          <li class="border border-line rounded-lg p-3">
            ${e?r`<p class="text-sm font-medium text-ink mb-0.5">Add ${t.person_hint??"this person"} to your circle?</p>`:c}
            <p class="text-sm ${e?"text-muted":"text-ink"} mb-2">${t.suggestion}</p>
            ${i?r`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${t.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(s=>r`<option value=${s.id}>${s.name}</option>`)}
                </select>
              </div>`:c}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(t.id)}>${e?"Not now":"No"}</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const s=this.renderRoot.querySelector(`#pend-${t.id}`),n=t.person_id??(s?.value?Number(s.value):null);if(i&&n==null){alert("Pick a person first.");return}this.confirmPending(t.id,n)}}>${e?"Add":"Yes"}</button>
            </div>
          </li>`})}</ul>
      </div>`}render(){return r`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};K([d()],q.prototype,"view",2);K([d()],q.prototype,"circles",2);K([d()],q.prototype,"people",2);K([d()],q.prototype,"pendingCount",2);K([d()],q.prototype,"loading",2);K([d()],q.prototype,"filter",2);K([d()],q.prototype,"selectedId",2);K([d()],q.prototype,"detail",2);K([d()],q.prototype,"adding",2);K([d()],q.prototype,"pending",2);K([d()],q.prototype,"draftName",2);K([d()],q.prototype,"draftCircle",2);K([d()],q.prototype,"editingNote",2);K([d()],q.prototype,"creatingCircle",2);K([d()],q.prototype,"editingField",2);K([d()],q.prototype,"settingsOpen",2);K([d()],q.prototype,"showCompletedActions",2);K([d()],q.prototype,"detailsOpen",2);K([d()],q.prototype,"expandedNotes",2);K([d()],q.prototype,"photoMenuOpen",2);K([V("#photo-file")],q.prototype,"photoInput",2);q=K([w("circle-section")],q);var Rm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,at=(t,e,i,s)=>{for(var n=s>1?void 0:s?Nm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Rm(e,i,n),n};const Di=[{key:"topic",question:"What do you want to pull off?",hint:'The quest in a few words. "Retell webhook into Nudge", "a story people listen to".',required:!0},{key:"mission",question:"What will exist when it's done?",hint:"Something real that isn't there now: a workflow running on live calls, a story told to a room, a tool strangers use.",required:!0},{key:"success",question:"Who sees it, or what proves it's real?",hint:"A person or a live run: a user, a listener, a client, production. This becomes the last step, the gate.",required:!0},{key:"known",question:"What do you already have or know?",hint:'The steps skip it. "Nothing" is a fine answer.',required:!1}],jm=[2,3,4,6],Fm={link:"a link",file:"a file",screenshot:"a screenshot",recording:"a recording",photo:"a photo",quote:"what they said",other:"proof"},Um=86400,Bm=()=>Math.floor(Date.now()/1e3),Sn=t=>new Date(t*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"});let it=class extends T{constructor(){super(...arguments),this.quests=[],this.journal=[],this.loading=!0,this.view="list",this.wizardStep=0,this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.submitting=!1,this.error="",this.proofText="",this.proofUrl="",this.sending=!1,this.stuckOpen=!1,this.stuckText="",this.shelving=!1,this.shelveWhy="",this.openScrolls=[],this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>{this.view!=="wizard"&&!this.proofText&&!this.proofUrl&&!this.stuckOpen&&!this.shelving&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const t=await fetch("/api/learn");if(t.ok){const e=await t.json();this.quests=e.quests,this.journal=e.journal}}catch{}this.loading=!1}get active(){return this.quests.find(t=>t.status==="active")??null}currentStep(t){return t.steps.find(e=>e.status==="todo")??null}daysLeft(t){return t.due_at==null?null:Math.ceil((t.due_at-Bm())/Um)}async post(t,e){return fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:e?JSON.stringify(e):void 0})}openWizard(){if(this.active){this.view=this.active.id;return}this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.wizardStep=0,this.error="",this.view="wizard",this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}wizardNext(){if(this.wizardStep<Di.length){const t=Di[this.wizardStep];if(t.required&&!this.wizard[t.key].trim())return;this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}else this.createQuest()}async createQuest(){if(!this.submitting){this.submitting=!0,this.error="";try{const t=await this.post("/api/learn/quests",{...this.wizard,weeks:this.weeks}),e=await t.json().catch(()=>({}));t.ok&&e.id?(await this.refresh(),this.view=e.id):this.error=e.error||"Couldn't start the quest."}finally{this.submitting=!1}}}renderWizard(){const t=this.wizardStep===Di.length,e=t?null:Di[this.wizardStep],i=t||!e.required||!!this.wizard[e.key].trim(),s=Di.length+1;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex gap-1.5 mb-6">
            ${Array.from({length:s},(n,o)=>r`<div class="h-1 flex-1 rounded-full ${o<=this.wizardStep?"bg-accent":"bg-line"}"></div>`)}
          </div>
          ${t?r`
                <h3 class="text-base font-semibold text-ink mb-1">How many weeks?</h3>
                <p class="text-xs text-muted mb-3">When time's up, the quest ships or gets shelved with a one-line why. 2 for a small thing, 4 as the default, 6 for a real build.</p>
                <div class="grid grid-cols-4 gap-2">
                  ${jm.map(n=>r`<button type="button"
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
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!i||this.submitting?"opacity-40 pointer-events-none":""}"
              @click=${this.wizardNext}
            >${this.submitting?"…":t?"Start the quest":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async patchStep(t,e){await fetch(`/api/learn/steps/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async submitProof(t){const e=this.proofText.trim(),i=this.proofUrl.trim();if(!(!e&&!i||this.sending)){this.sending=!0;try{(await this.post(`/api/learn/steps/${t.id}/proof`,{text:e,url:i})).ok&&(this.proofText="",this.proofUrl="")}finally{this.sending=!1}await this.refresh()}}async askScroll(t){const e=this.stuckText.trim();this.stuckOpen=!1,this.stuckText="",await this.post(`/api/learn/steps/${t.id}/unblock`,{stuck:e}),this.openScrolls=[...this.openScrolls,t.id],await this.refresh()}async markPassed(t){await this.post(`/api/learn/steps/${t.id}/pass`,{}),await this.refresh()}async ship(t){confirm(`Ship "${t.topic}"? Only do this if the gate really happened.`)&&(await this.post(`/api/learn/quests/${t.id}/ship`,{}),await this.refresh())}async shelve(t){const e=this.shelveWhy.trim();e&&(this.shelving=!1,this.shelveWhy="",await this.post(`/api/learn/quests/${t.id}/shelve`,{why:e}),await this.refresh())}async removeQuest(t){confirm(`Delete "${t.topic}", its steps and its journal entries?`)&&(await fetch(`/api/learn/quests/${t.id}`,{method:"DELETE"}),this.view="list",await this.refresh())}async regenSteps(t){t.steps.some(e=>e.status==="done")&&!confirm("Regenerating throws away the current steps, including the passed ones. Continue?")||(await this.post(`/api/learn/quests/${t.id}/regen`,{}),await this.refresh())}iconUrl(t){if(!/\p{Extended_Pictographic}/u.test(t))return null;const i=[.../‍/.test(t)?t:t.replace(/️/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderEmoji(t,e="w-[18px] h-[18px]",i="text-[15px]"){const s=t.emoji||"🧭",n=this.iconUrl(s);return n?r`<img src=${n} alt="" class="${e} select-none shrink-0" draggable="false" />`:r`<span class="${i} leading-none shrink-0">${s}</span>`}statusPill(t){if(t.status==="done")return t.result==="shipped"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold shrink-0">Shipped</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-line/60 text-muted font-semibold shrink-0">Shelved</span>`;const e=this.daysLeft(t);return e==null?c:e<=0?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold shrink-0">Time's up</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full ${e<=3?"bg-amber-100 text-amber-700":"bg-accent/15 text-accent"} font-semibold shrink-0">${e}d left</span>`}renderClock(t){const e=this.daysLeft(t),i=t.weeks*7,s=e==null?0:Math.min(i,Math.max(0,i-e)),n=Math.round(s/i*100),o=e!=null&&e<=0;return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="h-1.5 rounded-full bg-line overflow-hidden"><div class="h-full ${o?"bg-amber-500":"bg-accent"} transition-all" style="width:${n}%"></div></div>
        <div class="flex items-center justify-between gap-3 mt-2">
          <p class="text-xs text-muted">
            ${o?r`<span class="text-ink font-medium">Time's up.</span> Ship it if the gate happened, otherwise shelve it with a one-line why.`:r`<span class="text-ink font-medium">${e} day${e===1?"":"s"} left</span> of ${t.weeks} weeks · due ${t.due_at?Sn(t.due_at):""}`}
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
          @input=${i=>{this.proofText=i.target.value}}
        ></textarea>
        <div class="flex items-center gap-2">
          <input class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
            placeholder="link (optional)"
            .value=${this.proofUrl}
            @input=${i=>{this.proofUrl=i.target.value}} />
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
                <button type="button" class="text-[11px] text-accent hover:underline" @click=${()=>{this.openScrolls=e?this.openScrolls.filter(i=>i!==t.id):[...this.openScrolls,t.id]}}>
                  ${e?"▾":"▸"} Scroll${t.stuck?r` <span class="text-muted">· ${t.stuck}</span>`:c}
                </button>
                ${e?r`<div class="chat-md mt-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-xs leading-relaxed">${W(pl(t.scroll))}</div>`:c}
                ${e?r`<button type="button" class="mt-1 text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>stuck on something else?</button>`:c}
              `:this.stuckOpen?r`<div class="flex items-center gap-2">
                  <input class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                    placeholder="what's stuck? (optional — Enter to ask)"
                    .value=${this.stuckText}
                    @input=${i=>{this.stuckText=i.target.value}}
                    @keydown=${i=>{i.key==="Enter"?this.askScroll(t):i.key==="Escape"&&(this.stuckOpen=!1,this.stuckText="")}} />
                  <button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.askScroll(t)}>Ask for a scroll</button>
                </div>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>
                  ${t.scroll_status==="failed"?"The scroll didn't come. Ask again":"Stuck? Ask for a scroll"}
                </button>`}
      </div>
    `}renderStepRow(t,e,i){const s=e.status==="done",n=e.status==="skipped",o=s||n,a=t.status==="active";return r`
      <li class="group relative flex gap-3 px-4 py-3 ${i?"bg-accent/5":""}">
        <span class="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-semibold ${s?"bg-accent text-white":n?"bg-line text-muted":i?"border-[1.5px] border-accent text-accent":"border-[1.5px] border-line text-muted"}">
          ${s?r`<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:n?"~":e.seq}
        </span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-medium ${o?"text-muted line-through decoration-line":"text-ink"}">${e.title}</span>
            ${e.is_gate?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-ink text-white font-semibold">Gate</span>`:c}
            ${i?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold">Here</span>`:c}
            ${e.days&&!o?r`<span class="text-[10px] text-muted">~${e.days}d</span>`:c}
          </div>
          ${e.exercise&&!o?r`<p class="text-xs text-ink/80 mt-0.5 leading-snug">${e.exercise}</p>`:c}
          ${e.bar&&!o?r`<p class="text-[11px] text-muted mt-1 leading-snug"><span class="font-semibold">Bar:</span> ${e.bar}${e.proof_kind?r` <span class="text-muted/70">· bring ${Fm[e.proof_kind]??e.proof_kind}</span>`:c}</p>`:c}
          ${s&&(e.proof||e.verdict_note)?r`<p class="text-xs text-muted/80 mt-0.5 italic leading-snug">${e.proof??e.verdict_note}${e.proof_url?r` <a class="text-link not-italic hover:underline" href=${e.proof_url} target="_blank" rel="noopener">link</a>`:c}</p>`:c}
          ${i&&a?this.renderProofForm(e):c}
        </div>
        ${a?r`<div class="absolute right-3 top-3 flex items-center gap-2 opacity-0 group-hover:opacity-70 hover:!opacity-100">
              ${e.status==="todo"?r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Already covered — skip" @click=${()=>void this.patchStep(e.id,{status:"skipped"})}>skip</button>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Reopen" @click=${()=>void this.patchStep(e.id,{status:"todo"})}>reopen</button>`}
            </div>`:c}
      </li>
    `}renderDetail(t){const e=this.currentStep(t),i=t.path_status==="ready",s=t.steps.filter(a=>a.status!=="todo").length,n=[t.mission?{label:"Outcome",value:t.mission}:null,t.success?{label:"Gate",value:t.success}:null,t.known?{label:"Has already",value:t.known}:null,t.why?{label:"Why shelved",value:t.why}:null].filter(a=>a!==null),o=this.journal.filter(a=>a.skill_id===t.id);return r`
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
          <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Steps${i&&t.steps.length?r` · ${s}/${t.steps.length}`:c}</h4>
          ${i?t.steps.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No steps — ask the coach in chat, or regenerate.</p>`:r`<ul class="pb-2 divide-y divide-line/40">
                  ${t.steps.map(a=>this.renderStepRow(t,a,e?.id===a.id))}
                </ul>`:this.renderStepsPending(t)}
        </section>

        ${o.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${o.map(a=>this.renderJournalRow(a))}</ul>
            </section>`:c}

        ${i&&t.status==="active"?r`<div class="flex items-center gap-3 px-1">
              <button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.regenSteps(t)}>↻ regenerate steps</button>
              ${!this.daysLeft(t)||(this.daysLeft(t)??1)>0?r`<button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>{this.shelving=!0}}>shelve early</button>`:c}
            </div>`:c}
      </div>
    `}renderJournalRow(t){const e=t.kind==="shipped"?"🏁":t.kind==="gate"?"🚪":t.kind==="shelved"?"📦":t.kind==="unblock"?"📜":t.kind==="started"?"🧭":"✓";return r`
      <li class="flex gap-2.5 px-4 py-1.5">
        <span class="shrink-0 w-10 text-[11px] text-muted tabular-nums pt-px">${Sn(t.created_at)}</span>
        <span class="shrink-0 text-[11px] pt-px">${e}</span>
        <span class="flex-1 min-w-0 text-xs text-ink leading-snug">${t.text}${t.url?r` <a class="text-link hover:underline" href=${t.url} target="_blank" rel="noopener">link</a>`:c}</span>
      </li>
    `}renderActiveCard(t){const e=this.currentStep(t),i=t.steps.filter(s=>s.status!=="todo").length;return r`
      <button type="button" class="w-full text-left rounded-xl border border-ink/20 bg-surface px-4 py-3 hover:bg-hover transition-colors" @click=${()=>{this.view=t.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(t,"w-[20px] h-[20px]","text-[17px]")}
          <span class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${t.topic}</span>
          ${this.statusPill(t)}
        </div>
        ${t.path_status!=="ready"?r`<p class="mt-1.5 text-xs text-muted flex items-center gap-1.5">
              ${t.path_status==="failed"?"the steps didn't come — open to retry":r`<span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> laying out the steps…`}
            </p>`:e?r`<p class="mt-1.5 text-xs text-muted truncate"><span class="text-accent font-medium">Step ${i+1} of ${t.steps.length}:</span> ${e.title}${e.verdict==="judging"?" · checking proof":""}</p>`:r`<p class="mt-1.5 text-xs text-muted">Every step is in. Ship it.</p>`}
      </button>
    `}renderShelfCard(t){return r`
      <button type="button" class="w-full text-left rounded-xl border border-line bg-surface px-4 py-2.5 hover:bg-hover transition-colors" @click=${()=>{this.view=t.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(t,"w-[16px] h-[16px]","text-[14px]")}
          <span class="flex-1 min-w-0 text-sm text-ink truncate">${t.topic}</span>
          ${this.statusPill(t)}
          ${t.completed_at?r`<span class="text-[11px] text-muted shrink-0">${Sn(t.completed_at)}</span>`:c}
        </div>
        ${t.result==="shelved"&&t.why?r`<p class="mt-1 text-xs text-muted truncate">${t.why}</p>`:c}
      </button>
    `}renderList(){const t=this.active,e=this.quests.filter(s=>s.status==="done"),i=this.journal.slice(0,12);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.loading?c:t?this.renderActiveCard(t):r`<div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
                <p class="text-sm text-ink font-medium">${e.length?"Nothing in flight.":"A quest is a real outcome someone else can see."}</p>
                <p class="text-xs text-muted mt-1">Name it, name who sees it, pick the weeks. You get steps that each end in proof; the last one is the gate.</p>
                <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${this.openWizard}>Start a quest</button>
              </div>`}

        ${i.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${i.map(s=>this.renderJournalRow(s))}</ul>
            </section>`:c}

        ${e.length?r`<section class="space-y-2">
              <h4 class="px-1 pt-1 text-[11px] font-semibold text-muted">Shelf</h4>
              ${e.map(s=>this.renderShelfCard(s))}
            </section>`:c}
      </div>
    `}render(){const t=typeof this.view=="number"?this.quests.find(i=>i.id===this.view):void 0,e=this.active;return r`
      <div class="relative flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-sm font-semibold text-ink">Learn</h2>
          ${this.view==="wizard"?c:e?r`<span class="text-[11px] text-muted" title="Ship or shelve the running quest to start another">one quest at a time</span>`:r`<button type="button" class="px-2.5 py-1 rounded-full text-sm font-medium text-muted hover:text-ink hover:bg-hover transition-colors" @click=${this.openWizard}>+ New quest</button>`}
        </header>
        ${this.view==="wizard"?this.renderWizard():t?this.renderDetail(t):this.renderList()}
      </div>
    `}};at([d()],it.prototype,"quests",2);at([d()],it.prototype,"journal",2);at([d()],it.prototype,"loading",2);at([d()],it.prototype,"view",2);at([d()],it.prototype,"wizardStep",2);at([d()],it.prototype,"wizard",2);at([d()],it.prototype,"weeks",2);at([d()],it.prototype,"submitting",2);at([d()],it.prototype,"error",2);at([d()],it.prototype,"proofText",2);at([d()],it.prototype,"proofUrl",2);at([d()],it.prototype,"sending",2);at([d()],it.prototype,"stuckOpen",2);at([d()],it.prototype,"stuckText",2);at([d()],it.prototype,"shelving",2);at([d()],it.prototype,"shelveWhy",2);at([d()],it.prototype,"openScrolls",2);it=at([w("learn-section")],it);var Hm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,Bo=(t,e,i,s)=>{for(var n=s>1?void 0:s?zm(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Hm(e,i,n),n};let Hs=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await Lt(()=>import("./been-to-section-BivDzRdw.js"),__vite__mapDeps([6,3,4,7,5,8])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<been-to-section class="flex flex-col flex-1 min-h-0"></been-to-section>`:r`<div class="flex-1 grid place-items-center text-sm" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>Could not load Been to. Retry</button>`:r`<span>Loading your map…</span>`}</div>${c}`}};Bo([d()],Hs.prototype,"ready",2);Bo([d()],Hs.prototype,"failed",2);Hs=Bo([w("been-to-loader")],Hs);var qm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,X=(t,e,i,s)=>{for(var n=s>1?void 0:s?Km(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&qm(e,i,n),n};const sn="h-8 px-3.5 inline-flex items-center justify-center gap-1.5 rounded-full text-sm font-medium transition-colors duration-[120ms] disabled:opacity-50 disabled:pointer-events-none",zi=`${sn} bg-ink text-surface hover:opacity-85`,ho=`${sn} bg-surface text-ink ring-1 ring-line shadow-card hover:bg-hover`,Wm=`${sn} text-ink-2 hover:text-[#dc2626] hover:bg-[#dc2626]/10`,Gm=`${sn} bg-[#dc2626] text-white hover:bg-[#b91c1c]`,Wr="h-9 w-full px-3 rounded-lg bg-surface text-sm text-ink ring-1 ring-line placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink/40",Tn="inline-flex items-center gap-1.5 h-5 px-2 rounded-full text-xs font-medium shrink-0",zs=t=>t.name||t.login;function Ho(t){return new Date(t*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function Hl(t){if(!t)return"";const e=Math.floor((Date.now()/1e3-t)/60);return e<2?"Now":e<60?`${e}m ago`:e<1440?`${Math.floor(e/60)}h ago`:e<1440*7?`${Math.floor(e/1440)}d ago`:Ho(t)}async function zl(t,e,i){const s=await fetch(e,{method:t,headers:{"content-type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)}),n=await s.json().catch(()=>({}));if(!s.ok||!n.member)throw new Error(n.error||"Something went wrong. Try again.");return{member:n.member}}const Vm=(t,e)=>zl("PATCH",`/api/members/${encodeURIComponent(t)}`,e).then(i=>i.member);function Gr(t){return r`<span class="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-hover text-xs font-semibold text-ink">${(t||"?").slice(0,1).toUpperCase()}</span>`}let qi=class extends T{constructor(){super(...arguments),this.data=null,this.failed=!1,this.showRemoved=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const t=await fetch("/api/members");if(!t.ok)throw new Error(String(t.status));this.data=await t.json(),this.failed=!1}catch{this.failed=!this.data}}openAdd(){const t=document.createElement("member-add-dialog");t.signInUrl=this.data?.signInUrl||location.origin,t.addEventListener("member-changed",()=>void this.refresh()),document.body.append(t)}openMember(t){const e=document.createElement("member-dialog");e.member=t,e.signInUrl=this.data?.signInUrl||location.origin,e.addEventListener("member-changed",()=>void this.refresh()),document.body.append(e)}renderRow(t){const e=zs(t),i=t.status==="removed",s=!i&&!t.lastSeen,n=()=>this.openMember(t);return r`
      <tr
        class="group cursor-pointer hover:bg-hover focus-visible:bg-hover outline-none"
        tabindex="0"
        @click=${n}
        @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n())}}
      >
        <td class="py-2.5 pr-3">
          <div class="flex items-center gap-3 min-w-0">
            ${Gr(e)}
            <div class="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span class="text-sm text-ink truncate group-hover:underline underline-offset-2">${e}</span>
              ${t.name?r`<span class="text-sm text-ink truncate">${t.login}</span>`:c}
            </div>
            ${s?r`<span class="${Tn} bg-warn/12 text-warn"><span class="w-1.5 h-1.5 rounded-full bg-warn"></span>Not signed in yet</span>`:c}
            ${!i&&t.ai==="off"?r`<span class="${Tn} bg-ink/6 text-ink-2">AI off</span>`:c}
          </div>
        </td>
        <td class="py-2.5 text-sm text-muted text-right whitespace-nowrap">
          ${i?t.removedAt?Ho(t.removedAt):"":Hl(t.lastSeen)}
        </td>
      </tr>
    `}renderTable(t,e){const i=this.data?.owner;return r`
      <div class="mana-card px-4">
        <table class="w-full sm:table-fixed">
          <colgroup><col class="sm:w-[75%]" /><col class="sm:w-[25%]" /></colgroup>
          <thead>
            <tr>
              <th class="pt-3.5 pb-2 text-left text-sm font-semibold text-ink-2">Name</th>
              <th class="pt-3.5 pb-2 text-right text-sm font-semibold text-ink-2">${e?"Last seen":"Removed"}</th>
            </tr>
          </thead>
          <tbody class="[&>tr>td]:border-t-[0.5px] [&>tr>td]:border-line">
            ${e&&i?r`<tr>
                  <td class="py-2.5 pr-3">
                    <div class="flex items-center gap-3 min-w-0">
                      ${Gr(i.name||i.login)}
                      <div class="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                        <span class="text-sm text-ink truncate">${i.name||i.login}</span>
                        <span class="text-sm text-ink truncate">${i.login}</span>
                      </div>
                      <span class="${Tn} bg-ink/6 text-ink-2">You</span>
                    </div>
                  </td>
                  <td></td>
                </tr>`:c}
            ${t.map(s=>this.renderRow(s))}
          </tbody>
        </table>
      </div>
    `}render(){const t=this.data?.members??[],e=t.filter(s=>s.status==="active"),i=t.filter(s=>s.status==="removed");return r`
      <div class="flex-1 min-h-0 overflow-y-auto">
        <div class="mx-auto w-full max-w-[58rem] px-4 py-5 space-y-3">
          <div class="flex justify-end">
            <button type="button" class=${zi} @click=${()=>this.openAdd()}>
              <sc-icon name="lucide-plus" class="w-4 h-4"></sc-icon>Add member
            </button>
          </div>

          ${this.failed?r`<div class="mana-card px-4 py-3 text-sm text-ink">Couldn't load members. <button type="button" class="underline underline-offset-2" @click=${()=>void this.refresh()}>Try again</button></div>`:this.data?this.renderTable(e,!0):r`<div class="mana-card px-4 py-3"><div class="h-5 rounded bg-hover animate-pulse"></div></div>`}

          ${i.length?r`
                <button type="button" class="text-sm text-muted hover:text-ink px-1" @click=${()=>{this.showRemoved=!this.showRemoved}}>
                  ${this.showRemoved?"Hide removed":`Show ${i.length} removed`}
                </button>
                ${this.showRemoved?this.renderTable(i,!1):c}
              `:c}
        </div>
      </div>
    `}};X([d()],qi.prototype,"data",2);X([d()],qi.prototype,"failed",2);X([d()],qi.prototype,"showRemoved",2);qi=X([w("members-section")],qi);let Zt=class extends T{constructor(){super(...arguments),this.signInUrl="",this.email="",this.name="",this.ai=!0,this.busy=!1,this.error="",this.added=null,this.copied=!1}close(){this.busy||this.remove()}firstUpdated(){requestAnimationFrame(()=>this.querySelector("input[name=email]")?.focus())}async submit(){if(!(this.busy||!this.email.trim())){this.busy=!0,this.error="";try{const{member:t}=await zl("POST","/api/members",{email:this.email,name:this.name,ai:this.ai?"on":"off"});this.added=t,this.dispatchEvent(new CustomEvent("member-changed"))}catch(t){this.error=t instanceof Error?t.message:String(t)}finally{this.busy=!1}}}async copyUrl(){try{await navigator.clipboard.writeText(this.signInUrl),this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)}catch{}}renderAdded(t){const e=this.signInUrl.replace(/^https?:\/\//,"");return r`<sc-dialog label="${zs(t)} can sign in now" open @sc-hide=${this.close}>
      <div class="space-y-3 text-sm text-ink">
        <p>Send them this link. They sign in with the Google account for <span class="font-medium">${t.login}</span>.</p>
        <div class="flex items-center gap-2">
          <span class="flex-1 min-w-0 h-9 px-3 inline-flex items-center rounded-lg bg-hover truncate">${e}</span>
          <button type="button" class=${ho} @click=${()=>void this.copyUrl()}>
            <sc-icon name="lucide-${this.copied?"check":"copy"}" class="w-4 h-4"></sc-icon>${this.copied?"Copied":"Copy"}
          </button>
        </div>
      </div>
      <div slot="footer" class="flex justify-end">
        <button type="button" class=${zi} @click=${()=>this.close()}>Done</button>
      </div>
    </sc-dialog>`}render(){if(this.added)return this.renderAdded(this.added);const t=e=>{e.key==="Enter"&&(e.preventDefault(),this.submit())};return r`<sc-dialog label="Add member" open @sc-hide=${this.close}>
      <div class="space-y-4">
        <label class="block space-y-1.5">
          <span class="text-sm font-medium text-ink-2">Email</span>
          <input name="email" type="email" autocomplete="off" placeholder="name@gmail.com" class=${Wr}
            .value=${this.email} @input=${e=>{this.email=e.target.value,this.error=""}} @keydown=${t} />
        </label>
        <label class="block space-y-1.5">
          <span class="text-sm font-medium text-ink-2">Name</span>
          <input name="name" type="text" autocomplete="off" placeholder="Optional" class=${Wr}
            .value=${this.name} @input=${e=>{this.name=e.target.value}} @keydown=${t} />
        </label>
        <div class="flex items-center justify-between gap-4">
          <span class="text-sm text-ink">Uses your AI subscription</span>
          <sc-toggle .checked=${this.ai} @sc-change=${e=>{this.ai=e.detail.checked}}></sc-toggle>
        </div>
        ${this.error?r`<p class="text-sm text-[#dc2626]">${this.error}</p>`:c}
      </div>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class=${ho} @click=${()=>this.close()}>Cancel</button>
        <button type="button" class=${zi} ?disabled=${this.busy||!this.email.trim()} @click=${()=>void this.submit()}>
          ${this.busy?"Adding…":"Add member"}
        </button>
      </div>
    </sc-dialog>`}};X([b({attribute:!1})],Zt.prototype,"signInUrl",2);X([d()],Zt.prototype,"email",2);X([d()],Zt.prototype,"name",2);X([d()],Zt.prototype,"ai",2);X([d()],Zt.prototype,"busy",2);X([d()],Zt.prototype,"error",2);X([d()],Zt.prototype,"added",2);X([d()],Zt.prototype,"copied",2);Zt=X([w("member-add-dialog")],Zt);let Te=class extends T{constructor(){super(...arguments),this.member=null,this.signInUrl="",this.saving=!1,this.saved=!1,this.error="",this.confirming=!1}close(){this.saving||this.remove()}async save(t){if(!this.member)return!1;this.saving=!0,this.error="";try{return this.member=await Vm(this.member.login,t),this.saved=!0,setTimeout(()=>{this.saved=!1},1500),this.dispatchEvent(new CustomEvent("member-changed")),!0}catch(e){return this.error=e instanceof Error?e.message:String(e),!1}finally{this.saving=!1}}saveName(t){const i=t.target.value.trim().replace(/\s+/g," ");!this.member||i===this.member.name||this.save({name:i})}renderConfirm(t){const e=zs(t);return r`<sc-dialog label="Remove ${e}?" open @sc-hide=${()=>{this.confirming=!1}}>
      <p class="text-sm text-ink leading-relaxed">${e} won't be able to sign in on any device. Their notes, goals and chats stay, and adding them back restores everything.</p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class=${ho} autofocus @click=${()=>{this.confirming=!1}}>Cancel</button>
        <button type="button" class=${Gm} ?disabled=${this.saving}
          @click=${async()=>{await this.save({status:"removed"})&&this.remove()}}>
          ${this.saving?"Removing…":"Remove access"}
        </button>
      </div>
    </sc-dialog>`}render(){const t=this.member;if(!t)return c;if(this.confirming)return this.renderConfirm(t);const e=t.status==="removed",i=t.lastSeen?`${Hl(t.lastSeen)}${t.lastDoor?` via ${t.lastDoor==="google"?"Google":"Tailscale"}`:""}`:"";return r`<sc-dialog label=${zs(t)} open @sc-hide=${this.close}>
      <div class="space-y-4">
        <dl class="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-3 items-center text-sm">
          <dt class="text-ink-2">Name</dt>
          <dd>
            <input type="text" placeholder="Add a name"
              class="w-full h-8 -mx-2 px-2 rounded-lg bg-transparent text-ink ring-0 hover:ring-1 hover:ring-line focus:ring-2 focus:ring-ink/40 focus:bg-surface focus:outline-none placeholder:text-muted"
              .value=${t.name} ?disabled=${e}
              @blur=${s=>this.saveName(s)}
              @keydown=${s=>{s.key==="Enter"&&s.target.blur()}} />
          </dd>
          <dt class="text-ink-2">Email</dt>
          <dd class="text-ink truncate">${t.login}</dd>
          ${e?c:r`<dt class="text-ink-2">AI</dt>
                <dd class="flex items-center justify-between gap-3">
                  <span class="text-ink">Uses your AI subscription</span>
                  <sc-toggle .checked=${t.ai==="on"} ?disabled=${this.saving}
                    @sc-change=${s=>void this.save({ai:s.detail.checked?"on":"off"})}></sc-toggle>
                </dd>`}
          <dt class="text-ink-2">Last seen</dt>
          <dd class=${i?"text-ink":"text-muted"}>${i||"Not signed in yet"}</dd>
          <dt class="text-ink-2">${e?"Removed":"Added"}</dt>
          <dd class="text-ink">${Ho(e&&t.removedAt?t.removedAt:t.addedAt)}</dd>
        </dl>
        ${this.error?r`<p class="text-sm text-[#dc2626]">${this.error}</p>`:c}
      </div>
      <div slot="footer" class="w-full flex items-center justify-between gap-2">
        ${e?r`<span></span>`:r`<button type="button" class=${Wm} @click=${()=>{this.confirming=!0}}>Remove access</button>`}
        <div class="flex items-center gap-3">
          <span class="text-sm text-muted" aria-live="polite">${this.saving?"Saving…":this.saved?"Saved":""}</span>
          ${e?r`<button type="button" class=${zi} ?disabled=${this.saving}
                @click=${async()=>{await this.save({status:"active"})&&this.remove()}}>Restore access</button>`:r`<button type="button" class=${zi} @click=${()=>this.close()}>Done</button>`}
        </div>
      </div>
    </sc-dialog>`}};X([b({attribute:!1})],Te.prototype,"member",2);X([b({attribute:!1})],Te.prototype,"signInUrl",2);X([d()],Te.prototype,"saving",2);X([d()],Te.prototype,"saved",2);X([d()],Te.prototype,"error",2);X([d()],Te.prototype,"confirming",2);Te=X([w("member-dialog")],Te);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class uo extends ac{}uo.directiveName="unsafeSVG",uo.resultType=2;const Ym=Ki(uo),Qm=3,Cn=600,En=1200,po=3e3,Vr=80,mo=1250,Jm=[/\bdelv(e|es|ing)\b/i,/\btapestry\b/i,/\btestament to\b/i,/\b(ever-evolving|fast-paced)\b/i,/\bin today'?s\b/i,/\bgame[- ]?changer\b/i,/\bunlock(s|ing)?\b/i,/\bunleash/i,/\belevate(s|d)?\b/i,/\bseamless(ly)?\b/i,/\brobust\b/i,/\bleverag(e|es|ing)\b/i,/\bharness(es|ing)?\b/i,/\bpivotal\b/i,/\bembark/i,/\brevolutioni[sz]e/i,/\bcutting-edge\b/i,/\bsynerg/i,/\bsupercharge/i,/\bnavigat(e|ing) the\b/i,/\brealm\b/i,/\bhere'?s the thing\b/i,/\blet that sink in\b/i,/\b(it'?s|this is|that'?s) not (just|only|about) [^.\n]{1,50}[,;:]\s*(it'?s|but|this is)\b/i,/\bunpopular opinion\b/i,/\bhot take\b/i,/\bplot twist\b/i,/^the result\?/im,/\bnobody (talks|tells you) about\b/i,/\bwhat nobody tells you\b/i,/\btoday years old\b/i,/\b(thrilled|humbled) to (announce|share)\b/i,/\bread that again\b/i,/\bbuckle up\b/i,/\blet me explain\b/i,/\bthat'?s it\. that'?s the post\b/i,/(^|\n)\s*(agree|thoughts)\?\s*$/i,/\brepost\s*♻/i,/\bfollow me for more\b/i,/\bin der heutigen\b/i,/\bnahtlos/i,/\bbahnbrechend/i,/\brevolutionier/i,/\bgamechanger\b/i];function Xm(t){const e=[];for(const i of Jm){const s=t.match(i);s&&e.push(s[0])}return e}const Yr=/https?:\/\/|\bwww\.[a-z]/i;function ql({body:t,firstComment:e,hasImage:i}){const s=[],n=t.trim(),o=n.length,a=n.split(`
`).find(m=>m.trim())??"";s.push(a.length<=Vr?{key:"hook",kind:"reach",level:"pass",label:'Opening line lands before "see more"'}:{key:"hook",kind:"reach",level:"warn",label:`Opening line is ${a.length} characters`,detail:`Under ${Vr} so it lands before "see more" on a phone.`}),o>po?s.push({key:"length",level:"fail",label:`${o} characters, over LinkedIn's ${po}`}):o<Cn?s.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the short side`,detail:`Posts that do well run ${Cn}-${En}.`}):o>En?s.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the long side`,detail:`Posts that do well run ${Cn}-${En}.`}):s.push({key:"length",kind:"style",level:"pass",label:`${o} characters`});const l=(e??"").trim();Yr.test(n)?s.push({key:"link",kind:"reach",level:"warn",label:"Link in the post",detail:"A link in the body costs 11-36% of reach. Move it to the first comment."}):s.push({key:"link",kind:"reach",level:"pass",label:Yr.test(l)?"The link goes in the first comment":"No link in the post"}),i!==void 0&&s.push(i?{key:"image",kind:"reach",level:"pass",label:"Has an image"}:{key:"image",kind:"reach",level:"warn",label:"No image",detail:"Posts with an image stop the scroll more often than text alone."}),l.length>mo&&s.push({key:"comment",level:"fail",label:`First comment is ${l.length} characters, over LinkedIn's ${mo}`});const h=n.match(/(^|\s)#[\p{L}\d_]+/gu)??[];h.length>3&&s.push({key:"hashtags",kind:"style",level:"warn",label:`${h.length} hashtags`,detail:"Three at most; LinkedIn treats them as a nice-to-have."});const u=(n.match(/—| – /g)??[]).length;u&&s.push({key:"dashes",kind:"style",level:"warn",label:`${u} em dash${u===1?"":"es"}`,detail:"A strong AI tell. Use a full stop or a comma."});const p=Xm(n);return p.length&&s.push({key:"ai",kind:"style",level:"warn",label:"Sounds machine-written in places",detail:p.join(", ")}),s}function Zm(t,e){return ql({body:t,firstComment:e}).filter(s=>s.level==="fail").map(s=>s.key==="numbers"&&s.detail?`${s.label}: ${s.detail}`:s.label)}var tf=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,se=(t,e,i,s)=>{for(var n=s>1?void 0:s?ef(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&tf(e,i,n),n};let Qr=null;function sf(){return Qr??=fetch("/api/me").then(t=>t.ok?t.json():null).catch(()=>null),Qr}const Jr="publisher.li_headline",nf='-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", Helvetica, Arial, sans-serif',Xr="rgba(0,0,0,.9)",ge="rgba(0,0,0,.6)",cs={like:Me`<path d="M7 10v11H3V10h4Zm2 10.5V10.2l4.6-7.2c.3-.4.8-.6 1.3-.4 1 .3 1.6 1.3 1.4 2.3L15.5 9H20a2 2 0 0 1 2 2.3l-1.3 7.6A2.5 2.5 0 0 1 18.2 21H10a1 1 0 0 1-1-.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,comment:Me`<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 9.5h10M7 12.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,repost:Me`<path d="M17 3l3 3-3 3M20 6H8a4 4 0 0 0-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 0 0 4-4v-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,send:Me`<path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Zm-11 10 4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>`,more:Me`<circle cx="5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="19" cy="12" r="1.8" fill="currentColor"/>`,globe:Me`<circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M1.8 8h12.4M8 1.8c1.8 1.7 2.7 3.8 2.7 6.2S9.8 12.5 8 14.2C6.2 12.5 5.3 10.4 5.3 8S6.2 3.5 8 1.8Z" fill="none" stroke="currentColor" stroke-width="1.2"/>`};let Kt=class extends T{constructor(){super(...arguments),this.text="",this.mode="mobile",this.imageUrl=null,this.authorName=null,this.expanded=!1,this.truncated=!1,this.me=null,this.editingHeadline=!1,this.headline=f.getState().settings[Jr]??""}connectedCallback(){super.connectedCallback(),sf().then(t=>{this.me=t})}willUpdate(t){t.has("mode")&&(this.expanded=!1)}updated(){const t=this.querySelector("[data-li-text]"),e=!!t&&!this.expanded&&t.scrollHeight>t.clientHeight+1;e!==this.truncated&&!this.expanded&&(this.truncated=e)}async saveHeadline(t){this.editingHeadline=!1;const e=t.trim();if(e!==this.headline){this.headline=e;try{await f.getState().setSetting(Jr,e)}catch{}}}renderHeadline(t){return this.editingHeadline?r`<input type="text" class="block w-full px-1 -mx-1 rounded border outline-none" style="font-size:${t};line-height:16px;color:${Xr};border-color:rgba(0,0,0,.3);background:#fff"
        aria-label="Your LinkedIn headline" placeholder="Your headline, as it shows on LinkedIn" .value=${this.headline}
        @keydown=${e=>{e.key==="Enter"&&this.saveHeadline(e.target.value),e.key==="Escape"&&(this.editingHeadline=!1)}}
        @blur=${e=>void this.saveHeadline(e.target.value)} />`:r`<button type="button" class="block w-full text-left truncate hover:underline" style="font-size:${t};line-height:16px;color:${ge}"
      title="Your headline on LinkedIn. Click to change it."
      @click=${()=>{this.editingHeadline=!0,this.updateComplete.then(()=>this.querySelector("input[aria-label='Your LinkedIn headline']")?.focus())}}
      >${this.headline||r`<span style="font-style:italic">Add your LinkedIn headline</span>`}</button>`}render(){const t=f.getState().settings,e=this.me,i=(e?t[`user:${e.login}:profile_pic_url`]:"")||(e?.role==="owner"?t["cockpit.profile_pic_url"]:"")||e?.profilePic||"",s=this.authorName||e?.displayName||"You",n=this.mode==="mobile",o=this.expanded?"":`display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:${Qm};overflow:hidden;`,a=n?"...more":"…more",l=[["like","Like"],["comment","Comment"],["repost","Repost"],["send","Send"]],h=r`
      <div style="background:#fff;color:${Xr};font-family:${nf};${n?"":"border-radius:8px;box-shadow:0 0 0 1px rgba(140,140,140,.2);"}overflow:hidden;">
        <div class="flex gap-2" style="padding:12px 16px 0 16px;">
          <span class="shrink-0 rounded-full overflow-hidden grid place-items-center font-semibold" style="width:48px;height:48px;background:#e9e5df;color:${ge};font-size:18px">
            ${i?r`<img src=${i} alt="" referrerpolicy="no-referrer" class="w-full h-full object-cover" />`:s.slice(0,1)}
          </span>
          <span class="min-w-0 flex-1">
            <span class="block truncate" style="font-size:14px;line-height:20px;font-weight:600">${s}<span style="font-weight:400;color:${ge}"> • You</span></span>
            ${this.renderHeadline("12px")}
            <span class="flex items-center gap-1" style="font-size:12px;line-height:16px;color:${ge}">now •
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">${cs.globe}</svg></span>
          </span>
          <svg viewBox="0 0 24 24" width="24" height="24" class="shrink-0" style="color:${ge}" aria-hidden="true">${cs.more}</svg>
        </div>
        <div class="relative" style="margin:8px 16px 0 16px;">
          <div data-li-text class="whitespace-pre-wrap break-words" style="font-size:14px;line-height:20px;${o}">${this.text}</div>
          ${this.truncated&&!this.expanded?r`<button type="button" class="absolute right-0 bottom-0 hover:underline" style="font-size:14px;line-height:20px;color:${ge};background:#fff;padding-left:6px;box-shadow:-12px 0 8px #fff"
                @click=${()=>{this.expanded=!0}}>${a}</button>`:c}
        </div>
        ${this.expanded&&this.truncated?r`<button type="button" class="hover:underline" style="margin:2px 16px 0 16px;font-size:12px;color:${ge}" @click=${()=>{this.expanded=!1}}>show less</button>`:c}
        ${this.imageUrl?r`<img src=${this.imageUrl} alt="" class="w-full block" style="margin-top:8px" />`:r`<div style="height:8px"></div>`}
        <div style="margin:0 ${n?16:12}px;border-top:1px solid rgba(0,0,0,.08)"></div>
        <div class="flex ${n?"justify-between":"justify-around"}" style="padding:${n?"6px 20px 10px":"4px 8px"};color:${ge}">
          ${l.map(([u,p])=>n?r`<span class="flex flex-col items-center gap-0.5" style="font-size:12px;line-height:16px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${cs[u]}</svg>${p}</span>`:r`<span class="flex items-center gap-1.5 rounded" style="padding:10px 8px;font-size:14px;line-height:20px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${cs[u]}</svg>${p}</span>`)}
        </div>
      </div>`;return n?r`<div class="mx-auto" style="width:390px;max-width:100%;background:#f4f2ee;padding:8px 0;border-radius:12px;overflow:hidden">${h}</div>`:r`<div class="mx-auto" style="width:555px;max-width:100%">${h}</div>`}};se([b()],Kt.prototype,"text",2);se([b()],Kt.prototype,"mode",2);se([b()],Kt.prototype,"imageUrl",2);se([b()],Kt.prototype,"authorName",2);se([d()],Kt.prototype,"expanded",2);se([d()],Kt.prototype,"truncated",2);se([d()],Kt.prototype,"me",2);se([d()],Kt.prototype,"editingHeadline",2);se([d()],Kt.prototype,"headline",2);Kt=se([w("linkedin-preview")],Kt);function H(t,e,i={}){t.dispatchEvent(new CustomEvent("publisher-toast",{detail:{text:e,...i},bubbles:!0,composed:!0}))}function xe(t,e){return new Promise(i=>{const s={...e,resolve:i};t.dispatchEvent(new CustomEvent("publisher-confirm",{detail:s,bubbles:!0,composed:!0})),s.handled||i(!1)})}const of=t=>new Date(t*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"});var rf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,R=(t,e,i,s)=>{for(var n=s>1?void 0:s?af(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&rf(e,i,n),n};const si=(t,e)=>{if(!t)return e;try{return JSON.parse(t)}catch{return e}},lf=1500,Dn=(t,e,i,s,n,o,a)=>JSON.stringify([t.trim(),e,[...i].sort((l,h)=>l-h),s,n.trim(),o,a.trim()]),cf={pass:r`<span class="text-accent">✓</span>`,warn:r`<span class="text-amber-500">!</span>`,fail:r`<span class="text-red-600">✕</span>`};let _=class extends T{constructor(){super(...arguments),this.draft=null,this.topics=[],this.defaultTopicId=null,this.linkedinConnected=!1,this.webhookConfigured=!1,this.twoCol=!0,this.defaultScheduleAt=null,this.aiWriting=!1,this.improving=!1,this.aiError="",this.backLabel="Drafts",this.authorName=null,this.body="",this.pillar="story",this.aiAngle="",this.commentOpen=!1,this.verticalId=null,this.proofIds=[],this.hooks=[],this.firstComment="",this.questions=[],this.answers={},this.fixing=!1,this.fixResult=null,this.dirty=!1,this.saveState="idle",this.posting=!1,this.proofs=[],this.mode="mobile",this.postMenu=!1,this.scheduleAt="",this.copiedFor=null,this.leaveBlocked=!1,this.loadedFor=null,this.draftId=null,this.editSeq=0,this.inflight=null,this.autosaveTimer=null,this.synced="",this.superseded=new Set,this.beforeFix=null,this.onVisibility=()=>{document.visibilityState==="hidden"&&this.dirty&&this.flush()},this.onPublisherReference=t=>{const e=t.detail?.text;if(!e)return;const i=ml(this.body,e),s=this.renderRoot.querySelector("textarea[data-draft-body]");!i||!s||(s.focus({preventScroll:!0}),s.setSelectionRange(i.start,i.end,"forward"),this.scrollReferenceIntoView(s,i.start))},this.menuHost=null,this.menuAnchor=null,this.closeMenu=()=>{this.postMenu=!1},this.onMenuPress=t=>{const e=t.target;e&&(this.menuHost?.contains(e)||this.menuAnchor?.contains(e))||(this.postMenu=!1)},this.onMenuKey=t=>{t.key==="Escape"&&(t.stopPropagation(),this.postMenu=!1,this.menuAnchor?.focus())},this.onMenuScroll=t=>{const e=t.target;e instanceof Node&&this.menuHost?.contains(e)||this.menuHost?.contains(document.activeElement)||(this.postMenu=!1)}}connectedCallback(){super.connectedCallback(),this.loadProofs(),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("publisher-reference",this.onPublisherReference)}disconnectedCallback(){super.disconnectedCallback(),this.removeMenu(),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("publisher-reference",this.onPublisherReference),this.dirty&&this.flush()}scrollReferenceIntoView(t,e){const i=getComputedStyle(t),s=document.createElement("div");s.style.cssText=["position:fixed","left:-10000px","top:0","visibility:hidden","pointer-events:none",`box-sizing:${i.boxSizing}`,`width:${t.getBoundingClientRect().width}px`,`padding:${i.padding}`,`border:${i.border}`,`font:${i.font}`,`letter-spacing:${i.letterSpacing}`,`line-height:${i.lineHeight}`,"white-space:pre-wrap","overflow-wrap:break-word","word-break:break-word"].join(";"),s.append(document.createTextNode(t.value.slice(0,e)));const n=document.createElement("span");n.textContent="​",s.append(n),document.body.append(s);const o=n.offsetTop;s.remove();let a=t.parentElement;for(;a;){const h=getComputedStyle(a).overflowY;if((h==="auto"||h==="scroll")&&a.scrollHeight>a.clientHeight)break;a=a.parentElement}if(!a){t.scrollIntoView({behavior:"smooth",block:"center"});return}const l=t.getBoundingClientRect().top-a.getBoundingClientRect().top+a.scrollTop;a.scrollTo({top:Math.max(0,l+o-a.clientHeight*.32),behavior:"smooth"})}willUpdate(t){if(!t.has("draft"))return;const e=this.draft,i=e?.id??this.draftId??"new";if(i!==this.loadedFor){this.loadedFor=i,this.draftId=e?.id??null,this.body=e?.body??"",this.pillar=e?.pillar??"story",this.aiAngle=e?.source_note??"",this.commentOpen=!1,this.verticalId=e?.vertical_id??this.defaultTopicId??this.topics[0]?.id??null,this.proofIds=si(e?.proof_ids??null,[]),this.hooks=si(e?.hooks??null,[]),this.firstComment=e?.first_comment??"",this.questions=si(e?.questions??null,[]),this.answers={},this.fixResult=null,this.beforeFix=null,this.dirty=!1,this.saveState="idle",this.leaveBlocked=!1,this.superseded.clear(),this.synced=e?Dn(e.body,e.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle):"";return}if(!e)return;const s=si(e.proof_ids,[]),n=si(e.hooks,[]),o=si(e.questions??null,[]),a=Dn(e.body,e.pillar,s,n,e.first_comment??"",o,e.source_note??"");a===this.synced||this.superseded.has(a)||this.dirty||this.inflight||this.fixing||(e.body!==this.body&&(this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.fixResult={reply:"Changed from chat.",changes:[],warnings:[]}),this.aiAngle=e.source_note??"",this.body=e.body,this.pillar=e.pillar,this.proofIds=s,this.hooks=n,this.firstComment=e.first_comment??"",this.questions=o,this.synced=a)}async loadProofs(){try{const t=await fetch("/api/publisher/proofs");t.ok&&(this.proofs=(await t.json()).proofs.filter(e=>e.status==="active"))}catch{}}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}get linkedProofs(){return this.proofs.filter(t=>this.proofIds.includes(t.id))}get checks(){return ql({body:this.body,proofs:this.linkedProofs,firstComment:this.firstComment,hasImage:this.draftId!=null?!!this.draft?.image_url:void 0})}touched(){this.editSeq++,this.dirty=!0,this.leaveBlocked=!1,this.autosaveTimer&&clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.autosaveTimer=null,this.autosave()},lf)}async autosave(){const t=this.draftId!=null&&this.dirty;await this.flush()&&t&&!this.dirty&&H(this,"Saved")}edit(t){this.body=t,this.fixResult=null,this.beforeFix=null,this.touched()}async fix(t=[]){if(this.fixing||!this.body.trim())return;if(!await this.flush()||this.draftId==null){H(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const e=this.draftId,i=this.body;this.fixing=!0;try{const s=await this.patch(e,{action:"fix",...t.length?{answers:t}:{}}),n=await s.json().catch(()=>({}));if(!s.ok||typeof n.body!="string"){H(this,n.error||"Mana's rewrite didn't come back. Try again.",{tone:"error"});return}if(this.draftId!==e||this.body!==i)return;this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.body=n.body,this.hooks=n.hooks??[],n.format&&(!this.draft||this.draft.status==="draft"||this.draft.status==="approved")&&(this.pillar=n.format),this.questions=n.questions??[],this.answers={},this.fixResult={reply:n.reply??"",changes:n.changes??[],warnings:n.warnings??[]},this.touched(),await this.flush()&&this.emit("improved",{id:e,image:n.image??""})}catch{H(this,"No answer from the cockpit. Try again.",{tone:"error"})}finally{this.fixing=!1}}undoFix(){const t=this.beforeFix;t&&(this.body=t.body,this.hooks=t.hooks,this.pillar=t.pillar,this.questions=t.questions,this.beforeFix=null,this.fixResult=null,this.touched(),H(this,"Back to the version before Fix it"))}addAnswers(){const t=this.questions.map((e,i)=>({question:e,answer:(this.answers[i]??"").trim()})).filter(e=>e.answer);t.length&&this.fix(t)}dismissQuestions(){this.questions=[],this.answers={},this.touched()}swapHook(t){const e=this.body.split(`
`),i=e.findIndex(o=>o.trim()),s=i>=0?e[i]:"";i>=0?e[i]=t:e.unshift(t),this.body=e.join(`
`);const n=this.hooks.filter(o=>o!==t);this.hooks=s.trim()?[s,...n].slice(0,3):n,this.touched()}async flush(){for(this.autosaveTimer&&(clearTimeout(this.autosaveTimer),this.autosaveTimer=null);this.inflight;)await this.inflight;if(!this.dirty)return!0;this.inflight=this.saveOnce();try{return await this.inflight}finally{this.inflight=null}}async saveOnce(){const t=this.editSeq,e=this.body.trim();if(!e||this.verticalId==null)return!0;const i=Dn(e,this.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle),s={body:e,source_note:this.aiAngle.trim()||null,pillar:this.pillar,proof_ids:this.proofIds,hooks:this.hooks,first_comment:this.firstComment.trim(),questions:this.questions};this.saveState="saving";try{const n=this.draftId==null,o=n?await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify({verticalId:this.verticalId,...s})}):await fetch(`/api/publisher/drafts/${this.draftId}`,{method:"PATCH",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify(s)});if(!o.ok)throw new Error(String(o.status));if(n){const{id:a}=await o.json();this.draftId=a,this.loadedFor=a}return this.synced&&this.synced!==i&&this.superseded.add(this.synced),this.synced=i,this.editSeq===t&&(this.dirty=!1),this.saveState="idle",n&&(this.emit("opened",{id:this.draftId}),this.emit("changed")),!0}catch{return this.saveState="error",!1}}async beforeClose(){return await this.flush()||this.leaveBlocked?!0:(this.leaveBlocked=!0,!1)}get blockers(){return Zm(this.body,this.firstComment)}patch(t,e){return fetch(`/api/publisher/drafts/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}async act(t,e){this.postMenu=!1;const i=this.blockers;if(t==="publish"){if(i.length){await xe(this,{title:"This post can't go out yet",body:"Fix these first:",items:i});return}if(!await xe(this,{title:this.linkedinConnected?"Post to LinkedIn now?":"Post through n8n now?",body:this.linkedinConnected?"It goes out as soon as you confirm, with its image and first comment.":"The n8n webhook posts the text only, without the image.",confirm:"Post now",tone:"primary"}))return}if(t==="schedule"&&i.length&&!await xe(this,{title:"Some checks still fail",body:"It's scheduled, but it won't post until these are fixed:",items:i,confirm:"Schedule anyway",tone:"warning"}))return;if(!await this.flush()||this.draftId==null){H(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const s=this.draftId,n={status:this.draft?.status??"draft",scheduledAt:this.draft?.scheduled_at??null};this.postMenu=!1,t==="publish"&&(this.posting=!0);let o;try{o=await this.patch(s,{action:t,...e?{at:e}:{}})}catch{this.posting=!1,H(this,"No answer from the cockpit. Check Published before trying again.",{tone:"error"}),this.emit("changed");return}this.posting=!1;const a=await o.json().catch(()=>({}));if(!o.ok){a.reasons?.length?await xe(this,{title:a.error??"Not posted",items:a.reasons}):H(this,a.error||"That didn't work. Try again.",{tone:"error"}),this.emit("changed");return}const l=this.closest("publisher-section"),h={label:"Undo",run:()=>void this.restore(l,s,n)};t==="schedule"&&e?(H(this,`Scheduled for ${of(e)}`,{action:h}),this.emit("moved",{stage:"scheduled"})):t==="publish"?a.status==="posted"?(H(this,a.commentError?"Posted. The first comment didn't go up; the notification has it.":"Posted to LinkedIn"),this.emit("moved",{stage:"posted"})):(H(this,"Mana can't post it. Copy it to LinkedIn by hand, then tap I posted it."),this.emit("changed")):t==="discard"?(H(this,"Draft deleted",{action:h}),this.emit("moved",{stage:"draft"})):t==="mark-posted"?(H(this,"Marked as posted"),this.emit("moved",{stage:"posted"})):this.emit("changed")}async restore(t,e,i){const s=i.scheduledAt?{action:"schedule",at:i.scheduledAt}:{action:"reopen"},n=await this.patch(e,s),o=i.scheduledAt?"scheduled":"draft",a=t??this;n.ok||H(a,(await n.json().catch(()=>({}))).error||"Couldn't undo that.",{tone:"error"}),a.dispatchEvent(new CustomEvent("publisher-refresh",{detail:{stage:n.ok?o:void 0},bubbles:!0,composed:!0}))}openPostMenu(t){if(this.menuAnchor=t.currentTarget,!this.scheduleAt){const e=this.defaultScheduleAt&&this.defaultScheduleAt*1e3>Date.now()+6e4?new Date(this.defaultScheduleAt*1e3):null,i=e??new Date(Date.now()+864e5);e||i.setHours(9,0,0,0);const s=n=>String(n).padStart(2,"0");this.scheduleAt=`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())}T${s(i.getHours())}:${s(i.getMinutes())}`}this.postMenu=!this.postMenu}updated(){this.renderRoot.querySelectorAll("textarea[data-grow]").forEach(t=>this.growTextarea(t)),this.postMenu?(this.menuHost||(this.menuHost=document.createElement("div"),document.body.appendChild(this.menuHost),document.addEventListener("pointerdown",this.onMenuPress,!0),document.addEventListener("keydown",this.onMenuKey,!0),window.addEventListener("scroll",this.onMenuScroll,!0),window.addEventListener("resize",this.closeMenu)),xt(this.renderPostMenu(),this.menuHost,{host:this}),this.placeMenu()):this.menuHost&&this.removeMenu()}growTextarea(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}removeMenu(){document.removeEventListener("pointerdown",this.onMenuPress,!0),document.removeEventListener("keydown",this.onMenuKey,!0),window.removeEventListener("scroll",this.onMenuScroll,!0),window.removeEventListener("resize",this.closeMenu),this.menuHost&&(xt(c,this.menuHost),this.menuHost.remove()),this.menuHost=null}placeMenu(){const t=this.menuHost?.firstElementChild;if(!t||!this.menuAnchor)return;const e=this.menuAnchor.getBoundingClientRect(),i=this.getBoundingClientRect(),s=8,n=Math.max(i.left,0)+s,o=Math.min(i.right,window.innerWidth)-s,a=Math.max(220,Math.min(320,o-n));t.style.width=`${a}px`,t.style.left=`${Math.max(n,Math.min(e.right-a,o-a))}px`;const l=t.offsetHeight,h=window.innerHeight-e.bottom-s,u=l<=h||h>=e.top-s,p=u?e.bottom+4:Math.max(s,e.top-4-l);t.style.top=`${p}px`,t.style.maxHeight=`${Math.max(160,u?h:e.top-s-4)}px`}renderPostMenu(){const t=Date.now()/1e3,e=this.scheduleAt?Math.floor(new Date(this.scheduleAt).getTime()/1e3):0,i=l=>{const h=new Date;return h.setDate(h.getDate()+l),h.setHours(9,0,0,0),Math.floor(h.getTime()/1e3)},s=(8-new Date().getDay())%7||7,n=[];this.defaultScheduleAt&&this.defaultScheduleAt>t+60&&n.push({label:"Next free slot",at:this.defaultScheduleAt}),n.push({label:"Tomorrow morning",at:i(1)}),s>1&&n.push({label:"Monday morning",at:i(s)});const o=new Set,a=l=>new Date(l*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});return r`
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
      </div>`}async copyAndOpen(){window.open("https://www.linkedin.com/feed/?shareActive=true","_blank","noopener"),await this.copy(),this.copiedFor=this.draftId}async copy(){try{await navigator.clipboard.writeText(this.body),H(this,this.firstComment.trim()?"Copied. The first comment is below the text.":"Copied")}catch{H(this,"Couldn't copy. Select the text and copy it by hand.",{tone:"error"})}}renderSaveState(){return this.saveState==="error"?r`<span class="inline-flex items-center gap-2 text-[11px] text-red-600">Couldn't save
        <button type="button" class="font-medium text-ink hover:underline" @click=${()=>void this.flush()}>Retry</button>
        ${this.leaveBlocked?r`<button type="button" class="text-muted hover:text-ink hover:underline" @click=${()=>this.emit("force-close")}>Leave without saving</button>`:c}</span>`:c}get statusNow(){const t=this.draft,e=t?.status==="approved"&&t.scheduled_at?t.scheduled_at:null;return{status:t?.status==="approved"&&!e?"draft":t?.status??"draft",scheduled:e}}renderHeader(){this.draft;const{status:t,scheduled:e}=this.statusNow,i=e?`Scheduled ${new Date(e*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"})}`:t==="posting"?"Posting…":t==="posted"?"Published":t==="draft"?"Draft":"Discarded";return r`
      <div class="shrink-0 px-3 pt-3">
        <div class="relative flex flex-wrap items-center gap-2 px-4 py-3 mx-auto w-full ${this.twoCol?"max-w-[65rem]":"max-w-2xl"} mana-card">
          <button type="button" class="flex items-center h-7 pl-0.5 pr-1.5 -ml-1 rounded-lg text-sm text-accent hover:bg-hover"
            @click=${()=>this.emit("close")}><sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>${this.backLabel}</button>
          <span class="flex-1"></span>
          ${this.renderSaveState()}
          <span class="text-[11px] px-2 py-0.5 rounded-full font-medium ${e||t==="posting"?"bg-accent-soft text-accent":"bg-line text-muted"}">${i}</span>
        </div>
      </div>`}renderActions(){const{status:t,scheduled:e}=this.statusNow;if(this.posting)return r`<p class="flex items-center justify-end gap-1.5 text-[12px] text-ink">
      <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Posting…</p>`;if(this.draftId==null||t!=="draft"&&!e)return c;const i=this.linkedinConnected||this.webhookConfigured,s="inline-flex items-center gap-1 px-3 py-1.5 text-[13px] rounded-lg border border-line text-ink hover:bg-hover",n="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] rounded-lg bg-accent text-white font-medium hover:brightness-105";return r`
      <div class="flex flex-wrap items-center justify-end gap-2">
        ${e?r`<button type="button" class="text-[12px] text-muted hover:text-ink px-1 mr-auto" @click=${()=>void this.act("unschedule")}>Unschedule</button>`:r`<button type="button" class="mr-auto px-3 py-1.5 text-[13px] rounded-lg border border-line text-muted hover:text-red-600 hover:border-red-600/60" @click=${()=>void this.act("discard")}>Delete draft</button>`}
        <button type="button" class=${s} aria-haspopup="dialog" aria-expanded=${this.postMenu}
          @click=${o=>this.openPostMenu(o)}><sc-icon name="lucide-clock" class="w-3.5 h-3.5"></sc-icon>${e?"Reschedule":"Schedule"}</button>
        ${i?r`<button type="button" class=${n} @click=${()=>void this.act("publish")}><sc-icon name="lucide-send" class="w-3.5 h-3.5"></sc-icon>Post now</button>`:this.copiedFor===this.draftId?r`<button type="button" class=${n} @click=${()=>void this.act("mark-posted")}><sc-icon name="lucide-check" class="w-3.5 h-3.5"></sc-icon>I posted it</button>`:r`<button type="button" class=${n} title="Copies the text and opens LinkedIn"
                @click=${()=>void this.copyAndOpen()}><sc-icon name="lucide-copy" class="w-3.5 h-3.5"></sc-icon>Copy and open LinkedIn</button>`}
      </div>`}renderChecks(){const t=this.checks,e=t.filter(n=>n.level==="fail"),i=t.filter(n=>n.kind==="reach"),s=i.filter(n=>n.level==="pass").length;return r`
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
          <span class="tabular-nums ${s===i.length?"text-accent":"text-ink"}">${s} of ${i.length} checks pass</span>
          <sc-icon name="lucide-chevron-right" class="w-3.5 h-3.5 transition-transform group-open:rotate-90"></sc-icon>
        </summary>
        <div class="mt-1.5 pl-[3.875rem] space-y-1">
          ${i.map(n=>r`<div class="text-[12px] leading-snug">
            <div class="flex gap-2"><span class="w-3 shrink-0 text-center font-bold">${cf[n.level]}</span><span class="${n.level==="pass"?"text-muted":"text-ink"}">${n.label}</span></div>
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
      ${this.questions.length?this.renderQuestions():c}`}renderQuestions(){const t=this.questions.some((e,i)=>(this.answers[i]??"").trim());return r`
      <section class="rounded-xl border border-accent/40 bg-surface px-3 py-2.5 space-y-2">
        <div class="flex items-center gap-2">
          <h4 class="flex-1 text-[12px] font-semibold text-ink">Mana needs from you</h4>
          <button type="button" class="text-[11px] text-muted hover:text-ink" ?disabled=${this.fixing} @click=${()=>this.dismissQuestions()}>Dismiss</button>
        </div>
        <p class="text-[11px] text-muted leading-snug">Answer any of these and Mana works them in. It won't guess them.</p>
        ${this.questions.map((e,i)=>r`
          <label class="block text-[12px] text-ink leading-snug">${e}
            <input type="text" class="mt-1 w-full px-2.5 py-1.5 text-[12px] bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              ?disabled=${this.fixing} .value=${this.answers[i]??""}
              @input=${s=>{this.answers={...this.answers,[i]:s.target.value}}}
              @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),this.addAnswers())}} /></label>`)}
        <button type="button" class="px-3 py-1.5 text-[12px] rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
          ?disabled=${!t||this.fixing} @click=${()=>this.addAnswers()}>Add to post</button>
      </section>`}renderAiStart(){const t=this.aiWriting,e=this.draftId==null&&!this.body.trim(),i=!this.draft||this.draft.status==="draft"||this.draft.status==="approved",s=i&&!e&&!!this.body.trim()&&!t&&!this.fixing&&!this.improving,n=()=>{t||this.verticalId==null||!e||this.emit("ai-draft",{topicId:this.verticalId,angle:this.aiAngle})};return r`
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <input type="text" class="flex-1 min-w-0 px-3 py-2 text-[15px] font-semibold bg-surface border border-line rounded-xl focus:outline-none focus:border-ink text-ink placeholder:font-normal"
            placeholder="What's it about?" aria-label="Title" ?disabled=${t} ?readonly=${!i}
            .value=${this.aiAngle}
            @input=${o=>{this.aiAngle=o.target.value,this.draftId!=null&&this.touched()}}
            @keydown=${o=>{o.key==="Enter"&&(o.preventDefault(),n())}} />
          ${e&&!t?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium ${this.verticalId==null?"opacity-40 pointer-events-none":""}"
                title="Mana writes the post from the title" @click=${n}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Write it</button>`:i&&!t?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
                  ?disabled=${!s} title="Mana rewrites it into a post worth reading, in your voice. You can undo it."
                  @click=${()=>void this.fix()}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Improve it</button>`:c}
        </div>
        ${t?r`<p class="flex items-center gap-2 px-1 text-xs text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Mana is writing it. About two minutes.</p>`:c}
        ${this.aiError&&e?r`<p class="px-1 text-[11px] text-red-600">The draft didn't come back: ${this.aiError}</p>`:c}
      </div>`}render(){const t=this.draft,e=!t||t.status==="draft"?this.hooks:[],i=!t||t.status==="draft"||t.status==="approved",s=this.twoCol,n=this.posting||this.draftId!=null&&(this.statusNow.status==="draft"||!!this.statusNow.scheduled),o=r`
      <section class="min-w-0 mana-card p-4 ${s?"flex flex-col gap-3":"space-y-3"}">
        ${this.renderAiStart()}
        <textarea data-grow data-draft-body class="w-full ${s?"min-h-[20rem]":"min-h-[22rem]"} overflow-hidden resize-none px-3 py-2.5 text-sm bg-surface border border-line rounded-xl focus:outline-none focus:border-ink leading-relaxed text-ink"
          placeholder="Hook first. One line that makes them need the second."
          maxlength=${po}
          ?readonly=${!i||this.aiWriting||this.fixing||this.improving}
          .value=${this.body}
          @input=${h=>{const u=h.target;this.growTextarea(u),this.edit(u.value)}}
          @keydown=${h=>{(h.metaKey||h.ctrlKey)&&h.key==="s"&&(h.preventDefault(),this.flush())}}></textarea>
      </section>`,a=r`
      <section class="space-y-3 min-w-0 mana-card p-4">
        ${i&&this.body.trim()?this.renderFix():c}
        ${this.commentOpen||this.firstComment.trim()?r`<label class="block text-[12px] text-muted">First comment (links go here)
          <textarea data-grow class="mt-1 w-full min-h-[3.25rem] overflow-hidden px-3 py-2 text-sm bg-surface border border-line rounded-xl resize-none focus:outline-none focus:border-ink leading-relaxed text-ink"
            placeholder=${this.linkedinConnected?"Mana posts it as a comment right after the post":"Shown with the post, to add as the first comment"}
            ?readonly=${!i}
            maxlength=${mo}
            .value=${this.firstComment}
            @input=${h=>{const u=h.target;this.growTextarea(u),this.firstComment=u.value,this.touched()}}></textarea></label>`:i?r`<button type="button" class="text-[12px] text-muted hover:text-ink"
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
      <aside class="min-w-0 mana-card p-3 ${s?"self-start sticky top-0":""}">
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
          ${s?r`<div class="grid grid-cols-[minmax(0,34rem)_minmax(0,30rem)] justify-center gap-x-4 gap-y-3">
                ${o}${l}
                <div class="col-span-2 min-w-0">${a}</div>
                ${n?r`<div class="col-span-2 mana-card px-4 py-3">${this.renderActions()}</div>`:c}
              </div>`:r`<div class="max-w-2xl mx-auto space-y-4">${o}${a}${n?r`<div class="mana-card px-4 py-3">${this.renderActions()}</div>`:c}${l}</div>`}
        </div>
      </div>`}};R([b({attribute:!1})],_.prototype,"draft",2);R([b({attribute:!1})],_.prototype,"topics",2);R([b({attribute:!1})],_.prototype,"defaultTopicId",2);R([b({type:Boolean})],_.prototype,"linkedinConnected",2);R([b({type:Boolean})],_.prototype,"webhookConfigured",2);R([b({type:Boolean})],_.prototype,"twoCol",2);R([b({attribute:!1})],_.prototype,"defaultScheduleAt",2);R([b({attribute:!1})],_.prototype,"renderImage",2);R([b({type:Boolean})],_.prototype,"aiWriting",2);R([b({type:Boolean})],_.prototype,"improving",2);R([b()],_.prototype,"aiError",2);R([b()],_.prototype,"backLabel",2);R([b()],_.prototype,"authorName",2);R([d()],_.prototype,"body",2);R([d()],_.prototype,"pillar",2);R([d()],_.prototype,"aiAngle",2);R([d()],_.prototype,"commentOpen",2);R([d()],_.prototype,"verticalId",2);R([d()],_.prototype,"proofIds",2);R([d()],_.prototype,"hooks",2);R([d()],_.prototype,"firstComment",2);R([d()],_.prototype,"questions",2);R([d()],_.prototype,"answers",2);R([d()],_.prototype,"fixing",2);R([d()],_.prototype,"fixResult",2);R([d()],_.prototype,"dirty",2);R([d()],_.prototype,"saveState",2);R([d()],_.prototype,"posting",2);R([d()],_.prototype,"proofs",2);R([d()],_.prototype,"mode",2);R([d()],_.prototype,"postMenu",2);R([d()],_.prototype,"scheduleAt",2);R([d()],_.prototype,"copiedFor",2);R([d()],_.prototype,"leaveBlocked",2);_=R([w("publisher-editor")],_);var df=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,$=(t,e,i,s)=>{for(var n=s>1?void 0:s?hf(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&df(e,i,n),n};const Zr="mana.publisher.copy",uf=640,ta=176,ea=400,ds=224,Et=(t,e="w-4 h-4")=>r`<sc-icon name="lucide-${t}" class=${e}></sc-icon>`,Pi=[{key:"draft",label:"Drafts",icon:"file-text"},{key:"scheduled",label:"Scheduled",icon:"clock"},{key:"posted",label:"Published",icon:"send"}];function hs(t){return t.status==="posting"?"scheduled":t.status==="approved"?t.scheduled_at?"scheduled":"draft":t.status==="draft"||t.status==="posted"?t.status:null}const us=()=>Math.floor(Date.now()/1e3),pf=t=>new Date(t*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),Pn=["impressions","reactions","comments","leads"],ps={proof:"Case study",teach:"How-to",take:"Opinion",story:"Story"},ia={proof:"bg-emerald-500/10 text-emerald-600",teach:"bg-sky-500/10 text-sky-600",take:"bg-amber-500/10 text-amber-600",story:"bg-pink-500/10 text-pink-600"},Ot=t=>t.format==="yt_script",sa="bg-violet-500/10 text-violet-600",Ai=[{key:"name",q:"Name this topic.",hint:'Shows in the sidebar, e.g. "Voice agents" or "EDU APAC"',required:!0},{key:"audience",q:"Who are you writing for?",hint:"People, interests or roles, e.g. clinic owners in DACH who still book by phone",required:!0},{key:"goal",q:"What should posting about this get you?",hint:'One concrete outcome, e.g. "2 demo calls a month"',required:!1}],na={name:"",goal:"",audience:"",offer:"",opinions:"",cta:"",extra:""},oa={auto:'<rect width="48" height="32" rx="4" fill="#2a3446"/><path d="M24 7l2.2 6.3L32 16l-5.8 2.7L24 25l-2.2-6.3L16 16l5.8-2.7z" fill="#8ab4ff"/>',photo:'<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5b26b"/><stop offset="1" stop-color="#7d8fb3"/></linearGradient></defs><rect width="48" height="32" rx="4" fill="url(#sk)"/><circle cx="34" cy="11" r="4" fill="#ffe6a8"/><path d="M0 26l12-10 9 7 8-6 19 12v3H0z" fill="#33415c"/>',illustration:'<rect width="48" height="32" rx="4" fill="#ffe9d6"/><circle cx="17" cy="15" r="7" fill="#ff8a65"/><rect x="26" y="9" width="13" height="13" rx="3" fill="#4db6ac"/><path d="M6 27h36" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>',diagram:'<rect width="48" height="32" rx="4" fill="#f4f6fa"/><rect x="5" y="11" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="5" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="18" width="11" height="9" rx="2" fill="#5b8def"/><path d="M16 15.5h8m0 0V9.5h8m-8 6v6.5h8" stroke="#8a94a6" stroke-width="1.5" fill="none"/>',"text-card":'<rect width="48" height="32" rx="4" fill="#111827"/><rect x="7" y="9" width="30" height="4" rx="1" fill="#fff"/><rect x="7" y="16" width="22" height="4" rx="1" fill="#fff"/><rect x="7" y="24" width="12" height="2" rx="1" fill="#f59e0b"/>'},ra=(t,e="w-12 h-8")=>r`<svg viewBox="0 0 48 32" class="${e} shrink-0 rounded" aria-hidden="true">${Ym(oa[t]??oa.auto)}</svg>`,Mi=[{key:"auto",label:"Mana picks per post",dna:""},{key:"photo",label:"Photo",dna:""},{key:"illustration",label:"Illustration",dna:""},{key:"diagram",label:"Diagram",dna:""},{key:"text-card",label:"Text card",dna:""}];let k=class extends T{constructor(){super(...arguments),this.chatOpen=!1,this.verticals=[],this.drafts=[],this.webhookConfigured=!1,this.linkedinConfigured=!1,this.loading=!0,this.fromCopy=!1,this.activeVerticalId=(()=>{try{const t=Number(localStorage.getItem("cockpit.publisher_vertical"));return Number.isFinite(t)&&t>0?t:null}catch{return null}})(),this.stage=this.activeVerticalId===null?"scheduled":"draft",this.view="queue",this.wide=!0,this.navOpen=!1,this.navWidth=(()=>{try{const t=Number(localStorage.getItem("cockpit.publisher_nav_width"));return t>=ta&&t<=ea?t:ds}catch{return ds}})(),this.navHidden=(()=>{try{return localStorage.getItem("cockpit.publisher_nav_hidden")==="1"}catch{return!1}})(),this.collapsedGroups=(()=>{try{return new Set(JSON.parse(localStorage.getItem("cockpit.publisher_nav_collapsed")||"[]"))}catch{return new Set}})(),this.wizardEditId=null,this.wizardStep=0,this.wizard={...na},this.wizardLang="de",this.wizardFormality="du",this.langOther=!1,this.editPostsPerWeek=4,this.editImageStyle="auto",this.editImageDna="",this.editImageRef=null,this.imaging=[],this.improving=[],this.imageErrors={},this.toldImageErrors=new Set,this.started=!1,this.stylePickerFor=null,this.imageStyleFor={},this.libraryFor=null,this.saving=!1,this.editingId=null,this.editBody="",this.composing=!1,this.editorId=null,this.createdId=null,this.twoCol=!0,this.aiTopicId=null,this.aiStartedAt=null,this.aiError="",this.generating=!1,this.genStartedAt=null,this.genTicker=null,this.webhookUrl="",this.webhookSecret="",this.linkedinToken="",this.linkedin=null,this.liClientId="",this.liClientSecret="",this.liSaving=!1,this.showLegacy=!1,this.postUrlForId=null,this.postUrlDraft="",this.syncingId=null,this.copiedId=null,this.researchOpenId=null,this.expandedId=null,this.toastMsg=null,this.toastTimer=null,this.ask=null,this.insights=null,this.metricsForId=null,this.metricsDraft={impressions:"",reactions:"",comments:"",leads:""},this.poll=null,this.topicDrag=new jo(this,{type:"text/x-publisher-topic",onReorder:(t,e)=>this.reorderTopic(t,e)}),this.dirtyFields=new Set,this.onToast=t=>{t.stopPropagation(),this.toastMsg=t.detail,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMsg=null},this.toastMsg.action?8e3:5e3)},this.onConfirm=t=>{t.stopPropagation();const e=t.detail;e.handled=!0,this.ask?.resolve(!1),this.ask=e,this.updateComplete.then(()=>requestAnimationFrame(()=>this.querySelector("[data-dialog-default]")?.focus()))},this.onNotifNavigate=t=>{t.detail?.mode==="publisher"&&(this.view==="editor"||this.view==="wizard"||this.setStage("posted"))},this.onOutsideChange=()=>{this.refresh()},this.onRefreshRequest=t=>{const e=t.detail?.stage;e&&this.view==="queue"&&this.setStage(e),this.refresh()},this.topicSaveTimer=null,this.viewKey="",this.insightsFor=""}connectedCallback(){super.connectedCallback(),this.paintSavedCopy(),this.refresh(),this.resizeObs=new ResizeObserver(()=>{const t=this.clientWidth>=uf;t!==this.wide&&(this.wide=t);const e=this.clientWidth>=1100;e!==this.twoCol&&(this.twoCol=e)}),this.resizeObs.observe(this),this.addEventListener("publisher-toast",this.onToast),this.addEventListener("publisher-confirm",this.onConfirm),this.viewKey="",this.addEventListener("publisher-refresh",this.onRefreshRequest),document.addEventListener("notif-navigate",this.onNotifNavigate),document.addEventListener("ops-event",this.onOutsideChange),document.addEventListener("publisher-live",this.onOutsideChange),this.poll=setInterval(()=>{const t=this.view==="queue"&&this.editingId===null&&this.metricsForId===null&&this.postUrlForId===null&&!this.composing&&!this.topicDrag.active,e=this.view==="wizard"&&this.wizardEditId!=null,i=this.aiStartedAt!==null,s=this.imaging.length>0||this.improving.length>0;(t||e||i||s)&&this.refresh()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this.flushTopicSave(),this.poll&&clearInterval(this.poll),this.genTicker&&clearInterval(this.genTicker),this.resizeObs?.disconnect(),this.removeEventListener("publisher-toast",this.onToast),this.removeEventListener("publisher-confirm",this.onConfirm),this.removeEventListener("publisher-refresh",this.onRefreshRequest),document.removeEventListener("notif-navigate",this.onNotifNavigate),document.removeEventListener("ops-event",this.onOutsideChange),document.removeEventListener("publisher-live",this.onOutsideChange),this.toastTimer&&clearTimeout(this.toastTimer),this.ask?.resolve(!1)}answer(t){const e=this.ask;this.ask=null,e?.resolve(t)}renderToast(){const t=this.toastMsg;return t?r`
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 px-4 py-2 rounded-xl ${t.tone==="error"?"bg-red-600":"bg-ink"} text-surface text-sm shadow-lg" role="status">
        <span class="min-w-0">${t.text}</span>
        ${t.action?r`<button type="button" class="shrink-0 font-semibold hover:underline"
          @click=${()=>{const e=t.action.run;this.toastMsg=null,e()}}>${t.action.label}</button>`:c}
      </div>`:c}renderDialog(){const t=this.ask;if(!t)return c;const e=t.tone==="danger"?"bg-red-600":t.tone==="warning"?"bg-amber-500":"bg-accent";return r`
      <sc-dialog open label=${t.title}
        @sc-hide=${()=>this.answer(!1)}
        @keydown=${i=>{i.key==="Escape"?(i.preventDefault(),this.answer(!1)):i.key==="Enter"&&t.confirm&&!(i.target instanceof HTMLTextAreaElement)&&(i.preventDefault(),this.answer(!0))}}>
        ${t.body?r`<p class="text-sm text-muted leading-snug">${t.body}</p>`:c}
        ${t.items?.length?r`<ul class="mt-2 space-y-1 text-sm text-ink list-disc pl-5">${t.items.map(i=>r`<li>${i}</li>`)}</ul>`:c}
        <div slot="footer" class="flex items-center justify-end gap-2">
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg text-muted hover:text-ink hover:bg-hover" ?data-dialog-default=${!t.confirm}
            @click=${()=>this.answer(!1)}>${t.cancel??(t.confirm?"Cancel":"Close")}</button>
          ${t.confirm?r`<button type="button" data-dialog-default class="px-3 py-1.5 text-sm rounded-lg font-semibold text-white hover:opacity-90 ${e}"
            @click=${()=>this.answer(!0)}>${t.confirm}</button>`:c}
        </div>
      </sc-dialog>`}get activeVertical(){return this.verticals.find(t=>t.id===this.activeVerticalId)??null}setVertical(t){this.activeVerticalId=t,this.stage=t===null?"scheduled":"draft",this.composing=!1,this.editingId=null,this.expandedId=null,this.view="queue",this.navOpen=!1;try{localStorage.setItem("cockpit.publisher_vertical",String(t??0))}catch{}}setStage(t){this.stage=t,this.expandedId=null,this.view="queue",this.navOpen=!1}inTopic(t){return this.activeVerticalId===null||t.vertical_id===this.activeVerticalId}stageCount(t,e=!1){return this.drafts.filter(i=>hs(i)===t&&(e||this.inTopic(i))).length}takenTimes(t){return this.drafts.filter(e=>(e.status==="approved"||e.status==="posting")&&e.scheduled_at&&e.id!==t).map(e=>e.scheduled_at)}postedThisWeek(t){const e=mc(us());return this.drafts.filter(i=>i.vertical_id===t.id&&i.status==="posted"&&(i.posted_at??0)>=e).length}async reorderTopic(t,e){const i=this.verticals.findIndex(o=>o.id===t);if(i<0)return;const s=[...this.verticals],[n]=s.splice(i,1);s.splice(i<e?e-1:e,0,n),!s.every((o,a)=>o.id===this.verticals[a]?.id)&&(this.verticals=s,await fetch("/api/publisher/verticals/order",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({ids:s.map(o=>o.id)})}))}async deleteTopic(t){const e=this.drafts.filter(n=>n.vertical_id===t.id).length;if(!await xe(this,{title:`Delete ${t.name}?`,body:`${e?`Its ${e} post${e===1?"":"s"} go with it. `:""}This can't be undone. Anything already on LinkedIn stays there, and its proof and voice samples stay as general items.`,confirm:"Delete topic",tone:"danger"}))return;if(!(await fetch(`/api/publisher/verticals/${t.id}?drafts=delete`,{method:"DELETE"})).ok){H(this,"Couldn't delete the topic. Try again.",{tone:"error"});return}this.activeVerticalId===t.id&&this.setVertical(null),await this.refresh(),H(this,`Deleted ${t.name}`)}openCompose(){this.navOpen=!1,this.editorId=null,this.composing=!0,this.aiStartedAt===null&&(this.aiError=""),this.view="editor"}openEditor(t){if(this.fromCopy){H(this,"Still fetching the latest version of this post. Try again in a moment.");return}this.navOpen=!1,this.composing=!1,this.editorId=t,this.view="editor"}async closeEditor(){const t=this.querySelector("publisher-editor");if(t&&!await t.beforeClose()){H(this,"Couldn't save your last edit.",{tone:"error",action:{label:"Leave anyway",run:()=>this.leaveEditor()}});return}this.leaveEditor()}follow(t){this.leaveEditor(),this.setStage(t)}leaveEditor(){this.composing=!1,this.editorId=null,this.createdId=null,this.view="queue",this.refresh()}pickUpAiDraft(){if(this.aiStartedAt===null||this.generating)return;const t=Math.floor(this.aiStartedAt/1e3)-5,e=this.drafts.filter(i=>i.created_at>=t&&i.vertical_id===this.aiTopicId).sort((i,s)=>s.created_at-i.created_at)[0];e?(this.aiStartedAt=null,(this.view==="editor"&&this.composing||this.view==="queue")&&this.openEditor(e.id)):Date.now()-this.aiStartedAt>480*1e3&&(this.aiStartedAt=null)}paintSavedCopy(){try{const t=JSON.parse(localStorage.getItem(Zr)||"null");if(!t||t.login!==localStorage.getItem("mana.api.login"))return;this.verticals=t.data.verticals??[],this.drafts=t.data.drafts??[],this.webhookConfigured=t.data.webhookConfigured??!1,this.linkedinConfigured=t.data.linkedinConfigured??!1,this.linkedin=t.data.linkedin??null,this.fromCopy=!0,this.loading=!1}catch{}}async refresh(){try{const t=await fetch("/api/publisher");if(t.ok){const e=await t.text();try{const n=localStorage.getItem("mana.api.login");n&&e.length<3e5&&localStorage.setItem(Zr,JSON.stringify({login:n,data:JSON.parse(e)}))}catch{}this.fromCopy=!1;const i=JSON.parse(e);this.linkedin=i.linkedin??null;const s=this.imaging;this.imaging=i.imaging??[],this.improving=i.improving??[],this.imageErrors=i.imageErrors??{};for(const[n,o]of Object.entries(this.imageErrors)){const a=`${n}:${o}`;this.toldImageErrors.has(a)||(this.toldImageErrors.add(a),this.started&&H(this,`The image didn't come: ${o}`,{tone:"error"}))}if(this.started=!0,s.some(n=>!this.imaging.includes(n))&&Lt(()=>import("./notes-media-DDKHIfat.js"),__vite__mapDeps([2,3,4,5])).then(n=>n.forgetMediaCache()),this.verticals=i.verticals,this.drafts=i.drafts,this.webhookConfigured=i.webhookConfigured,this.linkedinConfigured=i.linkedinConfigured??!1,this.setGenerating(i.generating??!1),this.view==="results"&&this.loadInsights(),this.aiStartedAt!==null&&i.draftError&&i.draftError.at>=this.aiStartedAt&&!i.generating&&(this.aiStartedAt=null,this.aiError=i.draftError.message),this.pickUpAiDraft(),this.view==="wizard"&&this.wizardEditId!=null){const n=this.verticals.find(o=>o.id===this.wizardEditId);n&&this.mergeServerIntoForm(n)}this.loading=!1}}catch{}}setGenerating(t){const e=this.genStartedAt!==null&&Date.now()-this.genStartedAt<8e3,i=t||e;i&&!this.generating&&(this.genStartedAt===null&&(this.genStartedAt=Date.now()),this.genTicker||(this.genTicker=setInterval(()=>this.requestUpdate(),1e3))),!i&&this.generating&&(this.genStartedAt=null,this.genTicker&&(clearInterval(this.genTicker),this.genTicker=null)),this.generating=i}genStatusText(){const t=this.genStartedAt?Math.floor((Date.now()-this.genStartedAt)/1e3):0;return`${t<40?"searching what your buyers are talking about":t<100?"reading sources + writing the draft":"still writing — long research pass"}… ${t}s (typically 60–120s)`}mergeServerIntoForm(t){const e={name:t.name,goal:t.goal??"",audience:t.audience??"",offer:t.offer??"",opinions:t.opinions??"",cta:t.cta??"",extra:t.extra??""};let i=this.wizard,s=!1;for(const n of Object.keys(e))!this.dirtyFields.has(n)&&e[n]!==i[n]&&(s||(i={...i}),i[n]=e[n],s=!0);s&&(this.wizard=i),!this.dirtyFields.has("language")&&t.language!==this.wizardLang&&(this.wizardLang=t.language),!this.dirtyFields.has("formality")&&t.formality!==this.wizardFormality&&(this.wizardFormality=t.formality),!this.dirtyFields.has("posts_per_week")&&t.posts_per_week!==this.editPostsPerWeek&&(this.editPostsPerWeek=t.posts_per_week)}openWizard(t){this.flushTopicSave(),t?(this.wizardEditId=t.id,this.wizard={name:t.name,goal:t.goal??"",audience:t.audience??"",offer:t.offer??"",opinions:t.opinions??"",cta:t.cta??"",extra:t.extra??""},this.wizardLang=t.language,this.wizardFormality=t.formality,this.editPostsPerWeek=t.posts_per_week,this.editImageStyle=t.image_style&&t.image_style!=="line-art"?t.image_style:"photo",this.editImageDna=t.image_dna||"",this.editImageRef=t.image_ref_url):(this.wizardEditId=null,this.wizard={...na},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=3,this.editImageStyle="photo",this.editImageDna="",this.editImageRef=null),this.dirtyFields=new Set,this.wizardStep=0,this.view="wizard",this.navOpen=!1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}updated(t){super.updated?.(t),this.reportView();const e=["wizard","wizardLang","wizardFormality","editPostsPerWeek","editImageStyle","editImageDna","editImageRef"];this.view!=="wizard"||this.wizardEditId==null||!this.dirtyFields.size||e.some(i=>t.has(i))&&(this.topicSaveTimer&&clearTimeout(this.topicSaveTimer),this.topicSaveTimer=setTimeout(()=>void this.flushTopicSave(),1e3))}reportView(){const t=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null,e=n=>this.verticals.find(o=>o.id===n)?.name??"no topic",i=t?`Publisher · editing draft#${t.id} (${e(t.vertical_id)})${t.source_note?`: "${t.source_note.slice(0,120)}"`:""}`:this.composing?"Publisher · writing a new post (not saved yet, no draft id)":`Publisher · ${this.view==="queue"?`${Pi.find(n=>n.key===this.stage)?.label??this.stage} list${this.activeVertical?` in ${this.activeVertical.name}`:""}`:this.view}`,s=`${i}|${t?.id??""}`;s!==this.viewKey&&(this.viewKey=s,f.getState().setViewContext({tool:"publisher",summary:i,item:t?.id??null}))}async flushTopicSave(){this.topicSaveTimer&&(clearTimeout(this.topicSaveTimer),this.topicSaveTimer=null);const t=this.wizardEditId;if(t==null||!this.dirtyFields.size||!this.wizard.name.trim())return;const e=new Set(this.dirtyFields);this.dirtyFields=new Set;const i={...this.wizard,language:this.wizardLang.trim()||"en",formality:this.wizardFormality,image_style:this.editImageStyle,image_dna:this.editImageDna,image_ref_url:this.editImageRef,posts_per_week:this.editPostsPerWeek};if(!(await fetch(`/api/publisher/verticals/${t}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(i)}).catch(()=>null))?.ok){for(const n of e)this.dirtyFields.add(n);H(this,"Couldn't save the topic. Try again.",{tone:"error"});return}H(this,"Saved"),this.refresh()}async closeEditForm(){await this.flushTopicSave(),this.view="queue"}async saveWizard(){if(!this.saving){this.saving=!0;try{const t={...this.wizard,language:this.wizardLang,formality:this.wizardFormality};if(t.image_style=this.editImageStyle,t.image_dna=this.editImageDna,t.image_ref_url=this.editImageRef,t.posts_per_week=this.editPostsPerWeek,this.wizardEditId!=null)await fetch(`/api/publisher/verticals/${this.wizardEditId}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)});else{const e=await fetch("/api/publisher/verticals",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});if(e.ok){const{id:i}=await e.json();this.setVertical(i)}}await this.refresh(),this.view="queue"}finally{this.saving=!1}}}renderLangPills(){const t=[["en","English"],["tr","Türkçe"],["de","Deutsch"]],e=this.wizardLang==="de+en"?"de":this.wizardLang,i=this.langOther||!t.some(([l])=>l===e),s=(l,h,u)=>r`
      <button type="button"
        class="px-3 py-1 rounded-full text-xs border ${l?"border-ink bg-ink text-surface":"border-line text-muted hover:text-ink hover:border-ink/40"}"
        @click=${u}>${h}</button>`,n=l=>{this.dirtyFields.add("language"),this.wizardLang=l},o=e==="de"?["Du","Sie"]:e==="tr"?["Sen","Siz"]:null,a=l=>{this.dirtyFields.add("formality"),this.wizardFormality=l};return r`
      <div class="mt-1 flex flex-wrap items-center gap-1.5">
        ${t.map(([l,h])=>s(!i&&e===l,h,()=>{this.langOther=!1,n(l)}))}
        ${s(i,"Other",()=>{this.langOther=!0,i||n("")})}
        ${i?r`<input class="w-32 px-2 py-1 text-xs bg-surface border border-line rounded-full focus:outline-none focus:border-ink"
          placeholder="e.g. Spanish" maxlength="30" .value=${this.wizardLang}
          @input=${l=>n(l.target.value)} />`:c}
      </div>
      ${o?r`<div class="mt-3">Anrede<div class="mt-1 flex gap-1.5">
        ${s(this.wizardFormality!=="sie",o[0],()=>a("du"))}
        ${s(this.wizardFormality==="sie",o[1],()=>a("sie"))}
      </div></div>`:c}`}renderEditForm(){const t=this.verticals.find(i=>i.id===this.wizardEditId),e=(i,s,n=!1)=>r`
      <label class="block text-xs text-muted">${s}
        <textarea class="mt-1 w-full ${n?"h-40":"h-20"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
          .value=${this.wizard[i]}
          @input=${o=>{this.dirtyFields.add(i),this.wizard={...this.wizard,[i]:o.target.value}}}
        ></textarea></label>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto mana-card p-4 space-y-3 mb-24">
          <label class="block text-xs text-muted">Name
            <input type="text" class="mt-1 w-full px-3 py-2 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              .value=${this.wizard.name}
              @input=${i=>{this.dirtyFields.add("name"),this.wizard={...this.wizard,name:i.target.value}}} /></label>
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
                @input=${i=>{this.dirtyFields.add("posts_per_week"),this.editPostsPerWeek=Number(i.target.value)||3}} /></label>
            <p class="text-[10px] text-muted/70 mt-1.5">The topic view shows this week's published posts against this target.</p>
          </div>
          ${this.renderImageConfig()}
            </div>
          </details>
          <div class="flex items-center justify-end pt-4">
            ${t?r`<button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-red-500 hover:bg-red-500/10"
              @click=${()=>void this.deleteTopic(t)}>${Et("trash-2")} Delete topic</button>`:c}
          </div>
        </div>
      </div>
    `}renderWizard(){const t=this.wizardStep===Ai.length,e=t?null:Ai[this.wizardStep],i=!e?.required||!!this.wizard[e.key].trim(),s=!!this.wizard.name.trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto mana-card p-4 mt-4 mb-24">
          <div class="flex items-center gap-1.5 mb-6">
            ${[...Ai,null].map((n,o)=>r`<button type="button"
              class="h-2.5 flex-1 rounded-full transition-colors ${o<=this.wizardStep?"bg-accent":"bg-line hover:bg-muted/40"}"
              title=${o<Ai.length?Ai[o].q:"Language & tone"}
              aria-label="Go to step ${o+1}"
              @click=${()=>{this.wizardStep=o,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}}
            ></button>`)}
            <button type="button"
              class="shrink-0 ml-1 w-6 h-6 grid place-items-center rounded-full text-muted hover:text-ink hover:bg-hover text-base leading-none"
              title=${s?"Save what's here and close":"Close without saving"}
              @click=${()=>{s?this.saveWizard():this.view="queue"}}
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
                @keydown=${n=>{n.key==="Escape"?this.view="queue":n.key==="Enter"&&e.key==="name"&&(n.preventDefault(),i&&(this.wizardStep+=1))}}
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
              class="px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${!i||this.saving?"opacity-40 pointer-events-none":""}"
              @click=${()=>{t?this.saveWizard():(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus()))}}
            >${this.saving?"…":t?this.wizardEditId!=null?"Save changes":"Create topic":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async draftWithAi(t){if(this.generating||this.aiStartedAt!==null)return;this.aiTopicId=t.topicId,this.aiError="",this.genStartedAt=Date.now(),this.setGenerating(!0);const e=await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:t.topicId,pillar:t.pillar,angle:t.angle?.trim()||void 0})}).catch(()=>null);if(!e?.ok){this.genStartedAt=null,this.setGenerating(!1),H(this,e?.status===409?"A draft is already being written. Give it a minute.":"Couldn't start the draft. Try again.",{tone:"error"});return}this.aiStartedAt=Date.now()}async removeDraft(t){await xe(this,{title:"Delete this post for good?",body:"It leaves the archive and its numbers leave Results. The post on LinkedIn stays.",confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/drafts/${t.id}`,{method:"DELETE"}),await this.refresh())}async act(t,e,i){e==="discard"&&!await xe(this,{title:"Discard this draft?",body:"It will leave Drafts.",confirm:"Discard draft",tone:"danger"})||(await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:e,...i!==void 0?{body:i}:{}})}),await this.refresh())}startEdit(t){this.editingId=t.id,this.editBody=t.body}swapHook(t,e){const s=(this.editingId===t.id?this.editBody:t.body).split(`
`),n=s.findIndex(o=>o.trim());n>=0?s[n]=e:s.unshift(e),this.editingId=t.id,this.editBody=s.join(`
`)}parseHooks(t){if(!t.hooks)return[];try{const e=JSON.parse(t.hooks);return Array.isArray(e)?e.map(String).map(i=>i.trim()).filter(Boolean):[]}catch{return[]}}async commitEdit(t,e=!1){const i=this.editBody.trim();this.editingId=null,i&&i!==t.body&&await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({body:i})}),e?await this.act({...t,body:i},"approve"):await this.refresh()}async copyBody(t){try{await navigator.clipboard.writeText(t.body),this.copiedId=t.id,setTimeout(()=>{this.copiedId===t.id&&(this.copiedId=null)},2e3)}catch{H(this,"Couldn't copy. Open the post and copy the text by hand.",{tone:"error"})}}openMetrics(t){this.metricsForId=t.id,this.metricsDraft={impressions:t.impressions!=null?String(t.impressions):"",reactions:t.reactions!=null?String(t.reactions):"",comments:t.comments!=null?String(t.comments):"",leads:t.leads!=null?String(t.leads):""}}async saveMetrics(t){const e={};for(const i of Pn)e[i]=this.metricsDraft[i].trim()===""?null:Number(this.metricsDraft[i]);this.metricsForId=null,await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),await this.refresh()}async savePosting(){const t={webhookUrl:this.webhookUrl.trim(),webhookSecret:this.webhookSecret.trim()};this.linkedinToken.trim()&&(t.linkedinToken=this.linkedinToken.trim()),await fetch("/api/publisher/posting",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.linkedinToken="",await this.refresh()}async savePostUrl(t){const e=this.postUrlDraft.trim();this.postUrlForId=null,await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({post_url:e})}),await this.refresh()}async syncMetrics(t){this.syncingId=t.id;try{const e=await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"sync"})});if(!e.ok){const i=await e.json().catch(()=>({}));H(this,`Metrics sync failed: ${i.error||e.status}`,{tone:"error"})}}finally{this.syncingId=null,await this.refresh()}}fileToUploadUrl(t){return new Promise(e=>{const i=new FileReader;i.onload=async()=>{try{const s=await fetch("/api/upload",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dataUrl:i.result,name:t.name})});if(!s.ok){e(null);return}const{url:n}=await s.json();e(n)}catch{e(null)}},i.onerror=()=>e(null),i.readAsDataURL(t)})}pickImageStyle(t){const e=Mi.find(s=>s.key===t),i=this.editImageDna.trim()===""||Mi.some(s=>s.dna===this.editImageDna.trim());this.editImageStyle=t,e&&i&&(this.editImageDna=e.dna),this.dirtyFields.add("image_style")}async uploadRefImage(t){const e=t.target.files?.[0];if(!e)return;const i=await this.fileToUploadUrl(e);i&&(this.editImageRef=i,this.dirtyFields.add("image_ref_url"),this.requestUpdate())}async genImage(t,e=""){this.imaging=[...new Set([...this.imaging,t.id])];const i={...this.imageErrors};delete i[t.id],this.imageErrors=i;for(const n of[...this.toldImageErrors])n.startsWith(`${t.id}:`)&&this.toldImageErrors.delete(n);let s=null;try{s=await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"gen-image",direction:e,style:this.imageStyleOf(t)})})}catch{}if(!s||!s.ok&&s.status!==409){this.imaging=this.imaging.filter(o=>o!==t.id);const n=s?(await s.json().catch(()=>null))?.error:null;this.imageErrors={...this.imageErrors,[t.id]:n||"Couldn't reach Mana to start the image."},H(this,"Couldn't start the image. Try again.",{tone:"error"});return}setTimeout(()=>void this.refresh(),2500)}async setDraftImage(t,e){await fetch(`/api/publisher/drafts/${t.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({image_url:e})}),await this.refresh()}async openLibrary(t){await Lt(()=>import("./notes-media-DDKHIfat.js"),__vite__mapDeps([2,3,4,5])),this.libraryFor=t}renderStylePicker(t,e,i,s={}){const n=this.stylePickerFor===t,o=a=>a==="auto"?"Mana picks":Mi.find(l=>l.key===a)?.label??a.replace(/-/g," ");return r`
      <div class="relative shrink-0">
        <button type="button" class="flex items-center gap-1.5 h-[30px] pl-1.5 pr-2 rounded-lg border border-line hover:border-ink text-left disabled:opacity-40" ?disabled=${!!s.disabled}
          aria-haspopup="listbox" aria-expanded=${n} title="Image style"
          @click=${()=>{this.stylePickerFor=n?null:t}}>
          ${ra(e,"w-[27px] h-[18px]")}
          <span class="truncate text-[12px] text-ink">${o(e)}</span>
          <sc-icon name="lucide-chevron-down" class="w-3.5 h-3.5 text-muted shrink-0"></sc-icon>
        </button>
        ${n?r`
          <div class="fixed inset-0 z-40" @click=${()=>{this.stylePickerFor=null}}></div>
          <ul role="listbox" class="absolute z-50 ${s.up?"bottom-full mb-1 left-0":"top-full mt-1 right-0"} w-60 p-1 rounded-xl border border-line bg-popover shadow-lg">
            ${Mi.map(a=>r`<li><button type="button" role="option" aria-selected=${a.key===e}
              class="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left ${a.key===e?"bg-accent-soft":"hover:bg-hover"}"
              @click=${()=>{i(a.key),this.stylePickerFor=null}}>
              ${ra(a.key)}<span class="text-[13px] text-ink">${o(a.key)}</span></button></li>`)}
          </ul>`:c}
      </div>`}renderImageConfig(){return r`
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-3">
          <span class="flex items-center gap-1 text-xs text-muted">Image style
            <span class="inline-flex text-muted/70 hover:text-ink cursor-help" tabindex="0"
              title="The default for this topic's images. Each post can pick another style next to Make image.">${Et("info","w-3.5 h-3.5")}</span></span>
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
      </div>`}renderResearch(t){let e=null;try{e=t.research?JSON.parse(t.research):null}catch{}if(!e||!e.queries?.length&&!e.items?.length)return c;const i=this.researchOpenId===t.id;return r`
      <div class="px-4 pt-1">
        <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.researchOpenId=i?null:t.id}}
        >${i?"▾":"▸"} research trail (${e.items?.length??0} sources)</button>
        ${i?r`<div class="mt-1.5 mb-1 rounded-lg border border-line/60 bg-bg px-3 py-2 space-y-1.5">
              ${e.queries?.length?r`<p class="text-[11px] text-muted"><span class="font-semibold text-[10px]">searched</span> ${e.queries.join(" · ")}</p>`:c}
              ${(e.items??[]).map(s=>r`
                <p class="text-[11px] leading-snug">
                  ${s.url?r`<a class="text-ink underline decoration-line underline-offset-2 hover:decoration-ink" href=${s.url} target="_blank" rel="noopener">${s.title||s.url}</a>`:r`<span class="text-ink">${s.title||"(untitled)"}</span>`}
                  ${s.note?r`<span class="text-muted"> — ${s.note}</span>`:c}
                </p>`)}
            </div>`:c}
      </div>
    `}renderHookAlts(t){if(t.status!=="draft")return c;const e=this.parseHooks(t);return e.length?r`
      <div class="px-4 pt-1 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-muted/70 font-semibold">try hook</span>
        ${e.map(i=>r`
          <button type="button" title=${i}
            class="max-w-[16rem] truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
            @click=${()=>this.swapHook(t,i)}
          >${i}</button>`)}
      </div>`:c}imageStyleOf(t){const e=this.imageStyleFor[t.id];if(e)return e;const i=this.verticals.find(s=>s.id===t.vertical_id)?.image_style??"";return Mi.some(s=>s.key===i)?i:"photo"}renderDraftImage(t){if(Ot(t)||t.status==="posted")return c;const e=this.imaging.includes(t.id),i="shrink-0 px-2.5 py-1.5 text-[12px] rounded-lg border border-line text-ink hover:border-ink disabled:opacity-40",s=this.imageStyleOf(t);return r`
      <section class="px-1 space-y-1.5">
        <div class="flex items-center gap-1.5">
          <span class="w-14 shrink-0 text-[12px] font-semibold text-muted">Image</span>
          ${this.renderStylePicker(t.id,s,n=>{this.imageStyleFor={...this.imageStyleFor,[t.id]:n}},{up:!0,disabled:e})}
          <button type="button" class=${i} ?disabled=${e} @click=${()=>void this.genImage(t)}>${t.image_url?"New image":"Make image"}</button>
          <button type="button" class=${i} @click=${()=>void this.openLibrary(t.id)}>Library</button>
          ${t.image_url?r`<button type="button" class="shrink-0 px-1 text-[12px] text-muted hover:text-red-600" @click=${()=>void this.setDraftImage(t,null)}>Remove</button>`:c}
        </div>
        ${e?r`<p class="flex items-center gap-1.5 px-1 text-[11px] text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Making the image, about 40 seconds</p>`:this.imageErrors[t.id]?r`<p role="alert" class="px-1 text-[11px] text-red-600">The image didn't come: ${this.imageErrors[t.id]}</p>`:c}
      </section>`}renderDraftCard(t){const e=this.editingId===t.id,i=e?this.editBody:t.body,s=i.length,n=i.split(/\s+/).filter(Boolean).length;return r`
      <div class="rounded-lg bg-bg">
        <div class="flex items-center gap-2 px-4 pt-3">
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${Ot(t)?sa:ia[t.pillar]}">${Ot(t)?"🎬 Script":ps[t.pillar]}</span>
          ${t.status!=="draft"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${t.status==="posted"?"bg-accent/15 text-accent":"bg-line text-muted"}">${t.status}</span>`:c}
          <span class="ml-auto text-[10px] ${!Ot(t)&&s>1300?"text-amber-600":"text-muted/60"}">${Ot(t)?`${n} words`:`${s} chars`}</span>
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
              >${!Ot(t)&&this.webhookConfigured?"Approve & post":"Approve"}</button>
              ${e?r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" @click=${()=>void this.commitEdit(t)}>Save edit</button>`:r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(t)}>Edit</button>`}
              <button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.act(t,"discard")}>discard</button>`:t.status==="approved"?r`
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover"
                  @click=${()=>void this.copyBody(t)}>${this.copiedId===t.id?"Copied ✓":Ot(t)?"Copy script":"Copy post"}</button>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10"
                  @click=${()=>void this.act(t,"mark-posted")}>${Ot(t)?"Video is up":"I posted it"}</button>
                <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>void this.act(t,"reopen")}>back to drafts</button>`:r`<span class="text-[11px] text-muted">${t.posted_at?new Date(t.posted_at*1e3).toLocaleDateString():""}</span>
                ${Ot(t)?c:this.renderMetrics(t)}
                <span class="ml-auto inline-flex items-center gap-2">
                  <button type="button" class="text-[11px] text-muted hover:text-ink" title="Mis-tap? Back to approved (doesn't touch LinkedIn)" @click=${()=>void this.act(t,"unpost")}>undo</button>
                  <button type="button" class="text-[11px] text-muted hover:text-red-600" title="Delete from the archive" @click=${()=>void this.removeDraft(t)}>delete</button>
                  <button type="button" class="px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-ink" @click=${()=>void this.copyBody(t)}>${this.copiedId===t.id?"Copied ✓":"Copy"}</button>
                </span>`}
        </div>
      </div>
    `}renderMetrics(t){if(this.metricsForId===t.id)return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
        ${Pn.map(s=>r`<label class="inline-flex items-center gap-0.5 text-[10px] text-muted">${s.slice(0,4)}
          <input type="number" min="0" class="w-14 px-1 py-0.5 text-[11px] bg-bg border border-line rounded text-right focus:outline-none focus:border-ink"
            .value=${this.metricsDraft[s]}
            @input=${n=>{this.metricsDraft={...this.metricsDraft,[s]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"?this.saveMetrics(t):n.key==="Escape"&&(this.metricsForId=null)}}
          /></label>`)}
        <button type="button" class="px-1.5 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.saveMetrics(t)}>save</button>
      </span>`;const e=Pn.some(s=>t[s]!=null),i=t.metrics_synced_at!=null;return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
      <button type="button" class="inline-flex items-center gap-1.5 text-[10px] text-muted hover:text-ink" title=${i?"Auto-synced from LinkedIn — click to override by hand":"Log this post's numbers from LinkedIn analytics"}
        @click=${()=>this.openMetrics(t)}>
        ${e?r`${t.impressions!=null?r`<span>👁 ${t.impressions}</span>`:c}
            ${t.reactions!=null?r`<span>👍 ${t.reactions}</span>`:c}
            ${t.comments!=null?r`<span>💬 ${t.comments}</span>`:c}
            ${t.leads!=null?r`<span class="text-accent font-medium">→ ${t.leads} lead${t.leads===1?"":"s"}</span>`:c}`:r`<span class="underline decoration-line underline-offset-2">+ log metrics</span>`}
      </button>
      ${i?r`<span class="text-[9px] text-accent/80" title="From LinkedIn's Member Post Analytics API">⟳ synced</span>`:c}
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
            @click=${()=>void this.syncMetrics(t)}>${this.syncingId===t.id?"syncing…":"⟳ sync"}</button>`:c}`}renderListRow(t){const e=this.expandedId===t.id,i=(t.body.split(`
`).find(n=>n.trim())||"").slice(0,100),s=this.activeVerticalId===null&&this.wide?this.verticals.find(n=>n.id===t.vertical_id)?.name:void 0;return r`
      <li class="pub-row">
        <button type="button" class="group w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>{t.status==="posted"?this.expandedId=e?null:t.id:this.openEditor(t.id)}}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${Ot(t)?sa:ia[t.pillar]}">${Ot(t)?"🎬 Script":ps[t.pillar]}</span>
          <span class="flex-1 min-w-0 text-sm text-ink font-semibold group-hover:underline underline-offset-2 truncate">${i}</span>
          ${s?r`<span class="text-[10px] text-muted shrink-0 max-w-[8rem] truncate">${s}</span>`:c}
          ${t.status==="posted"&&t.impressions!=null?r`<span class="text-[10px] text-muted shrink-0">👁 ${t.impressions}${t.leads?r` · <span class="text-accent">→${t.leads}</span>`:c}</span>`:c}
          <span class="text-[10px] ${t.status==="posting"||t.scheduled_at&&t.status==="approved"?"text-accent":"text-muted/60"} shrink-0">${t.status==="posting"?"Posting…":t.scheduled_at&&t.status==="approved"?pf(t.scheduled_at):new Date((t.posted_at??t.created_at)*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
        </button>
        ${e?r`<div class="px-2 pb-2">${this.renderDraftCard(t)}</div>`:c}
      </li>
    `}async saveLinkedInApp(){if(!(!this.liClientId.trim()||this.liSaving)){this.liSaving=!0;try{if(!(await fetch("/api/publisher/linkedin/app",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({clientId:this.liClientId.trim(),clientSecret:this.liClientSecret.trim()||void 0})})).ok){H(this,"Couldn't save the app details. Try again.",{tone:"error"});return}this.liClientSecret="",await this.refresh()}finally{this.liSaving=!1}}}async disconnectLinkedIn(){await xe(this,{title:"Disconnect LinkedIn?",body:"Scheduled posts won't go out until you connect again.",confirm:"Disconnect",tone:"warning"})&&(await fetch("/api/publisher/linkedin",{method:"DELETE"}),await this.refresh(),H(this,"LinkedIn disconnected"))}renderSettingsPage(){const t=n=>r`<span class="inline-block w-1.5 h-1.5 rounded-full ${n?"bg-accent":"bg-line"}"></span>`,e=this.linkedin,i=e?.expiresAt?Math.ceil((e.expiresAt-Date.now())/864e5):null,s="mt-1 w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto space-y-5 pb-6">
          <section class="mana-card p-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-sm text-ink font-medium">LinkedIn</span>
              <span class="ml-auto inline-flex items-center gap-1.5 text-[12px] text-muted">${t(!!e?.connected)}
                ${e?.connected?`Connected as ${e.name??"you"}${i!==null?` · ${i} day${i===1?"":"s"} left`:""}`:e?.expiresAt?"Connection expired":"Not connected"}</span>
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
                  <input type="text" class=${s} placeholder=${e?.hasApp?"saved, paste to replace":""} .value=${this.liClientId}
                    @input=${n=>{this.liClientId=n.target.value}} /></label>
                <label class="block text-[11px] text-muted">Client Secret
                  <input type="password" class=${s} placeholder=${e?.hasApp?"saved, paste to replace":""} .value=${this.liClientSecret}
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
                  <input type="text" placeholder="https://…/webhook/publisher-linkedin" class=${s}
                    .value=${this.webhookUrl} @input=${n=>{this.webhookUrl=n.target.value}} /></label>
                <input type="text" placeholder="shared secret (optional)" class=${s}
                  .value=${this.webhookSecret} @input=${n=>{this.webhookSecret=n.target.value}} />
                <label class="block text-[11px] text-muted">Analytics token (scope <code class="text-[10px]">r_member_postAnalytics</code>, needs LinkedIn's Community Management approval)
                  <input type="password" placeholder=${this.linkedinConfigured?"token set, paste to replace":"LinkedIn access token"} class=${s}
                    .value=${this.linkedinToken} @input=${n=>{this.linkedinToken=n.target.value}} /></label>
                <div class="flex justify-end">
                  <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.savePosting()}>Save</button>
                </div>
              </div>`:c}
          </section>
        </div>
      </div>`}renderNeedsNumbers(t){const e=this.drafts.filter(i=>i.status==="posted"&&i.impressions==null&&!Ot(i)&&this.inTopic(i)&&(i.posted_at??0)<=t-172800&&(i.posted_at??0)>=t-1814400).sort((i,s)=>(s.posted_at??0)-(i.posted_at??0));return e.length?r`
      <section class="mana-card px-3 py-2.5">
        <h4 class="text-sm font-semibold text-ink">How did these do?</h4>
        <p class="text-[11px] text-muted">Their numbers pick the next format and the openings the writer learns from.</p>
        <ul class="mt-1">${e.map(i=>r`<li>
          <button type="button" class="w-full flex items-center gap-2 px-1.5 py-1.5 rounded-lg text-left text-[13px] hover:bg-hover"
            @click=${()=>{this.setStage("posted"),this.expandedId=i.id,this.openMetrics(i)}}>
            <span class="flex-1 min-w-0 truncate text-ink">${(i.hook_used||i.body.split(`
`).find(s=>s.trim())||"").trim()}</span>
            <span class="shrink-0 text-[12px] text-accent">Enter numbers</span>
          </button></li>`)}</ul>
      </section>`:c}renderQueue(){if(this.loading)return r`<div class="flex-1"></div>`;if(!this.verticals.length)return r`<div class="flex-1 min-h-0 overflow-y-auto p-3">
        <div class="max-w-3xl mx-auto mana-card px-4 py-6 text-center">
          <p class="text-sm text-ink font-medium">Start with a topic.</p>
          <p class="text-xs text-muted mt-1 max-w-md mx-auto">A topic is one thing you post about, with its own audience, voice, language and weekly target. Nothing posts without your approval.</p>
          <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>this.openWizard()}>Create a topic</button>
        </div>
      </div>`;const t=s=>this.drafts.filter(n=>hs(n)===s&&this.inTopic(n)).sort((n,o)=>s==="scheduled"?(n.scheduled_at??0)-(o.scheduled_at??0):(o.posted_at??o.created_at)-(n.posted_at??n.created_at)).slice(0,s==="posted"?100:void 0);if(this.activeVertical)return this.renderTopicList(t);const e=t(this.stage),i={draft:"No drafts.",scheduled:"Nothing scheduled.",posted:"Nothing published yet."};return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${this.stage==="posted"?this.renderNeedsNumbers(us()):c}
        ${this.generating&&this.stage==="draft"?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
              <div class="mt-2 h-1 rounded-full bg-line overflow-hidden">
                <div class="h-full bg-accent transition-all duration-1000" style="width:${Math.min(95,Math.round((Date.now()-(this.genStartedAt??Date.now()))/1e3/120*100))}%"></div>
              </div>
            </div>`:c}
        ${e.length?r`<ul class="mana-card overflow-hidden">${e.map(s=>this.renderListRow(s))}</ul>`:this.generating&&this.stage==="draft"?c:r`<div class="mana-card px-4 py-7 text-center">
                <div class="mx-auto w-9 h-9 grid place-items-center rounded-full bg-hover text-muted">${Et(this.stage==="posted"?"send":"calendar-clock","w-4 h-4")}</div>
                <p class="mt-2 text-sm font-medium text-ink">${i[this.stage]}</p>
                <p class="mt-1 text-xs text-muted">Choose a topic to review its drafts or write the next post.</p>
                ${this.verticals[0]?r`<button type="button" class="mt-3 px-3 py-1.5 rounded-lg border border-line text-xs font-medium text-ink hover:bg-hover"
                  @click=${()=>this.setVertical(this.verticals[0].id)}>Open ${this.verticals[0].name}</button>`:c}
              </div>`}
       </div>
      </div>
    `}renderTopicList(t){const e=Pi.map(i=>({...i,items:t(i.key)})).filter(i=>i.items.length);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-4">
        ${this.generating?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
            </div>`:c}
        ${e.length||this.generating?c:r`<p class="px-1 py-6 text-center text-xs text-muted">No posts in ${this.activeVertical.name} yet. Press New post.</p>`}
        ${e.map(i=>r`
          <section class="space-y-1.5">
            <h4 class="px-1 text-[11px] font-semibold text-muted">${i.label} <span class="tabular-nums font-normal">${i.items.length}</span></h4>
            ${i.key==="posted"?this.renderNeedsNumbers(us()):c}
            <ul class="mana-card overflow-hidden">${i.items.map(s=>this.renderListRow(s))}</ul>
          </section>`)}
       </div>
      </div>`}navRow(t,e){return r`
      <button type="button" class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left ${e.active?"bg-accent-soft text-ink font-medium":"text-muted hover:text-ink hover:bg-hover"}"
        @click=${e.onClick}>
        ${Et(e.icon,"w-4 h-4 shrink-0")}
        <span class="flex-1 min-w-0 truncate">${t}</span>
        ${e.badge?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-soft text-accent font-medium">${e.badge}</span>`:c}
        ${e.count?r`<span class="text-xs text-muted">${e.count}</span>`:c}
      </button>`}toggleGroup(t){const e=new Set(this.collapsedGroups);e.has(t)?e.delete(t):e.add(t),this.collapsedGroups=e;try{localStorage.setItem("cockpit.publisher_nav_collapsed",JSON.stringify([...e]))}catch{}}toggleNav(){this.navHidden=!this.navHidden;try{localStorage.setItem("cockpit.publisher_nav_hidden",this.navHidden?"1":"0")}catch{}}startResize(t){const e=t.currentTarget,i=t.clientX,s=this.navWidth;e.setPointerCapture(t.pointerId);const n=a=>{this.navWidth=Math.min(ea,Math.max(ta,s+a.clientX-i))},o=()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",o),e.removeEventListener("pointercancel",o);try{localStorage.setItem("cockpit.publisher_nav_width",String(this.navWidth))}catch{}};e.addEventListener("pointermove",n),e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),t.preventDefault()}groupHeader(t,e,i){const s=this.collapsedGroups.has(t);return r`
      <div class="flex items-center pl-1 pr-1 pt-3 pb-0.5">
        <button type="button" class="flex-1 flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.7rem] font-semibold text-muted hover:text-ink text-left"
          aria-expanded=${!s} @click=${()=>this.toggleGroup(t)}>
          ${Et(s?"chevron-right":"chevron-down","w-3 h-3")} ${e}</button>
        ${i??c}
      </div>`}renderTopicRow(t,e){const i=this.drafts.filter(n=>n.vertical_id===t.id&&hs(n)==="draft").length,s=this.activeVerticalId===t.id&&(this.view==="queue"||this.view==="editor"||this.view==="wizard"&&this.wizardEditId===t.id);return r`
      <div class="relative ${this.topicDrag.dropClass(t.id)}"
        draggable="true"
        @mousedown=${()=>this.topicDrag.arm(t.id)}
        @mouseup=${this.topicDrag.disarm}
        @dragstart=${n=>this.topicDrag.onDragStart(n,t.id)}
        @dragend=${this.topicDrag.onDragEnd}
        @dragover=${n=>this.topicDrag.onDragOver(n,t.id,e)}
        @dragleave=${this.topicDrag.onDragLeave}
        @drop=${n=>this.topicDrag.onDrop(n,t.id,e)}>
        <button type="button" aria-current=${s?"page":c}
          class="w-full min-w-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-left ${s?"bg-accent-soft":"hover:bg-hover"} ${this.topicDrag.isDragging(t.id)&&this.topicDrag.active?"opacity-40":""}"
          title=${t.name}
          @click=${()=>this.setVertical(t.id)}>
          <span class="flex-1 min-w-0 truncate text-sm text-ink">${t.name}</span>
          ${i?r`<span class="shrink-0 text-xs text-muted tabular-nums" title="${i} draft${i===1?"":"s"}">${i}</span>`:c}
        </button>
      </div>`}pipelineItems(){const t=this.view==="queue"&&this.activeVerticalId===null;return[...Pi.filter(e=>e.key!=="draft").map(e=>({label:e.label,icon:e.icon,active:t&&this.stage===e.key,count:this.stageCount(e.key,!0),onClick:()=>{this.setVertical(null),this.setStage(e.key)}})),{label:"Results",icon:"bar-chart",active:this.view==="results"&&this.activeVerticalId===null,count:0,onClick:()=>{this.setVertical(null),this.view="results",this.navOpen=!1,this.loadInsights(!0)}}]}renderNavRail(){const t="relative w-9 h-9 grid place-items-center rounded-lg";return r`
      <aside class="shrink-0 w-12 h-full flex flex-col items-center gap-1 pt-3 pb-2 bg-surface border-r border-line/60 overflow-y-auto">
        <button type="button" class="${t} text-muted hover:text-ink hover:bg-hover" aria-label="Show sidebar" title="Show sidebar"
          @click=${()=>this.toggleNav()}>${Et("layout-sidebar")}</button>
        ${this.pipelineItems().map(e=>r`<button type="button" class="${t} ${e.active?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
          aria-label=${e.label} title=${e.count?`${e.label} (${e.count})`:e.label} @click=${e.onClick}>${Et(e.icon)}</button>`)}
        <div class="w-6 border-t border-line/60 my-1"></div>
        ${this.verticals.map(e=>{const i=this.activeVerticalId===e.id&&this.view!=="settings",s=this.drafts.filter(n=>n.vertical_id===e.id&&hs(n)==="draft").length;return r`<button type="button" class="${t} text-[13px] font-semibold ${i?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
            aria-label=${e.name} title=${s?`${e.name} (${s} draft${s===1?"":"s"})`:e.name} @click=${()=>this.setVertical(e.id)}>
            ${e.name.trim().charAt(0).toUpperCase()}
            ${s?r`<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent"></span>`:c}</button>`})}
      </aside>`}renderNav(){const t=i=>!this.collapsedGroups.has(i),e=r`<button type="button" aria-label="New topic" title="New topic"
      class="w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openWizard()}>${Et("plus","w-3.5 h-3.5")}</button>`;return r`
      ${this.wide?r`<div class="flex items-center justify-between gap-2 pl-4 pr-2 pt-3 pb-1 shrink-0">
        <h2 class="text-sm font-semibold text-ink">Publisher</h2>
        <button type="button" class="w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label="Hide sidebar" title="Hide sidebar" @click=${()=>this.toggleNav()}>${Et("layout-sidebar")}</button>
      </div>`:c}
      <nav class="flex-1 min-h-0 overflow-y-auto px-2 ${this.wide?"":"pt-3"} pb-2" aria-label="Publisher">
        ${this.pipelineItems().map(i=>this.navRow(i.label,i))}
        ${this.groupHeader("topics","Topics",e)}
        ${t("topics")?r`
          ${this.verticals.map((i,s)=>this.renderTopicRow(i,s))}
          ${this.verticals.length||this.loading?c:r`<button type="button" class="w-full px-3 py-1.5 rounded-lg text-sm text-left text-muted hover:text-ink hover:bg-hover"
            @click=${()=>this.openWizard()}>Create your first topic</button>`}`:c}
      </nav>
      <div class="px-2 pb-2 shrink-0 border-t border-line/60 pt-2">
        ${this.navRow(this.linkedin?.connected?"LinkedIn connected":"Connect LinkedIn",{icon:"settings",active:this.view==="settings",badge:this.linkedin?.connected||!this.linkedin?void 0:"off",onClick:()=>{this.view="settings",this.navOpen=!1}})}
      </div>`}renderResults(){const t=this.verticals;if(!t.length)return r`<p class="p-6 text-center text-xs text-muted">No topics yet.</p>`;if(!this.insights)return r`<div class="flex-1 min-h-0 p-3"><p class="p-6 text-center text-xs text-muted">Loading results…</p></div>`;const e=s=>s>=1e3?`${(s/1e3).toFixed(s>=1e4?0:1)}k`:String(Math.round(s)),i=(s,n,o)=>r`
      <div class="rounded-lg border border-line/70 px-3 py-2 min-w-0">
        <div class="text-[11px] text-muted truncate">${s}</div>
        <div class="text-lg font-semibold text-ink leading-tight tabular-nums">${n}</div>
        ${o?r`<div class="text-[10px] text-muted truncate">${o}</div>`:c}
      </div>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${t.map(s=>{const n=this.insights.find(u=>u.topicId===s.id);if(!n)return c;const o=Math.round(s.posts_per_week*30/7),a=n.postedThisWeek,l=n.byFormat.filter(u=>u.avgImpressions!=null),h=Math.max(1,...l.map(u=>u.avgImpressions));return r`
            <section class="mana-card p-3 space-y-3">
              <div>
                <h4 class="text-sm font-semibold text-ink">${s.name}</h4>
                <p class="text-[11px] text-muted">${s.goal?.trim()?`Goal: ${s.goal.trim()}`:"No goal set. Add one in Edit topic."}</p>
              </div>
              <div>
                <div class="flex items-baseline justify-between text-[11px] text-muted mb-1">
                  <span>This week</span><span class="text-ink tabular-nums">${a} of ${s.posts_per_week}</span>
                </div>
                <div class="h-1.5 rounded-full bg-line overflow-hidden" role="meter" aria-valuemin="0" aria-valuemax=${s.posts_per_week} aria-valuenow=${a} aria-label="Posts this week">
                  <div class="h-full rounded-full bg-accent" style="width:${Math.min(100,a/Math.max(1,s.posts_per_week)*100)}%"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 ${this.wide?"sm:grid-cols-4":""} gap-2">
                ${i("Posts, 30 days",String(n.posts),`target about ${o}`)}
                ${i("Avg impressions",n.avgImpressions==null?"–":e(n.avgImpressions),n.measured?`${n.measured} of ${n.posts} measured`:"none measured yet")}
                ${i("Comments",String(n.comments))}
                ${i("Leads",String(n.leads),"logged by hand")}
              </div>
              ${l.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1.5">Avg impressions by format</p>
                  <div class="space-y-1.5">${l.map(u=>r`
                    <div class="flex items-center gap-2 text-[12px]" title="${ps[u.format]}: ${Math.round(u.avgImpressions)} average impressions over ${u.measured} measured post${u.measured===1?"":"s"}">
                      <span class="w-20 shrink-0 text-ink">${ps[u.format]}</span>
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
      </div>`}async loadInsights(t=!1){const e=this.drafts.filter(i=>i.status==="posted").map(i=>`${i.id}:${i.pillar}:${i.posted_at}:${i.impressions}:${i.reactions}:${i.comments}:${i.leads}`).join(",");if(!(!t&&e===this.insightsFor&&this.insights)){this.insightsFor=e;try{const i=await fetch("/api/publisher/insights");i.ok&&(this.insights=(await i.json()).insights)}catch{}}}renderEditor(){const t=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null;if(!this.composing&&!t&&this.editorId!==this.createdId)return r`<p class="p-6 text-center text-xs text-muted">That post is gone.</p>`;const e=this.verticals.find(n=>n.id===(t?.vertical_id??this.activeVerticalId))??this.verticals[0],i=this.drafts.filter(n=>n.id!==t?.id),s=e?pc(e,i,us(),this.takenTimes(t?.id)):null;return r`<publisher-editor class="flex flex-col flex-1 min-h-0"
      .draft=${t} .topics=${this.verticals} .defaultTopicId=${this.activeVerticalId} .defaultScheduleAt=${s}
      .backLabel=${this.activeVertical?.name??Pi.find(n=>n.key===this.stage).label}
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
      @force-close=${()=>this.leaveEditor()}></publisher-editor>`}renderMainHeader(){if(this.view==="editor")return c;const t=this.activeVertical,e=t&&this.view==="queue",i=this.view==="settings"?"LinkedIn connection":this.view==="wizard"?this.wizardEditId!=null?"":"New topic":e?t.name:this.view==="results"?"Results":Pi.find(o=>o.key===this.stage).label,s=this.view==="wizard"?"max-w-lg":"max-w-3xl",n=this.view==="wizard"&&this.wizardEditId!=null;return r`
      <header class="px-3 pt-3 shrink-0"><div class="${s} mx-auto w-full flex items-center gap-2 mana-card px-4 py-3">
        ${n?r`<button type="button" class="flex items-center h-8 pl-1 pr-2 -ml-1 rounded-lg text-sm font-medium text-accent hover:bg-hover"
                @click=${()=>void this.closeEditForm()}>${Et("chevron-left")} ${this.verticals.find(o=>o.id===this.wizardEditId)?.name??"Back"}</button>`:this.wide?c:r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
                @click=${()=>{this.navOpen=!0}}>${Et("chevron-left")} Publisher</button>`}
        <div class="flex-1 min-w-0 ${this.wide?"min-h-8 flex flex-col justify-center":""}">
          <h3 class="text-sm font-semibold text-ink truncate" title=${i}>${i}</h3>
          ${e?r`<span class="text-[11px] text-muted tabular-nums">${this.postedThisWeek(t)} of ${t.posts_per_week} published this week</span>`:c}
        </div>
        ${e?r`<button type="button" class="shrink-0 flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          title="Write a new post for ${t.name}" @click=${()=>this.openCompose()}>${Et("square-pen","w-3.5 h-3.5")} New post</button>`:c}
        ${e?r`<button type="button" class="shrink-0 w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label=${`Settings for ${t.name}`} title="Topic settings"
          @click=${()=>this.openWizard(t)}>${Et("settings")}</button>`:c}
      </div></header>`}render(){const t=this.wide?!this.navHidden:this.navOpen,e=this.wide||!this.navOpen;return r`
      <div class="relative h-full min-h-0 bg-bg p-3 overflow-hidden">
      <div class="publisher-tool-surface flex h-full min-h-0 w-full max-w-[80rem] ${this.chatOpen?"mr-auto":"mx-auto"} overflow-hidden rounded-lg border border-card-border shadow-[var(--card-shadow)]">
        ${this.wide&&this.navHidden?this.renderNavRail():c}
        <aside class="${t?"flex":"hidden"} relative flex-col h-full min-h-0 overflow-hidden bg-surface ${this.wide?"shrink-0 border-r border-line/60":"flex-1 min-w-0"}"
          style=${this.wide?`width:${this.navWidth}px`:""}>
          ${this.renderNav()}
          ${this.wide?r`<div class="absolute top-0 bottom-0 -right-1 w-2 z-10 cursor-col-resize hover:bg-accent/30 transition-colors" role="separator" aria-orientation="vertical"
            title="Drag to resize, double-click to reset"
            @pointerdown=${i=>this.startResize(i)}
            @dblclick=${()=>{this.navWidth=ds;try{localStorage.setItem("cockpit.publisher_nav_width",String(ds))}catch{}}}></div>`:c}
        </aside>
        <section class="${e?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderMainHeader()}
          ${this.view==="wizard"?this.wizardEditId!=null?this.renderEditForm():this.renderWizard():this.view==="settings"?this.renderSettingsPage():this.view==="results"?this.renderResults():this.view==="editor"?this.renderEditor():this.renderQueue()}
        </section>
        ${this.libraryFor!==null?r`
          <notes-media-library .tab=${"all"}
            @close=${()=>{this.libraryFor=null}}
            @insert=${i=>{const s=this.libraryFor;this.libraryFor=null;const n=this.drafts.find(o=>o.id===s);n&&this.setDraftImage(n,i.detail.url)}}></notes-media-library>`:c}
        ${this.renderToast()}
        ${this.renderDialog()}
      </div>
      </div>
    `}};$([b({type:Boolean})],k.prototype,"chatOpen",2);$([d()],k.prototype,"verticals",2);$([d()],k.prototype,"drafts",2);$([d()],k.prototype,"webhookConfigured",2);$([d()],k.prototype,"linkedinConfigured",2);$([d()],k.prototype,"loading",2);$([d()],k.prototype,"fromCopy",2);$([d()],k.prototype,"activeVerticalId",2);$([d()],k.prototype,"stage",2);$([d()],k.prototype,"view",2);$([d()],k.prototype,"wide",2);$([d()],k.prototype,"navOpen",2);$([d()],k.prototype,"navWidth",2);$([d()],k.prototype,"navHidden",2);$([d()],k.prototype,"collapsedGroups",2);$([d()],k.prototype,"wizardEditId",2);$([d()],k.prototype,"wizardStep",2);$([d()],k.prototype,"wizard",2);$([d()],k.prototype,"wizardLang",2);$([d()],k.prototype,"wizardFormality",2);$([d()],k.prototype,"langOther",2);$([d()],k.prototype,"editPostsPerWeek",2);$([d()],k.prototype,"editImageStyle",2);$([d()],k.prototype,"editImageDna",2);$([d()],k.prototype,"editImageRef",2);$([d()],k.prototype,"imaging",2);$([d()],k.prototype,"improving",2);$([d()],k.prototype,"imageErrors",2);$([d()],k.prototype,"stylePickerFor",2);$([d()],k.prototype,"imageStyleFor",2);$([d()],k.prototype,"libraryFor",2);$([d()],k.prototype,"saving",2);$([d()],k.prototype,"editingId",2);$([d()],k.prototype,"editBody",2);$([d()],k.prototype,"composing",2);$([d()],k.prototype,"editorId",2);$([d()],k.prototype,"twoCol",2);$([d()],k.prototype,"aiTopicId",2);$([d()],k.prototype,"aiStartedAt",2);$([d()],k.prototype,"aiError",2);$([d()],k.prototype,"generating",2);$([d()],k.prototype,"genStartedAt",2);$([d()],k.prototype,"webhookUrl",2);$([d()],k.prototype,"webhookSecret",2);$([d()],k.prototype,"linkedinToken",2);$([d()],k.prototype,"linkedin",2);$([d()],k.prototype,"liClientId",2);$([d()],k.prototype,"liClientSecret",2);$([d()],k.prototype,"liSaving",2);$([d()],k.prototype,"showLegacy",2);$([d()],k.prototype,"postUrlForId",2);$([d()],k.prototype,"postUrlDraft",2);$([d()],k.prototype,"syncingId",2);$([d()],k.prototype,"copiedId",2);$([d()],k.prototype,"researchOpenId",2);$([d()],k.prototype,"expandedId",2);$([d()],k.prototype,"toastMsg",2);$([d()],k.prototype,"ask",2);$([d()],k.prototype,"insights",2);$([d()],k.prototype,"metricsForId",2);$([d()],k.prototype,"metricsDraft",2);k=$([w("publisher-section")],k);var mf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,Kl=(t,e,i,s)=>{for(var n=s>1?void 0:s?ff(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&mf(e,i,n),n};const Wl=["M 100 600 q 0 -500, 500 -500 t 500 500 t -500 500 T 100 600 z","M 100 600 q -50 -400, 500 -500 t 450 550 t -500 500 T 100 600 z","M 100 600 q 0 -400, 500 -500 t 400 500 t -500 500 T 100 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 100 600 q 100 -600, 500 -500 t 400 500 t -500 500 T 100 600 z"],ht=t=>lc(`path("${Wl[t-1]}")`),aa=200;let qs=class extends It{constructor(){super(...arguments),this.label="teleporting to the office…"}render(){const t=[0,2,1,3],e=[1,2,3,4,1,2,3,4].map((i,s)=>Me`<g class="blob b${i}${s>3?" alt":""}"><path d=${Wl[t[i-1]]}></path></g>`);return r`<div class="orb" aria-hidden="true"><svg viewBox="0 0 1200 1200">${e}</svg></div><span class="label">${this.label}</span>`}};qs.styles=Rt`
    :host { display: grid; place-items: center; align-content: center; gap: .25rem; font-size: .875rem; letter-spacing: .04em;
      --glow: #101030; --blob-1: #984ddf; --blob-2: #4344ad; --blob-3: #74d9e1; --blob-4: #050515; }
    .orb { position: relative; width: ${aa}px; height: ${aa}px; display: grid; place-items: center; }
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
    @keyframes blob-1 { 0% { d: ${ht(1)}; } 30% { d: ${ht(2)}; } 70% { d: ${ht(3)}; } 100% { d: ${ht(4)}; } }
    @keyframes blob-2 { 0% { d: ${ht(3)}; } 40% { d: ${ht(5)}; } 80% { d: ${ht(2)}; } 100% { d: ${ht(6)}; } }
    @keyframes blob-3 { 0% { d: ${ht(2)}; } 35% { d: ${ht(4)}; } 75% { d: ${ht(6)}; } 100% { d: ${ht(3)}; } }
    @keyframes blob-4 { 0% { d: ${ht(4)}; } 30% { d: ${ht(6)}; } 70% { d: ${ht(2)}; } 100% { d: ${ht(5)}; } }
    @keyframes rotate { to { transform: rotate(360deg); } }
    @keyframes fade { 50% { opacity: .5; } }
    @media (prefers-reduced-motion: reduce) { .blob, .blob path, .label { animation: none; } }
  `;Kl([b()],qs.prototype,"label",2);qs=Kl([w("office-orb")],qs);var gf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,zo=(t,e,i,s)=>{for(var n=s>1?void 0:s?bf(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&gf(e,i,n),n};let Ks=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await Lt(()=>import("./newsroom-section-D2g_EGxO.js").then(t=>t.n),__vite__mapDeps([9,3,4,10,5])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<newsroom-section class="flex flex-col flex-1 min-h-0"></newsroom-section>`:r`<div class="flex-1 grid place-items-center text-sm text-muted" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>couldn't open the office. retry</button>`:r`<office-orb></office-orb>`}</div>${c}`}};zo([d()],Ks.prototype,"ready",2);zo([d()],Ks.prototype,"failed",2);Ks=zo([w("newsroom-loader")],Ks);const Gl="slmai.cockpit.ideasCache";let ri=null;function vf(){if(ri)return ri;try{const t=localStorage.getItem(Gl);t&&(ri=JSON.parse(t))}catch{}return ri}function Vl(t){if(ri!==t){ri=t;try{localStorage.setItem(Gl,JSON.stringify(t))}catch{}}}var yf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,ft=(t,e,i,s)=>{for(var n=s>1?void 0:s?xf(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&yf(e,i,n),n};const la="slmai.cockpit.ideasCollapsed",An="slmai.cockpit.ideasSection.title",Mn="Ideas",wf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let lt=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=Mn,this.ideas=[],this.highlightIds=new Set,this.flash=new Is(this,"idea"),this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.dragOverCommit=!1,this.draggingId=null,this.movingIds=new Set,this.onIdeasChanged=()=>{this.load()},this.onOpsEvent=t=>{const e=t.detail;!e||e.action!=="refresh"||(this.flash.take(e),e.added?.kind==="idea"&&(this.highlightIds=new Set(this.highlightIds).add(e.added.id)),this.load())},this.lastEmittedCount=-1,this.onCommitDragOver=t=>{t.dataTransfer?.types.includes("text/x-commit-id")&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragOverCommit=!0)},this.onCommitDragLeave=()=>{this.dragOverCommit=!1},this.onCommitDrop=async t=>{const e=t.dataTransfer?.getData("text/x-commit-id");if(!e)return;t.preventDefault(),this.dragOverCommit=!1;const i=(t.dataTransfer?.getData("text/plain")||"").trim();i&&await Dl(Number(e),i)}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(la)==="1",this.titleValue=localStorage.getItem(An)??Mn,fetch("/api/settings").then(t=>t.json()).then(t=>{const e=t["ui.section.ideas.title"];e&&(this.titleValue=e,localStorage.setItem(An,e))}).catch(()=>{}),this.ideas=vf()??[],this.load(),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("ops-event",this.onOpsEvent)}clearHighlight(t){if(!this.highlightIds.has(t))return;const e=new Set(this.highlightIds);e.delete(t),this.highlightIds=e}updated(){Vl(this.ideas);const t=this.ideas.filter(i=>!i.hidden).length;if(t!==this.lastEmittedCount&&(this.lastEmittedCount=t,document.dispatchEvent(new CustomEvent("mana-ideas-count",{detail:{count:t}}))),this.editingId==null)return;const e=this.querySelector("textarea.idea-edit");e&&this.autoGrow(e)}autoGrow(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}async load(){try{const e=await(await fetch("/api/ideas")).json();this.ideas=e.ideas}catch{}}startEditTitle(t){t.stopPropagation(),this.editingTitle=!0}commitTitleEdit(t){const e=t.trim()||Mn;this.editingTitle=!1,this.titleValue=e,localStorage.setItem(An,e),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":e})})}onTitleKey(t){t.key==="Enter"?(t.preventDefault(),this.commitTitleEdit(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(la,this.collapsed?"1":"0")}async toggleHidden(t,e){this.ideas=this.ideas.map(i=>i.id===t?{...i,hidden:e}:i);try{await re(`/api/ideas/${t}`,{hidden:e})}catch{this.ideas=this.ideas.map(i=>i.id===t?{...i,hidden:!e}:i)}}async moveToWeek(t){if(!this.movingIds.has(t.id)){this.movingIds.add(t.id);try{await Oo(t.id,t.text)}finally{this.movingIds.delete(t.id)}}}async deleteIdea(t){const e=this.ideas;this.ideas=this.ideas.filter(i=>i.id!==t);try{await ve(`/api/ideas/${t}`)}catch{this.ideas=e}}beginAdd(t){t.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(t=!1){if(!this.adding)return;const e=this.newText.trim();if(this.newText="",!e){this.adding=!1;return}t||(this.adding=!1);try{const i=await B("/api/ideas",{text:e});this.ideas=[...this.ideas,{id:i.id,text:e,hidden:!1}]}catch{}}onAddKey(t){t.key==="Enter"?(t.preventDefault(),this.commitAdd(!0)):t.key==="Escape"&&(t.preventDefault(),this.adding=!1,this.newText="")}startEdit(t){this.adding=!1,this.editingId=t.id,this.editText=t.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const t=this.editingId;if(t===null)return;const e=this.editText.trim();if(this.cancelEdit(),!e)return;const i=this.ideas;this.ideas=this.ideas.map(s=>s.id===t?{...s,text:e}:s);try{await re(`/api/ideas/${t}`,{text:e})}catch{this.ideas=i}}onEditKey(t){t.key==="Enter"?(t.preventDefault(),this.commitEdit()):t.key==="Escape"&&(t.preventDefault(),this.cancelEdit())}onDragStart(t,e){if(this.draggingId=e,t.dataTransfer){t.dataTransfer.setData("text/x-idea-id",String(e));const i=this.ideas.find(s=>s.id===e);i&&t.dataTransfer.setData("text/plain",i.text),t.dataTransfer.effectAllowed="move"}}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(t,e){if(!t.dataTransfer?.types.includes("text/x-idea-id"))return;t.preventDefault(),t.dataTransfer.dropEffect="move";const i=t.currentTarget.getBoundingClientRect();this.dragOverId=e,this.dragOverPos=t.clientY<i.top+i.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(t,e){const i=t.dataTransfer?.getData("text/x-idea-id"),s=i?Number(i):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(s)||s===e)return;t.preventDefault();const a=(this.showHidden?this.ideas:this.ideas.filter(v=>!v.hidden)).findIndex(v=>v.id===e);if(a<0)return;const l=n==="after"?a+1:a,h=this.ideas.slice(),u=h.findIndex(v=>v.id===s),p=h.findIndex(v=>v.id===e);if(u<0||p<0)return;const[m]=h.splice(u,1);if(!m)return;const g=n==="after"?p+(u<p?0:1):p-(u<p?1:0);h.splice(Math.max(0,g),0,m),this.ideas=h;try{await B(`/api/ideas/${s}/reorder`,{index:l})}catch{this.load()}}renderHiddenToggle(t){return t.length===0?c:Ro({open:this.showHidden,label:`${t.length} hidden`,controls:"hidden-ideas",onToggle:()=>{this.showHidden=!this.showHidden}})}renderIdeas(t,e){return r`
      <ul id=${e} class="flex flex-col">
        ${t.map(i=>this.editingId===i.id?r`
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
                    @input=${s=>{this.editText=s.target.value,this.autoGrow(s.target)}}
                    @keydown=${this.onEditKey}
                    @paste=${Ls}
                    @blur=${()=>void this.commitEdit()}
                  ></textarea>
                </li>
              `:r`
                <li
                  data-row-key=${`idea:${i.id}`}
                  data-flash=${this.flash.key(i.id)}
                  class="flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover group/idea ${this.flash.cls(i.id)}
                    ${this.dragOverId===i.id&&this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverId===i.id&&this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
                  draggable=${this.draggingId===i.id?"true":"false"}
                  @dragstart=${s=>this.onDragStart(s,i.id)}
                  @dragend=${()=>this.onDragEnd()}
                  @dragover=${s=>this.onDragOver(s,i.id)}
                  @dragleave=${()=>this.onDragLeave()}
                  @drop=${s=>this.onDrop(s,i.id)}
                >
                  <span
                    class="idea-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/idea:opacity-60 hover:!opacity-100 select-none leading-none"
                    title="Drag to reorder"
                    style="font-size:14px;letter-spacing:-1px;"
                    @mousedown=${()=>{this.draggingId=i.id}}
                    @mouseup=${()=>{this.draggingId===i.id&&(this.draggingId=null)}}
                  >⠿</span>
                  <button
                    type="button"
                    class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink"
                    style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
                    title="Move to Weekly"
                    aria-label=${`Move to Weekly: ${i.text}`}
                    @click=${s=>{s.stopPropagation(),this.moveToWeek(i)}}
                  ></button>
                  <div class="flex-1 min-w-0 flex items-center gap-2">
                  <span
                    class="flex-1 min-w-0 text-sm cursor-text ${this.highlightIds.has(i.id)?"font-medium":"text-ink"}"
                    style=${!i.hidden&&this.highlightIds.has(i.id)?"color:var(--nsc-green);":""}
                    @click=${()=>{this.clearHighlight(i.id),this.startEdit(i)}}
                  >${Al(i.text)}</span>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 focus:opacity-100 hover:text-ink transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title=${i.hidden?"Show item":"Hide item"}
                    aria-label=${`${i.hidden?"Show":"Hide"} item: ${i.text}`}
                    @click=${s=>{s.stopPropagation(),this.toggleHidden(i.id,!i.hidden)}}
                  >${W(Ke(We[i.hidden?"eye":"eye-off"]))}</button>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title="Delete idea"
                    @click=${s=>{s.stopPropagation(),this.deleteIdea(i.id)}}
                  >
                    ${W(wf)}
                  </button>
                  </div>
                </li>
              `)}
      </ul>
    `}render(){const t=this.ideas.filter(s=>s.hidden),e=this.ideas.filter(s=>!s.hidden),i=this.tabbed||!this.collapsed;return r`
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
                >${W(this.collapsed?Xi:Ji)}</span
              >
              ${this.editingTitle?r`<input
                    class="text-lg font-semibold text-ink leading-none bg-transparent border-b border-line outline-none"
                    style="letter-spacing:-0.01em;min-width:4ch;"
                    .value=${this.titleValue}
                    autofocus
                    @click=${s=>s.stopPropagation()}
                    @keydown=${this.onTitleKey}
                    @blur=${s=>this.commitTitleEdit(s.target.value)}
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

        ${i?r`
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
                        @input=${s=>this.newText=s.target.value}
                        @keydown=${this.onAddKey}
                        @paste=${Ls}
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
    `}};ft([b({type:Boolean})],lt.prototype,"tabbed",2);ft([d()],lt.prototype,"collapsed",2);ft([d()],lt.prototype,"showHidden",2);ft([d()],lt.prototype,"editingTitle",2);ft([d()],lt.prototype,"titleValue",2);ft([d()],lt.prototype,"ideas",2);ft([d()],lt.prototype,"highlightIds",2);ft([d()],lt.prototype,"adding",2);ft([d()],lt.prototype,"newText",2);ft([d()],lt.prototype,"editingId",2);ft([d()],lt.prototype,"editText",2);ft([d()],lt.prototype,"dragOverId",2);ft([d()],lt.prototype,"dragOverPos",2);ft([d()],lt.prototype,"dragOverCommit",2);ft([d()],lt.prototype,"draggingId",2);lt=ft([w("ideas-section")],lt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ca=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},kf=Ki(class extends Gs{constructor(t){if(super(t),t.type!==bo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;i===void 0?i=e:e!==void 0&&(s=e);const n=[],o=[];let a=0;for(const l of t)n[a]=s?s(l,a):a,o[a]=i(l,a),a++;return{values:o,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=Sc(t),{values:o,keys:a}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=a,o;const l=this.ut??=[],h=[];let u,p,m=0,g=n.length-1,v=0,y=o.length-1;for(;m<=g&&v<=y;)if(n[m]===null)m++;else if(n[g]===null)g--;else if(l[m]===a[v])h[v]=Ee(n[m],o[v]),m++,v++;else if(l[g]===a[y])h[y]=Ee(n[g],o[y]),g--,y--;else if(l[m]===a[y])h[y]=Ee(n[m],o[y]),wi(t,h[y+1],n[m]),m++,y--;else if(l[g]===a[v])h[v]=Ee(n[g],o[v]),wi(t,n[m],n[g]),g--,v++;else if(u===void 0&&(u=ca(a,v,y),p=ca(l,m,g)),u.has(l[m]))if(u.has(l[g])){const D=p.get(a[v]),x=D!==void 0?n[D]:null;if(x===null){const N=wi(t,n[m]);Ee(N,o[v]),h[v]=N}else h[v]=Ee(x,o[v]),wi(t,n[m],x),n[D]=null;v++}else rn(n[g]),g--;else rn(n[m]),m++;for(;v<=y;){const D=wi(t,h[y+1]);Ee(D,o[v]),h[v++]=D}for(;m<=g;){const D=n[m++];D!==null&&rn(D)}return this.ut=a,za(t,h),vo}}),$f=3e3;let da=null;function ha(){const t=da;return da=null,t&&Date.now()-t.at<$f?t:null}let ua=null,In=null,_n=null;function Sf(){ua?.close(),ua=null,In&&clearTimeout(In),In=null,_n&&clearTimeout(_n),_n=null}let pa=Promise.resolve();function ma(t){if(t.defaultPrevented||t.altKey||!(t.metaKey||t.ctrlKey))return;const e=t.key.toLowerCase(),i=e==="y"||e==="z"&&t.shiftKey?"redo":e==="z"?"undo":null;i&&(t.composedPath().some(s=>s instanceof HTMLElement&&(s.matches("input, textarea")||s.isContentEditable))||document.querySelector('[role="dialog"], [role="menu"]')||(t.preventDefault(),pa=pa.then(async()=>{try{const{changed:s}=await B(`/api/planner/${i}`);if(!s){Qt(`Nothing to ${i}`,"user");return}const n=f.getState();await Promise.all([n.loadGoals(),n.loadCommitments()]),document.dispatchEvent(new CustomEvent("mana-ideas-changed")),document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:n.currentWeek??void 0}})),Qt(i==="undo"?"Undone":"Redone","user")}catch(s){Qt(s instanceof Error?s.message:`Couldn't ${i}`,"error")}})))}var Tf=Object.getOwnPropertyDescriptor,Cf=(t,e,i,s)=>{for(var n=s>1?void 0:s?Tf(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=a(n)||n);return n};let fa=class extends T{connectedCallback(){super.connectedCallback(),this.unsubCommits=j(this,f,t=>t.commitments),this.unsubWeek=j(this,f,t=>t.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubWeek?.()}daysLeft(){if((f.getState().currentWeek??At())!==At())return null;const e=7-(new Date().getDay()||7);return e===0?"last day":`${e} day${e===1?"":"s"} left`}render(){const t=f.getState().commitments,e=t.length;if(e===0)return c;const i=t.filter(o=>o.done).length,s=Math.round(i/e*100),n=this.daysLeft();return r`<div class="bg-surface px-4 py-3 flex items-center gap-3 text-sm">
      <span class="tabular-nums whitespace-nowrap"
        ><span class="font-medium text-ink">${i}</span><span class="text-muted"> of ${e} done</span
        >${n?r`<span class="text-muted"> · ${n}</span>`:c}</span
      >
      <div
        class="w-40 max-w-[40%] overflow-hidden rounded-full"
        style="height:4px;background:var(--color-line);"
        role="progressbar"
        aria-label="Weekly task progress"
        aria-valuemin="0"
        aria-valuemax=${e}
        aria-valuenow=${i}
      >
        <div style="height:100%;width:${s}%;background:var(--accent);border-radius:9999px;transition:width .35s ease;"></div>
      </div>
    </div>`}};fa=Cf([w("week-progress")],fa);var Ef=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,dt=(t,e,i,s)=>{for(var n=s>1?void 0:s?Df(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&Ef(e,i,n),n};const we=["week","ideas","goals"];function ga(t){try{const e=JSON.parse(t||"[]");if(!Array.isArray(e))return[...we];const i=[...new Set(e.filter(s=>we.includes(s)))];return[...i,...we.filter(s=>!i.includes(s))]}catch{return[...we]}}const ms="slmai.cockpit.plannerTab",Pf=6e3,ne={week:{ls:"slmai.cockpit.weekSection.title",setting:"ui.section.week.title",def:"Shipping this week"},ideas:{ls:"slmai.cockpit.ideasSection.title",setting:"ui.section.ideas.title",def:"Ideas"},goals:{ls:"slmai.cockpit.goalsSection.title",setting:"ui.section.goals.title",def:"Goals"}};let rt=class extends T{constructor(){super(...arguments),this.showMeetings=!1,this.order=[...we],this.reorderKey=null,this.reorderOver=null,this.reorderAfter=!1,this.orderError="",this.orderSetting="",this.savingOrder=!1,this.orderRevision=0,this.ignoreTabClick=!1,this.tabPress=null,this.active="week",this.titles={week:ne.week.def,ideas:ne.ideas.def,goals:ne.goals.def},this.ideasCount=0,this.goalsCount=0,this.weekCount=0,this.editing=null,this.dragKind=null,this.dragOverTab=null,this.note="",this.noteKind="user",this.noteTimer=null,this.onPlannerNote=t=>{const e=t.detail;e?.text&&this.showNote(e.text,e.kind)},this.onAgentFollow=()=>{const t=ha();t&&this.follow(t)},this.refreshOrder=async()=>{if(!(!this.orderSetting||this.savingOrder||this.tabPress||this.editing||document.visibilityState==="hidden"))try{const t=this.orderRevision,e=await C.settings.list();if(this.savingOrder||this.tabPress||t!==this.orderRevision)return;this.order=ga(e[this.orderSetting]),localStorage.setItem(this.orderSetting,JSON.stringify(this.order))}catch{}},this.onTabPointerMove=t=>{const e=this.tabPress;if(!(!e||e.pointerId!==t.pointerId)){if(!this.reorderKey){const i=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y);if(s>6&&s>i){this.cancelTabReorder();return}if(i<=6)return;this.reorderKey=e.key}t.preventDefault(),this.reorderOver=null;for(const i of this.querySelectorAll("[data-planner-tab]")){const s=i.getBoundingClientRect();if(!(t.clientX<s.left||t.clientX>s.right||t.clientY<s.top-16||t.clientY>s.bottom+16)){this.reorderOver=i.dataset.plannerTab,this.reorderAfter=t.clientX>s.left+s.width/2;break}}}},this.onTabPointerUp=t=>{if(this.tabPress?.pointerId!==t.pointerId)return;const e=this.reorderKey,i=this.reorderOver,s=this.reorderAfter;e&&(this.ignoreTabClick=!0,setTimeout(()=>{this.ignoreTabClick=!1},0)),this.cancelTabReorder(),e&&i&&this.moveTab(e,i,s)},this.cancelTabReorder=()=>{this.tabPress=null,this.reorderKey=this.reorderOver=null,window.removeEventListener("pointermove",this.onTabPointerMove),window.removeEventListener("pointerup",this.onTabPointerUp),window.removeEventListener("pointercancel",this.cancelTabReorder)},this.cancelReorderKey=t=>{t.key==="Escape"&&this.cancelTabReorder()},this.onIdeasChanged=()=>{this.loadIdeasCount(),this.loadCounts()},this.onCountsStale=()=>void this.loadCounts(),this.onOpsEvent=t=>{t.detail?.action==="refresh"&&(this.loadIdeasCount(),this.loadCounts())},this.onIdeasCount=t=>{const e=t.detail?.count;typeof e=="number"&&(this.ideasCount=e)},this.onDocDragStart=t=>{const e=t.dataTransfer?.types;e&&(e.includes("text/x-idea-id")?this.dragKind="idea":e.includes("text/x-commit-id")?this.dragKind="commit":this.dragKind=null)},this.onDocDragEnd=()=>{this.dragKind=null,this.dragOverTab=null}}connectedCallback(){super.connectedCallback();const t=localStorage.getItem(ms);t&&we.includes(t)&&(this.active=t);const e={...this.titles};for(const s of we){const n=localStorage.getItem(ne[s].ls);n&&(e[s]=n)}this.titles=e,fetch("/api/settings").then(s=>s.json()).then(s=>{const n={...this.titles};for(const o of we){const a=s[ne[o].setting];a&&(n[o]=a,localStorage.setItem(ne[o].ls,a))}this.titles=n}).catch(()=>{}),this.loadOrder(),window.addEventListener("focus",this.refreshOrder),document.addEventListener("visibilitychange",this.refreshOrder),document.addEventListener("keydown",this.cancelReorderKey),this.loadIdeasCount(),this.loadCounts(),this.unsubCounts=f.subscribe((s,n)=>{s.goals!==n.goals&&(this.goalsCount=s.goals.filter(o=>o.status==="active").length),s.commitments!==n.commitments&&(this.weekCount=s.commitments.filter(o=>!o.done).length)}),window.addEventListener("focus",this.onCountsStale),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("mana-ideas-count",this.onIdeasCount),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("dragstart",this.onDocDragStart),document.addEventListener("dragend",this.onDocDragEnd),document.addEventListener("mana-agent-follow",this.onAgentFollow);const i=ha();i&&this.follow(i),document.addEventListener("mana-planner-note",this.onPlannerNote),document.addEventListener("keydown",ma)}disconnectedCallback(){super.disconnectedCallback(),this.cancelTabReorder(),window.removeEventListener("focus",this.refreshOrder),document.removeEventListener("visibilitychange",this.refreshOrder),document.removeEventListener("keydown",this.cancelReorderKey),this.unsubCounts?.(),window.removeEventListener("focus",this.onCountsStale),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("mana-ideas-count",this.onIdeasCount),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("dragstart",this.onDocDragStart),document.removeEventListener("dragend",this.onDocDragEnd),document.removeEventListener("mana-agent-follow",this.onAgentFollow),document.removeEventListener("mana-planner-note",this.onPlannerNote),document.removeEventListener("keydown",ma),this.noteTimer&&clearTimeout(this.noteTimer)}showNote(t,e){this.note=t,this.noteKind=e,this.noteTimer&&clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>{this.note=""},Pf)}async follow(t){const e=document.activeElement,i=!!e&&this.contains(e)&&/^(INPUT|TEXTAREA)$/.test(e.tagName);if(!t.stay&&!i&&!this.editing&&this.active!==t.view){this.active=t.view;try{localStorage.setItem(ms,t.view)}catch{}}this.showNote(t.note,"agent");const s=f.getState();!i&&t.view==="week"&&t.week&&t.week!==s.currentWeek&&await s.setWeek(t.week).catch(()=>{}),await this.updateComplete;const n={action:"refresh",week:f.getState().currentWeek??t.week,changed:t.changed,added:t.added,removed:t.removed};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}async loadOrder(){try{const t=await fetch("/api/me");if(!t.ok)return;const e=await t.json();this.orderSetting=`user:${e.login}:planner.tab_order`,this.order=ga(localStorage.getItem(this.orderSetting)),await this.refreshOrder()}catch{}}async moveTab(t,e,i){if(!this.orderSetting||this.savingOrder||t===e)return;const s=[...this.order],n=this.order.filter(o=>o!==t);if(n.splice(n.indexOf(e)+(i?1:0),0,t),!n.every((o,a)=>o===s[a])){this.orderRevision+=1,this.order=n,this.orderError="",this.savingOrder=!0;try{await f.getState().setSetting(this.orderSetting,JSON.stringify(n));try{localStorage.setItem(this.orderSetting,JSON.stringify(n))}catch{}}catch{this.order=s,this.orderError="Tab order could not be saved. Try again."}finally{this.savingOrder=!1}}}onTabPointerDown(t,e){this.editing||this.savingOrder||!this.orderSetting||t.pointerType==="mouse"&&t.button!==0||(this.tabPress={key:e,x:t.clientX,y:t.clientY,pointerId:t.pointerId},window.addEventListener("pointermove",this.onTabPointerMove,{passive:!1}),window.addEventListener("pointerup",this.onTabPointerUp),window.addEventListener("pointercancel",this.cancelTabReorder))}onTabOrderKey(t,e){if(!t.altKey||!["ArrowLeft","ArrowRight"].includes(t.key))return;t.preventDefault();const i=this.order.indexOf(e),s=this.order[i+(t.key==="ArrowLeft"?-1:1)];s&&this.moveTab(e,s,t.key==="ArrowRight")}async loadCounts(){try{const[t,e]=await Promise.all([fetch("/api/goals").then(i=>i.json()),fetch("/api/week").then(i=>i.json())]);this.goalsCount=t.goals?.filter(i=>i.status==="active").length??0,this.weekCount=e.commitments?.filter(i=>!i.done).length??0}catch{}}async loadIdeasCount(){try{const e=await(await fetch("/api/ideas")).json();this.ideasCount=e.ideas?.filter(i=>!i.hidden).length??0,e.ideas&&Vl(e.ideas)}catch{}}select(t){if(!(this.editing||this.ignoreTabClick)){this.active=t;try{localStorage.setItem(ms,t)}catch{}this.loadCounts()}}isDropTarget(t){return this.dragKind==="idea"?t==="week":this.dragKind==="commit"?t==="ideas":!1}onTabDragOver(t,e){this.isDropTarget(e)&&(t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this.dragOverTab=e)}onTabDragLeave(t){this.dragOverTab===t&&(this.dragOverTab=null)}async onTabDrop(t,e){if(!this.isDropTarget(e))return;t.preventDefault();const i=this.dragKind;this.dragKind=null,this.dragOverTab=null;const s=(t.dataTransfer?.getData("text/plain")||"").trim();if(s){if(i==="commit"){const n=Number(t.dataTransfer?.getData("text/x-commit-id"));n&&await Dl(n,s)}else if(i==="idea"){const n=Number(t.dataTransfer?.getData("text/x-idea-id"));if(!n||!await Oo(n,s))return;this.active="week";try{localStorage.setItem(ms,"week")}catch{}}}}startRename(t,e){t.stopPropagation(),!(this.ignoreTabClick||this.reorderKey)&&(this.active=e,this.editing=e)}commitRename(t,e){const i=e.trim()||ne[t].def;this.editing=null,this.titles={...this.titles,[t]:i},localStorage.setItem(ne[t].ls,i),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[ne[t].setting]:i})})}onRenameKey(t,e){t.key==="Enter"?(t.preventDefault(),this.commitRename(e,t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.editing=null)}renderTab(t){if(this.editing===t)return r`<input
        class="text-[15px] font-normal text-ink leading-none bg-transparent border-b-2 border-ink outline-none px-0.5 py-3"
        style="min-width:4ch;width:${this.titles[t].length+1}ch;letter-spacing:-0.01em;"
        .value=${this.titles[t]}
        autofocus
        @click=${o=>o.stopPropagation()}
        @keydown=${o=>this.onRenameKey(o,t)}
        @blur=${o=>this.commitRename(t,o.target.value)}
      />`;const e=this.active===t,i=this.isDropTarget(t),n=this.dragOverTab===t?"border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);":i?"border-color:color-mix(in srgb, var(--accent) 45%, transparent);":e?"border-color:var(--ink);":"border-color:transparent;";return r`<button
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
            class="tab-count text-[11px] font-normal text-muted px-1.5 py-0.5 rounded-full leading-none"
            style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
            >${this.countFor(t)}</span
          >`:c}
    </button>`}countFor(t){return t==="ideas"?this.ideasCount:t==="goals"?this.goalsCount:this.weekCount}render(){return r`
      <div class="planner-panel flex-1 flex flex-col ${this.active==="goals"?"pb-16":""}">
        <div class="planner-header ${this.active==="week"?"planner-week-header":""} flex items-center gap-3 border-b border-line px-4">
          <div class="planner-tabs flex-1 flex items-center gap-5 min-w-0 -mb-px overflow-x-auto">
            ${kf(this.order,t=>t,t=>this.renderTab(t))}
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
              ><span class="inline-flex w-3.5 h-3.5" aria-hidden="true">${W(Zn)}</span>New goal</button>`:c}
        </div>
        ${this.orderError?r`<div role="alert" class="px-4 pt-3 text-sm text-red-500">${this.orderError}</div>`:c}
        <div class="planner-panel-body flex-1 px-4 py-3">
          ${this.active==="week"?r`<week-section tabbed .showMeetings=${this.showMeetings}></week-section>`:c}
          ${this.active==="ideas"?r`<ideas-section tabbed></ideas-section>`:c}
          ${this.active==="goals"?r`<goals-section tabbed></goals-section>`:c}
        </div>
        ${this.active==="week"?r`<week-progress></week-progress>`:c}
        ${this.active==="week"||this.active==="goals"?r`<button
              type="button"
              class="goals-fab goals-fab--${this.active}"
              aria-label=${this.active==="week"?"Add task":"Add key result"}
              @click=${()=>di({kind:this.active==="week"?"new-commit":"new-kr"})}
            ><span aria-hidden="true">${W(Zn)}</span></button>`:c}
      </div>
    `}};dt([b({type:Boolean})],rt.prototype,"showMeetings",2);dt([d()],rt.prototype,"order",2);dt([d()],rt.prototype,"reorderKey",2);dt([d()],rt.prototype,"reorderOver",2);dt([d()],rt.prototype,"reorderAfter",2);dt([d()],rt.prototype,"orderError",2);dt([d()],rt.prototype,"active",2);dt([d()],rt.prototype,"titles",2);dt([d()],rt.prototype,"ideasCount",2);dt([d()],rt.prototype,"goalsCount",2);dt([d()],rt.prototype,"weekCount",2);dt([d()],rt.prototype,"editing",2);dt([d()],rt.prototype,"dragKind",2);dt([d()],rt.prototype,"dragOverTab",2);dt([d()],rt.prototype,"note",2);dt([d()],rt.prototype,"noteKind",2);rt=dt([w("planner-tabs")],rt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yl="important",Af=" !"+Yl,Mf=Ki(class extends Gs{constructor(t){if(super(t),t.type!==bo.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const n=e[s];if(n!=null){this.ft.add(s);const o=typeof n=="string"&&n.endsWith(Af);s.includes("-")||o?i.setProperty(s,o?n.slice(0,-11):n,o?Yl:""):i[s]=n}}return vo}}),Wt=100,If=76,_f=600,U=12,Pt=8,qo=(t,e,i)=>({left:t.x,top:t.y,right:t.x+e,bottom:t.y+i});function Ko(t,e,i=0){return t.left<e.right+i&&t.right>e.left-i&&t.top<e.bottom+i&&t.bottom>e.top-i}const Of=2*Wt,Lf=t=>t.bottom-t.top<=Of,Gt=(t,e,i)=>Math.max(e,Math.min(i,t));function ni(t){return t.width<_f?If:Wt}const Ce=t=>t.height-(t.insetBottom??0);function ba(t,e,i=Wt){const s=t.width-U-i;let n=Ce(t)-U-i;for(let o=0;o<8;o++){const a=e.find(l=>Ko(qo({x:s,y:n},i,i),l,Pt));if(!a)break;n=a.top-Pt-i}return{x:s,y:Gt(n,U,Ce(t)-U-i)}}function fo(t,e,i=Wt){return Ql(t,e,{width:i,height:i})}function Ql(t,e,i){return{x:Gt(t.x,U,e.width-U-i.width),y:Gt(t.y,U,Ce(e)-U-i.height)}}const Jl=(t,e)=>({w:Math.max(0,t.width-2*U-e),h:Math.max(0,Ce(t)-2*U-e)});function Rf(t,e,i=Wt){const{w:s,h:n}=Jl(e,i);return{xr:s?Gt((t.x-U)/s,0,1):1,yr:n?Gt((t.y-U)/n,0,1):1}}function Nf(t,e,i=Wt){const{w:s,h:n}=Jl(e,i);return{x:Math.round(U+Gt(t.xr,0,1)*s),y:Math.round(U+Gt(t.yr,0,1)*n)}}const jf=32;function Ff(t,e){return Math.hypot(t.x-e.x,t.y-e.y)<=jf}function va(t,e,i,s=Wt){let{x:n,y:o}=fo(t,e,s);for(let a=0;a<8;a++){const l=i.find(u=>Ko(qo({x:n,y:o},s,s),u,Pt));if(!l)break;const h=l.top-Pt-s;o=h>=U?h:l.bottom+Pt}return fo({x:n,y:o},e,s)}function ya(t,e,i=Wt){const s=(t.top+t.bottom)/2-i/2;if(e.width-t.right>=i+2*Pt)return{x:t.right+Pt,y:Gt(s,U,Ce(e)-U-i),side:"right"};const n=Gt(t.right-i-Pt,U,e.width-U-i);return t.bottom+Pt+i<=Ce(e)-U?{x:n,y:t.bottom+Pt,side:"below"}:{x:n,y:Math.max(U,t.top-Pt-i),side:"above"}}function On(t){return Math.min(340,t.width-2*U)}function Uf(t,e,i,s,n=Wt){const o=t.x+n/2<e.width/2,a=Gt(o?t.x:t.x+n-i.width,U,e.width-U-i.width),l=t.y-Pt-i.height,h=t.y+n+Pt,u=l>=U,p=h+i.height<=Ce(e)-U,m=[u?l:null,p?h:null].filter(y=>y!==null),v=m.find(y=>!s||!Ko(qo({x:a,y},i.width,i.height),s,4))??m[0]??Gt(l,U,Ce(e)-U-i.height);return{x:a,y:v}}function xa(t){return`${t.kind==="commitment"?"commit":t.kind}:${t.id}`}const Bf=`
.mc-avatar {
  position: fixed; z-index: 60; width: var(--mc-size, ${Wt}px); height: var(--mc-size, ${Wt}px); padding: 0; border: 0; border-radius: 12px;
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
`;function Hf(t=document){if(t.getElementById("mana-companion-styles"))return;const e=t.createElement("style");e.id="mana-companion-styles",e.textContent=Bf,t.head.appendChild(e)}const zf=["hop","nod","tilt","squint","ruffle","happy","surprised","sleepy","proud","confused","sad","fly","come"],qf=["happy","calm","surprised","sleepy","proud","confused","sad"],ae="Can't reach Mana right now.";function Kf(t){let e="message";const i=[];for(const n of t.split(`
`))!n||n.startsWith(":")||(n.startsWith("event:")?e=n.slice(6).trim():n.startsWith("data:")&&i.push(n.slice(5).trimStart()));if(!i.length)return null;let s;try{s=JSON.parse(i.join(`
`))}catch{return null}switch(e){case"text":return{type:"text",text:String(s.text??"")};case"action":return{type:"action",action:s};case"draft":return typeof s.id=="string"&&Array.isArray(s.lines)?{type:"draft",draft:s}:null;case"notes":return typeof s.query=="string"&&Array.isArray(s.hits)&&s.hits.length?{type:"notes",found:s}:null;case"confirm":return typeof s.id=="string"&&typeof s.noteFile=="string"&&(s.kind==="publish"||s.kind==="unpublish")?{type:"confirm",confirm:s}:null;case"point":return s.ref?{type:"point",ref:s.ref,title:String(s.title??"")}:null;case"mood":return qf.includes(s.mood)?{type:"mood",mood:s.mood}:null;case"move":return zf.includes(s.move)?{type:"move",move:s.move}:null;case"notice":return{type:"notice",text:String(s.text??"")};case"error":return{type:"error",error:String(s.error??ae)};case"done":return{type:"done",firstTokenMs:typeof s.firstTokenMs=="number"?s.firstTokenMs:null,ms:Number(s.ms)||0};default:return null}}async function*Wf(t,e){let i;try{i=await fetch("/api/companion/turn",{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify(t),signal:e})}catch{e?.aborted||(yield{type:"error",error:ae});return}if(!i.ok||!i.body){yield{type:"error",error:ae};return}const s=i.body.getReader(),n=new TextDecoder;let o="";try{for(;;){const{done:a,value:l}=await s.read();if(a)break;o+=n.decode(l,{stream:!0});for(let h;(h=o.indexOf(`

`))!==-1;){const u=Kf(o.slice(0,h));o=o.slice(h+2),u&&(yield u)}}}catch{e?.aborted||(yield{type:"error",error:ae})}finally{try{s.releaseLock()}catch{}}}async function oe(t,e){try{const i=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});return i.ok?await i.json():null}catch{return null}}function Gf(t,e,i){const s=document.createElement("div");s.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(e).fontFamily,s.style.width=`${Math.min(200,window.innerWidth-16)}px`,s.setAttribute("role","menu"),s.setAttribute("aria-label","Owl options"),document.body.appendChild(s);const n=()=>{document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",a,!0),window.removeEventListener("resize",n),xt(c,s),s.remove()},o=h=>{h.composedPath().includes(s)||n()},a=h=>{(h.key==="Escape"||h.key==="Tab")&&(h.preventDefault(),h.stopPropagation(),n())};xt(r`${i.map(h=>r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    @click=${()=>{n(),h.run()}}>${h.label}</button>`)}`,s);const l=s.getBoundingClientRect();s.style.left=`${Math.max(8,Math.min(t.x,window.innerWidth-l.width-8))}px`,s.style.top=`${Math.max(8,Math.min(t.y,window.innerHeight-l.height-8))}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",a,!0),window.addEventListener("resize",n),s.querySelector("button")?.focus({preventScroll:!0})}const Vf=200,Yf=[{names:["goals"],pane:"goals",tab:"goals",label:"Goals"},{names:["weekly","this week","week"],pane:"goals",tab:"week",label:"Weekly"},{names:["parked","parked ideas","ideas"],pane:"goals",tab:"ideas",label:"Parked"},{names:["shopping","shopping list","grocery","grocery list","groceries"],pane:"grocery",label:"Shopping"},{names:["finance","finances","money","budget"],pane:"finance",label:"Finance"},{names:["circles","circle","people"],pane:"circle",label:"Circles"},{names:["learn","learning"],pane:"learn",label:"Learn"},{names:["been to","travel","travels"],pane:"been-to",label:"Been to"},{names:["projects","my projects","project list","apps","app catalogue"],pane:"office",label:"Projects",ownerOnly:!0},{names:["publisher"],pane:"publisher",label:"Publisher",ownerOnly:!0},{names:["the office","office","office floor","the writers","newsroom","the newsroom","writers room"],pane:"newsroom",label:"The office",ownerOnly:!0},{names:["notes","note"],pane:"canvas",label:"Notes"},{names:["members","guests"],pane:"members",label:"Members",ownerOnly:!0},{names:["notifications","notification","notifs","bell"],pane:"notify",label:"Notifications"},{names:["tools"],pane:"tools",label:"Tools"}],Xl=new Map(Yf.flatMap(t=>t.names.map(e=>[e,t]))),Qf=[...Xl.keys()].sort((t,e)=>e.length-t.length).map(t=>t.replace(/ /g,"\\s+")).join("|"),Jf=[{words:["come here","come over","come","move to my cursor"],move:"come",note:"Came over."},{words:["go to sleep","sleep"],move:"sleepy",note:"Got sleepy."},{words:["hop"],move:"hop",note:"Hopped."},{words:["nod"],move:"nod",note:"Nodded."},{words:["fly"],move:"fly",note:"Flew."}],Zl=new Map(Jf.flatMap(t=>t.words.map(e=>[e,t]))),Xf=[...Zl.keys()].sort((t,e)=>e.length-t.length).map(t=>t.replace(/ /g,"\\s+")).join("|"),tc=String.raw`(?:(?:can|could|would|will) you\s+)?(?:please\s+)?`,ec=String.raw`(?:\s+for me)?(?:\s+please)?$`,Zf=new RegExp(String.raw`^${tc}(?:open(?: up)?|show(?: me)?|go to|switch to|take me to|bring up|navigate to)\s+(?:(?:my|the)\s+)?(${Qf})(?:\s+(?:tool|app|pane|tab))?${ec}`,"i"),tg=new RegExp(String.raw`^${tc}(${Xf})${ec}`,"i"),Ss=String.raw`(?:(?:can|could|would|will) you[,\s]+)?(?:please[,\s]+)?`,go=String.raw`(?:\s*[:,]\s*|\s+)`,eg=[{re:new RegExp(String.raw`^${Ss}(?:add(?:\s+weekly)?\s+task|new\s+task|add\s+commitment)${go}(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${Ss}task\s*:\s*(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${Ss}(?:park|add\s+parked|add\s+idea|add\s+to\s+parked)${go}(.+)$`,"i"),target:"idea"}],ig=new RegExp(String.raw`^${Ss}add${go}(.+)$`,"i"),sg=/^(?:this|that|it|these|those|them)(?:\s+(?:one|ones|task|tasks|item|items|idea|ideas|thing|things|row))?(?:\s+(?:for now|for later|too|as well|please))?$/i,ng=/(?:\s(?:to|into|in|on|onto|for)\s+(?:(?:the|my|our|this|next|last|that)\s+)*(?:week|weekly|parked|ideas?|shopping(?:\s+list)?|grocer(?:y|ies)(?:\s+list)?|to[-\s]?buy(?:\s+list)?|list|goals?|tasks?|planner|pantry|backlog)|\s(?:next|last)\s+week)$|^to\s/i,og=/^(?:the|this|that|these|those|my|our|it)\b|\b(?:one|ones|task|tasks|item|items)$/i,rg=/^(?:(?:a|an|new|weekly|my|the)\s+)*(?:tasks?|commitments?|ideas?|parked|notes?|goals?|reminders?|key results?)\b/i,wa=t=>t.toLowerCase().replace(/[^\p{L}\p{N}\s]+/gu," ").replace(/\s+/g," ").trim();function ka(t,e,i){const s=t.trim().replace(/[\s.!,;:]+$/,"");if(!s||s.length>Vf||sg.test(s)||ng.test(s)||e==="shopping"&&rg.test(s)||e!=="task"&&og.test(s))return null;if(e==="idea"){const n=` ${wa(s)} `;if((i.openTasks??[]).some(o=>{const a=wa(o);return!!a&&(` ${a} `.includes(n)||n.includes(` ${a} `))}))return null}return s}function ag(t){return t.replace(/,/g," ").replace(/\s+/g," ").trim().replace(/[.!?]+$/,"").trim()}function lg(t,e){const i=ag(t),s=Zf.exec(i),n=s?Xl.get(s[1].toLowerCase().replace(/\s+/g," ")):void 0;if(n&&(!n.ownerOnly||e.owner))return{kind:"nav",rule:`nav:${n.pane}${n.tab?`:${n.tab}`:""}`,note:`Opened ${n.label}.`,pane:n.pane,tab:n.tab??null,label:n.label};const o=tg.exec(i),a=o?Zl.get(o[1].toLowerCase().replace(/\s+/g," ")):void 0;if(a)return{kind:"move",rule:`move:${a.move}`,note:a.note,move:a.move};const l=t.replace(/\s+/g," ").trim();if(l.includes("?"))return null;for(const p of eg){const m=p.re.exec(l);if(!m)continue;const g=ka(m[1],p.target,e);return g?{kind:"add",rule:`add:${p.target}`,target:p.target,text:g}:null}const h=e.pane==="grocery"?ig.exec(l):null,u=h?ka(h[1],"shopping",e):null;return u?{kind:"add",rule:"add:shopping",target:"shopping",text:u}:null}function cg(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()));e.setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));const i=Math.ceil(((e.getTime()-Date.UTC(e.getUTCFullYear(),0,1))/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(i).padStart(2,"0")}`}function dg(t,e,i={}){if(t==="task"){const n=i.week&&i.current&&i.week!==i.current?`week ${Number(i.week.split("-W")[1])}${i.week.slice(0,4)===i.current.slice(0,4)?"":` of ${i.week.slice(0,4)}`}`:null;return n?{shown:`Added to ${n}: ${e}`,did:`Added task to ${n}: ${e}`}:{shown:`Added: ${e}`,did:`Added task: ${e}`}}const s=t==="idea"?"Parked":i.list==="buy"?"To buy":"Shopping";return{shown:`Added to ${s}: ${e}`,did:`Added to ${s}: ${e}`}}const hg=["idle","listening","curious","thinking","happy","surprised","sleepy","sleeping","waking","flying","proud","confused","sad"],$a={happy:6800,surprised:4800,waking:6200,flying:8600,proud:5800,confused:5e3,sad:7200},ug=2e4,pg=3e4,mg=1e4,fg=2e4;function Ws(t){return typeof t=="string"&&hg.includes(t)}function gg(t){return t>=23||t<5}function bg(t,e=!1){return t>=(e?fg:pg)?"sleeping":t>=(e?mg:ug)?"sleepy":"idle"}function vg(t){return Ws(t.override)?t.override:t.dictation==="listening"?"listening":t.reaction==="surprised"?"surprised":t.sending||t.dictation==="writing"?"thinking":t.reaction?t.reaction:t.curious?"curious":t.open?"listening":t.rest}var yg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,Xe=(t,e,i,s)=>{for(var n=s>1?void 0:s?xg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&yg(e,i,n),n};let he=class extends It{constructor(){super(...arguments),this.state="idle",this.trigger=0,this.ready=!1,this.generation=0,this.canvases=0,this.restarts=0,this.startedAt=0,this.onLost=()=>{if(this.ready=!1,Date.now()-this.startedAt>6e4&&(this.restarts=0),this.restarts>=3)return;const t=[1e3,5e3,3e4][this.restarts++];clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{this.canvases++,this.updateComplete.then(()=>this.start())},t)}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.start()}firstUpdated(){this.start()}updated(t){(t.has("state")||t.has("trigger"))&&this.renderer?.setState(Ws(this.state)?this.state:"idle",{restart:t.has("trigger")})}disconnectedCallback(){super.disconnectedCallback(),this.generation++,clearTimeout(this.preloadTimer),clearTimeout(this.restartTimer),this.abort?.abort(),this.renderer?.destroy(),this.renderer=void 0,this.ready=!1}async start(){const t=++this.generation;this.abort?.abort(),this.abort=new AbortController,this.renderer?.destroy(),this.renderer=void 0;try{const{createOwlRenderer:e}=await Lt(async()=>{const{createOwlRenderer:s}=await import("./owl-renderer-DPEf0jy5.js");return{createOwlRenderer:s}},[]);if(t!==this.generation||!this.isConnected)return;const i=await e(this.art,this.effects,{signal:this.abort.signal,onUnavailable:()=>{this.ready=!1},onLost:this.onLost});if(t!==this.generation||!this.isConnected){i.destroy();return}this.renderer=i,await i.setState(Ws(this.state)?this.state:"idle"),this.ready=!0,this.startedAt=Date.now(),this.preloadTimer=setTimeout(()=>this.preload(),6e3)}catch(e){e.name!=="AbortError"&&(this.ready=!1)}}hold(t,e=!1){this.renderer?.hold(t,e)}canFly(){return this.renderer?.canFly()??!1}airborne(){return this.renderer?.airborne()??!1}carry(t,e){this.renderer?.carry(t,e)}preload(){this.renderer?.preload()}lookAt(t){this.renderer?.lookAt(t)}gesture(t,e=!1){return this.renderer?.gesture(t,e)??!1}talk(t){this.renderer?.talk(t)}render(){return r`<div class="sprite" data-renderer=${this.ready?"animated":"static"} aria-hidden="true">
      <img src=${new URL("/assets/original-DQyfsRdb.webp",import.meta.url).href} alt="" draggable="false" ?hidden=${this.ready}>
      ${qa(this.canvases,r`<canvas class="art" width="256" height="256" ?hidden=${!this.ready}></canvas>
      <canvas class="effects" width="256" height="256" ?hidden=${!this.ready}></canvas>`)}
    </div>`}};he.styles=Rt`
    :host{display:block;width:100%;height:100%;pointer-events:none;color:inherit}
    .sprite{position:relative;width:100%;height:100%}
    img,canvas{display:block;position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;user-select:none;-webkit-user-drag:none}
    canvas{inset:auto;left:-75%;top:-100%;width:250%;height:225%}
    img{object-fit:contain} [hidden]{display:none!important}
  `;Xe([b()],he.prototype,"state",2);Xe([b({type:Number})],he.prototype,"trigger",2);Xe([d()],he.prototype,"ready",2);Xe([V("canvas.art")],he.prototype,"art",2);Xe([V("canvas.effects")],he.prototype,"effects",2);Xe([d()],he.prototype,"canvases",2);he=Xe([w("mana-owl")],he);var wg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,L=(t,e,i,s)=>{for(var n=s>1?void 0:s?kg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&wg(e,i,n),n};const ic=1e4,Ln=3e4,$g=9e4,Sg=6,Tg=1500,Sa=450,Ta=320,Cg=900,Eg=.45,Dg=450,Pg=4,Ag=1200,Mg=600,Ig=1600,_g=2e3,Rn=2400,Og=90,Lg=700,Rg=700,Ca=[450,1100],Ng=1300,jg=8e3,Fg=1e4,Nn=24,Ug=1100,Bg=6e3,Ea=45,Da=1200,Hg=260,zg=110,Pa=5*6e4,qg=2*6e4,Kg=150,Wg=4e3,jn=[5e3,9e3],Gg=1200,Vg=25e3,Yg=8e3,Qg=["hop","nod","tilt","squint","ruffle"],Jg=4*6e4,Aa=["squint","hop","nod"],Fn=[6e4,12e4],Xg=2e4,Zg=4e4,tb=["preen","look","shift","stretch"],eb=["yawn","preen","yawn","shift"],ib="p, li, h1, h2, h3, h4, h5, h6, td, th, dt, dd, blockquote, pre, label, figcaption, [contenteditable='true']",sb=15e3,nb=250,Ma=148,ob=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,rb=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,sc="slmai.cockpit.plannerTab",nc="slmai.companion.spot";let I=class extends T{constructor(){super(...arguments),this.owner=!1,this.avatar="/office-avatars/mana.svg",this.animationState="auto",this.reaction=null,this.reactionTrigger=0,this.rest="idle",this.lastActivity=Date.now(),this.lastTouched=Date.now(),this.nextFidget=0,this.lastFidget=null,this.restTimer=null,this.reactionTimer=null,this.doneTimer=null,this.open=!1,this.sending=!1,this.mine="",this.spoken=!1,this.typing=!1,this.owlHidden=Nl(),this.reviewTake="",this.historyOpen=!1,this.exchanges=[],this.reply="",this.lines=[],this.slow=!1,this.status="Thinking",this.pointing=null,this.pos={x:-100,y:-100},this.bubble={x:-1e3,y:-1e3},this.justActed=!1,this.spots=ab(),this.pane=f.getState().rightPaneMode,this.spot=Ua(this.spots,this.pane),this.unsubscribe=null,this.dragging=!1,this.visiting=null,this.sitting=null,this.focusView=null,this.returnSpot=null,this.typingTimer=null,this.lastConversationGesture=0,this.readingReply=!1,this.replyGestures=0,this.shown=0,this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.talking=!1,this.highlight=null,this.touched=null,this.abort=null,this.slowTimer=null,this.idleTimer=null,this.chipTimer=null,this.dictation="off",this.micOpening=!1,this.takeGeneration=0,this.sttAbort=null,this.recorder=new kl,this.takeTimer=null,this.typeArmedUntil=0,this.frame=0,this.drag=null,this.lastTap=null,this.tapTimer=null,this.pointerType="mouse",this.stroke=null,this.lastPetBuzz=0,this.glanceTimer=null,this.dragged=!1,this.visitTimer=null,this.coming=null,this.comeTimer=null,this.cursor=null,this.trip=null,this.flyNext=!1,this.arrivedAt=0,this.watching=null,this.boredUntil=0,this.stareTimer=null,this.lingerTimer=null,this.lastTilt=0,this.lastGreeting=0,this.lastGreetingKind=null,this.lastReaction=null,this.onWatch=t=>{if(t.pointerType==="mouse"&&(this.cursor={x:t.clientX,y:t.clientY,at:Date.now()}),t.pointerType==="touch"||!this.owner||!this.owl||this.rest!=="idle"||this.typingTimer||this.sending)return;const e=Date.now();if(!(!this.dragging&&!this.pointing&&Math.hypot(t.clientX-(this.pos.x+this.size/2),t.clientY-(this.pos.y+this.size/2))<=Kg)){this.stopWatching();return}e<this.boredUntil||(this.watching===null&&(this.watching=e,this.stareTimer=setTimeout(this.loseInterest,Wg)),this.owl.lookAt({x:t.clientX,y:t.clientY}),this.lingerTimer&&clearTimeout(this.lingerTimer),this.lingerTimer=setTimeout(this.onLinger,Gg))},this.loseInterest=()=>{this.stopWatching(),this.boredUntil=Date.now()+jn[0]+Math.random()*(jn[1]-jn[0])},this.onLinger=()=>{this.lingerTimer=null,!(this.watching===null||Date.now()-this.lastTilt<Vg||Math.random()>.6)&&this.owl?.gesture("tilt")&&(this.lastTilt=Date.now())},this.onPointerOut=t=>{t.relatedTarget||this.stopWatching()},this.onHover=t=>{this.onActivity(),this.owl?.preload();const e=document.activeElement===this.input&&!!this.input?.value.trim();if(t.pointerType==="touch"||this.dragging||this.reaction||this.sending||this.typingTimer||e||this.rest!=="idle")return;const i=Date.now();if(i-this.lastGreeting<Yg)return;const s=Qg.filter(o=>o!==this.lastGreetingKind),n=s[Math.floor(Math.random()*s.length)];this.owl?.gesture(n)&&(this.lastGreeting=i,this.lastGreetingKind=n)},this.onActivity=t=>{if(t&&!t.composedPath().includes(this)||(this.lastActivity=this.lastTouched=Date.now(),this.rest==="idle"))return;const e=this.rest==="sleeping";this.rest="idle",e&&this.playAnimation("waking")},this.updateRest=()=>{if(!this.owner)return;const t=Date.now(),e=gg(new Date(t).getHours());if(this.open||this.sending||this.dictation!=="off"||this.dragging){this.lastActivity=t,this.rest="idle",this.maybeFidget(t,e);return}this.nextFidget=0,this.rest=bg(t-this.lastActivity,e),this.rest!=="idle"&&this.stopWatching()},this.onResize=()=>{this.obstacleCache=null,this.schedulePlace()},this.obstacleCache=null,this.schedulePlace=()=>{this.frame||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.place()}))},this.onStore=t=>{if(t.rightPaneMode===this.pane)return;this.pane=t.rightPaneMode;const e=Ua(this.spots,this.pane);if(this.sitting){this.returnSpot=e;return}this.spot=e,this.flyNext=!0,this.schedulePlace()},this.onPageHide=()=>{this.cancelDictation()},this.onVisibility=()=>{document.hidden&&this.onPageHide()},this.toggle=t=>{if(this.dragged){this.dragged=!1;return}const e=performance.now(),i=this.lastTap;if(this.lastTap=null,i&&t.detail&&e-i.at<Ta&&Math.hypot(t.clientX-i.x,t.clientY-i.y)<24){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.onActivity(),!bt()&&this.owl?.gesture("hop",!0)&&this.pointerType!=="mouse"&&oi(10);return}if(this.lastTap={at:e,x:t.clientX,y:t.clientY},this.tapTimer&&clearTimeout(this.tapTimer),!t.detail){this.tapOwl();return}this.tapTimer=setTimeout(()=>{this.tapTimer=null,this.lastTap=null,this.tapOwl()},Ta)},this.onVisibilityChange=t=>{this.owlHidden=!!t.detail?.hidden,this.owlHidden&&this.collapse()},this.typeToMana=()=>{this.cancelDictation(),this.typing=!0,this.historyOpen=!1,this.show(),this.updateComplete.then(()=>{this.input?.focus(),this.grow()})},this.onOutside=t=>{if(t.composedPath().includes(this))return;const e=t.target?.closest?.("[data-row-key]");e?.dataset.rowKey&&(this.touched={key:e.dataset.rowKey,text:Un(e,200),at:Date.now(),...Number(e.dataset.manaThread)>0?{thread:Number(e.dataset.manaThread)}:{}}),(this.open||this.tapTimer)&&this.collapse(!1)},this.onSelection=()=>{const t=document.getSelection();if(!t||t.isCollapsed||!t.rangeCount)return;const e=t.anchorNode,i=e instanceof Element?e:e?.parentElement??null;if(!i||this.contains(i)||this.sitting&&!this.sitting.el?.contains(i))return;const s=t.toString().replace(/\s+/g," ").trim().slice(0,1e3);s.length<2||s===this.highlight?.text||(this.highlight={key:i.closest("[data-row-key]")?.dataset.rowKey??null,text:s,at:Date.now()})},this.onKey=t=>{const e=f.getState().settings,i=ye(e?.[Ms])??ye(As);if(!t.repeat&&Jn(i,t)){t.preventDefault(),this.owlHidden&&$s(!1),this.toggleDictation();return}const s=ye(e?.[vl])??ye(bl);if(!t.repeat&&Jn(s,t)){t.preventDefault(),this.owlHidden&&$s(!1),this.openFromKeyboard();return}if(t.key==="Escape"&&(this.dictation!=="off"||this.micOpening)){t.preventDefault(),this.cancelDictation();return}if(t.key==="Escape"&&(this.open||this.pointing||this.sitting||this.highlight)){t.preventDefault(),this.collapse();return}!this.open&&Date.now()<this.typeArmedUntil&&t.key.length===1&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&!Fa(document.activeElement)&&(t.preventDefault(),this.typeArmedUntil=0,this.typeToMana(),this.updateComplete.then(()=>{this.input&&(this.input.value+=t.key,this.grow())}))},this.onInputKey=t=>{t.key==="Enter"&&!t.shiftKey&&!t.isComposing&&(t.preventDefault(),this.send(this.input?.value??""))},this.onInput=()=>{if(this.touch(),this.grow(),!this.input?.value.trim()||this.sending||this.dictation!=="off"){this.stopConversation();return}this.stopWatching(),this.lookAtInput(),this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.typingTimer=null,this.open&&this.input?.value.trim()&&document.activeElement===this.input&&!this.sending&&this.conversationGesture("tilt")},Ug)},this.revealStep=t=>{this.revealFrame=0;const e=this.reply,i=this.shown;if(i>=e.length){this.revealAt=0,this.setTalking(!1);return}const s=this.revealAt?Math.min(100,t-this.revealAt):16;this.revealAt=t;const n=e.length-i,o=n>Ea*Da/1e3;if(t<this.pauseUntil&&!o){this.setTalking(!1),this.revealFrame=requestAnimationFrame(this.revealStep);return}this.revealCarry+=Math.max(Ea,n*1e3/Da)*s/1e3;let a=i;for(;this.revealCarry>=1&&a<e.length;){this.revealCarry--;const l=e[a++],h=!/\S/.test(e[a]??" ");if(!(o||!h||!/[.!?,;:]/.test(l))){this.pauseUntil=t+(/[.!?]/.test(l)?Hg:zg),this.revealCarry=0;break}}this.shown=a,this.setTalking(a<e.length&&t>=this.pauseUntil),this.sentenceBeat(e.slice(0,i),e.slice(0,a)),this.revealFrame=requestAnimationFrame(this.revealStep)},this.grow=()=>{const t=this.input;t&&(t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,Ma)}px`,t.style.overflowY=t.scrollHeight>Ma?"auto":"hidden",this.schedulePlace())},this.touch=()=>{this.onActivity(),this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>{if(this.sending||this.dictation!=="off"||document.activeElement===this.input&&this.input?.value)return this.touch();this.collapse()},$g)},this.onSubmit=t=>{t.preventDefault(),this.send(this.input?.value??"")},this.onPointerDown=t=>{if(this.pointerType=t.pointerType,t.button!==0)return;const e=!this.pointing&&!this.sending,i=t.pointerType!=="mouse"&&!bt()&&this.onHead(t);(e||i)&&this.startDrag(t,!0,e,i)},this.onBubbleDown=t=>{this.touch(),!(t.button!==0||this.pointing||this.sending)&&(t.target?.closest("input, textarea, button, a, select, [contenteditable], .mc-diff, .mc-reply, .mc-history, .mc-take-review")||this.startDrag(t,!1,!0,!1))},this.onPointerMove=t=>{const e=this.drag;if(!e||t.pointerId!==e.id){!e&&t.pointerType==="mouse"&&this.petMove(t,!1);return}if(e.talk||!e.slid&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<Sg)return;if(e.slid=!0,e.long&&(clearTimeout(e.long),e.long=null),e.pet){if(this.petMove(t,!0))return;e.pet=!1,this.owl?.lookAt(null),e.dx=t.clientX-this.pos.x,e.dy=t.clientY-this.pos.y}if(!e.canMove)return;e.moved||window.getSelection()?.removeAllRanges(),!e.moved&&e.branch&&!e.flying&&(e.fly=setTimeout(()=>{this.drag===e&&(e.flying=!0,this.owl?.hold(!0))},Tg)),e.moved=!0,this.dragging=!0,this.endVisit(),this.endCome(!1);const i=this.viewport(),s=this.pos;this.pos=fo({x:t.clientX-e.dx,y:t.clientY-e.dy},i,ni(i)),e.branch&&(this.owl?.carry(this.pos.x-s.x,this.pos.y-s.y),this.shakeStep(e,t)),e.bo&&(this.bubble=Ql({x:this.pos.x+e.bo.x,y:this.pos.y+e.bo.y},i,{width:On(i),height:this.bubbleEl?.offsetHeight??120}))},this.onGlance=t=>{t.pointerType!=="touch"||!this.owner||this.rest!=="idle"||this.drag||this.sending||bt()||t.composedPath().includes(this)||(this.owl?.lookAt({x:t.clientX,y:t.clientY}),this.glanceTimer&&clearTimeout(this.glanceTimer),this.glanceTimer=setTimeout(()=>{this.glanceTimer=null,!this.typingTimer&&!this.drag&&this.owl?.lookAt(null)},Ig))},this.onContextMenu=t=>{if(t.preventDefault(),this.pointerType!=="mouse"||!this.avatarEl)return;const e=t;Gf({x:e.clientX,y:e.clientY},this.avatarEl,[{label:"Type to Mana",run:()=>this.typeToMana()},{label:"Talk to Mana",run:()=>void this.toggleDictation()},...this.exchanges.length||this.mine?[{label:this.historyOpen&&this.open?"Hide chat history":"Chat history",run:()=>this.toggleHistory()}]:[],{label:"Hide owl",run:()=>$s(!0)}])},this.onPointerUp=t=>{const e=this.drag;if(!e||t.pointerId!==e.id)return;if(this.drag=null,this.stroke=null,e.fly&&clearTimeout(e.fly),e.long&&clearTimeout(e.long),e.talk){this.dragged=!0,setTimeout(()=>{this.dragged=!1},0),this.dictation==="listening"?this.finishDictation(!0):this.micOpening&&this.cancelDictation();return}if(e.touch&&e.slid&&this.owl?.lookAt(null),!e.moved){e.picked&&(this.owl?.hold(!1),this.dragging=!1),(e.picked||e.slid)&&(this.dragged=!0,setTimeout(()=>{this.dragged=!1},0));return}e.flying&&this.owl?.hold(!1),e.shaken&&this.owl?.gesture("dizzy",!0),this.dragging=!1,this.dragged=!0,setTimeout(()=>{this.dragged=!1},0);const i=this.viewport(),s=this.spot,n=ni(i);this.spot=Ff(this.pos,ba(i,this.obstacles(),n))?null:Rf(this.pos,i,n);const o=this.spot?this.underAvatar():null;o&&this.highlight&&!o.text.includes(this.highlight.text)&&(this.highlight=null),o&&!this.sitting&&(this.returnSpot=s),this.setFocus(o),o?(this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=null,this.updateComplete.then(()=>{this.owl?.gesture("nod"),this.lookAtInput()})):(this.spots={...this.spots,[this.pane]:this.spot??"home"},lb(this.spots)),o&&!this.open?this.show():this.open||(this.typeArmedUntil=Date.now()+sb),this.schedulePlace()},this.endVisitLater=()=>{const t=this.trip?Rn:this.arrivedAt+Ng+Rn-performance.now();t>50?this.visitTimer=setTimeout(this.endVisitLater,t):this.endVisit()},this.endComeLater=()=>{if(this.trip){this.comeTimer=setTimeout(this.endComeLater,500);return}this.endCome()},this.tripStep=t=>{const e=this.trip;if(e){if(e.raf=0,t>=e.go){const i=Math.min(1,(t-e.go)/e.ms),s=.5-.5*Math.cos(Math.PI*i),n=e.off;if(e.off={x:e.from.x*(1-s),y:e.from.y*(1-s)-e.lift*Math.sin(Math.PI*s)},this.owl?.carry(e.off.x-n.x,e.off.y-n.y),this.applyTrip(),i>=1){this.endTrip();return}}e.raf=requestAnimationFrame(this.tripStep)}}}connectedCallback(){super.connectedCallback(),Hf(),window.addEventListener("resize",this.onResize),window.addEventListener("scroll",this.schedulePlace,!0),window.addEventListener(oo,this.onVisibilityChange),window.visualViewport?.addEventListener("resize",this.onResize),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("pagehide",this.onPageHide),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("pointermove",this.onActivity,{passive:!0}),document.addEventListener("pointermove",this.onWatch,{passive:!0}),document.addEventListener("pointerout",this.onPointerOut,{passive:!0}),document.addEventListener("pointerdown",this.onActivity,!0),document.addEventListener("pointerdown",this.onGlance,{capture:!0,passive:!0}),document.addEventListener("keydown",this.onActivity,!0),this.restTimer=setInterval(this.updateRest,1e3);const t=f.subscribe(this.onStore);this.unsubscribe=typeof t=="function"?()=>{t()}:null,this.schedulePlace()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.schedulePlace,!0),window.removeEventListener(oo,this.onVisibilityChange),window.visualViewport?.removeEventListener("resize",this.onResize),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pagehide",this.onPageHide),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("pointermove",this.onActivity),document.removeEventListener("pointermove",this.onWatch),document.removeEventListener("pointerout",this.onPointerOut),document.removeEventListener("pointerdown",this.onActivity,!0),document.removeEventListener("pointerdown",this.onGlance,!0),document.removeEventListener("keydown",this.onActivity,!0),this.restTimer&&clearInterval(this.restTimer),this.unsubscribe?.(),this.unsubscribe=null,this.glanceTimer&&clearTimeout(this.glanceTimer),this.drag?.long&&clearTimeout(this.drag.long),this.drag?.fly&&clearTimeout(this.drag.fly),this.stopConversation();for(const t of[this.reactionTimer,this.doneTimer])t&&clearTimeout(t);this.frame&&cancelAnimationFrame(this.frame),this.trip?.raf&&cancelAnimationFrame(this.trip.raf),this.trip=null,this.stopReveal(),this.sitting?.el?.classList.remove("mana-companion-focus"),this.takeTimer&&clearTimeout(this.takeTimer),this.tapTimer&&clearTimeout(this.tapTimer),this.cancelDictation(),this.abort?.abort();for(const t of[this.slowTimer,this.idleTimer,this.chipTimer,this.visitTimer,this.comeTimer,this.stareTimer,this.lingerTimer])t&&clearTimeout(t);this.clearPointed()}playAnimation(t){if(!Ws(t))return;this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=t,this.reactionTrigger++;const e=t in $a?$a[t]:8e3;this.reactionTimer=setTimeout(()=>{this.reaction=null,this.reactionTimer=null},e)}react(t,e=Jg){const i=Date.now();if(this.lastReaction?.state===t&&i-this.lastReaction.at<e){t==="happy"&&this.owl?.gesture(Aa[Math.floor(Math.random()*Aa.length)]);return}this.lastReaction={state:t,at:i},this.playAnimation(t)}doMove(t){if(t==="hop"||t==="nod"||t==="tilt"||t==="squint"||t==="ruffle"){this.owl?.gesture(t);return}if(t==="come"){this.comeOver();return}const e=t==="fly"?"flying":t;this.lastReaction={state:e,at:Date.now()},this.playAnimation(e)}stopWatching(){for(const t of[this.stareTimer,this.lingerTimer])t&&clearTimeout(t);this.stareTimer=this.lingerTimer=null,this.watching!==null&&this.owl?.lookAt(null),this.watching=null}maybeFidget(t,e){if(!this.open||this.sending||this.dictation!=="off"||this.dragging||this.reaction||this.trip||this.pointing||this.visiting||this.typingTimer||this.talking||t-this.lastTouched<Xg){this.nextFidget=0;return}if(!this.nextFidget){this.nextFidget=t+Math.random()*Zg;return}if(t<this.nextFidget||(this.nextFidget=t+Fn[0]+Math.random()*(Fn[1]-Fn[0]),bt()))return;const i=(e?eb:tb).filter(n=>n!==this.lastFidget),s=i[Math.floor(Math.random()*i.length)];this.owl?.gesture(s)&&(this.lastFidget=s)}viewport(){const t=window.visualViewport;return{width:document.documentElement.clientWidth||window.innerWidth,height:t?t.height+t.offsetTop:window.innerHeight}}obstacles(){const t=performance.now();if(this.obstacleCache&&t-this.obstacleCache.at<nb)return this.obstacleCache.rects;const e=[];for(const i of document.querySelectorAll("input:not([type=checkbox]):not([type=radio]):not([type=hidden]), textarea, [contenteditable='true']")){if(this.contains(i))continue;const s=i.getBoundingClientRect();s.width>0&&s.height>0&&Lf(s)&&s.bottom>0&&s.top<window.innerHeight&&e.push(s)}return this.obstacleCache={at:t,rects:e},e}place(){if(this.dragging)return;const t=this.viewport();if(this.sitting?.key&&(!this.sitting.el?.isConnected||this.sitting.el.dataset.rowKey!==this.sitting.key)){this.sitting.el?.classList.remove("mana-companion-focus");const h=document.querySelector(`[data-row-key="${CSS.escape(this.sitting.key)}"]`);this.sitting.el=h,h?.classList.add("mana-companion-focus")}this.sitting&&this.focusView?.note&&f.getState().viewContext?.note!==this.focusView.note&&(this.sitting.el?.classList.remove("mana-companion-focus"),this.sitting.el=null);const e=this.coming?this.comeTarget(t):null,i=e?null:Ii(this.pointing?.el,t)??Ii(this.sitting?.el,t),s=i||e?null:Ii(this.visiting,t),n=this.restingPlace(t),o=ni(t),a=e??(i?ya(i,t,o):s?ya(s,t,o):n),l=this.flyNext||!!this.trip;if(this.flyNext=!1,(a.x!==this.pos.x||a.y!==this.pos.y)&&!(l&&this.flyTo(a))&&(this.cancelTrip(),this.pos={x:a.x,y:a.y}),this.open){const h=s?n:this.pos,u=this.bubbleEl?.offsetHeight??120,p=Uf(h,t,{width:On(t),height:u},i??void 0,o);(p.x!==this.bubble.x||p.y!==this.bubble.y)&&(this.bubble=p)}}comeTarget(t){const e=ni(t),i=this.coming?.near,s=window.visualViewport,n=i&&i.x+Nn+e<=t.width-U,o=i?{x:n?i.x+Nn:i.x-Nn-e,y:i.y-e/2}:{x:(t.width-e)/2,y:(s?.offsetTop??0)+((s?.height??t.height)-e)/2},a=va({x:Math.round(o.x),y:Math.round(o.y)},t,this.obstacles(),e);return{x:Math.round(a.x),y:Math.round(a.y)}}restingPlace(t){const e=this.obstacles(),i=ni(t),s=this.sitting&&!Ii(this.sitting.el,t)?this.returnSpot:this.spot;return s?va(Nf(s,t,i),t,e,i):ba(t,e,i)}updated(){!this.owner&&(this.micOpening||this.dictation!=="off")&&this.cancelDictation(),this.open&&this.place()}toggleHistory(){this.historyOpen=!(this.historyOpen&&this.open),this.historyOpen&&!this.open&&this.show()}tapOwl(){this.micOpening||this.dictation!=="off"||this.reviewTake?this.toggleDictation():this.open&&this.typing?this.collapse():this.typeToMana()}show(){this.open=!0,this.touch(),this.updateComplete.then(()=>(this.place(),this.updateComplete)).then(()=>this.springBubble())}springBubble(){const t=this.bubbleEl;!this.open||!t?.animate||bt()||(t.style.transformOrigin=`${this.pos.x+this.size/2-this.bubble.x}px ${this.pos.y+this.size/2-this.bubble.y}px`,t.animate([{transform:"scale(0.4)",opacity:0},{transform:"scale(1.05)",opacity:1,offset:.6},{transform:"scale(0.98)",offset:.82},{transform:"none",opacity:1}],{duration:420,easing:"cubic-bezier(0.25, 0.8, 0.35, 1)"}))}openFromKeyboard(){!this.open||!this.typing||document.activeElement!==this.input?this.typeToMana():this.collapse()}collapse(t=!0){this.lastTap=null,this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.endCome(),this.pointing&&this.dismissPoint(),this.cancelDictation(),this.open=!1,this.typing=!1,this.historyOpen=!1,this.reviewTake="",this.input?.blur(),this.stopConversation(),this.revealAll(),t&&(this.highlight=null,this.touched=null,this.typeArmedUntil=0,document.getSelection()?.removeAllRanges()),t&&this.sitting&&(this.spot=this.returnSpot,this.setFocus(null),this.flyNext=!0,this.schedulePlace())}lookAtInput(){if(bt())return;const t=this.input?.getBoundingClientRect();t&&this.owl?.lookAt({x:t.left+t.width/2,y:t.top+t.height/2})}conversationGesture(t){return bt()||this.dragging||this.reaction||Date.now()-this.lastConversationGesture<Bg||!this.owl?.gesture(t)?!1:(this.lastConversationGesture=Date.now(),!0)}stopConversation(){this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=null,this.readingReply=!1,this.owl?.lookAt(null)}onReplyText(){if(this.readingReply||(this.readingReply=!0,this.requestUpdate()),!bt()){this.revealFrame||(this.revealFrame=requestAnimationFrame(this.revealStep));return}const t=this.reply.slice(0,this.shown);this.shown=this.reply.length,this.sentenceBeat(t,this.reply)}setTalking(t){t!==this.talking&&(this.talking=t,this.owl?.talk(t))}revealAll(){this.stopReveal(),this.shown=this.reply.length}stopReveal(){this.revealFrame&&cancelAnimationFrame(this.revealFrame),this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.setTalking(!1)}clearReply(){this.stopReveal(),this.reply="",this.shown=0}sentenceBeat(t,e){const i=(e.match(/[.!?](?:\s|$)/g)??[]).length,s=(t.match(/[.!?](?:\s|$)/g)??[]).length;i>s&&this.replyGestures<2&&this.conversationGesture(this.replyGestures===0?"nod":"ruffle")&&this.replyGestures++}view(){const t=f.getState(),e=t.rightPaneMode,i=e==="goals"?Oa():null,s=Date.now(),n={pane:e,...e==="grocery"?{shoppingList:La()}:{},tab:i,week:t.currentWeek??null,summary:t.viewContext?.summary??null,note:t.viewContext?.note??null,focus:this.sitting?{key:this.sitting.key,text:this.sitting.text,...this.sitting.thread?{thread:this.sitting.thread}:{}}:null,highlight:this.highlight&&s-this.highlight.at<Pa?{key:this.highlight.key,text:this.highlight.text}:null,touched:this.touched&&s-this.touched.at<qg?{key:this.touched.key,text:this.touched.text,...this.touched.thread?{thread:this.touched.thread}:{}}:null};return this.sitting&&this.focusView?{...n,...this.focusView,focus:n.focus,highlight:n.highlight,touched:null}:n}async send(t,e=!1){const i=performance.now(),s=t.replace(/\s+/g," ").trim();if(!s||this.sending)return;this.mine&&this.reply&&(this.exchanges=[...this.exchanges.slice(-19),{mine:this.mine,reply:this.reply}]),this.spoken=e,this.reviewTake="",this.historyOpen=!1,this.stopConversation(),this.replyGestures=0,this.input&&!e&&(this.input.value="",this.grow());const n=this.focusView?.note&&f.getState().viewContext?.note===this.focusView.note;(f.getState().rightPaneMode==="canvas"||n||this.lines.some(x=>x.kind==="draft"&&x.draft.noteFile))&&await fs();const o=this.pointing;this.abort?.abort();const a=this.abort=new AbortController;this.mine=s,this.clearReply(),this.lines=[],this.slow=!1,this.status="Thinking",this.sending=!0,this.touch();const l=f.getState(),h=lg(s,{owner:this.owner,pane:l.rightPaneMode,openTasks:l.commitments.filter(x=>!x.done).map(x=>x.title)});if(h){await this.runFast(h,s,i);return}this.slowTimer=setTimeout(()=>{this.reply||(this.slow=!0)},ic);let u=!1,p=null,m=null,g=!1;const v=this.view();this.highlight=null;let y=!1;const D=()=>{if(y||this.abort!==a)return;y=!0,this.sending=!1,this.stopConversation(),this.abort=null,this.slowTimer&&clearTimeout(this.slowTimer),this.slowTimer=null,this.slow&&!this.reply&&!this.lines.length&&(this.lines=[{kind:"error",text:ae}]),this.slow=!1,this.lines.some(N=>N.kind==="error"||N.kind==="action"&&!N.action.ok)?this.react("surprised",2e4):!g&&m?this.doMove(m):!g&&p&&p!=="calm"&&!u&&this.react(p),o&&!u&&this.pointing===o&&this.endPointing(),this.touch()};try{for await(const x of Wf({message:s,view:v},a.signal)){if(a.signal.aborted)return;x.type==="text"?(this.reply+=x.text,this.slow=!1,this.onReplyText()):x.type==="action"?(this.lines=[...this.lines,{kind:"action",action:x.action,until:Date.now()+Ln}],x.action.ok?(this.flashDone(),this.visit(x.action.refs),x.action.noteFile&&gs(x.action.noteFile,x.action.noteChange),x.action.openNote&&ja(x.action.openNote,this),x.action.shopping&&bs(x.action.shopping,this)):this.playAnimation("surprised"),this.armChips()):x.type==="draft"?this.lines=[...this.lines,{kind:"draft",draft:x.draft}]:x.type==="notes"?this.lines=[...this.lines,{kind:"notes",found:x.found}]:x.type==="confirm"?this.lines=[...this.lines.filter(N=>!(N.kind==="confirm"&&N.confirm.id===x.confirm.id)),{kind:"confirm",confirm:x.confirm}]:x.type==="notice"?this.lines=[...this.lines,{kind:"notice",text:x.text}]:x.type==="error"?(this.lines=[...this.lines,{kind:"error",text:x.error||ae}],this.slow=!1,this.playAnimation("surprised")):x.type==="point"?(u=!0,this.startPointing(x.ref,x.title)):x.type==="mood"?(p=x.mood,!m&&p!=="calm"&&!this.pointing&&(this.react(p),g=!0,this.slow=!1)):x.type==="move"?(m=x.move,this.doMove(m),g=!0,this.slow=!1):x.type==="done"&&D()}}finally{D()}}async runFast(t,e,i){this.highlight=null;let s;t.kind==="nav"?(oc(this,t.pane,t.tab),this.reply=t.note,this.onReplyText(),s=t.note):t.kind==="move"?(this.doMove(t.move),s=bt()&&t.move!=="sleepy"?"Stayed still: reduced motion is on.":t.note):s=await this.fastAdd(t),this.sending=!1,this.abort=null,this.touch(),s&&Ra({kind:t.kind,note:s,matched:t.rule,ms:performance.now()-i,message:e})}async fastAdd(t){this.status="Adding";const e=f.getState(),i=La(),s=t.target==="task"&&e.rightPaneMode==="goals"&&Oa()==="week"?e.currentWeek:null,[n,o]=t.target==="task"?["/api/commitments",{title:t.text,goalId:null,keyResultId:null,...s?{week:s}:{}}]:t.target==="idea"?["/api/ideas",{text:t.text}]:["/api/grocery",{name:t.text,list:i}],a=await Na("POST",n,o),l=typeof a?.id=="number"&&a.id>0?a.id:null;if(!l)return this.lines=[{kind:"error",text:"Couldn't add that: can't reach Mana right now."}],this.react("surprised",2e4),null;const h=dg(t.target,t.text,{week:s,current:cg(new Date),list:i}),u=t.target==="task"?[{kind:"commitment",id:l}]:t.target==="idea"?[{kind:"idea",id:l}]:[],p=`${n}/${l}`,m=async()=>{const g=performance.now();return await Na("DELETE",p)?(t.target==="shopping"&&bs({list:i},this),Ra({kind:"undo",note:`Undone: ${h.did}`,matched:t.rule,ms:performance.now()-g}),`Undone: ${h.shown}`):"Couldn't undo: can't reach Mana right now."};return this.lines=[{kind:"action",action:{id:`fast-${t.target}-${l}`,ok:!0,note:h.shown,undoable:!0,refs:u},until:Date.now()+Ln,undoFast:m}],this.flashDone(),this.visit(u),t.target==="shopping"&&bs({list:i},this),this.armChips(),h.did}flashDone(){this.justActed=!0,this.react("happy"),this.doneTimer&&clearTimeout(this.doneTimer),this.doneTimer=setTimeout(()=>{this.justActed=!1,this.doneTimer=null},1200)}armChips(){this.chipTimer&&clearTimeout(this.chipTimer);const t=Math.min(...this.lines.filter(e=>e.kind==="action"&&e.until>Date.now()).map(e=>e.until));Number.isFinite(t)&&(this.chipTimer=setTimeout(()=>{this.lines=[...this.lines],this.armChips()},Math.max(50,t-Date.now()+20)))}async undo(t){if(this.touch(),t.undoFast){const s=t.undoFast,n=t.action.id;this.lines=this.lines.map(a=>a===t?{...t,undone:"Undoing…"}:a);const o=await s();this.lines=this.lines.map(a=>a.kind==="action"&&a.action.id===n?{...a,undone:o}:a);return}const e=t.action.noteFile;e&&await fs();const i=await oe("/api/companion/undo",{id:t.action.id});this.lines=this.lines.map(s=>s===t?{...t,undone:i?.note??"Couldn't undo: can't reach Mana right now."}:s),i?.ok&&e&&gs(e,i.noteChange),i?.ok&&i.shopping&&bs(i.shopping,this)}async applyDraft(t){if(this.touch(),this.lines.some(n=>n.kind==="draft"&&n.draft.id===t&&n.busy))return;const e=this.lines.find(n=>n.kind==="draft"&&n.draft.id===t)?.draft.noteFile;this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===t?{...n,busy:!0}:n),e&&await fs();const i=await oe("/api/companion/draft/apply",{id:t}),s=i?.action??{id:"",ok:!1,note:i?.note??"Couldn't apply: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===t?{kind:"action",action:s,until:Date.now()+Ln}:n),s.ok&&this.flashDone(),s.ok&&s.noteFile&&gs(s.noteFile),this.armChips()}async discardDraft(t){this.touch(),this.lines=this.lines.map(i=>i.kind==="draft"&&i.draft.id===t?{...i,busy:!0}:i);const e=await oe("/api/companion/draft/discard",{id:t});this.lines=this.lines.map(i=>i.kind==="draft"&&i.draft.id===t?{kind:"notice",text:e?.note??ae}:i)}async pickNote(t,e){if(this.touch(),this.lines.some(n=>n.kind==="notes"&&n.found===t&&n.busy))return;this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===t?{...n,busy:!0}:n);const i=await ja(e.file,this),s={id:"",ok:i,note:i?`Opened: ${e.title}`:`Couldn't open ${e.title}: the notes pane didn't answer.`,undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===t?{kind:"action",action:s,until:0}:n)}async confirmNote(t){this.touch();const e=this.lines.find(n=>n.kind==="confirm"&&n.confirm.id===t);if(!e||e.busy)return;this.lines=this.lines.map(n=>n===e?{...e,busy:!0}:n),await fs();const i=await oe("/api/companion/confirm/apply",{id:t}),s=i?.action??{id:"",ok:!1,note:i?.note??"Couldn't do that: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="confirm"&&n.confirm.id===t?{kind:"action",action:s,until:0}:n),s.ok?(this.flashDone(),gs(e.confirm.noteFile)):this.react("surprised",2e4)}async discardConfirm(t){this.touch(),this.lines=this.lines.map(i=>i.kind==="confirm"&&i.confirm.id===t?{...i,busy:!0}:i);const e=await oe("/api/companion/confirm/discard",{id:t});this.lines=this.lines.map(i=>i.kind==="confirm"&&i.confirm.id===t?{kind:"notice",text:e?.note??ae}:i)}async startPointing(t,e){this.endVisit(),this.endCome(!1),this.clearPointed();const i=f.getState();i.rightPaneMode!=="goals"&&i.setRightPaneMode("goals");const s=await _a(xa(t),2500);if(this.pointing={ref:t,title:e,el:s},!s)return;s.classList.add("mana-companion-pointed");const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;s.scrollIntoView({block:"center",behavior:n?"auto":"smooth"}),setTimeout(this.schedulePlace,n?0:350),this.flyNext=!0,this.schedulePlace()}clearPointed(){this.pointing?.el?.classList.remove("mana-companion-pointed")}endPointing(){this.clearPointed(),this.pointing=null,this.flyNext=!0,this.schedulePlace()}async dismissPoint(){const t=this.pointing;t&&(this.endPointing(),await oe("/api/companion/point/dismiss",t.ref))}startDrag(t,e,i,s){i&&this.cancelTrip();const n=this.open?{x:this.bubble.x-this.pos.x,y:this.bubble.y-this.pos.y}:null,o=this.drag={id:t.pointerId,x0:t.clientX,y0:t.clientY,dx:t.clientX-this.pos.x,dy:t.clientY-this.pos.y,bo:n,moved:!1,branch:e,fly:null,flying:!1,canMove:i,touch:t.pointerType!=="mouse",pet:s,slid:!1,long:null,picked:!1,shaken:!1,talk:!1,shake:{x:t.clientX,y:t.clientY,at:performance.now(),sign:0,turns:[]}};e&&this.owl?.preload(),e&&o.touch?o.long=setTimeout(()=>this.holdToTalk(o),Sa):e&&i&&!bt()&&(o.long=setTimeout(()=>this.pickUp(o),Sa)),t.currentTarget.setPointerCapture?.(t.pointerId)}holdToTalk(t){t.long=null,!(this.drag!==t||t.moved||t.slid||this.sending||this.micOpening||this.dictation!=="off"||this.reviewTake)&&(t.talk=!0,t.pet=!1,oi(12),this.toggleDictation())}pickUp(t){t.long=null,!(this.drag!==t||t.moved||t.slid)&&(t.picked=t.flying=!0,t.pet=!1,this.dragging=!0,this.endVisit(),this.stopWatching(),this.owl?.hold(!0),t.touch&&oi(12))}shakeStep(t,e){const i=t.shake,s=performance.now(),n=e.clientX-i.x,o=e.clientY-i.y,a=Math.max(1,s-i.at);if(i.x=e.clientX,i.y=e.clientY,i.at=s,t.shaken||Math.hypot(n,o)/a*1e3<Mg)return;const l=Math.abs(n)>=Math.abs(o)?Math.sign(n):2*Math.sign(o);i.sign&&l===-i.sign&&i.turns.push(s),i.sign=l,i.turns=i.turns.filter(h=>s-h<Ag),!(i.turns.length<Pg||bt())&&(t.shaken=!0,t.touch&&oi([18,40,18]))}petMove(t,e){if(!this.owl||bt())return!1;const i=(t.clientX-this.pos.x)/this.size,s=(t.clientY-this.pos.y)/this.size;if(!this.onHead(t))return this.stroke=null,e&&i>-.05&&i<1.05&&s>-.05&&s<1.05;const n=performance.now(),o=this.stroke;if(e&&this.owl.lookAt({x:t.clientX,y:t.clientY}),!o||n-o.at>400)return this.stroke={x:t.clientX,y:t.clientY,at:n,path:0,turns:0,sign:0},!0;const a=t.clientX-o.x,l=t.clientY-o.y,h=Math.hypot(a,l);if(h<1)return!0;if(h/Math.max(1,n-o.at)*1e3>Cg)return this.stroke=null,!1;const u=Math.abs(a)>=Math.abs(l)?Math.sign(a):2*Math.sign(l);return o.sign&&u===-o.sign&&o.turns++,Object.assign(o,{x:t.clientX,y:t.clientY,at:n,path:o.path+h,sign:u}),o.path<this.size*Eg||!(e||o.turns>0)||(o.path=0,this.owl.gesture("pet",!0)&&(this.onActivity(),e&&n-this.lastPetBuzz>Dg&&(this.lastPetBuzz=n,oi(8)))),!0}onHead(t){const e=(t.clientX-this.pos.x)/this.size,i=(t.clientY-this.pos.y)/this.size;return e>.15&&e<.85&&i>.04&&i<.52}get size(){return ni(this.viewport())}underAvatar(){const t=this.pos.x+this.size/2,e=this.pos.y+this.size/2;for(const i of document.elementsFromPoint(t,e)){if(!(i instanceof HTMLElement)||this.contains(i))continue;const s=i.closest("[data-row-key]");if(s)return{key:s.dataset.rowKey??null,text:Un(s,400),el:s,...Number(s.dataset.manaThread)>0?{thread:Number(s.dataset.manaThread)}:{}};const n=i.closest(ib),o=n?Un(n,_g):"";return n&&o.length>=2?{key:null,text:o,el:n}:null}return null}setFocus(t){const e=i=>i?`${i.key??i.text}:${i.thread??""}`:"";if(t&&e(t)!==e(this.sitting)){for(const i of this.lines)i.kind==="draft"&&oe("/api/companion/draft/discard",{id:i.draft.id}),i.kind==="confirm"&&oe("/api/companion/confirm/discard",{id:i.confirm.id});this.mine="",this.clearReply(),this.lines=[],this.stopConversation()}if(this.sitting?.el?.classList.remove("mana-companion-focus"),this.focusView=null,t){const{pane:i,tab:s,week:n,summary:o,note:a}=this.view();this.focusView={pane:i,tab:s,week:n,summary:o,note:a},t.key?.startsWith("message:")&&(this.focusView={pane:"inbox",summary:"Inbox message",note:null}),t.key?.startsWith("chat:")&&(this.focusView={pane:"workshop",summary:"Workshop conversation",note:null})}this.sitting=t,t?.el.classList.add("mana-companion-focus")}async visit(t){const e=t?.[0];if(!e||this.pointing||this.dragging||bt())return;const i=await _a(xa(e),1500);!i||this.pointing||this.dragging||!Ii(i,this.viewport())||(this.endCome(!1),this.visiting=i,this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=setTimeout(this.endVisitLater,Rn),this.flyNext=!0,this.schedulePlace())}endVisit(){this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=null,this.visiting&&(this.visiting=null,this.flyNext=!0,this.schedulePlace())}comeOver(){if(bt()||this.dragging||this.pointing)return;const t=this.cursor;this.endVisit(),this.coming={near:t&&Date.now()-t.at<Fg?{x:t.x,y:t.y}:null},this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=setTimeout(this.endComeLater,jg),this.owl?.preload(),this.flyNext=!0,this.schedulePlace()}endCome(t=!0){this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=null,this.coming&&(this.coming=null,t&&(this.flyNext=!0,this.schedulePlace()))}flyTo(t){const e=this.owl,i=this.trip;if(bt()||!e?.canFly())return!1;if(i&&i.to.x===t.x&&i.to.y===t.y)return!0;const s={x:this.pos.x+(i?.off.x??0),y:this.pos.y+(i?.off.y??0)},n=Math.hypot(t.x-s.x,t.y-s.y),o=performance.now();if(!i&&n<Og)return!1;const a={x:s.x-t.x,y:s.y-t.y},l=i?Math.max(o,i.go):o+(e.airborne()?0:Lg);return this.trip={to:t,from:a,off:a,lift:Math.min(140,n*.35),go:l,ms:Math.max(Ca[0],Math.min(Ca[1],n/Rg*1e3)),raf:i?.raf??0},i||(e.hold(!0,!0),this.avatarEl?.setAttribute("data-flying","")),this.pos={x:t.x,y:t.y},this.applyTrip(),this.trip.raf||(this.trip.raf=requestAnimationFrame(this.tripStep)),!0}applyTrip(){const t=this.trip;t&&this.avatarEl&&(this.avatarEl.style.transform=`translate(${t.off.x}px, ${t.off.y}px)`)}endTrip(){const t=this.trip;t&&(t.raf&&cancelAnimationFrame(t.raf),this.trip=null,this.arrivedAt=performance.now(),this.avatarEl?.style.removeProperty("transform"),this.avatarEl?.removeAttribute("data-flying"),this.owl?.hold(!1))}cancelTrip(){const t=this.trip;t&&(this.pos={x:this.pos.x+t.off.x,y:this.pos.y+t.off.y},this.endTrip())}async toggleDictation(){if(this.reviewTake){await this.send(this.reviewTake,!0);return}if(this.dictation==="writing")return;if(this.dictation==="listening")return this.finishDictation(!0);if(this.micOpening)return this.cancelDictation();if(this.sending)return;const t=++this.takeGeneration;this.typing=!1,this.historyOpen=!1,this.input?.blur(),Fa(document.activeElement)&&document.activeElement.blur(),this.revealAll(),this.stopConversation(),this.lines=this.lines.filter(e=>e.kind!=="error"),this.micOpening=!0,this.open||this.show();try{await this.recorder.start({level:e=>this.avatarEl?.style.setProperty("--mc-level",String(e)),pause:()=>{t===this.takeGeneration&&this.finishDictation(!0)}})}catch{t===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"I can't hear you: the mic is blocked or unavailable. You can type instead."}],this.playAnimation("surprised"));return}finally{t===this.takeGeneration&&(this.micOpening=!1)}t!==this.takeGeneration||!this.recorder.active||(this.dictation="listening",this.pointerType!=="mouse"&&oi(10),this.touch(),this.takeTimer=setTimeout(()=>void this.finishDictation(),gl))}async finishDictation(t=!1){if(this.dictation!=="listening")return;const e=this.takeGeneration;this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing",this.avatarEl?.style.removeProperty("--mc-level");const i=this.sttAbort=new AbortController;let s="";try{const n=await this.recorder.stop();if(e!==this.takeGeneration)return;if(n&&"silent"in n){this.lines=[...this.lines,{kind:"error",text:xl(n.mic)}],this.playAnimation("surprised");return}if(s=n?await wl(n.wav,i.signal):"",e!==this.takeGeneration)return;s?t||(this.reviewTake=s):this.lines=[...this.lines,{kind:"notice",text:"I didn't catch that. Tap to try again."}]}catch{e===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"Couldn't hear that clearly. Try again."}],this.playAnimation("surprised"))}finally{e===this.takeGeneration&&(this.sttAbort=null,this.dictation="off",this.touch())}e===this.takeGeneration&&t&&s&&this.send(s,!0)}async cancelDictation(){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.lastTap=null,this.takeGeneration++,this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.sttAbort?.abort(),this.sttAbort=null,this.micOpening=!1,this.dictation="off",this.avatarEl?.style.removeProperty("--mc-level"),await this.recorder.cancel()}renderDraft(t){const e={del:"Removed: ",add:"Added: ",same:"",gap:""};return r`<div class="mc-draft">
      <p class="mc-draft-label">${t.draft.label}</p>
      <div class="mc-diff">${t.draft.lines.map(i=>i.kind==="gap"?r`<p class="mc-diff-gap" aria-hidden="true">…</p>`:r`<p class="mc-diff-line" data-kind=${i.kind}><span class="mc-sr">${e[i.kind]}</span>${i.text||" "}</p>`)}</div>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!t.busy} @click=${()=>void this.applyDraft(t.draft.id)}>Apply</button>
        <button type="button" class="mc-undo" ?disabled=${!!t.busy} @click=${()=>void this.discardDraft(t.draft.id)}>Not now</button>
      </p>
    </div>`}renderNotes(t){const e=t.found.query;return r`<div class="mc-draft" data-kind="notes">
      <p class="mc-draft-label">${t.found.partial?`Nothing has all of “${e}”. These come close:`:`Notes for “${e}”:`}</p>
      <div class="mc-picks">${t.found.hits.map(i=>r`<button type="button" class="mc-pick" ?disabled=${!!t.busy} @click=${()=>void this.pickNote(t.found,i)}>${i.title}</button>`)}</div>
    </div>`}renderConfirm(t){const e=t.confirm;return r`<div class="mc-draft" data-kind="confirm">
      <p class="mc-draft-label">${e.label}</p>
      <p class="mc-confirm-text">${e.text}</p>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!t.busy} @click=${()=>void this.confirmNote(e.id)}>${t.busy?e.kind==="publish"?"Publishing…":"Unpublishing…":e.button}</button>
        <button type="button" class="mc-undo" ?disabled=${!!t.busy} @click=${()=>void this.discardConfirm(e.id)}>Not now</button>
      </p>
    </div>`}renderLine(t){if(t.kind==="draft")return this.renderDraft(t);if(t.kind==="notes")return this.renderNotes(t);if(t.kind==="confirm")return this.renderConfirm(t);if(t.kind!=="action")return r`<p class="mc-line" data-kind=${t.kind}><span>${Ia(t.text)}</span></p>`;const e=t.action.ok&&t.action.undoable&&!t.undone&&t.until>Date.now(),i=t.action.ok&&!t.undone&&t.action.url&&/^https:\/\//.test(t.action.url)?t.action.url:null;return r`<p class="mc-line" data-kind=${t.action.ok?"action":"error"}>
      <span>${t.undone??t.action.note}${i?r` <a class="mc-link" href=${i} target="_blank" rel="noopener noreferrer">View post</a>`:c}</span>
      ${e?r`<button type="button" class="mc-undo" @click=${()=>void this.undo(t)}>Undo</button>`:c}
    </p>`}render(){if(!this.owner||this.owlHidden)return c;const t=this.sending?"thinking":this.justActed?"done":this.pointing?"pointing":"idle",e=this.highlight&&Date.now()-this.highlight.at<Pa?this.highlight:null,i=vg({override:this.animationState,dictation:this.dictation,sending:this.sending&&!this.readingReply,reaction:this.reaction,curious:this.rest==="idle"&&!!(this.pointing||this.visiting||this.sitting||e||this.dragging),open:this.open,rest:this.rest}),s=this.pointing&&!this.pointing.el?r`<p class="mc-source">${this.pointing.title}</p>`:c;return r`
      ${this.open||this.pointing?r`
        <div class="mc-bubble" role="dialog" aria-label="Mana" ?data-dragging=${this.dragging} style="left:${this.bubble.x}px;top:${this.bubble.y}px;width:${On(this.viewport())}px;max-height:${Math.max(80,this.viewport().height-2*U)}px;${this.open?"":"display:none"}"
          @pointerdown=${this.onBubbleDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp} @keydown=${this.touch}>
          ${this.mine&&!this.spoken&&!this.historyOpen?r`<p class="mc-mine">${this.mine}</p>`:c}
          ${s}
          ${this.shown&&!this.historyOpen?r`<p class="mc-reply" aria-live="polite">${Ia(this.reply.slice(0,this.shown).trim(),this.shown<this.reply.length)}</p>`:c}
          ${this.sending&&!this.reply&&!this.slow?r`<p class="mc-status" role="status">${this.status}<span class="mc-dots"></span></p>`:c}
          ${this.slow?r`<p class="mc-line" data-kind="error"><span>${ae}</span></p>`:c}
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
              <button type="submit" class="mc-send" aria-label="Send message" ?disabled=${this.sending}>${ob}</button>
              <button type="button" class="mc-tool mc-mic" data-state=${this.dictation} aria-label=${this.dictation==="listening"?"Stop and send":this.reviewTake?"Send recording":"Talk to Mana"}
              ?disabled=${this.dictation==="writing"||this.micOpening||this.sending} @click=${()=>void this.toggleDictation()}>${rb}</button>
            </div>
          </form>
        </div>`:c}
      <button type="button" class="mc-avatar" data-state=${t} data-animation=${i} data-voice=${this.micOpening?"opening":this.dictation} ?data-dragging=${this.dragging} aria-label=${this.dictation==="listening"?"Stop and send":this.micOpening?"Cancel recording":"Type to Mana"} aria-expanded=${this.open?"true":"false"}
        style=${Mf({left:`${this.pos.x}px`,top:`${this.pos.y}px`,"--mc-size":`${this.size}px`})} @click=${this.toggle} @contextmenu=${this.onContextMenu}
        @pointerdown=${this.onPointerDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp}
        @pointerenter=${this.onHover}>
        <mana-owl .state=${i} .trigger=${this.reactionTrigger}></mana-owl>
      </button>
    `}};L([b({type:Boolean})],I.prototype,"owner",2);L([b()],I.prototype,"avatar",2);L([b({attribute:"animation-state"})],I.prototype,"animationState",2);L([d()],I.prototype,"reaction",2);L([d()],I.prototype,"reactionTrigger",2);L([d()],I.prototype,"rest",2);L([d()],I.prototype,"open",2);L([d()],I.prototype,"sending",2);L([d()],I.prototype,"mine",2);L([d()],I.prototype,"spoken",2);L([d()],I.prototype,"typing",2);L([d()],I.prototype,"owlHidden",2);L([d()],I.prototype,"reviewTake",2);L([d()],I.prototype,"historyOpen",2);L([d()],I.prototype,"exchanges",2);L([d()],I.prototype,"reply",2);L([d()],I.prototype,"lines",2);L([d()],I.prototype,"slow",2);L([d()],I.prototype,"status",2);L([d()],I.prototype,"pointing",2);L([d()],I.prototype,"pos",2);L([d()],I.prototype,"bubble",2);L([d()],I.prototype,"justActed",2);L([d()],I.prototype,"spot",2);L([d()],I.prototype,"dragging",2);L([d()],I.prototype,"visiting",2);L([d()],I.prototype,"sitting",2);L([d()],I.prototype,"shown",2);L([d()],I.prototype,"highlight",2);L([V(".mc-input")],I.prototype,"input",2);L([V(".mc-bubble")],I.prototype,"bubbleEl",2);L([V("mana-owl")],I.prototype,"owl",2);L([d()],I.prototype,"dictation",2);L([d()],I.prototype,"micOpening",2);L([V(".mc-avatar")],I.prototype,"avatarEl",2);I=L([w("mana-companion")],I);function Ia(t,e=!1){return(e&&(t.match(/\*/g)?.length??0)%2?`${t}*`:t).split(/\*([^*\n]+)\*/g).map((s,n)=>n%2?r`<em>${s}</em>`:s)}function _a(t,e){const i=()=>{const s=document.querySelector(`[data-row-key="${CSS.escape(t)}"]`);return s&&s.getClientRects().length?s:null};return new Promise(s=>{const n=performance.now(),o=()=>{const a=i();a||performance.now()-n>e?s(a):requestAnimationFrame(o)};o()})}function Oa(){try{const t=localStorage.getItem(sc);return t==="ideas"||t==="goals"?t:"week"}catch{return"week"}}function La(){try{return localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery"}catch{return"grocery"}}function Ra(t){oe("/api/companion/fast",{...t,ms:Math.round(t.ms)})}async function Na(t,e,i){try{const s=await fetch(e,{method:t,...i===void 0?{}:{headers:{"content-type":"application/json"},body:JSON.stringify(i)},signal:AbortSignal.timeout?.(ic)});return s.ok?await s.json().catch(()=>({})):null}catch{return null}}async function fs(){const t=[];window.dispatchEvent(new CustomEvent("mana:notes-settle",{detail:{wait:e=>{t.push(e)}}})),t.length&&await Promise.race([Promise.allSettled(t),new Promise(e=>setTimeout(e,3e3))])}function oc(t,e,i=null){if(i){try{localStorage.setItem(sc,i)}catch{}document.querySelector(`planner-tabs [data-planner-tab="${i}"]`)?.click()}t.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:e},bubbles:!0,composed:!0}));const s=f.getState();s.rightPaneMode!==e&&s.setRightPaneMode(e)}async function ja(t,e){const i=()=>{let n=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:t,ack:()=>{n=!0}}})),n};if(oc(e,"canvas"),i())return!0;const s=performance.now();return new Promise(n=>{const o=()=>{i()?n(!0):performance.now()-s>4e3?n(!1):setTimeout(o,100)};setTimeout(o,50)})}function gs(t,e){window.dispatchEvent(new CustomEvent("mana:note-changed",{detail:{file:t,change:e}}))}function Un(t,e){return(t.innerText||t.textContent||"").replace(/\s+/g," ").trim().slice(0,e)}function Fa(t){return t?t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement?!0:t instanceof HTMLElement&&t.isContentEditable:!1}function Ii(t,e){if(!t?.isConnected||!t.getClientRects().length)return null;const i=t.getBoundingClientRect();return i.bottom>0&&i.top<e.height?i:null}function bt(){return!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches}function oi(t){try{navigator.vibrate?.(t)}catch{}}function ab(){try{const t=JSON.parse(localStorage.getItem(nc)||"null");if(!t||typeof t!="object")return{};const e=s=>!!s&&Number.isFinite(s.xr)&&Number.isFinite(s.yr);if(e(t))return{"*":{xr:t.xr,yr:t.yr}};const i={};for(const[s,n]of Object.entries(t))(n==="home"||e(n))&&(i[s]=n==="home"?n:{xr:n.xr,yr:n.yr});return i}catch{return{}}}function Ua(t,e){const i=t[e]??t["*"];return i&&i!=="home"?i:null}function lb(t){try{localStorage.setItem(nc,JSON.stringify(t))}catch{}}async function bs(t,e){e.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"grocery"},bubbles:!0,composed:!0}));const i=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:shopping-changed",{detail:{...t,ack:()=>{o=!0}}})),o};if(i())return;const s=f.getState();s.rightPaneMode!=="grocery"&&s.setRightPaneMode("grocery");const n=performance.now();await new Promise(o=>{const a=()=>{i()||performance.now()-n>4e3?o():setTimeout(a,100)};setTimeout(a,50)})}function cb(t){const{anchor:e}=t,i=document.createElement("div");i.className="fixed z-[1000] rounded-2xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(e).fontFamily,i.style.width=`${Math.min(320,window.innerWidth-16)}px`,i.setAttribute("role","menu"),i.setAttribute("aria-label","Switch app"),document.body.appendChild(i);let s=!1;const n=(v=!1)=>{s||(s=!0,document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",u,!0),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",l),xt(c,i),i.remove(),t.onClose(),v&&e.isConnected&&e.focus({preventScroll:!0}))},o=v=>{!v.composedPath().includes(i)&&!v.composedPath().includes(e)&&n()},a=v=>{(!(v.target instanceof Node)||!i.contains(v.target))&&n()},l=()=>n(),h=()=>[...i.querySelectorAll("a")],u=v=>{if(v.key==="Escape")v.preventDefault(),v.stopPropagation(),n(!0);else if(v.key==="Tab")n(!0);else if(["ArrowDown","ArrowUp","Home","End"].includes(v.key)&&i.contains(document.activeElement)){v.preventDefault();const y=h(),D=y.indexOf(document.activeElement);y[v.key==="Home"?0:v.key==="End"?y.length-1:(D+(v.key==="ArrowUp"?-1:1)+y.length)%y.length]?.focus()}};xt(r`${t.entries.map(v=>r`
    <a role="menuitem" href=${v.href}
      aria-current=${v.current?"page":c}
      class="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-hover focus-visible:bg-hover outline-none ${v.current?"text-ink font-semibold bg-active":""}"
      @click=${()=>{t.onSelect(v),n()}}>
      <sc-icon name="lucide-${v.icon}" class="w-5 h-5 shrink-0"></sc-icon>
      <span class="flex-1">${v.label}</span>
      ${v.current?r`<sc-icon name="lucide-check" class="w-4 h-4"></sc-icon>`:c}
    </a>`)} `,i);const p=e.getBoundingClientRect(),m=i.getBoundingClientRect();i.style.maxHeight=`${Math.max(48,window.innerHeight-p.bottom-16)}px`,i.style.left=`${Math.max(8,Math.min(p.left,window.innerWidth-m.width-8))}px`,i.style.top=`${Math.min(p.bottom+6,window.innerHeight-56)}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",u,!0),window.addEventListener("scroll",a,!0),window.addEventListener("resize",l);const g=i.querySelector('[aria-current="page"]')||h()[0];return g&&(i.scrollTop=Math.max(0,g.offsetTop-(i.clientHeight-g.offsetHeight)/2),g.focus({preventScroll:!0})),()=>n()}var db=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,nt=(t,e,i,s)=>{for(var n=s>1?void 0:s?hb(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(n=(s?a(e,i,n):a(n))||n);return s&&n&&db(e,i,n),n};const Ae=[{key:"goals",label:"Goals",icon:"target"},{key:"grocery",label:"Shopping",icon:"shopping-cart"},{key:"finance",label:"Finance",icon:"wallet"},{key:"circle",label:"Circles",icon:"circle"},{key:"learn",label:"Learn",icon:"graduation-cap"},{key:"been-to",label:"Been to",icon:"globe"},{key:"office",label:"Projects",icon:"briefcase",ownerOnly:!0},{key:"publisher",label:"Publisher",icon:"megaphone",ownerOnly:!0},{key:"newsroom",label:"The office",icon:"newspaper",ownerOnly:!0},{key:"canvas",label:"Notes",icon:"file-text"},{key:"members",label:"Members",icon:"users",ownerOnly:!0},{key:"notify",label:"Notifications",icon:"bell"},{key:"tools",label:"Tools",icon:"layout-grid"}],be={"been-to":"personal",goals:"personal",grocery:"personal",finance:"personal",circle:"personal",learn:"personal",office:"studio",publisher:"studio",newsroom:"studio",canvas:"studio",members:"workspace",notify:"workspace",tools:"workspace",inbox:"personal"},ub={"been-to":"var(--nsc-teal)",goals:"#3b82f6",grocery:"#3b82f6",finance:"#3b82f6",circle:"#3b82f6",learn:"#3b82f6",office:"#f43f5e",publisher:"#f43f5e",newsroom:"#f43f5e",canvas:"#f43f5e",members:"#10b981",notify:"#10b981",inbox:"#3b82f6",tools:"var(--ink)"};let A=class extends T{constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.themeMode="auto",this.themeTimer=null,this.menuOpen=!1,this.toolSwitcherOpen=!1,this.accountPortal=null,this.accountAnchor=null,this.accountUp=!1,this.navTooltip=null,this.navTooltipAnchor=null,this.showNavTooltip=t=>{if(t instanceof PointerEvent&&t.pointerType!=="mouse")return;const e=t.target.closest("button");if(!e?.closest(".mana-sidebar.is-collapsed")||this.menuOpen)return;const i=e.getAttribute("aria-label");if(!i||this.navTooltipAnchor===e)return;this.hideNavTooltip();const s=document.createElement("div");s.id="mana-nav-tooltip",s.className="mana-nav-tooltip",s.setAttribute("role","tooltip"),s.textContent=i,document.body.appendChild(s),this.navTooltip=s,this.navTooltipAnchor=e,e.setAttribute("aria-describedby",`${e.getAttribute("aria-describedby")||""} ${s.id}`.trim());const n=e.getBoundingClientRect(),o=s.getBoundingClientRect();s.style.left=`${Math.max(8,Math.min(n.right+8,window.innerWidth-o.width-8))}px`,s.style.top=`${Math.max(8,Math.min(n.top+(n.height-o.height)/2,window.innerHeight-o.height-8))}px`},this.leaveNavTooltip=t=>{t.relatedTarget instanceof Node&&this.navTooltipAnchor?.contains(t.relatedTarget)||this.hideNavTooltip()},this.hideNavTooltip=()=>{if(this.navTooltipAnchor){const t=(this.navTooltipAnchor.getAttribute("aria-describedby")||"").split(/\s+/).filter(e=>e&&e!=="mana-nav-tooltip");t.length?this.navTooltipAnchor.setAttribute("aria-describedby",t.join(" ")):this.navTooltipAnchor.removeAttribute("aria-describedby")}this.navTooltip?.remove(),this.navTooltip=null,this.navTooltipAnchor=null},this.closeAccount=()=>{this.menuOpen=!1,this.accountPortal&&(xt(c,this.accountPortal),this.accountPortal.remove(),this.accountPortal=null)},this.onShellKey=t=>{if((t.metaKey||t.ctrlKey)&&(t.key==="k"||t.key==="K")){t.preventDefault(),this.searchOpen=!this.searchOpen;return}if(t.key==="Escape"){if(this.hideNavTooltip(),this.drawerOpen){this.drawerOpen=!1;return}this.menuOpen&&(this.closeAccount(),this.accountAnchor?.focus())}},this.onAccountOutside=t=>{this.menuOpen&&!t.composedPath().includes(this.accountAnchor)&&!t.composedPath().includes(this.accountPortal)&&this.closeAccount()},this.railCollapsed=localStorage.getItem("cockpit.rail_collapsed")==="1",this.searchOpen=!1,this.drawerOpen=!1,this.sidebarWidth=A.loadSidebarWidth(),this.mobileTab="ops",this.demoHintDismissed=localStorage.getItem("mana.hint.reset_seen")==="1",this.navOrder=A.loadNavOrder(),this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.navDragAxis="y",this.navPress=null,this.justNavDragged=!1,this.orderedNavKeys=[],this.me=null,this.toolRoute=ki(location.hash),this.splitPct=A.INITIAL_SPLIT,this.dragStartX=0,this.dragStartPct=A.DEFAULT_SPLIT,this.splitByMode={},this.openedPane=null,this.cacheOpenId=0,this.paneEpoch=0,this.onCacheStale=t=>{t.detail?.openId!==this.cacheOpenId||!this.openedPane||(this.cacheOpenId=on(this.openedPane),this.paneEpoch++)},this.onAgentFollow=t=>{t.detail?.stay||this.standaloneTool&&this.standaloneTool!=="goals"||f.getState().rightPaneMode!=="goals"&&this.setRightPaneMode("goals")},this.onHashChange=()=>{if(this.dismissSwitcher?.(),this.toolRoute=ki(location.hash),this.toolRoute){const t=f.getState();t.rightPaneMode!==this.toolRoute.mode&&t.setRightPaneMode(this.toolRoute.mode),this.mobileTab="ops"}},this.rowNav=new Tc(this,{selector:"[data-row-key]",getKey:()=>f.getState().focusedRowKey,setKey:t=>f.getState().setFocusedRowKey(t),onToggle:t=>{const[e,i]=t.split(":"),s=Number(i);if(!Number.isFinite(s))return;const n=f.getState();if(e==="kr"){const o=n.goals.flatMap(a=>a.keyResults??[]).find(a=>a.id===s);o&&n.updateKeyResult(s,{done:!o.done})}else if(e==="commit"){const o=n.commitments.find(a=>a.id===s);o&&n.updateCommitment(s,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const t=f.getState();t.loadThreads(),t.currentThreadId!=null&&t.loadMessages(t.currentThreadId),t.loadGoals(),t.loadCommitments(),t.loadNotifications()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=t=>{if(t.button===0){t.preventDefault();try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}this.dragStartX=t.clientX,this.dragStartPct=this.splitPct,window.addEventListener("pointermove",this.onDividerMove),window.addEventListener("pointerup",this.onDividerUp),window.addEventListener("pointercancel",this.onDividerUp),document.body.classList.add("mana-dragging-panes"),document.body.style.userSelect="none"}},this.onDividerMove=t=>{const e=this.querySelector("main");if(!e)return;const i=e.getBoundingClientRect(),s=i.width;if(s<=0||Math.abs(t.clientX-this.dragStartX)<=3)return;const n=Math.min(40,A.MIN_PANE_PX/s*100),o=(t.clientX-i.left)/s*100;o<n/2?this.splitPct=0:o>100-n/2?this.splitPct=100:this.splitPct=Math.max(n,Math.min(100-n,o))},this.onDividerUp=()=>{window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.saveSplit()},this.onThreadOpen=async t=>{this.drawerOpen=!1;const{id:e,tool:i}=t.detail,s=i;s&&Ae.some(n=>n.key===s)&&this.canOpenPane(s)&&s!==f.getState().rightPaneMode&&this.setRightPaneMode(s),await this.revealChat(),await f.getState().selectThread(e)},this.onRevealChat=()=>{this.revealChat()},this.onSidebarResizeDown=t=>{t.preventDefault();const e=t.clientX,i=this.sidebarWidth,s=o=>{this.sidebarWidth=Math.max(A.SIDEBAR_MIN,Math.min(A.SIDEBAR_MAX,i+o.clientX-e))},n=()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),document.body.style.userSelect="",document.body.style.cursor="";try{localStorage.setItem("cockpit.sidebar_width",String(this.sidebarWidth))}catch{}};document.body.style.userSelect="none",document.body.style.cursor="col-resize",window.addEventListener("pointermove",s),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n)},this.toggleRail=()=>{this.railCollapsed=!this.railCollapsed;try{localStorage.setItem("cockpit.rail_collapsed",this.railCollapsed?"1":"0")}catch{}},this.dismissDemoHint=()=>{try{localStorage.setItem("mana.hint.reset_seen","1")}catch{}this.demoHintDismissed=!0},this.showToolSwitcher=t=>{if(this.toolSwitcherOpen){this.dismissSwitcher?.();return}this.closeAccount();const e=f.getState().rightPaneMode;this.toolSwitcherOpen=!0,this.dismissSwitcher=cb({anchor:t.currentTarget,entries:f.getState().tools.filter(i=>i.type!=="view"||i.panel).map(i=>{const s=Va(i);return{label:i.label||i.name,icon:i.icon||"layout-grid",href:s||i.target,external:!s,current:this.mobileTab!=="chat"&&i.name===e}}),onSelect:i=>{i.external||(this.mobileTab="ops")},onClose:()=>{this.toolSwitcherOpen=!1,this.dismissSwitcher=void 0}})},this.onNavPointerDown=(t,e,i)=>{t.pointerType==="mouse"&&t.button!==0||(this.navPress={key:e,axis:i,x:t.clientX,y:t.clientY},window.addEventListener("pointermove",this.onNavPointerMove),window.addEventListener("pointerup",this.onNavPointerUp))},this.onNavPointerMove=t=>{if(this.navPress){if(!this.navDragKey){const e=this.navPress.axis==="y"?Math.abs(t.clientY-this.navPress.y):Math.abs(t.clientX-this.navPress.x),i=this.navPress.axis==="y"?Math.abs(t.clientX-this.navPress.x):Math.abs(t.clientY-this.navPress.y);if(e>6&&e>=i)this.navDragKey=this.navPress.key,this.navDragAxis=this.navPress.axis;else return}this.onNavDragMove(t)}},this.onNavPointerUp=()=>{window.removeEventListener("pointermove",this.onNavPointerMove),window.removeEventListener("pointerup",this.onNavPointerUp),this.navPress=null,this.navDragKey&&(this.justNavDragged=!0,this.endNavDrag(),setTimeout(()=>{this.justNavDragged=!1},50))}}static loadSidebarWidth(){const t=Number(localStorage.getItem("cockpit.sidebar_width"));return Number.isFinite(t)&&t>0?Math.max(A.SIDEBAR_MIN,Math.min(A.SIDEBAR_MAX,t)):240}static loadNavOrder(){try{const t=JSON.parse(localStorage.getItem("cockpit.nav_order")||"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}get standaloneTool(){return this.toolRoute?.standalone?this.toolRoute.mode:null}connectedCallback(){super.connectedCallback();const t=f.getState();if(!location.hash){const e=matchMedia("(max-width: 1023px)").matches?"tools":t.rightPaneMode;history.replaceState(null,"",cn(e)),this.toolRoute=ki(location.hash)}this.toolRoute&&t.setRightPaneMode(this.toolRoute.mode),t.loadSettings().then(()=>this.applyTheme()),t.loadThreads(),t.loadTools(),t.loadNotifications(),this.notifTimer=setInterval(()=>void f.getState().loadNotifications(),6e4),this.fetchNavOrder(),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e&&(this.me=e),e?.env==="dev"&&Lt(()=>import("./dev-marker-JvOCqt4R.js"),[]).then(i=>i.showDevMarker())}).catch(()=>{}),this.unsubSettings=j(this,f,e=>e.settings),this.unsubRightPaneMode=f.subscribe((e,i)=>{if(e.rightPaneMode!==i.rightPaneMode){if(this.toolRoute?.mode!==e.rightPaneMode){const s=cn(e.rightPaneMode);location.hash!==s&&history.pushState(null,"",s),this.toolRoute=ki(s)}this.requestUpdate()}}),this.unsubTools=j(this,f,e=>e.tools),this.unsubNotif=j(this,f,e=>e.notificationsUnread),window.addEventListener("settings-close",this.onSettingsClose),document.addEventListener("keydown",this.onShellKey),document.addEventListener("mana-reveal-chat",this.onRevealChat),document.addEventListener("pointerdown",this.onAccountOutside),document.addEventListener("scroll",this.closeAccount,!0),window.addEventListener("resize",this.closeAccount),document.addEventListener("scroll",this.hideNavTooltip,!0),window.addEventListener("resize",this.hideNavTooltip),this.loadSplits(),this.splitPct=this.splitFor(f.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible),window.addEventListener("hashchange",this.onHashChange),document.addEventListener("mana-agent-follow",this.onAgentFollow),window.addEventListener("mana-cache-stale",this.onCacheStale)}canOpenPane(t){const e=this.me?.role==="owner";return Mc(t,e)&&(!f.getState().tools.find(i=>i.name===t)?.ownerOnly||e)}disconnectedCallback(){super.disconnectedCallback(),this.themeTimer&&clearTimeout(this.themeTimer),this.unsubSettings?.(),this.unsubRightPaneMode?.(),this.unsubTools?.(),this.unsubNotif?.(),this.notifTimer&&clearInterval(this.notifTimer),Sf(),document.removeEventListener("mana-agent-follow",this.onAgentFollow),window.removeEventListener("mana-cache-stale",this.onCacheStale),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("keydown",this.onShellKey),document.removeEventListener("mana-reveal-chat",this.onRevealChat),document.removeEventListener("pointerdown",this.onAccountOutside),document.removeEventListener("scroll",this.closeAccount,!0),window.removeEventListener("resize",this.closeAccount),document.removeEventListener("scroll",this.hideNavTooltip,!0),window.removeEventListener("resize",this.hideNavTooltip),this.hideNavTooltip(),this.closeAccount(),this.dismissSwitcher?.(),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),window.removeEventListener("hashchange",this.onHashChange),window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll(),this.menuOpen&&this.paintAccountMenu(),(!this.railCollapsed||!this.navTooltipAnchor?.isConnected)&&this.hideNavTooltip()}clampSplit(t){return Math.max(0,Math.min(100,t))}get chatCollapsed(){return this.splitPct<=0}get opsCollapsed(){return this.splitPct>=100}splitFor(t){return this.splitByMode[t]??this.legacySplit??A.INITIAL_SPLIT}loadSplits(){try{const t=localStorage.getItem(A.SPLITS_KEY);if(t){const i=JSON.parse(t);for(const[s,n]of Object.entries(i))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[s]=this.clampSplit(n));return}return}catch{}}saveSplit(){const t=f.getState().rightPaneMode;this.splitByMode[t]=this.splitPct;try{localStorage.setItem(A.SPLITS_KEY,JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const t=this.querySelector("#ops-scroll");return t===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=t,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const t=this.ensureOpsListener(),e=f.getState().rightPaneMode;if(e===this.renderedOpsMode&&!t)return;const i=e!==this.renderedOpsMode;if(this.renderedOpsMode=e,i){const o=this.splitFor(e);o!==this.splitPct&&(this.splitPct=o)}const s=this.opsEl;if(!s)return;const n=this.opsScroll[e]??0;s.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===s&&(s.scrollTop=n)})}applyTheme(){const t=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),e=f.getState().settings[_i]??t??Oc(),i=e==="dark"?"dark":e==="light"?"light":"auto",s=qc(i),n=s?"dark":"light";i!==this.themeMode&&(this.themeMode=i),n!==this.theme&&(this.theme=n),document.documentElement.dataset.theme=n;try{localStorage.setItem(_i,i),localStorage.setItem(Ic,s?"1":"0")}catch{}if(this.themeTimer&&(clearTimeout(this.themeTimer),this.themeTimer=null),i==="auto"){const o=Kc(),a=o?Math.min(Math.max(o.getTime()-Date.now()+1e3,1e3),360*60*1e3):3600*1e3;this.themeTimer=setTimeout(()=>this.applyTheme(),a)}}openSettings(){this.settingsOpen=!0,this.closeAccount(),this.dismissSwitcher?.()}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(t){!t.dataTransfer||!Array.from(t.dataTransfer.items).some(i=>i.kind==="file")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}onChatDrop(t){const e=Array.from(t.dataTransfer?.files??[]).filter(i=>i.type.startsWith("image/")||i.type==="application/pdf"||/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i.test(i.name));e.length&&(t.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:e},bubbles:!0,composed:!0})))}setThemeMode(t){try{localStorage.setItem(_i,t)}catch{}f.getState().setSetting(_i,t),this.themeMode=t,this.applyTheme()}renderRightPaneContent(t){switch(t){case"goals":return r`
          <div class="w-full max-w-5xl mx-auto flex flex-col flex-1">
            <div class="goals-workspace mana-card overflow-clip flex-1 flex flex-col">
              <goals-metrics></goals-metrics>
              <planner-tabs .showMeetings=${this.me?.role==="owner"}></planner-tabs>
            </div>
          </div>
        `;case"canvas":return r`<companion-workspace class="flex flex-col flex-1 min-h-0"></companion-workspace>`;case"grocery":return r`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"inbox":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return r`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return r`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`;case"been-to":return r`<been-to-loader class="flex flex-col flex-1 min-h-0"></been-to-loader>`;case"learn":return r`<learn-section class="flex flex-col flex-1 min-h-0"></learn-section>`;case"members":return r`<members-section class="flex flex-col flex-1 min-h-0"></members-section>`;case"publisher":return r`<publisher-section class="flex flex-col flex-1 min-h-0"
          .chatOpen=${f.getState().settings["cockpit.chat_hidden"]!=="1"&&!this.chatCollapsed}></publisher-section>`;case"newsroom":return r`<newsroom-loader class="flex flex-col flex-1 min-h-0"></newsroom-loader>`;case"tools":return r`<tools-launcher class="flex flex-col flex-1 min-h-0"></tools-launcher>`;case"notify":return r`<notifications-section class="flex flex-col flex-1 min-h-0"></notifications-section>`}}async revealChat(){this.mobileTab="chat",await this.updateComplete,this.chatCollapsed&&(this.splitPct=A.DEFAULT_SPLIT,this.saveSplit(),await this.updateComplete)}toggleAccount(t,e){if(this.menuOpen){this.closeAccount();return}this.accountAnchor=t.currentTarget,this.accountUp=e,this.menuOpen=!0,this.paintAccountMenu(),this.accountPortal?.querySelector("button")?.focus()}paintAccountMenu(){if(!this.accountAnchor)return;this.accountPortal||(this.accountPortal=document.createElement("div"),this.accountPortal.className="mana-account-menu",document.body.appendChild(this.accountPortal));const t=this.accountAnchor.getBoundingClientRect(),e=Math.min(224,window.innerWidth-16);xt(r`
      <button type="button" role="menuitem" class="mana-account-settings" @click=${()=>this.openSettings()}>
        <sc-icon name="lucide-settings"></sc-icon>Settings
      </button>
      <div class="mana-appearance-label">Appearance</div>
      <div class="mana-appearance" role="radiogroup" aria-label="Appearance">
        ${[["auto","sunrise","Auto"],["light","sun","Light"],["dark","moon","Dark"]].map(([s,n,o])=>r`
          <button type="button" role="radio" aria-checked=${this.themeMode===s} aria-label=${o}
            @click=${()=>this.setThemeMode(s)}>
            <sc-icon name="lucide-${n}"></sc-icon><span>${o}</span>
          </button>`)}
      </div>`,this.accountPortal),this.accountPortal.setAttribute("role","menu"),this.accountPortal.setAttribute("aria-label","Account");const i=this.accountPortal.getBoundingClientRect().height;this.accountPortal.style.width=`${e}px`,this.accountPortal.style.left=`${Math.max(8,Math.min(t.left,window.innerWidth-e-8))}px`,this.accountPortal.style.top=`${Math.max(8,Math.min(this.accountUp?t.top-i-8:t.bottom+8,window.innerHeight-i-8))}px`}renderAccount(t=!1,e=!1){const i=f.getState().settings,s=this.me,n=(s?i[`user:${s.login}:profile_pic_url`]:"")||(s?.role==="owner"?i["cockpit.profile_pic_url"]:"")||s?.profilePic,o=[s?.displayName,s?.login].filter(Boolean).join(" · ")||"Account",a=s?.login.indexOf("@")??-1,l=s?.displayName.trim().split(/\s+/).map(h=>h[0]).slice(0,2).join("").toUpperCase()||"?";return r`<button type="button" class="mana-account ${e?"mana-account-expanded":""}"
      aria-label="Account menu" title=${o} aria-haspopup="menu" aria-expanded=${this.menuOpen}
      @click=${h=>this.toggleAccount(h,t)}>
      <span class="mana-avatar ${s?.env==="dev"&&!e?"mana-avatar-dev":""}">${n?r`<img src=${n} alt="" referrerpolicy="no-referrer" @error=${h=>{h.target.hidden=!0}} />`:c}<span>${l}</span></span>
      ${e?r`<span class="mana-account-identity"><span>${s?.displayName||"Account"}${s?.env==="dev"?r`<span class="mana-dev-pill" title="Local dev copy, not production">DEV</span>`:c}</span>${s?.login,c}</span><sc-icon class="mana-account-chevrons" name="lucide-chevrons-up-down"></sc-icon>`:c}
    </button>`}renderRail(t,e){const i=this.railCollapsed&&!this.drawerOpen,s=f.getState().notificationsUnread;return r`
      ${this.drawerOpen?r`<div class="mana-drawer-backdrop" aria-hidden="true" @click=${()=>{this.drawerOpen=!1}}></div>`:c}
      <aside class="mana-sidebar ${i?"is-collapsed":""} ${this.drawerOpen?"is-drawer-open":""}" aria-label="Mana sidebar"
        style=${i?c:`width:${this.sidebarWidth}px`}
        @pointerover=${this.showNavTooltip} @pointerout=${this.leaveNavTooltip}
        @focusin=${this.showNavTooltip} @focusout=${this.leaveNavTooltip}
        @pointerdown=${this.hideNavTooltip} @click=${this.hideNavTooltip}>
        <div class="mana-sidebar-header">
          ${i?c:r`<button type="button" class="mana-sidebar-toggle mana-sidebar-search" aria-label="Search chats" title="Search chats (⌘K)" @click=${()=>{this.drawerOpen=!1,this.searchOpen=!0}}>
              <sc-icon name="lucide-search"></sc-icon>
            </button>
            <span class="flex-1"></span>`}
          ${this.drawerOpen?r`<button type="button" class="mana-sidebar-toggle" aria-label="Close menu" @click=${()=>{this.drawerOpen=!1}}>
                <sc-icon name="lucide-x"></sc-icon>
              </button>`:r`<button type="button" class="mana-sidebar-toggle mana-sidebar-collapse" aria-label=${i?"Expand sidebar":"Collapse sidebar"} aria-expanded=${!i} @click=${this.toggleRail}>
                <sc-icon name=${i?"lucide-chevron-right":"lucide-chevron-left"}></sc-icon>
              </button>`}
        </div>
        <div class="mana-sidebar-scroll">
        <nav class="mana-sidebar-nav" aria-label="Tools">
          ${t.map((n,o)=>{const a=e===n.key,l=be[n.key];return r`
              ${o>0&&l!==be[t[o-1].key]?r`<div class="mana-sidebar-rule" aria-hidden="true"></div>`:c}
              <button type="button" data-nav-item=${n.key} class="mana-sidebar-item ${a?"is-active":""} ${this.navDragKey===n.key?"opacity-40":""} ${this.navDropClass(n.key)}"
                style="--nav-hue:${ub[n.key]};touch-action:pan-y;" aria-label=${n.label} aria-current=${a?"page":c}
                @pointerdown=${h=>this.onNavPointerDown(h,n.key,"y")}
                @click=${()=>this.onNavClick(n.key)}>
                <sc-icon name="lucide-${n.icon}"></sc-icon>
                ${i?c:r`<span class="mana-sidebar-label">${n.label}</span>`}
                ${n.key==="notify"&&s>0?r`<span class="mana-sidebar-dot" role="status" aria-label=${`${s} unread notifications`}></span>`:c}
              </button>`})}
        </nav>
        ${i?c:r`<sidebar-threads .tools=${Ae}></sidebar-threads>`}
        </div>
        <div class="mana-sidebar-account">${this.renderAccount(!0,!i)}</div>
        ${i?c:r`<div class="mana-sidebar-resize" role="separator" aria-orientation="vertical"
          aria-label="Resize sidebar" title="Drag to resize" @pointerdown=${this.onSidebarResizeDown}></div>`}
      </aside>`}setRightPaneMode(t){const e=cn(t);location.hash!==e&&history.pushState(null,"",e),this.toolRoute=ki(e),f.getState().setRightPaneMode(t)}renderBreadcrumb(t,e){const i=Ae.find(s=>s.key===t)?.label||"Projects";return r`<nav aria-label="Breadcrumb" class="min-w-0">
      <ol class="flex items-center gap-2 min-w-0 text-sm sm:text-base">
        ${e?r`<li class="shrink-0"><a href="#/tools" class="text-muted hover:text-ink rounded focus-visible:outline-accent">Tools</a></li>
          <li aria-hidden="true" class="shrink-0 text-muted"><sc-icon name="lucide-chevron-right" class="w-3.5 h-3.5"></sc-icon></li>`:c}
        <li class="min-w-0 truncate font-medium text-ink" aria-current="page">${i}</li>
      </ol>
    </nav>`}renderMobileNavigation(t,e){const i=t==="tools"&&!e,s=e?"Chat":Ae.find(n=>n.key===t)?.label||"Tools";return r`<nav aria-label="App navigation" class="flex items-center min-w-0 text-sm">
      ${i?r`<span class="font-medium px-2">Tools</span>`:r`
        <a href="#/tools" @click=${()=>{this.mobileTab="ops"}} aria-label="All tools" class="min-h-11 inline-flex items-center px-2 rounded-lg text-muted hover:bg-hover focus-visible:outline-accent">Tools</a>
        <sc-icon name="lucide-chevron-right" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        <button type="button" aria-label=${`Switch app, current: ${s}`} aria-haspopup="menu" aria-expanded=${this.toolSwitcherOpen}
          class="min-h-11 flex items-center gap-1 min-w-0 px-2 rounded-lg font-medium hover:bg-hover focus-visible:outline-accent" @click=${this.showToolSwitcher}>
          <span class="truncate">${s}</span><sc-icon name="lucide-chevron-down" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        </button>`}
    </nav>`}orderModes(t){const e=new Map(this.navOrder.map((s,n)=>[s,n])),i=["personal","studio","workspace"];return[...t].sort((s,n)=>{const o=i.indexOf(be[s.key])-i.indexOf(be[n.key]);if(o)return o;const a=e.get(s.key),l=e.get(n.key);return a!==void 0&&l!==void 0?a-l:a!==void 0?-1:l!==void 0?1:0})}onNavDragMove(t){const e=this.renderRoot.querySelectorAll("[data-nav-item]");for(const i of e){const s=i.getBoundingClientRect();if(s.width===0&&s.height===0||!(this.navDragAxis==="y"?t.clientY>=s.top&&t.clientY<=s.bottom:t.clientX>=s.left&&t.clientX<=s.right))continue;const o=i.dataset.navItem;if(be[o]!==be[this.navDragKey])continue;const a=this.navDragAxis==="y"?t.clientY<s.top+s.height/2?"before":"after":t.clientX<s.left+s.width/2?"before":"after";(this.navDragOverKey!==o||this.navDragPos!==a)&&(this.navDragOverKey=o,this.navDragPos=a,this.requestUpdate());return}}endNavDrag(){const t=this.navDragKey,e=this.navDragOverKey,i=this.navDragPos;if(this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.requestUpdate(),!t||!e||t===e||be[t]!==be[e])return;const s=[...this.orderedNavKeys],n=s.indexOf(t);if(n<0)return;s.splice(n,1);let o=s.indexOf(e);o<0||(i==="after"&&(o+=1),s.splice(o,0,t),this.navOrder=s,localStorage.setItem("cockpit.nav_order",JSON.stringify(s)),fetch("/api/nav-order",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:s})}).catch(()=>{}))}async fetchNavOrder(){try{const t=await fetch("/api/nav-order",{credentials:"include"});if(!t.ok)return;const e=await t.json();Array.isArray(e.order)&&e.order.length&&(this.navOrder=e.order,localStorage.setItem("cockpit.nav_order",JSON.stringify(e.order)))}catch{}}onNavClick(t){this.justNavDragged||(this.setRightPaneMode(t),this.drawerOpen=!1,this.mobileTab="ops")}navDropClass(t){return this.navDragOverKey!==t?"":this.navDragAxis==="y"?this.navDragPos==="before"?"border-t-2 border-t-accent":"border-b-2 border-b-accent":this.navDragPos==="before"?"border-l-2 border-l-accent":"border-r-2 border-r-accent"}onNotifNavigate(t){const e=t.detail,i={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher",mana:"canvas"},s=e?.mode,n=s??(e?.persona?i[e.persona]:void 0);n&&(!(n==="office"||n==="inbox"||n==="members"||n==="publisher")||this.me?.role==="owner")&&n!==f.getState().rightPaneMode&&this.setRightPaneMode(n),this.mobileTab=s?"ops":"chat"}render(){if(this.settingsOpen)return this.openedPane&&(this.openedPane=null,this.cacheOpenId=on()),r`<settings-page></settings-page>`;const t=f.getState().settings["cockpit.chat_hidden"]==="1",e=!t&&this.mobileTab==="chat",i=this.me?.role==="owner",s=f.getState().tools,n=Z=>s.find(Ft=>Ft.name===Z)?.placement==="standalone",o=this.orderModes(Ae.filter(Z=>(!Z.ownerOnly||i)&&!n(Z.key)));this.orderedNavKeys=o.map(Z=>Z.key);const a=f.getState().rightPaneMode,l=this.toolRoute?.mode??a,h=this.canOpenPane(l),u=h?l:"tools";u!==this.openedPane&&(this.openedPane=u,this.cacheOpenId=on());const p=h&&this.toolRoute?.standalone?u:null,m=u!=="tools"&&!!(this.toolRoute?.fromTools||n(u)),g=["been-to","grocery","office","circle","learn","members","publisher","newsroom","canvas","notify","tools"].includes(u),y=["canvas","notify","newsroom","tools","grocery","circle","been-to","office"].includes(u),D=y||u==="publisher"||u==="goals",x=y||u==="publisher",N=!this.demoHintDismissed&&!p;return r`
      <div class="mana-shell h-[100dvh] overflow-hidden flex flex-col bg-bg text-ink font-sans" @notif-navigate=${this.onNotifNavigate}
        @thread-open=${this.onThreadOpen} @search-close=${()=>{this.searchOpen=!1}}>
        ${this.searchOpen?r`<thread-search .tools=${Ae}></thread-search>`:c}
        ${N?r`<div class="shrink-0 flex items-center gap-3 px-4 py-2.5 text-sm bg-surface border-b border-line">
              <sc-icon name="lucide-sparkles" class="w-4 h-4 shrink-0 text-accent"></sc-icon>
              <span class="flex-1 min-w-0 text-muted">Live demo. Edits stay in this browser. Start fresh from <span class="text-ink font-medium">Settings → Reset demo</span>.</span>
              <button type="button" class="shrink-0 w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover" aria-label="Dismiss the demo hint" @click=${this.dismissDemoHint}>✕</button>
            </div>`:c}
        <div class="flex-1 flex flex-row min-h-0">
        ${p?c:this.renderRail(o,m?"tools":u)}
        <div class="flex-1 flex flex-col min-w-0 min-h-0">
        <header
          class="flex items-center gap-2 lg:gap-0 min-h-12 shrink-0 px-3 sm:px-4 lg:px-0 py-2 lg:py-0 ${D?"lg:hidden":""}"
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
          <div class="lg:hidden min-w-0">${e?r`<chat-title-bar class="min-w-0 flex" .tools=${Ae}></chat-title-bar>`:this.renderMobileNavigation(u,e)}</div>
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
            class="${e?"hidden":"flex"} ${this.opsCollapsed?"lg:hidden":"lg:flex"} flex-col min-h-0 ${g?"overflow-hidden":"overflow-y-auto px-3 py-4 sm:p-5 is-page"} ${y?"mana-contained-host":""} mana-main-card max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
            style=${`--split-ops: ${100-this.splitPct}%; scrollbar-gutter: ${u==="been-to"?"auto":"stable"};`}
          >
            <div
              class="w-full ${x?"":"max-w-5xl mx-auto"} ${y?"mana-contained-surface":""} ${g?"flex flex-col flex-1 min-h-0":u==="goals"?"flex flex-col flex-1":"space-y-6"}"
            >
              ${qa(this.paneEpoch,this.renderRightPaneContent(u))}
            </div>
          </section>
        </main>

        <voice-controller></voice-controller>
        ${i?r`<mana-companion .owner=${!0} avatar=${"/office-avatars/mana.svg"}
          style=${u==="newsroom"?"display: none":""}></mana-companion>`:c}
        </div>
        </div>
      </div>
    `}};A.SIDEBAR_MIN=184;A.SIDEBAR_MAX=420;A.DEFAULT_SPLIT=50;A.MIN_PANE_PX=280;A.INITIAL_SPLIT=0;A.SPLITS_KEY="mana.demo.split_pct_by_mode";nt([d()],A.prototype,"settingsOpen",2);nt([d()],A.prototype,"theme",2);nt([d()],A.prototype,"themeMode",2);nt([d()],A.prototype,"menuOpen",2);nt([d()],A.prototype,"toolSwitcherOpen",2);nt([d()],A.prototype,"railCollapsed",2);nt([d()],A.prototype,"searchOpen",2);nt([d()],A.prototype,"drawerOpen",2);nt([d()],A.prototype,"sidebarWidth",2);nt([d()],A.prototype,"mobileTab",2);nt([d()],A.prototype,"demoHintDismissed",2);nt([d()],A.prototype,"navOrder",2);nt([d()],A.prototype,"navDragKey",2);nt([d()],A.prototype,"navDragOverKey",2);nt([d()],A.prototype,"me",2);nt([d()],A.prototype,"toolRoute",2);nt([d()],A.prototype,"splitPct",2);nt([d()],A.prototype,"paneEpoch",2);A=nt([w("mana-app")],A);const bb=Object.freeze(Object.defineProperty({__proto__:null,get ManaApp(){return A}},Symbol.toStringTag,{value:"Module"}));export{T,f as a,fb as b,gb as c,V as e,qa as i,bb as m,za as p,d as r};
