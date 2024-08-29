/**
 * En este desafío tienes que consumir la API de Rick And Morthy y en un array retornar solo los nombres de los personajes.

Específicamente debes consumir el endpoint [GET] https://rickandmortyapi.com/api/character el cual retorna toda la información de los personajes, pero tú debes retornar un array con los nombres.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

Input:
await runCode();

Output:
[
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith"
  ...
]
 */
export async function runCode() {
    // Tu código aquí 👈
    try {
      let resp = await fetch("https://rickandmortyapi.com/api/character?page=1")
      let data = await resp.json()
      let dataList = data.results
      //console.log(dataList)
      let listCharacters = []
      dataList.map(character => listCharacters.push(character.name))
      console.log(listCharacters)
      return listCharacters
    } catch (e) {
      console.log("Error: ", e)
    }
  }
  