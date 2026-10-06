let uploadedFiles = [];

document.getElementById('jsonInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    
    if (file) {
        const reader = new FileReader(); 
        
        reader.onload = function(e) {
            const jsonData = JSON.parse(e.target.result); 
            
            document.getElementById('tenderDetails').innerHTML = `
                <p><strong>Tender ID:</strong> ${jsonData.tender.tender_id}</p>
                <p><strong>Title:</strong> ${jsonData.tender.title}</p>
                <p><strong>Deadline:</strong> ${jsonData.tender.submission_deadline}</p>
            `;

            document.getElementById('requirementsSection').style.display = 'block';
            document.getElementById('pdfUploadSection').style.display = 'block';

            let requirements = jsonData.tender.requirements;
            requirements.sort((a, b) => a.order - b.order); 

            const tbody = document.getElementById('requirementsBody');
            tbody.innerHTML = ''; 

            requirements.forEach(req => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${req.order}</td>
                    <td>${req.title_en}</td>
                    <td>${req.mandatory ? 'Yes' : 'No'}</td>
                    <td>${req.has_expiry ? 'Yes' : 'No'}</td>
                `;
                tbody.appendChild(tr);
            });
        };
        
        reader.readAsText(file); 
    }
});

document.getElementById('pdfInput').addEventListener('change', function(event) {
    const files = event.target.files;
    
    for (let file of files) {
        if (file.type !== 'application/pdf') {
            alert(`Error: "${file.name}" is not a PDF! Only PDF files are allowed.`);
            continue;
        }
        
        uploadedFiles.push({ file: file, name: file.name });
    }
    
    renderPdfList();
    event.target.value = ''; 
});

function renderPdfList() {
    const listDiv = document.getElementById('pdfList');
    listDiv.innerHTML = '<h4>Uploaded Files:</h4>';
    
    uploadedFiles.forEach((item, index) => {
        listDiv.innerHTML += `
            <div style="margin-bottom: 5px; padding: 5px; border: 1px solid #eee; display: flex; justify-content: space-between;">
                <span>📄 ${item.name}</span>
                <button onclick="removeFile(${index})" style="color: red; cursor: pointer;">Remove</button>
            </div>
        `;
    });
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    renderPdfList();
}