//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/3t0GmIj'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});


const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
        
       
        
var win= window.open(`https://wa.me/54${numero}?text=Hola soy lhuis y esta es mi%20Tarjeta%20Web:%0Ahttps://bit.ly/3t0GmIj`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)


// copi
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 3000);
}


//Modal 
function modal_01() {
    Swal.fire({
        title: 'Scan me',
        text: 'https://bit.ly/3t0GmIj',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1667762955/ABAUT/mayra%20myc/qr-code_9_upzjvf.png',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'#fff',
    })
 }
 function modal_02() {
    Swal.fire({
        title: 'Qr de pago',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665859871/ABAUT/qr_pago_lhuis_t8bqzz.jpg',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
    })
 }
 function modal_03() {
    Swal.fire({
        title: 'Qr copi cbu',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665869889/ABAUT/qr-code_1_of4wjn.png',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
    })
 }
 function modal_04() {
    Swal.fire({
        title: 'Qr copi Alias',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665924172/ABAUT/qr-code_2_gsbhik.png',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        
    })
 }
 function modal_05() {
    Swal.fire({
        html: '<div>'+
        '<img class = "img-misfotos" src="img/perfil.jpg" alt="">'+
    '</div>',
       //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'linear-gradient(#000,#000)',
        
        
    })
 }
 