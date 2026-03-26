window.addEventListener('load', () => {
	// Создаем временную шкалу
	const tl = gsap.timeline()

	tl.from('.animate-up_text', {
		y: -100, // Уменьшил со 150, чтобы не летело из космоса
		opacity: 0,
		duration: 1.2,
		ease: 'power4.out',
		stagger: 0.2,
	})
		.from(
			'.connection__decor',
			{
				width: '0%',
				duration: 1.5,
				ease: 'power2.inOut',
			},
			'-=0.5',
		)
		.from(
			'.animate-down',
			{
				y: -50,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
			},
			'-=1',
		)
		.from(
			'.animate-left',
			{
				x: -100,
				opacity: 0,
				duration: 1,
			},
			'-=0.7',
		)
		.from(
			'.animate-right',
			{
				x: 100,
				opacity: 0,
				duration: 1,
			},
			'-=1',
		)
		.from(
			'.animate-bounce_text',
			{
				y: -100,
				opacity: 0,
				duration: 1.5,
				ease: 'bounce.out', // Мягкий отскок в конце
				stagger: 0.2,
			},
			'-=0.5',
		)
})
