const shape = new mojs.Shape({
	parent: '#graphic',
	shape: 'rect',
	fill: 'none',
	stroke: '#3190df',
	radius: 0,
	strokeWidth: 20,
	angle: {
	  [-180]: 0
	},

	duration: 100,
	easing: 'sin.in',

  }).then({
	radius: 120,
	easing: 'sin.in',
	duration: 600,
	angle: {
	  [0]: 90
	},
	onComplete() {
	  document.getElementById('title').style.setProperty('transform', 'translate(0,0)');
	}
  }).then({
	strokeWidth: 0,
	radius: 100,
	scale: {
	  to: 2,
	  easing: 'sin.in'
	},
	angle: {
	  [90]: 180
	},
	duration: 600,
	onComplete() {
	  let fades = document.getElementsByClassName('fades')

	  for (let fade of fades) {
		fade.style.setProperty('opacity', '1');
	  }
	  graphic.parentNode.removeChild(graphic);
	}
  })


  shape.play();