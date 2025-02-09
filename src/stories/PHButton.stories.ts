import PHButton from "../common/components/PHButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PHButton> = {
  title: "PHButton",
  component: PHButton,
  parameters: { layout: "centered" },
  args: {
    label: "Hello World",
    onClick: () => {
      console.log("clicked");
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ButtonExample: Story = {
  args: {
    variant: "filled",
  },
};
