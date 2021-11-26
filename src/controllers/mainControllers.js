module.exports = {
    home: (req, res) => {
        console.log(req.session)
        res.send(`Views:  tantoo`)
    }
}