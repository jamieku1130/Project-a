const qzString = [
  {
    title:
      "Which answer choice can replace line 6 so the code continues to produce the same output?",
    code:
      '<code>3:   List&lt;String&gt; rug = new ArrayList&lt;&gt;();</code>\n<code>4:   rug.add("circle");</code>\n<code>5:   rug.add("square");</code>\n<code>6:   System.out.println(rug);</code>',
    answers: [
      "System.out.println(rug.asString);",
      "System.out.println(rug.asString());",
      "System.out.println(rug.toString);",
      "System.out.println(rug.toString());"
    ]
  },
  {
    title: "Which best describes this code?",
    code:
      "<code>class Stats {</code>\n<code>   private int data;</code>\n<code>   public int getData() {</code>\n<code>      return data;</code>\n<code>   }</code>\n<code>   public void setData(int data) {</code>\n<code>     this.data = data;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "It is a singleton.",
      "It is well encapsulated.",
      "It is immutable.",
      "It is both well encapsulated and immutable."
    ]
  },
  {
    title:
      "What design pattern or principle ensures that there will be no more than one instance of a class?",
    code: null,
    answers: ["Encapsulation", "Immutability", "Singleton", "Static"]
  },
  {
    title: "What is the output of this code?",
    code:
      '<code>class Laptop extends Computer {</code>\n<code><span epub:type="pagebreak" id="Page_189"></span>    public void startup() {</code>\n<code>        System.out.print("laptop-");</code>\n<code>    }</code>\n<code>}</code>\n<code>public class Computer {</code>\n<code>   public void startup() {</code>\n<code>      System.out.print("computer-");</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Computer computer = new Laptop();</code>\n<code>      Laptop laptop = new Laptop();</code>\n<code>      computer.startup();</code>\n<code>      laptop.startup();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "computer-laptop-",
      "laptop-computer-",
      "laptop-laptop-",
      "None of the above"
    ]
  },
  {
    title:
      "Which method can be correctly inserted into this class to meet the contract of the  equals() method? You may assume that text is not null.",
    code:
      "<code>class Button {</code>\n<code>   private String text;</code>\n<code>&nbsp;</code>\n<code>   public int hashCode() {</code>\n<code>      return text.hashCode();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "\n\n  \n\npublic boolean equals(Object o) { \n\n   if ( o == null ) return true; \n\n   if (! (o instanceof Button)) return false; \n\n   return text.equals(o.text); \n\n}\n",
      "\n\n  \n\npublic boolean equals(Object o) { \n\n   if ( o == null ) return true; \n\n   Button b = (Button) o; \n\n   return text.equals(b.text); \n\n}\n",
      "\n\n  \n\npublic boolean equals(Object o) { \n\n   if (! (o instanceof Button)) return false; \n\n   return text.equals(o.text); \n\n}\n",
      "\n\n  \n\npublic boolean equals(Object o) { \n\n   if (! (o instanceof Button)) return false; \n\n   Button b = (Button) o; \n\n   return text.equals(b.text); \n\n}\n"
    ]
  },
  {
    title:
      "Fill in the blanks:  ____________means the state of an object cannot be changed while  ____________means that it can.",
    code: null,
    answers: [
      "Immutability, mutability",
      "Rigidity, flexibility",
      "Static, instance",
      "None of the above"
    ]
  },
  {
    title: "Which is the first line to fail to compile?",
    code:
      "<code>class Tool {</code>\n<code>   void use() { }     // r1</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>class Hammer extends Tool {</code>\n<code>   private void use() { }  // r2</code>\n<code>   public void bang() { }  // r3</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: ["r1", "r2", "r3", "None of the above"]
  },
  {
    title:
      "Which of these classes properly implement(s) the singleton pattern?",
    code:
      '<code>class ExamAnswers {</code>\n<code>  private static ExamAnswers instance = new ExamAnswers();</code>\n<code>  private List&lt;String&gt; answers = new ArrayList&lt;&gt;();</code>\n<code><span epub:type="pagebreak" id="Page_191"></span>  public static List&lt;String&gt; getAnswers() {</code>\n<code>    return instance.answers;</code>\n<code>  }</code>\n<code>}</code>\n<code>class TestAnswers {</code>\n<code>   private static TestAnswers instance = new TestAnswers();</code>\n<code>   private List&lt;String&gt; answers = new ArrayList&lt;&gt;();</code>\n<code>   public static TestAnswers getTestAnswers() {</code>\n<code>      return instance;</code>\n<code>   }</code>\n<code>   public List&lt;String&gt; getAnswers() {</code>\n<code>      return answers;</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["ExamAnswers", "TestAnswers", "Both classes", "Neither class"]
  },
  {
    title: "What does the following print?",
    code:
      '<code>public class Transport {</code>\n<code>   static interface Vehicle {}</code>\n<code>   static class Bus implements Vehicle {}</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Bus bus = new Bus();</code>\n<code>      boolean n = null instanceof Bus;</code>\n<code>      boolean v = bus instanceof Vehicle;</code>\n<code>      boolean b = bus instanceof Bus;</code>\n<code>      System.out.println(n + " " + v + " " + b);</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "true true true",
      "false true true",
      "false false false",
      "None of the above"
    ]
  },
  {
    title:
      "What technique allows multiple variables from the same class to be shared across all instances of a class?",
    code: null,
    answers: ["Encapsulation", "Immutability", "Singleton", "Static"]
  },
  {
    title: "Which is not a requirement for a class to be immutable?",
    code: null,
    answers: [
      "A private constructor is provided.",
      "Any instance variables are private.",
      "Methods cannot be overridden.",
      "There are no setter methods."
    ]
  },
  {
    title:
      "Which statement is true about encapsulation while providing the broadest access allowed?",
    code: null,
    answers: [
      "Variables are public and methods are private.",
      "Variables are public and methods are public.",
      "Variables are private and methods are public.",
      "Variables are private and methods are private."
    ]
  },
  {
    title: "What does the following print?",
    code:
      '<code>class Laptop extends Computer {</code>\n<code>   String type = "laptop";</code>\n<code>}</code>\n<code>public class Computer {</code>\n<code>   String type = "computer";</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Computer computer = new Laptop();</code>\n<code>      Laptop laptop = new Laptop();</code>\n<code>      System.out.print(computer.type + "," + laptop.type);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "computer,laptop",
      "laptop,computer",
      "laptop,laptop",
      "None of the above"
    ]
  },
  {
    title: "Which of these classes is/are immutable?",
    code:
      '<code>public final class Flower {</code>\n<code>   private final String name;</code>\n<code>   private final List&lt;Integer&gt; counts;</code>\n<code>   public Flower(String name, List&lt;Integer&gt; counts) {</code>\n<code><span epub:type="pagebreak" id="Page_193"></span>      this.name = name;</code>\n<code>      this.counts = counts;</code>\n<code>   }</code>\n<code>   public String getName() {</code>\n<code>      return name;</code>\n<code>   }</code>\n<code>   public List&lt;Integer&gt; getCounts() {</code>\n<code>      return counts;</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public final class Plant {</code>\n<code>   private final String name;</code>\n<code>   private final List&lt;Integer&gt; counts;</code>\n<code>   public Plant(String name, List&lt;Integer&gt; counts) {</code>\n<code>      this.name = name;</code>\n<code>      this.counts = new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>   public String getName() {</code>\n<code>      return name;</code>\n<code>   }</code>\n<code>   public List&lt;Integer&gt; getCounts() {</code>\n<code>      return new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: ["Flower", "Plant", "Both classes", "Neither class"]
  },
  {
    title: "Which methods compile?",
    code:
      "<code>private static int numShovels;</code>\n<code>private int numRakes;</code>\n<code>&nbsp;</code>\n<code>public int getNumShovels() {</code>\n<code>   return numShovels;</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public int getNumRakes() {</code>\n<code>   return numRakes;</code>\n<code>}</code>",
    answers: [
      "Just getNumRakes()",
      "Just getNumShovels()",
      "Both methods",
      "Neither method"
    ]
  },
  {
    title: "Which methods compile?",
    code:
      "<code>private static int numShovels;</code>\n<code>private int numRakes;</code>\n<code>&nbsp;</code>\n<code>public static int getNumShovels() {</code>\n<code>   return numShovels;</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public static int getNumRakes() {</code>\n<code>   return numRakes;</code>\n<code>}</code>",
    answers: [
      "Just getNumRakes()",
      "Just getNumShovels()",
      "Both methods",
      "Neither method"
    ]
  },
  {
    title: "How many lines of the main method fail to compile?",
    code:
      "<code>11:  static interface Vehicle {}</code>\n<code>12:  static class Bus implements Vehicle {}</code>\n<code>13:</code>\n<code>14:  public static void main(String[] args) {</code>\n<code>15:     Bus bus = new Bus();</code>\n<code>16:</code>\n<code>17:     System.out.println(null instanceof Bus);</code>\n<code>18:     System.out.println(bus instanceof Vehicle);</code>\n<code>19:     System.out.println(bus instanceof Bus);</code>\n<code>20:     System.out.println(bus instanceof ArrayList);</code>\n<code>21:     System.out.println(bus instanceof Collection);</code>\n<code>22: }</code>",
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "Which variable declaration is the first line not to compile?",
    code:
      "<code>class Building {}</code>\n<code>class House extends Building{}</code>\n<code>&nbsp;</code>\n<code>public void convert() {</code>\n<code>   Building b =  new Building();</code>\n<code>   House h = new House();</code>\n<code>   Building bh = new House();</code>\n<code>   Building p = (House) b;</code>\n<code>   House q = (Building) h;</code>\n<code>   Building r = (Building) bh;</code>\n<code>   House s = (House) bh;</code>\n<code>}</code>",
    answers: ["p", "q", "r", "s"]
  },
  {
    title: "Which statement is true about the code that can fill in the blank?",
    code:
      "<code>class Sticker {</code>\n<code>   public int hashCode() {</code>\n<code>      return 1;</code>\n<code>   }</code>\n<code>   public boolean equals(Object o) {</code>\n<code>      return____________ ;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "It must return false.",
      "It must return true.",
      "It can return either true or false.",
      "None of the above."
    ]
  },
  {
    title: "What change is needed to make Secret well encapsulated?",
    code:
      "<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class Secret {</code>\n<code>&nbsp;</code>\n<code>   private int number = new Random().nextInt(10);</code>\n<code>   public boolean guess(int candidate) {</code>\n<code>      return number == candidate;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Change number to use a public access modifier.",
      "Declare a private constructor.",
      "Remove the guess method.",
      "None. It is already well encapsulated."
    ]
  },
  {
    title: "Which of these classes best implement(s) the singleton pattern?",
    code:
      "<code>class ExamAnswers {</code>\n<code>   private static ExamAnswers instance = new ExamAnswers();</code>\n<code>   private List&lt;String&gt; answers = new ArrayList&lt;&gt;();</code>\n<code>   private ExamAnswers() {}</code>\n<code>   public ExamAnswers getExamAnswers() {</code>\n<code>      return instance;</code>\n<code>   }</code>\n<code>   public List&lt;String&gt; getAnswers() {</code>\n<code>      return answers;</code>\n<code>   }</code>\n<code>}</code>\n<code>class TestAnswers {</code>\n<code>   private static TestAnswers instance = new TestAnswers();</code>\n<code>   private List&lt;String&gt; answers = new ArrayList&lt;&gt;();</code>\n<code>   private TestAnswers() {}</code>\n<code>   public static TestAnswers getTestAnswers() {</code>\n<code>      return instance;</code>\n<code>   }</code>\n<code>   public List&lt;String&gt; getAnswers() {</code>\n<code>      return answers;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["ExamAnswers", "TestAnswers", "Both classes", "Neither class"]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>public class Cars {</code>\n<code>  static {</code>\n<code><span epub:type="pagebreak" id="Page_197"></span>     System.out.println("static");</code>\n<code>  }</code>\n<code>  private static void drive() {</code>\n<code>     System.out.println("fast");</code>\n<code>  }</code>\n<code>  public static void main(String[] args) {</code>\n<code>     drive();</code>\n<code>     drive();</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "One",
      "Two",
      "Three",
      "None of the above. The code does not compile."
    ]
  },
  {
    title: "Which is not a true statement given this diagram?",
    code: null,
    answers: [
      "Instance methods in the Blanket class can call the Flashlight class’s turnOn().",
      "Instance methods in the Flashlight class can call the Flashlight class’s replaceBulb().",
      "Instance methods in the Phone class can call the Blanket class’s wash().",
      "Instance methods in the Tent class can call the Tent class’s pitch()."
    ]
  },
  {
    title:
      "Given the diagram in the previous question, how many of the classes can call the display() method?",
    code: null,
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "What does the following print?",
    code:
      '<code>1:   class SmartWatch extends Watch {</code>\n<code>2:      private String getType() { return "smart watch"; }</code>\n<code>3:      public String getName(String suffix) {</code>\n<code><span epub:type="pagebreak" id="Page_198"></span>4:         return getType() + suffix;</code>\n<code>5:      }</code>\n<code>6:   }</code>\n<code>7:   public class Watch {</code>\n<code>8:      private String getType() { return "watch"; }</code>\n<code>9:      public String getName(String suffix) {</code>\n<code>10:        return getType() + suffix;</code>\n<code>11:     }</code>\n<code>12:     public static void main(String[] args) {</code>\n<code>13:        Watch watch = new Watch();</code>\n<code>14:        SmartWatch smartWatch = new SmartWatch();</code>\n<code>15:        System.out.print(watch.getName(","));</code>\n<code>16:        System.out.print(smartWatch.getName(""));</code>\n<code>17:     }</code>\n<code>18:  }</code>',
    answers: [
      "smart watch,watch",
      "watch,smart watch",
      "watch,watch",
      "None of the above"
    ]
  },
  {
    title: "What does the following print?",
    code:
      '<code>public class Transport {</code>\n<code>   static interface Vehicle {}</code>\n<code>   static class Bus implements Vehicle {}</code>\n<code>   static class Van extends Bus {}</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Bus bus = new Van();</code>\n<code>      Van van = new Van();</code>\n<code>      Van[] vans = new Van[0];</code>\n<code>&nbsp;</code>\n<code>      boolean b = bus instanceof Vehicle;</code>\n<code>      boolean v = van instanceof Vehicle;</code>\n<code>      boolean a = vans instanceof Vehicle[];</code>\n<code>&nbsp;</code>\n<code>      System.out.println(b + " " + v + " " + a);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "true true true",
      "false true true",
      "true false false",
      "None of the above. The code does not compile"
    ]
  },
  {
    title:
      "Which of the following correctly fills in the blank so this code compiles and prints true?",
    code:
      '<code>public class Button {</code>\n<code>   private String text;</code>\n<code>   public int hashCode() {</code>\n<code>      return text.hashCode();</code>\n<code>   }</code>\n<code>   public boolean equals(Object o) {</code>\n<code>      if (____________)  return false;</code>\n<code>      Button b = (Button) o;</code>\n<code>      return text.equals(b.text);</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Button b1 = new Button();</code>\n<code>      Button b2 = new Button();</code>\n<code>      b1.text = "mickey";</code>\n<code>      b2.text = "mickey";</code>\n<code>      System.out.println(b1.equals(b2));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "(o instanceof Button)",
      "(o instanceOf Button)",
      "!(o instanceof Button)",
      "!(o instanceOf Button)"
    ]
  },
  {
    title: "Which is the first line to fail to compile?",
    code:
      "<code>class Tool {</code>\n<code>   void use() { }     // r1</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>class Hammer extends Tool {</code>\n<code>   private void use(String s) { }  // r2</code>\n<code>   public void bang() { }  // r3</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: ["r1", "r2", "r3", "None of the above"]
  },
  {
    title: "What is lazy instantiation?",
    code: null,
    answers: [
      "A technique that can be used in an immutable class to wait until the first use to create the object",
      "A technique that can be used in a singleton to wait until the first use to create the object",
      "A technique that can be used in an immutable class to save memory when creating the object",
      "A technique that can be used in a singleton to save memory when creating the object"
    ]
  },
  {
    title: "Which variable declaration is the first line not to compile?",
    code:
      "<code>30:  class Building {}</code>\n<code>31:  class House extends Building{}</code>\n<code>32:</code>\n<code>33:  public void convert() {</code>\n<code>34:     Building b =  new Building();</code>\n<code>35:     House h = new House();</code>\n<code>36:     Building bh = new House();</code>\n<code>37:     House p = (House) b;</code>\n<code>38:     House q = (House) h;</code>\n<code>39:     House r = (House) bh;</code>\n<code>40:  }</code>",
    answers: ["p", "q", "r", "None of the above"]
  },
  {
    title: "Which statement about encapsulation is not true?",
    code: null,
    answers: [
      "Encapsulation allows putting extra logic in the getter and setter methods.",
      "Encapsulation can use immutable instance variables in the implementation.",
      "Encapsulation causes two classes to be more tightly tied together.",
      "Encapsulation makes it easier to change the instance variables in the future."
    ]
  },
  {
    title: "Which of these classes is/are immutable?",
    code:
      '<code>public class Flower {</code>\n<code>   private final String name;</code>\n<code><span epub:type="pagebreak" id="Page_201"></span>   private final List&lt;Integer&gt; counts;</code>\n<code>   public Flower(String name, List&lt;Integer&gt; counts) {</code>\n<code>      this.name = name;</code>\n<code>      this.counts = new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>   public final String getName() {</code>\n<code>      return name;</code>\n<code>   }</code>\n<code>   public final List&lt;Integer&gt; getCounts() {</code>\n<code>      return new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Plant {</code>\n<code>   private final String name;</code>\n<code>   private final List&lt;Integer&gt; counts;</code>\n<code>   public Plant(String name, List&lt;Integer&gt; counts) {</code>\n<code>      this.name = name;</code>\n<code>      this.counts = new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>   public String getName() {</code>\n<code>      return name;</code>\n<code>   }</code>\n<code>   public List&lt;Integer&gt; getCounts() {</code>\n<code>      return new ArrayList&lt;&gt;(counts);</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: ["Flower", "Plant", "Both classes", "Neither class"]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>public class Cars {</code>\n<code>   private static void drive() {</code>\n<code>       static {</code>\n<code>          System.out.println("static");</code>\n<code>       }</code>\n<code>       System.out.println("fast");</code>\n<code><span epub:type="pagebreak" id="Page_202"></span>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      drive();</code>\n<code>      drive();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "One",
      "Two",
      "Three",
      "None of the above. The code does not compile."
    ]
  },
  {
    title:
      "How many of the following pairs of values can fill in the blanks to comply with the contract of the hashCode() and equals() methods?",
    code:
      "<code>class Sticker {</code>\n<code>   public int hashCode() {</code>\n<code>      return _____________;</code>\n<code>   }</code>\n<code>   public boolean equals(Object o) {</code>\n<code>      return _____________;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"],
    ol: [
      "1, false",
      "1, true",
      "new Random().nextInt(), false",
      "new Random().nextInt(), true"
    ]
  },
  {
    title:
      "How do you change the value of an instance variable in an immutable class?",
    code: null,
    answers: [
      "Call the setter method.",
      "Remove the final modifier and set the instance variable directly.",
      "Use a method other than Option A or B.",
      "You can’t."
    ]
  },
  {
    title:
      "Which technique or pattern requires instance variables to implement?",
    code: null,
    answers: ["Is-a", "Object composition", "Singleton", "None of the above"]
  },
  {
    title: "How many lines of output does the following generate?",
    code:
      '<code>public class HowMany {</code>\n<code>   static {</code>\n<code>      System.out.println("any");</code>\n<code>   }</code>\n<code>   {</code>\n<code>      System.out.println("more");</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      new HowMany();</code>\n<code>      new HowMany();</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>',
    answers: [
      "Two",
      "Three",
      "Four",
      "None of the above. The code does not compile."
    ]
  },
  {
    title: "Which is the first line to fail to compile?",
    code:
      "<code>class Tool {</code>\n<code>   default void use() { }     // r1</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>class Hammer extends Tool {</code>\n<code>   public void use() { }  // r2</code>\n<code>   public void bang() { }  // r3</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: ["r1", "r2", "r3", "None of the above"]
  },
  {
    title:
      "Which variable declaration is the first line to throw a ClassCastException at runtime?",
    code:
      "<code>class Building {}</code>\n<code>class House extends Building{}</code>\n<code>&nbsp;</code>\n<code>public void convert() {</code>\n<code>   Building b =  new Building();</code>\n<code>   House h = new House();</code>\n<code>   Building bh = new House();</code>\n<code>   House p = (House) b;</code>\n<code>   House q = (House) h;</code>\n<code>   House r = (House) bh;</code>\n<code>}</code>",
    answers: ["p", "q", "r", "None of the above"]
  },
  {
    title:
      "Which of the following values can fill in the blank for the class to be correctly implemented?",
    code:
      "<code>class Sticker {</code>\n<code>   public int hashCode(Object o) {</code>\n<code>      return_____________ ;</code>\n<code>   }</code>\n<code>   public boolean equals(Object o) {</code>\n<code>      return true;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["I", "I and II", "I, II, and III", "I and III"],
    ol: ["-1", "5", "new Random().nextInt()"]
  }
];

