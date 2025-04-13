import type { Meta, StoryObj } from "@storybook/react";
import PHIconButton from "../common/components/PHIconButton";
import { Heart } from "@phosphor-icons/react";

const meta: Meta<typeof PHIconButton> = {
  title: "PHIconButton",
  component: PHIconButton,
  parameters: { layout: "centered" },
  args: {
    icon: <Heart />,
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

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};
