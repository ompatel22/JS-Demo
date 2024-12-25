// const students = [
//     {
//       name: "Alice",
//       age: 20,
//       subjects: ["Math", "Physics", "Chemistry"],
//       address: {
//         city: "New York",
//         zip: 10001
//       }
//     },
//     {
//       name: "Bob",
//       age: 22,
//       subjects: ["Biology", "English", "History"],
//       address: {
//         city: "Los Angeles",
//         zip: 90001
//       }
//     },
//     {
//       name: "Charlie",
//       age: 21,
//       subjects: ["Computer Science", "Math"],
//       address: {
//         city: "Chicago",
//         zip: 60601
//       }
//     }
// ];


// const student={    
//     name: "Alice",
//     age: 20,
//     subjects: ["Math", "Physics", "Chemistry"],
//     address: {
//       city: "New York",
//       zip: 10001
//     }
// }

// function printData(){
//     let num=0;
//     students.forEach(st=>{
//         num++;
//         console.log(`student - ${num} details`);
//         console.log(`name : ${st.name}`);
//         console.log(`age : ${st.age}`);
//         let i=0;
//         st.subjects.forEach(sub=>{
//             i++
//             console.log(`sub ${i}: ${sub}`);
//         });
//         console.log(`address - city : ${st.address['city']}`);
//         console.log(`address - zip  : ${st.address.zip}`);
//     });
// }

// printData();

// for(let key in student){
//     console.log('key :',key,' value :',student[key]);
// } 

// function printData2(){
//     let num=0;
//     for(const st of students){
//         num++;
//         console.log(`student-${num} details`);
//         console.log(`name : ${st.name}`);
//         console.log(`age : ${st.age}`);

//         let i=0;
//         for(const sub of st.subjects){
//             i++;
//             console.log(`subject ${i} :${sub}`)
//         }

//         for(const key in st.address){
//             console.log(`${key} : ${st.address[key]}`);
//         }
//     }
// }

// printData2();
// let img=document.getElementById('dog_img');
// let divx=document.getElementById('divx');

// let fetchDog = async (url) => {
//     try {
//         let resp = await fetch(url);
//         if (!resp.ok) {
//             throw new Error(`${resp.status}`);
//         }
//         let data = await resp.json();
//         img.setAttribute('src',`${data.message}`);
//         console.log(data);
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// function fetchCat(url){
//     fetch(url)
//     .then(respose=>{
//         if(!respose.ok){
//             throw new Error(`${respose.status}`);
//         }
//         return respose.json();
//     })
//     .then(datax=>{
//         console.log(datax);
//         divx.textContent+=` ${datax.data[0]}`;
//     })
//     .catch(err=>console.error(err));
// }

// fetchDog('https://dog.ceo/api/breeds/image/random');
// fetchCat('https://meowfacts.herokuapp.com/');