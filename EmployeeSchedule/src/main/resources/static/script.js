const date=document.querySelector(".date");
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let tr;
let count=0;
for(let i=0;i<42;i++) {

    if (i % 7 == 0 ) {
        tr = document.createElement("tr");
        tr.setAttribute("id",count)
        date.appendChild(tr);
        count++;
    }
    const td = document.createElement("td")
    td.setAttribute("id",weekday[i%7]);
    tr.appendChild(td);
}
function calendar(x) {
    count = 0;
    for (let i =1; i < 32; i++) {
        const d = new Date(x+" " + i + ", 2022");
        if((d.getMonth()) !=(x-1))break;
        document.getElementById(count).querySelector("#" + weekday[d.getDay()]).innerHTML =d.getDate();
        if (d.getDay() == 6) {
            count++;
        }
    }
    for(let i=1;i<=count+2;i++){
        const el=document.getElementById(i).querySelector("#Sunday");
        if(el.innerHTML.length==""){
            document.getElementById(i).remove();
        }
    }
}
calendar(4);