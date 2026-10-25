(function(){
var f=document.getElementById("filters"),g=document.getElementById("grid"),c=document.getElementById("count");
function apply(){
var d=new FormData(f),cat=d.get("category"),mat=d.get("material"),pr=d.get("price"),lo=0,hi=Infinity;
if(pr){var r=pr.split("-");lo=+r[0];hi=+r[1];}
var l=PRODUCTS.filter(function(p){return(!cat||p.category===cat)&&(!mat||p.material===mat)&&p.price>=lo&&p.price<=hi});
renderProducts(g,l);c.textContent=l.length+" product"+(l.length===1?"":"s")+" found";
}
f.addEventListener("change",apply);f.addEventListener("reset",function(){setTimeout(apply)});apply();
})();
