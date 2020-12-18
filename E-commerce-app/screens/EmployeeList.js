import React ,{ useState }from "react";
import { View, Text, Button,TouchableOpacity  } from "react-native";
const Employees = [
	{
		id:1,
		name: "Shariq ahmed",
		job: "Virtual assistant",
	},
	{
		id: 2,
		name: "Waleed butt",
		job: "AI specialist"
	},
	{
		id: 3,
		name: "Talha ijaz",
		job: "Jobless",
	},
];

const EmployeeList = () => {
	const [employees, setEmployees] = useState(Employees);
	return (
		<div>
			<h1 style={{color:"blue"}}>Employees</h1>
			<Text>
				{employees.map((employee) => (
					<TouchableOpacity
           key={employee.id}>
					 {" "}
					 <Text>{employee.name}</Text>
					 {" "}
					 <Text>{employee.job}</Text>
					 {" "}
					</TouchableOpacity>
				))}
			</Text>
		</div>
	);
};

export default EmployeeList;
