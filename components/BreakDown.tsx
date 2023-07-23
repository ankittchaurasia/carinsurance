import { Text, Button, Table, Divider, Modal } from '@mantine/core';
import { CircleCheck } from 'tabler-icons-react';
const StateTax = { "Ohio":5.75, "Illinois":6.25, "Indiana":7 }
import { useDisclosure } from '@mantine/hooks';

function AmortizationTable({amt, interest, installments}:any){
    const monthlyInterestRate = interest / 12 / 100; // Convert annual interest to monthly rate
    const PVIFA = (1 - (1+monthlyInterestRate)**(-installments)) / monthlyInterestRate; // Present Value Interest Factor of Annuity
    const monthlyInstallment = amt / PVIFA
  
    let balance = amt;
    let data = [];

    for (let month = 1; month <= installments; month++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyInstallment - interestPayment;
      balance -= principalPayment;
      data.push({
        month, monthlyInstallment, interestPayment, principalPayment,  balance:  balance < 0 ? 0 : balance,
      });
    }

    return(
        <Table>
            <thead>
                <tr>
                <th>Month</th>
                <th>Installments</th>
                <th>Interest Paid</th>
                <th>Principal Payment</th>
                <th>Balance Left</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row:any) => (
                    <tr key={row.month}>
                        <td>{row.month}</td>
                        <td>${row.monthlyInstallment.toFixed(2)}</td>
                        <td>${row.interestPayment.toFixed(2)}</td>
                        <td>${row.principalPayment.toFixed(2)}</td>
                        <td>${row.balance.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}


export default function BreakDown({display, state}:any){
    const [opened, { open, close }] = useDisclosure(false);

    return(
    <>
        <Text id="estimationtext" style={{display:'flex', alignItems:"center"}} fw="bold" c="violet"><CircleCheck /> <span style={{marginLeft:"10px"}}>Estimations</span></Text>
        <Text>Your Estimated Car Insurance Premium Price is <span style={{fontWeight:"bold", fontSize:"1rem"}}>${display[0]}</span></Text> 
        <Text mt={20} fz="xl" fw={700}  td="underline">BreakDown</Text>
        <Table mt={20}>
            <caption style={{textAlign:'left'}}>A] Section 1 (OD)</caption>
            <tbody>
            <tr>
                <td>Own Damage</td>
                <td>${display[1]['OD'].toFixed(1)}</td>
            </tr>
            <tr>
                <td>Add ons</td>
                <td> - </td>
            </tr>
            </tbody>
        </Table>
        <Divider mt={10} />
        <Table mt={20}>
        <caption style={{textAlign:'left'}}>B] Section 2 (Liability) | <i>Fixed As per {state} Govt</i></caption>
            <thead>
                <tr>
                    <th>Liability</th>
                    <th>Coverage</th>
                    <th>Premium</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bodily Injury</td>
                    <td>$25,000 Per Person upto $50,000 per accident</td>
                    <td>${display[1]['bodilyInjury'].toFixed(1)}</td>
                </tr>
                <tr>
                    <td>Property Damage</td>
                    <td>$20,000 per accident</td>
                    <td>${display[1]['propertyDamage'].toFixed(1)}</td>
                </tr>
            </tbody>
        </Table>
        <Divider mt={10} />
        <Table mt={20}>
        <caption style={{textAlign:'left'}}>C] Section 3 State Tax ({(StateTax as any)[state || 'Ohio']}% as per {state} State)</caption>
            <tr>
                <td>Sales Tax </td>
                <td>${display[1]['StateTaxAmount'].toFixed(1)}</td>
            </tr>
        </Table>
        <Divider mt={10} />
        <Table mt={20}>
        <caption style={{textAlign:'left'}}>D] Total Payable (A] + B] + C])</caption>
            <tr>
                <td>Total </td>
                <td><strong>${display[0]}</strong> / year </td>
            </tr>
        </Table>
        <Divider my={10} />
        <Text id="emitext" c="dimmed">Want to Pay in Installments? <Button onClick={open} variant='outline' color="teal" compact>Check Here</Button></Text> 
        <Modal size="md" opened={opened} onClose={close} centered title="Amortization Table (6% interest rate)" styles={{title:{fontWeight:"bold"}}}>
            <AmortizationTable amt={Number(display[0])} interest={6} installments={12} />
        </Modal> 
    </>
    )
}