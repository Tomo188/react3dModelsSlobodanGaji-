import Nav from "./components/Nav";
import JumboTrone from "./components/Jumbotrone";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";
function App() {
  const webgiViewerRef=useRef()
  const handlePreview=()=>{
    
    webgiViewerRef.current.triggerPreview()
  }
  const contentref=useRef()
  return (
   <div className="App">
    <Loader />
    <div id="content" ref={contentref}>
   <Nav />
   <JumboTrone />
   <SoundSection />
   <DisplaySection triggerPreview={handlePreview} />
    </div>
   <WebgiViewer contentRef={contentref} ref={webgiViewerRef} />
   </div>
  );
}

export default App;
