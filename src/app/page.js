import DashboardBoxes from "@/components/DashboardBoxes";
import ProductsComponents from "@/components/Products";
import SalesAndUserCharts from "@/components/SalesAndUserCharts";
import UsersComponents from "@/components/Users";

export default function Home() {
  return (
    <div className="p-5">
      <DashboardBoxes />

      <div className="py-3">
        <ProductsComponents />
      </div>      
       <UsersComponents />
       <SalesAndUserCharts />     
    </div>
  );
}
