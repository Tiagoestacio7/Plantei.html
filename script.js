function togglePassword(){
    console.log('clicou no icone')

    const inputPassword = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')

    // Utilização de if/else
    /*if (inputPassword.type === 'password'){
        inputPassword.type = 'text'
        eyeIcon.classList.remove('bi-eye')
        eyeIcon.classList.add('bi-eye-slash')
    } else{
        inputPassword.type = 'text'
        inputPassword.type = 'password'
        eyeIcon.classList.add('bi-eye')
        eyeIcon.classList.remove('bi-eye-slash')
    }*/

    // Utilização com ternário
    const isPassword = inputPassword.type === 'password';
    
    inputPassword.type = isPassword ? 'text' : 'password'
    eyeIcon.classList.remove(isPassword ? 'bi-eye' : 'bi-eye-slash')
    eyeIcon.classList.add(isPassword ? 'bi-eye-slash' : 'bi-eye')    
 

}