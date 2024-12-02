file:///C:/Users/ABC/Desktop/gatling/src/test/gatlingTest.scala
### file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:10: error: identifier expected but val found
  val scn = scenario("Test Custom CSV Feeder")
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
import com.example.gatling.csv.CustomCsvFeeder

class CsvFeederSimulation extends Simulation {
  val feeder = CustomCsvFeeder("data.csv", from = 1, to = 5).

  val scn = scenario("Test Custom CSV Feeder")
    .feed(feeder)
    .exec(
      http("Request with CSV Data")
        .get("/api/users?page=#{num}")
    )

  setUp(
    scn.inject(atOnceUsers())
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
	scala.meta.internal.parsers.ScalametaParser.simpleExprRest(ScalametaParser.scala:2329)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$simpleExpr0$3(ScalametaParser.scala:2273)
	scala.util.Success.map(Try.scala:262)
	scala.meta.internal.parsers.ScalametaParser.simpleExpr0(ScalametaParser.scala:2273)
	scala.meta.internal.parsers.ScalametaParser.simpleExpr(ScalametaParser.scala:2223)
	scala.meta.internal.parsers.ScalametaParser.prefixExpr(ScalametaParser.scala:2206)
	scala.meta.internal.parsers.ScalametaParser.postfixExpr(ScalametaParser.scala:2081)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$expr$2(ScalametaParser.scala:1676)
	scala.meta.internal.parsers.ScalametaParser.atPosOpt(ScalametaParser.scala:322)
	scala.meta.internal.parsers.ScalametaParser.autoPosOpt(ScalametaParser.scala:366)
	scala.meta.internal.parsers.ScalametaParser.expr(ScalametaParser.scala:1581)
	scala.meta.internal.parsers.ScalametaParser.expr(ScalametaParser.scala:1480)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$patDefOrDcl$1(ScalametaParser.scala:3589)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:368)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:373)
	scala.meta.internal.parsers.ScalametaParser.patDefOrDcl(ScalametaParser.scala:3576)
	scala.meta.internal.parsers.ScalametaParser.defOrDclOrSecondaryCtor(ScalametaParser.scala:3538)
	scala.meta.internal.parsers.ScalametaParser.nonLocalDefOrDcl(ScalametaParser.scala:3523)
	scala.meta.internal.parsers.ScalametaParser$$anonfun$templateStat$1.applyOrElse(ScalametaParser.scala:4495)
	scala.meta.internal.parsers.ScalametaParser$$anonfun$templateStat$1.applyOrElse(ScalametaParser.scala:4489)
	scala.PartialFunction.$anonfun$runWith$1(PartialFunction.scala:231)
	scala.PartialFunction.$anonfun$runWith$1$adapted(PartialFunction.scala:230)
	scala.meta.internal.parsers.ScalametaParser.statSeqBuf(ScalametaParser.scala:4440)
	scala.meta.internal.parsers.ScalametaParser.getStats$2(ScalametaParser.scala:4479)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$scala$meta$internal$parsers$ScalametaParser$$templateStatSeq$3(ScalametaParser.scala:4480)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$scala$meta$internal$parsers$ScalametaParser$$templateStatSeq$3$adapted(ScalametaParser.scala:4477)
	scala.meta.internal.parsers.ScalametaParser.scala$meta$internal$parsers$ScalametaParser$$listBy(ScalametaParser.scala:567)
	scala.meta.internal.parsers.ScalametaParser.scala$meta$internal$parsers$ScalametaParser$$templateStatSeq(ScalametaParser.scala:4477)
	scala.meta.internal.parsers.ScalametaParser.scala$meta$internal$parsers$ScalametaParser$$templateStatSeq(ScalametaParser.scala:4469)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$templateBody$1(ScalametaParser.scala:4322)
	scala.meta.internal.parsers.ScalametaParser.inBracesOr(ScalametaParser.scala:260)
	scala.meta.internal.parsers.ScalametaParser.inBraces(ScalametaParser.scala:256)
	scala.meta.internal.parsers.ScalametaParser.templateBody(ScalametaParser.scala:4322)
	scala.meta.internal.parsers.ScalametaParser.templateBodyOpt(ScalametaParser.scala:4326)
	scala.meta.internal.parsers.ScalametaParser.templateAfterExtends(ScalametaParser.scala:4269)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$template$1(ScalametaParser.scala:4290)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.template(ScalametaParser.scala:4277)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$templateOpt$1(ScalametaParser.scala:4315)
	scala.meta.internal.parsers.ScalametaParser.atPos(ScalametaParser.scala:319)
	scala.meta.internal.parsers.ScalametaParser.autoPos(ScalametaParser.scala:365)
	scala.meta.internal.parsers.ScalametaParser.templateOpt(ScalametaParser.scala:4307)
	scala.meta.internal.parsers.ScalametaParser.$anonfun$classDef$1(ScalametaParser.scala:3937)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:368)
	scala.meta.internal.parsers.ScalametaParser.autoEndPos(ScalametaParser.scala:373)
	scala.meta.internal.parsers.ScalametaParser.classDef(ScalametaParser.scala:3913)
	scala.meta.internal.parsers.ScalametaParser.tmplDef(ScalametaParser.scala:3872)
	scala.meta.internal.parsers.ScalametaParser.topLevelTmplDef(ScalametaParser.scala:3857)
	scala.meta.internal.parsers.ScalametaParser$$anonfun$2.applyOrElse(ScalametaParser.scala:4461)
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

file%3A%2F%2F%2FC%3A%2FUsers%2FABC%2FDesktop%2Fgatling%2Fsrc%2Ftest%2FgatlingTest.scala:10: error: identifier expected but val found
  val scn = scenario("Test Custom CSV Feeder")
  ^