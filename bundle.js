!function(){"use strict";const e=/((?:not )?all and )?(\(color-index: *(22|48|70)\))/i,t=/prefers-color-scheme:/i,s=(s=>{const a=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)"),c=a&&"(prefers-color-scheme: dark)"===a.media,m=()=>{l(a.matches?"dark":"light")},l=s=>{s!==i&&(i=s,"function"==typeof d.onChange&&d.onChange()),[].forEach.call(document.styleSheets||[],a=>{[].forEach.call(a.cssRules||[],a=>{if(t.test(Object(a.media).mediaText)){const e=[].indexOf.call(a.parentStyleSheet.cssRules,a);a.parentStyleSheet.deleteRule(e)}else{const t=(Object(a.media).mediaText||"").match(e);t&&(a.media.mediaText=((/^dark$/i.test(s)?"48"===t[3]:/^light$/i.test(s)?"70"===t[3]:"22"===t[3])?"not all and ":"")+a.media.mediaText.replace(e,"$2"))}})})},d=Object.defineProperty({hasNativeSupport:c,removeListener:()=>{a&&a.removeListener(m)}},"scheme",{get:()=>i,set:l});let i=s||(a&&a.matches?"dark":"light");return l(i),a&&a.addListener(m),d})(),a=document.querySelector(".theme-toggler"),c=document.body,m=()=>{c.classList.contains("theme-light")&&c.classList.remove("theme-light"),c.classList.add("theme-dark")},l=()=>{c.classList.contains("theme-dark")&&c.classList.remove("theme-dark"),c.classList.add("theme-light")};let d=localStorage.getItem("theme");d&&(s.scheme=d),"dark"===s.scheme?m():l(),a.dataset.mode=s.scheme;a.addEventListener("click",()=>{"dark"===s.scheme?(s.scheme="light",l()):"light"===s.scheme?(s.scheme="dark",m()):l(),localStorage.setItem("theme",s.scheme),a.dataset.mode=s.scheme})}();
