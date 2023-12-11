import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  it('Method Post dengan API untuk pendaftaran Sidi', async () => {
    const apiUrl = 'http://127.0.0.1:8070/api/daftarSidi';
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: 'Tarutung',
      id_gereja_sidi: '1',
      tanggal_lahir: '1987-08-09',
      nama_gereja_non_hkbp: 'Situmandi',
      id_hub_keluarga: '3',
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