/*
let totalclick = 0;
let click = document.getElementById("boton-clicks")
 
function contarClicks(){
    click.addEventListener("click", () =>{
       
        totalclick++;
 
        console.log(totalclick);
        }
    );
}
 
contarClicks()*/
 
// button.addEventListener("click", (event) => {
//     button.textContent = `Click count: ${event.detail}`;
//   });
 
//RETO 2
 
let box = document.getElementById("caja")
 
let opciones = ["Piedra", "Papel", "Tijera"]
 
 
function mouseSobre(){
   
    box.addEventListener("mouseover", () => {
 
        let option = Math.floor(Math.random() * 3);
        box.textContent = opciones[option]
        console.log(box.textContent);
    })
}
 
mouseSobre();
 
 
//RETO 3
function duplicarNum(){
 
}
 
 
document.addEventListener("keydown", function(event) {
    let entero = parseInt(event.key)
 
    if (Number.isInteger(entero)) {
      console.log(entero*2)
    }else{
        console.log("No presionaste un numero")
    }
  });