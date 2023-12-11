import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('Method Post dengan API untuk pendaftaran Jemaat', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarJemaat';
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '6',
      id_bidang_pendidikan: '11',
      id_pekerjaan: '11',
      no_telepon: '082285393684',
      alamat: 'Parsoburan',
      nama_pekerjaan_lain: 'mahasiswa',
      keterangan: 'tolong jo bos',
      id_user: '6',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, '200'); // Sesuaikan dengan status yang sebenarnya

      // Sesuaikan properti ini dengan respons yang sebenarnya dari server
      assert.ok(response.data.message.includes('Success'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
});