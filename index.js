const axios = require('axios')
require('dotenv').config()

const inputArray = Array.from({length: 100}, () => Math.floor(Math.random() * 9))

const baseUrl = `https://getmostfrequentyseeninteger.azurewebsites.net/api/getmostfrequentinteger?code=` + process.env.AZURE_FUNCTION_KEY
console.log('baseUrl', baseUrl)

axios.get(baseUrl, {
    data: {
        integers: inputArray
    }
}).then(response => {
    console.log(response.data)
}).catch(error => {
    console.log(error)
})

