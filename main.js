
const linksSocialMedia = {

     github : "GCCDV",
     youtube : "UCr_XfBTqgDEHJRB_QOx4n3g",
     facebook : "gabriel.candido.33",
     instagram : "gabriel.carvalhocandido",
     twitter : "fsaveca"
}


function changeSocialAccount() {
    for(let li of socialLinks.children ) {
        const social = li.getAttribute("class")

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        
    }
  
}


function getGitHubProfileInfo() {
 
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        username.textContent = data.name
        if(data.bio !== null){
            userBio.textContent = data.bio
        }
        userLink.href= data.html_url
        
      if(data.avatar_url){
           userImage.src = data.avatar_url
      }
      
      userLogin.textContent = data.login

    })
  
}




changeSocialAccount()
getGitHubProfileInfo()



