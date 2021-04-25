import FacebookLogin from 'react-facebook-login';

const FacebookLoginProvider = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (<FacebookLogin
        textButton="Continue with Facebook"
        size="small"
        icon="fa-facebook"
        cssClass="my-facebook-button-class"
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook} />);
}

export default FacebookLoginProvider;