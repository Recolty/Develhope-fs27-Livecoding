import "./App.css";
import { Container } from "./Container";
import { JsxProp } from "./JsxProp";
import { TestProp } from "./TestProp";
import { Card } from "./Card";
import { Numbers } from "./Numbers";
import { NumbersProvider } from "./NumbersContext";

function App() {
  return (
    <>
      <Container>
        <Card>
          <p>Paragraph</p>
          <img
            src="https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65ea973aff8798ab070de71f_most%20beautiful%20landscapes%20in%20the%20world.webp"
            alt=""
          />
        </Card>
        <Card>
          <p>Paragraph</p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e7e22fea84d1844d8d7b678/1659009345579-R94AT8WGQBD1PUAZENZ2/unsplash-image-CbleD2WN6WI.jpg"
            alt=""
          />
        </Card>
      </Container>
      <JsxProp Component={<TestProp />} />
      <NumbersProvider>
        <Numbers />
      </NumbersProvider>
    </>
  );
}

export default App;
