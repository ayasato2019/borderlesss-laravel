import { useState, useEffect } from 'react';
import Title from '../PageTitle';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

interface ContactData {
	inquiryType: string,
	companyType: string,
	companyName: string,
	name: string,
	email: string,
	message: string
}

export default function ConfirmContents() {
	const [contact, setContact] = useState<ContactData>({
		inquiryType: '',
		companyType: '',
		companyName: '',
		name: '',
		email: '',
		message: ''
	});

	useEffect(() => {
		// sessionStorageからデータを取得
		const storedData = sessionStorage.getItem('contactData');
		if (storedData) {
			setContact(JSON.parse(storedData));
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
				|| sessionStorage.getItem('csrfToken');

			const response = await fetch('/contact/thanks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-TOKEN': csrfToken || '',
				},
				body: JSON.stringify(contact),
			});

			if (response.ok) {
				console.log('OK');
			} else {
				console.error('送信エラー');
			}
		} catch (error) {
			console.error('送信エラー:', error);
		}
	};


	return (
		<>
			<Title title="contact" />
			<div className="space-y-6 p-6 w-auto max-w-5xl mx-auto">
				<form onSubmit={handleSubmit} action="/contact/thanks" method="POST">
					<input
						type="hidden"
						name="_token"
						value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''}
					/>
					<div className="grid grid-cols-1 gap-5 w-full h-auto">
						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">お問い合わせ種類</p>
							<p className="text-lg">{contact.inquiryType}</p>
						</div>

						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">個人・法人</p>
							<p className="text-lg">{contact.companyType}</p>
						</div>

						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">会社名</p>
							<p className="text-lg">{contact.companyName}</p>
						</div>

						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">お名前</p>
							<p className="text-lg">{contact.name}</p>
						</div>

						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">メールアドレス</p>
							<p className="text-lg">{contact.email}</p>
						</div>

						<div>
							<p className="block mb-1 font-medium text-md text-slate-500 focus:outline-none">問い合わせ内容</p>
							<p className="text-lg">{contact.message}</p>
						</div>

						<div className="flex justify-between gap-2">
							<SecondaryButton type="button" onClick={() => window.history.back()}>Go to back</SecondaryButton>
							<PrimaryButton type="submit">submit</PrimaryButton>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

