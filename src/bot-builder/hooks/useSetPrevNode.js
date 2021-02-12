import {useState} from 'react';

function useSetPrevNode(prevNode) {
    const [state, setstate] = useState();
    setstate(prevNode);
    return [state, setstate];
}

export default useSetPrevNode;