import { ChartAreaInteractive } from "@/components/admin/dashboard/chart-area-interactive";
import { SectionCards } from "@/components/admin/dashboard/section-card";

export function DashboardView() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      {/* <DataTable data={data} /> */}
    </div>
  );
}
