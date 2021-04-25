import AppleLogin from 'react-apple-login'

const AppleLoginProvider = () => {
    return (<AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />);
}

export default AppleLoginProvider;