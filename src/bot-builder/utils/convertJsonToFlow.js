
function convertJsonToFlow(response) {
    let {id, elements} = JSON.parse(response);
    let edges = [];
    let edge ;
    for(let node of elements){
        if(node.parent !== 'root'){
            edge = {
                id:`e${node.parent}-${node.id}`, 
                source:`${node.parent}`, 
                target:`${node.id}`,
                type: 'smoothstep'
            };
            edges.push(edge);
        }
    }
    return {id:id,elements:[...elements,...edges]};
}

export default convertJsonToFlow;