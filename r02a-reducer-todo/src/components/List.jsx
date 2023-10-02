import {useDataContext} from "../providers/DataProvider"

export const List = () => {
    const [tasks, dispatchData] = useDataContext();
    return(
        <ol>
            {tasks.map((item, index) => (
                <li key={index}>{item.name} {item.finished ? "DONE" : "PROGRESS"}</li>
            ))}
        </ol>
    );
}

export default List;