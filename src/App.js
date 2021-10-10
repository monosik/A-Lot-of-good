import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productlist" exact component={ProductList}/>
          <Route path="/productlist/:id" component={ProductDetail}/>
          <Route path="/cart" component={Cart}/>
          
        </Switch>
      </div>
    </Router>
    
  );
}



export default App;
