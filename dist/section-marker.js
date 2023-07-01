var sectionDmarker=(()=>{var i={svg:"http://www.w3.org/2000/svg",path:"http://www.w3.org/2000/svg"};function h(e,t,...r){if("function"==typeof e)return e(t,...r);var a=t.xmlns||i[e]||"http://www.w3.org/1999/xhtml";const n=document.createElementNS(a,e);return Object.entries(t||{}).forEach(([e,t])=>{(e="className"===e?"class":e).startsWith("on")&&e.toLowerCase()in window?n.addEventListener(e.toLowerCase().substring(2),t):n.setAttribute(e,String(t))}),r.forEach(e=>{!function t(r,e){Array.isArray(e)?e.forEach(e=>t(r,e)):r.append(e)}(n,e)}),n}var e=async function(){for(var e,a,t,r,i,n,o,s,c,d;!(null!=(e=null==Spicetify?void 0:Spicetify.Player)&&e.data&&null!=Spicetify&&Spicetify.URI&&null!=Spicetify&&Spicetify.Locale&&null!=Spicetify&&Spicetify.CosmosAsync&&null!=Spicetify&&Spicetify.React);)await new Promise(e=>setTimeout(e,100));const m={start:(e,t)=>e.sections[t].start,duration:(e,t)=>e.sections[t].duration,index:(e,t)=>t};function l(t){k.classList[k.classList.contains("section-marker-no-data")?"add":"remove"]("section-marker-had-no-data");const r=Spicetify.URI.from(t);r&&"track"===r.type?(k.classList.add("section-marker-loading-data"),Spicetify.getAudioData(t).then(o=>{var t=k.querySelector(".section-marker-markers"),r=k.querySelector(".section-marker-sections");const a=Array.from(t.querySelectorAll(".section-marker-marker")),n=Array.from(r.querySelectorAll(".section-marker-section"));for(let e=a.length;e<o.sections.length;e++){var i=h("div",{className:"section-marker-marker"}),s=h("div",{className:"section-marker-section"});[i,s].forEach(e=>e.classList.add("section-marker-not-exists")),t.appendChild(i),r.appendChild(s),a.push(i),n.push(s)}requestAnimationFrame(()=>{var e=o.track.duration.toString();k.style.setProperty("--section-marker-data-track-duration",e),k.dataset.sectionMarkerDataTrackDuration=e,k.classList.remove("section-marker-loading-data"),k.classList.contains("section-marker-no-data")&&(k.classList.remove("section-marker-no-data"),k.classList.add("section-marker-had-no-data"));for(let i=0;i<o.sections.length;i++)[a[i],n[i]].forEach(e=>{e.classList.remove("section-marker-not-exists");for(const[a,n]of Object.entries(m)){var t=n(o,i).toString();e.dataset["sectionMarkerData"+((r=a)[0].toUpperCase()+r.slice(1))]=t,e.style.setProperty("--section-marker-data-"+a,t)}var r});for(let e=o.sections.length;e<a.length;e++)[a[e],n[e]].forEach(e=>e.classList.add("section-marker-not-exists"))})}).catch(e=>{console.warn("SECTION-MARKER: Failed to get audio data:",e,"for",t,r),k.classList.remove("section-marker-loading-data","section-marker-had-no-data"),k.classList.add("section-marker-no-data")})):k.classList.add("section-marker-no-data")}const k=h("div",{className:"section-marker-container section-marker-no-data"},h("div",{className:"section-marker-sections"}),h("div",{className:"section-marker-markers"}));function u(n){r(n),i&&new MutationObserver((e,t)=>{for(const r of e)for(const a of r.removedNodes)if(a===n)return t.disconnect(),void i(n)}).observe(n.parentNode,{childList:!0})}[a,t=document.body,r,i]=[".playback-progressbar > .progress-bar",(o=".main-nowPlayingBar-center",s=document.body,d=!(c=5e3),await new Promise((t,e)=>{let r;0<c&&(r=setTimeout(()=>{if(d)return e("Did not find element after timeout.");console.warn("waitForElm has waited for",c," for selector",o,"within",s,"but it has not yet been found.")},c));var a=s.querySelector(o);if(a)return t(a);const n=new MutationObserver(()=>{var e=s.querySelector(o);if(e)return n.disconnect(),clearTimeout(r),t(e)});n.observe(s,{childList:!0,subtree:!0})})),e=>{e.appendChild(k)}],(n=t.querySelector(a))&&u(n),new MutationObserver(e=>{for(const t of e)for(const r of t.addedNodes)r instanceof HTMLElement&&r.querySelectorAll(a).forEach(u)}).observe(t,{childList:!0,subtree:!0});let f=null,p=null;Spicetify.Player.addEventListener("onprogress",()=>{var e=Spicetify.Player.origin.getState(),t=e.hasContext&&(null==(t=null==(t=Spicetify.Player.data)?void 0:t.track)?void 0:t.uri)||null;e.hasContext&&Spicetify.Player.getDuration()-Spicetify.Player.getProgress()<1e4&&(e=null==(e=null==(e=Spicetify.Queue.nextTracks[0])?void 0:e.contextTrack)?void 0:e.uri)&&e!==p&&(p=e,Spicetify.getAudioData(e)),t!=f&&l(f=t)})};(async()=>{await e()})()})();(async()=>{var e;document.getElementById("sectionDmarker")||((e=document.createElement("style")).id="sectionDmarker",e.textContent=String.raw`
  .section-marker-container{pointer-events:none;position:absolute;width:100%;height:100%;container-name:section-marker-container;container-type:inline-size;transition-property:opacity;transition-duration:.5s;transition-timing-function:ease-in-out;--section-marker-marker-color:rgb(255 255 255 / 0.8)}.section-marker-container.section-marker-loading-data.section-marker-had-no-data,.section-marker-container.section-marker-no-data{opacity:0;transition-duration:.1s}.section-marker-container.section-marker-loading-data{opacity:.1}.section-marker-container>.section-marker-markers>.section-marker-marker{width:4px;height:100%;position:absolute;top:0;left:calc(var(--section-marker-data-start)/ var(--section-marker-data-track-duration) * 100%);transform:translateX(-50%);background-color:var(--section-marker-marker-color);transition-property:left,opacity;transition-duration:.5s;transition-timing-function:ease-in-out}.section-marker-container>.section-marker-markers>.section-marker-marker.section-marker-not-exists{left:100%;opacity:0}.section-marker-container>.section-marker-markers>.section-marker-marker:first-child{display:none}.section-marker-container>.section-marker-sections{overflow-x:hidden;direction:ltr;display:flex;flex-direction:row;position:absolute;width:100%;height:var(--progress-bar-height);top:50%;transform:translateY(-50%);border-radius:var(--progress-bar-radius)}.section-marker-container>.section-marker-sections>.section-marker-section{width:calc(var(--section-marker-data-duration)/ var(--section-marker-data-track-duration) * 100%);height:100%;flex-shrink:0;transition:width .5s ease-in-out}.section-marker-container>.section-marker-sections>.section-marker-section:last-child{width:100%}.section-marker-container>.section-marker-sections>.section-marker-section.section-marker-not-exists{width:0}.section-marker-container>.section-marker-sections>.section-marker-section:nth-child(2n){-webkit-backdrop-filter:contrast(0.6) invert(0.1);backdrop-filter:contrast(0.6) invert(0.1)}.section-marker-container.section-marker-had-no-data>.section-marker-markers>.section-marker-marker{transition:none}.section-marker-container.section-marker-had-no-data>.section-marker-sections>.section-marker-section{transition:none}@container section-marker-container (max-width:300px){.section-marker-markers{display:none}}
      `.trim(),document.head.appendChild(e))})();