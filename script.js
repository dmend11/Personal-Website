document.addEventListener('DOMContentLoaded', function() {
	const socials = [
		{ name: 'Twitter', url: 'https://twitter.com/inderofu' },
		{ name: 'GitHub', url: 'https://github.com/dmend11' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/dmend' },
	{ name: 'Resume', url: 'Resume.pdf' }
	];

	const container = document.getElementById('social-container');
	if (container) {
		socials.forEach(social => {
			const btn = document.createElement('button');
			btn.className = 'social-btn';
			btn.textContent = social.name;
			btn.onclick = function() {
				window.open(social.url, '_blank');
			};
			container.appendChild(btn);
		});

        const contactBtn = document.createElement('button');
        contactBtn.className = 'social-btn';
        contactBtn.textContent = 'Email Me';
        contactBtn.onclick = function() {
            const subject = encodeURIComponent('');
            const body = encodeURIComponent('');
            window.location.href = `mailto:contact@indero.icu?subject=${subject}&body=${body}`;
        };
        container.appendChild(contactBtn);
	}

	const slideshowImg = document.getElementById('slideshow-img');
	if (slideshowImg) {
		const slideshowImages = [
			"https://i.pinimg.com/736x/a2/09/4f/a2094f19977bdff7698099c2e4b12a43.jpg",
			"https://cdn.discordapp.com/attachments/1173413213170319380/1410877817947684874/IMG_0331.jpg?ex=68b29ddc&is=68b14c5c&hm=754f2ab4f74f47a73bdb6a4e6ef1d44bcbe5fc25d206b02808daba1d774a0b01&"
		];
		let currentSlide = 0;
		const prevBtn = document.getElementById('prev-slide');
		const nextBtn = document.getElementById('next-slide');

		function showSlide(idx) {
			slideshowImg.classList.add('fade');
			setTimeout(() => {
				slideshowImg.src = slideshowImages[idx];
				slideshowImg.classList.remove('fade');
			}, 200);
		}

		prevBtn.addEventListener('click', function() {
			currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
			showSlide(currentSlide);
		});
		nextBtn.addEventListener('click', function() {
			currentSlide = (currentSlide + 1) % slideshowImages.length;
			showSlide(currentSlide);
		});

		setInterval(function() {
			currentSlide = (currentSlide + 1) % slideshowImages.length;
			showSlide(currentSlide);
		}, 4000);
	}

	const portfolioList = document.querySelector('.portfolio-list');
	if (portfolioList) {
		const portfolioItems = [
			{
				title: "Smart Home Dashboard",
				description: "A real-time dashboard for monitoring and controlling smart devices, built with React and WebSockets.",
				link: "#"
			},
			{
				title: "EcoTravel Mobile App",
				description: "A cross-platform app for planning eco-friendly trips, featuring route optimization and carbon footprint tracking.",
				link: "#"
			},
			{
				title: "AI Resume Analyzer",
				description: "A web tool that uses machine learning to analyze and improve resumes for job seekers.",
				link: "#"
			},
			{
				title: "Virtual Art Gallery",
				description: "An interactive online gallery for digital artists, with 3D navigation and social features.",
				link: "#"
			},
			{
				title: "TaskFlow Productivity Suite",
				description: "A suite of productivity tools for teams, including Kanban boards, chat, and file sharing.",
				link: "#"
			}
		];
		portfolioItems.forEach(item => {
			const card = document.createElement('div');
			card.className = 'portfolio-card';
			card.innerHTML = `
				<h3>${item.title}</h3>
				<p>${item.description}</p>
				<a href="${item.link}" class="portfolio-link">View Project</a>
			`;
			portfolioList.appendChild(card);
		});
	}
});
