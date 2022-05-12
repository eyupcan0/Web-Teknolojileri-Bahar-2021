const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const basariElement = document.getElementById('basari');
const email = document.getElementById('email');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
form.addEventListener('submit', (e) => {
    let messages = []
    if(ad.value ===  '' || ad.value == null){
        alert('Isim Gereklidir.')
    }
    if (soyad.value === '' || soyad.value == null){
        alert('Soyisim Gereklidir')
    }
   
    if(email.value === ''|| email.value == null )
    {
        alert('Lütfen emailinizi giriniz.');
    }
    let emailKontrol = email.includes("@");

    if(emailKontrol == false){
        alert("Lütfen mailinizi doğru formda giriniz. '@' yazmayı unutmayınız.");
    
    }
    
    if (messages.length > 0 )
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        
    }

})