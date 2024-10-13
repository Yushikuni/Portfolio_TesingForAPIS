import { useState, useEffect } from 'react';

const GetRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch data from GitHub API
        fetch('https://api.github.com/users/Yushikuni/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.log(error));
    }, []); // Empty array means it runs only once when the component is mounted

    return (
        <div>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetRepos;