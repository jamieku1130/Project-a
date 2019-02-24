const qzString = [
  {
    title:
      "Which of the following method signatures is a valid declaration of an entry point in a Java application?",
    code: null,
    answers: [
      "public void main(String[] args)",
      "public static void main()",
      "private static void start(String[] mydata)",
      "public static final void main(String[] mydata)"
    ]
  },
  {
    title:
      "The following class diagram demonstrates the relationship between Gold and Silver, which extend the Metal class. Assume the attributes are all declared public. Which statement about the diagram is not true?",
    code: null,
    answers: [
      "The diagram demonstrates platform independence in Java.",
      "The diagram demonstrates object-oriented design in Java.",
      "The Gold and Silver classes inherit weight and color attributes from the Metal class.",
      "Gold does not inherit the luster attribute."
    ]
  },
  {
    title:
      "What is the proper filename extension for a Java bytecode compiled file?",
    code: null,
    answers: [".java", ".bytecode", ".class", ".dll"]
  },
  {
    title:
      "Given that a Date class exists in both the java.util and java.sql packages, what is the result of compiling the following class?",
    code:
      "<code>1: import java.util.*;</code>\n<code>2: import java.sql.*;</code>\n<code>3: public class BirthdayManager {</code>\n<code>4:    private Date rob = new Date();</code>\n<code>5:    private java.util.Date sharon = new java.util.Date();</code>\n<code>6: }</code>",
    answers: [
      "The code does not compile because of lines 1 and 2.",
      "The code does not compile because of line 4.",
      "The code does not compile because of line 5.",
      "The code compiles without issue."
    ]
  },
  {
    title:
      "Which of the following is not a facet of traditional object-oriented programming languages?",
    code: null,
    answers: [
      "Objects are grouped as procedures, separate from the data they act on.",
      "An object can take many forms via casting.",
      "An object can hold data, referred to as attributes.",
      "An object can perform actions, via methods."
    ]
  },
  {
    title: "Which variables have a scope limited to a method?",
    code: null,
    answers: [
      "Interface variables",
      "Class variables",
      "Instance variables",
      "Local variables"
    ]
  },
  {
    title: "Which package is imported into every Java class by default?",
    code: null,
    answers: ["java.util", "java.lang", "system.lang", "java.system"]
  },
  {
    title: "Which of the following is not a valid code comment in Java?",
    code: null,
    answers: [
      "// Add 5 to the result",
      "/*** TODO: Fix bug 12312 ***/",
      "# Add configuration value",
      "/* Read file from system ****/"
    ]
  },
  {
    title: "Which statement about a valid .java file is true?",
    code: null,
    answers: [
      "It can only contain one class declaration.",
      "It can contain one public class declaration and one public interface definition.",
      "It must define at least one public class.",
      "It may define at most one public class."
    ]
  },
  {
    title:
      "Given the following application, fill in the missing values in the table starting from the top and going downward.",
    code:
      '<code>package competition;</code>\n<code>public class Robot {</code>\n<code>   static String weight = "A lot";</code>\n<code>   /* default */ double ageMonths = 5, ageDays = 2;</code>\n<code><span epub:type="pagebreak" id="Page_6"></span>   private static boolean success = true;</code>\n<code>   public void main(String[] args) {</code>\n<code>      final String retries = "1";</code>\n<code>      // P1</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["2, 0, 1", "2, 2, 1", "1, 0, 1", "0, 2, 1"]
  },
  {
    title: "Which statement about import statements is true?",
    code: null,
    answers: [
      "The class will not compile if it contains unused import statements.",
      "Unused import statements can be removed from the class without causing a class to become unable to be compiled.",
      "The class will not compile if a duplicate import statement is present.",
      "If a class contains an import statement for a class used in the program that cannot be found, it can still compile."
    ]
  },
  {
    title: "What is the result of compiling and executing the following class?",
    code:
      "<code>1: public class ParkRanger {</code>\n<code>2:    int birds = 10;</code>\n<code>3:    public static void main(String[] data) {</code>\n<code>4:       int trees = 5;</code>\n<code>5:       System.out.print(trees+birds);</code>\n<code>6:    }</code>\n<code>7: }</code>",
    answers: [
      "It does not compile.",
      "It compiles but throws an exception at runtime.",
      "It compiles and outputs 5.",
      "It compiles and outputs 15."
    ]
  },
  {
    title:
      "Which statements about Java are true? \n1.The java command can execute .java and .class files.\n 2.Java is not object oriented.\n 3.The javac command compiles directly into native machine code.\n",
    code: null,
    answers: ["I only", "III only", "II and III", "None are true."]
  },
  {
    title:
      "Which of the following lines of code is not allowed as the first line of a Java class file?",
    code: null,
    answers: [
      "import widget.*;",
      "// Widget Manager",
      "package sprockets;",
      "int facilityNumber;"
    ]
  },
  {
    title:
      "Which one of the following statements is true about using packages to organize your code in Java?",
    code: null,
    answers: [
      "Every class is required to include a package declaration.",
      "To create a new package, you need to add a package.init file to the directory.",
      "Packages allow you to limit access to classes, methods, or data from classes outside the package.",
      "It is not possible to restrict access to objects and methods within a package."
    ]
  },
  {
    title:
      "Given that the current directory is /user/home, with an application Java file in  /user/home/Manager.java that uses the default package, which are the correct commands to compile and run the application in Java?",
    code: null,
    answers: [
      "javac Manager     java Manager",
      "javac Manager.java     java Manager",
      "javac Manager     java Manager.class",
      "javac Manager.java     java Manager.class"
    ]
  },
  {
    title:
      "Structuring a Java class such that only methods within the class can access its instance  variables is referred to as _______.",
    code: null,
    answers: [
      "platform independence",
      "object orientation",
      "inheritance",
      "encapsulation"
    ]
  },
  {
    title: "What is the output of the following code snippet?",
    code:
      '<code>String tree = "pine";</code>\n<code>int count = 0;</code>\n<code>if (tree.equals("pine")) {</code>\n<code>   int height = 55;</code>\n<code>   count = count + 1;</code>\n<code>}</code>\n<code>System.out.print(height + count);</code>',
    answers: ["1", "55", "56", "It does not compile."]
  },
  {
    title: "Which of the following is true of a Java bytecode file?",
    code: null,
    answers: [
      "It can be run on any computer with a compatible JVM.",
      "It can only be executed on the same type of computer that it was created on.",
      "It can be easily read and modified in a standard text editor.",
      "It requires the corresponding .java that created it to execute."
    ]
  },
  {
    title: "What is the correct character for terminating a statement in Java?",
    code: null,
    answers: [
      "A colon (:)",
      "An end-of-line character",
      "A tab character",
      "A semicolon (;)"
    ]
  },
  {
    title: "What is the result of compiling and executing the following class?",
    code:
      "<code>1: public class Tolls {</code>\n<code>2:    private static int yesterday = 1;</code>\n<code>3:    int tomorrow = 10;</code>\n<code>4:    public static void main(String[] args) {</code>\n<code>5:       Tolls tolls = new Tolls();</code>\n<code>6:       int today=20, tomorrow = 40;</code>\n<code>7:       System.out.print(today + tolls.tomorrow + tolls.yesterday);</code>\n<code>8:    }</code>\n<code>9: }</code>",
    answers: [
      "The code does not compile due to line 6.",
      "The code does not compile due to line 7.",
      "31",
      "61"
    ]
  },
  {
    title:
      "Given the following class definition, which is the only line that does not contain a  compilation error?",
    code:
      "<code>1: public ThisClassDoesNotCompile {</code>\n<code>2:    double int count;</code>\n<code>3:    void errors() {}</code>\n<code>4:    static void private limit; }</code>",
    answers: ["Line 1", "Line 2", "Line 3", "Line 4"]
  },
  {
    title:
      "Which of the following features allows a Java class to be run on a wide variety of computers and devices?",
    code: null,
    answers: [
      "Encapsulation",
      "Object oriented",
      "Inheritance",
      "Platform independence"
    ]
  },
  {
    title: "Which of the following is not a property of a JVM?",
    code: null,
    answers: [
      "It prevents Java bytecode from being easily decoded/decompiled.",
      "It supports platform independence.",
      "It manages memory for the application.",
      "It translates Java instructions to machine instructions."
    ]
  },
  {
    title:
      "Which of the following variables are always in scope for the entire program?",
    code: null,
    answers: [
      "Package variables",
      "Class variables",
      "Instance variables",
      "Local variables"
    ]
  },
  {
    title:
      "Given the following wildcard import statements, which class would be included in the import?",
    code:
      "<code>import television.actor.*;</code>\n<code>import movie.director.*;</code>",
    answers: [
      "television.actor.recurring.Marie",
      "movie.directors.John",
      "television.actor.Package",
      "movie.NewRelease"
    ]
  },
  {
    title: "Which is the correct order of statements for a Java class file?",
    code: null,
    answers: [
      "import statements, package statement, class declaration",
      "package statement, class declaration, import statement",
      "class declaration, import statements, package declaration",
      "package statement, import statements, class declaration"
    ]
  },
  {
    title:
      "Given the following class definition, what is the maximum number of import statements that can be discarded and still have the code compile? For this question, assume that the Blackhole class is defined only in the stars package.",
    code:
      "<code>package planetarium;</code>\n<code>import java.lang.*;</code>\n<code>import stars.*;</code>\n<code>import java.lang.Object;</code>\n<code>import stars.Blackhole;</code>\n<code>&nbsp;</code>\n<code>public class Observer {</code>\n<code>   public void find(Blackhole blackhole) {}</code>\n<code>}</code>",
    answers: ["Zero", "One", "Two", "Three"]
  },
  {
    title:
      "Given the following class definition, which command will cause the application to output the message White-tailed?",
    code:
      "<code>package forest;</code>\n<code>public class Deer {</code>\n<code>   public static void main(String... deerParams) {</code>\n<code>      System.out.print(theInput[2]);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      'java forest.Deer deer 5 "White-tailed deer"',
      'java forest.Deer "White-tailed deer" deer 3',
      "java forest.Deer Red deer White-tailed deer",
      'java forest.Deer My "deer White-tailed"'
    ]
  },
  {
    title: "Which of the following is a true statement?",
    code: null,
    answers: [
      "The java command compiles a .java file into a .class file.",
      "The javac command compiles a .java file into a .class file.",
      "The java command compiles a .class file into a .java file.",
      "The javac command compiles a .class file into a .java file."
    ]
  },
  {
    title: "Which of the following statements about Java is true?",
    code: null,
    answers: [
      "Java is a procedural programming language.",
      "Java allows method overloading.",
      "Java allows operator overloading.",
      "Java allows direct access to objects in memory."
    ]
  },
  {
    title:
      "Given the following code, what values inserted in order into the blank lines, allow the code to compile?",
    code:
      "<code> _______agent;</code>\n<code>public  _______Banker {</code>\n<code>   private static  _______getMaxWithdrawal() {</code>\n<code>      return 10;</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "import, class, null",
      "import, interface, void",
      "package, int, int",
      "package, class, long"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>public class Airplane {</code>\n<code>   static int start = 2;</code>\n<code>   final int end;</code>\n<code>   public Airplane(int x) {</code>\n<code>      x = 4;</code>\n<code>      end = x;</code>\n<code>   }</code>\n<code>   public void fly(int distance) {</code>\n<code>      System.out.print(end-start+" ");</code>\n<code>      System.out.print(distance);</code>\n<code>   }</code>\n<code>   public static void main(String... start) {</code>\n<code>      new Airplane(10).fly(5);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["2 5", "8 5", "6 5", "The code does not compile."]
  },
  {
    title:
      "What is one of the most important reasons that Java supports extending classes via inheritance?",
    code: null,
    answers: [
      "Inheritance requires that a class that extends another class be in the same package.",
      "The program must spend extra time/resources at runtime jumping through multiple layers of inheritance to determine precise methods and variables.",
      "Method signature changes in parent classes may break subclasses that use overloaded methods.",
      "Developers minimize duplicate code in new classes by sharing code in a common parent class."
    ]
  },
  {
    title: "Which of the following is a valid code comment in Java?",
    code: null,
    answers: [
      "//////// Walk my dog",
      "#! Go team!",
      "/ Process fails at runtime /",
      "None of the above"
    ]
  },
  {
    title:
      "Which of the following method signatures is not a valid declaration of an entry point in a Java application?",
    code: null,
    answers: [
      "public static void main(String... arguments)",
      "public static void main(String arguments)",
      "public static final void main(String[] arguments)",
      "public static void main(String[] arguments)"
    ]
  },
  {
    title:
      "Given the file Magnet.java below, which of the marked lines can you independently insert the line public String color; into and still have the code compile?",
    code:
      "<code>// line a1</code>\n<code>public class Magnet {</code>\n<code>   // line a2</code>\n<code>   public void attach() {</code>\n<code>      // line a3</code>\n<code>   }</code>\n<code>   // line a4</code>\n<code>}</code>",
    answers: ["a1 and a3", "a2 and a4", "a2, a3, and a4", "a1, a2, a3, and a4"]
  },
  {
    title: "What is required to define a valid Java class file?",
    code: null,
    answers: [
      "A class declaration",
      "A package statement",
      "At least one import statement",
      "The public modifier"
    ]
  },
  {
    title: "What is the proper filename extension for a Java source file?",
    code: null,
    answers: [".jav", ".class", ".source", ".java"]
  },
  {
    title:
      "Given that a Math class exists in both the java.lang and pocket.complex packages, what is the result of compiling the following class?",
    code:
      "<code>1: package pocket;</code>\n<code>2: import pocket.complex.*;</code>\n<code>3: import java.util.*;</code>\n<code>4: public class Calculator {</code>\n<code>5:   public static void main(String[] args) {</code>\n<code>6:      System.out.print(Math.floor(5));</code>\n<code>7:   }</code>\n<code>8: }</code>",
    answers: [
      "The code does not compile because of line 2.",
      "The code does not compile because of line 3.",
      "The code does not compile because of line 6.",
      "The code compiles without issue."
    ]
  },
  {
    title:
      "Given a class that uses the following import statements, which class would not be automatically accessible within the class without using its full package name?",
    code: "<code>import dog.*;</code>\n<code>import dog.puppy.*;</code>",
    answers: [
      "dog.puppy.female.KC",
      "dog.puppy.Georgette",
      "dog.Webby",
      "java.lang.Object"
    ]
  },
  {
    title:
      " _______is the technique of structuring programming data as a unit consisting of attributes, with actions defined on the unit.",
    code: null,
    answers: [
      "Encapsulation",
      "Object orientation",
      "Platform independence",
      "Polymorphism"
    ]
  },
  {
    title:
      "Given the following class definition, what is the maximum number of import statements that can be discarded and still have the code compile? For this question, assume that the Broccoli class is in the food.vegetables package, and the Apple class is the food.fruit package.",
    code:
      "<code>package food;</code>\n<code>import food.vegetables.*;</code>\n<code>import food.fruit.*;</code>\n<code>import java.util.Date;</code>\n<code>&nbsp;</code>\n<code>public class Grocery {</code>\n<code>   Apple a; Broccoli b;  Date c;</code>\n<code>}</code>",
    answers: ["0", "1", "2", "3"]
  },
  {
    title: "Given the following application, what is the expected output?",
    code:
      '<code>public class Keyboard {</code>\n<code>   private boolean numLock = true;</code>\n<code>   static boolean capLock = false;</code>\n<code>   public static void main(String... shortcuts) {</code>\n<code>      System.out.print(numLock+" "+capLock);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "true false",
      "false false",
      "It does not compile.",
      "It compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of compiling and executing the following class?",
    code:
      "<code>public class RollerSkates {</code>\n<code>   static int wheels = 1;</code>\n<code>   int tracks = 5;</code>\n<code>   public static void main(String[] arguments) {</code>\n<code>      RollerSkates s = new RollerSkates();</code>\n<code>      int feet=4, tracks = 15;</code>\n<code>      System.out.print(feet + tracks + s.wheels);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["The code does not compile.", "5", "10", "20"]
  },
  {
    title: "What is the result of compiling and executing the following class?",
    code:
      '<code>package sports;</code>\n<code>public class Bicycle {</code>\n<code>   String color = "red";</code>\n<code>   private void printColor(String color) {</code>\n<code>      color = "purple";</code>\n<code>      System.out.print(color);</code>\n<code>   }</code>\n<code>   public static void main(String[] rider) {</code>\n<code>      new Bicycle().printColor("blue");</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["red", "purple", "blue", "It does not compile."]
  },
  {
    title:
      "Which statements about calling the compilation command javac and the execution command java are true?\n1:java may use a period . to separate packages.\n2: javac takes a .java file and returns a .class file.\n3: java may use a slash (/) to separate packages.\n",
    code: null,
    answers: ["I only", "II only", "I and II", "I, II, and III"]
  },
  {
    title:
      "What is the result of compiling and executing the following application?",
    code:
      "<code>package forecast;</code>\n<code>public class Weather {</code>\n<code>   private static boolean heatWave = true;</code>\n<code>   public static void main() {</code>\n<code>      boolean heatWave = false;</code>\n<code>      System.out.print(heatWave);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "true",
      "false",
      "It does not compile.",
      "It compiles but throws an error at runtime."
    ]
  },
  {
    title:
      "Given the following class diagram, which Java implementation most closely matches this structure?",
    code: null,
    answers: [
      "public class Book {    public int numOfPages;",
      "public class Book {    public String getRating() {return null;} }",
      "public class Book {    public int numberOfPages;    public String getRating() {return null;} }",
      "public class Book {    void numberOfPages; }"
    ]
  },
  {
    title: "Which statement about the JVM is true?",
    code: null,
    answers: [
      "The JVM schedules garbage collection on a predictable schedule.",
      "The JVM ensures that the application will always terminate.",
      "The JVM requires a properly defined entry point method to execute the application.",
      "A Java compiled code can be run on any computer."
    ]
  }
];

