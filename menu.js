// Package selection
        const packageOptions = document.querySelectorAll('.package-option');
        let selectedPackage = null;

        packageOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                packageOptions.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
                selectedPackage = option.dataset.package;
            });
        });

// Form validation
const form = document.getElementById('registrationForm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate package selection
    if (!selectedPackage) {
        alert('Silakan pilih paket layanan');
        isValid = false;
        return;
    }

    // Validate name
    const name = document.getElementById('fullName');
    if (!name.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate phone
    const phone = document.getElementById('phone');
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone.value)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Validate address
    const address = document.getElementById('address');
    if (!address.value.trim()) {
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('addressError').style.display = 'none';
    }

    // Validate schedule
    const schedule = document.getElementById('schedule');
    if (!schedule.value) {
        alert('Silakan pilih jadwal kunjungan');
        isValid = false;
        return;
    }

    // Validate terms
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        alert('Anda harus menyetujui syarat dan ketentuan');
        isValid = false;
        return;
    }
});