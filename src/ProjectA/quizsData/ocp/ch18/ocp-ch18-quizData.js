const qzString = [
  {
    title:
      "Fill in the blanks: Writer is__________ that related stream classes__________ .",
    code: null,
    answers: [
      "a concrete class, extend",
      "an abstract class, extend",
      "an interface, extend",
      "an interface, implement"
    ]
  },
  {
    title: "Which of the following methods is defined in java.io.File?",
    code: null,
    answers: ["createDirectory()", "getLength()", "listFile()", "renameTo()"]
  },
  {
    title:
      "Which method in InputStream can be used in place of calling skip(1)?",
    code: null,
    answers: ["jump()", "mark()", "read()", "reset()"]
  },
  {
    title:
      "Which methods are classes that implement java.io.Serializable required to implement?",
    code: null,
    answers: ["deserialize()", "serial()", "serialize()", "None of the above"]
  },
  {
    title:
      "Fill in the blanks: Given a valid Console instance, reader() returns a__________ , while writer() returns a __________.",
    code: null,
    answers: [
      "PrintReader, PrintWriter",
      "PrintReader, Writer",
      "Reader, Writer",
      "StringReader, Writer"
    ]
  },
  {
    title:
      "Assuming the file path referenced in the following class is accessible and able to be written, what is the output of the following program?",
    code:
      '<code>package alarm;</code>\n<code>import java.io.*;</code>\n<code>public class Smoke {</code>\n<code>   public void sendAlert(File fn) {</code>\n<code>      try(BufferedWriter w = new BufferedWriter(new FileOutputStream(fn))) {</code>\n<code>         w.write("ALERT!");</code>\n<code>         w.flush();</code>\n<code>         w.write(\'!\');</code>\n<code><span epub:type="pagebreak" id="Page_303"></span>         System.out.print("1");</code>\n<code>      } catch (IOException e) {</code>\n<code>         System.out.print("2");</code>\n<code>      } finally {</code>\n<code>         System.out.print("3");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] testSignal) {</code>\n<code>      new Smoke().sendAlert(new File("alarm.txt"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["3", "13", "23", "The code does not compile."]
  },
  {
    title:
      "Which class is used to read information about a directory within the file system?",
    code: null,
    answers: [
      "java.io.File",
      "java.io.Directories",
      "java.io.Directory",
      "java.io.Path"
    ]
  },
  {
    title:
      "Which of the following is a high-level stream class that can only be used to wrap a  low-level stream?",
    code: null,
    answers: [
      "FileOutputStream",
      "FileReader",
      "ObjectInputStream",
      "PrintWriter"
    ]
  },
  {
    title:
      "Assume the file prime6.txt exists and contains the first six prime numbers as bytes: 2, 3, 5, 7, 11, 13. What is the output of the following application?",
    code:
      '<code>package numbers;</code>\n<code>import java.io.*;</code>\n<code>public class PrimeReader {</code>\n<code>   public static void main(String[] real) throws Exception {</code>\n<code>      try (InputStream is = new FileInputStream("prime6.txt")) {</code>\n<code>         is.skip(1);</code>\n<code>         is.read();</code>\n<code>         is.skip(1);</code>\n<code>         is.read();</code>\n<code><span epub:type="pagebreak" id="Page_304"></span>         is.mark(4);</code>\n<code>         is.skip(1);</code>\n<code>         is.reset();</code>\n<code>         System.out.print(is.read());</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "11",
      "13",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: For a given file, the absolute is the path from the  __________to the file, while the relative path is the path from the  __________to the file.",
    code: null,
    answers: [
      "current directory, current working directory",
      "parent directory, temporary directory",
      "root directory, current working directory",
      "root directory, parent directory"
    ]
  },
  {
    title: "Which statement best describes the following two methods?",
    code:
      '<code>public void writeSecret1() throws IOException {</code>\n<code>   final Writer w = new BufferedWriter(</code>\n<code>         new FileWriter("dont.open"));</code>\n<code>   w.write("Secret passcode");</code>\n<code>   w.close();</code>\n<code>}</code>\n<code>public void writeSecret2() throws IOException {</code>\n<code>   try(final Writer w = new BufferedWriter(</code>\n<code>         new FileWriter("dont.open"))) {</code>\n<code>      w.write("Secret passcode");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Both methods compile and are equivalent to each other.",
      "Neither method compiles.",
      "Only one of the methods compiles.",
      "The methods compile, but one method may lead to a resource leak."
    ]
  },
  {
    title:
      "What is the result of compiling and executing the following program?",
    code:
      '<code>package vacation;</code>\n<code>import java.io.*;</code>\n<code>import java.util.*;</code>\n<code>public class Itinerary {</code>\n<code>   private List&lt;String&gt; activities = new ArrayList&lt;&gt;();</code>\n<code>   private static Itinerary getItinerary(String name) {</code>\n<code>      return null;</code>\n<code>   }</code>\n<code>   public static void printItinerary() throws Exception {</code>\n<code>      Console c = new Console();</code>\n<code>      final String name = c.readLine("What is your name?");</code>\n<code>      final Itinerary stuff = getItinerary(name);</code>\n<code>      stuff.activities.forEach(s -&gt; c.printf(s));</code>\n<code>   }</code>\n<code>   public static void main(String[] holidays) throws Exception {</code>\n<code>      printItinerary();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The code compiles and prints a NullPointerException at runtime.",
      "The code compiles but does not print anything at runtime.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following diagram, which two classes can be placed in the blank boxes?",
    code: null,
    answers: [
      "BufferedOutputStream and PrintStream",
      "BufferedOutputStream and PrintOutputStream",
      "ByteArrayOutputStream and Stream",
      "FileOutputStream and OutputStream"
    ]
  },
  {
    title:
      "Let’s say we want to write an instance of Cereal to disk, having a name value of CornLoops. What is the value of name after this object has been read using the ObjectInputStream’s readObject() method?",
    code:
      '<code>package breakfast;</code>\n<code>public class Cereal {</code>\n<code>   private String name = "CocoaCookies";</code>\n<code>   private transient int sugar;</code>\n<code>   public Cereal() {</code>\n<code>      super();</code>\n<code>      this.name = "CaptainPebbles";</code>\n<code>   }</code>\n<code>   {</code>\n<code>      name = "SugarPops";</code>\n<code>   }</code>\n<code>   public String getName() { return name; }</code>\n<code>   public void setName(String name) {</code>\n<code>      this.name = name;</code>\n<code>   }</code>\n<code>   public int getSugar() { return sugar; }</code>\n<code>   public void setSugar(int sugar) {</code>\n<code>      this.sugar = sugar;</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["CaptainPebbles", "CornLoops", "SugarPops", "None of the above"]
  },
  {
    title:
      "Which statement best describes the difference between a Writer and an OutputStream class?",
    code: null,
    answers: [
      "Only one of them can write text or character data.",
      "Only one of them has built-in methods for writing character data.",
      "Only one of them has a flush() method to force the data to be written out.",
      "One uses a byte array to process character data more efficiently."
    ]
  },
  {
    title:
      "What is the output of the following application? It is safe to assume the directories referenced in the class do not exist prior to the execution of the program and that the file system is available and able to be written.",
    code:
      '<code>package job;</code>\n<code>import java.io.*;</code>\n<code>public class Resume {</code>\n<code><span epub:type="pagebreak" id="Page_307"></span>   public void resetWorkingDirectory() throws Exception {</code>\n<code>      File f1 = new File("/templates/proofs");</code>\n<code>      f1.mkdirs();</code>\n<code>      File f2 = new File("/templates");</code>\n<code>      f2.mkdir();  // k1</code>\n<code>      new File(f2,"draft.doc").createNewFile();</code>\n<code>      f1.delete();</code>\n<code>      f2.delete();  // k2</code>\n<code>   }</code>\n<code>   public static void main(String... leads) {</code>\n<code>      try {</code>\n<code>         new Resume().resetWorkingDirectory();</code>\n<code>      } catch (Exception e) {</code>\n<code>         new RuntimeException(e);</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Line k1 does not compile or triggers an exception at runtime.",
      "Line k2 does not compile or triggers an exception at runtime.",
      "The code compiles and runs without printing an exception.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following class, three of the values ensure it runs properly on various different systems. Which value does not?",
    code:
      "<code>package magic;</code>\n<code>import java.io.*;</code>\n<code>public class Store {</code>\n<code>   private final String directory;</code>\n<code>   public Store(String directory) {</code>\n<code>      this.directory = directory;</code>\n<code>   }</code>\n<code>   public File getDatabaseFolder(String file) {</code>\n<code>      return new File(directory + __________ + file);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "java.io. File.separator",
      "new File(new String()). separatorChar",
      'System. getProperty("file.separator")',
      'System. getProperty("path.separator")'
    ]
  },
  {
    title: "How many compilation errors does the following class contain?",
    code:
      "<code>package hero;</code>\n<code>import java.io.*;</code>\n<code>public class Guitar {</code>\n<code>   public void readMusic(File f) {</code>\n<code>      try (BufferedReader r = new BufferedReader(FileReader(f))) {</code>\n<code>         final String music = null;</code>\n<code>         try {</code>\n<code>            while((music = r.readLine()) != null)</code>\n<code>               System.out.println(music);</code>\n<code>         } catch (IOException e) {}</code>\n<code>      } catch (FileNotFoundException e) {</code>\n<code>         throw new RuntimeException(e);</code>\n<code>      } finally {}</code>\n<code>}}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "What is the difference between the two Console methods, format() and printf()?",
    code: null,
    answers: [
      "One of them takes an optional list of arguments; the other does not.",
      "One of them takes String as input; the other takes an Object.",
      "There is no difference between the two methods.",
      "Trick question! printf() is not defined in Console."
    ]
  },
  {
    title:
      "Let’s say you want to write a lot of text data to a file in an efficient manner. Which two java.io stream classes are best to use?",
    code: null,
    answers: [
      "FileOutputStream and BufferedOutputStream",
      "FileOutputWriter and FileBufferedWriter",
      "FileWriter and BufferedWriter",
      "ObjectOutputStream and BufferedWriter"
    ]
  },
  {
    title:
      "Assume the file referenced in the StudentManager class exists and contains data. Which statement about the following class is correct?",
    code:
      '<code>package school;</code>\n<code>import java.io.*;</code>\n<code>class Student implements Serializable {}</code>\n<code>public class StudentManager {</code>\n<code><span epub:type="pagebreak" id="Page_309"></span>   public static void main(String[] grades) {</code>\n<code>      try(ObjectInputStream ios = new ObjectInputStream(</code>\n<code>            new FileInputStream(new File("C://students.data")))) {</code>\n<code>         Student record;</code>\n<code>         while((record = (Student)ios.readObject()) != null) {</code>\n<code>            System.out.print(record);</code>\n<code>         }</code>\n<code>      } catch (EOFException e) {</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw new RuntimeException(e);</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The code compiles but prints an exception at runtime.",
      "The program runs and prints all students in the file.",
      "The program runs but may only print some students in the files."
    ]
  },
  {
    title: "Which java.io class does not have a complementary input stream?",
    code: null,
    answers: [
      "BufferedOutputStream",
      "BufferedWriter",
      "FileWriter",
      "PrintWriter"
    ]
  },
  {
    title:
      "Assuming the path /Earth does not exist within the file system, what is the output of the following program?",
    code:
      '<code>package center;</code>\n<code>import java.io.*;</code>\n<code>public class Journey {</code>\n<code>   public static void main(String[] dig) {</code>\n<code>      File file = new File("/Earth");</code>\n<code>      System.out.print(file.getParent()</code>\n<code>            +" - "</code>\n<code>            +file.getParent().getParent()); } }</code>',
    answers: [
      "/ - /",
      "/ - null",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which statements about executing the following program are true? (1)The program may ask the user a question and print the response to the error stream.(2)The program may throw a NullPointerException at runtime.(3)The program may wait indefinitely.",
    code:
      '<code>package test;</code>\n<code>import java.io.*;</code>\n<code>public class Turing {</code>\n<code>   public static void main(String... robots) {</code>\n<code>      Console c = System.console();</code>\n<code>      final String response = c.readLine("Are you human?");</code>\n<code>      System.err.print(response);</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["I", "I and III", "II and III", "I, II, and III"]
  },
  {
    title:
      "Which of the following statements about the deleteTree() method is correct?",
    code:
      "<code>public void deleteTree(File f) {</code>\n<code>   if(!f.isDirectory())</code>\n<code>      f.delete();</code>\n<code>   else {</code>\n<code>      Stream.of(f.list())</code>\n<code>         .forEach(s -&gt; deleteTree(s));</code>\n<code>      f.deleteDirectory();</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "It compiles and is capable of deleting a directory tree.",
      "If one line were modified, it would be capable of deleting a directory tree.",
      "If two lines were modified, it would be capable of deleting a directory tree.",
      "None of the above"
    ]
  },
  {
    title: "Which of the following is not a built-in stream in Java?",
    code: null,
    answers: ["System.err", "System.in", "System.info", "System.out"]
  },
  {
    title:
      "Assuming the file path referenced in the following class is accessible and able to be written, what is the output of the following program?",
    code:
      '<code>package store;</code>\n<code>import java.io.*;</code>\n<code>public class Furniture {</code>\n<code>   public final static void main(String... inventory) throws Exception {</code>\n<code>      Writer w = new FileWriter("couch.txt");</code>\n<code>      try (BufferedWriter bw = new BufferedWriter(w)) {</code>\n<code>         bw.write("Blue coach on Sale!");</code>\n<code>      } finally {</code>\n<code>         w.flush();</code>\n<code>         w.close();</code>\n<code>      }</code>\n<code>      System.out.print("Done!");</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Done!",
      "The code does not compile for one reason.",
      "The code does not compile for two reasons.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given an instance of Console c, which of the following method calls is not a way to read input from the user?",
    code: null,
    answers: [
      "c.reader().read()",
      "c.reader().readLine()",
      "c.readLine()",
      "c.readPassword()"
    ]
  },
  {
    title:
      "The copyPidgin() method is used to copy the contents of one file to another. Which  statement about the implementation is correct?",
    code:
      '<code>package birds;</code>\n<code>import java.io.*;</code>\n<code>public class Pidgin {</code>\n<code>   public void copyPidgin(File s, File t) throws Exception {</code>\n<code>      try(InputStream is = new FileInputStream(s);</code>\n<code>            OutputStream os = new FileOutputStream(t)) {</code>\n<code>         byte[] data = new byte[123];</code>\n<code><span epub:type="pagebreak" id="Page_312"></span>         int chirps;</code>\n<code>         while((chirps = is.read(data))&gt;0) {</code>\n<code>            os.write(data);</code>\n<code>         }}</code>\n<code>   }}</code>',
    answers: [
      "The class does not compile because read(byte[]) and write(byte[]) can only be called on BufferedInputStream and BufferOutputStream, respectively.",
      "The method correctly copies the contents of all files.",
      "The method correctly copies the contents of some files.",
      "The method will always throw an exception at runtime because the data array size is not a power of 2."
    ]
  },
  {
    title:
      "Using what you know about java.io stream class names, what would a nonexistent class named BufferedFileReader most likely be used for?",
    code: null,
    answers: [
      "Reading a small text file from a remote network",
      "Reading an image from disk",
      "Reading large text files from a file system",
      "Reading serialized data from disk"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      "<code>package factory;</code>\n<code>import java.io.*;</code>\n<code>public class WidgetProcessor {</code>\n<code>   public int getWidgetNumber(byte[] data) throws Exception {</code>\n<code>      try (InputStream is = new ByteArrayInputStream(data)) {</code>\n<code>         is.read(new byte[2]);</code>\n<code>         if(!is.markSupported()) return -1;</code>\n<code>         is.mark(5);</code>\n<code>         is.read();is.read();</code>\n<code>         is.skip(3);</code>\n<code>         is.reset();</code>\n<code>         return is.read();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... sprockets) throws Exception {</code>\n<code>      final WidgetProcessor p = new WidgetProcessor();</code>\n<code>      System.out.print(p.getWidgetNumber(new byte[] {1,2,3,4,5,6,7}));</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["3", "5", "7", "An exception is thrown at runtime."]
  },
  {
    title:
      "Assuming the working directory is accessible, empty, and able to be written, how many file system objects does the following class create?",
    code:
      '<code>1: package kitchen;</code>\n<code>2: import java.io.*;</code>\n<code>3: public class Bakers {</code>\n<code>4:    public static void main(String... tooMany) throws IOException {</code>\n<code>5:       File cake = new File("cake.txt");</code>\n<code>6:       Writer pie = new FileWriter("pie.txt");</code>\n<code>7:       pie.flush();</code>\n<code>8:       new File("fudge.txt").mkdirs();</code>\n<code>9:    } }</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Let’s say you wanted to read data from a file stored on disk that consists of String, long, and Object values? Given that the file is quite large, you intend to use three classes to achieve this result. Which of the following is not one of the three classes you should use?",
    code: null,
    answers: [
      "BufferedInputStream",
      "BufferedReader",
      "FileInputStream",
      "ObjectInputStream"
    ]
  },
  {
    title: "Which statement best describes the following two methods?",
    code:
      '<code>public String getNameQuick() throws IOException {</code>\n<code>   final BufferedReader r = new BufferedReader(</code>\n<code><span epub:type="pagebreak" id="Page_314"></span>         new FileReader("saved.name"));</code>\n<code>   final String name = r.readLine();</code>\n<code>   r.flush();</code>\n<code>   return name;</code>\n<code>}</code>\n<code>public String getNameSafely() throws IOException {</code>\n<code>   try(final BufferedReader r = new BufferedReader(</code>\n<code>         new FileReader("saved.name"))) {</code>\n<code>      final String name = r.readLine();</code>\n<code>      r.flush();</code>\n<code>      return name;</code>\n<code>}}</code>',
    answers: [
      "Both methods compile and are equivalent to each other.",
      "Neither method compiles.",
      "Only one of the methods compiles.",
      "The methods compile, but one method may lead to a resource leak."
    ]
  },
  {
    title:
      "What is the output of the following application? Assume the System.console() is available and the user enters badxbad and presses Enter.",
    code:
      "<code>package hardway;</code>\n<code>import java.io.*;</code>\n<code>public class InconvenientImplementation {</code>\n<code>   public static void main(String... dontDoThis) throws Exception {</code>\n<code>      Console c = System.console();</code>\n<code>      if(c != null) {</code>\n<code>         c.writer().write('P');</code>\n<code>         c.writer().write('a');</code>\n<code>         c.writer().write('s');</code>\n<code>         c.writer().write('s');</code>\n<code>         c.writer().flush();  // t1</code>\n<code>         int i;</code>\n<code>         StringBuilder sb = new StringBuilder();</code>\n<code>         while((i = c.reader().read()) != 'x') {  // t2</code>\n<code>            sb.append((char)i);</code>\n<code>         }</code>\n<code>         c.writer().format(\"Result: %s\",sb.toString());</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "Result: bad",
      "Line t1 does not compile or triggers an exception at runtime.",
      "Line t2 does not compile or triggers an exception at runtime.",
      "None of the above"
    ]
  },
  {
    title:
      "Why does Console readPassword() return a char array rather than a String?",
    code: null,
    answers: [
      "It improves performance.",
      "It improves security.",
      "Passwords must be stored as a char array.",
      "String cannot hold the individual password characters."
    ]
  },
  {
    title: "Which statement about the following program is true?",
    code:
      '<code>package mystical;</code>\n<code>import java.io.*;</code>\n<code>public class Unicorn {</code>\n<code>   public void findUnicorns() {</code>\n<code>      try(InputStream o = new ObjectInputStream(readBook())) {</code>\n<code>         while(o.read() != -1) {</code>\n<code>            System.out.println(o.read());</code>\n<code>         }</code>\n<code>      } catch (Throwable t) {</code>\n<code>         throw new RuntimeException(t);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   private InputStream readBook() throws IOException {</code>\n<code>      return new BufferedInputStream(new FileReader("magic.book"));</code>\n<code>   }</code>\n<code>   public static void main(String... horn) {</code>\n<code>      new Unicorn().findUnicorns();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The program prints every byte in the file without throwing an exception.",
      "The program prints every other byte in the file without throwing an exception.",
      "The program throws an EOFException when the end of the file is reached."
    ]
  },
  {
    title: "Choose the class that is least likely to be marked Serializable.",
    code: null,
    answers: [
      "A class that holds data about the amount of rain that has fallen in a given year",
      "A class that manages the memory of running processes in an application",
      "A class that stores information about apples in an orchard",
      "A class that tracks the amount of candy in a gumball machine"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package cell;</code>\n<code>import java.io.*;</code>\n<code>public class TextMessage {</code>\n<code>   public String receiveText() throws Exception {</code>\n<code>      try (Reader r = new FileReader("messages.txt")) {</code>\n<code>         StringBuilder s = new StringBuilder();</code>\n<code>         int c;</code>\n<code>         while((c = r.read()) != -1) {</code>\n<code>            s.append((char)c);</code>\n<code>            if(r.markSupported()) {</code>\n<code>               r.mark(100);</code>\n<code>               r.skip(10);</code>\n<code>               r.reset();</code>\n<code>            }</code>\n<code>         }</code>\n<code>         return s.toString();</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public void sendText(String message) throws Exception {</code>\n<code>      try (Writer w = new FileWriter("messages.txt")) {</code>\n<code>         for(int i=0; i&lt;message.length(); i++) {</code>\n<code>            w.write(message.charAt(i));</code>\n<code>            w.skip(1);</code>\n<code>         }</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] minutes) throws Exception {</code>\n<code>      final TextMessage m = new TextMessage();</code>\n<code>      m.sendText("You up?");</code>\n<code>      System.out.println(m.receiveText());</code>\n<code>   } }</code>',
    answers: [
      "You up?",
      "Y o u   u p ?",
      "The code does not compile because of the receiveText() method.",
      "The code does not compile because of the sendText() method."
    ]
  },
  {
    title:
      "What is the output of the following program? Assume the file paths referenced in the class exist and are able to be written to and read from.",
    code:
      '<code>package heart;</code>\n<code>import java.io.*;</code>\n<code>public class Valve implements Serializable {</code>\n<code>   private int chambers = -1;</code>\n<code>   private transient Double size = null;</code>\n<code>   private static String color;</code>\n<code>   public Valve() {</code>\n<code>      this.chambers = 3;</code>\n<code>      color = "BLUE";</code>\n<code>   }</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] love) throws Throwable {</code>\n<code>      try (ObjectOutputStream o = new ObjectOutputStream(</code>\n<code>            new FileOutputStream("scan.txt"))) {</code>\n<code>         final Valve v = new Valve();</code>\n<code>         v.chambers = 2;</code>\n<code>         v.size = 10.0;</code>\n<code>         v.color = "RED";</code>\n<code>         o.writeObject(v);</code>\n<code>      }</code>\n<code>      new Valve();</code>\n<code>      try (ObjectInputStream o = new ObjectInputStream(</code>\n<code>            new FileInputStream("scan.txt"))) {</code>\n<code>         Valve v = (Valve)o.readObject();</code>\n<code>         System.out.print(v.chambers+","+v.size+","+v.color);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   { chambers = 4; }</code>\n<code>}</code>',
    answers: [
      "2,null,RED",
      "2,null,BLUE",
      "3,10.0,RED",
      "The code does not compile."
    ]
  }
];

const a18 = [
  "B. Writer is an abstract class, making Option B the correct answer. Note that InputStream, OutputStream, and Reader are also abstract classes.",
  "D. File uses mkdir() and mkdirs() to create a directory, not createDirectory(), making Option A incorrect. Note there is a createDirectory() method in the NIO.2 Files class. The getLength() method also does not exist, as the correct method is called length(). Next, there is a listFiles() method used to read the contents of a directory, but there is no listFile() method. That leaves us with renameTo(), which does exist and is used to rename file system paths.",
  "C. The skip() method just reads a single byte and discards the value. The read() method can be used for a similar purpose, making Option C the correct answer. Option A is incorrect because there is no jump() method defined in InputStream. Options B and D are incorrect because they cannot be used to skip data, only to mark a location and return to it later, respectively.",
  "D. Serializable is a marker or tagging interface, which means it does not contain any methods and is used to provide information about an object at runtime. Therefore, Option D is the correct answer because the interface does not define any abstract methods.",
  "C. Given a valid instance of Console, reader() returns an instance of Reader, while writer() returns an instance of PrintWriter. Reader and PrintWriter was not an answer choice though, making Option C the next best choice since PrintWriter inherits Writer. Options A and B are incorrect because PrintReader is not defined in the java .io library. Option D is incorrect because the type of the instance returned by reader() is Reader, which does not inherit StringReader.",
  "D. BufferedWriter is a wrapper class that requires an instance of Writer to operate on. In the Smoke class, a FileOutputStream is passed, which does not inherit Writer, causing the class not to compile, and making Option D the correct answer. If FileWriter was used instead of FileOutputStream, the code would compile without issue and print 13, making Option B the correct answer.",
  "A. The File class is used to read both files and directories within a file system, making Option A the correct answer. The other three classes do not exist. Note there is an NIO.2 interface, java.nio.file.Path, used to read both file and path information.",
  "C. FileOutputStream and FileReader are both low-level streams that operate directly on files, making Options A and B incorrect. ObjectInputStream is a high-level stream that can only wrap an existing InputStream. For this reason, Option C is the correct answer. PrintWriter can operate on other streams, but it can also operate on files. Since the question asks which class can only wrap low-level streams, Option D is incorrect.",
  "D. The code compiles, so Option C is incorrect. The FileInputStream does not support marks, though, leading to an IOException at runtime when the reset() method is called. For this reason, Option D is the correct answer. Be suspicious of any code samples that call the mark() or reset() method without first calling markSupported().",
  "C. The absolute path is the full path from the root directory to the file, while the relative path is the path from the current working directory to the file. For this reason, Option C is the correct answer.",
  "D. The difference between the two methods is that writeSecret1() does not take any steps to ensure the close() method is called after the resource is allocated. On the other hand, writeSecret2() uses a try-with-resources block, which automatically tries to close the resource after it is used. Without a try-with-resources statement or an equivalent finally block, any exception thrown by the write() method would cause the resource not to be closed in the writeSecret1() method, possibly leading to a resource leak. For this reason, Option D is the correct answer. Option A is incorrect since they are not equivalent to each other. Finally, Options B and C are incorrect because both compile without issue.",
  "A. The constructor for Console is private. Therefore, attempting to call new Console() outside the class results in a compilation error, making Option A the correct answer. The correct way to obtain a Console instance is to call System.console(). Even if the correct way of obtaining a Console had been used, and the Console was available at runtime, stuff is null in the printItinerary() method. Referencing stuff.activities results in a NullPointerException, which would make Option B the correct answer.",
  "A. While you might not be familiar with FilterOutputStream, the diagram shows that the two classes must inherit from OutputStream. Options B and C can be eliminated as choices since PrintOutputStream and Stream are not the name of any java.io classes. Option D can also be eliminated because OutputStream is already in the diagram, and you cannot have a circular class dependency. That leaves us with the correct answer, Option A, with BufferedOutputStream and PrintStream both extending FilterOutputStream. Note that ByteArrayOutputStream and FileOutputStream referenced in Options C and D, respectively, do not extend FilterOutputStream, although knowing this fact was not required to solve the problem.",
  "D. The Cereal class does not implement the Serializable interface; therefore, attempting to write the instance to disk, or calling readObject() using ObjectInputStream, will result in a NotSerializableException at runtime. For this reason, Option D is the correct answer. If the class did implement Serializable, then the value of name would be CornLoops, since none of the constructor, initializers, or setters methods are used on deserialization, making Option B the correct answer.",
  "B. An OutputStream is used to write bytes, while a Writer is used to write character data. Both can write character data, the OutputStream just needs the data converted to bytes first. For this reason, Option A is incorrect. Option B is the correct answer, with Writer containing numerous methods for writing character or String data. Both interfaces contain a flush() method, making Option C incorrect. Finally, because both can be used with a byte array, Option D is incorrect.",
  "C. First off, the code compiles without issue. The first method call to mkdirs() creates two directories, /templates and /templates/proofs. The next mkdir() call is unnecessary, since /templates/proofs already exists. That said, calling it on an existing directory is harmless and does not cause an exception to be thrown at runtime. Next, a file draft.doc is created in the /templates directory. The final two lines attempt to remove the newly created directories. The first call to delete() is successful because /templates/proofs is an empty directory. On the other hand, the second call to delete() fails to delete the directory /templates because it is non-empty, containing the file draft.doc. Neither of these calls trigger an exception at runtime, though, with delete() just returning a boolean value indicating whether the call was successful. Therefore, our program ends without throwing any exceptions, and Option C is the correct answer.",
  'D. To answer the question, you need to identify three of the four ways to call the system-independent file name separator. For example, the file name separator is often a forward-slash (/) in Linux-based systems and a backward-slash (\\) in Windows-based systems. Option A is valid because it is the fully qualified name of the property. Option B is also valid because File.separator and File.separatorChar are equivalent. While accessing a static variable using an instance is discouraged, as shown in Option B, it is allowed. Option C is valid and a common way to read the character using the System class. Finally, Option D is the correct answer and one call that cannot be used to get the system-dependent name separator character. Note that System.getProperty("path.separator") is used to separate sets of paths, not names within a single path.',
  "D. The first compilation error is that the FileReader constructor call is missing the new keyword. The second compilation error is that the music variable is marked final, but then modified in the while loop. The third compilation problem is that the readMusic() method fails to declare or handle an IOException. Even though the IOException thrown by readLine() is caught, the one thrown by the implicit call to close() via the try-with-resources block is not caught. Due to these three compilation errors, Option D is the correct answer.",
  "C. Both of the methods do exist, making Option D incorrect. Both methods take the same arguments and do the exact same thing, making Option C the correct answer. The printf() was added as a convenience method, since many other languages use printf() to accomplish the same task as format().",
  "C. FileWriter and BufferedWriter can be used in conjunction to write large amounts of text data to a file in an efficient manner, making Option C the correct answer. While you can write text data using FileOutputStream and BufferedOutputStream, they are primarily used for binary data. Since there is a better choice available, Option A is incorrect. Option B is incorrect since FileOutputWriter and FileBufferedWriter are not classes that exist within the java.io API. Option D is incorrect since ObjectOutputStream is a high-level binary stream. Also, while it can write String data, it writes it in a binary format, not a text format.",
  "D. The code compiles and runs without issue, so Options A and B are incorrect. The problem with the implementation is that checking if ios.readObject() is null is not the recommended way of iterating over an entire file. For example, the file could have been written with writeObject(null) in-between two non-null records. In this case, the reading of the file would stop on this null value, before the end of the file has been reached. For this reason, Option D is the correct answer. Note that the valid way to iterate over all elements of a file using ObjectInputStream is to continue to call readObject() until an EOFException is thrown.",
  "D. BufferedInputStream is the complement of BufferedOutputStream. Likewise, BufferedReader and FileReader are the complements of BufferedWriter and FileWriter, respectively. On the other hand, PrintWriter does not have an accompanying PrintReader class within the java.io API, making Option D the correct answer. Remember that this is also true of PrintStream, as there is no PrintInputStream class.",
  "C. The File getParent() method returns a String, not a File object. For this reason, the code does not compile on the last line since there is no getParent() method defined in the String class, and Option C is correct. If the first method call on the last line was changed to getParentFile(), then the code would compile and run without issue, outputting / - null and making Option B the correct answer. The File class does not require the location to exist within the file system in order to perform some operations, like getParent(), on the path.",
  "D. All three statements about the program are correct. If System.console() is available, then the program will ask the user a question and then print the response if one is entered. On the other hand, if System.console() is not available, then the program will exit with a NullPointerException. It is strongly recommended to always check whether or not System.console() is null after requesting it. Finally, the user may choose not to respond to the program’s request for input, resulting in the program hanging indefinitely and making the last statement true.",
  "C. The code contains two compilation errors. First, the File list() method returns a list of String values, not File values, so the call to deleteTree() with a String value does not compile. Either the call would have to be changed to f.listFiles() or the lambda expression body would have to be updated to deleteTree(new File(s)) for the code to work properly. Next, there is no deleteDirectory() method in the File class. Directories are deleted with the same delete() method used for files, once they have been emptied. With those two sets of corrections, the method would compile and be capable of deleting a directory tree. Notice we continually used the phrase “capable of deleting a directory tree.” While the corrected code is able to delete a directory tree, it may fail in some cases, such as if the file system is read-only.",
  "C. System.err, System.in, and System.out are each valid streams defined in the System class. System.info is not, making Option C the correct answer.",
  "D. The code compiles without issue, making Options B and C incorrect. The BufferedWriter uses the existing FileWriter object as the low-level stream to write the file to disk. By using the try-with-resources block, though, the BufferedWriter calls close() before executing any associated catch or finally blocks. Since closing a high-level stream automatically closes the associated low-level stream, the w object is already closed by the time the finally block is executed. For this reason, the flush() command triggers an IOException at runtime, making Option D the correct answer. Note that the call to w.close(), if that line was reached, does not trigger an exception, because calling close() on already closed streams is innocuous.",
  "B. The Console class contains a reader() method that returns a Reader object. The Reader class defines a read() method, but not a readLine() method. For this reason, Option B is the correct answer. Recall that a BufferedReader is required to call the readLine() method. Options A, C, and D are valid ways to read input from the user.",
  "C. The code compiles without issue, since InputStream and OutputStream both support reading/writing byte arrays, making Option A incorrect. Option D is also incorrect. While it is often recommended that an I/O array be a power of 2 for performance reasons, it is not required, making Option D incorrect. This leaves us with Options B and C. The key here is the write() method used does not take a length value, available in the chirps variable, when writing the file. The method will always write the entire data array, even when only a handful of bytes were read into the data array, which may occur during the last iteration of the loop. The result is that files whose bytes are a multiple of 123 will be written correctly, while all other files will be written with extra data appended to the end of the file. For this reason, Option C is the correct answer. If the write(data) call was replaced with write(data,0,chirps), which does take the number of bytes read into consideration, then all files would copy correctly, making Option B the correct answer.",
  "C. The class name has three components that tell you what it would do if it was a java.io stream. First, Buffered tells you it can be used to handle large data sets efficiently. Next, File tells you it is involved in reading or writing files. Finally, Reader tells you it is used to read character data. Therefore, the class would be useful for reading large files of character data from disk efficiently, making Option C the correct answer. Option A is incorrect because it refers to a small file over a network. Options B and D are incorrect because both involve binary data.",
  "A. The code compiles and runs without issue. The first two values of the ByteArrayInputStream are read. Next, the markSupported() value is tested. Since -1 is not one of the possible answers, we assume that ByteArrayInputStream does support marks. Two values are read and three are skipped, but then reset() is called, putting the stream back in the state before mark() was called. In other words, everything between mark() and reset() can be ignored. The last value read is 3, making Option A the correct answer.",
  "C. Line 5 creates a File object, but that does not create a file in the file system unless cake.createNewFile() is called. Line 6 also does not necessarily create a file, although the call to flush() will on line 7. Note that this class does not properly close the file resource, potentially leading to a resource leak. Line 8 creates a new File object, which is used to create a new directory using the mkdirs() method. Recall from your studies that mkdirs() is similar to mkdir(), except that it creates any missing directories in the path. Since directories can have periods (.) in their name, such as a directory called info.txt, this code compiles and runs without issue. Since two file system objects, a file and a directory, are created, Option C is the correct answer.",
  "B. Since the file is stored on disk, FileInputStream is an appropriate choice. Next, because the data is quite large, a BufferedInputStream would help improve access. Finally, since the data is a set of Java values, ObjectInputStream would allow various different formats to be read. The only one that does not help in this process is BufferedReader, Option B. BufferedReader should be used with text-based Reader streams, not binary InputStream objects.",
  "B. The flush() method is defined on classes that inherit Writer and OutputStream, not Reader and InputStream. For this reason, the r.flush() in both methods does not compile, making Option B the correct answer and Option C incorrect. The methods are not equivalent even if they did compile, since getNameSafely() ensures the resource is closed properly by using a try-with-resources statement, making Option A incorrect for two reasons. Finally, Option D would be correct if the calls to flush() were removed.",
  "A. First off, the class compiles without issue. Although there are built-in methods to print a String and read a line of input, the developer has chosen not to use them for most of the application. The application first prints Pass, one character at a time. The flush() method does not throw an exception at runtime. In fact, it helps make sure the message is presented to the user. Next, the user enters badxbad and presses Enter. The stream stops reading on the x, so the value stored in the StringBuilder is bad. Finally, this value is printed to the user, using the format() method along with Result: as a prefix. For these reasons, Option A is the correct answer.",
  "B. The readPassword() returns a char array for security reasons. If the data was stored as a String, it would enter the shared JVM string pool, potentially allowing a malicious user to access it, especially if there is a memory dump. By using a char array, the data can be immediately cleared after it is written and removed from memory. For this reason, Option B is the correct answer. The rest of the statements are not true.",
  "A. The BufferedInputStream constructor in the readBook() method requires an InputStream as input. Since FileReader does not inherit InputStream, the readBook() method does not compile, and Option A is the correct answer. If FileReader was changed to FileInputStream, then the code would compile without issue. Since read() is called twice per loop iteration, the program would print every other byte, making Option C correct. Remember that InputStream read() returns -1 when the end of the stream is met. Alternatively, we use EOFException with ObjectInputStream readObject() to determine when the end of the file has been reached.",
  "B. Generally speaking, classes should be marked with the Serializable interface if they contain data that we might want to save and retrieve later. Options A, C, and D describe the type of data that we would want to store over a long period of time. Option B, though, defines a class that manages transient or short-lived data. Application processes change quite frequently, and trying to reconstruct a process is often considered a bad idea. For these reasons, Option B is the best answer.",
  "D. The receiveText() method compiles and runs without issue. The method correctly checks that the mark() method is supported before attempting to use it. Based on the implementation with reset(), the pointer is in the same location before/after the if-then statement. On the other hand, the sendText() method does not compile. The skip() method is defined on InputStream and Reader, not OutputStream and Writer, making Option D the correct answer. If this line was removed, the rest of the code would compile and run without issue, printing You up? at runtime and making Option A the correct answer.",
  "B. The class compiles and runs without issue, so Option D is incorrect. The class defines three variables, only one of which is serializable. The first variable, chambers, is serializable, with the value 2 being written to disk and then read from disk. Note that constructors and instance initializers are not executed when a class is deserialized. The next variable, size, is transient. It is discarded when it is written to disk, so it has the default object value ofnull when read from disk. Finally, the variable color is static, which means it is shared by all instances of the class. Even though the value was RED when the instance was serialized, this value was not written to disk, since it was not part of the instance. The constructor call new Value() between the two try-with-resources blocks sets this value to BLUE, which is the value printed later in the application. For these reasons, the class prints 2,null,BLUE, making Option B the correct answer."
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
    answerArray: mapAnswers(qz["answers"], a18[index]),
    explain: a18[index]
  };
});
// window.quizs = quizs
quizs[12].imageUrl = "./images/image-ocp-ch18-13.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
