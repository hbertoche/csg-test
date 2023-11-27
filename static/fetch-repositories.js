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
            data.data.forEach(repository => {
                repositoriesList.innerHTML += `<div class="repo-item">
                <h3 class="repo-name" onclick="toggleExtraInfo('${repository.name}')">${repository.name}</h3>
                <div id="${repository.name}" style="display:none">
                    <p><a href="${repository.html_url}" target="_blank">${repository.html_url}</a></p>
                    <p class="repo-language">Language: ${repository.language}</p>
                    <p class="repo-description">Description: ${repository.description}</p>
                </div>
            </div>`;
            });
            if (data.data.length === 0) {
                populateIsNewUserDiv('', '')
            }
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
    if (username === '' && action === '') {
        isNewUserDiv.innerHTML = `<p> ${username} owns no repositories</p>`;
        isNewUserDiv.className = 'empty-user';
    } else {
        isNewUserDiv.innerHTML = `<p> ${username} is being ${action}</p>`;
        isNewUserDiv.className = `${action}-user`
    }
}

function toggleExtraInfo(divId) {
    const extraInfoDiv = document.getElementById(divId);
    if (extraInfoDiv.style.display === 'none') {
        extraInfoDiv.style.display = 'block';
        return;
    }

    extraInfoDiv.style.display = 'none'
}