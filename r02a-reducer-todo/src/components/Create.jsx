import {useState} from "react"
import {useDataContext, ADD_TASK} from "../providers/DataProvider"

export const Create = () => {
    const [, dispatch] = useDataContext();
    const [name, setName] = useState("");
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={e => {dispatch({type: ADD_TASK, payload: {name: name, finished: false}}); setName("")}}>Přidat</button>
        </div>
    );
}