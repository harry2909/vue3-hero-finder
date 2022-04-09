(function(){"use strict";var e={7913:function(e,r,n){var t=n(9242),a=n(3396);const s={class:"container"};function o(e,r,n,t,o,u){const l=(0,a.up)("SuperHeroSearch");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(l)])}var u=n(7139);const l=e=>((0,a.dD)("data-v-555d8fb0"),e=e(),(0,a.Cn)(),e),c=l((()=>(0,a._)("h1",{class:"searchHeading"},"Super Hero Search",-1))),i=l((()=>(0,a._)("button",{class:"searchButton"},"Search",-1))),p={key:0,class:"search-message"},h={key:1,class:"cards"},f={class:"card-image"},d=["src"],g={class:"card-intro"},v=l((()=>(0,a._)("br",null,null,-1))),m=(0,a.Uk)(" Appearance: "),w=l((()=>(0,a._)("br",null,null,-1))),b=l((()=>(0,a._)("br",null,null,-1))),_=l((()=>(0,a._)("br",null,null,-1))),k=l((()=>(0,a._)("br",null,null,-1))),y=l((()=>(0,a._)("br",null,null,-1))),H=l((()=>(0,a._)("br",null,null,-1))),O=l((()=>(0,a._)("br",null,null,-1)));function S(e,r,n,s,o,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[c,(0,a._)("form",{class:"searchForm",onSubmit:r[1]||(r[1]=(0,t.iM)(((...e)=>l.searchHero&&l.searchHero(...e)),["prevent"]))},[(0,a.wy)((0,a._)("input",{type:"text",class:"searchInput",placeholder:"Search Hero","onUpdate:modelValue":r[0]||(r[0]=e=>o.searchTerm=e)},null,512),[[t.nr,o.searchTerm]]),i],32),null!==o.resultMessage?((0,a.wg)(),(0,a.iD)("h2",p,(0,u.zw)(o.resultMessage),1)):(0,a.kq)("",!0),null!==o.superHeroes?((0,a.wg)(),(0,a.iD)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.superHeroes,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:"card",key:r},[(0,a._)("div",f,[(0,a._)("img",{src:`${e.image.url}`,class:"hero-image"},null,8,d)]),(0,a._)("div",g,[(0,a.Uk)((0,u.zw)(e.name)+" ",1),v,m,w,(0,a.Uk)(" Eye Colour: "+(0,u.zw)(e.appearance["eye-color"])+" ",1),b,(0,a.Uk)(" Gender: "+(0,u.zw)(e.appearance.gender)+" ",1),_,(0,a.Uk)(" Hair Colour: "+(0,u.zw)(e.appearance["hair-color"])+" ",1),k,(0,a.Uk)(" Height: "+(0,u.zw)(e.appearance.height[0])+" - "+(0,u.zw)(e.appearance.height[1])+" ",1),y,(0,a.Uk)(" Race: "+(0,u.zw)(e.appearance.race)+" ",1),H,(0,a.Uk)(" Weight: "+(0,u.zw)(e.appearance.weight[0])+" - "+(0,u.zw)(e.appearance.weight[1])+" ",1),O])])))),128))])):(0,a.kq)("",!0)],64)}var T=n(6265),z=n.n(T),D={data(){return{superHeroes:null,searchTerm:"",searchTermResultID:{},accessToken:"121270947174101",resultMessage:null}},methods:{async searchHero(){if(""!==this.searchTerm)try{let e=await z()({url:""+("https://superheroapi.com/api.php/"+this.accessToken+"/search/"+this.searchTerm),method:"get",timeout:8e3,headers:{"Content-Type":"application/json"}});return null==e.data.results?(this.resultMessage="No Results Found!",this.superHeroes=null):(this.resultMessage=null,console.log(JSON.parse(JSON.stringify(e.data.results))),this.superHeroes=e.data.results)}catch(e){console.error(e)}else this.resultMessage="No Data Entered!"}}},U=n(89);const M=(0,U.Z)(D,[["render",S],["__scopeId","data-v-555d8fb0"]]);var j=M,C={name:"App",components:{SuperHeroSearch:j}};const x=(0,U.Z)(C,[["render",o]]);var N=x;(0,t.ri)(N).mount("#app")}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(r,t,a,s){if(!t){var o=1/0;for(i=0;i<e.length;i++){t=e[i][0],a=e[i][1],s=e[i][2];for(var u=!0,l=0;l<t.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(u=!1,s<o&&(o=s));if(u){e.splice(i--,1);var c=a();void 0!==c&&(r=c)}}return r}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[t,a,s]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var a,s,o=t[0],u=t[1],l=t[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var i=l(n)}for(r&&r(t);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(i)},t=self["webpackChunksuperhero_finder"]=self["webpackChunksuperhero_finder"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(7913)}));t=n.O(t)})();
//# sourceMappingURL=app.3f562261.js.map