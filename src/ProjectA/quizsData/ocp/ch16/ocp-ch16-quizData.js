const qzString = [
  {
    title:
      "If a try, a catch, and a finally statement are used together but no exception is generated, which blocks are executed and in which order?",
    code: null,
    answers: ["try", "try, catch", "try, catch, finally", "try, finally"]
  },
  {
    title:
      "Fill in the blanks: A try statement__________ a catch or a finally block, while a try-with-resources statement __________.",
    code: null,
    answers: [
      "is not required to contain, is not required to contain either",
      "is not required to contain, must contain one of them",
      "must contain, is not required to contain either",
      "must contain, must contain a catch block"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package park;</code>\n<code>&nbsp;</code>\n<code>class LostBallException extends Exception {}</code>\n<code>public class Ball {</code>\n<code>   public void toss() throw LostBallException {</code>\n<code>      throw new ArrayStoreException();</code>\n<code>   }</code>\n<code>   public static void main(String[] bouncy) {</code>\n<code>      try {</code>\n<code>         new Ball().toss();</code>\n<code>      } catch (Throwable e) {</code>\n<code>         System.out.print("Caught!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Caught!",
      "The code does not compile because LostBallException is not handled or declared in the main() method.",
      "The code does not compile because ArrayStoreException is not handled or declared in the toss() method.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title:
      "Which symbol(s) can be used to separate exception types in a multi-catch statement?",
    code: null,
    answers: ["II only", "III only", "II and III", "I, II, and III"],
    ol: ["&", "|", "||"]
  },
  {
    title:
      "What is the result of executing the following application with assertions enabled?",
    code:
      '<code>1: package ice;</code>\n<code>2: public class Igloo {</code>\n<code>3:    public static void main(String[] bricks) {</code>\n<code>4:       int flakes = 10;</code>\n<code>5:       double assert = 7.0;</code>\n<code>6:       assert (true :"");</code>\n<code>7:       assert flakes++&gt;5;</code>\n<code>8:    }</code>\n<code>9: }</code>',
    answers: [
      "It throws an AssertionError at runtime.",
      "It prints nothing at runtime.",
      "Exactly one line of code does not compile.",
      "Two lines of code do not compile."
    ]
  },
  {
    title: "Which of the following classes is a checked exception?",
    code: null,
    answers: [
      "java.lang.Error",
      "java.lang.IllegalStateException",
      "java.text.ParseException",
      "java.lang.RuntimeException"
    ]
  },
  {
    title:
      "How many constructors in WhaleSharkException compile in the following class?",
    code:
      '<code>package friendly;</code>\n<code>public class WhaleSharkException extends Exception {</code>\n<code>   public WhaleSharkException() {</code>\n<code>      super("Friendly shark!");</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public WhaleSharkException(String message) {</code>\n<code>      super(new Exception(new WhaleSharkException()));</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public WhaleSharkException(Exception cause) {}</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Given the following class diagram, which two classes are missing in the hierarchy starting with the bottom and going upward?",
    code: null,
    answers: [
      "IOException, Exception",
      "RuntimeException, Exception",
      "IllegalArgumentException, RuntimeException",
      "IllegalStateException, RuntimeException"
    ]
  },
  {
    title: "How many lines of text does the following program print?",
    code:
      '<code>package lighting;</code>\n<code>import java.io.IOException;</code>\n<code>public class Light {</code>\n<code>   public void turnOn() throws IOException {</code>\n<code>      new IOException("Not ready");</code>\n<code>   }</code>\n<code>   public static void main(String[] b) throws Exception {</code>\n<code>      try {</code>\n<code>         new Light().turnOn();</code>\n<code>      } catch (RuntimeException b) {  // y1</code>\n<code>         System.out.println(b);</code>\n<code>         throw new IOException();  // y2</code>\n<code>      } finally {</code>\n<code>         System.out.println("complete");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Two",
      "The code does not compile because of line y1.",
      "The code does not compile because of line y2."
    ]
  },
  {
    title:
      "Which statement, when inserted into the main() method of a program, guarantees an AssertionError will be thrown at runtime?",
    code: null,
    answers: [
      'assert(0,"Invalid");',
      "assert 0==1;",
      "assert 0==0;",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package paper;</code>\n<code>import java.io.Closeable;</code>\n<code>public class PrintCompany {</code>\n<code>   class Printer implements Closeable {  // r1</code>\n<code>      public void print() {</code>\n<code>         System.out.println("This just in!");</code>\n<code>      }</code>\n<code>      public void close() {}</code>\n<code>   }</code>\n<code>   public void printHeadlines() {</code>\n<code>      try {Printer p = new Printer()} {  // r2</code>\n<code>         p.print();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] headlines) {</code>\n<code>      new PrintCompany().printHeadlines();  // r3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "This just in!",
      "The code does not compile because of line r1.",
      "The code does not compile because of line r2.",
      "The code does not compile because of line r3."
    ]
  },
  {
    title: "Which statement about try-with-resources is not true?",
    code: null,
    answers: [
      "If the try block and close() method both throw an exception, the one thrown by the close() method is suppressed.",
      "A catch block is not required.",
      "If more than one resource is used, the resources are closed in the order they were  created.",
      "Parentheses are used for the resource declaration section, even if more than one resource is used."
    ]
  },
  {
    title: "How many lines of text does the following program print?",
    code:
      '<code>package bee;</code>\n<code>class SpellingException extends RuntimeException {}</code>\n<code>public class SpellChecker {</code>\n<code>   public final static void main(String... participants) {</code>\n<code>      try {</code>\n<code>         if(!"cat".equals("kat")) {</code>\n<code>            new SpellingException();</code>\n<code>         }</code>\n<code>      } catch (SpellingException | NullPointerException e) {</code>\n<code>         System.out.println("Spelling problem!");</code>\n<code>      } catch (Exception e) {</code>\n<code>         System.out.println("Unknown Problem!");</code>\n<code>      } finally {</code>\n<code>         System.out.println("Done!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["One", "Two", "Three", "The code does not compile."]
  },
  {
    title:
      "Which exception classes, when inserted into the blank in the Problems class, allow the code to compile?",
    code:
      '<code>package more;</code>\n<code>class MissingMoneyException extends Exception {}</code>\n<code>class MissingFoodException extends Exception {}</code>\n<code>public class Problems {</code>\n<code>   public void doIHaveAProblem() throws MissingMoneyException,          MissingFoodException {</code>\n<code>      System.out.println("No problems");</code>\n<code>   }</code>\n<code>   public static void main(String[] lots) throws  ________________{</code>\n<code>      try {</code>\n<code>         final Problems p = new Problems();</code>\n<code>         p.doIHaveAProblem();</code>\n<code>      } catch (Exception e) {</code>\n<code><span epub:type="pagebreak" id="Page_277"></span>         throw e;</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["I only", "III only", "I and III", "I, II, and II"],
    ol: [
      "Exception",
      "MissingMoneyException",
      "MissingMoneyException, MissingFoodException"
    ]
  },
  {
    title: "Which statement about Closeable and AutoCloseable is true?",
    code: null,
    answers: [
      "AutoCloseable extends Closeable.",
      "The close() method in a class that implements AutoCloseable cannot throw an IOException.",
      "The close() method in a class that implements Closeable cannot throw an  Exception.",
      "There is no difference; one was added for backward compatibility."
    ]
  },
  {
    title:
      "Which expression, when inserted into the blank in the following class, allows the code to compile?",
    code:
      "<code>package sun;</code>\n<code>import java.io.*;</code>\n<code>public class Beach {</code>\n<code>   class TideException extends Exception {}</code>\n<code>   public void surf() throws RuntimeException {</code>\n<code>      try {</code>\n<code>         throw new TideException();</code>\n<code>      } catch (________________) {}</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Exception a | RuntimeException f",
      "IllegalStateException | TideException t",
      "TideException | IOException i",
      "TideException | Exception x"
    ]
  },
  {
    title: "Which statement about a multi-catch statement is true?",
    code: null,
    answers: [
      "The exception types must be ordered from broadest to narrowest.",
      "The exception types must be ordered from narrowest to broadest.",
      "The variable of a multi-catch block with more than one exception cannot be reassigned within the block.",
      "The variable of a multi-catch block with one exception type cannot be reassigned within the block."
    ]
  },
  {
    title:
      "Given the following class, how many lines contain compilation errors?",
    code:
      "<code>package move;</code>\n<code>interface Closing {</code>\n<code>   void close() throws Exception;</code>\n<code>}</code>\n<code>class Shelf implements Closing {</code>\n<code>   public void close() throws Exception {}</code>\n<code>}</code>\n<code>public class Step {</code>\n<code>   static {</code>\n<code>      try (Shelf shelf = new Shelf()) {</code>\n<code>         throws new IllegalArgumentException();</code>\n<code>      } catch (Exception e) {</code>\n<code>      } catch (IllegalArgumentException e) {</code>\n<code>      } finally {</code>\n<code>         shelf.close();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["None", "Two", "Three", "Four"]
  },
  {
    title:
      "Which of the following is not true of using a try-with-resources statement?",
    code: null,
    answers: [
      "Associated catch blocks are run before the declared resources have been closed.",
      "It is compatible with all classes that implement the AutoCloseable interface.",
      "It is compatible with all classes that implement the Closeable interface.",
      "It shortens the amount of code a developer must write."
    ]
  },
  {
    title:
      "Assuming the following application is executed with assertions enabled, what is the result?",
    code:
      '<code>package input;</code>\n<code>public class DataIntegrity {</code>\n<code>   private int score;</code>\n<code>   public DataIntegrity() {</code>\n<code>      super();</code>\n<code>      DataIntegrity.this.score = 5;</code>\n<code>   }</code>\n<code>   public static void main(String[] books) {</code>\n<code>      final DataIntegrity johnny5 = new DataIntegrity();</code>\n<code>      assert(johnny5.score&gt;2) : johnny5.score++;</code>\n<code>      assert johnny5.score&gt;=5 : System.out.print("No input");</code>\n<code>      System.out.print("Made it!");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "An AssertionError is thrown with a message of 5.",
      "An AssertionError is thrown with a message of No input.",
      "Made it! is printed.",
      "The code does not compile."
    ]
  },
  {
    title: "Which of the following classes is an unchecked exception?",
    code: null,
    answers: [
      "java.io.IOException",
      "java.io.NotSerializableException",
      "java.sql.SQLException",
      "java.util.MissingResourceException"
    ]
  },
  {
    title: "What is the result of compiling and executing the following class?",
    code:
      '<code>package wind;</code>\n<code>public class Storm {</code>\n<code>   public static void main(String... rain) throws Exception {</code>\n<code>      try (final AutoCloseable weatherTracker = new AutoCloseable() {</code>\n<code>         public void close() throws RuntimeException {}</code>\n<code>      }) {</code>\n<code>         System.out.println(weatherTracker.toString());</code>\n<code>      } catch (Exception e) {</code>\n<code>         if(weatherTracker != null) {</code>\n<code>            weatherTracker.close();</code>\n<code>         }</code>\n<code><span epub:type="pagebreak" id="Page_280"></span>      } finally {</code>\n<code>         System.out.println("Storm gone");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "It prints one line.",
      "It prints two lines.",
      "It does not compile due to an error in the declaration of the weatherTracker resource.",
      "It does not compile for a different reason."
    ]
  },
  {
    title:
      "Which of the following is not a command that enables or disables assertions at runtime?",
    code: null,
    answers: ["-di", "-disableassertions", "-ea", "-enableassertions"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package signlanguage;</code>\n<code>import java.io.Closeable;</code>\n<code>class ReadSign implements Closeable {</code>\n<code>   public void close() {}</code>\n<code>   public String get() {return "Hello";}</code>\n<code>}</code>\n<code>class MakeSign implements AutoCloseable {</code>\n<code>   public void close() {}</code>\n<code>   public void send(String message) {</code>\n<code>      System.out.print(message);</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Translate {</code>\n<code>   public static void main(String... hands) {</code>\n<code>      try (ReadSign r = new ReadSign();</code>\n<code>         MakeSign w = new MakeSign();) {</code>\n<code>         w.send(r.get());</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Hello",
      "The code does not compile because of the ReadSign class.",
      "The code does not compile because of the try-with-resources statement.",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package what;</code>\n<code>class FunEvent implements AutoCloseable {</code>\n<code>   public void close() {</code>\n<code>      System.out.print("1");</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Happening {</code>\n<code>   public static void main(String... lots) {</code>\n<code>      try (FunEvent f = new FunEvent()) {</code>\n<code>         System.out.print("2");</code>\n<code>         throw new ArithmeticException();</code>\n<code>      } catch (Exception e) {</code>\n<code>         System.out.print("3");</code>\n<code>      } finally {</code>\n<code>         System.out.print("4");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["214", "2134", "2314", "The code does not compile."]
  },
  {
    title:
      "Which statement best describes how a class that implements the AutoCloseable interface should be written?",
    code: null,
    answers: [
      "The close() method is optional since the AutoCloseable interface defines a default implementation.",
      "The close() method should avoid modifying data after it has been run once.",
      "The close() method should not throw any exceptions.",
      "The close() method should return a status code."
    ]
  },
  {
    title: "Which statement about the following program is correct?",
    code:
      '<code>package dogpark;</code>\n<code>public class Fetch {</code>\n<code>   public int play(String dogName) throws Exception {</code>\n<code>      try {</code>\n<code>         throw new RuntimeException(dogName);</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw new RuntimeException(e);</code>\n<code>      }</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_282"></span>   public static final void main(String[] ball) throws RuntimeException {</code>\n<code>      new Fetch().play("Webby");</code>\n<code>      new Fetch().play("Georgette");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The program prints one exception at runtime.",
      "The program prints two exceptions at runtime.",
      "The class does not compile because of the play() method.",
      "The class does not compile because of the main() method."
    ]
  },
  {
    title: "Which of the following is not a good use of assertions?",
    code: null,
    answers: [
      "Check method post conditions.",
      "Modify local variables.",
      "Test control flow invariants.",
      "Validate class invariants."
    ]
  },
  {
    title: "Which statement about the following application is correct?",
    code:
      '<code>package highway;</code>\n<code>import java.io.*;</code>\n<code>class CarCrash extends RuntimeException {}</code>\n<code>public class Car {</code>\n<code>   public static void main(String[] seatbelts) throws Exception {  // w1</code>\n<code>      try {</code>\n<code>         throw new IOException("Auto-pilot error");</code>\n<code>      } catch (Exception | CarCrash e) {  // w2</code>\n<code>         throw e;</code>\n<code>      } catch (Exception a) {  // w3</code>\n<code>         throw a;</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line w1.",
      "The code does not compile because of line w2.",
      "The code does not compile because of line w3.",
      "The code compiles and runs without issue."
    ]
  },
  {
    title: "Which statements about the following classes are true?",
    code:
      "<code>public class Dopey extends Grumpy {}</code>\n<code>public class Grumpy extends Exception {}</code>\n<code>public class Happy extends IOException {}</code>\n<code>public class Sleepy extends IllegalStateException {}</code>\n<code>public class Sneezy extends Throwable {}</code>",
    answers: ["I only", "I and III", "II and III", "I, II, and III"],
    ol: [
      "Four of the classes are checked exceptions.",
      "Two of the classes are unchecked exceptions.",
      "None of the class declarations contain any compilation errors."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package vortex;</code>\n<code>class TimeException extends Exception {}</code>\n<code>class TimeMachine implements AutoCloseable {</code>\n<code>   int v;</code>\n<code>   public TimeMachine(int v) {this.v = v;}</code>\n<code>   public void close() throws Exception {</code>\n<code>      System.out.print(v);</code>\n<code>   }</code>\n<code>}</code>\n<code>public class TimeTraveler {</code>\n<code>   public static void main(String[] twelve) {</code>\n<code>      try (TimeMachine timeSled = new TimeMachine(1);</code>\n<code>            TimeMachine delorean = new TimeMachine(2);</code>\n<code>            TimeMachine tardis = new TimeMachine(3)) {</code>\n<code>      } catch (TimeException e) {</code>\n<code>         System.out.print(4);</code>\n<code>      } finally {</code>\n<code>         System.out.print(5);</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["1235", "3215", "41235", "The code does not compile."]
  },
  {
    title:
      "Which expression, when inserted into the blank in the following class, allows the code to compile?",
    code:
      "<code>package music;</code>\n<code>public class Bells {</code>\n<code>   class Player implements AutoCloseable {</code>\n<code>      @Override public void close() throws RingException {}</code>\n<code>   }</code>\n<code>   class RingException extends Exception {</code>\n<code>      public RingException(String message) {}</code>\n<code>   }</code>\n<code>   public static void main(String[] notes) throws Throwable {</code>\n<code>      try (Player p = null) {</code>\n<code>         throw new Exception();</code>\n<code>      } catch (Exception e) {</code>\n<code>      } catch (_______________) {</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Error r",
      "IllegalStateException b",
      "RingException p",
      "The code does not compile regardless of the expression used."
    ]
  },
  {
    title:
      "Given the following two variables, which assertion statement compiles successfully?",
    code:
      '<code>int age = 22;</code>\n<code>final String name = "Josephine";</code>',
    answers: [
      "assert (age=2);",
      'assert age!=age : (1<age ? "Error" : 10);',
      'assert name.equals("") : () -> "Oops";',
      'assert name.length()<(long)age : return "Mistake";'
    ]
  },
  {
    title: "Which statement about the following program is true?",
    code:
      '<code>package tag;</code>\n<code>class MissedCallException extends Exception {}</code>\n<code>public class Phone {</code>\n<code>   static void makeCall() throws RuntimeException {</code>\n<code>      throw new ArrayIndexOutOfBoundsException("Call");</code>\n<code>   }</code>\n<code>   public static void main(String[] messages) {</code>\n<code><span epub:type="pagebreak" id="Page_285"></span>      try {</code>\n<code>         makeCall();</code>\n<code>      } catch (MissedCallException e) {</code>\n<code>         throw new RuntimeException("Voicemail");</code>\n<code>      } finally {</code>\n<code>         throw new RuntimeException("Text");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "An exception is printed at runtime with Call in the message.",
      "An exception is printed at runtime with Voicemail in the message.",
      "An exception is printed at runtime with Text in the message.",
      "The code does not compile."
    ]
  },
  {
    title: "Which statement about the following program is correct?",
    code:
      "<code>package fairy;</code>\n<code>public class Tale {</code>\n<code>   class BearException extends RuntimeException {}</code>\n<code>   class WolfException extends RuntimeException {}</code>\n<code>   class DragonException extends RuntimeException {}</code>\n<code>   public int tellStory() {</code>\n<code>      try {} catch (BearException d) {</code>\n<code>         d = new RuntimeException();</code>\n<code>         throw d;</code>\n<code>      } catch (WolfException | DragonException e) {</code>\n<code>         e = new RuntimeException();</code>\n<code>         throw e;</code>\n<code>      }</code>\n<code>      return 3;</code>\n<code>   }</code>\n<code>   public static void main(String... wand) throws RuntimeException{</code>\n<code>      new Tale().tellStory();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The class compiles and does not print anything at runtime.",
      "The code does not compile solely due to the first catch block in tellStory().",
      "The code does not compile solely due to the second catch block in tellStory().",
      "The code does not compile due to errors in both catch blocks in tellStory()."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package classical;</code>\n<code>import java.io.*;</code>\n<code>class OutOfTuneException extends Exception {</code>\n<code>   OutOfTuneException(String message) { super(message); }</code>\n<code>}</code>\n<code>public class Piano {</code>\n<code>   public void play() throws OutOfTuneException, FileNotFoundException {</code>\n<code>      throw new OutOfTuneException("Sour note!");</code>\n<code>   }</code>\n<code>   public static void main(String... keys) throws OutOfTuneException {</code>\n<code>      final Piano piano = new Piano();</code>\n<code>      try {</code>\n<code>         piano.play();</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw e;</code>\n<code>      } finally {</code>\n<code>         System.out.println("Song finished!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Song finished!",
      "An exception is printed with Sour note! in the stack trace.",
      "Both of the above",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following class, which command causes the class to throw an AssertionError at runtime?",
    code:
      "<code>public class Falcon extends Exception {</code>\n<code>   private int parsec = 12;</code>\n<code>   public Falcon(String name) {</code>\n<code>      super(name);</code>\n<code>   }</code>\n<code>   public static void main(String[] aluminum) {</code>\n<code>      assert new Falcon(null).parsec&lt;12;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "java Falcon",
      "java -ea -da:Falcon Falcon",
      "java -da -ea:Falcon Falcon",
      "The code does not compile."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package db;</code>\n<code>import java.io.*;</code>\n<code>import java.sql.*;</code>\n<code>public class DatabaseHelper {</code>\n<code>   static class MyDatabase implements Closeable {</code>\n<code>      public void close() throws SQLException {</code>\n<code>         System.out.print("2");</code>\n<code>      }</code>\n<code>      public void write(String data) {}</code>\n<code>      public String read() {return null;}</code>\n<code>   }</code>\n<code>   public static void main(String... files) throws Exception {</code>\n<code>      try (MyDatabase myDb = new MyDatabase()) {</code>\n<code>         // TODO: Decide what to read/rite</code>\n<code>      } finally {</code>\n<code>         System.out.print("1");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "12",
      "21",
      "The code does not compile because of the MyDatabase class.",
      "The code does not compile because of the try-with-resources statement."
    ]
  },
  {
    title: "How many lines of text does the following program print?",
    code:
      '<code>package tron;</code>\n<code>class DiskPlayer implements AutoCloseable {</code>\n<code>   public void close() throws Exception {}</code>\n<code>}</code>\n<code>public class LightCycle {</code>\n<code>   public static void main(String... bits) {</code>\n<code>      try (DiskPlayer john = new DiskPlayer()) {</code>\n<code>         System.out.println("ping");</code>\n<code>      } finally {</code>\n<code>         System.out.println("pong");</code>\n<code>      }</code>\n<code><span epub:type="pagebreak" id="Page_288"></span>      System.out.println("return");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["One", "Two", "Three", "The code does not compile."]
  },
  {
    title:
      "Given the application below, what is the name of the class printed at line e1?",
    code:
      "<code>package canyon;</code>\n<code>final class FallenException extends Exception {}</code>\n<code>final class HikingGear implements AutoCloseable {</code>\n<code>   @Override public void close() throws Exception {</code>\n<code>      throw new FallenException();</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Cliff {</code>\n<code>   public final void climb() throws Exception {</code>\n<code>      try (HikingGear gear = new HikingGear()) {</code>\n<code>         throw new RuntimeException();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... rocks) {</code>\n<code>      try {</code>\n<code>         new Cliff().climb();</code>\n<code>      } catch (Throwable t) {</code>\n<code>         System.out.println(t);  // e1</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "canyon.FallenException",
      "java.lang.RuntimeException",
      "The code does not compile.",
      "The code compiles, but the answer cannot be determined until runtime."
    ]
  }
];

const a16 = [
  "D. If no exception is thrown, then the catch block will not be executed. The try block is always visited first, followed by the finally block, which is guaranteed to execute regardless of whether an exception is thrown. For these reasons, Option D is the correct answer, with the statements in the correct order.",
  "C. Unlike a try-with-resources statement, in which the catch and finally blocks are optional, a try statement requires a catch or finally block to be used, or both. For this reason, Option C is the correct answer.",
  "D. The code does not compile because the throw keyword is incorrectly used in the toss() method declaration. The keyword throws should have been used instead. For this reason, Option D is the correct answer. Since LostBallException inherits Throwable and the main() method handles Throwable, LostBallException is handled by the main() method, making Option B incorrect. Option C is also incorrect because ArrayStoreException is an unchecked exception that extends RuntimeException and is not required to be handled or declared. Finally, if throws was used instead of throw, the entire application would compile without issue and print Caught!, making Option A the correct answer.",
  "A. The only symbol permitted to separate exception types in a multi-catch statement is a single pipe character (|). For this reason, Option A is correct.",
  "D. In Java, assert is a keyword, meaning it cannot be used as a variable, class, or method name. For this reason, line 5 does not compile. Line 6 also does not compile because the assert statement is not a method and does not support parentheses around both expressions. Because neither of these lines compile, Option D is the correct answer.",
  "C. First off, Error is an unchecked exception. It is recommended that Error not be caught by most application processes, making Option A incorrect. IllegalStateException inherits RuntimeException, both of which are unchecked, making Options B and D, respectively, incorrect. Option C is correct because ParseException must be handled or declared.",
  "D. The Exception class contains multiple constructors, including one that takes Throwable, one that takes String, and a no-argument constructor. The first WhaleSharkException constructor compiles, using the Exception constructor that takes a String. The second WhaleSharkException constructor also compiles. The two statements, super() and new Exception(), actually call the same constructor in the Exception class, one after another. The last WhaleSharkException compiles with the compiler inserting the default no-argument constructor super(), because it exists in the Exception class. For these reasons, all of the constructors compile, and Option D is the correct answer.",
  "B. The UnsupportedOperationException class is an unchecked exception, which means it inherits from RuntimeException. While Error also is an unchecked exception, the diagram indicates that the class does not inherit from Error. There is only one class between Throwable and RuntimeException in the diagram, and since we know RuntimeException inherits Exception, the other missing class must be Exception. For these reasons, Option B is the correct answer.",
  "C. The code does not compile because the variable b is used twice in the main() method, both in the method declaration and in the catch block, making Option C the correct answer. If a different variable name was used in one of the locations, the program would print one line, complete, making Option A the correct answer. Note that while an exception is created inside the turnOn() method, it is not thrown.",
  "D. First off, unless assertions are enabled at runtime, no assertion statement guarantees an assertion will be thrown at runtime, making Option D the correct answer. Next, Option A does not compile because the assert statement is not a method and does not take arguments in parentheses. It’s also invalid because it requires a boolean expression for the first expression, not a numeric one. An additional value can be specified, but it requires a colon separator (:). Option B would be the correct answer and trigger an error if assertions are enabled, since 0==1 evaluates to false. Option C is incorrect. Even if assertions were enabled, it would not trigger an error since 0==0 evaluates to true.",
  "C. The class does not compile because in line r2, brackets {} are used instead of parentheses () in the try-with-resources statement, making Option C the correct answer. If this line was fixed to use parentheses (), then the rest of the class would compile without issue and print This just in! at runtime, making Option A the correct answer.",
  "C. When both a try block and close() method throw exceptions, the one in the try block is the primary, while the one in the close() method is suppressed. For this reason, Option A is a true statement. Option B is also a true statement, since a catch block is not required when using a try-with-resources statement. Option C is the correct answer, since resources are closed in reverse order in which they are created, not the other way around. Option D is a true statement because multiple resources can be declared within a single set of parentheses, each separated by a semicolon (;).",
  "A. The program compiles without issue, so Option D is incorrect. The narrower SpellingException and NullPointerException, which inherit from Exception, are correctly presented in the first catch block, with the broader Exception being in the second catch block. The if-then statement evaluates to true, and a new SpellingException instance is created, but it is not thrown because it is missing the throw keyword. For this reason, the try block ends without any of the catch blocks being executed. The finally block is then called, making it the only section of code in the program that prints a line of text. For this reason, Option A is the correct answer.",
  "C. First off, the try block is capable of throwing two checked exceptions, MissingMoneyException and MissingFoodException. The catch block uses the Exception class to handle this, since both have Exception as a supertype. It then rethrows the Exception. For this reason, Exception would be appropriate in the blank, making the first statement correct. The compiler is also smart enough to know that there are only two possible subclasses of Exception that can actually be thrown in the main() method, so declaring MissingMoneyException and MissingFoodException together also allows the code to compile, making the third statement correct. The second statement, only inserting MissingMoneyException, would not allow the code to compile because the main() method could throw a checked MissingFoodException that was not handled. For these reasons, Option C is the correct answer.",
  "C. First off, Closeable extends AutoCloseable, making Option A incorrect. The difference between the two is that the close() method in AutoCloseable throws Exception, while the close() method in Closeable throws IOException, making Option D incorrect. Since IOException is a subclass of Exception, both close() methods can throw an IOException, making Option B incorrect. On the other hand, Exception is not a subclass of IOException. For this reason, the close() method in a class that implements Closeable cannot throw an instance of the Exception class, because it is an invalid override using a broader exception type, making Option C the correct answer.",
  "B. Option A does not compile because a multi-catch expression uses a single variable, not two variables. Option C does not compile because it is not possible to throw this checked IOException in the try block. Option D does not compile because multi-catch blocks cannot contain two exceptions in which one is a subclass of the other. If it did, one of the two exceptions would be redundant. Option B is the correct answer and the only expression that allows the class to compile. While both exceptions in the multi-catch block inherit from Exception, neither is a subclass of the other.",
  "C. First off, the order of exceptions in a multi-catch does not matter, only that they not be subclasses of one another, making Options A and B incorrect. Option C is the correct answer because a multi-catch variable is effectively final. Java forbids reassigning of multi-catch variables since it is unclear what the precise reference type is. Option D is incorrect because a multi-catch with a single exception type is just a regular catch block. A regular catch variable is not required to be effectively final and can be reassigned within the catch block.",
  "D. The code does not compile, so Option A is incorrect. The first compilation error is that Shelf does not implement AutoCloseable, meaning a try-with-resources statement cannot be used. Even though Shelf does implement Closing, an interface that uses the same abstract method signature as AutoCloseable, the JVM requires AutoCloseable be implemented to use try-with-resources. The second compilation problem is that throws is used instead of throw inside the try block. Remember that throws is only used in method signatures. The third compilation issue is that the order of exceptions in the two catch blocks are reversed. Since Exception will catch all IllegalArgumentException instances, the second catch block is unreachable. The final compilation error is that the shelf variable is used in the finally block, which is out of scope. Remember that the scope of try-with-resources variables ends when the try statement is complete. For these four reasons, Option D is the correct answer.",
  "A. Option A is the correct answer. Any catch or finally blocks used with a try-with-resources statement are executed after the declared resources have been closed, not before. Options B and C are true statements, since Closeable extends AutoCloseable and the requirement for try-with-resources is that they must be of type AutoCloseable. Finally, Option D is a true statement and one of the primary motivations for using try-with-resources statements.",
  "D. The optional second parameter of an assert statement, when used, must return a value. The second assert statement uses System.out.print() as its second parameter, which has a return type of void. For this reason, the code does not compile, making Option D the correct answer. Other than this one line, the rest of the class compiles without issue.",
  "D. Only one of the classes, MissingResourceException, inherits from the unchecked RuntimeException class, making Option D the correct answer. In fact, IOException and SQLException extend the checked Exception class directly. The NotSerializableException is also checked, since it is a subclass of IOException via ObjectStreamException.",
  "D. The code does not compile, making Options A and B incorrect. The declaration of weatherTracker uses an anonymous inner class that correctly overrides the close() method. Remember that overridden methods cannot throw any new or broader checked exceptions than the inherited method. Alternatively, they can avoid throwing inherited checked exceptions or declare new unchecked exceptions, such as RuntimeException. The compilation error is in the catch block of the main() method, where the weatherTracker variable is out of scope. In try-with-resources statements, the resources are only accessible in the try block. For this reason, Option D is the correct answer.",
  "A. Asserts can be enabled by using the command-line options -ea or -enableassertions and disabled by using -da or -disableassertions. Passing -di does not enable or disable assertions, making Option A the correct answer.",
  "A. The application compiles without issue and prints Hello, making Option A the correct answer. The ReadSign and MakeSign classes are both correctly implemented, with both overridden versions of close() dropping the checked exception. The try-with-resources statement is also correctly implemented for two resources and does not cause any compilation errors or runtime exceptions. Note that the semicolon (;) after the second resource declaration is optional.",
  "B. The code compiles, so Option D is incorrect. The order of evaluation for a try-with-resources statement is that the resources are closed before any associated catch or finally blocks are executed. For this reason, 2 is printed first, followed by 1. The ArithmeticException is then caught and 3 is printed. The last value printed is 4, since the finally block runs at the end. For these reasons, Option B is the correct answer.",
  "B. First off, Option A is an incorrect statement because the AutoCloseable interface does not define a default implementation of close(). Next, the close() method should be idempotent, which means it is able to be run multiple times without triggering any side effects. For this reason, Option B is correct. After being run once, future calls to close() should not change any data. Option C is incorrect because the close() method is fully capable of throwing exceptions. In fact, the signature of the method in AutoCloseable throws a checked Exception, although classes that override it may choose to drop the checked exception. Option D is incorrect because the return type of close() is void, which means no return value can be returned.",
  "D. The play() method compiles without issue, rethrowing a wrapped exception in the catch block. While the main() method does declare RuntimeException, it does not declare or catch the Exception thrown by the calls to play(). Even though the play() method does not appear to actually throw an instance of Exception, because it is declared, the main() method must catch or declare it. Since the checked exception is not handled, the main() method does not compile, and Option D is the correct answer. If the main() method was changed to declare the appropriate checked exception, then the rest of the code would compile, and exactly one exception would be printed, making Option A the correct answer.",
  "B. Assertions are often used to check method post conditions, test control flow invariants, and validate class invariants, making Options A, C, and D true statements. Option B is the correct answer. An assertion should never modify any data because it may be disabled at runtime, leading to unintended side effects.",
  "B. A multi-catch block cannot contain two exceptions in which one is a subclass of the other, since it is a redundant expression. Since CarCrash is a subclass of RuntimeException and RuntimeException is a subclass of Exception, line w2 contains a compilation error, making Option B the correct answer. The rest of the lines of code do not contain any compilation errors.",
  "B. First off, a class must inherit from RuntimeException or Error to be considered an unchecked exception. Dopey and Grumpy both are subclasses of Exception, but not RuntimeException, making them both checked exceptions. Since IOException is a checked exception, the subclass Happy is also a checked exception. Sleepy extends IllegalStateException, which is an unchecked exception that extends RuntimeException. Finally, Sneezy extends Throwable, which does not inherit RuntimeException or Error, making it a checked exception. Therefore, there are a total of four checked exceptions and one unchecked exception within the classes listed here. Since there are no compilation errors in any of the class declarations, Option B is the correct answer, with the first and third statement being true.",
  "D. The close() method in each of the resources throws an Exception, which must be handled or declared in the main() method. The catch block supports TimeException, but it is too narrow to catch Exception. Since there are no other catch blocks present and the main() method does not declare Exception, the try-with-resources statement does not compile, and Option D is the correct answer. If the catch block was modified to handle Exception instead of TimeException, the code would compile without issue and print 3215 at runtime, closing the resources in the reverse order in which they were declared and making Option B the correct answer.",
  "A. The try-catch block already catches Exception, so the correct answer would be the one that is not a subclass of Exception. In this case, Error extends Throwable and is the only choice that allows the code to compile. Because IllegalStateException and RingException both inherit from Exception, Options B and C, respectively, are incorrect. Finally, Option D is incorrect because there is an answer choice that allows the code to compile.",
  "B. Option A does not compile because the assignment (age=2) has a value of int, not boolean, which is required for an assert statement. Option B compiles without issue and is the correct answer. Even though Error and 10 are different data types, String and int respectively, the second assert parameter only needs to be a value, so both are allowed. Option C does not compile because the usage of the lambda expression does not match a functional interface. Option D is incorrect because a return statement is not allowed in the second expression of an assert statement.",
  "D. The MissedCallException is a checked exception since it extends Exception and does not inherit RuntimeException. For this reason, the first catch block fails to compile, since the compiler detects that it is not possible to throw this checked exception inside the try block, making Option D the correct answer. Note that if MissedCallException was changed to extend the checked RuntimeException, then the code would compile and the RuntimeException from the finally block would replace the ArrayIndexOutOfBoundsException from the try block in the message reported to the caller, making Option C the correct answer.",
  "D. The catch variable d is of type BearException that cannot be assigned an instance of the superclass RuntimeException without an explicit cast. For this reason, the first catch block does not compile in tellStory(). The second catch block also does not compile, albeit for a slightly different reason. A catch variable in a multi-catch block must be effectively final because the precise type is not known until runtime. Therefore, the compiler does not allow the variable e to be reassigned. For these two reasons, Option D is the correct answer. Note that the first catch block does allow the catch variable d to be reassigned, it just must be to a class that inherits BearException or is an instance of BearException.",
  "D. The play() method declares two checked exceptions, OutOfTuneException and FileNotFoundException, which are handled in the main() method’s catch block using the Exception type. The catch block then rethrows the Exception. The compiler is smart enough to know that only two possible checked exceptions can be thrown here, but they both must be handled or declared. Since the main() method only declares one of the two checked exceptions, FileNotFoundException is not handled, and the code does not compile. For this reason, Option D is the correct answer. Note that the main() could have also handled or declared Exception, since both checked exceptions inherit it. If the main() method had declared Exception, then Song finished! would have been printed followed by a stack trace, making Option C the correct answer.",
  "C. The code compiles without issue, making Option D incorrect. Option A is incorrect because assertions are not enabled by default in Java. Therefore, the code will run without throwing any exceptions. Option B is also incorrect because the command enables assertions everywhere but disables them for the Falcon class. Option C is the correct answer, with the command disabling assertions everywhere except in the Falcon class, causing an AssertionError to be thrown at runtime.",
  "C. The Closeable interface defines a close() method that throws IOException. The overridden implementation of MyDatabase, which implements Closeable, declares a SQLException. This is a new checked exception not found in the inherited method signature. Therefore, the method override is invalid and the close() method in MyDatabase does not compile, making Option C the correct answer.",
  "D. The code does not compile because the close() method throws an Exception that is not handled or declared in the main() method, making Option D the correct answer. When a try-with-resources statement is used with a close() method that throws a checked exception, it must be handled by the method or caught within the try-with-resources statement. ",
  "B. The code compiles without issue, making Option C incorrect. In the climb() method, two exceptions are thrown. One is thrown by the close() method and the other by the try block. The exception thrown in the try block is considered the primary exception and reported to the caller on line e1, while the exception thrown by the close() method is suppressed. For this reason, java.lang.RuntimeException is thrown to the main() method, and Option B is the correct answer."
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
    answerArray: mapAnswers(qz["answers"], a16[index]),
    explain: a16[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[7].imageUrl = "./images/image-ocp-ch16-8.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
