anime({
	targets: ".box",
	translateY: [145, 50],
	backgroundColor: (element, index) => {
		const r = 220 - index * 8;
		const g = 10;
		const b = 20 + index * 8;
		const bgColor = `rgb(${r}, ${g}, ${b})`;
		return bgColor;
	},
	delay: (element, index) => index * 125,
	direction: "alternate",
	loop: true
});
