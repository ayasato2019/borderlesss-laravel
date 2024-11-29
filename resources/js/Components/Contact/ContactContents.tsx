import { useState } from 'react';

export default function ContactContents() {

	return (
		<form onSubmit="" className="space-y-6 p-6 max-w-3xl mx-auto">
			<h2 className="text-3xl font-semibold">お問い合わせフォーム</h2>

			<div className="grid grid-cols-1 gap-4">
				<label htmlFor="inquiryType" className="block font-medium text-lg">
					お問い合わせ種類 <span className="text-red-500">*</span>
				</label>
				<select
					name="inquiryType"
					id="inquiryType"
					value="{formData.inquiryType}"
					onChange="{handleChange}"
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
					required
				>
					<option value="">選択してください</option>
					<option value="estimate">見積もり</option>
					<option value="participation">参画依頼</option>
					<option value="other">その他</option>
				</select>
				{errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>}

				<label htmlFor="companyType" className="block font-medium text-lg">
					個人・法人 <span className="text-red-500">*</span>
				</label>
				<select
					name="companyType"
					id="companyType"
					value={formData.companyType}
					onChange={handleChange}
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
					required
				>
					<option value="">選択してください</option>
					<option value="individual">個人</option>
					<option value="corporation">法人</option>
				</select>
				{errors.companyType && <p className="text-red-500 text-sm">{errors.companyType}</p>}

				<label htmlFor="companyName" className="block font-medium text-lg">会社名</label>
				<input
					type="text"
					name="companyName"
					id="companyName"
					value={formData.companyName}
					onChange={handleChange}
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
				/>

				<label htmlFor="name" className="block font-medium text-lg">
					お名前 <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					name="name"
					id="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
				/>
				{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

				<label htmlFor="email" className="block font-medium text-lg">
					メールアドレス <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
				/>
				{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

				<label htmlFor="message" className="block font-medium text-lg">
					問い合わせ内容 <span className="text-red-500">*</span>
				</label>
				<textarea
					name="message"
					id="message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					required
					className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
				/>
				{errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

				<button
					type="submit"
					className="w-full bg-amber-500 text-white p-3 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
				>
					確認画面へ
				</button>
			</div>
		</form>
	)
}