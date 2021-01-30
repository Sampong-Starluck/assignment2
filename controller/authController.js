const bcrypt = require("bcryptjs");
const User = require("../models/user");
exports.signIn = (req, res) => {
    if (req.session.userId) {
        res.redirect('/');
    }
    res.render("login", { err: false });
}