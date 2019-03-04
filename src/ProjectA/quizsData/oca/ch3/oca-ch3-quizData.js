const qzString = [
  {
    title:
      "Which of the following variable types is not permitted in a switch statement?",
    code: null,
    answers: ["String", "double", "int", "char"]
  },
  {
    title:
      "What is the value of tip after executing the following code snippet?",
    code:
      "<code>int meal = 5;</code>\n<code>int tip = 2;</code>\n<code>int total = meal + (meal&gt;6 ? ++tip : ‐‐tip);</code>",
    answers: ["1", "2", "3", "6"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package registration;</code>\n<code>public class NameCheck {</code>\n<code>   public static void main(String... data) {</code>\n<code>      String john = "john";</code>\n<code>      String jon = new String(john);</code>\n<code>      System.out.print((john==jon)+" "+(john.equals(jon)));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["true true", "true false", "false true", "false false"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package planning;</code>\n<code>public class ThePlan {</code>\n<code>   public static void main(String[] input) {</code>\n<code>      int plan = 1;</code>\n<code>      plan = plan++ + --plan;</code>\n<code>      if(plan==1) {</code>\n<code>         System.out.print("Plan A");</code>\n<code>      } else { if(plan==2) System.out.print("Plan B");</code>\n<code>      } else System.out.print("Plan C");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["Plan A", "Plan B", "Plan C", "None of the above"]
  },
  {
    title:
      "Which of the following statements about a default branch in a switch statement is correct?",
    code: null,
    answers: [
      "All switch statements must include a default statement.",
      "The default statement is required to be placed after all case statements.",
      "Unlike a case statement, the default statement does not take a value.",
      "A default statement can only be used when at least one case statement is present."
    ]
  },
  {
    title:
      "What is the value of thatNumber after the execution of the following code snippet?",
    code:
      "<code>long thatNumber = 5 &gt;= 5 ? 1+2 : 1*1;</code>\n<code>if(++thatNumber &lt; 4)</code>\n<code>   thatNumber += 1;</code>",
    answers: ["3", "4", "5", "The answer cannot be determined until runtime."]
  },
  {
    title:
      "Which statement immediately exits a switch statement, skipping all remaining case or default branches?",
    code: null,
    answers: ["exit", "break", "goto", "continue"]
  },
  {
    title: "Which statement about ternary expressions is true?",
    code: null,
    answers: [
      "In some cases, both expressions to the right of the conditional operator in a ternary expression will be evaluated at runtime.",
      "Ternary expressions require parentheses for proper evaluation.",
      "The ternary expressions are a convenient replacement for an if-then-else statement.",
      "Ternary expressions support int and boolean expressions for the left-most operand."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package voting;</code>\n<code>1: public class Election {</code>\n<code>2:     public void calculateResult(Integer candidateA, Integer candidateB) {</code>\n<code>3:       boolean process = candidateA == null || candidateA.intValue() &lt; 10;</code>\n<code>4:       boolean value = candidateA &amp;&amp; candidateB;</code>\n<code>5:       System.out.print(process || value);</code>\n<code><span epub:type="pagebreak" id="Page_36"></span>6:    }</code>\n<code>7:    public static void main(String[] unused) {</code>\n<code>8:       new Election().calculateResult(null,203);</code>\n<code>9:    }</code>\n<code>10: }</code>',
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The code compiles but throws a NullPointerException on line 3 at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package dinosaur;</code>\n<code>public class Park {</code>\n<code>   public final static void main(String... arguments) {</code>\n<code>      int pterodactyl = 6;</code>\n<code>      long triceratops = 3;</code>\n<code>      if(pterodactyl % 3 &gt;= 1)</code>\n<code>         triceratops++;</code>\n<code>         triceratops--;</code>\n<code>      System.out.print(triceratops);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["2", "3", "4", "The code does not compile."]
  },
  {
    title: "Which statement about if-then statements is true?",
    code: null,
    answers: [
      "An if-then statement is required to have an else statement.",
      "If the boolean test of an if-then statement evaluates to false, then the target clause of the if-then statement will still be evaluated.",
      "An if-then statement is required to cast an object.",
      "An if-then statement can execute a single statement or a block {}."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package restaurant;</code>\n<code>public class Pieces {</code>\n<code>   public static void main(String[] info) {</code>\n<code>      int flair = 15;</code>\n<code>      if(flair &gt;= 15 &amp;&amp; flair &lt; 37) {</code>\n<code>         System.out.print("Not enough");</code>\n<code><span epub:type="pagebreak" id="Page_37"></span>      } if(flair==37) {</code>\n<code>         System.out.print("Just right");</code>\n<code>      } else {</code>\n<code>         System.out.print("Too many");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["Not enough", "Just right", "Too many", "None of the above"]
  },
  {
    title:
      "Which statement about case statements of a switch statement is not true?",
    code: null,
    answers: [
      "A case value can be final.",
      "A case statement must be terminated with a break statement.",
      "A case value can be a literal expression.",
      "A case value must match the data type of the switch variable, or be able to be promoted to that type."
    ]
  },
  {
    title:
      "Given the following truth table, which operator for the boolean expressions x and y corresponds to this relationship?",
    code: null,
    answers: ["--", "++", "||", "&&"]
  },
  {
    title: "What is the output of the following code snippet?",
    code:
      '<code>int hops = 0;</code>\n<code>int jumps = 0;</code>\n<code>jumps = hops++;</code>\n<code>if(jumps)</code>\n<code>   System.out.print("Jump!");</code>\n<code>else</code>\n<code>   System.out.print("Hop!");</code>',
    answers: [
      "Jump!",
      "Hop!",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: The _____________ operator increases the value of a variable by 1 and returns the new value, while the _____________ operator decreases the value of a variable by 1 and returns the original value.",
    code: null,
    answers: [
      "pre-increment [++v], pre-decrement [--v]",
      "pre-increment [++v], post-decrement [v--]",
      "post-increment [v++], pre-decrement [--v]",
      "post-increment [v++], post-decrement [v--]"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package jungle;</code>\n<code>public class TheBigRace {</code>\n<code>   public static void main(String[] in) {</code>\n<code>      int tiger = 2;</code>\n<code>      short lion = 3;</code>\n<code>      long winner = lion+2*(tiger + lion);</code>\n<code>      System.out.print(winner);</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>}</code>",
    answers: ["11", "13", "25", "None of the above"]
  },
  {
    title:
      "Given the following code snippet, assuming dayOfWeek is an int, what variable type of saturday is not permitted?",
    code:
      '<code>final _________ saturday = 6;</code>\n<code>switch(dayOfWeek) {</code>\n<code>   default:</code>\n<code>      System.out.print("Another Weekday");</code>\n<code>      break;</code>\n<code>   case saturday:</code>\n<code>      System.out.print("Weekend!");</code>\n<code>}</code>',
    answers: ["byte", "long", "int", "None of the above"]
  },
  {
    title:
      "Given the following code snippet, what is the value of dinner after it is executed?",
    code:
      '<code>int time = 11;</code>\n<code>int day = 4;</code>\n<code>String dinner = time &gt; 10 ? day ? "Takeout" : "Salad" : "Leftovers";</code>',
    answers: [
      "Takeout",
      "Salad",
      "The code does not compile but would compile if parentheses were added.",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package recreation;</code>\n<code>public class Dancing {</code>\n<code>   public static void main(String[] vars) {</code>\n<code>      int leaders = 10 * (2 + (1 + 2 / 5);</code>\n<code>      int followers = leaders * 2;</code>\n<code>      System.out.print(leaders + followers &lt; 10 ? "Too few" : "Too many");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Too few",
      "Too many",
      "The code does not compile.",
      "The code compiles but throws a division by zero error at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package schedule;</code>\n<code>public class PrintWeek {</code>\n<code>   public static final void main(String[] days) {</code>\n<code>      System.out.print(5 + 6 + "7" + 8 + 9);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["56789", "11789", "11717", "The code does not compile."]
  },
  {
    title:
      "Fill in the blanks: The______________  operator is used to find the difference between two numbers, while the______________  operator is used to find the remainder when one number is divided by another.",
    code: null,
    answers: ["/, %", "–, %", "%, <", "–, ||"]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package transporter;</code>\n<code>public class Rematerialize {</code>\n<code>   public static void main(String[] input) {</code>\n<code>      int dog = 11;</code>\n<code>      int cat = 3;</code>\n<code>      int partA = dog / cat;</code>\n<code>      int partB = dog % cat;</code>\n<code>      int newDog = partB + partA * cat;</code>\n<code>      System.out.print(newDog);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["9", "11", "15", "The code does not compile."]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package dessert;</code>\n<code>public class IceCream {</code>\n<code>   public final static void main(String... args) {</code>\n<code>      int flavors = 30;</code>\n<code>      int eaten = 0;</code>\n<code>      switch(flavors) {</code>\n<code>         case 30: eaten++;</code>\n<code>         case 40: eaten+=2;</code>\n<code>         default: eaten--;</code>\n<code>      }</code>\n<code>      System.out.print(eaten);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["1", "2", "3", "The code does not compile."]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package mode;</code>\n<code>public class Transportation {</code>\n<code>   public static String travel(int distance) {</code>\n<code>      return distance&lt;1000 ? "train" : 10;</code>\n<code>   }</code>\n<code>   public static void main(String[] answer) {</code>\n<code>      System.out.print(travel(500));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "train",
      "10",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: Given two non-null String objects with reference names apples______________ and oranges, if apples  oranges evaluates to true, then apples______________  oranges must also evaluate to true.",
    code: null,
    answers: ["==, equals()", "!=, equals()", "equals(), ==", "equals(), =!"]
  },
  {
    title:
      "For a given non-null String myTestVariable, what is the resulting value of executing the statement myTestVariable.equals(null)?",
    code: null,
    answers: [
      "true",
      "false",
      "The statement does not compile.",
      "The statement compiles but will produce an exception when used at runtime."
    ]
  },
  {
    title:
      "How many 1s are outputted when the following application is compiled and run?",
    code:
      '<code>package city;</code>\n<code>public class Road {</code>\n<code>   public static void main(String... in) {</code>\n<code>      int intersections = 100;</code>\n<code><span epub:type="pagebreak" id="Page_42"></span>      int streets = 200;</code>\n<code>      if (intersections &lt; 150) {</code>\n<code>         System.out.print("1");</code>\n<code>      } else if (streets &amp;&amp; intersections &gt; 1000) {</code>\n<code>         System.out.print("2");</code>\n<code>      } if (streets &lt; 500)</code>\n<code>         System.out.print("1");</code>\n<code>      else</code>\n<code>         System.out.print("2");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "The code does not compile."]
  },
  {
    title: "Which statement about the logical operators & and && is true?",
    code: null,
    answers: [
      "The & and && operators are interchangeable, always producing the same results at runtime.",
      "The & operator always evaluates both operands, while the && operator may only evaluate the left operand.",
      "Both expressions evaluate to true if either operand is true.",
      "The & operator always evaluates both operands, while the && operator may only evaluate the right operand."
    ]
  },
  {
    title: "What is the output of the following code snippet?",
    code:
      '<code>int x = 10, y = 5;</code>\n<code>boolean w = true, z = false;</code>\n<code>x = w ? y++ : y--;</code>\n<code>w = !z;</code>\n<code>System.out.print((x+y)+" "+(w ? 5 : 10));</code>',
    answers: ["The code does not compile.", "10 10", "11 5", "12 5"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package bob;</code>\n<code>public class AreYouBob {</code>\n<code>   public static void main(String[] unused) {</code>\n<code><span epub:type="pagebreak" id="Page_43"></span>      String bob = new String("bob");</code>\n<code>      String notBob = bob;</code>\n<code>      System.out.print((bob==notBob)+" "+(bob.equals(notBob)));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["true true", "true false", "false true", "false false"]
  },
  {
    title: "What is the value of 12 + 6 * 3 % (1 + 1) in Java?",
    code: null,
    answers: ["0", "12", "14", "None of the above"]
  },
  {
    title:
      "Given the following truth table, the boolean variables p and q, and the expression p ^ q, what are the missing values in the truth table, starting with the first column?",
    code: null,
    answers: [
      "false and true",
      "false and false",
      "true and true",
      "true and false"
    ]
  },
  {
    title:
      "Which of the following is not a possible result of executing the following application?",
    code:
      '<code>public class ConditionallyLogical {</code>\n<code>   public static void main(String... data) {</code>\n<code>      if(data.length&gt;=1</code>\n<code>            &amp;&amp; (data[0].equals("sound") || data[0].equals ("logic")) </code>\n<code>            &amp;&amp; data.length&lt;2) {</code>\n<code>         System.out.print(data[0]);</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Nothing is printed.",
      "sound is printed.",
      "The application throws an exception at runtime.",
      "logic is printed."
    ]
  },
  {
    title:
      "Fill in the blanks: The operators +,______________ ,______________ ,______________  , and ++ are listed in the same or increasing level of operator precedence.",
    code: null,
    answers: ["*, --, /", "%, -, *", "/, *, %", "*, -, /"]
  },
  {
    title: "What statement about the ^ operator is correct?",
    code: null,
    answers: [
      "If one of the operands of ^ is true, then the result is always true.",
      "There is a conditional form of the operator, denoted as ^^.",
      "If both operands of ^ are true, the result is true.",
      "The ^ operator can only be applied to boolean values."
    ]
  },
  {
    title:
      "Given the following Venn diagram and the variables, x, y, and z, which Java expression most closely represents the filled-in region of the diagram?",
    code: null,
    answers: ["x || z", "y || (y && z)", "x || y", "y && x"]
  },
  {
    title:
      "What variable type of red allows the following application to compile?",
    code:
      '<code>package tornado;</code>\n<code>public class Kansas {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      int colorOfRainbow = 10;</code>\n<code>      ________ red = 5;</code>\n<code><span epub:type="pagebreak" id="Page_45"></span>      switch(colorOfRainbow) {</code>\n<code>         default:</code>\n<code>            System.out.print("Home");</code>\n<code>            break;</code>\n<code>         case red:</code>\n<code>            System.out.print("Away");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["long", "double", "int", "None of the above"]
  },
  {
    title:
      "Which two operators would be used to test if a number is equal to or greater than 5.21 but strictly less than 8.1?",
    code: null,
    answers: ["> and <=", ">= and >", "< and >=", "< and >"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package transporter;</code>\n<code>public class TurtleVsHare {</code>\n<code>   public static void main(String[] arguments) {</code>\n<code>      int turtle = 10 * (2 + (3 + 2) / 5);</code>\n<code>      int hare = turtle &lt; 5 ? 10 : 25;</code>\n<code>      System.out.print(turtle &lt; hare ? "Hare wins!" : "Turtle wins!");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Hare wins!",
      "Turtle wins!",
      "The code does not compile.",
      "The code compiles but throws a division by zero error at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>public class CountEntries {</code>\n<code>   public static int getResult(int threshold) {</code>\n<code>      return threshold &gt; 5 ? 1 : 0;</code>\n<code><span epub:type="pagebreak" id="Page_46"></span>   }</code>\n<code>   public static final void main(String[] days) {</code>\n<code>      System.out.print(getResult(5)+getResult(1)</code>\n<code>         +getResult(0)+getResult(2)+"");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["0", "1", "0000", "1000"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package yoyo;</code>\n<code>public class TestGame {</code>\n<code>   public String runTest(boolean spinner, boolean roller) {</code>\n<code>      if(spinner = roller) return "up";</code>\n<code>      else return roller ? "down" : "middle";</code>\n<code>   }</code>\n<code>   public static final void main(String pieces[]) {</code>\n<code>      final TestGame tester = new TestGame();</code>\n<code>      System.out.println(tester.runTest(false,true));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["up", "middle", "down", "The code does not compile."]
  },
  {
    title:
      "Fill in the blanks: The______________  operator is true if either of the operands are true, while the______________  operator flips a boolean value.",
    code: null,
    answers: ["+, -", "&&, !", "|, -", "||, !"]
  },
  {
    title:
      "Given the following code snippet, what is the value of movieRating after it is executed?",
    code:
      "<code>int characters = 5;</code>\n<code>int story = 3;</code>\n<code>double movieRating = characters &lt;= 4 ? 3 : story&gt;1 ? 2 : 1;</code>",
    answers: [
      "2.0",
      "3.0",
      "The code does not compile but would compile if parentheses were added.",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: A switch statement can have______________  case statements and______________  default statements.",
    code: null,
    answers: [
      "at most one, at least one",
      "any number of, at most one",
      "at least one, any number of",
      "at least one, at most one"
    ]
  },
  {
    title:
      "Which of the following is not a possible result of executing the following application?",
    code:
      '<code>&nbsp;</code>\n<code>public class OutsideLogic {</code>\n<code>   public static void main(String... weather) {</code>\n<code>      System.out.print(weather[0]!=null</code>\n<code>            &amp;&amp; weather[0].equals("sunny")</code>\n<code>            &amp;&amp; !false</code>\n<code>         ? "Go Outside" : "Stay Inside");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Nothing is printed.",
      "The application throws an exception at runtime.",
      "Go Outside is printed.",
      "Stay Inside is printed."
    ]
  },
  {
    title: "What is the value of (5 + (!2 + 8) * 3 - 3 % 2)/2 in Java?",
    code: null,
    answers: ["2", "11", "16", "None of the above"]
  },
  {
    title:
      "Given the following truth table, the boolean variables w and z, and the expression w || z, what are the missing values in the truth table, starting with the first row?",
    code: null,
    answers: [
      "false and false",
      "true and false",
      "true and true",
      "false and true"
    ]
  },
  {
    title:
      "Fill in the blanks: The operators –,______________ ,______________ ,______________  , and % are listed in the same or increasing level of operator precedence.",
    code: null,
    answers: ["+, /, *", "--, -, *", "++, /, *", "*, ++, %"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>public class Baby {</code>\n<code>   public static String play(int toy, int age) {</code>\n<code>      final String game;</code>\n<code>      if(toy&lt;2)</code>\n<code>         game = age &gt; 1 ? 1 : 10; // p1</code>\n<code>      else</code>\n<code>         game = age &gt; 3 ? "Ball" : "Swim"; // p2</code>\n<code>      return game;</code>\n<code>   }</code>\n<code>   public static void main(String[] variables) {</code>\n<code>      System.out.print(play(5,2));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Ball",
      "Swim",
      "The code does not compile due to p1.",
      "The code does not compile due to p2."
    ]
  }
];

const a3 = [
  "B. A switch statement supports the primitive types byte, short, char, and int and the classes String, Character, Byte, Short, and Integer. It also supports enumerated types. Floating-point types like float and double are not supported, therefore Option B is the correct answer.",
  "A. Remember that in ternary expressions, only one of the two right-most expressions are evaluated. Since meal>6 is false, ––tip is evaluated and ++tip is skipped. The result is that tip is changed from 2 to 1, making Option A the correct answer. The value of total is 6, since the pre-increment operator was used on tip, although you did not need to know this to solve the question.",
  'C. The first assignment creates a new String "john" object. The second line explicitly uses the new keyword, meaning a new String object is created. Since these objects are not the same, the == test on them evaluates to false. The equals() test on them returns true because the values they refer to are equivalent. Therefore, the correct answer is C.',
  "D. This code does not compile because it has two else statements as part of a single if-then statement. Notice that the second if statement is not connected to the last else statement. For this reason, Option D, none of the above, is the correct answer.",
  "C. A default statement inside a switch statement is optional and can be placed in any order within the switch’s case statements, making Options A and B incorrect. Option D is an incorrect statement as a switch statement can be composed of a single default statement and no case statements. Option C is correct because a default statement does not take a value, unlike a case statement.",
  "B. The initial assignment of thatNumber follows the first branch of the ternary expression. Since 5 >= 5 evaluates to true, a value of 3 is assigned to thatNumber. In the next line, the pre-increment operator increments the value of thatNumber to 4 and returns a value of 4 to the expression. Since 4 < 4 evaluates to false, the if-then block is skipped. This leaves the value of thatNumber as 4, making Option B the correct answer.",
  "B. The break statement exits a switch statement, skipping all remaining branches, making Option B the correct answer. In Option A, exit is not a statement in Java. In Option C, goto is a reserved word but unused in Java. Finally, in Option D, continue is a statement but only used for loops.",
  "C. Option A is incorrect as only one of the two right-hand expressions is evaluated at runtime. Parentheses are often helpful for reading ternary expressions but are not required, making Option B incorrect. Option C is a correct statement about ternary operators as they are commonly used to replace short if-then-else statements. Finally, Option D is incorrect as only boolean expressions are permitted in the left-most operand of a ternary expression.",
  "C. On line 4, candidateA and candidateB are numbers, but the && operation can only be applied to boolean expressions. Therefore, the code does not compile because of line 4, making C the correct answer. All of the other lines are correct. Note that if line 4 is fixed, line 3 does not produce a NullPointerException at runtime. The conditional || and the preceding null check allows the code to only call intValue() if candidateA is not null.",
  "A. The first step is to determine whether or not the if-then statement’s expression is executed. The expression 6 % 3 evaluates to 0, since there is no remainder, and since 0 >= 1 is false, the expression triceratops++ is not called. Notice there are no brackets {} in the if-then statement. Despite the triceratops–– line being indented, it is not part of the if-then statement. Recall that Java does not use indentation to determine the beginning or end of a statement. Therefore, triceratops–– is always executed, resulting in a value of 2 for triceratops and making Option A the correct answer.",
  "D. Option A is incorrect because else statements are entirely optional. Option B is also incorrect. The target of an if-then statement is not evaluated if the boolean test is false. Option C is incorrect. While an if-then statement is often used to test whether an object is of a particular type in order to cast it, it is not required to cast an object. Option D is correct as an if-then statement may execute a single statement or a block of code {}.",
  "D. For this question, it helps to notice that the second if-then statement is not connected to the first if-then statement, as there is no else joining them. When this code executes, the first if-then statement outputs Not enough since flair is >= 15 and < 37. The second if-then statement is then evaluated. Since flair is not 37, the expression Too many is outputted. Since two statements are outputted, Option D, none of the above, is the correct answer.",
  "B. A case value must be a constant expression, such as a literal or final variable, so Options A and C are true statements about case values. A case statement may be terminated by a break statement, but it is not required, making Option B the false statement and correct answer. Option D is also a true statement about case values.",
  "D. The question is about boolean operators. Since Options A and B are numeric operators, they can be instantly disregarded. The question then simplifies to which boolean expression, && or ||, corresponds to the truth table that only evaluates to true if both operands are true. Only the conjunctive logical && operator represents this relationship, making Option D the correct answer.",
  "C. The value of jumps and hops is unimportant because this code does not compile, making Option C the correct answer. Unlike some other programming languages, Java does not automatically convert integers to boolean values for use in if-then statements. The statement if(jumps) evaluates to if(0), and since 0 is not a boolean value, the code does not compile. Note that the value of the jumps variable is irrelevant in this example; no integer evaluates to a boolean value in Java.",
  "B. Prefix operators modify the variable and evaluate to the new value, while postfix operators modify the variable but return the original value. Therefore, Option B is the correct answer.",
  "B. For this problem, it helps to recognize that parentheses take precedence over the operations outside the parentheses. Once we replace the variables with values, the expression becomes: 3+2*(2+3). We then calculate the value inside the parentheses to get 3+2*5. Since the multiplication operator has higher precedence than addition, we evaluate it first, resulting in 3+10 = 13, making Option B the correct answer.",
  "B. Any value that can be implicitly promoted to int will work for the case statement with an int input. Since switch statements do not support long values, and long cannot be converted to int without a possible loss of data, Option B is the correct answer.",
  "D. While parentheses are recommended for ternary operations, especially embedded ones, they are not required, so Option C is incorrect. The code does not compile because day is an int, not a boolean expression, in the second ternary operation, making Option D the correct answer. Remember that in Java, numeric values are not accepted in place of boolean expressions in if-then statements or ternary operations.",
  "C. While the code involves numerous operations, none of that matters for solving this problem. The key to solving it is to notice that the line that assigns the leaders variable has an uneven number of parentheses. Without balanced parentheses, the code will not compile, making Option C the correct answer.",
  'B. Remember that Java evaluates + from left to right. The first two values are both numbers, so the + is evaluated as numeric addition, resulting in a reduction to 11 + "7" + 8 + 9. The next two terms, 11 + "7", are handled as string concatenation since one of the terms is a String. This allows us to reduce the expression to "117" + 8 + 9. Likewise, the final two terms are each evaluated one at a time with the String on the left. Therefore, the final value is 11789, making Option B the correct answer.',
  "B. The subtraction - operator is used to find the difference between two numbers, while the modulus % operator is used to find the remainder when one number is divided by another, making Option B the correct answer. The other options use operators that do not match this description.",
  "B. The code compiles without issue, making Option D incorrect. The focus of this question is showing how the division and modulus of two numbers can be used to reconstitute one of the original operands. In this example, partA is the integer division of the two numbers. Since 3 does not divide 11 evenly, it is rounded down to 3. The variable partB is the remainder from the first expression, which is 2. The newDog variable is an expression that reconstitutes the original value for dog using the division value and the remainder. Note that due to operator precedence, the multiplication * operation is evaluated before the addition + operation. The result is the original value of 11 for dog is outputted by this program.",
  "B. The code compiles without issue, so Option D is incorrect. In this question’s switch statement, there are no break statements. Once the matching case statement, 30, is reached, all remaining case statements will be executed. The variable eaten is increased by 1, then 2, then reduced by 1, resulting in a final value of 2, making Option B the correct answer.",
  "C. Ternary operations require both right-hand expressions to be of compatible data types. In this example, the first right-hand expression of the outer ternary operation is of type String, while the second right-hand expression is of type int. Since these data types are incompatible, the code does not compile, and Option C is the correct answer.",
  "A. For this question, remember that if two String objects evaluate to true using ==, then they are the same object. If they are the same String object, equals() will trivially return true. Option A correctly reflects this principle. Option B is incorrect as two String objects that are not the same may still be equivalent in terms of equals(). For example, apples == new String(apples) evaluates to false, but equals() will evaluate to true on these String objects. Likewise, Options C and D are also incorrect because two String objects that are equivalent in terms of equals() may be different objects.",
  "B. The statement compiles and runs without issue, making Options C and D incorrect. Since we are given that myTestVariable is not null, the statement will always evaluate to false, making Option B the correct answer. Note that if myTestVariable was null, then the code would still compile but throw a NullPointerException calling equals() at runtime.",
  "D. The code does not compile, making Option D the correct answer. The reason the code does not compile is due to the test in the second if-then statement. The expression (streets && intersections > 1000) is invalid because streets is not a boolean expression and cannot be used as the left-hand side of the conjunctive logical && operator. The line of code is designed to resemble the corrected expression (streets > 1000 && intersections > 1000. Notice the fixed expression requires two relational > operators. If the second if-then statement was corrected, then the application would compile and produce two 1’s, making Option C the correct answer.",
  "B. The & and && (AND) operators are not interchangeable, as the conjunctive & operator always evaluates both sides of the expression, while the conditional conjunctive && operator only evaluates the right-hand side of the expression if the left side is determined to be true. This is why conditional operators are often referred to as short-circuit operators, skipping the right-hand side expression at runtime. For these reasons, Option B is the correct answer. Note that Option C is an incorrect statement as well, since it describes disjunctive (OR) operators.",
  "C. The code compiles, so Option A is incorrect. Since w starts out true, the third line takes the first right-hand side of the ternary expression returning and assigning 5 to x (post-increment operator) while incrementing y to 6. Note that the second right-hand side of the ternary expression y–– is not evaluated since ternary operators only evaluate one right-hand expression at runtime. On the fourth line, the value of w is set to !z. Since z is false, the value of w remains true. The final line outputs the value of (5+6) and (true ? 5 : 10), which is 11 5, making Option C the correct answer.",
  'A. The first assignment actually uses two String objects, the literal "bob" and the String created with the new keyword. Regardless, only the second object is assigned to the variable bob. The second variable, notBob, is assigned a reference to the value of the bob variable. This means that not only does the equals() test pass, but they are actually the same object, so the == test is true as well. Therefore, the correct answer is Option A.',
  "B. The question is about operator precedence and order of operation. The multiplication * and modulus % operators have the highest precedence, although what is inside the parentheses needs to be evaluated first. We can reduce the expression to the following: 12 + 6 * 3 % 2. Since multiplication * and modulus % have the same operator precedence, we evaluate them from left to right as follows: 12 + 6 * 3 % 2 → 12 + 18 % 2 → 12 + 0 → 12. We see that despite all of the operators on the right-hand side of the expression, the result is zero, leaving us a value of 12, making Option B the correct answer.",
  "D. The XOR ^ operator evaluates to true if p and q differ and false if they are the same. Therefore, the missing values are true and false, making Option D the correct answer.",
  "C. The key to understanding this question is to remember that the conditional conjunction && operator only executes the right-hand side of the expression if the left-hand side of the expression is true. If data is an empty array, then the expression ends early and nothing is output. The second part of the expression will return true if data’s first element is sound or logic. Since we know from the first part of the statement that data is of length at least one, no exception will be thrown. The final part of the expression with data.length<2 doesn’t change the output when data is an array of size one. Therefore, sound and logic are both possible outputs. For these reasons, Option C is the only result that is unexpected at runtime.",
  "C. In Option A, the division operator / incorrectly comes after the decrement –– operator. In Option B, the subtraction operator - incorrectly comes after the modulus % operator. In Option D, the division operator / incorrectly comes after the subtraction - operator. The correct answer is Option C, where all three operators have the same order of precedence.",
  "D. The exclusive or (XOR) ^ operator requires evaluating both operands to determine the result. For this reason, Options A and B are incorrect. For Option B, you can’t have a short-circuit operation if both operands are always read, therefore ^^ does not exist. Option C is an incorrect statement as the ^ operator only returns true if exactly one operand is true. Finally, Option D is correct as the ^ is only applied to boolean values in Java.",
  "C. The diagram represents the overlap of x and y, corresponding to when one of them is true. Therefore, x || y, Option C, most closely matches this relationship. Note that z is unused in the diagram and therefore is not required in any expression.",
  "D. The value of a case statement must be constant, a literal value, or final variable. Since red is missing the final attribute, no variable type allows the code to compile, making Option D the correct answer.",
  "C. The question is asking which operator represents greater than or equal to and which operator is strictly less than. The >= and < correspond to these operators, respectively. Therefore, Option C is the correct answer. Note that the question does not specify which order the operators needed to appear in, only to select the two operators that match the question description.",
  "B. The code compiles and runs without issue, making Options C and D incorrect. The key here is understanding operator precedence and applying the parentheses to override precedence correctly. The first expression is evaluated as follows: 10 * (2 + (3 + 2) / 5) → 10 * (2 + 5 / 5) → 10 * (2 + 1) → 10 * 3, with a final value of 30 for turtle. Since turtle is not less than 5, a value of 25 is assigned to hare. Since turtle is not less than hare, the last expression evaluates to Turtle wins!, which is outputted to the console, making Option B the correct answer.",
  'A. All of the terms of getResult() in this question evaluate to 0, since they are all less than or equal to 5. The expression can therefore be reduced to 0+0+0+0+"". Since Java evaluates the + operator from left to right, the four operands on the left are applied using numeric addition, resulting in the expression 0+"". This expression just converts the value to a String, resulting in an output of 0, making Option A the correct answer.',
  "A. The code compiles without issue, so Option D is incorrect. The key here is that the if-then statement in the runTest() method uses the assignment operator (=) instead of the (==) operator. The result is that spinner is assigned a value of true, and the statement (spinner = roller) returns the newly assigned value. The method then returns up, making Option A the correct answer. If the (==) operator had been used in the if-then statement, then the process would have branched to the else statement, with down being returned by the method.",
  "D. The conditional disjunction (OR) || operator is true if either of the operands are true, while the logical complement (!) operator reverses or flips a boolean value, making Option D the correct answer. The other options use operators that do not match this description. In particular, Options A and C include operators that can only be applied to numerical values, not boolean ones.",
  "A. While parentheses are recommended for ternary operations, especially embedded ones, they are not required, so Option C is incorrect.. The first ternary operation evaluates characters <= 4 as false, so the second ternary operation is executed. Since story > 1 is true, the final value of movieRating is 2.0, making Option A the correct answer.",
  "B. Barring any JVM limitations, a switch statement can have any number of case statements (including none) but at most one default statement, with Option B correctly identifying this relationship.",
  "A. The application uses the conditional conjunction && operator to test if weather[0] is null, but unfortunately this test does not work on zero-length arrays. Therefore, it is possible this code will throw an ArrayIndexOutOfBoundsException at runtime. The second part of the expression evaluates to true if the first input of weather matches sunny. The final part of the expression, && !false, is a tautology in that it is always true and has no impact on the expression. Either an exception will be thrown or text will be output, based on the value of weather, therefore Option A is the correct answer.",
  "D. The question looks a lot more difficult than it is. In fact, to solve it you don’t have to compute anything! You just have to notice that the logical complement operator (!), which can only be applied to boolean values, is being applied to a numeric value. Therefore, the answer is that the expression wouldn’t compile or run, making Option D the correct answer.",
  "C. The disjunctive logical || operator evaluates to true if either operand is true. Another way to look at it is that it only evaluates to false if both operands are false. Therefore, the missing values are both true, making Option C the correct answer.",
  "A. In Option B, the subtraction operator - incorrectly comes after the decrement –– operator. In Option C, the division operator / incorrectly comes after the increment ++ operator. In Option D, the modulus operator % incorrectly comes after the increment ++ operator. The correct answer is Option A, where the subtraction - and addition + operators are followed by the division / and multiplication * operators.",
  "C. The key to solving this problem is remembering that the type of the value returned by a ternary operation is determined by the expressions on the right-hand side. On line p1, the expressions are of type int, but the assignment is to the variable game, of type String. Since the assignment is invalid, the code does not compile, and Option C is correct."
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
    answerArray: mapAnswers(qz["answers"], a3[index]),
    explain: a3[index]
  };
});
// window.quizs = quizs
quizs[13].imageUrl = "./images/image-oca-ch3-14.png";
quizs[32].imageUrl = "./images/image-oca-ch3-33.png";
quizs[36].imageUrl = "./images/image-oca-ch3-37.png";
quizs[47].imageUrl = "./images/image-oca-ch3-48.png";

export default quizs;
