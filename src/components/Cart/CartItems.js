import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cartSlice";
import "./Cart.css";

export default function CartItems({ setCartOpen }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartData = useSelector((state) => state.cart);

	return (
		<div className="cart-items-wrap">
			<ul className="cart-items">
				{cartData.contents?.map((item) => {
					return (
						<li key={item._id}>
							<img
								src={item.picture.asset.url}
								onClick={() => {
									navigate(`/product/${item._id}`);
                                    if (setCartOpen) {
                                        setCartOpen(false)
                                    }
								}}
								alt=""
							/>
							<div className="cart-item-info">
								<p className="yellow-button">{item.name}</p>
								<p className="cart-item-price">{item.price} €</p>
								<button
									className="remove-button"
									onClick={() => dispatch(removeItem(item))}
								>
									Remove
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
