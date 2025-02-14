import{C as _,M as L,N as y,R as h,Ra as V,Sa as N,T as M,Za as m,db as O,e as v,f as u,fb as x,g as C,k as S,l as b,m as A,n as I,q as g,r as w,ra as D,s as k,sa as j,t as o,v as f,w as B,x as E,y as U}from"./chunk-D3EBOOG5.js";var T=["*"],a=class{},F=(()=>{class i extends a{constructor(e){super(),this.http=e}getSvg(e){return this.http.get(e,{responseType:"text"})}}return i.\u0275fac=function(e){return new(e||i)(o(x))},i.\u0275prov=g({token:i,factory:i.\u0275fac}),i})(),R=new k("SERVER_URL"),d=(()=>{class i{constructor(e,t,s,r){this.loader=e,this.platformId=t,this.serverUrl=s,this._document=r,this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map,this.document=this._document}addSvg(e,t){if(!this.iconsByUrl.has(e)){let s=this.document.createElement("DIV");s.innerHTML=t;let r=s.querySelector("svg");this.iconsByUrl.set(e,r)}}loadSvg(e,t=e){if(this.serverUrl&&e.match(/^(http(s)?):/)===null&&(e=this.serverUrl+e,t=e),this.iconsByUrl.has(t))return v(this.iconsByUrl.get(t));if(this.iconsLoadingByUrl.has(t))return this.iconsLoadingByUrl.get(t);let s=this.loader.getSvg(e).pipe(C(r=>{let n=this.document.createElement("DIV");return n.innerHTML=r,n.querySelector("svg")}),I(r=>this.iconsByUrl.set(t,r)),S(r=>(console.error(r),u(r))),b(()=>this.iconsLoadingByUrl.delete(t)),A());return this.iconsLoadingByUrl.set(t,s),s}getSvgByName(e){return this.iconsByUrl.has(e)?v(this.iconsByUrl.get(e)):this.iconsLoadingByUrl.has(e)?this.iconsLoadingByUrl.get(e):u(`No svg with name '${e}' has been loaded`)}unloadSvg(e){this.iconsByUrl.has(e)&&this.iconsByUrl.delete(e)}}return i.\u0275fac=function(e){return new(e||i)(o(a),o(y),o(R,8),o(m,8))},i.\u0275prov=g({token:i,factory:i.\u0275fac}),i})();function H(i,l,e,t,s){return i||new d(l,e,t,s)}var $={provide:d,deps:[[new f,new B,d],a,[y],[new f,R],[new f,m]],useFactory:H},p=class{constructor(){this.loaded=!1}},ee=(()=>{class i{constructor(e,t,s,r,n){this.element=e,this.differs=t,this.renderer=s,this.iconReg=r,this.cdr=n,this.stretch=!1,this.applyClass=!1,this.applyCss=!1,this.helper=new p,this._svgStyle=null}set svgStyle(e){this._svgStyle=e,!this.helper.differ&&e&&(this.helper.differ=this.differs.find(e).create())}ngOnInit(){this.init()}ngOnDestroy(){this.destroy()}ngOnChanges(e){let t=this.element.nativeElement.firstChild;if((e.src||e.name)&&(this.helper.loaded&&this.destroy(),this.init()),e.stretch&&this.stylize(),e.applyClass&&(this.applyClass?this.setClass(t,null,this.klass):this.setClass(t,this.klass,null)),e.svgClass&&this.setClass(t,e.svgClass.previousValue,e.svgClass.currentValue),e.klass){let s=this.element.nativeElement;this.setClass(s,e.klass.previousValue,e.klass.currentValue),this.applyClass?this.setClass(t,e.klass.previousValue,e.klass.currentValue):this.setClass(t,e.klass.previousValue,null)}e.viewBox&&(this.helper.loaded&&this.destroy(),this.init()),e.applyCss&&(console.warn("applyCss deprecated since 9.1.0, will be removed in 10.0.0"),console.warn("use applyClass instead")),e.svgAriaLabel&&this.doAria(e.svgAriaLabel.currentValue)}ngDoCheck(){if(this.helper.svg&&this.helper.differ){let e=this.helper.differ.diff(this._svgStyle);e&&this.applyChanges(e)}}init(){if(this.name){let e=this.iconReg.getSvgByName(this.name);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else if(this.src){let e=this.iconReg.loadSvg(this.src);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else{let e=this.element.nativeElement;e.innerHTML="",this.cdr.markForCheck()}}initSvg(e){!this.helper.loaded&&e&&(this.setSvg(e),this.resetDiffer())}destroy(){this.helper.icnSub&&this.helper.icnSub.unsubscribe(),this.helper=new p}resetDiffer(){this._svgStyle&&!this.helper.differ&&(this.helper.differ=this.differs.find(this._svgStyle).create())}setSvg(e){if(!this.helper.loaded&&e){this.helper.svg=e;let t=e.cloneNode(!0),s=this.element.nativeElement;if(s.innerHTML="",this.renderer.appendChild(s,t),this.helper.loaded=!0,this.copyNgContentAttribute(s,t),this.klass&&this.applyClass&&this.setClass(s.firstChild,null,this.klass),this.svgClass&&this.setClass(s.firstChild,null,this.svgClass),this.viewBox)if(this.viewBox==="auto"){let r=t.getAttribute("width"),n=t.getAttribute("height");if(n&&r){let c=`0 0 ${r} ${n}`;this.renderer.setAttribute(t,"viewBox",c),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height")}}else this.viewBox!==""&&(this.renderer.setAttribute(t,"viewBox",this.viewBox),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"));this.stylize(),this.svgAriaLabel===void 0&&s.firstChild.hasAttribute("aria-label")||this.doAria(this.svgAriaLabel||""),this.cdr.markForCheck()}}copyNgContentAttribute(e,t){let s=e.attributes,r=s.length;for(let n=0;n<r;n+=1){let c=s.item(n);if(c&&c.name.startsWith("_ngcontent")){this.setNgContentAttribute(t,c.name);break}}}setNgContentAttribute(e,t){this.renderer.setAttribute(e,t,"");let s=e.childNodes.length;for(let r=0;r<s;r+=1){let n=e.childNodes[r];n instanceof Element&&this.setNgContentAttribute(n,t)}}stylize(){if(this.helper.svg){let e=this.element.nativeElement.firstChild;this.stretch===!0?this.renderer.setAttribute(e,"preserveAspectRatio","none"):this.stretch===!1&&this.renderer.removeAttribute(e,"preserveAspectRatio")}}applyChanges(e){e.forEachRemovedItem(t=>this.setStyle(t.key,null)),e.forEachAddedItem(t=>this.setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this.setStyle(t.key,t.currentValue))}setStyle(e,t){let[s,r]=e.split(".");t=t!==null&&r?`${t}${r}`:t;let n=this.element.nativeElement.firstChild;t!==null?this.renderer.setStyle(n,s,t):this.renderer.removeStyle(n,s)}setClass(e,t,s){if(e){if(t){let r=(Array.isArray(t)?t:t.split(" ")).filter(n=>n);for(let n of r)this.renderer.removeClass(e,n)}if(s){let r=(Array.isArray(s)?s:s.split(" ")).filter(n=>n);for(let n of r)this.renderer.addClass(e,n)}}}doAria(e){let t=this.element.nativeElement.firstChild;t&&(e===""?(this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.removeAttribute(t,"aria-label")):(this.renderer.removeAttribute(t,"aria-hidden"),this.renderer.setAttribute(t,"aria-label",e)))}}return i.\u0275fac=function(e){return new(e||i)(h(L),h(N),h(M),h(d),h(V))},i.\u0275cmp=E({type:i,selectors:[["svg-icon"]],inputs:{src:"src",name:"name",stretch:"stretch",applyClass:"applyClass",applyCss:"applyCss",svgClass:"svgClass",klass:[0,"class","klass"],viewBox:"viewBox",svgAriaLabel:"svgAriaLabel",svgStyle:"svgStyle"},features:[_],ngContentSelectors:T,decls:1,vars:0,template:function(e,t){e&1&&(D(),j(0))},encapsulation:2}),i})(),te=(()=>{class i{static forRoot(e={}){return{ngModule:i,providers:[$,e.loader||{provide:a,useClass:F}]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=U({type:i}),i.\u0275inj=w({imports:[[O]]}),i})();export{ee as a,te as b};
