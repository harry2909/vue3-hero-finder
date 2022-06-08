(function(){"use strict";var e={7657:function(e,r,n){var o=n(9242),t=n(3396);const s={class:"top-nav"},a=(0,t.Uk)("Top Trump Game"),l=(0,t.Uk)("Home");function c(e,r){const n=(0,t.up)("router-link"),o=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("nav",s,[(0,t.Wm)(n,{to:"/top-trump",class:"nav-item"},{default:(0,t.w5)((()=>[a])),_:1}),(0,t.Wm)(n,{to:"/",class:"nav-item"},{default:(0,t.w5)((()=>[l])),_:1})]),(0,t.Wm)(o)],64)}var i=n(89);const u={},p=(0,i.Z)(u,[["render",c]]);var d=p,h=n(678),g=n(7139);const m=(0,t._)("h1",{class:"searchHeading"},"Super Hero Search",-1),_=(0,t._)("button",{class:"searchButton"},"Search",-1),f={key:0,class:"loader-container"},v=(0,t._)("div",{class:"loader"},null,-1),w=[v],H={key:1,class:"search-message"},b={key:2,class:"cards"},k={class:"card-image"},y=["src"],x={class:"card-hero-name"},A={class:"hero-name-header"};function z(e,r,n,s,a,l){const c=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[m,(0,t._)("form",{class:"searchForm",onSubmit:r[1]||(r[1]=(0,o.iM)(((...e)=>l.searchHero&&l.searchHero(...e)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"text",class:"searchInput",placeholder:"Search Hero","onUpdate:modelValue":r[0]||(r[0]=e=>a.searchTerm=e)},null,512),[[o.nr,a.searchTerm]]),_],32),a.loading?((0,t.wg)(),(0,t.iD)("div",f,w)):(0,t.kq)("",!0),null!==a.resultMessage?((0,t.wg)(),(0,t.iD)("h2",H,(0,g.zw)(a.resultMessage),1)):(0,t.kq)("",!0),null!==a.superHeroes?((0,t.wg)(),(0,t.iD)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.superHeroes,((e,r)=>((0,t.wg)(),(0,t.iD)("div",{class:"card",key:r},[(0,t.Wm)(c,{to:{name:"hero",params:{id:e.id}}},{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t._)("img",{src:`${e.image.url?e.image.url:""}`,class:"hero-image"},null,8,y)]),(0,t._)("div",x,[(0,t._)("h3",A,(0,g.zw)(e.name),1)])])),_:2},1032,["to"])])))),128))])):(0,t.kq)("",!0)],64)}var T=n(6265),U=n.n(T),O={data(){return{superHeroes:null,searchTerm:"",searchTermResultID:{},accessToken:"121270947174101",resultMessage:null,loading:!1}},methods:{async searchHero(){if(""!==this.searchTerm)try{this.loading=!0;let e=await U()({url:""+("https://superheroapi.com/api.php/"+this.accessToken+"/search/"+this.searchTerm),method:"get",timeout:8e3,headers:{"Content-Type":"application/json"}});return null==e.data.results?(this.resultMessage="No Results Found!",this.loading=!1,this.superHeroes=null):(this.resultMessage=null,console.log(JSON.parse(JSON.stringify(e.data.results))),this.loading=!1,this.superHeroes=e.data.results)}catch(e){this.loading=!1,console.error(e)}else this.resultMessage="No Data Entered!"}}};const D=(0,i.Z)(O,[["render",z]]);var M=D;const W={key:0,class:"cards"},C={class:"card"},j={class:"card-image"},E=["src"],S={class:"card-hero-name"},B={class:"hero-name-header"},F={class:"card-intro"},I={class:"hero-info-header"},N=(0,t._)("h3",null,"Appearance",-1),Z=(0,t.Uk)(" Eye Colour: "),P={class:"accordion-text"},$=(0,t._)("br",null,null,-1),q=(0,t._)("br",null,null,-1),L=(0,t.Uk)(" Gender: "),R={class:"accordion-text"},Y=(0,t._)("br",null,null,-1),G=(0,t._)("br",null,null,-1),J=(0,t.Uk)(" Hair Colour: "),K={class:"accordion-text"},V=(0,t._)("br",null,null,-1),Q=(0,t._)("br",null,null,-1),X=(0,t.Uk)(" Height: "),ee={class:"accordion-text"},re=(0,t._)("br",null,null,-1),ne=(0,t._)("br",null,null,-1),oe=(0,t.Uk)(" Race: "),te={class:"accordion-text"},se=(0,t._)("br",null,null,-1),ae=(0,t._)("br",null,null,-1),le=(0,t.Uk)(" Weight: "),ce={class:"accordion-text"},ie=(0,t._)("h3",null,"Biography",-1),ue=(0,t.Uk)(" Aliases: "),pe=(0,t._)("br",null,null,-1),de=(0,t._)("br",null,null,-1),he=(0,t.Uk)(" Alignment: "),ge={class:"accordion-text"},me=(0,t._)("br",null,null,-1),_e=(0,t._)("br",null,null,-1),fe=(0,t.Uk)(" Alter Egos: "),ve={class:"accordion-text"},we=(0,t._)("br",null,null,-1),He=(0,t._)("br",null,null,-1),be=(0,t.Uk)(" First Appearance: "),ke={class:"accordion-text"},ye=(0,t._)("br",null,null,-1),xe=(0,t._)("br",null,null,-1),Ae=(0,t.Uk)(" Full Name: "),ze={class:"accordion-text"},Te=(0,t._)("br",null,null,-1),Ue=(0,t._)("br",null,null,-1),Oe=(0,t.Uk)(" Place of Birth: "),De={class:"accordion-text"},Me=(0,t._)("br",null,null,-1),We=(0,t._)("br",null,null,-1),Ce=(0,t.Uk)(" Publisher: "),je={class:"accordion-text"},Ee=(0,t._)("h3",null,"Connections",-1),Se=(0,t.Uk)(" Group Affiliation: "),Be={class:"accordion-text"},Fe=(0,t._)("br",null,null,-1),Ie=(0,t._)("br",null,null,-1),Ne=(0,t.Uk)(" Relatives: "),Ze={class:"accordion-text"},Pe=(0,t._)("h3",null,"Work",-1),$e=(0,t.Uk)(" Base: "),qe={class:"accordion-text"},Le=(0,t._)("br",null,null,-1),Re=(0,t._)("br",null,null,-1),Ye=(0,t.Uk)(" Occupation: "),Ge={class:"accordion-text"};function Je(e,r,n,o,s,a){const l=(0,t.up)("accordion-item"),c=(0,t.up)("accordion");return null!==s.superHero?((0,t.wg)(),(0,t.iD)("div",W,[(0,t._)("div",C,[(0,t._)("div",j,[(0,t._)("img",{src:`${s.superHero.image.url?s.superHero.image.url:""}`,class:"hero-image"},null,8,E)]),(0,t._)("div",S,[(0,t._)("h3",B,(0,g.zw)(s.superHero.name),1)]),(0,t._)("div",F,[(0,t._)("div",I,[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{"accordion-trigger":(0,t.w5)((()=>[N])),"accordion-content":(0,t.w5)((()=>[Z,(0,t._)("span",P,(0,g.zw)(s.superHero.appearance["eye-color"]),1),$,q,L,(0,t._)("span",R,(0,g.zw)(s.superHero.appearance.gender),1),Y,G,J,(0,t._)("span",K,(0,g.zw)(s.superHero.appearance["hair-color"]),1),V,Q,X,(0,t._)("span",ee,(0,g.zw)(s.superHero.appearance.height[0])+" / "+(0,g.zw)(s.superHero.appearance.height[1]),1),re,ne,oe,(0,t._)("span",te,(0,g.zw)(s.superHero.appearance.race),1),se,ae,le,(0,t._)("span",ce,(0,g.zw)(s.superHero.appearance.weight[0])+" / "+(0,g.zw)(s.superHero.appearance.weight[1]),1)])),_:1}),(0,t.Wm)(l,null,{"accordion-trigger":(0,t.w5)((()=>[ie])),"accordion-content":(0,t.w5)((()=>[ue,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.superHero.biography.aliases,(e=>((0,t.wg)(),(0,t.iD)("span",{class:"accordion-text",key:e},(0,g.zw)(e)+", ",1)))),128)),pe,de,he,(0,t._)("span",ge,(0,g.zw)(s.superHero.biography.alignment),1),me,_e,fe,(0,t._)("span",ve,(0,g.zw)(s.superHero.biography["alter-egos"]),1),we,He,be,(0,t._)("span",ke,(0,g.zw)(s.superHero.biography["first-appearance"]),1),ye,xe,Ae,(0,t._)("span",ze,(0,g.zw)(s.superHero.biography["full-name"]),1),Te,Ue,Oe,(0,t._)("span",De,(0,g.zw)(s.superHero.biography["place-of-birth"]),1),Me,We,Ce,(0,t._)("span",je,(0,g.zw)(s.superHero.biography.publisher),1)])),_:1}),(0,t.Wm)(l,null,{"accordion-trigger":(0,t.w5)((()=>[Ee])),"accordion-content":(0,t.w5)((()=>[Se,(0,t._)("span",Be,(0,g.zw)(s.superHero.connections["group-affiliation"]),1),Fe,Ie,Ne,(0,t._)("span",Ze,(0,g.zw)(s.superHero.connections.relatives),1)])),_:1}),(0,t.Wm)(l,null,{"accordion-trigger":(0,t.w5)((()=>[Pe])),"accordion-content":(0,t.w5)((()=>[$e,(0,t._)("span",qe,(0,g.zw)(s.superHero.work.base),1),Le,Re,Ye,(0,t._)("span",Ge,(0,g.zw)(s.superHero.work.occupation),1)])),_:1})])),_:1})])])])])):(0,t.kq)("",!0)}const Ke={class:"accordion"};function Ve(e,r,n,o,s,a){return(0,t.wg)(),(0,t.iD)("ul",Ke,[(0,t.WI)(e.$slots,"default")])}var Qe={props:{},data(){return{Accordion:{count:0,active:null}}},provide(){return{Accordion:this.Accordion}}};const Xe=(0,i.Z)(Qe,[["render",Ve]]);var er=Xe;const rr={class:"accordion__item"},nr={class:"accordion__content"};function or(e,r,n,s,a,l){return(0,t.wg)(),(0,t.iD)("li",rr,[(0,t._)("div",{class:(0,g.C_)(["accordion__trigger",{accordion__trigger_active:l.visible}]),onClick:r[0]||(r[0]=(...e)=>l.open&&l.open(...e))},[(0,t.WI)(e.$slots,"accordion-trigger")],2),(0,t.Wm)(o.uT,{name:"accordion",onEnter:l.start,onAfterEnter:l.end,onBeforeLeave:l.start,onAfterLeave:l.end},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("div",nr,[(0,t._)("ul",null,[(0,t.WI)(e.$slots,"accordion-content")])],512),[[o.F8,l.visible]])])),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])])}var tr={props:{},inject:["Accordion"],data(){return{index:null}},computed:{visible(){return this.index==this.Accordion.active}},methods:{open(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start(e){e.style.height=e.scrollHeight+"px"},end(e){e.style.height=""}},created(){this.index=this.Accordion.count++}};const sr=(0,i.Z)(tr,[["render",or]]);var ar=sr,lr={props:["id"],data(){return{superHero:null,accessToken:"121270947174101"}},methods:{async getHero(){if(""!==this.id)try{let e=await U()({url:""+("https://superheroapi.com/api.php/"+this.accessToken+"/"+this.id),method:"get",timeout:8e3,headers:{"Content-Type":"application/json"}});return null==e.data?(console.log("no results"),this.superHero=null):this.superHero=e.data}catch(e){console.error(e)}}},mounted(){this.getHero()},components:{Accordion:er,AccordionItem:ar}};const cr=(0,i.Z)(lr,[["render",Je]]);var ir=cr;function ur(e,r,n,o,s,a){return(0,t.wg)(),(0,t.iD)("button",{onClick:r[0]||(r[0]=(...e)=>a.selectHeroes&&a.selectHeroes(...e))},"Compare Heroes")}var pr={data(){return{superHeroArray:null,selectedHeroes:null,accessToken:"121270947174101"}},methods:{async getHeroes(){try{let e=await U()({url:""+("https://superheroapi.com/api.php/"+this.accessToken+"/search/a"),method:"get",timeout:8e3,headers:{"Content-Type":"application/json"}});return null==e.data?(console.log("no results"),this.superHeroArray=null):this.superHeroArray=JSON.stringify(e.data.results)}catch(e){console.error(e)}},selectHeroes(){const e=Math.ceil(1),r=Math.floor(this.superHeroArray.length-1),n=Math.floor(Math.random()*(r-e+1))+e,o=Math.floor(Math.random()*(r-e+1))+e;return this.compareHeroes(n,o)},compareHeroes(e,r){if(e&&r){const r=this.superHeroArray.find((r=>r.id===e));console.log(r),console.log(this.superHeroArray)}console.log(this.selectedHeroes)}},mounted(){this.getHeroes()}};const dr=(0,i.Z)(pr,[["render",ur]]);var hr=dr;const gr=[{path:"/",name:"home",component:M},{path:"/hero/:id",name:"hero",component:ir,props:!0},{path:"/top-trump",name:"top-trump",component:hr,props:!0}],mr=(0,h.p7)({history:(0,h.PO)("/vue3-hero-finder/"),routes:gr});var _r=mr,fr=n(65),vr=(0,fr.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(d).use(vr).use(_r).mount("#app")}},r={};function n(o){var t=r[o];if(void 0!==t)return t.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(r,o,t,s){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],t=e[u][1],s=e[u][2];for(var l=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,s<a&&(a=s));if(l){e.splice(u--,1);var i=t();void 0!==i&&(r=i)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,t,s]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var o in r)n.o(r,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,o){var t,s,a=o[0],l=o[1],c=o[2],i=0;if(a.some((function(r){return 0!==e[r]}))){for(t in l)n.o(l,t)&&(n.m[t]=l[t]);if(c)var u=c(n)}for(r&&r(o);i<a.length;i++)s=a[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},o=self["webpackChunksuperhero_finder"]=self["webpackChunksuperhero_finder"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7657)}));o=n.O(o)})();
//# sourceMappingURL=app.47eedf8b.js.map