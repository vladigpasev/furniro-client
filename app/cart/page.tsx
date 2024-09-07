import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";

import "./cart.css";

export default function Cart() {
  return (
    <>
      <CartHeader />
      <CartItems />
      <CartFooter />
    </>
  );
}
