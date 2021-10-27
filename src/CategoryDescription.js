import {Link, useParams} from "react-router-dom";

function CategoryDescription() {

    let {Name} = useParams();

    return (
        <>
            <Link to="/cat">Назад</Link>
            <h1>
                Category: {Name}
            </h1>
        </>
    );
}

export default CategoryDescription;