import { body, validationResult } from "express-validator";

// validations is an array of ValidationChain
export const validate = (validations) => {
    // return a middleware function
    return async (req, res, next) => {
        for (let validation of validations) {
            // running the validation on the request body
            const result = await validation.run(req);

            // validation errors will be in result
            if (!result.isEmpty()) {
                break;
            }
        }

        // final result of validations
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            // no validation errors, go to next middleware
            return next();
        }

        return res.status(422).json({ errors: errors.array() });
    }
}

// define our validator functions

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password requires at least 8 characters."),
];

export const signUpValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];