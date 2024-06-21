import saveAs from './saveAs';

export default function exportCSV(csv, filename) {
    let blob = new Blob([csv], {
        type: 'application/csv;charset=utf-8;'
    });

    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + '.csv');
    } else {
        const isDownloaded = saveAs({ name: filename + '.csv', src: URL.createObjectURL(blob) });

        if (!isDownloaded) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
            window.open(encodeURI(csv));
        }
    }
}
