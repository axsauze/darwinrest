define({ "api": [  {    "type": "get",    "url": "/api/status",    "title": "Get status of Darwin services",    "version": "0.0.1",    "name": "Get_Darwin_Status",    "group": "GetDarwinStatus",    "permission": [      {        "name": "public"      }    ],    "description": "<p>Retreive the status for the OpenLBDWS API as a text from http://realtime.nationalrail.co.uk/OpenLDBWSRegistration/.</p> ",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "OpenLBDWS",            "description": "<p>The status of the OpenLBDWS API.</p> "          }        ]      },      "examples": [        {          "title": "Success Response Example:",          "content": "{\n   \"OpenLDBWS\": \"Available\"\n}",          "type": "json"        }      ]    },    "examples": [      {        "title": "Status example usage:",        "content": "curl -i http://darwin.hacktrain.com/api/status",        "type": "json"      }    ],    "filename": "./app.py",    "groupTitle": "GetDarwinStatus"  },  {    "type": "get",    "url": "/api/service",    "title": "Request details for service",    "version": "0.0.1",    "name": "Get_Service_Details",    "group": "GetServiceDetails",    "permission": [      {        "name": "user"      }    ],    "description": "<p>Retrieve the details for a specific service given a service ID.</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "Id",            "description": "<p>The id for the service that is to be retreived.</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "allFields",            "description": "<p>A flag that states whether all fields should be included.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "arrival",            "description": "<p>The time of arrival.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "departure",            "description": "<p>The time for departure.</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "destination",            "description": "<p>The destination of the service.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "platform",            "description": "<p>The platform number.</p> "          }        ]      },      "examples": [        {          "title": "Success Response Example:",          "content": "{\n  \"crs\": \"EUS\", \n  \"isCancelled\": null, \n  \"locationName\": \"London Euston\", \n  \"operatorCode\": \"VT\", \n  \"operatorName\": \"Virgin Trains\", \n  \"platform\": null, \n  \"scheduledArrivalTime\": null, \n  \"scheduledDepartureTime\": \"15:17\"\n}",          "type": "json"        },        {          "title": "Success Response With allFields=True:",          "content": "{\n  \"actualArrivalTime\": null, \n  \"actualDepartureTime\": \"On time\", \n  \"crs\": \"EUS\", \n  \"disruptionReason\": null, \n  \"estimatedArrivalTime\": null, \n  \"estimatedDepartureTime\": null, \n  \"generatedAt\": \"2015-08-23 16:06:02.010761+01:00\", \n  \"isCancelled\": null, \n  \"locationName\": \"London Euston\", \n  \"operatorCode\": \"VT\", \n  \"operatorName\": \"Virgin Trains\", \n  \"platform\": null, \n  \"previousCallingPointList\": [], \n  \"scheduledArrivalTime\": null, \n  \"scheduledDepartureTime\": \"15:17\", \n  \"subsequentCallingPointList\": [\n    {\n      \"callingPoints\": [\n          {\n              \"actualTime\": \"15:46\", \n              \"crs\": \"MKC\", \n              \"estimatedTime\": null, \n              \"locationName\": \"Milton Keynes Central\", \n              \"scheduledTime\": \"15:50\"\n          }, \n          {\n              \"actualTime\": null, \n              \"crs\": \"SOT\", \n              \"estimatedTime\": \"On time\", \n              \"locationName\": \"Stoke-on-Trent\", \n              \"scheduledTime\": \"16:50\"\n          }, \n          {\n              \"actualTime\": null, \n              \"crs\": \"SPT\", \n              \"estimatedTime\": \"On time\", \n              \"locationName\": \"Stockport\", \n              \"scheduledTime\": \"17:18\"\n          }, \n          {\n              \"actualTime\": null, \n              \"crs\": \"MAN\", \n              \"estimatedTime\": \"On time\", \n              \"locationName\": \"Manchester Piccadilly\", \n              \"scheduledTime\": \"17:29\"\n          }\n      ], \n      \"changeRequired\": false, \n      \"isCancelled\": false, \n      \"serviceType\": \"train\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://darwin.hacktrain.com/api/service?id=SERVICE_ID&apiKey=YOUR-API-KEY",        "type": "json"      }    ],    "filename": "./app.py",    "groupTitle": "GetServiceDetails"  },  {    "type": "get",    "url": "/api/board/:crs",    "title": "Request station board data",    "version": "0.0.1",    "name": "Get_Station_Board",    "group": "GetStationBoard",    "permission": [      {        "name": "public"      }    ],    "description": "<p>Retrieve the details for a specific station board given a CRS code.</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "crs",            "description": "<p>A CRS short-code of the station. These codes can be found on National Rail Enquiries website.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "apiKey",            "description": "<p>The API Key from Darwin OpenLBDWS.</p> "          },          {            "group": "Parameter",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "departures",            "description": "<p>(Optional) Boolean stating whether departures are requested (Either departures or arrivals required).</p> "          },          {            "group": "Parameter",            "type": "<p>Boolean</p> ",            "optional": false,            "field": "arrivals",            "description": "<p>(Optional) Boolean stating whether arrivals are requested (Either departures or arrivals required).</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "destination",            "description": "<p>(Optional) The destination as a CRS code where the service is going.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "origin",            "description": "<p>(Optional) The origin as a CRS code where the service is coming from.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "allFields",            "description": "<p>(Optional) Flag that states whether all additional fields will be returned.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "arrival",            "description": "<p>The time of arrival.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "departure",            "description": "<p>The time for departure.</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "destination",            "description": "<p>The destination of the service.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "platform",            "description": "<p>The platform number.</p> "          }        ]      },      "examples": [        {          "title": "Success Simple Response Example:",          "content": "[\n  {\n      \"arrival\": \"19:14\", \n      \"departure\": \"On time\", \n      \"destination\": \"Tring\", \n      \"platform\": \"10\"\n  }, \n  {\n      \"arrival\": \"19:17\", \n      \"departure\": \"On time\", \n      \"destination\": \"Manchester Piccadilly\", \n      \"platform\": null\n  }\n]",          "type": "json"        }      ]    },    "examples": [      {        "title": "Usage Simple Request:",        "content": "curl -i http://darwin.hacktrain.com/api/board/EUS?apiKey=YOUR-API-KEY",        "type": "json"      }    ],    "filename": "./app.py",    "groupTitle": "GetStationBoard"  },  {    "type": "get",    "url": "/api/code/:query",    "title": "Get all crs codes, and query stations by string",    "version": "0.0.1",    "name": "Get_Station_CRS",    "group": "GetStationCRS",    "permission": [      {        "name": "public"      }    ],    "description": "<p>Retreive either all crs codes, or a subset of codes</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "query",            "description": "<p>(Optional) A query to find all stations that contain this string.</p> "          }        ]      }    },    "examples": [      {        "title": "Code Query Example:",        "content": "curl -i http://darwin.hacktrain.com/api/crs/eus",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "{",          "content": "{\n  \"EUS\": \"Euston\"\n}",          "type": "json"        }      ]    },    "filename": "./app.py",    "groupTitle": "GetStationCRS"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p> "          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./documentation/docs/main.js",    "group": "_Users_bloomberglondonrd1_IdeaProjects_darwin_darwinrest_documentation_docs_main_js",    "groupTitle": "_Users_bloomberglondonrd1_IdeaProjects_darwin_darwinrest_documentation_docs_main_js",    "name": ""  }] });