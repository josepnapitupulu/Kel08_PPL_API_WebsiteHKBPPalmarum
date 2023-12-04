import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('should send a POST request and verify the response', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarNikah';
    const postData = {
      tgl_martumpol: '2022-12-12',
      nama_gereja_martumpol: 'HKBP Parsoburan',
      tgl_pemberkatan: '2023-01-01',
      nama_gereja_pemberkatan: 'HKBP Janjimaria',
      nama_gereja_laki: 'HKBP Parsoburan',
      nama_lengkap_laki: 'Josep Napitupulu',
      nama_lengkap_perempuan: 'Elisa Simanjuntak',
      nama_ayah_laki: 'Sahala',
      nama_ibu_laki: 'Mahalini',
      nama_gereja_perempuan: 'HKBP Janjimaria',
      nama_ayah_perempuan: 'Martua',
      nama_ibu_perempuan: 'Mahanahim',
      keterangan: 'Nikah',
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