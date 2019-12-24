import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import emoji from '../img/emoji.png';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>JEFF RAMSEY</h2>
            <img
              src={emoji}
              alt="avatar"
              style={{height: '400px'}}
               />
             {/*<p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>*/}

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (318) 268-8524
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    jefferydramsey@icloud.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    linkedin.com/in/jeff--ramsey
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-facebook-official" aria-hidden="true"/>
                    facebook.com/jeff.ramsey.35513
                  </ListItemContent>
                </ListItem>





              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
