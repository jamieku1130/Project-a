const qzString = [
  {
    title:
      "Which of the following methods is not available on an ExecutorService instance?",
    code: null,
    answers: [
      "execute(Callable)",
      "execute(Runnable)",
      "submit(Callable)",
      "submit(Runnable)"
    ]
  },
  {
    title: " ",
    code:
      '<code>package performance;</code>\n<code>import java.util.concurrent.atomic.*;</code>\n<code>import java.util.stream.*;</code>\n<code>public class TicketTaker {</code>\n<code>   long ticketsSold;</code>\n<code>   final AtomicInteger ticketsTaken;</code>\n<code>   public TicketTaker() {</code>\n<code>      ticketsSold = 0;</code>\n<code>      ticketsTaken = new AtomicInteger(0);</code>\n<code>   }</code>\n<code>   public void performJob() {</code>\n<code>      IntStream.iterate(1, p -&gt; p+1)</code>\n<code>         .parallel()</code>\n<code>         .limit(10)</code>\n<code>         .forEach(i -&gt; ticketsTaken.getAndIncrement());</code>\n<code>      IntStream.iterate(1, q -&gt; q+1)</code>\n<code>         .limit(5)</code>\n<code>         .parallel()</code>\n<code>         .forEach(i -&gt; ++ticketsSold);</code>\n<code>      System.out.print(ticketsTaken+" "+ticketsSold);</code>\n<code>   }</code>\n<code>   public static void main(String[] matinee) {</code>\n<code>      new TicketTaker().performJob();</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["I only", "I and II", "I, II, and III", "None of the above"]
  },
  {
    title:
      "Which of the following is a recommended way to define an asynchronous task?",
    code: null,
    answers: [
      "Create a Callable expression and pass it to an instance of Executors.",
      "Create a class that extends Thread and overrides the start() method.",
      "Create a Runnable expression and pass it to a Thread constructor.",
      "All of the above"
    ]
  },
  {
    title:
      "Let’s say you needed a thread executor to create tasks for a CyclicBarrier that has a barrier limit of five threads. Which static method in ExecutorService should you use to obtain it?",
    code: null,
    answers: [
      "newSingleThreadExecutor()",
      "newSingleThreadScheduledExecutor()",
      "newCachedThreadPool()",
      "None of these would work."
    ]
  },
  {
    title:
      "Given the original array, how many of the following for statements result in an exception at runtime, assuming each is executed independently?",
    code:
      "<code>List&lt;Integer&gt; original = new ArrayList&lt;&gt;(Arrays.asList(1,2,3,4,5));</code>\n<code>&nbsp;</code>\n<code>List&lt;Integer&gt; copy1 = new CopyOnWriteArrayList&lt;&gt;(original);</code>\n<code>for(Integer w : copy1)</code>\n<code>   copy1.remove(w);</code>\n<code>&nbsp;</code>\n<code>List&lt;Integer&gt; copy2 = Collections.synchronizedList(original);</code>\n<code>for(Integer w : copy2)</code>\n<code>   copy2.remove(w);</code>\n<code>&nbsp;</code>\n<code>List&lt;Integer&gt; copy3 = new ArrayList&lt;&gt;(original);</code>\n<code>for(Integer w : copy3)</code>\n<code>   copy3.remove(w);</code>\n<code>&nbsp;</code>\n<code>Queue&lt;Integer&gt; copy4 = new ConcurrentLinkedQueue&lt;&gt;(original);</code>\n<code>for(Integer w : copy4)</code>\n<code>   copy4.remove(w);</code>",
    answers: ["Zero", "One", "Two", "Three"]
  },
  {
    title:
      "Fill in the blanks: __________ is a special case of __________, in which two or more active threads try to acquire the same set of locks and are repeatedly unsuccessful.",
    code: null,
    answers: [
      "Deadlock, livelock",
      "Deadlock, resource starvation",
      "Livelock, resource starvation",
      "Resource starvation, race conditions"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>1:  package office;</code>\n<code>2:  import java.util.concurrent.*;</code>\n<code>3:  public class TpsReport {</code>\n<code>4:     public void submitReports() {</code>\n<code>5:        ExecutorService service = Executors.newCachedThreadPool();</code>\n<code>6:        Future bosses = service.submit(() -&gt; System.out.print(""));</code>\n<code>7:        service.shutdown();</code>\n<code>8:        System.out.print(bosses.get());</code>\n<code>9:     }</code>\n<code>10:    public static void main(String[] memo) {</code>\n<code>11:       new TpsReport().submitReports();</code>\n<code>12:    }</code>\n<code>13: }</code>',
    answers: [
      "null",
      "The code does not compile.",
      "Line 7 throws an exception at runtime.",
      "Line 8 throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following static methods does not exist in the Executors class?",
    code: null,
    answers: [
      "newFixedScheduledThreadPool()",
      "newFixedThreadPool()",
      "newSingleThreadExecutor()",
      "newSingleThreadScheduledExecutor()"
    ]
  },
  {
    title:
      "How many times does the following application print Ready at runtime?",
    code:
      '<code>package parade;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class CartoonCat {</code>\n<code>   private void await(CyclicBarrier c) {</code>\n<code>      try {</code>\n<code>         c.await();</code>\n<code>      } catch (Exception e) {}</code>\n<code>   }</code>\n<code>   public void march(CyclicBarrier c) {</code>\n<code>      ExecutorService s = Executors.newSingleThreadExecutor();</code>\n<code>      for(int i=0; i&lt;12; i++)</code>\n<code>         s.execute(() -&gt; await(c));</code>\n<code>      s.shutdown();</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_341"></span>   public static void main(String... strings) {</code>\n<code>      new CartoonCat().march(new CyclicBarrier(4,</code>\n<code>            () -&gt; System.out.println("Ready")));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["Zero", "One", "Three", "The code does not compile."]
  },
  {
    title:
      "Which thread-safe class would you use to add elements to the front and back of an ordered data structure and includes methods for waiting a specified amount of time to do so?",
    code: null,
    answers: [
      "BlockingDeque",
      "ConcurrentLinkedDeque",
      "ConcurrentSkipListSet",
      "LinkedBlockingDeque"
    ]
  },
  {
    title:
      "Three of the four methods below always produce the same result whether they are executed on a serial or parallel ordered stream. Which one does not?",
    code: null,
    answers: ["findAny()", "findFirst()", "limit()", "skip()"]
  },
  {
    title:
      "What is the result of executing the following application multiple times?",
    code:
      "<code>package bears;</code>\n<code>import java.util.*;</code>\n<code>public class Bounce {</code>\n<code>   public static void main(String... legend) {</code>\n<code>      Arrays.asList(1,2,3,4).stream()</code>\n<code>         .forEach(System.out::println);</code>\n<code>      Arrays.asList(1,2,3,4).parallel()</code>\n<code>         .forEachOrdered(System.out::println);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Only the first array is printed in the same order every time.",
      "Only the second array is printed in the same order every time.",
      "Both arrays are printed in the same order every time.",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: In the fork/join framework, using the __________ class requires overriding an abstract compute() method containing a generic return type, while using the __________ class requires overriding an abstract compute() method containing a void return type.",
    code: null,
    answers: [
      "ForkJoinTask, RecursiveAction",
      "RecursiveAction, RecursiveTask",
      "RecursiveTask, ForkJoinTask",
      "RecursiveTask, RecursiveAction"
    ]
  },
  {
    title:
      "Given the following code snippet, which lambda expression is the best choice for the accumulator, based on the rules for applying a parallel reduction?",
    code:
      "<code>public class GoodAccumulator {</code>\n<code>   int i;</code>\n<code>   public void test() {</code>\n<code>      BiFunction&lt;Integer,Integer,Integer&gt; accumulator = _________________;</code>\n<code>      System.out.print(Arrays.asList(1,2,3,4,5)</code>\n<code>         .parallelStream()</code>\n<code>         .reduce(0,accumulator,(s1, s2) -&gt; s1 + s2));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "(a,b) -> (a-b)",
      "(a,b) -> 5",
      "(a,b) -> i++",
      "None of the above are appropriate."
    ]
  },
  {
    title: "What is the output of the following code snippet?",
    code:
      '<code>Callable c = new Callable() {</code>\n<code>   public Object run() {return 10;}</code>\n<code>};</code>\n<code>ExecutorService s = Executors.newScheduledThreadPool(1);</code>\n<code>for(int i=0; i&lt;10; i++) {</code>\n<code>   Future f = s.submit(c);</code>\n<code>   f.get();</code>\n<code>}</code>\n<code>s.shutdown();</code>\n<code>System.out.print("Done!");</code>',
    answers: [
      "Done!",
      "The code does not compile.",
      "The code hangs indefinitely at runtime.",
      "The code throws an exception at runtime."
    ]
  },
  {
    title:
      "The following diagrams represent the order of read/write operations of two threads sharing a common variable. Each thread first reads the value of the variable from memory and then writes a new value of the variable back to memory. Which diagram demonstrates proper synchronization?",
    code: null,
    answers: ["", "", "", ""]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package story;</code>\n<code>import java.util.*;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Race {</code>\n<code>   static ExecutorService service = Executors.newFixedThreadPool(8);</code>\n<code>   public static int sleep() {</code>\n<code>      try {</code>\n<code>         Thread.sleep(1000);</code>\n<code>      } catch (Exception e) {}</code>\n<code>      return 1;</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_344"></span>   public static void hare() {</code>\n<code>      try {</code>\n<code>         Callable c = () -&gt; sleep();</code>\n<code>         final Collection&lt;Callable&lt;Integer&gt;&gt; r = Arrays.asList(c,c,c);</code>\n<code>         List&lt;Future&lt;Integer&gt;&gt; results = service.invokeAll(r);</code>\n<code>         System.out.println("Hare won the race!");</code>\n<code>      } catch (Exception e) {e.printStackTrace();}</code>\n<code>   }</code>\n<code>   public static void tortoise() {</code>\n<code>      try {</code>\n<code>         Callable c = () -&gt; sleep();</code>\n<code>         final Collection&lt;Callable&lt;Integer&gt;&gt; r = Arrays.asList(c,c,c);</code>\n<code>         Integer result = service.invokeAny(r);</code>\n<code>         System.out.println("Tortoise won the race!");</code>\n<code>      } catch (Exception e) {e.printStackTrace();}</code>\n<code>   }</code>\n<code>   public static void main(String[] p) throws Exception {</code>\n<code>      service.execute(() -&gt; hare());</code>\n<code>      service.execute(() -&gt; tortoise());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Hare won the race! is printed first.",
      "Tortoise won the race! is printed first.",
      "The code does not compile.",
      "The result is unknown until runtime."
    ]
  },
  {
    title: "Which of the following concurrent collections is sorted?",
    code: null,
    answers: [
      "ConcurrentLinkedQueue",
      "ConcurrentSkipListMap",
      "CopyOnWriteArrayList",
      "LinkedBlockingQueue"
    ]
  },
  {
    title:
      "What is the most likely result of executing the following application?",
    code:
      '<code>package unknown;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Riddle {</code>\n<code>   public void sleep() {</code>\n<code>      try {</code>\n<code>         Thread.sleep(5000);</code>\n<code>      } catch (Exception e) {}</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_345"></span>   public String getQuestion(Riddle r) {</code>\n<code>      synchronized {</code>\n<code>         sleep();</code>\n<code>         if(r != null) r.getAnswer(null);</code>\n<code>         return "How many programmers does it take "</code>\n<code>               + "to change a light bulb?";</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public synchronized String getAnswer(Riddle r) {</code>\n<code>      sleep();</code>\n<code>      if(r != null) r.getAnswer(null);</code>\n<code>      return "None, that\'s a hardware problem";</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String... ununused) {</code>\n<code>      final Riddle r1 = new Riddle();</code>\n<code>      final Riddle r2 = new Riddle();</code>\n<code>      ExecutorService s = Executors.newFixedThreadPool(2);</code>\n<code>      s.submit(() -&gt; r1.getQuestion(r2));</code>\n<code>      s.execute(() -&gt; r2.getAnswer(r1));</code>\n<code>      s.shutdown();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "A deadlock is produced at runtime.",
      "A livelock is produced at runtime.",
      "The application completes successfully.",
      "The code does not compile."
    ]
  },
  {
    title:
      "Which ScheduledExecutorService method can result in the same action being executed by two threads at the same time?",
    code: null,
    answers: [
      "scheduleAtFixedDelay()",
      "scheduleAtFixedRate()",
      "scheduleWithFixedDelay()",
      "There is no such method in ScheduledExecutorService."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package olympics;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Athlete {</code>\n<code>   int stroke = 0;</code>\n<code>   public synchronized void swimming() {</code>\n<code>      stroke++;</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_346"></span>   public static void main(String... laps) {</code>\n<code>      ExecutorService s = Executors.newFixedThreadPool(10);</code>\n<code>      Athlete a = new Athlete();</code>\n<code>      for(int i=0; i&lt;1000; i++) {</code>\n<code>         s.execute(() -&gt; a.swimming());</code>\n<code>      }</code>\n<code>      s.shutdown();</code>\n<code>      System.out.print(a.stroke);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "1000",
      "The code does not compile.",
      "The result is unknown until runtime because stroke is not accessed in a thread-safe manner and a write may be lost.",
      "The result is unknown until runtime for some other reason."
    ]
  },
  {
    title:
      "Which of the following is most likely to be caused by a race condition?",
    code: null,
    answers: [
      "A thread perpetually denied access to a resource",
      "An int variable incorrectly reporting the number of times an operation was performed",
      "Two threads actively trying to restart a blocked process that is guaranteed to always end the same way",
      "Two threads endlessly waiting on each other to release shared locks"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package farm;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class CountSheep extends RecursiveAction {</code>\n<code>   static int[] sheep = new int[] {1,2,3,4};</code>\n<code>   final int start;</code>\n<code>   final int end;</code>\n<code>   int count = 0;</code>\n<code>   public CountSheep(int start, int end) {</code>\n<code>      this.start = start;</code>\n<code>      this.end = end;</code>\n<code>   }</code>\n<code>   public void compute() {</code>\n<code>      if(end-start&lt;2) {</code>\n<code>         count+=sheep[start];</code>\n<code>         return;</code>\n<code>      } else {</code>\n<code><span epub:type="pagebreak" id="Page_347"></span>         int middle = start + (end-start)/2;</code>\n<code>         invokeAll(new CountSheep(start,middle),</code>\n<code>               new CountSheep(middle,end));</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] night) {</code>\n<code>      ForkJoinPool pool = new ForkJoinPool();</code>\n<code>      CountSheep action = new CountSheep(0,sheep.length);</code>\n<code>      pool.invoke(action);</code>\n<code>      pool.shutdown();</code>\n<code>      System.out.print(action.count);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["0", "10", "The code does not compile.", "None of the above."]
  },
  {
    title: "Which statement about parallel streams is correct?",
    code: null,
    answers: [
      "A parallel stream always executes all stream operations faster than a serial stream.",
      "A parallel stream always executes certain stream operations faster than a serial stream.",
      "A parallel stream synchronizes its operations so that they are atomic.",
      "All streams can be converted to a parallel stream."
    ]
  },
  {
    title: "What is a possible output of the following application?",
    code:
      '<code>package salvage;</code>\n<code>import java.util.*;</code>\n<code>import java.util.concurrent.*;</code>\n<code>import java.util.stream.*;</code>\n<code>public class Car {</code>\n<code>   private String model;</code>\n<code>   private int year;</code>\n<code>   public Car(String name, int year) {</code>\n<code>      this.model = name; this.year = year;</code>\n<code>   }</code>\n<code>   public int getYear() {return year;}</code>\n<code>   @Override public String toString() {return model;}</code>\n<code>   public static void main(String... make) {</code>\n<code>      List&lt;Car&gt; cars = new ArrayList&lt;&gt;();</code>\n<code><span epub:type="pagebreak" id="Page_348"></span>      cars.add(new Car("Mustang",1967));</code>\n<code>      cars.add(new Car("Thunderbird",1967));</code>\n<code>      cars.add(new Car("Escort",1975));</code>\n<code>      ConcurrentMap&lt;Integer, List&lt;Car&gt;&gt; map = cars</code>\n<code>         .stream()</code>\n<code>         .collect(Collectors.groupingByConcurrent(Car::getYear));</code>\n<code>      System.out.print(map);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "{1975=[Escort], 1967=[Thunderbird, Mustang]}",
      "{Escort=[1975], Thunderbird=[1967], Mustang=[1967]}",
      "The code does not compile.",
      "The application throws an exception at runtime because the stream is not parallel."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package exercise;</code>\n<code>import java.util.*;</code>\n<code>public class Concat {</code>\n<code>   public String concat1(List&lt;String&gt; values) {</code>\n<code>      return values.parallelStream()</code>\n<code>            .reduce("a",</code>\n<code>                  (x,y)-&gt;x+y,</code>\n<code>                  String::concat);</code>\n<code>   }</code>\n<code>   public String concat2(List&lt;String&gt; values) {</code>\n<code>      return values.parallelStream()</code>\n<code>            .reduce((w,z)-&gt;z+w).get();</code>\n<code>   }</code>\n<code>   public static void main(String... questions) {</code>\n<code>      Concat c = new Concat();</code>\n<code>      List&lt;String&gt; list = Arrays.asList("Cat","Hat");</code>\n<code>      String x = c.concat1(list);</code>\n<code>      String y = c.concat2(list);</code>\n<code>      System.out.print(x+" "+y);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "aCataHat HatCat",
      "CatHat CatHat",
      "The code does not compile because concat1() returns an Optional.",
      "The code does not compile for a different reason."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package taxes;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Accountant {</code>\n<code>   public static void completePaperwork() {</code>\n<code>      System.out.print("[Filing]");</code>\n<code>   }</code>\n<code>   public static double getPi() {</code>\n<code>      return 3.14159;</code>\n<code>   }</code>\n<code>   public static void main(String[] args) throws Exception {</code>\n<code>      ExecutorService x = Executors.newSingleThreadExecutor();</code>\n<code>      Future&lt;?&gt; f1 = x.submit(() ‐&gt; completePaperwork());</code>\n<code>      Future&lt;Object&gt; f2 = x.submit(() ‐&gt; getPi());</code>\n<code>      System.out.print(f1.get()+" "+f2.get());</code>\n<code>      x.shutdown();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "[Filing]null 3.14159",
      "The declaration of f1 does not compile.",
      "The declaration of f2 does not compile.",
      "An exception is thrown at runtime."
    ]
  },
  {
    title: "Which statement about the following class is correct?",
    code:
      "<code>package my;</code>\n<code>import java.util.*;</code>\n<code>public class ThreadSafeList {</code>\n<code>   private List&lt;Integer&gt; data = new ArrayList&lt;&gt;();</code>\n<code>   public synchronized void addValue(int value) {</code>\n<code>      data.add(value);</code>\n<code>   }</code>\n<code>   public int getValue(int index) {</code>\n<code>      return data.get(index);</code>\n<code>   }</code>\n<code>   public int size() {</code>\n<code>      synchronized(ThreadSafeList.class) {</code>\n<code>         return data.size();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code does not compile because of the size() method.",
      "The code compiles and is thread-safe.",
      "The code compiles and is not thread-safe.",
      "The code does not compile for another reason."
    ]
  },
  {
    title:
      "Which two method names, when filled into the print2() method, produce the same output as the print1() method? Assume the input arguments for each represent the same non-null numeric value, only accessible by a single thread at a time.",
    code:
      "<code>public static void print1(int value) {</code>\n<code>   System.out.println(value--);</code>\n<code>   System.out.println(++value);</code>\n<code>}</code>\n<code>public static void print2(AtomicInteger value) {</code>\n<code>   System.out.println(value.__________);</code>\n<code>   System.out.println(value.__________);</code>\n<code>}</code>",
    answers: [
      "decrementAndGet() and getAndIncrement()",
      "decrementAndGet() and incrementAndGet()",
      "getAndDecrement() and getAndIncrement()",
      "getAndDecrement() and incrementAndGet()"
    ]
  },
  {
    title: "How many times does the following application print 1 at runtime?",
    code:
      '<code>package crew;</code>\n<code>import java.util.concurrent.*;</code>\n<code>import java.util.stream.*;</code>\n<code>public class Boat {</code>\n<code>   private void waitTillFinished(CyclicBarrier c) {</code>\n<code>      try {</code>\n<code>         c.await();</code>\n<code>         System.out.print("1");</code>\n<code>      } catch (Exception e) {}</code>\n<code>   }</code>\n<code>   public void row(ExecutorService service) {</code>\n<code>      final CyclicBarrier cb = new CyclicBarrier(5);</code>\n<code>      IntStream.iterate(1, i-&gt; i+1)</code>\n<code>         .limit(12)</code>\n<code>         .forEach(i -&gt; service.submit(() ‐&gt; waitTillFinished(cb)));</code>\n<code>   }</code>\n<code>   public static void main(String[] oars) {</code>\n<code>      ExecutorService service = null;</code>\n<code><span epub:type="pagebreak" id="Page_351"></span>      try {</code>\n<code>         service = Executors.newCachedThreadPool();</code>\n<code>         new Boat().row(service);</code>\n<code>      } finally {</code>\n<code>         service.isShutdown();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["0", "10", "12", "None of the above"]
  },
  {
    title:
      "Using the Boat class from the previous question, what is the final state of the application?",
    code: null,
    answers: [
      "The application produces an exception at runtime.",
      "The application terminates successfully.",
      "The application hangs indefinitely because the ExecutorService is never shut down.",
      "The application produces a deadlock at runtime."
    ]
  },
  {
    title: "What is the expected output of the following application?",
    code:
      "<code>package store;</code>\n<code>import java.util.concurrent.*;</code>\n<code>import java.util.stream.*;</code>\n<code>public class Line {</code>\n<code>   static BlockingDeque&lt;Integer&gt; queue = new LinkedBlockingDeque&lt;&gt;();</code>\n<code>   public static void main(String[] participants) throws Exception {</code>\n<code>      IntStream.iterate(1, i -&gt; i+1).limit(5)</code>\n<code>         .parallel()</code>\n<code>         .forEach(s -&gt; queue.offerLast(s,10000,TimeUnit.MILLISECONDS));</code>\n<code>      IntStream.iterate(1, i -&gt; 5).limit(10)</code>\n<code>         .parallel()</code>\n<code>         .forEach(s -&gt; queue.pollFirst(10,TimeUnit.SECONDS));</code>\n<code>      System.out.print(queue.size());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "0",
      "A number from 0 to 5",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the original array, how many of the following for statements result in an infinite loop at runtime, assuming each is executed independently?",
    code:
      "<code>List&lt;Integer&gt; original = new ArrayList&lt;&gt;(Arrays.asList(1,2,3));</code>\n<code>&nbsp;</code>\n<code>List&lt;Integer&gt; copy1 = new ArrayList&lt;&gt;(original);</code>\n<code>for(Integer q : copy1)</code>\n<code>   copy1.add(1);</code>\n<code>&nbsp;</code>\n<code>List&lt;Integer&gt; copy2 = new CopyOnWriteArrayList&lt;&gt;(original);</code>\n<code>for(Integer q : copy2)</code>\n<code>   copy2.add(2);</code>\n<code>&nbsp;</code>\n<code>Deque&lt;Integer&gt; copy3 = new ConcurrentLinkedDeque&lt;&gt;(original);</code>\n<code>for(Integer q : copy3)</code>\n<code>   copy3.push(3);</code>\n<code>List&lt;Integer&gt; copy4 = Collections.synchronizedList(original);</code>\n<code>for(Integer q : copy4)</code>\n<code>   copy4.add(4);</code>",
    answers: ["Zero", "One", "Two", "Three"]
  },
  {
    title:
      "Three of the four following options make up the requirements for performing a parallel reduction with the collect() method, which takes a Collector argument. Choose the one that is not a requirement.",
    code: null,
    answers: [
      "The Collector argument is marked concurrent.",
      "The elements of the stream implement the Comparable interface.",
      "The stream is parallel.",
      "The stream or Collector is marked unordered."
    ]
  },
  {
    title: "Which statement about the following application is true?",
    code:
      '<code>package math;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Fun extends RecursiveTask&lt;Integer&gt; {</code>\n<code>   final int value;</code>\n<code>   public Fun(int value) {</code>\n<code>      this.value = value;</code>\n<code>   }</code>\n<code>   @Override protected Integer compute() {  // w1</code>\n<code>      if(value&lt;1) {</code>\n<code>         return 1;</code>\n<code>      }</code>\n<code><span epub:type="pagebreak" id="Page_353"></span>      final Fun f1 = new Fun(value-1);</code>\n<code>      final Fun f2 = new Fun(value-2);</code>\n<code>      return f1.compute() * f2.compute();</code>\n<code>   }</code>\n<code>   public static void main(String... data) {</code>\n<code>      ForkJoinPool pool = new ForkJoinPool();</code>\n<code>      try {</code>\n<code>         System.out.print(pool.invoke(new Fun(10)));</code>\n<code>      } finally {</code>\n<code>         pool.shutdown();</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The class does not compile due to line w1.",
      "The class does not compile for another reason.",
      "The application compiles and uses the fork/join framework correctly.",
      "The application compiles but does not use the fork/join framework correctly."
    ]
  },
  {
    title:
      "Which ExecutorService method guarantees all running tasks are stopped in an orderly fashion?",
    code: null,
    answers: ["shutdown()", "shutdownNow()", "halt()", "None of the above"]
  },
  {
    title:
      "Given the following code snippet, what statement about the values printed on lines p1 and p2 is correct?",
    code:
      "<code>List&lt;Integer&gt; db = Collections.synchronizedList(new ArrayList&lt;&gt;());</code>\n<code>IntStream.iterate(1, i -&gt; i+1).limit(5)</code>\n<code>   .parallel()</code>\n<code>   .map(i -&gt; {db.add(i); return i;})</code>\n<code>   .forEachOrdered(System.out::print);  // p1</code>\n<code>System.out.println();</code>\n<code>db.forEach(System.out::print);  // p2</code>",
    answers: [
      "They are always the same.",
      "They are sometimes the same.",
      "They are never the same.",
      "The code will produce a ConcurrentModificationException at runtime."
    ]
  },
  {
    title:
      "Assuming 10 seconds is enough time for all of the tasks to finish, what is the output of the following application?",
    code:
      "<code>package finance;</code>\n<code>import java.util.concurrent.*;</code>\n<code>public class Bank {</code>\n<code>   static int cookies = 0;</code>\n<code>   public synchronized void deposit(int amount) {</code>\n<code>      cookies += amount;</code>\n<code>   }</code>\n<code>   public static synchronized void withdrawal(int amount) {</code>\n<code>      cookies -= amount;</code>\n<code>   }</code>\n<code>   public static void main(String[] amount) throws Exception {</code>\n<code>      ExecutorService teller = Executors.newScheduledThreadPool(50);</code>\n<code>      Bank bank = new Bank();</code>\n<code>      for(int i=0; i&lt;25; i++) {</code>\n<code>         teller.submit(() -&gt; bank.deposit(5));</code>\n<code>         teller.submit(() -&gt; bank.withdrawal(5));</code>\n<code>      }</code>\n<code>      teller.shutdown();</code>\n<code>      teller.awaitTermination(10, TimeUnit.SECONDS);</code>\n<code>      System.out.print(bank.cookies);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "0",
      "The code does not compile.",
      "The result is unknown until runtime.",
      "An exception is thrown at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package util;</code>\n<code>import java.util.*;</code>\n<code>public class SearchList&lt;T&gt; {</code>\n<code>   private List&lt;T&gt; data;</code>\n<code>   private boolean foundMatch = false;</code>\n<code>   public SearchList(List&lt;T&gt; list) {</code>\n<code>      this.data = list;</code>\n<code>   }</code>\n<code>   public void exists(T value,int start, int end) {</code>\n<code>      if(end-start&lt;=1) {</code>\n<code><span epub:type="pagebreak" id="Page_355"></span>         foundMatch = foundMatch || value.equals(data.get(start));</code>\n<code>      } else {</code>\n<code>         final int middle = start + (end-start)/2;</code>\n<code>         new Thread(() -&gt; exists(value,start,middle)).run();</code>\n<code>         new Thread(() -&gt; exists(value,middle,end)).run();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] a) throws Exception {</code>\n<code>      List&lt;Integer&gt; data = Arrays.asList(1,2,3,4,5,6);</code>\n<code>      SearchList&lt;Integer&gt; t = new SearchList&lt;Integer&gt;(data);</code>\n<code>      t.exists(5, 0, data.size());</code>\n<code>      System.out.print(t.foundMatch);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The result is unknown until runtime."
    ]
  },
  {
    title:
      "How many lines of the following code snippet contain compilation errors?",
    code:
      "<code>11: ScheduledExecutorService t = Executors</code>\n<code>12:    .newSingleThreadScheduledExecutor();</code>\n<code>13: Future result = t.execute(System.out::println);</code>\n<code>14: t.invokeAll(null);</code>\n<code>15: t.scheduleAtFixedRate(() -&gt; {return;}, 5, TimeUnit.MINUTES);</code>",
    answers: ["None. The code compiles as is.", "One", "Two", "Three"]
  }
];

const a20 = [
  "A. The ExecutorService interface defines the two submit() methods shown in Options C and D. Because ExecutorService extends Executor, it inherits the execute(Runnable) method presented in Option B. That leaves us with the correct answer, Option A, because ExecutorService does not define nor inherit an overloaded method execute() that takes a Callable parameter.",
  "B. The class compiles and runs without throwing an exception, making the first statement true. The class defines two values that are incremented by multiple threads in parallel. The first IntStream statement uses an atomic class to update a variable. Since updating an atomic numeric instance is thread-safe by design, the first number printed is always 10, and the second statement is true. The second IntStream statement uses an int with the pre-increment operator (++), which is not thread-safe. It is possible two threads could update and set the same value at the same time, a form of race condition, resulting in a value less than 5. For this reason, the third statement is not true. Since only the first two statements are true, Option B is the correct answer.",
  "C. Option A is incorrect, although it would be correct if Executors was replaced with ExecutorService in the sentence. While an instance of ExecutorService can be obtained from the Executors class, there is no method in the Executors class that performs a task directly. Option B is also incorrect, but it would be correct if start() was replaced with run() in the sentence. It is recommended that you override the run() method, not the start() method, to execute a task using a custom Thread class. Option C is correct, and one of the most common ways to define an asynchronous task. Finally, Option D is incorrect because Options A and B are incorrect.",
  "D. Trick question! ExecutorService does not contain any of these methods. In order to obtain an instance of a thread executor, you need to use the Executors factory class. For this reason, Option D is the correct answer. If the question had instead asked which Executors method to use, then the correct answer would be Option C. Options A and B do not allow concurrent processes and should not be used with a CyclicBarrier expecting to reach a limit of five concurrent threads. Option C, on the other hand, will create threads as needed and is appropriate for use with a CyclicBarrier.",
  "C. CopyOnWriteArrayList makes a copy of the array every time it is modified, preserving the original list of values the iterator is using, even as the array is modified. For this reason, the for loop using copy1 does not throw an exception at runtime. On the other hand, the for loops using copy2 and copy3 both throw ConcurrentModificationException at runtime since neither allows modification while they are being iterated upon. Finally, the ConcurrentLinkedQueue used in copy4 completes without throwing an exception at runtime. For the exam, remember that the Concurrent classes order read/write access such that access to the class is consistent across all threads and processes, while the synchronized classes do not. Because exactly two of the for statements produce exceptions at runtime, Option C is the correct answer.",
  "C. Resource starvation is when a single active thread is perpetually unable to gain access to a shared resource. Livelock is a special case of resource starvation, in which two or more active threads are unable to gain access to shared resources, repeating the process over and over again. For these reasons, Option C is the correct answer. Deadlock and livelock are similar, although in a deadlock situation the threads are stuck waiting, rather than being active or performing any work. Finally, a race condition is an undesirable result when two tasks that should be completed sequentially are completed at the same time.",
  "B. The class does not compile because the Future.get() on line 8 throws a checked InterruptedException and ExecutionException, neither of which is handled nor declared by the submitReports() method. If the submitReports() and accompanying main() methods were both updated to declare these exceptions, then the application would print null at runtime, and Option A would be the correct answer. For the exam, remember that Future can be used with Runnable lambda expressions that do not have a return value but that the return value is always null when completed.",
  "A. Options B and C are both proper ways to obtain instances of ExecutorService. Remember that newSingleThreadExecutor() is equivalent to calling newFixedThreadPool() with a value of 1. Option D is the correct way to request a single-threaded ScheduledExecutorService instance. The correct answer is Option A. The method newFixedScheduledThreadPool() does not exist in the Executors class, although there is one called newScheduledThreadPool().",
  "A. The code compiles without issue but hangs indefinitely at runtime. The application defines a thread executor with a single thread and 12 submitted tasks. Because only one thread is available to work at a time, the first thread will wait endlessly on the call to await(). Since the CyclicBarrier requires four threads to release it, the application waits endlessly in a frozen condition. Since the barrier is never reached and the code hangs, the application will never output Ready, making Option A the correct answer. If newCachedThreadPool() had been used instead of newSingleThreadExecutor(), then the barrier would be reached three times, and Option C would be the correct answer.",
  "D. First off, BlockingDeque is incorrect since it is an interface, not a class. Next, ConcurrentLinkedDeque does support adding elements to both ends of an ordered data structure but does not include methods for waiting a specified amount of time to do so, referred to as blocking. ConcurentSkipListSet is also incorrect, since its elements are sorted and not just ordered, and it does not contain any blocking methods. That leaves the correct answer, Option D. A LinkedBlockingDeque includes blocking methods in which elements can be added to the beginning or end of the queue, while waiting at most a specified amount of time. ",
  "A. The findAny() method can return any element of the stream, regardless of whether the stream is serial or parallel. While on serial streams this is likely to be the first element in the stream, on parallel streams the result is less certain. For this reason, Option A is the correct answer. When applied to an ordered stream, the rest of the methods always produce the same results on both serial and parallel streams. For this reason, these operations can be costly on a parallel stream since it has to be forced into a serial process.",
  "D. The static method Array.asList() returns a List instance, which inherits the Collection interface. While the Collection interface defines a stream() and parallelStream() method, it does not contain a parallel() method. For this reason, the second stream statement does not compile, and Option D is the correct answer. If the code was corrected to use parallelStream(), then the arrays would be consistently printed in the same order, and Option C would be the correct answer. Remember that the forEachOrdered() method forces parallel streams to run in sequential order.",
  "D. To start with, the ForkJoinTask is the parent class of RecursiveAction and RecursiveTask and does not contain a compute() method, neither abstract nor concrete, making Options A and C automatically incorrect. The RecursiveTask class contains the abstract compute() method that utilizes a generic return type, while the RecursiveAction class contains the abstract compute() method that uses a void return type. For this reason, Option D is the correct answer.",
  "B. An accumulator in a serial or parallel reduction must be associative and stateless. In a parallel reduction, invalid accumulators tend to produce more visible errors, where the result may be processed in an unexpected order. Option A is not associative, since (a-b)-c is not the same as a-(b-c) for all values a, b, and c. For example, using values of 1, 2, and 3 results in two different values, -4 and 2. Option C is not stateless, since a class or instance variable i is modified each time the accumulator runs. That leaves us with Option B, which is the correct answer since it is both stateless and associative. Even though it ignores the input parameters, it meets the qualifications for performing a reduction.",
  "B. The code does not compile because Callable must define a call() method, not a run() method, so Option B is the correct answer. If the code was fixed to use the correct method name, then it would complete without issue, printing Done! at runtime, and Option A would be the correct answer.",
  "C. Part of synchronizing access to a variable is ensuring that read/write operations are atomic, or happen without interruption. For example, an increment operation requires reading a value and then immediately writing it. If any thread interrupts this process, then data could be lost. In this regard, Option C shows proper synchronized access. Thread 2 reads a value and then writes it without interruption. Thread 1 then reads the new value and writes it. The rest of the answers are incorrect because one thread writes data to the variable in-between another thread reading and writing to the same variable. Because a thread is writing data to a variable that has already been written to by another thread, it may set invalid data. For example, two increment operations running at the same time could result in one of the increment operations being lost.",
  "D. The code compiles and runs without issue. The two methods hare() and tortoise() are nearly identical, with one calling invokeAll() and the other calling invokeAny(). The key is to know that both methods operate synchronously, waiting for a result from one or more tasks. Calling the invokeAll() method causes the current thread to wait until all tasks are finished. Since each task is one second long and they are being executed in parallel, the hare() method will take about one second to complete. The invokeAny() method will cause the current thread to wait until at least one task is complete. Although the result of the first finished thread is often returned, it is not guaranteed. Since each task takes one second to complete, though, the shortest amount of time this method will return is after one second. In this regard, the tortoise() method will also take about one second to complete. Since both methods take about the same amount of time, either may finish first, causing the output to vary at runtime and making Option D the correct answer. Note that after this program prints the two strings, it does not terminate, since the ExecutorService is not shut down.",
  "B. ConcurrentSkipListMap implements the SortedMap interface, in which the keys are kept sorted, making Option B the correct answer. While the other answers define ordered data structures, none are guaranteed to be sorted. Remember, if you see SkipList as part of a concurrent class name, it means it is sorted in some way, such as a sorted set or map.",
  "D. The synchronized block used in the getQuestion() method requires an object to synchronize on. Without it, the code does not compile, and Option D is the correct answer. What if the command was fixed to synchronize on the current object, such as using synchronized(this)? Each task would obtain a lock for its respective object, then wait a couple of seconds before requesting the lock for the other object. Since the locks are already held, both wait indefinitely, resulting in a deadlock. In this scenario, Option A would be the correct answer since a deadlock is the most likely result. We say most likely because even with corrected code, a deadlock is not guaranteed. It is possible, albeit very unlikely, for the JVM to wait five seconds before starting the second task, allowing enough time for the first task to finish and avoiding the deadlock completely.",
  "B. The ScheduledExecutorService does not include a scheduleAtFixedDelay() method, so Option A is incorrect. The scheduleAtFixedRate() method creates a new task for the associated action at a set time interval, even if previous tasks for the same action are still active. In this manner, it is possible multiple threads working on the same action could be executing at the same time, making Option B the correct answer. On the other hand, scheduleWithFixedDelay() waits until each task is completed before scheduling the next task, guaranteeing at most one thread working on the action is active in the thread pool.",
  "D. The application compiles, so Option B is incorrect. The stroke variable is thread-safe in the sense that no write is lost since all writes are wrapped in a synchronized method, making Option C incorrect. Even though the method is thread-safe, the value of stroke is read while the threads may still be executing. The result is it may output 0, 1000, or anything in-between, making Option D the correct answer. If the ExecutorService method awaitTermination() is called before the value of stroke is printed and enough time elapses, then the result would be 1000, and Option A would be the correct answer.",
  "B. A race condition is an undesirable result when two tasks that should be completed sequentially are completed at the same time. The result is often corruption of data in some way. If two threads are both modifying the same int variable and there is no synchronization, then a race condition can occur with one of the writes being lost. For this reason, Option B is the correct answer. Option A is the description of resource starvation. Options C and D are describing livelock and deadlock, respectively.",
  "A. The code compiles, so Option C is incorrect. The application attempts to count the elements of the sheep array, recursively. For example, the first two elements are totaled by one thread and added to the sum of the remainder of the elements in the array, which is calculated by another thread. Unfortunately, the class contains a bug. The count value is not marked static and not shared by all of the CountSheep subtasks. The value of count printed in the main() menu comes from the first CountSheep instance, which does not modify the count variable. The application prints 0, and Option A is the correct answer. If count was marked static, then the application would sum the elements correctly, printing 10, and Option B would be the correct answer.",
  "D. First off, certain stream operations, such as limit() or skip(), force a parallel stream to behave it a serial manner, so Option A is incorrect. Option B is also incorrect. Although some operations could take less time to execute, there is no guarantee any operation will actually be faster. For example, the JVM may only allocate a single thread to a parallel stream. In other words, parallel streams may improve performance but do not guarantee it. Option C is incorrect because parallel stream operations are not synchronized. It is up to the developer to provide synchronization or use a concurrent collection if required. Finally, Option D is the correct answer. The BaseStream interface, which all streams inherit, includes a parallel() method. Of course, the results of an operation may change in the presence of a parallel stream, such as when a stateful lambda expression is used, but they all can be made parallel.",
  "A. The code compiles and runs without issue. The JVM will fall back to a single-threaded process if all of the conditions for performing the parallel reduction are not met. The stream used in the main() method is not parallel, but the groupingbyConcurrent() method can still be applied without throwing an exception at runtime. Although performance will suffer from not using a parallel stream, the application will still process the results correctly. Since the process groups the data by year, Option A is the correct answer.",
  'A. The code compiles and runs without issue. The three-argument reduce() method returns a generic type, while the one-argument reduce() method returns an Optional. The concat1() method is passed an identity "a", which it applies to each element, resulting in the reduction to aCataHat. The lambda expression in the concat2() method reverses the order of its inputs, leading to a value of HatCat. Therefore, Option A is the correct answer.',
  "A. The code compiles without issue, so Options B and C are incorrect. The f1 declaration uses the version of submit() in ExecutorService, which takes a Runnable and returns a Future<?>. The call f1.get() waits until the task is finished and always returns null, since Runnable expressions have a void return type. The f2 declaration uses an overloaded version of submit(), which takes a Callable expression and returns a generic Future object. Since the double value can be autoboxed to a Double object, the line compiles without issue with f2.get() returning 3.14159. For these reasons, Option A is the correct answer. Option D is incorrect because no exception is expected to be thrown at runtime.",
  "C. The class compiles without issue, making Options A and D incorrect. The class attempts to create a synchronized version of a List<Integer>. The size() and addValue() help synchronize the read/write operations. Unfortunately, the getValue() method is not synchronized so the class is not thread-safe, and Option C is the correct answer. It is possible that one thread could add to the data object while another thread is reading from the object, leading to an unexpected result. Note that the synchronization of the size() method is valid, but since ThreadSafeList.class is a shared object, this will synchronize all instances of the class to the same object. This could result in a substantial performance cost if enough threads are creating ThreadSafeList objects.",
  "D. The post-decrement operator (––) decrements a value but returns the original value. It is equivalent to the atomic getAndDecrement() method. The pre-increment operator (++) increments a value and then returns the new value. It is equivalent to the incrementAndGet() atomic operation. For these reasons, Option D is the correct answer.",
  "B. When a CyclicBarrier goes over its limit, the barrier count is reset to zero. The application defines a CyclicBarrier with a barrier limit of 5 threads. The application then submits 12 tasks to a cached executor service. In this scenario, a cached thread executor will use between 5 and 12 threads, reusing existing threads as they become available. In this manner, there is no worry about running out of available threads. The barrier will then trigger twice, printing five 1s for each of the sets of threads, for a total of ten 1s. For this reason, Option B is the correct answer. The application then hangs indefinitely, as discussed in the next question.",
  "D. The application does not terminate successfully nor produce an exception at runtime, making Options A and B incorrect. It hangs at runtime because the CyclicBarrier limit is five, while the number of tasks submitted and awaiting activation is 12. This means that 2 of the tasks will be left over, stuck in a deadlocked state waiting for the barrier limit to be reached but with no more tasks available to trigger it. For this reason, Option D is the correct answer. If the number of tasks was a multiple of the barrier limit, such as 10 instead of 12, then the application will still hang because the ExecutorService is never shut down. The isShutdown() in the application finally block does not trigger a shutdown. Remember that it is important to shut down an ExecutorService after you are finished with it, else it can prevent a program from terminating. In this case, Option C would be the correct answer.",
  "C. The code does not compile because the blocking methods offerLast() and pollFirst() each throw a checked InterruptedException that are not handled by the lambda expressions, so Option C is the correct answer. If the lambda expressions were wrapped with try-catch blocks, then the process would first add all items to the queue, then remove them all of them, resulting in an output of 0. In this case, Option A would be the correct answer. Even though the tasks are completed in parallel, each stream does not terminate until all tasks are done. Note that 10 seconds is more than enough time under normal circumstances to add/remove elements from the queue.",
  "A. First of all, the for loops using copy1 and copy4 both throw ConcurrentModificationException at runtime since neither allows modification while they are being iterated upon. Next, CopyOnWriteArrayList makes a copy of the array every time it is modified, preserving the original list of values the iterator is using, even as the array is modified. For this reason, the for loop using copy2 completes without throwing an exception or creating an infinite loop. Finally, the ConcurrentLinkedDeque used in copy3 completes without producing an exception or infinite loop. The Concurrent collections order read/write access such that access to the class is consistent across all threads and processes, even iterators. Because the values are inserted at the head of the queue using push() and the underlying data structure is ordered, the new values will not be iterated upon and the loop finishes. Since none of the for statements produce an infinite loop at runtime, Option A is the correct answer. If push() had been used instead of offer() in the third loop, with new values being inserted at the tail of the queue instead of at the head, then the for loop would have entered an infinite loop, and Option B would be the correct answer.",
  "B. Options A, C, and D are the precise requirements for Java to perform a concurrent reduction using the collect() method, which takes a Collector argument. Recall from your studies that a Collector is considered concurrent and unordered if it has the Collector.Characteristics enum values CONCURRENT and UNORDERED, respectively. Option B is the correct answer because elements of a stream are not required to implement Comparable in order to perform a parallel reduction.",
  "D. The class compiles and runs without issue, making Options A and B incorrect. The purpose of the fork/join framework is to use parallel processing to complete subtasks across multiple threads concurrently. Unfortunately, calling the compute() method inside of an existing compute() does not spawn a new thread. The result is that this task is completed using a single thread, despite a pool of threads being available. For this reason, Option D is the correct answer. In order to properly implement the fork/join framework, the compute() method would need to be rewritten. The f1.compute() call should be replaced with f1.fork() to spawn a separate task, followed by f2.compute() to process the data on the current thread, and ending in f1.join() to retrieve the results of the first task completed while f2.compute() was being processed. If the code was rewritten as described, then Option C would be the correct answer.",
  "D. The shutdown() method prevents new tasks from being added but allows existing tasks to finish. In addition to preventing new tasks from being added, the shutdownNow() method also attempts to stop all running tasks. Neither of these methods guarantee any task will be stopped, making Option D the correct answer. Option C is incorrect because there is no halt() method in ExecutorService.",
  "B. First off, the class uses a synchronized list, which is thread-safe and allows modification from multiple threads, making Option D incorrect. The process generates a list of numbers from 1 to 5 and sends them into a parallel stream where the map() is applied, possibly out of order. This results in elements being written to db in a random order. The stream then applies the forEachOrdered() method to its elements, which will force the parallel stream into a single-threaded state. At runtime, line p1 will print the results in order every time as 12345. On the other hand, since the elements were added to db in a random order, the output of line p2 is random and cannot be predicted ahead of time. Since the results may sometimes be the same, Option B is the correct answer. Part of the reason that the results are indeterminate is that the question uses a stateful lambda expression, which based on your studies should be avoided in practice!",
  "C. The program compiles and does not throw an exception at runtime, making Options B and D incorrect. The class attempts to add and remove values from a single cookie variable in a thread-safe manner but fails to do so because the methods deposit() and withdrawal() synchronize on different objects. The instance method deposit() synchronizes on the bank object, while the static method withdrawal() synchronizes on the static Bank.class object. Even though method calls of the same type are protected, calls across the two different methods are not. Since the compound assignment operators (+=) and (-=) are not thread-safe, it is possible for one call to modify the value of cookies while the other is already operating on it, resulting in a loss of information. For this reason, the output cannot be predicted, and Option C is the correct answer. If the two sets of calls were properly synchronized on the same object, then the cookies variable would be protected from concurrent modifications, and Option A would be the correct answer.",
  "A. The code attempts to search for a matching element in an array recursively. While it does not contain any compilation problems, it does contain an error. Despite creating Thread instances, it is not a multi-threaded program. Calling run() on a Thread runs the process as part of the current thread. To be a multi-threaded execution, it would need to instead call the start() method. For this reason, the code completes synchronously, waiting for each method call to return before moving on to the next and printing true at the end of the execution, making Option A the correct answer. On the other hand, if start() had been used, then the application would be multi-threaded but then the result may not be ready by the time the println() method is called, resulting in a value that cannot be predicted ahead of time. In this case, Option D would be the correct answer.",
  "C. Line 13 does not compile because the execute() method has a return type of void, not Future. Line 15 does not compile because scheduleAtFixedRate() requires four arguments that include an initial delay and period value. For these two reasons, Option C is the correct answer. "
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
    answerArray: mapAnswers(qz["answers"], a20[index]),
    explain: a20[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
