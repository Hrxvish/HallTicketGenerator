document.getElementById('ticketForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const subject = document.getElementById('subject').value;

    // Show ticket details
    document.getElementById('ticketName').textContent = name;
    document.getElementById('ticketRoll').textContent = roll;
    document.getElementById('ticketSubject').textContent = subject;
    document.getElementById('ticket').style.display = 'block';

    // Generate QR code with form data
    const qrData = `Name: ${name}, Roll: ${roll}, Subject: ${subject}`;
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '';  // Clear any existing QR code
    const qrCode = new QRCode(qrCodeContainer, {
        text: qrData,
        width: 128,
        height: 128,
    });

    // Add download functionality
    document.getElementById('downloadBtn').addEventListener('click', function () {
        html2canvas(document.getElementById('ticket')).then(function (canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'hall_ticket.png';
            link.click();
        });
    });
});
