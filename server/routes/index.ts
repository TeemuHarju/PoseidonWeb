const router = require('express').Router();

router.get('/', function (req : any, res : any, next : any) {
    res.send("Router Working");
})

module.exports = router;