import Layout from '../../Layouts/GuestLayout';
import AboutContents from '../../Components/About/AboutContents';
import SnsLinks from '../../Components/SnsLinks';
import AnimatedCurtain from'../../Components/AnimatedCurtain'

export default function About() {
    return (
        <Layout>
        <AnimatedCurtain />
        <div id="blog-content">
          <AboutContents />
          <SnsLinks />
        </div>
      </Layout>
    );
}
