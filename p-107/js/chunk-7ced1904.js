import{b as o,f as i,U as n}from"./chunk-19a327d5.js";import{a as r,B as a}from"./app-a93d0564.js";const c=new r,t=new a([]);c.pipe(o(()=>n.getSwitchAccount())).subscribe(({data:s,error:e})=>{s&&t.next(s.rows),e&&t.next([])});i.subscribe(()=>{c.next()});export{c as l,t as u};
//# sourceMappingURL=chunk-7ced1904.js.map
