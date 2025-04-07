// import Info from '/src/components/Info'
// import About from '/src/components/About'
// import Interest from '/src/components/Interest'
// import Footer from '/src/components/Footer'

import AboutNew from './components/AboutNew'
import Contact from './components/Contact'
import FooterNew from './components/FooterNew'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
	return (
		<div>
			{/* <Info />
			<About />
			<Interest />
			<Footer /> */}
			<Header />
			<Hero />
			<Projects />
			<AboutNew />
			<Contact />
			<FooterNew />
		</div>
	)
}
