function fetchRepositories() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (!username) {
        alert('Please enter a GitHub username.');
        return;
    }

    fetch(`/repos/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const repositoriesList = document.getElementById('repositories-list');
            repositoriesList.innerHTML = '';
            data.data.forEach(repo => {
                repositoriesList.innerHTML += `<div class="repo-item">
                <h3 class="repo-name" onclick="toggleExtraInfo('${repo.name}')">${repo.name}</h3>
                <div id="${repo.name}" style="display:none">
                    <p><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
                    <p class="repo-language">Language: ${repo.language}</p>
                    <p class="repo-description">Description: ${repo.description}</p>
                </div>
            </div>`;
            });
            if (data.isNewUser) {
                populateIsNewUserDiv(username, 'created');
            } else {
                populateIsNewUserDiv(username, 'updated');
            }
        })
        .catch(error => {
            document.getElementById('repositories-list').innerHTML = '';
            console.error('Error fetching data:', error);
        });
}

function populateIsNewUserDiv(username, action) {
    const isNewUserDiv = document.getElementById("is-new-user");
    isNewUserDiv.innerHTML = `<p> ${username} is being ${action}`;
    isNewUserDiv.className = `${action}-user`
}

function toggleExtraInfo(divId) {
    const extraInfoDiv = document.getElementById(divId);
    if (extraInfoDiv.style.display === 'none') {
        extraInfoDiv.style.display = 'block';
        return;
    }

    extraInfoDiv.style.display = 'none'
}