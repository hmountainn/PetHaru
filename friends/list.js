// Popup
window.addEventListener("load",function(){
  /*------Variables for follow&following----- */
  var friendsTable = document.querySelector('.table');
  var followers = document.querySelector('.followers');
  var following  = document.querySelector('.following');
  var outlinePopup = document.querySelector('.outline-popup');
  var selected = null;

  /*---------Variables unfollow------------*/
  var listBox = document.querySelector(".list-box");
  var buttons = listBox.querySelectorAll(".button");
  var num = listBox.querySelector(".num");
  
  var selected = null;


  //follower pop up
  followers.onclick = function(){
      document.getElementById("popup-1").classList.add("active");
  };

  outlinePopup.onclick = function(e){
    console.log("outline-popup");

    var target = e.target;
    selected = e.target;
    
    //closing pop up
    if(target.parentNode.parentNode.classList.contains("popup")){
      target.parentNode.parentNode.classList.remove("active");

    }
    //unfollow
    else if(target.classList.contains("button")){
      if(selected.classList.contains("unfollow")){
        selected.classList.remove("unfollow");
        console.log("refollowing");
        selected.innerText="Following";
      }else{
        console.log("unfollow");
        selected.innerText="Follow";
        selected.classList.add("unfollow");

      }
    }
  
  };

//following pop up
  following.onclick = function(){
    console.log("following");
    document.getElementById("popup-2").classList.add("active");
  };


})

//기존검색 :로컬스토리지 - 자바스크립트 
//신규검색 :서버
