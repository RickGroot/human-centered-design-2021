let names=document.querySelectorAll("section>p>b"),next=document.querySelectorAll("section>p.next"),nameArr=[];function addClass(e,t){let s=e.parentNode;0===t?s.classList.add("left"):1===t&&s.classList.add("right")}names.forEach(e=>{let t=e.innerText.charAt(0);if(nameArr.includes(t)){addClass(e,nameArr.indexOf(t))}else{nameArr.push(t),addClass(e,nameArr.indexOf(t))}}),next.forEach(e=>{let t=e.previousSibling.className;e.classList.add(t)});let btn1=document.getElementById("option1"),btn2=document.getElementById("option2"),btn3=document.getElementById("option3"),btn4=document.getElementById("option4"),homeLink=document.querySelector("#podcast>a"),aside=document.querySelector("#podcast>aside");btn1.addEventListener("click",e=>{e.preventDefault(),homeLink.classList.remove("class2"),aside.classList.remove("class2")}),btn2.addEventListener("click",e=>{e.preventDefault(),homeLink.classList.add("class2"),aside.classList.add("class2")}),btn3.addEventListener("click",e=>{e.preventDefault();let t=document.querySelectorAll(".left"),s=document.querySelectorAll(".right");t.forEach(e=>{e.classList.remove("left2")}),s.forEach(e=>{e.classList.remove("right2")})}),btn4.addEventListener("click",e=>{e.preventDefault();let t=document.querySelectorAll(".left"),s=document.querySelectorAll(".right");t.forEach(e=>{e.classList.add("left2")}),s.forEach(e=>{e.classList.add("right2")})});