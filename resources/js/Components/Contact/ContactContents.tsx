import { useState } from 'react';
import Title from '../PageTitle';
import InputLabel from '../InputLabel';
import TextInput from '../TextInput';
import PrimaryButton from '../PrimaryButton';

export default function ContactContents() {
	const [formData, setFormData] = useState({
		inquiryType: '',
		companyType: '',
		companyName: '',
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	return (
		<>
			<Title title="contact" />
			<form className="space-y-6 p-6 max-w-3xl mx-auto">
				<div className="grid grid-cols-1 gap-5">
					<div className="">
						<InputLabel htmlFor="inquiryType" className="block mb-2 font-medium text-lg focus:outline-none">お問い合わせ種類 <span className="text-red-500">*</span></InputLabel>
						<select
							name="inquiryType"
							id="inquiryType"
							// value="{formData.inquiryType}"
							// onChange="{handleChange}"
							className="w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
							required
						>
							<option disabled selected value="">選択してください</option>
							<option value="estimate">見積もり</option>
							<option value="participation">参画依頼</option>
							<option value="other">その他</option>
						</select>
						{/* {errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>} */}
					</div>
					<div className="">
						<InputLabel htmlFor="companyType" className="block mb-2 font-medium text-lg focus:outline-none">個人・法人 <span className="text-red-500">*</span></InputLabel>
						<select
							name="companyType"
							id="companyType"
							// value={formData.companyType}
							// onChange={handleChange}
							className="w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
							required
						>
							<option disabled selected value="">選択してください</option>
							<option value="individual">個人</option>
							<option value="corporation">法人</option>
						</select>
						{/* {errors.companyType && <p className="text-red-500 text-sm">{errors.companyType}</p>} */}
					</div>
					<div className="">
						<InputLabel htmlFor="companyName" className="block mb-2 font-medium text-lg focus:outline-none">会社名</InputLabel>
						<TextInput
							type="text"
							name="companyName"
							id="companyName"
							// value={formData.companyName}
							// onChange={handleChange}
							className="w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
						/>
					</div>
					<div className="">
						<InputLabel htmlFor="name" className="block mb-2 font-medium text-lg">お名前 <span className="text-red-500">*</span></InputLabel>
						<TextInput
							type="text"
							name="name"
							id="name"
							// value={formData.name}
							// onChange={handleChange}
							required
							className="w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
						/>
						{/* {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
					</div>
					<div className="">
						<InputLabel htmlFor="email" className="block mb-2 font-medium text-lg focus:outline-none">メールアドレス <span className="text-red-500">*</span>
							<TextInput
								type="email"
								name="email"
								id="email"
								// value={formData.email}
								// onChange={handleChange}
								required
								className="w-full border p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
							/>
							{/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
						</InputLabel>
					</div>
					<div className="">
						<InputLabel htmlFor="message" className="block mb-2 font-medium text-lg focus:outline-none">問い合わせ内容 <span className="text-red-500">*</span></InputLabel>
						<textarea
							name="message"
							id="message"
							rows={4}
							// value={formData.message}
							// onChange={handleChange}
							required
							className="w-full border border-slate-200 p-2 rounded-md outline-none focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"
						/>
						{/* {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>} */}
					</div>
					<PrimaryButton
						href="/contact/confirm"
						type="submit"
					>go to confirm</PrimaryButton>
				</div>
			</form>
		</>
	)
}