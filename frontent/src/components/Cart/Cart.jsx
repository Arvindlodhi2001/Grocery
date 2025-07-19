import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import Toastify from "../../Utils/Toastify/Toastify";
import {
  deleteToCart,
  getAllCart,
  updateCartQuantity,
} from "../../Redux/features/cart/cartThunks";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    cartItems = [],
    isLoading,
    error,
    message,
  } = useSelector((state) => state.cart);
  const [userConfig, setUserConfig] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (userConfig) {
      dispatch(
        getAllCart({ userId: userConfig._id, API_URL: userConfig.API_URL })
      );
    }
  }, [dispatch, userConfig]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(
      updateCartQuantity({
        productId: id,
        quantity: newQuantity,
        userId: userConfig._id,
        API_URL: userConfig.API_URL,
      })
    );
  };

  const removeItem = async (productId) => {
    try {
      await dispatch(
        deleteToCart({
          productId,
          userId: userConfig._id,
          API_URL: userConfig.API_URL,
        })
      ).unwrap();
      Toastify("success", "Product removed from cart successfully!");
    } catch (error) {
      Toastify("error", error || "Failed to remove product");
    }
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
  }, [cartItems]);

  const shipping = cartItems.length ? 5 : 0;
  const totalCost = subtotal + shipping;

  return (
    <div className="container my-5" style={{ backgroundColor: "#FFFFFF" }}>
      <ToastContainer />
      <div className="row">
        <div className="col-md-8">
          <h3>Shopping Cart</h3>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <a href="#" className="text-decoration-none">
            Continue Shopping
          </a>
        </div>
        <div className="col-md-4">
          <div className="border p-4 rounded">
            <h4>Order Summary</h4>
            <p>Items: {cartItems.length}</p>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: ₹{shipping.toFixed(2)}</p>
            <div className="mb-3">
              <label className="form-label">Promo Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your code"
              />
              <button className="btn btn-danger w-100 mt-2">Apply</button>
            </div>
            <h5>Total Cost: ₹{totalCost.toFixed(2)}</h5>
            <button className="btn btn-primary w-100">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div
      className="row align-items-center border-bottom py-3"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="col-md-2 text-center">
        <img
          src={item.thumbnail}
          alt={item.productName}
          className="img-fluid rounded"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-4">
        <h6 className="mb-1">{item.productName}</h6>
        <p className="text-muted mb-1">{item.brand}</p>
        <button
          className="btn btn-link text-danger p-0"
          onClick={() => removeItem(item._id)}
        >
          Remove
        </button>
      </div>

      <div className="col-md-3 text-center">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
        >
          -
        </button>
        <span className="mx-2">{item.quantity || 1}</span>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
        >
          +
        </button>
      </div>

      <div className="col-md-3 text-center">
        <p className="mb-1">₹{item.price}</p>
        <p className="text-muted mb-0">
          Total: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
