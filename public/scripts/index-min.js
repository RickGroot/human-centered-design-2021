let names=document.querySelectorAll("section>p>b"),next=document.querySelectorAll("section>p.next"),nameArr=[];function addClass(e,a){let s=e.parentNode;0===a?s.classList.add("left"):1===a&&s.classList.add("right")}names.forEach(e=>{let a=e.innerText.charAt(0);if(nameArr.includes(a)){addClass(e,nameArr.indexOf(a))}else{nameArr.push(a),addClass(e,nameArr.indexOf(a))}}),next.forEach(e=>{let a=e.previousSibling.className;e.classList.add(a)});