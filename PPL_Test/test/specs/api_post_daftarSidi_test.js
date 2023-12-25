import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  const apiUrl = 'http://127.0.0.1:8070/api/daftarSidi';

  it('Method Post dengan API untuk pendaftaran Sidi', async () => {
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
  it('Method Post dengan API untuk pendaftaran Sidi dengan nama_lengkap kosong', async () => {
    const postData = {
      nama_lengkap: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Sidi dengan nama_ayah kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Sidi dengan nama_ibu kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Sidi dengan tempat_lahir kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: '',
      id_gereja_sidi: '1',
      tanggal_lahir: '1987-08-09',
      nama_gereja_non_hkbp: 'Situmandi',
      id_hub_keluarga: '3',
      keterangan: 'Pindah',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Sidi dengan id_gereja_sidi kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: 'Tarutung',
      id_gereja_sidi: '',
      tanggal_lahir: '1987-08-09',
      nama_gereja_non_hkbp: 'Situmandi',
      id_hub_keluarga: '3',
      keterangan: 'Pindah',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });it('Method Post dengan API untuk pendaftaran Sidi dengan tanggal_lahir kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: 'Tarutung',
      id_gereja_sidi: '1',
      tanggal_lahir: '',
      nama_gereja_non_hkbp: 'Situmandi',
      id_hub_keluarga: '3',
      keterangan: 'Pindah',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });it('Method Post dengan API untuk pendaftaran Sidi dengan nama_gereja_non_hkbp kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: 'Tarutung',
      id_gereja_sidi: '1',
      tanggal_lahir: '1987-08-09',
      nama_gereja_non_hkbp: '',
      id_hub_keluarga: '3',
      keterangan: 'Pindah',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Sidi dengan id_hub_keluarga kosong', async () => {
    const postData = {
      nama_lengkap: 'Josua',
      nama_ayah: 'Martua',
      nama_ibu: 'Marini',
      tempat_lahir: 'Tarutung',
      id_gereja_sidi: '1',
      tanggal_lahir: '1987-08-09',
      nama_gereja_non_hkbp: 'Situmandi',
      id_hub_keluarga: '',
      keterangan: 'Pindah',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
});