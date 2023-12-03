document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll(".order-btn");
    const itemInput = document.getElementById("item");
    const paymentForm = document.getElementById("payment-form");
    const queueNumber = document.getElementById("queue-number");
    const orderList = document.getElementById("order-list");
    const totalAmountSpan = document.getElementById("total-amount");
    const checkoutButton = document.getElementById("checkout-button");


    const order = [];
    addToOrderButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.getAttribute("data-item");
            const price = parseFloat(this.getAttribute("data-price"));

            // Tambahkan minuman ke daftar pesanan
            order.push({ item, price });

            // Perbarui tampilan daftar pesanan dan total pembayaran
            displayOrder();
        });
    });
    
    checkoutButton.addEventListener("click", function() {
        // Redirect ke halaman pembayaran (gantilah URL berikut dengan URL halaman pembayaran Anda)
        window.location.href = "URL_HALAMAN_PEMBAYARAN";
    });

    function displayOrder() {
        orderList.innerHTML = "";
        let totalAmount = 0;

        order.forEach(orderItem => {
            const listItem = document.createElement("li");
            listItem.textContent = `${orderItem.item} - Rp${orderItem.price}`;
            orderList.appendChild(listItem);
            totalAmount += orderItem.price;
        });

        totalAmountSpan.textContent = `Rp${totalAmount}`;
    }
});

    let currentQueueNumber = 1;

    orderButtons.forEach(button => {
        button.addEventListener("click", function() {
            itemInput.value = this.getAttribute("data-item");
        });
    });

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Simulasi pembayaran
        const amount = parseFloat(document.getElementById("amount").value);
        if (isNaN(amount) || amount <= 0) {
            alert("Jumlah pembayaran tidak valid.");
            return;
        }

        // Menampilkan nomor antrian berurutan
        queueNumber.textContent = currentQueueNumber;
        currentQueueNumber++;
    });