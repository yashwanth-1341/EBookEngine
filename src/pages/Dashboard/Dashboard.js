import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import { UseTitle } from "../../hooks/UseTitle";

export const DashboardPage = () => {

    UseTitle("Dashboard")
    const [orders,setOrders]=useState([])

    useEffect(()=>
    {
        async function fetchOrders(){
            const data = await getUserOrders();
            setOrders(data);
          }
          fetchOrders();
        }, []);

    return (
        <main>
          <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            <section>
              {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order) => (
                  <DashboardCard key={order.id} order={order} />
                ))
              ) : (
                <DashboardEmpty />
              )}
            </section>
          </section>
        </main>
      );
      
  }