const a11 = [
  "D. The toString() method is declared in the Object class. Therefore it is available to be called in any Java class and is overridden in some. Java automatically calls the toString() method when you print an object, making Option D correct. Option C is incorrect because toString() is a method, not a variable.",
  "B. This code is not a singleton because it has a public constructor. Remember that a public no-argument constructor is provided automatically if no constructor is coded. This code is well encapsulated because the instance variable is private. It is not immutable since there is a setter method. Therefore, Option B is correct.",
  "C. The singleton pattern ensures there will be no more than one instance of the object. Depending on how it is implemented, it is possible for there to be zero instances. But it is not possible to have more than one, making Option C correct. Option D means the variable is shared across instances or even without an instance being created but does not limit the number of the instances of the class itself.",
  "C. Both objects are instances of the class Laptop. This means the startup() method in the Laptop class gets called both times thanks to polymorphism.",
  "D. We know that the variable o that equals() is called on isn’t null, since we can’t call instance methods on a null reference. However, a null reference could be passed as a method parameter. If a null is passed in, the method should return false since an object and a null are not equal. Options A and B are incorrect because the first line of those methods should return false rather than true. Option C is incorrect because the cast is missing. The Object class does not have a text variable available. Option D shows a properly implemented equals() method and is correct.",
  "A. Option A is correct because mutability means the state can change and immutability means it cannot. In Option C, static means the state isn’t tied to an instance. In Option B, rigidity is not a common programming term.",
  "B. The Hammer class is a subclass of the Tool class. Since the use() method in Hammer is intended to override the one in Tool, there are certain rules. One is that the access modifier must not be more specific. Therefore, trying to make it private is a problem. Option B is correct and r2 is the only line with a compiler error in this code.",
  "D. The singleton pattern requires that only one instance of the class exist. Neither of these classes meets that requirement since they have the default no-argument constructor available. There should have been a private constructor in each class. Therefore, Option D is correct. Remember that the exam doesn’t always include import statements to simplify the code you need to read.",
  "B. While using null with instanceof compiles, it always returns false. The other two instanceof calls show that instanceof can be used with both classes and interfaces. They both return true, making Option B correct.",
  "D. The static keyword is used to create a class-level variable, making Option D correct. Note that a singleton is where you limit a class so only one instance can be created. This means there are not multiple instances to share a variable across.",
  "A. Option A is a requirement of a singleton class rather than an immutable one. The other three options are requirements of an immutable class.",
  "C. If the variables are public, the class is not encapsulated because callers have direct access to them. This rules out Options A and B. Having private methods doesn’t allow the callers to use the data, making Option D an undesirable answer. Option C is correct and the classic definition of encapsulation where the data is not exposed directly.",
  "A. While both objects are instances of Laptop, we are not calling methods in this example. Virtual method invocation only works for methods, not instance variables. For instance variables, Java actually looks at the type of the reference and calls the appropriate variable. This makes each reference call a different class’s instance variable in this example, and Option A is correct.",
  "B. An immutable class must not allow the state to change. In the Flower class, the caller has a reference to the List being passed in and can change the size or elements in it. Similarly, any class with a reference to the object can get the List by calling get() and make these changes. The Flower class is not immutable. The Plant class shows how to fix these problems and is immutable. Option B is correct.",
  "C. An instance method can access both instance variables and static variables. Both methods compile and Option C is correct.",
  "B. A static method can access static variables, but not instance variables. The getNumRakes() method does not compile, so Option B is correct.",
  "A. You are allowed to use null with instanceof; it just prints false. The bus variable is both a Vehicle and a Bus, so lines 18 and 19 print true. Then it gets interesting. We know that bus is not an ArrayList or Collection. However, the compiler only knows that bus is not an ArrayList because ArrayList is a concrete class. Line 20 does not compile. The compiler can’t definitively state that bus is not a Collection. Some future program could create a subclass of Bus that does implement Collection, so this line compiles. Therefore, only line 20 fails to compile, and Option A is correct.",
  "B. Building and House are both properly declared inner classes. Any House object can be stored in a Building reference, making the declarations for p and r compile. The declaration for s is also correct. It so happens that bh is a House object, so the cast works. The declaration of q is a problem though. While the cast itself is fine, a Building cannot be stored in a House reference, which means the assignment fails to compile. Option B is correct and is the only line with a compiler error in this code. Note that if the declaration of q was removed, the declaration of p would produce a ClassCastException at runtime.",
  "D. If two instances of a class have the same hash code, they might or might not be equal. The reverse is not true. If two objects are equal, they must have the same hash code in order to comply with the contracts of these methods. However, in this case, the answer is none of the above because the method can’t simply return true or false. Based on the rules of equals(), if null is passed in, the result must be false. If an object identity is passed in, the result must be true due to reflexivity. As a result, Option D is correct.",
  "D. This class is a good example of encapsulation. It has a private instance variable and is accessed by a public method. No changes are needed to encapsulate it, and Option D is correct.",
  "B. The singleton pattern requires that only one instance of the class exist. The ExamAnswers class is close. However, getExamAnswers() is not static, so you can’t retrieve the instance. Option B is the answer because TestAnswers is a correct implementation. It has a static variable representing the one instance and a static method to retrieve it.",
  "C. The static initializer is only run once. The static method is run twice since it is called twice. Therefore, three lines are printed, and Option C is correct.",
  "C. Option A is allowed because the turnOn() method is public and can be called from anywhere. Options B and D are allowed since the method is in the same class, which is always allowed! Option C is not allowed because wash() is a package-private method in another package. Option C is the correct answer.",
  "B. The display() method has protected access. This means it can be accessed by instance methods in the same package and any subclasses. There are no subclasses in this example, so we only need to count the classes in the same package. Option B is correct because Flashlight and Phone are in the package.",
  "B. Line 15 calls the method on line 9 since it is a Watch object. That returns watch, making Option A incorrect. Line 16 calls the method on line 3 since it is a SmartWatch object and the method is properly overridden. That returns smart watch, so Option B is the answer, and Option C is incorrect.",
  "A. Clearly a Bus is a Vehicle since the Bus class implements Vehicle. The Van class is also a Vehicle since it extends Bus. This question also confirms you know that arrays can be tested with instanceof, which they can. Therefore, Option A is correct.",
  "C. There is no instanceOf keyword, making Options B and D incorrect. There is an instanceof keyword. If an object is the wrong type, the equals() method should return false, making Option C the answer.",
  "D. The Hammer class is a subclass of the Tool class. Luckily, the use() method has a different signature so it is not an override. This means it is fine that the access modifier is stricter, and Option D is correct. Line r3 is a valid method unrelated to the superclass.",
  "B. Lazy instantiation is part of a possible implementation for the singleton pattern. It defers creating the object until the first caller requests it. While this does save memory, it only does so if the object is never requested. This does not save memory when actually creating the object. Option B is correct.",
  "D. Notice how the code begins at line 30. This means you have to infer the surrounding code. Here it is reasonable to assume the classes are inner classes. Building and House are defined correctly. Any House or Building reference can potentially be a House. The compiler does not know which ones work and which don’t. This means all three casts compile.",
  "C. Encapsulation doesn’t allow callers access to the instance variables, which makes it easier to change the code. The instance variables can be any type, which means they can be mutable or immutable. There are not constraints on the implementation of methods. The purpose of encapsulation is to lessen how tightly tied or coupled the classes are. Option C is the opposite of this, making it the answer.",
  "A. An immutable class must not allow the state to change. The Flower class does this correctly. While the class isn’t final, the getters are, so subclasses can’t change the value returned. The Plant class lacks this protection, which makes it mutable. Option A is correct.",
  "D. A static initializer is not allowed inside of a method. It should go on the class level rather than the method level. Therefore, the code does not compile, and Option D is correct.",
  "A. An object is required to have the same value for repeated calls to hashCode() if the value has not changed. This makes III and IV incorrect. If two objects are equal, they are required to have the same hash code. Since equality must be reflexive, it cannot return false if the same object is passed, and I is incorrect. Since equals() must return false when null is passed in, it cannot be true and II is incorrect. Therefore, Option A is the answer. ",
  "D. By definition, you cannot change the value of an instance variable in an immutable class. There are no setter methods, making Option A incorrect. While Option B would allow you to set the value, the class would no longer be immutable. Option D is correct. If you are an advanced developer, you might know that you can use reflection to change the value. Don’t read into questions like this on the exam. Reflection isn’t on the exam, so you can pretend it doesn’t exist.",
  "B. Option A is incorrect because the “is-a” principle is about inheritance. For example, a String is an Object. Option C is incorrect because singletons require a static variable to ensure there is only one instance. While it is common to have instance variables as well, this is not required to implement the pattern. Option B is correct. For an object to be composed of other objects, instance variables are required.",
  "B. The static initializer only runs once since statics are shared by all instances. The instance initializer runs twice because we call the constructor twice. Therefore, Option B is correct.",
  "A. While there is a default keyword in Java, it is only allowed in interfaces or in switch statements. It is not a visibility modifier. The author of this code probably intended for the method to be package-private, which doesn’t use a visibility modifier. The line with default doesn’t compile, so Option A is correct. If default was removed, the code would all compile.",
  "A. The reference b points to a Building object, which cannot be stored in a House reference. This means the assignment to p compiles but fails at runtime. The other two casts would run without issue if the code got that far.",
  "C. The hashCode() method in the Object class does not have a parameter. Therefore, the Sticker class provides an overloaded method rather than an overridden one. Since it is not an overridden method, the contract for the Object class’ hashCode() method does not apply, and any int value can be returned. Therefore, Option C is correct."
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
    answerArray: mapAnswers(qz["answers"], a11[index]),
    explain: a11[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[22].imageUrl = "./images/image-ocp-ch11-23.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
