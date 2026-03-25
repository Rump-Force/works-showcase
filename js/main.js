// Подключения часов в header
// =====================
// Часы
// =====================

const clockElement = document.getElementById('clock')

function updateClock() {
	const now = new Date()
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	const seconds = String(now.getSeconds()).padStart(2, '0')

	clockElement.textContent = `${hours}:${minutes}:${seconds}`
}

updateClock()
setInterval(updateClock, 1000)

// =====================
// Случайная "задержка"
// =====================

const latencyElement = document.querySelector('.header__status-value')

function updateLatency() {
	const randomLatency = Math.floor(Math.random() * 5) + 1
	// от 1 до 5

	latencyElement.textContent = `${randomLatency}ms`
}

// менять каждые 2 секунды
setInterval(updateLatency, 2000)

// =====================
// Липкое меню
// =====================
let lastScroll = 0
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset

	if (currentScroll > lastScroll && currentScroll > 100) {
		// скролл вниз
		header.classList.add('header--hidden')
	} else {
		// скролл вверх
		header.classList.remove('header--hidden')
	}

	lastScroll = currentScroll
})
// =====================
// Открытия и закрытия меню
// =====================

const btnMenu = document.querySelector('.header__btn-menu')
const openMenu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const closeButtons = document.querySelectorAll('.header__menu-close')

btnMenu.addEventListener('click', () => {
	openMenu.classList.add('active-menu')
	overlay.classList.add('active-overlay')
	document.body.classList.add('no-scroll')
})

// Универсальная функция закрытия всего
function closeEverything() {
	// navCollection.classList.remove('active-collection')
	overlay.classList.remove('active-overlay')
	openMenu.classList.remove('active-menu')
	document.body.classList.remove('no-scroll')
}
closeButtons.forEach(btn => {
	btn.addEventListener('click', closeEverything)
})
overlay.addEventListener('click', closeEverything)
// const btnCollection = document.querySelector('.btn--collection')
// const navCollection = document.querySelector('.header__collection-list')
// const btnMenu = document.querySelector('.btn--menu')
// const navMenu = document.querySelector('.menu')
// const overlay = document.querySelector('.overlay')

// // Находим ВСЕ кнопки закрытия (и для коллекции, и для меню, если классы одинаковые)
// const closeButtons = document.querySelectorAll('.button__close-collection')

// // Открытие коллекции
// btnCollection.addEventListener('click', () => {
// 	navCollection.classList.add('active-collection')
// 	overlay.classList.add('active-overlay')
// })
// // Открытие меню
// btnMenu.addEventListener('click', () => {
// 	overlay.classList.add('active-overlay')
// 	navMenu.classList.add('active-menu')
// })

// // Универсальная функция закрытия всего
// function closeEverything() {
// 	navCollection.classList.remove('active-collection')
// 	overlay.classList.remove('active-overlay')
// 	navMenu.classList.remove('active-menu')
// }

// closeButtons.forEach(btn => {
// 	btn.addEventListener('click', closeEverything)
// })

// overlay.addEventListener('click', closeEverything)

document.addEventListener('DOMContentLoaded', () => {
	const chatForm = document.getElementById('chat-form')
	const chatInput = document.getElementById('chat-input')
	const history = document.getElementById('terminal-history')
	const counter = document.getElementById('char-counter') // Убедитесь, что в HTML есть этот ID

	const BOT_TOKEN = '8785127815:AAGFriSYHLjogvoOwRbJ-vts0cEhQdFIHAY'
	const CHAT_ID = '-5103886848'
	const MAX_CHARS = 200 // Лимит символов

	// --- НОВЫЙ БЛОК 1: Отслеживание ввода и счетчик ---
	chatInput.addEventListener('input', () => {
		const length = chatInput.value.length
		if (counter) {
			counter.textContent = `${length} / ${MAX_CHARS}`
			// Если текста слишком много, красим в красный
			counter.style.color = length >= MAX_CHARS ? '#ff5f56' : '#666'
		}
	})
	// ------------------------------------------------

	const appendLine = (text, type = 'user') => {
		if (!history) return
		const line = document.createElement('div')
		line.className = `terminal__line terminal__line--${type}`
		line.style.marginBottom = '8px'
		line.style.color = type === 'user' ? '#fff' : '#00ff00'
		line.textContent = type === 'user' ? `> ${text}` : `[SYSTEM]: ${text}`
		history.appendChild(line)
		history.scrollTop = history.scrollHeight
	}

	chatForm.addEventListener('submit', async e => {
		e.preventDefault()

		const message = chatInput.value.trim()

		// --- НОВЫЙ БЛОК 2: Проверка перед отправкой ---
		if (!message) return
		if (message.length > MAX_CHARS) {
			appendLine(`ОШИБКА: Превышен лимит символов (${MAX_CHARS}).`, 'bot')
			return
		}
		// ----------------------------------------------

		appendLine(message, 'user')
		chatInput.value = ''
		chatInput.style.height = 'auto'
		if (counter) counter.textContent = `0 / ${MAX_CHARS}` // Сброс счетчика

		const telegramText = `<b>📡 Новое сообщение:</b>\n\n${message}`

		try {
			const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: telegramText,
					parse_mode: 'HTML',
				}),
			})

			if (response.ok) {
				appendLine('Передача завершена успешно. Канал чист.', 'bot')
			} else {
				throw new Error('Ошибка API')
			}
		} catch (error) {
			appendLine('ОШИБКА: Не удалось связаться с сервером.', 'bot')
			console.error('Ошибка отправки:', error)
		}
	})

	chatInput.addEventListener('keydown', e => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			chatForm.dispatchEvent(new Event('submit'))
		}
	})
})
