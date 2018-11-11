const request = require( "request-promise-native" );
const express = require( "express" );
const app = express();
const port = 80;

app.get( "/", function( request, response ) {
	response.send({
		"success": true
	})
});

app.listen(port, async function() {
	var response = await request( process.env.EXTERNAL_URL );
	console.log( response ); //
	console.log( `Example app listening on port ${port}!` );
});