import React from 'react';
import './Header.css'

function Header() {
	return (
		<>
			<section className='new-to-udemy'>
				<article>
					<p>Prowess</p>
					<p>
						Los cursos comienzan en E£ 169,99. Consigue tu oferta para nuevos estudiantes
antes de que expire.
					</p>
				</article>
				<figure>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/hero_img.png`}
						alt='clock'
					/>
				</figure>
			</section>
		</>
	);
}

export default Header;
