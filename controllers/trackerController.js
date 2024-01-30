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

const getTrackerById = async (req, res) => {
  try { 
    const { id } = req.params
    const tracker = await Tracker.findById(id)
    if (tracker) { 
      return res.status(200).json({
        tracker
      })
      return res.status(404).send("Tracker with specific ID does not exist")
    }
  } catch (error) { 
    return res.status(500).json({error: error.message})
  }
}

const findByIdAndDeleteTracker = async (req, res) => {
  try {
    const { id } = req.params
    const tracker = await Tracker.findByIdAndDelete(id)
    if (tracker) {
      return res.status.send('Tracker deleted!')
    }
    return res.status(404).send("Tracker with specific ID does not exist.")
  } catch (error) { 
    return res.status(500).json({ error: error.message})
  }
}

const findByIdAndUpdateTracker = async (req, res) => {
  try { 
    const { id } = req.params
    const tracker = await Tracker.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(tracker)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  postTracker,
  getAllTrackers,
  getTrackerById,
  findByIdAndDeleteTracker,
  findByIdAndUpdateTracker,


}