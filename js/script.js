console.log('javascript is rad');
var number = 10;
var string = 'hello there';

// document.getElementById('box').innerHTML = string;
// document.getElementById('box').innerHTML = number +5;


 var groceries = ['Milk', 'Eggs', 'Cheese'];

// if(number == 10){
//     console.log('its 10');
// }else{
//     console.log('nope');
// }


function listgroceries(){
    for(var i=0; i<groceries.length; i++){
        console.log(groceries[i]);
    }
}

listgroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('i got clicked');
});
