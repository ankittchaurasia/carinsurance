import { Group, Avatar, Text, Select, Card, SimpleGrid, Alert, Button } from '@mantine/core';
import { stateData, result as data, flags, car_models, basePricefromModel } from '@/data/result';
import { useState,useEffect, forwardRef } from 'react'
import { AlertCircle } from 'tabler-icons-react';
import BreakDownComp from './BreakDown';

const CarMakeData =  Object.keys(data['Car Company']).map((item:string)=>{
    const itemlower = item?.toLowerCase();
    return { value: item, label:item, image: (flags as any)[itemlower]?.logotype.uri}
})

const flattened:any = {};
Object.values(data).forEach((innerObj) => {
    Object.entries(innerObj).forEach(([key, value]) => {
    flattened[key] = value;
    });
});

const itemComp = forwardRef( ({value,image, ...others}:any, ref)=>(
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} radius="xl" size="sm"  />
        <Text size="sm">{value}</Text>
      </Group>
    </div>
))

function BreakDown(premium:number, state:string | null){
    
    const StateTax = { "Ohio":5.75, "Illinois":6.25, "Indiana":7 }
    const StateTaxAmount = premium * (StateTax as any)[state || 'Ohio'] / 100;
    const bodilyInjury = premium * 0.10;
    const propertyDamage = premium * 0.08;
    const OD = premium - (StateTaxAmount + bodilyInjury + propertyDamage);

    return { StateTaxAmount, bodilyInjury, propertyDamage, OD }
    
}

export default function Calculator() {

    //useStates
    const [error, setError] = useState<any[]>(new Array(6).fill(false));

    const [gender, setGender] = useState<string | null>(null);
    const [education, setEducation] = useState<string | null>(null);
    const [occupation, setOccupation] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [carMake, setCarMake] = useState<string | null>(null);
    const [carModel, setCarModel] = useState<string | null>(null);
    const [display, setDisplay] = useState<any>(null);

    useEffect(()=> setCarModel(null) ,[carMake])
    
    function Calculate(){
        
        const stateVariables = [gender, education, occupation, state, carMake, carModel];
        const nullIndexes = stateVariables.map((variable, index) => !variable ? index : -1).filter(index => index !== -1);
        if(nullIndexes.length){
            let errorCopy = [...error];
            nullIndexes.forEach(index => errorCopy[index] = "Required Field");
            setError(errorCopy);
            return;
        }else{
            setError(new Array(6).fill(false));
        }
        let weight_sum = 0;
        stateVariables.forEach((variable:any) =>{
            weight_sum = weight_sum + flattened[variable]
        });
        const BasePrice = (basePricefromModel as any)[carModel || '93']; //as 93 represent avg so fallbacked it
        const percentage = 0.05;
        const price = BasePrice * percentage * (1 + weight_sum)
        console.log(BasePrice, percentage, weight_sum)
        setDisplay([price.toFixed(2), BreakDown(price, state)])
    }

    return(
    <SimpleGrid cols={2} spacing="md" breakpoints={[{maxWidth:'36rem' ,cols:1, spacing:'sm'}]}>
        <Card shadow="lg" radius="md" p={30} style={{minHeight:'30rem'}}>
            <Card.Section>
                <Text align="center" size="lg" fw="bold">Your Details</Text>
                <Select error={error[0]} value={gender} onChange={setGender} label="Gender" placeholder="Specify your Gender" data={ Object.keys((data as any)['Gender']) }  />
                <Select error={error[1]} value={education} onChange={setEducation} label='Education' placeholder="Your Education Level" data={ Object.keys((data as any)['Education']) }  />
                <Select error={error[2]} value={occupation} onChange={setOccupation} label='Occupation' placeholder='Your Occupation' data={ Object.keys((data as any)['Occupation']) }  />
                <Select error={error[3]} value={state} onChange={setState} label="State" placeholder="Select your State" data={stateData} itemComponent={itemComp}  />
            </Card.Section>
            <Card.Section mt={40}>
                <Text align="center" size="lg" fw="bold">Car Details</Text>
                <Select searchable error={error[4]} value={carMake} onChange={setCarMake} label="Car Make" placeholder="Select your Car Company" data={CarMakeData} itemComponent={itemComp} />
                <Select error={error[5]} value={carModel} onChange={setCarModel} searchable label="Car Model" placeholder="Select your Car Model" data={carMake ? (car_models as any)[carMake] : []} />
            </Card.Section>
            <Card.Section mt={40}>
                <div style={{textAlign:'center'}}>
                     <Button onClick={Calculate}>Calculate</Button>
                    {display && <Button variant='outline' mx="md" onClick={() => { if (typeof window !== "undefined") window.print()}}>Print</Button> }
                 </div>
            </Card.Section>
        </Card>
        <Alert color={display ? 'violet':'red'} styles={{wrapper:{display:"block"}}}>
            {display ? <BreakDownComp display={display} state={state} /> :
            <>
            <Text style={{display:'flex', alignItems:"center"}} c="red"><AlertCircle/><span style={{marginLeft:"10px"}}>Please fill in the details to get your premium</span></Text>
            </>
            }
        </Alert>
    </SimpleGrid>
    )
}