import withAuth from "../hoc/withAuth"

export const ProtectedPanel = () => {
    return <p>Secret</p>
}

export default withAuth(ProtectedPanel);