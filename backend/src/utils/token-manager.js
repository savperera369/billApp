import jwt from 'jsonwebtoken';
import { AUTH_TOKEN } from './constants';

export const createToken = (id, email, expiresIn) => {
    const payload = {
        id, email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn
    });

    return token;
}

export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[AUTH_TOKEN];
    if (!token || token.trim() === '') {
        return res.status(401).json({ message: "No token found"});
    }

    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "Token has expired" });
            } else {
                console.log("Token verification was successful");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        })
    })
}