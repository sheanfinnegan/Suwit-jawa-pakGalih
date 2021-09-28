//ambil pilihan comp
$(document).ready(function () {
    let namaOrang = true;


    while (namaOrang) {
        nama = prompt('Masukkan Nama Player');
        if (nama <= 0 || nama >= 0) {
            alert('Anda Memasukkan Nama yang Salah');
        } else {
            namaOrang = confirm('Mau Ganti Nama?')
        }
    }

    alert('Selamat datang ' + nama + ' digame Suwit Jawa')
    alert('RULES!!!' + '\n- Setiap gamenya kamu memiliki 10 kesempatan bermain' + '\n- Setelah 10 kali kesempatan, akan diberikan hasil scoremu' + '\n- Lalu, hasil akan direset')
    alert('Selamat Bermain!!')

    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').fadeOut(700)
        }, 800)
    });


    function getComp() {
        const comp = Math.random();
        if (comp < 0.34) return 'gajah';
        if (comp >= 0.34 && comp < 0.67) return 'orang';
        return 'semut'
    }

    //rules
    function getHasil(comp, player) {
        if (player == comp) return 'SERI!!';
        if (player == 'gajah') return (comp == 'orang') ? 'MENANG!!' : 'KALAH!!';
        if (player == 'orang') return (comp == 'semut') ? 'MENANG!!' : 'KALAH!!';
        if (player == 'semut') return (comp == 'gajah') ? 'MENANG!!' : 'KALAH!!';
    }



    let arrMenang = [];
    let arrKalah = [];
    let arrSeri = [];
    const isiHasil = document.getElementsByClassName('isi')[0];
    const pImg = document.querySelectorAll('.gambar1 img')
    pImg.forEach(function (e) {
        e.addEventListener('click', function () {
            const pilihanComputer = getComp();
            const pilihanPlayer = e.className;
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            const imgComputer = document.querySelector('.container img')
            imgComputer.setAttribute('src', 'pic-3/' + pilihanComputer + '.png')
            isiHasil.innerHTML = hasil;
            if (isiHasil.textContent == 'MENANG!!') {
                arrMenang.push("m");
            } else if (isiHasil.textContent == 'KALAH!!') {
                arrKalah.push("k");
            } else if (isiHasil.textContent == 'SERI!!') {
                arrSeri.push("s");
            }

            function kamuApa() {
                if (arrMenang.length > arrKalah.length) return 'Kamu Jago!!';
                if (arrMenang.length < arrKalah.length) return 'Kamu Cupu!! Coba Lagi'
                if (arrMenang.length == arrKalah.length) return 'Kamu Beruntung!!'
            }

            if (arrMenang.length + arrSeri.length + arrKalah.length == 10) {
                alert('Score Kamu' + '\nMenang: ' + arrMenang.length + ', Kalah: ' + arrKalah.length + ', Seri: ' + arrSeri.length + '\n' + nama + ', ' + kamuApa())
                arrMenang = [];
                arrSeri = [];
                arrKalah = [];
                isiHasil.textContent = 'HASIL'
            }

        })
    })
});












// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getComp();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.container img')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const isiHasil = document.getElementsByClassName('isi')[0];
//     isiHasil.innerHTML = hasil;
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getComp();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.container img')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const isiHasil = document.getElementsByClassName('isi')[0];
//     isiHasil.innerHTML = hasil;
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getComp();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.container img')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const isiHasil = document.getElementsByClassName('isi')[0];
//     isiHasil.innerHTML = hasil;
// })