const express = require("express")

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: 1
    })
})

// account
// admin  -- admin
// user   --  user
app.get('/login', (req, res) => {

    let data = req.query;


    if (data.account == 'admin') {
        res.setHeader("token", 'admin');
        res.json({
            ok: 1,
            token: 'admin'
        })
    } else {
        res.setHeader("token", 'user');
        res.json({
            ok: 1,
            token: 'user'
        })
    }

})

app.listen(3000, () => {
    console.log('server  started....');
})