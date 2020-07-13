const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get('/recipes/:ingredient', function (request, response) {

    let { ingredient } = request.params

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data) {
        if (err) {
            let err = 'no available data to serve'
            throw err;
        }

         let result = JSON.parse(data).results
     
         let final = result.map(m => {
            return {
                ingredients: m.ingredients,
                title: m.title,
                thumbnail: m.thumbnail,
                href: m.href,
            }})
            response.send(final)
        })
    })

module.exports = router