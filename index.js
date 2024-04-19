import mqtt from "mqtt";

function sender() {
  console.log("Initiating send message....");
  const brokerUrl = process.env.BROKER_URL;

  const publisher = mqtt.connect(brokerUrl);
  publisher.publish("iotiot", "wow how");
  console.log("Done send message");
  return;
}

sender();
