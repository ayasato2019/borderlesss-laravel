import Layout from '../../Layouts/GuestLayout';
import ContactConfirm from '../../Components/Contact/ContactConfirm';

export default function Contact({ data }: { data: ContactData }) {
    return (
        <Layout>
            <ContactConfirm data={data}  />
        </Layout>
    );
}
