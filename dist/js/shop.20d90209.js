"use strict";(self["webpackChunkwaimai_app"]=self["webpackChunkwaimai_app"]||[]).push([[523],{7820:function(e,t,a){a.r(t),a.d(t,{default:function(){return we}});var n=a(2558),i=(a(1958),a(2042),a(5904)),o=(a(368),a(6742),a(2939),a(1452),a(2191),a(1404)),d=a(3396),s=a(610),c=a(2220),l=a(5323),r=a(5291),u=a(253),m=a(6014),v=a(2598),f=a(3068);const[g,p]=(0,s["do"])("action-bar-icon"),h=(0,c.l7)({},m.g2,{dot:Boolean,text:String,icon:String,color:String,badge:l.Or,iconClass:l.Vg,badgeProps:Object,iconPrefix:String});var b=(0,d.aZ)({name:g,props:h,setup(e,{slots:t}){const a=(0,m.yj)();(0,u.NB)(r.FO);const n=()=>{const{dot:a,badge:n,icon:i,color:o,iconClass:s,badgeProps:c,iconPrefix:l}=e;return t.icon?(0,d.Wm)(f.Ct,(0,d.dG)({dot:a,class:p("icon"),content:n},c),{default:t.icon}):(0,d.Wm)(v.JO,{tag:"div",dot:a,name:i,badge:n,color:o,class:[p("icon"),s],badgeProps:c,classPrefix:l},null)};return()=>(0,d.Wm)("div",{role:"button",class:p(),tabindex:0,onClick:a},[n(),t.default?t.default():e.text])}});const x=(0,o.n)(b);var I=a(2727),C=(a(3533),a(5757)),k=(a(4780),a(2157)),y=a(7139);const _=e=>((0,d.dD)("data-v-340e8a5d"),e=e(),(0,d.Cn)(),e),w={class:"shop"},A={class:"content"},W=_((()=>(0,d._)("div",{class:"shopBg"},null,-1))),B={class:"foodSort"},S={class:"name"},Z=["src"];function D(e,t,a,o,s,c){const l=k.Z,r=(0,d.up)("foodList"),u=C.OK,m=I.mQ,v=x,f=i.ZL,g=n.ol;return(0,d.wg)(),(0,d.iD)("div",w,[(0,d.Wm)(l,{title:"店铺"}),(0,d._)("div",A,[W,(0,d._)("div",B,[(0,d._)("div",S,[(0,d.Uk)((0,y.zw)(e.title)+" ",1),(0,d._)("img",{src:e.pic,alt:"",class:"food-img"},null,8,Z)]),(0,d.Wm)(m,{active:o.active,"onUpdate:active":t[0]||(t[0]=e=>o.active=e),color:"#ffc400"},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.storeData,((e,t)=>((0,d.wg)(),(0,d.j4)(u,{key:t,title:e.name},{default:(0,d.w5)((()=>[(0,d.Wm)(r,{index:t,foodData:e.data},null,8,["index","foodData"])])),_:2},1032,["title"])))),128))])),_:1},8,["active"])])]),(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Wm)(v,{icon:"chat-o",text:"客服"}),(0,d.Wm)(v,{icon:"cart-o",text:"购物车",badge:o.store.state.cartList.length,onClick:o.goCart},null,8,["badge","onClick"]),(0,d.Wm)(f,{type:"warning",text:"加入购物车",onClick:o.handleAddcart},null,8,["onClick"]),(0,d.Wm)(f,{type:"danger",text:"立即购买",onClick:o.goBuy},null,8,["onClick"])])),_:1})])}a(7658);var j=a(2585);const O=(0,o.n)(j.ZP);var P=a(6048);const[N,E]=(0,s["do"])("sidebar"),F=Symbol(N),L={modelValue:(0,l.SI)(0)};var z=(0,d.aZ)({name:N,props:L,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const{linkChildren:n}=(0,u.$E)(F),i=()=>+e.modelValue,o=e=>{e!==i()&&(t("update:modelValue",e),t("change",e))};return n({getActive:i,setActive:o}),()=>{var e;return(0,d.Wm)("div",{role:"tablist",class:E()},[null==(e=a.default)?void 0:e.call(a)])}}});const V=(0,o.n)(z);const[H,J]=(0,s["do"])("sidebar-item"),K=(0,c.l7)({},m.g2,{dot:Boolean,title:String,badge:l.Or,disabled:Boolean,badgeProps:Object});var q=(0,d.aZ)({name:H,props:K,emits:["click"],setup(e,{emit:t,slots:a}){const n=(0,m.yj)(),{parent:i,index:o}=(0,u.NB)(F);if(!i)return void 0;const s=()=>{e.disabled||(t("click",o.value),i.setActive(o.value),n())};return()=>{const{dot:t,badge:n,title:c,disabled:l}=e,r=o.value===i.getActive();return(0,d.Wm)("div",{role:"tab",class:J({select:r,disabled:l}),tabindex:l?void 0:0,"aria-selected":r,onClick:s},[(0,d.Wm)(f.Ct,(0,d.dG)({dot:t,class:J("text"),content:n},e.badgeProps),{default:()=>[a.title?a.title():c]})])}}});const G=(0,o.n)(q);const[U,Q]=(0,s["do"])("tree-select"),Y={max:(0,l.SI)(1/0),items:(0,l.Ce)(),height:(0,l.SI)(300),selectedIcon:(0,l.SQ)("success"),mainActiveIndex:(0,l.SI)(0),activeId:{type:[Number,String,Array],default:0}};var $=(0,d.aZ)({name:U,props:Y,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(e,{emit:t,slots:a}){const n=t=>Array.isArray(e.activeId)?e.activeId.includes(t):e.activeId===t,i=a=>{const i=()=>{if(a.disabled)return;let n;if(Array.isArray(e.activeId)){n=e.activeId.slice();const t=n.indexOf(a.id);-1!==t?n.splice(t,1):n.length<+e.max&&n.push(a.id)}else n=a.id;t("update:activeId",n),t("clickItem",a)};return(0,d.Wm)("div",{key:a.id,class:["van-ellipsis",Q("item",{active:n(a.id),disabled:a.disabled})],onClick:i},[a.text,n(a.id)&&(0,d.Wm)(v.JO,{name:e.selectedIcon,class:Q("selected")},null)])},o=e=>{t("update:mainActiveIndex",e)},s=e=>t("clickNav",e),c=()=>{const t=e.items.map((e=>(0,d.Wm)(G,{dot:e.dot,badge:e.badge,class:[Q("nav-item"),e.className],disabled:e.disabled,onClick:s},{title:()=>a["nav-text"]?a["nav-text"](e):e.text})));return(0,d.Wm)(V,{class:Q("nav"),modelValue:e.mainActiveIndex,onChange:o},{default:()=>[t]})},l=()=>{if(a.content)return a.content();const t=e.items[+e.mainActiveIndex]||{};return t.children?t.children.map(i):void 0};return()=>(0,d.Wm)("div",{class:Q(),style:{height:(0,P.Nn)(e.height)}},[c(),(0,d.Wm)("div",{class:Q("content")},[l()])])}});const R=(0,o.n)($);var M=a(6906);const T={class:"foodList"},X={key:1};function ee(e,t,a,n,i,o){const s=M.Z,c=R,l=O;return(0,d.wg)(),(0,d.j4)(l,{"theme-vars":n.themeVars},{default:(0,d.w5)((()=>[(0,d._)("div",T,[0===a.index?((0,d.wg)(),(0,d.j4)(c,{key:0,"main-active-index":e.activeIndex,"onUpdate:mainActiveIndex":t[0]||(t[0]=t=>e.activeIndex=t),height:"88vw",items:e.items,color:"#ffc400",onClickNav:n.navItem},{content:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.foodItems,((e,t)=>((0,d.wg)(),(0,d.iD)("div",{key:t},[(0,d.Wm)(s,{item:e,handleAdd:n.handleAdd,handleChange:n.handleChange},null,8,["item","handleAdd","handleChange"])])))),128))])),_:1},8,["main-active-index","items","onClickNav"])):((0,d.wg)(),(0,d.iD)("div",X,(0,y.zw)(a.foodData.content),1))])])),_:1},8,["theme-vars"])}var te=a(4870),ae=a(598);a(3526),a(4165);const ne={class:"foodItem"},ie={class:"left"},oe=["src"],de={class:"right"},se={class:"text"},ce={class:"title"},le={class:"price"},re={class:"add"};function ue(e,t,a,n,i,o){const s=v.JO,c=ae.vF;return(0,d.wg)(),(0,d.iD)("div",ne,[(0,d._)("div",ie,[(0,d._)("img",{src:a.item.pic,alt:""},null,8,oe)]),(0,d._)("div",de,[(0,d._)("div",se,[(0,d._)("div",ce,(0,y.zw)(a.item.title),1),(0,d._)("div",le,"￥"+(0,y.zw)(a.item.price),1)]),(0,d._)("div",re,[a.item.add?((0,d.wg)(),(0,d.j4)(s,{key:0,name:"add-o",color:"red",size:"25",onClick:t[0]||(t[0]=e=>a.handleAdd(a.item.id))})):((0,d.wg)(),(0,d.j4)(c,{key:1,onChange:a.handleChange,name:a.item.id},null,8,["onChange","name"]))])])])}var me={props:["item","handleAdd","handleChange"]},ve=a(89);const fe=(0,ve.Z)(me,[["render",ue],["__scopeId","data-v-2d9d2950"]]);var ge=fe,pe={props:["index","foodData"],components:{FoodItem:ge,ListItem:M.Z},setup(e){let t=(0,te.qj)({activeIndex:0,items:[{text:"分组 1"},{text:"分组 2"}],foodItems:[]});const a=()=>{let a=[];e.foodData?.items?.forEach(((e,n)=>{a.push({text:e.text}),0===n&&(t.foodItems=e.children)})),t.items=a};a();let n=(0,te.qj)({sidebarSelectedBorderColor:"#ffc400"});const i=a=>{e.foodData?.items?.forEach(((e,n)=>{a===n&&(t.foodItems=e.children)}))},o=e=>{t.foodItems.forEach((t=>{t.id===e&&(t.add=!1,t.num+=1)}))},d=(e,a)=>{t.foodItems.forEach((t=>{a.name===t.id&&(t.num=e)}))};return{...(0,te.BK)(t),themeVars:n,navItem:i,handleAdd:o,handleChange:d}}};const he=(0,ve.Z)(pe,[["render",ee],["__scopeId","data-v-773a1229"]]);var be=he,xe=a(65),Ie=a(2483),Ce=a(9733),ke=a(2118),ye={components:{Header:k.Z,foodList:be},setup(){const e=(0,te.iH)(0);let t=(0,xe.oR)(),a=(0,Ie.tv)();const n=(0,te.qj)({title:"小何酸菜鱼",pic:"https://img.zcool.cn/community/01d6565cc44c52a801208f8bc9e0a0.jpg@1280w_1l_2o_100sh.jpg",storeData:[]}),i=e=>{let a=t.state.cartList||[];n.storeData.forEach((e=>{e.data.items?.forEach((e=>{e.children.forEach((e=>{e.num>0&&a.push(e)}))}))})),0!==a.length?(t.commit("addCartList",a),"buy"===e&&o()):(0,Ce.CF)("请先添加商品")},o=()=>{a.push("/cart")},s=()=>{i("buy")},c=()=>{(0,ke.G)().then((e=>{n.storeData=e}))};return(0,d.bv)((()=>{c()})),{...(0,te.BK)(n),active:e,handleAddcart:i,store:t,goCart:o,goBuy:s}}};const _e=(0,ve.Z)(ye,[["render",D],["__scopeId","data-v-340e8a5d"]]);var we=_e},5904:function(e,t,a){a.d(t,{ZL:function(){return p}});var n=a(1404),i=a(3396),o=a(610),d=a(2220),s=a(5291),c=a(253),l=a(3444),r=a(6014),u=a(9545);const[m,v]=(0,o["do"])("action-bar-button"),f=(0,d.l7)({},r.g2,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var g=(0,i.aZ)({name:m,props:f,setup(e,{slots:t}){const a=(0,r.yj)(),{parent:n,index:o}=(0,c.NB)(s.FO),d=(0,i.Fl)((()=>{if(n){const e=n.children[o.value-1];return!(e&&"isButton"in e)}})),m=(0,i.Fl)((()=>{if(n){const e=n.children[o.value+1];return!(e&&"isButton"in e)}}));return(0,l.F)({isButton:!0}),()=>{const{type:n,icon:o,text:s,color:c,loading:l,disabled:r}=e;return(0,i.Wm)(u.zx,{class:v([n,{last:m.value,first:d.value}]),size:"large",type:n,icon:o,color:c,loading:l,disabled:r,onClick:a},{default:()=>[t.default?t.default():s]})}}});const p=(0,n.n)(g)},5291:function(e,t,a){a.d(t,{FO:function(){return u},ZP:function(){return v}});var n=a(3396),i=a(4870),o=a(610),d=a(5323),s=a(253),c=a(4373);const[l,r]=(0,o["do"])("action-bar"),u=Symbol(l),m={placeholder:Boolean,safeAreaInsetBottom:d.J5};var v=(0,n.aZ)({name:l,props:m,setup(e,{slots:t}){const a=(0,i.iH)(),o=(0,c.J)(a,r),{linkChildren:d}=(0,s.$E)(u);d();const l=()=>{var i;return(0,n.Wm)("div",{ref:a,class:[r(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[null==(i=t.default)?void 0:i.call(t)])};return()=>e.placeholder?o(l):l()}})},2558:function(e,t,a){a.d(t,{ol:function(){return o}});var n=a(1404),i=a(5291);const o=(0,n.n)(i.ZP)}}]);
//# sourceMappingURL=shop.20d90209.js.map