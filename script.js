//ambil pilihan comp
$(document).ready(function () {

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

    const pImg = document.querySelectorAll('.gambar1 img')
    pImg.forEach(function (e) {
        e.addEventListener('click', function () {
            const pilihanComputer = getComp();
            const pilihanPlayer = e.className;
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            const imgComputer = document.querySelector('.container img')
            imgComputer.setAttribute('src', 'pic-3/' + pilihanComputer + '.png')
            const isiHasil = document.getElementsByClassName('isi')[0];
            isiHasil.innerHTML = hasil;
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