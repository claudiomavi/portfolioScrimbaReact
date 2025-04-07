import linkedin from '/src/assets/svg/linkedin.svg'
import github from '/src/assets/svg/github.svg'
import instagram from '/src/assets/svg/instagram.svg'
import mail from '/src/assets/svg/mail.svg'

export default function Hero() {
	return (
		<section className="home-hero">
			<div className="home-hero__content">
				<h1 className="heading-primary">Hey, My name is Claudio Marino</h1>
				<div className="home-hero__info">
					<p className="text-primary">
						I&apos;m a Front-End Developer with expertise in React and JavaScript, focused on
						creating efficient and user-friendly web applications. I combine modern CSS techniques
						with responsive design principles to deliver seamless user experiences. Currently
						expanding my skills in web development while maintaining a strong foundation in best
						practices and clean code architecture.
					</p>
				</div>
				<div className="home-hero__cta">
					<a
						href="./#projects"
						className="btn btn--bg">
						See my projects
					</a>
				</div>
			</div>
			<div className="home-hero__socials">
				<div className="home-hero__social">
					<a
						href="https://www.linkedin.com/in/claudiomavi/"
						className="home-hero__social-icon-link"
						target="_blank"
						rel="noreferrer">
						<img
							src={linkedin}
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a
						href="https://github.com/claudiomavi"
						className="home-hero__social-icon-link"
						target="_blank"
						rel="noreferrer">
						<img
							src={github}
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a
						href="https://www.instagram.com/marinodeveloper/"
						className="home-hero__social-icon-link"
						target="_blank"
						rel="noreferrer">
						<img
							src={instagram}
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a
						href="mailto:claudio.marino@outlook.es"
						className="home-hero__social-icon-link"
						target="_blank"
						rel="noreferrer">
						<img
							src={mail}
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
			</div>
			<div className="home-hero__mouse-scroll-cont">
				<div className="mouse"></div>
			</div>
		</section>
	)
}
