import YandexMap from "./Map"
export default function Footer(){
    return (
        <footer className="main-footer">
            <div className="left">
                <div className="icons">
                    <div className="btn-wrapper">
                        <a href="">
                            <div className="btn-content">
                                <img src="https://i.1.creatium.io/cd/33/50/4013111f6c1a1ceae0c3116a586004328e/75x75q8/yutub.png"></img>
                            </div>
                        </a>
                    </div>
                    <div className="btn-wrapper">
                        <a href="">
                            <div className="btn-content">
                                <img src="https://i.1.creatium.io/8b/5f/8c/69cf9f78050a1ca033802e6abb05e50267/60x60q8/1-vk-icone-icon.png"></img>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text-container">
                    <p>ООО "СК БРУСНИКА</p>
                    <p>Адрес: г.Санкт-Петербург, Бухарестская 1, офис 727</p>
                    <p>Телефон: +79810076017</p>
                    <p>E-mail: brusnikaspb@yandex.ru</p>
                    <p>ИНН: 7816724297 ОГРН: 1217800174822</p>
                </div>
            </div>
            <div className="right">
                <YandexMap/>
            </div>
        </footer>
    )
}