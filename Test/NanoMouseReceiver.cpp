#include <Servo.h>

Servo leftServo
Servo rightServo
int sx, sy;

void setup{

}

void loop{
sx=x-506; 
sy=506-y;

leftMotor=coerce(sy+sx);
rightMotor=coerce(sy-sx);
leftServo.writeMicroseconds(1500 + leftMotor);
rightServo.writeMicroseconds(1500 + rightMotor);
}

int coerce(int value){
if(value>100){
value=100;
}
if(-100>value){
value=100;
}
if(abs(value)<10){
value=0;
}
}