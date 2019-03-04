const qzString = [
  {
    title: "Which of the following declarations does not compile?",
    code: null,
    answers: [
      "double num1, int num2 = 0;",
      "int num1, num2;",
      "int num1, num2 = 0;",
      "int num1 = 0, num2 = 0;"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>public static void main(String... args) {</code>\n<code>   String chair, table = "metal";</code>\n<code>   chair = chair + table;</code>\n<code>   System.out.println(chair);</code>\n<code>}</code>',
    answers: ["metal", "metalmetal", "nullmetal", "The code does not compile."]
  },
  {
    title: "Which is correct about an instance variable of type String?",
    code: null,
    answers: [
      "It defaults to an empty string.",
      "It defaults to null.",
      "It does not have a default value.",
      "It will not compile without initializing on the declaration line."
    ]
  },
  {
    title: "Which of the following is not a valid variable name?",
    code: null,
    answers: ["_blue", "2blue", "blue$", "Blue"]
  },
  {
    title:
      "Which of these class names best follows standard Java naming conventions?",
    code: null,
    answers: ["fooBar", "FooBar", "FOO_BAR", "F_o_o_B_a_r"]
  },
  {
    title: "How many of the following methods compile?",
    code:
      '<code>public String convert(int value) {</code>\n<code>&nbsp;  return value.toString();</code>\n<code>}</code>\n<code>public String convert(Integer value) {</code>\n<code>&nbsp;  return value.toString();</code>\n<code><span epub:type="pagebreak" id="Page_19"></span>}</code>\n<code>public String convert(Object value) {</code>\n<code>&nbsp;  return value.toString();</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which of the following does not compile?",
    code: null,
    answers: [
      "int num = 999;",
      "int num = 9_9_9;",
      "int num = _9_99;",
      "None of the above; they all compile."
    ]
  },
  {
    title: "Which of the following is a wrapper class?",
    code: null,
    answers: ["int", "Int", "Integer", "Object"]
  },
  {
    title: "What is the result of running this code?",
    code:
      '<code>public class Values {</code>\n<code>   integer a = Integer.valueOf("1");</code>\n<code>   public static void main(String[] nums) {</code>\n<code>      integer a = Integer.valueOf("2");</code>\n<code>      integer b = Integer.valueOf("3");</code>\n<code>      System.out.println(a + b);</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "4",
      "5",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which best describes what the new keyword does?",
    code: null,
    answers: [
      "Creates a copy of an existing object and treats it as a new one",
      "Creates a new primitive",
      "Instantiates a new object",
      "Switches an object reference to a new one"
    ]
  },
  {
    title: "Which is the first line to trigger a compiler error?",
    code:
      "<code>double d1 = 5f;    // p1</code>\n<code>double d2 = 5.0;   // p2</code>\n<code>float f1 = 5f;     // p3</code>\n<code>float f2 = 5.0;    // p4</code>",
    answers: ["p1", "p2", "p3", "p4"]
  },
  {
    title:
      "Which of the following lists of primitive types are presented in order from smallest to largest data type?",
    code: null,
    answers: [
      "byte, char, float, double",
      "byte, char, double, float",
      "char, byte, float, double",
      "char, double, float, bigint"
    ]
  },
  {
    title:
      "Which of the following is not a valid order for elements in a class?",
    code: null,
    answers: [
      "Constructor, instance variables, method names",
      "Instance variables, constructor, method names",
      "Method names, instance variables, constructor",
      "None of the above: all orders are valid."
    ]
  },
  {
    title: "Which of the following lines contains a compiler error?",
    code:
      '<code>String title = "Weather";                // line x1</code>\n<code>int hot, double cold;                    // line x2</code>\n<code>System.out.println(hot + " " + title);   // line x3</code>',
    answers: ["x1", "x2", "x3", "None of the above"]
  },
  {
    title: "How many instance initializers are in this code?",
    code:
      '<code>1:  public class Bowling {</code>\n<code>2:     { System.out.println(); }</code>\n<code>3:     public Bowling () {</code>\n<code>4:        System.out.println();</code>\n<code>5:     }</code>\n<code>6:     static { System.out.println(); }</code>\n<code><span epub:type="pagebreak" id="Page_21"></span>7:     { System.out.println(); }</code>\n<code>8:  }</code>\n<code>&nbsp;</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Of the types double, int, and short, how many could fill in the blank to have this code output 0?",
    code:
      "<code>public static void main(String[] args) {</code>\n<code>    _______defaultValue;</code>\n<code>   System.out.println(defaultValue);</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What is true of the finalize() method?",
    code: null,
    answers: [
      "It may be called zero or one times.",
      "It may be called zero or more times.",
      "It will be called exactly once.",
      "It may be called one or more times."
    ]
  },
  {
    title: "Which of the following is not a wrapper class?",
    code: null,
    answers: ["Double", "Integer", "Long", "String"]
  },
  {
    title:
      "Suppose you have the following code. Which of the images best represents the state of the references right before the end of the main method, assuming garbage collection hasn’t run?",
    code:
      '<code>1:  public class Link {</code>\n<code>2:     private String name;</code>\n<code>3:     private Link next;</code>\n<code>4:     public Link(String name, Link next) {</code>\n<code>5:       this.name = name;</code>\n<code>6:       this.next = next;</code>\n<code>7:     }</code>\n<code><span epub:type="pagebreak" id="Page_22"></span>8:     public void setNext(Link next) {</code>\n<code>9:       this.next = next;</code>\n<code>10:    }</code>\n<code>11:    public Link getNext() {</code>\n<code>12:       return next;</code>\n<code>13:    }</code>\n<code>14:    public static void main(String... args) {</code>\n<code>15:       Link link1 = new Link("x", null);</code>\n<code>16:       Link link2 = new Link("y", link1);</code>\n<code>17:       Link link3 = new Link("z", link2);</code>\n<code>18:       link2.setNext(link3);</code>\n<code>19:       link3.setNext(link2);</code>\n<code>20:       link1 = null;</code>\n<code>21:       link3 = null;</code>\n<code>22:    }</code>\n<code>23: }</code>',
    answers: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
    title: "Which type can fill in the blank?",
    code: "<code> _______&nbsp;&nbsp;pi = 3.14;</code>",
    answers: ["byte", "float", "double", "short"]
  },
  {
    title: "What is the first line in the following code to not compile?",
    code:
      "<code>public static void main(String[] args) {</code>\n<code>   int Integer = 0;        // k1</code>\n<code>   Integer int = 0;        // k2</code>\n<code>   Integer ++;             // k3</code>\n<code>   int++;                  // k4</code>\n<code>}</code>",
    answers: ["k1", "k2", "k3", "k4"]
  },
  {
    title:
      "Suppose foo is a reference to an instance of a class. Which of the following is not true about foo.bar?",
    code: null,
    answers: [
      "bar is an instance variable.",
      "bar is a local variable.",
      "It can be used to read from bar.",
      "It can be used to write to bar."
    ]
  },
  {
    title: "Which of the following is not a valid class declaration?",
    code: null,
    answers: [
      "class building {}",
      "class Cost$ {}",
      "class 5MainSt {}",
      "class _Outside {}"
    ]
  },
  {
    title:
      "Which of the following can fill in the blanks to make this code compile?",
    code: "<code> _______d = new_______ (1_000_000_.00);</code>",
    answers: [
      "double, double",
      "double, Double",
      "Double, double",
      "None of the above"
    ]
  },
  {
    title: "Which is correct about a local variable of type String?",
    code: null,
    answers: [
      "It defaults to an empty string.",
      "It defaults to null.",
      "It does not have a default value.",
      "It will not compile without initializing on the declaration line."
    ]
  },
  {
    title:
      "Of the types double, int, long, and short, how many could fill in the blank to have this code output 0?",
    code:
      "<code>static  _______defaultValue;</code>\n<code>&nbsp;</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      System.out.println(defaultValue);</code>\n<code>   }</code>",
    answers: ["One", "Two", "Three", "Four"]
  },
  {
    title: "Which of the following is true about primitives?",
    code: null,
    answers: [
      "You can call methods on a primitive.",
      "You can convert a primitive to a wrapper class object simply by assigning it.",
      "You can convert a wrapper class object to a primitive by calling valueOf().",
      "You can store a primitive directly into an ArrayList."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>Integer integer = new Integer(4);</code>\n<code>System.out.print(integer.byteValue());</code>\n<code>&nbsp;</code>\n<code>System.out.print("-");</code>\n<code>&nbsp;</code>\n<code>int i = new Integer(4);</code>\n<code>System.out.print(i.byteValue());</code>',
    answers: [
      "4-0",
      "4-4",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the following code, fill in the blank to have the code print bounce.",
    code:
      '<code>public class TennisBall {</code>\n<code>   public TennisBall() {</code>\n<code>      System.out.println("bounce");</code>\n<code>   }</code>\n<code>   public static void main(String[] slam) {</code>\n<code>       _____________________</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "TennisBall;",
      "TennisBall();",
      "new TennisBall;",
      "new TennisBall();"
    ]
  },
  {
    title:
      'Which of the following correctly assigns animal to both variables? 1.String cat = "animal", dog = "animal"; 2. String cat = "animal"; dog = "animal" 3.String cat, dog = "animal"; 4.String cat, String dog = "animal";',
    code: null,
    answers: ["I", "I, II", "I, III", "I, II, III, IV"]
  },
  {
    title:
      "Which two primitives have wrapper classes that are not merely the name of the primitive with an uppercase letter?",
    code: null,
    answers: [
      "byte and char",
      "byte and int",
      "char and int",
      "None of the above"
    ]
  },
  {
    title: "Which of the following is true about String instance variables?",
    code: null,
    answers: [
      "They can be set to null.",
      "They can never be set from outside the class they are defined in.",
      "They can only be set in the constructor.",
      "They can only be set once per run of the program."
    ]
  },
  {
    title: "Which statement is true about primitives?",
    code: null,
    answers: [
      "Primitive types begin with a lowercase letter.",
      "Primitive types can be set to null.",
      "String is a primitive.",
      "You can create your own primitive types."
    ]
  },
  {
    title: "How do you force garbage collection to occur at a certain point?",
    code: null,
    answers: [
      "Call System.forceGc()",
      "Call System.gc()",
      "Call System.requireGc()",
      "None of the above"
    ]
  },
  {
    title:
      "How many of the String objects are eligible for garbage collection right before the end of the main method?",
    code:
      '<code>public static void main(String[] fruits) {</code>\n<code>   String fruit1 = new String("apple");</code>\n<code>   String fruit2 = new String("orange");</code>\n<code>   String fruit3 = new String("pear");</code>\n<code>&nbsp;</code>\n<code>   fruit3 = fruit1;</code>\n<code>   fruit2 = fruit3;</code>\n<code>   fruit1 = fruit2;</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Which of the following can fill in the blanks to make this code compile?",
    code: "<code> _______d = new_______ (1_000_000.00);</code>",
    answers: [
      "double, double",
      "double, Double",
      "Double, double",
      "None of the above"
    ]
  },
  {
    title: "What does the following output?",
    code:
      '<code>1:  public class InitOrder {</code>\n<code>2:     public String first = "instance";</code>\n<code>3:     public InitOrder() {</code>\n<code>4:        first = "constructor";</code>\n<code>5:     }</code>\n<code>6:     { first = "block";  }</code>\n<code>7:     public void print() {</code>\n<code>8:        System.out.println(first);</code>\n<code>9:     }</code>\n<code>10:    public static void main(String... args) {</code>\n<code>11:      new InitOrder().print();\t</code>\n<code>12:    }</code>\n<code>13: }</code>',
    answers: ["block", "constructor", "instance", "The code does not compile."]
  },
  {
    title: "How many of the following lines compile?",
    code:
      "<code>int i = null;</code>\n<code>Integer in = null;</code>\n<code>String s = null;</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Which pairs of statements can accurately fill in the blanks in this table?",
    code: null,
    answers: [
      "Blank 1: an instance method only, Blank 2: a static method only",
      "Blank 1: an instance or static method, Blank 2: a static method only",
      "Blank 1: an instance method only, Blank 2: an instance or static method",
      "Blank 1: an instance or static method, Blank 2: an instance or static method"
    ]
  },
  {
    title: "Which of the following does not compile?",
    code: null,
    answers: [
      "double num = 2.718;",
      "double num = 2._718;",
      "double num = 2.7_1_8;",
      "None of the above; they all compile."
    ]
  },
  {
    title:
      "Which of the following lists of primitive numeric types is presented in order from smallest to largest data type?",
    code: null,
    answers: [
      "byte, short, int, long",
      "int, short, byte, long",
      "short, byte, int, long",
      "short, int, byte, long"
    ]
  },
  {
    title: "Fill in the blank to make the code compile:",
    code:
      '<code>package animal;</code>\n<code>public class Cat {</code>\n<code>  public String name;</code>\n<code>  public static void main(String[] meow) {</code>\n<code>    Cat cat = new Cat();</code>\n<code>    ______________ = "Sadie";</code>\n<code>  }</code>\n<code>}</code>',
    answers: ["cat.name", "cat-name", "cat.setName", "cat[name]"]
  },
  {
    title:
      "Which of the following is the output of this code, assuming it runs to completion?",
    code:
      '<code>package store;</code>\n<code>public class Toy {</code>\n<code>   public void play() {</code>\n<code>      System.out.print("play-");</code>\n<code>   }</code>\n<code>   public void finalizer() {</code>\n<code>      System.out.print("clean-");</code>\n<code>   }</code>\n<code>   public static void main(String[] fun) {</code>\n<code>      Toy car = new Toy();</code>\n<code>      car.play();</code>\n<code>      System.gc();</code>\n<code>      Toy doll = new Toy();</code>\n<code>      doll.play();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "play-",
      "play-play-",
      "play-clean-play-",
      "play-play-clean-clean-"
    ]
  },
  {
    title:
      "Which is the most common way to fill in the blank to implement this method?",
    code:
      "<code>public class Penguin {</code>\n<code>&nbsp;</code>\n<code>   private double beakLength;</code>\n<code>&nbsp;</code>\n<code>   public static void setBeakLength(Penguin p, int b) {</code>\n<code>      _____________________________</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "p.beakLength = b;",
      "p['beakLength'] = b;",
      "p[beakLength] = b;",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks to indicate whether a primitive or wrapper class can be assigned without the compiler using the autoboxing feature.",
    code:
      '<code> _______first = Integer.parseInt("5");</code>\n<code> _______second = Integer.valueOf("5");</code>',
    answers: ["int, int", "int, Integer", "Integer, int", "Integer, Integer"]
  },
  {
    title:
      "How many objects are eligible for garbage collection right before the end of the main method?",
    code:
      "<code>1:   public class Person {</code>\n<code>2:      public Person youngestChild;</code>\n<code>3:</code>\n<code>4:      public static void main(String... args) {</code>\n<code>5:         Person elena = new Person();</code>\n<code>6:         Person diana = new Person();</code>\n<code>7:         elena.youngestChild = diana;</code>\n<code>8:         diana = null;</code>\n<code>9:         Person zoe = new Person();</code>\n<code>10:        elena.youngestChild = zoe;</code>\n<code>11:        zoe = null;</code>\n<code>12:     }</code>\n<code>13:   }</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which is a valid constructor for this class?",
    code: "<code>public class TennisBall {</code>\n<code>}</code>",
    answers: [
      "public TennisBall static create() { return new TennisBall(); }",
      "public TennisBall static newInstance() { return new TennisBall():}",
      "public TennisBall() {}",
      "public void TennisBall() {}"
    ]
  },
  {
    title:
      "Which of the following is not a possible output of this code, assuming it runs to completion?",
    code:
      '<code>package store;</code>\n<code>public class Toy {</code>\n<code>   public void play() {</code>\n<code>      System.out.print("play-");</code>\n<code>   }</code>\n<code>   public void finalize() {</code>\n<code>      System.out.print("clean-");</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Toy car = new Toy();</code>\n<code>      car.play();</code>\n<code>      System.gc();</code>\n<code>      Toy doll = new Toy();</code>\n<code>      doll.play();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "play-",
      "play-play-",
      "play-play-clean-",
      "play-play-clean-clean-"
    ]
  },
  {
    title:
      "Which converts a primitive to a wrapper class object without using autoboxing?",
    code: null,
    answers: [
      "Call the asObject() method",
      "Call the constructor of the wrapper class",
      "Call the convertToObject() method",
      "Call the toObject() method"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>package beach;</code>\n<code>public class Sand {</code>\n<code>   public Sand() {</code>\n<code>      System.out.print("a");</code>\n<code>   }</code>\n<code>   public void Sand() {</code>\n<code>      System.out.print("b");</code>\n<code>   }</code>\n<code>   public void run() {</code>\n<code>      new Sand();</code>\n<code>      Sand();</code>\n<code>   }</code>\n<code>   public static void main(String... args) {</code>\n<code>      new Sand().run();</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["a", "ab", "aab", "None of the above"]
  }
];

const a2 = [
  "A. Option A does not compile because Java does not allow declaring different types as part of the same declaration. The other three options show various legal combinations of combining multiple variables in the same declarations with optional default values.",
  'D. The table variable is initialized to "metal". However, chair is not initialized. In Java, initialization is per variable and not for all the variables in a single declaration. Therefore, the second line tries to reference an uninitialized local variable and does not compile, which makes Option D correct.',
  "B. Instance variables have a default value based on the type. For any non-primitive, including String, that type is a reference to null. Therefore Option B is correct. If the variable was a local variable, Option C would be correct.",
  "B. An identifier name must begin with a letter, $, or _. Numbers are only permitted for subsequent characters. Therefore, Option B is not a valid variable name.",
  "B. In Java, class names begin with an uppercase letter by convention. Then they use lowercase with the exception of new words. Option B follows this convention and is correct. Option A follows the convention for variable names. Option C follows the convention for constants. Option D doesn’t follow any Java conventions.",
  "C. Objects have instance methods while primitives do not. Since int is a primitive, you cannot call instance methods on it. Integer and String are both objects and have instance methods. Therefore, Option C is correct.",
  "C. Underscores are allowed between any two digits in a numeric literal. Underscores are not allowed at the beginning or end of the literal, making Option C the correct answer.",
  "C. Option A is incorrect because int is a primitive. Option B is incorrect because it is not the name of a class in Java. While Option D is a class in Java, it is not a wrapper class because it does not map to a primitive. Therefore, Option C is correct.",
  "C. There is no class named integer. There is a primitive int and a class Integer. Therefore, the code does not compile, and Option C is correct. If the type was changed to Integer, Option B would be correct.",
  "C. The new keyword is used to call the constructor for a class and instantiate an instance of the class. A primitive cannot be created using the new keyword. Dealing with references happens after the object created by new is returned.",
  "D. Java uses the suffix f to indicate a number is a float. Java automatically widens a type, allowing a float to be assigned to either a float or a double. This makes both lines p1 and p3 compile. Line p2 does compile without a suffix. Line p4 does not compile without a suffix and therefore is the answer.",
  "A. A byte is smaller than a char, making Option C incorrect. bigint is not a primitive, making Option D incorrect. A double uses twice as much memory as a float variable, therefore Option A is correct.",
  "D. The instance variables, constructor, and method names can appear in any order within a class declaration.",
  "B. Java does not allow multiple Java data types to be declared in the same declaration, making Option B the correct answer. If double was removed, both hot and cold would be the same type. Then the compiler error would be on x3 because of a reference to an uninitialized variable.",
  "C. Lines 2 and 7 illustrate instance initializers. Line 6 is a static initializer. Lines 3–5 are a constructor.",
  "A. Since defaultValue is a local variable, it is not automatically initialized. That means the code will not compile with any type. Therefore, Option A is correct. If this was an instance variable, Option C would be correct as int and short would be initialized to 0 while double would be initialized to 0.0.",
  "A. The finalize() method may not be called, such as if your program crashes. However, it is guaranteed to be called no more than once.",
  "D. String is a class, but it is not a wrapper class. In order to be a wrapper class, the class must have a one-to-one mapping with a primitive.",
  "C. Lines 15–17 create the three objects. Lines 18–19 change the references so link2 and link3 point to each other. The lines 20–21 wipe out two of the original references. This means the object with name as x is inaccessible.",
  "C. Options A and D are incorrect because byte and short do not store values with decimal points. Option B is tempting. However, 3.14 is automatically a double. It requires casting to float or writing 3.14f in order to be assigned to a float. Therefore, Option C is correct.",
  "B. Integer is the name of a class in Java. While it is bad practice to use the name of a class as your local variable name, this is legal. Therefore, k1 does compile. It is not legal to use a reserved word as a variable name. All of the primitives including int are reserved words. Therefore, k2 does not compile, and Option B is the answer. Line k4 doesn’t compile either, but the question asks about the first line to not compile.",
  "B. Dot notation is used for both reading and writing instance variables, assuming they are in scope. It cannot be used for referencing local variables, making Option B the correct answer.",
  "C. Class names follow the same requirements as other identifiers. Underscores and dollar signs are allowed. Numbers are allowed, but not as the first character of an identifier. Therefore, Option C is correct. Note that class names begin with an uppercase letter by convention, but this is not a requirement.",
  "D. This question is tricky as it appears to be about primitive vs. wrapper classes. Looking closely, there is an underscore right before the decimal point. This is illegal as the underscore in a numeric literal can only appear between two digits.",
  "C. Local variables do not have a default initialization value. If they are referenced before being set to a value, the code does not compile. Therefore, Option C is correct. If the variable was an instance variable, Option B would be correct. Option D is tricky. A local variable will compile without an initialization if it isn’t referenced anywhere or it is assigned a value before it is referenced.",
  "C. Since defaultValue is an instance variable, it is automatically initialized to the corresponding value for that type. For double, that value is 0.0. By contrast, it is 0 for int, long, and short. Therefore Option C is correct.",
  "B. Option B is an example of autoboxing. Java will automatically convert from primitive to wrapper class types and vice versa. Option A is incorrect because you can only call methods on an object. Option C is incorrect because this method is used for converting to a wrapper class from a String. Option D is incorrect because autoboxing will convert the primitive to an object before adding it to the ArrayList.",
  "C. Java does not allow calling a method on a primitive. While autoboxing does allow the assignment of an Integer to an int, it does not allow calling an instance method on a primitive. Therefore, the last line does not compile.",
  "D. In order to call a constructor, you must use the new keyword. It cannot be called as if it was a normal method. This rules out Options A and B. Further, Option C is incorrect because the parentheses are required.",
  "A. Option A (I) correctly assigns the value to both variables. II does not compile as dog does not have a type. Notice the semicolon in that line, which starts a new statement. III compiles but only assigns the value to dog since a declaration only assigns to one variable rather than everything in the declaration. IV does not compile because the type should only be specified once per declaration.",
  "C. The wrapper class for int is Integer and the wrapper class for char is Character. All other primitives have the same name. For example, the wrapper class for boolean is Boolean.",
  "A. Assuming the variables are not primitives, they allow a null assignment. The other statements are false.",
  "A. An example of a primitive type is int. All the primitive types are lowercase, making Option A correct. Unlike object reference variables, primitives cannot reference null. String is not a primitive as evidenced by the uppercase letter in the name and the fact that we can call methods on it. You can create your own classes, but not primitives.",
  "D. While you can suggest to the JVM that it might want to run a garbage collection cycle, the JVM is free to ignore your suggestion. Option B is how to make this suggestion. Since garbage collection is not guaranteed to run, Option D is correct.",
  "C. All three references point to the String apple. This makes the other two String objects eligible for garbage collection and Option C correct.",
  "B. A constructor can only be called with a class name rather than a primitive, making Options A and C incorrect. The newly constructed Double object can be assigned to either a double or Double thanks to autoboxing. Therefore, Option B is correct.",
  "B. First line 2 runs and sets the variable using the declaration. Then the instance initializer on line 6 runs. Finally, the constructor runs. Since the constructor is the last to run of the three, that is the value that is set when we print the result, so Option B is correct.",
  "C. Objects are allowed to have a null reference while primitives cannot. int is a primitive, so assigning null to it does not compile. Integer and String are both objects and can therefore be assigned a null reference. Therefore, Option C is correct.",
  "C. An instance variable can only be referenced from instance methods in the class. A static variable can be referenced from any method. Therefore, Option C is correct.",
  "B. Underscores are allowed between any two digits in a numeric literal. Underscores are not allowed adjacent to a decimal point, making Option B the correct answer.",
  "A. These four types represent nondecimal values. While you don’t need to know the exact sizes, you do need to be able to order them from largest to smallest. A byte is smallest. A short comes next, followed by int and then long. Therefore, Option A is correct.",
  "A. Java uses dot notation to reference instance variables in a class, making Option A correct.",
  "B. If there was a finalize() method, this would be a different story. However, the method here is finalizer. Tricky! That’s just a normal method that doesn’t get called automatically. Therefore clean is never output.",
  "A. Options B and C do not compile. In Java, braces are for arrays rather than instance variables. Option A is the correct answer. It uses dot notation to access the instance variable. It also shows that a private variable is accessible in the same class and that a narrower type is allowed to be assigned to a wider type.",
  "B. The parseInt() methods return a primitive. The valueOf() methods return a wrapper class object. In real code, autoboxing would let you assign the return value to either a primitive or wrapper class. In terms of what gets returned directly, Option B is correct.",
  "B. On line 9, all three objects have references. The elena and zoe objects have a direct reference. The diana object is referenced through the elena object. On line 10, the reference to the diana object is replaced by a reference to the zoe object. Therefore, the diana object is eligible to be garbage collected, and Option B is correct.",
  "C. Options A and B are static methods rather than constructors. Option D is a method that happens to have the same name as the class. It is not a constructor because constructors don’t have return types.",
  "A. Remember that garbage collection is not guaranteed to run on demand. If it doesn’t run at all, Option B would be output. If it runs at the requested point, Option C would be output. If it runs right at the end of the main() method, Option D would be output. Option A is the correct answer because play is definitely called twice. Note that you are unlikely to see all these scenarios if you run this code because we have not used enough memory for garbage collection to be worth running. However, you still need to be able to answer what could happen regardless of it being unlikely.",
  "B. Each wrapper class has a constructor that takes the primitive equivalent. The methods mentioned in Options A, C, and D do not exist.",
  "C. The main() method calls the constructor which outputs a. Then the main method calls the run() method. The run() method calls the constructor again, which outputs a again. Then the run() method calls the Sand() method, which happens to have the same name as the constructor. This outputs b. Therefore, Option C is correct."
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
    answerArray: mapAnswers(qz["answers"], a2[index]),
    explain: a2[index]
  };
});
// window.quizs = quizs
quizs[18].imageUrl = "./images/image-oca-ch2-19.png";
quizs[38].imageUrl = "./images/image-oca-ch2-39.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
