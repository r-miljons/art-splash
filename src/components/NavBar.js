import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.svg";
import account from "../assets/account.svg";
import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";

export default function NavBar() {
	const navigate = useNavigate();
	const [cartOpen, setCartOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const cartData = useSelector((state) => state.cart);

	function handleSubmit(e) {
		e.preventDefault();
		if (e.target[0].value.length === 0) return
		setMenuOpen(false);
		navigate('/products/' + e.target[0].value);
	}

	return (
		<>
		<div className="nav-displacement"></div>
		<div className="nav-container">
			<nav>
				<div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
					<img src={menu} alt='open menu'/>
				</div>
				<div className="logo" onClick={() => navigate("/")}>
					<img src={logo} alt="logo" />
				</div>
				<form className="search-container" onSubmit={handleSubmit}>
					<input
						type="text"
						className="search-input"
						placeholder="Search for art..."
					/>
					<button type="submit">
						<img src={searchIcon} alt="search" />
					</button>
				</form>
				<div className="profile-cart-container">
					<div className="login-container" onClick={() => navigate("/login")}>
						<p>Login</p>
						<img src={account} alt="account"/>
					</div>
					<div className="shopping-cart" onClick={() => setCartOpen(!cartOpen)}>
						<img src={cart} alt="cart"/>
						<div className='cart-item-count'><p>{cartData.contents.length}</p></div>
					</div>
				</div>
			</nav>
		</div>
		{cartOpen && <Cart setCartOpen={setCartOpen}/>}
		{menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
		</>
	);
}
