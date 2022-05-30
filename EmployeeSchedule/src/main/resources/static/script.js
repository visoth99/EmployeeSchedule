
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let selectArr=[];
let selectEmployeeArr=[];
let employeeName=[];
let count=1;
let isCheck=false;
let isEmpty=false;

let input=document.createElement("input");
input.setAttribute("type","hidden");
input.setAttribute("value",selectArr.toString());
input.setAttribute("name","s1");
input.setAttribute("class","form-control");

let input_em=document.createElement("input");
input_em.setAttribute("type","hidden");
input_em.setAttribute("value",selectEmployeeArr.toString());
input_em.setAttribute("name","s2");
input_em.setAttribute("class","form-control");

const fixedDate=new Date();
document.querySelector(".actual-time").innerHTML=weekday[fixedDate.getDay()]+", "+
    months[fixedDate.getMonth()]+" "+fixedDate.getDate();

for(let k=0;k<dateSchedules.length;k++){

    const s=dateSchedules[k].split(" ");
    const ss=s[2].split(":");
    const y=".td-"+ss[0];
    const x=document.querySelector(y);
    x.style.backgroundColor="lightgray";
}

var m=new Date(setDate);
document.querySelector(".current-time").innerHTML=months[m.getMonth()]+"  "+m.getFullYear();

if(fixedDate.getMonth()==m.getMonth() && fixedDate.getFullYear()==m.getFullYear()){
    const y=".td-"+fixedDate.getDate();
    const x=document.querySelector(y).firstChild;
    const i=document.createElement("i");
    x.innerHTML="";
    i.setAttribute("class", "fa-solid fa-bowl-rice");
    x.appendChild(i);
}

function createButton(x){
    if(dateSchedules.some(e=>e.includes(" "+x.getAttribute('value') + ":" + m.getFullYear()+" "))){
        removeChildAll();
        viewDataDate(x);
    }else {
        precessEmptyDates(x);
    }
}

function viewDataDate(x){
    const getRow = document.querySelector(".showEmployees");
    const showDate = document.querySelector(".selectDate");
    const span=document.createElement("span");
    const f=x.getAttribute('value');
    span.setAttribute("class","btn btn-secondary btn-sm");
    span.setAttribute("style","margin-top:10px;")
    showDate.appendChild(span);
    span.innerHTML=weekday[m.getDay()]+", "+months[m.getMonth()]+" "+f+" "+m.getFullYear();
    for(let k=0;k<dateSchedules.length;k++){
        if(dateSchedules[k].includes(" "+f + ":" + m.getFullYear()+" ")){
            const div=document.createElement("div");
            div.setAttribute("class","card");
            const div1=document.createElement("div");
            div1.setAttribute("class","card-body");
            const h5=document.createElement("h5");
            h5.setAttribute("class","card-title");
            const title=dateSchedules[k].toString().split(" ");
            h5.innerHTML=title[0]+" "+title[1];
            const h6=document.createElement("h6");
            h6.setAttribute("class","card-subtitle mb-2 text-muted");
            const title_h6=dateSchedules[k].toString().split(" ");
            h6.innerHTML=title_h6[3]+" "+title_h6[4]+" - "+title_h6[5]+" "+title_h6[6];
            const p=document.createElement("p");
            p.setAttribute("class","card-text");
            const p_phone=dateSchedules[k].toString().split(" ");
            let p_char='';
            for(let i=0;i<p_phone[7].length;i++){
                if(i==0)p_char+='(';
                else if(i==3)p_char+=') ';
                else if(i==6)p_char+='- ';
                p_char+=p_phone[7].charAt(i);
            }
            p.innerHTML=p_char;
            div1.appendChild(h5);
            div1.appendChild(h6)
            div1.appendChild(p);
            div.appendChild(div1);
            getRow.appendChild(div);
        }
    }
    isEmpty=true;
    selectArr=[];
    selectEmployeeArr=[];
    isCheck=false;
    input_em.setAttribute("value",selectEmployeeArr.toString());
    input.setAttribute("value",selectArr.toString());
}

