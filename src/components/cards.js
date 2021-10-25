import { Component } from 'react';
import './cards.css';
import DogService from '../services/DogService';
import Spinner from './spinner/spinner';
import ErrorMessage from './errorMessage/ErrorMessage';


class Cards extends Component {

    state = {
        dog: [],
        loading: true,
        error: false
    }
    
    dogService = new DogService();

    componentDidMount() {
        this.dogService.getAllDogs()
            .then(this.onDogLoaded)
            .catch(this.onError)
    }
    onDogLoaded = (dog) => {
        this.setState({
            dog,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items =  arr.map((item) => {
            // let imgStyle = {'objectFit' : 'cover'};
            // if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            //     imgStyle = {'objectFit' : 'unset'};
            // }
            
            return (
                <li className="cards-item" key={item.id}>
                    <img src={item.imageUrl} alt="dog" />
                    <div className="menu__item-text">
                        <div className="menu__item-subtitle">{item.name}</div>
                        <div className="menu__item-descr">{item.temperament}</div>
                    </div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="dog-grid">
                {items}
            </ul>
        )
    }

    render() {

        const {dog, loading, error} = this.state;
        
        const items = this.renderItems(dog);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
                <div className="cards">
                    <div className="title">Product page</div>
                    <div className="cards-container">
                        {errorMessage}
                        {spinner}
                        {content} 
                    </div>
                </div>
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

export default Cards;