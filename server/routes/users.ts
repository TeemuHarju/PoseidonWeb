const  router = require('express').Router();

router.post("/register", (req: any, res : any) => {
    console.log(req.body);
    const { username, email, password} = req.body;
    console.log(username);

    if (!username || !email || !password) {
        res.send("Ei toimi")
    }
    else 
    {
        res.send("Toimii")
    }
})

module.exports = router;
