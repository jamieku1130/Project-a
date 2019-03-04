const qzString = [
  {
    title:
      "How many lines of the following program contain compilation errors?",
    code:
      '<code>package theater;</code>\n<code>class Cinema {</code>\n<code>   private String name;</code>\n<code>   public Cinema(String name) {this.name = name;}</code>\n<code>}</code>\n<code>public class Movie extends Cinema {</code>\n<code>   public Movie(String movie) {}</code>\n<code>   public static void main(String[] showing) {</code>\n<code>      System.out.print(new Movie("Another Trilogy").name);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which modifier can be applied to an abstract interface method?",
    code: null,
    answers: ["protected", "static", "final", "public"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package radio;</code>\n<code>public class Song {</code>\n<code>   public void playMusic() {</code>\n<code>      System.out.print("Play!");</code>\n<code>   }</code>\n<code>   private static int playMusic() {</code>\n<code>      System.out.print("Music!");</code>\n<code>   }</code>\n<code>   public static void main(String[] tracks) {</code>\n<code>      new Song().playMusic();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Play!",
      "Music!",
      "The code does not compile.",
      "The code compiles but the answer cannot be determined until runtime."
    ]
  },
  {
    title: "Which of the following statements about inheritance is true?",
    code: null,
    answers: [
      "Inheritance allows objects to access commonly used attributes and methods.",
      "Inheritance always leads to simpler code.",
      "All primitives and objects inherit a set of methods.",
      "Inheritance allows you to write methods that reference themselves."
    ]
  },
  {
    title:
      "Given the class declaration below, which value cannot be inserted into the blank line that would allow the code to compile?",
    code:
      "<code>package mammal;</code>\n<code>interface Pet {}</code>\n<code>public class Canine implements Pet {</code>\n<code>   public ___________ getDoggy() {</code>\n<code>      return this;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["Class", "Pet", "Canine", "Object"]
  },
  {
    title:
      "Imagine you are working with another team to build an application. You are developing code that uses a class that the other team has not finished writing yet. Which element of Java would best facilitate this development, allowing easy integration once the other team’s code is complete?",
    code: null,
    answers: [
      "An abstract class",
      "An interface",
      "static methods",
      "An access modifier"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package vehicles;</code>\n<code>class Automobile {</code>\n<code>   private final String drive() { return "Driving vehicle"; }</code>\n<code>}</code>\n<code>class Car extends Automobile {</code>\n<code>   protected String drive() { return "Driving car"; }</code>\n<code>}</code>\n<code>public class ElectricCar extends Car {</code>\n<code>   public final String drive() { return "Driving electric car"; }</code>\n<code>   public static void main(String[] wheels) {</code>\n<code>      final Car car = new ElectricCar();</code>\n<code><span epub:type="pagebreak" id="Page_100"></span>      System.out.print(car.drive());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Driving vehicle",
      "Driving electric car",
      "Driving car",
      "The code does not compile."
    ]
  },
  {
    title: "Which of the following statements about inheritance is correct?",
    code: null,
    answers: [
      "Java does not support multiple inheritance.",
      "Java allows multiple inheritance using abstract classes.",
      "Java allows multiple inheritance using non-abstract classes.",
      "Java allows multiple inheritance using interfaces."
    ]
  },
  {
    title:
      "How many changes need to be made to the classes below to properly override the watch() method?",
    code:
      "<code>package entertainment;</code>\n<code>class Television {</code>\n<code>   protected final void watch() {}</code>\n<code>}</code>\n<code>public class LCD extends Television {</code>\n<code>   Object watch() {}</code>\n<code>}</code>",
    answers: ["One", "Two", "Three", "None; the code compiles as is."]
  },
  {
    title:
      "Which of the following statements about overriding a method is incorrect?",
    code: null,
    answers: [
      "The return types must be covariant.",
      "The access modifier of the method in the child class must be the same or broader than the method in the superclass.",
      "A checked exception thrown by the method in the parent class must be thrown by the method in the child class.",
      "A checked exception thrown by a method in the child class must be the same or  narrower than the exception thrown by the method in the parent class."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package machines;</code>\n<code>class Computer {</code>\n<code>   protected final int process() { return 5; }</code>\n<code><span epub:type="pagebreak" id="Page_101"></span>}</code>\n<code>public class Laptop extends Computer {</code>\n<code>   public final int process() { return 3; }</code>\n<code>   public static void main(String[] chips) {</code>\n<code>      System.out.print(new Laptop().process());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5",
      "3",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given that FileNotFoundException is a subclass of IOException, what is the output of the following application?",
    code:
      "<code>package edu;</code>\n<code>import java.io.*;</code>\n<code>class School {</code>\n<code>   public int getNumberOfStudentsPerClassroom(String... students)           throws IOException {</code>\n<code>      return 3;</code>\n<code>   }</code>\n<code>   public int getNumberOfStudentsPerClassroom() throws IOException {</code>\n<code>      return 9;</code>\n<code>   }</code>\n<code>}</code>\n<code>public class HighSchool extends School {</code>\n<code>   public int getNumberOfStudentsPerClassroom() throws FileNotFoundException {</code>\n<code>      return 2;</code>\n<code>   }</code>\n<code>   public static void main(String[] students) throws IOException {</code>\n<code>      School school = new HighSchool();</code>\n<code>      System.out.print(school.getNumberOfStudentsPerClassroom());</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["2", "3", "9", "The code does not compile."]
  },
  {
    title: "Which modifier can be applied to an interface method?",
    code: null,
    answers: ["protected", "static", "private", "final"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package track;</code>\n<code>interface Run {</code>\n<code>   default void walk() {</code>\n<code>      System.out.print("Walking and running!");</code>\n<code>   }</code>\n<code>}</code>\n<code>interface Jog {</code>\n<code>   default void walk() {</code>\n<code>      System.out.print("Walking and jogging!");</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Sprint implements Run, Jog {</code>\n<code>   public void walk() {</code>\n<code>      System.out.print("Sprinting!");</code>\n<code>   }</code>\n<code>   public static void main() {</code>\n<code>      new Sprint().walk();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Walking and running!",
      "Walking and jogging!",
      "Sprinting!",
      "The code does not compile."
    ]
  },
  {
    title: "Which of the following statements about interfaces is not true?",
    code: null,
    answers: [
      "An interface can extend another interface.",
      "An interface can implement another interface.",
      "A class can implement two interfaces.",
      "A class can extend another class."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package transport;</code>\n<code>&nbsp;</code>\n<code>class Ship {</code>\n<code>   protected int weight = 3;</code>\n<code>   private int height = 5;</code>\n<code>   public int getWeight() { return weight; }</code>\n<code>   public int getHeight() { return height; }</code>\n<code>}</code>\n<code>&nbsp;</code>\n<code>public class Rocket extends Ship {</code>\n<code>   public int weight = 2;</code>\n<code>   public int height = 4;</code>\n<code>   public void printDetails() {</code>\n<code>      System.out.print(super.getWeight()+","+super.height);</code>\n<code>   }</code>\n<code>   public static final void main(String[] fuel) {</code>\n<code>      new Rocket().printDetails();</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["2,5", "3,4", "3,5", "The code does not compile."]
  },
  {
    title:
      "Fill in the blanks: Excluding default and static methods, a(n)  ____________can contain both abstract and concrete methods, while a(n)  ____________contains only abstract methods.",
    code: null,
    answers: [
      "concrete class, abstract class",
      "concrete class, interface",
      "interface, abstract class",
      "abstract class, interface"
    ]
  },
  {
    title: "Which statement about the following class is correct?",
    code:
      '<code>package shapes;</code>\n<code>&nbsp;</code>\n<code>abstract class Triangle {</code>\n<code>   abstract String getDescription();</code>\n<code>}</code>\n<code><span epub:type="pagebreak" id="Page_104"></span>class RightTriangle extends Triangle {</code>\n<code>   protected String getDescription() { return "rt"; } // g1</code>\n<code>}</code>\n<code>public abstract class IsoscelesRightTriangle extends RightTriangle { // g2</code>\n<code>   public String getDescription() { return "irt"; }</code>\n<code>   public static void main(String[] edges) {</code>\n<code>      final Triangle shape = new IsoscelesRightTriangle(); // g3</code>\n<code>      System.out.print(shape.getDescription());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile due to line g1.",
      "The code does not compile due to line g2.",
      "The code does not compile due to line g3.",
      "The code compiles and runs without issue."
    ]
  },
  {
    title:
      "Given that Short and Integer extend Number, what type can be used to fill in the blank in the class below to allow it to compile?",
    code:
      "<code>package band;</code>\n<code>&nbsp;</code>\n<code>interface Horn { public Integer play(); }</code>\n<code>abstract class Woodwind { public Short play() {return 3;} }</code>\n<code>public final class Saxophone extends Woodwind implements Horn {</code>\n<code>   public  ___________play() {</code>\n<code>      return null;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["Integer", "Short", "Number", "None of the above"]
  },
  {
    title:
      "Fill in the blanks: A class  ____________an interface, while a class  ____________an abstract class.",
    code: null,
    answers: [
      "extends, implements",
      "extends, extends",
      "implements, extends",
      "implements, implements"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package paper;</code>\n<code>&nbsp;</code>\n<code>abstract class Book {</code>\n<code>   protected static String material = "papyrus";</code>\n<code>   public Book() {}</code>\n<code>   public Book(String material) {this.material = material;}</code>\n<code>}</code>\n<code>public class Encyclopedia extends Book {</code>\n<code>   public static String material = "cellulose";</code>\n<code>   public Encyclopedia() {super();}</code>\n<code>   public String getMaterial() {return super.material;}</code>\n<code>   public static void main(String[] pages) {</code>\n<code>      System.out.print(new Encyclopedia().getMaterial());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "papyrus",
      "cellulose",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "The following diagram shows two reference variables pointing to the same Bunny object in memory. The reference variable myBunny is of type Bunny, while unknownBunny is of an unknown data type. Which statement about the reference variables is not true? For this question, assume the instance methods and variables shown in the diagram are marked public.",
    code: null,
    answers: [
      "If the unknownBunny reference does not have access to the same variables and methods that myBunny has access to, it can be explicitly cast to a reference type that does.",
      "The data type of unknownBunny must be Bunny or a subclass of Bunny.",
      "If the data type of unknownBunny is Bunny, it has access to all of the same methods and variables as myBunny.",
      "The data type of unknownBunny could be an interface, class, or abstract class."
    ]
  },
  {
    title:
      "Which of the following modifiers can be applied to an abstract method?",
    code: null,
    answers: ["final", "private", "default", "protected"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package space;</code>\n<code>&nbsp;</code>\n<code>interface Sphere {</code>\n<code>   default String getName() { return "Unknown"; }</code>\n<code>}</code>\n<code>abstract class Planet {</code>\n<code>   abstract String getName();</code>\n<code>}</code>\n<code>public class Mars extends Sphere implements Planet {</code>\n<code>   public Mars() {</code>\n<code>      super();</code>\n<code>   }</code>\n<code>   public String getName() { return "Mars"; }</code>\n<code>   public static void main(final String[] probe) {</code>\n<code>      System.out.print(((Planet)new Mars()).getName());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Mars",
      "Unknown",
      "The code does not compile due to the declaration of Sphere.",
      "The code does not compile for another reason."
    ]
  },
  {
    title: "Which of the following statements is correct?",
    code: null,
    answers: [
      "A reference to a class can be assigned to a subclass reference without an explicit cast.",
      "A reference to a class can be assigned to a superclass reference without an explicit cast.",
      "A reference to an interface can be assigned to a reference of a class that implements the interface without an explicit cast.",
      "A reference to a class that implements an interface can be assigned to an interface  reference only with an explicit cast."
    ]
  },
  {
    title:
      "Of the following four modifiers, choose the one that is not implicitly applied to all interface variables.",
    code: null,
    answers: ["final", "abstract", "static", "public"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package race;</code>\n<code>abstract class Car {</code>\n<code>   static { System.out.print("1"); }</code>\n<code>   public Car(String name) {</code>\n<code>      super();</code>\n<code>      System.out.print("2");</code>\n<code>   }</code>\n<code>   { System.out.print("3"); }</code>\n<code>}</code>\n<code>public class BlueCar extends Car {</code>\n<code>   { System.out.print("4"); }</code>\n<code>   public BlueCar() {</code>\n<code>      super("blue");</code>\n<code>      System.out.print("5");</code>\n<code>   }</code>\n<code>   public static void main(String[] gears) {</code>\n<code>      new BlueCar();</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["23451", "12354", "13245", "The code does not compile."]
  },
  {
    title:
      "Fill in the blank: Overloaded and overridden methods always have____________ .",
    code: null,
    answers: [
      "the same parameter list",
      "different return types",
      "the same method name",
      "covariant return types"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package sports;</code>\n<code>abstract class Ball {</code>\n<code>   protected final int size;</code>\n<code>   public Ball(int size) {</code>\n<code>      this.size = size;</code>\n<code>   }</code>\n<code>}</code>\n<code><span epub:type="pagebreak" id="Page_108"></span>interface Equipment {}</code>\n<code>public class SoccerBall extends Ball implements Equipment {</code>\n<code>   public SoccerBall() {</code>\n<code>      super(5);</code>\n<code>   }</code>\n<code>   public Ball get() { return this; }</code>\n<code>   public static void main(String[] passes) {</code>\n<code>      Equipment equipment = (Equipment)(Ball)new SoccerBall().get();</code>\n<code>      System.out.print(((SoccerBall)equipment).size);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "5",
      "The code does not compile due an invalid cast.",
      "The code does not compile for a different reason.",
      "The code compiles but throws a ClassCastException at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: A class that defines an instance variable with the same name as a variable in the parent class is referred to as  ____________a variable, while a class that defines a static method with the same signature as a static method in a parent class is referred to as  ____________a method.",
    code: null,
    answers: [
      "hiding, overriding",
      "overriding, hiding",
      "hiding, hiding",
      "replacing, overriding"
    ]
  },
  {
    title: "Which statement about the following class is correct?",
    code:
      "<code>package shapes;</code>\n<code>&nbsp;</code>\n<code>abstract class Parallelogram {</code>\n<code>   private int getEqualSides() {return 0;}</code>\n<code>}</code>\n<code>abstract class Rectangle extends Parallelogram {</code>\n<code>   public static int getEqualSides() {return 2;} // x1</code>\n<code>}</code>\n<code>public final class Square extends Rectangle {</code>\n<code>   public int getEqualSides() {return 4;} // x2</code>\n<code>   public static void main(String[] corners) {</code>\n<code>      final Square myFigure = new Square(); // x3</code>\n<code>      System.out.print(myFigure.getEqualSides());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "The code does not compile due to line x1.",
      "The code does not compile due to line x2.",
      "The code does not compile due to line x3.",
      "The code compiles and runs without issue."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package flying;</code>\n<code>&nbsp;</code>\n<code>class Rotorcraft {</code>\n<code>   protected final int height = 5;</code>\n<code>   abstract int fly();</code>\n<code>}</code>\n<code>public class Helicopter extends Rotorcraft {</code>\n<code>   private int height = 10;</code>\n<code>   protected int fly() {</code>\n<code>      return super.height;</code>\n<code>   }</code>\n<code>   public static void main(String[] unused) {</code>\n<code>      Helicopter h = (Helicopter)new Rotorcraft();</code>\n<code>      System.out.print(h.fly());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "5",
      "10",
      "The code does not compile.",
      "The code compiles but produces a ClassCastException at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: A class may be assigned to a(n) _____________ reference variable automatically but requires an explicit cast when assigned to a(n) _____________ reference variable.",
    code: null,
    answers: [
      "subclass, outer class",
      "superclass, subclass",
      "subclass, superclass",
      "abstract class, concrete class"
    ]
  },
  {
    title:
      "Fill in the blank: A(n)  ____________is the first non-abstract subclass that is required to implement all of the inherited abstract methods.",
    code: null,
    answers: ["abstract class", "abstraction", "concrete class", "interface"]
  },
  {
    title: "How many compiler errors does the following code contain?",
    code:
      "<code>package animal;</code>\n<code>interface CanFly {</code>\n<code>   public void fly() {}</code>\n<code>}</code>\n<code>final class Bird {</code>\n<code>   public int fly(int speed) {}</code>\n<code>}</code>\n<code>public class Eagle extends Bird implements CanFly {</code>\n<code>   public void fly() {}</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Which of the following is not an attribute common to both abstract classes and interfaces?",
    code: null,
    answers: [
      "They both can contain static variables.",
      "They both can contain default methods.",
      "They both can contain static methods.",
      "They both can contain abstract methods."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package musical;</code>\n<code>interface SpeakDialogue { default int talk() { return 7; } }</code>\n<code>interface SingMonologue { default int talk() { return 5; } }</code>\n<code>public class Performance implements SpeakDialogue, SingMonologue {</code>\n<code>   public int talk(String... x) {</code>\n<code>      return x.length;</code>\n<code>   }</code>\n<code>   public static void main(String[] notes) {</code>\n<code>      System.out.print(new Performance().talk(notes));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "7",
      "5",
      "The code does not compile.",
      "The code compiles without issue, but the output cannot be determined until runtime."
    ]
  },
  {
    title: "Which of the following is a virtual method?",
    code: null,
    answers: [
      "protected instance methods",
      "static methods",
      "private instance methods",
      "final instance methods"
    ]
  },
  {
    title:
      "Fill in the blanks: An interface  ____________another interface, while a class  ____________another class.",
    code: null,
    answers: [
      "implements, extends",
      "extends, extends",
      "implements, implements",
      "extends, implements"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>class Math {</code>\n<code>   public final double secret = 2;</code>\n<code>}</code>\n<code>class ComplexMath extends Math {</code>\n<code>   public final double secret = 4;</code>\n<code>}</code>\n<code>public class InfiniteMath extends ComplexMath {</code>\n<code>   public final double secret = 8;</code>\n<code>   public static void main(String[] numbers) {</code>\n<code>      Math math = new InfiniteMath();</code>\n<code>      System.out.print(math.secret);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["2", "4", "8", "The code does not compile."]
  },
  {
    title:
      "Given the following method and the fact that FileNotFoundException is a subclass of IOException, which of the following method signatures is a valid override by a subclass?",
    code: "<code>protected void dance() throws FileNotFoundException {}</code>",
    answers: [
      "void dance() throws IOException",
      "public void dance() throws IOException",
      "private void dance() throws FileNotFoundException",
      "public final void dance()"
    ]
  },
  {
    title:
      "Given the class definitions below, which value, when inserted into the blank line, does not allow the class to compile?",
    code:
      "<code>public class Canine {}</code>\n<code>public class Dog extends Canine {}</code>\n<code>public class Wolf extends Canine {}</code>\n<code>public final class Husky extends Dog {}</code>\n<code>public class Zoologist {</code>\n<code>   Canine animal;</code>\n<code>   public final void setAnimal(Dog animal) { this.animal = animal; }</code>\n<code>   public static void main(String[] furryFriends) {</code>\n<code>      new Zoologist().setAnimal(_____________);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["new Husky()", "new Dog()", "new Wolf()", "null"]
  },
  {
    title:
      "Which of the following modifiers cannot be applied to an interface method?",
    code: null,
    answers: ["final", "default", "static", "abstract"]
  },
  {
    title: "Which statement about the following application is true?",
    code:
      '<code>package party;</code>\n<code>&nbsp;</code>\n<code>abstract class House {</code>\n<code>   protected abstract Object getSpace();</code>\n<code>}</code>\n<code>abstract class Room extends House {</code>\n<code>   abstract Object getSpace(Object list);</code>\n<code>}</code>\n<code>abstract public class Ballroom extends House {</code>\n<code>   protected abstract Object getSpace();</code>\n<code>   public static void main(String[] squareFootage) {</code>\n<code>      System.out.print("Let\'s start the party!");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "It compiles and at runtime prints Let's start the party!",
      "It does not compile for one reason.",
      "It does not compile for two reasons.",
      "It does not compile for three reasons."
    ]
  },
  {
    title:
      "Fill in the blanks:  ____________methods must have a different list of parameters, while  ____________methods must have the exact same return type.",
    code: null,
    answers: [
      "Overloaded, overridden",
      "Inherited, overridden",
      "Overridden, overloaded",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following statements about no-argument constructors is correct?",
    code: null,
    answers: [
      "If a parent class does not include a no-argument constructor, a child class cannot declare one.",
      "If a parent class does not include a no-argument constructor (nor a default one inserted by the compiler), a child class must contain at least one constructor definition.",
      "If a parent class contains a no-argument constructor, a child class must contain a  no-argument constructor.",
      "If a parent class contains a no-argument constructor, a child class must contain at least one constructor."
    ]
  },
  {
    title:
      "Fill in the blanks: The  ____________determines which attributes exist in  memory, while the  ____________determines which attributes are accessible by the caller.",
    code: null,
    answers: [
      "reference type, signature",
      "object type, superclass",
      "reference type, object type",
      "object type, reference type"
    ]
  },
  {
    title:
      "Given that Integer and Long are subclasses of Number, what type can be used to fill in the blank in the class below to allow it to compile?",
    code:
      "<code>package orchestra;</code>\n<code>interface MusicCreator { public Number play(); }</code>\n<code>abstract class StringInstrument { public Long play() {return 3L;} }</code>\n<code>public class Violin extends StringInstrument implements MusicCreator {</code>\n<code>   public _____________ play() {</code>\n<code>      return 12;</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["Long", "Integer", "Long or Integer", "Long or Number"]
  },
  {
    title:
      "Which of the following is the best reason for creating a default interface method?",
    code: null,
    answers: [
      "Allow interface methods to be inherited.",
      "Add backward compatibility to existing interfaces.",
      "Give an interface the ability to create concrete methods.",
      "Allow an interface to define a method at the class level."
    ]
  },
  {
    title:
      "Given that EOFException is a subclass of IOException, what is the output of the following application?",
    code:
      "<code>package ai;</code>\n<code>import java.io.*;</code>\n<code>class Machine {</code>\n<code>   public boolean turnOn() throws EOFException {return true;}</code>\n<code>}</code>\n<code>public class Robot extends Machine {</code>\n<code>   public boolean turnOn() throws IOException {return false;}</code>\n<code>   public static void main(String[] doesNotCompute) throws Exception {</code>\n<code>      Machine m = new Robot();</code>\n<code>      System.out.print(m.turnOn());</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "true",
      "false",
      "The code does not compile.",
      "The code compiles but produces an exception at runtime."
    ]
  }
];

const a7 = [
  "C. The code does not compile, so Option A is incorrect. This code does not compile for two reasons. First, the name variable is marked private in the Cinema class, which means it cannot be accessed directly in the Movie class. Next, the Movie class defines a constructor that is missing an explicit super() statement. Since Cinema does not include a no-argument constructor, the no-argument super() cannot be inserted automatically by the compiler without a compilation error. For these two reasons, the code does not compile, and Option C is the correct answer.",
  "D. All abstract interface methods are implicitly public, making Option D the correct answer. Option A is incorrect because protected conflicts with the implicit public modifier. Since static methods must have a body and abstract methods cannot have a body, Option B is incorrect. Finally, Option C is incorrect. A method, whether it be in an interface or a class, cannot be declared both final and abstract, as doing so would prevent it from ever being implemented.",
  "C. A class cannot contain two methods with the same method signature, even if one is static and the other is not. Therefore, the code does not compile because the two declarations of playMusic() conflict with one another, making Option C the correct answer.",
  "A. Inheritance is often about improving code reusability, by allowing subclasses to inherit commonly used attributes and methods from parent classes, making Option A the correct answer. Option B is incorrect. Inheritance can lead to either simpler or more complex code, depending on how well it is structured. Option C is also incorrect. While all objects inherit methods from java.lang.Object, this does not apply to primitives. Finally, Option D is incorrect because methods that reference themselves are not a facet of inheritance.",
  "A. Recall that this refers to an instance of the current class. Therefore, any superclass of Canine can be used as a return type of the method, including Canine itself, making Option C an incorrect answer. Option B is also incorrect because Canine implements the Pet interface. An instance of a class can be assigned to any interface reference that it inherits. Option D is incorrect because Object is the superclass of instances in Java. Finally, Option A is the correct answer. Canine cannot be returned as an instance of Class because it does not inherit Class.",
  "B. The key here is understanding which of these features of Java allow one developer to build their application around another developer’s code, even if that code is not ready yet. For this problem, an interface is the best choice. If the two teams agree on a common interface, one developer can write code that uses the interface, while another developer writes code that implements the interface. Assuming neither team changes the interface, the code can be easily integrated once both teams are done. For these reasons, Option B is the correct answer.",
  "B. The drive() method in the Car class does not override the version in the Automobile class since the method is not visible to the Car class. Therefore, the final attribute in the Automobile class does not prevent the Car class from implementing a method with the same signature. The drive() method in the ElectricCar class is a valid override of the method in the Car class, with the access modifier expanding in the subclass. For these reasons, the code compiles, and Option D is incorrect. In the main() method, the object created is an ElectricCar, even if it is assigned to a Car reference. Due to polymorphism, the method from the ElectricCar will be invoked, making Option B the correct answer.",
  "D. While Java does not allow a class to extend more than one class, it does allow a class to implement any number of interfaces. Multiple inheritance is, therefore, only allowed via interfaces, making Option D the correct answer.",
  "C. There are three problems with this method override. First, the watch() method is marked final in the Television class. The final modifier would have to be removed from the method definition in the Television class in order for the method to compile in the LCD class. Second, the return types void and Object are not covariant. One of them would have to be changed for the override to be compatible. Finally, the access modifier in the child class must be the same or broader than in the parent class. Since package-private is narrower than protected, the code will not compile. For these reasons, Option C is the correct answer.",
  "C. First off, the return types of an overridden method must be covariant. Next, it is true that the access modifier must be the same or broader in the child method. Using a narrower access modifier in the child class would not allow the code to compile. Overridden methods must not throw any new or broader checked exceptions than the method in the superclass. For these reasons, Options A, B, and D are true statements. Option C is the false statement. An overridden method is not required to throw a checked exception defined in the parent class.",
  "C. The process() method is declared final in the Computer class. The Laptop class then attempts to override this method, resulting in a compilation error, making Option C the correct answer.",
  "A. The code compiles without issue, so Option D is incorrect. The rule for overriding a method with exceptions is that the subclass cannot throw any new or broader checked exceptions. Since FileNotFoundException is a subclass of IOException, it is considered a narrower exception, and therefore the overridden method is allowed. Due to polymorphism, the overridden version of the method in HighSchool is used, regardless of the reference type, and 2 is printed, making Option A the correct answer. Note that the version of the method that takes the varargs is not used in this application.",
  "B. Interface methods are implicitly public, making Option A and C incorrect. Interface methods can also not be declared final, whether they are static, default, or abstract methods, making Option D incorrect. Option B is the correct answer because an interface method can be declared static.",
  "C. Having one class implement two interfaces that both define the same default method signature leads to a compiler error, unless the class overrides the default method. In this case, the Sprint class does override the walk() method correctly, therefore the code compiles without issue, and Option C is correct.",
  "B. Interfaces can extend other interfaces, making Option A incorrect. On the other hand, an interface cannot implement another interface, making Option B the correct answer. A class can implement any number of interfaces, making Option C incorrect. Finally, a class can extend another class, making Option D incorrect.",
  "D. The code does not compile because super.height is not visible in the Rocket class, making Option D the correct answer. Even though the Rocket class defines a height value, the super keyword looks for an inherited version. Since there are none, the code does not compile. Note that super.getWeight() returns 3 from the variable in the parent class, as polymorphism and overriding does not apply to instance variables.",
  "D. An abstract class can contain both abstract and concrete methods, while an interface can only contain abstract methods. With Java 8, interfaces can now have static and default methods, but the question specifically excludes them, making Option D the correct answer. Note that concrete classes cannot contain any abstract methods.",
  "C. The code does not compile, so Option D is incorrect. The IsoscelesRightTriangle class is abstract; therefore, it cannot be instantiated on line g3. Only concrete classes can be instantiated, so the code does not compile, and Option C is the correct answer. The rest of the lines of code compile without issue. A concrete class can extend an abstract class, and an abstract class can extend a concrete class. Also, note that the override of getDescription() has a widening access modifier, which is fine per the rules of overriding methods.",
  "D. The play() method is overridden in Saxophone for both Horn and Woodwind, so the return type must be covariant with both. Unfortunately, the inherited methods must also be compatible with each other. Since Integer is not a subclass of Short, and vice versa, there is no subclass that can be used to fill in the blank that would allow the code to compile. In other words, the Saxophone class cannot compile regardless of its implementation of play(), making Option D the correct answer.",
  "C. A class can implement an interface, not extend it. Alternatively, a class extends an abstract class. Therefore, Option C is the correct answer.",
  "A. The code compiles and runs without issue, making Options C and D incorrect. Although super.material and this.material are poor choices in accessing static variables, they are permitted. Since super is used to access the variable in getMaterial(), the value papyrus is returned, making Option A the correct answer. Also, note that the constructor Book(String) is not used in the Encyclopedia class.",
  "B. Options A and C are both true statements. Either the unknownBunny reference variable is the same as the object type or it can be explicitly cast to the Bunny object type, therefore giving it access to all its members. This is the key distinction between reference types and object types. Assigning a new reference does not change the underlying object. Option D is also a true statement since any superclass that Bunny extends or interface it implements could be used as the data type for unknownBunny. Option B is the false statement and the correct answer. An object can be assigned to a reference variable type that it inherits, such as Object unknownBunny = new Bunny().",
  "D. An abstract method cannot include the final or private method. If a class contained either of these modifiers, then no concrete subclass would ever be able to override them with an implementation. For these reasons, Options A and B are incorrect. Option C is also incorrect because the default keyword applies to concrete interface methods, not abstract methods. Finally, Option D is correct. The protected, package-private, and public access modifiers can each be applied to abstract methods.",
  "D. The declaration of Sphere compiles without issue, so Option C is incorrect. The Mars class declaration is invalid because Mars cannot extend Sphere, an interface, nor can Mars implement Planet, a class. In other words, they are reversed. Since the code does not compile, Option D is the correct answer. Note that if Sphere and Planet were swapped in the Mars class definition, the code would compile and the output would be Mars, making Option A the correct answer.",
  "B. A reference to a class can be implicitly assigned to a superclass reference without an explicit class, making Option B the correct answer. Assigning a reference to a subclass, though, requires an explicit cast, making Option A incorrect. Option C is also incorrect because an interface does not inherit from a class. A reference to an interface requires an explicit cast to be assigned to a reference of any class, even one that implements the interface. An interface reference requires an explicit cast to be assigned to a class reference. Finally, Option D is incorrect. An explicit cast is not required to assign a reference to a class that implements an interface to a reference of the interface.",
  "B. Interface variables are implicitly public, static, and final. Variables cannot be declared as abstract in interfaces, nor in classes.",
  "C. The class is loaded first, with the static initialization block called and 1 is outputted first. When the BlueCar is created in the main() method, the superclass initialization happens first. The instance initialization blocks are executed before the constructor, so 32 is outputted next. Finally, the class is loaded with the instance initialization blocks again being called before the constructor, outputting 45. The result is that 13245 is printed, making Option C the correct answer.",
  "C. Overloaded methods share the same name but a different list of parameters and an optionally different return type, while overridden methods share the exact same name, list of parameters, and return type. For both of these, the one commonality is that they share the same method name, making Option C the correct answer.",
  "A. Although the casting is a bit much, the object in question is a SoccerBall. Since SoccerBall extends Ball and implements Equipment, it can be explicitly cast to any of those types, so no compilation error occurs. At runtime, the object is passed around and, due to polymorphism, can be read using any of those references since the underlying object is a SoccerBall. In other words, casting it to a different reference variable does not modify the object or cause it to lose its underlying SoccerBall information. Therefore, the code compiles without issue, and Option A is correct.",
  "C. Both of these descriptions refer to variable and static method hiding, respectively, making Option C correct. Only instance methods can be overridden, making Options A and B incorrect. Option D is also incorrect because replacing is not a real term in this context.",
  "B. The code does not compile, so Option D is incorrect. The issue here is that the override of getEqualSides() in Square is invalid. A static method cannot override a non-static method and vice versa. For this reason, Option B is the correct answer.",
  "C. The application does not compile, but not for any reason having to do with the cast in the main() method. The Rotorcraft class includes an abstract method, but the class itself is not marked abstract. Only interfaces and abstract classes can include abstract methods. Since the code does not compile, Option C is the correct answer. ",
  "B. A class can trivially be assigned to a superclass reference variable but requires an explicit cast to be assigned to a subclass reference variable. For these reasons, Option B is correct. ",
  "C. A concrete class is the first non-abstract subclass that extends an abstract class and implements any inherited interfaces. It is required to implement all inherited abstract methods, making Option C the correct answer.",
  "D. First of all, interfaces can only contain abstract, final, and default methods. The method fly() defined in CanFly is not marked static or default and defines an implementation, an empty {}, meaning it cannot be assumed to be abstract; therefore, the code does not compile. Next, the implementation of fly(int speed) in the Bird class also does not compile, but not because of the signature. The method body fails to return an int value. Since it is an overloaded method, if it returned a value it would compile without issue. Finally, the Eagle class does not compile because it extends the Bird class, which is marked final and therefore, cannot be extended. For these three reasons, Option D is the correct answer.",
  "B. Abstract classes and interfaces can both contain static and abstract methods as well as static variables, but only an interface can contain default methods. Therefore, Option B is correct.",
  "C. Java does not allow multiple inheritance, so having one class extend two interfaces that both define the same default method signature leads to a compiler error, unless the class overrides the method. In this case, though, the talk(String...) method defined in the Performance class is not an overridden version of method defined in the interfaces because the signatures do not match. Therefore, the Performance class does not compile since the class inherits two default methods with the same signature and no overridden version, making Option C the correct answer.",
  "A. In Java, only non-static, non-final, and non-private methods are considered virtual and capable of being overridden in a subclass. For this reason, Option A is the correct answer.",
  "B. An interface can only extend another interface, while a class can only extend another class. A class can also implement an interface, although that comparison is not part of the question text. Therefore, Option B is the correct answer.",
  "A. The code compiles without issue, so Option D is incorrect. Java allows methods to be overridden, but not variables. Therefore, marking them final does not prevent them from being reimplemented in a subclass. Furthermore, polymorphism does not apply in the same way it would to methods as it does to variables. In particular, the reference type determines the version of the secret variable that is selected, making the output 2 and Option A the correct answer.",
  "D. Options A and C are incorrect because an overridden method cannot reduce the visibility of the inherited method. Option B is incorrect because an overridden method cannot declare a broader checked exception than the inherited method. Finally, Option D is the correct answer. The removal of the checked exception, the application of a broader access modifier, and the addition of the final attribute are allowed for overridden methods.",
  "C. The setAnimal() method requires an object that is Dog or a subclass of Dog. Since Husky extends Dog, Options A and B both allow the code to compile. Option D is also valid because a null value does not have a type and can be assigned to any reference variable. Option C is the only value that prevents the code from compiling because Wolf is not a subclass of Dog. Even though Wolf can be assigned to the instance Canine variable, the setter requires a compatible parameter.",
  "A. An interface method can be abstract and not have a body, or it can be default or static and have a body. An interface method cannot be final though, making Option A the correct answer.",
  "A. It looks like getSpace() in the Room class is an invalid override of the version in the House class since package-private is a more restrictive access modifier than protected, but the parameter list changes; therefore, this is an overloaded method, not an overridden one. Furthermore, the Ballroom class is abstract so no object is instantiated, but there is no requirement that an abstract class cannot contain a runnable main() method. For these reasons, the code compiles and runs without issue, making Option A correct.",
  "D. Trick question! Option A seems like the correct answer, but the second part of the sentence is false, regardless of whether you insert overloaded or overridden. Overridden methods must have covariant return types, which may not be exactly the same as the type in the parent class. Therefore, Option D is the correct answer.",
  "B. If a parent class does not include a no-argument constructor, a child class can still explicitly declare one; it just has to call an appropriate parent constructor with super(), making Option A incorrect. If a parent class does not include a no-argument constructor, the child class must explicitly declare a constructor, since the compiler will not be able to insert the default no-argument constructor, making Option B correct. Option C is incorrect because a parent class can have a no-argument constructor, while its subclasses do not. If Option C was true, then all classes would be required to have no-argument constructors since they all extend java.lang.Object, which has a no-argument constructor. Option D is also incorrect. The default no-argument constructor can be inserted into any class that directly extends a class that has a no-argument constructor. Therefore, no constructors in the subclass are required.",
  "D. The object type relates to the attributes of the object that exist in memory, while the reference type dictates how the object is able to be used by the caller. For these reasons, Option D is correct.",
  "A. The play() method is overridden in Violin for both MusicCreator and StringInstrument, so the return type must be covariant with both. Long is a subclass of Number, and therefore, it is covariant with the version in MusicCreator. Since it matches the type in StringInstrument, it can be inserted into the blank and the code would compile. While Integer is a subclass of Number, meaning the override for MusicCreator is valid, it is not a subclass of Long used in StringInstrument. Therefore, using Integer would cause the code to not compile. Finally, Number is compatible with the version of the method in MusicCreator but not with the version in StringInstrument, because Number is a superclass of Long, not a subclass. For these reasons, Long is the only class that allows the code to compile, making Option A the correct answer.",
  "B. The primary motivation for adding default interface methods to Java was for backward compatibility. These methods allow developers to update older classes with a newer version of an interface without breaking functionality in the existing classes, making Option B the correct answer. Option is A is nonsensical and not the correct answer. Options C and D sound plausible, but both could be accomplished with static interface methods alone.",
  "C. The rule for overriding a method with exceptions is that the subclass cannot throw any new or broader checked exceptions. Since IOException is a superclass of EOFException, from the question description, we see that this is a broader exception and therefore not compatible. For this reason, the code does not compile, and Option C is the correct answer."
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
    answerArray: mapAnswers(qz["answers"], a7[index]),
    explain: a7[index]
  };
});
// window.quizs = quizs
quizs[21].imageUrl = "./images/image-oca-ch7-22.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
