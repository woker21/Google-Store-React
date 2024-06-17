import {ProdColors, ProdPrice,Hr,Form,Select,SelectOption,InputButton,Colors,Blue,White,Gray,Sky,Lemon,Red, P, H1, Delivery, DeliveryP, DeliveryIcon, PBold,} from './styled-components'


const ProdDetail = () => {
  return (
    <>
    <ProdColors>
    <P>Choose a color</P>
      <Colors>
        <Blue/>
        <White/>
        <Gray/>
        <Sky/>
        <Lemon/>
        <Red/>
      </Colors>
    </ProdColors>
    <ProdPrice>
      <H1>229 €</H1>
      <Hr/>
      <Form>
        <Select>
          <SelectOption>1</SelectOption>
          <SelectOption>2</SelectOption>
          <SelectOption>3</SelectOption>
        </Select>
        <InputButton type='button' value='Add to cart'/>
      </Form>
      <Delivery>
      {""}
        <DeliveryIcon src='../../../public/img/icons/Delivery.svg'/>
          <DeliveryP>Delivers 29 Apr to</DeliveryP>
          <PBold>08023</PBold>
      </Delivery>
    </ProdPrice>
</>
);
}

export default ProdDetail;