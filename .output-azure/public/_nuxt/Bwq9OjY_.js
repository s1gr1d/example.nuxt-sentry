(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new r.Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="1aac2bc6-588b-4e21-9d31-57aefc891a10",r._sentryDebugIdIdentifier="sentry-dbid-1aac2bc6-588b-4e21-9d31-57aefc891a10")}catch{}})();const p=["p","h1","h2","h3","h4","h5","h6","li"];function n(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function u(r){return n(r,"text")||n(r,Symbol.for("v-txt"))}function l(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function f(r){if(!r)return"";if(Array.isArray(r))return r.map(f).join("");if(u(r))return r.children||r.value||"";const t=l(r);return Array.isArray(t)?t.map(f).filter(Boolean).join(""):""}function a(r,t=[]){if(Array.isArray(r))return r.flatMap(i=>a(i,t));let e=r;return t.some(i=>i==="*"||n(r,i))&&(e=l(r)||r,!Array.isArray(e)&&p.some(i=>n(r,i))&&(e=[e])),e}function y(r,t=[]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(e=>y(a(e,[t[0]]),t.slice(1))).filter(e=>!(u(e)&&f(e).trim()==="")):r}function h(r,t=[]){return typeof t=="string"&&(t=t.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),t.length?y(r,t).reduce((e,i)=>(u(i)?typeof e[e.length-1]=="string"?e[e.length-1]+=i.children:e.push(i.children):e.push(i),e),[]):r}export{h as f};
