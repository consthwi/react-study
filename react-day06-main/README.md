1. git 주소<br/>
   https://github.com/Hwiwon-source/react-day06

2. 네트리파이 배포 주소<br/>
   https://fascinating-tiramisu-313373.netlify.app

3. 피드백 요청 내용<br/>
   useEffect hook의 의존성 누락으로 인한 배포 불가 문제 발생<br/>
   => useCallback으로 메모이제이션한 함수를 useEffect 의존성 배열에 추가한다.<br/>
   이 부분에 대하여 언제쯤 본 강의 내용에서 들을 수 있는지와,<br/>
   밑에 내용이 올바르게 이해하는 중인지 간단한 피드백 부탁드립니다.<br/>

4. 검색한 (이해하기 위해 노력 중인) 해결 방법<br/>
   4-1) getCurrentLocation과 getWeatherByCity 함수를 useEffect 의존성 배열로 추가해야 한다.<br/>
   4-2) 위 두 함수를 그냥 배열에 추가할 시,<br/>
   getCurrentLocation과 getWeatherByCity 두 함수가 계속 다른 값을 참조하게 되면<br/>
   useEffect가 update를 감지하여 리렌더링 된다.<br/>
   4-3) useEffect의 불필요한 리렌더링을 방지하기 위하여<br/>
   useEffect 의존성 배열에 추가하는 함수는 useCallback으로 감싸준다. (메모이제이션)<br/>
