export default function Info() {
	return (
		<div className="profile">
			<img
				src="/src/assets/img.webp"
				alt="Claudio's profile image"
				className="profile-img"
			/>
			<div className="profile-datas">
				<h2 className="profile-name">Claudio Marino</h2>
				<h4 className="profile-work">Frontend Developer</h4>
				<p className="profile-web">claudiomarino.website</p>
				<button className="profile-button profile-button-mail">
					<img src="/src/assets/mail.svg" alt="" /> Email
				</button>
				<button className="profile-button profile-button-linkedin">
					<img src="/src/assets/linkedin.svg" alt="" /> LinkedIn
				</button>
			</div>
		</div>
	);
}
