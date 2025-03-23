import profileImg from '/src/assets/img.webp'
import mail from '/src/assets/mail.svg'
import linkedin from '/src/assets/linkedin.svg'

export default function Info() {
	return (
		<div className="profile">
			<img
				src={profileImg}
				alt="Claudio's profile image"
				className="profile-img"
				loading="eager"
			/>
			<div className="profile-datas">
				<h1 className="profile-name">Claudio Marino</h1>
				<h2 className="profile-work">Front-End Developer | React & JavaScript</h2>
				<a
					href="https://myhighlightedprojects.netlify.app/"
					target="_blank"
					rel="noopener noreferrer">
					<p className="profile-web">👆 My highlighted projects 👆</p>
				</a>
				<a href="mailto:claudio.marino@outlook.es">
					<button className="profile-button profile-button-mail">
						<img
							src={mail}
							alt="Email icon"
							loading="lazy"
						/>{' '}
						Email
					</button>
				</a>
				<a
					href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
					target="_blank"
					rel="noopener noreferrer">
					<button className="profile-button profile-button-linkedin">
						<img
							src={linkedin}
							alt="LinkedIn icon"
							loading="lazy"
						/>{' '}
						LinkedIn
					</button>
				</a>
			</div>
		</div>
	)
}
