/**
 * @param {String[]} strings - Los strings que haya dentro del template literal
 * @param {Array} values - Los valores dinámicos
 *
 */

function stronger(strings, ...values) {
  let newMessage = "";

  for (index in strings) {
    const strongedMessage =
      (values[index] && `<strong>${values[index]}</strong>`) || "";

    newMessage += `${strings[index]}${strongedMessage}`;
  }

  console.log(newMessage);

  return newMessage;
}

const message = stronger`Hola ${"mundo"} de React`;

console.log(message);

// Hola <strong>mundo</strong> de React
