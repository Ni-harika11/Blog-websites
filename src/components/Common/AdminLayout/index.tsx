"use client";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
        
      <main className="ml-58  flex-1 p-6 min-h-screen">
      
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
