function submitOrder() {
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;


    
  var welcoming ;
     if (gender == "female"){
     alert("MS." + name) ;
     welcoming = 'Ms. ' + name;
     }
    else if( gender == "male") { 
     alert("Mr." + name) ;
     welcoming = 'Mr. ' + name;
    }
     else{
     while(gender != "female" || gender != "male"){
         gender = prompt("wrong in gender , please tery again");
         if (gender == "female"){
             alert("MS." + name) ;
             break;
         }
         else if( gender == "male") { 
             alert( welcoming = "Mr." + name) ;
             break;
          }
   }
 
  }
   

    var order = prompt('Choose from menue (Donut/Coffee/Ice Cream/Bakery)?');
    var item = prompt('Enter the name of your order:');

    alert('Your order is being prepared.');

    var message = welcoming + ' ordered ' + item;
    console.log(message); 
    document.getElementById('message').innerText = message;
    const answerarray= [];
    answerarray.push(name , gender ,order , item );
    console.log(answerarray);
}


 

 
 
 
 