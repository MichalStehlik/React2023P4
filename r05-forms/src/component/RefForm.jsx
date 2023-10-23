import {useRef} from "react"

export const RefForm = () => {
    const refInput = useRef(null);
    return (
        <>
            <input ref={refInput} />
            <button onClick={e => alert(refInput.current.value)}>Send</button>
        </>
    
    )
        
}

export default RefForm;