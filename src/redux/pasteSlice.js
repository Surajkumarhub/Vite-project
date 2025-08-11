import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem("pastes"))
        : []
};

const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            const newPaste = action.payload;

            // Check if a paste with the same title already exists
            const pasteExists = state.pastes.some(paste => paste.title === newPaste.title);
            if (pasteExists) {
                toast.error("A paste with this title already exists. Please choose a different title.");
                return; // Exit the reducer without adding the paste
            }

            state.pastes.push(newPaste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste created successfully!");
        },
        updateToPastes: (state, action) => {
            const updatedPaste = action.payload;
            const index = state.pastes.findIndex((item) => item.id === updatedPaste.id);

            if (index !== -1) {
                state.pastes[index] = updatedPaste;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste updated successfully!");
            }
        },
        resetAllPastes: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
            toast("All pastes have been reset.");
        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;
            const index = state.pastes.findIndex((item) => item._id === pasteId);

            if (index !== -1) {
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste deleted successfully!");
            }
        },
    },
});

export const {
    addToPastes,
    updateToPastes,
    resetAllPastes,
    removeFromPastes
} = pasteSlice.actions;

export default pasteSlice.reducer;