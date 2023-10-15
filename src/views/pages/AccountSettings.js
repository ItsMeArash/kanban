import { Box, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Formik } from "formik";
import useAuth from "hooks/useAuth";
import MainCard from "ui-component/cards/MainCard";
import AnimateButton from "ui-component/extended/AnimateButton";

const AccountSettings = () => {
    const { user } = useAuth();

    const onSubmit = (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
    };
    return (
        <MainCard title="Account settings">
            <Formik
                initialValues={{
                    email: user.email,
                    firstname: user.name,
                    lastname: user.lastname,
                    password: "",
                    newPassword: "",
                    newPasswordConfirmation: "",
                }}
                onSubmit={(values, { setErrors, setStatus, setSubmitting }) => onSubmit(values, { setErrors, setStatus, setSubmitting })}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="firstname">First name</InputLabel>
                            <OutlinedInput
                                id="firstname"
                                type="text"
                                value={values.firstname}
                                name="firstname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="First name"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="lastname">Last name</InputLabel>
                            <OutlinedInput
                                id="lastname"
                                type="text"
                                value={values.lastname}
                                name="lastname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Last name"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                type="text"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type="password"
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Password"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="newPassword">New password</InputLabel>
                            <OutlinedInput
                                id="newPassword"
                                type="password"
                                value={values.newPassword}
                                name="newPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="New password"
                                inputProps={{}}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 4 }}>
                            <InputLabel htmlFor="newPasswordConfirmation">New password confirmation</InputLabel>
                            <OutlinedInput
                                id="newPasswordConfirmation"
                                type="password"
                                value={values.newPasswordConfirmation}
                                name="newPasswordConfirmation"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="New password confirmation"
                                inputProps={{}}
                            />
                        </FormControl>
                        <Box>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Update profile
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </MainCard>
    );
};

export default AccountSettings;
