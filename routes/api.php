<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RPPController;
use App\Http\Controllers\userController;
use App\Http\Controllers\uproveController;
use App\Http\Controllers\PelayanController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/rpp', [RPPController::class, 'viewAllRpp']);
Route::get('rpp/{id}', [RPPController::class, 'viewRPPById']);
Route::get('/deleteRpp/{id}', [RPPController::class, 'deleteRPP']);
Route::post('/storeRpp', [RPPController::class, 'addRPP']);
Route::post('/updateRpp', [RPPController::class, 'updateRPP']);


Route::get('/pelayan', [PelayanController::class, 'viewAllPelayan']);
Route::get('/deletePelayan/{id}', [PelayanController::class, 'deleteRPP']);
Route::get('pelayan/{id}', [PelayanController::class, 'viewPelayanById']);
Route::post('/storePelayan', [PelayanController::class, 'addPelayan']);
Route::post('/updateRpp', [PelayanController::class, 'updatePelayan']);




Route::post('/daftarBaptis', [userController::class, 'daftarBaptis']);
Route::post('/daftarSidi', [userController::class, 'daftarSidi']);
Route::post('/daftarJemaat', [userController::class, 'daftarJemaat']);
Route::post('/daftarNikah', [userController::class, 'daftarNikah']);
Route::post('/daftarMartumpol', [userController::class, 'daftarMartumpol']);
Route::post('/daftarPindah', [userController::class, 'daftarPindah']);
Route::get('/keluarga', [userController::class, 'keluarga']);
Route::get('/pendidikan', [userController::class, 'pendidikan']);
Route::get('/BidangPendidikan', [userController::class, 'BidangPendidikan']);
Route::get('/pekerjaan', [userController::class, 'pekerjaan']);
Route::get('/jemaat', [userController::class, 'jemaat']);
Route::get('/namKeluarga', [userController::class, 'namKeluarga']);
Route::get('/gereja', [userController::class, 'gereja']);
Route::get('/pelayan', [userController::class, 'pelayan']);
Route::get('/jadwal', [userController::class, 'jadwal']);
Route::get('/kegiatan', [userController::class, 'kegiatan']);
Route::get('/pemasukan', [userController::class, 'pemasukan']);
Route::get('/pengeluaran', [userController::class, 'pengeluaran']);


Route::put('/uproveBaptis/{id}', [uproveController::class, 'statusBaptis']);
Route::get('/baptis', [uproveController::class, 'baptis']);

Route::put('/uproveSidi/{id}', [uproveController::class, 'statusSidi']);
Route::get('/sidi', [uproveController::class, 'sidi']);

Route::put('/uprovePindah/{id}', [uproveController::class, 'statusPindah']);
Route::get('/pindah', [uproveController::class, 'pindah']);

Route::put('/uproveJemaat/{id}', [uproveController::class, 'statusJemaat']);
Route::get('/prvJemaat', [uproveController::class, 'prvJemaat']);

Route::put('/uproveNikah/{id}', [uproveController::class, 'statusNikah']);
Route::get('/nikah', [uproveController::class, 'nikah']);

Route::put('/uproveMartumpol/{id}', [uproveController::class, 'statusMartumpol']);
Route::get('/martumpol', [uproveController::class, 'martumpol']);