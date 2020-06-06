module.exports = {
    rateLimit: function (req, res, next) {
        console.log('rate limit');
        next();
    },
    
    individualLocationWindowValidation: function (req, res, next) {
        console.log('individual location window validation');
        // res.send({ok:false, message: 'invalid what ever'});
        next();
    }
}