const qzString = [
  {
    title:
      "What is the result of compiling and executing the following application?",
    code:
      "<code>package mind;</code>\n<code>public class Remember {</code>\n<code>   public static void think() throws Exception {  // k1</code>\n<code>      try {</code>\n<code>         throw new Exception();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... ideas) throws Exception {</code>\n<code>      think();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code compiles and runs without printing anything.",
      "The code compiles but a stack trace is printed at runtime.",
      "The code does not compile because of line k1.",
      "The code does not compile for another reason."
    ]
  },
  {
    title:
      "Choose the answer that lists the keywords in the order that they would be used together.",
    code: null,
    answers: [
      "catch, try, finally",
      "try, catch, finally",
      "finally, catch, try",
      "try, finally, catch"
    ]
  },
  {
    title:
      "Which of the following diagrams of java.lang classes shows the inheritance model properly?",
    code: null,
    answers: ["", "", "", ""]
  },
  {
    title:
      "Which of the following Throwable types is it recommended not to catch in a Java application?",
    code: null,
    answers: ["Error", "CheckedException", "Exception", "RuntimeException"]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package game;</code>\n<code>public class Baseball {</code>\n<code>   public static void main(String... teams) {</code>\n<code>      try {</code>\n<code>         int score = 1;</code>\n<code>         System.out.print(score++);</code>\n<code>      } catch (Throwable t) {</code>\n<code>         System.out.print(score++);</code>\n<code>      } finally {</code>\n<code>         System.out.print(score++);</code>\n<code>      }</code>\n<code>      System.out.print(score++);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["123", "124", "12", "None of the above"]
  },
  {
    title: "Which of the following is a checked exception?",
    code: null,
    answers: [
      "ClassCastException",
      "IOException",
      "ArrayIndexOutOfBoundsException",
      "IllegalArgumentException"
    ]
  },
  {
    title:
      "Fill in the blanks: The  ____________keyword is used in method declarations, while the  ____________keyword is used to throw an exception to the  surrounding process.",
    code: null,
    answers: ["throws, throw", "catch, throw", "throw, throws", "throws, catch"]
  },
  {
    title:
      "If a try statement has catch blocks for both Exception and IOException, then which of the following statements is correct?",
    code: null,
    answers: [
      "The catch block for Exception must appear before the catch block for IOException.",
      "The catch block for IOException must appear before the catch block for Exception.",
      "The catch blocks for these two exception types can be declared in any order.",
      "A try statement cannot be declared with these two catch block types because they are incompatible."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package game;</code>\n<code>public class Football {</code>\n<code><span epub:type=\"pagebreak\" id=\"Page_119\"></span>   public static void main(String officials[]) {</code>\n<code>      try {</code>\n<code>         System.out.print('A');</code>\n<code>         throw new RuntimeException(\"Out of bounds!\");</code>\n<code>      } catch (ArrayIndexOutOfBoundsException aioobe) {</code>\n<code>         System.out.print('B');</code>\n<code>         throw t;</code>\n<code>      } finally {</code>\n<code>         System.out.print('C');</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "ABC",
      "ABC, followed by a stack trace for a RuntimeException",
      "AC, followed by a stack trace for a RuntimeException",
      "None of the above"
    ]
  },
  {
    title:
      "What is the result of compiling and running the following application?",
    code:
      '<code>package castles;</code>\n<code>public class Fortress {</code>\n<code>   public void openDrawbridge() throws Exception {  // p1</code>\n<code>      try {</code>\n<code>         throw new Exception("Circle");</code>\n<code>      } catch (Exception e) {</code>\n<code>         System.out.print("Opening!");</code>\n<code>      } finally {</code>\n<code>         System.out.print("Walls");  // p2</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] moat) {</code>\n<code>      new Fortress().openDrawbridge();  // p3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line p1.",
      "The code does not compile because of line p2.",
      "The code does not compile because of line p3.",
      "The code compiles, but a stack trace is printed at runtime."
    ]
  },
  {
    title:
      "Which of the following exception types must be handled or declared by the method in which they are thrown?",
    code: null,
    answers: [
      "NullPointerException",
      "Exception",
      "RuntimeException",
      "ArithmeticException"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package game;</code>\n<code>public class BasketBall {</code>\n<code>   public static void main(String[] dribble) {</code>\n<code>      try {</code>\n<code>         System.out.print(1);</code>\n<code>         throw new ClassCastException();</code>\n<code>      } catch (ArrayIndexOutOfBoundsException ex) {</code>\n<code>         System.out.print(2);</code>\n<code>      } catch (Throwable ex) {</code>\n<code>         System.out.print(3);</code>\n<code>      } finally {</code>\n<code>         System.out.print(4);</code>\n<code>      }</code>\n<code>      System.out.print(5);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "1345",
      "1235",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following statements about a finally block is true?",
    code: null,
    answers: [
      "Every line of the finally block is guaranteed to be executed.",
      "The finally block is executed only if the related catch block is also executed.",
      "The finally statement requires brackets {}.",
      "The finally block cannot throw an exception."
    ]
  },
  {
    title:
      "Given that FileNotFoundException is a subclass of IOException, what is the output of the following application?",
    code:
      '<code>package office;</code>\n<code>import java.io.*;</code>\n<code>public class Printer {</code>\n<code>   public void print() {</code>\n<code>      try {</code>\n<code>         throw new FileNotFoundException();</code>\n<code>      } catch (IOException exception) {</code>\n<code>         System.out.print("Z");</code>\n<code>      } catch (FileNotFoundException enfe) {</code>\n<code>         System.out.print("X");</code>\n<code>      } finally {</code>\n<code>         System.out.print("Y");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... ink) {</code>\n<code>      new Printer().print();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "XY",
      "ZY",
      "The code does not compile.",
      "The code compiles but a stack trace is printed at runtime."
    ]
  },
  {
    title: "",
    code: null,
    answers: [
      "I only",
      "II only",
      "I or III, or both",
      "None of these statements are required with a try statement."
    ]
  },
  {
    title: "Which statement about the role of exceptions in Java is incorrect?",
    code: null,
    answers: [
      "Exceptions are often used when things “go wrong” or deviate from the expected path.",
      "An application that throws an exception will terminate.",
      "Some exceptions can be avoided programmatically.",
      "An application that can properly handle its exception may recover from unexpected problems."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package harbor;</code>\n<code>class CapsizedException extends Exception {}</code>\n<code>class Transport {</code>\n<code>   public int travel() throws CapsizedException { return 2; };</code>\n<code>}</code>\n<code>public class Boat {</code>\n<code>   public int travel() throws Exception { return 4; };  // j1</code>\n<code>   public static void main(String... distance) throws Exception{</code>\n<code>      try {</code>\n<code>         System.out.print(new Boat().travel());</code>\n<code>      } catch (Exception e) (</code>\n<code>         System.out.print(8);</code>\n<code>      )</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "4",
      "8",
      "The code does not compile due to line j1.",
      "The code does not compile for another reason."
    ]
  },
  {
    title:
      "Which of following method signatures would not be allowed in a class implementing the Printer interface?",
    code:
      "<code>class PrintException extends Exception {}</code>\n<code>class PaperPrintException extends PrintException {}</code>\n<code>&nbsp;</code>\n<code>public interface Printer {</code>\n<code>   abstract int printData() throws PrintException;</code>\n<code>}</code>",
    answers: [
      "public int printData() throws PaperPrintException",
      "public int printData() throws Exception",
      "public int printData()",
      "None of the above"
    ]
  },
  {
    title:
      "Which import statement is required to be declared in order to use the Exception, RuntimeException, and Throwable classes in an application?",
    code: null,
    answers: [
      "import java.exception.*;",
      "import java.util.exception.*;",
      "import java.lang.*;",
      "None of the above"
    ]
  },
  {
    title: "Which statement about the following classes is correct?",
    code:
      '<code>class GasException extends Exception {}</code>\n<code>class Element {</code>\n<code>   public int getSymbol() throws GasException { return -1; }  // g1</code>\n<code>}</code>\n<code>public class Oxygen extends Element {</code>\n<code>   public int getSymbol() { return 8; }  // g2</code>\n<code>   public void printData() {</code>\n<code>      try {</code>\n<code>         System.out.print(getSymbol());</code>\n<code>      } catch {  // g3</code>\n<code>         System.out.print("Unable to read data");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line g1.",
      "The code does not compile because of line g2.",
      "The code does not compile because of line g3.",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: A program must handle or declare  ____________but should never handle ____________.",
    code: null,
    answers: [
      "java.lang.Error, unchecked exceptions",
      "checked exceptions, java.lang.Error",
      "java.lang.Throwable, java.lang.Error",
      "unchecked exceptions, java.lang.Exception"
    ]
  },
  {
    title:
      "What is the result of compiling and running the following application?",
    code:
      '<code>package castles;</code>\n<code>class CastleUnderSiegeException extends Exception {}</code>\n<code>class KnightAttackingException extends CastleUnderSiegeException {}</code>\n<code>public class Citadel {</code>\n<code>   public void openDrawbridge() throws RuntimeException {  // q1</code>\n<code><span epub:type="pagebreak" id="Page_123"></span>      try {</code>\n<code>         throw new KnightAttackingException();</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw new ClassCastException();</code>\n<code>      } finally {</code>\n<code>         throw new CastleUnderSiegeException();  // q2</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] moat) {</code>\n<code>      new Citadel().openDrawbridge();  // q3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line q1.",
      "The code does not compile because of line q2.",
      "The code does not compile because of line q3.",
      "The code compiles, but a stack trace is printed at runtime."
    ]
  },
  {
    title:
      "If an exception matches two or more catch blocks, which catch block is executed?",
    code: null,
    answers: [
      "The first one that matches is executed.",
      "The last one that matches is executed.",
      "All matched blocks are executed.",
      "It is not possible to write code like this."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package system;</code>\n<code>public class Computer {</code>\n<code>   public void compute() throws Exception {</code>\n<code>      throw new RuntimeException("Error processing request");</code>\n<code>   }</code>\n<code>   public static void main(String[] bits) {</code>\n<code>      try {</code>\n<code>         new Computer().compute();</code>\n<code>         System.out.print("Ping");</code>\n<code>      } catch (NullPointerException e) {</code>\n<code>         System.out.print("Pong");</code>\n<code>         throw e;</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Ping",
      "Pong",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "In the following application, the value of list has been omitted. Assuming the code compiles without issue, which one of the following is not a possible output of executing this class?",
    code:
      "<code>package checkboard;</code>\n<code>&nbsp;</code>\n<code>public class Attendance {</code>\n<code>   private Boolean[] list = // value omitted</code>\n<code>   public int printTodaysCount() {</code>\n<code>      int count=0;</code>\n<code>      for(int i=0; i&lt;10; i++) {</code>\n<code>         if(list[i]) ++count;</code>\n<code>      }</code>\n<code>      return count;</code>\n<code>   }</code>\n<code>   public static void main(String[] roster) {</code>\n<code>      new Attendance().printTodaysCount();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "A stack trace for NullPointerException is printed.",
      "A stack trace for ArrayIndexOutOfBoundsException is printed.",
      "A stack trace for ClassCastException is printed.",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: A  ____________occurs when a program recurses too deeply into an infinite loop, while a(n)  ____________occurs when a reference to a nonexistent object is acted upon.",
    code: null,
    answers: [
      "NoClassDefFoundError, StackOverflowError",
      "StackOverflowError, NullPointerException",
      "ClassCastException, IllegalArgumentException",
      "StackOverflowError, IllegalArgumentException"
    ]
  },
  {
    title:
      "Which of the following is not a reason to add checked exceptions to a method signature?",
    code: null,
    answers: [
      "To force a caller to handle or declare its exceptions",
      "To notify the caller of potential types of problems",
      "To ensure that exceptions never cause the application to terminate",
      "To give the caller a chance to recover from a problem"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package peculiar;</code>\n<code>public class Stranger {</code>\n<code>   public static String getFullName(String firstName, String lastName) {</code>\n<code>      try {</code>\n<code>         return firstName.toString() + " " + lastName.toString();</code>\n<code>      } finally {</code>\n<code>         System.out.print("Finished!");</code>\n<code>      } catch (NullPointerException npe) {</code>\n<code>         System.out.print("Problem?");</code>\n<code>      }</code>\n<code>      return null;</code>\n<code>   }</code>\n<code>   public static void main(String[] things) {</code>\n<code>      System.out.print(getFullName("Joyce","Hopper"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Joyce Hopper",
      "Finished!Joyce Hopper",
      "Problem?Finished!null",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: A try statement has  ____________finally block(s) and  ____________catch blocks.",
    code: null,
    answers: [
      "zero or one, zero or more",
      "one, one or more",
      "zero or one, zero or one",
      "one or more, zero or one"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package pond;</code>\n<code>abstract class Duck {</code>\n<code>   protected int count;</code>\n<code>   public abstract int getDuckies();</code>\n<code>}</code>\n<code>public class Ducklings extends Duck {</code>\n<code>   private int age;</code>\n<code>   public Ducklings(int age) { this.age = age; }</code>\n<code>   public int getDuckies() { return this.age/count; }</code>\n<code>   public static void main(String[] pondInfo) {</code>\n<code><span epub:type="pagebreak" id="Page_126"></span>      Duck itQuacks = new Ducklings(5);</code>\n<code>      System.out.print(itQuacks.getDuckies());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0",
      "5",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given a try statement, if both the catch block and the finally block each throw an exception, what does the caller see?",
    code: null,
    answers: [
      "The exception from the catch block",
      "The exception from the finally block",
      "Both the exception from the catch block and the exception from the finally block",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package zoo;</code>\n<code>class BigCat {</code>\n<code>   void roar(int level) throw RuntimeException {  // m1</code>\n<code>      if(level&lt;3) throw new IllegalArgumentException("Incomplete");</code>\n<code>      System.out.print("Roar!");</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Lion extends BigCat {</code>\n<code>   public void roar() {  // m2</code>\n<code>      System.out.print("Roar!!!");</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] cubs) {</code>\n<code>      final BigCat kitty = new Lion();  // m3</code>\n<code>      kitty.roar(2);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line m1.",
      "The code does not compile because of line m2.",
      "The code does not compile because of line m3.",
      "The code compiles but a stack trace is printed at runtime."
    ]
  },
  {
    title:
      "Given the following code snippet, which specific exception will be thrown?",
    code:
      "<code>final Object exception = new Exception();</code>\n<code>final Exception data = (RuntimeException)exception;</code>\n<code>System.out.print(data);</code>",
    answers: [
      "ClassCastException",
      "RuntimeException",
      "NullPointerException",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following classes will handle all types in a catch block?",
    code: null,
    answers: ["Exception", "Error", "Throwable", "RuntimeException"]
  },
  {
    title:
      "In the following application, the values of street and city have been omitted. Which one of the following is a possible output of executing this class?",
    code:
      '<code>package registration;</code>\n<code>public class Address {</code>\n<code>   public String getAddress(String street, String city) {</code>\n<code>      try {</code>\n<code>         return street.toString() + " : " + city.toString();</code>\n<code>      } finally {</code>\n<code>         System.out.print("Posted:");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] form) {</code>\n<code>      String street = // value omitted</code>\n<code>      String city = // value omitted</code>\n<code>      System.out.print(new Address().getAddress(street,city));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["I only", "II only", "I and II", "None of the above"]
  },
  {
    title:
      "If a try statement has catch blocks for both ClassCastException and RuntimeException, then which of the following statements is correct?",
    code: null,
    answers: [
      "The catch block for ClassCastException must appear before the catch block for RuntimeException.",
      "The catch block for RuntimeException must appear before the catch block for ClassCastException.",
      "The catch blocks for these two exception types can be declared in any order.",
      "A try statement cannot be declared with these two catch block types because they are incompatible."
    ]
  },
  {
    title: "Which of the following is the best scenario to use an exception?",
    code: null,
    answers: [
      "The computer caught fire.",
      "The code does not compile.",
      "A caller passes invalid data to a method.",
      "A method finishes sooner than expected."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package body;</code>\n<code>class Organ {</code>\n<code>   public void operate() throws RuntimeException {</code>\n<code>      throw new RuntimeException("Not supported");</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Heart extends Organ {</code>\n<code>   public void operate() throws Exception {</code>\n<code>      System.out.print("beat");</code>\n<code>   }</code>\n<code>   public static void main(String... cholesterol) throws Exception {</code>\n<code>      try {</code>\n<code>         new Heart().operate();</code>\n<code>      } finally {</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "beat",
      "Not supported",
      "The code does not compile.",
      "The code compiles but a stack trace is printed at runtime."
    ]
  },
  {
    title:
      "Which statement about the following exception statement is correct?",
    code: "<code>throw new NullPointerException();</code>",
    answers: [
      "The code where this is called must include a try-catch block that handles this exception.",
      "The method where this is called must declare a compatible exception.",
      "This exception cannot be handled.",
      "This exception can be handled with a try-catch block or ignored altogether by the surrounding method."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package clothing;</code>\n<code>public class Coat {</code>\n<code>   public Long zipper() throws Exception {</code>\n<code>      try {</code>\n<code>         String checkZipper = (String)new Object();</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw RuntimeException("Broken!");</code>\n<code>      }</code>\n<code>      return null;</code>\n<code>   }</code>\n<code>   public static void main(String... warmth) {</code>\n<code>      try {</code>\n<code>         new Coat().zipper();</code>\n<code>         System.out.print("Finished!");</code>\n<code>      } catch (Throwable t) {}</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Finished!",
      "Finished!, followed by a stack trace",
      "The application does not produce any output at runtime.",
      "The code does not compile."
    ]
  },
  {
    title:
      "Given the following application, which type of exception will be printed in the stack trace at runtime?",
    code:
      '<code>package carnival;</code>\n<code>public class WhackAnException {</code>\n<code>   public static void main(String... hammer) {</code>\n<code>      try {</code>\n<code>         throw new ClassCastException();</code>\n<code><span epub:type="pagebreak" id="Page_130"></span>      } catch (IllegalArgumentException e) {</code>\n<code>         throw new IllegalArgumentException();</code>\n<code>      } catch (RuntimeException e) {</code>\n<code>         throw new NullPointerException();</code>\n<code>      } finally {</code>\n<code>         throw new RuntimeException();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "IllegalArgumentException",
      "NullPointerException",
      "RuntimeException",
      "The code does not compile."
    ]
  },
  {
    title:
      "Which of these method signatures is allowed in a class implementing the Outfielder interface?",
    code:
      "<code>class OutOfBoundsException extends BadCatchException {}</code>\n<code>class BadCatchException extends Exception {}</code>\n<code>&nbsp;</code>\n<code>public interface Outfielder {</code>\n<code>   public void catchBall() throws OutOfBoundsException;</code>\n<code>}</code>",
    answers: [
      "public int catchBall() throws OutOfBoundsException",
      "public int catchBall() throws BadCatchException",
      "public int catchBall() throws Exception",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package city;</code>\n<code>public class Street {</code>\n<code>   public static void dancing() throws RuntimeException {</code>\n<code>      try {</code>\n<code>         throw new IllegalArgumentException();</code>\n<code>      } catch (Error) {</code>\n<code>         System.out.print("Unable!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... count) throws RuntimeException {</code>\n<code>      dancing();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Unable!",
      "The application does not produce any output.",
      "The application compiles but produces a stack trace at runtime.",
      "The code does not compile."
    ]
  },
  {
    title:
      "What is the result of compiling and running the following application?",
    code:
      '<code>package castles;</code>\n<code>class DragonException extends Exception {}</code>\n<code>public class Lair {</code>\n<code>   public void openDrawbridge() throws Exception {  // r1</code>\n<code>      try {</code>\n<code>         throw new Exception("This Exception");</code>\n<code>      } catch (RuntimeException e) {</code>\n<code>         throw new DragonException();  // r2</code>\n<code>      } finally {</code>\n<code>         throw new RuntimeException("Or maybe this one");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] moat) throws Exception {</code>\n<code>      new Lair().openDrawbridge();  // r3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile because of line r1.",
      "The code does not compile because of line r2.",
      "The code does not compile because of line r3.",
      "The code compiles, but a stack trace is printed at runtime."
    ]
  },
  {
    title:
      "If a try statement has catch blocks for both IllegalArgumentException and ClassCastException, then which of the following statements is correct?",
    code: null,
    answers: [
      "The catch block for IllegalArgumentException must appear before the catch block for ClassCastException.",
      "The catch block for ClassCastException must appear before the catch block for IllegalArgumentException.",
      "The catch blocks for these two exception types can be declared in any order.",
      "A try statement cannot be declared with these two catch block types because they are incompatible."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package broken;</code>\n<code>class Problem implements RuntimeException {}</code>\n<code>public class BiggerProblem extends Problem {</code>\n<code>   public static void main(String uhOh[]) {</code>\n<code>      try {</code>\n<code>         throw new BiggerProblem();</code>\n<code>      } catch (BiggerProblem re) {</code>\n<code>         System.out.print("Problem?");</code>\n<code>      } catch (Problem e) {</code>\n<code>         System.out.print("Handled");</code>\n<code>      } finally {</code>\n<code>         System.out.print("Fixed!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Problem?Fixed!",
      "Handled.Fixed!",
      "Problem?Handled.Fixed!",
      "The code does not compile."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package lighting;</code>\n<code>interface Source {</code>\n<code>   void flipSwitch() throws Exception;</code>\n<code>}</code>\n<code>public class LightBulb implements Source {</code>\n<code>   public void flipSwitch() {</code>\n<code>      try {</code>\n<code>         throws new RuntimeException("Circuit Break!");</code>\n<code>      } finally {</code>\n<code>         System.out.print("Flipped!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... electricity) throws Throwable {</code>\n<code>      final Source bulb = new LightBulb();</code>\n<code>      bulb.flipSwitch();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "A stack trace for a RuntimeException",
      "Flipped!, followed by a stack trace for a RuntimeException",
      "The code does not compile because flipSwitch() is an invalid method override.",
      "The code does not compile for another reason."
    ]
  },
  {
    title:
      "Given an application that hosts a website, which of the following would most likely result in a java.lang.Error being thrown?",
    code: null,
    answers: [
      "Two users try to register an account at the same time.",
      "The application temporarily loses connection to the network.",
      "A user enters their password incorrectly.",
      "The application runs out of memory."
    ]
  },
  {
    title:
      "Given that FileNotFoundException is a subclass of IOException, what is the output of the following application?",
    code:
      '<code>package storage;</code>\n<code>import java.io.*;</code>\n<code>public class Backup {</code>\n<code>   public void performBackup() {</code>\n<code>      try {</code>\n<code>         throw new IOException("Disk not found");</code>\n<code>      } catch (Exception e) {</code>\n<code>         try {</code>\n<code>            throw new FileNotFoundException("File not found");</code>\n<code>         } catch (FileNotFoundException e) {  // z1</code>\n<code>            System.out.print("Failed");</code>\n<code>         }</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... files) {</code>\n<code>      new Backup().performBackup();  // z2</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Failed",
      "The application compiles but a stack trace is printed at runtime.",
      "The code does not compile because of line z1.",
      "The code does not compile because of line z2."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package bed;</code>\n<code>public class Sleep {</code>\n<code>   public static void snore() {</code>\n<code>      try {</code>\n<code>         String sheep[] = new String[3];</code>\n<code>         System.out.print(sheep[3]);</code>\n<code>      } catch (RuntimeException e) {</code>\n<code>         System.out.print("Awake!");</code>\n<code>      } finally {</code>\n<code>         throw new Exception();  // x1</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... sheep) {  // x2</code>\n<code>      new Sleep().snore();  // x3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Awake!, followed by a stack trace",
      "The code does not compile because of line x1.",
      "The code does not compile because of line x2.",
      "The code does not compile because of line x3."
    ]
  }
];

const a8 = [
  "D. A try block must include either a catch or finally block, or both. The think() method declares a try block but neither additional block. For this reason, the code does not compile, and Option D is the correct answer. The rest of the lines compile without issue, including k1.",
  "B. The correct order of blocks is try, catch, and finally, making Option B the correct answer.",
  "D. Option D is the correct model. The class RuntimeException extends Exception, and both Exception and Error extend Throwable. Finally, like all Java classes, they all inherit from Object. Notice that Error does not extend Exception, even though we often refer to these generally as exceptions.",
  "A. While Exception and RuntimeException are commonly caught in Java applications, it is recommended Error not be caught. An Error often indicates a failure of the JVM which cannot be recovered from. For this reason, Option A is correct, and Options C and D are incorrect. Option B is not a class defined in the Java API; therefore, it is also incorrect.",
  "D. The application does not compile because score is defined only within the try block. The other three places it is referenced, in the catch block, in the finally block, and outside the try-catch-finally block at the end, are not in scope for this variable and each does not compile. Therefore, the correct answer is Option D.",
  "B. ClassCastException, ArrayIndexOutOfBoundsException, and IllegalArgumentException are unchecked exceptions and can be thrown at any time. IOException is a checked exception that must be handled or declared when used, making Option B the correct answer.",
  "A. The throws keyword is used in method declarations, while the throw keyword is used to throw an exception to the surrounding process, making Option A the correct answer. The catch keyword is used to handle exceptions, not to create them or in the declaration of a method.",
  "B. IOException is a subclass of Exception, so it must appear first in any related catch blocks. If Exception was to appear before IOException, then the IOException block would be considered unreachable code because any thrown IOException is already handled by the Exception catch block. For this reason, Option B is correct.",
  "C. The application first enters the try block and outputs A. It then throws a RuntimeException, but the exception is not caught by the catch block since RuntimeException is not a subclass of ArrayIndexOutOfBoundsException (it is a superclass). Next, the finally block is called and C is output. Finally, the RuntimeException is thrown by the main() method and a stack trace is printed. For these reasons, Option C is correct.",
  "C. The application does not compile, so Option D is incorrect. The openDrawbridge() method compiles without issue, so Options A and B are incorrect. The issue here is how the openDrawbridge() method is called from within the main() method on line p3. The openDrawbridge() method declares the checked exception, Exception, but the main() method from which it is called does not handle or declare the exception. In order for this code to compile, the main() method would have to have a try-catch statement around line p3 that properly handles the checked exception, or the main() would have to be updated to declare a compatible checked exception. For these reasons, line p3 does not compile, and Option C is the correct answer.",
  "B. NullPointerException and ArithmeticException both extend RuntimeException, which are unchecked exceptions and not required to be handled or declared in the method in which they are thrown. On the other hand, Exception is a checked exception and must be handled or declared by the method in which it is thrown. Therefore, Option B is the correct answer.",
  "A. The code compiles and runs without issues, so Options C and D are incorrect. The try block throws a ClassCastException. Since ClassCastException is not a subclass of ArrayIndexOutOfBoundsException, the first catch block is skipped. For the second catch block, ClassCastException is a subclass of Throwable, so that block is executed. Afterward, the finally block is executed and then control returns to the main() method with no exception being thrown. The result is that 1345 is printed, making Option A the correct answer.",
  "C. A finally block can throw an exception, in which case not every line of the finally block would be executed. For this reason, Options A and D are incorrect. Option B is also incorrect The finally block is called regardless of whether or not the related catch block is executed. Option C is the correct answer. Unlike an if-then statement, which can take a single statement, a finally statement requires brackets {}.",
  "C. The code does not compile because the catch blocks are used in the wrong order. Since IOException is a superclass of FileNotFoundException, the FileNotFoundException is considered unreachable code. For this reason, the code does not compile, and Option C is correct.",
  "C. A try statement requires a catch or a finally block. Without one of them, the code will not compile; therefore, Option D is incorrect. A try statement can also be used with both a catch and finally block, making Option C the correct answer. Note that finalize is not a keyword, but a method inherited from java.lang.Object.",
  "B. Option A is a true statement about exceptions and when they are often applied. Option B is the false statement and the correct answer. An application that throws an exception can choose to handle the exception and avoid termination. Option C is also a true statement. For example, a NullPointerException can be avoided on a null object by testing whether or not the object is null before attempting to use it. Option D is also a correct statement. Attempting to recover from unexpected problems is an important aspect of proper exception handling.",
  "D. The code does not compile because the catch block uses parentheses () instead of brackets {}, making Option D the correct answer. Note that Boat does not extend Transport, so while the override on line j1 appears to be invalid since Exception is a broader checked exception than CapsizedException, that code compiles without issue. If the catch block was fixed, the code would output 4, making Option A the correct answer.",
  "B. Overridden methods cannot throw new or broader checked exceptions than the one they inherit. Since Exception is a broader checked exception than PrintException, Option B is not allowed and is the correct choice. Alternatively, declaring narrower or the same checked exceptions or removing them entirely is allowed, making Options A and C incorrect. Since Option B is correct, Option D is incorrect.",
  "D. All three of those classes belong to the java.lang package, so Option C seems like the correct answer. The Java compiler, though, includes java.lang by default, so no import statement is actually required to use those three classes, making Option D the correct answer.",
  "C. The code does not compile because the catch block is missing a variable type and name, such as catch (Exception e) . Therefore, Option C is the correct answer. Both implementations of getSymbol() compile without issue, including the overridden method. A subclass can swallow a checked exception for a method declared in a parent class; it just cannot declare any new or broader checked exceptions.",
  "B. Checked exceptions must be handled or declared or the program will not compile, while unchecked exceptions can be optionally handled. On the other hand, java.lang.Error should never be handled by the application because it often indicates an unrecoverable state in the JVM, such as running out of memory. For these reasons, Option B is the correct answer.",
  "B. The application does not compile, so Option D is incorrect. The checked KnightAttackingException thrown in the try block is handled by the associated catch block. The ClassCastException is an unchecked exception, so it is not required to be handled or declared and line q1 compiles without issue. The finally block throws a checked CastleUnderSiegeException, which is required to be handled or declared by the method, but is not. There is no try-catch around line q2, and the method does not declare a compatible checked exception, only an unchecked exception. For this reason, line q2 does not compile, and Option B is the correct answer. Lastly, line q3 compiles without issue because the unchecked RuntimeException is not required to be handled or declared by the call in the main() method.",
  "A. If an exception matches multiple catch blocks, the first one that it encounters will be the only one executed, making Option A correct, and Options B and C incorrect. Option D is also incorrect. It is possible to write two consecutive catch blocks that can catch the same exception, with the first type being a subclass of the second. In this scenario, an exception thrown of the first type would match both catch blocks, but only the first catch block would be executed, since it is the more specific match.",
  "C. The code does not compile due to the call to compute() in the main() method. Even though the compute() method only throws an unchecked exception, its method declaration includes the Exception class, which is a checked exception. For this reason, the checked exception must be handled or declared in the main() method in which it is called. While there is a try-catch block in the main() method, it is only for the unchecked NullPointerException. Since Exception is not a subclass of NullPointerException, the checked Exception is not properly handled or declared and the code does not compile, making Option C the correct answer.",
  "D. A NullPointerException can be thrown if the value of list is null. Likewise, an ArrayIndexOutOfBoundsException can be thrown if the value of list is an array with fewer than 10 elements. Finally, a ClassCastException can be thrown if list is assigned an object that is not of type Boolean[]. For example, the assignment list = (Boolean[]) new Object() will compile without issue but throws a ClassCastException at runtime. Therefore, the first three options are possible, making Option D the correct answer.",
  "B. A StackOverflowError occurs when a program recurses too deeply into an infinite loop. It is considered an error because the JVM often runs out of memory and cannot recover. A NullPointerException occurs when an instance method or variable on a null reference is used. For these reasons, Option B is correct. A NoClassDefFoundError occurs when code available at compile time is not available at runtime. A ClassCastException occurs when an object is cast to an incompatible reference type. Finally, an IllegalArgumentException occurs when invalid parameters are sent to a method.",
  "C. Checked exceptions are commonly used to force a caller to deal with an expected type of problem, such as the inability to write a file to the file system. Without dealing with all checked exceptions thrown by the method, the calling code does not compile, so Option A is a true statement. Option B is also a true statement. Declaring various different exceptions informs the caller of the potential types of problems the method can encounter. Option C is the correct answer. There may be no recourse in handling an exception other than to terminate the application. Finally, Option D is also a true statement because it gives the caller a chance to recover from an exception, such as writing file data to a backup location.",
  "D. This code does not compile because the catch and finally blocks are in the wrong order, making Option D the correct answer. If the order was flipped, the output would be Finished!Joyce Hopper, making Option B correct.",
  "A. A try statement is not required to have a finally block, but if it does, there can be at most one. Furthermore, a try statement can have any number of catch blocks or none at all. For these reasons, Option A is the correct answer. ",
  "D. The code compiles without issue, so Option C is incorrect. The key here is noticing that count, an instance variable, is initialized with a value of 0. The getDuckies() method ends up computing 5/0, which leads to an unchecked ArithmeticException at runtime, making Option D the correct answer.",
  "B. If both the catch and finally blocks throw an exception, the one from the finally block is propagated to the caller, with the one from the catch block being dropped, making Option B the correct answer. Note that Option C is incorrect due to the fact that only one exception can be thrown to the caller.",
  "A. The application does not compile because the roar() method in the BigCat class uses throw instead of throws, making Option A the correct answer. Note that if the correct keyword was used, the code would compile without issues, and Option D would be correct. Also the override of roar() in the Lion class is valid, since the overridden method has a broader access modifier and does not declare any new or broader checked exceptions.",
  "A. Although this code uses the RuntimeException and Exception classes, the question is about casting. Exception is not a subclass of RuntimeException, so the assignment on the second line throws a ClassCastException at runtime, making Option A correct.",
  "C. All exceptions in Java inherit from Throwable, making Option C the correct answer. Note that Error and Exception extend Throwable, and RuntimeException extends Exception.",
  "B. If both values are valid non-null String objects, then no exception will be thrown, with the statement in the finally block being executed first, before returning control to the main() method; therefore, the second statement is a possible output. If either value is null, then the toString() method will cause a NullPointerException to be thrown. In both cases, the finally block will execute first, printing Posted:, even if there is an exception. For this reason, the first statement is not a possible output, and Option B is correct.",
  "A. ClassCastException is a subclass of RuntimeException, so it must appear first in any related catch blocks. If RuntimeException was to appear before ClassCastException, then the ClassCastException block would be considered unreachable code, since any thrown ClassCastException is already handled by the RuntimeException catch block. For this reason, Option A is correct.",
  "C. Option A is incorrect. You should probably seek help if the computer is on fire! Option B is incorrect because code that does not compile cannot run and therefore cannot throw any exceptions. Option C is the best answer, since an IllegalArgumentException can be used to alert a caller of missing or invalid data. Option D is incorrect; finishing sooner is rarely considered a problem.",
  "C. The code does not compile due to an invalid override of the operate() method. An overridden method must not throw any new or broader checked exceptions than the method it inherits. Even though RuntimeException is a subclass of Exception, Exception is considered a new checked exception, since RuntimeException is an unchecked exception. Therefore, the code does not compile, and Option C is correct.",
  "D. A NullPointerException is an unchecked exception. While it can be handled by the surrounding method, either through a try-catch block or included in the method declaration, these are optional. For this reason, Option D is correct.",
  "D. In this application, the throw RuntimeException(String) statement in the zipper() method does not include the new keyword. The new keyword is required to create the object being thrown, since RuntimeException(String) is a constructor. For this reason, the code does not compile, and Option D is correct. If the keyword new was inserted properly, then the try block would throw a CastClassException, which would be replaced with a RuntimeException to the calling method by the catch block. The catch block in the main() method would then be activated, and no output would be printed, making Option C correct.",
  "C. For this question, notice that all the exceptions thrown or caught are unchecked exceptions. First, the ClassCastException is thrown in the try block and caught by the second catch block since it inherits from RuntimeException, not IllegalArgumentException. Next, a NullPointerException is thrown, but before it can be returned the finally block is executed and a RuntimeException replaces it. The application exits and the caller sees the RuntimeException in the stack trace, making Option C the correct answer. If the finally block did not throw any exceptions, then Option B would be the correct answer.",
  "D. Trick question! Options A, B, and C are each invalid overrides of the method because the return type must be covariant with void. For this reason, Option D is the correct answer. If the return types were changed to be void, then Option A would be a valid override. Options B and C would still be incorrect, since overridden methods cannot throw broader checked exceptions than the inherited method.",
  "D. The code does not compile because the catch block is missing a variable name, such as catch (Error e). Therefore, Option D is the correct answer. If a variable name was added, the application would produce a stack trace at runtime and Option C would be the correct answer. Because IllegalArgumentException does not inherit from Error, the catch block would be skipped and the exception sent to the main() method at runtime. Note that the declaration of RuntimeException by both methods is unnecessary since it is unchecked, although allowed by the compiler.",
  "D. The openDrawbridge() is capable of throwing a variety of exceptions, including checked Exception and DragonException as well as an unchecked RuntimeException. All of these are handled by the fact that the method declares the checked Exception class in the method signature, which all the exceptions within the class inherit. For this reason, the openDrawbridge() method compiles without issue. The call to openDrawbridge() in the main() method also compiles without issue because the main() method declares Exception in its signature. For these reasons, the code compiles but a stack trace is printed at runtime, making Option D the correct answer. In case you are wondering, the caller would see RuntimeException: Or maybe this one in the stack trace at runtime, since the exception in the finally block replaces the one from the try block. Note that the exception in the catch block is never reached because the RuntimeException type declared in the catch block does not handle Exception.",
  "C. Both IllegalArgumentException and ClassCastException inherit RuntimeException, but neither is a subclass of the other. For this reason, they can be listed in either order, making Option C the correct statement.",
  "D. The class RuntimeException is not an interface and it cannot be implemented. For this reason, the Problem class does not compile, and Option D is the correct answer. Note that this is the only compilation problem in the application. If implements was changed to extends, the code would compile and Problem?Fixed! would be printed, making Option A the correct answer.",
  "D. The question is designed to see how closely you pay attention to throw and throws! The try block uses the incorrect keyword, throws, to create an exception. For this reason, the code does not compile, and Option D is correct. If throws was changed to throw, then the code would compile without issue, and Option B would be correct.",
  "D. A Java application tends to only throw an Error when the application has entered a final, unrecoverable state. Options A and C are incorrect. These types of errors are common and expected in most software applications, and should not cause the application to terminate. Option B uses the word temporarily, meaning the network connection will come back. In this case, a regular exception could be used to try to recover from this state. Option D is the correct answer because running out of memory is usually unrecoverable in Java.",
  "C. While a catch block is permitted to include an embedded try-catch block, the issue here is that the variable name e is already used by the first catch block. In the second catch block, it is equivalent to declaring a variable e twice. For this reason, line z1 does not compile, and Option C is the correct answer. If a different variable name was used for either catch block, then the code would compile without issue, and Option A would be the correct answer.",
  "B. The finally block of the snore() method throws a new checked exception on line x1, but there is no try-catch block around it to handle it, nor does the snore() method declare any checked exceptions. For these reasons, line x1 does not compile, and Option B is the correct answer. The rest of the lines of code compile without issue, even line x3 where a static method is being accessed using an instance reference. Note that the code inside the try block, if it ran, would produce an ArrayIndexOutOfBoundsException, which would be caught by the RuntimeException catch block, printing Awake!. What happens next would depend on how the finally block was corrected."
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
    answerArray: mapAnswers(qz["answers"], a8[index]),
    explain: a8[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
