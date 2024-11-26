let socket = new WebSocket("ws://localhost:8080");

document.forms.publish.onsubmit = function () {
  let outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

socket.onmessage = function (event) {
  console.log(event);
  let message = event.data;
  let messageElem = document.createElement("div");
  messageElem.textContent = message;
  document.getElementById("messages")?.prepend(messageElem);
};
