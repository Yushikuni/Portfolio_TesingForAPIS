import { useState, useEffect } from 'react';

const useItchioGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://itch.io/api/1/${process.env.REACT_APP_ITCHIO_API_KEY}/my-games`);
                if (!response.ok) {
                    console.error('Response:', response); // Debug
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
                setGames(data.games || []);
            } catch (err) {
                console.error('Error:', err); // Debug
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Závislosti prázdné -> zavolá se pouze jednou pøi montování

    return { games, loading, error }; // Vrátí stav
};

export default useItchioGames;
