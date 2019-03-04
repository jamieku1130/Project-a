const qzString = [
  {
    title:
      "Fill in the blanks: A(n)__________ is a file that contains a reference to another file or directory, while a(n)__________ is a file that contains content.",
    code: null,
    answers: [
      "irregular file, regular file",
      "regular file, opaque file",
      "symbolic link, regular file",
      "symbolic link, symbolic directory"
    ]
  },
  {
    title:
      "Which methods listed below are found in the NIO.2 Path interface? (1)getRoot()(2)isDirectory()(3)listFiles()(4)toRealPath()",
    code: null,
    answers: ["I only", "I, II, and III", "I and IV", "II and III"]
  },
  {
    title:
      "Assuming the file /secret/hide.txt exists and is marked hidden, what is result of executing the following program?",
    code:
      '<code>package hidden;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Finder {</code>\n<code>   public void findHiddenFile(Path p) throws Exception {</code>\n<code>      if(File.isHidden(p)) {</code>\n<code>         System.out.print("Found!");</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] folders) throws Exception {</code>\n<code>      final Finder f = new Finder();</code>\n<code>      f.findHiddenFile(Paths.get("/secret/hide.txt"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The class does not compile.",
      "An exception is printed at runtime.",
      "Found! is printed at runtime.",
      "Nothing is printed at runtime."
    ]
  },
  {
    title:
      "Fill in the blanks: Files.walk() performs a __________ traversal, while  Files.find() performs a __________ traversal.",
    code: null,
    answers: [
      "breadth-first, breadth-first",
      "breadth-first, depth-first",
      "depth-first, breadth-first",
      "depth-first, depth-first"
    ]
  },
  {
    title:
      "When reading file information, what is an advantage of using an NIO.2 attribute interface rather than reading the values individually from Files methods?",
    code: null,
    answers: [
      "Costs fewer round-trips to the file system",
      "Guarantees performance improvement",
      "Has support for symbolic links",
      "Reduces memory leaks"
    ]
  },
  {
    title:
      "What is the result of compiling and executing the following program? Assume the current directory is /stock and the path /stock/sneakers does not exist prior to execution.",
    code:
      '<code>package shoe;</code>\n<code>import java.io.*;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Sneaker {</code>\n<code>   public void setupInventory(Path desiredPath) throws Exception {</code>\n<code>      Path suggestedPath = Paths.get("sneakers");</code>\n<code>      if(Files.isSameFile(suggestedPath, desiredPath)  // j1</code>\n<code>            &amp;&amp; !Files.exists(suggestedPath))</code>\n<code>         Files.createDirectories(desiredPath);  // j2</code>\n<code>   }</code>\n<code>   public static void main(String[] socks) throws Exception {</code>\n<code>      Path w = new File("/stock/sneakers").toPath();  // j3</code>\n<code>      new Sneaker().setupInventory(w);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The directory /stock/sneakers is created.",
      "Line j1 does not compile or produces an exception at runtime.",
      "Line j2 does not compile or produces an exception at runtime.",
      "Line j3 does not compile or produces an exception at runtime."
    ]
  },
  {
    title:
      "Assuming the path referenced below exists and contains a symbolic link that references  /again, what is the expected result of executing the following code snippet?",
    code:
      '<code>System.out.print(Files.walk(Paths.get("/again/and/again")).count());</code>',
    answers: [
      "An exception is thrown at runtime.",
      "A number is printed at runtime.",
      "The process hangs indefinitely.",
      "The result cannot be determined with the information given."
    ]
  },
  {
    title:
      "Which method in the NIO.2 Files class is equivalent to the java.io.File method length()?",
    code: null,
    answers: ["length()", "size()", "getLength()", "None of the above"]
  },
  {
    title:
      "Assuming the current working directory is /home, then what is the output of the following program?",
    code:
      '<code>1:  package magic;</code>\n<code>2:  import java.nio.file.*;</code>\n<code>3:  public class Magician {</code>\n<code>4:     public String doTrick(Path path) {</code>\n<code>5:        return path.subpath(2,3)</code>\n<code>6:           .getName(1)</code>\n<code>7:           .toAbsolutePath()</code>\n<code>8:           .toString();</code>\n<code>9:     }</code>\n<code>10:    public static void main(String... cards) {</code>\n<code>11:       final Magician m = new Magician();</code>\n<code>12:       System.out.print(m.doTrick(</code>\n<code>13:          Paths.get("/bag/of/tricks/.././disappear.txt")));</code>\n<code>14:    } }</code>',
    answers: [
      "/home/tricks",
      "/home",
      "The code does not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title:
      "Which methods listed below are found in the NIO.2 Files class?(1)isSameFile()(2)length()(3)relativize()(4)mkdir()",
    code: null,
    answers: ["I only", "I, II, and IV", "II and III", "IV only"]
  },
  {
    title:
      "The following code snippet, which attempts to move a file system record from oldHardDrivePath to newHardDrivePath, results in an exception at runtime.  Which of the following is the most likely type of exception to be thrown?",
    code:
      "<code>Files.move(oldHardDrivePath,newHardDrivePath,REPLACE_EXISTING);</code>",
    answers: [
      "AtomicMoveNotSupportedException",
      "DirectoryNotEmptyException",
      "FileAlreadyExistsException",
      "None of the above since the line of code does not compile"
    ]
  },
  {
    title:
      "Which of the following can be filled into the blank that would allow the method to compile?(1)new File(fileName).toPath()(2)new Path(fileName)(3)FileSystems.getDefault().getPath(fileName)",
    code:
      "<code>public String getPathName(String fileName) {</code>\n<code>   final Path p = ____________________;</code>\n<code>   return p.getFileName();</code>\n<code>}</code>",
    answers: ["I and II", "I and III", "II", "None of the above"]
  },
  {
    title: "Which statement about the following class is correct?",
    code:
      '<code>package clone;</code>\n<code>import java.io.*;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Rewriter {</code>\n<code>   public static void copy(Path source, Path target) throws Exception {</code>\n<code>      try (BufferedReader r = Files.newBufferedReader(source);</code>\n<code>            Writer w = Files.newBufferedWriter(target)) {</code>\n<code>         String temp = null;</code>\n<code>         while((temp = r.readLine()) != null) {</code>\n<code>            w.write(temp);</code>\n<code>         }</code>\n<code>      }</code>\n<code><span epub:type="pagebreak" id="Page_325"></span>   }</code>\n<code>   public static void main(String[] tooMany) throws Throwable {</code>\n<code>      Rewriter.copy(Paths.get("/original.txt"),</code>\n<code>         FileSystems.getDefault().getPath("/","unoriginal.txt"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The class compiles without issue.",
      "The class never throws an exception at runtime.",
      "The implementation correctly copies a regular file.",
      "All of the above"
    ]
  },
  {
    title:
      "Fill in the blanks: The Files.__________ method returns a List, while the Files.__________ method returns a Stream.",
    code: null,
    answers: [
      "lines(), readAllLines()",
      "lines(), readLines()",
      "readAllLines(), lines()",
      "readLines(), lines()"
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>1:  package yellow;</code>\n<code>2:  import java.nio.file.*;</code>\n<code>3:  public class Road {</code>\n<code>4:     public boolean findHome() {</code>\n<code>5:        Path oftenTraveled = Paths.get("/highway/street/spot.txt");</code>\n<code>6:        Path lessTraveled = Paths.get("/highway/street/house/../.");</code>\n<code>7:        lessTraveled.resolve("spot.txt");</code>\n<code>8:        return oftenTraveled.equals(lessTraveled.normalize());</code>\n<code>9:     }</code>\n<code>10:    public static void main(String... emerald) {</code>\n<code>11:       System.out.print("AM I HOME? "</code>\n<code>12:             +(new Road().findHome() ? "yes" : " no"));</code>\n<code>13:    }</code>\n<code>14: }</code>',
    answers: [
      "AM I HOME? no",
      "AM I HOME? yes",
      "The class does not compile.",
      "The class compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following is not an advantage of using an NIO.2 Path instead of a  java.io.File to work with files?",
    code: null,
    answers: [
      "Contains built-in support for symbolic links",
      "Has ability to read operating-system-specific attributes",
      "Provides a single method for deleting a directory tree",
      "Provides efficient access of file metadata"
    ]
  },
  {
    title:
      "What is the result of executing the following program? Assume the path /driveway exists and is non-empty, and the directory tree is fully accessible within the file system.",
    code:
      '<code>package weather;</code>\n<code>import java.io.*;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Snow {</code>\n<code>   public static boolean removeSnow(Path flake) throws IOException {</code>\n<code>      if(!Files.isDirectory(flake) &amp;&amp; !Files.isSymbolicLink(flake))</code>\n<code>         return Files.delete(flake);</code>\n<code>      else return true;</code>\n<code>   }</code>\n<code>   public static void main(String[] cones) throws IOException {</code>\n<code>      File driveway = new File("/driveway");</code>\n<code>      for(File f : driveway.listFiles()) {</code>\n<code>         System.out.println(removeSnow(f.toPath()));</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The program prints a list of only true values.",
      "The program prints a mix of true and false values.",
      "The code does not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title:
      "Which interface name inserted into the blank below allows the code snippet to compile?",
    code:
      '<code>Path file = Paths.get("/data/movie.txt");</code>\n<code>BasicFileAttributes b = Files.readAttributes(file, __________);</code>',
    answers: [
      "BasicFileAttributes.class",
      "DosFileAttributes.class",
      "PosixFileAttributes.class",
      "All of the above"
    ]
  },
  {
    title:
      "What is the output of the following code snippet? Assume that the current directory is the root path.",
    code:
      '<code>Path p1 = Paths.get("./locks");</code>\n<code>Path p2 = Paths.get("/found/red.zip");</code>\n<code>System.out.println(p1.relativize(p2));</code>\n<code>System.out.println(p2.relativize(p1));</code>',
    answers: [
      "\n\n../found/red.zip \n\n../../locks\n",
      "\n\n../../locks \n\n../found/red.zip\n",
      "\n\nlocks/../found/red.zip \n\n../found/locks\n",
      "None of the above"
    ]
  },
  {
    title:
      "What is the output of the following code snippet? Assume that the current directory is the root path.",
    code:
      '<code>Path p1 = Paths.get("./found/../keys");</code>\n<code>Path p2 = Paths.get("/lost/blue.txt");</code>\n<code>System.out.println(p1.resolve(p2));</code>\n<code>System.out.println(p2.resolve(p1));</code>',
    answers: [
      "\n\n/lost/blue.txt \n\n./found/../keys\n",
      "\n\n/found/../keys/./lost/blue.txt \n\n/lost/blue.txt/keys\n",
      "\n\n/lost/blue.txt \n\n/lost/blue.txt/./found/../keys\n",
      "None of the above"
    ]
  },
  {
    title:
      "What is the output of the following application? Assume the application is called with a valid path that exists and is accessible within the file system.",
    code:
      '<code>package charity;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Roster {</code>\n<code>   protected void printRoster(Path p) {</code>\n<code>      for(Path f : Files.list(p)) {  // n1</code>\n<code>         if(f.toString().endsWith(".per"))  // n2</code>\n<code>            System.out.print(f);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String... volunteers) {</code>\n<code>      new Roster().printRoster(Paths.get(volunteers[0]));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "A list of file names is printed at runtime.",
      "The class does not compile due to line n1.",
      "The class does not compile due to line n2.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following file system diagram, in which forward is a symbolic link to the java directory, which value does not print /java/Sort.java at runtime?",
    code:
      '<code>Path p = Paths.get("/", "objC", "bin");</code>\n<code>System.out.println(p.resolve("__________").toRealPath());</code>',
    answers: [
      "../backwards/../forward/Sort.java",
      "../forward/./Sort.java",
      "../java/./forward/Sort.java",
      "../../java/Sort.java"
    ]
  },
  {
    title:
      "Using the file system diagram from the previous question, including the symbolic link from forward to java, how many calls to Files.delete() would need to be made before the following line could be executed without throwing an exception?",
    code: '<code>Files.delete(Paths.get("/objC"));</code>',
    answers: [
      "One",
      "Four",
      "Seven",
      "None of the above. The symbolic link needs to be removed with  Files.deleteSymbolicLink() first."
    ]
  },
  {
    title:
      "Assuming the course.txt file exists and is readable, what is the result of executing the following application?",
    code:
      '<code>package schoolwork;</code>\n<code>import java.io.*;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Notes {</code>\n<code>   public void printNotes() {</code>\n<code>      try (OutputStream out = System.out) {  // y1</code>\n<code>         Files.copy(out, Paths.get("course.txt"));</code>\n<code>      } catch (IOException e) {</code>\n<code>         throw new RuntimeException(e);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] coursework) {</code>\n<code>      new Notes().printNotes();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code compiles but prints an exception at runtime.",
      "The class does not compile due to line y1.",
      "The code does not compile for some other reason.",
      "The program prints the contents of the course.txt file."
    ]
  },
  {
    title:
      "When reading file information, what is an advantage of loading a BasicFileAttributeView over a BasicFileAttributes?",
    code: null,
    answers: [
      "Allows the hidden attribute to be set",
      "Allows the last modified date to be changed",
      "All of the file information is read in a single round-trip.",
      "There is no advantage."
    ]
  },
  {
    title:
      "The Rose application is run with an input argument of /flower. The /flower directory contains five subdirectories, each of which contains five files. How many Path values does the following application print?",
    code:
      "<code>import java.nio.file.*;</code>\n<code>public class Rose {</code>\n<code>   public void tendGarden(Path p) throws Exception {</code>\n<code>      Files.walk(p,1)</code>\n<code>         .map(p -&gt; p.toRealPath())</code>\n<code>         .forEach(System.out::println);</code>\n<code>   }</code>\n<code>   public static void main(String... thorns) throws Exception {</code>\n<code>      new Rose().tendGarden(Paths.get(thorns[0]));</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["None", "One", "Six", "Thirty-one"]
  },
  {
    title:
      'Which of the following statements, when run independently, produces a NullPointerException at runtime? 1.Paths. get("../sang").getParent().getParent()2. Paths.get("/sing"). getParent().getRoot()3. Paths .get("/song").getRoot(). getRoot()4.Paths. get("../sung").getRoot().getParent()',
    code: null,
    answers: ["I and III", "I and IV", "II and III", "IV only"]
  },
  {
    title: "Which statement about the following Finalize class is correct?",
    code:
      '<code>1: package end;</code>\n<code>2: import java.nio.file.*;</code>\n<code>3: public class Finalize {</code>\n<code>4:    public Path makeAbsolute(Path p) {</code>\n<code>5:       if(p!=null &amp;&amp; !p.isAbsolute())</code>\n<code>6:       return p.toAbsolutePath();</code>\n<code><span epub:type="pagebreak" id="Page_330"></span>7:       return p;</code>\n<code>8:    }</code>\n<code>9: }</code>',
    answers: [
      "It does not compile because IOException is neither handled nor declared.",
      "It does not compile for some other reason.",
      "The method compiles and returns a Path value that is always equivalent to the input argument.",
      "The method compiles and returns a Path value that may not be equivalent to the input argument."
    ]
  },
  {
    title:
      "Which of the following is a difference between the createDirectory() and createDirectories() methods found in the NIO.2 Files class?",
    code: null,
    answers: [
      "One takes multiple Path arguments; the other does not.",
      "One throws an exception if a file already exists at the directory path; the other does not.",
      "One declares a checked exception; the other does not.",
      "One creates a single directory while the other may create many directories."
    ]
  },
  {
    title:
      "Assuming the current working directory is /hail, what is the expected output of executing the following code snippet?",
    code:
      '<code>Path w1 = Paths.get("../jungle/.././rain..")</code>\n<code>      .toAbsolutePath().normalize();</code>\n<code>System.out.print(w1.resolve("snow.txt"));</code>',
    answers: [
      "/jungle/snow.txt",
      "/hail/rain../snow.txt",
      "/rain../snow.txt",
      "An exception is printed at runtime."
    ]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package med;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Surgeon {</code>\n<code>   public Path rebuild(Path p) {</code>\n<code>      Path v = null;</code>\n<code>      for(int i=0; i&lt;p.getNameCount(); i++)</code>\n<code>         if(v==null) v = p.getName(i);</code>\n<code>         else v = v.resolve(p.getName(i));</code>\n<code>      return v;</code>\n<code>   }</code>\n<code>   public static void main(String... tools) {</code>\n<code>      final Surgeon al = new Surgeon();</code>\n<code><span epub:type="pagebreak" id="Page_331"></span>      Path original = Paths.get("/tissue/heart/chambers.txt");</code>\n<code>      Path repaired = al.rebuild(original);</code>\n<code>      System.out.print(original.equals(repaired));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "false",
      "true",
      "The code does not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  },
  {
    title:
      "Under which circumstances does Files.deleteIfExists() not throw an exception?",
    code: null,
    answers: [
      "The file system suddenly becomes unavailable.",
      "The path does not exist.",
      "The path represents a non-empty directory.",
      "The process does not have write access to a path."
    ]
  },
  {
    title:
      "What is the output of the following code snippet? Assume all referenced paths exist within the file system.",
    code:
      '<code>Path v1 = Path.get("/./desert/./").resolve(Paths.get("sand.doc"));</code>\n<code>Path v2 = new File("/desert/./cactus/../sand.doc").toPath();</code>\n<code>System.out.print(Files.isSameFile(v1,v2));</code>\n<code>System.out.print(" "+v1.equals(v2));</code>\n<code>System.out.print(" "+v1.normalize().equals(v2.normalize()));</code>',
    answers: [
      "false false false",
      "true false true",
      "true true true",
      "None of the above"
    ]
  },
  {
    title:
      "How many lines of the following program contain compilation errors?",
    code:
      '<code>public class Song {</code>\n<code>   public static void organize(Path folder, Path file) throws IOException {</code>\n<code>      Path p = folder.resolve(file);</code>\n<code>      BasicFileAttributeView vw = Files.getFileAttributeView(p,</code>\n<code>         BasicFileAttributes.class);</code>\n<code>      if(vw.creationTime().toMillis()&lt;System.currentTimeMillis()) {</code>\n<code>         vw.setTimes(FileTime.fromMillis(System.currentTimeMillis()),</code>\n<code>            null,null);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static void main(String[] audio) throws Exception {</code>\n<code><span epub:type="pagebreak" id="Page_332"></span>      Song.organize(Paths.get("/", "pub"),new File("/songs").toPath());</code>\n<code>   }</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "What is the output of the following application?",
    code:
      '<code>package stars;</code>\n<code>import java.nio.file.*;</code>\n<code>public class Sun {</code>\n<code>   public void printInfo() {</code>\n<code>      Path halleysComet = Paths.get("stars/./rocks/../m1.meteor")          .normalize();</code>\n<code>      Path lexellsComet = Paths.get("./stars/../solar/");</code>\n<code>      lexellsComet = lexellsComet.subpath(0, 2)</code>\n<code>            .resolve("m1.meteor")</code>\n<code>            .normalize();</code>\n<code>      System.out.print(halleysComet.equals(lexellsComet)</code>\n<code>            ? "Same!" : "Different!");</code>\n<code>   }</code>\n<code>   public static void main(String... emerald) {</code>\n<code>      Sun s = new Sun();</code>\n<code>      s.printInfo();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Different!",
      "Same!",
      "The class does not compile.",
      "The class compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Assuming the directory /eclipse/projects exists and its contents are accessible, which statement about the following code snippet is correct?",
    code:
      '<code>Path p = Paths.get("/eclipse/projects");</code>\n<code>&nbsp;</code>\n<code>Files.walk(p)</code>\n<code>   .map(z -&gt; z.toAbsolutePath().toString())</code>\n<code>   .filter(s -&gt; s.endsWith(".java"))</code>\n<code><span epub:type="pagebreak" id="Page_333"></span>   .collect(Collectors.toList()).forEach(System.out::println);</code>\n<code>&nbsp;</code>\n<code>Files.find(p,Integer.MAX_VALUE,</code>\n<code>      (w,a) -&gt; w.toAbsolutePath().toString().endsWith(".java"))</code>\n<code>   .collect(Collectors.toList()).forEach(System.out::println);</code>',
    answers: [
      "The first stream statement does not compile.",
      "The second stream statement does not compile.",
      "Both statements compile but are unlikely to print the same results at runtime.",
      "None of the above"
    ]
  },
  {
    title:
      "Assuming the file referenced below exists and is significantly large, which statement about the following program is correct?",
    code:
      '<code>public class SpeedRead {</code>\n<code>   public void jenniferReads(Path p) {</code>\n<code>      Files.lines(p);</code>\n<code>   }</code>\n<code>   public void jonReads(Path p) {</code>\n<code>      Files.readAllLines(p);</code>\n<code>   }</code>\n<code>   public static void main(String[] pages) {</code>\n<code>      Path p = Paths.get("/bookshelf/mobydick.txt");</code>\n<code>      final SpeedRead r = new SpeedRead();</code>\n<code>      r.jenniferReads(p);</code>\n<code>      r.jonReads(p);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code does not compile.",
      "The method jenniferReads() is likely to take longer to run.",
      "The method jonReads() is likely to take longer to run.",
      "It is not possible to know which method will take longer to run."
    ]
  },
  {
    title:
      "What is the result of executing the following program? Assume the files referenced in the application both exist and are fully accessible within the file system.",
    code:
      '<code>package duplicate;</code>\n<code>import static java.nio.file.StandardCopyOption.*;</code>\n<code>import static java.nio.file.Files.*;</code>\n<code>import java.io.*;</code>\n<code>import java.nio.file.*;</code>\n<code>public class CopyOfACopy {</code>\n<code><span epub:type="pagebreak" id="Page_334"></span>   public void main(String[] items) throws Exception {</code>\n<code>      final Path s = new File("apples.zip").toPath();</code>\n<code>      final Path t = FileSystems.getDefault().getPath("oranges.zip");</code>\n<code>      copy(s,t,REPLACE_EXISTING);  // q1</code>\n<code>      copy(Files.newBufferedReader(t),t,ATOMIC_MOVE);  // q2</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "Line q1 does not compile.",
      "Line q1 produces an exception at runtime.",
      "Line q2 does not compile.",
      "Line q2 produces an exception at runtime."
    ]
  },
  {
    title:
      "Which of the following Files methods requires the enclosing method to handle or declare a checked exception?",
    code: null,
    answers: ["exists()", "isDirectory()", "isSameFile()", "isSymbolicLink()"]
  },
  {
    title:
      "What is the output of the following application? Assume /all-data exists and is accessible within the file system.",
    code:
      '<code>package numbers;</code>\n<code>import java.nio.file.*;</code>\n<code>import java.util.stream.Stream;</code>\n<code>public class TheCount {</code>\n<code>   public static Stream&lt;String&gt; readLines(Path p) {</code>\n<code>      try {</code>\n<code>         return Files.lines(p);</code>\n<code>      } catch (Exception e) {</code>\n<code>         throw new RuntimeException(e);</code>\n<code>      }</code>\n<code>   }</code>\n<code>   public static long count(Path p) throws Exception {</code>\n<code>      return Files.list(p)</code>\n<code>         .filter(w -&gt; Files.isRegularFile(w))</code>\n<code>         .flatMap(s -&gt; readLines(s))</code>\n<code>         .count();</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_335"></span>   public final static void main(String[] day) throws Exception {</code>\n<code>      System.out.print(count(Paths.get("/all-data")));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The number of lines in all files in a directory tree",
      "The number of lines in all files in a single directory",
      "The code does not compile.",
      "The code compiles but prints an exception at runtime."
    ]
  }
];

