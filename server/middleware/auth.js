const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            console.log(decoded, "Decoded");
            req.email = decoded.email;
            req.roles = decoded.roles;

            console.log(req.roles, "roles");
            req.name = decoded.name;
            next();
        }
    );
}

module.exports = validateToken