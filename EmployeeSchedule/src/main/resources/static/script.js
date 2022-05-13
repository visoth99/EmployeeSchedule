const date=document.querySelector(".date");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const fixedDate=new Date();
document.querySelector(".actual-time").innerHTML=weekday[fixedDate.getDay()]+", "+
    months[fixedDate.getMonth()]+" "+fixedDate.getDate();

let m=new Date(setDate);
let count=0;
let incrementMonth=0;
let ROW_MAX=6;
let COL_MAX=7;
let selectDate=false;
let selectDateClassName=[];
let listEmployeeName=0;
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
    span.setAttribute("class","badge bg-light text-secondary");
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
            document.querySelector("#br-a").remove();
            listEmployeeName=0;
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
    row.setAttribute("id","listNameRow"+listEmployeeName);
    const c1=document.createElement("div");
    c1.setAttribute("class","col");

    const c1a=document.createElement("a");
    c1a.setAttribute("class","text-dark");
    c1a.setAttribute("href","#");
    c1a.setAttribute("onclick","removeName("+listEmployeeName+")");
    c1a.setAttribute("style","text-decoration:none;margin-right:10px;")
    c1a.innerHTML=x.innerHTML;
    c1.appendChild(c1a);
    const span=document.createElement("span");
    span.setAttribute("style","margin-left:10px;")
    span.setAttribute("class","badge bg-secondary");

    span.innerHTML="X";
    c1a.appendChild(span);
    listEmployeeName++;

    const c2=document.createElement("div");
    c2.setAttribute("class","col col-lag-2");
    const s2=document.createElement("select");
    s2.setAttribute("onchange","change(this)");
    s2.setAttribute("class","form-select form-select-sm");
    s2.setAttribute("style","width: 100px !important; margin-bottom:10px;");
    s2.setAttribute("id", "er1");
    const o2=document.createElement("option");
    o2.innerHTML="from";
    s2.appendChild(o2);
    //o3.setAttribute("th:each","time: ${times}");
    //o3.setAttribute("th:value","${time}");
    //o3.setAttribute("th:text","${time}");
    //o3.setAttribute("value","1");
    for(let i=0;i<times.length;i++){
        const o3=document.createElement("option");
        o3.setAttribute("value",times[i].timeHour);
        o3.innerHTML=times[i].timeHour;
        s2.appendChild(o3);
    }


    c2.appendChild(s2);

    const c3=document.createElement("div");
    c3.setAttribute("class","col col-lag-2");
    c3.setAttribute("style","float:left !important;");
    const s3=document.createElement("select");
    s3.setAttribute("class","form-select form-select-sm");
    s3.setAttribute("style","width: 100px !important; margin-bottom:5px;");
    const o22=document.createElement("option");
    o22.innerHTML="to";
    o22.setAttribute("selected","");
    s3.appendChild(o22);
    for(let i=0;i<times.length;i++){
        const o33=document.createElement("option");
        o33.setAttribute("value",times[i].timeHour);
        o33.innerHTML=times[i].timeHour;
        s3.appendChild(o33);
    }
    c3.appendChild(s3);

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    show.appendChild(row);

}

function removeName(x){
    document.querySelector("#listNameRow"+x).remove();
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
    btn.setAttribute("class","btn btn-secondary");
    btn.setAttribute("type","button");
    btn.setAttribute("data-bs-toggle","modal");
    btn.setAttribute("data-bs-target","#popup");
    btn.setAttribute("style","float: left;font-weight:bold!important;");
    btn.innerHTML="Add Employee";

    const createBtn=document.createElement("button");
    createBtn.setAttribute("class","btn btn-primary");
    createBtn.setAttribute("type","button");
    createBtn.setAttribute("onclick","removeToCreateSchedule()");
    createBtn.setAttribute("style","float: left;font-weight:bold!important; margin-left:10px;");
    createBtn.innerHTML="Create Schedule";

    createButton.appendChild(btn);
    createButton.appendChild(createBtn);
    const br=document.createElement("br");
    br.setAttribute("id","br-a");
    lastList.appendChild(br);
    lastList.appendChild(createButton);

}

function removeToCreateSchedule(){
    const list=[
        document.querySelector(".selectDate"),
        document.querySelector(".showEmployees"),
        document.querySelector(".add-employee")
    ];
    for(let i=0;i<list.length;i++) {
        let e = list[i];
        if(e==null)continue;
        let c = e.lastElementChild;
        while (c) {
            e.removeChild(c);
            c = e.lastElementChild;
        }
    }
    selectDate=false;
}

function calendar(x,y) {
    for (let i =1; i < 32; i++) {
        const d = new Date(x+" "+i+", "+y);
        const a=document.createElement("a");
        a.setAttribute("href","#");
        a.setAttribute("style","text-decoration:none; color:black;");
        a.setAttribute("onclick","hasClick(this)");
        a.setAttribute("class",weekday[d.getDay()]+" "+count+" "+d.getDate());
        if((d.getMonth()) !=(x-1))break;
        if(fixedDate.getMonth()==d.getMonth() &&
            fixedDate.getDate()==d.getDate() &&
            fixedDate.getFullYear()==d.getFullYear()){
            const today = document.createElement("i")
            today.setAttribute("class","fa-solid fa-bowl-rice")
            document.getElementById(count).
            querySelector("#" + weekday[d.getDay()]).appendChild(a).appendChild(today);
        }else{

            document.getElementById(count).
            querySelector("#" + weekday[d.getDay()]).appendChild(a).innerHTML=d.getDate();
        }
        if(schedules.includes("2021-05-"+d.getDate())){
            document.getElementById(count).
            querySelector("#" + weekday[d.getDay()]).style.backgroundColor="lightgray";
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
}




setCurrentTime(m.getMonth());
initialCalendar();
calendar(m.getMonth()+1,m.getFullYear());


function change(x){
    const s=x.value;
    alert(s);
}

