const qzString = [
  {
    title:
      "How many of Connection, Driver, and DriverManager are JDBC interfaces included with the JDK?",
    code: null,
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title: "Which is found in the java.sql package?",
    code: null,
    answers: ["DerbyDriver", "MySqlDriver", "OracleDriver", "None of the above"]
  },
  {
    title: "What must be the first characters of a database URL?",
    code: null,
    answers: ["db,", "db:", "jdbc,", "jdbc:"]
  },
  {
    title: "Which is responsible for getting a connection to the database?",
    code: null,
    answers: ["Driver", "Connection", "Statement", "ResultSet"]
  },
  {
    title:
      "Which most accurately fills in the blanks in this sentence? With JDBC 3.0, the driver is__________ to contain a java.sql.Driver file, and the code getting a Connection is __________ to call Class.forName().",
    code: null,
    answers: [
      "allowed, allowed",
      "allowed, required",
      "required, allowed",
      "required, required"
    ]
  },
  {
    title: "Which of these obtains a Connection?",
    code: null,
    answers: [
      "Connection.getConnection(url)",
      "Driver.getConnection(url)",
      "DriverManager.getConnection(url)",
      "new Connection(url)"
    ]
  },
  {
    title:
      "Which method is overloaded to allow passing a username and password?",
    code: null,
    answers: [
      "forName()",
      "getConnection()",
      "getStatement()",
      "None of the above"
    ]
  },
  {
    title:
      "What is the name of a concrete class that implements Statement and is included in the core JDK?",
    code: null,
    answers: [
      "CallableStatement",
      "PreparedStatement",
      "StatementImpl",
      "None of the above"
    ]
  },
  {
    title:
      "How many of the following could be valid JDBC URL formats for an imaginary driver named magic and a database named box?",
    code: null,
    answers: ["None", "One", "Two", "Three"],
    ol: [
      "jdbc:magic:127.0.0.1:1234/box",
      "jdbc:magic:box",
      "jdbc:magic:@127.0.0.1:1234"
    ]
  },
  {
    title:
      "Which most accurately fills in the blanks in this sentence? With JDBC 4.0, the driver is__________ to contain a java.sql.Driver file, and the code getting a Connection is __________ to call Class.forName().",
    code: null,
    answers: [
      "allowed, allowed",
      "allowed, required",
      "required, allowed",
      "required, required"
    ]
  },
  {
    title:
      "Which pair of statements is true when requesting a ResultSet to be both scroll sensitive and updatable?",
    code: null,
    answers: ["I, III", "I, IV", "II, III", "II, IV"],
    ol: [
      "The scroll sensitive option is passed as a parameter before the updatable parameter.",
      "The updatable option is passed as a parameter before the scroll sensitive parameter.",
      "If these options are not available, the database driver returns a ResultSet with different options.",
      "If these options are not available, the database driver throws a SQLException."
    ]
  },
  {
    title:
      "Suppose the blue database exists and we are using a JDBC 4.0 driver. Which is the outcome of this code?",
    code:
      '<code>String url = "jdbc:derby:blue";</code>\n<code>Class.forName(url);</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement();</code>\n<code>   ResultSet rs = stmt.executeQuery("select count(*) from sky")) {</code>\n<code>   System.out.println(rs.getInt(1));</code>\n<code>}</code>',
    answers: [
      "It runs successfully and prints the number of rows in the sky table.",
      "It throws a ClassNotFoundException.",
      "It throws a SQLException.",
      "It does not compile."
    ]
  },
  {
    title:
      "Fill in the blanks: There are __________ ResultSet concurrency modes, and drivers are required to support __________.",
    code: null,
    answers: [
      "two, both",
      "two, one of them",
      "three, two of them",
      "three, all of them"
    ]
  },
  {
    title:
      "What is the output when run with a JDBC 4.0 driver if the clowns database exists and contains an empty clowns table?",
    code:
      '<code>String url = "jdbc:derby:clowns";</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>    Statement stmt = conn.createStatement();</code>\n<code>    ResultSet rs = stmt.executeQuery("select count(*) from clowns")) {</code>\n<code>&nbsp;</code>\n<code>    System.out.println(rs.getInt(1));</code>\n<code>}</code>',
    answers: [
      "0",
      "1",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Consider the three methods execute(), executeQuery(), and executeUpdate(). Fill in the blanks: __________ of these methods is/are allowed to run a DELETE SQL statement while __________ of these methods is/are allowed to run an UPDATE SQL statement.",
    code: null,
    answers: ["One, one", "One, two", "Two, one", "Two, two"]
  },
  {
    title:
      "Assuming the clowns database exists and contains one empty table named clowns, what is the output of the following when run using a JDBC 4.0 driver?",
    code:
      '<code>import java.sql.*;</code>\n<code>&nbsp;</code>\n<code>public class EmptyTable {</code>\n<code>   public static void main(String[] args) throws SQLException {  // s1</code>\n<code>      String url = "jdbc:derby:clowns";</code>\n<code>      try (Connection conn = new Connection(url);   // s2</code>\n<code>         Statement stmt = conn.createStatement();</code>\n<code>         ResultSet rs = stmt.executeQuery("select * from clowns")) {</code>\n<code>&nbsp;</code>\n<code>         if (rs.next())</code>\n<code>            System.out.println(rs.getString(1));</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code terminates successfully without any output.",
      "The code does not compile due to line s1.",
      "The code does not compile due to line s2.",
      "None of the above"
    ]
  },
  {
    title: "Which are valid ResultSet types?",
    code: null,
    answers: ["II", "I and II", "II and III", "None of the above"],
    ol: ["TYPE_BACKWARD_ONLY", "TYPE_FORWARD_ONLY", "TYPE_REVERSE_ONLY"]
  },
  {
    title:
      "Given the table books in the figure and a ResultSet created by running the following SQL statement, which option prints the value 379?",
    code: "<code>select * from cert where title = 'OCA'</code>",
    answers: [
      "System.out.println(rs.getInt(1));",
      "System.out.println(rs.getInt(2));",
      "System.out.println(rs.getInteger(1));",
      "System.out.println(rs.getInteger(2));"
    ]
  },
  {
    title:
      "Given the table books in the previous question and a ResultSet created by running this SQL statement, which option prints OCP?",
    code: "<code>select title from cert where num_pages &gt; 500</code>",
    answers: [
      "System.out.println(rs.getString());",
      'System.out.println(rs.getString("0"));',
      'System.out.println(rs.getString("1"));',
      'System.out.println(rs.getString("title"));'
    ]
  },
  {
    title:
      "Assume the database exists with all referenced table and column names. Which is a true statement when a JDBC 4.0 driver is used?",
    code:
      '<code>String url = "jdbc:derby:precipitation";</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement(</code>\n<code>       ResultSet.CONCUR_READ_ONLY,</code>\n<code>       ResultSet.TYPE_SCROLL_INSENSITIVE);</code>\n<code>   ResultSet rs = stmt.execute(       "select total from precip where type = \'rain\'")) {</code>\n<code>   System.out.println(rs.getString("total"));</code>\n<code>}</code>',
    answers: [
      "There is a compiler error on the line of code that creates the Statement.",
      "There is a compiler error on the line of code that creates the ResultSet.",
      "This code compiles and runs without error.",
      "This code throws a SQLException at runtime."
    ]
  },
  {
    title:
      "Which resources have their close() method called when this code runs?",
    code:
      '<code>public static void runQuery(Connection conn) throws SQLException{</code>\n<code>   try (Statement stmt = conn.createStatement()) {</code>\n<code>      ResultSet rs = stmt.executeQuery("select * from clowns");</code>\n<code>      rs.next();</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "No close() methods are called.",
      "Only  Statement",
      "Only Statement and Connection",
      "Only Statement and ResultSet"
    ]
  },
  {
    title: "Which statement is true about the JDBC core classes?",
    code: null,
    answers: [
      "Driver is an implementation of DriverManager.",
      "A general Connection implementation is included in the JDK.",
      "A Statement automatically starts in auto-commit mode.",
      "A ResultSet automatically starts pointing to the first row of data."
    ]
  },
  {
    title:
      "Which of the following is required in a database driver implementation?",
    code: null,
    answers: [
      "A file named jdbc.driver",
      "A file named java.sql.Driver",
      "At least one implementation of the Connection interface",
      "None of the above"
    ]
  },
  {
    title:
      "Given that the people table has 10 rows, what is the result of the following when using a driver that supports a scroll sensitive ResultSet?",
    code:
      '<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement(</code>\n<code>      ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);</code>\n<code>   ResultSet rs = stmt.executeQuery("select count(*) from people")) {</code>\n<code>   rs.next();</code>\n<code>   rs.absolute(0);                    // q1</code>\n<code>   System.out.print(rs.getInt(1));    // q2</code>\n<code>}</code>',
    answers: [
      "10",
      "The code does not compile.",
      "Line q1 throws a SQLException.",
      "Line q2 throws a SQLException."
    ]
  },
  {
    title:
      "Given a scrollable updatable ResultSet that contains the following, what does the code snippet output?",
    code:
      '<code>rs = stmt.executeQuery("select * from pens");</code>\n<code>rs.afterLast();</code>\n<code>rs.previous();</code>\n<code>rs.updateInt(2, 10);</code>\n<code>rs.updateRow();</code>\n<code>rs = stmt.executeQuery("select * from pens where color = \'red\'");</code>\n<code>while (rs.next())</code>\n<code>   System.out.println(rs.getInt(2));</code>',
    answers: [
      "0",
      "10",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Given a scrollable updatable ResultSet represented by the image in the previous question, what does the code snippet output?",
    code:
      '<code>rs = stmt.executeQuery("select * from pens");</code>\n<code>rs.afterLast();</code>\n<code>while(rs.prev())</code>\n<code>   rs.updateInt(2,0);</code>\n<code>rs = stmt.executeQuery("select * from pens where color = \'black\'");</code>\n<code>while (rs.next())</code>\n<code>   System.out.println(rs.getInt(2));</code>\n<code>&nbsp;</code>',
    answers: [
      "0",
      "20",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "How many rows are added to the colors table from running the following?",
    code:
      "<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement()) {</code>\n<code>&nbsp;</code>\n<code>   conn.setAutoCommit(false);</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('red')\");</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('blue')\");</code>\n<code>   conn.commit();</code>\n<code>   conn.setAutoCommit(true);</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('green')\");</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Which is true if the clowns database exists and contains an empty clowns table?",
    code:
      '<code>String url = "jdbc:derby:clowns";</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>    Statement stmt = conn.createStatement();</code>\n<code>    ResultSet rs = stmt.executeQuery("select count(*) from clowns")) {</code>\n<code>&nbsp;</code>\n<code><span epub:type="pagebreak" id="Page_365"></span>    rs.next();   // r1</code>\n<code>    System.out.println(rs.getInt(1));   // r2</code>\n<code>}</code>',
    answers: [
      "The code compiles and runs without error.",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime on line r1.",
      "The code compiles but throws an exception at runtime on line r2."
    ]
  },
  {
    title:
      "Suppose the ResultSet is scrollable and contains 10 rows with the values 1–10 respectively. What is the output of the following?",
    code:
      "<code>5:  rs.absolute(0);</code>\n<code>6:  rs.relative(5);</code>\n<code>7:  rs.relative(-10);</code>\n<code>8:  rs.relative(5);</code>\n<code>9:  System.out.print(rs.getInt(1));</code>",
    answers: [
      "4",
      "5",
      "The code does not compile.",
      "The code compiles but throws an exception at runtime."
    ]
  },
  {
    title:
      "Suppose the blue database does not exist and we are using a JDBC 4.0 driver. Which is the outcome of this code?",
    code:
      '<code>String url = "jdbc:derby:blue";</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement();</code>\n<code>   ResultSet rs = stmt.executeQuery("select count(*) from sky")) {</code>\n<code>   System.out.println(rs.getInt(1));</code>\n<code>}</code>',
    answers: [
      "It runs successfully and prints the number of rows in the sky table.",
      "It throws a ClassNotFoundException.",
      "It throws a SQLException.",
      "It does not compile."
    ]
  },
  {
    title:
      "What is the most likely outcome of this code if the people table is empty?",
    code:
      '<code>6:  Statement stmt = conn.createStatement();</code>\n<code>7:  ResultSet rs1 = stmt.executeQuery("select * from people");</code>\n<code>8:  ResultSet rs2 = stmt.executeQuery("select * from people");</code>\n<code>9:  System.out.println(rs1.next() + " " + rs2.next());</code>',
    answers: [
      "It prints false false.",
      "It prints true false.",
      "It does not terminate.",
      "It throws a SQLException."
    ]
  },
  {
    title:
      "How many rows are added to the colors table from running the following?",
    code:
      "<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement()) {</code>\n<code>&nbsp;</code>\n<code>   conn.setAutoCommit(false);</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('red')\");</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('blue')\");</code>\n<code>   conn.rollback();</code>\n<code>   conn.setAutoCommit(true);</code>\n<code>   stmt.executeUpdate(\"insert into colors values ('green')\");</code>\n<code>}</code>",
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Assuming the clowns database exists and contains one empty table named clowns, what is the output of the following when run using a JDBC 4.0 driver?",
    code:
      '<code>import java.sql.*;</code>\n<code>&nbsp;</code>\n<code>public class EmptyTable {</code>\n<code>   public static void main (String[] args) throws SQLException {  // s1</code>\n<code>      String url = "jdbc:derby:clowns";</code>\n<code>      try (Connection conn = DriverManager.getConnection(url);   // s2</code>\n<code>         Statement stmt = conn.createStatement();</code>\n<code>         ResultSet rs = stmt.executeQuery("select * from clowns")) {</code>\n<code>&nbsp;</code>\n<code>         if (rs.next())</code>\n<code>            System.out.println(rs.getString(1));</code>\n<code>      }</code>\n<code>   }</code>\n<code>}</code>',
    answers: [
      "The code terminates successfully without any output.",
      "The code does not compile due to line s1.",
      "The code does not compile due to line s2.",
      "None of the above"
    ]
  },
  {
    title:
      "Given the following code snippet and the table below, what is the output of the following when using a driver that supports a scroll sensitive ResultSet?",
    code:
      '<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement(</code>\n<code>      ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);</code>\n<code>   ResultSet rs = stmt.executeQuery(       "select * from people order by last_name asc")) {</code>\n<code>&nbsp;</code>\n<code>   rs.afterLast();</code>\n<code>   rs.next();</code>\n<code>   rs.next();</code>\n<code>   rs.previous();</code>\n<code>   rs.previous();</code>\n<code>   System.out.println(rs.getString(1));</code>\n<code>}</code>',
    answers: [
      "Janeice",
      "Elena",
      "Scott",
      "The code throws a SQLException at runtime."
    ]
  },
  {
    title:
      "Given the following code snippet and the table in question 34, what is the output of the following when using a driver that supports a scroll sensitive ResultSet?",
    code:
      '<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement(</code>\n<code>      ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);</code>\n<code><span epub:type="pagebreak" id="Page_367"></span>   ResultSet rs = stmt.executeQuery(      "select * from people order by last_name asc")) {</code>\n<code>&nbsp;</code>\n<code>   rs.absolute(-1);</code>\n<code>   System.out.print(rs.getString(1));</code>\n<code>   System.out.print(" ");</code>\n<code>   rs.absolute(1);</code>\n<code>   System.out.print(rs.getString(1));</code>\n<code>}</code>',
    answers: [
      "Jeanne Scott",
      "Scott Jeanne",
      "The code compiles, but the output is neither of these.",
      "The code throws a SQLException at runtime."
    ]
  },
  {
    title:
      "Given the following code snippet and the table in question 34, what is the output of the following?",
    code:
      '<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement();</code>\n<code>   ResultSet rs = stmt.executeQuery(       "select * from people order by last_name asc")) {</code>\n<code>   rs.next();</code>\n<code>   rs.next();</code>\n<code>   System.out.print(rs.getString(1));</code>\n<code>   System.out.print(" ");</code>\n<code>   rs.absolute(1);</code>\n<code>   System.out.print(rs.getString(1));</code>\n<code>}</code>',
    answers: [
      "Jeanne Scott",
      "Scott Jeanne",
      "The code compiles, but the output is neither of these.",
      "The code throws a SQLException at runtime."
    ]
  },
  {
    title:
      "Given that the people table has 10 rows, what is the result of the following when using a driver that supports a scroll sensitive Resultset?",
    code:
      '<code>String sql = "select count(*) from people";</code>\n<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement();</code>\n<code>   ResultSet rs = stmt.executeQuery(sql,</code>\n<code>      ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY)) {</code>\n<code>   rs.next();</code>\n<code>   rs.absolute(0);                    // q1</code>\n<code>   System.out.print(rs.getInt(1));    // q2</code>\n<code>}</code>',
    answers: [
      "10",
      "The code does not compile.",
      "Line q1 throws a SQLException.",
      "Line q2 throws a SQLException."
    ]
  },
  {
    title:
      "How many rows are added to the colors table from running the following?",
    code:
      '<code>try (Connection conn = DriverManager.getConnection(url);</code>\n<code>   Statement stmt = conn.createStatement()) {</code>\n<code>   conn.setAutoCommit(false);</code>\n<code>   stmt.executeUpdate("insert into colors values (\'red\')");</code>\n<code>   stmt.executeUpdate("insert into colors values (\'blue\')");</code>\n<code><span epub:type="pagebreak" id="Page_369"></span>   conn.rollback();</code>\n<code>   conn.setAutoCommit(true);</code>\n<code>   stmt.executeUpdate("insert into colors values (\'green\')");</code>\n<code>   conn.rollback();</code>\n<code>}</code>',
    answers: ["None", "One", "Two", "Three"]
  },
  {
    title:
      "Suppose the ResultSet is scrollable and contains 10 rows. How many times does the following print true?",
    code:
      "<code>16:  System.out.println(rs.absolute(-2));</code>\n<code>17:  System.out.println(rs.relative(-1));</code>\n<code>18:  System.out.println(rs.beforeFirst());</code>\n<code>19:  System.out.println(rs.relative(5));</code>",
    answers: ["Two", "Three", "Four", "None of the above"]
  },
  {
    title: "What is the correct order to close database resources?",
    code: null,
    answers: [
      "Connection then Statement then ResultSet",
      "ResultSet then Statement then Connection",
      "Statement then Connection then ResultSet",
      "Statement then ResultSet then Connection"
    ]
  }
];

const a21 = [
  "C. Connection is an interface for communicating with the database. Driver is tricky because you don’t write code that references it directly. However, you are still required to know it is a JDBC interface. DriverManager is used in JDBC code to get a Connection. However, it is a concrete class rather than an interface. Since Connection and Driver are JDBC interfaces, Option C is correct.",
  "D. Database-specific implementation classes are not in the java.sql package. The implementation classes are in database drivers and have package names that are specific to the database. Therefore, Option D is correct. The Driver interface is in the java.sql package. Note that these classes may or may not exist. You are not required to know the names of any database-specific classes, so the creators of the exam iare free to make up names.",
  "D. All JDBC URLs begin with the protocol jdbc followed by a colon as a delimiter. Option D is the only one that does both of these, making it the answer.",
  "A. The Driver interface is responsible for getting a connection to the database, making Option A the answer. The Connection interface is responsible for communication with the database but not making the initial connection. The Statement interface knows how to run the SQL query, and the ResultSet interface knows what was returned by a SELECT query.",
  "B. The requirement to include a java.sql.Driver file in the driver jar file was introduced in JDBC 4.0. A 3.0 driver is allowed, but not required, to include this file. JDBC 3.0 also requires a call to Class.forName(). As a result, Option B best fills in the blanks.",
  "C. Connection is an interface. Since interfaces do not have constructors, Option D is incorrect. The Connection class doesn’t have a static method to get a Connection either, making Option A incorrect. The Driver class is also an interface without static methods, making Option B incorrect. Option C is the answer because DriverManager is the class used in JDBC to get a Connection.",
  "B. The DriverManager.getConnection() method can be called with just a URL. It is also overloaded to take the URL, username, and password, making Option B correct.",
  "D. CallableStatement and PreparedStatement are interfaces that extend the Statement interface. You don’t need to know that for the exam. You do need to know that a database driver is required to provide the concrete implementation class of Statement rather than the JDK. This makes Option D correct. Note that while Derby is provided with Java, it is in a separate jar from the “main” JDK.",
  "C. A JDBC URL has three components separated by colons. All three of these URLs meet those criteria. For the data after the component, the database driver specifies the format. Depending on the driver, this might include an IP address and port. Regardless, it needs to include the database name or alias. I and II could both be valid formats because they mention the database box. However, III only has an IP address and port. It does not have a database name or alias. Therefore III is incorrect and Option C correct.",
  "C. The requirement to include a java.sql.Driver file in the driver jar was introduced in JDBC 4.0. A call to Class.forName() was made optional with JDBC 4.0. As a result, Option C best fills in the blanks.",
  "A. Scroll sensitive is a result set type parameter, and updatable is a concurrency mode. The result set type parameter is passed to createStatement() before the concurrency mode. If you request options that the database driver does not support, it downgrades to an option it does support rather than throwing an exception. Statements I and III are correct, making Option A the answer.",
  "B. JDBC 4.0 allows, but does not require, a call to the Class.forName() method. However, since it is in the code, it needs to be correct. This method is expecting a fully qualified class name of a database driver, not the JDBC URL. As a result, the Class.forName() method throws a ClassNotFoundException, and Option B is the answer.",
  "B. There are two ResultSet concurrency modes: CONCUR_READ_ONLY and CONCUR_UPDATABLE. All database drivers support read-only result sets, but not all support updatable ones. Therefore, Option B is correct.",
  "D. This code is missing a call to rs.next(). As a result, rs.getInt(1) throws a SQLException with the message Invalid cursor state – no current row. Therefore, Option D is the answer.",
  "D. The execute() method is allowed to run any type of SQL statements. The executeUpdate() method is allowed to run any type of the SQL statement that returns a row count rather than a ResultSet. Both DELETE AND UPDATE SQL statements are allowed to be run with either execute() or executeUpdate(). They are not allowed to be run with executeQuery() because they do not return a ResultSet. Therefore, Option D is the answer.",
  "C. Connection is an interface rather than a concrete class. Therefore, it does not have a constructor and line s2 does not compile. As a result, Option C is the answer. Option A would be the answer if the code new Connection() was changed to DriverManager.getConnection().",
  "A. There are three ResultSet type options: TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, and TYPE_SCROLL_SENSITIVE. Only one of these is in the list, making Option A correct.",
  "B. Unlike arrays, JDBC uses one-based indexes. Since num_pages is in the second column, the parameter needs to be 2, ruling out Options A and C. Further, there is not a method named getInteger() on the ResultSet interface, ruling out Option D. Since the proper method is getInt(), Option B is the answer.",
  "D. Option A does not compile because you have to pass a column index or column name to the method. Options B and C compile. However, there are not columns named 0 or 1. Since these column names don’t exist, the code would throw a SQLException at runtime. Option D is correct as it uses the proper column name.",
  "B. The parameters to createStatement() are backward. However, they still compile because both are of type int. This means the code to create the Statement does compile, and Option A is incorrect. Next comes the code to create the ResultSet. While both execute() and executeQuery() can run a SELECT SQL statement, they have different return types. Only executeQuery() can be used in this example. The code does not compile because the execute() method returns a boolean, and Option B is correct. If this was fixed, Option D would be the answer because rs.next() is never called.",
  "D. Since this code opens Statement using a try-with-resources, Statement gets closed automatically at the end of the block. Further, closing a Statement automatically closes a ResultSet created by it, making Option D the answer. Remember that you should close any resources you open in code you write.",
  "C. Option A is incorrect because Driver is an interface while DriverManager is a concrete class. The inverse isn’t true either; DriverManager doesn’t implement Driver. Option B is incorrect because the Connection implementation comes from the database driver jar. Option C is correct. You can turn off auto-commit mode, but it defaults to on. Option D is incorrect because you need to call rs.next() or an equivalent method to point to the first row.",
  "C. The requirement to include a java.sql.Driver file in the META-INF directory was introduced in JDBC 4.0. Older drivers are not required to provide it, making Option B incorrect. A file named jdbc.driver has never been a requirement. Option A is incorrect and is simply here to trick you. All drivers are required to implement the Connection interface, making Option C the answer.",
  "D. First, rs.next() moves the cursor to point to the first row, which contains the number 10. Line q1 moves the cursor to immediately before the first row. This is the same as the position it was in before callingrs.next() in the first place. It is a valid position but isn’t a row of data. Line q2 tries to retrieve the data at this position and throws a SQLException because there isn’t any data, making Option D the answer.",
  "B. This code shows how to properly update a ResultSet. Note that it calls updateRow() so the changes get applied in the database. This allows the SELECT query to see the changes and output 10. Option B is correct. Remember that unlike this code, you should always close a ResultSet when you open it in real code.",
  "C. There is no ResultSet method named prev(). Therefore, the code doesn’t compile, and Option C is correct. If prev() was changed to previous(), the answer would be Option B because updateRow() is never called. Remember that unlike this code, you should always close a ResultSet when you open it in real code.",
  "D. While the code turns off automatic committing, there is a commit() statement after the first two inserts that explicitly commits those to the database. Then automatic commit is turned back on and the third commit is made, making Option D the answer.",
  "A. The count(*) function in SQL always returns a number. In this case, it is the number zero. This means line r1 executes successfully because it positions the cursor at that row. Line r2 also executes successfully and prints 0, which is the value in the row. Since the code runs successfully, Option A is the answer.",
  "B. The cursor starts out at position zero, right before the first row. Line 6 moves the cursor to position five. Line 7 tries to move the cursor ten rows before that position which is row negative five. Since you can’t move back before row zero, the cursor is at row zero instead. Then line 8 moves the cursor forward five positions from row zero, leaving it at row five and making Option B the answer.",
  "C. JDBC 4.0 allows, but does not require, a call to the Class.forName() method. Since the database does not exist, DriverManager.getConnection() throws a SQLException, and Option C is the answer.",
  "D. When running a query on a Statement, Java closes any already open ResultSet objects. This means that rs1 is closed on line 8. Therefore, it throws a SQLException on line 9 because we are trying to call next() on a closed ResultSet, and Option D is correct.",
  "B. The code turns off automatic committing, so the inserts for red and blue are not immediately made. The rollback() statement actually prevents them from being committed. Then automatic commit is turned back on and one insert is made, making Option B the answer.",
  "A. This code correctly obtains a Connection and Statement. It then runs a query, getting back a ResultSet without any rows. The rs.next() call returns false, so nothing is printed, making Option A correct.",
  "B. Since the ResultSet type allows scrolling, the code does not throw a SQLException at runtime. Immediately after getting the ResultSet, the cursor is positioned at the end immediately after Scott’s row. The next two lines try to move forward one row. This has no effect since the cursor is already at the end. Then previous() moves the cursor to point to the last row, which is Scott’s row. The second previous() call moves the cursor up one more row to point to Elena’s row, making Option B the answer.",
  "B. When passing a negative number to absolute(), Java counts from the end instead of the beginning. The last row is Scott’s row, so the first print statement outputs Scott. When passing a positive number to absolute(), Java counts from the beginning, so Jeanne is output. Therefore, Option B is correct.",
  "D. When creating the Statement, the code doesn’t specify a result set type. This means it defaults to TYPE_FORWARD_ONLY. The absolute() method can only be called on scrollable result sets. The code throws a SQLException, making Option D the answer.",
  "B. This code does not compile because the ResultSet options need to be supplied when creating the Statement object rather than when executing the query. Since the code does not compile, Option B is correct.",
  "B. The code turns off automatic committing, so the inserts for red and blue are not immediately made. The rollback() statement says to prevent any changes made from occurring. This gets rid of red and blue. Then automatic commit is turned back on and the one insert for green is made. The final rollback has no effect since the commit was automatically made. Since there was one row added, Option B is the answer.",
  "D. Line 18 doesn’t compile because beforeFirst() has a void return type. Since the code doesn’t compile, it doesn’t print true at all, and Option D is correct. If line 18 called rs.beforeFirst() without trying to print the result, Option B would be the answer. All the other statements are valid and return true.",
  "B. When manually closing database resources, they should be closed in the reverse order from which they were opened. This means that the ResultSet object is closed before the Statement object and the Statement object is closed before the Connection object. This makes Option B the answer."
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
    answerArray: mapAnswers(qz["answers"], a21[index]),
    explain: a21[index],
    ol: qz["ol"]
  };
});
// window.quizs = quizs
quizs[17].imageUrl = "./images/image-ocp-ch21-18.png";
quizs[24].imageUrl = "./images/image-ocp-ch21-25.png";
quizs[33].imageUrl = "./images/image-ocp-ch21-34.png";

export default quizs;
