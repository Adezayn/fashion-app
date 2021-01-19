import React from 'react';
import HeroSection from '../HeroSection/index';
import Navbar from '../Navbar/index';
import Feature from '../Feature/index';
import Testimonial from '../Testimonial/index';
import Footer from '../Footer/index';

const Index = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <div className="who-we-are" id="about">
                <h4 className="center-align">Who We Are</h4>
            </div>
            <div className="who-we-are-section">
                <p>lorem oiyitfg jhuiuifbjh kyoyhy ogjfyhyu gjhiyhyh 
                    kyjyhhjhj gjgjgkguh jfjgjgjgn jfhfhghg jgjgjgjgn ngjgjgjg gjgjbjbjnb
                    bjgjgjgjhg gjgjbjb aewveg vbjfhtrj gwjdon fhvjg5jkg chgfjhvjhvfn
                    fhvvjfghjhdv bdfv  gvghvv vgfhrbkcui  vjhdfjkgjk kfjhfvhjhbfjk jfjfjkdf
                    jbjhgvbjh hfjhfvjh fshsdh wevhdh hsdhd fmvj fj shion fheukl ehhrjh
                    lorem oiyitfg jhuiuifbjh kyoyhy ogjfyhyu gjhiyhyh 
                    kyjyhhjhj gjgjgkguh jfjgjgjgn jfhfhghg jgjgjgjgn ngjgjgjg gjgjbjbjnb
                    bjgjgjgjhg gjgjbjb aewveg vbjfhtrj gwjdon fhvjg5jkg chgfjhvjhvfn
                    fhvvjfghjhdv bdfv  gvghvv vgfhrbkcui  vjhdfjkgjk kfjhfvhjhbfjk jfjfjkdf
                    jbjhgvbjh hfjhfvjh fshsdh wevhdh hsdhd fmvj fj shion fheukl ehhrjh
                    lorem oiyitfg jhuiuifbjh kyoyhy ogjfyhyu gjhiyhyh 
                    kyjyhhjhj gjgjgkguh jfjgjgjgn jfhfhghg jgjgjgjgn ngjgjgjg gjgjbjbjnb
                    bjgjgjgjhg gjgjbjb aewveg vbjfhtrj gwjdon fhvjg5jkg chgfjhvjhvfn
                    fhvvjfghjhdv bdfv  gvghvv vgfhrbkcui  vjhdfjkgjk kfjhfvhjhbfjk jfjfjkdf
                    jbjhgvbjh hfjhfvjh fshsdh wevhdh hsdhd fmvj fj shion fheukl ehhrj.
                </p>
                <img src="/team.png" alt="team" />
            </div>
            <div>
            <h4 className="center-align" id="feature">Awesome Features</h4>
            <Feature />
            </div>
            <div>
            <h4 className="center-align" id="testimonials">Testimonials</h4>
            <Testimonial />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Index;