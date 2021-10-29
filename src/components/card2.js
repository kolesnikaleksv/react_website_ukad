import { Component } from 'react';
import './card.css';
import DogService from '../services/DogService';


class Card extends Component {

    state = {
        dog: []
    }
    
    dogService = new DogService();

    componentDidMount() {
        this.dogService.getAllDogs()
            .then(this.onDogLoaded)
            .catch(this.onError)
    }
    onDogLoaded = (dog) => {
        this.setState({
            dog
        })
    }

    render() {

        const {dog} = this.state;

        const items = dog.map(item => {
            return (
                    <li className="cards-items" key={item.id}>
                        <img src={item.imageUrl} alt="dog" />
                        <div className="menu__item-text">
                            <div className="menu__item-subtitle">{item.name}</div>
                            <div className="menu__item-descr">{item.temperament}</div>
                        </div>
                    </li>
                )
        })

        return (
            <ul className="card-wrapper">
                {items}
            </ul>
        )
    }
}


export default Card;