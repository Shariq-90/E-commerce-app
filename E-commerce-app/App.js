import * as React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "./screens/ProductList";
import EmployeeList from "./screens/EmployeeList";
import OrderList from "./screens/OrderList";

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Click any button to move on the next screen</Text>
      <Text> </Text>
			<Button 
      style={{width:30,margin:"auto,"}}
				title="Products"
				onPress={() => navigation.navigate("Products")}
			/>
      <Text> </Text>
			<Button 
      style={{width:30,margin:"auto,"}}
				title="Employees"
				onPress={() => navigation.navigate("Employees")}
			/>
      <Text> </Text>
			<Button
      style={{width:30,margin:"auto,"}}
				title="Orders"
				onPress={() => navigation.navigate("Orders")}
			/>
      <Text> </Text>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "blue",
					},
					headerTintColor: "#ffffff",
				}}
			>
				<Stack.Screen name="Home Screen" component={HomeScreen} />
				<Stack.Screen
					options={{ title: "Products" }}
					name="Products"
					component={ProductList}
				/>
				<Stack.Screen
					options={{ title: "Employees" }}
					name="Employees"
					component={EmployeeList}
				/>
				<Stack.Screen
					options={{ title: "Orders" }}
					name="Orders"
					component={OrderList}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
