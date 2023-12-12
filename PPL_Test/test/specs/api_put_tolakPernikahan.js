import axios from 'axios';
import assert from 'assert';

describe('API Test - PUT', () => {
    beforeEach(function () {
        this.timeout(5000);
    });

    it('API test Put Approve Baptis', async () => {
        try {
            // Metode GET untuk mendapatkan data yang akan diperbarui
            const getResponse = await axios.get('http://127.0.0.1:8070/api/userNikah');
            assert.strictEqual(getResponse.status, 200);

            // Pastikan ada data yang diperoleh dari respons GET
            assert.strictEqual(getResponse.data.length > 0, true, 'No data found for update');

            // Mendapatkan ID dari respons GET atau menggunakan ID yang ada
            const itemIdToUpdate = getResponse.data[0].id_registrasi_baptis;

            // Data yang akan diperbarui
            const updatedData = {
                'status': '1'
            };

            // Metode PUT
            const putResponse = await axios.put(`http://127.0.0.1:8070/api/uproveNikah2/${itemIdToUpdate}`, updatedData);
            assert.strictEqual(putResponse.status, 200);
            console.log('PUT Response Data:', putResponse.data);

        } catch (error) {
            throw error;
        }
    });
});
