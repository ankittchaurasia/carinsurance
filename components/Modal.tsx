import { Modal, List, Title } from '@mantine/core';

const NCB = (
<List>
  <List.Item>Eligibility for NCB requires no claims in the previous policy year.</List.Item>
  <List.Item>NCB can be accumulated up to a specified limit for consecutive claim-free years.</List.Item>
  <List.Item>Insured must have valid Driving License</List.Item>
  <List.Item>If a claim is made, NCB may reset to a lower level or be lost.</List.Item>
  <List.Item>Transferring insurance to a new vehicle may transfer NCB as well.</List.Item>
  <List.Item>NCB is non-transferable between policyholders.</List.Item>
  <List.Item>Proof of NCB from previous insurer must be provided for continuity.</List.Item>
  <List.Item>NCB discounts are applied at policy renewal.</List.Item>
  <List.Item>Terms and conditions subject to insurer's policy guidelines.</List.Item>
</List>
)

const RSA = (
<List>
  <List.Item>Available within a specified geographic area.</List.Item>
  <List.Item>Assistance provided for breakdowns, accidents, and emergencies.</List.Item>
  <List.Item>Service available 24/7, subject to service provider availability.</List.Item>
  <List.Item>Coverage includes towing, flat tire change, fuel delivery, and jump-start.</List.Item>
  <List.Item>Limited number of service calls per policy period.</List.Item>
  <List.Item>Exclusions may apply for certain types of accidents or misuse.</List.Item>
  <List.Item>Service provided by authorized network of service providers.</List.Item>
  <List.Item>Policyholder responsible for any costs beyond covered services.</List.Item>
  <List.Item>Terms and conditions subject to insurer's policy guidelines.</List.Item>
</List>

)


export default function ModalTC({open, close }:any) {
    return (
        <>
        <Modal
            opened={open}
            onClose={close}
            size="xl"
            title="Terms and Conditions"
            p="md"
        >
         <Title mb="xs">T&C for No Claim Bonus Addon</Title>
            {NCB}
            <Title mt="lg" mb="xs">T&C for Roadside Assistance Addon</Title>
            {RSA}
        </Modal>
        </>
    );
}
