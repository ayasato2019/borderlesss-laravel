import Layout from '../Layouts/GuestLayout';
import Title from '../Components/PageTitle';
import PrimaryButton  from '../Components/PrimaryButton';

export default function PrivacyPolicy() {
    return (
        <Layout>
            <Title title="Privacy Policy" />
            <div className="max-w-3xl mx-auto py-8 px-4">
                <p className="mb-4">BORDERLESSS（以下、「当サイト」といいます）では、お問い合わせ対応や業務遂行に必要な範囲で、個人情報を収集・利用しています。本ポリシーでは、個人情報の取扱いに関する当サイトの方針を以下の通り定めます。</p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">1. 個人情報の収集について</h2>
                <p className="mb-2">当サイトでは、以下の情報を収集することがあります。</p>
                <ul className="list-disc list-inside mb-4">
                    <li>お名前</li>
                    <li>電話番号</li>
                    <li>メールアドレス</li>
                    <li>会社名（法人の場合）</li>
                </ul>
                <p>これらの情報は、お問い合わせの返信や業務遂行以外の目的では利用いたしません。</p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">2. 個人情報の利用目的</h2>
                <p className="mb-2">収集した個人情報は、以下の目的で利用します。</p>
                <ul className="list-disc list-inside mb-4">
                    <li>お問い合わせやご依頼内容への適切な対応</li>
                    <li>お見積もりの送付やご提案</li>
                    <li>必要に応じた連絡</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">3. 個人情報の管理について</h2>
                <p className="mb-2">当サイトでは、収集した個人情報を安全に管理するため、以下の措置を講じます。</p>
                <ul className="list-disc list-inside mb-4">
                    <li>不正アクセス、紛失、改ざん、漏洩を防止するための適切なセキュリティ対策の実施</li>
                    <li>必要がなくなった個人情報は速やかに削除</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">4. 第三者への提供について</h2>
                <p className="mb-2">収集した個人情報を、以下の場合を除き、第三者に提供することはありません。</p>
                <ul className="list-disc list-inside mb-4">
                    <li>本人の同意がある場合</li>
                    <li>法令に基づき開示が求められる場合</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">5. クッキー（Cookie）について</h2>
                <p className="mb-4">当サイトでは、一部の機能でクッキーを使用する場合があります。クッキーを利用することで、ウェブサイトの利用状況の分析や利便性の向上を図りますが、これによって個人を特定できる情報を取得することはありません。</p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">6. プライバシーポリシーの変更について</h2>
                <p className="mb-4">当サイトは、個人情報の取扱いを改善するため、本ポリシーを予告なく変更することがあります。変更後の内容は当サイトに掲載した時点で適用されます。</p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">7. お問い合わせ先</h2>
                <p className="mb-2">個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。</p>
                <p className="mb-1">運営者名: [あなたの名前または会社名]</p>
                <p className="mb-1">メールアドレス: [お問い合わせ用メールアドレス]</p>
                <p className="mb-4">電話番号: [お問い合わせ用電話番号]</p>

                <PrimaryButton
                    href="/"
                    className="text-blue-600 hover:underline">To HOME</PrimaryButton>
            </div>
        </Layout>
    );
}
