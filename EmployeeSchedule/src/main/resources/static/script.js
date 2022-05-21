
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let selectArr=[];
let selectEmployeeArr=[];
let employeeName=[];
let count=1;
let isCheck=false;

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

var m=new Date(setDate);
document.querySelector(".current-time").innerHTML=months[m.getMonth()]+"  "+m.getFullYear();

function createButton(x){
    const d=new Date(new Date(months[m.getMonth()]+" ,"+x.innerHTML+" "+m.getFullYear()));
    if(!selectArr.includes(m.getMonth()+1 + " " + x.innerHTML + " " + m.getFullYear())) {
        selectArr.push(m.getMonth()+1 + " " + x.innerHTML + " " + m.getFullYear());
        const getRow = document.querySelector(".selectDate");
        const createBtn = document.createElement("button");
        const createBdg = document.createElement("span");
        createBdg.setAttribute("class", "badge bg-light text-secondary");
        createBdg.innerHTML = "X";
        createBtn.setAttribute("onclick", "removeMe(this);");
        createBtn.setAttribute("type", "button");
        createBtn.setAttribute("value",m.getMonth()+1 + " " + x.innerHTML + " " + m.getFullYear());
        createBtn.setAttribute("class", "btn btn-secondary btn-sm");
        createBtn.innerHTML = weekday[d.getDay()] + " " + x.innerHTML;
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

function removeMe(x){
    x.remove();
    const o=selectArr.indexOf(x.value);
    if(o>-1){
        selectArr.splice(o,1);
    }
    if(selectArr.length==0) {
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
    const createBdg = document.createElement("span");

    createBdg.setAttribute("class", "badge bg-secondary text-light");
    createBdg.setAttribute("style","float:left!important; margin-top:5px;");
    createBdg.setAttribute("onclick","removeRow(this)");
    createBdg.setAttribute("value",count.toString()+"-"+x.getAttribute('value'));
    createBdg.setAttribute("id",x.innerHTML+"-"+x.getAttribute('value'));
    createBdg.innerHTML = "X";

    row.setAttribute("class","row");

    col1.setAttribute("class","col");
    col1.innerHTML=x.innerHTML;

    col2.setAttribute("class","col");
    col3.setAttribute("class","col");

    col4.setAttribute("class","col");
    col4.appendChild(createBdg);

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
        msg.innerHTML="Your Schedule will not created because you did not add employees or specify shift times to " +
            "your schedule."
        msg.setAttribute("style","color: red !important;")
        row1.appendChild(msg);
    }
    row1.appendChild(col22);

    row.appendChild(col2);
    div0.appendChild(row);
    div0.appendChild(row1);

    div.appendChild(input);
    div.appendChild(input_em);
}

