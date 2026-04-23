import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

      <div style={{
        position: "absolute",
        top: "40%",
        left: "10%",
        color: "white"
      }}>
        <h1 style={{ fontSize: "60px" }}>AMRA CITY</h1>
        <p style={{ fontSize: "20px" }}>
          Smart • Green • Intelligent Architecture
        </p>
      </div>

    </div>
  );
}