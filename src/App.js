import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Error from "./Error";
import "./App.css";

const dataHeader = [
    {"to": "/", "text": "Главная"},
    {"to": "/about", "text": "О сайте"},
    {"to": "/cat", "text": "Категории"},
]

const dataCat = [
    {"to": "/notebook", "text": "Ноутбуки"},
    {"to": "/monitor", "text": "Мониторы"},
    {"to": "/cellphone", "text": "Мобильные телефоны"},
]

function App() {

    const itemHeader = dataHeader.map(item => <li key={item.text}><Link to={item.to}>{item.text}</Link></li>)

  return (
    <>
      {/*<Header/>*/}
      <Router>
          <nav>
              <ul>
                  {itemHeader}
              </ul>
          </nav>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/cat" component={Category}><Category dataCat={dataCat}/></Route>
            <Route path="/cat/:Name" component={CategoryDescription}/>
            <Route component={Error}/>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
