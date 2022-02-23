# Vanilla To do list server

vanilla-to-do-list server 저장소 입니다. ( [To do list client 저장소 바로가기](https://github.com/ryong9rrr/vanilla-to-do-list) )

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

1. git clone this repository.

2. install dependencies

   `$ npm install`

3. run

   `$ npm start`

</br>

# 2. API

## 모든 할 일 목록을 가져온다.

```
GET /items
```

## 할 일을 삭제한다.

```
DELETE /items/:category/:id
```

## 새로운 할 일을 입력한다.

```
POST /items
headers
{
    text: string
}
```

## 할 일을 수정한다.

```
PUT /items/:id
headers
{
    text: string
}
```

## 할 일을 이동시킨다.

```
PUT /items/:category/:id
```
