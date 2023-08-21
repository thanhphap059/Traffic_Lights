#include <mysql.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>



int main(void){
    // ket noi database
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;

    char *server = "localhost";
    char *user = "nt";
    char *password = "132001"; /* set me first */
    char *database = "final";

    conn = mysql_init(NULL);
    mysql_real_connect(conn,server,user,password,database,0,NULL,0); 
    // gui data xuong database
    int color = 1, time = 20;
    for (int i= 0; i<10; i++){
        color = 1 ; 
        time--;
        sleep(1);

        printf("color:%d,time:%d",color,time);
        char sql[200];
        sprintf(sql,"update traffic set color=%d,time=%d WHERE stt=1 ",color, time);
        
        
        // send SQL query 
        mysql_query(conn, sql);
    }
    
    mysql_close(conn);

    return 0;
}