import './promo.css'
import title from './../../sources/header/title.png'
import group from './../../sources/header/group.png'
import cocks from './../../sources/header/Cocks.png'
const Promo = () => {
    return (
        <section className="promo">
            <div className="promo-title"><img src={title} alt="title" /></div>
            <div className="promo-group">
                <div className="group-img">
                    <img src={group} alt="" />
                </div>
                <div className="group-img">
                    <img src={cocks} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Promo;