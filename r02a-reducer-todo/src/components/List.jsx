import {useDataContext} from "../providers/DataProvider"

export const List = () => {
    const [tasks, dispatchData] = useDataContext();
    console.log(tasks);
    return(
        <ol>
            {tasks ? tasks.map((item, index) => (
                <li key={index}>
                    {item.name} {item.finished ? "DONE" : "PROGRESS"}
                    <button>Remove</button>
                </li>
            )) : <p>Žádné</p>}
        </ol>
    );
}

export default List;