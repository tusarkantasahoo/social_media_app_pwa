import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import img from "../../../assets/images/check.png"
export default class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: "item #1" },
        { id: 2, title: "item #2" },
        { id: 3, title: "item #3" },
        { id: 4, title: "item #4" },
        { id: 5, title: "item #5" },
      ],
    };
  }


  render() {
    const breakpoints = [{
        width:1200,itemsToShow:4
    }]
    const { items } = this.state;
    return (
      <>
        <div class="container">
          <Carousel breakPoints = {breakpoints}>
            {items.map((item) => (
                <>
              <div key={item.id}>{item.title}</div><br></br>
              <div>
              <img  src={img} style={{height:"10em",width:"5em"}} ></img>
              </div>
              
              </>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}
