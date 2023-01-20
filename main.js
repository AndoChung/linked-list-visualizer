let apply = document.getElementById("apply-push");
const linkedList = document.getElementById("linked-list");
let userInputValue = document.getElementById("input-node-value");
const toolbar = document.getElementById("toolbar");
let method = document.getElementById("method");
let inputNodeValueDiv = document.getElementById("input-node-value-div");
const inputDiv = document.getElementById("input-div")

method.addEventListener("change", changeMethod);
apply.addEventListener("click", () => {pushNode(); popNode(); shiftNode(); unshiftNode(); setNode(); insertNode(); removeNode(); reverse()});



function pushNode() {
    /* Add a new node at the end of the linked list */

    if (apply.id === "apply-push") {
        // Change the previous node next to the new node value
        const lastNode = linkedList.lastElementChild;
        const nodeValue = userInputValue.value;
        const lastNodeNextValue = lastNode.getElementsByTagName("div")[3].firstElementChild;
        lastNodeNextValue.innerText = nodeValue;

        // Create arrow
        let arrow = addArrow();
        linkedList.appendChild(arrow);

        // Create a new node
        let newNode = addNewNode();

        // specifies the index of the new node
        newNode.getElementsByTagName("div")[0].innerText = Number(lastNode.firstElementChild.innerText) + 1;

        // Show the new node value 
        newNode.getElementsByTagName("div")[2].lastElementChild.innerText = nodeValue;
        
        // initialize node next as null
        newNode.getElementsByTagName("div")[3].lastElementChild.innerText = "null";

        // Append the node onto the linked list
        linkedList.appendChild(newNode);
    }
}

function popNode() {
    /* Removes the last node */

    if (apply.id === "apply-pop") {
        // Remove the last node and the last arrow
        linkedList.lastElementChild.remove();
        linkedList.lastElementChild.remove();

        // Change the previous node next to null
        let lastNode = linkedList.lastElementChild;
        lastNode.lastElementChild.lastElementChild.innerText = "null";
    }
}

function shiftNode() {
    /* Remove the first node*/

    if (apply.id === "apply-shift") {
        // Remove the first node and the first arrow
        linkedList.firstElementChild.remove();
        linkedList.firstElementChild.remove();

        // Update the indexes of the nodes
        let divTotal = linkedList.getElementsByTagName("div").length;
        for (let i = 1; i < divTotal; i+=6) {
            let nodeIndex = linkedList.getElementsByTagName("div")[i];
            linkedList.getElementsByTagName("div")[i].innerText = Number(nodeIndex.innerText) - 1;
        }
    }
}

function unshiftNode() {
    /* add a new node at the beginning of the linked list */

    if (apply.id === "apply-unshift") {

        const nodeValue = userInputValue.value;

        // Create a new node
        let newNode = addNewNode();

        // Initialize the node index
        newNode.getElementsByTagName("div")[0].innerText = 0;

        // Shift the node indexes of the other nodes
        let divTotal = linkedList.getElementsByTagName("div").length;
        for (let i = 1; i < divTotal; i+=6) {
            let otherNodeIndex = linkedList.getElementsByTagName("div")[i];
            linkedList.getElementsByTagName("div")[i].innerText = Number(otherNodeIndex.innerText) + 1;
        }
    
        // Show the new node value
        newNode.getElementsByTagName("div")[2].lastElementChild.innerText = nodeValue;
        
        // Show the next node value
        newNode.getElementsByTagName("div")[3].lastElementChild.innerText = linkedList.firstElementChild.getElementsByTagName("div")[2].lastElementChild.innerText;
        
        // Create arrow
        let arrow = addArrow();
        linkedList.insertBefore(arrow, linkedList.firstElementChild);

        // Append Node
        linkedList.insertBefore(newNode, linkedList.firstElementChild);
    }
}

