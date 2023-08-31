import { Container } from "react-bootstrap";

const NoPage = () => {
  return (
    <Container fluid style={{ height: "100vh", width: "100wh", alignItems: "center", backgroundColor: "#282c34" }} className="p-0 d-flex">
      <h1 className="mx-auto" style={{ textAlign: "center", color: "white" }}> Error 404 <br />Page Not Found</h1>
    </Container >
  );
};

export default NoPage;