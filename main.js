(function(){var A=window.AGENCIA||{};
document.querySelectorAll("[data-cfg]").forEach(function(e){var v=A[e.dataset.cfg];if(v!=null)e.textContent=v});
document.querySelectorAll("[data-wa]").forEach(function(e){e.href="https://wa.me/"+A.whatsapp+"?text="+encodeURIComponent("Hola, quiero información sobre un viaje")});
document.querySelectorAll("[data-mail]").forEach(function(e){e.href="mailto:"+A.correo});
var y=document.getElementById("y");if(y)y.textContent=new Date().getFullYear();
var m=document.querySelector(".menu-btn");if(m)m.onclick=function(){document.querySelector(".nav nav").classList.toggle("open")};
document.querySelectorAll(".tabs button").forEach(function(b){b.onclick=function(){document.querySelectorAll(".tabs button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");var d=document.getElementById("mock-dest");if(d)d.placeholder=b.dataset.ph}});
document.querySelectorAll("form[data-demo]").forEach(function(f){f.onsubmit=function(e){e.preventDefault();alert("Sitio de ejemplo: este formulario aún no está conectado.")}});
})();
