const qzString = [
  {
    title:
      "Which of the following fills in the blank so that the code outputs one line but uses a poor practice?",
    code:
      '<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class Cheater {</code>\n<code>   int count = 0;</code>\n<code>   public void sneak(Collection&lt;String&gt; coll) {</code>\n<code>      coll.stream().________________________;</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Cheater c = new Cheater();</code>\n<code>      c.sneak(Arrays.asList("weasel"));</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "peek(System.out::println)",
      "peek(System.out::println).findFirst()",
      "peek(r -> System.out.println(r)).findFirst()",
      "peek(r -> {count++; System.out.println(r); }).findFirst()"
    ]
  },
  {
    title: "Which can fill in the blank to have the code print true?",
    code:
      "<code>Stream&lt;Integer&gt; stream = Stream.iterate(1, i ‐&gt; i+1);</code>\n<code>boolean b = stream.____________(i -&gt; i &gt; 5);</code>\n<code>System.out.println(b);</code>",
    answers: ["anyMatch", "allMatch", "noneMatch", "None of the above"]
  },
  {
    title:
      "On a DoubleStream, how many of the methods average(), count(), and sum() return an OptionalDouble?",
    code: null,
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "",
    code:
      '<code>Stream&lt;String&gt; stream = Stream.of("base", "ball");</code>\n<code>stream._____________(s -&gt; s.length()).forEach(System.out::print);</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What is the result of the following?",
    code:
      "<code>IntStream s = IntStream.empty();</code>\n<code>System.out.print(s.average().getAsDouble());</code>",
    answers: [
      "The code prints 0.",
      "The code prints 0.0.",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of these stream pipeline operations takes a Predicate as a parameter and returns an Optional?",
    code: null,
    answers: ["anyMatch()", "filter()", "findAny()", "None of the above"]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>List&lt;Double&gt; list = new ArrayList&lt;&gt;();</code>\n<code>list.add(5.4);</code>\n<code>list.add(1.2);</code>\n<code>Optional&lt;Double&gt; opt = list.stream().sorted().findFirst();</code>\n<code>System.out.println(opt.get() + " " + list.get(0));</code>',
    answers: ["1.2 1.2", "1.2 5.4", "5.4 5.4", "None of the above"]
  },
  {
    title: "Fill in the blank so this code prints 8.0.",
    code:
      "<code>IntStream stream = IntStream.of(6, 10);</code>\n<code>LongStream longs = stream.mapToLong(i -&gt; i);</code>\n<code>System.out.println(____________);</code>",
    answers: [
      "longs.average().get()",
      "longs.average().getAsDouble()",
      "longs.getAverage().get()",
      "longs.getAverage().getAsDouble()"
    ]
  },
  {
    title: "",
    code:
      "<code>Stream&lt;Character&gt; chars = Stream.of(</code>\n<code>   'o', 'b', 's', 't', 'a', 'c', 'l', 'e');</code>\n<code>chars.map(c -&gt; c).collect(Collectors.____________ );</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What does the following output?",
    code:
      "<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class MapOfMaps {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();</code>\n<code>      map.put(9, 3);</code>\n<code>      Map&lt;Integer, Integer&gt; result = map.stream().map((k,v) ‐&gt; (v,k));</code>\n<code>      System.out.println(result.keySet().iterator().next());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "3",
      "9",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "",
    code: null,
    answers: ["I", "I and II", "I and III", "None of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>Stream&lt;String&gt; s = Stream.of("speak", "bark", "meow", "growl");</code>\n<code>BinaryOperator&lt;String&gt; merge = (a, b) ‐&gt; a;</code>\n<code>Map&lt;Integer, String&gt; map = s.collect(toMap(String::length, k ‐&gt; k, merge));</code>\n<code>System.out.println(map.size() + " " + map.get(4));</code>',
    answers: ["2 bark", "2 meow", "4 bark", "None of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   package reader;</code>\n<code>2:   import java.util.stream.*;</code>\n<code>3:</code>\n<code>4:   public class Books {</code>\n<code>5:      public static void main(String[] args) {</code>\n<code>6:         IntegerStream pages = IntegerStream.of(200, 300);</code>\n<code>7:         IntegerSummaryStatistics stats = pages.summaryStatistics();</code>\n<code>8:         long total = stats.getSum();</code>\n<code>9:         long count = stats.getCount();</code>\n<code>10:        System.out.println(total + "-" + count);</code>\n<code>11:     }</code>\n<code>12:  }</code>',
    answers: [
      "500-0",
      "500-2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      'If this method is called with Stream.of("hi"), how many lines are printed?',
    code:
      "<code>public static void print(Stream&lt;String&gt; stream) {</code>\n<code>   Consumer&lt;String&gt; print = System.out::println;</code>\n<code>   stream.peek(print)</code>\n<code>         .peek(print)</code>\n<code>         .map(s -&gt; s)</code>\n<code>         .peek(print)</code>\n<code>         .forEach(print);</code>\n<code>}</code>",
    answers: [
      "Three",
      "Four",
      "The code compiles but does not output anything.",
      "The code does not compile."
    ]
  },
  {
    title: "What is true of the following code?",
    code:
      "<code>Stream&lt;Character&gt; stream = Stream.of('c', 'b', 'a');       // z1</code>\n<code>stream.sorted().findAny().ifPresent(System.out::println);  // z2</code>",
    answers: [
      "It is guaranteed to print the single character a.",
      "It can print any single character of a, b, or c.",
      "It does not compile because of line z1.",
      "It does not compile because of line z2."
    ]
  },
  {
    title:
      "Suppose you have a stream pipeline where all the elements are of type String. Which of the following can be passed to the intermediate operation sorted()?",
    code: null,
    answers: [
      "(s,t) -> s.length() - t.length()",
      "String::isEmpty",
      "Both of these",
      "Neither of these"
    ]
  },
  {
    title:
      "Fill in the blanks so that both methods produce the same output for all inputs.",
    code:
      '<code>private static void longer(Optional&lt;Boolean&gt; opt) {</code>\n<code>   if (opt.____________())</code>\n<code>      System.out.println("run: " + opt.get());</code>\n<code>}</code>\n<code>private static void shorter(Optional&lt;Boolean&gt; opt) {</code>\n<code>   opt.map(x -&gt; "run: " + x).____________(System.out::println);</code>\n<code>}</code>',
    answers: [
      "isNotNull, isPresent",
      "ifPresent, isPresent",
      "isPresent, forEach",
      "isPresent, ifPresent"
    ]
  },
  {
    title: "What is the output of this code?",
    code:
      "<code>Stream&lt;Boolean&gt; bools = Stream.iterate(true, b ‐&gt; !b);</code>\n<code>Map&lt;Boolean, List&lt;Boolean&gt;&gt; map = bools.limit(1)</code>\n<code>    .collect(partitioningBy(b -&gt; b));</code>\n<code>System.out.println(map);</code>",
    answers: [
      "{true=[true]}",
      "{false=null, true=[true]}",
      "{false=[], true=[true]}",
      "None of the above"
    ]
  },
  {
    title: "What does the following output?",
    code:
      '<code>Set&lt;String&gt; set = new HashSet&lt;&gt;();</code>\n<code>set.add("tire-");</code>\n<code>List&lt;String&gt; list = new LinkedList&lt;&gt;();</code>\n<code>Deque&lt;String&gt; queue = new ArrayDeque&lt;&gt;();</code>\n<code>queue.push("wheel-");</code>\n<code>Stream.of(set, list, queue)</code>\n<code>   .flatMap(x -&gt; x.stream())</code>\n<code>   .forEach(System.out::print);</code>',
    answers: [
      "[tire-][wheel-]",
      "tire-wheel-",
      "None of the above.",
      "The code does not compile."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>Stream&lt;String&gt; s = Stream.of("over the river",</code>\n<code>    "through the woods",</code>\n<code>    "to grandmother\'s house we go");</code>\n<code>s.filter(n -&gt; n.startsWith("t"))</code>\n<code> .sorted(Comparator::reverseOrder)</code>\n<code> .findFirst()</code>\n<code> .ifPresent(System.out::println);</code>',
    answers: [
      "over the river",
      "through the woods",
      "to grandmother's house we go ",
      "None of the above"
    ]
  },
  {
    title: "Which fills in the blank so the code is guaranteed to print 1?",
    code:
      "<code>Stream&lt;Integer&gt; stream = Stream.of(1, 2, 3);</code>\n<code>System.out.println(stream.____________);</code>",
    answers: ["findAny()", "first()", "min()", "None of the above"]
  },
  {
    title: "",
    code:
      "<code>private static void spot(____________ x) {</code>\n<code>   x.filter(y -&gt; ! y.isEmpty())</code>\n<code>     .map(y -&gt; 8)</code>\n<code>     .ifPresent(System.out::println);</code>\n<code>}</code>",
    answers: ["I", "IV", "II and III", "II and IV"]
  },
  {
    title: "Which can fill in the blank to have the code print true?",
    code:
      "<code>Stream&lt;Integer&gt; stream = Stream.iterate(1, i ‐&gt; i);</code>\n<code>boolean b = stream.____________(i -&gt; i &gt; 5);</code>\n<code>System.out.println(b);</code>",
    answers: ["anyMatch", "allMatch", "noneMatch", "None of the above"]
  },
  {
    title: "What collector turns the stream at left to the Map at right?",
    code: null,
    answers: [
      "grouping()",
      "groupingBy()",
      "partitioning()",
      "partitioningBy()"
    ]
  },
  {
    title: "Which fills in the blank for this code to print 667788?",
    code:
      "<code>IntStream ints = IntStream.empty();</code>\n<code>IntStream moreInts = IntStream.of(66, 77, 88);</code>\n<code>Stream.of(ints, moreInts).____________(x -&gt; x).forEach(System.out::print);</code>",
    answers: ["flatMap", "flatMapToInt", "map", "None of the above"]
  },
  {
    title:
      "Fill in the blank so this code prints 8.0. Note that it must not print OptionalDouble[8.0].",
    code:
      "<code>LongStream stream = LongStream.of(6, 10);</code>\n<code>LongSummaryStatistics stats = stream.summaryStatistics();</code>\n<code>System.out.println(____________);</code>",
    answers: [
      "stats.avg()",
      "stats.average()",
      "stats.average().get()",
      "stats.getAverage()"
    ]
  },
  {
    title:
      "Which can independently fill in the blank to output No dessert today?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Dessert {</code>\n<code>  public static void main(String[] yum) {</code>\n<code>    eatDessert(Optional.of("Cupcake"));</code>\n<code>  }</code>\n<code><span epub:type="pagebreak" id="Page_264"></span>  private static void eatDessert(Optional&lt;String&gt; opt) {</code>\n<code>     System.out.println(opt.____________);</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      'get("No dessert today")',
      'orElse("No dessert today")',
      'orElseGet(() -> "No dessert today")',
      "None of the above"
    ]
  },
  {
    title: "What does the following output?",
    code:
      "<code>Stream&lt;Character&gt; chars = Stream.generate(() ‐&gt; 'a');</code>\n<code>chars.filter(c -&gt; c &lt; 'b')</code>\n<code>     .sorted()</code>\n<code>     .findFirst()</code>\n<code>     .ifPresent(System.out::print);</code>",
    answers: [
      "a",
      "The code runs successfully without any output.",
      "The code enters an infinite loop.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "",
    code:
      "<code>LongStream stream = LongStream.of(9);</code>\n<code>stream.____________(p -&gt; p).forEach(System.out::print);</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Suppose you have a stream with one element and the code  stream.xxxx.forEach(System.out::println). Filling in xxxx from  top to bottom in the table, how many elements can be printed out?",
    code: null,
    answers: [
      "Zero or one, zero or more, exactly one",
      "Zero or one, exactly one, zero or more",
      "Zero or one, zero or more, zero or more",
      "Exactly one, zero or more, zero or more"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>Stream&lt;Character&gt; stream = Stream.of('c', 'b', 'a');</code>\n<code>System.out.println(stream.sorted().findFirst());</code>",
    answers: [
      "It is guaranteed to print the single character a.",
      "It can print any single character of a, b, or c.",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>public class Compete {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Integer&gt; is = Stream.of(8, 6, 9);</code>\n<code>      Comparator&lt;Integer&gt; c = (a, b) ‐&gt; a ‐ b;</code>\n<code>      is.sort(c).forEach(System.out::print);</code>\n<code>  }</code>\n<code>}</code>",
    answers: [
      "689",
      "986",
      "The code does not compile",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>class Ballot {</code>\n<code>   private String name;</code>\n<code>   private int judgeNumber;</code>\n<code>   private int score;</code>\n<code>&nbsp;</code>\n<code>   public Ballot(String name, int judgeNumber, int score) {</code>\n<code>      this.name = name;</code>\n<code>      this.judgeNumber = judgeNumber;</code>\n<code>      this.score = score;</code>\n<code>   }</code>\n<code>   // all getters and setters</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code><span epub:type="pagebreak" id="Page_266"></span>public class Speaking {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Ballot&gt; ballots = Stream.of(</code>\n<code>         new Ballot("Mario", 1, 10),</code>\n<code>         new Ballot("Christina", 1, 8),</code>\n<code>         new Ballot("Mario", 2, 9),</code>\n<code>         new Ballot("Christina", 2, 8)</code>\n<code>      );</code>\n<code>&nbsp;</code>\n<code>      Map&lt;String, Integer&gt; scores = ballots.collect(</code>\n<code>         groupingBy(Ballot::getName, summingInt(Ballot::getScore))); // w1</code>\n<code>      System.out.println(scores.get("Mario"));</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "The code prints 2.",
      "The code prints 19.",
      "The code does not compile due to line w1.",
      "The code does not compile due to a different line."
    ]
  },
  {
    title: "Which can fill in the blank so this code outputs true?",
    code:
      "<code>import java.util.function.*;</code>\n<code>import java.util.stream.*;</code>\n<code>&nbsp;</code>\n<code>public class HideAndSeek {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Stream&lt;Boolean&gt; hide = Stream.of(true, false, true);</code>\n<code>      boolean found = hide.filter(b -&gt; b).__________();</code>\n<code>      System.out.println(found);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Only anyMatch",
      "Only allMatch",
      "Both anyMatch and allMatch",
      "The code does not compile with any of these options."
    ]
  },
  {
    title: "What does the following output?",
    code:
      '<code>Set&lt;String&gt; set = new HashSet&lt;&gt;();</code>\n<code>set.add("tire-");</code>\n<code>List&lt;String&gt; list = new LinkedList&lt;&gt;();</code>\n<code>Deque&lt;String&gt; queue = new ArrayDeque&lt;&gt;();</code>\n<code>queue.push("wheel-");</code>\n<code><span epub:type="pagebreak" id="Page_267"></span>Stream.of(set, list, queue)</code>\n<code>   .flatMap(x -&gt; x)</code>\n<code>   .forEach(System.out::print);</code>',
    answers: [
      "[tire-][wheel-]",
      "tire-wheel-",
      "None of the above",
      "The code does not compile."
    ]
  },
  { title: "", code: null, answers: ["I", "II", "I and II", "I, II, and III"] },
  {
    title:
      "Which line can replace line 18 without changing the output of the program?",
    code:
      "<code>1:   class Runner {</code>\n<code>2:      private int numberMinutes;</code>\n<code>3:      public Runner(int n) {</code>\n<code>4:         numberMinutes = n;</code>\n<code>5:      }</code>\n<code>6:      public int getNumberMinutes() {</code>\n<code>7:         return numberMinutes;</code>\n<code>8:      }</code>\n<code>9:      public boolean isFourMinuteMile() {</code>\n<code>10:        return numberMinutes &lt; 4*60;</code>\n<code>11:     }</code>\n<code>12:   }</code>\n<code>13:   public class Marathon {</code>\n<code>14:     public static void main(String[] args) {</code>\n<code>15:        Stream&lt;Runner&gt; runners = Stream.of(new Runner(250),</code>\n<code>16:           new Runner(600), new Runner(201));</code>\n<code>17:        long count = runners</code>\n<code>18:             .filter(Runner::isFourMinuteMile)</code>\n<code>19:             .count();</code>\n<code>20:        System.out.println(count);</code>\n<code>21:    }</code>\n<code>22:  }</code>",
    answers: [
      ".map(Runner::isFourMinuteMile)",
      "\n\n.mapToBool(Runner::isFourMinuteMile) \n\n    .filter(b -> b == true)\n",
      ".mapToBoolean(Runner::isFourMinuteMile)     .filter(b -> b == true)",
      "None of the above"
    ]
  },
  {
    title: "Which method is not available on the IntSummaryStatistics class?",
    code: null,
    answers: [
      "getCountAsLong()",
      "getMax()",
      "toString()",
      "None of the above—all three methods are available."
    ]
  },
  {
    title: "Which can fill in the blank so this code outputs Caught it?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Catch {</code>\n<code><span epub:type="pagebreak" id="Page_269"></span>   public static void main(String[] args) {</code>\n<code>      Optional opt = Optional.empty();</code>\n<code>      try {</code>\n<code>         apply(opt);</code>\n<code>      } catch (IllegalArgumentException e) {</code>\n<code>         System.out.println("Caught it");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   private static void apply(Optional&lt;Exception&gt; opt) {</code>\n<code>      opt.__________(IllegalArgumentException::new);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "orElse",
      "orElseGet",
      "orElseThrow",
      "None of the above. The main() method does not compile."
    ]
  },
  {
    title:
      "A developer tries to rewrite a method that uses flatMap() without using that intermediate operator. Which pair of method calls shows the withoutFlatMap() method is not equivalent to the withFlatMap() method?",
    code:
      '<code>public static void main(String[] args) {</code>\n<code>   List&lt;String&gt; list = new LinkedList&lt;&gt;();</code>\n<code>   Deque&lt;String&gt; queue = new ArrayDeque&lt;&gt;();</code>\n<code>   queue.push("all queued up");</code>\n<code>   queue.push("last");</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>private static void withFlatMap(Collection&lt;?&gt; coll) {</code>\n<code>   Stream.of(coll)</code>\n<code>      .flatMap(x -&gt; x.stream())</code>\n<code>      .forEach(System.out::print);</code>\n<code>   System.out.println();</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>private static void withoutFlatMap(Collection&lt;?&gt; coll) {</code>\n<code>   Stream.of(coll)</code>\n<code>      .filter(x -&gt; !x.isEmpty())</code>\n<code>      .map(x -&gt; x)</code>\n<code>      .forEach(System.out::print);</code>\n<code>   System.out.println();</code>\n<code>}</code>',
    answers: [
      "withFlatMap(list); withoutFlatMap(list);",
      "withFlatMap(queue); withoutFlatMap(queue);",
      "Both pairs disprove the claim.",
      "Neither pair disproves this claim."
    ]
  }
];

const a15 = [
  "D. Option A is incorrect because it doesn’t print out one line. The peek() method is an intermediate operation. Since there is no terminal operation, the stream pipeline is not executed, so the peek() method is never executed. Options B and C are incorrect because they correctly output one line using a method reference and lambda, respectively, and don’t use any bad practices. Option D is the answer. It does output one line. However, it is bad practice to have a peek() method that has side effects like modifying a variable.",
  "A. This code generates an infinite stream of integers: 1, 2, 3, 4, 5, 6, 7, etc. The Predicate checks if the element is greater than 5. With anyMatch(), the stream pipeline ends once element 6 is hit and the code prints true. For both the allMatch() and noneMatch() operators, they see that the first element in the stream does not match and the code prints false. Therefore, Option A is correct.",
  "B. Only the average() method returns an OptionalDouble. This reflects that it doesn’t make sense to calculate an average when you don’t have any numbers. By contrast, counting without any numbers gives the long number 0 and summing gives the double number 0.0. Since only one method matches the return type, Option B is correct.",
  "C. The map() method can fill in the blank. The lambda converts a String to an int and Java uses autoboxing to turn that into an Integer. The mapToInt() method can also fill in the blank and Java doesn’t even need to autobox. There isn’t a mapToObject() in the stream API. Note there is a similarly named mapToObj() method on IntStream. Since both map() and mapToInt() work here, Option C is correct.",
  "D. The average() method returns an OptionalDouble. This interface has a getAsDouble() method rather than a get() method, so the code does compile. However, the stream is empty, so the optional is also empty. When trying to get the value, the code throws a NoSuchElementException, making Option D correct.",
  "D. Option A is incorrect because anyMatch() returns a boolean. Option B is incorrect because filter() is an intermediate operation, not a terminal operation, and therefore returns a Stream. Both of these methods do take a Predicate as a parameter. While findAny() does return an Optional, it doesn’t take any parameters. Therefore, Option C is incorrect, and Option D is the answer.",
  "B. This code builds a list with two elements. It then uses that list as a source for the stream, sorts the stream as it goes by, and grabs the first sorted element. This does not change the original list. The first element in the sorted stream is 1.2, but the first element of list remains as 5.4. This makes Option B correct.",
  "B. Primitive streams, like LongStream, declare an average() method, while summary statistics classes, like LongSummaryStatistics, declare a getAverage() method, making Options C and D incorrect. The average() method returns an OptionalDouble object, which declares a getAsDouble() method rather than a get() method. Therefore, Option A is incorrect, and Option B is correct.",
  "B. Since the result of the collect() is not stored in a variable or used in any way, all the code needs to do is compile. There is no Collectors.toArrayList() method. If you want to specify an ArrayList, you can call Collectors.toCollection(ArrayList::new). The Collectors.toList() method does in fact exist and compile. While there is a Collectors.toMap() method, it requires two parameters to specify the key and value functions, respectively. Since only one can compile, Option B is correct.",
  "C. As tempting as it is, you can’t actually convert a Map into a Stream directly, which means you can’t call the map() method on it either. However, you can build a Stream out of the keys or values or key/value pairs. Since this code doesn’t compile, Option C is correct.",
  "D. I is incorrect because isPresent() returns false for an empty Optional. II is incorrect because of() throws a NullPointerException if you try to pass a null reference. III doesn’t throw an exception as the ofNullable() is designed to allow a null reference. However, it returns false because no value is present. Since none of the choices are correct, Option D is the answer.",
  "A. This code does compile. Remember that imports are implied, including the static import for Collectors. The collector tries to use the number of characters in each stream element as the key in a map. This works fine for the first two elements, speak and bark, because they are of length 5 and 4, respectively. When it gets to meow, it sees another key of 4. The merge function says to use the first one, so it chooses bark for the value. Similarly, growl is 5 characters, but the first value of speak is used. There are only two distinct lengths, so Option A is correct.",
  "C. For the primitive stream that contains the int primitives, the interface names are incorrect. They should be IntStream and IntSummaryStatistics, making Option C correct. If this was fixed, Option B would be the answer.",
  "B. This code does compile. As an intermediate operation, you are allowed to call peek() many times in a stream pipeline. You can even call it multiple times in a row. While it is common to write System.out::println directly as a parameter to peek(), nothing prevents you from creating a Consumer variable. Since the forEach() method also takes a Consumer, we can reuse it. The three peek() intermediate operations and one forEach() operation total four lines of output. The map() operation could be omitted since it simply passes the input through.",
  "B. Character objects are allowed in a Stream, so line z1 compiles, making Option C incorrect. Line z2 also compiles since findAny() returns an Optional and ifPresent() is declared on Optional. Therefore, Option D is also incorrect. Now let’s look at the Stream. The source has three elements. The intermediate operation sorts the elements and then we request one from findAny(). The findAny() method is not guaranteed to return a specific element. Since we are not using parallelization, it is highly likely that the code will print a. However, you need to know this is not guaranteed, making Option B the answer.",
  "A. The sorted() method takes an optional Comparator as the parameter, which takes two String parameters and returns an int. Option A is correct because the lambda implements this interface. Option B is incorrect because the method reference doesn’t take any parameters, nor does it return an int.",
  "D. The Optional class has an isPresent() method that doesn’t take any parameters. It returns a boolean and is commonly used in if statements. There is also an ifPresent() method that takes a Consumer parameter and runs it only if the Optional is non-empty. The methods isNotNull() and forEach()are not declared in Optional. Therefore, Option D is correct.",
  "C. The first intermediate operation, limit(1), turns the infinite stream into a stream with one element: true. The partitioningBy() method returns a map with two keys, true and false, regardless of whether any elements actually match. If there are no matches, the value is an empty list, making Option C correct.",
  "B. The flatMap() method is used to turn a stream of streams into a one-dimensional stream. This means it gets rid of the empty list and flattens the other two. Option A is incorrect because this is the output you’d get using the regular map() method. Option B is correct because it flattens the elements. Notice how it doesn’t matter that all three elements are different types of Collection implementations.",
  "D. The sorted() method allows an optional Comparator to be passed as a reference. However, Comparator.reverseOrder() does not implement the Comparator interface. It takes zero parameters instead of the required two. Since it cannot be used as a method reference, the code does not compile, and Option D is correct.",
  "D. Option A is incorrect because the findAny() might not return 1. The result could be any of the three numbers. Option B is incorrect because there is no first() method available as a terminal operation. Option C is tempting because there is a min() method. However, since we are working with a Stream, this method requires a Comparator as a parameter. Therefore, Option D is the answer.",
  "C. List doesn’t have a filter() method, so Option A is incorrect. Stream does have filter() and map() methods. However, Stream doesn’t have an ifPresent() method. This makes IV incorrect, so Options B and D are incorrect. Both Collection and String have an isEmpty() method, so either can be used with the Optional, making Option C the answer.",
  "D. This code generates an infinite stream of the number 1. The Predicate checks if the element is greater than 5. This will never be true. With allMatch(), the stream pipeline ends after checking the first element. It doesn’t match, so the code prints false. Both anyMatch() and noneMatch() keep checking and don’t find any matches. However, they don’t know if a future stream element will be different, so the code executes infinitely until the process is terminated. Therefore, Option D is correct.",
  "D. Both Collectors.groupingBy() and Collectors.partitioningBy() are useful for turning a stream into a Map. The other two methods do not exist. However, when using a condition, you should use partitioningBy() as it automatically groups using a Boolean key. Therefore, Option D is correct.",
  "B. Option A is incorrect because we are working with primitives rather than objects. Option C compiles but outputs the stream references rather than the contents. Option B is correct because it flattens the int primitives into one stream.",
  "D. The summary statistics classes provide getters in order to access the data. The getAverage() method returns a double and not an OptionalDouble. Option D is the only option to compile.",
  "D. Option A doesn’t compile because the get() method on Optional doesn’t take any parameters. Options B and C do compile, but both print Cupcake since the Optional is not empty. Therefore, Option D is correct.",
  "C. The first line generates an infinite stream. The stream pipeline has a filter that lets all these elements through. Since sorted() requires all the elements be available to sort, it never completes, making Option C correct.",
  "A. The mapToDouble() method compiles. However, it converts 9 into 9.0 rather than the single digit 9. The mapToInt() method does not compile because a long cannot be converted into an int without casting. The mapToLong() method is not available on LongStream so it does not compile. It is available on DoubleStream, IntStream, and Stream implementations. Since none of the options outputs the single digit 9, Option A is correct.",
  "A. The filter() method either passes along a given element or doesn’t, making Option D incorrect. The flatMap() method doesn’t pass along any elements for empty streams. For non-empty streams, it flattens the elements, allowing it to return zero or more elements. This makes Option B incorrect. Finally, the map() method applies a one-to-one function for each element. It has to return exactly one element, so Option A is the correct answer.",
  "D. First, we sort the stream. Option B is incorrect because findFirst() is guaranteed to return the first element. However, the findFirst() method returns an Optional. Therefore, the output of this code is Optional[a] rather than the letter a, making Option D correct.",
  "C. There is not a stream pipeline method called sort(). There is one called sorted(). Since the code does not compile, Option C is correct. If this was fixed, Option A would be correct since the Comparator sorts in ascending order.",
  "B. This code compiles. It creates a stream of Ballot objects. Then it creates a map with the contestant’s name as the key and the sum of the scores as the value. For Mario, this is 10 + 9, or 19, so Option B is correct.",
  "D. Both anyMatch() and allMatch() take a Predicate as a parameter. This code does not compile because the parameter is missing.",
  "D. The flatMap() method works with streams rather than collections. The code does not compile because the x is not a stream, making Option D correct. If this was fixed, Option B would be the answer.",
  "C. The groupingBy() collector always returns a Map (or a specific implementation class of Map), so III can’t be right. The other two are definitely possible. To get I, you can group using a Function that returns an Integer such as s.collect(Collectors .groupingBy(String::length)). To get II, you need to group using a Function that returns a Boolean and specify the type, such as s.collect(Collectors .groupingBy(String::isEmpty, Collectors.toSet())). Notice that autoboxing is used for both. Therefore, Option C is correct.",
  "D. There is no built-in method to map a value to a boolean primitive. Therefore, Options B and C don’t even compile, so they are incorrect. Option A does compile as it maps a Runner to a Boolean. However, it doesn’t actually filter() the stream to eliminate any values, so the output is not the same. It prints 3 instead of 1. None of these are correct, making Option D the answer.",
  "A. Option A is the answer because there is a getCount() method that returns a long rather than a method named getCountAsLong(). Option B is incorrect because there is in fact a getMax() method. Option C is incorrect because toString() is declared on Object, which means it is inherited by all classes.",
  "C. The main() method has warnings, but it does compile, making Option D incorrect. The warnings are both about not declaring the generic type for Optional. Option A does not compile because the orElse() method expects an Exception as the alternate value passed as a parameter. IllegalArgumentException::new is a Supplier instead. Options B and C both compile as both methods expect a Supplier as the parameter. However, orElseGet() simply returns the exception from the method rather than throwing it. Option C actually throws the exception the Supplier created and is the correct answer.",
  "B. Option A happens to output the same result for both pairs. It outputs a blank line in withFlatMap() because empty streams are removed and in withoutFlatMap() because the filter() method removes the empty list. Option B outputs different results. The withFlatMap() method outputs lastall queued up since it flattens the streams. By contrast, the withoutFlatMap() method outputs [last, all queued up] since it leaves the structure intact. Since the output is different. Option B produces different results so it is the answer."
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
    answerArray: mapAnswers(qz["answers"], a15[index]),
    explain: a15[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
