import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCheckbox from "./rds-checkbox";

export default {
  title: "Elements/RdsCheckbox",
  component: RdsCheckbox,
} as ComponentMeta<typeof RdsCheckbox>;

const Template: ComponentStory<typeof RdsCheckbox> = (args) => (
  <RdsCheckbox {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  label: "default checkbox",
  Switch: true,
  checked:false,
  Disabled: false
};

