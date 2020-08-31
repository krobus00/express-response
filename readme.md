# Express Response

Express response is a package allows you to display consistent responses from your API

## Installation

express response requires [express-js](https://expressjs.com/) v4+ to run.

```sh
$ npm install express-response --save
```

```javascript
const response = require('express-response')
```

### Example

express response requires [express-js](https://expressjs.com/) v4+ to run.

response.func(res, message, data)
message and data is optional parameter

### ok response

```javascript
app.get('/', (req, res) => {
	response.ok(res, 'EXAMPLE', {rank: 1, name: 'express'})
})
```

```json
{
	"status": 200,
	"message": "EXAMPLE",
	"data": {
		"rank": 1,
		"name": "express"
	}
}
```

### created response

```javascript
app.post('/', (req, res) => {
	response.created(res)
})
```

```json
{
	"status": 201,
	"message": "created",
	"data": {}
}
```

### custom response

```javascript
app.get('/', (req, res) => {
	let responseData = {
		status: 200,
		message: 'example',
		data: {},
	}
	response.response(res, responseData.status, responseData)
})
```

```json
{
	"status": 200,
	"message": "example",
	"data": {}
}
```

### Function list

```javascript
response.ok()
response.created()
response.notModified()
response.validationError()
response.clientError()
response.unauthorized()
response.forbidden()
response.notfound()
response.internalError()
response.response()
```
