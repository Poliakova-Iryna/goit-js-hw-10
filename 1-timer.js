import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as D,i as y}from"./assets/vendor-BbbuE1sJ.js";const m=document.querySelector("#datetime-picker"),i=document.querySelector("button[data-start]"),r=document.querySelectorAll(".timer .field .value");let s=null,l=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),i.disabled=!0,s=null):(s=e,i.disabled=!1)}};D(m,v);i.addEventListener("click",()=>{s&&(i.disabled=!0,m.disabled=!0,timeInterval=setInterval(b,1e3))});function b(){const e=s-new Date;if(e<=0){clearInterval(l),l=null,d(0,0,0,0);return}const{days:n,hours:o,minutes:c,seconds:u}=S(e);d(n,o,c,u)}function d(t,e,n,o){r[0].textContent=a(t),r[1].textContent=a(e),r[2].textContent=a(n),r[3].textContent=a(o)}function a(t){return String(t).padStart(2,"0")}function S(t){const u=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:f,minutes:h,seconds:p}}
//# sourceMappingURL=1-timer.js.map
