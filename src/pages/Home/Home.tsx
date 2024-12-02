import { MainLayout } from "@/components/templates";
import { Button } from "@/components/atoms";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-gray-600">
          This is an example of Atomic Design with shadcn/ui
        </p>
        <Button>Get Started</Button>
      </div>
    </MainLayout>
  );
};
