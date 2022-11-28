import React, { useState } from "react";
import Data from "./MOCK_DATA.json";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className="list">
			<input
				type="text"
				onChange={handleChange}
				className="input-bar"
				placeholder="Search Name... "
			/>
			{Data.filter((el) => {
				if (searchValue === "") return el;
				else if (
					el.first_name.toLowerCase().includes(searchValue.toLowerCase())
				)
					return el;
			}).map((el, index) => {
				return (
					<div className="first-name" key={index}>
						{el.first_name}
					</div>
				);
			})}
		</div>
	);
};

export default App;
