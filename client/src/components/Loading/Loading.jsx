import ReactLoading from "react-loading"
import { Section, Title, Article, Prop, list } from "./generic";
import "./loading.css"

const Loading = () => {
    return ( <>
    

<Section>
    <Title>Loading...</Title>

      <Article>
        <ReactLoading type={"spin"} color="#fff" />
        <Prop></Prop>
      </Article>

  </Section>

    
    </> );
}
 
export default Loading;