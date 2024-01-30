const Tracker = require('../models/tracker')

const postTracker = async (req, res) => {
  try {
    const tracker = await new Tracker(req.body)
    await tracker.save()
    return res.status(201).json({
      tracker
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllTrackers = async (req, res) => {
  try {
    const tracker = await Tracker.find()
    return res.status(200).json({
      tracker
    })
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
}


module.exports = {
  postTracker,
  getAllTrackers,

}