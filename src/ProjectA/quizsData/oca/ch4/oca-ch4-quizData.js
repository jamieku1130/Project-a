const qzString = [
  {
    title: "What symbol is used for a varargs method parameter?",
    code: null,
    answers: ["..", "...", "--", "---"]
  },
  {
    title:
      "Fill in the blank in the following code to get the first element from the varargs parameter.",
    code:
      "<code>public void toss (Frisbee... f) {</code>\n<code>   Frisbee first = ____________;</code>\n<code>}</code>",
    answers: ["f", "f[0]", "f[1]", "None of the above"]
  },
  {
    title: "Which of the following are primitives?",
    code:
      "<code>int[] lowercase = new int[0];</code>\n<code>Integer[] uppercase = new Integer[0];</code>",
    answers: [
      "Only lowercase",
      "Only uppercase",
      "Bother lowercase and uppercase",
      "Neither lowercase nor uppercase"
    ]
  },
  {
    title: "How many of the following are legal declarations?",
    code:
      "<code>[]double lion;</code>\n<code>double[] tiger;</code>\n<code>double bear[];</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Given the following two methods, which method call will not compile?",
    code:
      "<code>public void printStormName(String... names) {</code>\n<code>   System.out.println(Arrays.toString(names));</code>\n<code>}</code>\n<code>public void printStormNames(String[] names) {</code>\n<code>   System.out.println(Arrays.toString(names));</code>\n<code>}</code>",
    answers: [
      'printStormName("Arlene");',
      'printStormName(new String[] { "Bret" });',
      'printStormNames("Cindy");',
      'printStormNames(new String[] { "Don" });'
    ]
  },
  {
    title: "How do you determine the number of elements in an array?",
    code: null,
    answers: ["buses.length", "buses.length()", "buses.size", "buses.size()"]
  },
  {
    title:
      "Which of the following create an empty two-dimensional array with dimensions 2×2?",
    code: null,
    answers: [
      "int[][] blue = new int[2, 2];",
      "int[][] blue = new int[2], [2];",
      "int[][] blue = new int[2][2];",
      "int[][] blue = new int[2 x 2];"
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>String[] days = new String[] { "Sunday", "Monday", "Tuesday",</code>\n<code>      "Wednesday", "Thursday", "Friday", "Saturday" };</code>\n<code>for (int i = 0; i &lt; days.length; i++)</code>\n<code>      System.out.println(days[i]);</code>',
    answers: [
      "Six",
      "Seven",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What are the names of the methods to do searching and sorting respectively on arrays?",
    code: null,
    answers: [
      "Arrays.binarySearch() and Arrays.linearSort()",
      "Arrays.binarySearch() and Arrays.sort()",
      "Arrays.search() and Arrays.linearSort()",
      "Arrays.search() and Arrays.sort()"
    ]
  },
  {
    title: "What does this code output?",
    code:
      '<code>String[] nums = new String[] { "1", "9", "10" };</code>\n<code>Arrays.sort(nums);</code>\n<code>System.out.println(Arrays.toString(nums));</code>',
    answers: ["[1, 9, 10]", "[1, 10, 9]", "[10, 1, 9]", "None of the above"]
  },
  {
    title:
      "Which of the following references the first and last element in a non-empty array?",
    code: null,
    answers: [
      "trains[0] and trains[trains.length]",
      "trains[0] and trains[trains.length - 1]",
      "trains[1] and trains[trains.length]",
      "trains[1] and trains[trains.length - 1]"
    ]
  },
  {
    title: "How many of the following are legal declarations?",
    code:
      '<code>String lion [] = new String[] {"lion"};</code>\n<code>String tiger [] = new String[1] {"tiger"};</code>\n<code>String bear [] = new String[] {};</code>\n<code>String ohMy [] = new String[0] {};</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "How many of the following are legal declarations?",
    code:
      "<code>float[] lion = new float[];</code>\n<code>float[] tiger = new float[1];</code>\n<code>float[] bear = new[] float;</code>\n<code>float[] ohMy = new[1] float;</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Which statement most accurately represents the relationship between searching and sorting with respect to the Arrays class?",
    code: null,
    answers: [
      "If the array is not sorted, calling Arrays.binarySearch() will be accurate, but slower than if it were sorted.",
      "The array does not need to be sorted before calling Arrays.binarySearch() to get an accurate result.",
      "The array must be sorted before calling Arrays.binarySearch() to get an accurate result.",
      "None of the above"
    ]
  },
  {
    title: "Which is not a true statement about an array?",
    code: null,
    answers: [
      "An array expands automatically when it is full.",
      "An array is allowed to contain duplicate values.",
      "An array understands the concept of ordered elements.",
      "An array uses a zero index to reference the first element."
    ]
  },
  {
    title: "Which line of code causes an ArrayIndexOutOfBoundsException?",
    code:
      '<code>String[][] matrix = new String[1][2];</code>\n<code>matrix[0][0] = "Don\'t think you are, know you are.";       // m1</code>\n<code>matrix[0][1] = "I\'m trying to free your mind Neo";         // m2</code>\n<code>matrix[1][0] = "Is all around you ";                       // m3</code>\n<code>matrix[1][1] = "Why oh why didn\'t I take the BLUE pill?";  // m4</code>',
    answers: ["m1", "m2", "m3", "m4"]
  },
  {
    title: "What does the following output?",
    code:
      '<code>String[] os = new String[] { "Mac", "Linux", "Windows" };</code>\n<code>Arrays.sort(os);</code>\n<code>System.out.println(Arrays.binarySearch(os, "Mac"));</code>',
    answers: ["0", "1", "2", "The output is not defined."]
  },
  {
    title:
      "Which is the first line to prevent this code from compiling and running without error?",
    code:
      "<code>char[][] ticTacToe = new char[3,3];                  // r1</code>\n<code>ticTacToe[1][3] = 'X';                               // r2</code>\n<code>ticTacToe[2][2] = 'X';</code>\n<code>ticTacToe[3][1] = 'X';</code>\n<code>System.out.println(ticTacToe.length + \" in a row!\"); // r3</code>",
    answers: ["Line r1", "Line r2", "Line r3", "None of the above"]
  },
  {
    title: "How many objects are created when running the following code?",
    code:
      "<code>Integer[] lotto = new Integer[4];</code>\n<code>lotto[0] = new Integer(1_000_000);</code>\n<code>lotto[1] = new Integer(999_999);</code>",
    answers: ["Two", "Three", "Four", "Five"]
  },
  {
    title: "How many of the following are legal declarations?",
    code:
      "<code>[][] String alpha;</code>\n<code>[] String beta;</code>\n<code>String[][] gamma;</code>\n<code>String[] delta[];</code>\n<code>String epsilon[][];</code>",
    answers: ["Two", "Three", "Four", "Five"]
  },
  {
    title:
      "Which of the options in the graphic best represent the blocks variable?",
    code:
      "<code>char[][] blocks = new char[][] { { 'a', 'b', 'c' }, { 'd' }, { 'e', 'f' } };</code>",
    answers: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
    title:
      "What happens when calling the following method with a non-null and non-empty array?",
    code:
      '<code>public static void addStationName(String[] names) {</code>\n<code>   names[names.length] = "Times Square";</code>\n<code>}</code>',
    answers: [
      "It adds an element to the array the value of which is Times Square.",
      "It replaces the last element in the array with the value Times Square.",
      "It does not compile.",
      "It throws an exception."
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>String[] days = new String[] { "Sunday", "Monday", "Tuesday",</code>\n<code>      "Wednesday", "Thursday", "Friday", "Saturday" };</code>\n<code>for (int i = 0; i &lt; days.size(); i++)</code>\n<code>      System.out.println(days[i]);</code>',
    answers: [
      "Six",
      "Seven",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many dimensions does the array reference moreBools allow?",
    code: "<code>boolean[][][] bools, moreBools;</code>",
    answers: [
      "One dimension",
      "Two dimensions",
      "Three dimensions",
      "None of the above"
    ]
  },
  {
    title: "What is a possible output of the following code?",
    code:
      "<code>String[] strings = new String[2];</code>\n<code>System.out.println(strings);</code>",
    answers: [
      "[null, null]",
      "[,]",
      "[Ljava.lang.String;@74a14482",
      "None of the above"
    ]
  },
  {
    title:
      "Which is the first line to prevent this code from compiling and running without error?",
    code:
      "<code>char[][] ticTacToe = new char[3][3];                 // r1</code>\n<code>ticTacToe[1][3] = 'X';                               // r2</code>\n<code>ticTacToe[2][2] = 'X';</code>\n<code>ticTacToe[3][1] = 'X';</code>\n<code>System.out.println(ticTacToe.length + \" in a row!\"); // r3</code>",
    answers: ["Line r1", "Line r2", "Line r3", "None of the above"]
  },
  {
    title: "What is the result of running the following as java Copier?",
    code:
      '<code>package duplicate;</code>\n<code>public class Copier {</code>\n<code>  public static void main(String... original) {</code>\n<code>      String... copy = original;</code>\n<code>      System.out.println(copy.length + " " + copy[0]);</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0",
      "0 followed by an exception",
      "1 followed by an exception",
      "The code does not compile."
    ]
  },
  {
    title: "What is the result of running the following program?",
    code:
      '<code>1:   package fun;</code>\n<code>2:   public class Sudoku {</code>\n<code>3:      static int[][] game = new int[6][6];</code>\n<code>4:</code>\n<code>5:      public static void main(String[] args) {</code>\n<code>6:         game[3][3] = 6;</code>\n<code>7:         Object[] obj = game;</code>\n<code>8:         obj[3] = "X";</code>\n<code>9:         System.out.println(game[3][3]);</code>\n<code>10:     }</code>\n<code>11:  }</code>',
    answers: [
      "X",
      "The code does not compile.",
      "The code compiles but throws a NullPointerException at runtime.",
      "The code compiles but throws a different exception at runtime."
    ]
  },
  {
    title: "What does the following output?",
    code:
      '<code>String[] os = new String[] { "Mac", "Linux", "Windows" };</code>\n<code>Arrays.sort(os);</code>\n<code>System.out.println(Arrays.binarySearch(os, "RedHat"));</code>',
    answers: ["-1", "-2", "-3", "The output is not defined."]
  },
  {
    title:
      "What is the output of the following when run as java FirstName Wolfie?",
    code:
      "<code>public class FirstName {</code>\n<code>   public static void main(String... names) {</code>\n<code>      System.out.println(names[0]);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "FirstName",
      "Wolfie",
      "The code throws an ArrayIndexOutOfBoundsException.",
      "The code throws a NullPointerException."
    ]
  },
  {
    title: "What is the output of the following when run as java Count 1 2?",
    code:
      "<code>public class Count {</code>\n<code>   public static void main(String target[]) {</code>\n<code>      System.out.println(target.length);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["0", "1", "2", "The code does not compile."]
  },
  {
    title:
      "What is the output of the following when run as java unix.EchoFirst seed flower?",
    code:
      '<code>package unix;</code>\n<code>import java.util.*;</code>\n<code>public class EchoFirst {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      String one = args[0];</code>\n<code>      Arrays.sort(args);</code>\n<code>      int result = Arrays.binarySearch(args, one);</code>\n<code><span epub:type="pagebreak" id="Page_58"></span>      System.out.println(result);</code>\n<code>  }</code>\n<code>}</code>',
    answers: [
      "0",
      "1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Which of these four array declarations produces a different array than the others?",
    code: null,
    answers: [
      "int[][] nums = new int[2][1];",
      "int[] nums[] = new int[2][1];",
      "int[] nums[] = new int[][] { { 0 }, { 0 } };",
      "int[] nums[] = new int[][] { { 0, 0 } };"
    ]
  },
  {
    title: 'How do you access the array element with the value of "z"?',
    code: null,
    answers: [
      'dimensions["three"][2]',
      'dimensions["three"][3]',
      "dimensions[2][2]",
      "dimensions[3][3]"
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>String[] days = new String[] { "Sunday", "Monday", "Tuesday",</code>\n<code>      "Wednesday", "Thursday", "Friday", "Saturday" };</code>\n<code>for (int i = 1; i &lt;= days.length; i++)</code>\n<code>      System.out.println(days[i]);</code>',
    answers: [
      "Six",
      "Seven",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "What is the output of the following when run as java FirstName Wolfie?",
    code:
      "<code>public class FirstName {</code>\n<code>   public static void main(String... names) {</code>\n<code>      System.out.println(names[1]);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "FirstName",
      "Wolfie",
      "The code throws an ArrayIndexOutOfBoundsException.",
      "The code throws a NullPointerException."
    ]
  },
  {
    title:
      "Which is the first line to prevent this code from compiling and running without error?",
    code:
      "<code>char[][] ticTacToe = new char[3][3];                 // r1</code>\n<code>ticTacToe[0][0] = 'X';                               // r2</code>\n<code>ticTacToe[1][1] = 'X';</code>\n<code>ticTacToe[2][2] = 'X';</code>\n<code>System.out.println(ticTacToe.length + \" in a row!\"); // r3</code>",
    answers: ["Line r1", "Line r2", "Line r3", "None of the above"]
  },
  {
    title: "What is the output of the following when run as java Count 1 2?",
    code:
      "<code>public class Count {</code>\n<code>   public static void main(String target[]) {</code>\n<code>      System.out.println(target.length());</code>\n<code>   }</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: ["0", "1", "2", "The code does not compile."]
  },
  {
    title: "How many dimensions does the array reference moreBools allow?",
    code: "<code>boolean[][] bools[], moreBools;</code>",
    answers: [
      "One dimension",
      "Two dimensions",
      "Three dimensions",
      "None of the above"
    ]
  },
  {
    title:
      "What is the result of the following when called as java counting.Binary?",
    code:
      "<code>package counting;</code>\n<code>import java.util.*;</code>\n<code>public class Binary {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String... args) {</code>\n<code>      Arrays.sort(args);</code>\n<code>      System.out.println(Arrays.toString(args));</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "null",
      "[]",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What does the following output?",
    code:
      '<code>String[] os = new String[] { "Mac", "Linux", "Windows" };</code>\n<code>System.out.println(Arrays.binarySearch(os, "Linux"));</code>',
    answers: ["0", "1", "2", "The output is not defined."]
  },
  {
    title: "What is the result of running the following program?",
    code:
      '<code>1:   package fun;</code>\n<code>2:   public class Sudoku {</code>\n<code>3:      static int[][] game;</code>\n<code>4:</code>\n<code>5:      public static void main(String[] args) {</code>\n<code>6:         game[3][3] = 6;</code>\n<code>7:         Object[] obj = game;</code>\n<code>8:         game[3][3] = "X";</code>\n<code>9:         System.out.println(game[3][3]);</code>\n<code>10:     }</code>\n<code>11:  }</code>',
    answers: [
      "X",
      "The code does not compile.",
      "The code compiles but throws a NullPointerException at runtime.",
      "The code compiles but throws a different exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>String[][] listing = new String[][] { { "Book" }, { "Game", "29.99" } };</code>\n<code>System.out.println(listing.length + " " + listing[0].length);</code>',
    answers: [
      "2 1",
      "2 2",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following when run as java FirstName?",
    code:
      "<code>public class FirstName {</code>\n<code>   public static void main(String[] names) {</code>\n<code>      System.out.println(names[0]);</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "FirstName",
      "The code does not compile.",
      "The code throws an ArrayIndexOutOfBoundsException.",
      "The code throws a NullPointerException."
    ]
  },
  {
    title: "How many lines does the following code output?",
    code:
      '<code>String[] days = new String[] { "Sunday", "Monday", "Tuesday",</code>\n<code>      "Wednesday", "Thursday", "Friday", "Saturday" };</code>\n<code>for (int i = 1; i &lt; days.length; i++)</code>\n<code>      System.out.println(days[i]);</code>',
    answers: [
      "Six",
      "Seven",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: 'What is the output of the following when run as java Count "1 2"?',
    code:
      "<code>public class Count {</code>\n<code>   public static void main(String target[]) {</code>\n<code>      System.out.println(target.length);</code>\n<code>   }</code>\n<code>}</code>",
    answers: ["0", "1", "2", "The code does not compile."]
  },
  {
    title: "What does the following output?",
    code:
      '<code>String[] os = new String[] { "Linux", "Mac", "Windows" };</code>\n<code>System.out.println(Arrays.binarySearch(os, "Linux"));</code>',
    answers: ["0", "1", "2", "The output is not defined."]
  },
  {
    title: "Which of the following statements are true? ",
    code: null,
    answers: ["I", "II", "Both I and II", "Neither I nor II"],
    ol: [
      "You can always change a method signature from call(String[] arg) to call(String... arg) without causing a compiler error in the calling code.",
      "You can always change a method signature from call(String... arg) to call(String[] arg) without causing a compiler error in the existing code."
    ]
  },
  {
    title:
      "Which of these four array references can point to an array that is different from the others?",
    code: null,
    answers: [
      "int[][][][] nums1a, nums1b;",
      "int[][][] nums2a[], nums2b;",
      "int[][] nums3a[][], nums3b[][];",
      "int[] nums4a[][][], numbs4b[][][];"
    ]
  },
  {
    title:
      "What is the output of the following when run as java unix.EchoFirst seed flower?",
    code:
      "<code>package unix;</code>\n<code>import java.util.*;</code>\n<code>public class EchoFirst {</code>\n<code>&nbsp;</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Arrays.sort(args);</code>\n<code>      String result = Arrays.binarySearch(args, args[0]);</code>\n<code>      System.out.println(result);</code>\n<code>  }</code>\n<code>}</code>\n<code>&nbsp;</code>",
    answers: [
      "0",
      "1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  }
];

const a4 = [
  "B. Three dots (...) are the syntax for a method parameter of type varargs. It is treated like an array.",
  "B. Array indexes are zero based in Java. A varargs parameter is simply another way of passing in data to a method. From within the method, it is treated just like you had written Frisbee[] f as the method parameter. Therefore, the first element uses the 0th index, and Option B is correct.",
  "D. Trick question! While int is a primitive, all arrays are objects. One way to tell is that an array has a public instance variable called length. Another way is that you can assign it a variable of type Object. Therefore, Option D is correct.",
  "C. The array braces are allowed to appear before or after the variable name, making the tiger and bear declarations correct. The braces are not allowed to appear before the type making the lion declaration incorrect. Therefore, Option C is correct.",
  "C. From within a method, an array or varargs parameter is treated the same. However, there is a difference from the caller’s point of view. A varargs parameter can receive either an array or individual values, making Options A and B compile. However, an array parameter can only take an array, which prevents Option C from compiling.",
  "A. Arrays use the length variable to determine the number of elements, making Option A correct. For an ArrayList, Option D would have been the answer.",
  "C. A two-dimensional array is declared by listing both sizes in separate pairs of braces. Option C correctly shows this syntax.",
  "B. There is nothing wrong with this code. It correctly creates a seven-element array. The loop starts with index 0 and ends with index 6. Each line is correctly output. Therefore, Option B is correct.",
  "B. Sorry. This is just something you have to memorize. The sort() and binarySearch() methods do sorting and searching, respectively.",
  "B. The elements of the array are of type String rather than int. Therefore, we use alphabetical order when sorting. The character 1 sorts before the character 9, alphabetically making Option A incorrect. Shorter strings sort before longer strings when all the other characters are the same, making Option B the answer.",
  "B. Array indices start with 0, making Options C and D incorrect. The length attribute refers to the number of elements in an array. It is one past the last valid array index. Therefore, Option B is correct.",
  "C. When using an array initializer, you are not allowed to specify the size separately. The size is inferred from the number of elements listed. Therefore, tiger and ohMy are incorrect. When you’re not using an array initializer, the size is required. An empty array initializer is allowed. Option C is correct because lion and bear are legal.",
  "B. Since no elements are being provided when creating the arrays, a size is required. Therefore, lion and bear are incorrect. The braces containing the size are required to be after the type, making ohMy incorrect. The only one that is correct is tiger, making the correct answer Option B.",
  "C. The binarySearch() method requires a sorted array in order to return a correct result. If the array is not sorted, the results of a binary search are undefined.",
  "A. An ArrayList expands automatically when it is full. An array does not, making Option A the answer. The other three statements are true of both an array and an ArrayList.",
  "C. This code creates a two-dimensional array of size 1×2. Lines m1 and m2 assign values to both elements in the outer array. Line m3 attempts to reference the second element of the outer array. Since there is no such position, it throws an exception, and Option C is correct.",
  'B. The code sorts before calling binarySearch(), so it meets the precondition for that method. The target string of "Mac" is the second element in the sorted array. Since array indices begin with zero, the second position is index 1, and Option B is correct.',
  "A. A multi-dimensional array is created with multiple sets of size parameters. The first line should be char[] ticTacToe = new char[3][3];. Therefore, Option A is the answer.",
  "B. The first line creates one object; the array itself. While there are four references to null in that array, none of those are objects. The second line creates one object and points one of the array references to it. So far there are two objects: the array itself and one object it is referencing. The third line does the same, bringing up the object count to three. Therefore, Option B is correct.",
  "B. As with a one-dimensional array, the braces must be after the type, making alpha and beta illegal declarations. For a multi-dimensional array, the braces are allowed to be before and/or after the variable name. They do not need to be in the same place. Therefore, the remaining three are correct, and Option B is correct.",
  "B. Options A, C and D represent 3x3 2D arrays. Option B best represents the array in the code. It shows there are three different arrays of different lengths.",
  "D. names.length is the number of elements in the array. The last valid index in the array is one less than names.length. In Java, arrays do not resize automatically. Therefore, the code throws an ArrayIndexOutOfBoundsException.",
  "C. The code days.size() would be correct if this was an ArrayList. Since it is an array, days.length is the correct code. Therefore, the code does not compile, and Option C is the answer.",
  "C. Since the braces in the declaration are before the variable names, the variable type boolean[][][] applies to both variables. Therefore, both bools and moreBools can reference a 3D array.",
  "C. Calling toString() on an array doesn’t output the contents of the array, making Option C correct. If you wanted Option A to be the answer, you’d have to call Arrays.toString(strings).",
  "B. Arrays begin with an index of 0. This array is a 3×3 array. Therefore. only indexes 0, 1. and 2 are valid. Line r2 throws an ArrayIndexOutOfBoundsException. Therefore. Option B is correct.",
  "D. Three dots in a row is a varargs parameter. While varargs is used like an array from within the method, it can only be used as a method parameter. This syntax is not allowed for a variable, making Option D the answer.",
  "D. Line 6 assigns an int to a cell in a 2D array. This is fine. Line 7 casts to a general Object[]. This is dangerous, but legal. Why is it dangerous, you ask? That brings us to line 8. The compiler can’t protect us from assigning a String to the int[] because the reference is more generic. Therefore, line 8 throws an ArrayStoreException because the type is incorrect, and Option D is correct. You couldn’t have assigned an int on line 8 either because obj[3] is really an int[] behind the scenes and not an int.",
  'C. The code sorts before calling binarySearch, so it meets the precondition for that method. The target string of "RedHat" is not found in the sorted array. If it was found, it would be between the second and third element. The rule is to take the negative index of where it would be inserted and subtract 1. It would need to be inserted as the third element. Since indexes are zero based, this is index 2. We take the negative, which is -2, and subtract 1, giving -3. Therefore, Option C is correct.',
  "B. Array indexes begin with zero. FirstName is the name of the class, not an argument. Therefore, the first argument is Wolfie, and Option B is correct.",
  "C. The name of the program is Count and there are two arguments. Therefore, the program outputs 2, and Option C is correct.",
  "B. This class is called with two arguments. The first one (seed) is stored in the variable one. Then the array is sorted, meeting the precondition for binary search. Binary search returns 1 because seed is the second element in the sorted array, and Java uses zero-based indexes. Option B is correct.",
  "D. Options A and B show the braces can be before or after the variable name and produce the same array. Option C specifies the same array the long way with two arrays of length 1. Option D is the answer because it is different than the others. It instead specifies an array of length 1 where that element is of length 2.",
  "C. Arrays are indexed using numbers, not strings, making Options A and B incorrect. Since array indexes are zero based, Option C is the answer.",
  "D. In Java, arrays are indexed starting with 0. While it is unusual for the loop to start with 1, this does not cause an error. What does cause an error is the loop ending at data.length, because the <= operator is used instead of the < operator. The last loop index is 6, not 7. On the last iteration of the loop, the code throws an ArrayIndexOutOfBoundsException. Therefore, Option D is correct.",
  "C. Array indexes begin with zero. FirstName is the name of the class, not an argument. The first and only argument is Wolfie. There is not a second argument, so Option C is correct.",
  "D. This code is correct. Line r1 correctly creates a 2D array. The next three lines correctly assign a value to an array element. Line r3 correctly outputs 3 in a row!",
  "D. Arrays expose a length variable. They do not have a length() method. Therefore, the code does not compile, and Option D is correct.",
  "B. This one is tricky since the array braces are split up. This means that bools is a 3D array reference. The braces both before and after the variable name count. For moreBools, it is only a 2D array reference because there are only two pairs of braces next to the type. In other words, boolean[][] applies to both variables. Then bools gets another dimension from the braces right after the variable name. However, moreBools stays at 2D, making Option B correct.",
  "B. Since no arguments are passed from the command line, this creates an empty array. Sorting an empty array is valid and results in an empty array. Therefore, Option B is correct.",
  "D. Java requires having a sorted array before calling binarySearch. Since the array is not sorted, the result is undefined, and Option D is correct. It may happen that you get 1 as the result, but this behavior is not guaranteed. You need to know for the exam that this is undefined even if you happen to get the “right” answer.",
  "B. Line 8 attempts to store a String in an array meant for an int. Line 8 does not compile, and Option B is correct. ",
  "A. This array has two elements, making listing.length output 2. While each array element does not have the same size, this does not matter because we are only looking at the first element. The first element has one. This makes the answer Option A.",
  "C. FirstName is the name of the class, not an argument. There are no other arguments, so names is an empty array. Therefore, Option C is correct.",
  "A. In Java, arrays are indexed starting with 0. While it is unusual for the loop to start with 1, this does not cause an error. It does cause the code to output six lines instead of seven since the loop doesn’t cover the first array element. Therefore, Option A is correct.",
  "B. The name of the program is Count, and there is only one argument because double quotes are used around the value. That argument is a String with three characters: 1, a space, and 2. Therefore, the program outputs 1, and Option B is correct.",
  'A. Java requires having a sorted array before calling binarySearch(). You do not have to call Arrays.sort to perform the sort though. This array happens to already be sorted, so it meets the precondition. The target string of "Linux" is the first element in the array. Since Java uses zero-based indexing, the answer is Option A.',
  "A. From within a method, an array parameter and a varargs parameter are treated the same. From the caller, an array parameter is more restrictive. Both types can receive an array. However, only a varargs parameter is allowed to automatically turn individual parameters into an array. Therefore, statement I is correct and the answer is Option A.",
  "B. All of the variables except nums2b point to a 4D array. Don’t create a 4D array; it’s confusing. The options show the braces can be before or after the variable in any combination. Option B is the answer because nums2b points to a 3D array. It only has three pairs of braces before the variable and none after. By comparison, nums2a has three pairs of braces before the variable and the fourth pair of braces after.",
  "C. Binary search returns an int representing the index of a match or where a match would be. An int cannot be stored in a String variable. Therefore, the code does not compile and the answer is Option C."
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
    answerArray: mapAnswers(qz["answers"], a4[index]),
    explain: a4[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[20].imageUrl = "./images/image-oca-ch4-21.png";
quizs[33].imageUrl = "./images/image-oca-ch4-34.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
