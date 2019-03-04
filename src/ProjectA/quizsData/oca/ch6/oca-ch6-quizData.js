const qzString = [
  {
    title:
      "Fill in the blanks: The____________ access modifier allows access to everything the ____________access modifier does and more.",
    code: null,
    answers: [
      "package-private, protected",
      "protected, public",
      "protected, package-private",
      "private, package-private"
    ]
  },
  {
    title:
      "What is the command to call one constructor from another constructor in the same class?",
    code: null,
    answers: ["super()", "this()", "that()", "construct()"]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package stocks;</code>\n<code>public class Bond {</code>\n<code>   private static int price = 5;</code>\n<code>   public boolean sell() {</code>\n<code>      if(price&lt;10) {</code>\n<code>         price++;</code>\n<code>         return true;</code>\n<code>      } else if(price&gt;=10) {</code>\n<code>         return false;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] cash) {</code>\n<code>      new Bond().sell();</code>\n<code>      new Bond().sell();</code>\n<code>      new Bond().sell();</code>\n<code>      System.out.print(price);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["5", "6", "8", "The code does not compile."]
  },
  {
    title: "What is true about the following program?",
    code:
      "<code>package figures;</code>\n<code>public class Dolls {</code>\n<code>   public void nested() { nested(2,true); } // g1</code>\n<code>   public int nested(int level, boolean height) { return nested(level); }</code>\n<code>   public int nested(int level) { return level+1; }; // g2</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] outOfTheBox) {</code>\n<code>      System.out.print(new Dolls().nested());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "It compiles successfully and prints 3 at runtime.",
      "It does not compile because of line g1.",
      "It does not compile because of line g2.",
      "It does not compile for some other reason."
    ]
  },
  {
    title:
      "Fill in the blank: Java uses ___________ to send data into a method.",
    code: null,
    answers: [
      "pass-by-null",
      "pass-by-value",
      "both pass-by-value and pass-by-reference",
      "pass-by-reference"
    ]
  },
  {
    title: "Which of the following is a valid JavaBean method signature?",
    code: null,
    answers: [
      "public void getArrow()",
      "public void setBow()",
      "public void setRange(int range)",
      "public String addTarget(String target)"
    ]
  },
  {
    title:
      "Which of the following statements about calling this() in a constructor is not true?",
    code: null,
    answers: [
      "If this() is used, it must be the first line of the constructor.",
      "If super() and this() are both used in the same constructor, super() must appear on the line immediately after this().",
      "If arguments are provided to this(), then there must be a constructor in the class able to take those arguments.",
      "If the no-argument this() is called, then the class must explicitly implement the  no-argument constructor."
    ]
  },
  {
    title:
      "Which of the following can fill in the blank to make the class compile?",
    code:
      "<code>package ai;</code>\n<code>public class Robot {</code>\n<code>   ____________ compute() { return 10; }</code>\n<code>}</code>",
    answers: ["Public int", "Long", "void", "private String"]
  },
  {
    title:
      "Fill in the blank: A  ____________variable is always available to all instances of the class.",
    code: null,
    answers: ["public", "local", "static", "instance"]
  },
  {
    title:
      "Which line of code, inserted at line p1, causes the application to print 5?",
    code:
      "<code>package games;</code>\n<code>public class Jump {</code>\n<code>   private int rope = 1;</code>\n<code>   protected boolean outside;</code>\n<code>   public Jump() {</code>\n<code>      // p1</code>\n<code>      outside = true;</code>\n<code>   }</code>\n<code>   public Jump(int rope) {</code>\n<code>      this.rope = outside ? rope : rope+1;</code>\n<code>   }</code>\n<code>   public static void main(String[] bounce) {</code>\n<code>      System.out.print(new Jump().rope);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["this(4);", "new Jump(4);", "this(5);", "rope = 4;"]
  },
  {
    title: "Which of the following statements is not true?",
    code: null,
    answers: [
      "An instance of one class may access an instance of another class’s attributes if it has a reference to the instance and the attributes are declared public.",
      "An instance of one class may access package-private attributes in a parent class, provided the parent class is not in the same package.",
      "Two instances of the same class may access each other’s private attributes.",
      "An instance of one class may access an instance of another class’s attributes if both classes are located in the same package and marked protected."
    ]
  },
  {
    title:
      "Given the following class, what should be inserted into the two blanks to ensure the class data is properly encapsulated?",
    code:
      "<code>package storage;</code>\n<code>public class Box {</code>\n<code>   public String stuff;</code>\n<code>    ____________String____________ () {</code>\n<code>      return stuff;</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public void setStuff(String stuff) {</code>\n<code>      this.stuff = stuff;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "public and getStuff",
      "private and isStuff",
      "public and setStuff",
      "None of the above"
    ]
  },
  {
    title: "Which statement about a no-argument constructor is true?",
    code: null,
    answers: [
      "The Java compiler will always insert a default no-argument constructor if you do not define a no-argument constructor in your class.",
      "In order for a class to call super() in one of its constructors, its parent class must explicitly implement a no-argument constructor.",
      "If a class extends another class that has only one constructor that takes a value, then the child class must explicitly declare at least one constructor.",
      "A class may contain more than one no-argument constructor."
    ]
  },
  {
    title:
      "Which of the following method signatures does not contain a compiler error?",
    code: null,
    answers: [
      "public void sing(String key, String... harmonies)",
      "public void sing(int note, String... sound, int music)",
      "public void sing(String... keys, String... pitches)",
      "public void sing(String... notes, String melodies)"
    ]
  },
  {
    title:
      "Given the following application, which diagram best represents the state of the mySkier, mySpeed, and myName variables in the main() method after the call to the slalom() method?",
    code:
      '<code>package slopes;</code>\n<code>public class Ski {</code>\n<code>   private int age = 18;</code>\n<code>   private static void slalom(Ski racer, int[] speed, String name) {</code>\n<code>      racer.age = 18;</code>\n<code>      name = "Wendy";</code>\n<code>      speed = new int[1];</code>\n<code>      speed[0] = 11;</code>\n<code>      racer = null;</code>\n<code>   }</code>\n<code>   public static void main(String... mountain) {</code>\n<code>      final Ski mySkier = new Ski();</code>\n<code>      mySkier.age = 16;</code>\n<code>      final int[] mySpeed = new int[1];</code>\n<code>      final String myName = "Rosie";</code>\n<code>      slalom(mySkier,mySpeed,myName);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["1", "2", "3", "4"]
  },
  {
    title:
      "Given the class below, which method signature could be successfully added to the class as an overloaded version of the findAverage() method?",
    code:
      "<code>public class Calculations {</code>\n<code>   public Integer findAverage(int sum) { return sum; }</code>\n<code>}</code>",
    answers: [
      "public Long findAverage(int sum)",
      "public Long findAverage(int sum, int divisor)",
      "public Integer average(int sum)",
      "private void findAverage(int sum)"
    ]
  },
  {
    title:
      "Which of the following is not a reason to use encapsulation when designing a class?",
    code: null,
    answers: [
      "Promote usability by other developers.",
      "Maintain class data integrity of data elements.",
      "Prevent users from modifying the internal attributes of a class.",
      "Increase concurrency and improve performance."
    ]
  },
  {
    title:
      "Which of the following data types can be modified after they are passed to a method as an argument?",
    code: null,
    answers: ["int[]", "String", "long", "boolean"]
  },
  {
    title:
      "What is the best way to call the following method from another class in the same package, assuming the class using the method does not have any static imports?",
    code:
      "<code>package useful;</code>\n<code>public class MathHelper {</code>\n<code>   public static int roundValue(double d) {</code>\n<code>      // Implementation omitted</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "MathHelper:roundValue(5.92)",
      "MathHelper.roundValue(3.1)",
      "roundValue(4.1)",
      "useful.MathHelper.roundValue(65.3)"
    ]
  },
  {
    title:
      "Given a method with one of the following return types, which data type prevents the return statement from being used within the method?",
    code: null,
    answers: ["byte", "String", "void", "None of the above"]
  },
  {
    title:
      "How many final modifiers would need to be removed for this application to compile?",
    code:
      "<code>package end;</code>\n<code>public final class Games {</code>\n<code>   public final static int finish(final int score) {</code>\n<code>      final int win = 3;</code>\n<code>      final int result = score++ &lt; 5 ? 2 : win;</code>\n<code>      return result+=win;</code>\n<code>   }</code>\n<code>   public static void main(final String[] v) {</code>\n<code>      System.out.print(finish(Integer.parseInt(v[0])));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "None",
      "One",
      "Two",
      "The code will not compile regardless of the number of final modifiers that are removed."
    ]
  },
  {
    title:
      "Fill in the blanks:  ____________is used to call a constructor in the parent class, while  ____________is used to reference a member of the parent class.",
    code: null,
    answers: [
      "super and this()",
      "super and super()",
      "super() and this",
      "super() and super"
    ]
  },
  {
    title: "Given the following method signature, which classes can call it?",
    code: "<code>void run(String government)</code>",
    answers: [
      "Classes in other packages",
      "Classes in the same package",
      "Subclasses in a different package",
      "All classes"
    ]
  },
  {
    title:
      "Which statement(s) about the following class would help to properly encapsulate the data in the class? 1.Change the access modifier of strength to private. 2.Add a getter method for material. 3.Add a setter method for material.",
    code:
      "<code>package shield;</code>\n<code>public class Protect {</code>\n<code>   private String material;</code>\n<code>   protected int strength;</code>\n<code>&nbsp;</code>\n<code>   public int getStrength() {</code>\n<code>      return strength;</code>\n<code>   }</code>\n<code>   public void setStrength(int strength) {</code>\n<code>      this.strength = strength;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "I",
      "II and III",
      "I, II, and III",
      "None, the data in the class is already encapsulated."
    ]
  },
  {
    title: "Which of the following is a valid method name in Java?",
    code: null,
    answers: ["Go_$Outside$2()", "have-Fun()", "new()", "9enjoyTheWeather()"]
  },
  {
    title:
      "Which of the following lines of code can be inserted in the line below that would allow the class to compile?",
    code:
      "<code>package farm;</code>\n<code>public class Coop {</code>\n<code>   public final int static getNumberOfChickens() {</code>\n<code>      // INSERT CODE HERE</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["return 3.0;", "return 5L;", "return 10;", "None of the above"]
  },
  {
    title:
      "Which of the following is a true statement about passing data to a method?",
    code: null,
    answers: [
      "A change made to a primitive value passed to a method is reflected in the calling method.",
      "A change made to the data within an object passed to a method is reflected in the calling method.",
      "Reassigning an object reference passed to a method is reflected in the calling method.",
      "A change made to a boolean value passed to a method is reflected in the calling method."
    ]
  },
  {
    title: "What is a possible output of the following application?",
    code:
      '<code>package wrap;</code>\n<code>public class Gift {</code>\n<code>   private final Object contents;</code>\n<code>   protected Object getContents() {</code>\n<code>      return contents;</code>\n<code>   }</code>\n<code>   protected void setContents(Object contents) {</code>\n<code>      this.contents = contents;</code>\n<code>   }</code>\n<code>   public void showPresent() {</code>\n<code>      System.out.print("Your gift: "+contents);</code>\n<code>   }</code>\n<code>   public static void main(String[] treats) {</code>\n<code>      Gift gift = new Gift();</code>\n<code>      gift.setContents(gift);</code>\n<code>      gift.showPresent();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Your gift: wrap.Gift@29ca2745",
      "Your gift: Your gift:",
      "It does not compile.",
      "It compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following is a valid JavaBean method prefix?",
    code: null,
    answers: ["is", "gimme", "request", "put"]
  },
  {
    title:
      "Given the following two classes, each in a different package, which line inserted below allows the second class to compile?",
    code:
      '<code>package clothes;</code>\n<code>public class Store {</code>\n<code>   public static String getClothes() { return "dress"; }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>package wardrobe;</code>\n<code>// INSERT CODE HERE</code>\n<code>public class Closet {</code>\n<code>   public void borrow() {</code>\n<code>      System.out.print("Borrowing clothes: "+getClothes());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "static import clothes.Store.getClothes;",
      "import clothes.Store.*;",
      "import static clothes.Store.getClothes;",
      "import static clothes.Store;"
    ]
  },
  {
    title:
      "What access modifier is used to mark class members package-private?",
    code: null,
    answers: ["private", "default", "protected", "None of the above"]
  },
  {
    title:
      "How many lines of the following program contain compilation errors?",
    code:
      '<code>package sky;</code>\n<code>public class Stars {</code>\n<code>   private int inThe = 4;</code>\n<code>   public void Stars() {</code>\n<code>      super();</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_90"></span>   public Stars(int inThe) {</code>\n<code>      this.inThe = this.inThe;</code>\n<code>   }</code>\n<code>   public static void main(String[] endless) {</code>\n<code>      System.out.print(new sky.Stars(2).inThe);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which of the following statements is true?",
    code: null,
    answers: [
      "An instance method is allowed to reference a static variable.",
      "A static method is allowed to reference an instance variable.",
      "A static initialization block is allowed to reference an instance variable.",
      "A final static variable may be set in a constructor."
    ]
  },
  {
    title:
      "Given the following method declaration, which line can be inserted to make the code compile?",
    code:
      "<code>public short calculateDistance(double lat1, double lon1,</code>\n<code>      double lat2, double lon2) {</code>\n<code>   // INSERT CODE HERE</code>\n<code>}</code>",
    answers: [
      "return new Integer(3);",
      "return new Byte((byte)6);",
      "return 5L;",
      "return new Short(4).longValue();"
    ]
  },
  {
    title:
      "Which of the following statements about overloaded methods are true? 1.Overloaded methods must have the same name. 2.Overloaded methods must have the same return type. 3.Overloaded methods must have a different list of parameters.",
    code: null,
    answers: ["I", "I and II", "I and III", "I, II, and III"]
  },
  {
    title:
      "How many lines of code would need to be removed for the following class to compile?",
    code:
      "<code>package work;</code>\n<code>public class Week {</code>\n<code>   private static final String monday;</code>\n<code>   String tuesday;</code>\n<code>   final static wednesday = 3;</code>\n<code>   final protected int thursday = 4;</code>\n<code>}</code>",
    answers: [
      "One",
      "Two",
      "Three",
      "The code will not compile regardless of the number of lines removed."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package pet;</code>\n<code>public class Puppy {</code>\n<code>   public static int wag = 5;   // q1</code>\n<code>   public void Puppy(int wag) { // q2</code>\n<code>      this.wag = wag;</code>\n<code>   }</code>\n<code>   public static void main(String[] tail) {</code>\n<code>      System.out.print(new Puppy(2).wag); // q3</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "2",
      "It does not compile because of line q1.",
      "It does not compile because of line q2.",
      "It does not compile because of line q3."
    ]
  },
  {
    title:
      "Fill in the blanks: The  ____________access modifier allows access to everything the  ____________access modifier does and more.",
    code: null,
    answers: [
      "public, private",
      "private, package-private",
      "package-private, protected",
      "private, public"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package ship;</code>\n<code>public class Phone {</code>\n<code>   private int size;</code>\n<code>   public Phone(int size) {this.size=size;}</code>\n<code>&nbsp;</code>\n<code>   public static void sendHome(Phone p, int newSize) {</code>\n<code>      p = new Phone(newSize);</code>\n<code>      p.size = 4;</code>\n<code>   }</code>\n<code>   public static final void main(String... params) {</code>\n<code>      final Phone phone = new Phone(3);</code>\n<code>      sendHome(phone,7);</code>\n<code>      System.out.print(phone.size);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["3", "4", "7", "The code does not compile."]
  },
  {
    title:
      "Given the following class, which line of code when inserted below would prevent the class from compiling?",
    code:
      "<code>public class Drink {</code>\n<code>   public static void water() {}</code>\n<code>   public void get() {</code>\n<code>      // INSERT CODE HERE</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "water();",
      "this.Drink.water();",
      "this.water();",
      "Drink.water();"
    ]
  },
  {
    title:
      "Given the following method declaration signature, which of the following is a valid call of this method?",
    code: "<code>public void call(int count, String me, String... data)</code>",
    answers: [
      'call(9,"me",10,"Al")',
      "call(5)",
      'call(2,"home","sweet")',
      'call("answering","service")'
    ]
  },
  {
    title: "Which statement about a static variable is true?",
    code: null,
    answers: [
      "The value of a static variable must be set when the variable is declared or in a static initialization block.",
      "It is not possible to read static final variables outside the class in which they are defined.",
      "It is not possible to reference static methods using static imports.",
      "A static variable is always available in all instances of the class."
    ]
  },
  {
    title: "Which of the following is not a true statement?",
    code: null,
    answers: [
      "The first line of every constructor is a call to the parent constructor via the super() command.",
      "A class does not have to have a constructor explicitly defined.",
      "A constructor may pass arguments to the parent constructor.",
      "A final instance variable whose value is not set when they are declared or in an initialization block should be set by the constructor."
    ]
  },
  {
    title:
      "How many final modifiers would need to be removed for this application to compile?",
    code:
      "<code>package park;</code>\n<code>public class Tree {</code>\n<code>   public final static long numberOfTrees;</code>\n<code>   public final double height;</code>\n<code>   static {}</code>\n<code>   { final int initHeight = 2;</code>\n<code>     height = initHeight;</code>\n<code>   }</code>\n<code>   static {</code>\n<code>      numberOfTrees = 100;</code>\n<code>      height = 4;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "None",
      "One",
      "Two",
      "The code will not compile regardless of the number of final modifiers removed."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package jungle;</code>\n<code>public class RainForest extends Forest {</code>\n<code>   public RainForest(long treeCount) {</code>\n<code>      this.treeCount = treeCount+1;</code>\n<code>   }</code>\n<code>   public static void main(String[] birds) {</code>\n<code>      System.out.print(new RainForest(5).treeCount);</code>\n<code>   }</code>\n<code>}</code>\n<code>class Forest {</code>\n<code>   public long treeCount;</code>\n<code>   public Forest(long treeCount) {</code>\n<code>      this.treeCount = treeCount+2;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["5", "6", "8", "The code does not compile."]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>public class ChooseWisely {</code>\n<code>   public ChooseWisely() { super(); }</code>\n<code>   public int choose(int choice) { return 5; }</code>\n<code>   public int choose(short choice) { return 2; }</code>\n<code>   public int choose(long choice) { return 11; }</code>\n<code>   public static void main(String[] path) {</code>\n<code>      System.out.print(new ChooseWisely().choose((byte)2+1));</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["5", "2", "11", "The code does not compile."]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package sports;</code>\n<code>public class Football {</code>\n<code>   public static Long getScore(Long timeRemaining) {</code>\n<code>      return 2*timeRemaining; // m1</code>\n<code>   }</code>\n<code>   public static void main(String[] refs) {</code>\n<code>      final int startTime = 4;</code>\n<code>      System.out.print(getScore(startTime)); // m2</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "8",
      "The code does not compile because of line m1.",
      "The code does not compile because of line m2.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following is a valid method name in Java?",
    code: null,
    answers: ["$sprint()", "\\jog13()", "walk#()", "%run()"]
  },
  {
    title:
      "Assume there is a class Bouncer with a protected variable. Methods in which class can access this variable?",
    code: null,
    answers: [
      "Only subclasses of Bouncer",
      "Any subclass of Bouncer or any class in the same package as Bouncer",
      "Only classes in the same package as Bouncer",
      "Any superclass of Bouncer"
    ]
  },
  {
    title:
      "Given the following two classes, each in a different package, which line inserted below allows the second class to compile?",
    code:
      '<code>package commerce;</code>\n<code>public class Bank {</code>\n<code>   public void withdrawal(int amountInCents) {}</code>\n<code>   public void deposit(int amountInCents) {}</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>package employee;</code>\n<code>// INSERT CODE HERE</code>\n<code>public class Teller {</code>\n<code>   public void processAccount(int depositSlip, int withdrawalSlip) {</code>\n<code><span epub:type="pagebreak" id="Page_96"></span>      withdrawal(withdrawalSlip);</code>\n<code>      deposit(depositSlip);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "import static commerce.Bank.*;",
      "static import commerce.Bank.*;",
      "import static commerce.Bank;",
      "None of the above"
    ]
  }
];

const a6 = [
  "C. The protected modifier allows access by subclasses and members within the same package, while the package-private modifier allows access only to members in the same package. Therefore, the protected access modifier allows access to everything the package-private access modifier, plus subclasses, making Option C the correct answer. Options A, B, and D are incorrect because the first term is a more restrictive access modifier than the second term.",
  "B. The super() statement is used to call a constructor in a parent class, while the this() statement is used to call a constructor in the same class, making Option B correct and Option A incorrect. Options C and D are incorrect because they are not constructors.",
  "D. The sell() method does not compile because it does not return a value if both of the if-then statements’ conditional expressions evaluate to false. While logically, it is true that price is either less than 10 or greater than or equal to 10, the compiler does not know that. It just knows that if both if-then statements evaluate to false, then it does not have a return value, therefore it does not compile.",
  "D. The three overloaded versions of nested() compile without issue, since each method takes a different set of input arguments, making Options B and C incorrect. The code does not compile, though, due to the first line of the main() method, making Option A incorrect. The no-argument version of the nested() method does not return a value, and trying to output a void return type in the print() method throws an exception at runtime.",
  "B. Java uses pass-by-value to copy primitives and references of objects into a method. That means changes to the primitive value or reference in the method are not carried to the calling method. That said, the data within an object can change, just not the original reference itself. Therefore, Option B is the correct answer, and Options C and D are incorrect. Option A is not a real term.",
  "C. Option A is incorrect because the getter should return a value. Option B is incorrect because the setter should take a value. Option D is incorrect because the setter should start with set and should not return a value. Option C is a correct setter declaration because it takes a value, uses the void return type, and uses the correct naming convention.",
  "B. Options A, C, and D are true statements about calling this() inside a constructor. Option B is incorrect because a constructor can only call this() or super() on the first line of the constructor, but never both in the same constructor. If both constructors were allowed to be called, there would be two separate calls to super(), leading to duplicate initialization of parent constructors, since the other constructor referenced by this() would also call super() (or be chained to one that eventually calls super()).",
  "B. Option A is incorrect because the public access modifier starts with a lowercase letter. Options C and D are incorrect because the return types, void and String, are incompatible with the method body that returns an integer value of 10. Option B is correct and has package-private access. It also uses a return type of Long that the integer value of 10 can be easily assigned to without an explicit cast.",
  "C. The only variables always available to all instances of the class are those declared static; therefore, Option C is the correct answer. Option A may seem correct, but public variables are only available if a reference to the object is maintained among all instances. Option B is incorrect because there is no local keyword in Java. Option D is also incorrect because a private instance variable is only accessible within the instance that created it.",
  "A. First off, all of the lines compile but they produce various different results. Remember that the default initialization of a boolean instance variable is false, making outside false at line p1. Therefore, this(4) will cause rope to be set to 5, while this(5) will cause rope to be set to 6. Since 5 is the number we are looking for, Option A is correct, and Option C is incorrect. Option B is incorrect. While the statement does create a new instance of Jump, with rope having a value of 5, that instance is nested and the value of rope does not affect the surrounding instance of Jump that the constructor was called in. Option D is also incorrect. The value assigned to rope is 4, not the target 5.",
  "B. Options A, C, and D are true statements. In particular, Option C allows us to write the equals() methods between two objects that compare private attributes of the class. Option D is true because protected access also provides package-private access. Option B is false. Package-private attributes are only visible if the two classes are in the same package, regardless of whether one extends the other.",
  "D. The class data, stuff, is declared public, allowing any class to modify the stuff variable and making the implementation inherently unsafe for encapsulation. Therefore, there are no values that can be placed in the two blanks to ensure the class properly encapsulates its data, making Option D correct. Note that if stuff was declared private, Options A, B, and C would all be correct. Encapsulation does not require JavaBean syntax, just that the internal attributes are protected from outside access, which all of these sets of values do achieve.",
  "C. Option A is incorrect because Java only inserts a no-argument constructor if there are no other constructors in the class. Option B is incorrect because the parent can have a default no-argument constructor, which is inserted by the compiler and accessible in the child class. Finally, Option D is incorrect. A class that contains two no-argument constructors will not compile because they would have the same signature. Finally, Option C is correct. If a class extends a parent class that does not include a no-argument constructor, the default no-argument constructor cannot be automatically inserted into the child class by the compiler. Instead, the developer must explicitly declare at least one constructor and explicitly define how the call to the parent constructor is made.",
  "A. A method may contain at most one varargs parameter, and it must appear as the last argument in the list. For this reason, Option A is correct, and Options B, C, and D are incorrect.",
  "C. To solve this problem, it helps to remember that Java is a pass-by-value language in which copies of primitives and object references are sent to methods. This also means that an object’s data can be modified within a method and shared with the caller, but not the reference to the object. Any changes to the object’s reference within the method are not carried over to the caller. In the slalom() method, the Ski object is updated with an age value of 18. Although, the last line of the slalom() method changes the variable value to null, it does not affect the mySkier object or reference in the main() method. Therefore, the mySkier object is not null and the age variable is set to 18, making Options A and D incorrect. Next, the name variable is reassigned to the Wendy object, but this does not change the reference in the main() method, so myName remains Rosie. Finally, the speed array is assigned a new object and updated. Since the array is updated after the reference is reassigned, it does not affect the mySpeed array in the main() method. The result is that mySpeed continues to have a single element with the default int value of 0. For these reasons, Option B is incorrect, and Option C is correct.",
  "B. Options A and D would not allow the class to compile because two methods in the class cannot have the same name and arguments, but a different return value. Option C would allow the class to compile, but it is not a valid overloaded form of our findAverage() method since it uses a different method name. Option B is a valid overloaded version of the findAverage() method, since the name is the same but the argument list differs.",
  "D. Implementing encapsulation prevents internal attributes of a class from being modified directly, so Option C is a true statement. By preventing access to internal attributes, we can also maintain class data integrity between elements, making Option B a true statement. Option A is also a true statement about encapsulation, since well-encapsulated classes are often easier to use. Option D is an incorrect statement. Encapsulation makes no guarantees about performance and concurrency.",
  "A. Option B is incorrect because String values are immutable and cannot be modified. Options C and D are also incorrect since variables are passed by value, not reference, in Java. Option A is the correct answer. The contents of an array can be modified when passed to a method, since a copy of the reference to the object is passed. For example, the method can change the first element of a non-empty array.",
  "B. Option A is not a valid syntax in Java. Option C would be correct if there was a static import, but the question specifically says there are not any. Option D is almost correct, since it is a way to call the method, but the question asks for the best way to call the method. In that regard, Option B is the best way to call the method, since we are given that two classes are in the same package, therefore the package name would not be required.",
  "D. Options A and B are incorrect because a method with a non-void return type requires that the method return a value using the return statement. Option C is also incorrect since a method with a void return type can still call the return command with no values and exit the method. Therefore, Option D is the correct answer.",
  "C. The finish() method modifies two variables that are marked final, score and result. The score variable is modified by the post-increment ++ operator, while the result variable is modified by the compound addition += operator. Removing both final modifiers allows the code to compile. For this reason, Option C is the correct answer.",
  "D. The super() statement is used to call a constructor in the parent class, while super is used to reference a member of the parent class. The this() statement is used to call a constructor in the current class, while this is used to reference a member of the current class. For these reasons, Option D is the correct answer.",
  "B. The method signature has package-private, or default, access; therefore, it is accessible to classes in the same package, making Option B the correct answer.",
  "A. The access modifier of strength is protected, meaning subclasses and classes within the same package can modify it. Changing the value to private would improve encapsulation by making the Protect class the only one capable of directly modifying it. For these reasons, the first statement is correct. Alternatively, the second and third statements do not improve the encapsulation of the class. While having getters and setters for private variables is helpful, they are not required. Encapsulation is about protecting the data elements. With this in mind, it is clear the material variable is already protected. Therefore, Option A is the correct answer.",
  "A. Option A is correct since method names may include the underscore _ character as well as the dollar $ symbol. Note that there is no rule that requires a method start with a lowercase character; it is just a practice adopted by the community. Option B is incorrect because the hyphen - character may not be part of a method name. Option C is incorrect since new is a reserved word in Java. Finally, Option D is incorrect. A method name must start with a letter, the dollar $ symbol, or an underscore _ character.",
  "D. The code does not compile, regardless of what is inserted into the line because the method signature is invalid. The return type, int, should go before the method name and after any access, final, or static modifiers. Therefore, Option D is the correct answer. If the method was fixed, by swapping the order of int and static in the method declaration, then Option C would be the correct answer. Options A and B are still incorrect, though, since each uses a return type that cannot be implicitly converted to int.",
  "B. Java uses pass-by-value, so changes made to primitive values and object references passed to a method are not reflected in the calling method. For this reason, Options A and C are incorrect statements. Option D is also an invalid statement because it is a special case of Option A. Finally, Option B is the correct answer. Changes to the data within an object are visible to the calling method since the object that the copied reference points to is the same.",
  "C. The code contains a compilation problem in regard to the contents instance variable. The contents instance variable is marked final, but there is a setContents() instance method that can change the value of the variable. Since these two are incompatible, the code does not compile, and Option C is correct. If the final modifier was removed from the contents variable declaration, then the expected output would be of the form shown in Option A.",
  "A. JavaBean methods use the prefixes get, set, and is for boolean values, making Option A the correct choice.",
  "C. Option A is incorrect because the keywords static and import are reversed. The Closet class uses the method getClothes() without a reference to the class name Store, therefore a static import is required. For this reason, Option B is incorrect since it is missing the static keyword. Option D is also incorrect since static imports are used with members of the class, not a class name. Finally, Option C is the correct answer since it properly imports the method into the class using a static import.",
  "D. In Java, the lack of an access modifier indicates that the member is package-private, therefore Option D is correct. Note that the default keyword is used for interfaces and switch statements, and is not an access modifier.",
  "B. The code does not compile, so Option A is incorrect. The class contains two constructors and one method. The first method, Stars(), looks a lot like a no-argument constructor, but since it has a return value of void, it is a method, not a constructor. Since only constructors can call super(), the code does not compile due to this line. The only constructor in this class, which takes an int value as input, performs a pointless assignment, assigning a variable to itself. While this assignment has no effect, it does not prevent the code from compiling. Finally, the main() method compiles without issue since we just inserted the full package name into the class constructor call. This is how a class that does not use an import statement could call the constructor. Since the method is in the same class, and therefore the same package, it is redundant to include the package name but not disallowed. Because only one line causes the class to fail to compile, Option B is correct.",
  "A. An instance method or constructor has access to all static variables, making Option A correct. On the other hand, static methods and static initializers cannot reference instance variables since they are defined across all instances, making Options B and C incorrect. Note that they can access instance variables if they are passed a reference to a specific instance, but not in the general case. Finally, Option D is incorrect because static final variables must be set when they are declared or in a static initialization block.",
  "B. The method calculateDistance() requires a return type that can be easily converted to a short value. Options A, C, and D are incorrect because they each use a larger data type that requires an explicit cast. Option D also does not compile because the Short constructor requires an explicit cast to convert the value of 4, which is assumed to be an int, to a short, as shown in new Short((short)4). Option B is the correct answer since a byte value can be easily promoted to short and returned by the method.",
  "C. Overloaded methods have the same name but a different list of parameters, making the first and third statements true. The second statement is false, since overloaded methods can have the same or different return types. Therefore, Option C is the correct answer.",
  "C. The declaration of monday does not compile, because the value of a static final variable must be set when it is declared or in a static initialization block. The declaration of tuesday is fine and compiles without issue. The declaration of wednesday does not compile because there is no data type for the variable. Finally, the declaration of thursday does not compile because the final modifier cannot appear before the access modifier. For these reasons, Option C is the correct answer.",
  "D. The Puppy class does not declare a constructor, so the default no-argument constructor is automatically inserted by the compiler. What looks like a constructor in the class is actually a method that has a return type of void. Therefore, the line in the main() method to create the new Puppy(2) object does not compile, since there is no constructor capable of taking an int value, making Option D the correct answer.",
  "A. The public modifier allows access to members in the same class, package, subclass, or even classes in other packages, while the private modifier allows access only to members in the same class. Therefore, the public access modifier allows access to everything the private access modifier does, and more, making Option A the correct answer. Options B, C, and D are incorrect because the first term is a more restrictive access modifier than the second term.",
  "A. The code compiles without issue, so Option D is incorrect. The key here is that Java uses pass by value to send object references to methods. Since the Phone reference p was reassigned in the first line of the sendHome() method, any changes to the p reference were made to a new object. In other words, no changes in the sendHome() method affected the object that was passed in. Therefore, the value of size was the same before and after the method call, making the output 3 and Option A the correct answer.",
  "B. Options A and D are equivalent and would allow the code to compile. They both are proper ways to access a static method from within an instance method. Option B is the correct answer. The class would not compile because this.Drink has no meaning to the compiler. Finally, Option C would still allow the code to compile, even though it is considered a poor coding practice. While static members should be accessed in a static way, it is not required.",
  "C. The method signature requires one int value, followed by exactly one String, followed by String varargs, which can be an array of String values or zero or more individual String values. Only Option C conforms to these requirements, making it the correct answer.",
  "D. Option A is a statement about final static variables, not all static variables. Option B only applies to static variables marked private, not final. Option C is false because static imports can be used to reference both variables and methods. Option D is the correct answer because a static variable is accessible to all instances of the class.",
  "A. Option A is the correct answer because the first line of a constructor could be this() or super(), making it an untrue statement. Option B is a true statement because the compiler will insert the default no-argument constructor if one is not defined. Option C is also a true statement, since zero or more arguments may be passed to the parent constructor, if the parent class defines such constructors. Option D is also true. The value of a final instance variable should be set when it is declared, in an initialization block, or in a constructor.",
  "D. The last static initialization block accesses height, which is an instance variable, not a static variable. Therefore, the code will not compile no matter how many final modifiers are removed, making Option D the correct answer. Note that if the line height = 4; was removed, then no final modifiers would need to be removed to make the class compile.",
  "D. Since a constructor call is not the first line of the RainForest() constructor, the compiler inserts the no-argument super() call. Since the parent class, Forest, does not define a no-argument super() constructor, the RainForest() constructor does not compile, and Option D is correct.",
  "A. The code compiles without issue, so Option D is incorrect. In the main() method, the value 2 is first cast to a byte. It is then increased by one using the addition + operator. The addition + operator automatically promotes all byte and short values to int. Therefore, the value passed to the choose() in the main() method is an int. The choose(int) method is called, returning 5 and making Option A the correct answer. Note that without the addition operation in the main() method, byte would have been used as the parameter to the choose() method, causing the choose(short) to be selected as the next closest type and outputting 2, making Option B the correct answer.",
  "C. The variable startTime can be automatically converted to Integer by the compiler, but Integer is not a subclass of Long. Therefore, the code does not compile due the wrong variable type being passed to the getScore() method on line m2, and Option C is correct.",
  "A. Java methods must start with a letter, the dollar $ symbol, or underscore _ character. For these reasons, Options B and D are incorrect, and Option A is correct. Option C is incorrect. The hashtag (#) symbol cannot be included in a method name.",
  "B. The protected modifier allows access by any subclass or class that is in the same package, therefore Option B is the correct answer.",
  "D. A static import is used to import static members of another class. In this case, the withdrawal() and deposit() methods in the Bank class are not marked static. They require an instance of Bank to be used and cannot be imported as static methods. Therefore, Option D is correct. If the two methods in the Bank class were marked static, then Option A would be the correct answer since wildcards can be used with static imports to import more than one method. Option B reverses the keywords static and import, while Option C incorrectly imports a class, which cannot be imported via a static import."
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
    answerArray: mapAnswers(qz["answers"], a6[index]),
    explain: a6[index]
  };
});
// window.quizs = quizs
quizs[14].imageUrl = "./images/image-oca-ch6-15.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
