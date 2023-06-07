<?php
namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Helpers\ApiFormatter;
use Illuminate\Support\Facades\DB;

class RPPController extends Controller
{
    public function viewAllRpp(){
        $rpp = DB::select('CALL viewAllRPP()');
        if($rpp){
            return ApiFormatter::createApi('200', 'Success', $rpp);
        }else {
            return ApiFormatter::createApi('400', 'Failed');
        }
    }

    public function addRPP(Request $request){

        try {

            $jemaat = $request->input('id_jemaat');
            $jenis_rpp = $request->input('id_jenis_rpp');
            $tgl_rpp = $request->input('tgl_warta_rpp');
            $keterangan = $request->input('keterangan');

            $data = DB::statement('CALL addRPP(?,?,?,?)',[$jemaat,$jenis_rpp,$tgl_rpp,$keterangan]);
        
            if($data){
                return ApiFormatter::createApi('200', 'Success', $data);
                // $formatter = new ApiFormatter();
                // return response()->json($formatter->format('User created successfully'), 201);
            }else{
                return ApiFormatter::createApi('400', 'Failed');
                // $formatter = new ApiFormatter();
                // return response()->json($formatter->format('Failed to create user'), 500);
            }
        } catch (Exception $error) {
            return ApiFormatter::createApi('400', 'Failed');
        }
    }

    public function updateRPP(Request $request){
        try {
            $id_rpp = $request->input('id_rpp');
            $jemaat = $request->input('id_jemaat');
            $jenis_rpp = $request->input('id_jenis_rpp');
            $tgl_rpp = $request->input('tgl_warta_rpp');
            $keterangan = $request->input('keterangan');

            $data = DB::statement('CALL updateRPP(?,?,?,?,?)',[$id_rpp,$jemaat,$tgl_rpp,$jenis_rpp,$keterangan]);
        
            if($data){
                return ApiFormatter::createApi('200', 'Success', $data);
                // $formatter = new ApiFormatter();
                // return response()->json($formatter->format('User created successfully'), 201);
            }
        } catch (Exception $error) {
            return ApiFormatter::createApi('400', 'Failed');
        }
    }

    public function viewRPPById($id){
        $rpp = DB::select('CALL viewRPPById(?)',[$id]);

        if($rpp){
            return ApiFormatter::createApi('200', 'Success', $rpp);
        }else{
            return ApiFormatter::createApi('400', 'Failed');
        }
    }

    public function deleteRPP($id){
        
        $data = DB::select('CALL deleteRPP(?)',[$id]);

        if($data){
            return ApiFormatter::createApi('200', 'Success');
        }else{
            return ApiFormatter::createApi('400', 'Failed');
        }
    }


}
