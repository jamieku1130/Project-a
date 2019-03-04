const qzString = [
  {
    title: "What package is the LocalTime class in?",
    code: null,
    answers: ["java.date", "java.lang", "java.time", "java.util"]
  },
  {
    title:
      "How many of the classes Duration, LocalDateTime, and LocalTime have the concept of a time zone?",
    code: null,
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which class has a getSeconds() method?",
    code: null,
    answers: [
      "Only the Duration class",
      "Only the Period class",
      "Both the Duration and Period classes",
      "Neither class"
    ]
  },
  {
    title: "Which of these represents the earliest date/time?",
    code: null,
    answers: [
      "2017-02-15T03:00+01:00[Europe/Berlin]",
      "2017-02-15T04:00+02:00[Europe/Helsinki]",
      "2017-02-15T05:00+01:00[Europe/Warsaw]",
      "None of the above. We have a tie."
    ]
  },
  {
    title:
      "Most of the United States observes daylight savings time on March 12, 2017, by moving the clocks forward an hour at 2 a.m. What does the following code output?",
    code:
      '<code>LocalDate localDate = LocalDate.of(2017, 3, 12);</code>\n<code>LocalTime localTime = LocalTime.of(1, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>\n<code>Duration duration = Duration.ofHours(3);</code>\n<code>ZonedDateTime later = z.plus(duration);</code>\n<code>System.out.println(later.getHour());</code>',
    answers: ["4", "5", "6", "None of the above"]
  },
  {
    title: "What does the following output?",
    code:
      "<code>int year = 1874;</code>\n<code>int month = Month.MARCH;</code>\n<code>int day = 24;</code>\n<code>LocalDate date = LocalDate.of(year, month, day);</code>\n<code>System.out.println(date.isBefore(LocalDate.now()));</code>",
    answers: [
      "false",
      "true",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which correctly fills in the blank to print 2017-01-15?",
    code:
      "<code>LocalDate hatDay = LocalDate.of(2017, Month.JANUARY, 15);</code>\n<code>DateTimeFormatter f = DateTimeFormatter.ISO_DATE;</code>\n<code>System.out.println(_______________________);</code>",
    answers: ["I", "III", "I and III", "II and III"],
    ol: ["f.format(hatDay)", "f.formatDate(hatDay)", "hatDay.format(f)"]
  },
  {
    title: "Which of the answer choices is true given the following?",
    code:
      "<code>2017-01-07T10:00-07:00[America/Phoenix]</code>\n<code>2017-01-07T08:00-08:00[America/Vancouver]</code>",
    answers: [
      "The first date/time is one hour earlier than the second.",
      "The first date/time is three hours earlier than the second.",
      "The first date/time is one hour later than the second.",
      "The first date/time is three hours later than the second."
    ]
  },
  {
    title:
      "Given that daylight savings time starts on March 12, 2017, at 2 a.m. and clocks jump from 1:59 a.m. to 03:00 a.m., which of the following can fill in the blank so the code doesn’t throw an exception?",
    code:
      '<code>LocalDate localDate = LocalDate.of(2017, 3, 12);</code>\n<code>LocalTime localTime = LocalTime.of(__________);</code>\n<code>ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>',
    answers: [
      "2, 0",
      "3, 0",
      "Either of the above will run without throwing an exception.",
      "Both of these will cause an exception to be thrown."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>11:  LocalDate waffleDay = LocalDate.of(2017, Month.MARCH, 25);</code>\n<code>12:  Period period = Period.of(1, 6, 3);</code>\n<code>13:  LocalDate later = waffleDay.plus(period);</code>\n<code>14:  later.plusDays(1);</code>\n<code>15:  LocalDate thisOne = LocalDate.of(2018, Month.SEPTEMBER, 28);</code>\n<code>16:  LocalDate thatOne = LocalDate.of(2018, Month.SEPTEMBER, 29);</code>\n<code>17:  System.out.println(later.isBefore(thisOne) + " "</code>\n<code>18:     + later.isBefore(thatOne));</code>',
    answers: [
      "false false",
      "false true",
      "true true",
      "The code does not compile."
    ]
  },
  {
    title: "What is a possible result of the following?",
    code:
      '<code>LocalDate montyPythonDay = LocalDate.of(2017, Month.MAY, 10);</code>\n<code>LocalDate aprilFools = LocalDate.of(2018,  Month.APRIL, 1);</code>\n<code>Duration duration = Duration.ofDays(1);</code>\n<code>LocalDate result = montyPythonDay.minus(duration);</code>\n<code>System.out.println(result + " " + aprilFools.isBefore(result));</code>',
    answers: [
      "2017-05-09 false",
      "2017-05-09 true",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What is the result of running this code?",
    code:
      "<code>12:  LocalDate pieDay = LocalDate.of(2017, Month.JANUARY, 23);</code>\n<code>13:  LocalTime midnight = LocalTime.of(0, 0);</code>\n<code>14:  LocalDateTime pieTime = LocalDateTime.of(pieDay, midnight);</code>\n<code>15:</code>\n<code>16:  DateTimeFormatter f = DateTimeFormatter</code>\n<code>17:     .ofLocalizedDate(FormatStyle.SHORT);</code>\n<code>18:  f.format(pieDay);</code>\n<code>19:  f.format(pieTime);</code>\n<code>20:  f.format(midnight);</code>",
    answers: [
      "The code runs successfully.",
      "The code throws an exception on line 19.",
      "The code throws an exception on line 20.",
      "The code does not compile."
    ]
  },
  {
    title:
      "In the United States, daylight savings time ends on November 5th, 2017 at 02:00 a.m. and we repeat the previous hour. What is the output of the following?",
    code:
      '<code>import java.time.*;</code>\n<code> </code>\n<code>public class FallBack {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate localDate = LocalDate.of(2017, Month.NOVEMBER, 5);</code>\n<code>      LocalTime localTime = LocalTime.of(1, 0);</code>\n<code>      ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>      ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>\n<code>&nbsp;</code>\n<code>      for (int i = 0; i &lt; 6; i++)</code>\n<code>         z.plusHours(1);</code>\n<code>&nbsp;</code>\n<code>      System.out.println(z.getHour());</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["5", "6", "7", "None of the above"]
  },
  {
    title:
      "What format pattern would you pass to a DateTimeFormatter so it creates hour and minute output such as 02:33?",
    code: null,
    answers: ["HH:MM", "HH:mm", "hh:MM", "hh:mm"]
  },
  {
    title:
      "LocalTime.of() has a number of overloads. Which of the following is not one of them?",
    code: null,
    answers: [
      "LocalTime.of(int hour, int minute)",
      "LocalTime.of(int hour, int minute, int second)",
      "LocalTime.of(int hour, int minute, int second, int nanoOfSecond)",
      "LocalTime.of(int hour, int minute, int second, int nanoOfSecond,  int picoSeconds)"
    ]
  },
  {
    title:
      "How many of the classes LocalDate, Period, and ZonedDate have a method to get the year?",
    code: null,
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which statement is not true about these two variables?",
    code:
      "<code>Duration duration = Duration.ofDays(1);</code>\n<code>Period period = Period.ofDays(1);</code>",
    answers: [
      "Both output the same value when calling toString().",
      "The Duration object compiles because durations are for smaller units of time.",
      "The Period object compiles because periods are for larger units of time.",
      "None of the above"
    ]
  },
  {
    title: "What is a possible output of this code?",
    code:
      "<code>LocalTime time = LocalTime.of(1,2,3,4);</code>\n<code>System.out.println(time);</code>",
    answers: [
      "01:02:03.4",
      "01:02:03.000000004",
      "01/01/1970 01:02:03.4",
      "01/01/1970 01:02:03.000000004"
    ]
  },
  {
    title: "What does the following print?",
    code:
      '<code>import java.time.*;</code>\n<code>import java.time.format.*;</code>\n<code>&nbsp;</code>\n<code>public class PolarBear {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate polarBearDay = LocalDate.of(2017, 2, 27);</code>\n<code>      DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy dd MMM");</code>\n<code>      System.out.println(polarBearDay.format(formatter));</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: ["2017 27 Jan", "2017 27 Feb", "2017 Jan 27", "2017 Feb 27"]
  },
  {
    title: "Which contains a constant named HOURS?",
    code: null,
    answers: ["ChronoUnit", "Duration", "Instant", "Period"]
  },
  {
    title:
      "The United States observes daylight savings time on March 12, 2017, by moving the clocks forward an hour at 2 a.m. What does the following code output?",
    code:
      '<code>LocalDate localDate = LocalDate.of(2017, 3, 12);</code>\n<code>LocalTime localTime = LocalTime.of(13, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>\n<code>Duration duration = Duration.ofHours(3);</code>\n<code>ZonedDateTime later = z.plus(duration);</code>\n<code>System.out.println(later.getHour());</code>',
    answers: ["13", "16", "17", "None of the above"]
  },
  {
    title: "What is a possible result of the following?",
    code:
      "<code>LocalDate montyPythonDay = LocalDate.of(2017, Month.MAY, 10);</code>\n<code>LocalTime time = LocalTime.of(5, 40);</code>\n<code>LocalDateTime dateTime = LocalDateTime.of(montyPythonDay, time);</code>\n<code>Duration duration = Duration.ofDays(1);</code>\n<code>LocalDateTime result = dateTime.minus(duration);</code>\n<code>System.out.println(result);</code>",
    answers: [
      "2017-05-09",
      "2017-05-09T05:40",
      "2017-05-10T05:40",
      "None of the above"
    ]
  },
  {
    title: "Which correctly fills in the blank to print 2017-01-15?",
    code:
      "<code>LocalDate hatDay = LocalDate.of(2017, Month.JANUARY, 15);</code>\n<code>DateFormatter f = DateFormatter.ISO_DATE;</code>\n<code>System.out.println(______________________________);</code>",
    answers: [
      "f.format(hatDate)",
      "hatDay.format(f)",
      "Both of the above",
      "Neither of the above"
    ]
  },
  {
    title:
      "LocalDateTime.of() has a number of overloads. Which of the following is not one of them?",
    code: null,
    answers: [
      "LocalDateTime.of(LocalDate date, LocalTime time)",
      "LocalDateTime.of(LocalDate date, int hour, int minute)",
      "LocalDateTime.of(int year, int month, int day, int hour, int minute)",
      "LocalDateTime.of(int year, Month month, int day, int hour, int minute)"
    ]
  },
  {
    title:
      "In the United States, daylight savings time for 2017 starts at 2 a.m. on March 12th and ends at 2 a.m. on November 5th. Given the sequence in the following image, what time comes next on March 12th, July 4th, and November 5th, respectively?",
    code: null,
    answers: [
      "01:00, 02:00, 01:00",
      "01:00, 02:00, 03:00",
      "03:00, 02:00, 01:00",
      "03:00, 02:00, 03:00"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>LocalDate date1 = LocalDate.of(2017, Month.MARCH, 3);</code>\n<code>LocalDate date2 = LocalDate.of(2017, Month.FEBRUARY, 31);</code>\n<code>System.out.println(date1.equals(date2));</code>",
    answers: [
      "false",
      "true",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Given this date/time and time zone offset, what time is it in GMT?",
    code: "<code>2017-03-09T16:00-10:00[US/Hawaii]</code>",
    answers: ["02:00", "04:00", "06:00", "10:00"]
  },
  {
    title: "What is a possible output of the following?",
    code:
      '<code>LocalDate trainDay = LocalDate.of(2017, 5, 13);</code>\n<code>LocalTime time = LocalTime.of(10, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/Los_Angeles");</code>\n<code><span epub:type="pagebreak" id="Page_297"></span>ZonedDateTime zdt = ZonedDateTime.of(trainDay, time, zone);</code>\n<code>Instant instant = zdt.toInstant();</code>\n<code>instant = instant.plus(1, ChronoUnit.DAYS);</code>\n<code>System.out.println(instant);</code>',
    answers: [
      "2017-05-13T10:00-07:00[America/Los_Angeles]",
      "2017-05-13T17:00:00Z",
      "2017-05-14T10:00-07:00[America/Los_Angeles]",
      "2017-05-14T17:00:00Z"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>LocalDate date = LocalDate.of(2017, Month.JULY, 17);</code>\n<code>LocalTime time = LocalTime.of(10, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>ZonedDateTime iceCreamDay = ZonedDateTime.of(date, time, zone);</code>\n<code>time = time.plusMonths(1);</code>\n<code>System.out.println(iceCreamDay.getMonthValue());</code>',
    answers: ["6", "7", "8", "The code does not compile."]
  },
  {
    title: "What does the following print?",
    code:
      '<code>import java.time.*;</code>\n<code>import java.time.format.*;</code>\n<code>&nbsp;</code>\n<code>public class PolarBear {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate polarBearDay = LocalDate.of(2017, 2, 27);</code>\n<code>      DateTimeFormatter formatter = DateTimeFormatter</code>\n<code>         .ofPattern("Holiday: yyyy dd MMM");</code>\n<code>      System.out.println(polarBearDay.format(formatter));</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "Holiday: 2017 27 Jan",
      "Holiday: 2017 27 Feb",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of these represents the earliest date/time?",
    code: null,
    answers: [
      "2017-02-15T16:00+07:00 [Asia/Bangkok]",
      "2017-02-15T18:00+04:00 [Asia/Dubai]",
      "2017-02-15T20:00+08:00 [Asia/Kuala_Lumpur]",
      "None of the above. We have a tie."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>11:  LocalDate waffleDay = LocalDate.of(2017, Month.MARCH, 25);</code>\n<code>12:  Period period = Period.ofYears(1).ofMonths(6).ofDays(3);</code>\n<code>13:  LocalDate later = waffleDay.plus(period);</code>\n<code>14:  later.plusDays(1); 15:  LocalDate thisOne = LocalDate.of(2018, Month.SEPTEMBER, 28);</code>\n<code>16:  LocalDate thatOne = LocalDate.of(2018, Month.SEPTEMBER, 29);</code>\n<code>17:  System.out.println(later.isBefore(thisOne) + " "</code>\n<code>18:     + later.isBefore(thatOne));</code>',
    answers: [
      "false false",
      "false true",
      "true true",
      "The code does not compile."
    ]
  },
  {
    title: "",
    code:
      "<code>LocalDate xmas = LocalDate.of(2017,  12, 25);</code>\n<code>LocalDate blackFriday = LocalDate.of(2017, 11, 24);</code>\n<code>long shoppingDaysLeft =____________________ ;</code>\n<code>System.out.println(shoppingDaysLeft);</code>",
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title:
      "How many of these classes cause a compiler error when filling in the blank: LocalDate, LocalDateTime, LocalTime, ZonedDateTime?",
    code:
      "<code>private static String formatMe(__________ obj) {</code>\n<code>   DateTimeFormatter f = DateTimeFormatter.ofLocalizedTime(FormatStyle.MEDIUM);</code>\n<code>   return f.format(obj);</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>LocalDate date = LocalDate.of(2017, Month.JULY, 17);</code>\n<code>LocalTime time = LocalTime.of(10, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>ZonedDateTime iceCreamDay = ZonedDateTime.of(date, time, zone);</code>\n<code>date = date.plusMonths(1);</code>\n<code>System.out.println(iceCreamDay.getMonthValue());</code>',
    answers: ["6", "7", "8", "The code does not compile."]
  },
  {
    title:
      "Which of the following can fill in the blank to make this code compile?",
    code:
      "<code>public boolean isItMyBirthday(LocalDateTime dateTime) {</code>\n<code>  ______________________________ </code>\n<code>   return now.getMonth() == dateTime.getMonth()</code>\n<code>      &amp;&amp; now.getDayOfMonth() == dateTime.getDayOfMonth();</code>\n<code>}</code>",
    answers: [
      "LocalDate now = LocalDate.now();",
      "LocalDate now = new LocalDate();",
      "ZonedDate now = ZonedDate.now();",
      "ZonedDate now = new ZonedDate();"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>LocalDate date1 = LocalDate.of(2017, Month.MARCH, 3);</code>\n<code>LocalDate date2 = date1.plusDays(2).minusDays(1).minusDays(1);</code>\n<code>System.out.println(date1.equals(date2));</code>",
    answers: [
      "false",
      "true",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is a possible output of the following?",
    code:
      "<code>LocalDate date = LocalDate.of(2017, 5, 13);</code>\n<code>LocalTime time = LocalTime.of(10, 0);</code>\n<code>LocalDateTime trainDay = LocalDateTime.of(date, time);</code>\n<code>Instant instant = trainDay.toInstant();</code>\n<code>instant = instant.plus(1, ChronoUnit.DAYS);</code>\n<code>System.out.println(instant);</code>",
    answers: [
      "2017-05-14T10:00-07:00[America/Los_Angeles]",
      "2017-05-14T17:00:00Z",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>public class PiDay {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDateTime pi = LocalDateTime.of(2017, 3, 14, 1, 59);</code>\n<code>      DateTimeFormatter formatter = DateTimeFormatter</code>\n<code>         .ofPattern("M.ddhhmm");</code>\n<code>      System.out.println(formatter.format(pi));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "3.140159",
      "59.140103",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Daylight savings time ends on November 5, 2017 at 2 a.m. when we repeat the hour. Suppose we have a ZonedDateTime that outputs 2017-11-05T01:00-04:00[America/ New_York] when calling toString(). What is a possible value of the ZonedDateTime obtained by adding an hour to this value?",
    code: null,
    answers: [
      "2017-11-05T01:00-04:00[America/New_York]",
      "2017-11-05T02:00-04:00[America/New_York]",
      "2017-11-05T01:00-05:00[America/New_York]",
      "2017-11-05T02:00-05:00[America/New_York]"
    ]
  }
];

const a17 = [
  "C. The date and time classes added in Java 8 are in the java.time package, making Option C correct. The older date classes are in the java.util package.",
  "A. The Duration class is used to reflect an amount of time using small units like minutes. Since it just uses units of time, it does not involve time zones. The LocalTime class contains units of hours, minutes, seconds, and fractional seconds. The LocalDateTime class contains all the data in a LocalTime and adds on a year, month, and date. Neither of these classes uses time zones. There is a ZonedDateTime class when you need to use time zones. Since none of the three classes listed includes a time zone, Option A is correct.",
  "A. A Period is measured in days, weeks, months, or years. A Duration is measured in smaller units like minutes or seconds. Only Duration has a getSeconds() method, making Option A correct.",
  "D. To compare times in different time zones, you can subtract the time zone from the time to convert to GMT. This makes it 02:00 in Berlin because we subtract 1 from 3. Similarly, it is 02:00 in Helsinki due to subtracting 2 from 4. Finally, it is 04:00 in Warsaw because we subtracted 1 from 5. We have a tie because it is the same time in Berlin and Helsinki, so Option D is correct.",
  "B. On a normal night, adding three hours to 1 a.m. makes it 4 a.m. However, this date begins daylight savings time. This means we add an extra hour to skip the 2 a.m. hour. This makes later contain 05:00 instead of 04:00. Therefore, the code prints 5, and Option B is correct.",
  "C. LocalDate allows passing the month as an int or Month enum parameter. However, Month.MARCH is an enum. It cannot be assigned to an int variable, so the declaration of month does not compile, and Option C is correct.",
  "C. Both LocalDate and DateTimeFormatter have a format() method. This makes II incorrect. While it is tricky, you do need to know that the format() method can be called on either object. Since I and III are correct, Option C is the answer.",
  "C. Converting to GMT by subtracting the time zone offset, it is 17:00 for the Phoenix time since 10 minus negative 7 is 17. In GMT, the Vancouver time is 16:00 due to subtracting negative 8 from 8. Remember that subtracting a negative number is the same as adding. Therefore, the Vancouver time is an hour earlier than the Phoenix time, and Option C is correct.",
  "C. While there is no 2 a.m. on the clock that night, Java adjusts the time to 3 a.m. automatically and changes the time zone. It does not throw an exception, so Option D is incorrect. Option B is a valid expression, since any value after the time adjustment is just a normal time on the clock. Since both A and B are valid expressions, Option C is the correct answer.",
  "B. Line 12 creates a Period representing a year, six months, and three days. Adding this to waffleDay gives us the year 2018, the month of September, and a day of 28. This new date is stored in later on line 13 and represents September 28, 2018. Line 14 has no effect as the return value is ignored. Line 17 checks that you know that isBefore() returns false if the value is an exact match. Since thisOne is an exact match but thatOne is a whole day before, the output is false true, making Option B correct.",
  "D. Duration is supposed to be used with objects that contain times. While it has an ofDays() method, this is a convenience method to represent a large number of seconds. This means that calling Duration.ofDays(1) is fine. However, this code throws an UnsupportedTemporalTypeException when you try to pass it the minus() method on LocalDate, making Option D correct. Note that the question asks about a possible result rather than the definitive result because the format of dates varies by region.",
  "C. The DateTimeFormatter is created with ofLocalizedDate(). It knows how to format date fields but not time fields. Line 18 is fine because a LocalDate clearly has date fields. Line 19 is also fine. Since a LocalDateTime has both date and time fields, the formatter just looks at the date fields. Line 20 is a problem. A LocalTime object does not have any date fields so the formatter throws an UnsupportedTemporalTypeException, making Option C the answer.",
  "D. This question is tricky. It appears to be about daylight savings time. However, the result of z.plusHours(1) is never stored in a variable or used. Since ZonedDateTime is immutable, the time remains at 01:00. The code prints out 1, making none of these correct and Option D the answer.",
  "D. For dates, a lowercase m means minute while an uppercase M means month. This eliminates Options A and C. A lowercase h means hour. Therefore, Option B is incorrect, and Option D is the answer.",
  "D. There are three overloads for LocalTime.of(). Options A, B, and C are all valid overloads. Option D is not because Java only allows passing one fractional second parameter. Java does support nanoseconds, but not the further granularity of picoseconds.",
  "C. The LocalDate class represents a date using year, month, and day fields. There is a getYear() method to get the year. The Period class holds units of years, months, and days. It has a getYears() method. There is not a date/time class called ZonedDate. There is a class called ZonedDateTime, which does have a getYear() method. Since only LocalDate and Period have a method to get the year, Option C is correct.",
  "A. Duration is used for units of time a day and smaller, making Option B a true statement. Period is used for units of time a day and larger, making Option C a true statement. While both represent the same length of time, they output different values when calling toString(). The Duration object outputs PT24H, and the Period object outputs P1D. This shows that Duration is providing the ofDays() method as a convenience instead of requiring the programmer to type 24 hours. Option A is the answer.",
  "B. The first thing to notice is that this is a LocalTime object. Since there is no date component, Options C and D are incorrect. Four parameters are passed to this LocalTime method. The first three are the hour, minute, and second. The fourth is nanoseconds, which are fractions of a second. While you aren’t expected to do calculations with nanoseconds, you should know that a fraction of a second is at the end of the output. Option A is incorrect because .4 is 40 percent of a second. That’s far larger than 4 nanoseconds. Therefore, Option B is correct.",
  "B. LocalDate starts counting months from one, so month 2 is February. This rules out Options A and C. The pattern specifies that the date should appear before the month, making Option B correct.",
  "A. The ChronoUnit enum contains values for various measures of time including HOURS, so Option A is correct.",
  "B. Adding three hours to 13:00 makes it 16:00. While this date happens to be the start of daylight savings time, the change occurs at 2 a.m. This code uses 13:00, which is 1 p.m. Since the calculation does not cross 2 a.m., the fact that it is the date that starts daylight savings time is irrelevant. Option B is correct because the hour is 16 and the time is 16:00.",
  "B. This code correctly subtracts a day from montyPythonDay. It then outputs a LocalDateTime value. Option A is incorrect because it omits the time. Option B is correct because it represents one day earlier than the original date and includes a time in the output.",
  "D. There is a DateTimeFormatter class, but not a DateFormatter class. The DateTimeFormatter class is used for formatting dates, times, or both. Since the provided code does not compile, nothing can fill in the blank to make the code print 2017-01-15, and Option D is the answer.",
  "B. There are many overloads for LocalDateTime.of(). Option A is a valid overload because it uses date and time objects. Options C and D are also valid overloads, showing you can pass the month as an int or Month enum. Option B is the answer. Java doesn’t allow combining a LocalDate object with time fields directly.",
  "C. In the first time change of the year, clocks “spring ahead” and skip the 02:00–03:00 hour entirely. This means 1:59 is followed by 03:00 on March 12, 2017. By contrast, July 4 is a normal day and 1:59 is followed by 02:00. In the second time change of the year, clocks “fall back” and repeat an hour, so 1:59 is followed by 01:00. Granted, you can’t tell whether this is the first or second 1:59 from the image. If this information is relevant to a question’s context, the question will specify this fact. In this case, 03:00, 02:00, 02:00 is not a choice. Option C is the answer.",
  "D. February has 28 or 29 days, depending on the year. There is never a February 31. Java throws a DateTimeException when you try to create an invalid date, making Option D correct.",
  "A. This one is tricky. In order to determine GMT, you need to subtract the time zone offset from the hour. In this case, the time zone offset is negative 10. Since subtracting a negative number is like adding a positive number, this means we are adding 16 and 10. That gives us 26. However, there are only 24 hours in a day. We’ve crossed a time zone boundary, so we can remove a whole 24-hour day. Subtracting 24 from 26 gives us 2. This means it is 02:00 in GMT, and Option A is correct. It’s also a day later in GMT, but the question didn’t ask that.",
  "D. An Instant represents a specific moment in time using GMT. Since there are no time zones included, Options A and C are incorrect. This code correctly adds one day to the instant, making Option D correct.",
  "D. Make sure to pay attention to date types. This code attempts to add a month to a LocalTime value. There is no plusMonths() method on LocalTime, so Option D is correct.",
  "D. The format of the pattern is incorrect. You can’t just put literal text in there. Most of the characters of Holiday: are not defined formatting symbols. The code throws an IllegalArgumentException, so Option D is correct.",
  "A. To compare times in different time zones, you can subtract the time zone from the time. This makes it 09:00 in Bangkok because we subtract 7 from 16. Similarly, it is 14:00 in Dubai due to subtracting 4 from 18. Finally, it is 12:00 in Kuala Lumpur because we subtracted 8 from 20. Notice how we used a 24-hour clock to make comparing times easier. The earliest time is in Bangkok, so Option A is correct.",
  "C. Line 12 creates a Period representing three days. Period objects do not chain, so only the last method call, which is to ofDays(3), is used in determining the value. Adding three days sets later to March 28, 2017. Line 14 has no effect as the return value is ignored. March 28, 2017, is before both thisOne and thatOne, so Option C is correct.",
  "B. The TemporalUnit interface does not define a DAYS constant, making II and IV incorrect. The until() and between() methods have the same behavior. They determine how many units of time are between two dates. One takes both dates as parameter and the other is an instance method on the date. Since I and III are equivalent, Option B is the answer. Note that while we don’t have date times in this question, the until() and between() methods work the same way for them.",
  "A. The DateTimeFormatter class is used to format all of these objects. The method will throw an exception if called with a LocalDate since the formatter only knows about time fields. However, it will still compile, making Option A correct.",
  "B. This code begins by correctly creating four objects. It then adds a month to date. Since Java 8 date/time classes are immutable, this does not affect the value of iceCreamDay. Therefore, iceCreamDay remains in July. Since months count from one, Option B is correct.",
  "A. Java 8 date and time classes are immutable. They use a static factory method to get the object reference rather than a constructor. This makes Options B and D incorrect. Further, there is not a ZonedDate class. There is a ZonedDateTime class. As a result, Option C is incorrect, and Option A is the answer.",
  "B. The first line of code correctly creates a LocalDate object representing March 3, 2017. The second line adds two days to it, making it March 5. It then subtracts a day, making it March 4. Finally, it subtracts yet another day ending at March 3. The outcome of all this is that we have two dates that have the same value, and Option B is correct.",
  "C. An Instant represents a specific moment in time using GMT. Since LocalDateTime does not have a time zone, it cannot be converted to a specific moment in time. Therefore, the toInstant() call does not compile, and Option C is correct.",
  "A. While it is traditional to include the year when outputting a date, it is not required. This code correctly prints the month followed by a decimal point. After the decimal point, it prints the day of the month followed by the hours and minutes. Happy Pi Day!",
  "C. Normally, adding an hour would result in 02:00 in the same time zone offset of –05:00. Since the hour is repeated, it is 01:00 again. However, the time zone offset changes instead. Therefore, Option C is correct."
];

const convertCorrectIndex = string => {
  switch (string[0]) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
    case "E":
      return 4;
    case "F":
      return 5;
    case "G":
      return 6;
    case "H":
      return 7;
    case "I":
      return 8;
    default:
      throw new Error("no match character");
  }
};

const mapAnswers = (answers, string) => {
  const correctIndex = convertCorrectIndex(string);
  if (!Array.isArray(answers)) {
    console.log(answers);
    return;
  }
  return answers.map((answer, index) => {
    return {
      answer,
      isCorrect: index === correctIndex
    };
  });
};

const quizs = qzString.map((qz, index) => {
  return {
    id: index,
    title: qz["title"],
    code: qz["code"],
    imageUrl: null,
    answerArray: mapAnswers(qz["answers"], a17[index]),
    explain: a17[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[24].imageUrl = "./images/image-ocp-ch17-25.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
