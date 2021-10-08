import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/home'
import Navbar from './components/navbar'
import Register from "./components/register";
import Login from "./components/login";
import Container from "./components/container";
import Cart from './components/cart'
import Favorite from './components/favorite'
import Footer from './components/footer'
import Detail from './components/detail'
import Admin_Add from './components/admin_Add'
import Admin_Update from './components/admin_Update'
import Payment from './components/payment'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container>
        <Switch>
          <Route path="/"exact component={() => <Home/>} />
          <Route path="/register" exact component={() => <Register/>} />
          <Route path="/login" exact component={() => <Login/>} />
          <Route path="/cart" exact component={() => <Cart/>} />
          <Route path="/favorite" exact component={() => <Favorite/>} />
          <Route path="/detail/:id" exact component={()=> <Detail/>} />
          <Route path="/admin_add" exact component={() => <Admin_Add/>} />
          <Route path="/admin_update/:id" exact component={() => <Admin_Update/>} />
          <Route path="/payment" exact component={() => <Payment/>} />
        </Switch>
        </Container>
        <Footer/>
    </Router>
    </div>
  )
}

export default App;
