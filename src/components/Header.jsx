import profileImg from '/src/assets/img.webp'
import openHam from '/src/assets/svg/ham-menu.svg'
import closeHam from '/src/assets/svg/ham-menu-close.svg'

import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	function toggleMenu() {
		setIsOpen((prev) => !prev)
	}

	return (
		<header className="header">
			<div className="header__content">
				<div className="header__logo-container">
					<div className="header__logo-img-cont">
						<img
							src={profileImg}
							alt="Ram Maheshwari Logo Image"
							className="header__logo-img"
						/>
					</div>
					<span className="header__logo-sub">Claudio Marino</span>
				</div>
				<div className="header__main">
					<ul className="header__links">
						<li className="header__link-wrapper">
							<a
								href="./index.html"
								className="header__link">
								{' '}
								Home{' '}
							</a>
						</li>
						<li className="header__link-wrapper">
							<a
								href="./index.html#projects"
								className="header__link">
								Projects
							</a>
						</li>
						<li className="header__link-wrapper">
							<a
								href="./index.html#about"
								className="header__link">
								About{' '}
							</a>
						</li>
						<li className="header__link-wrapper">
							<a
								href="./index.html#contact"
								className="header__link">
								{' '}
								Contact{' '}
							</a>
						</li>
					</ul>
					<div className="header__main-ham-menu-cont">
						<img
							src={openHam}
							alt="hamburger menu"
							className={`header__main-ham-menu ${isOpen ? 'd-none' : ''}`}
							onClick={toggleMenu}
						/>
						<img
							src={closeHam}
							alt="hamburger menu close"
							className={`header__main-ham-menu-close ${!isOpen ? 'd-none' : ''}`}
							onClick={toggleMenu}
						/>
					</div>
				</div>
			</div>
			<div className={`header__sm-menu ${isOpen ? 'header__sm-menu--active' : ''}`}>
				<div className="header__sm-menu-content ">
					<ul className="header__sm-menu-links ">
						<li className="header__sm-menu-link ">
							<a href="./index.html"> Home </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./index.html#about"> About </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./index.html#projects"> Projects </a>
						</li>

						<li className="header__sm-menu-link">
							<a href="./index.html#contact"> Contact </a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
