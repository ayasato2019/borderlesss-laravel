import { useState, useRef } from 'react';
import Title from '../PageTitle';
import InputLabel from '../InputLabel';
import TextInput from '../TextInput';
import PrimaryButton from '../PrimaryButton';

// FormData 型を定義
interface FormData {
    inquiryType: string;
    companyType: string;
    companyName: string;
    name: string;
    email: string;
    message: string;
}

// errorText 型を定義
interface errorText {
    isRequired: string;
    notNumber: string;
    notEmail: string;
    tooLong: string;
    tooShort: string;
}

export default function ContactContents() {
    // useStateでフォームデータの型を指定
    const [formData, setFormData] = useState<FormData>({
        inquiryType: '',
        companyType: '',
        companyName: '',
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<errorText>>({
        isRequired: 'これは必須項目です',
        notNumber: '数字は使用できません。',
        notEmail: 'メールの形式が正しくありません',
        tooLong: 'メッセージが長すぎます',
        tooShort: 'メッセージが短すぎます',
    });

    const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
    const csrfToken = useRef<string>(metaCsrfToken.content);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // input のnameを取得する
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };


    return (
        <>
            <Title title="contact" />
            <form action="/contact/confirm" method="POST" className="space-y-6 p-6 max-w-3xl mx-auto">
                <input type="hidden" name="_token" value={csrfToken.current} />
                <div className="grid grid-cols-1 gap-5">
                    <div className="">
                        <InputLabel htmlFor="inquiryType" className="block mb-2 font-medium text-lg focus:outline-none">お問い合わせ種類 <span className="text-red-500">*</span></InputLabel>
                        <select
                            name="inquiryType"
                            id="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                            required
                        >
                            <option disabled value="">選択してください</option>
                            <option value="見積もり">見積もり</option>
                            <option value="ご相談">ご相談</option>
                            <option value="チーム参画依頼">チーム参画依頼</option>
                            <option value="その他">その他</option>
                        </select>
                    </div>
                    <div className="">
                        <InputLabel htmlFor="companyType" className="block mb-2 font-medium text-lg focus:outline-none">個人・法人 <span className="text-red-500">*</span></InputLabel>
                        <select
                            name="companyType"
                            id="companyType"
                            value={formData.companyType}
                            onChange={handleChange}
                            className="w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                            required
                        >
                            <option disabled value="">選択してください</option>
                            <option value="個人">個人</option>
                            <option value="法人">法人</option>
                        </select>
                    </div>
                    <div className="">
                        <InputLabel htmlFor="companyName" className="block mb-2 font-medium text-lg focus:outline-none">会社名</InputLabel>
                        <TextInput
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="">
                        <InputLabel htmlFor="name" className="block mb-2 font-medium text-lg">お名前 <span className="text-red-500">*</span></InputLabel>
                        <TextInput
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                        />
                        </div>
                    <div className="">
                        <InputLabel htmlFor="email" className="block mb-2 font-medium text-lg focus:outline-none">メールアドレス <span className="text-red-500">*</span>
                            <TextInput
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                            />
                        </InputLabel>
                    </div>
                    <div className="">
                        <InputLabel htmlFor="message" className="block mb-2 font-medium text-lg focus:outline-none">問い合わせ内容 <span className="text-red-500">*</span></InputLabel>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-200 p-2 rounded-md outline-none focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
                        />
                        </div>
                    <PrimaryButton type="submit">go to confirm</PrimaryButton>
                </div>
            </form>
            {/* <script id="_bownow_cs_sid_eeea248f766692fcb45b">
				var _bownow_cs_sid_eeea248f766692fcb45b = document.createElement('script');
				_bownow_cs_sid_eeea248f766692fcb45b.charset = 'utf-8';
				_bownow_cs_sid_eeea248f766692fcb45b.src = 'https://contents.bownow.jp/forms/sid_eeea248f766692fcb45b/trace.js';
				document.getElementsByTagName('head')[0].appendChild(_bownow_cs_sid_eeea248f766692fcb45b);
				</script> */}
        </>
    );
}
