export default function clearSelection() {
    if (window.getSelection) {
        if (window.getSelection().empty) {
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
            window.getSelection().removeAllRanges();
        }
    } else if (document['selection'] && document['selection'].empty) {
        try {
            document['selection'].empty();
        } catch (error) {
            //ignore IE bug
        }
    }
}
