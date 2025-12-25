import { useState } from "react";
import "./Nonveg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";

function NonVeg() {

 let nonVegItems = [
    { id: 101, name: "Chicken Biryani", price: 280, desc: "Fragrant basmati rice cooked with tender chicken and rich spices.", img: "https://tse4.mm.bing.net/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?pid=Api&P=0&h=180" },
    { id: 102, name: "Butter Chicken", price: 300, desc: "Creamy tomato gravy with juicy marinated chicken pieces.", img: "https://tse3.mm.bing.net/th/id/OIP.RGNMnpIDUB4s_xqcxhvV5AHaHa?pid=Api&P=0&h=180" },
    { id: 103, name: "Mutton Curry", price: 350, desc: "Slow-cooked tender mutton simmered in a spicy curry.", img: "https://tse1.mm.bing.net/th/id/OIP.GuDWYOvram1lzk87T4oJ4AHaE8?pid=Api&P=0&h=180" },
    { id: 104, name: "Fish Fry", price: 220, desc: "Crispy fried fish marinated with South Indian spices.", img: "https://tse2.mm.bing.net/th/id/OIP.LDx01nvywhRgm1h1SkLINQAAAA?pid=Api&P=0&h=180" },
    { id: 105, name: "Chicken 65", price: 200, desc: "Spicy deep-fried chicken with curry leaves and chillies.", img: "https://tse3.mm.bing.net/th/id/OIP.3ueZre-bz-qeV410b4bdMwHaE7?pid=Api&P=0&h=180" },
    { id: 106, name: "Egg Curry", price: 120, desc: "Boiled eggs simmered in a rich onion-tomato gravy.", img: "https://tse2.mm.bing.net/th/id/OIP.TAXYykEOvmRky9fe5BwAYwHaLH?pid=Api&P=0&h=180" },
    { id: 107, name: "Prawns Masala", price: 260, desc: "Juicy prawns cooked with spicy coastal-style masala.", img: "https://tse4.mm.bing.net/th/id/OIP.8RCp80dUWSckK1Y5Oq8IIQHaHa?pid=Api&P=0&h=180" },
    { id: 108, name: "Grilled Chicken", price: 320, desc: "Charcoal grilled chicken with herbs and spices.", img: "https://tse2.mm.bing.net/th/id/OIP.Ow_TG1jIT5O2d7nMcXm_QwHaJQ?pid=Api&P=0&h=180" },
    { id: 109, name: "Tandoori Chicken", price: 350, desc: "Traditional clay-oven roasted chicken marinated in yogurt and spices.", img: "https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?pid=Api&P=0&h=180" },
    { id: 110, name: "Chicken Shawarma", price: 150, desc: "Soft pita wrap stuffed with roasted chicken and sauces.", img: "https://tse2.mm.bing.net/th/id/OIP.9HdNj8GYwMgoN5DZji2jmQHaHa?pid=Api&P=0&h=180" },
    { id: 111, name: "Mutton Biryani", price: 400, desc: "Royal biryani cooked with tender goat meat and aromatic spices.", img: "https://tse3.mm.bing.net/th/id/OIP.aeTHPSFrgYVyYR-EkWNpBAHaEj?pid=Api&P=0&h=180" },
    { id: 112, name: "Chicken Manchurian", price: 180, desc: "Crispy chicken tossed in tangy Indo-Chinese sauce.", img: "https://tse1.mm.bing.net/th/id/OIP.47qNztDdtWodO4SPk4-fKAHaE8?pid=Api&P=0&h=180" },
    { id: 113, name: "Fish Curry", price: 240, desc: "Spicy fish curry with rich coconut-based gravy.", img: "https://tse1.mm.bing.net/th/id/OIP.srxkhYIWxEQqdWo4w2halwHaEK?pid=Api&P=0&h=180" },
    { id: 114, name: "Chicken Kebab", price: 160, desc: "Skewered minced chicken grilled to perfection.", img: "https://tse1.mm.bing.net/th/id/OIP.HGQwf1Ny2N34IanWkVfc7wHaEK?pid=Api&P=0&h=180" },
    { id: 115, name: "Crab Masala", price: 380, desc: "Delicious crab cooked in aromatic spicy masala.", img: "https://tse1.mm.bing.net/th/id/OIP._E-x6BOQKBlaCReQNn2RRwHaEK?pid=Api&P=0&h=180" },
    { id: 116, name: "Chicken Lollipop", price: 190, desc: "Deep-fried frenched chicken wings coated in spicy batter.", img: "https://tse3.mm.bing.net/th/id/OIP.eOrm2jVAm5yphOxotOTnvQHaFj?pid=Api&P=0&h=180" },
    { id: 117, name: "Pepper Chicken", price: 230, desc: "South-Indian style spicy pepper flavoured chicken.", img: "https://tse4.mm.bing.net/th/id/OIP.x9p_bcKbejsBvrVVzxkpuQHaHa?pid=Api&P=0&h=180" },
    { id: 118, name: "Mutton Keema", price: 260, desc: "Minced mutton cooked with onion, peas and aromatic spices.", img: "https://tse1.mm.bing.net/th/id/OIP.jrDNVonuItgOtKfRK1OcjwHaEK?pid=Api&P=0&h=180" },
    { id: 119, name: "Prawn Biryani", price: 320, desc: "Basmati rice layered with spicy masala prawns.", img: "https://tse3.mm.bing.net/th/id/OIP.eD5AbjJTS3562b2kCPR12gHaHa?pid=Api&P=0&h=180" },
    { id: 120, name: "Chicken Fried Rice", price: 160, desc: "Chinese-style fried rice with chicken chunks and veggies.", img: "https://tse1.mm.bing.net/th/id/OIP.w1Isbq1qTlB0RiIDWTRI0AHaHa?pid=Api&P=0&h=180" },
    { id: 121, name: "Tawa Chicken", price: 260, desc: "Spicy chicken cooked on a tawa with rich masala.", img: "https://tse4.mm.bing.net/th/id/OIP.rjS20ssiUBx6Vbr9vC06JwHaFj?pid=Api&P=0&h=180" },
    { id: 122, name: "Egg Biryani", price: 180, desc: "Delicious biryani layered with boiled eggs and masala.", img: "https://tse4.mm.bing.net/th/id/OIP.I0OK89SinKW4qh3vDp0XtgHaHa?pid=Api&P=0&h=180" },
  ];

  const dispatch = useDispatch();

  // PAGINATION
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const pageItems = nonVegItems.slice(start, start + itemsPerPage);

  return (
    <>
      <h1 className="nonveg-title">Non-Veg Items</h1>

      <ul className="nonveg-list">
        {pageItems.map((item) => (
          <li key={item.id} className="nonveg-card">
            <img src={item.img} alt={item.name} className="nonveg-img" />

            <h3>{item.name}</h3>
            <p className="nonveg-desc">{item.desc}</p>
            <p><b>Price: ₹{item.price}</b></p>

            <button className="nonveg-btn" onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ⬅ Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active-page" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next ➡
        </button>
      </div>
    </>
  );
}

export default NonVeg;
