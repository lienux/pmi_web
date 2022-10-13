<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\Files\UploadedFile;
use \Config\DorbitT;

class Sukarelawan extends ResourceController
{
    protected $helpers = ['form'];

    public function __construct()
    {
        $this->dorbitt = new DorbitT();
    }

    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        // echo "OK";
        $company = $this->dorbitt->company;
        // $query = $this->mPasien->where('company_id',session()->get('user_id'))->findAll();
        // $golongan_darah = $this->mGoldar->findAll();
        // echo json_encode($query);
        $data = [
            'company'       => $company,
            'view'          => $company['view'],
            'identity'      => $this->dorbitt->identity,
            // 'navlink'       => 'pasien',
            'page'          => 'register',
            // 'modal'         => 'dds/modal',
            // 'appjs'         => 'dds/appjs',
            'breadcrumb'    => ['Pasien','Index'],
            'breadcrumb_active' => ['active',''],
            // 'pasien'        => $query,
            // 'golongan_darah'    => $golongan_darah,
            // 'masterdata'    => true,
        ];

        return view('pages/sukarelawan',$data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {

        // 

    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:8080/api/sukarelawan/create',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array(
                'nik'       => $this->request->getVar('nik'),
                'name'      => $this->request->getVar('name'),
                'hp'        => $this->request->getVar('hp'),
                'lokasi'    => $this->request->getVar('lokasi'),
                'schedule'  => $this->request->getVar('schedule')
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
    
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        // 
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        // 
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function nik($nik)
    {

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:8080/api/sukarelawan/nik/'.$nik,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
    }
}
