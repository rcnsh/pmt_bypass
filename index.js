if (window.location.href.includes('physicsandmathstutor.com/pdf-pages')) {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.has('pdf')) {
        const pdfValue = queryParams.get('pdf');
        window.location.href = decodeURIComponent(pdfValue);
    }
}