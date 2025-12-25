import { useState } from "react";
import "./Milkshake.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";

function Milkshake() {
  const milkshakeItems = [
    { id: 141, name: "Chocolate Milkshake", price: 150, desc: "Rich chocolate blended with ice cream.", img: "https://tse1.mm.bing.net/th/id/OIP.aTrZE7XegFg5NqMHJHJ5PAHaLH?pid=Api&P=0&h=1800" },
    { id: 142, name: "Strawberry Milkshake", price: 140, desc: "Fresh strawberries with smooth milk.", img: "https://tse4.mm.bing.net/th/id/OIP.TaiWRFUScVcJqqV_1ULP9gHaLH?pid=Api&P=0&h=180" },
    { id: 143, name: "Vanilla Milkshake", price: 120, desc: "Classic vanilla milkshake with ice cream.", img: "https://tse1.mm.bing.net/th/id/OIP.tc_JQFfdBb5AuNh8Ks1btwHaHa?pid=Api&P=0&h=180" },
    { id: 144, name: "Oreo Milkshake", price: 160, desc: "Crunchy Oreo cookies blended with cream.", img: "https://tse2.mm.bing.net/th/id/OIP.9xmE-6N60NO04KQA3uAOQwHaLH?pid=Api&P=0&h=180" },
    { id: 145, name: "Mango Milkshake", price: 150, desc: "Seasonal mango shake with thick pulp.", img: "https://tse3.mm.bing.net/th/id/OIP.iPF3bpgaJn7L_TL5JzkDJQHaLH?pid=Api&P=0&h=180" },
    { id: 146, name: "Banana Milkshake", price: 110, desc: "Fresh banana shake with chilled milk.", img: "https://tse2.mm.bing.net/th/id/OIP.D50bapx8a6i8pCp3MMRBnQHaHa?pid=Api&P=0&h=1800" },
    { id: 147, name: "Blueberry Milkshake", price: 170, desc: "Sweet blueberries blended into a purple delight.", img: "https://tse3.mm.bing.net/th/id/OIP.YJ8Am8BLq77_0MdwQuujVQHaJ4?pid=Api&P=0&h=180" },
    { id: 148, name: "KitKat Milkshake", price: 180, desc: "KitKat crunch with creamy goodness.", img: "https://tse2.mm.bing.net/th/id/OIP.VvHPQI22zAZgPcZ3SvVYLAHaE8?pid=Api&P=0&h=180" },
    { id: 149, name: "Coffee Milkshake", price: 160, desc: "Cold coffee blended with ice cream.", img: "https://tse1.mm.bing.net/th/id/OIP.xXQKX-GlZN2TYq0a1IG4sQHaLS?pid=Api&P=0&h=180" },
    { id: 150, name: "Butterscotch Milkshake", price: 150, desc: "Sweet butterscotch with caramel crunch.", img: "https://tse1.mm.bing.net/th/id/OIP.gxLReg94asSfwunio1xZiQAAAA?pid=Api&P=0&h=180" },
  ];

  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(milkshakeItems.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const pageItems = milkshakeItems.slice(start, start + itemsPerPage);

  return (
    <>
      <h1>This is Milkshake Page</h1>

      <ul className="milkshake-list">
        {pageItems.map((item) => (
          <li key={item.id} className="milkshake-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <b>₹{item.price}</b>
            <br />
            <button onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
}

export default Milkshake;
