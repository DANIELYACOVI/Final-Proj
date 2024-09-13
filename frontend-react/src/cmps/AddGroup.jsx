import { useState } from "react";
import { useSelector } from "react-redux";
import { updateBoard } from "../store/actions/board.actions.js";

export function AddGroup({ onCancel }) {
    const [groupTitle, setGroupTitle] = useState("");
    const board = useSelector(storeState => storeState.boardModule.board)

    async function addGroup() {
        const { groups } = board

        const updatedGroup = {
            id: Date.now(),
            title: groupTitle,
            tasks: [],
        }
        const updatedBoard = {
            ...board,
            groups: [...groups, updatedGroup]
        }
        updateBoard(updatedBoard)
<<<<<<< HEAD:PlanIt/src/cmps/AddGroup.jsx

=======
>>>>>>> 0ddd1e1769f92a2227540e4f48dc20bdb8d1f832:frontend-react/src/cmps/AddGroup.jsx
        setGroupTitle("")
    }

    return (
        <section className="add-group">
            <input className="group-input"
                type="text"
                value={groupTitle}
                onChange={(e) => setGroupTitle(e.target.value)}
<<<<<<< HEAD:PlanIt/src/cmps/AddGroup.jsx
                placeholder="Enter list title"/>
            <button onClick={() => addGroup()}>Add List</button>
            <button onClick={() => onCancel()}>X</button>
=======
                placeholder="Enter list name..."
            />
            <button className="add-new-group" onClick={() => addGroup()}>Add List</button>
            <button className="cancel-add-group" onClick={() => onCancel()}>X</button>
>>>>>>> 0ddd1e1769f92a2227540e4f48dc20bdb8d1f832:frontend-react/src/cmps/AddGroup.jsx
        </section>
    );
}


