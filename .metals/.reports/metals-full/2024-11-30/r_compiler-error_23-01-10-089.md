file:///C:/Users/ABC/Desktop/gatling/src/test/gatlingTest.scala
### file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:3: error: identifier expected but import found
import io.gatling.core.Predef._
^

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 2.13.12
Classpath:
<HOME>\AppData\Local\Coursier\cache\v1\https\repo1.maven.org\maven2\org\scala-lang\scala-library\2.13.12\scala-library-2.13.12.jar [exists ]
Options:



action parameters:
uri: file:///C:/Users/ABC/Desktop/gatling/src/test/gatlingTest.scala
text:
```scala
package test.

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure.ChainBuilder
import com.CustomCsvFeeder

class CsvFeederSimulation extends Simulation {
  val feeder = CustomCsvFeeder("data.csv", from = 1, to = 5).circular

  val scn = scenario("Test Custom CSV Feeder")
    .feed(feeder)
    .exec(
      http("Request with CSV Data")
        .get("/api/users?page=#{num}")
    )

  setUp(
    scn.inject(constantUsersPerSec(2) during (3 seconds))
  ).protocols(http.baseUrl("https://reqres.in"))
}

```



#### Error stacktrace:

```
scala.meta.internal.parsers.Reporter.syntaxError(Reporter.scala:16)
	scala.meta.internal.parsers.Reporter.syntaxError$(Reporter.scala:16)
	scala.meta.internal.parsers.Reporter$$anon$1.syntaxError(Reporter.scala:22)
	scala.meta.internal.parsers.Reporter.syntaxError(Reporter.scala:17)
	scala.meta.internal.parsers.Reporter.syntaxError$(Reporter.scala:17)
	scala.meta.internal.parsers.Reporter$$anon$1.syntaxError(Reporter.scala:22)
	scala.meta.internal.parsers.ScalametaParser.syntaxErrorExpected(ScalametaParser.scala:421)
	scala.meta.internal.parsers.ScalametaParser.name(ScalametaParser.scala:1216)
	scala.meta.internal.parsers.ScalametaParser.termName(ScalametaParser.scala:1219)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$selector$1(ScalametaParser.scala:1276)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:368)
	scala.meta.internal.parsers.ScalametaParser.selector(ScalametaParser.scala:1276)
	scala.meta.internal.parsers.ScalametaParser.selector(ScalametaParser.scala:1278)
	scala.meta.internal.parsers.ScalametaParser.scala$meta$internal$parsers$ScalametaParser$$selectors(ScalametaParser.scala:1281)
	scala.meta.internal.parsers.ScalametaParser.qualId(ScalametaParser.scala:1302)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$batchSource$10(ScalametaParser.scala:4667)
	scala.meta.internal.parsers.ScalametaParser.tryParse(ScalametaParser.scala:216)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$batchSource$1(ScalametaParser.scala:4662)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.batchSource(ScalametaParser.scala:4630)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$source$1(ScalametaParser.scala:4623)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.source(ScalametaParser.scala:4623)
	scala.meta.internal.parsers.ScalametaParser.entrypointSource(ScalametaParser.scala:4628)
	scala.meta.internal.parsers.ScalametaParser.parseSourceImpl(ScalametaParser.scala:135)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$parseSource$1(ScalametaParser.scala:132)
	scala.meta.internal.parsers.ScalametaParser.parseRuleAfterBOF(ScalametaParser.scala:59)
	scala.meta.internal.parsers.ScalametaParser.parseRule(ScalametaParser.scala:54)
	scala.meta.internal.parsers.ScalametaParser.parseSource(ScalametaParser.scala:132)
	scala.meta.parsers.Parse$.$anonfun$parseSource$1(Parse.scala:29)
	scala.meta.parsers.Parse$$anon$1.apply(Parse.scala:36)
	scala.meta.parsers.Api$XtensionParseDialectInput.parse(Api.scala:25)
	scala.meta.internal.semanticdb.scalac.ParseOps$XtensionCompilationUnitSource.toSource(ParseOps.scala:17)
	scala.meta.internal.semanticdb.scalac.TextDocumentOps$XtensionCompilationUnitDocument.toTextDocument(TextDocumentOps.scala:206)
	scala.meta.internal.pc.SemanticdbTextDocumentProvider.textDocument(SemanticdbTextDocumentProvider.scala:54)
	scala.meta.internal.pc.ScalaPresentationCompiler.$anonfun$semanticdbTextDocument$1(ScalaPresentationCompiler.scala:384)
```
#### Short summary: 

file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:3: error: identifier expected but import found
import io.gatling.core.Predef._
^