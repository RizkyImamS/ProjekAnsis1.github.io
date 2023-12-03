// Inisialisasi Stripe dengan API Key
const stripe = Stripe('YOUR_STRIPE_API_KEY');
const elements = stripe.elements();

// Buat elemen kartu Stripe
const card = elements.create('card');

// Masukkan elemen kartu Stripe ke dalam form
card.mount('#card-element');

// Tangani pengiriman formulir
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Kirim data kartu ke Stripe
    const { token, error } = await stripe.createToken(card);

    if (error) {
        // Penanganan kesalahan
        console.error(error);
    } else {
        // Kirim token ke server Anda atau langsung ke penyedia pembayaran
        // Misalnya, Anda bisa menggunakan fetch untuk mengirim token ke server
        // fetch('/process-payment', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ token: token.id })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // });
    }
});