$(".slick-library").slick({
    // dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                // dots: true
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

const header = document.querySelector('.header')
const heightOfHeader = [header][0].clientHeight

const toggle = document.querySelector('.header-toggle');
const menu = document.querySelector('.header-menu');
const close = document.querySelector('.header-item');
const fake_bgr = document.querySelector('.header-fakeBgr');
const search = document.querySelector('.header-search');
const blockSearch = document.querySelector('.header-blockSearch');
const header_search_close = document.querySelector('.close');

const blog_btn = document.querySelector('.blog .blog-btn .btn-has-icon');
const blog_list_load = document.querySelector('.blog-list-load');

const item_to_popup = document.querySelectorAll('.popup-image');

const popup = document.querySelector('.popup');
const popup_img = document.querySelector('.popup .popup-wrapper .popup-img img');

const count_numb = document.querySelectorAll('.overview-numb')
const count = 0

const arrowUp = document.querySelector('.arrow-up')


// Menu scrolling
if (window.innerWidth >= 768) {
    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset > heightOfHeader) {
            header.classList.add('fixedHeader')
        } else {
            header.classList.remove('fixedHeader')
        }
    })
}


// Menu toggle
toggle.addEventListener('click', (e) => {
    menu.classList.add('menu-toggle')
    fake_bgr.style.display = 'block';
})

close.addEventListener('click', (e) => {
    menu.classList.remove('menu-toggle')
    fake_bgr.style.display = 'none';
})

fake_bgr.addEventListener('click', (e) => {
    menu.classList.remove('menu-toggle')
    fake_bgr.style.display = 'none';
})


// Click search header
search.addEventListener('click', (e) => {
    console.log('a');
    blockSearch.classList.toggle('appear')
})

header_search_close.addEventListener('click', (e) => {
    blockSearch.classList.remove('appear')
})

// bock_btn
blog_btn.onclick = function (e) {
    this.style.display = 'none';
    blog_list_load.classList.add('load')
}

// Popup --------
item_to_popup.forEach((item) => {

    item.onclick = function () {
        const src_img = [this][0].parentNode.parentNode.children[0].getAttribute('src')
        popup_img.setAttribute('src', src_img)
        popup.classList.add('appear')

        const blog = document.querySelector('.blog')
        const height_src_img = [this][0].parentNode.parentNode.children[0]
        const popup_wrapper = document.querySelector('.popup-wrapper')
        if ([height_src_img][0].height > 300 && blog.contains(item)) {

            popup_wrapper.style.maxWidth = '600px'
        } else {
            popup_wrapper.style.maxWidth = '1100px'

        }
    }
})


popup.addEventListener('click', (e) => {
    if (!e.target.matches('.popup-img img')) {
        popup.classList.remove('appear')
    }
})


// counter number
const position = document.querySelector('.overview').offsetTop - 706

let isRun = true
window.addEventListener('scroll', (e) => {
    if (window.pageYOffset >= position && isRun == true) {
        isRun = false
        count_numb.forEach((count) => {
            let speed = 400
            const updateCount = () => {
                const target = +count.getAttribute('data-target')
                const currentNumber = +count.innerText
                const increment = target / speed
                if (currentNumber < target) {
                    count.innerText = Math.ceil(currentNumber + increment)
                    setTimeout(updateCount, 5)
                } else {
                    count.innerText = target
                }
            }
            updateCount()
        })

    }
})


// scroll to Top 
arrowUp.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})





