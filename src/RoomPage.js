import React from "react";
import { useParams, Link } from "react-router-dom";

function RoomPage({ chores, user, toggleChore }) {
	const { roomName } = useParams();
	const roomChores = chores.filter((chore) => chore.room === roomName);

	return (
		<div className="room-page">
			<h2>{roomName}</h2>
			<Link to="/">Back to Rooms</Link>
			<ul>
				{roomChores.map((chore) => (
					<li key={chore.id} className={chore.completed ? "completed" : ""}>
						{chore.name} - Assigned to: {chore.assignedTo}
						{chore.assignedTo === user.username ? (
							<input type="checkbox" checked={chore.completed} onChange={() => toggleChore(chore.id)} />
						) : (
							<span className={chore.completed ? "green-check" : "red-x"}>{chore.completed ? "✓" : "✗"}</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default RoomPage;
