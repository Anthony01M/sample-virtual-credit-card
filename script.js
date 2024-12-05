document.getElementById('input-card-number').addEventListener('input', function() {
    let cardNumber = this.value.replace(/\s+/g, '');
    let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    document.getElementById('card-number').textContent = formattedCardNumber;
    document.getElementById('card-number').classList.remove('visa', 'mastercard', 'amex');
});

document.getElementById('input-card-holder').addEventListener('input', function() {
    document.getElementById('card-holder').textContent = this.value;
});

document.getElementById('input-card-expiry').addEventListener('input', function() {
    let expiry = this.value.replace(/[^0-9]/g, '');
    if (expiry.length > 2) {
        expiry = expiry.slice(0, 2) + '/' + expiry.slice(2, 4);
    }
    document.getElementById('card-expiry').textContent = expiry;
});

document.getElementById('download-card').addEventListener('click', function() {
    html2canvas(document.querySelector('.credit-card')).then(canvas => {
        let link = document.createElement('a');
        link.download = 'credit-card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});