const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()

// /api/auth
router.post(
    '/register', 
    [
        check('email', 'Invalid email')
            .isEmail(),
        check('password', 'Minimal password length is 5 characters')
            .isLength(5)
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            toHandleValidationErrors(res, errors)

            const {email, password} = req.body

            const userWithSuchEmail = await User.findOne({ email })

            if (userWithSuchEmail) {
                res.status(400).json({
                    message: "This email has already been used"
                })

                return
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({
                email,
                password: hashedPassword
            })

            await user.save()

            res.status(201).json({
                message: 'User has been created'
            })

        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)

router.post(
    '/login',
    [
        check('email', 'Enter valid email')
            .normalizeEmail()
            .isEmail(),

        check('password', 'Enter valid password')
            .isLength(5)
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            toHandleValidationErrors(res, errors)

            const {email, password} = req.body

            const user = await User.findOne({ email })

            if (!user) {
                res.status(400).json({
                    message: "There is no user with such email"
                })

                return
            }

            const isPasswordRight = await bcrypt.compare(password, user.password)

            if (!isPasswordRight) {
                res.status(400).json({
                    message: "The password is invalid"
                })

                return
            }

            res.json({
                token: toGetJwtToken(user.id),
                userId: user.id
            })

        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)

function toGetJwtToken(id) {
    return jwt.sign(
        {
            userId: id
        },
        config.get('jwtSecretKey'),
        { 
            expiresIn: '1h'
        }
    )
}

module.exports = router