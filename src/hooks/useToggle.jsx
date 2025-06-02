import { useState } from "react";

function useToggle(initialValue = false) {

    const [state, setState] = useState(initialValue);
    
    function toggle() {
        setState(prevState => !prevState);
    }

    return { state, toggle };
}

export default useToggle;