(()=>{"use strict";const e=document.getElementById("content"),t=()=>{const t=document.createElement("h1");t.textContent="Ming's Dumplings";const n=document.createElement("img");n.style.height="250px",n.style.width="400px",n.setAttribute("src","https://i.pinimg.com/originals/bc/aa/a9/bcaaa95462e6f6f8d911d5d628a2907c.jpg"),n.setAttribute("alt","dumplings");const o=document.createElement("p");o.textContent="For over 20 years, Ming's has provided an authentic taste of China.\n    Whether you're craving chow mein or our popular soup dumplings, we have something\n    for everyone to enjoy!",e.appendChild(t),e.appendChild(n),e.appendChild(o)},n=document.getElementById("content"),o=document.getElementById("content"),d=document.getElementById("home"),c=document.getElementById("menu");t(),d.addEventListener("click",(()=>{o.textContent="",t()})),c.addEventListener("click",(()=>{o.textContent="",(()=>{const e=document.createElement("div");n.appendChild(e);const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const o=document.createElement("ul");e.appendChild(o);const d=document.createElement("li");d.textContent="Soup Dumplings - $7.99";const c=document.createElement("li");c.textContent="Fried Dumplings - $5.50";const i=document.createElement("li");i.textContent="Chow Mein - $9.99";const l=document.createElement("li");l.textContent="House Fried Rice - $9.50",o.appendChild(d),o.appendChild(c),o.appendChild(i),o.appendChild(l)})()}))})();