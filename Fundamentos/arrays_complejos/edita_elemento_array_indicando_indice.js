/**
 * Tienes un array de números y tienes que modificar un valor de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y queremos modificar la posición 0 con el valor 'change', esto me debería retornar ['change', 2, 3] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3],

Para solucionarlo vas a encontrar una función llamada updateArray que tiene dos parámetros de entrada:

array: Un array de números.
index: La posición que se quiere modificar.
newValue: El nuevo valor
Dentro del cuerpo de la función updateArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], 0, "change"
Output: ["change", 2, 3]

Ejemplo 1:

Input: ["A", "B", "C"], 1, 1
Output: ["A", 1, "C"]


 */
export function updateArray(array, index, newValue) {
    // Tu código aquí 👈
    let supportArray = [...array]
  
    supportArray[index]=newValue
    console.log(supportArray)
    return supportArray
  }
  
