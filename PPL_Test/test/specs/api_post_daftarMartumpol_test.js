import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('Method Post dengan API untuk pendaftaran Martumpol', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarMartumpol';
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: 'santa',
      nama_gereja_perempuan: 'HKBP Sitol',
      id_jemaat_perempuan: '7',
      nama_ayah_perempuan: 'Sahat',
      nama_ibu_perempuan: 'Maria',
      keterangan: 'haha',
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