var Sentry = require("@sentry/node");

Sentry.init({
	dsn: process.env.SENTRY_DSN,
	tracesSampleRate: 1.0
});

exports.handler = function (event, context) {
	var body = JSON.parse(event.body);

	var transaction = Sentry.startTransaction();
	Sentry.captureMessage(body.error);
	transaction.finish();

	return {
		statusCode: 201,
		body: ""
	};
};
