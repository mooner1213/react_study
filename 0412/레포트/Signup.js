import React from 'react';
import './Signup.css'

class SignUpForm extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        usernameValid: false,
        passwordValid: false,
        emailValid: false
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            this.validateInput(name, value);
        });
    };

    validateInput = (name, value) => {
        let isValid = false;
        switch (name) {
            case 'username':
                isValid = value.length >= 5;
                this.setState({ usernameValid: isValid });
                break;
            case 'password':
                isValid = value.length >= 8;
                this.setState({ passwordValid: isValid });
                break;
            case 'email':
                isValid = /\S+@\S+\.\S+/.test(value);
                this.setState({ emailValid: isValid });
                break;
            default:
                break;
        }
    };

    render() {
        const { usernameValid, passwordValid, emailValid } = this.state;

        return (
            <div className="form-container">
                <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="inputField"
                />
                {usernameValid ? (
                    <span className="valid-text">사용 가능한 아이디입니다!</span>
                ) : (
                    <span className="invalid-text">사용 불가능한 아이디입니다.</span>
                )}
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="inputField"
                />
                {passwordValid ? (
                    <span className="valid-text">안전한 비밀번호입니다.</span>
                ) : (
                    <span className="invalid-text">비밀번호는 8자 이상이어야 합니다.</span>
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="inputField"
                />
                {emailValid ? (
                    <span className="valid-text">유효한 이메일 주소입니다.</span>
                ) : (
                    <span className="invalid-text">유효하지 않은 이메일 주소입니다.</span>
                )}
            </div>
        );
    }
}

export default SignUpForm;
