import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const s=document.getElementsByName("delay")[0],t=Number(s.value);new Promise((e,m)=>{setTimeout(()=>{Math.random()>.5?e(t):m(t)},t)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
