//1ra manera agregando eventListener a cada elemento item (se afecta el performance)
// const listItems = document.querySelectorAll("li")
// listItems.forEach( (item) => { 
//     item.addEventListener("click",(event)=>{ 
//         event.target.classList.toggle("highlight")
//     })
// })

//2a manera agregando la delegación del eventListener al elemento padre 
// Selecciona el primer elemento <ul> del documento
const list = document.querySelector("ul");

// Agrega un event listener al elemento <ul> para el evento 'click'
list.addEventListener("click", (event) => {
    // Cuando se hace clic en cualquier parte de la lista:

    // 1. event.target: Obtiene el elemento exacto en el que se hizo clic
    // 2. closest("li"): Busca el ancestro <li> más cercano al elemento clicado
    // 3. classList.toggle("highlight"): Alterna la clase "highlight" en el <li>
    //    - Si el <li> no tiene la clase, se la agrega
    //    - Si el <li> ya tiene la clase, se la quita
    event.target.closest("li").classList.toggle("highlight");
});
