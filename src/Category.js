import {Link, useRouteMatch} from "react-router-dom";

function Category(props) {

    let match = useRouteMatch();
    let data = props.dataCat;
    const itemCat = data.map(item => <li key={item.text}><Link to={`${match.url}${item.to}`}>{item.text}</Link></li>)

    return (
        <>
            <h1>Category</h1>
            <ul>
                {itemCat}
            </ul>
        </>
    );
}

export default Category;