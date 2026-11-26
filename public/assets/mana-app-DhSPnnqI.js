const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-D2emgc0r.js","assets/db-DHWx8Fue.js","assets/notes-media-CGSOjJZh.js","assets/index-gr7LYaWk.js","assets/index-KUmBw_H1.css","assets/models-CLMVJSUQ.js","assets/been-to-section-BLioEusA.js","assets/been-to-countries-XpOUTETI.js","assets/been-to-section-Dtzwgi1a.css","assets/newsroom-section-DWBYpc0P.js","assets/layout-EA_iF8da.js"])))=>i.map(i=>d[i]);
import{n as b,j as rc,e as Gi,i as Gs,A as c,c as Ie,t as w,b as r,o as W,_ as Le,f as yo,E as xo,d as Re,D as xe,g as Wt,L as Gt,a as ac,w as It,r as lc,p as an}from"./index-gr7LYaWk.js";import{e as xs,f as zn,d as cc,C as wo,b as dc,c as hc,D as qn,a as uc,n as pc,k as mc}from"./models-CLMVJSUQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fc=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(e,t){return(i,s,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return fc(i,s,{get(){return o(this)}})}}const gc="mana",li="kv";let Wo=null;function Ba(){return Wo??=new Promise((e,t)=>{const i=indexedDB.open(gc,1);i.onupgradeneeded=()=>{i.result.objectStoreNames.contains(li)||i.result.createObjectStore(li)},i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error),i.onblocked=()=>t(new Error("indexedDB blocked"))}),Wo}function bc(e){return new Promise((t,i)=>{e.oncomplete=()=>t(),e.onerror=()=>i(e.error),e.onabort=()=>i(e.error)})}async function vc(e){const i=(await Ba()).transaction(li,"readonly"),s=IDBKeyRange.bound(e,`${e}￿`),n=new Map;return await new Promise((o,a)=>{const l=i.objectStore(li).openCursor(s);l.onsuccess=()=>{const h=l.result;if(!h)return o();typeof h.value=="string"&&n.set(String(h.key),h.value),h.continue()},l.onerror=()=>a(l.error)}),n}const ws=new Map;let Ha=null;function Kn(e,t){ws.set(e,t),Ha??=setTimeout(()=>void yc(),50)}async function yc(){if(Ha=null,!ws.size)return;const e=[...ws];ws.clear();try{const i=(await Ba()).transaction(li,"readwrite"),s=i.objectStore(li);for(const[n,o]of e)o==null?s.delete(n):s.put(o,n);await bc(i)}catch{}}class xc{constructor(t){this.map=t}get length(){return this.map.size}key(t){let i=0;for(const s of this.map.keys())if(i++===t)return s;return null}getItem(t){return this.map.get(t)??null}setItem(t,i){this.map.set(t,i),Kn(t,i)}removeItem(t){this.map.delete(t)&&Kn(t,null)}}async function wc(e,t=[]){try{if(typeof indexedDB>"u")return null;const i=await vc(e);try{const s=[];for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);o&&(o.startsWith(e)||t.includes(o))&&s.push(o)}for(const n of s){const o=localStorage.getItem(n);o!=null&&!i.has(n)&&(i.set(n,o),Kn(n,o)),localStorage.removeItem(n)}}catch{}return new xc(i)}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:kc}=rc,Go=e=>e,mb=e=>e.strings===void 0,Vo=()=>document.createComment(""),ki=(e,t,i)=>{const s=e._$AA.parentNode,n=t===void 0?e._$AB:t._$AA;if(i===void 0){const o=s.insertBefore(Vo(),n),a=s.insertBefore(Vo(),n);i=new kc(o,a,e,e.options)}else{const o=i._$AB.nextSibling,a=i._$AM,l=a!==e;if(l){let h;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(h=e._$AU)!==a._$AU&&i._$AP(h)}if(o!==n||l){let h=i._$AA;for(;h!==o;){const u=Go(h).nextSibling;Go(s).insertBefore(h,n),h=u}}}return i},Dt=(e,t,i=e)=>(e._$AI(t,i),e),$c={},za=(e,t=$c)=>e._$AH=t,Sc=e=>e._$AH,ln=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qa=Gi(class extends Gs{constructor(){super(...arguments),this.key=c}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&(za(e),this.key=t),i}});class T extends Ie{createRenderRoot(){return this}}class Tc{constructor(t,i){this.onKeydown=s=>{const n=s.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=s.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const a=this.opts.keyAttr??"data-row-key",l=this.opts.scope?.()??document,h=Array.from(l.querySelectorAll(`[${a}]`));if(!h.length)return;const u=this.opts.getKey();if(n===" "||n==="Enter"){if(!u)return;const v=n===" "?this.opts.onToggle:this.opts.onEnter;if(!v)return;s.preventDefault(),v(u);return}const p=h.map(v=>v.getAttribute(a)).filter(v=>!!v),m=u?p.indexOf(u):-1,g=n==="ArrowDown"?m<0?0:Math.min(m+1,p.length-1):m<=0?0:m-1;if(p[g]&&p[g]!==u){s.preventDefault(),this.opts.setKey(p[g]);const v=p[g];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${a}="${CSS.escape(v)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=t,this.opts=i,t.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const Yo=e=>{let t;const i=new Set,s=(u,p)=>{const m=typeof u=="function"?u(t):u;if(!Object.is(m,t)){const g=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),i.forEach(v=>v(t,g))}},n=()=>t,l={setState:s,getState:n,getInitialState:()=>h,subscribe:u=>(i.add(u),()=>i.delete(u))},h=t=e(s,n,l);return l},Cc=(e=>e?Yo(e):Yo);class Ec extends Error{constructor(t,i,s){super(i),this.name="ApiError",this.status=t,this.body=s}}async function Wn(e){let t=null,i=`${e.status} ${e.statusText}`;try{if(t=await e.json(),t&&typeof t=="object"&&"error"in t){const s=t.error;typeof s=="string"&&(i=s)}}catch{}return new Ec(e.status,i,t)}const Dc=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;async function Vi(e,t){const i=await fetch(e,{...t,headers:{"content-type":"application/json","x-mana-client":Dc,...t?.headers||{}}});if(!i.ok)throw await Wn(i);const s=await i.text();return s?JSON.parse(s):void 0}function Y(e){return Vi(e,{method:"GET"})}function B(e,t,i){return Vi(e,{method:"POST",body:t===void 0?void 0:JSON.stringify(t),headers:i?{"x-mana-history-group":i}:void 0})}function at(e,t,i){return Vi(e,{method:"PATCH",body:t===void 0?void 0:JSON.stringify(t),headers:i?{"x-mana-history-group":i}:void 0})}function yt(e,t){return Vi(e,{method:"DELETE",headers:t?{"x-mana-history-group":t}:void 0})}const E={threads:{list:()=>Y("/api/threads").then(e=>e.threads),create:(e="chat",t)=>B("/api/threads",{kind:e,persona:t}),search:e=>Y(`/api/threads/search?q=${encodeURIComponent(e)}`).then(t=>t.threads),pin:(e,t)=>B(`/api/threads/${e}/pin`,{pinned:t}),rename:(e,t)=>at(`/api/threads/${e}`,{title:t}),remove:e=>yt(`/api/threads/${e}`)},messages:{list:e=>Y(`/api/threads/${e}/messages`).then(t=>t.messages)},northStars:{list:()=>Y("/api/north-stars").then(e=>e.northStars),create:e=>B("/api/north-stars",{title:e}),update:(e,t)=>at(`/api/north-stars/${e}`,t),archive:e=>yt(`/api/north-stars/${e}`),summary:e=>Y(`/api/north-stars/${e}/summary`)},goals:{list:(e=!1)=>Y(`/api/goals${e?"?include=archived":""}`),create:(e,t)=>B("/api/goals",e,t),update:(e,t,i)=>at(`/api/goals/${e}`,t,i),remove:(e,t=!1)=>yt(`/api/goals/${e}${t?"?permanent=true":""}`),summary:e=>Y(`/api/goals/${e}/summary`),events:e=>Y(`/api/goals/${e}/events`).then(t=>t.events)},keyResults:{create:(e,t,i)=>B(`/api/goals/${e}/key-results`,{title:t},i),update:(e,t,i)=>at(`/api/key-results/${e}`,t,i),move:(e,t)=>B(`/api/key-results/${e}/move`,{direction:t}),reorder:(e,t)=>B(`/api/key-results/${e}/reorder`,{targetIndex:t}),remove:e=>yt(`/api/key-results/${e}`)},commitments:{listForWeek:e=>Y(`/api/week${e?`?week=${encodeURIComponent(e)}`:""}`),create:e=>B("/api/commitments",e),update:(e,t)=>at(`/api/commitments/${e}`,t),remove:e=>yt(`/api/commitments/${e}`),reorder:(e,t)=>B(`/api/commitments/${e}/reorder`,{targetIndex:t}),carryOver:(e,t)=>B("/api/commitments/carry-over",{from:e,to:t})},settings:{list:()=>Y("/api/settings"),update:e=>at("/api/settings",e)},tools:{list:()=>Y("/api/tools").then(e=>e.tools),reorder:e=>B("/api/tools/order",{names:e}),setPlacement:(e,t,i)=>at(`/api/tools/${encodeURIComponent(e)}`,{placement:t,order:i})},agentDocs:{list:()=>Y("/api/agents").then(e=>e.files),read:e=>Y(`/api/agents/${encodeURIComponent(e)}`),save:(e,t)=>Vi(`/api/agents/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify({content:t})}),history:e=>Y(`/api/agents/${encodeURIComponent(e)}/history`).then(t=>t.history),at:(e,t)=>Y(`/api/agents/${encodeURIComponent(e)}/at/${t}`),restore:(e,t)=>B(`/api/agents/${encodeURIComponent(e)}/restore`,{sha:t}),reset:e=>B(`/api/agents/${encodeURIComponent(e)}/reset`,{})},canvas:{list:()=>Y("/api/canvas/files").then(e=>e.files),read:e=>Y(`/api/canvas/files/${encodeURIComponent(e)}`)},voice:{session:e=>B("/api/voice/session",e?{persona:e}:void 0),op:(e,t)=>B("/api/voice/op",{name:e,arguments:t}),transcript:e=>B("/api/voice/transcript",e),stt:async e=>{const t=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:e});if(!t.ok)throw await Wn(t);return t.json()},consult:e=>B("/api/voice/consult",e),tts:async e=>{const t=await fetch("/api/voice/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:e})});if(!t.ok)throw await Wn(t);return t.blob()}},uploads:{upload:(e,t=!1,i)=>B("/api/upload",{dataUrl:e,ephemeral:t,name:i})},state:()=>Y("/api/state"),notifications:{list:()=>Y("/api/notifications"),read:e=>B(`/api/notifications/${e}/read`),dismiss:e=>B(`/api/notifications/${e}/dismiss`),act:e=>B(`/api/notifications/${e}/act`),readAll:()=>B("/api/notifications/read-all"),dismissAll:()=>B("/api/notifications/dismiss-all"),mute:(e,t)=>B("/api/notifications/mute",{kind:e,enabled:t}),kinds:()=>Y("/api/notifications/kinds")}},Ac={"been-to":"house",goals:"house",canvas:"house",grocery:"house",office:"house",finance:"house",circle:"house",learn:"house",members:"house",publisher:"house",newsroom:"house",inbox:"house",tools:"house",notify:"house"},Qo={"been-to":"Been to",goals:"Goals",canvas:"Mana",grocery:"Shopping",office:"Projects",finance:"Finance",circle:"Circles",learn:"Learn",members:"Members",publisher:"Publisher",newsroom:"The office",inbox:"Inbox",tools:"Tools",notify:"Notifications"},Ka={house:"Workshop",mana:"Workshop","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Projects keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper","learn-coach":"Learn coach",publisher:"Publisher",companion:"Mana"};function Wa(e){if(e.currentThreadId!=null){const t=e.threads.find(i=>i.id===e.currentThreadId);if(t?.persona)return t.persona}return Ac[e.rightPaneMode]}function cn(){try{const e=localStorage.getItem("cockpit.right_pane_mode");if(e==="guests")return"members";if(e==="been-to"||e==="goals"||e==="canvas"||e==="grocery"||e==="office"||e==="finance"||e==="circle"||e==="learn"||e==="members"||e==="publisher"||e==="newsroom")return e}catch{}return"goals"}let Jo=0,At=0,dn=null;const f=Cc((e,t)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const i=await E.threads.list();e({threads:i})},initThreads(){return dn??=t().loadThreads().then(()=>{const i=t();if(i.currentThreadId==null){const s=i.threads.find(n=>n.persona==="house"&&n.closed_at==null);s&&i.selectThread(s.id)}}).catch(i=>{dn=null,console.warn("[threads] initial load failed",i)}),dn},async pinThread(i,s){const n=s?Math.floor(Date.now()/1e3):null,o=t().threads;e({threads:o.map(a=>a.id===i?{...a,pinned_at:n}:a)});try{await E.threads.pin(i,s)}catch(a){throw e({threads:o}),a}},async renameThread(i,s){const n=t().threads;e({threads:n.map(o=>o.id===i?{...o,title:s}:o)});try{await E.threads.rename(i,s)}catch(o){throw e({threads:n}),o}},async deleteThread(i){await E.threads.remove(i),e({threads:t().threads.filter(s=>s.id!==i)}),t().currentThreadId===i&&await t().selectThread(null)},async selectThread(i){e({currentThreadId:i,messages:[]}),i!=null&&await t().loadMessages(i)},async createThread(i){const s=i?.kind??"chat",n=i?.persona,o=await E.threads.create(s,n);return await t().loadThreads(),e({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(i){const s=await E.messages.list(i);e({messages:s})},northStars:[],async loadNorthStars(){e({northStars:await E.northStars.list()})},async createNorthStar(i){await E.northStars.create(i),await t().loadNorthStars()},async renameNorthStar(i,s){await E.northStars.update(i,{title:s}),await t().loadNorthStars()},async archiveNorthStar(i){await E.northStars.archive(i),await t().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:i,archivedCount:s}=await E.goals.list(t().includeArchivedGoals);e({goals:i,goalsArchivedCount:s})},async toggleArchivedGoals(i){e({includeArchivedGoals:i}),await t().loadGoals()},async createGoal(i){const s=crypto.randomUUID(),{id:n}=await E.goals.create({title:i.title,northStar:i.northStar??null,targetDate:i.targetDate??null},s);return(i.color!=null||i.symbol!=null)&&await E.goals.update(n,{color:i.color??null,symbol:i.symbol??null},s),await t().loadGoals(),n},async updateGoal(i,s){await E.goals.update(i,s),await t().loadGoals()},async deleteGoal(i,s=!1){await E.goals.remove(i,s),await t().loadGoals()},async addKeyResult(i,s,n){const o=crypto.randomUUID(),{id:a}=await E.keyResults.create(i,s,o);return n&&await E.keyResults.update(a,{targetDate:n},o),await t().loadGoals(),a},async updateKeyResult(i,s){const n=o=>({...o,...s.title!==void 0?{title:s.title}:{},...s.done!==void 0?{done:s.done?1:0}:{},...s.targetDate!==void 0?{target_date:s.targetDate}:{}});e({goals:t().goals.map(o=>o.keyResults.some(a=>a.id===i)?{...o,keyResults:o.keyResults.map(a=>a.id===i?n(a):a)}:o)});try{await E.keyResults.update(i,s)}finally{await t().loadGoals()}},async deleteKeyResult(i){await E.keyResults.remove(i),await t().loadGoals()},async moveKeyResult(i,s){await E.keyResults.move(i,s),await t().loadGoals()},async reorderKeyResult(i,s){await E.keyResults.reorder(i,s),await t().loadGoals()},currentWeek:null,commitments:[],async setWeek(i){e({currentWeek:i}),await t().loadCommitments(i)},async loadCommitments(i){const s=await E.commitments.listForWeek(i??t().currentWeek??void 0);e({commitments:s.commitments,currentWeek:s.week})},async createCommitment(i){await E.commitments.create({...i,week:i.week??t().currentWeek??void 0}),await t().loadCommitments()},async updateCommitment(i,s){const n=o=>({...o,...s.title!=null?{title:s.title}:{},...s.done!==void 0?{done:s.done?1:0}:{},...s.recurring!==void 0?{recurring:s.recurring?1:0}:{},...s.goalId!==void 0?{goal_id:s.goalId}:{},...s.keyResultId!==void 0?{key_result_id:s.keyResultId}:{}});e({commitments:t().commitments.map(o=>o.id===i?n(o):o)});try{await E.commitments.update(i,s)}finally{await t().loadCommitments()}},async deleteCommitment(i){await E.commitments.remove(i),await t().loadCommitments()},async reorderCommitment(i,s){await E.commitments.reorder(i,s),await t().loadCommitments()},settings:{},async loadSettings(){e({settings:await E.settings.list()})},async setSetting(i,s){const n=await E.settings.update({[i]:s});e({settings:n})},tools:[],async loadTools(){e({tools:await E.tools.list()})},async setToolPlacement(i,s){await E.tools.setPlacement(i,s),e({tools:t().tools.map(n=>n.name===i?{...n,placement:s}:n)})},async reorderTool(i,s){const n=t().tools,o=n.find(u=>u.name===i);if(!o||s===i)return;const a=n.filter(u=>u.name!==i),l=s===null?a.length:a.findIndex(u=>u.name===s);if(l<0||(a.splice(l,0,o),a.every((u,p)=>u.name===n[p]?.name)))return;const h=a.map((u,p)=>({...u,order:p}));try{await E.tools.reorder(h.map(u=>u.name)),e({tools:h})}catch(u){throw await t().loadTools().catch(()=>{}),u}},notifications:[],notificationsUnread:0,async loadNotifications(){const i=++Jo,s=At,{notifications:n,unread:o}=await E.notifications.list();i!==Jo||s!==At||e({notifications:n,notificationsUnread:o})},async markNotificationRead(i){At++;const s=t().notifications.map(o=>o.id===i&&o.read_at==null?{...o,read_at:Math.floor(Date.now()/1e3)}:o),n=t().notifications.some(o=>o.id===i&&o.read_at==null);e({notifications:s,notificationsUnread:Math.max(0,t().notificationsUnread-(n?1:0))}),await E.notifications.read(i),await t().loadNotifications()},async dismissNotification(i){At++;const s=t().notifications.some(o=>o.id===i&&o.read_at==null),n=t().notifications.filter(o=>o.id!==i);e({notifications:n,notificationsUnread:Math.max(0,t().notificationsUnread-(s?1:0))}),await E.notifications.dismiss(i),await t().loadNotifications()},async actOnNotification(i){At++;const s=t().notifications.some(a=>a.id===i&&a.read_at==null),n=t().notifications.filter(a=>a.id!==i);e({notifications:n,notificationsUnread:Math.max(0,t().notificationsUnread-(s?1:0))});const o=await E.notifications.act(i);return await t().loadNotifications(),o},async markAllNotificationsRead(){At++;const i=Math.floor(Date.now()/1e3);e({notifications:t().notifications.map(s=>s.read_at==null?{...s,read_at:i}:s),notificationsUnread:0}),await E.notifications.readAll(),await t().loadNotifications()},async clearAllNotifications(){At++,e({notifications:[],notificationsUnread:0}),await E.notifications.dismissAll(),await t().loadNotifications()},rightPaneMode:cn(),setRightPaneMode(i){try{localStorage.setItem("cockpit.right_pane_mode",i)}catch{}e({rightPaneMode:i,viewContext:{tool:i,summary:Qo[i]}})},focusedRowKey:null,setFocusedRowKey(i){e({focusedRowKey:i})},viewContext:{tool:cn(),summary:Qo[cn()]},setViewContext(i){e({viewContext:i})}}));function F(e,t,i){let s=i?i(t.getState()):void 0;return t.subscribe(n=>{if(!i){e.requestUpdate();return}const o=i(n);Object.is(o,s)||(s=o,e.requestUpdate())})}class Ga{constructor(t,i,s){this.host=t,this.store=i,this.selector=s,t.addController(this)}hostConnected(){this.unsubscribe=F(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}const ko=new Set(["been-to","goals","canvas","grocery","finance","circle","learn","office","members","publisher","newsroom","inbox","notify"]),Pc=new Set(["office","members","publisher","newsroom","inbox"]);function Mc(e,t){return(e==="tools"||ko.has(e))&&(!Pc.has(e)||t)}function $i(e){if(e==="#/tools")return{mode:"tools",fromTools:!1,standalone:!1};const t=e.match(/^#\/(tools|app|t)\/([\w-]+)$/);if(!t)return null;const i=t[2];return ko.has(i)?{mode:i,fromTools:t[1]!=="app",standalone:t[1]==="t"}:null}function Va(e){return e.type==="view"&&e.panel&&ko.has(e.name)?`#/tools/${e.name}`:null}function hn(e){return e==="tools"?"#/tools":`#/app/${e}`}const _i="cockpit.theme",Ic="cockpit.theme.dark";function _c(e){return e==="light"||e==="dark"||e==="auto"}function Oc(){try{const e=localStorage.getItem(_i);return _c(e)?e:"auto"}catch{return"auto"}}const Ot=Math.PI/180,$o=864e5,Ya=2440588,Qa=2451545,Lc=Ot*23.4397,un=9e-4,Rc=-.833*Ot,Nc=e=>e.valueOf()/$o-.5+Ya,Xo=e=>new Date((e+.5-Ya)*$o),Fc=e=>Nc(e)-Qa,jc=e=>Ot*(357.5291+.98560028*e);function Uc(e){const t=Ot*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e));return e+t+Ot*102.9372+Math.PI}const Bc=e=>Math.asin(Math.sin(e)*Math.sin(Lc)),Zo=(e,t,i)=>Qa+e+.0053*Math.sin(t)-.0069*Math.sin(2*i),Hc=(e,t,i)=>Math.acos((Math.sin(e)-Math.sin(t)*Math.sin(i))/(Math.cos(t)*Math.cos(i)));function Gn(e,t,i){const s=Ot*-i,n=Ot*t,o=Fc(e),a=Math.round(o-un-s/(2*Math.PI)),l=un+(0+s)/(2*Math.PI)+a,h=jc(l),u=Uc(h),p=Bc(u),m=Zo(l,h,u),g=Hc(Rc,n,p);if(Number.isNaN(g))return null;const v=Zo(un+(g+s)/(2*Math.PI)+a,h,u),y=m-(v-m);return{sunrise:Xo(y),sunset:Xo(v)}}function Ja(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function Xa(e){const t=Wc[e];if(t)return{lat:t[0],lng:t[1]};let i=0;try{i=-new Date().getTimezoneOffset()/4}catch{i=0}return{lat:40,lng:i}}function zc(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}}function qc(e,t=new Date){if(e==="dark")return!0;if(e==="light")return!1;const{lat:i,lng:s}=Xa(Ja()),n=Gn(t,i,s);return n?t<n.sunrise||t>=n.sunset:zc()}function Kc(e=new Date){const{lat:t,lng:i}=Xa(Ja()),s=Gn(e,t,i);if(!s)return null;if(e<s.sunrise)return s.sunrise;if(e<s.sunset)return s.sunset;const n=Gn(new Date(e.getTime()+$o),t,i);return n?n.sunrise:null}const Wc={"Asia/Kuala_Lumpur":[3.14,101.69],"Europe/Dublin":[53.33,-6.25],"Europe/Istanbul":[41.01,28.96],"Europe/Vienna":[48.21,16.37],"Europe/London":[51.51,-.13],"Europe/Lisbon":[38.72,-9.14],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Berlin":[52.52,13.41],"Europe/Rome":[41.9,12.5],"Europe/Athens":[37.98,23.73],"Europe/Moscow":[55.76,37.62],"America/New_York":[40.71,-74.01],"America/Chicago":[41.88,-87.63],"America/Denver":[39.74,-104.99],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Africa/Cairo":[30.04,31.24],"Asia/Jerusalem":[31.78,35.22],"Asia/Dubai":[25.2,55.27],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Bangkok":[13.76,100.5],"Asia/Jakarta":[-6.21,106.85],"Asia/Singapore":[1.35,103.82],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Tokyo":[35.68,139.69],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76]};var Gc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,So=(e,t,i,s)=>{for(var n=s>1?void 0:s?Vc(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Gc(t,i,n),n};function Li(e){return e.title?e.title:new Date(e.started_at*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Za(e,t){const i=e.pinned_at!=null;return r`
    <button type="button" role="menuitem" @click=${()=>t("pin")}>
      <sc-icon name=${i?"lucide-pin-off":"lucide-pin"}></sc-icon>${i?"Unpin":"Pin"}
    </button>
    <button type="button" role="menuitem" @click=${()=>t("rename")}>
      <sc-icon name="lucide-pencil"></sc-icon>Rename
    </button>
    <hr />
    <button type="button" role="menuitem" class="is-danger" @click=${()=>t("delete")}>
      <sc-icon name="lucide-trash-2"></sc-icon>Delete
    </button>`}function Vn(e){return f.getState().pinThread(e.id,e.pinned_at==null).catch(t=>{console.warn("[chat] pin failed",t)})}async function el(e,t){const i=t.replace(/\s+/g," ").trim();!i||i===e.title||await f.getState().renameThread(e.id,i).catch(s=>{console.warn("[chat] rename failed",s)})}function tl(e){const t=document.createElement("chat-delete-dialog");t.thread=e,document.body.append(t)}let Es=class extends T{constructor(){super(...arguments),this.thread=null,this.deleting=!1}close(){this.deleting||this.remove()}async doDelete(){if(!(!this.thread||this.deleting)){this.deleting=!0;try{await f.getState().deleteThread(this.thread.id),this.remove()}catch(e){console.warn("[chat] delete failed",e),this.deleting=!1}}}render(){const e=this.thread;return r`<sc-dialog label="Delete this chat?" open @sc-hide=${this.close}>
      <p class="text-muted leading-relaxed">“${e?Li(e):""}” and all its messages will be deleted. This can't be undone.</p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm border border-line hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.doDelete()}>
          ${this.deleting?"Deleting…":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};So([b({attribute:!1})],Es.prototype,"thread",2);So([d()],Es.prototype,"deleting",2);Es=So([w("chat-delete-dialog")],Es);var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,mi=(e,t,i,s)=>{for(var n=s>1?void 0:s?Qc(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Yc(t,i,n),n};const Jc={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher"},Xc={notes:"canvas"};function Ri(e){const t=e.tool??Jc[e.persona]??null;return t?Xc[t]??t:null}const To={key:"",label:"Mana",icon:"sparkles"},er="cockpit.sidebar_chat_groups",tr=15;let $t=class extends T{constructor(){super(...arguments),this.tools=[],this.open=$t.loadOpen(),this.recentsShown=tr,this.menu=null,this.renamingId=null,this.closeMenu=()=>{this.menu=null},this.onOutside=e=>{this.menu&&!e.composedPath().some(t=>t instanceof HTMLElement&&t.classList.contains("mana-chat-menu"))&&(this.menu=null)},this.onMenuKey=e=>{e.key==="Escape"&&this.menu&&(e.preventDefault(),this.menu=null)}}static loadOpen(){try{const e=localStorage.getItem(er);if(e)return new Set(JSON.parse(e))}catch{}return new Set(["pinned","recents"])}connectedCallback(){super.connectedCallback(),this.unsubThreads=F(this,f,e=>e.threads),this.unsubCurrent=F(this,f,e=>e.currentThreadId),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onMenuKey),window.addEventListener("blur",this.closeMenu)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onMenuKey),window.removeEventListener("blur",this.closeMenu)}onContextMenu(e,t){e.preventDefault(),this.menu={thread:t,x:Math.min(e.clientX,window.innerWidth-180),y:Math.min(e.clientY,window.innerHeight-140)}}menuAction(e){const t=this.menu?.thread;this.menu=null,t&&(e==="pin"?Vn(t):e==="rename"?(this.renamingId=t.id,this.updateComplete.then(()=>{const i=this.querySelector("input.mana-chat-rename");i?.focus(),i?.select()})):tl(t))}async saveRename(e,t){this.renamingId===e.id&&(this.renamingId=null,await el(e,t))}toggle(e){const t=new Set(this.open);t.has(e)?t.delete(e):t.add(e),this.open=t;try{localStorage.setItem(er,JSON.stringify([...t]))}catch{}}toolInfo(e){return e?this.tools.find(t=>t.key===e)??{key:e,label:e[0].toUpperCase()+e.slice(1),icon:"message-circle"}:To}openThread(e){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:e.id,tool:Ri(e)},bubbles:!0,composed:!0}))}onPin(e,t){e.stopPropagation(),Vn(t)}section(e,t,i){const s=this.open.has(e);return r`<div class="mana-chats-section">
      <button type="button" class="mana-chats-heading" aria-expanded=${s} @click=${()=>this.toggle(e)}>
        <span>${t}</span>
        <sc-icon name=${s?"lucide-chevron-down":"lucide-chevron-right"}></sc-icon>
      </button>
      ${s?i():c}
    </div>`}row(e,t){const i=this.toolInfo(Ri(e)),s=e.pinned_at!=null;return this.renamingId===e.id?r`<div class="mana-chat-row is-active">
        <input class="mana-chat-rename" aria-label="Chat name" .value=${e.title??""}
          @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.saveRename(e,n.target.value)):n.key==="Escape"&&(n.preventDefault(),n.stopPropagation(),this.renamingId=null)}}
          @blur=${n=>void this.saveRename(e,n.target.value)} />
      </div>`:r`<div class="mana-chat-row ${t===e.id?"is-active":""} ${this.menu?.thread.id===e.id?"is-menu":""}"
      @contextmenu=${n=>this.onContextMenu(n,e)}>
      <button type="button" class="mana-chat-open" title=${Li(e)} aria-current=${t===e.id?"true":c}
        @click=${()=>this.openThread(e)}>
        <sc-icon name="lucide-${i.icon}" title=${i.label}></sc-icon>
        <span class="mana-sidebar-label">${Li(e)}</span>
      </button>
      <button type="button" class="mana-chat-pin ${s?"is-pinned":""}" aria-label=${s?"Unpin chat":"Pin chat"}
        title=${s?"Unpin":"Pin"} @click=${n=>this.onPin(n,e)}>
        <sc-icon name=${s?"lucide-pin-off":"lucide-pin"}></sc-icon>
      </button>
    </div>`}renderMenu(){const e=this.menu;return e?r`<div class="mana-chat-menu" role="menu" style="left:${e.x}px;top:${e.y}px">
      ${Za(e.thread,t=>this.menuAction(t))}
    </div>`:c}render(){const{threads:e,currentThreadId:t}=f.getState(),i=e.filter(n=>n.pinned_at!=null).sort((n,o)=>(o.pinned_at??0)-(n.pinned_at??0)),s=e.slice(0,this.recentsShown);return r`
      ${i.length?this.section("pinned","Pinned",()=>i.map(n=>this.row(n,t))):c}
      ${this.section("recents","Recents",()=>r`
        ${s.length?s.map(n=>this.row(n,t)):r`<p class="mana-chats-empty">No chats yet</p>`}
        ${e.length>this.recentsShown?r`<button type="button" class="mana-chats-more" @click=${()=>{this.recentsShown+=tr}}>Show more</button>`:c}
      `)}
      ${this.renderMenu()}
    `}};mi([b({attribute:!1})],$t.prototype,"tools",2);mi([d()],$t.prototype,"open",2);mi([d()],$t.prototype,"recentsShown",2);mi([d()],$t.prototype,"menu",2);mi([d()],$t.prototype,"renamingId",2);$t=mi([w("sidebar-threads")],$t);var Zc=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,fi=(e,t,i,s)=>{for(var n=s>1?void 0:s?ed(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Zc(t,i,n),n};let Lt=class extends T{constructor(){super(...arguments),this.tools=[],this.q="",this.hits=null,this.active=0,this.timer=null,this.seq=0}firstUpdated(){this.input?.focus()}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearTimeout(this.timer)}close(){this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))}onInput(e){this.q=e.target.value,this.active=0,this.timer&&clearTimeout(this.timer);const t=this.q.trim();if(!t){this.hits=null;return}this.timer=setTimeout(()=>{const i=++this.seq;E.threads.search(t).then(s=>{i===this.seq&&(this.hits=s)}).catch(()=>{i===this.seq&&(this.hits=[])})},180)}results(){return this.hits??f.getState().threads.slice(0,8)}pick(e){this.dispatchEvent(new CustomEvent("thread-open",{detail:{id:e.id,tool:Ri(e)},bubbles:!0,composed:!0})),this.close()}onKey(e){const t=this.results();if(e.key==="Escape")e.preventDefault(),this.close();else if(e.key==="ArrowDown")e.preventDefault(),this.active=Math.min(this.active+1,t.length-1);else if(e.key==="ArrowUp")e.preventDefault(),this.active=Math.max(this.active-1,0);else if(e.key==="Enter"){const i=t[this.active];i&&(e.preventDefault(),this.pick(i))}}toolLabel(e){const t=Ri(e);return t?this.tools.find(i=>i.key===t)?.label??t:To.label}render(){const e=this.results();return r`<div class="mana-search-backdrop" @click=${this.close}>
      <div class="mana-search" role="dialog" aria-label="Search chats" @click=${t=>t.stopPropagation()}>
        <div class="mana-search-input">
          <sc-icon name="lucide-search"></sc-icon>
          <input type="text" placeholder="Search chats" aria-label="Search chats" .value=${this.q}
            @input=${this.onInput} @keydown=${this.onKey} />
        </div>
        <p class="mana-search-heading">${this.hits?"Results":"Recent chats"}</p>
        <ul role="listbox" class="mana-search-list">
          ${e.length===0?r`<li class="mana-search-empty">No chats match "${this.q.trim()}"</li>`:e.map((t,i)=>r`<li role="option" aria-selected=${i===this.active}
                class="mana-search-row ${i===this.active?"is-active":""}"
                @mouseenter=${()=>{this.active=i}} @click=${()=>this.pick(t)}>
                <sc-icon name="lucide-message-circle"></sc-icon>
                <span class="mana-search-text">
                  <span class="mana-search-title">${Li(t)}</span>
                  ${t.snippet?r`<span class="mana-search-snippet">${t.snippet}</span>`:c}
                </span>
                <span class="mana-search-tool">${this.toolLabel(t)}</span>
              </li>`)}
        </ul>
      </div>
    </div>`}};fi([b({attribute:!1})],Lt.prototype,"tools",2);fi([d()],Lt.prototype,"q",2);fi([d()],Lt.prototype,"hits",2);fi([d()],Lt.prototype,"active",2);fi([V("input")],Lt.prototype,"input",2);Lt=fi([w("thread-search")],Lt);var td=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Vs=(e,t,i,s)=>{for(var n=s>1?void 0:s?id(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&td(t,i,n),n};let Ni=class extends T{constructor(){super(...arguments),this.tools=null,this.menuOpen=!1,this.renaming=!1,this.onOutside=e=>{this.menuOpen&&!e.composedPath().includes(this)&&(this.menuOpen=!1)},this.onKey=e=>{e.key==="Escape"&&this.menuOpen&&(e.preventDefault(),this.menuOpen=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=F(this,f,e=>e.threads),this.unsubCurrent=F(this,f,e=>e.currentThreadId),this.unsubMode=F(this,f,e=>e.rightPaneMode),f.getState().initThreads(),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),this.unsubMode?.(),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey)}current(){const{threads:e,currentThreadId:t}=f.getState();return t==null?null:e.find(i=>i.id===t)??null}run(e){const t=this.current();this.menuOpen=!1,t&&(e==="pin"?Vn(t):e==="delete"?tl(t):(this.renaming=!0,this.updateComplete.then(()=>{const i=this.querySelector("input");i?.focus(),i?.select()})))}async save(e){const t=this.current();this.renaming&&(this.renaming=!1,t&&await el(t,e))}toolIcon(e){if(!this.tools)return c;const t=e?Ri(e):f.getState().rightPaneMode,i=t&&this.tools.find(s=>s.key===t)||To;return r`<sc-icon class="mana-chat-title-tool" name="lucide-${i.icon}" title=${i.label} aria-label=${`In ${i.label}`}></sc-icon>`}newChatButton(){return r`<button type="button" class="mana-chat-title-btn mana-chat-new-btn" aria-label="New chat" title="New chat (⌘N)"
      @click=${()=>document.dispatchEvent(new CustomEvent("mana-new-chat"))}>
      <sc-icon name="lucide-square-pen"></sc-icon>
    </button>`}render(){const e=this.current();return e?this.renaming?r`<input class="mana-chat-title-input" aria-label="Chat name" .value=${e.title??""}
        @keydown=${t=>{t.key==="Enter"?(t.preventDefault(),this.save(t.target.value)):t.key==="Escape"&&(t.preventDefault(),this.renaming=!1)}}
        @blur=${t=>void this.save(t.target.value)} />`:r`<div class="mana-chat-titlebar">
      ${this.toolIcon(e)}
      <span class="mana-chat-title" title="Double-click to rename" @dblclick=${()=>this.run("rename")}>${Li(e)}</span>
      <button type="button" class="mana-chat-title-btn" aria-label="Chat options" aria-haspopup="menu" aria-expanded=${this.menuOpen}
        @click=${()=>{this.menuOpen=!this.menuOpen}}>
        <sc-icon name="lucide-chevron-down"></sc-icon>
      </button>
      ${this.menuOpen?r`<div class="mana-chat-menu is-anchored" role="menu">${Za(e,t=>this.run(t))}</div>`:c}
      ${this.newChatButton()}
    </div>`:r`<div class="mana-chat-titlebar">${this.toolIcon(e)}<span class="mana-chat-title is-new">New chat</span>${this.newChatButton()}</div>`}};Vs([b({attribute:!1})],Ni.prototype,"tools",2);Vs([d()],Ni.prototype,"menuOpen",2);Vs([d()],Ni.prototype,"renaming",2);Ni=Vs([w("chat-title-bar")],Ni);function Co(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Vt=Co();function il(e){Vt=e}var _t={exec:()=>null};function ti(e){let t=[];return i=>{let s=Math.max(0,Math.min(3,i-1)),n=t[s];return n||(n=e(s),t[s]=n),n}}function j(e,t=""){let i=typeof e=="string"?e:e.source,s={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(ue.caret,"$1"),i=i.replace(n,a),s},getRegex:()=>new RegExp(i,t)};return s}var sd=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ti(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ti(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ti(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:ti(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:ti(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:ti(e=>new RegExp(`^ {0,${e}}>`))},nd=/^(?:[ \t]*(?:\n|$))+/,od=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Yi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ad=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Eo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,sl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nl=j(sl).replace(/bull/g,Eo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ld=j(sl).replace(/bull/g,Eo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Do=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,cd=/^[^\n]+/,Ao=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,dd=j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ao).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),hd=j(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Eo).getRegex(),Ys="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Po=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ud=j("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Po).replace("tag",Ys).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ol=j(Do).replace("hr",Yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex(),pd=j(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ol).getRegex(),Mo={blockquote:pd,code:od,def:dd,fences:rd,heading:ad,hr:Yi,html:ud,lheading:nl,list:hd,newline:nd,paragraph:ol,table:_t,text:cd},ir=j("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex(),md={...Mo,lheading:ld,table:ir,paragraph:j(Do).replace("hr",Yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ir).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ys).getRegex()},fd={...Mo,html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Po).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_t,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(Do).replace("hr",Yi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,rl=/^( {2,}|\\)\n(?!\s*$)/,vd=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,gi=/[\p{P}\p{S}]/u,Qs=/[\s\p{P}\p{S}]/u,Io=/[^\s\p{P}\p{S}]/u,yd=j(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Qs).getRegex(),al=/(?!~)[\p{P}\p{S}]/u,xd=/(?!~)[\s\p{P}\p{S}]/u,wd=/(?:[^\s\p{P}\p{S}]|~)/u,kd=j(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",sd?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ll=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,$d=j(ll,"u").replace(/punct/g,gi).getRegex(),Sd=j(ll,"u").replace(/punct/g,al).getRegex(),cl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Td=j(cl,"gu").replace(/notPunctSpace/g,Io).replace(/punctSpace/g,Qs).replace(/punct/g,gi).getRegex(),Cd=j(cl,"gu").replace(/notPunctSpace/g,wd).replace(/punctSpace/g,xd).replace(/punct/g,al).getRegex(),Ed=j("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Io).replace(/punctSpace/g,Qs).replace(/punct/g,gi).getRegex(),Dd=j(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,gi).getRegex(),Ad="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Pd=j(Ad,"gu").replace(/notPunctSpace/g,Io).replace(/punctSpace/g,Qs).replace(/punct/g,gi).getRegex(),Md=j(/\\(punct)/,"gu").replace(/punct/g,gi).getRegex(),Id=j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_d=j(Po).replace("(?:-->|$)","-->").getRegex(),Od=j("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_d).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ds=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ld=j(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dl=j(/^!?\[(label)\]\[(ref)\]/).replace("label",Ds).replace("ref",Ao).getRegex(),hl=j(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ao).getRegex(),Rd=j("reflink|nolink(?!\\()","g").replace("reflink",dl).replace("nolink",hl).getRegex(),sr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_o={_backpedal:_t,anyPunctuation:Md,autolink:Id,blockSkip:kd,br:rl,code:bd,del:_t,delLDelim:_t,delRDelim:_t,emStrongLDelim:$d,emStrongRDelimAst:Td,emStrongRDelimUnd:Ed,escape:gd,link:Ld,nolink:hl,punctuation:yd,reflink:dl,reflinkSearch:Rd,tag:Od,text:vd,url:_t},Nd={..._o,link:j(/^!?\[(label)\]\((.*?)\)/).replace("label",Ds).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ds).getRegex()},Yn={..._o,emStrongRDelimAst:Cd,emStrongLDelim:Sd,delLDelim:Dd,delRDelim:Pd,url:j(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:j(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sr).getRegex()},Fd={...Yn,br:j(rl).replace("{2,}","*").getRegex(),text:j(Yn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ss={normal:Mo,gfm:md,pedantic:fd},Si={normal:_o,gfm:Yn,breaks:Fd,pedantic:Nd},jd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nr=e=>jd[e];function Qe(e,t){if(t){if(ue.escapeTest.test(e))return e.replace(ue.escapeReplace,nr)}else if(ue.escapeTestNoEncode.test(e))return e.replace(ue.escapeReplaceNoEncode,nr);return e}function or(e){try{e=encodeURI(e).replace(ue.percentDecode,"%")}catch{return null}return e}function rr(e,t){let i=e.replace(ue.findPipe,(o,a,l)=>{let h=!1,u=a;for(;--u>=0&&l[u]==="\\";)h=!h;return h?"|":" |"}),s=i.split(ue.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(ue.slashPipe,"|");return s}function gt(e,t,i){let s=e.length;if(s===0)return"";let n=0;for(;n<s&&e.charAt(s-n-1)===t;)n++;return e.slice(0,s-n)}function ar(e){let t=e.split(`
`),i=t.length-1;for(;i>=0&&ue.blankLine.test(t[i]);)i--;return t.length-i<=2?e:t.slice(0,i+1).join(`
`)}function Ud(e,t){if(e.indexOf(t[1])===-1)return-1;let i=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])i++;else if(e[s]===t[1]&&(i--,i<0))return s;return i>0?-2:-1}function Bd(e,t=0){let i=t,s="";for(let n of e)if(n==="	"){let o=4-i%4;s+=" ".repeat(o),i+=o}else s+=n,i++;return s}function lr(e,t,i,s,n){let o=t.href,a=t.title||null,l=e[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let h={type:e[0].charAt(0)==="!"?"image":"link",raw:i,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,h}function Hd(e,t,i){let s=e.match(i.other.indentCodeCompensation);if(s===null)return t;let n=s[1];return t.split(`
`).map(o=>{let a=o.match(i.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=n.length?o.slice(n.length):o}).join(`
`)}var As=class{options;rules;lexer;constructor(e){this.options=e||Vt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let i=this.options.pedantic?t[0]:ar(t[0]),s=i.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i,codeBlockStyle:"indented",text:s}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let i=t[0],s=Hd(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){let s=gt(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:gt(t[0],`
`),depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:gt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let i=gt(t[0],`
`).split(`
`),s="",n="",o=[];for(;i.length>0;){let a=!1,l=[],h;for(h=0;h<i.length;h++)if(this.rules.other.blockquoteStart.test(i[h]))l.push(i[h]),a=!0;else if(!a)l.push(i[h]);else break;i=i.slice(h);let u=l.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,n=n?`${n}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=m,i.length===0)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let v=g,y=v.raw+`
`+i.join(`
`),A=this.blockquote(y);o[o.length-1]=A,s=s.substring(0,s.length-v.raw.length)+A.raw,n=n.substring(0,n.length-v.text.length)+A.text;break}else if(g?.type==="list"){let v=g,y=v.raw+`
`+i.join(`
`),A=this.list(y);o[o.length-1]=A,s=s.substring(0,s.length-g.raw.length)+A.raw,n=n.substring(0,n.length-v.raw.length)+A.raw,i=y.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),s=i.length>1,n={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let o=this.rules.other.listItemRegex(i),a=!1;for(;e;){let h=!1,u="",p="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let m=Bd(t[2].split(`
`,1)[0],t[1].length),g=e.split(`
`,1)[0],v=!m.trim(),y=0;if(this.options.pedantic?(y=2,p=m.trimStart()):v?y=t[1].length+1:(y=m.search(this.rules.other.nonSpaceChar),y=y>4?1:y,p=m.slice(y),y+=t[1].length),v&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,e=e.substring(g.length+1),h=!0),!h){let A=this.rules.other.nextBulletRegex(y),x=this.rules.other.hrRegex(y),N=this.rules.other.fencesBeginRegex(y),Z=this.rules.other.headingBeginRegex(y),je=this.rules.other.htmlBeginRegex(y),Ce=this.rules.other.blockquoteBeginRegex(y);for(;e;){let ft=e.split(`
`,1)[0],S;if(g=ft,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),S=g):S=g.replace(this.rules.other.tabCharGlobal,"    "),N.test(g)||Z.test(g)||je.test(g)||Ce.test(g)||A.test(g)||x.test(g))break;if(S.search(this.rules.other.nonSpaceChar)>=y||!g.trim())p+=`
`+S.slice(y);else{if(v||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(m)||Z.test(m)||x.test(m))break;p+=`
`+g}v=!g.trim(),u+=ft+`
`,e=e.substring(ft.length+1),m=S.slice(y)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=u}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let h of n.items){this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]);let u=h.tokens[0];if(h.task&&(u?.type==="text"||u?.type==="paragraph")){h.text=h.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(h.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};h.checked=m.checked,n.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=m.raw+h.tokens[0].raw,h.tokens[0].text=m.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(m)):h.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):h.tokens.unshift(m)}}else h.task&&(h.task=!1);if(!n.loose){let p=h.tokens.filter(g=>g.type==="space"),m=p.length>0&&p.some(g=>this.rules.other.anyLine.test(g.raw));n.loose=m}}if(n.loose)for(let h of n.items){h.loose=!0;for(let u of h.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(e){let t=this.rules.block.html.exec(e);if(t){let i=ar(t[0]);return{type:"html",block:!0,raw:i,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:i}}}def(e){let t=this.rules.block.def.exec(e);if(t){let i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:gt(t[0],`
`),href:s,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=rr(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:gt(t[0],`
`),header:[],align:[],rows:[]};if(i.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(rr(a,o.header.length).map((l,h)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[h]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let i=t[1].trim();return{type:"heading",raw:gt(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:i,tokens:this.lexer.inline(i)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=gt(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{let o=Ud(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],n=o[3])}else n=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),lr(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[s.toLowerCase()];if(!n){let o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return lr(i,n,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,o,a,l=n,h=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+n);(s=u.exec(t))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&n%3&&!((n+a)%3)){h+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+h);let p=[...s[0]][0].length,m=e.slice(0,n+s.index+p+a);if(Math.min(n,a)%2){let v=m.slice(1,-1);return{type:"em",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}let g=m.slice(2,-2);return{type:"strong",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(i),n=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&n&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,i=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,o,a,l=n,h=this.rules.inline.delRDelim;for(h.lastIndex=0,t=t.slice(-1*e.length+n);(s=h.exec(t))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(a=[...o].length,a!==n))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let u=[...s[0]][0].length,p=e.slice(0,n+s.index+u+a),m=p.slice(n,-n);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=t[1],s="mailto:"+i):(i=t[1],s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=t[0],s="mailto:"+i;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);i=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}},Ue=class Qn{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Vt,this.options.tokenizer=this.options.tokenizer||new As,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:ue,block:ss.normal,inline:Si.normal};this.options.pedantic?(i.block=ss.pedantic,i.inline=Si.pedantic):this.options.gfm&&(i.block=ss.gfm,this.options.breaks?i.inline=Si.breaks:i.inline=Si.gfm),this.tokenizer.rules=i}static get rules(){return{block:ss,inline:Si}}static lex(t,i){return new Qn(i).lex(t)}static lexInline(t,i){return new Qn(i).inlineTokens(t)}lex(t){t=t.replace(ue.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(ue.tabCharGlobal,"    ").replace(ue.spaceLine,""));let n=1/0;for(;t;){if(t.length<n)n=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(l=>(o=l.call({lexer:this},t,i))?(t=t.substring(o.raw.length),i.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let l=i.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:i.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let l=i.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):i.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let l=i.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},i.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),i.push(o);continue}let a=t;if(this.options.extensions?.startBlock){let l=1/0,h=t.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},h),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(a=t.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let l=i.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):i.push(o),s=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let l=i.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):i.push(o);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){this.tokenizer.lexer=this;let s=t,n=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)u.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)o=n[2]?n[2].length:0,s=s.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="",h=1/0;for(;t;){if(t.length<h)h=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}a||(l=""),a=!1;let u;if(this.options.extensions?.inline?.some(m=>(u=m.call({lexer:this},t,i))?(t=t.substring(u.raw.length),i.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let m=i.at(-1);u.type==="text"&&m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):i.push(u);continue}if(u=this.tokenizer.emStrong(t,s,l)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.del(t,s,l)){t=t.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),i.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),i.push(u);continue}let p=t;if(this.options.extensions?.startInline){let m=1/0,g=t.slice(1),v;this.options.extensions.startInline.forEach(y=>{v=y.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(p=t.substring(0,m+1))}if(u=this.tokenizer.inlineText(p)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),a=!0;let m=i.at(-1);m?.type==="text"?(m.raw+=u.raw,m.text+=u.text):i.push(u);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return i}infiniteLoopError(t){let i="Infinite loop on byte: "+t;if(this.options.silent)console.error(i);else throw new Error(i)}},Ps=class{options;parser;constructor(e){this.options=e||Vt}space(e){return""}code({text:e,lang:t,escaped:i}){let s=(t||"").match(ue.notSpaceStart)?.[0],n=e.replace(ue.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Qe(s)+'">'+(i?n:Qe(n,!0))+`</code></pre>
`:"<pre><code>"+(i?n:Qe(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,s="";for(let a=0;a<e.items.length;a++){let l=e.items[a];s+=this.listitem(l)}let n=t?"ol":"ul",o=t&&i!==1?' start="'+i+'"':"";return"<"+n+o+`>
`+s+"</"+n+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let n=0;n<e.header.length;n++)i+=this.tablecell(e.header[n]);t+=this.tablerow({text:i});let s="";for(let n=0;n<e.rows.length;n++){let o=e.rows[n];i="";for(let a=0;a<o.length;a++)i+=this.tablecell(o[a]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Qe(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let s=this.parser.parseInline(i),n=or(e);if(n===null)return s;e=n;let o='<a href="'+e+'"';return t&&(o+=' title="'+Qe(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let n=or(e);if(n===null)return Qe(i);e=n;let o=`<img src="${e}" alt="${Qe(i)}"`;return t&&(o+=` title="${Qe(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Qe(e.text)}},Oo=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Be=class Jn{options;renderer;textRenderer;constructor(t){this.options=t||Vt,this.options.renderer=this.options.renderer||new Ps,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oo}static parse(t,i){return new Jn(i).parse(t)}static parseInline(t,i){return new Jn(i).parseInline(t)}parse(t){this.renderer.parser=this;let i="";for(let s=0;s<t.length;s++){let n=t[s];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){i+=l||"";continue}}let o=n;switch(o.type){case"space":{i+=this.renderer.space(o);break}case"hr":{i+=this.renderer.hr(o);break}case"heading":{i+=this.renderer.heading(o);break}case"code":{i+=this.renderer.code(o);break}case"table":{i+=this.renderer.table(o);break}case"blockquote":{i+=this.renderer.blockquote(o);break}case"list":{i+=this.renderer.list(o);break}case"checkbox":{i+=this.renderer.checkbox(o);break}case"html":{i+=this.renderer.html(o);break}case"def":{i+=this.renderer.def(o);break}case"paragraph":{i+=this.renderer.paragraph(o);break}case"text":{i+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(t,i=this.renderer){this.renderer.parser=this;let s="";for(let n=0;n<t.length;n++){let o=t[n];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=l||"";continue}}let a=o;switch(a.type){case"escape":{s+=i.text(a);break}case"html":{s+=i.html(a);break}case"link":{s+=i.link(a);break}case"image":{s+=i.image(a);break}case"checkbox":{s+=i.checkbox(a);break}case"strong":{s+=i.strong(a);break}case"em":{s+=i.em(a);break}case"codespan":{s+=i.codespan(a);break}case"br":{s+=i.br(a);break}case"del":{s+=i.del(a);break}case"text":{s+=i.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Oi=class{options;block;constructor(e){this.options=e||Vt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ue.lex:Ue.lexInline}provideParser(e=this.block){return e?Be.parse:Be.parseInline}},ul=class{defaults=Co();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Be;Renderer=Ps;TextRenderer=Oo;Lexer=Ue;Tokenizer=As;Hooks=Oi;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let s of e)switch(i=i.concat(t.call(this,s)),s.type){case"table":{let n=s;for(let o of n.header)i=i.concat(this.walkTokens(o.tokens,t));for(let o of n.rows)for(let a of o)i=i.concat(this.walkTokens(a.tokens,t));break}case"list":{let n=s;i=i.concat(this.walkTokens(n.items,t));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);i=i.concat(this.walkTokens(a,t))}):n.tokens&&(i=i.concat(this.walkTokens(n.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{let s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=t.renderers[n.name];o?t.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[n.level];o?o.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),s.extensions=t),i.renderer){let n=this.defaults.renderer||new Ps(this.defaults);for(let o in i.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=i.renderer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p||""}}s.renderer=n}if(i.tokenizer){let n=this.defaults.tokenizer||new As(this.defaults);for(let o in i.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=i.tokenizer[a],h=n[a];n[a]=(...u)=>{let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}s.tokenizer=n}if(i.hooks){let n=this.defaults.hooks||new Oi;for(let o in i.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=i.hooks[a],h=n[a];Oi.passThroughHooks.has(o)?n[a]=u=>{if(this.defaults.async&&Oi.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await l.call(n,u);return h.call(n,m)})();let p=l.call(n,u);return h.call(n,p)}:n[a]=(...u)=>{if(this.defaults.async)return(async()=>{let m=await l.apply(n,u);return m===!1&&(m=await h.apply(n,u)),m})();let p=l.apply(n,u);return p===!1&&(p=h.apply(n,u)),p}}s.hooks=n}if(i.walkTokens){let n=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),n&&(l=l.concat(n.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ue.lex(e,t??this.defaults)}parser(e,t){return Be.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let s={...i},n={...this.defaults,...s},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(t):t,l=await(n.hooks?await n.hooks.provideLexer(e):e?Ue.lex:Ue.lexInline)(a,n),h=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(h,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser(e):e?Be.parse:Be.parseInline)(h,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));let a=(n.hooks?n.hooks.provideLexer(e):e?Ue.lex:Ue.lexInline)(t,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(e):e?Be.parse:Be.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Qe(i.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(i);throw i}}},Rt=new ul;function z(e,t){return Rt.parse(e,t)}z.options=z.setOptions=function(e){return Rt.setOptions(e),z.defaults=Rt.defaults,il(z.defaults),z};z.getDefaults=Co;z.defaults=Vt;z.use=function(...e){return Rt.use(...e),z.defaults=Rt.defaults,il(z.defaults),z};z.walkTokens=function(e,t){return Rt.walkTokens(e,t)};z.parseInline=Rt.parseInline;z.Parser=Be;z.parser=Be.parse;z.Renderer=Ps;z.TextRenderer=Oo;z.Lexer=Ue;z.lexer=Ue.lex;z.Tokenizer=As;z.Hooks=Oi;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;Be.parse;Ue.lex;const zd=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),qd=new ul({gfm:!0,renderer:{html(e){return zd(e.text)}}}),Kd=new Set(["p","br","hr","strong","b","em","i","del","s","code","pre","kbd","sup","sub","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","img","table","thead","tbody","tr","th","td","input","span"]),Wd=new Set(["script","style","iframe","object","embed","template","noscript","svg","math","form","textarea","select","button"]),Gd=/^(https?:|mailto:|\/|#|\.{0,2}\/)/i,Vd=/^(https?:|\/|data:image\/(png|jpe?g|gif|webp);)/i;function Yd(e){const t=e.tagName.toLowerCase();for(const i of Array.from(e.attributes)){const s=i.name.toLowerCase(),n=i.value.trim();let o=!1;t==="a"&&s==="href"?o=Gd.test(n):t==="a"&&s==="title"?o=!0:t==="img"&&s==="src"?o=Vd.test(n):t==="img"&&(s==="alt"||s==="title")?o=!0:t==="ol"&&s==="start"?o=/^\d+$/.test(n):(t==="th"||t==="td")&&s==="align"?o=/^(left|right|center)$/.test(n):t==="code"&&s==="class"?o=/^language-[\w+-]+$/.test(n):t==="input"&&(s==="type"||s==="checked"||s==="disabled")&&(o=s!=="type"||n==="checkbox"),o||e.removeAttribute(i.name)}t==="a"&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")),t==="input"&&e.setAttribute("disabled","")}function Qd(e){const t=document.createElement("template");t.innerHTML=e;const i=s=>{for(const n of Array.from(s.children)){const o=n.tagName.toLowerCase();if(Wd.has(o)){n.remove();continue}if(i(n),!Kd.has(o)||o==="input"&&n.getAttribute("type")!=="checkbox"){n.replaceWith(...Array.from(n.childNodes));continue}Yd(n)}};return i(t.content),t.innerHTML}function pl(e){return Qd(qd.parse(e,{async:!1}))}const cr=e=>Array.from(e.matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu),t=>({value:t[0].toLowerCase(),start:t.index,end:t.index+t[0].length})),Jd=(e,t)=>{const i=e.toLowerCase().indexOf(t.toLowerCase());return i<0?null:{start:i,end:i+t.length}};function ml(e,t){if(!e.trim())return null;const i=t.trim().replace(/^\s*["“]|["”]\s*$/g,"");if(i.length<4)return null;const s=i.split(/(?:\.{3}|…)/).map(n=>n.trim()).filter(n=>n.length>=4).sort((n,o)=>o.length-n.length);for(const n of s.length?s:[i]){const o=Jd(e,n);if(o)return o;const a=cr(n);if(a.length<2)continue;const l=cr(e);for(let h=0;h<=l.length-a.length;h++){let u=!0;for(let g=0;g<a.length;g++)if(l[h+g]?.value!==a[g]?.value){u=!1;break}const p=l[h],m=l[h+a.length-1];if(u&&p&&m)return{start:p.start,end:m.end}}}return null}var Xd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,bi=(e,t,i,s)=>{for(var n=s>1?void 0:s?Zd(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Xd(t,i,n),n};function eh(e){if(!e)return;const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);cursor:zoom-out;padding:2rem;opacity:0;transition:opacity .12s ease;";const i=document.createElement("img");i.src=e,i.style.cssText="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,.5);",t.appendChild(i);const s=()=>{t.remove(),document.removeEventListener("keydown",n)},n=o=>{o.key==="Escape"&&s()};t.addEventListener("click",s),document.addEventListener("keydown",n),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"})}let Nt=class extends T{constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[],this.pending=!1,this.publisherReferences=!1,this.referenceFrame=null}disconnectedCallback(){super.disconnectedCallback(),this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame)}updated(){this.referenceFrame!=null&&cancelAnimationFrame(this.referenceFrame),this.referenceFrame=requestAnimationFrame(()=>{this.referenceFrame=null,this.markPublisherReferences()})}markPublisherReferences(){const e=this.querySelector(".chat-md");if(!e)return;for(const n of Array.from(e.querySelectorAll(".chat-draft-ref")))n.replaceWith(document.createTextNode(n.textContent??""));if(e.normalize(),!this.publisherReferences||this.chatRole!=="mentor")return;const t=document.querySelector("publisher-editor textarea[data-draft-body]")?.value??"";if(!t)return;const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest("a, code, pre, .chat-draft-ref")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),s=[];for(;i.nextNode();)s.push(i.currentNode);for(const n of s){const o=n.data,a=Array.from(o.matchAll(/["“]([^"“”\n]{4,320})["”]/g)).filter(u=>u[1]&&ml(t,u[1]));if(!a.length)continue;const l=document.createDocumentFragment();let h=0;for(const u of a){const p=u.index??0;l.append(o.slice(h,p));const m=document.createElement("span");m.className="chat-draft-ref";const g=u[1];g&&(m.dataset.publisherReference=g,m.tabIndex=0,m.setAttribute("role","link"),m.setAttribute("aria-label",`Show “${g}” in the Publisher draft`),m.title="Show this in the draft",m.textContent=u[0],l.append(m),h=p+u[0].length)}l.append(o.slice(h)),n.replaceWith(l)}}openPublisherReference(e){const i=(e instanceof Element?e.closest(".chat-draft-ref"):null)?.dataset.publisherReference;return i?(document.dispatchEvent(new CustomEvent("publisher-reference",{detail:{text:i}})),!0):!1}renderBody(){return this.content?this.chatRole==="mentor"?r`<div class="chat-md">${W(pl(this.content))}</div>`:r`<span class="whitespace-pre-wrap break-words">${this.content}</span>`:this.chatRole==="mentor"&&this.pending?r`<span
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
              @click=${()=>eh(e.url)}
            />
          `)}
      </div>
    `:null}render(){return this.chatRole==="mentor"?r`
        <div class="text-ink text-base leading-[1.65] max-w-full min-w-0 break-words"
          @click=${e=>{this.openPublisherReference(e.target)&&e.preventDefault()}}
          @keydown=${e=>{(e.key==="Enter"||e.key===" ")&&this.openPublisherReference(e.target)&&e.preventDefault()}}>
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
    `}};bi([b()],Nt.prototype,"chatRole",2);bi([b()],Nt.prototype,"content",2);bi([b({type:Array})],Nt.prototype,"attachments",2);bi([b({type:Boolean})],Nt.prototype,"pending",2);bi([b({type:Boolean})],Nt.prototype,"publisherReferences",2);Nt=bi([w("chat-message")],Nt);var th=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,Js=(e,t,i,s)=>{for(var n=s>1?void 0:s?ih(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&th(t,i,n),n};function sh(e){return new Date(e*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let Fi=class extends T{constructor(){super(...arguments),this.live=[],this.pending=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=e=>{const t=e.detail;if(!t)return;const i=`live_user_${Date.now()}`,s=`live_mentor_${Date.now()}`;this.liveMentorId=s,this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:i,role:"user",content:t.text,attachments:t.attachments.map(n=>({url:n.url}))},{id:s,role:"mentor",content:"",attachments:[]}],t.liveDetail.append=n=>this.appendToMentor(s,n),t.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onQueueAdd=e=>{const t=e.detail;t&&(this.pending=[...this.pending,{id:t.id,text:t.text,attachments:t.attachments??[]}],this.updateComplete.then(()=>this.scrollToBottom()))},this.onQueueRemove=e=>{const t=e.detail?.id;t&&(this.pending=this.pending.filter(i=>i.id!==t))},this.onQueueClear=()=>{this.pending=[]},this.onSlashMessage=e=>{const t=e.detail;if(!t)return;const i=`slash_user_${Date.now()}`,s=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=f.getState().messages),this.live=[...this.live,{id:i,role:"user",content:t.user,attachments:[]},{id:s,role:"mentor",content:t.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(e,t){this.live=this.live.map(s=>s.id===e?{...s,content:s.content+t}:s);const i=this.renderRoot.querySelector(`chat-message[data-live-id="${e}"]`);i&&(i.content=(i.content||"")+t),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const e=this.scroller;e&&(e.scrollTop=e.scrollHeight)}createRenderRoot(){const e=super.createRenderRoot();return this.style.display="block",e}connectedCallback(){super.connectedCallback(),this.unsubMessages=F(this,f,e=>e.messages),this.unsubCurrent=F(this,f,e=>e.currentThreadId),this.unsubThreads=F(this,f,e=>e.threads),this.unsubMode=F(this,f,e=>e.rightPaneMode),this.prevThreadId=f.getState().currentThreadId,f.subscribe((e,t)=>{e.messages!==t.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.live=[],this.pending=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage),document.addEventListener("queue-add",this.onQueueAdd),document.addEventListener("queue-remove",this.onQueueRemove),document.addEventListener("queue-clear",this.onQueueClear)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage),document.removeEventListener("queue-add",this.onQueueAdd),document.removeEventListener("queue-remove",this.onQueueRemove),document.removeEventListener("queue-clear",this.onQueueClear)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(e){const t=e.tool_calls;return t&&Array.isArray(t.attachments)?t.attachments:[]}mapRole(e){return e.role==="user"?"user":(e.role==="mentor","mentor")}render(){const e=f.getState(),{threads:t,currentThreadId:i}=e,s=this.frozenMessages??e.messages;Ka[Wa(e)];const n=i?t.find(o=>o.id===i)??null:null;return r`
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
                .publisherReferences=${e.rightPaneMode==="publisher"}
              ></chat-message>
            `)}
            ${this.live.map(o=>r`
                <chat-message
                  data-live-id=${o.id}
                  .chatRole=${o.role}
                  .content=${o.content}
                  .attachments=${o.attachments}
                  .pending=${o.role==="mentor"}
                  .publisherReferences=${e.rightPaneMode==="publisher"}
                ></chat-message>
              `)}
            ${this.pending.map(o=>r`
                <div class="opacity-50">
                  <chat-message
                    .chatRole=${"user"}
                    .content=${o.text}
                    .attachments=${o.attachments}
                    .publisherReferences=${e.rightPaneMode==="publisher"}
                  ></chat-message>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}};Js([d()],Fi.prototype,"live",2);Js([d()],Fi.prototype,"pending",2);Js([V("[data-scroll]")],Fi.prototype,"scroller",2);Fi=Js([w("chat-pane")],Fi);async function*fl(e){{yield*rh(e);return}}const nh="https://serdarsalim.com",dr=`[Get your own Mana →](${nh})`;function oh(e,t){const i={"goals-advisor":"Add a goal, give it a key result, or tick off a weekly task.","grocery-keeper":"Add something to Shopping and move it to the pantry when it is bought.","finance-keeper":"Log an expense, adjust a category budget, or record an account balance.","circle-keeper":"Open a person, add a note, or put them in more than one circle.","office-keeper":"Open a sample project and read the handoffs in its inbox.","learn-coach":"Open a sample skill, finish a lesson, or try a review question.",publisher:"Write a post, link its proof, add a voice sample, or try the publishing planner. Posting to LinkedIn is off here.",mana:"Open Notes and write, format, pin, search, or restore a note."};return t===1?`This chat is scripted. No AI model is connected, and it cannot change your tools.

${i[e]??"The tools work by hand, with fictional sample data."} Your edits stay in this browser.

${dr}`:t%2===0?`In your own Mana, a connected model can work with your tools by chat or voice. This demo only shows a scripted reply.

${i[e]??"Try Goals, Finance, Circles, Learn, Notes or Publisher from the sidebar."}`:`Keep exploring the tools. You can edit the sample data and reset it from Settings whenever you want.

${dr}`}async function*rh(e){const{t}=await Le(async()=>{const{t:m}=await import("./tables-D2emgc0r.js");return{t:m}},__vite__mapDeps([0,1])),{now:i}=await Le(async()=>{const{now:m}=await import("./db-DHWx8Fue.js");return{now:m}},[]);let s=e.threadId??null;if(s==null){const m=i();s=t.threads.insert({title:e.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:e.persona??"goals-advisor",tool:e.view?.tool??null,pinned_at:null,focus_goal_id:null,started_at:m,last_msg_at:m,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${m}`}}).id,yield{type:"thread",threadId:s}}t.messages.insert({thread_id:s,role:"user",content:e.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:i(),private:0});const n=t.threads.get(s)?.persona??e.persona??"goals-advisor",o=t.messages.where(m=>m.thread_id===s&&m.role==="user").length,a=oh(n,o),l=m=>new Promise(g=>setTimeout(g,m));await l(250);const h=a.match(/\S+\s*/g)??[a],u=3;for(let m=0;m<h.length&&!e.signal?.aborted;m+=u)yield{type:"text",text:h.slice(m,m+u).join("")},await l(45);t.messages.insert({thread_id:s,role:"mentor",content:a,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:i(),private:0});const p=t.threads.get(s);p&&t.threads.update(s,{last_msg_at:i(),title:p.title||e.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=Gi(class extends Gs{constructor(e){if(super(e),e.type!==yo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||this.nt?.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return xo}});var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,$e=(e,t,i,s)=>{for(var n=s>1?void 0:s?lh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ah(t,i,n),n};let pe=class extends Ie{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const e=!!this.href,t=Ms({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),i=r`
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
        >${i}</a
      >`:r`<button
      class=${t}
      type=${this.type}
      name=${this.name}
      value=${this.value}
      ?disabled=${this.disabled}
    >
      ${i}
    </button>`}};pe.styles=Re`
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
  `;$e([b({reflect:!0})],pe.prototype,"variant",2);$e([b({reflect:!0})],pe.prototype,"size",2);$e([b({type:Boolean,reflect:!0})],pe.prototype,"caret",2);$e([b({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);$e([b({type:Boolean,reflect:!0})],pe.prototype,"loading",2);$e([b({type:Boolean,reflect:!0})],pe.prototype,"pill",2);$e([b({type:Boolean,reflect:!0})],pe.prototype,"circle",2);$e([b()],pe.prototype,"type",2);$e([b()],pe.prototype,"name",2);$e([b()],pe.prototype,"value",2);$e([b()],pe.prototype,"href",2);$e([b()],pe.prototype,"target",2);$e([b()],pe.prototype,"rel",2);pe=$e([w("sc-button")],pe);var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Qi=(e,t,i,s)=>{for(var n=s>1?void 0:s?dh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ch(t,i,n),n};let Ft=class extends Ie{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=e=>{e.target===this.dialogEl&&this.hide()}}updated(e){e.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
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
    `}};Ft.styles=Re`
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
  `;Qi([b({type:Boolean,reflect:!0})],Ft.prototype,"open",2);Qi([b()],Ft.prototype,"label",2);Qi([b({attribute:"no-header",type:Boolean})],Ft.prototype,"noHeader",2);Qi([V("dialog")],Ft.prototype,"dialogEl",2);Ft=Qi([w("sc-dialog")],Ft);var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Xs=(e,t,i,s)=>{for(var n=s>1?void 0:s?uh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&hh(t,i,n),n};let ci=class extends Ie{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return r`
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
    `}};ci.styles=Re`
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
  `;Xs([b({type:Boolean,reflect:!0})],ci.prototype,"active",2);Xs([b()],ci.prototype,"placement",2);Xs([b({type:Number})],ci.prototype,"distance",2);ci=Xs([w("sc-popup")],ci);var ph=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,Yt=(e,t,i,s)=>{for(var n=s>1?void 0:s?mh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ph(t,i,n),n};let ct=class extends Ie{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=e=>{e.stopPropagation(),this.toggle()},this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.hide())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return r`
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
    `}};ct.styles=Re`
    :host {
      display: inline-block;
    }
  `;Yt([b({type:Boolean,reflect:!0})],ct.prototype,"open",2);Yt([b()],ct.prototype,"placement",2);Yt([b({type:Number})],ct.prototype,"distance",2);Yt([b({type:Boolean,attribute:"stay-open-on-select"})],ct.prototype,"stayOpenOnSelect",2);Yt([b({type:Boolean})],ct.prototype,"disabled",2);Yt([V("sc-popup")],ct.prototype,"popup",2);ct=Yt([w("sc-dropdown")],ct);var fh=Object.getOwnPropertyDescriptor,gh=(e,t,i,s)=>{for(var n=s>1?void 0:s?fh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Xn=class extends Ie{constructor(){super(...arguments),this.onClick=e=>{const t=e.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-menu-item");!t||t.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:t}}))},this.onKeydown=e=>{const t=this.items().filter(n=>!n.disabled);if(!t.length)return;const i=document.activeElement,s=i?t.indexOf(i):-1;e.key==="ArrowDown"?(e.preventDefault(),t[(s+1)%t.length]?.focus()):e.key==="ArrowUp"?(e.preventDefault(),t[(s-1+t.length)%t.length]?.focus()):(e.key==="Enter"||e.key===" ")&&i&&i.tagName.toLowerCase()==="sc-menu-item"&&(e.preventDefault(),i.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return r`<slot></slot>`}};Xn.styles=Re`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;Xn=gh([w("sc-menu")],Xn);var bh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Ji=(e,t,i,s)=>{for(var n=s>1?void 0:s?vh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&bh(t,i,n),n};let jt=class extends Ie{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return r`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};jt.styles=Re`
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
  `;Ji([b({reflect:!0})],jt.prototype,"type",2);Ji([b({reflect:!0})],jt.prototype,"value",2);Ji([b({type:Boolean,reflect:!0})],jt.prototype,"checked",2);Ji([b({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);jt=Ji([w("sc-menu-item")],jt);var yh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,se=(e,t,i,s)=>{for(var n=s>1?void 0:s?xh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&yh(t,i,n),n};let G=class extends Ie{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=e=>{this.value=e.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const e=this.type==="password"&&this.passwordVisible?"text":this.type;return r`
      <div class="form-control">
        ${this.label?r`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${Ms({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
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
    `}};G.styles=Re`
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
  `;se([b()],G.prototype,"value",2);se([b()],G.prototype,"type",2);se([b()],G.prototype,"size",2);se([b()],G.prototype,"placeholder",2);se([b()],G.prototype,"label",2);se([b({attribute:"help-text"})],G.prototype,"helpText",2);se([b()],G.prototype,"name",2);se([b({type:Boolean,reflect:!0})],G.prototype,"disabled",2);se([b({type:Boolean,reflect:!0})],G.prototype,"readonly",2);se([b({type:Boolean,reflect:!0})],G.prototype,"required",2);se([b({type:Boolean})],G.prototype,"clearable",2);se([b({type:Boolean,attribute:"password-toggle"})],G.prototype,"passwordToggle",2);se([b()],G.prototype,"autocomplete",2);se([b({type:Number})],G.prototype,"minlength",2);se([b({type:Number})],G.prototype,"maxlength",2);se([b()],G.prototype,"pattern",2);se([d()],G.prototype,"passwordVisible",2);se([V("input")],G.prototype,"input",2);G=se([w("sc-input")],G);var wh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Ne=(e,t,i,s)=>{for(var n=s>1?void 0:s?kh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&wh(t,i,n),n};let we=class extends Ie{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.close())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=e=>{const i=e.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-option");!i||i.disabled||(this.value=i.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=e=>{e.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=e=>{(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(e){e.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let e="";for(const t of this.options()){const i=t.value===this.value;t.selected=i,i&&(e=t.getTextLabel())}this.displayLabel=e}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const e=!!this.value;return r`
      <div class="form-control">
        ${this.label?r`<label class="label">${this.label}</label>`:null}
        <div
          class=${Ms({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${Ms({display:!0,placeholder:!e})}
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
    `}};we.styles=Re`
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
  `;Ne([b()],we.prototype,"value",2);Ne([b()],we.prototype,"placeholder",2);Ne([b()],we.prototype,"size",2);Ne([b()],we.prototype,"label",2);Ne([b({attribute:"help-text"})],we.prototype,"helpText",2);Ne([b()],we.prototype,"name",2);Ne([b({type:Boolean,reflect:!0})],we.prototype,"disabled",2);Ne([b({type:Boolean})],we.prototype,"clearable",2);Ne([b({type:Boolean,reflect:!0})],we.prototype,"open",2);Ne([d()],we.prototype,"displayLabel",2);Ne([V(".combobox")],we.prototype,"combobox",2);we=Ne([w("sc-select")],we);var $h=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,Xi=(e,t,i,s)=>{for(var n=s>1?void 0:s?Sh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&$h(t,i,n),n};let Ut=class extends Ie{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};Ut.styles=Re`
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
  `;Xi([b()],Ut.prototype,"value",2);Xi([b({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);Xi([b({type:Boolean,reflect:!0})],Ut.prototype,"selected",2);Xi([b({type:Boolean,reflect:!0})],Ut.prototype,"current",2);Ut=Xi([w("sc-option")],Ut);var Th=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Qt=(e,t,i,s)=>{for(var n=s>1?void 0:s?Ch(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Th(t,i,n),n};let dt=class extends Ie{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.show():e.type.startsWith("focus")&&t.has("focus")&&this.show()},this.onLeave=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.hide():e.type.startsWith("focus")&&t.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return r`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};dt.styles=Re`
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
  `;Qt([b()],dt.prototype,"content",2);Qt([b()],dt.prototype,"placement",2);Qt([b({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);Qt([b()],dt.prototype,"trigger",2);Qt([b({type:Number})],dt.prototype,"distance",2);Qt([b({type:Boolean,reflect:!0})],dt.prototype,"open",2);dt=Qt([w("sc-tooltip")],dt);const hr=16e3,Eh=.001,gl=3e4,Dh=1600;class Ah{constructor(){this.voicedMs=0,this.quietMs=0,this.done=!1}feed(t,i){return this.done?!1:(t>=(this.voicedMs?.01:.018)?(this.voicedMs+=i,this.quietMs=0):(this.quietMs+=i,this.voicedMs<300&&this.quietMs>=300&&(this.voicedMs=0)),this.voicedMs>=300&&this.quietMs>=Dh?this.done=!0:!1)}}const Is="Meta+D",_s="companion.dictate_shortcut",bl="Meta+J",vl="companion.open_shortcut";function Ph(e,t,i){if(t===i)return e;const s=t/i,n=new Float32Array(Math.floor(e.length/s));for(let o=0;o<n.length;o++)if(t>i){const a=Math.floor(o*s),l=Math.min(e.length,Math.floor((o+1)*s));let h=0;for(let u=a;u<l;u++)h+=e[u];n[o]=l>a?h/(l-a):0}else{const a=o*s,l=Math.floor(a),h=Math.min(l+1,e.length-1);n[o]=e[l]+(e[h]-e[l])*(a-l)}return n}function Mh(e){let t=0;for(let i=0;i<e.length;i++)t+=e[i];t/=e.length||1;for(let i=0;i<e.length;i++)if(Math.abs(e[i]-t)>=Eh)return!1;return!0}function yl(e){return/\(virtual\)|zoomaudiodevice|teams audio/i.test(e)}function Ih(e){const t=e.filter(i=>i.kind==="audioinput"&&i.deviceId!=="default"&&i.deviceId!=="communications"&&i.label&&!yl(i.label));return(t.find(i=>/built-in/i.test(i.label))??t[0])?.deviceId??null}function xl(e){return`I heard only silence from ${e?`“${e}”`:"the mic"}. Is it muted, or the wrong mic?`}function _h(e,t){const i=new ArrayBuffer(44+e.length*2),s=new DataView(i),n=(o,a)=>{for(let l=0;l<a.length;l++)s.setUint8(o+l,a.charCodeAt(l))};n(0,"RIFF"),s.setUint32(4,36+e.length*2,!0),n(8,"WAVE"),n(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,t,!0),s.setUint32(28,t*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),n(36,"data"),s.setUint32(40,e.length*2,!0);for(let o=0;o<e.length;o++){const a=Math.max(-1,Math.min(1,e[o]));s.setInt16(44+o*2,a<0?a*32768:a*32767,!0)}return new Uint8Array(i)}function Oh(e){return e.replace(/\[[^\]]*\]/g," ").replace(/\s+/g," ").trim()}function xt(e){const t=(e??"").split("+").map(o=>o.trim()).filter(Boolean),i=t.pop();if(!i)return null;const s=new Set(t.map(o=>o.toLowerCase())),n={meta:s.has("meta")||s.has("cmd"),ctrl:s.has("ctrl")||s.has("control"),alt:s.has("alt")||s.has("option"),shift:s.has("shift"),key:i.length===1?i.toLowerCase():i};return n.meta||n.ctrl||n.alt?n:null}function Zn(e,t){if(t.metaKey!==e.meta||t.ctrlKey!==e.ctrl||t.altKey!==e.alt||t.shiftKey!==e.shift)return!1;const i=t.key.length===1?t.key.toLowerCase():t.key,s=t.code?.startsWith("Key")?t.code.slice(3).toLowerCase():t.code?.startsWith("Digit")?t.code.slice(5):null;return i===e.key||s===e.key}function ks(e){const t=xt(e);return t?`${t.ctrl?"⌃":""}${t.alt?"⌥":""}${t.shift?"⇧":""}${t.meta?"⌘":""}${t.key.length===1?t.key.toUpperCase():t.key}`:""}async function wl(e,t){const i=await fetch("/api/voice/stt",{method:"POST",headers:{"content-type":"audio/wav"},body:e,signal:t});if(!i.ok)throw new Error(`stt ${i.status}`);const s=await i.json();return Oh(s.text??"")}const ur={echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0};async function Lh(){const e=await navigator.mediaDevices.getUserMedia({audio:ur});if(!yl(e.getAudioTracks()[0]?.label??""))return e;const t=Ih(await navigator.mediaDevices.enumerateDevices().catch(()=>[]));if(!t)return e;const i=await navigator.mediaDevices.getUserMedia({audio:{...ur,deviceId:{exact:t}}}).catch(()=>null);return i?(e.getTracks().forEach(s=>s.stop()),i):e}class kl{constructor(){this.ctx=null,this.stream=null,this.source=null,this.node=null,this.chunks=[],this.rate=48e3,this.opening=null,this.released=0}get active(){return!!this.ctx}start(t={}){return this.ctx?Promise.resolve():this.opening??=this.open(t).finally(()=>{this.opening=null})}async open(t){const i=this.released,s=await Lh();let n;try{const o=window.AudioContext||window.webkitAudioContext;n=new o}catch(o){throw s.getTracks().forEach(a=>a.stop()),o}if(await Promise.race([n.resume().catch(()=>{}),new Promise(o=>setTimeout(o,1e3))]),i!==this.released){s.getTracks().forEach(o=>o.stop()),await n.close().catch(()=>{});return}this.chunks=[],this.rate=n.sampleRate,this.ctx=n,this.stream=s;try{const o=this.source=n.createMediaStreamSource(s),a=this.node=n.createScriptProcessor(4096,1,1),l=new Ah;a.onaudioprocess=h=>{const u=new Float32Array(h.inputBuffer.getChannelData(0));this.chunks.push(u);let p=0;for(const g of u)p+=g*g;const m=Math.sqrt(p/u.length);t.level?.(Math.min(1,m*12)),l.feed(m,u.length/n.sampleRate*1e3)&&t.pause?.()},o.connect(a),a.connect(n.destination)}catch(o){throw await this.release(),o}}async stop(){const t=this.chunks,i=this.rate,s=this.stream?.getAudioTracks()[0]?.label??"";await this.release();const n=t.reduce((l,h)=>l+h.length,0);if(n<i*.3)return null;const o=new Float32Array(n);let a=0;for(const l of t)o.set(l,a),a+=l.length;return Mh(o)?{silent:!0,mic:s}:{wav:_h(Ph(o,i,hr),hr)}}async cancel(){await this.release()}async release(){this.released++,this.node&&(this.node.onaudioprocess=null),this.node?.disconnect(),this.source?.disconnect(),this.stream?.getTracks().forEach(i=>i.stop());const t=this.ctx;this.ctx=null,this.node=null,this.source=null,this.stream=null,this.chunks=[],await t?.close().catch(()=>{})}}var Rh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,$l=(e,t,i,s)=>{for(var n=s>1?void 0:s?Nh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Rh(t,i,n),n};let eo=class extends T{constructor(){super(...arguments),this.items=[]}onRemove(e){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:e},bubbles:!0,composed:!0}))}isPdf(e){return e.file?.type==="application/pdf"||(e.dataUrl?.startsWith("data:application/pdf")??!1)||(e.url?.endsWith(".pdf")??!1)}isSheet(e){return/\.(xlsx|xls|csv)$/i.test(e.file?.name??"")||/\.(xlsx|xls|csv)$/i.test(e.url??"")}render(){return this.items.length?r`
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
    `:r``}};$l([b({type:Array})],eo.prototype,"items",2);eo=$l([w("attachment-tray")],eo);var Fh=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,Se=(e,t,i,s)=>{for(var n=s>1?void 0:s?jh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Fh(t,i,n),n};const Uh=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Workshop thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Workshop AND sends in one shot — useful when you're inside an app and want Workshop to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function pr(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}const Bh=/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i;function mr(e){const t=e.type||"";return t.startsWith("image/")||t==="application/pdf"||t==="text/csv"||t==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||t==="application/vnd.ms-excel"?!0:Bh.test(e.name)}function Hh(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(String(s.result)),s.onerror=()=>i(s.error),s.readAsDataURL(e)})}function zh(e){const t=wo.map(i=>({id:i.id,label:i.label,short:i.short}));return t.some(i=>i.id===e)||t.push({id:e,label:e,short:e}),t}let ve=class extends T{constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.showUsage=!1,this.usage=[],this.turnsCompleted=0,this.model=xs(f.getState().settings["cockpit.mentor_model"]),this.inputFocused=!1,this.dictation="off",this.dictationNote="",this.recorder=new kl,this.takeTimer=null,this.quote=null,this.prevThreadId=null,this.onSelection=()=>{const e=document.activeElement;if(e instanceof HTMLTextAreaElement&&e.closest("publisher-editor")){const h=e.selectionStart??0,u=e.selectionEnd??h,p=e.value.slice(h,u).trim().slice(0,4e3);if(!p){this.quote=null;return}const m=e.matches("[data-draft-body]")?"the Publisher draft":"the Publisher first comment";if(p===this.quote?.text&&m===this.quote.from)return;this.quote={text:p,from:m,range:null};return}const t=document.getSelection(),i=t?.anchorNode,s=i instanceof Element?i:i?.parentElement,n=s?.closest(".notes-prose"),o=n?null:s?.closest("chat-message");if(!t||!n&&!o)return;const a=t.toString().trim().slice(0,4e3);if(t.isCollapsed||!a||!t.rangeCount){this.quote=null;return}let l;if(n){const h=n.firstElementChild?.textContent?.trim().slice(0,120)??"";l=h?`the note "${h}"`:"the note"}else l=o.chatRole==="user"?"my earlier message":"your reply";this.quote={text:a,from:l,range:t.getRangeAt(0).cloneRange()}},this.onGlobalKeyDown=e=>{(e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey&&(e.key==="n"||e.key==="N")&&(e.preventDefault(),this.startNewChat())},this.startNewChat=()=>{f.getState().selectThread(null),this.updateComplete.then(()=>this.textarea?.focus())},this.onChatAttach=e=>{const i=e.detail?.files??[];(async()=>{for(const s of i)await this.uploadFile(s,!1)})()},this.onDictateKey=e=>{if(e.key==="Escape"&&(this.dictation==="listening"||this.dictation==="opening")){e.preventDefault(),e.stopImmediatePropagation(),this.cancelDictation();return}const t=xt(f.getState().settings?.[_s])??xt(Is);e.repeat||!Zn(t,e)||(e.preventDefault(),e.stopImmediatePropagation(),this.dictation==="off"&&document.dispatchEvent(new CustomEvent("mana-reveal-chat")),this.toggleDictation())},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=F(this,f,e=>e.currentThreadId),this.prevThreadId=f.getState().currentThreadId,f.subscribe(e=>{e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.attachments=[],this.usage=[],this.turnsCompleted=0,this.showUsage=!1);const t=xs(e.settings["cockpit.mentor_model"]);t!==this.model&&(this.model=t)}),document.addEventListener("chat-attach",this.onChatAttach),document.addEventListener("keydown",this.onGlobalKeyDown),document.addEventListener("mana-new-chat",this.startNewChat),document.addEventListener("keydown",this.onDictateKey,!0),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("select",this.onSelection,!0)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach),document.removeEventListener("keydown",this.onGlobalKeyDown),document.removeEventListener("mana-new-chat",this.startNewChat),document.removeEventListener("keydown",this.onDictateKey,!0),this.takeTimer&&clearTimeout(this.takeTimer),this.recorder.cancel(),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("select",this.onSelection,!0)}updated(e){super.updated?.(e),!(!e.has("quote")||typeof CSS>"u"||!("highlights"in CSS))&&(this.quote?.range?CSS.highlights.set("chat-quote",new Highlight(this.quote.range)):CSS.highlights.delete("chat-quote"))}async uploadFile(e,t){const i=await Hh(e),s={localId:pr(),file:e,dataUrl:i,uploaded:!1,ephemeral:t};this.attachments=[...this.attachments,s];try{const n=await E.uploads.upload(i,t,e.name);this.attachments=this.attachments.map(o=>o.localId===s.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==s.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(e){const t=e.target,i=Array.from(t.files??[]);for(const s of i)await this.uploadFile(s,!1);t.value=""}async onPaste(e){const t=e.clipboardData?.items??[],i=[];for(const s of Array.from(t))if(s.kind==="file"){const n=s.getAsFile();n&&mr(n)&&i.push(n)}if(i.length){e.preventDefault();for(const s of i)await this.uploadFile(s,!1)}}onDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(i=>i.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}async onDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(mr);if(t.length){e.preventDefault();for(const i of t)await this.uploadFile(i,!1)}}onTrayRemove(e){const t=e.detail.localId;this.attachments=this.attachments.filter(i=>i.localId!==t)}async toggleDictation(){if(this.dictation==="listening")return this.finishDictation();if(this.dictation==="off"){this.dictationNote="",this.dictation="opening";try{await this.recorder.start()}catch{this.dictation="off",this.dictationNote="The mic is blocked or unavailable.";return}this.dictation!=="opening"||!this.recorder.active||(this.dictation="listening",this.takeTimer=setTimeout(()=>void this.finishDictation(),gl))}}async finishDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing";try{const e=await this.recorder.stop();if(this.dictation!=="writing")return;if(e&&"silent"in e){this.dictationNote=xl(e.mic);return}const t=e?await wl(e.wav):"";if(this.dictation!=="writing")return;if(!t){this.dictationNote="Didn't catch that. Try again.";return}this.insertText(t)}catch{this.dictationNote="Couldn't write that down. Try again."}finally{this.dictation==="writing"&&(this.dictation="off")}}async cancelDictation(){this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="off",await this.recorder.cancel()}insertText(e){const t=this.textarea,i=this.text,s=t&&document.activeElement===t?t.selectionStart:i.length,n=t&&document.activeElement===t?t.selectionEnd:i.length,o=i.slice(0,s),a=i.slice(n),l=o&&!/\s$/.test(o)?" ":"",h=a&&!/^\s/.test(a)?" ":"";this.text=o+l+e+h+a;const u=(o+l+e).length;this.updateComplete.then(()=>{this.textarea&&(this.textarea.focus(),this.textarea.setSelectionRange(u,u),this.textarea.style.height="auto",this.textarea.style.height=`${Math.min(this.textarea.scrollHeight,240)}px`,this.textarea.style.overflowY=this.textarea.scrollHeight>240?"auto":"hidden")})}dictationPlaceholder(){const e=ks(f.getState().settings?.[_s]??Is);return this.dictation==="opening"?"Opening the mic…":this.dictation==="listening"?`Listening… ${e} to finish, Esc to cancel`:this.dictation==="writing"?"Writing it down…":this.dictationNote||"Type / for commands"}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(e){const t=e.target;this.text=t.value,this.dictationNote="",t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,240)}px`,t.style.overflowY=t.scrollHeight>240?"auto":"hidden"}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.send())}async handleSlash(e){const[t,...i]=e.slice(1).trim().split(/\s+/),s=i.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:e,mentor:o},bubbles:!0,composed:!0}))};switch(t){case"help":case"?":return n(Uh),!0;case"clear":case"new":return await f.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=t==="mana"?"mana":t==="grocery"?"grocery-keeper":"goals-advisor";try{await f.getState().createThread({kind:"chat",persona:o})}catch(a){const l=a instanceof Error?a.message:String(a);return n(`Couldn't switch to ${t}: ${l}`),!0}return s?(this.text=s,!1):(n(`Switched to a new ${Ka[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(s||"").toLowerCase(),l={opus:"claude-opus-5-5",fable:"claude-fable-5-1",sonnet:"claude-sonnet-5-5",haiku:"claude-haiku-4-5-20251001",gpt:"gpt-6.1-sol",sol:"gpt-6.1-sol",astra:"gpt-6-astra",luna:"gpt-6-luna",terra:"gpt-6-luna","gpt-mini":"gpt-6-luna"}[o],h={};l&&(h[o]={id:l,label:zn(l)?.label??l});const u=h[o];return u?(await f.getState().setSetting("cockpit.mentor_model",u.id),n(`Workshop model → **${u.label}** (\`${u.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model opus|fable|sonnet|haiku|sol|astra|luna\` (current: ${xs(f.getState().settings["cockpit.mentor_model"])}).`),!0)}default:return!1}}async stop(){this.queue=[],this.dispatchEvent(new CustomEvent("queue-clear",{bubbles:!0,composed:!0})),this.abortController?.abort();const e=f.getState().currentThreadId;if(e!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:e})})}catch{}}async send(){let e=this.text.trim();const t=this.attachments.filter(n=>n.uploaded&&n.path&&n.url);if(!e&&t.length===0)return;if(e.startsWith("/")&&t.length===0){if(await this.handleSlash(e)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(e=this.text.trim(),!e&&t.length===0)return}if(this.quote&&e){const n=this.quote;e=`Selected in ${n.from}:
${n.text.split(`
`).map(o=>`> ${o}`).join(`
`)}

${e}`}const i=t.map(n=>({path:n.path,url:n.url,ephemeral:!!n.ephemeral})),s=t.filter(n=>!n.ephemeral).map(n=>({url:n.url}));if(this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[],this.quote=null,this.sending){const n=pr();this.queue.push({id:n,text:e,attachments:i,bubbleAttachments:s}),this.dispatchEvent(new CustomEvent("queue-add",{detail:{id:n,text:e,attachments:s},bubbles:!0,composed:!0}));return}this.sending=!0;try{for(await this.runTurn(e,i,s);this.queue.length>0;){const n=this.queue.shift();if(!n)break;this.dispatchEvent(new CustomEvent("queue-remove",{detail:{id:n.id},bubbles:!0,composed:!0})),await this.runTurn(n.text,n.attachments,n.bubbleAttachments)}}finally{this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus())}}async runTurn(e,t,i){const s=f.getState(),n=s.currentThreadId,o={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:e,attachments:i,liveDetail:o},bubbles:!0,composed:!0}));let a=!1;try{let l=n;const h=n==null?Wa(s):void 0;this.abortController=new AbortController;for await(const m of fl({threadId:n,message:e,attachments:t,persona:h,view:s.viewContext??void 0,signal:this.abortController.signal}))switch(m.type){case"thread":l=m.threadId,n==null&&this.prevThreadId==null&&(this.prevThreadId=m.threadId);break;case"text":a=!0,o.append?.(m.text);break;case"ops":this.dispatchOps(m.action);break;case"error":a=!0,o.append?.(`

_error: ${m.error}_`);break;case"done":{const g=f.getState().currentThreadId;if(g!==n&&g!==l)break;this.turnsCompleted+=1,this.usage=[...this.usage,{turn:this.turnsCompleted,model:this.model,context:m.contextTokens??null,start:m.startTokens??null,window:m.contextWindow??null,out:m.tokensOut??null}];break}}a||o.append?.("_(done)_"),o.finalize?.(),await f.getState().loadThreads();const u=f.getState().currentThreadId,p=u===n||u===l;l!=null&&p&&await f.getState().selectThread(l)}catch(l){l?.name==="AbortError"?o.append?.(`

_stopped_`):(console.warn("[composer] send failed",l),o.append?.(`

_error: ${l.message}_`)),o.finalize?.()}finally{this.abortController=void 0}}dispatchOps(e){document.dispatchEvent(new CustomEvent("ops-event",{detail:e,bubbles:!0,composed:!0}))}renderUsagePill(){const e=zn(this.model)?.short??this.model,t=this.contextNow(),s=t?(p=>p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p))(t):"—",n=this.contextLimit(),o=t?Math.min(100,t/n*100):0,l=2*Math.PI*6,h=o/100*l,u=o>80?"#f87171":o>50?"#fbbf24":"var(--accent, #3b82f6)";return r`
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
            stroke-dasharray="${h} ${l}"
            style="transition: stroke-dasharray .3s"
          />
        </svg>
        <span>${s}</span>
      </button>
    `}contextNow(){return this.usage[this.usage.length-1]?.context??0}contextLimit(){for(let e=this.usage.length-1;e>=0;e--){const t=this.usage[e];if(t&&t.model===this.model&&t.window)return t.window}return cc(this.model)}async onModelChange(e){this.model=e,await f.getState().setSetting("cockpit.mentor_model",e)}renderUsageModal(){if(!this.showUsage)return null;const e=this.usage.some(a=>a.context!=null),t=this.contextNow(),i=this.usage[0]?.start??0,s=this.contextLimit(),n=t?Math.min(100,Math.round(t/s*100)):0,o=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);return r`
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

          ${e?r`
            <!-- context bar -->
            <div class="mb-3">
              <div class="flex justify-between text-xs text-muted mb-1">
                <span>Context window</span>
                <span>${o(t)} / ${o(s)} (${n}%)</span>
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
        @remove=${e=>this.onTrayRemove(e)}
      ></attachment-tray>

      <form
        class="relative flex flex-col gap-1.5"
        @submit=${e=>{e.preventDefault(),this.send()}}
        @dragover=${this.onDragOver}
        @drop=${e=>void this.onDrop(e)}
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
    `}};Se([d()],ve.prototype,"text",2);Se([d()],ve.prototype,"attachments",2);Se([d()],ve.prototype,"sending",2);Se([d()],ve.prototype,"showUsage",2);Se([d()],ve.prototype,"usage",2);Se([d()],ve.prototype,"turnsCompleted",2);Se([d()],ve.prototype,"model",2);Se([d()],ve.prototype,"inputFocused",2);Se([d()],ve.prototype,"dictation",2);Se([d()],ve.prototype,"dictationNote",2);Se([d()],ve.prototype,"quote",2);Se([V("input[data-attach-input]")],ve.prototype,"fileInput",2);Se([V("textarea[data-composer-input]")],ve.prototype,"textarea",2);ve=Se([w("chat-composer")],ve);const to='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',Zi='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',es='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function qh(e){return e?`var(--nsc-${e}, currentColor)`:"currentColor"}class Os{constructor(t,i){this.host=t,this.kind=i,this.ids=new Set,this.ghosts=[],this.onPress=s=>{if(!this.ids.size&&!this.ghosts.length)return;const n=`${this.kind}:`;for(const o of s.composedPath()){const a=o instanceof HTMLElement?o.dataset.flash:void 0;if(a?.startsWith(n)){this.seen(Number(a.slice(n.length)));return}if(o===this.host)return}},t.addController(this)}take(t){if(!t||t.action!=="refresh")return;const i=(t.changed??[]).filter(n=>n.kind===this.kind).map(n=>n.id),s=(t.removed??[]).filter(n=>n.kind===this.kind);if(!(!i.length&&!s.length)){if(i.length&&(this.ids=new Set([...this.ids,...i])),s.length){const n=new Set(s.map(o=>o.id));this.ghosts=[...this.ghosts.filter(o=>!n.has(o.id)),...s.map(({id:o,title:a})=>({id:o,title:a}))],this.ids=new Set([...this.ids].filter(o=>!n.has(o)))}this.host.requestUpdate()}}has(t){return this.ids.has(t)}cls(t){return this.ids.has(t)?"agent-flash":""}key(t){return`${this.kind}:${t}`}seen(t){if(this.ids.has(t)){const i=new Set(this.ids);i.delete(t),this.ids=i,this.host.requestUpdate()}this.ghosts.some(i=>i.id===t)&&(this.ghosts=this.ghosts.filter(i=>i.id!==t),this.host.requestUpdate())}hostConnected(){this.host.addEventListener("pointerdown",this.onPress)}hostDisconnected(){this.host.removeEventListener("pointerdown",this.onPress),this.ids=new Set,this.ghosts=[]}}var Kh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Fe=(e,t,i,s)=>{for(var n=s>1?void 0:s?Wh(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Kh(t,i,n),n};const fr=864e5,Gh=6,gr=272,Vh=228,Ls="en-GB";function ns(e){return Date.parse(`${e}T00:00:00Z`)}function Yh(e){return new Date(e).toISOString().slice(0,10)}function br(){const e=new Date,t=i=>String(i).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function Qh(e){const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)}function vr(e,t){const i=new Date(e);return Date.UTC(i.getUTCFullYear(),i.getUTCMonth()+t,1)}const Jh=new Intl.DateTimeFormat(Ls,{weekday:"short",timeZone:"UTC"}),Xh=Array.from({length:7},(e,t)=>Jh.format(Date.UTC(2024,0,1+t))),Zh=new Intl.DateTimeFormat(Ls,{month:"short",timeZone:"UTC"}),eu=Array.from({length:12},(e,t)=>Zh.format(Date.UTC(2024,t,1))),tu={left:"m15 18-6-6 6-6",right:"m9 18 6-6-6-6",down:"m6 9 6 6 6-6"};let Me=class extends T{constructor(){super(...arguments),this.value="",this.name="",this.placeholder="Pick a date",this.label="Date",this.clearable=!1,this.headless=!1,this.fieldClass="px-2 py-1 text-sm bg-surface border border-line rounded",this.open=!1,this.view="days",this.month=0,this.yearsFrom=0,this.anchor=null,this.anchorPressedAt=0,this.onToggle=e=>{e.newState==="closed"&&(this.open=!1,this.detach())},this.onPress=e=>{e.target instanceof Node&&this.anchor?.contains(e.target)&&(this.anchorPressedAt=Date.now())},this.onScroll=e=>{e.target instanceof Node&&this.panel?.contains(e.target)||this.place()},this.place=()=>{const e=this.panel;if(!e||!this.anchor)return;const t=this.anchor.getBoundingClientRect(),i=e.offsetHeight,s=6;let n=t.bottom+s;n+i>window.innerHeight-8&&t.top-s-i>8&&(n=t.top-s-i);const o=Math.min(Math.max(8,t.left),window.innerWidth-gr-8);e.style.top=`${Math.max(8,n)}px`,e.style.left=`${Math.max(8,o)}px`}}async show(e){const t=Date.now()-this.anchorPressedAt<500;if(this.anchorPressedAt=0,this.open||t)return;this.anchor=e??this.querySelector(".dp-field")??this;const i=ns(this.value);this.month=Qh(Number.isNaN(i)?ns(br()):i),this.view="days",this.open=!0,await this.updateComplete;const s=this.panel;s&&(s.showPopover(),this.place(),window.addEventListener("resize",this.place),window.addEventListener("scroll",this.onScroll,!0),window.addEventListener("pointerdown",this.onPress,!0))}hide(){this.panel?.matches(":popover-open")&&this.panel.hidePopover()}disconnectedCallback(){super.disconnectedCallback(),this.detach()}get panel(){return this.querySelector(".dp-panel")}detach(){window.removeEventListener("resize",this.place),window.removeEventListener("scroll",this.onScroll,!0),window.removeEventListener("pointerdown",this.onPress,!0)}pick(e){this.value=e,this.dispatchEvent(new Event("change",{bubbles:!0})),this.hide()}step(e){this.view==="days"?this.month=vr(this.month,e):this.view==="months"?this.month=vr(this.month,e*12):this.yearsFrom+=e*12}words(e){const t=ns(e);if(Number.isNaN(t))return this.placeholder;const i=new Date(t).getUTCFullYear()!==new Date().getFullYear();return new Intl.DateTimeFormat(Ls,{...i?{year:"numeric"}:{weekday:"short"},day:"numeric",month:"short",timeZone:"UTC"}).format(t)}render(){return r`
      ${this.name?r`<input type="hidden" name=${this.name} .value=${this.value} />`:c}
      ${this.headless?c:this.renderField()}
      ${this.open?this.renderPanel():c}
    `}renderField(){const e=Number.isNaN(ns(this.value));return r`<button
      type="button"
      class="dp-field inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-left ${this.fieldClass} ${this.open?"!border-accent":""}"
      aria-haspopup="dialog"
      aria-expanded=${this.open}
      aria-label=${`${this.label}: ${this.words(this.value)}`}
      @click=${t=>{t.stopPropagation(),this.show()}}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="shrink-0 text-muted">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      <span class="truncate ${e?"text-muted":"text-ink"}">${this.words(this.value)}</span>
    </button>`}renderPanel(){const e=new Date(this.month).getUTCFullYear(),t=this.view==="days"?new Intl.DateTimeFormat(Ls,{month:"long",year:"numeric",timeZone:"UTC"}).format(this.month):this.view==="months"?String(e):`${this.yearsFrom}–${this.yearsFrom+11}`,i=br();return r`<div
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
          @click=${()=>{this.view==="months"&&(this.yearsFrom=e-1),this.view=this.view==="days"?"months":"years"}}
        >
          ${t} ${this.view!=="years"?this.chevron("down"):c}
        </button>
        <span class="flex items-center gap-0.5">
          ${this.navButton("Previous","left",-1)} ${this.navButton("Next","right",1)}
        </span>
      </div>
      <div style="height:${Vh}px">
        ${this.view==="days"?this.renderDays(i):this.view==="months"?this.renderGrid(eu.map((s,n)=>({key:n,label:s,selected:this.value.startsWith(`${e}-${String(n+1).padStart(2,"0")}`),current:i.startsWith(`${e}-${String(n+1).padStart(2,"0")}`)})),s=>{this.month=Date.UTC(e,s,1),this.view="days"}):this.renderGrid(Array.from({length:12},(s,n)=>this.yearsFrom+n).map(s=>({key:s,label:String(s),selected:s===e,current:i.startsWith(String(s))})),s=>{this.month=Date.UTC(s,new Date(this.month).getUTCMonth(),1),this.view="months"})}
      </div>
      <div class="mt-2 flex items-center justify-between px-1 text-xs">
        <button type="button" class="text-accent hover:underline" @click=${()=>this.pick(i)}>Today</button>
        ${this.clearable&&this.value?r`<button type="button" class="text-muted hover:text-ink" @click=${()=>this.pick("")}>Clear</button>`:c}
      </div>
    </div>`}renderDays(e){const t=new Date(this.month),i=this.month-(t.getUTCDay()+6)%7*fr,s=t.getUTCMonth();return r`<div class="grid grid-cols-7 text-center">
      ${Xh.map(n=>r`<span class="pb-1 text-[11px] font-medium text-muted">${n}</span>`)}
      ${Array.from({length:Gh*7},(n,o)=>i+o*fr).map(n=>{const o=Yh(n),a=o===this.value,l=a?"bg-accent font-medium text-white":o===e?"font-semibold text-accent hover:bg-hover":new Date(n).getUTCMonth()===s?"text-ink hover:bg-hover":"text-muted/60 hover:bg-hover";return r`<div class="py-px">
          <button
            type="button"
            aria-pressed=${a}
            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm tabular-nums transition-colors ${l}"
            @click=${()=>this.pick(o)}
          >
            ${new Date(n).getUTCDate()}
          </button>
        </div>`})}
    </div>`}renderGrid(e,t){return r`<div class="grid h-full grid-cols-3 grid-rows-4 gap-1">
      ${e.map(i=>r`<button
          type="button"
          class="rounded-lg text-sm transition-colors ${i.selected?"bg-accent font-medium text-white":i.current?"font-semibold text-accent hover:bg-hover":"text-ink hover:bg-hover"}"
          @click=${()=>t(i.key)}
        >
          ${i.label}
        </button>`)}
    </div>`}navButton(e,t,i){return r`<button
      type="button"
      aria-label=${e}
      class="grid h-7 w-7 place-items-center rounded-md transition-colors hover:bg-hover"
      @click=${()=>this.step(i)}
    >
      ${this.chevron(t)}
    </button>`}chevron(e){const t=e==="down"?14:16;return r`<svg width=${t} height=${t} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="text-muted">
      <path d=${tu[e]} />
    </svg>`}};Fe([b()],Me.prototype,"value",2);Fe([b()],Me.prototype,"name",2);Fe([b()],Me.prototype,"placeholder",2);Fe([b()],Me.prototype,"label",2);Fe([b({type:Boolean})],Me.prototype,"clearable",2);Fe([b({type:Boolean})],Me.prototype,"headless",2);Fe([b({attribute:"field-class"})],Me.prototype,"fieldClass",2);Fe([d()],Me.prototype,"open",2);Fe([d()],Me.prototype,"view",2);Fe([d()],Me.prototype,"month",2);Fe([d()],Me.prototype,"yearsFrom",2);Me=Fe([w("mana-date-picker")],Me);const iu="(max-width: 639px)";function di(){return typeof matchMedia=="function"&&matchMedia(iu).matches}const $s=new Set,ji="mana-pending-delete";function Sl(e){return $s.has(e)}function pn(){window.dispatchEvent(new Event(ji))}function Rs(e,t,i){$s.add(e),pn(),Lo(t,{onUndo:()=>{$s.delete(e),pn()},onExpire:async()=>{try{await i()}catch(s){console.warn("[goals] delete failed",s)}finally{$s.delete(e),pn()}}})}const su=4e3;let Pt=null;function Lo(e,t){Pt&&(clearTimeout(Pt.timer),Pt.expire());const i=document.createElement("div");i.className="mana-undo-toast",i.setAttribute("role","status");const s=document.createElement("span");s.textContent=e;const n=document.createElement("button");n.type="button",n.textContent="Undo",i.append(s,n),document.body.append(i);let o=!1;const a=()=>{i.classList.add("is-leaving"),setTimeout(()=>i.remove(),180),Pt?.el===i&&(Pt=null)},l=()=>{o||(o=!0,a(),t.onExpire?.())};n.addEventListener("click",()=>{o||(o=!0,clearTimeout(Pt?.timer),a(),t.onUndo())}),Pt={el:i,timer:window.setTimeout(l,su),expire:l}}const mn=84;function Tl(e,t){let i=null,s=0,n=0,o=0,a=!1;const l=()=>{e.style.transition="transform .18s ease, background-color .18s ease",e.style.transform="",e.style.backgroundColor="",e.classList.remove("is-swiping","swipe-right","swipe-left","swipe-armed"),setTimeout(()=>e.style.transition="",200)},h=g=>{g.pointerType!=="touch"||!di()||g.target.closest("input, textarea, [contenteditable]")||(i=g.pointerId,s=g.clientX,n=g.clientY,o=0,a=!1)},u=g=>{if(g.pointerId!==i)return;const v=g.clientX-s,y=g.clientY-n;if(!a){if(Math.abs(y)>10&&Math.abs(y)>Math.abs(v)){i=null;return}if(Math.abs(v)<12)return;if(v>0&&!t.onRight||v<0&&!t.onLeft){i=null;return}a=!0,e.setPointerCapture(g.pointerId),e.classList.add("is-swiping")}o=v>0?t.onRight?v:0:t.onLeft?v:0,e.style.transform=`translateX(${o}px)`,e.classList.toggle("swipe-right",o>0),e.classList.toggle("swipe-left",o<0),e.classList.toggle("swipe-armed",Math.abs(o)>=mn)},p=g=>{if(g.pointerId!==i||(i=null,!a))return;const v=o>=mn?t.onRight:o<=-mn?t.onLeft:void 0,y=A=>{A.stopPropagation(),A.preventDefault()};e.addEventListener("click",y,{capture:!0,once:!0}),setTimeout(()=>e.removeEventListener("click",y,{capture:!0}),350),l(),v?.()},m=g=>{g.pointerId===i&&(i=null,a&&l())};return e.addEventListener("pointerdown",h),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",m),()=>{e.removeEventListener("pointerdown",h),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",m)}}var nu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,pt=(e,t,i,s)=>{for(var n=s>1?void 0:s?ou(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&nu(t,i,n),n};function hi(e){document.querySelector("goals-sheet")?.remove();const t=document.createElement("goals-sheet");t.target=e,document.body.append(t)}function os(){return f.getState().goals.filter(e=>e.status==="active"&&!e.archived)}function ru(e,t){return t!=null?`k:${t}`:e!=null?`g:${e}`:""}function yr(e){return e.startsWith("k:")?{goalId:null,keyResultId:Number(e.slice(2))}:e.startsWith("g:")?{goalId:Number(e.slice(2)),keyResultId:null}:{goalId:null,keyResultId:null}}const au=r`<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`,lu=r`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`;let Xe=class extends T{constructor(){super(...arguments),this.target={kind:"new-commit"},this.draft="",this.newLink="",this.newGoalId=null,this.newDate="",this.busy=!1,this.added=0,this.closing=!1,this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.close())},this.onTitleKey=e=>{e.key!=="Enter"||e.shiftKey||e.isComposing||(e.preventDefault(),this.target.kind==="new-commit"||this.target.kind==="new-kr"?this.add():this.close())}}connectedCallback(){super.connectedCallback(),this.unsub=f.subscribe(()=>this.requestUpdate()),document.addEventListener("keydown",this.onKey);const e=this.target;e.kind==="commit"&&(this.draft=this.commit?.title??""),e.kind==="kr"&&(this.draft=this.kr?.kr.title??""),e.kind==="new-kr"&&(this.newGoalId=e.goalId??os()[0]?.id??null),document.documentElement.classList.add("goals-sheet-open")}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("keydown",this.onKey),document.documentElement.classList.remove("goals-sheet-open")}firstUpdated(){const e=this.titleEl;e&&(this.grow(e),(this.target.kind==="new-commit"||this.target.kind==="new-kr")&&e.focus())}get commit(){const e=this.target;return e.kind==="commit"?f.getState().commitments.find(t=>t.id===e.id):void 0}get kr(){const e=this.target;if(e.kind==="kr")for(const t of f.getState().goals){const i=t.keyResults.find(s=>s.id===e.id);if(i)return{kr:i,goal:t}}}grow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}async close(){this.closing||(this.closing=!0,await this.saveTitle(),this.classList.add("is-leaving"),setTimeout(()=>this.remove(),180))}async saveTitle(){const e=this.draft.trim(),t=f.getState();this.target.kind==="commit"&&this.commit&&e&&e!==this.commit.title&&await t.updateCommitment(this.commit.id,{title:e}).catch(s=>console.warn("[goals] save failed",s));const i=this.kr;this.target.kind==="kr"&&i&&e&&e!==i.kr.title&&await t.updateKeyResult(i.kr.id,{title:e}).catch(s=>console.warn("[goals] save failed",s))}async add(){const e=this.draft.trim();if(!e||this.busy)return;const t=f.getState();this.busy=!0;try{this.target.kind==="new-commit"?await t.createCommitment({title:e,...yr(this.newLink)}):this.newGoalId!=null&&await t.addKeyResult(this.newGoalId,e,this.newDate||null),this.draft="",this.added+=1,this.titleEl&&(this.titleEl.value="",this.grow(this.titleEl),this.titleEl.focus())}catch(i){console.warn("[goals] add failed",i)}finally{this.busy=!1}}toggleDone(){const e=f.getState();this.commit&&e.updateCommitment(this.commit.id,{done:!this.commit.done});const t=this.kr;t&&e.updateKeyResult(t.kr.id,{done:!t.kr.done})}remove_(){const e=f.getState(),t=this.commit,i=this.kr;this.closing=!0,this.classList.add("is-leaving"),setTimeout(()=>this.remove(),180),t&&Rs(`commit:${t.id}`,"Task deleted",()=>e.deleteCommitment(t.id)),i&&Rs(`kr:${i.kr.id}`,"Key result deleted",()=>e.deleteKeyResult(i.kr.id))}renderLinkSelect(e,t){return r`<label class="gs-field">
      <span class="gs-label">Goal</span>
      <select class="gs-select" .value=${e} @change=${i=>t(i.target.value)}>
        <option value="" ?selected=${e===""}>No goal</option>
        ${os().map(i=>r`
          <option value=${`g:${i.id}`} ?selected=${e===`g:${i.id}`}>${i.title}</option>
          ${i.keyResults.filter(s=>!s.done||e===`k:${s.id}`).map(s=>r`<option value=${`k:${s.id}`} ?selected=${e===`k:${s.id}`}> ${s.title}</option>`)}
        `)}
      </select>
    </label>`}renderTitle(e,t){return r`<div class="gs-title-row">
      ${t?r`<button type="button" class="gs-check ${t.done?"is-done":""}" aria-label=${t.done?"Mark incomplete":"Mark complete"} @click=${this.toggleDone}>${t.done?au:c}</button>`:c}
      <textarea
        class="gs-title ${t?.done?"is-done":""}"
        rows="1"
        enterkeyhint=${t?"done":"send"}
        placeholder=${e}
        .value=${this.draft}
        @input=${i=>{const s=i.target;this.draft=s.value,this.grow(s)}}
        @keydown=${this.onTitleKey}
      ></textarea>
      ${t?c:r`<button type="button" class="gs-send" aria-label="Add" ?disabled=${!this.draft.trim()||this.busy} @click=${()=>this.add()}>${lu}</button>`}
    </div>`}renderBody(){const e=this.target,t=f.getState();if(e.kind==="commit"){const i=this.commit;return i?r`
        ${this.renderTitle("Task name",{done:i.done===1})}
        <div class="gs-fields">
          ${this.renderLinkSelect(ru(i.goal_id,i.key_result_id),s=>void t.updateCommitment(i.id,yr(s)))}
          <label class="gs-field">
            <span class="gs-label">Repeat every week</span>
            <input type="checkbox" class="gs-switch" .checked=${i.recurring===1} @change=${s=>void t.updateCommitment(i.id,{recurring:s.target.checked})} />
          </label>
        </div>
        <button type="button" class="gs-delete" @click=${this.remove_}>Delete task</button>`:r`<p class="gs-empty">This task is gone.</p>`}if(e.kind==="kr"){const i=this.kr;if(!i)return r`<p class="gs-empty">This key result is gone.</p>`;const{kr:s,goal:n}=i;return r`
        <p class="gs-context">${n.title}</p>
        ${this.renderTitle("Key result",{done:s.done===1})}
        <div class="gs-fields">
          <label class="gs-field">
            <span class="gs-label">Due</span>
            <input type="date" class="gs-date" .value=${s.target_date??""} @change=${o=>void t.updateKeyResult(s.id,{targetDate:o.target.value||null})} />
          </label>
        </div>
        <button type="button" class="gs-delete" @click=${this.remove_}>Delete key result</button>`}if(e.kind==="new-kr"){const i=os();return i.length===0?r`<p class="gs-empty">Add a goal first, then its key results.</p>`:r`
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
          ${os().map(i=>r`
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
    `}};pt([b({attribute:!1})],Xe.prototype,"target",2);pt([d()],Xe.prototype,"draft",2);pt([d()],Xe.prototype,"newLink",2);pt([d()],Xe.prototype,"newGoalId",2);pt([d()],Xe.prototype,"newDate",2);pt([d()],Xe.prototype,"busy",2);pt([d()],Xe.prototype,"added",2);pt([V("textarea")],Xe.prototype,"titleEl",2);Xe=pt([w("goals-sheet")],Xe);var cu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,Jt=(e,t,i,s)=>{for(var n=s>1?void 0:s?du(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&cu(t,i,n),n};const hu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function uu(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return e;const i=Number(t[3]),s=hu[Number(t[2])-1],n=t[1].slice(2);return`${i} ${s} ${n}`}function pu(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return null;const i=new Date(`${e}T00:00:00`).getTime();return Math.round((i-Date.now())/864e5)}let St=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onPendingDelete=()=>this.requestUpdate(),this.onRowTap=e=>{!di()||this.editing||e.target.closest("button, input, textarea, mana-date-picker")||(this.clearHighlight(),hi({kind:"kr",id:this.kr.id}))},this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-kr-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-kr-id"),i=t?Number(t):NaN,s=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(i)||i===this.kr.id)return;e.preventDefault();const n=s==="after"?this.index+1:this.index;await f.getState().reorderKeyResult(i,n)},this.onEditKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=F(this,f,e=>e.focusedRowKey),window.addEventListener(ji,this.onPendingDelete)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.(),this.detachSwipe?.(),this.detachSwipe=void 0,window.removeEventListener(ji,this.onPendingDelete)}updated(){if(this.style.display=Sl(`kr:${this.kr.id}`)?"none":"",this.detachSwipe)return;const e=this.querySelector("li.kr");e&&(this.detachSwipe=Tl(e,{onRight:()=>{const t=this.kr.done===1;this.toggleDone(),Lo(t?"Marked not done":"Completed",{onUndo:()=>void f.getState().updateKeyResult(this.kr.id,{done:t})})},onLeft:()=>{const t=this.kr.id;Rs(`kr:${t}`,"Key result deleted",()=>f.getState().deleteKeyResult(t))}}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("kr-touched",{detail:{id:this.kr.id},bubbles:!0,composed:!0}))}async toggleDone(){this.clearHighlight(),await f.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await f.getState().deleteKeyResult(this.kr.id)}startEdit(){if(!this.editing){if(this.clearHighlight(),di()){hi({kind:"kr",id:this.kr.id});return}this.editing=!0}}async focusTitle(){this.editing||(this.clearHighlight(),this.editing=!0),await this.updateComplete;const e=this.querySelector("input.kr-title");e?.focus(),e?.select()}async commitEdit(e){const t=e.trim();this.editing=!1,!(!t||t===this.kr.title)&&await f.getState().updateKeyResult(this.kr.id,{title:t})}async pickDate(e){e.stopPropagation(),await this.querySelector("mana-date-picker.kr-date-picker")?.show(e.currentTarget)}async onDateChange(e){const t=e.target.value;await f.getState().updateKeyResult(this.kr.id,{targetDate:t||null})}renderDateChip(){if(this.kr.done===1)return r`<span
        class="kr-chip shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
        style="color:var(--nsc-green);background:color-mix(in srgb, var(--nsc-green) 13%, transparent);"
        >Done</span
      >`;if(this.kr.target_date){const e=pu(this.kr.target_date);if(e!=null&&e<0)return r`<button
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
        ${uu(this.kr.target_date)}
      </button>`}return r`<button
      type="button"
      class="kr-date-btn empty shrink-0 text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const e=this.kr.done===1,t=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",i=`kr:${this.kr.id}`,n=f.getState().focusedRowKey===i?"bg-hover":"";return r`
      <li
        class="kr group/kr relative flex items-center gap-2 py-0.5 px-2 -mx-2 rounded hover:bg-hover ${t} ${e?"done opacity-60":""} ${n}"
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
              class="kr-title flex-1 text-sm cursor-text ${e?"line-through":this.highlight?"font-medium":""} ${this.kr.title?"":"text-muted"}"
              style=${this.highlight&&!e?"color:var(--nsc-green);":""}
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
    `}};Jt([b({attribute:!1})],St.prototype,"kr",2);Jt([b({attribute:!1})],St.prototype,"index",2);Jt([b({type:Boolean})],St.prototype,"highlight",2);Jt([d()],St.prototype,"editing",2);Jt([d()],St.prototype,"dragEnabled",2);Jt([d()],St.prototype,"dragOverPos",2);St=Jt([w("key-result-row")],St);const Cl=["slate","red","orange","amber","green","teal","blue","indigo","violet","pink"],El=["target","rocket","compass","flag","flame","lightbulb","heart","dumbbell","brain","book","briefcase","code","pen","megaphone","camera","mountain","globe","zap","star","sparkles"];let rs;function mu(e){rs?.();const{goal:t,anchor:i}=e,s=document.createElement("div");s.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(i).fontFamily,s.style.width=`${Math.min(256,window.innerWidth-16)}px`,s.style.maxHeight=`${window.innerHeight-16}px`,s.dataset.goalMenu=String(t.id),document.body.appendChild(s);let n=e.page??"main",o=!1,a="",l=!1;const h=(S=!1)=>{l||(l=!0,document.removeEventListener("pointerdown",p,!0),document.removeEventListener("keydown",A,!0),window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",g),xe(c,s),s.remove(),rs===u&&(rs=void 0),S&&i.isConnected&&i.focus({preventScroll:!0}))},u=()=>h();rs=u;const p=S=>{S.composedPath().includes(s)||h()},m=S=>{(!(S.target instanceof Node)||!s.contains(S.target))&&h()},g=()=>h(),v=()=>[...s.querySelectorAll("button:not(:disabled)")],y=()=>v()[0]?.focus({preventScroll:!0}),A=S=>{if(S.key==="Escape"){S.preventDefault(),S.stopPropagation(),n!=="main"?N("main"):h(!0);return}if(S.key==="Tab"){h();return}if(!s.contains(document.activeElement)||!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].includes(S.key))return;S.preventDefault(),S.stopPropagation();const ge=v(),ei=ge.indexOf(document.activeElement),rn=S.key==="Home"?0:S.key==="End"?ge.length-1:(ei+(["ArrowUp","ArrowLeft"].includes(S.key)?-1:1)+ge.length)%ge.length;ge[rn]?.focus()},x=()=>{const S=i.getBoundingClientRect(),ge=s.getBoundingClientRect(),ei=e.point?.x??S.left,rn=e.point?.y??(S.bottom+6+ge.height>window.innerHeight-8?S.top-ge.height-6:S.bottom+6);s.style.left=`${Math.max(8,Math.min(ei,window.innerWidth-ge.width-8))}px`,s.style.top=`${Math.max(8,Math.min(rn,window.innerHeight-ge.height-8))}px`},N=S=>{n=S,a="",ft(),y()},Z=S=>{h(),e.onAction(S)},je=async S=>{if(!o){o=!0,a="",ft();try{await S(),h(!0)}catch(ge){o=!1,a=ge instanceof Error?ge.message:"Could not update goal. Try again.",l||(ft(),y())}}},Ce=(S,ge,ei=!1)=>r`<button
    type="button" role=${n==="status"?"menuitemradio":"menuitem"}
    aria-checked=${n==="status"?String(ei):c}
    class="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    ?disabled=${o} @click=${ge}><span class="flex-1">${S}</span>${ei?r`<span aria-hidden="true">✓</span>`:c}</button>`,ft=()=>{s.setAttribute("role",n==="main"||n==="status"?"menu":"dialog"),s.setAttribute("aria-label",n==="main"?`Actions for ${t.title}`:`Goal ${n}`),s.setAttribute("aria-busy",String(o)),xe(r`
      ${n!=="main"?r`<button type="button" role=${n==="status"?"menuitem":c} class="w-full rounded px-3 py-2 text-left text-sm font-medium hover:bg-hover" ?disabled=${o} @click=${()=>N("main")}>‹ Back</button>`:c}
      ${n==="main"?r`
        ${Ce("Rename",()=>Z("rename"))}
        ${Ce("Add key result",()=>Z("add-kr"))}
        ${Ce("Change target date",()=>Z("target-date"))}
        ${Ce("Change color",()=>N("color"))}
        ${Ce("Change icon",()=>N("icon"))}
        ${Ce("Change status",()=>N("status"))}
        ${Ce(e.expanded?"Collapse key results":"Expand key results",()=>Z("toggle"))}
        ${Ce("Edit details and history",()=>Z("details"))}
        ${t.archived?Ce("Restore goal",()=>void je(()=>f.getState().updateGoal(t.id,{status:"active"}))):Ce("Archive goal",()=>void je(()=>f.getState().deleteGoal(t.id,!1)))}
      `:c}
      ${n==="color"?r`<div class="grid grid-cols-5 gap-2 p-2" role="group" aria-label="Color">
        ${[null,...Cl].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style="background:${S?`var(--nsc-${S})`:"var(--color-hover)"};${(t.color??null)===S?"box-shadow:0 0 0 2px var(--color-ink);":""}"
          aria-label=${S??"No color"} aria-pressed=${(t.color??null)===S} title=${S??"No color"}
          ?disabled=${o} @click=${()=>void je(()=>f.getState().updateGoal(t.id,{color:S}))}
        >${S?c:"∅"}</button>`)}
      </div>`:c}
      ${n==="icon"?r`<div class="grid grid-cols-5 gap-1 p-2" role="group" aria-label="Icon">
        ${[null,...El].map(S=>r`<button type="button"
          class="grid h-8 w-8 place-items-center rounded hover:bg-hover focus-visible:bg-hover outline-none"
          style=${(t.symbol??null)===S?"background:var(--color-hover);box-shadow:inset 0 0 0 1.5px var(--color-ink);":""}
          aria-label=${S??"No icon"} aria-pressed=${(t.symbol??null)===S} title=${S??"No icon"}
          ?disabled=${o} @click=${()=>void je(()=>f.getState().updateGoal(t.id,{symbol:S}))}
        ><span class="inline-flex h-4 w-4 items-center justify-center">${S?W(Wt(Gt[S])):"∅"}</span></button>`)}
      </div>`:c}
      ${n==="status"?["active","paused","shipped"].map(S=>Ce({active:"Active",paused:"Paused",shipped:"Shipped"}[S],()=>void je(()=>f.getState().updateGoal(t.id,{status:S})),t.status===S)):c}
      ${a?r`<p role="alert" class="px-3 py-2 text-xs text-red-500">${a}</p>`:c}
    `,s),x()};return document.addEventListener("pointerdown",p,!0),document.addEventListener("keydown",A,!0),window.addEventListener("scroll",m,!0),window.addEventListener("resize",g),ft(),y(),u}function Je(e,t){const i={text:e,kind:t};document.dispatchEvent(new CustomEvent("mana-planner-note",{detail:i}))}async function Dl(e,t){const i=crypto.randomUUID();try{if(!(await B("/api/ideas",{text:t},i))?.id)throw new Error("no parked item id")}catch{return Je(`Couldn't park: ${t}`,"error"),!1}try{await yt(`/api/commitments/${e}`,i),Je(`Parked: ${t}`,"user")}catch{Je(`Parked, but the task wasn't removed: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}async function Ro(e,t){const i=crypto.randomUUID();try{const s=f.getState().currentWeek??void 0;if(!(await B("/api/commitments",{title:t,week:s},i))?.id)throw new Error("no task id")}catch{return Je(`Couldn't add to the week: ${t}`,"error"),!1}try{await yt(`/api/ideas/${e}`,i),Je(`Added to Weekly: ${t}`,"user")}catch{Je(`Added, but it's still parked: ${t}`,"error")}return document.dispatchEvent(new CustomEvent("mana-ideas-changed")),f.getState().loadCommitments().catch(()=>{}),!0}var fu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,tt=(e,t,i,s)=>{for(var n=s>1?void 0:s?gu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&fu(t,i,n),n};const No="slmai.cockpit.collapsedGoals",bu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';function yu(e){if(!/^(\d{4})-(\d{2})-(\d{2})$/.exec(e))return"";const i=new Date(`${e}T00:00:00`),s=new Date,n=Math.round((i.getTime()-s.getTime())/864e5);if(n<0)return"overdue";if(n===0)return"due today";if(n<31)return`${n} day${n===1?"":"s"} left`;const o=Math.round(n/30.44);if(o<12)return`${o} month${o===1?"":"s"} left`;const a=n/365.25,l=a<2?a.toFixed(1):String(Math.round(a));return`${l} year${l==="1"||l==="1.0"?"":"s"} left`}function xu(e){const t=/^(\d{4})-(\d{2})-\d{2}$/.exec(e);return t?`${bu[Number(t[2])-1]} ${t[1]}`:e}function xr(){try{const e=localStorage.getItem(No);if(!e)return new Set;const t=JSON.parse(e);return Array.isArray(t)?new Set(t.filter(i=>typeof i=="number")):new Set}catch{return new Set}}function wr(e){try{localStorage.setItem(No,JSON.stringify(Array.from(e)))}catch{}}let He=class extends T{constructor(){super(...arguments),this.northStars=[],this.highlight=!1,this.highlightKrIds=new Set,this.flashKrIds=new Set,this.editingTitle=!1,this.markerOpen=!1,this.creatingKR=!1,this.collapsed=xr(),this.onStorage=e=>{(e.key===No||e.key==null)&&(this.collapsed=xr())},this.onDocClick=e=>{this.markerOpen&&!this.contains(e.target)&&(this.markerOpen=!1)},this.onTitleKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitTitle(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=F(this,f,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.(),this.closeMenu?.()}get expanded(){return!this.collapsed.has(this.goal.id)}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("goal-touched",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}toggleExpand(e){if(e.target?.closest("[data-no-toggle]"))return;this.clearHighlight();const i=new Set(this.collapsed);this.expanded?i.add(this.goal.id):i.delete(this.goal.id),this.collapsed=i,wr(i)}onCardClick(e){const t=e.target;(!this.expanded||t.closest(".goal-head"))&&this.toggleExpand(e)}starFor(e){return e?this.northStars.find(t=>t.slug===e)??null:null}openModal(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}async commitTitle(e){const t=e.trim();this.editingTitle=!1,!(!t||t===this.goal.title)&&await f.getState().updateGoal(this.goal.id,{title:t})}async pickDate(e){e.stopPropagation(),await this.querySelector("mana-date-picker.goal-date-picker")?.show(e.currentTarget)}async onDateChange(e){const t=e.target.value;await f.getState().updateGoal(this.goal.id,{targetDate:t||null})}async recategorize(e){this.markerOpen=!1,(this.goal.north_star??null)!==e&&await f.getState().updateGoal(this.goal.id,{northStar:e})}async beginAddKR(e){if(e?.stopPropagation(),this.creatingKR)return;if(this.clearHighlight(),di()){hi({kind:"new-kr",goalId:this.goal.id});return}const t=new Set(this.collapsed);t.delete(this.goal.id),this.collapsed=t,wr(t),this.creatingKR=!0;try{const i=await f.getState().addKeyResult(this.goal.id,"");await this.updateComplete,await[...this.querySelectorAll("key-result-row")].find(n=>n.kr.id===i)?.focusTitle()}catch(i){Je(i instanceof Error?i.message:"Couldn't add key result","error")}finally{this.creatingKR=!1}}get krProgress(){const e=this.goal.keyResults??[],t=e.length,i=e.filter(n=>n.done===1).length,s=t?Math.round(i/t*100):0;return{done:i,total:t,pct:s}}renderMarker(){const e=this.goal.symbol??null,t=this.goal.color??null,i=e?Gt[e]:void 0,s=qh(t),{done:n,total:o,pct:a}=this.krProgress,l=i?r`<span
          style="display:inline-block;width:15px;height:15px;color:${s};position:relative;"
          >${W(Wt(i))}</span
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
    `}renderTargetLine(){if(this.goal.target_date){const e=yu(this.goal.target_date),t=e==="overdue";return r`<div
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
        ${e?r`<span class="opacity-50">·</span>
              <span style=${t?"color:var(--nsc-red)":""}>${e}</span>`:c}
      </div>`}return r`<button
      type="button"
      class="goal-date-btn empty text-sm text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100"
      title="Set target date"
      data-no-toggle
      @click=${this.pickDate}
    >
      + set target date
    </button>`}renderStatusBadge(){if(!this.goal.archived)return c;const e=this.goal.status==="killed"?"archived":this.goal.status;return r`<span
      class="goal-status-badge ml-2 text-[10px] px-1.5 py-0.5 rounded border border-line text-muted"
      >${e}</span
    >`}openMenu(e,t="main"){if(e.target.closest("input, textarea, [contenteditable]"))return;e.preventDefault(),e.stopPropagation(),this.clearHighlight();const s=this.querySelector(".goal-kebab");if(!s)return;const n=e.type==="contextmenu"&&"clientX"in e&&(e.clientX||e.clientY)?{x:e.clientX,y:e.clientY}:void 0;this.closeMenu=mu({goal:this.goal,anchor:s,point:n,page:t,expanded:this.expanded,onAction:o=>{o==="details"?this.openModal(new Event("click")):o==="target-date"?this.pickDate(new Event("click")):o==="toggle"?this.toggleExpand(new Event("click")):o==="rename"?(this.editingTitle=!0,this.updateComplete.then(()=>{const a=this.querySelector("input.goal-title");a?.focus(),a?.select()})):o==="add-kr"&&this.beginAddKR()}})}onMenuKey(e){(e.key==="ContextMenu"||e.shiftKey&&e.key==="F10")&&this.openMenu(e)}statusChipMeta(e){switch(e){case"shipped":return{label:"Shipped",color:"var(--nsc-green)",always:!0};case"paused":return{label:"Paused",color:"var(--nsc-amber)",always:!0};case"killed":return{label:"Archived",color:"var(--color-muted)",always:!0};default:return{label:"Active",color:"var(--color-muted)",always:!1}}}renderStatusChip(){const e=this.goal.status??"active";if(e==="active")return c;const t=this.statusChipMeta(e);return r`<span class="goal-status-wrap relative" data-no-toggle>
      <button
        type="button"
        class="goal-status-chip ${"opacity-90 hover:opacity-100"} text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full transition-opacity"
        style="color:${t.color};background:color-mix(in srgb, ${t.color} 13%, transparent);"
        title="Change status"
        data-no-toggle
        @click=${s=>this.openMenu(s,"status")}
      >
        ${t.label}
      </button>
    </span>`}render(){const e=this.goal.keyResults??[],t=this.expanded,i=this.goal.archived?"opacity-60":"",s=`goal:${this.goal.id}`,o=f.getState().focusedRowKey===s?"bg-hover":"";return r`
      <li
        class="goal group relative flex flex-col px-2 -mx-2 py-3 rounded-lg ${t?"":"cursor-pointer hover:bg-hover"} ${i} ${o}"
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
            aria-label=${`${t?"Collapse":"Expand"} ${this.goal.title}`}
            aria-expanded=${t}
            aria-controls=${`goal-krs-${this.goal.id}`}
            class="text-muted opacity-40 hover:opacity-100 shrink-0 mt-1"
            style="width:11px;height:11px;display:inline-flex;"
            >${W(t?Zi:es)}</button
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
            <span class="inline-flex h-3.5 w-3.5" aria-hidden="true">${W(to)}</span>
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
        ${t&&e.length>0?r`<ul id=${`goal-krs-${this.goal.id}`} class="kr-list relative pl-[65px] lg:pl-[49px] mt-2 flex flex-col">
              ${t?e.map((a,l)=>r`<key-result-row class=${this.flashKrIds.has(a.id)?"agent-flash":""} data-flash=${`kr:${a.id}`} .kr=${a} .index=${l} .highlight=${this.highlightKrIds.has(a.id)}></key-result-row>`):c}
            </ul>`:c}
      </li>
    `}};tt([b({attribute:!1})],He.prototype,"goal",2);tt([b({attribute:!1})],He.prototype,"northStars",2);tt([b({type:Boolean})],He.prototype,"highlight",2);tt([b({attribute:!1})],He.prototype,"highlightKrIds",2);tt([b({attribute:!1})],He.prototype,"flashKrIds",2);tt([d()],He.prototype,"editingTitle",2);tt([d()],He.prototype,"markerOpen",2);tt([d()],He.prototype,"creatingKR",2);tt([d()],He.prototype,"collapsed",2);He=tt([w("goal-row")],He);var wu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Al=(e,t,i,s)=>{for(var n=s>1?void 0:s?ku(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&wu(t,i,n),n};let io=class extends T{constructor(){super(...arguments),this.events=[]}fmt(e){return new Date(e*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?r`
      <ul class="gm-history flex flex-col gap-1 text-xs">
        ${this.events.map(e=>r`
            <li class="grid grid-cols-[auto_auto_1fr] gap-2 items-baseline">
              <time class="text-muted">${this.fmt(e.changed_at)}</time>
              <span class="ev font-medium">${e.event}</span>
              <span class="text-muted">
                ${e.from_value||e.to_value?r`${e.from_value||""} → ${e.to_value||""}`:c}
              </span>
            </li>
          `)}
      </ul>
    `:r`<div class="text-xs text-muted italic">
        (no events yet)
      </div>`}};Al([b({attribute:!1})],io.prototype,"events",2);io=Al([w("goal-history-popover")],io);var $u=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,ce=(e,t,i,s)=>{for(var n=s>1?void 0:s?Su(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&$u(t,i,n),n};const Tu=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let oe=class extends T{constructor(){super(...arguments),this.goalId=null,this.creating=!1,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.completedOpen=!1,this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(e){e.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId)),e.has("creating")&&this.creating&&(this.reset(),this.editTitle="",this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null)}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(e){this.loading=!0;try{const t=await E.goals.summary(e);this.goal=t.goal,this.keyResults=t.keyResults,this.commitments=t.commitments,this.events=t.events,this.stats=t.stats,this.editNorthStar=t.goal.north_star??"",this.editTargetDate=t.goal.target_date??"",this.editStatus=t.goal.status,this.editColor=t.goal.color??null,this.editSymbol=t.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await f.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await f.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await f.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await f.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?r`
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
    `:c}renderCompleted(){const e=this.keyResults.filter(s=>s.done),t=this.commitments.filter(s=>s.done),i=e.length+t.length;return i===0?c:r`
      <div class="gm-field mb-3">
        <button
          type="button"
          class="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          @click=${()=>this.completedOpen=!this.completedOpen}
        >
          <span style="width:11px;height:11px;display:inline-flex;"
            >${W(this.completedOpen?Zi:es)}</span
          >
          Completed (${i})
        </button>
        ${this.completedOpen?r`<div class="mt-2">
              ${e.length?r`<div class="mb-3">
                    <label class="block text-xs text-muted mb-1">achieved KRs</label>
                    <ul class="text-sm">
                      ${e.map(s=>r`<li>✓ ${s.title}</li>`)}
                    </ul>
                  </div>`:c}
              ${t.length?r`<div>
                    <label class="block text-xs text-muted mb-1"
                      >shipped commitments</label
                    >
                    <ul class="text-sm">
                      ${t.map(s=>r`
                          <li class="flex justify-between gap-2">
                            <span>✓ ${s.title}</span>
                            <span class="text-xs text-muted">${s.week}</span>
                          </li>
                        `)}
                    </ul>
                  </div>`:c}
            </div>`:c}
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
          ${Cl.map(e=>r`
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
          ${El.map(e=>r`
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
        <mana-date-picker
          clearable
          class="block"
          label="Target date"
          placeholder="No target date"
          field-class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
          .value=${this.editTargetDate}
          @change=${e=>this.editTargetDate=e.target.value}
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
    `}};ce([b({type:Number})],oe.prototype,"goalId",2);ce([b({type:Boolean})],oe.prototype,"creating",2);ce([b({attribute:!1})],oe.prototype,"northStars",2);ce([d()],oe.prototype,"goal",2);ce([d()],oe.prototype,"keyResults",2);ce([d()],oe.prototype,"commitments",2);ce([d()],oe.prototype,"events",2);ce([d()],oe.prototype,"stats",2);ce([d()],oe.prototype,"loading",2);ce([d()],oe.prototype,"completedOpen",2);ce([d()],oe.prototype,"editTitle",2);ce([d()],oe.prototype,"editNorthStar",2);ce([d()],oe.prototype,"editTargetDate",2);ce([d()],oe.prototype,"editStatus",2);ce([d()],oe.prototype,"editColor",2);ce([d()],oe.prototype,"editSymbol",2);oe=ce([w("goal-modal")],oe);function Fo({open:e,label:t,onToggle:i,controls:s,align:n="row"}){return r`<button
    type="button"
    class="fold-toggle mt-3 flex items-center gap-2 py-1 ${n==="row"?"pl-4":"pl-2"} pr-2 -mx-2 rounded text-xs text-muted hover:text-ink"
    aria-expanded=${e}
    aria-controls=${s??""}
    @click=${i}
  >${n==="row"?r`<span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>`:""}<sc-icon name=${e?"lucide-chevron-down":"lucide-chevron-right"} class="w-4 h-4"></sc-icon
    ><span>${t}</span></button>`}var Cu=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,mt=(e,t,i,s)=>{for(var n=s>1?void 0:s?Eu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Cu(t,i,n),n};const kr="slmai.cockpit.goalsSectionCollapsed",fn="slmai.cockpit.goalsSection.title",gn="Goals";let Ze=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=gn,this.creatingGoal=!1,this.activeModalId=null,this.highlightGoalIds=new Set,this.highlightKrIds=new Set,this.flashGoals=new Os(this,"goal"),this.flashKrs=new Os(this,"kr"),this.onOpsEvent=e=>{const t=e.detail;t&&(t.action==="refresh"||t.action==="load-week")&&(this.flashGoals.take(t),this.flashKrs.take(t),t.action==="refresh"&&t.added?.kind==="goal"?this.highlightGoalIds=new Set(this.highlightGoalIds).add(t.added.id):t.action==="refresh"&&t.added?.kind==="kr"&&(this.highlightKrIds=new Set(this.highlightKrIds).add(t.added.id)),f.getState().loadGoals().catch(()=>{}))},this.onGoalTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightGoalIds.has(t))return;const i=new Set(this.highlightGoalIds);i.delete(t),this.highlightGoalIds=i},this.onKrTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightKrIds.has(t))return;const i=new Set(this.highlightKrIds);i.delete(t),this.highlightKrIds=i},this.toggleSection=()=>{const e=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(kr,this.sectionCollapsed?"1":"0"),e&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(kr)==="1",this.titleValue=localStorage.getItem(fn)??gn,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.goals.title"];t&&(this.titleValue=t,localStorage.setItem(fn,t))}).catch(()=>{}),this.unsubGoals=F(this,f,e=>e.goals),this.unsubArchived=F(this,f,e=>`${e.goalsArchivedCount}:${e.includeArchivedGoals}`),this.unsubStars=F(this,f,e=>e.northStars),f.getState().loadGoals().catch(()=>{}),f.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent)}async toggleArchived(){const e=f.getState();await e.toggleArchivedGoals(!e.includeArchivedGoals)}openCreate(){this.creatingGoal=!0}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||gn;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(fn,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}renderGoalList(e,t){const i=f.getState().northStars;return r`
      <ul
        id=${t} class="goal-list flex flex-col"
        @goal-touched=${this.onGoalTouched}
        @kr-touched=${this.onKrTouched}
      >
        ${e.map(s=>r`
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
    `}render(){const e=f.getState(),t=e.goals,i=e.northStars,s=e.goalsArchivedCount,n=e.includeArchivedGoals,o=this.tabbed||!this.sectionCollapsed;return r`
      <section class="goals-section flex flex-col gap-1 ${this.tabbed?"":"pb-16"}">
        ${this.tabbed?c:r`<header
              class="goals-header flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleSection}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${W(this.sectionCollapsed?es:Zi)}</span
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
              ${this.renderGoalList(t.filter(a=>!a.archived),"active-goals")}
              ${s>0?Fo({open:n,label:`${s} archived`,controls:"archived-goals",align:"goal",onToggle:()=>void this.toggleArchived()}):c}
              ${n?this.renderGoalList(t.filter(a=>a.archived),"archived-goals"):c}
            `:c}

        <goal-modal
          .goalId=${this.activeModalId}
          .creating=${this.creatingGoal}
          .northStars=${i}
          @close=${()=>{this.activeModalId=null,this.creatingGoal=!1}}
        ></goal-modal>
      </section>
    `}};mt([b({type:Boolean})],Ze.prototype,"tabbed",2);mt([d()],Ze.prototype,"sectionCollapsed",2);mt([d()],Ze.prototype,"editingTitle",2);mt([d()],Ze.prototype,"titleValue",2);mt([d()],Ze.prototype,"creatingGoal",2);mt([d()],Ze.prototype,"activeModalId",2);mt([d()],Ze.prototype,"highlightGoalIds",2);mt([d()],Ze.prototype,"highlightKrIds",2);Ze=mt([w("goals-section")],Ze);var Du=Object.getOwnPropertyDescriptor,Au=(e,t,i,s)=>{for(var n=s>1?void 0:s?Du(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};const $r=[{text:"Indeed, with hardship comes ease.",source:"Quran 94:6"},{text:"So verily, with every hardship there is ease.",source:"Quran 94:5"},{text:"Did We not expand for you your breast?",source:"Quran 94:1"},{text:"So when you have finished, then stand up for worship.",source:"Quran 94:7"},{text:"And to your Lord direct your longing.",source:"Quran 94:8"},{text:"And that there is nothing for man except what he strives for.",source:"Quran 53:39"},{text:"And that his effort is going to be seen.",source:"Quran 53:40"},{text:"Indeed, Allah will not change the condition of a people until they change what is in themselves.",source:"Quran 13:11"},{text:"Verily, in the remembrance of Allah do hearts find rest.",source:"Quran 13:28"},{text:"So remember Me; I will remember you, and be grateful to Me.",source:"Quran 2:152"},{text:"Seek help through patience and prayer. Indeed, Allah is with the patient.",source:"Quran 2:153"},{text:"And seek help through patience and prayer.",source:"Quran 2:45"},{text:"And when My servants ask you concerning Me — indeed I am near.",source:"Quran 2:186"},{text:"Our Lord, give us good in this world and good in the Hereafter.",source:"Quran 2:201"},{text:"Perhaps you hate a thing and it is good for you.",source:"Quran 2:216"},{text:"Our Lord, pour upon us patience and plant firmly our feet.",source:"Quran 2:250"},{text:"Allah does not burden a soul beyond what it can bear.",source:"Quran 2:286"},{text:"So race to all that is good.",source:"Quran 2:148"},{text:"And speak to people good words.",source:"Quran 2:83"},{text:"And give good tidings to the patient.",source:"Quran 2:155"},{text:"Whatever good you put forward for yourselves, you will find it with Allah.",source:"Quran 2:110"},{text:"A kind word and forgiveness are better than charity followed by injury.",source:"Quran 2:263"},{text:"Indeed, Allah loves those who are constantly repentant and those who purify themselves.",source:"Quran 2:222"},{text:"And do good; indeed, Allah loves the doers of good.",source:"Quran 2:195"},{text:"And whoever relies upon Allah — then He is sufficient for him.",source:"Quran 65:3"},{text:"And whoever fears Allah — He will make for him a way out.",source:"Quran 65:2"},{text:"My Lord, increase me in knowledge.",source:"Quran 20:114"},{text:"My Lord, expand for me my breast and ease for me my task.",source:"Quran 20:25"},{text:"Establish prayer for My remembrance.",source:"Quran 20:14"},{text:"Call upon Me; I will respond to you.",source:"Quran 40:60"},{text:"Do not despair of the mercy of Allah; indeed, Allah forgives all sins.",source:"Quran 39:53"},{text:"Are those who know equal to those who do not know?",source:"Quran 39:9"},{text:"The patient will be given their reward without measure.",source:"Quran 39:10"},{text:"Whoever does righteousness, We will surely cause them to live a good life.",source:"Quran 16:97"},{text:"Indeed, Allah orders justice and good conduct.",source:"Quran 16:90"},{text:"Indeed, Allah is with those who fear Him and those who do good.",source:"Quran 16:128"},{text:"And He found you lost and guided you.",source:"Quran 93:7"},{text:"And your Lord is going to give you, and you will be satisfied.",source:"Quran 93:5"},{text:"Indeed, my Lord is near and responsive.",source:"Quran 11:61"},{text:"And be patient, for Allah does not let the reward of those who do good be lost.",source:"Quran 11:115"},{text:"My success is not but through Allah; upon Him I rely.",source:"Quran 11:88"},{text:"Indeed, my Lord is Guardian over all things.",source:"Quran 11:57"},{text:"Perhaps you dislike a thing and Allah places much good in it.",source:"Quran 4:19"},{text:"When you are greeted with a greeting, greet in return with one better.",source:"Quran 4:86"},{text:"Worship Allah and be good to parents.",source:"Quran 4:36"},{text:"And put your trust in Allah; sufficient is Allah as a Disposer of affairs.",source:"Quran 33:3"},{text:"O you who believe, remember Allah with much remembrance.",source:"Quran 33:41"},{text:"The men and women who remember Allah often — Allah has prepared for them forgiveness and a great reward.",source:"Quran 33:35"},{text:"Fear Allah and speak words of appropriate justice.",source:"Quran 33:70"},{text:"So which of the favors of your Lord would you deny?",source:"Quran 55:13"},{text:"Is the reward for good anything but good?",source:"Quran 55:60"},{text:"If you are grateful, I will surely increase you.",source:"Quran 14:7"},{text:"And upon Allah let the believers rely.",source:"Quran 14:11"},{text:"My mercy encompasses all things.",source:"Quran 7:156"},{text:"Indeed, the mercy of Allah is near to the doers of good.",source:"Quran 7:56"},{text:"Allah will raise those who believe and those given knowledge by degrees.",source:"Quran 58:11"},{text:"Read in the name of your Lord who created.",source:"Quran 96:1"},{text:"Who taught by the pen — taught man that which he knew not.",source:"Quran 96:4"},{text:"By time, indeed mankind is in loss.",source:"Quran 103:1"},{text:"Except those who believe, do righteous deeds, and advise each other to truth and patience.",source:"Quran 103:3"},{text:"So whoever does an atom's weight of good will see it.",source:"Quran 99:7"},{text:"Repel evil by that which is better, and your enemy will become a devoted friend.",source:"Quran 41:34"},{text:"And none is granted it except one of great fortune.",source:"Quran 41:35"},{text:"Indeed, good deeds do away with misdeeds.",source:"Quran 11:114"},{text:"And do good, as Allah has done good to you.",source:"Quran 28:77"},{text:"Sufficient for us is Allah, and He is the best Disposer of affairs.",source:"Quran 3:173"},{text:"And when you have decided, then rely upon Allah.",source:"Quran 3:159"},{text:"Do not weaken and do not grieve, for you will be superior if you are believers.",source:"Quran 3:139"},{text:"And hold firmly to the rope of Allah all together, and do not become divided.",source:"Quran 3:103"},{text:"Those who restrain anger and pardon people — Allah loves the doers of good.",source:"Quran 3:134"},{text:"Be patient, endure, remain stationed, and fear Allah.",source:"Quran 3:200"},{text:"Every soul will taste death.",source:"Quran 3:185"},{text:"Indeed, Allah does not allow the reward of the believers to be lost.",source:"Quran 3:171"},{text:"And those who strive for Us — We will surely guide them to Our ways.",source:"Quran 29:69"},{text:"And whoever strives only strives for himself.",source:"Quran 29:6"},{text:"Indeed, prayer restrains from immorality and wrongdoing.",source:"Quran 29:45"},{text:"Whoever is grateful is grateful for the benefit of himself.",source:"Quran 31:12"},{text:"And be patient over what befalls you.",source:"Quran 31:17"},{text:"And be moderate in your pace and lower your voice.",source:"Quran 31:19"},{text:"Be grateful to Me and to your parents.",source:"Quran 31:14"},{text:"Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds.",source:"Quran 6:162"},{text:"Whoever brings a good deed will have ten times the like of it.",source:"Quran 6:160"},{text:"They were commanded only to worship Allah, sincere to Him in faith.",source:"Quran 98:5"},{text:"Indeed, the most noble of you before Allah is the most righteous.",source:"Quran 49:13"},{text:"Avoid much suspicion; indeed, some suspicion is sin.",source:"Quran 49:12"},{text:"Do not ridicule others; perhaps they are better than you.",source:"Quran 49:11"},{text:"And cooperate in righteousness and piety.",source:"Quran 5:2"},{text:"And be patient; indeed, Allah is with the patient.",source:"Quran 8:46"},{text:"So be patient with beautiful patience.",source:"Quran 70:5"},{text:"And remember the name of your Lord and devote yourself to Him wholly.",source:"Quran 73:8"},{text:"And He is with you wherever you are.",source:"Quran 57:4"},{text:"So flee to Allah.",source:"Quran 51:50"},{text:"And in the heaven is your provision, and whatever you are promised.",source:"Quran 51:22"},{text:"Whoever purifies himself does so for the benefit of his own soul.",source:"Quran 35:18"},{text:"Indeed, this Qur'an guides to that which is most upright.",source:"Quran 17:9"},{text:"And do not walk upon the earth arrogantly.",source:"Quran 17:37"},{text:"Your Lord has decreed that you worship none but Him, and be good to parents.",source:"Quran 17:23"},{text:"And lower to them the wing of humility out of mercy.",source:"Quran 17:24"},{text:"The servants of the Most Merciful are those who walk upon the earth humbly.",source:"Quran 25:63"},{text:"And when they pass by idle talk, they pass by with dignity.",source:"Quran 25:72"},{text:"My Lord, forgive and have mercy, for You are the best of the merciful.",source:"Quran 23:118"},{text:"And worship your Lord until there comes to you certainty.",source:"Quran 15:99"},{text:"And lower your wing to the believers.",source:"Quran 15:88"},{text:"And say: Work, for Allah will see your work.",source:"Quran 9:105"},{text:"So fear Allah as much as you are able.",source:"Quran 64:16"},{text:"Whoever is patient and forgives — that is of the matters requiring determination.",source:"Quran 42:43"},{text:"And do not despair of relief from Allah.",source:"Quran 12:87"},{text:"Let them pardon and overlook. Would you not love that Allah should forgive you?",source:"Quran 24:22"},{text:"If you support Allah, He will support you and plant your feet firmly.",source:"Quran 47:7"},{text:"Why do you say that which you do not do?",source:"Quran 61:2"},{text:"Great is hatred in the sight of Allah that you say what you do not do.",source:"Quran 61:3"},{text:"Actions are but by intentions, and each person will have only what he intended.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The most beloved deeds to Allah are the most consistent, even if small.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Take benefit of five before five: your health before sickness, your free time before busyness, your youth before old age, your wealth before poverty, and your life before death.",source:"Muhammad ﷺ (Al-Hakim)"},{text:"Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise.",source:"Muhammad ﷺ (Muslim)"},{text:"The strong believer is better and more beloved to Allah than the weak believer, though in both there is good.",source:"Muhammad ﷺ (Muslim)"},{text:"Strive for what benefits you, seek help from Allah, and do not feel helpless.",source:"Muhammad ﷺ (Muslim)"},{text:"None of you truly believes until he loves for his brother what he loves for himself.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of people are those most beneficial to people.",source:"Muhammad ﷺ (Al-Tabarani)"},{text:"Allah loves that when one of you does a task, he does it with excellence.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Whoever believes in Allah and the Last Day, let him speak good or remain silent.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his neighbor.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever believes in Allah and the Last Day, let him honor his guest.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The Muslim is the one from whose tongue and hand people are safe.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Richness is not in many possessions; richness is the richness of the soul.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Be in this world as though you were a stranger or a traveler.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever does not thank people has not thanked Allah.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The believer is not stung from the same hole twice.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Make things easy and do not make them difficult; give glad tidings and do not repel.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those with the best character.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A good word is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not belittle any good deed, even meeting your brother with a cheerful face.",source:"Muhammad ﷺ (Muslim)"},{text:"Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever relieves a believer's hardship in this world, Allah will relieve his hardship on the Day of Resurrection.",source:"Muhammad ﷺ (Muslim)"},{text:"Allah does not look at your appearance or wealth, but at your hearts and your deeds.",source:"Muhammad ﷺ (Muslim)"},{text:"The best of you is the one who is best to his family.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever guides another to good will have a reward like the one who does it.",source:"Muhammad ﷺ (Muslim)"},{text:"The upper hand is better than the lower hand.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"No one eats better food than that which he eats from the work of his own hands.",source:"Muhammad ﷺ (Bukhari)"},{text:"Seeking knowledge is an obligation upon every Muslim.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever does not show mercy to people, Allah will not show mercy to him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"How wonderful is the affair of the believer — all of his affairs are good for him.",source:"Muhammad ﷺ (Muslim)"},{text:"Tie your camel, then put your trust in Allah.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The most complete of believers in faith are those best in character.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Give the worker his wages before his sweat dries.",source:"Muhammad ﷺ (Ibn Majah)"},{text:"Whoever wakes secure in his home, healthy in body, with food for the day, has been given the whole world.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best charity is that given when you are healthy and hopeful of wealth.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Cleanliness is half of faith.",source:"Muhammad ﷺ (Muslim)"},{text:"Purity is half of faith, and praise of Allah fills the scale.",source:"Muhammad ﷺ (Muslim)"},{text:"Modesty brings nothing but good.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Modesty is part of faith.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Verily Allah is beautiful and loves beauty.",source:"Muhammad ﷺ (Muslim)"},{text:"Patience is at the first strike.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"There are two blessings which many people lose: health and free time.",source:"Muhammad ﷺ (Bukhari)"},{text:"The strong man is not the good wrestler; the strong man is the one who controls himself when angry.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Kindness is not found in anything except that it beautifies it.",source:"Muhammad ﷺ (Muslim)"},{text:"He is not one of us who does not show mercy to our young and respect to our elders.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever is deprived of gentleness is deprived of all good.",source:"Muhammad ﷺ (Muslim)"},{text:"Part of the excellence of a person's Islam is his leaving what does not concern him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"A believer to another believer is like a building whose parts support one another.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"The best of you are those who learn the Qur'an and teach it.",source:"Muhammad ﷺ (Bukhari)"},{text:"There is no envy except in two: a man given wealth who spends it rightly, and a man given wisdom who acts by it and teaches it.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Beware of suspicion, for suspicion is the falsest of speech.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"A person is upon the religion of his close friend, so let each of you consider whom he befriends.",source:"Muhammad ﷺ (Abu Dawud & Tirmidhi)"},{text:"The example of a good companion and a bad one is like the seller of musk and the blacksmith's bellows.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Charity does not decrease wealth.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever conceals the faults of another, Allah will conceal his faults in this world and the next.",source:"Muhammad ﷺ (Muslim)"},{text:"The supplication of a Muslim for his brother in his absence is answered.",source:"Muhammad ﷺ (Muslim)"},{text:"The two feet of a servant will not move on the Day of Judgment until he is asked about his life and how he spent it, and his knowledge and what he did with it.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"Whoever seeks the pleasure of Allah though it displeases the people, Allah will suffice him.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"This world is enjoyment, and the best enjoyment of this world is a righteous spouse.",source:"Muhammad ﷺ (Muslim)"},{text:"Deeds are judged by their endings.",source:"Muhammad ﷺ (Bukhari)"},{text:"Whoever calls others to guidance will have a reward like the rewards of those who follow him.",source:"Muhammad ﷺ (Muslim)"},{text:"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart.",source:"Muhammad ﷺ (Muslim)"},{text:"A man's spending on his family is a charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever suppresses his anger while able to enact it, Allah will fill his heart with security and faith.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"The believer who mixes with people and bears their harm has greater reward than one who does not.",source:"Muhammad ﷺ (Tirmidhi & Ibn Majah)"},{text:"The best of people are those who live long and do good deeds.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The best of you are the best in paying off debts.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Whoever loves to meet Allah, Allah loves to meet him.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Every act of kindness is charity.",source:"Muhammad ﷺ (Bukhari & Muslim)"},{text:"Do not be people without minds of your own; if others do good, do good — and if they do wrong, do not be unjust.",source:"Muhammad ﷺ (Tirmidhi)"},{text:"The believer is a mirror to his brother.",source:"Muhammad ﷺ (Abu Dawud)"},{text:"Righteousness is good character.",source:"Muhammad ﷺ (Muslim)"},{text:"The believer is not one who eats his fill while his neighbor goes hungry.",source:"Muhammad ﷺ (Al-Bayhaqi)"},{text:"Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"May Allah have mercy on the one who shows me my faults.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Acquire knowledge before you become leaders.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I have never regretted my silence; as for my speech, I have often regretted it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Whoever does not know evil is more likely to fall into it.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"Sit with those who repent often, for they have the tenderest hearts.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"I hate to see a man idle — working neither for this world nor the next.",source:"Umar ibn al-Khattab رضي الله عنه"},{text:"The worth of a person is measured by what he does well.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Knowledge guards you, while you guard wealth.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"People are of two kinds: your brothers in faith, or your equals in humanity.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Do not be a slave to another when Allah has created you free.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"The tongue of the wise is behind his heart, and the heart of the fool is behind his tongue.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Today is action without reckoning, and tomorrow is reckoning without action.",source:"Ali ibn Abi Talib رضي الله عنه"},{text:"Anxiety over guaranteed provision, and neglect of required duty, are signs of a weak heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Concern for this world is darkness in the heart; concern for the Hereafter is light in the heart.",source:"Uthman ibn Affan رضي الله عنه"},{text:"Knowledge without action is a tree without fruit.",source:"Abu Bakr as-Siddiq رضي الله عنه"}];let Sr=class extends T{connectedCallback(){super.connectedCallback(),this.unsubGoals=F(this,f,e=>e.goals),this.unsubCommits=F(this,f,e=>e.commitments),f.getState().loadGoals().catch(()=>{}),f.getState().loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubCommits?.()}todaysReminder(){const e=Math.floor(Date.now()/864e5);return $r[e%$r.length]}renderSource(e){const t=e.split("ﷺ");return t.length===1?e:t.flatMap((i,s)=>s===0?[i]:[r`<span class="inline-block text-[1.35em] leading-none align-[-0.15em]">\ufdfa</span>`,i])}render(){const e=f.getState(),t=e.goals.filter(n=>!n.archived),i=e.commitments;if(t.length===0&&i.length===0)return c;const s=this.todaysReminder();return r`<section class="goals-metrics @container px-4 pt-4 pb-4">
      <div class="flex flex-col gap-2 @3xl:flex-row @3xl:items-center @3xl:justify-between @3xl:gap-8">
        <h1 class="shrink-0 text-xl font-semibold leading-none text-ink">Goals</h1>
        <p class="min-w-0 leading-snug @3xl:max-w-[70%] @3xl:text-right">
          <span class="text-[15px] text-ink" style="font-family:var(--font-display);">${s.text}</span>
          <span class="ml-1.5 whitespace-nowrap text-[13px] text-muted">${this.renderSource(s.source)}</span>
        </p>
      </div>
    </section>`}};Sr=Au([w("goals-metrics")],Sr);const Tr=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s]+|\*\*([^*]+)\*\*|~~([^~]+)~~|\*([^*\n]+)\*|_([^_\n]+)_|`([^`]+)`/g;function Pl(e){const t=[];let i=0,s;for(Tr.lastIndex=0;(s=Tr.exec(e))!==null;){s.index>i&&t.push(e.slice(i,s.index));const[,n,o,a,l,h,u,p]=s;if(n||s[0].startsWith("http")){const m=n?o:s[0];t.push(r`<a
          href=${m}
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-70 hover:opacity-100"
          @click=${g=>g.stopPropagation()}
          >${n??m}</a
        >`)}else a?t.push(r`<strong class="font-semibold">${a}</strong>`):l?t.push(r`<s class="opacity-70">${l}</s>`):h||u?t.push(r`<em class="italic">${h??u}</em>`):p&&t.push(r`<code
          class="font-mono text-[0.85em] px-1 py-0.5 rounded"
          style="background:color-mix(in srgb, var(--color-muted) 15%, transparent);"
          >${p}</code
        >`);i=s.index+s[0].length}return i<e.length&&t.push(e.slice(i)),t}function Ns(e){const t=e.target,i=t.selectionStart??0,s=t.selectionEnd??0;if(i===s)return;const n=(e.clipboardData?.getData("text/plain")??"").trim();if(!/^https?:\/\/\S+$/.test(n))return;const o=t.value.slice(i,s).replace(/[[\]]/g,"");if(!o.trim())return;e.preventDefault();const a=n.replace(/\(/g,"%28").replace(/\)/g,"%29");t.setRangeText(`[${o}](${a})`,i,s,"end"),t.dispatchEvent(new Event("input",{bubbles:!0}))}var Pu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,ts=(e,t,i,s)=>{for(var n=s>1?void 0:s?Mu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Pu(t,i,n),n};const Iu=["January","February","March","April","May","June","July","August","September","October","November","December"],_u=["M","T","W","T","F","S","S"];function Ou(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),i=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-i);const s=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-s.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Lu(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),i=t.getUTCDay()||7;return t.setUTCDate(t.getUTCDate()-(i-1)),t}function Ru(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const i=Number(t[1]),s=Number(t[2]),n=new Date(Date.UTC(i,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5);return new Date(a.getTime()+(s-1)*7*864e5)}function Nu(e,t){const i=new Date(Date.UTC(e,t,1)),s=Lu(i),n=[];for(let o=0;o<6;o++){const a=[];for(let h=0;h<7;h++)a.push(new Date(s.getTime()+(o*7+h)*864e5));const l=a[0];n.push({week:Ou(l),days:a})}return n}let ui=class extends T{constructor(){super(...arguments),this.selected=Pe(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=e=>{this.open&&(this.contains(e.target)||this.close())},this.keyHandler=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(e){if(e.has("open")&&this.open||e.has("selected")&&this.open){const t=Ru(this.selected);if(t){const i=new Date(t.getTime()+2592e5);this.viewYear=i.getUTCFullYear(),this.viewMonth=i.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(e){this.selected=e,this.dispatchEvent(new CustomEvent("select",{detail:{week:e},bubbles:!0,composed:!0})),this.close()}shiftMonth(e){const t=new Date(Date.UTC(this.viewYear,this.viewMonth+e,1));this.viewYear=t.getUTCFullYear(),this.viewMonth=t.getUTCMonth()}goToday(){this.select(Pe())}render(){if(!this.open)return c;const e=Nu(this.viewYear,this.viewMonth),t=new Date,i=`${t.getUTCFullYear()}-${t.getUTCMonth()}-${t.getUTCDate()}`;return r`
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
          ${e.map(s=>{const n=s.week===this.selected;return r`
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
    `}};ts([b()],ui.prototype,"selected",2);ts([b({type:Boolean})],ui.prototype,"open",2);ts([d()],ui.prototype,"viewYear",2);ts([d()],ui.prototype,"viewMonth",2);ui=ts([w("week-picker")],ui);var Fu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Ml=(e,t,i,s)=>{for(var n=s>1?void 0:s?ju(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Fu(t,i,n),n};function Pe(){const e=new Date,t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),i=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-i);const s=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-s.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Fs(e,t){const i=/^(\d{4})-W(\d{2})$/.exec(e);if(!i||!i[1]||!i[2])return e;const s=Number(i[1]),n=Number(i[2]),o=new Date(Date.UTC(s,0,4)),a=o.getUTCDay()||7,l=new Date(o.getTime()-(a-4)*864e5),h=new Date(l.getTime()+(n-1+t)*7*864e5);return Uu(h)}function Uu(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),i=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-i);const s=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-s.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Bu(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const i=Number(t[1]),s=Number(t[2]),n=new Date(Date.UTC(i,0,4)),o=n.getUTCDay()||7,a=new Date(n.getTime()-(o-1)*864e5),l=new Date(a.getTime()+(s-1)*7*864e5),h=new Date(l.getTime()+6*864e5);return{start:l,end:h}}const Cr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function so(e){const t=Bu(e);if(!t)return e;const i=Cr[t.start.getUTCMonth()],s=Cr[t.end.getUTCMonth()],n=t.start.getUTCDate(),o=t.end.getUTCDate();return i===s?`${i} ${n}–${o}`:`${i} ${n} – ${s} ${o}`}let no=class extends T{constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=F(this,f,e=>e.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(e){await f.getState().setWeek(e)}togglePicker(e){e.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(e){this.pickerOpen=!1,e.detail?.week&&this.goto(e.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const e=f.getState().currentWeek??Pe(),t=Pe(),i=e!==t,s=`week-nav-date rounded px-2 whitespace-nowrap tabular-nums font-medium hover:bg-hover ${i?"text-muted hover:text-ink":"text-ink"}`,n="week-nav-arrow w-6 h-6 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover";return r`
      <div class="week-nav-controls flex items-center gap-2 text-sm" role="group" aria-label="Week navigation">
        ${i?r`<button type="button" class="week-nav-reset rounded px-2 text-xs font-medium text-accent hover:bg-hover whitespace-nowrap" @click=${()=>void this.goto(t)}>This week</button>`:c}
        <div class="week-nav-range relative flex items-center gap-0.5">
          <button type="button" class=${n} aria-label="Previous week" title="Previous week" @click=${()=>void this.goto(Fs(e,-1))}>
            <sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>
          </button>
          <button
            type="button"
            class=${s}
            aria-label=${`Pick a week, ${so(e)} selected`}
            aria-haspopup="dialog"
            aria-expanded=${this.pickerOpen}
            @click=${this.togglePicker}
          >${so(e)}</button>
          <button type="button" class=${n} aria-label="Next week" title="Next week" @click=${()=>void this.goto(Fs(e,1))}>
            <sc-icon name="lucide-chevron-right" class="w-4 h-4"></sc-icon>
          </button>
          <week-picker
            .selected=${e}
            .open=${this.pickerOpen}
            @select=${this.onPickerSelect}
            @close=${this.onPickerClose}
          ></week-picker>
        </div>
      </div>
    `}};Ml([d()],no.prototype,"pickerOpen",2);no=Ml([w("week-nav")],no);var Hu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,Ve=(e,t,i,s)=>{for(var n=s>1?void 0:s?zu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Hu(t,i,n),n};let ht=class extends T{constructor(){super(...arguments),this.index=0,this.highlight=!1,this.editing=!1,this.dragEnabled=!1,this.dragOverPos=null,this.onPendingDelete=()=>this.requestUpdate(),this.onRowTap=e=>{!di()||this.editing||e.target.closest("button, textarea, a")||(this.clearHighlight(),hi({kind:"commit",id:this.commit.id}))},this.onHandleDown=()=>{this.dragEnabled=!0},this.onDragStart=e=>{if(!this.dragEnabled){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),e.dataTransfer.setData("text/plain",this.commit.title),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.dragEnabled=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-commit-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id"),i=t?Number(t):NaN,s=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(i)||i===this.commit.id)return;e.preventDefault();const n=s==="after"?this.index+1:this.index;await f.getState().reorderCommitment(i,n)}}connectedCallback(){super.connectedCallback(),this.unsub=F(this,f,e=>e.goals),this.unsub2=F(this,f,e=>e.northStars),this.unsubFocused=F(this,f,e=>e.focusedRowKey),window.addEventListener(ji,this.onPendingDelete)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.(),this.detachSwipe?.(),this.detachSwipe=void 0,window.removeEventListener(ji,this.onPendingDelete)}updated(e){if(e.has("editing")&&this.editing&&this.editInput&&(this.editInput.focus(),this.editInput.select(),this.autoGrow(this.editInput)),this.style.display=Sl(`commit:${this.commit.id}`)?"none":"",!this.detachSwipe){const t=this.querySelector("li.commit-li");t&&(this.detachSwipe=Tl(t,{onRight:()=>{const i=this.commit,s=i.done===1;this.clearHighlight(),f.getState().updateCommitment(i.id,{done:!s}),Lo(s?"Marked not done":"Completed",{onUndo:()=>void f.getState().updateCommitment(i.id,{done:s})})},onLeft:()=>{const i=this.commit.id;Rs(`commit:${i}`,"Task deleted",()=>f.getState().deleteCommitment(i))}}))}}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}get linkedGoal(){const e=this.commit;if(e.goal_id!=null)return f.getState().goals.find(t=>t.id===e.goal_id)??null;if(e.key_result_id!=null){for(const t of f.getState().goals)if((t.keyResults??[]).some(i=>i.id===e.key_result_id))return t}return null}async toggleDone(e){e.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async toggleRecurring(e){e.stopPropagation(),this.clearHighlight(),await f.getState().updateCommitment(this.commit.id,{recurring:!this.commit.recurring})}async onDelete(e){e.stopPropagation();const t=document.createElement("commit-delete-dialog");t.commit=this.commit,document.body.append(t)}onMarkerClick(e){e.stopPropagation();const t=e.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:t},bubbles:!0,composed:!0}))}clearHighlight(){this.highlight&&this.dispatchEvent(new CustomEvent("commit-touched",{detail:{id:this.commit.id},bubbles:!0,composed:!0}))}startEdit(e){if(e.stopPropagation(),this.clearHighlight(),di()){if(e.target.closest("a"))return;hi({kind:"commit",id:this.commit.id});return}this.editing=!0}async commitEdit(e){if(!this.editing)return;const i=(this.editInput?.value??"").trim(),s=this.commit.title;this.editing=!1,e&&i&&i!==s&&await f.getState().updateCommitment(this.commit.id,{title:i})}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit(!0)):e.key==="Escape"&&(e.preventDefault(),this.commitEdit(!1))}renderMarker(){const e=this.linkedGoal;if(e){const t=e.symbol??null,i=e.color??null,s=t?Gt[t]:void 0;if(t&&s){const o=i?`color:var(--nsc-${i})`:"";return r`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${W(Wt(s))}</span
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
    `}render(){const e=this.commit,t=this.linkedGoal,i=t?t.title:"Assign to a goal or KR",s=e.done===1,n=s?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${e.id}`,l=f.getState().focusedRowKey===o?"bg-hover":"";return r`
      <li
        class="wk-row commit-li group/row flex items-center gap-2 py-1.5 pl-4 pr-2 -mx-2 rounded hover:bg-hover ${l} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
        data-id=${e.id}
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
                .value=${e.title}
                @input=${h=>this.autoGrow(h.target)}
                @keydown=${this.onEditKey}
                @paste=${Ns}
                @blur=${()=>this.commitEdit(!0)}
              ></textarea>
            `:r`
              <span
                class="commit-title flex-1 min-w-0 text-sm cursor-text ${s?"line-through text-muted":this.highlight?"font-medium":"text-ink"}"
                style=${this.highlight&&!s?"color:var(--nsc-green);":""}
                @click=${this.startEdit}
              >${Pl(e.title)}</span>
            `}
        ${e.owner==="agent"?r`<span
              class="shrink-0 self-center text-[11px] text-muted px-1.5 py-0.5 rounded-full leading-none"
              style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
              title="An agent owns this task and may pick it up"
              >agent</span
            >`:c}
        <button
          class="commit-repeat-btn ${e.recurring?"text-accent":"text-muted opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${e.recurring?"Stop repeating weekly":"Repeat weekly"}
          aria-pressed=${e.recurring?"true":"false"}
          title=${e.recurring?"Repeats every week. Click to stop.":"Repeat every week"}
          @click=${this.toggleRecurring}
        ><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
          <path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
        </svg></button>
        <button
          class="commit-marker-btn ${t?"":"opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${t?"Change category":"Assign category"}
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
    `}};Ve([b({attribute:!1})],ht.prototype,"commit",2);Ve([b({attribute:!1})],ht.prototype,"index",2);Ve([b({type:Boolean})],ht.prototype,"highlight",2);Ve([d()],ht.prototype,"editing",2);Ve([d()],ht.prototype,"dragEnabled",2);Ve([d()],ht.prototype,"dragOverPos",2);Ve([V("textarea.inline-edit")],ht.prototype,"editInput",2);ht=Ve([w("commit-row")],ht);let js=class extends T{constructor(){super(...arguments),this.commit=null,this.deleting=!1}close(){this.deleting||this.remove()}async confirmDelete(){if(!(!this.commit||this.deleting)){this.deleting=!0;try{await f.getState().deleteCommitment(this.commit.id),this.remove()}catch(e){console.warn("[goals] commitment delete failed",e),this.deleting=!1}}}render(){const e=this.commit,t=e?.series_id!=null,i=e?so(e.week):"the selected week";return r`<sc-dialog label=${t?"Delete repeating task?":"Delete this task?"} open @sc-hide=${this.close}>
      <p class="text-sm text-ink leading-relaxed">
        ${t?r`Delete “${e?.title??""}” from <strong>${i}</strong> and every week after it? Earlier weeks and their completion status will stay unchanged.`:r`Delete “${e?.title??""}” from <strong>${i}</strong>?`}
      </p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1.5 rounded-md text-sm ring-1 ring-inset ring-line bg-surface hover:bg-hover" @click=${this.close}>Cancel</button>
        <button type="button" class="px-3 py-1.5 rounded-md text-sm text-white bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-60" ?disabled=${this.deleting} @click=${()=>void this.confirmDelete()}>
          ${this.deleting?"Deleting…":t?"Delete this and future":"Delete"}
        </button>
      </div>
    </sc-dialog>`}};Ve([b({attribute:!1})],js.prototype,"commit",2);Ve([d()],js.prototype,"deleting",2);js=Ve([w("commit-delete-dialog")],js);var qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Xt=(e,t,i,s)=>{for(var n=s>1?void 0:s?Ku(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&qu(t,i,n),n};const Wu=448,ii=8;function as(e,t,i=""){const s=Gt[e];return s?r`<span
    class="inline-flex items-center justify-center shrink-0 ${i}"
    style="width:${t}px;height:${t}px"
    >${W(Wt(s))}</span
  >`:c}let Tt=class extends T{constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.expanded=null,this.outsideClickHandler=e=>{const t=e.target;t&&(this.contains(t)||this.anchor&&this.anchor.contains(t)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=F(this,f,e=>e.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const e=this.anchor.getBoundingClientRect(),t=window.innerWidth,i=this.firstElementChild?.getBoundingClientRect().width||Wu;this.style.position="fixed",this.style.zIndex="1000";const s=t-e.right,n=Math.max(ii,t-i-ii);this.style.right=`${Math.min(Math.max(s,ii),n)}px`;const o=this.getBoundingClientRect().height||320,a=window.innerHeight-e.bottom,l=e.top;a>=o+ii||a>=l?(this.style.top=`${e.bottom+6}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,a-ii)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-e.top+6}px`,this.style.maxHeight=`${Math.max(160,l-ii)}px`),this.style.display="flex",this.style.flexDirection="column"}activeGoals(){return f.getState().goals.filter(e=>e.status==="active")}expandedSet(e){if(this.expanded)return this.expanded;const t=new Set,i=this.currentKeyResultId!=null?e.find(s=>(s.keyResults??[]).some(n=>n.id===this.currentKeyResultId)):e.find(s=>s.id===this.currentGoalId);return i&&t.add(i.id),this.expanded=t,t}toggleGoal(e,t){t.stopPropagation();const i=new Set(this.expandedSet(this.activeGoals()));i.has(e)?i.delete(e):i.add(e),this.expanded=i}buildItems(){const e=this.query.trim().toLowerCase(),t=this.activeGoals(),i=this.expandedSet(t),s=[];e||s.push({kind:"none",label:"None",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const n of t){const o=n.keyResults??[],a=n.title.toLowerCase();if(!(!e||a.includes(e)||o.some(u=>u.title.toLowerCase().includes(e))))continue;const h=e?!0:i.has(n.id);if(s.push({kind:"goal",id:n.id,label:n.title,northStar:n.north_star,current:this.currentGoalId===n.id&&this.currentKeyResultId==null,krCount:o.length,expanded:h}),!!h)for(const u of o)e&&!a.includes(e)&&!u.title.toLowerCase().includes(e)||s.push({kind:"kr",id:u.id,parent:n.id,label:u.title,northStar:n.north_star,current:this.currentKeyResultId===u.id})}return s}pick(e){let t;e.kind==="none"?t={goalId:null,keyResultId:null}:e.kind==="goal"?t={goalId:e.id,keyResultId:null}:t={goalId:null,keyResultId:e.id},this.dispatchEvent(new CustomEvent("pick",{detail:t,bubbles:!0,composed:!0}))}onSearchKey(e){if(e.key==="Escape"){if(e.preventDefault(),this.query){this.query="";return}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));return}if(e.key==="Enter"&&this.query.trim()){const t=this.buildItems(),i=t.find(s=>s.kind==="kr")??t.find(s=>s.kind==="goal");i&&(e.preventDefault(),this.pick(i))}}renderNsMarker(e,t){if(!e)return c;const i=f.getState().northStars.find(u=>u.slug===e),s=i?.symbol??null,n=i?.color??null,o=t==="goal"?15:13,a=t==="goal"?1:.8,l=s?Gt[s]:void 0,h=n?`color:var(--nsc-${n});opacity:${a}`:`opacity:${a}`;return s&&l?r`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${h}"
        >${W(Wt(l))}</span
      >`:r`<span
      class="inline-block rounded-full shrink-0"
      style="width:8px;height:8px;background:${n?`var(--nsc-${n})`:"var(--muted)"};opacity:${a}"
    ></span>`}renderCheck(e){return e?as("check",14,"text-accent ml-auto"):c}renderRow(e){const t="flex items-center gap-2 min-h-8 px-2 py-1.5 rounded-md cursor-pointer text-sm select-none transition-colors",i=e.current?"bg-accent-soft":"hover:bg-hover";if(e.kind==="none")return r`
        <li
          class="${t} ${i} text-muted"
          role="option"
          aria-selected=${e.current?"true":"false"}
          @click=${()=>this.pick(e)}
        >
          <span class="w-5 shrink-0"></span>
          <span
            class="inline-block w-3 h-3 rounded-full border border-dashed border-muted/70 shrink-0"
          ></span>
          <span class="truncate flex-1">${e.label}</span>
          ${this.renderCheck(e.current)}
        </li>
      `;if(e.kind==="goal"){const s=e.krCount>0;return r`
        <li
          class="${t} ${i} mt-1 font-semibold text-ink"
          role="option"
          aria-selected=${e.current?"true":"false"}
          @click=${()=>this.pick(e)}
        >
          ${s?r`<button
                type="button"
                class="w-5 h-5 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover shrink-0 transition-transform ${e.expanded?"rotate-90":""}"
                aria-label=${e.expanded?"Collapse key results":"Expand key results"}
                aria-expanded=${e.expanded?"true":"false"}
                @click=${n=>this.toggleGoal(e.id,n)}
              >
                ${as("chevron-right",14)}
              </button>`:r`<span class="w-5 shrink-0"></span>`}
          ${this.renderNsMarker(e.northStar,"goal")}
          <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${e.label}</span>
          ${s&&!e.expanded?r`<span class="text-[11px] font-normal text-muted tabular-nums shrink-0"
                >${e.krCount} KR${e.krCount===1?"":"s"}</span
              >`:c}
          ${this.renderCheck(e.current)}
        </li>
      `}return r`
      <li
        class="${t} ${i} pl-9 text-ink/85"
        role="option"
        aria-selected=${e.current?"true":"false"}
        @click=${()=>this.pick(e)}
      >
        ${this.renderNsMarker(e.northStar,"kr")}
        <span class="flex-1 min-w-0 line-clamp-2 leading-snug">${e.label}</span>
        ${this.renderCheck(e.current)}
      </li>
    `}render(){const e=this.buildItems(),t=e.some(i=>i.kind!=="none");return r`
      <div
        class="w-[28rem] max-w-[calc(100vw-1rem)] min-h-0 flex flex-col bg-popover rounded-xl overflow-hidden"
        style="box-shadow: var(--popover-shadow)"
        role="dialog"
        aria-label="Assign to goal or key result"
        @click=${i=>i.stopPropagation()}
      >
        <div class="flex items-center gap-2 h-9 px-3 border-b border-line text-muted shrink-0">
          ${as("search",14)}
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
                ${as("x",12)}
              </button>`:c}
        </div>
        <ul class="flex-1 min-h-0 overflow-y-auto p-1" role="listbox">
          ${e.map(i=>this.renderRow(i))}
          ${t?c:r`<li class="px-3 py-6 text-sm text-muted text-center">
                No goals or KRs match “${this.query.trim()}”
              </li>`}
        </ul>
      </div>
    `}};Xt([b({attribute:!1})],Tt.prototype,"anchor",2);Xt([b({type:Number})],Tt.prototype,"currentGoalId",2);Xt([b({type:Number})],Tt.prototype,"currentKeyResultId",2);Xt([d()],Tt.prototype,"query",2);Xt([d()],Tt.prototype,"expanded",2);Xt([V(".cp-search")],Tt.prototype,"searchEl",2);Tt=Xt([w("category-picker")],Tt);var Gu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,vi=(e,t,i,s)=>{for(var n=s>1?void 0:s?Vu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Gu(t,i,n),n};let Bt=class extends T{constructor(){super(...arguments),this.mode="open",this.pickerCommitId=null,this.pickerAnchor=null,this.dragOverIdea=!1,this.highlightIds=new Set,this.flash=new Os(this,"commitment"),this.onOpsEvent=e=>{const t=e.detail;this.flash.take(t),this.mode==="open"&&t?.action==="refresh"&&t.added?.kind==="commitment"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id))},this.onCommitTouched=e=>{const t=e.detail?.id;if(t==null||!this.highlightIds.has(t))return;const i=new Set(this.highlightIds);i.delete(t),this.highlightIds=i},this.onIdeaDragOver=e=>{this.mode==="open"&&e.dataTransfer?.types.includes("text/x-idea-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverIdea=!0)},this.onIdeaDragLeave=()=>{this.dragOverIdea=!1},this.onIdeaDrop=async e=>{if(this.mode!=="open")return;const t=e.dataTransfer?.getData("text/x-idea-id");if(!t)return;e.preventDefault(),this.dragOverIdea=!1;const i=(e.dataTransfer?.getData("text/plain")||"").trim();i&&await Ro(Number(t),i)}}connectedCallback(){super.connectedCallback(),this.unsubCommits=F(this,f,e=>e.commitments),this.unsubGoals=F(this,f,e=>e.goals),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.(),document.removeEventListener("ops-event",this.onOpsEvent)}onOpenPicker(e){if(this.pickerCommitId===e.detail.commitId){this.closePicker();return}this.pickerCommitId=e.detail.commitId,this.pickerAnchor=e.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(e){const t=this.pickerCommitId;t!=null&&(this.closePicker(),await f.getState().updateCommitment(t,{goalId:e.detail.goalId,keyResultId:e.detail.keyResultId}))}render(){const e=f.getState().commitments,t=e.filter(s=>this.mode==="done"?s.done:!s.done),i=e.find(s=>s.id===this.pickerCommitId)??null;return r`
      <ul
        class="commits"
        style=${this.mode==="open"?this.dragOverIdea?"min-height:32px;box-shadow:inset 0 0 0 1.5px var(--accent);border-radius:12px;":"min-height:8px;":""}
        @open-picker=${this.onOpenPicker}
        @commit-touched=${this.onCommitTouched}
        @dragover=${this.onIdeaDragOver}
        @dragleave=${this.onIdeaDragLeave}
        @drop=${this.onIdeaDrop}
      >
        ${t.map((s,n)=>r`<commit-row class=${this.flash.cls(s.id)} data-flash=${this.flash.key(s.id)} .commit=${s} .index=${n} .highlight=${this.highlightIds.has(s.id)}></commit-row>`)}
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
    `}};vi([b()],Bt.prototype,"mode",2);vi([d()],Bt.prototype,"pickerCommitId",2);vi([d()],Bt.prototype,"pickerAnchor",2);vi([d()],Bt.prototype,"dragOverIdea",2);vi([d()],Bt.prototype,"highlightIds",2);Bt=vi([w("weekly-commits")],Bt);var Yu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,Il=(e,t,i,s)=>{for(var n=s>1?void 0:s?Qu(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Yu(t,i,n),n};const Ju=new Intl.DateTimeFormat("en-GB",{weekday:"long"}),Er=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short"}),bn=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit"}),ls=e=>new Date(e).setHours(0,0,0,0);function Xu(e){const t=e.attendees.filter(i=>!i.self).map(i=>(i.name||i.email.split("@")[0]||"").split(/[ .]/)[0]).filter(Boolean);return t.length?t.length<=2?t.join(", "):`${t.slice(0,2).join(", ")} +${t.length-2}`:""}function _l(e,t=""){return r`<div class="wk-row flex items-center gap-2 pl-4 -mx-2 pb-1">
    <span class="wk-gutter shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;" aria-hidden="true">⠿</span>
    <h3 class="text-[13px] font-medium text-muted">${e}</h3>
    ${t?r`<span class="text-[11px] text-muted">${t}</span>`:c}
  </div>`}let oo=class extends T{constructor(){super(...arguments),this.data=null,this.loadedFor=null,this.onOps=e=>{e.detail?.action==="refresh"&&this.load(!0)}}connectedCallback(){super.connectedCallback(),this.unsub=F(this,f,e=>e.currentWeek),document.addEventListener("ops-event",this.onOps),this.timer=window.setInterval(()=>{document.visibilityState==="visible"&&this.load(!0)},10*6e4)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("ops-event",this.onOps),window.clearInterval(this.timer),this.request?.abort(),this.loadedFor=null}updated(){(f.getState().currentWeek??Pe())!==this.loadedFor&&this.load(!1)}async load(e){const t=f.getState().currentWeek??Pe();t!==this.loadedFor&&(this.loadedFor=t,this.data=null),this.request?.abort();const i=new AbortController;this.request=i;const s=()=>!i.signal.aborted&&t===(f.getState().currentWeek??Pe());try{const n=await fetch(`/api/calendar?week=${encodeURIComponent(t)}`,{cache:"no-store",signal:i.signal});if(n.status===401||n.status===403){s()&&(this.data=null);return}if(!n.ok)throw new Error(String(n.status));const o=await n.json();s()&&o.week===t&&(this.data=o)}catch{s()&&(!e||!this.data)&&(this.data={week:t,source:"live",events:[],error:"Couldn't reach the calendar",fetchedAt:Date.now()})}}renderRow(e,t){const i=Date.parse(e.start),s=Date.parse(e.end),n=s<=t,o=!e.allDay&&!n&&i<=t,a=Xu(e),l=ls(i)===ls(s)?bn.format(s):`${Er.format(s)} ${bn.format(s)}`;return r`<li class="meeting-row ${o?"meeting-row-live":""}">
      <div class="meeting-time">
        ${e.allDay?"All day":r`
          <time datetime=${e.start}>${bn.format(i)}</time>
          <time class="meeting-end" datetime=${e.end} aria-label=${`Ends at ${l}`}>${l}</time>`}
      </div>
      <div class="meeting-details">
        ${e.htmlLink?r`<a class="meeting-title hover:underline" href=${e.htmlLink} target="_blank" rel="noopener">${e.title}</a>`:r`<span class="meeting-title">${e.title}</span>`}
        ${a||o||!n&&e.myResponse==="needsAction"?r`<div class="meeting-meta">
              ${o?r`<span class="meeting-now">Happening now</span>`:c}
              ${a?r`<span>${a}</span>`:c}
              ${!n&&e.myResponse==="needsAction"?r`<span>RSVP pending</span>`:c}
            </div>`:c}
      </div>
      ${e.meetUrl&&!n?r`<a class="meeting-join" aria-label=${`Join ${e.title}`} href=${e.meetUrl} target="_blank" rel="noopener">
            <sc-icon name="lucide-video" aria-hidden="true"></sc-icon>Join
          </a>`:c}
    </li>`}render(){const e=this.data;if(!e||e.source==="off")return c;const t=Date.now(),i=ls(t),s=new Date(i),n=s.setDate(s.getDate()+1),o=e.week===Pe(),a=new Map;for(const l of e.events){const h=ls(Date.parse(l.start));if(l.myResponse==="declined"||o&&h<i)continue;const u=a.get(h);u?u.push(l):a.set(h,[l])}return!a.size&&!e.error?c:r`<section class="week-meetings" aria-label="Meetings">
      ${_l("Meetings",e.source==="sample"?"Sample":"")}
      ${e.error?r`<p class="meeting-error" role="status">Couldn’t refresh the calendar.</p>`:c}
      ${[...a].map(([l,h])=>r`
        <div class="meeting-day">
          <h4 class="meeting-day-heading">
            <span>${l===i?"Today":l===n?"Tomorrow":Ju.format(l)}</span>
            <span>${Er.format(l)}</span>
          </h4>
          <ul>${h.map(u=>this.renderRow(u,t))}</ul>
        </div>`)}
    </section>`}};Il([d()],oo.prototype,"data",2);oo=Il([w("week-meetings")],oo);var Zu=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Te=(e,t,i,s)=>{for(var n=s>1?void 0:s?ep(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Zu(t,i,n),n};const tp='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6"/><polyline points="8 5 4 9 8 13"/></svg>',Dr="slmai.cockpit.weekSectionCollapsed",vn="slmai.cockpit.weekSection.title",Ar="slmai.cockpit.weekSection.hideDone",yn="Shipping this week";let ye=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.showMeetings=!1,this.collapsed=!1,this.hideDone=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=yn,this.leftoverCount=0,this.newGoalId=null,this.newKeyResultId=null,this.addPickerOpen=!1,this.addPickerAnchor=null,this.leftoverForWeek=null,this.opsHandler=e=>{const i=e.detail;i&&(i.action==="load-week"?f.getState().setWeek(i.week):i.action==="refresh"&&f.getState().loadCommitments(i.week))},this.closeAddPicker=()=>{this.addPickerOpen=!1,this.addPickerAnchor=null}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Dr)==="1",this.hideDone=localStorage.getItem(Ar)==="1",this.titleValue=localStorage.getItem(vn)??yn,fetch("/api/settings").then(t=>t.json()).then(t=>{const i=t["ui.section.week.title"];i&&(this.titleValue=i,localStorage.setItem(vn,i))}).catch(()=>{}),this.unsub=F(this,f,t=>t.currentWeek),this.unsubCommits=F(this,f,t=>`${t.commitments.filter(i=>i.done).length}`),document.addEventListener("ops-event",this.opsHandler);const e=f.getState();e.goals.length||e.loadGoals().catch(()=>{}),e.currentWeek==null&&e.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsubCommits?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(e){e.has("adding")&&this.adding&&this.newTitleEl?.focus();const t=Pe();f.getState().currentWeek===t&&this.leftoverForWeek!==t&&(this.leftoverForWeek=t,this.refreshLeftover(t))}async refreshLeftover(e){try{const{commitments:t}=await E.commitments.listForWeek(Fs(e,-1));this.leftoverCount=t.filter(i=>!i.done).length}catch{this.leftoverCount=0}}async doCarry(e){e.stopPropagation();const t=Pe();try{await E.commitments.carryOver(Fs(t,-1),t)}catch{}this.leftoverCount=0,await f.getState().loadCommitments(t)}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||yn;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(vn,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(Dr,this.collapsed?"1":"0")}catch{}}toggleHideDone(e){e.stopPropagation(),this.hideDone=!this.hideDone;try{localStorage.setItem(Ar,this.hideDone?"1":"0")}catch{}}async commitAdd(e){const t=this.newTitleEl,i=(t?.value??"").trim();i&&await f.getState().createCommitment({title:i,goalId:this.newGoalId,keyResultId:this.newKeyResultId}),this.newGoalId=null,this.newKeyResultId=null,e||!i?this.adding=!1:t&&(t.value="")}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!1)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newGoalId=null,this.newKeyResultId=null)}startAdd(){this.newGoalId=null,this.newKeyResultId=null,this.adding=!0}get newLinkedGoal(){const e=f.getState().goals;if(this.newGoalId!=null)return e.find(t=>t.id===this.newGoalId)??null;if(this.newKeyResultId!=null){for(const t of e)if((t.keyResults??[]).some(i=>i.id===this.newKeyResultId))return t}return null}openAddPicker(e){e.stopPropagation(),this.addPickerAnchor=e.currentTarget,this.addPickerOpen=!0}onAddPick(e){this.newGoalId=e.detail.goalId,this.newKeyResultId=e.detail.keyResultId,this.closeAddPicker(),this.updateComplete.then(()=>this.newTitleEl?.focus())}renderAddMarker(){const e=this.newLinkedGoal;if(e){const t=e.symbol??null,i=e.color??null,s=t?Gt[t]:void 0;return t&&s?r`<span
          class="inline-flex items-center justify-center w-3.5 h-3.5"
          style=${i?`color:var(--nsc-${i})`:""}
          >${W(Wt(s))}</span
        >`:r`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${i?`background:var(--nsc-${i})`:"background:var(--muted)"}
      ></span>`}return r`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>`}render(){const e=f.getState().currentWeek===Pe(),t=f.getState().commitments.filter(s=>s.done).length,i=this.tabbed||!this.collapsed;return r`
      <section class="group/section-header flex flex-col gap-1">
        ${this.tabbed?c:r`<header
              class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
              @click=${this.toggleCollapsed}
            >
              <span
                class="text-muted opacity-60"
                style="width:12px;height:12px;display:inline-flex;"
                >${W(this.collapsed?es:Zi)}</span
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
              ${e&&this.leftoverCount>0?r`<div class="flex justify-end pb-1">
                    <button
                      type="button"
                      class="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink"
                      @click=${this.doCarry}
                    ><span style="width:14px;height:14px;display:inline-flex;">${W(tp)}</span
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
                        @paste=${Ns}
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
              ${t>0?r`
                    ${Fo({open:!this.hideDone,label:`${t} done`,onToggle:s=>this.toggleHideDone(s)})}
                    ${this.hideDone?c:r`<weekly-commits .mode=${"done"}></weekly-commits>`}
                  `:c}
            `:c}
      </section>
    `}};Te([b({type:Boolean})],ye.prototype,"tabbed",2);Te([b({type:Boolean})],ye.prototype,"showMeetings",2);Te([d()],ye.prototype,"collapsed",2);Te([d()],ye.prototype,"hideDone",2);Te([d()],ye.prototype,"adding",2);Te([d()],ye.prototype,"editingTitle",2);Te([d()],ye.prototype,"titleValue",2);Te([d()],ye.prototype,"leftoverCount",2);Te([d()],ye.prototype,"newGoalId",2);Te([d()],ye.prototype,"newKeyResultId",2);Te([d()],ye.prototype,"addPickerOpen",2);Te([d()],ye.prototype,"addPickerAnchor",2);Te([V("input.new-commit-title")],ye.prototype,"newTitleEl",2);ye=Te([w("week-section")],ye);let Ol=!1,Pr=!1;function Mr(e){Ol=e.composedPath().some(t=>t instanceof Element&&t.classList.contains("mana-chat-card"))}function ip(){return!Pr&&typeof document<"u"&&(Pr=!0,document.addEventListener("pointerdown",Mr,!0),document.addEventListener("focusin",Mr,!0)),Ol}const si="mana.note:";class sp{constructor(){this.mem=new Map,this.store=null,this.opened=!1,this.ready=(typeof indexedDB>"u"?Promise.resolve(null):wc(si)).then(t=>{this.store=t}).catch(()=>{}).finally(()=>{this.opened=!0})}get isReady(){return this.opened}get(t){const i=this.mem.get(t);if(i)return i;const s=this.store?.getItem(si+t);if(s)try{const n=JSON.parse(s);return typeof n.content!="string"?void 0:(this.mem.set(t,n),n)}catch{return}}set(t,i,s,n=!1){const o={content:i,...s?{version:s}:{},...n?{unsaved:n}:{}},a=this.get(t);this.mem.set(t,o),!(a&&a.content===i&&a.version===s&&!!a.unsaved===n)&&this.store?.setItem(si+t,JSON.stringify(o))}delete(t){this.mem.delete(t),this.store?.removeItem(si+t)}move(t,i){const s=this.get(t);this.delete(t),s&&this.set(i,s.content,s.version,s.unsaved)}keepOnly(t){const i=this.store,s=new Set(this.mem.keys());if(i)for(let n=0;n<i.length;n++){const o=i.key(n);o?.startsWith(si)&&s.add(o.slice(si.length))}for(const n of s)!t.has(n)&&!this.get(n)?.unsaved&&this.delete(n)}}const Q=new sp;var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,O=(e,t,i,s)=>{for(var n=s>1?void 0:s?op(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&np(t,i,n),n};const Ss=[.85,.92,1,1.08,1.16,1.25,1.35,1.5],ro=3,Ll="mana.notes.textStep";function rp(){try{const e=localStorage.getItem(Ll),t=Number(e);return e!==null&&Number.isInteger(t)&&t>=0&&t<Ss.length?t:ro}catch{return ro}}let Ht=null;const xn=(...e)=>Ht.getMarkdown(...e),Ti=(...e)=>Ht.setMarkdown(...e),ap=(...e)=>Ht.alignSelectedImage(...e),lp=(...e)=>Ht.startTitledNote(...e),wn=(...e)=>Ht.isBlankNote(...e);let kn=null;function Ir(e,t){return e.replace(/^([ \t]*#{1,6}\s+)?([^\r\n]*)/,(i,s,n)=>`${s||""}${n||"Untitled"} ${t}`)}const cp=640,_r="mana.notes.sidebarHidden",Or="mana.notes.sidebarWidth",$n=864e5,De=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl+",Lr=`New note (${De}N)`,dp=[{name:"Default",v:null},{name:"Gray",v:"#6b7280"},{name:"Red",v:"#e5484d"},{name:"Orange",v:"#e8590c"},{name:"Amber",v:"#bd8400"},{name:"Green",v:"#2f9e44"},{name:"Blue",v:"#1971c2"},{name:"Violet",v:"#7048e8"},{name:"Pink",v:"#c2255c"}],hp=[{name:"Yellow",v:"#fff3a3"},{name:"Green",v:"#c3f0ca"},{name:"Blue",v:"#c5e2ff"},{name:"Pink",v:"#ffd6e7"},{name:"Orange",v:"#ffe0b8"},{name:"Purple",v:"#ecd5ff"}],te=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,Sn=(e,t,i,s="text-muted hover:text-ink")=>r`
  <button type="button" title=${t} aria-label=${t}
    class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg hover:bg-hover ${s}"
    @click=${n=>{n.stopPropagation(),i()}}>${te(e)}</button>`,ee=e=>e instanceof Error?e.message:String(e),up=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let M=class extends T{constructor(){super(...arguments),this.files=[],this.trashCount=0,this.activeName=null,this.isDraft=!1,this.error=null,this.initialized=!1,this.wide=!0,this.view="list",this.sidebarHidden=!1,this.sidebarWidth=256,this.sidebarDrag=null,this.onSidebarDown=e=>{if(e.button!==0)return;e.preventDefault();const t=e.currentTarget;t.focus(),t.setPointerCapture(e.pointerId),this.sidebarDrag={pointerId:e.pointerId,x:e.clientX,width:Math.min(this.sidebarWidth,this.sidebarMaxWidth),hidden:this.sidebarHidden,moved:!1}},this.onSidebarMove=e=>{const t=this.sidebarDrag;if(!t||t.pointerId!==e.pointerId||!t.moved&&Math.abs(e.clientX-t.x)<4)return;t.moved=!0;const i=(t.hidden?0:t.width)+e.clientX-t.x;this.sidebarHidden=i<120,this.sidebarHidden||(this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,i)))},this.onSidebarUp=e=>{const t=this.sidebarDrag;!t||t.pointerId!==e.pointerId||(this.sidebarDrag=null,!t.moved&&this.sidebarHidden&&(this.sidebarHidden=!1),this.saveSidebar())},this.onSidebarCancel=()=>{this.sidebarDrag&&(this.sidebarWidth=this.sidebarDrag.width,this.sidebarHidden=this.sidebarDrag.hidden,this.sidebarDrag=null)},this.resetSidebar=()=>{this.sidebarHidden=!1,this.sidebarWidth=256,this.saveSidebar()},this.onSidebarKey=e=>{if(e.key==="Escape"&&this.sidebarDrag){this.onSidebarCancel();return}if(["ArrowLeft","ArrowRight","Home","End","Enter"," "].includes(e.key)){if(e.preventDefault(),e.key==="Enter"||e.key===" "){this.toggleSidebar();return}e.key==="Home"?this.sidebarHidden=!0:e.key==="End"||e.key==="ArrowRight"&&this.sidebarHidden?this.sidebarHidden=!1:e.key==="ArrowLeft"&&this.sidebarWidth<=192?this.sidebarHidden=!0:this.sidebarWidth=Math.max(192,Math.min(this.sidebarMaxWidth,this.sidebarWidth+(e.key==="ArrowLeft"?-16:16))),this.saveSidebar()}},this.searchQ="",this.hits=null,this.trashOpen=!1,this.trashItems=[],this.toast=null,this.tbMenu=null,this.tbTrigger=null,this.toolbarPortal=null,this.blogEnabled=!1,this.blogConnected=!1,this.blogBusy=!1,this.tagSaving=!1,this.syncingBlog=!1,this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all",this.allBlogTags=[],this.blogDeleteName=null,this.publishConfirm=null,this.rowMenuName=null,this.rowMenuPoint=null,this.duplicating=!1,this.pinnedCollapsed=!1,this.closeToolbar=()=>{this.tbMenu=null},this.onToolbarScroll=e=>{e.target instanceof Node&&this.toolbarPortal?.contains(e.target)||this.closeToolbar()},this.onToolbarMenuKey=e=>{if(e.key==="Escape"){e.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}if(e.target instanceof HTMLInputElement||!["ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const t=[...this.toolbarPortal.querySelectorAll("button:not(:disabled)")];if(!t.length)return;const i=t.indexOf(document.activeElement),s=e.key==="Home"?0:e.key==="End"?t.length-1:(i+(e.key==="ArrowUp"?-1:1)+t.length)%t.length;e.preventDefault(),t[s]?.focus()},this.editorTick=0,this.liveTitle="",this.dragName=null,this.dropAt=null,this.mediaOpen=!1,this.mediaPurpose="body",this.mediaNote=null,this.mediaReplacement=null,this.uploading=0,this.uploadPct=0,this.suppressClick=!1,this.hostReady=!1,this.cur=null,this.dirty=!1,this.pending=0,this.queue=Promise.resolve(),this.mutGen=0,this.selfNames=new Set,this.renamed=new Map,this.pollFailed=!1,this.selectionText="",this.onDocDown=e=>{if(!this.tbMenu)return;!e.composedPath().some(i=>i instanceof HTMLElement&&i.hasAttribute("data-tb-root"))&&!e.composedPath().includes(this.toolbarPortal)&&this.closeToolbar()},this.onKey=e=>{if(e.defaultPrevented||e.isComposing||!this.getClientRects().length||this.mediaOpen)return;const t=e.target instanceof HTMLElement?e.target:null;if(t&&!this.contains(t)&&!this.toolbarPortal?.contains(t)&&(t.isContentEditable||t.closest("input, textarea, select, [role=dialog], [role=menu]")))return;if(e.key==="Escape"&&this.tbMenu){e.preventDefault(),this.closeToolbar(),this.tbTrigger?.focus();return}const i=(e.metaKey||e.ctrlKey)&&!e.altKey,s=i&&!e.shiftKey&&e.code==="KeyN"&&!ip()||e.altKey&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&e.code==="KeyN",n=i&&e.shiftKey&&e.code==="KeyF",o=i&&!e.shiftKey&&e.code==="Backslash",a=i&&!e.shiftKey&&e.code==="KeyS",l=i?e.code==="Equal"||e.code==="NumpadAdd"?1:e.code==="Minus"||e.code==="NumpadSubtract"?-1:e.code==="Digit0"||e.code==="Numpad0"?2:0:0;if(l){e.preventDefault(),e.stopPropagation(),this.setTextStep(l===2?ro:this.textStep+l);return}!s&&!n&&!o&&!a||(e.preventDefault(),e.stopPropagation(),!e.repeat&&(s?(this.closeToolbar(),this.newNote()):n?this.focusNotesSearch():o?(this.closeToolbar(),this.wide?this.toggleSidebar():this.view=this.view==="note"?"list":this.cur?"note":"list",(this.wide?!this.sidebarHidden:this.view==="list")?this.focusNotesSearch():this.updateComplete.then(()=>this.editor?.commands.focus())):a&&this.flush()))},this.textStep=rp(),this.onVisibility=()=>{if(document.visibilityState!=="hidden")return;this.flush();const e=this.cur;e?.touched&&(e.touched=!1,this.queueRetitle(e))},this.onSettle=e=>{this.flush(),e.detail?.wait?.(this.enqueue(async()=>{}))},this.onNoteChanged=e=>{const t=e.detail,i=t?.change;i?.from&&this.cur?.name===i.from&&!this.dirty?(Q.delete(i.from),this.files=this.files.filter(s=>s.name!==i.from),this.mutGen++,i.to?(this.cur.name=i.to,this.cur.mtime=0,this.cur.touched=!1,this.selfNames.add(i.to),this.syncActive(),this.loadContent(this.cur)):this.closeCurrent()):this.cur?.name&&this.cur.name===t?.file&&!this.dirty&&this.loadContent(this.cur),this.loadFiles()},this.onOpenNote=e=>{const t=e.detail;!t?.file||!/^(?!\.)[^/\\\0]+\.md$/.test(t.file)||(t.ack?.(),this.clearSearch(),this.matchesNoteFilter(t.file)||(this.noteFilter="all"),this.open(t.file))}}get sidebarMaxWidth(){return Math.max(192,Math.min(480,this.clientWidth-328))}saveSidebar(){try{localStorage.setItem(_r,this.sidebarHidden?"1":"0"),localStorage.setItem(Or,String(this.sidebarWidth))}catch{}}async loadBlogStatus(){try{const e=await this.api("GET","/api/notes/blog/status");this.blogEnabled=e.enabled,this.blogConnected=e.connected,e.connected&&Date.now()-e.lastSync>6e4&&this.syncBlogLibrary(!0)}catch{}}async syncBlogLibrary(e=!1){if(!this.syncingBlog){this.syncingBlog=!0;try{this.flush(),await this.queue;const t=await this.api("POST","/api/notes/blog/sync",{activeName:this.cur?.name});await this.loadFiles(),(!e||t.conflicts)&&this.showToast(t.conflicts?`${t.conflicts} article(s) have changes on both sides`:`Blog synced: ${t.imported} imported, ${t.updated} updated`)}catch(t){this.showToast(ee(t))}finally{this.syncingBlog=!1}}}async savedNote(){const e=this.cur;if(this.flush(),await this.queue,!e?.name||e===this.cur&&this.dirty)throw new Error("Save a note with a title and content first.");return e}async blogAction(e){if(!(this.blogBusy||this.tagSaving||this.uploading)){this.blogBusy=!0;try{const t=await this.savedNote(),i=await this.api("POST",`/api/notes/blog/${e==="save-draft"?"publish":e}`,{name:t.name,published:e!=="save-draft"});t===this.cur&&(this.activeBlog=i.blog,this.blogLocalDirty=this.dirty||i.blog.dirty),e==="pull"&&t===this.cur&&(Q.delete(t.name),await this.loadContent(t)),await this.loadFiles(),this.showToast(e==="publish"?"Published to blog":e==="save-draft"?"Draft saved to blog":e==="unpublish"?"Unpublished from blog":"Latest blog version pulled. Any local edits were kept as a separate note.")}catch(t){this.showToast(ee(t))}finally{this.blogBusy=!1}}}async saveTags(e){if(!this.tagSaving){this.tagSaving=!0;try{await this.enqueue(async()=>{});const t=await this.savedNote(),i=await this.enqueue(()=>this.api("PATCH","/api/notes/blog/tags",{name:t.name,categories:e}));t===this.cur&&(this.activeBlog=i.blog),this.loadFiles()}catch(t){this.showToast(ee(t))}finally{this.tagSaving=!1}}}async openTags(e=!1){try{this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags}catch{this.allBlogTags=[]}this.isConnected&&(this.tbMenu=e?"manage-tags":"tags")}async renameTag(e,t){if(t=t.trim(),!(!t||t===e)&&!this.blogBusy){this.blogBusy=!0;try{const i=await this.api("POST","/api/notes/blog/rename-tag",{from:e,to:t});await this.loadFiles(),this.allBlogTags=(await this.api("GET","/api/notes/blog/tags")).tags,this.showToast(i.failed?`${i.updated} articles updated; ${i.failed} could not be updated`:"Tag renamed across the blog")}catch(i){this.showToast(ee(i))}finally{this.blogBusy=!1}}}async confirmBlogDelete(){const e=this.blogDeleteName;if(!(!e||this.blogBusy)){this.blogBusy=!0;try{await this.api("POST","/api/notes/blog/delete",{name:e,confirm:!0}),this.blogDeleteName=null,this.trashNote(e),this.cur?.name===e&&(this.activeBlog=null),this.showToast("Article deleted from the blog")}catch(t){this.showToast(ee(t))}finally{this.blogBusy=!1}}}matchesNoteFilter(e){const t=!!this.files.find(i=>i.name===e)?.blog?.url;return this.noteFilter==="all"||(this.noteFilter==="blog"?t:!t)}openRowMenu(e,t){e.preventDefault(),e.stopPropagation(),this.closeToolbar();const s=e.currentTarget.closest("[data-drop-row]")?.querySelector("button");if(!s)return;const n=s.getBoundingClientRect();this.rowMenuName=t,this.rowMenuPoint="clientX"in e&&(e.clientX||e.clientY)?{x:e.clientX,y:e.clientY}:{x:n.left+16,y:n.top+24},this.tbTrigger=s,this.tbMenu="row",this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}openDraftMenu(e){const t=this.querySelector('[data-notes-header] [aria-label="Note actions"]');t&&(e.preventDefault(),this.rowMenuPoint={x:e.clientX,y:e.clientY},this.tbTrigger=t,this.tbMenu="more")}async noteMarkdown(e){return await this.queue,e=this.renamed.get(e)??e,this.cur?.name===e&&this.cur.loaded&&this.editor?xn(this.editor):(await this.api("GET",`/api/notes/files/${encodeURIComponent(e)}`)).content}async duplicateNote(e){if(!this.duplicating){this.duplicating=!0;try{const t=await this.noteMarkdown(e),i=Ir(t,"(copy)"),s=await this.enqueue(()=>this.api("POST","/api/notes/files",{content:i}));this.selfNames.add(s.name),Q.set(s.name,i,s.version),this.mutGen++,await this.loadFiles(),this.open(s.name),this.showToast("Note duplicated")}catch(t){this.error=ee(t)}finally{this.duplicating=!1}}}async copyNote(e){try{await navigator.clipboard.writeText(await this.noteMarkdown(e)),this.showToast("Note copied")}catch{this.showToast("Could not copy note")}}paintToolbarPortal(){if(!this.tbMenu||!this.tbTrigger?.isConnected||!this.editor){this.toolbarPortal&&(xe(c,this.toolbarPortal),this.toolbarPortal.remove(),this.toolbarPortal=null);return}this.toolbarPortal||(this.toolbarPortal=document.createElement("div"),this.toolbarPortal.className="fixed z-[100] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",this.toolbarPortal.id="notes-toolbar-menu",this.toolbarPortal.setAttribute("role","dialog"),document.body.appendChild(this.toolbarPortal)),this.toolbarPortal.setAttribute("role",this.tbMenu==="row"?"menu":"dialog"),this.toolbarPortal.setAttribute("aria-label",{format:"Text formatting",list:"Lists",more:"Note actions",shortcuts:"Keyboard shortcuts",row:"Note actions",library:"Notes library",tags:"Article tags","manage-tags":"Manage blog tags","featured-image":"Featured image"}[this.tbMenu]),this.toolbarPortal.style.fontFamily=getComputedStyle(this).fontFamily,this.toolbarPortal.style.width=`${Math.min(272,window.innerWidth-16)}px`,this.toolbarPortal.style.maxHeight=`${window.innerHeight-16}px`,xe(this.renderToolbarMenu(),this.toolbarPortal);const e=this.tbTrigger.getBoundingClientRect(),t=this.toolbarPortal.getBoundingClientRect(),i=this.rowMenuPoint&&(this.tbMenu==="row"||this.tbMenu==="more"),s=i?this.rowMenuPoint.x:e.left;this.toolbarPortal.style.left=`${Math.max(8,Math.min(s,window.innerWidth-t.width-8))}px`;const n=i?this.rowMenuPoint.y:e.bottom+6+t.height>window.innerHeight-8?e.top-t.height-6:e.bottom+6;this.toolbarPortal.style.top=`${Math.max(8,Math.min(n,window.innerHeight-t.height-8))}px`}focusNotesSearch(){this.closeToolbar(),this.wide?(this.sidebarHidden=!1,this.saveSidebar()):this.view="list",this.updateComplete.then(()=>{const e=this.querySelector("[data-notes-search]");e?.focus(),e?.select()})}setTextStep(e){this.textStep=Math.max(0,Math.min(Ss.length-1,e)),this.style.setProperty("--notes-scale",String(Ss[this.textStep]));try{localStorage.setItem(Ll,String(this.textStep))}catch{}}connectedCallback(){super.connectedCallback(),this.style.setProperty("--notes-scale",String(Ss[this.textStep]));try{this.sidebarHidden=localStorage.getItem(_r)==="1";const e=Number(localStorage.getItem(Or));Number.isFinite(e)&&e>=192&&(this.sidebarWidth=Math.min(480,e))}catch{}this.resizeObs=new ResizeObserver(()=>{this.onSidebarCancel();const e=this.clientWidth>=cp;e!==this.wide?this.wide=e:this.requestUpdate()}),this.resizeObs.observe(this),this.loadFiles(),this.loadBlogStatus(),this.pollTimer=setInterval(()=>{document.hidden||this.loadFiles()},4e3),window.addEventListener("pointerdown",this.onDocDown,!0),window.addEventListener("keydown",this.onKey,!0),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("scroll",this.onToolbarScroll,!0),window.addEventListener("resize",this.closeToolbar),window.addEventListener("mana:notes-settle",this.onSettle),window.addEventListener("mana:note-changed",this.onNoteChanged),window.addEventListener("mana:open-note",this.onOpenNote)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mana:notes-settle",this.onSettle),window.removeEventListener("mana:note-changed",this.onNoteChanged),window.removeEventListener("mana:open-note",this.onOpenNote),window.removeEventListener("pointerdown",this.onDocDown,!0),window.removeEventListener("keydown",this.onKey,!0),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("scroll",this.onToolbarScroll,!0),window.removeEventListener("resize",this.closeToolbar),this.tbMenu=null,this.paintToolbarPortal(),this.resizeObs?.disconnect(),this.onSidebarCancel(),this.pollTimer&&clearInterval(this.pollTimer),this.searchTimer&&clearTimeout(this.searchTimer),this.toastTimer&&clearTimeout(this.toastTimer),this.closeMedia(),this.leave(),this.editor?.destroy(),this.editor=void 0}get holdReload(){return this.dirty||this.pending>0||(this.editor?.isFocused??!1)}async api(e,t,i){const s=await fetch(t,{method:e,credentials:"include",headers:i===void 0?void 0:{"content-type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)});if(!s.ok){const n=await s.json().catch(()=>({}));throw new Error(n.error||`Request failed (${s.status})`)}return await s.json()}enqueue(e){const t=this.queue.then(e);return this.queue=t.catch(()=>{}),t}async loadFiles(){if(this.dragName)return;const e=this.mutGen;try{const t=await this.api("GET","/api/notes/files");if(e!==this.mutGen)return;this.pollFailed&&(this.pollFailed=!1,this.error=null);const i=new Set(this.files.map(a=>a.name));if(this.files=t.files,Q.keepOnly(new Set(t.files.map(a=>a.name))),this.trashCount=t.trashCount??0,this.cur?.name&&(this.activeBlog=this.files.find(a=>a.name===this.cur.name)?.blog??null,!this.dirty&&!this.pending&&(this.blogLocalDirty=!!this.activeBlog?.dirty)),!this.initialized){this.initialized=!0,this.wide&&!this.cur&&t.files[0]&&this.open(t.files[0].name);return}const s=t.files.filter(a=>!i.has(a.name)&&!this.selfNames.has(a.name));if(s.length&&!this.holdReload&&!this.syncingBlog){const a=s.reduce((l,h)=>h.modifiedAt>l.modifiedAt?h:l);this.open(a.name);return}const n=this.cur;if(!n?.name||this.holdReload)return;const o=t.files.find(a=>a.name===n.name);o?o.modifiedAt>n.mtime&&this.loadContent(n):this.closeCurrent()}catch(t){this.error=ee(t),this.pollFailed=!0}}async loadContent(e){if(e.name)try{const t=await this.api("GET",`/api/notes/files/${encodeURIComponent(e.name)}`),i=Q.get(e.name);if(i?.unsaved&&t.version&&i.content!==t.content){if(e!==this.cur||!this.editor||this.dirty)return;this.error=null,e.mtime=t.modifiedAt??0,i.version===t.version?(e.version=t.version,e.loaded&&e.shown===i.content&&this.onEdit()):(await this.enqueue(()=>this.onSaveRefused(e,i.content,{content:t.content,version:t.version,modifiedAt:t.modifiedAt??0})),e===this.cur&&this.editor&&!this.dirty&&(e.shown!==t.content&&(Ti(this.editor,t.content),e.shown=t.content),e.loaded=!0,this.editor.setEditable(!0,!1)));return}if(Q.set(e.name,t.content,t.version),e!==this.cur||!this.editor||this.dirty)return;e.mtime=t.modifiedAt??0,e.version=t.version,this.error=null,e.loaded&&e.shown===t.content||(Ti(this.editor,t.content),e.shown=t.content),e.loaded=!0,this.editor.setEditable(!0,!1)}catch(t){this.error=ee(t)}}open(e){if(this.trashOpen=!1,this.activeBlog=this.files.find(i=>i.name===e)?.blog??null,this.blogLocalDirty=!!this.activeBlog?.dirty,this.cur?.name===e){this.view="note";return}this.leave();const t={name:e,mtime:0,touched:!1,loaded:!1};this.cur=t,this.syncActive(),this.view="note",this.dirty=!1,this.showCached(t),this.loadContent(t)}showCached(e){const t=this.editor;if(!t||!e.name)return;const i=Q.get(e.name);!i&&!Q.isReady&&Q.ready.then(()=>{e===this.cur&&!e.loaded&&Q.get(e.name)&&this.showCached(e)}),Ti(t,i?.content??""),e.shown=i?.content,e.version=i?.version,e.loaded=i!=null&&!!i.version,t.setEditable(e.loaded,!1)}newNote(){this.activeBlog=null,this.blogLocalDirty=!1,this.noteFilter="all";const e=this.editor;e&&(this.trashOpen=!1,this.clearSearch(),this.cur&&!this.cur.name&&wn(e)||(this.leave(),this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive(),lp(e),e.setEditable(!0,!1),this.dirty=!1),this.view="note",this.updateComplete.then(()=>this.editor?.commands.focus("start")))}closeCurrent(){this.saveTimer&&clearTimeout(this.saveTimer),this.dirty=!1,this.cur=null,this.syncActive(),this.editor&&Ti(this.editor,""),this.wide&&this.files[0]?this.open(this.files[0].name):this.view="list"}back(){this.leave(),this.view="list"}syncActive(){this.activeName=this.cur?.name??null,this.isDraft=!!this.cur&&!this.cur.name,this.updateViewContext()}onEdit(){this.activeBlog?.url&&(this.blogLocalDirty=!0),this.cur||(this.cur={name:null,mtime:0,touched:!1,loaded:!0},this.syncActive()),this.cur.touched=!0,this.dirty=!0,this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.flush(),900)}flush(){this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0);const e=this.cur,t=this.editor;if(!e||!t||!this.dirty)return;this.dirty=!1;const i=xn(t).replace(/\n*$/,`
`),s=wn(t);e.name&&Q.set(e.name,i,e.version,!0);const n=e.epoch??0;this.pending++,this.enqueue(async()=>{try{if((e.epoch??0)!==n)return;if(e.name){const o=await this.putNote(e.name,i,e.version);if(!o.ok){await this.onSaveRefused(e,i,o);return}e.mtime=o.modifiedAt,e.version=o.version,e.shown=i;const a=Q.get(e.name);a?.unsaved&&a.content!==i?Q.set(e.name,a.content,o.version,!0):Q.set(e.name,i,o.version)}else{if(s)return;const o=await this.api("POST","/api/notes/files",{content:i});e.name=o.name,e.mtime=o.modifiedAt,e.version=o.version,this.selfNames.add(o.name),Q.set(o.name,i,o.version),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}this.error=null}catch(o){e===this.cur&&(this.dirty=!0),this.error=ee(o)}finally{this.pending--}})}async putNote(e,t,i){const s=await fetch(`/api/notes/files/${encodeURIComponent(e)}`,{method:"PUT",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(i?{content:t,baseVersion:i}:{content:t})}),n=await s.json().catch(()=>({}));if(s.status===409&&typeof n.content=="string"&&n.version)return{ok:!1,content:n.content,version:n.version,modifiedAt:n.modifiedAt??0};if(!s.ok)throw new Error(n.error||`Request failed (${s.status})`);return{ok:!0,version:n.version,modifiedAt:n.modifiedAt??0}}async onSaveRefused(e,t,i){const s=e.name,n=this.editor,o=!!n&&e===this.cur&&e.loaded;o&&n.setEditable(!1,!1);try{const a=o?xn(n).replace(/\n*$/,`
`):t;if(a!==i.content){const l=Ir(a,"(conflict copy)"),h=await this.api("POST","/api/notes/files",{content:l});this.selfNames.add(h.name),Q.set(h.name,l,h.version),this.mutGen++,this.loadFiles(),this.showToast("This note changed elsewhere. Your version is saved as a conflict copy.")}e.epoch=(e.epoch??0)+1,e.version=i.version,e.mtime=i.modifiedAt,Q.set(s,i.content,i.version),o&&e===this.cur&&(this.saveTimer&&(clearTimeout(this.saveTimer),this.saveTimer=void 0),this.dirty=!1,Ti(n,i.content),e.shown=i.content)}finally{o&&e===this.cur&&n.setEditable(!0,!1)}}leave(){const e=this.cur,t=this.editor;if(e&&t){this.flush();const i=e.loaded&&wn(t),s=e.touched;e.touched=!1,i?this.enqueue(async()=>{if(e.name){try{await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e.name)}?ifEmpty=1`),Q.delete(e.name)}catch(n){this.error=ee(n)}this.mutGen++,this.loadFiles()}}):s&&this.queueRetitle(e)}this.cur=null,this.syncActive()}queueRetitle(e){this.enqueue(async()=>{if(!e.name)return;const t=e.name;try{const i=await this.api("POST","/api/notes/retitle",{name:t});if(i.name===t)return;e.name=i.name,this.selfNames.add(i.name),this.renamed.set(t,i.name),Q.move(t,i.name),e===this.cur&&this.syncActive(),this.mutGen++,this.loadFiles()}catch(i){this.error=ee(i)}})}get pinnedNames(){return this.files.filter(e=>e.pinned).map(e=>e.name)}togglePin(e){const t=this.files.find(s=>s.name===e);if(!t)return;t.pinned||(this.pinnedCollapsed=!1);const i=this.pinnedNames.filter(s=>s!==e);this.setPins(t.pinned?i:[e,...i])}setPins(e){const t=new Map(this.files.map(n=>[n.name,n])),i=e.map(n=>t.get(n)).filter(n=>!!n).map(n=>({...n,pinned:!0})),s=this.files.filter(n=>!e.includes(n.name)).map(n=>({...n,pinned:!1})).sort((n,o)=>o.modifiedAt-n.modifiedAt);this.files=[...i,...s],this.mutGen++,this.enqueue(async()=>{try{await this.api("PUT","/api/notes/pins",{order:e.map(n=>this.renamed.get(n)??n)})}catch(n){this.error=ee(n)}this.mutGen++,this.loadFiles()})}onRowPointerDown(e,t){if(e.button!==0)return;const i=e.clientX,s=e.clientY,n=e.pointerType==="touch";let o=!1;const a=()=>{o=!0,this.dragName=t,this.pinnedCollapsed=!1,this.suppressClick=!0,n&&navigator.vibrate?.(10)},l=n?setTimeout(a,350):void 0,h=v=>{o&&v.preventDefault()},u=v=>{if(!o){if(Math.hypot(v.clientX-i,v.clientY-s)<6)return;if(n){g();return}a()}this.trackDrop(v.clientY)},p=()=>{const v=o;g(),v&&this.drop()},m=()=>{g(),this.dragName=null,this.dropAt=null,this.suppressClick=!1},g=()=>{l&&clearTimeout(l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",m),window.removeEventListener("touchmove",h)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",m),window.addEventListener("touchmove",h,{passive:!1})}trackDrop(e){let t=null;for(const i of this.querySelectorAll("[data-drop-row]")){const s=i.getBoundingClientRect();if(!(e<s.top||e>s.bottom)){t={name:i.dataset.dropRow||null,pos:e<s.top+s.height/2?"before":"after"};break}}(t?.name!==this.dropAt?.name||t?.pos!==this.dropAt?.pos)&&(this.dropAt=t)}drop(){const e=this.dragName,t=this.dropAt;if(this.dragName=null,this.dropAt=null,setTimeout(()=>{this.suppressClick=!1},0),!e)return;const i=this.pinnedNames;if(t&&(t.name===null||i.includes(t.name))){if(t.name===e)return;const s=i.filter(o=>o!==e);let n=t.name===null?s.length:s.indexOf(t.name)+(t.pos==="after"?1:0);n<0&&(n=s.length),s.splice(n,0,e),this.setPins(s)}else i.includes(e)&&this.setPins(i.filter(s=>s!==e))}trashNote(e){if(this.cur?.name===e){this.trashCurrent();return}this.files=this.files.filter(t=>t.name!==e),this.mutGen++,this.enqueue(()=>this.doTrash(this.renamed.get(e)??e))}trashCurrent(){const e=this.cur;e&&(this.flush(),e.name&&(this.files=this.files.filter(t=>t.name!==e.name)),this.mutGen++,this.closeCurrent(),this.enqueue(async()=>{e.name&&await this.doTrash(e.name)}))}async doTrash(e){try{const t=await this.api("DELETE",`/api/notes/files/${encodeURIComponent(e)}`);Q.delete(e);const i=t.trashed;i&&this.showToast("Moved to Recently deleted",()=>void this.restore(i))}catch(t){this.error=ee(t)}this.mutGen++,this.loadFiles()}async restore(e){this.toast=null;try{const t=await this.enqueue(()=>this.api("POST","/api/notes/restore",{name:e}));this.selfNames.add(t.name),this.mutGen++,await this.loadFiles(),this.open(t.name)}catch(t){this.error=ee(t)}}async openTrash(){this.clearSearch(),this.trashOpen=!0;try{this.trashItems=(await this.api("GET","/api/notes/trash")).items}catch(e){this.error=ee(e)}}showToast(e,t){this.toast={text:e,undo:t},this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toast=null},6e3)}onSearchInput(e){if(this.searchQ=e,this.trashOpen=!1,e.trim()&&this.wide&&this.sidebarHidden&&(this.sidebarHidden=!1,this.saveSidebar()),this.searchTimer&&clearTimeout(this.searchTimer),!e.trim()){this.hits=null;return}this.searchTimer=setTimeout(()=>{this.runSearch(e)},180)}async runSearch(e){try{const t=await this.api("GET",`/api/notes/search?q=${encodeURIComponent(e)}`);e===this.searchQ&&(this.hits=t.results)}catch(t){this.error=ee(t)}}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.searchQ="",this.hits=null}updateViewContext(){const e=this.cur?.name,t=e?`Note "${e}" is open in the notes pane (vault path: Notes/${e}). It's a Markdown file. Edit it with Read/Edit/Write and the cockpit re-renders live.`:this.cur?"A new note is open in the notes pane. It gets a file under Notes/ once the user has typed something.":"The notes list is open in the notes pane; no note is selected.",i=this.selectionText?` The user has selected this text: "${this.selectionText.slice(0,600)}". When they say "this" or ask to rewrite/expand/fix something, they mean the selected passage. Edit that part of the file.`:"";f.getState().setViewContext({tool:"notes",summary:t+i,note:e??null})}updated(){if(this.paintToolbarPortal(),this.hostReady||this.editor)return;const e=this.querySelector("#note-host");e&&(this.hostReady=!0,this.mountEditor(e))}async mountEditor(e){if(Ht??=await Le(()=>import("./notes-editor-D3O857wd.js"),[]),!this.isConnected||this.editor)return;this.editor=Ht.createNotesEditor({host:e,uploadImage:i=>this.uploadImage(i),onReplaceImage:i=>{this.openMedia("body",i)},onUpdate:()=>this.onEdit(),onTransaction:()=>{this.editorTick++;let i="";this.editor?.state.doc.forEach(s=>{i||(i=s.textContent.trim())}),this.liveTitle=i},onSelection:i=>{i!==this.selectionText&&(this.selectionText=i,this.updateViewContext())}});const t=this.cur;t?.name&&(this.showCached(t),this.loadContent(t))}async uploadImage(e){kn??=await Le(()=>import("./notes-media-CGSOjJZh.js"),__vite__mapDeps([2,3,4,5])),this.uploading++,this.uploadPct=0;try{const t=await kn.uploadMedia(e,i=>{this.uploadPct=i});return{url:t.url,alt:t.name}}catch(t){throw this.error=ee(t),t}finally{this.uploading--}}async openMedia(e="body",t=null){this.mediaReplacement?.release(),this.mediaReplacement=t,this.editor?.commands.blur(),this.mediaPurpose=e,this.mediaNote=this.cur,this.tbMenu=null;try{kn??=await Le(()=>import("./notes-media-CGSOjJZh.js"),__vite__mapDeps([2,3,4,5]))}catch(i){this.closeMedia(),this.error=ee(i);return}this.mediaOpen=!0}closeMedia(){this.mediaOpen=!1,this.mediaReplacement?.release(),this.mediaReplacement=null}onMediaInsert(e){const t=this.mediaReplacement;if(this.mediaReplacement=null,this.mediaOpen=!1,this.mediaNote!==this.cur||!this.cur?.loaded){t?.release();return}if(this.mediaPurpose==="featured"){this.saveFeaturedImage(e.url);return}if(!this.editor){t?.release();return}const i=e.credit?{type:"paragraph",content:[{type:"text",text:"Photo: ",marks:[{type:"italic"}]},{type:"text",text:e.credit.name,marks:[{type:"italic"},{type:"link",attrs:{href:e.credit.url}}]},{type:"text",text:" on ",marks:[{type:"italic"}]},{type:"text",text:"Pexels",marks:[{type:"italic"},{type:"link",attrs:{href:e.credit.page}}]}]}:void 0;if(t){t.replace({src:e.url,alt:e.name},i)||(this.error="The original image is no longer available. Select an image and try again.");return}const s=this.editor.chain().focus().setImage({src:e.url,alt:e.name});i&&s.insertContent(i),s.run()}async saveFeaturedImage(e){if(!(this.blogBusy||this.tagSaving)){this.tagSaving=!0;try{const t=await this.savedNote(),i=await this.api("PATCH","/api/notes/blog/featured-image",{name:t.name,source:e});t===this.cur&&(this.activeBlog=i.blog),await this.loadFiles(),this.showToast(e?"Featured image selected. Publish or update the blog post to apply it.":"Featured image removed. The first image in the note will be used.")}catch(t){this.showToast(ee(t))}finally{this.tagSaving=!1}}}toggleSidebar(){this.sidebarHidden=!this.sidebarHidden,this.saveSidebar()}bucket(e){const t=e*1e3,i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime();if(t>=s)return"Today";if(t>=s-$n)return"Yesterday";if(t>=s-7*$n)return"Previous 7 days";if(t>=s-30*$n)return"Previous 30 days";const n=new Date(t);return n.getFullYear()===i.getFullYear()?n.toLocaleDateString("en-GB",{month:"long"}):String(n.getFullYear())}dateLabel(e){const t=new Date(e*1e3),i=this.bucket(e);if(i==="Today")return t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});if(i==="Yesterday")return i;if(i==="Previous 7 days")return t.toLocaleDateString("en-GB",{weekday:"long"});const s=t.getFullYear()!==new Date().getFullYear();return t.toLocaleDateString("en-GB",{day:"numeric",month:"short",...s?{year:"numeric"}:{}})}mark(e){const t=this.searchQ.trim().split(/\s+/).filter(Boolean).map(up);return t.length?e.split(new RegExp(`(${t.join("|")})`,"gi")).map((i,s)=>s%2?r`<mark class="bg-accent-soft text-ink rounded-sm">${i}</mark>`:i):e}renderSearch(){const e=this.searchQ.trim();return r`
      <label class="flex items-center gap-1.5 ${this.wide?"w-44 min-w-[7.5rem] shrink":"flex-1 min-w-0"} h-8 px-3 rounded-full border border-line bg-hover text-muted transition-colors focus-within:bg-surface focus-within:border-accent">
        ${te("search","w-3.5 h-3.5 shrink-0")}
        <input data-notes-search type="text" placeholder=${this.noteFilter==="blog"?"Search blog":this.noteFilter==="local"?"Search local notes":"Search"} aria-label="Search notes" title=${`Search notes (${De}Shift+F)`} .value=${this.searchQ}
          class="flex-1 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          @input=${t=>this.onSearchInput(t.target.value)}
          @keydown=${t=>{t.key==="Escape"&&this.clearSearch(),t.key==="Enter"&&this.hits?.[0]&&this.open(this.hits[0].name)}} />
        ${e?r`<button type="button" title="Clear search" aria-label="Clear search" class="shrink-0 text-muted hover:text-ink"
          @click=${()=>this.clearSearch()}>${te("x","w-3.5 h-3.5")}</button>`:c}
      </label>`}renderSidebar(){const e=this.searchQ.trim(),t=this.files.filter(s=>this.matchesNoteFilter(s.name)).length,i=this.hits?.filter(s=>this.matchesNoteFilter(s.name)).length;return r`
      ${this.wide?c:r`<div class="flex items-center px-3 pt-3 shrink-0">${this.renderSearch()}</div>`}
      <div class="flex items-center gap-1.5 pl-4 pr-3 pt-3 pb-2 shrink-0">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-ink truncate">${e?"Search":this.noteFilter==="blog"?"Blog articles":this.noteFilter==="local"?"Local notes":"Notes"}</div>
          <div class="text-xs text-muted truncate">${e?i===void 0?"Searching…":`Found ${i} ${i===1?"note":"notes"}`:`${t} ${t===1?"note":"notes"}`}</div>
        </div>
        ${this.blogEnabled?r`<span data-tb-root class=${this.noteFilter==="all"?"":"rounded-lg bg-accent-soft"}>${this.renderToolbarTrigger("library",this.syncingBlog?"Syncing blog":"Notes and blog library",te("globe"))}</span>`:c}
        ${Sn("square-pen",Lr,()=>this.newNote(),"text-accent")}
      </div>
      <div class="notes-list-scroll flex-1 min-h-0 overflow-y-auto px-2 pb-2" style="scrollbar-gutter:stable;">
        ${this.trashOpen?this.renderTrash():e?this.renderHits():this.renderList()}
      </div>
      ${!this.trashOpen&&this.trashCount?r`
        <button type="button" class="flex items-center gap-2 mx-2 mb-2 px-3 py-2 rounded-lg text-xs text-muted hover:text-ink hover:bg-hover shrink-0"
          @click=${()=>void this.openTrash()}>
          ${te("trash-2","w-3.5 h-3.5")} Recently deleted <span class="ml-auto">${this.trashCount}</span>
        </button>`:c}`}groupLabel(e,t=!1){return t?r`<button type="button" class="notes-group-heading flex items-center justify-between w-full text-left" aria-expanded=${!this.pinnedCollapsed}
          @click=${()=>{this.pinnedCollapsed=!this.pinnedCollapsed}}><span>${e}</span>${te(this.pinnedCollapsed?"chevron-right":"chevron-down","w-3.5 h-3.5 text-muted")}</button>`:r`<h3 class="notes-group-heading">${e}</h3>`}renderList(){if(!this.files.length&&!this.isDraft)return this.initialized?r`<div class="px-3 py-8 text-center text-sm text-muted">No notes yet</div>`:c;const e=[];for(const i of this.files.filter(s=>this.matchesNoteFilter(s.name))){const s=i.pinned?"Pinned":this.bucket(i.modifiedAt),n=e[e.length-1];n?.label===s?n.items.push(i):e.push({label:s,items:[i]})}const t=this.files.find(i=>i.name===this.dragName);return r`
      ${t&&!t.pinned&&!e.some(i=>i.label==="Pinned")?r`
        <div data-drop-row=""
          class="mx-1 mt-2 px-3 py-3 rounded-lg border-2 border-dashed text-xs text-center ${this.dropAt?.name===null?"border-accent text-accent":"border-line text-muted"}">
          Drop here to pin</div>`:c}
      ${this.isDraft?r`
        <div class="px-3 py-2 mt-1 rounded-lg bg-accent-soft" @contextmenu=${i=>this.openDraftMenu(i)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.liveTitle||"New note"}</div>
          <div class="mt-0.5 text-xs text-muted">Now</div>
        </div>`:c}
      ${e.map(i=>r`<section class="notes-list-group">${this.groupLabel(i.label,i.label==="Pinned")}${i.label==="Pinned"&&this.pinnedCollapsed?c:i.items.map(s=>this.renderRow(s))}</section>`)}`}onRowArrow(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"||e.altKey||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=[...this.querySelectorAll("#notes-list .notes-list-row")],i=t[t.indexOf(e.currentTarget)+(e.key==="ArrowDown"?1:-1)];e.preventDefault(),i&&(i.focus(),i.scrollIntoView({block:"nearest"}),i.click())}renderRow(e){const t=e.name===this.activeName,i=(t?this.liveTitle:"")||e.title||"Untitled",s=this.dragName&&e.pinned&&this.dropAt?.name===e.name&&this.dragName!==e.name?`box-shadow: inset 0 ${this.dropAt.pos==="before"?"2px":"-2px"} 0 var(--accent);`:"";return r`
      <div class="group relative select-none rounded-lg ${this.dragName===e.name?"opacity-40":""}"
        style="-webkit-touch-callout:none;${s}"
        data-drop-row=${e.name}
        @contextmenu=${n=>this.openRowMenu(n,e.name)}
        @pointerdown=${n=>this.onRowPointerDown(n,e.name)}>
        <button type="button" class="notes-list-row w-full text-left rounded-lg ${t?"bg-accent-soft":"hover:bg-hover"}"
          aria-current=${t?"true":c}
          @keydown=${n=>{n.key==="ContextMenu"||n.shiftKey&&n.key==="F10"?this.openRowMenu(n,e.name):this.onRowArrow(n)}}
          @click=${n=>{this.suppressClick||(n.currentTarget.focus({preventScroll:!0}),this.open(e.name))}}>
          <div class="notes-list-title flex items-center gap-1.5 min-w-0"><span class="truncate">${i}</span>${e.blog?.url?r`<span class="shrink-0 ${e.blog.published?"text-nsc-green":"text-muted"}" title=${e.blog.published?"Published on blog":"Blog draft"}>${te("globe","w-3 h-3")}</span>`:c}</div>
          <div class="notes-list-preview flex gap-2 min-w-0">
            <span class="shrink-0">${this.dateLabel(e.modifiedAt)}</span>
            <span class="truncate">${e.preview||"No additional text"}</span>
          </div>
        </button>
        <button type="button" aria-label=${`Actions for ${i}`} title="Note actions"
          class="notes-row-menu absolute right-1 top-2 flex items-center justify-center w-7 h-7 rounded-md bg-surface text-muted hover:text-ink hover:bg-hover opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          @pointerdown=${n=>n.stopPropagation()}
          @click=${n=>this.openRowMenu(n,e.name)}>${te("ellipsis","w-4 h-4")}</button>
      </div>`}renderHits(){return this.hits===null?r`<div class="px-3 py-6 text-center text-xs text-muted">Searching…</div>`:this.hits.length?r`
      ${this.hits.filter(e=>this.matchesNoteFilter(e.name)).map(e=>r`
        <button type="button" class="w-full text-left px-3 py-2 rounded-lg ${e.name===this.activeName?"bg-accent-soft":"hover:bg-hover"}"
          @click=${()=>this.open(e.name)}>
          <div class="text-sm font-semibold text-ink leading-snug line-clamp-2 break-words">${this.mark(e.title||"Untitled")}</div>
          ${e.snippet?r`<div class="mt-0.5 text-xs text-muted line-clamp-2 break-words">${this.mark(e.snippet)}</div>`:c}
        </button>`)}`:r`<div class="px-3 py-6 text-center text-sm text-muted">No matches</div>`}renderTrash(){return r`
      <button type="button" class="flex items-center gap-0.5 mt-1 px-2 py-1 rounded-md text-xs text-muted hover:text-ink hover:bg-hover"
        @click=${()=>{this.trashOpen=!1}}>${te("chevron-left","w-3.5 h-3.5")} Notes</button>
      ${this.groupLabel("Recently deleted")}
      <div class="px-3 pb-2 text-xs text-muted">Deleted notes stay here for 30 days.</div>
      ${this.trashItems.length?c:r`<div class="px-3 py-6 text-center text-sm text-muted">Nothing here</div>`}
      ${this.trashItems.map(e=>r`
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-hover">
          <div class="flex-1 min-w-0">
            <div class="text-sm text-ink truncate">${e.title||"Untitled"}</div>
            <div class="text-xs text-muted">${this.dateLabel(e.deletedAt)}</div>
          </div>
          <button type="button" class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
            @click=${()=>void this.restore(e.name)}>Restore</button>
        </div>`)}`}renderNoteHeader(){return r`
      <div data-notes-header class="grid grid-cols-[minmax(0,1fr)_auto_minmax(max-content,1fr)] items-center px-2 sm:px-3 py-2 shrink-0 min-w-0">
        <div class="flex items-center justify-start min-w-0">${this.wide?Sn("layout-sidebar",this.sidebarHidden?"Show notes list":"Hide notes list",()=>this.toggleSidebar()):r`<button type="button" aria-label="Back to notes" class="flex items-center justify-center w-8 h-8 rounded-lg text-accent hover:bg-hover shrink-0"
              @click=${()=>this.back()}>${te("chevron-left")}</button>`}
          ${this.activeBlog?.url?r`<a class="notes-blog-status ${this.activeBlog.published?"text-nsc-green":"text-muted"}" href=${this.activeBlog.published?this.activeBlog.url:c} target="_blank" rel="noopener noreferrer"
            aria-label=${this.activeBlog.published?"Published. Open blog article":"Blog draft"}
            title=${this.activeBlog.conflict?"Changed on both sides. Open blog article":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes. Open blog article":this.activeBlog.published?"Published. Open blog article":"Unpublished. Open blog article"}>
            ${te("globe","w-4 h-4")}<span class="notes-blog-status-label">${this.activeBlog.missing?"Removed":this.activeBlog.conflict?"Blog changed":this.blogLocalDirty||this.activeBlog.dirty?"Unpublished changes":this.activeBlog.published?"Published":"Blog draft"}</span></a>`:c}
        </div>
        ${this.renderToolbar()}
        <div data-tb-root class="flex items-center justify-end gap-1 min-w-0">
          ${!this.wide||this.sidebarHidden?Sn("square-pen",Lr,()=>this.newNote(),"text-accent"):c}
          ${this.editor&&(this.activeName||this.isDraft)?this.renderToolbarTrigger("more","Note actions",te("ellipsis")):c}
          ${this.wide?this.renderSearch():c}
        </div>
      </div>`}renderToolbarTrigger(e,t,i){return r`
      <button type="button" title=${t} aria-label=${t} aria-haspopup="dialog"
        aria-expanded=${this.tbMenu===e} aria-controls=${this.tbMenu===e?"notes-toolbar-menu":c}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${this.tbMenu===e?"bg-hover":""}"
        @pointerdown=${s=>s.preventDefault()}
        @click=${s=>{if(this.tbMenu===e){this.closeToolbar();return}this.tbTrigger=s.currentTarget,this.rowMenuPoint=null,this.tbMenu=e,s.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${i}</button>`}renderToolbar(){if(this.editorTick,!this.editor||!this.activeName&&!this.isDraft)return r`<div></div>`;const e=this.editor,t=(i,s,n,o=!1)=>r`
      <button type="button" title=${i} aria-label=${i} aria-pressed=${o}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-ink hover:bg-hover ${o?"bg-accent-soft text-accent":""}"
        @pointerdown=${a=>a.preventDefault()}
        @click=${()=>{this.closeToolbar(),n()}}>${te(s)}</button>`;return r`<div data-tb-root role="toolbar" aria-label="Note tools" class="flex items-center justify-center gap-1">
      <div class="flex items-center gap-0.5 rounded-full bg-hover px-1">
        ${this.renderToolbarTrigger("format","Text formatting",r`<span class="text-lg leading-none">Aa</span>`)}
        <div class="flex items-center">
          ${t("Checklist","list-todo",()=>{e.chain().focus().toggleTaskList().run()},e.isActive("taskList"))}
          <button type="button" title="List styles" aria-label="List styles" aria-haspopup="dialog"
            aria-expanded=${this.tbMenu==="list"} aria-controls=${this.tbMenu==="list"?"notes-toolbar-menu":c}
            class="flex items-center justify-center w-4 h-8 shrink-0 rounded-md text-ink hover:bg-hover"
            @pointerdown=${i=>i.preventDefault()}
            @click=${i=>{if(this.tbMenu==="list"){this.closeToolbar();return}this.tbTrigger=i.currentTarget,this.tbMenu="list",i.detail===0&&this.updateComplete.then(()=>this.toolbarPortal?.querySelector("button:not(:disabled)")?.focus())}}>${te("chevron-down","w-3 h-3")}</button>
        </div>
        ${t("Insert table","table",()=>{e.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run()})}
        ${t("Images","image",()=>void this.openMedia())}
      </div>
    </div>`}renderToolbarMenu(){const e=this.editor,t=l=>{this.closeToolbar(),l()},i=(l,h,u,p,m=!1)=>r`
      <button type="button" title=${l} aria-label=${l} aria-pressed=${u} ?disabled=${m}
        class="flex items-center justify-center w-8 h-8 shrink-0 rounded-md text-sm ${u?"bg-accent-soft text-accent":"text-ink hover:bg-hover"} ${m?"opacity-30":""}"
        @pointerdown=${g=>g.preventDefault()} @click=${()=>t(p)}>${h}</button>`,s=(l,h,u,p=!1)=>r`
      <button type="button" role=${this.tbMenu==="row"?"menuitem":c} ?disabled=${p} class="flex items-center gap-3 w-full px-2 py-2 text-sm rounded-lg text-left hover:bg-hover ${p?"opacity-30":""}"
        @pointerdown=${m=>m.preventDefault()} @click=${()=>t(u)}>${te(h)}<span>${l}</span></button>`,n=(l,h)=>r`<div class="mb-2 last:mb-0"><div class="px-1 mb-1 text-xs font-medium text-muted">${l}</div><div class="flex flex-wrap gap-1">${h}</div></div>`,o=l=>{l!=="justify"&&ap(e,l)||e.chain().focus().setTextAlign(l).run()};let a=c;if(this.tbMenu==="format"){const l=e.isActive("heading",{level:1})?1:e.isActive("heading",{level:2})?2:e.isActive("heading",{level:3})?3:0,h=e.isActive("image"),u=h?String(e.getAttributes("image").align||"left"):e.isActive({textAlign:"center"})?"center":e.isActive({textAlign:"right"})?"right":e.isActive({textAlign:"justify"})?"justify":"left",p=e.getAttributes("textStyle").color||null,m=e.getAttributes("highlight").color||null;a=r`
        ${n("Style",[0,1,2,3].map(g=>{const v=["Body","Title","Heading","Subheading"][g];return r`<button type="button" aria-label=${v} aria-pressed=${l===g}
            class="w-full text-left px-2 py-1 rounded-lg hover:bg-hover ${l===g?"bg-accent-soft text-accent":"text-ink"}"
            style=${`font-size:${[13,22,17,15][g]}px;font-weight:${g?600:400};`}
            @pointerdown=${y=>y.preventDefault()}
            @click=${()=>t(()=>{(g?e.chain().focus().setHeading({level:g}):e.chain().focus().setParagraph()).run()})}>${v}</button>`}))}
        ${n("Text",r`
          ${i("Bold (⌘B)",r`<b>B</b>`,e.isActive("bold"),()=>{e.chain().focus().toggleBold().run()})}
          ${i("Italic (⌘I)",r`<i>I</i>`,e.isActive("italic"),()=>{e.chain().focus().toggleItalic().run()})}
          ${i("Underline (⌘U)",r`<u>U</u>`,e.isActive("underline"),()=>{e.chain().focus().toggleUnderline().run()})}
          ${i("Strikethrough",r`<s>S</s>`,e.isActive("strike"),()=>{e.chain().focus().toggleStrike().run()})}`)}
        ${n("Blocks",r`
          ${i("Quote",te("quote"),e.isActive("blockquote"),()=>{e.chain().focus().toggleBlockquote().run()})}
          ${i("Code block",te("code"),e.isActive("codeBlock"),()=>{e.chain().focus().toggleCodeBlock().run()})}`)}
        ${n("Alignment",["left","center","right","justify"].map(g=>i(`Align ${g}`,te(`align-${g}`),u===g,()=>o(g),h&&g==="justify")))}
        ${n("Text color",dp.map(g=>i(g.name,r`<span class="flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold ${g.v?"text-white":"text-ink"}" style=${g.v?`background:${g.v}`:""}>A</span>`,p===g.v,()=>{(g.v?e.chain().focus().setColor(g.v):e.chain().focus().unsetColor()).run()})))}
        ${n("Highlight",[null,...hp].map(g=>i(g?`${g.name} highlight`:"No highlight",r`<span class="w-5 h-5 rounded-md ${g?"":"border border-line"}" style=${g?`background:${g.v}`:""}></span>`,m===(g?.v??null),()=>{(g?e.chain().focus().setHighlight({color:g.v}):e.chain().focus().unsetHighlight()).run()})))}`}else if(this.tbMenu==="list")a=r`
        ${s("Bullet list","list",()=>{e.chain().focus().toggleBulletList().run()})}
        ${s("Numbered list","list-ordered",()=>{e.chain().focus().toggleOrderedList().run()})}
        ${s("Checklist","list-todo",()=>{e.chain().focus().toggleTaskList().run()})}`;else if(this.tbMenu==="more"){const l=this.files.some(h=>h.name===this.activeName&&h.pinned);a=r`
        ${s("Undo","undo-2",()=>{e.chain().focus().undo().run()},!e.can().undo())}
        ${s("Redo","redo-2",()=>{e.chain().focus().redo().run()},!e.can().redo())}
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
          @blur=${h=>void this.renameTag(l.name,h.target.value)} @keydown=${h=>{h.key==="Enter"&&h.target.blur(),h.key==="Escape"&&(h.target.value=l.name)}} /><span class="text-xs text-muted">${l.count}</span></div>`):r`<p class="text-sm text-muted">Add tags from an article’s actions menu.</p>`}`),this.tbMenu==="shortcuts"){const l=[["New note",`${De}N`],["Search notes",`${De}Shift+F`],["Show / hide list",`${De}\\`],["Save now",`${De}S`],["Bold / italic / underline",`${De}B / I / U`],["Undo",`${De}Z`],["Redo",`${De}Shift+Z`],["Checklist",`${De}Shift+9`],["Bullet list",`${De}Shift+8`],["Numbered list",`${De}Shift+7`],["Heading 1, 2, 3",`${De}Alt+1 / 2 / 3`]];a=r`<div class="px-1"><div class="text-sm font-semibold mb-2">Keyboard shortcuts</div>
        <dl class="space-y-2">${l.map(([h,u])=>r`<div class="flex items-center justify-between gap-3 text-xs"><dt>${h}</dt><dd class="shrink-0 font-mono text-muted">${u}</dd></div>`)}</dl>
      </div>`}return r`<div @keydown=${this.onToolbarMenuKey}>${a}</div>`}renderEmpty(){return r`
      <div class="h-full flex flex-col items-center justify-center gap-3">
        <div class="text-sm text-muted">${this.files.length?"Pick a note, or start a new one.":"No notes yet."}</div>
        <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          @click=${()=>this.newNote()}>${te("square-pen")} New note</button>
      </div>`}render(){const e=this.activeName!==null||this.isDraft,t=this.wide?!this.sidebarHidden:this.view==="list",i=this.wide||this.view==="note";return r`
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
        </div>`:c}
        <section class="notes-editor-pane ${i?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
          ${this.renderNoteHeader()}
          ${this.error?r`<div class="px-4 pt-1 text-xs font-mono" style="color:#c87a3a;">notes error: ${this.error}</div>`:c}
          <div class="notes-content-scroll flex-1 min-h-0 overflow-y-auto">
            <div id="note-host" class="h-full ${e?"":"hidden"}"></div>
            ${!e&&this.initialized?this.renderEmpty():c}
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
    `}};O([d()],M.prototype,"files",2);O([d()],M.prototype,"trashCount",2);O([d()],M.prototype,"activeName",2);O([d()],M.prototype,"isDraft",2);O([d()],M.prototype,"error",2);O([d()],M.prototype,"initialized",2);O([d()],M.prototype,"wide",2);O([d()],M.prototype,"view",2);O([d()],M.prototype,"sidebarHidden",2);O([d()],M.prototype,"sidebarWidth",2);O([d()],M.prototype,"searchQ",2);O([d()],M.prototype,"hits",2);O([d()],M.prototype,"trashOpen",2);O([d()],M.prototype,"trashItems",2);O([d()],M.prototype,"toast",2);O([d()],M.prototype,"tbMenu",2);O([d()],M.prototype,"blogEnabled",2);O([d()],M.prototype,"blogConnected",2);O([d()],M.prototype,"blogBusy",2);O([d()],M.prototype,"tagSaving",2);O([d()],M.prototype,"syncingBlog",2);O([d()],M.prototype,"activeBlog",2);O([d()],M.prototype,"blogLocalDirty",2);O([d()],M.prototype,"noteFilter",2);O([d()],M.prototype,"allBlogTags",2);O([d()],M.prototype,"blogDeleteName",2);O([d()],M.prototype,"publishConfirm",2);O([d()],M.prototype,"pinnedCollapsed",2);O([d()],M.prototype,"editorTick",2);O([d()],M.prototype,"liveTitle",2);O([d()],M.prototype,"dragName",2);O([d()],M.prototype,"dropAt",2);O([d()],M.prototype,"mediaOpen",2);O([d()],M.prototype,"uploading",2);O([d()],M.prototype,"uploadPct",2);M=O([w("companion-notes")],M);var pp=Object.getOwnPropertyDescriptor,mp=(e,t,i,s)=>{for(var n=s>1?void 0:s?pp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let Rr=class extends T{render(){return r`<companion-notes class="flex flex-col flex-1 min-h-0"></companion-notes>`}};Rr=mp([w("companion-workspace")],Rr);const Rl="mana.owl.hidden",ao="mana-owl-visibility";function Nl(){try{const t=localStorage.getItem(Rl);return t===null?!0:t==="1"}catch{return!0}}function Ts(e){try{localStorage.setItem(Rl,e?"1":"0")}catch{}window.dispatchEvent(new CustomEvent(ao,{detail:{hidden:e}}))}var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,Zs=(e,t,i,s)=>{for(var n=s>1?void 0:s?gp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&fp(t,i,n),n};let Ui=class extends T{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.label=""}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return r`
      <button
        type="button"
        role="switch"
        aria-label=${this.label||c}
        aria-checked=${this.checked?"true":"false"}
        ?disabled=${this.disabled}
        @click=${this.toggle}
        class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${this.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"} ${this.checked?"bg-accent":"bg-line"}"
      >
        <span
          class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${this.checked?"translate-x-[22px]":"translate-x-[2px]"}"
        ></span>
      </button>
    `}};Zs([b({type:Boolean})],Ui.prototype,"checked",2);Zs([b({type:Boolean})],Ui.prototype,"disabled",2);Zs([b({type:String})],Ui.prototype,"label",2);Ui=Zs([w("sc-toggle")],Ui);var bp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,yi=(e,t,i,s)=>{for(var n=s>1?void 0:s?vp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&bp(t,i,n),n};function yp(e){const t=wo.map(i=>({id:i.id,label:i.note?`${i.label} (${i.note})`:i.label}));return t.some(i=>i.id===e)||t.push({id:e,label:e}),t}function xp(){return wo.filter(e=>e.provider==="anthropic").map(e=>({id:e.id,label:e.id===qn?`${e.label} (tested)`:e.label}))}const wp={normal:"Normal (tested)",low:"Low",medium:"Medium",high:"High"};function kp(e){return e.code.startsWith("Key")?e.code.slice(3):e.code.startsWith("Digit")?e.code.slice(5):/^F\d{1,2}$/.test(e.key)||e.key.length===1&&e.key!=="+"&&e.key.trim()?e.key:null}async function $p(e){const s=URL.createObjectURL(e);try{const n=await new Promise((m,g)=>{const v=new Image;v.onload=()=>m(v),v.onerror=()=>g(new Error("could not decode image")),v.src=s}),o=Math.min(1,256/Math.max(n.width,n.height)),a=Math.max(1,Math.round(n.width*o)),l=Math.max(1,Math.round(n.height*o)),h=document.createElement("canvas");h.width=a,h.height=l;const u=h.getContext("2d");if(!u)return await Sp(e);u.drawImage(n,0,0,a,l);const p=h.toDataURL("image/webp",.85);return p.startsWith("data:image/webp")?p:h.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(s)}}function Sp(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(String(s.result||"")),s.onerror=()=>i(s.error),s.readAsDataURL(e)})}let zt=class extends T{constructor(){super(...arguments),this.settingsCtl=new Ga(this,f,e=>e.settings),this.myLogin="",this.myRole="",this.myName="",this.recordingShortcut=null,this.shortcutPrompt="Press keys"}connectedCallback(){super.connectedCallback(),Object.keys(f.getState().settings).length===0&&f.getState().loadSettings(),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e?.login&&(this.myLogin=e.login,this.myRole=e.role,this.myName=e.displayName||"")}).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}displayNameKey(){return this.myLogin?`user:${this.myLogin}:display_name`:"cockpit.display_name"}get currentDisplayName(){return this.settings[this.displayNameKey()]||""}async setDisplayName(e){await f.getState().setSetting(this.displayNameKey(),e.trim())}get settings(){return this.settingsCtl.state.settings}get currentMentorModel(){return xs(this.settings["cockpit.mentor_model"])}async setMentorModel(e){await f.getState().setSetting("cockpit.mentor_model",e)}get currentCompanionModel(){return dc(this.settings["cockpit.companion_model"])}async setCompanionModel(e){await f.getState().setSetting("cockpit.companion_model",e)}get currentCompanionEffort(){return hc(this.settings["cockpit.companion_effort"])}async setCompanionEffort(e){await f.getState().setSetting("cockpit.companion_effort",e)}shortcutValue(e,t){const i=this.settings[e];return i&&xt(i)?i:t}onShortcutKey(e,t){if(e.key==="Tab")return;e.preventDefault(),e.stopPropagation();const i=e.currentTarget;if(e.key==="Escape")return i.blur();const s=kp(e);if(!s)return;if(!e.metaKey&&!e.ctrlKey&&!e.altKey){this.shortcutPrompt="Add ⌘, ⌃ or ⌥";return}const n=[e.ctrlKey&&"Ctrl",e.altKey&&"Alt",e.shiftKey&&"Shift",e.metaKey&&"Meta"].filter(Boolean);f.getState().setSetting(t,[...n,s].join("+")),i.blur()}renderShortcut(e,t,i){const s=this.shortcutValue(t,i),n=ks(s)===ks(i);return r`
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-sm text-muted hover:text-ink ${n?"invisible":""}"
          ?disabled=${n}
          @click=${()=>void f.getState().setSetting(t,i)}
        >Reset</button>
        <input
          type="text"
          readonly
          aria-label=${e}
          class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink caret-transparent cursor-pointer focus:outline-none focus:border-accent min-w-[200px]"
          .value=${this.recordingShortcut===t?"":ks(s)}
          placeholder=${this.shortcutPrompt}
          @focus=${()=>{this.recordingShortcut=t,this.shortcutPrompt="Press keys"}}
          @blur=${()=>{this.recordingShortcut=null}}
          @keydown=${o=>this.onShortcutKey(o,t)}
        />
      </div>
    `}get chatHidden(){return this.settings["cockpit.chat_hidden"]==="1"}async setChatHidden(e){await f.getState().setSetting("cockpit.chat_hidden",e?"1":"0")}resetDemo(){if(window.confirm("Reset the demo? This clears your changes and restores the sample cockpit.")){for(let e=localStorage.length-1;e>=0;e--){const t=localStorage.key(e);t&&t.startsWith("mana.demo.")&&localStorage.removeItem(t)}location.reload()}}get currentProfilePic(){const e=this.settings[this.profilePicKey()],t=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return e||t||""}async onProfilePicFile(e){const t=e.target,i=t.files?.[0];if(!i||!i.type.startsWith("image/"))return;const s=await $p(i),{url:n}=await E.uploads.upload(s,!1);await f.getState().setSetting(this.profilePicKey(),n),t.value=""}async clearProfilePic(){await f.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await f.getState().setSetting("cockpit.profile_pic_url","")}renderRow(e,t,i){return r`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${e}</div>
          <div class="text-sm text-muted mt-0.5">${t}</div>
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
                  >Clear</button>`:c}
            </div>
          `)}
        ${this.renderRow("Chat model","The AI model your Workshop chats run on.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentMentorModel}
              @change=${e=>this.setMentorModel(e.target.value)}
            >
              ${yp(this.currentMentorModel).map(e=>r`<option value=${e.id} ?selected=${e.id===this.currentMentorModel}>${e.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana model",`The model Mana itself runs on. Claude only. ${zn(qn)?.label??qn} is the only one that has passed its behaviour test.`,r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionModel}
              @change=${e=>this.setCompanionModel(e.target.value)}
            >
              ${xp().map(e=>r`<option value=${e.id} ?selected=${e.id===this.currentCompanionModel}>${e.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Mana effort","How long Mana thinks before it answers. Normal is the only level that has passed its behaviour test. Low answers about a second sooner.",r`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentCompanionEffort}
              @change=${e=>this.setCompanionEffort(e.target.value)}
            >
              ${uc.map(e=>r`<option value=${e} ?selected=${e===this.currentCompanionEffort}>${wp[e]}</option>`)}
            </select>
          `)}
        ${this.renderRow("Dictation shortcut","Talk to Mana instead of typing: press it once to start, again to stop.",this.renderShortcut("Dictation shortcut",_s,Is))}
        ${this.renderRow("Open Mana","Opens Mana from anywhere, ready to type. Press it again to close.",this.renderShortcut("Open Mana shortcut",vl,bl))}
        ${this.renderRow("Show the owl","On this device only. Hidden, the Open Mana or dictation shortcut brings it back.",r`
            <sc-toggle
              .checked=${!Nl()}
              @sc-change=${e=>{Ts(!e.detail.checked),this.requestUpdate()}}
            ></sc-toggle>
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
    `}};yi([d()],zt.prototype,"myLogin",2);yi([d()],zt.prototype,"myRole",2);yi([d()],zt.prototype,"myName",2);yi([d()],zt.prototype,"recordingShortcut",2);yi([d()],zt.prototype,"shortcutPrompt",2);zt=yi([w("settings-general")],zt);var Tp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,Fl=(e,t,i,s)=>{for(var n=s>1?void 0:s?Cp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Tp(t,i,n),n};let lo=class extends T{constructor(){super(...arguments),this.groups=[]}connectedCallback(){super.connectedCallback(),E.notifications.kinds().then(e=>{this.groups=e.kinds}).catch(()=>{})}async toggle(e,t){this.groups=this.groups.map(i=>i.kind===e?{...i,enabled:t}:i),await E.notifications.mute(e,t).catch(()=>{})}render(){return r`
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
    `}};Fl([d()],lo.prototype,"groups",2);lo=Fl([w("settings-notifications")],lo);var Ep=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,it=(e,t,i,s)=>{for(var n=s>1?void 0:s?Dp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Ep(t,i,n),n};const Ap="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",Pp="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",Mp=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let ze=class extends T{constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/memory/status").then(i=>i.ok?i.json():null),fetch("/api/memory/files").then(i=>i.ok?i.json():null)]);e&&(this.status=e),t&&(this.files=t.files)}catch{}}async toggle(e){const t=e.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:t})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let e=0;e<12;e++)await new Promise(t=>setTimeout(t,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(e){try{const t=await fetch(`/api/memory/files/${encodeURIComponent(e.relPath)}`);if(t.ok){const i=await t.json();this.editing=!1,this.viewing={title:this.prettyName(e),relPath:e.relPath,content:i.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(e){if(!e)return"never";const t=Number(e);return Number.isFinite(t)?new Date(t*1e3).toLocaleString():"never"}statusLine(e){if(!e)return null;if(e.startsWith("error"))return`Last run hit a problem: ${e.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(e))return"Last run found nothing new to add.";const t=/(\d+)B/.exec(e);return t&&t[1]?`Last run added ${(Number(t[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const e=this.status;if(!e)return r`<p class="text-muted text-xs">Loading…</p>`;const t=this.viewing!=null;return r`
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
              ${this.statusLine(e.lastStatus)?r`<div>${this.statusLine(e.lastStatus)}</div>`:c}
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
          <p class="text-muted leading-relaxed">${Ap}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${Pp}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?r`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:r`
      <div class="space-y-4">
        ${Mp.map(e=>{const t=this.files.filter(i=>i.group===e.key).sort((i,s)=>s.modifiedAt-i.modifiedAt);return t.length===0?c:r`
            <div>
              <div class="text-ink font-medium">${e.label}</div>
              <div class="text-xs text-muted mb-1.5">${e.blurb}</div>
              <ul class="divide-y divide-line border border-line rounded">
                ${t.map(i=>r`
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
    `}prettyName(e){const t=/^observations-(\d{4})-(\d{2})\.md$/.exec(e.name);if(t&&t[1]&&t[2])return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(t[2])-1]??t[2]} ${t[1]}`;const i=e.name.replace(/\.md$/,"").replace(/[-_]/g," ");return i.charAt(0).toUpperCase()+i.slice(1)}renderPreview(){if(!this.viewing)return r`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Select a note to read it.
        </div>
      `;const e=this.editing;return r`
      <header class="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-line shrink-0">
        <span class="text-sm font-semibold text-ink truncate">${this.viewing.title}</span>
        <div class="flex items-center gap-2 shrink-0">
          ${e?c:r`<button
                type="button"
                class="text-xs text-muted hover:text-ink"
                @click=${this.startEdit}
              >Edit</button>`}
          ${e?c:r`<button
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
              ${W(z.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};it([d()],ze.prototype,"status",2);it([d()],ze.prototype,"files",2);it([d()],ze.prototype,"running",2);it([d()],ze.prototype,"viewing",2);it([d()],ze.prototype,"editing",2);it([d()],ze.prototype,"draft",2);it([d()],ze.prototype,"saving",2);it([d()],ze.prototype,"aboutOpen",2);it([d()],ze.prototype,"aboutNotesOpen",2);ze=it([w("settings-memory")],ze);var Ip=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,en=(e,t,i,s)=>{for(var n=s>1?void 0:s?_p(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Ip(t,i,n),n};const Ci=[{id:"general",label:"General"},{id:"notifications",label:"Notifications"},{id:"memory",label:"Memory"}];let Bi=class extends T{constructor(){super(...arguments),this.section="general",this.active="general",this.mobileView="list",this.handleKeydown=e=>{if(e.key==="Escape"){this.requestClose();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable))return;const i=Ci.findIndex(o=>o.id===this.active);if(i<0)return;const s=e.key==="ArrowDown"?Math.min(i+1,Ci.length-1):Math.max(i-1,0),n=Ci[s];s!==i&&n&&(e.preventDefault(),this.active=n.id,this.mobileView="section")}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?r`<settings-general></settings-general>`:this.active==="notifications"?r`<settings-notifications></settings-notifications>`:this.active==="memory"?r`<settings-memory></settings-memory>`:c}render(){const e=Ci.find(i=>i.id===this.active)?.label??"",t=this.mobileView==="list";return r`
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
            ${t?"block":"hidden"}
            lg:block lg:border-r lg:overflow-y-auto
          ">
            ${Ci.map(i=>r`
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
            ${t?"hidden":"block"}
            lg:block
          ">
            ${this.renderActive()}
          </section>
        </div>
      </div>
    `}};en([b()],Bi.prototype,"section",2);en([d()],Bi.prototype,"active",2);en([d()],Bi.prototype,"mobileView",2);Bi=en([w("settings-page")],Bi);var Op=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,tn=(e,t,i,s)=>{for(var n=s>1?void 0:s?Lp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Op(t,i,n),n};const Rp=.018,Np=.01,Fp=600,jp=250,Up=300,Nr=16e3;let Hi=class extends T{constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.audioCtx=null,this.mic=null,this.source=null,this.processor=null,this.threadId=null,this.starting=!1,this.ttsSource=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.srcRate=48e3,this.muted=!1,this.processing=!1,this.onToggle=()=>{this.audioCtx?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.audioCtx&&this.stopTalk()},this.speakQueue=[],this.pumpPromise=null}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.audioCtx&&this.stopTalk()}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const e=this.audioCtx!==null;try{window.speechSynthesis.cancel()}catch{}this.speakQueue=[];try{this.ttsSource?.stop(),this.ttsSource=null}catch{}try{this.processor?.disconnect()}catch{}try{this.source?.disconnect()}catch{}try{await this.audioCtx?.close()}catch{}if(this.mic)for(const t of this.mic.getTracks())t.stop();this.processor=null,this.source=null,this.audioCtx=null,this.mic=null,this.inSpeech=!1,this.speechMs=0,this.silenceMs=0,this.utterance=[],this.preroll=[],this.prerollMs=0,this.muted=!1,this.processing=!1,this.speaking=null,this.status!=="error"&&(this.status="idle"),e&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}onAudio(e){if(this.muted||this.processing)return;const t=e.inputBuffer.getChannelData(0),i=new Float32Array(t),s=i.length/this.srcRate*1e3;let n=0;for(let a=0;a<i.length;a++)n+=i[a]*i[a];const o=Math.sqrt(n/i.length);if(!this.inSpeech){for(this.preroll.push(i),this.prerollMs+=s;this.prerollMs>Up&&this.preroll.length>1;){const a=this.preroll.shift();this.prerollMs-=a.length/this.srcRate*1e3}o>=Rp&&(this.inSpeech=!0,this.speechMs=0,this.silenceMs=0,this.utterance=[...this.preroll],this.preroll=[],this.prerollMs=0,this.speaking="user");return}if(this.utterance.push(i),this.speechMs+=s,o<Np?this.silenceMs+=s:this.silenceMs=0,this.silenceMs>=Fp){const a=this.utterance,l=this.speechMs-this.silenceMs;this.inSpeech=!1,this.utterance=[],this.speechMs=0,this.silenceMs=0,l>=jp&&this.finishUtterance(a)}}async finishUtterance(e){this.processing=!0,this.muted=!0,this.speaking="thinking",this.ackBlip();try{const t=qp(zp(Hp(e),this.srcRate,Nr),Nr),{text:i}=await E.voice.stt(t),s=(i||"").trim();if(!s||/^[\s.,!?-]*$/.test(s))return;this.dispatchTranscript({role:"user",text:s});let n="",o="";for await(const l of fl({threadId:this.threadId,message:s,kind:"voice",voice:!0}))if(l.type==="thread")l.threadId!==this.threadId&&(this.threadId=l.threadId);else if(l.type==="text")n+=l.text,o=this.enqueueCompleteSentences(o+l.text);else if(l.type==="ops")this.refreshOps([l.action]);else if(l.type==="error")throw new Error(l.error);for(const l of Bp(o))this.enqueueSpeech(l);const a=n.trim();a&&this.dispatchTranscript({role:"mentor",text:a}),await this.drainSpeech()}catch(t){const i=t instanceof Error?t.message:String(t);this.errorMessage=`voice: ${i}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage})}finally{this.processing=!1,this.muted=!1,this.status==="active"&&(this.speaking="user")}}enqueueCompleteSentences(e){const t=e.match(/[^.!?…]+[.!?…]+["')\]]*\s*/g);if(!t)return e;const i=t.join("");let s="";for(const n of t)s+=n,s.trim().length>=20&&(this.enqueueSpeech(s.trim()),s="");return s+e.slice(i.length)}enqueueSpeech(e){e&&(this.speakQueue.push(e),this.pumpPromise||(this.pumpPromise=this.pumpSpeech().finally(()=>{this.pumpPromise=null;const t=this.speakQueue.shift();t&&this.audioCtx&&this.enqueueSpeech(t)})))}async pumpSpeech(){let e=null;for(;this.audioCtx;){if(!e){const n=this.speakQueue.shift();if(n===void 0)break;e={text:n,blob:this.fetchTts(n)}}const t=e,i=await t.blob,s=this.speakQueue.shift();if(e=s!==void 0?{text:s,blob:this.fetchTts(s)}:null,!this.audioCtx)return;i?await this.playWav(i):await this.speakFallback(t.text)}}async drainSpeech(){for(;this.pumpPromise;)await this.pumpPromise}ackBlip(){const e=this.audioCtx;if(e)try{const t=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(660,t),i.frequency.setValueAtTime(880,t+.09),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.08,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.18),i.connect(s),s.connect(e.destination),i.start(t),i.stop(t+.2)}catch{}}async fetchTts(e){try{return await E.voice.tts(e)}catch{return null}}async playWav(e){const t=this.audioCtx;if(!t)return;const i=await t.decodeAudioData(await e.arrayBuffer());await new Promise(s=>{const n=t.createBufferSource();n.buffer=i,n.connect(t.destination),this.ttsSource=n;let o=!1,a;const l=()=>{o||(o=!0,a&&clearTimeout(a),this.ttsSource===n&&(this.ttsSource=null),s())};n.onended=l,a=setTimeout(l,i.duration*1e3+1500),this.speaking="mentor",n.start()})}speakFallback(e){return new Promise(t=>{let i=!1;const s=()=>{i||(i=!0,t())};try{const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.onstart=()=>{this.speaking="mentor"},n.onend=s,n.onerror=s,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n),setTimeout(s,Math.min(6e4,1500+e.length*80))}catch{s()}})}refreshOps(e){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:e}));const t=e.find(i=>i.week)?.week;document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:t},bubbles:!0,composed:!0}))}dispatchTranscript(e){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:e,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return c;const e=this.status==="connecting"?"starting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="thinking"?"thinking…":this.speaking==="mentor"?"speaking…":"listening…",t=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent animate-pulse";return r`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${t}"></span>
        <span>${e}</span>
      </div>
    `}};tn([d()],Hi.prototype,"status",2);tn([d()],Hi.prototype,"errorMessage",2);tn([d()],Hi.prototype,"speaking",2);Hi=tn([w("voice-controller")],Hi);function Bp(e){const t=e.replace(/\s+/g," ").trim();if(!t)return[];const i=t.match(/[^.!?…]+[.!?…]+["')\]]*\s*|[^.!?…]+$/g)??[t],s=[];let n="";for(const o of i)n+=o,n.trim().length>=20&&(s.push(n.trim()),n="");return n.trim()&&s.push(n.trim()),s}function Hp(e){let t=0;for(const n of e)t+=n.length;const i=new Float32Array(t);let s=0;for(const n of e)i.set(n,s),s+=n.length;return i}function zp(e,t,i){if(i>=t)return e;const s=t/i,n=Math.floor(e.length/s),o=new Float32Array(n);for(let a=0;a<n;a++){const l=a*s,h=Math.floor(l),u=Math.min(h+1,e.length-1),p=l-h;o[a]=e[h]*(1-p)+e[u]*p}return o}function qp(e,t){const i=new ArrayBuffer(44+e.length*2),s=new DataView(i),n=(a,l)=>{for(let h=0;h<l.length;h++)s.setUint8(a+h,l.charCodeAt(h))};n(0,"RIFF"),s.setUint32(4,36+e.length*2,!0),n(8,"WAVE"),n(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,t,!0),s.setUint32(28,t*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),n(36,"data"),s.setUint32(40,e.length*2,!0);let o=44;for(let a=0;a<e.length;a++,o+=2){const l=Math.max(-1,Math.min(1,e[a]));s.setInt16(o,l<0?l*32768:l*32767,!0)}return new Blob([i],{type:"audio/wav"})}class jo{constructor(t,i){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=s=>{this.armedId=s,this.host.requestUpdate()},this.disarm=()=>{this.armedId=null,this.host.requestUpdate()},this.isDragging=s=>this.armedId===s||this.draggingId===s,this.onPointerDown=(s,n,o=s.currentTarget)=>{if(!this.hitTest||s.button!==0)return;s.preventDefault(),this.stopPointer?.(),o.focus(),o.setPointerCapture(s.pointerId);const a=s.clientX,l=s.clientY;let h=null;const u=v=>{if(v.pointerId!==s.pointerId||this.draggingId===null&&Math.hypot(v.clientX-a,v.clientY-l)<6)return;this.draggingId=n;const y=this.hitTest(v.clientX,v.clientY),A=y&&(this.axis==="x"?v.clientX<y.rect.left+y.rect.width/2:v.clientY<y.rect.top+y.rect.height/2)?"before":"after";h=y?{index:y.index,pos:A}:null,(this.overId!==(y?.id??null)||this.overPos!==A)&&(this.overId=y?.id??null,this.overPos=A,this.host.requestUpdate())},p=()=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),o.hasPointerCapture(s.pointerId)&&o.releasePointerCapture(s.pointerId),this.stopPointer=void 0,this.onDragEnd()},m=v=>{if(v.pointerId!==s.pointerId)return;const y=h,A=this.draggingId!==null;p(),A&&y&&this.onReorder(n,y.index+(y.pos==="after"?1:0))},g=()=>p();this.stopPointer=p,window.addEventListener("pointermove",u),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",g)},this.onDragStart=(s,n)=>{if(this.armedId!==n){s.preventDefault();return}this.draggingId=n,s.dataTransfer&&(s.dataTransfer.setData(this.type,String(n)),s.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(s,n,o)=>{if(!s.dataTransfer?.types.includes(this.type))return;s.preventDefault(),s.dataTransfer.dropEffect="move";const a=s.currentTarget.getBoundingClientRect(),l=(this.axis==="x"?s.clientX<a.left+a.width/2:s.clientY<a.top+a.height/2)?"before":"after";(this.overId!==n||this.overPos!==l)&&(this.overId=n,this.overPos=l,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(s,n,o)=>{const a=s.dataTransfer?.getData(this.type),l=a?Number(a):NaN,h=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(l))return;s.preventDefault();const u=h==="after"?o+1:o;this.onReorder(l,u)},this.dropClass=s=>this.axis==="x"?this.overId!==s?"border-l-2 border-r-2 border-transparent":this.overPos==="before"?"border-l-2 border-l-accent border-r-2 border-r-transparent":"border-r-2 border-r-accent border-l-2 border-l-transparent":this.overId!==s?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=t,this.type=i.type,this.axis=i.axis??"y",this.onReorder=i.onReorder,this.hitTest=i.hitTest,t.addController(this)}hostDisconnected(){this.stopPointer?.(),this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var Kp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,me=(e,t,i,s)=>{for(var n=s>1?void 0:s?Wp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Kp(t,i,n),n};const Gp=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let J=class extends T{constructor(){super(...arguments),this.items=[],this.loading=!0,this.adding=!1,this.error="",this.boughtExpanded=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.sortMode=localStorage.getItem("cockpit.grocery_sort")==="type"?"type":localStorage.getItem("cockpit.grocery_sort")==="manual"?"manual":"az",this.pantrySort=this.loadPantrySort(),this.settingsOpen=!1,this.expiryEnabled=localStorage.getItem("cockpit.grocery_expiry")==="1",this.list=localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery",this.poll=null,this.drag=new jo(this,{type:"text/x-grocery-id",onReorder:(e,t)=>this.reorder(e,t)}),this._closeMenus=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null),this.settingsOpen&&(this.settingsOpen=!1)},this.onShoppingChanged=e=>{const t=e.detail;if(!t||t.list!=="grocery"&&t.list!=="buy"||this.adding&&this.list!==t.list)return;t.ack?.();const i=this.list!==t.list;if(i&&this.setList(t.list),t.sort==="az"||t.sort==="type"||t.sort==="manual"){this.sortMode=t.sort;try{localStorage.setItem("cockpit.grocery_sort",t.sort)}catch{}}if(typeof t.expiry=="boolean"){this.expiryEnabled=t.expiry;try{localStorage.setItem("cockpit.grocery_expiry",t.expiry?"1":"0")}catch{}}typeof t.bought=="boolean"&&(this.boughtExpanded=t.bought),!i&&this.editingId===null&&this.editingExpiryId===null&&!this.adding&&this.refresh()}}setList(e){if(!(this.list===e||this.adding)){this.list=e,this.draftActive=!1,this.draftValue="",this.error="",this.boughtExpanded=!1,this.items=[],this.loading=!0;try{localStorage.setItem("cockpit.shopping_tab",e)}catch{}this.refresh()}}toggleSort(){this.sortMode=this.sortMode==="az"?"type":"az";try{localStorage.setItem("cockpit.grocery_sort",this.sortMode)}catch{}}loadPantrySort(){const e=localStorage.getItem("cockpit.pantry_sort");return e==="az"||e==="type"||e==="manual"?e:null}setPantrySort(e){this.pantrySort=e;try{localStorage.setItem("cockpit.pantry_sort",e)}catch{}}toggleExpiry(){this.expiryEnabled=!this.expiryEnabled;try{localStorage.setItem("cockpit.grocery_expiry",this.expiryEnabled?"1":"0")}catch{}}inferCategory(e){const t=e.toLowerCase(),i=(...s)=>s.some(n=>t.includes(n));return i("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":i("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":i("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":i("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":i("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":i("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}gearIcon(){return r`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
          aria-label="Expiry dates"
          aria-checked=${this.expiryEnabled}
          class="relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${this.expiryEnabled?"bg-accent":"bg-line"}"
          @click=${this.toggleExpiry}
        >
          <span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${this.expiryEnabled?"translate-x-3.5":"translate-x-0.5"}"></span>
        </button>
      </div>
      <p class="px-1.5 pt-0.5 text-[10px] text-muted/70 leading-snug">Show freshness pills on pantry items.</p>
    </div>`}connectedCallback(){super.connectedCallback(),this.refresh(),document.addEventListener("click",this._closeMenus),window.addEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll=setInterval(()=>{this.editingId===null&&this.editingExpiryId===null&&this.emojiPickerFor===null&&!this.draftActive&&!this.drag.active&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._closeMenus),window.removeEventListener("mana:shopping-changed",this.onShoppingChanged),this.poll&&clearInterval(this.poll)}async refresh(){const e=this.list;try{const t=await fetch(`/api/grocery?list=${e}`);if(!t.ok)throw new Error;const i=await t.json();if(this.list!==e)return;this.items=i.items}catch{this.list===e&&this.loading&&(this.error="Couldn't load your items. Please reopen this tab to try again.")}this.list===e&&(this.loading=!1)}itemText(e){return[e.quantity?.trim(),e.name].filter(Boolean).join(" ")}openDraft(){this.draftActive=!0,this.error="",this.updateComplete.then(()=>this.focusDraft())}cancelDraft(){this.adding||(this.draftActive=!1,this.draftValue="",this.error="")}async setStatus(e,t){await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:t})}),await this.refresh()}async rename(e,t){if(this.editingId!==e.id)return!1;this.editingId=null;const i=t.trim();if(!i||i===this.itemText(e))return!0;try{if(!(await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:i,quantity:null})})).ok)throw new Error;return this.error="",await this.refresh(),!0}catch{return this.error="Couldn't update this item. Please try again.",!1}}async commitName(e,t,i){await this.rename(e,t)&&i&&this.openDraft()}focusDraft(){this.renderRoot?.querySelector(".grocery-draft")?.focus()}async commitDraft(e){if(!this.draftActive||this.adding)return;const t=this.draftValue.trim();if(!t){this.cancelDraft();return}this.adding=!0,this.error="";try{if(!(await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,list:this.list})})).ok)throw new Error;this.draftValue="",await this.refresh(),this.draftActive=e,e&&this.updateComplete.then(()=>this.focusDraft())}catch{this.error="Couldn't add this item. Your text is still here. Try again."}finally{this.adding=!1}}async reorder(e,t){const i=this.list==="grocery"&&this.items.find(n=>n.id===e)?.status==="pantry";if(!(await fetch(`/api/grocery/${e}/reorder`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({targetIndex:t})})).ok){this.error="Could not save the item order. Please try again.";return}if(i)this.setPantrySort("manual");else{this.sortMode="manual";try{localStorage.setItem("cockpit.grocery_sort","manual")}catch{}}await this.refresh()}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const i=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderIcon(e){const t=e.emoji,i=t?this.iconUrl(t):null,s=i?r`<img src=${i} alt="" class="w-[18px] h-[18px] select-none" draggable="false" />`:t?r`<span class="text-[15px] leading-none">${t}</span>`:r`<span class="text-muted/40 text-[13px] leading-none">🛒</span>`;return r`<button
      type="button"
      class="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px]"
      title="Change icon"
      @dblclick=${n=>{n.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}
    >${s}</button>`}async pickEmoji(e,t){this.emojiPickerFor=null,await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({emoji:t||null})}),await this.refresh()}renderEmojiPalette(e){return r`<div
      class="absolute left-0 top-full mt-1 z-30 w-56 p-1.5 rounded-lg border border-line bg-surface shadow-lg flex flex-wrap gap-0.5"
      @click=${t=>t.stopPropagation()}
    >
      ${Gp.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
          @click=${()=>void this.pickEmoji(e,t)}>${t}</button>`)}
      <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>void this.pickEmoji(e,"")}>none</button>
    </div>`}async removeItem(e){await fetch(`/api/grocery/${e.id}`,{method:"DELETE"}),await this.refresh()}async setExpiryDays(e,t){this.editingExpiryId=null;const i=Math.round(Number(t));if(!Number.isFinite(i))return;const s=e.bought_at?Math.floor(Date.now()/1e3-e.bought_at)/86400:0,n=Math.max(0,Math.round(s)+i);await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({shelf_life_days:n})}),await this.refresh()}fmtDuration(e){const t=Math.abs(e);return t<30?`${e}d`:t<365?`${Math.round(e/30)}m`:`${Math.round(e/365)}y`}hourglass(){return r`<svg class="hidden" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 2h12a1 1 0 0 1 0 2h-1v2.5a5 5 0 0 1-1.9 3.92L13 12l2.1 1.58A5 5 0 0 1 17 17.5V20h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1v-2.5a5 5 0 0 1 1.9-3.92L11 12 8.9 10.42A5 5 0 0 1 7 6.5V4H6a1 1 0 0 1 0-2z" />
    </svg>`}expiryInput(e,t){return r`<span class="shrink-0 inline-flex items-center gap-1 text-[10px] text-ink">
      ${this.hourglass()}
      <input
        type="number"
        class="w-10 bg-transparent border-b border-line text-[11px] outline-none text-right"
        .value=${t!=null?String(t):""}
        autofocus
        @keydown=${i=>{i.key==="Enter"?(i.preventDefault(),this.setExpiryDays(e,i.target.value)):i.key==="Escape"&&(this.editingExpiryId=null)}}
        @blur=${i=>void this.setExpiryDays(e,i.target.value)}
      />d
    </span>`}renderExpiry(e){if(this.list==="buy"||!this.expiryEnabled||e.status!=="pantry"||!e.bought_at)return c;if(this.editingExpiryId===e.id){const s=e.shelf_life_days!=null?Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(e,s)}if(e.shelf_life_days==null)return c;const t=Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400);if(t>3)return c;const i=t<0?"text-red-600 bg-red-500/10":"text-amber-600 bg-amber-500/10";return r`<button
      type="button"
      class="ml-auto shrink-0 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full leading-none ${i}"
      title="Expiry — click to edit"
      @click=${()=>{this.editingExpiryId=e.id}}
    >${this.hourglass()}${this.fmtDuration(t)}</button>`}renderCheck(e){const t=e.status==="pantry",i=t?"shopping":"pantry";return r`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
        style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
        aria-label=${t?"Move back to shopping":"Mark bought"}
        title=${t?"Bought — click to move back":"Mark bought"}
        @click=${()=>void this.setStatus(e,i)}
      >
        ${t?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8.5 L6.5 12 L13 4.5" />
            </svg>`:c}
      </button>
    `}renderItem(e,t,i=!1,s=!0){const n=this.editingId===e.id;return r`
      <li
        data-row-key=${`grocery:${e.id}`}
        draggable=${this.drag.isDragging(e.id)?"true":"false"}
        @dragstart=${o=>this.drag.onDragStart(o,e.id)}
        @dragend=${this.drag.onDragEnd}
        @dragover=${s?o=>this.drag.onDragOver(o,e.id,t):c}
        @dragleave=${this.drag.onDragLeave}
        @drop=${s?o=>this.drag.onDrop(o,e.id,t):c}
        class="group relative flex min-h-11 items-center gap-2 px-3 rounded-md hover:bg-hover focus-within:bg-hover ${this.drag.dropClass(e.id)}"
      >
        ${s?r`<span
          class="hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 hover:!opacity-100 select-none leading-none"
          style="font-size:14px;letter-spacing:-1px;"
          title="Drag to reorder"
          @mousedown=${()=>this.drag.arm(e.id)}
          @mouseup=${this.drag.disarm}
        >⠿</span>`:c}
        ${this.renderCheck(e)}
        <span class="relative shrink-0">
          ${this.renderIcon(e)}
          ${this.emojiPickerFor===e.id?this.renderEmojiPalette(e):c}
        </span>
        <!-- Content carries the divider, so the line is inset (starts after the
             checkbox) — iOS-list style. Subtle on both mobile and desktop. -->
        <div class="flex-1 min-w-0 flex items-center gap-2 py-2.5 border-b border-line/30">
          ${n?r`<input
                class="flex-1 min-w-0 bg-transparent text-base text-ink outline-none border-b border-accent"
                aria-label="Item"
                .value=${this.itemText(e)}
                autofocus
                @keydown=${o=>{o.key==="Enter"?(o.preventDefault(),this.commitName(e,o.target.value,i)):o.key==="Escape"&&(this.editingId=null)}}
                @blur=${o=>void this.rename(e,o.target.value)}
              />`:r`<span class="flex-1 min-w-0 text-[17px] text-ink cursor-text break-words" role="button" tabindex="0" aria-label=${`Edit ${this.itemText(e)}`}
                @click=${()=>this.editItem(e)}
                @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.editItem(e))}}>${this.itemText(e)}</span>`}
          ${this.renderExpiry(e)}
        </div>
        <button
          type="button"
          class="shrink-0 grid place-items-center w-7 h-8 rounded text-muted opacity-50 lg:opacity-0 lg:group-hover:opacity-70 group-focus-within:opacity-70 focus-visible:opacity-100 hover:bg-hover hover:!opacity-100 text-base"
          aria-label=${`Remove ${this.itemText(e)}`}
          title="Consumed — remove"
          @click=${()=>void this.removeItem(e)}
        >×</button>
      </li>
    `}editItem(e){this.editingId=e.id,this.updateComplete.then(()=>this.querySelector(`[data-row-key="grocery:${e.id}"] input`)?.focus())}renderDraftRow(){return r`
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
            @input=${e=>{this.draftValue=e.target.value}}
            @keydown=${e=>{e.isComposing||(e.key==="Enter"?(e.preventDefault(),this.commitDraft(!0)):e.key==="Escape"&&(e.preventDefault(),this.cancelDraft()))}}
            @blur=${()=>void this.commitDraft(!1)}
          />
        <button type="button" aria-label="Add item to list" class="grid place-items-center w-8 h-8 shrink-0 rounded-md text-accent hover:bg-accent/10 disabled:opacity-40"
          ?disabled=${this.adding||!this.draftValue.trim()}
          @mousedown=${e=>e.preventDefault()}
          @click=${()=>void this.commitDraft(!1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
        </button>
        <button type="button" aria-label="Cancel new item" class="w-8 h-8 shrink-0 rounded-md text-muted hover:text-ink hover:bg-hover"
          ?disabled=${this.adding}
          @mousedown=${e=>e.preventDefault()}
          @click=${this.cancelDraft}>×</button>
      </li>
    `}renderSection(e,t,i,s=!1,n=c){const o=s&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(e,t.length,s,n)}
        ${t.length===0&&!o?r`<p class="px-3 py-4 text-sm text-muted">${i}</p>`:r`<ul class="pb-2">
              ${o?this.renderDraftRow():c}
              ${t.map((a,l)=>this.renderItem(a,l,s&&l===t.length-1))}
            </ul>`}
      </section>
    `}renderSectionGrouped(e,t,i,s=!1,n=c){const o=new Map;for(const h of t){const u=h.category||this.inferCategory(h.name);o.has(u)||o.set(u,[]),o.get(u).push(h)}for(const h of o.values())h.sort((u,p)=>u.name.localeCompare(p.name));const a=J.CATEGORY_ORDER.filter(h=>o.has(h)).concat([...o.keys()].filter(h=>!J.CATEGORY_ORDER.includes(h))),l=s&&this.draftActive;return r`
      <section class="rounded-lg bg-surface p-2 sm:p-3">
        ${this.renderSectionHeader(e,t.length,s,n)}
        ${t.length===0&&!l?r`<p class="px-3 py-4 text-sm text-muted">${i}</p>`:r`<div class="pb-2">
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
    `}renderSectionHeader(e,t,i,s){return r`<div class="flex items-center justify-between gap-3 px-3 pt-1 pb-2">
      <h3 class="text-base font-medium text-ink">${e} ${t?r`<span class="ml-1.5 text-xs font-normal text-muted tabular-nums">${t}</span>`:c}</h3>
      ${i?r`<button type="button" class="inline-flex items-center gap-1.5 h-8 px-2 rounded-md text-xs font-medium text-accent hover:bg-accent/10 disabled:opacity-50"
        ?disabled=${this.adding} @mousedown=${n=>{this.draftActive&&n.preventDefault()}} @click=${this.openDraft}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        Add item
      </button>`:s}
    </div>`}renderBought(e){return e.length?r`<section class="rounded-lg bg-surface p-2 sm:p-3">
      <button type="button" class="flex w-full items-center gap-2 px-3 py-2 text-sm text-ink rounded-md hover:bg-hover"
        aria-expanded=${this.boughtExpanded} aria-controls="shopping-bought-items"
        @click=${()=>{this.boughtExpanded=!this.boughtExpanded}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d=${this.boughtExpanded?"m6 9 6 6 6-6":"m9 6 6 6-6 6"} /></svg>
        <span>Bought</span><span class="text-xs text-muted tabular-nums">${e.length}</span>
      </button>
      <ul id="shopping-bought-items" ?hidden=${!this.boughtExpanded} class="pt-1 pb-2">${this.boughtExpanded?e.map((t,i)=>this.renderItem(t,i)):c}</ul>
    </section>`:c}render(){const e=(h,u=this.sortMode)=>u==="az"?[...h].sort((p,m)=>p.name.localeCompare(m.name)):h,t=e(this.items.filter(h=>h.status==="shopping")),i=this.list==="grocery"?this.pantrySort??this.sortMode:this.sortMode,s=e(this.items.filter(h=>h.status==="pantry"),i),n=this.sortMode==="type"&&this.list==="grocery",o=this.list==="buy"?"To buy":"Shopping",a=this.list==="buy"?"Add something you want to get.":"Your shopping list is clear.",l=r`<button type="button"
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
            ${n?this.renderSectionGrouped(o,t,a,!0):this.renderSection(o,t,a,!0)}
            ${this.list==="buy"?this.renderBought(s):s.length?i==="type"?this.renderSectionGrouped("Pantry",s,"",!1,l):this.renderSection("Pantry",s,"",!1,l):c}
          `}
          </div>
        </div>
      </div>
    `}};J.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];me([d()],J.prototype,"items",2);me([d()],J.prototype,"loading",2);me([d()],J.prototype,"adding",2);me([d()],J.prototype,"error",2);me([d()],J.prototype,"boughtExpanded",2);me([d()],J.prototype,"editingId",2);me([d()],J.prototype,"editingExpiryId",2);me([d()],J.prototype,"emojiPickerFor",2);me([d()],J.prototype,"draftActive",2);me([d()],J.prototype,"draftValue",2);me([d()],J.prototype,"sortMode",2);me([d()],J.prototype,"pantrySort",2);me([d()],J.prototype,"settingsOpen",2);me([d()],J.prototype,"expiryEnabled",2);me([d()],J.prototype,"list",2);J=me([w("grocery-section")],J);const Fr=e=>String(e).padStart(2,"0"),Vp=()=>{const e=new Date;return`${e.getFullYear()}-${Fr(e.getMonth()+1)}-${Fr(e.getDate())}`};function jl(e){if(!e)return null;const t=Math.round((Date.parse(Vp())-Date.parse(e))/864e5);return Number.isFinite(t)?Math.max(0,t):null}function co(e,t){const i=jl(e);return i===null||i>t}function ho(e){const t=jl(e);return t===null?"on an unknown date":t===0?"today":t===1?"yesterday":`${t} days ago`}var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,xi=(e,t,i,s)=>{for(var n=s>1?void 0:s?Qp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Yp(t,i,n),n};const jr=["idea","paused","shipped","archived"],Jp={idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},Ur=r`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`;let qt=class extends T{constructor(){super(...arguments),this.data=null,this.failed=!1,this.otherOpen=!1,this.search="",this.searchOpen=!1}connectedCallback(){super.connectedCallback(),this.reload()}get staleDays(){return this.data?.staleDays??14}async reload(){try{const e=await fetch("/api/projects");if(!e.ok)throw new Error(String(e.status));this.data=await e.json(),this.failed=!1}catch{this.failed=!this.data}}open(e){this.dispatchEvent(new CustomEvent("open-project",{detail:e,bubbles:!0,composed:!0}))}fits(e){const t=this.search.trim().toLowerCase();return t?[e.name,e.purpose,e.state?.goal].some(i=>(i??"").toLowerCase().includes(t)):!0}groups(){const e=this.data?.staleDays??14,t=(this.data?.projects??[]).filter(a=>this.fits(a)),i=a=>a.state.blockers.length?0:co(a.state.updated,e)?1:2,s=t.filter(a=>a.state&&a.status!=="archived").sort((a,l)=>i(a)-i(l)||(l.state.updated??"").localeCompare(a.state.updated??"")||l.unread-a.unread||a.name.localeCompare(l.name)),n=t.filter(a=>!a.state&&a.status==="active").sort((a,l)=>l.unread-a.unread||a.name.localeCompare(l.name,void 0,{sensitivity:"base"})),o=t.filter(a=>!s.includes(a)&&!n.includes(a)).sort((a,l)=>jr.indexOf(a.status??"")-jr.indexOf(l.status??"")||a.name.localeCompare(l.name,void 0,{sensitivity:"base"}));return{withBlock:s,noBlock:n,other:o,staleDays:e,blocked:s.filter(a=>i(a)===0).length,stale:s.filter(a=>i(a)===1).length}}logo(e,t){return e.icon?r`<img src=${e.icon} alt="" loading="lazy" class="${t} rounded-md object-contain bg-surface border border-line shrink-0" />`:r`<span class="${t} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${e.name.charAt(0).toUpperCase()}</span>`}unreadPill(e){return e.unread?r`<span class="shrink-0 px-1.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-medium tabular-nums"
      title="${e.unread} unread handoff${e.unread===1?"":"s"}: its next agent session picks ${e.unread===1?"it":"them"} up">${e.unread} unread</span>`:c}statusTag(e){const t=e.status?Jp[e.status]:null;return t?r`<span class="shrink-0 px-1.5 rounded border border-line text-[10px] text-muted">${t}</span>`:c}renderCard(e,t){const i=e.state,s=co(i.updated,t),[n,...o]=i.next;return r`
      <li data-row-key=${e.id!=null?`office:${e.id}`:e.key}>
        <button type="button" class="w-full text-left rounded-xl border bg-surface px-3.5 py-3 hover:bg-hover transition-colors ${i.blockers.length?"border-red-500/40":"border-line"}"
          @click=${()=>this.open(e)}>
          <span class="flex items-center gap-2.5">
            ${this.logo(e,"w-8 h-8")}
            <span class="flex-1 min-w-0 flex items-center gap-1.5">
              <span class="text-sm font-semibold text-ink truncate">${e.name}</span>
              ${this.statusTag(e)}
            </span>
            ${this.unreadPill(e)}
          </span>
          ${i.goal?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90 line-clamp-2">${i.goal}</span>`:c}
          ${i.blockers.map(a=>r`<span class="block mt-2 text-[13px] leading-snug text-red-500"><span class="font-semibold">Blocked:</span> ${a.text}</span>`)}
          ${n?r`<span class="block mt-2 text-[13px] leading-snug text-ink/90"><span class="font-semibold text-ink">Next:</span> ${n.text}${o.length?r` <span class="text-muted whitespace-nowrap">+${o.length} more</span>`:c}</span>`:c}
          <span class="block mt-2 text-[11px] ${s?"text-warn":"text-muted"}">
            ${s?`Updated ${ho(i.updated)}: out of date, check before relying on it`:`Updated ${ho(i.updated)}${i.by?` by ${i.by}`:""}`}
          </span>
        </button>
      </li>`}renderRow(e,t=!1){return r`
      <li data-row-key=${e.id!=null?`office:${e.id}`:e.key}>
        <button type="button" class="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left hover:bg-hover" @click=${()=>this.open(e)}>
          ${this.logo(e,"w-7 h-7")}
          <span class="flex-1 min-w-0">
            <span class="flex items-center gap-1.5">
              <span class="text-sm text-ink truncate">${e.name}</span>
              ${t?this.statusTag(e):c}
            </span>
            ${e.purpose?r`<span class="block text-[11px] text-muted truncate">${e.purpose}</span>`:c}
          </span>
          ${this.unreadPill(e)}
        </button>
      </li>`}renderDispatcher(){const e=this.data?.dispatcher;if(!e)return c;const t=e.since?new Date(e.since).toLocaleDateString(void 0,{day:"numeric",month:"short"}):null,i=e.since!=null&&Date.now()-e.since<12*6e4,s=e.paused?`Handoff dispatcher paused${t?` since ${t}`:""}.`:i?"Handoff dispatcher is on: it starts agents for unread handoffs every 5 minutes.":`Handoff dispatcher hasn't run${t?` since ${t}`:""}.`;return r`
      <p class="px-4 pt-2 pb-5 text-[11px] text-muted">
        ${s}
        ${e.paused?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!1)}>Resume</button>`:i?r`<button type="button" class="ml-1 underline underline-offset-2 hover:text-ink" @click=${()=>void this.setPaused(!0)}>Pause</button>`:c}
      </p>`}async setPaused(e){if(!(!e&&!confirm("Resume the handoff dispatcher? Every 5 minutes it starts agents on the Air to answer unread handoffs."))){try{await fetch("/api/bus/pause",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({paused:e})})}catch{}await this.reload()}}openSearch(){this.searchOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector("#projects-search")?.focus())}renderHeader(e){const t=[];return e.blocked&&t.push(`${e.blocked} blocked`),e.stale&&t.push(`${e.stale} out of date`),e.noBlock.length&&t.push(`${e.noBlock.length} without a State block`),r`
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
        ${this.data&&!this.search?r`<p class="text-xs text-muted">${t.length?t.join(" · "):"Every project is up to date."}</p>`:c}
      </header>`}render(){if(!this.data)return r`<div class="flex-1 grid place-items-center text-xs text-muted">
        ${this.failed?r`<span>Couldn't load projects. <button type="button" class="underline hover:text-ink" @click=${()=>void this.reload()}>Try again</button></span>`:"Loading…"}
      </div>`;const e=this.groups(),t=this.otherOpen||!!this.search.trim(),i=this.search.trim()&&!e.withBlock.length&&!e.noBlock.length&&!e.other.length;return r`
      ${this.renderHeader(e)}
      <div class="flex-1 min-h-0 overflow-y-auto @container">
        ${i?r`<p class="px-4 py-8 text-center text-xs text-muted">No project matches "${this.search.trim()}".</p>`:c}
        ${e.withBlock.length?r`<ul class="px-3 pt-3 grid grid-cols-1 gap-2.5 @2xl:grid-cols-2 @5xl:grid-cols-3 items-start">${e.withBlock.map(s=>this.renderCard(s,e.staleDays))}</ul>`:c}
        ${e.noBlock.length?r`<section class="px-2 pt-5">
              <h3 class="px-2 text-xs font-medium text-ink">No State block yet · ${e.noBlock.length}</h3>
              <p class="px-2 pb-1 text-[11px] text-muted">One appears when an agent finishes a session in the project.</p>
              <ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${e.noBlock.map(s=>this.renderRow(s))}</ul>
            </section>`:c}
        ${e.other.length?r`<section class="px-2 pt-4">
              <button type="button" class="w-full flex items-center gap-1.5 px-2 py-1 text-xs text-muted hover:text-ink"
                @click=${()=>this.otherOpen=!this.otherOpen}>
                <span class="transition-transform ${t?"rotate-90":""}">›</span>
                Ideas, paused, shipped and archived · ${e.other.length}
              </button>
              ${t?r`<ul class="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2">${e.other.map(s=>this.renderRow(s,!0))}</ul>`:c}
            </section>`:c}
        ${this.renderDispatcher()}
      </div>`}};xi([d()],qt.prototype,"data",2);xi([d()],qt.prototype,"failed",2);xi([d()],qt.prototype,"otherOpen",2);xi([d()],qt.prototype,"search",2);xi([d()],qt.prototype,"searchOpen",2);qt=xi([w("projects-list")],qt);const uo=new Map,Tn=new Map;function Us(e){return uo.get(e)}function Ul(e){const t=uo.get(e);if(t!=null)return Promise.resolve(t);let i=Tn.get(e);return i||(i=fetch(`/api/inbox/${e}`).then(s=>s.ok?s.json():null).then(s=>{const n=s?.message.body??null;return n!=null&&uo.set(e,n),n}).catch(()=>null).finally(()=>Tn.delete(e)),Tn.set(e,i)),i}var Xp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,_e=(e,t,i,s)=>{for(var n=s>1?void 0:s?Zp(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Xp(t,i,n),n};const em=["active","idea","paused","shipped","archived"],tm={active:"Active",idea:"Idea",paused:"Paused",shipped:"Shipped",archived:"Archived"},im={active:"bg-emerald-500",idea:"bg-sky-400",paused:"bg-amber-500",shipped:"bg-violet-400",archived:"bg-zinc-500"},Br=512*1024,sm=8;let ke=class extends T{constructor(){super(...arguments),this.staleDays=14,this.detail=null,this.failed=!1,this.app=null,this.docsOpen=!1,this.docsLoaded=!1,this.openDoc=null,this.openHandoff=null,this.allHandoffs=!1,this.editingField=null,this.changed=!1}connectedCallback(){super.connectedCallback(),this.load()}updated(){if(!this.editingField)return;const e=this.renderRoot,t=e.querySelector("[data-editing]");t&&e.activeElement!==t&&(t.focus(),t.select())}async load(){const e=this.project.key,t=fetch(`/api/projects/detail?key=${encodeURIComponent(e)}`).then(i=>i.ok?i.json():Promise.reject(new Error(String(i.status)))).then(i=>{this.project.key===e&&(this.detail=i,this.failed=!1)}).catch(()=>{this.project.key===e&&!this.detail&&(this.failed=!0)});await Promise.all([t,this.loadApp()])}async loadApp(){const e=this.project.id;if(e!=null)try{const t=await fetch("/api/office?lean=1");if(!t.ok)return;const i=(await t.json()).apps.find(s=>s.id===e)??null;if(this.project.id!==e)return;this.app=i&&this.docsLoaded&&this.app?{...i,docs:this.app.docs}:i}catch{}}async loadDocs(){const e=this.project.id;if(!(e==null||this.docsLoaded))try{const t=await fetch(`/api/office/${e}`);if(!t.ok)return;const{app:i}=await t.json();this.project.id===e&&this.app&&(this.app={...this.app,docs:i.docs},this.docsLoaded=!0)}catch{}}close(){this.dispatchEvent(new CustomEvent("close-project",{detail:{changed:this.changed},bubbles:!0,composed:!0}))}async patch(e){this.app&&(await fetch(`/api/office/${this.app.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),this.changed=!0,await this.loadApp())}async removeApp(){const e=this.app;!e||!confirm(`Remove ${e.name} from Projects? Its note and State block stay in the vault.`)||(await fetch(`/api/office/${e.id}`,{method:"DELETE"}),this.changed=!0,this.close())}async onLogoFile(e){const t=e.target,i=t.files?.[0];if(t.value="",!i)return;if(!i.type.startsWith("image/")){alert("Please choose an image file.");return}if(i.size>Br){alert(`Image is too large (max ${Math.round(Br/1024)}KB).`);return}const s=await new Promise((n,o)=>{const a=new FileReader;a.onload=()=>n(a.result),a.onerror=()=>o(a.error),a.readAsDataURL(i)});await this.patch({icon:s})}renderItem(e,t){const i=e.proof&&/^https?:\/\/\S+$/.test(e.proof)?e.proof:null;return r`
      <li class="flex gap-2.5">
        <span class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${t==="blocker"?"bg-red-500":"bg-ink/30"}"></span>
        <div class="min-w-0 flex-1">
          <p class="text-sm leading-snug ${t==="blocker"?"text-red-500":"text-ink"}">${e.text}</p>
          ${e.why?r`<p class="mt-0.5 text-xs text-muted">Why: ${e.why}</p>`:c}
          ${e.status==="verified"?r`<p class="mt-0.5 text-[11px] text-emerald-600">✓ Verified${e.proof?r`: ${i?r`<a class="underline underline-offset-2" href=${i} target="_blank" rel="noopener">${e.proof}</a>`:e.proof}`:c}</p>`:t!=="next"&&e.status==="intended"?r`<p class="mt-0.5 text-[11px] text-muted">Not verified yet</p>`:c}
        </div>
      </li>`}renderSection(e,t,i){return t.length?r`
      <section class="space-y-2">
        <h4 class="text-[11px] font-medium uppercase tracking-wide ${i==="blocker"?"text-red-500":"text-muted"}">${e}</h4>
        <ul class="space-y-2.5">${t.map(s=>this.renderItem(s,i))}</ul>
      </section>`:c}renderState(){if(!this.detail)return r`<p class="text-xs text-muted">${this.failed?r`Couldn't load this project. <button type="button" class="underline hover:text-ink" @click=${()=>void this.load()}>Try again</button>`:"Loading…"}</p>`;const e=this.detail.state;if(!e)return r`
        <div class="rounded-xl border border-dashed border-line px-4 py-4">
          <p class="text-sm text-ink">No State block yet.</p>
          <p class="mt-1 text-xs text-muted">When an agent finishes a session in ${this.project.name}, it writes one here: the goal, what was decided and ruled out, blockers and next steps.</p>
        </div>`;const t=co(e.updated,this.staleDays),i=[...e.decided,...e.ruled_out,...e.blockers],s=i.filter(n=>n.status==="verified").length;return r`
      <div class="space-y-5">
        <div>
          <p class="text-xs ${t?"text-warn":"text-muted"}">
            Updated ${ho(e.updated)}${e.by?` by ${e.by}`:""}${e.where&&e.where!==this.project.name?` in ${e.where}`:""}${t?". Out of date: check it before relying on it.":""}
          </p>
          ${i.length?r`<p class="text-[11px] text-muted">${s} of ${i.length} decisions and blockers verified with proof.</p>`:c}
        </div>
        ${e.goal?r`<section class="space-y-1">
              <h4 class="text-[11px] font-medium uppercase tracking-wide text-muted">Goal</h4>
              <p class="text-[15px] leading-snug text-ink">${e.goal}</p>
            </section>`:c}
        ${this.renderSection("Blockers",e.blockers,"blocker")}
        ${this.renderSection("Next",e.next,"next")}
        ${this.renderSection("Decided",e.decided,"decision")}
        ${this.renderSection("Ruled out",e.ruled_out,"decision")}
        ${e.notes.length?r`<section class="space-y-1">
              <h4 class="text-[11px] font-medium uppercase tracking-wide text-muted">Notes</h4>
              ${e.notes.map(n=>r`<p class="text-xs text-ink whitespace-pre-wrap break-words">${n}</p>`)}
            </section>`:c}
        ${this.detail.note?r`<p class="text-[11px] text-muted">From the vault note <span class="font-mono">${this.detail.note}</span>.</p>`:c}
      </div>`}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}toggleHandoff(e){if(this.openHandoff===e){this.openHandoff=null;return}this.openHandoff=e,Us(e)==null&&Ul(e).then(()=>this.requestUpdate())}renderHandoff(e){const t=this.openHandoff===e.id,i=e.inbound&&e.read_at==null,s=e.inbound?e.from_agent:e.to_agent;return r`
      <div data-row-key=${`message:${e.id}`}>
        <button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-hover" @click=${()=>this.toggleHandoff(e.id)}>
          <span class="font-mono shrink-0 ${e.inbound?"text-ink":"text-muted"}" title=${e.inbound?`From ${s}`:`To ${s}`}>${e.inbound?"←":"→"} ${s}</span>
          <span class="flex-1 min-w-0 truncate ${i?"text-ink font-medium":"text-muted"}">${e.subject||"(no subject)"}</span>
          ${i?r`<span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0" title="Unread"></span>`:c}
          <span class="text-[10px] text-muted shrink-0">${this.fmtTime(e.created_at)}</span>
        </button>
        ${t?r`<pre class="px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-bg border-t border-line max-h-72 overflow-y-auto">${Us(e.id)??"Loading…"}</pre>`:c}
      </div>`}renderHandoffs(){const e=this.detail;if(!e)return c;const t=this.project.unread,i=this.allHandoffs?e.messages:e.messages.slice(0,sm);return r`
      <section class="space-y-2">
        <h3 class="text-xs font-medium text-ink">Handoffs${t?r` <span class="text-muted font-normal">· ${t} unread</span>`:c}</h3>
        ${e.messages.length===0?r`<p class="text-xs text-muted">None yet. Messages agents send to ${this.project.name}, or that it sends, show here.</p>`:r`
              ${t?r`<p class="text-[11px] text-muted">Unread ones wait for the next agent session in ${this.project.name}.</p>`:c}
              <div class="rounded-lg border border-line overflow-hidden divide-y divide-line/60">${i.map(s=>this.renderHandoff(s))}</div>
              ${e.messages.length>i.length?r`<button type="button" class="text-xs text-muted hover:text-ink underline underline-offset-2" @click=${()=>this.allHandoffs=!0}>Show ${e.messages.length-i.length} more</button>`:e.more?r`<p class="text-[11px] text-muted">${e.more} older not shown.</p>`:c}
            `}
      </section>`}renderLogo(e){const t=this.app?.icon??this.project.icon;return t?r`<img src=${t} alt="" class="${e} rounded-md object-contain bg-surface border border-line shrink-0" loading="lazy" />`:r`<span class="${e} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0">${this.project.name.charAt(0).toUpperCase()}</span>`}commitEdit(e,t,i){this.editingField=null;const s=i.trim();s!==(t??"")&&(e==="name"&&!s||this.patch({[e]:s||null}))}editableText(e,t,i){return this.editingField===e?r`<input data-editing type="text"
        class="w-full px-1.5 py-0.5 text-sm bg-surface border border-ink/50 rounded focus:outline-none"
        .value=${t??""}
        @keydown=${s=>{s.key==="Enter"?s.target.blur():s.key==="Escape"&&(this.editingField=null)}}
        @blur=${s=>this.commitEdit(e,t,s.target.value)} />`:r`
      <button type="button" class="group/e w-full flex items-start gap-1.5 text-left rounded -mx-1.5 px-1.5 py-0.5 hover:bg-hover ${i.display}"
        @click=${()=>this.editingField=e}>
        <span class="flex-1 min-w-0 ${i.truncate===!1?"break-words":"truncate"} ${t?"":"text-muted/60 font-normal italic"}">${t||i.placeholder||"Add"}</span>
        ${i.link?r`<a href=${i.link} target="_blank" rel="noopener" class="shrink-0 text-muted hover:text-ink" title="Open" @click=${s=>s.stopPropagation()}>↗</a>`:c}
        <span class="shrink-0 text-[11px] text-muted opacity-0 group-hover/e:opacity-60">✎</span>
      </button>`}metaRow(e,t){return r`<dt class="text-[11px] text-muted pt-1.5">${e}</dt><dd class="min-w-0 py-0.5">${t}</dd>`}statusControl(e){return r`
      <div class="relative inline-block">
        <span class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${im[e.status]}"></span>
        <select class="appearance-none bg-surface border border-line rounded-full pl-6 pr-7 py-1 text-xs text-ink hover:bg-hover focus:outline-none focus:border-ink cursor-pointer"
          title="Status"
          @change=${t=>void this.patch({status:t.target.value})}>
          ${em.map(t=>r`<option value=${t} ?selected=${e.status===t}>${tm[t]}</option>`)}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted">▾</span>
      </div>`}renderDocs(e){const t=e.docs??[];if(!t.length)return c;const i=t.find(s=>s.file===this.openDoc&&s.content!=null)??null;return r`
      <section class="space-y-2">
        <button type="button" class="flex items-center gap-1.5 text-xs font-medium text-ink hover:text-ink/80"
          @click=${()=>{this.docsOpen=!this.docsOpen,this.docsOpen&&this.loadDocs()}}>
          <span class="text-muted transition-transform ${this.docsOpen?"rotate-90":""}">›</span>
          Docs the agents read <span class="text-muted font-normal">· ${t.length}</span>
        </button>
        ${this.docsOpen?this.docsLoaded?r`
                <div class="grid grid-cols-2 @xl:grid-cols-3 gap-2">
                  ${t.map(s=>{const n=s.content!=null,o=this.openDoc===s.file;return r`<button type="button" ?disabled=${!n}
                      class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-left text-xs min-w-0 ${o?"border-ink bg-hover":"border-line hover:bg-hover"} ${n?"":"opacity-60 cursor-default"}"
                      @click=${n?()=>this.openDoc=o?null:s.file:void 0}>
                      <span class="shrink-0 text-muted ${n?`transition-transform ${o?"rotate-90":""}`:""}">${n?"›":"·"}</span>
                      <span class="font-mono text-ink truncate">${s.file}</span>
                    </button>`})}
                </div>
                ${i?r`<pre class="rounded-lg border border-line bg-bg px-3 py-2 text-[11px] leading-relaxed text-ink whitespace-pre-wrap break-words max-h-80 overflow-y-auto">${i.content}</pre>`:c}
              `:r`<p class="text-xs text-muted">Loading…</p>`:c}
      </section>`}renderCatalog(e){return r`
      <section class="space-y-2">
        <h3 class="text-xs font-medium text-ink">Catalog entry</h3>
        <dl class="grid grid-cols-[84px_minmax(0,1fr)] gap-x-3 gap-y-0.5 items-baseline">
          ${this.metaRow("Purpose",this.editableText("purpose",e.purpose,{display:"text-sm text-ink",placeholder:"What it's for",truncate:!1}))}
          ${this.metaRow("Serves goal",this.editableText("goal",e.goal,{display:"text-sm text-ink",placeholder:"The goal it serves",truncate:!1}))}
          ${this.metaRow("Stack",this.editableText("stack",e.stack,{display:"text-sm text-ink",placeholder:"Tech stack",truncate:!1}))}
          ${this.metaRow("Repo",this.editableText("repo",e.repo,{display:"text-xs font-mono text-ink break-all",placeholder:"Repo URL",link:e.repo,truncate:!1}))}
        </dl>
      </section>
      ${this.renderDocs(e)}
      <div>
        <button type="button" class="text-xs text-muted hover:text-red-500" @click=${()=>void this.removeApp()}>Remove from Projects</button>
      </div>`}render(){const e=this.app;return r`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center gap-3">
          <button type="button" class="shrink-0 w-7 h-7 grid place-items-center rounded text-lg text-muted hover:text-ink hover:bg-hover"
            title="Back to Projects" @click=${()=>this.close()}>‹</button>
          ${e?r`<div class="relative group/logo shrink-0 w-9 h-9">
                <button type="button" class="block w-full h-full" title="Replace logo" @click=${()=>this.logoInput?.click()}>
                  ${this.renderLogo("w-9 h-9")}
                  <span class="absolute inset-0 grid place-items-center rounded-md bg-black/55 text-white text-sm opacity-0 group-hover/logo:opacity-100 transition-opacity">↻</span>
                </button>
                ${e.icon?r`<button type="button" title="Remove logo" @click=${()=>void this.patch({icon:null})}
                      class="absolute -top-1.5 -right-1.5 w-4 h-4 grid place-items-center rounded-full bg-bg border border-line text-[10px] leading-none text-muted hover:text-red-500 opacity-0 group-hover/logo:opacity-100">×</button>`:c}
                <input id="logo-file" type="file" accept="image/*" class="hidden" @change=${t=>void this.onLogoFile(t)} />
              </div>`:this.renderLogo("w-9 h-9")}
          <div class="min-w-0 flex-1">
            ${e?r`${this.editableText("name",e.name,{display:"text-base font-semibold text-ink"})}
                  ${this.editableText("path",e.path,{display:"text-xs text-muted font-mono",placeholder:"Add path"})}`:r`<p class="text-base font-semibold text-ink truncate">${this.project.name}</p>`}
          </div>
          ${e?this.statusControl(e):c}
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto @container">
          <div class="max-w-3xl px-5 py-5 space-y-8">
            ${this.renderState()}
            ${this.renderHandoffs()}
            ${e?this.renderCatalog(e):c}
          </div>
        </div>
      </div>`}};_e([b({attribute:!1})],ke.prototype,"project",2);_e([b({type:Number})],ke.prototype,"staleDays",2);_e([d()],ke.prototype,"detail",2);_e([d()],ke.prototype,"failed",2);_e([d()],ke.prototype,"app",2);_e([d()],ke.prototype,"docsOpen",2);_e([d()],ke.prototype,"docsLoaded",2);_e([d()],ke.prototype,"openDoc",2);_e([d()],ke.prototype,"openHandoff",2);_e([d()],ke.prototype,"allHandoffs",2);_e([d()],ke.prototype,"editingField",2);_e([V("#logo-file")],ke.prototype,"logoInput",2);ke=_e([w("project-detail")],ke);var nm=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Uo=(e,t,i,s)=>{for(var n=s>1?void 0:s?om(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&nm(t,i,n),n};let Bs=class extends T{constructor(){super(...arguments),this.open=null}onClose(e){this.open=null,e.detail?.changed&&this.list?.reload()}render(){return r`
      <projects-list class="${this.open?"hidden":"flex"} flex-col h-full"
        @open-project=${e=>this.open=e.detail}></projects-list>
      ${this.open?r`<project-detail class="flex flex-col h-full" .project=${this.open} .staleDays=${this.list?.staleDays??14}
            @close-project=${e=>this.onClose(e)}></project-detail>`:c}
    `}};Uo([d()],Bs.prototype,"open",2);Uo([V("projects-list")],Bs.prototype,"list",2);Bs=Uo([w("office-section")],Bs);var rm=Object.defineProperty,am=Object.getOwnPropertyDescriptor,wi=(e,t,i,s)=>{for(var n=s>1?void 0:s?am(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&rm(t,i,n),n};let Kt=class extends T{constructor(){super(...arguments),this.embedded=!1,this.messages=[],this.activity=null,this.loading=!0,this.openId=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=setInterval(()=>void this.refresh(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/inbox?lean=1"),fetch("/api/bus/activity")]);e.ok&&(this.messages=(await e.json()).messages),t.ok&&(this.activity=await t.json())}catch{}this.loading=!1}async markRead(e){await fetch(`/api/inbox/${e}/read`,{method:"POST"}),await this.refresh()}toggle(e){if(this.openId===e){this.openId=null;return}this.openId=e,Us(e)==null&&Ul(e).then(()=>this.requestUpdate())}stateOf(e){const t=this.activity;return t?.quarantined.some(i=>i.id===String(e.id))?"quarantined":e.read_at!=null?"done":t?.live.includes(e.to_agent)?"working":"pending"}fmtTime(e){return new Date(e*1e3).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}ago(e){if(e==null)return"—";const t=Math.max(0,Math.floor((Date.now()-e)/1e3));return t<60?`${t}s`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}renderStrip(){const e=this.activity;if(!e)return c;const t=e.live.length,i=t>0?{cls:"bg-emerald-500 animate-pulse",label:`${t} agent${t>1?"s":""} working now`}:e.stale?{cls:"bg-amber-500",label:"Dispatcher idle (no tick in 12m+)"}:{cls:"bg-ink/30",label:"Idle — waiting for the next tick"},s=this.messages.filter(n=>n.read_at==null).length;return r`
      <div class="flex items-center gap-2 px-4 py-2 border-b border-line shrink-0 bg-bg">
        <span class="w-2 h-2 rounded-full shrink-0 ${i.cls}"></span>
        <span class="text-xs text-ink font-medium">${i.label}</span>
        ${t>0?r`<span class="text-[11px] text-muted font-mono">${e.live.join(", ")}</span>`:c}
        <span class="ml-auto text-[11px] text-muted">
          ${s} pending · last tick ${this.ago(e.lastTickAt)} ago
          ${e.quarantined.length>0?r`· <span class="text-amber-600">${e.quarantined.length} quarantined</span>`:c}
        </span>
      </div>
    `}renderBadge(e){const i={pending:{label:"pending",cls:"bg-bg text-muted border border-line"},working:{label:"working",cls:"bg-amber-100 text-amber-700",pulse:!0},done:{label:"done",cls:"bg-emerald-50 text-emerald-700"},quarantined:{label:"quarantined",cls:"bg-red-100 text-red-700"}}[e];return r`<span class="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${i.cls}">
      ${i.pulse?r`<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>`:c}${i.label}
    </span>`}renderRun(e){const t=this.activity?.handled[String(e.id)];if(!t)return c;const i=t.durationMs!=null?`${Math.round(t.durationMs/1e3)}s`:null,s=t.batchedWith.length?` · with ${t.batchedWith.map(n=>`#${n}`).join(", ")}`:"";return r`
      <div class="mt-2 flex items-start gap-2 px-2.5 py-1.5 bg-surface border-l-2 border-emerald-400 text-[11px] text-muted">
        <span class="mt-px text-emerald-600">⊙</span>
        <span class="flex-1 min-w-0">
          Answered by a read-only agent · ${this.ago(t.at)} ago${i?` · ${i}`:""}${t.exit!=null&&t.exit!==0?` · exit ${t.exit}`:""}${s}
          ${t.summary?r`<span class="block mt-1 text-ink/70 line-clamp-3 break-words">${t.summary}</span>`:c}
        </span>
      </div>
    `}renderMessage(e){const t=this.openId===e.id,i=this.stateOf(e),s=e.read_at==null;return r`
      <li data-row-key=${`message:${e.id}`} class="last:[&_.row-divider]:border-b-0">
        <button
          type="button"
          class="group w-full flex items-start gap-3 pl-3 text-left hover:bg-hover"
          @click=${()=>this.toggle(e.id)}
        >
          <span class="mt-2.5 shrink-0">${this.renderBadge(i)}</span>
          <span class="row-divider flex-1 min-w-0 flex items-start gap-3 py-2.5 mr-4 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="flex items-center gap-1.5 text-xs text-muted">
                <span class="font-mono text-ink">${e.from_agent}</span>
                <span>→</span>
                <span class="font-mono text-ink">${e.to_agent}</span>
                <span class="ml-auto shrink-0">${this.fmtTime(e.created_at)}</span>
              </span>
              <span class="block text-sm mt-0.5 truncate ${s?"text-ink font-medium":"text-muted"}">${e.subject||"(no subject)"}</span>
            </span>
            <span class="shrink-0 mt-0.5 text-muted transition-transform ${t?"rotate-90":"opacity-0 group-hover:opacity-100"}">›</span>
          </span>
        </button>
        ${t?r`
              <div class="px-4 pb-3">
                <pre class="text-[12px] leading-relaxed text-ink whitespace-pre-wrap break-words bg-surface border border-line rounded p-3 max-h-96 overflow-y-auto">${Us(e.id)??"Loading…"}</pre>
                ${this.renderRun(e)}
                ${s?r`<button
                      type="button"
                      class="mt-2 text-xs px-3 py-1 border border-line rounded hover:bg-hover"
                      @click=${()=>void this.markRead(e.id)}
                    >Mark read</button>`:r`<span class="mt-2 inline-block text-[10px] text-muted">Read ${e.read_at?this.fmtTime(e.read_at):""}</span>`}
              </div>
            `:c}
      </li>
    `}renderGroup(e,t){return t.length===0?c:r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">
          ${e} (${t.length})
        </h3>
        <ul>${t.map(i=>this.renderMessage(i))}</ul>
      </section>
    `}render(){const e=this.messages.filter(i=>i.read_at==null),t=this.messages.filter(i=>i.read_at!=null);return r`
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
    `}};wi([b({type:Boolean})],Kt.prototype,"embedded",2);wi([d()],Kt.prototype,"messages",2);wi([d()],Kt.prototype,"activity",2);wi([d()],Kt.prototype,"loading",2);wi([d()],Kt.prototype,"openId",2);Kt=wi([w("inbox-section")],Kt);var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,sn=(e,t,i,s)=>{for(var n=s>1?void 0:s?cm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&lm(t,i,n),n};const dm=86400,hm=5e3;function Hr(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}function um(e){return e.label?e.label:e.type==="agent"?"Hand to an agent":e.type==="note"?"Open the note":e.type==="none"?"Got it":"Open"}function pm(e){if(e.from)return e.from;const t=e.source.replace(/[-_]+/g," ").trim();return t?t.charAt(0).toUpperCase()+t.slice(1):"Mana"}function mm(e){const i=Math.floor(Date.now()/1e3)-e;if(i<60)return"Just now";if(i<3600)return`${Math.floor(i/60)}m ago`;const s=new Date;s.setHours(0,0,0,0);const n=Math.floor(s.getTime()/1e3);return e>=n?`${Math.floor(i/3600)}h ago`:e>=n-dm?"Yesterday":new Date(e*1e3).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}function fm(e,t){e.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"canvas"},bubbles:!0,composed:!0}));const i=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:t,ack:()=>{o=!0}}})),o};if(i())return;const s=performance.now(),n=()=>{!i()&&performance.now()-s<4e3&&setTimeout(n,100)};setTimeout(n,50)}let zi=class extends T{constructor(){super(...arguments),this.store=new Ga(this,f,e=>({items:e.notifications,unread:e.notificationsUnread})),this.loaded=!1,this.aboutOpen=!1,this.handed=[],this.fresh=new Set,this.onVisible=()=>this.markSeenSoon()}connectedCallback(){super.connectedCallback(),this.loaded=f.getState().notifications.length>0,f.getState().loadNotifications().finally(()=>{this.loaded=!0}),document.addEventListener("visibilitychange",this.onVisible)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.seenTimer&&clearTimeout(this.seenTimer)}willUpdate(){for(const e of f.getState().notifications)e.read_at==null&&this.fresh.add(e.id)}updated(){this.markSeenSoon()}markSeenSoon(){this.seenTimer||document.visibilityState!=="visible"||f.getState().notificationsUnread!==0&&(this.seenTimer=setTimeout(()=>{this.seenTimer=void 0,this.isConnected&&document.visibilityState==="visible"&&f.getState().markAllNotificationsRead()},800))}act(e){const t=Hr(e.action);if(t.type==="agent")this.handed=[...this.handed,{row:e,to:t.to}],setTimeout(()=>{this.handed=this.handed.filter(i=>i.row.id!==e.id)},hm);else if(t.type==="url")window.open(t.href,"_blank","noopener");else if(t.type==="note")fm(this,t.file);else if(t.type==="persona"||t.type==="mode"){if(e.kind==="circle-suggest"){try{localStorage.setItem("circle.intent","review")}catch{}document.dispatchEvent(new CustomEvent("circle-open-review"))}const i=t.type==="persona"?{persona:t.persona}:{mode:t.mode};this.dispatchEvent(new CustomEvent("notif-navigate",{detail:i,bubbles:!0,composed:!0}))}f.getState().actOnNotification(e.id)}dismiss(e){f.getState().dismissNotification(e)}render(){const e=this.store.state.notifications,t=new Set(this.handed.map(s=>s.row.id)),i=[...e.filter(s=>!t.has(s.id)),...this.handed.map(s=>s.row)].sort((s,n)=>n.created_at-s.created_at||n.id-s.id);return r`
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
          ${e.length>0?r`<button
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
    `}renderCard(e){const t=this.handed.find(n=>n.row.id===e.id);if(t){const n=t.to==="mana"?"Mana's":`${t.to.charAt(0).toUpperCase()}${t.to.slice(1)}'s`;return r`
        <li class="flex items-start gap-2.5 px-3 py-3 rounded-lg" role="status">
          <span class="mt-0.5 shrink-0 text-accent" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <p class="flex-1 min-w-0 text-sm text-muted leading-snug">
            Handed to an agent. ${n} inbox has it, and the next agent session there picks it up.
          </p>
        </li>
      `}const i=Hr(e.action),s=this.fresh.has(e.id);return r`
      <li class="group relative flex items-start gap-2.5 px-3 py-3 rounded-lg hover:bg-hover">
        <span
          class="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${s?"bg-blue-500":"bg-transparent"}"
          aria-label=${s?"New":c}
        ></span>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-ink leading-snug pr-6">${e.title}</p>
          ${e.body?r`<p class="text-xs text-muted mt-1 leading-snug whitespace-pre-line line-clamp-4">${e.body}</p>`:c}
          <div class="flex items-center justify-between gap-3 mt-1.5">
            <span class="text-[11px] text-muted truncate">${pm(e)} · ${mm(e.created_at)}</span>
            <button
              type="button"
              class="shrink-0 px-2 py-1 rounded-md text-xs font-semibold text-accent hover:bg-accent-soft"
              @click=${()=>this.act(e)}
            >${um(i)}</button>
          </div>
        </div>
        <button
          type="button"
          class="absolute top-2.5 right-2.5 p-1 rounded-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 text-muted hover:text-ink"
          aria-label="Dismiss"
          @click=${()=>this.dismiss(e.id)}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </li>
    `}};sn([d()],zi.prototype,"loaded",2);sn([d()],zi.prototype,"aboutOpen",2);sn([d()],zi.prototype,"handed",2);zi=sn([w("notifications-section")],zi);let cs;function gm(e){cs?.();const{anchor:t}=e,i=document.createElement("div");i.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(t).fontFamily,i.style.width=`${Math.min(232,window.innerWidth-16)}px`,i.style.maxHeight=`${window.innerHeight-16}px`,i.setAttribute("role","menu"),i.setAttribute("aria-label",`Options for ${e.label}`),document.body.appendChild(i);let s=!1,n=!1,o="";const a=(x=!1)=>{n||(n=!0,document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",g,!0),window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",p),xe(c,i),i.remove(),cs===l&&(cs=void 0),e.onClose(),x&&t.isConnected&&t.focus({preventScroll:!0}))},l=()=>a();cs=l;const h=x=>{!x.composedPath().includes(i)&&!x.composedPath().includes(t)&&a()},u=x=>{(!(x.target instanceof Node)||!i.contains(x.target))&&a()},p=()=>a(),m=()=>i.querySelector("button")?.focus({preventScroll:!0}),g=x=>{if(x.key==="Escape")x.preventDefault(),x.stopPropagation(),a(!0);else if(x.key==="Tab")a(!0);else if(i.contains(document.activeElement)&&["ArrowDown","ArrowUp","Home","End"].includes(x.key)){x.preventDefault();const N=[...i.querySelectorAll("button:not(:disabled)")],Z=N.indexOf(document.activeElement),je=x.key==="Home"?0:x.key==="End"?N.length-1:(Z+(x.key==="ArrowUp"?-1:1)+N.length)%N.length;N[je]?.focus()}},v=async()=>{if(!s){s=!0,o="",A();try{await e.onToggle(),a(!0)}catch{n||(s=!1,o="Could not update the sidebar. Please try again.",A(),m())}}},y=()=>{const x=t.getBoundingClientRect(),N=i.getBoundingClientRect();if(e.position){i.style.left=`${Math.max(8,Math.min(e.position.x,window.innerWidth-N.width-8))}px`,i.style.top=`${Math.max(8,Math.min(e.position.y,window.innerHeight-N.height-8))}px`;return}const Z=x.bottom+6+N.height>window.innerHeight-8?x.top-N.height-6:x.bottom+6;i.style.left=`${Math.max(8,Math.min(x.right-N.width,window.innerWidth-N.width-8))}px`,i.style.top=`${Math.max(8,Math.min(Z,window.innerHeight-N.height-8))}px`},A=()=>{xe(r`
      ${e.onArrange?r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        @click=${()=>{e.onArrange?.(),a(!0)}}>Arrange apps</button>`:c}
      <button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
        ?disabled=${s} @click=${()=>void v()}>${e.pinned?"Remove from sidebar":"Pin to sidebar"}</button>
      ${o?r`<p role="alert" class="px-3 pt-2 text-sm text-red-600">${o}</p>`:c}
    `,i),y()};return A(),document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",g,!0),window.addEventListener("scroll",u,!0),window.addEventListener("resize",p),m(),l}var bm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,is=(e,t,i,s)=>{for(var n=s>1?void 0:s?vm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&bm(t,i,n),n};let pi=class extends T{constructor(){super(...arguments),this.heldUntil=0,this.saving=!1,this.editing=!1,this.error="",this.announcement="",this.drag=new jo(this,{type:"text/x-mana-tool-index",axis:"x",hitTest:(e,t)=>{for(const i of this.renderRoot.querySelectorAll("[data-tool-index]")){const s=i.getBoundingClientRect();if(e>=s.left&&e<=s.right&&t>=s.top&&t<=s.bottom){const n=Number(i.dataset.toolIndex);return{id:n,index:n,rect:s}}}return null},onReorder:(e,t)=>this.reorder(e,t)})}visibleTools(){return f.getState().tools.filter(e=>this.placeable(e))}async reorder(e,t){if(this.saving)return;const i=this.visibleTools(),s=i[e];if(!s)return;const n=i.filter(a=>a.name!==s.name),o=Math.max(0,Math.min(n.length,t-(e<t?1:0)));this.saving=!0,this.error="";try{await f.getState().reorderTool(s.name,n[o]?.name??null),this.announcement=`${s.label||s.name} moved to position ${o+1}`,this.saving=!1,await this.updateComplete,Array.from(this.renderRoot.querySelectorAll("a[data-tool-name]")).find(a=>a.dataset.toolName===s.name)?.focus()}catch{this.error="Could not save the tool order. Please try again."}finally{this.saving=!1}}moveWithKey(e,t){const i=getComputedStyle(this.renderRoot.querySelector("[data-tools-grid]")).gridTemplateColumns.split(" ").length,s=e.key==="ArrowLeft"?-1:e.key==="ArrowRight"?1:e.key==="ArrowUp"?-i:e.key==="ArrowDown"?i:0;if(!s)return;e.preventDefault();const n=Math.max(0,Math.min(this.visibleTools().length-1,t+s));n!==t&&this.reorder(t,n>t?n+1:n)}connectedCallback(){super.connectedCallback(),f.getState().loadTools(),this.unsub=F(this,f,e=>e.tools)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.cancelPress?.(),this.dismissMenu?.()}placeable(e){return e.type!=="view"||!!e.panel}async toggle(e){if(this.saving)return;this.saving=!0,this.error="";const t=e.placement==="cockpit"?"standalone":"cockpit";try{await f.getState().setToolPlacement(e.name,t)}finally{this.saving=!1,await this.updateComplete}}showMenu(e,t){this.dismissMenu?.(),this.dismissMenu=gm({label:e.label||e.name,pinned:e.placement==="cockpit",anchor:t.currentTarget,position:t instanceof MouseEvent&&t.type==="contextmenu"&&(t.clientX||t.clientY)?{x:t.clientX,y:t.clientY}:void 0,onToggle:()=>this.toggle(e),onArrange:()=>{this.editing=!0},onClose:()=>{this.dismissMenu=void 0}})}onIconPress(e,t){if(this.saving||e.button!==0)return;this.cancelPress?.();const i=e.currentTarget.closest("a");if(this.editing){this.drag.onPointerDown(e,t,i);return}const s=()=>{clearTimeout(o),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),this.cancelPress=void 0},n=a=>{a.pointerId===e.pointerId&&Math.hypot(a.clientX-e.clientX,a.clientY-e.clientY)>8&&s()},o=setTimeout(()=>{s(),this.dismissMenu?.(),this.editing=!0,this.heldUntil=Date.now()+1e3,this.announcement="Arrange apps. Drag an icon or use the arrow keys. Choose Done when finished.",this.drag.onPointerDown(e,t,i)},450);this.cancelPress=s,window.addEventListener("pointermove",n),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}render(){const e=this.visibleTools();return r`
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
            ${e.map((t,i)=>this.tile(t,i))}
          </div>
        </div>
      </div>
    `}tile(e,t){const i=Va(e),s=e.label||e.name,n={notify:"red",goals:"orange",circle:"indigo",finance:"green","been-to":"teal",grocery:"blue",members:"pink",learn:"violet",office:"slate",publisher:"teal"};return r`
      <div class="mana-launcher-tile ${this.drag.dropClass(t)}" data-tool-index=${t}>
        <a href=${i||e.target}
          class="mana-launcher-app" aria-label=${this.editing?`Reorder ${s}`:s} draggable="false" data-tool-name=${e.name}
          aria-description=${this.editing?"Drag the icon or use arrow keys to move.":"Press and hold to arrange apps. Right-click for sidebar options."}
          @keydown=${o=>{this.editing&&this.moveWithKey(o,t)}}
          @contextmenu=${o=>{o.preventDefault(),this.cancelPress?.(),Date.now()>this.heldUntil&&this.showMenu(e,o)}}
          @click=${o=>{this.editing&&o.preventDefault()}}>
          <span class="mana-launcher-icon" data-colour=${n[e.name]||"blue"} @pointerdown=${o=>this.onIconPress(o,t)}>
            <sc-icon name="lucide-${e.icon||"layout-grid"}"></sc-icon>
          </span>
          <span class="mana-launcher-label">${s}
            ${i?c:r`<sc-icon name="lucide-external-link" class="w-3 h-3 align-middle"></sc-icon>`}
          </span>
        </a>

      </div>
    `}};is([d()],pi.prototype,"saving",2);is([d()],pi.prototype,"editing",2);is([d()],pi.prototype,"error",2);is([d()],pi.prototype,"announcement",2);pi=is([w("tools-launcher")],pi);var ym=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,nn=(e,t,i,s)=>{for(var n=s>1?void 0:s?xm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ym(t,i,n),n};let qi=class extends T{constructor(){super(...arguments),this.config=null,this.height="200px",this.label="Finance chart",this.chart=null,this.gen=0}render(){return r`<div style="position:relative;height:${this.height};width:100%"><canvas role="img" aria-label=${this.label}></canvas></div>`}async updated(){const e=++this.gen,t=this.querySelector("canvas");if(!t||(this.chart&&(this.chart.destroy(),this.chart=null),!this.config))return;const{Chart:i}=await Le(async()=>{const{Chart:s}=await import("./auto-DhYMk4xX.js");return{Chart:s}},[]);e!==this.gen||!this.isConnected||(this.chart=new i(t,{...this.config,options:{...this.config.options,animation:!1}}))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};nn([b({attribute:!1})],qi.prototype,"config",2);nn([b({type:String})],qi.prototype,"height",2);nn([b({type:String})],qi.prototype,"label",2);qi=nn([w("finance-chart")],qi);var wm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,st=(e,t,i,s)=>{for(var n=s>1?void 0:s?km(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&wm(t,i,n),n};const $m=240,Sm=160;let qe=class extends T{constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this.flipUp=!1,this._onDoc=e=>{this.open&&!this.contains(e.target)&&this.close()},this._onReflow=e=>{this.open&&(e&&e.target instanceof Node&&this.contains(e.target)||this.close())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0)}close(){this.open=!1,this.q=""}toggle(e){if(e.stopPropagation(),this.open){this.close();return}const t=e.currentTarget.getBoundingClientRect(),i=window.innerWidth,n=window.innerHeight-t.bottom,o=t.top;this.flipUp=n<$m+8&&o>n,this.py=this.flipUp?Math.max(8,t.top-4):t.bottom+4,this.px=Math.max(8,Math.min(t.left,i-Sm-8)),this.open=!0}pick(e){this.value=e,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:e,bubbles:!0,composed:!0}))}updated(){this.open&&!window.matchMedia("(pointer: coarse)").matches&&this.querySelector("input.cs-search")?.focus()}render(){const e=this.q.trim().toUpperCase(),t=this.options.length?this.options:this.saved,i=e?t.filter(s=>s.includes(e)):[...this.saved.filter(s=>t.includes(s)),...t.filter(s=>!this.saved.includes(s))];return r`
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
    `}};st([b({type:String})],qe.prototype,"value",2);st([b({type:String})],qe.prototype,"name",2);st([b({attribute:!1})],qe.prototype,"options",2);st([b({attribute:!1})],qe.prototype,"saved",2);st([d()],qe.prototype,"open",2);st([d()],qe.prototype,"q",2);st([d()],qe.prototype,"px",2);st([d()],qe.prototype,"py",2);st([d()],qe.prototype,"flipUp",2);qe=st([w("currency-select")],qe);var Tm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,D=(e,t,i,s)=>{for(var n=s>1?void 0:s?Cm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Tm(t,i,n),n};const Em=["expenses","fixed","savings","donut"],Dm={expenses:1,fixed:1,savings:1,donut:2},zr=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],qr=e=>zr[e%zr.length],Am=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],ds=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],Pm=["type","amount","frequency","next","category"];function Ye(){return new Date().toISOString().slice(0,7)}function Kr(e,t){const[i,s]=e.split("-").map(Number),n=new Date(Date.UTC(i,s-1+t,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function Ei(e){const[t,i]=e.split("-").map(Number);return!t||!i?e:new Date(Date.UTC(t,i-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric",timeZone:"UTC"})}let C=class extends T{constructor(){super(...arguments),this.tab="budget",this.month=Ye(),this.loading=!0,this.loadError=!1,this.loadRevision=0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.logDay=new Date().getDate(),this.networth=null,this.recurring=[],this.recurringLoaded=!1,this.recurringIncome=null,this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.savingTxn=!1,this.saveError="",this.savingAccount=!1,this.confirmDelete=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...Pm],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.recurringAsPaid=!1,this.showColMenu=!1,this.showEnded=!1,this.budgetLayout=null,this.dragCardId=null,this.dropTarget=null,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=e=>{e.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=e=>{const t=e.detail;t&&(this.lastCurrency=t,!this.currencies.includes(t)&&this.supportedCurrencies.includes(t)&&this.saveCurrencies([...this.currencies,t]))},this.onCardDragEnd=()=>{this.dragCardId=null,this.dropTarget=null}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const e=await fetch("/api/finance/settings");if(!e.ok)return;const t=await e.json();Array.isArray(t.currencies)&&t.currencies.length&&(this.currencies=t.currencies),Array.isArray(t.supportedCurrencies)&&(this.supportedCurrencies=t.supportedCurrencies),t.lastCurrency&&(this.lastCurrency=t.lastCurrency),t.baseCurrency&&(this.base=t.baseCurrency),t.recurringColumns&&t.recurringColumns.length&&(this.recurringColumns=t.recurringColumns),t.cards&&(this.cards={...this.cards,...t.cards}),typeof t.recurringAsPaid=="boolean"&&(this.recurringAsPaid=t.recurringAsPaid),Array.isArray(t.budgetLayout)&&t.budgetLayout.length&&(this.budgetLayout=t.budgetLayout)}catch{}}renderCurrencySelect(e){const t=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return r`<currency-select name="currency" .value=${e} .saved=${this.currencies}
      .options=${t.includes(e)?t:[e,...t]}></currency-select>`}async changeBaseCurrency(e){await this.post("/base-currency",{currency:e}),await this.loadSettings(),await this.refresh()}async saveCurrencies(e){await this.post("/currencies",{currencies:e}),await this.loadSettings()}addCurrency(e){!e||this.currencies.includes(e)||this.saveCurrencies([...this.currencies,e])}removeCurrency(e){e!==this.base&&this.saveCurrencies(this.currencies.filter(t=>t!==e))}toggleCard(e){this.cards={...this.cards,[e]:!this.cards[e]},this.post("/cards",{cards:{[e]:this.cards[e]}})}toggleRecurringAsPaid(){this.recurringAsPaid=!this.recurringAsPaid,(async()=>(await this.post("/recurring-as-paid",{value:this.recurringAsPaid}),await this.refresh()))()}renderSettings(){const e=this.supportedCurrencies.filter(i=>!this.currencies.includes(i)),t=[["savingsGoal","Savings goal"],["fixedPayments","Fixed payments"],["expenseDonut","Expense breakdown"]];return r`
      <section class="mana-card fin-settings" id="finance-settings">
        <div class="fin-card-header">
          <h2>Finance settings</h2>
          <button type="button" class="fin-icon-btn" aria-label="Close Finance settings"
            @click=${()=>{this.showSettings=!1}}><sc-icon name="lucide-x" aria-hidden="true"></sc-icon></button>
        </div>
        <div class="fin-settings-grid">
          <label for="finance-base">Base currency</label>
          <select id="finance-base" class="fin-field"
            @change=${i=>void this.changeBaseCurrency(i.target.value)}>
            ${(this.supportedCurrencies.length?this.supportedCurrencies:this.currencies).map(i=>r`<option value=${i} ?selected=${i===this.base}>${i}</option>`)}
          </select>
          <span>My currencies</span>
          <div class="fin-currencies">
            ${this.currencies.map(i=>r`<span>
              ${i}
              ${i!==this.base?r`<button type="button" class="fin-icon-btn" aria-label=${`Remove ${i}`}
                @click=${()=>this.removeCurrency(i)}><sc-icon name="lucide-x" aria-hidden="true"></sc-icon></button>`:c}
            </span>`)}
            ${e.length?r`<select class="fin-field" aria-label="Add currency"
              @change=${i=>{const s=i.target;s.value&&this.addCurrency(s.value),s.value=""}}>
              <option value="">Add currency</option>
              ${e.map(i=>r`<option value=${i}>${i}</option>`)}
            </select>`:c}
          </div>
          <h3>Budget</h3>
          <span>Expense categories</span>
          <button type="button" class="fin-text-btn justify-self-start" aria-label="Edit categories"
            @click=${()=>{this.showSettings=!1,this.setTab("budget"),this.editingGoals||this.toggleEditGoals()}}>Edit</button>
          ${t.map(([i,s])=>r`<span>${s}</span>
            <sc-toggle .label=${s} .checked=${this.cards[i]} @sc-change=${()=>this.toggleCard(i)}></sc-toggle>`)}
          <span class="fin-settings-info">Count recurring payments as spent
            <button type="button" class="fin-icon-btn" aria-label="About counting recurring payments as spent"
              popovertarget="finance-recurring-help"><sc-icon name="lucide-info" aria-hidden="true"></sc-icon></button>
            <span id="finance-recurring-help" popover="auto" class="fin-info-popover">Include this month’s recurring expenses in Spent from day one. Otherwise, they appear as due until paid.</span>
          </span>
          <sc-toggle label="Count recurring payments as spent" .checked=${this.recurringAsPaid} @sc-change=${()=>this.toggleRecurringAsPaid()}></sc-toggle>
        </div>
      </section>`}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(e){["tab","month","yearN","expandedCat","showIncome","budget"].some(i=>e.has(i))&&this.publishView()}publishView(){const e={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let t;if(this.tab==="budget"){if(t=`${Ei(this.month)}`,this.showIncome&&(t+=", income panel open"),this.expandedCat!=null){const i=this.budget?.categories.find(s=>s.id===this.expandedCat);t+=`, expanded category "${i?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?t=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?t=`${Ei(this.month)} · accounts grouped by bucket + net-worth trend`:t="recurring income/expenses table";f.getState().setViewContext({tool:"finance",summary:`Finance · ${e[this.tab]} tab · ${t}`})}async refresh(){const e=++this.loadRevision,{tab:t,month:i,yearN:s}=this,n=()=>e===this.loadRevision,o=async a=>{const l=await fetch(`/api/finance${a}`);if(!l.ok)throw new Error("Finance request failed");return l.json()};this.loading=!0,this.loadError=!1;try{if(t==="budget"){const a=await o(`/budget?month=${i}`);if(!n())return;this.budget=a,this.base=a.baseCurrency,await Promise.all([this.expandedCat==null?void 0:this.loadCatTxns(this.expandedCat),this.showIncome?this.loadIncomeTxns():void 0])}else if(t==="networth"){const a=await o(`/networth?month=${i}`);if(!n())return;this.networth=a,this.base=a.baseCurrency}else if(t==="recurring"){const[a,l,h]=await Promise.all([o("/recurring"),o("/settings").catch(()=>null),o(`/budget?month=${Ye()}`).catch(()=>null)]);if(!n())return;this.recurring=a.items,this.recurringLoaded=!0,l?.recurringColumns?.length&&(this.recurringColumns=l.recurringColumns),this.recurringIncome=h?h.income.actual+(h.income.committed??0):null,h&&(this.base=h.baseCurrency)}else{const a=await o(`/year?year=${s}`);if(!n())return;this.year=a,this.base=a.baseCurrency}}catch{n()&&(this.loadError=!0)}finally{n()&&(this.loading=!1)}}async loadCatTxns(e){const t=this.month;try{const i=await fetch(`/api/finance/transactions?month=${t}&categoryId=${e}`);if(!i.ok)return;const{items:s}=await i.json();this.month===t&&this.expandedCat===e&&(this.catTxns=s)}catch{}}async loadIncomeTxns(){const e=this.month;try{const t=await fetch(`/api/finance/transactions?month=${e}&type=income`);if(!t.ok)return;const{items:i}=await t.json();this.month===e&&this.showIncome&&(this.incomeTxns=i)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&(this.incomeTxns=[],await this.loadIncomeTxns())}async post(e,t){await fetch(`/api/finance${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async del(e){await fetch(`/api/finance${e}`,{method:"DELETE"})}async patch(e,t){await fetch(`/api/finance${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}fmt(e,t=this.base,i=0){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:0,maximumFractionDigits:i}).format(e)}catch{return`${Math.round(e)} ${t}`}}fmtShort(e){const t=Math.abs(e),i=t>=1e3?`${(e/1e3).toFixed(t>=1e4?0:1)}k`:String(Math.round(e));return`${this.base==="EUR"?"€":""}${i}`}stat(e,t){return r`<div class="fin-stat">
      <span>${e}</span>
      <strong class="tabular-nums">${this.fmt(t,this.base,2)}</strong>
    </div>`}summary(e,t,i=c){return r`<section class="fin-summary" aria-label=${e}>
      <div class="fin-headline">
        <span>${e}</span>
        <strong class="tabular-nums ${t<0?"fin-negative":""}">${this.fmt(t,this.base,2)}</strong>
      </div>
      ${i}
    </section>`}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const i=[.../\u200D/.test(e)?e:e.replace(/\uFE0F/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderIcon(e){if(!e)return r`<span class="text-muted text-sm">•</span>`;const t=this.iconUrl(e);return t?r`<img src=${t} alt="" class="w-5 h-5 select-none" draggable="false" />`:r`<span class="text-sm">${e}</span>`}setTab(e){this.tab!==e&&(this.tab=e,this.saveError="",this.showColMenu=!1,this.querySelector(".fin-scroll")?.scrollTo({top:0}),this.refresh())}toggleSettings(){this.showSettings=!this.showSettings,this.showSettings&&this.updateComplete.then(()=>{this.querySelector(".fin-scroll")?.scrollTo({top:0})})}gotoMonth(e){this.month=Kr(this.month,e),this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const e=Ye();this.month!==e&&(this.month=e,this.logDay=this.defaultLogDay(),this.expandedCat=null,this.editingSavings=!1,this.refresh())}daysInMonth(e){const[t,i]=e.split("-").map(Number);return new Date(Date.UTC(t,i,0)).getUTCDate()}defaultLogDay(){return this.month===Ye()?new Date().getDate():this.daysInMonth(this.month)}stepDay(e){const t=this.daysInMonth(this.month);this.logDay=Math.min(t,Math.max(1,this.logDay+e))}fmtLogDay(){const[e,t]=this.month.split("-").map(Number),i=Math.min(this.logDay,this.daysInMonth(this.month));return new Date(Date.UTC(e,t-1,i)).toLocaleDateString(void 0,{weekday:"short",day:"numeric",timeZone:"UTC"})}renderDayPicker(){return r`
      <div class="fin-day-picker" role="group" aria-label="Transaction date">
        <button type="button" class="fin-icon-btn" aria-label="Earlier day"
          @click=${()=>this.stepDay(-1)}>‹</button>
        <span class="min-w-[3.25rem] text-center text-sm tabular-nums text-ink select-none">${this.fmtLogDay()}</span>
        <button type="button" class="fin-icon-btn" aria-label="Later day"
          @click=${()=>this.stepDay(1)}>›</button>
      </div>
    `}async toggleCat(e){if(this.expandedCat===e){this.expandedCat=null,this.catTxns=[];return}this.catTxns=[],this.expandedCat=e,await this.loadCatTxns(e)}async addCategory(){const e=this.newCat.trim();e&&(await this.post("/category",{name:e,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(e,t){if(e==="new"){this.newCatIcon=t,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${e}`,{icon:t||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(e,t){const i=t.trim();i&&this.patch(`/category/${e}`,{name:i})}renderEmojiPalette(e){return r`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${t=>t.stopPropagation()}>
        ${Am.map(t=>r`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(e,t)}>${t}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(e,"")}>none</button>
      </div>
    `}async logTxn(e,t,i,s,n,o){if(!Number.isFinite(i)||i<=0)return;if(!(await fetch("/api/finance/transaction",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({type:t,amount:i,currency:s||this.base,categoryId:e,name:n,date:o})})).ok)throw new Error("Transaction save failed");await this.refresh()}async setBudget(e,t){Number.isFinite(t)&&(await this.post("/budget",{categoryId:e,amount:t,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(e,t){!Number.isFinite(t)||t<0||this.post("/budget",{categoryId:e,amount:t,month:this.month})}async deleteTxn(e){await this.del(`/transaction/${e}`),await this.refresh()}startEditTxn(e){e.recurring_id==null&&(this.editingTxnId=e.id)}onSaveTxn(e,t){e.preventDefault();const i=e.target,s=i.elements.namedItem("date")?.value||t.date,n=i.elements.namedItem("name")?.value.trim()??"",o=Number(i.elements.namedItem("amount")?.value),a=(i.elements.namedItem("currency")?.value||t.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(t.id,{date:s,name:n,amount:o,currency:a})}async saveTxnEdit(e,t){await this.patch(`/transaction/${e}`,t),this.editingTxnId=null,await this.refresh()}async archiveCategory(e){await this.patch(`/category/${e.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(e){await this.patch(`/category/${e}`,{active:1}),await this.refresh()}deleteCategoryHard(e){this.confirmDelete={path:`/category/${e.id}`,title:`Delete ${e.name}?`,detail:"This permanently removes the category."}}async removeConfirmed(){const e=this.confirmDelete;if(e)try{if(!(await fetch(`/api/finance${e.path}`,{method:"DELETE"})).ok)throw new Error("Delete failed");this.confirmDelete=null,this.editingRecurId=null,await this.refresh()}catch{this.confirmDelete=null,this.saveError="Couldn’t delete the item. Try again."}}onQuickAdd(e,t,i){e.preventDefault();const s=e.target,n=Number(s.elements.namedItem("amount")?.value),o=(s.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),a=s.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o;const l=Math.min(this.logDay,this.daysInMonth(this.month)),h=`${this.month}-${String(l).padStart(2,"0")}`;!Number.isFinite(n)||n<=0||this.savingTxn||(this.savingTxn=!0,this.saveError="",this.logTxn(t,i,n,o,a,h).then(()=>s.reset()).catch(()=>{this.saveError="Couldn’t log the transaction. Try again."}).finally(()=>{this.savingTxn=!1}))}renderBar(e){return r`
      <div class="h-1.5 w-full rounded-full bg-line overflow-hidden">
        <div class="h-full rounded-full bg-accent-auto" style="width:${Math.min(100,e)}%"></div>
      </div>
    `}renderQuickAdd(e,t){return r`
      <form class="fin-quick-add" @submit=${i=>this.onQuickAdd(i,e,t)}>
        <div>
          <label>Amount<input name="amount" type="number" min="0.01" step="any" inputmode="decimal" required class="fin-field" /></label>
          ${this.renderCurrencySelect(this.lastCurrency)}
          ${this.renderDayPicker()}
        </div>
        <div>
          <label>Description<input name="name" type="text" class="fin-field" /></label>
          <button type="submit" class="fin-primary" ?disabled=${this.savingTxn}>Log ${t}</button>
        </div>
      </form>
    `}renderTxnRow(e){const t=e.recurring_id!=null;return this.editingTxnId===e.id?r`
        <li class="py-1">
          <form class="flex flex-wrap items-center gap-1.5 text-sm" @submit=${i=>this.onSaveTxn(i,e)}>
            <mana-date-picker name="date" label="Date" .value=${e.date}
              field-class="px-1.5 py-1 text-xs bg-surface border border-line rounded"></mana-date-picker>
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
          ${t?r`<span class="not-italic" title="Recurring — manage in the Recurring tab">↻ </span>`:c}${e.name||(e.type==="income"?"income":"—")}
        </span>
        <span class="shrink-0 tabular-nums ${t?"":"cursor-pointer"} ${e.type==="income"?"text-green-600":t?"text-muted":"text-ink"}"
          @click=${()=>this.startEditTxn(e)}>
          ${e.base!=null?this.fmt(e.base,this.base,2):this.fmt(e.original_amount,e.original_currency,2)}
        </span>
        ${e.original_currency!==e.baseCurrency?r`<span class="text-[10px] text-muted shrink-0">${e.original_amount} ${e.original_currency}</span>`:c}
        ${t?r`<span class="w-3 shrink-0"></span>`:r`<button type="button" class="text-[10px] text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 shrink-0"
              @click=${()=>void this.deleteTxn(e.id)} title="Delete">×</button>`}
      </li>
    `}renderCatTxns(){return this.catTxns.length?r`
      <ul class="px-3 pb-1">
        ${this.catTxns.map(e=>this.renderTxnRow(e))}
      </ul>
    `:r`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(e,t=!1){const i=this.editingGoals,s=this.expandedCat===e.id&&!i&&!t,n=e.committed??0,o=e.spent+n,a=e.budget>0&&o>e.budget,l=e.budget>0&&o>0,h=r`
      ${this.renderIcon(e.icon)}
      <span class="fin-category-name">${e.name}
        ${l?r`<span class="fin-category-progress" aria-hidden="true">
          <span class=${a?"fin-over":""} style="width:${Math.min(100,100*o/e.budget)}%"></span>
        </span>`:c}
      </span>`;return r`
      <li class="fin-row-item" data-category=${e.id}>
        <div class="fin-category-row ${s?"fin-row-open":""}">
          ${i?r`<div class="fin-category-identity">
            <button type="button" class="fin-icon-btn" aria-label=${`Change icon for ${e.name}`}
              @click=${u=>{u.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}>${this.renderIcon(e.icon)}</button>
            <input class="fin-field" type="text" aria-label=${`Name of ${e.name}`} .value=${e.name}
              @change=${u=>this.saveCatName(e.id,u.target.value)} />
          </div>`:t?r`<div class="fin-category-identity">${h}</div>`:r`<button type="button" class="fin-category-identity fin-category-trigger" aria-expanded=${s}
                @click=${()=>void this.toggleCat(e.id)}>${h}</button>`}
          <div class="fin-category-actual">
            ${e.spent||n?r`<strong class="tabular-nums ${a?"fin-negative":""}">${this.fmt(e.spent,this.base,2)}</strong>`:c}
            ${n>0?r`<small class="tabular-nums">${this.fmt(n,this.base,2)} due</small>`:c}
          </div>
          ${i?r`<input class="fin-field fin-goal-field tabular-nums" type="number" min="0" step="any" inputmode="decimal"
            aria-label=${`Budget goal for ${e.name}`} .value=${e.budget>0?String(e.budget):""}
            @change=${u=>this.saveGoalInline(e.id,Number(u.target.value))} />`:r`<span class="fin-category-goal tabular-nums">${e.budget>0?this.fmt(e.budget):c}</span>`}
          ${t?r`<div class="fin-category-actions">
            <button type="button" class="fin-text-btn" @click=${()=>void this.restoreCategory(e.id)}>Unhide</button>
            <button type="button" class="fin-text-btn fin-negative" @click=${()=>void this.deleteCategoryHard(e)}>Delete</button>
          </div>`:i?r`<div class="fin-category-actions">
            <button type="button" class="fin-text-btn" @click=${()=>void this.archiveCategory(e)}>Hide</button>
          </div>`:c}
        </div>
        ${i&&this.emojiPickerFor===e.id?this.renderEmojiPalette(e.id):c}
        ${s?r`<div class="fin-category-detail">
          ${this.renderQuickAdd(e.id,"expense")}
          ${this.renderCatTxns()}
        </div>`:c}
      </li>
    `}renderIncomePanel(){const e=this.budget?.income.committedItems??[],t=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),i=e.reduce((n,o)=>n+o.base,0),s=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mana-card overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] text-muted">Income · ${Ei(this.month)}</span>
          <span class="text-sm font-semibold tabular-nums text-emerald-600">${this.fmt(t+i)}</span>
        </div>
        ${this.incomeTxns.length||e.length?r`<ul class="px-3 py-1">
              ${this.incomeTxns.map(n=>this.renderTxnRow(n))}
              ${e.map(n=>r`
                <li class="flex items-center gap-2 py-1 text-sm italic text-muted" title="Expected recurring income">
                  <span class="text-xs w-16 shrink-0">${s(n.date)}</span>
                  <span class="flex-1 min-w-0 truncate"><span class="not-italic">↻ </span>${n.name}</span>
                  <span class="shrink-0 tabular-nums text-emerald-600/70">${this.fmt(n.base)}</span>
                  <span class="text-[10px] shrink-0">expected</span>
                </li>`)}
            </ul>`:r`<p class="px-4 py-2 text-xs text-muted">No income logged this month.</p>`}
        <div class="border-t border-line">${this.renderQuickAdd(null,"income")}</div>
      </div>
    `}presentCards(e){const t=this.cards.expenseDonut&&e.categories.some(i=>i.spent>0);return Em.filter(i=>i==="expenses"?!0:i==="savings"?this.cards.savingsGoal:i==="fixed"?this.cards.fixedPayments&&e.fixedPayments.count>0:t)}effectiveLayout(e){const t=this.presentCards(e),i=new Set(t),s=(this.budgetLayout??[]).filter(o=>i.has(o.id)).map(o=>({...o})),n=new Set(s.map(o=>o.id));for(const o of t)n.has(o)||s.push({id:o,span:Dm[o]});return s}layoutRows(e){const t=[];for(let i=0;i<e.length;){const s=e[i],n=e[i+1];s.span===1&&n&&n.span===1?(t.push([s,n]),i+=2):(t.push([s]),i+=1)}return t}async saveBudgetLayout(e){this.budgetLayout=e,await this.post("/budget-layout",{layout:e})}onCardDragStart(e,t){if(this.dragCardId=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t);const i=e.currentTarget.closest("[data-card]");i&&e.dataTransfer.setDragImage(i,24,16)}}dropModeFor(e,t){const i=t.getBoundingClientRect(),s=(e.clientX-i.left)/i.width,n=(e.clientY-i.top)/i.height;return s<.28?"beside-left":s>.72?"beside-right":n<.5?"stack-before":"stack-after"}onCardDragOver(e,t){if(!this.dragCardId||t===this.dragCardId)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move");const i=this.dropModeFor(e,e.currentTarget);(this.dropTarget?.id!==t||this.dropTarget?.mode!==i)&&(this.dropTarget={id:t,mode:i})}onCardDrop(e,t){e.preventDefault();const i=this.dragCardId,s=this.dropTarget?.mode;this.dragCardId=null,this.dropTarget=null,!(!i||!s||i===t||!this.budget)&&this.applyDrop(this.effectiveLayout(this.budget),i,t,s)}applyDrop(e,t,i,s){const n=e.find(h=>h.id===t);if(!n)return;const o=e.filter(h=>h.id!==t),a=o.findIndex(h=>h.id===i);if(a<0)return;const l={...n};s==="beside-left"||s==="beside-right"?(l.span=1,o[a].span=1,o.splice(s==="beside-left"?a:a+1,0,l)):(l.span=2,o.splice(s==="stack-before"?a:a+1,0,l)),this.saveBudgetLayout(o)}cardContent(e,t,i){return e==="expenses"?this.renderExpensesCard(t):e==="savings"?this.renderSavingsCard(t,i):e==="fixed"?this.renderFixedCard(t,i):this.renderExpenseDonut(t)}renderDropIndicator(e){const t="pointer-events-none absolute z-20 rounded-full bg-blue-500",i=e==="beside-left"?`${t} left-0 top-2 bottom-2 w-1`:e==="beside-right"?`${t} right-0 top-2 bottom-2 w-1`:e==="stack-before"?`${t} top-0 left-2 right-2 h-1`:`${t} bottom-0 left-2 right-2 h-1`;return r`<div class=${i}></div>`}tileWidthClass(e,t){return t.length===1||!t.some(s=>s.id==="expenses")||e==="expenses"?"flex-1 min-w-0 w-full":"w-full @2xl:w-64 @2xl:shrink-0"}renderCardTile(e,t,i){const s=this.dropTarget?.id===e?this.dropTarget.mode:null;return r`
      <div data-card=${e} class="group relative ${i}"
        @dragover=${n=>this.onCardDragOver(n,e)}
        @drop=${n=>this.onCardDrop(n,e)}>
        ${t}
        <button type="button" draggable="true" title="Drag to rearrange"
          class="hidden @2xl:flex absolute top-1.5 right-full z-10 h-6 w-4 items-center justify-center rounded-md
                 text-sm text-muted/60 hover:text-ink hover:bg-hover cursor-grab active:cursor-grabbing
                 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          aria-label="Drag to rearrange"
          @dragstart=${n=>this.onCardDragStart(n,e)}
          @dragend=${this.onCardDragEnd} @click=${n=>n.stopPropagation()}>
          <sc-icon name="lucide-grip-vertical"></sc-icon>
        </button>
        ${s?this.renderDropIndicator(s):c}
      </div>
    `}renderCardGrid(e,t){const i=this.layoutRows(this.effectiveLayout(e));return r`
      <div class="flex flex-col gap-3">
        ${i.map(s=>r`<div class="flex flex-col @2xl:flex-row gap-3 items-stretch @2xl:items-start">
            ${s.map(n=>this.renderCardTile(n.id,this.cardContent(n.id,e,t),this.tileWidthClass(n.id,s)))}
          </div>`)}
      </div>
    `}renderExpensesCard(e){const t=e.categories.filter(s=>s.active===1),i=e.categories.filter(s=>s.active===0);return r`
      <section class="mana-card fin-expenses" aria-label="Expenses">
        <div class="fin-card-header">
          <h2>Expenses</h2>
          ${this.editingGoals?r`<button type="button" class="fin-text-btn"
            @click=${()=>this.toggleEditGoals()}>Done</button>`:c}
        </div>
        ${this.editingGoals?r`
              ${this.emojiPickerFor==="new"?this.renderEmojiPalette("new"):c}
              <div class="flex gap-2 px-3 py-2 border-t border-line">
                <button type="button" class="w-9 h-9 shrink-0 rounded-lg border border-line flex items-center justify-center hover:bg-hover"
                  aria-label="Pick an icon" @click=${()=>{this.emojiPickerFor=this.emojiPickerFor==="new"?null:"new"}}>
                  ${this.newCatIcon?this.renderIcon(this.newCatIcon):this.renderIcon("🙂")}
                </button>
                <input type="text" placeholder="Category name" aria-label="Category name" .value=${this.newCat}
                  class="flex-1 min-w-0 px-3 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink"
                  @input=${s=>{this.newCat=s.target.value}}
                  @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),this.addCategory())}} />
                <button type="button" class="fin-primary"
                  @click=${()=>void this.addCategory()}>Add category</button>
              </div>`:c}
        ${t.length?r`<div class="fin-category-row fin-category-head">
          <span>Category</span><span>Spent</span><span>Goal</span>
        </div>`:c}
        <ul>
          ${t.length?t.map(s=>this.renderCategory(s)):r`<li class="fin-empty">Add a category to start logging expenses.</li>`}
        </ul>
        ${i.length?r`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden categories (${i.length})</button>
                ${this.showHidden?r`<ul>${i.map(s=>this.renderCategory(s,!0))}</ul>`:c}
              </div>`:c}
      </section>
    `}renderBudget(){const e=this.budget;if(!e)return c;const t=e.income.actual+(e.income.committed??0);return r`
      ${this.summary("Left to spend",e.leftToSpend,r`<div class="fin-stats">
        <button type="button" class="fin-stat fin-income" aria-expanded=${this.showIncome} aria-label="View and log income"
          @click=${()=>void this.toggleIncome()}>
          <span>Income <sc-icon name="lucide-${this.showIncome?"chevron-up":"chevron-down"}" aria-hidden="true"></sc-icon></span>
          <strong class="tabular-nums">${this.fmt(t)}</strong>
        </button>
        ${this.stat("Spent",e.totalSpent)}
      </div>`)}
      ${this.showIncome?this.renderIncomePanel():c}
      ${this.renderCardGrid(e,t)}
    `}onSaveSavings(e){e.preventDefault();const t=e.target,i=Number(t.elements.namedItem("amount").value);!Number.isFinite(i)||i<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:i}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(e,t){const i=e.savingsGoal,s=t-e.totalSpent-e.totalCommitted,n=i&&i>0?Math.round(s/i*100):0;return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between">
          <h2 class="fin-card-subtitle">Savings goal</h2>
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
    `}renderFixedCard(e,t){const i=e.fixedPayments,s=t>0?Math.round(i.total/t*100):0,n=o=>new Date(`${o}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between gap-2">
          <h2 class="fin-chart-title">Fixed payments</h2>
          ${t>0?r`<span class="text-xs tabular-nums text-muted">${s}% of income</span>`:c}
        </div>
        <div class="mt-1 text-lg font-bold tabular-nums text-ink">${this.fmt(i.total)}</div>
        ${i.items.length?r`<ul class="mt-1.5 space-y-0.5 max-h-56 overflow-y-auto">
              ${i.items.map(o=>r`<li class="flex items-center gap-2 text-xs">
                <span class="text-muted w-12 shrink-0 tabular-nums">${n(o.date)}</span>
                <span class="flex-1 min-w-0 truncate text-ink">${o.name}</span>
                <span class="shrink-0 tabular-nums text-muted">${this.fmt(o.base)}</span>
              </li>`)}
            </ul>`:c}
      </div>
    `}renderExpenseDonut(e){const t=e.categories.filter(s=>s.spent>0).sort((s,n)=>n.spent-s.spent);if(!t.length)return c;const i={type:"doughnut",data:{labels:t.map(s=>s.name),datasets:[{data:t.map(s=>Math.round(s.spent)),backgroundColor:t.map((s,n)=>qr(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:s=>`${s.label}: ${this.fmt(Number(s.parsed))}`}}}}};return r`
      <div class="mana-card px-4 py-3">
        <div class="flex items-baseline justify-between mb-1">
          <h2 class="fin-card-subtitle">Expense breakdown</h2>
          <span class="text-[11px] tabular-nums text-muted">${this.fmt(e.totalSpent)}</span>
        </div>
        <finance-chart label="Spending by category" .config=${i} height="200px"></finance-chart>
      </div>
    `}onAddAccount(e){e.preventDefault();const t=e.target,i=t.elements.namedItem("name").value.trim(),s=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),n=t.elements.namedItem("bucket").value,o=t.elements.namedItem("subtype").value.trim(),a=Number(t.elements.namedItem("openingBalance").value);if(!i||!s||!Number.isFinite(a)||a<=0||this.savingAccount)return;const l=`${this.month}-${String(this.month===Ye()?new Date().getDate():1).padStart(2,"0")}`,h=n==="Debts"?"debt":"asset";(async()=>{this.savingAccount=!0,this.saveError="";try{if(!(await fetch("/api/finance/account",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i,currency:s,type:h,bucket:n,subtype:o||null,openingBalance:a,date:l})})).ok)throw new Error("Account save failed");this.showAccountAdd=!1,await this.refresh()}catch{this.saveError="Couldn’t save the account. Try again."}finally{this.savingAccount=!1}})()}onSetBalance(e,t){t.preventDefault();const i=t.target,s=Number(i.elements.namedItem("amount").value);Number.isFinite(s)&&(async()=>(await this.post("/networth",{accountId:e,amount:s}),this.editingBalanceId=null,await this.refresh()))()}renderNwAccount(e){const t=this.editingBalanceId===e.id;return r`
      <li class="border-b border-line/60 last:border-0">
        <button type="button" class="fin-account-row" aria-expanded=${t}
          @click=${()=>{this.editingBalanceId=t?null:e.id}}>
          <span class="flex-1 min-w-0 truncate">
            <span class="text-sm text-ink">${e.name}</span>
            ${e.subtype?r`<span class="ml-1.5 text-[10px] text-muted">${e.subtype}</span>`:c}
          </span>
          <span class="text-sm font-semibold shrink-0 tabular-nums ${e.type==="debt"?"text-red-500":"text-ink"}">
            ${e.base!=null?this.fmt(e.base,this.base,2):this.fmt(e.original,e.currency,2)}
          </span>
        </button>
        ${t?r`
              <form class="fin-form flex gap-2 items-center flex-wrap px-4 py-2 bg-bg/40 border-t border-line"
                @submit=${i=>this.onSetBalance(e.id,i)}>
                <span class="text-[10px] text-muted">Balance</span>
                <input name="amount" type="number" step="any" inputmode="decimal" aria-label="Balance" .value=${String(e.original)}
                  class="w-28 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${e.currency}</span>
                <span class="text-[10px] text-muted">last: ${e.asOf}</span>
                <button type="submit" class="ml-auto px-2.5 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save (today)</button>
              </form>`:c}
      </li>
    `}renderNetworth(){const e=this.networth;return e?r`
      ${this.summary("Net worth",e.total,r`<div class="fin-stats">
        ${this.stat("Assets",e.groups.filter(t=>t.bucket!=="Debts").reduce((t,i)=>t+i.total,0))}
        ${this.stat("Debts",Math.abs(e.groups.find(t=>t.bucket==="Debts")?.total??0))}
      </div>`)}

      <section aria-label="Accounts">
        <div class="fin-card-header fin-section-header">
          <h2>Accounts</h2>
          <button type="button" class="fin-primary" aria-expanded=${this.showAccountAdd}
            @click=${()=>{this.showAccountAdd=!this.showAccountAdd}}>
            <sc-icon name="lucide-plus" aria-hidden="true"></sc-icon> Add account</button>
        </div>
        ${this.showAccountAdd?r`
              <form class="fin-form flex flex-wrap gap-2 items-center px-3 py-2 rounded-xl border border-line bg-bg/40" @submit=${t=>this.onAddAccount(t)}>
                <input name="name" aria-label="Account name" placeholder="Account name" required autofocus
                  class="flex-1 min-w-[8rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="bucket" aria-label="Account group" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="Liquid Assets">Liquid Assets</option>
                  <option value="Investments">Investments</option>
                  <option value="Physical Assets">Physical Assets</option>
                  <option value="Debts">Debts</option>
                </select>
                <input name="subtype" aria-label="Account type" list="nw-subtypes" placeholder="Account type (optional)"
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <datalist id="nw-subtypes">
                  <option value="Bank Account"></option><option value="Cash"></option><option value="Crypto"></option>
                  <option value="Stocks"></option><option value="Gold Investment"></option><option value="Vehicles"></option>
                  <option value="Primary Residence"></option><option value="Silver"></option>
                </datalist>
                <input name="openingBalance" type="number" inputmode="decimal" min="0.01" step="any" required
                  aria-label="Opening balance" placeholder="Opening balance" class="fin-field fin-opening-balance" />
                <button type="submit" class="fin-primary" ?disabled=${this.savingAccount}>Add account</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showAccountAdd=!1}}>Cancel</button>
              </form>`:c}
        ${e.groups.length?r`<div class="fin-account-grid">
          ${e.groups.map(t=>r`<section class="mana-card">
            <div class="fin-card-header"><h3>${t.bucket}</h3>
              <strong class="tabular-nums ${t.total<0?"fin-negative":""}">${this.fmt(t.total)}</strong>
            </div>
            <ul>${t.accounts.map(i=>this.renderNwAccount(i))}</ul>
          </section>`)}
        </div>`:r`<p class="fin-empty">Add an account to track its balance.</p>`}
      </section>
      ${this.renderNetworthChart(e)}
    `:r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(e){if(e.series.length<2)return c;const t=e.series.slice(-24),i=["Liquid Assets","Investments","Physical Assets","Debts"],s={"Liquid Assets":"#6366f1",Investments:"#10b981","Physical Assets":"#f59e0b",Debts:"#ef4444"},n={type:"bar",data:{labels:t.map(o=>o.month),datasets:i.map(o=>({label:o,data:t.map(a=>Math.round(a.buckets[o]??0)),backgroundColor:s[o]}))},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:10,font:{size:10}}},tooltip:{callbacks:{label:o=>`${o.dataset.label}: ${this.fmt(Number(o.parsed.y))}`}}},scales:{x:{stacked:!0,ticks:{maxTicksLimit:8,font:{size:10}},grid:{display:!1}},y:{stacked:!0,ticks:{callback:o=>this.fmtShort(Number(o)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return r`
      <div class="mana-card fin-chart-card">
        <h2 class="fin-chart-title">Net worth over time</h2>
        <finance-chart label="Net worth by account group over time" .config=${n} height="220px"></finance-chart>
      </div>
    `}onAddRecurring(e){e.preventDefault();const t=e.target,i=t.elements.namedItem("name").value.trim(),s=Number(t.elements.namedItem("amount").value),n=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=t.elements.namedItem("type").value,a=t.elements.namedItem("frequency").value,l=t.elements.namedItem("category").value.trim();if(!i||!Number.isFinite(s)||s<=0)return;const h={name:i,amount:s,currency:n,type:o,frequency:a};o==="expense"&&l&&(h.category=l),(async()=>(await this.post("/recurring",h),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(e){const t=new Date().toISOString().slice(0,10),i=p=>!e.end_date||p<=e.end_date,[s,n,o]=e.start_date.split("-").map(Number);if(!s||!n||!o)return null;const a=p=>String(p).padStart(2,"0");if(e.frequency==="weekly"){let p=new Date(`${e.start_date}T00:00:00Z`);const m=new Date(`${t}T00:00:00Z`);if(p<m){const v=Math.ceil((m.getTime()-p.getTime())/6048e5);p=new Date(p.getTime()+v*7*864e5)}const g=p.toISOString().slice(0,10);return i(g)?g:null}const l=e.frequency==="yearly"?12:e.frequency==="quarterly"?3:1;let h=s,u=n;for(let p=0;p<2400;p++){const m=new Date(Date.UTC(h,u,0)).getUTCDate(),g=`${h}-${a(u)}-${a(Math.min(o,m))}`;if(g>=t)return i(g)?g:null;for(u+=l;u>12;)u-=12,h+=1}return null}toggleColumn(e){const t=this.recurringColumns.includes(e)?this.recurringColumns.filter(i=>i!==e):[...this.recurringColumns,e];this.recurringColumns=t,this.post("/recurring-columns",{columns:t})}toggleEditRecur(e){this.editingRecurId=this.editingRecurId===e?null:e,this.cancelingRecurId=null}startCancel(e){this.cancelingRecurId=this.cancelingRecurId===e?null:e,this.editingRecurId=null}onSaveRecur(e,t){e.preventDefault();const i=e.target,s=l=>i.elements.namedItem(l)?.value??"",n=s("type")==="income"?"income":"expense",o=Number(s("amount"));if(!s("name").trim()||!Number.isFinite(o)||o<=0)return;const a={name:s("name").trim(),amount:o,currency:(s("currency")||this.base).toUpperCase().trim(),type:n,frequency:s("frequency"),start:s("start"),category:n==="expense"&&s("category").trim()||null,end:s("end")||null};(async()=>(await this.patch(`/recurring/${t}`,a),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(e,t){e.preventDefault();const i=e.target.elements.namedItem("end")?.value;i&&(async()=>(await this.patch(`/recurring/${t}`,{end:i}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(e){await this.patch(`/recurring/${e}`,{end:null}),await this.refresh()}deleteRecur(e){this.confirmDelete={path:`/recurring/${e}`,title:"Delete recurring item?",detail:"Previously logged transactions stay in your history."}}cancelIcon(){return r`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(e){const t=e.type==="income",i=new Date().toISOString().slice(0,10),s=this.nextDue(e),n=p=>new Date(`${p}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!e.end_date&&e.end_date>=i,a="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",l=({key:p,label:m})=>{const v={type:t?"Income":"Expense",category:e.category_name,amount:`${t?"+":""}${this.fmt(e.original_amount,e.original_currency,2)}`,frequency:e.frequency,next:s?n(s):"Ended",account:e.account_name,end:e.end_date?n(e.end_date):null}[p];return r`<td role="cell" class="fin-recur-cell ${p==="amount"?"fin-recur-amount tabular-nums":""}
          ${v==null?"fin-cell-empty":""}">
        <span class="fin-cell-label" aria-hidden="true">${m}</span>
        <span>${v??c}</span>
      </td>`},h=2+ds.filter(p=>this.recurringColumns.includes(p.key)).length,u=(p,m)=>p===m?"selected":"";return r`
      <tr role="row" class="fin-recur-row ${this.editingRecurId===e.id?"fin-row-open":""}">
        <th scope="row" role="rowheader" class="fin-recur-name">
          <button type="button" class="fin-row-button" aria-expanded=${this.editingRecurId===e.id}
            @click=${()=>this.toggleEditRecur(e.id)}>${e.name}</button>
          ${o?r`<small>Ends ${n(e.end_date)}</small>`:c}
        </th>
        ${ds.filter(p=>this.recurringColumns.includes(p.key)).map(l)}
        <td role="cell" class="fin-recur-actions">
          <button type="button" class="fin-icon-btn" aria-label=${`Set end date for ${e.name}`}
            @click=${()=>this.startCancel(e.id)}>${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===e.id?r`<tr class="fin-table-detail"><td colspan=${h} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="fin-form flex flex-wrap items-center gap-2" @submit=${p=>this.onConfirmCancel(p,e.id)}>
              <span class="text-[11px] text-muted">Cancel from</span>
              <mana-date-picker name="end" label="Cancel from" .value=${e.end_date||s||i} field-class=${a}></mana-date-picker>
              <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Confirm</button>
              ${e.end_date?r`<button type="button" class="text-[11px] text-ink/60 hover:text-ink" @click=${()=>void this.resumeRecur(e.id)}>resume</button>`:c}
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.cancelingRecurId=null}}>close</button>
              <span class="text-[11px] text-muted">A payment due on/after this date still runs, then it ends.</span>
            </form>
          </td></tr>`:c}
      ${this.editingRecurId===e.id?r`<tr class="fin-table-detail"><td colspan=${h} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${p=>p.stopPropagation()}>
            <form class="fin-form flex flex-wrap items-center gap-2" @submit=${p=>this.onSaveRecur(p,e.id)}>
              <input name="name" aria-label="Name" .value=${e.name} class="flex-1 min-w-[7rem] ${a}" />
              <input name="amount" type="number" step="any" inputmode="decimal" aria-label="Amount" .value=${String(e.original_amount)} class="w-20 ${a}" />
              ${this.renderCurrencySelect(e.original_currency)}
              <select name="type" aria-label="Type" class=${a}><option value="expense" ?selected=${!t}>expense</option><option value="income" ?selected=${t}>income</option></select>
              <select name="frequency" aria-label="Frequency" class=${a}>
                <option value="monthly" ?selected=${u(e.frequency,"monthly")==="selected"}>monthly</option>
                <option value="weekly" ?selected=${u(e.frequency,"weekly")==="selected"}>weekly</option>
                <option value="quarterly" ?selected=${u(e.frequency,"quarterly")==="selected"}>quarterly</option>
                <option value="yearly" ?selected=${u(e.frequency,"yearly")==="selected"}>yearly</option>
              </select>
              <input name="category" aria-label="Category" placeholder="category" .value=${e.category_name||""} class="flex-1 min-w-[6rem] ${a}" />
              <label class="flex items-center gap-1 text-[10px] text-muted">start<mana-date-picker name="start" label="Start" .value=${e.start_date} field-class=${a}></mana-date-picker></label>
              <label class="flex items-center gap-1 text-[10px] text-muted">cancel from<mana-date-picker name="end" clearable label="Cancel from" placeholder="never" .value=${e.end_date||""} field-class=${a}></mana-date-picker></label>
              <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save</button>
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingRecurId=null}}>close</button>
              ${e.end_date?r`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-500" @click=${()=>void this.deleteRecur(e.id)}>Delete</button>`:r`<span class="ml-auto text-[10px] text-muted">set a cancel date to enable delete</span>`}
              <span class="basis-full text-[10px] text-muted">A payment due on/after the cancel date still runs, then it ends. Deleting keeps logged transactions.</span>
            </form>
          </td></tr>`:c}
    `}monthlyEquiv(e){const t=e.base??e.original_amount;switch(e.frequency){case"weekly":return t*(52/12);case"quarterly":return t/3;case"yearly":return t/12;default:return t}}renderRecurringChart(){const e=this.recurring.filter(a=>a.type==="expense");if(!e.length)return c;const t=Ye(),i=[];for(let a=-11;a<=5;a++)i.push(Kr(t,a));const s=i.indexOf(t),n=i.map(a=>{const l=`${a}-31`,h=`${a}-01`;let u=0;for(const p of e)p.start_date>l||p.end_date&&p.end_date<h||(u+=this.monthlyEquiv(p));return Math.round(u)});return r`
      <div class="mana-card fin-chart-card">
        <h2 class="fin-chart-title">Recurring payments over time</h2>
        <finance-chart label="Monthly recurring payments, including future projections" .config=${{type:"line",data:{labels:i,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:a=>a.p1DataIndex>s?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:a=>`${this.fmt(Number(a.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:a=>this.fmtShort(Number(a)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const e=`${Ye()}-31`,t=`${Ye()}-01`,i=this.recurring.filter(l=>l.start_date<=e&&(!l.end_date||l.end_date>=t));let s=0,n=0;for(const l of i)l.type==="income"?n+=this.monthlyEquiv(l):s+=this.monthlyEquiv(l);const o=this.recurringIncome??n,a=o>0?Math.round(s/o*100):0;return this.summary("Monthly net recurring",n-s,r`<div class="fin-stats">
      ${this.stat("Monthly income",n)}
      ${this.stat("Monthly payments",s)}
      ${o>0?r`<span class="fin-summary-note">${a}% of income goes to recurring payments</span>`:c}
    </div>`)}renderRecurring(){const e=new Date().toISOString().slice(0,10),t=n=>!!n.end_date&&n.end_date<e,i=this.recurring.filter(t),s=this.showEnded?this.recurring:this.recurring.filter(n=>!t(n));return r`
      ${this.recurring.length?this.renderRecurringHeader():c}
      <section class="mana-card fin-recurring">
        <div class="fin-card-header">
          <h2>Recurring items</h2>
          <div class="fin-action-group">
            ${this.recurring.length?r`<button type="button" class="fin-text-btn" aria-expanded=${this.showColMenu}
              @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns</button>`:c}
            <button type="button" class="fin-primary" aria-expanded=${this.showRecurringAdd}
              @click=${()=>{this.showRecurringAdd=!this.showRecurringAdd,this.showRecurringAdd&&this.updateComplete.then(()=>this.querySelector(".fin-recur-add input[name=name]")?.focus())}}>
              <sc-icon name="lucide-plus" aria-hidden="true"></sc-icon> Add recurring</button>
          </div>
        </div>
        ${this.showColMenu?r`<div class="fin-columns" @click=${n=>n.stopPropagation()}>
          ${ds.map(n=>r`<button type="button" class="fin-text-btn" aria-pressed=${this.recurringColumns.includes(n.key)}
            @click=${()=>this.toggleColumn(n.key)}>${n.label}</button>`)}
        </div>`:c}
        ${this.showRecurringAdd?r`
              <form class="fin-form fin-recur-add flex flex-wrap gap-2 items-center px-3 py-2 border-t border-line bg-bg/40" @submit=${n=>this.onAddRecurring(n)}>
                <input name="name" aria-label="Name" placeholder="Name" required autofocus
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <input name="amount" type="number" min="0.01" step="any" inputmode="decimal" aria-label="Amount" placeholder="Amount" required
                  class="w-20 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="type" aria-label="Type" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="expense">expense</option>
                  <option value="income">income</option>
                </select>
                <select name="frequency" aria-label="Frequency" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="monthly">monthly</option>
                  <option value="weekly">weekly</option>
                  <option value="quarterly">quarterly</option>
                  <option value="yearly">yearly</option>
                </select>
                <input name="category" aria-label="Category" placeholder="category (expense)"
                  class="flex-1 min-w-[6rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <button type="submit" class="fin-primary">Add item</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showRecurringAdd=!1}}>Cancel</button>
              </form>`:c}
        ${s.length?r`
          <table role="table" class="fin-table fin-recur-table" aria-label="Recurring items">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Name</th>
                ${ds.filter(n=>this.recurringColumns.includes(n.key)).map(n=>r`<th scope="col" role="columnheader" class=${n.key==="amount"?"text-right":""}>${n.label}</th>`)}
                <th scope="col" role="columnheader"><span class="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody role="rowgroup">${s.map(n=>this.renderRecurRow(n))}</tbody>
          </table>`:r`<p class="fin-empty">${i.length?"No active recurring items.":"Add a recurring income or payment."}</p>`}
        ${i.length?r`<div class="fin-card-footer">
          <button type="button" class="fin-text-btn" aria-expanded=${this.showEnded}
            @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended items":`Show ended items (${i.length})`}</button>
        </div>`:c}
      </section>
      ${this.recurring.length?this.renderRecurringChart():c}
    `}gotoYear(e){this.yearN+=e,this.expandedYearMonth=null,this.refresh()}async toggleYearMonth(e){if(this.expandedYearMonth===e){this.expandedYearMonth=null;return}this.yearMonthTxns=[],this.expandedYearMonth=e;try{const t=await fetch(`/api/finance/transactions?month=${e}`);if(t.ok){const{items:i}=await t.json();this.expandedYearMonth===e&&(this.yearMonthTxns=i)}}catch{}}renderYearMonthDetail(){const e=this.yearMonthTxns;if(!e.length)return r`<p class="text-xs text-muted">No transactions.</p>`;const t=n=>{const o=n.recurring_id!=null;return r`<li class="flex items-center gap-2 py-0.5 text-xs ${o?"italic text-muted":""}">
        <span class="text-muted w-11 shrink-0 tabular-nums">${n.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate">${o?"↻ ":""}${n.name||"—"}</span>
        <span class="shrink-0 tabular-nums ${n.type==="income"?"text-emerald-600":"text-ink"}">${n.base!=null?this.fmt(n.base,this.base,2):this.fmt(n.original_amount,n.original_currency,2)}</span>
      </li>`},i=e.filter(n=>n.type==="income"),s=e.filter(n=>n.type==="expense");return r`
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        ${i.length?r`<div><h3 class="text-xs font-medium text-muted">Income</h3><ul>${i.map(t)}</ul></div>`:c}
        ${s.length?r`<div><h3 class="text-xs font-medium text-muted">Expenses</h3><ul>${s.map(t)}</ul></div>`:c}
      </div>
    `}renderYear(){const e=this.year;if(!e)return r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.months.map(p=>new Date(`${p.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),i=8,s=e.categories.slice(0,i),n=e.categories.slice(i),o=n.length?Array.from({length:12},(p,m)=>n.reduce((g,v)=>g+(v.monthly[m]??0),0)):null,a=s.map((p,m)=>({type:"bar",label:p.name,data:p.monthly.map(g=>Math.round(g)),backgroundColor:qr(m),stack:"spend",borderWidth:0}));o&&a.push({type:"bar",label:"Other",data:o.map(p=>Math.round(p)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const l={type:"line",label:"Income",data:e.months.map(p=>Math.round(p.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},h={type:"bar",data:{labels:t,datasets:[...a,l]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:p=>`${p.dataset.label}: ${this.fmt(Number(p.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:p=>this.fmtShort(Number(p)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},u=e.totals;return r`
      ${this.summary("Saved",u.saved,r`<div class="fin-stats">
        ${this.stat("Income",u.income)}
        ${this.stat("Spent",u.spent)}
        ${u.income>0?r`<span class="fin-summary-note">Savings rate ${Math.round(u.savingsRate*100)}%</span>`:c}
      </div>`)}

      ${e.months.some(p=>p.income||p.spent)?r`
        <section class="mana-card fin-chart-card">
          <h2 class="fin-chart-title">Spending and income</h2>
          <finance-chart label="Monthly spending and income for the selected year" .config=${h} height="240px"></finance-chart>
        </section>
        <section class="mana-card fin-year">
          <div class="fin-card-header"><h2>Monthly breakdown</h2></div>
          <table role="table" class="fin-table fin-year-table" aria-label="Monthly breakdown">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Month</th>
                ${["Income","Spent","Saved","Rate"].map(p=>r`<th scope="col" role="columnheader" class="text-right">${p}</th>`)}
              </tr>
            </thead>
            <tbody role="rowgroup">${e.months.map((p,m)=>{if(!p.income&&!p.spent)return c;const g=this.expandedYearMonth===p.month;return r`<tr role="row" class="fin-year-row ${g?"fin-row-open":""}">
                <th scope="row" role="rowheader">
                  <button type="button" class="fin-row-button" aria-expanded=${g}
                    @click=${()=>void this.toggleYearMonth(p.month)}>${t[m]}</button>
                </th>
                ${[["Income",p.income?this.fmt(p.income):""],["Spent",p.spent?this.fmt(p.spent):""],["Saved",this.fmt(p.saved)],["Rate",p.income>0?`${Math.round(100*p.saved/p.income)}%`:""]].map(([v,y])=>r`<td role="cell" class="fin-year-value tabular-nums ${y?"":"fin-cell-empty"}
                  ${v==="Saved"&&p.saved<0?"fin-negative":""}">
                  <span class="fin-cell-label" aria-hidden="true">${v}</span><span>${y}</span>
                </td>`)}
              </tr>
              ${g?r`<tr class="fin-table-detail"><td colspan="5" class="px-4 py-3 bg-bg/40">${this.renderYearMonthDetail()}</td></tr>`:c}`})}</tbody>
          </table>
        </section>`:r`<p class="fin-empty">No transactions recorded for ${e.year}.</p>`}

    `}render(){const e=(a,l)=>r`<button type="button" class="fin-tab"
      aria-pressed=${this.tab===a} @click=${()=>this.setTab(a)}>${l}</button>`,t=this.tab==="year",i=t?String(this.yearN):Ei(this.month),s=t?"year":"month",n=a=>t?this.gotoYear(a):this.gotoMonth(a),o=this.tab==="budget"?this.budget?.month===this.month:this.tab==="networth"?this.networth?.month===this.month:t?this.year?.year===this.yearN:this.recurringLoaded;return r`
      ${this.confirmDelete?r`<sc-dialog open label=${this.confirmDelete.title}
        @sc-hide=${()=>{this.confirmDelete=null}}
        @keydown=${a=>{a.key==="Escape"&&(this.confirmDelete=null)}}>
        <p>${this.confirmDelete.detail}</p>
        <div slot="footer" class="fin-action-group">
          <button type="button" class="fin-text-btn" autofocus @click=${()=>{this.confirmDelete=null}}>Cancel</button>
          <button type="button" class="fin-text-btn fin-negative" @click=${()=>void this.removeConfirmed()}>Delete</button>
        </div>
      </sc-dialog>`:c}
      <div class="fin-shell ${this.demoMode?"finance-demo":""}">
        <header class="fin-toolbar">
          <div class="fin-toolbar-inner">
            <nav class="fin-tabs" aria-label="Finance views">
              ${e("budget","Budget")} ${e("recurring","Recurring")}
              ${e("networth","Net worth")} ${e("year","Year")}
            </nav>
            <div class="fin-tools">
              ${this.tab!=="recurring"?r`<div class="fin-period" role="group" aria-label=${`Browse by ${s}`}>
                <button type="button" class="fin-icon-btn" aria-label=${`Previous ${s}`} @click=${()=>n(-1)}>
                  <sc-icon name="lucide-chevron-left" aria-hidden="true"></sc-icon>
                </button>
                ${!t&&this.month!==Ye()?r`<button type="button" class="fin-period-label" aria-label=${`${i}. Jump to current month`}
                      @click=${()=>this.toCurrentMonth()}>${i}</button>`:r`<span class="fin-period-label">${i}</span>`}
                <button type="button" class="fin-icon-btn" aria-label=${`Next ${s}`} @click=${()=>n(1)}>
                  <sc-icon name="lucide-chevron-right" aria-hidden="true"></sc-icon>
                </button>
              </div>`:r`<span class="fin-period-label">${Ei(Ye())}</span>`}
              <div class="fin-utilities">
                <button type="button" class="fin-icon-btn" aria-label="Hide amounts" aria-pressed=${this.demoMode}
                  @click=${()=>{this.demoMode=!this.demoMode}}><sc-icon name="lucide-${this.demoMode?"eye-off":"eye"}" aria-hidden="true"></sc-icon></button>
                <button type="button" class="fin-icon-btn" aria-label="Finance settings" aria-expanded=${this.showSettings}
                  @click=${()=>this.toggleSettings()}><sc-icon name="lucide-settings" aria-hidden="true"></sc-icon></button>
              </div>
            </div>
          </div>
        </header>
        <div class="fin-scroll">
          <div class="fin-page @container" aria-busy=${this.loading}>
            ${this.showSettings?this.renderSettings():c}
            ${this.saveError?r`<p class="fin-error" role="alert">${this.saveError}</p>`:c}
            ${this.loadError?r`<div class="fin-error" role="alert">
              Couldn’t load Finance. <button type="button" class="fin-text-btn" @click=${()=>void this.refresh()}>Try again</button>
            </div>`:c}
            ${o?this.tab==="budget"?this.renderBudget():this.tab==="networth"?this.renderNetworth():t?this.renderYear():this.renderRecurring():this.loading?r`<div class="fin-skeleton" role="status" aria-label="Loading finance"></div>`:c}
          </div>
        </div>
      </div>
    `}};D([d()],C.prototype,"tab",2);D([d()],C.prototype,"month",2);D([d()],C.prototype,"loading",2);D([d()],C.prototype,"loadError",2);D([d()],C.prototype,"base",2);D([d()],C.prototype,"budget",2);D([d()],C.prototype,"expandedCat",2);D([d()],C.prototype,"catTxns",2);D([d()],C.prototype,"newCat",2);D([d()],C.prototype,"newCatIcon",2);D([d()],C.prototype,"emojiPickerFor",2);D([d()],C.prototype,"showHidden",2);D([d()],C.prototype,"logDay",2);D([d()],C.prototype,"networth",2);D([d()],C.prototype,"recurring",2);D([d()],C.prototype,"recurringLoaded",2);D([d()],C.prototype,"year",2);D([d()],C.prototype,"yearN",2);D([d()],C.prototype,"expandedYearMonth",2);D([d()],C.prototype,"yearMonthTxns",2);D([d()],C.prototype,"editingSavings",2);D([d()],C.prototype,"editingGoals",2);D([d()],C.prototype,"editingTxnId",2);D([d()],C.prototype,"savingTxn",2);D([d()],C.prototype,"saveError",2);D([d()],C.prototype,"savingAccount",2);D([d()],C.prototype,"confirmDelete",2);D([d()],C.prototype,"showIncome",2);D([d()],C.prototype,"incomeTxns",2);D([d()],C.prototype,"showAccountAdd",2);D([d()],C.prototype,"editingBalanceId",2);D([d()],C.prototype,"showRecurringAdd",2);D([d()],C.prototype,"editingRecurId",2);D([d()],C.prototype,"cancelingRecurId",2);D([d()],C.prototype,"recurringColumns",2);D([d()],C.prototype,"currencies",2);D([d()],C.prototype,"supportedCurrencies",2);D([d()],C.prototype,"lastCurrency",2);D([d()],C.prototype,"showSettings",2);D([d()],C.prototype,"demoMode",2);D([d()],C.prototype,"cards",2);D([d()],C.prototype,"recurringAsPaid",2);D([d()],C.prototype,"showColMenu",2);D([d()],C.prototype,"showEnded",2);D([d()],C.prototype,"budgetLayout",2);D([d()],C.prototype,"dragCardId",2);D([d()],C.prototype,"dropTarget",2);C=D([w("finance-section")],C);async function Mm(e,t=400,i=.85){const s=await Bl(e,t);if(!s)return await Im(e);const n=s.toDataURL("image/webp",i);return n.startsWith("data:image/webp")?n:s.toDataURL("image/jpeg",i)}async function fb(e,t=1600,i=.85){let s;try{s=await Bl(e,t)}catch{return e}if(!s)return e;const n=a=>new Promise(l=>s.toBlob(l,a,i));let o=await n("image/webp");return(!o||o.type!=="image/webp")&&(o=await n("image/jpeg")),o&&o.size<e.size?o:e}async function Bl(e,t){const i=URL.createObjectURL(e);try{const s=await new Promise((u,p)=>{const m=new Image;m.onload=()=>u(m),m.onerror=()=>p(new Error("could not decode image")),m.src=i}),n=Math.min(1,t/Math.max(s.width,s.height)),o=Math.max(1,Math.round(s.width*n)),a=Math.max(1,Math.round(s.height*n)),l=document.createElement("canvas");l.width=o,l.height=a;const h=l.getContext("2d");return h?(h.drawImage(s,0,0,o,a),l):null}finally{URL.revokeObjectURL(i)}}function Im(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=()=>i(s.error),s.readAsDataURL(e)})}var _m=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,K=(e,t,i,s)=>{for(var n=s>1?void 0:s?Om(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&_m(t,i,n),n};let q=class extends T{constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.detailsOpen=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=e=>{const t=e.composedPath();if(this.editingNote==="new"){const i=this.renderRoot.querySelector(".newnote-card");i&&!t.includes(i)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const i=this.renderRoot.querySelector(".newfact-form");i&&!t.includes(i)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const i=this.renderRoot.querySelector(".newaction-form");i&&!t.includes(i)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const i=this.renderRoot.querySelector(".inline-edit");i&&!t.includes(i)&&(i.blur(),i.dispatchEvent(new Event("blur")))}},this.onOpsEvent=e=>{const t=e.detail,i=t?.action;if(i==="open-person"&&typeof t?.person=="number"){this.open(t.person);return}i==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onOpenReviewIntent=()=>{try{localStorage.removeItem("circle.intent")}catch{}this.openReview()},this.onPaste=async e=>{const t=e;if(this.selectedId==null||!t.clipboardData)return;const i=document.activeElement;if(i&&/^(INPUT|TEXTAREA)$/.test(i.tagName))return;for(const n of Array.from(t.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){t.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const s=t.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(s)){t.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("circle-open-review",this.onOpenReviewIntent),document.addEventListener("paste",this.onPaste);const e=(()=>{try{return localStorage.getItem("circle.open")}catch{return null}})(),t=e?this.fetchDetail(Number(e)):null;this.refresh().then(()=>{this.restoreOpen(t),this.consumeReviewIntent()})}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("circle-open-review",this.onOpenReviewIntent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}consumeReviewIntent(){try{localStorage.getItem("circle.intent")==="review"&&(localStorage.removeItem("circle.intent"),this.openReview())}catch{}}async refresh(){try{const e=await fetch("/api/circle");if(e.ok){const t=await e.json();this.circles=t.circles,this.people=t.people,this.pendingCount=t.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async fetchDetail(e){try{const t=await fetch(`/api/circle/person/${e}`);if(t.ok)return(await t.json()).person}catch{}return null}async loadDetail(e,t){const i=await(t??this.fetchDetail(e));i&&this.selectedId===e&&(this.detail=i)}open(e,t){this.selectedId=e,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.detailsOpen=!1;try{localStorage.setItem("circle.open",String(e))}catch{}this.reportFocus(e),this.loadDetail(e,t)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(e){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).catch(()=>{})}restoreOpen(e=null){try{const t=localStorage.getItem("circle.open");t&&this.people.some(i=>i.id===Number(t))&&this.open(Number(t),e??void 0)}catch{}}circleName(e){return e==null?"New":this.circles.find(t=>t.id===e)?.name??"New"}circleNames(e){const i=(e.circle_ids?.length?e.circle_ids:e.circle_id!=null?[e.circle_id]:[]).map(s=>this.circles.find(n=>n.id===s)?.name).filter(s=>!!s);return i.length?i:["New"]}primaryCircleName(e){return this.circleNames(e)[0]??"New"}async patchPerson(e,t){await fetch(`/api/circle/person/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async post(e,t){const i=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});await this.refresh();try{return await i.json()}catch{return null}}async patch(e,t){await fetch(e,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async del(e){await fetch(e,{method:"DELETE"}),await this.refresh()}async createAndAssign(e,t){const i=t.trim();if(this.creatingCircle=!1,!i)return;const s=await this.post("/api/circle/circle",{name:i});s?.id&&await this.post(`/api/circle/person/${e}/circle`,{circle_id:s.id})}async addPerson(){const e=this.draftName.trim();if(!e)return;const t=await this.post("/api/circle/person",{name:e,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,t?.id&&this.open(t.id)}async removePerson(e){confirm(`Remove ${e.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${e.id}`),this.back())}async onPhotoFile(e,t){const i=t.target,s=i.files?.[0];i.value="",s&&await this.uploadPhotoFile(e.id,s)}async uploadPhotoFile(e,t){if(!t.type.startsWith("image/")){alert("That's not an image.");return}if(t.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const i=await Mm(t,400,.85);await this.patchPerson(e,{photo:i})}catch{alert("Couldn't process that image.")}}initials(e){const t=e.trim().split(/\s+/);return t.length===1?(t[0]?.slice(0,2)??"").toUpperCase():((t[0]?.[0]??"")+(t[t.length-1]?.[0]??"")).toUpperCase()}avatarStyle(e){let t=0;for(const i of e)t=(t*31+i.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${t} 68% 55%), hsl(${(t+48)%360} 70% 45%));`}renderAvatar(e,t="w-9 h-9",i="text-xs"){return e.photo?r`<img src=${e.photo} alt="" class="${t} rounded-full object-cover shrink-0" loading="lazy" />`:r`<span class="${t} ${i} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}relTime(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/86400);return t<=0?"today":t===1?"yesterday":t<30?`${t}d ago`:t<365?`${Math.floor(t/30)}mo ago`:`${Math.floor(t/365)}y ago`}fmtDate(e,t){const i=e?new Date(e+"T12:00:00"):new Date(t*1e3),s={month:"long",day:"numeric"};return i.getFullYear()!==new Date().getFullYear()&&(s.year="numeric"),i.toLocaleDateString(void 0,s)}fmtMeetDate(e){const t=new Date(e+"T12:00:00"),i={weekday:"long",month:"short",day:"numeric"};return t.getFullYear()!==new Date().getFullYear()&&(i.year="numeric"),t.toLocaleDateString(void 0,i)}filteredPeople(){return this.filter==="needs"?this.people.filter(e=>(e.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(e=>this.circleNames(e).includes(this.filter))}renderRow(e){const t=e.title&&e.company?`${e.title}, ${e.company}`:e.company??e.title??this.circleNames(e).join(", "),i=e.open_actions??0;return r`
      <li class="last:[&_.row-divider]:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 pl-3 text-left hover:bg-hover" @click=${()=>this.open(e.id)}>
          ${this.renderAvatar(e,"w-10 h-10","text-sm")}
          <span class="row-divider flex-1 min-w-0 flex items-center gap-3 py-2.5 pr-3 border-b border-line">
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium text-ink truncate">${e.name}</span>
              <span class="block text-xs text-muted truncate">${t}</span>
            </span>
            ${i>0?r`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${i} to do</span>`:c}
            <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
          </span>
        </button>
      </li>`}renderListBody(){const e=this.filteredPeople();if(e.length===0)return r`<p class="px-4 py-3 text-xs text-muted">${this.filter==="needs"?"Nothing open. You're caught up.":"No one here yet. Add someone, or tell the Circle keeper about a person you met."}</p>`;if(this.filter!=="all")return r`<ul>${e.map(n=>this.renderRow(n))}</ul>`;const t=[...this.circles.map(n=>n.name),"New"],i=new Set,s=t.filter(n=>!i.has(n)&&(i.add(n),!0)).map(n=>({name:n,people:e.filter(o=>this.primaryCircleName(o)===n)})).filter(n=>n.people.length>0);return r`${s.map(n=>r`
      <section>
        <h3 class="px-4 py-2 text-xs font-semibold tracking-wide text-muted bg-surface sticky top-0 z-10">${n.name} (${n.people.length})</h3>
        <ul>${n.people.map(o=>this.renderRow(o))}</ul>
      </section>`)}`}renderList(){const e=this.people.some(o=>(o.open_actions??0)>0),t=[{key:"all",label:"All"}];e&&t.push({key:"needs",label:"Needs you"});const i=this.circles.filter(o=>o.id<=9),s=this.circles.filter(o=>o.id>9),n=o=>r`<button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-full border transition-colors ${this.filter===o.key?"border-accent bg-accent text-white":"border-line text-muted hover:bg-hover"}" @click=${()=>this.filter=o.key}>${o.label}</button>`;return r`
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
          ${t.map(n)}
          ${i.map(o=>n({key:o.name,label:o.name}))}
          ${s.length>0?r`<span class="shrink-0 w-px h-4 bg-line mx-0.5 self-center"></span>`:c}
          ${s.map(o=>n({key:o.name,label:o.name}))}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?r`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(e,t,i){return r`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${e}</h3>
          ${i??c}
        </div>
        ${t}
      </section>`}collapsibleSection(e,t,i,s){return r`
      <section class="px-4 pt-4 pb-1">
        <button type="button" class="flex items-center gap-1 mb-2 group/sec" @click=${i}>
          <span class="text-[11px] font-medium tracking-wide text-muted group-hover/sec:text-ink">${e}</span>
          <span class="text-[10px] text-muted group-hover/sec:text-ink transition-transform ${t?"rotate-90":""}">›</span>
        </button>
        ${t?s:c}
      </section>`}headerInput(e,t,i,s){return r`<input type="text" placeholder=${t} class="${i} bg-transparent w-full focus:outline-none focus:bg-surface rounded px-1 -mx-1"
      .value=${e??""} @change=${n=>s(n.target.value.trim())} />`}toggleNoteExpand(e){this.expandedNotes=this.expandedNotes.includes(e)?this.expandedNotes.filter(t=>t!==e):[...this.expandedNotes,e]}noteRows(e){const t=e.split(`
`).reduce((i,s)=>i+Math.max(1,Math.ceil(s.length/65)),0);return Math.min(40,Math.max(3,t+1))}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}truncateBody(e){const t=e.split(`
`);if(t.length>=6)return t.slice(0,5).join(`
`).trimEnd();if(e.length<=280)return e;const i=e.slice(0,260),s=i.lastIndexOf(" ");return(s>200?i.slice(0,s):i).trimEnd()}renderNoteCard(e,t){const i=t.body.length>280||(t.body.match(/\n/g)?.length??0)>=6,s=this.expandedNotes.includes(t.id);return r`
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
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${t.id}`}}>${s||!i?t.body:this.truncateBody(t.body)}${i?r`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(t.id)}}>${s?" Show less":"… Read more"}</button>`:c}</p>`}
      </article>`}renderNewNoteCard(){return r`
      <article class="newnote-card rounded-lg border border-ink/40 p-3 mb-2">
        <input id="nn-title" type="text" placeholder="Title" class="w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" />
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(new Date().toISOString().slice(0,10),0)}</div>
        <textarea id="nn-body" rows="4" placeholder="What happened, what you talked about, your read on them…"
          class="w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none mt-2" autofocus></textarea>
      </article>`}async saveNewNote(){if(this.editingNote!=="new"||this.selectedId==null)return;const e=this.renderRoot.querySelector("#nn-title")?.value.trim()||null,t=this.renderRoot.querySelector("#nn-body")?.value.trim();this.editingNote=null,t&&await this.post(`/api/circle/person/${this.selectedId}/note`,{title:e,body:t,kind:"talk",date:new Date().toISOString().slice(0,10)})}renderFacts(e){return r`
      ${e.facts.length===0?r`<p class="text-xs text-muted italic mb-1">Nothing yet. Add a detail, or it fills in as you talk about them.</p>`:c}
      <div class="space-y-1">
        ${e.facts.map(t=>r`
          <div class="flex items-center gap-2 group/f">
            <input type="text" placeholder="label" class="w-28 shrink-0 text-[11px] text-muted bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface focus:text-ink"
              .value=${t.label??""} @change=${i=>void this.patch(`/api/circle/fact/${t.id}`,{label:i.target.value.trim()||null})} />
            <input type="text" class="flex-1 min-w-0 text-sm text-ink bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface"
              .value=${t.value} @change=${i=>{const s=i.target.value.trim();s?this.patch(`/api/circle/fact/${t.id}`,{value:s}):this.del(`/api/circle/fact/${t.id}`)}} />
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
        ${t.map(i=>r`<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${i}
          <button type="button" class="text-muted hover:text-red-500" @click=${()=>void this.setTags(e.id,t.filter(s=>s!==i))}>✕</button></span>`)}
        <input type="text" placeholder="+ tag" class="w-20 text-xs bg-transparent px-1 py-0.5 focus:outline-none focus:bg-surface rounded text-ink"
          @keydown=${i=>{if(i.key==="Enter"){const s=i.target,n=s.value.trim();n&&!t.includes(n)&&(this.setTags(e.id,[...t,n]),s.value="")}}} />
      </div>`}submitFact(e){const t=this.renderRoot.querySelector("#fact-label"),i=this.renderRoot.querySelector("#fact-value"),s=i?.value.trim();s&&(this.post(`/api/circle/person/${e}/fact`,{value:s,label:t?.value.trim()||null}),t&&(t.value=""),i&&(i.value=""))}renderCheck(e,t){return r`<button type="button"
      class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
      style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
      aria-label=${e?"Mark not done":"Mark done"}
      @click=${t}>
      ${e?r`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:c}
    </button>`}renderActions(e){const t=e.actions.filter(n=>n.done!==1),i=e.actions.filter(n=>n.done===1),s=this.showCompletedActions?[...t,...i]:t;return r`
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
              @keydown=${n=>{n.key==="Enter"?this.submitAction(e.id):n.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitAction(e.id)}>Add</button>
          </div>`:r`<div class="flex items-center gap-4 ${t.length?"mt-1.5":""}">
            <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.editingField="newaction"}}>+ add</button>
            ${i.length?r`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>done (${i.length})</button>`:c}
          </div>`}`}submitAction(e){const i=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,i&&this.post(`/api/circle/person/${e}/action`,{body:i})}inlineField(e,t,i){return r`
      <label class="block">
        <span class="text-[10px] text-muted">${e}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${t??""} @change=${s=>i(s.target.value.trim())} />
      </label>`}readKeepingInTouch(e){return e.next_meet_date?r`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(e.next_meet_date,0)}</div>`:c}readFacts(e){if(!e.facts.length)return c;const t=e.facts.filter(s=>s.label),i=e.facts.filter(s=>!s.label);return this.section("Details",r`
      ${t.map(s=>r`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${s.label}</span>
        <span class="text-ink flex-1">${s.value}</span></div>`)}
      ${i.length?r`<ul class="mt-1 space-y-0.5">${i.map(s=>r`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${s.value}</li>`)}</ul>`:c}`)}readTags(e){const t=this.parseTags(e.tags);return t.length?this.section("Tags",r`<div class="flex flex-wrap gap-1.5">${t.map(i=>r`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${i}</span>`)}</div>`):c}readActions(e){return e.actions.length?this.section("Action items",r`<ul class="space-y-0.5">${e.actions.map(t=>r`
      <li class="flex items-center gap-2 text-sm">
        ${this.renderCheck(t.done===1,()=>void this.patch(`/api/circle/action/${t.id}`,{done:t.done!==1}))}
        <span class="${t.done?"line-through text-muted":"text-ink"}">${t.body}</span>
      </li>`)}</ul>`):c}readContact(e){const t=[];return e.email&&t.push(["Email",e.email]),e.phone&&t.push(["Phone",e.phone]),t.length?this.section("Details",r`${t.map(([i,s])=>r`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] text-muted w-28 shrink-0 pt-0.5">${i}</span><span class="text-ink flex-1">${s}</span></div>`)}`):c}renderDetailAvatar(e){return r`
      <div class="relative shrink-0">
        <button type="button" class="relative group/av w-16 h-16 rounded-full overflow-hidden block" title="Set photo" @click=${()=>{this.photoMenuOpen=!this.photoMenuOpen}}>
          ${e.photo?r`<img src=${e.photo} alt="" class="w-16 h-16 rounded-full object-cover" />`:r`<span class="w-16 h-16 text-xl rounded-full grid place-items-center text-white font-semibold shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}
          <span class="absolute inset-0 rounded-full bg-black/45 text-white text-[10px] grid place-items-center opacity-0 group-hover/av:opacity-100 transition-opacity">${e.photo?"Change":"Photo"}</span>
        </button>
        <input id="photo-file" type="file" accept="image/*" class="hidden" @change=${t=>void this.onPhotoFile(e,t)} />
        ${this.photoMenuOpen?this.renderPhotoMenu(e):c}
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
        ${e.photo?r`<button type="button" class="text-xs text-muted hover:text-red-500 mt-2" @click=${()=>{this.patchPerson(e.id,{photo:null}),this.photoMenuOpen=!1}}>Remove photo</button>`:c}
      </div>`}async setPhotoFromUrl(e){const i=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(i)try{const s=await fetch(`/api/circle/person/${e}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!s.ok){const n=await s.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??s.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(e,t,i,s,n=""){return this.editingField===e?r`<input type="text" class="inline-edit ${i} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${t??""} autofocus
        @blur=${o=>{s(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:t?r`<span class="${i} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=e}}>${t}</span>`:n?r`<span class="${i} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=e}}>${n}</span>`:c}onCircleSelect(e,t){const i=t.target.value;if(this.editingField=null,!!i){if(i==="__new__"){this.creatingCircle=!0;return}this.post(`/api/circle/person/${e.id}/circle`,{circle_id:Number(i)})}}detailCircles(e){return e.circles?.length?e.circles:e.circle_id!=null&&e.circle_name?[{id:e.circle_id,name:e.circle_name}]:[]}renderCirclePills(e){const t=this.detailCircles(e),i=this.circles.filter(s=>!t.some(n=>n.id===s.id));return r`
      ${t.map(s=>r`<span class="group/pill inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-surface border border-line text-ink">${s.name}
        <button type="button" class="w-0 overflow-hidden group-hover/pill:w-3.5 group-hover/pill:ml-0.5 transition-all text-muted hover:text-red-500" title="Remove from ${s.name}" @click=${()=>void this.del(`/api/circle/person/${e.id}/circle/${s.id}`)}>✕</button></span>`)}
      ${this.editingField==="circle"?r`<select class="inline-edit px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus @change=${s=>this.onCircleSelect(e,s)} @blur=${()=>{this.editingField=null}}>
            <option value="" selected disabled>add to…</option>
            ${i.map(s=>r`<option value=${s.id}>${s.name}</option>`)}
            <option value="__new__">+ New circle…</option>
          </select>`:this.creatingCircle?r`<input type="text" placeholder="new circle" class="w-24 px-2 py-0.5 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus
              @keydown=${s=>{s.key==="Enter"&&this.createAndAssign(e.id,s.target.value),s.key==="Escape"&&(this.creatingCircle=!1)}}
              @blur=${()=>{this.creatingCircle=!1}} />`:r`<button type="button" class="text-xs px-2 py-0.5 rounded-full border border-line text-muted hover:text-ink hover:bg-hover" title="Add to a circle" @click=${()=>{this.editingField="circle"}}>${t.length?"+":"+ circle"}</button>`}`}renderBio(e){return this.editingField==="bio"?r`<textarea rows="5" class="inline-edit w-full text-sm text-ink bg-surface rounded p-2 ring-1 ring-ink focus:outline-none leading-relaxed resize-y"
        .value=${e.bio??""} autofocus
        @blur=${t=>{this.patchPerson(e.id,{bio:t.target.value.trim()||null}),this.editingField=null}}>${e.bio??""}</textarea>`:e.bio?r`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${e.bio}</p>`:r`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}isFollowingOnly(e){const t=this.detailCircles(e);return t.length>0&&t.every(i=>i.id>9)}renderKit(e){if(this.isFollowingOnly(e))return c;const t=e.next_meet_date,i="nextmeet",s=r`<button type="button" class="rounded px-1 -mx-1 hover:bg-hover ${t?"text-ink":"text-muted/50"}"
        @click=${n=>void this.querySelector(`mana-date-picker[data-field="${i}"]`)?.show(n.currentTarget)}>${t?this.fmtMeetDate(t):"—"}</button>
      <mana-date-picker headless clearable data-field=${i} label="Next meet" .value=${t??""}
        @change=${n=>void this.patchPerson(e.id,{next_meet_date:n.target.value||null})}></mana-date-picker>`;return r`<div>
      <span class="block text-[11px] text-muted">Next meet</span>
      <span class="block mt-0.5 text-sm leading-tight">${s}</span>
    </div>`}tidyLabel(e){return e===e.toUpperCase()&&e!==e.toLowerCase()?e.toLowerCase():e}renderDetailsList(e){return r`
      ${e.facts.map(t=>r`
        <div class="flex gap-3 py-0.5 text-sm group/d items-start">
          ${t.label?r`<span class="text-[11px] capitalize tracking-wide text-muted w-28 shrink-0 pt-1 cursor-text hover:text-ink" @click=${()=>{this.editingField=`factlabel:${t.id}`}}>${this.editingField===`factlabel:${t.id}`?r`<input type="text" class="inline-edit w-full bg-surface ring-1 ring-ink rounded px-1 focus:outline-none text-ink normal-case" .value=${t.label} autofocus @blur=${i=>{this.patch(`/api/circle/fact/${t.id}`,{label:i.target.value.trim()||null}),this.editingField=null}} @keydown=${i=>{i.key==="Enter"&&i.target.blur()}} />`:this.tidyLabel(t.label)}</span>`:r`<span class="text-muted pt-0.5">•</span>`}
          <span class="flex-1 min-w-0">${this.editable(`fact:${t.id}`,t.value,"text-ink",i=>i?void this.patch(`/api/circle/fact/${t.id}`,{value:i}):void this.del(`/api/circle/fact/${t.id}`))}</span>
          <button type="button" class="opacity-0 group-hover/d:opacity-100 text-muted hover:text-red-500 text-xs pt-1" @click=${()=>void this.del(`/api/circle/fact/${t.id}`)}>✕</button>
        </div>`)}
      ${this.editingField==="newfact"?r`<div class="newfact-form flex gap-1.5 mt-1.5">
            <input id="nf-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input id="nf-value" type="text" placeholder="detail" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${t=>{t.key==="Enter"?this.submitNewFact(e.id):t.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitNewFact(e.id)}>Add</button>
          </div>`:r`<button type="button" class="text-xs text-muted hover:text-ink mt-1.5" @click=${()=>{this.editingField="newfact"}}>+ add detail</button>`}`}submitNewFact(e){const t=this.renderRoot.querySelector("#nf-label"),s=this.renderRoot.querySelector("#nf-value")?.value.trim();if(!s){this.editingField=null;return}this.post(`/api/circle/person/${e}/fact`,{value:s,label:t?.value.trim()||null}),this.editingField=null}renderDetailBody(e){return r`
      <div class="px-4 py-4 flex items-start gap-3">
        ${this.renderDetailAvatar(e)}
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div class="text-lg font-semibold text-ink min-w-0">${this.editable("name",e.name,"text-lg font-semibold text-ink",t=>t&&void this.patchPerson(e.id,{name:t}))}</div>
            <div class="flex flex-wrap items-center justify-end gap-1 shrink-0 pt-1">${this.renderCirclePills(e)}</div>
          </div>
          <div class="text-sm text-muted">${this.editable("location",e.location,"text-sm text-muted",t=>void this.patchPerson(e.id,{location:t||null}),"+ add address")}</div>
          <div class="text-sm text-muted">${this.editable("title",e.title,"text-sm text-muted",t=>void this.patchPerson(e.id,{title:t||null}),"+ what they do")}</div>
          ${e.company||this.editingField==="company"?r`<div class="text-sm text-muted">${this.editable("company",e.company,"text-sm text-muted",t=>void this.patchPerson(e.id,{company:t||null}))}</div>`:c}
        </div>
      </div>

      ${this.isFollowingOnly(e)?c:r`<div class="px-4 pb-1">${this.renderKit(e)}</div>`}

      ${this.section("Action items",this.renderActions(e))}

      ${this.section("Notes",r`
        ${this.editingNote==="new"?this.renderNewNoteCard():c}
        ${e.notes.length===0&&this.editingNote!=="new"?r`<p class="text-xs text-muted italic">No notes yet.</p>`:c}
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
      </div>`:c}renderDetail(){const e=this.detail;return e?r`
      <header class="relative px-3 py-2.5 shrink-0 flex items-center justify-between gap-2">
        <button type="button" class="text-base text-ink hover:bg-hover flex items-center gap-1 px-2 py-1 -ml-1 rounded" @click=${()=>this.back()}>‹ All</button>
        <button type="button" class="text-muted hover:text-ink p-1.5 rounded hover:bg-hover" title="Settings" @click=${()=>{this.settingsOpen=!this.settingsOpen}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        ${this.renderSettingsPanel()}
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.renderDetailBody(e)}
      </div>`:r`<div class="flex-1 grid place-items-center text-muted text-sm">Loading…</div>`}async openReview(){try{const e=await fetch("/api/circle/pending");e.ok&&(this.pending=(await e.json()).pending)}catch{}this.view="review"}async confirmPending(e,t){await fetch(`/api/circle/pending/${e}/confirm`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person_id:t})}),this.pending=this.pending.filter(i=>i.id!==e),await this.refresh(),this.pending.length===0&&(this.view="list")}async rejectPending(e){await this.del(`/api/circle/pending/${e}`),this.pending=this.pending.filter(t=>t.id!==e),this.pending.length===0&&(this.view="list")}renderReview(){return r`
      <header class="px-3 py-2.5 border-b border-line shrink-0 flex items-center gap-2">
        <button type="button" class="text-sm text-muted hover:text-ink flex items-center gap-1 px-1.5 py-1 rounded hover:bg-hover" @click=${()=>{this.view="list"}}>‹ All</button>
        <span class="text-sm text-ink font-medium">Confirm what I picked up</span>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto px-4 py-3">
        ${this.pending.length===0?r`<p class="text-sm text-muted">Nothing to confirm.</p>`:c}
        <ul class="space-y-3">${this.pending.map(e=>{const t=e.target_kind==="person",i=e.person_id==null&&!t;return r`
          <li class="border border-line rounded-lg p-3">
            ${t?r`<p class="text-sm font-medium text-ink mb-0.5">Add ${e.person_hint??"this person"} to your circle?</p>`:c}
            <p class="text-sm ${t?"text-muted":"text-ink"} mb-2">${e.suggestion}</p>
            ${i?r`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${e.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(s=>r`<option value=${s.id}>${s.name}</option>`)}
                </select>
              </div>`:c}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(e.id)}>${t?"Not now":"No"}</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const s=this.renderRoot.querySelector(`#pend-${e.id}`),n=e.person_id??(s?.value?Number(s.value):null);if(i&&n==null){alert("Pick a person first.");return}this.confirmPending(e.id,n)}}>${t?"Add":"Yes"}</button>
            </div>
          </li>`})}</ul>
      </div>`}render(){return r`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};K([d()],q.prototype,"view",2);K([d()],q.prototype,"circles",2);K([d()],q.prototype,"people",2);K([d()],q.prototype,"pendingCount",2);K([d()],q.prototype,"loading",2);K([d()],q.prototype,"filter",2);K([d()],q.prototype,"selectedId",2);K([d()],q.prototype,"detail",2);K([d()],q.prototype,"adding",2);K([d()],q.prototype,"pending",2);K([d()],q.prototype,"draftName",2);K([d()],q.prototype,"draftCircle",2);K([d()],q.prototype,"editingNote",2);K([d()],q.prototype,"creatingCircle",2);K([d()],q.prototype,"editingField",2);K([d()],q.prototype,"settingsOpen",2);K([d()],q.prototype,"showCompletedActions",2);K([d()],q.prototype,"detailsOpen",2);K([d()],q.prototype,"expandedNotes",2);K([d()],q.prototype,"photoMenuOpen",2);K([V("#photo-file")],q.prototype,"photoInput",2);q=K([w("circle-section")],q);var Lm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,ae=(e,t,i,s)=>{for(var n=s>1?void 0:s?Rm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Lm(t,i,n),n};const Di=[{key:"topic",question:"What do you want to pull off?",hint:'The quest in a few words. "Retell webhook into Nudge", "a story people listen to".',required:!0},{key:"mission",question:"What will exist when it's done?",hint:"Something real that isn't there now: a workflow running on live calls, a story told to a room, a tool strangers use.",required:!0},{key:"success",question:"Who sees it, or what proves it's real?",hint:"A person or a live run: a user, a listener, a client, production. This becomes the last step, the gate.",required:!0},{key:"known",question:"What do you already have or know?",hint:'The steps skip it. "Nothing" is a fine answer.',required:!1}],Nm=[2,3,4,6],Fm={link:"a link",file:"a file",screenshot:"a screenshot",recording:"a recording",photo:"a photo",quote:"what they said",other:"proof"},jm=86400,Um=()=>Math.floor(Date.now()/1e3),Cn=e=>new Date(e*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"});let ie=class extends T{constructor(){super(...arguments),this.quests=[],this.journal=[],this.loading=!0,this.view="list",this.wizardStep=0,this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.submitting=!1,this.error="",this.proofText="",this.proofUrl="",this.sending=!1,this.stuckOpen=!1,this.stuckText="",this.shelving=!1,this.shelveWhy="",this.openScrolls=[],this.poll=null}connectedCallback(){super.connectedCallback(),this.refresh(),this.poll=setInterval(()=>{this.view!=="wizard"&&!this.proofText&&!this.proofUrl&&!this.stuckOpen&&!this.shelving&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),this.poll&&clearInterval(this.poll)}async refresh(){try{const e=await fetch("/api/learn");if(e.ok){const t=await e.json();this.quests=t.quests,this.journal=t.journal}}catch{}this.loading=!1}get active(){return this.quests.find(e=>e.status==="active")??null}currentStep(e){return e.steps.find(t=>t.status==="todo")??null}daysLeft(e){return e.due_at==null?null:Math.ceil((e.due_at-Um())/jm)}async post(e,t){return fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:t?JSON.stringify(t):void 0})}openWizard(){if(this.active){this.view=this.active.id;return}this.wizard={topic:"",mission:"",success:"",known:""},this.weeks=4,this.wizardStep=0,this.error="",this.view="wizard",this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}wizardNext(){if(this.wizardStep<Di.length){const e=Di[this.wizardStep];if(e.required&&!this.wizard[e.key].trim())return;this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}else this.createQuest()}async createQuest(){if(!this.submitting){this.submitting=!0,this.error="";try{const e=await this.post("/api/learn/quests",{...this.wizard,weeks:this.weeks}),t=await e.json().catch(()=>({}));e.ok&&t.id?(await this.refresh(),this.view=t.id):this.error=t.error||"Couldn't start the quest."}finally{this.submitting=!1}}}renderWizard(){const e=this.wizardStep===Di.length,t=e?null:Di[this.wizardStep],i=e||!t.required||!!this.wizard[t.key].trim(),s=Di.length+1;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto pt-4">
          <div class="flex gap-1.5 mb-6">
            ${Array.from({length:s},(n,o)=>r`<div class="h-1 flex-1 rounded-full ${o<=this.wizardStep?"bg-accent":"bg-line"}"></div>`)}
          </div>
          ${e?r`
                <h3 class="text-base font-semibold text-ink mb-1">How many weeks?</h3>
                <p class="text-xs text-muted mb-3">When time's up, the quest ships or gets shelved with a one-line why. 2 for a small thing, 4 as the default, 6 for a real build.</p>
                <div class="grid grid-cols-4 gap-2">
                  ${Nm.map(n=>r`<button type="button"
                    class="px-3 py-2 text-sm rounded-lg border ${this.weeks===n?"border-ink bg-ink text-white":"border-line text-ink hover:bg-hover"}"
                    @click=${()=>{this.weeks=n}}>${n}</button>`)}
                </div>
              `:r`
                <h3 class="text-base font-semibold text-ink mb-1">${t.question}</h3>
                <p class="text-xs text-muted mb-3">${t.hint}</p>
                <textarea
                  class="wizard-input w-full h-24 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
                  .value=${this.wizard[t.key]}
                  placeholder=${t.required?"":"optional — Enter to skip"}
                  @input=${n=>{this.wizard={...this.wizard,[t.key]:n.target.value}}}
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
            >${this.submitting?"…":e?"Start the quest":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async patchStep(e,t){await fetch(`/api/learn/steps/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async submitProof(e){const t=this.proofText.trim(),i=this.proofUrl.trim();if(!(!t&&!i||this.sending)){this.sending=!0;try{(await this.post(`/api/learn/steps/${e.id}/proof`,{text:t,url:i})).ok&&(this.proofText="",this.proofUrl="")}finally{this.sending=!1}await this.refresh()}}async askScroll(e){const t=this.stuckText.trim();this.stuckOpen=!1,this.stuckText="",await this.post(`/api/learn/steps/${e.id}/unblock`,{stuck:t}),this.openScrolls=[...this.openScrolls,e.id],await this.refresh()}async markPassed(e){await this.post(`/api/learn/steps/${e.id}/pass`,{}),await this.refresh()}async ship(e){confirm(`Ship "${e.topic}"? Only do this if the gate really happened.`)&&(await this.post(`/api/learn/quests/${e.id}/ship`,{}),await this.refresh())}async shelve(e){const t=this.shelveWhy.trim();t&&(this.shelving=!1,this.shelveWhy="",await this.post(`/api/learn/quests/${e.id}/shelve`,{why:t}),await this.refresh())}async removeQuest(e){confirm(`Delete "${e.topic}", its steps and its journal entries?`)&&(await fetch(`/api/learn/quests/${e.id}`,{method:"DELETE"}),this.view="list",await this.refresh())}async regenSteps(e){e.steps.some(t=>t.status==="done")&&!confirm("Regenerating throws away the current steps, including the passed ones. Continue?")||(await this.post(`/api/learn/quests/${e.id}/regen`,{}),await this.refresh())}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const i=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(s=>s.codePointAt(0).toString(16)).join("-");return i?`/twemoji/${i}.svg`:null}renderEmoji(e,t="w-[18px] h-[18px]",i="text-[15px]"){const s=e.emoji||"🧭",n=this.iconUrl(s);return n?r`<img src=${n} alt="" class="${t} select-none shrink-0" draggable="false" />`:r`<span class="${i} leading-none shrink-0">${s}</span>`}statusPill(e){if(e.status==="done")return e.result==="shipped"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold shrink-0">Shipped</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-line/60 text-muted font-semibold shrink-0">Shelved</span>`;const t=this.daysLeft(e);return t==null?c:t<=0?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold shrink-0">Time's up</span>`:r`<span class="text-[10px] px-1.5 py-0.5 rounded-full ${t<=3?"bg-amber-100 text-amber-700":"bg-accent/15 text-accent"} font-semibold shrink-0">${t}d left</span>`}renderClock(e){const t=this.daysLeft(e),i=e.weeks*7,s=t==null?0:Math.min(i,Math.max(0,i-t)),n=Math.round(s/i*100),o=t!=null&&t<=0;return r`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="h-1.5 rounded-full bg-line overflow-hidden"><div class="h-full ${o?"bg-amber-500":"bg-accent"} transition-all" style="width:${n}%"></div></div>
        <div class="flex items-center justify-between gap-3 mt-2">
          <p class="text-xs text-muted">
            ${o?r`<span class="text-ink font-medium">Time's up.</span> Ship it if the gate happened, otherwise shelve it with a one-line why.`:r`<span class="text-ink font-medium">${t} day${t===1?"":"s"} left</span> of ${e.weeks} weeks · due ${e.due_at?Cn(e.due_at):""}`}
          </p>
          ${o&&!this.shelving?r`<div class="flex items-center gap-2 shrink-0">
                <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.ship(e)}>Ship it</button>
                <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>{this.shelving=!0}}>Shelve</button>
              </div>`:c}
        </div>
        ${this.shelving?r`<div class="flex items-center gap-2 mt-2">
              <input class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                placeholder="one line: why it didn't ship"
                .value=${this.shelveWhy}
                @input=${a=>{this.shelveWhy=a.target.value}}
                @keydown=${a=>{a.key==="Enter"?this.shelve(e):a.key==="Escape"&&(this.shelving=!1,this.shelveWhy="")}} />
              <button type="button" class="px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover ${this.shelveWhy.trim()?"":"opacity-40 pointer-events-none"}" @click=${()=>void this.shelve(e)}>Shelve</button>
              <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.shelving=!1,this.shelveWhy=""}}>cancel</button>
            </div>`:c}
      </div>
    `}renderStepsPending(e){return e.path_status==="failed"?r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          The steps didn't come.
          <button type="button" class="px-2 py-0.5 rounded-md border border-line text-ink hover:bg-hover" @click=${()=>void this.regenSteps(e)}>Retry</button>
        </div>`:r`<div class="flex items-center gap-2 px-4 py-3 text-xs text-muted">
          <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
          Laying out the steps — lands in under a minute…
        </div>`}renderProofForm(e){if(e.verdict==="judging")return r`<div class="flex items-center gap-2 mt-2 text-xs text-muted">
        <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
        Checking your proof against the bar…
      </div>`;const t=e.verdict==null&&!!e.verdict_note&&!!e.proof;return r`
      ${e.verdict==="miss"&&e.verdict_note?r`<div class="mt-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
            <p class="text-[10px] font-semibold text-amber-700 mb-0.5">Not yet</p>
            <p class="text-xs text-amber-800 leading-snug">${e.verdict_note}</p>
            <p class="text-[11px] text-amber-700/80 mt-1">The step above is now the smaller version. Clear that, then bring proof again.</p>
          </div>`:c}
      ${t?r`<div class="mt-2 rounded-lg bg-line/40 border border-line px-3 py-2">
            <p class="text-xs text-ink leading-snug">${e.verdict_note}</p>
            <button type="button" class="mt-1.5 px-2 py-0.5 text-[11px] rounded-md border border-line text-ink hover:bg-hover" @click=${()=>void this.markPassed(e)}>Mark passed</button>
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
            @click=${()=>void this.submitProof(e)}
          >${this.sending?"…":e.is_gate?"Submit gate proof":"Submit proof"}</button>
        </div>
      </div>
      ${this.renderScroll(e)}
    `}renderScroll(e){const t=this.openScrolls.includes(e.id);return r`
      <div class="mt-2">
        ${e.scroll_status==="pending"?r`<p class="flex items-center gap-2 text-[11px] text-muted"><span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> Writing your scroll…</p>`:e.scroll_status==="ready"&&e.scroll?r`
                <button type="button" class="text-[11px] text-accent hover:underline" @click=${()=>{this.openScrolls=t?this.openScrolls.filter(i=>i!==e.id):[...this.openScrolls,e.id]}}>
                  ${t?"▾":"▸"} Scroll${e.stuck?r` <span class="text-muted">· ${e.stuck}</span>`:c}
                </button>
                ${t?r`<div class="chat-md mt-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-xs leading-relaxed">${W(pl(e.scroll))}</div>`:c}
                ${t?r`<button type="button" class="mt-1 text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>stuck on something else?</button>`:c}
              `:this.stuckOpen?r`<div class="flex items-center gap-2">
                  <input class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded-md outline-none focus:border-ink placeholder:text-muted/50"
                    placeholder="what's stuck? (optional — Enter to ask)"
                    .value=${this.stuckText}
                    @input=${i=>{this.stuckText=i.target.value}}
                    @keydown=${i=>{i.key==="Enter"?this.askScroll(e):i.key==="Escape"&&(this.stuckOpen=!1,this.stuckText="")}} />
                  <button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-lg border border-ink text-ink hover:bg-hover" @click=${()=>void this.askScroll(e)}>Ask for a scroll</button>
                </div>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.stuckOpen=!0}}>
                  ${e.scroll_status==="failed"?"The scroll didn't come. Ask again":"Stuck? Ask for a scroll"}
                </button>`}
      </div>
    `}renderStepRow(e,t,i){const s=t.status==="done",n=t.status==="skipped",o=s||n,a=e.status==="active";return r`
      <li class="group relative flex gap-3 px-4 py-3 ${i?"bg-accent/5":""}">
        <span class="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-semibold ${s?"bg-accent text-white":n?"bg-line text-muted":i?"border-[1.5px] border-accent text-accent":"border-[1.5px] border-line text-muted"}">
          ${s?r`<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:n?"~":t.seq}
        </span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-medium ${o?"text-muted line-through decoration-line":"text-ink"}">${t.title}</span>
            ${t.is_gate?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-ink text-white font-semibold">Gate</span>`:c}
            ${i?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-semibold">Here</span>`:c}
            ${t.days&&!o?r`<span class="text-[10px] text-muted">~${t.days}d</span>`:c}
          </div>
          ${t.exercise&&!o?r`<p class="text-xs text-ink/80 mt-0.5 leading-snug">${t.exercise}</p>`:c}
          ${t.bar&&!o?r`<p class="text-[11px] text-muted mt-1 leading-snug"><span class="font-semibold">Bar:</span> ${t.bar}${t.proof_kind?r` <span class="text-muted/70">· bring ${Fm[t.proof_kind]??t.proof_kind}</span>`:c}</p>`:c}
          ${s&&(t.proof||t.verdict_note)?r`<p class="text-xs text-muted/80 mt-0.5 italic leading-snug">${t.proof??t.verdict_note}${t.proof_url?r` <a class="text-link not-italic hover:underline" href=${t.proof_url} target="_blank" rel="noopener">link</a>`:c}</p>`:c}
          ${i&&a?this.renderProofForm(t):c}
        </div>
        ${a?r`<div class="absolute right-3 top-3 flex items-center gap-2 opacity-0 group-hover:opacity-70 hover:!opacity-100">
              ${t.status==="todo"?r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Already covered — skip" @click=${()=>void this.patchStep(t.id,{status:"skipped"})}>skip</button>`:r`<button type="button" class="text-[11px] text-muted hover:text-ink" title="Reopen" @click=${()=>void this.patchStep(t.id,{status:"todo"})}>reopen</button>`}
            </div>`:c}
      </li>
    `}renderDetail(e){const t=this.currentStep(e),i=e.path_status==="ready",s=e.steps.filter(a=>a.status!=="todo").length,n=[e.mission?{label:"Outcome",value:e.mission}:null,e.success?{label:"Gate",value:e.success}:null,e.known?{label:"Has already",value:e.known}:null,e.why?{label:"Why shelved",value:e.why}:null].filter(a=>a!==null),o=this.journal.filter(a=>a.skill_id===e.id);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        <div class="flex items-center gap-2 px-1">
          <button type="button" class="text-sm text-muted hover:text-ink" @click=${()=>{this.view="list"}}>←</button>
          ${this.renderEmoji(e,"w-[22px] h-[22px]","text-[19px]")}
          <h3 class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${e.topic}</h3>
          ${this.statusPill(e)}
          <button type="button" class="shrink-0 text-muted opacity-60 hover:opacity-100 text-base leading-none px-1" title="Delete quest" @click=${()=>void this.removeQuest(e)}>×</button>
        </div>

        ${e.status==="active"?this.renderClock(e):c}

        ${n.length?r`<section class="rounded-xl border border-line bg-surface px-4 py-3 space-y-1.5">
              ${n.map(a=>r`<p class="text-xs leading-snug"><span class="font-semibold text-[10px] text-muted mr-1.5">${a.label}</span><span class="text-ink">${a.value}</span></p>`)}
            </section>`:c}

        <section class="rounded-xl border border-line bg-surface">
          <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Steps${i&&e.steps.length?r` · ${s}/${e.steps.length}`:c}</h4>
          ${i?e.steps.length===0?r`<p class="px-4 pb-3 text-xs text-muted/70">No steps — ask the coach in chat, or regenerate.</p>`:r`<ul class="pb-2 divide-y divide-line/40">
                  ${e.steps.map(a=>this.renderStepRow(e,a,t?.id===a.id))}
                </ul>`:this.renderStepsPending(e)}
        </section>

        ${o.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${o.map(a=>this.renderJournalRow(a))}</ul>
            </section>`:c}

        ${i&&e.status==="active"?r`<div class="flex items-center gap-3 px-1">
              <button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>void this.regenSteps(e)}>↻ regenerate steps</button>
              ${!this.daysLeft(e)||(this.daysLeft(e)??1)>0?r`<button type="button" class="text-[11px] text-muted/70 hover:text-ink" @click=${()=>{this.shelving=!0}}>shelve early</button>`:c}
            </div>`:c}
      </div>
    `}renderJournalRow(e){const t=e.kind==="shipped"?"🏁":e.kind==="gate"?"🚪":e.kind==="shelved"?"📦":e.kind==="unblock"?"📜":e.kind==="started"?"🧭":"✓";return r`
      <li class="flex gap-2.5 px-4 py-1.5">
        <span class="shrink-0 w-10 text-[11px] text-muted tabular-nums pt-px">${Cn(e.created_at)}</span>
        <span class="shrink-0 text-[11px] pt-px">${t}</span>
        <span class="flex-1 min-w-0 text-xs text-ink leading-snug">${e.text}${e.url?r` <a class="text-link hover:underline" href=${e.url} target="_blank" rel="noopener">link</a>`:c}</span>
      </li>
    `}renderActiveCard(e){const t=this.currentStep(e),i=e.steps.filter(s=>s.status!=="todo").length;return r`
      <button type="button" class="w-full text-left rounded-xl border border-ink/20 bg-surface px-4 py-3 hover:bg-hover transition-colors" @click=${()=>{this.view=e.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(e,"w-[20px] h-[20px]","text-[17px]")}
          <span class="flex-1 min-w-0 text-sm font-semibold text-ink truncate">${e.topic}</span>
          ${this.statusPill(e)}
        </div>
        ${e.path_status!=="ready"?r`<p class="mt-1.5 text-xs text-muted flex items-center gap-1.5">
              ${e.path_status==="failed"?"the steps didn't come — open to retry":r`<span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-line border-t-accent animate-spin"></span> laying out the steps…`}
            </p>`:t?r`<p class="mt-1.5 text-xs text-muted truncate"><span class="text-accent font-medium">Step ${i+1} of ${e.steps.length}:</span> ${t.title}${t.verdict==="judging"?" · checking proof":""}</p>`:r`<p class="mt-1.5 text-xs text-muted">Every step is in. Ship it.</p>`}
      </button>
    `}renderShelfCard(e){return r`
      <button type="button" class="w-full text-left rounded-xl border border-line bg-surface px-4 py-2.5 hover:bg-hover transition-colors" @click=${()=>{this.view=e.id}}>
        <div class="flex items-center gap-2.5">
          ${this.renderEmoji(e,"w-[16px] h-[16px]","text-[14px]")}
          <span class="flex-1 min-w-0 text-sm text-ink truncate">${e.topic}</span>
          ${this.statusPill(e)}
          ${e.completed_at?r`<span class="text-[11px] text-muted shrink-0">${Cn(e.completed_at)}</span>`:c}
        </div>
        ${e.result==="shelved"&&e.why?r`<p class="mt-1 text-xs text-muted truncate">${e.why}</p>`:c}
      </button>
    `}renderList(){const e=this.active,t=this.quests.filter(s=>s.status==="done"),i=this.journal.slice(0,12);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
        ${this.loading?c:e?this.renderActiveCard(e):r`<div class="rounded-xl border border-line bg-surface px-4 py-6 text-center">
                <p class="text-sm text-ink font-medium">${t.length?"Nothing in flight.":"A quest is a real outcome someone else can see."}</p>
                <p class="text-xs text-muted mt-1">Name it, name who sees it, pick the weeks. You get steps that each end in proof; the last one is the gate.</p>
                <button type="button" class="mt-3 px-4 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover" @click=${this.openWizard}>Start a quest</button>
              </div>`}

        ${i.length?r`<section class="rounded-xl border border-line bg-surface">
              <h4 class="px-4 pt-3 pb-1 text-[11px] font-semibold text-muted">Journal</h4>
              <ul class="pb-2">${i.map(s=>this.renderJournalRow(s))}</ul>
            </section>`:c}

        ${t.length?r`<section class="space-y-2">
              <h4 class="px-1 pt-1 text-[11px] font-semibold text-muted">Shelf</h4>
              ${t.map(s=>this.renderShelfCard(s))}
            </section>`:c}
      </div>
    `}render(){const e=typeof this.view=="number"?this.quests.find(i=>i.id===this.view):void 0,t=this.active;return r`
      <div class="relative flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-sm font-semibold text-ink">Learn</h2>
          ${this.view==="wizard"?c:t?r`<span class="text-[11px] text-muted" title="Ship or shelve the running quest to start another">one quest at a time</span>`:r`<button type="button" class="px-2.5 py-1 rounded-full text-sm font-medium text-muted hover:text-ink hover:bg-hover transition-colors" @click=${this.openWizard}>+ New quest</button>`}
        </header>
        ${this.view==="wizard"?this.renderWizard():e?this.renderDetail(e):this.renderList()}
      </div>
    `}};ae([d()],ie.prototype,"quests",2);ae([d()],ie.prototype,"journal",2);ae([d()],ie.prototype,"loading",2);ae([d()],ie.prototype,"view",2);ae([d()],ie.prototype,"wizardStep",2);ae([d()],ie.prototype,"wizard",2);ae([d()],ie.prototype,"weeks",2);ae([d()],ie.prototype,"submitting",2);ae([d()],ie.prototype,"error",2);ae([d()],ie.prototype,"proofText",2);ae([d()],ie.prototype,"proofUrl",2);ae([d()],ie.prototype,"sending",2);ae([d()],ie.prototype,"stuckOpen",2);ae([d()],ie.prototype,"stuckText",2);ae([d()],ie.prototype,"shelving",2);ae([d()],ie.prototype,"shelveWhy",2);ae([d()],ie.prototype,"openScrolls",2);ie=ae([w("learn-section")],ie);var Bm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,Bo=(e,t,i,s)=>{for(var n=s>1?void 0:s?Hm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Bm(t,i,n),n};let Hs=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await Le(()=>import("./been-to-section-BLioEusA.js"),__vite__mapDeps([6,3,4,7,5,8])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<been-to-section class="flex flex-col flex-1 min-h-0"></been-to-section>`:r`<div class="flex-1 grid place-items-center text-sm" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>Could not load Been to. Retry</button>`:r`<span>Loading your map…</span>`}</div>${c}`}};Bo([d()],Hs.prototype,"ready",2);Bo([d()],Hs.prototype,"failed",2);Hs=Bo([w("been-to-loader")],Hs);var zm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,X=(e,t,i,s)=>{for(var n=s>1?void 0:s?qm(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&zm(t,i,n),n};const on="h-8 px-3.5 inline-flex items-center justify-center gap-1.5 rounded-full text-sm font-medium transition-colors duration-[120ms] disabled:opacity-50 disabled:pointer-events-none",Ki=`${on} bg-ink text-surface hover:opacity-85`,po=`${on} bg-surface text-ink ring-1 ring-line shadow-card hover:bg-hover`,Km=`${on} text-ink-2 hover:text-[#dc2626] hover:bg-[#dc2626]/10`,Wm=`${on} bg-[#dc2626] text-white hover:bg-[#b91c1c]`,Wr="h-9 w-full px-3 rounded-lg bg-surface text-sm text-ink ring-1 ring-line placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink/40",En="inline-flex items-center gap-1.5 h-5 px-2 rounded-full text-xs font-medium shrink-0",zs=e=>e.name||e.login;function Ho(e){return new Date(e*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function Hl(e){if(!e)return"";const t=Math.floor((Date.now()/1e3-e)/60);return t<2?"Now":t<60?`${t}m ago`:t<1440?`${Math.floor(t/60)}h ago`:t<1440*7?`${Math.floor(t/1440)}d ago`:Ho(e)}async function zl(e,t,i){const s=await fetch(t,{method:e,headers:{"content-type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)}),n=await s.json().catch(()=>({}));if(!s.ok||!n.member)throw new Error(n.error||"Something went wrong. Try again.");return{member:n.member}}const Gm=(e,t)=>zl("PATCH",`/api/members/${encodeURIComponent(e)}`,t).then(i=>i.member);function Gr(e){return r`<span class="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-hover text-xs font-semibold text-ink">${(e||"?").slice(0,1).toUpperCase()}</span>`}let Wi=class extends T{constructor(){super(...arguments),this.data=null,this.failed=!1,this.showRemoved=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const e=await fetch("/api/members");if(!e.ok)throw new Error(String(e.status));this.data=await e.json(),this.failed=!1}catch{this.failed=!this.data}}openAdd(){const e=document.createElement("member-add-dialog");e.signInUrl=this.data?.signInUrl||location.origin,e.addEventListener("member-changed",()=>void this.refresh()),document.body.append(e)}openMember(e){const t=document.createElement("member-dialog");t.member=e,t.signInUrl=this.data?.signInUrl||location.origin,t.addEventListener("member-changed",()=>void this.refresh()),document.body.append(t)}renderRow(e){const t=zs(e),i=e.status==="removed",s=!i&&!e.lastSeen,n=()=>this.openMember(e);return r`
      <tr
        class="group cursor-pointer hover:bg-hover focus-visible:bg-hover outline-none"
        tabindex="0"
        @click=${n}
        @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n())}}
      >
        <td class="py-2.5 pr-3">
          <div class="flex items-center gap-3 min-w-0">
            ${Gr(t)}
            <div class="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span class="text-sm text-ink truncate group-hover:underline underline-offset-2">${t}</span>
              ${e.name?r`<span class="text-sm text-ink truncate">${e.login}</span>`:c}
            </div>
            ${s?r`<span class="${En} bg-warn/12 text-warn"><span class="w-1.5 h-1.5 rounded-full bg-warn"></span>Not signed in yet</span>`:c}
            ${!i&&e.ai==="off"?r`<span class="${En} bg-ink/6 text-ink-2">AI off</span>`:c}
          </div>
        </td>
        <td class="py-2.5 text-sm text-muted text-right whitespace-nowrap">
          ${i?e.removedAt?Ho(e.removedAt):"":Hl(e.lastSeen)}
        </td>
      </tr>
    `}renderTable(e,t){const i=this.data?.owner;return r`
      <div class="mana-card px-4">
        <table class="w-full sm:table-fixed">
          <colgroup><col class="sm:w-[75%]" /><col class="sm:w-[25%]" /></colgroup>
          <thead>
            <tr>
              <th class="pt-3.5 pb-2 text-left text-sm font-semibold text-ink-2">Name</th>
              <th class="pt-3.5 pb-2 text-right text-sm font-semibold text-ink-2">${t?"Last seen":"Removed"}</th>
            </tr>
          </thead>
          <tbody class="[&>tr>td]:border-t-[0.5px] [&>tr>td]:border-line">
            ${t&&i?r`<tr>
                  <td class="py-2.5 pr-3">
                    <div class="flex items-center gap-3 min-w-0">
                      ${Gr(i.name||i.login)}
                      <div class="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                        <span class="text-sm text-ink truncate">${i.name||i.login}</span>
                        <span class="text-sm text-ink truncate">${i.login}</span>
                      </div>
                      <span class="${En} bg-ink/6 text-ink-2">You</span>
                    </div>
                  </td>
                  <td></td>
                </tr>`:c}
            ${e.map(s=>this.renderRow(s))}
          </tbody>
        </table>
      </div>
    `}render(){const e=this.data?.members??[],t=e.filter(s=>s.status==="active"),i=e.filter(s=>s.status==="removed");return r`
      <div class="flex-1 min-h-0 overflow-y-auto">
        <div class="mx-auto w-full max-w-[58rem] px-4 py-5 space-y-3">
          <div class="flex justify-end">
            <button type="button" class=${Ki} @click=${()=>this.openAdd()}>
              <sc-icon name="lucide-plus" class="w-4 h-4"></sc-icon>Add member
            </button>
          </div>

          ${this.failed?r`<div class="mana-card px-4 py-3 text-sm text-ink">Couldn't load members. <button type="button" class="underline underline-offset-2" @click=${()=>void this.refresh()}>Try again</button></div>`:this.data?this.renderTable(t,!0):r`<div class="mana-card px-4 py-3"><div class="h-5 rounded bg-hover animate-pulse"></div></div>`}

          ${i.length?r`
                <button type="button" class="text-sm text-muted hover:text-ink px-1" @click=${()=>{this.showRemoved=!this.showRemoved}}>
                  ${this.showRemoved?"Hide removed":`Show ${i.length} removed`}
                </button>
                ${this.showRemoved?this.renderTable(i,!1):c}
              `:c}
        </div>
      </div>
    `}};X([d()],Wi.prototype,"data",2);X([d()],Wi.prototype,"failed",2);X([d()],Wi.prototype,"showRemoved",2);Wi=X([w("members-section")],Wi);let et=class extends T{constructor(){super(...arguments),this.signInUrl="",this.email="",this.name="",this.ai=!0,this.busy=!1,this.error="",this.added=null,this.copied=!1}close(){this.busy||this.remove()}firstUpdated(){requestAnimationFrame(()=>this.querySelector("input[name=email]")?.focus())}async submit(){if(!(this.busy||!this.email.trim())){this.busy=!0,this.error="";try{const{member:e}=await zl("POST","/api/members",{email:this.email,name:this.name,ai:this.ai?"on":"off"});this.added=e,this.dispatchEvent(new CustomEvent("member-changed"))}catch(e){this.error=e instanceof Error?e.message:String(e)}finally{this.busy=!1}}}async copyUrl(){try{await navigator.clipboard.writeText(this.signInUrl),this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)}catch{}}renderAdded(e){const t=this.signInUrl.replace(/^https?:\/\//,"");return r`<sc-dialog label="${zs(e)} can sign in now" open @sc-hide=${this.close}>
      <div class="space-y-3 text-sm text-ink">
        <p>Send them this link. They sign in with the Google account for <span class="font-medium">${e.login}</span>.</p>
        <div class="flex items-center gap-2">
          <span class="flex-1 min-w-0 h-9 px-3 inline-flex items-center rounded-lg bg-hover truncate">${t}</span>
          <button type="button" class=${po} @click=${()=>void this.copyUrl()}>
            <sc-icon name="lucide-${this.copied?"check":"copy"}" class="w-4 h-4"></sc-icon>${this.copied?"Copied":"Copy"}
          </button>
        </div>
      </div>
      <div slot="footer" class="flex justify-end">
        <button type="button" class=${Ki} @click=${()=>this.close()}>Done</button>
      </div>
    </sc-dialog>`}render(){if(this.added)return this.renderAdded(this.added);const e=t=>{t.key==="Enter"&&(t.preventDefault(),this.submit())};return r`<sc-dialog label="Add member" open @sc-hide=${this.close}>
      <div class="space-y-4">
        <label class="block space-y-1.5">
          <span class="text-sm font-medium text-ink-2">Email</span>
          <input name="email" type="email" autocomplete="off" placeholder="name@gmail.com" class=${Wr}
            .value=${this.email} @input=${t=>{this.email=t.target.value,this.error=""}} @keydown=${e} />
        </label>
        <label class="block space-y-1.5">
          <span class="text-sm font-medium text-ink-2">Name</span>
          <input name="name" type="text" autocomplete="off" placeholder="Optional" class=${Wr}
            .value=${this.name} @input=${t=>{this.name=t.target.value}} @keydown=${e} />
        </label>
        <div class="flex items-center justify-between gap-4">
          <span class="text-sm text-ink">Uses your AI subscription</span>
          <sc-toggle .checked=${this.ai} @sc-change=${t=>{this.ai=t.detail.checked}}></sc-toggle>
        </div>
        ${this.error?r`<p class="text-sm text-[#dc2626]">${this.error}</p>`:c}
      </div>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class=${po} @click=${()=>this.close()}>Cancel</button>
        <button type="button" class=${Ki} ?disabled=${this.busy||!this.email.trim()} @click=${()=>void this.submit()}>
          ${this.busy?"Adding…":"Add member"}
        </button>
      </div>
    </sc-dialog>`}};X([b({attribute:!1})],et.prototype,"signInUrl",2);X([d()],et.prototype,"email",2);X([d()],et.prototype,"name",2);X([d()],et.prototype,"ai",2);X([d()],et.prototype,"busy",2);X([d()],et.prototype,"error",2);X([d()],et.prototype,"added",2);X([d()],et.prototype,"copied",2);et=X([w("member-add-dialog")],et);let Ct=class extends T{constructor(){super(...arguments),this.member=null,this.signInUrl="",this.saving=!1,this.saved=!1,this.error="",this.confirming=!1}close(){this.saving||this.remove()}async save(e){if(!this.member)return!1;this.saving=!0,this.error="";try{return this.member=await Gm(this.member.login,e),this.saved=!0,setTimeout(()=>{this.saved=!1},1500),this.dispatchEvent(new CustomEvent("member-changed")),!0}catch(t){return this.error=t instanceof Error?t.message:String(t),!1}finally{this.saving=!1}}saveName(e){const i=e.target.value.trim().replace(/\s+/g," ");!this.member||i===this.member.name||this.save({name:i})}renderConfirm(e){const t=zs(e);return r`<sc-dialog label="Remove ${t}?" open @sc-hide=${()=>{this.confirming=!1}}>
      <p class="text-sm text-ink leading-relaxed">${t} won't be able to sign in on any device. Their notes, goals and chats stay, and adding them back restores everything.</p>
      <div slot="footer" class="flex justify-end gap-2">
        <button type="button" class=${po} autofocus @click=${()=>{this.confirming=!1}}>Cancel</button>
        <button type="button" class=${Wm} ?disabled=${this.saving}
          @click=${async()=>{await this.save({status:"removed"})&&this.remove()}}>
          ${this.saving?"Removing…":"Remove access"}
        </button>
      </div>
    </sc-dialog>`}render(){const e=this.member;if(!e)return c;if(this.confirming)return this.renderConfirm(e);const t=e.status==="removed",i=e.lastSeen?`${Hl(e.lastSeen)}${e.lastDoor?` via ${e.lastDoor==="google"?"Google":"Tailscale"}`:""}`:"";return r`<sc-dialog label=${zs(e)} open @sc-hide=${this.close}>
      <div class="space-y-4">
        <dl class="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-3 items-center text-sm">
          <dt class="text-ink-2">Name</dt>
          <dd>
            <input type="text" placeholder="Add a name"
              class="w-full h-8 -mx-2 px-2 rounded-lg bg-transparent text-ink ring-0 hover:ring-1 hover:ring-line focus:ring-2 focus:ring-ink/40 focus:bg-surface focus:outline-none placeholder:text-muted"
              .value=${e.name} ?disabled=${t}
              @blur=${s=>this.saveName(s)}
              @keydown=${s=>{s.key==="Enter"&&s.target.blur()}} />
          </dd>
          <dt class="text-ink-2">Email</dt>
          <dd class="text-ink truncate">${e.login}</dd>
          ${t?c:r`<dt class="text-ink-2">AI</dt>
                <dd class="flex items-center justify-between gap-3">
                  <span class="text-ink">Uses your AI subscription</span>
                  <sc-toggle .checked=${e.ai==="on"} ?disabled=${this.saving}
                    @sc-change=${s=>void this.save({ai:s.detail.checked?"on":"off"})}></sc-toggle>
                </dd>`}
          <dt class="text-ink-2">Last seen</dt>
          <dd class=${i?"text-ink":"text-muted"}>${i||"Not signed in yet"}</dd>
          <dt class="text-ink-2">${t?"Removed":"Added"}</dt>
          <dd class="text-ink">${Ho(t&&e.removedAt?e.removedAt:e.addedAt)}</dd>
        </dl>
        ${this.error?r`<p class="text-sm text-[#dc2626]">${this.error}</p>`:c}
      </div>
      <div slot="footer" class="w-full flex items-center justify-between gap-2">
        ${t?r`<span></span>`:r`<button type="button" class=${Km} @click=${()=>{this.confirming=!0}}>Remove access</button>`}
        <div class="flex items-center gap-3">
          <span class="text-sm text-muted" aria-live="polite">${this.saving?"Saving…":this.saved?"Saved":""}</span>
          ${t?r`<button type="button" class=${Ki} ?disabled=${this.saving}
                @click=${async()=>{await this.save({status:"active"})&&this.remove()}}>Restore access</button>`:r`<button type="button" class=${Ki} @click=${()=>this.close()}>Done</button>`}
        </div>
      </div>
    </sc-dialog>`}};X([b({attribute:!1})],Ct.prototype,"member",2);X([b({attribute:!1})],Ct.prototype,"signInUrl",2);X([d()],Ct.prototype,"saving",2);X([d()],Ct.prototype,"saved",2);X([d()],Ct.prototype,"error",2);X([d()],Ct.prototype,"confirming",2);Ct=X([w("member-dialog")],Ct);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mo extends ac{}mo.directiveName="unsafeSVG",mo.resultType=2;const Vm=Gi(mo),Ym=3,Dn=600,An=1200,fo=3e3,Vr=80,go=1250,Qm=[/\bdelv(e|es|ing)\b/i,/\btapestry\b/i,/\btestament to\b/i,/\b(ever-evolving|fast-paced)\b/i,/\bin today'?s\b/i,/\bgame[- ]?changer\b/i,/\bunlock(s|ing)?\b/i,/\bunleash/i,/\belevate(s|d)?\b/i,/\bseamless(ly)?\b/i,/\brobust\b/i,/\bleverag(e|es|ing)\b/i,/\bharness(es|ing)?\b/i,/\bpivotal\b/i,/\bembark/i,/\brevolutioni[sz]e/i,/\bcutting-edge\b/i,/\bsynerg/i,/\bsupercharge/i,/\bnavigat(e|ing) the\b/i,/\brealm\b/i,/\bhere'?s the thing\b/i,/\blet that sink in\b/i,/\b(it'?s|this is|that'?s) not (just|only|about) [^.\n]{1,50}[,;:]\s*(it'?s|but|this is)\b/i,/\bunpopular opinion\b/i,/\bhot take\b/i,/\bplot twist\b/i,/^the result\?/im,/\bnobody (talks|tells you) about\b/i,/\bwhat nobody tells you\b/i,/\btoday years old\b/i,/\b(thrilled|humbled) to (announce|share)\b/i,/\bread that again\b/i,/\bbuckle up\b/i,/\blet me explain\b/i,/\bthat'?s it\. that'?s the post\b/i,/(^|\n)\s*(agree|thoughts)\?\s*$/i,/\brepost\s*♻/i,/\bfollow me for more\b/i,/\bin der heutigen\b/i,/\bnahtlos/i,/\bbahnbrechend/i,/\brevolutionier/i,/\bgamechanger\b/i];function Jm(e){const t=[];for(const i of Qm){const s=e.match(i);s&&t.push(s[0])}return t}const Yr=/https?:\/\/|\bwww\.[a-z]/i;function ql({body:e,firstComment:t,hasImage:i}){const s=[],n=e.trim(),o=n.length,a=n.split(`
`).find(m=>m.trim())??"";s.push(a.length<=Vr?{key:"hook",kind:"reach",level:"pass",label:'Opening line lands before "see more"'}:{key:"hook",kind:"reach",level:"warn",label:`Opening line is ${a.length} characters`,detail:`Under ${Vr} so it lands before "see more" on a phone.`}),o>fo?s.push({key:"length",level:"fail",label:`${o} characters, over LinkedIn's ${fo}`}):o<Dn?s.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the short side`,detail:`Posts that do well run ${Dn}-${An}.`}):o>An?s.push({key:"length",kind:"style",level:"warn",label:`${o} characters, on the long side`,detail:`Posts that do well run ${Dn}-${An}.`}):s.push({key:"length",kind:"style",level:"pass",label:`${o} characters`});const l=(t??"").trim();Yr.test(n)?s.push({key:"link",kind:"reach",level:"warn",label:"Link in the post",detail:"A link in the body costs 11-36% of reach. Move it to the first comment."}):s.push({key:"link",kind:"reach",level:"pass",label:Yr.test(l)?"The link goes in the first comment":"No link in the post"}),i!==void 0&&s.push(i?{key:"image",kind:"reach",level:"pass",label:"Has an image"}:{key:"image",kind:"reach",level:"warn",label:"No image",detail:"Posts with an image stop the scroll more often than text alone."}),l.length>go&&s.push({key:"comment",level:"fail",label:`First comment is ${l.length} characters, over LinkedIn's ${go}`});const h=n.match(/(^|\s)#[\p{L}\d_]+/gu)??[];h.length>3&&s.push({key:"hashtags",kind:"style",level:"warn",label:`${h.length} hashtags`,detail:"Three at most; LinkedIn treats them as a nice-to-have."});const u=(n.match(/—| – /g)??[]).length;u&&s.push({key:"dashes",kind:"style",level:"warn",label:`${u} em dash${u===1?"":"es"}`,detail:"A strong AI tell. Use a full stop or a comma."});const p=Jm(n);return p.length&&s.push({key:"ai",kind:"style",level:"warn",label:"Sounds machine-written in places",detail:p.join(", ")}),s}function Xm(e,t){return ql({body:e,firstComment:t}).filter(s=>s.level==="fail").map(s=>s.key==="numbers"&&s.detail?`${s.label}: ${s.detail}`:s.label)}var Zm=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,nt=(e,t,i,s)=>{for(var n=s>1?void 0:s?ef(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Zm(t,i,n),n};let Qr=null;function tf(){return Qr??=fetch("/api/me").then(e=>e.ok?e.json():null).catch(()=>null),Qr}const Jr="publisher.li_headline",sf='-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", Helvetica, Arial, sans-serif',Xr="rgba(0,0,0,.9)",bt="rgba(0,0,0,.6)",hs={like:It`<path d="M7 10v11H3V10h4Zm2 10.5V10.2l4.6-7.2c.3-.4.8-.6 1.3-.4 1 .3 1.6 1.3 1.4 2.3L15.5 9H20a2 2 0 0 1 2 2.3l-1.3 7.6A2.5 2.5 0 0 1 18.2 21H10a1 1 0 0 1-1-.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,comment:It`<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 9.5h10M7 12.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,repost:It`<path d="M17 3l3 3-3 3M20 6H8a4 4 0 0 0-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 0 0 4-4v-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,send:It`<path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Zm-11 10 4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>`,more:It`<circle cx="5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="19" cy="12" r="1.8" fill="currentColor"/>`,globe:It`<circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M1.8 8h12.4M8 1.8c1.8 1.7 2.7 3.8 2.7 6.2S9.8 12.5 8 14.2C6.2 12.5 5.3 10.4 5.3 8S6.2 3.5 8 1.8Z" fill="none" stroke="currentColor" stroke-width="1.2"/>`};let Ke=class extends T{constructor(){super(...arguments),this.text="",this.mode="mobile",this.imageUrl=null,this.authorName=null,this.expanded=!1,this.truncated=!1,this.me=null,this.editingHeadline=!1,this.headline=f.getState().settings[Jr]??""}connectedCallback(){super.connectedCallback(),tf().then(e=>{this.me=e})}willUpdate(e){e.has("mode")&&(this.expanded=!1)}updated(){const e=this.querySelector("[data-li-text]"),t=!!e&&!this.expanded&&e.scrollHeight>e.clientHeight+1;t!==this.truncated&&!this.expanded&&(this.truncated=t)}async saveHeadline(e){this.editingHeadline=!1;const t=e.trim();if(t!==this.headline){this.headline=t;try{await f.getState().setSetting(Jr,t)}catch{}}}renderHeadline(e){return this.editingHeadline?r`<input type="text" class="block w-full px-1 -mx-1 rounded border outline-none" style="font-size:${e};line-height:16px;color:${Xr};border-color:rgba(0,0,0,.3);background:#fff"
        aria-label="Your LinkedIn headline" placeholder="Your headline, as it shows on LinkedIn" .value=${this.headline}
        @keydown=${t=>{t.key==="Enter"&&this.saveHeadline(t.target.value),t.key==="Escape"&&(this.editingHeadline=!1)}}
        @blur=${t=>void this.saveHeadline(t.target.value)} />`:r`<button type="button" class="block w-full text-left truncate hover:underline" style="font-size:${e};line-height:16px;color:${bt}"
      title="Your headline on LinkedIn. Click to change it."
      @click=${()=>{this.editingHeadline=!0,this.updateComplete.then(()=>this.querySelector("input[aria-label='Your LinkedIn headline']")?.focus())}}
      >${this.headline||r`<span style="font-style:italic">Add your LinkedIn headline</span>`}</button>`}render(){const e=f.getState().settings,t=this.me,i=(t?e[`user:${t.login}:profile_pic_url`]:"")||(t?.role==="owner"?e["cockpit.profile_pic_url"]:"")||t?.profilePic||"",s=this.authorName||t?.displayName||"You",n=this.mode==="mobile",o=this.expanded?"":`display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:${Ym};overflow:hidden;`,a=n?"...more":"…more",l=[["like","Like"],["comment","Comment"],["repost","Repost"],["send","Send"]],h=r`
      <div style="background:#fff;color:${Xr};font-family:${sf};${n?"":"border-radius:8px;box-shadow:0 0 0 1px rgba(140,140,140,.2);"}overflow:hidden;">
        <div class="flex gap-2" style="padding:12px 16px 0 16px;">
          <span class="shrink-0 rounded-full overflow-hidden grid place-items-center font-semibold" style="width:48px;height:48px;background:#e9e5df;color:${bt};font-size:18px">
            ${i?r`<img src=${i} alt="" referrerpolicy="no-referrer" class="w-full h-full object-cover" />`:s.slice(0,1)}
          </span>
          <span class="min-w-0 flex-1">
            <span class="block truncate" style="font-size:14px;line-height:20px;font-weight:600">${s}<span style="font-weight:400;color:${bt}"> • You</span></span>
            ${this.renderHeadline("12px")}
            <span class="flex items-center gap-1" style="font-size:12px;line-height:16px;color:${bt}">now •
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">${hs.globe}</svg></span>
          </span>
          <svg viewBox="0 0 24 24" width="24" height="24" class="shrink-0" style="color:${bt}" aria-hidden="true">${hs.more}</svg>
        </div>
        <div class="relative" style="margin:8px 16px 0 16px;">
          <div data-li-text class="whitespace-pre-wrap break-words" style="font-size:14px;line-height:20px;${o}">${this.text}</div>
          ${this.truncated&&!this.expanded?r`<button type="button" class="absolute right-0 bottom-0 hover:underline" style="font-size:14px;line-height:20px;color:${bt};background:#fff;padding-left:6px;box-shadow:-12px 0 8px #fff"
                @click=${()=>{this.expanded=!0}}>${a}</button>`:c}
        </div>
        ${this.expanded&&this.truncated?r`<button type="button" class="hover:underline" style="margin:2px 16px 0 16px;font-size:12px;color:${bt}" @click=${()=>{this.expanded=!1}}>show less</button>`:c}
        ${this.imageUrl?r`<img src=${this.imageUrl} alt="" class="w-full block" style="margin-top:8px" />`:r`<div style="height:8px"></div>`}
        <div style="margin:0 ${n?16:12}px;border-top:1px solid rgba(0,0,0,.08)"></div>
        <div class="flex ${n?"justify-between":"justify-around"}" style="padding:${n?"6px 20px 10px":"4px 8px"};color:${bt}">
          ${l.map(([u,p])=>n?r`<span class="flex flex-col items-center gap-0.5" style="font-size:12px;line-height:16px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${hs[u]}</svg>${p}</span>`:r`<span class="flex items-center gap-1.5 rounded" style="padding:10px 8px;font-size:14px;line-height:20px;font-weight:600">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${hs[u]}</svg>${p}</span>`)}
        </div>
      </div>`;return n?r`<div class="mx-auto" style="width:390px;max-width:100%;background:#f4f2ee;padding:8px 0;border-radius:12px;overflow:hidden">${h}</div>`:r`<div class="mx-auto" style="width:555px;max-width:100%">${h}</div>`}};nt([b()],Ke.prototype,"text",2);nt([b()],Ke.prototype,"mode",2);nt([b()],Ke.prototype,"imageUrl",2);nt([b()],Ke.prototype,"authorName",2);nt([d()],Ke.prototype,"expanded",2);nt([d()],Ke.prototype,"truncated",2);nt([d()],Ke.prototype,"me",2);nt([d()],Ke.prototype,"editingHeadline",2);nt([d()],Ke.prototype,"headline",2);Ke=nt([w("linkedin-preview")],Ke);function H(e,t,i={}){e.dispatchEvent(new CustomEvent("publisher-toast",{detail:{text:t,...i},bubbles:!0,composed:!0}))}function wt(e,t){return new Promise(i=>{const s={...t,resolve:i};e.dispatchEvent(new CustomEvent("publisher-confirm",{detail:s,bubbles:!0,composed:!0})),s.handled||i(!1)})}const nf=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"});var of=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,R=(e,t,i,s)=>{for(var n=s>1?void 0:s?rf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&of(t,i,n),n};const ni=(e,t)=>{if(!e)return t;try{return JSON.parse(e)}catch{return t}},af=1500,Pn=(e,t,i,s,n,o,a)=>JSON.stringify([e.trim(),t,[...i].sort((l,h)=>l-h),s,n.trim(),o,a.trim()]),lf={pass:r`<span class="text-accent">✓</span>`,warn:r`<span class="text-amber-500">!</span>`,fail:r`<span class="text-red-600">✕</span>`};let _=class extends T{constructor(){super(...arguments),this.draft=null,this.topics=[],this.defaultTopicId=null,this.linkedinConnected=!1,this.webhookConfigured=!1,this.twoCol=!0,this.defaultScheduleAt=null,this.aiWriting=!1,this.improving=!1,this.aiError="",this.backLabel="Drafts",this.authorName=null,this.body="",this.pillar="story",this.aiAngle="",this.commentOpen=!1,this.verticalId=null,this.proofIds=[],this.hooks=[],this.firstComment="",this.questions=[],this.answers={},this.fixing=!1,this.fixResult=null,this.dirty=!1,this.saveState="idle",this.posting=!1,this.proofs=[],this.mode="mobile",this.postMenu=!1,this.scheduleAt="",this.copiedFor=null,this.leaveBlocked=!1,this.loadedFor=null,this.draftId=null,this.editSeq=0,this.inflight=null,this.autosaveTimer=null,this.synced="",this.superseded=new Set,this.beforeFix=null,this.onVisibility=()=>{document.visibilityState==="hidden"&&this.dirty&&this.flush()},this.onPublisherReference=e=>{const t=e.detail?.text;if(!t)return;const i=ml(this.body,t),s=this.renderRoot.querySelector("textarea[data-draft-body]");!i||!s||(s.focus({preventScroll:!0}),s.setSelectionRange(i.start,i.end,"forward"),this.scrollReferenceIntoView(s,i.start))},this.menuHost=null,this.menuAnchor=null,this.closeMenu=()=>{this.postMenu=!1},this.onMenuPress=e=>{const t=e.target;t&&(this.menuHost?.contains(t)||this.menuAnchor?.contains(t))||(this.postMenu=!1)},this.onMenuKey=e=>{e.key==="Escape"&&(e.stopPropagation(),this.postMenu=!1,this.menuAnchor?.focus())},this.onMenuScroll=e=>{const t=e.target;t instanceof Node&&this.menuHost?.contains(t)||this.menuHost?.contains(document.activeElement)||(this.postMenu=!1)}}connectedCallback(){super.connectedCallback(),this.loadProofs(),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("publisher-reference",this.onPublisherReference)}disconnectedCallback(){super.disconnectedCallback(),this.removeMenu(),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("publisher-reference",this.onPublisherReference),this.dirty&&this.flush()}scrollReferenceIntoView(e,t){const i=getComputedStyle(e),s=document.createElement("div");s.style.cssText=["position:fixed","left:-10000px","top:0","visibility:hidden","pointer-events:none",`box-sizing:${i.boxSizing}`,`width:${e.getBoundingClientRect().width}px`,`padding:${i.padding}`,`border:${i.border}`,`font:${i.font}`,`letter-spacing:${i.letterSpacing}`,`line-height:${i.lineHeight}`,"white-space:pre-wrap","overflow-wrap:break-word","word-break:break-word"].join(";"),s.append(document.createTextNode(e.value.slice(0,t)));const n=document.createElement("span");n.textContent="​",s.append(n),document.body.append(s);const o=n.offsetTop;s.remove();let a=e.parentElement;for(;a;){const h=getComputedStyle(a).overflowY;if((h==="auto"||h==="scroll")&&a.scrollHeight>a.clientHeight)break;a=a.parentElement}if(!a){e.scrollIntoView({behavior:"smooth",block:"center"});return}const l=e.getBoundingClientRect().top-a.getBoundingClientRect().top+a.scrollTop;a.scrollTo({top:Math.max(0,l+o-a.clientHeight*.32),behavior:"smooth"})}willUpdate(e){if(!e.has("draft"))return;const t=this.draft,i=t?.id??this.draftId??"new";if(i!==this.loadedFor){this.loadedFor=i,this.draftId=t?.id??null,this.body=t?.body??"",this.pillar=t?.pillar??"story",this.aiAngle=t?.source_note??"",this.commentOpen=!1,this.verticalId=t?.vertical_id??this.defaultTopicId??this.topics[0]?.id??null,this.proofIds=ni(t?.proof_ids??null,[]),this.hooks=ni(t?.hooks??null,[]),this.firstComment=t?.first_comment??"",this.questions=ni(t?.questions??null,[]),this.answers={},this.fixResult=null,this.beforeFix=null,this.dirty=!1,this.saveState="idle",this.leaveBlocked=!1,this.superseded.clear(),this.synced=t?Pn(t.body,t.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle):"";return}if(!t)return;const s=ni(t.proof_ids,[]),n=ni(t.hooks,[]),o=ni(t.questions??null,[]),a=Pn(t.body,t.pillar,s,n,t.first_comment??"",o,t.source_note??"");a===this.synced||this.superseded.has(a)||this.dirty||this.inflight||this.fixing||(t.body!==this.body&&(this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.fixResult={reply:"Changed from chat.",changes:[],warnings:[]}),this.aiAngle=t.source_note??"",this.body=t.body,this.pillar=t.pillar,this.proofIds=s,this.hooks=n,this.firstComment=t.first_comment??"",this.questions=o,this.synced=a)}async loadProofs(){try{const e=await fetch("/api/publisher/proofs");e.ok&&(this.proofs=(await e.json()).proofs.filter(t=>t.status==="active"))}catch{}}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get linkedProofs(){return this.proofs.filter(e=>this.proofIds.includes(e.id))}get checks(){return ql({body:this.body,proofs:this.linkedProofs,firstComment:this.firstComment,hasImage:this.draftId!=null?!!this.draft?.image_url:void 0})}touched(){this.editSeq++,this.dirty=!0,this.leaveBlocked=!1,this.autosaveTimer&&clearTimeout(this.autosaveTimer),this.autosaveTimer=setTimeout(()=>{this.autosaveTimer=null,this.autosave()},af)}async autosave(){const e=this.draftId!=null&&this.dirty;await this.flush()&&e&&!this.dirty&&H(this,"Saved")}edit(e){this.body=e,this.fixResult=null,this.beforeFix=null,this.touched()}async fix(e=[]){if(this.fixing||!this.body.trim())return;if(!await this.flush()||this.draftId==null){H(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const t=this.draftId,i=this.body;this.fixing=!0;try{const s=await this.patch(t,{action:"fix",...e.length?{answers:e}:{}}),n=await s.json().catch(()=>({}));if(!s.ok||typeof n.body!="string"){H(this,n.error||"Mana's rewrite didn't come back. Try again.",{tone:"error"});return}if(this.draftId!==t||this.body!==i)return;this.beforeFix={body:this.body,hooks:this.hooks,pillar:this.pillar,questions:this.questions},this.body=n.body,this.hooks=n.hooks??[],n.format&&(!this.draft||this.draft.status==="draft"||this.draft.status==="approved")&&(this.pillar=n.format),this.questions=n.questions??[],this.answers={},this.fixResult={reply:n.reply??"",changes:n.changes??[],warnings:n.warnings??[]},this.touched(),await this.flush()&&this.emit("improved",{id:t,image:n.image??""})}catch{H(this,"No answer from the cockpit. Try again.",{tone:"error"})}finally{this.fixing=!1}}undoFix(){const e=this.beforeFix;e&&(this.body=e.body,this.hooks=e.hooks,this.pillar=e.pillar,this.questions=e.questions,this.beforeFix=null,this.fixResult=null,this.touched(),H(this,"Back to the version before Fix it"))}addAnswers(){const e=this.questions.map((t,i)=>({question:t,answer:(this.answers[i]??"").trim()})).filter(t=>t.answer);e.length&&this.fix(e)}dismissQuestions(){this.questions=[],this.answers={},this.touched()}swapHook(e){const t=this.body.split(`
`),i=t.findIndex(o=>o.trim()),s=i>=0?t[i]:"";i>=0?t[i]=e:t.unshift(e),this.body=t.join(`
`);const n=this.hooks.filter(o=>o!==e);this.hooks=s.trim()?[s,...n].slice(0,3):n,this.touched()}async flush(){for(this.autosaveTimer&&(clearTimeout(this.autosaveTimer),this.autosaveTimer=null);this.inflight;)await this.inflight;if(!this.dirty)return!0;this.inflight=this.saveOnce();try{return await this.inflight}finally{this.inflight=null}}async saveOnce(){const e=this.editSeq,t=this.body.trim();if(!t||this.verticalId==null)return!0;const i=Pn(t,this.pillar,this.proofIds,this.hooks,this.firstComment,this.questions,this.aiAngle),s={body:t,source_note:this.aiAngle.trim()||null,pillar:this.pillar,proof_ids:this.proofIds,hooks:this.hooks,first_comment:this.firstComment.trim(),questions:this.questions};this.saveState="saving";try{const n=this.draftId==null,o=n?await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify({verticalId:this.verticalId,...s})}):await fetch(`/api/publisher/drafts/${this.draftId}`,{method:"PATCH",headers:{"content-type":"application/json"},keepalive:!0,body:JSON.stringify(s)});if(!o.ok)throw new Error(String(o.status));if(n){const{id:a}=await o.json();this.draftId=a,this.loadedFor=a}return this.synced&&this.synced!==i&&this.superseded.add(this.synced),this.synced=i,this.editSeq===e&&(this.dirty=!1),this.saveState="idle",n&&(this.emit("opened",{id:this.draftId}),this.emit("changed")),!0}catch{return this.saveState="error",!1}}async beforeClose(){return await this.flush()||this.leaveBlocked?!0:(this.leaveBlocked=!0,!1)}get blockers(){return Xm(this.body,this.firstComment)}patch(e,t){return fetch(`/api/publisher/drafts/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async act(e,t){this.postMenu=!1;const i=this.blockers;if(e==="publish"){if(i.length){await wt(this,{title:"This post can't go out yet",body:"Fix these first:",items:i});return}if(!await wt(this,{title:this.linkedinConnected?"Post to LinkedIn now?":"Post through n8n now?",body:this.linkedinConnected?"It goes out as soon as you confirm, with its image and first comment.":"The n8n webhook posts the text only, without the image.",confirm:"Post now",tone:"primary"}))return}if(e==="schedule"&&i.length&&!await wt(this,{title:"Some checks still fail",body:"It's scheduled, but it won't post until these are fixed:",items:i,confirm:"Schedule anyway",tone:"warning"}))return;if(!await this.flush()||this.draftId==null){H(this,"Couldn't save the post first. Try again.",{tone:"error"});return}const s=this.draftId,n={status:this.draft?.status??"draft",scheduledAt:this.draft?.scheduled_at??null};this.postMenu=!1,e==="publish"&&(this.posting=!0);let o;try{o=await this.patch(s,{action:e,...t?{at:t}:{}})}catch{this.posting=!1,H(this,"No answer from the cockpit. Check Published before trying again.",{tone:"error"}),this.emit("changed");return}this.posting=!1;const a=await o.json().catch(()=>({}));if(!o.ok){a.reasons?.length?await wt(this,{title:a.error??"Not posted",items:a.reasons}):H(this,a.error||"That didn't work. Try again.",{tone:"error"}),this.emit("changed");return}const l=this.closest("publisher-section"),h={label:"Undo",run:()=>void this.restore(l,s,n)};e==="schedule"&&t?(H(this,`Scheduled for ${nf(t)}`,{action:h}),this.emit("moved",{stage:"scheduled"})):e==="publish"?a.status==="posted"?(H(this,a.commentError?"Posted. The first comment didn't go up; the notification has it.":"Posted to LinkedIn"),this.emit("moved",{stage:"posted"})):(H(this,"Mana can't post it. Copy it to LinkedIn by hand, then tap I posted it."),this.emit("changed")):e==="discard"?(H(this,"Draft deleted",{action:h}),this.emit("moved",{stage:"draft"})):e==="mark-posted"?(H(this,"Marked as posted"),this.emit("moved",{stage:"posted"})):this.emit("changed")}async restore(e,t,i){const s=i.scheduledAt?{action:"schedule",at:i.scheduledAt}:{action:"reopen"},n=await this.patch(t,s),o=i.scheduledAt?"scheduled":"draft",a=e??this;n.ok||H(a,(await n.json().catch(()=>({}))).error||"Couldn't undo that.",{tone:"error"}),a.dispatchEvent(new CustomEvent("publisher-refresh",{detail:{stage:n.ok?o:void 0},bubbles:!0,composed:!0}))}openPostMenu(e){if(this.menuAnchor=e.currentTarget,!this.scheduleAt){const t=this.defaultScheduleAt&&this.defaultScheduleAt*1e3>Date.now()+6e4?new Date(this.defaultScheduleAt*1e3):null,i=t??new Date(Date.now()+864e5);t||i.setHours(9,0,0,0);const s=n=>String(n).padStart(2,"0");this.scheduleAt=`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())}T${s(i.getHours())}:${s(i.getMinutes())}`}this.postMenu=!this.postMenu}updated(){this.renderRoot.querySelectorAll("textarea[data-grow]").forEach(e=>this.growTextarea(e)),this.postMenu?(this.menuHost||(this.menuHost=document.createElement("div"),document.body.appendChild(this.menuHost),document.addEventListener("pointerdown",this.onMenuPress,!0),document.addEventListener("keydown",this.onMenuKey,!0),window.addEventListener("scroll",this.onMenuScroll,!0),window.addEventListener("resize",this.closeMenu)),xe(this.renderPostMenu(),this.menuHost,{host:this}),this.placeMenu()):this.menuHost&&this.removeMenu()}growTextarea(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}removeMenu(){document.removeEventListener("pointerdown",this.onMenuPress,!0),document.removeEventListener("keydown",this.onMenuKey,!0),window.removeEventListener("scroll",this.onMenuScroll,!0),window.removeEventListener("resize",this.closeMenu),this.menuHost&&(xe(c,this.menuHost),this.menuHost.remove()),this.menuHost=null}placeMenu(){const e=this.menuHost?.firstElementChild;if(!e||!this.menuAnchor)return;const t=this.menuAnchor.getBoundingClientRect(),i=this.getBoundingClientRect(),s=8,n=Math.max(i.left,0)+s,o=Math.min(i.right,window.innerWidth)-s,a=Math.max(220,Math.min(320,o-n));e.style.width=`${a}px`,e.style.left=`${Math.max(n,Math.min(t.right-a,o-a))}px`;const l=e.offsetHeight,h=window.innerHeight-t.bottom-s,u=l<=h||h>=t.top-s,p=u?t.bottom+4:Math.max(s,t.top-4-l);e.style.top=`${p}px`,e.style.maxHeight=`${Math.max(160,u?h:t.top-s-4)}px`}renderPostMenu(){const e=Date.now()/1e3,t=this.scheduleAt?Math.floor(new Date(this.scheduleAt).getTime()/1e3):0,i=l=>{const h=new Date;return h.setDate(h.getDate()+l),h.setHours(9,0,0,0),Math.floor(h.getTime()/1e3)},s=(8-new Date().getDay())%7||7,n=[];this.defaultScheduleAt&&this.defaultScheduleAt>e+60&&n.push({label:"Next free slot",at:this.defaultScheduleAt}),n.push({label:"Tomorrow morning",at:i(1)}),s>1&&n.push({label:"Monday morning",at:i(s)});const o=new Set,a=l=>new Date(l*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});return r`
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
          <button type="button" class="w-full py-1.5 text-[13px] rounded-lg bg-accent text-white font-medium hover:brightness-105 ${t>e?"":"opacity-40 pointer-events-none"}"
            @click=${()=>void this.act("schedule",t)}>Schedule</button>
          ${this.linkedinConnected?c:r`<p class="text-[11px] text-muted">${this.webhookConfigured?"Goes out through n8n, text only.":"Connect LinkedIn so it goes out on its own."}</p>`}
        </div>
      </div>`}async copyAndOpen(){window.open("https://www.linkedin.com/feed/?shareActive=true","_blank","noopener"),await this.copy(),this.copiedFor=this.draftId}async copy(){try{await navigator.clipboard.writeText(this.body),H(this,this.firstComment.trim()?"Copied. The first comment is below the text.":"Copied")}catch{H(this,"Couldn't copy. Select the text and copy it by hand.",{tone:"error"})}}renderSaveState(){return this.saveState==="error"?r`<span class="inline-flex items-center gap-2 text-[11px] text-red-600">Couldn't save
        <button type="button" class="font-medium text-ink hover:underline" @click=${()=>void this.flush()}>Retry</button>
        ${this.leaveBlocked?r`<button type="button" class="text-muted hover:text-ink hover:underline" @click=${()=>this.emit("force-close")}>Leave without saving</button>`:c}</span>`:c}get statusNow(){const e=this.draft,t=e?.status==="approved"&&e.scheduled_at?e.scheduled_at:null;return{status:e?.status==="approved"&&!t?"draft":e?.status??"draft",scheduled:t}}renderHeader(){this.draft;const{status:e,scheduled:t}=this.statusNow,i=t?`Scheduled ${new Date(t*1e3).toLocaleString(void 0,{weekday:"short",hour:"2-digit",minute:"2-digit"})}`:e==="posting"?"Posting…":e==="posted"?"Published":e==="draft"?"Draft":"Discarded";return r`
      <div class="shrink-0 px-3 pt-3">
        <div class="relative flex flex-wrap items-center gap-2 px-4 py-3 mx-auto w-full ${this.twoCol?"max-w-[65rem]":"max-w-2xl"} mana-card">
          <button type="button" class="flex items-center h-7 pl-0.5 pr-1.5 -ml-1 rounded-lg text-sm text-accent hover:bg-hover"
            @click=${()=>this.emit("close")}><sc-icon name="lucide-chevron-left" class="w-4 h-4"></sc-icon>${this.backLabel}</button>
          <span class="flex-1"></span>
          ${this.renderSaveState()}
          <span class="text-[11px] px-2 py-0.5 rounded-full font-medium ${t||e==="posting"?"bg-accent-soft text-accent":"bg-line text-muted"}">${i}</span>
        </div>
      </div>`}renderActions(){const{status:e,scheduled:t}=this.statusNow;if(this.posting)return r`<p class="flex items-center justify-end gap-1.5 text-[12px] text-ink">
      <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Posting…</p>`;if(this.draftId==null||e!=="draft"&&!t)return c;const i=this.linkedinConnected||this.webhookConfigured,s="inline-flex items-center gap-1 px-3 py-1.5 text-[13px] rounded-lg border border-line text-ink hover:bg-hover",n="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] rounded-lg bg-accent text-white font-medium hover:brightness-105";return r`
      <div class="flex flex-wrap items-center justify-end gap-2">
        ${t?r`<button type="button" class="text-[12px] text-muted hover:text-ink px-1 mr-auto" @click=${()=>void this.act("unschedule")}>Unschedule</button>`:r`<button type="button" class="mr-auto px-3 py-1.5 text-[13px] rounded-lg border border-line text-muted hover:text-red-600 hover:border-red-600/60" @click=${()=>void this.act("discard")}>Delete draft</button>`}
        <button type="button" class=${s} aria-haspopup="dialog" aria-expanded=${this.postMenu}
          @click=${o=>this.openPostMenu(o)}><sc-icon name="lucide-clock" class="w-3.5 h-3.5"></sc-icon>${t?"Reschedule":"Schedule"}</button>
        ${i?r`<button type="button" class=${n} @click=${()=>void this.act("publish")}><sc-icon name="lucide-send" class="w-3.5 h-3.5"></sc-icon>Post now</button>`:this.copiedFor===this.draftId?r`<button type="button" class=${n} @click=${()=>void this.act("mark-posted")}><sc-icon name="lucide-check" class="w-3.5 h-3.5"></sc-icon>I posted it</button>`:r`<button type="button" class=${n} title="Copies the text and opens LinkedIn"
                @click=${()=>void this.copyAndOpen()}><sc-icon name="lucide-copy" class="w-3.5 h-3.5"></sc-icon>Copy and open LinkedIn</button>`}
      </div>`}renderChecks(){const e=this.checks,t=e.filter(n=>n.level==="fail"),i=e.filter(n=>n.kind==="reach"),s=i.filter(n=>n.level==="pass").length;return r`
      ${t.length?r`
        <section class="rounded-xl border border-red-500/40 bg-surface px-3 py-2.5 space-y-1.5">
          <h4 class="text-[12px] font-semibold text-red-600">Before it can go out</h4>
          ${t.map(n=>r`<div class="text-[12px] leading-snug">
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
            <div class="flex gap-2"><span class="w-3 shrink-0 text-center font-bold">${lf[n.level]}</span><span class="${n.level==="pass"?"text-muted":"text-ink"}">${n.label}</span></div>
            ${n.detail&&n.level!=="pass"?r`<p class="pl-5 text-[11px] text-muted">${n.detail}</p>`:c}
          </div>`)}
        </div>
      </details>`}renderFix(){const e=this.fixResult;return r`
      ${this.fixing||this.improving?r`<p class="flex items-center gap-2 px-1 text-[11px] text-ink">
          <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
          Mana is looking at strong posts on this and rewriting yours. About two minutes.</p>`:c}
      ${e?r`
        <section class="rounded-xl border border-accent/40 bg-surface px-3 py-2.5 space-y-2">
          <div class="flex items-center gap-2">
            <h4 class="flex-1 flex items-center gap-1.5 text-[12px] font-semibold text-ink"><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5 text-accent"></sc-icon>Mana</h4>
            <button type="button" class="text-[12px] font-medium text-accent hover:underline" @click=${()=>this.undoFix()}>Undo</button>
          </div>
          ${e.reply?r`<p class="text-[13px] text-ink leading-relaxed whitespace-pre-wrap">${e.reply}</p>`:c}
          ${e.changes.length?r`<div class="space-y-0.5">
            <p class="text-[11px] font-semibold text-muted">What I changed</p>
            ${e.changes.map(t=>r`<p class="text-[12px] text-muted leading-snug">· ${t}</p>`)}
          </div>`:c}
          ${e.warnings.map(t=>r`<p class="text-[12px] text-amber-600 leading-snug">! ${t}</p>`)}
        </section>`:c}
      ${this.questions.length?this.renderQuestions():c}`}renderQuestions(){const e=this.questions.some((t,i)=>(this.answers[i]??"").trim());return r`
      <section class="rounded-xl border border-accent/40 bg-surface px-3 py-2.5 space-y-2">
        <div class="flex items-center gap-2">
          <h4 class="flex-1 text-[12px] font-semibold text-ink">Mana needs from you</h4>
          <button type="button" class="text-[11px] text-muted hover:text-ink" ?disabled=${this.fixing} @click=${()=>this.dismissQuestions()}>Dismiss</button>
        </div>
        <p class="text-[11px] text-muted leading-snug">Answer any of these and Mana works them in. It won't guess them.</p>
        ${this.questions.map((t,i)=>r`
          <label class="block text-[12px] text-ink leading-snug">${t}
            <input type="text" class="mt-1 w-full px-2.5 py-1.5 text-[12px] bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink"
              ?disabled=${this.fixing} .value=${this.answers[i]??""}
              @input=${s=>{this.answers={...this.answers,[i]:s.target.value}}}
              @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),this.addAnswers())}} /></label>`)}
        <button type="button" class="px-3 py-1.5 text-[12px] rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
          ?disabled=${!e||this.fixing} @click=${()=>this.addAnswers()}>Add to post</button>
      </section>`}renderAiStart(){const e=this.aiWriting,t=this.draftId==null&&!this.body.trim(),i=!this.draft||this.draft.status==="draft"||this.draft.status==="approved",s=i&&!t&&!!this.body.trim()&&!e&&!this.fixing&&!this.improving,n=()=>{e||this.verticalId==null||!t||this.emit("ai-draft",{topicId:this.verticalId,angle:this.aiAngle})};return r`
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <input type="text" class="flex-1 min-w-0 px-3 py-2 text-[15px] font-semibold bg-surface border border-line rounded-xl focus:outline-none focus:border-ink text-ink placeholder:font-normal"
            placeholder="What's it about?" aria-label="Title" ?disabled=${e} ?readonly=${!i}
            .value=${this.aiAngle}
            @input=${o=>{this.aiAngle=o.target.value,this.draftId!=null&&this.touched()}}
            @keydown=${o=>{o.key==="Enter"&&(o.preventDefault(),n())}} />
          ${t&&!e?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium ${this.verticalId==null?"opacity-40 pointer-events-none":""}"
                title="Mana writes the post from the title" @click=${n}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Write it</button>`:i&&!e?r`<button type="button" class="shrink-0 inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl border border-accent text-accent hover:bg-accent/10 font-medium disabled:opacity-40 disabled:pointer-events-none"
                  ?disabled=${!s} title="Mana rewrites it into a post worth reading, in your voice. You can undo it."
                  @click=${()=>void this.fix()}><sc-icon name="lucide-sparkles" class="w-3.5 h-3.5"></sc-icon> Improve it</button>`:c}
        </div>
        ${e?r`<p class="flex items-center gap-2 px-1 text-xs text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Mana is writing it. About two minutes.</p>`:c}
        ${this.aiError&&t?r`<p class="px-1 text-[11px] text-red-600">The draft didn't come back: ${this.aiError}</p>`:c}
      </div>`}render(){const e=this.draft,t=!e||e.status==="draft"?this.hooks:[],i=!e||e.status==="draft"||e.status==="approved",s=this.twoCol,n=this.posting||this.draftId!=null&&(this.statusNow.status==="draft"||!!this.statusNow.scheduled),o=r`
      <section class="min-w-0 mana-card p-4 ${s?"flex flex-col gap-3":"space-y-3"}">
        ${this.renderAiStart()}
        <textarea data-grow data-draft-body class="w-full ${s?"min-h-[20rem]":"min-h-[22rem]"} overflow-hidden resize-none px-3 py-2.5 text-sm bg-surface border border-line rounded-xl focus:outline-none focus:border-ink leading-relaxed text-ink"
          placeholder="Hook first. One line that makes them need the second."
          maxlength=${fo}
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
            maxlength=${go}
            .value=${this.firstComment}
            @input=${h=>{const u=h.target;this.growTextarea(u),this.firstComment=u.value,this.touched()}}></textarea></label>`:i?r`<button type="button" class="text-[12px] text-muted hover:text-ink"
              @click=${()=>{this.commentOpen=!0,this.updateComplete.then(()=>this.querySelector("label textarea")?.focus())}}>+ First comment</button>`:c}
        ${t.length?r`<div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[10px] text-muted/70 font-semibold">Other hooks</span>
              ${t.map(h=>r`<button type="button" title=${h}
                class="max-w-full truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
                @click=${()=>this.swapHook(h)}>${h}</button>`)}
            </div>`:c}
        ${this.renderChecks()}
        ${e&&this.renderImage?this.renderImage(e):c}
      </section>`,l=r`
      <aside class="min-w-0 mana-card p-3 ${s?"self-start sticky top-0":""}">
        <div class="flex items-center justify-center gap-1 mb-2">
          ${["mobile","desktop"].map(h=>r`<button type="button"
            class="px-2.5 py-1 text-[11px] rounded-full ${this.mode===h?"bg-hover text-ink font-medium":"text-muted hover:text-ink"}"
            @click=${()=>{this.mode=h}}>${h==="mobile"?"Phone":"Desktop"}</button>`)}
        </div>
        <linkedin-preview .text=${this.body} .mode=${this.mode} .imageUrl=${e?.image_url??null} .authorName=${this.authorName}></linkedin-preview>
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
      </div>`}};R([b({attribute:!1})],_.prototype,"draft",2);R([b({attribute:!1})],_.prototype,"topics",2);R([b({attribute:!1})],_.prototype,"defaultTopicId",2);R([b({type:Boolean})],_.prototype,"linkedinConnected",2);R([b({type:Boolean})],_.prototype,"webhookConfigured",2);R([b({type:Boolean})],_.prototype,"twoCol",2);R([b({attribute:!1})],_.prototype,"defaultScheduleAt",2);R([b({attribute:!1})],_.prototype,"renderImage",2);R([b({type:Boolean})],_.prototype,"aiWriting",2);R([b({type:Boolean})],_.prototype,"improving",2);R([b()],_.prototype,"aiError",2);R([b()],_.prototype,"backLabel",2);R([b()],_.prototype,"authorName",2);R([d()],_.prototype,"body",2);R([d()],_.prototype,"pillar",2);R([d()],_.prototype,"aiAngle",2);R([d()],_.prototype,"commentOpen",2);R([d()],_.prototype,"verticalId",2);R([d()],_.prototype,"proofIds",2);R([d()],_.prototype,"hooks",2);R([d()],_.prototype,"firstComment",2);R([d()],_.prototype,"questions",2);R([d()],_.prototype,"answers",2);R([d()],_.prototype,"fixing",2);R([d()],_.prototype,"fixResult",2);R([d()],_.prototype,"dirty",2);R([d()],_.prototype,"saveState",2);R([d()],_.prototype,"posting",2);R([d()],_.prototype,"proofs",2);R([d()],_.prototype,"mode",2);R([d()],_.prototype,"postMenu",2);R([d()],_.prototype,"scheduleAt",2);R([d()],_.prototype,"copiedFor",2);R([d()],_.prototype,"leaveBlocked",2);_=R([w("publisher-editor")],_);var cf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,$=(e,t,i,s)=>{for(var n=s>1?void 0:s?df(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&cf(t,i,n),n};const Zr="mana.publisher.copy",hf=640,ea=176,ta=400,us=224,Ee=(e,t="w-4 h-4")=>r`<sc-icon name="lucide-${e}" class=${t}></sc-icon>`,Ai=[{key:"draft",label:"Drafts",icon:"file-text"},{key:"scheduled",label:"Scheduled",icon:"clock"},{key:"posted",label:"Published",icon:"send"}];function ps(e){return e.status==="posting"?"scheduled":e.status==="approved"?e.scheduled_at?"scheduled":"draft":e.status==="draft"||e.status==="posted"?e.status:null}const ms=()=>Math.floor(Date.now()/1e3),uf=e=>new Date(e*1e3).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),Mn=["impressions","reactions","comments","leads"],fs={proof:"Case study",teach:"How-to",take:"Opinion",story:"Story"},ia={proof:"bg-emerald-500/10 text-emerald-600",teach:"bg-sky-500/10 text-sky-600",take:"bg-amber-500/10 text-amber-600",story:"bg-pink-500/10 text-pink-600"},Oe=e=>e.format==="yt_script",sa="bg-violet-500/10 text-violet-600",Pi=[{key:"name",q:"Name this topic.",hint:'Shows in the sidebar, e.g. "Voice agents" or "EDU APAC"',required:!0},{key:"audience",q:"Who are you writing for?",hint:"People, interests or roles, e.g. clinic owners in DACH who still book by phone",required:!0},{key:"goal",q:"What should posting about this get you?",hint:'One concrete outcome, e.g. "2 demo calls a month"',required:!1}],na={name:"",goal:"",audience:"",offer:"",opinions:"",cta:"",extra:""},oa={auto:'<rect width="48" height="32" rx="4" fill="#2a3446"/><path d="M24 7l2.2 6.3L32 16l-5.8 2.7L24 25l-2.2-6.3L16 16l5.8-2.7z" fill="#8ab4ff"/>',photo:'<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5b26b"/><stop offset="1" stop-color="#7d8fb3"/></linearGradient></defs><rect width="48" height="32" rx="4" fill="url(#sk)"/><circle cx="34" cy="11" r="4" fill="#ffe6a8"/><path d="M0 26l12-10 9 7 8-6 19 12v3H0z" fill="#33415c"/>',illustration:'<rect width="48" height="32" rx="4" fill="#ffe9d6"/><circle cx="17" cy="15" r="7" fill="#ff8a65"/><rect x="26" y="9" width="13" height="13" rx="3" fill="#4db6ac"/><path d="M6 27h36" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>',diagram:'<rect width="48" height="32" rx="4" fill="#f4f6fa"/><rect x="5" y="11" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="5" width="11" height="9" rx="2" fill="#5b8def"/><rect x="32" y="18" width="11" height="9" rx="2" fill="#5b8def"/><path d="M16 15.5h8m0 0V9.5h8m-8 6v6.5h8" stroke="#8a94a6" stroke-width="1.5" fill="none"/>',"text-card":'<rect width="48" height="32" rx="4" fill="#111827"/><rect x="7" y="9" width="30" height="4" rx="1" fill="#fff"/><rect x="7" y="16" width="22" height="4" rx="1" fill="#fff"/><rect x="7" y="24" width="12" height="2" rx="1" fill="#f59e0b"/>'},ra=(e,t="w-12 h-8")=>r`<svg viewBox="0 0 48 32" class="${t} shrink-0 rounded" aria-hidden="true">${Vm(oa[e]??oa.auto)}</svg>`,Mi=[{key:"auto",label:"Mana picks per post",dna:""},{key:"photo",label:"Photo",dna:""},{key:"illustration",label:"Illustration",dna:""},{key:"diagram",label:"Diagram",dna:""},{key:"text-card",label:"Text card",dna:""}];let k=class extends T{constructor(){super(...arguments),this.chatOpen=!1,this.verticals=[],this.drafts=[],this.webhookConfigured=!1,this.linkedinConfigured=!1,this.loading=!0,this.fromCopy=!1,this.activeVerticalId=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_vertical"));return Number.isFinite(e)&&e>0?e:null}catch{return null}})(),this.stage=this.activeVerticalId===null?"scheduled":"draft",this.view="queue",this.wide=!0,this.navOpen=!1,this.navWidth=(()=>{try{const e=Number(localStorage.getItem("cockpit.publisher_nav_width"));return e>=ea&&e<=ta?e:us}catch{return us}})(),this.navHidden=(()=>{try{return localStorage.getItem("cockpit.publisher_nav_hidden")==="1"}catch{return!1}})(),this.collapsedGroups=(()=>{try{return new Set(JSON.parse(localStorage.getItem("cockpit.publisher_nav_collapsed")||"[]"))}catch{return new Set}})(),this.wizardEditId=null,this.wizardStep=0,this.wizard={...na},this.wizardLang="de",this.wizardFormality="du",this.langOther=!1,this.editPostsPerWeek=4,this.editImageStyle="auto",this.editImageDna="",this.editImageRef=null,this.imaging=[],this.improving=[],this.imageErrors={},this.toldImageErrors=new Set,this.started=!1,this.stylePickerFor=null,this.imageStyleFor={},this.libraryFor=null,this.saving=!1,this.editingId=null,this.editBody="",this.composing=!1,this.editorId=null,this.createdId=null,this.twoCol=!0,this.aiTopicId=null,this.aiStartedAt=null,this.aiError="",this.generating=!1,this.genStartedAt=null,this.genTicker=null,this.webhookUrl="",this.webhookSecret="",this.linkedinToken="",this.linkedin=null,this.liClientId="",this.liClientSecret="",this.liSaving=!1,this.showLegacy=!1,this.postUrlForId=null,this.postUrlDraft="",this.syncingId=null,this.copiedId=null,this.researchOpenId=null,this.expandedId=null,this.toastMsg=null,this.toastTimer=null,this.ask=null,this.insights=null,this.metricsForId=null,this.metricsDraft={impressions:"",reactions:"",comments:"",leads:""},this.poll=null,this.topicDrag=new jo(this,{type:"text/x-publisher-topic",onReorder:(e,t)=>this.reorderTopic(e,t)}),this.dirtyFields=new Set,this.onToast=e=>{e.stopPropagation(),this.toastMsg=e.detail,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastMsg=null},this.toastMsg.action?8e3:5e3)},this.onConfirm=e=>{e.stopPropagation();const t=e.detail;t.handled=!0,this.ask?.resolve(!1),this.ask=t,this.updateComplete.then(()=>requestAnimationFrame(()=>this.querySelector("[data-dialog-default]")?.focus()))},this.onNotifNavigate=e=>{e.detail?.mode==="publisher"&&(this.view==="editor"||this.view==="wizard"||this.setStage("posted"))},this.onOutsideChange=()=>{this.refresh()},this.onRefreshRequest=e=>{const t=e.detail?.stage;t&&this.view==="queue"&&this.setStage(t),this.refresh()},this.topicSaveTimer=null,this.viewKey="",this.insightsFor=""}connectedCallback(){super.connectedCallback(),this.paintSavedCopy(),this.refresh(),this.resizeObs=new ResizeObserver(()=>{const e=this.clientWidth>=hf;e!==this.wide&&(this.wide=e);const t=this.clientWidth>=1100;t!==this.twoCol&&(this.twoCol=t)}),this.resizeObs.observe(this),this.addEventListener("publisher-toast",this.onToast),this.addEventListener("publisher-confirm",this.onConfirm),this.viewKey="",this.addEventListener("publisher-refresh",this.onRefreshRequest),document.addEventListener("notif-navigate",this.onNotifNavigate),document.addEventListener("ops-event",this.onOutsideChange),document.addEventListener("publisher-live",this.onOutsideChange),this.poll=setInterval(()=>{const e=this.view==="queue"&&this.editingId===null&&this.metricsForId===null&&this.postUrlForId===null&&!this.composing&&!this.topicDrag.active,t=this.view==="wizard"&&this.wizardEditId!=null,i=this.aiStartedAt!==null,s=this.imaging.length>0||this.improving.length>0;(e||t||i||s)&&this.refresh()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this.flushTopicSave(),this.poll&&clearInterval(this.poll),this.genTicker&&clearInterval(this.genTicker),this.resizeObs?.disconnect(),this.removeEventListener("publisher-toast",this.onToast),this.removeEventListener("publisher-confirm",this.onConfirm),this.removeEventListener("publisher-refresh",this.onRefreshRequest),document.removeEventListener("notif-navigate",this.onNotifNavigate),document.removeEventListener("ops-event",this.onOutsideChange),document.removeEventListener("publisher-live",this.onOutsideChange),this.toastTimer&&clearTimeout(this.toastTimer),this.ask?.resolve(!1)}answer(e){const t=this.ask;this.ask=null,t?.resolve(e)}renderToast(){const e=this.toastMsg;return e?r`
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 px-4 py-2 rounded-xl ${e.tone==="error"?"bg-red-600":"bg-ink"} text-surface text-sm shadow-lg" role="status">
        <span class="min-w-0">${e.text}</span>
        ${e.action?r`<button type="button" class="shrink-0 font-semibold hover:underline"
          @click=${()=>{const t=e.action.run;this.toastMsg=null,t()}}>${e.action.label}</button>`:c}
      </div>`:c}renderDialog(){const e=this.ask;if(!e)return c;const t=e.tone==="danger"?"bg-red-600":e.tone==="warning"?"bg-amber-500":"bg-accent";return r`
      <sc-dialog open label=${e.title}
        @sc-hide=${()=>this.answer(!1)}
        @keydown=${i=>{i.key==="Escape"?(i.preventDefault(),this.answer(!1)):i.key==="Enter"&&e.confirm&&!(i.target instanceof HTMLTextAreaElement)&&(i.preventDefault(),this.answer(!0))}}>
        ${e.body?r`<p class="text-sm text-muted leading-snug">${e.body}</p>`:c}
        ${e.items?.length?r`<ul class="mt-2 space-y-1 text-sm text-ink list-disc pl-5">${e.items.map(i=>r`<li>${i}</li>`)}</ul>`:c}
        <div slot="footer" class="flex items-center justify-end gap-2">
          <button type="button" class="px-3 py-1.5 text-sm rounded-lg text-muted hover:text-ink hover:bg-hover" ?data-dialog-default=${!e.confirm}
            @click=${()=>this.answer(!1)}>${e.cancel??(e.confirm?"Cancel":"Close")}</button>
          ${e.confirm?r`<button type="button" data-dialog-default class="px-3 py-1.5 text-sm rounded-lg font-semibold text-white hover:opacity-90 ${t}"
            @click=${()=>this.answer(!0)}>${e.confirm}</button>`:c}
        </div>
      </sc-dialog>`}get activeVertical(){return this.verticals.find(e=>e.id===this.activeVerticalId)??null}setVertical(e){this.activeVerticalId=e,this.stage=e===null?"scheduled":"draft",this.composing=!1,this.editingId=null,this.expandedId=null,this.view="queue",this.navOpen=!1;try{localStorage.setItem("cockpit.publisher_vertical",String(e??0))}catch{}}setStage(e){this.stage=e,this.expandedId=null,this.view="queue",this.navOpen=!1}inTopic(e){return this.activeVerticalId===null||e.vertical_id===this.activeVerticalId}stageCount(e,t=!1){return this.drafts.filter(i=>ps(i)===e&&(t||this.inTopic(i))).length}takenTimes(e){return this.drafts.filter(t=>(t.status==="approved"||t.status==="posting")&&t.scheduled_at&&t.id!==e).map(t=>t.scheduled_at)}postedThisWeek(e){const t=mc(ms());return this.drafts.filter(i=>i.vertical_id===e.id&&i.status==="posted"&&(i.posted_at??0)>=t).length}async reorderTopic(e,t){const i=this.verticals.findIndex(o=>o.id===e);if(i<0)return;const s=[...this.verticals],[n]=s.splice(i,1);s.splice(i<t?t-1:t,0,n),!s.every((o,a)=>o.id===this.verticals[a]?.id)&&(this.verticals=s,await fetch("/api/publisher/verticals/order",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({ids:s.map(o=>o.id)})}))}async deleteTopic(e){const t=this.drafts.filter(n=>n.vertical_id===e.id).length;if(!await wt(this,{title:`Delete ${e.name}?`,body:`${t?`Its ${t} post${t===1?"":"s"} go with it. `:""}This can't be undone. Anything already on LinkedIn stays there, and its proof and voice samples stay as general items.`,confirm:"Delete topic",tone:"danger"}))return;if(!(await fetch(`/api/publisher/verticals/${e.id}?drafts=delete`,{method:"DELETE"})).ok){H(this,"Couldn't delete the topic. Try again.",{tone:"error"});return}this.activeVerticalId===e.id&&this.setVertical(null),await this.refresh(),H(this,`Deleted ${e.name}`)}openCompose(){this.navOpen=!1,this.editorId=null,this.composing=!0,this.aiStartedAt===null&&(this.aiError=""),this.view="editor"}openEditor(e){if(this.fromCopy){H(this,"Still fetching the latest version of this post. Try again in a moment.");return}this.navOpen=!1,this.composing=!1,this.editorId=e,this.view="editor"}async closeEditor(){const e=this.querySelector("publisher-editor");if(e&&!await e.beforeClose()){H(this,"Couldn't save your last edit.",{tone:"error",action:{label:"Leave anyway",run:()=>this.leaveEditor()}});return}this.leaveEditor()}follow(e){this.leaveEditor(),this.setStage(e)}leaveEditor(){this.composing=!1,this.editorId=null,this.createdId=null,this.view="queue",this.refresh()}pickUpAiDraft(){if(this.aiStartedAt===null||this.generating)return;const e=Math.floor(this.aiStartedAt/1e3)-5,t=this.drafts.filter(i=>i.created_at>=e&&i.vertical_id===this.aiTopicId).sort((i,s)=>s.created_at-i.created_at)[0];t?(this.aiStartedAt=null,(this.view==="editor"&&this.composing||this.view==="queue")&&this.openEditor(t.id)):Date.now()-this.aiStartedAt>480*1e3&&(this.aiStartedAt=null)}paintSavedCopy(){try{const e=JSON.parse(localStorage.getItem(Zr)||"null");if(!e||e.login!==localStorage.getItem("mana.api.login"))return;this.verticals=e.data.verticals??[],this.drafts=e.data.drafts??[],this.webhookConfigured=e.data.webhookConfigured??!1,this.linkedinConfigured=e.data.linkedinConfigured??!1,this.linkedin=e.data.linkedin??null,this.fromCopy=!0,this.loading=!1}catch{}}async refresh(){try{const e=await fetch("/api/publisher");if(e.ok){const t=await e.text();try{const n=localStorage.getItem("mana.api.login");n&&t.length<3e5&&localStorage.setItem(Zr,JSON.stringify({login:n,data:JSON.parse(t)}))}catch{}this.fromCopy=!1;const i=JSON.parse(t);this.linkedin=i.linkedin??null;const s=this.imaging;this.imaging=i.imaging??[],this.improving=i.improving??[],this.imageErrors=i.imageErrors??{};for(const[n,o]of Object.entries(this.imageErrors)){const a=`${n}:${o}`;this.toldImageErrors.has(a)||(this.toldImageErrors.add(a),this.started&&H(this,`The image didn't come: ${o}`,{tone:"error"}))}if(this.started=!0,s.some(n=>!this.imaging.includes(n))&&Le(()=>import("./notes-media-CGSOjJZh.js"),__vite__mapDeps([2,3,4,5])).then(n=>n.forgetMediaCache()),this.verticals=i.verticals,this.drafts=i.drafts,this.webhookConfigured=i.webhookConfigured,this.linkedinConfigured=i.linkedinConfigured??!1,this.setGenerating(i.generating??!1),this.view==="results"&&this.loadInsights(),this.aiStartedAt!==null&&i.draftError&&i.draftError.at>=this.aiStartedAt&&!i.generating&&(this.aiStartedAt=null,this.aiError=i.draftError.message),this.pickUpAiDraft(),this.view==="wizard"&&this.wizardEditId!=null){const n=this.verticals.find(o=>o.id===this.wizardEditId);n&&this.mergeServerIntoForm(n)}this.loading=!1}}catch{}}setGenerating(e){const t=this.genStartedAt!==null&&Date.now()-this.genStartedAt<8e3,i=e||t;i&&!this.generating&&(this.genStartedAt===null&&(this.genStartedAt=Date.now()),this.genTicker||(this.genTicker=setInterval(()=>this.requestUpdate(),1e3))),!i&&this.generating&&(this.genStartedAt=null,this.genTicker&&(clearInterval(this.genTicker),this.genTicker=null)),this.generating=i}genStatusText(){const e=this.genStartedAt?Math.floor((Date.now()-this.genStartedAt)/1e3):0;return`${e<40?"searching what your buyers are talking about":e<100?"reading sources + writing the draft":"still writing — long research pass"}… ${e}s (typically 60–120s)`}mergeServerIntoForm(e){const t={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""};let i=this.wizard,s=!1;for(const n of Object.keys(t))!this.dirtyFields.has(n)&&t[n]!==i[n]&&(s||(i={...i}),i[n]=t[n],s=!0);s&&(this.wizard=i),!this.dirtyFields.has("language")&&e.language!==this.wizardLang&&(this.wizardLang=e.language),!this.dirtyFields.has("formality")&&e.formality!==this.wizardFormality&&(this.wizardFormality=e.formality),!this.dirtyFields.has("posts_per_week")&&e.posts_per_week!==this.editPostsPerWeek&&(this.editPostsPerWeek=e.posts_per_week)}openWizard(e){this.flushTopicSave(),e?(this.wizardEditId=e.id,this.wizard={name:e.name,goal:e.goal??"",audience:e.audience??"",offer:e.offer??"",opinions:e.opinions??"",cta:e.cta??"",extra:e.extra??""},this.wizardLang=e.language,this.wizardFormality=e.formality,this.editPostsPerWeek=e.posts_per_week,this.editImageStyle=e.image_style&&e.image_style!=="line-art"?e.image_style:"photo",this.editImageDna=e.image_dna||"",this.editImageRef=e.image_ref_url):(this.wizardEditId=null,this.wizard={...na},this.wizardLang="de",this.wizardFormality="du",this.editPostsPerWeek=3,this.editImageStyle="photo",this.editImageDna="",this.editImageRef=null),this.dirtyFields=new Set,this.wizardStep=0,this.view="wizard",this.navOpen=!1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}updated(e){super.updated?.(e),this.reportView();const t=["wizard","wizardLang","wizardFormality","editPostsPerWeek","editImageStyle","editImageDna","editImageRef"];this.view!=="wizard"||this.wizardEditId==null||!this.dirtyFields.size||t.some(i=>e.has(i))&&(this.topicSaveTimer&&clearTimeout(this.topicSaveTimer),this.topicSaveTimer=setTimeout(()=>void this.flushTopicSave(),1e3))}reportView(){const e=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null,t=n=>this.verticals.find(o=>o.id===n)?.name??"no topic",i=e?`Publisher · editing draft#${e.id} (${t(e.vertical_id)})${e.source_note?`: "${e.source_note.slice(0,120)}"`:""}`:this.composing?"Publisher · writing a new post (not saved yet, no draft id)":`Publisher · ${this.view==="queue"?`${Ai.find(n=>n.key===this.stage)?.label??this.stage} list${this.activeVertical?` in ${this.activeVertical.name}`:""}`:this.view}`,s=`${i}|${e?.id??""}`;s!==this.viewKey&&(this.viewKey=s,f.getState().setViewContext({tool:"publisher",summary:i,item:e?.id??null}))}async flushTopicSave(){this.topicSaveTimer&&(clearTimeout(this.topicSaveTimer),this.topicSaveTimer=null);const e=this.wizardEditId;if(e==null||!this.dirtyFields.size||!this.wizard.name.trim())return;const t=new Set(this.dirtyFields);this.dirtyFields=new Set;const i={...this.wizard,language:this.wizardLang.trim()||"en",formality:this.wizardFormality,image_style:this.editImageStyle,image_dna:this.editImageDna,image_ref_url:this.editImageRef,posts_per_week:this.editPostsPerWeek};if(!(await fetch(`/api/publisher/verticals/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(i)}).catch(()=>null))?.ok){for(const n of t)this.dirtyFields.add(n);H(this,"Couldn't save the topic. Try again.",{tone:"error"});return}H(this,"Saved"),this.refresh()}async closeEditForm(){await this.flushTopicSave(),this.view="queue"}async saveWizard(){if(!this.saving){this.saving=!0;try{const e={...this.wizard,language:this.wizardLang,formality:this.wizardFormality};if(e.image_style=this.editImageStyle,e.image_dna=this.editImageDna,e.image_ref_url=this.editImageRef,e.posts_per_week=this.editPostsPerWeek,this.wizardEditId!=null)await fetch(`/api/publisher/verticals/${this.wizardEditId}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)});else{const t=await fetch("/api/publisher/verticals",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(t.ok){const{id:i}=await t.json();this.setVertical(i)}}await this.refresh(),this.view="queue"}finally{this.saving=!1}}}renderLangPills(){const e=[["en","English"],["tr","Türkçe"],["de","Deutsch"]],t=this.wizardLang==="de+en"?"de":this.wizardLang,i=this.langOther||!e.some(([l])=>l===t),s=(l,h,u)=>r`
      <button type="button"
        class="px-3 py-1 rounded-full text-xs border ${l?"border-ink bg-ink text-surface":"border-line text-muted hover:text-ink hover:border-ink/40"}"
        @click=${u}>${h}</button>`,n=l=>{this.dirtyFields.add("language"),this.wizardLang=l},o=t==="de"?["Du","Sie"]:t==="tr"?["Sen","Siz"]:null,a=l=>{this.dirtyFields.add("formality"),this.wizardFormality=l};return r`
      <div class="mt-1 flex flex-wrap items-center gap-1.5">
        ${e.map(([l,h])=>s(!i&&t===l,h,()=>{this.langOther=!1,n(l)}))}
        ${s(i,"Other",()=>{this.langOther=!0,i||n("")})}
        ${i?r`<input class="w-32 px-2 py-1 text-xs bg-surface border border-line rounded-full focus:outline-none focus:border-ink"
          placeholder="e.g. Spanish" maxlength="30" .value=${this.wizardLang}
          @input=${l=>n(l.target.value)} />`:c}
      </div>
      ${o?r`<div class="mt-3">Anrede<div class="mt-1 flex gap-1.5">
        ${s(this.wizardFormality!=="sie",o[0],()=>a("du"))}
        ${s(this.wizardFormality==="sie",o[1],()=>a("sie"))}
      </div></div>`:c}`}renderEditForm(){const e=this.verticals.find(i=>i.id===this.wizardEditId),t=(i,s,n=!1)=>r`
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
          ${t("audience","Who are you writing for?")}
          ${t("goal","What should posting about this get you?")}
          <div class="flex-1 text-xs text-muted">Language${this.renderLangPills()}</div>
          ${t("extra","Notes for Mana (optional): anything it should know or avoid",!0)}
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
            ${e?r`<button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-red-500 hover:bg-red-500/10"
              @click=${()=>void this.deleteTopic(e)}>${Ee("trash-2")} Delete topic</button>`:c}
          </div>
        </div>
      </div>
    `}renderWizard(){const e=this.wizardStep===Pi.length,t=e?null:Pi[this.wizardStep],i=!t?.required||!!this.wizard[t.key].trim(),s=!!this.wizard.name.trim();return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto mana-card p-4 mt-4 mb-24">
          <div class="flex items-center gap-1.5 mb-6">
            ${[...Pi,null].map((n,o)=>r`<button type="button"
              class="h-2.5 flex-1 rounded-full transition-colors ${o<=this.wizardStep?"bg-accent":"bg-line hover:bg-muted/40"}"
              title=${o<Pi.length?Pi[o].q:"Language & tone"}
              aria-label="Go to step ${o+1}"
              @click=${()=>{this.wizardStep=o,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus())}}
            ></button>`)}
            <button type="button"
              class="shrink-0 ml-1 w-6 h-6 grid place-items-center rounded-full text-muted hover:text-ink hover:bg-hover text-base leading-none"
              title=${s?"Save what's here and close":"Close without saving"}
              @click=${()=>{s?this.saveWizard():this.view="queue"}}
            >×</button>
          </div>
          ${t?r`
              <h3 class="text-base font-semibold text-ink mb-1">${t.q}</h3>
              <p class="text-xs text-muted mb-3">${t.hint}</p>
              <textarea
                class="wizard-input w-full ${t.key==="name"?"h-12":"h-24"} px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-none focus:outline-none focus:border-ink placeholder:text-muted/50"
                .value=${this.wizard[t.key]}
                placeholder=${t.required?"":"optional"}
                @input=${n=>{this.wizard={...this.wizard,[t.key]:n.target.value}}}
                @keydown=${n=>{n.key==="Escape"?this.view="queue":n.key==="Enter"&&t.key==="name"&&(n.preventDefault(),i&&(this.wizardStep+=1))}}
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
              @click=${()=>{e?this.saveWizard():(this.wizardStep+=1,this.updateComplete.then(()=>this.renderRoot?.querySelector(".wizard-input")?.focus()))}}
            >${this.saving?"…":e?this.wizardEditId!=null?"Save changes":"Create topic":"Continue →"}</button>
          </div>
        </div>
      </div>
    `}async draftWithAi(e){if(this.generating||this.aiStartedAt!==null)return;this.aiTopicId=e.topicId,this.aiError="",this.genStartedAt=Date.now(),this.setGenerating(!0);const t=await fetch("/api/publisher/draft",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({verticalId:e.topicId,pillar:e.pillar,angle:e.angle?.trim()||void 0})}).catch(()=>null);if(!t?.ok){this.genStartedAt=null,this.setGenerating(!1),H(this,t?.status===409?"A draft is already being written. Give it a minute.":"Couldn't start the draft. Try again.",{tone:"error"});return}this.aiStartedAt=Date.now()}async removeDraft(e){await wt(this,{title:"Delete this post for good?",body:"It leaves the archive and its numbers leave Results. The post on LinkedIn stays.",confirm:"Delete",tone:"danger"})&&(await fetch(`/api/publisher/drafts/${e.id}`,{method:"DELETE"}),await this.refresh())}async act(e,t,i){t==="discard"&&!await wt(this,{title:"Discard this draft?",body:"It will leave Drafts.",confirm:"Discard draft",tone:"danger"})||(await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:t,...i!==void 0?{body:i}:{}})}),await this.refresh())}startEdit(e){this.editingId=e.id,this.editBody=e.body}swapHook(e,t){const s=(this.editingId===e.id?this.editBody:e.body).split(`
`),n=s.findIndex(o=>o.trim());n>=0?s[n]=t:s.unshift(t),this.editingId=e.id,this.editBody=s.join(`
`)}parseHooks(e){if(!e.hooks)return[];try{const t=JSON.parse(e.hooks);return Array.isArray(t)?t.map(String).map(i=>i.trim()).filter(Boolean):[]}catch{return[]}}async commitEdit(e,t=!1){const i=this.editBody.trim();this.editingId=null,i&&i!==e.body&&await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({body:i})}),t?await this.act({...e,body:i},"approve"):await this.refresh()}async copyBody(e){try{await navigator.clipboard.writeText(e.body),this.copiedId=e.id,setTimeout(()=>{this.copiedId===e.id&&(this.copiedId=null)},2e3)}catch{H(this,"Couldn't copy. Open the post and copy the text by hand.",{tone:"error"})}}openMetrics(e){this.metricsForId=e.id,this.metricsDraft={impressions:e.impressions!=null?String(e.impressions):"",reactions:e.reactions!=null?String(e.reactions):"",comments:e.comments!=null?String(e.comments):"",leads:e.leads!=null?String(e.leads):""}}async saveMetrics(e){const t={};for(const i of Mn)t[i]=this.metricsDraft[i].trim()===""?null:Number(this.metricsDraft[i]);this.metricsForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async savePosting(){const e={webhookUrl:this.webhookUrl.trim(),webhookSecret:this.webhookSecret.trim()};this.linkedinToken.trim()&&(e.linkedinToken=this.linkedinToken.trim()),await fetch("/api/publisher/posting",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),this.linkedinToken="",await this.refresh()}async savePostUrl(e){const t=this.postUrlDraft.trim();this.postUrlForId=null,await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({post_url:t})}),await this.refresh()}async syncMetrics(e){this.syncingId=e.id;try{const t=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"sync"})});if(!t.ok){const i=await t.json().catch(()=>({}));H(this,`Metrics sync failed: ${i.error||t.status}`,{tone:"error"})}}finally{this.syncingId=null,await this.refresh()}}fileToUploadUrl(e){return new Promise(t=>{const i=new FileReader;i.onload=async()=>{try{const s=await fetch("/api/upload",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dataUrl:i.result,name:e.name})});if(!s.ok){t(null);return}const{url:n}=await s.json();t(n)}catch{t(null)}},i.onerror=()=>t(null),i.readAsDataURL(e)})}pickImageStyle(e){const t=Mi.find(s=>s.key===e),i=this.editImageDna.trim()===""||Mi.some(s=>s.dna===this.editImageDna.trim());this.editImageStyle=e,t&&i&&(this.editImageDna=t.dna),this.dirtyFields.add("image_style")}async uploadRefImage(e){const t=e.target.files?.[0];if(!t)return;const i=await this.fileToUploadUrl(t);i&&(this.editImageRef=i,this.dirtyFields.add("image_ref_url"),this.requestUpdate())}async genImage(e,t=""){this.imaging=[...new Set([...this.imaging,e.id])];const i={...this.imageErrors};delete i[e.id],this.imageErrors=i;for(const n of[...this.toldImageErrors])n.startsWith(`${e.id}:`)&&this.toldImageErrors.delete(n);let s=null;try{s=await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({action:"gen-image",direction:t,style:this.imageStyleOf(e)})})}catch{}if(!s||!s.ok&&s.status!==409){this.imaging=this.imaging.filter(o=>o!==e.id);const n=s?(await s.json().catch(()=>null))?.error:null;this.imageErrors={...this.imageErrors,[e.id]:n||"Couldn't reach Mana to start the image."},H(this,"Couldn't start the image. Try again.",{tone:"error"});return}setTimeout(()=>void this.refresh(),2500)}async setDraftImage(e,t){await fetch(`/api/publisher/drafts/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({image_url:t})}),await this.refresh()}async openLibrary(e){await Le(()=>import("./notes-media-CGSOjJZh.js"),__vite__mapDeps([2,3,4,5])),this.libraryFor=e}renderStylePicker(e,t,i,s={}){const n=this.stylePickerFor===e,o=a=>a==="auto"?"Mana picks":Mi.find(l=>l.key===a)?.label??a.replace(/-/g," ");return r`
      <div class="relative shrink-0">
        <button type="button" class="flex items-center gap-1.5 h-[30px] pl-1.5 pr-2 rounded-lg border border-line hover:border-ink text-left disabled:opacity-40" ?disabled=${!!s.disabled}
          aria-haspopup="listbox" aria-expanded=${n} title="Image style"
          @click=${()=>{this.stylePickerFor=n?null:e}}>
          ${ra(t,"w-[27px] h-[18px]")}
          <span class="truncate text-[12px] text-ink">${o(t)}</span>
          <sc-icon name="lucide-chevron-down" class="w-3.5 h-3.5 text-muted shrink-0"></sc-icon>
        </button>
        ${n?r`
          <div class="fixed inset-0 z-40" @click=${()=>{this.stylePickerFor=null}}></div>
          <ul role="listbox" class="absolute z-50 ${s.up?"bottom-full mb-1 left-0":"top-full mt-1 right-0"} w-60 p-1 rounded-xl border border-line bg-popover shadow-lg">
            ${Mi.map(a=>r`<li><button type="button" role="option" aria-selected=${a.key===t}
              class="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left ${a.key===t?"bg-accent-soft":"hover:bg-hover"}"
              @click=${()=>{i(a.key),this.stylePickerFor=null}}>
              ${ra(a.key)}<span class="text-[13px] text-ink">${o(a.key)}</span></button></li>`)}
          </ul>`:c}
      </div>`}renderImageConfig(){return r`
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-3">
          <span class="flex items-center gap-1 text-xs text-muted">Image style
            <span class="inline-flex text-muted/70 hover:text-ink cursor-help" tabindex="0"
              title="The default for this topic's images. Each post can pick another style next to Make image.">${Ee("info","w-3.5 h-3.5")}</span></span>
          ${this.renderStylePicker(-1,this.editImageStyle,e=>this.pickImageStyle(e))}
        </div>
        <label class="block text-xs text-muted">Image brand notes: palette, motifs, do's and don'ts
          <textarea class="mt-1 w-full h-20 px-3 py-2 text-sm bg-surface border border-line rounded-lg resize-y focus:outline-none focus:border-ink text-ink"
            .value=${this.editImageDna}
            @input=${e=>{this.dirtyFields.add("image_dna"),this.editImageDna=e.target.value}}></textarea></label>
        <div class="flex items-center gap-3">
          ${this.editImageRef?r`<img src=${this.editImageRef} alt="style reference" class="w-14 h-14 object-cover rounded-lg border border-line" />
                <button type="button" class="text-[11px] text-muted hover:text-red-600" @click=${()=>{this.editImageRef=null,this.dirtyFields.add("image_ref_url")}}>remove reference</button>`:r`<label class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2 cursor-pointer">
                + add a reference image (generation matches its style)
                <input type="file" accept="image/*" class="hidden" @change=${e=>void this.uploadRefImage(e)} /></label>`}
        </div>
      </div>`}renderResearch(e){let t=null;try{t=e.research?JSON.parse(e.research):null}catch{}if(!t||!t.queries?.length&&!t.items?.length)return c;const i=this.researchOpenId===e.id;return r`
      <div class="px-4 pt-1">
        <button type="button" class="text-[11px] text-muted hover:text-ink underline decoration-line underline-offset-2"
          @click=${()=>{this.researchOpenId=i?null:e.id}}
        >${i?"▾":"▸"} research trail (${t.items?.length??0} sources)</button>
        ${i?r`<div class="mt-1.5 mb-1 rounded-lg border border-line/60 bg-bg px-3 py-2 space-y-1.5">
              ${t.queries?.length?r`<p class="text-[11px] text-muted"><span class="font-semibold text-[10px]">searched</span> ${t.queries.join(" · ")}</p>`:c}
              ${(t.items??[]).map(s=>r`
                <p class="text-[11px] leading-snug">
                  ${s.url?r`<a class="text-ink underline decoration-line underline-offset-2 hover:decoration-ink" href=${s.url} target="_blank" rel="noopener">${s.title||s.url}</a>`:r`<span class="text-ink">${s.title||"(untitled)"}</span>`}
                  ${s.note?r`<span class="text-muted"> — ${s.note}</span>`:c}
                </p>`)}
            </div>`:c}
      </div>
    `}renderHookAlts(e){if(e.status!=="draft")return c;const t=this.parseHooks(e);return t.length?r`
      <div class="px-4 pt-1 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-muted/70 font-semibold">try hook</span>
        ${t.map(i=>r`
          <button type="button" title=${i}
            class="max-w-[16rem] truncate px-2 py-0.5 text-[11px] rounded-full border border-line text-muted hover:text-ink hover:border-ink"
            @click=${()=>this.swapHook(e,i)}
          >${i}</button>`)}
      </div>`:c}imageStyleOf(e){const t=this.imageStyleFor[e.id];if(t)return t;const i=this.verticals.find(s=>s.id===e.vertical_id)?.image_style??"";return Mi.some(s=>s.key===i)?i:"photo"}renderDraftImage(e){if(Oe(e)||e.status==="posted")return c;const t=this.imaging.includes(e.id),i="shrink-0 px-2.5 py-1.5 text-[12px] rounded-lg border border-line text-ink hover:border-ink disabled:opacity-40",s=this.imageStyleOf(e);return r`
      <section class="px-1 space-y-1.5">
        <div class="flex items-center gap-1.5">
          <span class="w-14 shrink-0 text-[12px] font-semibold text-muted">Image</span>
          ${this.renderStylePicker(e.id,s,n=>{this.imageStyleFor={...this.imageStyleFor,[e.id]:n}},{up:!0,disabled:t})}
          <button type="button" class=${i} ?disabled=${t} @click=${()=>void this.genImage(e)}>${e.image_url?"New image":"Make image"}</button>
          <button type="button" class=${i} @click=${()=>void this.openLibrary(e.id)}>Library</button>
          ${e.image_url?r`<button type="button" class="shrink-0 px-1 text-[12px] text-muted hover:text-red-600" @click=${()=>void this.setDraftImage(e,null)}>Remove</button>`:c}
        </div>
        ${t?r`<p class="flex items-center gap-1.5 px-1 text-[11px] text-ink">
            <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>Making the image, about 40 seconds</p>`:this.imageErrors[e.id]?r`<p role="alert" class="px-1 text-[11px] text-red-600">The image didn't come: ${this.imageErrors[e.id]}</p>`:c}
      </section>`}renderDraftCard(e){const t=this.editingId===e.id,i=t?this.editBody:e.body,s=i.length,n=i.split(/\s+/).filter(Boolean).length;return r`
      <div class="rounded-lg bg-bg">
        <div class="flex items-center gap-2 px-4 pt-3">
          <span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${Oe(e)?sa:ia[e.pillar]}">${Oe(e)?"🎬 Script":fs[e.pillar]}</span>
          ${e.status!=="draft"?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${e.status==="posted"?"bg-accent/15 text-accent":"bg-line text-muted"}">${e.status}</span>`:c}
          <span class="ml-auto text-[10px] ${!Oe(e)&&s>1300?"text-amber-600":"text-muted/60"}">${Oe(e)?`${n} words`:`${s} chars`}</span>
        </div>
        ${e.source_note?r`<p class="px-4 pt-1 text-[11px] text-muted">why now: ${e.source_note}
              ${e.source_url?r` · <a class="underline hover:text-ink" href=${e.source_url} target="_blank" rel="noopener">source</a>`:c}</p>`:c}
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
              >${!Oe(e)&&this.webhookConfigured?"Approve & post":"Approve"}</button>
              ${t?r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover" @click=${()=>void this.commitEdit(e)}>Save edit</button>`:r`<button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-muted hover:text-ink hover:bg-hover" @click=${()=>this.startEdit(e)}>Edit</button>`}
              <button type="button" class="ml-auto text-[11px] text-muted hover:text-red-600" @click=${()=>void this.act(e,"discard")}>discard</button>`:e.status==="approved"?r`
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-line text-ink hover:bg-hover"
                  @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":Oe(e)?"Copy script":"Copy post"}</button>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10"
                  @click=${()=>void this.act(e,"mark-posted")}>${Oe(e)?"Video is up":"I posted it"}</button>
                <button type="button" class="ml-auto text-[11px] text-muted hover:text-ink" @click=${()=>void this.act(e,"reopen")}>back to drafts</button>`:r`<span class="text-[11px] text-muted">${e.posted_at?new Date(e.posted_at*1e3).toLocaleDateString():""}</span>
                ${Oe(e)?c:this.renderMetrics(e)}
                <span class="ml-auto inline-flex items-center gap-2">
                  <button type="button" class="text-[11px] text-muted hover:text-ink" title="Mis-tap? Back to approved (doesn't touch LinkedIn)" @click=${()=>void this.act(e,"unpost")}>undo</button>
                  <button type="button" class="text-[11px] text-muted hover:text-red-600" title="Delete from the archive" @click=${()=>void this.removeDraft(e)}>delete</button>
                  <button type="button" class="px-2 py-1 text-[11px] rounded-md border border-line text-muted hover:text-ink" @click=${()=>void this.copyBody(e)}>${this.copiedId===e.id?"Copied ✓":"Copy"}</button>
                </span>`}
        </div>
      </div>
    `}renderMetrics(e){if(this.metricsForId===e.id)return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
        ${Mn.map(s=>r`<label class="inline-flex items-center gap-0.5 text-[10px] text-muted">${s.slice(0,4)}
          <input type="number" min="0" class="w-14 px-1 py-0.5 text-[11px] bg-bg border border-line rounded text-right focus:outline-none focus:border-ink"
            .value=${this.metricsDraft[s]}
            @input=${n=>{this.metricsDraft={...this.metricsDraft,[s]:n.target.value}}}
            @keydown=${n=>{n.key==="Enter"?this.saveMetrics(e):n.key==="Escape"&&(this.metricsForId=null)}}
          /></label>`)}
        <button type="button" class="px-1.5 py-0.5 text-[10px] rounded border border-ink text-ink hover:bg-hover" @click=${()=>void this.saveMetrics(e)}>save</button>
      </span>`;const t=Mn.some(s=>e[s]!=null),i=e.metrics_synced_at!=null;return r`<span class="inline-flex items-center gap-1.5 flex-wrap">
      <button type="button" class="inline-flex items-center gap-1.5 text-[10px] text-muted hover:text-ink" title=${i?"Auto-synced from LinkedIn — click to override by hand":"Log this post's numbers from LinkedIn analytics"}
        @click=${()=>this.openMetrics(e)}>
        ${t?r`${e.impressions!=null?r`<span>👁 ${e.impressions}</span>`:c}
            ${e.reactions!=null?r`<span>👍 ${e.reactions}</span>`:c}
            ${e.comments!=null?r`<span>💬 ${e.comments}</span>`:c}
            ${e.leads!=null?r`<span class="text-accent font-medium">→ ${e.leads} lead${e.leads===1?"":"s"}</span>`:c}`:r`<span class="underline decoration-line underline-offset-2">+ log metrics</span>`}
      </button>
      ${i?r`<span class="text-[9px] text-accent/80" title="From LinkedIn's Member Post Analytics API">⟳ synced</span>`:c}
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
            @click=${()=>void this.syncMetrics(e)}>${this.syncingId===e.id?"syncing…":"⟳ sync"}</button>`:c}`}renderListRow(e){const t=this.expandedId===e.id,i=(e.body.split(`
`).find(n=>n.trim())||"").slice(0,100),s=this.activeVerticalId===null&&this.wide?this.verticals.find(n=>n.id===e.vertical_id)?.name:void 0;return r`
      <li class="pub-row">
        <button type="button" class="group w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>{e.status==="posted"?this.expandedId=t?null:e.id:this.openEditor(e.id)}}>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${Oe(e)?sa:ia[e.pillar]}">${Oe(e)?"🎬 Script":fs[e.pillar]}</span>
          <span class="flex-1 min-w-0 text-sm text-ink font-semibold group-hover:underline underline-offset-2 truncate">${i}</span>
          ${s?r`<span class="text-[10px] text-muted shrink-0 max-w-[8rem] truncate">${s}</span>`:c}
          ${e.status==="posted"&&e.impressions!=null?r`<span class="text-[10px] text-muted shrink-0">👁 ${e.impressions}${e.leads?r` · <span class="text-accent">→${e.leads}</span>`:c}</span>`:c}
          <span class="text-[10px] ${e.status==="posting"||e.scheduled_at&&e.status==="approved"?"text-accent":"text-muted/60"} shrink-0">${e.status==="posting"?"Posting…":e.scheduled_at&&e.status==="approved"?uf(e.scheduled_at):new Date((e.posted_at??e.created_at)*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
        </button>
        ${t?r`<div class="px-2 pb-2">${this.renderDraftCard(e)}</div>`:c}
      </li>
    `}async saveLinkedInApp(){if(!(!this.liClientId.trim()||this.liSaving)){this.liSaving=!0;try{if(!(await fetch("/api/publisher/linkedin/app",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({clientId:this.liClientId.trim(),clientSecret:this.liClientSecret.trim()||void 0})})).ok){H(this,"Couldn't save the app details. Try again.",{tone:"error"});return}this.liClientSecret="",await this.refresh()}finally{this.liSaving=!1}}}async disconnectLinkedIn(){await wt(this,{title:"Disconnect LinkedIn?",body:"Scheduled posts won't go out until you connect again.",confirm:"Disconnect",tone:"warning"})&&(await fetch("/api/publisher/linkedin",{method:"DELETE"}),await this.refresh(),H(this,"LinkedIn disconnected"))}renderSettingsPage(){const e=n=>r`<span class="inline-block w-1.5 h-1.5 rounded-full ${n?"bg-accent":"bg-line"}"></span>`,t=this.linkedin,i=t?.expiresAt?Math.ceil((t.expiresAt-Date.now())/864e5):null,s="mt-1 w-full px-2.5 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink text-ink";return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-4">
        <div class="max-w-lg mx-auto space-y-5 pb-6">
          <section class="mana-card p-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-sm text-ink font-medium">LinkedIn</span>
              <span class="ml-auto inline-flex items-center gap-1.5 text-[12px] text-muted">${e(!!t?.connected)}
                ${t?.connected?`Connected as ${t.name??"you"}${i!==null?` · ${i} day${i===1?"":"s"} left`:""}`:t?.expiresAt?"Connection expired":"Not connected"}</span>
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
                  <input type="text" class=${s} placeholder=${t?.hasApp?"saved, paste to replace":""} .value=${this.liClientId}
                    @input=${n=>{this.liClientId=n.target.value}} /></label>
                <label class="block text-[11px] text-muted">Client Secret
                  <input type="password" class=${s} placeholder=${t?.hasApp?"saved, paste to replace":""} .value=${this.liClientSecret}
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
              <div class="mana-card p-4 space-y-2.5">
                <div class="flex items-center gap-2 text-[11px] text-muted">
                  <span class="inline-flex items-center gap-1">${e(this.webhookConfigured)} n8n webhook ${this.webhookConfigured?"set":"not set"}</span>
                  <span class="inline-flex items-center gap-1 ml-auto">${e(this.linkedinConfigured)} ${this.linkedinConfigured?"metrics token set":"no metrics token"}</span>
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
      </div>`}renderNeedsNumbers(e){const t=this.drafts.filter(i=>i.status==="posted"&&i.impressions==null&&!Oe(i)&&this.inTopic(i)&&(i.posted_at??0)<=e-172800&&(i.posted_at??0)>=e-1814400).sort((i,s)=>(s.posted_at??0)-(i.posted_at??0));return t.length?r`
      <section class="mana-card px-3 py-2.5">
        <h4 class="text-sm font-semibold text-ink">How did these do?</h4>
        <p class="text-[11px] text-muted">Their numbers pick the next format and the openings the writer learns from.</p>
        <ul class="mt-1">${t.map(i=>r`<li>
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
      </div>`;const e=s=>this.drafts.filter(n=>ps(n)===s&&this.inTopic(n)).sort((n,o)=>s==="scheduled"?(n.scheduled_at??0)-(o.scheduled_at??0):(o.posted_at??o.created_at)-(n.posted_at??n.created_at)).slice(0,s==="posted"?100:void 0);if(this.activeVertical)return this.renderTopicList(e);const t=e(this.stage),i={draft:"No drafts.",scheduled:"Nothing scheduled.",posted:"Nothing published yet."};return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${this.stage==="posted"?this.renderNeedsNumbers(ms()):c}
        ${this.generating&&this.stage==="draft"?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
              <div class="mt-2 h-1 rounded-full bg-line overflow-hidden">
                <div class="h-full bg-accent transition-all duration-1000" style="width:${Math.min(95,Math.round((Date.now()-(this.genStartedAt??Date.now()))/1e3/120*100))}%"></div>
              </div>
            </div>`:c}
        ${t.length?r`<ul class="mana-card overflow-hidden">${t.map(s=>this.renderListRow(s))}</ul>`:this.generating&&this.stage==="draft"?c:r`<div class="mana-card px-4 py-7 text-center">
                <div class="mx-auto w-9 h-9 grid place-items-center rounded-full bg-hover text-muted">${Ee(this.stage==="posted"?"send":"calendar-clock","w-4 h-4")}</div>
                <p class="mt-2 text-sm font-medium text-ink">${i[this.stage]}</p>
                <p class="mt-1 text-xs text-muted">Choose a topic to review its drafts or write the next post.</p>
                ${this.verticals[0]?r`<button type="button" class="mt-3 px-3 py-1.5 rounded-lg border border-line text-xs font-medium text-ink hover:bg-hover"
                  @click=${()=>this.setVertical(this.verticals[0].id)}>Open ${this.verticals[0].name}</button>`:c}
              </div>`}
       </div>
      </div>
    `}renderTopicList(e){const t=Ai.map(i=>({...i,items:e(i.key)})).filter(i=>i.items.length);return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-4">
        ${this.generating?r`<div class="px-4 py-3 mana-card">
              <div class="flex items-center gap-2 text-xs text-ink">
                <span class="inline-block w-3 h-3 rounded-full border-2 border-line border-t-accent animate-spin"></span>
                ${this.genStatusText()}
              </div>
            </div>`:c}
        ${t.length||this.generating?c:r`<p class="px-1 py-6 text-center text-xs text-muted">No posts in ${this.activeVertical.name} yet. Press New post.</p>`}
        ${t.map(i=>r`
          <section class="space-y-1.5">
            <h4 class="px-1 text-[11px] font-semibold text-muted">${i.label} <span class="tabular-nums font-normal">${i.items.length}</span></h4>
            ${i.key==="posted"?this.renderNeedsNumbers(ms()):c}
            <ul class="mana-card overflow-hidden">${i.items.map(s=>this.renderListRow(s))}</ul>
          </section>`)}
       </div>
      </div>`}navRow(e,t){return r`
      <button type="button" class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left ${t.active?"bg-accent-soft text-ink font-medium":"text-muted hover:text-ink hover:bg-hover"}"
        @click=${t.onClick}>
        ${Ee(t.icon,"w-4 h-4 shrink-0")}
        <span class="flex-1 min-w-0 truncate">${e}</span>
        ${t.badge?r`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-soft text-accent font-medium">${t.badge}</span>`:c}
        ${t.count?r`<span class="text-xs text-muted">${t.count}</span>`:c}
      </button>`}toggleGroup(e){const t=new Set(this.collapsedGroups);t.has(e)?t.delete(e):t.add(e),this.collapsedGroups=t;try{localStorage.setItem("cockpit.publisher_nav_collapsed",JSON.stringify([...t]))}catch{}}toggleNav(){this.navHidden=!this.navHidden;try{localStorage.setItem("cockpit.publisher_nav_hidden",this.navHidden?"1":"0")}catch{}}startResize(e){const t=e.currentTarget,i=e.clientX,s=this.navWidth;t.setPointerCapture(e.pointerId);const n=a=>{this.navWidth=Math.min(ta,Math.max(ea,s+a.clientX-i))},o=()=>{t.removeEventListener("pointermove",n),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o);try{localStorage.setItem("cockpit.publisher_nav_width",String(this.navWidth))}catch{}};t.addEventListener("pointermove",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),e.preventDefault()}groupHeader(e,t,i){const s=this.collapsedGroups.has(e);return r`
      <div class="flex items-center pl-1 pr-1 pt-3 pb-0.5">
        <button type="button" class="flex-1 flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.7rem] font-semibold text-muted hover:text-ink text-left"
          aria-expanded=${!s} @click=${()=>this.toggleGroup(e)}>
          ${Ee(s?"chevron-right":"chevron-down","w-3 h-3")} ${t}</button>
        ${i??c}
      </div>`}renderTopicRow(e,t){const i=this.drafts.filter(n=>n.vertical_id===e.id&&ps(n)==="draft").length,s=this.activeVerticalId===e.id&&(this.view==="queue"||this.view==="editor"||this.view==="wizard"&&this.wizardEditId===e.id);return r`
      <div class="relative ${this.topicDrag.dropClass(e.id)}"
        draggable="true"
        @mousedown=${()=>this.topicDrag.arm(e.id)}
        @mouseup=${this.topicDrag.disarm}
        @dragstart=${n=>this.topicDrag.onDragStart(n,e.id)}
        @dragend=${this.topicDrag.onDragEnd}
        @dragover=${n=>this.topicDrag.onDragOver(n,e.id,t)}
        @dragleave=${this.topicDrag.onDragLeave}
        @drop=${n=>this.topicDrag.onDrop(n,e.id,t)}>
        <button type="button" aria-current=${s?"page":c}
          class="w-full min-w-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-left ${s?"bg-accent-soft":"hover:bg-hover"} ${this.topicDrag.isDragging(e.id)&&this.topicDrag.active?"opacity-40":""}"
          title=${e.name}
          @click=${()=>this.setVertical(e.id)}>
          <span class="flex-1 min-w-0 truncate text-sm text-ink">${e.name}</span>
          ${i?r`<span class="shrink-0 text-xs text-muted tabular-nums" title="${i} draft${i===1?"":"s"}">${i}</span>`:c}
        </button>
      </div>`}pipelineItems(){const e=this.view==="queue"&&this.activeVerticalId===null;return[...Ai.filter(t=>t.key!=="draft").map(t=>({label:t.label,icon:t.icon,active:e&&this.stage===t.key,count:this.stageCount(t.key,!0),onClick:()=>{this.setVertical(null),this.setStage(t.key)}})),{label:"Results",icon:"bar-chart",active:this.view==="results"&&this.activeVerticalId===null,count:0,onClick:()=>{this.setVertical(null),this.view="results",this.navOpen=!1,this.loadInsights(!0)}}]}renderNavRail(){const e="relative w-9 h-9 grid place-items-center rounded-lg";return r`
      <aside class="shrink-0 w-12 h-full flex flex-col items-center gap-1 pt-3 pb-2 bg-surface border-r border-line/60 overflow-y-auto">
        <button type="button" class="${e} text-muted hover:text-ink hover:bg-hover" aria-label="Show sidebar" title="Show sidebar"
          @click=${()=>this.toggleNav()}>${Ee("layout-sidebar")}</button>
        ${this.pipelineItems().map(t=>r`<button type="button" class="${e} ${t.active?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
          aria-label=${t.label} title=${t.count?`${t.label} (${t.count})`:t.label} @click=${t.onClick}>${Ee(t.icon)}</button>`)}
        <div class="w-6 border-t border-line/60 my-1"></div>
        ${this.verticals.map(t=>{const i=this.activeVerticalId===t.id&&this.view!=="settings",s=this.drafts.filter(n=>n.vertical_id===t.id&&ps(n)==="draft").length;return r`<button type="button" class="${e} text-[13px] font-semibold ${i?"bg-accent-soft text-ink":"text-muted hover:text-ink hover:bg-hover"}"
            aria-label=${t.name} title=${s?`${t.name} (${s} draft${s===1?"":"s"})`:t.name} @click=${()=>this.setVertical(t.id)}>
            ${t.name.trim().charAt(0).toUpperCase()}
            ${s?r`<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent"></span>`:c}</button>`})}
      </aside>`}renderNav(){const e=i=>!this.collapsedGroups.has(i),t=r`<button type="button" aria-label="New topic" title="New topic"
      class="w-6 h-6 grid place-items-center rounded-md text-muted hover:text-ink hover:bg-hover" @click=${()=>this.openWizard()}>${Ee("plus","w-3.5 h-3.5")}</button>`;return r`
      ${this.wide?r`<div class="flex items-center justify-between gap-2 pl-4 pr-2 pt-3 pb-1 shrink-0">
        <h2 class="text-sm font-semibold text-ink">Publisher</h2>
        <button type="button" class="w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label="Hide sidebar" title="Hide sidebar" @click=${()=>this.toggleNav()}>${Ee("layout-sidebar")}</button>
      </div>`:c}
      <nav class="flex-1 min-h-0 overflow-y-auto px-2 ${this.wide?"":"pt-3"} pb-2" aria-label="Publisher">
        ${this.pipelineItems().map(i=>this.navRow(i.label,i))}
        ${this.groupHeader("topics","Topics",t)}
        ${e("topics")?r`
          ${this.verticals.map((i,s)=>this.renderTopicRow(i,s))}
          ${this.verticals.length||this.loading?c:r`<button type="button" class="w-full px-3 py-1.5 rounded-lg text-sm text-left text-muted hover:text-ink hover:bg-hover"
            @click=${()=>this.openWizard()}>Create your first topic</button>`}`:c}
      </nav>
      <div class="px-2 pb-2 shrink-0 border-t border-line/60 pt-2">
        ${this.navRow(this.linkedin?.connected?"LinkedIn connected":"Connect LinkedIn",{icon:"settings",active:this.view==="settings",badge:this.linkedin?.connected||!this.linkedin?void 0:"off",onClick:()=>{this.view="settings",this.navOpen=!1}})}
      </div>`}renderResults(){const e=this.verticals;if(!e.length)return r`<p class="p-6 text-center text-xs text-muted">No topics yet.</p>`;if(!this.insights)return r`<div class="flex-1 min-h-0 p-3"><p class="p-6 text-center text-xs text-muted">Loading results…</p></div>`;const t=s=>s>=1e3?`${(s/1e3).toFixed(s>=1e4?0:1)}k`:String(Math.round(s)),i=(s,n,o)=>r`
      <div class="rounded-lg border border-line/70 px-3 py-2 min-w-0">
        <div class="text-[11px] text-muted truncate">${s}</div>
        <div class="text-lg font-semibold text-ink leading-tight tabular-nums">${n}</div>
        ${o?r`<div class="text-[10px] text-muted truncate">${o}</div>`:c}
      </div>`;return r`
      <div class="flex-1 min-h-0 overflow-y-auto p-3">
       <div class="max-w-3xl mx-auto space-y-3">
        ${e.map(s=>{const n=this.insights.find(u=>u.topicId===s.id);if(!n)return c;const o=Math.round(s.posts_per_week*30/7),a=n.postedThisWeek,l=n.byFormat.filter(u=>u.avgImpressions!=null),h=Math.max(1,...l.map(u=>u.avgImpressions));return r`
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
                ${i("Avg impressions",n.avgImpressions==null?"–":t(n.avgImpressions),n.measured?`${n.measured} of ${n.posts} measured`:"none measured yet")}
                ${i("Comments",String(n.comments))}
                ${i("Leads",String(n.leads),"logged by hand")}
              </div>
              ${l.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1.5">Avg impressions by format</p>
                  <div class="space-y-1.5">${l.map(u=>r`
                    <div class="flex items-center gap-2 text-[12px]" title="${fs[u.format]}: ${Math.round(u.avgImpressions)} average impressions over ${u.measured} measured post${u.measured===1?"":"s"}">
                      <span class="w-20 shrink-0 text-ink">${fs[u.format]}</span>
                      <span class="flex-1 h-2"><span class="block h-full rounded bg-accent" style="width:${Math.max(2,u.avgImpressions/h*100)}%"></span></span>
                      <span class="w-20 shrink-0 text-right text-muted tabular-nums">${t(u.avgImpressions)} · ${u.measured}</span>
                    </div>`)}</div>
                </div>`:c}
              ${n.top.length?r`
                <div>
                  <p class="text-[11px] text-muted mb-1">Best posts</p>
                  <ul class="space-y-1">${n.top.map(u=>r`
                    <li class="flex items-center gap-2 text-[12px]">
                      <span class="flex-1 min-w-0 truncate text-ink">${u.hook}</span>
                      <span class="shrink-0 text-muted tabular-nums">${u.impressions!=null?`${t(u.impressions)} views`:""}${u.comments?` · ${u.comments} comments`:""}${u.leads?` · ${u.leads} lead${u.leads===1?"":"s"}`:""}</span>
                    </li>`)}</ul>
                </div>`:c}
              <p class="text-[11px] text-muted">${n.writeNext}</p>
              ${n.unmeasured?r`<p class="text-[11px] text-muted">${n.unmeasured} post${n.unmeasured===1?" has":"s have"} no numbers yet.
                <button type="button" class="underline decoration-line underline-offset-2 hover:text-ink" @click=${()=>this.setStage("posted")}>Log them in Published</button></p>`:c}
              ${n.posts?c:r`<p class="text-[11px] text-muted">Nothing published in the last 30 days.</p>`}
            </section>`})}
       </div>
      </div>`}async loadInsights(e=!1){const t=this.drafts.filter(i=>i.status==="posted").map(i=>`${i.id}:${i.pillar}:${i.posted_at}:${i.impressions}:${i.reactions}:${i.comments}:${i.leads}`).join(",");if(!(!e&&t===this.insightsFor&&this.insights)){this.insightsFor=t;try{const i=await fetch("/api/publisher/insights");i.ok&&(this.insights=(await i.json()).insights)}catch{}}}renderEditor(){const e=this.composing?null:this.drafts.find(n=>n.id===this.editorId)??null;if(!this.composing&&!e&&this.editorId!==this.createdId)return r`<p class="p-6 text-center text-xs text-muted">That post is gone.</p>`;const t=this.verticals.find(n=>n.id===(e?.vertical_id??this.activeVerticalId))??this.verticals[0],i=this.drafts.filter(n=>n.id!==e?.id),s=t?pc(t,i,ms(),this.takenTimes(e?.id)):null;return r`<publisher-editor class="flex flex-col flex-1 min-h-0"
      .draft=${e} .topics=${this.verticals} .defaultTopicId=${this.activeVerticalId} .defaultScheduleAt=${s}
      .backLabel=${this.activeVertical?.name??Ai.find(n=>n.key===this.stage).label}
      .linkedinConnected=${!!this.linkedin?.connected} .webhookConfigured=${this.webhookConfigured} .twoCol=${this.twoCol} .authorName=${this.linkedin?.name??null}
      .renderImage=${n=>this.renderDraftImage(n)}
      .improving=${e!=null&&this.improving.includes(e.id)}
      .aiWriting=${this.composing&&(this.aiStartedAt!==null||this.generating)} .aiError=${this.composing?this.aiError:""}
      @ai-draft=${n=>void this.draftWithAi(n.detail)}
      @changed=${()=>void this.refresh()}
      @improved=${n=>{const o=this.drafts.find(a=>a.id===n.detail.id);o&&(!o.image_url||n.detail.image)&&!this.imaging.includes(o.id)&&this.genImage(o,n.detail.image)}}
      @opened=${n=>{this.composing=!1,this.editorId=n.detail.id,this.createdId=n.detail.id}}
      @moved=${n=>this.follow(n.detail.stage)}
      @close=${()=>void this.closeEditor()}
      @force-close=${()=>this.leaveEditor()}></publisher-editor>`}renderMainHeader(){if(this.view==="editor")return c;const e=this.activeVertical,t=e&&this.view==="queue",i=this.view==="settings"?"LinkedIn connection":this.view==="wizard"?this.wizardEditId!=null?"":"New topic":t?e.name:this.view==="results"?"Results":Ai.find(o=>o.key===this.stage).label,s=this.view==="wizard"?"max-w-lg":"max-w-3xl",n=this.view==="wizard"&&this.wizardEditId!=null;return r`
      <header class="px-3 pt-3 shrink-0"><div class="${s} mx-auto w-full flex items-center gap-2 mana-card px-4 py-3">
        ${n?r`<button type="button" class="flex items-center h-8 pl-1 pr-2 -ml-1 rounded-lg text-sm font-medium text-accent hover:bg-hover"
                @click=${()=>void this.closeEditForm()}>${Ee("chevron-left")} ${this.verticals.find(o=>o.id===this.wizardEditId)?.name??"Back"}</button>`:this.wide?c:r`<button type="button" class="flex items-center h-8 pl-1 pr-2 rounded-lg text-sm text-accent hover:bg-hover"
                @click=${()=>{this.navOpen=!0}}>${Ee("chevron-left")} Publisher</button>`}
        <div class="flex-1 min-w-0 ${this.wide?"min-h-8 flex flex-col justify-center":""}">
          <h3 class="text-sm font-semibold text-ink truncate" title=${i}>${i}</h3>
          ${t?r`<span class="text-[11px] text-muted tabular-nums">${this.postedThisWeek(e)} of ${e.posts_per_week} published this week</span>`:c}
        </div>
        ${t?r`<button type="button" class="shrink-0 flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-sm font-semibold text-accent bg-accent-soft hover:brightness-105"
          title="Write a new post for ${e.name}" @click=${()=>this.openCompose()}>${Ee("square-pen","w-3.5 h-3.5")} New post</button>`:c}
        ${t?r`<button type="button" class="shrink-0 w-8 h-8 grid place-items-center rounded-lg text-muted hover:text-ink hover:bg-hover"
          aria-label=${`Settings for ${e.name}`} title="Topic settings"
          @click=${()=>this.openWizard(e)}>${Ee("settings")}</button>`:c}
      </div></header>`}render(){const e=this.wide?!this.navHidden:this.navOpen,t=this.wide||!this.navOpen;return r`
      <div class="relative h-full min-h-0 bg-bg p-3 overflow-hidden">
      <div class="publisher-tool-surface flex h-full min-h-0 w-full max-w-[80rem] ${this.chatOpen?"mr-auto":"mx-auto"} overflow-hidden rounded-lg border border-card-border shadow-[var(--card-shadow)]">
        ${this.wide&&this.navHidden?this.renderNavRail():c}
        <aside class="${e?"flex":"hidden"} relative flex-col h-full min-h-0 overflow-hidden bg-surface ${this.wide?"shrink-0 border-r border-line/60":"flex-1 min-w-0"}"
          style=${this.wide?`width:${this.navWidth}px`:""}>
          ${this.renderNav()}
          ${this.wide?r`<div class="absolute top-0 bottom-0 -right-1 w-2 z-10 cursor-col-resize hover:bg-accent/30 transition-colors" role="separator" aria-orientation="vertical"
            title="Drag to resize, double-click to reset"
            @pointerdown=${i=>this.startResize(i)}
            @dblclick=${()=>{this.navWidth=us;try{localStorage.setItem("cockpit.publisher_nav_width",String(us))}catch{}}}></div>`:c}
        </aside>
        <section class="${t?"flex":"hidden"} flex-col flex-1 min-w-0 min-h-0">
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
    `}};$([b({type:Boolean})],k.prototype,"chatOpen",2);$([d()],k.prototype,"verticals",2);$([d()],k.prototype,"drafts",2);$([d()],k.prototype,"webhookConfigured",2);$([d()],k.prototype,"linkedinConfigured",2);$([d()],k.prototype,"loading",2);$([d()],k.prototype,"fromCopy",2);$([d()],k.prototype,"activeVerticalId",2);$([d()],k.prototype,"stage",2);$([d()],k.prototype,"view",2);$([d()],k.prototype,"wide",2);$([d()],k.prototype,"navOpen",2);$([d()],k.prototype,"navWidth",2);$([d()],k.prototype,"navHidden",2);$([d()],k.prototype,"collapsedGroups",2);$([d()],k.prototype,"wizardEditId",2);$([d()],k.prototype,"wizardStep",2);$([d()],k.prototype,"wizard",2);$([d()],k.prototype,"wizardLang",2);$([d()],k.prototype,"wizardFormality",2);$([d()],k.prototype,"langOther",2);$([d()],k.prototype,"editPostsPerWeek",2);$([d()],k.prototype,"editImageStyle",2);$([d()],k.prototype,"editImageDna",2);$([d()],k.prototype,"editImageRef",2);$([d()],k.prototype,"imaging",2);$([d()],k.prototype,"improving",2);$([d()],k.prototype,"imageErrors",2);$([d()],k.prototype,"stylePickerFor",2);$([d()],k.prototype,"imageStyleFor",2);$([d()],k.prototype,"libraryFor",2);$([d()],k.prototype,"saving",2);$([d()],k.prototype,"editingId",2);$([d()],k.prototype,"editBody",2);$([d()],k.prototype,"composing",2);$([d()],k.prototype,"editorId",2);$([d()],k.prototype,"twoCol",2);$([d()],k.prototype,"aiTopicId",2);$([d()],k.prototype,"aiStartedAt",2);$([d()],k.prototype,"aiError",2);$([d()],k.prototype,"generating",2);$([d()],k.prototype,"genStartedAt",2);$([d()],k.prototype,"webhookUrl",2);$([d()],k.prototype,"webhookSecret",2);$([d()],k.prototype,"linkedinToken",2);$([d()],k.prototype,"linkedin",2);$([d()],k.prototype,"liClientId",2);$([d()],k.prototype,"liClientSecret",2);$([d()],k.prototype,"liSaving",2);$([d()],k.prototype,"showLegacy",2);$([d()],k.prototype,"postUrlForId",2);$([d()],k.prototype,"postUrlDraft",2);$([d()],k.prototype,"syncingId",2);$([d()],k.prototype,"copiedId",2);$([d()],k.prototype,"researchOpenId",2);$([d()],k.prototype,"expandedId",2);$([d()],k.prototype,"toastMsg",2);$([d()],k.prototype,"ask",2);$([d()],k.prototype,"insights",2);$([d()],k.prototype,"metricsForId",2);$([d()],k.prototype,"metricsDraft",2);k=$([w("publisher-section")],k);var pf=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,Kl=(e,t,i,s)=>{for(var n=s>1?void 0:s?mf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&pf(t,i,n),n};const Wl=["M 100 600 q 0 -500, 500 -500 t 500 500 t -500 500 T 100 600 z","M 100 600 q -50 -400, 500 -500 t 450 550 t -500 500 T 100 600 z","M 100 600 q 0 -400, 500 -500 t 400 500 t -500 500 T 100 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 150 600 q 0 -600, 500 -500 t 500 550 t -500 500 T 150 600 z","M 100 600 q 100 -600, 500 -500 t 400 500 t -500 500 T 100 600 z"],he=e=>lc(`path("${Wl[e-1]}")`),aa=200;let qs=class extends Ie{constructor(){super(...arguments),this.label="teleporting to the office…"}render(){const e=[0,2,1,3],t=[1,2,3,4,1,2,3,4].map((i,s)=>It`<g class="blob b${i}${s>3?" alt":""}"><path d=${Wl[e[i-1]]}></path></g>`);return r`<div class="orb" aria-hidden="true"><svg viewBox="0 0 1200 1200">${t}</svg></div><span class="label">${this.label}</span>`}};qs.styles=Re`
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
    @keyframes blob-1 { 0% { d: ${he(1)}; } 30% { d: ${he(2)}; } 70% { d: ${he(3)}; } 100% { d: ${he(4)}; } }
    @keyframes blob-2 { 0% { d: ${he(3)}; } 40% { d: ${he(5)}; } 80% { d: ${he(2)}; } 100% { d: ${he(6)}; } }
    @keyframes blob-3 { 0% { d: ${he(2)}; } 35% { d: ${he(4)}; } 75% { d: ${he(6)}; } 100% { d: ${he(3)}; } }
    @keyframes blob-4 { 0% { d: ${he(4)}; } 30% { d: ${he(6)}; } 70% { d: ${he(2)}; } 100% { d: ${he(5)}; } }
    @keyframes rotate { to { transform: rotate(360deg); } }
    @keyframes fade { 50% { opacity: .5; } }
    @media (prefers-reduced-motion: reduce) { .blob, .blob path, .label { animation: none; } }
  `;Kl([b()],qs.prototype,"label",2);qs=Kl([w("office-orb")],qs);var ff=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,zo=(e,t,i,s)=>{for(var n=s>1?void 0:s?gf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&ff(t,i,n),n};let Ks=class extends T{constructor(){super(...arguments),this.ready=!1,this.failed=!1}connectedCallback(){super.connectedCallback(),this.load()}async load(){this.failed=!1;try{await Le(()=>import("./newsroom-section-DWBYpc0P.js").then(e=>e.n),__vite__mapDeps([9,3,4,10,5])),this.ready=!0}catch{this.failed=!0}}render(){return this.ready?r`<newsroom-section class="flex flex-col flex-1 min-h-0"></newsroom-section>`:r`<div class="flex-1 grid place-items-center text-sm text-muted" role="status">${this.failed?r`<button class="rounded-lg p-3 hover:bg-hover" @click=${()=>void this.load()}>couldn't open the office. retry</button>`:r`<office-orb></office-orb>`}</div>${c}`}};zo([d()],Ks.prototype,"ready",2);zo([d()],Ks.prototype,"failed",2);Ks=zo([w("newsroom-loader")],Ks);const Gl="slmai.cockpit.ideasCache";let ai=null;function bf(){if(ai)return ai;try{const e=localStorage.getItem(Gl);e&&(ai=JSON.parse(e))}catch{}return ai}function Vl(e){if(ai!==e){ai=e;try{localStorage.setItem(Gl,JSON.stringify(e))}catch{}}}var vf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,fe=(e,t,i,s)=>{for(var n=s>1?void 0:s?yf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&vf(t,i,n),n};const la="slmai.cockpit.ideasCollapsed",In="slmai.cockpit.ideasSection.title",_n="Ideas",xf='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let le=class extends T{constructor(){super(...arguments),this.tabbed=!1,this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=_n,this.ideas=[],this.highlightIds=new Set,this.flash=new Os(this,"idea"),this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.dragOverCommit=!1,this.draggingId=null,this.movingIds=new Set,this.onIdeasChanged=()=>{this.load()},this.onOpsEvent=e=>{const t=e.detail;!t||t.action!=="refresh"||(this.flash.take(t),t.added?.kind==="idea"&&(this.highlightIds=new Set(this.highlightIds).add(t.added.id)),this.load())},this.lastEmittedCount=-1,this.onCommitDragOver=e=>{e.dataTransfer?.types.includes("text/x-commit-id")&&(e.preventDefault(),e.dataTransfer.dropEffect="move",this.dragOverCommit=!0)},this.onCommitDragLeave=()=>{this.dragOverCommit=!1},this.onCommitDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id");if(!t)return;e.preventDefault(),this.dragOverCommit=!1;const i=(e.dataTransfer?.getData("text/plain")||"").trim();i&&await Dl(Number(t),i)}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(la)==="1",this.titleValue=localStorage.getItem(In)??_n,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.ideas.title"];t&&(this.titleValue=t,localStorage.setItem(In,t))}).catch(()=>{}),this.ideas=bf()??[],this.load(),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("ops-event",this.onOpsEvent)}clearHighlight(e){if(!this.highlightIds.has(e))return;const t=new Set(this.highlightIds);t.delete(e),this.highlightIds=t}updated(){Vl(this.ideas);const e=this.ideas.filter(i=>!i.hidden).length;if(e!==this.lastEmittedCount&&(this.lastEmittedCount=e,document.dispatchEvent(new CustomEvent("mana-ideas-count",{detail:{count:e}}))),this.editingId==null)return;const t=this.querySelector("textarea.idea-edit");t&&this.autoGrow(t)}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}async load(){try{const t=await(await fetch("/api/ideas")).json();this.ideas=t.ideas}catch{}}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||_n;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(In,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(la,this.collapsed?"1":"0")}async toggleHidden(e,t){this.ideas=this.ideas.map(i=>i.id===e?{...i,hidden:t}:i);try{await at(`/api/ideas/${e}`,{hidden:t})}catch{this.ideas=this.ideas.map(i=>i.id===e?{...i,hidden:!t}:i)}}async moveToWeek(e){if(!this.movingIds.has(e.id)){this.movingIds.add(e.id);try{await Ro(e.id,e.text)}finally{this.movingIds.delete(e.id)}}}async deleteIdea(e){const t=this.ideas;this.ideas=this.ideas.filter(i=>i.id!==e);try{await yt(`/api/ideas/${e}`)}catch{this.ideas=t}}beginAdd(e){e.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(e=!1){if(!this.adding)return;const t=this.newText.trim();if(this.newText="",!t){this.adding=!1;return}e||(this.adding=!1);try{const i=await B("/api/ideas",{text:t});this.ideas=[...this.ideas,{id:i.id,text:t,hidden:!1}]}catch{}}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!0)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newText="")}startEdit(e){this.adding=!1,this.editingId=e.id,this.editText=e.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const e=this.editingId;if(e===null)return;const t=this.editText.trim();if(this.cancelEdit(),!t)return;const i=this.ideas;this.ideas=this.ideas.map(s=>s.id===e?{...s,text:t}:s);try{await at(`/api/ideas/${e}`,{text:t})}catch{this.ideas=i}}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit()):e.key==="Escape"&&(e.preventDefault(),this.cancelEdit())}onDragStart(e,t){if(this.draggingId=t,e.dataTransfer){e.dataTransfer.setData("text/x-idea-id",String(t));const i=this.ideas.find(s=>s.id===t);i&&e.dataTransfer.setData("text/plain",i.text),e.dataTransfer.effectAllowed="move"}}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(e,t){if(!e.dataTransfer?.types.includes("text/x-idea-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const i=e.currentTarget.getBoundingClientRect();this.dragOverId=t,this.dragOverPos=e.clientY<i.top+i.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(e,t){const i=e.dataTransfer?.getData("text/x-idea-id"),s=i?Number(i):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(s)||s===t)return;e.preventDefault();const a=(this.showHidden?this.ideas:this.ideas.filter(v=>!v.hidden)).findIndex(v=>v.id===t);if(a<0)return;const l=n==="after"?a+1:a,h=this.ideas.slice(),u=h.findIndex(v=>v.id===s),p=h.findIndex(v=>v.id===t);if(u<0||p<0)return;const[m]=h.splice(u,1);if(!m)return;const g=n==="after"?p+(u<p?0:1):p-(u<p?1:0);h.splice(Math.max(0,g),0,m),this.ideas=h;try{await B(`/api/ideas/${s}/reorder`,{index:l})}catch{this.load()}}renderHiddenToggle(e){return e.length===0?c:Fo({open:this.showHidden,label:`${e.length} hidden`,controls:"hidden-ideas",onToggle:()=>{this.showHidden=!this.showHidden}})}renderIdeas(e,t){return r`
      <ul id=${t} class="flex flex-col">
        ${e.map(i=>this.editingId===i.id?r`
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
                    @paste=${Ns}
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
                  >${Pl(i.text)}</span>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 focus:opacity-100 hover:text-ink transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title=${i.hidden?"Show item":"Hide item"}
                    aria-label=${`${i.hidden?"Show":"Hide"} item: ${i.text}`}
                    @click=${s=>{s.stopPropagation(),this.toggleHidden(i.id,!i.hidden)}}
                  >${W(Wt(Gt[i.hidden?"eye":"eye-off"]))}</button>
                  <button
                    type="button"
                    class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                    style="width:14px;height:14px;display:inline-flex;"
                    title="Delete idea"
                    @click=${s=>{s.stopPropagation(),this.deleteIdea(i.id)}}
                  >
                    ${W(xf)}
                  </button>
                  </div>
                </li>
              `)}
      </ul>
    `}render(){const e=this.ideas.filter(s=>s.hidden),t=this.ideas.filter(s=>!s.hidden),i=this.tabbed||!this.collapsed;return r`
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
                >${W(this.collapsed?es:Zi)}</span
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
              ${this.renderIdeas(t,"active-ideas")}
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
                        @paste=${Ns}
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
              ${this.renderHiddenToggle(e)}
              ${this.showHidden?this.renderIdeas(e,"hidden-ideas"):c}
            `:c}
      </section>
    `}};fe([b({type:Boolean})],le.prototype,"tabbed",2);fe([d()],le.prototype,"collapsed",2);fe([d()],le.prototype,"showHidden",2);fe([d()],le.prototype,"editingTitle",2);fe([d()],le.prototype,"titleValue",2);fe([d()],le.prototype,"ideas",2);fe([d()],le.prototype,"highlightIds",2);fe([d()],le.prototype,"adding",2);fe([d()],le.prototype,"newText",2);fe([d()],le.prototype,"editingId",2);fe([d()],le.prototype,"editText",2);fe([d()],le.prototype,"dragOverId",2);fe([d()],le.prototype,"dragOverPos",2);fe([d()],le.prototype,"dragOverCommit",2);fe([d()],le.prototype,"draggingId",2);le=fe([w("ideas-section")],le);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ca=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},wf=Gi(class extends Gs{constructor(e){if(super(e),e.type!==yo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;i===void 0?i=t:t!==void 0&&(s=t);const n=[],o=[];let a=0;for(const l of e)n[a]=s?s(l,a):a,o[a]=i(l,a),a++;return{values:o,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=Sc(e),{values:o,keys:a}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=a,o;const l=this.ut??=[],h=[];let u,p,m=0,g=n.length-1,v=0,y=o.length-1;for(;m<=g&&v<=y;)if(n[m]===null)m++;else if(n[g]===null)g--;else if(l[m]===a[v])h[v]=Dt(n[m],o[v]),m++,v++;else if(l[g]===a[y])h[y]=Dt(n[g],o[y]),g--,y--;else if(l[m]===a[y])h[y]=Dt(n[m],o[y]),ki(e,h[y+1],n[m]),m++,y--;else if(l[g]===a[v])h[v]=Dt(n[g],o[v]),ki(e,n[m],n[g]),g--,v++;else if(u===void 0&&(u=ca(a,v,y),p=ca(l,m,g)),u.has(l[m]))if(u.has(l[g])){const A=p.get(a[v]),x=A!==void 0?n[A]:null;if(x===null){const N=ki(e,n[m]);Dt(N,o[v]),h[v]=N}else h[v]=Dt(x,o[v]),ki(e,n[m],x),n[A]=null;v++}else ln(n[g]),g--;else ln(n[m]),m++;for(;v<=y;){const A=ki(e,h[y+1]);Dt(A,o[v]),h[v++]=A}for(;m<=g;){const A=n[m++];A!==null&&ln(A)}return this.ut=a,za(e,h),xo}}),kf=3e3;let da=null;function ha(){const e=da;return da=null,e&&Date.now()-e.at<kf?e:null}let ua=null,On=null,Ln=null;function $f(){ua?.close(),ua=null,On&&clearTimeout(On),On=null,Ln&&clearTimeout(Ln),Ln=null}let pa=Promise.resolve();function ma(e){if(e.defaultPrevented||e.altKey||!(e.metaKey||e.ctrlKey))return;const t=e.key.toLowerCase(),i=t==="y"||t==="z"&&e.shiftKey?"redo":t==="z"?"undo":null;i&&(e.composedPath().some(s=>s instanceof HTMLElement&&(s.matches("input, textarea")||s.isContentEditable))||document.querySelector('[role="dialog"], [role="menu"]')||(e.preventDefault(),pa=pa.then(async()=>{try{const{changed:s}=await B(`/api/planner/${i}`);if(!s){Je(`Nothing to ${i}`,"user");return}const n=f.getState();await Promise.all([n.loadGoals(),n.loadCommitments()]),document.dispatchEvent(new CustomEvent("mana-ideas-changed")),document.dispatchEvent(new CustomEvent("ops-event",{detail:{action:"refresh",week:n.currentWeek??void 0}})),Je(i==="undo"?"Undone":"Redone","user")}catch(s){Je(s instanceof Error?s.message:`Couldn't ${i}`,"error")}})))}var Sf=Object.getOwnPropertyDescriptor,Tf=(e,t,i,s)=>{for(var n=s>1?void 0:s?Sf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let fa=class extends T{connectedCallback(){super.connectedCallback(),this.unsubCommits=F(this,f,e=>e.commitments),this.unsubWeek=F(this,f,e=>e.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubWeek?.()}daysLeft(){if((f.getState().currentWeek??Pe())!==Pe())return null;const t=7-(new Date().getDay()||7);return t===0?"last day":`${t} day${t===1?"":"s"} left`}render(){const e=f.getState().commitments,t=e.length;if(t===0)return c;const i=e.filter(o=>o.done).length,s=Math.round(i/t*100),n=this.daysLeft();return r`<div class="bg-surface px-4 py-3 flex items-center gap-3 text-sm">
      <span class="tabular-nums whitespace-nowrap"
        ><span class="font-medium text-ink">${i}</span><span class="text-muted"> of ${t} done</span
        >${n?r`<span class="text-muted"> · ${n}</span>`:c}</span
      >
      <div
        class="w-40 max-w-[40%] overflow-hidden rounded-full"
        style="height:4px;background:var(--color-line);"
        role="progressbar"
        aria-label="Weekly task progress"
        aria-valuemin="0"
        aria-valuemax=${t}
        aria-valuenow=${i}
      >
        <div style="height:100%;width:${s}%;background:var(--accent);border-radius:9999px;transition:width .35s ease;"></div>
      </div>
    </div>`}};fa=Tf([w("week-progress")],fa);var Cf=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,de=(e,t,i,s)=>{for(var n=s>1?void 0:s?Ef(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&Cf(t,i,n),n};const kt=["week","ideas","goals"];function ga(e){try{const t=JSON.parse(e||"[]");if(!Array.isArray(t))return[...kt];const i=[...new Set(t.filter(s=>kt.includes(s)))];return[...i,...kt.filter(s=>!i.includes(s))]}catch{return[...kt]}}const gs="slmai.cockpit.plannerTab",Df=6e3,ot={week:{ls:"slmai.cockpit.weekSection.title",setting:"ui.section.week.title",def:"Shipping this week"},ideas:{ls:"slmai.cockpit.ideasSection.title",setting:"ui.section.ideas.title",def:"Ideas"},goals:{ls:"slmai.cockpit.goalsSection.title",setting:"ui.section.goals.title",def:"Goals"}};let re=class extends T{constructor(){super(...arguments),this.showMeetings=!1,this.order=[...kt],this.reorderKey=null,this.reorderOver=null,this.reorderAfter=!1,this.orderError="",this.orderSetting="",this.savingOrder=!1,this.orderRevision=0,this.ignoreTabClick=!1,this.tabPress=null,this.active="week",this.titles={week:ot.week.def,ideas:ot.ideas.def,goals:ot.goals.def},this.ideasCount=0,this.goalsCount=0,this.weekCount=0,this.editing=null,this.dragKind=null,this.dragOverTab=null,this.note="",this.noteKind="user",this.noteTimer=null,this.onPlannerNote=e=>{const t=e.detail;t?.text&&this.showNote(t.text,t.kind)},this.onAgentFollow=()=>{const e=ha();e&&this.follow(e)},this.refreshOrder=async()=>{if(!(!this.orderSetting||this.savingOrder||this.tabPress||this.editing||document.visibilityState==="hidden"))try{const e=this.orderRevision,t=await E.settings.list();if(this.savingOrder||this.tabPress||e!==this.orderRevision)return;this.order=ga(t[this.orderSetting]),localStorage.setItem(this.orderSetting,JSON.stringify(this.order))}catch{}},this.onTabPointerMove=e=>{const t=this.tabPress;if(!(!t||t.pointerId!==e.pointerId)){if(!this.reorderKey){const i=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y);if(s>6&&s>i){this.cancelTabReorder();return}if(i<=6)return;this.reorderKey=t.key}e.preventDefault(),this.reorderOver=null;for(const i of this.querySelectorAll("[data-planner-tab]")){const s=i.getBoundingClientRect();if(!(e.clientX<s.left||e.clientX>s.right||e.clientY<s.top-16||e.clientY>s.bottom+16)){this.reorderOver=i.dataset.plannerTab,this.reorderAfter=e.clientX>s.left+s.width/2;break}}}},this.onTabPointerUp=e=>{if(this.tabPress?.pointerId!==e.pointerId)return;const t=this.reorderKey,i=this.reorderOver,s=this.reorderAfter;t&&(this.ignoreTabClick=!0,setTimeout(()=>{this.ignoreTabClick=!1},0)),this.cancelTabReorder(),t&&i&&this.moveTab(t,i,s)},this.cancelTabReorder=()=>{this.tabPress=null,this.reorderKey=this.reorderOver=null,window.removeEventListener("pointermove",this.onTabPointerMove),window.removeEventListener("pointerup",this.onTabPointerUp),window.removeEventListener("pointercancel",this.cancelTabReorder)},this.cancelReorderKey=e=>{e.key==="Escape"&&this.cancelTabReorder()},this.onIdeasChanged=()=>{this.loadIdeasCount(),this.loadCounts()},this.onCountsStale=()=>void this.loadCounts(),this.onOpsEvent=e=>{e.detail?.action==="refresh"&&(this.loadIdeasCount(),this.loadCounts())},this.onIdeasCount=e=>{const t=e.detail?.count;typeof t=="number"&&(this.ideasCount=t)},this.onDocDragStart=e=>{const t=e.dataTransfer?.types;t&&(t.includes("text/x-idea-id")?this.dragKind="idea":t.includes("text/x-commit-id")?this.dragKind="commit":this.dragKind=null)},this.onDocDragEnd=()=>{this.dragKind=null,this.dragOverTab=null}}connectedCallback(){super.connectedCallback();const e=localStorage.getItem(gs);e&&kt.includes(e)&&(this.active=e);const t={...this.titles};for(const s of kt){const n=localStorage.getItem(ot[s].ls);n&&(t[s]=n)}this.titles=t,fetch("/api/settings").then(s=>s.json()).then(s=>{const n={...this.titles};for(const o of kt){const a=s[ot[o].setting];a&&(n[o]=a,localStorage.setItem(ot[o].ls,a))}this.titles=n}).catch(()=>{}),this.loadOrder(),window.addEventListener("focus",this.refreshOrder),document.addEventListener("visibilitychange",this.refreshOrder),document.addEventListener("keydown",this.cancelReorderKey),this.loadIdeasCount(),this.loadCounts(),this.unsubCounts=f.subscribe((s,n)=>{s.goals!==n.goals&&(this.goalsCount=s.goals.filter(o=>o.status==="active").length),s.commitments!==n.commitments&&(this.weekCount=s.commitments.filter(o=>!o.done).length)}),window.addEventListener("focus",this.onCountsStale),document.addEventListener("mana-ideas-changed",this.onIdeasChanged),document.addEventListener("mana-ideas-count",this.onIdeasCount),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("dragstart",this.onDocDragStart),document.addEventListener("dragend",this.onDocDragEnd),document.addEventListener("mana-agent-follow",this.onAgentFollow);const i=ha();i&&this.follow(i),document.addEventListener("mana-planner-note",this.onPlannerNote),document.addEventListener("keydown",ma)}disconnectedCallback(){super.disconnectedCallback(),this.cancelTabReorder(),window.removeEventListener("focus",this.refreshOrder),document.removeEventListener("visibilitychange",this.refreshOrder),document.removeEventListener("keydown",this.cancelReorderKey),this.unsubCounts?.(),window.removeEventListener("focus",this.onCountsStale),document.removeEventListener("mana-ideas-changed",this.onIdeasChanged),document.removeEventListener("mana-ideas-count",this.onIdeasCount),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("dragstart",this.onDocDragStart),document.removeEventListener("dragend",this.onDocDragEnd),document.removeEventListener("mana-agent-follow",this.onAgentFollow),document.removeEventListener("mana-planner-note",this.onPlannerNote),document.removeEventListener("keydown",ma),this.noteTimer&&clearTimeout(this.noteTimer)}showNote(e,t){this.note=e,this.noteKind=t,this.noteTimer&&clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>{this.note=""},Df)}async follow(e){const t=document.activeElement,i=!!t&&this.contains(t)&&/^(INPUT|TEXTAREA)$/.test(t.tagName);if(!e.stay&&!i&&!this.editing&&this.active!==e.view){this.active=e.view;try{localStorage.setItem(gs,e.view)}catch{}}this.showNote(e.note,"agent");const s=f.getState();!i&&e.view==="week"&&e.week&&e.week!==s.currentWeek&&await s.setWeek(e.week).catch(()=>{}),await this.updateComplete;const n={action:"refresh",week:f.getState().currentWeek??e.week,changed:e.changed,added:e.added,removed:e.removed};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}async loadOrder(){try{const e=await fetch("/api/me");if(!e.ok)return;const t=await e.json();this.orderSetting=`user:${t.login}:planner.tab_order`,this.order=ga(localStorage.getItem(this.orderSetting)),await this.refreshOrder()}catch{}}async moveTab(e,t,i){if(!this.orderSetting||this.savingOrder||e===t)return;const s=[...this.order],n=this.order.filter(o=>o!==e);if(n.splice(n.indexOf(t)+(i?1:0),0,e),!n.every((o,a)=>o===s[a])){this.orderRevision+=1,this.order=n,this.orderError="",this.savingOrder=!0;try{await f.getState().setSetting(this.orderSetting,JSON.stringify(n));try{localStorage.setItem(this.orderSetting,JSON.stringify(n))}catch{}}catch{this.order=s,this.orderError="Tab order could not be saved. Try again."}finally{this.savingOrder=!1}}}onTabPointerDown(e,t){this.editing||this.savingOrder||!this.orderSetting||e.pointerType==="mouse"&&e.button!==0||(this.tabPress={key:t,x:e.clientX,y:e.clientY,pointerId:e.pointerId},window.addEventListener("pointermove",this.onTabPointerMove,{passive:!1}),window.addEventListener("pointerup",this.onTabPointerUp),window.addEventListener("pointercancel",this.cancelTabReorder))}onTabOrderKey(e,t){if(!e.altKey||!["ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const i=this.order.indexOf(t),s=this.order[i+(e.key==="ArrowLeft"?-1:1)];s&&this.moveTab(t,s,e.key==="ArrowRight")}async loadCounts(){try{const[e,t]=await Promise.all([fetch("/api/goals").then(i=>i.json()),fetch("/api/week").then(i=>i.json())]);this.goalsCount=e.goals?.filter(i=>i.status==="active").length??0,this.weekCount=t.commitments?.filter(i=>!i.done).length??0}catch{}}async loadIdeasCount(){try{const t=await(await fetch("/api/ideas")).json();this.ideasCount=t.ideas?.filter(i=>!i.hidden).length??0,t.ideas&&Vl(t.ideas)}catch{}}select(e){if(!(this.editing||this.ignoreTabClick)){this.active=e;try{localStorage.setItem(gs,e)}catch{}this.loadCounts()}}isDropTarget(e){return this.dragKind==="idea"?e==="week":this.dragKind==="commit"?e==="ideas":!1}onTabDragOver(e,t){this.isDropTarget(t)&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this.dragOverTab=t)}onTabDragLeave(e){this.dragOverTab===e&&(this.dragOverTab=null)}async onTabDrop(e,t){if(!this.isDropTarget(t))return;e.preventDefault();const i=this.dragKind;this.dragKind=null,this.dragOverTab=null;const s=(e.dataTransfer?.getData("text/plain")||"").trim();if(s){if(i==="commit"){const n=Number(e.dataTransfer?.getData("text/x-commit-id"));n&&await Dl(n,s)}else if(i==="idea"){const n=Number(e.dataTransfer?.getData("text/x-idea-id"));if(!n||!await Ro(n,s))return;this.active="week";try{localStorage.setItem(gs,"week")}catch{}}}}startRename(e,t){e.stopPropagation(),!(this.ignoreTabClick||this.reorderKey)&&(this.active=t,this.editing=t)}commitRename(e,t){const i=t.trim()||ot[e].def;this.editing=null,this.titles={...this.titles,[e]:i},localStorage.setItem(ot[e].ls,i),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[ot[e].setting]:i})})}onRenameKey(e,t){e.key==="Enter"?(e.preventDefault(),this.commitRename(t,e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=null)}renderTab(e){if(this.editing===e)return r`<input
        class="text-[15px] font-normal text-ink leading-none bg-transparent border-b-2 border-ink outline-none px-0.5 py-3"
        style="min-width:4ch;width:${this.titles[e].length+1}ch;letter-spacing:-0.01em;"
        .value=${this.titles[e]}
        autofocus
        @click=${o=>o.stopPropagation()}
        @keydown=${o=>this.onRenameKey(o,e)}
        @blur=${o=>this.commitRename(e,o.target.value)}
      />`;const t=this.active===e,i=this.isDropTarget(e),n=this.dragOverTab===e?"border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);":i?"border-color:color-mix(in srgb, var(--accent) 45%, transparent);":t?"border-color:var(--ink);":"border-color:transparent;";return r`<button
      type="button"
      class="relative inline-flex items-center gap-1.5 px-0.5 py-3 border-b-2 text-[15px] font-normal leading-none whitespace-nowrap transition-[color,background,border-color] ${t?"text-ink":"text-muted hover:text-ink"}"
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
      ${this.reorderOver===e&&this.reorderKey!==e?r`<span aria-hidden="true" style="position:absolute;top:2px;bottom:2px;width:2px;border-radius:2px;background:var(--accent);${this.reorderAfter?"right:0;":"left:0;"}"></span>`:c}
      <span class="tab-label" data-label=${this.titles[e]}>${this.titles[e]}</span>
      ${this.countFor(e)>0?r`<span
            class="tab-count text-[11px] font-normal text-muted px-1.5 py-0.5 rounded-full leading-none"
            style="background:color-mix(in srgb, var(--color-muted) 13%, transparent);"
            >${this.countFor(e)}</span
          >`:c}
    </button>`}countFor(e){return e==="ideas"?this.ideasCount:e==="goals"?this.goalsCount:this.weekCount}render(){return r`
      <div class="planner-panel flex-1 flex flex-col ${this.active==="goals"?"pb-16":""}">
        <div class="planner-header ${this.active==="week"?"planner-week-header":""} flex items-center gap-3 border-b border-line px-4">
          <div class="planner-tabs flex-1 flex items-center gap-5 min-w-0 -mb-px overflow-x-auto">
            ${wf(this.order,e=>e,e=>this.renderTab(e))}
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
              ><span class="inline-flex w-3.5 h-3.5" aria-hidden="true">${W(to)}</span>New goal</button>`:c}
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
              @click=${()=>hi({kind:this.active==="week"?"new-commit":"new-kr"})}
            ><span aria-hidden="true">${W(to)}</span></button>`:c}
      </div>
    `}};de([b({type:Boolean})],re.prototype,"showMeetings",2);de([d()],re.prototype,"order",2);de([d()],re.prototype,"reorderKey",2);de([d()],re.prototype,"reorderOver",2);de([d()],re.prototype,"reorderAfter",2);de([d()],re.prototype,"orderError",2);de([d()],re.prototype,"active",2);de([d()],re.prototype,"titles",2);de([d()],re.prototype,"ideasCount",2);de([d()],re.prototype,"goalsCount",2);de([d()],re.prototype,"weekCount",2);de([d()],re.prototype,"editing",2);de([d()],re.prototype,"dragKind",2);de([d()],re.prototype,"dragOverTab",2);de([d()],re.prototype,"note",2);de([d()],re.prototype,"noteKind",2);re=de([w("planner-tabs")],re);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yl="important",Af=" !"+Yl,Pf=Gi(class extends Gs{constructor(e){if(super(e),e.type!==yo.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return s==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ft.add(s);const o=typeof n=="string"&&n.endsWith(Af);s.includes("-")||o?i.setProperty(s,o?n.slice(0,-11):n,o?Yl:""):i[s]=n}}return xo}}),We=100,Mf=76,If=600,U=12,Ae=8,qo=(e,t,i)=>({left:e.x,top:e.y,right:e.x+t,bottom:e.y+i});function Ko(e,t,i=0){return e.left<t.right+i&&e.right>t.left-i&&e.top<t.bottom+i&&e.bottom>t.top-i}const _f=2*We,Of=e=>e.bottom-e.top<=_f,Ge=(e,t,i)=>Math.max(t,Math.min(i,e));function oi(e){return e.width<If?Mf:We}const Et=e=>e.height-(e.insetBottom??0);function ba(e,t,i=We){const s=e.width-U-i;let n=Et(e)-U-i;for(let o=0;o<8;o++){const a=t.find(l=>Ko(qo({x:s,y:n},i,i),l,Ae));if(!a)break;n=a.top-Ae-i}return{x:s,y:Ge(n,U,Et(e)-U-i)}}function bo(e,t,i=We){return Ql(e,t,{width:i,height:i})}function Ql(e,t,i){return{x:Ge(e.x,U,t.width-U-i.width),y:Ge(e.y,U,Et(t)-U-i.height)}}const Jl=(e,t)=>({w:Math.max(0,e.width-2*U-t),h:Math.max(0,Et(e)-2*U-t)});function Lf(e,t,i=We){const{w:s,h:n}=Jl(t,i);return{xr:s?Ge((e.x-U)/s,0,1):1,yr:n?Ge((e.y-U)/n,0,1):1}}function Rf(e,t,i=We){const{w:s,h:n}=Jl(t,i);return{x:Math.round(U+Ge(e.xr,0,1)*s),y:Math.round(U+Ge(e.yr,0,1)*n)}}const Nf=32;function Ff(e,t){return Math.hypot(e.x-t.x,e.y-t.y)<=Nf}function va(e,t,i,s=We){let{x:n,y:o}=bo(e,t,s);for(let a=0;a<8;a++){const l=i.find(u=>Ko(qo({x:n,y:o},s,s),u,Ae));if(!l)break;const h=l.top-Ae-s;o=h>=U?h:l.bottom+Ae}return bo({x:n,y:o},t,s)}function ya(e,t,i=We){const s=(e.top+e.bottom)/2-i/2;if(t.width-e.right>=i+2*Ae)return{x:e.right+Ae,y:Ge(s,U,Et(t)-U-i),side:"right"};const n=Ge(e.right-i-Ae,U,t.width-U-i);return e.bottom+Ae+i<=Et(t)-U?{x:n,y:e.bottom+Ae,side:"below"}:{x:n,y:Math.max(U,e.top-Ae-i),side:"above"}}function Rn(e){return Math.min(340,e.width-2*U)}function jf(e,t,i,s,n=We){const o=e.x+n/2<t.width/2,a=Ge(o?e.x:e.x+n-i.width,U,t.width-U-i.width),l=e.y-Ae-i.height,h=e.y+n+Ae,u=l>=U,p=h+i.height<=Et(t)-U,m=[u?l:null,p?h:null].filter(y=>y!==null),v=m.find(y=>!s||!Ko(qo({x:a,y},i.width,i.height),s,4))??m[0]??Ge(l,U,Et(t)-U-i.height);return{x:a,y:v}}function xa(e){return`${e.kind==="commitment"?"commit":e.kind}:${e.id}`}const Uf=`
.mc-avatar {
  position: fixed; z-index: 60; width: var(--mc-size, ${We}px); height: var(--mc-size, ${We}px); padding: 0; border: 0; border-radius: 12px;
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
`;function Bf(e=document){if(e.getElementById("mana-companion-styles"))return;const t=e.createElement("style");t.id="mana-companion-styles",t.textContent=Uf,e.head.appendChild(t)}const Hf=["hop","nod","tilt","squint","ruffle","happy","surprised","sleepy","proud","confused","sad","fly","come"],zf=["happy","calm","surprised","sleepy","proud","confused","sad"],lt="Can't reach Mana right now.";function qf(e){let t="message";const i=[];for(const n of e.split(`
`))!n||n.startsWith(":")||(n.startsWith("event:")?t=n.slice(6).trim():n.startsWith("data:")&&i.push(n.slice(5).trimStart()));if(!i.length)return null;let s;try{s=JSON.parse(i.join(`
`))}catch{return null}switch(t){case"text":return{type:"text",text:String(s.text??"")};case"action":return{type:"action",action:s};case"draft":return typeof s.id=="string"&&Array.isArray(s.lines)?{type:"draft",draft:s}:null;case"notes":return typeof s.query=="string"&&Array.isArray(s.hits)&&s.hits.length?{type:"notes",found:s}:null;case"confirm":return typeof s.id=="string"&&typeof s.noteFile=="string"&&(s.kind==="publish"||s.kind==="unpublish")?{type:"confirm",confirm:s}:null;case"point":return s.ref?{type:"point",ref:s.ref,title:String(s.title??"")}:null;case"mood":return zf.includes(s.mood)?{type:"mood",mood:s.mood}:null;case"move":return Hf.includes(s.move)?{type:"move",move:s.move}:null;case"notice":return{type:"notice",text:String(s.text??"")};case"error":return{type:"error",error:String(s.error??lt)};case"done":return{type:"done",firstTokenMs:typeof s.firstTokenMs=="number"?s.firstTokenMs:null,ms:Number(s.ms)||0};default:return null}}async function*Kf(e,t){let i;try{i=await fetch("/api/companion/turn",{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify(e),signal:t})}catch{t?.aborted||(yield{type:"error",error:lt});return}if(!i.ok||!i.body){yield{type:"error",error:lt};return}const s=i.body.getReader(),n=new TextDecoder;let o="";try{for(;;){const{done:a,value:l}=await s.read();if(a)break;o+=n.decode(l,{stream:!0});for(let h;(h=o.indexOf(`

`))!==-1;){const u=qf(o.slice(0,h));o=o.slice(h+2),u&&(yield u)}}}catch{t?.aborted||(yield{type:"error",error:lt})}finally{try{s.releaseLock()}catch{}}}async function rt(e,t){try{const i=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});return i.ok?await i.json():null}catch{return null}}function Wf(e,t,i){const s=document.createElement("div");s.className="fixed z-[1000] rounded-xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",s.style.fontFamily=getComputedStyle(t).fontFamily,s.style.width=`${Math.min(200,window.innerWidth-16)}px`,s.setAttribute("role","menu"),s.setAttribute("aria-label","Owl options"),document.body.appendChild(s);const n=()=>{document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",a,!0),window.removeEventListener("resize",n),xe(c,s),s.remove()},o=h=>{h.composedPath().includes(s)||n()},a=h=>{(h.key==="Escape"||h.key==="Tab")&&(h.preventDefault(),h.stopPropagation(),n())};xe(r`${i.map(h=>r`<button type="button" role="menuitem" class="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-hover focus-visible:bg-hover outline-none"
    @click=${()=>{n(),h.run()}}>${h.label}</button>`)}`,s);const l=s.getBoundingClientRect();s.style.left=`${Math.max(8,Math.min(e.x,window.innerWidth-l.width-8))}px`,s.style.top=`${Math.max(8,Math.min(e.y,window.innerHeight-l.height-8))}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",a,!0),window.addEventListener("resize",n),s.querySelector("button")?.focus({preventScroll:!0})}const Gf=200,Vf=[{names:["goals"],pane:"goals",tab:"goals",label:"Goals"},{names:["weekly","this week","week"],pane:"goals",tab:"week",label:"Weekly"},{names:["parked","parked ideas","ideas"],pane:"goals",tab:"ideas",label:"Parked"},{names:["shopping","shopping list","grocery","grocery list","groceries"],pane:"grocery",label:"Shopping"},{names:["finance","finances","money","budget"],pane:"finance",label:"Finance"},{names:["circles","circle","people"],pane:"circle",label:"Circles"},{names:["learn","learning"],pane:"learn",label:"Learn"},{names:["been to","travel","travels"],pane:"been-to",label:"Been to"},{names:["projects","my projects","project list","apps","app catalogue"],pane:"office",label:"Projects",ownerOnly:!0},{names:["publisher"],pane:"publisher",label:"Publisher",ownerOnly:!0},{names:["the office","office","office floor","the writers","newsroom","the newsroom","writers room"],pane:"newsroom",label:"The office",ownerOnly:!0},{names:["notes","note"],pane:"canvas",label:"Notes"},{names:["members","guests"],pane:"members",label:"Members",ownerOnly:!0},{names:["notifications","notification","notifs","bell"],pane:"notify",label:"Notifications"},{names:["tools"],pane:"tools",label:"Tools"}],Xl=new Map(Vf.flatMap(e=>e.names.map(t=>[t,e]))),Yf=[...Xl.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/ /g,"\\s+")).join("|"),Qf=[{words:["come here","come over","come","move to my cursor"],move:"come",note:"Came over."},{words:["go to sleep","sleep"],move:"sleepy",note:"Got sleepy."},{words:["hop"],move:"hop",note:"Hopped."},{words:["nod"],move:"nod",note:"Nodded."},{words:["fly"],move:"fly",note:"Flew."}],Zl=new Map(Qf.flatMap(e=>e.words.map(t=>[t,e]))),Jf=[...Zl.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/ /g,"\\s+")).join("|"),ec=String.raw`(?:(?:can|could|would|will) you\s+)?(?:please\s+)?`,tc=String.raw`(?:\s+for me)?(?:\s+please)?$`,Xf=new RegExp(String.raw`^${ec}(?:open(?: up)?|show(?: me)?|go to|switch to|take me to|bring up|navigate to)\s+(?:(?:my|the)\s+)?(${Yf})(?:\s+(?:tool|app|pane|tab))?${tc}`,"i"),Zf=new RegExp(String.raw`^${ec}(${Jf})${tc}`,"i"),Cs=String.raw`(?:(?:can|could|would|will) you[,\s]+)?(?:please[,\s]+)?`,vo=String.raw`(?:\s*[:,]\s*|\s+)`,eg=[{re:new RegExp(String.raw`^${Cs}(?:add(?:\s+weekly)?\s+task|new\s+task|add\s+commitment)${vo}(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${Cs}task\s*:\s*(.+)$`,"i"),target:"task"},{re:new RegExp(String.raw`^${Cs}(?:park|add\s+parked|add\s+idea|add\s+to\s+parked)${vo}(.+)$`,"i"),target:"idea"}],tg=new RegExp(String.raw`^${Cs}add${vo}(.+)$`,"i"),ig=/^(?:this|that|it|these|those|them)(?:\s+(?:one|ones|task|tasks|item|items|idea|ideas|thing|things|row))?(?:\s+(?:for now|for later|too|as well|please))?$/i,sg=/(?:\s(?:to|into|in|on|onto|for)\s+(?:(?:the|my|our|this|next|last|that)\s+)*(?:week|weekly|parked|ideas?|shopping(?:\s+list)?|grocer(?:y|ies)(?:\s+list)?|to[-\s]?buy(?:\s+list)?|list|goals?|tasks?|planner|pantry|backlog)|\s(?:next|last)\s+week)$|^to\s/i,ng=/^(?:the|this|that|these|those|my|our|it)\b|\b(?:one|ones|task|tasks|item|items)$/i,og=/^(?:(?:a|an|new|weekly|my|the)\s+)*(?:tasks?|commitments?|ideas?|parked|notes?|goals?|reminders?|key results?)\b/i,wa=e=>e.toLowerCase().replace(/[^\p{L}\p{N}\s]+/gu," ").replace(/\s+/g," ").trim();function ka(e,t,i){const s=e.trim().replace(/[\s.!,;:]+$/,"");if(!s||s.length>Gf||ig.test(s)||sg.test(s)||t==="shopping"&&og.test(s)||t!=="task"&&ng.test(s))return null;if(t==="idea"){const n=` ${wa(s)} `;if((i.openTasks??[]).some(o=>{const a=wa(o);return!!a&&(` ${a} `.includes(n)||n.includes(` ${a} `))}))return null}return s}function rg(e){return e.replace(/,/g," ").replace(/\s+/g," ").trim().replace(/[.!?]+$/,"").trim()}function ag(e,t){const i=rg(e),s=Xf.exec(i),n=s?Xl.get(s[1].toLowerCase().replace(/\s+/g," ")):void 0;if(n&&(!n.ownerOnly||t.owner))return{kind:"nav",rule:`nav:${n.pane}${n.tab?`:${n.tab}`:""}`,note:`Opened ${n.label}.`,pane:n.pane,tab:n.tab??null,label:n.label};const o=Zf.exec(i),a=o?Zl.get(o[1].toLowerCase().replace(/\s+/g," ")):void 0;if(a)return{kind:"move",rule:`move:${a.move}`,note:a.note,move:a.move};const l=e.replace(/\s+/g," ").trim();if(l.includes("?"))return null;for(const p of eg){const m=p.re.exec(l);if(!m)continue;const g=ka(m[1],p.target,t);return g?{kind:"add",rule:`add:${p.target}`,target:p.target,text:g}:null}const h=t.pane==="grocery"?tg.exec(l):null,u=h?ka(h[1],"shopping",t):null;return u?{kind:"add",rule:"add:shopping",target:"shopping",text:u}:null}function lg(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));const i=Math.ceil(((t.getTime()-Date.UTC(t.getUTCFullYear(),0,1))/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(i).padStart(2,"0")}`}function cg(e,t,i={}){if(e==="task"){const n=i.week&&i.current&&i.week!==i.current?`week ${Number(i.week.split("-W")[1])}${i.week.slice(0,4)===i.current.slice(0,4)?"":` of ${i.week.slice(0,4)}`}`:null;return n?{shown:`Added to ${n}: ${t}`,did:`Added task to ${n}: ${t}`}:{shown:`Added: ${t}`,did:`Added task: ${t}`}}const s=e==="idea"?"Parked":i.list==="buy"?"To buy":"Shopping";return{shown:`Added to ${s}: ${t}`,did:`Added to ${s}: ${t}`}}const dg=["idle","listening","curious","thinking","happy","surprised","sleepy","sleeping","waking","flying","proud","confused","sad"],$a={happy:6800,surprised:4800,waking:6200,flying:8600,proud:5800,confused:5e3,sad:7200},hg=2e4,ug=3e4,pg=1e4,mg=2e4;function Ws(e){return typeof e=="string"&&dg.includes(e)}function fg(e){return e>=23||e<5}function gg(e,t=!1){return e>=(t?mg:ug)?"sleeping":e>=(t?pg:hg)?"sleepy":"idle"}function bg(e){return Ws(e.override)?e.override:e.dictation==="listening"?"listening":e.reaction==="surprised"?"surprised":e.sending||e.dictation==="writing"?"thinking":e.reaction?e.reaction:e.curious?"curious":e.open?"listening":e.rest}var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,Zt=(e,t,i,s)=>{for(var n=s>1?void 0:s?yg(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&vg(t,i,n),n};let ut=class extends Ie{constructor(){super(...arguments),this.state="idle",this.trigger=0,this.ready=!1,this.generation=0,this.canvases=0,this.restarts=0,this.startedAt=0,this.onLost=()=>{if(this.ready=!1,Date.now()-this.startedAt>6e4&&(this.restarts=0),this.restarts>=3)return;const e=[1e3,5e3,3e4][this.restarts++];clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{this.canvases++,this.updateComplete.then(()=>this.start())},e)}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.start()}firstUpdated(){this.start()}updated(e){(e.has("state")||e.has("trigger"))&&this.renderer?.setState(Ws(this.state)?this.state:"idle",{restart:e.has("trigger")})}disconnectedCallback(){super.disconnectedCallback(),this.generation++,clearTimeout(this.preloadTimer),clearTimeout(this.restartTimer),this.abort?.abort(),this.renderer?.destroy(),this.renderer=void 0,this.ready=!1}async start(){const e=++this.generation;this.abort?.abort(),this.abort=new AbortController,this.renderer?.destroy(),this.renderer=void 0;try{const{createOwlRenderer:t}=await Le(async()=>{const{createOwlRenderer:s}=await import("./owl-renderer-DPEf0jy5.js");return{createOwlRenderer:s}},[]);if(e!==this.generation||!this.isConnected)return;const i=await t(this.art,this.effects,{signal:this.abort.signal,onUnavailable:()=>{this.ready=!1},onLost:this.onLost});if(e!==this.generation||!this.isConnected){i.destroy();return}this.renderer=i,await i.setState(Ws(this.state)?this.state:"idle"),this.ready=!0,this.startedAt=Date.now(),this.preloadTimer=setTimeout(()=>this.preload(),6e3)}catch(t){t.name!=="AbortError"&&(this.ready=!1)}}hold(e,t=!1){this.renderer?.hold(e,t)}canFly(){return this.renderer?.canFly()??!1}airborne(){return this.renderer?.airborne()??!1}carry(e,t){this.renderer?.carry(e,t)}preload(){this.renderer?.preload()}lookAt(e){this.renderer?.lookAt(e)}gesture(e,t=!1){return this.renderer?.gesture(e,t)??!1}talk(e){this.renderer?.talk(e)}render(){return r`<div class="sprite" data-renderer=${this.ready?"animated":"static"} aria-hidden="true">
      <img src=${new URL("/assets/original-DQyfsRdb.webp",import.meta.url).href} alt="" draggable="false" ?hidden=${this.ready}>
      ${qa(this.canvases,r`<canvas class="art" width="256" height="256" ?hidden=${!this.ready}></canvas>
      <canvas class="effects" width="256" height="256" ?hidden=${!this.ready}></canvas>`)}
    </div>`}};ut.styles=Re`
    :host{display:block;width:100%;height:100%;pointer-events:none;color:inherit}
    .sprite{position:relative;width:100%;height:100%}
    img,canvas{display:block;position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;user-select:none;-webkit-user-drag:none}
    canvas{inset:auto;left:-75%;top:-100%;width:250%;height:225%}
    img{object-fit:contain} [hidden]{display:none!important}
  `;Zt([b()],ut.prototype,"state",2);Zt([b({type:Number})],ut.prototype,"trigger",2);Zt([d()],ut.prototype,"ready",2);Zt([V("canvas.art")],ut.prototype,"art",2);Zt([V("canvas.effects")],ut.prototype,"effects",2);Zt([d()],ut.prototype,"canvases",2);ut=Zt([w("mana-owl")],ut);var xg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,L=(e,t,i,s)=>{for(var n=s>1?void 0:s?wg(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&xg(t,i,n),n};const ic=1e4,Nn=3e4,kg=9e4,$g=6,Sg=1500,Sa=450,Ta=320,Tg=900,Cg=.45,Eg=450,Dg=4,Ag=1200,Pg=600,Mg=1600,Ig=2e3,Fn=2400,_g=90,Og=700,Lg=700,Ca=[450,1100],Rg=1300,Ng=8e3,Fg=1e4,jn=24,jg=1100,Ug=6e3,Ea=45,Da=1200,Bg=260,Hg=110,Aa=5*6e4,zg=2*6e4,qg=150,Kg=4e3,Un=[5e3,9e3],Wg=1200,Gg=25e3,Vg=8e3,Yg=["hop","nod","tilt","squint","ruffle"],Qg=4*6e4,Pa=["squint","hop","nod"],Bn=[6e4,12e4],Jg=2e4,Xg=4e4,Zg=["preen","look","shift","stretch"],eb=["yawn","preen","yawn","shift"],tb="p, li, h1, h2, h3, h4, h5, h6, td, th, dt, dd, blockquote, pre, label, figcaption, [contenteditable='true']",ib=15e3,sb=250,Ma=148,nb=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,ob=r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,sc="slmai.cockpit.plannerTab",nc="slmai.companion.spot";let I=class extends T{constructor(){super(...arguments),this.owner=!1,this.avatar="/office-avatars/mana.svg",this.animationState="auto",this.reaction=null,this.reactionTrigger=0,this.rest="idle",this.lastActivity=Date.now(),this.lastTouched=Date.now(),this.nextFidget=0,this.lastFidget=null,this.restTimer=null,this.reactionTimer=null,this.doneTimer=null,this.open=!1,this.sending=!1,this.mine="",this.spoken=!1,this.typing=!1,this.owlHidden=Nl(),this.reviewTake="",this.historyOpen=!1,this.exchanges=[],this.reply="",this.lines=[],this.slow=!1,this.status="Thinking",this.pointing=null,this.pos={x:-100,y:-100},this.bubble={x:-1e3,y:-1e3},this.justActed=!1,this.spots=rb(),this.pane=f.getState().rightPaneMode,this.spot=Ua(this.spots,this.pane),this.unsubscribe=null,this.dragging=!1,this.visiting=null,this.sitting=null,this.focusView=null,this.returnSpot=null,this.typingTimer=null,this.lastConversationGesture=0,this.readingReply=!1,this.replyGestures=0,this.shown=0,this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.talking=!1,this.highlight=null,this.touched=null,this.abort=null,this.slowTimer=null,this.idleTimer=null,this.chipTimer=null,this.dictation="off",this.micOpening=!1,this.takeGeneration=0,this.sttAbort=null,this.recorder=new kl,this.takeTimer=null,this.typeArmedUntil=0,this.frame=0,this.drag=null,this.lastTap=null,this.tapTimer=null,this.pointerType="mouse",this.stroke=null,this.lastPetBuzz=0,this.glanceTimer=null,this.dragged=!1,this.visitTimer=null,this.coming=null,this.comeTimer=null,this.cursor=null,this.trip=null,this.flyNext=!1,this.arrivedAt=0,this.watching=null,this.boredUntil=0,this.stareTimer=null,this.lingerTimer=null,this.lastTilt=0,this.lastGreeting=0,this.lastGreetingKind=null,this.lastReaction=null,this.onWatch=e=>{if(e.pointerType==="mouse"&&(this.cursor={x:e.clientX,y:e.clientY,at:Date.now()}),e.pointerType==="touch"||!this.owner||!this.owl||this.rest!=="idle"||this.typingTimer||this.sending)return;const t=Date.now();if(!(!this.dragging&&!this.pointing&&Math.hypot(e.clientX-(this.pos.x+this.size/2),e.clientY-(this.pos.y+this.size/2))<=qg)){this.stopWatching();return}t<this.boredUntil||(this.watching===null&&(this.watching=t,this.stareTimer=setTimeout(this.loseInterest,Kg)),this.owl.lookAt({x:e.clientX,y:e.clientY}),this.lingerTimer&&clearTimeout(this.lingerTimer),this.lingerTimer=setTimeout(this.onLinger,Wg))},this.loseInterest=()=>{this.stopWatching(),this.boredUntil=Date.now()+Un[0]+Math.random()*(Un[1]-Un[0])},this.onLinger=()=>{this.lingerTimer=null,!(this.watching===null||Date.now()-this.lastTilt<Gg||Math.random()>.6)&&this.owl?.gesture("tilt")&&(this.lastTilt=Date.now())},this.onPointerOut=e=>{e.relatedTarget||this.stopWatching()},this.onHover=e=>{this.onActivity(),this.owl?.preload();const t=document.activeElement===this.input&&!!this.input?.value.trim();if(e.pointerType==="touch"||this.dragging||this.reaction||this.sending||this.typingTimer||t||this.rest!=="idle")return;const i=Date.now();if(i-this.lastGreeting<Vg)return;const s=Yg.filter(o=>o!==this.lastGreetingKind),n=s[Math.floor(Math.random()*s.length)];this.owl?.gesture(n)&&(this.lastGreeting=i,this.lastGreetingKind=n)},this.onActivity=e=>{if(e&&!e.composedPath().includes(this)||(this.lastActivity=this.lastTouched=Date.now(),this.rest==="idle"))return;const t=this.rest==="sleeping";this.rest="idle",t&&this.playAnimation("waking")},this.updateRest=()=>{if(!this.owner)return;const e=Date.now(),t=fg(new Date(e).getHours());if(this.open||this.sending||this.dictation!=="off"||this.dragging){this.lastActivity=e,this.rest="idle",this.maybeFidget(e,t);return}this.nextFidget=0,this.rest=gg(e-this.lastActivity,t),this.rest!=="idle"&&this.stopWatching()},this.onResize=()=>{this.obstacleCache=null,this.schedulePlace()},this.obstacleCache=null,this.schedulePlace=()=>{this.frame||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.place()}))},this.onStore=e=>{if(e.rightPaneMode===this.pane)return;this.pane=e.rightPaneMode;const t=Ua(this.spots,this.pane);if(this.sitting){this.returnSpot=t;return}this.spot=t,this.flyNext=!0,this.schedulePlace()},this.onPageHide=()=>{this.cancelDictation()},this.onVisibility=()=>{document.hidden&&this.onPageHide()},this.toggle=e=>{if(this.dragged){this.dragged=!1;return}const t=performance.now(),i=this.lastTap;if(this.lastTap=null,i&&e.detail&&t-i.at<Ta&&Math.hypot(e.clientX-i.x,e.clientY-i.y)<24){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.onActivity(),!be()&&this.owl?.gesture("hop",!0)&&this.pointerType!=="mouse"&&ri(10);return}if(this.lastTap={at:t,x:e.clientX,y:e.clientY},this.tapTimer&&clearTimeout(this.tapTimer),!e.detail){this.tapOwl();return}this.tapTimer=setTimeout(()=>{this.tapTimer=null,this.lastTap=null,this.tapOwl()},Ta)},this.onVisibilityChange=e=>{this.owlHidden=!!e.detail?.hidden,this.owlHidden&&this.collapse()},this.typeToMana=()=>{this.cancelDictation(),this.typing=!0,this.historyOpen=!1,this.show(),this.updateComplete.then(()=>{this.input?.focus(),this.grow()})},this.onOutside=e=>{if(e.composedPath().includes(this))return;const t=e.target?.closest?.("[data-row-key]");t?.dataset.rowKey&&(this.touched={key:t.dataset.rowKey,text:Hn(t,200),at:Date.now(),...Number(t.dataset.manaThread)>0?{thread:Number(t.dataset.manaThread)}:{}}),(this.open||this.tapTimer)&&this.collapse(!1)},this.onSelection=()=>{const e=document.getSelection();if(!e||e.isCollapsed||!e.rangeCount)return;const t=e.anchorNode,i=t instanceof Element?t:t?.parentElement??null;if(!i||this.contains(i)||this.sitting&&!this.sitting.el?.contains(i))return;const s=e.toString().replace(/\s+/g," ").trim().slice(0,1e3);s.length<2||s===this.highlight?.text||(this.highlight={key:i.closest("[data-row-key]")?.dataset.rowKey??null,text:s,at:Date.now()})},this.onKey=e=>{const t=f.getState().settings,i=xt(t?.[_s])??xt(Is);if(!e.repeat&&Zn(i,e)){e.preventDefault(),this.owlHidden&&Ts(!1),this.toggleDictation();return}const s=xt(t?.[vl])??xt(bl);if(!e.repeat&&Zn(s,e)){e.preventDefault(),this.owlHidden&&Ts(!1),this.openFromKeyboard();return}if(e.key==="Escape"&&(this.dictation!=="off"||this.micOpening)){e.preventDefault(),this.cancelDictation();return}if(e.key==="Escape"&&(this.open||this.pointing||this.sitting||this.highlight)){e.preventDefault(),this.collapse();return}!this.open&&Date.now()<this.typeArmedUntil&&e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!ja(document.activeElement)&&(e.preventDefault(),this.typeArmedUntil=0,this.typeToMana(),this.updateComplete.then(()=>{this.input&&(this.input.value+=e.key,this.grow())}))},this.onInputKey=e=>{e.key==="Enter"&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),this.send(this.input?.value??""))},this.onInput=()=>{if(this.touch(),this.grow(),!this.input?.value.trim()||this.sending||this.dictation!=="off"){this.stopConversation();return}this.stopWatching(),this.lookAtInput(),this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.typingTimer=null,this.open&&this.input?.value.trim()&&document.activeElement===this.input&&!this.sending&&this.conversationGesture("tilt")},jg)},this.revealStep=e=>{this.revealFrame=0;const t=this.reply,i=this.shown;if(i>=t.length){this.revealAt=0,this.setTalking(!1);return}const s=this.revealAt?Math.min(100,e-this.revealAt):16;this.revealAt=e;const n=t.length-i,o=n>Ea*Da/1e3;if(e<this.pauseUntil&&!o){this.setTalking(!1),this.revealFrame=requestAnimationFrame(this.revealStep);return}this.revealCarry+=Math.max(Ea,n*1e3/Da)*s/1e3;let a=i;for(;this.revealCarry>=1&&a<t.length;){this.revealCarry--;const l=t[a++],h=!/\S/.test(t[a]??" ");if(!(o||!h||!/[.!?,;:]/.test(l))){this.pauseUntil=e+(/[.!?]/.test(l)?Bg:Hg),this.revealCarry=0;break}}this.shown=a,this.setTalking(a<t.length&&e>=this.pauseUntil),this.sentenceBeat(t.slice(0,i),t.slice(0,a)),this.revealFrame=requestAnimationFrame(this.revealStep)},this.grow=()=>{const e=this.input;e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,Ma)}px`,e.style.overflowY=e.scrollHeight>Ma?"auto":"hidden",this.schedulePlace())},this.touch=()=>{this.onActivity(),this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>{if(this.sending||this.dictation!=="off"||document.activeElement===this.input&&this.input?.value)return this.touch();this.collapse()},kg)},this.onSubmit=e=>{e.preventDefault(),this.send(this.input?.value??"")},this.onPointerDown=e=>{if(this.pointerType=e.pointerType,e.button!==0)return;const t=!this.pointing&&!this.sending,i=e.pointerType!=="mouse"&&!be()&&this.onHead(e);(t||i)&&this.startDrag(e,!0,t,i)},this.onBubbleDown=e=>{this.touch(),!(e.button!==0||this.pointing||this.sending)&&(e.target?.closest("input, textarea, button, a, select, [contenteditable], .mc-diff, .mc-reply, .mc-history, .mc-take-review")||this.startDrag(e,!1,!0,!1))},this.onPointerMove=e=>{const t=this.drag;if(!t||e.pointerId!==t.id){!t&&e.pointerType==="mouse"&&this.petMove(e,!1);return}if(t.talk||!t.slid&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)<$g)return;if(t.slid=!0,t.long&&(clearTimeout(t.long),t.long=null),t.pet){if(this.petMove(e,!0))return;t.pet=!1,this.owl?.lookAt(null),t.dx=e.clientX-this.pos.x,t.dy=e.clientY-this.pos.y}if(!t.canMove)return;t.moved||window.getSelection()?.removeAllRanges(),!t.moved&&t.branch&&!t.flying&&(t.fly=setTimeout(()=>{this.drag===t&&(t.flying=!0,this.owl?.hold(!0))},Sg)),t.moved=!0,this.dragging=!0,this.endVisit(),this.endCome(!1);const i=this.viewport(),s=this.pos;this.pos=bo({x:e.clientX-t.dx,y:e.clientY-t.dy},i,oi(i)),t.branch&&(this.owl?.carry(this.pos.x-s.x,this.pos.y-s.y),this.shakeStep(t,e)),t.bo&&(this.bubble=Ql({x:this.pos.x+t.bo.x,y:this.pos.y+t.bo.y},i,{width:Rn(i),height:this.bubbleEl?.offsetHeight??120}))},this.onGlance=e=>{e.pointerType!=="touch"||!this.owner||this.rest!=="idle"||this.drag||this.sending||be()||e.composedPath().includes(this)||(this.owl?.lookAt({x:e.clientX,y:e.clientY}),this.glanceTimer&&clearTimeout(this.glanceTimer),this.glanceTimer=setTimeout(()=>{this.glanceTimer=null,!this.typingTimer&&!this.drag&&this.owl?.lookAt(null)},Mg))},this.onContextMenu=e=>{if(e.preventDefault(),this.pointerType!=="mouse"||!this.avatarEl)return;const t=e;Wf({x:t.clientX,y:t.clientY},this.avatarEl,[{label:"Type to Mana",run:()=>this.typeToMana()},{label:"Talk to Mana",run:()=>void this.toggleDictation()},...this.exchanges.length||this.mine?[{label:this.historyOpen&&this.open?"Hide chat history":"Chat history",run:()=>this.toggleHistory()}]:[],{label:"Hide owl",run:()=>Ts(!0)}])},this.onPointerUp=e=>{const t=this.drag;if(!t||e.pointerId!==t.id)return;if(this.drag=null,this.stroke=null,t.fly&&clearTimeout(t.fly),t.long&&clearTimeout(t.long),t.talk){this.dragged=!0,setTimeout(()=>{this.dragged=!1},0),this.dictation==="listening"?this.finishDictation(!0):this.micOpening&&this.cancelDictation();return}if(t.touch&&t.slid&&this.owl?.lookAt(null),!t.moved){t.picked&&(this.owl?.hold(!1),this.dragging=!1),(t.picked||t.slid)&&(this.dragged=!0,setTimeout(()=>{this.dragged=!1},0));return}t.flying&&this.owl?.hold(!1),t.shaken&&this.owl?.gesture("dizzy",!0),this.dragging=!1,this.dragged=!0,setTimeout(()=>{this.dragged=!1},0);const i=this.viewport(),s=this.spot,n=oi(i);this.spot=Ff(this.pos,ba(i,this.obstacles(),n))?null:Lf(this.pos,i,n);const o=this.spot?this.underAvatar():null;o&&this.highlight&&!o.text.includes(this.highlight.text)&&(this.highlight=null),o&&!this.sitting&&(this.returnSpot=s),this.setFocus(o),o?(this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=null,this.updateComplete.then(()=>{this.owl?.gesture("nod"),this.lookAtInput()})):(this.spots={...this.spots,[this.pane]:this.spot??"home"},ab(this.spots)),o&&!this.open?this.show():this.open||(this.typeArmedUntil=Date.now()+ib),this.schedulePlace()},this.endVisitLater=()=>{const e=this.trip?Fn:this.arrivedAt+Rg+Fn-performance.now();e>50?this.visitTimer=setTimeout(this.endVisitLater,e):this.endVisit()},this.endComeLater=()=>{if(this.trip){this.comeTimer=setTimeout(this.endComeLater,500);return}this.endCome()},this.tripStep=e=>{const t=this.trip;if(t){if(t.raf=0,e>=t.go){const i=Math.min(1,(e-t.go)/t.ms),s=.5-.5*Math.cos(Math.PI*i),n=t.off;if(t.off={x:t.from.x*(1-s),y:t.from.y*(1-s)-t.lift*Math.sin(Math.PI*s)},this.owl?.carry(t.off.x-n.x,t.off.y-n.y),this.applyTrip(),i>=1){this.endTrip();return}}t.raf=requestAnimationFrame(this.tripStep)}}}connectedCallback(){super.connectedCallback(),Bf(),window.addEventListener("resize",this.onResize),window.addEventListener("scroll",this.schedulePlace,!0),window.addEventListener(ao,this.onVisibilityChange),window.visualViewport?.addEventListener("resize",this.onResize),document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onKey),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("pagehide",this.onPageHide),document.addEventListener("selectionchange",this.onSelection),document.addEventListener("pointermove",this.onActivity,{passive:!0}),document.addEventListener("pointermove",this.onWatch,{passive:!0}),document.addEventListener("pointerout",this.onPointerOut,{passive:!0}),document.addEventListener("pointerdown",this.onActivity,!0),document.addEventListener("pointerdown",this.onGlance,{capture:!0,passive:!0}),document.addEventListener("keydown",this.onActivity,!0),this.restTimer=setInterval(this.updateRest,1e3);const e=f.subscribe(this.onStore);this.unsubscribe=typeof e=="function"?()=>{e()}:null,this.schedulePlace()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.schedulePlace,!0),window.removeEventListener(ao,this.onVisibilityChange),window.visualViewport?.removeEventListener("resize",this.onResize),document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pagehide",this.onPageHide),document.removeEventListener("selectionchange",this.onSelection),document.removeEventListener("pointermove",this.onActivity),document.removeEventListener("pointermove",this.onWatch),document.removeEventListener("pointerout",this.onPointerOut),document.removeEventListener("pointerdown",this.onActivity,!0),document.removeEventListener("pointerdown",this.onGlance,!0),document.removeEventListener("keydown",this.onActivity,!0),this.restTimer&&clearInterval(this.restTimer),this.unsubscribe?.(),this.unsubscribe=null,this.glanceTimer&&clearTimeout(this.glanceTimer),this.drag?.long&&clearTimeout(this.drag.long),this.drag?.fly&&clearTimeout(this.drag.fly),this.stopConversation();for(const e of[this.reactionTimer,this.doneTimer])e&&clearTimeout(e);this.frame&&cancelAnimationFrame(this.frame),this.trip?.raf&&cancelAnimationFrame(this.trip.raf),this.trip=null,this.stopReveal(),this.sitting?.el?.classList.remove("mana-companion-focus"),this.takeTimer&&clearTimeout(this.takeTimer),this.tapTimer&&clearTimeout(this.tapTimer),this.cancelDictation(),this.abort?.abort();for(const e of[this.slowTimer,this.idleTimer,this.chipTimer,this.visitTimer,this.comeTimer,this.stareTimer,this.lingerTimer])e&&clearTimeout(e);this.clearPointed()}playAnimation(e){if(!Ws(e))return;this.reactionTimer&&clearTimeout(this.reactionTimer),this.reaction=e,this.reactionTrigger++;const t=e in $a?$a[e]:8e3;this.reactionTimer=setTimeout(()=>{this.reaction=null,this.reactionTimer=null},t)}react(e,t=Qg){const i=Date.now();if(this.lastReaction?.state===e&&i-this.lastReaction.at<t){e==="happy"&&this.owl?.gesture(Pa[Math.floor(Math.random()*Pa.length)]);return}this.lastReaction={state:e,at:i},this.playAnimation(e)}doMove(e){if(e==="hop"||e==="nod"||e==="tilt"||e==="squint"||e==="ruffle"){this.owl?.gesture(e);return}if(e==="come"){this.comeOver();return}const t=e==="fly"?"flying":e;this.lastReaction={state:t,at:Date.now()},this.playAnimation(t)}stopWatching(){for(const e of[this.stareTimer,this.lingerTimer])e&&clearTimeout(e);this.stareTimer=this.lingerTimer=null,this.watching!==null&&this.owl?.lookAt(null),this.watching=null}maybeFidget(e,t){if(!this.open||this.sending||this.dictation!=="off"||this.dragging||this.reaction||this.trip||this.pointing||this.visiting||this.typingTimer||this.talking||e-this.lastTouched<Jg){this.nextFidget=0;return}if(!this.nextFidget){this.nextFidget=e+Math.random()*Xg;return}if(e<this.nextFidget||(this.nextFidget=e+Bn[0]+Math.random()*(Bn[1]-Bn[0]),be()))return;const i=(t?eb:Zg).filter(n=>n!==this.lastFidget),s=i[Math.floor(Math.random()*i.length)];this.owl?.gesture(s)&&(this.lastFidget=s)}viewport(){const e=window.visualViewport;return{width:document.documentElement.clientWidth||window.innerWidth,height:e?e.height+e.offsetTop:window.innerHeight}}obstacles(){const e=performance.now();if(this.obstacleCache&&e-this.obstacleCache.at<sb)return this.obstacleCache.rects;const t=[];for(const i of document.querySelectorAll("input:not([type=checkbox]):not([type=radio]):not([type=hidden]), textarea, [contenteditable='true']")){if(this.contains(i))continue;const s=i.getBoundingClientRect();s.width>0&&s.height>0&&Of(s)&&s.bottom>0&&s.top<window.innerHeight&&t.push(s)}return this.obstacleCache={at:e,rects:t},t}place(){if(this.dragging)return;const e=this.viewport();if(this.sitting?.key&&(!this.sitting.el?.isConnected||this.sitting.el.dataset.rowKey!==this.sitting.key)){this.sitting.el?.classList.remove("mana-companion-focus");const h=document.querySelector(`[data-row-key="${CSS.escape(this.sitting.key)}"]`);this.sitting.el=h,h?.classList.add("mana-companion-focus")}this.sitting&&this.focusView?.note&&f.getState().viewContext?.note!==this.focusView.note&&(this.sitting.el?.classList.remove("mana-companion-focus"),this.sitting.el=null);const t=this.coming?this.comeTarget(e):null,i=t?null:Ii(this.pointing?.el,e)??Ii(this.sitting?.el,e),s=i||t?null:Ii(this.visiting,e),n=this.restingPlace(e),o=oi(e),a=t??(i?ya(i,e,o):s?ya(s,e,o):n),l=this.flyNext||!!this.trip;if(this.flyNext=!1,(a.x!==this.pos.x||a.y!==this.pos.y)&&!(l&&this.flyTo(a))&&(this.cancelTrip(),this.pos={x:a.x,y:a.y}),this.open){const h=s?n:this.pos,u=this.bubbleEl?.offsetHeight??120,p=jf(h,e,{width:Rn(e),height:u},i??void 0,o);(p.x!==this.bubble.x||p.y!==this.bubble.y)&&(this.bubble=p)}}comeTarget(e){const t=oi(e),i=this.coming?.near,s=window.visualViewport,n=i&&i.x+jn+t<=e.width-U,o=i?{x:n?i.x+jn:i.x-jn-t,y:i.y-t/2}:{x:(e.width-t)/2,y:(s?.offsetTop??0)+((s?.height??e.height)-t)/2},a=va({x:Math.round(o.x),y:Math.round(o.y)},e,this.obstacles(),t);return{x:Math.round(a.x),y:Math.round(a.y)}}restingPlace(e){const t=this.obstacles(),i=oi(e),s=this.sitting&&!Ii(this.sitting.el,e)?this.returnSpot:this.spot;return s?va(Rf(s,e,i),e,t,i):ba(e,t,i)}updated(){!this.owner&&(this.micOpening||this.dictation!=="off")&&this.cancelDictation(),this.open&&this.place()}toggleHistory(){this.historyOpen=!(this.historyOpen&&this.open),this.historyOpen&&!this.open&&this.show()}tapOwl(){this.micOpening||this.dictation!=="off"||this.reviewTake?this.toggleDictation():this.open&&this.typing?this.collapse():this.typeToMana()}show(){this.open=!0,this.touch(),this.updateComplete.then(()=>(this.place(),this.updateComplete)).then(()=>this.springBubble())}springBubble(){const e=this.bubbleEl;!this.open||!e?.animate||be()||(e.style.transformOrigin=`${this.pos.x+this.size/2-this.bubble.x}px ${this.pos.y+this.size/2-this.bubble.y}px`,e.animate([{transform:"scale(0.4)",opacity:0},{transform:"scale(1.05)",opacity:1,offset:.6},{transform:"scale(0.98)",offset:.82},{transform:"none",opacity:1}],{duration:420,easing:"cubic-bezier(0.25, 0.8, 0.35, 1)"}))}openFromKeyboard(){!this.open||!this.typing||document.activeElement!==this.input?this.typeToMana():this.collapse()}collapse(e=!0){this.lastTap=null,this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.endCome(),this.pointing&&this.dismissPoint(),this.cancelDictation(),this.open=!1,this.typing=!1,this.historyOpen=!1,this.reviewTake="",this.input?.blur(),this.stopConversation(),this.revealAll(),e&&(this.highlight=null,this.touched=null,this.typeArmedUntil=0,document.getSelection()?.removeAllRanges()),e&&this.sitting&&(this.spot=this.returnSpot,this.setFocus(null),this.flyNext=!0,this.schedulePlace())}lookAtInput(){if(be())return;const e=this.input?.getBoundingClientRect();e&&this.owl?.lookAt({x:e.left+e.width/2,y:e.top+e.height/2})}conversationGesture(e){return be()||this.dragging||this.reaction||Date.now()-this.lastConversationGesture<Ug||!this.owl?.gesture(e)?!1:(this.lastConversationGesture=Date.now(),!0)}stopConversation(){this.typingTimer&&clearTimeout(this.typingTimer),this.typingTimer=null,this.readingReply=!1,this.owl?.lookAt(null)}onReplyText(){if(this.readingReply||(this.readingReply=!0,this.requestUpdate()),!be()){this.revealFrame||(this.revealFrame=requestAnimationFrame(this.revealStep));return}const e=this.reply.slice(0,this.shown);this.shown=this.reply.length,this.sentenceBeat(e,this.reply)}setTalking(e){e!==this.talking&&(this.talking=e,this.owl?.talk(e))}revealAll(){this.stopReveal(),this.shown=this.reply.length}stopReveal(){this.revealFrame&&cancelAnimationFrame(this.revealFrame),this.revealFrame=0,this.revealAt=0,this.revealCarry=0,this.pauseUntil=0,this.setTalking(!1)}clearReply(){this.stopReveal(),this.reply="",this.shown=0}sentenceBeat(e,t){const i=(t.match(/[.!?](?:\s|$)/g)??[]).length,s=(e.match(/[.!?](?:\s|$)/g)??[]).length;i>s&&this.replyGestures<2&&this.conversationGesture(this.replyGestures===0?"nod":"ruffle")&&this.replyGestures++}view(){const e=f.getState(),t=e.rightPaneMode,i=t==="goals"?Oa():null,s=Date.now(),n={pane:t,...t==="grocery"?{shoppingList:La()}:{},tab:i,week:e.currentWeek??null,summary:e.viewContext?.summary??null,note:e.viewContext?.note??null,focus:this.sitting?{key:this.sitting.key,text:this.sitting.text,...this.sitting.thread?{thread:this.sitting.thread}:{}}:null,highlight:this.highlight&&s-this.highlight.at<Aa?{key:this.highlight.key,text:this.highlight.text}:null,touched:this.touched&&s-this.touched.at<zg?{key:this.touched.key,text:this.touched.text,...this.touched.thread?{thread:this.touched.thread}:{}}:null};return this.sitting&&this.focusView?{...n,...this.focusView,focus:n.focus,highlight:n.highlight,touched:null}:n}async send(e,t=!1){const i=performance.now(),s=e.replace(/\s+/g," ").trim();if(!s||this.sending)return;this.mine&&this.reply&&(this.exchanges=[...this.exchanges.slice(-19),{mine:this.mine,reply:this.reply}]),this.spoken=t,this.reviewTake="",this.historyOpen=!1,this.stopConversation(),this.replyGestures=0,this.input&&!t&&(this.input.value="",this.grow());const n=this.focusView?.note&&f.getState().viewContext?.note===this.focusView.note;(f.getState().rightPaneMode==="canvas"||n||this.lines.some(x=>x.kind==="draft"&&x.draft.noteFile))&&await bs();const o=this.pointing;this.abort?.abort();const a=this.abort=new AbortController;this.mine=s,this.clearReply(),this.lines=[],this.slow=!1,this.status="Thinking",this.sending=!0,this.touch();const l=f.getState(),h=ag(s,{owner:this.owner,pane:l.rightPaneMode,openTasks:l.commitments.filter(x=>!x.done).map(x=>x.title)});if(h){await this.runFast(h,s,i);return}this.slowTimer=setTimeout(()=>{this.reply||(this.slow=!0)},ic);let u=!1,p=null,m=null,g=!1;const v=this.view();this.highlight=null;let y=!1;const A=()=>{if(y||this.abort!==a)return;y=!0,this.sending=!1,this.stopConversation(),this.abort=null,this.slowTimer&&clearTimeout(this.slowTimer),this.slowTimer=null,this.slow&&!this.reply&&!this.lines.length&&(this.lines=[{kind:"error",text:lt}]),this.slow=!1,this.lines.some(N=>N.kind==="error"||N.kind==="action"&&!N.action.ok)?this.react("surprised",2e4):!g&&m?this.doMove(m):!g&&p&&p!=="calm"&&!u&&this.react(p),o&&!u&&this.pointing===o&&this.endPointing(),this.touch()};try{for await(const x of Kf({message:s,view:v},a.signal)){if(a.signal.aborted)return;x.type==="text"?(this.reply+=x.text,this.slow=!1,this.onReplyText()):x.type==="action"?(this.lines=[...this.lines,{kind:"action",action:x.action,until:Date.now()+Nn}],x.action.ok?(this.flashDone(),this.visit(x.action.refs),x.action.noteFile&&vs(x.action.noteFile,x.action.noteChange),x.action.openNote&&Fa(x.action.openNote,this),x.action.shopping&&ys(x.action.shopping,this)):this.playAnimation("surprised"),this.armChips()):x.type==="draft"?this.lines=[...this.lines,{kind:"draft",draft:x.draft}]:x.type==="notes"?this.lines=[...this.lines,{kind:"notes",found:x.found}]:x.type==="confirm"?this.lines=[...this.lines.filter(N=>!(N.kind==="confirm"&&N.confirm.id===x.confirm.id)),{kind:"confirm",confirm:x.confirm}]:x.type==="notice"?this.lines=[...this.lines,{kind:"notice",text:x.text}]:x.type==="error"?(this.lines=[...this.lines,{kind:"error",text:x.error||lt}],this.slow=!1,this.playAnimation("surprised")):x.type==="point"?(u=!0,this.startPointing(x.ref,x.title)):x.type==="mood"?(p=x.mood,!m&&p!=="calm"&&!this.pointing&&(this.react(p),g=!0,this.slow=!1)):x.type==="move"?(m=x.move,this.doMove(m),g=!0,this.slow=!1):x.type==="done"&&A()}}finally{A()}}async runFast(e,t,i){this.highlight=null;let s;e.kind==="nav"?(oc(this,e.pane,e.tab),this.reply=e.note,this.onReplyText(),s=e.note):e.kind==="move"?(this.doMove(e.move),s=be()&&e.move!=="sleepy"?"Stayed still: reduced motion is on.":e.note):s=await this.fastAdd(e),this.sending=!1,this.abort=null,this.touch(),s&&Ra({kind:e.kind,note:s,matched:e.rule,ms:performance.now()-i,message:t})}async fastAdd(e){this.status="Adding";const t=f.getState(),i=La(),s=e.target==="task"&&t.rightPaneMode==="goals"&&Oa()==="week"?t.currentWeek:null,[n,o]=e.target==="task"?["/api/commitments",{title:e.text,goalId:null,keyResultId:null,...s?{week:s}:{}}]:e.target==="idea"?["/api/ideas",{text:e.text}]:["/api/grocery",{name:e.text,list:i}],a=await Na("POST",n,o),l=typeof a?.id=="number"&&a.id>0?a.id:null;if(!l)return this.lines=[{kind:"error",text:"Couldn't add that: can't reach Mana right now."}],this.react("surprised",2e4),null;const h=cg(e.target,e.text,{week:s,current:lg(new Date),list:i}),u=e.target==="task"?[{kind:"commitment",id:l}]:e.target==="idea"?[{kind:"idea",id:l}]:[],p=`${n}/${l}`,m=async()=>{const g=performance.now();return await Na("DELETE",p)?(e.target==="shopping"&&ys({list:i},this),Ra({kind:"undo",note:`Undone: ${h.did}`,matched:e.rule,ms:performance.now()-g}),`Undone: ${h.shown}`):"Couldn't undo: can't reach Mana right now."};return this.lines=[{kind:"action",action:{id:`fast-${e.target}-${l}`,ok:!0,note:h.shown,undoable:!0,refs:u},until:Date.now()+Nn,undoFast:m}],this.flashDone(),this.visit(u),e.target==="shopping"&&ys({list:i},this),this.armChips(),h.did}flashDone(){this.justActed=!0,this.react("happy"),this.doneTimer&&clearTimeout(this.doneTimer),this.doneTimer=setTimeout(()=>{this.justActed=!1,this.doneTimer=null},1200)}armChips(){this.chipTimer&&clearTimeout(this.chipTimer);const e=Math.min(...this.lines.filter(t=>t.kind==="action"&&t.until>Date.now()).map(t=>t.until));Number.isFinite(e)&&(this.chipTimer=setTimeout(()=>{this.lines=[...this.lines],this.armChips()},Math.max(50,e-Date.now()+20)))}async undo(e){if(this.touch(),e.undoFast){const s=e.undoFast,n=e.action.id;this.lines=this.lines.map(a=>a===e?{...e,undone:"Undoing…"}:a);const o=await s();this.lines=this.lines.map(a=>a.kind==="action"&&a.action.id===n?{...a,undone:o}:a);return}const t=e.action.noteFile;t&&await bs();const i=await rt("/api/companion/undo",{id:e.action.id});this.lines=this.lines.map(s=>s===e?{...e,undone:i?.note??"Couldn't undo: can't reach Mana right now."}:s),i?.ok&&t&&vs(t,i.noteChange),i?.ok&&i.shopping&&ys(i.shopping,this)}async applyDraft(e){if(this.touch(),this.lines.some(n=>n.kind==="draft"&&n.draft.id===e&&n.busy))return;const t=this.lines.find(n=>n.kind==="draft"&&n.draft.id===e)?.draft.noteFile;this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===e?{...n,busy:!0}:n),t&&await bs();const i=await rt("/api/companion/draft/apply",{id:e}),s=i?.action??{id:"",ok:!1,note:i?.note??"Couldn't apply: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="draft"&&n.draft.id===e?{kind:"action",action:s,until:Date.now()+Nn}:n),s.ok&&this.flashDone(),s.ok&&s.noteFile&&vs(s.noteFile),this.armChips()}async discardDraft(e){this.touch(),this.lines=this.lines.map(i=>i.kind==="draft"&&i.draft.id===e?{...i,busy:!0}:i);const t=await rt("/api/companion/draft/discard",{id:e});this.lines=this.lines.map(i=>i.kind==="draft"&&i.draft.id===e?{kind:"notice",text:t?.note??lt}:i)}async pickNote(e,t){if(this.touch(),this.lines.some(n=>n.kind==="notes"&&n.found===e&&n.busy))return;this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===e?{...n,busy:!0}:n);const i=await Fa(t.file,this),s={id:"",ok:i,note:i?`Opened: ${t.title}`:`Couldn't open ${t.title}: the notes pane didn't answer.`,undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="notes"&&n.found===e?{kind:"action",action:s,until:0}:n)}async confirmNote(e){this.touch();const t=this.lines.find(n=>n.kind==="confirm"&&n.confirm.id===e);if(!t||t.busy)return;this.lines=this.lines.map(n=>n===t?{...t,busy:!0}:n),await bs();const i=await rt("/api/companion/confirm/apply",{id:e}),s=i?.action??{id:"",ok:!1,note:i?.note??"Couldn't do that: can't reach Mana right now.",undoable:!1,refs:[]};this.lines=this.lines.map(n=>n.kind==="confirm"&&n.confirm.id===e?{kind:"action",action:s,until:0}:n),s.ok?(this.flashDone(),vs(t.confirm.noteFile)):this.react("surprised",2e4)}async discardConfirm(e){this.touch(),this.lines=this.lines.map(i=>i.kind==="confirm"&&i.confirm.id===e?{...i,busy:!0}:i);const t=await rt("/api/companion/confirm/discard",{id:e});this.lines=this.lines.map(i=>i.kind==="confirm"&&i.confirm.id===e?{kind:"notice",text:t?.note??lt}:i)}async startPointing(e,t){this.endVisit(),this.endCome(!1),this.clearPointed();const i=f.getState();i.rightPaneMode!=="goals"&&i.setRightPaneMode("goals");const s=await _a(xa(e),2500);if(this.pointing={ref:e,title:t,el:s},!s)return;s.classList.add("mana-companion-pointed");const n=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;s.scrollIntoView({block:"center",behavior:n?"auto":"smooth"}),setTimeout(this.schedulePlace,n?0:350),this.flyNext=!0,this.schedulePlace()}clearPointed(){this.pointing?.el?.classList.remove("mana-companion-pointed")}endPointing(){this.clearPointed(),this.pointing=null,this.flyNext=!0,this.schedulePlace()}async dismissPoint(){const e=this.pointing;e&&(this.endPointing(),await rt("/api/companion/point/dismiss",e.ref))}startDrag(e,t,i,s){i&&this.cancelTrip();const n=this.open?{x:this.bubble.x-this.pos.x,y:this.bubble.y-this.pos.y}:null,o=this.drag={id:e.pointerId,x0:e.clientX,y0:e.clientY,dx:e.clientX-this.pos.x,dy:e.clientY-this.pos.y,bo:n,moved:!1,branch:t,fly:null,flying:!1,canMove:i,touch:e.pointerType!=="mouse",pet:s,slid:!1,long:null,picked:!1,shaken:!1,talk:!1,shake:{x:e.clientX,y:e.clientY,at:performance.now(),sign:0,turns:[]}};t&&this.owl?.preload(),t&&o.touch?o.long=setTimeout(()=>this.holdToTalk(o),Sa):t&&i&&!be()&&(o.long=setTimeout(()=>this.pickUp(o),Sa)),e.currentTarget.setPointerCapture?.(e.pointerId)}holdToTalk(e){e.long=null,!(this.drag!==e||e.moved||e.slid||this.sending||this.micOpening||this.dictation!=="off"||this.reviewTake)&&(e.talk=!0,e.pet=!1,ri(12),this.toggleDictation())}pickUp(e){e.long=null,!(this.drag!==e||e.moved||e.slid)&&(e.picked=e.flying=!0,e.pet=!1,this.dragging=!0,this.endVisit(),this.stopWatching(),this.owl?.hold(!0),e.touch&&ri(12))}shakeStep(e,t){const i=e.shake,s=performance.now(),n=t.clientX-i.x,o=t.clientY-i.y,a=Math.max(1,s-i.at);if(i.x=t.clientX,i.y=t.clientY,i.at=s,e.shaken||Math.hypot(n,o)/a*1e3<Pg)return;const l=Math.abs(n)>=Math.abs(o)?Math.sign(n):2*Math.sign(o);i.sign&&l===-i.sign&&i.turns.push(s),i.sign=l,i.turns=i.turns.filter(h=>s-h<Ag),!(i.turns.length<Dg||be())&&(e.shaken=!0,e.touch&&ri([18,40,18]))}petMove(e,t){if(!this.owl||be())return!1;const i=(e.clientX-this.pos.x)/this.size,s=(e.clientY-this.pos.y)/this.size;if(!this.onHead(e))return this.stroke=null,t&&i>-.05&&i<1.05&&s>-.05&&s<1.05;const n=performance.now(),o=this.stroke;if(t&&this.owl.lookAt({x:e.clientX,y:e.clientY}),!o||n-o.at>400)return this.stroke={x:e.clientX,y:e.clientY,at:n,path:0,turns:0,sign:0},!0;const a=e.clientX-o.x,l=e.clientY-o.y,h=Math.hypot(a,l);if(h<1)return!0;if(h/Math.max(1,n-o.at)*1e3>Tg)return this.stroke=null,!1;const u=Math.abs(a)>=Math.abs(l)?Math.sign(a):2*Math.sign(l);return o.sign&&u===-o.sign&&o.turns++,Object.assign(o,{x:e.clientX,y:e.clientY,at:n,path:o.path+h,sign:u}),o.path<this.size*Cg||!(t||o.turns>0)||(o.path=0,this.owl.gesture("pet",!0)&&(this.onActivity(),t&&n-this.lastPetBuzz>Eg&&(this.lastPetBuzz=n,ri(8)))),!0}onHead(e){const t=(e.clientX-this.pos.x)/this.size,i=(e.clientY-this.pos.y)/this.size;return t>.15&&t<.85&&i>.04&&i<.52}get size(){return oi(this.viewport())}underAvatar(){const e=this.pos.x+this.size/2,t=this.pos.y+this.size/2;for(const i of document.elementsFromPoint(e,t)){if(!(i instanceof HTMLElement)||this.contains(i))continue;const s=i.closest("[data-row-key]");if(s)return{key:s.dataset.rowKey??null,text:Hn(s,400),el:s,...Number(s.dataset.manaThread)>0?{thread:Number(s.dataset.manaThread)}:{}};const n=i.closest(tb),o=n?Hn(n,Ig):"";return n&&o.length>=2?{key:null,text:o,el:n}:null}return null}setFocus(e){const t=i=>i?`${i.key??i.text}:${i.thread??""}`:"";if(e&&t(e)!==t(this.sitting)){for(const i of this.lines)i.kind==="draft"&&rt("/api/companion/draft/discard",{id:i.draft.id}),i.kind==="confirm"&&rt("/api/companion/confirm/discard",{id:i.confirm.id});this.mine="",this.clearReply(),this.lines=[],this.stopConversation()}if(this.sitting?.el?.classList.remove("mana-companion-focus"),this.focusView=null,e){const{pane:i,tab:s,week:n,summary:o,note:a}=this.view();this.focusView={pane:i,tab:s,week:n,summary:o,note:a},e.key?.startsWith("message:")&&(this.focusView={pane:"inbox",summary:"Inbox message",note:null}),e.key?.startsWith("chat:")&&(this.focusView={pane:"workshop",summary:"Workshop conversation",note:null})}this.sitting=e,e?.el.classList.add("mana-companion-focus")}async visit(e){const t=e?.[0];if(!t||this.pointing||this.dragging||be())return;const i=await _a(xa(t),1500);!i||this.pointing||this.dragging||!Ii(i,this.viewport())||(this.endCome(!1),this.visiting=i,this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=setTimeout(this.endVisitLater,Fn),this.flyNext=!0,this.schedulePlace())}endVisit(){this.visitTimer&&clearTimeout(this.visitTimer),this.visitTimer=null,this.visiting&&(this.visiting=null,this.flyNext=!0,this.schedulePlace())}comeOver(){if(be()||this.dragging||this.pointing)return;const e=this.cursor;this.endVisit(),this.coming={near:e&&Date.now()-e.at<Fg?{x:e.x,y:e.y}:null},this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=setTimeout(this.endComeLater,Ng),this.owl?.preload(),this.flyNext=!0,this.schedulePlace()}endCome(e=!0){this.comeTimer&&clearTimeout(this.comeTimer),this.comeTimer=null,this.coming&&(this.coming=null,e&&(this.flyNext=!0,this.schedulePlace()))}flyTo(e){const t=this.owl,i=this.trip;if(be()||!t?.canFly())return!1;if(i&&i.to.x===e.x&&i.to.y===e.y)return!0;const s={x:this.pos.x+(i?.off.x??0),y:this.pos.y+(i?.off.y??0)},n=Math.hypot(e.x-s.x,e.y-s.y),o=performance.now();if(!i&&n<_g)return!1;const a={x:s.x-e.x,y:s.y-e.y},l=i?Math.max(o,i.go):o+(t.airborne()?0:Og);return this.trip={to:e,from:a,off:a,lift:Math.min(140,n*.35),go:l,ms:Math.max(Ca[0],Math.min(Ca[1],n/Lg*1e3)),raf:i?.raf??0},i||(t.hold(!0,!0),this.avatarEl?.setAttribute("data-flying","")),this.pos={x:e.x,y:e.y},this.applyTrip(),this.trip.raf||(this.trip.raf=requestAnimationFrame(this.tripStep)),!0}applyTrip(){const e=this.trip;e&&this.avatarEl&&(this.avatarEl.style.transform=`translate(${e.off.x}px, ${e.off.y}px)`)}endTrip(){const e=this.trip;e&&(e.raf&&cancelAnimationFrame(e.raf),this.trip=null,this.arrivedAt=performance.now(),this.avatarEl?.style.removeProperty("transform"),this.avatarEl?.removeAttribute("data-flying"),this.owl?.hold(!1))}cancelTrip(){const e=this.trip;e&&(this.pos={x:this.pos.x+e.off.x,y:this.pos.y+e.off.y},this.endTrip())}async toggleDictation(){if(this.reviewTake){await this.send(this.reviewTake,!0);return}if(this.dictation==="writing")return;if(this.dictation==="listening")return this.finishDictation(!0);if(this.micOpening)return this.cancelDictation();if(this.sending)return;const e=++this.takeGeneration;this.typing=!1,this.historyOpen=!1,this.input?.blur(),ja(document.activeElement)&&document.activeElement.blur(),this.revealAll(),this.stopConversation(),this.lines=this.lines.filter(t=>t.kind!=="error"),this.micOpening=!0,this.open||this.show();try{await this.recorder.start({level:t=>this.avatarEl?.style.setProperty("--mc-level",String(t)),pause:()=>{e===this.takeGeneration&&this.finishDictation(!0)}})}catch{e===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"I can't hear you: the mic is blocked or unavailable. You can type instead."}],this.playAnimation("surprised"));return}finally{e===this.takeGeneration&&(this.micOpening=!1)}e!==this.takeGeneration||!this.recorder.active||(this.dictation="listening",this.pointerType!=="mouse"&&ri(10),this.touch(),this.takeTimer=setTimeout(()=>void this.finishDictation(),gl))}async finishDictation(e=!1){if(this.dictation!=="listening")return;const t=this.takeGeneration;this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.dictation="writing",this.avatarEl?.style.removeProperty("--mc-level");const i=this.sttAbort=new AbortController;let s="";try{const n=await this.recorder.stop();if(t!==this.takeGeneration)return;if(n&&"silent"in n){this.lines=[...this.lines,{kind:"error",text:xl(n.mic)}],this.playAnimation("surprised");return}if(s=n?await wl(n.wav,i.signal):"",t!==this.takeGeneration)return;s?e||(this.reviewTake=s):this.lines=[...this.lines,{kind:"notice",text:"I didn't catch that. Tap to try again."}]}catch{t===this.takeGeneration&&(this.lines=[...this.lines,{kind:"error",text:"Couldn't hear that clearly. Try again."}],this.playAnimation("surprised"))}finally{t===this.takeGeneration&&(this.sttAbort=null,this.dictation="off",this.touch())}t===this.takeGeneration&&e&&s&&this.send(s,!0)}async cancelDictation(){this.tapTimer&&clearTimeout(this.tapTimer),this.tapTimer=null,this.lastTap=null,this.takeGeneration++,this.takeTimer&&clearTimeout(this.takeTimer),this.takeTimer=null,this.sttAbort?.abort(),this.sttAbort=null,this.micOpening=!1,this.dictation="off",this.avatarEl?.style.removeProperty("--mc-level"),await this.recorder.cancel()}renderDraft(e){const t={del:"Removed: ",add:"Added: ",same:"",gap:""};return r`<div class="mc-draft">
      <p class="mc-draft-label">${e.draft.label}</p>
      <div class="mc-diff">${e.draft.lines.map(i=>i.kind==="gap"?r`<p class="mc-diff-gap" aria-hidden="true">…</p>`:r`<p class="mc-diff-line" data-kind=${i.kind}><span class="mc-sr">${t[i.kind]}</span>${i.text||" "}</p>`)}</div>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!e.busy} @click=${()=>void this.applyDraft(e.draft.id)}>Apply</button>
        <button type="button" class="mc-undo" ?disabled=${!!e.busy} @click=${()=>void this.discardDraft(e.draft.id)}>Not now</button>
      </p>
    </div>`}renderNotes(e){const t=e.found.query;return r`<div class="mc-draft" data-kind="notes">
      <p class="mc-draft-label">${e.found.partial?`Nothing has all of “${t}”. These come close:`:`Notes for “${t}”:`}</p>
      <div class="mc-picks">${e.found.hits.map(i=>r`<button type="button" class="mc-pick" ?disabled=${!!e.busy} @click=${()=>void this.pickNote(e.found,i)}>${i.title}</button>`)}</div>
    </div>`}renderConfirm(e){const t=e.confirm;return r`<div class="mc-draft" data-kind="confirm">
      <p class="mc-draft-label">${t.label}</p>
      <p class="mc-confirm-text">${t.text}</p>
      <p class="mc-draft-actions">
        <button type="button" class="mc-apply" ?disabled=${!!e.busy} @click=${()=>void this.confirmNote(t.id)}>${e.busy?t.kind==="publish"?"Publishing…":"Unpublishing…":t.button}</button>
        <button type="button" class="mc-undo" ?disabled=${!!e.busy} @click=${()=>void this.discardConfirm(t.id)}>Not now</button>
      </p>
    </div>`}renderLine(e){if(e.kind==="draft")return this.renderDraft(e);if(e.kind==="notes")return this.renderNotes(e);if(e.kind==="confirm")return this.renderConfirm(e);if(e.kind!=="action")return r`<p class="mc-line" data-kind=${e.kind}><span>${Ia(e.text)}</span></p>`;const t=e.action.ok&&e.action.undoable&&!e.undone&&e.until>Date.now(),i=e.action.ok&&!e.undone&&e.action.url&&/^https:\/\//.test(e.action.url)?e.action.url:null;return r`<p class="mc-line" data-kind=${e.action.ok?"action":"error"}>
      <span>${e.undone??e.action.note}${i?r` <a class="mc-link" href=${i} target="_blank" rel="noopener noreferrer">View post</a>`:c}</span>
      ${t?r`<button type="button" class="mc-undo" @click=${()=>void this.undo(e)}>Undo</button>`:c}
    </p>`}render(){if(!this.owner||this.owlHidden)return c;const e=this.sending?"thinking":this.justActed?"done":this.pointing?"pointing":"idle",t=this.highlight&&Date.now()-this.highlight.at<Aa?this.highlight:null,i=bg({override:this.animationState,dictation:this.dictation,sending:this.sending&&!this.readingReply,reaction:this.reaction,curious:this.rest==="idle"&&!!(this.pointing||this.visiting||this.sitting||t||this.dragging),open:this.open,rest:this.rest}),s=this.pointing&&!this.pointing.el?r`<p class="mc-source">${this.pointing.title}</p>`:c;return r`
      ${this.open||this.pointing?r`
        <div class="mc-bubble" role="dialog" aria-label="Mana" ?data-dragging=${this.dragging} style="left:${this.bubble.x}px;top:${this.bubble.y}px;width:${Rn(this.viewport())}px;max-height:${Math.max(80,this.viewport().height-2*U)}px;${this.open?"":"display:none"}"
          @pointerdown=${this.onBubbleDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp} @keydown=${this.touch}>
          ${this.mine&&!this.spoken&&!this.historyOpen?r`<p class="mc-mine">${this.mine}</p>`:c}
          ${s}
          ${this.shown&&!this.historyOpen?r`<p class="mc-reply" aria-live="polite">${Ia(this.reply.slice(0,this.shown).trim(),this.shown<this.reply.length)}</p>`:c}
          ${this.sending&&!this.reply&&!this.slow?r`<p class="mc-status" role="status">${this.status}<span class="mc-dots"></span></p>`:c}
          ${this.slow?r`<p class="mc-line" data-kind="error"><span>${lt}</span></p>`:c}
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
              <button type="submit" class="mc-send" aria-label="Send message" ?disabled=${this.sending}>${nb}</button>
              <button type="button" class="mc-tool mc-mic" data-state=${this.dictation} aria-label=${this.dictation==="listening"?"Stop and send":this.reviewTake?"Send recording":"Talk to Mana"}
              ?disabled=${this.dictation==="writing"||this.micOpening||this.sending} @click=${()=>void this.toggleDictation()}>${ob}</button>
            </div>
          </form>
        </div>`:c}
      <button type="button" class="mc-avatar" data-state=${e} data-animation=${i} data-voice=${this.micOpening?"opening":this.dictation} ?data-dragging=${this.dragging} aria-label=${this.dictation==="listening"?"Stop and send":this.micOpening?"Cancel recording":"Type to Mana"} aria-expanded=${this.open?"true":"false"}
        style=${Pf({left:`${this.pos.x}px`,top:`${this.pos.y}px`,"--mc-size":`${this.size}px`})} @click=${this.toggle} @contextmenu=${this.onContextMenu}
        @pointerdown=${this.onPointerDown} @pointermove=${this.onPointerMove} @pointerup=${this.onPointerUp} @pointercancel=${this.onPointerUp}
        @pointerenter=${this.onHover}>
        <mana-owl .state=${i} .trigger=${this.reactionTrigger}></mana-owl>
      </button>
    `}};L([b({type:Boolean})],I.prototype,"owner",2);L([b()],I.prototype,"avatar",2);L([b({attribute:"animation-state"})],I.prototype,"animationState",2);L([d()],I.prototype,"reaction",2);L([d()],I.prototype,"reactionTrigger",2);L([d()],I.prototype,"rest",2);L([d()],I.prototype,"open",2);L([d()],I.prototype,"sending",2);L([d()],I.prototype,"mine",2);L([d()],I.prototype,"spoken",2);L([d()],I.prototype,"typing",2);L([d()],I.prototype,"owlHidden",2);L([d()],I.prototype,"reviewTake",2);L([d()],I.prototype,"historyOpen",2);L([d()],I.prototype,"exchanges",2);L([d()],I.prototype,"reply",2);L([d()],I.prototype,"lines",2);L([d()],I.prototype,"slow",2);L([d()],I.prototype,"status",2);L([d()],I.prototype,"pointing",2);L([d()],I.prototype,"pos",2);L([d()],I.prototype,"bubble",2);L([d()],I.prototype,"justActed",2);L([d()],I.prototype,"spot",2);L([d()],I.prototype,"dragging",2);L([d()],I.prototype,"visiting",2);L([d()],I.prototype,"sitting",2);L([d()],I.prototype,"shown",2);L([d()],I.prototype,"highlight",2);L([V(".mc-input")],I.prototype,"input",2);L([V(".mc-bubble")],I.prototype,"bubbleEl",2);L([V("mana-owl")],I.prototype,"owl",2);L([d()],I.prototype,"dictation",2);L([d()],I.prototype,"micOpening",2);L([V(".mc-avatar")],I.prototype,"avatarEl",2);I=L([w("mana-companion")],I);function Ia(e,t=!1){return(t&&(e.match(/\*/g)?.length??0)%2?`${e}*`:e).split(/\*([^*\n]+)\*/g).map((s,n)=>n%2?r`<em>${s}</em>`:s)}function _a(e,t){const i=()=>{const s=document.querySelector(`[data-row-key="${CSS.escape(e)}"]`);return s&&s.getClientRects().length?s:null};return new Promise(s=>{const n=performance.now(),o=()=>{const a=i();a||performance.now()-n>t?s(a):requestAnimationFrame(o)};o()})}function Oa(){try{const e=localStorage.getItem(sc);return e==="ideas"||e==="goals"?e:"week"}catch{return"week"}}function La(){try{return localStorage.getItem("cockpit.shopping_tab")==="buy"?"buy":"grocery"}catch{return"grocery"}}function Ra(e){rt("/api/companion/fast",{...e,ms:Math.round(e.ms)})}async function Na(e,t,i){try{const s=await fetch(t,{method:e,...i===void 0?{}:{headers:{"content-type":"application/json"},body:JSON.stringify(i)},signal:AbortSignal.timeout?.(ic)});return s.ok?await s.json().catch(()=>({})):null}catch{return null}}async function bs(){const e=[];window.dispatchEvent(new CustomEvent("mana:notes-settle",{detail:{wait:t=>{e.push(t)}}})),e.length&&await Promise.race([Promise.allSettled(e),new Promise(t=>setTimeout(t,3e3))])}function oc(e,t,i=null){if(i){try{localStorage.setItem(sc,i)}catch{}document.querySelector(`planner-tabs [data-planner-tab="${i}"]`)?.click()}e.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:t},bubbles:!0,composed:!0}));const s=f.getState();s.rightPaneMode!==t&&s.setRightPaneMode(t)}async function Fa(e,t){const i=()=>{let n=!1;return window.dispatchEvent(new CustomEvent("mana:open-note",{detail:{file:e,ack:()=>{n=!0}}})),n};if(oc(t,"canvas"),i())return!0;const s=performance.now();return new Promise(n=>{const o=()=>{i()?n(!0):performance.now()-s>4e3?n(!1):setTimeout(o,100)};setTimeout(o,50)})}function vs(e,t){window.dispatchEvent(new CustomEvent("mana:note-changed",{detail:{file:e,change:t}}))}function Hn(e,t){return(e.innerText||e.textContent||"").replace(/\s+/g," ").trim().slice(0,t)}function ja(e){return e?e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLElement&&e.isContentEditable:!1}function Ii(e,t){if(!e?.isConnected||!e.getClientRects().length)return null;const i=e.getBoundingClientRect();return i.bottom>0&&i.top<t.height?i:null}function be(){return!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches}function ri(e){try{navigator.vibrate?.(e)}catch{}}function rb(){try{const e=JSON.parse(localStorage.getItem(nc)||"null");if(!e||typeof e!="object")return{};const t=s=>!!s&&Number.isFinite(s.xr)&&Number.isFinite(s.yr);if(t(e))return{"*":{xr:e.xr,yr:e.yr}};const i={};for(const[s,n]of Object.entries(e))(n==="home"||t(n))&&(i[s]=n==="home"?n:{xr:n.xr,yr:n.yr});return i}catch{return{}}}function Ua(e,t){const i=e[t]??e["*"];return i&&i!=="home"?i:null}function ab(e){try{localStorage.setItem(nc,JSON.stringify(e))}catch{}}async function ys(e,t){t.dispatchEvent(new CustomEvent("notif-navigate",{detail:{mode:"grocery"},bubbles:!0,composed:!0}));const i=()=>{let o=!1;return window.dispatchEvent(new CustomEvent("mana:shopping-changed",{detail:{...e,ack:()=>{o=!0}}})),o};if(i())return;const s=f.getState();s.rightPaneMode!=="grocery"&&s.setRightPaneMode("grocery");const n=performance.now();await new Promise(o=>{const a=()=>{i()||performance.now()-n>4e3?o():setTimeout(a,100)};setTimeout(a,50)})}function lb(e){const{anchor:t}=e,i=document.createElement("div");i.className="fixed z-[1000] rounded-2xl border border-line bg-surface text-ink p-2 shadow-lg overflow-y-auto",i.style.fontFamily=getComputedStyle(t).fontFamily,i.style.width=`${Math.min(320,window.innerWidth-16)}px`,i.setAttribute("role","menu"),i.setAttribute("aria-label","Switch app"),document.body.appendChild(i);let s=!1;const n=(v=!1)=>{s||(s=!0,document.removeEventListener("pointerdown",o,!0),document.removeEventListener("keydown",u,!0),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",l),xe(c,i),i.remove(),e.onClose(),v&&t.isConnected&&t.focus({preventScroll:!0}))},o=v=>{!v.composedPath().includes(i)&&!v.composedPath().includes(t)&&n()},a=v=>{(!(v.target instanceof Node)||!i.contains(v.target))&&n()},l=()=>n(),h=()=>[...i.querySelectorAll("a")],u=v=>{if(v.key==="Escape")v.preventDefault(),v.stopPropagation(),n(!0);else if(v.key==="Tab")n(!0);else if(["ArrowDown","ArrowUp","Home","End"].includes(v.key)&&i.contains(document.activeElement)){v.preventDefault();const y=h(),A=y.indexOf(document.activeElement);y[v.key==="Home"?0:v.key==="End"?y.length-1:(A+(v.key==="ArrowUp"?-1:1)+y.length)%y.length]?.focus()}};xe(r`${e.entries.map(v=>r`
    <a role="menuitem" href=${v.href}
      aria-current=${v.current?"page":c}
      class="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-hover focus-visible:bg-hover outline-none ${v.current?"text-ink font-semibold bg-active":""}"
      @click=${()=>{e.onSelect(v),n()}}>
      <sc-icon name="lucide-${v.icon}" class="w-5 h-5 shrink-0"></sc-icon>
      <span class="flex-1">${v.label}</span>
      ${v.current?r`<sc-icon name="lucide-check" class="w-4 h-4"></sc-icon>`:c}
    </a>`)} `,i);const p=t.getBoundingClientRect(),m=i.getBoundingClientRect();i.style.maxHeight=`${Math.max(48,window.innerHeight-p.bottom-16)}px`,i.style.left=`${Math.max(8,Math.min(p.left,window.innerWidth-m.width-8))}px`,i.style.top=`${Math.min(p.bottom+6,window.innerHeight-56)}px`,document.addEventListener("pointerdown",o,!0),document.addEventListener("keydown",u,!0),window.addEventListener("scroll",a,!0),window.addEventListener("resize",l);const g=i.querySelector('[aria-current="page"]')||h()[0];return g&&(i.scrollTop=Math.max(0,g.offsetTop-(i.clientHeight-g.offsetHeight)/2),g.focus({preventScroll:!0})),()=>n()}var cb=Object.defineProperty,db=Object.getOwnPropertyDescriptor,ne=(e,t,i,s)=>{for(var n=s>1?void 0:s?db(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(s?a(t,i,n):a(n))||n);return s&&n&&cb(t,i,n),n};const Mt=[{key:"goals",label:"Goals",icon:"target"},{key:"grocery",label:"Shopping",icon:"shopping-cart"},{key:"finance",label:"Finance",icon:"wallet"},{key:"circle",label:"Circles",icon:"circle"},{key:"learn",label:"Learn",icon:"graduation-cap"},{key:"been-to",label:"Been to",icon:"globe"},{key:"office",label:"Projects",icon:"briefcase",ownerOnly:!0},{key:"publisher",label:"Publisher",icon:"megaphone",ownerOnly:!0},{key:"newsroom",label:"The office",icon:"newspaper",ownerOnly:!0},{key:"canvas",label:"Notes",icon:"file-text"},{key:"members",label:"Members",icon:"users",ownerOnly:!0},{key:"notify",label:"Notifications",icon:"bell"},{key:"tools",label:"Tools",icon:"layout-grid"}],vt={"been-to":"personal",goals:"personal",grocery:"personal",finance:"personal",circle:"personal",learn:"personal",office:"studio",publisher:"studio",newsroom:"studio",canvas:"studio",members:"workspace",notify:"workspace",tools:"workspace",inbox:"personal"},hb={"been-to":"var(--nsc-teal)",goals:"#3b82f6",grocery:"#3b82f6",finance:"#3b82f6",circle:"#3b82f6",learn:"#3b82f6",office:"#f43f5e",publisher:"#f43f5e",newsroom:"#f43f5e",canvas:"#f43f5e",members:"#10b981",notify:"#10b981",inbox:"#3b82f6",tools:"var(--ink)"};let P=class extends T{constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.themeMode="auto",this.themeTimer=null,this.menuOpen=!1,this.toolSwitcherOpen=!1,this.accountPortal=null,this.accountAnchor=null,this.accountUp=!1,this.navTooltip=null,this.navTooltipAnchor=null,this.showNavTooltip=e=>{if(e instanceof PointerEvent&&e.pointerType!=="mouse")return;const t=e.target.closest("button");if(!t?.closest(".mana-sidebar.is-collapsed")||this.menuOpen)return;const i=t.getAttribute("aria-label");if(!i||this.navTooltipAnchor===t)return;this.hideNavTooltip();const s=document.createElement("div");s.id="mana-nav-tooltip",s.className="mana-nav-tooltip",s.setAttribute("role","tooltip"),s.textContent=i,document.body.appendChild(s),this.navTooltip=s,this.navTooltipAnchor=t,t.setAttribute("aria-describedby",`${t.getAttribute("aria-describedby")||""} ${s.id}`.trim());const n=t.getBoundingClientRect(),o=s.getBoundingClientRect();s.style.left=`${Math.max(8,Math.min(n.right+8,window.innerWidth-o.width-8))}px`,s.style.top=`${Math.max(8,Math.min(n.top+(n.height-o.height)/2,window.innerHeight-o.height-8))}px`},this.leaveNavTooltip=e=>{e.relatedTarget instanceof Node&&this.navTooltipAnchor?.contains(e.relatedTarget)||this.hideNavTooltip()},this.hideNavTooltip=()=>{if(this.navTooltipAnchor){const e=(this.navTooltipAnchor.getAttribute("aria-describedby")||"").split(/\s+/).filter(t=>t&&t!=="mana-nav-tooltip");e.length?this.navTooltipAnchor.setAttribute("aria-describedby",e.join(" ")):this.navTooltipAnchor.removeAttribute("aria-describedby")}this.navTooltip?.remove(),this.navTooltip=null,this.navTooltipAnchor=null},this.closeAccount=()=>{this.menuOpen=!1,this.accountPortal&&(xe(c,this.accountPortal),this.accountPortal.remove(),this.accountPortal=null)},this.onShellKey=e=>{if((e.metaKey||e.ctrlKey)&&(e.key==="k"||e.key==="K")){e.preventDefault(),this.searchOpen=!this.searchOpen;return}if(e.key==="Escape"){if(this.hideNavTooltip(),this.drawerOpen){this.drawerOpen=!1;return}this.menuOpen&&(this.closeAccount(),this.accountAnchor?.focus())}},this.onAccountOutside=e=>{this.menuOpen&&!e.composedPath().includes(this.accountAnchor)&&!e.composedPath().includes(this.accountPortal)&&this.closeAccount()},this.railCollapsed=localStorage.getItem("cockpit.rail_collapsed")==="1",this.searchOpen=!1,this.drawerOpen=!1,this.sidebarWidth=P.loadSidebarWidth(),this.mobileTab="ops",this.demoHintDismissed=localStorage.getItem("mana.hint.reset_seen")==="1",this.navOrder=P.loadNavOrder(),this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.navDragAxis="y",this.navPress=null,this.justNavDragged=!1,this.orderedNavKeys=[],this.me=null,this.toolRoute=$i(location.hash),this.splitPct=P.INITIAL_SPLIT,this.dragStartX=0,this.dragStartPct=P.DEFAULT_SPLIT,this.splitByMode={},this.openedPane=null,this.cacheOpenId=0,this.paneEpoch=0,this.onCacheStale=e=>{e.detail?.openId!==this.cacheOpenId||!this.openedPane||(this.cacheOpenId=an(this.openedPane),this.paneEpoch++)},this.onAgentFollow=e=>{e.detail?.stay||this.standaloneTool&&this.standaloneTool!=="goals"||f.getState().rightPaneMode!=="goals"&&this.setRightPaneMode("goals")},this.onHashChange=()=>{if(this.dismissSwitcher?.(),this.toolRoute=$i(location.hash),this.toolRoute){const e=f.getState();e.rightPaneMode!==this.toolRoute.mode&&e.setRightPaneMode(this.toolRoute.mode),this.mobileTab="ops"}},this.rowNav=new Tc(this,{selector:"[data-row-key]",getKey:()=>f.getState().focusedRowKey,setKey:e=>f.getState().setFocusedRowKey(e),onToggle:e=>{const[t,i]=e.split(":"),s=Number(i);if(!Number.isFinite(s))return;const n=f.getState();if(t==="kr"){const o=n.goals.flatMap(a=>a.keyResults??[]).find(a=>a.id===s);o&&n.updateKeyResult(s,{done:!o.done})}else if(t==="commit"){const o=n.commitments.find(a=>a.id===s);o&&n.updateCommitment(s,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const e=f.getState();e.loadThreads(),e.currentThreadId!=null&&e.loadMessages(e.currentThreadId),e.loadGoals(),e.loadCommitments(),e.loadNotifications()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=e=>{if(e.button===0){e.preventDefault();try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}this.dragStartX=e.clientX,this.dragStartPct=this.splitPct,window.addEventListener("pointermove",this.onDividerMove),window.addEventListener("pointerup",this.onDividerUp),window.addEventListener("pointercancel",this.onDividerUp),document.body.classList.add("mana-dragging-panes"),document.body.style.userSelect="none"}},this.onDividerMove=e=>{const t=this.querySelector("main");if(!t)return;const i=t.getBoundingClientRect(),s=i.width;if(s<=0||Math.abs(e.clientX-this.dragStartX)<=3)return;const n=Math.min(40,P.MIN_PANE_PX/s*100),o=(e.clientX-i.left)/s*100;o<n/2?this.splitPct=0:o>100-n/2?this.splitPct=100:this.splitPct=Math.max(n,Math.min(100-n,o))},this.onDividerUp=()=>{window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.saveSplit()},this.onThreadOpen=async e=>{this.drawerOpen=!1;const{id:t,tool:i}=e.detail,s=i;s&&Mt.some(n=>n.key===s)&&this.canOpenPane(s)&&s!==f.getState().rightPaneMode&&this.setRightPaneMode(s),await this.revealChat(),await f.getState().selectThread(t)},this.onRevealChat=()=>{this.revealChat()},this.onSidebarResizeDown=e=>{e.preventDefault();const t=e.clientX,i=this.sidebarWidth,s=o=>{this.sidebarWidth=Math.max(P.SIDEBAR_MIN,Math.min(P.SIDEBAR_MAX,i+o.clientX-t))},n=()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),document.body.style.userSelect="",document.body.style.cursor="";try{localStorage.setItem("cockpit.sidebar_width",String(this.sidebarWidth))}catch{}};document.body.style.userSelect="none",document.body.style.cursor="col-resize",window.addEventListener("pointermove",s),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n)},this.toggleRail=()=>{this.railCollapsed=!this.railCollapsed;try{localStorage.setItem("cockpit.rail_collapsed",this.railCollapsed?"1":"0")}catch{}},this.dismissDemoHint=()=>{try{localStorage.setItem("mana.hint.reset_seen","1")}catch{}this.demoHintDismissed=!0},this.showToolSwitcher=e=>{if(this.toolSwitcherOpen){this.dismissSwitcher?.();return}this.closeAccount();const t=f.getState().rightPaneMode;this.toolSwitcherOpen=!0,this.dismissSwitcher=lb({anchor:e.currentTarget,entries:f.getState().tools.filter(i=>i.type!=="view"||i.panel).map(i=>{const s=Va(i);return{label:i.label||i.name,icon:i.icon||"layout-grid",href:s||i.target,external:!s,current:this.mobileTab!=="chat"&&i.name===t}}),onSelect:i=>{i.external||(this.mobileTab="ops")},onClose:()=>{this.toolSwitcherOpen=!1,this.dismissSwitcher=void 0}})},this.onNavPointerDown=(e,t,i)=>{e.pointerType==="mouse"&&e.button!==0||(this.navPress={key:t,axis:i,x:e.clientX,y:e.clientY},window.addEventListener("pointermove",this.onNavPointerMove),window.addEventListener("pointerup",this.onNavPointerUp))},this.onNavPointerMove=e=>{if(this.navPress){if(!this.navDragKey){const t=this.navPress.axis==="y"?Math.abs(e.clientY-this.navPress.y):Math.abs(e.clientX-this.navPress.x),i=this.navPress.axis==="y"?Math.abs(e.clientX-this.navPress.x):Math.abs(e.clientY-this.navPress.y);if(t>6&&t>=i)this.navDragKey=this.navPress.key,this.navDragAxis=this.navPress.axis;else return}this.onNavDragMove(e)}},this.onNavPointerUp=()=>{window.removeEventListener("pointermove",this.onNavPointerMove),window.removeEventListener("pointerup",this.onNavPointerUp),this.navPress=null,this.navDragKey&&(this.justNavDragged=!0,this.endNavDrag(),setTimeout(()=>{this.justNavDragged=!1},50))}}static loadSidebarWidth(){const e=Number(localStorage.getItem("cockpit.sidebar_width"));return Number.isFinite(e)&&e>0?Math.max(P.SIDEBAR_MIN,Math.min(P.SIDEBAR_MAX,e)):240}static loadNavOrder(){try{const e=JSON.parse(localStorage.getItem("cockpit.nav_order")||"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}get standaloneTool(){return this.toolRoute?.standalone?this.toolRoute.mode:null}connectedCallback(){super.connectedCallback();const e=f.getState();if(!location.hash){const t=matchMedia("(max-width: 1023px)").matches?"tools":e.rightPaneMode;history.replaceState(null,"",hn(t)),this.toolRoute=$i(location.hash)}this.toolRoute&&e.setRightPaneMode(this.toolRoute.mode),e.loadSettings().then(()=>this.applyTheme()),e.loadThreads(),e.loadTools(),e.loadNotifications(),this.notifTimer=setInterval(()=>void f.getState().loadNotifications(),6e4),this.fetchNavOrder(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t&&(this.me=t),t?.env==="dev"&&Le(()=>import("./dev-marker-JvOCqt4R.js"),[]).then(i=>i.showDevMarker())}).catch(()=>{}),this.unsubSettings=F(this,f,t=>t.settings),this.unsubRightPaneMode=f.subscribe((t,i)=>{if(t.rightPaneMode!==i.rightPaneMode){if(this.toolRoute?.mode!==t.rightPaneMode){const s=hn(t.rightPaneMode);location.hash!==s&&history.pushState(null,"",s),this.toolRoute=$i(s)}this.requestUpdate()}}),this.unsubTools=F(this,f,t=>t.tools),this.unsubNotif=F(this,f,t=>t.notificationsUnread),window.addEventListener("settings-close",this.onSettingsClose),document.addEventListener("keydown",this.onShellKey),document.addEventListener("mana-reveal-chat",this.onRevealChat),document.addEventListener("pointerdown",this.onAccountOutside),document.addEventListener("scroll",this.closeAccount,!0),window.addEventListener("resize",this.closeAccount),document.addEventListener("scroll",this.hideNavTooltip,!0),window.addEventListener("resize",this.hideNavTooltip),this.loadSplits(),this.splitPct=this.splitFor(f.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible),window.addEventListener("hashchange",this.onHashChange),document.addEventListener("mana-agent-follow",this.onAgentFollow),window.addEventListener("mana-cache-stale",this.onCacheStale)}canOpenPane(e){const t=this.me?.role==="owner";return Mc(e,t)&&(!f.getState().tools.find(i=>i.name===e)?.ownerOnly||t)}disconnectedCallback(){super.disconnectedCallback(),this.themeTimer&&clearTimeout(this.themeTimer),this.unsubSettings?.(),this.unsubRightPaneMode?.(),this.unsubTools?.(),this.unsubNotif?.(),this.notifTimer&&clearInterval(this.notifTimer),$f(),document.removeEventListener("mana-agent-follow",this.onAgentFollow),window.removeEventListener("mana-cache-stale",this.onCacheStale),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("keydown",this.onShellKey),document.removeEventListener("mana-reveal-chat",this.onRevealChat),document.removeEventListener("pointerdown",this.onAccountOutside),document.removeEventListener("scroll",this.closeAccount,!0),window.removeEventListener("resize",this.closeAccount),document.removeEventListener("scroll",this.hideNavTooltip,!0),window.removeEventListener("resize",this.hideNavTooltip),this.hideNavTooltip(),this.closeAccount(),this.dismissSwitcher?.(),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),window.removeEventListener("hashchange",this.onHashChange),window.removeEventListener("pointermove",this.onDividerMove),window.removeEventListener("pointerup",this.onDividerUp),window.removeEventListener("pointercancel",this.onDividerUp),document.body.classList.remove("mana-dragging-panes"),document.body.style.userSelect="",this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll(),this.menuOpen&&this.paintAccountMenu(),(!this.railCollapsed||!this.navTooltipAnchor?.isConnected)&&this.hideNavTooltip()}clampSplit(e){return Math.max(0,Math.min(100,e))}get chatCollapsed(){return this.splitPct<=0}get opsCollapsed(){return this.splitPct>=100}splitFor(e){return this.splitByMode[e]??this.legacySplit??P.INITIAL_SPLIT}loadSplits(){try{const e=localStorage.getItem(P.SPLITS_KEY);if(e){const i=JSON.parse(e);for(const[s,n]of Object.entries(i))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[s]=this.clampSplit(n));return}return}catch{}}saveSplit(){const e=f.getState().rightPaneMode;this.splitByMode[e]=this.splitPct;try{localStorage.setItem(P.SPLITS_KEY,JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const e=this.querySelector("#ops-scroll");return e===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=e,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const e=this.ensureOpsListener(),t=f.getState().rightPaneMode;if(t===this.renderedOpsMode&&!e)return;const i=t!==this.renderedOpsMode;if(this.renderedOpsMode=t,i){const o=this.splitFor(t);o!==this.splitPct&&(this.splitPct=o)}const s=this.opsEl;if(!s)return;const n=this.opsScroll[t]??0;s.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===s&&(s.scrollTop=n)})}applyTheme(){const e=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),t=f.getState().settings[_i]??e??Oc(),i=t==="dark"?"dark":t==="light"?"light":"auto",s=qc(i),n=s?"dark":"light";i!==this.themeMode&&(this.themeMode=i),n!==this.theme&&(this.theme=n),document.documentElement.dataset.theme=n;try{localStorage.setItem(_i,i),localStorage.setItem(Ic,s?"1":"0")}catch{}if(this.themeTimer&&(clearTimeout(this.themeTimer),this.themeTimer=null),i==="auto"){const o=Kc(),a=o?Math.min(Math.max(o.getTime()-Date.now()+1e3,1e3),360*60*1e3):3600*1e3;this.themeTimer=setTimeout(()=>this.applyTheme(),a)}}openSettings(){this.settingsOpen=!0,this.closeAccount(),this.dismissSwitcher?.()}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(i=>i.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}onChatDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(i=>i.type.startsWith("image/")||i.type==="application/pdf"||/\.(xlsx|xls|csv|pdf|png|jpe?g|gif|webp|heic)$/i.test(i.name));t.length&&(e.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:t},bubbles:!0,composed:!0})))}setThemeMode(e){try{localStorage.setItem(_i,e)}catch{}f.getState().setSetting(_i,e),this.themeMode=e,this.applyTheme()}renderRightPaneContent(e){switch(e){case"goals":return r`
          <div class="w-full max-w-5xl mx-auto flex flex-col flex-1">
            <div class="goals-workspace mana-card overflow-clip flex-1 flex flex-col">
              <goals-metrics></goals-metrics>
              <planner-tabs .showMeetings=${this.me?.role==="owner"}></planner-tabs>
            </div>
          </div>
        `;case"canvas":return r`<companion-workspace class="flex flex-col flex-1 min-h-0"></companion-workspace>`;case"grocery":return r`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"inbox":return r`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return r`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return r`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`;case"been-to":return r`<been-to-loader class="flex flex-col flex-1 min-h-0"></been-to-loader>`;case"learn":return r`<learn-section class="flex flex-col flex-1 min-h-0"></learn-section>`;case"members":return r`<members-section class="flex flex-col flex-1 min-h-0"></members-section>`;case"publisher":return r`<publisher-section class="flex flex-col flex-1 min-h-0"
          .chatOpen=${f.getState().settings["cockpit.chat_hidden"]!=="1"&&!this.chatCollapsed}></publisher-section>`;case"newsroom":return r`<newsroom-loader class="flex flex-col flex-1 min-h-0"></newsroom-loader>`;case"tools":return r`<tools-launcher class="flex flex-col flex-1 min-h-0"></tools-launcher>`;case"notify":return r`<notifications-section class="flex flex-col flex-1 min-h-0"></notifications-section>`}}async revealChat(){this.mobileTab="chat",await this.updateComplete,this.chatCollapsed&&(this.splitPct=P.DEFAULT_SPLIT,this.saveSplit(),await this.updateComplete)}toggleAccount(e,t){if(this.menuOpen){this.closeAccount();return}this.accountAnchor=e.currentTarget,this.accountUp=t,this.menuOpen=!0,this.paintAccountMenu(),this.accountPortal?.querySelector("button")?.focus()}paintAccountMenu(){if(!this.accountAnchor)return;this.accountPortal||(this.accountPortal=document.createElement("div"),this.accountPortal.className="mana-account-menu",document.body.appendChild(this.accountPortal));const e=this.accountAnchor.getBoundingClientRect(),t=Math.min(224,window.innerWidth-16);xe(r`
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
      </div>`,this.accountPortal),this.accountPortal.setAttribute("role","menu"),this.accountPortal.setAttribute("aria-label","Account");const i=this.accountPortal.getBoundingClientRect().height;this.accountPortal.style.width=`${t}px`,this.accountPortal.style.left=`${Math.max(8,Math.min(e.left,window.innerWidth-t-8))}px`,this.accountPortal.style.top=`${Math.max(8,Math.min(this.accountUp?e.top-i-8:e.bottom+8,window.innerHeight-i-8))}px`}renderAccount(e=!1,t=!1){const i=f.getState().settings,s=this.me,n=(s?i[`user:${s.login}:profile_pic_url`]:"")||(s?.role==="owner"?i["cockpit.profile_pic_url"]:"")||s?.profilePic,o=[s?.displayName,s?.login].filter(Boolean).join(" · ")||"Account",a=s?.login.indexOf("@")??-1,l=s?.displayName.trim().split(/\s+/).map(h=>h[0]).slice(0,2).join("").toUpperCase()||"?";return r`<button type="button" class="mana-account ${t?"mana-account-expanded":""}"
      aria-label="Account menu" title=${o} aria-haspopup="menu" aria-expanded=${this.menuOpen}
      @click=${h=>this.toggleAccount(h,e)}>
      <span class="mana-avatar ${s?.env==="dev"&&!t?"mana-avatar-dev":""}">${n?r`<img src=${n} alt="" referrerpolicy="no-referrer" @error=${h=>{h.target.hidden=!0}} />`:c}<span>${l}</span></span>
      ${t?r`<span class="mana-account-identity"><span>${s?.displayName||"Account"}${s?.env==="dev"?r`<span class="mana-dev-pill" title="Local dev copy, not production">DEV</span>`:c}</span>${s?.login,c}</span><sc-icon class="mana-account-chevrons" name="lucide-chevrons-up-down"></sc-icon>`:c}
    </button>`}renderRail(e,t){const i=this.railCollapsed&&!this.drawerOpen,s=f.getState().notificationsUnread;return r`
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
          ${e.map((n,o)=>{const a=t===n.key,l=vt[n.key];return r`
              ${o>0&&l!==vt[e[o-1].key]?r`<div class="mana-sidebar-rule" aria-hidden="true"></div>`:c}
              <button type="button" data-nav-item=${n.key} class="mana-sidebar-item ${a?"is-active":""} ${this.navDragKey===n.key?"opacity-40":""} ${this.navDropClass(n.key)}"
                style="--nav-hue:${hb[n.key]};touch-action:pan-y;" aria-label=${n.label} aria-current=${a?"page":c}
                @pointerdown=${h=>this.onNavPointerDown(h,n.key,"y")}
                @click=${()=>this.onNavClick(n.key)}>
                <sc-icon name="lucide-${n.icon}"></sc-icon>
                ${i?c:r`<span class="mana-sidebar-label">${n.label}</span>`}
                ${n.key==="notify"&&s>0?r`<span class="mana-sidebar-dot" role="status" aria-label=${`${s} unread notifications`}></span>`:c}
              </button>`})}
        </nav>
        ${i?c:r`<sidebar-threads .tools=${Mt}></sidebar-threads>`}
        </div>
        <div class="mana-sidebar-account">${this.renderAccount(!0,!i)}</div>
        ${i?c:r`<div class="mana-sidebar-resize" role="separator" aria-orientation="vertical"
          aria-label="Resize sidebar" title="Drag to resize" @pointerdown=${this.onSidebarResizeDown}></div>`}
      </aside>`}setRightPaneMode(e){const t=hn(e);location.hash!==t&&history.pushState(null,"",t),this.toolRoute=$i(t),f.getState().setRightPaneMode(e)}renderBreadcrumb(e,t){const i=Mt.find(s=>s.key===e)?.label||"Projects";return r`<nav aria-label="Breadcrumb" class="min-w-0">
      <ol class="flex items-center gap-2 min-w-0 text-sm sm:text-base">
        ${t?r`<li class="shrink-0"><a href="#/tools" class="text-muted hover:text-ink rounded focus-visible:outline-accent">Tools</a></li>
          <li aria-hidden="true" class="shrink-0 text-muted"><sc-icon name="lucide-chevron-right" class="w-3.5 h-3.5"></sc-icon></li>`:c}
        <li class="min-w-0 truncate font-medium text-ink" aria-current="page">${i}</li>
      </ol>
    </nav>`}renderMobileNavigation(e,t){const i=e==="tools"&&!t,s=t?"Chat":Mt.find(n=>n.key===e)?.label||"Tools";return r`<nav aria-label="App navigation" class="flex items-center min-w-0 text-sm">
      ${i?r`<span class="font-medium px-2">Tools</span>`:r`
        <a href="#/tools" @click=${()=>{this.mobileTab="ops"}} aria-label="All tools" class="min-h-11 inline-flex items-center px-2 rounded-lg text-muted hover:bg-hover focus-visible:outline-accent">Tools</a>
        <sc-icon name="lucide-chevron-right" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        <button type="button" aria-label=${`Switch app, current: ${s}`} aria-haspopup="menu" aria-expanded=${this.toolSwitcherOpen}
          class="min-h-11 flex items-center gap-1 min-w-0 px-2 rounded-lg font-medium hover:bg-hover focus-visible:outline-accent" @click=${this.showToolSwitcher}>
          <span class="truncate">${s}</span><sc-icon name="lucide-chevron-down" class="w-3 h-3 shrink-0 text-muted"></sc-icon>
        </button>`}
    </nav>`}orderModes(e){const t=new Map(this.navOrder.map((s,n)=>[s,n])),i=["personal","studio","workspace"];return[...e].sort((s,n)=>{const o=i.indexOf(vt[s.key])-i.indexOf(vt[n.key]);if(o)return o;const a=t.get(s.key),l=t.get(n.key);return a!==void 0&&l!==void 0?a-l:a!==void 0?-1:l!==void 0?1:0})}onNavDragMove(e){const t=this.renderRoot.querySelectorAll("[data-nav-item]");for(const i of t){const s=i.getBoundingClientRect();if(s.width===0&&s.height===0||!(this.navDragAxis==="y"?e.clientY>=s.top&&e.clientY<=s.bottom:e.clientX>=s.left&&e.clientX<=s.right))continue;const o=i.dataset.navItem;if(vt[o]!==vt[this.navDragKey])continue;const a=this.navDragAxis==="y"?e.clientY<s.top+s.height/2?"before":"after":e.clientX<s.left+s.width/2?"before":"after";(this.navDragOverKey!==o||this.navDragPos!==a)&&(this.navDragOverKey=o,this.navDragPos=a,this.requestUpdate());return}}endNavDrag(){const e=this.navDragKey,t=this.navDragOverKey,i=this.navDragPos;if(this.navDragKey=null,this.navDragOverKey=null,this.navDragPos=null,this.requestUpdate(),!e||!t||e===t||vt[e]!==vt[t])return;const s=[...this.orderedNavKeys],n=s.indexOf(e);if(n<0)return;s.splice(n,1);let o=s.indexOf(t);o<0||(i==="after"&&(o+=1),s.splice(o,0,e),this.navOrder=s,localStorage.setItem("cockpit.nav_order",JSON.stringify(s)),fetch("/api/nav-order",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:s})}).catch(()=>{}))}async fetchNavOrder(){try{const e=await fetch("/api/nav-order",{credentials:"include"});if(!e.ok)return;const t=await e.json();Array.isArray(t.order)&&t.order.length&&(this.navOrder=t.order,localStorage.setItem("cockpit.nav_order",JSON.stringify(t.order)))}catch{}}onNavClick(e){this.justNavDragged||(this.setRightPaneMode(e),this.drawerOpen=!1,this.mobileTab="ops")}navDropClass(e){return this.navDragOverKey!==e?"":this.navDragAxis==="y"?this.navDragPos==="before"?"border-t-2 border-t-accent":"border-b-2 border-b-accent":this.navDragPos==="before"?"border-l-2 border-l-accent":"border-r-2 border-r-accent"}onNotifNavigate(e){const t=e.detail,i={"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle","learn-coach":"learn",publisher:"publisher",mana:"canvas"},s=t?.mode,n=s??(t?.persona?i[t.persona]:void 0);n&&(!(n==="office"||n==="inbox"||n==="members"||n==="publisher")||this.me?.role==="owner")&&n!==f.getState().rightPaneMode&&this.setRightPaneMode(n),this.mobileTab=s?"ops":"chat"}render(){if(this.settingsOpen)return this.openedPane&&(this.openedPane=null,this.cacheOpenId=an()),r`<settings-page></settings-page>`;const e=f.getState().settings["cockpit.chat_hidden"]==="1",t=!e&&this.mobileTab==="chat",i=this.me?.role==="owner",s=f.getState().tools,n=Z=>s.find(je=>je.name===Z)?.placement==="standalone",o=this.orderModes(Mt.filter(Z=>(!Z.ownerOnly||i)&&!n(Z.key)));this.orderedNavKeys=o.map(Z=>Z.key);const a=f.getState().rightPaneMode,l=this.toolRoute?.mode??a,h=this.canOpenPane(l),u=h?l:"tools";u!==this.openedPane&&(this.openedPane=u,this.cacheOpenId=an());const p=h&&this.toolRoute?.standalone?u:null,m=u!=="tools"&&!!(this.toolRoute?.fromTools||n(u)),g=["been-to","grocery","finance","office","circle","learn","members","publisher","newsroom","canvas","notify","tools"].includes(u),y=["canvas","notify","newsroom","tools","grocery","circle","been-to","office"].includes(u),A=y||u==="publisher"||u==="goals",x=y||u==="publisher",N=!this.demoHintDismissed&&!p;return r`
      <div class="mana-shell h-[100dvh] overflow-hidden flex flex-col bg-bg text-ink font-sans" @notif-navigate=${this.onNotifNavigate}
        @thread-open=${this.onThreadOpen} @search-close=${()=>{this.searchOpen=!1}}>
        ${this.searchOpen?r`<thread-search .tools=${Mt}></thread-search>`:c}
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
            ${e||this.chatCollapsed?c:r`<div class="min-w-0 grow shrink [flex-basis:var(--split)]" style=${`--split: ${this.splitPct}%;`}></div>`}
            ${e?c:r`<div class="shrink-0" style=${`width: ${this.chatCollapsed||this.opsCollapsed?20:12}px`}></div>`}
            ${this.opsCollapsed?c:r`<div class="min-w-0 flex items-center ${u==="publisher"?"px-0":"px-4"} grow shrink [flex-basis:var(--split-ops)]" style=${`--split-ops: ${100-this.splitPct}%;${g&&u!=="publisher"?"background:var(--main-card);":""}`}>
              ${u==="publisher"?r`<div class="w-full max-w-[80rem] ${!e&&!this.chatCollapsed?"mr-auto":"mx-auto"} px-3">${this.renderBreadcrumb(u,m)}</div>`:this.renderBreadcrumb(u,m)}
            </div>`}
          </div>
          ${p?c:r`<button type="button" class="lg:hidden shrink-0 w-11 h-11 -ml-2 grid place-items-center rounded-lg text-muted hover:bg-hover hover:text-ink"
            aria-label="Open menu" aria-expanded=${this.drawerOpen} @click=${()=>{this.drawerOpen=!0}}>
            <sc-icon name="lucide-menu" class="w-5 h-5"></sc-icon>
          </button>`}
          <div class="lg:hidden min-w-0">${t?r`<chat-title-bar class="min-w-0 flex" .tools=${Mt}></chat-title-bar>`:this.renderMobileNavigation(u,t)}</div>
          <!-- Spacer pushes Chat/Back and the account to the right edge (phones; on desktop the split title row fills). -->
          <div class="flex-1 lg:hidden"></div>
          ${e?c:r`<button type="button" class="lg:hidden min-h-11 px-3 py-1.5 rounded-lg text-sm hover:bg-hover" @click=${()=>{this.mobileTab=t?"ops":"chat"}}>${t?"Back":"Chat"}</button>`}
          <div class="${p?"flex":"flex lg:hidden"} items-center gap-2 shrink-0">
            ${this.renderAccount()}
          </div>
        </header>

        <main
          class="mana-main-plane relative flex-1 min-h-0 min-w-0 flex flex-col lg:flex-row gap-3 lg:gap-0 overflow-hidden"
        >
          ${e?c:r`
          <section
            class="${t?"flex":"hidden"} ${this.chatCollapsed?"lg:hidden":"lg:flex"} mana-chat-card max-lg:flex-1 flex-col min-h-0 overflow-hidden lg:grow lg:shrink lg:[flex-basis:var(--split)]"
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
            class="${t?"hidden":"flex"} ${this.opsCollapsed?"lg:hidden":"lg:flex"} flex-col min-h-0 ${g?"overflow-hidden":"overflow-y-auto px-3 py-4 sm:p-5 is-page"} ${y?"mana-contained-host":""} mana-main-card max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
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
    `}};P.SIDEBAR_MIN=184;P.SIDEBAR_MAX=420;P.DEFAULT_SPLIT=50;P.MIN_PANE_PX=280;P.INITIAL_SPLIT=0;P.SPLITS_KEY="mana.demo.split_pct_by_mode";ne([d()],P.prototype,"settingsOpen",2);ne([d()],P.prototype,"theme",2);ne([d()],P.prototype,"themeMode",2);ne([d()],P.prototype,"menuOpen",2);ne([d()],P.prototype,"toolSwitcherOpen",2);ne([d()],P.prototype,"railCollapsed",2);ne([d()],P.prototype,"searchOpen",2);ne([d()],P.prototype,"drawerOpen",2);ne([d()],P.prototype,"sidebarWidth",2);ne([d()],P.prototype,"mobileTab",2);ne([d()],P.prototype,"demoHintDismissed",2);ne([d()],P.prototype,"navOrder",2);ne([d()],P.prototype,"navDragKey",2);ne([d()],P.prototype,"navDragOverKey",2);ne([d()],P.prototype,"me",2);ne([d()],P.prototype,"toolRoute",2);ne([d()],P.prototype,"splitPct",2);ne([d()],P.prototype,"paneEpoch",2);P=ne([w("mana-app")],P);const gb=Object.freeze(Object.defineProperty({__proto__:null,get ManaApp(){return P}},Symbol.toStringTag,{value:"Module"}));export{T,f as a,mb as b,fb as c,V as e,qa as i,gb as m,za as p,d as r};
