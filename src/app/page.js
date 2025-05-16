import AppAeraChart from "@/components/AppAeraChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";




export default function Home() {

  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
    //   <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
    //     <AppBarChart />
    //   </div>
    //   <div className="bg-primary-foreground p-4 rounded-lg">
    //     <CardList title="Latest Transactions" />
    //   </div>
    //   <div className="bg-primary-foreground p-4 rounded-lg">
    //     <AppPieChart />
    //   </div>
    //   <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
    //   <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
    //     <AppAeraChart />
    //   </div>
    //   <div className="bg-primary-foreground p-4 rounded-lg">
    //     <CardList title="Popular Content" />
    //   </div>
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4 md:p-6">
  {/* Large Chart (spans more columns on larger screens) */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-3 border border-border/50 hover:border-border/80">
    <h3 className="text-lg font-semibold mb-4 text-primary">Analytics Overview</h3>
    <AppBarChart className="h-[300px] w-full" />
  </div>

  {/* Transactions Card */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-border/50 hover:border-border/80">
    <CardList 
      title="Latest Transactions" 
      titleClass="text-lg font-semibold text-primary"
      className="h-full"
    />
  </div>

  {/* Pie Chart */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-border/50 hover:border-border/80">
    <h3 className="text-lg font-semibold mb-4 text-primary">Distribution</h3>
    <AppPieChart className="h-[250px] w-full" />
  </div>

  {/* Todo List */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-border/50 hover:border-border/80">
    <h3 className="text-lg font-semibold mb-4 text-primary">My Tasks</h3>
    <TodoList className="h-full" />
  </div>

  {/* Area Chart (spans more columns) */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-3 border border-border/50 hover:border-border/80">
    <h3 className="text-lg font-semibold mb-4 text-primary">Performance Trend</h3>
    <AppAeraChart className="h-[300px] w-full" />
  </div>

  {/* Popular Content */}
  <div className="bg-primary-foreground p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-border/50 hover:border-border/80">
    <CardList 
      title="Popular Content" 
      titleClass="text-lg font-semibold text-primary"
      className="h-full"
    />
  </div>

  {/* Additional responsive item - example for more content */}

</div>
  );
}
