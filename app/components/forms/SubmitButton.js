import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";
import styles from "../../config/styles";

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();

  return <Button color={color} title={title} onPress={handleSubmit} />;
}
export default SubmitButton;
