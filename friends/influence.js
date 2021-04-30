window.addEventListener("load",function(){
    var bigbox = document.querySelector(".big-box");
    var hideBox = bigbox.querySelector(".hide-box");
    var minibox = bigbox.querySelector(".minibox");
    var popup = bigbox.querySelector(".popup");

    bigbox.onmouseover = function(e){
        if(e.target.classList.contains("img")){
            hideBox=e.target.parentElement.parentElement.querySelector(".hide-box")
            hideBox.classList.remove("d-none");
            console.log("over");
        }
    }


    bigbox.onmouseout = function(e){
        if(e.target.classList.contains("hide-box")){
            e.target.classList.add("d-none");
        }
    }

    bigbox.onclick = function(e){
        if(e.target.classList.contains("hide-box")){
            var minipopup = e.target.parentElement.querySelector(".popup")
            minipopup.classList.toggle("active");
        }
        if(e.target.classList.contains("close-btn")){
            var minipopup = e.target.parentElement.parentElement
            console.log(minipopup);
            minipopup.classList.remove("active");
        }
        
    }



})