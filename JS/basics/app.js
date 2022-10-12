// console.log("Welcome");
// let a =  'Student Score'
// let html =  9
// let css =  10
// let js =  6
// let totalscore = html+css+js;
// console.log('Total Score is ' + totalscore)


console.log ("1")
// Function Defination
function nameoffunction () {
    console.log ("2 - my first function")
}
console.log ("3")
//call this function
nameoffunction();

function mySumCalc (a,b,c)
{
   let sum = a+2*b+5*c;
   return sum;
}

let resultSum = mySumCalc (5,1,2);
console.log("Your Result is " + resultSum);

const monthly = 0;
const anually = 0;
const userinput = 0;
const calculate = 0;


monthly.addEventListener("click" , ()=> {

    if (userinput > 50000 || userinput < 100000) 
    {
        result = userinput * 0.025;
    }
    else if (userinput > 100000 || userinput < 200000) 
    {
        result = userinput * 0.125;
    }
    else if (userinput > 200000 || userinput < 300000 ) 
    {
        result = userinput * 0.2;
    }

    else if (userinput > 300000 || userinput < 500000 ) 
    {
        result = userinput * 0.25;
        
    }
    
    else if (userinput > 500000 || userinput < 1000000 ) 
    {
        result = userinput * 0.325;
    }
    
    else if (userinput > 1000000) 
    {
        result = userinput * 0.35;
        
    }
});

anually.addEventListener("click" , ()=> {

    if (userinput > 50000 || userinput < 100000) 
    {
        result = userinput * 0.025;
    }
    else if (userinput > 100000 || userinput < 200000) 
    {
        result = userinput * 0.125;
    }
    else if (userinput > 200000 || userinput < 300000 ) 
    {
        result = userinput * 0.2;
    }

    else if (userinput > 300000 || userinput < 500000 ) 
    {
        result = userinput * 0.25;
        
    }
    
    else if (userinput > 500000 || userinput < 1000000 ) 
    {
        result = userinput * 0.325;
    }
    
    else if (userinput > 1000000) 
    {
        result = userinput * 0.35;
        
    }
});




