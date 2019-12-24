import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Certifications from './certifications';
import Skills from './skills';
import me from '../img/me.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={me}
                alt="me"
                style={{height: '450px', float: 'left'}}
                
                 />
            </div> 
            <h2 style={{paddingTop: '4em', textDecoration: 'none', color: 'black', fontFamily: 'Montserrat', fontSize: '30px'}}>JEFF RAMSEY</h2>
            <h4 style={{color: 'grey', textDecoration: 'none', fontFamily: 'Montserrat', fontSize: '22px'}}>Designer / Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Web Developer with experience in JavaScript, HTML/CSS, ReactJS, and NodeJS who is looking to secure a position in a creative and dynamic work environment where I can apply my skills in graphic design and web development.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>918 Country Club Cir, 71055</p>
            <h5>Phone</h5>
            <p>(318) 268-8524</p>
            <h5>Email</h5>
            <p>jefferydramsey@icloud.com</p>
            <h5>LinkedIn</h5>
            <p>linkedin.com/in/jeff--ramsey</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Louisiana State University Shreveport"
              schoolDescription="Bachelor's of Computer Science"
               />

               <Education
                 startYear={2010}
                 endYear={2012}
                 schoolName="Bossier Parish Community College"
                 schoolDescription="Associate in Information technology"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2012}
              endYear={2019}
              jobName="IT Manager/Network Administrator"
              jobDescription="Maintained day-to-day hardware and application systems focused on providing support to local and remote staff.
              Participated in Network design and wiring for the 46,000 sq/ft facility.
              Installed and set up voice and data to be managed from a central location in the facility.
              Maintained systems and applications on the network, as well as installing printers, firewalls, switches, hubs, routers, wireless access points, phone systems, fax machines, and video projectors."
              />

              <Experience
                startYear={2012}
                endYear={2012}
                jobName="Internship"
                jobDescription="Accompanied field techs to schools all throughout Bossier parish filling out work orders from teachers, faculty, and staff. 
                Implemented solutions for network problems including cable repair, wireless AP installation/ configuration, adding systems and printers to the domain, and switch replacement.
                Replaced computer hardware such as motherboards, processors, graphics cards, NICs, and hard drives. Participated in helping to image new machines for students to use."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
                      <Skills
                      skill="Photoshop"
                      progress={100} />
                      <Skills
                      skill="Illustrator"
                      progress={100} />
                      <Skills
                      skill="Indesign"
                      progress={70} />
                      <Skills
                      skill="Adobe Premiere Pro"
                      progress={90} />
                      <Skills
                      skill="Adobe After Effects"
                      progress={70} />
                      <Skills
                      skill="Dreamweaver"
                      progress={50} />

                      <hr style={{borderTop: '3px solid #e22947'}} />

                      <h2>Certifications</h2>

                      <Certifications
                        startYear={2012}
                        endYear={2015}
                        schoolName="CompTIA Network +"
                        />

                      <Certifications
                        startYear={2012}
                        endYear={2015}
                        schoolName="CompTIA Security +"
                        />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
