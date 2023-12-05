// Logika halaman futsal
function submit() {
  let kebutuhanValue = document.querySelector('#select_kebutuhan').value;
  let selectValue = document.querySelector('#select_lokasi').value;
  let namaValue = document.querySelector('#form_nama').value;
  alert('Hai ' + namaValue + ' !' + ' Kami akan segera mencari permintaan anda.');
  if (kebutuhanValue === 'carilapangan' && selectValue === 'bekasi') {
    window.location.assign('carilapanganbekasi.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'jakarta') {
    window.location.assign('carilapanganjakarta.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'bandung') {
    window.location.assign('carilapanganbandung.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bekasi') {
    window.location.assign('caritemanbekasi.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'jakarta') {
    window.location.assign('caritemanjakarta.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bandung') {
    window.location.assign('caritemanbandung.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bekasi') {
    window.location.assign('cariklubbekasi.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'jakarta') {
    window.location.assign('cariklubjakarta.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bandung') {
    window.location.assign('cariklubbandung.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'bekasi') {
    window.location.assign('carialatorbekasi.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'jakarta') {
    window.location.assign('carialatorjakarta.html');
  } else {
    window.location.assign('carialatorbandung.html');
  }
}
