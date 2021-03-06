const express = require("express");
const router = express.Router();

// Load User model
const Group = require("../../models/Group");
const ChatMessage = require('../../models/ChatMessage');

// @route GET api/groups
// @desc Get Group
// @access Private
router.get("/:id", (req, res) => {
  // validate user has access to that group?

  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.body.id })
  .then(group => {
    if (!group) {
      return res.status(400).json({ group: "Group not found" });
    } else {
      // should give us activeUsers and chatLog of group
      //  to pass into chat components
      console.log(group);
      res.json(group);
    };
  });
});

// // Route for posting a ChatMessage to the ChatLog... TODO DAVID
// router.post('/addChat/:name', (req, res) => {
//   Group.findOne({ groupName: req.params.name })
//     .then(group => {
//       group.save(() => {
//         if (err) throw err;

//         const message = new ChatMessage({
//           userId: req.body.userId,
//           message: req.body.message
//         });

//         message.save(() => {
//           if (err) throw err;
//         });
//       });
//     });
// });



router.post("/:name", (req, res) => {
  // find the group with the id and return the necessary data
  Group.findOne({ groupName: req.params.name }).then(group => {
    // make sure we dont overwrite an existing group
    if (group) {
      return res.status(400).json({ group: `Group ${groupName} already exists` });
    } else {
      // create the group if doesn't exist
      Group({
        groupName: req.params.name,
        activeUsers: [],
        chatLog: []
      })
      .save()
      .then(group => {
        console.log("added group:", group)
        res.send(`<h1>Group added!<\h1><h3>${group.groupName}<\h3>`)
      })
      .catch(err => console.log(err));
    }
  });
});

// @route GET api/groups
// @desc Get All Groups
// @access Private
router.get("/", (req, res) => {
  // find the group with the id and return the necessary data
  Group.find({})
  .then(groups => {
    if (!groups) {
      return res.status(400).json({ group: "No groups found in database" });
    } else {
      //console.log("available groups",groups);
      res.json(groups);
    };
  });
});

module.exports = router;
