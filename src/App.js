import "./App.css";
// import Counter from "./features/Counter";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import ProductComponent from "./components/ProductComponent";
function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      <Router>
        <ProductComponent/>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
       
          <Route> 404 Page Not Found </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
