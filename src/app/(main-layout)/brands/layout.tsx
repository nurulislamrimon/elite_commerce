import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";

const Layout = ({
  children,
  rightSide,
}: {
  children: React.ReactNode;
  rightSide: React.ReactNode;
}) => {
  return (
    <div>
      {/* == Next Breadcrumbs == */}
      <div className="mb-5 md:mb-10">
        <Breadcrumb title="All Brands" />
      </div>
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 pb-5">
        <div className="lg:col-span-3">{children}</div>
        <aside>{rightSide}</aside>
      </section>
    </div>
  );
};

export default Layout;
