import { useState } from "react";

import { Formik } from "formik";
import useAuth from "hooks/useAuth";
import MainCard from "ui-component/cards/MainCard";

import { FormControl, OutlinedInput, InputLabel, Box, Button, Select, Chip, MenuItem } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}

const AddProject = () => {
    const [personName, setPersonName] = useState([]);
    const { user } = useAuth();
    const theme = useTheme();

    const onSubmit = (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
    };

    const changeHandler = (event) => {
        const {
            target: { value }
        } = event;
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
                    name: `${user.name} ${user.lastname}`,
                    // creationDate: Date.now(),
                    deadline: null
                }}
                onSubmit={(values, { setErrors, setStatus, setSubmitting }) => onSubmit(values, { setErrors, setStatus, setSubmitting })}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
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
                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="project-creator-name">Project creator name</InputLabel>
                            <OutlinedInput
                                disabled
                                id="project-creator-name"
                                type="text"
                                value={values.name}
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Project creator name"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-multiple-chip-label">Porject contributers</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={changeHandler}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {/* <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="project-create-date">Project Create Date</InputLabel>
                            <DatePicker disabled value={values.creationDate} slotProps={{ textField: { variant: "outlined" } }} />
                        </FormControl> */}
                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="project-deadline">Project deadline</InputLabel>
                            <DatePicker
                                onChange={(value) => setFieldValue("deadline", value.$d, false)}
                                value={values.deadline}
                                slotProps={{ textField: { variant: "outlined" } }}
                            />
                        </FormControl>
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Add Project
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
