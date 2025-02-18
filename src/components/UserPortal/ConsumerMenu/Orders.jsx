import React, { useEffect, useState } from "react";
import { useProfile } from "../../ProfileContext/ProfileContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Orders = () => {
  const [orders, setOrders] = useState([])
  const { userId } = useProfile()
  const navigate = useNavigate()

  useEffect(() => {
    const getOrders = async () => {
      const url = `${import.meta.env.VITE_API_BASE_URL}/order/select_order_by_user_id?id=${userId}`

      try {
        const response = await axios.get(url)
        setOrders(response.data.data)
        console.log(response.data.data)
      } catch (error) {
        console.error('Error getting order: ', error)
      }
    }
    getOrders()
  }, [])

 
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <h1 className="text-3xl font-bold text-[#0B2B17] mb-6 text-center">My Orders</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <span className="text-sm text-gray-500">Amount Paid</span>
                <p className="text-lg font-semibold text-green-700">₦{order.amt_paid}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Status</span>
                <p
                  className={`text-lg font-semibold ${order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "pending"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                >
                  {order.status}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Billing Address</span>
                <p className="text-lg text-gray-700">{order.bill_address}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button 
                className="px-4 py-2 bg-[#0B2B17] text-white text-sm font-medium rounded-md shadow hover:bg-green-800 transition"
                onClick={() => {
                  navigate("details", {
                    state: {
                      order: order
                    },
                  })
                }}
              >
                Details
              </button>
              {order.status == "processing"
                ?
                <button
                  className="px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-md shadow hover:bg-green-800 transition"
                  onClick={() => {
                    navigate("pod", {
                      state: {
                        order: order
                      },
                    })
                  }}
                >
                  Proof of Delivery
                </button>
                :
                <div></div>
              } 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders