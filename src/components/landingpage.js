import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../img/me.png';
import Me from '../img/Me.jpg';


class Landing extends Component {
  render() {
    return(
    
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/*<img
              src={me}
              alt="me"
              className="avatar-img"
            />*/}

            <div className="banner-text">
              <br/>
              
              <h1>DESIGNER / DEVELOPER</h1>

            <hr/>

         
         {/* <p>HTML/CSS | Bootstrap | JavaScript | ReactJS | NodeJS | Express | Java</p> */}

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/jeff--ramsey" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/jefferydramsey" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* instagram */}
          <a href="https://www.instagram.com/jefframsey_/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com/jeff.ramsey.35513" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-official" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    
      
    )
  }
}

export default Landing;
