file:///C:/Users/ABC/Desktop/gatling/src/test/gatlingTest.scala
### file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:5: error: identifier expected but . found
import .CustomCsvFeeder
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
package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import .CustomCsvFeeder

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
	scala.meta.internal.parsers.ScalametaParser.path(ScalametaParser.scala:1263)
	scala.meta.internal.parsers.ScalametaParser.stableId(ScalametaParser.scala:1298)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$importer$1(ScalametaParser.scala:3419)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.importer(ScalametaParser.scala:3418)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$importStmt$2(ScalametaParser.scala:3415)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$commaSeparated$1(ScalametaParser.scala:655)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$commaSeparated$1$adapted(ScalametaParser.scala:655)
	scala.meta.internal.parsers.ScalametaParser.iter$1(ScalametaParser.scala:645)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$tokenSeparated$1(ScalametaParser.scala:651)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$tokenSeparated$1$adapted(ScalametaParser.scala:638)
	scala.meta.internal.parsers.ScalametaParser.scala$meta$internal$parsers$ScalametaParser$$listBy(ScalametaParser.scala:567)
	scala.meta.internal.parsers.ScalametaParser.tokenSeparated(ScalametaParser.scala:638)
	scala.meta.internal.parsers.ScalametaParser.commaSeparatedWithIndex(ScalametaParser.scala:658)
	scala.meta.internal.parsers.ScalametaParser.commaSeparated(ScalametaParser.scala:655)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$importStmt$1(ScalametaParser.scala:3415)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.importStmt(ScalametaParser.scala:3413)
	scala.meta.internal.parsers.ScalametaParser$$anonfun$2.applyOrElse(ScalametaParser.scala:4457)
	scala.meta.internal.parsers.ScalametaParser$$anonfun$2.applyOrElse(ScalametaParser.scala:4449)
	scala.PartialFunction.$anonfun$runWith$1(PartialFunction.scala:231)
	scala.PartialFunction.$anonfun$runWith$1$adapted(PartialFunction.scala:230)
	scala.meta.internal.parsers.ScalametaParser.statSeqBuf(ScalametaParser.scala:4440)
	scala.meta.internal.parsers.ScalametaParser.bracelessPackageStats$1(ScalametaParser.scala:4659)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$batchSource$11(ScalametaParser.scala:4670)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:368)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$batchSource$10(ScalametaParser.scala:4670)
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

file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:5: error: identifier expected but . found
import .CustomCsvFeeder
       ^