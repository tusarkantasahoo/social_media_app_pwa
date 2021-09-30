import React, { useRef, useState, Component } from "react";
import banner from "./banner.jpg";
import logo from "./logo.jpg";
import CollegePosts from "./CollegePosts.js";
import {getCollegePosts} from "../../api/Api.js";
export default class CollegeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegePosts:[]
    };
  }

  render() {
    var collegePosts = [{ title: "pace is full of surprises and wonders. The beauty is unparalleled and sometimes we come across such a beauty that we can't help but be mesmerised and ascribe some meaning to the resplendent celestial structure.Trust NASA to send such pictures our way! The space agency regularly posts photos it clicks via its social media channels. And on of its photos has us go gaga again.", img: banner }, { title: "Upcoming batch next month", img: logo }]
    console.log("Inside College Details component", this.props);

    var currentSelection = this.props.currentSelection;
    var details = this.props.collegeDetails;
    if (currentSelection === "info") {
      return (
        <>
          <div className="container-fluid" style={{ display: "flex" }}>
            
            <div>
       <p style={{fontSize:"2em",fontWeight:"400"}}>Posts</p>


              {/* <div style={{ boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '142px' }}> */}
                {this.state.collegePosts.map((item, id) => {
                  return (<CollegePosts handelNewsClick={this.props.handelNewsClick} item={item} />)
                })}


              {/* </div> */}

            </div>

            <div>
              <div style={{
                textAlign: "center", width: "20em"
              }}>

                <h3 className="block-title" style={{
                  background: "-webkit-linear-gradient(top, #3a96ce, #266184)",
                  color: "#ffffff"
                }}>About</h3>



                {/* <marquee direction = "up" scrollamount="2" height="300px">
<h5>{details.ranking}</h5>
</marquee> */}
              </div>
              <div style={{

              }}>
                <p style={{ fontSize: "15px", marginLeft: "1em", fontWeight: "bold" }}>Type : {details.collegeType}</p>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "15px", marginLeft: "1em", fontWeight: "bold" }}>
                    Contact
                  </p>
                  <p style={{ fontSize: "15px", color: "#1da1f2", marginLeft: "1em" }}>{details.contact}</p>
                </div>

                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "15px", marginLeft: "1em", fontWeight: "bold" }}>
                    Email
                  </p>
                  <p style={{ fontSize: "15px", color: "#1da1f2", marginLeft: "1em" }}>{details.email}</p>
                </div>

                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "15px", marginLeft: "1em", fontWeight: "bold" }}>
                    Website
                  </p>
                  <p style={{ fontSize: "15px", color: "#1da1f2", marginLeft: "1em" }}>{details.website}</p>
                </div>
              </div>
            </div>


          </div>




        </>
      );
    }

    else if (currentSelection === "courses&fees") {
      return (
        <>
          <div className="container">
            <p>{details.courseAndFees}</p>
          </div>
        </>
      );
    }
    else if (currentSelection === "admission") {
      return (
        <>
          <div className="container">
            <p>{details.admission}</p>
          </div>
        </>
      );
    }
    else if (currentSelection === "review") {
      return (


        <>
          <div className="container">
            {/* <p>{details.review}</p> */}
            <div className="col-md-12">
              <div className="row">


                <div class="col-md-3" style={{ boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '621px' }}>
                  <div style={{
                    textAlign: "center"
                  }}>
                    <h4>Ranked 1 Business School</h4>
                  </div>

                  <div style={{

                  }}>

                    <ul><a href="#">affiliation</a></ul>
                    <ul><a href="#">Foundation</a></ul>
                    <ul><a href="#">Nature</a></ul>
                    <ul><a href="#">Address</a></ul>
                    <ul><a href="#">079-987-878</a></ul>
                    <section id="block-views-whats-new-block-2">
                      <h3 className="block-title" style={{
                        background: "-webkit-linear-gradient(top, #3a96ce, #266184)",

                        color: "#ffffff"

                      }}>Notice Board</h3>
                      <div style={{ backgroundColor: "aliceblue" }}>
                        <marquee direction="up" scrollamount="2" height="300px">



                          <ul>
                            <li>Wellcone to the site</li>
                            <li>welcome to the website and have a nice day</li>

                          </ul>
                        </marquee>
                      </div>
                    </section>
                  </div>


                </div>
                <div className="col-md-9">

                  <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
                    {/* Controls */}

                    {/* Inner */}
                    <div className="carousel-inner py-4">
                      {/* Single item */}
                      <div className="carousel-item active">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="card">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/181.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                  </p>

                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                              <div className="card">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                  </p>

                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                              <div className="card">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/183.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    {/* Inner */}
                  </div>


                </div>
              </div>

            </div>

          </div>
        </>
      );
    }
    else if (currentSelection === "cutoff") {
      return (
        <>
          <div className="container">
            <p>{details.cutoff}</p>
          </div>
        </>
      );
    }
    else if (currentSelection === "placement") {
      return (
        <>
          <div className="container">
            <p>{details.placements}</p>
          </div>
        </>
      );
    }
    else if (currentSelection === "gallary") {
      return (
        <>
          <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
            {details.img !== null && details.img !== undefined ? (<img src={details.img}></img>) : null}
            {details.img !== null && details.img !== undefined ? (<img src={details.logo}></img>) : null}
            {details.img !== null && details.img !== undefined ? (<img src={details.banner}></img>) : null}
          </div>
        </>
      );
    }
    else if (currentSelection === "faculty") {
      return (
        <>
          <div className="container">
            <p>{details.facilities}</p>
          </div>
        </>
      );
    }
    else if (currentSelection === "hostel") {
      return (
        <>
          <div className="container">
            <p>{details.facilities}</p>
          </div>
        </>
      );
    }

    else if (currentSelection === "collegepost") {
      return (
        <>
          <div className="container">
            <p>Add post</p>
            Title<input></input>
            Image

            Description<input></input><br></br>
            <button>Submit  </button>
          </div>
        </>
      );
    }
    else { return null }



  }
  async componentDidMount(){
    var postJson ={
      "collegeid":"614f15898769c3a13c32a344"
    }
    var collegePosts = await getCollegePosts(postJson)
    if(collegePosts.status === 200){
      console.log("College post response",collegePosts)
      this.setState({collegePosts:collegePosts.data.response})
    }
    
  }
}
