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
              			"assert": "should",
              			"allkey": "allkey"
              		}
              	@end-include
              */

var assert = require("should");





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

	describe("`allkey( 'toString', 123 )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return allkey("toString", 123);
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

	/* Fix zelf is not define bug
     describe( "`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
     
     	it( "should be equal to false", ( ) => {
     
     
     		let result = browser.url( bridgeURL ).execute(
     
     			function( ){
     				return allkey( [ "toString", "valueOf", "yeah" ] ) ;
     			}
     
     		).value;
     
     		assert.equal( result, false );
     
     	} );
     
     } );
     */

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImFsbGtleSIsIk5hTiIsInZhbHVlIiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7O0FBRUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7QUFDWixlQUFXO0FBQ1YsV0FBT0MsT0FBUSxVQUFSLEVBQW9CQyxHQUFwQixDQUFQO0FBQ0EsSUFIVztBQUlYQyxRQUpGOztBQU1BZCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FWRDtBQVdBLEVBWkQ7O0FBY0FMLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLFVBQVIsRUFBb0IsR0FBcEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhFLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsV0FBT0MsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsR0FBbkMsQ0FBUDs7QUFFQSxJQU5XOztBQVFYRSxRQVJGOztBQVVBZCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQUwsVUFBVSxpRkFBVixFQUE2RixZQUFPO0FBQ25HSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFMLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLFVBQVIsRUFBb0IsRUFBRSxZQUFZLE9BQWQsRUFBcEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhFLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxDQTNHRDs7QUE2R0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYWxsa2V5XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImFsbGtleS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYWxsa2V5LmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiYWxsa2V5XCI6IFwiYWxsa2V5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJhbGxrZXlcIiwgKCApID0+IHtcclxuXHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xyXG5cclxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCAndG9TdHJpbmcnLCBOYU4gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gYWxsa2V5KCBcInRvU3RyaW5nXCIsIE5hTiApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggJ3RvU3RyaW5nJywgMTIzIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFwidG9TdHJpbmdcIiwgMTIzICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgMTIzIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgMTIzICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBhbGxrZXkoIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApLCB7IFsgU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICkgXTogXCJ2YWx1ZVwiIH0gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFsbGtleSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cdFxyXG5cdC8qIEZpeCB6ZWxmIGlzIG5vdCBkZWZpbmUgYnVnXHJcblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicsICd5ZWFoJyBdLCBmYWxzZSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwieWVhaFwiIF0gKSA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cdCovXHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuIl19
//# sourceMappingURL=test.bridge.js.map
