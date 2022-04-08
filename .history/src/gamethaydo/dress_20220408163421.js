import React, {Component} from 'react';
import ChildDress from './childDress';
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
import Clothing11 from './images/trangphuc_mini/trangphuc1.png';
import Clothing12 from './images/trangphuc_mini/trangphuc2.png';
import Clothing13 from './images/trangphuc_mini/trangphuc3.png';
import Clothing14 from './images/trangphuc_mini/trangphuc4.png';
import Clothing15 from './images/trangphuc_mini/trangphuc5.png';
import Clothing16 from './images/trangphuc_mini/trangphuc6.png';
import Clothing17 from './images/trangphuc_mini/trangphuc7.png';
import Clothing18 from './images/trangphuc_mini/trangphuc8.png';
import Clothing19 from './images/trangphuc_mini/trangphuc9.png';
import Clothing20 from './images/trangphuc_mini/trangphuc10.png';

class Dress extends Component {
    listArray = {
        itemClothings: [
            {classClothing: "Clothing1", avatar: Clothing11, img: Clothing1},
            {classClothing: "Clothing2", avatar: Clothing12, img: Clothing2},
            {classClothing: "Clothing3", avatar: Clothing13, img: Clothing3},
            {classClothing: "Clothing4", avatar: Clothing14, img: Clothing4},
            {classClothing: "Clothing5", avatar: Clothing15, img: Clothing5},
            {classClothing: "Clothing6", avatar: Clothing16, img: Clothing6},
            {classClothing: "Clothing7", avatar: Clothing17, img: Clothing7},
            {classClothing: "Clothing8", avatar: Clothing18, img: Clothing8},
            {classClothing: "Clothing9", avatar: Clothing19, img: Clothing9},
            {classClothing: "Clothing10", avatar: Clothing20, img: Clothing10}
        ]
    }
    render() {
        return(
            <div className='container-fluid'>
                <div className='dress-main'>
                    <ChildDress fatherProps={this.listArray}/>
                </div>
            </div>
        )
    };
}
export default Dress;