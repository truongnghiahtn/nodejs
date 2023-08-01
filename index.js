const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')


app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('<html><head></head><body data-new-gr-c-s-check-loaded="14.1117.0" data-gr-ext-installed=""><text>Hello World!</text></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})