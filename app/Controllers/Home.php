<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use \Config\DorbitT;

class Home extends BaseController
{
    public function __construct()
    {
        $this->dorbitt = new DorbitT();
    }

    public function index()
    {
        $data = [
            'identity'      => $this->dorbitt->identity,
        ];
        return view('pages/home',$data);
    }
}
