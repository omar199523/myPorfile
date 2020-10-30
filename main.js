window.onscroll=()=>{
    document.getElementById("header").classList.toggle("haderScroll",window.scrollY>0);
}
document.getElementById("toggle").onclick=()=>{
    document.getElementById("toggle").classList.toggle("toggle")
}
document.getElementById('toggle').onclick = () => {
  document.getElementById('toggle').classList.toggle('open');
}

