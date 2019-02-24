const qzString = [
  {
    title: "What is the best reason for using StringBuilder instead of String?",
    code: null,
    answers: [
      "StringBuilder adds support for multiple threads.",
      "StringBuilder can use == to compare values.",
      "StringBuilder saves memory by reducing the number of objects created.",
      "StringBuilder supports different languages and encodings."
    ]
  },
  {
    title: "What is not true about a String?",
    code: null,
    answers: [
      "It can be created without coding a call to a constructor.",
      "It can be reused via the string pool.",
      "It is final.",
      "It is mutable."
    ]
  },
  {
    title:
      "Which of the following creates a StringBuilder with a different value than the other options?",
    code: null,
    answers: [
      'new StringBuilder().append("clown")',
      'new StringBuilder("clown")',
      'new StringBuilder("cl").insert(2, "own")',
      "All of them create the same value."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>StringBuilder teams = new StringBuilder("333");</code>\n<code>teams.append(" 806");</code>\n<code>teams.append(" 1601");</code>\n<code>System.out.print(teams);</code>',
    answers: [
      "333",
      "333 806 1601",
      "The code compiles but outputs something else.",
      "The code does not compile."
    ]
  },
  {
    title:
      "How many of the types ArrayList, List, and Object can fill in the blank to produce code that compiles?",
    code: "<code>List frisbees = new  ____________();</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>List&lt;String&gt; tools = new ArrayList&lt;&gt;();</code>\n<code>tools.add("hammer");</code>\n<code>tools.add("nail");</code>\n<code>tools.add("hex key");</code>\n<code>System.out.println(tools.get(1));</code>',
    answers: ["hammer", "hex key", "nail", "None of the above"]
  },
  {
    title: "What is the result of the following code?",
    code:
      '<code>StringBuilder sb = new StringBuilder("radical")</code>\n<code>   .insert(sb.length(), "robots");</code>\n<code>System.out.println(sb);</code>',
    answers: [
      "radicarobots",
      "radicalrobots",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>List&lt;String&gt; museums = new ArrayList&lt;&gt;(1);</code>\n<code>museums.add("Natural History");</code>\n<code>museums.add("Science");</code>\n<code>museums.add("Art");</code>\n<code>museums.remove(2);</code>\n<code>System.out.println(museums);</code>',
    answers: [
      "[Natural History, Science]",
      "[Natural History, Art, Science]",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>12:  StringBuilder b = new StringBuilder("12");</code>\n<code>13:  b = b.append("3");</code>\n<code>14:  b.reverse();</code>\n<code>15:  System.out.println(b.toString());</code>',
    answers: ["12", "123", "321", "The code does not compile."]
  },
  {
    title: "What is the main benefit of a lambda expression?",
    code: null,
    answers: [
      "It allows you to convert a primitive to a wrapper class.",
      "It allows you to change the bytecode while the application is running.",
      "It allows you to inherit from multiple classes.",
      "It allows you to write code that has the execution deferred."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>5:  StringBuilder line = new StringBuilder("-");</code>\n<code>6:  StringBuilder anotherLine = line.append("-");</code>\n<code>7:  System.out.print(line == anotherLine);</code>\n<code>8:  System.out.print(" ");</code>\n<code>9:  System.out.print(line.length());</code>',
    answers: ["false 1", "false 2", "true 1", "true 2"]
  },
  {
    title:
      "The author of this method forgot to include the data type. Which of the following reference types can fill in the blank to complete this method?",
    code:
      '<code>public static void secret( ____________mystery) {</code>\n<code>  mystery.add("metal");</code>\n<code>  String str = mystery.get(0);</code>\n<code>  int num = mystery.length();</code>\n<code>}</code>',
    answers: [
      "ArrayList",
      "ArrayList<String>",
      "StringBuilder",
      "None of the above"
    ]
  },
  {
    title:
      "Which portion of code can be removed so that this line of code continues to compile?",
    code:
      "<code>Predicate&lt;StringBuilder&gt; p = (StringBuilder b) ‐&gt; {return true;};</code>",
    answers: [
      "Remove StringBuilder b",
      "Remove ->",
      "Remove { and ;}",
      "Remove { return and ;}"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>20:  List&lt;Character&gt; chars = new ArrayList&lt;&gt;();</code>\n<code>21:  chars.add('a');</code>\n<code>22:  chars.add('b');</code>\n<code>23:  chars.set(1, 'c');</code>\n<code>24:  chars.remove(0);</code>\n<code>25:  System.out.print(chars.size() + \" \" + chars.contains('b'));</code>",
    answers: ["1 false", "1 true", "2 false", "2 true"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>12:  String b = "12";</code>\n<code>13:  b += "3";</code>\n<code>14:  b.reverse();</code>\n<code>15:  System.out.println(b.toString());</code>',
    answers: ["12", "123", "321", "The code does not compile."]
  },
  {
    title: "How many of these lines fail to compile?",
    code:
      "<code>Predicate&lt;String&gt; pred1 = s ‐&gt; false;</code>\n<code>Predicate&lt;String&gt; pred2 = (s) ‐&gt; false;</code>\n<code>Predicate&lt;String&gt; pred3 = String s ‐&gt; false;</code>\n<code>Predicate&lt;String&gt; pred4 = (String s) ‐&gt; false;</code>",
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "What does the following do?",
    code:
      '<code>public class Shoot {</code>\n<code>   interface Target {</code>\n<code>      boolean needToAim(double angle);</code>\n<code>   }</code>\n<code>   static void prepare(double angle, Target t) {</code>\n<code>      boolean ready = t.needToAim(angle);  // k1</code>\n<code><span epub:type="pagebreak" id="Page_140"></span>      System.out.println(ready);</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      prepare(45, d -&gt; d &gt; 5 || d &lt; -5);   // k2</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "It prints true.",
      "It prints false.",
      "It doesn’t compile due to line k1.",
      "It doesn’t compile due to line k2."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>String teams = new String("694");</code>\n<code>teams.concat(" 1155");</code>\n<code>teams.concat(" 2265");</code>\n<code>teams.concat(" 2869");</code>\n<code>System.out.println(teams);</code>',
    answers: [
      "694",
      "694 1155 2265 2869",
      "The code compiles but outputs something else.",
      "The code does not compile."
    ]
  },
  {
    title: "",
    code: null,
    answers: ["I only", "II only", "I and II", "I, II, and III"]
  },
  {
    title:
      "Which of the answer choices results in a different value being output than the other three choices?",
    code:
      '<code>StringBuilder sb = new StringBuilder("radical ");</code>\n<code>sb = ________________________;</code>\n<code>System.out.print(sb);</code>',
    answers: [
      'new StringBuilder("radical ")\n\n.append("robots")\n',
      'new StringBuilder("radical ")\n\n.delete(1, 100)\n.append("obots")\n.insert(1,  "adical r")\n',
      'new StringBuilder("radical ")\n\n.insert(7, "robots")\n',
      'new StringBuilder("radical ")\n\n.insert(sb.length(), "robots")\n'
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>String[] array = {"Natural History", "Science"};</code>\n<code>List&lt;String&gt; museums = Arrays.asList(array);</code>\n<code>museums.set(0, "Art");</code>\n<code>System.out.println(museums.contains("Art"));</code>',
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which is a true statement?",
    code: null,
    answers: [
      'If s.contains("abc") is true, then s.equals("abc") is also true.',
      'If s.contains("abc") is true, then s.startsWith("abc") is also true.',
      'If s.startsWith("abc") is true, then s.equals("abc") is also true.',
      'If s.startsWith("abc") is true, then s.contains("abc") is also true.'
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>20:  List&lt;Character&gt; chars = new ArrayList&lt;&gt;();</code>\n<code>21:  chars.add('a');</code>\n<code>22:  chars.add('b');</code>\n<code>23:  chars.set(1, 'c');</code>\n<code>24:  chars.remove(0);</code>\n<code>25:  System.out.print(chars.length());</code>",
    answers: ["0", "1", "2", "None of the above"]
  },
  {
    title:
      "The author of this method forgot to include the data type. Which of the following reference types can fill in the blank to complete this method?",
    code:
      '<code>public static void secret(_____________ mystery) {</code>\n<code>   mystery = mystery.replace("1", "8");</code>\n<code>   mystery.startsWith("paper");</code>\n<code>   String s = mystery.toString();</code>\n<code>}</code>',
    answers: ["ArrayList", "String", "StringBuilder", "None of the above"]
  },
  {
    title:
      "Which statement is true about the following figure while ensuring the code continues to compile?",
    code: null,
    answers: [
      "<> can be inserted at position P without making any other changes.",
      "<> can be inserted at position Q without making any other changes.",
      "<> can be inserted at both positions P and Q.",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following can fill in the blank to make the code compile?",
    code:
      "<code>import java.util.function.*;</code>\n<code>public class Card {</code>\n<code>   public static void main(String[] s) {</code>\n<code>      Predicate&lt;String&gt; pred =____________  ‐&gt; true;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["(Integer i)", "(Object o)", "(String s)", "None of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>5:  String line = new String("-");</code>\n<code>6:  String anotherLine = line.concat("-");</code>\n<code>7:  System.out.print(line == anotherLine);</code>\n<code>8:  System.out.print(" ");</code>\n<code>9:  System.out.print(line.length());</code>',
    answers: ["false 1", "false 2", "true 1", "true 2"]
  },
  {
    title: "What does the following output?",
    code:
      '<code>Predicate dash = c -&gt; c.startsWith("‐");</code>\n<code>System.out.println(dash.test(""));</code>',
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Of the classes LocalDate, LocalDateTime, LocalTime, and LocalTimeStamp, how many include hours, minutes, and seconds?",
    code: null,
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "What is the output of the following class?",
    code:
      '<code>1:  package rocket;</code>\n<code>2:  public class Countdown {</code>\n<code>3:     public static void main(String[] args) {</code>\n<code>4:        String builder = "54321";</code>\n<code>5:        builder = builder.substring(4);</code>\n<code>6:        System.out.println(builder.charAt(2));</code>\n<code>7:     }</code>\n<code>8:  }</code>',
    answers: ["2", "3", "4", "None of the above"]
  },
  {
    title:
      "Which equivalent code can replace i -> i != 0 in the following line?",
    code: "<code>Predicate&lt;Integer&gt; ip = i ‐&gt; i != 0;</code>",
    answers: [
      "i -> { i != 0 }",
      "i -> { i != 0; }",
      "i -> { return i != 0 }",
      "i -> { return i != 0; }"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>LocalDate xmas = LocalDate.of(2016,  12,  25);</code>\n<code>xmas.plusDays(-1);</code>\n<code>System.out.println(xmas.getDayOfMonth());</code>",
    answers: ["24", "25", "26", "None of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   public class Legos {</code>\n<code>2:      public static void main(String[] args) {</code>\n<code>3:         StringBuilder sb = new StringBuilder();</code>\n<code>4:         sb.append("red");</code>\n<code>5:         sb.deleteCharAt(0);</code>\n<code>6:         sb.delete(1, 2);</code>\n<code>7:         System.out.println(sb);</code>\n<code>8:      }</code>\n<code>9:   }</code>',
    answers: ["e", "d", "ed", "None of the above"]
  },
  {
    title: "What does the following output?",
    code:
      '<code>Predicate clear = c -&gt; c.equals("clear");</code>\n<code>System.out.println(clear.test("pink"));</code>',
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which starts counting from one rather than zero?",
    code: null,
    answers: [
      "Array indexes",
      "The index used by charAt in a String",
      "The months in a LocalDateTime",
      "The months in a LocalTime"
    ]
  },
  {
    title: "Which statement is not true of Predicate?",
    code: null,
    answers: [
      "A boolean is returned from the method it declares.",
      "It is an interface.",
      "The method it declares accepts two parameters.",
      "The method it declares is named test."
    ]
  },
  {
    title: "Which of these periods represents a larger amount of time?",
    code:
      "<code>Period period1 = Period.ofWeeks(1).ofDays(3);</code>\n<code>Period period2 = Period.ofDays(10);</code>",
    answers: [
      "period1",
      "period2",
      "They represent the same length of time.",
      "None of the above. This code does not compile."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>import java.time.*;</code>\n<code>import java.time.format.*;</code>\n<code>&nbsp;</code>\n<code>public class HowLong {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate newYears = LocalDate.of(2017, 1, 1);</code>\n<code>      Period period = Period.ofDays(1);</code>\n<code>      DateTimeFormatter format = DateTimeFormatter.ofPattern("MM-dd-yyyy");</code>\n<code>      System.out.print(format.format(newYears.minus(period)));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "01-01-2017",
      "12-31-2016",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following can fill in the blank so the following code prints true?",
    code:
      '<code>String happy = " :) - (: ";</code>\n<code>String really = happy.trim();</code>\n<code>String question = ______________________;</code>\n<code>System.out.println(really.equals(question));</code>',
    answers: [
      "happy.substring(0, happy.length() - 1)",
      "happy.substring(0, happy.length())",
      "happy.substring(1, happy.length() - 1)",
      "happy.substring(1, happy.length())"
    ]
  },
  {
    title: "Which is not a true statement about the Period class?",
    code: null,
    answers: [
      "A Period is immutable.",
      "A Period is typically used for adding or subtracting time from dates.",
      "You can create a Period representing 2 minutes.",
      "You can create a Period representing 5 years."
    ]
  },
  {
    title: "What is the output of the following class?",
    code:
      '<code>1:  package rocket;</code>\n<code>2:  public class Countdown {</code>\n<code>3:     public static void main(String[] args) {</code>\n<code>4:        StringBuilder builder = new StringBuilder("54321");</code>\n<code>5:        builder.substring(2);</code>\n<code>6:        System.out.println(builder.charAt(1));</code>\n<code>7:     }</code>\n<code>8:  }</code>',
    answers: ["1", "2", "3", "4"]
  },
  {
    title: "What does the following output?",
    code:
      "<code>List&lt;Integer&gt; pennies = new ArrayList&lt;&gt;();</code>\n<code>pennies.add(3);</code>\n<code>pennies.add(2);</code>\n<code>pennies.add(1);</code>\n<code>pennies.remove(2);</code>\n<code>System.out.println(pennies);</code>",
    answers: [
      "[3, 1]",
      "[3, 2]",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "The author of this method forgot to include the data type. Which of the following reference types can best fill in the blank to complete this method?",
    code:
      '<code>public static void secret(_____________ mystery) {</code>\n<code>   char ch = mystery.charAt(3);</code>\n<code>   mystery = mystery.insert(1, "more");</code>\n<code>   int num = mystery.length();</code>\n<code>}</code>',
    answers: ["ArrayList", "String", "StringBuilder", "None of the above"]
  },
  {
    title: "What is the smallest unit you can add to a LocalTime object?",
    code: null,
    answers: ["Second", "Millisecond", "Nanosecond", "Picosecond"]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>import java.time.*;</code>\n<code>import java.time.format.*;</code>\n<code>&nbsp;</code>\n<code>public class HowLong {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      LocalDate newYears = LocalDate.of(2017, 1, 1);</code>\n<code>      Period period = Period.ofDays(1);</code>\n<code>      DateTimeFormatter format = DateTimeFormatter.ofPattern("mm-dd-yyyy");</code>\n<code>      System.out.print(format.format(newYears.minus(period)));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "01-01-2017",
      "12-31-2016",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "",
    code: null,
    answers: ["I", "I and II", "II and III", "I, II, and III"]
  },
  {
    title: "How many lines does this code output?",
    code:
      '<code>import java.util.*;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class PrintNegative {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      List&lt;String&gt; list = new ArrayList&lt;&gt;();</code>\n<code>      list.add("-5");</code>\n<code>      list.add("0");</code>\n<code>      list.add("5");</code>\n<code>      print(list, e -&gt; e &lt; 0);</code>\n<code>   }</code>\n<code>   public static void print(List&lt;String&gt; list, Predicate&lt;Integer&gt; p) {</code>\n<code>      for (String num : list)</code>\n<code>         if (p.test(num))</code>\n<code>            System.out.println(num);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Two",
      "None. The code does not compile.",
      "None. The code throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>12:  List&lt;String&gt; magazines = new ArrayList();</code>\n<code>13:  magazines.add("Readers Digest");</code>\n<code>14:  magazines.add("People");</code>\n<code>15:  magazines.clear();</code>\n<code>16:  magazines.add("The Economist");</code>\n<code>17:  magazines.remove(1);</code>\n<code>18:  System.out.println(magazines.size());</code>',
    answers: [
      "0",
      "1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>public class Costume {</code>\n<code>   public static void main(String[] black) {</code>\n<code>     String witch = 'b';</code>\n<code>     String tail = \"lack\";</code>\n<code>     witch = witch.concat(tail);</code>\n<code>     System.out.println(witch);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "b",
      "black",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      "<code>LocalDate xmas = LocalDate.of(2016,  12,  25);</code>\n<code>xmas.setYear(2017);</code>\n<code>System.out.println(xmas.getYear());</code>",
    answers: [
      "2016",
      "2017",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  }
];

const a9 = [
  "C. Option A is incorrect because StringBuilder does not support multiple threads. In fact, threads aren’t even covered on the OCA, which should be your clue that this answer is wrong! You don’t need to know this for the exam, but StringBuffer supports multiple threads. Option B is incorrect because == compares references, not values. Option D is incorrect because both String and StringBuilder support languages and encodings. Option C is correct and the primary reason to use StringBuilder. String often creates a new object each time you call certain methods on the object like concat(). StringBuilder optimizes operations like append() because it is mutable.",
  "D. A String can be created using a literal rather than calling a constructor directly, making Option A incorrect. A string pool exists for String reuse, making Option B incorrect. A String is final and immutable, making Option C incorrect and Option D correct.",
  "D. This question is testing whether you understand how method chaining works. Option A creates an empty StringBuilder and then adds the five characters in clown to it. Option B simply creates the clown when calling the constructor. Finally, Option C creates the same value, just in two parts. Therefore, Option D is correct.",
  "B. Since StringBuilder is mutable, each call to append adds to the value. When calling print, toString() is automatically called and 333 806 1601 is output. Therefore, Option B is correct.",
  "B. List is an interface and not a class. It cannot be instantiated. While Object is a concrete class, it does not implement the List interface so it cannot be assigned to frisbees. Note that if you were to add an explicit cast, it would compile and throw an exception at runtime. Of the three options, only ArrayList can fill in the blank, so Option B is correct.",
  "C. An ArrayList does not automatically sort the elements. It simply remembers them in order. Since Java uses zero-based indexes, Option C is correct.",
  "C. Calling the constructor and then insert() is an example of method chaining. However, the sb.length() call is a problem. The sb reference doesn’t exist until after the chained calls complete. Just because it happens to be on a separate line doesn’t change when the reference is created. Since the code does not compile, Option C is correct.",
  "A. While the ArrayList is declared with an initial capacity of one element, it is free to expand as more elements are added. Each of the three calls to the add() method adds an element to the end of the ArrayList. The remove() method call deletes the element at index 2, which is Art. Therefore, Option A is correct.",
  "C. On line 12, the value of the StringBuilder is 12. On line 13, it becomes 123. Since StringBuilder is mutable, storing the result in the same reference is redundant. Then on line 14, the value is reversed, giving us 321 and making Option C correct.",
  "D. Option A is incorrect as it describes autoboxing. Options B and C are not possible in Java. Option D is correct as it describes lambdas. Lambdas use deferred execution and can be run elsewhere in the codebase.",
  "D. A StringBuilder is mutable, so the length is two after line 6 completes. The StringBuilder methods return a reference to the same object so you can chain method calls. Therefore, line and anotherLine refer to the same object. This means that line 7 prints true. Then on line 9, both references point to the same object of length 2, and Option D is correct.",
  "D. The add() and get() methods are available on ArrayList. However, ArrayList uses size rather than length to get the number of elements. Therefore, Option D is correct. If length was changed to size, Option B would compile if put in the blank. Option A still wouldn’t compile in the blank because a cast would be needed to store the value in str.",
  "D. Option A is tricky, but incorrect. While a lambda can have zero parameters, a Predicate cannot. A Predicate is defined as a type mapping to a boolean. Option B is clearly incorrect as -> separates the parts of a lambda. Options C and D are similar. Option C is incorrect because return is only allowed when the brackets are present. Option D is correct.",
  "A. Lines 20–22 create an ArrayList with two elements. Line 23 replaces the second one with a new value. Now chars is [a, c]. Then line 24 removes the first element, making it just [c]. Option A is correct because there is only one element, but it is not the value b.",
  "D. Trick question. There is no reverse method on the String class. There is one on the StringBuilder class. Therefore, the code does not compile, and Option D is correct.",
  "A. When creating a lambda with only one parameter, there are a few variants. The pred1 approach shows the shortest way, where the type is omitted and the parentheses are omitted. The pred2 approach is similar except it includes the parentheses. Both are legal. The pred4 approach is the long way with both the parentheses and type specified. The only one that doesn’t compile is pred3. The parentheses are required if including the type.",
  "A. This is a correct example of code that uses a lambda. The interface has a single abstract method. The lambda correctly takes one double parameter and returns a boolean. This matches the interface. The lambda syntax is correct. Since 45 is greater than 5, Option A is correct.",
  "A. Since String is immutable, each call to concat() returns a new object with the new value. However, that return value is ignored and the teams variable never changes in value. Therefore it stays as 694, and Option A is correct.",
  "A. The ArrayList class is in the java.util package, making I correct. The LocalDate class is in the java.time package, making II incorrect. The String class is in the java.lang package, which means you can use it without typing an import, making III incorrect. Therefore, Option A is correct.",
  "C. Option A is straightforward and outputs radical robots. Option B does the same in a convoluted manner. First Option B removes all the characters after the first one. It doesn’t matter that there aren’t actually 100 characters to delete. Then it appends obots to the end, making the builder contain robots. Finally, it inserts the remainder of the string immediately after the first index. Try drawing the flow if this is hard to envision. Option D also creates the same value by inserting robots immediately after the end of the StringBuilder. Option C is close, but it has an off-by-one error. It inserts robots after the letter l rather than after the space. This results in the value radicalrobots followed by a space. Option C is different than the others and the correct answer.",
  "A. Since we are creating the list from an array, it is a fixed size. We are allowed to change elements. At the end of this code, museums is [Art, Science]. Therefore, it contains Art, and Option A is correct.",
  'D. Options A and B are not true if the String is "deabc". Option C is not true if the String is "abcde". Option D is true in all cases.',
  "D. Line 25 does not compile. On an ArrayList, the method to get the number of elements is size. The length() method is used for a String or StringBuilder.",
  "B. The toString() method call doesn’t help in narrowing things down as all Java objects have that method available. The other two methods are more helpful. String is the only type of these three to have a startsWith() method, making Option B correct. String also has the replace() method declared here. If you memorized the whole API, you might know that StringBuilder also has a replace() method, but it requires three parameters instead of two. Please don’t memorize the API in that level of detail. We included what you need to know in our study guide. If you do have this outside knowledge, be careful not to read into the questions!",
  "B. The <> is known as the diamond operator. Here, it works as a shortcut to avoid repeating the generic type twice for the same declaration. On the right side of the expression, this is a handy shortcut. Java still needs the type on the left side so there is something to infer. In the figure, position P is the left side and position Q is the right side. Therefore, Option B is correct.",
  "D. The type in the lambda must match the generic declared on the Predicate. In this case, that is String. Therefore, Options A and B are incorrect. While Option C is of the correct type, it uses the variable s, which is already in use from the main() method parameter. Therefore, none of these are correct, and Option D is the answer.",
  "A. A String is immutable so a different object is returned on line 6. The object anotherLine points to is of length 2 after line 6 completes. However, the original line reference still points to an object of length 1. Therefore, Option A is correct.",
  "C. While it is common for a Predicate to have a generic type, it is not required. However, it is treated like a Predicate of type Object if the generic type is missing. Since startsWith() does not exist on Object, the first line does not compile, and Option C is correct.",
  "B. LocalDate only includes the date portion and not the time portion. There is no class named LocalTimeStamp. The other two, LocalDateTime and LocalTime, both include the time elements, making Option B correct.",
  "D. Line 4 creates a String of length 5. Since String is immutable, line 5 creates a new String with the value 1 and assigns it to builder. Remember that indexes in Java begin with 0, so the substring() method is taking the values from the fifth element through the end. Since the first element is the last element, there’s only one character in there. Then line 6 tries to retrieve the second indexed element. Since there is only one element, this gives a StringIndexOutOfBoundsException, and Option D is correct.",
  "D. When you’re using brackets, both the return keyword and semicolon are needed for the lambda to compile, making Option D correct.",
  "B. Java 8 date and time classes are immutable. The plusDays method returns a LocalDate object presenting Christmas Eve (December 24th). However, this return value is ignored. The xmas variable still represents the original value, so Option B is correct.",
  "A. Line 3 creates an empty StringBuilder. Line 4 adds three characters to it. Line 5 removes the first character, resulting in ed. Line 6 deletes the characters starting at position 1 and ending right before position 2, which removes the character at index 1, which is d. The only character left is e, so Option A is correct.",
  "B. While it is common for a Predicate to have a generic type, it is not required. When the generic is omitted, it is treated like a Predicate of type Object. Since the equals() method exists on Object, this is fine. Option B is correct because the Predicate tests as false.",
  "C. In Java, most things use zero-based indexes, including arrays and a String. Months are an exception to this convention starting Java 8. This makes the answer either Option C or D. However, LocalTime does not contain date fields, so it has to be Option C.",
  "C. Predicate is an interface with one method. The method signature is boolean test(T t). Option C is the answer because the method accepts one parameter rather than two.",
  "B. Be careful here. The Period class uses a static helper method to return the period. It does not chain method calls, so period1 only represents three days. Since three days is less than 10 days, period2 is larger, and Option B is correct.",
  "B. The code starts by correctly creating a date representing January 1, 2017, and a period representing one day. It then explicitly defines the format as month followed by day followed by year. Finally, the code subtracts a day, giving us the formatted version of December 31, 2016.",
  'C. The trim() method returns a String with all leading and trailing white space removed. In this question, that’s the seven-character String: ":) - (:". Options A and B are incorrect because they do not remove the first blank space in happy. Option D is incorrect because it does not remove the last character in happy. Therefore, Option C is correct.',
  "C. The Period class creates immutable objects and is usually used to add/subtract from a LocalDate or LocalDateTime object. It allows creating date, week, month, or year periods. Since it cannot be used for time, Option C is the answer.",
  "D. Line 4 creates a StringBuilder of length 5. Pay attention to the substring() method StringBuilder. It returns a String with the value 321. It does not change the StringBuilder itself. Then line 6 is retrieving the second indexed element from that unchanged value, which is 4. Therefore, Option D is correct.",
  "B. This one is tricky. There are two remove() methods available on ArrayList. One removes an element by index and takes an int parameter. The other removes an element by value. Due to the generics, it takes an Integer parameter in this example. Since the int primitive is a better match, the element with index 2 is removed, which is the value of 1. Therefore, Option B is correct.",
  "C. ArrayList has a size() method rather than a length() method, making Option A incorrect. The charAt() and length() methods are declared on both String and StringBuilder. However, the insert() method is only declared on a StringBuilder and not a String. Therefore, Option C is correct.",
  "C. The minusNanos and plusNanos are the smallest units available, making Option C correct. Option D is incorrect because LocalTime is not that granular. Note that while you can add milliseconds by adding many nanoseconds, there isn’t a method for it. A millisecond is also larger than a nanosecond. Finally, don’t be tricked by the fact that LocalTime is immutable. You can still add time; it just gets returned as a different object.",
  "D. When creating a formatter object, remember that MM represents month while mm represents minute. Since there are not minutes defined on a LocalDate object, the code throws an UnsupportedTemporalTypeException. You don’t need to know the name of the exception, but you do need to know that an exception is thrown.",
  "D. There are two signatures for the replace() method. One takes two char parameters. The other signature takes a CharSequence. Both String and StringBuilder implement this interface. This makes all three alternatives correct, and Option D is correct.",
  "C. Pay attention to the data types. The print() method is looping through a list of String objects. However, the Predicate expects an Integer. Since these don’t match, the if statement does not compile.",
  "D. Line 12 creates an empty ArrayList. While it isn’t recommended to use generics on only the left side of the assignment operator, this is allowed. It just gives a warning. Lines 13 and 14 add two elements. Line 15 resets to an empty ArrayList. Line 16 adds an element, so now we have an ArrayList of size 1. Line 17 attempts to remove the element at index 1. Since Java uses zero-based indexes, there isn’t an element there and the code throws an IndexOutOfBoundsException.",
  "C. The declaration of witch is incorrect. It tries to store a char into a String variable reference. This does not compile, making Option C correct. If this was fixed, the answer would be Option B.",
  "C. The Java 8 date and time classes are immutable. This means they do not contain setter methods and the code does not compile."
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
    answerArray: mapAnswers(qz["answers"], a9[index]),
    explain: a9[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
