import{b4 as i,bd as o,aY as c,bP as d,bb as r,bU as f,bz as u,bl as l,aW as b,bA as h}from"./ttXgE4so.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="df76ca05-142f-4f1c-a347-ca47a0b0afe3",e._sentryDebugIdIdentifier="sentry-dbid-df76ca05-142f-4f1c-a347-ca47a0b0afe3")}catch{}})();const p="img",m=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=u(l(b().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return h(a,t.src)}return t.src});return(s,a)=>(c(),d(f(r(p)),{src:r(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{m as default};
