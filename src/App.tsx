import MenuContextProvider from "./context/MenuContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import OrderPage from "./pages/order/OrderPage";
import Header from "./components/header/Header";

function App() {
  return (
    <CartContextProvider>
      <MenuContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </MenuContextProvider>
    </CartContextProvider>
  );
}

export default App;
