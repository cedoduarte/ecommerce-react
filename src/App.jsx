import './App.css';
import { Home } from "./pages/Home";
import { Poster } from "./pages/Poster/Poster";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile/Profile";
import { Setting } from "./pages/Setting";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Stock } from "./pages/Stock";
import { Route, Routes } from "react-router-dom";
import { NavigationLink } from "./components/NavigationLink/NavigationLink";

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavigationLink to="/">Home</NavigationLink></li>
              <li><NavigationLink to="/login">Login</NavigationLink></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/poster" element={<Poster />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/stock" element={<Stock />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
