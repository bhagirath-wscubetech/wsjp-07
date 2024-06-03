const Color = require('../model/color');

class ColorController {
    create(data) {
        return new Promise(
            (res, rej) => {
                try {
                    const color = new Color(data);
                    color.save()
                        .then(
                            (success) => {
                                res({
                                    msg: "Data added",
                                    status: 1
                                })
                            }
                        ).catch(
                            (error) => {
                                rej({
                                    msg: "Unable to add the data",
                                    status: 0
                                })
                            }
                        )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    read(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let data = [];
                    if (id != undefined) {
                        data = await Color.findById(id);
                    } else {
                        data = await Color.find();
                    }
                    res({
                        msg: "Data found",
                        status: 1,
                        data
                    })
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    updateStatus(id, new_status) {
        return new Promise(
            (res, rej) => {
                try {
                    Color.updateOne({ _id: id }, { status: new_status })
                        .then(
                            (success) => {
                                res(
                                    {
                                        msg: "Status changed",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej(
                                    {
                                        msg: "Unable to change the status",
                                        status: 0
                                    }
                                )
                            }
                        )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    update(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                    Color.updateOne({ _id: id }, data)
                        .then(
                            (success) => {
                                res(
                                    {
                                        msg: "Data updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej(
                                    {
                                        msg: "Unable to update the data",
                                        status: 0
                                    }
                                )
                            }
                        )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                    Color.deleteOne({ _id: id })
                        .then(
                            (success) => {
                                res({ msg: "Data deleted", status: 1 })
                            }
                        )
                        .catch(
                            (error) => {
                                console.log(error);
                                rej({ msg: "Unable to delete data", status: 0 })
                            }
                        )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = ColorController;