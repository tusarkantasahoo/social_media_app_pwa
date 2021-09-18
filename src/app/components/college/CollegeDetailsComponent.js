import React, { useRef, useState, Component } from "react";





export default class CollegeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };


    
  }
  




  


  render() {
      console.log(this.props);

    var currentSelection = this.props.currentSelection;
    var details = this.props.collegeDetails;
    if(currentSelection==="info"){
        return (
            <>
              <div className="container">
                {/* <p>{details.info}</p> */}
                
    <div class="col-md-12">
    <div class="row">
    <div class="col-md-3" style={{boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '621px'}}>
    <div style={{
      textAlign:"center"
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
        <div style={{backgroundColor:"aliceblue"}}>
        <marquee direction = "up" scrollamount="2" height="300px">


      
        <ul>
  <li>Wellcone to the site</li>
  <li>welcome to the website and have a nice day</li>
  
</ul>  
        </marquee>
        </div>
      </section>
    </div>
   

   </div>
   <div class="col-md-9">
   

   <div style={{boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '142px'}}>
        <div className="col-md-5" style={{marginLeft:'13px',color: 'rgb(75, 79, 86)', fontFamily: 'Helvetica, Arial, sans-serif'}}>
        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" style={{borderStyle: 'none', maxWidth: '100%', height: '48px', width: '48px',borderRadius:'50%'}} />
        <span style={{fontSize: '14px', textAlign: 'justify',paddingLeft:'1px'}}>Sadepta Gartia</span>
        <span className="tools_comment" style={{fontSize: '12px', lineHeight: '1.358'}}>
        <span aria-hidden="true" style={{color: 'rgb(144, 148, 156)'}}>·&nbsp;</span><span className="fa fa-thumbs-o-up" style={{WebkitFontSmoothing: 'antialiased', display: 'inline-block', fontVariantNumeric: 'normal', fontVariantEastAsian: 'normal', textRendering: 'auto', lineHeight: 1, fontFamily: 'FontAwesome', fontStretch: 'normal', fontSize: 'inherit'}} />&nbsp;<span className="count" style={{color: 'rgb(144, 148, 156)'}}>1</span>&nbsp;
        <span aria-hidden="true" style={{color: 'rgb(144, 148, 156)'}}>·&nbsp;</span>
        <span style={{color: 'rgb(144, 148, 156)'}}>26m</span>&nbsp;<i data-visualcompletion aria-label="Shared with Public" role="img" style={{backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/kK7qpUOzQMZ.png")', backgroundPosition: '0px -764px', backgroundSize: '26px 904px', width: '12px', height: '12px', backgroundRepeat: 'no-repeat', display: 'inline-block'}} />
        </span>



        </div>
        <div className="col-md-11" style={{marginLeft:'13px',width: '936.825px', padding: '0px', WebkitBoxFlex: 0, flex: '0 0 91.6667%', maxWidth: '91.6667%', overflow: 'hidden', color: 'rgb(75, 79, 86)', fontFamily: 'Helvetica, Arial, sans-serif'}}>
        
        <p style={{marginTop: '4px', marginBottom: '4px', color: 'rgb(75, 79, 86)', fontSize: '14px', textAlign: 'justify'}}>Dr. Laetitia Dablanc will present a soon-to-be published book chapter on the impact of COVID-19 on urban logistics..</p>
       
        </div>
      </div>
      <div>
        <img src="https://www.iima.ac.in/web/ctl/assets/img/event/The%20Impact%20of%20COVID-19%20on%20Urban%20Logistics.jpg" style={{height:'226px',width:'690px'}}></img>
      </div>
   
   <div style={{boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '300px'}}>
       <div class="row">
       <div className="card" style={{width: '14rem'}}>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/premium_hub/bscs-uol.jpg?auto=compress&dpr=1&w=270&fit=crop" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card" style={{width: '14rem'}}>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bsc-marketing-london/bsc-marketing-london-banner.jpg?auto=compress&dpr=1&w=270&fit=crop" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card" style={{width: '14rem'}}>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bsc-marketing-london/bsc-marketing-london-banner.jpg?auto=compress&dpr=1&w=270&fit=crop" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
       </div>
  
       
      </div>
      <div style={{boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '300px'}}>
      <div className="company_profile_info">
        <div className="company-up-info"><div className="companies-list" style={{ float: 'left'}}><div className="row" style={{margin: '0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'flex', flexWrap: 'wrap'}}>
        <div className="col-lg-5 col-md-5 col-sm-5 col-12" style={{width:'45.666667%'}} ><div className="company_profile_info" style={{ width: '247.5px', backgroundColor: 'rgb(232 220 220)', textAlign: 'center'}}><div className="company-up-info" ><img src="https://gambolthemes.net/workwise-new/images/resources/pf-icon1.png" alt=""  /><h3 style={{marginTop: '0px', marginRight: '0px', marginLeft: '0px', padding: '0px', fontWeight: 600, lineHeight: 'inherit', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', verticalAlign: 'baseline', color: 'rgb(0, 0, 0)'}}>John Doe</h3><h4 style={{margin: '0px 0px 21px', padding: '0px', lineHeight: 'inherit', fontSize: '14px', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', verticalAlign: 'baseline', color: 'rgb(104, 104, 104)'}}>Graphic Designer</h4><ul style={{marginRight: '0px', marginBottom: '0px', marginLeft: '0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', listStyle: 'none', float: 'left', width: '245.5px'}}><li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}><a href="#" title className="follow" style={{margin: '0px', padding: '0px 12px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(83, 214, 144)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontWeight: 'inherit', fontStretch: 'inherit', fontSize: 'inherit', lineHeight: '35px', fontFamily: 'inherit', verticalAlign: 'baseline', borderRadius: '3px', display: 'inline-block', height: '35px'}}>Message</a></li>&nbsp;<li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}></li>&nbsp;<li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}><a href="#" title className="hire-us" style={{margin: '0px', padding: '0px 12px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(81, 165, 251)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontWeight: 'inherit', fontStretch: 'inherit', fontSize: 'inherit', lineHeight: '35px', fontFamily: 'inherit', verticalAlign: 'baseline', borderRadius: '3px', display: 'inline-block', height: '35px'}}>Chart</a></li></ul></div><a href="#" title className="view-more-pro" style={{margin: '0px', padding: '18px 0px', color: 'rgb(0, 0, 0)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', fontSize: '16px', lineHeight: 'inherit', fontFamily: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}></a></div></div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-12" style={{width:'45.666667%'}}   ><div className="company_profile_info" style={{width: '247.5px', backgroundColor: 'rgb(232 220 220)', textAlign: 'center'}}><div className="company-up-info" ><img src="https://gambolthemes.net/workwise-new/images/resources/pf-icon2.png" alt=""  /><h3 style={{marginTop: '0px', marginRight: '0px', marginLeft: '0px', padding: '0px', fontWeight: 600, lineHeight: 'inherit', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', verticalAlign: 'baseline', color: 'rgb(0, 0, 0)'}}>John Doe</h3><h4 style={{margin: '0px 0px 21px', padding: '0px', lineHeight: 'inherit', fontSize: '14px', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', verticalAlign: 'baseline', color: 'rgb(104, 104, 104)'}}>Graphic Designer</h4><ul style={{marginRight: '0px', marginBottom: '0px', marginLeft: '0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', listStyle: 'none', float: 'left', width: '245.5px'}}><li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}><a href="#" title className="follow" style={{margin: '0px', padding: '0px 12px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(83, 214, 144)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontWeight: 'inherit', fontStretch: 'inherit', fontSize: 'inherit', lineHeight: '35px', fontFamily: 'inherit', verticalAlign: 'baseline', borderRadius: '3px', display: 'inline-block', height: '35px'}}>Message</a></li>&nbsp;<li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}></li>&nbsp;<li style={{margin: '0px 6px 0px 0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}><a href="#" title className="hire-us" style={{margin: '0px', padding: '0px 12px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(81, 165, 251)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontWeight: 'inherit', fontStretch: 'inherit', fontSize: 'inherit', lineHeight: '35px', fontFamily: 'inherit', verticalAlign: 'baseline', borderRadius: '3px', display: 'inline-block', height: '35px'}}>Chart</a></li></ul></div><a href="#" title className="view-more-pro" style={{margin: '0px', padding: '18px 0px', color: 'rgb(0, 0, 0)', border: '0px', fontStyle: 'inherit', fontVariant: 'inherit', fontStretch: 'inherit', fontSize: '16px', lineHeight: 'inherit', fontFamily: 'inherit', verticalAlign: 'baseline', display: 'inline-block'}}></a></div></div>
        </div></div></div></div>
      </div>
     
     
</div>
   <div></div>
   </div>
    </div>

 
              </div>
            </>
          );
    }

    else if(currentSelection==="courses&fees"){
        return (
            <>
              <div className="container">
                <p>{details.coursesAndFees}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="admission"){
        return (
            <>
              <div className="container">
                <p>{details.admission}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="review"){
        return (

          
            <>
              <div className="container">
                {/* <p>{details.review}</p> */}
                <div className="col-md-12">
                <div className="row">

                
                <div class="col-md-3" style={{boxShadow: 'rgb(219, 216, 215) 0px 2px 3px', height: '621px'}}>
    <div style={{
      textAlign:"center"
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
        <div style={{backgroundColor:"aliceblue"}}>
        <marquee direction = "up" scrollamount="2" height="300px">


      
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
    else if(currentSelection==="cutoff"){
        return (
            <>
              <div className="container">
                <p>{details.cutoff}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="placement"){
        return (
            <>
              <div className="container">
                <p>{details.placements}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="gallary"){
        return (
            <>
              <div className="container" style={{display:"flex",flexWrap: "wrap" }}>
                {details.img!==null&&details.img!==undefined?(<img src={details.img}></img>):null}
                {details.img!==null&&details.img!==undefined?(<img src={details.logo}></img>):null}
                {details.img!==null&&details.img!==undefined?(<img src={details.banner}></img>):null}
              </div>
            </>
          );
    }
    else if(currentSelection==="faculty"){
        return (
            <>
              <div className="container">
                <p>{details.facilities}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="hostel"){
        return (
            <>
              <div className="container">
                <p>{details.facilities}</p>
              </div>
            </>
          );
    }
    else {return null}



  }
}
