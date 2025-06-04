import Footer from "@/components/base/Footer";
import NavBar from "@/components/base/NavBar";
import CartItem from "@/components/CartItem";
import Dish from "@/components/Dish";
import DishDetails from "@/components/DishDetails";
import MyButton from "@/components/MyButton";
import MyNavButton from "@/components/MyNavButton";

export default function Components() {
  return (
    <main className=" space-y-6 p-4">
      <h2>Chillax</h2>
      <p>home</p>
      <div className="flex gap-4 p-4 bg-white">
        <MyButton title="Book a table" state="selected" />
        <MyButton title="Book a table" state="black" />
        <MyButton title="Book a table" />
      </div>
      <div className="flex gap-4 p-4 bg-black">
        <MyNavButton title="Book a table" state="selected" />
        <MyNavButton title="Book a table" state="black" />
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            id: 1,
            name: "Pumpkin Soup",
            slug: "Pumpkin_Soup",
            state: "selected",
            categoryId: 0,
            isAvailable: false,
            description: "Lorem ipsum dolor sit amet, consectetur",
            price: 6000,
            offer: 5000,
            special: true,
            link: "/",
            img: "/dish/food1.webp",
          },
          {
            id: 2,
            name: "Pumpkin Soup",
            slug: "Pumpkin_Soup",
            state: "selected",
            categoryId: 1,
            isAvailable: false,
            description: "Lorem ipsum dolor sit amet, consectetur",
            price: 6000,
            offer: 5000,
            special: false,
            link: "/",
            img: "/dish/food2.webp",
          },
        ].map((data, index) => (
          <Dish {...data} key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {[
          {
            title: "Pumpkin Soup",
            state: "selected",
            desc: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nulla eveniet, incidunt, quas nesciunt dolorum eaque sunt cumque exercitationem deserunt cum ut in repellat! Pariatur placeat assumenda harum corporis aperiam!",
            price: "6000",
            offer: "5000",
            special: true,
            link: "/",
            img: "/",
            restaurant: {
              title: "Happy food",
              img: "/",
              phone: "+237653398731",
            },
            qty: 5,
          },
          {
            title: "Pumpkin Soup",
            state: "selected",
            desc: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum sit tenetur voluptate? Rerum ipsam esse sed magni, veniam perferendis? Minima repellendus error pariatur ab ratione culpa consectetur doloremque eligendi?",
            price: "6000",
            offer: "5000",
            special: false,
            link: "/",
            img: "/",
            restaurant: {
              title: "Happy food",
              img: "/",
              phone: "+237653398731",
            },
            qty: 4,
          },
        ].map((data, index) => (
          <DishDetails {...data} key={index} />
        ))}
      </div>

      <div className="flex flex-col gap-2 p-2">
        {[
          {
            title: "Gift Card Gold",
            price: 10000,
            qty: 2,
            img: "/",
            special: true,
          },
          {
            title: "Gift Card Gold",
            price: 10000,
            qty: 2,
            img: "/",
            special: false,
          },
        ].map((item, index) => (
          <CartItem {...item} key={index} />
        ))}
      </div>

      <div className="w-[800px]">
        <NavBar />
        <Footer />
      </div>
    </main>
  );
}
