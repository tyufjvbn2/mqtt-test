import mqtt from "mqtt";

const brokerUrl = process.env.BROKER_URL;
const client = mqtt.connect(brokerUrl);

client.subscribe("iotiot");

client.on("message", (topic, message) => {
  console.log("topic check : ", topic.toString());
  console.log("message check : ", message.toString());
});
