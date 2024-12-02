import type { Meta, StoryObj } from "@storybook/react";
import { MainLayout } from "./MainLayout";

const meta = {
  title: "Templates/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="p-4">Main Content Goes Here</div>,
  },
};
