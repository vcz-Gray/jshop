import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='all' element={<div>all</div>} />
					<Route path='notice' element={<div>notice</div>} />
					<Route path='event' element={<div>event</div>} />
					<Route path='cart' element={<div>cart</div>} />
					<Route path='login' element={<div>login</div>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
