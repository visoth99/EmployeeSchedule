const date=document.querySelector(".date");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let m=new Date();
let count=0;
let incrementMonth=0;
let ROW_MAX=6;
let COL_MAX=7;
let selectDate=[];
function initialCalendar(){
    for(let i=0;i<ROW_MAX;i++) {
        const tr = document.createElement("tr");
        tr.setAttribute("id",i);
        date.appendChild(tr);
        for(let j=0;j<COL_MAX;j++){
            const td = document.createElement("td");
            td.setAttribute("id",weekday[j%7]);
            tr.appendChild(td);
        }
    }
}
function hasClick(x){
    const t =x.getAttribute("class").split(" ");
    document.getElementById(t[1]).querySelector("#"+t[0]).style.backgroundColor="lightgray";
    const sel=document.querySelector(".selectDate");
    const butt=document.createElement("button");
    const st=document.createElement("strong");
    butt.setAttribute("type","button");
    butt.setAttribute("class","btn btn-secondary btn-sm");
    butt.setAttribute("style","margin: 15px 0 0 5px; float: left;");
    st.innerHTML=t[0]+" "+t[2] ;
    butt.appendChild(st)
    sel.appendChild(butt);
}

function calendar(x,y) {
    for (let i =1; i < 32; i++) {
        const d = new Date(x+" "+i+", "+y);
        const a=document.createElement("a");
        a.setAttribute("href","#");
        a.setAttribute("style","text-decoration:none; color:black;");
        a.setAttribute("onclick","hasClick(this)");
        a.setAttribute("class",weekday[d.getDay()]+" "+count+" "+d.getDate());
        if((d.getMonth()) !=(x-1))break
        if(m.getMonth()==d.getMonth() && m.getDate()==d.getDate() && m.getFullYear()==d.getFullYear()){
            const today = document.createElement("i")
            today.setAttribute("class","fa-solid fa-bowl-rice")
            document.getElementById(count).
            querySelector("#" + weekday[d.getDay()]).appendChild(a).appendChild(today);
        }else{
            document.getElementById(count).
            querySelector("#" + weekday[d.getDay()]).appendChild(a).innerHTML=d.getDate();
        }
        if (d.getDay() == 6) {
            count++;
        }
    }
    for(let i=1;i<ROW_MAX;i++){
        const el=document.getElementById(i).querySelector("#Sunday");
        if(el.innerHTML.length==""){
            document.getElementById(i).remove();
        }
    }
}
function removerRow(){
    for(let i=0;i<ROW_MAX;i++){
        try{
            document.getElementById(i).remove();
        }catch (err){}

    }
}
function setCurrentTime(x){
    document.querySelector(".current-time").innerHTML=months[x]+"  "+m.getFullYear();

    document.querySelector(".actual-time").innerHTML=weekday[m.getDay()]+", "+m.getDate();
}
setCurrentTime(m.getMonth());
initialCalendar();
calendar(m.getMonth()+1,m.getFullYear());

document.querySelector(".forward-month").addEventListener("click",function (){
    if((m.getMonth()+1+incrementMonth)<12){
        count=0;
        removerRow();
        initialCalendar();
        incrementMonth++;
        calendar(m.getMonth()+1+incrementMonth,m.getFullYear());
        setCurrentTime(m.getMonth()+incrementMonth);
    }
});
document.querySelector(".backward-month").addEventListener("click",function (){
    if((m.getMonth()+1+incrementMonth)>1){
        count=0;
        removerRow();
        initialCalendar();
        incrementMonth--;
        calendar(m.getMonth()+1+incrementMonth,m.getFullYear());
        setCurrentTime(m.getMonth()+incrementMonth);
    }
});
document.querySelector(".actual-time").addEventListener("click",function (){
    count=0;
    removerRow();
    initialCalendar();
    calendar(m.getMonth()+1,m.getFullYear());
    setCurrentTime(m.getMonth());
});


