(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector("#task-form"),u=document.querySelector(".task-list"),c="taskKey";l.addEventListener("submit",a);function a(o){o.preventDefault();const t=o.target.elements.taskName.value.trim();t!==""&&(console.dir(t),f(t),d(t),o.target.reset())}function f(o){const t=`<li>${o}</li>`;u.insertAdjacentHTML("beforeend",t)}function d(o){const t=JSON.parse(localStorage.getItem(c))||[];t.push(o),console.log(t);const s=JSON.stringify(t);localStorage.setItem(c,s)}
//# sourceMappingURL=commonHelpers.js.map
