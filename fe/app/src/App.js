import './App.css';
import {AuthProvider} from "./context/AuthContext";
import { Container} from "react-bootstrap";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Cart from "./context/Cart";
// import Header from "./components/Header";
import React from "react";
import Header from "./components/NavBar";


function App() {
  return (

      <AuthProvider>
        <Header/>
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/register" component={Register} />
            </Switch>
          </BrowserRouter>
        </Container>
      </AuthProvider>
  );
}

export default App;