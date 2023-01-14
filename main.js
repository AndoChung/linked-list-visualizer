const addNodeButton = document.getElementById("add-node-button");
const firstNode = document.getElementById("first-node");
const linkedList = document.getElementById("linked-list");


addNodeButton.addEventListener("click", pushNode);


function pushNode() {
    const newDiv = document.createElement("div");
    newDiv.className = "node-body";
    linkedList.appendChild(newDiv);
}