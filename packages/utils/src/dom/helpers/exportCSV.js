export default function exportCSV(csv, filename) {
    let blob = new Blob([csv], {
        type: 'application/csv;charset=utf-8;'
    });

    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + '.csv');
    } else {
        let link = document.createElement('a');

        if (link.download !== undefined) {
            link.setAttribute('href', URL.createObjectURL(blob));
            link.setAttribute('download', filename + '.csv');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            csv = 'data:text/csv;charset=utf-8,' + csv;
            window.open(encodeURI(csv));
        }
    }
}
