import { useState } from 'react';
import Title from '../PageTitle';
import PrimaryButton from '../PrimaryButton';
import SnsLinks from '../../Components/SnsLinks';

export default function ThanksContents() {
	const [formData] = useState({
		inquiryType: 'estimate', // 仮の値を設定（送信されたデータが格納されている前提）
		companyType: 'individual',
		companyName: '会社名株式会社',
		name: '山田 太郎',
		email: 'yamada@example.com',
		message: '見積もりの依頼です。'
	});

	return (
		<>
			<Title title="thank you" />
			<div className="w-auto max-w-5xl mx-auto text-center">
				<p className="text-3xl text-slate-500">受け付けました</p>
				<p className="text-lg mt-10">お問い合わせの控えを送信しました。</p>
				<p className="text-lg">メールが届かない場合は迷惑メールフォルダをご確認ください。</p>
				<p className="text-lg">5営業日過ぎても返信がない場合は、システムエラーの可能性があります。</p>
				<p className="text-lg">お手数ですが再度お問い合わせいただくか、下記のSNSからDM頂けますと幸いです。</p>
				<p className="text-lg">なお、営業いただいた場合は必要がない限り返信は控えさせていただいております。</p>
				<p className="text-lg">ご理解とご了承ほのど、よろしくお願いいたします。</p>
				<SnsLinks />
				<PrimaryButton
					type="button"
					href="/"
				>go to home</PrimaryButton>
			</div>
		</>
	);
}