function precessEmptyDates(x){

    if(isEmpty){
        removeChildAll();
        isEmpty=false;
    }
    const f=x.getAttribute('value');
    const d=new Date(new Date(months[m.getMonth()]+" ,"+f+" "+m.getFullYear()));
    if(!selectArr.includes(m.getMonth()+1 + " " + f + " " + m.getFullYear())) {
        selectArr.push(m.getMonth()+1 + " " + f + " " + m.getFullYear());
        const getRow = document.querySelector(".selectDate");
        const createBtn = document.createElement("button");
        const createBdg = document.createElement("span");
        createBdg.setAttribute("class", "badge bg-light text-secondary");
        createBdg.innerHTML = "X";
        createBtn.setAttribute("onclick", "removeMe(this);");
        createBtn.setAttribute("type", "button");
        createBtn.setAttribute("value",m.getMonth()+1 + " " + f + " " + m.getFullYear());
        createBtn.setAttribute("class", "btn btn-secondary btn-sm");
        createBtn.innerHTML = weekday[d.getDay()] + " " + f;
        createBtn.appendChild(createBdg);
        getRow.appendChild(createBtn);
        input.setAttribute("value",selectArr.toString());
    }
    if(!isCheck ){
        const div=document.querySelector(".add-employee");
        const btn=document.createElement("button");
        const addBtn=document.createElement("button");

        btn.setAttribute("type","button");
        btn.setAttribute("class","btn btn-primary");
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#verifyUp");
        btn.setAttribute("onclick","verifyInfo()");
        btn.innerHTML="Create Schedule";

        addBtn.setAttribute("type","button");
        addBtn.setAttribute("class","btn btn-secondary");
        addBtn.setAttribute("data-bs-toggle","modal");
        addBtn.setAttribute("data-bs-target","#popup");
        addBtn.innerHTML="Add Employee";

        div.appendChild(addBtn);
        div.appendChild(btn);
        isCheck=true;
    }
}

function removeChildAll(){

    const rs = document.querySelector(".selectDate");
    while (rs.hasChildNodes()) {
        rs.removeChild(rs.lastChild);
    }
    const rw = document.querySelector(".showEmployees");
    while (rw.hasChildNodes()) {
        rw.removeChild(rw.lastChild);
    }
    const re = document.querySelector(".add-employee");
    while (re.hasChildNodes()) {
        re.removeChild(re.lastChild);
    }
    const rt = document.querySelector(".verify-info");
    while (rt.hasChildNodes()) {
        rt.removeChild(rt.lastChild);
    }
}

function removeMe(x){
    x.remove();
    const o=selectArr.indexOf(x.value);
    if(o>-1){
        selectArr.splice(o,1);
    }
    if(selectArr.length==0) {
        removeChildAll();
        isCheck=false;
        selectEmployeeArr=[];
    }
    input_em.setAttribute("value",selectEmployeeArr.toString());
    input.setAttribute("value",selectArr.toString());
}

function createSelect(x,y,z,a){
    const select=document.createElement("select");
    select.setAttribute("class","form-select form-select-sm");
    select.setAttribute("aria-label","Default select");

    const option=document.createElement("option");
    option.setAttribute("value",y);
    option.innerHTML=y;
    select.appendChild(option);
    for(let i=0;i<times.length;i++){
        const option=document.createElement("option");
        option.setAttribute("value",times[i].id);
        option.innerHTML=times[i].timeHour;
        select.appendChild(option);
    }
    select.setAttribute("value",z.toString()+"-"+a);
    select.setAttribute("onchange",y+"(this)");
    x.appendChild(select);
}

function from(x){
    const o=selectEmployeeArr.findIndex(y=>y.includes(x.getAttribute('value')));
    const s=selectEmployeeArr[o].split(":");
    selectEmployeeArr[o]=s[0]+":"+x.value+":"+s[2];
    input_em.setAttribute("value",selectEmployeeArr.toString());
}

function to(x){
    const o=selectEmployeeArr.findIndex(y=>y.includes(x.getAttribute('value')));
    const s=selectEmployeeArr[o].split(":");
    selectEmployeeArr[o]=s[0]+":"+s[1]+":"+x.value;
    input_em.setAttribute("value",selectEmployeeArr.toString());

}

function removeRow(x){
    const r=x.parentNode.parentNode;
    r.parentNode.removeChild(r);
    const o=selectEmployeeArr.findIndex(y=>y.includes(x.getAttribute('value')));
    if(o>-1){
        selectEmployeeArr.splice(o,1);
    }
    const q=employeeName.findIndex(y=>y.includes(x.getAttribute('id')));
    if(q>-1){
        employeeName.splice(q,1);
    }
    input_em.setAttribute("value",selectEmployeeArr.toString());
}

