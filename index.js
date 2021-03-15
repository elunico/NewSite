function showInfo() {
	titleHeader.classList.remove('titleState0');
	titleHeader.classList.add('titleState1');


	let titleHigh = document.querySelector('#title-high');
	titleHigh.classList.add('state1');
	title.classList.add('state1');
	info.classList.add('state1');
	requestAnimationFrame(() => info.style.setProperty('opacity', '1'));
	requestAnimationFrame(() => titleHigh.style.setProperty('opacity', '1'));

}

let tooltips = {};
tooltips['title'] = document.querySelector('#tooltip');
tooltips['github'] = document.querySelector('#gh-tooltip');
tooltips['linkedin'] = document.querySelector('#li-tooltip');
tooltips['oldsite'] = document.querySelector('#os-tooltip');

let tipText = {
	title: 'Click me! ✨',
	github: 'Visit my GitHub 🐙',
	linkedin: 'Find me on LinkedIn 🔗',
	oldsite: 'Check old my old site 🖥',
}

let tooltipInterval;

titleHeader.onmouseenter = tooltipIn.bind(titleHeader)
ghimage.onmouseenter = tooltipIn.bind(ghimage)
liimage.onmouseenter = tooltipIn.bind(liimage)
osimage.onmouseenter = tooltipIn.bind(osimage)

titleHeader.onmouseout = tooltipOut.bind(titleHeader);
ghimage.onmouseout = tooltipOut.bind(ghimage);
liimage.onmouseout = tooltipOut.bind(liimage);
osimage.onmouseout = tooltipOut.bind(osimage);

titleHeader.onmousemove = showTooltip.bind(titleHeader)
ghimage.onmousemove = showTooltip.bind(ghimage)
liimage.onmousemove = showTooltip.bind(liimage)
osimage.onmousemove = showTooltip.bind(osimage)

function tooltipOut() {
	let kind = this.getAttribute('data-kind');
	if (tooltipInterval)
		clearTimeout(tooltipInterval);
	tooltips[kind].style.setProperty('display', 'none');
}

function tooltipIn() {
	let kind = this.getAttribute('data-kind');
	tooltipInterval = setTimeout(() => {
		tooltips[kind].style.setProperty('display', 'block');
	}, 750);
}

function showTooltip(event) {
	let tooltip = tooltips[this.getAttribute('data-kind')];
	tooltip.textContent = tipText[this.getAttribute('data-kind')];
	tooltip.classList.add('tooltip');
	let x = event.pageX;
	let y = event.pageY;
	tooltip.style.setProperty('left', `${x + 15}px`);
	tooltip.style.setProperty('top', `${y + 10}px`);
}