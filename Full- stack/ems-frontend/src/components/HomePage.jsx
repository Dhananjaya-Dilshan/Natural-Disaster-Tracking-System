import React from "react";

const HomePage = () => {
  return (
    <div>
      <video
        className="img-fluid"
        width="100%"
        autoPlay
        muted
        style={{
          position: "fixed",
          zIndex: "-1",
          top: "0",
          left: "0",
        }}
      >
        <source src="\Natural Disaster Compilation.mp4" type="video/mp4" />
      </video>
      <img
    src="logo.png"
    alt="logo"
    style={{
      position: "absolute",
      top: "500px",
      right: "300px",
      width: "800px", 
      zIndex: "1", 
    }}
  />
      <br />
      <br />
      <br />
      <div
        style={{
          marginTop: "80vh", 
          position: "relative",
          zIndex: "1",
        }}
      ></div>
      <h1 className="col text-center display-4"  style={{
          color:"white"
        }}><b>Worst natural disasters over the last 100 years</b>
      
      </h1>

      <div
        style={{
          padding: "20px",
          
          
        }}
      >
        <div
          className="container-fluid rounded-bottom-1 border border-4shadow p-3 mb-5 rounded mx-auto"
          style={{
            fontFamily: "Cabin, sans-serif",
            fontSize: "20px",
            padding: "200px",
            backgroundColor: "rgba(0, 0, 0, 0)", 
             
             backdropFilter: "blur(50px)",
          }}
        >
          <div className="row">
            <div className="col-md-6  text-white">
              <div className="container ">
              <h3 ><b>Indian Ocean Earthquake and Tsunami, December 26, 2004</b></h3>
              <p>
              On December 26 2004, a disastrous earthquake with a magnitude of 9.1 on the Richter scale struck just off the west coast of Sumatra in Indonesia in the Indian Ocean and provoked a massive tsunami that hit 12 countries in South Asia and East Africa, traveling at a speed of around 800 km/h and generating waves as high as 30 meters. Due to its speed, people had little time to escape the areas in danger.
              </p>
              <br/>
              <p>
              Within 15 to 20 minutes after the earthquake, the first massive waves from the Indian Ocean tsunami hit Banda Aceh, an Indonesian city that was home to some 300,000 people.
              </p>
              </div>
            </div>
            <div className="col-md-6 text-white">
              <img
                src="./TsunamiSriLanka.jpg"
                alt="pic1"
                className="img-fluid"
                style={{
                  paddingTop: "10px",
                  width: "1000px",
                }}
              />
            </div>
          </div>
        </div>

        <div
         className="container-fluid rounded-bottom-1 border border-4shadow p-3 mb-5 rounded mx-auto"
         style={{
           fontFamily: "Cabin, sans-serif",
           fontSize: "20px",
           padding: "200px",
           backgroundColor: "rgba(0, 0, 0, 0)", 
            
            backdropFilter: "blur(50px)",
         }}
        >
          <div className="row">
            <div className="col-md-6 text-white">
              <img
                src="./Fierro_DSC_0044_141_resize_2sm.jpg"
                alt="pic1"
                className="img-fluid"
                style={{
                  paddingTop: "10px",
                  width: "1000px",
                }}
              />
            </div>
            <div className="col-md-6 text-white">
            <div className="container ">
              <h3><b>Haiti Earthquake, January 12, 2010</b></h3>
              <p>
              One of the deadliest earthquakes ever registered struck the small island country of Haiti in January 2010. With a magnitude of 7.0 on the Richter scale, the earthquake’s epicenter was 25 km from the capital of Port-au-Prince. The disaster left Haiti facing high levels of damage, fatalities, and casualties. The Caribbean had not seen an earthquake like this in about two centuries.
              </p>
              <br/>
              <p>
              The Caribbean had not seen an earthquake of this magnitude in about two centuries and with a death toll estimated to be between 100,000 and 316,000, this was the most lethal earthquake since 1900. Around 80% of the nation’s schools and 60% of its hospitals were turned to rubble.
              </p>
              </div>
            </div>
          </div>
        </div>


        <div
          className="container-fluid rounded-bottom-1 border border-4shadow p-3 mb-5 rounded mx-auto"
          style={{
            fontFamily: "Cabin, sans-serif",
            fontSize: "20px",
            padding: "200px",
            backgroundColor: "rgba(0, 0, 0, 0)", 
             
             backdropFilter: "blur(50px)",
          }}
        >
          <div className="row">
            <div className="col-md-6 text-white text-white">
            <div className="container ">
              <h3><b>Cyclone Nargis, Myanmar. May 2-3, 2008</b></h3>
              <p>
              This category 3 cyclone had a serious impact on Myanmar including its largest city Yangon and was also responsible for landfall in the Ayeyarwady Division. The ecology of the Ayeyarwady and Yangon Divisions, regions where local livelihoods are strongly dependent on natural resources, was devastated by Cyclone Nargis.
              </p>
              <br/>
              <p>
              The cyclone had an enormous effect on more than 50 townships and, according to the United Nations, it affected around 2.4 million people. Over 140,000 people lost their lives, mostly as a result of the storm surge.
              </p>
              </div>
            </div>
            <div className="col-md-6 text-white">
              <img
                src="./unnamed.jpg"
                alt="pic1"
                className="img-fluid"
                style={{
                  paddingTop: "10px",
                  width: "1000px",
                }}
              />
            </div>
          </div>
        </div>

        <div
         className="container-fluid rounded-bottom-1 border border-4shadow p-3 mb-5 rounded mx-auto"
         style={{
           fontFamily: "Cabin, sans-serif",
           fontSize: "20px",
           padding: "200px",
           backgroundColor: "rgba(0, 0, 0, 0)", 
            
            backdropFilter: "blur(50px)",
         }}
        >
          <div className="row">
            <div className="col-md-6 text-white">
              <img
                src="./_85950760_85950759.jpg"
                alt="pic1"
                className="img-fluid"
                style={{
                  paddingTop: "10px",
                  width: "1000px",
                }}
              />
            </div>
            <div className="col-md-6 text-white">
            <div className="container ">
              <h3><b>Kashmir Earthquake, Pakistan, India, Afghanistan. October 8, 2005</b></h3>
              <p>
              The 2005 Kashmir earthquake, also known as the South Asia earthquake, occurred on October 8, 2005, at 08:50:39 Pakistan Standard Time, in Azad Jammu and Kashmir, a territory under Pakistan. The earthquake had a magnitude of 7.6 and affected parts of Pakistan, India, and Afghanistan. The epicenter was 90 km north-northeast of Islamabad. The heaviest damage occurred in the Muzaffarabad area, where entire villages were destroyed, and at Uri, where 80 percent of the town was destroyed.
              </p>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default HomePage;
