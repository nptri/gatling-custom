package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import com.CustomCsvFeeder._
import scala.concurrent.duration._
class CsvFeederSimulation extends Simulation {
  val feeder = CustomCsvFeeder
        .apply("C:/Users/ABC/Desktop/gatling/src/test/resources/dataTest.csv", from = 5, to = 7)
        .circular
  val scn = scenario("Test Custom CSV Feeder")
    .feed(feeder)
    .forever(
        exec(
            http("Request with CSV Data")
            .get("/api/unknown/#{num}")
        ))

  setUp(
    scn.inject(constantUsersPerSec(1).during(3))
  ).protocols(http.baseUrl("http://reqres.in").disableFollowRedirect)
  .maxDuration(1 minute)
}