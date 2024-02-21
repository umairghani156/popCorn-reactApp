import { Col, Row } from "antd";
import { Flex, Input } from "antd";

const Navbar = ({inputValue, setInputValue}) => {
  console.log("inputValue", inputValue);
    return(
        <Row style={{border:"1px solid black",display: "flex", justifyContent: "space-between", alignItems: "center",padding:"0 10px", backgroundColor:"#5a37d1"}}>
        <Col >
          <div
            style={{
              
            }}
          >
            <h2 style={{color:"#d5c4fe", margin:"8px 0"}}><span style={{fontSize:"25px"}}>🍿</span> usePopcorn</h2>
            
          </div>
        </Col>
        <Col>
        <Flex vertical gap={12} style={{width:"300px", }}>
              <Input className="inputBar" onChange={(e)=> setInputValue(e.target.value)} style={{backgroundColor:"#6e45f1", color:"#d5c4fe"}}  placeholder="Search movies..." />
            </Flex>
        </Col>
        <Col>
        <p style={{color:"#c5beeb"}}>Found 0 top result</p>
  
        </Col>
      </Row>
    )
}
export default Navbar