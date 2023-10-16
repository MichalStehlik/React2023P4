import { useAppContext } from "../providers/ApplicationProvider";

const withAuth = (WrappedComponent) => props => {
    const [{logged}] = useAppContext();
    if (logged === true) {
        return <WrappedComponent />
    }
    return <p>Access Denied</p>
}

export default withAuth;