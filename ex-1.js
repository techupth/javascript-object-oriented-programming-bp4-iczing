class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.receiver = receiver;
    }
  
    send() {
      console.log(`Notification has been sent to ${this.receiver}`);
    }
  }
  class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.phoneNumber = phoneNumber;
    }
  
    send() {
      console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
  }

  const emailNotification = new EmailNotification(
    "E12345",
    "2024-07-03 10:00:00",
    "Hello, this is an email notification.",
    "john.doe@example.com"
  );

  const smsNotification = new SMSNotification(
    "S98765",
    "2024-07-03 11:00:00",
    "Hello, this is an SMS notification.",
    "+1234567890"
  );

  emailNotification.send();
  smsNotification.send();