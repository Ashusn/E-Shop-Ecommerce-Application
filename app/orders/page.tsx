import Container from "@/app/components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import OrderClient from "./OrderClient";

import getOrderByUserId from "@/actions/getOrdersByUserId";

const Orders = async () => { 
  const currentUser = await getCurrentUser();

  if (!currentUser ) {
    return <NullData title="Oops! Access Denied" />;
  }
  const orders=await getOrderByUserId(currentUser.id)

  if (!orders ) {
    return <NullData title="No orders yet..." />;
  } 
  return (
    <div className="pt-8">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
