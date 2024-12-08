// src/hooks/useGithubRepos.js
import { useState, useEffect } from 'react';

const useGithubRepos = (username, topics) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true); // Resetuje stav p�i nov�m fetchi
            setError(null);  // Resetuje p��padn� p�edchoz� chyby
            try {
                const token = import.meta.env.VITE_GITHUB_TOKEN;

                const topicsQuery = topics?.join("+") || "";
                const url = `https://api.github.com/search/repositories?q=${topicsQuery}+user:${username}`;

                const response = await fetch(url, {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    console.log("API response:", data.items);
                    setRepos(Array.isArray(data.items) ? data.items : []);
                } else {
                    console.log("API error response:", data);
                    throw new Error(data.message || "Failed to fetch repositories");
                }
            } catch (err) {
                setError(err.message || "Unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username, topics]);

    return { repos, loading, error };
};

export default useGithubRepos;
