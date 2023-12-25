import axios from 'axios';
import assert from 'assert';

describe('API Testing with WebDriverIO', () => {
  const apiUrl = 'http://127.0.0.1:8070/api/daftarJemaat';
  it('Method Post dengan API untuk pendaftaran Jemaat', async () => {
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
  it('Method Post dengan API untuk pendaftaran Jemaat dengan nama depan kosong', async () => {
    const postData = {
      nama_depan: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan nama belakang kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan gelar depan kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan gelar belakang kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan tempat_lahir kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan tanggal_lahir kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan jenis kelamin kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan golongan darah kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan id_hub_keluarga kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan id_pendidikan kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan id_bidang_pendidikan kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '6',
      id_bidang_pendidikan: '',
      id_pekerjaan: '11',
      no_telepon: '082285393684',
      alamat: 'Parsoburan',
      nama_pekerjaan_lain: 'mahasiswa',
      keterangan: 'tolong jo bos',
      id_user: '6',
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
  it('Method Post dengan API untuk pendaftaran Jemaat dengan id_pekerjaan kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '6',
      id_bidang_pendidikan: '11',
      id_pekerjaan: '',
      no_telepon: '082285393684',
      alamat: 'Parsoburan',
      nama_pekerjaan_lain: 'mahasiswa',
      keterangan: 'tolong jo bos',
      id_user: '6',
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
  it('Method Post dengan API untuk pendaftaran Jemaat dengan no_telepon kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '6',
      id_bidang_pendidikan: '11',
      id_pekerjaan: '11',
      no_telepon: '',
      alamat: 'Parsoburan',
      nama_pekerjaan_lain: 'mahasiswa',
      keterangan: 'tolong jo bos',
      id_user: '6',
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
  it('Method Post dengan API untuk pendaftaran Jemaat dengan alamat kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
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

      assert.equal(response.status, 400); 

      assert.ok(response.data.message.includes('Validation Error'));

    } catch (error) {
      console.error('Error during POST request:', error.message);
      throw error; // Lepaskan kembali kesalahan untuk menunjukkan kegagalan tes
    }
  });
  it('Method Post dengan API untuk pendaftaran Jemaat dengan nama_pekerjaan_lain kosong', async () => {
    const postData = {
      nama_depan: 'Josep',
      nama_belakang: 'Napitupulu',
      gelar_depan: 'dr',
      gelar_belakang: 'm.si',
      tempat_lahir: 'Parsoburan',
      tanggal_lahir: '2003-09-07',
      jenis_kelamin: 'Laki-laki',
      gol_darah: 'O',
      id_hub_keluarga: '3',
      id_pendidikan: '6',
      id_bidang_pendidikan: '11',
      id_pekerjaan: '11',
      no_telepon: '082285393684',
      alamat: 'Parsoburan',
      nama_pekerjaan_lain: '',
      keterangan: 'tolong jo bos',
      id_user: '6',
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