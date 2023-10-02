import React, {createContext, useReducer, useContext} from "react"

export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const SET_FINISHED = "SET_FINISHED"

const reducer = (state, action) => {
    let newState = [...state];
    switch (action.type) {
        case ADD_TASK: {
            newState.push(action.payload);
            return {newState}
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
    const store = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    );
}

export default useDataContext;