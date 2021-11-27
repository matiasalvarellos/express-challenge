module.exports = {
    home: (req, res) => {
        req.session.contador += 1
        res.send(`Views: ${req.session.contador}`)
    }
}