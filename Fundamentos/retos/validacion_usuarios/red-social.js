const userDataBase = [
    {
        username:"andres",
        password:"123"
    },
    {
        username:"gabriel",
        password:"abc"
    },
    {
        username:"sandra",
        password:"qwerty"
    },
    {
        username:"tomas",
        password:"zxcv"
    },
]

const usersTimeLine =[
    {
        username:"andres",
        timeline:"comentario aleatorio de andres"
    },
    {
        username:"gabriel",
        timeline:"comentario aleatorio de gabriel"
    },
    {
        username:"sandra",
        timeline:"comentario aleatorio de sandra"
    },
    {
        username:"tomas",
        timeline:"comentario aleatorio de tomas"
    },
]

const username = prompt("cual es tu usuario?")
const password = prompt("cual es tu password?")

function validarUsuario(username, password)
{   
    const copyUsername= username.toLocaleLowerCase()
    const copyPassword = password.toLocaleLowerCase()
    const resp = userDataBase.find(user => {
        return (copyUsername === user.username.toLocaleLowerCase() && copyPassword=== user.password.toLocaleLowerCase()) ? true : false
    })
    return resp
}

function userTimeLine(username, usersTimeLine){
    const copyUsername = username.toLocaleLowerCase()

    const resp = usersTimeLine.find( timeline => {
        if(copyUsername === timeline.username.toLocaleLowerCase()){
         console.log(timeline.timeline)
         return `{timeline.timeline}`
        }else{
         console.log("No se encuentra time line")
         return false
        }
    })
    return resp
}

function sigIn(username, password){
    if(validarUsuario(username,password)) {
        alert(`usuario: ${username} es valido`)
        const respTimeline = userTimeLine(username,usersTimeLine)
        console.log(respTimeline.timeline)
    }else{
        alert(`usuario: ${username} no es valido`)
    }
}