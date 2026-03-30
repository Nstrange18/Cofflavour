import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
// import Api from "./component/Api";
import { coffeeLoader } from "./component/Api";
import ProductDetails, { productDetailsLoader } from "./pages/ProductDetails";

function App() {
    const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={coffeeLoader} />
        <Route path="products" element={<Products />} loader={coffeeLoader} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path=":id" element={<ProductDetails />} loader={productDetailsLoader}/>

        <Route path="*" element={<NotFound />} />
        
    </Route>
    )
);

    return (
        <>
        <RouterProvider router={router} />
        </>
    );
}

export default App;
