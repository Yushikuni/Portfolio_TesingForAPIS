// ItchioData.jsx
import React, { useEffect, useState } from 'react';

const ItchioData = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Funkce na naètení dat
        const fetchData = async () => {
            try {
                const response = await fetch(`https://itch.io/api/1/${process.env.REACT_APP_ITCHIO_API_KEY}/my-games`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setGames(data.games); // 'games' je název pole z itch.io API (zkontroluj jejich dokumentaci)
            } catch (error) {
                console.error('Error fetching data from itch.io API:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>My Games on Itch.io</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <h3>{game.title}</h3>
                        <p>{game.short_text}</p>
                        <a href={game.url} target="_blank" rel="noopener noreferrer">Play Now</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItchioData;