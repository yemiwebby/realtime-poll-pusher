const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '478628',
    key: 'd04d7d334910e9b1a3e9',
    secret: '33e4e0a461056e9d3f67',
    cluster: 'eu',
    encrypted: true
  });


router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
      });

      return res.json({success: true, message: 'Thank you for voting'});
});

module.exports = router;