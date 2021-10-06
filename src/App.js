import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productlist" exact component={ProductList}/>
          <Route path="/productlist/:id" component={ProductDetail}/>

        </Switch>
      </div>
    </Router>
    
  );
}



export default App;
