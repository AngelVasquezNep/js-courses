/**
 * Preguna original (traducida):
 * ¿Cómo hacer que se imprima un número después de otro de forma asíncrona y sincrona?
 * Imagino que la pregunta era para ver diferencias...
 */


// Que NO sea asíncrono:

for (let i = 0; i < 10; i++) {
  console.log("[síncrono] Hola mundo, [x]: ", i);
}


// Que sea asíncrono:

let i = 0;

setInterval(() => {
  if (i < 10) {
    console.log("[asíncrono] Hola mundo, [x]: ", i);
    i++;
  }
}, 100);


// Si quisieras usar un for se me ocurre algo así (pero no me gusta mucho :P ):

const delay = (time = 100) =>
  new Promise((resolve) => setTimeout(resolve, time));

(async function counter() {
  for (let i = 0; i < 10; i++) {
    await delay();
    console.log("[Promises] Hola mundo, [x]: ", i);
  }
})()
