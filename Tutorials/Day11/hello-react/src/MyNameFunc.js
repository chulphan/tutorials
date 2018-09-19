import React from 'react';

// 함수형 컴포넌트.
// 클래스형 컴포넌트와의 차이점은 state와 LifeCycle이 포함되지 않는다는 점이다.
// 그래서 초기 마운트가 아주 미세하게 빠르고 메모리 자원을 덜 사용한다.
// 컴포넌트를 무수히 많이 렌더링 하는게 아니라면 성능적으로는 큰 차이가 없다고 한다.
const MyNameFunc = ({ name }) => {
    return(
        <div>
            안녕하세요 제 이름은 {name} 이고 함수형 컴포넌트로 만들었어요.
        </div>
    );
}

export default MyNameFunc;