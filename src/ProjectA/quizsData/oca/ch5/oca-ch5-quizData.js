const qzString = [
  {
    title:
      "Which type of loop is best known for its boolean condition that controls entry to the loop?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title: "Which type of loop is best known for using an index or counter?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title:
      "Which type of loop is guaranteed to have the body execute at least once?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title:
      "Which of the following can loop through an array without referring to the elements by index?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title:
      "What keyword is used to end the current loop iteration and proceed execution with the next iteration of that loop?",
    code: null,
    answers: ["break", "continue", "end", "skip"]
  },
  {
    title:
      "What keyword is used to proceed with execution immediately after a loop?",
    code: null,
    answers: ["break", "continue", "end", "skip"]
  },
  {
    title: "Which type of loop has three segments within parentheses?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title: "",
    code: null,
    answers: ["Only I", "Only II", "Both statements", "Neither statement"]
  },
  {
    title: "",
    code: null,
    answers: ["Only I", "Only II", "Both statements", "Neither statement"]
  },
  {
    title:
      "Which type of loop has a boolean condition that is first checked after a single iteration through the loop?",
    code: null,
    answers: ["do-while loop", "for (traditional)", "for-each", "while"]
  },
  {
    title: "What does the following code output?",
    code:
      "<code>int singer = 0;</code>\n<code>while (singer)</code>\n<code>  System.out.println(singer++);</code>",
    answers: [
      "0",
      "The code does not compile.",
      "The loops complete with no output.",
      "This is an infinite loop."
    ]
  },
  {
    title: "What does the following code output?",
    code:
      '<code>List&lt;String&gt; drinks = Arrays.asList("can", "cup");</code>\n<code>for (int container = drinks.size() - 1; container &gt;= 0; container‐‐)</code>\n<code>  System.out.print(drinks.get(container) + ",");</code>',
    answers: [
      "can,cup,",
      "cup,can,",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What does the following code output?",
    code:
      '<code>public static void main(String[] args) {</code>\n<code>   List&lt;String&gt; bottles = Arrays.asList("glass", "plastic");</code>\n<code>   for (int type = 0; type &lt; bottles.size();) {</code>\n<code>     System.out.print(bottles.get(type) + ",");</code>\n<code>     break;</code>\n<code>   }</code>\n<code>   System.out.print("end");</code>\n<code>}</code>',
    answers: [
      "glass,end",
      "glass,plastic,end",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What does the following code output?",
    code:
      '<code>String letters = "";</code>\n<code>while (letters.length() != 2)</code>\n<code>   letters+="a";</code>\n<code>System.out.println(letters);</code>',
    answers: [
      "aa",
      "aaa",
      "The loops complete with no output.",
      "This is an infinite loop."
    ]
  },
  {
    title:
      "What is the result of the following when run with  java peregrine.TimeLoop September 3 1940?",
    code:
      '<code>package peregrine;</code>\n<code>public class TimeLoop {</code>\n<code>  public static void main(String[] args) {</code>\n<code>    for (int i = args.length; i&gt;=0; i++)</code>\n<code>       System.out.println("args");</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "args",
      "argsargs",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following code?",
    code:
      '<code>package chicago;</code>\n<code>public class Loop {</code>\n<code>   private static int count;</code>\n<code>   private static String[] stops = new String[] { "Washington",</code>\n<code>       "Monroe", "Jackson", "LaSalle" };</code>\n<code>   public static void main(String[] args) {</code>\n<code>      while (count &lt; stops.length) {</code>\n<code>         if (stops[count++].length() &lt; 8) {</code>\n<code>            break;</code>\n<code>          }</code>\n<code>      }</code>\n<code>      System.out.println(count);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["1", "2", "4", "The code does not compile."]
  },
  {
    title: "What is the result of the following code?",
    code:
      "<code>do {</code>\n<code>   int count = 0;</code>\n<code>   do {</code>\n<code>      count++;</code>\n<code>   } while (count &lt; 2);</code>\n<code>      break;</code>\n<code>} while (true);</code>\n<code>System.out.println(count);</code>",
    answers: [
      "2",
      "3",
      "The code does not compile.",
      "This is an infinite loop."
    ]
  },
  {
    title: "Which of the following segments of a for loop can be left blank?",
    code: "<code>for (segmentA; segmentB; segmentC) {</code>\n<code>}</code>",
    answers: ["segmentA", "segmentB", "segmentC", "All of the above"]
  },
  {
    title:
      "How many of the loop types (while, do while, traditional for, and enhanced for) allow you to write code that creates an infinite loop?",
    code: null,
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>List&lt;String&gt; drinks = Arrays.asList("can", "cup");</code>\n<code>for (int container = 0; container &lt; drinks.size(); container++)</code>\n<code>   System.out.print(drinks.get(container) + ",");</code>',
    answers: [
      "can,cup,",
      "cup,can,",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What happens when running the following code?",
    code:
      '<code>do (</code>\n<code>   System.out.println("helium");</code>\n<code>) while (false);</code>',
    answers: [
      "It completes successfully without output.",
      "It outputs helium once.",
      "It keeps outputting helium.",
      "The code does not compile."
    ]
  },
  {
    title:
      "Which of the following is equivalent to this code snippet given an array of String objects?",
    code:
      "<code>for (int i=0; i&lt;fun.length; i++)</code>\n<code>  System.out.println(fun[i]);</code>",
    answers: [
      "for (String f = fun) System.out.println(f);",
      "for (String f : fun) System.out.println(f);",
      "for (String = fun) System.out.println(it);",
      "None of the above"
    ]
  },
  {
    title:
      "How many of these statements can be inserted after the println to have the code flow  follow the arrow in this diagram?",
    code:
      "<code>break;</code>\n<code>break letters;</code>\n<code>break numbers;</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Using the diagram in the previous question, how many of these statements can be inserted after the println to have the code flow follow the arrow in the diagram?",
    code:
      "<code>continue;</code>\n<code>continue letters;</code>\n<code>continue numbers;</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What does the following code output?",
    code:
      "<code>int singer = 0;</code>\n<code>while (singer &gt; 0)</code>\n<code>  System.out.println(singer++);</code>",
    answers: [
      "0",
      "The code does not compile.",
      "The loops completes with no output.",
      "This is an infinite loop."
    ]
  },
  {
    title:
      "Which of the following types is taxis not allowed to be in order for this code to compile?",
    code: "<code>for (Object obj : taxis) {</code>\n<code>}</code>",
    answers: [
      "ArrayList<Integer>",
      "int[]",
      "StringBuilder",
      "All of these are allowed."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>boolean balloonInflated = false;</code>\n<code>do {</code>\n<code>   if (!balloonInflated) {</code>\n<code>      balloonInflated = true;</code>\n<code>      System.out.print("inflate-");</code>\n<code>   }</code>\n<code>} while (! balloonInflated);</code>\n<code>System.out.println("done");</code>',
    answers: [
      "done",
      "inflate-done",
      "The code does not compile.",
      "This is an infinite loop."
    ]
  },
  {
    title: "What does the following code output?",
    code:
      '<code>String letters = "";</code>\n<code>while (letters.length() != 3)</code>\n<code>   letters+="ab";</code>\n<code>System.out.println(letters);</code>',
    answers: [
      "ab",
      "abab",
      "The loop completes with no output.",
      "This is an infinite loop."
    ]
  },
  {
    title:
      "What describes the order in which the three expressions appear in a for loop?",
    code: null,
    answers: [
      "boolean conditional, initialization expression, update statement",
      "initialization expression, boolean conditional, update statement",
      "initialization expression, update statement, boolean conditional",
      "None of the above"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>int count = 10;</code>\n<code>List&lt;Character&gt; chars = new ArrayList&lt;&gt;();</code>\n<code>do {</code>\n<code>  chars.add(\'a\');</code>\n<code><span epub:type="pagebreak" id="Page_71"></span>  for (Character x : chars) count -=1;</code>\n<code>} while (count &gt; 0);</code>\n<code>System.out.println(chars.size());</code>',
    answers: ["3", "4", "The code does not compile.", "None of the above"]
  },
  {
    title: "What is the result of the following?",
    code:
      "<code>int k = 0;</code>\n<code>for (int i = 10; i &gt; 0; i‐‐) {</code>\n<code>  while (i &gt; 3) i ‐= 3;</code>\n<code>  k += 1;</code>\n<code>}</code>\n<code>System.out.println(k);</code>",
    answers: ["1", "2", "3", "4"]
  },
  {
    title:
      "Which of the following is equivalent to this code snippet given an array of String objects?",
    code:
      "<code>for (int i=fun.length-1; i&gt;=0; i‐‐)</code>\n<code>  System.out.println(fun[i]);</code>",
    answers: [
      "for (String f = fun) System.out.println(f);",
      "for (String f : fun) System.out.println(f);",
      "for (String f fun) System.out.println(it);",
      "None of the above"
    ]
  },
  {
    title: "What does the following code output?",
    code:
      '<code>public static void main(String[] args) {</code>\n<code>   List&lt;String&gt; bottles = Arrays.asList("glass", "plastic");</code>\n<code>   for (int type = 0; type &lt; bottles.size();)</code>\n<code>     System.out.print(bottles.get(type) + ",");</code>\n<code>     break;</code>\n<code>   System.out.print("end");</code>\n<code>}</code>',
    answers: [
      "glass,end",
      "glass,plastic,end",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };</code>\n<code>String[] times = new String[] { "Day", "Night" };</code>\n<code>for (int i = 0, j = 0; i &lt; nycTourLoops.length</code>\n<code>   &amp;&amp; j &lt; times.length; i++; j++)</code>\n<code>{</code>\n<code>   System.out.print(nycTourLoops[i] + " " + times[j] + "-");</code>\n<code>}</code>',
    answers: [
      "Downtown Day-",
      "Downtown Day-Uptown Night-",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What is the result of the following when run with  java peregrine.TimeLoop September 3 1940?",
    code:
      "<code>package peregrine;</code>\n<code>public class TimeLoop {</code>\n<code>  public static void main(String[] args) {</code>\n<code>    for (int i = args.length; i&gt;=0; i‐‐)</code>\n<code>       System.out.println(args[i]);</code>\n<code>  }</code>\n<code>}</code>",
    answers: [
      "September",
      "1940",
      "The code does not compile.",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public class Shoelaces {</code>\n<code>  public static void main(String[] args) {</code>\n<code>    String tie = null;</code>\n<code>    while (tie == null)</code>\n<code>       tie = "shoelace";</code>\n<code>       System.out.print(tie);</code>\n<code>  }</code>\n<code>}</code>',
    answers: ["null", "shoelace", "shoelaceshoelace", "None of the above"]
  },
  {
    title:
      "The following code outputs a single letter x. What happens if you remove lines 25 and 28?",
    code:
      '<code>23:  String race = "";</code>\n<code>24:  loop:</code>\n<code>25:  do {</code>\n<code>26:     race += "x";</code>\n<code>27:     break loop;</code>\n<code>28:  } while (true);</code>\n<code>29:  System.out.println(race);</code>',
    answers: [
      "It prints an empty string.",
      "It still outputs a single letter x.",
      "It no longer compiles.",
      "It becomes an infinite loop."
    ]
  },
  {
    title: "What is the output of the following code?",
    code:
      '<code>package chicago;</code>\n<code>public class Loop {</code>\n<code>   private static int count;</code>\n<code>   private static String[] stops = new String[] { "Washington",</code>\n<code>       "Monroe", "Jackson", "LaSalle" };</code>\n<code>   public static void main(String[] args) {</code>\n<code>      while (count &lt; stops.length) {</code>\n<code>         if (stops[count++].length() &lt; 8) {</code>\n<code>            continue;</code>\n<code>          }</code>\n<code>      }</code>\n<code>      System.out.println(count);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["1", "2", "4", "The code does not compile."]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>StringBuilder builder = new StringBuilder();</code>\n<code>String str = new String("Leaves growing");</code>\n<code>do {</code>\n<code>   System.out.println(str);</code>\n<code>} while (builder);</code>\n<code>System.out.println(builder);</code>',
    answers: [
      "Leaves growing",
      "This is an infinite loop.",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following code?",
    code:
      "<code>6:   int count = 0;</code>\n<code>7:   do {</code>\n<code>8:      do {</code>\n<code>9:         count++;</code>\n<code>10:     } while (count &lt; 2);</code>\n<code>11:     break;</code>\n<code>12:  } while (true);</code>\n<code>13:  System.out.println(count);</code>",
    answers: [
      "2",
      "3",
      "The code does not compile.",
      "This is an infinite loop."
    ]
  },
  {
    title:
      "Fill in the blank so this code compiles and does not cause an infinite loop.",
    code:
      "<code>t: while (true) {</code>\n<code>   f: while(true) {</code>\n<code>      _____________</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["break;", "break f;", "break t;", "None of the above"]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };</code>\n<code>String[] times = new String[] { "Day", "Night" };</code>\n<code>for (int i = 0, j = 0; i &lt; nycTourLoops.length</code>\n<code>   &amp;&amp; j &lt; times.length; i++, j++)</code>\n<code>{</code>\n<code>   System.out.print(nycTourLoops[i] + " " + times[j] + "-");</code>\n<code>}</code>',
    answers: [
      "Downtown Day-",
      "Downtown Day-Uptown Night-",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>import java.util.*;</code>\n<code>public class Exams {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      List&lt;String&gt; exams = Arrays.asList("OCA", "OCP");</code>\n<code>      for (String e1 : exams)</code>\n<code>         for (String e2 : exams)</code>\n<code>            System.out.println(e1 + " " + e2);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Four",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following best describes the flow of execution in this for loop if beta always returns false?",
    code:
      "<code>for (alpha; beta; gamma) {</code>\n<code>  delta;</code>\n<code>}</code>",
    answers: ["alpha", "alpha, beta", "alpha, beta, gamma", "None of the above"]
  },
  {
    title:
      "Which of the following best describes the flow of execution in this for loop if the loop body is run exactly once?",
    code:
      "<code>for (alpha; beta; gamma) {</code>\n<code>  delta;</code>\n<code>}</code>",
    answers: [
      "alpha, delta, gamma, beta",
      "alpha, beta, delta, gamma, beta",
      "alpha, delta, gamma, alpha, beta",
      "alpha, beta, delta, gamma, alpha, beta"
    ]
  },
  {
    title:
      "Which of the following iterates a different number of times than the others?",
    code: null,
    answers: [
      "for (int k=0; k < 5; k++) {}",
      "for (int k=1; k <= 5; k++) {}",
      "int k=0; do { } while(k++ < 5)",
      "int k=0; while (k++ < 5) {}"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public class Shoelaces {</code>\n<code>  public static void main(String[] args) {</code>\n<code>    String tie = null;</code>\n<code>    while (tie == null);</code>\n<code>       tie = "shoelace";</code>\n<code>       System.out.print(tie);</code>\n<code>  }</code>\n<code>}</code>',
    answers: ["null", "shoelace", "shoelaceshoelace", "None of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      "<code>12:  int result = 8;</code>\n<code>13:  for: while (result &gt; 7) {</code>\n<code>14:     result++;</code>\n<code>15:     do {</code>\n<code>16:        result--;</code>\n<code>17:     } while (result &gt; 5);</code>\n<code>18:     break for;</code>\n<code>19:  }</code>\n<code>20:  System.out.println(result);</code>",
    answers: [
      "5",
      "8",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>boolean baloonInflated = false;</code>\n<code>do {</code>\n<code>   if (!baloonInflated) {</code>\n<code>      baloonInflated = true;</code>\n<code>      System.out.print("inflate-");</code>\n<code>   }</code>\n<code>} while (baloonInflated);</code>\n<code>System.out.println("done");</code>',
    answers: [
      "done",
      "inflate-done",
      "The code does not compile.",
      "This is an infinite loop."
    ]
  },
  {
    title:
      "Which of the following can fill in the blank to have the code compile successfully?",
    code:
      '<code>package nyc;</code>\n<code>public class TouristBus {</code>\n<code>  public static void main(String... args) {</code>\n<code>     String[] nycTourLoops = new String[] { "Downtown", "Uptown", "Brooklyn" };</code>\n<code>     String[] times = new String[] { "Day", "Night" };</code>\n<code>        for (_____________ i &lt; 1; i++, j++)</code>\n<code>           System.out.println(nycTourLoops[i] + " " + times[j]);</code>\n<code>  }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "int i=0; j=0;",
      "int i=0, j=0;",
      "int i=0; int j=0;",
      "int i=0, int j=0;"
    ]
  }
];

const a5 = [
  "D. A while loop has a condition that returns a boolean that controls the loop. It appears at the beginning and is checked before entering the loop. Therefore, Option D is correct. A traditional for loop also has a boolean condition that is checked before entering the loop. However, it is best known for having a counter variable, making Option B incorrect. Option A is incorrect because the boolean condition on a do-while loop is at the end of the loop. Option C is incorrect because there is no condition as part of the loop construct.",
  "B. A traditional for loop is best known for having a loop variable counting up or down as the loop progresses. Therefore, Option B is correct. Options A and D are incorrect because do-while and while loops are known for their boolean conditions. Option C is incorrect because the for-each loop iterates through without an index.",
  "A. A do-while loop checks the loop condition after execution of the loop body. This ensures it always executes at least once, and Option A is correct. Option B is incorrect because there are loops you can write that do not ever enter the loop body, such as for (int i=0;i<1;i++). Similarly, Option D is incorrect because a while loop can be written where the initial loop condition is false. Option C is incorrect because a for-each loop does not enter the loop body when iterating over an empty list.",
  "C. While a traditional for loop often loops through an array, it uses an index to do so, making Option B incorrect. The for-each loop goes through each element, storing it in a variable. Option C is correct.",
  "B. The continue keyword is used to end the loop iteration immediately and resume execution at the next iteration. Therefore, Option B is correct. Option A is incorrect because the break statement causes execution to proceed after the loop body. Options C and D are incorrect because these are not keywords in Java.",
  "A. The break keyword is used to end the loop iteration immediately, skip any remaining executions of the loop, and resume execution immediately after the loop. Therefore, Option A is correct. Option B is incorrect because execution proceeds at the next execution of the current loop for continue. Options C and D are incorrect because these are not keywords in Java.",
  "B. A traditional for loop is best known for having an initialization statement, condition statement, and update statement. Option B is correct.",
  "C. With a traditional for loop, you control the order in which indexes are visited in code. This means you can loop through an array in ascending or descending order, and Option C is correct.",
  "A. With a for-each loop, the loop order is determined for you. With an array, this means starting with index 0, and Option A is correct. A traditional for loop allows you to control the order and iterate in either order.",
  "A. A do-while loop has a condition that returns a boolean at the end of the loop. Therefore, Option A is correct. Option D is incorrect because a while loop has this condition at the beginning of the loop. A traditional for loop is best known for having a loop variable, making Option B incorrect. Option C is incorrect because there is no condition as part of the loop construct.",
  "B. A while loop requires a boolean condition. While singer is a variable, it is not a boolean. Therefore, the code does not compile, and Option B is correct.",
  "B. This is a correct loop to go through an ArrayList or List starting from the end. It starts with the last index in the list and goes to the first index in the list. Option B is correct.",
  "A. The first time through the loop, the index is 0 and glass, is output. The break statement then skips all remaining executions on the loop and the main() method ends. If there was no break keyword, this would be an infinite loop because there’s no incrementor.",
  'A. Immediately after letters is initialized, the loop condition is checked. The variable letters is of length 0, which is not equal to 2 so the loop is entered. In the loop body, letters becomes length 1 with contents "a". The loop index is checked again and now 1 is not equal to 2. The loop is entered and letters becomes length 2 and contains "aa". Then the loop index is checked again. Since the length is now 2, the loop is completed and aa is output. Option A is correct.',
  "D. There are three arguments passed to the program. This means that i is 3 on the first iteration of the loop. The program prints args. Then i is incremented to 4. Which is also greater than or equal to 0. Since i never gets smaller, this code produces an infinite loop and the answer is Option D.",
  'B. Since count is a class variable that isn’t specifically initialized, it defaults to 0. On the first iteration of the loop, "Washington", is 11 characters and count is set to 1. The if statement’s body is not run. The loop then proceeds to the next iteration. This time, the post-increment operator uses index 1 before setting count to 2. "Monroe" is checked, which is only 6 characters. The break statement sends the execution to after the loop and 2 is output. Option B is correct.',
  "C. At first this code appears to be an infinite loop. However, the count variable is declared inside the loop. It is not in scope after the loop where it is referenced by the println(). Therefore, the code does not compile, and Option C is correct.",
  "D. A for loop is allowed to have all three segments left blank. In fact, for(;;) {} is an infinite loop.",
  "C. It is not possible to create an infinite loop using a for-each because it simply loops through an array or ArrayList. The other types allow infinite loops, such as, for example, do { } while(true), for(;;) and while(true). Therefore, Option C is correct. And yes, we know it is possible to create an infinite loop with for-each by creating your own custom Iterable. This isn’t on the OCA or OCP exam though. If you think the answer is Option D, this is a great reminder of what not to read into on the real exam!",
  "A. This is a correct loop to go through an ArrayList or List starting from the beginning. It starts with index 0 and goes to the last index in the list. Option A is correct.",
  "D. Braces are optional around loops if there is only one statement. Parentheses are not allowed to surround a loop body though, so the code does not compile, and Option D is correct.",
  "B. The for-each loop uses a variable and colon as the syntax, making Option B correct.",
  "C. In this figure, we want to end the inner loop and resume execution at the letters label. This means we only want to break out of the inner loop. A break statement does just that. It ends the current loop and resumes execution immediately after the loop, making break; a correct answer. The break numbers; statement explicitly says which loop to end, which does the same thing, making it correct as well. By contrast, break letters; ends the outer loop, causing the code only to run the println() once. Therefore, two statements correctly match the diagram, and Option C is correct.",
  "B. In this figure, we want to end the inner loop and resume execution at the letters label. The continue letters; statement does that. The other two statements resume execution at the inner loop. Therefore, only the second statement correctly matches the diagram, and Option B is correct.",
  "C. A while loop checks the boolean condition before entering the loop. In this code, that condition is false, so the loop body is never run. No output is produced, and Option C is correct.",
  "C. A for-each loop is allowed to be used with arrays and ArrayList objects. StringBuilder is not an allowed type for this loop, so Option C is the answer.",
  "B. This is a correct do-while loop. On the first iteration of the loop, the if statement executes and prints inflate-. Then the loop condition is checked. The variable balloonInflated is true, so the loop condition is false and the loop completes.",
  'D. Immediately after letters is initialized, the loop condition is checked. The variable letters is of length 0, which is not equal to 3, so the loop is entered. In the loop body, letters becomes length 2 and contains "ab". The loop index is checked again and now 2 is not equal to 3. The loop is entered and letters becomes length 4 with contents "abab". Then the loop index is checked again. Since the length 4 is not equal to 3, the loop body is entered again. This repeats for 6, 8, 10, etc. The loop never ends, and Option D is correct.',
  "B. In a for loop, the segments are an initialization expression, a boolean conditional, and an update statement in that order. Therefore, Option B is correct.",
  "B. On the first iteration through the outer loop, chars becomes 1 element. The inner loop is run once and count becomes 9. On the second iteration through the outer loop, chars becomes 2 elements. The inner loop runs twice so count becomes 7. On the third iteration through the outer loop, chars becomes 3 elements. The inner loop runs three times so count becomes 4. On the fourth iteration through the outer loop, chars becomes 4 elements. The inner loop runs four times so count becomes 0. Then both loops end. Therefore, Option B is correct.",
  "A. On the first iteration of the outer loop, i starts out at 10. The inner loop sees that 10 > 3 and subtracts 3, making the 7 the new value of i. Since 7 > 3, we subtract 3 again, making i set to 4. Yet again 4 > 3, so i becomes 1. Then k is finally incremented to 1. The outer loop decrements i i, making it 0. The boolean condition sees that 0 is not greater than 0. The outer loop ends and 1 is printed out. Therefore, Option A is correct.",
  "D. Options A and C do not compile as they do not use the correct syntax for a for-each loop. The for-each loop is only able to go through an array in ascending order. It is not able to control the order, making Option C incorrect. Therefore, Option D is the answer.",
  "C. Since there are no brackets around the for statement, the loop body is only one line. The break statement is not in the loop. Since break cannot be used at the top level of a method, the code does not compile, and Option C is correct.",
  "C. Multiple update expressions are separated with a comma rather than a semicolon. Tricky, we know. But it is an important distinction. This makes Option C correct.",
  "D. There are three arguments passed to the program. This means that i is 3 on the first iteration of the loop. The program attempts to print args[3]. Since indexes are zero based in Java, it throws an ArrayIndexOutOfBoundsException.",
  "B. The first time the loop condition is checked, the variable tie is null. The loop body executes, setting tie. Despite the indention, there are no brackets surrounding the loop body so the print does not run yet. Then the loop condition is checked and tie is not null. The print runs after the loop, printing out shoelace once, making Option B correct.",
  "C. The code compiles as is. However, we aren’t asked about whether the code compiles as is. Line 27 refers to a loop label. While the label is still present, it no longer points to a loop. This causes the code to not compile, and Option C is correct.",
  "C. The continue statement is useless here since there is no code later in the loop to skip. The continue statement merely resumes execution at the next iteration of the loop, which is what would happen if the if-then statement was empty. Therefore, count increments for each element of the array. The code outputs 4, and Option C is correct.",
  "C. A do-while loop requires a boolean condition. The builder variable is a StringBuilder and not a boolean. The code does not compile, and Option C is correct.",
  "A. At first this code appears to be an infinite loop. However, there is a break statement. On line 6, count is set to 0. On line 9, it is changed to 1. Then the condition on line 10 runs. count is less than 2 so the inner loop continues. Then count is set to 2 on the next iteration of the inner loop. The loop condition on line 10 runs again and this time is false. The inner loop is completed. Then line 11 of the outer loop runs and sends execution to after the loop on line 13. At this point count is still 2, so Option A is correct.",
  "C. Option A breaks out of the inner loop, but the outer loop is still infinite. Option B has the same problem. Option C is correct because it breaks out of both loops.",
  "B. This code is correct. It initializes two variables and uses both variables in the condition check and the update statements. Since it checks the size of both arrays correctly, it prints the first two sets of elements, and Option B is correct.",
  "B. Looping through the same list multiple times is allowed. The outer loop executes twice. The inner loop executes twice for each of those iterations of the outer loop. Therefore, the inner loop executes four times, and Option B is correct.",
  "B. The initializer, which is alpha, runs first. Then Java checks the condition, which is beta, to see if loop execution should start. Since beta returns false, the loop is never entered, and Option B is correct.",
  "B. The initializer, which is alpha, runs first. Then Java checks the condition, which is beta, to see if loop execution should start. Then the loop body, which is delta, runs. After the loop execution, the updater, which is gamma, runs. Then the loop condition, which is beta, is checked again. Therefore, Option B is correct.",
  "C. Option A goes through five indexes on the iterations: 0, 1, 2, 3 and 4. Option B also goes through five indexes: 1, 2, 3, 4 and 5. Option D goes through five iterations as well, from 0 to 4. However, Option C goes through six iterations since the loop condition is at the end of the loop. Therefore it is not like the others, and Option C is the answer.",
  "D. The first time the loop condition is checked, the variable tie is null. However, the loop body is empty due to the semicolon right after the condition. This means the loop condition keeps running with no opportunity for tie to be set. Therefore, this is an infinite loop, and Option D is correct.",
  "C. Remember to look for basic errors before wasting time tracking the flow. In this case, the label of the loop is trying to use the keyword for. This is not allowed, so the code does not compile. If the label was valid, Option A would be correct.",
  "D. On the first iteration of the loop, the if statement executes printing inflate-. Then the loop condition is checked. The variable baloonInflated is true, so the loop condition is true and the loop continues. The if statement no longer runs, but the variable never changes state again, so the loop doesn’t end.",
  "B. In a for loop, the type is only allowed to be specified once. A comma separates multiple variables since they are part of the same statement. Therefore, Option B is correct."
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
    answerArray: mapAnswers(qz["answers"], a5[index]),
    explain: a5[index]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
