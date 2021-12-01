module.exports = {
    home: (req, res) => {
        
        req.session.views += 1
        req.session.save()
        
        res.send(`Views: ${Number(req.session.views)}`)
    }
}