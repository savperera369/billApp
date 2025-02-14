import User from "../models/User";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { AUTH_TOKEN } from "../utils/constants.js";

export const userSignUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({ message: "User with this email already exists" });
        }

        const hashedPassword = await hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        // send a user a token in the form of cookies
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        res.clearCookie(AUTH_TOKEN, {
            httpOnly: true,
            signed: true,
            domain: "localhost",
            path: "/"
        });

        const token = createToken(user._id.toString(), user.email, "7d");

        res.cookie(AUTH_TOKEN, token, {
            httpOnly: true,
            signed: true,
            path: "/",
            domain: "localhost",
            expires
        });

        return res.status(201).json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error signing up user", cause: error.message });
    }
}

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }

        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "You are not authorized to trap in this application." });
        }

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        res.clearCookie(AUTH_TOKEN, {
            httpOnly: true,
            signed: true,
            domain: "localhost",
            path: "/",
        });

        const token = createToken(user._id.toString(), user.email, "7d");

        res.cookie(AUTH_TOKEN, token, {
            httpOnly: true,
            signed: true,
            path: "/",
            domain: "localhost",
            expires
        });

        return res.status(200).json({ message: "OK", name: user.name, email: user.email })
    } catch (error) {
        console.log("error logging in user.");
        return res.status(500).json({ message: "error logging in user." });
    }
}