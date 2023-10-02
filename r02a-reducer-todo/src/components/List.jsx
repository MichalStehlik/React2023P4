import {useDataContext, REMOVE_TASK} from "../providers/DataProvider"

export const List = () => {
    const [tasks, dispatchData] = useDataContext();
    console.log(tasks);
    return(
        <ol>
            {tasks ? tasks.map((item, index) => (
                <li key={index}>
                    {item.name} {item.finished ? "DONE" : "PROGRESS"}
                    <button onClick={e => {dispatchData({type: REMOVE_TASK, payload: index})}}>Remove</button>
                </li>
            )) : <p>Žádné</p>}
        </ol>
    );
}

export default List;