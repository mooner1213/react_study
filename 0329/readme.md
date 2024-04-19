![image](https://github.com/mooner1213/react_study/assets/162667655/be23b9e8-7b49-4141-96d8-8f7acc712fc7)JSX<br>
- 처음엔 React와 함께 사용하기위해 만들어짐<br>
- JSX는 JavaScript를 확장한 문법이다.<br>
- JSX는 공식적인 자바 스크립트 문법은 아니다.<br>
- JSX는 하나의 파일에 자바스크립트와 HTML을<br>
동시에 작성하여 편리하다.<br>
- 자바스크립트에서 HTML처럼 작성 -> 가독성이 높고 쉬움<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/8ebadd8b-7aaf-44a2-b4df-fcf31ee74847)
![image](https://github.com/mooner1213/react_study/assets/162667655/011af39b-ad5d-47e5-aaf9-73b777e2c0c9)
![image](https://github.com/mooner1213/react_study/assets/162667655/6d000dc1-d160-42ea-97fd-b7d5f5b1690f)
![image](https://github.com/mooner1213/react_study/assets/162667655/9ae51836-4572-400d-8b96-d8b9b74af2f1)
![image](https://github.com/mooner1213/react_study/assets/162667655/334d711a-b479-42ce-8aa1-35f7e09bc6cd)
JSX를 사용함과 안함의 차이는 유의미하게 큼<br>

**JSX사용방법**<br>
1. 반드시 부모 요소 하나가 감싸는 형태여야 함.<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/6b11a999-1ce5-43c7-9530-6f0a2f59fa69)
2. 자바 스크립트 표현식<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/2892bcfa-9d38-4b47-a719-c45a17b4fe00) | ![image](https://github.com/mooner1213/react_study/assets/162667655/aaadacb6-4413-479a-9a1c-e85f273f93bf)| 
---| ---|

3. JSX도 표현식이다.<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/3cb90680-c8e8-44e4-8772-61c73bd8054f)
4. if문(for문)대신 삼항 연산자(조건부 연산자)사용<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/1bdb1ee1-cb42-4ada-a89f-036b3e1b654d) | ![image](https://github.com/mooner1213/react_study/assets/162667655/98d9f52c-752b-4bec-b123-e444f18b2ee0)|
---| ---|

5.JSX 속성 정의<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/bc56a7e0-1983-4068-adac-4eb545c93faf) | ![image](https://github.com/mooner1213/react_study/assets/162667655/370f6061-116c-4b00-8cb0-062b40332242)|
---|---|

6.React DOM은 HTML 어트리뷰트 이름 대신<br>
camelCase를 사용한다.<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/3da8c55f-535e-4d94-9417-dd9d3acbee1b)|![image](https://github.com/mooner1213/react_study/assets/162667655/c15ed4e1-c636-4900-a237-be6946bfbeb9)|
---|---|

7.JSX내에서 주석 사용 방법<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/f529c704-d3e2-4f79-9207-7b880814a8a3)
*개발자가JSX를작성하면,리액트엔진은JSX를<br>
기존자바스크립트로해석해준다.이를**선언형화면기술**이라고한다.<br>

JSX코드 작성해보기<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/c54e6898-e93e-47b8-9b74-5e55e2931dca)|![image](https://github.com/mooner1213/react_study/assets/162667655/71cf5b85-8346-4e7e-a5be-c83935e3e0b0)|![image](https://github.com/mooner1213/react_study/assets/162667655/d0653fde-7e34-440f-8d1f-8c012be3bc87)|
---|---|---|

리액트 엘리먼트<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/331275da-b897-42c3-b087-a56e5c5f33c8)|![image](https://github.com/mooner1213/react_study/assets/162667655/e2355c8b-40cb-4b20-98c6-49da1e9aee6a)|
---|---|

자바스크립트 오브젝트<br>
* 객체(Object)/속성(properties)<br>
- "key: value"pair의 모음<br>
- Javascript에서 가장 많이 사용되는 자료형<br>
- Key는 문자열 / value는 타입상관X<br>
- 빈 객체를 만드는 두가지 방법<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/ef970a11-ef7c-4e7b-a356-ee6be000de23)|![image](https://github.com/mooner1213/react_study/assets/162667655/bce20b33-f246-43c7-af3f-a11ca94d85d3)|
---|---|

React Elements 생성<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/61cca1c2-31d3-4cd0-832f-2872c4c9eaef)
![image](https://github.com/mooner1213/react_study/assets/162667655/22cb78ef-dab0-49b9-a497-2d4dfb21b06f)
![image](https://github.com/mooner1213/react_study/assets/162667655/e9281461-e8d2-43ba-a55e-5ddb0afdb8c9)

![image](https://github.com/mooner1213/react_study/assets/162667655/fa531ef9-5db2-40f2-b83b-06286a85b17e)|![image](https://github.com/mooner1213/react_study/assets/162667655/fae1df51-2f82-4e1f-afe2-e4f57c3a449c)|
---|---|

![image](https://github.com/mooner1213/react_study/assets/162667655/a641a09b-3347-4fc4-96c3-5dc6e618b51c)

엘리먼트 렌더링<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/6d665a81-08d2-40a7-a263-81b70ebbe913)

간단한 시계 만들기<br>
- 자바스크립트로 만들기<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/34d62b2b-ce61-4786-a059-5e0e18e58b97)
- 리액트로 만들기<br>
![image](https://github.com/mooner1213/react_study/assets/162667655/8baea36d-c640-47bf-9e2c-b4c418804a6e)

- 리액트로 바이너리 시계 만들기<br>

![image](https://github.com/mooner1213/react_study/assets/162667655/ff0645bb-f030-4e4e-a74e-b9ab766ba77b)|![image](https://github.com/mooner1213/react_study/assets/162667655/e37ad425-a9bf-46c7-b39e-de03962afbaf)|
---|---|

