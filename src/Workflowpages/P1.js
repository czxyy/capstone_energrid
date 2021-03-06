import React, {Component} from 'Workflowpages/node_modules/react';
import { Button } from 'Workflowpages/node_modules/react-bootstrap';
import { Link } from 'Workflowpages/node_modules/react-router-dom';
import Navbar from '../Navbar';

class P1 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 1</h2>
                <p><b>Install the solar panels.</b> Once you're ready to start, install the solar panels. Choose the best type of panel for you and get enough of the to produce the amount of power you need. This is another area where a professional (or at least an expert) can be really helpful, as there is a lot of math involved in figuring out the necessary number of panels.</p>
                <Link to="WorkflowPages/P2"><Button>Next</Button></Link>
            </div>
        )
    }

}

export default P1;