const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()
const { toHandleValidationErrors } = require('./helpers/error-handling.helper')
const Link = require('../models/Link')

// /api/auth
router.get(
    '/:code',
    async (req, res) => {
        try {
            const link = await Link.findOne({ id: req.params.code })

            if (!link) {
                res.status(404).json(
                    'Link was not found'
                )

                return
            }

            

            link.redirects++
            await link.save()
            return res.redirect(link.fullLink)
        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)

module.exports = router