import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OrderSummary() {
    const { order_id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(
        () => {
            axios.get(`http://localhost:5000/order/order-details/${order_id}`)
        },
        [order_id]
    )

    return (
        <div>

        </div>
    )
}
