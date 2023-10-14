exports.isLoggedIn = (req, res, next) => {
    if(req.user){
        next();
    } else {
        return res.status(401).send('You must be logged in to view this page');
    }
}