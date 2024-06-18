import './about.css'
import img from './../../../sources/inter.jpg'
const AboutUs = () => {
    return (
        <section className='container'>
            <div className="section-content">
                <div className="section-title">O HAC</div>
                <div className="about-card">
                    <div className="card-text">
                        <div className="text-desc">Мы - рок-кафе “Вкус ностальгии”! <br /><br /> В нашем музыкальном кафе вы сможете насладиться приятной атмосферой, вкусными напитками и живой музыкой каждый вечер.   </div>
                        <div className="text-desc secondary">Мы предлагаем разнообразное меню блюд и напитков.</div>
                        <div className="text-desc secondary">+7 (495) 123-45-56</div>
                        <div className="text-desc secondary">г. Москва ул. Тверская д. 23</div>
                        <button className='main-button'>Забронировать столик</button>
                    </div>
                    <div className="card-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;