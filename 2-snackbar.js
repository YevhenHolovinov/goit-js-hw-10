import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as m}from"./assets/vendor-Dov3POoy.js";const c=document.querySelector(".form");c.addEventListener("submit",a);const i={FULFILLED:"fulfilled",REJECTED:"rejected"};function a(e){e.preventDefault();const o=new FormData(e.target),s=Object.fromEntries(o.entries());f(s).then(({delay:t,state:r})=>{n(t,r)}).catch(({delay:t,state:r})=>{n(t,r)}),e.target.reset()}function f({delay:e,state:o}){return new Promise((s,t)=>{setTimeout(()=>{o===i.FULFILLED?s({delay:e,state:o}):t({delay:e,state:o})},Number(e))})}function n(e,o){const s=o===i.FULFILLED?`✅ Fulfilled promise in ${e}ms`:`❌ Rejected promise in ${e}ms`,t=o===i.FULFILLED?"#b6d7a8":"#EA9999";m.show({icon:!1,backgroundColor:`${t}`,message:`${s}`,messageColor:"black",messageSize:"16",close:!1,displayMode:1})}
//# sourceMappingURL=2-snackbar.js.map
