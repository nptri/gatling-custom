ThisBuild / scalaVersion := "2.13.14"
lazy val root = (project in file("."))
  .settings(
    name := "gatling-csv-custom-feeder",
    version := "0.1",
    libraryDependencies ++= Seq(
      "io.gatling" % "gatling-core" % "3.13.1" % "provided",
      "io.gatling" % "gatling-http" % "3.13.1" % "provided",
      "io.gatling" % "gatling-test-framework" % "3.13.1" % "test",
      "io.gatling.highcharts" % "gatling-charts-highcharts" % "3.13.1" % "test"
    ),
    resolvers += Resolver.mavenCentral
  )
  scalacOptions ++= Seq(
  "-Xfatal-warnings",
  "-deprecation",
  "-feature",
  "-unchecked",
  "-language:implicitConversions",
  "-language:higherKinds",
  "-language:existentials",
  "-language:postfixOps"
)
enablePlugins(GatlingPlugin)