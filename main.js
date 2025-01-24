const qrCode = document.querySelector('.qrCode')
const qrCodeName = document.querySelector('.qrCodeName')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    if (qrCodeName.value == '') {
        alert('iltimos link yoki text kiriting')
    } else {
        let qrcode = new QRCode(qrCode,{
            text: qrCodeName.value,
            width: 180,
            height: 180,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        })
    }
})