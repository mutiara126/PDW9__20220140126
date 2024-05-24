document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tanggalKunjungan = document.getElementById("tanggalKunjungan").value;
    var jamKedatangan = document.getElementById("jamKedatangan").value;
    var quantity = document.getElementById("quantity").value;
    var agree = document.getElementById("agree").checked;

    // Membuat pesan konfirmasi kustom dengan HTML
    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="name">Nama:</label>
                <input type="text" value="${name}" readonly />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="tanggalKunjungan">Tanggal Kunjungan:</label>
                <input type="text" value="${tanggalKunjungan}" readonly />
            </div>
            <div class="form-group">
                <label for="jamKedatangan">Jam Kedatangan:</label>
                <input type="text" value="${jamKedatangan}" readonly />
            </div>
            <div class="form-group">
                <label for="quantity">Jumlah Tiket:</label>
                <input type="text" value="${quantity}" readonly />
            </div>
            <div class="form-group">
                <label for="agree">Saya setuju dengan syarat dan ketentuan:</label>
                <input type="text" value="${agree ? 'Setuju' : 'Tidak setuju'}" readonly />
            </div>
        </div>`;

    // Menampilkan pesan konfirmasi menggunakan SweetAlert2
    Swal.fire({
        title: 'Konfirmasi Reservasi',
        html: alertHTML,
        icon: 'info',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Reservasi Berhasil:");
            console.log("Nama:", name);
            console.log("Email:", email);
            console.log("Tanggal Kunjungan:", tanggalKunjungan);
            console.log("Jam Kedatangan:", jamKedatangan);
            console.log("Jumlah Tiket:", quantity);
            console.log("Setuju dengan syarat dan ketentuan:", agree ? 'Ya' : 'Tidak');
        }
    });
});
