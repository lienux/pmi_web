<?php

namespace App\Helpers;

use App\Models\SukarelawanModel;

class SukarelawanHelper {
	public function __construct()
    {
        $this->sukarelawan_model = new SukarelawanModel();
    }

    public function check_nik($nik)
    {
        $ID = $this->sukarelawan_model->where('nik', $nik)->selectMax('id')->find();
        $id = $ID[0]['id'];
        
        if ($id != null) {
            $query = $this->sukarelawan_model->find($id);
            $status = $query['status'];
            $check_in = $query['check_in'];

            if ($status==0) {
                $res = [
                    'stat' => false,
                    'msg' => 'NIK sudah terdaftar'
                ];
            }else{
                if ($check_in) {
                    $batas_waktu = date('Y-m-d', strtotime("+3 months", strtotime($check_in)));
                    $date = date('Y-m-d');
                    if ($batas_waktu>$date) {
                        $res = [
                            'stat' => false,
                            'msg' => 'Anda dapat melakukan Donor Darah setelah 3 bulan.'
                        ];
                    }else{
                        $res = [
                            'stat' => true,
                            'msg' => ''
                        ];
                    }
                }else{
                    $res = [
                        'stat' => true,
                        'msg' => ''
                    ];
                }
            }
        }else{
            $res = [
                'stat' => true,
                'msg' => ''
            ];
        }
        return $res;
    }
}