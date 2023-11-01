const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({
                message: 'Пользователь не авторизован'
            })
        }

        const decodedToken = jwt.verify(token, config.get('jwtSecretKey'))

        req.user = decodedToken 
        next()
    } catch (e) {
        res.status(401).json({
            message: 'Пользователь не авторизован'
        })
    }
}