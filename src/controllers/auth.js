const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function createJWT(user) {
    return jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    );
}

module.exports = { createJWT };