import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormControl, FormLabel, Button, Input, HStack, Box, Select, Textarea } from "@chakra-ui/react"
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Ticket() {
    const { handleSubmit, control, reset, formState: { errors, isLoading } } = useForm();

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
        console.log(data);
    }

    const clearForm = () => {
        const form = document.getElementById("form") as HTMLFormElement;
        form.reset();
        reset();
    }
    return (
        <form id="form" onSubmit={handleSubmit(onSubmitData)}>
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
                    name="ticketImage"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                        <FormControl>
                            <FormLabel>Attractment</FormLabel>
                            <Input
                                type="file"
                                accept='image/png,image/jpg,image/jpeg'
                                {...field}
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

    )
}
