(()=>{var e={};e.id=9731,e.ids=[9731],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},35419:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(23515),r(32637),r(86092),r(47985),r(32029),r(7629),r(11930),r(12523);var s=r(23191),a=r(88716),l=r(37922),n=r.n(l),i=r(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["(main-layout)",{children:["brands",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,23515)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\brands\\[slug]\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,32637)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\brands\\[slug]\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,86092)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\brands\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,47985)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,7629)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,11930)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,12523)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\not-found.tsx"]}],d=["D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\brands\\[slug]\\page.tsx"],m="/(main-layout)/brands/[slug]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(main-layout)/brands/[slug]/page",pathname:"/brands/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},47424:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,13532)),Promise.resolve().then(r.bind(r,95656)),Promise.resolve().then(r.bind(r,48161))},51377:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,50317))},54669:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,73885)),Promise.resolve().then(r.bind(r,68343)),Promise.resolve().then(r.bind(r,27044)),Promise.resolve().then(r.bind(r,387))},13532:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(10326),a=r(13416),l=r(57909),n=r(17577),i=r(62598),o=r(24020),c=r(95656),d=r(48161);let m=({categories:e,products:t,brands:r,params:a})=>{let l=`/brands/${a?.slug||""}/filtered-brand-products`;return(0,s.jsxs)("div",{children:[s.jsx(c.default,{title:"BEST CATEGORY IN THIS BRAND",categories:e,redirectPath:l}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(d.default,{redirectPath:l}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(o.Z,{products:t}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(i.Z,{})]})},u=({categories:e,products:t,brands:r,params:i})=>{let[o,c]=(0,n.useState)(!1);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("button",{onClick:()=>c(!0),className:"flex items-center gap-x-1 border border-black-10 p-1 rounded-md",children:[s.jsx("span",{children:s.jsx(l.Z,{width:18,height:18})}),"Filter"]}),o&&s.jsx(a.Z,{show:o,setShow:c,alignment:"left",className:"overflow-y-scroll scrollbar-y-remove p-3 w-[clamp(250px,80vw,350px)] md:hidden",children:s.jsx(m,{brands:r,products:t,categories:e,params:i})})]})}},95656:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(10326),a=r(66081),l=r(35047),n=r(17577);let i=({title:e,categories:t,redirectPath:r})=>{let i=(0,l.useRouter)(),o=(0,l.usePathname)(),{filter:c,setFilter:d}=(0,n.useContext)(a.f),m=e=>{let t;t=c?.["category.categoryName"]?.find(t=>t===e)?c["category.categoryName"]?.filter(t=>t!==e):[...c["category.categoryName"]||[],e],d({...c,"category.categoryName":t}),o!==r&&i.push(r)};return(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"mb-5 md:mb-[30px] font-semibold text-lg ",children:e}),s.jsx("div",{className:"flex flex-col gap-y-3",children:t?.map(e=>s.jsxs("div",{className:"flex items-center gap-x-3.5 text-base",children:[s.jsx("input",{className:" rounded-[50%] bg-gradient-primary text-white hover:bg-gradient-primary cursor-pointer accent-current",type:"checkbox",id:e?.categoryName,checked:!!c?.["category.categoryName"]?.find(t=>t===e.categoryName),onChange:()=>m(e.categoryName)}),s.jsx("label",{htmlFor:e?.categoryName,className:"text-black-80",children:e?.categoryName})]},e?._id))})]})}},48161:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(10326),a=r(66081),l=r(35047),n=r(17577),i=r(45441);let o=({redirectPath:e})=>{let t=(0,l.useRouter)(),r=(0,l.usePathname)(),{filter:o,setFilter:c}=(0,n.useContext)(a.f),[d,m]=(0,n.useState)([0,5e3]);(0,n.useEffect)(()=>{m([o?.["variants.sellingPrice[gte]"]||0,o?.["variants.sellingPrice[lte]"]||5e3])},[o]);let u=(0,n.useCallback)(((e,t)=>{let r=null;return(...t)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...t)},1500)}})(s=>{c({...o,"variants.sellingPrice[gte]":s[0],"variants.sellingPrice[lte]":s[1]}),r!==e&&t.push(e)},0),[o,c,r,e,t]);return(0,s.jsxs)("div",{className:"",children:[s.jsx("h2",{className:"mb-5 md:mb-[30px] font-semibold [font-size:_clamp(14px,10vw,18px)]",children:"PRICE RANGE"}),s.jsx("div",{children:s.jsx(i.Z,{className:"w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider",min:0,max:5e3,value:d,onChange:e=>{m(e),u(e)}})}),(0,s.jsxs)("div",{className:"flex items-center justify-between mt-3.5",children:[(0,s.jsxs)("span",{className:"text-base",children:["Min Price: $",d[0]]}),(0,s.jsxs)("span",{className:"text-base",children:["Max Price: $",d[1]]})]})]})}},65317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var s=r(19510),a=r(68570);let l=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\Components\ProductCard\ProductImageSlider.tsx`),{__esModule:n,$$typeof:i}=l;l.default;let o=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\Components\ProductCard\ProductImageSlider.tsx#default`);var c=r(55465),d=r(57371);let m=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\QuickViewButton.tsx`),{__esModule:u,$$typeof:x}=m;m.default;let p=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\QuickViewButton.tsx#default`);var g=r(1316);let h=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\Components\ProductCard\ProductCartBtn.tsx`),{__esModule:b,$$typeof:j}=h;h.default;let y=(0,a.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\Components\ProductCard\ProductCartBtn.tsx#default`),v=({product:e})=>(0,s.jsxs)(d.default,{href:`/products/${e?._id}`,className:"border border-black-10 rounded-lg group relative w-full max-w-[280px] cursor-pointer duration-500 overflow-hidden group/productcard hover:shadow-lg mx-auto",children:[s.jsx("div",{className:"bg-gradient-primary-light",children:s.jsx(o,{product:e})}),(0,s.jsxs)("div",{className:"p-4",children:[s.jsx("span",{className:"[font-size:_clamp(0.7em,4vw,1em)] line-clamp-1 ",children:e?.productName}),(0,s.jsxs)("div",{className:"flex items-center my-2.5",children:[s.jsx("span",{className:"text-positive [font-size:_clamp(0.5em,4vw,0.8em)] ",children:e?.brand?.brandName}),s.jsx("span",{className:"text-black-10 mx-0.5",children:"|"}),s.jsx("span",{children:s.jsx(c.Z,{rating:Math.round(e?.averageRating||0)})})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between mt-5",children:[(0,s.jsxs)("div",{className:"flex items-center whitespace-nowrap",children:[(0,s.jsxs)("span",{className:"[font-size:_clamp(0.6em,4vw,1.1em)] text-gradient-primary font-bold",children:["$",e?.variants[0]?.discountedPrice]}),s.jsx("span",{className:"mx-0.5 text-black-10",children:"|"}),(0,s.jsxs)("del",{className:"text-base text-black-50 [font-size:_clamp(0.5em,4vw,0.8em)] ",children:["$",e?.variants[0]?.sellingPrice]})]}),s.jsx(y,{product:e})]})]}),(0,s.jsxs)("div",{className:"absolute flex gap-3 items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all duration-300",children:[s.jsx(p,{product:e}),s.jsx(g.ZP,{product:{...e,orderQuantity:1,variant:e?.variants[0]},buttonStyle:"text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full",buttonText:"Quick Order"})]})]})},32637:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var s=r(19510);r(71159);var a=r(31276),l=r(99717),n=r(68570);let i=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\CategoryFilterForBrand.tsx`),{__esModule:o,$$typeof:c}=i;i.default;let d=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\CategoryFilterForBrand.tsx#default`),m=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\PriceRangeFilterForBrand.tsx`),{__esModule:u,$$typeof:x}=m;m.default;let p=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\PriceRangeFilterForBrand.tsx#default`),g=({categories:e,products:t,brands:r,params:n})=>{let i=`/brands/${n?.slug||""}/filtered-brand-products`;return(0,s.jsxs)("div",{children:[s.jsx(d,{title:"BEST CATEGORY IN THIS BRAND",categories:e,redirectPath:i}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(p,{redirectPath:i}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(l.Z,{products:t}),s.jsx("span",{className:"bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"}),s.jsx(a.Z,{})]})},h=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\BrandFilterModal.tsx`),{__esModule:b,$$typeof:j}=h;h.default;let y=(0,n.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\BrandFilterModal.tsx#default`);var v=r(73584);let P=async({children:e,params:t})=>{let r=await (0,v.fetchData)({route:"/category",limit:10}),a=await (0,v.fetchData)({route:"/product",limit:5,query:"sortBy=averageRating"}),l=await (0,v.fetchData)({route:"/brand",limit:10});return s.jsx("div",{children:(0,s.jsxs)("div",{className:"mx-auto max-w-7xl px-5",children:[s.jsx("div",{className:"flex items-center justify-between md:hidden",children:s.jsx(y,{params:t,products:a?.data,categories:r?.data,brands:l?.data})}),(0,s.jsxs)("div",{className:" gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto max-w-7xl",children:[s.jsx("div",{className:"hidden md:block lg:block",children:s.jsx(g,{brands:l?.data,products:a?.data,categories:r?.data,params:t})}),s.jsx("div",{className:"lg:col-span-3 md:grid-cols-2 md:col-span-2",children:e})]})]})})}},23515:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(19510),a=r(73584);r(71159);var l=r(65317);let n=async({params:e})=>{let t=await (0,a.fetchData)({route:"/product",query:`brand.brandName=${e.slug}`});return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("div",{children:(0,s.jsxs)("span",{children:[t?.meta?.total," Items result found - "]})}),s.jsx("div",{className:"hidden md:block"})]}),s.jsx("div",{className:"grid grid-cols-product-grid gap-5 place-items-center",children:t?.data?.map(e=>s.jsx(l.Z,{product:e},e?._id))})]})}},1316:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i});var s=r(68570);let a=(0,s.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\QuickOrderButton.tsx`),{__esModule:l,$$typeof:n}=a;a.default;let i=(0,s.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\brands\_components\QuickOrderButton.tsx#default`)},86092:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(19510);r(71159);var a=r(67691);let l=({children:e})=>(0,s.jsxs)("div",{children:[s.jsx("div",{children:s.jsx(a.Z,{title:"All Brands"})}),s.jsx("div",{className:"max-w-7xl mx-auto mt-[30px]",children:e})]})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,4406,4599,3624,9834,5496,4788,4426,9069],()=>r(35419));module.exports=s})();