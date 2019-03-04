const qzString = [
  {
    title: "Which is not a locale?",
    code: null,
    answers: [
      "Cultural region",
      "Geographical region",
      "Political region",
      "Time zone region"
    ]
  },
  {
    title:
      "When localizing an application, which type of data varies in presentation depending on locale?",
    code: null,
    answers: ["Currencies", "Dates", "Both", "Neither"]
  },
  {
    title: "How do you find out the locale of the running program?",
    code: null,
    answers: [
      'Locale.get("default")',
      "Locale.get(Locale.DEFAULT)",
      "Locale.getDefault()",
      "None of the above"
    ]
  },
  {
    title:
      "If your application has all town names in a single file named strings.properties, what is the most specific process that has been implemented?",
    code: null,
    answers: [
      "Internationalization",
      "Localization",
      "Specialization",
      "Translation"
    ]
  },
  {
    title: "Which interfaces does Properties implement?",
    code: null,
    answers: ["III", "I and II", "I and III", "II and III"],
    ol: ["Hashtable", "HashMap", "Map"]
  },
  {
    title:
      "Which filename extension can hold a String property value in a resource bundle?",
    code: null,
    answers: [
      ".java",
      ".properties",
      "Both of the above",
      "Neither of the above"
    ]
  },
  {
    title:
      "How long will the effects of calling Locale.setDefault() be active assuming no other calls to that method are made?",
    code: null,
    answers: [
      "Until the end of the method",
      "Until the program exits",
      "Until the next reboot of the computer",
      "None of the above. It persists even past a reboot."
    ]
  },
  {
    title:
      "Given this properties file used to load the Properties object props and this code snippet, what is the output?",
    code:
      '<code>mystery=bag</code>\n<code>type=paper</code>\n<code>18:  System.out.print(props.getProperty("mystery"));</code>\n<code>19:  System.out.print(" ");</code>\n<code>20:  System.out.print(props.getProperty("more"));</code>',
    answers: [
      "bag",
      "bag null",
      "bag ?",
      "This code throws a runtime exception on line 20."
    ]
  },
  {
    title:
      "Fill in the blanks to complete the following code for a Java resource bundle.",
    code:
      "<code>public class Flights_en extends __________ {</code>\n<code>   protected Object[][] __________() {</code>\n<code>      return new Object[0][0];</code>\n<code>   }</code>\n<code>}</code>",
    answers: [
      "JavaResourceBundle, getContents",
      "JavaResourceBundle, getProperties",
      "ListResourceBundle, getContents",
      "ListResourceBundle, getProperties"
    ]
  },
  {
    title:
      "Which of the following shows a valid Locale format for the language Hindi and the country India?",
    code: null,
    answers: ["hi_IN", "HI_in", "in_HI", "IN_hi"]
  },
  {
    title:
      "If the key purple is in all four of these files, which file will the following code use for the resource bundle?",
    code:
      '<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Colors");</code>\n<code>rb.getString("purple");</code>',
    answers: [
      "Colors.class",
      "Colors.properties",
      "Colors_en_US.class",
      "Colors_en_US.properties"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>package counter;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class CountResource extends ListResourceBundle {</code>\n<code>   private int count = 0;</code>\n<code>&nbsp;</code>\n<code>   @Override</code>\n<code>   protected Object[][] getContents() {</code>\n<code>      return new Object[][] { { "count", count++ } };</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      ResourceBundle rb = ResourceBundle.getBundle("counter.CountResource");</code>\n<code>      System.out.println(rb.getObject("count") + " " + rb.getObject("count"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 0",
      "0 1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "Which of the following shows a valid Locale format?",
    code: null,
    answers: ["en", "US", "US_en", "None of the above"]
  },
  {
    title:
      "Which filename extension can define a LocalDateTime property value in a resource bundle?",
    code: null,
    answers: [
      ".java",
      ".properties",
      "Both of the above",
      "Neither of the above"
    ]
  },
  {
    title:
      "What happens if you run this code with no resource bundles available?",
    code:
      '<code>ResourceBundle rb = ResourceBundle.getBundle("ghost.None");</code>',
    answers: [
      "It creates a resource bundle with no key/value pairs.",
      "It runs without issue because the resource bundle is only searched for when getting the first key.",
      "It throws a MissingResourceException.",
      "None of the above"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>Map&lt;String, String&gt; map = new TreeMap&lt;&gt;();</code>\n<code>map.put("tool", "hammer");</code>\n<code>map.put("problem", "nail");</code>\n<code>&nbsp;</code>\n<code>Properties props = new Properties();      // p1</code>\n<code>map.forEach((k,v) -&gt; props.put(k,  v));   // p2</code>\n<code>&nbsp;</code>\n<code>String t = props.get("tool");             // p3</code>\n<code>String n = props.get("nail");</code>\n<code>System.out.println(t + " " + n);</code>',
    answers: [
      "hammer nail",
      "The code does not compile due to line p1.",
      "The code does not compile due to line p2.",
      "The code does not compile due to line p3."
    ]
  },
  {
    title:
      "Which filename extension can hold a LocalDateTime property key in a resource bundle?",
    code: null,
    answers: [
      ".java",
      ".properties",
      "Both of the above",
      "Neither of the above"
    ]
  },
  {
    title:
      "If the key purple is in all four of these files, which file will the following code use for the resource bundle?",
    code:
      '<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Colors");</code>\n<code>rb.getString("purple");</code>',
    answers: [
      "Colors_en.class",
      "Colors_en.properties",
      "Colors_US.class",
      "Colors_US.properties"
    ]
  },
  {
    title:
      "Fill in the blank so the code correctly compiles and creates a Locale.",
    code: "<code>Locale loc = Locale.____________________;</code>",
    answers: [
      'get("Italian")',
      "get(Locale.ITALIAN)",
      'getLocale("Italian")',
      "None of the above"
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>Map&lt;Object, Object&gt; map = new TreeMap&lt;&gt;();</code>\n<code>map.put("tool", "hammer");</code>\n<code>map.put("problem", "nail");</code>\n<code>&nbsp;</code>\n<code>Properties props = new Properties();      // p1</code>\n<code>map.forEach((k,v) -&gt; props.put(k,  v));   // p2</code>\n<code>&nbsp;</code>\n<code>String t = props.getProperty("tool");     // p3</code>\n<code>String n = props.getProperty("problem");</code>\n<code>System.out.println(t + " " + n);</code>',
    answers: [
      "hammer nail",
      "The code does not compile due to line p1.",
      "The code does not compile due to line p2.",
      "The code does not compile due to line p3."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   package keyboard;</code>\n<code>2:   import java.util.*;</code>\n<code>3:</code>\n<code>4:   public class Type {</code>\n<code>5:      protected Object[][] getContents() {</code>\n<code>6:         return new Object[][] { { "keys", new ArrayList&lt;String&gt;() }};</code>\n<code>7:      }</code>\n<code><span epub:type="pagebreak" id="Page_377"></span>8:      public static void main(String[] args) {</code>\n<code>9:         ResourceBundle rb = ResourceBundle.getBundle("keyboard.Type");</code>\n<code>10:        List&lt;String&gt; keys = (List) rb.getObject("keys");</code>\n<code>11:        keys.add("q");</code>\n<code>12:        keys.add("w");</code>\n<code>13:        keys.add("e");</code>\n<code>14:        keys.add("r");</code>\n<code>15:        keys.add("t");</code>\n<code>16:        keys.add("y");</code>\n<code>17:        System.out.println(((List) rb.getObject("keys")).size());</code>\n<code>18:     }</code>\n<code>19:  }</code>',
    answers: [
      "0",
      "6",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "How many lines does the following print out?",
    code:
      '<code>3:   Locale.setDefault(Locale.KOREAN);</code>\n<code>4:   System.out.println(Locale.getDefault());</code>\n<code>5:   Locale.setDefault(new Locale("en", "AU"));</code>\n<code>6:   System.out.println(Locale.getDefault());</code>\n<code>7:   Locale.setDefault(new Locale("EN"));</code>\n<code>8:   System.out.println(Locale.getDefault());</code>',
    answers: [
      "None; it does not compile.",
      "One followed by an exception",
      "Two followed by an exception",
      "All three"
    ]
  },
  {
    title:
      "Given this properties file used to load the Properties object props and this code snippet, what is the output?",
    code:
      '<code>mystery=bag</code>\n<code>type=paper</code>\n<code>&nbsp;</code>\n<code>18:  System.out.print(props.getProperty("mystery", "?"));</code>\n<code>19:  System.out.print(" ");</code>\n<code>20:  System.out.print(props.getProperty("more", "?"));</code>',
    answers: [
      "bag",
      "bag null",
      "bag ?",
      "This code throws a runtime exception on line 20."
    ]
  },
  {
    title:
      "Given the following four properties files, what does this code print?",
    code:
      '<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle(</code>\n<code>   "Cars", new Locale("fr", "FR"));</code>\n<code><span epub:type="pagebreak" id="Page_379"></span>System.out.println(rb.getString("country") + " "</code>\n<code>   + rb.getString("engine"));</code>',
    answers: [
      "France engine",
      "France moteur",
      "France null",
      "The code throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the four properties files in question 24, what does this code print?",
    code:
      '<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle(</code>\n<code>    "Cars", new Locale("fr", "CA"));</code>\n<code>System.out.println(rb.getString("engine") + " "</code>\n<code>    + rb.getString("horses"));</code>',
    answers: [
      "engine 241",
      "moteur 241",
      "moteur null",
      "The code throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the four properties files in question 24, what does this code print?",
    code:
      '<code>Locale.setDefault(new Locale("fr", "CA"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle(</code>\n<code>    "Cars", new Locale("en", "CA"));</code>\n<code>System.out.println(rb.getString("engine") + " "</code>\n<code>    + rb.getString("horses"));</code>',
    answers: [
      "engine 241",
      "moteur 241",
      "moteur null",
      "The code throws an exception at runtime."
    ]
  },
  {
    title: "Which statement about ListResourceBundle is true?",
    code: null,
    answers: [
      "A disadvantage over properties files is that you cannot create the value at runtime.",
      "Names-fr.java is a bad implementation class name.",
      "Values of type Integer are not allowed.",
      "None of the above"
    ]
  },
  {
    title:
      "If the key red is in all four of these files, which file will the following code use for the resource bundle?",
    code:
      '<code>Locale loc = new Locale("zh", "CN");</code>\n<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Colors", loc);</code>\n<code>rb.getString("red");</code>',
    answers: [
      "Colors_CN.properties",
      "Colors_en.properties",
      "Colors_US.properties",
      "Colors_zh.properties"
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>package counter;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class PropertyCounter extends ListResourceBundle {</code>\n<code>   private int count = 0;</code>\n<code>   @Override</code>\n<code>   protected Object[][] getContents() {</code>\n<code>      return new Object[][] {{ "count", new PropertyCounter() }};</code>\n<code>   }</code>\n<code>   public int getCount() {</code>\n<code>      return count++;</code>\n<code>   }</code>\n<code><span epub:type="pagebreak" id="Page_380"></span>   public static void main(String[] args) {</code>\n<code>      ResourceBundle rb = ResourceBundle.getBundle("counter.PropertyCounter");</code>\n<code>      PropertyCounter obj = (PropertyCounter) rb.getObject("count");</code>\n<code>      System.out.println(obj.getCount() + " " + obj.getCount());</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 0",
      "0 1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   package keyboard;</code>\n<code>2:   import java.util.*;</code>\n<code>3:</code>\n<code>4:   public class Type extends ListResourceBundle {</code>\n<code>5:      protected Object[][] getContents() {</code>\n<code>6:         return new Object[][] { { "keys", new ArrayList&lt;String&gt;() }};</code>\n<code>7:      }</code>\n<code>8:      public static void main(String[] args) {</code>\n<code>9:         ResourceBundle rb = ResourceBundle.getBundle("Type");</code>\n<code>10:        List&lt;String&gt; keys = (List) rb.getObject("keys");</code>\n<code>11:        keys.add("q");</code>\n<code>12:        keys.add("w");</code>\n<code>13:        keys.add("e");</code>\n<code>14:        keys.add("r");</code>\n<code>15:        keys.add("t");</code>\n<code>16:        keys.add("y");</code>\n<code>17:        System.out.println(((List) rb.getObject("keys")).size());</code>\n<code>18:     }</code>\n<code>19:  }</code>',
    answers: [
      "0",
      "6",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the following snippets of resource bundles from when we compiled the application, what is the result of the following?",
    code:
      '<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Buggy");</code>\n<code>System.out.println(rb.getString("wheels"));</code>',
    answers: ["null", "4", "6", "The code throws an exception at runtime."]
  },
  {
    title:
      "Given the snippets of resource bundles in question 31 from when we compiled the application, what is the result of the following?",
    code:
      '<code>Locale.setDefault(new Locale("en"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Buggy");</code>\n<code>System.out.println(rb.getString("color"));</code>',
    answers: [
      "null",
      "black",
      "white",
      "The code throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the snippets of resource bundles in question 31 from when we compiled the application, what is the result of the following?",
    code:
      '<code>Locale.setDefault(new Locale("zh"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Buggy");</code>\n<code>System.out.println(rb.getString("wheels"));</code>',
    answers: ["null", "4", "6", "The code throws an exception at runtime."]
  },
  {
    title:
      "If the key red is in all three of these files, which file will the following code use for the resource bundle?",
    code:
      '<code>Locale loc = new Locale("zh", "CN");</code>\n<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Colors", loc);</code>\n<code>rb.getString("red");</code>',
    answers: [
      "Colors_en.properties",
      "Colors.properties",
      "Red_en.properties",
      "None of the above. It will throw a MissingResourceException."
    ]
  },
  {
    title: "Which can fill in the blank in this code?",
    code:
      '<code>Properties props = new Properties();</code>\n<code>props.__________("x");</code>',
    answers: ["get", "getProperty", "Both of the above", "Neither of the above"]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>1:   package keyboard;</code>\n<code>2:   import java.util.*;</code>\n<code>3:</code>\n<code>4:   public class Type extends ListResourceBundle {</code>\n<code>5:      protected Object[][] getContents() {</code>\n<code>6:         return new Object[][] { { "keys", new ArrayList&lt;String&gt;() }};</code>\n<code>7:      }</code>\n<code>8:      public static void main(String[] args) {</code>\n<code>9:         ResourceBundle rb = ResourceBundle.getBundle("keyboard.Type");</code>\n<code>10:        List&lt;String&gt; keys = (List) rb.getObject("keys");</code>\n<code>11:        keys.add("q");</code>\n<code>12:        keys.add("w");</code>\n<code>13:        keys.add("e");</code>\n<code>14:        keys.add("r");</code>\n<code>15:        keys.add("t");</code>\n<code>16:        keys.add("y");</code>\n<code>17:        System.out.println(((List) rb.getObject("keys")).size());</code>\n<code>18:     }</code>\n<code>19:  }</code>',
    answers: [
      "0",
      "6",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title: "What is the result of the following?",
    code:
      '<code>Map&lt;String, String&gt; map = new TreeMap&lt;&gt;();</code>\n<code>map.put("tool", "hammer");</code>\n<code>map.put("problem", "nail");</code>\n<code>&nbsp;</code>\n<code>Property props = new Property();          // p1</code>\n<code>map.forEach((k,v) -&gt; props.put(k, v));    // p2</code>\n<code>&nbsp;</code>\n<code>String t = props.getProperty("tool");     // p3</code>\n<code>String n = props.getProperty("nail");</code>\n<code>System.out.println(t + " " + n);</code>',
    answers: [
      "hammer nail",
      "The code does not compile due to line p1.",
      "The code does not compile due to line p2.",
      "The code does not compile due to line p3."
    ]
  },
  {
    title: "What is the output of the following?",
    code:
      '<code>package counter;</code>\n<code>import java.util.*;</code>\n<code>&nbsp;</code>\n<code>public class CountResource extends ListResourceBundle {</code>\n<code>   private int count = 0;</code>\n<code>&nbsp;</code>\n<code>   @Override</code>\n<code>   protected Object[][] getContents() {</code>\n<code>      return new Object[][] { { "count", count++ } };</code>\n<code>   }</code>\n<code>   public static void main(String[] args) {</code>\n<code>      ResourceBundle rb = new ResourceBundle("counter.CountResource");</code>\n<code>      System.out.println(rb.getObject("count") + " " + rb.getObject("count"));</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "0 0",
      "0 1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given the following two properties files in the pod package, what does the following class output?",
    code:
      '<code>pod.container.properties</code>\n<code>name=generic</code>\n<code>number=2</code>\n<code>&nbsp;</code>\n<code>pod.container_en.properties</code>\n<code>name=Docker</code>\n<code>type=container</code>\n<code>&nbsp;</code>\n<code>package pod;</code>\n<code>import java.util.*;</code>\n<code>public class WhatKind {</code>\n<code>   public static void main(String[] args) {</code>\n<code>      Locale.setDefault(new Locale("en"));</code>\n<code>      ResourceBundle rb = ResourceBundle.getBundle("pod.container");</code>\n<code>      String name = rb.getString("name");</code>\n<code>      String type = rb.getString("type");</code>\n<code>      System.out.println(name + " " + type);   }</code>\n<code>}</code>',
    answers: [
      "Docker container",
      "generic container",
      "generic null",
      "None of the above"
    ]
  },
  {
    title:
      "If the key red is in all three of these files, which file will the following code use for the resource bundle?",
    code:
      '<code>Locale loc = new Locale("zh", "CN");</code>\n<code>Locale.setDefault(new Locale("en", "US"));</code>\n<code>ResourceBundle rb = ResourceBundle.getBundle("Colors", loc);</code>\n<code>rb.getString("red");</code>',
    answers: [
      "Colors_EN.properties",
      "Colors_ZH.properties",
      "Red_EN.properties",
      "None of the above. It will throw a MissingResourceException."
    ]
  }
];

const a22 = [
  "D. Oracle defines a locale as a geographical, political, or cultural region. Time zones often span multiple locales, so Option D is correct.",
  "C. Currencies vary in presentation by locale. For example, 9,000 and 9.000 both represent nine thousand, depending on the locale. Similarly, for dates, 01-02-1991 and 02-01-1991 represent January 2, 1991, depending on the locale. This makes Option C the answer.",
  "C. The Locale object provides getDefault() and setDefault() methods for working with the default locale, so Option C is correct. There is no get() method declared on Locale.",
  "A. Internationalization means the program is designed so it can be adapted for multiple languages. By extracting the town names, this is exactly what has happened here, making Option A correct. Localization means the program actually supports multiple locales. There’s no mention of multiple locales here, so Option B is incorrect. Similarly, there is no mention of multiple languages, making Option D incorrect. Finally, specialization is not a term relevant to properties, making Option C incorrect.",
  "A. The Properties class is a Map, making III correct. Hashtable and HashMap are concrete classes rather than interfaces, so I and II are incorrect. While a Properties object is a Hashtable, this is not an interface. Since only III is correct, Option A is the answer.",
  "C. Java supports properties file resource bundles and Java class resource bundles. Properties file resource bundles contain String keys and String values. Java class resource bundles contain String keys and any type of classes as values. Since both are valid, Option C is correct.",
  "B. Calling Locale.setDefault() changes the default locale within the program. It does not change any settings on the computer. The next time you run a Java program, it will have the original default locale rather than the one you changed it to.",
  "B. Line 18 prints the value for the property with the key mystery, which is bag. Line 19 prints a space. Line 20 doesn’t find the key more so it prints null. Therefore, it prints bag null, and Option B is correct.",
  "C. There is not a built-in class called JavaResourceBundle, making Options A and B incorrect. The ListResourceBundle class is used to programmatically create a resource bundle. It requires one method to be implemented named getContents(), making Option D incorrect and Option C correct. This method returns a 2D array of key/value pairs.",
  "A. When both a language and country code are present, the language code comes first. The language code is in all lowercase letters and the country code is in all uppercase.",
  "C. Java starts out by looking for a Java file with the most specific match, which is language and country code. Since this is happening at runtime, it is looking for the corresponding file with a .class extension. This matches Option C, making it the answer. If this file was not found, Java would then look for a .properties file with the name, which is Option D. If neither was found, it would continue dropping components of the name, eventually getting to Options A and B in that order.",
  "A. This class correctly creates a Java class resource bundle. It extends ListResourceBundle and creates a 2D array as the property contents. Since count is an int, it is autoboxed into an Integer. In the main() method, it gets the resource bundle without a locale and requests the count key. Since Integer is a Java Object, it calls getObject() to get the value. The value is not incremented each time because the getContents() method is only called once. Therefore, Option A is correct.",
  "A. A Locale can consist of a language only, making Option A correct. It cannot consist of a country code without a language, so Option B is incorrect. Finally, if both a language and country code are present, the language code is first, making Option C incorrect.",
  "A. Java supports properties file resource bundles and Java class resource bundles. Properties file resource bundles require String values, making Option B incorrect. Java class resource bundles allow any type of classes as values. Since the question asks about defining values, it is the .java source code rather than the .class bytecode file, making Option A the answer.",
  "C. At least one matching resource bundle must be available at the time of the call to getBundle(). While the requested key determines which of the resource bundles is used, at least one must exist simply to get the ResourceBundle reference, so Option C is the answer.",
  "D. The Properties class implements Map. While the get() method, inherited from the superclass, is available, it returns an Object. Since Object cannot be cast to String, it does not compile, and Option D is the answer.",
  "D. Java supports properties file resource bundles and Java class resource bundles. Both require String as the key format, so Option D is the answer.",
  "A. Java starts out by looking for a Java file with the most specific match, which is language and country code. Since there is no such matching file, it drops the country code and looks for a match by language code. Java looks for bytecode files before properties files. Therefore, Option A is the answer. If it wasn’t present, Option B would be the next choice. Options C and D would never be considered, as a locale doesn’t just have a country code.",
  "D. There is no get() method on Locale. You need to use a constructor or a predefined Locale constant to obtain a Locale object. Therefore, Option D is the correct answer. Option B is close in that Locale.ITALIAN does reference a Locale object. However, it should not be passed to the nonexistent get() method.",
  "A. This code creates a Map with two elements. Then it copies both key/value pairs to a Properties object. This works because a Properties object is also a Map and therefore has a put() method that takes Object parameters. Finally, the code gets the String property values of both keys and prints hammer nail. Therefore, Option A is correct.",
  "D. The code attempts to create a Java class resource bundle. However, the Type class does not extend ListResourceBundle. It compiles, but throws an exception on line 9 because no resource bundle is actually defined. Therefore, Option D is correct.",
  "D. This code compiles and runs without exception, making Option D the answer. Line 3 uses a predefined Locale constant. Line 5 passes a language and country code for English in Australia. Line 7 incorrectly passes capital letters as a language code. However, Java automatically converts it to lowercase without throwing an exception. The three lines printed by the code are ko, en_US and en.",
  "C. Line 18 prints the value for the property with key mystery, which is bag. Line 19 prints a space. Line 20 doesn’t find the key more so it uses the second parameter ? as the default value. The code prints bag ?, so Option C is correct.",
  "B. The getBundle() method matches Cars_fr_FR.properties since that is the requested locale. The country key is in that properties file directly, so France is used as the value. The engine key is not, so Java looks higher up in the hierarchy and finds it in the language-specific Cars_fr.properties file and uses moteur as the value. Therefore, Option B is correct. Note that the default locale isn’t used.",
  "D. The getBundle() method matches Cars_fr.properties. Since the requested locale of French Canada is not available, it uses the language-specific locale of French. The engine key is in that properties file directly, so moteur is retrieved as the value. However, we have a problem getting the horses key. It is not in the hierarchy of Cars_fr.properties. It is in the English properties file, but Java cannot look at the default locale if it found a match with the requested locale. As a result, the code throws a MissingResourceException, making Option D the answer.",
  "A. The getBundle() method matches Cars_en.properties. Since the requested locale of English Canada is not available, it uses the language-specific locale of English. The engine key is in that properties file directly, so engine is retrieved as the value. The horses key is also in that properties file, so 241 is used as the value, and Option A is the answer.",
  "B. A ListResourceBundle is a Java class that provides key/value pairs. The values can be any Java class type and can be created at runtime, making Options A and C false statements. When you want to provide a language-specific resource bundle, an underscore and the language code are added after the class name. Since Option B does not have an underscore, it is a false statement. Since all three statements are false, Option D is the answer.",
  "D. Since a Locale is passed when requesting the ResourceBundle, that Locale is used first when looking for bundles. Since there isn’t a bundle called Colors_zh_CN.properties, Java goes on to check for the language. Option D provides a match on language. If this was not found, Java would go on to the default locale, eventually matching Option B. Since country is not used without language, Options A and C would not be considered as options.",
  "B. This class correctly creates a Java class resource bundle. It extends ListResourceBundle and creates a 2D array as the property contents. In the main() method, it gets the resource bundle without a locale and requests the count key. Since this is a Java Object, it calls getObject() to get the value and casts it to the correct type. Then the getCount() method is called twice, incrementing each time, making Option B the correct answer. Note that having a mutable object as a property is a bad practice.",
  "D. Line 10 is incorrect. It tries to get a bundle named Type. However, this code is in a package and named keyboard.Type. Therefore, a MissingResourceException is thrown, and Option D is correct.",
  "B. Since no locale is specified, the code tries to find a bundle matching the default locale. While none of the resource bundles match English United States, two do match the language English. The Java class one is used since it is present. Since the Java resource bundle for English doesn’t have a key wheels, we go up to the parent resource bundle. The default Java resource bundle does have the key wheels with the value 4, so Option B is correct.",
  "D. Since no locale is specified, the code tries to find a bundle matching the default locale. Two resource bundles match the language English. The Java class one is used since it is present. However, it does not contain a key color, nor does its parent. Java does not allow looking in a properties file resource bundle once it has matched a Java class resource bundle. Therefore, it throws a MissingResourceBundleException, and Option D is the answer.",
  "B. Since no locale is specified, the code tries to find a bundle matching the default locale. None of the resource bundles match the language, so the default resource bundle is used. The default Java resource bundle is used since it is present and has the key wheels with the value 4. Therefore, Option B is correct.",
  "A. Since a locale is passed when requesting the ResourceBundle, that locale is used first when looking for bundles. Since there isn’t a bundle for that locale, Java checks for the language zh. There still isn’t a match, so Java goes on to check for the default locale. Still no match. Next Java checks the language of the default locale and finally finds a match in Option A. If that match wasn’t found, Java would match on Option B, which is the default bundle. Option C would never be checked since the base name is Red rather than the requested Color.",
  "C. A Properties object implements Map. This makes the get() method available. Properties also defined a getProperty() method. Therefore, both methods can fill in the blank, and Option C is correct.",
  "B. This code compiles and runs without issue. It creates a default Java class resource bundle. Lines 5 through 7 show it has one key and one ArrayList value. Line 9 gets a reference to the resource bundle. Lines 10 through 16 retrieve the ArrayList and add six values to it. Since this is a reference, line 17 gets the same object and prints the size of 6. Therefore, Option B is correct.",
  "B. The class on line p1 should be Properties rather than Property. As written it is incorrect and does not compile, making Option B the answer.",
  "C. ResourceBundle is an abstract class and uses a factory to obtain the right subclass. Since a call to the constructor new ResourceBundle() does not compile, Option C is the answer. If this was fixed, Option A would be the answer because getContents() is only called once.",
  "A. This code sets the default locale to English and then tries to get a resource bundle for container in the pod package. It finds the resource bundle pod.container_en.properties as the most specific match. Both keys are found in this file, so Option A is the answer.",
  "D. Option C is not a valid match for this resource bundle because the base name is Red rather than the requested Colors. Options A and B are not valid matches because they contain uppercase letters for the language code while Java requires lowercase. Since none match, Option D is correct, and the code throws an exception at runtime."
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
    answerArray: mapAnswers(qz["answers"], a22[index]),
    explain: a22[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[23].imageUrl = "./images/image-ocp-ch22-24.png";
quizs[30].imageUrl = "./images/image-ocp-ch22-31.png";
//   quizs[48].imageUrl = "./images/image-oca-ch1-49.png";

export default quizs;
