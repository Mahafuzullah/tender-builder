document.getElementById('jsonInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    
    if (file) {
        const reader = new FileReader(); 
        
        reader.onload = function(e) {
            const jsonData = JSON.parse(e.target.result); 
            
            // 1. Tender er details dekhano
            document.getElementById('tenderDetails').innerHTML = `
                <p><strong>Tender ID:</strong> ${jsonData.tender.tender_id}</p>
                <p><strong>Title:</strong> ${jsonData.tender.title}</p>
                <p><strong>Deadline:</strong> ${jsonData.tender.submission_deadline}</p>
            `;

            // 2. Requirements section ta visible kora
            document.getElementById('requirementsSection').style.display = 'block';

            // 3. Document er list k order onujayi sajano
            let requirements = jsonData.tender.requirements;
            requirements.sort((a, b) => a.order - b.order); 

            // 4. Table er vitore data gulo dhokano
            const tbody = document.getElementById('requirementsBody');
            tbody.innerHTML = ''; // aager kisu thakle clear kore nilam

            requirements.forEach(req => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${req.order}</td>
                    <td>${req.title_en}</td> <!-- Ekhn English nam ta dekhacchi -->
                    <td>${req.mandatory ? 'Yes' : 'No'}</td>
                    <td>${req.has_expiry ? 'Yes' : 'No'}</td>
                `;
                tbody.appendChild(tr);
            });
        };
        
        reader.readAsText(file); 
    }
});