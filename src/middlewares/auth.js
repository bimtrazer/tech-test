import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'No estas autorizado'
        });
    }
   jwt.verify(token, "bim123", (err, decoded) => {
        if (err) 
            return res.status(401).json({
                message: 'No estas autorizado'
            });
        req.usuarioId = decoded.id;
        next();
    });
};