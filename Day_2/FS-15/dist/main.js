window.onload = showCars = async () =>{
    const cars = await $.get("/cars")
    $("#append-area").empty()

    cars.forEach(car => {
        $("#append-area").append(`<p>model: ${car.model}</p>`)
    });
}

$("#button").on("click", async ()=>{
    const input = $("#input").val()
    await $.post("/cars", {model:input})
    showCars()
})