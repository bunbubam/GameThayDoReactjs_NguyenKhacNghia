import React, {Component} from 'react';
import Clothing1 from './images/trangphuc1.png';
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
        clothing : "",
        id : "",

    }
    onClick(event) {
        changeClothing = (imgs) => {
            return(
                this.setState({
                    clothing : imgs
                })
            )
        }
        changeIdClothing = (ids) => {
            return(
                this.setState({
                    id : ids
                })
            )
        }
    }
    render() {
        return(
            <div className='container-fluid'>
                <div className='dress-main'>
                    <div className='row'>
                        <div className='col-12 col-xl-6 block-left d-flex flex-direction-row justify-content-center'>
                            <div className='clothing-box d-flex flex-column justify-content-center pt-xl-5'>
                                <div className='clothing-flex d-flex flex-direction-row justify-content-around lign-items-baseline mb-5'>
                                    <div onClick={() => { changeClothing(Clothing1); changeIdClothing('haha');}} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc1.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing2)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc2.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing3)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc3.png')} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='clothing-flex d-flex flex-direction-row justify-content-around lign-items-baseline mb-5'>
                                    <div onClick={()=>this.changeClothing(Clothing4)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc4.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing5)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc5.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing6)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc6.png')} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='clothing-flex d-flex flex-direction-row justify-content-around lign-items-baseline mb-5'>
                                    <div onClick={()=>this.changeClothing(Clothing7)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc7.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing8)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc8.png')} className='img-fluid'/>
                                    </div>
                                    <div onClick={()=>this.changeClothing(Clothing9)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc9.png')} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='clothing-flex d-flex flex-direction-row justify-content-around lign-items-baseline'>
                                    <div onClick={()=>this.changeClothing(Clothing10)} className='clothing-item d-flex flex-direction-row justify-content-center align-items-center'>
                                        <img src={require('./images/trangphuc_mini/trangphuc10.png')} className='img-fluid'/>
                                    </div>
                                </div>                                                         
                            </div>
                        </div>
                        <div className='col-12 col-xl-6 block-right position-relative d-flex flex-direction-row justify-content-center'>
                            <div className='girl'>
                                <img src={require('./images/girl.png')} className='girl-main img-fluid'/>
                                <img src={this.state.clothing} id={this.state.id} className='clothing-main img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Dress;