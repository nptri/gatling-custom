var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    },
    "maxResponseTime": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles1": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    },
    "percentiles2": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles3": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles4": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
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
    "count": 3,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    },
    "maxResponseTime": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles1": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    },
    "percentiles2": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles3": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles4": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
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
    "count": 3,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
