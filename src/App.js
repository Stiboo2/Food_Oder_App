import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  const showCardHandler = () => {
    setCartIsShow(true);
  };
  const hideCardHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
