import { useState, useEffect } from "react";

import { Formik } from "formik";
import useAuth from "hooks/useAuth";
import MainCard from "ui-component/cards/MainCard";

import { FormControl, OutlinedInput, InputLabel, Box, Button, Select, Chip, MenuItem, TextField } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@mui/material/styles";
import { useReadUsers } from "hooks/useReadUsers";
import { useCreateProject } from "./useCreateProject";

const AddProject = () => {
    const { isCreating, createProject } = useCreateProject();
    const { user } = useAuth();
    const [personName, setPersonName] = useState([`${user.id}. ${user.name} ${user.lastname}`]);
    const theme = useTheme();

    let { users } = useReadUsers();
    users = users.sort((a, b) => a.id - b.id);

    const getCurrentDate = () => {
        const currentDate = new Date();

        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate().toString().padStart(2, "0");
        const year = currentDate.getFullYear();

        const formattedDate = `${month}/${day}/${year}`;

        return formattedDate;
    };

    const onSubmit = (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
        createProject({ ...values });
    };

    const changeHandler = (event, setFieldValue) => {
        const {
            target: { value }
        } = event;
        const selectedIDs = value.map((value) => +value.split(".")[0]);
        setFieldValue("contributors", selectedIDs);
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <MainCard title="Add new project">
            <Formik
                initialValues={{
                    title: "",
                    creatorName: user.id,
                    contributors: [user.id],
                    createDate: getCurrentDate(),
                    deadline: null,
                    description: ""
                }}
                onSubmit={(values, { setErrors, setStatus, setSubmitting }) => onSubmit(values, { setErrors, setStatus, setSubmitting })}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="project-title">Project title</InputLabel>
                            <OutlinedInput
                                id="project-title"
                                type="text"
                                value={values.title}
                                name="title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Project title"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="project-creator-name">Project creator name</InputLabel>
                            <OutlinedInput
                                disabled
                                id="project-creator-name"
                                type="text"
                                value={`${user.id}. ${user.name} ${user.lastname}`}
                                label="Project creator name"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel id="project-contributors-label">Porject contributors</InputLabel>
                            <Select
                                labelId="project-contributors-label"
                                id="project-contributors"
                                multiple
                                value={personName}
                                onChange={(event) => changeHandler(event, setFieldValue)}
                                input={<OutlinedInput id="select-multiple-chip" label="Porject contributors" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                            >
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={`${user.id}. ${user.name} ${user.lastname}`}>
                                        {`${user.id}. ${user.name} ${user.lastname}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="project-create-date">Project create date</InputLabel>
                            <OutlinedInput
                                disabled
                                id="project-create-date"
                                type="text"
                                value={values.createDate}
                                name="createDate"
                                label="Project create date"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <DatePicker
                                label="Project deadline"
                                onChange={(value) => setFieldValue("deadline", value.$d, false)}
                                value={values.deadline}
                                slotProps={{ textField: { variant: "outlined" } }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="project-description"
                                label="Project Description"
                                multiline
                                rows={4}
                                value={values.description}
                                onChange={(event) => setFieldValue("description", event.target.value)}
                            />
                        </FormControl>
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isCreating}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    {isCreating ? "Creating..." : "Add project"}
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </MainCard>
    );
};

export default AddProject;
