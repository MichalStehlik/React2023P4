import useAppContext from "../providers/ApplicationProvider"

export const ThemedComponent2 = () => {
    const [{theme, theme2}] = useAppContext();
    return(
        <div className={theme2}>
            Component1
        </div>
    );
}

export default ThemedComponent2;