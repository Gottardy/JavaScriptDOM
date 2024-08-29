/**
 *En este desafío debes retornar el string "Hello, World!", con 2 segundos de demora usando setTimeout y está se debe ejecutar mediante una promesa.

Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

Input:
runCode()
.then(response => console.log(response));

Output:
// after => 2s
"Hello, World!"

 **/
export function runCode() {
    // Recuerda si usas setTimeout debes usarlo ejecutando window
    // Ejemplo window.setTimeout(...)
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve("Hello, World!")
      },2000)
    })
  }
  