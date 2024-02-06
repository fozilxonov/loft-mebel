const row = document.querySelector(".mainrow");
const content = document.querySelector(".header-content");
const prev = document.querySelector(".dynamic-white");
const next = document.querySelector(".dynamic-grey");

















let source = [];

fetch("https://652553ed67cfb1e59ce71adc.mockapi.io/Children")
    .then(data => data.json())
    .then(res => {
        source = res,
            innerData(source)

    })
    .catch((error) => console.log(error))

function innerData(data) {
    row.innerHTML = "";
    data.forEach(element => {
        row.innerHTML +=
            `
        <div class="card">
                <div class="card-header">
                    <img src="${element.img}" alt="" class="img">
                </div>
    
                <div class="card-body">
                    <div class="card-sub title">${element.title}</div>
                    <div class="card-subtext name">${element.name}</div>
                    <div class="card-price price">${element.price}</div>
                    <div class="card-razmer">Размеры</div>
    
                    <div class="card-row">
                        <div class="card-col">
                            <div class="col-sub">ШИРИНА</div>
                            <div class="col-text width">${element.width}</div>
                        </div>
                        <div class="card-col">
                            ×
                        </div>
                        <div class="card-col">
                            <div class="col-sub">ГЛУБИНА</div>
                            <div class="col-text height">${element.height}</div>
                        </div>
                        <div class="card-col">
                            ×
                        </div>
                        <div class="card-col">
                            <div class="col-sub">ВЫСОТА</div>
                            <div class="col-text depth">${element.depth}</div>
                        </div>
                    </div>
                    <button class="card-btn saved">Добавить в корзину</button>
                </div>
            </div>
        
        
        `
    });

}


var currentIndex = 1;

function displaySlide(n) {
    currentIndex = n;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var slno = document.getElementById("slide-no");

    if (currentIndex > slides.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].className = "dot active";
    slno.innerHTML = currentIndex + "/" + slides.length;
}

displaySlide(currentIndex);

function changeSlide(n) {
    currentIndex += n;
    displaySlide(currentIndex);
}

function currentSlide(n) {
    displaySlide(n);
}