const a1 = [
  "D. An entry point in a Java application consists of a main() method with a single String[] argument, return type of void, and modifiers public and static. The name of the variable in the input argument does not matter. Option A is missing the static modifier, Option B is missing the String[] argument, and Option C has the wrong access modifier and method name. Only Option D fulfills these requirements. Note that the modifier final is optional and may be added to an entry point method.",
  "A. The diagram is an example of object-oriented design in Java, making Option B a true statement. Options C and D are also true, as they follow from the inheritance model in the diagram. Option A is the correct answer, since platform independence has nothing to do with the diagram.",
  "C. The proper extension for a Java compiled bytecode file is .class, making Option C the correct answer.",
  "B. The fact that the Date class exists in both packages does not impact the ability to import both packages, so lines 1 and 2 compile without issue, and Option A is incorrect. Line 4 will not compile because the Date class used is ambiguous, making Option B correct and Option D incorrect. Finally, Option C is incorrect because line 5 does compile, as the fully qualified name of the class is used.",
  "A. Options B, C, and D are each attributes of traditional object-oriented programming. Option A is incorrect as an object-oriented project tends to group data and the actions related to that data into a single object.",
  "D. Only local variables have such a small scope, making Option D the correct answer.",
  "B. The package java.lang is imported into every Java class, so Option B is correct. The other options must be explicitly imported. Option A exists but must be explicitly imported. Options C and D do not exist in the standard Java runtime.",
  "C. Java accepts Options A, B, and D as valid comments. Note that the /* */ syntax can have additional (and uneven) star (*) characters as shown in B and D. Option C is incorrect as hashtag (#) is not a valid comment character in Java.",
  "D. A valid .java file may define any number of classes or interfaces but have at most one public class. It can also not define any public classes. For these reasons, Option A, B, and C are incorrect, leaving Option D as the only correct answer.",
  "B. Notice in this question that main() is not a static method, therefore it can access both class and instance variables. Since there are two class variables and two instance variables defined, Option B is the correct answer.",
  "B. A class will compile if it has unused or redundant import statements, making Option A and C incorrect. Option D is also incorrect as the compiler must be able to locate the class of the import statement. The correct answer is Option B. Removing unused import statements does not cause a class to become unable to be compiled.",
  "A. The code does not compile because of line 5, making Option A the correct answer. For this question, it helps to understand variable scope. The main() method is static and does not have access to any class instance variables. The birds variable is not static and requires a class instance variable to access. Therefore, the code does not compile when the static method attempts to access a non-static variable without an instance of the class.",
  "D. The java command can only execute compiled .class files, so I is false. Java is most certainly object oriented, one of the key design principles, so II is also false. The javac command compiles into bytecode, which must be run in a Java virtual machine (JVM), and is not native machine code, so III is false as well. Since none of the statements are true, Option D is the correct answer.",
  "D. A class can start with a comment, an optional package statement, or an import statement if there is no package statement. It cannot start with a variable definition, making Option D the correct answer.",
  "C. Classes may be defined without a package declaration and are placed in the default package, so Option A is incorrect. Option B is a completely false statement as no such file is required in Java. Option C is correct as it is one of the primary reasons for organizing your application into packages. Option D is incorrect as package-private allows access to methods and variables to be limited to those classes within the same package.",
  "B. The compilation command requires the full or relative name of the file, including the .java extension, making Options A and C incorrect. The execution command requires the class name without a filename extension, making Option D incorrect. Option B is the only correct set of compilation and execution commands.",
  "D. Encapsulation is the technique of removing access to a class’s instance variables from processes outside the class, making Option D the correct answer.",
  "D. The height variable is declared within the if-then statement block. Therefore, it cannot be referenced outside the if-then statement and the code does not compile.",
  "A. A Java bytecode file is a binary encoded set of instructions designed to be run on any computer with a compatible JVM, making Option A the only correct answer. By compatible JVM, we mean one capable of running the class file. For example, a Java 6 JVM may have trouble executing a Java 8 compiled file. Option B is incorrect, and is more a facet of machine language compiled programming classes. Option C is also incorrect as binary data is not particularly human readable. Finally, Option D is incorrect as the compiled file can be distributed without its .java source file and execute without issue.",
  "D. Unlike with some other programming languages, the proper way to terminate a line of code is with a semicolon (;), making D the only correct answer.",
  "C. The code compiles and runs without issue, so Options A and B are incorrect. The question relies on your ability to understand variable scope. The variable today has local scope to the method in which it is executed. The variable tomorrow is re-declared in the method, but the reference used on line 7 is to the instance variable with a value of 10. Finally, the variable tomorrow is static. While using an instance reference to access a static variable is not recommended, it does not prevent the variable from being read. The result is line 7 evaluates and prints (20 + 10 + 1) = 31, making C the correct answer.",
  "C. Line 1 is missing the class keyword. Line 2 contains two types for the same variable. Line 3 is a valid definition for a method, making C the correct answer. Finally, line 4 contains an access modifier, private, after the return type, which is not allowed. In addition, void is an invalid type for variables.",
  "D. Platform independence is the property of Java that allows it to be run on a variety of different devices.",
  "A. Options B, C, and D are each correct statements about JVMs. Option A is incorrect. Not only is it not a statement about JVMs, it is actually false as Java bytecode can often be easily decoded/decompiled.",
  "B. There is no such thing as package variables, so Option A is incorrect. Option C is incorrect as the variable is only in scope within a specific instance of the class. Option D is also incorrect as the variable is only in scope for a single method that it is defined in. Option B is the only correct answer as class variables are in scope within the program.",
  "C. Option A is incorrect as the sub-package recurring is not included by the import statements. Option B is also incorrect as it uses the plural directors instead of the singular director used in the import statements. Option D is incorrect as the wildcard is applied to the sub-package movie.director, not the package movie. Finally, Option C is correct as it is a valid class accessible from the wildcard import.",
  "D. Java classes are defined in this order: package statement, import statements, class declaration, making Option D the only correct answer. Note that not all of these statements are required. For example, a class may not have a package statement, but if it does, it must come first in the file.",
  "D. The import statements for stars.* and stars.Blackhole are redundant import statements, since only the class Blackhole is used, and therefore one of them can be safely removed. The import statements java.lang.* and java.lang.Object are both not required as java.lang is automatically imported in every Java class. Therefore, three of the four import statements can be safely removed, making the correct answer Option D.",
  'C. The application prints the third argument of the input methods. Note that double quotes "" group input arguments. Therefore, the third argument of Option A is White-tailed deer. The third argument of Option B is 3. The third argument of Option C is White-tailed, making it the correct answer. Finally, Option D only has two input arguments, leading to an ArrayIndexOutOfBoundsException trying to read the third argument at runtime.',
  "B. The javac command compiles a .java file into a .class bytecode file, making Option B the correct answer.",
  "B. Java is object oriented, not procedural, so Option A is a false statement. Java allows method overloading in subclasses, so Option B is correct. Operator overloading is permitted in languages like C++, not Java, so Option C is also untrue. Finally, Option D is not a true statement as the JVM manages the location of objects in memory that can change and is transparent to the Java application.",
  "D. Option A is incorrect as the return type of the method cannot be null. Option B is also incorrect as the return type cannot be void if the method uses a return statement. Option C is incorrect too as the class keyword is replaced with int. Option D is correct because it’s the only answer that allows the code to compile without issue. Note that other values are possible for this question. For example, either int or long can be entered in the last blank. The key here is that only one of the available answer choices allows the code to compile.",
  "A. The code compiles so Option D is incorrect. The input to the constructor is ignored, making the assignment of end to be 4. Since start is 2, the subtraction of 4 by 2 results in the application printing 2, followed by 5, making Option A the correct answer.",
  "D. Option A is a false statement, while Options B and C are actually arguments against using inheritance. Option D is one of the most important reasons Java supports inheritance, to allow increased code reuse among classes.",
  "A. The double slash (//) syntax can have any number of slashes as a comment, so long as it starts with two of them, making Option A the correct answer. The (#) is not a comment character in Java, regardless of whether it is followed by a (!), so Option B is incorrect. Option C is incorrect as a single slash (/) is not a valid comment in Java. Finally, Option D is incorrect as Option A is a valid comment.",
  "B. An entry point in a Java application consists of a main() method with a single String[] argument, return type of void, and modifiers public and static. Option D is the typical syntax for this method, although Options A and C are also valid forms of this method. Note that the modifier final is optional and may be added to the method signature. Furthermore, the main() method may take a vararg or array. Option B is the only invalid declaration as it does not take an array as an argument.",
  "B. The line of code cannot be inserted at a1 because no variables are allowed outside of the class declaration in this file, making Options A and D incorrect. The line of code can also not be inserted at a3 as local variables defined within methods cannot have access modifiers such as public, making Option C incorrect. The code can be inserted independently at a2 and a4 as instance variables can be defined anywhere in the class outside a method. Therefore, Option B is the correct choice.",
  "A. Option A is the only correct answer as a class definition is the only required component in a Java class file. Note that we said a Java class file here; Java also allows interfaces and enums to be defined in a file. A package statement and import statements are optional for declaring a class, making Options B and C incorrect. A class may also be defined with package-level access in a file, making Option D an incorrect answer.",
  "D. The proper extension for a Java compiled bytecode file is .java, making Option D the correct answer.",
  "C. Remember that java.lang is automatically imported in all Java classes, therefore both java.lang.Math and pocket.complex.Math are both imported into this class. Importing both sets of packages does not cause any compilation issues, making Option A incorrect. Line 3 is unnecessary import but including it does not prevent the class from compiling, making Option B incorrect. While both versions of Math may be imported into the class, the usage of the Math class requires a package name. Because of this, line 6 does not compile as the class reference is ambiguous, making Option C the correct answer and Option D incorrect.",
  "A. Options B and C are accessible within the class as they are covered by the import statements. Option D is also fine as java.lang.Object is available without an explicit import. The only class not automatically accessible within the class without the full package name is dog.puppy.female.KC as the import statements do not include sub-packages; therefore, Option A is the correct answer.",
  "B. Object-oriented programming is the technique of structuring data into objects, which may contain data and a set of actions that operate on the data, making Option B the correct answer.",
  "A. All of the import statements in this class are required. Removing any of them would cause the class to not compile, making Option A the correct answer.",
  "C. The numLock variable is not accessible in the static main() method without an instance of the Keyboard class; therefore, the code does not compile, and Option C is the correct answer.",
  "D. The code compiles and runs without issue, so Option A is incorrect. The question involves understanding the value and scope of each variable at the print() statement. The variables feet and tracks are locally scoped and set to 4 and 15, respectively, ignoring the value of tracks of 5 in the instance of the class. Finally, the static variable s.wheels has a value of 1. The result is the combined value is 20, making Option D the correct answer.",
  "B. First off, the color variable defined in the instance and set to red is ignored in the method printColor() as local scope overrides instance scope, so Option A is incorrect. The value of color passed to the printColor() method is blue, but that is lost by the assignment to purple, making Option B the correct answer and Option C incorrect. Option D is incorrect as the code compiles and runs without issue.",
  "C. The javac command takes a text-based .java file and returns a binary bytecode .class file, making II a true statement. The java command uses a period (.) to separate packages, not a slash (/), making I a true statement and III a false statement. For these reasons, Option C is the correct answer.",
  "D. The application compiles without issue, so Option C is incorrect. The application does not execute though, as the main() method does not have the correct method signature. It is missing the required input argument, an array of String. Trying to execute the application without a proper entry point produces an error, making Option D the correct answer.",
  "C. Option A does not compile because it is missing the closing bracket for the class. Option D does also not compile as void is not a valid type for a variable. Regardless, Options A and D are incorrect as they are missing the getRating() method. Note that Option A also uses an abbreviation for numberOfPages. Option B is incorrect as it is missing the numberOfPages attribute. Option C is the correct answer as it properly defines the attribute numberOfPages and method getRating().",
  "C. Garbage collection can happen at any time while an application is running, especially if the available memory suddenly becomes low, making Option A incorrect. Option B is also incorrect, since it is trivial to create a Java application with an infinite loop that never terminates. Option D is incorrect because the computer must be able to run the JVM in order to execute a Java class. Option C is the only correct answer, as the JVM does require an entry point method to begin executing the application."
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
    answerArray: mapAnswers(qz["answers"], a1[index]),
    explain: a1[index]
  };
});
// window.quizs = quizs
quizs[1].imageUrl = "./images/image-oca-ch1-2.png";
quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
