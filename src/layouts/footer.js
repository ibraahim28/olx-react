import React from "react";
import twitter from "../assets/img/iconTwitter_noinline-6037fa7d9a7b9d6408fb1b3d70524b97.svg";
import youtube from "../assets/img/iconYoutube_noinline-c85bd6801ec83d6a3b498059550bef26.svg";
import instagram from "../assets/img/iconInstagram_noinline-d7d5811ebc44e03a674c8d0b5ff3f232.svg";
import facebook from "../assets/img/iconFacebook_noinline-773db88c5b9ee5aaab365e61cdb750da.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Popular Categories",
      links: ["Cars", "Flats for rent", "Mobile Phones", "Jobs"],
    },
    {
      title: "Trending Searches",
      links: ["Bikes", "Watches", "Books", "Dogs"],
    },
    {
      title: "About Us",
      links: [
        "About Dubizzle Group",
        "OLX Blog",
        "Contact Us",
        "OLX For Businesses",
      ],
    },
    {
      title: "OLX",
      links: ["Help", "Sitemap", "Terms of use", "Privacy Policy"],
    },
  ];

  const iconArr = [
    {
      title: "Follow us",
      icons: [
        { src: twitter, alt: "Twitter" },
        { src: facebook, alt: "Facebook" },
        { src: youtube, alt: "YouTube" },
        { src: instagram, alt: "Instagram" },
      ],
    },
  ];

  return (
    
    <footer className="w-screen bg-zinc-100 py-8 px-4 flex justify-between">
      {footerLinks.map((v, i) => (
        <section key={i}>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">{v.title}</span>
            <ul className="list-none">
              {v.links.map((link, j) => (
                <li
                  className="font-light text-[#002f34a3] hover:text-black cursor-pointer"
                  key={j}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      {iconArr.map((v, i) => (
        <div key={i}>
          <span className="font-bold text-xl">{v.title}</span>
          <div className="flex gap-3">
            {v.icons.map((icon, index) => (
              <a href="#" key={index}>
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
