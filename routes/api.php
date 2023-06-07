<?php

use App\Http\Controllers\RPPController;
use App\Http\Controllers\PelayanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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




