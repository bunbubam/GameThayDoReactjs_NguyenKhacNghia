import React, {Component} from 'react';
import Girl from './images/girl.png';

class Dress extends Component {
    state = {
        girl : Girl
    }
    render() {
        return(
            <div className='container-fluid'>
                <div className='dress-main'>
                    <div className='row'>
                        <div className='col-12 col-xl-6'>
                            <div className='clothing'>

                            </div>
                        </div>
                        <div className='col-12 col-xl-6 block-right position-relative'>
                            <div className='girl'>
                                <img src={this.state.girl} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Dress;