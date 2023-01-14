const addNodeButton = document.getElementById("add-node-button");
const linkedList = document.getElementById("linked-list");
const userInput = document.getElementById("input-node-value");

addNodeButton.addEventListener("click", pushNode);


function pushNode() {
    /* Pushes a new node with a value specified by the user */

    // Change the previous node next to the new node value
    const nodeValue = userInput.value;
    const lastNodeNextValue = linkedList.lastElementChild.lastElementChild.firstElementChild;
    lastNodeNextValue.innerText = nodeValue;

    // Create a new node
    const newNode = document.createElement("div");
    newNode.className = "node";

    // specifies the index of the new node
    const lastNodeIndex = linkedList.lastElementChild.firstElementChild.innerText;
    const nodeIndex = document.createElement("div");
    nodeIndex.innerText = Number(lastNodeIndex) + 1;
    nodeIndex.className = "node-index";
    newNode.appendChild(nodeIndex);

    // creates the body of the new node
    const nodeBody = document.createElement("div");
    nodeBody.className = "node-body";
    newNode.appendChild(nodeBody);

    // Show the new node value 
    const nodeValueText = document.createElement("div");
    nodeValueText.className = "node-value-text";
    nodeValueText.innerText = "Value: "
    newNode.appendChild(nodeValueText);
    const trueNodeValue = document.createElement("span");
    trueNodeValue.className = "true-node-value";
    trueNodeValue.innerText = nodeValue;
    nodeValueText.appendChild(trueNodeValue);
    
    // initialize node next as null
    const nodeNextText = document.createElement("div");
    nodeNextText.className = "node-next-text";
    nodeNextText.innerText = "Next: "
    newNode.appendChild(nodeNextText);
    const trueNodeNext = document.createElement("span");
    trueNodeNext.className = "true-node-next";
    trueNodeNext.innerText = "null";
    nodeNextText.appendChild(trueNodeNext);



    linkedList.appendChild(newNode);
}

