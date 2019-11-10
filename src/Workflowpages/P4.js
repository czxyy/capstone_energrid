import React, {Component} from 'Workflowpages/node_modules/react';
import Navbar from '../Navbar';


class P4 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 4</h2>
                <p><b>Connect your inverter to your batteries.</b> If you live in an area where AC power is used, you'll need to connect your batteries to an inverter, which converts the DC current created by the panels into usable AC power. You can then connect your inverter to your main power supply or connect your appliances to the batteries directly, depending on the type you got. If using AC batteries, connect the inverter to the panels directly and then the invert to the charge controller.</p>
            </div>
        )
    }

}

export default P4;