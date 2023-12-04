import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('should send a POST request and verify the response', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarBaptis';
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: 'Rikardo',
      tempat_lahir: 'Psaaa',
      tanggal_lahir: '2023-08-23',
      jenis_kelamin: 'Laki-Laki',
      alamat: 'Medan',
      keterangan: 'paso',
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