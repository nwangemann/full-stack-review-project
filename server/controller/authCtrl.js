const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res, next) => {
        const db = req.app.get('db')
        let { password, email } = req.body
        const foundUser = await db.select_user(email).catch(err => console.log(err))
        if(!foundUser.length){
            res.status(401).send('That user does not exist')
        } else {
            const matchPasswords = await bcrypt.compare(password, foundUser[0].password).catch(err => console.log(err))
            if(matchPasswords){
                req.session.user = {
                    username: foundUser[0].username,
                    user_id: foundUser[0].user_id
                };
                res.status(200).send(req.session.user);
            } else {
                res.status(401).send('Incorrect email and/or password')
            }
        }
    }
}