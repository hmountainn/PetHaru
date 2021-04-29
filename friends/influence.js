window.addEventListener("load",function(){
    var boxImg = document.querySelectorAll(".img");
    var hideBox = document.querySelectorAll(".hide-box");

    for(let i=0; i<boxImg.length; i++){
        boxImg[i].onmouseover = function(e){
            hideBox[i].classList.remove("d-none");
            console.log("over");
        }
    }

    for(let i=0; i<hideBox.length; i++){
        hideBox[i].onmouseout = function(e){
            hideBox[i].classList.add("d-none");
            console.log("out");
        }
    }
})