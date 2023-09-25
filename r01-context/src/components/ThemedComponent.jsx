import {useContext} from "react";
import {ThemeContext} from '../App';

export const ThemedComponent = (props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"component " + theme}>Komponenta</div>
    );
}
export default ThemedComponent;