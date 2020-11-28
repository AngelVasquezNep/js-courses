// To test concurrency

/**
 No logro entender cómo testear la idea de que cada cosa asíncrona
 crea su propio thread.
 aquí intente colocar un new Date pero aunque no bloquean el hilo principal,
 no acaban al mismo tiempo, sino que se hacen una después de otra.
*/

const getDate = () => new Date();

function expensiveProcess(cb, n = 0) {
  setTimeout(() => {
    const final = 10000000000 + n;
    for (let i = 0; i < final; i++) {}
    cb();
  }, 1000);
}

function cb() {
  console.log(getDate());
}

function main() {
  console.log("Init");

  expensiveProcess(cb, 0);
  expensiveProcess(cb, 0);
  expensiveProcess(cb, 0);
  expensiveProcess(cb, 0);

  console.log("End");
}

main();
