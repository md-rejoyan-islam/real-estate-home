import Para from "../Para";
import SubTitle from "../SubTitle";
import TinyTitle from "../TinyTitle";
import AvaliableEstate from "./AvaliableEstate";
const avaliableEstates = [
  {
    id: 1,
    title: "Modern Design villa",
    location: "Coral Gables, FL",
    price: "$3,000.00",
    bedRooms: 3,
    bathRooms: 2,
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Stylish Family Home",
    location: "Aventura, south florida",
    price: "$2,850.00",
    bedRooms: 4,
    bathRooms: 3,
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Waterfront House",
    location: "Palm Beach, Riviera",
    price: "$4,500.00",
    bedRooms: 2,
    bathRooms: 2,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Luxury Villa",
    location: "Miami, FL",
    price: "$6,300.00",
    bedRooms: 6,
    bathRooms: 3,
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Beautiful House",
    location: "Islamorada, Japan",
    price: "$7,600.00",
    bedRooms: 7,
    bathRooms: 3,
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "Jungle House",
    location: "Key Largo, Washington",
    price: "$7,899.00",
    bedRooms: 4,
    bathRooms: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Avaliable() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <TinyTitle label={"Properties"} />
          <SubTitle>Grab your Dream Property</SubTitle>
          <Para>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </Para>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliableEstates?.map((estate) => (
            <AvaliableEstate estate={estate} key={estate.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
