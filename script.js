// Fetch your previous repositories using GitHub API and display them.

// Replace 'JulianTandug' with your GitHub username
const GITHUB_USER = 'JulianTandug';
const repoListElem = document.getElementById('repo-list');

async function fetchRepos() {
    // Get repositories from GitHub API
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`);
    const repos = await response.json();
    return repos;
}

function makeRepoCard(repo) {
    return `
        <div class="repo">
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description ? repo.description : "No description available."}</p>
            <p>
                <strong>Language:</strong> ${repo.language} <br>
                ⭐ ${repo.stargazers_count}
            </p>
            <p><a href="${repo.html_url}" target="_blank">View on GitHub</a></p>
        </div>
    `;
}

async function displayRepos() {
    const repos = await fetchRepos();
    // Optionally filter/sort repos if desired
    repoListElem.innerHTML = repos.map(makeRepoCard).join('');
}

displayRepos();
