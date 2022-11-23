var obj = [
    {
        username:"kaleem",
        password:"demo"
    },
    {
        username:"usama",
        password:"hello"
    }
]

function getinfo(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i=0 ; i<obj.length ; i++){
        if(username == obj[i].username && password == obj[i].password){
        document.write(username + " is logged in Sucessfully ")
        return
        }
    }
    window.alert("Incorrect username or password!!! ")
}