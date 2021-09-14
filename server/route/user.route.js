const e = require('express');
const app = require('express');
const db = require('../database/firebase')
const router = app.Router();

router.post('/register', async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const usersRef = db.collection('users').doc(username)
        const doc = await usersRef.get();
        if (!doc.exists) {
            await db.collection('users').doc(username).set({
                email,
                password,
                username
            });
            res.status(200).send({ message: ` created ${username}`})
        } else {
            res.status(400).send({ message: `${username} is already exits !`})
        }      
    } catch (err) {
        res.status(400);
        console.error(err);
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const usersRef = db.collection('users').doc(username)
        const doc = await usersRef.get();
        if(!doc.exists){
            res.status(400).send({ message: `${username} does not exist !`})
        }else{
            if(doc.data().password === password){
                res.status(200).send(doc.data());
            }else{
                res.status(400).send({message:`wrong password !`})
            }
        }
    } catch (err) {
        res.status(400);
        console.error(err);
    }
})

module.exports = router;