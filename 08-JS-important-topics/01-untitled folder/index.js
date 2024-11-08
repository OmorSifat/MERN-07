

//------------------Array------------------------


/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let city=["Dhaka","Rajshahi","Rangpur"]
let numbers=[1,40,50,40,3,2]
console.log(ostadApp[2])
*/





/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
ostadApp.forEach((item)=>{
    console.log(item)
})
*/    





let ostadApp=["Android","IOS","Windows","Mac","Web"]
for(i=0;i<ostadApp.length;i=i+1){
    if(i==2){
        continue
    }
    console.log((i+1) +" "+ostadApp[i])
}





/*
let first=['a','b','c']
let second=['d','e','f']
let res=first.concat(second)
console.log(res)
*/



/*
let nameString="OSTAD Batch MERN 7"
let nameArray=Array.from(nameString)
console.log(nameArray)
*/


/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let res=ostadApp.includes("Apple");
console.log(res)
*/

/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let res=ostadApp.indexOf("Web")
console.log(res)
*/



/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let res=ostadApp.pop()
console.log(res)
*/


/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let res=ostadApp.push("Apple")
console.log(ostadApp)
*/

/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
ostadApp.reverse();
console.log(ostadApp)
*/



/*
let ostadApp=["Android","IOS","Windows","Mac","Web"]
let res=ostadApp.slice(1,3); // 1,2
console.log(res);
*/


/*
let numbers=[30,55,44,20,77];
numbers.sort()
numbers.reverse()
console.log(numbers);
*/


//------------------Object------------------------
/*
let person={
    name:"ostad",
    age:34,
    city:"Dhaka",
    isBangladeshi:true
}
console.log(person.name)
*/








//------------------String------------------------
/*
let text="Hello world"
let res=text.indexOf("w")
console.log(res)
*/









//------------------JSON------------------------
/*
[1,2,3,4,5,6]
let peoples=[
    {name:"ostad1", age:"34"},
    {name:"ostad2", age:"35"},
    {name:"ostad3", age:"36"}
]
console.log(peoples[0]['age'])
*/

//------------------Navigation Object------------------------
// Practice By Using Browser 






//------------------Window Object------------------------
// Practice By Using Browser 




/*
//------------------ Date Object------------------------
let date=new Date()
console.log(date.getUTCMonth())
// getDay, getYear,getMonth,getHours,getMonth
*/

//------------------ JS Math------------------------
// abs, ceil,floor,max,min,random,round,PI,pow
/*

console.log(Math.abs(-90))
console.log(Math.PI)
console.log((1000+Math.random()*9000))
console.log(Math.pow(2,3))
console.log(Math.sqrt(16))
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))
console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))
*/

/*
let a=[5,4,3,2,1] 
let b=[a[4],a[1],a[2],a[3],a[0]]
console.log(b)
*/

