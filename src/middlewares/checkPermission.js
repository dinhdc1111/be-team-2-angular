import jwt from "jsonwebtoken";
import User from "../models/auth";
import dotenv from "dotenv";
dotenv.config();

export const checkPermission = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập tài khoản!",
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, async (error, payload) => {
            if (error) {
                switch (error.name) {
                    case "JsonWebTokenError":
                        return res.status(401).json({
                            message: "Token không hợp lệ!",
                        });
                    case "TokenExpiredError":
                        return res.status(401).json({
                            message: "Token đã hết hạn!",
                        });
                    default:
                        break;
                }
            }
            const user = await User.findById(payload._id);
            if (!user) {
                return res.status(401).json({
                    message: "Unauthorized",
                });
            }

            if (user.role !== "admin") {
                return res.status(401).json({
                    message: "Bạn không có quyền truy cập!",
                });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
