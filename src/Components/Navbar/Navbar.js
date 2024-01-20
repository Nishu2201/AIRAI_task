import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>AIRAI</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/about">About us</a>
                <div className="nav-dropdown">
					<a href="/contact">Contact</a>
					<ul className="dropdown-content">
						<li><a href="/Career">Careers</a></li>
						<li><a href="/Address">Address</a></li>
					</ul>
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;