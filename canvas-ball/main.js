import Ball from './ball.js';

function random(min, max) {
	return Math.floor(Math.random() * max) + min;  
}

class App {
	constructor() {
		this.canvas = document.querySelector('#canvas');
		this.ctx = canvas.getContext('2d');

		document.body.style.background = '#000023';

		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();

		this.balls = [];
		for(let i = 0; i < 5; i++) {
			this.balls.push(new Ball('#fff', random(5, 15), random(5, 10), this.stageWidth, this.stageHeight));
		}

		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize() {
		this.stageWidth = window.innerWidth;
		this.stageHeight = window.innerHeight;

		this.canvas.width = this.stageWidth;
		this.canvas.height = this.stageHeight;
	}

	animate() {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

		this.balls.forEach(ball => {
			ball.draw(this.ctx, this.stageWidth, this.stageHeight);
		})
	}
}

new App();
