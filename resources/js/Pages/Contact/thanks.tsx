import Layout from '../../Layouts/GuestLayout';
import ContactThanks from '../../Components/Contact/ContactThanks';

export default function Contact({ data }: { data: any }) {
    return (
        <Layout>
            <ContactThanks data={data} />
        </Layout>
    );
}
