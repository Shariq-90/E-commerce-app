import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Products = [
	{
		id: 1,
		p_name: "Silicone Cover",
		price: 450
	},
	{
		id: 2,
		p_name: "JBL handsfree",
		price: 2500
	},
];

const ProductList = () => {
	const [products, setProducts] = useState(Products);
	return (
		<View>
			<Text style={{color:"blue"}}>Products</Text>
			<Text>
				{products.map((product) => (
					<TouchableOpacity
						key={product.id}>
						<Text>{product.p_name}</Text>
						<Text>{product.price}</Text>
					</TouchableOpacity>
				))}
			</Text>
		</View>
	);
};

export default ProductList;
