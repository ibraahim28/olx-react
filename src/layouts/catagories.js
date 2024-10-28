import React from "react";
import mobile from "../assets/img/mobiles-8c768c96bfde33f18fcf5af2a8b9cf71.png";
import vehicles from "../assets/img/vehicles-29fb808d5118f0db56f68a39ce5392e2.png";
import property_sale from "../assets/img/property-for-sale-e3a00dbfdaa69fe5f713665f1069502f.png";
import property_rent from "../assets/img/property-for-rent-8436595fbaa90d47f0178006f57090a8.png";
import electronic from "../assets/img/electronics-home-appliances-46e034dd8adca44625c2c70e4d1b5984.png";
import bike from "../assets/img/bikes-4dcd02c49b2b83aa5b4d629d1e2b383e.png";
import business_industry from "../assets/img/business-industrial-agriculture-704a6ffb9081bc94b11c102cc613.png";
import services from "../assets/img/services-dc6aef196c0403dc61b0ee813f66fa5b.png";
import jobs from "../assets/img/jobs-79e6136dda02111cf8e7afe26b9e0f93.png";
import animal from "../assets/img/animals-62d396e85f7523dbc8ff23889fdd5c31.png";
import furniture from "../assets/img/furniture-home-decor-66bcf157a53ea4c736a5b0af41219475.png";
import fashion from "../assets/img/fashion-beauty-dd2cf7638c29b0e5c084a6673dd94dd7.png";
import books from "../assets/img/books-sports-hobbies-6fee8d841b332d65a10f050f4a2ee1c8.png";
import kids from "../assets/img/kids-cd8d8864804f1c35dd6a7df68268a48d.png";

const Catagories = () => {
  const catagories = [
    {
      image: mobile,
      title: "Mobiles",
    },
    {
      image: vehicles,
      title: "Vehicles",
    },
    {
      image: property_sale,
      title: "Property for Sales",
    },
    {
      image: property_rent,
      title: "Mobiles",
    },
    {
      image: electronic,
      title: "Electronic and home Appliances",
    },
    {
      image: bike,
      title: "Bikes",
    },
    {
      image: business_industry,
      title: "Business, Industrial and Agriculture",
    },
    {
      image: services,
      title: "Services",
    },
    {
      image: jobs,
      title: "Jobs",
    },
    {
      image: animal,
      title: "Animals",
    },
    {
      image: furniture,
      title: "Furniture & Home Decor",
    },
    {
      image: fashion,
      title: "Fashion and Beauty",
    },
    {
      image: books,
      title: "Books Sports & Hobbies",
    },
    {
      image: kids,
      title: "Kids",
    },
  ];

  return (
    <div className="">
      <h1 className="mb-2 mt-10 text-2xl font-bold px-4">ALL CATAGORIES</h1>
      <div className="flex flex-wrap justify-center gap-10 ">
      {catagories.map((v, i) => {
        return <div className="flex items-center flex-col font-bold text-center text-lg gap-3 w-36" key={i}>
            <div className="">
            <img src={v.image} />
            </div>
            <span>{v.title}</span>
        </div>;
      })}
      </div>
    </div>
  );
};


export default Catagories;