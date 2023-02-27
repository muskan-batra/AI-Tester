import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const people = [
  {
    name: "Gramatical Standard English",
    Summary: "Correct this to standard English: She no went to the market.",
  },
  {
    name: "Summarize for second Grader",
    Summary : "Summarize this for a second-grade student: Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."
  },
  {
    name: "Text To Command",
  Summary: "Convert this text to a programmatic command: Example: Ask Constance if we need some bread  Output: send-msg `find constance` Do we need some bread? Reach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
  },
  {
    name: "Gramatical Standard English",
    Summary: "Correct this to standard English: She no went to the market.",
  },
  {
    name: "Summarize for second Grader",
    Summary : "Summarize this for a second-grade student: Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."
  },
  {
    name: "Text To Command",
  Summary: "Convert this text to a programmatic command: Example: Ask Constance if we need some bread  Output: send-msg `find constance` Do we need some bread? Reach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
  },
];

 
  
function Page() {
 
  const [option, setOption] = React.useState(null);
  const [text, setText] = React.useState("");

  const onChange = (ev) => {
    const val = ev.target.value;
    setOption(val);

    const person = people[val];
    if (person) {
      setText(person.Summary);
   
    }
  };
  
  return ( 
    <>
    
     <Container fluid style={{width : "70%"}}>
      
     <Navbar bg="light" expand="lg" style={{height: "70px" , borderColor: "black" ,border : "bottom"}}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><img class="img-navbar" src="https://backend.dsl.sg/public/1674984782773.png" alt="logo" width={70 } style={{marginRight:"30px"}}></img>
           <NavDropdown.Divider />
               </Nav>
          <Form className="d-flex">
          
          </Form>
        </Navbar.Collapse>
       
       
      </Container>
    </Navbar>
    <hr/>
   <div className='page-header'>
    <h4 class="pg-page-title" style={{marginTop: "40px" }}>
      AI Tester

<select value={option} onChange={onChange} style= {{marginLeft :'450px' , height :'35px',marginBottom:  '10px' ,  size:"1rem"}}  >



 <option selected disabled hidden>
 
 Load a Preset
 </option>
 
   {people.map((person, index) => (
    
     <option value={index} key={index}>
       {person.name}
     </option>
     
   ))}
 </select>
      </h4>
  </div>
      <div class="ml-7">
        <textarea class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="15"
  cols= "" 
  bor
  placeholder= ' Write a tagline for icecream shop'
  value={text}
  onChange = {(ev) => setText(ev.target.value)}
  > </textarea>

</div>
<br/>

            <div class="position-absolute top-left">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>

    </Container>

    </>
    
    
   
     
    
   
  
       
  );
}

export default Page;