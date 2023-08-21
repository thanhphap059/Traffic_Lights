//192.168.1.21
#include <mysql.h>
#include <math.h>
#include <wiringPi.h>
#include <stdio.h>
#include <stdlib.h>
int color, color1, color2;
int data,data1,data2,chance;
int time,time1,time2;

#define BUTTON 40
#define gt1_RED 11
#define gt1_YELLOW 12
#define gt1_GREEN 13
#define gt2_RED 29
#define gt2_YELLOW 31
#define gt2_GREEN 32
#define gt3_RED 33
#define gt3_YELLOW 35
#define gt3_GREEN 36

int main(void)
{
    // ket noi database
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;
//172.20.10.2
   char *server = "192.168.1.21";
   char *user = "nt";
   char *password = "132001"; /* set me first */
   char *database = "final";
//Interrup
while(1)
{
    conn = mysql_init(NULL);
    mysql_real_connect(conn,server,user,password,database,0,NULL,0); 
    // doc  data tu database
    mysql_query(conn, "select * from traffic");
    res = mysql_store_result(conn); // luu data vao bien res
    int num_column = mysql_num_fields(res);  // luu so cot table vao bien num_column
      //setup wiringPi
  wiringPiSetupPhys();
    pinMode(BUTTON,  INPUT);
    pinMode(gt1_RED, OUTPUT);
    pinMode(gt1_YELLOW, OUTPUT);
    pinMode(gt1_GREEN,OUTPUT);
    pinMode(gt2_RED, OUTPUT);
    pinMode(gt2_YELLOW, OUTPUT);
    pinMode(gt2_GREEN,OUTPUT);
    pinMode(gt3_RED, OUTPUT);
    pinMode(gt3_YELLOW, OUTPUT);
    pinMode(gt3_GREEN,OUTPUT);

    row = mysql_fetch_row(res);
    int colorlight = atoi(row[1]);
    data = atoi(row[2]);
    chance = atoi(row[3]);

    row = mysql_fetch_row(res);
    int colorlight1 = atoi(row[1]);
    data1 = atoi(row[2]);

    row = mysql_fetch_row(res);
    int colorlight2 = atoi(row[1]);
    data2 = atoi(row[2]);

if(chance ==1)
    {
        if(colorlight==1)
        {
        digitalWrite(gt1_RED,HIGH);
        digitalWrite(gt1_GREEN, LOW);
        digitalWrite(gt1_YELLOW,LOW);
        }
        if(colorlight==2)
        {
        digitalWrite(gt1_RED,LOW);
        digitalWrite(gt1_GREEN, LOW);
        digitalWrite(gt1_YELLOW,HIGH);   
        }
        if(colorlight==3)
        {
        digitalWrite(gt1_RED,LOW);
        digitalWrite(gt1_GREEN, HIGH);
        digitalWrite(gt1_YELLOW,LOW);     
        }
        if(colorlight==4)
        {
        digitalWrite(gt1_RED,LOW);
        digitalWrite(gt1_GREEN, LOW);
        digitalWrite(gt1_YELLOW,LOW);       
        }
        if(colorlight1==1)
        {
        digitalWrite(gt2_RED,HIGH);
        digitalWrite(gt2_GREEN, LOW);
        digitalWrite(gt2_YELLOW,LOW);
        }
        if(colorlight1==2)
        {
        digitalWrite(gt2_RED,LOW);
        digitalWrite(gt2_GREEN, LOW);
        digitalWrite(gt2_YELLOW,HIGH);   
        }
        if(colorlight1==3)
        {
        digitalWrite(gt2_RED,LOW);
        digitalWrite(gt2_GREEN, HIGH);
        digitalWrite(gt2_YELLOW,LOW);     
        }
        if(colorlight1==4)
        {
        digitalWrite(gt2_RED,LOW);
        digitalWrite(gt2_GREEN, LOW);
        digitalWrite(gt2_YELLOW,LOW);       
        }

        if(colorlight2==1)
        {
        digitalWrite(gt3_RED,HIGH);
        digitalWrite(gt3_GREEN, LOW);
        digitalWrite(gt3_YELLOW,LOW);   
        }
        if(colorlight2==2)
        {
        digitalWrite(gt3_RED,LOW);
        digitalWrite(gt3_GREEN, LOW);
        digitalWrite(gt3_YELLOW,HIGH);   
        }
        if(colorlight2==3)
        {
        digitalWrite(gt3_RED,LOW);
        digitalWrite(gt3_GREEN, HIGH);
        digitalWrite(gt3_YELLOW,LOW);     
        }
        if(colorlight2==4)
        {
        digitalWrite(gt3_RED,LOW);
        digitalWrite(gt3_GREEN, LOW);
        digitalWrite(gt3_YELLOW,LOW);       
        }
    }
//auto mode

else if(chance == 0)
    {
        //get data 1
        time = data;
        int count = data;
        int realtime = count/2;
        // get data 2
        time1 = data1;
        int count1 = data1;
        int realtime1 = count1/2;
        // get data 3
        time2 = data2;
        int count2 = data2;
        int realtime2 = count2/2;
        for (int i = 10000; i>0; i--)
        {
            // Traffic light 1
            if(time <= count && time > count/2)
            {
            if(realtime==0) realtime =count/2;
            color = 1 ;
            realtime--; 
            digitalWrite(gt1_RED,HIGH);
            digitalWrite(gt1_GREEN, LOW);
            digitalWrite(gt1_YELLOW,LOW);
            }
            else if(time < count && time > (count/2 -1))
            {
            digitalWrite(gt1_RED, LOW);
            digitalWrite(gt1_GREEN, LOW);
            digitalWrite(gt1_YELLOW,HIGH);
            realtime =1;
            color = 2;
            realtime--;

            }
            else if(time <= count/2 && time>0)
            {
            if(realtime==0) realtime =count/2;
            color = 3;
            realtime--;
            digitalWrite(gt1_RED, LOW);
            digitalWrite(gt1_GREEN, HIGH);
            digitalWrite(gt1_YELLOW,LOW);
            }
            time--;
            if(time==0) time=data;



            //Traffic light 2
            if(time1 <= count1 && time1 > count1/2)
            {
            if(realtime1==0) realtime1 =count1/2;
            color1 = 1 ;
            realtime1--;
            digitalWrite(gt2_RED, HIGH);
            digitalWrite(gt2_GREEN, LOW);
            digitalWrite(gt2_YELLOW,LOW); 
            }
            else if(time1 < count1 && time1 > (count1/2 -1))
            {
            realtime1 =1;
            color1 = 2;
            realtime1--;
            digitalWrite(gt2_RED, LOW);
            digitalWrite(gt2_GREEN, LOW);
            digitalWrite(gt2_YELLOW, HIGH);
            }
            else if(time1 <= count1/2 && time1>0)
            {
            if(realtime1==0) realtime1 =count1/2;
            color1 = 3;
            realtime1--;
            digitalWrite(gt2_RED,LOW);
            digitalWrite(gt2_GREEN, HIGH);
            digitalWrite(gt2_YELLOW,LOW);
            }
            time1--;
            if(time1==0) time1=data1;



            // Traffic light 3
            if(time2 <= count2 && time2 > count2/2)
            {
            if(realtime2==0) realtime2 =count2/2;
            color2 = 1 ;
            realtime2--; 
            digitalWrite(gt3_RED,HIGH);
            digitalWrite(gt3_GREEN, LOW);
            digitalWrite(gt3_YELLOW,LOW);
            }
            else if(time2 < count2 && time2 > (count2/2 -1))
            {
            realtime2 =1;
            color2 = 2;
            realtime2--;
            digitalWrite(gt3_RED, LOW);
            digitalWrite(gt3_GREEN, LOW);
            digitalWrite(gt3_YELLOW, HIGH);
            }
            else if(time2 <= count2/2 && time2>0)
            {
            if(realtime2==0) realtime2 =count2/2;
            color2 = 3;
            realtime2--;
            digitalWrite(gt3_RED, LOW);
            digitalWrite(gt3_GREEN, HIGH);
            digitalWrite(gt3_YELLOW,LOW);
            }
            time2--;
            if(time2==0) time2=data2;
            printf("time 2: %d ",time2);
            printf("realtime 2: %d ",realtime2);



            // 1 s chance data 1
            delay(1000);
            
            //send data to database
            char sql[200];
            sprintf(sql,"update traffic set color=%d,time=%d WHERE stt=1 ",color, realtime);
            mysql_query(conn, sql);

            char sql1[200];
            sprintf(sql1,"update traffic set color=%d,time=%d WHERE stt=2 ",color1, realtime1);
            mysql_query(conn, sql1);

            char sql2[200];
            sprintf(sql2,"update traffic set color=%d,time=%d WHERE stt=3 ",color2, realtime2);
            mysql_query(conn, sql2);
        }

    }   





 

    mysql_close(conn);
}

    return 0;
}





