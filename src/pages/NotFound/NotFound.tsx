import { Button } from "@/components/atoms";
import { MainLayout } from "@/components/templates";

export const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <p className="text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </MainLayout>
  );
};
