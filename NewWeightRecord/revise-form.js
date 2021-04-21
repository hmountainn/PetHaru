window.addEventListener("load",function(){
    
    // div = document.querySelectorAll(".weight-input-container");
    inputDate = document.querySelector(".input-date");
    inputTime = document.querySelector(".input-Time");
    inputWeight = document.querySelector(".input-weight");

    //수정할 데이터 받아오기
    var date = localStorage.getItem("reDate");
    var time = localStorage.getItem("reTime");
    var weight = localStorage.getItem("reWeight");

    console.log(date);
    console.log(time);
    console.log(weight);

    //날짜 넣기
    inputDate.value = date;

    //체중 넣기
    var realWeight = weight.slice(0,-3);
    inputWeight.value = realWeight;
    
    //시간 넣기(미완)
    var to = time.substring(1,2);
    var ampm = time.substring(5,7);
    if(ampm =="PM"){
        if(to==":"){
            var hour = parseInt(time.substring(0,1))+12;
            var minute = time.substring(2,4);
        }
        else{
            var hour = time.substring(0,2)+12;
            var minute = time.substring(4,6);
        }
        console.log(hour+":"+minute)
    }
    else{
        if(to==":"){
            var hour = time.substring(0,1);
            var minute = time.substring(2,4);
        }
        else{
            var hour = time.substring(0,2);
            var minute = time.substring(4,6);
        }
        console.log(hour+":"+minute)
    }
    



});