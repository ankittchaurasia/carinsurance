import * as tf from '@tensorflow/tfjs';
import {useState} from 'react';
import Header from '@/components/Header'
import Picker from '@/components/Damage/FilePicker'
import {Title, Center, Alert, Skeleton } from '@mantine/core'
import Head from 'next/head';


export default function Detection(){

    const [model, setModel] = useState<any>(null);
    const [sevmodel, setSevModel] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [damage, setDamage] = useState<number>(0);
    const [severity, setSeverity] = useState<string>('');
    

    async function loadModel(){
        if(model) return model;
        let tfmodel = await tf.loadLayersModel('/cardamage/damage/model.json');
        setModel(tfmodel);
        return tfmodel;
    }

    async function loadsevModel(){
        if(sevmodel) return sevmodel;
        let tfmodel = await tf.loadLayersModel('/cardamage/severity/model.json');
        setSevModel(tfmodel);
        return tfmodel;
    }

    async function Predict() {
        const img = document.getElementById('uploadedimg') as HTMLImageElement;
        
        setLoading(true)
        const tfmodel = await loadModel();
        const tensor = tf.browser.fromPixels(img).toFloat();
        const resizedTensor = tf.image.resizeBilinear(tensor, [256, 256]); // Resize to model's input size
        const expandedTensor = resizedTensor.expandDims(); // Add a batch dimension
    
        const predictions = await tfmodel.predict(expandedTensor).data();
        let results = Array.from(predictions) as number[];
        setDamage(results[0])
        tensor.dispose();

        const tfmodel2 = await loadsevModel();
        const predictions2 = await tfmodel2.predict(expandedTensor).data();
        let results2 = Array.from(predictions2) as number[];
        const severity = ['Minor', 'Moderate', 'Severe']
        const maxindex = results2.indexOf(Math.max(...results2))
        setSeverity(severity[maxindex])
        console.log(results2)
        tensor.dispose();
        
        setLoading(true)
        
    }

    return(
        <>
        <Head>
            <title>Car Damage Detection</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
         </Head>
        <Header links={[{ link: '/', label: 'Home' }, { link: '#', label: 'About Project' },{ link:'/damage-detection', label: 'Damage Detection' }]} />
        <Center><Title mb="lg">Damage Detection</Title></Center>
        <Picker predict={Predict} />
        
        <Skeleton my="md" visible={!loading} >
        <Alert my="lg" variant='light' >
            <Center>
                <Title> Car is {damage < 0.51 ? 'Damaged': 'Not Damaged'}</Title>
            </Center>
            { damage < 0.51 && (
                <Center>
                    <Title> Car has {severity} damages</Title>
                </Center>
            ) }
        </Alert>
        </Skeleton>
        </>
    )
}