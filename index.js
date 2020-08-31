class ResponseService {
	/**
	 *
	 * @param {number} status status code
	 * @param {string} message message
	 * @param {object} data data object
	 */
	dataValues({status, message, data = {}}) {
		return {status: status, message: message, data: data}
	}
	/**
	 *
	 * @param {*} res express res
	 * @param {number} status status code
	 * @param {object} values data object
	 */
	response(res, status, values) {
		return res.status(status).json(this.dataValues(values))
	}
	ok(res, message, data = {}) {
		let value = {
			status: 200,
			message: message ? message : '',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	created(res, message) {
		let value = {
			status: 201,
			message: message ? message : 'created',
		}
		return this.response(res, value.status, value)
	}
	notModified(res, message) {
		let value = {
			status: 304,
			message: message ? message : 'not modified',
		}
		return this.response(res, value.status, value)
	}
	validationError(res, message, data = {}) {
		let value = {
			status: 422,
			message: message ? message : 'validation error',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	clientError(res, message, data = {}) {
		let value = {
			status: 400,
			message: message ? message : 'bad request',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	unauthorized(res, message, data = {}) {
		let value = {
			status: 401,
			message: message ? message : 'unauthorized',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	forbidden(res, message, data = {}) {
		let value = {
			status: 403,
			message: message ? message : 'forbidden',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	notfound(res, message, data = {}) {
		let value = {
			status: 404,
			message: message ? message : 'not found',
			data: data,
		}
		return this.response(res, value.status, value)
	}
	internalError(res, message, data = {}) {
		let value = {
			status: 500,
			message: message ? message : 'internal server error',
			data: data,
		}
		return this.response(res, value.status, value)
	}
}
module.exports = new ResponseService()
