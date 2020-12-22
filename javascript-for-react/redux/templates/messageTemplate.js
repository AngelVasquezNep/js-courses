const messageTemplate = (message) => `
  <p>
    ${message.message}
    <br />
    <small>${message.createdAt}</small>
    <button class="message-delelte-button" data-id="${message.id}">x</button>
  </p>
`;

export default messageTemplate;
