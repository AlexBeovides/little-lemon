import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers think!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Yosvanis"
          testimonial="My family and I had an amazing dining experience at this restaurant. The food was exceptional, and the staff provided top-notch service. We'll definitely be coming back!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Arismin"
          testimonial="I recently dined at this restaurant with friends, and it exceeded our expectations. The menu offered a great variety, and the flavors were out of this world. The ambiance was charming, making it a perfect spot for a cozy evening."
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Sierra"
          testimonial="I can't say enough good things about this restaurant. The food was delicious, and the portion sizes were generous. The restaurant's warm and inviting atmosphere made it an ideal choice for a special celebration. Highly recommended!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Hernandez"
          testimonial="I had a delightful meal at this restaurant. The dishes were not only visually appealing but also bursting with flavor. The cozy setting made it an ideal place for a romantic date night. I'll definitely be back for more!"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;