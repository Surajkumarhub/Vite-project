import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

    const { id } = useParams();

    const allPastes = useSelector((state) => state.paste.pastes);

    const paste = allPastes.find((p) => p._id === id);

    // If paste is not found, you should handle this case
    if (!paste) {
        return <div>Paste not found.</div>;
    }

    return (
        <div>
            <div className="flex flex-row gap-7">
                <input
                    className='p-2 rounded-2xl mt-2 w-[66%] pl-4'
                    type='text'
                    placeholder='enter title here'
                    value={paste.title}
                    disabled // Add disabled to prevent editing
                />
            </div>
            <div>
                <textarea
                    className="rounded-2xl mt-4, min-w-[500px] p-4"
                    value={paste.content}
                    placeholder="enter content here"
                    disabled
                    rows={20}
                />
            </div>
        </div>
    );
};

export default ViewPaste;