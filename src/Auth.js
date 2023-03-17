import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export class Auth extends Component {
    state = {
        email: '',
        name: '',
        image: '',
        userID: '',

    }

    componentClicked = () => console.log('clicked');

    responseFacebook = (response) => {
        const { email, name, userID, picture } = response;

        this.setState({
            ...this.state,
            email: email,
            name: name,
            image: picture.data.url,
            userID: userID
         });
    }

    render() {
        let faceBook = '';

        const { image, email, name } = this.state;

        if (this.state.userID !== "") {
            faceBook = <div style={{ background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img src={image} alt='user' />
                            </div>
                            <h3>Welcome {name}</h3>
                            <h4>Email: {email}</h4>
                        </div>
        }else{
            faceBook = <FacebookLogin
                            appId="1228477797751042"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook}
                        />
        }

        return (
            faceBook
        )
    }
}

export default Auth;
