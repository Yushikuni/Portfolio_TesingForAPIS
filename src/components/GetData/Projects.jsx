// src/hooks/useGithubRepos.js
import { useState, useEffect } from 'react';

const useGithubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // url = f"https://api.github.com/search/repositories?q={topics_query}+user:{username}"
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
};

export default useGithubRepos;
