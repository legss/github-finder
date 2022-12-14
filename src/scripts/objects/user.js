const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    userName: '',
    repositories: [],
    events: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
    },

    setRepositories(gitHubRepositories) {
        this.repositories = gitHubRepositories
    },

    setEvents(githubEvents) {
        this.events = githubEvents
    }

}


export { user }