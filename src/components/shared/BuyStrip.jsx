import '../../styles/buystrip.css'

export default function BuyStrip() {
    return (
        <section className="buystrip-section">
            <div className="buystrip">
                <div className="buystrip-item headphones">
                    <img src={"../../../src/assets/shared/desktop/image-category-thumbnail-headphones.png"} alt="" />
                    <div className="buystrip-item-copy">
                        <h3 className="buystrip-item-title">headphones</h3>
                        <a className="buystrip-item-cta" href="">shop</a>
                    </div>
                </div>
                <div className="buystrip-item headphones">
                    <img src={"../../../src/assets/shared/desktop/image-category-thumbnail-headphones.png"} alt="" />
                    <div className="buystrip-item-copy">
                        <h3 className="buystrip-item-title">headphones</h3>
                        <a className="buystrip-item-cta" href="">shop</a>
                    </div>
                </div>
                <div className="buystrip-item headphones">
                    <img src={"../../../src/assets/shared/desktop/image-category-thumbnail-headphones.png"} alt="" />
                    <div className="buystrip-item-copy">
                        <h3 className="buystrip-item-title">headphones</h3>
                        <a className="buystrip-item-cta" href="">shop</a>
                    </div>
                </div>
            </div>
        </section>
    )
}