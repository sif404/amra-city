import { useEffect } from "react";
import gsap from "gsap";

export default function Sections() {

  useEffect(() => {
    gsap.from("section", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1
    });
  }, []);

  return (
    <div style={{ background: "#050505", color: "white", padding: "50px" }}>

      <section>
        <h2>🌍 Vision</h2>
        <p>
          Amra City addresses urban pressure, water scarcity, and sustainability
          challenges in Jordan through a smart IoT-driven framework.
        </p>
      </section>

      <section>
        <h2>🌱 Green Infrastructure</h2>
        <p>
          Renewable energy, Sponge City water systems, and climate-responsive design.
        </p>
      </section>

      <section>
        <h2>🌐 IoT Network</h2>
        <p>
          Sensors, real-time monitoring, and connected urban intelligence.
        </p>
      </section>

      <section>
        <h2>🧠 Digital Twin</h2>
        <p>
          A real-time 4D simulation model enabling predictive city management.
        </p>
      </section>

      <section>
        <h2>⚡ Edge Computing</h2>
        <p>
          Low-latency processing for real-time decision making.
        </p>
      </section>

      <section>
        <h2>🏟️ Smart Stadium</h2>
        <p>
          Energy-producing, sensor-driven infrastructure with crowd intelligence.
        </p>
      </section>

      <section>
        <h2>🔐 Cybersecurity</h2>
        <p>
          Zero-Trust architecture ensuring secure smart city operations.
        </p>
      </section>

      <section>
        <h2>📄 Research Paper</h2>
        <a href="/paper.pdf" target="_blank" style={{ color: "lightgreen" }}>
          Download Full Paper
        </a>
      </section>

    </div>
  );
}