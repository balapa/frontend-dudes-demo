class Ball {
	constructor(color, radius, speed, stageWidth, stageHeight) {
		this.color = color;
		this.radius = radius;
		this.speed = speed;

		this.vx = this.speed;
		this.vy = this.speed;

		this.x = stageWidth/2;
		this.y = stageHeight/2;
	}

	draw(ctx, stageWidth, stageHeight) {
		this.x += this.vx;
		this.y += this.vy;

		this.bounce(stageWidth, stageHeight);

		ctx.beginPath();
		ctx.fillStyle = this.color;
		// ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		ctx.rect(this.x, this.y, this.radius, this.radius);
		ctx.fill();
	}

	bounce(stageWidth, stageHeight) {
		const maxX = stageWidth - this.radius;
		const minX = this.radius;
		const maxY = stageHeight - this.radius;
		const minY = this.radius;

		if(this.x >= maxX || this.x <= minX) {
			this.vx *= -1;
			this.x += this.vx;
		}

		if(this.y >= maxY || this.y <= minY) {
			this.vy *= -1;
			this.y += this.vy;
		}
	}
}

export default Ball;
