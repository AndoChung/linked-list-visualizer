let apply = document.getElementById("apply-push");
const linkedList = document.getElementById("linked-list");
const userInput = document.getElementById("input-node-value");
let method = document.getElementById("method");

method.addEventListener("input", changeMethod);
apply.addEventListener("click", () => {pushNode(); popNode(); shiftNode();});

function changeMethod() {
    method = document.getElementById("method");
    methodVal = method.value;
    if (methodVal === "push") {
        apply.id = "apply-push";
    } else if (methodVal === "pop") {
        apply.id = "apply-pop";
    } else if (methodVal === "shift") {
        apply.id = "apply-shift";
    } else if (methodVal === "unshift") {
        apply.id = "apply-unshift";
    }
}

function pushNode() {
    /* Add a new node at the end of the linked list */

    if (apply.id === "apply-push") {
        // Change the previous node next to the new node value
        const lastNode = linkedList.lastElementChild;
        const nodeValue = userInput.value;
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
        // Shift the node indexes of the other nodes
        // Create the body of the node
        // Show the new node value
        // Show the next node value
        // Create arrow
        
    }
}
