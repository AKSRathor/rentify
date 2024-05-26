const express = require("express")
const router = express.Router()
const post = require("../Models/post")
const { body, validationResult } = require("express-validator")
const user = require("../Models/user")

router.post("/createpost", async (req, res) => {
    try {
        const { ownerName, desc, tags, price, address } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const pst = new post({
            ownerName, desc, tags, price, address
        })
        const sentMsg = await pst.save()
        res.json(sentMsg)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }

})

router.post("/fetchallpost", async (req, res) => {
    try {
        console.log("inside")
        const AllMsg = await post.find()
        res.json(AllMsg)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

router.post("/showpost", async (req, res) => {
    try {
        const { postid } = req.body;
        const myPost = await post.find({ _id: postid })
        res.send(myPost)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})


module.exports = router