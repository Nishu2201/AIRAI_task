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
			<img src="https://static.wixstatic.com/media/b9eb8b_909f72f001a74e938b6c0700e1637cf8~mv2.png/v1/fill/w_276,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/company%20logo.png" alt="AIRAI"/>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/">About us</a>
                <div className="nav-dropdown">
					<a href="/">Contact</a>
					<ul className="dropdown-content">
						<li><a href="/">Careers</a></li>
						<li><a href="/">Address</a></li>
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
