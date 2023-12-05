// Logika halaman futsal
function submit() {
  let kebutuhanValue = document.querySelector('#select_kebutuhan').value;
  let selectValue = document.querySelector('#select_lokasi').value;
  let namaValue = document.querySelector('#form_nama').value;
  alert('Hai ' + namaValue + ' !' + ' Kami akan segera mencari permintaan anda.');
  if (kebutuhanValue === 'carilapangan' && selectValue === 'bekasi') {
    window.location.assign('carilapanganbekasibasket.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'jakarta') {
    window.location.assign('carilapanganjakartabasket.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'bandung') {
    window.location.assign('carilapanganbandungbasket.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bekasi') {
    window.location.assign('caritemanbekasibasket.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'jakarta') {
    window.location.assign('caritemanjakartabasket.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bandung') {
    window.location.assign('caritemanbandungbasket.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bekasi') {
    window.location.assign('cariklubbekasibasket.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'jakarta') {
    window.location.assign('cariklubjakartabasket.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bandung') {
    window.location.assign('cariklubbandungbasket.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'bekasi') {
    window.location.assign('carialatorbekasibasket.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'jakarta') {
    window.location.assign('carialatorjakartabasket.html');
  } else {
    window.location.assign('carialatorbandungbasket.html');
  }
}
