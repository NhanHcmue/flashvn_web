export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Layout riêng cho admin, không có Navbar/Footer */}
      <div className="p-6 bg-white min-h-screen">
        {children}
      </div>
    </>
  );
}
