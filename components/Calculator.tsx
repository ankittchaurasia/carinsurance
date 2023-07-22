import { Group, Avatar, Text, Select, Card, SimpleGrid, Alert, Button } from '@mantine/core';
import { stateData, result as data, flags, label1 } from '@/data/result';
import { CircleCheck, Tex } from 'tabler-icons-react';
import { useEffect, useState, forwardRef } from 'react'

export default function Calculator() {
    
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

    //useStates
    const [error, setError] = useState<any[]>(new Array(6).fill(false));

    const [gender, setGender] = useState<string | null>(null);
    const [education, setEducation] = useState<string | null>(null);
    const [occupation, setOccupation] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [carMake, setCarMake] = useState<string | null>(null);
    const [carModel, setCarModel] = useState<string | null>(null);
    const [display, setDisplay] = useState<any>(null);
    

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
        const BasePrice = 25000;
        const percentage = 0.1;
        const price = BasePrice * percentage * weight_sum
        setDisplay(price.toFixed(2))
    }

    return(
    <SimpleGrid cols={2} spacing="md" breakpoints={[{maxWidth:'36rem' ,cols:1, spacing:'sm'}]}>
        <Card mt={15} shadow="lg" radius="md" p={30} style={{zIndex:100, minHeight:'30rem'}}>
            <Card.Section>
                <Text align="center" size="md">Your Details</Text>
                <Select error={error[0]} value={gender} onChange={setGender} label="Gender" placeholder="Specify your Gender" data={ Object.keys((data as any)['Gender']) }  />
                <Select error={error[1]} value={education} onChange={setEducation} label='Education' placeholder="Your Education Level" data={ Object.keys((data as any)['Education']) }  />
                <Select error={error[2]} value={occupation} onChange={setOccupation} label='Occupation' placeholder='Your Occupation' data={ Object.keys((data as any)['Occupation']) }  />
                <Select error={error[3]} value={state} onChange={setState} label="State" placeholder="Select your State" data={stateData} itemComponent={itemComp}  />
            </Card.Section>

            <Card.Section mt={60}>
                <Text align="center" size="md">Car Details</Text>
                <Select searchable error={error[4]} value={carMake} onChange={setCarMake} label="Car Make" placeholder="Select your Car Company" data={CarMakeData} itemComponent={itemComp} />
                <Select error={error[5]} value={carModel} onChange={setCarModel} searchable label="Car Model" placeholder="Select your Car Model" data={Object.keys(data['Car Model'])} />
            </Card.Section>
            <Card.Section mt={40}>
                <div style={{textAlign:'center'}}> <Button onClick={Calculate}>Calculate</Button> </div>
            </Card.Section>
        </Card>
        <Alert icon={<CircleCheck size="5rem" />} title="Estimations" color={display ? 'violet':'red'}>
            {display ? 
                <>
                <Text>Your Car Insurance Premium Price is<Text  fz="lg" fw={500}>${display}</Text></Text> 
                <Text c="dimmed">This is just an estimation, the actual premium may</Text>
                <Text mt={20} fz="xl" fw={700}>BreakDown</Text>
                <Text c="dimmed">Coming Soon...</Text>


                </> :
                <Text  c="dimmed">Please fill in the details to get your premium</Text>
            }
        </Alert>
    </SimpleGrid>
    )
}