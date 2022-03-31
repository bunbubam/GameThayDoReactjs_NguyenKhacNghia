import React, {Component} from 'react';
import Girl from './images/girl.png';

class Dress extends Component {
    state = {
        img : Girl
    }
    render() {
        return(
            <div>
                <img src={this.state.img} className="img-fluid" />
            </div>
        )
    };
}
export default Dress;