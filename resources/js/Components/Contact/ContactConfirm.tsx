import { useState } from 'react';
import Title from '../PageTitle';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

export default function ConfirmContents() {
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
			<Title title="contact" />
			<div className="space-y-6 p-6 w-auto max-w-5xl mx-auto">
				<div className="grid grid-cols-1 gap-5 w-full h-auto">
					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">お問い合わせ種類</p>
						<p className="text-lg">{formData.inquiryType === 'estimate' ? '見積もり' : formData.inquiryType === 'participation' ? '参画依頼' : 'その他'}</p>
					</div>

					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">個人・法人</p>
						<p className="text-lg">{formData.companyType === 'individual' ? '個人' : '法人'}</p>
					</div>

					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">会社名</p>
						<p className="text-lg">{formData.companyName}</p>
					</div>

					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">お名前</p>
						<p className="text-lg">{formData.name}</p>
					</div>

					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">メールアドレス</p>
						<p className="text-lg">{formData.email}</p>
					</div>

					<div>
						<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">問い合わせ内容</p>
						<p className="text-lg">{formData.message}</p>
					</div>

					<div className="flex justify-between gap-2">
						<SecondaryButton type="button">Go to back</SecondaryButton>
						<PrimaryButton type="submit">submit</PrimaryButton>
					</div>
				</div>
			</div>
		</>
	);
}

