 const accordion = document.getElementsByClassName ('contentbx');
     for (i=0; i<accordion.length; i++){
         accordion[i].addEventListener('click',function(){
             this.classList.toggle('active')
         })
     }

let timeduration = document.getElementById("duration");
let userinput = document.getElementById("salary");
let result = document.getElementById("display");
let zakat = document.getElementById("zamount");

const zbtncalculate = document.getElementById("zcalculate")
const btncalculate = document.getElementById("calculate")
btncalculate.addEventListener("click" , Enter)


function Enter(){
let salary = Number(userinput.value);
if (timeduration.value === "duration" || timeduration.value === "Monthly")
{
    salary = salary*12;
}

let result = 0;

if (salary > 600000 && salary <= 1200000) 
{
    result = salary * 0.025;
}

else if (salary > 1200000 && salary <= 2400000) 
{
    result = salary * 0.125;

}
else if (salary > 2400000 && salary <= 3600000 ) 
{
        result = salary * 0.2;
}

else if (salary > 3600000 && salary <= 6000000 ) 
{
        result = salary * 0.25;
        
}
    
else if (salary > 6000000 && salary <= 12000000 ) 
{
        result = salary * 0.325;
}
    
else if (salary > 12000000) 
{
        result = salary * 0.35;
        
}
    document.getElementById("display").value = result;
}



zbtncalculate.addEventListener("click" , Enterz)


function Enterz(){
let zamount = Number(zakat.value);
let zresult = 0
if (zamount > 80000) 
{
    zresult = zamount * 0.025;
}
else
{
    alert("Zakat not applied");
}
document.getElementById("zdisplay").value = zresult;
}
