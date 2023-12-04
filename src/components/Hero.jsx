import '../styles/hero.css';

// Option #1, separate image from copy

export default function Hero() {
    return (
        <section className="section hero">
            <div className="hero-copy-wrapper">
                <span className="eyebrow">New product</span>
                <h2 className="section-title">XX99 Mark II Headphones</h2>
                <p className="section-copy">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div className="cta-links">
                    <a className="button" href="">See product</a>
                </div>
            </div>
            <figure className="hero-image-wrapper">
            </figure>
        </section>
    )
}


// Option #2, image and copy together 

// export default function Hero() {
//     return (
//         <section className="section hero">
//             <div className="hero-copy-wrapper">
//                 <span className="eyebrow">New product</span>
//                 <h2 className="section-title">XX99 Mark II Headphones</h2>
//                 <p className="section-copy">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
//                 <div className="cta-links">
//                     <a href="">See product</a>
//                 </div>
//             </div>
//         </section>
//     )
// }