var sectionDmarker=(()=>{var l,r=300,d=e=>e[0].toUpperCase()+e.slice(1),a=document.createElement("div"),i=(a.classList.add("section-marker-element","section-marker-sections"),document.createElement("div")),m=(i.classList.add("section-marker-element","section-marker-markers"),!1);async function t(){if(m)throw new Error("Interface has already been injected!");m=!0,n=".playback-bar .progress-bar",o=document.body,c=!(s=5e3);var n,o,s,c,e=(l=await new Promise((t,e)=>{let r;0<s&&(r=setTimeout(()=>{if(c)return e("Did not find element after timeout.");console.warn("waitForElm has waited for",s," for selector",n,"within",o,"but it has not yet been found.")},s));var a=o.querySelector(n);if(a)return t(a);const i=new MutationObserver(()=>{var e=o.querySelector(n);if(e)return i.disconnect(),clearTimeout(r),t(e)});i.observe(o,{childList:!0,subtree:!0})})).querySelector(".x-progressBar-sliderArea");function t(){l.style.setProperty("--section-marker-playbar-height",l.clientHeight+"px"),l.style.setProperty("--section-marker-playbar-width",l.clientWidth+"px"),l.classList[l.clientWidth<r?"add":"remove"]("section-marker-playbar-below-marker-width")}l.classList.add("section-marker-no-data"),e.appendChild(a),e.appendChild(i),t(),new ResizeObserver(t).observe(l)}function n(){l.classList.remove("section-marker-loading-data","section-marker-had-no-data","section-marker-less-than-two-sections"),l.classList.add("section-marker-no-data")}var k={start:(e,t)=>e.sections[t].start,duration:(e,t)=>e.sections[t].duration,index:(e,t)=>t};var o=15e3;function s(e){e=Spicetify.URI.from(e);return e&&e.type===Spicetify.URI.Type.TRACK}var u=0,e=null;function c(t){if(t!==e){e=t;const c=++u;s(t)?(l.classList[l.classList.contains("section-marker-no-data")?"add":"remove"]("section-marker-had-no-data"),l.classList.add("section-marker-loading-data"),Spicetify.getAudioData(t).then(e=>{if(c===u){var i=e;var t=l.querySelector(".section-marker-markers"),r=l.querySelector(".section-marker-sections");const o=Array.from(t.querySelectorAll(".section-marker-marker")),s=Array.from(r.querySelectorAll(".section-marker-section"));l.classList[i.sections.length<2?"add":"remove"]("section-marker-less-than-two-sections");for(let e=o.length;e<i.sections.length;e++){var a=document.createElement("div"),n=(a.classList.add("section-marker-marker"),document.createElement("div"));n.classList.add("section-marker-section"),[a,n].forEach(e=>e.classList.add("section-marker-not-exists")),t.appendChild(a),r.appendChild(n),o.push(a),s.push(n)}requestAnimationFrame(()=>{var e=i.track.duration.toString();l.style.setProperty("--section-marker-data-track-duration",e),l.dataset.sectionMarkerDataTrackDuration=e,l.classList.remove("section-marker-loading-data"),l.classList.contains("section-marker-no-data")&&(l.classList.remove("section-marker-no-data"),l.classList.add("section-marker-had-no-data"));for(let a=0;a<i.sections.length;a++)[o[a],s[a]].forEach(e=>{e.classList.remove("section-marker-not-exists");for(var[t,r]of Object.entries(k)){r=r(i,a).toString();e.dataset["sectionMarkerData"+d(t)]=r,e.style.setProperty("--section-marker-data-"+t,r)}});for(let e=i.sections.length;e<o.length;e++)[o[e],s[e]].forEach(e=>e.classList.add("section-marker-not-exists"))})}}).catch(e=>{console.warn("SECTION-MARKER: Failed to get audio data for",t,e),c===u&&n()})):n()}}var p=null,y=0;var f=async function(){for(var e;!(null!=(e=null==Spicetify?void 0:Spicetify.Player)&&e.data&&null!=Spicetify&&Spicetify.URI&&null!=Spicetify&&Spicetify.Locale&&null!=Spicetify&&Spicetify.CosmosAsync&&null!=Spicetify&&Spicetify.React);)await new Promise(e=>setTimeout(e,100));await t(),Spicetify.Player.addEventListener("onprogress",()=>{var e=(e=Spicetify.Player.origin.getState()).hasContext&&e.item.uri||null;c(e),Spicetify.Player.getDuration()-Spicetify.Player.getProgress()<1e4&&(e=null==(e=null==(e=Spicetify.Queue.nextTracks[0])?void 0:e.contextTrack)?void 0:e.uri,p==e||Date.now()-y<o||!s(e)||(p=e,y=Date.now(),Spicetify.getAudioData(e)))})};(async()=>{await f()})()})();(async()=>{var e;document.getElementById("sectionDmarker")||((e=document.createElement("style")).id="sectionDmarker",e.textContent=String.raw`
  .playback-bar .progress-bar{--section-marker-marker-color:rgb(255 255 255 / 0.8);--section-marker-marker-size:4px}.section-marker-disabled .section-marker-element,.section-marker-less-than-two-sections .section-marker-element,.section-marker-loading-data.section-marker-had-no-data .section-marker-element,.section-marker-no-data .section-marker-element{opacity:0;transition-duration:.1s}.section-marker-loading-data .section-marker-element{opacity:.1}.section-marker-no-markers .section-marker-markers,.section-marker-playbar-below-marker-width .section-marker-markers{display:none}.section-marker-had-no-data .section-marker-marker,.section-marker-had-no-data .section-marker-section{transition:none}.section-marker-element{position:absolute;top:0;left:0;width:100%;height:100%;transition-property:opacity;transition-duration:.5s;transition-timing-function:ease-in-out;direction:ltr;pointer-events:none}.section-marker-marker{width:var(--section-marker-marker-size);height:var(--section-marker-playbar-height);position:absolute;top:50%;left:calc(var(--section-marker-data-start)/ var(--section-marker-data-track-duration) * 100%);transform:translate(-50%,-50%);background-color:var(--section-marker-marker-color);transition-property:left,opacity;transition-duration:.5s;transition-timing-function:ease-in-out}.section-marker-marker.section-marker-not-exists{left:100%;opacity:0}.section-marker-marker:first-child{display:none}.section-marker-sections{overflow-x:hidden;display:flex;flex-direction:row;position:absolute}.section-marker-section{width:calc(var(--section-marker-data-duration)/ var(--section-marker-data-track-duration) * 100%);height:100%;flex-shrink:0;transition:width .5s ease-in-out}.section-marker-section:last-child{width:100%}.section-marker-section.section-marker-not-exists{width:0}.section-marker-section:nth-child(2n){-webkit-backdrop-filter:contrast(0.6) invert(0.1);backdrop-filter:contrast(0.6) invert(0.1)}
      `.trim(),document.head.appendChild(e))})();