import "./App.css";
import HSahaData from "./Components/HSahaData/HSahaData";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import LoginOrRegis from "./Components/LoginOrRegis/LoginOrRegis";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/halisahalar">
            <HSahaData>
            </HSahaData>
            
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <LoginOrRegis></LoginOrRegis>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
