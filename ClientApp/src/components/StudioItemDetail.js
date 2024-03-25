import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const StudioItemDetail = () => {
    const { id } = useParams();
    const [studioItem, setStudioItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const populateStudioItem = async (itemId) => {
            try {
                const response = await fetch(`https://localhost:5001/peoplespartnership/api/studioitem/${itemId}`);
                const data = await response.json();
                setStudioItem(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching studio item:', error);
                setLoading(false);
            }
        };

        populateStudioItem(id);
    }, [id]);

    const renderStudioItemDetail = (studioItem) => {
        return (
            <div>
                <h2>{studioItem.name}</h2>
                <p>Description: {studioItem.description}</p>
                <p>Acquired: {studioItem.acquired}</p>
                <p>Sold: {studioItem.sold}</p>
            </div>
        );
    };

    return (
        <div>
            <h1>Studio Item Detail</h1>
            {loading ? <p><em>Loading...</em></p> : renderStudioItemDetail(studioItem)}
        </div>
    );
};

export default StudioItemDetail;
