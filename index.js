const node = window.document.createElement('canvas');
const ctx = node.getContext('2d', {alpha: false});
const size = 2;

ctx.canvas.width = size;
ctx.canvas.height = size;

const okEmojies = ['©️', '®️', '♦️', '♥️', '♣️', '♠️', '☺️', '⏏️'];

const emojiSupport = (emoji) => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (!ctx) {
    return false;
  }

  const sizeText = size;

  ctx.clearRect(0, 0, size, size);

  ctx.font = `${sizeText}px Arial`;
  ctx.fillText(emoji, 0, 0);

  const textWidth = ctx.measureText(emoji).width;

  return (
    textWidth === sizeText ||
    (textWidth <= sizeText * 2 && textWidth === textWidth.toFixed()) ||
    (textWidth <= sizeText * 2.1 && textWidth >= sizeText * 2) ||
    textWidth === sizeText / 2 ||
    textWidth === sizeText + 1 ||
    textWidth < sizeText / 2 ||
    textWidth === sizeText * 2.5 ||
    /[\u0023-\u0039]\uFE0F?\u20E3/.test(emoji) ||
    okEmojies.includes(emoji)
  );
};

export {emojiSupport};
