module.exports = {
    fooMiddleWare: function (req, res, next) {
        console.log('#########');
        next()
    },
    
    bar: function (req, res, next){
        console.log('bbbbbbbbbb');
        next();
    }
};