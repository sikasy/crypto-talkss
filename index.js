class CryptoTalks {
    constructor(eventName, organizer, date, location) {
      this.eventName = eventName;
      this.organizer = organizer;
      this.date = date;
      this.location = location;
      this.speakers = [];
      this.attendees = [];
    }
  
    addSpeaker(speakerName, topic) {
      const newSpeaker = { name: speakerName, topic: topic };
      this.speakers.push(newSpeaker);
      console.log(`Speaker ${speakerName} added for the topic: ${topic}`);
    }
  
    registerAttendee(attendeeName) {
      this.attendees.push(attendeeName);
      console.log(`Attendee ${attendeeName} registered for ${this.eventName}`);
    }
  
    displayEventInfo() {
      console.log(`
        Event Information:
        Event Name: ${this.eventName}
        Organizer: ${this.organizer}
        Date: ${this.date}
        Location: ${this.location}
        Speakers: ${this.speakers.map(speaker => `${speaker.name} - ${speaker.topic}`).join(', ')}
        Attendees: ${this.attendees.join(', ')}
      `);
    }
  }
  
  // Example usage
  const cryptoTalkEvent = new CryptoTalks('CryptoTalks 2024', 'Crypto Association', '2024-05-15', 'Virtual');
  
  cryptoTalkEvent.addSpeaker('John Doe', 'Decentralized Finance (DeFi)');
  cryptoTalkEvent.addSpeaker('Jane Smith', 'Blockchain Technology Trends');
  cryptoTalkEvent.registerAttendee('Alice');
  cryptoTalkEvent.registerAttendee('Bob');
  
  cryptoTalkEvent.displayEventInfo();
  