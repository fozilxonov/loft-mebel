const row = document.querySelector(".mainrow");
const content = document.querySelector(".header-content");
const activeLiked = document.querySelector(".navbar-bar .bi-heart")
const bestsellersProductLink = "https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers";

let liked = [];
let source = [];



function getAllProducts() {
    fetch("https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers", {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {
            source = data;
            liked = data.filter(item => item.saved == true);
            innerData(source);
            innerLikeCount()
        })
}

getAllProducts()

function innerData(data) {
    row.innerHTML = "";
    data.forEach(element => {
        row.innerHTML +=
            `
        <div class="card">
        <div class="card-activity">
        <div class="card-sell">25%</div>
        <div class="card-liked"><i class="bi bi-heart" onclick ="getData(${element.id})"></i></div>
    </div>
                <div class="card-header">
                    <img src="${element.img}" alt="" class="img" onclick="getProductId(${element.id})">
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




// var currentIndex = 1;

// function displaySlide(n) {
//     currentIndex = n;
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.getElementsByClassName("dot");
//     var slno = document.getElementById("slide-no");

//     if (currentIndex > slides.length) {
//         currentIndex = 1;
//     }
//     if (currentIndex < 1) {
//         currentIndex = slides.length;
//     }
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[currentIndex - 1].style.display = "block";
//     dots[currentIndex - 1].className = "dot active";
//     slno.innerHTML = currentIndex + "/" + slides.length;
// }

// displaySlide(currentIndex);

// function changeSlide(n) {
//     currentIndex += n;
//     displaySlide(currentIndex);
// }

// function currentSlide(n) {
//     displaySlide(n);
// }




function getData(id) {
    fetch(`https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers/${id}`)
        .then(res => res.json())
        .then(data => changeStatus(data))
}

function changeStatus(data) {
    if (data.saved) {
        data.saved = false;

    }
    else {
        data.saved = true;
    }

}


function innerLikeCount() {
    if (liked.length > 0) {
        activeLiked.style.color = "red"
    }
    localStorage.setItem("liked", JSON.stringify(liked))
}

function getProductId(id) {
    let data = {
        id: id,
        url: bestsellersProductLink
    }
    localStorage.setItem("aboutData", JSON.stringify(data));
    window.location.href = "about.html"
}




























