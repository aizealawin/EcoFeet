const {Router} = require('express')
const router = Router()
const controllers = require('../controllers/trackerController')

router.post('/newtracker', controllers.postTracker) 
router.get('/allTrackers', controllers.getAllTrackers)
router.get('/', (req, res) => res.send('this is tracker.'))


module.exports = router