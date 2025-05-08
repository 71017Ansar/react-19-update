import AppAeraChart from "@/components/AppAeraChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";



export default function Home() {

  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 2xl-:grid-cols-4 gap-4 p-4">

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppAeraChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 3</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 4</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 6</div>

    </div>
  );
}
