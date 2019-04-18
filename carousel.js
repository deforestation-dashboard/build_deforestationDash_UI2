let carousels = document.getElementsByClassName("image-carousel");

[].forEach.call(carousels, function (element){
    let next = element.getElementsByClassName("next")[0],
    prev = element.getElementsByClassName("prev")[0],
    bubblesContainer = element.getElementsByClassName("bubbles")[0],
    inner = element.getElementsByClassName("inner")[0],
    imgs = inner.getElementsByTagName("img"),
    currentImageIndex = 0,
    width = 640;
    bubbles = [];

    for (let i = 0; i < imgs.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);

        b.addEventListener('click', function (){
            currentImageIndex= i;
            switchImg();
        });
    }

    function switchImg() {
        inner.style.left = -width * currentImageIndex + 'px';

        bubbles.forEach(function (b, i) {
            if (i === currentImageIndex){
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        })
    }

    next.addEventListener('click', function (){
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function (){
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    });

    switchImg();
})