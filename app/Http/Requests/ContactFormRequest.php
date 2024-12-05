<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *  ユーザーがこのリクエストを行う権限があるかどうかを判断する。
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *リクエストに適用されるバリデーションルールを取得します。
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'inquiryType' => 'required|string',
            'companyType' => 'required|string',
            'companyName' => 'nullable|string',
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ];
    }
}
