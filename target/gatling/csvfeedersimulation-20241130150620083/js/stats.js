var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles1": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles2": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles4": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    }
},
contents: {
"req_request-with-cs-1433144301": {
        type: "REQUEST",
        name: "Request with CSV Data",
path: "Request with CSV Data",
pathFormatted: "req_request-with-cs-1433144301",
stats: {
    "name": "Request with CSV Data",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles2": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles4": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
}
    },"req_request-with-cs-2053887776": {
        type: "REQUEST",
        name: "Request with CSV Data Redirect 1",
path: "Request with CSV Data Redirect 1",
pathFormatted: "req_request-with-cs-2053887776",
stats: {
    "name": "Request with CSV Data Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles3": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles4": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
