
const linksSocialMedia = {
    github: 'Rodrigueira97',
    youtube: 'UCGaYDZr6_uD0w6K3zJ4Z0hA',
    instagram: 'rodrigueiiira',
    twitter: 'rodrigoxc97',
    facebook: 'rodrigo.xavier.54738943',
}



function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const redeSocial = li.getAttribute('class')

        li.children[0].href = `https://www.${redeSocial}.com/${linksSocialMedia[redeSocial]}`
    }
}

changeSocialMediaLinks()


function getGitHubUserInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(perfil =>{
            // userName.textContent = perfil.name
            bioInfo.textContent = perfil.bio
            UserNamelogin.textContent = perfil.login
            Userlogin.href = perfil.html_url
            UserImage.src = perfil.avatar_url
        })
        
}

getGitHubUserInfos()

//01:09