const User = require("../model/user");

class UserController {
    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const user = new User(data);
                    user.save()
                        .then(
                            (success) => {
                                resolve({
                                    status: 1,
                                    msg: "User record created"
                                })
                            }
                        ).catch(
                            (error) => {
                                reject(
                                    {
                                        status: 0,
                                        msg: "Unable to add data"
                                    }
                                )
                            }
                        )
                } catch (err) {
                    reject(
                        {
                            status: 0,
                            msg: "Internal server error"
                        }
                    )
                }


            }
        )
    }

    read(userId) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let users = "";
                    if (userId != undefined) {
                        users = await User.findById(userId);
                        resolve({
                            status: 1,
                            users,
                            msg: (users == null ? "No" : 1) + " record found"
                        })
                    } else {
                        users = await User.find();
                        reject({
                            status: 1,
                            users,
                            msg: users.length + " records found"
                        })
                    }
                } catch (err) {
                    reject(
                        {
                            status: 0,
                            msg: "Internal server error"
                        }
                    )
                }
            }
        )
    }
}


module.exports = UserController;