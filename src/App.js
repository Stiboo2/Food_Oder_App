import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  const showCardHandler = () => {
    setCartIsShow(true);
  };
  const hideCardHandler = () => {
    setCartIsShow(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart  onCloseCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
