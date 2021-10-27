import { Component } from 'react';
import './card2.css';
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

    // onError = () => {
    //     this.setState({
    //         error: true,
    //         loading: false
    //     })
    // }

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

//     state = {
//         dog: {},
//         loading: true,
//         error: false
//     }

//     dogService = new DogService();

//     componentDidMount() {
//         this.updateDog();
//         // this.timerId = setInterval(this.updateChar, 15000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }

//     onDogLoaded = (dog) => {
//         this.setState({
//             dog,
//             loading: false
//         })
//     }

//     onError = () => {
//         this.setState({
//             loading: false,
//             error: true
//         })
//     }

//     updateDog = () => {
//         // const id = Math.floor(Math.random() * 11);
//         const id = 4;

//         this.dogService
//         // .getAllDogs()
//         // .then(res => console.log(res))
//         .getDog(id)
//         .then(this.onDogLoaded)
//         .catch(this.onError)
//         // .then(res => {
//         //     this.setState(res)
//         // })
//     }

//     render () {
//         const {dog, loading, error} = this.state;
//         const errorMessage = error ? <ErrorMessage /> : null;
//         const spinner = loading ? <Spinner /> : null;
//         const content = !(loading || error) ? <View dog={dog} /> : null;

//         return (
//             <div className="cards">
//                 <div className="title">Product page</div>
//                 <div className="cards-container">
//                 <div className="cards-item">
//                     {errorMessage}
//                     {spinner}
//                     {content}
//                 </div>   
//                 </div>
//             </div>
//         )
//     }
// }

// const View = ({dog}) => {
//     const {imageUrl, name, temperament} = dog;
//     return (
//         <>
//             <img src={imageUrl} alt="vegy" />
//             <div className="menu__item-text">
//                 <div className="menu__item-subtitle">{name}</div>
//                 <div className="menu__item-descr">{temperament}</div>
//             </div>
//         </>
//     )
// }

export default Card;