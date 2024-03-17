import './Footer.css';

export default function Footer() {
	const [year] = new Date().toISOString().split('T');
	return <div className='footer'>© {year} JSHOP All rights reserved.</div>;
}
