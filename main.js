window.onscroll=()=>{
    document.getElementById("header").classList.toggle("haderScroll",window.scrollY>0);
}