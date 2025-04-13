import PHDropdown from "../common/components/PHDropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PHDropdown> = {
  title: "PHDropdown",
  component: PHDropdown,
  parameters: { layout: "centered" },
  args: {
    label: "DISTRICT",
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select District",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
