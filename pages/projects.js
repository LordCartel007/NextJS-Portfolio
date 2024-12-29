import Image from "next/image";
import "@/styles/globals.css";

const Projects = ({ projects }) => {
  // Ensure projects is always an array
  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <div className="project3" style={{ padding: "0 90px" }}>
      <h1 className="project1">Projects</h1>
      <h1 className="Real">Real Time Messaging App</h1>
      <div className="pic">
        {" "}
        <Image
          src="/chat.png" // Image path from the public folder
          alt="Profile Picture"
          width={600}
          height={400}
        />
      </div>
      <h1 className="centeredText">
        I developed a real-time messaging application designed to connect users
        instantly, enabling seamless and secure communication. This project
        combined cutting-edge technologies to deliver a fast, responsive, and
        user-friendly experience, rivaling popular messaging platforms in
        performance and usability.
      </h1>
      <h1 className="Real">Barcode Scanner App</h1>
      <div className="pic">
        {" "}
        <Image
          src="/barscannerpic.jpg" // Image path from the public folder
          alt="Profile Picture"
          width={600}
          height={400}
        />
      </div>
      <h1 className="centeredText">
        I developed a barcode scanner application designed to simplify inventory
        management, product tracking, and real-time data entry for businesses
        and individuals. This project leverages the power of modern devices'
        cameras to efficiently scan and process barcodes, providing an intuitive
        and reliable solution for everyday operational needs.
      </h1>
      <h1 className="Real">Ecommerce App</h1>
      <div className="pic">
        {" "}
        <Image
          src="/ecommercepic.png" // Image path from the public folder
          alt="Profile Picture"
          width={600}
          height={400}
        />
      </div>
      <h1 className="centeredText">
        I developed a full-featured e-commerce application that streamlines the
        online shopping experience for users while providing businesses with a
        robust platform to manage products, orders, and customer interactions.
        This project focuses on performance, scalability, and user-centric
        design, making it a comprehensive solution for modern e-commerce needs.
      </h1>
    </div>
  );
};

export default Projects;
