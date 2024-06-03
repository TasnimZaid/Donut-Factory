function submitOrder() {
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;


    var welcoming;
    if (gender.toLowerCase() === 'male') {
        welcoming = 'Mr. ' + name;
    } else if (gender.toLowerCase() === 'female') {
        welcoming = 'Ms. ' + name;
    } else {
        welcoming = name;
    }

    var order = prompt('Choose from menue (Donut/Coffee/Ice Cream/Bakery)?');
    var item = prompt('Enter the name of your order:');

    alert('Your order is being prepared.');

    var message = welcoming + ' ordered ' + item;
    console.log(message); 
    document.getElementById('message').innerText = message;
}


