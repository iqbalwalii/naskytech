import React, { useState } from "react";
import acc from "../styles/Accordian.module.css";
import { Container } from "react-bootstrap";
export default function Accordian() {
  const [current, setCurrent] = useState(1);
  return (
    <Container style={{ marginTop: "5rem", marginBottom: "3rem" }}>
      <h1
        style={{ marginTop: "5rem", marginBottom: "3rem" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {" "}
        Lorem ipsum dolor sit Amet
      </h1>
      <ul className={acc.container}>
        <li
          id="1"
          onClick={(e) => {
            setCurrent(parseInt(e.target.id));
          }}
        >
          {current == 1 ? (
            <h2 style={{ display: "inline", color: "#33bf8b" }}>
              Lorem ipsum dolor{" "}
            </h2>
          ) : (
            <h2 style={{ display: "inline", color: "#000" }}>
              Lorem ipsum dolor{" "}
            </h2>
          )}
        </li>
        {current == 1 ? (
          <p
            style={{
              borderLeft: "1px solid #000",
              padding: "3rem",
              paddingTop: "1rem",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            facilis iure repellat eius ipsa veniam amet, cum, autem cupiditate
            cumque obcaecati quia necessitatibus repudiandae, eum saepe nemo non
            debitis ad officia ipsam architecto voluptate corrupti. Explicabo
            aliquam illo quae officiis eum quos dolorum, nobis accusamus
            necessitatibus nostrum suscipit? Commodi, ex. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto facilis iure repellat eius
            ipsa veniam amet, cum, autem cupiditate cumque obcaecati quia
            necessitatibus repudiandae, eum saepe nemo non debitis ad officia
            ipsam architecto voluptate corrupti. Explicabo aliquam illo quae
            officiis eum quos dolorum, nobis accusamus necessitatibus nostrum
            suscipit? Commodi, ex.
          </p>
        ) : null}
        <li
          id="2"
          onClick={(e) => {
            setCurrent(parseInt(e.target.id));
          }}
        >
          {current == 2 ? (
            <h2 style={{ display: "inline", color: "#33bf8b" }}>
              Lorem ipsum dolor{" "}
            </h2>
          ) : (
            <h2 style={{ display: "inline", color: "#000" }}>
              Lorem ipsum dolor{" "}
            </h2>
          )}
        </li>
        {current == 2 ? (
          <p
            style={{
              borderLeft: "1px solid #000",
              padding: "3rem",
              paddingTop: "1rem",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            facilis iure repellat eius ipsa veniam amet, cum, autem cupiditate
            cumque obcaecati quia necessitatibus repudiandae, eum saepe nemo non
            debitis ad officia ipsam architecto voluptate corrupti. Explicabo
            aliquam illo quae officiis eum quos dolorum, nobis accusamus
            necessitatibus nostrum suscipit? Commodi, ex. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto facilis iure repellat eius
            ipsa veniam amet, cum, autem cupiditate cumque obcaecati quia
            necessitatibus repudiandae, eum saepe nemo non debitis ad officia
            ipsam architecto voluptate corrupti. Explicabo aliquam illo quae
            officiis eum quos dolorum, nobis accusamus necessitatibus nostrum
            suscipit? Commodi, ex.
          </p>
        ) : null}
        <li
          id="3"
          onClick={(e) => {
            setCurrent(parseInt(e.target.id));
          }}
        >
          {current == 3 ? (
            <h2 style={{ display: "inline", color: "#33bf8b" }}>
              Lorem ipsum dolor{" "}
            </h2>
          ) : (
            <h2 style={{ display: "inline", color: "#000" }}>
              Lorem ipsum dolor{" "}
            </h2>
          )}
        </li>
        {current == 3 ? (
          <p
            style={{
              borderLeft: "1px solid #000",
              padding: "3rem",
              paddingTop: "1rem",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            facilis iure repellat eius ipsa veniam amet, cum, autem cupiditate
            cumque obcaecati quia necessitatibus repudiandae, eum saepe nemo non
            debitis ad officia ipsam architecto voluptate corrupti. Explicabo
            aliquam illo quae officiis eum quos dolorum, nobis accusamus
            necessitatibus nostrum suscipit? Commodi, ex. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto facilis iure repellat eius
            ipsa veniam amet, cum, autem cupiditate cumque obcaecati quia
            necessitatibus repudiandae, eum saepe nemo non debitis ad officia
            ipsam architecto voluptate corrupti. Explicabo aliquam illo quae
            officiis eum quos dolorum, nobis accusamus necessitatibus nostrum
            suscipit? Commodi, ex.
          </p>
        ) : null}
        <li
          id="4"
          onClick={(e) => {
            setCurrent(parseInt(e.target.id));
          }}
        >
          {current == 4 ? (
            <h2 style={{ display: "inline", color: "#33bf8b" }}>
              Lorem ipsum dolor{" "}
            </h2>
          ) : (
            <h2 style={{ display: "inline", color: "#000" }}>
              Lorem ipsum dolor{" "}
            </h2>
          )}
        </li>
        {current == 4 ? (
          <p
            style={{
              borderLeft: "1px solid #000",
              padding: "3rem",
              paddingTop: "1rem",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            facilis iure repellat eius ipsa veniam amet, cum, autem cupiditate
            cumque obcaecati quia necessitatibus repudiandae, eum saepe nemo non
            debitis ad officia ipsam architecto voluptate corrupti. Explicabo
            aliquam illo quae officiis eum quos dolorum, nobis accusamus
            necessitatibus nostrum suscipit? Commodi, ex. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto facilis iure repellat eius
            ipsa veniam amet, cum, autem cupiditate cumque obcaecati quia
            necessitatibus repudiandae, eum saepe nemo non debitis ad officia
            ipsam architecto voluptate corrupti. Explicabo aliquam illo quae
            officiis eum quos dolorum, nobis accusamus necessitatibus nostrum
            suscipit? Commodi, ex.
          </p>
        ) : null}
        <li
          id="5"
          onClick={(e) => {
            setCurrent(parseInt(e.target.id));
          }}
        >
          {current == 5 ? (
            <h2 style={{ display: "inline", color: "#33bf8b" }}>
              Lorem ipsum dolor{" "}
            </h2>
          ) : (
            <h2 style={{ display: "inline", color: "#000" }}>
              Lorem ipsum dolor{" "}
            </h2>
          )}
        </li>
        {current == 5 ? (
          <p
            style={{
              borderLeft: "1px solid #000",
              padding: "3rem",
              paddingTop: "1rem",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            facilis iure repellat eius ipsa veniam amet, cum, autem cupiditate
            cumque obcaecati quia necessitatibus repudiandae, eum saepe nemo non
            debitis ad officia ipsam architecto voluptate corrupti. Explicabo
            aliquam illo quae officiis eum quos dolorum, nobis accusamus
            necessitatibus nostrum suscipit? Commodi, ex. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto facilis iure repellat eius
            ipsa veniam amet, cum, autem cupiditate cumque obcaecati quia
            necessitatibus repudiandae, eum saepe nemo non debitis ad officia
            ipsam architecto voluptate corrupti. Explicabo aliquam illo quae
            officiis eum quos dolorum, nobis accusamus necessitatibus nostrum
            suscipi
          </p>
        ) : null}
      </ul>
    </Container>
  );
}
