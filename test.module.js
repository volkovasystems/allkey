"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "allkey",
			"path": "allkey/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/allkey.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"allkey": "allkey"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const allkey = require( "./allkey.js" );
//: @end-server

//: @client:
const allkey = require( "./allkey.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "allkey", ( ) => {

	describe( "`allkey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "toString", NaN ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], "hello" ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], 123 ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`allkey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ 0, 1 ], { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`allkey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`allkey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf", "yeah" ], false ), false );
		} );
	} );

	describe( "`allkey( 'toString', null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "toString", null ), true );
		} );
	} );

	describe( "`allkey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let hello = Symbol( "hello" );
			let hi = Symbol( "hi" );
			let object = { [ hello ]: 123, [ hi ]: 123 };

			assert.equal( allkey( [ hello, hi ], object ), true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], function yeah( ){ } ), true );
		} );
	} );

} );

//: @end-server

//: @client:

describe( "allkey", ( ) => {

	describe( "`allkey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "toString", NaN ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], "hello" ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], 123 ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`allkey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ 0, 1 ], { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`allkey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`allkey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf", "yeah" ], false ), false );
		} );
	} );

	describe( "`allkey( 'toString', null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( "toString", null ), true );
		} );
	} );

	describe( "`allkey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let hello = Symbol( "hello" );
			let hi = Symbol( "hi" );
			let object = { [ hello ]: 123, [ hi ]: 123 };

			assert.equal( allkey( [ hello, hi ], object ), true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( allkey( [ "toString", "valueOf" ], function yeah( ){ } ), true );
		} );
	} );

} );

//: @end-client

//: @bridge:

describe( "allkey", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`allkey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(
				function( ){
					return allkey( "toString", NaN );
				}
			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ "toString", "valueOf" ], "hello" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ "toString", "valueOf" ], 123 );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ "toString", "valueOf" ], [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ 0, 1 ], { 0: "hello", 1: "world" } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( "property", { "property": "value" } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ "toString", "valueOf", "yeah" ], false ) ;
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`allkey( 'toString', null )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( "toString", null );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`allkey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					let hello = Symbol( "hello" );
					let hi = Symbol( "hi" );
					let object = { [ hello ]: 123, [ hi ]: 123 };

					return allkey( [ hello, hi ], object );

				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`allkey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return allkey( [ "toString", "valueOf" ], function yeah( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
