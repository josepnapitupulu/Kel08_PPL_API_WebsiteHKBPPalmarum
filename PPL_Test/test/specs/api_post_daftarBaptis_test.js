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
  it('Method Post dengan API untuk pendaftaran Baptis dengan nama_lengkap kosong', async () => {
    const postData = {
      nama_lengkap: '',
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
  it('Method Post dengan API untuk pendaftaran Baptis dengan nama_ayah kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: '',
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
  it('Method Post dengan API untuk pendaftaran Baptis dengan nama_ibu kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: '',
      tempat_lahir: 'Psaaa',
      tanggal_lahir: '2023-08-23',
      jenis_kelamin: 'Laki-Laki',
      alamat: 'Medan',
      keterangan: 'paso',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
  it('Method Post dengan API untuk pendaftaran Baptis dengan tempat_lahir kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: 'Psaaa',
      tempat_lahir: '',
      tanggal_lahir: '2023-08-23',
      jenis_kelamin: 'Laki-Laki',
      alamat: 'Medan',
      keterangan: 'paso',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
  it('Method Post dengan API untuk pendaftaran Baptis dengan tanggal_lahir kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: 'Psaaa',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '',
      jenis_kelamin: 'Laki-Laki',
      alamat: 'Medan',
      keterangan: 'paso',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
  it('Method Post dengan API untuk pendaftaran Baptis dengan jenis_kelamin kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: 'Psaaa',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2023-08-23',
      jenis_kelamin: '',
      alamat: 'Medan',
      keterangan: 'paso',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
  it('Method Post dengan API untuk pendaftaran Baptis dengan alamat kosong', async () => {
    const postData = {
      nama_lengkap: 'Rashid',
      nama_ayah: 'Rara',
      nama_ibu: 'Psaaa',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2023-08-23',
      jenis_kelamin: 'Laki-Laki',
      alamat: '',
      keterangan: 'paso',
      id_user: '10',
    };

    try {
      const response = await axios.post(apiUrl, postData);

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));
    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error;
    }
  });
});