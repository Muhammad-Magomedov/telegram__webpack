const { Router } = require("express")
const channelsController = require("../controllers/channels")
const router = Router()

router.get("/random")
router.get("/", channelsController.getAllChannels)
router.get("/channels/:id", channelsController.getChannels)
router.get("/category/:id/channels", channelsController.getChannelsByCategory)

router.post("/channels/:id", channelsController.createChannels)

module.exports = router