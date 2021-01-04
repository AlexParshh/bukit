const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Load User model
const User = require("../../models/User");



router.use(function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization
    // if we have header then return token otherwise, undefined
    const token = authHeader && authHeader.split(" ")[1]

    //sends error saying user has not sent token
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, keys.secretOrKey, (err, user) => {
        if (err) return res.sendStatus(403) //token no longer valid no access.
        req.user = user
        next() 
    })

})

// @route POST api/userList/insert
// @desc insert list item into user list
// @access Private
router.post("/insert", (req, res) => {
    res.send("SUCCESS")


})


module.exports = router;