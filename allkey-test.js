
const assert = require( "assert" );
const allkey = require( "./allkey.js" );

assert.equal( allkey( "toString", null ), true, "should be equal to true" );

assert.equal( allkey( "toString", NaN ), true, "should be equal to true" );

assert.equal( allkey( "toString", 123 ), true, "should be equal to true" );

assert.equal( allkey( [ "toString", "valueOf" ], 123 ), true, "should be equal to true" );

assert.equal( allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be equal to true" );

assert.equal( allkey( "property", { "property": "value" } ), true, "should be equal to true" );

assert.equal( allkey( [ "toString", "valueOf", "yeah" ], false ), false, "should be equal to false" );

var hello = Symbol( "hello" );
var hi = Symbol( "hi" );
var object = { [ hello ]: 123, [ hi ]: 123 };
assert.equal( allkey( [ hello, hi ], object ), true, "should be equal to true" );

console.log( "ok" );
