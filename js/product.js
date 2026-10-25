(function(){
var id=new URLSearchParams(location.search).get("id"),el=document.getElementById("product");
var p=PRODUCTS.find(function(x){return x.id===id});
if(!p){el.innerHTML="<p>Product not found. <a href=\"shop.html\">Back to shop</a></p>";return}
document.title=p.name+" | Matt’s 3D Customs Inc.";
el.textContent="";
var i=document.createElement("img");i.src=p.image;i.alt=p.alt;i.width=400;i.height=300;
var d=document.createElement("div");
var h=document.createElement("h1");h.textContent=p.name;
var pr=document.createElement("p");pr.className="price";pr.textContent="$"+p.price.toFixed(2);
var m=document.createElement("p");m.textContent="Category: "+p.category+" | Material: "+p.material;
var t=document.createElement("p");t.textContent=p.description;
var o=document.createElement("p");o.textContent="To order, email us the item name. We confirm the total and shipping, then you pay manually via Cash App, Venmo, Zelle or PayPal.";
var a=document.createElement("a");a.className="btn";a.textContent="Order this item";
a.href="mailto:hello@example.com?subject="+encodeURIComponent("Order: "+p.name);
d.append(h,pr,m,t,o,a);el.append(i,d);
})();
