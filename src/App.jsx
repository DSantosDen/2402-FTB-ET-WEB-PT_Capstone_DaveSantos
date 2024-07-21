import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Signup from "./pages/signup/signup.jsx";
import Login from "./pages/login/login.jsx";
import PageFaq from "./pages/faq/faq.jsx";
import Cart from "./pages/cart/cart.jsx";
import TermsOfUse from "./pages/terms-of-use/terms-of-use.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import ProductDetail from "./pages/product-details/product-details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-[70px] min-h-[350px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqs" element={<PageFaq />} />
          <Route path="/terms_of_use" element={<TermsOfUse />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
