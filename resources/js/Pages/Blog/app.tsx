import Layout from '../../Layouts/GuestLayout';
import BlogList from '../../Components/Blog/BlogList';
import SnsLinks from '../../Components/SnsLinks';

export default function Blog() {
    return (
        <Layout>
            <BlogList  />
            <SnsLinks />
        </Layout>
    );
}
