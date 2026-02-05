function togglePassword(){
    console.log('clicou no icone')

    const inputPassword = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')

    if (inputPassword.type === 'password'){
        inputPassword.type = 'text'
        eyeIcon.classList.remove('bi-eye')
        eyeIcon.classList.add('bi-eye-slash')
    } else{
        inputPassword.type = 'text'
        inputPassword.type = 'password'
        eyeIcon.classList.add('bi-eye')
        eyeIcon.classList.remove('bi-eye-slash')

    }

}