function setNode() {
    if (apply.id === "apply-set") {
        let index = userInputIndex.value;
        linkedList.getElementsByClassName("node")[index].getElementsByTagName("div")[2].lastElementChild.innerText = userInputValue.value;
        linkedList.getElementsByClassName("node")[index - 1].getElementsByTagName("div")[3].lastElementChild.innerText = userInputValue.value;
    }
}

function insertNode() {
    if (apply.id === "apply-insert") {
        let userInputIndex = document.getElementById("input-node-index");

        let newNode = addNewNode();
        newNode.getElementsByTagName("div")[0].innerText = userInputIndex.value;
        newNode.getElementsByTagName("div")[2].lastElementChild.innerText = userInputValue.value;
        nextNodeValue = linkedList.getElementsByClassName("node")[Number(userInputIndex.value)].getElementsByTagName("div")[2].lastElementChild.innerText;
        newNode.getElementsByTagName("div")[3].lastElementChild.innerText = nextNodeValue;
        linkedList.getElementsByClassName("node")[Number(userInputIndex.value) - 1].lastElementChild.lastElementChild.innerText = userInputValue.value;

        let divTotal = linkedList.getElementsByTagName("div").length;
        let startingIndex = userInputIndex.value * 6 + 1;
        for (let i = startingIndex; i < divTotal; i+=6) {
            let nodeIndex = linkedList.getElementsByTagName("div")[i];
            linkedList.getElementsByTagName("div")[i].innerText = Number(nodeIndex.innerText) + 1;
        }
        
        let arrow = addArrow();
        linkedList.insertBefore(newNode, linkedList.getElementsByClassName("node")[userInputIndex.value]);
        linkedList.insertBefore(arrow, linkedList.getElementsByClassName("node")[Number(userInputIndex.value) + 1]);
    }
}

function removeNode() {
    if (apply.id === "apply-remove") {
        let userInputIndex = document.getElementById("input-node-index");

        let newValue = linkedList.getElementsByClassName("node")[Number(userInputIndex.value) + 1].getElementsByTagName("div")[2].lastElementChild.innerText;
        linkedList.getElementsByClassName("node")[Number(userInputIndex.value) - 1].lastElementChild.lastElementChild.innerText = newValue;
        
        linkedList.getElementsByTagName("div")[userInputIndex.value * 6].remove();
        linkedList.getElementsByTagName("div")[userInputIndex.value * 6].remove();

        let divTotal = linkedList.getElementsByTagName("div").length;
        let startingIndex = userInputIndex.value * 6 + 1;
        for (let i = startingIndex; i < divTotal; i+=6) {
            let nodeIndex = linkedList.getElementsByTagName("div")[i];
            linkedList.getElementsByTagName("div")[i].innerText = Number(nodeIndex.innerText) - 1;
        }
    }
}

function reverse() {
    if (apply.id === "apply-reverse") {
        let nodeTotal = linkedList.getElementsByClassName("node");
        for (let i = 0; i < nodeTotal.length / 2; i++) {
            let firstNodeVal = nodeTotal[i].getElementsByTagName("div")[2].lastElementChild;
            let secondNodeVal = nodeTotal[nodeTotal.length - i - 1].getElementsByTagName("div")[2].lastElementChild;
            [firstNodeVal.innerText, secondNodeVal.innerText] = [secondNodeVal.innerText, firstNodeVal.innerText];
        }
        for (let i = 0; i < nodeTotal.length - 1; i++) {
            let nextNodeVal = nodeTotal[i + 1].getElementsByTagName("div")[2].lastElementChild.innerText;
            nodeTotal[i].getElementsByTagName("div")[3].lastElementChild.innerText = nextNodeVal;
        }
        nodeTotal[nodeTotal.length - 1].getElementsByTagName("div").lastElementChild = "null";
    }
}


