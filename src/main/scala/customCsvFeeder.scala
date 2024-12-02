package com.CustomCsvFeeder

import scala.io.Source
import io.gatling.core.feeder._
import io.gatling.core.Predef._

object CustomCsvFeeder {
  def apply(fileName: String, from: Int, to: Int): IndexedSeq[Map[String, String]] = {
    val source = Source.fromFile(fileName)
    try {
      val lines = source.getLines().toList
      if (lines.isEmpty) {
        throw new IllegalArgumentException(s"CSV file $fileName is empty")
      }

      val headers = lines.head.split(",").map(_.trim)
      val rows = lines.tail.slice(from - 1, to)

      val data: IndexedSeq[Map[String, String]] = rows.map { line =>
        val values = line.split(",").map(_.trim)
        headers.zip(values).toMap
      }.toIndexedSeq

      data
    } finally {
      source.close()
    }
  }
}