import{a as ie}from"./chunk-54CGRIOD.js";import{a as ne,b as re}from"./chunk-2IZELCUF.js";import{Aa as s,Ba as S,C as U,Ca as f,Da as X,F as A,G as D,Ia as x,J as H,K as R,L as a,Ma as C,N as _,Oa as P,Pa as Q,Q as l,R as b,V as B,W as $,Y as w,Ya as q,_ as p,bb as G,c as j,cb as Y,eb as J,fb as K,gb as W,ha as i,hb as ee,ia as n,ib as te,ja as d,q as L,r as h,t as T,tb as k,u as M,x as u,xa as V,y as g,ya as z}from"./chunk-3AFXCYAS.js";import{e as Z}from"./chunk-6MDQTQU3.js";var ue=["chart"],se=(()=>{class r{constructor(){this.chart=a(),this.annotations=a(),this.colors=a(),this.dataLabels=a(),this.series=a(),this.stroke=a(),this.labels=a(),this.legend=a(),this.markers=a(),this.noData=a(),this.fill=a(),this.tooltip=a(),this.plotOptions=a(),this.responsive=a(),this.xaxis=a(),this.yaxis=a(),this.forecastDataPoints=a(),this.grid=a(),this.states=a(),this.title=a(),this.subtitle=a(),this.theme=a(),this.autoUpdateSeries=a(!0),this.chartReady=R(),this.chartInstance=B(null),this.chartElement=$.required("chart"),this.ngZone=M(H),this.isBrowser=ee(M(_))}ngOnChanges(e){this.isBrowser&&this.ngZone.runOutsideAngular(()=>{j.schedule(()=>this.hydrate(e))})}ngOnDestroy(){this.destroy()}hydrate(e){if(this.autoUpdateSeries()&&Object.keys(e).filter(o=>o!=="series").length===0){this.updateSeries(this.series(),!0);return}this.createElement()}createElement(){return Z(this,null,function*(){let{default:e}=yield import("./chunk-LY27RTDF.js");window.ApexCharts||=e;let t={};["annotations","chart","colors","dataLabels","series","stroke","labels","legend","fill","tooltip","plotOptions","responsive","markers","noData","xaxis","yaxis","forecastDataPoints","grid","states","title","subtitle","theme"].forEach(c=>{let y=this[c]();y&&(t[c]=y)}),this.destroy();let m=this.ngZone.runOutsideAngular(()=>new e(this.chartElement().nativeElement,t));this.chartInstance.set(m),this.render(),this.chartReady.emit({chartObj:m})})}render(){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.render())}updateOptions(e,t,o,m){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateOptions(e,t,o,m))}updateSeries(e,t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateSeries(e,t))}appendSeries(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendSeries(e,t))}appendData(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendData(e))}highlightSeries(e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.highlightSeries(e))}toggleSeries(e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleSeries(e))}showSeries(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.showSeries(e))}hideSeries(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.hideSeries(e))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.resetSeries())}zoomX(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.zoomX(e,t))}toggleDataPointSelection(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleDataPointSelection(e,t))}destroy(){this.chartInstance()?.destroy(),this.chartInstance.set(null)}setLocale(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.setLocale(e))}paper(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.paper())}addXaxisAnnotation(e,t,o){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addXaxisAnnotation(e,t,o))}addYaxisAnnotation(e,t,o){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addYaxisAnnotation(e,t,o))}addPointAnnotation(e,t,o){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addPointAnnotation(e,t,o))}removeAnnotation(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.removeAnnotation(e,t))}clearAnnotations(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.clearAnnotations(e))}dataURI(e){return this.chartInstance()?.dataURI(e)}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=u({type:r,selectors:[["apx-chart"]],viewQuery:function(t,o){t&1&&V(o.chartElement,ue,5),t&2&&z()},inputs:{chart:[1,"chart"],annotations:[1,"annotations"],colors:[1,"colors"],dataLabels:[1,"dataLabels"],series:[1,"series"],stroke:[1,"stroke"],labels:[1,"labels"],legend:[1,"legend"],markers:[1,"markers"],noData:[1,"noData"],fill:[1,"fill"],tooltip:[1,"tooltip"],plotOptions:[1,"plotOptions"],responsive:[1,"responsive"],xaxis:[1,"xaxis"],yaxis:[1,"yaxis"],forecastDataPoints:[1,"forecastDataPoints"],grid:[1,"grid"],states:[1,"states"],title:[1,"title"],subtitle:[1,"subtitle"],theme:[1,"theme"],autoUpdateSeries:[1,"autoUpdateSeries"]},outputs:{chartReady:"chartReady"},standalone:!0,features:[U,x],decls:2,vars:0,consts:[["chart",""]],template:function(t,o){t&1&&d(0,"div",null,0)},encapsulation:2,changeDetection:0})}}return r})();var oe=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=g({type:r})}static{this.\u0275inj=h({})}}return r})();var fe=["nft-chart-card",""],ae=(()=>{class r{constructor(e){this.themeService=e;let t="#FFFFFF",o=[2100,3200,3200,2400,2400,1800,1800,2400,2400,3200,3200,3e3,3e3,3250,3250],m=["10AM","10.30AM","11AM","11.15AM","11.30AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM"];this.chartOptions={series:[{name:"Etherium",data:o}],chart:{fontFamily:"inherit",type:"area",height:150,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.2,stops:[15,120,100]}},stroke:{curve:"smooth",show:!0,width:3,colors:[t]},xaxis:{categories:m,labels:{show:!1},crosshairs:{position:"front",stroke:{color:t,width:1,dashArray:4}},tooltip:{enabled:!0}},tooltip:{theme:"light",y:{formatter:function(c){return c+"$"}}},colors:[t]},q(()=>{let c=getComputedStyle(document.documentElement).getPropertyValue("--primary");c=this.HSLToHex(c),this.chartOptions.tooltip={theme:this.themeService.theme().mode},this.chartOptions.colors=[c],this.chartOptions.stroke.colors=[c],this.chartOptions.xaxis.crosshairs.stroke.color=c})}HSLToHex(e){let o=e.split("%").join("").split(" ").map(Number),m={h:o[0],s:o[1],l:o[2]},{h:c,s:y,l:ce}=m,E=ce/100,me=y*Math.min(E,1-E)/100,I=pe=>{let N=(pe+c/30)%12,he=E-me*Math.max(Math.min(N-3,9-N,1),-1);return Math.round(255*he).toString(16).padStart(2,"0")};return`#${I(0)}${I(8)}${I(4)}`}ngOnInit(){}ngOnDestroy(){}static{this.\u0275fac=function(t){return new(t||r)(b(ie))}}static{this.\u0275cmp=u({type:r,selectors:[["","nft-chart-card",""]],standalone:!0,features:[x],attrs:fe,decls:64,vars:15,consts:[[1,"flex-col","rounded-lg","bg-background","px-8","py-8","sm:flex-row"],[1,"mb-2","flex","items-center","justify-between"],[1,"flex-col"],[1,"flex","items-center","space-x-1"],[1,"text-lg","font-semibold","text-muted-foreground"],[1,"text-4xl","font-semibold","text-foreground"],[1,"flex","items-center","rounded-md","bg-green-500/25","py-1","pr-2","pl-1","text-xs","font-semibold","text-green-500"],["src","assets/icons/heroicons/outline/arrow-sm-up.svg",3,"svgClass"],[1,"text-sm","text-muted-foreground"],[1,"cursor-pointer","rounded-sm","bg-card","px-1","py-1","text-center","text-xs","text-muted-foreground","hover:bg-muted","hover:text-foreground"],["src","assets/icons/heroicons/outline/dots-horizontal.svg",3,"svgClass"],[1,"mb-3","grid","grid-cols-5","items-center","justify-between","gap-2","text-center"],[1,"cursor-pointer","rounded-md","bg-primary","p-0.5","text-sm","text-primary-foreground","hover:bg-primary"],[1,"cursor-pointer","rounded-md","p-0.5","text-sm","text-gray-400","hover:bg-primary","hover:text-primary-foreground"],[3,"series","chart","legend","dataLabels","fill","stroke","xaxis","yaxis","states","tooltip","colors","grid","title"],[1,"mt-2","w-full","table-auto","text-sm"],[1,"py-2"],[1,"text-sm","font-semibold","text-muted-foreground"],[1,"py-2","text-right"],[1,"text-sm","font-semibold","text-foreground"],[1,"text-sm","font-semibold","text-rose-600"],[1,"text-sm","font-semibold","text-green-500"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),s(5,"$"),n(),i(6,"span",5),s(7,"3,274.94"),n(),i(8,"div",6),d(9,"svg-icon",7),s(10," 9.2% "),n()(),i(11,"span",8),s(12,"Etherium rate"),n()(),i(13,"div",9),d(14,"svg-icon",10),n()(),i(15,"div",11)(16,"div",12),s(17,"1d"),n(),i(18,"div",13),s(19," 5d "),n(),i(20,"div",13),s(21," 1m "),n(),i(22,"div",13),s(23," 6m "),n(),i(24,"div",13),s(25," 1y "),n()(),d(26,"apx-chart",14),i(27,"table",15)(28,"thead")(29,"tr"),d(30,"th")(31,"th")(32,"th"),n()(),i(33,"tbody")(34,"tr")(35,"td",16)(36,"a",17),s(37,"2:30 PM"),n()(),i(38,"td",18)(39,"span",19),s(40,"$2,756.26"),n()(),i(41,"td",18)(42,"span",20),s(43,"-139.34"),n()()(),i(44,"tr")(45,"td",16)(46,"a",17),s(47,"3:10 PM"),n()(),i(48,"td",18)(49,"span",19),s(50,"$3,207.03"),n()(),i(51,"td",18)(52,"span",21),s(53,"+576.24"),n()()(),i(54,"tr")(55,"td",16)(56,"a",17),s(57,"3:55 PM"),n()(),i(58,"td",18)(59,"span",19),s(60,"$3,274.94"),n()(),i(61,"td",18)(62,"span",21),s(63,"+124.03"),n()()()()()()),t&2&&(l(9),p("svgClass","h-4 w-4"),l(5),p("svgClass","h-3 w-3"),l(12),p("series",o.chartOptions.series)("chart",o.chartOptions.chart)("legend",o.chartOptions.legend)("dataLabels",o.chartOptions.dataLabels)("fill",o.chartOptions.fill)("stroke",o.chartOptions.stroke)("xaxis",o.chartOptions.xaxis)("yaxis",o.chartOptions.yaxis)("states",o.chartOptions.states)("tooltip",o.chartOptions.tooltip)("colors",o.chartOptions.colors)("grid",o.chartOptions.grid)("title",o.chartOptions.title))},dependencies:[re,ne,oe,se],encapsulation:2})}}return r})();var le=(()=>{class r{constructor(e){this.http=e,this.apiUrl="http://localhost:8080/api/cards"}getUserCards(e){return this.http.get(`${this.apiUrl}/user/${e}`)}static{this.\u0275fac=function(t){return new(t||r)(T(te))}}static{this.\u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function ve(r,O){r&1&&d(0,"img",57)}function ye(r,O){r&1&&d(0,"img",58)}function be(r,O){if(r&1&&(i(0,"div",28)(1,"div",29)(2,"aside",30)(3,"label",31),s(4),C(5,"slice"),C(6,"slice"),n(),i(7,"label",32),s(8),n(),i(9,"label",33),s(10),n(),w(11,ve,1,0,"img",34)(12,ye,1,0,"img",35),i(13,"div",36),A(),i(14,"svg",37),d(15,"use",38),n()(),i(16,"svg",39),d(17,"use",40),n()()(),D(),i(18,"div",41)(19,"div")(20,"small",42),s(21,"Card Holder:"),n(),i(22,"h2",43),s(23),n()(),i(24,"div",44)(25,"div",45)(26,"div",46)(27,"small",47),s(28,"Expiration Date"),n(),i(29,"a",48),s(30),n()()(),i(31,"div",45)(32,"div",49)(33,"span",50),s(34),n()(),i(35,"div",46)(36,"small",47),s(37,"Currency"),n(),i(38,"a",48),s(39),n()()()(),i(40,"div",51)(41,"small",52),s(42,"Balance"),n(),i(43,"h1",53),s(44),C(45,"currency"),n()(),i(46,"div",54)(47,"button",55),s(48),n(),i(49,"button",56),s(50," View Details "),n()()()()),r&2){let e=O.$implicit;l(4),X(" ",Q(5,12,e.cardNumber,0,4)," **** **** ",P(6,16,e.cardNumber,-4)," "),l(4),f(" ",e.cardHolder," "),l(2),f(" ",e.expirationDate," "),l(),p("ngIf",e.cardType==="MASTERCARD"),l(),p("ngIf",e.cardType==="VISA"),l(11),S(e.cardHolder),l(7),f(" ",e.expirationDate," "),l(4),S(e.currency),l(5),f(" ",e.currency," "),l(5),S(P(45,19,e.balance,e.currency)),l(4),f(" ",e.status," ")}}var F=(()=>{class r{constructor(e){this.cardService=e,this.user=null,this.userCards=[],this.photo="./assets/images/img-01.jpg"}ngOnInit(){this.loadUser(),this.user&&this.loadCards()}loadUser(){let e=localStorage.getItem("user");e&&(this.user=JSON.parse(e))}loadCards(){this.cardService.getUserCards(this.user.id).subscribe(e=>{this.userCards=e,console.log("User cards:",this.userCards)},e=>{console.error("Error fetching cards:",e)})}static{this.\u0275fac=function(t){return new(t||r)(b(le))}}static{this.\u0275cmp=u({type:r,selectors:[["app-dashboard"]],standalone:!0,features:[x],decls:36,vars:1,consts:[[1,"mb-4","flex","justify-between"],[1,"inline-block"],[1,"font-semibold","text-foreground"],[1,"space-x-1","text-xs","font-medium","text-muted-foreground"],["href","",1,"hover:text-primary"],[1,"inline-block","space-x-4"],[1,"flex-none","rounded-md","bg-muted","px-4","py-2.5","text-xs","font-semibold","text-muted-foreground","hover:text-foreground"],[1,"flex-none","rounded-md","bg-primary","px-4","py-2.5","text-xs","font-semibold","text-primary-foreground"],[1,"grid","grid-cols-1","gap-4","md:grid-cols-1","lg:grid-cols-1","xl:grid-cols-1"],["class","flex min-h-[420px] flex-col rounded-lg bg-background p-8 sm:flex-row",4,"ngFor","ngForOf"],["id","chip"],["id","chip-lines"],["points","0,50 35,50"],["points","0,20 20,20 35,35"],["points","50,0 50,35"],["points","65,35 80,20 100,20"],["points","100,50 65,50"],["points","35,35 65,35 65,65 35,65 35,35"],["points","0,80 20,80 35,65"],["points","50,100 50,65"],["points","65,65 80,80 100,80"],["id","contactless"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M9.172 15.172a4 4 0 0 1 5.656 0"],["d","M6.343 12.343a8 8 0 0 1 11.314 0"],["d","M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"],["nft-chart-card","",1,"md:col-span-2","xl:col-span-1"],["nft-auctions-table","",1,"md:col-span-2","xl:col-span-3"],[1,"flex","min-h-[420px]","flex-col","rounded-lg","bg-background","p-8","sm:flex-row"],[1,"min-h-[200px]","w-full","flex-1","rounded-md"],[1,"card-front"],["for","cardNumber",1,"number"],["for","cardHolder",1,"name"],["for","expiryMonth",1,"expiry"],["class","cardLogo","src","https://simey-credit-card.netlify.app/img/logos/master.svg",4,"ngIf"],["class","cardLogo","src","https://simey-credit-card.netlify.app/img/logos/visa.svg",4,"ngIf"],[1,"chip"],["role","img","viewBox","0 0 100 100","aria-label","Chip"],["href","#chip-lines"],["role","img","viewBox","0 0 24 24","aria-label","Contactless",1,"contactless"],["href","#contactless"],[1,"mt-4","flex","flex-1","flex-col","justify-between","space-y-2","sm:ml-6","md:mt-0"],[1,"font-semibold","text-muted-foreground"],[1,"text-2xl","font-semibold","text-foreground"],[1,"flex","space-x-8"],[1,"flex","items-center","space-x-2"],[1,"flex","flex-col"],[1,"text-xs","text-muted-foreground"],["href","",1,"text-xs","font-semibold","text-foreground","hover:text-primary"],[1,"flex","h-7","w-7","flex-shrink-0","items-center","justify-center","rounded-full","bg-primary","text-center"],[1,"text-xs","font-semibold","text-primary-foreground"],[1,"rounded-md","border","border-dashed","border-border","p-4","text-center"],[1,"text-muted-foreground"],[1,"text-3xl","font-semibold","text-foreground"],[1,"flex","items-center","justify-between"],[1,"hover:bg-primary-600","flex-none","rounded-md","bg-primary","px-4","py-2.5","text-xs","font-semibold","text-primary-foreground"],[1,"lex-none","rounded-md","bg-card","px-4","py-2.5","text-xs","font-semibold","text-muted-foreground","hover:bg-muted","hover:text-foreground"],["src","https://simey-credit-card.netlify.app/img/logos/master.svg",1,"cardLogo"],["src","https://simey-credit-card.netlify.app/img/logos/visa.svg",1,"cardLogo"]],template:function(t,o){t&1&&(i(0,"div")(1,"div",0)(2,"div",1)(3,"h3",2),s(4,"NFTs Dashboard"),n(),i(5,"div",3)(6,"a",4),s(7,"Dashboards"),n(),i(8,"span"),s(9," - NFTs"),n()()(),i(10,"div",5)(11,"button",6),s(12," Manage Bids "),n(),i(13,"button",7),s(14," Manage Bids "),n()()(),i(15,"div",8),w(16,be,51,22,"div",9),n(),A(),i(17,"svg",10)(18,"g",11),d(19,"polyline",12)(20,"polyline",13)(21,"polyline",14)(22,"polyline",15)(23,"polyline",16)(24,"polyline",17)(25,"polyline",18)(26,"polyline",19)(27,"polyline",20),n()(),i(28,"svg",21),d(29,"path",22)(30,"path",23)(31,"path",24)(32,"path",25),n(),s(33,"> "),D(),d(34,"div",26)(35,"div",27),n()),t&2&&(l(16),p("ngForOf",o.userCards))},dependencies:[ae,W,G,Y,K,J]})}}return r})();var Se=[{path:"",component:F,children:[{path:"",redirectTo:"nfts",pathMatch:"full"},{path:"nfts",component:F},{path:"**",redirectTo:"errors/404"}]}],de=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=g({type:r})}static{this.\u0275inj=h({imports:[k.forChild(Se),k]})}}return r})();var Qe=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=g({type:r})}static{this.\u0275inj=h({imports:[de]})}}return r})();export{Qe as DashboardModule};