function changeMethod() {
    if (!(document.getElementById("input-node-value") === null)) {
        inputNodeValueDiv.remove();
    }
    if (!(document.getElementById("input-node-index") === null)) {
        inputNodeIndexDiv.remove();
    }
    method = document.getElementById("method");
    methodVal = method.value;
    if (methodVal === "push") {
        apply.id = "apply-push";
        if (document.getElementById("input-node-value") === null) {
            addValueInput();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    } else if (methodVal === "pop") {
        apply.id = "apply-pop";
        if (!(document.getElementById("input-node-value") === null)) {
            inputNodeValueDiv.remove();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    } else if (methodVal === "shift") {
        apply.id = "apply-shift";
        if (!(document.getElementById("input-node-value") === null)) {
            inputNodeValueDiv.remove();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    } else if (methodVal === "unshift") {
        apply.id = "apply-unshift";
        if (document.getElementById("input-node-value") === null) {
            addValueInput();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    } else if (methodVal === "set") {
        apply.id = "apply-set"
        if (document.getElementById("input-node-value") === null) {
            addValueInput();
        }
        if (document.getElementById("input-node-index") === null) {
            addIndexInput();
        }
    } else if (methodVal === "insert") {
        apply.id = "apply-insert";
        if (document.getElementById("input-node-value") === null) {
            addValueInput();
        }
        if (document.getElementById("input-node-index") === null) {
            addIndexInput();
        }
    } else if (methodVal === "remove") {
        apply.id = "apply-remove";
        if (document.getElementById("input-node-index") === null) {
            addIndexInput();
        }
        if (!(document.getElementById("input-node-value") === null)) {
            inputNodeValueDiv.remove();
        }
    } else if (methodVal === "reverse") {
        apply.id = "apply-reverse"
        if (!(document.getElementById("input-node-value") === null)) {
            inputNodeValueDiv.remove();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    }
}
function addValueInput() {
    inputNodeValueDiv = document.createElement("div");
    inputNodeValueDiv.id = "input-node-value-div";
    userInputValue = document.createElement("input");
    let valueString = document.createElement("h2");
    valueString.innerText = "Value";
    userInputValue.id = "input-node-value";
    inputNodeValueDiv.appendChild(valueString);
    inputNodeValueDiv.appendChild(userInputValue);
    inputDiv.appendChild(inputNodeValueDiv);
}
function addIndexInput() {
    inputNodeIndexDiv = document.createElement("div");
    inputNodeIndexDiv.id = "input-node-index-div";
    userInputIndex = document.createElement("input");
    userInputIndex.type = "number";
    let indexString = document.createElement("h2");
    indexString.innerText = "Index #";
    userInputIndex.id = "input-node-index";
    inputNodeIndexDiv.appendChild(indexString);
    inputNodeIndexDiv.appendChild(userInputIndex);
    inputDiv.appendChild(inputNodeIndexDiv);
}
function addNewNode() {
    const newNode = document.createElement("div");
    newNode.className = "node";

    const nodeIndex = document.createElement("div");
    nodeIndex.className = "node-index";
    newNode.appendChild(nodeIndex);

    const nodeBody = document.createElement("div");
    nodeBody.className = "node-body";
    newNode.appendChild(nodeBody);

    const nodeValueText = document.createElement("div");
    nodeValueText.className = "node-value-text";
    nodeValueText.innerText = "Value: "
    newNode.appendChild(nodeValueText);
    const trueNodeValue = document.createElement("span");
    trueNodeValue.className = "true-node-value";
    nodeValueText.appendChild(trueNodeValue);

    const nodeNextText = document.createElement("div");
    nodeNextText.className = "node-next-text";
    nodeNextText.innerText = "Next: "
    newNode.appendChild(nodeNextText);
    const trueNodeNext = document.createElement("span");
    trueNodeNext.className = "true-node-next";
    nodeNextText.appendChild(trueNodeNext);

    return newNode;
}
function addArrow() {
    const arrow = document.createElement("div");
    arrow.className = "arrow";

    return arrow;
}