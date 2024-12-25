// // alert("this is an alert")

// // *****var and datatypes*****
// fullname = 'ompatel'
// age = 18
// price = 99.99
// x = null
// y = undefined
// isfollow = true
// //JS is dynamically typed lang & there for type of data can be chanegd dynamically
// fullname = 20
// console.log(fullname)

// //*****var,let,const*****
// //var-global, can be redeclared & updated
// //let-local, can not be redeclared but can be updated
// //const-local, can not redeclared & updated, must be initialized

// //*****Datatypes 7-primitive & non-primitive-objects*****
// const student = {
//     name: 'om',
//     age: 20,
//     cgpa: 9.8,
//     isPass: true
// }
// console.log(student.name)
// student.name = student['name'] + 'patel' //const obj's properties can be changed!, but const var's value can't
// console.log(student['name'])

// //*****operators*****
// //+,-,*,/,%,**,++,--
// let a = 10, b = 20
// console.log('a+b=', a + b)

// console.log(5 == 5)//true
// console.log(5 == '5')//true
// console.log(5 === 5)//true
// console.log(5 === '5')//false Note:=== is more strict

// //*****prompt & alert*****
// //let namex=prompt('enter your name')
// //console.log(namex)
// //alert("hello, "+namex)

// //*****loops & strings*****
// for (let i = 0; i < 5; i++)
//     console.log("hello")

// let i = 0
// while (i < 5) {
//     console.log("hello")
//     i++
// }

// do {
//     console.log('hello')
//     i++
// } while (i < 10);

// //for-of
// let arr = [1, 2, 3, 4, 5]
// for (let i of arr)
//     console.log(i)

// let str = 'ompatel';
// for (let i of str)
//     console.log(i);

// const car = {
//     name: 'exter',
//     brand: 'hyundai',
//     price: 1000000
// };

// //for-in
// for (let key in car) {
//     console.log('key->' + key, 'val->', car[key]);
// }

// //strings
// let strx = 'hello world';
// console.log('length:' + strx.length);
// console.log('toUpperCase:', strx.toUpperCase());
// console.log(strx[0]);

// //template literal
// let specialstr = `this is a template literal`
// console.log(typeof specialstr) //op->string

// console.log(`details of car=> name:${car.name} and brand:${car.brand}`)

// // let fullnamex=prompt('enter your full name:').trim();
// // let username='@'+fullnamex+fullnamex.length;
// // alert(`your username is: ${username}`);

// let marks = [97, 'om', 76, 87, 'om'];
// for (let i in marks) {
//     console.log(marks[i]);
// }
// console.log(marks.length);
// console.log(typeof marks);

// let newstr = '01234567';
// console.log(newstr.slice(3));

// let nums = [1, 2, 3, 4, 5];
// nums.splice(2, 2, 30, 40);
// console.log(nums);
// nums.splice(1, 1);
// console.log(nums);
// nums.splice(1, 0, 2)
// console.log(nums);
// nums.splice(0, 1, 10);
// console.log(nums);
// nums.splice(3);
// console.log(nums);
// nums.splice();
// console.log(nums);

// let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'ibm', 'netflix'];
// companies.shift();
// console.log(companies);
// companies.splice(1, 1, 'ola');
// console.log(companies);
// companies.push('amazon');
// console.log(companies);

// //*****functions & methods*****
// function dis(msg) {//parameter
//     console.log(msg);
// }
// dis('hello func:dis()');//arg

// //arrow func
// const sum = (x, y) => {
//     return x + y;
// }
// console.log('sum:', sum(4, 5));

// const noOfVowels=(str) => {
//     let c = 0;
//     for (let i of str) {
//         if (i === 'a' || i === 'A') {
//             c++;
//         }
//     }
//     return c;
// }
// console.log(noOfVowels('aaabcd'));

// let arrx=[1,2,3,4,5];
// arrx.forEach((val,ind,arr)=>console.log(val,ind,arr));
// arrx.forEach(function printVal(val){
//     console.log(val);
// });

// let evenArr=arrx.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenArr);

// let ans=arrx.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log('sum',ans);

// let max=arrx.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// });
// console.log('max',max);

// let marksx=[98,87,95,89];
// let ansx=marksx.filter((val)=>{
//     return val>90;
// });
// console.log(ansx);

