import './Layout.css';
import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
