import './App.css';
import {AuthProvider} from "./context/AuthContext";
import { Container} from "react-bootstrap";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import Header from "./components/NavBar";
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import Orders from './pages/Orders';
import ForSale from './pages/ForSale';
import MessagesList from './pages/MessagesList';
import EditSneaker from './pages/EditSneaker';
import Cart from './pages/Cart';


function App() {
  return (
    <AuthProvider>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={UsersList} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/seller" component={ForSale} />
            <Route exact path="/messages" component={MessagesList} />
            <Route exact path="/edit" component={EditSneaker} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
}

export default App;