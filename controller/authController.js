const bcrypt = require("bcryptjs");
const User = require("../models/user");
exports.signIn = (req, res) => {
    if (req.session.userId) {
        res.redirect('/');
    }
    res.render("login", { err: false });
}

exports.homepage = (req, res) => {
    if (req.session.userId) {
        User.findOne({ _id: req.session.userId }).then(user => {
            console.log(user);
            if (user) {
                res.render('homepage', { user: user });
            } else {
                res.render('homepage', { user: null });
            }
        }).catch(err => {
            console.log(err);
        })
    } else {
        res.redirect('/login');
    }
}