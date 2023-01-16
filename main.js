let apply = document.getElementById("apply-push");
const linkedList = document.getElementById("linked-list");
let userInputValue = document.getElementById("input-node-value");
const toolbar = document.getElementById("toolbar");
let method = document.getElementById("method");
let inputNodeValueDiv = document.getElementById("input-node-value-div");

method.addEventListener("change", changeMethod);
apply.addEventListener("click", () => {pushNode(); popNode(); shiftNode(); unshiftNode(); setNode();});

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
        if (!(document.getElementById("input-node-value") === null)) {
            inputNodeValueDiv.remove();
        }
        if (!(document.getElementById("input-node-index") === null)) {
            inputNodeIndexDiv.remove();
        }
    }
}

function pushNode() {
    /* Add a new node at the end of the linked list */

    if (apply.id === "apply-push") {
        // Change the previous node next to the new node value
        const lastNode = linkedList.lastElementChild;
        const nodeValue = userInputValue.value;
        const lastNodeNextValue = lastNode.getElementsByTagName("div")[3].firstElementChild;
        lastNodeNextValue.innerText = nodeValue;

        // Create arrow
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        linkedList.appendChild(arrow);


        // Create a new node
        const newNode = document.createElement("div");
        newNode.className = "node";

        // specifies the index of the new node
        const lastNodeIndex = lastNode.firstElementChild.innerText;
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
        // Create a new node
        const newNode = document.createElement("div");
        newNode.className = "node";

        // Initialize the node index
        const nodeIndex = document.createElement("div");
        nodeIndex.className = "node-index";
        nodeIndex.innerText = 0;
        newNode.appendChild(nodeIndex);

        // Shift the node indexes of the other nodes
        let divTotal = linkedList.getElementsByTagName("div").length;
        for (let i = 1; i < divTotal; i+=6) {
            let otherNodeIndex = linkedList.getElementsByTagName("div")[i];
            linkedList.getElementsByTagName("div")[i].innerText = Number(otherNodeIndex.innerText) + 1;
        }

        // Create the body of the node
        const nodeBody = document.createElement("div");
        nodeBody.className = "node-body";
        newNode.appendChild(nodeBody);

        // Show the new node value
        const nodeValue = userInputValue.value;
        const nodeValueText = document.createElement("div");
        nodeValueText.className = "node-value-text";
        nodeValueText.innerText = "Value: "
        newNode.appendChild(nodeValueText);
        const trueNodeValue = document.createElement("span");
        trueNodeValue.className = "true-node-value";
        trueNodeValue.innerText = nodeValue;
        nodeValueText.appendChild(trueNodeValue);
        
        // Show the next node value
        const nodeNextText = document.createElement("div");
        nodeNextText.className = "node-next-text";
        nodeNextText.innerText = "Next: "
        newNode.appendChild(nodeNextText);
        const trueNodeNext = document.createElement("span");
        trueNodeNext.className = "true-node-next";
        trueNodeNext.innerText = linkedList.firstElementChild.getElementsByTagName("div")[2].lastElementChild.innerText;
        console.log(linkedList.firstElementChild.getElementsByTagName("div")[3]);
        nodeNextText.appendChild(trueNodeNext);
        
        // Create arrow
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        linkedList.insertBefore(arrow,linkedList.firstElementChild);

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

}

function removeNode() {

}

function reverse() {
    
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
    toolbar.insertBefore(inputNodeValueDiv,apply);
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
    toolbar.insertBefore(inputNodeIndexDiv,apply);
}