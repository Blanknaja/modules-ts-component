/**
 * @class ExampleComponent
 */

 import * as React from "react";
  import styled from "styled-components";



 export type Props = { text: string };
 
 export default class ExampleComponent extends React.Component<Props> {
   render() {
     const { text } = this.props;
 
     return <TestStyle style={{ color: "red" }}>Hello {text} naja</TestStyle>;
   }
 }


const TestStyle = styled.div`
  width: 250px;
  height: 200px;
  background: purple;
`;