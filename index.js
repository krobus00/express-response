class ResponseService {
	/**
	 *
	 * @param {number} status response statuscode
	 * @param {string} message message
	 * @param {object} data data object
	 */
	response({status, message, data = {}}) {
		return {status: status, message: message, data: data}
	}
	ok(message, data = {}) {
		let value = {
			status: 200,
			message: message ? message : '',
			data: data,
		}
		return this.response(value)
	}
	created(message) {
		let value = {
			status: 201,
			message: message ? message : 'created',
		}
		return this.response(value)
	}
	notModified(message) {
		let value = {
			status: 304,
			message: message ? message : 'not modified',
		}
		return this.response(value)
	}
	validationError(message, data = {}) {
		let value = {
			status: 422,
			message: message ? message : 'validation error',
			data: data,
		}
		return this.response(value)
	}
	clientError(message, data = {}) {
		let value = {
			status: 400,
			message: message ? message : 'bad request',
			data: data,
		}
		return this.response(value)
	}
	unauthorized(message, data = {}) {
		let value = {
			status: 401,
			message: message ? message : 'unauthorized',
			data: data,
		}
		return this.response(value)
	}
	forbidden(message, data = {}) {
		let value = {
			status: 403,
			message: message ? message : 'forbidden',
			data: data,
		}
		return this.response(value)
	}
	notfound(message, data = {}) {
		let value = {
			status: 404,
			message: message ? message : 'not found',
			data: data,
		}
		return this.response(value)
	}
	internalError(message, data = {}) {
		let value = {
			status: 500,
			message: message ? message : 'internal server error',
			data: data,
		}
		return this.response(value)
	}
}
module.exports = new ResponseService()
