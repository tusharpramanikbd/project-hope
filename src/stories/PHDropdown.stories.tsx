import PHDropdown from "../common/components/PHDropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PHDropdown> = {
  title: "PHDropdown",
  component: PHDropdown,
  parameters: { layout: "centered" },
  args: {
    label: "DISTRICT",
    options: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Kushtia"],
    placeholder: "Select District",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Autocomplete: Story = {
  args: {
    isAutocomplete: true,
  },
};
