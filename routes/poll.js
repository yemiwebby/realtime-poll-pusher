const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: 'Your Id',
    key: 'Your Key',
    secret: 'Your Secret',
    cluster: 'Your Cluster',
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