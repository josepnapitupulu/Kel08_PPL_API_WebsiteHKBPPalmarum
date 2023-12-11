import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  const apiUrl = 'http://127.0.0.1:8070/api/daftarBaptis';

  it('Method Post dengan API untuk pendaftaran Baptis', async () => {
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

      assert.equal(response.status, 200); 

      assert.ok(response.data.message.includes('Success'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
});