import { useState } from "react";
import "./veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";

function Veg() {
  let vegItems = [
     { id: 1, name: "Paneer Butter Masala", price: 250, desc: "Rich and creamy paneer curry cooked in butter and tomato gravy.", img: "https://tse2.mm.bing.net/th/id/OIP.LEOo-5-QNEVHPL9tQXTUsQHaHa?pid=Api&P=0&h=180" },
      { id: 2, name: "Veg Biryani", price: 180, desc: "Aromatic rice cooked with fresh vegetables and spices.", img: "https://tse2.mm.bing.net/th/id/OIP.LadujoU81UAUhQjy9gElUwHaHa?pid=Api&P=0&h=180" },
       { id: 3, name: "Aloo Gobi", price: 150, desc: "Classic dry curry made from potatoes and cauliflower.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXzGI9vkVxIBqEQs3pExVrrOUE7xj1uFaoQ&s" }, 
       { id: 4, name: "Dal Tadka", price: 130, desc: "Flavorful yellow lentils tempered with ghee, garlic, and spices.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX8JFszwwFRu3ccbCqGXs1MrDFB5cJNAVCA&s" }, 
       { id: 5, name: "Chole Bhature", price: 160, desc: "Spicy chickpeas served with fluffy fried bhature.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK-ZC5dt1Jy1eF1eMBBofDrRjFRNBBXsXKA&s" },
        { id: 6, name: "Veg Fried Rice", price: 140, desc: "Stir-fried rice with mixed vegetables and soy flavour.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAwI-oDBN9Z9KPcSMAXSlqTIlvGC-imEyOw&s" },
         { id: 7, name: "Masala Dosa", price: 120, desc: "Crispy dosa filled with spiced potato stuffing.", img: "https://tse3.mm.bing.net/th/id/OIP.A3rqW3t_RM32Sh0d6CZUBAHaHa?pid=Api&P=0&h=180" }, 
         { id: 8, name: "Idli Sambar", price: 90, desc: "Soft idlis served with hot sambar and coconut chutney.", img: "https://tse4.mm.bing.net/th/id/OIP.7iJtDsT41BuJ6zIDIawRRAHaLH?pid=Api&P=0&h=180" }, 
         { id: 9, name: "Palak Paneer", price: 230, desc: "Cottage cheese cooked in smooth spinach gravy.", img: "https://tse2.mm.bing.net/th/id/OIP.UYURV91iSB8xZjxamIcBMgHaE6?pid=Api&P=0&h=180" },
          { id: 10, name: "Veg Pulao", price: 160, desc: "Fragrant rice cooked with mixed vegetables and spices.", img: "https://tse3.mm.bing.net/th/id/OIP.0rUaUWEqxiaWgX2FPotp5AHaEK?pid=Api&P=0&h=180" }, 
          { id: 11, name: "Kadai Paneer", price: 240, desc: "Paneer cooked with capsicum and kadai spices.", img: "https://tse1.mm.bing.net/th/id/OIP.Es0A4V6bseDzObveNSFhrwHaFt?pid=Api&P=0&h=180" }, 
          { id: 12, name: "Malai Kofta", price: 260, desc: "Soft kofta balls served in creamy rich gravy.", img: "https://tse2.mm.bing.net/th/id/OIP.3ySoeTRv8O9RVJJESFAW-wHaHa?pid=Api&P=0&h=180" },
           { id: 13, name: "Paneer Tikka", price: 200, desc: "Grilled paneer cubes marinated in yogurt and spices.", img: "https://tse1.mm.bing.net/th/id/OIP.mAs-ziEDbpRhyQ9PLZ4urgHaE7?pid=Api&P=0&h=180" }, 
           { id: 14, name: "Veg Pizza", price: 280, desc: "Cheesy pizza loaded with fresh vegetables.", img: "https://tse1.mm.bing.net/th/id/OIP.m515z_Uea7tBHXFF-fFP9AHaEJ?pid=Api&P=0&h=180" }, 
           { id: 15, name: "Spring Rolls", price: 110, desc: "Crispy rolls stuffed with mixed vegetables.", img: "https://tse3.mm.bing.net/th/id/OIP.p0i4Zv6R5yAJsUtAzN6JzwHaJQ?pid=Api&P=0&h=180" },
            { id: 16, name: "Veg Momos", price: 100, desc: "Steamed dumplings filled with vegetables.", img: "https://tse1.mm.bing.net/th/id/OIP.ZpVOIZYsNfhdfSlUqiSD4AHaHa?pid=Api&P=0&h=180" }, 
            { id: 17, name: "Gobi Manchurian", price: 150, desc: "Crispy cauliflower tossed in Indo-Chinese sauce.", img: "https://tse4.mm.bing.net/th/id/OIP.p62jPyANtj2UaDIXGgAfxgHaE8?pid=Api&P=0&h=180" },
             { id: 18, name: "Veg Noodles", price: 140, desc: "Stir-fried noodles with vegetables and sauces.", img: "https://tse4.mm.bing.net/th/id/OIP.h8GsOF11Zcr_BWf0KcFnsQHaE5?pid=Api&P=0&h=180" }, 
             { id: 19, name: "Rajma Chawal", price: 130, desc: "Kidney beans cooked in thick gravy served with rice.", img: "https://tse2.mm.bing.net/th/id/OIP.HVipgNT3oOWHsHv46r4uLwHaHa?pid=Api&P=0&h=180" },
              { id: 20, name: "Samosa", price: 30, desc: "Crispy fried snack filled with spicy potato mixture.", img: "https://tse2.mm.bing.net/th/id/OIP.hvYEvrpj0AWhrcyJwkfhqgHaEo?pid=Api&P=0&h=180" }, 
              { id: 21, name: "Pav Bhaji", price: 120, desc: "Mashed mixed-vegetable curry served with buttered pav.", img: "https://tse2.mm.bing.net/th/id/OIP.XCy0L7f8LBWILfOSGTXpvgHaLO?pid=Api&P=0&h=180" }, 
              { id: 22, name: "Poori Curry", price: 80, desc: "Fluffy pooris served with seasoned aloo curry.", img: "https://tse3.mm.bing.net/th/id/OIP.fK0Fw9aHfvl4LkD4Yzp3owHaE7?pid=Api&P=0&h=180" },
               { id: 23, name: "Veg Sandwich", price: 70, desc: "Fresh vegetable sandwich with spicy chutney.", img: "https://tse3.mm.bing.net/th/id/OIP.rNTaDBjS6SpuNQ-OHlM-2gHaHa?pid=Api&P=0&h=180" }
  ];

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const pageItems = vegItems.slice(start, start + itemsPerPage);

  return (
    <>
      <h1 className="veg-title">This is Veg Page</h1>

      <ul className="veg-list">
        {pageItems.map((item) => (
          <li key={item.id} className="veg-card">
            <img src={item.img} alt={item.name} className="veg-img" />
            <h3>{item.name}</h3>
            <p className="veg-desc">{item.desc}</p>
            <p><b>Price: ₹{item.price}</b></p>

            {/* FIXED BUTTON */}
            <button
              className="veg-btn"
              onClick={() => dispatch(addToCart(item))}
            >
              AddToCart
            </button>
          </li>
        ))}
      </ul>

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

export default Veg;
