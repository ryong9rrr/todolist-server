# Vanilla To do list server

❗ `Java 코드는 예전에 작성했던 레거시 코드입니다.`

👋 [To do list client 깃허브 레포지토리 바로가기](https://github.com/ryong9rrr/vanilla-to-do-list)

<table>
    <thead>
        <tr>
            <th colspan="2" style="text-align: center">
                🛠 Skills & Tools
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center">구동 환경</td>
            <td>NodeJS</td>
        </tr>
        <tr>
            <td style="text-align: center">Frame work</td>
            <td>express</td>
        </tr>
        <tr>
            <td style="text-align: center">Test tool</td>
            <td>mocha</td>
        </tr>
    </tbody>
</table>

</br>

# 1. Getting started

1. 이 저장소를 클론해주세요.

2. 의존성 라이브러리들을 설치해주세요.

   `$ npm install`

3. 아래 명령어로 실행시켜주세요. (3000번 포트에서 실행됩니다.)

   `$ npm start`

</br>

# 2. API

## 모든 할 일 목록을 가져온다.

```
GET /items
response
{
    Work[]
}
```

## 할 일을 삭제한다.

```
DELETE /items/:category/:id
response
{
    응답 메시지 없음
}
```

## 새로운 할 일을 입력한다.

```
POST /items
headers
{
    "text": string
}
```

## 할 일을 수정한다.

```
PUT /items/:id
headers
{
    "text": string
}
```

## 할 일을 이동시킨다.

```
PUT /items/:category/:id
```

</br>

# Blog(notion)

[🤔 API를 설계하면서...](https://www.notion.so/ryong9rrr/API-a34a1582c521441fa1b2bb35ec99aa20)
