import { Text } from "~/components/Themed";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible";

export default function CollapisbleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <Text>Trigger</Text>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Text>SOmething somethign</Text>
      </CollapsibleContent>
    </Collapsible>
  );
}
