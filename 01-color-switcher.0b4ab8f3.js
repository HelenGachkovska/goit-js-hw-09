!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),a=null;function d(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,t.addEventListener("click",(function(n){a=setInterval(d,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(n){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.0b4ab8f3.js.map