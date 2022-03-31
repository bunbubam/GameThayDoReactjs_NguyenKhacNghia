import React, {Component} from 'react';
import Girl from './images/girl.png';

class Dress extends Component {
    state = {
        img : Girl
    }
    render() {
        return(
            <div className='container-fluid'>
                <div className='dress-main'>
                    <div className='row'>
                        <div className='col-12 col-xl-6'>
                            
                        </div>
                        <div className='col-12 col-xl-6 block-right'>
                            <div className='girl'>
                                <img src={this.state.img}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Dress;