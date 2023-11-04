const {Router} = require('express')
const config = require('config')
const Link = require('../models/Link')
const shortid = require('shortid')
const router = Router()
const tokenMiddleware = require('../middlewares/token.middleware')

router.post(
    '/shorten',
    tokenMiddleware,
    async (req, res) => {
        try {
            const baseUrl = config.get('baseUrl'),
                  { fullLink } = req.body

            const id = shortid.generate()

            const existingLink = await Link.findOne({ fullLink });

            if (existingLink) {
                res.json(existingLink)

                return
            }

            const shortLink = baseUrl + '/to/' + id

            const link = new Link({
                id, 
                fullLink,
                shortLink,
                creator: req.user.userId
            })
            
            await link.save()

            res.status(201).json(link)

        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)

router.get(
    '/',
    tokenMiddleware,
    async (req, res) => {
        try {
            const links = await Link.find({
                creator: req.user.userId,
            })

            res.status(200).json(links)
        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)


router.get(
    '/:id',
    tokenMiddleware,
    async (req, res) => {
        try {
            const linksArray = await Link.find({id: req.params.id}),
                  link = linksArray[0]

            if (!link) return res.status(400).json({ message: 'There is no such link'})

            return res.status(200).json(link)
        } catch (e) {
            res.status(500).json({message: "Something went wrong. Try again later"})
        }
    }
)

module.exports = router