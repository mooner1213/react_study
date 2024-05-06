컴포넌트(Component) : 입력(props)를 받아 출력(Element)하는 역할
리액트는 Component기반의 구조라는 특징을 가짐.
프로그래밍에 있어서, 재사용이 가능한 각각의 독립된 모듈을 뜻함.
같은 컴포넌트를 사용 시, 모두 동일한 DOM구조 반환.

**리액트 컴포넌트**
리액트 컴포넌트 에서의 입력은 props이며, 출력은 react element가 된다.

![image](https://github.com/mooner1213/react_study/assets/162667655/432dfb5b-72a4-4b0a-8fbc-1d3bb1014b61)

props는 Component의 입력으로 들어간다.
리액트에서의 props는 리액트 컴포넌트의 속성이다.
   -> ex) 붕어빵 재료

props는 같은 리액트컴포넌트에서 보이는 글자, 색상 등의
속성을 바꾸고 싶을 때, 사용한다.

![image](https://github.com/mooner1213/react_study/assets/162667655/2d58ff83-988a-42ba-a19e-5fee15cbdaa7)

함수형 컴포넌트 - 함수로 정의, UI를 랜더링하기 위해 props를 받아 사용함.
클래스형 컴포넌트 - ES6의 class 문법을 사용하여 정의되며, 상태를 가질 수 있음.

컴포넌트의 이름은 항상 대문자로 시작해야함.
(소문자일시 DOM태그로 인식)

props - 부모(상위)컴포넌트로부터 전달되는 읽기 전용 데이터. 자식컴포넌트에선 수정불가.
리액트 컴포넌트는 props를 이용해 서로 통신한다.
![image](https://github.com/mooner1213/react_study/assets/162667655/03874b80-c06b-4d67-b56b-1eed45cf62b4)

컴포넌트에 props 기본값을 설정하고픈 경우, defaultProps를 설정하면 됨.
디폴트 설정을 하지않는 경우, 해당 프로퍼티를 필수 프로터피로 선언 가능.

![image](https://github.com/mooner1213/react_study/assets/162667655/ddee3abd-0bbc-42a8-b7b3-d0496b7687e5)


**재사용 가능한 컴포넌트를 많이 가지고있을수록 개발 속도가 빨라진다.**

![image](https://github.com/mooner1213/react_study/assets/162667655/5a3acfcd-4421-4a7f-97f0-318ee5372312)
![image](https://github.com/mooner1213/react_study/assets/162667655/27837da1-2e0c-4fcb-a83a-2af1747b8b4b)

