const e = require('express');
const app = require('express');
const db = require('../database/firebase')
const router = app.Router();

router.post('/register', async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const document = db.collection('users').doc();
        const userRef = db.collection('users');
        const snapshot = await userRef.get();
        snapshot.forEach(doc => {
            let check = doc.data().username
            if (check == username) {
                res.send(`user ${username} is already exits !`)
                return;
            } else {
                const documentUuid = document.id;
                document.set({
                    uuid: documentUuid,
                    username: username,
                    password: password,
                    email:email
                });
                res.send(`created ${username}`)
                return;
            }
        });
    } catch (err) {
        res.status(300);
        console.error(err);
    }
});

router.get('/login', async (req, res) => {

})

module.exports = router;