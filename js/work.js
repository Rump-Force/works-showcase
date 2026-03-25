const projectsData = [
	{
		id: '01',
		title: 'Design that Adds Flavor to Your Life!',
		date: 'Apr 2025',
		image: 'images/img/port/Design.webp',
		link: 'https://rump-force.github.io/Interiors-Studio/',
		color: 'green',
	},
	{
		id: '02',
		title: 'Growing Beautiful Plants at Home',
		date: 'Apr 2025',
		image: 'images/img/port/Growing.webp',
		link: 'https://rump-force.github.io/Growing-Beautiful-Plants/',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
		color: 'blue',
	},
	{
		id: '03',
		title: 'Creative FullStack Web Developer',
		date: 'May 2025',
		image: 'images/img/port/Creative.webp',
		link: 'https://rump-force.github.io/Creative-FullStack/',
		color: 'purple',
	},
	{
		id: '04',
		title: 'Providing the best Project Experience',
		date: 'May 2025',
		image: 'images/img/port/Providing.webp',
		link: 'https://rump-force.github.io/black-hole/',
		color: 'pink',
	},
	{
		id: '05',
		title: 'Providing v2',
		date: 'May 2025',
		image: 'images/img/port/Providing_v2.webp',
		link: 'https://rump-force.github.io/black-hole-v2-my-project/',
		color: 'red',
	},
	{
		id: '06',
		title: 'Кухни на заказ в Краснодаре',
		date: 'Jun 2025',
		image: 'images/img/port/nemetskiy-standart.webp',
		link: 'https://rump-force.github.io/nemetskiy-standart/',
		color: 'yellow',
	},
	{
		id: '07',
		title: 'Moreon_Fitness',
		date: 'Jun 2025',
		image: 'images/img/port/Moreon-Fitness.webp',
		link: 'https://rump-force.github.io/Moreon-Fitness/',
		color: 'green',
	},
	{
		id: '08',
		title: 'The Fastest Pizza',
		date: 'Nov 2025',
		image: 'images/img/port/Pizza.webp',
		link: 'https://rump-force.github.io/pizzashop/',
		color: 'purple',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '09',
		title: 'Miami Condo Kings',
		date: 'Dec 2025',
		image: 'images/img/port/Miami.webp',
		link: 'https://rump-force.github.io/Miami-Condo-Kings/',
		color: 'blue',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '10',
		title: 'Make your home an ode to joy',
		date: 'Dec 2025',
		image: 'images/img/port/Make.webp',
		link: 'https://rump-force.github.io/Make/',
		color: 'pink',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '11',
		title: 'AVL',
		date: 'Dec 2025',
		image: 'images/img/port/AVL.webp',
		link: 'https://rump-force.github.io/AVL/',
		color: 'yellow',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '12',
		title: 'Окунитесь в мир лошадей вместе с нами',
		date: 'Dec 2025',
		image: 'images/img/port/peace-horses.webp',
		link: 'https://rump-force.github.io/peace-horses/',
		color: 'red',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '13',
		title: 'Create Your Interior Design',
		date: 'Jan 18',
		image: 'images/img/port/decbase.webp',
		link: 'https://rump-force.github.io/decbase/',
		color: 'pink',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '14',
		title: 'Membantu Temukan Rumah Impian.',
		date: 'Jan 27',
		image: 'images/img/port/Membantu.webp',
		link: 'https://rump-force.github.io/Membantu/',
		color: 'green',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '15',
		title: 'sputnik',
		date: 'Feb 13',
		image: 'images/img/port/sputnik.webp',
		link: 'https://rump-force.github.io/sputnik-nt/',
		color: 'yellow',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	{
		id: '16',
		title: 'Your Books From',
		date: 'Jan 8',
		image: 'images/img/port/Books.webp',
		link: 'https://rump-force.github.io/Your-Books-From/',
		color: 'purple',
		// Выбираем один из классов: green, blue, purple, pink, red, yellow
	},
	// {
	// 	id: '55555555',
	// 	title: '5555',
	// 	date: '5555555555',
	// 	image: '../images/img/port/peace.webp',
	// 	link: '555555555555555',
	// 	color: 'purple',
	// },
]

const projectsList = document.querySelector('.projects__list')

function renderProjects() {
	if (!projectsList) return

	const html = projectsData
		.map(project => {
			return `
      <article class="project__card">
        <div class="project__card-number">
          <div class="project__card-circle circle-${project.color}"></div>
          <div class="project__card-index">
            <span class="project__card-accent">[</span>
            ${project.id}
            <span class="project__card-accent">]</span>
          </div>
        </div>
        
        <div class="project__card-image">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        
        <div class="project__card-group">
          <div class="project__card-content">
            <div class="project__card-title">${project.title}</div>
            <div class="project__card-date">${project.date}</div>
          </div>
          <a href="${project.link}" class="button project__card-button card-button-${project.color}" target='blank'>
            Open
          </a>
        </div>
      </article>
    `
		})
		.join('')

	projectsList.innerHTML = html
}

// Запускаем отрисовку
renderProjects()
