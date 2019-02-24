const qzString = [
  {
    title:
      "What is the output if this class is run with java Indexing cars carts?",
    code:
      '<code>public class Indexing {</code>\n<code>   public static void main(String... books) {</code>\n<code>      StringBuilder sb = new StringBuilder();</code>\n<code>      for (String book : books)</code>\n<code>         sb.insert(sb.indexOf("c"), book);</code>\n<code>      System.out.println(sb);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "cars",
      "cars carts",
      "ccars arts",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: The operators +=,__________ ,__________ ,__________ ,__________ , and ++ are listed in increasing or the same level of operator precedence. (Choose two.)",
    code: null,
    answers: [
      "–, +, =, --",
      "%, *, /, +",
      "=, +, /, *",
      "^, *, -, ==",
      "*, /, %, --"
    ]
  },
  {
    title:
      "Which of the following are valid JavaBean signatures? (Choose three.)",
    code: null,
    answers: [
      "public byte getNose(String nose)",
      "public void setHead(int head)",
      "public String getShoulders()",
      "public long isMouth()",
      "public void gimmeEars()",
      "public boolean isToes()"
    ]
  },
  {
    title: "Which of the following are true? (Choose two.)",
    code:
      "<code>20:  int[] crossword [] = new int[10][20];</code>\n<code>21:  for (int i = 0; i &lt; crossword.length; i++)</code>\n<code>22:     for (int j = 0; j &lt; crossword.length; j++)</code>\n<code>23:        crossword[i][j] = 'x';\t</code>\n<code>24:  System.out.println(crossword.size());</code>",
    answers: [
      "One line needs to be changed for this code to compile.",
      "Two lines need to be changed for this code to compile.",
      "Three lines need to be changed for this code to compile.",
      "If the code is fixed to compile, none of the cells in the 2D array have a value of 0.",
      "If the code is fixed to compile, half of the cells in the 2D array have a value of 0.",
      "If the code is fixed to compile, all of the cells in the 2D array have a value of 0."
    ]
  },
  {
    title:
      "Which of the following statements about java.lang.Error are most accurate?  (Choose two.)",
    code: null,
    answers: [
      "An Error should be thrown if a file system resource becomes temporarily unavailable.",
      "An application should never catch an Error.",
      "Error is a subclass of Exception, making it a checked exception.",
      "It is possible to catch and handle an Error thrown in an application.",
      "An Error should be thrown if a user enters invalid input."
    ]
  },
  {
    title:
      "Given a class that uses the following import statements, which class would be automatically accessible without using its full package name? (Choose three.)",
    code:
      "<code>import forest.Bird;</code>\n<code>import jungle.tree.*;</code>\n<code>import savana.*;</code>",
    answers: [
      "forest.Bird",
      "savana.sand.Wave",
      "jungle.tree.Huicungo",
      "java.lang.Object",
      "forest.Sloth",
      "forest.ape.bonobo"
    ]
  },
  {
    title: "How many of the following variables represent immutable objects?",
    code:
      "<code>ArrayList l = new ArrayList();</code>\n<code>String s = new String();</code>\n<code>StringBuilder sb = new StringBuilder();</code>\n<code>LocalDateTime t = LocalDateTime.now();</code>\n<code>&nbsp;</code>",
    answers: [
      "None",
      "One",
      "Two",
      "Three",
      "Four",
      "None of the above—this code doesn’t compile."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>StringBuilder builder = new StringBuilder("Leaves growing");</code>\n<code>do {</code>\n<code>   builder.delete(0, 5);</code>\n<code>} while (builder.length() &gt; 5);</code>\n<code>System.out.println(builder);</code>',
    answers: [
      "Leaves growing",
      "ing",
      "wing",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package reality;</code>\n<code>public class Equivalency {</code>\n<code>   public static void main(String[] edges) {</code>\n<code>      final String ceiling = "up";</code>\n<code>      String floor = new String("up");</code>\n<code>      final String wall = new String(floor);</code>\n<code>      System.out.print((ceiling==wall)          +" "+(floor==wall)          +" "+ceiling.equals(wall));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "false false false",
      "true true true",
      "false true true",
      "false false true",
      "It does not compile."
    ]
  },
  {
    title: "How many times does the following code print true?",
    code:
      '<code>1:   public class Giggles {</code>\n<code>2:      public static void main(String[] args) {</code>\n<code>3:         String lol = "lol";</code>\n<code>4:         System.out.println(lol.toUpperCase() == lol);</code>\n<code>5:         System.out.println(lol.toUpperCase() == lol.toUpperCase());</code>\n<code>6:         System.out.println(lol.toUpperCase().equals(lol));</code>\n<code>7:         System.out.println(lol.toUpperCase().equals(lol.toUpperCase()));</code>\n<code>8:         System.out.println(lol.toUpperCase().equalsIgnoreCase(lol));</code>\n<code><span epub:type="pagebreak" id="Page_155"></span>9:         System.out.println(lol.toUpperCase()</code>\n<code>10:           .equalsIgnoreCase(lol.toUpperCase()));</code>\n<code>11:  } }</code>\n<code>&nbsp;</code>',
    answers: [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "None. The code does not compile."
    ]
  },
  {
    title:
      "Which lines can be removed together without stopping the code from compiling and while printing the same output? (Choose three.)",
    code:
      '<code>14:  String race = "";</code>\n<code>15:  outer:</code>\n<code>16:  do {</code>\n<code>17:  inner:</code>\n<code>18:     do {</code>\n<code>19:        race += "x";</code>\n<code>20:     } while (race.length() &lt;= 4);</code>\n<code>21:  } while (race.length() &lt; 4);</code>\n<code>22: System.out.println(race);</code>',
    answers: [
      "Lines 15 and 17",
      "Lines 15, 16, and 21",
      "Line 17",
      "Lines 17, 18, and 20",
      "Line 20",
      "Line 21"
    ]
  },
  {
    title:
      "Which of the following do not compile when filling in the blank? (Choose two.)",
    code: "<code>long bigNum = ____________;</code>",
    answers: ["1234", "1234.0", "1234.0L", "1234l", "1234L", "1_234"]
  },
  {
    title: "How many lines does this program print?",
    code:
      '<code>import java.time.*;</code>\n<code>public class OnePlusOne {</code>\n<code>   public static void main(String... nums) {</code>\n<code>      LocalTime time = LocalTime.of(1, 11);</code>\n<code>      while (time.getHour() &lt; 1) {</code>\n<code>         time.plusHours(1);</code>\n<code>         System.out.println("in loop");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "None",
      "One",
      "Two",
      "This is an infinite loop.",
      "The code does not compile."
    ]
  },
  {
    title: "What is the result of running the following program?",
    code:
      "<code>1:   package fun;</code>\n<code>2:   public class Sudoku {</code>\n<code>3:      static int[][] game;</code>\n<code>4:</code>\n<code>5:      public static void main(String args[]) {</code>\n<code>6:         game[3][3] = 6;</code>\n<code>7:         Object[] obj = game;</code>\n<code>8:         obj[3] = 'X';</code>\n<code>9:         System.out.println(game[3][3]);</code>\n<code>10:     }</code>\n<code>11:  }</code>",
    answers: [
      "6",
      "X",
      "The code does not compile.",
      "The code compiles but throws a NullPointerException at runtime.",
      "The code compiles but throws a different exception at runtime.",
      "The output is not guaranteed."
    ]
  },
  {
    title:
      "Which of the following use generics and compile without warnings? (Choose two.)",
    code: null,
    answers: [
      "List<String> a = new ArrayList();",
      "List<> b = new ArrayList();",
      "List<String> c = new ArrayList<>();",
      "List<> d = new ArrayList<>();",
      "List<String> e = new ArrayList<String>();",
      "List<> f = new ArrayList<String>();"
    ]
  },
  {
    title:
      "Which of the following are true right before the main() method ends? (Choose two.)",
    code:
      '<code>public static void main(String[] args) {</code>\n<code>   String shoe1 = new String("sandal");</code>\n<code>   String shoe2 = new String("flip flop");</code>\n<code>   String shoe3 = new String("croc");</code>\n<code>&nbsp;</code>\n<code>   shoe1 = shoe2;</code>\n<code>   shoe2 = shoe3;</code>\n<code>   shoe3 = shoe1;</code>\n<code>}</code>',
    answers: [
      "No objects are eligible for garbage collection.",
      "One object is eligible for garbage collection.",
      "Two objects are eligible for garbage collection.",
      "No objects are guaranteed to be garbage collected.",
      "One object is guaranteed to be garbage collected.",
      "Two objects are guaranteed to be garbage collected."
    ]
  },
  {
    title: "How many lines of the following application do not compile?",
    code:
      '<code>package ocean;</code>\n<code>class BubbleException extends Exception {}</code>\n<code>class Fish {</code>\n<code>   Fish getFish() throws BubbleException {</code>\n<code>      throw new RuntimeException("fish!");</code>\n<code>   }</code>\n<code>}</code>\n<code>public final class Clownfish extends Fish {</code>\n<code>   public final Clownfish getFish() {</code>\n<code>      throw new RuntimeException("clown!");</code>\n<code>   }</code>\n<code>   public static void main(String[] bubbles) {</code>\n<code>      final Fish f = new Clownfish();</code>\n<code><span epub:type="pagebreak" id="Page_158"></span>      f.getFish();</code>\n<code>      System.out.println("swim!");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "None. The code compiles and prints swim!.",
      "None. The code compiles and prints a stack trace.",
      "One",
      "Two",
      "Three"
    ]
  },
  {
    title: "How many lines does this code output?",
    code:
      "<code>import java.util.*;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class PrintNegative {</code>\n<code>&nbsp;</code>\n<code>  public static void main(String[] args) {</code>\n<code>     List&lt;Integer&gt; list= new ArrayList&lt;&gt;();</code>\n<code>     list.add(-5);</code>\n<code>     list.add(0);</code>\n<code>     list.add(5);</code>\n<code>     print(list, e -&gt; e &lt; 0);</code>\n<code>  }</code>\n<code>&nbsp;</code>\n<code>  public static void print(List&lt;Integer&gt; list, Predicate&lt;Integer&gt; p) {</code>\n<code>      for (Integer num : list)</code>\n<code>         if (p.test(num))</code>\n<code>            System.out.println(num);</code>\n<code>  }</code>\n<code>}</code>",
    answers: [
      "One",
      "Two",
      "Three",
      "None. It doesn’t compile.",
      "None. It throws an exception at runtime."
    ]
  },
  {
    title: "",
    code: null,
    answers: [
      "I only",
      "II only",
      "III only",
      "IV only",
      "I or II, or both",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>12:  int result = 8;</code>\n<code>13:  loop: while (result &gt; 7) {</code>\n<code>14:     result++;</code>\n<code>15:     do {</code>\n<code>16:        result--;</code>\n<code>17:     } while (result &gt; 5);</code>\n<code>18:     break loop;</code>\n<code>19:  }</code>\n<code>20:  System.out.println(result);</code>",
    answers: [
      "5",
      "7",
      "8",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What is the result of compiling and executing the following application?",
    code:
      '<code>package reptile;</code>\n<code>public class Alligator {</code>\n<code>   static int teeth;</code>\n<code>   double scaleToughness;</code>\n<code>   public Alligator() {</code>\n<code>      teeth++;</code>\n<code>   }</code>\n<code>   public void snap(int teeth) {</code>\n<code>      System.out.print(teeth+" ");</code>\n<code>      teeth--;</code>\n<code>   }</code>\n<code>   public static void main(String[] unused) {</code>\n<code>      new Alligator().snap(teeth);</code>\n<code>      new Alligator().snap(teeth);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 1",
      "1 1",
      "1 2",
      "2 2",
      "The code does not compile.",
      "The code compiles but produces an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public class Costume {</code>\n<code>   public static void main(String[] black) {</code>\n<code>      String witch = "b";</code>\n<code>      String tail = "lack";</code>\n<code>      witch.concat(tail);</code>\n<code>      System.out.println(witch);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "b",
      "black",
      "lack",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which modifiers can be independently applied to an interface method? (Choose three.)",
    code: null,
    answers: ["default", "protected", "static", "private", "final", "abstract"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public class Shoelaces {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      String tie = null;</code>\n<code>      while (tie = null)</code>\n<code>         tie = "shoelace";</code>\n<code>         System.out.print(tie);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "null",
      "shoelace",
      "shoelaceshoelace",
      "The code does not compile.",
      "This is an infinite loop.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What statements are true about compiling a Java class file? (Choose two.)",
    code: null,
    answers: [
      "If the file does not contain a package statement, then the compiler considers the class part of the java.lang package.",
      "The compiler assumes every class implicitly imports the java.lang.* package.",
      "The compiler assumes every class implicitly imports the java.util.* package.",
      "Java requires every file to declare a package statement.",
      "Java requires every file to declare at least one import statement.",
      "If the class declaration does not extend another class, then it implicitly extends the java.lang.Object class."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package woods;</code>\n<code>interface Plant {</code>\n<code>   default String grow() { return "Grow!"; }</code>\n<code>}</code>\n<code>interface Living {</code>\n<code>   public default String grow() { return "Growing!"; }</code>\n<code>}</code>\n<code>public class Tree implements Plant, Living {  // m1</code>\n<code>   public String grow(int height) { return "Super Growing!"; }</code>\n<code>   public static void main(String[] leaves) {</code>\n<code>      Plant p = new Tree();  // m2</code>\n<code>      System.out.print(((Living)p).grow());  // m3</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Grow!",
      "Growing!",
      "Super Growing!",
      "It does not compile because of line m1.",
      "It does not compile because of line m2.",
      "It does not compile because of line m3."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>public static void main(String... args) {</code>\n<code>   String name = "Desiree";</code>\n<code>   int _number = 694;</code>\n<code>   boolean profit$$$;</code>\n<code>   System.out.println(name + " won. "</code>\n<code>       + _number + " profit? " + profit$$$);</code>\n<code>}</code>',
    answers: [
      "The declaration of name does not compile.",
      "The declaration of _number does not compile.",
      "The declaration of profit$$$ does not compile.",
      "The println statement does not compile.",
      "The code compiles and runs successfully.",
      "The code compiles and throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: Given a variable x, __________ decreases the value of x by 1 and returns the original value, while __________ increases the value of x by 1 and returns the new value.",
    code: null,
    answers: ["x--, ++x", "x--, x++", "--x, x++", "--x, ++x"]
  },
  {
    title:
      "Given the following two classes in the same package, which constructors contain compiler errors? (Choose three.)",
    code:
      '<code>public class Big {</code>\n<code>   public Big(boolean stillIn) {</code>\n<code>      super();</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Trouble extends Big {</code>\n<code>   public Trouble()  {}</code>\n<code>   public Trouble(int deep) {</code>\n<code>      super(false);</code>\n<code>      this();</code>\n<code>   }</code>\n<code>   public Trouble(String now, int... deep) {</code>\n<code>      this(3);</code>\n<code><span epub:type="pagebreak" id="Page_163"></span>   }</code>\n<code>   public Trouble(long deep) {</code>\n<code>      this("check",deep);</code>\n<code>   }</code>\n<code>   public Trouble(double test) {</code>\n<code>      super(test&gt;5 ? true : false);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "public Big(boolean stillIn)",
      "public Trouble()",
      "public Trouble(int deep)",
      "public Trouble(String now, int... deep)",
      "public Trouble(long deep)",
      "public Trouble(double test)"
    ]
  },
  {
    title:
      "Which of the following can replace the comment so this code outputs 100? (Choose two.)",
    code:
      "<code>public class Stats {</code>\n<code>   // INSERT CODE</code>\n<code>   public static void main(String[] math) {</code>\n<code>     System.out.println(max - min);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "final int min, max = 100;",
      "final int min = 0, max = 100;",
      "int min, max = 100;",
      "int min = 0, max = 100;",
      "static int min, max = 100;",
      "static int min = 0, max = 100;"
    ]
  },
  {
    title:
      "Which of the following statements are true about Java operators and statements? (Choose two.)",
    code: null,
    answers: [
      "Both right-hand sides of the ternary expression will be evaluated at runtime.",
      "A switch statement may contain at most one default statement.",
      "A single if-then statement can have multiple else statements.",
      "The | and || operator are interchangeable, always producing the same results at runtime.",
      "The ! operator may not be applied to numeric expressions."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   public class Legos {</code>\n<code>2:      public static void main(String[] args) {</code>\n<code>3:         StringBuilder sb = new StringBuilder();</code>\n<code>4:         sb.append("red");</code>\n<code>5:         sb.deleteCharAt(0);</code>\n<code>6:         sb.delete(1, 1);</code>\n<code>7:         System.out.println(sb);</code>\n<code>8:      }</code>\n<code>9:   }</code>',
    answers: [
      "r",
      "e",
      "ed",
      "red",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following is a valid method name in Java? (Choose two.)",
    code: null,
    answers: [
      "_____()",
      "%run()",
      "check-Activity()",
      "$Hum2()",
      "sing\\\\3()",
      "po#ut ()"
    ]
  },
  {
    title:
      "Which of the following statements about inheritance are true? (Choose two.)",
    code: null,
    answers: [
      "Inheritance is better than using static methods for accessing data in other classes.",
      "Inheritance allows a method to be overridden in a subclass, possibly changing the expected behavior of other methods in a superclass.",
      "Inheritance allows objects to inherit commonly used attributes and methods.",
      "It is possible to create a Java class that does not inherit from any other.",
      "Inheritance tends to make applications more complicated."
    ]
  },
  {
    title: "",
    code: null,
    answers: [
      "I only",
      "II only",
      "II and III",
      "I, III, and IV",
      "I, II, III, and IV",
      "None are true."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>String[][] listing = new String[][] { { "Book", "34.99" },</code>\n<code>   { "Game", "29.99" }, { "Pen", ".99" } };</code>\n<code>System.out.println(listing.length + " " + listing[0].length);</code>',
    answers: [
      "2 2",
      "2 3",
      "3 2",
      "3 3",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following variable types is permitted in a switch statement? (Choose three.)",
    code: null,
    answers: ["Character", "Byte", "Double", "long", "String", "Object"]
  },
  {
    title: "What does the following do?",
    code:
      "<code>public class Shoot {</code>\n<code>   interface Target {</code>\n<code>      boolean needToAim(double angle);</code>\n<code>   }</code>\n<code>   static void prepare(double angle, Target t) {</code>\n<code>      boolean ready = t.needToAim(angle);  // k1</code>\n<code>      System.out.println(ready);</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      prepare(45, d =&gt; d &gt; 5 || d &lt; -5);   // k2</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "It prints true.",
      "It prints false.",
      "It doesn’t compile due to line k1.",
      "It doesn’t compile due to line k2.",
      "It doesn’t compile due to another line."
    ]
  },
  {
    title:
      "Which of the following is a valid code comment in Java? (Choose three.)",
    code: null,
    answers: [
      "/** Insert */ in next method **/",
      "/****** Find the kitty cat */",
      "// Is this a bug?",
      "/ Begin method - performStart() /",
      "/*** TODO: Call grandma ***/",
      "# Updated code by Patti"
    ]
  },
  {
    title:
      "Given the following two classes, each in a different package, which lines allow the second class to compile when inserted independently? (Choose two.)",
    code:
      "<code>package food;</code>\n<code>public class Grass {</code>\n<code>   public static int seeds = 10;</code>\n<code>   public static Grass getGrass() {return new Grass();}</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>package woods;</code>\n<code>// INSERT CODE HERE</code>\n<code>public class Deer {</code>\n<code>   public void eat() {</code>\n<code>      getGrass();</code>\n<code>      System.out.print(seeds);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "import static food.Grass.getGrass;\n\nimport static food.Grass.seeds;\n",
      "import static food.*;",
      "static import food.Grass.*;",
      "import food.Grass.*;",
      "static import food.Grass.getGrass;\n\nstatic import food.Grass.seeds;\n",
      "import static food.Grass.*;"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Museums {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      String[] array = {"Natural History", "Science", "Art"};</code>\n<code>      List&lt;String&gt; museums = Arrays.asList(array);</code>\n<code>      museums.remove(2);</code>\n<code>      System.out.println(museums);</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "[Natural History, Science]",
      "[Natural History, Science, Art]",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following substitutions will compile? (Choose two.)",
    code:
      '<code>public class Underscores {</code>\n<code>   public String name = "Sherrin";</code>\n<code>   public void massage() {</code>\n<code>      int zip = 10017;</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Change name to _name",
      "Change 10017 to _10017",
      "Change 10017 to 10017_",
      "Change 10017 to 10_0_17",
      "Change int to _int"
    ]
  },
  {
    title:
      "What is the result of the following when called as java counting.Binary?",
    code:
      '<code>package counting;</code>\n<code>import java.util.*;</code>\n<code>public class Binary {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      args = new String[] {"0", "1", "01", "10" };</code>\n<code>&nbsp;</code>\n<code>      Arrays.sort(args);</code>\n<code>      System.out.println(Arrays.toString(args));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "[]",
      "[0, 01, 1, 10]",
      "[0, 01, 10, 1]",
      "[0, 1, 01, 10]",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: Using the _____________ and _____________ modifiers together allows a variable to be accessed from any class, without requiring an instance variable.",
    code: null,
    answers: [
      "final, package-private",
      "class, static",
      "protected, instance",
      "public, static",
      "default, public"
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Exams {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      List&lt;String&gt; exams = Arrays.asList("OCA", "OCP");</code>\n<code>      for (String e1 : exams)</code>\n<code>         for (String e2 : exams)</code>\n<code>            System.out.print(e1 + " " + e2);</code>\n<code>            System.out.println();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Four",
      "Five",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following are true statements? (Choose two.)",
    code: null,
    answers: [
      "The javac command compiles a source text file into a set of machine instructions.",
      "The java command compiles a .class file into a .java file.",
      "The javac command compiles a .java file into a .class file.",
      "The javac command compiles a source text file into a bytecode file.",
      "The java command compiles a .java file into a .class file.",
      "The javac command compiles a .class file into a .java file."
    ]
  },
  {
    title: "How many of the following lines of code compile?",
    code:
      '<code>char one = Integer.parseInt("1");</code>\n<code>Character two = Integer.parseInt("2");</code>\n<code>int three = Integer.parseInt("3");</code>\n<code>Integer four = Integer.parseInt("4");</code>\n<code>short five = Integer.parseInt("5");</code>\n<code>Short six = Integer.parseInt("6");</code>',
    answers: ["None", "One", "Two", "Three", "Four", "Five"]
  },
  {
    title:
      "Given the application below, what data types can be inserted into the blank that would allow the code to print 3? (Choose three.)",
    code:
      "<code>public class Highway {</code>\n<code>   public int drive(long car) { return 2; }</code>\n<code>   public int drive(double car) { return 3; }</code>\n<code>   public int drive(int car) { return 5; }</code>\n<code>   public int drive(short car) { return 3; }</code>\n<code>   public static void main(String[] gears) {</code>\n<code>      ____________ value = 5;</code>\n<code>      System.out.print(new Highway().drive(value));</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["boolean", "short", "int", "byte", "long", "float"]
  },
  {
    title: "How many times does this code print true?",
    code:
      '<code>import java.time.*;</code>\n<code>public class Equality {</code>\n<code>   public void main(String[] args) {</code>\n<code>      System.out.println(new StringBuilder("zelda")</code>\n<code>          == new StringBuilder("zelda"));</code>\n<code><span epub:type="pagebreak" id="Page_170"></span>      System.out.println(3 == 3);</code>\n<code>      System.out.println("bart" == "bart");</code>\n<code>      System.out.println(new int[0] == new int[0]);</code>\n<code>      System.out.println(LocalTime.now() == LocalTime.now());</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three", "The code does not compile."]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package ballroom;</code>\n<code>public class Dance {</code>\n<code>   public static void swing(int... beats) throws ClassCastException {</code>\n<code>      try {</code>\n<code>         System.out.print("1"+beats[2]);  // p1</code>\n<code>      } catch (RuntimeException e) {</code>\n<code>         System.out.print("2");</code>\n<code>      } catch (Exception e) {</code>\n<code>         System.out.print("3");</code>\n<code>      } finally {</code>\n<code>         System.out.print("4");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... music) {</code>\n<code>      new Dance().swing(0,0);  // p2</code>\n<code>      System.out.print("5");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "145",
      "1045",
      "24, followed by a stack trace",
      "245",
      "The code does not compile because of line p1.",
      "The code does not compile because of line p2."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>List&lt;String&gt; drinks = Arrays.asList("can", "cup");</code>\n<code>for (int container = drinks.size(); container &gt; 0; container++) {</code>\n<code>   System.out.print(drinks.get(container-1) + ",");</code>\n<code>}</code>',
    answers: [
      "can,cup,",
      "cup,can,",
      "The code does not compile.",
      "This is an infinite loop.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following method signatures are valid declarations of an entry point in a Java application? (Choose three.)",
    code: null,
    answers: [
      "public static void main(String... widgets)",
      "public static void main(String sprockets)",
      "protected static void main(String[] args)",
      "public static int void main(String[] arg)",
      "public static final void main(String []a)",
      "public static void main(String[] data)"
    ]
  },
  {
    title:
      "Given the application below and the choices available, which lines must all be removed to allow the code to compile? (Choose three.)",
    code:
      '<code>1:  package year;</code>\n<code>2:  public class Seasons {</code>\n<code>3:     public static void main(String[] time) {</code>\n<code>4:        final long winter = 10;</code>\n<code>5:        final byte season = 2;</code>\n<code>6:        int fall = 4;</code>\n<code>7:        final short summer = 3;</code>\n<code>8:        switch(season) {</code>\n<code>9:           case 1:</code>\n<code>10:          case winter: System.out.print("winter");</code>\n<code>11:          default:</code>\n<code>12:          case fall: System.out.print("fall");</code>\n<code>13:          case summer: System.out.print("summer");</code>\n<code>14:          default:</code>\n<code>15:       }</code>\n<code>16:    }</code>\n<code>17: }</code>',
    answers: ["Line 8", "Line 9", "Line 10", "Line 11", "Line 12", "Line 13"]
  },
  {
    title:
      "Given the application below, which lines do not compile? (Choose three.)",
    code:
      '<code>package furryfriends;</code>\n<code>interface Friend {</code>\n<code>   protected String getName();  // h1</code>\n<code>}</code>\n<code>class Cat implements Friend {</code>\n<code>   String getName() {  // h2</code>\n<code>      return "Kitty";</code>\n<code>   }</code>\n<code>}</code>\n<code>public class Dog implements Friend {</code>\n<code>   String getName() throws RuntimeException {  // h3</code>\n<code>      return "Doggy";</code>\n<code>   }</code>\n<code>   public static void main(String[] adoption) {</code>\n<code>      Friend friend = new Dog();  // h4</code>\n<code>      System.out.print(((Cat)friend).getName());  // h5</code>\n<code>      System.out.print(((Dog)null).getName());  // h6</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["Line h1", "Line h2", "Line h3", "Line h4", "Line h5", "Line h6"]
  },
  {
    title: "Which of the following are unchecked exceptions? (Choose three.)",
    code: null,
    answers: [
      "FileNotFoundException",
      "ArithmeticException",
      "IOException",
      "Exception",
      "IllegalArgumentException",
      "RuntimeException"
    ]
  },
  {
    title:
      "What is the result of compiling and executing the following application?",
    code:
      '<code>package ranch;</code>\n<code>public class Cowboy {</code>\n<code>   private int space = 5;</code>\n<code>   private double ship = space &lt; 2 ? 1 : 10;  // g1</code>\n<code>   public void printMessage() {</code>\n<code>      if(ship&gt;1) {</code>\n<code>         System.out.println("Goodbye");</code>\n<code>      } if(ship&lt;10 &amp;&amp; space&gt;=2) System.out.println("Hello");  // g2</code>\n<code>      else System.out.println("See you again");</code>\n<code>   }</code>\n<code>   public static final void main(String... stars) {</code>\n<code>      new Cowboy().printMessage();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "It only prints Hello.",
      "It only prints Goodbye.",
      "It only prints See you again.",
      "It does not compile because of line g1.",
      "It does not compile because of line g2.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following three class declarations, which sets of access modifiers can be inserted, in order, into the blank lines below that would allow all of the classes to compile? (Choose three.)",
    code:
      "<code>package wake;</code>\n<code>public class Alarm {</code>\n<code>    ____________static int clock;</code>\n<code>    ____________long getTime() {return clock;}</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>package wake;</code>\n<code>public class Coffee {</code>\n<code>   private boolean bringCoffee() { return new Alarm().clock&lt;10;}</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>package sleep;</code>\n<code>public class Snooze extends wake.Alarm {</code>\n<code>   private boolean checkTime() { return getTime()&gt;10;}</code>\n<code>}</code>",
    answers: [
      "protected and package-private (blank)",
      "public and public",
      "package-private (blank) and protected",
      "protected and protected",
      "private and public",
      "package-private (blank) and package-private (blank)"
    ]
  },
  {
    title:
      "Given that FileNotFoundException is a subclass of IOException and Long is a subclass of Number, what is the output of the following application?",
    code:
      "<code>package materials;</code>\n<code>&nbsp;</code>\n<code>import java.io.*;</code>\n<code>&nbsp;</code>\n<code>class CarbonStructure {</code>\n<code>    protected long count;</code>\n<code>    public abstract Number getCount() throws IOException;  // q1</code>\n<code>    public CarbonStructure(int count) { this.count = count; }</code>\n<code>}</code>\n<code>public class Diamond extends CarbonStructure {</code>\n<code>   public Diamond() { super(15); }</code>\n<code>   public Long getCount() throws FileNotFoundException {  // q2</code>\n<code>      return count;</code>\n<code>   }</code>\n<code>   public static void main(String[] cost) {</code>\n<code>      try {</code>\n<code>         final CarbonStructure ring = new Diamond();  // q3</code>\n<code>         System.out.print(ring.getCount());  // q4</code>\n<code>      } catch (IOException e) {</code>\n<code>         e.printStackTrace();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "15",
      "It does not compile because of line q1.",
      "It does not compile because of line q2.",
      "It does not compile because of line q3.",
      "It does not compile because of line q4.",
      "It compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many lines contain a compile error?",
    code:
      '<code>1:   import java.time.*;</code>\n<code>2:   import java.time.format.*;</code>\n<code>3:</code>\n<code>4:   public class HowLong {</code>\n<code>5:      public void main(String h) {</code>\n<code>6:         LocalDate newYears = new LocalDate(2017, 1, 1);</code>\n<code>7:         Period period = Period.ofYears(1).ofDays(1);</code>\n<code>8:         DateTimeFormat format = DateTimeFormat.ofPattern("MM-dd-yyyy");</code>\n<code>9:         System.out.print(format.format(newYears.minus(period)));</code>\n<code>10:    }</code>\n<code>11:  }</code>',
    answers: ["None", "One", "Two", "Three", "Four", "Five"]
  },
  {
    title:
      "Which of the following statements about try-catch blocks are correct? (Choose two.)",
    code: null,
    answers: [
      "A catch block can never appear after a finally block.",
      "A try block must be followed by a catch block.",
      "A finally block can never appear after a catch block.",
      "A try block must be followed by a finally block.",
      "A try block can have zero or more catch blocks.",
      "A try block can have zero or more finally blocks."
    ]
  },
  {
    title: "What is printed by the following code snippet?",
    code:
      '<code>int fish = 1 + 2 * 5&gt;=2 ? 4 : 2;</code>\n<code>int mammals = 3 &lt; 3 ? 1 : 5&gt;=5 ? 9 : 7;</code>\n<code>System.out.print(fish+mammals+"");</code>',
    answers: ["49", "13", "18", "99", "It does not compile."]
  },
  {
    title:
      "Which of the following statements about objects, reference types, and casting are correct? (Choose three.)",
    code: null,
    answers: [
      "An object can be assigned to an inherited interface reference variable without an explicit cast.",
      "The compiler can prevent all explicit casts that lead to an exception at runtime.",
      "Casting an object to a reference variable does not modify the object in memory.",
      "An object can be assigned to a subclass reference variable without an explicit cast.",
      "An object can be assigned to a superclass reference variable without an explicit cast.",
      "An implicit cast of an object to one of its inherited types can sometimes lead to a ClassCastException at runtime."
    ]
  },
  {
    title:
      "What is the output of the following when run as java EchoFirst seed flower plant?",
    code:
      "<code>package unix;</code>\n<code>&nbsp;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class EchoFirst {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      int result = Arrays.binarySearch(args, args[0]);</code>\n<code>      System.out.println(result);</code>\n<code>  }</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: [
      "0",
      "1",
      "2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime.",
      "The output is not guaranteed."
    ]
  },
  {
    title:
      "How many objects are eligible for garbage collection at the end of the main() method?",
    code:
      '<code>package store;</code>\n<code>public class Shoes {</code>\n<code>&nbsp;</code>\n<code>   static String shoe1 = new String("sandal");</code>\n<code>   static String shoe2 = new String("flip flop");</code>\n<code>&nbsp;</code>\n<code>   public static void shopping() {</code>\n<code>      String shoe3 = new String("croc");</code>\n<code><span epub:type="pagebreak" id="Page_177"></span>      shoe2 = shoe1;</code>\n<code>      shoe1 = shoe3;</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String... args) {</code>\n<code>      shopping();</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: ["None", "One", "Two", "Three", "The code does not compile."]
  },
  {
    title:
      "Fill in the blanks: The  ____________keyword is used in method declarations, the  ____________keyword is used to guarantee a statement will execute even if an exception is thrown, and the  ____________keyword is used to throw an exception to the surrounding process.",
    code: null,
    answers: [
      "throw, finally, throws",
      "throws, catch, throw",
      "catch, finally, throw",
      "finally, catch, throw",
      "throws, finally, throw"
    ]
  },
  {
    title:
      "Which statements best describe the result of this code? (Choose two.)",
    code:
      '<code>package nyc;</code>\n<code>public class TouristBus {</code>\n<code>  public static void main(String... args) {</code>\n<code>     String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };</code>\n<code>     String[] times = new String[] { "Day", "Night" };</code>\n<code>        for (int i = 0, j = 0; i &lt; nycTourLoops.length; i++, j++)</code>\n<code>           System.out.println(nycTourLoops[i] + " " + times[j]);</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "The println causes one line of output.",
      "The println causes two lines of output.",
      "The println causes three lines of output.",
      "The code terminates successfully.",
      "The code throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: Because of____________ , it is possible to  ____________a method, which allows Java to support____________ .",
    code: null,
    answers: [
      "abstract methods, override, inheritance",
      "concrete methods, overload, inheritance",
      "virtual methods, overload, interfaces",
      "inheritance, abstract, polymorphism",
      "virtual methods, override, polymorphism."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>package calendar;</code>\n<code>public class Seasons {</code>\n<code>&nbsp;</code>\n<code>   public static void seasons(String... names) {</code>\n<code>      int l = names[1].length();       // s1</code>\n<code>      System.out.println(names[l]);    // s2</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      seasons("Summer", "Fall", "Winter", "Spring");</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "Fall",
      "Spring",
      "The code does not compile.",
      "The code throws an exception on line s1.",
      "The code throws an exception on line s2."
    ]
  },
  {
    title:
      "How many lines of the following application contain compilation errors?",
    code:
      '<code>1:  package percussion;</code>\n<code>2:  </code>\n<code>3:  interface MakesNoise {}</code>\n<code>4:  abstract class Instrument implements MakesNoise {</code>\n<code>5:     public Instrument(int beats) {}</code>\n<code>6:     public void play() {}</code>\n<code>7:  }</code>\n<code>8:  public class Drum extends Instrument {</code>\n<code>9:     public void play(int count) {}</code>\n<code>10:    public void concert() {</code>\n<code>11:       super.play(5);</code>\n<code><span epub:type="pagebreak" id="Page_179"></span>12:    }</code>\n<code>13:    public static void main(String[] beats) {</code>\n<code>14:       MakesNoise mn = new Drum();</code>\n<code>15:       mn.concert();</code>\n<code>16:    }</code>\n<code>17: }</code>',
    answers: [
      "None. The code compiles and runs without issue.",
      "One",
      "Two",
      "Three",
      "Four"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package fly;</code>\n<code>public class Helicopter {</code>\n<code>   public int adjustPropellers(int length, String[] type) {</code>\n<code>      length++;</code>\n<code>      type[0] = "LONG";</code>\n<code>      return length;</code>\n<code>   }</code>\n<code>   public static void main(String[] climb) {</code>\n<code>      final Helicopter h = new Helicopter();</code>\n<code>      int length = 5;</code>\n<code>      String[] type = new String[1];</code>\n<code>      length = h.adjustPropellers(length, type);</code>\n<code>      System.out.print(length+","+type[0]);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5,LONG",
      "6,LONG",
      "5,null",
      "6,null",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many lines of the following application do not compile?",
    code:
      '<code>package castles;</code>\n<code>class OpenDoorException extends Exception {}</code>\n<code>class CableSnapException extends OpenDoorException {}</code>\n<code><span epub:type="pagebreak" id="Page_180"></span>public class Palace {</code>\n<code>   public void openDrawbridge() throws Exception {</code>\n<code>      try {</code>\n<code>         throw new Exception("Problem");</code>\n<code>      } catch (OpenDoorException e) {</code>\n<code>         throw new OpenDoorException();</code>\n<code>      } catch (CableSnapException ex) {</code>\n<code>         try {</code>\n<code>            throw new OpenDoorException();</code>\n<code>         } catch (Exception ex) {</code>\n<code>         } finally {</code>\n<code>            System.out.println("Almost done");</code>\n<code>         }</code>\n<code>      } finally {</code>\n<code>         throw new RuntimeException("Unending problem");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] moat) throws IllegalArgumentException {</code>\n<code>      new Palace().openDrawbridge();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "None. The code compiles and produces a stack trace at runtime.",
      "One",
      "Two",
      "Three",
      "Four",
      "Five"
    ]
  },
  {
    title:
      "Choose the best answer:  ____________and  ____________are two properties that go hand in hand to improve class design by structuring a class with related attributes and actions while protecting the underlying data from access by other classes.",
    code: null,
    answers: [
      "Optimization and platform independence",
      "Platform independence and encapsulation",
      "Platform independence and inheritance",
      "Object orientation and encapsulation",
      "Inheritance and polymorphism"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>string bike1 = "speedy";</code>\n<code>string bike2 = new String("speedy");</code>\n<code><span epub:type="pagebreak" id="Page_181"></span>boolean test1 = bike1 == bike2;</code>\n<code>boolean test2 = bike1.equals(bike2);</code>\n<code>System.out.println(test1 + " " + test2);</code>',
    answers: [
      "false false",
      "false true",
      "true false",
      "true true",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What is the output of the following when run as java EchoFirst seed flower plant?",
    code:
      "<code>package unix;</code>\n<code>&nbsp;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class EchoFirst {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Arrays.sort(args);</code>\n<code>      int result = Arrays.binarySearch(args, args[0]);</code>\n<code>      System.out.println(result);</code>\n<code>  }</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: [
      "0",
      "1",
      "2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime.",
      "The output is not guaranteed."
    ]
  },
  {
    title: "Which are true statements? (Choose three.)",
    code: null,
    answers: [
      "Every do-while loop can be rewritten as a for-each loop.",
      "Every for-each loop can be rewritten as a do-while loop.",
      "Every for-each loop can be rewritten as a traditional for loop.",
      "Every for-each loop can be rewritten as a while loop.",
      "Every traditional for loop can be rewritten as a for-each loop.",
      "Every while loop can be rewritten as a for-each loop."
    ]
  },
  {
    title: "How many lines does this program print?",
    code:
      '<code>import java.time.*;</code>\n<code>public class OnePlusOne {</code>\n<code>   public static void main(String... nums) {</code>\n<code>     LocalDate time = LocalDate.of(1, 11);</code>\n<code>     while (time.getHour() &lt; 1) {</code>\n<code>        time.plusHours(1);</code>\n<code>        System.out.println("in loop");</code>\n<code>     }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "None",
      "One",
      "Two",
      "This is an infinite loop.",
      "The code does not compile."
    ]
  },
  {
    title:
      "How many objects are eligible for garbage collection immediately before the end of the main() method?",
    code:
      "<code>public class Tennis {</code>\n<code>   public static void main(String[] game) {</code>\n<code>      String[] balls = new String[1];</code>\n<code>      int[] scores = new int[1];</code>\n<code>      balls = null;</code>\n<code>      scores = null;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three", "Four"]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>14:  int count = 0;</code>\n<code>15:  LocalDate date = LocalDate.of(2017, Month.JANUARY, 1);</code>\n<code>16:  while (date.getMonth() != Month.APRIL)</code>\n<code>17:     date = date.minusMonths(1);</code>\n<code>18:     count++;</code>\n<code>19:  System.out.println(count);</code>",
    answers: [
      "0",
      "1",
      "3",
      "9",
      "This is an infinite loop.",
      "The code does not compile."
    ]
  },
  {
    title: "How many lines of the following class do not compile?",
    code:
      "<code>1:  package arctic;</code>\n<code>2:  abstract class Bear {</code>\n<code>3:     protected int sing;</code>\n<code>4:     protected abstract int grunt();</code>\n<code>5:     int sing() {</code>\n<code>6:        return sing;</code>\n<code>7:     }</code>\n<code>8:  }</code>\n<code>9:  public class PolarBear extends Bear {</code>\n<code>10:    int grunt() {</code>\n<code>11:       sing() += 10;</code>\n<code>12:       return super.grunt()+1;</code>\n<code>13:       return 10;</code>\n<code>14:    }</code>\n<code>15: }</code>",
    answers: [
      "None, the class compiles without issue.",
      "One",
      "Two",
      "Three",
      "Four",
      "Five"
    ]
  },
  {
    title:
      "In which places is the default keyword permitted to be used? (Choose two.)",
    code: null,
    answers: [
      "Access modifier in a class",
      "Execution path in a switch statement",
      "Method name",
      "Modifier in an abstract interface method",
      "Modifier in an interface method with a body",
      "Variable name"
    ]
  }
];

const a10 = [
  "E. The first time through the loop, we are calling indexOf on an empty StringBuilder. This returns -1. Since we cannot insert at index -1, the code throws a StringIndexOutOfBoundsException.",
  "C, E. In Option A, the assignment operator = incorrectly comes after the addition + operator. In Option B, the addition operator + incorrectly comes after the division / operator. In Option D, the subtraction operator - incorrectly comes after the multiplication * operator. This leaves Options C and E as the correct answers. For these answers, it may help to remember that the modulus operator %, multiplication operator *, and division operator / have the same operator precedence.",
  "B, C, F. Option A is incorrect because a getter should not take a value. Option D is incorrect because the prefix is should only be with boolean values. Option E is incorrect because gimme is not a valid JavaBean prefix. Options B, C, and F are each proper JavaBean method signatures.",
  "A, E. Line 24 does not compile because arrays use length. It is ArrayList that uses size(). All of the other lines compile, making Option A correct. It is allowed to split up the braces in the 2D array declaration on line 20. The code is also allowed to use crossword.length as the loop condition on line 22, although this is not a good idea. The array starts out with all 200 of the cells initialized to the default value for an int of 0. Both loops iterate starting at 0 and stopping before 10, which causes only half of the array to be set to 'x'. The other half still has the initial default value of 0, making Option E correct.",
  "B, D. Options A and E are incorrect because they indicate states that the application can possibly recover from. An Error generally indicates an unrecoverable problem. While it is possible to catch an Error, it is strongly recommended that an application never do so, making Options B and D correct. Finally, Option C is incorrect because Error extends from Throwable, not Exception, and is unchecked.",
  "A, C, D. The first import statement allows only the class forest.Bird to be available, making Option A correct and Options E and F incorrect. Option B is incorrect since the third import statement only allows access to classes within the savana package, not any sub-packages. Option C is correct because the second import statement allows any class in the jungle.tree package to be accessible. Finally, Option D is correct because java.lang.* is implicitly included in all Java classes.",
  "C. Mutable means the object can change state. Immutable means the object cannot change state. An ArrayList stores a collection of objects. It mutates as the elements change. A StringBuilder is also mutable as it improves performance by not creating a new object each time it changes. A String is immutable. Methods that look like they change the value simply return a different String object. The date/time objects added in Java 8, such as LocalDateTime, are also immutable. Therefore, Option C is correct with String and LocalDateTime as the immutable object types.",
  "C. On the first iteration through the loop, the first five characters are removed and builder becomes s growing. Since there are more than five characters left, the loop iterates again. This time, five more characters are removed and builder becomes wing. This matches Option C.",
  "D. The code compiles without issue, so Option E is incorrect. The key here is that none of the variables are assigned the same object due to the use of the new keyword. Comparing any two variables with == will always result in an evaluation of false, making the first two values of the print statement be false and false. On the other hand, they all have an underlying String value equivalent to up, so calling equals() on any two variables will return true. Option D is the correct answer that matches what the application will print.",
  "C. Lines 4 and 5 both print false since a String should be compared with a method rather than ==, especially when not comparing two values from the string pool. Line 6 also prints false because one value is uppercase and the other is lowercase. Line 7 prints true because both values are uppercase. Lines 8 and 9 print true because they don’t look at the case. This makes Option C the answer.",
  "A, B, C. Let’s look at each one in turn. Option A is correct because the labels are not referenced. Option B is correct because the outer while is broader than the inner while. Since there is no other code in the loop, it is not needed. Option C is also correct because a label is not used. Option D is incorrect because the inner loop is more specific than the outer loop. While the code still compiles, it prints one less chapter. Options E and F are incorrect because you cannot remove one half of a loop construct and have it compile.",
  "B, C. A long cannot contain a number with decimal points, preventing Options B and C from compiling. Options D and E show you can force a number to be a long by ending it with an upper- or lowercase L. This does not work if the number has a decimal point. Option F shows how to use underscores to break up a number.",
  "A. A while loop checks the condition before executing. Since the hour is not less than one, the loop never enters, and Option A is correct. This is good, because we’d have an infinite loop if the loop was entered since the result of plusHours is ignored.",
  "D. This question appears to ask you about involved array logic. Instead, it is checking to see if you remember that instance and class variables are initialized to null. Line 6 throws a NullPointerException. If the array was declared, the answer would be E because the code would throw an ArrayStoreException on line 8.",
  "C, E. The diamond operator is only allowed to be used when instantiating rather than declaring. In other words, it can’t go on the left side of the equal sign. Therefore, Options B, D, and F are incorrect. The remaining three options compile. However, Option A produces a warning because generics are not used on the right side of the assignment operator. Therefore, Options C and E are correct. Option C is better than Option E since it uses the diamond operator rather than specifying a redundant type.",
  'B, D. At the end of the method, shoe1 and shoe3 both point to "flip flop". shoe2 points to "croc". Since there are no references to "sandal", it is eligible for garbage collection, making Option B correct. However, garage collection is not guaranteed to run, so Option D is also correct.',
  "C. The code does not compile, so Options A and B are incorrect. The getFish() method is declared properly in the Fish class and successfully overridden in the Clownfish class. An overridden method must not declare any new or broader checked exceptions, but it is allowed to declare narrower exceptions or drop checked exceptions. The overridden method also uses a covariant return type. The use of final on the method and class declarations has no meaningful impact, since the methods and classes are not extended in this application. So where does the compilation error occur? In the main() method! Even though the Clownfish version of getFish() does not declare a checked exception, the call f.getFish() uses a Fish reference variable. Since the Fish reference variable is used and that version of the method declares a checked Exception, the compiler enforces that the checked exception must be handled by the main() method. Since this checked exception is not handled with a try-catch block nor by the main() method declaration, the code does not compile, and Option C is the correct answer.",
  "A. This is a correct example of using lambdas. The code creates an ArrayList with three elements. The print() method loops through and checks for negative numbers. Option A is correct.",
  "F. A try statement requires a catch or a finally block. It can also have both a catch and a finally block. Since no option matches these rules, Option F is the correct answer. Note that finalize is not a keyword but a method inherited from java.lang.Object. Lastly, the throws keyword can be applied to method declarations and is not used as part of a try statement.",
  "A. On line 12, result is first set to 8. On line 13, the boolean condition is true because 8 > 7. On line 13, result is incremented to 9. Then the inner loop runs, decrementing result until it is no longer greater than 5. On line 18, loop execution is completed because result is equal to 5. The break statement says to skip to after the labeled loop, which is line 20. Then result is printed as 5, making Option A correct.",
  "C. The code compiles and runs without exception, making Options E and F incorrect. The question is testing your knowledge of variable scope. The teeth variable is static in the Alligator class, meaning the same value is accessible from all instances of the class, including the static main() method. The static variable teeth is incremented each time the constructor is called. Since teeth is a local variable within the snap() method, the argument value is used, but changes to the local variable do not affect the static variable teeth. Since the local variable teeth is not used after it is decremented, the decrement operation has no meaningful effect on the program flow or the static variable teeth. Since the constructor is called twice, with snap() executed after each constructor call, the output printed is 1 2, making Option C the correct answer.",
  "A. A String is immutable. Since the result of the concat() method call is ignored, the value of witch never changes. It stays as a single letter, and Option A is correct.",
  "A, C, F. An interface method is exactly one of three types: default, static, or abstract. For this reason, Options A, C, and F are correct. An interface method cannot be protected nor private because the access modifier is always public, even when not specified, making Options B and D incorrect. Option E is also incorrect because final cannot be applied to static methods, since they cannot be overridden. It can also not be applied to default and abstract methods because they are always able to be overridden.",
  "D. Look at the loop condition carefully. It tries to assign null to a String variable. This is not an expression that returns a boolean. Therefore, the code does not compile, and Option D is correct. If this was fixed by making the loop condition tie == null, then Option B would be correct.",
  "B, F. A class may be defined without a package statement, making the class part of the default package. For this reason, Options A and D are incorrect. Every Java class implicitly imports exactly one package, java.lang.*, making Option B correct and Option C incorrect. Option E is incorrect because an import statement is not required. Finally, Option F is correct; any class that does not extend another class implicitly extends java.lang.Object.",
  "D. A class cannot inherit two interfaces that declare the same default method, unless the class overrides them. In this case, the version of grow() in the Tree class is an overloaded method, not an overridden one. Therefore, the code does not compile due to the declaration of Tree on line m1, and Option D is the correct answer.",
  "D. Variables are allowed to start with an underscore and are allowed to contain a $. Therefore, all the variable declarations compile, making Options A, B, and C incorrect. However, the println() refers to the uninitialized local boolean. Since local variables are not automatically initialized, the code does not compile, and Option D is correct.",
  "A. Prefix operators, such as ––x and ++x, modify the variable and evaluate to the new value, while postfix operators, such as x–– and x++, modify the variable but return the original value. Therefore, Option A is the correct answer.",
  "B, C, E. The constructors declared by Options A, D, and F compile without issue. Option B does not compile. Since there is no call to a parent constructor or constructor in the same class, the compiler inserts a no-argument super() call as the first line of the constructor. Because Big does not have a no-argument constructor, the no-argument constructor Trouble()does not compile. Option C also does not compile because super() and this() cannot be called in the same constructor. Note that if the super() statement was removed, it would still not compile since this would be a recursive constructor call. Finally, Option E does not compile. There is no matching constructor that can take a String followed by a long value. If the input argument deep was an int in this constructor, then it would match the constructor used in Option D and compile without issue.",
  "E, F. A static method is not allowed to access instance variables without an instance of the class, making Options E and F correct. Notice that only max is initialized to 100 in Option E. Since min doesn’t have a value specified, it gets the default value, which is 0.",
  "B, E. The ternary ? : operator only evaluates one of the two right-hand expressions at runtime, so Option A is incorrect. A switch statement may contain at most one optional default statement, making Option B correct. A single if-then statement can have at most one else statement, so Option C is incorrect. Note that you can join if-then-else statements together, but each else requires an additional if-then statement. The disjunctive | operator will always evaluate both operands, while the disjunctive short-circuit || operator will only evaluate the right-hand side of the expression if the left-hand side evaluates to false. Therefore, they are not interchangeable, especially if the right-hand side of the expression modifies a variable. For this reason, Option D is incorrect. Finally, Option E is correct. The logical complement ! operator may only be applied to boolean expressions, not numeric ones.",
  "C. Line 3 creates an empty StringBuilder. Line 4 adds three characters to it. Line 5 removes the first character resulting in ed. Line 6 deletes the characters starting at position 1 and ending right before position 1. Since there are no indexes that meet that description, the line has no effect. Therefore, Option C is correct.",
  "A, D. Java methods must start with a letter, the dollar $ symbol, or the underscore _ character. For this reason, Option B is incorrect, and Options A and D are correct. Despite how Option A looks, it is a valid method signature in Java. Options C, E, and F do not compile because the symbols -, \\, and # are not allowed in method names, respectively.",
  "B, C. First off, Option A is incorrect, since whether or not static or inherited methods are chosen is a matter of design and individual preference. Options B and C are true statements about inheritance and two of the most important reasons Java supports inheritance. Option D is incorrect because all Java classes extend java.lang.Object. Option E is incorrect. Whether or not inheritance simplifies or complicates a design is based on the skills of the developer creating the application.",
  "E. All of the statements are true statements about Java, making Option E the correct answer. Java was built with object-oriented programming and polymorphism in mind. Also, Java supports functional programming using lambda expressions.",
  "C. This array has three elements, making listing.length output 3. It so happens that each element references an array of the same size. But the code checks the first element and sees it is an array of size two, making the answer Option C.",
  "A, B, E. A switch statement supports the primitive types byte, short, char, and int and their associated wrapper classes Character, Byte, Short, and Integer. It also supports the String class and enumerated types. Floating-point types like float and double are not supported, nor is the Object class. For these reasons, Options A, B, and E are correct.",
  "D. The lambda syntax is incorrect. It should be ->, not =>. Therefore, Option D is correct. If this was fixed, Option A would be correct.",
  "B, C, E. The /* */ syntax can have additional (and uneven) * characters in Java, making Options B and E correct. Option C is the standard way to comment a single line with two slashes //. Option A contains a */ in the middle of the expected comment, making the part after the comment Insert **/ invalid. Option D is incorrect because a single slash / is not valid comment in Java. Finally, the # is not a comment character in Java, so Option F is incorrect.",
  "A, F. A static import is used to import static members of another class. Option A is correct because the method getGrass and variable seeds are imported. Option F is also correct because a wildcard on the Grass class for all visible static members is allowed. Option B is incorrect because the wildcard must be on a class, not a package. Options C and E are incorrect since the keywords import and static are reversed. Option D is incorrect because the static keyword is missing.",
  "D. When converting an array to a List, Java uses a fixed-sized backed list. This means that the list uses an array in the implementation. While changing elements to new values is allowed, adding and removing elements is not.",
  "A, D. Variable names can begin with an underscore, making Option A correct. To use an underscore in a numeric literal, it must be between two digits, making Option D correct.",
  "B. While no arguments are passed from the command line, this doesn’t matter because the main() method redefines the args array. Remember that String values sort alphabetically rather than by number. Therefore, 01 sorts before 1, and Option B is correct.",
  "D. The public modifier allows access members in the same class, package, subclass, or even classes in other packages, while the static modifier allows access without an instance of the class. For these reasons, Option D is the correct answer. Option A is incorrect because final is not related to access, and package-private prevents access from classes outside the package. Option B is incorrect because class is not a modifier; it is a keyword. Option C is incorrect because instance is not a Java keyword or modifier, and protected prevents classes that are not subclasses and are outside the package from accessing the variable. Finally, Option E is incorrect. The default keyword is for interface methods and switch statements, not class variables.",
  "A. Looping through the same list multiple times is allowed. Notice how there are not braces around the loops. This means that only the print statement is inside the loop. It executes four times. However, the println() only executes once at the end, making Option A the answer.",
  "C, D. The javac command compiles a .java file into a .class bytecode file, making Option C a correct answer, while also making Options B, E, and F incorrect. The javac command compiles to a set of java instructions, or bytecode, not machine instructions, making Option A incorrect and Option D correct.",
  "C. The parseInt() method returns an int primitive. Thanks to autoboxing, we can also assign it to an Integer wrapper class object reference. The char and short types are smaller than int so they cannot store the result. Therefore, lines 3 and 4 compile, and Option C is correct.",
  "B, D, F. The compiler will broaden the data type on a numeric value until it finds a compatible signature. There are two versions of the drive() methods that return a value of 3, one that takes a short and one that takes a double. Option A is incorrect because boolean cannot be converted to either of these types and trying to do so triggers a compiler error. Option B is correct because the data type short matches our message signature. Options C and E are incorrect. Remember that int and long are larger than short and will trigger different overloaded versions of drive() to be called, one that returns 5 and one that returns 2, respectively. Option D is correct. The byte value can be implicitly converted to short, and there are no other matching method signatures that take a byte value. Finally, Option F is correct because float can be implicitly converted to double, and there is no other version of drive() that takes a float value.",
  "A. Trick question. This appears to be about equality, but it is really about you recognizing that the main() method is missing the static keyword. Running this problem gives a runtime exception because the main() method is not properly declared. Therefore, Option A is the answer. If this was fixed, the answer would be Option C because the int and String comparisons return true.",
  "D. The code compiles without issue, so Options E and F are incorrect. Note that line p2 accesses a static method using an instance reference, which is discouraged but permitted in Java. First, a varargs int array of [0,0] is passed to the swing() method. The try block throws ArrayIndexOutOfBoundsException, since the third element is requested and the size of the array is two. For this reason, the print() statement in the try block is not executed. Next, since ArrayIndexOutOfBoundsException is a subclass of RuntimeException, the RuntimeException catch block is executed and 2 is printed. The rest of the catch blocks are skipped, since the first one was selected. The finally block then executes and prints 4. Lastly, control is returned to the main() method without an exception being thrown, and 5 is printed. Since 245 is printed, Option D is the correct answer.",
  "E. In the first iteration through the loop, container is 2 and cup is printed. Notice how the loop body subtracts 1 to account for indexes being zero based in Java. Then the update statement runs, setting container to 3. The condition is run and sees that 3 is in fact greater than 0. The loop body subtracts 1 and tries to get the element at index 2. There isn’t one and the code throws an exception. This makes Option E correct. You might be tempted to think this is an infinite loop. If the body did not throw an exception, it would be!",
  "A, E, F. An entry point in a Java application consists of a main() method with a single String[] or vararg String... argument, return type of void, and modifiers public and static. Note that the name of the variable in the input argument does not matter and the final modifier is optional. Options A, E, and F match this description and are correct. Option B is incorrect because the argument is a single String. Option C is incorrect, since the access modifier is incorrectly marked protected. Finally, Option D is incorrect because it has two return types, int and void.",
  "C, D, E. For this question, it helps to remember that the value of a case statement must be a literal expression or a final constant variable, and have a compatible data type. For these reasons, Lines 10 and 12 do not compile, making Options C and E correct answers. Line 10 uses a constant value, but long is not compatible with switch statements, while Line 12 uses a variable that is not marked final. Next, a switch statement may only have one default block. Therefore, Line 11 or 14 must be removed. Since Line 14 is not in the list of options, Option D becomes the last correct answer. The rest of the lines are fine since removing Lines 10, 11, and 12 allows the code to compile.",
  "A, B, C. All of the compilation issues with this code involve access modifiers. First, all interface methods are implicitly public, and explicitly setting an interface method to protected causes a compilation error on line h1, making Option A correct. Next, lines h2 and h3 both override the interface method with the package-private access modifier. Since this reduces the implied visibility of public, the overrides are invalid and neither line compiles. Therefore, Options B and C are also correct. Note that the RuntimeException is allowed in an overridden method even though it is not in the parent method signature because only new checked exceptions in overridden methods cause compilation errors. Line h4 is valid. An object can be implicitly cast to a superclass or inherited interface. Finally, lines h5 and h6 will compile without issue but independently throw a ClassCastException and a NullPointerException at runtime, respectively. Since the question only asks about compilation problems, neither of these are correct answers.",
  "B, E, F. Unchecked exceptions inherit the RuntimeException class and are not required to be caught in the methods where they are declared. Since ArithmeticException and IllegalArgumentException extend RuntimeException, they are included as unchecked exceptions, making Options B, E, and F correct. The rest are checked exceptions, which inherit Exception but not RuntimeException.",
  "F. The code compiles without issue, making Options D and E incorrect. Applying the ternary ? : operator, the variable ship is assigned a value of 10.0. The expression in the first if-then statement evaluates to true, so Goodbye is printed. Note that there is no else statement between the first and second if-then statements, therefore the second if-then statement is also executed. The expression in the second if-then statement evaluates to false, so the else statement is called and See you again is also printed. Therefore, Option F is the correct answer, with two statements being printed.",
  "B, C, D. The clock variable is accessed by a class in the same package; therefore, it requires package-private or less restrictive access (protected and public). The getTime() method is accessed by a subclass in a different package; therefore, it requires protected or less restrictive access (public). Options B, C, and D conform to these rules, making them the correct answer. Options A and F cause the Snooze class to fail to compile because the getTime() method is not accessible outside the package, even though Snooze is a subclass of Alarm. Option E causes the Coffee class to fail to compile because the clock variable is only visible within the Alarm class.",
  "B. This problem appears to be to be about overriding a method, but in fact, it is much simpler. The class CarbonStructure is not declared abstract, yet it includes an abstract method. To fix it, the definition of CarbonStructure would have to be changed to be an abstract class, or the abstract modifier would need to be removed from getCount() in CarbonStructure and a method body added. Since the only answer choice available is to change the getCount() method on line q1, Option B is the correct answer. Note that the rest of the application, including the override on line q2, is correct and compiles without issue. The return types Long and Number are covariant since Number is a superclass of Long. Likewise, the exception thrown in the subclass method is narrower, so no compilation error occurs on q2.",
  "C. Line 5 does not declare a main() method that can be the entry point to the program. It does correctly declare a regular instance method and does compile. Line 6 does not compile because LocalDate needs to use a static method rather than a constructor. Line 7 is incorrect because Period methods should not be chained. However, it does compile, returning a period of 1 day. Line 8 does not compile because the correct class name is DateTimeFormatter. Line 9 is correct. Option C is correct because lines 6 and 8 do not compile.",
  "A, E. A try block can have zero or more catch blocks, and zero or one finally blocks, but must be accompanied by at least one of these blocks. For these reasons, Options B, D, and F are incorrect, and Option E is correct. A finally block must appear after the last catch block, if there are any, making Option C incorrect, and Option A correct.",
  "B. The code compiles without issue, so Option E is incorrect. For this problem, it helps to remember that + and * have a higher precedence than the ternary ? : operator. In the first expression, 1 + 2 * 5 is evaluated first, resulting in a reduction to 11>=2 ? 4 : 2, and then fish being assigned a value of 4. In the second expression, the first ternary expression evaluates to false resulting in a reduction to the second right-hand expression 5>=5 ? 9 : 7, which then assigns a value of 9 to mammals. In the print() statement, the first + operator is an addition operator, since the operands are numbers, resulting in the value of 4 + 9, 13. The second + operator is a concatenation since one of the two operands is a String. The result 13 is printed, making Option B the correct answer.",
  "A, C, E. An object can be cast to a superclass or inherited interface type without an explicit cast. Furthermore, casting an object to a reference variable does not modify the object in any way; it just may change what methods and variables are immediately accessible. For these reasons, Options A, C, and E are correct. Option B is incorrect; since the compiler can try to block or warn about invalid casts, it cannot prevent them. For example, any object can be implicitly cast to java.lang.Object, then explicitly cast to any other object, leading to a ClassCastException at runtime. Option D is also incorrect because assigning an object to a subclass reference variable requires an explicit cast. Finally, Option F is incorrect. An object can always be cast to one of its inherited types, superclass or interface, without a ClassCastException being thrown.",
  "F. The array is not sorted. It does not meet the pre-condition for a binary search. Therefore, the output is not guaranteed and the answer is Option F.",
  "B. While shoe3 goes out of scope after the shopping() method, the croc object is referenced by shoe1 and therefore cannot be garbage collected. Similarly, the sandal object is now referenced by shoe2. No variables reference the flip flop object, so it is eligible to be garbage collected, and Option B is correct.",
  "E. The throws keyword is used in method declarations, while the throw keyword is used to throw an exception to the surrounding process, and the finally keyword is used to add a statement that is guaranteed to execute even if an exception is thrown. For these reasons, Option E is the correct answer. ",
  "B, E. The first two iterations through the loop complete successfully, making Option B correct. However, the two arrays are not the same size and the for loop only checks the size of the first one. The third iteration throws an ArrayIndexOutOfBoundsException, making Option E correct.",
  "E. For this question, it helps to try all answers out. Most of them do not make any sense. For example, overloading a method is not a facet of inheritance. Likewise, concrete and abstract methods can both be overridden, not just one. The only answer that is valid is Option E. Without virtual methods, overriding a method would not be possible, and Java would not truly support polymorphism.",
  "E. The code does compile. Line s1 is a bit tricky because length is used for an array and length() is used for a String. Line s1 stores the length of the Fall in a variable, which is 4. Line s2 throws an ArrayIndexOutOfBoundsException because 4 is not a valid index for an array with four elements. Remember that indices start counting with zero. Therefore, Option E is correct.",
  "D. The code definitely does not compile, so Option A is incorrect. The first problem with this code is that the Drum class is missing a constructor causing the class declaration on line 8 to fail to compile. The default no-argument constructor cannot be inserted if the superclass, Instrument, does not define a no-argument constructor. The second problem with the code is that line 11 does not compile, since it calls super.play(5), but the version of play() in the parent class does not take any arguments. Finally, line 15 does not compile. While mn may be a reference variable that points to a Drum() object, the concert() method cannot be called unless it is explicitly cast back to a Drum reference. For these three reasons, the code does not compile, and Option D is the correct answer.",
  "B. The application compiles and runs without issue, so Options E and F are incorrect. Java uses pass-by-value, so even though the change to length in the first line of the adjustPropellers() method does not change the value in the main() method, the value is later returned by the method and used to reassign the length value. The result is that length is assigned a value of 6, due to it being returned by the method. For the second parameter, while the String[] reference cannot be modified to impact the reference in the calling method, the data in it can be. Therefore, the value of the first element is set to LONG, resulting in an output of 6,LONG, making Option B the correct answer.",
  "D. The first compilation problem with the code is that the second catch block in openDrawbridge() is unreachable since CableSnapException is a subclass of OpenDoorException. The catch blocks should be ordered with the more narrow exception classes before the broader ones. Next, the variable ex is declared twice within the same scope since it appears in the second catch block as well as the embedded try-catch block. Finally, the openDrawbridge() method declares the checked Exception class, but it is not handled in the main() method with a try-catch block, nor in the main() method declaration. For these three reasons, Option D is correct.",
  "D. Object orientation is the property of structuring an object with its related data and methods. Encapsulation is the property of removing direct access to the underlying data from processes outside the class. The two go hand and hand to improve class design, making Option D the correct choice.",
  "E. In Java, String is a class and not a primitive. This means it needs to begin with an uppercase letter in the declaration. The code does not compile, making Option E correct. If this was fixed, the answer would be Option B.",
  "A. This class is called with three command-line arguments. First the array is sorted, which meets the pre-condition for binary search. At this point, the array contains [flower, plant, seed]. The key is to notice the value of args[0] is now flower rather than seed. Calling binary search to find the position of flower returns 0, which is the index matching that value. Therefore, the answer is Option A.",
  "B, C, D. A for-each loop is a specialized loop that just iterates through an array or list. It can be rewritten using explicit indexing code in any of the other three loop types. Therefore, Options B, C, and D are correct. Option A is incorrect because a do-while loop is guaranteed to execute at least once. Option E is incorrect because the traditional for loop can loop backwards or by skipping indexes. Option F is incorrect because non-index-related boolean conditions are allowed to be used in a while loop.",
  "E. The LocalDate class is only for day/month/year values. It does not support time, so getHour() and plusHours() do not compile, making Option E the answer.",
  "C. All arrays are objects regardless of whether they point to primitives or classes. That means both balls and scores are objects. Both are set to null so they are eligible for garbage collection. The balls array is initialized to all null references. There are no objects inside. The scores array is initialized to all 0 values. Therefore, only two objects exist to be eligible for garbage collection, and Option C is correct.",
  "B. Since there are not brackets around the while loop, only line 17 is in the loop body. Line 18 gets executed once after the loop completes. This means that count will be 1 assuming the loop completes. Subtracting a month from JANUARY results in DECEMBER. Since the loop completes E is incorrect and Option B is the answer. Note that if the brackets were added as the indentation suggests, Option D would be the answer since we are counting months backwards.",
  "D. Line 10 does not compile because the override reduces the visibility of an inherited method, with the package-private modifier being more restrictive than the protected modifier. Line 11 does also not compile, since the left-hand side of a compound assignment operator must be used with a variable, not a method. Finally, Line 12 does not compile because super.grunt() is inherited as an abstract method in the PolarBear class, meaning the parent class has no implementation. For these three reasons, Option D is the correct answer.",
  "B, E. Package-private, or default, access is denoted by the absence of an access modifier, making Option A incorrect. Option B is correct, since a switch statement can contain a default execution path. Options C and F are incorrect because keywords in Java cannot be used as method or variable names. Finally, interfaces can contain default interface methods but they must be concrete with a method body. For this reason, Option E is correct and Option D is incorrect."
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
    answerArray: mapAnswers(qz["answers"], a10[index]),
    explain: a10[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
