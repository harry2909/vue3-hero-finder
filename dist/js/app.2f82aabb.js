(function(){"use strict";var e={7062:function(e,r,s){var o=s(9242),n=s(65),t=s(3396);const a={class:"top-nav"},l=(0,t.Uk)("Home"),c=(0,t.Uk)("Hero Battle");function i(e,r){const s=(0,t.up)("router-link"),o=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("nav",a,[(0,t.Wm)(s,{to:"/",class:"nav-item"},{default:(0,t.w5)((()=>[l])),_:1}),(0,t.Wm)(s,{to:"/top-trump",class:"nav-item"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t.Wm)(o)],64)}var u=s(89);const d={},p=(0,u.Z)(d,[["render",i]]);var h=p,g=s(678),H=s(7139);const m=(0,t._)("h1",{class:"searchHeading"},"Super Hero Search",-1),f=(0,t._)("button",{class:"searchButton"},"Search",-1),_={key:0,class:"loader-container"},w=(0,t._)("div",{class:"loader"},null,-1),v=[w],b={key:1,class:"search-message"},k={key:0,class:"cards"},y={class:"card-image"},x=["src"],A={class:"card-hero-name"},z={class:"hero-name-header"};function T(e,r,n,a,l,c){const i=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[m,(0,t._)("form",{class:"searchForm",onSubmit:r[1]||(r[1]=(0,o.iM)(((...e)=>c.searchHero&&c.searchHero(...e)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"text",class:"searchInput",placeholder:"Search Hero","onUpdate:modelValue":r[0]||(r[0]=e=>l.searchTerm=e)},null,512),[[o.nr,l.searchTerm]]),f],32),l.loading?((0,t.wg)(),(0,t.iD)("div",_,v)):(0,t.kq)("",!0),null!==l.resultMessage?((0,t.wg)(),(0,t.iD)("h2",b,(0,H.zw)(l.resultMessage),1)):(0,t.kq)("",!0),(0,t.Wm)(o.uT,{name:"slide-fade"},{default:(0,t.w5)((()=>[null!==this.superHeroes?((0,t.wg)(),(0,t.iD)("div",k,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.superHeroes,((e,o)=>((0,t.wg)(),(0,t.iD)("div",{class:"card",key:o},[(0,t.Wm)(i,{to:{name:"hero",params:{id:e.id}}},{default:(0,t.w5)((()=>[(0,t._)("div",y,[(0,t._)("img",{src:`${e.image.url}`,onError:r[2]||(r[2]=e=>e.target.src=s(3363)),class:"hero-image"},null,40,x)]),(0,t._)("div",A,[(0,t._)("h3",z,(0,H.zw)(e.name),1)])])),_:2},1032,["to"])])))),128))])):(0,t.kq)("",!0)])),_:1})],64)}var U=s(6265),D=s.n(U),M={data(){return{superHeroes:null,searchTerm:"",searchTermResultID:{},accessToken:"121270947174101",resultMessage:null,loading:!1}},methods:{async searchHero(){this.$store.commit("storeHeroes",null),this.superHeroes=null,""!==this.searchTerm?(this.loading=!0,await D().get(""+("https://superheroapi.com/api.php/"+this.accessToken+"/search/"+this.searchTerm)).then((e=>{if(null==e.data.results)return this.resultMessage="No Results Found!",this.loading=!1,null;this.resultMessage=null,this.superHeroes=e.data.results,console.log(this.$store.state.superHeroes)})).catch((e=>{this.resultMessage=e})).finally((()=>{this.loading=!1})),this.$store.commit("storeHeroes",this.superHeroes)):this.resultMessage="No Data Entered!"}},mounted(){return this.superHeroes=this.$store.state.superHeroes}};const W=(0,u.Z)(M,[["render",T]]);var O=W;const E={key:0,class:"cards"},$={class:"card"},j={class:"card-image"},C=["src"],B={class:"card-hero-name"},S={class:"hero-name-header"},q={class:"card-intro"},F={class:"hero-info-header"},I=(0,t._)("h3",null,"Appearance",-1),Y=(0,t.Uk)(" Eye Colour: "),Z={class:"accordion-text"},P=(0,t._)("br",null,null,-1),L=(0,t._)("br",null,null,-1),R=(0,t.Uk)(" Gender: "),K={class:"accordion-text"},N=(0,t._)("br",null,null,-1),G=(0,t._)("br",null,null,-1),V=(0,t.Uk)(" Hair Colour: "),J={class:"accordion-text"},Q=(0,t._)("br",null,null,-1),X=(0,t._)("br",null,null,-1),ee=(0,t.Uk)(" Height: "),re={class:"accordion-text"},se=(0,t._)("br",null,null,-1),oe=(0,t._)("br",null,null,-1),ne=(0,t.Uk)(" Race: "),te={class:"accordion-text"},ae=(0,t._)("br",null,null,-1),le=(0,t._)("br",null,null,-1),ce=(0,t.Uk)(" Weight: "),ie={class:"accordion-text"},ue=(0,t._)("h3",null,"Biography",-1),de=(0,t.Uk)(" Aliases: "),pe=(0,t._)("br",null,null,-1),he=(0,t._)("br",null,null,-1),ge=(0,t.Uk)(" Alignment: "),He={class:"accordion-text"},me=(0,t._)("br",null,null,-1),fe=(0,t._)("br",null,null,-1),_e=(0,t.Uk)(" Alter Egos: "),we={class:"accordion-text"},ve=(0,t._)("br",null,null,-1),be=(0,t._)("br",null,null,-1),ke=(0,t.Uk)(" First Appearance: "),ye={class:"accordion-text"},xe=(0,t._)("br",null,null,-1),Ae=(0,t._)("br",null,null,-1),ze=(0,t.Uk)(" Full Name: "),Te={class:"accordion-text"},Ue=(0,t._)("br",null,null,-1),De=(0,t._)("br",null,null,-1),Me=(0,t.Uk)(" Place of Birth: "),We={class:"accordion-text"},Oe=(0,t._)("br",null,null,-1),Ee=(0,t._)("br",null,null,-1),$e=(0,t.Uk)(" Publisher: "),je={class:"accordion-text"},Ce=(0,t._)("h3",null,"Connections",-1),Be=(0,t.Uk)(" Group Affiliation: "),Se={class:"accordion-text"},qe=(0,t._)("br",null,null,-1),Fe=(0,t._)("br",null,null,-1),Ie=(0,t.Uk)(" Relatives: "),Ye={class:"accordion-text"},Ze=(0,t._)("h3",null,"Work",-1),Pe=(0,t.Uk)(" Base: "),Le={class:"accordion-text"},Re=(0,t._)("br",null,null,-1),Ke=(0,t._)("br",null,null,-1),Ne=(0,t.Uk)(" Occupation: "),Ge={class:"accordion-text"};function Ve(e,r,n,a,l,c){const i=(0,t.up)("accordion-item"),u=(0,t.up)("accordion");return(0,t.wg)(),(0,t.j4)(o.uT,{name:"slide-fade"},{default:(0,t.w5)((()=>[null!==l.superHero?((0,t.wg)(),(0,t.iD)("div",E,[(0,t._)("div",$,[(0,t._)("div",j,[(0,t._)("img",{src:`${l.superHero.image.url}`,onError:r[0]||(r[0]=e=>e.target.src=s(3363)),class:"hero-image"},null,40,C)]),(0,t._)("div",B,[(0,t._)("h3",S,(0,H.zw)(l.superHero.name),1)]),(0,t._)("div",q,[(0,t._)("div",F,[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{"accordion-trigger":(0,t.w5)((()=>[I])),"accordion-content":(0,t.w5)((()=>[Y,(0,t._)("span",Z,(0,H.zw)(l.superHero.appearance["eye-color"]),1),P,L,R,(0,t._)("span",K,(0,H.zw)(l.superHero.appearance.gender),1),N,G,V,(0,t._)("span",J,(0,H.zw)(l.superHero.appearance["hair-color"]),1),Q,X,ee,(0,t._)("span",re,(0,H.zw)(l.superHero.appearance.height[0])+" / "+(0,H.zw)(l.superHero.appearance.height[1]),1),se,oe,ne,(0,t._)("span",te,(0,H.zw)(l.superHero.appearance.race),1),ae,le,ce,(0,t._)("span",ie,(0,H.zw)(l.superHero.appearance.weight[0])+" / "+(0,H.zw)(l.superHero.appearance.weight[1]),1)])),_:1}),(0,t.Wm)(i,null,{"accordion-trigger":(0,t.w5)((()=>[ue])),"accordion-content":(0,t.w5)((()=>[de,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.superHero.biography.aliases,(e=>((0,t.wg)(),(0,t.iD)("span",{class:"accordion-text",key:e},(0,H.zw)(e)+", ",1)))),128)),pe,he,ge,(0,t._)("span",He,(0,H.zw)(l.superHero.biography.alignment),1),me,fe,_e,(0,t._)("span",we,(0,H.zw)(l.superHero.biography["alter-egos"]),1),ve,be,ke,(0,t._)("span",ye,(0,H.zw)(l.superHero.biography["first-appearance"]),1),xe,Ae,ze,(0,t._)("span",Te,(0,H.zw)(l.superHero.biography["full-name"]),1),Ue,De,Me,(0,t._)("span",We,(0,H.zw)(l.superHero.biography["place-of-birth"]),1),Oe,Ee,$e,(0,t._)("span",je,(0,H.zw)(l.superHero.biography.publisher),1)])),_:1}),(0,t.Wm)(i,null,{"accordion-trigger":(0,t.w5)((()=>[Ce])),"accordion-content":(0,t.w5)((()=>[Be,(0,t._)("span",Se,(0,H.zw)(l.superHero.connections["group-affiliation"]),1),qe,Fe,Ie,(0,t._)("span",Ye,(0,H.zw)(l.superHero.connections.relatives),1)])),_:1}),(0,t.Wm)(i,null,{"accordion-trigger":(0,t.w5)((()=>[Ze])),"accordion-content":(0,t.w5)((()=>[Pe,(0,t._)("span",Le,(0,H.zw)(l.superHero.work.base),1),Re,Ke,Ne,(0,t._)("span",Ge,(0,H.zw)(l.superHero.work.occupation),1)])),_:1})])),_:1})])])])])):(0,t.kq)("",!0)])),_:1})}const Je={class:"accordion"};function Qe(e,r,s,o,n,a){return(0,t.wg)(),(0,t.iD)("ul",Je,[(0,t.WI)(e.$slots,"default")])}var Xe={props:{},data(){return{Accordion:{count:0,active:null}}},provide(){return{Accordion:this.Accordion}}};const er=(0,u.Z)(Xe,[["render",Qe]]);var rr=er;const sr={class:"accordion__item"},or={class:"accordion__content"};function nr(e,r,s,n,a,l){return(0,t.wg)(),(0,t.iD)("li",sr,[(0,t._)("div",{class:(0,H.C_)(["accordion__trigger",{accordion__trigger_active:l.visible}]),onClick:r[0]||(r[0]=(...e)=>l.open&&l.open(...e))},[(0,t.WI)(e.$slots,"accordion-trigger")],2),(0,t.Wm)(o.uT,{name:"accordion",onEnter:l.start,onAfterEnter:l.end,onBeforeLeave:l.start,onAfterLeave:l.end},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("div",or,[(0,t._)("ul",null,[(0,t.WI)(e.$slots,"accordion-content")])],512),[[o.F8,l.visible]])])),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])])}var tr={props:{},inject:["Accordion"],data(){return{index:null}},computed:{visible(){return this.index==this.Accordion.active}},methods:{open(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start(e){e.style.height=e.scrollHeight+"px"},end(e){e.style.height=""}},created(){this.index=this.Accordion.count++}};const ar=(0,u.Z)(tr,[["render",nr]]);var lr=ar,cr={props:["id"],data(){return{superHero:null,accessToken:"121270947174101"}},methods:{async getHero(){""!==this.id&&await D().get(""+("https://superheroapi.com/api.php/"+this.accessToken+"/"+this.id)).then((e=>{if(null==e.data)return console.log("no results"),this.superHero=null;this.resultMessage=null,this.superHero=e.data})).catch((e=>{this.resultMessage=e}))}},mounted(){this.getHero()},components:{Accordion:rr,AccordionItem:lr}};const ir=(0,u.Z)(cr,[["render",Ve]]);var ur=ir;const dr={key:0,class:"loader-container"},pr=(0,t._)("div",{class:"loader"},null,-1),hr=[pr],gr={key:0,class:"cards"},Hr={class:"card-image"},mr=["src"],fr={class:"card-hero-name"},_r={class:"hero-name-header"},wr=(0,t._)("div",{class:"card-intro"},[(0,t._)("div",{class:"hero-info-header"})],-1);function vr(e,r,n,a,l,c){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("button",{onClick:r[0]||(r[0]=(...e)=>c.selectHeroes&&c.selectHeroes(...e)),class:"button"},"Compare Heroes"),l.loading?((0,t.wg)(),(0,t.iD)("div",dr,hr)):(0,t.kq)("",!0),(0,t.Wm)(o.uT,{name:"slide-fade"},{default:(0,t.w5)((()=>[null!==l.selectedHeroes.firstHero&&null!==l.selectedHeroes.secondHero?((0,t.wg)(),(0,t.iD)("div",gr,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.selectedHeroes,((e,o)=>((0,t.wg)(),(0,t.iD)("div",{class:"card",key:o},[(0,t._)("div",Hr,[(0,t._)("img",{src:`${e.image.url}`,onError:r[1]||(r[1]=e=>e.target.src=s(3363)),class:"hero-image"},null,40,mr)]),(0,t._)("div",fr,[(0,t._)("h3",_r,(0,H.zw)(e.name),1)]),wr])))),128))])):(0,t.kq)("",!0)])),_:1})],64)}var br={data(){return{superHeroArray:null,selectedHeroes:{firstHero:null,secondHero:null},loading:!1,accessToken:"121270947174101"}},methods:{async getHeroes(){await D().get(""+("https://superheroapi.com/api.php/"+this.accessToken+"/search/a")).then((e=>null==e.data?(console.log("no results"),this.superHeroArray=null):this.superHeroArray=e.data.results)).catch((e=>{console.log(e)}))},async selectHeroes(){this.selectedHeroes.firstHero=null,this.selectedHeroes.secondHero=null;const e=0,r=Math.floor(this.superHeroArray.length-1),s=Math.floor(Math.random()*(r-e+1))+e,o=Math.floor(Math.random()*(r-e+1))+e;await this.getSelectedHeroes(s,o),console.log(this.selectedHeroes.firstHero+this.selectedHeroes.secondHero)},async getSelectedHeroes(e,r){this.loading=!0;let s=[""+("https://superheroapi.com/api.php/"+this.accessToken+"/"+e),""+("https://superheroapi.com/api.php/"+this.accessToken+"/"+r)];D().all(s.map((e=>D().get(e)))).then(D().spread((async(e,r)=>null==e.data?(console.log("no firstHero"),this.firstHero=null):(null==e.data.powerstats.combat?await this.selectHeroes():(this.selectedHeroes.firstHero=e.data,console.log(this.selectedHeroes.firstHero)),null==r.data?(console.log("no firstHero"),this.firstHero=null):(null==r.data.powerstats.combat?await this.selectHeroes():(this.selectedHeroes.secondHero=r.data,console.log(this.selectedHeroes.secondHero)),this.loading=!1,"success")))))},compareHeroes(e,r){if(e&&r){const r=this.superHeroArray.find((r=>r.id===e));console.log(r),console.log(this.firstHero+this.secondHero)}console.log(this.selectedHeroes)}},mounted(){this.getHeroes()}};const kr=(0,u.Z)(br,[["render",vr]]);var yr=kr;const xr=[{path:"/",name:"home",component:O},{path:"/hero/:id",name:"hero",component:ur,props:!0},{path:"/top-trump",name:"top-trump",component:yr,props:!0}],Ar=(0,g.p7)({history:(0,g.PO)("/vue3-hero-finder/"),routes:xr});var zr=Ar;const Tr=(0,n.MT)({state(){return{superHeroes:null}},mutations:{storeHeroes(e,r){e.superHeroes=r}}});(0,o.ri)(h).use(Tr).use(zr).mount("#app")},3363:function(e,r,s){e.exports=s.p+"img/placeholder.26ad5790.jpg"}},r={};function s(o){var n=r[o];if(void 0!==n)return n.exports;var t=r[o]={exports:{}};return e[o](t,t.exports,s),t.exports}s.m=e,function(){var e=[];s.O=function(r,o,n,t){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],t=e[u][2];for(var l=!0,c=0;c<o.length;c++)(!1&t||a>=t)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(l=!1,t<a&&(a=t));if(l){e.splice(u--,1);var i=n();void 0!==i&&(r=i)}}return r}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[o,n,t]}}(),function(){s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,{a:r}),r}}(),function(){s.d=function(e,r){for(var o in r)s.o(r,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){s.p="/vue3-hero-finder/"}(),function(){var e={143:0};s.O.j=function(r){return 0===e[r]};var r=function(r,o){var n,t,a=o[0],l=o[1],c=o[2],i=0;if(a.some((function(r){return 0!==e[r]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)var u=c(s)}for(r&&r(o);i<a.length;i++)t=a[i],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(u)},o=self["webpackChunksuperhero_finder"]=self["webpackChunksuperhero_finder"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(7062)}));o=s.O(o)})();
//# sourceMappingURL=app.2f82aabb.js.map