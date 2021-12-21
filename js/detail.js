$(document).ready(() => {
    init();
})

function init() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/car/${findID(window.location.href)}`,
        success : (data) => {
            console.log(data);
            displayDetails(data);
        },
        error : (err) => {
            console.error(err);
        }
    });
}

function findID(url) {
    var found = false;
    for(item of url.split("=")) {
        if(found == true) {
            return item;
        }
        if(item.includes("id")) {
            found = true;
        }

    }
}

function displayDetails(data) {
    $(".car_details").append(`<ul>
    <li>${data.id}</li>
    <li>${data.brand}</li>
    <li>${data.model}</li>
    <li>${data.weight}</li>
    <li>${data.price}</li>
</ul>`);
}