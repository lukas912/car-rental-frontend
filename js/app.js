$(document).ready(function() {
    init();
});

function init() {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/cars",
        success: (data) => {
            console.log(data);
            listCars(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
}

function listCars(data) {
    for(item of data) {
        createCard(item);
    }

}

function createCard(item) {
    $(".car_container").append(`
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="img/car.jpg">
          <span class="card-title">${item.brand}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>${item.model}</p>
        </div>
      </div>
    </div>
    `);
}