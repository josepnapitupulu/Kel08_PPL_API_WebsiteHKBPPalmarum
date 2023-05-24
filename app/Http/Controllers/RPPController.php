<?php
namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Helpers\ApiFormatter;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

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

    public function addRPP(){

    }

    public function updateRPP(){

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
        
        $data = DB::select('deleteRPP(?)',[$id]);

        if($data){
            return ApiFormatter::createApi('200', 'Success');
        }else{
            return ApiFormatter::createApi('400', 'Failed');
        }
    }


}
