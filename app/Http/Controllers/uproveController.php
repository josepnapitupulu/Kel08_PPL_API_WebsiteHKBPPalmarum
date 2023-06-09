<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class uproveController extends Controller
{

    public function baptis()
    {
        $data = DB::table('registrasi_baptis')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusBaptis(Request $request, $id)
    {
        DB::table('registrasi_baptis')->where('id_registrasi_baptis', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    public function sidi()
    {
        $data = DB::table('registrasi_sidi')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusSidi(Request $request, $id)
    {
        DB::table('registrasi_sidi')->where('id_registrasi_sidi', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    public function pindah()
    {
        $data = DB::table('head_pindah')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusPindah(Request $request, $id)
    {
        DB::table('head_pindah')->where('id_head_reg_pindah', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    
    public function prvJemaat()
    {
        $data = DB::table('jemaat')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusJemaat(Request $request, $id)
    {
        DB::table('jemaat')->where('id_jemaat', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    public function nikah()
    {
        $data = DB::table('registrasi_pernikahan')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusNikah(Request $request, $id)
    {
        DB::table('registrasi_pernikahan')->where('id_registrasi_nikah', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    public function martumpol()
    {
        $data = DB::table('registrasi_calon_mempelai')->where(['status' => 0])->get();
        return response()->json($data);

        if($data){
            return ApiFormatter::createApi(200, 'Success', $data);
        }else{
            return ApiFormatter::createApi(400, 'Failed');
        }
    }

    public function statusMartumpol(Request $request, $id)
    {
        DB::table('registrasi_calon_mempelai')->where('id_registrasi_calon', $id)->update(['status' => 1]);

        return response()->json(['message' => 'Status updated successfully'], 200);
    }
}
