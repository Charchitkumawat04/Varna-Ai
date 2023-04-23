import Layout from "../src/layout/Layout";
import TshirtScene from "../src/pages/TshirtScene";
import Canvas from '../src/canvas/index';
import Customizer from '../src/pages/Customizer';

const Kenburns = () => {
  return (
    <Layout pageName={"Home Kenburns"}>
    
    <br />
    <br />
    <br />
    <br />
      <div style={{backgroundColor:'grey'}}>
       <TshirtScene />
      <Canvas />
      
      <Customizer /> 
      </div>
      
      
     
    </Layout>
  );
};
export default Kenburns;
