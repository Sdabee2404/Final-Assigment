import { IfcViewerAPI } from 'web-ifc-viewer';

// Create the viewer container
const viewerContainer = document.getElementById('viewer-container');

// Initialize the viewer
const viewer = new IfcViewerAPI({ container: viewerContainer });
viewer.axes.setAxes();
viewer.grid.setGrid();

// Function to load an IFC file (manual upload or predefined)
async function loadIfc(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const blob = new Blob([arrayBuffer]); // Convert ArrayBuffer to Blob
        const model = await viewer.IFC.loadIfc(blob);
        
        // Log model loading success
        console.log('IFC model loaded successfully!');
    } catch (error) {
        console.error('Error loading IFC model:', error);
    }
}

// Add file input for model upload
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.ifc';
fileInput.style.position = 'absolute';
fileInput.style.top = '10px';
fileInput.style.left = '10px';
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        loadIfc(file);
    }
});

// Add the file input to the viewer container
viewerContainer.appendChild(fileInput);

// Function to load a predefined IFC model
async function loadPredefinedModel() {
    const filePath = './model/townhome.ifc'; // Correct path to your model
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch IFC file: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer]); // Convert ArrayBuffer to Blob
        const model = await viewer.IFC.loadIfc(blob);

        // Log predefined model loading success
        console.log('Predefined IFC model loaded successfully!');
    } catch (error) {
        console.error('Error loading predefined IFC model:', error);
    }
}

// Load the predefined model on page load
loadPredefinedModel();
