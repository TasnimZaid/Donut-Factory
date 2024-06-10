// function submitOrder() {
//   var name = document.getElementById('name').value;
//   var gender = document.getElementById('gender').value;


  
// var welcoming ;
// function GenderFunction(gender) {
//   if (gender == "female"){
//       alert("MS." + name) ;
//       welcoming = 'Ms. ' + name;
//       }
//      else if( gender == "male") { 
//       alert("Mr." + name) ;
//       welcoming = 'Mr. ' + name;
//      }
//       else{
//       while(gender != "female" || gender != "male"){
//           gender = prompt("wrong in gender , please tery again");
//           if (gender == "female"){
//               alert("MS." + name) ;
//               break;
//           }
//           else if( gender == "male") { 
//               alert( welcoming = "Mr." + name) ;
//               break;
//            }
//     }
  
//    }
    

//   return welcoming;
// }
  
//   GenderFunction()
//   var Age = prompt('Enter your Age : ')
//   var order = prompt('Choose from menue (Donut/Coffee/Ice Cream/Bakery)?');
//   var item = prompt('Enter the name of your order:');

//   alert('Your order is being prepared.');

//   var message = welcoming +  order + item;
//   console.log(message); 
//   document.getElementById('message').innerText = message;
//   const answerarray= [];
//   answerarray.push(name , gender ,order , item );
//   console.log(answerarray);

//  //  add new element :
//  const newDiv = document.createElement('div');
//  const newP = document.createElement('p') ;
//  const newul = document.createElement('ul');
//  //  add text 
//  newP.innerHTML = name ; 

//  const items = [
//     "gender :  " + gender ,
//     "Age  :  " + Age ,
//     "order  :  " + order 
//  ]

// // appendChild
// newDiv.appendChild(newP) ;
// newP.appendChild(newul);
// for(let i = 0 ; i <items.length ; i++){
// const newli = document.createElement('li') ;
// newli.innerHTML = items[i] ;
// newul.appendChild(newli);

// }  

// document.body.appendChild(newDiv);
  
// console.log(name)
// }

function submitted(event){
  event.preventDefault(); //عشان ما يعمل ريفريش للمعلومات وتروح من عنا 
  let userInf = document.getElementById("user-inf") ;
  
  //the event Target عشان يرجع القيم الموجودين جوا الفورم و بقدر استدعيهم من خلال جيت اليمنت باي اي دي 

  let form = event.target ;
  let fullname = form.fullname.value;
  let gender = form.gender.value ; 
  let age = form.age.value ;
  let ordertype = form.ordertype.value ;
  let drink = form.drink.value ;

  userInf.innerHTML = "Full Name : "  + fullname + "<br>" 
  + "Gender : " + gender + "<br>" + " Age : " + age + "<br>" + "Order Type :"+ ordertype + "<br>" + "Drink : " + drink ;
}

let form = document.getElementById('form') ;
form.addEventListener("submit" , submitted);
 