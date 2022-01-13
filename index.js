const cohort1 = process.argv[2]
const userName = process.env.USERNAME

if (cohort1 === 'web-49') {
    console.log(`${cohort1} is the best forever!`)
} else {
    console.log(`booooh! cohort ${cohort1}`)
}

console.log(`the user is ${userName}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'hey there' })
})

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`Listening on port, ${port}`)
})