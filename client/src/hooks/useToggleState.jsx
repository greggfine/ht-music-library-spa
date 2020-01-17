import {useState} from 'react';

const useToggleState = (initialState=false) => {
    const [state, setState] = useState(initialState)
    const handleToggleState = () => {
        setState(!state)
    }
    return [state, handleToggleState]
}

export default useToggleState;