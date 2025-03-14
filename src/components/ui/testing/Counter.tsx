import { Box, Button, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { Eye, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function toastCount() {
    if (counter > 0) {
      toast.success(`Current Value: ${counter}`);
    } else if (counter < 0) {
      toast.warning(`Current Value: ${counter}`);
    } else {
      toast.info(`Current Value: ${counter}`);
    }
  }

  return (
    <Box width="100%">
      <Heading align="center" size="8" className="selectable">
        Value:{" "}
        <Text
          color={counter > 0 ? "green" : counter < 0 ? "red" : "gray"}
          className="selectable"
        >
          {counter}
        </Text>
      </Heading>
      <Grid gap="3" width="25%" className="center">
        <Separator className="full" />

        <Button size="2" color="green" onClick={() => setCounter(counter + 1)}>
          <Plus /> Add
        </Button>

        <Button color="red" onClick={() => setCounter(counter - 1)}>
          <Minus /> Remove
        </Button>

        <Separator className="full" />

        <Button onClick={toastCount}>
          <Eye /> Toast
        </Button>
      </Grid>
    </Box>
  );
}
