import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';


const people = [
  {
    name: "GRAMATICAL STANDARD ENGLISH",
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
    name: "Q&A",
    Summary: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me \n a question that is nonsense, trickery, or has no clear answer, I will respond with  \n  Q: What is human life expectancy in the United States? \n A: Human life expectancy in the United States is 78 years.  \n Q: Who was president of the United States in 1955? \n  A: Dwight D. Eisenhower was president of the United States in 1955. \n   Q: Which party did he belong to? \n  A: He belonged to the Republican Party."
},
  {
    name: "ENGLISH TO OTHER LANGUAGES",
    Summary : "Translate this into \n 1. French, \n 2. Spanish \n  3. Japanese:"
  },
  {
    name: "PARSED UNSTRUCTURED DATA",
  Summary: "A table summarizing the fruits from Goocrux: \n\n\n There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.",
  },
  {
  name: "Classification",
  Summary: "The following is a list of companies and the categories they fall into: \n Apple, Facebook, Fedex \n Apple \n  Category",
},

{
    name: "Natural languages to python",
    Summary: " \n''' \n  1. Create a list of first names \n  2. Create a list of last names \n 3. Combine them randomly into a list of 100 full names \n''' \n",
},

{
    name: "Chat",
    Summary: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n Human: Hello, who are you?\n AI: I am an AI created by OpenAI. How can I help you today?\n Human:.... ",
},
{
    name: "More Examples",
   
},
];
const styleObj = {
    fontSize: 15
    
}
 
  
function Page() {
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [option, setOption] = React.useState(null);
  const [width, setWindowWidth] = useState(0);
  const [text, setText] = React.useState("");

  const onChange = (ev) => {
    const val = ev.target.value;
    setOption(val);

    const person = people[val];
    if (person) {
      setText(person.Summary);

const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
      }
   
    }
  };
  
  return ( 
    <>
    
     <Container fluid style={{width : "70%"}}>
      
     <Navbar bg="light" expand="lg" style={{height: "70px" , borderColor: "black" ,border : "bottom"}}>
     <img class="img-navbar" src="https://backend.dsl.sg/public/1674984782773.png" alt="logo" width={60} style={{marginleft:"1000px"}}></img>
      <Container fluid>

        <Navbar.Brand href="#"></Navbar.Brand>
       
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
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
      AI TESTER

<select value={option} onChange={onChange} style= {{marginRight:'200px' ,marginLeft :'300px' ,width :" 41%" , height :'35px',marginBottom:  '10px' , fontSize: '20px' }} defaultValue={people[1]}  >

 
   {people.map((person, index) => (
    
     <><option value={index} key={index}>
           {person.name}

       </option>
      
       </>
     
   ))}
 </select>
      </h4>
  </div>
      <div class="ml-7">
        <textarea class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="13"
  cols= "" 
  bor
  fontSize= '35px'
  placeholder= ' WRITE A TAGLINE FOR ICE-CREAM SHOP'
  value={text}
  style={styleObj}
  onChange = {(ev) => setText(ev.target.value)}
  > </textarea>

</div>
<br/>

            <div class="position-absolute top-left">
            <Button variant="primary" size="lg" onClick={handleShow}>
          SUBMIT
        </Button>
        <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>Submit</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


            </div>

    </Container>

    </>
    
    
   
     
    
   
  
       
  );
}

export default Page;
