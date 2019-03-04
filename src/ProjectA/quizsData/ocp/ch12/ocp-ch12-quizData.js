const qzString = [
  {
    title:
      "Which of the following is required for all valid lambda expressions?",
    code: null,
    answers: ["()", "->", "{}", "Parameter data type(s)"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package holiday;</code>\n<code>enum DaysOff {</code>\n<code>   Thanksgiving, PresidentsDay, ValentinesDay</code>\n<code>}</code>\n<code>public class Vacation {</code>\n<code>   public static void main(String... unused) {</code>\n<code>      final DaysOff input = DaysOff.Thanksgiving;</code>\n<code>      switch(input) {</code>\n<code>         default:</code>\n<code>         case DaysOff.ValentinesDay:</code>\n<code>            System.out.print("1");</code>\n<code>         case DaysOff.PresidentsDay:</code>\n<code>            System.out.print("2");</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["1", "2", "12", "None of the above"]
  },
  {
    title:
      "Fill in the blanks: A functional interface must contain or inherit  ____________and may optionally include____________ .",
    code: null,
    answers: [
      "at least one abstract method, the @Override annotation",
      "exactly one method, static methods",
      "exactly one abstract method, the @FunctionalInterface annotation",
      "at least one static method, at most one default method"
    ]
  },
  {
    title:
      "Which of the following class types cannot be marked final or abstract?",
    code: null,
    answers: [
      "Static nested class",
      "Local inner class",
      "Anonymous inner class",
      "Member inner class"
    ]
  },
  {
    title: "Which of the following is a valid lambda expression?",
    code: null,
    answers: [
      "r -> {return 1==2}",
      "(q) -> true",
      "(x,y) -> {int test; return test>0;}",
      "a,b -> true"
    ]
  },
  {
    title:
      "Which of the following properties of an enum can be marked abstract?",
    code: null,
    answers: [
      "The enum class definition",
      "An enum method",
      "An enum value",
      "None of the above"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package world;</code>\n<code>public class Matrix {</code>\n<code>   private int level = 1;</code>\n<code>   class Deep {</code>\n<code>      private int level = 2;</code>\n<code>      class Deeper {</code>\n<code>         private int level = 5;</code>\n<code>         public void printReality() {</code>\n<code>            System.out.print(level);</code>\n<code>            System.out.print(" "+Matrix.Deep.this.level);</code>\n<code>            System.out.print(" "+Deep.this.level);</code>\n<code>         }</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] bots) {</code>\n<code>      Matrix.Deep.Deeper simulation = new Matrix().new Deep().new Deeper();</code>\n<code>      simulation.printReality();</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["1 1 2", "5 2 2", "5 2 1", "The code does not compile."]
  },
  {
    title: "A local inner class can access which type of local variables?",
    code: null,
    answers: ["I only", "I and II", "III only", "I and III"],
    ol: ["final", "private", "effectively final"]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package finance;</code>\n<code>&nbsp;</code>\n<code>enum Currency {</code>\n<code>   DOLLAR, YEN, EURO</code>\n<code>}</code>\n<code>abstract class Provider {</code>\n<code>   protected Currency c = Currency.EURO;</code>\n<code>}</code>\n<code>public class Bank extends Provider {</code>\n<code>   protected Currency c = Currency.DOLLAR;</code>\n<code>   public static void main(String[] pennies) {</code>\n<code>      int value = 0;</code>\n<code>      switch(new Bank().c) {</code>\n<code>         case 0:</code>\n<code>            value--; break;</code>\n<code>         case 1:</code>\n<code>            value++; break;</code>\n<code>      }</code>\n<code>      System.out.print(value);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "0",
      "1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What statement best describes the notion of effectively final in Java?",
    code: null,
    answers: [
      "A local variable that is marked final",
      "A static variable that is marked final",
      "A local variable that is not marked final but whose primitive value or object reference does not change after it is initialized",
      "A local variable that is not marked final but whose primitive value or object reference does not change after a certain point in the method"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package race;</code>\n<code>&nbsp;</code>\n<code>interface Drive {</code>\n<code>   int SPEED = 5;</code>\n<code>   default int getSpeed() { return SPEED; }</code>\n<code>}</code>\n<code>interface Hover {</code>\n<code>   int MAX_SPEED = 5;</code>\n<code>   default int getSpeed() { return MAX_SPEED; }</code>\n<code>}</code>\n<code>public class Car implements Drive, Hover {</code>\n<code>   public static void main(String[] gears) {</code>\n<code>      class RaceCar extends Car {</code>\n<code>         @Override public int getSpeed() { return 10; }</code>\n<code>      };</code>\n<code>      System.out.print(new RaceCar().getSpeed());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "5",
      "10",
      "The code does not compile due to the definition of Racecar.",
      "The code does not compile for some other reason."
    ]
  },
  {
    title:
      "Fill in the blanks:  It is possible to extend an  ____________but not an ____________.",
    code: null,
    answers: [
      "interface, abstract class",
      "abstract class, enum",
      "enum, interface",
      "abstract class, interface"
    ]
  },
  {
    title:
      "Which of the following results is not a possible output of this program?",
    code:
      "<code>package sea;</code>\n<code>enum Direction { NORTH, SOUTH, EAST, WEST; };</code>\n<code>public class Ship {</code>\n<code>   public static void main(String[] compass) {</code>\n<code>      System.out.print(Direction.valueOf(compass[0]));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "WEST is printed.",
      "south is printed.",
      "An ArrayIndexOutOfBoundsException is thrown at runtime.",
      "An IllegalArgumentException is thrown at runtime."
    ]
  },
  {
    title:
      "Which of the following is not an advantage of using enumerated types in Java?",
    code: null,
    answers: [
      "Ensure consistency of data across an application.",
      "Offer ability to create new enumerated values at runtime.",
      "Provide access to fixed constants whose value does not change during the course of the application.",
      "Support cases where a value can only take one of a limited number of options."
    ]
  },
  {
    title:
      "Given the following enum declaration, how many lines contain compilation errors?",
    code:
      "<code>package rainbow;</code>\n<code>enum Light {}</code>\n<code>public enum Color extends Light {</code>\n<code>   RED, BLUE, ORANGE, GREEN</code>\n<code>   protected Color() {}</code>\n<code>}</code>",
    answers: ["None, the code compiles as is.", "One", "Two", "Three"]
  },
  {
    title:
      "Which of the following cannot include a static method in its definition?",
    code: null,
    answers: [
      "Abstract class",
      "Static nested class",
      "Interface",
      "Local inner class"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package ai;</code>\n<code>&nbsp;</code>\n<code>interface Pump {</code>\n<code>   void pump(double psi);</code>\n<code>}</code>\n<code>interface Bend extends Pump {</code>\n<code>   void bend(double tensileStrength);</code>\n<code>}</code>\n<code>public class Robot {</code>\n<code>   public static final void apply(Bend instruction, double input) { // r1</code>\n<code>      instruction.bend(input);</code>\n<code>   }</code>\n<code>   public static void main(String... future) {</code>\n<code>      final Robot r = new Robot();</code>\n<code>      r.apply(x -&gt; System.out.print(x+" bent!"), 5);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5.0 bent!",
      "The code does not compile because Bend is not a functional interface.",
      "The code does not compile because of line r1.",
      "None of the above."
    ]
  },
  {
    title:
      "What is the best reason for applying the @Override annotation to a method?",
    code: null,
    answers: [
      "It is required to implement an interface method.",
      "It is required to override a method.",
      "The method will fail to compile if it is not actually overriding another method.",
      "There are no good reasons other than as a form of documentation."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package space;</code>\n<code>&nbsp;</code>\n<code>public class Bottle {</code>\n<code>   public static class Ship {</code>\n<code>      private enum Sail {  // w1</code>\n<code>         TALL {protected int getHeight() {return 100;}},</code>\n<code>         SHORT {protected int getHeight() {return 2;}};</code>\n<code>         protected abstract int getHeight();</code>\n<code>      }</code>\n<code>      public Sail getSail() {</code>\n<code><span epub:type="pagebreak" id="Page_212"></span>         return Sail.TALL;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] stars) {</code>\n<code>      Bottle bottle = new Bottle();</code>\n<code>      Ship q = bottle.new Ship();  // w2</code>\n<code>      System.out.print(q.getSail());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "TALL",
      "The code does not compile because of line w1.",
      "The code does not compile because of line w2.",
      "The code compiles but the application does not produce any output at runtime."
    ]
  },
  {
    title: "Which of the following is not a valid lambda expression?",
    code: null,
    answers: [
      "(Integer j, k) -> 5",
      "(p,q) -> p+q",
      "(Integer x, Integer y) -> x*y",
      '(left,right) -> {return "null";}'
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>1:  package fruit;</code>\n<code>2:</code>\n<code>3:  interface Edible { void eat(); }</code>\n<code>4:  public class ApplePicking {</code>\n<code>5:     public static void main(String[] food) {</code>\n<code>6:        Edible apple = new Edible() {</code>\n<code>7:           @Override</code>\n<code>8:           void eat() {</code>\n<code>9:              System.out.print("Yummy!");</code>\n<code>10:          }</code>\n<code>11:       }</code>\n<code>12:    }</code>\n<code>13: }</code>',
    answers: [
      "The application completes without printing anything.",
      "Yummy!",
      "One line of this application fails to compile.",
      "Two lines of this application fail to compile."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package forest;</code>\n<code>&nbsp;</code>\n<code>public class Woods {</code>\n<code>   static class Tree {}</code>\n<code>   public static void main(String[] leaves) {</code>\n<code>      int water = 10+5;</code>\n<code>      final class Oak extends Tree {  // p1</code>\n<code>         public int getWater() {</code>\n<code>            return water;  // p2</code>\n<code>         }</code>\n<code>      }</code>\n<code>      System.out.print(new Oak().getWater());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "15",
      "The code does not compile because of line p1.",
      "The code does not compile because of line p2.",
      "None of the above"
    ]
  },
  {
    title:
      "Fill in the blanks:  ____________allow Java to support multiple inheritance, and anonymous inner classes can  ____________of them.",
    code: null,
    answers: [
      "Abstract classes, extend at most one",
      "Abstract classes, extend any number",
      "Interfaces, implement at most one",
      "Interfaces, implement any number"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package vessel;</code>\n<code>&nbsp;</code>\n<code>class Problem extends Exception {}</code>\n<code>abstract class Danger {</code>\n<code>   protected abstract void isDanger() throws Problem;</code>\n<code>}</code>\n<code>public class SeriousDanger extends Danger {</code>\n<code>   protected void isDanger() throws Exception {  // m1</code>\n<code>      throw new RuntimeException();</code>\n<code>   }</code>\n<code>   public static void main(String[] will) throws Throwable {  // m2</code>\n<code>      new SeriousDanger().isDanger();  // m3</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code does not compile because of line m1",
      "The code does not compile because of line m2.",
      "The code does not compile because of line m3.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following is not a true statement about interfaces and abstract classes?",
    code: null,
    answers: [
      "Interfaces can only extend other interfaces, while abstract classes can extend both abstract and concrete classes.",
      "Unlike abstract classes, interfaces can be marked final.",
      "Abstract classes offer support for single inheritance, while interfaces offer support for multiple inheritance.",
      "All methods and variables in interfaces are public, while abstract classes can use various access modifiers for their methods and variables, including private in some cases."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package weather;</code>\n<code>&nbsp;</code>\n<code>public class Forecast {</code>\n<code>   public enum Snow { BLIZZARD, SQUALL, FLURRY }</code>\n<code>   public static void main(String[] modelData) {</code>\n<code>      System.out.print(Snow.BLIZZARD.ordinal());</code>\n<code>      System.out.print(" "+Snow.valueOf("flurry".toUpperCase()).name());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 FLURRY",
      "1 FLURRY",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blank:  The primary reason default interface methods were added to Java is to support____________ .",
    code: null,
    answers: [
      "polymorphism",
      "concrete methods in interfaces",
      "multiple inheritance",
      "backward compatibility"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package zoo;</code>\n<code>&nbsp;</code>\n<code>public class Penguin {</code>\n<code><span epub:type="pagebreak" id="Page_215"></span>   private int volume = 1;</code>\n<code>   private class Chick {</code>\n<code>      private static int volume = 3;</code>\n<code>      void chick() {</code>\n<code>         System.out.print("Honk("+Penguin.this.volume+")!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... eggs) {</code>\n<code>      Penguin pen = new Penguin();</code>\n<code>      final Penguin.Chick littleOne = pen.new Chick();</code>\n<code>      littleOne.chick();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Honk(1)!",
      "Honk(3)!",
      "The code does not compile.",
      "The code compiles but the output cannot be determined until runtime."
    ]
  },
  {
    title:
      "Let’s say Dinosaur is a class that contains a public member inner class called Pterodactyl. Given that dino is an instance of Dinosaur, how would you instantiate a new Pterodactyl from within a static method, such as main()?",
    code: null,
    answers: [
      "new Pterodactyl();",
      "dino.Pterodactyl();",
      "Dinosaur.new Pterodactyl();",
      "dino.new Pterodactyl();"
    ]
  },
  {
    title: "What is the result of compiling the following program?",
    code:
      "<code>package desert;</code>\n<code>&nbsp;</code>\n<code>interface CanBurrow {</code>\n<code>   public abstract void burrow();</code>\n<code>}</code>\n<code>@FunctionalInterface interface HasHardShell extends CanBurrow {}  // k1</code>\n<code>abstract class Tortoise implements HasHardShell {  // k2</code>\n<code>   public abstract int toughness();</code>\n<code>}</code>\n<code>public class DesertTortoise extends Tortoise {  // k3</code>\n<code>   public int toughness() { return 11; }</code>\n<code>}</code>",
    answers: [
      "The code does not compile because of line k1.",
      "The code does not compile because of line k2.",
      "The code does not compile because of line k3.",
      "The code compiles without issue."
    ]
  },
  {
    title: "Which statement(s) about the following Twins class are true?",
    code:
      '<code>package clone;</code>\n<code>&nbsp;</code>\n<code>interface Alex {</code>\n<code>   default void write() {}</code>\n<code>   static void publish() {}</code>\n<code>   void think();</code>\n<code>}</code>\n<code>interface Michael {</code>\n<code>   public default void write() {}</code>\n<code>   public static void publish() {}</code>\n<code>   public void think();</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Twins implements Alex, Michael {</code>\n<code>   @Override public void write() {}</code>\n<code>   @Override public static void publish() {}</code>\n<code>   @Override public void think() {</code>\n<code>      System.out.print("Thinking...");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["I only", "II only", "I and II", "II and III"],
    ol: [
      "The class fails to compile because of the write() method.",
      "The class fails to compile because of the publish() method.",
      "The class fails to compile because of the think() method."
    ]
  },
  {
    title:
      "Fill in the blanks:  A(n)  ____________and a(n)  ____________can define  static methods.",
    code: null,
    answers: [
      "abstract class, local inner class",
      "anonymous inner class, interface",
      "member inner class, enum",
      "enum, static inner class"
    ]
  },
  {
    title:
      "Which lambda expression can replace the instance of new BiologyMaterial() in the  Scientist class and produce the same results under various inputted values?",
    code:
      "<code>package university;</code>\n<code>&nbsp;</code>\n<code>@FunctionalInterface interface Study {</code>\n<code>   abstract int learn(String subject, int duration);</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>class BiologyMaterial implements Study {</code>\n<code>   @Override public int learn(String subject, int duration) {</code>\n<code>      if(subject == null)</code>\n<code>         return duration;</code>\n<code>      else</code>\n<code>         return duration+1;</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Scientist {</code>\n<code>   public static void main(String[] courses) {</code>\n<code>      final Study s = new BiologyMaterial() {};</code>\n<code>      System.out.print(s.learn(courses[0], Integer.parseInt(courses[1])));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "(p,q) -> q==null ? p : p+1",
      "(c,d) -> {int d=1; return c!=null ? d+1 : d;}",
      "(x,y) -> {return x==null ? y : y+1;}",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following enum declaration, how many lines contain compilation errors?",
    code:
      '<code>package myth;</code>\n<code>&nbsp;</code>\n<code>public enum Proposition {</code>\n<code>   TRUE(-10) { @Override String getNickName() { return "RIGHT"; }},</code>\n<code>   FALSE(-10) { public String getNickName() { return "WRONG"; }},</code>\n<code>   UNKNOWN(0) { @Override public String getNickName() { return "LOST"; }}</code>\n<code>   private final int value;</code>\n<code>   Proposition(int value) {</code>\n<code>      this.value = value;</code>\n<code>   }</code>\n<code>   public int getValue() {</code>\n<code><span epub:type="pagebreak" id="Page_218"></span>      return this.value;</code>\n<code>   }</code>\n<code>   protected abstract String getNickName();</code>\n<code>}</code>',
    answers: ["None. The code compiles as is.", "One", "Two", "Three"]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package math;</code>\n<code>&nbsp;</code>\n<code>interface AddNumbers {</code>\n<code>   int add(int x, int y);</code>\n<code>   static int subtract(int x, int y) { return x-y; }</code>\n<code>   default int multiply(int x, int y) { return x*y; }</code>\n<code>}</code>\n<code>public class Calculator {</code>\n<code>   protected void calculate(AddNumbers add, int a, int b) {</code>\n<code>      System.out.print(add.add(a, b));</code>\n<code>   }</code>\n<code>   public static void main(String[] moreNumbers) {</code>\n<code>      final Calculator ti = new Calculator();</code>\n<code>      ti.calculate((k,p) -&gt; p+k+1, 2, 5);  // j1</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "8",
      "The code does not compile because AddNumbers is not a functional interface.",
      "The code does not compile because of line j1.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the class declaration below, what expression can be used to fill in the blank to return the size variable defined in the Bottle class, printing 14 at runtime?",
    code:
      '<code>package baby;</code>\n<code>&nbsp;</code>\n<code>final public class Bottle {</code>\n<code>   final private int size = 14;</code>\n<code>   final protected class Insert {</code>\n<code><span epub:type="pagebreak" id="Page_219"></span>      private final int size = 25;</code>\n<code>      public final int getSize() {</code>\n<code>         return_____________ ;</code>\n<code>      }</code>\n<code>   }</code>\n<code>   final Insert insert = new Insert();</code>\n<code>   final public static void main(String[] feed) {</code>\n<code>      System.out.print(new Bottle().insert.getSize());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Bottle.this.size",
      "this.size",
      "this.Bottle.size",
      "The code does not compile, regardless of what is placed in the blank."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package ocean;</code>\n<code>abstract interface CanSwim {</code>\n<code>   public void swim();</code>\n<code>}</code>\n<code>public class Turtle {</code>\n<code>   public static void main(String[] seaweed) {</code>\n<code>      int distance = 7;</code>\n<code>      CanSwim seaTurtle = {</code>\n<code>         @Override</code>\n<code>         public void swim() {</code>\n<code>            System.out.print(distance);</code>\n<code>         }</code>\n<code>      };</code>\n<code>      seaTurtle.swim();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The application completes without printing anything.",
      "7",
      "One line of this application fails to compile.",
      "Two lines of this application fail to compile."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package present;</code>\n<code>&nbsp;</code>\n<code>interface Toy { String play(); }</code>\n<code>public class Gift {</code>\n<code>   public static void main(String[] matrix) {</code>\n<code>      abstract class Robot {}</code>\n<code>      class Transformer extends Robot implements Toy {</code>\n<code>         public String name = "GiantRobot";</code>\n<code>         public String play() {return "DinosaurRobot";}</code>\n<code>      }</code>\n<code>      Transformer prime = new Transformer () {</code>\n<code>         public String play() {return name;}  // y1</code>\n<code>      };</code>\n<code>      System.out.print(prime.play()+" "+name);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "GiantRobot GiantRobot",
      "GiantRobot DinosaurRobot",
      "The code does not compile because of line y1.",
      "None of the above"
    ]
  },
  {
    title: "What is the result of compiling the following program?",
    code:
      "<code>package ballroom;</code>\n<code>&nbsp;</code>\n<code>class Leader {}</code>\n<code>class Follower {}</code>\n<code>abstract public class Dancer {</code>\n<code>   public Leader getPartner() { return new Leader(); }</code>\n<code>   abstract public Leader getPartner(int count);  // u1</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>abstract class SwingDancer extends Dancer {</code>\n<code>   public Follower getPartner() {  // u2</code>\n<code>      return new Follower();  // u3</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code does not compile because of line u1.",
      "The code does not compile because of line u2.",
      "The code does not compile because of line u3.",
      "The code compiles without issue."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package prepare;</code>\n<code>public class Ready {</code>\n<code>   protected static int first = 2;</code>\n<code>   private final short DEFAULT_VALUE = 10;</code>\n<code>   private static class GetSet {</code>\n<code>      int first = 5;</code>\n<code>      static int second = DEFAULT_VALUE;</code>\n<code>   }</code>\n<code>   private GetSet go = new GetSet();</code>\n<code>   public static void main(String[] begin) {</code>\n<code>      Ready r = new Ready();</code>\n<code>      System.out.print(r.go.first);</code>\n<code>      System.out.print(", "+r.go.second);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "2, 5",
      "5, 10",
      "The code does not compile because of the GetSet class body.",
      "The code does not compile for another reason."
    ]
  }
];

const a12 = [
  "B. The lambda expression s -> true is valid, making Options A, C, and D incorrect. Parentheses () are not required on the left-hand side if there is only one variable. Brackets {} are not required if the right-hand side is a single expression. Parameter data types are only required if the data type for at least one parameter is specified, otherwise none are required. The remaining choice, the arrow operator ->, is required for all lambda expressions, making Option B the correct answer.",
  "D. The application contains a compilation error. The case statements incorrectly use the enum name as well as the value, such as DaysOff.ValentinesDay. Since the type of the enum is determined by the value of the variable in the switch statement, the enum name is not allowed and throws a compilation error when used. For this reason, Option D is correct. If the enum name DaysOff was removed, the application would output 12, since the lack of any break statements causes multiple blocks to be reached, and Option C would have been the correct answer.",
  "C. A functional interface must include exactly one abstract method, either by inheritance or declared directly. It may also have any number, including zero, of default or static methods. For this reason, both parts of Option D are incorrect. The first part of Option A is incorrect because more than one abstract method disqualifies it as a functional interface. The first part of Option B is incorrect because the method must be abstract; that is to say, any method will not suffice. Finally, Option C is the correct answer. The first part of the sentence defines what it means to be a functional interface. The second part refers to the optional @FunctionalInterface annotation. It is considered a good practice to add this annotation to any functional interfaces you define because the compiler will report a problem if you define an invalid interface that does not have exactly one abstract method.",
  "C. While an anonymous inner class can extend another class or implement an interface, it cannot be declared final or abstract since it has no class definition. For this reason, Option C is correct. The other classes may be declared final or abstract since they have a class definition.",
  "B. Option A is incorrect because the lambda expression is missing a semicolon (;) at the end of the return statement. Option C is incorrect because the local variable test is used without being initialized. Option D is also incorrect. The parentheses are required on the left-hand side of the lambda expression when there is more than one value or a data type is specified. Option B is the correct answer and the only valid lambda expression.",
  "B. An enum cannot be marked abstract, nor can any of its values, but its methods can be marked abstract, making Option B the correct answer. Note that if an enum contains an abstract method, then every enum value must include an override of this abstract method.",
  "B. The code compiles without issue, so Option D is incorrect. The first print() statement refers to value in the Deeper class, so 5 is printed. The second and third print() statements actually refer to the same value in the Deep class, so 2 is printed twice. The prefix Matrix. is unnecessary in the first of the two print() statements and does not change the result. For these reasons, Option B is the correct answer.",
  "D. A local inner class can access final or effectively final local variables, making Option D the correct answer. The second statement is invalid because access modifiers like private cannot be applied to local variables.",
  "C. The type of the variable in the switch statement is the enum Currency, but the case statements use int values. While the enum class hierarchy does support an ordinal() method, which returns an int value, the enum values cannot be compared directly with int values. For this reason, the code does not compile, since the case statement values are not compatible with the variable type in the switch statement, making Option C the correct answer.",
  "C. A local variable is effectively final when it’s primitive value or object reference does not change after it is initialized, making Option C the correct answer. Option D is incorrect. Any change to the variable after it is initialized disqualifies it for being considered effectively final.",
  "D. Both the Drive and Hover interfaces define a default method getSpeed() with the same signature. In fact, both getSpeed() methods return the same value of 5. The class Car implements both interfaces, which means it inherits both default methods. Since the compiler does not know which one to choose, the code does not compile, and the answer is Option D. Note that if the Car class had overridden the getSpeed() method, then the code would have compiled without issue and printed 10 at runtime. In particular, the local class Racecar defined in the main() method compiles without issue, making Option C incorrect.",
  "B. An interface can be extended by another interface and a class can be extended by another class, making the second part of Options A, C, and D incorrect. Option B is correct because an enum cannot be extended. Note that Option C is also incorrect for this reason.",
  "B. If the program is called with a single input WEST, then WEST would be printed at runtime. If the program is called with no input, then the compass array would be of size zero, and an ArrayIndexOutOfBoundsException would be thrown at runtime. Finally, if the program is called with a string that does not match one of the values in Direction, then an IllegalArgumentException would be thrown at runtime. The only result not possible is south, since the enum value is in uppercase, making Option B the correct answer.",
  "B. Enumerated types support creating a set of reusable values whose values are fixed and consistent across the entire application. For these reason, Options A, C, and D are incorrect. Option B is the false statement because enum values are defined at compile time and cannot be changed or added at runtime.",
  "D. The program contains three compilation problems. First off, the enum Color extends the enum Light, but enums cannot extend other enums so the definition is invalid. Second, the enum value list must end with a semicolon (;) if the enum definition contains anything other than the enum values. Since it includes a constructor, a semicolon (;) is required after GREEN. Finally, enum constructors must be private, meaning the protected constructor for Color does not compile. For these three reasons, Option D is the correct answer.",
  "D. Both abstract classes and interfaces can include static methods, so Options A and C are incorrect. A static nested class can include static methods, but it is the only type of inner class in which this is allowed. Local inner classes, anonymous inner classes, and member inner classes do not support static methods. For these reasons, Option D is correct, and Option B is incorrect.",
  "B. A functional interface must contain exactly one abstract method. The Bend interface contains two abstract methods, pump() and bend(), since it extends Pump and inherits pump(). For this reason, the Bend method is not a valid functional interface and therefore cannot be used as a lambda expression, making Option B the correct answer. The rest of the code compiles without issue. Note that the usage of an instance variable to call a static method, r.apply() in the main() method, is permitted but discouraged.",
  "C. Applying the @Override annotation is optional and not required to override a method or implement an interface method, making Options A and B incorrect. While partially helpful as a form of documentation, it is not the best reason to apply the annotation, making Option D incorrect. The best reason is that the compiler will actually fail to compile if the method that the @Override annotation is being applied to is not actually overriding an inherited method. This behavior helps correct typos or changes in superclasses or interfaces that could break the class or lead to unexpected behavior. For this reason, Option C is the best choice.",
  "C. The Bottle class includes a static nested class Ship that must be instantiated in a static manner. Line w2 uses an instance of Bottle to instantiate the Ship. While this would be allowed if Ship was a member inner class, since it is a static nested class, line w2 does not compile, and Option C is the correct answer. Note that if Ship was changed to be a member inner class, the code would still not compile since a member inner class cannot include static members and enums are inherently static. Therefore, the correct change would be to fix the declaration on line w2.",
  "A. Option A is the invalid lambda expression because the type is specified for the variable j, but not the variable k. The rest of the options are valid lambda expressions. To be a valid lambda expression, the type must be specified for all of the variables, as in Option C, or none of them, as in Options B and D.",
  "D. This application declares an anonymous inner class that implements the Edible interface. Interface methods are public, whereas the override in the anonymous inner class uses package-private access. Since this reduces the visibility of the method, the declaration of eat() on line 8 does not compile. Next, the declaration of the apple object must end with a semicolon (;) on line 11, and it does not. For these two reasons, the code does not compile, and Option D is the correct answer. Note that if these two issues were corrected, with the public modifier and missing semi-colon (;), then the correct answer would be Option A because the code does not actually call the eat() method; it just declares it.",
  "A. The code compiles without issue and prints 15, making Option A correct and Option D incorrect. The main() method defines a local class Oak that correctly extends Tree, a static nested class, making Option B incorrect. Finally, the method getWater() is permitted to read the variable water, defined in the main() method, since it is effectively final, having a value of 15 when it is defined. For this reason, Option C is also incorrect.",
  "C. Interfaces allow Java to support multiple inheritance because a class may implement any number of interfaces. On the other hand, an anonymous inner class may implement at most one interface, since it does not have a class definition to implement any others. For these reasons, Option C is the correct answer.",
  "A. The code does not compile because the declaration of isDanger() in the class SeriousDanger is an invalid method override. An overridden method may not throw a broader checked exception than it inherits. Since Exception is a superclass of Problem, thrown by the inherited method in the Danger class, the override of this checked exception is invalid. For this reason, line m1 does not compile, and Option A is the correct answer. The rest of the lines of code compile without issue.",
  "B. Options A, C, and D are true statements about interfaces and abstract classes. Option B is the correct answer because neither abstract classes nor interfaces can be marked final. For Option D, methods and variables can both be marked private in abstract classes in some cases. The “some cases” refers to the fact that the private modifier cannot be applied to abstract methods, since a method cannot be marked both final and abstract. Since abstract classes can contain concrete methods, which can take the private access modifier, the statement is true.",
  "A. The code compiles without issue, so Option C is incorrect. Enum ordinal values are indexed starting with zero, so 0 is printed first. The second line compiles and runs without issue, with flurry being converted to FLURRY, using the toUpperCase() method. Since there is a matching enum named FLURRY, that value is printed next. For these reasons, Option A is the correct answer.",
  "D. Java was updated to include default interface methods in order to support backward compatibility of interfaces. By adding a default method to an existing interface, we can create a new version of the interface, which can be used without breaking the functionality of existing classes that implement an older version of the interface. For this reason, Option D is the correct answer. Options A and C are not applicable to default interface methods, whereas Option B could be achieved by using static interface methods.",
  "C. The Penguin class includes a member inner class Chick. Member inner classes cannot include static methods or variables. Since the variable volume is marked static, the member inner class Chick does not compile, making Option C the correct answer. Note that the variable volume referenced in the chick() method is one defined in the Penguin outer class. If the static modifier was removed from the volume variable in the Chick class, then the rest of the code would compile and run without issue, printing Honk(1)! at runtime.",
  "D. Member inner classes require an instance of the surrounding class to be instantiated. Option A is incorrect since we are told that the instantiation request is from a static method. Note that this call would be valid from a non-static method in Dinosaur. Option B is incorrect because it lacks the new keyword. Option C is incorrect. Pterodactyl is a member inner class, not a static nested class. Option D is correct and uses the instance dino to create a new Pterodactyl object.",
  "C. First off, both CanBurrow and HasHardShell are functional interfaces since they contain exactly one abstract method, although only the latter uses the optional @FunctionalInterface annotation. The declarations of these two interfaces, along with the abstract class Tortoise, compile without issue, making Options A and B incorrect. The code does not compile, though, so Option D is incorrect. The class DesertTortoise inherits two abstract methods, one from the interface CanBurrow and the other from the abstract parent class Tortoise. Since the class only implements one of them and the class is concrete, the class declaration of DesertTortoise fails to compile on line k3, making Option C the correct answer.",
  "B. First off, the two interface definitions contain identical methods, with the public modifiers assumed in all interfaces methods. For the first statement, the write() method is marked default in both interfaces, which means a class can only implement both interfaces if the class overrides the default method with its own implementation of the method. Since the Twins method does override write(), the method compiles without issue, making the first statement incorrect. Next, the publish() method is marked static in both interfaces and the Twins class. While having a static method in all three is allowed, marking a static method with the @Override annotation is not because only member methods may be overridden. For this reason, the second statement is correct. Finally, the think() method is assumed to be abstract in both interfaces since it doesn’t have a static or default modifier and does not define a body. The think() method is then correctly overridden with a concrete implementation in the Twins class, making the third statement incorrect. Since only the second statement was true, Option B is the correct answer.",
  "D. An enum and static inner class can define static methods, making Option D the correct answer. Options A, B, and C are incorrect because the other types of inner classes cannot define static methods. Note that interfaces and abstract classes can define static methods.",
  "C. First off, Option A does not compile since the variables p and q are reversed, making the return type of the method and usage of operators invalid. The first argument p is a String and q is an int, but the lambda expression reverses them, and the code does not compile. Option B also does not compile. The variable d is declared twice, first in the lambda argument list and then in the body of the lambda expression. The second declaration in the body of the lambda expression causes the compiler to generate a duplicate local variable message. Note that other than it being used twice, the expression is valid; the ternary operator is functionally equivalent to the learn() method in the BiologyMaterial class. Option C is the correct answer since it compiles and handles the input in the same way as the learn() method in the BiologyMaterial class. ",
  "C. The code does not compile since it contains two compilation errors, making Option A incorrect. First, the enum list is not terminated with a semicolon (;). A semicolon (;) is required anytime an enum includes anything beyond just the list of values, such as a constructor or method. Second, the access modifier of TRUE’s implementation of getNickName() is package-private, but the abstract method signature has a protected modifier. Since package-private is a more restrictive access than protected, the override is invalid and the code does not compile. For these two reasons, Option C is the correct answer. Note that the @Override annotation is optional in the method signature, therefore FALSE’s version of getNickName() compiles without issue. Also, note that the Proposition constructor does not include a private access modifier, but the constructor compiles without issue. Enum constructors are assumed to be private if no access modifier is specified, unlike regular classes where package-private is assumed if no access modifier is specified.",
  "A. The code compiles and runs without issue, printing 8 at runtime, making Option A correct and Option D incorrect. The AddNumbers interface is a valid functional interface. While it includes both static and default methods, it only includes one abstract method, the precise requirement for it to be considered a functional interface, making Option B incorrect. Finally, Option C is incorrect because the lambda expression is valid and used correctly.",
  "A. While this code included a large number of final modifiers, none of them prevent the code from compiling when a valid expression is placed in the blank, making Option D incorrect. Option B is incorrect since it returns the size variable defined in the Insert member inner class, not the Bottle class, printing 25 at runtime. Option C is incorrect because the expression is invalid and does not compile when inserted into the blank. Finally, Option A is the correct answer because it compiles, properly references the variable size in the Bottle class, and prints 14 at runtime.",
  "C. The main() method attempts to define an anonymous inner class instance but fails to provide the class or interface name, or use the new keyword. The right-hand side of the assignment to the seaTurtle variable should start with new CanSwim(). For this reason, Option C is the correct answer. If the code was corrected with the proper declaration, it would output 7, and Option B would be the correct answer.",
  "D. The code does not compile, so Options A and B are incorrect. The declarations of the local inner classes Robot and Transformer compile without issue. The anonymous inner class that extends Transformer compiles without issue, since the public variable name is inherited, making Option C incorrect. The only compilation problem in this class is the last line of the main() method. The variable name is defined inside the local inner class and not accessible outside class declaration without a reference to the local inner class. Due to scope, this last line of the main() method does not compile, making Option D the correct answer. Note that the first part of the print() statement in the main() method, if the code compiled, would print GiantRobot.",
  "B. The Dancer class compiles without issue, making Option A incorrect. The SwingDancer class, though, does not compile because getPartner() is an invalid method override. In particular, Leader and Follower are not covariant since Follower is not a subclass of Leader. Therefore, line u2 does not compile, making Option B correct and Option D incorrect. Note that the abstract method getPartner(int) is not implemented in SwingDancer, but this is valid because SwingDancer is an abstract class and is not required to implement all of the inherited abstract methods.",
  "C. The code does not compile, so Options A and B are incorrect. The problem here is that the DEFAULT_VALUE is an instance variable, not a static variable; therefore, the static nested class GetSet cannot access it without a reference to the class. For this reason, the declaration of the static nested class GetSet does not compile, and Option C is the correct answer. The rest of the code compiles without issue. Note that if the DEFAULT_VALUE variable was modified to be static, then the code would compile without issue, and Option B would be the correct answer."
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
    answerArray: mapAnswers(qz["answers"], a12[index]),
    explain: a12[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
//   quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
