exports.saludo1 = (req, res, next) => {
    const saludo1 = 'Hola soy el saludo 1'

    req.saludo1 = saludo1
    next();
}

exports.saludo2 = (req, res, next) => {
    const saludo2 = 'Hola soy el saludo 2'

    req.saludo2 = saludo2
    next();
}