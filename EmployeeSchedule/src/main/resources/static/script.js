
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let selectArr=[];
let selectEmployeeArr=[];
let count=0;
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

        btn.setAttribute("type","submit");
        btn.setAttribute("class","btn btn-primary");
        btn.innerHTML="Create Schedule";

        addBtn.setAttribute("type","button");
        addBtn.setAttribute("class","btn btn-secondary");
        addBtn.setAttribute("data-bs-toggle","modal");
        addBtn.setAttribute("data-bs-target","#popup");
        addBtn.innerHTML="Add Employee";

        div.appendChild(input);
        div.appendChild(input_em);
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
        isCheck=false;
    }
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
    input_em.setAttribute("value",selectEmployeeArr.toString());
}

function hasCLickEmployee(x){


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

