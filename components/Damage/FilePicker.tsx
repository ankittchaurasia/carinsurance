import {useState, useEffect, useRef} from 'react';
import { FileButton, Button, Group, Flex, Modal, Center } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import ReactCrop, {type Crop} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { Dropzone } from '@mantine/dropzone';
import { filenames } from '@/data/filenames';

const imgstyle:any = {objectFit:'scale-down', maxHeight:"300px"}

export default function Picker({predict}: {predict: () => void}){
    const [file, setFile] = useState<File | null>(null);
    const openRef = useRef<() => void>(null);
    const [image, setImage] = useState<any>(null); 
    const [crop, setCrop] = useState<Crop>({
        unit: '%', // Can be 'px' or '%'
        x: 0,
        y: 0,
        width: 32,
        height: 32
    })

    const [croppedImage, setCroppedImage] = useState<any>(null);
    const [opened, { open, close }] = useDisclosure(false);

    // const clearFile = () => {
    //     setFile(null);
    //     resetRef.current?.();
    // };

    const handleCrop = () =>{
        if (file && crop.width && crop.height) {
            // Perform cropping and generate cropped image data URL
            const canvas = document.createElement('canvas');
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
 
            const pixelRatio = window.devicePixelRatio;
            canvas.width = crop.width * pixelRatio;
            canvas.height = crop.height * pixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';
            
            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height,
            );
            
            // Converting to base64
            const base64Image = canvas.toDataURL('image/jpeg');
            setCroppedImage(base64Image);
        };
    }


    const cropfull = () => {
        const img = document.getElementById('modalimg') as HTMLImageElement;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        const base64Image = canvas.toDataURL('image/jpeg');
        setCroppedImage(base64Image);
        close();
    }

    useEffect(()=>{
        if(croppedImage) {
            try{
                predict()
            }catch(err){
                alert('Something went Wrong. Try again')
            }
        };
    }, [croppedImage])

    const loadRandom = () => {
        const random = Math.floor(Math.random() * filenames.length);
        const url = `/test/${filenames[random]}`;
        const img = new Image();
      
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          
          const base64Image = canvas.toDataURL('image/jpeg');
          setCroppedImage(base64Image);
        };
      
        img.src = url;
      };

    return(
        <>
        <Group position="center">
        <Button onClick={open}>Upload Image</Button>
        <Button onClick={loadRandom} variant="outline">Load Random Image</Button>
      </Group>

      { !opened && croppedImage && (
        <Center my="lg">
            <img id="uploadedimg" src={croppedImage} style={imgstyle}></img>
        </Center>
      )}
        <Modal opened={opened} onClose={close} title="Choose Image" size="xl">
                <Dropzone
                    h={100}
                    accept={{'image/*': []}}
                    openRef={openRef}
                    maxFiles={1}
                    onDrop={(e)=>setFile(e[0])}
                    activateOnClick={false}
                    styles={{ inner: { pointerEvents: 'all' } }}
        >       
                    <Group position="center">
                        <Button onClick={() => (openRef as any).current()}>Select files or Drop Here</Button>
                    </Group>
                </Dropzone>

            {file && (
                <>
                <Flex my="md" align='center' justify='center'>
                <Button mr="xs" onClick={cropfull}>Crop Full Image</Button>
                <Button ml="xs" onClick={()=>{handleCrop(); close()}}>Crop</Button>
                </Flex>
                <Center>
                    <ReactCrop crop={crop} onChange={setCrop} >
                    <img id="modalimg" src={URL.createObjectURL(file)}
                     style={imgstyle} 
                     onLoad={(e) => setImage(e.currentTarget)}
                     />
                    </ReactCrop>
                </Center>
                </>
            )}
        </Modal>
      </>
    )
}