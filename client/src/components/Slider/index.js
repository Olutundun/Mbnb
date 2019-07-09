import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './style.css';

const content = [
	{
		name: 'MBnB',
		title: 'Welcome to the new way to get the music equipment you need without breaking the bank.',
		image: './images/guitars-amps.jpg',
	},
	{
		name: 'MBnB',
		title: 'Sign up/Sign in to post images of your equipments.',
		description:
			'We are committed to connecting renters around the globe.',
		image: './images/mixer-mic.jpg',
	},
	{
		title: 'Our Company',
		description:
			'Throughout the world, Mbnb unites people deeply, passionately and authentically.',
		image: './images/globe.jpg',
	}
];

const Slide = () => (
	<div>
		<Slider className="slider-wrapper" autoplay="4000">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<p id="compName">{item.name}</p>
						<h1 id="compTitle">{item.title}</h1>
						<p id="compDesc">{item.description}</p>
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default Slide;
