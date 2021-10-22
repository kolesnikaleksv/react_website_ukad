import React from 'react';
// import services from '../services/services';
import './cards.css';
import img from '../images/img.png';
import '@fortawesome/react-fontawesome';

function Cards() {

    return (
        <>
            <div className="cards">
            <div className="title">Product page</div>
                <div className="cards-container">
                

                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                    <div className="cards-item">
                        <img src={img} alt="vegy" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">subtitle</div>
                            <div className="menu__item-descr">Item Descr Adding Additional Styles If you want to use</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;