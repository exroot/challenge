import { useContext, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";

import { Navbar, Table, Loading, FilteredByFilename } from "./components";
import { Context } from "./context";

function App() {
  const { data, loading, error, getData } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      <Container
        style={{
          marginTop: "1rem",
        }}
      >
        {error && (
          <Alert variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p>An error has occurred</p>
          </Alert>
        )}
        <FilteredByFilename />
        {data && <Table data={data} />}
      </Container>
    </>
  );
}

export default App;
