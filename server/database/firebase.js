const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(require('../../store-afcc5-firebase-adminsdk-479wu-137d167d4d.json'))
});
const db = admin.firestore();

module.exports = db;