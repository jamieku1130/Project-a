import React from "react";
import connect from "./connect";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  border-radius: 1px solid grey;
`;

const Link = ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active} style={{ marginLeft: "10px" }}>
    {children}
  </Button>
);

export default connect(Link);
