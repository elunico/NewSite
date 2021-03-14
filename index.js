function showInfo() {
	titleHeader.classList.remove('titleState0');
	titleHeader.classList.add('titleState1');
	title.classList.add('state1');
	// info.style.setProperty('display', 'block');
	info.classList.add('state1')
	
	// requestAnimationFrame(() => info.style.setProperty('transform', 'translate(0,0)'));
}