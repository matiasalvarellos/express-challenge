module.exports = {
    home: (req, res) => {
        
        res.send(`Views: ${req.session.contador}`)
    }
}