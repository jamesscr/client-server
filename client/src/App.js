import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Contact, Overview} from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' index element={<Home />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/overview' element={<Overview />} />
			</Routes>
		</Router>
	);
}

export default App;
