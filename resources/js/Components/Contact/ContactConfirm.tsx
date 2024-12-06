import { useEffect, useState, useRef } from 'react';
import Title from '../PageTitle';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

export default function ConfirmContents({ data }: { data: ContactData }) {
  const [contact, setContact] = useState<ContactData>({
    inquiryType: '',
    companyType: '',
    companyName: '',
    name: '',
    email: '',
    message: ''
  });
  const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
  const csrfToken = useRef<string>(metaCsrfToken.content);

  useEffect(() => {
    if (data) {
      setContact(data); // 親から受け取ったdataを状態にセット
    }
  }, [data]);

  return (
    <>
      <Title title="Contact" />
      <div className="space-y-6 p-6 w-auto max-w-5xl mx-auto">
        <form action="/contact/thanks" method="POST">
          <input type="hidden" name="_token" value={csrfToken.current} />
          <input type="hidden" name="inquiryType" value={contact.inquiryType} />
          <input type="hidden" name="companyType" value={contact.companyType} />
          <input type="hidden" name="companyName" value={contact.companyName} />
          <input type="hidden" name="name" value={contact.name} />
          <input type="hidden" name="email" value={contact.email} />
          <input type="hidden" name="message" value={contact.message} />
          <div className="grid grid-cols-1 gap-5 w-full h-auto">
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">お問い合わせ種類</p>
              <p className="text-lg">{contact.inquiryType}</p>
            </div>
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">個人・法人</p>
              <p className="text-lg">{contact.companyType}</p>
            </div>
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">会社名</p>
              <p className="text-lg">{contact.companyName}</p>
            </div>
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">お名前</p>
              <p className="text-lg">{contact.name}</p>
            </div>
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">メールアドレス</p>
              <p className="text-lg">{contact.email}</p>
            </div>
            <div>
              <p className="block mb-1 font-medium text-md text-slate-500">問い合わせ内容</p>
              <p className="text-lg">{contact.message}</p>
            </div>
            <div className="flex justify-between gap-2">
              <SecondaryButton type="button" onClick={() => window.history.back()}>Go to back</SecondaryButton>
              <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
