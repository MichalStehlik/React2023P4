import {useContext} from "react";
import {ThemeContext} from '../App';

export const ThemedComponent2 = (props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"component " + theme}>Komponenta</div>
    );
}
export default ThemedComponent2;