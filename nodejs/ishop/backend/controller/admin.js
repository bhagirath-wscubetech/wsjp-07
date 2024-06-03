const { decryptPassowrd, createToken } = require('../helper');
const Admin = require('../model/admin');

class AdminController {


    login(data) {
        return new Promise(
            async (res, rej) => {
                try {
                    const admin = await Admin.findOne({ email: data.email });
                    if (admin) {
                        if (data.password == decryptPassowrd(admin.password)) {
                            const token = createToken(admin);
                            res({
                                msg: "Login successful",
                                status: 1,
                                admin,
                                token
                            })
                        } else {
                            rej({
                                msg: "Incorrect password",
                                status: 0
                            })
                        }
                    } else {
                        rej({
                            msg: "Admin with this email not found",
                            status: 0
                        })
                    }
                } catch (err) {
                    console.log(err.message);
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = AdminController;