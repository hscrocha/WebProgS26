const bcrypt = require('bcrypt');

exports.hashPassword = function(strpwd){
    const salt = bcrypt.genSaltSync(6); //salt is a random string to makes each hash unique even on the same strs
    const hashedpwd = bcrypt.hashSync(strpwd, salt); //hashes the password
    return hashedpwd;
}

exports.comparePassword = function(strpwd, hashedpwd){
    // We must use this function to compare a strPassword to the hashed one
    return bcrypt.compareSync(strpwd, hashedpwd);
}

