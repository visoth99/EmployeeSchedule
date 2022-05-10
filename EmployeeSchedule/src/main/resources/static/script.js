const date=document.querySelector(".date");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let m=new Date();
let count=0;
let incrementMonth=0;
let ROW_MAX=6;
let COL_MAX=7;
let selectDate=false;
let selectDateClassName=[];
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


function removeUnnecessaryRow(){
    for(let i=1;i<ROW_MAX;i++){
        const el=document.getElementById(i).querySelector("#Sunday");
        if(el.innerHTML.length==""){
            document.getElementById(i).remove();
        }
    }
}

function showSelectDate(x){
    const t =x.getAttribute("class").split(" ");
    document.getElementById(t[1]).querySelector("#"+t[0]).style.backgroundColor="lightgray";
    const sel=document.querySelector(".selectDate");
    const butt=document.createElement("button");
    const st=document.createElement("strong");
    const span=document.createElement("span");
    span.setAttribute("class","badge bg-light text-dark");
    span.innerHTML="X";
    butt.setAttribute("type","button");
    butt.setAttribute("class","btn btn-secondary btn-sm" );
    butt.setAttribute("id",t[1]+"-"+t[0]+"-"+t[2]);
    butt.setAttribute("style","margin: 15px 0 0 5px; float: left;");
    butt.setAttribute("onclick","removeItself(this)");
    st.innerHTML=t[0]+" "+t[2]+" &nbsp&nbsp" ;
    butt.appendChild(st)
    butt.appendChild(span);
    sel.appendChild(butt);
}

function removeItself(x){
    const t =x.getAttribute("id").split("-");
    document.getElementById(t[0]).querySelector("#"+t[1]).style.backgroundColor="";
    x.remove();


        for(let i=0;i<selectDateClassName.length;i++) {
            if (selectDateClassName[i] ===(t[1]+" "+t[0]+" "+t[2])) {
                if (i !== -1) {
                    selectDateClassName.splice(i, 1);
                }
                break;
            }
        }
        if(selectDateClassName.length===0){
            document.querySelector("#dropdown").remove();
            document.querySelector("#paste-a").remove();
            document.querySelector("#copy-a").remove();
            document.querySelector("#br-a").remove();

            let e=document.querySelector(".showEmployees");
            let c=e.lastElementChild;
            while(c){
                e.removeChild(c);
                c=e.lastElementChild;
            }
            selectDate=false;
        }
}

function hasCLickEmployee(x){

    const show=document.querySelector(".showEmployees");
    const row=document.createElement("div");
    row.setAttribute("class","row");
    const c1=document.createElement("div");
    c1.setAttribute("class","col");
    c1.innerHTML=x.innerHTML;

    const c2=document.createElement("div");
    c2.setAttribute("class","col col-lag-2");
    const s2=document.createElement("select");
    s2.setAttribute("class","form-select form-select-sm");
    s2.setAttribute("style","width: 100px !important; margin-bottom:5px;");
    const o2=document.createElement("option");
    o2.innerHTML="from";
    const o3=document.createElement("option");
    o3.setAttribute("value","1");
    o3.innerHTML="1";
    o2.setAttribute("selected","");
    s2.appendChild(o2);
    s2.appendChild(o3);
    c2.appendChild(s2);

    const c3=document.createElement("div");
    c3.setAttribute("class","col col-lag-2");
    c3.setAttribute("style","float:left !important;");
    const s3=document.createElement("select");
    s3.setAttribute("class","form-select form-select-sm");
    s3.setAttribute("style","width: 100px !important; margin-bottom:5px;");
    const o22=document.createElement("option");
    o22.innerHTML="to";
    const o33=document.createElement("option");
    o33.setAttribute("value","1");
    o33.innerHTML="1";
    o22.setAttribute("selected","");
    s3.appendChild(o22);
    s3.appendChild(o33);
    c3.appendChild(s3);

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    show.appendChild(row);

}

function hasClick(x){

    if(!selectDateClassName.includes(x.getAttribute("class"))) {
        selectDateClassName.push(x.getAttribute("class"));
        showSelectDate(x);
    }


    if(selectDate==false){
        addDropList();
        selectDate=true;
    }
}
function addDropList(){
    const lastList=document.querySelector(".add-employee");
    const createButton=document.createElement("div");
    createButton.setAttribute("class","dropdown");
    createButton.setAttribute("id","dropdown");
    const btn=document.createElement("button");
    btn.setAttribute("class","btn btn-primary");
    btn.setAttribute("type","button");
    btn.setAttribute("data-bs-toggle","modal");
    btn.setAttribute("data-bs-target","#popup");
    btn.setAttribute("style","float: left;");
    btn.innerHTML="Add Employee";




    const copy=document.createElement("a");
    copy.setAttribute("href","#");
    copy.setAttribute("id","copy-a");
    copy.innerHTML="Copy This Day";
    copy.setAttribute("style","margin: 5px 0 0 25px;float: left;");
    const paste=document.createElement("a");
    paste.setAttribute("href","#");
    paste.setAttribute("id","paste-a");
    paste.innerHTML="Paste";
    paste.setAttribute("style","margin: 5px 0 0 25px;float: left;");
    createButton.appendChild(btn);
    const br=document.createElement("br");
    br.setAttribute("id","br-a");
    lastList.appendChild(br);
    lastList.appendChild(createButton);
    lastList.appendChild(copy);
    lastList.appendChild(paste);
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
    removeUnnecessaryRow();
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
    document.querySelector(".actual-time").innerHTML=weekday[m.getDay()]+", "+months[m.getMonth()]+" "+m.getDate();
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


