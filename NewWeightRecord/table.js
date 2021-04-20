window.addEventListener("load",function(){

    var tbody = document.querySelector(".tbody");

    //데이터 받아오기
    var date = localStorage.getItem("date");
    var time = localStorage.getItem("time");
    var weight = localStorage.getItem("weight");

    //엘리먼트 생성
    var tr = document.createElement("tr");
    var tdDate = document.createElement("td");
    var tdTime= document.createElement("td");
    var tdWeight = document.createElement("td");

    var hour = parseInt(time.substring(0,3));
    var minute = time.substring(3,5); 
    //td에 값넣기
    tdDate.append(date);
    if(hour>12){
        tdTime.append(hour-12+":"+minute+" PM");
        tdTime.className = "pm";
    }
    else{
        tdTime.append(time+"AM")
        tdTime.className = "am";
    }

    tdWeight.append(weight+" KG");
    //tr에 td넣기
    tr.append(tdDate);
    tr.append(tdTime);
    tr.append(tdWeight);
    //표에 추가
    tbody.append(tr);


});