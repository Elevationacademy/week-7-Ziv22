
window.onload = onPageLoad = async () =>{
    const data = await $.get("/something")
    $("#append-area").empty()
    data.forEach(element => {
        $("#append-area").append(`<p>${element.something}</p>`)
    });
}

$("#button").on('click', async ()=>{
    const something = $("#input").val()
    await $.post("/something" , {something})
    onPageLoad()
})

