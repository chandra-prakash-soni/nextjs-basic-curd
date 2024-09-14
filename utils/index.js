import React from "react";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const cookieSetter = (res, token, set) => {
  // Use the "Set-Cookie" header to set or reset the token cookie
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      maxAge: set ? 60 * 60 * 24 * 7 : 0, // 1 week or 0 to reset
      httpOnly: true,
    })
  );
};

const getToken = (id) => {
  console.log(jwt.sign({ id }, process.env.jwt_key), "jwt token");
  return jwt.sign({ id }, process.env.jwt_key);
};

export { cookieSetter, getToken };
