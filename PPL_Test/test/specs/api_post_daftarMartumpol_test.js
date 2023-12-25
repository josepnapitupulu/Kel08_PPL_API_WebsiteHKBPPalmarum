import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  const apiUrl = 'http://127.0.0.1:8070/api/daftarMartumpol';

  it('Method Post dengan API untuk pendaftaran Martumpol', async () => {
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

      assert.equal(response.status, '200');

      assert.ok(response.data.message.includes('Success'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_gereja_laki kosong', async () => {
    const postData = {
      nama_gereja_laki: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Martumpol dengan id_jemaat_laki kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  })
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_ayah_laki kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_ibu_laki kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: '',
      nama_gereja_perempuan: 'HKBP Sitol',
      id_jemaat_perempuan: '7',
      nama_ayah_perempuan: 'Sahat',
      nama_ibu_perempuan: 'Maria',
      keterangan: 'haha',
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
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_gereja_perempuan kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: 'Santa',
      nama_gereja_perempuan: '',
      id_jemaat_perempuan: '7',
      nama_ayah_perempuan: 'Sahat',
      nama_ibu_perempuan: 'Maria',
      keterangan: 'haha',
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
  it('Method Post dengan API untuk pendaftaran Martumpol dengan id_jemaat_perempuan kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: 'Santa',
      nama_gereja_perempuan: 'HKBP Sitol',
      id_jemaat_perempuan: '',
      nama_ayah_perempuan: 'Sahat',
      nama_ibu_perempuan: 'Maria',
      keterangan: 'haha',
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
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_ayah_perempuan kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: 'Santa',
      nama_gereja_perempuan: 'HKBP Sitol',
      id_jemaat_perempuan: '7',
      nama_ayah_perempuan: '',
      nama_ibu_perempuan: 'Maria',
      keterangan: 'haha',
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
  it('Method Post dengan API untuk pendaftaran Martumpol dengan nama_ibu_perempuan kosong', async () => {
    const postData = {
      nama_gereja_laki: 'HKBP Parsoburan',
      id_jemaat_laki: '9',
      nama_ayah_laki: 'sandro',
      nama_ibu_laki: 'Santa',
      nama_gereja_perempuan: 'HKBP Sitol',
      id_jemaat_perempuan: '7',
      nama_ayah_perempuan: 'Sahat',
      nama_ibu_perempuan: '',
      keterangan: 'haha',
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