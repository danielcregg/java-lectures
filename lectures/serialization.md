<!-- .slide: data-background-gradient="linear-gradient(to bottom, #002366, #000000)" -->
# <span class="custom-title">Java Serialization</span>

A Complete Guide to Object Serialization

<small>Understanding the Process of Converting Objects to Bytes</small>
<!-- .element: class="fragment fade-up" -->

---

## What is Serialization?

<div class="process-box fragment fade-up">

To **serialize** means to arrange something in a series (i.e., one after another)

</div>

<div class="process-box fragment fade-up">

Java serialization is a mechanism for converting an object into a series of bytes

</div>

<div class="process-box fragment fade-up">

These bytes can be:
* Stored in a file
* Stored in a database
* Stored in memory
* Transmitted across a network

</div>

---

## Serialization Process

<div class="mermaid">
graph LR
    A[Java Object] -->|Serializer| B[Stream of Bytes]
    B --> C[File Storage]
    B --> D[Database Storage]
    B --> E[Memory Storage]
    B --> F[Network Transfer]
    
    style A fill:#4CAF50
    style B fill:#2196F3
    style C fill:#FFC107
    style D fill:#F44336
    style E fill:#9C27B0
    style F fill:#00BCD4
</div>

---

## Deserialization

<div class="process-box">

The reverse process where bytes are converted back into objects

</div>

<div class="mermaid fragment fade-up">
graph LR
    A[File] -->|Read| B[Stream of Bytes]
    C[Database] -->|Read| B
    D[Memory] -->|Read| B
    B -->|Deserializer| E[Java Object]
    
    style A fill:#FFC107
    style B fill:#2196F3
    style C fill:#F44336
    style D fill:#9C27B0
    style E fill:#4CAF50
</div>

Also known as **unmarshalling**
<!-- .element: class="fragment fade-up" -->

---

## How to Implement Serialization

<div class="process-box">

1. Identify class to serialize <!-- .element: class="fragment fade-up" -->
2. Import java.io.Serializable <!-- .element: class="fragment fade-up" -->
3. Implement Serializable interface <!-- .element: class="fragment fade-up" -->
4. Create necessary objects <!-- .element: class="fragment fade-up" -->
5. Use ObjectOutputStream for serialization <!-- .element: class="fragment fade-up" -->
6. Use ObjectInputStream for deserialization <!-- .element: class="fragment fade-up" -->

</div>

---

## Complete Person Class Example

```java
package ie.atu.serialization;

import java.io.Serializable;

public class Person implements Serializable {
    // Explicit serialVersionUID
    private static final long serialVersionUID = 1L;
    
    // Instance Variables
    private String name;
    private int age;
    public static final String COMPANY_NAME = "Intel"; // Not serialized
    private transient String ppsn; // Not serialized
    
    // Constructor
    public Person(String name, int age, String ppsn) {
        this.name = name;
        this.age = age;
        this.ppsn = ppsn;
    }
    
    // Getters and setters (omitted for brevity)
    
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", ppsn='" + ppsn + '\'' +
                ", company='" + COMPANY_NAME + '\'' +
                '}';
    }
}
```

---

## Serialization Implementation

```java
// SERIALIZATION
try (FileOutputStream fos = new FileOutputStream("./resources/personByteFile.ser");
     ObjectOutputStream oos = new ObjectOutputStream(fos)) {
    
    // Create person object
    Person person = new Person("John Doe", 30, "827384773H");
    
    // Serialize and save to file
    oos.writeObject(person);
    System.out.println("Person object has been serialized!");
    
} catch (IOException ex) {
    ex.printStackTrace();
}
```

---

## Deserialization Implementation

```java
// DESERIALIZATION
try (FileInputStream fis = new FileInputStream("./resources/personByteFile.ser");
     ObjectInputStream ois = new ObjectInputStream(fis)) {
    
    // Read object from file
    Person restoredPerson = (Person) ois.readObject();
    
    System.out.println("Person object has been deserialized");
    System.out.println("Restored Person: " + restoredPerson);
    
} catch (IOException | ClassNotFoundException ex) {
    ex.printStackTrace();
}
```

---

## SerialVersionUID

<div class="concept-card">

A version number associated with each serializable class

</div>

<div class="warning-box fragment fade-up">

Used during deserialization to verify sender and receiver compatibility

</div>

```java
private static final long serialVersionUID = 42L; // Explicit declaration
```
<!-- .element: class="fragment fade-up" -->

* Must be static and final
* Type must be long
* Different UIDs result in InvalidClassException
<!-- .element: class="fragment fade-up" -->

---

## The transient Keyword

<div class="grid-2col">
<div>
<div class="concept-card">

### Purpose
* Marks fields to skip during serialization
* Useful for sensitive data
* Helps with temporary state

</div>
</div>
<div>

```java
public class Employee {
    private String name;
    private transient String ssn;
    private transient Logger logger;
    // These fields won't be serialized
}
```

</div>
</div>

---

## Important Considerations

<div class="warning-box">

* Only Serializable objects can be persisted <!-- .element: class="fragment fade-up" -->
* Parent class implementation passes to child classes <!-- .element: class="fragment fade-up" -->
* Static members are not serialized <!-- .element: class="fragment fade-up" -->
* Transient members are not serialized <!-- .element: class="fragment fade-up" -->
* Constructor is NOT called during deserialization <!-- .element: class="fragment fade-up" -->
* All object's member classes must be Serializable <!-- .element: class="fragment fade-up" -->

</div>

---

## Benefits of Serialization

<div class="process-box">

* Persist object state <!-- .element: class="fragment fade-up" -->
* Transfer objects across network <!-- .element: class="fragment fade-up" -->
* Platform independent <!-- .element: class="fragment fade-up" -->
* Deep copy of objects <!-- .element: class="fragment fade-up" -->
* Session management in web applications <!-- .element: class="fragment fade-up" -->

</div>

---
<!-- .slide: data-background-gradient="linear-gradient(to bottom, #000000, #002366)" -->

## Additional Resources

<div class="process-box">

* [Oracle Java Serialization Guide](https://www.oracle.com/technical-resources/articles/java/serializationapi.html)
* [GeeksForGeeks Tutorial](https://www.geeksforgeeks.org/serialization-in-java/)
* [TutorialsPoint Reference](https://www.tutorialspoint.com/java/java_serialization.htm)

</div>

---
<!-- .slide: data-background-gradient="linear-gradient(to bottom, #002366, #000000)" -->

## Questions?

<div class="fragment fade-up">
    <p>Thank you for your attention!</p>
    <medium>Feel free to ask any questions about Java Serialization</medium>
</div>