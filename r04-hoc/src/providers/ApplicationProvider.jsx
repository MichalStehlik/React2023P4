import React, {createContext, useReducer, useContext} from "react"

export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"

const reducer = (state, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {...state, logged: true}
        }
        case LOG_OUT: {
            return {...state, logged: false}
        }
        default: {
            return state;
        }
    }
}

const initialState = {logged: false}

export const ApplicationContext = createContext(initialState);
export const ApplicationConsumer = ApplicationContext.Consumer;
export const useAppContext = () => useContext(ApplicationContext);

export const ApplicationProvider = ({children}) => {
    const store = useReducer(reducer, initialState);

    return (
        <ApplicationContext.Provider value={store}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default useAppContext;