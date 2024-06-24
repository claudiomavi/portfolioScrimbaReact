import profileImg from "/src/assets/img.webp";
import mail from "/src/assets/mail.svg";
import linkedin from "/src/assets/linkedin.svg";

export default function Info() {
	return (
		<div className="profile">
			<img
				src={profileImg}
				alt="Claudio's profile image"
				className="profile-img"
			/>
			<div className="profile-datas">
				<h2 className="profile-name">Claudio Marino</h2>
				<h4 className="profile-work">Frontend Developer</h4>
				<p className="profile-web">claudiomarino.website</p>
				<button className="profile-button profile-button-mail">
					<img src={mail} alt="" /> Email
				</button>
				<button className="profile-button profile-button-linkedin">
					<img src={linkedin} alt="" /> LinkedIn
				</button>
			</div>
		</div>
	);
}
