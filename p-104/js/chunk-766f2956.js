import{S as je,i as ze,s as qe,l as Rt,e as _,D as k,C as D,c as h,a as v,F as L,E as O,d,b as o,U as ht,R as vt,g as V,H as c,K as Q,u as Ut,m as Nt,n as Mt,k as le,h as Ft,t as ce,j as Bt,V as la,a2 as lt,aj as it,ak as ia,p as be,q as Ae,r as ge,M as Vt,Q as We,x as Se,X as Ke,y as ne,J as Wt,I as $e,O as ca,G as oa,L as ua}from"./chunk-8f7551c4.js";import{a9 as fa,M as Le,N as Qe,e as De,b4 as Yt,m as Oe,G as mt,c as Pe,cJ as Je,bb as Xe,cK as da,b9 as pa,d as Ze,b as Ue,aY as Ye,j as _a,v as ha,Q as re,b8 as Gt,a$ as va,b5 as ma,W as ba,cL as Aa,be as jt,P as I,L as ga,ax as zt,b1 as Sa,cM as ct,cN as st,k as Ge,b2 as qt,f as Kt,ac as Qt,an as Ea,cO as Ta,bV as ya,s as Re,o as Ia,cP as wa,cQ as $a}from"./chunk-772394bf.js";import{o as Ca,a as Te,B as J,w as Jt,n as ka,f as Ee,m as te,s as Ne,e as La,q as bt}from"./app-6c8af094.js";import{f as Da,a as Oa,i as Xt,s as Pa}from"./chunk-f928d363.js";import{l as se}from"./chunk-8f905c50.js";function Ha(e){return Ca(function(t,a){try{t.subscribe(a)}finally{a.add(e)}})}const At={ContractAccount:"288ebd",SpotAccount:"1b0041",MarginAccount:"3d3f30",InvestmentAccount:"a86cf9",TradingAccount:"4c3ecf",FundingAccount:"9da2b8",ConvertHistory:"00fdfe",LendingAccount:"ed6694",Transfer:"1134f4",Max:"42d3d9",Search:"76a05f",All:"fe2f65"};function Ra(e,t,a){return fa(()=>(t&&t(),e)).pipe(Le({bufferSize:1,refCount:!0}),Ha(()=>{a&&a()}))}const Zt=new Te,xt=new J(null);xt.subscribe(e=>{Jt.send({type:"assets",data:e})});ka.isMock()||Zt.pipe(Qe(200),De(Ua),Ee(Boolean)).subscribe(xt);async function Ua(){const{data:e,error:t}=await Yt.getDataAssetsOverview({includeSub:!1,includeFiat:!0});return t?(Oe.send("toast","error",t),{userId:0,includeSub:!0,includeFiat:!0,usdTotalAssets:"0",usdtTotalAssets:"0",btcTotalAssets:"0",localCurrency:"0",localCcyTotalAssets:"0",timestampMill:"0",expiredTimeMill:"0",details:[]}):e}const ot=Ra(Jt.pipe(Ee(e=>e.type==="assets"),te(e=>e.data.assets),Ne(Na()),Le(1)),()=>{La.isServer||Zt.next()});function Na(){const e={btcEv:0,btc:"--",usdEv:0,usd:"--",money:"--",usdtEv:0,usdt:"--"};return{isInit:!0,...e,localCurrency:"",details:{spot:e,spotMargin:e,spotStrategy:e,contract:e,contractStrategy:e,copyTrade:e,investment:e,fiat:e,lending:e,trading:e,funding:e,spotAll:e,contractAll:e,tradingAll:e,tradingBot:e}}}const Ma=e=>({}),gt=e=>({});function St(e){let t,a,s,n;const u=e[6].default,f=Rt(u,e,e[5],null);return{c(){t=_("div"),f&&f.c(),this.h()},l(l){t=h(l,"DIV",{class:!0});var r=v(t);f&&f.l(r),r.forEach(d),this.h()},h(){o(t,"class","children mt4 svelte-50pawt")},m(l,r){V(l,t,r),f&&f.m(t,null),n=!0},p(l,r){e=l,f&&f.p&&(!n||r&32)&&Ut(f,u,e,e[5],n?Mt(u,e[5],r,null):Nt(e[5]),null)},i(l){n||(le(f,l),lt(()=>{s&&s.end(1),a=it(t,mt,e[2]),a.start()}),n=!0)},o(l){ce(f,l),a&&a.invalidate(),s=ia(t,mt,e[2]),n=!1},d(l){l&&d(t),f&&f.d(l),l&&s&&s.end()}}}function Fa(e){let t,a,s,n,u,f,l,r,i,p;const E=e[6].trigger,S=Rt(E,e,e[5],gt);let b=e[0]&&St(e);return{c(){t=_("div"),a=_("div"),S&&S.c(),s=k(),n=_("i"),u=D(""),f=k(),b&&b.c(),this.h()},l(g){t=h(g,"DIV",{class:!0});var T=v(t);a=h(T,"DIV",{class:!0});var y=v(a);S&&S.l(y),s=L(y),n=h(y,"I",{class:!0});var M=v(n);u=O(M,""),M.forEach(d),y.forEach(d),f=L(T),b&&b.l(T),T.forEach(d),this.h()},h(){o(n,"class","iconfont db f16 svelte-50pawt"),o(a,"class","trigger df aic jcsb svelte-50pawt"),o(t,"class",l=ht(e[1])+" svelte-50pawt"),vt(t,"active",e[0])},m(g,T){V(g,t,T),c(t,a),S&&S.m(a,null),c(a,s),c(a,n),c(n,u),c(t,f),b&&b.m(t,null),r=!0,i||(p=Q(a,"click",e[3]),i=!0)},p(g,[T]){S&&S.p&&(!r||T&32)&&Ut(S,E,g,g[5],r?Mt(E,g[5],T,Ma):Nt(g[5]),gt),g[0]?b?(b.p(g,T),T&1&&le(b,1)):(b=St(g),b.c(),le(b,1),b.m(t,null)):b&&(Ft(),ce(b,1,1,()=>{b=null}),Bt()),(!r||T&2&&l!==(l=ht(g[1])+" svelte-50pawt"))&&o(t,"class",l),(!r||T&3)&&vt(t,"active",g[0])},i(g){r||(le(S,g),le(b),r=!0)},o(g){ce(S,g),ce(b),r=!1},d(g){g&&d(t),S&&S.d(g),b&&b.d(),i=!1,p()}}}function Ba(e,t,a){let{$$slots:s={},$$scope:n}=t;la();const u={duration:200};let{class:f=""}=t,{value:l=""}=t,{active:r=!1}=t;function i(){a(0,r=!r)}return e.$$set=p=>{"class"in p&&a(1,f=p.class),"value"in p&&a(4,l=p.value),"active"in p&&a(0,r=p.active),"$$scope"in p&&a(5,n=p.$$scope)},[r,f,u,i,l,n,s]}class Et extends je{constructor(t){super(),ze(this,t,Ba,Fa,qe,{class:1,value:4,active:0})}}const Va=Pe({fundAccounts:Da,wallets:Je,isUtaSpot:Xe}).pipe(te(({isUtaSpot:e,fundAccounts:t,wallets:a})=>e?t:a),Ne([]),Qe(50),Le(1));Pe({fundAccounts:Oa,wallets:da,isUtaSpot:Xe}).pipe(te(({isUtaSpot:e,fundAccounts:t,wallets:a})=>e?t:a),Ne([]),Qe(50),Le(1));Pe({marginAccounts:pa,wallets:Je,isUtaSpot:Xe}).pipe(te(({isUtaSpot:e,marginAccounts:t,wallets:a})=>e?t:a),Ne([]),Qe(50),Le(1));const Tt=new Te,Wa=new Te,xe=new J(tt()),et=new J([]);new J(null);new J(null);new J(0);new J(0);const Ya=new J([]),Ga=new J([]),ja=new J([]),za=new J("--");Wa.pipe(Ze(Ue),De(e=>qa(e)),te(is)).subscribe(e=>xe.next(e));xe.pipe(te(ls)).subscribe(e=>za.next(e));et.pipe(te(ut)).subscribe(e=>Ya.next(e));et.pipe(te(ts)).subscribe(e=>Ga.next(e));et.pipe(te(ns)).subscribe(e=>ja.next(e));Pe([xe,Ye]).pipe(te(rs)).subscribe(e=>et.next(e));async function qa(e){Tt.next(!0);const{data:t,error:a}=await Xt.getProduct(e);if(Tt.next(!1),t)return t;if(a)return Oe.send("toast","error",a),tt()}const Ka=new Te,Qa=new J([]);Ka.pipe(Ze(Ue),De(()=>Ja())).subscribe(e=>Qa.next(e));async function Ja(){const{data:e,error:t}=await _a.getTasksList();return e?e.rows:(t&&Oe.send("toast","error",t),[])}const Xa=new Te,Za=new J(tt());Xa.pipe(Ze(Ue),De(e=>xa(e))).subscribe(e=>Za.next(e));async function xa(e){const{data:t,error:a}=await Xt.getProductOnly(e);if(t)return t;if(a)return Oe.send("toast","error",a),tt()}function tt(){return{total:0,rows:[]}}new Te;new J(es());function es(){return{id:1,name:"activity",productId:202,beginTime:1630944e6,endTime:1631808e6,minUsdtEv:1e10,minBtcEv:3e5,multiplier:100}}function ut(e){return e.map(t=>{const{currency:a,rateEr:s,userMinLimitEv:n,userMaxLimitEv:u}=t,f=t.poolMaxLimitEv<t.userMaxLimitEv?t.poolMaxLimitEv:t.userMaxLimitEv;return{...t,coinUrl:ha.getUrl(a),rate:re.floor(s,2,6),userMinLimit:a==="USDT"?re.floor(t.userMinLimitEv,0,8):re.parseFloat(n,8,8),calcMaxLimit:a==="USDT"?re.floor(f,0,8):re.parseFloat(f,8,8),calcMaxLimitEv:f}})}function ts(e){const a=e.filter(({calculationPeriodMultiplier:s})=>s===1).map(s=>({...s,ladderApyVos:s.ladderApyVos?s.ladderApyVos.map(n=>({...n,lowerAmount:String(re.delimit(re.floor(n.lowerAmountEv,s.valuePrecision,s.valueScale))).split(".")[0],upperAmount:String(re.delimit(re.floor(n.upperAmountEv,s.valuePrecision,s.valueScale))).split(".")[0],ratio:re.floor(n.ratioEr,2,6)})):[]}));return ut(a)}function as(e,t){const a={productId:t.productId,calculationPeriodMultiplier:t.calculationPeriodMultiplier,rateEr:t.rateEr,valuePrecision:t.valuePrecision};return(e.calculationPeriodList?[...e.calculationPeriodList,a]:[a]).sort((n,u)=>n.calculationPeriodMultiplier-u.calculationPeriodMultiplier)}function ss(e,t,a){if(!e[t.currency]){const s=a.filter(n=>n.currency===t.currency);return s[s.length>1?1:0]}return e[t.currency]}function ns(e){const a=e.filter(({calculationPeriodMultiplier:n})=>n!==1).reduce((n,u,f,l)=>{const r=ss(n,u,l);return r.calculationPeriodList=as(r,u),{...n,[u.currency]:r}},{}),s=Object.values(a).map(n=>n);return ut(s)}function rs([e,t]){return e.rows.reduce((a,s,n)=>{const u=t.find(({currency:f})=>f===s.currency);return u?[...a,{...s,valuePrecision:u.valuePrecision,valueScale:u.valueScale,name:u.name}]:a},[])}function ls(e){const t=e.rows.map(s=>s.rateEr);if(t.length<1)return"--";const a=Math.max(...t);return re.floor(a,2,6)}function is(e){if(e&&e.rows)return{...e,rows:e.rows.map(t=>({...t,productType:t.calculationPeriodMultiplier===1?1:2}))}}const ea=8,ke=2,nt=new J(!0),cs=new Te,at=new J({assetGuide:!0,assetsTrade:!0,hideAsset:!1}),ft=new Te,os=new J([]);ot.pipe(te(({isInit:e})=>!!e));Ue.pipe(Gt(cs),De(e=>ms(e)));const ta=new J([]),aa=new J([]);Pa.subscribe(e=>{const t=e.cfgList.map(s=>s.fromCurrency);if(t.length===0)return;const a=t.reduce((s,n)=>(s.indexOf(n)===-1&&s.push(n),s),[]);ta.next(a)});xe.subscribe(e=>{const{rows:t}=e;if(t.length===0)return;const a=t.filter(s=>s.calculationPeriodMultiplier===1).reduce((s,n)=>(s.indexOf(n.currency)===-1&&s.push(n.currency),s),[]);aa.next(a)});ft.pipe(Ze(Ue),De(e=>bs(e))).subscribe(e=>at.next(e));va.subscribe(()=>na());Oe.subscribe("user-preference","refresh",()=>na());const us=new J(ra()),fs=new J(ra());Je.pipe(te(e=>e.find(t=>t.currency==="BTC")),Ee(Boolean)).subscribe(e=>us.next(e));Je.pipe(te(e=>e.find(t=>t.currency==="USDT")),Ee(Boolean)).subscribe(e=>fs.next(e));const sa=Ye.pipe(Ee(e=>e.length>0),Gt(ma(Pe([Ye,ba]).pipe(te(ds)),ta.pipe(Ee(e=>e.length>0),te(ps)),aa.pipe(Ee(e=>e.length>0),te(_s)),Va.pipe(te(hs))))).pipe(Aa((e,t)=>t(e),[]),Le(1),jt(300),Ne([]));sa.subscribe(e=>{e.length>0&&nt.next(!1)});function ds([e,t]){return function(){return e.filter(a=>!!a.inAssetsDisplay).map(({currency:a,displayCurrency:s,name:n,status:u,valuePrecision:f,depositOpen:l,withdrawOpen:r})=>{const i=0 .toFixed(f),p=vs(a,u,t);return{name:n,currency:a,displayCurrency:s,totalBalance:i,availableBalance:i,availableBalanceEv:0,totalBalanceEv:0,freezeBalance:i,depositLink:I.ASSETS_DEPOSIT.pathname+"?"+bt.stringify({currency:a}),withdrawalLink:I.ASSETS_WITHDRAWAL.pathname+"?"+bt.stringify({currency:a}),earnLink:"",depositOpen:l,withdrawOpen:r,canTransfer:["BTC","ETH","USD","USDT"].indexOf(a)>-1,canConvert:!1,btcEv:0,btc:0 .toFixed(ea),usdEv:0,usd:0 .toFixed(ke),money:0 .toFixed(ke),usdtEv:0,usdt:0 .toFixed(ke),...p}})}}function ps(e){return function(t){return t.map(a=>{const s=e.indexOf(a.currency)>-1;return a.canConvert===s?a:{...a,canConvert:s}})}}function _s(e){return function(t){return t.map(a=>{const s=e.indexOf(a.currency)>-1?I.EARN.pathname:"";return a.earnLink===s?a:{...a,earnLink:s}})}}function hs(e){return function(t){return t.map(a=>{const s=e.find(n=>n.currency===a.currency);return s?{...a,totalBalance:s.totalBalance,availableBalance:s.availableBalance,freezeBalance:s.freezeBalance,totalBalanceEv:s.totalBalanceEv,availableBalanceEv:s.availableBalanceEv}:a})}}function vs(e,t,a){const s=a.find(n=>n.baseCurrency===e||n.quoteCurrency===e);if(s){const n=(["USD","USDT"].indexOf(e)===-1||t!=="Listed")&&s.status==="Listed";return{tradeLink:[ga.PHEMEX_SPOT_TRADE,"/",s.baseCurrency,s.quoteCurrency].join(""),canTrade:n}}return{tradeLink:"",canTrade:!1}}async function ms(e){nt.next(!0);const t={offset:e,limit:10,withCount:!0},{data:a}=await Yt.getMarginTransferList(t);return nt.next(!1),a||[]}async function na(){const{data:e,error:t}=await zt.getPreference();e&&at.next(e),t&&Oe.send("toast","error",t)}async function bs(e){const{data:t}=await zt.updatePreference(e);return t||{}}Pe([sa,Sa,Ye,ct]).pipe(jt(500),te(As),Ee(Boolean)).subscribe(e=>os.next(e));function As([e,t,a,s]){const n=a.find(b=>b.currency==="BTC");if(!n)return null;const u=a.find(b=>b.currency==="USD");if(!u)return null;const f=t.get(".BTC");if(!f)return null;const l=rt(t,s);if(!l)return null;const r=rt(t,"USDT");if(!r)return null;const{valueScale:i,valueFactor:p}=n,{valueScale:E,valueFactor:S}=u;return e.map(b=>{const g=gs(b,t,a,S),T=st.getBalanceEv(g,f.priceEp,S,f.priceFactor,p);if(!r)return;const y=st.getBalanceEv(g,r.priceEp,S,r.priceFactor,S);return{...b,btcEv:T,btc:re.floor(T,ea,i),usdEv:g,usd:re.floor(g,ke,E),money:yt(g,l,ke,E),usdtEv:y,usdt:yt(y,r,ke,E)}})}function gs(e,t,a,s){const{currency:n}=e,u=a.find(l=>l.currency===n);if(!u)return 0;const f=rt(t,n);return f?st.getValueEv(e.totalBalanceEv,f.priceEp,u.valueFactor,f.priceFactor,s):0}function rt(e,t){return e.get("."+t)}function yt(e,t,a,s){return t&&e>0?re.delimit(re.floor(e/t.priceEp,a,s-t.priceScale||0)):0 .toFixed(a)}function ra(){return{isInit:!0,time:0,totalBalanceEv:0,totalBalance:"0.000000000",availableBalanceEv:0,availableBalance:"0.000000000",freezeBalanceEv:0,freezeBalance:"0.000000000"}}const ve={Back:"181b7a",Overview:"0911a4",Assets:"e87531",Deposit:"395fe4",Withdrawal:"733ab7",Funds:"dd3d58",PNLDetail:"4ca89f",OrderHistory:"1f1e07",TradeHistory:"774654",Spot:"225501",PnlHistory:"a451d4",NoData:"6ddbf6",ConversionHistory:"20c0b3",PhemexTR:"bbfb2d",SiteTransfer:"78517c",ToPhemexTR:"f5c28b",MarginHistory:"085c3c",BorrowHistory:"78222a",RepayHistory:"183a6c",InterestHistory:"f897c9",AccountsContract:"033382",SpotAccount:"5f3027",MarginAccount:"9dd672",AccountsInvestment:"991f62",BuyCryptoHistory:"19c134",BuySellHistory:"2e7419",FiatDepositHistory:"47b168",FiatWithdrawHistory:"64fb7e",ContractHistory:"7d62e9",Contract:"24d243",HistoryCenter:"b51ff1",FundsHistory:"ef5e0b",ProofOfReserves:"aced6c",Web3:"cd8514",FiatAccount:"903cd6",BorrowingDetails:"cce2ca",DepositWithdrawHistory:"739797",TransferConvertHistory:"25a673",LendingAccount:"b1fdc0",LoanHistory:"665414",SecuritySettings:"941b9b",AddressManagement:"0d4858"};function Ss(e){let t,a,s,n,u=e[9](se.Deposit)+"",f;return{c(){t=_("i"),a=D(""),s=k(),n=_("span"),f=D(u),this.h()},l(l){t=h(l,"I",{class:!0});var r=v(t);a=O(r,""),r.forEach(d),s=L(l),n=h(l,"SPAN",{});var i=v(n);f=O(i,u),i.forEach(d),this.h()},h(){o(t,"class","iconfont mr4")},m(l,r){V(l,t,r),c(t,a),V(l,s,r),V(l,n,r),c(n,f)},p:$e,d(l){l&&d(t),l&&d(s),l&&d(n)}}}function Es(e){let t,a,s,n,u=e[9](se.Withdraw)+"",f;return{c(){t=_("i"),a=D(""),s=k(),n=_("span"),f=D(u),this.h()},l(l){t=h(l,"I",{class:!0});var r=v(t);a=O(r,""),r.forEach(d),s=L(l),n=h(l,"SPAN",{});var i=v(n);f=O(i,u),i.forEach(d),this.h()},h(){o(t,"class","iconfont mr4")},m(l,r){V(l,t,r),c(t,a),V(l,s,r),V(l,n,r),c(n,f)},p:$e,d(l){l&&d(t),l&&d(s),l&&d(n)}}}function It(e){let t,a,s=e[9](se.MarginAccount)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,target:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_MARGIN_ACCOUNT.pathname)),o(a,"target","_self"),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[11]("Margin_Account")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_MARGIN_ACCOUNT.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function wt(e){let t,a,s=e[9](se.InvestmentAccount)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,target:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_INVESTMENT_ACCOUNT.pathname)),o(a,"target","_self"),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[11]("Investment_Account")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_INVESTMENT_ACCOUNT.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function $t(e){let t,a,s=e[9](se.FiatAccount)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,target:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_FIAT_ACCOUNT.pathname)),o(a,"target","_self"),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[11]("Fiat_Account")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_FIAT_ACCOUNT.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function Ct(e){let t,a,s=e[9](se.LendingAccount)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,target:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_LENDING_ACCOUNT.pathname)),o(a,"target","_self"),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[11]("Lending_Account")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_LENDING_ACCOUNT.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function Ts(e){let t,a,s,n=e[9](se.SpotWallet)+"",u,f,l,r,i,p=e[9](se.ContractAccounnt)+"",E,S,b,g,T,y,M,F,A=e[6]&&It(e),C=e[7]&&wt(e),w=e[5].isMain&&$t(e),$=e[8]&&Ct(e);return{c(){t=_("ul"),a=_("li"),s=_("a"),u=D(n),l=k(),r=_("li"),i=_("a"),E=D(p),b=k(),A&&A.c(),g=k(),C&&C.c(),T=k(),w&&w.c(),y=k(),$&&$.c(),this.h()},l(P){t=h(P,"UL",{class:!0});var m=v(t);a=h(m,"LI",{class:!0});var x=v(a);s=h(x,"A",{href:!0,target:!0,class:!0});var ee=v(s);u=O(ee,n),ee.forEach(d),x.forEach(d),l=L(m),r=h(m,"LI",{class:!0});var W=v(r);i=h(W,"A",{href:!0,target:!0,class:!0});var X=v(i);E=O(X,p),X.forEach(d),W.forEach(d),b=L(m),A&&A.l(m),g=L(m),C&&C.l(m),T=L(m),w&&w.l(m),y=L(m),$&&$.l(m),m.forEach(d),this.h()},h(){o(s,"href",f=e[4](I.ASSETS_SPOT_ACCOUNT.pathname)),o(s,"target","_self"),o(s,"class","svelte-1ayuf0b"),o(a,"class","svelte-1ayuf0b"),o(i,"href",S=e[4](I.ASSETS_CONTRACT_ACCOUNT.pathname)),o(i,"target","_self"),o(i,"class","svelte-1ayuf0b"),o(r,"class","svelte-1ayuf0b"),o(t,"class","children svelte-1ayuf0b")},m(P,m){V(P,t,m),c(t,a),c(a,s),c(s,u),c(t,l),c(t,r),c(r,i),c(i,E),c(t,b),A&&A.m(t,null),c(t,g),C&&C.m(t,null),c(t,T),w&&w.m(t,null),c(t,y),$&&$.m(t,null),M||(F=[Q(s,"click",e[11]("Spot_Wallet")),Q(i,"click",e[11]("Contract_Account"))],M=!0)},p(P,m){m&16&&f!==(f=P[4](I.ASSETS_SPOT_ACCOUNT.pathname))&&o(s,"href",f),m&16&&S!==(S=P[4](I.ASSETS_CONTRACT_ACCOUNT.pathname))&&o(i,"href",S),P[6]?A?A.p(P,m):(A=It(P),A.c(),A.m(t,g)):A&&(A.d(1),A=null),P[7]?C?C.p(P,m):(C=wt(P),C.c(),C.m(t,T)):C&&(C.d(1),C=null),P[5].isMain?w?w.p(P,m):(w=$t(P),w.c(),w.m(t,y)):w&&(w.d(1),w=null),P[8]?$?$.p(P,m):($=Ct(P),$.c(),$.m(t,null)):$&&($.d(1),$=null)},d(P){P&&d(t),A&&A.d(),C&&C.d(),w&&w.d(),$&&$.d(),M=!1,Ke(F)}}}function ys(e){let t,a,s,n,u,f=e[9](se.Account)+"",l;return{c(){t=_("div"),a=_("span"),s=_("i"),n=D(""),u=k(),l=D(f),this.h()},l(r){t=h(r,"DIV",{slot:!0,class:!0});var i=v(t);a=h(i,"SPAN",{class:!0});var p=v(a);s=h(p,"I",{class:!0});var E=v(s);n=O(E,""),E.forEach(d),u=L(p),l=O(p,f),p.forEach(d),i.forEach(d),this.h()},h(){o(s,"class","iconfont f24 mr8"),o(a,"class","df aic"),o(t,"slot","trigger"),o(t,"class","trigger no-padding df aic jcsb svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,s),c(s,n),c(a,u),c(a,l)},p:$e,d(r){r&&d(t)}}}function kt(e){let t,a,s=e[9](ve.MarginHistory)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_MARGIN_HISTORY.pathname)),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[12]("MarginHistory")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_MARGIN_HISTORY.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function Lt(e){let t,a,s=e[9](ve.LoanHistory)+"",n,u,f,l;return{c(){t=_("li"),a=_("a"),n=D(s),this.h()},l(r){t=h(r,"LI",{class:!0});var i=v(t);a=h(i,"A",{href:!0,class:!0});var p=v(a);n=O(p,s),p.forEach(d),i.forEach(d),this.h()},h(){o(a,"href",u=e[4](I.ASSETS_LENDING_HISTORY.pathname)),o(a,"class","svelte-1ayuf0b"),o(t,"class","svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,n),f||(l=Q(a,"click",e[12]("LoanHistory")),f=!0)},p(r,i){i&16&&u!==(u=r[4](I.ASSETS_LENDING_HISTORY.pathname))&&o(a,"href",u)},d(r){r&&d(t),f=!1,l()}}}function Is(e){let t,a,s,n=e[9](ve.Spot)+"",u,f,l,r,i,p,E=e[9](ve.Contract)+"",S,b,g,T,y,M=e[9](ve.BuyCryptoHistory)+"",F,A,C,w,$,P=e[9](ve.FundsHistory)+"",m,x,ee,W,X,ue=e[9](ve.DepositWithdrawHistory)+"",q,U,H,N,Y,ae=e[9](ve.TransferConvertHistory)+"",G,ie,fe,de,pe,j=e[6]&&kt(e),B=e[8]&&Lt(e);return{c(){t=_("ul"),a=_("li"),s=_("a"),u=D(n),l=k(),j&&j.c(),r=k(),i=_("li"),p=_("a"),S=D(E),g=k(),T=_("li"),y=_("a"),F=D(M),C=k(),w=_("li"),$=_("a"),m=D(P),ee=k(),W=_("li"),X=_("a"),q=D(ue),H=k(),N=_("li"),Y=_("a"),G=D(ae),fe=k(),B&&B.c(),this.h()},l(z){t=h(z,"UL",{class:!0});var R=v(t);a=h(R,"LI",{class:!0});var Z=v(a);s=h(Z,"A",{href:!0,class:!0});var K=v(s);u=O(K,n),K.forEach(d),Z.forEach(d),l=L(R),j&&j.l(R),r=L(R),i=h(R,"LI",{class:!0});var _e=v(i);p=h(_e,"A",{href:!0,class:!0});var oe=v(p);S=O(oe,E),oe.forEach(d),_e.forEach(d),g=L(R),T=h(R,"LI",{class:!0});var he=v(T);y=h(he,"A",{href:!0,class:!0});var me=v(y);F=O(me,M),me.forEach(d),he.forEach(d),C=L(R),w=h(R,"LI",{class:!0});var Me=v(w);$=h(Me,"A",{href:!0,class:!0});var He=v($);m=O(He,P),He.forEach(d),Me.forEach(d),ee=L(R),W=h(R,"LI",{class:!0});var Ce=v(W);X=h(Ce,"A",{href:!0,class:!0});var ye=v(X);q=O(ye,ue),ye.forEach(d),Ce.forEach(d),H=L(R),N=h(R,"LI",{class:!0});var Ie=v(N);Y=h(Ie,"A",{href:!0,class:!0});var we=v(Y);G=O(we,ae),we.forEach(d),Ie.forEach(d),fe=L(R),B&&B.l(R),R.forEach(d),this.h()},h(){o(s,"href",f=e[4](I.ASSETS_SPOT_HISTORY.pathname)),o(s,"class","svelte-1ayuf0b"),o(a,"class","svelte-1ayuf0b"),o(p,"href",b=e[4](I.ASSETS_HISTORY.pathname)),o(p,"class","svelte-1ayuf0b"),o(i,"class","svelte-1ayuf0b"),o(y,"href",A=e[4](I.BUY_CRYPTO_HISTORY.pathname)),o(y,"class","svelte-1ayuf0b"),o(T,"class","svelte-1ayuf0b"),o($,"href",x=e[4](I.ASSETS_FUNDS.pathname)),o($,"class","svelte-1ayuf0b"),o(w,"class","svelte-1ayuf0b"),o(X,"href",U=e[4](I.ASSETS_DEPOSIT_WITHDRAW_HISTORY.pathname)),o(X,"class","svelte-1ayuf0b"),o(W,"class","svelte-1ayuf0b"),o(Y,"href",ie=e[4](I.ASSETS_TRANSFER_CONVERT_HISTORY.pathname)),o(Y,"class","svelte-1ayuf0b"),o(N,"class","svelte-1ayuf0b"),o(t,"class","children svelte-1ayuf0b")},m(z,R){V(z,t,R),c(t,a),c(a,s),c(s,u),c(t,l),j&&j.m(t,null),c(t,r),c(t,i),c(i,p),c(p,S),c(t,g),c(t,T),c(T,y),c(y,F),c(t,C),c(t,w),c(w,$),c($,m),c(t,ee),c(t,W),c(W,X),c(X,q),c(t,H),c(t,N),c(N,Y),c(Y,G),c(t,fe),B&&B.m(t,null),de||(pe=[Q(s,"click",e[12]("SpotHistory")),Q(p,"click",e[12]("ContractHistory")),Q(y,"click",e[12]("BuyCryptoHistory")),Q($,"click",e[12]("FundsHistory")),Q(X,"click",e[12]("DepositWithdrawHistory")),Q(Y,"click",e[12]("TransferConvertHistory"))],de=!0)},p(z,R){R&16&&f!==(f=z[4](I.ASSETS_SPOT_HISTORY.pathname))&&o(s,"href",f),z[6]?j?j.p(z,R):(j=kt(z),j.c(),j.m(t,r)):j&&(j.d(1),j=null),R&16&&b!==(b=z[4](I.ASSETS_HISTORY.pathname))&&o(p,"href",b),R&16&&A!==(A=z[4](I.BUY_CRYPTO_HISTORY.pathname))&&o(y,"href",A),R&16&&x!==(x=z[4](I.ASSETS_FUNDS.pathname))&&o($,"href",x),R&16&&U!==(U=z[4](I.ASSETS_DEPOSIT_WITHDRAW_HISTORY.pathname))&&o(X,"href",U),R&16&&ie!==(ie=z[4](I.ASSETS_TRANSFER_CONVERT_HISTORY.pathname))&&o(Y,"href",ie),z[8]?B?B.p(z,R):(B=Lt(z),B.c(),B.m(t,null)):B&&(B.d(1),B=null)},d(z){z&&d(t),j&&j.d(),B&&B.d(),de=!1,Ke(pe)}}}function ws(e){let t,a,s,n,u,f=e[9](ve.HistoryCenter)+"",l;return{c(){t=_("div"),a=_("span"),s=_("i"),n=D(""),u=k(),l=D(f),this.h()},l(r){t=h(r,"DIV",{slot:!0,class:!0});var i=v(t);a=h(i,"SPAN",{class:!0});var p=v(a);s=h(p,"I",{class:!0});var E=v(s);n=O(E,""),E.forEach(d),u=L(p),l=O(p,f),p.forEach(d),i.forEach(d),this.h()},h(){o(s,"class","iconfont f24 mr8"),o(a,"class","df aic"),o(t,"slot","trigger"),o(t,"class","trigger no-padding df aic jcsb svelte-1ayuf0b")},m(r,i){V(r,t,i),c(t,a),c(a,s),c(s,n),c(a,u),c(a,l)},p:$e,d(r){r&&d(t)}}}function $s(e){let t,a,s,n,u,f=e[9](se.TotalAssets)+"",l,r,i,p,E,S,b,g,T,y,M,F,A,C,w,$,P,m,x,ee,W,X,ue,q,U,H,N,Y,ae=e[9](ve.ProofOfReserves)+"",G,ie,fe,de,pe,j,B,z,R;return A=new Ge({props:{class:"btn ",size:"small",type:"common",newRadius:!0,$$slots:{default:[Ss]},$$scope:{ctx:e}}}),A.$on("click",e[13]),w=new Ge({props:{class:"btn noa",size:"small",type:"common",newRadius:!0,disabled:!e[5].roles.includes(10),$$slots:{default:[Es]},$$scope:{ctx:e}}}),w.$on("click",e[20]),m=new Et({props:{$$slots:{trigger:[ys],default:[Ts]},$$scope:{ctx:e}}}),W=new Et({props:{class:"mt8",$$slots:{trigger:[ws],default:[Is]},$$scope:{ctx:e}}}),{c(){t=_("div"),a=_("div"),s=_("div"),n=_("div"),u=_("div"),l=D(f),r=k(),i=_("i"),p=k(),E=_("div"),S=D(e[1]),b=k(),g=_("div"),T=D("≈ "),y=D(e[2]),M=k(),F=_("div"),be(A.$$.fragment),C=k(),be(w.$$.fragment),$=k(),P=_("div"),be(m.$$.fragment),x=k(),ee=_("ul"),be(W.$$.fragment),X=k(),ue=_("li"),q=_("a"),U=_("span"),H=_("i"),N=D(""),Y=k(),G=D(ae),ie=k(),fe=_("i"),de=D(""),this.h()},l(Z){t=h(Z,"DIV",{class:!0});var K=v(t);a=h(K,"DIV",{class:!0});var _e=v(a);s=h(_e,"DIV",{class:!0});var oe=v(s);n=h(oe,"DIV",{class:!0});var he=v(n);u=h(he,"DIV",{class:!0});var me=v(u);l=O(me,f),me.forEach(d),r=L(he),i=h(he,"I",{class:!0});var Me=v(i);Me.forEach(d),he.forEach(d),p=L(oe),E=h(oe,"DIV",{class:!0});var He=v(E);S=O(He,e[1]),He.forEach(d),b=L(oe),g=h(oe,"DIV",{class:!0});var Ce=v(g);T=O(Ce,"≈ "),y=O(Ce,e[2]),Ce.forEach(d),oe.forEach(d),M=L(_e),F=h(_e,"DIV",{class:!0});var ye=v(F);Ae(A.$$.fragment,ye),C=L(ye),Ae(w.$$.fragment,ye),ye.forEach(d),_e.forEach(d),$=L(K),P=h(K,"DIV",{class:!0});var Ie=v(P);Ae(m.$$.fragment,Ie),x=L(Ie),ee=h(Ie,"UL",{});var we=v(ee);Ae(W.$$.fragment,we),X=L(we),ue=h(we,"LI",{class:!0});var dt=v(ue);q=h(dt,"A",{class:!0,href:!0,target:!0});var Fe=v(q);U=h(Fe,"SPAN",{class:!0});var Be=v(U);H=h(Be,"I",{class:!0});var pt=v(H);N=O(pt,""),pt.forEach(d),Y=L(Be),G=O(Be,ae),Be.forEach(d),ie=L(Fe),fe=h(Fe,"I",{class:!0});var _t=v(fe);de=O(_t,""),_t.forEach(d),Fe.forEach(d),dt.forEach(d),we.forEach(d),Ie.forEach(d),K.forEach(d),this.h()},h(){o(u,"class","total f14 svelte-1ayuf0b"),o(i,"class","eyes iconfont ml4 f20 T2 usn svelte-1ayuf0b"),o(n,"class","df aic lh20"),o(E,"class","asset-btc mt16 f18 lh20 fw4 svelte-1ayuf0b"),o(g,"class","asset-local mt8 f14 T3 svelte-1ayuf0b"),o(s,"class","ph24 pv16 cp"),o(F,"class","btn-con df aic jcsb f16 ph24 mb16 svelte-1ayuf0b"),o(a,"class","header db fw2 svelte-1ayuf0b"),o(H,"class","iconfont f24 mr10"),o(U,"class","df aic"),o(fe,"class","iconfont arrow db f16 svelte-1ayuf0b"),o(q,"class","df jcsb aic svelte-1ayuf0b"),o(q,"href",pe=e[4](I.CHECK_ACCOUNT.pathname)),o(q,"target","_self"),o(ue,"class","trigger mt8 svelte-1ayuf0b"),o(P,"class","p16 lh32 wsn f14"),o(t,"class","wrap T2")},m(Z,K){V(Z,t,K),c(t,a),c(a,s),c(s,n),c(n,u),c(u,l),c(n,r),c(n,i),i.innerHTML=e[3],c(s,p),c(s,E),c(E,S),c(s,b),c(s,g),c(g,T),c(g,y),c(a,M),c(a,F),ge(A,F,null),c(F,C),ge(w,F,null),c(t,$),c(t,P),ge(m,P,null),c(P,x),c(P,ee),ge(W,ee,null),c(ee,X),c(ee,ue),c(ue,q),c(q,U),c(U,H),c(H,N),c(U,Y),c(U,G),c(q,ie),c(q,fe),c(fe,de),B=!0,z||(R=[Q(i,"click",Vt(e[10])),Q(s,"click",e[19]),Q(q,"click",e[11]("Proof_Of_Reserves"))],z=!0)},p(Z,[K]){e=Z,(!B||K&8)&&(i.innerHTML=e[3]),(!B||K&2)&&We(S,e[1]),(!B||K&4)&&We(y,e[2]);const _e={};K&2097152&&(_e.$$scope={dirty:K,ctx:e}),A.$set(_e);const oe={};K&32&&(oe.disabled=!e[5].roles.includes(10)),K&2097152&&(oe.$$scope={dirty:K,ctx:e}),w.$set(oe);const he={};K&2097648&&(he.$$scope={dirty:K,ctx:e}),m.$set(he);const me={};K&2097488&&(me.$$scope={dirty:K,ctx:e}),W.$set(me),(!B||K&16&&pe!==(pe=e[4](I.CHECK_ACCOUNT.pathname)))&&o(q,"href",pe)},i(Z){B||(le(A.$$.fragment,Z),le(w.$$.fragment,Z),le(m.$$.fragment,Z),le(W.$$.fragment,Z),j||lt(()=>{j=it(t,qt,e[0]?{x:-220,duration:200}:{}),j.start()}),B=!0)},o(Z){ce(A.$$.fragment,Z),ce(w.$$.fragment,Z),ce(m.$$.fragment,Z),ce(W.$$.fragment,Z),B=!1},d(Z){Z&&d(t),Se(A),Se(w),Se(m),Se(W),z=!1,Ke(R)}}}function Dt(e,t,a){return t?"****** "+a:e+" "+a}function Cs(e,t,a){let s,n,u,f,l,r,i,p,E,S,b,g;ne(e,at,m=>a(16,l=m)),ne(e,ct,m=>a(17,r=m)),ne(e,ot,m=>a(18,i=m)),ne(e,Kt,m=>a(4,p=m)),ne(e,Qt,m=>a(5,E=m)),ne(e,Ea,m=>a(6,S=m)),ne(e,Ta,m=>a(7,b=m)),ne(e,ya,m=>a(8,g=m));let{useTransition:T=!1}=t;const y=Wt("LG");function M(m){m.preventDefault(),ft.next({name:"hideAsset",operation:!l.hideAsset})}function F(m){return function(){Re.track("web_click",{$screen_name:"Home",$element_content:"Assets_"+m})}}function A(m){return function(){Re.track("web_click",{$screen_name:"HistoryCenter",$element_content:m})}}function C(){Re.track("web_click",{$screen_name:"Home",$element_content:"Assets_Deposit"}),Ia({LG:y})}function w(){Re.track("web_click",{$screen_name:"home_assets",$element_content:"withdraw_click_homeassets"})}const $=()=>location.assign(p(I.ASSETS_OVERVIEW.pathname)),P=()=>{location.assign(p(I.ASSETS_WITHDRAWAL.pathname)),w()};return e.$$set=m=>{"useTransition"in m&&a(0,T=m.useTransition)},e.$$.update=()=>{e.$$.dirty&65536&&a(15,s=l.hideAsset),e.$$.dirty&32768&&a(3,n=s?"&#xe61a;":"&#xe61b;"),e.$$.dirty&294912&&a(2,u=Dt(i.btc,s,"BTC")),e.$$.dirty&425984&&a(1,f=Dt(i.money,s,r))},[T,f,u,n,p,E,S,b,g,y,M,F,A,C,w,s,l,r,i,$,P]}class ks extends je{constructor(t){super(),ze(this,t,Cs,$s,qe,{useTransition:0})}}const Ve={AccountUpgrading:"9425bb",AccountUpgrade:"67b708"};function Ot(e,t,a){const s=e.slice();return s[16]=t[a],s}function Ls(e){let t,a,s,n,u=e[6](se.Deposit)+"",f;return{c(){t=_("i"),a=D(""),s=k(),n=_("span"),f=D(u),this.h()},l(l){t=h(l,"I",{class:!0});var r=v(t);a=O(r,""),r.forEach(d),s=L(l),n=h(l,"SPAN",{});var i=v(n);f=O(i,u),i.forEach(d),this.h()},h(){o(t,"class","iconfont mr4")},m(l,r){V(l,t,r),c(t,a),V(l,s,r),V(l,n,r),c(n,f)},p:$e,d(l){l&&d(t),l&&d(s),l&&d(n)}}}function Ds(e){let t,a,s,n,u=e[6](se.Withdraw)+"",f;return{c(){t=_("i"),a=D(""),s=k(),n=_("span"),f=D(u),this.h()},l(l){t=h(l,"I",{class:!0});var r=v(t);a=O(r,""),r.forEach(d),s=L(l),n=h(l,"SPAN",{});var i=v(n);f=O(i,u),i.forEach(d),this.h()},h(){o(t,"class","iconfont mr4")},m(l,r){V(l,t,r),c(t,a),V(l,s,r),V(l,n,r),c(n,f)},p:$e,d(l){l&&d(t),l&&d(s),l&&d(n)}}}function Pt(e){let t,a,s,n,u,f,l,r=e[16].label+"",i,p,E,S,b,g,T;return{c(){t=_("li"),a=_("a"),s=_("span"),n=_("img"),f=k(),l=_("span"),i=D(r),p=k(),E=_("i"),S=D(""),b=k(),this.h()},l(y){t=h(y,"LI",{class:!0});var M=v(t);a=h(M,"A",{class:!0,href:!0});var F=v(a);s=h(F,"SPAN",{class:!0});var A=v(s);n=h(A,"IMG",{class:!0,width:!0,src:!0,alt:!0}),f=L(A),l=h(A,"SPAN",{});var C=v(l);i=O(C,r),C.forEach(d),A.forEach(d),p=L(F),E=h(F,"I",{class:!0});var w=v(E);S=O(w,""),w.forEach(d),F.forEach(d),b=L(M),M.forEach(d),this.h()},h(){o(n,"class","default dib mr8"),o(n,"width","24"),oa(n.src,u=e[16].icon)||o(n,"src",u),o(n,"alt",e[16].label),o(s,"class","df aic"),o(E,"class","iconfont arrow db f16 svelte-1f3g7kd"),o(a,"class","df jcsb aic svelte-1f3g7kd"),o(a,"href",e[16].link),o(t,"class","trigger svelte-1f3g7kd")},m(y,M){V(y,t,M),c(t,a),c(a,s),c(s,n),c(s,f),c(s,l),c(l,i),c(a,p),c(a,E),c(E,S),c(t,b),g||(T=Q(a,"click",e[9](e[16].sdType)),g=!0)},p(y,M){e=y},d(y){y&&d(t),g=!1,T()}}}function Os(e){let t,a,s,n,u,f=e[6](se.TotalAssets)+"",l,r,i,p,E,S=(e[4]?e[6](Ve.AccountUpgrading):e[0])+"",b,g,T,y=(e[4]?e[6](Ve.AccountUpgrading):`≈ ${e[1]}`)+"",M,F,A,C,w,$,P,m,x,ee,W,X,ue;C=new Ge({props:{class:"btn noa fw3",size:"small",type:"common",newRadius:!0,href:e[3](I.ASSETS_DEPOSIT.pathname),$$slots:{default:[Ls]},$$scope:{ctx:e}}}),C.$on("click",e[9]("Deposit")),$=new Ge({props:{class:"btn noa fw3",size:"small",type:"common",newRadius:!0,href:e[3](I.ASSETS_WITHDRAWAL.pathname),disabled:e[5].isSub,$$slots:{default:[Ds]},$$scope:{ctx:e}}}),$.$on("click",e[9]("Withdraw"));let q=e[7],U=[];for(let H=0;H<q.length;H+=1)U[H]=Pt(Ot(e,q,H));return{c(){t=_("div"),a=_("div"),s=_("div"),n=_("div"),u=_("div"),l=D(f),r=k(),i=_("i"),p=k(),E=_("div"),b=D(S),g=k(),T=_("div"),M=D(y),F=k(),A=_("div"),be(C.$$.fragment),w=k(),be($.$$.fragment),P=k(),m=_("div"),x=_("ul");for(let H=0;H<U.length;H+=1)U[H].c();this.h()},l(H){t=h(H,"DIV",{class:!0});var N=v(t);a=h(N,"DIV",{class:!0});var Y=v(a);s=h(Y,"DIV",{class:!0});var ae=v(s);n=h(ae,"DIV",{class:!0});var G=v(n);u=h(G,"DIV",{class:!0});var ie=v(u);l=O(ie,f),ie.forEach(d),r=L(G),i=h(G,"I",{class:!0});var fe=v(i);fe.forEach(d),G.forEach(d),p=L(ae),E=h(ae,"DIV",{class:!0});var de=v(E);b=O(de,S),de.forEach(d),g=L(ae),T=h(ae,"DIV",{class:!0});var pe=v(T);M=O(pe,y),pe.forEach(d),ae.forEach(d),F=L(Y),A=h(Y,"DIV",{class:!0});var j=v(A);Ae(C.$$.fragment,j),w=L(j),Ae($.$$.fragment,j),j.forEach(d),Y.forEach(d),P=L(N),m=h(N,"DIV",{class:!0});var B=v(m);x=h(B,"UL",{});var z=v(x);for(let R=0;R<U.length;R+=1)U[R].l(z);z.forEach(d),B.forEach(d),N.forEach(d),this.h()},h(){o(u,"class","total f14 svelte-1f3g7kd"),o(i,"class","eyes iconfont ml4 f20 T2 usn svelte-1f3g7kd"),o(n,"class","df aic lh20"),o(E,"class","asset-btc mt16 f20 lh20 fw4 svelte-1f3g7kd"),o(T,"class","asset-local mt8 f14 T3 svelte-1f3g7kd"),o(s,"class","ph24 pv16 cp"),o(A,"class","btn-con df aic jcsb f16 ph24 mb16 svelte-1f3g7kd"),o(a,"class","header db fw2 svelte-1f3g7kd"),o(m,"class","p16 lh32 wsn f14"),o(t,"class","wrap T2 svelte-1f3g7kd")},m(H,N){V(H,t,N),c(t,a),c(a,s),c(s,n),c(n,u),c(u,l),c(n,r),c(n,i),i.innerHTML=e[2],c(s,p),c(s,E),c(E,b),c(s,g),c(s,T),c(T,M),c(a,F),c(a,A),ge(C,A,null),c(A,w),ge($,A,null),c(t,P),c(t,m),c(m,x);for(let Y=0;Y<U.length;Y+=1)U[Y].m(x,null);W=!0,X||(ue=[Q(i,"click",Vt(e[8])),Q(s,"click",e[14])],X=!0)},p(H,[N]){e=H,(!W||N&4)&&(i.innerHTML=e[2]),(!W||N&17)&&S!==(S=(e[4]?e[6](Ve.AccountUpgrading):e[0])+"")&&We(b,S),(!W||N&18)&&y!==(y=(e[4]?e[6](Ve.AccountUpgrading):`≈ ${e[1]}`)+"")&&We(M,y);const Y={};N&8&&(Y.href=e[3](I.ASSETS_DEPOSIT.pathname)),N&524288&&(Y.$$scope={dirty:N,ctx:e}),C.$set(Y);const ae={};if(N&8&&(ae.href=e[3](I.ASSETS_WITHDRAWAL.pathname)),N&32&&(ae.disabled=e[5].isSub),N&524288&&(ae.$$scope={dirty:N,ctx:e}),$.$set(ae),N&640){q=e[7];let G;for(G=0;G<q.length;G+=1){const ie=Ot(e,q,G);U[G]?U[G].p(ie,N):(U[G]=Pt(ie),U[G].c(),U[G].m(x,null))}for(;G<U.length;G+=1)U[G].d(1);U.length=q.length}},i(H){W||(le(C.$$.fragment,H),le($.$$.fragment,H),ee||lt(()=>{ee=it(t,qt,{delay:0,duration:200,easing:wa,x:-220,y:0,opacity:0}),ee.start()}),W=!0)},o(H){ce(C.$$.fragment,H),ce($.$$.fragment,H),W=!1},d(H){H&&d(t),Se(C),Se($),ca(U,H),X=!1,Ke(ue)}}}function Ht(e,t,a){return t?"****** "+a:e+" "+a}function Ps(e,t,a){let s,n,u,f,l,r,i,p,E,S;ne(e,at,A=>a(11,l=A)),ne(e,ct,A=>a(12,r=A)),ne(e,ot,A=>a(13,i=A)),ne(e,Kt,A=>a(3,p=A)),ne(e,$a,A=>a(4,E=A)),ne(e,Qt,A=>a(5,S=A));const b={fundsIcon:"https://img.phemex.com/v1/6349a723-0651-4ab5-89ce-38b5e21a9621/funds-icon.png",orderHistoryIcon:"https://img.phemex.com/v1/a4f7bbd9-bc1e-4071-9c9e-19a3af5c6c29/order-history-icon.png",borrowDetailsIcon:"https://img.phemex.com/v1/41887cc6-db84-46fc-a75a-d35e6c7e90bf/borrow-details-icon.png",fundAccountIcon:"https://img.phemex.com/v1/5b32bc79-a5a5-482d-a21f-1e0df7456d13/fund-account-icon.png",contractAccountIcon:"https://img.phemex.com/v1/a7590609-2cc1-4875-b9c9-5e5d0bbad549/contract-account-icon.png",tradingAccountIcon:"https://img.phemex.com/v1/5bc7f549-fcff-49d4-85bd-1741c006db51/trading-account-icon.png",tradingAccountIconActive:"https://img.phemex.com/v1/377b6512-d8a3-4b7d-9df5-0b7b4d311968/trading-account-icon-active.png",fundAccountIconActive:"https://img.phemex.com/v1/7e107069-1f5b-45d1-a713-f1ed2221cf15/fund-account-icon-active.png",contractAccountIconActive:"https://img.phemex.com/v1/49e4fed5-0224-441e-8ebe-fb0a9a680289/contract-account-icon-active.png",fundsIconActive:"https://img.phemex.com/v1/a967fe39-176f-40bd-aad2-b3e7aad98168/funds-icon-active.png",orderHistoryIconActive:"https://img.phemex.com/v1/7b991a53-f120-41ed-971d-a60ca2e9a806/order-history-icon-active.png",borrowDetailsIconActive:"https://img.phemex.com/v1/82c3af36-83f7-4430-946b-49a7871592b8/borrow-details-icon-active.png"},g=Wt("LG"),T=[{link:p(I.ASSETS_TRADING_ACCOUNT.pathname),sdType:"Trading_Account",icon:b.tradingAccountIcon,iconActive:b.tradingAccountIconActive,label:g(At.TradingAccount)},{link:p(I.ASSETS_FUND_ACCOUNT.pathname),sdType:"Fund_Account",icon:b.fundAccountIcon,iconActive:b.fundAccountIconActive,label:g(At.FundingAccount)},{link:p(I.ASSETS_CONTRACT_ACCOUNT.pathname),sdType:"Contract_Account",icon:b.contractAccountIcon,iconActive:b.contractAccountIconActive,label:g(se.ContractAccount)},{link:p(I.ASSETS_FUNDS.pathname),sdType:"Funds",icon:b.fundsIcon,iconActive:b.fundsIconActive,label:g(se.FundDetails)},{link:p(I.ASSETS_ORDER_HISTORY_GROUP.pathname),sdType:"Order_History",icon:b.orderHistoryIcon,iconActive:b.orderHistoryIconActive,label:g(se.OrderHistory)}];function y(A){A.preventDefault(),ft.next({name:"hideAsset",operation:!l.hideAsset})}function M(A){return function(){Re.track("web_click",{$screen_name:"Trade/Contract",$element_content:"Assets_"+A})}}const F=()=>location.assign(p(I.ASSETS_OVERVIEW.pathname));return e.$$.update=()=>{e.$$.dirty&2048&&a(10,s=l.hideAsset),e.$$.dirty&1024&&a(2,n=s?"&#xe61a;":"&#xe61b;"),e.$$.dirty&9216&&a(1,u=Ht(i.btc,s,"BTC")),e.$$.dirty&13312&&a(0,f=Ht(i.money,s,r))},[f,u,n,p,E,S,g,T,y,M,s,l,r,i,F]}class Hs extends je{constructor(t){super(),ze(this,t,Ps,Os,qe,{})}}function Rs(e){let t,a;return t=new ks({props:{useTransition:e[0]}}),{c(){be(t.$$.fragment)},l(s){Ae(t.$$.fragment,s)},m(s,n){ge(t,s,n),a=!0},p(s,n){const u={};n&1&&(u.useTransition=s[0]),t.$set(u)},i(s){a||(le(t.$$.fragment,s),a=!0)},o(s){ce(t.$$.fragment,s),a=!1},d(s){Se(t,s)}}}function Us(e){let t,a;return t=new Hs({}),{c(){be(t.$$.fragment)},l(s){Ae(t.$$.fragment,s)},m(s,n){ge(t,s,n),a=!0},p:$e,i(s){a||(le(t.$$.fragment,s),a=!0)},o(s){ce(t.$$.fragment,s),a=!1},d(s){Se(t,s)}}}function Ns(e){let t,a,s,n;const u=[Us,Rs],f=[];function l(r,i){return r[1]?0:1}return a=l(e),s=f[a]=u[a](e),{c(){t=_("div"),s.c(),this.h()},l(r){t=h(r,"DIV",{class:!0});var i=v(t);s.l(i),i.forEach(d),this.h()},h(){o(t,"class","wrap svelte-1p6edie")},m(r,i){V(r,t,i),f[a].m(t,null),n=!0},p(r,[i]){let p=a;a=l(r),a===p?f[a].p(r,i):(Ft(),ce(f[p],1,1,()=>{f[p]=null}),Bt(),s=f[a],s?s.p(r,i):(s=f[a]=u[a](r),s.c()),le(s,1),s.m(t,null))},i(r){n||(le(s),n=!0)},o(r){ce(s),n=!1},d(r){r&&d(t),f[a].d()}}}function Ms(e,t,a){let s;ne(e,Xe,u=>a(1,s=u));let n=!1;return ua(()=>setTimeout(()=>{a(0,n=!0)})),[n,s]}class Gs extends je{constructor(t){super(),ze(this,t,Ms,Ns,qe,{})}}export{Gs as default};
//# sourceMappingURL=chunk-766f2956.js.map
