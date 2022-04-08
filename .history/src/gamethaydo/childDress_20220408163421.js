import React, { Component } from 'react';

class ChildDress extends Component {
    state = {
        clothing: this.props.fatherProps.itemClothings[0].img,
        id: this.props.fatherProps.itemClothings[0].class
    }
    changeClothing = (imgs, ids) => {
        return (
            this.setState({
                clothing: imgs,
                id: ids
            })
        )
    }
    render() {
        const arrayProps = this.props.fatherProps.itemClothings
        return (
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-7 col-xl-6 block-left d-flex flex-row justify-content-center align-items-center'>
                    <div className='clothing-box d-flex flex-column justify-content-center'>
                        <div className='row'>
                            {arrayProps.map((item, index) => {
                                return <div key={index} onClick={() => this.changeClothing(item.img, item.classClothing)} className='clothing-item d-flex flex-row justify-content-flex-start align-items-center pl-4 col-4'>
                                        <img src={item.avatar} className='img-fluid' />
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-5 col-xl-6 block-right position-relative d-flex flex-row justify-content-center align-items-center'>
                    <div className='girl'>
                        <img src={require('./images/girl.png')} className='girl-main img-fluid' />
                        <img src={this.state.clothing} id={this.state.id} className='clothing-main img-fluid' />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChildDress;
