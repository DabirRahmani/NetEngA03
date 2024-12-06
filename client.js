const socket = new WebSocket("ws://localhost:8080", []);
//const socket = new WebSocket("ws://localhost:8080", ["permessage-deflate"]); // + فشرده سازی

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

//a long text a long text a long texta long text a long text a long texta long text a long text a long texta long text a long text a long texta long text a long text a long texta long text a long text a long texta long text a long text a long texta long text a long text a long text
// in compression mode  ["permessage-deflate"]
// 637 byte http req to server
// 237 byte response from server
// 352 byte message client to server
// 367 byte message server to client
