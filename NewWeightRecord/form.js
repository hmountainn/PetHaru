window.addEventListener("load",function(){

    InputDate = document.querySelector(".input-date");
    InputTime = document.querySelector(".input-time");
    InputWeight = document.querySelector(".input-weight");
    btn = document.querySelector(".submit");

    btn.onclick = function(){
        var date = InputDate.value;
        var time = InputTime.value;
        var weight = InputWeight.value;

        console.log(date);
        console.log(time);
        console.log(weight);

        alert("정말 기록하시겠습니까?");
        //localStorage에 저장
        localStorage.setItem("date",date);
        localStorage.setItem("time",time);
        localStorage.setItem("weight",weight);
    }



});