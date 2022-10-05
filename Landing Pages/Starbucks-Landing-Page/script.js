const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    btn.classList.toggle('hidden')
    document.body.classList.toggle('n-scroll')
}

btn.addEventListener('click', navToggle)