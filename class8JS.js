const increase = document.getElementById("ibtn");
const decrease = document.getElementById("dbtn");
const reset = document.getElementById("rbtn");
const counter = document.getElementById("counter");

let count = 0;

increase.addEventListener("click" , ()=>{
    count = count + 1;
    counter.innerHTML = count;
    
});

decrease.addEventListener("click" , ()=>{
    if (count>0)
        {
            count = count - 1;
            counter.innerHTML = count;
        }
    else
{
alert("Can't be less than zero");
}
    
    
});

reset.addEventListener("click" , ()=>{
    count = 0;
    counter.innerHTML = count;
    
});


