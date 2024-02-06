const content = document.querySelector(".liked__products__content")
let allSavedData = JSON.parse(localStorage.getItem("liked"))





if (allSavedData.length > 0) {
    content.innerHTML = "";
    allSavedData.forEach(element => {
        content.innerHTML += `
            <div class="card">
            <div class="card-activity">
                <div class="card-sell">25%</div>
                <div class="card-liked"><i class="bi bi-heart"></i></div>
            </div>
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

else {
    content.innerHTML += `<h1 style="text-align:center;width:100%">No Data</h1>`
}


