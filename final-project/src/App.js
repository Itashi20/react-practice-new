
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}
        component={ProductListing}
        />

<Route path="/product/:productId" 
        component={ProductDetails}
        />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
