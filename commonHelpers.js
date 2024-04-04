import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"6515730-7e532fca90fe4fa55f1852c4d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function h(s){return s.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:l,downloads:u})=>`
        <li class="item">
            <a class="image-link" href ="${i}">
                <img class="image" src="${r}" alt="${a}">
            </a>
            <ul class="details">
                <li class="detail-item">
                    <h2 class="detail-title">Likes </h2>
                    <p class="detail-data">${e}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title"> Views</h2>
                    <p class="detail-data">${t}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Comments </h2>
                    <p class="detail-data">${l}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Downloads </h2>
                    <p class="detail-data">${u}</p>
                </li>
            </ul>
        </li>`).join("")}function n(s){m.error({message:s,position:"topRight"})}const p=new d(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".search"),o=document.querySelector(".gallery");c.addEventListener("submit",y);function y(s){s.preventDefault();const r=c.elements.search.value.trim();if(!r){n("Empty input!");return}o.innerHTML='<span class="loader"></span>',f(r).then(i=>{i.total?(o.innerHTML=h(i.hits),p.refresh()):(n("Sorry, there are no images matching your search query. Please try again!"),o.innerHTML=""),c.reset()}).catch(()=>{n("Something went wrong!"),o.innerHTML=""})}
//# sourceMappingURL=commonHelpers.js.map
