import {useState} from "react"

export const ClassicForm = () => {
    const [value, setValue] = useState();
    return (
        <>
            <p>{value}</p>
            <input value={value} onChange={e => setValue(e.target.value)} />
        </>
    
    )
        
}

export default ClassicForm;