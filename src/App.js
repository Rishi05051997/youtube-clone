import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed, VideoDetail, SearchFeed, ChannellDetail } from "./components/index";


const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannellDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App;
