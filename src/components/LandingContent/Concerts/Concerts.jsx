import './Concerts.css'
import img from './../../../sources/concert.jpg'

const Concerts = () => {
    return (
        <section className="container">
            <div className="section-content">
                <div className="section-title">CONCERTS</div>
                <div className="concerts-wrapper">
                    <div className="concerts-img"><img src={img} alt="123" /></div>
                    <div className="concerts-text">Здесь можно оставить заявку на проведение мероприятия.
                        У нас можно организовать праздник, выбрать композиции на вечер опредлённого
                        дня. Вакансии музыкантов открыты!
                    </div>
                    <div className="concerts-btns">
                        <button className='concerts-btn'>Для посетителей</button>
                        <button className='concerts-btn'>Для музыкантов</button>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Concerts;