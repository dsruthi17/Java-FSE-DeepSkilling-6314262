package org.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MainTest {
    @Test
    public void testHelloMessage() {
        String expected = "Hello and welcome!";
        String actual = "Hello and welcome!";
        assertEquals(expected, actual);
//        assertEquals("Junit is working fine", "Junit is working fine");
    }
}