// // let ipn=parseInt(prompt('enter a num'));
// // let numsx=[];
// // for(let i=0;i<ipn;i++){
// //     numsx.push(i+1);
// // }
// // console.log('nums',numsx);
// // let prod=numsx.reduce((res,curr)=>{
// //     return res*curr;
// // });
// // console.log('prod',prod);

//*****DOM*****
// console.dir(document.body);
// console.log(document.body); 

// let para=document.getElementById('para');
// para.style.color='red';
// para.style.backgroundColor='yellow';

// const random = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// document.body.style.backgroundColor = random;

// let divs=document.getElementsByClassName('divs');
// for(let div of divs){
//     div.style.backgroundColor='pink';
// }
// divs[0].textContent='new div1'; 

// let btn=document.querySelector('#btn');
// btn.style.backgroundColor='orange';

// let headings=document.querySelectorAll('.hc');
// for(let heading of headings){
//     heading.style.color='green';
// }
// headings[0].textContent='new heading';

// console.log(document.body.children[0]);

// let ele=document.body.children[0];
// ele.textContent='Hello!!'

// let ele=document.getElementById('id1');
// ele.innerText+=' from Om Patel!';

// let eles=document.getElementsByClassName('box');
// // eles[0].textContent='div1';
// // eles[1].textContent='div2';
// // eles[2].textContent='div3';
// let ind=1;
// for(ele of eles){
//     ele.innerText=`new val: ${ind}`;
//     ind++;
// }

// let btn = document.createElement('button');
// btn.style.color = 'white';
// btn.style.backgroundColor = 'red';
// btn.innerHTML = '<i>click me</i>';

// document.querySelector('body').prepend(btn);

// let para = document.querySelector('.pc');
// para.classList.add('newpc');

// let btn=document.getElementById('btn');
// btn.onclick=()=>{
//     console.log('hi1');
//     let a=50;
//     console.log(a);
// };

// btn.onclick=()=>{
//     console.log('hi2');
// };

// btn.addEventListener('click',(e)=>{
//     console.log('eh1');
// });

// btn.addEventListener('click',(e)=>{
//     console.log('eh2');
// });

// let btn=document.getElementById('btn');
// let cm='l';
// btn.addEventListener('click',()=>{
//     if(cm==='l'){
//         cm='d';
//         document.body.style.backgroundColor='black';
//         btn.innerText='change to light mode';
//     }
//     else{
//         cm='l';
//         document.body.style.backgroundColor='white';
//         btn.innerText='change to dark mode';
//     }
// });

//*****classes & objects******
// const student = {
//     fname: 'ompatel',
//     age: 20,
//     marks: 9.8,
//     printMarks() {
//         console.log(this.marks);
//     },
//     getName: function () {
//         console.log(this.fname);
//     },
//     getAge: function () {
//         console.log(this.age);
//     },
//     print() {
//         console.log('hello');
//     }
// };

// const employee={
//     calcTax(){
//         console.log('10%');
//     }
// };

// const om={
//     salary:50000
// };

// om.__proto__=employee;

// class Car{
//     constructor(bname,mileage){
//         this.brandname=bname;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log('started');
//     }
//     stop(){
//         console.log('stopped');
//     }
//     setBrand(brand){
//         this.brandname=brand;
//     }

// }

// let exter=new Car('hyundai',20);
// let creta=new Car('hyundai',25);
// console.log(creta.brandname,creta.mileage);
// console.log(exter.brandname,exter.mileage);

//inheritance
// class Parent{
//     constructor(){
//         console.log('p cons');
//     }
//     hello(){
//         console.log('hello');
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super();
//         console.log('c cons');
//     }
// }
// let obj=new Child();
// let DATA='xyz';
// class User{
//     constructor(name, email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(this.name);
//         console.log(this.email);
//         console.log(DATA);
//     }
// }
// class Admin extends User{
//     editData(){
//         DATA='abc';
//     }
// }
// let u1=new User('om','omupatel22@gmail.com');
// u1.viewData();
// let a1=new Admin('aum','@');
// a1.editData();
// u1.viewData();
// a1.viewData();

//err handling
// try{
//     //let ans=10/0;
//     throw new Error('new err');
// }
// catch(err){
//     console.error(err);
// }