function hasCLickEmployee(x){

    employeeName.push(x.innerHTML+"-"+x.getAttribute('value'));

    const div=document.querySelector(".showEmployees");
    const row=document.createElement("div");
    const col1=document.createElement("div");
    const col2=document.createElement("div");
    const col3=document.createElement("div");
    const col4=document.createElement("div");
    const a=document.createElement("a");
    const createBdg = document.createElement("span");

    a.setAttribute("href","#");
    a.setAttribute("value",count.toString()+"-"+x.getAttribute('value'));
    a.setAttribute("id",x.innerHTML+"-"+x.getAttribute('value'));
    a.setAttribute("onclick","removeRow(this)");

    createBdg.setAttribute("class", "badge bg-secondary text-light");
    createBdg.setAttribute("style","float:left!important; margin-top:5px;");

    createBdg.innerHTML = "X";

    row.setAttribute("class","row row-show");

    col1.setAttribute("class","col");
    col1.innerHTML=x.innerHTML;

    col2.setAttribute("class","col");
    col3.setAttribute("class","col");

    col4.setAttribute("class","col");
    a.appendChild(createBdg);
    col4.appendChild(a);

    createSelect(col2,"from",count,x.getAttribute('value'));
    createSelect(col3,"to",count,x.getAttribute('value'));

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    div.appendChild(row);
    selectEmployeeArr.push(count+"-"+x.getAttribute('value')+":0:0")
    input_em.setAttribute("value",selectEmployeeArr.toString());
    count++;
}

function verifyInfo(){
    const div=document.querySelector(".verify-info");
    const div0=document.querySelector(".list-info");
    const row=document.createElement("div");
    const col1=document.createElement("div");
    const col2=document.createElement("div");
    const row1=document.createElement("div");
    const col11=document.createElement("div");
    const col22=document.createElement("div");

    const dateTitle=document.createElement("p");
    const emTitle=document.createElement("p");

    while (div0.hasChildNodes()) {
        div0.removeChild(div0.lastChild);
    }

    row.setAttribute("class","row");
    col1.setAttribute("class","col-4");
    col2.setAttribute("class","col-8");

    row1.setAttribute("class","row");
    col11.setAttribute("class","col-4");
    col22.setAttribute("class","col-8");

    dateTitle.setAttribute("style","float:left!important;");
    dateTitle.innerHTML="For the Week of: ";
    emTitle.setAttribute("style","float:left!important;");
    emTitle.innerHTML="Employee Name: ";

    col1.appendChild(dateTitle);
    row.appendChild(col1);

    col11.appendChild(emTitle);
    row1.appendChild(col11);

    try {

        for (let i = 0; i < selectArr.length; i++) {
            const c = document.createElement("span");
            c.setAttribute("class", selectArr[i] + " badge bg-secondary");
            const s = selectArr[i].split(" ");
            c.innerHTML = months[s[0] - 1] + " " + s[1] + " " + s[2];
            col2.appendChild(c);
        }
        for (let j = 0; j < selectEmployeeArr.length; j++) {
            const c = document.createElement("p");
            c.setAttribute("class", selectEmployeeArr[j]);
            const s = selectEmployeeArr[j].split(":");
            const f = times.find(e => e.id == s[1]);
            const t = times.find(e => e.id == s[2]);
            const e=employeeName[j].split("-");
            c.innerHTML =e[0] + " :    " + f.timeHour + " - " + t.timeHour;
            col22.appendChild(c);
        }
    }catch (e){
        while (col22.hasChildNodes()) {
            col22.removeChild(col22.lastChild);
        }
    }
    if(!col22.hasChildNodes()){
        const msg=document.createElement("p");
        msg.setAttribute("class","text-center");
        msg.innerHTML="Your Schedule will not created because you did not add employees or specify shift times to " +
            "your schedule."
        msg.setAttribute("style","color: red !important;");
        row1.appendChild(msg);
    }
    row1.appendChild(col22);

    row.appendChild(col2);
    div0.appendChild(row);
    div0.appendChild(row1);

    div.appendChild(input);
    div.appendChild(input_em);
}

