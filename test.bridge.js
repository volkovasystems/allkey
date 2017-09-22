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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("allkey", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`allkey( 'toString', NaN )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(
			function () {
				return allkey("toString", NaN);
			}).
			value;

			assert.equal(result, true);

		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey(["toString", "valueOf"], "hello");
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], 123 )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey(["toString", "valueOf"], 123);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey(["toString", "valueOf"], [1, 2, 3]);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`allkey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey([0, 1], { 0: "hello", 1: "world" });
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`allkey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return allkey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`allkey( 'property', { 'property': 'value' } )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey("property", { "property": "value" });
			}).

			value;

			assert.equal(result, true);

		});
	});


	describe("`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey(["toString", "valueOf", "yeah"], false);
			}).

			value;

			assert.equal(result, false);

		});
	});


	describe("`allkey( 'toString', null )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey("toString", null);
			}).

			value;

			assert.equal(result, true);

		});
	});


	describe("`allkey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", function () {
		it("should be equal to true", function () {
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

			assert.equal(result, true);

		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey(["toString", "valueOf"], function yeah() {});
			}).

			value;

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImFsbGtleSIsIk5hTiIsInZhbHVlIiwiZXF1YWwiLCJ5ZWFoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCO0FBQ1osZUFBVztBQUNWLFdBQU9DLE9BQVEsVUFBUixFQUFvQkMsR0FBcEIsQ0FBUDtBQUNBLElBSFc7QUFJWEMsUUFKRjs7QUFNQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBVkQ7QUFXQSxFQVpEOztBQWNBTCxVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxPQUFuQyxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUs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ZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7OztBQWlCQUwsVUFBVSw0R0FBVixFQUF3SCxZQUFPO0FBQzlISSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBRUdQLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXJCRDtBQXNCQSxFQXZCRDs7QUF5QkFMLFVBQVUsNERBQVYsRUFBd0UsWUFBTztBQUM5RUksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE9BQVEsQ0FBRSxVQUFGLEVBQWMsU0FBZCxDQUFSLEVBQW1DLFNBQVNJLElBQVQsR0FBZ0IsQ0FBRyxDQUF0RCxDQUFQO0FBQ0EsSUFKVzs7QUFNWEYsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBWEQ7QUFZQSxFQWJEOztBQWVBLENBM0xEOztBQTZMQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYWxsa2V5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJhbGxrZXkvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2FsbGtleS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwiYWxsa2V5XCI6IFwiYWxsa2V5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJhbGxrZXlcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggJ3RvU3RyaW5nJywgTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYWxsa2V5KCBcInRvU3RyaW5nXCIsIE5hTiApO1xuXHRcdFx0XHR9XG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIFwiaGVsbG9cIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCAxMjMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBbIDEsIDIsIDMgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbIDAsIDEgXSwgeyAwOiAnaGVsbG8nLCAxOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFsgMCwgMSBdLCB7IDA6IFwiaGVsbG9cIiwgMTogXCJ3b3JsZFwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggU3ltYm9sLmZvciggJ3Byb3BlcnR5JyApLCB7IFsgU3ltYm9sLmZvciggJ3Byb3BlcnR5JyApIF06ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICksIHsgWyBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSBdOiBcInZhbHVlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJywgJ3llYWgnIF0sIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwieWVhaFwiIF0sIGZhbHNlICkgO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCAndG9TdHJpbmcnLCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFwidG9TdHJpbmdcIiwgbnVsbCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoIFsgU3ltYm9sKCAnaGVsbG8nICksIFN5bWJvbCggJ2hpJyApIF0sIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAxMjMsIFsgU3ltYm9sKCAnaGknICkgXTogMTIzIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IGhlbGxvID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcblx0XHRcdFx0XHRsZXQgaGkgPSBTeW1ib2woIFwiaGlcIiApO1xuXHRcdFx0XHRcdGxldCBvYmplY3QgPSB7IFsgaGVsbG8gXTogMTIzLCBbIGhpIF06IDEyMyB9O1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggWyBoZWxsbywgaGkgXSwgb2JqZWN0ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgZnVuY3Rpb24geWVhaCggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIGZ1bmN0aW9uIHllYWgoICl7IH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
