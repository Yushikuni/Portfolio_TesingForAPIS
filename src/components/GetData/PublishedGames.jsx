import { useState, useEffect } from 'react';

const useItchioGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://itch.io/api/1/${import.meta.env.VITE_ITCHIO_API_KEY}/my-games`,
                    {
                        mode: 'no-cors'
                    });
                if (!response.ok) {
                    console.error('Response:', response);
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
                setGames(data.games || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    return { games, loading, error }; 
};

export default useItchioGames;
