const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.get('/', (request, response) => response.render('index.html'))
app.listen(port, () => console.log(`Server listening on port ${port}`))
