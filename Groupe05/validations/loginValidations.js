
import { body } from "express-validator"

const loginRules = [
    body('couriel_A').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special')
]

export default loginRules