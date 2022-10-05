function myFunction (){
    let t = document.getElementById("mam");
if(!t.checkValidity) {
    document.getElementById("yo").innerHTML=typeMismatch;
}else{
    document.getElementById("yo").innerHTML= "input Ok"
    }
}
function myFunctionnn() {
    window.history.back()
}
var bbb = document.getElementById("dark-light") 
bbb.addEventListener("click", () => {
   document.body.classList.toggle("dark")
}
)

function commenceClocking() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let t ="AM"
   
if(h == 0){
        h = 12;
}
if(m < 10){
    m = "0" + m;
}
if(s < 10){
    s = "0" + s;
}
 if(h > 12){
    h = "0" + (h - 12 );
    t = "PM";
} 
document.getElementById("manipulate").innerHTML= 
    h + " : " + m + " : " + s + "  " + t;
    
    setInterval(commenceClocking, 1000)
}
