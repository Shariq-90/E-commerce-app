import React ,{ useState }from "react";
import { View, Text, Button,TouchableOpacity  } from "react-native";

const Orders = [
	{
		id: 1,
		name: "JBL handsfree",
		price: 2500,
	},
	{
		id: 2,
		name: "Silicone cover",
		price: 450,
		
	}
];

const OrderList = () => {
	const [orders, setOrders] = useState(Orders);
	return (
		<div>
			<h1 style={{color:"blue"}}>Orders</h1>
			<Text>
				{orders.map((order) => (
					<TouchableOpacity
						id={order.id}>
						<Text>{order.name}</Text>
						<Text>{order.price}</Text>
					</TouchableOpacity>
				))}
			</Text>
		</div>
	);
};

export default OrderList;
