import Layout from '../../Layouts/GuestLayout';
import AboutContents from '../../Components/About/AboutContents';
import Mission from '../../Components/About/Mission';
import Policy from '../../Components/About/Policy';
import WhyMe from '../../Components/About/WhyMe';
import SnsLinks from '../../Components/SnsLinks';
// import AnimatedCurtain from'../../Components/AnimatedCurtain'

export default function About() {
    return (
        <Layout>
        {/* <AnimatedCurtain /> */}
        <div id="blog-content">
          <AboutContents />
          <Mission />
          <Policy />
          <WhyMe />
          <SnsLinks />
        </div>
      </Layout>
    );
}
