(()=>{function d(e,t,n){let u=t*n;return e*u}var v=137e3,m,l,p=.24,s=0,E=document.getElementById("roi-calculator"),o=document.getElementById("next"),a=document.getElementById("previous"),i=document.getElementById("submit"),f=document.getElementById("money-saved-input"),L=()=>{o.addEventListener("click",e),o.addEventListener("touchstart",e),i.addEventListener("click",r),i.addEventListener("touchstart",r),a.addEventListener("click",c),a.addEventListener("touchstart",c);function e(t){t.preventDefault(),s+=1,y();let n=document.getElementById("number-of-employees");m=parseFloat(n.value)}};function r(e){let t=B(E,l);m&&(l=d(p,m,v)),f.setAttribute("value",`${l}`),l&&b(l)}function c(e){e.preventDefault(),s-=1,y()}function b(e){let t=document.getElementById("money-saved");t.textContent=e.toLocaleString()||""}function y(){s==0?(a.style.display="none",o.style.display="flex"):s===3?(a.style.display="flex",o.style.display="none"):(a.style.display="flex",o.style.display="flex")}function B(e,t){let n=document.getElementById("number-of-employees");if(n){let u=parseFloat(n.value);return isNaN(u)?null:u}return null}document.addEventListener("DOMContentLoaded",L);})();
//# sourceMappingURL=index.js.map
