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
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var allkey = require("./allkey.support.js");
//: @end-client






//: @client:

describe("allkey", function () {

	describe("`allkey( 'toString', NaN )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey("toString", NaN), true);
		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey(["toString", "valueOf"], "hello"), true);
		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], 123 )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey(["toString", "valueOf"], 123), true);
		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey(["toString", "valueOf"], [1, 2, 3]), true);
		});
	});

	describe("`allkey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey((0, _for2.default)("property"), (0, _defineProperty3.default)({}, (0, _for2.default)("property"), "value")), true);
		});
	});

	describe("`allkey( 'property', { 'property': 'value' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey("property", { "property": "value" }), true);
		});
	});

	describe("`allkey( [ 'toString', 'valueOf', 'yeah' ], false )`", function () {
		it("should be equal to false", function () {
			assert.equal(allkey(["toString", "valueOf", "yeah"], false), false);
		});
	});

	describe("`allkey( 'toString', null )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey("toString", null), true);
		});
	});

	describe("`allkey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", function () {
		it("should be equal to true", function () {var _object;
			var hello = (0, _symbol2.default)("hello");
			var hi = (0, _symbol2.default)("hi");
			var object = (_object = {}, (0, _defineProperty3.default)(_object, hello, 123), (0, _defineProperty3.default)(_object, hi, 123), _object);

			assert.equal(allkey([hello, hi], object), true);

		});
	});

	describe("`allkey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", function () {
		it("should be equal to true", function () {
			assert.equal(allkey(["toString", "valueOf"], function yeah() {}), true);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYWxsa2V5IiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiTmFOIiwiaGVsbG8iLCJoaSIsIm9iamVjdCIsInllYWgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLFVBQVIsRUFBb0JJLEdBQXBCLENBQWQsRUFBeUMsSUFBekM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsVUFBVSxnREFBVixFQUE0RCxZQUFPO0FBQ2xFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsT0FBbkMsQ0FBZCxFQUE0RCxJQUE1RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDRDQUFWLEVBQXdELFlBQU87QUFDOURDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxHQUFuQyxDQUFkLEVBQXdELElBQXhEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsb0RBQVYsRUFBZ0UsWUFBTztBQUN0RUMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxVQUFGLEVBQWMsU0FBZCxDQUFSLEVBQW1DLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQW5DLENBQWQsRUFBZ0UsSUFBaEU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpRkFBVixFQUE2RixZQUFPO0FBQ25HQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxtQkFBWSxVQUFaLENBQVIsb0NBQXNDLG1CQUFZLFVBQVosQ0FBdEMsRUFBa0UsT0FBbEUsRUFBZCxFQUE2RixJQUE3RjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlEQUFWLEVBQTZELFlBQU87QUFDbkVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLFVBQVIsRUFBb0IsRUFBRSxZQUFZLE9BQWQsRUFBcEIsQ0FBZCxFQUE2RCxJQUE3RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0Q0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsRUFBeUIsTUFBekIsQ0FBUixFQUEyQyxLQUEzQyxDQUFkLEVBQWtFLEtBQWxFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsVUFBUixFQUFvQixJQUFwQixDQUFkLEVBQTBDLElBQTFDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsNEdBQVYsRUFBd0gsWUFBTztBQUM5SEMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlHLFFBQVEsc0JBQVEsT0FBUixDQUFaO0FBQ0EsT0FBSUMsS0FBSyxzQkFBUSxJQUFSLENBQVQ7QUFDQSxPQUFJQywrREFBYUYsS0FBYixFQUFzQixHQUF0QiwwQ0FBNkJDLEVBQTdCLEVBQW1DLEdBQW5DLFdBQUo7O0FBRUFSLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFSyxLQUFGLEVBQVNDLEVBQVQsQ0FBUixFQUF1QkMsTUFBdkIsQ0FBZCxFQUErQyxJQUEvQzs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQU4sVUFBVSw0REFBVixFQUF3RSxZQUFPO0FBQzlFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsU0FBU1EsSUFBVCxHQUFnQixDQUFHLENBQXRELENBQWQsRUFBd0UsSUFBeEU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQW5FRDs7QUFxRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhbGxrZXlcIixcblx0XHRcdFwicGF0aFwiOiBcImFsbGtleS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYWxsa2V5LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJhbGxrZXlcIjogXCJhbGxrZXlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGFsbGtleSA9IHJlcXVpcmUoIFwiLi9hbGxrZXkuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJhbGxrZXlcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCAndG9TdHJpbmcnLCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbGxrZXkoIFwidG9TdHJpbmdcIiwgTmFOICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgXCJoZWxsb1wiICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbGxrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCAxMjMgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgWyAxLCAyLCAzIF0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbGxrZXkoIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApLCB7IFsgU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICkgXTogXCJ2YWx1ZVwiIH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYWxsa2V5KCBcInByb3BlcnR5XCIsIHsgXCJwcm9wZXJ0eVwiOiBcInZhbHVlXCIgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFsbGtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicsICd5ZWFoJyBdLCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbGxrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiwgXCJ5ZWFoXCIgXSwgZmFsc2UgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCAndG9TdHJpbmcnLCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYWxsa2V5KCBcInRvU3RyaW5nXCIsIG51bGwgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbGxrZXkoIFsgU3ltYm9sKCAnaGVsbG8nICksIFN5bWJvbCggJ2hpJyApIF0sIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAxMjMsIFsgU3ltYm9sKCAnaGknICkgXTogMTIzIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGhlbGxvID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcblx0XHRcdGxldCBoaSA9IFN5bWJvbCggXCJoaVwiICk7XG5cdFx0XHRsZXQgb2JqZWN0ID0geyBbIGhlbGxvIF06IDEyMywgWyBoaSBdOiAxMjMgfTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbGxrZXkoIFsgaGVsbG8sIGhpIF0sIG9iamVjdCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYWxsa2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCBmdW5jdGlvbiB5ZWFoKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYWxsa2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgZnVuY3Rpb24geWVhaCggKXsgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
