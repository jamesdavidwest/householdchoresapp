import React from "react";

function Chore({ chore, toggleChore, userRole }) {
	const handleToggle = () => {
		if (userRole === "admin" || userRole === "user") {
			toggleChore(chore.id);
		}
	};

	return (
		<div className={`chore ${chore.completed ? "completed" : ""}`}>
			<input type="checkbox" checked={chore.completed} onChange={handleToggle} disabled={userRole === "guest"} />
			<span className="chore-name">{chore.name}</span>
			<span className="chore-frequency">({chore.frequency})</span>
			{userRole === "admin" && <button onClick={() => console.log("Edit chore")}>Edit</button>}
		</div>
	);
}

export default Chore;
