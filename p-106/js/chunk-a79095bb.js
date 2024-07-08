import{a as o,bC as i,n}from"./chunk-a092f8ee.js";import{S as r,B as a}from"./app-7c71c7a1.js";const c=new r,t=new a([]);c.pipe(o(()=>n.getSwitchAccount())).subscribe(({data:s,error:e})=>{s&&t.next(s.rows),e&&t.next([])});i.subscribe(()=>{c.next()});export{c as l,t as u};
//# sourceMappingURL=chunk-a79095bb.js.map
