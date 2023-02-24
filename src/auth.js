const findUserInSession = () =>{
    //sending get request to get user in the session
    fetch("http://localhost:4000/api/users/auth", {
        credentials: 'include',
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        mode: 'cors'
    })
    .then((res)=>{
        if(!res.ok){
            alert('Unauthorised, User is not logged in')
        }

        else{
            const getUser =  async() =>{
                const user = await res.json()
                return user
            }
            getUser()
        }
    })
}

module.exports = {
    findUserInSession
}