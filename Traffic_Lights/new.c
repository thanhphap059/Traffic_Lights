
// C function showing how to do time delay
#include <stdio.h>
// To use time library of C
#include <time.h>
#include <unistd.h>


  
// Driver code to test above function
int main()
{
    int i;
    for (i = 0; i < 10; i++) {
        // delay of one second
        sleep(2);
        printf("%d seconds have passed\n", i + 1);
    }
    return 0;
}