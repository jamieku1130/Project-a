const qzString = [
  {
    title:
      "Fill in the blanks: The____________ functional interface does not take any inputs, while the____________ functional interface does not return any data.",
    code: null,
    answers: [
      "IntConsumer, LongSupplier",
      "IntSupplier, Function",
      "Supplier, DoubleConsumer",
      "UnaryOperator, Consumer"
    ]
  },
  {
    title:
      "Which functional interface takes a long value as an input argument and has an accept() method?",
    code: null,
    answers: ["LongConsumer", "LongFunction", "LongPredicate", "LongSupplier"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package beach;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>class Tourist {</code>\n<code>   public Tourist(double distance) {</code>\n<code>      this.distance = distance;</code>\n<code>   }</code>\n<code>   public double distance;</code>\n<code>}</code>\n<code>public class Lifeguard {</code>\n<code>   private void saveLife(Predicate&lt;Tourist&gt; canSave, Tourist tourist) {</code>\n<code>      System.out.print(canSave.test(tourist) ? "Saved" : "Too far");  // y1</code>\n<code>   }</code>\n<code>   public final static void main(String... sand) {</code>\n<code>      new Lifeguard().saveLife(s -&gt; s.distance&lt;4, new Tourist(2));  // y2</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Saved",
      "Too far",
      "The code does not compile because of line y1.",
      "The code does not compile because of line y2."
    ]
  },
  {
    title:
      "Which of the following statements about DoubleSupplier and Supplier<Double> is  not true?",
    code: null,
    answers: [
      "Both are functional interfaces.",
      "Lambdas for both can return a double value.",
      "Lambdas for both cannot return a null value.",
      "One supports a generic type, the other does not."
    ]
  },
  {
    title:
      "Which functional interface, when filled into the blank, allows the class to compile?",
    code:
      "<code>package space;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Asteroid {</code>\n<code>   public void mine(____________ lambda) {</code>\n<code>      // TODO: Apply functional interface</code>\n<code>   }</code>\n<code>   public static void main(String[] debris) {</code>\n<code>      new Asteroid().mine((s,p) -&gt; s+p);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "BiConsumer<Integer,Double>",
      "BiFunction<Integer,Double,Double>",
      "BiFunction<Integer,Integer,Double>",
      "Function<Integer,Double>"
    ]
  },
  {
    title:
      "Assuming the proper generic types are used, which lambda expression cannot be assigned to a ToDoubleBiFunction functional interface reference?",
    code: null,
    answers: [
      "(Integer a, Double b) -> {int c; return b;}",
      "(h,i) -> (long)h",
      "(String u, Object v) -> u.length()+v.length()",
      "(x,y) -> {int z=2; return y/z;}"
    ]
  },
  {
    title:
      "Which of the following is not a functional interface in the java.util.function package?",
    code: null,
    answers: [
      "BiPredicate",
      "DoubleUnaryOperator",
      "ObjectDoubleConsumer",
      "ToLongFunction"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package zoo;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class TicketTaker {</code>\n<code>   private static int AT_CAPACITY = 100;</code>\n<code>   public int takeTicket(int currentCount, IntUnaryOperator&lt;Integer&gt; counter) {</code>\n<code>      return counter.applyAsInt(currentCount);</code>\n<code>   }</code>\n<code>   public static void main(String...theater) {</code>\n<code>      final TicketTaker bob = new TicketTaker();</code>\n<code>      final int oldCount = 50;</code>\n<code>      final int newCount = bob.takeTicket(oldCount,t -&gt; {</code>\n<code>         if(t&gt;AT_CAPACITY) {</code>\n<code>            throw new RuntimeException("Sorry, max has been reached");</code>\n<code>         }</code>\n<code>         return t+1;</code>\n<code>      });</code>\n<code>      System.out.print(newCount);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "51",
      "The code does not compile because of lambda expression.",
      "The code does not compile for a different reason.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title: "Which functional interface returns a primitive value?",
    code: null,
    answers: ["BiPredicate", "CharSupplier", "LongFunction", "UnaryOperator"]
  },
  {
    title:
      "Which functional interface, when entered into the blank below, allows the class to compile?",
    code:
      '<code>package groceries;</code>\n<code>import java.util.*;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Market {</code>\n<code><span epub:type="pagebreak" id="Page_243"></span>   private static void checkPrices(List&lt;Double&gt; prices,</code>\n<code>          ____________scanner) {</code>\n<code>      prices.forEach(scanner);</code>\n<code>   }</code>\n<code>   public static void main(String[] right) {</code>\n<code>      List&lt;Double&gt; prices = Arrays.asList(1.2, 6.5, 3.0);</code>\n<code>      checkPrices(prices,</code>\n<code>            p -&gt; {</code>\n<code>               String result = p&lt;5 ? "Correct" : "Too high";</code>\n<code>               System.out.println(result);</code>\n<code>            });</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>}</code>',
    answers: [
      "Consumer",
      "DoubleConsumer",
      "Supplier<Double>",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following three functional interfaces is not equivalent to the other two?",
    code: null,
    answers: [
      "BiFunction<Double,Double,Double>",
      "BinaryOperator<Double>",
      "DoubleFunction<Double>",
      "None of the above. All three are equivalent."
    ]
  },
  {
    title: "Which lambda expression can be passed to the magic() method?",
    code:
      "<code>package show;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Magician {</code>\n<code>   public void magic(BinaryOperator&lt;Long&gt; lambda) {</code>\n<code>      lambda.apply(3L, 7L);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "magic((a) -> a)",
      "magic((b,w) -> (long)w.intValue())",
      "magic((c,m) -> {long c=4; return c+m;})",
      "magic((Integer d, Integer r) -> (Long)r+d)"
    ]
  },
  {
    title: "What is the output of the following program?",
    code:
      '<code>package ai;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Android {</code>\n<code>   public void wakeUp(Supplier supplier) { // d1</code>\n<code>      supplier.get();</code>\n<code>   }</code>\n<code>   public static void main(String... electricSheep) {</code>\n<code>      Android data = new Android();</code>\n<code>      data.wakeUp(() -&gt; System.out.print("Program started!")); // d2</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Program started!",
      "The code does not compile because of line d1 only.",
      "The code does not compile because of line d2 only.",
      "The code does not compile because of both lines d1 and d2."
    ]
  },
  {
    title:
      "Which statement about all UnaryOperator functional interfaces (generic and primitive) is correct?",
    code: null,
    answers: [
      "The input type must be compatible with the return type.",
      "Some of them take multiple arguments.",
      "They each take a generic argument.",
      "They each return a primitive value."
    ]
  },
  {
    title:
      "Starting with DoubleConsumer and going downward, fill in the missing values for the table.",
    code: null,
    answers: ["0, 1, 1, 1", "0, 2, 1, 2", "1, 1, 0, 2", "1, 1, 0, 1"]
  },
  {
    title:
      "Starting with DoubleConsumer and going downward, fill in the values for the table. For the choices below, assume R is a generic type.",
    code: null,
    answers: [
      "double, R, long, R",
      "R, int, long, R",
      "void, int, R, void",
      "void, R, long, void"
    ]
  },
  {
    title:
      "Fill in the blanks:  In the Collection interface, the method removeIf() takes a____________ , while the method forEach() takes a____________ .",
    code: null,
    answers: [
      "Function, Function",
      "Predicate, Consumer",
      "Predicate, Function",
      "Predicate, UnaryOperator"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package nesting;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Doll {</code>\n<code>   private int layer;</code>\n<code>   public Doll(int layer) {</code>\n<code>      super();</code>\n<code>      this.layer = layer;</code>\n<code>   }</code>\n<code>   public static void open(UnaryOperator&lt;Doll&gt; task, Doll doll) {</code>\n<code>      while((doll = task.accept(doll)) != null) {</code>\n<code>         System.out.print("X");</code>\n<code>      }</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_246"></span>   public static void main(String[] wood) {</code>\n<code>      open(s -&gt; {</code>\n<code>         if(s.layer&lt;=0) return null;</code>\n<code>         else return new Doll(s.layer);</code>\n<code>      }, new Doll(5));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "XXXXX",
      "The code does not compile because of the lambda expression.",
      "The code does not compile for a different reason.",
      "The code compiles but produces an infinite loop at runtime."
    ]
  },
  {
    title: "Which functional interface has a get() method?",
    code: null,
    answers: ["Consumer", "Function", "Supplier", "UnaryOperator"]
  },
  {
    title:
      "The following diagram shows input arguments being applied to three functional interfaces of unknown type. Which three functional interfaces, inserted in order from left to right, could be used to complete the diagram?",
    code: null,
    answers: [
      "\n\nDoubleBinaryOperator \n\nToDoubleBiFunction<Integer,Double> \n\nUnaryOperator<Integer>\n",
      "\n\nBinaryOperator<Double> \n\nBiFunction<Integer,Integer,Double> \n\nUnaryOperator<Integer>\n",
      "\n\nFunction<Double,Integer> \n\nBiFunction<Integer,Integer,Double> \n\nDoubleToIntFunction\n",
      "\n\nBiFunction<Integer,Double,Integer> \n\nBinaryOperator<Integer> \n\nIntUnaryOperator\n"
    ]
  },
  {
    title:
      "Which statement about functional interfaces and lambda expressions is not true?",
    code: null,
    answers: [
      "A lambda expression may be compatible with multiple functional interfaces.",
      "A lambda expression must be assigned to a functional interface when it is declared.",
      "A method can return a lambda expression in the form of a functional interface instance.",
      "The compiler uses deferred execution to skip determining whether a lambda expression compiles or not."
    ]
  },
  {
    title:
      "Which expression is compatible with the IntSupplier functional interface?",
    code: null,
    answers: [
      '() -> 1<10 ? "3" : 4',
      "() -> {return 1/0;}",
      "() -> return 4",
      "System.out::print"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package tps;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>class Boss {</code>\n<code>   private String name;</code>\n<code>   public Boss(String name) {</code>\n<code>      this.name = name;</code>\n<code>   }</code>\n<code>   public String getName() {return name.toUpperCase();}</code>\n<code>   public String toString() {return getName();}</code>\n<code>}</code>\n<code>public class Initech {</code>\n<code>   public static void main(String[] reports) {</code>\n<code>      final List&lt;Boss&gt; bosses = new ArrayList(8);</code>\n<code>      bosses.add(new Boss("Jenny"));</code>\n<code>      bosses.add(new Boss("Ted"));</code>\n<code>      bosses.add(new Boss("Grace"));</code>\n<code>      bosses.removeIf(s -&gt; s.equalsIgnoreCase("ted"));</code>\n<code>      System.out.print(bosses);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "[JENNY, GRACE]",
      "[tps.Boss@4218224c, tps.Boss@815f19a]",
      "The code does not compile because of the lambda expression.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title:
      "Which of the following method references can be passed to a method that takes Consumer<Object> as an argument?1.ArrayList::new2.String::new3.System.out::println",
    code: null,
    answers: ["I only", "I, II, and III", "I and III", "III only"]
  },
  {
    title:
      "Which of the following is a valid functional interface in the java.util.function package?",
    code: null,
    answers: [
      "FloatPredicate",
      "ToDoubleBiFunction",
      "UnaryIntOperator",
      "TriPredicate"
    ]
  },
  {
    title:
      "Which functional interface, when filled into the blank, prevents the class from compiling?",
    code:
      "<code>package morning;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Sun {</code>\n<code>   public static void dawn(____________ sunrise) {}</code>\n<code>   public void main(String... rays) {</code>\n<code>      dawn(s -&gt; s+1);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "DoubleUnaryOperator",
      "Function<String,String>",
      "IntToLongFunction",
      "UnaryOperator"
    ]
  },
  {
    title:
      "Which functional interface does not have the correct number of generic arguments?",
    code: null,
    answers: [
      "BiFunction<T,U,R>",
      "DoubleFunction<T,R>",
      "ToDoubleFunction<T>",
      "ToIntBiFunction<T,U>"
    ]
  },
  {
    title:
      "Which lambda expression, when filled into the blank, allows the code to compile?",
    code:
      "<code>package ballroom;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Dance {</code>\n<code>   public static Integer rest(BiFunction&lt;Integer,Double,Integer&gt; takeABreak) {</code>\n<code>      return takeABreak.apply(3, 10.2);</code>\n<code>   }</code>\n<code>   public static void main(String[] participants) {</code>\n<code>      rest(____________);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "(int n, double e) -> (int)(n+e)",
      "(n,w,e) -> System.out::print",
      "(s,w) -> 2*w",
      "(s,e) -> s.intValue()+e.intValue()"
    ]
  },
  {
    title:
      "Fill in the blank:  ____________is the only functional interface that does not involve double, int, or long.",
    code: null,
    answers: [
      "BooleanSupplier",
      "CharPredicate",
      "FloatUnaryOperator",
      "ShortConsumer"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package savings;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Bank {</code>\n<code>   private int savingsInCents;</code>\n<code>   private static class ConvertToCents {</code>\n<code>      static DoubleToIntFunction f = p -&gt; p*100;</code>\n<code>   }</code>\n<code>   public static void main(String... currency) {</code>\n<code>      Bank creditUnion = new Bank();</code>\n<code>      creditUnion.savingsInCents = 100;</code>\n<code>      double deposit = 1.5;</code>\n<code>&nbsp;</code>\n<code>      creditUnion.savingsInCents += ConvertToCents.f.applyAsInt(deposit);  // j1</code>\n<code><span epub:type="pagebreak" id="Page_250"></span>      System.out.print(creditUnion.savingsInCents);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "200",
      "250",
      "The code does not compile because of line j1.",
      "None of the above"
    ]
  },
  {
    title:
      "Which functional interface takes a double value and has a test() method?",
    code: null,
    answers: [
      "DoubleConsumer",
      "DoublePredicate",
      "DoubleUnaryOperator",
      "ToDoubleFunction"
    ]
  },
  {
    title:
      "Given the following class, how many lines contain compilation errors?",
    code:
      '<code>1:  package showtimes;</code>\n<code>2:  import java.util.*;</code>\n<code>3:  import java.util.function.*;</code>\n<code>4:  public class FindMovie {</code>\n<code>5:     private Function&lt;String&gt; printer;</code>\n<code>6:     protected FindMovie() {</code>\n<code>7:         printer = s -&gt; {System.out.println(s); return s;}</code>\n<code>8:     }</code>\n<code>9:     void printMovies(List&lt;String&gt; movies) {</code>\n<code>10:       movies.forEach(printer);</code>\n<code>11:    }</code>\n<code>12:    public static void main(String[] screen) {</code>\n<code>13:       List&lt;String&gt; movies = new ArrayList&lt;&gt;();</code>\n<code>14:       movies.add("Stream 3");</code>\n<code>15:       movies.add("Lord of the Recursion");</code>\n<code>16:       movies.add("Silence of the Lambdas");</code>\n<code>17:       new FindMovie().printMovies(movies);</code>\n<code>18:    }</code>\n<code>19: }</code>',
    answers: ["None. The code compiles as is.", "One", "Two", "Three"]
  },
  {
    title:
      "Which lambda expression cannot be assigned to a DoubleToLongFunction functional interface?",
    code: null,
    answers: [
      "a -> null==null ? 1 : 2L",
      "e -> (int)(10.0*e)",
      "(double m) -> {long p = (long)m; return p;}",
      "(Double s) -> s.longValue()"
    ]
  },
  {
    title:
      "Which of the following is not a functional interface in the java.util.function package?",
    code: null,
    answers: [
      "DoublePredicate",
      "LongUnaryOperator",
      "ShortSupplier",
      "ToIntBiFunction"
    ]
  },
  {
    title:
      "Which functional interface, when filled into the blank, allows the class to compile?",
    code:
      "<code>package sleep;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>class Sheep {}</code>\n<code>public class Dream {</code>\n<code>   int MAX_SHEEP = 10;</code>\n<code>   int sheepCount;</code>\n<code>   public void countSheep( ____________backToSleep) {</code>\n<code>      while(sheepCount&lt;MAX_SHEEP) {</code>\n<code>         // TODO: Apply lambda</code>\n<code>         sheepCount++;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] dark) {</code>\n<code>      new Dream().countSheep(System.out::println);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Consumer<Sheep>",
      "Function<Sheep,void>",
      "UnaryOperator<Sheep>",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package pet;</code>\n<code>import java.util.*;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class DogSearch {</code>\n<code>   void reduceList(List&lt;String&gt; names, Predicate&lt;String&gt; tester) {</code>\n<code>      names.removeIf(tester);</code>\n<code>   }</code>\n<code>   public static void main(String[] treats) {</code>\n<code>      int MAX_LENGTH = 2;</code>\n<code>      DogSearch search = new DogSearch();</code>\n<code>      List&lt;String&gt; names = new ArrayList&lt;&gt;();</code>\n<code>      names.add("Lassie");</code>\n<code>      names.add("Benji");</code>\n<code>      names.add("Brian");</code>\n<code>      MAX_LENGTH += names.size();</code>\n<code>      search.reduceList(names, d -&gt; d.length()&gt;MAX_LENGTH);</code>\n<code>      System.out.print(names.size());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "2",
      "3",
      "The code does not compile because of lambda expression.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title:
      "Which functional interface takes two values and has an apply() method?",
    code: null,
    answers: ["BiConsumer", "BiFunction", "BiPredicate", "DoubleBinaryOperator"]
  },
  {
    title:
      "Which of the following lambda expressions can be passed to a method that takes IntFunction<Integer> as an argument? 1.(Integer f) -> f 2.(v) -> null 3.s -> s",
    code: null,
    answers: [
      "I, II, and III",
      "II and III only",
      "III only",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package lot;</code>\n<code>import java.util.function.*;</code>\n<code>&nbsp;</code>\n<code>public class Warehouse {</code>\n<code>   private int quantity = 40;</code>\n<code>   private final BooleanSupplier stock;</code>\n<code>   {</code>\n<code>      stock = () -&gt; quantity&gt;0;</code>\n<code>   }</code>\n<code>   public void checkInventory() {</code>\n<code>      if(stock.get())</code>\n<code>         System.out.print("Plenty!");</code>\n<code>      else {</code>\n<code>         System.out.print("On Backorder!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... widget) {</code>\n<code>      final Warehouse w13 = new Warehouse();</code>\n<code>      w13.checkInventory();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Plenty!",
      "On Backorder!",
      "The code does not compile because of the checkInventory() method.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title:
      "Which of the following statements about functional interfaces is true?",
    code: null,
    answers: [
      "It is possible to define a functional interface that returns two data types.",
      "It is possible to define a primitive functional interface that uses float, char, or short.",
      "It is not possible to define a functional interface that does not take any arguments nor return any value.",
      "None of the primitive functional interfaces include generic arguments."
    ]
  }
];

const a14 = [
  "C. The Supplier functional interface does not take any inputs, while the Consumer functional interface does not return any data. This behavior extends to the primitive versions of the functional interfaces, making Option C the correct answer. Option A is incorrect because IntConsumer takes a value, while LongSupplier returns a value. Options B and D are incorrect because Function and UnaryOperator both take an input and produce a value. ",
  "A. The LongSupplier interface does not take any input, making Option D incorrect. It also uses the method name getAsLong(). The rest of the functional interfaces all take a long value but vary on the name of the abstract method they use. LongFunction contains apply() and LongPredicate contains test(), making Options B and C, respectively, incorrect. That leaves us with LongConsumer, which contains accept(), making Option A the correct answer.",
  "A. The code compiles without issue, so Options C and D are incorrect. The value for distance is 2, which based on the lambda for the Predicate will result in a true expression, and Saved will be printed, making Option A correct.",
  "C. Both are functional interfaces in the java.util.function package, making Option A true. The major difference between the two is that Supplier<Double> takes the generic type Double, while the other does not take any generic type and instead uses the primitive double. For this reason, Options B and D are true statements. For Supplier<Double> in Option B, remember that the returned double value can be implicitly cast to Double. Option C is the correct answer. Lambdas for Supplier<Double> can return a null value since Double is an object type, while lambdas for DoubleSupplier cannot; they can only return primitive double values.",
  "B. The lambda (s,p) -> s+p takes two arguments and returns a value. For this reason, Option A is incorrect because BiConsumer does not return any values. Option D is also incorrect, since Function only takes one argument and returns a value. This leaves us with Options B and C, which both use BiFunction, which takes two generic arguments and returns a generic value. Option C is incorrect because the datatype of the unboxed sum s+q is int and int cannot be autoboxed or implicitly cast to Double. Option B is correct. The sum s+p is of type double, and double can be autoboxed to Double.",
  "C. To begin with, ToDoubleBiFunction<T,U> takes two generic inputs and returns a double value. Option A is compatible because it takes an Integer and Double and returns a Double value that can be implicitly unboxed to double. Option B is compatible because long can be implicitly cast to double. While we don’t know the data types for the input arguments, we know that some values, such as using Integer for both, will work. Option C cannot be assigned and is the correct answer because the variable v is of type Object and Object does not have a length() method. Finally, Option D is compatible. The variable y could be declared double in the generic argument to the functional interface, making y/z a double return value.",
  "C. The BiPredicate interface takes two generic arguments and returns a boolean value. Next, DoubleUnaryOperator takes a double argument and returns a double value. Last, ToLongFunction takes a generic argument and returns a long value. That leaves Option C, which is the correct answer. While there is an ObjDoubleConsumer functional interface, which takes a generic argument and a double value and does not return any data, there is no such thing as ObjectDoubleConsumer. Remember that Object is abbreviated to Obj in all functional interfaces in java.util.function.",
  "C. The code does not compile, so Options A and D are incorrect. The IntUnaryOperator functional interface is not generic, so the argument IntUnaryOperator<Integer> in the takeTicket() does not compile, making Option C the correct answer. The lambda expression compiles without issue, making Option B incorrect. If the generic argument <Integer> was dropped from the argument declaration, the class would compile without issue and output 51 at runtime, making Option A the correct answer.",
  "A. Option A is the correct answer because BiPredicate takes two generic types and returns a primitive boolean value. Option B is incorrect, since CharSupplier does not exist in java.util.function. Option C is also incorrect, since LongFunction takes a primitive long value and returns a generic type. Remember, Java only includes primitive functional interfaces that operate on double, int, or long. Finally, Option D is incorrect. UnaryOperator takes a generic type and returns a generic value.",
  "D. First off, the forEach() method requires a Consumer instance. Option C can be immediately discarded because Supplier<Double> does not inherit Consumer. For this same reason, Option B is also incorrect. DoubleConsumer does not inherit from Consumer. In this manner, primitive functional interfaces cannot be used in the forEach() method. Option A seems correct, since forEach() does take a Consumer instance, but it is missing a generic argument. Without the generic argument, the lambda expression does not compile because the expression p<5 cannot be applied to an Object. The correct functional interface is Consumer<Double>, and since that is not available, Option D is the correct answer.",
  "C. BiFunction<Double,Double,Double> and BinaryOperator<Double> both take two Double input arguments and return a Double value, making them equivalent to one another. On the other hand, DoubleFunction<Double> takes a single double value and returns a Double value. For this reason, it is different from the other two, making Option C correct and Option D incorrect.",
  "B. BinaryOperator<Long> takes two Long arguments and returns a Long value. For this reason, Option A, which takes one argument, and Option D, which takes two Integer values that do not inherit from Long, are both incorrect. Option C is incorrect because the local variable c is re-declared inside the lambda expression, causing the expression to fail to compile. The correct answer is Option B because intValue() can be called on a Long object. The result can then be cast to long, which is autoboxed to Long.",
  "C. The program does not compile, so Option A is incorrect. The Supplier functional interface normally takes a generic argument, although generic types are not strictly required since they are removed by the compiler. Therefore, line d1 compiles while triggering a compiler warning, and Options B and D are incorrect. On the other hand, line d2 does cause a compiler error, because the lambda expression does not return a value. Therefore, it is not compatible with Supplier, making Option C the correct answer.",
  "A. The input type of a unary function must be compatible with the return type. By compatible, we mean identical or able to be implicitly cast. For this reason, Option A is the correct answer. Option B is incorrect since all of the UnaryOperator functional interfaces, generic or primitive, take exactly one value. Option C is incorrect because the primitive functional interfaces do not take a generic argument. Finally, Option D is incorrect. For example, the generic UnaryOperator<T> returns an Object that matches the generic type.",
  "C. Remember that all Supplier interfaces take zero parameters. For this reason, the third value in the table is 0, making Options A and B incorrect. Next, DoubleConsumer and IntFunction each take one value, double and int, respectively. On the other hand, ObjDoubleConsumer takes two values, a generic value and a double, and returns void. For this reason, Option C is correct, and Option D is incorrect.",
  "D. All Consumer functional interfaces have a void return type. For this reason, the first and last values in the table are both void, making Options A and B incorrect. IntFunction takes an int and returns a generic value, while LongSupplier does not take any values and returns a long value. For this reason, Option C is incorrect, and Option D is correct.",
  "B. The removeIf() method requires a Predicate since it operates on a boolean result, making Option A incorrect. The forEach() method takes a Consumer and does not return any data, making Option B correct, and Options C and D incorrect.",
  "C. The code does not compile, so Option A is incorrect. The lambda expression compiles without issue, making Option B incorrect. The task variable is of type UnaryOperator<Doll>, with the abstract method apply(). There is no accept() method defined on that interface, therefore the code does not compile, and Option C is the correct answer. If the code was corrected to use the apply() method, the rest of it would compile without issue. At runtime, it would then produce an infinite loop. On each iteration of the loop, a new Doll instance would be created with 5, since the post-decrement (--) operator returns the original value of the variable, and that would make Option D the correct answer.",
  "C. To begin with, Consumer uses accept(), making Option A incorrect. Next, Function and UnaryOperator use apply(), making Options B and D, respectively, incorrect. Finally, Supplier uses get(), making Option C the correct answer.",
  "D. First off, Options A and B are incorrect because the second functions for both return a double or Double value, respectively. Neither of these values can be sent to a UnaryOperator<Integer> without an explicit cast. Next, Option C is incorrect. The first functional interface Function<Double,Integer> takes only one input, but the diagram shows two inputs for the first functional interface. That leaves us with Option D. The first functional interface BiFunction<Integer,Double,Integer> takes an int, which can be implicitly autoboxed to Integer, and a Double and returns an Integer. The next functional interface, BinaryOperator<Integer>, takes two Integer values and returns an Integer value. Finally, this Integer value can be implicitly unboxed and sent to IntUnaryOperator, returning an int. Since these behaviors match our diagram, Option D is the correct answer.",
  "D. Options A, B, and C are true statements about functional interfaces. A lambda may be compatible with multiple functional interfaces, but it must be assigned to a functional interface when it is declared or passed as a method argument. Also, a method can be created with the return type that matches a functional interface, allowing a lambda expression to be returned. Option D is the correct answer. Deferred execution means the lambda expression is not evaluated until runtime, but it is compiled. Compiler errors in the lambda expression will prevent the code from compiling.",
  'B. Option A is incorrect because the String "3" is not compatible with the return type int required for IntSupplier. Option B is the correct answer. Although this will result in a divide by zero issue at runtime, the lambda is valid and compatible with IntSupplier. Option C is incorrect because the lambda expression is invalid. The return statement is only allowed inside a set of brackets {}. Finally, Option D is incorrect. The method reference is used for Supplier, not Consumer, since it takes a value and does not return anything.',
  "C. The lambda expression is invalid because the input argument is of type Boss, and Boss does not define an equalsIgnoreCase() method, making Option C the correct answer. If the lambda was corrected to use s.getName() instead of s, the code would compile and run without issue, printing [JENNY, GRACE] at runtime and making Option A the correct answer.",
  "D. First of all, Consumer<Object> takes a single Object argument and does not return any data. The classes ArrayList and String do not contain constructors that take an Object, so neither of the first two statements are correct. The third statement does support an Object variable, since the System.out.println(Object) method exists. For these reasons, Option D is the correct answer.",
  "B. The java.util.function package does not include any functional interfaces that operate on the primitive float, making Option A incorrect. Remember, Java only includes primitive functional interfaces that operate on double, int, or long. Option B is correct because it is a valid functional interface. Option C is incorrect because there is no UnaryIntOperator functional interface. Note that there is one called IntUnaryOperator. Option D is incorrect. The java.util.function package does not include any tri- operators, although many are easy to write.",
  "D. A lambda expression can match multiple functional interfaces. It matches DoubleUnaryOperator, which takes a double value and returns a double value. Note that the data type of s+1 is double because one of the operands, in this case s, is double. It also matches Function<String,String> since the (+) operator can be used for String concatenation. Finally, it matches IntToLongFunction since the int value s+1can be implicitly cast to long. On the other hand, the lambda expression is not compatible with UnaryOperator without a generic type. When UnaryOperator is used without a generic argument, the type is assumed to be Object. Since the (+) operator is not defined on Object, the code does not compile due to the lambda expression body, making Option D the correct answer. Note that if the lambda expression did not rely on the (+) operator, such as s -> s, then UnaryOperator would be allowed by the compiler, even without a generic type.",
  "B. The BiFunction interface takes two different generic values and returns a generic value, taking a total of three generic arguments. Next, ToDoubleFunction takes exactly one generic value and returns a double value, requiring one generic argument. The ToIntBiFunction interface takes two generic values and returns an int value, for a total of two generic arguments. For these reasons, Options A, C, and D are incorrect. The correct answer is Option B. DoubleFunction takes a double value and returns a generic result, taking exactly one generic argument, not two.",
  "D. While lambda expressions can use primitive types as arguments, the functional interface in this class uses the wrapper classes, which are not compatible. For this reason, Option A is incorrect. Option B is also incorrect, since the number of arguments and return type does not match the functional interface. Furthermore, the method reference System.out::print on the right-hand side of the lambda expression is invalid here, since it returns a method reference, not a double value. Option C is incorrect because 2*w is of type double, which cannot be returned as an Integer without an explicit cast. Option D is the correct answer. It takes exactly two arguments because the return value int can be implicitly autoboxed to Integer.",
  "A. BooleanSupplier is the only functional interface that does not involve double, int, or long, making Option A the correct answer. The rest of the functional interfaces are not found in java.util.function. Java does not have built-in support for primitive functional interfaces that include char, float, or short.",
  "D. The code does not compile because the lambda expression p -> p*100 is not compatible with the DoubleToIntFunction functional interface. The input to the functional interface is double, meaning p*100 is also double. The functional interface requires a return value of int, and since double cannot be implicitly cast to int, the code does not compile, making Option D the correct answer. If the correct cast was applied to make (p*100) an int, then the rest of the class would compile and 250 would be printed at runtime, making Option B correct.",
  "B. The ToDoubleFunction interface takes a generic value, not a double value, making Option D incorrect. It also uses the method name accept(). The rest of the functional interfaces all take a double value. DoubleConsumer contains the accept() method, making Option A incorrect. DoublePredicate contains the test() method, making Option B the correct answer. Finally, DoubleUnaryOperator contains the applyAsDouble() method, making Option C incorrect.",
  "D. To start with, line 5 does not compile because Function takes two generic arguments, not one. Second, the assignment statement on line 7 does not end with a semicolon (;), so it also does not compile. Finally, the forEach() method on line 10 requires a Consumer, not a Function, so this line does not compile. For these three reasons, Option D is the correct answer.",
  "D. The DoubleToLongFunction interface takes a double argument and returns a long value. Option A is compatible since the int value 1 can be implicitly cast to long, and 2L is already a long. Option B is also compatible, since the double value 10.0*e is explicitly cast to int then implicitly cast to long. Next, Option C is compatible because an explicit cast of the double to a long value is used. Option D cannot be assigned and is the correct answer. Although the Double class does have a longValue() method, the left-hand side of the lambda expression must use the primitive double, not the wrapper Double. This lambda expression violates the signature of the functional interface, since it allows Double values to be sent to the interface, including those that could be null.",
  "C. The DoublePredicate interface takes a double value and returns a boolean value. LongUnaryOperator takes a long value and returns a long value. ToIntBiFunction takes two generic values and returns an int value. The only choice that is not an existing functional interface is ShortSupplier. Recall that Java only includes primitive functional interfaces that operate on double, int, or long. For this reason, Option C is the correct answer.",
  "A. The method reference System.out::println takes a single input and does not return any data. Consumer<Sheep> is compatible with this behavior, making Option A the correct answer and Option D incorrect. Option B is incorrect because void cannot be used as a generic argument. Option C is incorrect since System.out::println() does not return any data and UnaryOperator requires a return value.",
  "C. The code does not compile, making Options A and B incorrect. The local variable MAX_LENGTH is neither final nor effectively final, meaning it cannot be used inside the lambda expression. The MAX_LENGTH variable starts off with an initial value of 2, but then is modified with the increment assignment (+=) operator to a value of 5, disqualifying its ability to be considered effectively final by the compiler. Since the lambda does not compile, Option C is the correct answer. If the code was rewritten so that the MAX_LENGTH variable was marked final and assigned a value of 5 from the start, then it would output 2, and Option A would be correct.",
  "B. To begin with, all of the functional interfaces in the list of choices take two values. The difference is in the name of the method they use. BiConsumer uses accept(), making Option A incorrect. Option B is correct because BiFunction includes the apply() method. Option C is incorrect, since BiPredicate uses the test() method. DoubleBinaryOperator is almost correct but the name of the method is applyAsDouble(), not apply(), making Option D incorrect. For the exam, you should be aware of which primitive functional interfaces use a different method name than the generic ones.",
  "B. To start with, IntFunction<Integer> takes an int value and returns an Integer. The first statement uses Integer instead of int as the input argument and is therefore not compatible. The second statement is compatible, since the return type null can be used as an Integer return type. The last statement is also valid. An int can be autoboxed to Integer. For these reasons, Option B is the correct answer.",
  "C. The primitive Supplier functional interfaces, such as BooleanSupplier and LongSupplier, do not have a get() method. Instead, they have methods such as getAsBoolean() and getAsLong(), respectively. For this reason, the first line of the checkInventory() method does not compile, making Option C the correct answer. If the method call was changed to getAsBoolean(), then the rest of the code would compile without issue, print Plenty! at runtime, and Option A would be the correct answer.",
  "B. Java only supports a single return data type or void. Therefore, it is not possible to define a functional interface that returns two data types, making Option A incorrect. Although Java does not include built-in support for primitive functional interfaces that include float, char, or short, there is nothing to prevent a developer from creating them in their own project, making Option B the true statement and the correct answer. Option C is incorrect because a functional interface that takes no values and returns void is possible. In fact, Runnable is one such example. Option D is also incorrect, since IntFunction<R> takes a primitive argument as input and a generic argument for the return type."
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
    answerArray: mapAnswers(qz["answers"], a14[index]),
    explain: a14[index]
  };
});
// window.quizs = quizs
quizs[14].imageUrl = "./images/image-ocp-ch14-15.png";
quizs[15].imageUrl = "./images/image-ocp-ch14-16.png";
quizs[19].imageUrl = "./images/image-ocp-ch14-20.png";

export default quizs;
