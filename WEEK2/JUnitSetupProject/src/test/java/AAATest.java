import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class AAATest {
    private int a;
    private int b;
    @Before
    public void setUp(){
        a = 4;
        b = 3;
        System.out.println("Setup: variables initialized");
    }

    @After
    public void tearDown(){
        System.out.println("Teardown: Test cleanup completed");
    }

    @Test
    public void testAddition(){
        int expected = 7;
        int res = a + b;
        assertEquals(expected, res);
    }

    @Test
    public void testSubtraction(){
        int expected = 1;
        int res = a - b;
        assertEquals(expected,res);
    }
}
