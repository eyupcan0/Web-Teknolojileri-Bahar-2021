const ad = document.getElementById('ad')
const soyad = document.getElementById('soyad')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const basariElement = document.getElementById('basari')
var email = document.getElementById('email').value;
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
form.addEventListener('submit', (e) => {
    let messages = []
    if(ad.value ===  '' || ad.value == null){
        alert('Isim Gereklidir.')
    }
    if (soyad.value === '' || soyad.value == null){
        alert('Soyisim Gereklidir')
    }
    if (email.match(pattern)){
        basariElement.innerText = messages.join(', ')
    }
    else{
        alert('E-mail Bicimini Dogru Giriniz.')
    }
   
    

    
    if (messages.length > 0 )
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        
    }

})