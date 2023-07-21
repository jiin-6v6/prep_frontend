# TCT FrontEnd 개발 환경 설정

## module 받기

하기 명령어 실행하여 package.json에 작성된 module 받기

```
npm install
```

## 서버 실행하기

```
npm start
```

## Mock Server

Mocker Server는 Mockoon(https://mockoon.com/docs/latest/about/)을 사용

- Mockcoon GUI 설치 : https://mockoon.com/download/
- mockoon-cli 설치

```
npm install -g @mockoon/cli
```

### mock server 실행

- package.json의 scripts를 이용한 명렁어

```
# yarn이 설치되어 있지 않다면 설치하기
npm install -g yarn

# mock server 시작
yarn mock:start
npm run mock:start

# mock server list 확인
yarn mock:list
npm run mock:list

# mock server 끝내기
yarn mock:stop
npm run mock:stop
```

- mockoon-cli를 사용한 명령어

```
# mock server 시작
mockoon-cli start --data=./mockoon/environment/tct.json

# mock server list 확인
mockoon-cli list

# mock server 끝내기
mockoon-cli stop all
```

### mock server dockerize

위의 명령어 실행만으로도 충분하지만, docker에도 올릴 수 있어서 그 방법을 소개하고자 아래 내용을 작성했다.

dockerize는 선택이므로 따라해보고 싶은 사람만 해보면 된다.

1. Docker File 생성

```
mockoon-cli dockerize --data ./mockoon/environment/tct.json --port 3001 --output ./mockoon/Dockerfile
```

2. docker iomage 생성

```
cd mockoon

docker build -f ./Dockerfile -t mockoon-tct .

cd ..
```

3. docker 실행

```
# docker image를 이용하여 직접 실행
docker run -d -p 3001:3001 --name mockoon-tct mockoon-tct

# docker-compose.yml 파일을 사용하여 실행
docker compose up -d
```
