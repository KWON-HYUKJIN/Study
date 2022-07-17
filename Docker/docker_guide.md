# Docker 

## 기본명령어
```
docker version
클라이언트: 실제PC OS ex) 윈도우10
서버: 도커 컨테이너

*** docker system info

docker -v
도커 버전 출력 

docker images
이미지 확인

docker ps 
현재 실행준인 컨테이너 

docker ps -a
실행된 기록 

```

---  

## 이미지 찾기 & 컨테이너 생성

https://hub.docker.com/

CentOS 7 version 

``` bash
docker pull centos:centos7.9.2009
docker images 

// 테스트로 컨테이너 생성 해보기 
// docker interactive mode 
// -i -t 
// -it 
docker run -it --name "dev" centos:centos7.9.2009
```

---

## 접속 및 종료 

- 실행 
  - docker start ${컨테이너명}
  - docker attach ${컨테이너명}

- 종료
  - 도커 종료 : exit
    - docker ps 
  - 쉘빠져나오기 : (ctrl + p)  + (ctrl + q)
    - docker ps
- 체크 
  - docker ps
  - docker ps -a (History)

---

## 컨테이너 생성시 옵션 
- 옵션 변경이 필요한경우 (필요시 기존컨테이너를 이미지로 생성) 새로운 컨테이너를 생성
- docker 
- -it ( -i, -t) : interative mode (쉘 사용)
- --name : 컨테이너 이름 
- -hostname ${name}: 설정없을시 da78f9c918a7 처럼 자동 생성 
  - hostname 변경이 필요한경우 새로운 컨테이너로 생성 
- -v ${/user/dev}:{/home/workspace} : 볼륨, 클라이언트(내PC) 서버(도커)같의 폴더 공유
  - https://docs.docker.com/storage/volumes/
- -p : 포트포워딩 
  - https://docs.docker.com/config/containers/container-networking/
  - -p80:80 -p:3306:3306  

 ## 도커 커밋
 ```
docker commit {컨테이너} {이미지 이름}
 ```

## Example
```
https://docs.docker.com/engine/reference/commandline/run/
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

docker run -it --name dev --hostname devme -v C:\docker\web:/home/workspace/web -p 80:80 centos:centos7.9.2009 /bin/bash
```

## Test
```
Nginx 
https://www.nginx.com/resources/wiki/start/topics/tutorials/install/
```