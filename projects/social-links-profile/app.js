const profile = {
	name: 'Victoire Schubert',
	location: 'Lille, France',
	title: 'Software Engineer',
	description: "It's never to late to open a coffee shop",
	links: [
		{
			label: 'Github',
			url: 'https://github.com/VicSchbt',
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/feed/',
		},
		{
			label: 'Instagram',
			url: 'https://www.instagram.com/vicschbt.codes/',
		},
	],
};

const nameHeading = document.getElementById('name');
const locationHeading = document.getElementById('location');
const description = document.getElementById('description');
const linksList = document.getElementById('links');

nameHeading.innerHTML = profile.name;
locationHeading.innerHTML = profile.location;
description.innerHTML = '"' + profile.description + '"';

profile.links.forEach((link) => {
	linksList.innerHTML += `<li><a href="${link.url}" target="_blank">${link.label}</a></li>`;
});
