import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// routing
import Routes from "routes";

// defaultTheme
import themes from "themes";

// project imports
import NavigationScroll from "layout/NavigationScroll";
import { Toaster } from "react-hot-toast";

const App = () => {
    const customization = useSelector((state) => state.customization);

    const toasterProps = {
        position: "top-center",
        gutter: 12,
        containerStyle: { margin: "8px" },
        toastOptions: {
            success: {
                duration: 3000
            },
            error: {
                duration: 5000
            },
            style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#f3f4f6",
                color: "black"
            }
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CssBaseline />
                        <NavigationScroll>
                            <Routes />
                        </NavigationScroll>
                    </LocalizationProvider>
                </ThemeProvider>
            </StyledEngineProvider>
            <Toaster {...toasterProps} />
        </>
    );
};
export default App;
