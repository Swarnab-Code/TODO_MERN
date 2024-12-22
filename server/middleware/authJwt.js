import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET;

export async function authenticateToken(req, res, next) {
	const token = req.header('Authorization');
	if (!token) {
		return res.status(401).send({ message: 'Authentication Failed!' });
	}

	jwt.verify(token, secretKey, (err, user) => {
		if (err) {
			return res
				.status(403)
				.send({ message: 'Token is not valid! Please login again!' });
		}
		req.user = user;
		next();
	});
}
