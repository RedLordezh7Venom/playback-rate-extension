document.addEventListener('DOMContentLoaded', () => {
    const filters = {
        'Grayscale': 'grayscale(100%)',
        'Sepia': 'sepia(100%)',
        'Invert': 'invert(100%)',
        'Reset': 'none'
    };

    const filterButtonsContainer = document.getElementById('filter-buttons');

    for (const filterName in filters) {
        const button = document.createElement('button');
        button.textContent = filterName;
        button.addEventListener('click', () => {
            window.parent.postMessage({ type: 'apply_filter', filter: filters[filterName] }, '*');
        });
        filterButtonsContainer.appendChild(button);
    }
});
