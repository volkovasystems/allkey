"use strict"; /*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "allkey",
              			"path": "allkey/allkey.js",
              			"file": "allkey.js",
              			"module": "allkey",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/allkey.git",
              			"test": "allkey-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if all keys exists on the entity.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"kein": "kein",
              			"portel": "portel",
              			"raze": "raze"
              		}
              	@end-include
              */

var doubt = require("doubt");
var kein = require("kein");
var portel = require("portel");
var raze = require("raze");

var allkey = function allkey(key, entity) {
	/*;
                                           	@meta-configuration:
                                           		{
                                           			"key:required": [
                                           				"number",
                                           				"string",
                                           				"symbol",
                                           				[ "number", "string", "symbol" ]
                                           			],
                                           			"entity:required": "*"
                                           		}
                                           	@end-meta-configuration
                                           */

	if (!doubt(key, AS_ARRAY)) {
		key = [key];
	}

	if (arguments.length == 2) {
		entity = portel(entity);

	} else {
		entity = zelf(this);
	}

	try {
		return raze(key).every(function (key) {return kein(key, entity);});

	} catch (error) {
		throw new Error("cannot check all keys, " + error.stack);
	}
};

module.exports = allkey;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbGtleS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImtlaW4iLCJwb3J0ZWwiLCJyYXplIiwiYWxsa2V5Iiwia2V5IiwiZW50aXR5IiwiQVNfQVJSQVkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ6ZWxmIiwiZXZlcnkiLCJlcnJvciIsIkVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUksU0FBUyxTQUFTQSxNQUFULENBQWlCQyxHQUFqQixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUM7Ozs7Ozs7Ozs7Ozs7O0FBY0EsS0FBSSxDQUFDUCxNQUFPTSxHQUFQLEVBQVlFLFFBQVosQ0FBTCxFQUE2QjtBQUM1QkYsUUFBTSxDQUFFQSxHQUFGLENBQU47QUFDQTs7QUFFRCxLQUFJRyxVQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCSCxXQUFTSixPQUFRSSxNQUFSLENBQVQ7O0FBRUEsRUFIRCxNQUdLO0FBQ0pBLFdBQVNJLEtBQU0sSUFBTixDQUFUO0FBQ0E7O0FBRUQsS0FBRztBQUNGLFNBQU9QLEtBQU1FLEdBQU4sRUFBWU0sS0FBWixDQUFtQixVQUFFTixHQUFGLFVBQVdKLEtBQU1JLEdBQU4sRUFBV0MsTUFBWCxDQUFYLEVBQW5CLENBQVA7O0FBRUEsRUFIRCxDQUdDLE9BQU9NLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUMsS0FBSiw2QkFBc0NELE1BQU1FLEtBQTVDLENBQU47QUFDQTtBQUNELENBaENEOztBQWtDQUMsT0FBT0MsT0FBUCxHQUFpQlosTUFBakIiLCJmaWxlIjoiYWxsa2V5LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImFsbGtleVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJhbGxrZXkvYWxsa2V5LmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImFsbGtleS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImFsbGtleVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hbGxrZXkuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImFsbGtleS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENoZWNrcyBpZiBhbGwga2V5cyBleGlzdHMgb24gdGhlIGVudGl0eS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiLFxyXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xyXG5jb25zdCBwb3J0ZWwgPSByZXF1aXJlKCBcInBvcnRlbFwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5cclxuY29uc3QgYWxsa2V5ID0gZnVuY3Rpb24gYWxsa2V5KCBrZXksIGVudGl0eSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwia2V5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJzeW1ib2xcIixcclxuXHRcdFx0XHRcdFsgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJzeW1ib2xcIiBdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIGtleSwgQVNfQVJSQVkgKSApe1xyXG5cdFx0a2V5ID0gWyBrZXkgXTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcclxuXHRcdGVudGl0eSA9IHBvcnRlbCggZW50aXR5ICk7XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0ZW50aXR5ID0gemVsZiggdGhpcyApO1xyXG5cdH1cclxuXHJcblx0dHJ5e1xyXG5cdFx0cmV0dXJuIHJhemUoIGtleSApLmV2ZXJ5KCAoIGtleSApID0+IGtlaW4oIGtleSwgZW50aXR5ICkgKTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGNoZWNrIGFsbCBrZXlzLCAkeyBlcnJvci5zdGFjayB9YCApO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWxsa2V5O1xyXG4iXX0=
//# sourceMappingURL=allkey.support.js.map
