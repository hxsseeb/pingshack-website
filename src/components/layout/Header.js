import { Link } from "gatsby"
import React from "react"

const menuData = [
  { title: "Features", icon: "/images/icons/courses.svg", link: "/features" },
  { title: "Partners", icon: "/images/icons/tutorials.svg", link: "/partners" },
  { title: "Contact", icon: "/images/icons/pricing.svg", link: "/contact" },
]

export default function Header() {
  return (
    <>
      {menuData.map((item, index) => (
        <Link to={item.link} key={index}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </>
  )
}
