const qzString = [
  {
    title:
      "Suppose the ResultSet is scrollable and contains 10 rows with values numbered from 1 to 10 in ascending order. What is true about the following? (Choose two.)",
    code:
      "<code>12:  rs.beforeFirst();</code>\n<code>13:  System.out.println(rs.relative(5));</code>\n<code>14:  System.out.println(rs.getInt(1));</code>\n<code>15:  System.out.println(rs.relative(-10));</code>\n<code>16:  System.out.println(rs.getInt(1));</code>\n<code>17:  System.out.println(rs.relative(5));</code>\n<code>18:  System.out.print(rs.getInt(1));</code>",
    answers: [
      "It outputs true once.",
      "It outputs true twice.",
      "It outputs true three times.",
      "It completes without throwing an exception.",
      "It throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>public class PiDay {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDateTime pi = LocalDateTime.of(2017, 3, 14, 1, 59);</code>\n<code>      DateTimeFormatter formatter = DateTimeFormatter</code>\n<code>         .ofPattern("m.ddhhMM");</code>\n<code>      System.out.println(formatter.format(pi));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "3.011459",
      "3.140159",
      "59.011459",
      "59.140103",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following are valid lambda expressions? (Choose three.)",
    code: null,
    answers: [
      "() -> {}",
      "(Double adder) -> {int y; System.out.print(adder); return adder;}",
      "(Long w) -> {Long w=5; return 5;}",
      "(int count, vote) -> count*vote",
      "dog -> dog",
      "name -> {name.toUpperCase()}"
    ]
  },
  {
    title:
      "What is the result of compiling and running the following application?",
    code:
      '<code>package names;</code>\n<code>import java.util.*;</code>\n<code>import java.util.function.*;</code>\n<code>interface ApplyFilter {</code>\n<code>   void filter(List&lt;String&gt; input);</code>\n<code>}</code>\n<code>public class FilterBobs {</code>\n<code>   static Function&lt;String,String&gt; first = s ‐&gt;        {System.out.println(s); return s;};</code>\n<code>   static Predicate second = t -&gt; "bob".equalsIgnoreCase(t);</code>\n<code>   public void process(ApplyFilter a, List&lt;String&gt; list) {</code>\n<code>      a.filter(list);</code>\n<code>   }</code>\n<code>   public static void main(String[] contestants) {</code>\n<code>      final List&lt;String&gt; people = new ArrayList&lt;&gt;();</code>\n<code>      people.add("Bob");</code>\n<code>      people.add("bob");</code>\n<code>      people.add("Jennifer");</code>\n<code>      people.add("Samantha");</code>\n<code>      final FilterBobs f = new FilterBobs();</code>\n<code>      f.process(q -&gt; {</code>\n<code>         q.removeIf(second);</code>\n<code>         q.forEach(first);</code>\n<code>      }, people);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "It prints two lines.",
      "It prints three lines.",
      "One line of code does not compile.",
      "Two lines of code do not compile.",
      "Three lines of code do not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>public class Compete {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Integer&gt; is = Stream.of(8, 6, 9);</code>\n<code>      Comparator&lt;Integer&gt; c = (a, b) ‐&gt; b ‐ a;  // r1</code>\n<code>      is.sorted(c).forEach(System.out::print);  // r2</code>\n<code>  }</code>\n<code>}</code>",
    answers: [
      "689",
      "986",
      "The code does not compile because of line r1.",
      "The code does not compile because of line r2.",
      "The code does not compile due to another line.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package tax;</code>\n<code>&nbsp;</code>\n<code>public class Accountant {</code>\n<code>   class AddingException extends Exception {};</code>\n<code>   class DividingException extends Exception {};</code>\n<code>   class UnexpectedException extends RuntimeException {};</code>\n<code>   public void doTaxes() throws Throwable {</code>\n<code>      try {</code>\n<code>         throw new IllegalStateException();</code>\n<code>      } catch (AddingException | DividingException e) {  // p1</code>\n<code>         System.out.println("Math Problem");</code>\n<code>      } catch (UnexpectedException | Exception f) {  // p2</code>\n<code>         System.out.println("Unknown Error");</code>\n<code>         throw f;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] numbers) throws Throwable {</code>\n<code>      try {</code>\n<code>         new Accountant().doTaxes();</code>\n<code>      } finally {</code>\n<code>         System.out.println("All done!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Math Problem",
      "Unknown Problem",
      "Unknown Problem followed by All done!",
      "The code does not compile solely due to line p1.",
      "The code does not compile solely due to line p2.",
      "The code does not compile due to lines p1 and p2."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>1:  package drawing;</code>\n<code>2:  interface HasHue {String getHue();}</code>\n<code>3:  enum COLORS implements HasHue {</code>\n<code>4:     red {</code>\n<code>5:        public String getHue() {return "FF0000";}</code>\n<code>6:     }, green {</code>\n<code>7:        public String getHue() {return "00FF00";}</code>\n<code>8:     }, blue {</code>\n<code>9:        public String getHue() {return "0000FF";}</code>\n<code>10:    }</code>\n<code>11: }</code>\n<code>12: class Book {</code>\n<code>13:    static void main(String[] pencils) {}</code>\n<code>14: }</code>\n<code>15: final public class ColoringBook extends Book {</code>\n<code>16:    final void paint(COLORS c) {</code>\n<code>17:       System.out.print("Painting: "+c.getHue());</code>\n<code>18:    }</code>\n<code>19:    final public static void main(String[] crayons) {</code>\n<code>20:       new ColoringBook().paint(COLORS.green);</code>\n<code>21:    }</code>\n<code>22: }</code>',
    answers: [
      "Painting: 00FF00",
      "One line of code does not compile.",
      "Two lines of code do not compile.",
      "Three lines of code do not compile.",
      "The code compiles but prints an exception at runtime.",
      "None of the above"
    ]
  },
  {
    title: " ",
    code:
      "<code>public boolean isItMyBirthday(LocalDateTime dateTime) {</code>\n<code>   ________________________________________  </code>\n<code>   return now.getMonth() == dateTime.getMonth()</code>\n<code>      &amp;&amp; now.getDayOfMonth() == dateTime.getDayOfMonth();</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three", "Four", "Five"]
  },
  {
    title:
      "Which two can independently fill in the blank to output No dessert today? (Choose two.)",
    code:
      "<code>import java.util.*;</code>\n<code>public class Dessert {</code>\n<code>  public static void main(String[] yum) {</code>\n<code>    eatDessert(Optional.empty());</code>\n<code>  }</code>\n<code>  private static void eatDessert(Optional&lt;String&gt; opt) {</code>\n<code>     System.out.println(opt.__________);</code>\n<code>  }</code>\n<code>}</code>",
    answers: [
      'get("No dessert today")',
      'get(() -> "No dessert today")',
      'orElse("No dessert today")',
      'orElse(() -> "No dessert today")',
      'orElseGet("No dessert today")',
      'orElseGet(() -> "No dessert today")'
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public class InitOrder {</code>\n<code>   { System.out.print("1"); }</code>\n<code>   static { System.out.print("2"); }</code>\n<code>&nbsp;</code>\n<code>   public InitOrder() {</code>\n<code>      System.out.print("3");</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_391"></span>   public static void callMe() {</code>\n<code>      System.out.print("4");</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      callMe();</code>\n<code>      callMe();</code>\n<code>      System.out.print("5");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "1223445",
      "2445",
      "22445",
      "223445",
      "2233445",
      "None of the above"
    ]
  },
  {
    title: " ",
    code: null,
    answers: ["I", "II", "III", "I, II", "I, III", "II, III"]
  },
  {
    title: "What design pattern or principle is used in this class?",
    code:
      "<code>public class Daffodil {</code>\n<code>   int height;</code>\n<code>   public Daffodil(int height) {</code>\n<code>      this.height = height;</code>\n<code>   }</code>\n<code>   public int getHeight() {</code>\n<code>      return height;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Encapsulation",
      "Immutability",
      "Singleton",
      "Both A and B",
      "None of the above"
    ]
  },
  {
    title:
      "What is the output of the following application? Assume the file system is available and able to be written to and read from.",
    code:
      '<code>package boat;</code>\n<code>import java.io.*;</code>\n<code>public class Cruise {</code>\n<code>   private int numPassengers = 1;</code>\n<code>   private transient String schedule = "NONE";</code>\n<code>   {numPassengers = 2;}</code>\n<code>   public Cruise() {</code>\n<code>      this.numPassengers = 3;</code>\n<code>      this.schedule = "Tropical Island";</code>\n<code>   }</code>\n<code>   public static void main(String... passengers) throws Exception {</code>\n<code>      try (ObjectOutputStream o = new ObjectOutputStream(</code>\n<code>            new FileOutputStream("ship.txt"))) {</code>\n<code>         Cruise c = new Cruise();</code>\n<code>         c.numPassengers = 4;</code>\n<code>         c.schedule = "Casino";</code>\n<code>         o.writeObject(c);</code>\n<code>      }</code>\n<code>      try (ObjectInputStream i = new ObjectInputStream(</code>\n<code>            new FileInputStream("ship.txt"))) {</code>\n<code>         Cruise c = i.readObject();</code>\n<code>         System.out.print(c.numPassengers+","+c.schedule);</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "2,NONE",
      "3,null",
      "4,Casino",
      "4,null",
      "The class does not compile.",
      "The class compiles but throws an exception at runtime."
    ]
  },
  {
    title: " ",
    code: null,
    answers: ["I, III", "I, IV", "II, III", "II, IV", "I, II, III", "I, II, IV"]
  },
  {
    title:
      "Which of the following lambda expressions can be passed to a method that takes  IntUnaryOperator as an argument? (Choose three.)",
    code: null,
    answers: [
      'v -> {System.out.print("Hello!"); return 2%1;}',
      "(Integer w) -> w.intValue()",
      "(int j) -> (int)30L",
      "(int q) -> q/3.1",
      "(long x) -> (int)x",
      "z -> z"
    ]
  },
  {
    title:
      "Which of the following statements about InputStream and Reader are correct? (Choose two.)",
    code: null,
    answers: [
      "One contains a read() method that returns a byte value, while the other contains a read() method that returns an int value.",
      "Only one of them contains a flush() method.",
      "Only one of them contains a skip() method.",
      "They are both abstract classes.",
      "They are both interfaces.",
      "They can both be used to read character data."
    ]
  },
  {
    title: "Fill in the blank so this code prints -1.",
    code:
      "<code>LocalDate xmas = LocalDate.of(2017,  12, 25);</code>\n<code>LocalDate blackFriday = LocalDate.of(2017, 11, 24);</code>\n<code>long monthsLeft = ChronoUnit.MONTHS.____________________;</code>\n<code>System.out.println(monthsLeft);</code>",
    answers: [
      "between(blackFriday, xmas)",
      "between(xmas, blackFriday)",
      "minus(blackFriday, xmas)",
      "minus(xmas, blackFriday)",
      "plus(blackFriday, xmas)",
      "plus(xmas, blackFriday)"
    ]
  },
  {
    title: " ",
    code:
      '<code>package secure;</code>\n<code>import java.io.*;</code>\n<code>public class Login {</code>\n<code>   public void clearPassword(char[] password) {</code>\n<code>      for(int i=0; i&lt;password.length; i++) {</code>\n<code>         password[i] = 0;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public String getPassword() {</code>\n<code>      Console c = System.console();</code>\n<code>      final char[] pass = c.readPassword("Enter your password: ");</code>\n<code>      StringBuilder sb = new StringBuilder();</code>\n<code>      for(char p : pass) {</code>\n<code>         sb.append(p);</code>\n<code>      }</code>\n<code>      clearPassword(pass);</code>\n<code>      return sb.toString();</code>\n<code>   }</code>\n<code>   public static void main(String[] webLogin) {</code>\n<code>      String pass = new Login().getPassword();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "I only",
      "II only",
      "I and II only",
      "I and III only",
      "I, II, and III"
    ]
  },
  {
    title:
      "Which of the following can fill in the blank to print out the numbers 161, 183, and 201 in any order?",
    code:
      '<code>class Runner {</code>\n<code>   private int numberMinutes;</code>\n<code>   public Runner(int n) {</code>\n<code>      numberMinutes = n;</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_395"></span>   public int getNumberMinutes() {</code>\n<code>      return numberMinutes;</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Marathon {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Runner&gt; runners = Stream.of(new Runner(183),</code>\n<code>         new Runner(161), new Runner(201));</code>\n<code>      OptionalInt opt = runners.____________________;</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "map(Runner::getNumberMinutes)\n\n       .peek(System.out::println).max()\n",
      "mapToInt(Runner::getNumberMinutes)\n\n       .peek(System.out::println).max()\n",
      "peek(System.out::println)\n\n       .mapToInt(Runner::getNumberMinutes).max()\n",
      "peek(System.out::println)\n\n       .mapToInt(Runner::getNumberMinutes).max()\n",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>1:  package fruit;</code>\n<code>2:  enum Season {</code>\n<code>3:     SPRING(1), SUMMER(2), FALL(3), WINTER(4)</code>\n<code>4:     public Season(int orderId) {}</code>\n<code>5:  }</code>\n<code>6:  public class PickApples {</code>\n<code>7:     public static void main(String... orchard) {</code>\n<code>8:        final Season s = Season.FALL;</code>\n<code>9:        switch(s) {</code>\n<code>10:          case 3:</code>\n<code>11:             System.out.println("Time to pick!");</code>\n<code>12:          default:</code>\n<code>13:             System.out.println("Not yet!");</code>\n<code>14:       }</code>\n<code>15:    }</code>\n<code>16: }</code>',
    answers: [
      "Time to pick!",
      "Time to pick! followed by Not yet!",
      "One line of code does not compile.",
      "Two lines of code do not compile.",
      "Three lines of code do not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following expressions, inserted simultaneously into both blanks, allow the application to compile? (Choose three.)",
    code:
      "<code>package spooky;</code>\n<code>import java.util.function.*;</code>\n<code>abstract class Phantom {</code>\n<code>   public void bustLater(DoubleConsumer buster, double value) {</code>\n<code>      buster.accept(value);</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Ghost extends Phantom {</code>\n<code>   public void bustNow(Consumer&lt;Double&gt; buster, double value) {</code>\n<code>      buster.accept(value);</code>\n<code>   }</code>\n<code>   void call() {</code>\n<code>      double value = 10;</code>\n<code>      bustNow(__________,value);</code>\n<code>      bustLater(__________,value);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "System.out::print",
      "a -> {System.out.println(a.intValue());}",
      "g -> {System.out.println();}",
      "u -> System.out.println((long)u)",
      "v -> System.out.print(v)",
      "w -> System.out::println"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>package counter;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class CountResource extends ListResourceBundle {</code>\n<code><span epub:type="pagebreak" id="Page_397"></span>   private int count = 0;</code>\n<code>&nbsp;</code>\n<code>   @Override</code>\n<code>   protected Object[][] getContents() {</code>\n<code>      return new Object[][] { { "count", ++count } };</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      ResourceBundle rb = ResourceBundle.getBundle("counter.CountResource");</code>\n<code>      System.out.println(rb.getString("count") + " " + rb.getString("count"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 0",
      "0 1",
      "1 1",
      "1 2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "In most of the United States, daylight savings time ends on November 5, 2017 at 02:00 a.m., and we repeat that hour. What is the output of the following?",
    code:
      '<code>import java.time.*;</code>\n<code>&nbsp;</code>\n<code>public class FallBack {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate localDate = LocalDate.of(2017, 10, 5);</code>\n<code>      LocalTime localTime = LocalTime.of(1, 0);</code>\n<code>      ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>      ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>\n<code>&nbsp;</code>\n<code>      for (int i = 0; i &lt; 6; i++)</code>\n<code>         z = z.plusHours(1);</code>\n<code>&nbsp;</code>\n<code>      System.out.println(z.getHour());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5",
      "6",
      "7",
      "The code does not compile.",
      "The code compiles, but throws an exception at runtime."
    ]
  },
  {
    title:
      "Assume the /environment directory exists and contains a file with a symbolic link to the /environment directory. In addition, assume all files within the directory are fully accessible. What is the result of executing the following program?",
    code:
      '<code>import java.nio.file.*;</code>\n<code>import java.nio.file.attribute.*;</code>\n<code>public class SearchEnvironment {</code>\n<code>   public static void accessFile(Path p, long timeEpoch) {</code>\n<code>      try {</code>\n<code>         Files.readAttributes(p, BasicFileAttributes.class)</code>\n<code>            .setTimes(null, null, FileTime.fromMillis(timeEpoch));</code>\n<code>      } catch (Throwable e) {</code>\n<code>      } finally {}</code>\n<code>   }</code>\n<code>   public static final void main(String[] unused) throws Exception {</code>\n<code>      Path w = Paths.get("/environment");</code>\n<code>      Files.walk(w)</code>\n<code>         .forEach(q -&gt; accessFile(q,System.currentTimeMillis()));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The program exits after successfully updating the creation time of files within the directory.",
      "The program exits after successfully updating the last accessed time of files within the directory.",
      "The program compiles but throws an exception at runtime.",
      "The program enters an infinite loop and hangs at runtime."
    ]
  },
  {
    title:
      "Which command causes the following class to throw an AssertionError at runtime?",
    code:
      "<code>public class Watch {</code>\n<code>   private static final short DEFAULT_HOUR = 12;</code>\n<code>   private Watch() {</code>\n<code>      super();</code>\n<code>   }</code>\n<code>   int checkHour() {</code>\n<code>      assert DEFAULT_HOUR &gt; 12;</code>\n<code>      return DEFAULT_HOUR;</code>\n<code>   }</code>\n<code>   public static void main(String... ticks) {</code>\n<code>      new Watch().checkHour();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "java -da Watch",
      "java -ea:Watch -da Watch",
      "java -ea -da:Watch Watch",
      "java -enableassert Watch",
      "None of the above since the Watch class does not compile."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package rope;</code>\n<code>import java.util.concurrent.*;</code>\n<code>import java.util.stream.IntStream;</code>\n<code>public class Jump {</code>\n<code>   private static void await(CyclicBarrier b) {</code>\n<code>      try {</code>\n<code>         b.await();</code>\n<code>      } catch (InterruptedException | BrokenBarrierException e) {</code>\n<code>         e.printStackTrace();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] chalk) {</code>\n<code>      ExecutorService s = Executors.newFixedThreadPool(4);</code>\n<code>      final CyclicBarrier b = new CyclicBarrier(4,</code>\n<code>         () -&gt; System.out.print("Jump!"));</code>\n<code>      IntStream</code>\n<code>         .iterate(1, q -&gt; 2)</code>\n<code>         .limit(10)</code>\n<code>         .forEach(q -&gt; s.execute(() ‐&gt;await(b)));</code>\n<code>      s.shutdown();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Jump! is printed and exits.",
      "Jump! is printed twice and exits.",
      "The code does not compile.",
      "The output cannot be determined ahead of time.",
      "The program hangs indefinitely at runtime because the IntStream is not parallel.",
      "None of the above"
    ]
  },
  {
    title:
      "What is the output of the following code snippet? Assume the two directories referenced both exist and are symbolic links to the same location within the file system.",
    code:
      '<code>if(Files.isSameFile("/salad/carrot", "/fruit/apple"))</code>\n<code>   System.out.println("Same!");</code>\n<code>else System.out.println("Different!");</code>',
    answers: [
      "Same!",
      "Different!",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime.",
      "None of the above"
    ]
  },
  {
    title:
      "Which can fill in the blank JavaProgrammerCert class to compile and logically complete the code? (Choose two.)",
    code:
      "<code>class JavaProgrammerCert extends Exam {</code>\n<code>   private Exam oca;</code>\n<code>   private Exam ocp;</code>\n<code>   // assume getters and setters are here</code>\n<code>   ______________________________________  </code>\n<code>}</code>\n<code>public class Exam {</code>\n<code>   boolean pass;</code>\n<code>   protected boolean passed() {</code>\n<code>     return pass;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "boolean passed() { return oca.pass && ocp.pass; }",
      "boolean passed() { return oca.passed() && ocp.passed(); }",
      "boolean passed() { return super.passed(); }",
      "public boolean passed() { return oca.passed() && ocp.passed(); }",
      "public boolean passed() { return oca.pass && ocp.pass; }",
      "public boolean passed() { return super.passed(); }"
    ]
  },
  {
    title:
      "Which statements about overriding a method are correct? (Choose two.)",
    code: null,
    answers: [
      "An overridden method must not throw a narrower version of any checked exception thrown by the inherited method.",
      "An overridden method must use a return type that is covariant with the inherited method.",
      "An overridden method must use a different set of input arguments as the inherited method.",
      "Overridden methods must use an access modifier at least as broad as their inherited method.",
      "It is possible to override private and static methods.",
      "The @Override annotation is required anytime a method is overridden."
    ]
  },
  {
    title: " ",
    code:
      "<code>private static void choices(Connection conn, String sql)       throws SQLException {</code>\n<code>   try (Statement stmt = conn.createStatement();</code>\n<code>       ResultSet rs = stmt.executeQuery(sql)) {</code>\n<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________</code>\n<code>       </code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "II",
      "III",
      "I and III",
      "II and III",
      "I, II, and III",
      "None of the above"
    ]
  },
  {
    title:
      "Starting with DoubleBinaryOperator and going downward, fill in the values for the table.",
    code: null,
    answers: [
      "1, 0, 0, 0, 2",
      "1, 2, 1, 0, 1",
      "2, 1, 0, 1, 2",
      "2, 1, 1, 0, 1",
      "2, 1, 2, 0, 2",
      "3, 0, 2, 1, 1"
    ]
  },
  {
    title: "What is a possible output of the following?",
    code:
      '<code>LocalDate trainDay = LocalDate.of(2017, 5, 13);</code>\n<code>LocalTime time = LocalTime.of(10, 0);</code>\n<code>ZoneId zone = ZoneId.of("America/Los_Angeles");</code>\n<code>ZonedDateTime zdt = ZonedDateTime.of(trainDay, time, zone);</code>\n<code>Instant instant = zdt.toInstant();</code>\n<code>instant = instant.plus(1, ChronoUnit.YEARS);</code>\n<code>System.out.println(instant);</code>',
    answers: [
      "2017-05-13T10:00-07:00[America/Los_Angeles]",
      "2017-05-13T17:00:00Z",
      "2018-05-13T10:00-07:00[America/Los_Angeles]",
      "2018-05-13T17:00:00Z",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many lines does the following output?",
    code:
      '<code>import java.util.stream.*;</code>\n<code>&nbsp;</code>\n<code>class Blankie {</code>\n<code>   String color;</code>\n<code>   boolean isPink() {</code>\n<code>      return "pink".equals(color);</code>\n<code>   }</code>\n<code>}</code>\n<code>public class PreSchool {</code>\n<code>   public static void main(String[] args) {</code>\n<code>     Blankie b1 = new Blankie();</code>\n<code>     Blankie b2 = new Blankie();</code>\n<code>     b1.color = "pink";</code>\n<code>     Stream.of(b1, b2).filter(Blankie::isPink).forEach(System.out::println);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "None",
      "One",
      "Two",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: " ",
    code:
      "<code>1:   public class Tree {</code>\n<code>2:      String species;</code>\n<code>3:      public Tree(String species) {</code>\n<code>4:         this.species = species;</code>\n<code>5:      }</code>\n<code>6:      public String getSpecies() {</code>\n<code>7:        return species;</code>\n<code>8:      }</code>\n<code>9:      private final void setSpecies(String newSpecies) {</code>\n<code>10:        species = newSpecies;</code>\n<code>11:    }</code>\n<code>12:  }</code>",
    answers: [
      "None. It is already immutable.",
      "I",
      "I and II",
      "I and III",
      "II and III",
      "I, II, and III"
    ]
  },
  {
    title:
      "Let’s say you needed to write a large List of Student objects to a data file. Which three concrete classes, chained together, would best accomplish this? (Choose three.)",
    code: null,
    answers: [
      "BufferedFileOutputStream",
      "BufferedOutputStream",
      "FileOutputStream",
      "FileWriter",
      "ObjectOutputStream",
      "OutputStream"
    ]
  },
  {
    title:
      "Which statements when inserted independently will throw an exception at runtime? (Choose two.)",
    code:
      "<code>ArrayDeque&lt;Integer&gt; d = new ArrayDeque&lt;&gt;();</code>\n<code>d.offer(18);</code>\n<code>// INSERT CODE HERE</code>",
    answers: [
      "d.peek(); d.peek();",
      "d.poll(); d.poll();",
      "d.pop(); d.pop();",
      "d.remove(); d.remove();"
    ]
  },
  {
    title: "What is the output of the following code snippet?",
    code:
      '<code>11: Path x = Paths.get(".","song","..","/note");</code>\n<code>12: Path y = Paths.get("/dance/move.txt");</code>\n<code>13: x.normalize();</code>\n<code>14: System.out.println(x.resolve(y));</code>\n<code>15: System.out.println(y.relativize(x));</code>',
    answers: [
      "/./song/../note/dance/move.txt\n\n/dance/move.txt\n",
      "/dance/move.txt\n\n/dance/move.txt/./song/../note\n",
      "/dance/move.txt\n\n/dance/move.txt/note\n",
      "/note/dance/move.txt\n\n../dance/move.txt/song\n",
      "The code does not compile.",
      "The code compiles but an exception is thrown at runtime."
    ]
  },
  {
    title:
      "Given the following class, how many lines contain compilation errors?",
    code:
      '<code>package field;</code>\n<code>import java.io.*;</code>\n<code>class StungException extends Exception {}</code>\n<code>class Suit implements Closeable {</code>\n<code>   public void close() throws IOException {}</code>\n<code>}</code>\n<code>public class BeeCatcher {</code>\n<code>   public static void main(String... bees) {</code>\n<code>      try (Suit s = new Suit(), Suit t = new Suit()) {</code>\n<code>         throw new StungException();</code>\n<code><span epub:type="pagebreak" id="Page_405"></span>      } catch (Exception e) {</code>\n<code>      } catch (StungException e) {</code>\n<code>      } finally {</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["One", "Two", "Three", "Four", "None. The code compiles as is."]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package homework;</code>\n<code>import java.util.*;</code>\n<code>import java.util.stream.*;</code>\n<code>public class QuickSolution {</code>\n<code>   public static int findFast(Stream&lt;Integer&gt; s) {</code>\n<code>      return s.findAny().get();</code>\n<code>   }</code>\n<code>   public static int findSlow(Stream&lt;Integer&gt; s) {</code>\n<code>      return s.parallel().findFirst().get();</code>\n<code>   }</code>\n<code>   public static void main(String[] pencil) {</code>\n<code>      Stream&lt;Integer&gt; s1 = Arrays.asList(1,2,3,4,5).stream();</code>\n<code>      Stream&lt;Integer&gt; s2 = Arrays.asList(1,2,3,4,5).stream();</code>\n<code>      int val1 = findFast(s1);</code>\n<code>      int val2 = findSlow(s2);</code>\n<code>      System.out.print(val1+" "+val2);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "1 1",
      "3 1",
      "The answer cannot be determined until runtime.",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given this property file used to load the Properties object props and this code snippet, what is the output?",
    code:
      '<code>mystery=bag</code>\n<code>type=paper</code>\n<code>&nbsp;</code>\n<code>18:  System.out.print(props.getDefaultProperty("mystery", "?"));</code>\n<code>19:  System.out.print(" ");</code>\n<code>20:  System.out.print(props.getDefaultProperty("more", "?"));</code>',
    answers: [
      "bag",
      "bag null",
      "bag ?",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which statements about try-with-resources are true? (Choose two.)",
    code: null,
    answers: [
      "Any resource used must implement Closeable.",
      "If more than one resource is used, then the order in which they are closed is the reverse of the order in which they were created.",
      "If the try block and close() method both throw an exception, the one thrown by the try block is suppressed.",
      "Neither a catch nor a finally block is required.",
      "The close() method of the resources must throw a checked exception."
    ]
  },
  {
    title: "How many lines fail to compile?",
    code:
      "<code>class Roller&lt;E extends Wheel&gt; {</code>\n<code>   public void roll(E e) { }</code>\n<code>}</code>\n<code>class Wheel { }</code>\n<code>class CartWheel extends Wheel { }</code>\n<code>&nbsp;</code>\n<code>public class RollingContest {</code>\n<code>   Roller&lt;CartWheel&gt; wheel1 = new Roller&lt;CartWheel&gt;();</code>\n<code>   Roller&lt;Wheel&gt; wheel2 = new Roller&lt;CartWheel&gt;();</code>\n<code>   Roller&lt;? extends Wheel&gt; wheel3 = new Roller&lt;CartWheel&gt;();</code>\n<code>   Roller&lt;? extends Wheel&gt; wheel4 = new Roller&lt;Wheel&gt;();</code>\n<code>   Roller&lt;? super Wheel&gt; wheel5 = new Roller&lt;CartWheel&gt;();</code>\n<code>   Roller&lt;? super Wheel&gt; wheel6 = new Roller&lt;Wheel&gt;();</code>\n<code>}</code>",
    answers: ["One", "Two", "Three", "Four", "Five", "Six"]
  },
  {
    title: " ",
    code:
      "<code>1:   public class Bookmark {</code>\n<code>2:      private static Bookmark bookmark;</code>\n<code>3:      private int pageNumber;</code>\n<code>4:      static {</code>\n<code>5:        bookmark = new Bookmark();</code>\n<code>6:      }</code>\n<code>7:      public static Bookmark getInstance() {</code>\n<code>8:         return bookmark;</code>\n<code>9:      }</code>\n<code>10:     public int getPageNumber() {</code>\n<code>11:        return pageNumber;</code>\n<code>12:     }</code>\n<code>13:     public void setPageNumber(int newNumber) {</code>\n<code>14:        pageNumber = newNumber;</code>\n<code>15:     }</code>\n<code>16:  }</code>",
    answers: [
      "None. It is already a singleton.",
      "I",
      "I and II",
      "I and III",
      "II and III",
      "I, II, and III"
    ]
  },
  {
    title:
      "Given an updatable ResultSet that contains the following and this code, what does the code snippet output?",
    code:
      '<code><span epub:type="pagebreak" id="Page_408"></span>rs.afterLast();</code>\n<code>rs.previous();</code>\n<code>rs.updateInt(2, 10);</code>\n<code>&nbsp;</code>\n<code>rs = stmt.executeQuery("select * from pens where color = \'red\'");</code>\n<code>while (rs.next()) {</code>\n<code>   System.out.println(rs.getInt(2));</code>\n<code>}</code>',
    answers: [
      "0",
      "10",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which statements describe a java.io stream class and cannot be applied to a  java.util.stream.Stream class? (Choose three.)",
    code: null,
    answers: [
      "Can be used with try-with-resources statement",
      "Includes a class or set of classes used solely for working with character data",
      "Requires all data objects to implement Serializable",
      "Some classes contain a flush() method.",
      "Some classes contain a method to skip over data.",
      "Some classes contain a method to sort the data."
    ]
  },
  {
    title:
      "Bill wants to create a program that reads all of the lines of all of his books using NIO.2. Unfortunately, Bill may have made a few mistakes writing his program. How many lines of the following class contain compilation errors?",
    code:
      '<code>1:  package bookworm;</code>\n<code>2:  import java.io.*;</code>\n<code>3:  import java.nio.file.*;</code>\n<code>4:  public class ReadEverything {</code>\n<code>5:     public void readFile(Path p) {</code>\n<code>6:        try {</code>\n<code>7:           Files.readAllLines(p)</code>\n<code>8:           .parallel()</code>\n<code>9:           .forEach(System.out::println);</code>\n<code>10:       } catch (Exception e) {}</code>\n<code>11:    }</code>\n<code>12:    public void read(Path directory) throws Exception {</code>\n<code>13:       Files.walk(directory)</code>\n<code>14:          .filter(p -&gt; File.isRegularFile(p))</code>\n<code>15:          .forEach(x -&gt; readFile(x));</code>\n<code><span epub:type="pagebreak" id="Page_409"></span>16:    }</code>\n<code>17:    public static void main(String... books) throws IOException {</code>\n<code>18:       Path p = Path.get("collection");</code>\n<code>19:       new ReadEverything().read(p);</code>\n<code>20:    }</code>\n<code>21: }</code>',
    answers: [
      "None. Bill’s implementation is correct.",
      "One",
      "Two",
      "Three",
      "Four",
      "Five"
    ]
  },
  {
    title:
      "Assuming the following class is concurrently accessed by numerous threads, which statement about the CountSheep class is correct?",
    code:
      "<code>package fence;</code>\n<code>import java.util.concurrent.atomic.*;</code>\n<code>public class CountSheep {</code>\n<code>   private static AtomicInteger counter = new AtomicInteger();</code>\n<code>   private Object lock = new Object();</code>\n<code>   public synchronized int increment1() {</code>\n<code>      return counter.incrementAndGet();</code>\n<code>   }</code>\n<code>   public static synchronized int increment2() {</code>\n<code>      return counter.getAndIncrement();</code>\n<code>   }</code>\n<code>   public int increment3() {</code>\n<code>      synchronized(lock) {</code>\n<code>         return counter.getAndIncrement();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The class is thread-safe only if increment1() is removed.",
      "The class is thread-safe only if increment2() is removed.",
      "The class is thread-safe only if increment3() is removed.",
      "The class is already thread-safe.",
      "The class does not compile.",
      "The class compiles but may throw an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following are not required parameters for the NIO.2 Files.find() method? (Choose two.)",
    code: null,
    answers: ["BiPredicate", "FileVisitOption...", "int", "long", "Path"]
  },
  {
    title: "Which statements are correct? (Choose two.)",
    code: null,
    answers: [
      "A Comparable implementation is often implemented by a lambda.",
      "A Comparable object has a compare() method.",
      "The compare() and compareTo() methods have the same contract for the return value.",
      "There can be multiple Comparator implementations for the same class.",
      "Two objects that return true for equals() will always return 0 when passed to  compareTo()."
    ]
  },
  {
    title:
      "What is the output of the following code snippet, assuming none of the files referenced exist within the file system?",
    code:
      '<code>Path t1 = Paths.get("/sky/.././stars.exe");</code>\n<code>Path t2 = Paths.get("/stars.exe");</code>\n<code>Path t3 = t1.resolve(t2);</code>\n<code>&nbsp;</code>\n<code>boolean b1 = t1.equals(t2);</code>\n<code>boolean b2 = t1.normalize().equals(t2);</code>\n<code>boolean b3 = Files.isSameFile(t1.normalize(),t2);</code>\n<code>boolean b4 = Files.isSameFile(t2,t3);</code>\n<code>&nbsp;</code>\n<code>System.out.print(b1+","+b2+","+b3+","+b4);</code>',
    answers: [
      "false,false,true,true",
      "false,true,true,false",
      "false,true,true,true",
      "true,false,true,false",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Let’s say we have a Reader instance that will produce the characters with the numeric values {1,2,3,4,5,6,7}. Which of the following are possible outcomes of executing the checkLottoNumbers() method with this Reader instance? (Choose two.)",
    code:
      '<code>23: public String checkLottoNumbers(Reader r) throws IOException {</code>\n<code>24:    r.read();r.skip(1);</code>\n<code>25:    r.mark(5);</code>\n<code><span epub:type="pagebreak" id="Page_411"></span>26:    r.skip(1);</code>\n<code>27:    r.reset();</code>\n<code>28:    return r.read()+"-"+r.read(new char[5]);</code>\n<code>29: }</code>',
    answers: [
      "An IOException on line 25",
      "An IOException on line 27",
      "'c'-4 is returned.",
      "'d'-3 is returned.",
      "3-4 is returned.",
      "4-3 is returned."
    ]
  },
  {
    title:
      "Fill in the blanks: The name of the abstract method in the Function interface __________ is , while the name of the abstract method in the Consumer  interface is__________ .",
    code: null,
    answers: [
      "accept(), apply()",
      "accept(), get()",
      "apply(), accept()",
      "apply(), apply()",
      "apply(), test()"
    ]
  },
  {
    title:
      "Assuming the following program is executed with assertions enabled, which is the first line to throw an exception at runtime?",
    code:
      '<code>1:  package school;</code>\n<code>2:  public class Teacher {</code>\n<code>3:     public int checkClasswork(int choices) {</code>\n<code>4:        assert choices++==10 : 1;</code>\n<code>5:        assert true!=false : new StringBuilder("Answer2");</code>\n<code>6:        assert(null==null) : new Object();</code>\n<code>7:        assert ++choices==11 : "Answer4";</code>\n<code>8:        assert 2==3 : "";</code>\n<code>9:        return choices;</code>\n<code>10:    }</code>\n<code>11:    public final static void main(String... students) {</code>\n<code>12:       try {</code>\n<code>13:          new Teacher().checkClasswork(10);</code>\n<code>14:       } catch (Error e) {</code>\n<code>15:          System.out.print("Bad idea");</code>\n<code>16:          throw e;</code>\n<code>17:       }</code>\n<code>18:    }</code>\n<code>19: }</code>',
    answers: [
      "Line 4",
      "Line 5",
      "Line 6",
      "Line 7",
      "Line 8",
      "None of the above since the class does not compile"
    ]
  },
  {
    title:
      "Which of the following are valid functional interfaces in the java.util.function  package? (Choose three.)",
    code: null,
    answers: [
      "BooleanSupplier",
      "CharSupplier",
      "DoubleUnaryOperator",
      "ObjectIntConsumer",
      "ToLongBiFunction",
      "TriPredicate"
    ]
  },
  {
    title:
      "Which statements about the following class are correct? (Choose two.)",
    code:
      '<code>package knowledge;</code>\n<code>class InformationException extends Exception {}</code>\n<code>public class LackOfInformationException extends InformationException {</code>\n<code>   public LackOfInformationException() {  // t1</code>\n<code>      super("");</code>\n<code>   }</code>\n<code>   public LackOfInformationException(String s) {  // t2</code>\n<code>      this(new Exception(s));</code>\n<code>   }</code>\n<code>   public LackOfInformationException(Exception c) {  // t3</code>\n<code>      super();</code>\n<code>   }</code>\n<code>   @Override public String getMessage() {</code>\n<code>      return "lackOf";</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "LackOfInformationException compiles without issue.",
      "The constructor declared at line t1 does not compile.",
      "The constructor declared at line t2 does not compile.",
      "The constructor declared at line t3 does not compile.",
      "The getMessage()method does not compile because of the @Override annotation.",
      "LackOfInformationException is a checked exception."
    ]
  },
  {
    title:
      "How many changes do you need to make in order for this code to compile?",
    code:
      "<code>public class Ready {</code>\n<code>   private static double getNumber() {</code>\n<code>      return .007;</code>\n<code>   }</code>\n<code>   public static void math() {</code>\n<code>      Supplier&lt;double&gt; s = Ready:getNumber;</code>\n<code>      double d = s.get();</code>\n<code>      System.out.println(d);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three", "Four"]
  },
  {
    title: "Which statement about the following class is correct?",
    code:
      '<code>package robot;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class PassButter extends RecursiveTask&lt;String&gt; {  // j1</code>\n<code>   final int remainder;</code>\n<code>   public PassButter(int remainder) {  // j2</code>\n<code>      this.remainder = remainder;</code>\n<code>   }</code>\n<code>   @Override</code>\n<code>   protected String compute() {</code>\n<code>      if (remainder &lt;= 1)</code>\n<code>         return "1";</code>\n<code>      else {</code>\n<code>         PassButter otherTask = new PassButter(remainder - 1);</code>\n<code>         String otherValue = otherTask.fork().join();  // j3</code>\n<code>         return otherValue</code>\n<code>            + new PassButter(remainder - 2).compute();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] purpose) {</code>\n<code>      ForkJoinPool pool = new ForkJoinPool();</code>\n<code>      ForkJoinTask&lt;?&gt; task = new PassButter(10);</code>\n<code><span epub:type="pagebreak" id="Page_414"></span>      System.out.print(pool.invoke(task));</code>\n<code>      pool.shutdown();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile due to line j1.",
      "The code does not compile due to line j2.",
      "The code does not compile due to line j3.",
      "The code compiles and properly implements the fork/join framework in a multi-threaded manner.",
      "The code compiles but does not implement the fork/join framework in a proper multi-threaded manner.",
      "The class compiles and prints an exception at runtime."
    ]
  },
  {
    title: "Which can fill in the blank so this code outputs true?",
    code:
      "<code>import java.util.function.*;</code>\n<code>import java.util.stream.*;</code>\n<code>&nbsp;</code>\n<code>public class HideAndSeek {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Boolean&gt; hide = Stream.of(true, false, true);</code>\n<code>      Predicate&lt;Boolean&gt; pred = b ‐&gt; b;</code>\n<code>      boolean found = hide.filter(pred).__________(pred);</code>\n<code>      System.out.println(found);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Only anyMatch()",
      "Only allMatch()",
      "Both anyMatch() and allMatch()",
      "Only noneMatch()",
      "The code does not compile with any of these options."
    ]
  },
  {
    title:
      "Given the following code, Java will try to find a matching resource bundle. Which order will Java search to find a match?",
    code:
      '<code>Locale.setDefault(new Locale("en"));</code>\n<code>ResourceBundle.getBundle("AB", new Locale("fr"));</code>',
    answers: [
      "AB.class, AB.properties, AB_en.properties, AB_fr.properties",
      "AB.properties, AB.class, AB_en.properties, AB_fr.properties",
      "AB_en.properties, AB_fr.properties, AB.class, AB.properties",
      "AB_fr.properties, AB.class, AB.properties, AB_en.properties",
      "AB_fr.properties, AB_en.properties, AB.class, AB.properties",
      "AB_fr.properties, AB_en.properties, AB.properties, AB.class"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      "<code>Set&lt;Integer&gt; dice = new TreeSet&lt;&gt;();</code>\n<code>dice.add(6);</code>\n<code>dice.add(6);</code>\n<code>dice.add(4);</code>\n<code>dice.stream().filter(n -&gt; n != 4).forEach(System.out::println).count();</code>",
    answers: [
      "It prints just one line.",
      "It prints one line and then the number 3.",
      "There is no output.",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the following two property files in the pod package, what does the following class output?",
    code:
      '<code>pod.container.properties</code>\n<code>name=generic</code>\n<code>number=2</code>\n<code>pod.container_en.properties</code>\n<code>name=Docker</code>\n<code>type=container</code>\n<code>package pod;</code>\n<code>import java.util.*;</code>\n<code>public class WhatKind {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Locale.setDefault(new Locale("ja"));</code>\n<code>      ResourceBundle rb = ResourceBundle.getBundle("pod.container");</code>\n<code>      String name = rb.getString("name");    // r1</code>\n<code>      String type = rb.getString("type");    // r2</code>\n<code>      System.out.println(name + " " + type);   }</code>\n<code>}</code>',
    answers: [
      "Docker container",
      "generic container",
      "generic null",
      "The code does not compile.",
      "Line r1 throws an exception.",
      "Line r2 throws an exception."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      "<code>import java.util.stream.*;</code>\n<code>public class StreamOfStreams {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Integer result =</code>\n<code>         Stream.of(getNums(9, 8), getNums(22, 33))  // c1</code>\n<code>         .filter(x -&gt; !x.isEmpty())                 // c2</code>\n<code>         .flatMap(x -&gt; x)                           // c3</code>\n<code>         .max((a, b) -&gt; a ‐ b)                      // c4</code>\n<code>         .get();</code>\n<code>      System.out.println(result);</code>\n<code>   }</code>\n<code>   private static Stream&lt;Integer&gt; getNums(int num1, int num2) {</code>\n<code>      return Stream.of(num1, num2);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code compiles and outputs 8.",
      "The code compiles and outputs 33.",
      "The code does not compile due to line c1.",
      "The code does not compile due to line c2.",
      "The code does not compile due to line c3.",
      "The code does not compile due to line c4."
    ]
  },
  {
    title: "Which of the following shows a valid Locale format? (Choose two.)",
    code: null,
    answers: ["de", "DE", "de_DE", "DE_de"]
  },
  {
    title:
      "What is true of the following if the music database exists and contains a songs table with one row when run using a JDBC 4.0 driver? (Choose two.)",
    code:
      '<code>import java.sql.*;</code>\n<code>public class Music {</code>\n<code>   public static void main(String[] args) throws Exception {</code>\n<code>      String url = "jdbc:derby:music";</code>\n<code>      Connection conn = DriverManager.getConnection(url);</code>\n<code>      Statement stmt = conn.createStatement();</code>\n<code>      stmt.execute("update songs set name = \'The New Song\'");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The code does not update the database because it calls execute() rather than  executeUpdate().",
      "The code does not update the database because the Statement is never closed.",
      "The code runs without error.",
      "The execute() method returns a boolean.",
      "The execute() method returns an int."
    ]
  },
  {
    title: " ",
    code:
      "<code>class Sticker {</code>\n<code>   @Override</code>\n<code>   public int hashCode() {</code>\n<code>      return _______________ ;</code>\n<code>   }</code>\n<code>   @Override</code>\n<code>   public boolean equals(Sticker o) {</code>\n<code>      return _______________;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "None",
      "One",
      "Two",
      "Three",
      "Four",
      "None of the above. The code does not compile with any of the options."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package winter;</code>\n<code>&nbsp;</code>\n<code>abstract class TShirt {</code>\n<code>   abstract int insulate();</code>\n<code>   public TShirt() {</code>\n<code>      System.out.print("Starting...");</code>\n<code>   }</code>\n<code>}</code>\n<code><span epub:type="pagebreak" id="Page_418"></span>public class Wardrobe {</code>\n<code>   abstract class Sweater extends TShirt {</code>\n<code>      int insulate() {return 5;}</code>\n<code>   }</code>\n<code>   private static void dress() {</code>\n<code>      class Jacket extends Sweater {  // v1</code>\n<code>         int insulate() {return 10;}</code>\n<code>      };</code>\n<code>      final TShirt outfit = new Jacket() {  // v2</code>\n<code>         int insulate() {return 20;}</code>\n<code>      };</code>\n<code>      System.out.println("Insulation:"+outfit.insulate());</code>\n<code>   }</code>\n<code>   public static void main(String... snow) {</code>\n<code>      new Wardrobe().dress();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Starting...Insulation:20",
      "Starting...Insulation:40",
      "The code does not compile because of line v1.",
      "The code does not compile because of line v2.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title: " ",
    code:
      "<code>1:  package armory;</code>\n<code>2:  import java.util.function.*;</code>\n<code>3:  class Shield {}</code>\n<code>4:  public class Sword {</code>\n<code>5:     public class Armor {</code>\n<code>6:       int count;</code>\n<code>7:        public final Function&lt;Shield,Sword,Armor&gt; dress = (h,w) ‐&gt; new Armor();</code>\n<code>8:       public final IntSupplier&lt;Integer&gt; addDragon = () ‐&gt; count++;</code>\n<code>9:     }</code>\n<code>10:    public static void main(String[] knight) {</code>\n<code>11:      final Armor a = new Armor();</code>\n<code>12:      a.dress.apply(new Shield(), new Sword());</code>\n<code>13:      a.addDragon.getAsInt();</code>\n<code>14:    }</code>\n<code>15: }</code>",
    answers: [
      "I only",
      "I and II only",
      "I, II, and III",
      "II and III only",
      "None of the above"
    ]
  },
  {
    title:
      "Which two conditions best describe a thread that appears to be active but is perpetually stuck and never able to finish its task? (Choose two.)",
    code: null,
    answers: [
      "Deadlock",
      "Livelock",
      "Loss of precision",
      "Out of memory error",
      "Race condition",
      "Starvation"
    ]
  },
  {
    title:
      "Which statements are true about the following date/times? (Choose two.)",
    code:
      "<code>2017-04-01T17:00+03:00[Africa/Nairobi]</code>\n<code>2017-04-01T10:00-05:00[America/Panama]</code>",
    answers: [
      "The first date/time is earlier.",
      "The second date/time is earlier.",
      "Both represent the same date/time.",
      "The two date/times are zero hours apart.",
      "The two date/times are one hour apart.",
      "The two date/times are two hours apart."
    ]
  },
  {
    title: "What is true about the following?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Yellow {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      List list = Arrays.asList("Sunny");</code>\n<code>      method(list);     // c1</code>\n<code>   }</code>\n<code>   private static void method(Collection&lt;?&gt; x) {    //c2</code>\n<code>      x.forEach(a -&gt; {});   // c3</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "The code doesn’t compile due to line c1.",
      "The code doesn’t compile due to line c2.",
      "The code doesn’t compile due to line c3.",
      "The code compiles and runs without output.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is true about the following code? (Choose two.)",
    code:
      '<code>public static void main(String[] args) throws Exception {</code>\n<code>   String url = "jdbc:derby:hats;create=true";</code>\n<code>   Connection conn = null;</code>\n<code>   Statement stmt = null;</code>\n<code>&nbsp;</code>\n<code>   try {</code>\n<code>     conn = DriverManager.getConnection(url);</code>\n<code>     stmt = conn.createStatement();</code>\n<code>     stmt.executeUpdate(        "CREATE TABLE caps (name varchar(255), size varchar(1))");</code>\n<code>   } finally {</code>\n<code>       conn.close();</code>\n<code>       stmt.close();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "If using a JDBC 3.0 driver, this code throws an exception.",
      "If using a JDBC 4.0 driver, this code throws an exception.",
      "The resources are closed in the wrong order.",
      "The resources are closed in the right order.",
      "The Connection is created incorrectly.",
      "The Statement is created incorrectly."
    ]
  },
  {
    title:
      "How many lines of the following application contain a compilation error?",
    code:
      '<code>package puzzle;</code>\n<code>final interface Finder {</code>\n<code>   default long find() {return 20;}</code>\n<code>}</code>\n<code>abstract class Wanda {</code>\n<code>   abstract long find();</code>\n<code>}</code>\n<code>final class Waldo extends Wanda implements Finder {</code>\n<code>   long find() {return 40;}</code>\n<code><span epub:type="pagebreak" id="Page_421"></span>   public static final void main(String[] pictures) {</code>\n<code>      final Finder f = new Waldo();</code>\n<code>      System.out.print(f.find());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Two",
      "Three",
      "None. The code compiles and prints 20 at runtime.",
      "None. The code compiles and prints 40 at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   package reader;</code>\n<code>2:   import java.util.stream.*;</code>\n<code>3:</code>\n<code>4:   public class Books {</code>\n<code>5:      public static void main(String[] args) {</code>\n<code>6:         IntStream pages = IntStream.of(200, 300);</code>\n<code>7:         long total = pages.sum();</code>\n<code>8:         long count = pages.count();</code>\n<code>9:         System.out.println(total + "-" + count);</code>\n<code>10:     }</code>\n<code>11:  }</code>',
    answers: [
      "2-2",
      "200-1",
      "500-0",
      "500-2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of executing the following code snippet?",
    code:
      '<code>30: ExecutorService e = Executors.newSingleThreadExecutor();</code>\n<code>31: Runnable r1 = () -&gt; Stream.of(1,2,3).parallel();</code>\n<code>32: Callable r2 = () -&gt; Stream.of(4,5,6).parallel();</code>\n<code>33:</code>\n<code>34: Future&lt;Stream&gt; f1 = e.submit(r1);</code>\n<code>35: Future&lt;Stream&gt; f2 = e.submit(r2);</code>\n<code>36:</code>\n<code><span epub:type="pagebreak" id="Page_422"></span>37: Stream&lt;Integer&gt; s = Stream.of(f1.get(),f2.get())</code>\n<code>38:       .flatMap(p -&gt; p)</code>\n<code>39:       .parallelStream();</code>\n<code>40:</code>\n<code>41: ConcurrentMap&lt;Boolean,List&lt;Integer&gt;&gt; r =</code>\n<code>42:       s.collect(Collectors.groupingByConcurrent(i -&gt; i%2==0));</code>\n<code>43: System.out.println(r.get(false).size()+" "+r.get(true).size());</code>',
    answers: [
      "3 3",
      "2 4",
      "The code does not compile due to one error.",
      "The code does not compile due to two errors.",
      "The code does not compile due to three errors.",
      "The code compiles but a NullPointerException is thrown at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: If your application is__________ , it must first have been __________ with respect to supporting multiple languages.",
    code: null,
    answers: [
      "extracted, internationalized",
      "extracted, localized",
      "internationalized, extracted",
      "internationalized, localized",
      "localized, extracted",
      "localized, internationalized"
    ]
  },
  {
    title:
      "Which statement about the following class is true? Assume the file system is available and able to be modified.",
    code:
      '<code>package forest;</code>\n<code>import java.io.File;</code>\n<code>public class CreateTree {</code>\n<code>   public boolean createTree(String tree) {</code>\n<code>      if(new File(tree).exists()) {</code>\n<code>         return true;</code>\n<code>      } else {</code>\n<code>         return new File(tree).mkdir();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] seeds) {</code>\n<code>      final CreateTree creator = new CreateTree();</code>\n<code>      System.out.print(creator.createTree("/woods/forest"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The class compiles and always prints true at runtime.",
      "The class compiles and always prints false at runtime.",
      "The class compiles but the output cannot be determined until runtime.",
      "The class compiles but may throw an exception at runtime.",
      "The class does not compile."
    ]
  },
  {
    title: "What does the following print?",
    code:
      '<code>1:    class SmartWatch extends Watch {</code>\n<code>2:      private String getType() { return "smart watch"; }</code>\n<code>3:      public String getName() {</code>\n<code>4:         return getType() + ",";</code>\n<code>5:      }</code>\n<code>6:   }</code>\n<code>7:   public class Watch {</code>\n<code>8:      private String getType() { return "watch"; }</code>\n<code>9:      public String getName(String suffix) {</code>\n<code>10:        return getType() + suffix;</code>\n<code>11:     }</code>\n<code>12:     public static void main(String[] args) {</code>\n<code>13:        Watch watch = new Watch();</code>\n<code>14:        Watch smartWatch = new SmartWatch();</code>\n<code>15:        System.out.print(watch.getName(","));</code>\n<code>16:        System.out.print(smartWatch.getName(""));</code>\n<code>17:     }</code>\n<code>18:  }</code>',
    answers: [
      "smart watch,smart watch",
      "smart watch,watch",
      "watch,smart watch",
      "watch,watch",
      "None of the above"
    ]
  },
  {
    title:
      "In most of the United States, daylight savings time ends on November 5, 2017 at 02:00 a.m., and we repeat that hour. What is the output of the following?",
    code:
      '<code>import java.time.*;</code>\n<code>&nbsp;</code>\n<code>public class FallBack {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate localDate = LocalDate.of(2017, Month.NOVEMBER, 5);</code>\n<code>      LocalTime localTime = LocalTime.of(1, 0);</code>\n<code>      ZoneId zone = ZoneId.of("America/New_York");</code>\n<code>      ZonedDateTime z = ZonedDateTime.of(localDate, localTime, zone);</code>\n<code>&nbsp;</code>\n<code><span epub:type="pagebreak" id="Page_424"></span>      for (int i = 0; i &lt; 6; i++)</code>\n<code>         z = z.plusHours(1);</code>\n<code>&nbsp;</code>\n<code>      System.out.println(z.getHour());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5",
      "6",
      "7",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: " ",
    code:
      '<code>package party;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Plan {</code>\n<code>   private ExecutorService service = Executors.newCachedThreadPool();</code>\n<code>   public void planEvents() {</code>\n<code>      service.scheduleWithFixedDelay(</code>\n<code>            () -&gt; System.out.print("Check food stock"),</code>\n<code>            1, TimeUnit.HOURS);</code>\n<code>      service.scheduleAtFixedRate(</code>\n<code>            () -&gt; System.out.print("Check drink stock"),</code>\n<code>            1, 1000, TimeUnit.SECONDS);</code>\n<code>      service.execute(() -&gt; System.out.print("Take out trash"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "I only",
      "II only",
      "III only",
      "I and II",
      "I, II, and III",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following classes are checked exception? (Choose three.)",
    code: null,
    answers: [
      "java.io.NotSerializableException",
      "java.lang.AssertionError",
      "java.lang.IllegalArgumentException",
      "java.sql.SQLException",
      "java.text.ParseException",
      "java.util.MissingResourceException"
    ]
  },
  {
    title:
      "Which of the following are valid functional interfaces? (Choose two.)",
    code: null,
    answers: [
      "interface CanClimb {default void climb() {} \n\n   static void climb(int x) {}}\n",
      "interface CanDance {int dance() { return 5;}}",
      "interface CanFly {abstract void fly();}",
      "interface CanRun {void run();\n\n   static double runFaster() {return 2.0;}}\n",
      "interface CanSwim {abstract Long swim();\n\n   boolean test();}\n"
    ]
  },
  {
    title: " ",
    code: null,
    answers: ["None", "One", "Two", "Three", "Four", "Five"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>Stream&lt;String&gt; s = Stream.of("speak", "bark", "meow", "growl");</code>\n<code>Map&lt;Integer, String&gt; map = s.collect(toMap(String::length, k ‐&gt; k));</code>\n<code>System.out.println(map.size() + " " + map.get(4));</code>',
    answers: [
      "2 bark",
      "2 meow",
      "4 bark",
      "4 meow",
      "The output is not guaranteed.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package music;</code>\n<code>interface DoubleBass {</code>\n<code>   void strum();</code>\n<code>   default int getVolume() {return 5;}</code>\n<code>}</code>\n<code>interface BassGuitar {</code>\n<code>   void strum();</code>\n<code>   default int getVolume() {return 10;}</code>\n<code>}</code>\n<code>class ElectricBass implements DoubleBass, BassGuitar {</code>\n<code>   @Override public void strum() {System.out.print("A");}</code>\n<code>}</code>\n<code>public class RockBand {</code>\n<code>   public static void main(String[] strings) {</code>\n<code>      final class MyElectricBass extends ElectricBass {</code>\n<code>         public void strum() {System.out.print("E");}</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "A",
      "E",
      "The code compiles and runs without issue but does not print anything.",
      "One line of code does not compile.",
      "Two lines of code do not compile.",
      "Three lines of code do not compile."
    ]
  },
  {
    title: "Which NIO.2 Files methods return a Stream? (Choose three.)",
    code: null,
    answers: [
      "find()",
      "lines()",
      "list()",
      "listFiles()",
      "readAllLines()",
      "walkFileTree()"
    ]
  }
];

const a23 = [
  "A, E. Line 12 has no effect. The cursor starts out positioned immediately before the first row and beforeFirst() keeps it there. Line 13 moves the cursor to point to row five and prints true. Line 14 prints the value in that row, which is 5. Line 15 tries to subtract 10 rows from the current position. That would be at row negative five. However, the cursor can’t go back further than the beginning, so it stays at row zero. It also prints false since there isn’t data at row zero. Note this is the same position the cursor was at on line 12. Now we have a problem. Line 16 tries to print a value on row zero, but there is no data. It instead throws a SQLException, making Option E correct. Option A is also correct since true was only output once.",
  "D. While this code misuses formatting characters, it does compile and run successfully, making Options E and F incorrect. A lowercase m represents the minutes, which are 59 in this case, ruling out Options A and B. The rest of the code prints the date, hour, and month. This gives the value 59.140103, making Option D the answer.",
  "A, B, E. First off, Option A is a valid functional interface that matches the Runnable functional interface. Option B is also a valid lambda expression that matches Function<Double,Double>, among other functional interfaces. Option C is incorrect because the local variable w cannot be declared again in the lambda expression body since it is already declared in the lambda expression. Option D is also incorrect. If the data type is specified for one variable in a lambda expression, it must be specified for all variables within the expression. Next, Option E is correct because this lambda expression matches the UnaryOperator functional interface. Lastly, Option F is incorrect. The statement name.toUpperCase() is missing a semicolon (;) that is required to terminate the statement.",
  "D. The code does not compile, so Options A, B, and F are incorrect. The first compilation error is in the declaration of the lambda expression for second. It does not use a generic type, which means t is of type Object. Since Object, unlike String, does not have a method equalsIgnoreCase(), the lambda expression does not compile. The second compilation issue is in the lambda expression in the main() method. Notice that process() takes an ApplyFilter instance, and ApplyFilter is a functional interface that takes a List<String> object. For this reason, q in this lambda expression is treated as an instance of List<String>. The forEach() method defined in Collections requires a Consumer instance, not a Function, so the call q.forEach(first) does not compile. For these two reasons, Option D is the correct answer, since the rest of the code compiles without issue.",
  "B. First, remember that you are supposed to assume missing imports are present so you can act as if java.util and java.util.stream are imported. This code does compile. Line r1 is a valid lambda definition of a Comparator. Line r2 is valid code to sort a stream in a descending order and print the values. Therefore, Option B is correct.",
  "F. The first catch block on line p1 does not compile because AddingException and DividingException are checked exceptions, and the compiler detects these exceptions are not capable of being thrown by the associated try block. The second catch block on line p2 also does not compile, although for a different reason. UnexpectedException is a subclass of RuntimeException, which in turn extends Exception. This makes UnexpectedException a subclass of Exception, causing the compiler to consider UnexpectedException redundant. For these two reasons, the code does not compile, and Option F is the correct answer.",
  "A. The code compiles and runs without issue, making Option A the correct answer. Enums are usually named like classes and have enum values that are all uppercase. While a format like Colors.RED or Colors.GREEN is the common convention, alternate formats like COLORS.blue do compile. Next, note the enum properly implements the HasHue interface even though there’s no enum-level method, with each value having its own implementation. Also, line 10 does not end with a semicolon (;). Because there are no methods or constructors defined outside the value list, a semicolon (;) is not required. The enum class and the rest of the application compile without issue, printing Painting: 00FF00 at runtime.",
  "C. Java 8 date and time classes are immutable. They use a static factory method to get the object reference rather than a constructor. This makes II, IV, and VI incorrect. Further, there is not a ZonedDate class. There is a ZonedDateTime class. This additionally makes V incorrect. Both I and III compile, so Option C is correct.",
  "C, F. The Optional does not contain a value. While there is a get() method on Optional, it doesn’t take any parameters, making Options A and B incorrect. Option C is the simplest way to print the desired result. The orElse() method returns the parameter passed if the Optional is empty. The orElseGet() method runs the Supplier passed as a parameter, making Option F correct as well.",
  "B. This class is never instantiated, so the instance initializer never outputs 1 and the constructor never outputs 3. This rules out Options A, D, and E. A static initializer only runs once for the class, which rules out Option C. Option B is correct because the static initializer runs once printing 2, followed by the static method callMe() printing 4 twice, and ending with the main() method printing 5.",
  "C. The Locale class has a constructor taking a language code and an optional country code. The Properties class is a type of Map so it also has a constructor. By contrast, a ResourceBundle subclass is typically obtained by calling the ResourceBundle.getBundle() method. ResourceBundle is an abstract class, so a subclass will get returned like ListResourceBundle.",
  "E. Option C is clearly incorrect because the class has a public constructor so cannot be a singleton. Options A, B, and D are also incorrect because the height instance variable is not private. This means other classes in the same package can read and change the value. Therefore, Option E is correct.",
  "E. The readObject() method returns an Object instance, which must be explicitly cast to Cruise in the second try-with-resources statement. For this reason, the code does not compile, and Option E is the correct answer. If the explicit cast was added, the code would compile but throw a NotSerializableException at runtime, since Cruise does not implement the Serializable interface. If both of these issues were corrected, the code would run and print 4,null. The schedule variable is marked transient, so it defaults to null when deserialized, while numPassengers is assigned the value it had when it was serialized. Note that on deserialization, the constructors and instance initializers are not executed.",
  "B. Driver, Connection, Statement, and ResultSet are the four key interfaces you need to know for JDBC. DriverManager is a class rather than an interface. Query is not used in JDBC. Since only Driver and ResultSet are interfaces in the list, Option B is the answer.",
  "A, C, F. The IntUnaryOperator takes an int value and returns an int value. Options B and E are incorrect because the parameter types, Integer and long, respectively, are not compatible. Option B is incorrect because while unboxing can be used for expressions, it cannot be used for parameter matching. Option E is incorrect because converting from long to int requires an explicit cast. Option D is incorrect because dividing an int by a double value 3.1 results in q/3.1 being a double value, which cannot be converted to int without an explicit cast. The rest of the lambda expressions are valid since they correctly take an int value and return an int value.",
  "D, F. To begin with, the read() method of both classes returns an int value, making Option A incorrect. As you may recall from your studies, neither use byte or char, so that -1 can be returned when the end of the stream is reached without using an existing byte or char value. Option B is incorrect because neither contain a flush() method, while Option C is incorrect because they both contain a skip() method. Both InputStream and Reader are abstract classes, not interfaces, making Option D correct and Option E incorrect. That leaves Option F as a correct answer. Both can be used to read character or String data, although Reader is strongly recommended, given its built-in support for character encodings.",
  "B. There are not minus() or plus() methods on ChronoUnit making Options C, D, E and F incorrect. Both Options A and B compile; however, they differ in the output. Option A prints 1 because you can add 1 to get from November to December. Option B prints -1 because the first date is larger, and therefore Option B is the correct answer.",
  "D. The code compiles without issue, making the first statement true and eliminating Option B. It is possible that System.console() could return null, leading to a NullPointerException at runtime and making the third statement true. For this reason, Options A and C are also incorrect. That leaves us with two choices. While the process correctly clears the password from the char array in memory, it adds the value to the JVM string pool when it is converted to a String. The whole point of using a char array is to prevent the password from entering the JVM string pool, where it can exist after the method that called it has finished running. For this reason, the second statement is false, making Option D correct and Option E incorrect.",
  "B. Options C and D are incorrect because they print the Runner object rather than the int value it contains since peek() is called before mapping the value. The Runner object is something like Runner@6d03e736. Option A is incorrect because the map() method returns a Stream<Integer>. While Stream<Integer> does have a max() method, it requires a Comparator. By contrast, Option B uses mapToInt(), which returns an IntStream and does have a max() method that does not take any parameters. Option B is the only one that compiles and outputs the int values.",
  "E. The code does not compile, so Options A, B, and F are incorrect. The first compilation error is on line 3, which is missing a required semicolon (;) at the end of the line. A semicolon (;) is required at the end of any enum value list if the enum contains anything after the list, such as a method or constructor. The next compilation error is on line 4 because enum constructors cannot be public. The last compilation error is on line 10. The case statement must use an enum value, such as FALL, not an int value. For these three reasons, Option E is the correct answer.",
  "A, C, E. To start with, bustNow() now takes a Double value, while bustLater() takes a double value. To be compatible, the lambda expression has to be able to handle both data types. Option A is correct, since the method reference System.out::print matches overloaded methods that can take double or a Double (via unboxing). Option B is incorrect, since intValue() works for the Consumer<Double>, which takes Double, but not DoubleConsumer, which takes double. For a similar reason, Option D is also incorrect because only the primitive double is compatible with this expression. Option C is correct and results in just a blank line being printed. Option E is correct since it is just the lambda version of the method reference in Option A. Finally, Option F is incorrect because of incompatible data types. The method reference is being used inside of a lambda expression, which would only be allowed if the functional interface returned another functional interface reference.",
  "F. This class correctly creates and retrieves a Java class resource bundle. Since count is an int, it is autoboxed into an Integer. However, rb.getString() cannot be called for an Integer value. The code throws a ClassCastException, so Option F is the answer. If this was fixed, the answer would be Option C because the pre-increment is used and getContents() is only called once.",
  "C. The Java 8 date/time APIs count months starting with one rather than zero. This means localDate is created as October 5, 2017. This is not the day that daylight savings time ends. The loop increments the hour six times, making the final time 07:00. Therefore Option C is the answer.",
  "A. The code does not compile because BasicFileAttributes is used to read file information, not write it, making Option A the correct answer. If the code was changed to pass BasicFileAttributeView.class to the Files.getFileAttributeView() method, then the code would compile, and Option B would be the correct answer. Finally, remember that by default, symbolic links are not traversed by the Files.walk() method, avoiding a cycle. If FileVisitOption.FOLLOW_LINKS was passed, then the class would throw an exception because Files.walk() does keep track of the files it visits and throws a FileSystemLoopException in the presence of a cycle.",
  "B. The code compiles without issue, making Option E incorrect. Option A is incorrect because it disables all assertions, which is the default JVM behavior. Option B is the correct answer. It disables assertions everywhere but enables them within the Watch class, triggering an AssertionError at runtime within the checkHour() method. Option C is incorrect because it enables assertions everywhere but disables them within the Watch class. Option D is also incorrect because -enableassert is not a valid JVM flag. The only valid flags to enable assertions are -ea and -enableassertions.",
  "F. The code compiles without issue, making Option C incorrect. The main() method creates a thread pool of four threads. It then submits 10 tasks to it. At any given time, the ExecutorService has up to four threads active, which is the same number of threads required to reach the CyclicBarrier limit. Therefore, the barrier limit is reached twice, printing Jump! twice, making Option A incorrect. Unfortunately, the program does not terminate, so Option B is also incorrect. While eight of the tasks have been completed, two are left running. Since no more tasks will call the await() method, the CyclicBarrier limit is never reached, and the two remaining threads’ tasks hang indefinitely. For this reason, Option F is the correct answer. Option E is incorrect because making the IntStream parallel would not change the result. Option D is incorrect because the result is the same no matter how many times the program is executed.",
  "C. The code does not compile because Files.isSameFile() requires Path instances, not String values. For this reason, Option C is the correct answer. If Path values had been used, then the code would compile and print Same!, and Option A would be the correct answer since the isSameFile() method does follow symbolic links.",
  "D, E. Since JavaProgrammerCert is a subclass of Exam, it cannot have a more specific visibility modifier. Exam uses protected, which is broader than package-private in JavaProgrammerCert. This rules out Options A, B, and C. The other three options all compile. However, Option F has a problem. Suppose your JavaProgrammerCert object has an Exam object with pass set to true for both the oca and ocp variables. The implementation in Option F doesn’t look at either of those variables. It looks at the superclass’s pass value. This isn’t logically correct. Therefore, Options D and E are correct.",
  "B, D. First off, Option A is incorrect because a narrower exception can be thrown by an overridden method, just not a broader checked exception. Option B is correct and is the rule for return types of overridden methods. Option C is incorrect because overridden methods must use the same input arguments. If the input arguments are different, the method is overloaded, not overridden. Option D is correct because modifiers that limit the access of the inherited method are not permitted. Option E is incorrect because private and static methods cannot be overridden. Remember that private methods defined in parent classes are not inherited, aka not visible in the child class, while static methods may be visible but cannot be overridden since they do not belong to an instance. Finally, Option F is also incorrect. The @Override annotation is optional and recommended but not required.",
  "D. The most common approach is III, which works for any SELECT statement that has an int in the first column. If the SELECT statement has a function like count(*) or sum(*) in the first column, there will always be a row in the ResultSet, so II works as well. Therefore, Option D is the answer.",
  "E. DoubleBinaryOperator takes two double values and returns a double value. LongToIntFunction takes one long value and returns an int value. ToLongBiFunction takes two generic arguments and returns a long value. IntSupplier does not take any values and returns an int value. ObjLongConsumer takes one generic and one long value and does not return a value. For these reasons, Option E is the correct answer.",
  "F. While an Instant represents a specific moment in time using GMT, Java only allows adding or removing units of DAYS or smaller. This code throws an UnsupportedTemporalTypeException because of the attempt to add YEARS. Therefore, Option F is correct.",
  "B. First we create two Blankie objects. One of them has the color pink and the other leaves it as the default value of null. When the stream intermediate operation runs, it calls the isPink() method twice, returning true and false respectively. Only the first one goes on to the terminal operation and is printed, making Option B correct.",
  "F. This class is not immutable. Most obviously, an immutable class can’t have a setter method. It also can’t have a package-private instance variable. The getter method should be final so the class prevents a subclass from overriding the method. Since all three of these changes are needed to make this class immutable, Option F is the answer.",
  "B, C, E. First of all, BufferedFileOutputStream does not exist in java.io, making Option A incorrect. Also, OutputStream is abstract, not concrete, so Option F can also be eliminated. The data being written is stored in memory as a Student object, so serializing with ObjectOutputStream is appropriate. Since a large set of records are involved, we should use BufferedOutputStream. Since the data is being written to a file, we would use FileOutputStream. For these reasons, Options B, C, and E are correct. Note that FileWriter is not possible since it cannot be chained with the other two java.io classes, making Option D incorrect.",
  "C, D. Option A is incorrect because the peek() method returns the next value or null if there isn’t one without changing the state of the queue. In this example, both peek() calls return 18. Option B is incorrect because the poll() method removes and returns the next value, returning null if there isn’t one. In this case, 18 and null are returned, respectively. Options C and D are correct because both the pop() and remove() methods throw a NoSuchElementException when the queue is empty. This means both return 18 for the first call and throw an exception for the second.",
  "F. Line 11 assigns a relative Path value of ./song/../note to x. The second line assigns an absolute Path value of /dance/move.txt to y. Line 13 does not modify the value of x because Path is immutable and x is not reassigned to the new value. On line 14, the resolve() method is called using y as the input argument. If the parameter passed to the resolve() method is absolute, then that value is returned, leading the first println() method call to output /dance/move.txt. On the other hand, the relativize() method on line 15 requires both Path values to be absolute, or both to be relative. Mixing the two leads to an IllegalArgumentException on line 15 at runtime and makes Option F the correct answer.",
  "B. The code does not compile, so Option E is incorrect. The first compilation error is in the try-with-resources declaration. There are two resources being declared, which is allowed, but they are separated by a comma (,) instead of a semicolon (;). The second compilation problem is that the order of exceptions in the two catch blocks are reversed. Since Exception will catch all StungException instances, the second catch block is unreachable. For these two reasons, Option B is the correct answer.",
  "C. The class compiles and runs without issue, so Options D and E are incorrect. The result of findSlow() is deterministic and always 1. The findFirst() method returns the first element in an ordered stream, whether it be serial or parallel. This makes it a costly operation for a parallel stream since the stream has to be accessed in a serial manner. On the other hand, the result of findFast() is unknown until runtime. The findAny() method may return the first element or any element in the stream, even on serial streams. Since both 1 1 and 3 1 are possible outputs of this program, the answer cannot be determined until runtime, and Option C is the correct answer.",
  "D. There is not a method called getDefaultProperty() on the Properties class. Since the code does not compile, Option D is the answer. The getProperty() method on Properties is overloaded to allow passing a default value as the second parameter. If this code was changed to use getProperty(), the answer would be Option C.",
  "B, D. The try-with-resources statement requires resources that implement AutoCloseable. While Closeable extends AutoCloseable, it is certainly possible to have a class that implements AutoCloseable and works with try-with-resources but does not implement Closeable, making Option A incorrect. Option B is correct and a valid statement about how resources are closed in try-with-resources statements. Option C is incorrect because the exception in the try block is reported to the caller, while the exception in the close() method is suppressed. Option D is the other correct answer because neither catch nor finally are required when try-with-resources is used. Lastly, Option E is incorrect. While the AutoCloseable does define a close() method that throws a checked exception, classes that implement this method are free to drop the checked exception, per the rules of overriding methods.",
  "B. The Roller class uses a formal type parameter named E with a constraint. The key to this question is knowing that with generics, the extends keyword means any subclass or the class can be used as the type parameter. This means both Wheel and CartWheel are OK. The wheel1 declaration is fine because the same type is used on both sides of the declaration. The wheel2 declaration does not compile because generics require the exact same type when not using wildcards. The wheel3 and wheel4 declarations are both fine because this time there is an upper bound to specify that the type can be a subclass. By contrast, the super keyword means it has to be that class or a superclass. The wheel6 declaration is OK, but the wheel5 one is a problem because it uses a subclass. Since wheel2 and wheel5 don’t compile, the answer is Option B.",
  "B. This class is not a singleton because it needs a private constructor. Having a setter method is fine. The state of a singleton’s instance variables is allowed to change. The static initializer is fine as it runs at the same line as the declaration on line 2. Therefore, only the constructor addition is needed, and Option B is correct.",
  "A. This code tries to update a cell in a ResultSet. However, it does not call updateRow() to actually apply the changes in the database. This means the SELECT query does not see the changes and outputs the original value of 0. Option A is correct.",
  "A, B, D. Option A is correct because the java.io stream classes implement Closeable and can be used with try-with-resources statements, while java.util.stream.Stream does not implement Closeable. Option B is correct since the Reader/Writer classes are used for handling character data. There are primitive stream classes in java.util.stream, but none for handling character data, such as CharStream. Option C is incorrect because neither requires all data objects to implement Serializable. Option D is correct since flush() is found in Writer and OutputStream but not in any of the java.util.stream classes. Option E is incorrect since both types of streams contain a skip() method in some of their classes. Lastly, Option F is incorrect. There is no sort method found in any of the java.io classes. While there is a sorted() method in java.util.stream.Stream, the question is asking about what features are available in a java.io stream class and not in a java.util.stream.Stream class.",
  "E. The code does contain compilation errors, so Option A is incorrect. The first is on line 8. The readAllLines() method returns a List<String>, not a Stream. While parallelStream() is allowed on a Collection, parallel() is not. Next, line 14 does not compile because of an invalid method call. The correct NIO.2 method call is Files.isRegularFile(), not File.isRegularFile(), since the legacy File class does not have such a method. Line 18 contains a similar error. Path is an interface, not a class, with the correct call being Paths.get(). Lastly, line 19 does not compile because the read() method throws Exception, which is not caught or handled by the main() method. For these four reasons, Option D is the correct answer.",
  "D. The code compiles, making Option E incorrect. The key here is that the AtomicInteger variable is thread-safe regardless of the synchronization methods used to access it. Therefore, synchronizing on an instance object, as in increment1() or increment3(), or on the class object, as in increment2(), is unnecessary because the AtomicInteger class is already thread-safe. For this reason, Option D is the correct answer.",
  "B, D. The Files.find() method requires a starting Path value, an int maximum depth, and a BiPredicate<Path,BasicFileAttributes> matcher instance. For these reasons, Options A, C, and E are incorrect. A FileVisitOption vararg is allowed but not required, making Option B correct. The other correct answer is Option D because the method does not take a long value.",
  "C, D. Option A is incorrect because Comparable is implemented on the class being compared. To be useful, such a class must have instance variables to compare, ruling out a lambda. By contrast, a Comparator is often implemented with a lambda. Option B is incorrect because compare() is found in a Comparator. Option C is correct because these methods have different parameters but the same return type. Option D is correct because a Comparator doesn’t need to be implemented by the class being compared. Option E is incorrect because multiple comparators can use different orders for comparison, which do not need to match the definition of equality.",
  "C. The code compiles, so Option E is incorrect. The first boolean expression returns false because the two Path expressions have different values and are therefore not equivalent. On the other hand, the second boolean expression returns true. If we normalize t1, it becomes /stars.exe, which is equivalent to the t2 variable in terms of equals(). The third boolean expression also returns true, even though the file does not exist. The isSameFile() method will avoid checking the file system if the two Path expressions are equivalent in terms of equals(), which from the second boolean expression we know that they are. That leaves the fourth boolean expression, which returns true. Passing an absolute Path to resolve() just returns it, so t2 and t3 are equivalent values. For these reasons, Option C is the correct answer. Note that if the Path values had not been equivalent in terms of equals() for either of the last two boolean expressions, then the file system would have been accessed, and since none of the files exist, an exception would have been thrown at runtime.",
  "B, E. The method does not call the markSupported() prior to calling mark() and reset(). This is considered a poor practice. The input variable could be a subclass of Reader that does not support this functionality. In this situation, the method would ignore the mark() call and throw an IOException on the reset() method, making Option A incorrect and Option B correct. On the other hand, if marking the stream is supported, then no exception would be thrown. First, line 24 skips two values, 1 and 2. On line 25, the mark() method is called with a value of 5, which is the number of characters that can be read and stored before the marked point is invalidated. Next, line 26 would skip another value but is undone by the reset() on line 27. The next value to be read would be the third value, 3. The read(char[]) call would then read up to five values, since that is the size of the array. Since only four are left (4, 5, 6, 7) the method would return a value of 4, corresponding to the number of characters read from the stream. For these reasons, the output is 3-4, making Option E the correct answer. Options C and D can be eliminated because read() returns an int value, not a char.",
  "C. The Function interface uses apply(), while the Consumer interface uses accept(), making Option C the correct answer. For reference, get() is the name of the method used by Supplier, while test() is the name of the method used by Predicate.",
  "D. The Teacher class, including all five assert statements, compiles without issue, making Option F incorrect. The first three assert statements on lines 4, 5, and 6 evaluate to true, not triggering any exceptions, with choices updated to 11 after the first assertion is executed. Lines 4 and 7 demonstrate the very bad practice of modifying data in an assertion statement, which can trigger side effects. Regardless of whether an assertion error is thrown, turning on/off assertions potentially changes the value returned by checkClasswork(). At line 7, the assertion statement 12==11 evaluates to false, triggering an AssertionError and making Option D the correct answer. The main() method catches and rethrows the AssertionError. Like writing assertion statements that include side effects, catching Error is also considered a bad practice. Note that line 8 also would trigger an AssertionError, but it is never reached due to the exception on line 7.",
  "A, C, E. BooleanSupplier, DoubleUnaryOperator, and ToLongBiFunction are all valid functional interfaces in java.util.function, making Options A, C, and E correct. Remember that BooleanSupplier is the only primitive functional interface in the API that does not use double, int, or long. For this reason, Option B is incorrect since char is not a supported primitive. Option D is incorrect because the functional interfaces that use Object are abbreviated to Obj. The correct name for this functional interface is ObjIntConsumer. That leaves Option F, which is incorrect. There is no built-in Predicate interface that takes three values.",
  "B, F. The LackOfInformationException class does not compile, making Option A incorrect. The compiler inserts the default no-argument constructor into InformationException since the class does not explicitly define any. Since LackOfInformationException extends InformationException, the only constructor available in the parent class is the no-argument call to super(). For this reason, the constructor defined at line t1 does not compile because it calls a nonexistent parent constructor that takes a String value, and Option B is one of the correct answers. The other two constructors at lines t2 and t3 compile without issue, making Options C and D incorrect. Option E is also incorrect. The getMessage() method is inherited, so applying the @Override annotation is allowed by the compiler. Option F is the other correct answer. The LackOfInformationException is a checked exception because it inherits Exception but not RuntimeException.",
  "C. First, a method reference uses two colons, so it should be Ready::getNumber. Second, you can’t use generics with a primitive, so it should be Supplier<Double>. The rest of the code is correct, so Option C is correct.",
  'E. The class compiles, so Options A, B, and C are incorrect. It also does not produce an exception at runtime, so Option F is incorrect. The question reduces to whether or not the compute() method properly implements the fork/join framework in a multi-threaded manner. The compute() method returns "1" in the base case. In the recursive case, it creates two PassButter tasks. In order to use multiple concurrent threads, the first task should be started asynchronously with fork(). While that is processing, the second task should be executed synchronously with compute() with the results combined using the join() method. That’s not what happens in this compute() method though. The first task is forked and then joined before the second task has even started. The result is that the current thread waits for the first task to completely finish before starting and completing the second task synchronously. At runtime, this would result in single-threaded-like behavior. Since this is a poor implementation of the fork/join framework, Option E is the correct answer.',
  "C. The filter() method passes two of the three elements of the stream through to the terminal operation. This is redundant since the terminal operation checks the same Predicate. There are two matches with the same value, so both anyMatch() and allMatch() return true, and Option C is correct.",
  "E. First, Java looks for the requested resource bundle, which is AB_fr.class and then AB_fr.properties. This rules out Options A, B, and C. Next, Java looks for the default locale’s resource bundle, which is AB_en.properties. This rules out Option D. Java looks for the default resource bundle. First, Java checks for a Java class file resource bundle and then moves on to the property file. Therefore, Option F is incorrect, and Option E is the answer.",
  "D. This code attempts to use two terminal operations, forEach() and count(). Only one terminal operation is allowed, so the code does not compile, and Option D is correct. The author of this code probably intended to use peek() instead of forEach(). With this change, the answer would be Option A.",
  "F. This code sets the default locale to Japanese and then tries to get a resource bundle for container in the pod package. Since there is not a Japanese resource bundle available, it uses the default resource bundle pod.container.properties. Line r1 successfully gets the value generic for the key name. Line r2 throws a MissingResourceException because there is not a key type in the default resource bundle. The English resource bundle has this key, but it is not in the resource bundle hierarchy.",
  "D. Line c1 correctly creates a stream containing two streams. Line c2 does not compile since x is a stream, which does not have an isEmpty() method. Therefore, Option D is correct. If the filter() call was removed, flatMap() would correctly turn the stream into one with four Integer elements and max() would correctly find the largest one. The Optional returned would contain 33, so Option B would be the answer in that case.",
  "A, C. A Locale uses lowercase letters for language codes and uppercase letters for country codes. It can consist of only a language, making Option A correct. If both a language and country code are present, the language code is first, making Option C correct.",
  "D, E. While this code does not close the Statement and Connection, it does compile, making Option A incorrect. Java defaults to auto-commit, which means the update happens right away, making Option C incorrect. Option B is incorrect because either execute() or executeUpdate() is allowed for UPDATE SQL. The difference is the return type. The execute() method returns a boolean while the executeUpdate() method returns an int. The code also runs without error, making Options D and E the answer. And remember to always close your resources in real code to avoid a resource leak.",
  "F. This is tricky. The equals() method in the Object class has a parameter of type Object. An overridden version is required to have the same type. The equals() method in Sticker is an overload rather than an override. Since there is an @Override annotation, the code does not compile.",
  "C. The code does not compile, so Options A and B are incorrect. The code does not compile because the Sweater class is an inner class defined on the instance, which means it is only accessible to be extended and used inside an instance method or by a static method that has access to an instance of Wardrobe. Since dress() is a static method, the declaration of local inner class Jacket does not compile on line v1, making Option C the correct answer. The rest of the code, including the abstract class TShirt and anonymous inner class defined inside dress(), compile without issue. If the dress() method was updated to remove the static modifier, then the code would compile and print Starting...Insulation:20 at runtime, making Option A the correct answer.",
  "E. The first statement is not true because Function takes two generic arguments and one input argument. If BiFunction was used instead of Function on line 7, then the code would compile correctly. The second statement is also not true because IntSupplier does not take any generic arguments. The third statement is not true as well, since Armor is an inner instance class. Without an instance of Sword in the static main() method, the call new Armor() on line 11 does not compile. For these reasons, all three statements are not true, making Option E the correct answer.",
  "B, F. A deadlock and livelock both result in threads that cannot complete a task, but only in a livelock do the threads appear active, making Option A incorrect and Option B correct. Options C and D are incorrect because they do not apply to thread liveness. A race condition is an unexpected result when two threads, which should be run sequentially, are run at the same time, leading to an unexpected result, making Option E incorrect. Last but not least, starvation is caused by a single active thread that is perpetually denied access to a shared resource or lock, making Option F the other correct answer.",
  "A, E. The first step is to convert both to GMT. We subtract the time zone offset to do this. In GMT, the Nairobi time is 14:00, which we get by subtracting 3 from 17. The Panama time is 15:00 because subtracting negative five from 10 gives us 15. Remember that subtracting a negative number is like adding a positive number. Since the Nairobi time is an hour before the Panama time, Options A and E are correct.",
  "D. This code actually does compile. Line c1 is fine because the method uses the ? wildcard, which allows any collection. Line c2 is a standard method declaration. Line c3 looks odd, but it does work. The lambda takes one parameter and does nothing with it. Since there is no output, Option D is correct.",
  "A, C. JDBC 3.0 drivers require a Class.forName() call. Since this is missing, Option A is correct, and Option B is incorrect. The Connection and Statement creation are correct, making Options E and F incorrect. Since the call to stmt.close() should be before the call to conn.close(), Option C is correct, and Option D is incorrect.",
  "B. The code does not compile, so Options D and E are incorrect. The first compilation error is in the Finder interface declaration. Since all interfaces are implicitly abstract, they cannot be marked final. The second compilation error is the declaration of the find() method in the Waldo class. Since find() is inherited from the Finder interface, it is implicitly public. This makes the override of the method in Finder invalid because the lack of access modifier indicates package-level access. Since package-level access is more restrictive than the inherited method’s access modifier, the overridden method does not compile in the Waldo class. For these two reasons, Option B is the correct answer.",
  "F. When summing int primitives, the return type is also an int. Since a long is larger, you can assign the result to it, so line 7 is correct. All the primitive stream types use long as the return type for count(). Therefore, the code compiles, and Option E is incorrect. When actually running the code, line 8 throws an IllegalStateException because the stream has already been used. Both sum() and count() are terminal operations and only one terminal operation is allowed on the same stream. Therefore, Option F is the answer.",
  "D. Line 34 does not compile because of an assignment and value mismatch. The r1 variable is a Runnable expression. While there is an ExecutorService.submit() that takes a Runnable expression, it returns Future<?> since the return type is void. This type is incompatible with the Future<Stream> assignment without an explicit cast, leading to a compiler error. Next, line 39 does not compile. The parallelStream() method is found in the Collection interface, not the Stream interface. Due to these two compilation errors, Option D is the correct answer.",
  "F. Internationalization means the program is designed so it can be adapted for multiple languages. Localization means the program actually supports multiple locales. Since a localized application must first be internationalized, Option F is the answer. Extracted is not a word commonly used with respect to handling multiple languages.",
  "C. The class compiles, making Option E incorrect. If /woods/forest exists, then the first branch of the if-then statement executes, printing true at runtime. On the other hand, if /woods/forest does not exist, the program will print true if /woods exists and false if /woods does not exist. Unlike mkdirs(), which if used would always return true in this case, mkdir() will return false if part of the parent path is missing. For this reason, Option C is correct, and Options A and B are incorrect. Finally, Option D is incorrect. This code is not expected to throw an exception at runtime. If the path could not be created, the mkdir() method just returns false.",
  "D. Line 15 calls the method on line 9 since it is a Watch object. Line 16 is a SmartWatch object. However, the getName() method is not overridden in SmartWatch since the method signature is different. Therefore, the method on line 9 gets called again. That method calls getType(). Since this is a private method, it is not overridden and watch is printed twice. Option D is correct.",
  "B. This code runs the loop six times, adding an hour to z each time. However, the first time is the repeated hour from daylight savings time. The time zone offset changes, but not the hour. This means the hour only increments five times. Adding that to 01:00 gives us 06:00 and makes Option B correct.",
  "C. Both schedule method calls do not compile because these methods are only available in the ScheduledExecutorService interface, not the ExecutorService interface. Even if the correct reference type for service was used, along with a compatible Executors factory method, the scheduleWithFixedDelay() call would still not compile because it only contains a single numeric value. This method requires two long values, one for the initial delay and one for the period. The execute() method call compiles without issue because this method is available in the ExecutorService interface. For these reasons, only the third statement is true, making Option C the correct answer.",
  "A, D, E. Any class that inherits from RuntimeException or Error is unchecked, while any class that does not is unchecked and must be declared or handled. AssertionError inherits from Error, while IllegalArgumentException and MissingResourceException inherit from RuntimeException. The remaining classes—NotSerializableException, SQLException, and ParseException—each inherit Exception but not RuntimeException, making Options A, D, and E the correct answers.",
  "C, D. To be a valid functional interface, an interface must declare exactly one abstract method. Option A is incorrect, because CanClimb does not contain any abstract methods. Next, all interface methods not marked default or static are assumed to be abstract, and abstract methods cannot have a body. For this reason, CanDance does not compile, making Option B incorrect. Options C and D are correct answers because each contains exactly one abstract method. Option E is incorrect because it contains two abstract methods, since test() is assumed to be abstract.",
  "A. A JDBC URL has three components separated by colons. None of these options uses the correct colon delimiter, making Option A the correct answer. If all the semicolons were changed to colons, Option D would be correct. I and V would still be incorrect because they don’t begin with the JDBC protocol and magic driver name as the first two components.",
  "F. The collector tries to use the number of characters in each stream element as the key in a map. This works fine for the first two elements, speak and bark, because they are of length 5 and 4, respectively. When it gets to meow, we have a problem because the length 4 is already used. Java requires a merge function be passed to toMap() as a third parameter if there are duplicate keys so it knows what to do. Since this is not supplied, the code throws an IllegalStateException due to the duplicate key, and Option F is correct.",
  "D. The application does not compile, so Options A, B, and C are incorrect. The one and only compilation issue is that the ElectricBass class implements two interfaces that declare default methods with the same getVolume() signature. A class can inherit two default methods with the same signature but only if the class overrides the methods with its own version. Since ElectricBass does not override the method, the ElectricBass class does not compile. Since this is the only compilation issue, Option D is the correct answer. If the ElectricBass class did correctly override the getVolume() method, the rest of the code would compile without issue. In this case, there would be nothing printed at runtime. The main() method just declares a local inner class but does not create an instance of it, nor does it call any method on it, making Option C the correct answer.",
  "A, B, C. Files.find() and Files.list() return a Stream<Path>, while Files.lines() returns a Stream<String>. For these reasons, Options A, B, and C are the correct answers. The NIO.2 Files class does not contain a listFiles() method, making Option D incorrect. There is a method named listFiles() in the java.io.File class, but it returns a File array. Option E is also incorrect because the Files.readAllLines() method returns a List<String>. Lastly, Option F is incorrect because Files.walkFileTree() uses a FileVisitor and returns a Path. If you were not familiar with the walkFileTree() method, then you could have ruled it out by knowing the signatures for Options A, B, and C."
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
    answerArray: mapAnswers(qz["answers"], a23[index]),
    explain: a23[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
