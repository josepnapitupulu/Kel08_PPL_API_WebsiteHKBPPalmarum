import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('Method Post dengan API untuk pendaftaran Pindah', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarPindah';
    const postData = {
      id_registrasi: '34',
      id_jemaat: '19',
      tgl_pindah: '2023-01-01',
      nama_gereja: 'HKBP Janjimaria',
      keterangan: 'Pindah',
      id_user: '10',
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