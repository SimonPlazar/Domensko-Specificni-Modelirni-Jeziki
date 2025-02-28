//https://www.tinkercad.com/things/0Vvs9A1vAxI/editel

#include <Adafruit_NeoPixel.h>
#include <Servo.h>

// Pin Definitions
#define TMP36_PIN A0
#define BUTTON_PIN 7
#define NEO_PIXEL_PIN 6
#define NUM_PIXELS 4
#define SERVO_PIN 9

// NeoPixel and Servo setup
Adafruit_NeoPixel strip(NUM_PIXELS, NEO_PIXEL_PIN, NEO_GRB + NEO_KHZ800);
Servo fanServo;

// Variables
int fanSpeed = 0; // 0: Off, 1: Low, 2: Medium, 3: High
int buttonState = 0;  
const int OFF = 90;      // Neutral (no rotation)
const int LOW_SPEED = 120;
const int MEDIUM_SPEED = 150;
const int HIGH_SPEED = 180;

void setup() {
  // Initialize NeoPixel, Servo, and button
  strip.begin();
  strip.show(); // Turn off all LEDs initially
  fanServo.attach(SERVO_PIN);
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // Set initial servo position
  fanServo.write(OFF);
}

void loop() {
  // Check button press to cycle fan speeds
  buttonState = digitalRead(BUTTON_PIN);
  if (buttonState == HIGH) {
    buttonState = LOW;
	fanSpeed = (fanSpeed + 1) % 4; // Cycle through 0-3
    delay(200);
  }

  // Set servo speed based on fan speed
  switch (fanSpeed) {
    case 0:
      fanServo.write(OFF); // Off
      break;
    case 1:
      fanServo.write(LOW_SPEED); // Low speed
      break;
    case 2:
      fanServo.write(MEDIUM_SPEED); // Medium speed
      break;
    case 3:
      fanServo.write(HIGH_SPEED); // High speed
      break;
  }

  // Display fan speed on NeoPixel
  for (int i = 0; i < 3; i++) {
    if (i < fanSpeed) {
      strip.setPixelColor(i, strip.Color(0, 255, 0)); // Green
    } else {
      strip.setPixelColor(i, 0); // Off
    }
  }

  // Read temperature from TMP36
  int sensorValue = analogRead(TMP36_PIN);
  float voltage = sensorValue * (5.0 / 1023.0); // Convert to voltage
  float temperature = (voltage - 0.5) * 100;   // Convert to °C
  
  // Set color for the 4th LED based on temperature
  if (temperature < 25) {
    strip.setPixelColor(3, strip.Color(0, 0, 255)); // Blue
  } else if (temperature >= 25 && temperature <= 30) {
    strip.setPixelColor(3, strip.Color(255, 165, 0)); // Orange
  } else {
    strip.setPixelColor(3, strip.Color(255, 0, 0)); // Red
  }

  // Update the strip
  strip.show();

  delay(200); // Small delay for stability
}
