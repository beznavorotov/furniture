import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header data-bs-theme='light'>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container'>
					<Link
						className='navbar-brand'
						to='/'>
						FURNITURE
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									to='/'>
									Головна
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link'
									to='/promotions'>
									Акції
								</Link>
							</li>
							{/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Каталог
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Меблі</Link></li>
                    <li><Link className="dropdown-item" to="#">Кухні</Link></li>
                    <li><Link className="dropdown-item" to="#">Шафи</Link></li>
                  </ul>
                </li> */}
							<li className='nav-item'>
								<Link
									className='nav-link'
									to='/delivery'>
									Доставка і оплата
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link'
									to='/contact'>
									Контакти
								</Link>
							</li>
						</ul>
						<form
							className='d-flex'
							role='search'>
							<input
								className='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='btn btn-outline-success'
								type='submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};
