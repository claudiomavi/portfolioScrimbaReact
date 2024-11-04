import instagram from '/src/assets/instagram.svg'
import github from '/src/assets/github.svg'

export default function Footer() {
	return (
		<div className="footer">
			{/* <a href="" target="_blank" rel="noopener noreferrer">
				<img src={twitter} alt="twitter icon" className="footer-icon" />
			</a>
			<a href="" target="_blank" rel="noopener noreferrer">
				<img src={facebook} alt="facebook icon" className="footer-icon" />
			</a> */}
			<a
				href="https://www.instagram.com/marinodeveloper?igsh=eGRydXI0aDd4ZWgw"
				target="_blank"
				rel="noopener noreferrer">
				<img
					src={instagram}
					alt="instagram icon"
					className="footer-icon"
				/>
			</a>
			<a
				href="https://github.com/claudiomavi"
				target="_blank"
				rel="noopener noreferrer">
				<img
					src={github}
					alt="github icon"
					className="footer-icon"
				/>
			</a>
		</div>
	)
}
