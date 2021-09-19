import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/product" component={Product}/>
        </Switch>
      </div>
    </Router>
    
  );
}



export default App;
