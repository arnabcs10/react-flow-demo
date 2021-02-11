
function convertJsonToFlow(response) {
    let edges = [];
    let edge ;
    for(let node of response){
        if(node.parent !== 'root'){
            edge = {id:`e${node.parent}-${node.id}`, source:node.parent, target:`${node.id}`,type: 'smoothstep'};
            edges.push(edge);
        }
    }
    return [...response,...edges];
}