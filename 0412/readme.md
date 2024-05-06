**상태(state)**
컴포넌트 내에서 관리되는 수정가능한 데이터
랜더링 결과물에 영향을 주는 정보 / 간단히 말해, 변수이다.
리액트에서의 state는 리액트 컴포넌트의 상태를 의미한다.
시간이 지남에 따라 변하는 데이터
![image](https://github.com/mooner1213/react_study/assets/162667655/3d43566b-c402-4af0-856e-a4ed62c7a2e5)
화면은 변경 x, 하지만 count가 변경되지않은것은 아님.(f12)
일반변수 사용 -> 자동으로 재랜더링 x

![image](https://github.com/mooner1213/react_study/assets/162667655/abea10b3-71ad-447b-a405-c6c15283f7dc)
![image](https://github.com/mooner1213/react_study/assets/162667655/2f35a4c0-9195-4cde-8bc1-2aa55d66b590)
setstate는 비동기이다.

**동기**
요청 후, 응답을 받고 난 뒤, 다음동작이 이뤄짐.
순차적으로 실행 / 작업이 진행 중 이라면, 다른 작업은 대기
작업중단이 발생함.

**비동기**
작업종료 여부에 관계없이 다음작업 실행.
실행 순서를 보장하지않음.
작업중단이 발생하지않음.

setState가 비동기로 동작하는 이유?
state는 값의 변경에따라 리랜더링이 발생함.
변경되는 state가 많을수록, 리랜더링이 계속 일어나고, 속도 저하 발생
성능적으로 문제가 많이 발생하기 때문.

**16ms**동안 변경된 상태값을 모아, 한번에 리랜더링 진행.

![image](https://github.com/mooner1213/react_study/assets/162667655/71b22582-be3c-4b57-9d8e-053d769b736a)

![image](https://github.com/mooner1213/react_study/assets/162667655/d29535cd-5fe1-446b-a091-06a11b7882a9)|![image](https://github.com/mooner1213/react_study/assets/162667655/eb83cac1-1c88-4be9-8f2f-a11c2d5bdb03)|
--|--|

![image](https://github.com/mooner1213/react_study/assets/162667655/fbb8b8f6-f894-495f-a426-d9d7eb44d7b9)
올바른 state설정은 setState함수를 사용하는 것.
setState가 state의 값을 변경 후,
react가 state의 변화를 감지,
화면을 리랜더링 함.

![image](https://github.com/mooner1213/react_study/assets/162667655/e3a492d7-e458-48db-81a6-e7bcb5223901)
![image](https://github.com/mooner1213/react_study/assets/162667655/b3d94d88-0948-4ba1-b80e-d27e7b0b7c9b)
![image](https://github.com/mooner1213/react_study/assets/162667655/f9febe7c-a571-46a9-b530-17cb14f6ef5a)
![image](https://github.com/mooner1213/react_study/assets/162667655/78f8f3bf-c69f-4894-82f1-bde986201c76)
