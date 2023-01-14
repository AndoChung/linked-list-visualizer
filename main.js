const addNodeButton = document.getElementById("add-node-button");
const linkedList = document.getElementById("linked-list");
const userInput = document.getElementById("input-node-value");

addNodeButton.addEventListener("click", pushNode);


function pushNode() {
    const newNode = document.createElement("div");
    newNode.className = "node";

    const lastNodeIndex = linkedList.lastElementChild.firstElementChild.innerText;
    const nodeIndex = document.createElement("div");
    nodeIndex.innerText = Number(lastNodeIndex) + 1;
    nodeIndex.className = "node-index";
    newNode.appendChild(nodeIndex);

    const nodeBody = document.createElement("div");
    nodeBody.className = "node-body";
    newNode.appendChild(nodeBody);

    const nodeValue = userInput.value;

    const nodeValueText = document.createElement("div");
    nodeValueText.className = "node-value-text";
    newNode.appendChild(nodeValueText);
    const trueNodeValue = document.createElement("div");
    trueNodeValue.className = 



    linkedList.appendChild(newNode);
}

