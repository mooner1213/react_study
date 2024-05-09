import React from 'react';
import Header from './Header';
import SignUp from './Signup';
import Checkbox from './Checkbox';
import Button from './Button';
import './App.css'

class App extends React.Component {
  state = {
      agreed: false
  };

  handleAgreeChange = (isChecked) => {
      this.setState({ agreed: isChecked });
  };

  handleSignUp = ({ username, email, password }) => {
      // 회원가입 정보를 처리하는 함수
      console.log('회원가입 정보:', { username, email, password });
      // 여기서는 간단히 콘솔에 출력만 함
  };

  render() {
      const { agreed } = this.state;

      return (
          <div className="app-container">
              <Header />
              <SignUp
                  onSignUp={this.handleSignUp}
                  username="exampleUser"
                  email="example@example.com"
              />
              <Checkbox
                  agreed={agreed}
                  onAgree={this.handleAgreeChange}
              />
              <Button />
          </div>
      );
  }
}

export default App;