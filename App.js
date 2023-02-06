import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import DatePicker from "react-native-date-picker";

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log("open", open);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false); // close automatically in 3 sec
      }, 3000);
    }
  }, [open]);

  return (
    <SafeAreaView>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};
