/**
 * En algunas ocasiones nuestros usuarios pueden tener mala conexión a internet y puede que necesiten de tu ayuda para reintentar varias veces una petición, tu reto es crear una función que haga peticiónes tipo GET a una API usando fetch, pero con un número de intentos, es decir si le envías 3 intentos la petición debe volverse a enviar el número de intentos que hayas especificado.

Si la petición es exitosa en cualquiera de los intentos, debe retornar la información en formato JSON, pero si en todos los intentos hubo un fallo debe retornar un error con el siguiente mensaje "Invalid request with x retries", x siendo el número de intentos.

Recuerda para lanzar los errores debes usar el siguiente bloque de código:

throw new Error('your messsage');

Para solucionarlo vas a encontrar una función llamada fetchRetry que no recibe parámetros de entrada, dentro del cuerpo de la función fetchRetry debes escribir tu solución.

Nota: este reto es muy común en entrevistas de trabajo dentro del ecositema de JavaScript.

Ejemplo:

Input:
await fetchRetry('https://domain-a.com/api-1', 5);

Output:
Invalid request with 5 retries


 */

/**
 * 
 * @param {*} url 
 * @param {*} maxRetries 
 * @returns 
 */

//Una opcion 
async function fetchWithRetries(url, maxRetries) {
  let retries = 0;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      if (retries < maxRetries) {
        retries++;
        console.log(`Reintentando la solicitud (${retries}/${maxRetries})...`);
        return fetchData();
      } else {
        throw new Error(`Máximo número de reintentos (${maxRetries}) alcanzado.`);
      }
    }
  };

  return fetchData();
}

/**
 * 
 * @param {*} url 
 * @param {*} times 
 * @param {*} count 
 * @returns 
 */
//2da opcion
async function fetchRetry(url, times, count = 1) {
  try {
    const response = await window.fetch(url);
    return response.json();
  } catch (error) {
    if (times === 1) {
      throw Error(`Invalid request with ${count} retries`)
    } else {
      return fetchRetry(url, times - 1, count + 1);
    }
  }
}