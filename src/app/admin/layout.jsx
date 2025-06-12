import React from "react";
import AdminSidebar from "../Components/Admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full flex min-h-screen">
      <AdminSidebar />

      <div className="w-[80%]">{children}</div>
    </div>
  );
}
