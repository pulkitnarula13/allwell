import { List } from "react-native-paper";
import React from "react";

export default function Questions() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Questions">
      <List.Accordion
        title="Question 1"
        left={(props) => <List.Icon {...props} icon="question" />}
      >
        <List.Item title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
      </List.Accordion>

      <List.Accordion
        title="Question 2"
        left={(props) => <List.Icon {...props} icon="question" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
      </List.Accordion>
    </List.Section>
  );
}
