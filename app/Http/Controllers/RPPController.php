<?php
namespace App\Http\Controllers;

use App\Helpers\ApiFormatter;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\Request;

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
        $rpp = DB::select('CALL viewAllRPP(?)',[$id]);

        if($rpp){
            return ApiFormatter::createApi('200', 'Success', $rpp);
        }else{
            return ApiFormatter::createApi('400', 'Failed');
        }
    }


}
