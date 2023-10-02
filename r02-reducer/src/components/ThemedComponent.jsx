import useAppContext from "../providers/ApplicationProvider"

export const ThemedComponent = () => {
    const [{theme}] = useAppContext();
    return(
        <div className={theme}>
            Component1
        </div>
    );
}

export default ThemedComponent;