import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
const Cart = () => {
  const [addToCart, cartItems, setcartItmes] = useOutletContext();
  console.log(addToCart);
  // inc Quantity
  function inc(product) {
    const exsit = cartItems.find((x) => {
      return x.id === product.id;
    });
    setcartItmes(
      cartItems.map((item) => {
        return item.id === product.id
          ? { ...exsit, quantity: exsit.quantity + 1 }
          : item;
      })
    );
  }

  // Dec Quantity
  function dec(product) {
    const exsit = cartItems.find((x) => {
      return x.id === product.id;
    });
    setcartItmes(
      cartItems.map((item) => {
        return item.id === product.id
          ? { ...exsit, quantity: exsit.quantity - 1 }
          : item;
      })
    );
  }

  // Remove item from cart
  function removeItem(product) {
    const exsit = cartItems.find((x) => {
      return x.id === product.id;
    });
    if (exsit.quantity > 0) {
      setcartItmes(
        cartItems.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  }

  const totlalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const clearCart = () => {
    setcartItmes([]);
  };

  return (
    <div className="cart-container pt-32 pb-20">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartItems &&
              cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <button onClick={() => removeItem(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => dec(cartItem)}>-</button>
                    <div className="count">{cartItem.quantity}</div>
                    <button onClick={() => inc(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${totlalPrice.toFixed(2)}</span>
              </div>
              {/* <p>Taxes and shipping calculated at checkout</p> */}
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
