"use client"
const PendingBlock = () => {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Pending Items</h2>
        <div className="space-y-2">
          <p className="flex items-center justify-between">
            <span>🔶 Pending Blogs</span>
            <span className="font-medium text-red-600">5</span>
          </p>
          {/* <p className="flex items-center justify-between">
            <span>📅 Pending Events</span>
            <span className="font-medium text-red-600">2</span>
          </p>
          <p className="flex items-center justify-between">
            <span>👤 Pending Users</span>
            <span className="font-medium text-red-600">3</span>
          </p> */}
        </div>
      </div>
    );
  };
  
  export default PendingBlock;
  