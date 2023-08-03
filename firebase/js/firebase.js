const firebaseConfig = {
    apiKey: "AIzaSyB4VAw6NZux9C5_sdPJ0AwZWrID782ipSg",
    authDomain: "felipe-mapa-dsm.firebaseapp.com",
    databaseURL: "https://felipe-mapa-dsm-default-rtdb.firebaseio.com",
    projectId: "felipe-mapa-dsm",
    storageBucket: "felipe-mapa-dsm.appspot.com",
    messagingSenderId: "761149645188",
    appId: "1:761149645188:web:7be196aed56c220da73dd1"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const urlApp = 'http://127.0.0.1:5500'

function loginGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        window.location.href = `${urlApp}/home.html`
    }).catch((error) =>{
        alert(`Erro ao efetuar o login ${error.message}`)
    })
}

function verificaLogado(){
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            //É salvo o id do user localmente
            localStorage.setItem('usuarioId', user.uid)
        } else{
            console.error('Usuário não logado!')
            window.location.href = `${urlApp}/`
        }
    })
}