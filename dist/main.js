let renderer = new Renderer()

const fetchIngredient = function () {
    let input = $("#input").val()
    $.get(`/recipes/${input}`, function (res) {
        //console.log(res)
        renderer.render(res)
    })
}

function firstIng(img){
    console.log($(img).siblings("ul").children(":first").html())
}

