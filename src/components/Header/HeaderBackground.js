import background from "../../assert/headdev1a.png";

const headerStyle = {
  width: "100%",
  height: "90px",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const HeaderBackground = () => {
  return <div style={headerStyle}></div>;
};

export default HeaderBackground;