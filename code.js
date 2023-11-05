function hasCycle(graph) {
    //Create an array and fill with false so we can keep track of nodes we have visited
    var visitedNodes = new Array(graph.length).fill(false);

    for(let i = 0; i < visitedNodes.length; i++) {
        if (!visitedNodes[i]) {
            visitedNodes[i] = true;
            return hasCycleCheck(graph,visitedNodes,i,[]);
        }
    }
}


function hasCycleCheck(graph, visitedNodes, currentNode, pastNodes) {
    //If we have visited this node return true (There is a cycle)
    if(pastNodes.includes(currentNode)) {return true;}
    else {
        //Mark the visited array true at the nodes position
        visitedNodes[currentNode] = true;
        pastNodes.push(currentNode)
        for(let i = 0; i < graph[currentNode].length; i++) {
            //If a cycle is found return true
            if (hasCycleCheck(graph,visitedNodes,graph[currentNode][i],[...pastNodes]) == true) {
                return true;
            }
        }
        //No cycles so return false
        return false
    }
}