import withAuth from "../hoc/withAuth"

export const ProtectedText = () => {
    return <p>Secret text</p>
}

export default withAuth(ProtectedText);