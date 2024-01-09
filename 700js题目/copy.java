import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class YourServiceTest {

    @Mock
    private NewSyncTaskService newSyncTaskService;

    @InjectMocks
    private YourService yourService; // Replace YourService with the actual class name

    @Test
    public void testSyncUcpPool() {
        // Mocking the behavior of newSyncTaskService.run
        Mockito.doNothing().when(newSyncTaskService)
               .run(Mockito.eq("UCP POOL"), Mockito.eq(false));

        // Call the method you want to test
        yourService.syncUcpPool();

        // Verify that newSyncTaskService.run was called with the expected arguments
        Mockito.verify(newSyncTaskService).run("UCP POOL", false);
    }
}
