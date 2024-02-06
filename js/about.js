let aboutData = JSON.parse(localStorage.getItem("aboutData"));

getAboutProduct()
function getAboutProduct() {
    fetch(aboutData.url + "/" + aboutData.id)
        .then(res => res.json())
        .then(data => console.log(data))
}





























