import { useParams } from "react-router-dom";
const PageNotFound = () => {
    const { page } = useParams()
    return (
        <h1><span className="uppercase font-bold">{page}</span>: NOT FOUND</h1>
    );
}

export default PageNotFound;