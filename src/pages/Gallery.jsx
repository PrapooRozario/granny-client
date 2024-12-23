import  { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const Gallery = () => {
  const [open, setOpen] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImageClick = (index) => {
    setCurrentIndex(index); 
    setOpen(true);
  };
  const Images = [
    {
      src: "https://images.stockcake.com/public/a/c/6/ac61eb67-49f8-4fce-bd29-ab57260e8347_large/radiant-sunset-glow-stockcake.jpg",
      name: "Sunset Glow",
      description: "A serene sunset over the ocean.",
      user: "John Doe",
    },
    {
      src: "https://images.unsplash.com/photo-1732465286852-a0b95393a90d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
      name: "Mountain Majesty",
      description: "Snow-covered peaks under a blue sky.",
      user: "Jane Smith",
    },
    {
      src: "https://www.shutterstock.com/image-photo/stylish-young-man-striking-blue-600nw-2483124881.jpg",
      name: "Urban Vibes",
      description: "A bustling city street at night.",
      user: "Alex Brown",
    },
    {
      src: "https://images.stockcake.com/public/7/d/0/7d033a16-c61b-458e-a67e-ae1ecd4f675f_large/luxury-forest-retreat-stockcake.jpg",
      name: "Forest Retreat",
      description: "A peaceful trail through the woods.",
      user: "Emily Davis",
    },
    {
      src: "https://media.istockphoto.com/id/471759147/photo/oasis.jpg?s=612x612&w=0&k=20&c=aG5gIl68tVvuzaqe1TYPqm38Wdm3vFmCrQSp1mWgZVw=",
      name: "Desert Mirage",
      description: "Golden dunes stretching into the horizon.",
      user: "Michael Lee",
    },
    {
      src: "https://media.istockphoto.com/id/1317857006/photo/beautiful-sunset-at-the-sea.jpg?s=612x612&w=0&k=20&c=FP-6VYNWNrM6i4w5QlegCT2otN_z966rJFKqgVdF4Pg=",
      name: "Calm Waters",
      description: "A small boat floating on a calm lake.",
      user: "Sarah Wilson",
    },
    {
      src: "https://images.stockcake.com/public/b/0/8/b083ea36-95d0-41eb-b848-384227eccdaa_large/blooming-garden-beauty-stockcake.jpg",
      name: "Blooming Beauty",
      description: "A vibrant field of blooming flowers.",
      user: "Chris Johnson",
    },
    {
      src: "https://media.istockphoto.com/id/809971888/photo/night-sky-landscape.jpg?s=612x612&w=0&k=20&c=ku3RWu4DQ8ErN-KbT1Act72LMocTwSAAm3UDkLiako0=",
      name: "Starry Night",
      description: "A clear sky filled with stars.",
      user: "Laura Martinez",
    },
    {
      src: "https://t3.ftcdn.net/jpg/06/39/00/08/360_F_639000869_ev6qh7tqLBj3K2tQR3wAOU5JZy9ec6Vf.jpg",
      name: "Winter Wonderland",
      description: "A snow-covered forest with tall trees.",
      user: "David Robinson",
    },
    {
      src: "https://img.freepik.com/free-photo/santa-monica-beach-safeguard-tower-sunset-los-angeles_649448-2556.jpg",
      name: "Seaside Serenity",
      description: "Waves gently lapping on the shore.",
      user: "Sophia White",
    },
  ];

  return (
    <div>
      <div
        className="hero h-56 my-4"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/050/945/179/non_2x/snow-falling-on-pine-trees-in-a-magical-winter-wonderland-forest-photo.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <h1 className="mb-5 text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mt-10">
        {Images.map((image, index) => (
          <div
            className="relative group w-full h-80 overflow-hidden rounded-lg shadow-md"
            key={image?.src}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image?.src}
              alt={image?.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <p className="text-xl font-bold">{image?.name}</p>
              <p>{image?.description}</p>
              <p className=" text-sm mt-1">Uploaded by: {image?.user}</p>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={Images.map((image) => ({
            src: image.src,
            title: image.name,
            description: image.description,
          }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};
export default Gallery;
