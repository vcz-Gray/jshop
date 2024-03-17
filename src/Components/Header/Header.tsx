import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<div className='leftside__menu'>
				<Link to='/' className='header__logo'>
					<img src='https://via.placeholder.com/25x25' alt='logo' />
					<span className='logo__text'>JSHOP</span>
				</Link>
				<nav className='header__nav'>
					<ul className='header__list'>
						<li className='header__list-item'>
							<Link to='all'>전체상품</Link>
						</li>
						<li className='header__list-item'>
							<Link to='notice'>공지사항</Link>
						</li>
						<li className='header__list-item'>
							<Link to='event'>이벤트</Link>
						</li>
					</ul>
				</nav>
			</div>
			<nav className='header__nav'>
				<ul className='header__list'>
					<li className='header__list-item'>
						<Link to='cart'>장바구니</Link>
					</li>
					<li className='header__list-item'>
						<Link to='login'>로그인</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
