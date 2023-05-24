/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormControl, FormLabel, Button, Input, HStack, Box, Select, Textarea, Image } from "@chakra-ui/react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../Firebase/firebaseconfig';

export default function Ticket() {
    const { handleSubmit, control, reset, formState: { errors, isLoading } } = useForm();
    // const [imageUpload, setImageUpload] = useState("");
    // const [isUpload, setIsUpload] = useState(false);
    const onSubmitData = (data: any) => {
        console.clear();
        toast.success("Your Ticket has been send!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // console.log(data);

        // console.log(data.ticketImage)
        // console.log(data.fileInput);
        uploadFile();
    }

    const clearForm = () => {
        const form = document.getElementById("form") as HTMLFormElement;
        form.reset();
        reset();
    }

    const storageRef = ref(storage);
    // const imageStorage = ref(storageRef, "subFolder/")

    const uploadFile = async () => {
        const inputRef = document.getElementById("fileInput") as HTMLInputElement;
        const file = inputRef.files!?.[0];
        const imageRef = ref(storageRef, file.name);
        if (file) {
            // console.log("file Exists");
            await uploadBytes(imageRef, file).then((snapshot) => { console.log("uploadded!") })
            clearForm();
        }
    }

    // const downloadFile = () => {
    //     const pathRef = ref(storage, "men-cloth.png")
    //     getDownloadURL(pathRef).then((url) => { setImageUpload(url); setIsUpload(true) })
    // }

    return (
        <Box>
            <form id="form" onSubmit={handleSubmit(onSubmitData)}>
                <ToastContainer />
                <Box p="20px">
                    <Controller
                        name="senderName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <FormControl isRequired isInvalid={Boolean(errors["senderName"]!)}>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" {...field} />
                                {/* <FormErrorMessage>
                            {errors["senderName"]!&&<p>{String(errors["senderName"]?.message)}</p>}
                        </FormErrorMessage> */}
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="senderEmail"
                        control={control}
                        defaultValue={""}
                        render={({ field }) => (
                            <FormControl isRequired isInvalid={Boolean(errors["senderEmail"])}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" {...field} />
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="ticketSubject"
                        control={control}
                        defaultValue={""}
                        render={({ field }) => (
                            <FormControl isRequired isInvalid={Boolean(errors["ticketSubject"])}>
                                <FormLabel>Subject</FormLabel>
                                <Input type="text" {...field} />
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="ticketDescription"
                        control={control}
                        defaultValue={""}
                        render={({ field }) => (
                            <FormControl isRequired isInvalid={Boolean(errors["ticketDescription"])}>
                                <FormLabel>Description</FormLabel>
                                <Textarea {...field} />
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="ticketPriority"
                        control={control}
                        defaultValue={""}
                        render={({ field }) => (
                            <FormControl isRequired isInvalid={Boolean(errors["ticketPriority"])}>
                                <FormLabel>Priority</FormLabel>
                                <Select {...field} placeholder="please select priority level">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="fileInput"
                        control={control}
                        defaultValue={null}
                        
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel>Attractment</FormLabel>
                                <Input
                                    pl="0"
                                    pt="5px"
                                    ml="0"
                                    id="fileInput"
                                    border="none"
                                    type="file"
                                    accept='image/png,image/jpg,image/jpeg'
                                    onChange={(event) => {
                                        const file = event.target.files?.[0];
                                        field.onChange(file);
                                    }}
                                />
                            </FormControl>
                        )}
                    />
                    <Box>
                        <HStack justifyContent={"space-around"} mt={"20px"}>
                            <Button colorScheme='teal' isLoading={isLoading} type="submit">Submit</Button>
                            <Button colorScheme='teal' onClick={clearForm}>Clear Form</Button>
                        </HStack>
                    </Box>
                </Box>
            </form>

            {/* <Input type="file" id="fileInput" />
            <Box display={"flex"} justifyContent={"space-around"}  p="20px">
                <Button colorScheme={"teal"} onClick={uploadFile}>Upload File</Button>

                {isUpload &&
                    <Image src={imageUpload} alt="fileUpload" />
                }
                <Button colorScheme={"green"} onClick={downloadFile}>get File?</Button>
            </Box> */}
        </Box>

    )
}
