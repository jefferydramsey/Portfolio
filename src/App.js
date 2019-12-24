import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '30px'}} to="/">JEFF RAMSEY</Link>} scroll>
            <Navigation>
                {/*<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '14px'}}to="/aboutme">About Me</Link>*/}
                <Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '14px'}}to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '14px'}}to="/portfolio">Portfolio</Link>
                {/*<Link to="/projects">Projects</Link>*/}
                <Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '14px'}}to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Montserrat', fontSize: '22px'}} to="/">JEFF RAMSEY</Link>}>
            <Navigation>
              {/*<Link style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}to="/aboutme">About Me</Link>*/}
              <Link style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}to="/resume">Resume</Link>
              <Link style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}to="/portfolio">Portfolio</Link>
              <Link style={{textDecoration: 'none', color: 'grey', fontFamily: 'Montserrat', fontSize: '14px'}}to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
