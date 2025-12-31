import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
 
  // 🔴 تعديل هنا: وضع قيمة افتراضية لـ cartItems
  // السبب: أحيانًا تكون undefined عند أول render
  const {
    cartItems = {}, // ← هذا السطر تمت إضافته
    addToCart,
    removeFromCart,
    url
  } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />

        {/* 🔴 تعديل هنا: استخدام Optional Chaining */}
        {!cartItems?.[id] ? ( // ← تم التعديل هنا
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />

            {/* 🔴 تعديل هنا: قيمة افتراضية 0 */}
            <p>{cartItems?.[id] || 0}</p> {/* ← تم التعديل هنا */}

            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
        {!cartItems?.[id] ? ( // ← تم التعديل هنا
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />

            {/* 🔴 تعديل هنا: قيمة افتراضية 0 */}
            <p>{cartItems?.[id] || 0}</p> {/* ← تم التعديل هنا */}

            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
