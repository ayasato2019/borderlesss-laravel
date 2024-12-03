import Layout from '../../Layouts/GuestLayout';
import BlogList from '../../Components/Blog/BlogList';
import SnsLinks from '../../Components/SnsLinks';
// import AnimatedCurtain from'../../Components/AnimatedCurtain'

export default function About() {
    return (
        <Layout>
        {/* <AnimatedCurtain /> */}
        <div id="blog-content">
          <BlogList />
          <SnsLinks />
        </div>
      </Layout>
    );
}
