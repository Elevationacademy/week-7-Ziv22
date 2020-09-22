window.onload = showDogs = async () =>{
    $("#append-area").empty()
    
    const dogs = await $.get("/dogs")
    console.log(dogs)

    dogs.forEach(dog => {
        $("#append-area").append(`<p>${dog.name} is a dog </p>`)  
    })
}


$("#button").on("click" ,async  () =>{
    const dogInput = $("input").val()
    await $.post("/dogs", {name:dogInput})
    showDogs()
})

