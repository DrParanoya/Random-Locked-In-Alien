var copyDlyrics=(()=>{var p={en:"Copied to clipboard!",es:"¡Copiado al portapapeles!",ar:"تم النسخ إلى الحافظة!",zh:"已复制到剪贴板！",fr:"Copié dans le presse-papiers !",de:"In die Zwischenablage kopiert!",hi:"क्लिपबोर्ड पर कॉपी किया गया!",it:"Copiato negli appunti!",ja:"クリップボードにコピーされました！",ko:"클립보드에 복사되었습니다!",pt:"Copiado para a área de transferência!",ru:"Скопировано в буфер обмена!",tr:"Panoya kopyalandı!",nl:"Gekopieerd naar het klembord!",sv:"Kopierat till urklipp!",pl:"Skopiowane do schowka!",no:"Kopiert til utklippstavle!",fi:"Kopioitu leikepöydälle!",da:"Kopieret til udklipsholderen!",cs:"Zkopírováno do schránky!",hu:"Vágólapra másolva!",ro:"Copiat în clipboard!",uk:"Скопійовано в буфер обміну!"};var e=async function(){for(;!(null!=Spicetify&&Spicetify.Platform&&null!=Spicetify&&Spicetify.URI&&null!=Spicetify&&Spicetify.showNotification&&null!=Spicetify&&Spicetify.Locale);)await new Promise(e=>setTimeout(e,100));var e=document.createElement("style");e.innerHTML=".lyrics-lyricsContent-lyric::highlight(copy-lyrics-deselection-highlight){background-color:#000}",document.head.appendChild(e);const s=e.sheet.cssRules[0];function n(){var e,t,i;return document.querySelector(".lyrics-lyrics-container")&&(t=window.getSelection())&&!(t.rangeCount<1)&&(e=t.toString().trim(),t=t.getRangeAt(0),e)&&(i=document.querySelector(".os-content:has(.lyrics-lyrics-container)"))&&i.contains(t.commonAncestorContainer)?e:null}let r=!1,a=!1;const t=e=>e.stopPropagation();document.addEventListener("selectionchange",()=>{var e;if(!n())return r=!1,(e=document.querySelector(".lyrics-lyrics-container"))?(e.removeEventListener("click",t,{capture:!0}),void e.classList.remove("copy-lyrics-selecting")):void 0;r||(r=!0,a=!0,(e=document.querySelector(".lyrics-lyrics-container")).classList.add("copy-lyrics-selecting"),CSS.highlights.delete("copy-lyrics-deselection-highlight"),y++,e.addEventListener("click",t,{capture:!0}))});let y=0;function o(){if(a&&document.querySelector(".lyrics-lyrics-container")){var e=n();if(e){Spicetify.Platform.ClipboardAPI.copy(e),a=!1,Spicetify.showNotification(p[Spicetify.Locale.getLocale()]||p.en);var e=window.getSelection(),t=new Highlight(e.getRangeAt(0));CSS.highlights.set("copy-lyrics-deselection-highlight",t),e.empty();const i=[255,255,0,.7],r=[255,255,255,0],o=performance.now(),c=++y,l=()=>{if(c==y){const n=(performance.now()-o)/500;let e;1<=n?e=r:(e=i.map((e,t)=>{return e=e,t=r[t],i=n,e*(1-i)+t*i;var i}),requestAnimationFrame(l)),s.style.backgroundColor=`rgba(${e.join(", ")})`}};requestAnimationFrame(l)}}}window.addEventListener("mouseup",o),document.addEventListener("keyup",e=>{var t,i;e.ctrlKey&&"KeyA"==e.code&&(t=document.querySelector(".lyrics-lyrics-contentContainer"))&&(i=window.getSelection())&&(e.preventDefault(),i.empty(),i.selectAllChildren(t),r=!0,a=!0,o())})};(async()=>{await e()})()})();(async()=>{var e;document.getElementById("copyDlyrics")||((e=document.createElement("style")).id="copyDlyrics",e.textContent=String.raw`
  .lyrics-lyrics-contentContainer:has(.lyrics-lyricsContent-lyric),.lyrics-lyricsContent-lyric,.os-content:has(.lyrics-lyrics-container .lyrics-lyricsContent-lyric){-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important}.lyrics-lyricsContent-description,.lyrics-lyricsContent-provider{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.copy-lyrics-selecting .lyrics-lyricsContent-lyric{cursor:text!important}
      `.trim(),document.head.appendChild(e))})();