(()=>{var e={};e.id=219,e.ids=[219],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},3583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>l,routeModule:()=>u,tree:()=>c});var i=r(260),n=r(8203),a=r(5155),s=r.n(a),o=r(7292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let c=["",{children:["listing-page",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2528)),"/Users/karuna/my-own-space/product-cart/src/app/listing-page/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7133))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/karuna/my-own-space/product-cart/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7133))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/karuna/my-own-space/product-cart/src/app/listing-page/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/listing-page/page",pathname:"/listing-page",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2759:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},5903:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},8917:(e,t,r)=>{Promise.resolve().then(r.bind(r,1354))},2837:(e,t,r)=>{Promise.resolve().then(r.bind(r,481))},9:(e,t,r)=>{Promise.resolve().then(r.bind(r,2528))},633:(e,t,r)=>{Promise.resolve().then(r.bind(r,2772))},268:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s});var i=r(3668);let n={listing:[{id:"1",name:"Milk",price:1.5,quantity:0},{id:"2",name:"Cheese",price:4,quantity:0},{id:"3",name:"Yogurt",price:2,quantity:0},{id:"4",name:"Butter",price:3.5,quantity:0},{id:"5",name:"Apple",price:.8,quantity:0},{id:"6",name:"Banana",price:.6,quantity:0},{id:"7",name:"Orange",price:1.2,quantity:0},{id:"8",name:"Strawberry",price:2.5,quantity:0},{id:"9",name:"Lemon",price:.5,quantity:0},{id:"10",name:"Blueberry",price:3,quantity:0},{id:"11",name:"Grapes",price:2.8,quantity:0},{id:"12",name:"Peach",price:1.7,quantity:0},{id:"13",name:"Milk Powder",price:5,quantity:0},{id:"14",name:"Cottage Cheese",price:3.2,quantity:0},{id:"15",name:"Ice Cream",price:4.5,quantity:0},{id:"16",name:"Mango",price:1.5,quantity:0},{id:"17",name:"Pineapple",price:2.2,quantity:0},{id:"18",name:"Avocado",price:2,quantity:0},{id:"19",name:"Kiwi",price:1.8,quantity:0},{id:"20",name:"Carrot",price:.9,quantity:0}],search:[{id:"2",name:"Cheese",price:4,quantity:0},{id:"4",name:"Butter",price:3.5,quantity:0},{id:"5",name:"Apple",price:.8,quantity:0},{id:"6",name:"Banana",price:.6,quantity:0},{id:"10",name:"Blueberry",price:3,quantity:0},{id:"12",name:"Peach",price:1.7,quantity:0},{id:"14",name:"Cottage Cheese",price:3.2,quantity:0},{id:"16",name:"Mango",price:1.5,quantity:0},{id:"19",name:"Kiwi",price:1.8,quantity:0}]},a=async e=>JSON.parse(JSON.stringify(n[e])),s=e=>(0,i.I)({queryKey:["products",e],queryFn:()=>a(e),staleTime:1/0})},481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var i=r(5512);r(4263);var n=r(906),a=r(4186),s=r(6934),o=r(8531),d=r.n(o);let c=()=>{let e=(0,s.x)(e=>e.totalProduct(e));return(0,i.jsxs)("nav",{className:"w-full flex justify-center gap-6 p-6",children:[(0,i.jsx)(d(),{href:"/listing-page",children:"Listing"})," |"," ",(0,i.jsx)(d(),{href:"/search",children:"Search"}),"|"," ",(0,i.jsxs)(d(),{href:"/cart",children:["Cart ( ",e," ) "]})]})},l=new n.E;function p({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("title",{children:"Product-Cart"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=delete"})]}),(0,i.jsx)("body",{children:(0,i.jsxs)(a.Ht,{client:l,children:[(0,i.jsx)(c,{}),e]})})]})}},2772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(5512),n=r(268),a=r(2966);let s=()=>{let{data:e,isLoading:t}=(0,n.Q)("listing");return t?(0,i.jsx)("p",{children:"Loading..."}):(0,i.jsxs)("div",{className:"flex gap-4 flex-col",children:[(0,i.jsx)("h1",{children:"Listing Page"}),(0,i.jsx)("div",{className:"flex gap-4 flex-wrap",children:e?.map(e=>i.jsx(a.A,{product:e},e?.id))})]})}},2966:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(5512),n=r(6934);let a=({product:e})=>{let{cart:t,addToCart:r,updateQuantity:a}=(0,n.x)(),s=t.find(t=>t?.id===e?.id),o=s?s.quantity:0,d=t=>{r(e),t>=0&&a(e.id,t)};return(0,i.jsxs)("div",{className:"flex flex-col rounded-md w-fit text-black py-4 px-8 bg-white gap-4",children:[(0,i.jsx)("h3",{children:e?.name}),(0,i.jsxs)("p",{children:["Price: $",e?.price]}),(0,i.jsx)("p",{children:"Add to Cart"}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("button",{onClick:()=>d(o-1),disabled:0===o,children:"-"}),(0,i.jsx)("span",{className:"border rounded-sm px-4 border-black",children:o}),(0,i.jsx)("button",{onClick:()=>d(o+1),children:"+"})]})]})}},6934:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});let i=(0,r(2803).v)(e=>({cart:[],addToCart:t=>e(e=>e.cart.find(e=>e.id===t.id)?{cart:e.cart.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e)}:{cart:[...e.cart,{...t,quantity:1}]}),removeFromCart:t=>e(e=>({cart:e.cart.filter(e=>e.id!==t)})),updateQuantity:(t,r)=>e(e=>r<=0?{cart:e.cart.filter(e=>e.id!==t)}:{cart:e.cart.map(e=>e.id===t?{...e,quantity:r}:e)}),totalProduct:e=>e?.cart?.reduce((e,t)=>e+t.quantity,0)||0}))},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/karuna/my-own-space/product-cart/src/app/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/karuna/my-own-space/product-cart/src/app/layout.tsx","default")},2528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/karuna/my-own-space/product-cart/src/app/listing-page/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/karuna/my-own-space/product-cart/src/app/listing-page/page.tsx","default")},7133:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(8077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)("/product-cart",await e.params,"favicon.ico")+""}]},4263:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[638,377,77,668],()=>r(3583));module.exports=i})();