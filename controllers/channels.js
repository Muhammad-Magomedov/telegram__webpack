const Channels = require("../models/Channel")

class channelsController {
  async getChannels(req, res) {
    try {
      const channels = await Channels.findById(req.params.id)
      res.json(channels)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getChannelsByCategory(req, res) {
    try {
      const channels = await Channels.findById({category: req.params.id})
      res.json(channels)
    } catch (e) {
      res.json(e.message)
    }
  }
  async createChannels(req, res) {
    try {
      const channels = new Channels({
        title: req.body.title,
        name: req.body.name,
        text: req.body.text,
        category: req.params.id
      })
      await res.save(channels)
      res.json(channels)
    } catch (e) {
      res.json(e.message)
    }
  }
}

module.exports = new channelsController()