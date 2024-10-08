/**
 * En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando async/await.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

Ejemplo:

Input:
await runCode();

Output:
["Task 1", "Task 2", "Task 3"]
 */
import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
  const strings = [];
  try {
    const rta1 = await doTask1();
    strings.push(rta1);
    const rta2 = await doTask2();
    strings.push(rta2);
    const rta3 = await doTask3();
    strings.push(rta3);
    return strings;
  } catch (error) {
    console.error(error);
  }
}

export function doTask1() {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve('Task 1'), 300);
    });
  }
  
  export function doTask2() {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve('Task 2'), 300);
    });
  }
  
  export function doTask3() {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve('Task 3'), 300);
    });
  }