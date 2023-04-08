let scroll_to_top = document.getElementById("scroll-to-top");
let navbar = document.getElementsByClassName('navbar')[0]

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scroll_to_top.style.display = "block";
    navbar.classList.add('sticky-top')
  } else {
    scroll_to_top.style.display = "none";
    navbar.classList.remove('sticky-top')
  }
}

scroll_to_top.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

async function load_gallery() {
  const noOfImg = 3;
  const galleryRow = document.querySelector('#gallery .row');
  const gSliderInner = document.querySelector('#g_slider .carousel-inner');
  const imageModalTotalSlide = document.querySelector('#image_modal #total_slide');

  for (let i = 1; i <= noOfImg; i++) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-6 img-box';

    const img = document.createElement('img');
    img.src = `images/img-${i}.jpg`;
    img.setAttribute('data-bs-target', '#g_slider');
    img.setAttribute('data-bs-slide-to', i - 1);

    col.appendChild(img);
    galleryRow.appendChild(col);

    const active = i === 1 ? 'active' : '';

    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${active}`;

    const carouselImg = document.createElement('img');
    carouselImg.src = `images/img-${i}.jpg`;
    carouselImg.className = 'd-block w-100';

    carouselItem.appendChild(carouselImg);
    gSliderInner.appendChild(carouselItem);
  }

  imageModalTotalSlide.textContent = noOfImg;
}