// Logika halaman futsal
function submit() {
  let kebutuhanValue = document.querySelector('#select_kebutuhan').value;
  let selectValue = document.querySelector('#select_lokasi').value;
  let namaValue = document.querySelector('#form_nama').value;
  alert('Hai ' + namaValue + ' !' + ' Kami akan segera mencari permintaan anda.');
  if (kebutuhanValue === 'carilapangan' && selectValue === 'bekasi') {
    window.location.assign('carilapanganbekasivoli.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'jakarta') {
    window.location.assign('carilapanganjakartavoli.html');
  } else if (kebutuhanValue === 'carilapangan' && selectValue === 'bandung') {
    window.location.assign('carilapanganbandungvoli.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bekasi') {
    window.location.assign('caritemanbekasivoli.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'jakarta') {
    window.location.assign('caritemanjakartavoli.html');
  } else if (kebutuhanValue === 'cariteman' && selectValue === 'bandung') {
    window.location.assign('caritemanbandungvoli.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bekasi') {
    window.location.assign('cariklubbekasivoli.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'jakarta') {
    window.location.assign('cariklubjakartavoli.html');
  } else if (kebutuhanValue === 'cariklub' && selectValue === 'bandung') {
    window.location.assign('cariklubbandungvoli.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'bekasi') {
    window.location.assign('carialatorbekasivoli.html');
  } else if (kebutuhanValue === 'carialator' && selectValue === 'jakarta') {
    window.location.assign('carialatorjakartavoli.html');
  } else {
    window.location.assign('carialatorbandungvoli.html');
  }
}
