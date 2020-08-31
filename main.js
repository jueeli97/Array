// Collection of similar datatypes


let arrayObj = [1,2,3,4];

for(let num of arrayObj){
    console.log(num);
}


let arrayObj2 =[];
arrayObj2[0]=3;
arrayObj2[1]=6;
arrayObj2[2]=9;
arrayObj2[3]=12;
console.log(typeof(arrayObj2));// object

for(let num of arrayObj2){
    console.log(num);
}




let arrayObj1 = new Array();
arrayObj1.push(2,4,6,8);

for(let num of arrayObj1){
    console.log(num);
}



// Collection of different datatypes

let arrayObjs = new Array();
arrayObjs.push(1);
arrayObjs.push(2);
arrayObjs.push(3);
arrayObjs.push("Hello friends");
arrayObjs.push(true);
arrayObjs.push(arrayObj1);
arrayObjs.push(arrayObj2);

for(let value of arrayObjs){
    console.log(value);

    if(typeof(value)==="object"){
        for(let num of value){
            console.log(num);
        }
    }
}
