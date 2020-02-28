anime
	.timeline({ loop: false })
	.add({
		targets: ".ml15 .word",
		scale: [14, 1],
		opacity: [0, 1],
		easing: "easeOutCirc",
		backgroundColor: (el, i) => {
			const r = 220 - i * 8;
			const g = 10;
			const b = 20 + i * 8;
			const color = `rgb(${r}, ${g}, ${b})`;
			return color;
		},
		duration: 800,
		delay: (el, i) => 800 * i
	})
	.add({
		targets: ".ml15",
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	});
