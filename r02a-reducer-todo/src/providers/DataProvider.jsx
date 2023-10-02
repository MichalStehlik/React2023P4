import React, {createContext, useReducer, useContext, useEffect} from "react"

export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const SET_FINISHED = "SET_FINISHED"

const LOCAL_STORAGE_ID = "TODO_LIST_2023";
let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));

const reducer = (state, action) => {
    let newState = [...state];
    console.log(newState, action);
    switch (action.type) {
        case ADD_TASK: {
            newState.push(action.payload);
            return newState
        }
        default: {
            return state;
        }
    }
}

const initialState = [
    {name: "Úkol 1", finished: false},
    {name: "Úkol 2", finished: false}
]

/*export*/ const DataContext = createContext(initialState);
/*export*/ const DataConsumer = DataContext.Consumer;
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const store = useReducer(reducer, storedData || initialState);
    const [state, ] = store;
    useEffect(()=>{
        console.log("STATE:" + state);
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(state));
    }, [state]);

    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    );
}

export default useDataContext;