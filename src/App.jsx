//imports
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Cart from "./pages/cart/cart.jsx";
import ContactUs from "./pages/contact_us/contact_us.jsx";
import HelpPage from "./pages/help/help.jsx";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import PageFaq from "./pages/faq/faq.jsx";
import ProductDetails from "./pages/product-details/product-details.jsx";
import Signup from "./pages/signup/signup.jsx";
import TermsOfUse from "./pages/terms-of-use/terms-of-use.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

//App wraps the entire application in the provider component
function App() {
  return (
    /*Provider is the component from react-redux that help
    connect the app to a redux store, and the Redux store
    is being passed as a prop
    */
    <Provider store={store}>
      {/*BrowserRouter (from react-router-dom) is used to enable routing*/}
      <BrowserRouter>
        {/*Navigation bar component*/}
        <Navbar />
        <div className="mt-[70px] min-h-[350px]">
          {/*route components to multiple pages*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<PageFaq />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms_of_use" element={<TermsOfUse />} />
          </Routes>
        </div>
        {/*footer component*/}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
