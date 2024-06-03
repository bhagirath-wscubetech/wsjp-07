import React, { useContext, useEffect, useState } from 'react'
import Container from '../../Components/Website/Container'
import { MainContext } from '../../Main';
import { useDispatch, useSelector } from 'react-redux';
import { changeQty, emptyCart } from '../../reducers/cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useRazorpay from "react-razorpay";

export default function Checkout() {
    const [Razorpay] = useRazorpay();
    const dispatcher = useDispatch();
    const { fetchProduct, notify } = useContext(MainContext);
    const cart = useSelector(store => store.cart);
    const user = useSelector(store => store.user);
    const [products, setProduct] = useState([]);
    const navigator = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(
        () => {
            setUserData({
                name: user.data?.name,
                email: user.data?.email,
                contact: user.data?.contact,
                address: user.data?.address,
                pincode: user.data?.pincode,
                paymentMode: 2
            })
        }, [user]
    )



    const dbCartUpdate = (pId, qty) => {
        if (user.data != null) {
            axios.get(`http://localhost:5000/user/change-qty/${user.data._id}/${pId}/${qty}`)
                .then(() => { }).catch(() => { })
        }
    }

    useEffect(
        () => {
            fetchProduct()
                .then(
                    (success) => {
                        if (success.status == 1) {
                            setProduct(success.data);
                        } else {
                            setProduct([]);
                        }
                    }
                ).catch(
                    (error) => {

                    }
                )
        },
        []
    )

    const tbody = [];
    for (let p of products) {
        const found = cart.data.find(i => i.pId == p._id);
        if (found) {
            tbody.push(<tr key={p._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {p.name}
                </th>
                <td className="px-6 py-4">
                    $ {p.discounted_price}
                </td>
                <td className="px-6 py-4 flex items-center gap-4">
                    <button onClick={
                        () => {
                            dispatcher(changeQty({ pId: p._id, flag: 2, price: p.discounted_price }));
                            dbCartUpdate(p._id, found.qty - 1)
                        }
                    } className='p-2 shadow bg-blue-400 text-white'>-</button>
                    <div className='border p-3 w-[20%] text-center'>{found.qty}</div>
                    <button onClick={
                        () => {
                            dispatcher(changeQty({ pId: p._id, flag: 1, price: p.discounted_price }))
                            dbCartUpdate(p._id, found.qty + 1)
                        }
                    } className='p-2 shadow bg-blue-400 text-white'>+</button>
                </td>
                <td className="px-6 py-4">
                    $ {p.discounted_price * found.qty}
                </td>
            </tr>)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // userData
        const order_total = cart.total + (userData.paymentMode == 1 ? 50 : 0);
        const product_details = [];
        for (let p of products) {
            const found = cart.data.find(i => i.pId == p._id);
            if (found) {
                product_details.push(
                    {
                        price: p.discounted_price,
                        name: p.name,
                        slug: p.slug,
                        image: p.image,
                        ...found
                    }
                );
            }
        }
        const data = {
            user_details: userData,
            product_details,
            order_total,
            user_id: user.data._id
        }
        axios.post("http://localhost:5000/order/create-order", data)
            .then(
                (success) => {
                    console.log(success.data.status);
                    if (success.data.status == 1) {
                        if (userData.paymentMode == 1) {
                            navigator(`/order-summary/${success.data.order_id}`);
                            dispatcher(emptyCart());
                        } else {
                            openPaymentPopUp(success.data.order_id, success.data.razorpayOrder);
                        }
                    } else {

                    }
                }
            ).catch(
                (error) => {

                }
            )
    }

    const openPaymentPopUp = (order_id, razorpayOrder) => {
        const options = {
            key: "rzp_test_nx9HsGibPhqwmW", // Enter the Key ID generated from the Dashboard
            amount: razorpayOrder.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "WsCube Tech",
            description: "upskillingBharat",
            image: "https://www.wscubetech.com/images/wscube-tech-logo.svg",
            order_id: razorpayOrder.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                axios.post("http://localhost:5000/order/razorpay-transaction-handle",
                    { amount: razorpayOrder.amount, razorpay_response: response, order_id }
                ).then(
                    (success) => {
                        if (success.data.status) {
                            navigator(`/order-summary/${success.data.order_id}/true`);
                            dispatcher(emptyCart());
                        } else {
                            notify(success.data.msg, "error");
                        }
                    }
                ).catch(
                    (error) => {
                        notify("Client error", "error");
                    }
                )
            },
            prefill: {
                name: userData.name,
                email: userData.email,
                contact: userData.contact,
            },
            theme: {
                color: "#ff4252",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            axios.post("http://localhost:5000/order/razorpay-transaction-handle",
                { amount: razorpayOrder.amount, razorpay_response: response.error.metadata, order_id }
            ).then(
                (success) => {
                    notify(success.data.msg, "error");
                    console.clear();
                }
            ).catch(
                (error) => {
                    console.clear();
                    console.log(error.message);
                    notify("Client error", "error");
                }
            )
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
        });

        rzp1.open();
    }

    return (
        <Container>
            <div className='lg:grid grid-cols-2 gap-3 my-4'>
                <div>
                    <h3 className='text-center my-3 text-xl'>Cart Details</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tbody}
                        </tbody>
                    </table>
                </div>
                <div className='border-l'>
                    <h3 className='text-center my-3 text-xl'>Shipping Details</h3>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6 px-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={userData?.name}
                                onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }}
                                required
                                autoComplete="off"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                value={userData?.email}
                                onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                                name="email"
                                type="email"
                                required
                                autoComplete="off"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                                Contact
                            </label>
                            <input
                                id="contact"
                                value={userData?.contact}
                                onChange={(e) => { setUserData({ ...userData, contact: e.target.value }) }}
                                name="contact"
                                type="text"
                                required
                                autoComplete="off"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={userData?.address}
                                onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }}
                                required
                                rows="3"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                                Pincode
                            </label>
                            <input
                                id="pincode"
                                value={userData?.pincode}
                                onChange={(e) => { setUserData({ ...userData, pincode: e.target.value }) }}
                                name="pincode"
                                type="text"
                                required
                                autoComplete="off"
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="payment_mode" className="block text-sm font-medium text-gray-700">
                                Payment Mode
                            </label>
                            <input type="radio" onClick={
                                () => setUserData({ ...userData, paymentMode: 1 })}
                                checked={userData?.paymentMode == 1 ? true : false}
                                value={1} /> COD (₹ 50 extra)<br />

                            <input type="radio" onClick={
                                () => setUserData({ ...userData, paymentMode: 2 })}
                                checked={userData?.paymentMode == 2 ? true : false} value={2} /> Razorpay (No extra charge)
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}
