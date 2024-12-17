<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getApiData()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://zenn.dev/api/articles?username=aya_sato&order=latest');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
        $response = curl_exec($curl);

        if ($response === false) {
            return 'Curl error: ' . curl_error($curl);
        }

        curl_close($curl);
        return response()->json(json_decode($response));
    }
}
