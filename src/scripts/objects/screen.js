const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                                <h1>
                                ${user.name ?? 'Não possui nome cadastrado 😢'}
                                </h1>
                                <p>
                                ${user.bio ?? 'Não possui bio cadastrada 😢'}
                                </p>
                                <p>
                                👥 Seguidores: ${user.followers}
                                </p>
                                <p>
                                👤 Seguindo ${user.following}
                                </p>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank"><h3>${repo.name}</h3> 
                                        <div class="icons-repositories">
                                            <p>
                                            🍴 ${repo.forks}
                                            </p>
                                            <p>
                                            ⭐ ${repo.stargazers_count}                                   
                                            </p>
                                            <p>
                                            👀 ${repo.watchers}
                                            </p>
                                            <p>
                                            👩‍💻0 ${repo.language}
                                            </p>
                                        </div>
                                      </a>
                                  </li>`

        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                             <h2>Repositorios</h2>
                                             <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        let eventsItens = ''
        user.events.forEach(eventsList => {
            if (eventsList.type === 'PushEvent' || eventsList.type === 'CreatedEvent') {
                eventsList.payload.commits.forEach(commit => eventsItens += `<li><h3>${eventsList.repo.name}</h3><p>- ${commit.message}</p></li>`)
            }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                           </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = 'usuario não encontrado'
    }
}

export { screen }