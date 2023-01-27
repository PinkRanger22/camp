
/*
document.write("hellou monde");

document.write("\n");
document.write("<br>");

var youLikeMeat = true;

if (youLikeMeat)
{
    document.write("here is your meaty menu....");
}

document.write("\n");
document.write("<br>");

var gato =30;

if (gato>50){
    document.write("Gato is greater than 50");
}else if (gato==30){
    document.write("Gato is equal to 30");
}else if(gato<30){
    document.write("Gato is lesser than 30");
}else if(gato==0){
    document.write("Gato is equal to cero");
}else{
    document.write("does not compute");
}

document.write("<br>");

var age= 33

if (age>=18 && age<=30){
    document.write("Speak 'friend' and enter");
}else if(age<18){
    document.write("fly you fools");
}else if(age>=31){
    document.write("Are you a Dunedain?");
}



var manzana = 5;

while (manzana<10){ 
    document.write("<br>");
    document.write("\n apple");
    manzana++;
}

document.write("<br>");
document.write("\n manzana is now equal to 10");

document.write("<br>");
for (bottle= 1; bottle<=10; bottle++){
    document.write("<br>");
    document.write("bottle bottle bottle");
}
document.write("<br>");
document.write("bottle has reached 10")


*/
/*
var gatito=document.getElementsByTagName("a");

document.write(gatito.length);

for (i=10;i>=gatito.length;i--){
    document.write("this is link number.. "+ i)
}
document.write("<br>");
document.write("w has reached THE A length");


var elements = document.getElementsByTagName(li);
for(i=0; i<elements.length; i++) { 
  document.write("Test");
}
document.write(i);

*/

/*
var coffee = 10;

for(var i=0;i<=coffee;i++){

    document.write("tablespoon of sugar \n"+ i);
    document.write("<br>");
    
    if(i==2 || i==5){
        continue;
    }
    

    if(i==4){
        break;
    }
}
document.write("too much sugar, stop!");



var cellphone=document.getElementsByTagName("a");

for(i=0;i<cellphone.length; i++){
    
    cellphone[i].classname="cellphone" + i ;

}

*/
/*

function promedio(a,b){

    var promedio= (a + b)/ 2;
    console.log(promedio);
    document.write(promedio);
}

promedio(10,2);


var turtleArray = new Array();
turtleArray[0]= 22;
turtleArray[1]= "green";

var turtle = new Object();
turtle.Nombre1="Leonardo";       //propiedades creadas al objeto
turtle.Nombre2="Michelangelo";
turtle.Nombre3="Rafael";
turtle.Nombre="Donatello";
turtle.anio="1990";

console.log(turtle.Nombre3);

turtle.movimiento = function(){console.log("testing")};

turtle.movimiento();

//otra manera de crear objetos poniendole propiedades y funciones:

var turtleTWO ={
    Nombre1:"leo",
    Nombre2:"michel",
    movimiento: function(){
        console.log("testTWO");} 
  };

turtleTWO.movimiento();

console.log(turtleTWO.Nombre1);

*/
/*
var Car = function(maxspeed, driver){
    this.maxspeed= maxspeed;
    this.driver=driver;
    this.drive=function(speed, time){
        console.log(speed*time);
    };
    this.logDriver= function(){
        console.log("driver name is  " + this.driver);
    };

}

var myCar=new Car(70, "ninja");
var myCar2=new Car(50, "nInjA");
var myCar3=new Car(35, "NiNja");
var myCar4=new Car(2, "niNJA");

myCar.drive(30,5);
myCar3.logDriver();

var birthday = new Date (1970 , 0, 11, 11, 15, 25);
var birthday2 = new Date (1971, 0, 12, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){
    console.log("birthdays are equal");
}else{
    console.log("birthdays are not equal");
}
*/

/*
function setUpEvents(){
    var content1=document.getElementById("content1");
    var button= document.getElementById("show");
    
    button.onclick = function(){
        if(content1.className == "open"){
            content1.className="";
            button.innerHTML="show more";
            
        }else{
            content1.className="open";
            button.innerHTML= "Show less";
        }
    };

}

window.onload = function(){
    setUpEvents();
}

*/

/*

var myMessage = document.getElementById("message");

function showMessage(){
    myMessage.className="show";

}

setTimeout(showMessage, 3000); 


var colourChanger = document.getElementById("colour-changer");

var colours = ["pink", "#B8860B","#5F9EA0", "blue", "#00FFFF", "pink"];

var counter = 0;

function changeColour(){

    colourChanger.style.background = colours [counter];
    counter++;

}
setInterval(changeColour, 5000);


*/


/*
var colourChanger = document.getElementById("colour-changer");

var colours = ["pink", "#B8860B","#5F9EA0", "blue", "#00FFFF", "pink"];

var counter = 0;

function changeColour(){
    if(counter >= colours.length){
        counter=0;
    }
    colourChanger.style.background = colours [counter];
    counter++;

}

var myTimer = setInterval(changeColour, 5000);

colourChanger.onclick= function(){
    clearInterval(myTimer);
    colourChanger.innerHTML ="Timer stopped";
};
*/
/*
var myForm = document.forms.myForm;

console.log(myForm);

/*var myForm2 = myForm.name.onfocus;*/
/*
myForm2 = function() {
    myForm.name.style.border= "4px solid pink";

};

console.log(myForm2);
*/

var myForm = document.forms.MyForm;

var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML="please enter a name";

    }else{
        message.innerHTML="";
    }
};