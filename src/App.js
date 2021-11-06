import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { useSelector } from "react-redux"

const App = () => {
  const user = true;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productlist/:category" exact component={ProductList} />
          <Route path="/productdetail/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/"/> : <Register/>}
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}



export default App;
