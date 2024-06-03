const { getRandomName } = require("../helper");
const Product = require("../model/product");
const Category = require('../model/category');

class ProductController {
    create(data, image) {
        return new Promise(
            (res, rej) => {
                try {
                    // save the file to the server
                    const imageName = getRandomName(image.name);
                    const destination = "./public/images/products/" + imageName;
                    image.mv(
                        destination,
                        (err) => {
                            if (err) {
                                rej({
                                    msg: "Internal server error",
                                    status: 0
                                })
                            } else {
                                data.image = imageName;
                                data.color = JSON.parse(data.color);
                                const product = new Product(data);
                                product.save()
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
                            }
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
    read(id, query) {
        return new Promise(
            async (res, rej) => {
                try {
                    let data = [];
                    if (id != undefined) {
                        data = await Product.findById(id).populate(['category', 'color']);
                    } else {
                        const category = await Category.findOne({ slug: query.category });
                        const filterQuery = {};
                        if (category != null) {
                            filterQuery.category = category._id;
                        }
                        if (query.color && query.color != "null") {
                            filterQuery.color = query.color;
                        }
                        data = await Product.find(filterQuery).populate(['category', 'color']).limit(parseInt(query.limit));
                    }
                    res({
                        msg: "Data found",
                        status: 1,
                        data,
                        imgBaseUrl: "/images/products/"
                    })
                } catch (err) {
                    console.log(err);
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    updateStatus(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    edit(id, data) {
        return new Promise(
            (res, rej) => {
                try {
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

module.exports = ProductController;