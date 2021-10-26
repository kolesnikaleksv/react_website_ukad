// import { Component } from 'react';
// import './slider.css';
// import DogService from '../services/DogService';
// // import Spinner from './spinner/spinner';
// // import ErrorMessage from './errorMessage/ErrorMessage';


// class Cards extends Component {

//     state = {
//         dog: [],
//         loading: true,
//         error: false
//     }
    
//     dogService = new DogService();

//     componentDidMount() {
//         this.dogService.getAllDogs()
//             .then(this.onDogLoaded)
//             .catch(this.onError)
//     }
//     onDogLoaded = (dog) => {
//         this.setState({
//             dog,
//         })
//     }

//     // onError = () => {
//     //     this.setState({
//     //         error: true,
//     //         loading: false
//     //     })
//     // }

//     // Этот метод создан для оптимизации, 
//     // чтобы не помещать такую конструкцию в метод render
//     renderItems(arr) {
//         const items =  arr.map((item) => {
            
//             return (
//                 <li className="cards-item" key={item.id}>
//                     <img src={item.imageUrl} alt="dog" />
//                     <div className="menu__item-text">
//                         <div className="menu__item-subtitle">{item.name}</div>
//                         <div className="menu__item-descr">{item.temperament}</div>
//                     </div>
//                 </li>
//             )
//         });
//         // А эта конструкция вынесена для центровки спиннера/ошибки
//         return (
//             <ul className="dog-grid">
//                 {items}
//             </ul>
//         )
//     }

//     render() {

//         const {dog} = this.state;
        
//         // const items = this.renderItems(dog);
//         const items =  dog.map((item) => {
            
//           return (
//               <li className="cards-item" key={item.id}>
//                   <img src={item.imageUrl} alt="dog" />
//                   <div className="menu__item-text">
//                       <div className="menu__item-subtitle">{item.name}</div>
//                       <div className="menu__item-descr">{item.temperament}</div>
//                   </div>
//               </li>
//           )
//         // const errorMessage = error ? <ErrorMessage/> : null;
//         // const spinner = loading ? <Spinner/> : null;
//         const content =  items ;

//         return (
//                 // <div className="cards">
//                 //     <div className="cards-container">
                        
//                         <>
//                         {content} 
//                         </>
//                 //     </div>
//                 // </div>
//         )
//     }
// }


// export default Cards;

import React, { Component } from 'react';
// import './slider.css';
import './slider2.css';
import Card from './card';
import data from './data/data'

// class component
class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }


  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
   
    return (
      <div className="slider">

        {/* <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button> */}
        {/* <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button> */}
        <section>
            <h1>Home Page</h1>
        </section>
        <div className="page">
            {/* <section>
                <h1>Home Page</h1>
            </section> */}
            <button 
              onClick={() => this.nextProperty()} 
              disabled={property.index === data.properties.length-1}
            >&#60;</button>
            <div className={`cards-slider active-slide-${property.index}`}>
            
              <div className="new-wrap">

                <div className="cards-slider-wrapper" style={{
                    // 'transform': `translateX(-${property.index*(100/properties.length)}%)`
                    'transform': `translateX(-${property.index*451}px)`
                    // 'transform': 'translateX(-451px)'
                }}>{console.log(property.index, properties.length)}
                    {/* {
                        properties.map(property => <Card key={property._id} property={property} />)
                    } */}
                    <Card property={properties} />
                </div>
                </div>
            </div>
            <button 
              onClick={() => this.prevProperty()} 
              disabled={property.index === 0}
            >&#62;</button>
        </div>
      </div>
    );
  }
}

export default Slider;