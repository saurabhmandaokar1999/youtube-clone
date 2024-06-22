import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetail,ChannelDetail,SearchFeed } from './components'

const app = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'White'}}>
        <Navbar/>
        <Routes>
            <Route path="/" extract element = {<Feed />}/>
            <Route path="/video/:id" element={<VideoDetail />}/>
            <Route path="/channel/:id" element={<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
    </Box>
    </BrowserRouter>
);

export default app
