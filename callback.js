// console.log('Student 1, Present')

// console.log('Student 3, Present')
// setTimeout(() => {
//     console.log('Student 2, Present')
// }, 2000);

mysumfunc = func(a,b)
{
    console.log(a+b)
}
mysumfunc(2,3)

myarrowsumfunc = (a,b) => {
    console.log(a+b)
}
myarrowsumfunc(2,7)

simplearrowfunc = (a,b) => console.log(a+b);

()=> {console.log("Greeting")};


const dummyDatabase = new Promise ((resolve,reject)=> {
    const x = true;
    if (x) {
    setTimeout(() => {
    resolve('dummy')
    }, 5000);
    }
    else 
    {
    reject('Promise is rejected, Student 2 is absent')
    }
    });
    
    //How to use promise
    dummyDatabase
      .then ( (data) => {
      console.log("DB Resolved)
      if (data == 'dummy')
      {
      console.log('Send Email')
      }
      else 
      {
      console.log('Not Valid')
      }
      })
      .catch ( (errorMessage) => console.log(errorMessage) )