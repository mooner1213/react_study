import React from 'react';
import './Signup.css'; // SignUpForm.css 파일 import

class Signup extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        this.props.onSignUp({ username, email, password });
    };

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="inputField"
                />
                                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="inputField"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="inputField"
                />

                <button type="submit" className="submit-button">중복 확인</button>
            </form>
        );
    }
}

export default Signup;
