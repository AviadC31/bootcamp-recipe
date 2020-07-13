class Renderer {
    render = function (data) {
        $('#ingContainer').empty()
        const source = $('#template').html()
        const template = Handlebars.compile(source)
        let dataHTML = template({ data })
        $('#ingContainer').append(dataHTML)
    }
}
