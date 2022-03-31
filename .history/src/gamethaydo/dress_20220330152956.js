import React, {Component} from 'react';
import Girl from './images/girl.png';
import Clothing1 from './images/menu.png';
import Clothing2 from './images/trangphuc2.png';
import Clothing3 from './images/trangphuc3.png';
import Clothing4 from './images/trangphuc4.png';
import Clothing5 from './images/trangphuc5.png';
import Clothing6 from './images/trangphuc6.png';
import Clothing7 from './images/trangphuc7.png';
import Clothing8 from './images/trangphuc8.png';
import Clothing9 from './images/trangphuc9.png';
import Clothing10 from './images/trangphuc10.png';

class Dress extends Component {
    state = {
        girl : Girl,
        clothing : Girl

    }
    changeClothing = (imgs) => {
        return(
            this.setState({
                clothing : imgs
            })
        )
    }
    render() {
        return(
            <div className='container-fluid'>
                <div className='dress-main'>
                    <div className='row'>
                        <div className='col-12 col-xl-6 block-left'>
                            <div className='clothing-box ml-md-5'>
                                <div className='row'>
                                    <div className='col-12 col-xl-4'>
                                        <img onClick={()=>this.changeClothing(Clothing1)} src='public/assets/947.jpg' className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-xl-6 block-right position-relative'>
                            <div className='girl'>
                                <img src={this.state.girl} className='img-fluid'/>
                                <img src={this.state.clothing} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Dress;