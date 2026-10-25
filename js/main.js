(function(){
var b=document.querySelector(".menu-btn"),n=document.getElementById("nav");
if(b)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();
function renderProducts(el,list){
el.textContent="";
list.forEach(function(p){
var a=document.createElement("a");a.className="card";a.href="product.html?id="+encodeURIComponent(p.id);a.style.textDecoration="none";a.style.color="inherit";
var i=document.createElement("img");i.src=p.image;i.alt=p.alt;i.loading="lazy";i.width=400;i.height=300;
var h=document.createElement("h3");h.textContent=p.name;
var t=document.createElement("p");t.className="tag";t.textContent=p.category+" · "+p.material;
var pr=document.createElement("p");pr.className="price";pr.textContent="$"+p.price.toFixed(2);
a.append(i,h,t,pr);el.appendChild(a);
});
}
