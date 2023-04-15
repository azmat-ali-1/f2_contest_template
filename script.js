/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  function callback(element){
    if(element.profession=="developer"){
      console.log(element);
    }
  }
  arr.map(callback);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  function callback(element){
    if(element.profession=="developer"){
      console.log(element);
    }
  }
  arr.forEach(callback);
}

function addData() {
  //Write your code here, just console.log
  let b=
  {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(b);
  console.log(b);
  arr.sort();
}

function removeAdmin() {
  //Write your code here, just console.log
 
  for(let j=0;j<arr.length;j++){
    if(arr[j].profession=="admin"){
      let index = j;
      for(let i=index;i<arr.length-1;i++){
        arr[i]=arr[i+1];
      }
      arr.pop();
     break;
    }
  }
  print(arr);
}

function print(anotherarr){

  function prt(element){
console.log(element);
  }
  anotherarr.forEach(prt);
}
function concatenateArray() {
  //Write your code here, just console.log
  let anotherarr=
  [{id:19,name:"azmat",age :25,profession:"engineer"},
  {id:20,name:"ali",age :25,profession:"engineer"},
  {id:21,name:"khan",age :25,profession:"engineer"},
  {id:22,name:"pathan",age :25,profession:"engineer"}
]
const concatearr= arr.concat(anotherarr);
print(concatearr);
}
