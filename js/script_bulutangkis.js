// Logika halaman futsal
function submit() {
  let kebutuhanValue = document.querySelector('#select_kebutuhan').value;
  let selectValue = document.querySelector('#select_lokasi').value;
  let namaValue = document.querySelector('#form_nama').value;
  alert('Hai ' + namaValue + ' !' + ' Kami akan segera mencari permintaan anda.');
  if (kebutuhanValue === 'carilapangan' && selectValue === 'bekasi') {
    window.location.assign('carilapanganbekasibulutangkis.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'jakarta') {
    window.location.assign('carilapanganjakartabulutangkis.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'bandung') {
    window.location.assign('carilapanganbandungbulutangkis.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bekasi') {
    window.location.assign('caritemanbekasibulutangkis.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'jakarta') {
    window.location.assign('caritemanjakartabulutangkis.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bandung') {
    window.location.assign('caritemanbandungbulutangkis.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bekasi') {
    window.location.assign('cariklubbekasibulutangkis.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'jakarta') {
    window.location.assign('cariklubjakartabulutangkis.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bandung') {
    window.location.assign('cariklubbandungbulutangkis.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'bekasi') {
    window.location.assign('carialatorbekasibulutangkis.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'jakarta') {
    window.location.assign('carialatorjakartabulutangkis.html');
  } else {
    window.location.assign('carialatorbandungbulutangkis.html');
  }
}
