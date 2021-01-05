const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


//Load User model
const User = require("../../models/User");
const Item = require("../../models/item");



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
    const id = req.body.id;
    const newItem = new Item.Item({
        itemName: req.body.name,
        itemDesc: req.body.desc,
        finishedStatus: req.body.status
    });
    
    User.findOne({_id:id}).then(user => {
        if (!user) {
            return res.sendStatus(400);
        } else {
            const userList = user.items
            userList.push(newItem);

            User.findByIdAndUpdate(id, {items: userList}, function (err,result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                
                }
            });
        }
    })

})

// @route POST api/userList/delete
// @desc delete list item from user list
// @access Private
router.post("/delete", (req, res) => {
    const id = req.body.id;
    const itemid = req.body.itemid;
    
    User.findOne({_id:id}).then(user => {
        if (!user) {
            return res.sendStatus(400);
        } else {
            const userList = user.items;
            const newuserList = userList.filter(x => x._id != itemid);

            User.findByIdAndUpdate(id, {items: newuserList}, function (err,result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                
                }
            });
        }
    })

})

// @route POST api/userList/update
// @desc updates list item in user list (can also be used to change item completion status)
// @access Private
router.post("/update", (req, res) => {
    const id = req.body.id;
    const itemid = req.body.itemid;

    const newItem = new Item.Item({
        _id:itemid,
        itemName: req.body.name,
        itemDesc: req.body.desc,
        finishedStatus: req.body.status
    });
    
    User.findOne({_id:id}).then(user => {
        if (!user) {
            return res.sendStatus(400);
        } else {
            const userList = user.items;
            const newuserList = userList.filter(x => x._id != itemid);
            newuserList.push(newItem);

            User.findByIdAndUpdate(id, {items: newuserList}, function (err,result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                
                }
            });
        }
    })

})



module.exports = router;