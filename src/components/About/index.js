import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://res.cloudinary.com/djzsbpran/image/upload/v1690283544/shopbuddy_logo_v4qrlt.png"
        className="about-logo"
        alt="about-logo"
      />
      <p className="about-company">
        Welcome to ShopBuddy, Here you can find wide range of products
        seamlessly. We are not comprise at quality of the products and we are
        provide 24/7 customer care support. If you have any Queries regarding
        your product you can contact the details which is provided below.
      </p>
      <button type="button" className="customer-button">
        Customer Support
      </button>
    </div>
  );
};

export default About;