const a19 = [
  "C. A symbolic link is a file that contains a reference to another file or directory within the file system, making Options A and B incorrect. Further, there is no such thing as an irregular file. Option C is the correct answer because a regular file is not a directory and contains content, unlike a symbolic link or resource. Option D is also incorrect because all symbolic links are stored as files, not directories, even when their target is a directory.",
  "C. The NIO.2 Path interface contains the methods getRoot() and toRealPath(). On the other hand, the method isDirectory() is found in the NIO.2 Files class, while the method listFiles() is found in the java.io.File class. For these reasons, Option C is the correct answer.",
  "A. The code does not compile because there is no NIO.2 class File that contains an isHidden() method, making Option A the correct answer. There is a java.io.File class, but that does not contain an isHidden() method either. The correct call is Files.isHidden(). Remember to check File vs. Files as well as Path vs. Paths on the real exam. If the correct method call was used, the program would print Found!, and Option C would be the correct answer.",
  "D. A breadth-first traversal is when all elements of the same level, or distance from the starting path, are visited before moving on to the next level. On the other hand, a depth-first traversal is when each element’s entire path, from start to finish, is visited before moving onto another path on the same level. Both walk() and find() use depth-first traversals, so Option D is the correct answer.",
  "A. Reading an attribute interface is accomplished in a single trip to the underlying file system. On the other hand, reading multiple file attributes using individual Files methods requires a round-trip to the file system for each method call. For these reasons, Option A is the correct answer. Option B is incorrect because nothing guarantees it will perform faster, especially if the Files method is only being used to read a single attribute. For multiple calls, it is expected to be faster, but the statement uses the word guarantees, which is incorrect. Option C is also incorrect because both have built-in support for symbolic links. Finally, Option D is incorrect because this discussion has nothing to do with memory leaks.",
  "B. First off, the class compiles without issue. It is not without problems, though. The Files.isSameFile() method call on line j1 first checks if the Path values are equivalent in terms of equals(). One is absolute and the other is relative, so this test will fail. The isSameFile() method then moves on to verify that the two Path values reference the same file system object. Since we know the directory does not exist, the call to isSameFile() on line j1 will produce a NoSuchFileException at runtime, making Option B the correct answer. ",
  "B. A cycle is caused when a path contains a symbolic link that references the path itself, or a parent of the parent, triggering an infinitely deep traversal. That said, Files.walk() does not follow symbolic links by default. For this reason, the cycle is never activated, and the code would print a number at runtime, making Option B the correct answer. If the FOLLOW_LINKS enum value was used in the call to Files.walk(), then it would trigger a cycle resulting in a FileSystemLoopException at runtime, and Option A would be the correct answer.",
  "B. The methods length() and getLength() do not exist in the Files class, making Options A and C incorrect. Recall that the java.io.File method retrieves the size of a file on disk. The NIO.2 Files class includes the Files.size() method to accomplish this same function. For this reason, Option B is the correct answer.",
  "D. The code compiles without issue, making Option C incorrect. Even though tricks would be dropped in the normalized path /bag/of/disappear.txt, there is no normalize() call, so path.subpath(2,3) returns tricks on line 5. On line 6, the call to getName() throws an IllegalArgumentException at runtime. Since getName() is zero-indexed and contains only one element, the call on line 6 throws an IllegalArgumentException, making Option D the correct answer. If getName(0) had been used instead of getName(1), then the program would run without issue and print /home/tricks, and Option A would have been the correct answer.",
  "A. The NIO.2 Files class contains the method isSameFile(). The methods length() and mkdir() are found in java.io.File, with the NIO.2 equivalent versions being Files.size() and Files.createDirectory(), respectively. In addition, the relativize() method is found in NIO.2 Path, not Files. Since only isSameFile() is found in NIO.2 Files, Option A is the correct answer.",
  "B. First off, the code compiles without issue, so Option D is incorrect. The enum value REPLACE_EXISTING does not use a type, although this compiles correctly if a static import of StandardCopyOption is used. The AtomicMoveNotSupportedException in Option A is only possible when the ATOMIC_MOVE option is passed to the move() method. Similarly, the FileAlreadyExistsException in Option C is only possible when the REPLACE_EXISTING option is not passed to the move() method. That leaves us with the correct answer of Option B. A DirectoryNotEmptyException can occur regardless of the options passed to the Files.move() method.",
  "D. The Path method getFileName() returns a Path instance, not a String. For this reason, the code does not compile, regardless of which line of code is inserted into the blank, making Option D the correct answer. Statements I and III are two valid ways to create a Path instance. If the method was updated to use Path as the return type, then Option B would be the correct answer. Statement II would cause the method to not compile, because Path is an interface and requires a class to be instantiated.",
  "A. The code compiles without issue, but that’s about it. The class may throw an exception at runtime, since we have not said whether or not the source file exists nor whether the target file already exists, is a directory, or is write-protected. For these reason, Option B is incorrect. Option C is also incorrect because the implementation is a flawed copy method. On a regular file, the code will copy the contents but the line breaks would be missing in the target file. In order to correctly copy the original file, a line break would have to be written after each time temp is written. Since it is the only correct statement, Option A is the correct answer.",
  "C. First off, there is no Files.readLines() method, making Options B and D immediately incorrect. The Files.readAllLines() method returns a List<String>, while the Files.lines() method returns a Stream<String>. For this reason, Option C is the correct answer, and Option A is incorrect.",
  "A. The program compiles and runs without issue, making Options C and D incorrect. Like String instances, Path instances are immutable. For this reason, the resolve() operation on line 7 has no impact on the lessTraveled variable. Since one Path ends with /spot.txt and the other does not, they are not equivalent in terms of equals(), making Option A the correct answer. If lines 6 and 7 were combined, such that the result of the resolve() operation was stored in the lessTraveled variable, then normalize() would reduce lessTraveled to a Path value that is equivalent to oftenTraveled, making Option B the correct answer.",
  "C. Options A, B, and D are each advantages of using NIO.2. As you may remember, using an attribute view to read multiple attributes at once is more efficient than a single attribute call since it involves fewer round trips to the file system. Option C is the correct answer. Neither API provides a single method to delete a directory tree.",
  "C. The Files.delete() method has a return type of void, not boolean, resulting in a compilation error and making Option C the correct answer. There is another method, Files.deleteIfExists(), which returns true if the file is able to be deleted. If it was used here instead, the file would compile and print a list of true values, making Option A the correct answer. As stated in the description, the directory tree is fully accessible, so none of the Files.deleteIfExists() would return false.",
  "D. First off, DosFileAttributes and PosixFileAttributes extend BasicFileAttributes, which means they are compatible with the readAttributes() method signature. Second, they produce instances that inherit the interface BasicFileAttributes, which means they can be assigned to a variable b of type BasicFileAttributes without an explicit cast. For this reason, all three interfaces are permitted, and Option D is the correct answer.",
  "D. The relativize() method requires that both path values be absolute or relative. Based on the details provided, p1 is a relative path, while p2 is an absolute path. For this reason, the code snippet produces an exception at runtime, making Option D the correct answer. If the first path was modified to be absolute by dropping the leading dot (.) in the path expression, then the output would match the values in Option A.",
  "C. First off, p2 is an absolute path, which means that p1.resolve(p2) just returns p2. For this reason, Option B is incorrect. Since p1 is a relative path, it is appended onto p2, making Option C correct and Option A incorrect.",
  "B. The code does not compile because Files.list() returns a Stream<Path>, not a List<Path>, making Option B the correct answer. Note that java.io.File does include a list() method that returns an array of String values and a listFiles() method that returns an array of File values, but neither is applicable here.",
  "C. For this problem, remember that the path symbols can be applied to simplify the path before needing to apply any symbolic links in the file system. The paths in Options A and B can both be reduced from /objC/bin/../backwards/../forward/Sort.java and /objC/bin/../forward/./Sort.java, respectively, to /objC/forward/Sort.java just using the path symbols. Because of the symbolic link, this references the same file as /java/Sort.java. For these reasons, Options A and B match our target path. Option C can be reduced from /objC/bin/../java/./forward/Sort.java to /objC/java/forward/Sort.java, which does not match the desired path for the file. The symbolic link is not followed since it exists in the /objC directory, not in the /objC/java directory. This causes a stack trace to be printed at runtime since the path does not exist, making Option C the correct answer. Option D can be reduced from /objC/bin/../../java/Sort.java to /java/Sort.java, which matches the target path without using the symbolic link.",
  "B. We need to empty the /objC directory before we can delete it. First, the Heap.exe file would have to be deleted before the bin directory could be removed, for a total of two calls to Files.delete(). Next, the Heap.m file is easily deleted with a single call to Files.delete(). Calling Files.delete() on the symbolic link forward deletes the link itself and leaves the target of the symbolic link intact. With a total of four calls, Option B is the correct answer. Option A is incorrect because Java requires directories to be empty before they can be deleted. Option C is also incorrect. It might make sense if Files.delete() traversed symbolic links on a delete, but since this is not the case, it is an incorrect answer. Option D is incorrect because there is no Files.deleteSymbolicLink() method defined in the Java NIO.2 API.",
  "C. Since System.out is a PrintStream that inherits OutputStream and implements Closeable, line y1 compiles without issue. On the other hand, the Files.copy() does not compile because there is no overloaded version of Files.copy() that takes an OutputStream as the first parameter. For this reason, Option C is the correct answer. If the order of the arguments in the Files.copy() call was switched, then the code would compile and print the contents of the file at runtime, making Option D the correct answer.",
  "B. To begin with, the BasicFileAttributeView class contains methods to read and write file data, while the BasicFileAttributes class only contains methods to read file data. The advantage of using a BasicFileAttributeView is to also modify file data, so Option D is incorrect. Next, The BasicFileAttributeView does not include a method to modify the hidden attribute. Instead, a DosFileAttributeView is required, making Option A incorrect. Option B is the correct answer because BasicFileAttributeView includes a setTimes() method to modify the file date values. Finally, Option C is incorrect because both read file information in a single round-trip.",
  "A. Trick question! The code does not compile, therefore no Path values are printed, and Option A is the correct answer. The key here is that toRealPath() interacts with the file system and therefore throws a checked IOException. Since this checked exception is not handled inside the lambda expression, the class does not compile. If the lambda expression was fixed to handle the IOException, then the expected number of Path values printed would be six, and Option C would be the correct answer. A maxDepth value of 1 causes the walk() method to visit two total levels, the original /flower and the files it contains.",
  "D. The first statement returns a null value, since the path .. does not have a parent. That said, it does not throw an exception at runtime, since it is not operated upon. The second and third statements both return paths representing the root (/) at runtime. Remember that calling getRoot() on a root path returns the root path. The fourth statement throws a NullPointerException at runtime since getRoot() on a relative path returns null, with the call to getParent() triggering the exception. Since the fourth statement is the only one to produce a NullPointerException at runtime, Option D is the correct answer.",
  "C. The code compiles without issue, so Options A and B are incorrect. While many of the Files methods do throw IOException, most of the Path methods do not throw a checked exception. The lack of indent of the return statement on line 6 is intentional and does not prevent the class from compiling. If the input argument p is null or not an absolute path, then the if-then clause is skipped, and it is returned to the caller unchanged. Alternatively, if the input argument is an absolute path, then calling toAbsolutePath() has no effect. In both cases, the return value of the method matches the input argument, making Option C the correct answer.",
  "D. Option A is incorrect because both methods take exactly one Path parameter, along with an optional vararg of FileAttribute values. Option B is also incorrect because both methods will throw a FileAlreadyExistsException if the target exists and is a file. Option C is incorrect since both methods declare a checked IOException. The correct answer is Option D. The method createDirectory() creates a single directory, while createDirectories() may create many directories along the path value.",
  "C. The toAbsolutePath() combines the current working directory and relative path to form a /hail/../jungle/.././rain.. path. The normalize() method removes the path symbols and leaves a /rain.. value. Note that the last double period (..) is not removed because it is part of a path name and not interpreted as a path symbol. The result is then appended with snow.txt and we are left with /rain../snow.txt, making Option C the correct answer.",
  "A. The program compiles and runs without issue, so Options C and D are incorrect. The process breaks apart the inputted path value and then attempts to reconstitute it. There is only one problem. The method call getName(0) does not include the root element. This results in the repaired variable having a value of tissue/heart/chambers.txt, which is not equivalent to the original path. The program prints false, and Option A is the correct answer.",
  "B. Unlike Files.delete(), the Files.deleteIfExists() method does not throw an exception if the path does not exist, making Option B the correct answer. Options A, C, and D describe situations in which the Java process encounters a path in a state that cannot be deleted. In each of these situations, an exception would be thrown at runtime.",
  "D. The code does not compile because Path is an interface and does not contain a get() method. Since the first line contains a compilation error, Option D is the correct answer. If the code was corrected to use Paths.get(), then the output would be true false true, and Option B would be the correct answer. The normalized path of both is /desert/sand.doc, which means they would be equivalent, in terms of equals(), and point to the same path in the file system. On the other hand, the non-normalized values are not equivalent, in terms of equals(), since the objects represent distinct path values.",
  "C. First off, the Files.getFileAttributeView() method requires a reference to a subclass of FileAttributeView, such as BasicFileAttributeView.class. The parameter must also be compatible with the reference assignment to vw. For these two reasons, this line of code does not compile. Next, BasicFileAttributeView does not contain a creationTime() method, so vw.creationTime() results in a compilation error. For the exam, remember that view classes do contain access to attributes, but only through the readAttributes method, such as vw.readAttributes().creationTime(). Since these are the only two lines that contain compilation errors, Option C is the correct answer. Note that we purposely omitted all import statements in this question, since this may happen on the real exam.",
  "B. The program compiles and runs without issue, making Options C and D incorrect. The first variable, halleysComet, is created with normalize() being applied right away, leading to a value of stars/m1.meteor. The second variable, lexellsComet, starts with a value of ./stars/../solar/. The subpath() call reduces it to its first two components, ./stars. The resolve() method then appends m1.meteor, resulting in a value of ./stars/m1.meteor. Finally, normalize() further reduces the value to stars/m1.meteor. Since this matches our first Path, the program prints Same!, and Option B is the correct answer.",
  "D. Both stream statements compile without issue, making Options A and B incorrect. The two statements are equivalent to one another and print the same values at runtime. For this reason, Option C is incorrect, and Option D is correct. There are some subtle differences in the implementation besides one using walk() with a filter() and the other using find(). The walk() call does not include a depth limit, but since Integer.MAX_VALUE is the default value, the two calls are equivalent. Furthermore, the walk() statement prints a stream of absolute paths stored as String values, while the find() statement prints a stream of Path values. If the input p was a relative path, then these two calls would have very different results, but since we are told p is an absolute path, the application of toAbsolutePath() does not change the results.",
  "A. The code does not compile because Files.lines() and Files.readAllLines() throw a checked IOException, which must be handled or declared. For the exam, remember that other than a handful of test methods, like Files.exists(), most methods in the NIO.2 Files class that operate on file system records declare an IOException. Now, if the exceptions were properly handled or declared within the class, then jonReads() would likely take more time to run. Like all streams, Files.lines() loads the contents of the file in a lazy manner, meaning the time it takes for jenniferReads() to run is constant regardless of the file size. Note the stream isn’t actually traversed since there is no terminal operation. Alternatively, Files.readAllLines() reads the entire contents of the file before returning a list of String values. The larger the file, the longer it takes jonReads() to execute. Since the original question says the file is significantly large, then if the compilation problems were corrected, jonReads() would likely take longer to run, and Option C would be the correct answer.",
  "C. The first copy() method call on line q1 compiles without issue because it matches the signature of a copy() method in Files. It also does not throw an exception because the REPLACE_EXISTING option is used and we are told the file is fully accessible within the file system. On the other hand, the second copy() method on line q2 does not compile. There is a version of Files.copy() that takes an InputStream, followed by a Path and a list of copy options. Because BufferedReader does not inherit InputStream, though, there is no matching copy() method and the code does not compile. For this reason, Option C is the correct answer.",
  "C. The Files.isSameFile() throws a checked IOException. Even though accessing the file system can be skipped in some cases, such as if the Path instances are equivalent in terms of equals(), the method still declares IOException since it may access the file system to determine if the two Path instances refer to the same file. For this reason, Option C is the correct answer. The rest of the methods listed do not throw any checked exceptions, even though they do access the file system, instead returning false if the file does not exist.",
  "B. The program compiles and runs without issue, making Options C and D incorrect. The program uses Files.list() to iterate over all files within a single directory. For each file, it then iterates over the lines of the file and counts the sum. For this reason, Option B is the correct answer. If the count() method had used Files.walk() instead of Files.lines(), then the class would still compile and run, and Option A would be the correct answer. Note that we had to wrap Files.lines() in a try-catch block because using this method directly within a lambda expression without a try-catch block leads to a compilation error."
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
    answerArray: mapAnswers(qz["answers"], a19[index]),
    explain: a19[index]
  };
});
// window.quizs = quizs
quizs[21].imageUrl = "./images/image-ocp-ch19-22.png";
//   quizs[9].imageUrl = "./images/image-oca-ch1-10.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
