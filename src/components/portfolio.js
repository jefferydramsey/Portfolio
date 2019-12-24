import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import graphics1 from './graphics1';
import utunes from '../img/utunes.png';
import JS from '../img/JS.png';
import ravenous from '../img/ravenous.png';
import carhartt from '../img/carhartt.png';
import pondfish from '../img/pondfish.png';
import neverxero from '../img/neverxero.png';
import christmas from '../img/christmas.png';
import collegepromo from '../img/collegepromo.png';
import collegepromo2 from '../img/collegepromo2.png';
import logosgallery from '../img/logosgallery.png';
import NXgraphics from '../img/NXgraphics.png';
import schoolprojects from '../img/schoolprojects.png';
import portfoliosite from '../img/portfoliosite.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div> 

            <div className="portfolio-grid">
              {/* Utunes App */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={utunes} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
              
              {/*<CardTitle style={{color: '#fff', height: '176px', background: 'utunes'}} >React Project #2</CardTitle>*/}
                <CardText>
                  React app that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a href="https://github.com/jefferydramsey/Utunes" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Ravenous App */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={ravenous} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />
                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>*/}
                <CardText>
                  React app that allows users to search for restaurants using the Yelp API. Codecademy project.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a href="https://github.com/jefferydramsey/Ravenous-CodecademyProject" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Portfolio Website */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <img src={portfoliosite} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />

                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>*/}
                <CardText>
                My React based personal portfolio app using create-react-app, React MDL material design, and React Router v4.
                </CardText>
                <CardActions border>
                  <Button>
                    <a href="https://codepen.io/JeffRamsey/pen/BayLJjd" target="_blank" rel="noopener noreferrer">CodePen</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
            <br/>
            <br/>

            <div className="portfolio-grid">
              {/* calculator */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={JS} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />
                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>*/}
                <CardText>
                Pure vanilla JavaScript calculator using CSS Grid along with modern ES6 syntax and classes. 
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a href="https://codepen.io/JeffRamsey/pen/vYEXgWB" target="_blank" rel="noopener noreferrer">CodePen</a>
                    </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* tetris */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <img src={JS} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />

                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>*/}
                <CardText>
                  A basic Tetris game that I built for fun using HTML5, CSS3, and JavaScript on the codepen website.
                </CardText>
                <CardActions border>
                  <Button>
                    <a href="https://codepen.io/JeffRamsey/pen/BayLJjd" target="_blank" rel="noopener noreferrer">CodePen</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* tetris */}
              {/*<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <img src={JS} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />

                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                  <Button>
                    <a href="https://codepen.io/JeffRamsey/pen/BayLJjd" target="_blank" rel="noopener noreferrer">CodePen</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
      </Card>*/}
            </div>
         </div>





       )




       
    } else if(this.state.activeTab === 1) {
      return (
        <div className="portfolio-grid">
              {/* Logos */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={logosgallery} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
              
              {/*<CardTitle style={{color: '#fff', height: '176px', background: 'utunes'}} >React Project #2</CardTitle>*/}
                <CardText>
                  Logos I have designed using Adobe Illustrator and Photoshop
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a href="./graphics1">View</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Never Xero */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={NXgraphics} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />
                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>*/}
                <CardText>
                  Graphic design work for Never Xero ecommerce store
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a href="./graphics2">View</a>
                    </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Class Projects */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <img src={schoolprojects} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="javascript" />

                {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>*/}
                <CardText>
                  Class projects using Adobe Illustrator and Photoshop
                </CardText>
                <CardActions border>
                  <Button>
                    <a href="./graphics3">View</a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        <div className="portfolio-grid">
          {/* Carhartt Video */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={carhartt} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>*/}
            <CardText>
            Carhartt College Fishing Video Contest Submission 2017
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=lRlo7N9k_pU" target="_blank" rel="noopener noreferrer">YouTube</a>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Never Xero Video */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={neverxero} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>*/}
            <CardText>
              Instagram promo video for Never Xero ecommerce website
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=8A1xjHP8n_8" target="_blank" rel="noopener noreferrer">YouTube</a>
                </Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* College Fishing Promo */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={collegepromo} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>*/}
            <CardText>
              College fishing montage for @collegefishing instagram.
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=VlU-WU55mOg" target="_blank" rel="noopener noreferrer">YouTube</a>
                </Button>
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        <br/>
        <br/>

        <div className="portfolio-grid">
          {/* College Christmas Video */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={christmas} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>*/}
            <CardText>
            College Christmas video promo for @collegefishing Instagram
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=bcMW_sLgTUA" target="_blank" rel="noopener noreferrer">YouTube</a>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Pond Fishing Video */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={pondfish} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>*/}
            <CardText>
              Class project "video montage". Pond fishing portlandia style 
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=XYXhF3L8f_A" target="_blank" rel="noopener noreferrer">YouTube</a>
                </Button>
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* College Fishing Montage 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={collegepromo2} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="react" />
            {/*<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>*/}
            <CardText>
              Another college fishing promo montage for the @collegefishing instagram page.
            </CardText>
            <CardActions border>
              <Button colored>
              <a href="https://www.youtube.com/watch?v=5KfFAx67_Cs" target="_blank" rel="noopener noreferrer">YouTube</a>
                </Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
        </div>
      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}>Programming</Tab>
          <Tab style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}>Graphic Design</Tab>
          <Tab style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}>Videography</Tab>       
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          
          
      </div>
    )
  }
}

export default Portfolio;