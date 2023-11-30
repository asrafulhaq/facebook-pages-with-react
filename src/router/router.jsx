import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRoute";
import privateRouter from "./privateRouter";

// create router
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

//export
export default router;
