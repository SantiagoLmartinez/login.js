// console.log('connected to html')
// const 
const _formRegistro = document.getElementById('formRegistro')
const _usersContainer = document.getElementById('usersContainer')
const _btnUsersBoard = document.getElementById('btnUsersBoard')
let usersDB = []

// Regular Expr 
const expReg = new RegExp("@", "")
const validarEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

// EventListener
_formRegistro.addEventListener('submit', e =>{
    e.preventDefault()
    const data = new FormData(_formRegistro)
    const [user,pass] = [...data.values()]
    
    if(user.length === 0 || pass.length === 0){
        document.querySelector('.alert-danger').classList.remove('d-none')
        return
    }else{
        document.querySelector('.alert-danger').classList.add('d-none')
        createUser(user, pass)
    }

    if(!user.trim() || !pass.trim()){
        alert('texto vacio')
        return
    }

    // usersDB.push(userObject)
    console.log('db-users :', usersDB)
})

// btn
_btnUsersBoard.addEventListener('click', (e) =>{
    e.preventDefault()
    printUsers()
})


// FUNCTIONS
const createUser = (user,pass) => {
    // valida que tenga @
    // const expReg = new RegExp("@", "")
    if(user === ''){
        console.warn('usuario o contraseña vacio')
        return
    }

    // if(expReg.test(user) === false  ){
    //     alertEmail()
    //     return
    // }
    if(validarEmail.test(user) === false){
            alertEmail()
        return
    }

    userObject = new User(user,pass)
        usersDB.push(userObject)

    // console.log('+1')

}

const addUserToDB = (user,pass) => {
    userObject = new User(user,pass)
    console.log('+1')

}
function printUsers() {
    _usersContainer.innerHTML = " "
    // for(let i = 0; i < usersDB.length; i++){
    
        if(usersDB.length === 0 ){
            _usersContainer.innerHTML += `<p class="alert alert-danger  my-2 w-50">No hay usuarios registrados </p>` 
        }else{
            _usersContainer.innerHTML += '<h2>Users </h2>'

            for(let i = 0; i < usersDB.length; i++){
            
            _usersContainer.innerHTML += `<p class="alert alert-primary my-2 w-50">User :${usersDB[i].username} ||| Pass :${usersDB[i].password} </p>` 
        }
        
    }
    // _usersContainer.innerHTML = " <p>print users</p>"
    
}
const alertEmail =() => { 
    const alertEmail = document.querySelector('.alertEmail')
    alertEmail.classList.remove('d-none')   

setTimeout( 
    function(){
        alertEmail.classList.add('d-none')
    },3000)
}

class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

console.log('la db esta en :',usersDB)
