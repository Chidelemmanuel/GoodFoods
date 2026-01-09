import RevenueChart from "./components/RevenueChart";
import OrderTimeChart from "./components/OrderTimeChart";
import RatingChart from "./components/RatingChart";
import MostOrderedFood from "./components/MostOrderedFood";
import OrderChart from "./components/OrderChart";

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-b border-slate-100">
        <div className="lg:col-span-2 p-4 md:p-6">
            <RevenueChart />
        </div>
        <div className="p-4 md:p-6">
            <OrderTimeChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
         <div className="p-4 md:p-6">
           <RatingChart />
         </div>
         <div className="p-4 md:p-6">
           <MostOrderedFood />
         </div>
         <div className="p-4 md:p-6">
           <OrderChart />
         </div>
      </div>
    </div>
  );
}
