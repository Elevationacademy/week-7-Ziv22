window.onload = showHorses = async () =>{
    const horses = await $.get("/horses")
    $("#append-area").empty()
    horses.forEach(horse =>{
        $("#append-area").append(`<p>${horse.name}</p>`)
    })
}

$("#button").on("click",async () =>{
    const name = $("#input").val()
    await $.post("/horses", {name})
    showHorses()
}) 




