import React, { Component } from 'react';
// import './slider.css';
import './slider.css';
import Card from './card2';
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
   console.log(properties ,property);
    return (
      <div className="slider">
        <section>
            <h1>Home Page</h1>
        </section>
        <div className="page">
            <button 
              id="prev"
              onClick={() => this.nextProperty()} 
              disabled={property.index === 6-1}
            >&#62;</button>
            <div className={`cards-slider active-slide-${property.index}`}>
            
              <div className="new-wrap">

                <div className="cards-slider-wrapper" style={{
                    // 'transform': `translateX(-${property.index*(100/properties.length)}%)`
                    'transform': `translateX(-${property.index*455}px)`
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
              id="next"
              onClick={() => this.prevProperty()} 
              disabled={property.index === 0}
            >&#60;</button>
        </div>
      </div>
    );
  }
}

export default Slider;