import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as D,i as y}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("#datetime-picker"),s=document.querySelector("button[data-start]"),r=document.querySelectorAll(".timer .field .value");let i=null,c=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),s.disabled=!0,i=null):(i=e,s.disabled=!1)}};D(l,b);s.addEventListener("click",()=>{i&&(s.disabled=!0,l.disabled=!0,c=setInterval(v,1e3))});function v(){const e=i-new Date;if(e<=0){clearInterval(c),c=null,m(0,0,0,0),l.disabled=!1;return}const{days:n,hours:o,minutes:d,seconds:u}=S(e);m(n,o,d,u)}function m(t,e,n,o){r[0].textContent=a(t),r[1].textContent=a(e),r[2].textContent=a(n),r[3].textContent=a(o)}function a(t){return String(t).padStart(2,"0")}function S(t){const u=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:f,minutes:h,seconds:p}}
//# sourceMappingURL=1-timer.js.map
