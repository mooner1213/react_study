**Hook의 등장 배경**

리액트 초기에 함수형 컴포넌트를 사용하였음.

하지만, 값의 상태를 관리하거나, 생명주기를 사용하는 등
컴포넌트가 생성, 사라지는 과정이 있을 때,
클래스형 컴포넌트를 사용해야만 했다.

클래스형 컴포넌트는 함수형 컴포넌트보다 좋지않은 갖가지
단점들이 있기에, 클래스형 컴포넌트의 단점을 보완하여,

함수형 컴포넌트를 사용할 수 있도록 등장하였다.

**React Hook**

함수형 컴포넌트에서 사용되는 기술들을 일컫는 말.

클래스 컴포넌트에선 state 정의 및 setState함수를 통해 state 업데이트 함.

함수 컴포넌트에선 state정의하거나 생명주기에 맞춰 실행할 수 없으므로, Hook이 등장.

훅은 모두 use로 시작함.

**Hook의 장점**

상태로직 단순화
- 함수형 컴포넌트에 상태를 추가하여, 전반적인 로직 단순화, 코드를 이해하기 쉽게 만듦.

코드 재사용성과 관심사 분리
- 컴포넌트 계층구조를 변경하지 않고도, 여러 컴포넌트 간에 로직 재사용 가능.

사이드 이펙트 감소
- 생명주기 메서드와 유사한 기능 제공 -> 사이드 이펙트를 효율적으로 처리가능.

**Hook의 규칙**

최상위에서만 Hook을 호출해야함.

오직 react함수 내에서 호출해야함.

**Hook의 종류**
![image](https://github.com/mooner1213/react_study/assets/162667655/57a498db-2d1a-47e1-ac02-da571be99563)

![image](https://github.com/mooner1213/react_study/assets/162667655/45ea70e1-5d13-47e2-8488-39a090132358)
![image](https://github.com/mooner1213/react_study/assets/162667655/2749c49e-d909-4ff3-a337-423414b1a08f)
![image](https://github.com/mooner1213/react_study/assets/162667655/0ea7a828-4b73-4511-9f01-7a831c399edf)
![image](https://github.com/mooner1213/react_study/assets/162667655/6d9b7986-b02d-4e90-ad40-5f9802f868bb)
![image](https://github.com/mooner1213/react_study/assets/162667655/1b67fbb7-d4c2-4101-9935-cbbaa733c4fa)
![image](https://github.com/mooner1213/react_study/assets/162667655/a6c74821-1fde-44c8-82a7-2a219c4818a1)

