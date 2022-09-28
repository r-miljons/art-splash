import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.svg";
import account from "../assets/account.svg";
import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";

export default function NavBar() {
	const navigate = useNavigate();

	return (
		<div className="nav-container">
			<nav>
				<div className="menu">
					<img src={menu} alt='open menu'/>
				</div>
				<div className="logo" onClick={() => navigate("/")}>
					<img src={logo} alt="logo" />
				</div>
				<form className="search-container">
					<input
						type="text"
						className="search-input"
						placeholder="Search for art..."
					/>
					<button>
						<img src={searchIcon} alt="search" />
					</button>
				</form>
				<div className="profile-cart-container">
					<div className="login-container" onClick={() => navigate("/login")}>
						<p>Login</p>
						<img src={account} alt="account"/>
					</div>
					<div className="shopping-cart">
						<img src={cart} alt="cart"/>
					</div>
				</div>
			</nav>
		</div>
	);
}
