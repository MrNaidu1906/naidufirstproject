import emailjs from "emailjs-com";

function SendEmail({ cartItems, netpricet, tax, discount, customerEmail, coupon }) {
  
  const handleSendEmail = () => {
    if (!customerEmail || !customerEmail.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    const templateParams = {
      email: customerEmail,
      order_id: Date.now().toString(),

      orders: cartItems.map(item => ({
        name: item.name,
        units: item.quantity,
        price: item.price.toFixed(2),
        image_url: item.img
      })),

      discount: Number(discount).toFixed(2),
      coupon: coupon || "0",

      cost: {
        tax: Number(tax).toFixed(2),
      },

      totalprice: Number(netpricet).toFixed(2),   
    };

    emailjs
      .send("service_55wd6yu", "template_p70tzar", templateParams, "hUO0hF6WikUohuPFV")
      .then(() => alert("Email Sent Successfully!"))
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send email.");
      });
  };

  return <button onClick={handleSendEmail}>Send Email</button>;
}

export default SendEmail;
