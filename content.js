// 表示用のパネル（左上に固定）を作成
const displayBox = document.createElement('div');
displayBox.style.position = 'fixed';
displayBox.style.top = '10px';
displayBox.style.left = '10px';
displayBox.style.padding = '10px 15px';
displayBox.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
displayBox.style.color = '#ffffff';
displayBox.style.borderRadius = '8px';
displayBox.style.zIndex = '2147483647';
displayBox.style.fontFamily = 'sans-serif';
displayBox.style.fontSize = '14px';
displayBox.style.lineHeight = '1.5';
displayBox.style.display = 'none';
displayBox.style.pointerEvents = 'none';

document.body.appendChild(displayBox);

// バイト数を計算する関数（UTF-8でのバイト数）
function getByteCount(text) {
    return new Blob([text]).size;
}

// テキストの選択状態が変わるたびに実行されるイベントリスナー
document.addEventListener('selectionchange', () => {
    const selectedText = window.getSelection().toString();

    if (selectedText.length > 0) {
    const charCount = selectedText.length;
    const byteCount = getByteCount(selectedText);
    const spaceCount = (selectedText.match(/ /g) || []).length;
    
    // パネルに文字数・バイト数・スペース数をセットして表示
    displayBox.innerHTML = `文字数: ${charCount}<br>バイト数: ${byteCount} bytes<br>スペース数: ${spaceCount}`;
    displayBox.style.display = 'block';
    } else {
    // 選択が解除されたら非表示にする
    displayBox.style.display = 'none';
    }
});