import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        position: "absolute",
      }}
    >
      <Spinner animation="border" variant="danger" />
    </div>
  );
};
