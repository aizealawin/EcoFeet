const { Router } = require('express')
const router = Router()
const TrackerRouter = require('./trackerRouter')

// const controllers = require('../controllers')

router.get('/', (req, res) => res.send('this is root.'))

router.use('/tracker', TrackerRouter)










module.exports = router