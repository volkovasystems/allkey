
const assert = require( "assert" );
const allkey = require( "./allkey.js" );

//assert.equal( allkey( "toString", null ), true, "should be true" );

assert.equal( allkey( "toString", NaN ), true, "should be true" );

assert.equal( allkey( "toString", 123 ), true, "should be true" );

assert.equal( allkey( [ "toString", "valueOf" ], 123 ), true, "should be true" );

assert.equal( allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be true" );

assert.equal( allkey( "property", { "property": "value" } ), true, "should be true" );

assert.equal( allkey( [ "toString", "valueOf", "yeah" ], false ), false, "should be false" );

console.log( "ok" );
