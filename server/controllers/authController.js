const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;        

        const db = req.app.get('db');
        const results = await db.get_user([username]);
        const existingUser = results[0];
        if (existingUser) {
            return res.status(409).send('Username is taken');
        }
        const profilePic = `https://robohash.org/${username}`
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registerUser = await db.register_user([username, hash, profilePic]);
        const user = registerUser[0];
        return res.status(201).send(user);
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const results = await db.get_existing_user([username]);
        const existingUser = results[0];
        if (!existingUser) {
            return res.status(401).send('User not found. Please register as a new user before logging in.');
        }
        const isAuthenticated = bcrypt.compareSync(password, existingUser.password);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        return res.status(200).send(existingUser);
    }
}