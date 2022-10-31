const admin = require('firebase-admin');

var serviceAccount = require("../resources/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://goatedoff-default-rtdb.firebaseio.com"
});

var db = admin.database();

module.exports.db = db;

