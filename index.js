let previous_btn = document.querySelector('.previous-btn')
let next_btn = document.querySelector('.next-btn')

let auto_scroll = document.querySelector('.auto-scroll')

let interval_time = document.querySelector('#interval-time')

let drop_nav = document.querySelector('.drop-nav')

let slides = document.querySelectorAll('.slide')

let current_slide = 0

next_btn.addEventListener('click', () => {
    current_slide = current_slide == slides.length - 1 ? 0 : current_slide + 1 
    slides[current_slide].scrollIntoView({behavior: 'smooth'})
})

previous_btn.addEventListener('click', () => {
    current_slide = current_slide == 0 ? slides.length - 1 : current_slide - 1 
    slides[current_slide].scrollIntoView({behavior: 'smooth'})
})

for (let i = 0; i < slides.length; i++) {
    const current_element = slides[i];
    let drop_nav_list = document.createElement('div')
    drop_nav_list.textContent = "Slide " + (i + 1)
    drop_nav_list.style.backgroundColor = current_element.querySelector('.slide-content-1').style.backgroundColor
    drop_nav_list.addEventListener('click', () => {
        current_slide = i 
        slides[i].scrollIntoView({behavior: 'smooth'})
    })
    drop_nav.appendChild(drop_nav_list)
}

let interval_key = null
let toggle_interval = 0

const auto_scroll_fn = () => {

    if (toggle_interval == 0) {
        auto_scroll.style.backgroundColor = "lightgreen"
        auto_scroll.style.borderColor = "white"
        auto_scroll.style.color = "white"
        auto_scroll.textContent = "On"
        interval_key = setInterval(() => {
            toggle_interval = 1
            current_slide = current_slide == slides.length - 1 ? 0 : current_slide + 1 
            slides[current_slide].scrollIntoView({behavior: 'smooth'})
        }, (parseFloat(interval_time.value) * 1000))
        
    }

    if(toggle_interval == 1){
        clearInterval(interval_key)
        toggle_interval = 0

        auto_scroll.style.backgroundColor = "rgb(121, 120, 120)"
        auto_scroll.style.borderColor = "rgb(92, 90, 90)"
        auto_scroll.style.color = "rgb(85, 82, 77)"
        auto_scroll.textContent = "Auto"
    }
}

auto_scroll.addEventListener('click', auto_scroll_fn)