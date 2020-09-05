import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Businesses from "./Components/Businesses";
import Details from "./Components/Businesses/Details";
import Checkout from "./Components/Checkout/Checkout";
import CompletedPurchase from "./Components/Checkout/CompletedPurchase";
import ShoppingCart from "./Components/Checkout/ShoppingCart";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App min-h-screen overflow-hidden">
      <div className="box-border flex flex-col">
        <Navbar />
        <main className="box-border flex-1">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/businesses" component={Businesses} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/complete" component={CompletedPurchase} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
