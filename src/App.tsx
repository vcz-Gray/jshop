import './App.css';
import Banner from './Components/Banner';
import ImageLinks from './Components/ImageLinks';
import Items from './Components/Items';
import Layout from './Components/Layout/Layout';

function App() {
	return (
		<Layout>
			<Banner />
			<Items />
			<ImageLinks />
		</Layout>
	);
}

export default App;
